# Bianchi catalogs processed so far

## 1940 Bianchi — `1940_bianchi_specs.csv` (17 bikes, 153 specs, 3 linked)

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
