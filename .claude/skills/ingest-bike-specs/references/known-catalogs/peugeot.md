# Peugeot catalogs processed so far

## 1979 Peugeot — `1979_peugeot_spec.csv` (29 bikes, 405 specs, 88 linked)

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
- 2026-10-05 re-link pass reverses the Spidel call above: "Spidel 700
  dural course" (PY 10 CP, PY 10 LC) -> 3833 Spidel/Maillard 700 Black
  Alloy Cages. "Dural" rules out the steel-cage row and "course" the
  platform, same reasoning as the Lyotard dural course -> 460D pick.

- 2026-10-08 (MAFAC 1976 component catalogue): Brake Levers override 'mafac course' -> 357 MAFAC Course 419 / 429, Competition, linking the TH 8 / TM 8 Tandem "Mafac course" specs (2934, 2946). The catalogue names its forged racing lever "poignée course", which settles the variant question the 2026-10-05 pass left open; 88 -> 90 linked. The tandems' brake row 845 was retitled "MAFAC Cyclo-Tandem" (1976-1979) in the same run.

- Handlebars (2026-10-10, after the ATAX / Guidons Philippe 1982 catalogue,
  data_source 157): 24 bar specs linked by bend name via overrides —
  Course / Course type / Course, dural / Dural course / Steel course / Atax
  course, dural -> 2901 Philippe Franco Belge 354; Helvetia type variants ->
  8502 Philippe Helvetia 303 / 304; Randonneur bend -> 8500 Philippe
  Randonneur 355. Only PX 10 C names ATAX; the others assume Peugeot's
  unbranded French bends are the Philippe ones. Tandems' "Course front,
  Tessinois rear" left unlinked.

## 1970 Peugeot — `1970_peugeot_spec.csv` (4 bikes, 57 specs, 12 linked)

- Source: https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1970.html
  ("Catalogues Peugeot 1970 labibleduvelo (1)-(4).jpg", 714 px; no larger
  size is served). Dutch-market edition (prices in guilders, "PEUGEOT '70"
  cover); only four pages scanned: cover, accessories, the PA 10 E /
  PA 10 EH / P 10 spread and the PX 10 page. The page's "Bibibike.jpg" is
  the blog's YouTube banner, not catalogue. Translated from Dutch by hand.
- Bikes: PX 10 (Reynolds 531, f. 650), PA 10 E (Peugeot tubing, Nervex
  lugs, f. 348), PA 10 EH ("PA 10 E without gears": derailleurs None,
  single speed, f. 311), P 10 (f. 289). All white, 56 / 58 / 60 cm, racing
  pedals, toe clips and straps, bell and pump; prices in Extras.
- Overrides: FD 'simplex criterium' -> 2583 Prestige Criterium AV 223
  (1964-75; no other Criterium front before the 1977 LJ A200); crank
  'stronglight competition 45 52t' -> 1902 Stronglight 63 Super
  Competition; Brakes 'mafac racer' -> 838; freewheel 'cyclo competition
  5 speed 14 21t' -> 2088 Cyclo Competition 64 (5 speed). Headsets
  'stronglight competition' changed 3124 (V4 earlier, 1950-60) -> 3125
  (V4 later, 1960-80); see motobecane.md for the one-off re-link.
- Kept: 'brooks professional' -> 5303 Brooks Team Professional (velobase
  dates it 2000; the same saddle line under its later name, no 1970s
  plain Professional row; shared with 11 Raleigh / Falcon / Motobecane
  bikes).
- Left unlinked: Mafac Course brakes (no row), Altenburger Synchron (two
  logo variants), Simplex Competition 46/50 chainrings (Chainrings
  category, not reachable from Crankset), generic alloy / tubular cells.

## 1971 Peugeot — `1971_peugeot_spec.csv` (11 bikes, 134 specs, 22 linked)

- Source: https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1971.html
  (12 pages "catalogues cycles Peugeot 1971 labibleduvelo (1)-(12).jpg",
  1415 px, PeugeotShow.com scans). Dutch-market "Peugeot Fietsen" price
  list, Cycles Peugeot Nederland NV, Haarlem (dealer stamp Epi Kuiper,
  Winschoten); prices in guilders incl. 14% BTW. Translated by hand.
- Full range transcribed (26 models, backed up in the scratchpad as
  1971_peugeot_spec.with-children.csv); at the user's request the 15
  children's and folding / town models were dropped before loading, as
  with 1979: P 8 EH (P 8 E without gears, 54 cm, "for about 12 years"),
  G 50 C / CD / E, G 45 C, G 40, F 50 E, F 45, F 40, RML, DA 22 E,
  RA 22 E, DA 40 E (Torpedo Duomatic), RA 40 E, PC.
