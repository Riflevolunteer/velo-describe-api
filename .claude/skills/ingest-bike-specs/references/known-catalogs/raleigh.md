# Raleigh catalogs processed so far

## 1973 Raleigh — `1973_raleigh_spec.csv` (9 bikes, 170 specs, 55 linked)

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
- 2026-10-05: Professional Mk IV `1/2" x 3/32" Regina ORO` chain -> 1382
  Regina Extra 50 Oro (the Regina Extra C/7 109/E catalogue's only
  1/2 x 3/32 oro chain; four oro rows had competed).
- 2026-10-06, checked against the scan the CSV came from:
  https://www.retrobike.co.uk/archive/1973-raleigh-catalogue.1211/ (73.pdf,
  11 pages, US edition — Raleigh Industries of America, Boston; covers pp
  2-9, the Technical Specifications table p. 22 cut off at the Grand Prix
  DL 115 column, and the back cover; the Record DL 130 column and pp 11-20
  are not in it, so Record is unverified). The download needs the archive
  page's cookies first (a bare GET returns 406). Fixes: Professional Track
  crank "Campagnolo Pista 49T" -> 48T (override re-keyed, still 1505);
  Professional Mk IV "Tee Clips" -> Toe Clips; Gran Sport tyres "Wired-on"
  -> "Wired-bead"; 5 blank Chain cells (Competition Mk II, Gran Sport,
  Super Course TT, Super Course, Grand Prix) -> 1/2" x 3/32"; bike rows:
  Gran Sport sizes gain 20.5", Super Course TT weight 26.5 -> 28-29 lbs.
  Rows 310 / 317 / 378 deleted and reloaded; data_source 36 citation now
  names the scan. 165 -> 170 specs, still 54 linked. Not added: the
  Super Course Ladies DL 100L (in the p. 9 text, no spec column).

## 1974 Raleigh — `1974_raleigh_spec.csv` (10 bikes, 187 specs, 68 linked)

