# Catalogs processed so far

One entry per CSV. Records the source-data repairs (which live only in the
gitignored CSV) and the linking decisions, so they don't get re-litigated.
Link counts are as of the last load; regenerate to confirm.

## 1973 Zeus — `1973_zeus_spec.csv` (6 bikes, 96 specs, 35 linked)

- Header "Rear Derailleurs" renamed to "Derailleurs": values (Criterium 69,
  Alfa 72, Alfa Junior) are groupset names, so both derailleurs get rows.
  Old label rows were deleted from the DB before reload.
- "Handlebars / Stem" is a rename to Handlebars, not a split: the values only
  ever describe the bar.
- Overrides: Zeus Gigante → Gigante road (bare "Gigante" is road-only in this
  catalog); Zeus Pista hubs → Gigante Pista; Super Alfa → Super Alfa 71; Alfa 72
  → "Especial Alfa 72" (rear) and Zeus Alfa (front); Zeus Leather saddle →
  Zeus (black suede); Cinelli Pista Handlebars → Cinelli 67 Pista (old logo);
  Iris 1/2 x 3/32 chain → Iris (brand row kept on purpose).
- Left unlinked: Alfa Junior front derailleur (no Junior front in DB), Alfa
  bottom bracket/headset/hubs/seatpost (no Alfa rows in those categories),
  Competición bars, Arius saddles, Z 67 fixed gear.

## 1940 Bianchi — `1940_bianchi_specs.csv` (17 bikes, 153 specs, 3 linked)

- Four models had "Identical to <model>" placeholder cells (Freccia←Folgore,
  Costantino←Cesare, Cleopatra and Cirene←Cecilia); copied across 24 cells.
  Those four bikes were deleted and reloaded.
- Header has a UTF-8 BOM; the parser copes.
- Only "Regina Extra (1 speed)" freewheels link. Everything else is Italian
  prose or names the maker (Società Catene Calibrate Regina) rather than a
  model. Not fixable with overrides.

## 1973 Raleigh — `1973_raleigh_spec.csv` (9 bikes, 165 specs, 48 linked)

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

## 1974 Motobecane — `1974_motobecane_spec.csv` (7 bikes, 119 specs, 30 linked)

