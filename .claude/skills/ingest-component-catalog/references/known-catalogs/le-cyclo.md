# Le Cyclo catalogs processed so far

## Le Cyclo instruction/price leaflet (2 pages, c.1927, via disraeligears.co.uk)

- French "Changement de Vitesse" owner's/dealer instruction sheet with
  pricing, not a full catalog - but it's the earliest date evidence for
  any Cyclo derailleur/shifter/freewheel row in the DB (every existing one
  was completely undated).
- Describes Le Cyclo's 2- and 3-speed boxed sets, distinguished only by
  mounting support (A/B/C) and tension-pulley type (toothed vs Rosa
  flanged), never by any of the DB's existing named sub-lines (Route,
  Sport, Randonneur - also all bare/undated). Couldn't confidently map the
  mechanism onto any of those, so it got its own plain row instead of a
  guess.
- Dated 1927 and enriched: 6008 "Cyclo (double cable)" (Shifters) - the
  whole leaflet describes this exact double-cable, helical-drive control
  system; 2077 "Cyclo (2 speed)" (Freewheels) - "grand pignon 472" per the
  leaflet.
- New: 7270 "Cyclo (3 speed)" (Freewheels) - "grand pignon 347"; no
  existing row covered a 3-speed Cyclo freewheel at all. 7271 "Cyclo
  (double-cable system, 1927 leaflet)" (Rear Derailleurs) - the mechanism
  itself, with the leaflet's full pricing (Support A 87fr, Course/Rosa
  flanged Support C 95fr, Support B 110fr, standalone flanged tension
  pulley 20fr).
- Gotcha hit here: `component_detail.description` is `varchar(255)` and a
  `CONCAT`/literal insert past that silently truncates mid-word (MySQL's
  default SQL mode doesn't error on this) - 7271's first insert lost the
  Support B price and the tension-pulley accessory entirely. Caught by
  checking `LENGTH(description)` after loading; fixed by shortening the
  text, not by widening the column. Worth checking length on any
  catalog-enrichment description that's pushing close to 255 chars.

## Le Cyclo "Changement de Vitesse" catalog (12 pages, c.1932, via disraeligears.co.uk)

- Dated by internal evidence: "Créé en Avril 1924" plus race results
  through the 1931 Tour de France/Paris-Brest-Paris.
- Same double-cable helical-drive mechanism as the 1927 leaflet above, now
  2/3/4-speed plus a new **Cyclo-Tank** variant (demountable rear hub) not
  present in 1927. Every speed count comes in a toothed-tension-pulley or
  flanged-("Rosa")-pulley variant. Pricing is markedly lower than 1927
  (e.g. 2-speed Support A: 87fr -> 64fr) - read as period deflation, not a
  product regression.
- Dated and enriched: 4194 "Cyclo Route (steel pulleys)" and 4195 "Cyclo
  Route (with Rosa flanged pulley)" (Rear Derailleurs, both bare/undated
  before this) with this catalog's full speed-count pricing - the
  toothed/flanged split described here matches those two rows' titles
  closely enough to treat as first attestation, even though the leaflet
  itself never uses the word "Route". 3641 "Tank (earlier version)" (Hubs,
  brand `Tank`, separate from Cyclo) similarly dated/enriched with the
  Cyclo-Tank hub's spec (left-hand thread for drum brake, P/M/G tooth
  ranges) - picked over 3642 "(later version)" as the better fit for a
  1932-era hub, not on hard evidence either way.
- New: 7272 "Cyclo Rosa (1932 leaflet, twin-cable)" (Front Derailleurs) -
  the DB's existing `Cyclo Rosa (...)` Front Derailleur rows are dated
  1950 and described as single-lever "direct lever" designs; this
  catalog's twin-cable, lever-actuated mechanism (numbered parts 501-538)
  looks like an earlier, different generation, not the same part to
  redate. 7273 "Cyclo (1 or 2 threadings)", 7274 "Cyclo Rosa
  (extra-light)", 7275 "Cyclo (tandem)" (all Hubs) - no Cyclo-brand hub
  rows existed at all before this.
- Left unresolved, out of scope for this pass: the freewheel tooth-range
  tables (pages 3-5, for the 2/3/4-speed systems) could further enrich
  2077 "Cyclo (2 speed)", 2078 "Cyclo (4 speed)", and 7270 "Cyclo (3
  speed)" (the last from the 1927 leaflet) with precise P/M/G ranges
  beyond the 1927 leaflet's vague "472 or 347" reference - not done here,
  a future pass could pick it up.

