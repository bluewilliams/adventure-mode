---
type: character
game: "{game-key}"
name: "{Name}"
status: alive        # alive | dead | unknown
created: {YYYY-MM-DD}
updated: {YYYY-MM-DD}
tags: [character]
---

# {Name}

> One-line identity: who this person was before, in their own words.

## Aptitudes

<!-- 1-5; 2 = ordinary, 4 = professional, 5 = exceptional. Creation spread 4/3/3/2/2. Move rarely, through play only. -->
| Brawn | Finesse | Wits | Presence | Grit |
|---|---|---|---|---|
| 2 | 2 | 2 | 2 | 2 |

## Conditions

<!-- The single source of truth for harm. Narration and mechanics are the same thing. -->
```yaml
conditions: []
# - name: "Gunshot, left thigh"
#   severity: serious          # scratch | hurting | serious | critical
#   effects: "No sprinting. Bleeding."
#   clock: "Worsens to critical in 3 scenes untreated"
#   acquired: "Day {N}, Log/{NN} {chapter}"
```

## Traits

<!-- Earned through play. Each cites the log entry that earned it. -->
- {Trait} - {what it means mechanically/fictionally} (earned: Day {N}, [[Log/{NN} {chapter}]])

## Inventory

<!-- If it is not on this list, the character does not have it. Count scarce things.
     Use is deduction: what a beat spends, breaks, or hands off is edited here in that
     same beat, and counts (ammo/food/meds/fuel) live in State.md as bare numbers. -->
- {item} - {detail, counts for ammo/food/meds}

## Bonds

| Who | Bond | Note |
|---|---|---|
| [[Party/{Name}]] | neutral | hostile / wary / neutral / warm / devoted |

## Drives and fears

- **Has left to lose**:
- **Private clock**:

## Scars and history

<!-- Permanent marks: healed wounds, debts, reputations. Append, never rewrite. -->


## Doctrine

<!-- The lens: how this character thinks, feels, weighs decisions. Not traits
     (mechanical), not knows: (facts). Status: standing | active | faded Day N.
     Append and amend, never delete - flipped statuses ARE the arc.
     Faded entries relocate VERBATIM to ## Archive at the bottom of this file
     at checkpoints (compression rule 4): arc stays readable, top stays NOW.
     PLAYER-OWNED: GM proposes lines, the player ratifies them. -->

- {principle or feeling} | since Day {N} | {standing|active} | context: {general} | src: player

## Advancement

<!-- Milestones earned and advances spent (GAME.md, Progression). An audit
     trail of growth: every point of competence shows where it came from. -->

### Milestones

- {YYYY-MM-DD} {what was survived/achieved} - Day {N}, [[Log/{NN} {chapter}]] - {spent | unspent}

### Advances taken

- {YYYY-MM-DD} {new trait "..." | honed "..." to +3 | Aptitude +1 (2 advances) | scar retired | invested in {companion}}
