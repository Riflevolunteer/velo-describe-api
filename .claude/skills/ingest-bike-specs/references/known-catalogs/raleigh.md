# Raleigh catalogs processed so far

## 1973 Raleigh — `1973_raleigh_spec.csv` (9 bikes, 165 specs, 53 linked)

- Header "Weight." (trailing period) is mapped in BIKE_FIELD_LABELS.
- This catalog motivated the single-word-title rule: Brooks B17N, Simplex
  14/24T and Nisi/AVA rims were all linking to brand catch-all rows.
- Period choices (1973): Nuovo Record front → Record 1052/1 (1973-1977), rear
  → 1020/A v3; Campagnolo Record brakes → 2040 standard reach pre-CPSC;
  Record hubs → 1035 high flange, track → 1036 Record Pista; Huret Jubilee →
  4-hole front / first-version rear; Brooks B17N → B17 Champion Narrow, B17 →
  Champion Standard, Professional → Team Professional, Team Special → the
  "Team Special" row; Clement Criterium Silk → Criterium Seta.
- Brand rows kept deliberately: Simplex freewheel, Nisi, AVA.
- Left unlinked: Weinmann 999 (a dozen Vainqueur variants), New Simplex Maxi
  (no row), Raleigh-branded parts, G.B. Maes bars.
- 2026-10-05 re-link pass: "G.B. Forged Alloy" stem (International,
  Competition Mk II) -> 6533 GB Forged; it was ambiguous with the 1950s
  Hiduminium spearpoint row.

## 1985 Raleigh — `1985_raleigh_spec.csv` (19 bikes, 360 specs, 90 linked)

- Source is a single scanned image on Sheldon Brown's Retro Raleighs site
  (catalogs/1985/pages/specifications.html), 19 per-model text blocks in
  four ranges, not a table. Transcribed by hand (2026-09-28) after cutting
  the 1071x1519 scan into 12 magnified cells; the CSV is the record of the
  transcription. Type column added from the range headings (Lightweight
  Racing / Lightweight Touring / Sport Touring / Mountain Tour); weight
  from each model heading ("-22 LBS").
- Headers kept as printed; new LABEL_ALIASES: shifting levers -> Shifters,
  seat pillar -> Seatpost, handlebar -> Handlebars, special features and
  accessories -> Extras. DROP-OUTS / FRAME/DROP-OUTS merged into the Frame
  cell rather than minting a label.
- Era fixes over the matcher: Shimano Deore XT auto-hit the 1994-95 rear;
  overrides send front/rear/shifters/brakes to the M700 series (FD-M700,
  RD-M700 v2 1985-86, SL-M700, BR-MC70). Shimano "Model 105" in 1985 is
  the Golden Arrow A105 series (FD/RD/SL-A105, 105 hubs 3526). SunTour
  Superbe Pro is year-ranged: rear to 1983 -> 4766, from 1984 -> 4768
  friction; front from 1984 -> 2652 FD2000 (1983 Bianchi keeps its old
  pick and unlinked front); levers -> 6301 LD-4650. Cyclone MKIII -> the
  1984 Cyclone rows (2629, 4739). ARX rear -> short cage 4727.
- Z-series: Z204/Z206 fronts, Z503/Z505 rears, Z401/Z408 levers all have
  numbered rows. Dia-Compe: AGC 300/250 (and the ACG typo) -> Aero Gran
  Compe 686; AC 500G -> 665; DC500N -> N500 681; 500QS and QS-500N -> N500
  QR 682; 960 -> GC960 690; 981 matched itself. Sugino "SP-CK" read as the
  SP-KC (5928). Sansin Gyro -> Sunshine Gyro-Master 3601. New Winner 7-sp
  -> 2239 (only 7-sp New Winner row, velobase dates it 1990). SR SP-154,
  SunTour VX pedals, Araya 16A, SR Aero stem, Ofmega Mistral linked.
- Left unlinked (no model row): SunTour HR, SU-2, UB-10, PUB-M, DLN, EM 30,
  Light Action L512, Shimano AT-50 brakes, Kusuki bars/stems, SR CXC/CRC/
  55G and Takagi cranks, Sugino LP, Sansin RE-50/RE-60/ET-QS/AX-10A, SR
  MTH-100, Araya SP-30, SR SP-153 and bear-trap pedals, Daido chains,
  Shimano XT/Tourney XT cranks (no FC-M700 row).
- Regression: recorded counts for 1975 Motobecane (46), 1983 Bianchi (47),
  1987 Bianchi (128) and 1993 Bianchi (118) were already stale against the
  DB (47, 48, 128, 118 loaded); regenerating today gives 47, 47, 126, 117,
  the differences coming from the 2026-09-28 Campagnolo dedupe reshaping
  the candidate set, not from this catalog's generator edits (verified
  by diffing pre- and post-edit generator output). Loaded rows unaffected.
- 2026-10-04 compound-cell split (CSV rewritten, old bike_spec rows deleted,
  reloaded; 344 -> 360 specs, 83 -> 88 linked). Brakes cells named caliper
  and lever ("Dia-Compe AGC 300/250", "981 cantilever, 161 levers", "DC500N
  /164 … extension levers", "Deore XT cantilever, Z-levers"): lever half
  moved to a new Brake Levers column. Links: "Dia-Compe AGC 250" x4 -> 279
  (AGC250 Aero Compe), "Dia-Compe 152 gum hoods" -> 271, "Shimano Z-levers
  with gum hoods" -> 410 (BL-Z306); unlinked, waiting for a Dia-Compe
  catalogue: 161 (x2), 164 (x3), 281; generic "Extension levers", "Raleigh
  / Mountain levers". Brakes overrides re-keyed to the caliper-only values
  ('dia compe agc 300 cold forged alloy' -> 686, 'dia compe ac 500g
  aerodynamic' -> 665, 'dia compe dc500n alloy sp' -> 681, 'dia compe qs
  500n' -> 682, 'dia compe 960 alloy cantilever' -> 690); the catalogue's
  "ACG" typo was corrected in the CSV. DC630N still unlinked (no row).
- 2026-10-04, after the Dia-Compe Products 1986 ingest: "Dia-Compe DC630N
  alloy S.P." -> 8083 DC630N and "Dia-Compe 281 levers" -> 8113 (281 /
  281M) via overrides; 88 -> 90 linked. 161 and 164 levers stay unlinked —
  they sit on the catalogue's racing / extension lever pages (12-16),
  which the bmxmuseum scan set does not include.

