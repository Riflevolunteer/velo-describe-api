# Maillard catalogs processed so far

## Maillard cycle fittings catalogue (Maillard_Cycle_fittings_catalogue.pdf, 34 pages, scan, no text layer)

- No printed date anywhere in the catalogue itself. Only soft internal
  clue: the Maillard 700 racing freewheel page lists its pro-team users
  (Peugeot, Mercier, Raleigh, Gitane, Lejeune, Flandria, Merckx), which
  reads mid-1970s-shaped. Initially inserted every new row with
  year_from/year_to NULL rather than guess off the sponsor list.
- Updated 2026-09-30: user found the same document hosted online
  identified as "Maillard 1978" (external identification, not a printed
  colophon in the scan — the PDF itself still has no date on any page).
  Consistent with the sponsor-list era clue above. Set year_from=year_to
  =1978 on all 29 rows that were NULL (guarded on that condition, so it
  only touched this catalogue's own inserts); data_source.label updated
  to note the year and that it's externally sourced, not printed.
- Also contains 5 pages (24-28) of LAM (H. Lamarque) brakes and brake
  levers — same Incheville, France address as Maillard, bundled as a
  sister-brand section, not a Maillard product. Pages 33-34 are not
  catalogue content at all: an unbranded technical line-drawing and a
  modern "IceniCAM Information Service" archive cover page from whoever
  scanned it; excluded.
- Checked whether this catalogue could finally identify the bare
  `Maillard` freewheel placeholder row (id 2110, no years, linked to 15
  1979 Peugeot bikes — the same "bare brand, no model" shape flagged as a
  latent bug risk in the bike-spec generator work). It can't: none of the
  bikes' tooth-count combos (`14-15-17-19-21-24` etc.) exactly match any
  combo table the catalogue prints for Atom or Normandy, and the Maillard
  700 racing freewheel explicitly supports "all combinations", so it can't
  be ruled in or out by ratio alone. Left id 2110 and its 15 links
  untouched rather than guess a redirect.
- Brakes (LAM): all three catalogue models (49-72, 59-77, 66-86mm reach)
  already exist in the DB under the exact same names — clean confirmation,
  no changes.
- Most Maillard hub lines already present (Atom, Normandy, Normandy
  Sport, Normandy Luxe Compétition x2 flange sizes, Maillard 700 x2
  flange sizes, drum brake) — no changes.
- Added (29 rows, all NULL years, source_ref -> this catalogue's
  data_source row):
  - Freewheels: Maillard Atom, Atom Luxe, Atom Inter, T.B.W. (all single-
    speed models missing entirely — DB only had 700/Normandy/Compact/
    Sprint/Helicomatic named rows, no Atom); Atom (3-speed), Atom
    (4-speed), Atom (5-speed) (split by speed to match the DB's existing
    Maillard 700 convention of one row per speed count); Normandy
    (5-speed, sealed bearings) (a real feature - chain-guard + sealed
    bearings - none of the 3 existing Normandy rows, which distinguish by
    lettering position, capture).
  - Hubs: Maillard GC4 and Atom Junior (juvenile hubs, nothing juvenile
    existed for Maillard at all); Atom Sport (small flange QR - only the
    Normandy Sport large-flange QR existed).
  - Pedals: Atom 63, Atom 2 BIS, Atom 440, Atom 600 Sport (none of the
    existing Maillard 700 / ATOM CXC rows match these by name or feature).
  - Bottom Brackets: Maillard Atom (no Maillard row existed in this
    category at all).
  - Brake Levers (LAM): 13 numbered ref variants (1R, 1C, 1 bis R, 1 bis
    C, 2R, 2C, 4R, 4C, 7R, 8R, 8C, 10C, 11C - light alloy). None of the 4
    existing generic LAM lever rows ("LAM Course", "LAM Competition", "LAM
    / Guidonnet", "LAM (drilled lever, cable adjuster)") use these ref
    codes, and none could be confidently mapped to a specific one, so all
    4 were left as-is rather than guess-merged.
- Left out of scope (no component_category): freewheel removal tools,
  Atom quick-release skewer hardware, fasteners/cones/axles/washers within
  every exploded diagram.

## Le Cycle magazine no. 58 — Maillard 700 freewheel advertisement (single page, via forum.tontonvelo.com attachment)

- One page, not a manufacturer catalogue: a Maillard ad for its three
  700-series freewheels (Course, Sprint, Compact), each with a tooth-range/
  speed-count table and (Course only) a small parts table. Dated 1980 per
  user identification, not printed on the page.
- All three models already existed from the main Maillard catalogue
  ingestion above; this page only adds date evidence, no new rows.
- Years corrected, year_from moved earlier (ad is dated earlier than what
  the DB claimed): 2113 "700 Course (5 speed)" 1984 -> 1980; 2114 "700
  Course (6 speed)" 1982 -> 1980. year_to left alone on both (later
  "still current" evidence from another source, not contradicted by an
  earlier ad).
- Years set (previously bare/undated, this ad is the only evidence so
  year_from = year_to = 1980): 2120 "Maillard Sprint"; 2112 "Maillard 700
  Compact".
- Left alone: 2111 "Compact Super" and 2124 "Compact Super (7 speed)"
  already dated 1980 - distinct SKUs from the ad's plain "700 Compact",
  not the same model despite the matching year.

## Maillard "Freewheels" catalogue — c. 1982, per filename (Maillard1982FreewheelCatalog.pdf, 4 pp, scan, no text layer)

- No printed date; "1982" is the filename's claim only. Lettered models
  A-M exactly repeat the scheme from the 1978 cycle-fittings catalogue
  above (data_source 49); N-U are new (Helicomatic 600/700 SH, 700 Course,
  700 Compact, 700 Sprint lines). Tools 406-420 out of scope (no category).
- Years: A-D, G, H (7234, 7233, 7235, 7236, 7237, 7238) year_to 1978 -> 1982,
  confirming the 1978 catalogue's single/3-speed/4-speed Atom family is
  still current. 7234 (Atom Luxe) description gained "2 or 4 pawls".
- K (7239, Atom 5-speed, dismountable): 1978 catalogue said 13-28T, this one
  says 13-24T (narrower). Kept the wider 1978 figure as primary, noted the
  1982 figure in parens rather than overwrite - may be a real narrowing of
  the range or just this edition's emphasis, not resolvable from the page.
- O (2050, 2051 "Atom 77 (6 speed, black/silver cogs)"): catalogue doesn't
  distinguish cog colour, extended both year_to -> 1982 (user decision -
  weak evidence but nothing contradicts either colour still being sold).
- P (2052 "Atom 77 Compact (6 speed)"): year_to 1980 -> 1982, description
  enriched with the narrow-chain/13-28T ratio detail, previously bare.
- S/T confirmed and enriched: 2113/2114 "700 Course (5/6 speed)" already
  covered this catalogue's range (2113's 1984 year_to already exceeds it,
  2114's 1982 matches exactly) - no year change, left as-is. 2112 "700
  Compact" and 2124 "700 Compact Super (7 speed)" year_to 1980 -> 1982,
  both descriptions enriched with the MR/MB/MS/MT sprocket-code detail.
- U: 2120 retitled "Maillard Sprint" -> "Maillard 700 Sprint" (catalogue's
  full name), year_to 1980 -> 1982, description enriched with steel/alloy
  and ratio detail.
- Added (11 rows, year_from=year_to=1982, this catalogue is the only
  evidence): E "Maillard Atom (3-speed, first sprocket 16T)" and F
  "Maillard T.B.W. (3-speed, first sprocket 16T)" - distinct from G/7237
  which is the first-sprocket-14T version; I "Maillard Normandy
  (5-speed)" and J "Maillard Normandy Sport (5-speed)" - distinct from
  7240's sealed-bearing/chain-guard Normandy variant; L "Maillard Atom 77
  (5-speed)" - only 6-speed Atom 77 rows existed; M "Maillard Special
  Tandem"; N "Maillard Normandy Sport (6-speed)"; Q split into "Maillard
  600 SH (5 speed)" and "Maillard 600 SH (6 speed compact)"; R split into
  "Maillard 700 SH (6 speed compact)" and "Maillard 700 SH (7 speed
  compact)" (mirrors the DB's existing one-row-per-speed-count convention
  for this family). Individual replacement sprockets the catalogue also
  sells separately (SHA-SHF, MA-MD/ZA-ZD, MR/MB/MS/MT) were not inserted
  as Single Sprockets rows (user decision) - their ranges are folded into
  the parent freewheel rows' descriptions instead.
