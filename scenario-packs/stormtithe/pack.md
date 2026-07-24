# STORMTITHE

A generational clan-saga pack for Adventure Mode. The Tithe Vale, in the iron years. A hundred years ago every clan in this valley vanished in a single winter, and nobody remembers why. Now the clans are coming back. You lead one of them.

## Manifest

```yaml
pack: stormtithe
version: 0.1.0
genre: fantasy
title: "STORMTITHE"
tags: [clan-saga, mythic, generational, strategy, mystery]
blurb: "Lead a broken clan back into a valley emptied by a forgotten catastrophe. Seasons, herds, feuds, gods who collect debts in weather, and a crown nobody should want. Your chief will die. Your clan goes on."
premise: "A diminished clan takes land in the Tithe Vale beside four rival clans, three inhuman neighbors, and a hundred years of graves nobody can name. The gods tithe the living; the valley remembers what the living cannot."
player_role: "The CHIEF of Clan {named at creation} - first among the council, never above the law. You rule people who argue back."
question: "Can a broken clan raise the Vale's crown before the Silence comes back for it?"
campaign: saga  # chiefs die; the clan, and the Vale, go on
length: campaign  # the long game
scale: outfit   # the clan runs on the outfit layer from scene one: war-bands, herds, the seasonal ledger, the council
dials:
  lethality: high          # spears, winters, childbed, and the weather itself; nobody is plot-armored, including the chief
  scarcity: high           # wealth is counted in cattle, salt, iron, and hay-days; a bad harvest is a clock
  dice: hidden
  menus: major
  pacing: slow-burn        # a saga is measured in seasons and generations, not scenes
death_rule: "Permadeath - and SUCCESSION BY BLOOD OR MOOT. When the chief dies, the Legacy Ritual offers the torc: the named heir if one was groomed, else the council elects under pressure. Play continues as the clan, with the dead chief's oaths, debts, and enemies fully inherited. A saga outliving its founder is the point, not the exception."
house_rules:
  - "THE TITHE: every gain owes the gods a share, paid deliberately at the Reckoning (sacrifice, feast, release) or collected BY THE WEATHER with interest. Hoarded luck is a clock. The GM prices the tithe honestly; the storm's collections are exogenous events with a paper trail."
  - "GUEST-RIGHT (Halla's law): a guest under your roof is inviolable for three nights, and you under theirs. Breaking it is the one crime with no weregild - the Hundred Doors close, and every hall in the Vale knows within a season."
  - "WEREGILD, NOT MURDER (Skorn's ladder): a crofter is 4 cattle, a carl 8, a thane 16, a chief is war. Lawful killing pays; secret killing, kin-slaying, and refusing owed weregild are the deep crimes - outlawry, and the land spirits themselves harry the outlawed."
  - "OATHS UNDER SKY: an oath sworn under open sky is witnessed by Varek and RECORDED (promise ledger, always). Breaking one is not roleplay flavor - it re-prices the oath-breaker's every future word, and the storm remembers."
  - "NAMES HAVE WEIGHT: the Vale's dead lost their names to the Silence. Speaking a recovered true name aloud does things - at door-stones, in law, in quests. Names are inventory: found, traded, spent, and never counterfeit."
era:
  setting: "The Tithe Vale, iron-age highlands: longhouses, rune-posts, hill-forts. Period is LAW: no anachronisms. The gods are real the way weather is real - blessings and tithes move through omens, luck, and storm, never through fireballs."
  exists: [iron spears and seaxes, ring-mail for the very rich, oxcarts and drove roads, mead and salt-fish, rune-sticks and tally-marks, barrow-fields, hill-forts, the moot-stone circuit, ice roads in the Long Dark]
  rare: [horses fit for war, written law (Skorn's speakers memorize it), silver coin (cattle are money), true healers, anyone who can read the old rune-posts]
  absent: [wizards hurling spells, resurrection of any kind, maps of the high passes, mercy in the Long Dark, anyone who remembers the Silence - or so it is believed]
progression: trait-based (default) + the clan itself progresses (Running at Scale); heirs are groomed IN PLAY and inherit as playable chiefs
requires: []
```

