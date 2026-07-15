---
type: state
game: "{game-key}"
updated: {YYYY-MM-DDTHH:MM}
tags: [state]
---

# State

<!-- Mechanical truth ONLY. Numbers live here, prose lives elsewhere.
     Edit lines in place the moment a value changes; never append duplicates.
     When prose and this file disagree, this file is right. -->

## Date and time

- **Day**: {N}
- **Time of day**: {morning | midday | evening | night}

## Clocks

<!-- name [filled/size] - what fires at zero. World Turns tick THIS list. -->

- {clock name} [{0}/{6}] - {consequence at zero}

## Resources

- **Ammo**: {weapon}: {count}
- **Food**: {days} days
- **Meds**: {count / description}
- **Fuel**: {amount}
- **Cash/barter**: {amount}

## Agency counters

<!-- Scenes since each present companion/named NPC pushed their own agenda.
     Reset on action, increment on silence. 3 = overdue: next beat opens with
     them acting. -->

- {name}: 0

## Conditions

<!-- One line each, mechanical teeth noted. -->

- **{PC name}**: {condition - teeth, e.g. "sprained ankle: -2 Finesse on movement"}
- **{Companion}**: {condition or "fine"}