- Deleted (user decision, bike_spec/COMPONENT_OVERRIDES checked clean on
  all three): 2115 "Maillard Helicomatic" and 2116 "Maillard Helicomatic
  (single cog)" - bare velobase placeholders with no part number or years,
  superseded by the new 600 SH / 700 SH rows above; 2111 "Maillard
  [multiple spaces] Compact Super" - garbled-title duplicate of 2124
  "Maillard 700 Compact Super (7 speed)", same year, no distinguishing
  detail.

## R. J. Chicken & Sons trade catalogue, Maillard section — 7 November 1979 (Cycle_fittings_from_R_J_Chicken_catalogue_1979-11-07.pdf, 13 pp, scan, no text layer)

- UK distributor's trade catalogue (pp 11-17, Maillard section) bundled
  with their own suggested trade price list, which carries a firm printed
  date ("NOVEMBER 7th, 1979") - harder evidence than the externally-guessed
  "1978" on the cycle-fittings catalogue above. Different document; not a
  reprint of it. Freewheel tools (406-408, a new chain-whip-style cog
  removing tool), Normandy Q/R skewer+cone accessory sets, and all
  axle/cone/dust-cap spare parts (p 17 and the price list's hub-spares
  block) left out of scope, same convention as the other Maillard entry.
- 7243 "Maillard Atom Sport" (quick-release small-flange hub) year_to
  1978 -> 1979, confirmed by the price list's "Atom S/F, Q/R" line.
