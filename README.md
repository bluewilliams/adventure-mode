# Adventure Mode

Persistent, high-stakes tabletop-style campaigns with Claude as your Game Master, backed by an Obsidian vault so the world NEVER forgets.

Forked from [memory-mode-portable](https://github.com/bluewilliams/memory-mode-portable): the same tiered memory architecture that gives Claude Code continuity across work sessions, re-aimed at the oldest problem in AI-run RPGs - the DM who forgets your party, your wounds, and the villain's name the moment the context window rolls over.

## What you get

- **A GM with perfect memory.** Every NPC, wound, promise, debt, and canon fact is written to the vault as it happens. The hooded stranger in session 40 really is the trader you shorted in session 2.
- **Honest dice.** Rolls happen via a real random source, logged to an auditable ledger. The GM cannot fudge, in your favor or against.
- **Real stakes, roguelike legacy.** Conditions instead of hit points ("shot in the left thigh, can't sprint, bleeding" IS the mechanical state), permadeath by default, one bad decision can end it all. And when a character falls, the GM writes their epilogue, raises their memorial, and your next character enters the same world - where the grave is real, the debts are collectible, and somebody still grieves.
- **Death buys the truth.** When you want to know what happened AFTER - to the people you left in that last gunfight, the promises still loaded - `--aftermath` simulates the world forward on honest dice and writes it as your saga's final chapters. Seal the world and get the full truth, GM secrets included; or leave it open and send your next character into the aftermath.
- **A world that keeps score.** Realistic, grim, unforgiving - by design. The GM authors every place, object, and trunk's contents (you explore the world, you don't decorate it); attempts need their actual means; what you spend is deducted; things stay where you left them; hunger, sickness, and infection run on the same rules for you, your allies, and your enemies.
- **Your story becomes a book.** `--chronicle` exports the whole campaign as one readable saga assembled from the adventure log; `--share` crafts a spoiler-safe excerpt of tonight's best scene. A finished character leaves a finished book.
- **Choice menus, freeform always.** Numbered options at decision points for fast play (just type `3`), with "Something else" forever on the menu and free text first-class.
- **Party and romance.** Companions with their own wounds, drives, standards, arcs, and bonds that move through play. They can love you. They can die.
- **A living sandbox.** Factions act on timelines whether you engage or not. Avoid the main plot forever and the world stays interesting; ignored villains win things; new NPCs and plotlines are improvised mid-game and persisted so they can come back years later.
- **Learnable secrets.** Villains have weaknesses seeded for discovery. What you know is tracked separately from what is true; investigation genuinely pays.
- **Scenario packs.** A game world is a folder of markdown: premise, factions, GM secrets, arcs, dials. Share a pack by sharing the folder. Build your own with Session Zero, where the GM interviews you and compiles a world.
- **Obsidian as your character sheet.** Open the vault while you play: live character sheet, quest journal, party status, adventure log, and a graph view of everyone you have ever met.

## Requirements

