#!/usr/bin/env bash
# Adventure Mode installer: initializes a game vault (a plain folder Obsidian can open).
# Usage: ./install.sh /path/to/YourAdventureVault
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VAULT="${1:-}"

if [[ -z "$VAULT" ]]; then
  echo "Usage: ./install.sh /path/to/YourAdventureVault"
  echo "The folder will be created if it doesn't exist. Open it as a vault in Obsidian."
  exit 1
fi

mkdir -p "$VAULT"/{Games,Packs,System/Templates,scripts}

copy_if_absent() { # user-owned files: never clobber
  local src=$1 dst=$2
  if [[ -e "$dst" ]]; then
    echo "  keep   ${dst#$VAULT/} (exists, user-owned)"
  else
    cp "$src" "$dst"
    echo "  create ${dst#$VAULT/}"
  fi
}

sync_system() { # system files (protocol, templates, dice): refresh on upgrade, .bak the old copy
  local src=$1 dst=$2
  if [[ ! -e "$dst" ]]; then
    cp "$src" "$dst"
    echo "  create ${dst#$VAULT/}"
  elif ! cmp -s "$src" "$dst"; then
    cp "$dst" "$dst.bak"
    cp "$src" "$dst"
    echo "  update ${dst#$VAULT/} (old copy at .bak)"
  else
    echo "  ok     ${dst#$VAULT/}"
  fi
}

echo "Installing Adventure Mode into: $VAULT"

# System-managed: upgrades flow in (your games and edits are never touched)
sync_system "$REPO_DIR/GAME.md"         "$VAULT/GAME.md"
sync_system "$REPO_DIR/scripts/roll.sh" "$VAULT/scripts/roll.sh"
chmod +x "$VAULT/scripts/roll.sh"
sync_system "$REPO_DIR/scripts/vault-sync.mjs" "$VAULT/scripts/vault-sync.mjs"
for t in "$REPO_DIR/obsidian-templates/"*.md; do
  sync_system "$t" "$VAULT/System/Templates/$(basename "$t")"
done

# User-owned: yours after first install
copy_if_absent "$REPO_DIR/CLAUDE.md.example"        "$VAULT/CLAUDE.md"
copy_if_absent "$REPO_DIR/game-config.json.example" "$VAULT/game-config.json"

for pack in "$REPO_DIR/scenario-packs/"*/; do
  name=$(basename "$pack")
  if [[ -d "$VAULT/Packs/$name" ]]; then
    echo "  keep   Packs/$name (exists)"
  else
    cp -R "$pack" "$VAULT/Packs/$name"
    echo "  create Packs/$name"
  fi
done

if [[ ! -e "$VAULT/_Tavern.md" ]]; then
  cat > "$VAULT/_Tavern.md" <<'EOF'
---
type: tavern
tags: [tavern]
---

# The Tavern

Every campaign, live and legendary. Ended games keep their rows; the Tavern is also a graveyard, and graveyards are lore.

## Games

| Game | Pack | Character | Status | Last played | Where things stand |
|---|---|---|---|---|---|

## Fallen characters

| Character | Game | Lived | Died of | Remembered for |
|---|---|---|---|---|
EOF
  echo "  create _Tavern.md"
else
  echo "  keep   _Tavern.md (exists)"
fi

echo ""
echo "Done. To play:"
echo "  1. Open $VAULT as a vault in Obsidian (optional but glorious)"
echo "  2. cd '$VAULT' && claude"
echo "  3. First time: say 'new game' (or 'session zero' to build a world)."
echo "     After that, just launch - the GM resumes your active game automatically."
echo "     'tavern' switches between campaigns anytime."
