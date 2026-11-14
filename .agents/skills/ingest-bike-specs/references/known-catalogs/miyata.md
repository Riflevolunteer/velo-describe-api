# Miyata catalogs processed so far

## 1979 Miyata — loaded (2026-11-13, source 386)

- CSV: `bike_specs/1979_miyata_spec.csv`; approved SQL:
  `/tmp/miyata-1979-review/1979_miyata.sql`; readable review:
  `/tmp/miyata-1979-review/review.md`. User approved and loaded 9 bikes,
  189 specs and 72 links; all 11 component date corrections applied.
  Source 386, `1979 Miyata catalogue`, country US. Readback confirmed
  totals and no specs without provenance. Full SQL rerun affected zero rows.
- Source: https://www.ragandbone.ca/PDFs/Miyata%20Catalogue%20PDFs/1979%20MIyata%20Catalogue.pdf
  Nine-page manufacturer scan: specification chart on PDF p. 9; model prose
  pp. 2-7. US edition stated by Toyoda America Inc., New York / Chicago /
  Los Angeles on pp. 8-9. Cover and history/warranty pages have no additional
  build specifications. Chart transcribed from full-size overlapping crops;
  ignored handwritten prices and corrected OCR codes RND, CTD and KEC.
- Nine complete bikes: Racing 1200 / 912; Touring 1000 / 800; Sports 710 /
  600 / 400 / 310 / 200. Separate 1200 / 1000 frame-only offers excluded.
  No junior, city or mixte models in this scan. 22 existing labels, 189
  specs, 72 links. Only 1000 (15-speed) and 912 (12-speed) have
  explicit speed counts; no gearing inferred for the other seven models.
- Period/default judgments: 1200 New Dura-Ace -> EA-200 (7434) / DA-100
  (7427), the 1977 generation on the stated freewheel build, rather than
  the 1986 7400 mappings or EX-only freehub derailleur. Bare Dura-Ace
  headset -> 3098, side-pulls -> first-generation 989, low-flange QR hubs
  -> 3556; specific variants are not printed. Its Extra crank, brazed-on
  shifters and unspecified-speed gold freewheel remain unlinked.
- 912 600EX -> Arabesque FD 2480 / short-cage RD 4468 / clamp shifters
  6147 / normal-reach brakes 969; clamp and reach are period defaults,
  not printed part codes. Explicit low-flange freehub -> 3540; six-speed
  cluster -> generic 600EX Uniglide cassette 1200 (retained under source
  Freewheel label). Printed `600EXLD, 52x42` crank conflicts with the
  LD row's gearing; preserved and unlinked.
- SunTour VGT Luxe -> 4705 second version on 710 / 600 / 400, replacing
  the automatic 4704 first version (ends 1976) only for these bikes.
  Seven front -> 2641; Seven rear and Cyclone front stay unlinked because
  period variants overlap. 1000's explicitly five-speed Pro-Compe -> 2242;
  other Pro-Compe and Perfect clusters unlinked without speed counts.
  VX shifter unlinked without clamp/braze evidence. PDL-M / PUB-10 /
  Bar-Con use current 1978-era rows 6264 / 7796 / 7792; DLW -> 6283,
  UB-10 -> 8057. 1000 PDL-S -> 8055, with year_to corrected 1975 -> 1979.
- Exact named Sakae cranks and cockpit parts support year_from 1980 ->
  1979 for 1757, 2910, 7874, 7875, 7876, 7878, 7888, 7902; Jaguar II
  family 5234 likewise 1980 -> 1979. MKS Unique Custom Road name plus
  forged-alloy / Cr-Mo construction matches 3869, year_from 1985 -> 1979.
  All 11 guarded date corrections are included before the bike inserts in
  the review SQL, without changing component provenance or descriptions.
- Generic rims, MYT tyres, KEC / uncertain HKK chains, unspecified Dia-Compe
  brakes/levers, generic saddles/posts and unidentifiable pedal models stay
  plain text. Royal-PIESL II is the printed I/1 glyph; linked to 7907
  RY-P1ESL II by the Extra Super Light name and titanium bolt specification.
- Regression against all 85 pre-existing CSVs: zero removed or altered SQL
  statements; precisely 470 new statements, all for 1979 Miyata. Total links
  6446 -> 6518, exactly the 72 new links. Post-load Miyata totals:
  1979 9 bikes / 189 specs / 72 links; 1986 18 / 395 / 156.

## 1980 Miyata — loaded (2026-11-14, source 401)

