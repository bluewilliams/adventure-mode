---
type: companion
game: "{game-key}"
name: "{Name}"
status: alive          # alive | dead | departed | unknown
bond: neutral          # hostile | wary | neutral | warm | devoted
romance: none          # none | possible | developing | committed | ended
joined: {YYYY-MM-DD}
updated: {YYYY-MM-DD}
tags: [companion]
---

# {Name}

> Who they are in one line, as the player character would describe them.

## Aptitudes

| Brawn | Finesse | Wits | Presence | Grit |
|---|---|---|---|---|
| 2 | 2 | 2 | 2 | 2 |

## Conditions

```yaml
conditions: []
```

## Carrying

- {items; companions have their own inventory}

## Drives, fears, standards

- **Drive**:
- **Fear**:
- **Standards**: <!-- what they will refuse, what they respect; romance follows these, not player wishes -->

## Personal arc

- **Hook**:
- **State**:

## Bond history

<!-- Append bond-changing moments with log links. This is where the relationship lives. -->
- {YYYY-MM-DD} {what happened, which way it moved} - [[Log/{date} ({n})]]

## What they know

<!-- Companions cannot act on information they do not have. Track it. -->

## Advancement

<!-- Companions grow on the same engine (GAME.md, Progression): their own
     milestones, or the player investing an advance in them. -->

- {YYYY-MM-DD} {milestone or advance, with the moment that earned it}
