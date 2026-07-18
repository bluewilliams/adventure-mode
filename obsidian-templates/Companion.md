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

<!-- Drives are LIVE: the Initiative step checks them every scene, and the
     agency counter in State.md tracks scenes since this companion pushed one. -->

- **Drive**:
- **Fear**:
- **Standards**: <!-- what they will refuse, what they respect; romance follows these, not player wishes -->

## Personal arc

- **Hook**:
- **State**:

## Bond history

<!-- Append bond-changing moments with log links. This is where the relationship lives. -->
- {YYYY-MM-DD} {what happened, which way it moved} - Day {N}, [[Log/{NN} {chapter}]]

## What they know

<!-- Companions cannot act on information they do not have. Track it. -->


## Doctrine

<!-- The lens: how this character thinks, feels, weighs decisions. Not traits
     (mechanical), not knows: (facts). Status: standing | active | faded Day N.
     Append and amend, never delete - flipped statuses ARE the arc.
     Faded entries relocate VERBATIM to ## Archive at the bottom of this file
     at checkpoints (compression rule 4): arc stays readable, top stays NOW.
     Grown from the log: date + causing event on every shift. -->

- {principle or feeling} | since Day {N} | {standing|active} | context: {general} | src: event + log ref

## Advancement

<!-- Companions grow on the same engine (GAME.md, Progression): their own
     milestones, or the player investing an advance in them. -->

- {YYYY-MM-DD} {milestone or advance, with the moment that earned it}