## Player-safe brief (what every returning clan knows)

The Tithe Vale was the richest valley in the highlands: deep pasture, iron in the streams, a king-stone at its heart. A hundred years ago, in one winter, it emptied. No bodies burned, no war sung about, no survivors' tale - the clans of the Vale simply stopped being spoken of, everywhere, all at once. The elders call it **the Silence** and change the subject. For a hundred years no clan dared the passes.

Then Blind Aud walked out of the Vale - an old law-speaker nobody's grandmother remembers being young - and said the land was open again. Five clans followed her in. Yours was the last and least of them.

**What you have**: your people (fewer than you'd like), your herd (thinner than you'd like), a claim-stake of pasture along the Graywater with a barrow-field at its edge, and the torc your mother wore. **What everyone knows**:

- **Clan Vosk** takes. Raiders by creed - they say strength IS the tithe, and the weak owe it. Their chief, Ragnvald Vosk, has already ridden past your claim twice, counting your spears.
- **Clan Ittra** trades. Bridge-builders, match-makers, first to befriend and first to invoice. Nothing crosses the Vale without an Ittra toll or an Ittra marriage.
- **Clan Dreng** prays. The largest temple, the loudest piety, and a chief-priestess, Sigrun, who declares the crown of the Vale will be raised again - by the worthy.
- **Clan Mool** hungers. The most mouths, the worst land, the shortest patience. Whoever feeds Mool owns Mool - everyone knows it, nobody's rich enough to do it.
- **Clan Sarn** waits. Old blood, high pasture, few words. They claim descent from the Vale's last High King, and unlike most such claims, nobody laughs when they make it.
- **The Kilnborn** live under the east ridge: clay-bodied folk who fire their dead into the bricks of their halls, sell the best iron in the highlands, and remember everything - they traded with the Vale's clans before the Silence and will say so, for a price, in trade-goods and never in answers.
- **The barrows are not quiet.** The old clans' dead still walk the door-stones at dusk - not rotting horrors, just people, patient and wrong, who stop you and ask, politely, if you know their name. Nobody does. That is the worst part.
- **The rooks watch everything.** The Vale's rook-colonies talk - actually talk - and hire out as messengers and oath-witnesses. They are vain, greedy, easily insulted, and they NEVER forget a contract. Neither should you.

Blind Aud keeps the moot-stone circuit, advises every clan equally, and knows more than any living person about the Vale. Everyone trusts her. You should decide for yourself.

Character creation starts with three questions the GM will ask: what broke your clan before you came here (and who blames you for it), what your mother's torc obliges you to, and what you swore under open sky the day you took the pass.

## Pregens (jump in now)

Skip the interview and be playing in a minute; who they are emerges at the table.

- **Kettil Ashhand**, the reluctant war-chief. Buried a brother and a chief on the way to the Vale and wears the torc like a wound. The best spear in the clan and the last person who wants to use it. His council thinks grief makes him cautious. It makes him honest.
- **Thyra Nine-Lambs**, the priestess-chief. Hears Erda in the ground the way others hear rain coming, which is a blessing, and answers her back, which frightens people. Took the torc because the earth told her the Vale's soil is LYING about something. It is.
- **Orm Half-Ledger**, the debtor-chief. Traded the clan's way through the passes on Kilnborn credit and a smile; the first payment comes due at Harvest. Knows every price in the Vale except the one on his own ledger's last page, which is written in fired clay and does not burn.

## Starting situation

See `gm/starting-state.md`. The first Sowing. The plow opens your first field, and turns up a door-stone nobody knew was there. By dusk there is a dead woman standing at it, patient as winter, asking your name - and offering, in trade, to tell you what your barrow-field is actually full of. Ragnvald Vosk arrives tomorrow to "welcome" you. Blind Aud arrives tonight.
