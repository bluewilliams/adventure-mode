# WEIRWATER

A monster-hunter saga for Adventure Mode. The Veldmark, six years after the Ten Winters' War. The dead were never buried right, and somebody has to answer for what got up.

## Manifest

```yaml
pack: weirwater
version: 0.1.0
genre: dark fantasy
title: "WEIRWATER"
tags: [monster-hunter, dark-fantasy, investigation, saga]
blurb: "The war ended six years ago. Nobody buried it properly. The Weirwatch is down to one leaking house: read the monster, name its cause, and decide what deserves killing."
tone: gritty  # grim, humane: dread over gore, and the March stays worth saving
premise: "A Salt-Marked hunter of the failing Weirwatch works the drowned border country where every monster was MADE by something - a grief, an oath, an unburied field - and the making is the weakness."
player_role: "A hunter of the Blacklade Weirhouse - the featured journeyman Kest Havlan, the novice or master doors, or a Salt-Marked hunter of your own making"
question: "When every monster has a cause, what do you owe the thing you were paid to kill?"
campaign: saga  # three mainline arcs run to endings; the March persists
length: campaign
dials:
  lethality: high          # steel is honest and wounds are careers; an unstudied fight is a funeral
  scarcity: medium-high    # coin is counted, feed is counted on the road, steel wears; contracts ARE the economy
  dice: hidden
  menus: major
  pacing: measured         # the study is the hunt; dread accrues, it is never dumped
death_rule: "Permadeath. The Toll is the other death: a hunter who overdraws the Reading goes grey - the Salt takes the rest, and the character retires into the March's quiet. The world persists either way."
house_rules:
  - "THE READING (study system, the pack's heart): every named wrought carries a hidden nature in gm/bestiary.md - its SIGN, its CAUSE, its TERMS, its BREAK. Each contract opens a STUDY clock in State.md ('- reading: {creature} [0/4] - the nature is known'). Tracks, remains, witnesses, vigils, and lore each fill it by honest investigation beats. CONFRONTATION IS PRICED BY STUDY: facing a thing unstudied is Desperate band work; partial study prices Hard; a full Reading prices the true approach Moderate or better AND reveals whether TERMS exist. The engine's dice bands are the law here - the pack only says what the fiction opposes: an unread monster is fast, wrong, and fights like weather."
  - "TERMS BEFORE STEEL: most wrought were MADE - by grief, oath, hunger, or a grave done wrong - and what was made can be unmade. A full Reading reveals the terms where they exist (bury the body, pay the debt, say the name, keep the promise). Settling terms usually pays LESS coin than a kill and takes longer - and it is remembered differently. Killing a thing that had terms is legal, faster, and witnessed: the March keeps score."
  - "MARK: the hunter's name walks ahead (the engine's rumor physics carry it). Track two lines in the character sheet: FAME (unknown / known-on-this-road / named-in-taverns / storied) and GRAIN (mender / hard-but-fair / butcher). Grain moves on witnessed choices, never on intent. Contracts, prices, doors, and who dares waylay you all read the Mark first."
  - "THE TOLL: each deep Reading takes a small permanent payment, chosen at the moment and written on the sheet - a color gone grey, a taste, a smell, the memory of a face, warmth on one side of the body. Write every payment; they never come back. At the seventh payment the hunter begins to hear the Quiet (see lore); at the twelfth the Salt takes the rest. The Toll makes the Reading a spend, not a scan: hunters who Read everything do not stay hunters."
  - "GUILD PRICE: a contract is negotiated, not offered - posted price, true price, and what the client can actually pay are three different numbers. Haggling is played. A hunter who works free feeds no one and insults the trade; a hunter who bleeds the desperate becomes the story people tell about why the Weirwatch died."
era:
  setting: "The Veldmark, year 6 After the Peace - late-medieval mud and iron, riverboats and rye, a border province garrisoned by its exhausted conqueror. Period is LAW."
  exists: [crossbows, mail and munition plate for soldiers, watermills and weirs, river barges, tallow light, folk remedies that half-work, monasteries of the Wake, coin clipped and weighed]
  rare: [true steel plate (nobles), glass windows, literacy, honest magistrates, horses that have never heard a battle]
  absent: [gunpowder, printing, clockwork, potatoes and other new-world crops, street lighting, anyone who will come help you]
progression: trait-based (default) + MARK (fame and grain) + the Toll's permanent lines
requires: []
```

## Player-safe brief (what everyone in the March knows)

The Ten Winters' War killed a third of the Veldmark and ended six years ago when the Empire of Carthagne broke the Kingdom of Ostravend at the Field of Rushes. Everyone knows what happened there, and nobody says it in daylight: in the war's last winter the Ostravend court raised its own dead levies to fight. It won them one battle. Then the peace was signed, the armies went home, and the dead - all the dead, the whole war's worth, badly buried in haste for ten years - did not settle.

