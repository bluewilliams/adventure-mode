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
#   acquired: "Log/{date} ({n}).md"
```

## Traits

<!-- Earned through play. Each cites the log entry that earned it. -->
- {Trait} - {what it means mechanically/fictionally} (earned: [[Log/{date} ({n})]])

## Inventory

<!-- If it is not on this list, the character does not have it. Count scarce things. -->
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

## Advancement

<!-- Milestones earned and advances spent (GAME.md, Progression). An audit
     trail of growth: every point of competence shows where it came from. -->

### Milestones

- {YYYY-MM-DD} {what was survived/achieved} - [[Log/{date} ({n})]] - {spent | unspent}

### Advances taken

- {YYYY-MM-DD} {new trait "..." | honed "..." to +3 | Aptitude +1 (2 advances) | scar retired | invested in {companion}}