- Loaded: Racing PA 10 E (now 52-60 cm, f. 368), PA 10 S (PA 10 E with
  a Stronglight BB and 45/52 chainset, f. 399), P 10 (f. 299), PX 10
  (f. 688); Sports PX 8 (Mafac Racer, Simplex hubs, stainless mudguards,
  36/50 mountain option), P 8 E, PE 41 (5-speed), PE 22 (single speed),
  PE 40 (F&S 3-speed); Ladies Sports PE 25 (3-speed derailleur option
  f. 249 noted), PE 45 (F&S 3-speed). Racing specs repeat 1970.
- Generator: LABEL_TO_CATEGORY 'hub' / 'hubs' now also match Geared
  Hubs (no other catalogue changed); new 'Geared Hubs' overrides
  'fichtel & sachs 3 speed' -> 2694 F&S 415 (caliper-braked bikes, so not
  the 515 coaster) and 'fichtel & sachs torpedo duomatic' -> 2700
  (Duomatic 102 & 101; only the dropped DA / RA 40 E used it). Nulls:
  Handlebars 'touring bend' (was GB Touring Bend), Pedals 'rubber block'
  (Roger Piel), Cranksets 'stronglight 45 52t' (1950 Stronglight 45).
  PX 10 crank override (Stronglight 63) extended to 1971.
- Left unlinked: Altenburger Synchron, Mafac Course, generic alloy /
  leather / tubular cells.

## 1972 Peugeot — `1972_peugeot_spec.csv` (11 bikes, 139 specs, 22 linked)

- Source: https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1972.html
  (11 PeugeotShow scans, 7 GIF + 4 JPG). Dutch "Peugeot Fietsen '72",
  Cycles Peugeot Nederland (dealer stamp Jos. Nefkens & Zn., Amersfoort).
- Loaded the adult range only (user rule from 1971): Racing PA 10 E
  (54-60 cm, 45/52, f. 398), PR 10 (new: PA 10 E with Reynolds 531 frame,
  Stronglight BB and steel chainset, f. 470; replaces the 1971 PA 10 S),
  P 10 (f. 319), PX 10 (f. 748); Sports PX 8 (45/52, f. 342), P 8 E (45/52,
  f. 273), PE 41 (54 / 57 / 60 cm, f. 257), PE 22, PE 40 (F&S 3-speed,
  cable brakes); Ladies Sports PE 25 (3-speed derailleur option f. 269),
  PE 45. Not loaded: G 50 C / CD, G 45 C, G 40, RML, J 8 (youth, 11-14),
  NJ, DA 22 E / DA 40 E (take-apart), NS 22 / NS 40 / PNS (Nouveau Style
  small-wheel town bikes).
- Generator: Rear Derailleurs 'simplex criterium' ranged — 4644 (1965-70)
  to 1970, 4645 (1971-73) from 1971; the three 1971 rows were re-linked
  4644 -> 4645 with criterium-rear-fix.sql (3 rows). PX 10 Stronglight 63
  crank override extended to 1972.

## 1973 Peugeot — `1973_peugeot_spec.csv` (4 bikes, 60 specs, 14 linked)

- Source: https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1973.html
  (7 images). Mixes two catalogues: the Dutch "Peugeot Fietsen '73"
  (cover + pp. 8-9 only, full specs, kg weights, guilder prices) and two
  pages of the French general catalogue (one line per model: Tourisme HA /
  PL / PRP, Randonneurs HA 50 / P 50 / PL 50 / PX 50 L, Sport HA 8 / P 8 /
  PL 8 / PX 8 L, Course PN 10 / P 10 / PA 10 L / PR 10 L / PX 10 L,
  Week-end, Nouveau Style, Jeunes gens, Juniors). Only the four Dutch
  racing bikes were loaded; the French index has no component specs and
  its P 10 would collide with the Dutch one.
- Bikes: P 10 (Bocama lugs, Prestige, Normandy high flange, 11.5 kg,
  f. 349), PA 10 E (Prestige front / Criterium rear, Stronglight steel
  cottered, Mafac Racer, f. 439), PR 10 (orange, Reynolds 531 / Nervex,
  Stronglight 49 D 45/53, 10.8 kg, f. 529), PX 10 (Simplex Super
  Competition / Super Criterium, Stronglight 93, Normandy Super
  Competition, Mavic Monthlery, Mafac Racer Professional, Brooks
  Professional or Ideale 90, 10.2 kg, f. 828).
- Overrides: Hubs 'normandy high flange simplex quick release' -> 3391
  (1960-80); Cranksets 'stronglight 49 d 45 53t' -> 1895 (as 1975
  Motobecane / 1979 Peugeot). Matcher: Stronglight 93 -> 1904, Mavic
  Monthlery -> 5093 (existing override).
- Left unlinked: Super Competition / Super Criterium, Mafac Racer
  Professional, Altenburger Synchron, Normandy Super Competition hubs,
  the either/or saddle.
