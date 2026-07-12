---
type: gm-threads
game: "{game-key}"
updated: {YYYY-MM-DDTHH:MM}
tags: [gm]
---

# GM Threads (SPOILERS)

<!-- The GM's hot cache: everything moving that the player cannot see. Kept current every turn where a clock ticks. -->

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
