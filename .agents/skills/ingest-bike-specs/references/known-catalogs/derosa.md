# De Rosa catalogs processed so far

## c. 1984 De Rosa — `1984_derosa_spec.csv` (3 bikes, 48 specs, 22 linked)

- Source: ebykr.com, "De Rosa c.1984 Catalog — C Record, Professional and
  Six-Day Track, with the Made-to-Measure Order Cards"
  (https://ebykr.com/library/de-rosa-c1984-catalog-c-record-professional-six-day-track-order-cards/),
  13 PNG scans (page 13 absent from the set), Italian/English, dated
  "1984 (estimated)" by ebykr; `data_source` 146. A dealer brochure built
  around the made-to-measure order card: pp. 5 and 7 carry a ten-line
  parts list each (C Record, Professional), p. 9 the six-day track card
  with no parts, pp. 10-11 clothing, p. 12 the Microfusione Italiana
  castings. No sizes, colours or weights; Frame Size recorded "Made to
  measure". Transcribed by hand (2026-10-09), checked against the scans.
- Dating kept at 1984 as ebykr estimates. The C-Record group's DB rows all
  start 1985 (shown September 1984 for the 1985 season), so this is a
  late-1984 brochure for 1985; re-date to 1985 if a printed date turns up.
- New bike brand. The generator's filename brand token "derosa" would have
  capitalised to "Derosa" (it did on the first load: brand 10, source
  146); added `BRAND_NAMES` in the generator (`derosa` -> "De Rosa") and
  renamed the brand, source label and the three bikes' search_text by
  one-off UPDATE (derosa-brand-fix.sql, scratchpad). Re-run is a no-op.
- Columns: both group lines fanned out to Front / Rear Derailleur,
  Crankset, Brakes, Brake Levers, Shifters, Pedals, Headset, Hubs, Seatpost
  (1986 Cinelli pattern) with the group also kept in "Groupset /
  Components" so "Super Record 4000/F, pantographed" survives. Pista Sei
  Giorni: Brakes / Brake Levers "None", De Rosa stem, lugs only.
- Links by matcher / existing ranges: C-Record RD 4096 first gen, FD 2283,
  crank 1483 (1985-86), hubs 3241 322/101, headset 2954 304/104, pedals
  3693, seatpost 5737 A0R2-S, shifters 5970 Retro-Friction 2nd gen; Super
  Record RD 4152, brakes 583, levers 231, crank 1509, FD 2313, pedals 3716,
  headset 2968, seatpost 5761, shifters 6001 Retro-Friction; Ambrosio
  Metamorphosis 4899; Selle Italia Turbo 5508.
- Overrides added (De Rosa block): Brake Levers 'campagnolo c record' ->
  212 0118065 first gen; Brakes 'campagnolo c record' -> 583 4061 Super Record v2
  (Delta not shipping until late 1987; the group came with SR brakes;
  was null until 2026-10-28, user's call); Chains
  'regina cx s' -> 1384 CX / CX-S; Saddles 'selle italia super turbo or
  turbo' -> null (either/or; matcher hit the 1992 Super Turbo row).
- Left unlinked: "Cinelli or 3ttt" bars (either/or, bare brands), De Rosa
  stems (no De Rosa component rows), Vittoria / Clement tyres, bare Regina
  chain, "Regina CX-S or Campagnolo" and "Regina or Campagnolo" freewheels,
  Super Record hubs (only the 1974-75 Ti-spindle rows exist), frame prose.
- Regression: all 24 loaded catalogues unchanged (1,561 links).

## 1989 De Rosa — `1989_derosa_spec.csv` (3 bikes, 34 specs, 10 linked)

- Source: ebykr.com, "De Rosa 1989 Catalog — Frames and Bicycles, with the
  35° Anniversario Limited Edition"
  (https://ebykr.com/library/de-rosa-1989-catalog-frames-and-bicycles-35-anniversario/),
  8 PNG scans, English, GITA Sporting Goods (Charlotte NC) US dealer
  catalogue; `data_source` 147. Spec blocks on pp. 4 (35° Anniversario),
  7 (Professional SLX) and 8 (Pista). Transcribed by hand (2026-10-09),
  checked against the scans. Not loaded: the Athena / Chorus / Croce
  d'Aune pages (group names over photos, no parts), the Columbus MAX
  mountain frame (prose mention only).
- Bikes: 35° Anniversario (complete, "Campagnolo Record-C Delta with
  pantographed caliper cover", 3T bar and pantographed stem, Campagnolo
  rims, Vittoria tyres; Pearl White, 47-64 cm), Professional SLX
  (frameset; complete-bike option with Nisi rims, 3T bar/stem, Vittoria,
  "any Campagnolo or Shimano gruppo" kept in Groupset / Components),
  Pista (frameset, Columbus SL, pista dropouts, 48-62 cm). Group fanned
  out as in 1984, with Brakes "Campagnolo C-Record Delta".
- Links: all second-generation C-Record via the newly ranged overrides
  (see cross-catalog-notes "C-Record overrides ranged"): RD 4098 A010
  Corsa Record 2nd gen (1987-89), crank 1482 (1987-94), levers 214 Corsa
  Record Power Grade, shifters 5970 Retro-Friction 2nd gen, brakes 560
  Delta C-Record via new 'campagnolo c record delta'; FD 2283, hubs 3241,
  headset 2954, pedals 3693, seatpost 5737 as before.
- Left unlinked: bare "Campagnolo" rims (Delta Strada Chromium, Lambda,
  Sigma, Omicron all current in 1989), Nisi, 3ttt bars and stems, Vittoria,
  the "any gruppo" cell, frame prose.
- Same session: the 1984 C Record's shifters re-pointed 5970 -> 5969
  C-Record Friction (1985-91) by one-off UPDATE (crecord-era-fix.sql),
  since the Retro-Friction 2nd gen row starts 1987.


## c. 1991 advertisements — `1991_derosa_spec.csv` (loaded 2026-11-12)

- Source: https://labibleduvelocataloguesderosa.blogspot.com/p/de-rosa-1991.html,
  two original De Rosa ads, archived as 1991. Local scans:
  `/tmp/derosa-1991-scan0.jpg` and `/tmp/derosa-1991-scan1.jpg`;
  transcription `/tmp/derosa-1991-transcription.json`.
- Neither ad visibly prints a publication year or an official model name.
  Keep 1991 as the archive-attributed year, not a confirmed printed date.
  The headings "SLX C-Record" and "Extra-Light TIG" are descriptive variant
  titles, not asserted De Rosa model names. Both photographs show complete
  road bikes. No numerical sizes, colours, weights or gear counts supplied.
- Ad 1 explicitly describes hand construction in Italy, made-to-measure
  dimensions and angles, investment-cast lugs, double-butted Columbus SLX
  and Campagnolo C/Record components. Ad 2 explicitly describes oversized
  Columbus Extra-Light tubes, hand construction in the De Rosa workshop,
  TIG welding, variable angles and unspecified Campagnolo components.
  Do not copy the C-Record designation from ad 1 into ad 2.
- CSV: 2 bikes, 10 existing labels, 13 specs, 6 component links. SLX C-Record
  has 10 specs / 6 links; Extra-Light TIG has 3 specs / 0 links. Sizes on
  ad 1 only; colours and weights blank on both. Market not explicitly
  stated, so source country is NULL despite the Italian text/address.
- Six ad-1 component entries are explicitly an inference from the named
  C-Record group, following prior De Rosa group fan-outs: front 2283,
  rear 4133 R010 (1990-91), crank 1482 (1987-94), brakes 560 Delta,
  levers 214 Power Grade, headset 2954 304/104. Every selected row spans
  1991. No shifter mode, hub configuration, pedal variant or post length
  inferred; those fields remain absent. No specifications identified solely
  from photographs. Ad 2's maker-only Campagnolo stays unlinked.
- Generator and overrides unchanged; no cross-catalog regression required.
  Generated and reviewed every link with `summarize-bike-sql.js`; CSV has
  two rows, unique titles and consistent columns, no overlength cells.
- User-approved load: `/tmp/derosa-1991-review.sql`; readable summary
  `/tmp/derosa-1991-summary.txt`. Inserted one data_source, two bikes and
  13 specs; six component links confirmed. Second execution affected zero
  rows throughout. Read-back: 1984 = 3 bikes / 48 specs / 23 links;
  1989 = 1 bike / 19 specs / 10 links; 1991 = 2 bikes / 13 specs / 6 links.
  No existing bikes or component records changed.
