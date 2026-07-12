# Adventure Mode

Persistent, high-stakes tabletop-style campaigns with Claude as your Game Master, backed by an Obsidian vault so the world NEVER forgets.

Forked from [memory-mode-portable](https://github.com/bluewilliams/memory-mode-portable): the same tiered memory architecture that gives Claude Code continuity across work sessions, re-aimed at the oldest problem in AI-run RPGs - the DM who forgets your party, your wounds, and the villain's name the moment the context window rolls over.

## What you get

- **A GM with perfect memory.** Every NPC, wound, promise, debt, and canon fact is written to the vault as it happens. The hooded stranger in session 40 really is the trader you shorted in session 2.
- **Honest dice.** Rolls happen via a real random source, logged to an auditable ledger. The GM cannot fudge, in your favor or against.
- **Real stakes.** Conditions instead of hit points ("shot in the left thigh, can't sprint, bleeding" IS the mechanical state), permadeath by default, one bad decision can end it all.
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

Then say **`new game`** and pick a pack, or **`session zero`** to build an original world together.

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

## Ships with

**WHITEOUT** - a survival-horror reference pack. Northern Minnesota, five weeks after the evacuation convoys stopped, deep winter. The dead slow down in the cold. Spring is coming.

## Tone

Default is gritty and adult: real violence with real aftermath, moral ambiguity, scarcity, grief, romance written like grown-up fiction. Packs can dial to heroic or pulp. Player content limits, once stated, are respected absolutely.

## Playing on other surfaces

Adventure Mode is built for Claude Code (it needs file read/write for memory and a shell for honest dice). Browser/mobile play against the same vault is on the roadmap via MCP.

## Sharing a world

A pack is just a folder in `Packs/`. Zip it, send it, PR it. Session Zero output compiles to the same format, so any world you build with your GM is instantly shareable.

## License

MIT
