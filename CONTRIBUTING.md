# Contributing to Adventure Mode

Two kinds of contributions land here: protocol/engine improvements to `GAME.md` and the templates, and **scenario packs** - new worlds anyone can play. This guide is mostly about packs, because that is where most contributors start.

## Contributing a scenario pack

PR your pack directly to this repo under `scenario-packs/{your-pack}/`. No separate community repo, no staging area: accepted packs ship to every cloud player in the next deploy, bundled read-only alongside the built-ins.

### Pack anatomy (match the existing packs)

```
scenario-packs/{your-pack}/
  pack.md              # manifest: premise, tone, dials, house rules, death rules, starting situation
  gm/                  # SPOILERS - the GM-only truth
    factions.md        #   factions with agendas and clocks
    npcs.md            #   named NPCs: drives, voice anchors, secrets with discovery paths
    secrets.md         #   the truths behind the campaign
    arcs.md            #   arc skeletons: hooks, escalation, multiple endings
    starting-state.md  #   day zero: where everything stands when play begins
```

The fastest way to produce one is to play Session Zero with your GM and polish the compiled output. A pack is just markdown; if it reads well and runs well, it qualifies.

### The quality bar (what makes WHITEOUT work)

Reviewers check for these before merging - build to them from the start:

1. **Factions with agendas, not plots.** Every named faction has a want, a clock, and an answer to "what happens if the player does nothing?" Agendas generate content forever; scripted plots run out.
2. **Secrets seeded at depths, each with a discovery path.** Every secret and villain weakness carries a plausible way play could surface it (observation, capture, social, exploration). A secret nobody can reach is a secret that does not exist.
3. **A starting situation already in motion.** The cold open should land the player in pressure, not in a lobby. Day zero has clocks already ticking.
4. **Death rules and dials declared.** Lethality, scarcity, tone, dice visibility - stated in `pack.md`, honored by the material.
5. **NPCs are people, not quest pins.** Drives (1-3 live wants), a voice anchor line, relationships to each other, and at least a few who have nothing to do with the main arcs.
6. **Multiple endings per arc skeleton.** Escalation beats, not scripts. If an arc only works one way, it is a railroad wearing a trench coat.
7. **Spoiler hygiene.** Player-safe material lives in `pack.md` only; everything in `gm/` may spoil freely, but nothing in `pack.md` may. File NAMES must not spoil either.
8. **House style.** No em dashes anywhere (use hyphens, colons, periods). Write factions and NPCs in the same compact, concrete voice as the existing packs.

### Review and merge

- Open a PR; a maintainer plays at least the opening sessions before merging. Fixable gaps get PR comments, not rejections.
- By submitting, you license your pack under this repo's MIT license (see README) and confirm it is your own work.
- Original settings only: no content from copyrighted worlds you do not own.
- Merged packs keep your name in `pack.md` as author. You can also share packs entirely outside this repo - zip the folder and send it; the repo is distribution, not gatekeeping.

## Contributing to GAME.md or the engine

Protocol changes are held to a higher bar: the document is engineered line by line against observed GM drift, and most rules exist because a playtest failed without them. Open an issue describing the play problem first - the maintainers run live campaigns and can usually test a proposal at a real table within days.
