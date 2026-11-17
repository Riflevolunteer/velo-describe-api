# Bike spec link decisions

Leave-unlinked calls and reviewed-but-not-linked cases for `bike_spec.component_id`, moved from TODO.md on 2026-11-15. Each records why a spec stays unlinked (several rows fit, era unclear, either/or cell, maker-only text, user's call). Do not relink these without new evidence; record a reversal here when one is made. Open source gaps and candidates stay in TODO.md; per-catalogue mappings stay in `known-catalogs/<brand>.md`.

General rule: brand-only, size/material-only, either/or and house-part specs can correctly remain unlinked. Do not infer a model from bare `Campagnolo`.

## Ariake frame-dependent saddles (reviewed 2026-11-17)

- 1982 Miyata 110 spec 21066 prints `ARIAKE 77-17, quilted vinyl top,
  padded; 81-L for ladies` (PDF p.15, source 403). 1983 Miyata 90 spec 22019
  prints `ARIAKE 77-17 (81L for Mixte)` (p.17, source 406). Each stored bike
  spec spans frame-dependent alternatives; keep the full text and component NULL.
  A single 77-17 link would omit the ladies'/mixte alternative. Exact generator
  NULL guards prevent that substring match. No separate 81-L row or speculative
  split is needed for this review. See known-catalogs/miyata.md for source URLs.

## Nashbar follow-through on Miyata (reviewed 2026-11-17)

- GX-400 Aero lever **18835** is not caliper series 8082 / 678. Its matching
  GX-400 caliper spec 18834 is already linked; keep the lever NULL pending a
  lever code/source. DC-983D brakes **22360 / 22462** are not established aliases
  of bare 983 row 662 by the 1988 Nashbar source. Retain both NULL until a D-code
  crosswalk is found. See component cross-catalog-notes.md, Nashbar follow-through.

## 1984 Motobecane (loaded 2026-11-16)

- City-Becane (bike 1335, loaded 2026-11-17): the p.9 portrait
  identifies Duopar Eco, while p.10 says Duopar/Club. Keep rear spec 23182 NULL until
  4276 / 4400 are reconciled; the explicit NULL guard prevents a unique 4276
  substring match from choosing prematurely. The front plain Club uses the
  existing Club II 2379 crosswalk. Weinmann 431 26×1.75 remains NULL: row 7780
  is documented as BMX with no 26-inch size crosswalk. Generic cantilevers,
  ratchet shifter, maker-only saddle and unnamed tyre model remain unlinked.
- Le Champion LC40/LC41 and Prolight PL40/PL41 list alternative rim/tyre
  packages. Preserve both in each spec and leave NULL; the single Module E or
  Michelin BIB TS20 substring is not a link for the whole combined value.
- Team Champion `Cinelli Giro d’Italia 66`, `Stronglight D 9`, `Simplex 6600`
  and `Mavic SSC black` remain NULL: contradictory bar name/code, no D9 row,
  unspecified rear cage and a wrong-era plain SSC row respectively. Prolight
  `Simplex 610` does not distinguish T/GT. Do not infer these variants from year.
- Le Champion Atom 77 is six-speed; row 8127 is five-speed and generic 7233
  is a single-speed freewheel. Both are unsuitable. Grand Touring and Super
  Mirage print 34T Helicomatic clusters; 8131 documents a 32T maximum.
- Grand Touring Stronglight 99 is a triple; do not use double row 1906.
  Super Mirage's portrait explicitly says Duopar Eco, but 4276 / 4400 need
  identity reconciliation before a link. Plain Huret Duopar on Grand Touring
  and Interclub does not establish the titanium/Eco variant. Huret S PP,
  Challenger S. and bare Rival fronts also need clearer variant evidence.
- Grand Jubilee and Jubilee Sport print Michelin BIB TS23 **27x1**; 6831 is
  700x23C. Retain the source wording and leave NULL pending evidence of the
  27-inch fitment or a catalogue correction. Brand-only, generic/house parts,
  unnamed shifters, unspecified Maillard hubs/freewheels, RS saddles and
  Michelin-or-Hutchinson tyres stay unlinked. No model inferred from fitment.
- Interclub's combined rear Weinmann 999 and Maillard drum cannot have one
  component link. Its combined front/rear tandem crank and bar specs stay NULL.
  See [catalogue notes](known-catalogs/motobecane.md#1984-uk-distributor-edition--loaded-2026-11-16)
  for evidence, applied links, availability updates and retained source files.

## Mixed calls (2026-10-30)

- Decided 2026-10-30, leave unlinked: 1982 Peugeot "Lightrace Luxe" headset (7; only 3032 Lightrace Grand Luxe, undated, and 3033 Super, 1984); 1981 Peugeot "Simplex SJA" front on PX 10 S, PSV 10, PFN 13 (3; neighbour years disagree: 102 / 222, triple 103 / 223); 1983 Peugeot "Maillard 700 Pro" hubs (3; large vs low flange, neighbour years do not say); 1982 Peugeot "Mafac Promotion" levers (3; four variants); 1990 Bianchi "Sedisport 270 black" (2; no 270 row).

## Freewheels / cassettes

- Decided 2026-10-30, leave unlinked: Atom 13/26 6 speed, 1981 Raleigh Professional [9341] (2050 black vs 2051 silver cogs, colour not printed); Shimano Gold 13/28 with 600 EX, 1981 Raleigh Criterium [9285] (no Gold freewheel row); Regina CXS 7-speed, 1986 Cinelli [2309] (2169 is the 6-speed only).

## Seatposts

- 1987 Bianchi Mondiale, corrected table value `Gipiemme Cronosprint anodized` (spec 1133):
  NULL replacing the incorrect C-Record link 5737, applied/validated 2026-11-17. Source 46,
  PDF p.15, names no code. 5789 600BA, 5790 600CA Aero and 5788 600DD remain plausible; the p.4
  complete-bike photo / group prose does not establish a numbered Cronosprint variant. The
  existing bare Cronosprint mapping on Giro / Super Leggera is a separate prior decision.

- Leave unlinked: the three plausible Peugeot Spidel links; 1980 Peugeot "SR Laprade, fluted, lightweight" (five SR Laprade rows: 5857 / 5858 / 5859 / 5860 / 5862); Peugeot "Stronglight" / "Strong alloy" text (8, maker only); 1986 Falcon "Suntour QR-120" (a seat bolt, not a post).

## Rims

- Applied/validated 2026-11-17, **user approved**: 1982 Battaglin Alessandro
  spec **12943**, `Nisi Corsa`, unlinked **5131 Corsa Toro (no eyelets) -> NULL**.
  Original Alessandro sheet prints no Toro/code/eyelet construction. Scoped
  Alessandro/1982 NULL override now prevents that unsupported assignment from
  recurring if 5131 becomes the only candidate. Need a numbered parts list or
  identifiable original rim; see Battaglin's Nisi Corsa review.

- 1987 Bianchi X4 `Bianchi Speciale` (spec 1119): corrected wording applied/validated 2026-11-17,
  NULL retained. Source 46 PDF p.15 and p.4's Bianchi Black and Silver Pro prose name
  a house rim, without identifying a Campagnolo maker/model. Do not infer one from C-Record.

- Leave unlinked (several rows fit): Miyata "ARAYA 16-B" (four 16B rows); 1989 Bianchi "Campagnolo Omega Super hard anodized" (4957 / 4961 / 4958 all cover 1989); "Ambrosio Elite anodized" (Extra Elite / Super Elite / Aero Elite); "Araya RM alloy" (RM series); 1989 Peugeot "Mavic 190 NE" (DB has 190FB and 195NE); 1988 Peugeot "Mavic 400" x2 (model not identified); 1989 Bianchi "Crono 700 and Hypothesis 26" (two rims in one cell); Raleigh 1989 "Alesa alloy / hollow section" (12) and "Nisi Sprint / High Pressure" (maker, no model).
- Also several rows fit: 1991-92 Bianchi Proto / X-4 "Campagnolo Sigma" (4; tubulars 4970 Sigma Strada, 7032 Sigma 20 Strada, 7031 Sigma Pave, 4969 Sigma Crono all cover 1991), 1994 Cinelli Supercorsa "Campagnolo Omega" (4955 / 4957 / 4961), 1991 Colnago Krono "Ambrosio Aero (spoked-wheel option)" (4; 4892 Aero, 9481 Aerodynamic, 9482 Aero Elite). Either/or and two-rim cells stay unlinked: "Campagnolo Victory or Ambrosio Metamorphosis" (Victory Strada vs Crono also open), "Mavic Monthlery / Sport or Pellet", "Martano Strada (tubular) / Araya 20A smoked", "FIR Tour or Ambrosio Giro d'Italia". Still no row: Araya RM-18T, Ukai LA-14 / EX-17 / 22A / 7Z, Weinmann 716E / 425 X / Aero, Sumo 7X / 14F, Rigida Jade / Saphir / CTX 10, Wolber Alpine, Velotech, FiR Mase Lega / MT 222 / MT 240.

## Hubs

- Applied/validated 2026-11-17, **user approved**: 1991 Bianchi Grizzly
  spec **19546**, `SunTour XC-Pro`, unlinked **3628 HB-XP00-R -> NULL**.
  The former link specified a threaded rear freewheel hub. Original Japanese table p.9
  prints the group name, without a front/rear code. Stored cluster **19547 ->
  1222** is a cassette inference, not independent proof of a hub code. Scoped
  Grizzly/1991 NULL override prevents a unique future hit selecting a hub
  construction without evidence. See Bianchi's Grizzly hub review.

## Saddles

- Guard added 2026-11-17: 1973 Peugeot PX 10 spec **7624**, `Brooks Professional
  or Ideale 90`, stays NULL under an explicit generator override. This enforces
  the existing either/or decision even when Brooks Professional 10057 is the
  sole substring candidate; it does not choose one of the alternatives.

- Leave unlinked: the Colnago Concor family (decided 2026-10-30); 1987 Peugeot Galaxie "Mondial silver" (Mundialita or an Iscaselle Mondial); the 1993 Bianchi house saddles (9200 supersoft, Hi-density, Gelfoam); 1982 Peugeot "Ideale 'Donna'" (no Donna row); "Viscount mtn / MTB anatomic" (5, maker only).
- Left by user's call: 1994 Cinelli Genius Machine / Soft Machine "Bontrager Titanio" (5540 Selle San Marco Bontrager Ti is dated 1990 only) and "San Marco Rolls" on the 1994 Cinelli Supercorsa and 1991 Colnago x4 (5563 Rolls ends 1988; extending it would reverse the Colnago no-wrong-era decision); 1994 Genius Strada "San Marco Rolls Tit." (no titanium Rolls row). Either/or: "Selle Italia Super Turbo or Turbo", "Brooks Professional or Ideale 90", "Ideale 2002 or treated leather". No row: San Marco Tuono (1994 Cinelli), Bontrager E 40, Isca Record Lycra / Competition / Nabuk, Raleigh G.T. Mk IV / Mk V, Selle Royal Racing / Leather Racing.
- Decided 2026-10-30, leave unlinked: Brooks B-15 / B15, 1970-72 Raleigh Super Course / Gran Sport [7819 9403 8958 8977] (every B15 row is 1950s-dated; needs a 1970s Brooks catalogue); bare "Concor" (16), "Concor Moda" (4) and "Concor in MODA grid colours" (3), 1986-88 Colnago: Concor is a family by 1985 (Supercorsa, Profil, Max, Bufalo, Confort, SL versions), not one model.
- Decided 2026-10-30, leave unlinked: San Marco Gilux race, 1978 Peugeot PS / PSN 10 [9987 9968] (5555 GI-LUX 311 undated, 5556 GI-LUX 312 from 1980); Selle Italia CX / Sella Italia CX, 1982 / 1984 Peugeot [11116 12301] (no Selle Italia CX row; 5524 Selle Royal CX only if the maker is misprinted).

## Stems

- Leave unlinked: "CTA" on the 1989 Peugeot Alpine Express / VTT Express MTBs (6452 is the aero road CTA); "Atax or CTA" (6, either / or).
- Left by user's call: 1994 Cinelli "Cinelli Grammo Titanio Ahead" (2; 6497 Grammo Titanium 1993-2000 covers the year but is undifferentiated, 10137 Road Ahead starts 1996). No row: 3T Procrom Ahead, 3T Procurve (1994 Cinelli). 1991 Bianchi "Nitto Dynamic III" stays on its do-not-link override (bianchi.md).
- Decided 2026-10-30, leave unlinked: Sakae RY / RY 70 mm / RY 80-90 mm, 1985 Bianchi Randonneur 700 / Rekord 26 / Speciale-II [5779 5796 5746] (only 1974 RY-70 / 90 / 110 and 1982 RY2 rows); TTT Grand Prix, 1970-71 Raleigh Professional Mk II / III [7753 9356] (only 1960 / 1964 / undated Gran Prix *Special* rows).

## Handlebars

- Leave unlinked: 1975 Motobecane Grand Touring Randonneur bend and Tandem combined front/rear cell; the two 1986 Cinelli Almarc bars (11171 Almarc is a 1980-81 3ttt Merckx / Rekord-78 set, not these).
- "MIYATA SIGNATURE Alloy" (4) is a house bar: leave. Leave unlinked: 1986 Miyata 100 "SR CTSD" (nearest is 7888 CTD, a different code); Miyata "SR RANDONNEUR Alloy" (3; RN-L / RN-S / RND / WR, nothing to choose on); 1989 Peugeot Cosmic "Franco Italia" (Philippe 2897 1970-82 or Milremo 2868 1984); 1989 Peugeot Anjou "CTA alloy randonneur bars" (2782 ATAX CTA is a racing bend); 1978 Peugeot "Atax Philippe, demi-course" (no demi-course row).
- Leave unlinked: "3ttt / TTT Competizione" (1987, 1991-92 Bianchi; three bends), 1991-92 Bianchi "ITM Mondiale" (3; 9198 Mondial 90/A ends 1990 and names a model the cell does not), 1991 Bianchi Sakae MTB-220 / MTB-227 (only MTB-226SB, 1993), 1994 Cinelli "3T Pro Light" (2) and "Cinelli Eubios 26" (no rows), 1981 Bianchi "T.T.T. Rekord".
- Decided 2026-10-30, leave unlinked: "Racing bend" / "Racing bend, light alloy", 1970-76 Peugeot x13 [7368 7507 7571 9539 9567 9698 9670 7274 7258 7314 7299 7448 7433] (no maker printed; 2901 Franco Belge 354 starts 1979); T.T.T. Record Competizione, 1978 Bianchi Campione del Mondo CX [12513] (DB splits it by bend: 2752 Gimondi / 2750 Merckx / 2777 TdF; none printed).

## Tyres

- Guard added 2026-11-17: 1973 Zeus Z 66 spec **44**, `D'Alessandro Super-Cross
  Tubulars`, stays NULL. The existing 11138 `D'Alessandro Super` is a grooved/mixed
  tread tubular; no recorded evidence establishes Super-Cross as that model.
  A substring alone does not justify dropping the Cross qualifier. Revisit with
  an explicit maker model crosswalk or identifiable original fitment evidence.

- **Intentional unlinked Ritmo identification (2026-11-14):** Raleigh
  specs 4536 / 4621 / 4669 name plain Clement Ritmo, without evidence identifying
  LTX 55 (6767). LTX 55 is a real photographed marking, but the Ten Speed Drive
  1983 page used for its dates/255 g construction describes only plain Ritmo.
  Unsupported links cleared and generator override set to null; 6767's
  unsupported catalogue dates/construction withdrawn, photographic source restored.
  [Evidence](../../ingest-component-catalog/references/known-catalogs/clement.md).
  Need dated LTX 55 evidence and independent Raleigh fitment identification;
  do not extend its dates from the plain name.
- **Intentional unlinked identification:** 1983 Bianchi Super Pista spec 1023
  prints only Clement Pista; Guida distinguishes Pistard from numbered Pista
  tyres. Unsupported 6765 link cleared and override set to null on 2026-11-14.
  Need a model code, casing/weight or independent fitment evidence to identify it.
  [Evidence](../../ingest-component-catalog/references/known-catalogs/clement.md).
- **Tyre groups kept separate (2026-11-14 review, no merges):**
  Groups kept separate: Schwalbe Blizzard Pro 10225/10227/10541/10542 (TPI/bead),
  Vredestein Slimline Sprint 8771/8772 (630/622 mm), Clement Seta 8970/6769
  (track/less identified), Vittoria Record 9062/9067 (tubular/clincher),
  Specialized TriCross 9909/10230 (generation), Schwalbe Stelvio 10228/10229
  (wheel size), Dourdoigne 11144/11145 (weight configuration).
- Generic and house-part tyre strings remain plain text. 61 Colnago Gommitalia/GommaItalia specs
  lack sufficient model identification; their volume does not justify default links.
- Decided 2026-10-30, leave unlinked: Clement silk tubulars, extra-light, 1978 Bianchi Specialissima Barcellona [12481] (three road Seta Extra rows: 6738 / 8971 / 6761); Hutchinson Silk, 1971-72 Raleigh Professional / Pro Track x3 [9364 8919 8900] (no row fits: 9050 is a 1976-78 track tyre, 9266 is 1985).
- Decided 2026-10-30, leave unlinked: Vittoria Seta / Seta original, 1985 Bianchi Super Leggera / Centenario [5693 5677] (three road Corsa Seta variants: 9248 / 9429 / 6877); Wolber Rallye, 1984 Bianchi Nuovo Racing [1036] (Rallye 19 / 20TKS / 22 / 23); Dunlop High Pressure Road Racing, 1970 Raleigh Gran Sport [7799] (6801 is 1940-60); IRC "Roadlite Ex" / Roadlite 100PSI skinwall, 1986 Raleigh Prestige / Technium 480 [8184 8325] (9099 is a 1978 27in Road Lite Z).

## Pedals

- Most unlinked values are toe-clip / reflector text ("Course with toe clips and straps" 17, "Sports pedals with reflectors" 10), Raleigh house pedals (717, 501, 917, "Raleigh ball bearing"), the Maillard CX / Atom source gap (see source hunts) and Colnago group fan-out ("Shimano AL 11", "Shimano Santé"): leave.
- Leave unlinked (several rows fit or either / or): 1982 Battaglin "Gipiemme Cronospecial / Special" (existing do-not-link: 3747 Cronospecial and 3752 Special are separate pedals); 1972 Raleigh "Campagnolo Pista" (3711 / 3715, both 1971+); 1980 Raleigh "Sun Tour Superbe" (PL-1000 Custom or PL-4000 Pro); 1981 Peugeot "Atom 450" x2 (450RA or 450RN); 1981-82 Peugeot "Spidel 700" / "700 RA" x4 (Spidel 700 rows end 1980; Spidel badge variants kept apart); Bianchi "Ofmega Pista" (Master or Mistral Pista) and "Ofmega Competizione" (not the Super Competizione).

## Shifters

- Sachs Huret compatibility review 2026-11-16: manufacturer sheets 501.1 DFE
  and 510.8 D establish that 6110's MA85.5E right lever selects six or seven
  speeds; MA85.4E left is retro-friction. Supersedes the earlier seven-speed-only
  concern. Retain Peugeot 15103 / 17501. Raleigh 8849's six-speed range is
  compatible, but its ratchet wording does not establish the exact ARIS lever;
  retain the existing link pending code/photographic evidence. See the
  [sources and retrieval limits](../../ingest-component-catalog/references/known-catalogs/huret.md#new-success-shifter-sixseven-speed-compatibility--2026-11-16-review).
  Subsequent maker/specimen/owner-photo comparison still does not identify
  Raleigh's right-lever code or selector; retain 8849's current link pending
  new distinguishing material. See the [follow-up](../../ingest-component-catalog/references/known-catalogs/huret.md#raleigh-shifter-and-front-provenance-follow-up--2026-11-16).
- Most unlinked values are generic or system text ("Simplex" 8, "stem shifters" 6, "Handlebar stem power shifters" 8, the 1983-84 Raleigh "Direct Fit / Clip Fit / Alloy Ratchet Levers", "SIS levers", "Aris Index"): leave.
- Leave unlinked (several rows fit): 1983-84 Raleigh "Shimano 600 AX Top Mounted Direct Fit Levers" x2 (SL-6310 or SL-6311 braze-on); 1986 Raleigh "Suntour Cyclone" (6278 / 7826 / 6279); 1989 Bianchi "SunTour GPX AccuShift" (6286 B / 6287 C); 1989 Bianchi "SunTour XCE-4050" (6285 SL-4050 is titled Edge, the road group); 1987 Raleigh "Huret Rival ... black ratchet levers" (6108 is the indexed Aris); 1974 Motobecane "Simplex Prestige stem shifter" (stem row 6226 is 1964-65).

## Brake Levers

- Most unlinked Peugeot values name no model ("Double levers" 21, "Course levers" 13, "Weinmann" 8, "CLB" 7, "Drilled course levers with rubber hoods" 7, the 1987-88 "Road grips, double lever" strings): leave.
- Leave unlinked: 1982 Peugeot "Mafac course (double cable on the right)" x2 (the plain "mafac course" override goes to 357 Course 419 / 429, but a two-cable lever may not be that part; not applied 2026-11-02); 1989 Bianchi "Shimano Sport LX aero" (BL-A450 / A451 / A452 / A453 all Exage Sport); 1982 Peugeot "Mafac Promotion" x3 (344 / 345 / 346 plus the dural Promotion = Course 130 decision) and "Mafac, drilled" x2; 1989 Bianchi "Dia-Compe 250S aero" (AC250 / AGC250, no 250S) and "SunTour XCE-4050" (455 is the Edge road lever); 1986 Raleigh "DC 630/165 (racing); DC 630/135 (touring)" (two levers in one cell).

## Chains

- Decided 2026-11-17: 1986 Falcon Sierra / Everest specs **16332 / 16352**,
  `Black`, stay NULL. Colour alone establishes neither maker nor model. An
  explicit Chains `black` NULL guard prevents the unique substring candidate
  **10740 Sachs SC 40 Black** (1996) being assigned to these 1986 bikes.
  Named chains such as SC 40 Black remain matchable by their actual names.

## Crankset

- Applied/validated 2026-11-17, user approved: 1987 Bianchi X4 /
  Mondiale crank specs **1107 / 1127**, `Campagnolo C Record 53/42T`,
  **1482 -> NULL**. Source 46 pp.4/15 gives no distinguishing generation marking;
  source 414 still shows early engraved-shield 1483 in February 1987. Year and
  ratio cannot select between 1482/1483. Scoped generator guards prevent
  relinking; live rows are NULL and SQL rerun changes zero. Reopen only with original
  fitment markings or a Bianchi parts crosswalk. See the
  [Bianchi evidence](known-catalogs/bianchi.md#1987-crank-generation-links--2026-11-17-applied-and-validated).

- Most unlinked Peugeot values are material / tooth text ("Dural square taper, 42 x 52T", "Steel, 46T") or the Solida / Nervar source gap (priority list item 2); most Raleigh values are the house "Exclusive Alloy Cotterless" and "Raleigh/SR alloy 5 pin" sets: leave.
- Leave unlinked: 1990 Bianchi "SR alloy XCT/GXC 48/38/28T" (8004 CW-XT01 XCT is 1992 and "GXC" is unexplained; not applied 2026-11-02); Motobecane "T.A. PROFESSIONAL" x2 (TA 1690 / 1693 / Professional 3-arm); 1986 Peugeot "Thun Coronado" (1444 / 1445 / 1446); 1987 Peugeot "Mavic anodised" (630 or 635); 1993 Bianchi "Sugino Mighty" (MTB Mighty rows are 1995).

## Brakes

- Applied/validated 2026-11-17, user approved: 1989 Bianchi Tangent Brakes
  spec **18675**, `SunTour XC-9010`, **1055 -> NULL**. Source325 table p.18
  names the group for the combined brakes. SunTour Edition No.89 printed
  p.25 (PDF p.26) identifies 1055 CT-XC10 as rear-only SE, alongside standard
  CT-XC00 (1054). Neither code identifies the whole combined cell. Preserve
  wording and leave NULL; Tangent/1989 generator guard prevents relinking.
  See [SunTour evidence and validation](../../ingest-component-catalog/references/known-catalogs/suntour.md#xce-crank-dating-and-tangent-brake-link-review--2026-11-17-applied-and-validated).

- Most unlinked values are type or maker text ("Mafac centre-pull" 17, "Weinmann side-pull" 13, "Cantilever" 7, "Weinmann" 6, the Raleigh "Weinmann Alloy Side Pull with Extension Levers" and "Raleigh/Weinmann alloy centerpull" strings): leave.
- Leave unlinked: 1986 Miyata "SHIMANO New 600 EX" x2 (BR-6207-49 short or -57 long reach); 1989 Peugeot "CLB / GL 47-60" / "CLB 47-60, white" (three GL 47-60 version rows 613 / 614 / 615, all undated); 1982 Battaglin "Gipiemme Modolo Professional" (880 v1 1976-80 or 892 v2 1985) and "Gipiemme Modolo Spidi"; 1987 Peugeot "Dia Compe G.500 Q.R." (678 G-N series or 9106 500G); 1982 Peugeot "Mafac Competition Sport" x2 and 1970-72 "Mafac Course" x3; 1981 / 1984 Peugeot "CLB Competition" (608 is 1950-70); remaining front/rear MTB halves are listed in the brake-identification worklist above.

## Rear Derailleurs

- Applied/validated 2026-11-17, user approved: generic 1980–1983
  `Campagnolo Super Record` / `Super Rekord` does not identify the late
  first-generation PAT.80 specimen 4149 rather than second-generation 4151.
  **4149 → NULL** for specs **782 / 985 / 6492 / 6647 / 12880**;
  live rows are NULL and the generator guard prevents reassignment. Reopen only with
  original fitment markings/photos or a period parts crosswalk. See the
  [specimen review](../../ingest-component-catalog/references/known-catalogs/campagnolo.md#super-record-and-early-campagnolo-specimen-review--2026-11-17).

- Reviewed 2026-11-17: **1978 Peugeot NL PA60 rear 10093**, `Simplex Criterium`,
  deliberately remains NULL. The original PA60 specification names no code;
  the full-bike photograph is the PR60, while the separate generic derailleur
  close-up is not identified as PA60 fitment. Criterium alone does not prove
  AR637 NI (4645) or a later LJ model. Existing year-ranged override already
  blocks 1978, including when only one candidate remains; 1976 mapping stays.
  Reopen with an original PA60-specific part-code document or a demonstrably
  original, sufficiently detailed 1978 NL specimen. Restored examples do not
  supply that evidence. See [source review](known-catalogs/peugeot.md#pa60-criterium-rear-identity-review--2026-11-17).

- Superseded 2026-11-16 (user approved): the 1989 Bianchi Forte / Volpe "XCE-4050" specs now link to the XE45 series. SunTour Edition No. 89 (the 1989 line, source 427) prints XCE 4050 as RD-XE45-GXB 11395, FD-XE45-GXH 11396, SL-XE45 11397, BL-XE45 11398, CW-XE45 11401 (48 / 38 / 28T, as Forte's crank) and HB-AT45 hubs 11403. The earlier unlink only rejected the 1990 XE00 and 1992 XE01 rows.
- Leave unlinked: 1987 Bianchi Sport SX "SunTour Alpha-5000 Balance Response System" brakeset (1324) and "SunTour Alpha-5000 52/42T" crankset (1327). The 1988 English SunTour catalogue (source 428) lists alpha-5000 as rear and front derailleurs only, and the AccuShift leaflets as derailleurs, levers and freewheel, so these are not SunTour alpha-5000 parts. Its hubs already go to Sansin RE-60a (9010) and its front to FD-5000-SS 11418.
- 1989 Peugeot (NL) VTT Express "Suntour XCM" front / rear: FD-XM34-GXH 11411 and RD-XM34-GXB 4795 (XCM 3040 in Edition No. 89). XM00 / XM02 (2665 / 4793) start in 1990.
- Miyata Omnium / 912 gearing and GMG shifters do not establish RD-6207 versus RD-6208. New Seven does not yet identify RD-1900. Generic Positron remains deliberately unlinked, including the 1983 Raleigh Silhouette.
- Leave unlinked (variant or era unclear): 1986 Miyata "SHIMANO New 600 EX" x2 (RD-6207 short / GS, or RD-6208 SIS); 1988 Colnago "Shimano Santé" x2 and 1988 Raleigh "Shimano Santé, SIS indexed" (RD-5000 and RD-5001 both cover 1988; existing call); 1984 Peugeot "Huret Duopar" x2 (4302 titanium standard cage, 4400 Eco or 8173 titanium long cage); 1982 Battaglin "Gipiemme Sprint 610"; 1989 Peugeot "Simplex SOI T/SP" x3 / "SOI GT/SP" / "501 GT/SP" / "T/SP" (maybe S001N T / S002 GT misprints); 1988 Peugeot "Simplex SX A430 GT/SP" x2 (no SX430; SX440 GT v3?); 1981 Raleigh "Sun Tour V.T." (VX-T 4773?); 1986 Falcon "Suntour MT Tech" (4712 / 7785 / 4711); 1986 Miyata "SUNTOUR New SEVEN" (RD-1900 ends 1985); 1981 Peugeot "Simplex SX"; 1986 Colnago "Shimano Deore"; 1978 Peugeot "Simplex Criterium", 1978 / 1989 "Shimano Positron", 1986 Raleigh "Suntour Cyclone" (existing nulls).

## Front Derailleurs

- Rival front review 2026-11-16: retain the existing links while seeking
  code/construction evidence. PXR 80 **16962** needs a triple/cage check:
  its 30/40/50 rings require 20T, while manufacturer sheets conflict on
  1086-00 (26T in 1981, 16T in 1983). Neither an automatic unlink nor a
  repoint to double 8961 is justified by that conflict alone. The other five
  1988 flagged fronts have 42/52 doubles. See the
  [Rival evidence review](../../ingest-component-catalog/references/known-catalogs/huret.md#rival-fronts-1086-00--av621d--2026-11-16-evidence-review).
- Sachs Huret audit 2026-11-16: retain the four Rider-double NULL guards
  (15470, 17763, 17782, 17858); AV 62.1 T 8962 is the triple configuration.
  The six 1988 Rival front links on 8488 remain identity reviews, not evidence
  to widen dates automatically; see the [brand audit](../../ingest-component-catalog/references/known-catalogs/huret.md#sachs-huret-brand-quality-audit--2026-11-16-read-only).
- Leave: bare "Simplex" (1979-89 Peugeot), other brand-only text, "None" / fixed gear and prose ("Huret or Simplex parallelogram", "Wide Ratio, indexed shift", "Shimano SIS indexed"): leave.
- Leave unlinked (variant or era unclear): 1981 Kalkhoff "Shimano 600" x3 (FD-6100 or FD-6200; existing null); 1981 Peugeot "Simplex SJA" x3 (SJ A102 / A103 / A222 / A223); 1986 Peugeot "Simplex SLJA 22" (SLJ A422 or A522); 1984 Raleigh "Suntour Cyclone II" and "Sun Tour Cyclone II GT Wide Ratio" (FD-2300 or FD-2400); 1986 Raleigh "Suntour Cyclone" (existing null); 1987 Raleigh "Suntour Mountech" and 1986 Falcon "Suntour MT Tech" (FD-2700 v1 / v2, both dated 1984-85); 1989 Bianchi "SunTour GPX" (GP00-SSB braze-on or -SSH clamp); 1986 Miyata "SUNTOUR Sprint" (FD-3900 Sprint starts 1987; would need a year_from move); 1974 Raleigh "Campagnolo Super Nuovo Record, 12 speed" (1052/SR 2313 starts 1975, early SR groups may have used the 1052/1); 1984 Peugeot "Campagnolo 1052/1" (2297 ends 1977; the 1984 clip-on is 2300); 1986 Falcon "Shimano 'Z'" x4 (Z202 / Z204 / Z206); 1988 Colnago "Shimano AL 11 SIS" (existing note: later indexed version, no row); 1986 Colnago "Shimano Deore" (DE10 or M700).
- SunTour a-3000 fronts (reviewed 2026-11-16): Sutherland's 6th ed., PDF pp.217–218, confirms FD-3000-SS / GT / GX. VeloBase identifies 2611 as GT and 2612 as GX; 2600 lacks a precise code, and its sole photo does not establish SS. 1987 Miyata Triton front 22519 stays NULL pending an SS specimen/drawing crosswalk to 2600. The DB's 1980 dates came from VeloBase's `1980's`, not a dated 1980 source; do not use those dates to infer a separate generation. See the [SunTour front review](../../ingest-component-catalog/references/known-catalogs/suntour.md#alpha-3000-front-identification--2026-11-16).
- Other SunTour: 2618 Vany, 2619 a-4050 undated (0 links); 2652 / 8268 Superbe Pro mounting (open item below).
- Huret: the 1986-88 plain "Huret Rival" fronts on 8488 Rival 1086-00 (1982-87; six 1988 links outside its dates) belong to the open 8961 / 8488 Rival question below, not a date widening; 1984 Raleigh "Huret ECO-S" fronts -> 8489 Club AS (the Eco S set's front, recorded); 2386 / 2377 undated VeloBase rows (0 links).
- Simplex: 2583 Prestige Criterium AV 223 unranged override (user decision 2026-10-28, simplex.md); Simplex Foret front (2, no row), "Simplex SJA" x3, "SLJA 22", SX 432 (recorded above).
- Campagnolo: 6 bare "Campagnolo" (1973-78 Falcon); 1974 Raleigh SNR and 1984 Peugeot 1052/1 (above); 1991 Colnago Topazio "Centaur 8V" (20048; only the Century grey row 2285 exists, standard-finish second-generation Centaur front is a source gap).

## Bottom Brackets

- Leave unlinked: 1973 Zeus Z 66 "Zeus Ciclo-Cross" (the "Ciclo-Cross" chainguard came on both the Criterium 2027 and the Gran Sport 2030 cranks, so the BB could be 188 Ref.33 or 190 Ref.34); 1981 Kalkhoff "Sakae 42/52" x3 / "Sakae 40/52" x2 (chainring text, no BB model).

## 1978 Motobecane US catalogue (loaded 2026-11-17)

- Hold SR SI5SD2 / AX5SD2 / SAX5RG2 unlinked: no exact AH/E or early5RG2
  crosswalk. Takagi TourneySP is not assumed plain Tourney9562; SRP3 is not
  assumed CT-P3. Lyotard36R/45A and OlympicRacing64 lack supported exact
  configurations; bare KKT stays text.
- Le Champion/Team Champion Maillard Atom700/Racing alloy clusters are
  five-speed in printed gear tables: never link **7233**, a single freewheel.
  Maillard/Maeda alternatives remain combined and NULL.
- Sprintour's plain Shimano600 does not establish6100 versus6200 Arabesque.
  UniglideGold chains lack a code; do not inherit1990 CN-UG30. CinelliRecordI
  stem lacks a code/logo crosswalk; Campagnolo alloy posts do not distinguish
  1044/4051. ItaliaCriterium skin leather does not distinguish buffalo/other
  leather versions; LeaderII lacks a row. PelletArc-En-Ciel needs an explicit
  maker crosswalk. Generic house parts stay text. See the Motobecane notes
  for source and approved/proposed status; these NULLs do not authorize inserts.

## Circa 1976 Motobecane catalogue (loaded 2026-11-17)

- Grand Record's `NORMANDY LUXE Competition` does not establish a gold/red
  label: hold NULL rather than extending gold-label 3388's dates from the
  family name. Team Champion's `REGINA ORO 13-21` does not establish six-speed
  2194; hold NULL pending speed/configuration evidence. These guards are scoped
  to 1976 and their respective bikes; older catalogue decisions remain intact.
- Preserve Grand Jubile's Huret Jubile / SunTour Cyclone GT rear and
  Stronglight 49D / SR AX5 crank alternatives without selecting one. Preserve
  Atom/Maeda freewheel and Union/Lyotard pedal alternatives likewise. Bare
  SR AX5 does not select AX-5LA / MA / RG / SD variants; Tourney / Tourney
  Luxe, Olympic pedals and Philippe Professional stems lack sufficient
  model/configuration evidence for a link. Generic/house parts, plain Sedis,
  unnumbered Super Champion/Weinmann rims and SR alloy posts remain text.
  These are intentional unresolved identifications, not component inserts.

## Headsets

- **Decided 2026-11-16, leave unlinked:** Tange "Unique X Loose-Proof" (1988 Raleigh Ozark II, 1989 Touriste) and "Unique FE" (1988 Raleigh Ritmo). 11346 Tange Unique is the bare model (Nashbar 1988). The 1989 Ozark / Chinook "Unique Loose-Proof" are linked to it, reading Loose-Proof as a feature. Generator `null` overrides.

- Brand-only text: "Stronglight" 7 (1985 Peugeot), bare "Tange" ~20, Bianchi "GPM, alloy", 1993 Bianchi "AheadSet" 3 / "Mavic headset": leave.