- CSV: `bike_specs/1980_miyata_spec.csv` (built by scratchpad
  `build_miyata80.js`, not kept). Review SQL prepends one guarded date fix:
  8055 SunTour PDL-S year_to 1979 -> 1980.
- Source: https://www.ragandbone.ca/PDFs/Miyata%20Catalogue%20PDFs/1980%20Miyata%20Catalog.pdf
  (9 pp). Spec chart "'80 Model Specification" on PDF p. 9; pp. 1-8 are
  image-only model pages. Footer "Distributed by TOYODA AMERICA, INC. New
  York, Chicago, Los Angeles" -> country US. The chart is an OCR
  re-render (visible glyphs are OCR text over a blank background), so
  misreads were corrected from context and the 1979 chart: GT-PS/CT-PS ->
  CT-P5, AND -> RND, SORG/SOR -> 5DRG, SOX -> 5DX, AT-El/RT-Et -> RT-E1,
  Apex-1\H -> Apex-AH, GYAO-MASTEA -> GYRO-MASTER, #960 / #610 / #730.
  Handwritten prices on the scan ignored.
- Eight bikes: 1000 (Touring), 912 (Racing), 710 / 610 / 310 / 210 / 110 /
  110L (Sports, as 1979). 110L is the 19-1/2" loop-frame ladies' version of
  the 110 (touring levers, mudguards, full SunTour Seven group): kept per
  the ladies'/mixte rule. 310's 19-1/2" Mixte stays in its Frame Size cell.
  No speed counts printed, so Gearing left empty.
- Uncertain readings: 912 pedals print "; K T -TP Alloy" -> transcribed
  "KKT TP Alloy", unlinked (candidate 3775 KKT T.P. Top Run, 1970-81, not
  confirmed). 710 tyres "27" x 1A" with 100 lbs -> written 27" x 1" (the
  1979 100-lb size); tyre is unlinked MYT anyway.
- Overrides (all bike-scoped, 1980 only): 1979 choices carried forward
  (600EX Arabesque 2480 / 4468 / 6147 / 969 / 3540 / cassette 1200; Seven FD
  2641; PDL-M 6264, PUB-10 7796, UB-10 8057, PDL-S 8055; 500G 9106; 960
  8096; 5DRG-AH 7876; Super Apex-5TG 1757; Jaguar II 5234; CTD 7888; RND
  2910; SR-AH 7902; Apex-AH 7901; Quill-2K 3863; SP-300 3931). New for
  1980: bare "VGT" -> 4705 RD-1500 (the global 4695 is the 1971-73 4900);
  Seven rear -> 4756 RD-1900 (the 1976-79 4755 no longer overlaps); VXS ->
  4775 RD-2500 VX (S).
- Left unlinked: Cyclone front (four 3704 / FD-1300 rows cover 1980);
  Pro-Compe / Perfect clusters (no speed count); 600EXLD 52x42 (same
  conflict as 1979); 5DX-AH / 5DXC cranks (no row); CT-P5 (5857 and 5858
  both cover 1980); Dia-Compe 610 (656 vs GC610 689), #500, #730 (no
  period row); Tange New Falcon (3141 is 1974 only); RY-KM, S-WIN stems,
  KD-4L / KE-36 bars, MKS QR-K1, KKT pedals, Ariake 77-17, generic hubs.
- Regression: all 87 other CSVs regenerate byte-identical.

## 1986 Miyata — `1986_miyata_spec.csv` (18 bikes, 395 specs, 131 linked)

- Source: SS Cycleworks bike museum scan
  https://sscycleworks.com/galleries/bike-museum/1986-miyata-catalog-compressed.pdf
  (24 pp, image-only, no text layer). US edition: back cover "Miyata
  Bicycle of America Inc., 2526 W. Pratt Blvd., Elk Grove Village IL", so
  `CATALOGUE_COUNTRY` 1986|miyata = US. Specs come from the two-page
  table on pp 22-23 (transcribed 2026-11-02 from 300 dpi tiles by two
  Sonnet subagents, spot-checked); the model pages give only blurbs. The
  Omnium page says "New models late 1986".
