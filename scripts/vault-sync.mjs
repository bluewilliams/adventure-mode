#!/usr/bin/env node
/**
 * Sync a local adventure-mode vault with a cloud vault, via the connector's
 * own MCP API. Doubles as the backup tool (pull to a dated directory).
 *
 *   node scripts/vault-sync.mjs status                 # what's in the cloud vault
 *   node scripts/vault-sync.mjs push [--game KEY] [--force]
 *   node scripts/vault-sync.mjs pull [--game KEY] [--out DIR] [--force]
 *
 * Defaults: vault ~/Documents/AdventureVault, url = production /mcp.
 * Push refuses to overwrite existing cloud files without --force; pull
 * refuses to overwrite local files without --force (use --out for backups).
 * Synced set: _Tavern.md, game-config.json, Games/** and user-authored Packs/**.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { homedir } from "node:os";

const args = process.argv.slice(2);
const cmd = args[0];
const opt = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};
const has = (name) => args.includes(name);

// Vault: --vault flag, else cwd if it looks like a vault, else the default install path.
const VAULT =
  opt("--vault") ??
  (existsSync(join(process.cwd(), "GAME.md")) ? process.cwd() : join(homedir(), "Documents", "AdventureVault"));
// Cloud URL: --url flag, else game-config.json's cloud.url.
function configUrl() {
  try {
    return JSON.parse(readFileSync(join(VAULT, "game-config.json"), "utf8"))?.cloud?.url ?? null;
  } catch {
    return null;
  }
}
const URL_ = opt("--url") ?? configUrl();
if (!URL_) {
  console.error("no cloud URL: set cloud.url in game-config.json or pass --url");
  process.exit(1);
}
const GAME = opt("--game");

let sessionId = null;
let msgId = 0;
async function rpc(method, params = {}, notification = false) {
  const body = { jsonrpc: "2.0", method, params };
  if (!notification) body.id = ++msgId;
  const res = await fetch(URL_, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/event-stream",
      ...(sessionId ? { "mcp-session-id": sessionId } : {}),
    },
    body: JSON.stringify(body),
  });
  sessionId = res.headers.get("mcp-session-id") ?? sessionId;
  if (notification) return null;
  const raw = await res.text();
  const data = raw.split("\n").find((l) => l.startsWith("data: "));
  return data ? JSON.parse(data.slice(6)) : JSON.parse(raw);
}
const call = async (name, a) => {
  const r = await rpc("tools/call", { name, arguments: a });
  const t = r.result?.content?.[0]?.text;
  if (t === undefined) throw new Error(`tool ${name} failed: ${JSON.stringify(r).slice(0, 200)}`);
  return t;
};

async function connect() {
  await rpc("initialize", {
    protocolVersion: "2025-03-26",
    capabilities: {},
    clientInfo: { name: "vault-sync", version: "0.1" },
  });
  await rpc("notifications/initialized", {}, true);
}

function localFiles() {
  const files = [];
  const wanted = (rel) =>
    rel === "_Tavern.md" ||
    rel === "game-config.json" ||
    rel.startsWith("Games/") ||
    rel.startsWith("Packs/");
  const walk = (dir) => {
    for (const name of readdirSync(dir)) {
      if (name.startsWith(".") || name === "System" || name === "GAME.md" || name === "CLAUDE.md") continue;
      const full = join(dir, name);
      if (statSync(full).isDirectory()) walk(full);
      else {
        const rel = relative(VAULT, full).replaceAll("\\", "/");
        if (wanted(rel) && !rel.endsWith(".bak")) files.push(rel);
      }
    }
  };
  walk(VAULT);
  return files.filter((f) => !GAME || !f.startsWith("Games/") || f.startsWith(`Games/${GAME}/`));
}

async function cloudFiles() {
  const listing = await call("list_files", { prefix: "" });
  if (listing === "(empty)") return [];
  // exclude bundled pack paths (they list but aren't user files); user pack files
  // can't be distinguished from bundle in the merged listing, so pull skips Packs/
  // unless --game is not set and the file isn't in the local bundle - keep simple:
  return listing.split("\n").filter((f) => f && !f.startsWith("Packs/"))
    .filter((f) => !GAME || !f.startsWith("Games/") || f.startsWith(`Games/${GAME}/`));
}

const isNotFound = (t) => t.startsWith("NOT FOUND:") || t.startsWith("VAULT ERROR:");

async function main() {
  if (!["push", "pull", "status"].includes(cmd)) {
    console.log("usage: vault-sync.mjs push|pull|status [--game KEY] [--vault DIR] [--out DIR] [--url URL] [--force]");
    process.exit(1);
  }
  await connect();

  if (cmd === "status") {
    const files = await cloudFiles();
    const tavern = await call("read_file", { path: "_Tavern.md" });
    console.log(`cloud vault: ${files.length} user files (Games/ + root)`);
    files.forEach((f) => console.log("  " + f));
    console.log("--- _Tavern.md:");
    console.log(isNotFound(tavern) ? "  (none)" : tavern.split("\n").slice(0, 20).join("\n"));
    return;
  }

  if (cmd === "push") {
    const files = localFiles();
    const remote = new Set(await cloudFiles());
    const conflicts = files.filter((f) => remote.has(f));
    if (conflicts.length && !has("--force")) {
      console.error(`refusing to overwrite ${conflicts.length} cloud file(s) without --force:`);
      conflicts.forEach((f) => console.error("  " + f));
      process.exit(2);
    }
    for (const f of files) {
      const content = readFileSync(join(VAULT, f), "utf8");
      const res = await call("write_file", { path: f, content });
      if (res.startsWith("WROTE")) console.log(`  pushed ${f}`);
      else if (res.includes("bundled starter pack")) console.log(`  skip   ${f} (bundled pack, already server-side)`);
      else console.error(`  FAILED ${f}: ${res}`);
    }
    console.log(`push complete: ${files.length} files`);
    return;
  }

  // pull
  const outDir = opt("--out") ?? VAULT;
  const files = await cloudFiles();
  const withTavern = [...files];
  const tavern = await call("read_file", { path: "_Tavern.md" });
  if (!isNotFound(tavern)) withTavern.push("_Tavern.md");
  let pulled = 0;
  for (const f of withTavern) {
    const content = f === "_Tavern.md" ? tavern : await call("read_file", { path: f });
    if (isNotFound(content)) { console.error(`  skip ${f}: ${content.split("\n")[0]}`); continue; }
    const dest = join(outDir, f);
    if (outDir === VAULT && existsSync(dest) && !has("--force")) {
      console.error(`  refusing to overwrite local ${f} (use --force or --out DIR)`);
      continue;
    }
    mkdirSync(dirname(dest), { recursive: true });
    writeFileSync(dest, content);
    console.log(`  pulled ${f}`);
    pulled++;
  }
  console.log(`pull complete: ${pulled} files -> ${outDir}`);
}

main().catch((e) => { console.error(e.message); process.exit(1); });
