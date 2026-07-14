---
type: gm-npc
game: "{game-key}"
name: "{Name}"
status: alive
faction: "{faction or none}"
updated: {YYYY-MM-DD}
tags: [gm, npc]
---

# {Name} (GM canon)

SPOILERS. Facts flagged `known: false` must never leak into player-facing material.
When a fact is earned in play: flip the flag here AND write it through to `NPCs/{Name}.md` with the log link.

## Aptitudes

<!-- Opposed rolls read from here. Changes ONLY via dated Growth entries below -
     an NPC never silently differs from their file. -->
| Brawn | Finesse | Wits | Presence | Grit |
|---|---|---|---|---|
| 2 | 2 | 2 | 2 | 2 |

## Growth

<!-- Dated, caused, earned (GAME.md: The world grows too). Assessed at world
     turns and reintroductions. Enemies learn the player's tricks here. -->
- {YYYY-MM-DD / Day N}: {what they lived} - {trait gained / lesson learned}

## Facts

```yaml
facts:
  - fact: "{public-ish fact}"
    known: true
  - fact: "{secret}"
    known: false
    discovery: "{how play could reveal it: observation / capture / social / exploration}"
```

## Weaknesses

```yaml
weaknesses:
  - weakness: "{exploitable weakness}"
    known: false
    discovery: "{path}"
```

## Agenda and timeline

- **Wants**:
- **If the player does nothing**:

## Voice and traits

- **Voice anchor**: {ONE line: cadence, vocabulary, a verbal tell. Read before they speak after time away.}
- {other traits, values; keep them IDENTICAL across sessions}

## Relationships

- {who they love, owe, fear; links to other GM NPC notes}

## On the player character

<!-- What THIS NPC knows, believes, and feels about the PC. They act from this,
     not from the truth. DATED entries, not prose: mid-scene "does she know?"
     must be answerable by reading a line. -->

```yaml
knows:
  - "{fact}"            # {YYYY-MM-DD}, {witnessed | told by X | inferred}
believes:               # may be wrong
  - "{belief}"          # {YYYY-MM-DD}, {why they think so}
feels: "{current stance}"  # updated {YYYY-MM-DD}
```