- "Catalog Page Reference" column ignored via IGNORED_LABELS.
- Frame Size cells had backslash/doubled-quote inch-mark debris; rewritten.
- Values carry shifter asides after an em dash or comma ("SIMPLEX PRESTIGE —
  stem shifter"); normalizeForMatch now treats dashes and commas as spaces.
  "Jubile" aliases to "Jubilee".
- Wrong auto-link fixed: CAMPAGNOLO RECORD pedals were hitting the 1983 50th
  Anniversary pedal; now Record Strada 1037.
- Overrides: Campagnolo Record crank → Nuovo Record Strada v4 (BCD 144), hubs
  → 1035, headset "Campagnolo" → 1039 Gran Sport/Record; Stronglight
  Competition → V4 Competition (earlier); Stronglight 49 → 49D; Universal 61 →
  Mod. 61; Normandy Luxe Competition → gold label; SunTour V.G.T. Lux → V-GT
  Luxe v1, V.G.T. → V-GT type 2C/2D; Brooks Professional "with ... seat post"
  → Team Professional.
- Left unlinked: Sedis (no plain row), Weinmann 999 De Luxe / 500, Nervar and
  Solida steel cranks, T.A. Professional (no row), Atom freewheels, Lyotard,
  Motobecane-branded parts, Pivo generic stems.

## 1975 Motobecane — `1975_motobecane_spec.csv` (11 bikes, 194 specs, 46 linked)

- "Catalog Page" ignored. Frame Size and Wheel Rims & Tires cells had the same
  inch-mark debris; rewritten (`27" x 1-1/4"`).
- Riviera and Nobly/3 had "STURMEY ARCHER 3 speed hub" in the Derailleur
  column; moved into Hubs ("... front / STURMEY ARCHER 3 speed rear") and
  Derailleur blanked. They link to the brand-level "Sturmey Archer" hub row
  because the DB has no AW row.
- "Wheel Rims & Tires" added to SPLIT_LABELS (Rims + Tyres). Tyres link via
  overrides (Elvezia, Paris-Roubaix → Clement); the Super Champion rim model
  isn't named so Rims stay unlinked.
- Wrong auto-link fixed: CAMPAGNOLO Record headset was hitting Record Pista
  #1040; now 1039 Gran Sport/Record.
- Overrides: Record 42-53 crank → v4; Record large/low flange → 1035/1034;
  Huret Jubile wide ratio → Jubilee rows; Huret Challenger stem shifter →
  hinged band (front) / generic Challenger (rear, auto); SunTour V.G.T. Luxe
  both shifter forms → V-GT Luxe v1; Universal Mod 68 → Super 68; Mafac Racer
  → "lettered MAFAC RACER"; Philippe Professional → Professionnel; Cinelli
  Giro d'Italia → 64 Giro D'Italia (70's model) bar and 1A (winged C) stem;
  Regina Oro 13-21 → Regina Oro (6 speed).
- Left unlinked: Unicanitor (ten variants, user to pick), Sedis, Weinmann,
  Nervar/Solida/Tourney/T.A. cranks, Atom clusters, Lyotard/Union pedals.

## 1981 Kalkhoff — `1981_kalkhoff_spec.csv` (8 bikes, 136 specs, 57 linked)

- German-sourced, partly translated. Repairs: lowercase headers title-cased,
  "Frame" → "Frame Material"; the English "Toe Clips" column was a duplicate
  of "Haken" (German for toe clips) with worse data, so it was dropped and
  Haken renamed; "-/-" → "None"; "Rec." → "Record", "Conti" → "Continental";
  frame/handlebar cells put into English ("11 Reynolds 531 C tubes",
  "Belleri touring bar").
- Two rows each described two models ("Amateur 06 S / Amateur 56 S",
  "Touring 05 S / Touring 55 S") with a split size cell; split into one row
  per model with its own sizes. The stem cell "SR AX; AH" stays on both.
- "Bottom Bracket and crankset" added to SPLIT_LABELS.
- Shimano rows are titled "Shimano FD-7200, Dura-Ace EX" (part number between
  brand and group), so nothing Shimano links by substring — every Dura-Ace EX
  and 600 AX part is an override. "Shimano 600 AX" otherwise substring-hits
  plain "Shimano 600" (wrong).
- 1981 choices: Super Record rear → 4001 PAT. 80, front → 1052/SR, brakes →
  4061 v1, headset → 4041, bottom bracket → 4031 second gen (bare substring
  hit a titanium 1st-gen row), seat post → 4051 Campagnolo Script, pedals →
  4021 Strada, crank → 1049/A; Cinelli "Super Record" stem → 1R (1/Record);
  Dura-Ace EX chain → CN-7100 Uniglide (no row carries "EX").
- Brand rows kept: Sakae cranks → Sakae/Ringyo (SR); "Union" chain → Union
  486 and pedals → Union U40 (only Union row in each category; auto).
- Left unlinked: Dura-Ace EX hubs (four EX hub rows, nothing to choose on),
  plain "Shimano 600" front (no row), Weinmann 506, CLB, Rigida/Weinmann rims,
  Tange, Maillard, SunTour hubs/pedals, tyres, "SR" stems. Toe Clips has no
  component category.

## 1983 Bianchi — `1983_bianchi_spec.csv` (9 bikes, 118 specs, 47 linked)

- This catalog exposed that overrides were global: its "Campagnolo Nuovo
  Record" derailleurs inherited the 1973 Raleigh picks. COMPONENT_OVERRIDES
  now accepts year ranges; Nuovo Record front/rear and the Gran Sport and
  Nuovo Record brakes are ranged. (The rear ranges first chosen here were
  wrong against the DB's own dating and were corrected later — see "Nuovo
  Record rear-derailleur ranges" below.)
- Repairs: three "&"-joined columns split in the CSV into Stem/Handlebars,
  Saddle/Seatpost, Hubs/Headset (a bare groupset name goes in both cells, a
  single-part value fills only its cell); "Frame Material/Tubing" → Frame
  Material, "Tires" → Tyres, "Rims/Wheels" → Rims; "(Bianchi-)engraved"
  dropped, "N.R." → Nuovo Record, "Super Record chainwheel" → Campagnolo
  Super Record, "Ofmega Competition" → Competizione (DB spelling). Six cells
  hand-fixed after the split (Selle Italia out of Seatpost, Campagnolo Tipo
  out of Headset, spoke note kept on hubs only, "Mavic rims" → "Mavic").
- Auto-links corrected: NR headset was hitting "Nuovo Record Alleggerita"
  (now 1039), NR hubs an odd "(low flange, non-drilled, disk?)" row (now 1034).
- 1983 choices: Gran Sport → 3600/NT front, 3500 rear, second-gen brakes,
  1006 hubs, 1040/A headset, 0306 116 BCD triple; Ofmega Competizione crank →
  the Bianchi-labelled row; Gipiemme Pista → Gipiemme Special Pista/600101;
  Record Pista → 1051 crank, 1036 hubs, #1040 headset; fluted Campagnolo posts
  → 1044 NR Superleggero; Cinelli #2 → Unicanitor #2 suede; Sugino
  SuperMighty → Super Mighty Competition.
- Left unlinked: TTT stem/bars/saddle/post (no model), Cinelli bars, San
  Marco saddle/post, Selle Italia Aero II (no row), Campagnolo Tipo (five
  Nuovo Tipo rows), Mavic Monthlery (three), tyres, Mafac cantilever,
  Shifters/Levers (no category mapping).

## 1984 Bianchi — `1984_bianchi_spec.csv` (6 bikes, 77 specs, 24 linked)

- Looser translation than 1983. Repairs: Frame → Frame Material, "Fork
  details" → Fork, Tires → Tyres, "Rims & Spokes" → Rims, "Saddle & Seatpost"
  split; Campagnolo prefix restored on "Gran Sport pedals/crankset" and
  "Super Record chainwheel"; the translator's "Super Record Pro" → Super
  Record (four cells); the Super Leggera's "Engraved chainring" → Campagnolo
  Super Record and "Fluted seatpost" → "Campagnolo fluted"; TTT stem → TTT;
  Ofmega Competition → Competizione; "Rugged Gipiemme Pista Grupo" → Gipiemme
  Pista Gruppo; trailing "rims" dropped from Mavic values.
- "Groupset / Components" kept as a free-text label (no category); it
  duplicates the part cells but is the only place two bikes name their group.
- Auto-links corrected: NR pedals were hitting "Nuovo Record orthopedic" (now
  1037 Record Strada); "Record Pista" crank was hitting the "non-fluted" row
  (now 1051, same as 1983).
- Picks: Modolo Flash → 1st version; Gran Sport pedals → 3700 and crank →
  0304 Bianchi-labelled (both ranged from 1978); Mavic GP4 → plain GP 4;
  "Mavic OR 10 (tied and soldered spokes)" → OR 10.
- Left unlinked: fork prose, TTT stems, San Marco, plain Mavic and Super
  Champion rims, Wolber tyres, the groupset column.

## 1987 Bianchi — `1987_bianchi_spec.csv` (16 bikes, 320 specs, 128 linked)

- Richest catalog: full parts lists with model numbers, but six columns pair
  two components comma-separated. Split in the CSV on the first comma:
  Handlebar and Stem, Saddle and Seatpost, Hubset and Spokes, Freewheel and
  Chain, Tires and Rims, Derailleurs and Shift Levers (→ Derailleurs +
  Shifters; a comma-less groupset name fills both). Brakeset keeps the
  caliper only (lever notes dropped). Finish qualifiers stripped everywhere
  (pantographed, anodized, laser etched, silver, aero kit, alloy).
- Renames: Frame → Frame Material, Miscellaneous → Extras; N600/N105 →
  Shimano 600/105 (the 6207 and 1050 groups); 3T → 3ttt; Suntour → SunTour
  and bare Alpha-5000 prefixed; bare "C Record" chain → Regina C Record;
  Pista "Campagnolo 16T fixed gear" → "Campagnolo 16T fixed cog".
- Hand fixes after the split: five ITM stems kept a leading comma; Trofeo's
  "Campagnolo Super Record/B Special 3T RSR" is derailleur + seatpost
  spillover (→ Super Record); Super Leggera's "C Record/B Special Gipiemme
  derailleur" → Gipiemme Special derailleur, C Record levers; "Anatomic"
  saddle → "Anatomic saddle" (was substring-hitting Madison Anatomic);
  Campione d'Italia's mixed SunTour cell → Cyclone 7000 with the Alpha-5000
  front noted in Shifters.
- Introduced the explicit-null override ("do not link"): 1987 "Shimano 600"
  brakes substring-hit the 1970s centre-pull and the DB has no 6207 row.
  Ranged so pre-1984 catalogs still get the centre-pull.
- Auto-links corrected: C Record pedals (Pista → 305/501), C Record headset
  (Century Finish → 304/104), Master Gran Premio crank (Master → Gran
  Premio), Shimano 105 hubs (Golden Arrow → HB-1050), Dura-Ace brakes
  (centre-pull → BR-7400, ranged from 1984).
- Picks: New Victory → Victory rows (S3 rear, 422 low-flange hubs, 415/102
  brakes, 0355 crank, 405/000 pedals); Dura-Ace SIS-7 → 7400 series
  (RD-7401, FD-7400, MF-7400 7sp, FC/PD/HP-7400); Shimano 525/532 SIS →
  Light Action RD-L525/L532; C Record shifters → Retro-Friction 2nd gen;
  C Record seatpost → Aero 130mm; Ofmega Competizione Pista hubs → Super
  Competizione Track; Gipiemme Cronosprint headset → Crono Sprint; 3ttt AR84
  → Record 84; ITM 400 → 400 Racing; SR Custom → Sakae CUSTOM; Regina CX →
  CX 6sp; Vittoria CG → Corsa CG Seta; Giro del Mondo → DB's "Mundo".
- Brand rows kept: "Shimano" chain, "DID", "Sedisport" → Sedisport Delta,
  "Shimano 600 SIS" → plain Shimano 600 derailleur/shifter (no 6207 rows).
- Left unlinked: frame/fork prose, spokes, budget house-brand parts (KK-310,
  HL, KL, TH-305, HTI-A1, CST, UCP), Regina C Record/Pista chains, Gipiemme
  Cronosprint posts (three variants), 3ttt Competizione bars (three bends),
  ITM Mondial bars and ITM 100-300 stems (no rows), Extras.

## 1993 Bianchi — `1993_bianchi_spec.csv` (24 bikes, 408 specs, 118 linked)

- Six " / "-paired columns split in the CSV: Fork/Headset, Drivetrain/
  Shifters (→ Derailleurs + Shifters; a slash-less cell fills both),
  Saddle/Seatpost, Hubset/Spokes, Freewheel/Chain (→ Cassette + Chain: 20 of
  24 bikes list cassettes), Tires/Rims. Frame Details → Frame Material.
- Noise stripped: spoke counts (32H/36H), SG-X/Powering/SuperShifter, tyre
  sizes, rim finish words, trailing "cassette"/"chain" nouns. Prefixes and
  typos: Dura-Ace → Shimano Dura-Ace, HG50/70/90 → Shimano CN-HG.., HP50 →
  HG50, 7401 chain → CN-7401, Diacompe → Dia-Compe, Suntour → SunTour, LOOK
  PM76/PM56 → PP76/PP56.
- Shifters label now maps to Shifters AND Shifting Brake Levers, so STI
  links (ST-7400, ST-6400, ST-1055). No Record/Chorus Ergopower rows of
  this era exist.
- The 1990 boundary: Campagnolo Record, Shimano 105 and Dura-Ace overrides
  for brakes/headsets/hubs/pedals/seat posts were converted to year ranges
  (pre-1990 = 1973/1987 picks; from 1990 = BR-14RE, 105SC 1055, 7402/7410,
  Record 8sp). Without this the 1993 bikes inherited 1973 and 1987 rows.
- Blocked with null: bare "Alloy" hubs (was hitting a Roval hub) and
  seatposts (Titan alloy), "FIR Tour or Ambrosio Giro d'Italia" (either/or),
  bare "Campagnolo" seatpost from 1990 (no Record post of that span).
- Picks: Record 8-speed → C-Record-generation crank 1482, RD-01RE, FD-01SRE,
  HS-01RE, Record 8sp hubs, Exa-Drive cassette; Chorus → FC-01CH, RD/FD-01CH,
  Monoplaner brakes (bare "Chorus" hit a 2000s 10s row), 704/101 headset,
  FH-00CH hubs, Chorus Friction downtube levers; Veloce → 2317/4164/3279;
  Ultegra → 6400 series; RX100 → A550 series; XTR → M900; XT → M735/M737;
  DX → M650; LX → M550/M560; Dia-Compe 987 and XCE; Turbo-Matic → Turbo
  Matic 2; Flite → Titanium; Avocet R20; Rohloff → SLT 99; Mavic 231 → M 231
  CD; Omicron → Strada Polished; Vittoria Corsa CX → Servizio Corse; Tange
  CD → Tange-Seiki Levin CD.
- Left unlinked: frame/fork prose (Rock Shox: Forks has no category),
  spokes, sealed/Aheadset/black headsets, AT10/CT10/CT20/Exage LT+ES groups
  (no rows), Rapidfire Plus, Hyperglide cassettes and HG chains, Bianchi
  saddles/tyres, Ritchey, Kalloy, Selcof, Tioga, Panaracer, Maxxis, MTB Araya
  and Ukai rims, FIR rims.

## 1973 Bianchi — `1973_bianchi_spec.csv` (22 bikes, 86 specs, 8 linked)

- First catalog built from a scanned PDF (Bianchi1973_ital.pdf, Italian
  market, 8 pages, no text layer): pages read visually, the CSV written by
  hand. Model names carry the catalog code, e.g. "Rekord 74 (00.5.67)". Six
  "derived" models have no specs of their own and are kept as bare rows with
  a "Derived from ..." Extras note.
- Only four bikes have component-level specs; the rest is frame tubing,
  tyre sizes, brakes by type, fittings. New free-text label "Gearing" for
  chainring/sprocket counts (added to LABEL_ORDER after Rear Derailleur).
- Overrides: Universal Corsa Mod. 68 → Super 68; Universal Mod. 51 → Extra
  Mod. 51 (DB dates it 1951-61, this catalog still fits it in 1973 — worth
  a year_to extension); Campagnolo Valentino → 2050 front / Nuovo Valentino
  rear; Campagnolo Gran Sport rear ranged: 1012/4 to 1977, 3500 from 1978.
  No early-70s Gran Sport front row, so the Special's front stays unlinked.
- Durall (Bianchi house alloy brand) brakes/bars, rod brakes and wheel
  descriptions stay as text.

## 1985 Raleigh — `1985_raleigh_spec.csv` (19 bikes, 344 specs, 79 linked)

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

## 1986 Cinelli — `1986_cinelli_spec.csv` (7 bikes, 64 specs, 32 linked)

- Source is Ten Speed Drive Imports' four-page US brochure
  (Cinelli_10_Speed_Drive.pdf), no printed date. Dated 1986 from "38
  years" after the 1948 founding and "Campagnolo's new Record Corsa road
  group". Transcribed by hand (2026-09-28). Bikes: 850 SLX Super Record
  Pro, 830 Victory, 840 SLX Competition, 860 Record Corsa (specified),
  Laser Road and Laser Track (prose only, Extras carries the disc-wheel
  note), and the SLX Super Corsa frameset as a Frameset-type row with
  sizes, both paints and the 5.5 lb weight; geometry in Extras. New bike
  brand created on load.
- Column layout: 840 lists parts individually (Crankset, Seat Post,
  Headset, Derailleurs, Pedals); the others give a groupset in
  "Groupset / Components" (not a linkable label). Toe Clips, Spokes and
  Cable & Tape kept as plain text.
- Era picks (1986): Super Record crank -> 1049/A 1509, headset -> 4041
  2968, SL pedals -> 4021 3716, seat post -> 4051/1 5761; Nuovo Record
  front 0104007 / rear v5 / hubs 1034 by matcher; Record hubs -> 1035
  3260 via the widened Hubs range (to 1987); Record SF -> C-Record 322/101
  3241; Victory SF -> 422 low flange 3281. Regina: CX and CXS chains ->
  1384; BX ORO -> 2195; CX 6-sp -> 2169; ORO 6-sp -> 2194 (CXS 7-sp has
  no row). Clement 2001 CF -> 6740. Cinelli 1/A -> 6489 winged C, 1/R ->
  6491. Concor Rolls -> 5563 Rolls, Concor SC -> 5547 Concor Supercorsa.
  Ambrosio Synthesis / Montreal Durex / Metamorphosis matched themselves.
- Override collision: Seat Posts 'campagnolo super record' (1981
  Kalkhoff -> 5759 two-bolt 4051, which ended 1980) ranged to
  { to 1980: 5759, from 1981: 5761 }; Kalkhoff bike_spec 780 re-pointed
  to 5761 by one-off UPDATE (kalkhoff-seatpost-fix.sql). Kalkhoff still
  57 links.
- Left unlinked: bare "Cinelli" bars, Almarc leather bar (no row),
  Alpina spokes, Bike Ribbon tape, Binda straps / toe clips, groupset
  cells, frame tubing.
- Regression: all other catalogs unchanged.

## Nuovo Record rear-derailleur ranges (corrected 2026-09-27)

While reading this catalog the DB's own dating for the 1020/A rows came up:
v3 1970-1981, v4 1982-1984, v5 1985-1987. The ranges set during the 1983
Bianchi work (v3 to 1973, v4 1974-77, v5 from 1978) contradicted that and
had moved Motobecane 1974/75 to v4 and Bianchi 1983/84 to v5. Ranges now
follow the DB dates; a one-off UPDATE moved 12 rows back (Motobecane → v3,
Bianchi 1983/84 → v4). Lesson: when ranging an override, read the DB rows'
year_from/year_to first rather than reasoning from memory.

## Label normalization (done 2026-09-27)

The ten catalogs had minted 49 labels, ~15 of them wording variants. Merged
to 29 canonical labels with one global display order:

- `LABEL_ALIASES` in the generator maps header variants to canonical labels
  at read time (Frame/Frame Type/Frame Details → Frame Material; Brakeset →
  Brakes; Chains/Chain Type → Chain; Cranksets → Crankset; Freewheels/Gear
  Cluster → Freewheel; Saddles → Saddle; Seat Posts → Seatpost; Stems →
  Stem; Tires/Tire Configuration → Tyres; Wheel Rims & Spokes/Wheels →
  Rims; Shifters/Levers → Shifters; Extras No Charge/Included Accessories/
  Standard Equipment/Miscellaneous → Extras; Haken → Toe Clips). CSVs were
  not edited; `bike_spec.raw_label` keeps the original header.
- `LABEL_ORDER` sets `sort_order` (frame → drivetrain → contact points →
  wheels → extras); the generator now emits an UPDATE so existing labels
  realign on any run.
- One-off SQL repointed 247 bike_spec rows and deleted the 18 emptied label
  rows. Cassette stays distinct from Freewheel; "Other Features" (1940
  Bianchi frame notes) is not Extras; "Groupset / Components" (1984) kept.
- Side effect: two values now sit under mapped categories and link —
  1975 Motobecane "REGINA ORO 13-21" (Gear Cluster → Freewheel, existing
  override) and 1983 Bianchi Professional "Suntour" shifters → the brand-level
  SunTour shifter row.

All ten catalogs in bike_specs/ are loaded. Next catalogs will most likely
need: their own year ranges on the Campagnolo/Shimano group overrides, and
the label normalization above.
