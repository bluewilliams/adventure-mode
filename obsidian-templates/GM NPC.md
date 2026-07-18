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


## Doctrine

<!-- The lens: how this character thinks, feels, weighs decisions. Not traits
     (mechanical), not knows: (facts). Status: standing | active | faded Day N.
     Append and amend, never delete - flipped statuses ARE the arc.
     Faded entries relocate VERBATIM to ## Archive at the bottom of this file
     at checkpoints (compression rule 4): arc stays readable, top stays NOW.
     Grown from the log: date + causing event on every shift. -->

- {principle or feeling} | since Day {N} | {standing|active} | context: {general} | src: event + log ref

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

## Drives

<!-- 1-3 live wants, checked every scene they are present (Initiative step). -->

- {drive}

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
     must be answerable by reading a line. Track knowledge of OTHER people,
     places, and events the same way once it matters (fact + date + channel:
     witnessed / told by X / rumor). Provenance pause before they speak:
     if no line and no plausible channel, they do not know it. -->

```yaml
knows:
  - "{fact}"            # {YYYY-MM-DD}, {witnessed | told by X | inferred}
believes:               # may be wrong
  - "{belief}"          # {YYYY-MM-DD}, {why they think so}
feels: "{current stance}"  # updated {YYYY-MM-DD}
```
