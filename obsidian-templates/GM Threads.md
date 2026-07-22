---
type: gm-threads
game: "{game-key}"
updated: {YYYY-MM-DDTHH:MM}
tags: [gm]
---

# GM Threads (SPOILERS)

<!-- The GM's hot cache: everything moving that the player cannot see. Kept
     current every turn where a clock ticks. Write-through rule 9: everything
     below lives under ## Active; finished threads move to ## Resolved as
     one-line summaries at every checkpoint sweep, and Resolved's oldest lines
     backfill-then-drop into their chapter once they stop echoing.
     EVERY LINE IS A BREADCRUMB: one dated line saying what the thread is and
     where its story lives (a chapter, a dossier) - a pointer to the memory,
     never a retelling of it. Connector: the beat's threads cargo maintains
     ## Active and ## Resolved in this grammar automatically. -->

## Active

<!-- - [active] {thread, one line} - {pointer, e.g. Log/02, [[NPCs/Ellis]]} -->

## Open mysteries

<!-- Questions the story has RAISED and not yet answered, one line each,
     pointing at where the truth lives (a gm/ file, a faction note) - never
     restating the truth here. The closure sweep and the seal walk this list. -->

## Clocks

```yaml
clocks:
  - name: "{what is counting down}"
    at: "{current}/{max} scenes|days"
    on_zero: "{what happens}"
    visible_to_player: false   # some clocks the player can feel; most they cannot
```

## Off-screen movement

- {faction/NPC} - {what they did since last checked; consequences accruing}

## Pending consequences

- {player action} -> {what the world is going to do about it, and when}

## Retired hooks

- {hook} - declined {n}x, resolving as: {outcome without the player}

## Quest states (GM view)

- {quest} - {true state incl. what the player has not learned}

## Resolved

- {YYYY-MM-DD / Day N} {what it was} - {how it ended}
