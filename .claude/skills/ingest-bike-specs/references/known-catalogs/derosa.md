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
  212 0118065 first gen; Brakes 'campagnolo c record' -> null (Delta not
  shipping; as Cinelli Record Corsa / Colnago C-Record 180); Chains
  'regina cx s' -> 1384 CX / CX-S; Saddles 'selle italia super turbo or
  turbo' -> null (either/or; matcher hit the 1992 Super Turbo row).
- Left unlinked: "Cinelli or 3ttt" bars (either/or, bare brands), De Rosa
  stems (no De Rosa component rows), Vittoria / Clement tyres, bare Regina
  chain, "Regina CX-S or Campagnolo" and "Regina or Campagnolo" freewheels,
  Super Record hubs (only the 1974-75 Ti-spindle rows exist), frame prose.
- Regression: all 24 loaded catalogues unchanged (1,561 links).