- A Claude account with [Claude Code](https://claude.com/claude-code)
- [Obsidian](https://obsidian.md) (free) - optional, but it is your game table
- This repo

## Quick start

```bash
git clone https://github.com/bluewilliams/adventure-mode.git
cd adventure-mode
./install.sh ~/AdventureVault
cd ~/AdventureVault
claude
```

Then say **`new game`** and pick a pack - jump straight in as one of its ready-made characters, or build your own through the in-fiction interview - or say **`session zero`** to build an original world together.

## Commands

Type **`--help`** at any time (even mid-scene) to see every table command with a one-line description; the GM shows the list out of fiction and returns to the scene without missing a beat. Commands also work as bare words when the message is nothing but the command - `help`, `save`, `stats` - but the `--` prefix is the guaranteed form: `--help` is always the command, even in a moment where the bare word would read as your character speaking ("help!" mid-fight is a shout, `--help` is the menu).

The highlights: `--help` (this list), `--save` (checkpoint now), `--recap` (where were we), `--sheet` (your character), `--stats` (spoiler-free campaign stats table, safe to screenshot and compare), `--party`, `--journal`, `--rolls` (audit the dice), `--advance` (spend advances), `--tavern` (switch campaigns), `--pause`, and "off the record" (step outside the fiction to talk). Commands manage the table; none of them can touch the world's state - that is only ever earned in play.

## The vault

```
YourAdventureVault/
  CLAUDE.md            # turns Claude Code into the GM in this folder
  GAME.md              # the GM protocol (the constitution)
  game-config.json     # active game, player limits, default dials
  _Tavern.md           # every campaign: live, paused, and fallen
  Packs/               # scenario packs (worlds you can start or share)
  Games/{game}/        # one folder per campaign
    Game.md            #   campaign overview + dials
    Scene.md           #   the current scene (hot state)
    Character.md       #   your sheet: conditions, inventory, traits, bonds
    Party/  NPCs/      #   companions and people as YOU know them
    Quests/ Canon/ Log/ #  journal, established facts, session-by-session record
    GM/                #   SPOILERS. You agree not to look. (You'll be tempted.)
  System/Templates/    # note templates
  scripts/roll.sh      # the dice
```

**The GM/ folder is honor system.** Secrets, villain agendas, hidden clocks, and the dice ledger live there so the GM can keep a persistent world behind the curtain. Peek and you only rob yourself. The dice ledger (`GM/Rolls.md`) is the exception: read it whenever you like; that is what it is for.

**Spoiler-proofing your screen**: secret rolls write silently to the ledger, GM file names never reveal content, and the GM avoids narrating its secret bookkeeping. Two one-time settings finish the job: keep thinking collapsed (or off) while playing, and in Obsidian add `GM` to Settings > Files & Links > Excluded files so search, graph view, and backlinks never surface a spoiler by accident.

## Ships with

- **WHITEOUT** - survival horror. Northern Minnesota, five weeks after the evacuation convoys stopped, deep winter. The dead slow down in the cold. Spring is coming.
- **OMERTA** - crime drama. Brickport, NJ, 1979. Start as an associate on the fringe of the Marchetti family with five contacts and a first job; the ladder goes up forever, and so does the drop. Build your standing, or your own family.
- **HOLLOWCROWN** - dark high fantasy. A frontier province above a dead dwarven deep-realm whose sealed doors are opening from below. Overworld intrigue between three factions, a living megadungeon underneath, companions worth dying for, and a kingdom in mourning at the bottom of the world. No resurrection. Ever.
- **FARWAKE** - dark space epic. Thirty star systems strung on a dying alien gate network, and a region full of species who all arrived too late. Be a spacer, a colonist, a clerk, a scholar; earn a ship or call one home. Faction politics one bad season from war, space and ground exploration, first contact as the real treasure, and a reason the gates are dying that changes everything. The vacuum of space does not roll dice.

## Many games, one vault

Every campaign lives in its own `Games/{game}/` folder with its own character, NPCs, secrets, and state. Nothing bleeds between games. Run the zombie winter and the mob ascension side by side:

- **Resume**: the GM resumes your active game automatically and mentions any others at the table.
- **Switch**: say `tavern` (or `switch`) anytime: you get a numbered menu of every campaign with where-you-left-off lines, plus options to start fresh. Switching checkpoints the outgoing game first; nothing is ever lost mid-scene.
- **Start new**: say `new game` to pick from `Packs/`, or `session zero` to build an original world with the GM interviewing you - genre, tone, factions, villains, dials - and compiling it into a pack you (or anyone) can replay and share.

## Adding worlds (no repo required)

`Packs/` in YOUR vault is user space. The repo's packs are just starters copied in at install. To add a world:

- **Drop a folder in.** Any pack folder placed in `Packs/` is immediately playable: `pack.md` plus a `gm/` folder is the whole format.
- **Build one at the table.** Session Zero output compiles straight into `Packs/{name}/`.
- **Share by copying.** Zip a pack, send it to a friend, they drop it in their vault. Cloud players use `--eject-pack` / `--import-pack` instead (see Sharing a world below). Contributing packs back is welcome but never needed.

## Tone

Default is gritty and adult: real violence with real aftermath, moral ambiguity, scarcity, grief, romance written like grown-up fiction. Packs can dial to heroic or pulp. Player content limits, once stated, are respected absolutely.

## Plays nicely with memory-mode

If you also run [memory-mode-portable](https://github.com/bluewilliams/memory-mode-portable) (or any global memory system), Adventure Mode suspends it inside game vaults: the vault's CLAUDE.md declares precedence, so game events never leak into your work vault, session notes, or user profile. Working ON this repo is a normal project; playing IN a vault is hermetically sealed. The two systems share DNA but never share state.

## Playing on other surfaces

Adventure Mode is built for Claude Code (it needs file read/write for memory and a shell for honest dice). Browser/mobile play against the same vault is on the roadmap via MCP.

## Sharing a world

A pack is just a folder in `Packs/`, and packs travel four ways:

- **`--eject-pack {name}`** (cloud): your GM stages the pack under a share code and hands you two things - a code a friend can redeem, and a download link serving a GitHub-ready zip.
- **`--import-pack {code or GitHub link}`** (cloud): redeems a friend's code, or imports any public GitHub folder containing a `pack.md`. Copied server-side, so the `gm/` secrets never touch your chat - you can play what you import, unspoiled.
- **`packs`** / **`browse packs {genre}`** (cloud): searches the community catalog from inside the game.
- **Copy the folder** (local): zip it, send it, drop it in `Packs/`.

The community shelf lives at [adventure-mode-packs](https://github.com/bluewilliams/adventure-mode-packs) - eject your pack, PR it into a genre folder, and every player can find it from inside their game. Standout packs get pulled into the base game with credit; that path runs through the registry (see its CONTRIBUTING for format and terms).

## License

MIT
