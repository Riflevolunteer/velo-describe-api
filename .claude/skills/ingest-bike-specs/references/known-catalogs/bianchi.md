# Bianchi catalogs processed so far

## 1940 Bianchi — `1940_bianchi_specs.csv` (17 bikes, 153 specs, 3 linked)

- Source (added 2026-10-21): very likely VeloBase CatalogScans `Bianchi_1940.pdf`, "1940 Bianchi Catalog" (17.8 MB; https://velobase.com/Pages/Resources/CatalogScans.aspx). Inferred from the matching title and year, not confirmed: no download is on disk and the notes never named the file. No market is stated.

- Four models had "Identical to <model>" placeholder cells (Freccia←Folgore,
  Costantino←Cesare, Cleopatra and Cirene←Cecilia); copied across 24 cells.
  Those four bikes were deleted and reloaded.
- Header has a UTF-8 BOM; the parser copes.
- Only "Regina Extra (1 speed)" freewheels link. Everything else is Italian
  prose or names the maker (Società Catene Calibrate Regina) rather than a
  model. Not fixable with overrides.
- **Removed (user request, 2026-10-04):** the whole catalogue was deleted —
  all 17 bikes (bike_id 7-27) and their 153 `bike_spec` rows, including the
  3 links to `component_detail` 2170 "Regina Extra (1 speed)" (component row
  itself left in place, just unlinked — nothing else referenced it, so it's
  now linked to zero bikes). Also deleted the two `bike_spec_label` rows
  this catalogue had minted and used exclusively — "Chain Guard" (20) and
  "Other Features" (25), both with zero remaining references elsewhere.
  `data_source` 34 ("1940 Bianchi catalogue") left in place; no generator
  code (`COMPONENT_OVERRIDES`) referenced these bike_ids or component 2170.

## 1983 Bianchi — `1983_bianchi_spec.csv` (9 bikes, 118 specs, 51 linked)

- Source (added 2026-10-21): ebykr.com "Bianchi Catalog of about 1983" (https://ebykr.com/library/bianchi-1983-catalog/), 12 pages in English, published in Italy by Bianchi; scans from Mark Bulgier's archive (bulgier.net/pics/bike/Catalogs/Bianchi-83/, posted 2001, also on 2velo.com). It carries no year; ebykr estimates 1983 from the Super Pista text citing a 1982 World Championship medal. The catalogue names no export market, so IT is the publisher's country, still an inference for the intended market.

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
  Nuovo Tipo rows), tyres, Mafac cantilever, Shifters/Levers (no category
  mapping).
- 2026-10-05: Campione d'Italia "Mavic Monthlery" rim -> 5093 Mavic
  Montlhéry Route (the 84-85 Mavic catalogue names the Route as the
  première-monte/OEM rim; Pro was for retail builds). Judgment call; the
  rows were retitled Monthlery -> Montlhéry in that catalogue pass, so the
  bare value no longer even substring-matches.

## 1984 Bianchi — `1984_bianchi_spec.csv` (6 bikes, 77 specs, 24 linked)

- Source (added 2026-10-21): ebykr.com "Bianchi Catalog of about 1984" (https://ebykr.com/library/bianchi-1984-catalog/), 9 pages in English, published in Italy by Bianchi; scans from Mark Bulgier's archive (bulgier.net/pics/bike/Catalogs/Bianchi-84/, posted 2001, also on 2velo.com). It carries no year; ebykr estimates 1984 from the Super Pista text citing a 1983 World Championship gold medal. Its models are exactly the six loaded. The catalogue names no export market, so IT is the publisher's country, still an inference for the intended market.

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

## 1985 Bianchi — `1985_bianchi_spec.csv` (10 bikes, 164 specs, 77 linked)

- Source: ebykr.com scan of the Piaggio Japan range sheet
  (https://ebykr.com/library/bianchi-1985-japan-range-sheet/, two pages,
  Japanese, prices dated 1 April 1985), `data_source` 144. The scan cuts
  the spec table's row-label column off; rows identified by content and
  order (price, sizes, frame, bars, stem, brakes with levers, crank,
  pedals, freewheel, chain, saddle, seatpost, derailleurs, hubs, tyres,
  rims, extras, weight, colour). The Campagnolo / Sakae P-5 row between
  Saddle and Derailleur is the seatpost row. Transcribed by hand
  (2026-10-08) from ebykr's Japanese transcription checked against the
  1164 px scan; chains corrected to Sedis on the Centenario, Super Leggera
  and Campione (the transcription had HKK throughout). Yen prices put in
  Extras (no price column). "Yoshigai" rendered Dia-Compe, "Mikashima"
  MKS, スーパーレゲロ Superleggero, モンディアリタ Mundialita.
- Bikes: Centenario (100th-anniversary limited edition, black nickel,
  ¥600,000), Super Leggera, Campione, Campionissimo, Squadra, Speciale-II
  (tubular and 700C builds in one column, kept as either/or cells),
  Strada, Randonneur 700, Rekord 26, Bambina.
- Brakes and levers were one cell ("Yoshigai 500G + GC200"): split into
  Brakes / Brake Levers in the CSV for the four Dia-Compe bikes.
- Overrides (all 1985 Bianchi comments in the generator): brakes
  'campagnolo nuovo record bianchi engraved' -> 572 (post-CPSC range),
  'campagnolo super record bianchi engraved' -> 583, 'modolo flash' -> 874
  1st version; cranks with dimensions -> 1472 Gran Sport, 1496 Nuovo
  Record Strada ("Record with SL chainrings" = 1049 with Super Leggero
  rings), 1687 Ofmega Competizione BIANCHI; pedals 'campagnolo
  superleggero' -> 3709 1037/a SL; freewheels Regina CX 13-21 / 13-23 ->
  2168 (as 1987 Bianchi), 'suntour nw 13 21t 6 speed' -> 2238 NW-6000;
  FD 'campagnolo 990 980' -> 2279 Campagnolo 980 (990 front exists only
  as the 1987+ century finish; rear matched 4088 990 itself); RD 'suntour
  arx' merged with the 1985 Raleigh entry into a ranged one: Randonneur
  700 -> 4729 RD-4500 GT (50/45/34 triple, 14-28), default 4727 RD-4300;
  hubs 'campagnolo nuovo record 36h' -> 3259, 'campagnolo record 32h /
  36h' -> 3260, 'campagnolo gran sport 36h' -> 3256 1006 (as 1983; DB's
  only Gran Sport hub, velobase-dated 1950-55 though the number was
  reused — check against a 1980s Campagnolo catalogue); bars 'sakae ctd
  390 mm / 370 mm' -> 7888, 'nitto 105 390 mm' -> 2889 Universiade 105;
  seatposts 'sakae p 5' -> 5857 CT-P5, 'sakae p 3' -> 5855 CT-P3; null:
  'selle italia turbo junior' (matcher hit the adult Turbo), the
  Speciale-II either/or rim cell.
- Left unlinked: TTT bars/stems, Nitto Technomic stems and Junior bar,
  Sakae RY / AH stems, Sakae bare 390 bar, Dia-Compe 500G / DC400N / GC200
  / NGC200 / DC195 (no 1985 rows by those codes), Campagnolo Victory hubs
  (flange unknown), Suzue LPF / 28H, Ofmega Junior cranks and Competizione
  pedals, Sakae CT/SPG triple, MKS Promenade, Vittoria (bare and Seta),
  Panaracer, Sedis / HKK, Selle Italia Aero II / ANA, Martano Pro / G-P80,
  Ambrosio, Bianchi original rims, frame prose.
- Regression: all 22 loaded catalogues unchanged (1,449 links).

## 1987 Bianchi — `1987_bianchi_spec.csv` (16 bikes, 320 specs, 144 linked)

- Source (added 2026-10-21): VeloBase CatalogScans `1987Bianchi.pdf`, "1987 Bianchi" (2.39 MB; https://velobase.com/Pages/Resources/CatalogScans.aspx), downloaded 2026-10-19 (the browser's download origin confirms it). The index states no market; US is the user's call (2026-10-19).

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
- 2026-10-04: Premio "Dia Compe QS500N Balance Response System" -> 682
  (retitled QS500N by the Dia-Compe 1986 ingest) via override; 143 -> 144.

## 1993 Bianchi — `1993_bianchi_spec.csv` (24 bikes, 408 specs, 174 linked)

- Source (added 2026-10-21, PROBABLE, not confirmed against the spec pages): retrobike.co.uk archive "1993 Bianchi Catalogue" (https://www.retrobike.co.uk/archive/1993-bianchi-catalogue.1672/, file name "Catalogo Bianchi 1993.pdf"). Its cover is hand-marked "93" and the text says "28 different models of Road, Mountain and Cross-Terrain bicycles", weights in lbs, a Reparto Corse mountain bike with Genius Nivacrom tubing, "In 1993" and "108 years": an English, US-style catalogue consistent with this CSV. The download truncates on every attempt (1.4-2.6 MB, no PDF trailer), so only the cover, history, a blueprint spread and two further pages were recovered (images carved from the Flate/DCT streams); the product spec pages could not be read and the tables were not compared. Not the same as the Japanese-edition "Bianchi 1993" on labibleduvelocataloguesbianchi.blogspot.com/p/bianchi-1993.html (yen prices, Giro / MMX / EL models), which has not been ingested. Market stays US as stated by the user.

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
- 2026-10-09, after the Ritchey 1992 catalogue ingest (component skill,
  `known-catalogs/ritchey.md`, data_source 149): 10 Ritchey specs linked
  via new overrides — Tyres "Ritchey Z-Max" -> 8382 MegaBite Z-Max (Nth
  FS), "Ritchey Megabite Hardrive" -> 8383 MegaBite HardDrive (Ibex,
  Osprey; the CSV's "Hardrive" spelling defeats the substring match);
  Seat Posts "Ritchey FD" -> 8407 Force Directional Seatpost (Mountain)
  (Super Grizzly); Saddles "Ritchey Comp leather" (+ "Cro-mo rails" on the
  Virata) -> 8410 Logic Comp Saddle (6 bikes). Those four rows' year_to
  extended 1992 -> 1993 (source_ref -> 47). Applied directly as guarded
  UPDATEs rather than a full bike-update.sql reload; the regenerated SQL
  agrees. 185 -> 195 linked.
- 2026-10-09, after the Araya 1980-95 catalogue excerpts ingest
  (component skill, `known-catalogs/araya.md`, data_source 152): 7 Rims
  specs linked via new overrides — "Araya PX-35" -> 8430 (Advantage),
  "Araya PX-45" -> 8429 (Boardwalk), "Araya AP21" -> 8451 AP-21 (Nyala,
  Ocelot), "Araya VP20" -> 8450 VP-20 (Osprey), "Araya VX300" -> 8428
  VX-300 (Project 3, Volpe); the CSV drops the hyphens. PX-35 / PX-45 /
  AP-21 / VX-300 and the already-linked SS-45 (Europa) extended to 1993
  on this catalogue (source_ref 47). "Araya RM-18T" (Ibex) matches no
  Araya model in any 1980-95 spread — TM-18 (1992) is the nearest guess
  — so it has an explicit null override. 195 -> 202 linked.
- 2026-10-03, after the SunTour 1992 catalogue ingest (component skill log):
  Volpe "SunTour FS-E Top Pull" → RD-FE00-GXB 7951 (rear) / FD-TP05-GXH
  Top-Pull Lite 7968 (front; "Top Pull" only describes the front, the
  Derailleurs split copies it to both), "FS-E 52/42/32T" → CW-FS00-N 8002,
  "PowerFlo 12-30T 7-speed" → CS-AP10 1221; Project 7 "XC Comp Top Pull
  PowerFlo" front → FD-TP10-GXH Top-Pull Pro 7966 (rear stays 4783, now
  titled RD-XC20-GXB), "XC-COMP MD 42/32/20T" → CW-XC11 7998; Grizzly
  "SunTour XC Comp" headset → HS-ST00 8045. All via overrides, back-filled
  with a regenerate + load (7 UPDATEs). 167 → 174 linked. Still unlinked:
  bare "SunTour" hubs (Volpe), "SunTour XC-COMP" hubs (Project 7 — front
  hub and freehub are separate rows), "SunTour AP-12 chain" (not in the
  1992 catalogue). `summarize-bike-sql.js` had reported 0 specs since
  `source_ref` was added to the spec INSERT; regex fixed in this pass.
- 2026-10-06: Volpe "Barcon lever Accushift Plus" → SL-BC01 7976 (year_to
  extended to 1993 on this bike). Bare "Shimano Hyperglide" 8-speed
  cassettes, each on one bike, picked by group + catalogued range: SBX
  12-23T → CS-HG90-8 7671 (U), Virata 13-23T → CS-HG70-8 7762 (T), Super
  Grizzly 12-28T → CS-M900-8 7668 (Q). The 6 / 7-speed values (12-28T,
  13-28T, 13-30T, 14-28T, black 13-30T) are shared by bikes of different
  groups (e.g. 12-28T 7-speed on XT, DX and LX bikes), so a value-keyed
  override can't pick one; left unlinked. 181 → 185 linked.

## 1973 Bianchi — `1973_bianchi_spec.csv` (22 bikes, 86 specs, 8 linked)

- Source (added 2026-10-21): VeloBase CatalogScans `Bianchi1973_ital.pdf`, "1973 Bianchi Catalog (Italian market)" (10.9 MB; https://velobase.com/Pages/Resources/CatalogScans.aspx); the filename matches the one named below. The index title confirms the Italian market, so IT is stated, not inferred.

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
- 2026-10-24: Ghisallo 28in and 26in Condor 10 vel. (00.5.05, 00.5.62)
  deleted as city bikes (2 bikes, 8 specs) and added to NON_ROAD_SKIP:
  "Sport" section with fenders, chain guard and 28 x 1 5/8 x 1 1/4 tyres,
  like the Sebino Condor already dropped. Borderline (10-speed, alloy QR
  hubs, centre-pulls); the user's call. Strada/Eco and Europa ("Derived from
  Rekord Strada", Corsa section) kept as bare rows.

## 1987 Bianchi Shimano override pass — 2026-10-02

- 12 links back-filled (125 -> 137 of 320) from period rows the Shimano
  catalogue passes dated: Limited "Shimano 600" brakes 972 BR-6208,
  crankset 1798 FC-6207, headset 3090 HP-6207, pedals 3961 PD-6207, hubs
  7551 HB-6207F / R (freewheel hubs, bike has MF-6208; row dated 1984-86);
  "600 14-24T" freewheel (Limited, Squadra) 2218 MF-6208-6; "600 SIS"
  shifters (Limited, Squadra) 6149 SL-6208 (replaces the earlier `null`,
  set when SL-6208 still had a 1980 velobase date); Giro "Dura-Ace SIS-7"
  shifters 6165 SL-7401; Brava "UG-2" chain 7450 CN-UG20; Volpe "AT-50
  cantilever" 1003 BR-AT50 (range from 1986, so the 1985 Raleigh value stays
  unlinked). All ranged by year. Regression: other catalogues unchanged.
- Left: "Shimano 525 SIS" / "532 SIS" front derailleurs and shifters and
  "Tourney" (no FD-L525 / L532, no 1987 Tourney rows); "Shimano UG",
  bare "Shimano" chain, "Shimano 14-28T" and "105 14-24T" freewheels
  (generic or no MF-1050 row).

## Link-gap pass on the weakest categories — 2026-10-08

- 1983 Super Pista Tyres "Clement Pista tubular" -> 6765 Clement Pistard,
  via override. Judgment call: Pistard is Clement's track tubular and the
  only track-named Clement row. 1983: 50 -> 51 (the heading above said 47
  from an earlier load; the DB had 50 before this pass).
- 1987 PISTA Freewheel "Campagnolo 16T fixed cog": override ranged to 6380
  (763 steel sprocket) up to 1985 and `null` from 1986, so it stays
  unlinked — the 763 row ends 1985 and there is no later Campagnolo cog row.
- Left unlinked, no DB row: "ITM Mondial" / "Mondial Pista", "Modolo Flyer"
  (1987); "Ambrosio Elite" / "Montreal" (1987; five Elite and six Montreal
  variants); "Regina CXS 7-speed" is a 1986 Cinelli value, the only CX-S row
  is 6-speed; 1993 Araya AP21 / VX300 / PX-35 / PX-45 / RM-18T / VP20, Ukai
  EX-17, FIR Tour / Pulsar, Vittoria Open Tubular Flash M19, Panaracer
  Smoke / Dart, Ritchey, Maxxis, Bianchi-branded tyres.

## C-Record era fix on the 1987 catalogue — 2026-10-09

- The bare 'campagnolo c record' overrides were flat on the 1985-86
  first-generation rows (set during the 2026-10-05 re-link sweep to
  preserve the original matcher hits). Ranging them for the 1989 De Rosa
  showed the Mondiale and X4 on wrong-era rows: Rear Derailleur
  "Campagnolo C Record" 4096 -> 4098 A010 Corsa Record 2nd gen (1987-89)
  and Crankset "Campagnolo C Record 53/42T" 1483 -> 1482 C-Record
  (1987-94), 4 rows, one-off UPDATE (crecord-era-fix.sql). Still 148
  linked. Levers, FD, hubs, headset, pedals, seatpost, shifters (5970,
  1987-91) were already period-correct.

- 2026-10-10 (Nitto No. 6, 1980 ingest): 1985 Bambina Stem "Nitto Technomic,
  60 mm" -> 8563 Nitto Technomic (generic match; 8563 year_to 1985). Overrides
  added: Handlebars 'nitto 165 400 mm' -> 2877 (Campionissimo; the row was
  retitled "Nitto Mod. 165" and the matcher lost it) and Stems
  'nitto technomic aero ...' -> null (Squadra; the Aero is a later model with
  no DB row, and the matcher would have taken the plain Technomic). 2877 /
  2889 year_to moved to 1985 on the strength of the Campionissimo / Squadra
  specs. Still unlinked: Bambina "Nitto Junior, 340 mm" (no Junior in the
  1980 catalogue) and Campionissimo "Nitto, Bianchi engraved" (no model).
- 2026-10-10 (Nitto No. 11, 1989 ingest): Handlebars override 'nitto junior
  340 mm' -> 8622 Nitto B110AA (Bambina), the only 340mm junior bar in the
  1989 catalogue; 8622 year_from set to 1985 on this link's evidence.

## 1981 Bianchi — `1981_bianchi_spec.csv` (7 bikes, 123 specs, 38 linked)

- Source: https://saarf.london/2014/02/14/bianchi-1981-catalog/ (pg11 ..
  pg41.jpg): Vespa of America Corporation (Piaggio Group, Brisbane CA) US
  catalogue, "© 1980 Vespa of America", for the 1981 range (Sprint/81). Last
  page is a full specification table; transcribed by hand (crops at x3).
- Bikes: Super Corsa, Super Leggera, Rekord 748, Sprint/81, Rekord "M"
  Strada, Rekord "W" Strada, Super Turismo; weight, frame sizes (cm only) and
  colours on the bike rows.
- Transcription choices: canonical headers written directly; "Derailleur"
  -> Derailleurs (fans to front + rear, as 1983); "Rims-Spokes" split into
  Rims / Spokes; "Fork Ends" folded into Fork; "Standard Package" -> Extras;
  "OF. ME. GA. (manufacturer)" headsets -> "Ofmega"; source spelling
  "Rekord" kept in values.
- Generator: WORD_ALIASES `rekord` -> `record` (no DB title uses "Rekord");
  the 1974 Motobecane `'3ttt record'` -> 2771 (1st Version, 1970) override
  ranged `{ to: 1975 }` so the 1981 plain "T.T.T. Rekord" bar/stem stay
  unlinked.
- Picks: Super Record by existing overrides (RD 4149 PAT. 80 for 1980-83,
  brakes 582 v1, FD 2313, headset 2968, pedals 3716) plus crank 1509 (1049/A
  Strada Super Record, "special engraving"); Nuovo Record FD 2299 / RD 4125
  by matcher; Nuovo Gran Sport FD 2276 / RD 4085 (as 1983 Gran Sport);
  Record Strada headset 2963 and 32-hole hubs 3259 (1034 low flange, as the
  1983 NR hubs); "T.T.T. Rekord competition, superlight" bars -> 2767 Record
  Competizione Superleggero (name match; velobase dates it 1970-75);
  Universal model 77 -> 1083, ART. 125 -> 1075; Everest Special Oro chain
  -> 1365; Regina Extra Oro 5-speed -> 2182, plain Regina Extra 5-speed ->
  8171 (scalare); Mavic OR10 -> 5103, OR7 -> 5104; Clement Campionissimo ->
  6738 (only dated Campionissimo row), Criterium -> 6745.
- Left unlinked: TTT plain Record bar/stem and model 78 stem, "Super-light
  Rekord" pedals (1037 vs 4021 undecidable), Campagnolo "New Type" hubs
  (five Nuovo Tipo rows), Huret (no model), Dia-Compe / Universal
  centre-pulls, Universal ART. 130/131, Ofmega Super Corsa cranks / hubs,
  Gipiemme / Sugino Corsa cranks, Everest and Regina Oro 6-speed freewheels,
  Regina Super Corsa chain, Clement Gentleman tyres, Italia / TTT saddles,
  house "Corsa" parts.
- Regression: all 28 catalogues regenerated; only the 31 new 1981 links
  changed.

## 1982 Bianchi — `1982_bianchi_spec.csv` (6 bikes, 56 specs, 21 linked)

- Source: https://saarf.london/2014/02/18/bianchi-racing-catalog-1982/
  (112, 211, 311, 411, 512, 61-91.jpg): US racing brochure ("Bianchi. There
  are no substitutes. Only compromises."; "all 12 of the Bianchis now
  available in America" — only the racing pages are scanned). A photo and
  a prose paragraph per bike, no table, sizes or colours; transcribed by
  hand. Not the 1983 catalogue: same model names, different specs (1982
  Nuovo Racing has Universal 77 brakes and G.P.M. crank, 1983 Ofmega).
- Bikes: Nuovo Racing, Nuovo Touring (new, 18-speed 30-110, Shimano 600
  G.S.), Campione del Mondo (Belgian team bike), Super Leggera, Super Corsa
  (19 lb), Super Pista. "G.P.M." written as Gipiemme. Super Corsa's "only
  Campagnolo Super Record equipment" fanned to FD / RD / crank / brakes /
  levers / pedals / seatpost (as 1979 Colnago); Super Leggera's "Nuovo and
  Super Record" kept as a groupset value only (undecidable per part).
- Picks: Super Record and Nuovo Record by existing ranges (1982 -> FD 2300
  0104007, RD 4126 v4; SR levers 232, brakes 582, seatpost 5761, RD 4149);
  Gran Sport brakes 554; Record Pista crank 1505 / headset 2966; Cinelli #2
  -> 5332; Mavic OR 10 -> 5103. New overrides: Universal 77 -> 1083;
  "Campagnolo Gran Sport, drilled" levers -> 209 1040/1A; Record Pista hubs
  -> 3270 (1036 high flange, as 1983); Shimano 600 GS rear -> 7110 RD-6101
  600 GS, front -> 7435 FD-6100 Shimano-600 (same era, no "600 GS" front
  row).
- Left unlinked: bare Mavic / Clement, Gipiemme crank and pedals (no
  model), "Campagnolo, Bianchi engraved chainwheels", engraved stems /
  seatposts, T.T.T. track stem.
- Regression: all 29 catalogues regenerated; only the 5 new 1982 links
  changed.

## 1988 Bianchi — `1988_bianchi_spec.csv` (6 bikes, 57 specs, 31 linked)

- Source: https://saarf.london/2014/03/01/bianchi-1986-vintage-roadbike-catalog/
  (111, 21, 32, 411, 511.jpg): US catalogue, Professional Series (C-4
  Project, Mondiale, Super Leggera, Pista) and Competition Series (Giro,
  Limited), accessories page. Prose per bike, no sizes / colours / weights;
  transcribed by hand. saarf dates it 1986; loaded as **1988**: Super
  Leggera "introduces the Campagnolo Chorus Syncro group" (all Chorus rows
  1987/88+), Limited has Shimano 600 Ultegra SIS (Ultegra rows from 1988),
  Victory Syncro fits Victory S3 (1987-88), and the accessories cap reads
  "campione del mondo 1986-1987" (Argentin, retrospective). Differs from
  the 1987 catalogue on every shared model (Mondiale C-Record Syncro +
  Cobalto vs C Record + Super Record brakes; Super Leggera Chorus vs
  Modolo/Gipiemme; Giro Victory vs Dura-Ace; Limited 600 Ultegra vs 600).
- Same scans as the "1986" set on https://2velo.com/bianchi-bicycle-catalog-80s/
  (115, 28, 37, 46, 55.jpg; checked 2026-10-24), so 2velo's 1986 is this
  catalogue, not a missing year. 2velo's "1988" set (1988p11-p81.jpg) is a
  different, Japanese "Bianchi by BJ Sport Inc." catalogue: not ingested.
- Group text fanned to FD / RD / crank / brakes / levers (Mondiale brakes =
  Cobalto from the text); C-4's "C-Record component group" kept as a
  groupset value only. Shifters written per group ("Campagnolo Chorus
  Syncro") so each reaches its own row.
- Picks: C-Record by existing ranges (crank 1482, FD 2283, RD 4098, levers
  214; shifters 5973 by matcher); Cobalto 561; Victory crank 1516, FD 2318,
  brakes 590, levers 235 (only Victory rows, dated to 1986), shifters 6007;
  Chorus levers 220 / crank 1487 by matcher. New overrides: Chorus FD 2286,
  RD 4108 short cage, shifters 7027; 600 Ultegra FD 2478 / RD 4466 / brakes
  966 / levers 7217 (BL-6400 base) / crank 1790 / SIS shifters 6144 (was
  hitting "Shimano 600" 1970-80); Ofmega Super Competizione Pista 1702.
  Ranges changed: Victory RD -> 4169 Victory S3 from 1987 (4168 G010-SM to
  1986); Chorus brakes 565 range now from 1988 (was 1990).
- Left unlinked: Look pedals (no model, seven Look rows), Clement Meeting
  and IRC Triathlete tyres (no rows), Ambrosio disc wheels, 3ttt bars /
  stems, frames, forks, Celeste tape.
- Regression: all 30 catalogues regenerated; only the 1988 links changed.

## 1990 Bianchi — `1990_bianchi_spec.csv` (26 bikes, 519 specs, 262 linked)

- Source: https://www.retrobike.co.uk/archive/1990-bianchi-catalogue.1676/
  ("1990 Bianchi Catalogo.pdf", 23 pp, Bianchi USA Inc., South San
  Francisco; the download needs a browser UA + cookie from the archive
  page, plain curl gets 406). Prose per bike on pp. 4-19, geometry on p. 20,
  full spec table on pp. 21-22 (read from x3 crops of the 1275 px page
  images). Series: Cross-Terrain, Mountain, Road; category = series plus
  the catalogue's level word (Professional / Competition / Performance)
  where given. Mondiale Frameset is prose-only (frame + Cinelli BB).
- CSV choices: paired columns split into Fork/Headset, Handlebars/Stem,
  Saddle/Seatpost, Hubs/Spokes, Freewheel-or-Cassette/Chain, Rims/Tyres,
  FD/RD/Shifters; Brakeset split into Brakes + Brake Levers when a lever is
  named. Freewheel vs Cassette follows the catalogue's "cassette" wording.
  Crank finish words (Powering, Superglide, hard anodized) dropped; "Ofmega
  Competition" -> Competizione; Pista "16T fixed gear" -> "fixed cog" (hits
  the existing null). "*" (CPSC reflector group) written out in Extras.
  The Pedals column is out of focus in the scan: SR MTP-126 / MTP-170,
  H.T.I. HTI-P15, H.K. VP-230, Sakae CTP-170 and Forza "H.K. VP-382S" are
  best readings.
- Generator: 1990 Bianchi block in each category, all ranged by year.
  Existing overrides ranged: FD / RD 'shimano 105' (Golden Arrow to 1989,
  105SC from 1990), FD / RD 'shimano deore xt' (M700 to 1989, M735 from
  1990), Brakes 'shimano dura ace' (1990 -> BR-7402 992; BR-7403 dual
  pivot from 1991, its DB start), Cranksets 'shimano dura ace 53 42t'
  (FC-7400 to 1988, FC-7402 from 1989), Shifters 'shimano 105 sis'
  (SL-1050 to 1989, SL-1055 from 1990), Pedals 'ofmega master' (Pista ->
  3880 Master Pista).
- Matcher corrections: Dura-Ace FD-7703 / EX rear -> FD-7403 / RD-7402;
  Ultegra RD-6500 / "Ultegra Tripple" -> 600 Ultegra 6400; 105 Golden Arrow
  -> 105SC; XT M700 -> M735; Chorus RS post -> C0R2 5742; Athena
  Ergopower -> null (Synchro-2 downtube levers, no row); X-1 Chroma 1989
  rear -> RD-X101.
- Picks: 1990 Shimano groups by DB dating (105SC, 600 Ultegra, Dura-Ace
  8sp, Deore XT M735 / DX M650 / LX M550, 200GS, Exage 500EX); XC-Pro hubs
  -> 3628 rear freewheel hub (bikes listed with freewheels); Campione crank
  -> 1705 Ofmega Vantage (Bianchi Quattro version). Bike-keyed: X-Press
  shifters only on Project 7 / Grizzly (6312 XC-Pro), 13-23T 7sp cassette
  only on Virata (CS-HG90).
- Linked to SunTour rows the DB dates only 1992 (same model, only row):
  XC-Comp FD 7959 / crank 7999 / hub 7982, XCT FD 7962 / RD 7952 / crank
  8004 / cantilever 8038, X-1 crank 8000 / cantilever 8032, Radius crank
  8007, XC-Pro seatpost 8046. This catalogue is evidence for year_from
  1990 on those rows (not yet applied).
- Left unlinked: SR / H.L. / ITM / Modolo bars and stems, Tange CD /
  TH-series headsets, Bianchi Dakar / Advantage tyres, Vittoria Zefir /
  Formula 1, IRC Triathlete, C.S.T., Regina RL.SY90, Sedisport 270, Viscount
  saddles, SR / Strong posts, Rapidfire shifters, Modolo Quattro brakes,
  Ambrosio Montreal (several variants), Campagnolo Delta XL, Athena
  Synchro-2.
- Regression: all 31 catalogues regenerated; only the 1990 rows changed.
- Open: the bare 'shimano 105' FD / RD overrides send pre-1990 catalogues
  to Golden Arrow, so the 1987 Bianchi 105 derailleurs likely point at
  1983-85 rows instead of the 1050 group.

## 1978 Bianchi — `1978_bianchi_spec.csv` (7 bikes, 102 specs, 36 linked)

- Source: https://labibleduvelocataloguesbianchi.blogspot.com/p/bianchi-1978.html (5 scans at 960px, no larger copy served: clothing page, Barcellona, Super-Turismo, Rekord 748 / 746 / 745, Specialissima Super-Leggera / Professionale and Campione del Mondo CX). Italian text, no prices: `data_source` 263, country IT inferred. Model codes in titles as 1973 ("Rekord/748 (00.4.60)").
- CSV written by hand from enlarged crops, translated to English as 1973. "flange normali" -> "normal flange", "bassi" -> "short reach", "a richiesta" sizes -> "Made to measure". Packed gross weights ("peso lordo") not recorded.
- Scope: Super-Turismo 10 velocita (00.4.47) left out as a city bike (T.T.T. "Rekord Inglese" upright bars, fenders, ESGE rack, kickstand, chain guard, lights), as the 1973 Ghisallo. Specialissima Professionale (00.5.11) kept as a bare row: the catalogue shows it with the Super-Leggera and only says packaging and weight are as 00.4.30.
- New overrides (all ranged): Super Record cranks -> 1509 1049/A, Record Strada crank -> 1496; Super Record "bassi" brakes -> 7005 4061/1 short reach; Universal Competizione/77 -> 1083 Mod. 77, Competizione CX -> 1086 CX; "normal flange" Record hubs -> 3259 1034 low flange; Super Record Strada pedals -> 3716 4021, Record Super Leggeri -> 3709 1037/a; Record Strada seatpost -> 5749; Record BB -> 30 1046/a; Regina Extra Oro chain -> 1385; Regina Extra Oro 5-speed -> 2182, Extra 5-speed -> 8171. "Mavic special" set to null (substring hit Service des Courses 5108). No other catalogue's link count changed.
- Judgement calls kept: Super Record front -> 2313 1052/SR although the row starts 1979 (see TODO); "Ambassador" headset -> 9159 Ofmega 3150 Ambassador; bare "Campagnolo" CX pedals / seatpost via the existing 3708 / 5749 overrides.
- Left unlinked: T.T.T. bars and posts, Clement tubulars, Regina "Extra Oro 50 Record" chain (Extra 50 Oro vs Extra 50 Record), Regina Extra Oro 6-speed (no row), Campagnolo "Sport" headset, Bianchi / Gipiemme house parts.