- Source: https://www.retrobike.co.uk/archive/1974-raleigh-catalogue.1190/
  (r74.pdf, 25 pages, img2pdf scan, no text layer; US edition, Raleigh
  Industries of America; download needs the archive page's cookies first).
  CSV written by hand (scratchpad script) from the Technical Specifications
  table p. 23, read from 300-600 dpi crops; headers copied from the 1973 CSV
  so labels line up. `data_source` citation names the scan.
- Table models only (same scope as 1973): Professional Track DL175, Team
  Professional DL185 (new), Professional Mk IV DL180, International DL170,
  Competition Mk II DL165, Gran Sport DL160, Super Course Mk II DL100 / 100L,
  Grand Prix DL115 / 115L, Record DL130 / 130L, Super Tourer DL135 / 140
  (new). Lady's versions share their gents' column. Not added: Sprite 27,
  Superbe, Tourist, Sports, Ltd, Folder, Chopper, Record 24, Colt, Space
  Rider, Mountie (text + size/colour box only). Track brakes / derailleur
  blank in the table -> "None" (1973 convention). Super Tourer weight 26¼ lbs
  -> "26.25 lbs.".
- Overrides: the 1973 picks re-keyed for 1974 wording ("Large Flange" for
  "Wide Flange", ", 10 speed" suffixes, "Leather Team Special" word order,
  "D'Oro"); Team Professional Super Record parts -> RD 4148 (4001 1st gen),
  crank 1509 (1049/A), pedals 3716 (4021), seatpost 5759 (4051); New Huret
  Challenger -> 2388 / 4273; Clement Strada 66 -> 6775. Weinmann centre-pulls
  -> 7929 Vainqueur 999 (table drops "999", but the International text p. 6
  says "Weinmann 999 center pull"). "Campagnolo Record Large Flange" is the
  Track's hub here and a road hub on the 1975 Motobecane — override ranged
  to 1974 -> 3270 (1036 Pista) / 1975 -> 3260 (1035).
- Left unlinked: Super Record front mech and hubs (high / low flange
  ambiguous), Weinmann Alesa rims (only Alesa H.P. row dated 1963), G.B.
  Maes bars, Symetric side-pull, T.A. / Stronglight / Nervar cranks, Simplex
  Maxi, Nisi rims, Raleigh-branded parts, generic sizes.
- Exposed a splitter bug: "Campagnolo Nuovo Record, 12 speed" in the
  Derailleurs column would have split by position (front = groupset, rear =
  "12 speed"). splitCellValue now only splits by position when a part carries
  its own label's hint word and none carries another's; all 14 loaded
  catalogs regenerate to unchanged counts.

## 1975 Raleigh — `1975_raleigh_spec.csv` (10 bikes, 187 specs, 68 linked)

- Source: https://www.retrobike.co.uk/archive/1975-raleigh-catalogue.1191/
  (r75.pdf, 24 pages, 150 ppi JPEG scan, no text layer; US edition;
  download needs the archive page's cookies first). CSV written by hand
  (scratchpad script) from the Technical Specifications table p. 23, read
  from 400 dpi crops; headers copied from the 1974 CSV. `data_source` 130
  citation names the scan (UPDATE appended to the load file).
- Models: Team Professional DL-185, Professional Track DL-175, Professional
  Mk IV DL-180, International DL-170, Competition Mk II DL-165, Gran Sport
  DL-160, Super Course Mk II DL-100 & 100L, Grand Prix DL-115 & 115L, Record
  DL-130 & 130L, Super Tourer DL-140 (the DL-135 5-speed is gone).
- Source fixes in the CSV: Super Tourer chain printed `1/24" x 3/32"` ->
  `1/2" x 3/32"`; "Prugnet 62 A" / "Prugnant 62A" lugs -> Prugnat 62A (1974
  spelling); line-break hyphens rejoined ("Compe-tition"). Track brakes /
  derailleur blank -> "None"; Extras blank for Super Course, Grand Prix,
  Record. Weights 22½ / 26¼ -> "22.5 lbs." / "26.25 lbs.".
- Overrides: 1974 picks re-keyed for 1975 wording (Weinmann "999
  Centerpull" -> 7929; Huret Challenger / Challenger Deluxe -> 2388 / 4273;
  Huret Jubilee 10 Speed -> 2396 / 4303; Record Pista Large Flange -> 3270,
  Record Strada Large Flange Q/R -> 3260; Normandy Competition word order ->
  3388; Regina D'Oro chain -> 1382; Brooks Professional Team Special ->
  5304; Nuovo Record Cotterless -> 1496; Pista 165 mm -> 1505). Team
  Professional: brakes now "Campagnolo Super Record" -> 582 (4061 Super
  Record v1, 1974-82) instead of 1974's 2040 Record; RD 4148, crank 1509,
  pedals 3716, seatpost 5759 as 1974. Simplex Prestige rear stays 4583
  (dated 1971-74, closest row).
- Left unlinked: Super Record front (DB rows start 1979) and hubs (high /
  low flange ambiguous); Gran Sport "Normandy Large Flange Q/R Alloy" (Sport
  vs Competition); Weinmann Symmetric (1970 black / red label rows); T.A.
  Criterium, Nervar, Maillard 13-26, Simplex Maxi, TTT Franco Belge / Track
  bend, Raleigh-branded parts. All loaded catalogs regenerate unchanged.

## 1977 Raleigh — `1977_raleigh_spec.csv` (6 bikes, 95 specs, 22 linked)

- Source: https://www.retrobike.co.uk/archive/1977-raleigh-catalogue.1345/
  (r.pdf, 24 pages, scan with no text layer; US edition, Raleigh / Rampar;
  download needs the archive page's cookies first). No combined table: one
  model per page with its own "Specifications" block. Transcribed by hand
  from 400 dpi crops of pp. 3-7 and 11; `data_source` 131 citation names
  the scan.
- Scope (user's choice): Raleigh derailleur lightweights only —
  Professional Mk V, Competition GS, Super Course, Grand Prix, Record
  Limited, Record 24. Not added: Rampar R-One / R-Two / R-Three / R-Four
  10-speeds (if wanted later, user said title them "Rampar R-One" etc.
  under Raleigh), Tourist, Sprite 27, Sports, LTD, and the kids / hi-rise /
  BMX models (Space Rider, Mountie, Grifter, MX, Rampar R-5 to R-16).
- The "Gears" line was split into Derailleurs / Freewheels / Shifters;
  "Wheels" into Rims / Hubs; Handlebar line into Handlebars / Stems. Kept
  as printed: Super Course 27" size, 14-34 freewheels (Grand Prix, Record
  Limited), Grand Prix 27 x 1-1/4" rims vs 27 x 1-1/8" tyres, "Cortone".
  No weights in the source.
- Overrides: Mk V brakes "Campagnolo Record side pull" -> 573 (2040
  pre-CPSC, ranged to 1978); Mk V crank -> 1496 (as 1975); Mk V Brooks
  Professional "with copper rivets" -> 5303 (copper = standard Team
  Professional; 5304 Team Special is the polished-rivet one); Competition
  GS: Gran Sport rear -> 4085 (3500 Nuovo Gran Sport), Weinmann Carrera ->
  1167 (earlier), Nuovo Tipo small flange -> 3230 (1251), Brooks
  Professional -> 5303; Super Course: SunTour Cyclone rear -> 4735
  (RD-1700), Raleigh/Weinmann 610 -> 1138, Atom small flange -> 3183;
  Normandy Sport forged large flange -> 3390; Record 24 "Challenger" ->
  Huret 2388 / 4273.
- Left unlinked: Gran Sport front (rows start 1978) and crank (3320 ends
  1975, 0304 starts 1980); Compe V front (2602 vs 2603); Mk V bare
  "Campagnolo Record quick release" hubs (flange not stated); Raleigh/
  Weinmann forged centerpulls with no model; Weinmann A124 (only a 1983
  row); IRC Featherlight, SR 5RGII, SunTour bar-end / power shifters.
  All loaded catalogs regenerate unchanged.

## 1978 Raleigh — `1978_raleigh_spec.csv` (7 bikes, 140 specs, 35 linked)

- Source: ebykr.com, "Ride With the Winner: Team Raleigh" US catalogue
  (https://ebykr.com/library/raleigh-1978-catalog-ride-with-the-winner-team-raleigh-united-states/),
  six scans: cover, contents, printed pp. 3-5 (Professional Mark V,
  Competition G.S., Super Course model pages) and p. 27 Technical
  Specifications grid; `data_source` 145. Model pages 6-12 are not
  scanned, so Super Grand Prix, Grand Prix, Record Ace and Record FFS/PPS
  come from the grid alone. Transcribed by hand (2026-10-08) from the
  grid, cross-checked with ebykr's transcription and the three model
  pages (they agree; the grid adds Atom 440 pedals for the Super Course).
- Scope as 1977: Raleigh derailleur lightweights only. Not added: Rampar
  R Four / R Two / R 1027 (grid columns 8-10). Titles kept identical to
  1977 ("Professional Mk V", "Competition GS") so the bikes key as the
  same models in a new year. Grid rows Wheel Base / Frame Angles folded
  into Extras; Derailleur row split into Front / Rear / Shifters.
- Overrides (1978 Raleigh block in the generator): Chains 'regina oro'
  ranged { to 1980: 1382 Extra 50 Oro, from 1981: 1380 Oro BX } — the
  matcher had hit the undated Oro BX, and the range keeps the 1986
  Cinelli on it; 'shimano uniglide' -> 7450 CN-UG20; RD 'sun tour
  cyclone gt' -> 4738 RD-1800, 'raleigh sun tour vgt' -> 4705 RD-1500
  V-GT Luxe v2 (1978-82), 'raleigh sun tour seven gt' -> 7788 RD-2000,
  'shimano positron' ranged { to 1979: null, from 1980: 4525 } (1978
  undecidable between Positron-II / EM / 400; the matcher exact-hit the
  bare 1980 velobase row, which the 1983 Silhouette keeps); Shifters
  'positron stem shifters' -> 7436 LC-410; Brakes 'weinmann 605 ... wheel
  guides' -> 1133 (the 605 variant dated 1978-80), 'raleigh weinmann
  short reach alloy center pull' -> 1138 Raleigh 610 (named as 610 on the
  1977 Super Course); Cranksets 'campagnolo nuovo record cotterless 42
  51t' -> 1496, 'campagnolo gran sport cotterless 42 52t 170mm' -> 1472
  0304 (as the 1979 Colnago; row dated from 1980 — 1977 left it
  unlinked), 'shimano ffs 40 52t 165mm' -> 1777 FFS; Freewheels Perfect
  14/28 and 14-34 -> 2245 PT-5000 (as 1983 Royal); Hubs Nuovo Record /
  Gran Sport / Atom small flange Q.R. -> 3259 / 3256 / 3183; Seat Posts
  Record / Gran Sport 27.2mm -> 5749 / 5734; Rims A124 -> 7776; Pedals
  'atom 440' -> 3662 (kept on the velobase row the 1973-77 Raleighs and
  1974/75 Motobecanes link; 7246 "Maillard Atom 440" from the Maillard
  catalogue is a duplicate to merge on the component side).
- Matcher picks checked: Record side pull 573 pre-CPSC (ranged to 1978),
  Nuovo Record FD 2299 1052/NT (1978-82), RD 4125 v3, Gran Sport 2276 /
  4085 / 3688, Super Leggera Strada pedals 3709, Brooks Professional 5303,
  Team Special 5304 (row dated from 1981, as the 1974/75 picks), G.B. Biba
  6537.
- Left unlinked: Compe V front x5 (2602 1974-79 and 2603 1970-84 both
  fit; same as 1977), "Campagnolo down tube controls" (1013/5-6, 1014
  later, 1014 milled all fit 1978), Raleigh/Shimano 400 front, Normandy
  large flange Q.R. (Sport vs Luxe Competition), Brooks CR3 (no row),
  Mavic Sprint, Raleigh/SR cranks / stems / posts, Raleigh tyres and
  pedals, bare tooth-count freewheels, Shimano 14-28T and small-flange
  hubs, handlebar-end / stem power shifters.
- Regression: all 23 loaded catalogues unchanged (1,526 links).

## 1976 Raleigh UK brochure — not loaded

- https://www.retrobike.co.uk/archive/1976-raleigh-catalogue.351/ is a
  12-page UK brochure excerpt with prose only (no spec table), covering
  Raleigh, Carlton and Sun. Transcribed into three CSVs, then reversed at
  the user's request before loading: not what they want in the DB.

## 1982 Raleigh — `1982_raleigh_spec.csv` (6 bikes, 73 specs, 30 linked)

- Source: https://www.retrobike.co.uk/archive/1982-raleigh-lightweights-racing-catalogue.993/
  (r.pdf, 9 pages, scan with no text layer; UK "The Raleigh Racing Formula"
  lightweights brochure, Spring 1982). Each model has a short paragraph
  naming its parts plus a size / wheel list, no table. Transcribed by hand
  from 400 dpi crops of pp. 3-5; `data_source` 132 citation names the scan.
  User approved this prose format (unlike the 1976 UK brochure) because the
  paragraphs name specific parts.
- Models: Team Replica 12 (Nuovo Record), Gran Sport 12 (Gran Sport),
  Record Ace 12 and Competition 12 (Gran Sport derailleurs), Clubman 12 and
  Rapide 12 (Campagnolo 980). Not added: the frameset page (p. 9),
  clothing, Reynolds advert. "Ensemble" parts were copied into each
  component column (gear, chainset, brakes, pedals, seat pin, headset);
  tyres taken from the wheel line (700 x 25 / 27"). No weights.
- Overrides: Gran Sport crank split by year — `{1978-1982: 1472, 1983+:
  1473}` — the Bianchi-labelled 0304 (1473) was a global pick from the
  1984 Bianchi, its only 1983+ user; Nuovo Record crank -> 1496, hubs
  "small flange quick-release" -> 3259 (1034), seatposts NR -> 5749 / GS
  -> 5734, Mavic GP4 -> 5069, ISCA Tornado suede -> 5382, SunTour Ultra 6
  chain -> 7820 (UC-6000), Weinmann 610 centre-pull -> 1138 (Raleigh 610,
  row dated 1970-80, ranged to 1982); "forged alloy" stem -> null (was
  hitting the 1950s GB Hiduminium).
- Left unlinked: Campagnolo Gran Sport brakes (553 / 554 share dates),
  Weinmann 605 / 500 (many variants), SunTour Ultra 6 freewheel (5
  rows), SR Custom (~15 1982 variants), Nuovo Tipo hubs (flange not
  stated), Cinelli bars / stem (no model), Clement Ritmo. All loaded
  catalogs regenerate unchanged.

## 1983 Raleigh — `1983_raleigh_spec.csv` (21 bikes, 462 specs, 101 linked)

- Source: https://www.retrobike.co.uk/archive/1983-raleigh-racers-catalogue.1133/
  (16-page PDF, 100 ppi JPEG scan, no text layer; UK "Racers - The
  Race-Bred Raleighs", Spring 1983). Download needs the archive page's
  cookies and full browser headers (a curl with a bare UA gets 406 even
  on the archive page). Four Technical Specifications tables, pp. 5, 9,
  12, 15, transcribed by hand (scratchpad script) from 300 dpi crops;
  `data_source` 133 citation names the scan.
- Scope (user's choice): all 21 table columns — Team Replica 12, Gran
  Sport 12, Road Ace 12, Competition 12, Record Ace 12; Royale 10, Royal
  10, Clubman 12, Rapide 12, Record Sprint 12, Zenith 10; Stratos 10,
  Silhouette 5 & 10, Europa 12, Medale 5 & 10 Ladies / Mens (two table
  columns, two bikes); Supersport 12, Wisp 5 & 10, Winner 5 & 10, Ace 5 &
  10, Micron 5. Not added: frame sets (p. 16), accessories.
- CSV layout: Wheels split into Rims / Hubs / Spokes; Lugs out of Frame
  Material; Frame Angles appended to Frame Material; Derailleur cell into
  Front / Rear Derailleur + Shifters; toe clips out of Extras into Toe
  Clips; bar tape / grips / cables into Cable & Tape. Arrow-spanned cells
  copied into each spanned column. Fixes: "Regino Oro" -> Regina Oro; Wisp
  10-speed "60cm (23")" -> 23.5" (model page). Shifters for Medale Mens,
  Winner, Ace, Micron (blank in the table) taken from the model text.
- Generator: WORD_ALIASES `600ax` -> `600 ax` (table prints "600AX").
  Road Ace 600 AX: RD-6300, FD-6300 clamp, BR-6300, FC-6300, FH-6361,
  PD-6300, HS-6300, SP-6300 (Kalkhoff pick), bars HD-7300 Dura-Ace AX;
  shifter -> null (generic "Shimano 600" hit; four SL-63xx variants).
- Overrides: Gran Sport crank exact wording -> 1472 plain 0304 (the 1983+
  bare-key range is the Bianchi-labelled 1473); Nuovo Record crank 1496;
  SunTour VGT Large Capacity -> 4705 RD-1500 (bare "sun tour vgt" is the
  1973 4900); Seven front 2641; Volante 4708; Compe-V -> 2603 (only row
  past 1979); Weinmann 405 -> 1117, 610 -> 1138 (as 1982); Campagnolo
  Strada headset 2963 / seatpost 5749; Nuovo Tipo 3230; Atom 3183;
  Cinelli 65 -> 2804, 1A -> 6489; SR Apex 7901, CT-P5 5857, CT-P6 5861,
  SP-12 3924; Tange MA60 3144; SunTour Z 7821, Ultra-6 chain 7820;
  Uniglide chain 7450, freewheel 7475; NW-6000 2238, PN-6000 / Perfect 6
  7813; Regina Oro 2194; Weinmann A124 -> 7776 (only A124 row, "Super X").
- Left unlinked: Weinmann 500 / 605 / 610-750, Gran Sport brakes, Ultra-6
  freewheels, SR Custom cranks / stems / bars, Tange CMA60 / New Levin,
  600 EX headset, Huret Eco front, Positron front, ISCA Tornado (cover not
  stated) / Competition / 407, Sedisport chains, 600AX cassette (DB row
  is under Cassettes). All loaded catalogs regenerate byte-identical.
- 2026-10-08 link-gap pass: Road Ace "600AX Cassette" -> 1197 (Shimano AX,
  600 AX; an override can point across categories) and Clubman "Ultra 6
  Silver 13-...-24T" -> 2240 NW-6500 (13T top sprocket rules out the
  14T-start Perfect US-6500; US-6000 is dated 1978 only). Record Ace's
  14-28 Ultra 6 stays unlinked (no Ultra-6 row goes past 26T), as do the
  bare 1982 "Sun Tour Ultra 6" values.

## 1984 Raleigh — `1984_raleigh_spec.csv` (19 bikes, 435 specs, 94 linked)

- Source: ebykr.com, "Raleigh 1984 Catalog — Racers: The Race-Bred
  Raleighs" (https://ebykr.com/library/raleigh-1984-catalog-racers-the-race-bred-raleighs/),
  16 scans, UK edition, TI Raleigh Ltd; `data_source` 148. Four Technical
  Specifications grids, pp. 5, 9, 12, 14, all legible at the "-scaled"
  (1782 x 2560) size. Transcribed by hand (2026-10-09) from ebykr's
  transcription checked grid by grid against the scans; one correction:
  Sirocco freewheel reads "PN6000" in the scan, not "Pro6000".
- Scope as 1983: every grid column. Team Replica 12, Road Ace 12,
  Competition 12, Corsa 12, Sirocco 12 (p. 5); Record Sprint 12, Quasar 12,
  Pulsar 10, Team Cadet 10, Winner 5 & 10, Sprint 5 & 10 (p. 9); Classic
  15, Record Ace 12, Royal 10, Clubman 12, Zenith 10 (p. 12); Stratos 10,
  Weekender 15, Medale 5 & 10 (p. 14). Not added: p. 15 framesets (Team
  Professional, Gran Course, Gran Tour, 753 Pro Super, Time Trials
  Special), gear-ratio rows, the ladies' versions (in the separate Raleigh
  Collection catalogue). Model titles match the 1983 file where the model
  carried over (Team Replica 12, Road Ace 12, Competition 12, Record Ace
  12, Royal 10, Clubman 12, Zenith 10, Stratos 10, Medale 5 & 10, Record
  Sprint 12, Winner 5 & 10).
- CSV layout as 1983 (Wheels -> Rims / Hubs / Spokes, Derailleur ->
  Front / Rear / Shifters, Mudguards -> Fenders, tape and cable colour ->
  Cable & Tape, Frame Angles appended to Frame Material, toe clips out of
  Extras). Gear ratios dropped.
- Matcher errors nulled: Pulsar "Maillard Alloy" (hit a Roval by Maillard
  rear hub), three "Selle Royal Aero ..." (hit the bare Selle Royal brand
  row 5521; no Aero model row), Weekender "Huret ECO Duopar" (hit the plain
  Eco 4301; now 4277 Duopar Eco Version 1).
- Overrides added (1984 Raleigh block): Headsets 'shimano 600 ex with aero
  cover' -> 3090 HP-6207; Brakes Weinmann 405 -> 1117, Shimano 105 ->
  958 BR-S105 Golden Arrow, 600 AX -> 965; FD Shimano 105 -> 2466, AR
  (both spellings) -> 2620 FD-2500, 'sun tour arx' -> 2621; RD Shimano 105
  -> 4452 RD-A105, Cyclone II -> 4742 RD-3500, Cyclone II GT -> 4743
  RD-3700, AR -> 4725 RD-4200, 'sun tour arx' -> 4727, Eco Duopar -> 4277,
  'huret titanium bodied duopar' -> 4398 Sachs Huret DuoPar (titanium)
  (judgment: the DB's other Ti Duopars are the 1976 2600 series); Cranks
  Nuovo Record 52/42 SR rings -> 1496, 600 AX -> 1787; Chains Z (four
  spellings) -> 7821, Ultra 6 Narrow -> 7820, Uniglide Silver/Black ->
  7450; Freewheels NW6000 -> 2238, PN6000 -> 7813, PN5000 -> 2245 PT-5000,
  Ultra 6 13-24 -> 2240, Regina Oro 13-18T -> 2194, 600 AX Cassette
  13-21 -> 1197; Hubs 600 AX -> 3532, 105 -> 3526, 'maillard competition
  small flange alloy qr' -> 8136 (Maillard 1979 de-luxe competition
  small-flange Q/R), 'maillard atom helicomatic qr black' -> 3387; Pedals
  SP12 -> 3924; Saddles ISCA Tornado suede -> 5382; Seat Posts CTP5
  (three wordings) -> 5857, CTP6 -> 5861, CTP3 -> 5855, 600 AX Aero ->
  5886; Stems 'cinelli 1a' -> 6489; Handlebars Dura Ace Engraved Bend ->
  2917; Rims A124 Eyeletted Black -> 7776; Tyres Vittoria Nuovo Pro ->
  6893 (only Nuovo Pro row).
- Matcher picks kept: Sedisport -> 1402 Sedisport Delta (1987 Bianchi
  precedent), Sugino GS 1934 / PX 1957, Maillard Atom Q.R. -> 3386,
  Helicomatic -> 3387, Brooks B17 -> 5315 Champion Standard, Huret ECO-S
  -> 4301 Huret Eco, Tange MA60 3144, SR Apex 7901, Mavic GP4 5069.
- Left unlinked: Weinmann 500 (three velobase variants), 605 (four), 610/750
  and bare centre-pulls, Tange CMA60 / New Levin, Sugino DGT, Thun Gamma,
  Shimano "Alloy" 105 crank and 105 cassette 13-24, Helicomatic freewheels
  (no row), Sakae SP 362, Union 632, Michelin Club Tourist, Vredestein
  Racer, Huret Club / Club AS front, Huret Eco-S front, Simplex, SR Custom
  bars / stems, Cyclone II front (FD-2300 and FD-2400 both fit), bare
  "Maillard Competition Q.R." (flange unknown), generic cells.
- Regression: all 26 loaded catalogues unchanged except the 1983 Road Ace
  "Shimano 600 EX with Aero Cover" headset, previously unlinked, now 3090
  via the new key; regenerated and back-filled, 1983: 100 -> 101.

## 1985 Raleigh — `1985_raleigh_spec.csv` (19 bikes, 371 specs, 92 linked)

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
- 2026-10-06: Special Features parts moved to their own columns (CSV
  rewritten by script, every other cell verified unchanged): Headset
  ("Tange sealed headset" Portage, "Tange FL-225 sealed headset" Crested
  Butte — no FL-225 row, so unlinked), Toe Clips (7 bikes), Spokes
  ("Stainless steel spokes", Prestige / Team U.S.A.). Old Special Features
  rows 3306 / 3325 / 3344 / 3363 / 3382 / 3401 / 3421 / 3458 / 3575 deleted
  and reloaded; 360 -> 371 specs, still 91 linked. Pursuit Gearing "14-36 -
  6 speed" vs Freewheel "14-30 - 6 speed" looks like a transcription slip;
  left, needs the scan.

## Link-gap pass on the weakest categories — 2026-10-08

Driven by the new `/linkCoverage` endpoint (Handlebars 9.5%, Tyres 12.8%,
Rims 18.9%, Brake Levers 20.8%, Freewheel 21.5% before this pass). Raleigh
gained 12 links, all via `COMPONENT_OVERRIDES`; no CSV or row changes.

- Freewheel "Campagnolo 15T" / "15T x 1/8\" Fixed" / "15 Tooth Fixed" on the
  1973 / 1974 / 1975 Professional Track DL 175 -> 6380 Campagnolo 763
  Sprocket (steel). The row is under Single Sprockets (same category
  crossing as the Road Ace 600AX cassette); steel rather than 763/a
  Superleggero because the spec says 1/8" and never says alloy, and 764
  Record Pista is the 3/16" cog.
- Handlebars "TTT Track Bend" (1975 Professional Track) -> 2753 3ttt Record
  Competizione Track (Pista), dated to cover 1975; the only other 3ttt
  track bar, Racing Team Service PISTA, is undated and the later line.
- Rims "700 C Weinmann A 124 narrow, concave section alloy" (Competition
  GS) and "...A124..." (Super Course), 1977 -> 7776 Weinmann A124 Super X,
  the same row the 1982/83 entries use (it is the only A124, dated 1983).
- Tyres "Clement Ritmo Tubular" (1982 Team Replica, 1983 Team Replica and
  Road Ace) -> 6767 Clement Ritmo LTX 55, the only Ritmo row.
- Freewheel "Sun Tour Wide Ratio 14-18-23-30-34T" (1983 Royal 10 / Royale
  10) -> 2245 SunTour PT-5000 Perfect (5-speed). Judgment call: Perfect
  was the touring line and the 1983 Rapide already links to Perfect; New
  Winner was the racing block.
- Handlebars "SR Royal special racing bend, alloy" (1985 Prestige, a road
  bike) -> 7884 SR RY-978 Royal-978; the other Royal row (RY-RC) is the
  track bar.
- Also loaded in the same run: the 1983 Clubman "Sun Tour Ultra 6 Silver
  13-...-24T" -> 2240 and Road Ace "Shimano 600AX Cassette" -> 1197
  overrides committed earlier that day (38d64d9) but never loaded.
- Left unlinked on purpose: 1982 "Sun Tour Ultra 6" (Clubman / Competition
  / Rapide / Record Ace 12) — the 1983 catalogue puts these same models on
  three different blocks (New Winner, Perfect, 600AX), so the bare 1982
  text is undecidable; "G.B. Maes Alloy Engraved/Embossed" (1973-75
  Professional / Team Professional) — the two with-ferrule GB Maes rows
  differ only by ferrule shape; "13/26T Maillard 6 speed" (1974/75
  Professional Mk IV) — every Maillard 6-speed row is dated 1980+; "Dia-Compe
  161 / 164", "Kusuki WP-B / WPR-B", "Araya SP-30", "Vredestein 700 x 20C
  Racer", "Raleigh Maes Alloy" (18 bikes; only a bare 1980 Raleigh bar row)
  — no DB row.
- 2026-10-08 (Colnago ingest): Brakes 'campagnolo gran sport' override added for the 1979 Colnago Export (553 to 1980, 554 from 1981) also linked the 1982 Clubman/Competition "Campagnolo Gran Sport" brakes -> 554 second gen, consistent with the 1983 'gran sport brakes' entry; regenerated and back-filled, 29 -> 30.
