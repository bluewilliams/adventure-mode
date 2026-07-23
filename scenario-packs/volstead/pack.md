# VOLSTEAD

A crime-empire pack for Adventure Mode. Calder Bay, on the Great Lakes, 1926. You are not climbing anyone's ladder. You are building your own - two guns, one bad corner, and a city already spoken for.

## Manifest

```yaml
pack: volstead
version: 0.1.0
genre: crime
title: "VOLSTEAD"
tags: [prohibition, gangsters, empire-building, strategy, politics]
blurb: "Run your own outfit in a 1926 lake city already carved up by three gangs, a bought city hall, and one honest federal agent. Booze, dope, rackets, elections - build an empire, go legit, or take the fall. Repeal is coming."
premise: "A new boss with a couple of loyal guns starts taking pieces of Calder Bay. Every racket is open, every ally has interests, and everything you build stands on a trade with an expiration date."
player_role: "The BOSS of a brand-new outfit - not a soldier, not an associate. You give the orders; your people carry them and carry tales."
question: "When Repeal comes - and it is coming - what is left standing under your name?"
campaign: saga  # the trade dies; Calder Bay, and whatever you became, does not
scale: outfit   # the outfit layer is live from scene one: units, Operations.md, the outfit command
dials:
  lethality: high          # guns are loud, rare, and permanent; the ladder of coercion exists because killing is expensive
  scarcity: medium         # money flows; TRUST, CLEAN MONEY, and GOOD MEN are the scarce resources
  dice: hidden
  menus: major
  pacing: slow-burn        # empires are built in weeks and lost in nights
death_rule: "Permadeath - and SUCCESSION. When the boss dies or takes a life sentence, the Legacy Ritual offers the chair to your underboss or a lieutenant: play continues as the outfit, weakened, with everyone remembering exactly how the last boss went. The person is gone forever; the thing you built fights on, or eats itself."
house_rules:
  - "HEAT is two-dial: the RATIO (illegal income vs legal cover - the Bureau and the tax men read the books) and the SPECTACLE (bodies, fires, headlines - the papers and City Hall read the streets). Discipline, fronts, and payoffs lower them; nothing lowers them fast."
  - "THE LADDER OF COERCION: intimidate -> raid -> smash -> beat -> torch/bomb/kill. Each rung up buys more compliance, more fear, more hate, and more heat. The GM prices every rung honestly; skipping rungs is a statement everyone hears."
  - "EVERY INSTITUTION IS PEOPLE: cops, judges, jurors, clerks, reporters, aldermen are named individuals with prices, limits, and grudges - bought one at a time, never as a class. The one who cannot be bought is worth knowing early."
  - "STAT MISMATCHES ARE REAL: the knife man sent to deliver a beating may deliver a corpse. Crews attempt orders with the competence they HAVE, not the competence the plan needs (Running at Scale: orders are missions)."
  - "ELECTIONS HAVE WINNERS: City Hall changes hands on real dates, votes are earned or bought precinct by precinct, and a rival outfit's man winning the mayoralty is a catastrophe you can see coming."
era:
  setting: "1926, Calder Bay - a Great Lakes port of ~400,000, six years into Prohibition. Period is LAW: no anachronisms in either direction."
  exists: [revolvers and shotguns, Thompson guns (rare and $2000), Model T and touring cars, candlestick telephones through switchboard operators who listen, telegraph, cash and paper ledgers, speakeasies behind everything, lake boats and ice roads in winter, unions, ward politics, newspapers twice a day]
  rare: [wiretaps, armored cars, honest juries, women in trousers, federal men who stay bought]
  absent: [police radio dispatch, reliable forensics, national crime databases, credit, air travel that matters, anyone who believes Prohibition is working]
progression: trait-based (default) + the outfit itself progresses (Running at Scale)
requires: []
```

## Player-safe brief (what a new boss knows)

Calder Bay: iron ore in, whiskey down from Canada across the water, and everything a port city with cheap cops and thirsty citizens implies. Six years of the Volstead Act have made more millionaires here than the mills ever did. The city runs on an arrangement everyone understands and nobody says aloud.

**The map, as the street knows it:**

- **The Brauer syndicate** holds Brickyard Row and half the Straight Mile. Old brewery money gone bootleg-industrial: Gustav Brauer's near-beer plants are the biggest legal breweries on the lake and the biggest illegal ones too, and his people look like lawyers because most of them are. Quiet, patient, rich. The word is Gustav is already planning for the day the trade ends.
- **The Carrick Gang** holds the Harbor, Canal Ward, and Pigeon Hill. Irish, tribal, wired into the dockworkers' local and half the police force. Mae Carrick - "the Widow" - took the gang over when her husband Declan was shot on the Fontaine dock three years ago, and took it somewhere harder. The Carricks blame Brauer for Declan. That feud structures the whole city.
- **The Sorrentino outfit** works the Flats and the nightlife: gambling, girls, and dope. Newest, hungriest, most violent. Carmine Sorrentino buys men the way other outfits buy trucks, and his tax collectors visit every corner business in the Flats - including, as of this week, yours.
- **City Hall** is Mayor Ambrose Quill's machine: aldermen with price tags, contracts for friends, a police chief who golfs with all three outfits. The reform crowd and the Temperance League make noise; the machine counts votes. There's an election in '27.
- **The law that matters** is small: the Bureau of Prohibition squad under **Agent Everett Cole**, who has never taken a dollar and has a photograph of every dock in the city; and the quieter men from the tax office, who ruined a Chicago boss last year with arithmetic. Everyone else has a price, individually.
- **Northside** runs its own world - policy banks, clubs, credit - under people the downtown outfits don't name in the papers. Smart bosses deal with Northside as neighbors. Stupid ones find out why the last stupid one moved away.
- **The supply** is the lake. Canadian export houses sell legally on their side; the water in between is where fortunes and bodies are made. Anyone can buy a case. Empires are built on the ROUTE.

You have: a corner in the 9th Ward nobody wanted, a couple hundred dollars, two or three people who answer to you, and a name that means nothing yet. Everything else is for the taking, from people who will notice.

Character creation starts with three questions the GM will ask: how you got this corner (and from whom), what you did before that men follow you for, and what line you won't cross - and what you already have.

## Pregens (jump in now)

Skip the interview and be playing in a minute; who they are emerges at the table.

- **Vico Marek**, ex-rum runner. The fastest boat on the south shore until the Carricks burned it; kept his route maps, his Canadian contacts, and a debt to the wrong lender. Two cousins crew for him. Wants the water back. The water remembers him.
- **Dora "the Duchess" Malloy**, speakeasy hostess. Ran the floor at the Emerald Room until her partner died holding a book of half the Straight Mile's private debts - which is now hers, if she can collect it before the people named in it decide she shouldn't. Knows every thirsty alderman by his first drink.
- **Teddy Grzeski**, mill foreman turned strike fixer. Broke a wildcat strike for the Brauers with six men and a rumor; got paid, got ambitious, got noticed. His six men still drink where he tells them to. The union hates him; the mills owe him; both feelings are useful.

## Starting situation

See `gm/starting-state.md`. Friday. The first shipment you ever paid for sits in a boathouse, somebody talked, Sorrentino's tax man calls at your corner tomorrow - and one of your own was offered double this morning to walk away.