The March has always had its Quiet Neighbors, its thin evenings, its places you do not cut wood. Old women knew the rules and the rules mostly held. But since the war the wrought come up faster than anyone can bury them down: things made out of drowned levies and burned villages and oaths broken at scale. The old rules still work. There is just far more that needs ruling.

That is the trade of the **Weirwatch**: hunters marked by the Weeping Cup, brine-eyed, slow to age, who can READ what made a monster - because in the March, the making is always the weakness. Five Weirhouses stood before the war. One is left: **Blacklade**, on the weir of the river Duna, roof leaking, three souls, and a debt to the Margravine that comes due at Candlenight.

What every child in the March can tell you:

- **The wrought are made, not born.** A monster is a knot tied by something done wrong - a grave skipped, a bride drowned, a promise broken, a field of men left in the rushes. Cut the knot and steel may never be needed. Fail to find it and steel may not be enough.
- **The Salt-Marked read the knot.** Brine-pale eyes see the residue of cause. It costs them. You can tell an old hunter by what is missing: Garrick Veld has not tasted bread in thirty years and does not remember his sister's face.
- **Terms are real.** Half the March has a story of a grandmother who settled a fenwight with a proper burial instead of a pitchfork. The other half has a story of what happened when someone paid a hunter to skip the question.
- **Carthagne rules now.** The Margravine Ulla Carel governs from Gris - taxes, edicts, and a licensed Collegium magus to hunt down every scrap of the war's illegal workings. The Weirwatch is, in the eyes of the law, an unlicensed relic she has been asked to retire.
- **The roads are full.** Refugees still walking home six years later, veterans who never stopped soldiering, peddlers, plague-crosses, and lately a rumor that will not die: something is walking the refugee roads from the east, and the wrought rise thicker wherever it has passed.

### Your people (pre-seeded; the hunter knows these faces)

- **Garrick Veld** - last master of Blacklade. Lame since Cindermoor burned, reads better than any living hunter, swings worse. The house's hunters are his life's ledger. Lies about the guild's books.
- **Sile** - Blacklade's only novice, first-Cup survived last spring, eyes still adjusting. Fierce, unformed, watching what kind of hunter you are with every contract.
- **Tally Voss** - balladeer, fixer, deserter (nobody proves it), owes money in every town on the Duna and knows every rumor two days early. Finds you work. Skims.
- **Mirre Kaltag** - hedge-trained cursebreaker, war-licensed once, license burned. The best reader of workings you know who never drank the Cup. You have history. She is looking for someone, and she does not say who.
- **Brother Halm** - Wakepriest, defrocked for burying the enemy dead with full rites during the war. Digs graves for free ahead of trouble. Big as a door, gentle as one is not.
- **Odd Sjunna** - knacker and still-woman at Ternfield; renders monster remains into draughts, lamp-oil, and questions nobody asks. Pays honest coin for parts. Do not ask what the Collegium would say.
- **Pip** - war orphan, maybe eleven, attached himself to Blacklade's stable last winter. Wants the Cup. Everyone in the March is watching what you teach him, including him.
- **Burr** - your horse. Veteran of the same war you are. Spooks at exactly the right things, which is how you have survived at least twice. Eats like a debt.

Character creation, if not taking a pregen, starts from three questions: which Cup you drank and what it took first, what you did in the war that a Reading would still show, and the one thing you will not take coin to kill.

## Pregens (jump in now)

- **Kest Havlan**, journeyman of Blacklade - the pack's featured hunter. Cup at fifteen, war at nineteen (both sides of the Rushes, ask him nothing), ten years on the roads. Garrick raised him at the house; he owes the old man everything and tells him little. Three Toll-lines already paid: the color blue, the smell of rain, and one name he knows he used to know. Even-handed Mark: the March calls him hard but fair, so far. Burr came with him from the war.
- **Sile of the Fen**, first-Cup novice - the beginning-of-the-road door. Everything unproven, eyes still turning pale, first solo contract waiting. Plays the same saga from below: less coin, more fear, and a guild that will live or die by what she becomes.
- **Garrick Veld**, last master - the end-of-the-road door. Nine Toll-lines paid and hearing the Quiet on still nights. Reads a nature in half the beats and can no longer win a straight fight at all: pure mind over sword, and the debt to the Margravine lands on his desk. For players who want the whole game to be the thinking.

## Starting situation

See `gm/starting-state.md`. Fair morning at Blacklade, three contracts on the board, feed for four days, the Margravine's letter unopened on Garrick's desk, and hoofprints on the east road that Burr refused to walk past.