- Models: Professional Racing (Team Miyata, Omnium [table "Omnium
  Aluminum"], Pro Miyata), Competition / Fitness (912, 710, 310, Pista
  -> Type "Track"), Grand Touring (1000, 610, 210 -> Type "Touring"), All
  Terrain (Ridge / Terra / Trail / City Runner -> "Mountain"), All Round
  Sports (110, 100, 90, Sport 10 -> "Sports"; drop bars, dual levers,
  mixte "M" sizes kept in the Frame Size cell, not separate bikes).
- Skipped (not in the CSV): Shore Runner (ATB-styled beach / city bike:
  Dia-Compe 1020 side-pulls, SR 50/40 double, Hi-Ten; user's call
  2026-11-02; City Runner, with cantilevers and a triple, loaded as
  Mountain). Not in the spec table so never transcribed: Commuter series
  (Park Avenue 3-speed, Fifth Avenue 5-speed), Sport Junior / JR-M, Kiki &
  Lala, unicycles, Team Pista / Ridge Runner framesets.
- CSV built by `build_miyata86.js` (scratchpad, not kept): Derailleurs
  cell split into Front / Rear / Shifters ("(F) .. (R) .. w/<shifter>"),
  Brake Set into Brakes + Brake Levers ("w/... levers", "Aero Levers",
  "hooded levers"), Handle Bar Tape -> Cable & Tape, Speeds derived into
  Gearing. Fractions written 19-1/2", 27 x 1-1/8. Typos fixed: City Runner
  cluster "4-32" -> 14-32, Terra Runner "SHIGNATURE" -> SIGNATURE, Trail
  Runner fork "buting" -> tubing; Ridge Runner brakes "DIA COMPE (F) NGC
  982 SUNTOUR (R) XC" rewritten "... front, ... rear" (left unlinked: two
  parts). Brake-cable liner footnote not carried.
- Overrides (all ranged 1986 only; regenerating the seven other 1986
  catalogues gave identical SQL): New Dura-Ace = 7400 (FD 2510, RD 4503,
  BR 991, HP 3099, FC 1819, PD 3970, MF-7400-6 2221, HB-7400 freewheel hub
  3560, CN-7400 7231); "Dura-Ace 515 shifter" is printed so, read as SIS
  -> SL-7400 6164. New 600 EX front / headset / pedals / hubs / Biopace
  cranks -> 6207 rows (FD 2481, HP 3090, PD 3961, HB 7551, FC-6207-BP 1799,
  FC-6206 triple 1797); 600 UG chain -> CN-6208 7232. Deore XT = M700 (FD
  2497, RD-M700-SP 4489, replacing the matcher's 1994 "Deore XT" 4496).
  Z-series / Light Action: FD-Z202 / Z204 / Z206, RD-Z501, RD-L522 7553,
  RD-L523 4518, SL-L422 7555 (not the 1972 L422 console 6181), SL-Z401,
  BR-Z570 row 959 for Z-570 / Z-720, BL-Z304. SunTour: New Cyclone = FD-3300
  2629 / RD-6000 (S) 4739; Sprint RD-7000 4758, CB-7600 1042, CW-7500 1987,
  BH-2000 7808, RH-4400 track 3612; Seven FD-1400 2641; XC-Sport RD-XS00
  4788 (front 2660 via the 1986 Raleigh override); UB-10 / UBN-10 -> 6288;
  Perfect 6-speed 7813. Others: Sugino VP triple 1970, Sansin RE-60 9003,
  HB-AQ11 7137, Tange MA-60, MKS Esquartz 102 / Sylvan Track, SR SP-155,
  XC-II PL-5100, Dia-Compe GX-400 -> GX-N 8082, 164 levers -> 164G 8873,
  Araya 20A 4922, SR CT-P5E -> CT-P5 5857, Sugino SPK -> SP-K 5927, Nitto
  55F -> Mod. 55, Olympiad B115, B-804 AA -> 10815 for Ridge Runner / Terra Runner (1986 catalog says NITTO 804 AA Alloy; Koga 1986 identifies B-804 AA as a special ATB aluminium bar), D.I.D maker row 1355 for "DID TRACK".
- Left unlinked on purpose: New 600 EX rear derailleur, brakes and
  freewheel (6207 vs SIS 6208 both cover 1986; nothing in the text
  decides); SunTour Sprint front (DB Sprint FD rows start 1987), Sprint
  aero levers and pedals (Sprint 9000 rows are 1987); New SEVEN rear;
  Winner Pro 7-speed (WP rows 1987+); Deore XT hub (HB-MN72 vs the 1986
  FH-7400-ATB row); Sansin Gyro-Master (Sunshine 3601 vs RE-40 9000);
  Araya 16-B (two rows); all Ukai rims, Tange MES, Miyata tyres and
  Miyata Signature parts (no DB rows).
