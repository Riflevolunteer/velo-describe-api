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

## 1986 Cinelli — `1986_cinelli_spec.csv` (7 bikes, 82 specs, 52 linked)

- Source is Ten Speed Drive Imports' four-page US brochure
  (Cinelli_10_Speed_Drive.pdf), no printed date. Dated 1986 from "38
  years" after the 1948 founding and "Campagnolo's new Record Corsa road
  group". Transcribed by hand (2026-09-28). Bikes: 850 SLX Super Record
  Pro, 830 Victory, 840 SLX Competition, 860 Record Corsa (specified),
  Laser Road and Laser Track (prose only, Extras carries the disc-wheel
  note), and the SLX Super Corsa frameset as a Frameset-type row with
  sizes, both paints and the 5.5 lb weight; geometry in Extras. New bike
  brand created on load.
- Column layout (revised 2026-09-28 at user request): the "Groupset /
  Components" column was removed and its three values (Super Record,
  Victory, Record Corsa) fanned out into Front Derailleur, Rear
  Derailleur, Crankset, Seat Post, Brakes, Brake Levers and Pedals; the
  840's combined Derailleurs cell split likewise. The three loaded
  groupset rows were converted in place to Rear Derailleur rows
  (cinelli-groupset-convert.sql) so nothing was deleted; the label row
  stays for the 1983/84 Bianchi. Toe Clips, Spokes and Cable & Tape kept
  as plain text. Headset not fanned out (840 only).
- Fan-out picks (1986): Super Record rear -> 4001 2nd gen ver. 2 4152,
  brakes -> 4061 v2 583 (both existing Kalkhoff overrides year-ranged at
  1983/1984), levers -> 4062 post-83 231; Victory -> 2318 / 4168 / 0355
  1516 / 5764 / 415/102 590 / 235 / 405/000 3720; Record Corsa (C-Record)
  -> 2283 / 0102050 4096 / 1483 / A0R2 5738 / 0118065 212 / 305/501
  3693; Record Corsa brakes explicit null (Delta not shipping in 1986,
  groups delivered with SR brakes). New 'Brake Levers' override block and
  'brake lever(s)' LABEL_TO_CATEGORY mapping added.
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

## 1975 Falcon — `1975_falcon_spec.csv` (18 bikes, 203 specs, 19 linked)

- Source: Falcon Cycles (Barton-upon-Humber) "range of lightweight
  cycles" brochure, 16 catalogue pages plus a 4-page typed Model 76 press
  sheet, all 640x405 scans (Downloads/Falcon/). No printed date; 1975
  inferred from Campagnolo Velox (1971-75), the Sport 3320 crank (DB to
  1975) and the team's Tour de la Nouvelle France / Tour de Suisse rides
  (1974-75). Transcribed by hand 2026-09-28. New bike brand on load.
