# Miyata catalogs processed so far

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
