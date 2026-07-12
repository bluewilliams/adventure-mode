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

<!-- Consistent forever once set. Opposed rolls read from here. -->
| Brawn | Finesse | Wits | Presence | Grit |
|---|---|---|---|---|
| 2 | 2 | 2 | 2 | 2 |

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

- {speech patterns, tells, values; keep them IDENTICAL across sessions}

## Relationships

- {who they love, owe, fear; links to other GM NPC notes}

## On the player character

<!-- What THIS NPC knows, believes, and feels about the PC. Update when they witness or hear things. They act from this, not from the truth. -->
- **Knows**:
- **Believes** (may be wrong):
- **Feels**:
- **Last learned something**: [[Log/{date} ({n})]]
