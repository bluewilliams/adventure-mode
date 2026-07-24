# HOLLOWCROWN

A dark high-fantasy pack for Adventure Mode. A frontier province above a dead dwarven deep-realm, whose sealed doors have started opening from below.

## Manifest

```yaml
pack: hollowcrown
version: 0.1.0
genre: dark high fantasy (overworld sandbox + megadungeon)
tone: gritty
premise: "Three hundred years ago the dwarves of Karag Vhol sealed their own gates from the inside and were never heard again. Last spring, the doors began to open."
player_role: "A newcomer or local in the Grayreach, the frontier province above the Deeproads"
question: "What opened the sealed gates from below, and can anything close them again?"
campaign: saga  # the deep-realm answers; the province lives with the answer
length: campaign  # the long game
dials:
  lethality: high            # steel is fast, falls are far, the dark is patient
  scarcity: medium-high      # coin exists, but light, air, and trust are counted
  dice: hidden
  menus: major
  pacing: expedition rhythm  # breathe on the surface, spend yourself in the deep
death_rule: "Permadeath, and NO resurrection exists in this world, for anyone, at any price. Healing arts mend the living; the dead are dead. A dead PC's story ends; the world persists for the next character."
house_rules:
  - "Light is life: light sources are counted like ammunition (torches by the hour, oil by the flask). True dark below has its own event ladder and it is worse."
  - "The Deep listens: noise, light, and magic below ground feed an attention clock per tier. What answers depends on how deep you are."
  - "Magic is real, rare, and costly: every art has a price paid in conditions (fatigue, marks, attention). There are no free cantrips and no fireball economy."
  - "Depth is commitment: every tier down, retreat gets longer than daring. Track the way back like a resource."
era:
  setting: "pre-industrial high fantasy, late-medieval analog"
  exists: [steel and crossbows, water and wind mills, oil lamps and candles, the four named arts (hearth-craft, Lantern Rites, tunnel-singing, grave-speech), ancient dwarven mechanisms (found, never reproducible)]
  rare: [clockwork (dwarven relics), printing (hand presses), literacy, glass]
  absent: [gunpowder, steam power, electricity, mass production, resurrection, any magic outside the four named arts]
progression: trait-based (default); magical arts are traits with pack-defined prices
requires: []
```

## Player-safe brief (what anyone in the Grayreach knows)

The Grayreach is the crown's farthest province: barony towns, black pine wilds, and mountains full of dead dwarven doors. Three hundred years ago the deep-realm of Karag Vhol went silent in a single winter. No refugees, no bodies, no answers. Their great gates were found sealed FROM THE INSIDE, and the dwarves who lived on the surface then are the diaspora who live there still.

Six years ago the Ledger Company's deep-survey came back up from the Great Stair with core samples and a charter. Last spring, sealed doors nobody could ever open began standing open at dawn. Everyone knows:

- **The Deeproads are open, and they are a shortcut through the world.** A caravan that braves the Upper Galleries crosses the province in three days instead of three weeks. Fortunes are being made. Gate-toll is paid to the Ledger Company at Lanternwatch, the city built over the Great Stair.
- **Things come up.** Mostly it is nothing: cold air and old coins. Sometimes a delving crew comes back short a member and shorter on words. Twice this year, whole caravans came up wrong: alive, but stone-freckled, whispering in Old Vholic, a language none of them speak.
- **Three banners matter.** The Ledger Company owns the gates and hires anyone. The Vigil of the Last Door preaches that the seals were holy and every open door is a wound; their lantern-knights guard, heal, and increasingly interfere. The Reclaimants, dwarves of the diaspora, call the deeps their homeland and are going down to take it back.
- **Magic is real and it costs.** Hearth-craft wards a door or eases a fever. The Vigil's Lantern Rites make light that things below respect. Dwarven tunnel-singers shape stone with sound. And grave-speech is forbidden everywhere, for good reason.
- **Nobody who sleeps in the deeps dreams their own dreams.** Delvers pay for surface beds. Ask them why and they change the subject.

Character creation starts with three questions the GM will ask: who were you before the Reach called you, what do you carry that you cannot put down, and what has the dark already taken from you.

## Pregens (jump in now)

Skip the interview and be playing in a minute; who they are emerges at the table. Or build your own from the three questions above.

- **Corin Vale**, caravan guard, first season on the Deeproad runs. Surface-born, good with a spear, still flinches at true dark; took the work because his mother's farm owes the Ledger Company. Was in the gate plaza when the bells went wrong.
- **Sera Ashmoor**, lapsed lantern-novice. Left the Vigil over what Preceptor Halden did to a marked delver; her lantern arts still work, which frightens her more than it comforts. The Vigil considers her paperwork unresolved.
- **Dagmar Coalsworn**, Reclaimant smith of the diaspora. Forge-strong, deep-shy, carries her grandmother's door-key and no permission to use it. Signed on with a delver crew to see the homeland with her own eyes before the songs run out.

## Starting situation

See `gm/starting-state.md`. The player character starts on the day a caravan comes up the Great Stair with every soul aboard changed, and a dying carter presses something into their hand.