- Bikes: San Remo 76 (team replica), 98 track and 96 (enamelled twin),
  94, 92, 80; Black Diamond 70 and ladies 71; Olympic 78; Models 84, 68
  and ladies 69, junior 58, E.C. 72; Super-Tourist De Luxe 88 and ladies
  89; Tourist 82 and ladies 83 (not illustrated). "Exactly as" twins got
  their own rows with the parent spec copied. No weights printed.
  "Bend & Stem: Cinelli Giro d'Italia" split into Handlebars (Cinelli
  Giro D'Italia) and Stem (Cinelli). Gear counts in Gearing.
- Generic values suppressed with null overrides: Rims "Sprint" /
  "Lightweight sprint" (matcher hit Fiamme Sprint), Saddles "Mattress"
  (hit a Brooks mattress row).
- 1975 picks: Brakes bare "Campagnolo" -> 573 2040 pre-CPSC (ranged to
  1977); Pedals "Campagnolo" -> 3708 1037 (to 1985), "track pattern" ->
  3711 1038; Hubs "quick release" -> 3260 1035 (to 1985), "single sided
  track" -> 3270 1036; Cranksets "Sport" / "Sport cotterless" -> 1476
  3320, "cotterless" -> 1496 1049 NR (to 1977); Velox rear -> 4167 2250;
  Renolds -> 1393 Renold. NR front/rear and Cinelli 64 via existing
  ranges; Brooks Professional via existing override.
- Left unlinked: bare "Campagnolo 10-speed" derailleurs on 94/78/80
  (Valentino or Nuovo Gran Sport, undeterminable); all Weinmann brakes
  (Vainqueur 999 variants, per the 1973 Raleigh decision; Tourist and
  centre-pull unnamed); Velox front (no row); Bluemels (no row); Cinelli
  bare bars/stem; generic Maes, quill, steel parts; Clement tubular.
- Regression: all other catalogs unchanged.

## 1979 Peugeot — `1979_peugeot_spec.csv` (29 bikes, 405 specs, 105 linked)

- Source: "Les Vélos, Cycles Peugeot 79", French home-market catalogue,
  13 pages, printed 01.79, hosted on Calameo
  (calameo.com/read/0000524380ae4a7030dbf). Calameo's viewer exposes a
  signed URL for page 1 only; the viewer manifest at
  d.calameo.com/pinwheel/viewer/book/get?bkcode=... returns
  X-Calameo-Hash-Path/Signature/Expires headers whose acl covers the
  whole folder, so all 13 p<N>.jpg (1684x1190) were fetched with that
  token. Pages saved in the scratchpad and bound to peugeot1979.pdf.
- Transcribed by hand 2026-09-28, French to English, maker/model names
  kept. Full 71-row transcription in the scratchpad
  (1979_peugeot_spec.with-children.csv); at the user's request the 26
  children's and 16 town/folding models were dropped before loading, so
  the CSV holds the lightweight range: 13 racing (PY 10 CP/LC, PX 10 C,
  PV 10, PS 10 L, PSN 10, PK 10, PKN 10/13, PF 10, PFN 10, PBN 10, H 10),
  4 cyclotouring (PK 60, P 60 M, PK 65, P 65 M), 6 sports (PX 8 M, PL 8 M
  5V/10V, PH 8 M 5V/10V, PA 55), 4 randonneur (PX 50 M, PL 50 M 5V/10V,
  PH 50), 2 tandems (TH 8, TM 8). "Même modèle" variants got their own
  rows with the parent spec copied. Sizes in cm as printed; no colours
  or weights printed. New bike brand on load.
- Generic values nulled (were matching named rows): Brakes "Side-pull"
  (Phillips), Rims "700C" (Diamant) and "350" (Araya TX-350), Saddles
  "Course" (Mercier Course).
- 1979 picks: Simplex SLJ 5500 CP -> 4651 v1; SX 410 T/TSP and "410 TSP"
  -> 4621 SX410 T; SX 100 T -> 4657; fronts SLJA/LJA 302 -> 2567 LJ A302,
  SX A 22 / SXA 22 -> 2577, SA 12 -> 2586; bare "Simplex" rear -> 4549
  brand row (7 bikes; no bare Simplex front row, left). Stronglight 105
  Bis matched itself (1880); 49 D -> 1895 Depose (as 1975 Motobecane),
  49 D triple -> 1893 49 Tri. Spidel 700 and Maillard 13-21 freewheels
  -> 2123 Maillard 700 6-sp; unnamed Maillard ratios -> 2110 brand row.
  Spidel 700 hubs -> 3591; Normandy (bare, dural, small flange) -> 3389
  Luxe Competition low flange; Maillard large flange -> 3391 Normandy
  high flange. Spidel competition brakes -> 1029 (made by Mafac);
  Weinmann 605 -> 1133 (1978-80); Mafac Competition (plain and
  "simplified") -> 825 later version; Racer -> 838; Raid -> 843; tandem
  cantilever -> 845. Spidel S7 headset -> 3123 Stronglight S7 (DB dates
  1981-83; catalogue shows 1979). Lyotard course pedals -> 3815 460D.
  Atax stem -> 6447 (1A style). Super Champion 700C -> 5176 Competition.
  Ideale 2002 and Michelin Elan matched themselves.
- Left unlinked: Weinmann 506 (no row), Peugeot Trophy hubs and Lightrace
  headsets (house names), bare "Mafac centre-pull" (Racer or
  Competition), Sedis chain, Gallet saddle, Atax course bars, Spidel 700
  pedals (three cage variants, no basis), Bluemel's, all pattern parts.
- Incident: PY 10 CP Extras was 292 chars; MySQL truncated it on insert
  and the NOT EXISTS key never matched, so the re-run inserted it again
  (rows 2563/2949). Value shortened to 249 in the CSV; the generator now
  truncates value_text to 255 with a warning so key and stored value
  agree; user ran peugeot-extras-fix.sql (rewrite 2563, delete 2949).
  A CSV rewrite of mine also duplicated the header as a data row for one
  generation; caught before load.
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

## Bare-brand exact-match bug and one wrong override (fixed 2026-09-29)

A user noticed a 1979 Peugeot's rear derailleur spec showed as an "1920
Simplex" — clearly wrong. Root cause: `matchComponent`'s exact-title-match
branch ran *before* the "single-word title is a brand-only catch-all"
substring guard, so a bare CSV value like `"Simplex"` (catalog names only
the brand, no model) would exact-match any `component_detail` row also
titled exactly `"Simplex"` — including bare-brand placeholder rows with a
bogus specific year, with zero year filtering (year ranges are only
honored inside `COMPONENT_OVERRIDES`/`resolveOverride`).

Same audit found one more real instance and one look-alike that turned out
to be a different bug entirely:

- **Simplex, Rear Derailleurs** (component_id 4549, wrongly dated
  1920-1920): 7 rows, all 1979 Peugeot. Added `'simplex': null` to
  `COMPONENT_OVERRIDES.Rear Derailleurs`; one-off `UPDATE` set those 7
  `bike_spec.component_id` back to NULL (run and discarded, not kept in
  the repo — the fix that matters is the override).
- **Shimano, Chains** (component_id 1403, wrongly dated 1980-1980): 2 rows,
  1987 Bianchi. Added `shimano: null` to `COMPONENT_OVERRIDES.Chains`, same
  one-off unlink.
- **Nisi, Rims** (component_id 5123, wrongly dated 1980-1980) — NOT the
  same bug. This was a deliberate `'nisi ava sprint alloy'` override that
  just pointed at the wrong one of two identically-titled bare "Nisi" rows;
  5124 (dated 1970-1980, covers the 1973 Raleighs that use this value) was
  sitting unused. Retargeted the override to 5124; one-off `UPDATE`
  repointed the 2 already-loaded rows.

Broader finding, acted on 2026-09-30: 397 `component_detail` rows across the
whole DB were bare single-word (brand-only, no model) titles; only 7 were
linked to any `bike_spec` row (Maillard/Freewheels, Iris/Chains,
Renold/Chains, AVA/Rims, Simplex/Freewheels, SunTour/Shifters, Nisi/Rims —
checked and fine on years at the time). The other 390 were unused
velobase-crawl artifacts, some carrying the same "bogus specific year"
shape as the bugs above, sitting dormant until some future catalogue's
bare-brand value happened to exact-match one.

Deleted (one-off, run and discarded, not kept in the repo): the 390 unused
rows, plus a knock-on check on the 119 `component_brand` rows that then had
zero `component_detail` rows left (e.g. Acme, Aironi, SelleRoyal — distinct
from brands like Agrati or Astros that also had a bare row but kept other
real components, which were left untouched). Those 119 brands' scaffolding
was cleaned up too: 2 `component_group` rows scoped to them (verified zero
surviving component links first) and 129 `category_brand` rows. Verified
before running: zero `bike_spec` references on the 390, and none of their
ids appeared in `COMPONENT_OVERRIDES` (`scripts/generate-bike-update-sql.js`).

The 7 linked rows turned out, on a second look, to be the same bare-brand
mismatch as the Simplex/Shimano fixes above — the earlier audit only
checked years, not whether the link made sense at all. Each of the 29
`bike_spec` rows pointing at them carries a generic `value_text` (a chain
pitch, a freewheel gear-count range, or just the bare brand name again,
e.g. "Iris 1/2 x 3/32", "Maillard 14-15-17-19-21-24", "Suntour") with no
matching specific model row elsewhere in the DB to relink to instead — so
unlinked (`component_id` -> NULL, `value_text`/`raw_label` untouched) and
deleted the 7 rows themselves (one-off, not kept in the repo). None of
these 7 brands (AVA, Iris, Maillard, Nisi, Renold, Simplex, SunTour) lost
their brand row — each still has other real component_detail rows. No new
`COMPONENT_OVERRIDES` entries were needed: the current substring guard in
`matchComponent` already stops a single-word title from matching inside a
multi-word value, and the one bare-value case (a catalog literally saying
just "Suntour") now correctly resolves to "ambiguous, no match" against
SunTour's ~65 real model rows instead of the wrong bare placeholder.

Related cleanup, same day: 6 more `component_detail` rows were a brand plus
"unknown"/"(unknown)" with no real model attested — Falco Unknown
(Brakes), GIOS Unknown (Pedals), OMAS unknown freewheel hubs with ti axle
(Hubs), Altenburger unknown (Rims), Bianchi (unknown) (Hubs), SunTour
(unknown) (Front Derailleurs). None had `bike_spec` references or appeared
in `COMPONENT_OVERRIDES`, so deleted outright (one-off, not kept in the
repo). Falco, GIOS, and the *component*-brand Bianchi (distinct from the
`bike_brand` Bianchi used for actual bikes — separate table, separate id
space) had zero other `component_detail` rows once these were gone, so
purged those 3 `component_brand` rows and their 7 `category_brand` rows
too; no `component_group` rows were scoped to them. OMAS, Altenburger, and
SunTour kept their brand rows since each has plenty of other real
components.

Full-DB sweep, same day: checked for referential orphans across
component_detail/component_group/category_brand/component_brand/bike/
bike_spec/data_source - none found (every FK-shaped reference resolves).
Two things did turn up:

- **26 exact-duplicate `component_detail` rows** (25 groups - 24 pairs and
  one triple - identical on brand_id/category_id/title/year_from/year_to/
  description, both/all from the velobase crawl crawled twice): deleted
  the redundant copy of each, keeping whichever side already carried any
  `bike_spec` link or `COMPONENT_OVERRIDES` reference (Union 486 id 1427,
  Sturmey Archer id 3593, Shimano CN-7401 Dura-Ace chain id 1414, Mavic
  MA 40 id 5077) or a set `group_id` (Stronglight 107 Pista id 1916) where
  that differed between the two. One-off, not kept in the repo.
- **One junk `component_group` row**, id 248, titled literally "do not
  know", scoped to Campagnolo, zero `component_detail` rows in it -
  deleted.

`data_source` id 50 (Le Cycle magazine no. 58 Maillard ad, see below) had
zero rows pointing at its `source_ref` at the time - not a stray row, just
a citation whose 4 affected rows (2112, 2113, 2114, 2120) still carried the
generic velobase-crawl `source_ref=1` rather than this ad. Backfilled: all
4 repointed to `source_ref=50`, since this ad is what actually set/corrected
their current years, not the crawl.

Separately: the "Other/Unknown" brand (id 561) had one Tyres component,
Cyclepro Discovery (6840) - zero `bike_spec` references, not in
`COMPONENT_OVERRIDES`, deleted along with the `category_brand` row linking
that brand to Tyres. Initially left the brand in place (still had a
Saddles entry, Bualto B17, 5437) - then removed that too on request, same
checks (zero `bike_spec` references, no override), which left the brand
with zero components; purged the brand (561) itself and its remaining
Saddles `category_brand` row. No `component_group` rows were scoped to
it. "Other/Unknown" no longer exists anywhere in the DB.

Found via a user spot-check on Assos/Bottom Brackets: a brand doesn't need
to be fully orphaned (the earlier 119-brand sweep's bar) to leave
scaffolding behind - a brand that *partially* survived (some categories
still have real components) can still have a `category_brand` row for a
category whose only entry was a bare/unknown placeholder deleted earlier.
`index.js`'s `/brandsbycategory` uses `category_brand` to populate the
app's per-category brand picker, so a dangling row shows a brand with
nothing to actually select. Swept the whole table for this: 116
`category_brand` rows across ~90 brands had zero `component_detail` rows
for that brand+category combo (Assos/Bottom Brackets, Assos/Cranksets,
Assos/Pedals among them) - deleted all of them. Ran ad hoc, not kept in
the repo.

## Generic "Shimano 600" / "600 SIS" / "Tourney" links (fixed 2026-10-02)

- Found while ingesting the Shimano 1977/1978 component catalogues: bare
  values had substring-matched 1970s rows. 1981 Kalkhoff Amateur 05 S,
  Touring 05 S, Touring 55 S "Shimano 600" rear derailleur (bike_spec
  833/884/901) and 1987 Bianchi Limited/Squadra "Shimano 600 SIS" rear
  (1250/1270) -> 4461, a velobase "Shimano 600" that is really the
  1975-78 DC-200; 1987 Limited/Squadra "600 SIS" shifters (1251/1271) ->
  6138 bare "Shimano 600" (1970-80); 1987 Strada "Shimano Tourney" rear
  (1390) -> 4539 DB-300 (1975-76).
- Fixed with a one-off UPDATE (the back-fill never overwrites a link) and
  matching overrides: 1981 Kalkhoff rear -> no link (RD-6100 600 vs
  RD-6200 600EX and cage length are undecidable from the catalogue);
  1987 "600 SIS" rear -> 4471 RD-6208 600EX (SIS), front (1249/1269,
  previously unlinked) -> 2481 FD-6207 600EX, shifters -> no link (no
  clear SIS lever row); Strada Tourney rear -> no link (only 1970s Tourney
  rows exist). Overrides: Rear Derailleurs 'shimano 600' [to 1978 ->
  4462 DC-200, from 1979 -> null], 'shimano 600 sis' 4471, 'shimano
  tourney' null; Front Derailleurs 'shimano 600' [to 1978 -> 7435 EC-600,
  from 1979 -> null] (needed because the component pass retitled EC-600
  "Shimano EC-600, Shimano-600", which the matcher would otherwise hit
  for 1981 Kalkhoff), 'shimano 600 sis' 2481; Shifters 'shimano 600 sis'
  null.
- **Matcher fix:** resolveOverride returned undefined for a ranged entry
  with no matching year, so it fell through to the substring matcher,
  contrary to the COMPONENT_OVERRIDES comment ("no matching range means
  no link"). It now returns null. Regenerating all 15 catalogues before
  and after gave identical links, so nothing else changed.
- Regression check also showed about 40 pre-existing generator/DB
  differences (Super Record brakes 582 vs 583, C Record / Veloce /
  Record Pista resolving to nothing, rims/chains/freewheels that would
  gain links on reload), caused by earlier component retitles and
  inserts. These don't affect the DB unless a catalogue is reloaded;
  left for a separate pass.