- 3391 "Maillard Normandy (high flange, oblong holes)" enriched: the
  catalogue's "L/F Front & Rear" (460g, elongated cut-outs, single
  side/gear) and "L/F D/S Gear & Fixed" (300g) are the same shell under
  different end-threading, folded into one description rather than split
  into new rows.
- 7246 "Maillard Atom 440" year_to 1978 -> 1979, enriched with both trims
  the catalogue shows under one model number: 410g plain (p 13, boxed) and
  510g with reflectors added (p 14) - a running change, not a new part.
- 7239 "Maillard Atom (5-speed)" and 8125 "Maillard Normandy (5-speed)"
  (inserted last session off the 1982 "Freewheels" catalogue): this 1979
  document predates that one, so 8125's year_from moved back 1982 -> 1979,
  and both got the ratio combos this catalogue/its price list attest
  (14-16-18-20-22, 14-16-18-21-24, 14-17-20-23-26, 14-18-23-30-34) folded
  into their descriptions. The price list calls these "ATOM and NORMANDY"
  combinations jointly, without distinguishing plain Normandy from
  Normandy Sport (8126) - left 8126 untouched, the combos don't clearly
  belong to it specifically.
- Added (10 rows, year_from=year_to=1979, this catalogue is the only
  evidence): Hubs - "Maillard Atom (small flange, D/S Gear & Fixed)" 275g
  and "(small flange, Front & Rear)" 400g, both solid-axle (distinct from
  7243's QR version); "Maillard Normandy (small flange, de-luxe
  competition, Q/R)" 510g and "(small flange, Q/R)" standard (prose only,
  no weight given - weaker evidence); "Maillard Normandy (large flange,
  Q/R)" 600g and "Normandy de-Luxe (large flange, Q/R)" 590g competition -
  distinct from the existing "Luxe Competition" red/gold-label rows
  (3384/3388/3389), which carry unrelated weights and aren't contradicted.
  Pedals - "Maillard Atom 600RC" (chrome) and "600RN" (black cage), both
  430g quill pedals with 13mm long-thread spindle; "Maillard Atom 450RA"
  and "450RN", lower-tier quill pedals named only in the price list, not
  pictured - noted as the weakest evidence in this pass.

