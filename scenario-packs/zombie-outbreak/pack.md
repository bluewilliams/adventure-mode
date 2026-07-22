# WHITEOUT

A zombie outbreak pack for Adventure Mode. Northern Minnesota, deep winter, five weeks after the world went quiet.

## Manifest

```yaml
pack: whiteout
version: 0.1.0
genre: survival horror
tone: gritty
premise: "The infection came north with the evacuation convoys. Then the snow came, and nobody left."
player_role: "A survivor in and around Iron Lake, MN (pop. 4,300, formerly)"
question: "Does Iron Lake live to see the thaw?"
campaign: saga  # the thaw answers the Question; the world and whoever survives it go on
dials:
  lethality: high          # death is one bad night away
  scarcity: high           # ammo counted by the round, warmth is a resource
  dice: hidden
  menus: major
  pacing: slow-burn        # dread over splatter; quiet is never safe
death_rule: "Permadeath. A dead PC's story ends; the world and its consequences persist for the next character."
house_rules:
  - "Cold is a condition source: exposure clocks run outdoors, heat is shelter-gated"
  - "Noise is a resource: loud actions roll on the attention clock"
  - "Infection rules are GM-secret; the player learns them the hard way"
era:
  setting: "present day, outbreak year, rural Minnesota"
  exists: [firearms, vehicles, battery radios, generators, modern medicine (dwindling stock)]
  rare: [fuel, ammunition, working electronics, antibiotics and insulin, electricity (generator-only)]
  absent: [functioning power grid, internet, cell service, GPS you can trust, military response, resupply, any cure]
progression: trait-based (default)
requires: []
```

## Player-safe brief (what any survivor knows)

Five weeks ago the TV said the cities were being evacuated north. For three days Highway 53 was a river of headlights. Then the convoys stopped coming, the power died with the first big storm, and the dead started walking out of the snow.

You know what everyone in Iron Lake knows:

- **The dead walk.** Slow when cold, faster when they've fed or found warmth. They hear better than they see, and they do not stop.
- **A bite is a death sentence.** Everyone has seen it happen. Nobody agrees on how long it takes.
- **The cold kills you politely, the dead kill you loudly.** Winter is the other monster: minus twenty at night, storms that erase the roads, frostbite that takes fingers.
- **Iron Lake is not empty.** Chimneys still smoke in a few neighborhoods. People trade, hoard, rob, and pray. Some doors have fresh paint markings nobody will explain to you.
- **The radio isn't dead.** Sometimes, on 1610 AM, there's a voice. It reads names.

Character creation starts with three questions the GM will ask: who were you before, why are you still alive when better people aren't, and what (or who) do you have left to lose.

## Pregens (jump in now)

Skip the interview and be playing in a minute; who they are emerges at the table. Or build your own from the three questions above.

- **Erin Kowalski**, Iron Lake paramedic. Kept working for two weeks after the pay stopped; her ambulance is out of fuel somewhere on Route 7 and she thinks about it every day. Steady hands, empty med bag, knows every back door in town. She still owes Marta Kettunen for the winter tires.
- **Del Harmon**, wildlife guide and poacher. Knows the ice, the woods, and how to be unseen; town never liked him and the feeling was mutual. A rifle with nine rounds, a dog named June, and a sister somewhere on the radio's list of names.
- **Ruth Okafor**, high-school shop teacher. Built half the town's fences and one very good crossbow. Evacuation buses left with her students on them; she stayed to hold the school. Nobody came back for either of them.

## Starting situation

See `gm/starting-state.md`. The player character starts on day 36, low on everything, at the moment their current shelter stops being safe.
