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

## 1974 Peugeot — `1974_peugeot_spec.csv` (6 bikes, 86 specs, 31 linked)

- Source: https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1974.html
  (12 images, loaded 2026-10-19). Mixes two catalogues, as 1973: the Dutch
  "Peugeot Modellen '74" (8 scans: cover, pp. 10-14, 18, 19; pp. 15-17 are not
  on the blog) with full specs, and 4 scans of the French general catalogue
  (bikeboompeugeot.com watermark) with one-line blurbs and no components.
- Dutch specs: P 10, PA 10 E (same page as P 10: the left box lists its extras,
  the right box is P 10's spec, as 1973), PR 10, PX 10 LE, PA 60 and PX 60
  (gentleman / gentleman luxe, loaded as Cyclotouring). No prices printed.
- French blurbs only: Sports HA 8, P 8, PL 8, PX 8 L were loaded on
  2026-10-19 as sparse rows (16 specs, 2 Mafac Racer links) and removed the
  same day at the user's request (bike_ids 439-442 deleted; rows are gone from
  the CSV, so a regenerate won't bring them back). Blurbs, if wanted again:
  HA 8 3-speed, side-pull, 700C; P 8 4 or 8-speed, rear carrier; PL 8 5 or
  10-speed, Mafac Racer, stainless fenders; PX 8 L 10-speed, Mafac Racer,
  dural large-flange QR hubs, stainless fenders. The French PX 60 text says
  Simplex Super Competition derailleur; the Dutch page says Super LJ and was
  kept. PA 60 / PX 60 kept the French wheel, seatpost and stem details in
  Extras.
- Not loaded: NSL 22 / NSL 40 / PNSL 22 (Nouveau Style town and folding,
  Dutch pp. 10-11) and the rest of the French index (Sports above, Randonneur HA 50 / P 50 /
  PL 50 / PX 50 L, Tourisme HA / PL / PRP, Course PN 10 / P 10 / PA 10 L /
  PR 10 L / PX 10 L, Week-end, Nouveau Style, Jeunes gens, Juniors). The
  Randonneur section is the obvious next candidate.
- Overrides added: Rear 'simplex criterium' 4645 range extended 1971-73 ->
  1971-74; Rear 'simplex super lj' -> 4650 SLJ5000 (1971-78; 4649 SX660 is
  undated); Front 'simplex super competition' -> 8794 (1971-75; also
  back-fills the 1973 PX 10 once that CSV is reloaded); Hubs 'normandy luxe
  competition quick release' -> 3389 (red label 1970-80; flange size not
  stated); Cranksets 49 D -> 1895 (as 1973) and Stronglight 99 -> 1906 (base
  row; "nieuwste model", drilled or plain not stated); Pedals Lyotard 45 CA
  -> 3811.
- CSV spellings: Ideale 2001 and Mavic Monthlery written without accents so
  the matcher and the existing 'mavic monthlery' -> 5093 override apply (that
  row is 1980-91, kept for consistency with 1973).
- Left unlinked: Mafac Competition (825-827) and Altenburger Synchron (511 /
  512) variants, Maillard 700 hub (3393 / 3394 flange not stated), Stronglight
  Competition 53 crank (no row), Super Champion rim, bare Philippe bars,
  Wolber Transalpino tyre, Simplex Competition seatpost.
- 1973 reloaded 2026-10-19 to back-fill the PX 10 front Super Competition
  link (1973 now 60 specs, 15 linked; no other changes).

## 1975 Peugeot — `1975_peugeot_spec.csv` (9 bikes, 132 specs, 42 linked)

- Source: https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1975.html
  (20 PeugeotShow scans at 1600 px, "catalogues cycles peugeot 1975 (1)-(20).jpg",
  loaded 2026-10-20; the post also shows 12 sidebar images named 1.jpg-13.jpg that are
  not catalogue). Dutch "Peugeot Modellen '75", Cycles Peugeot Nederland N.V.,
  Veenendaal; unlike 1973 / 1974 there are no French pages, so the whole range has full
  specs, kg weights and frame heights; no prices printed. The blog order is shuffled
  (printed pp. 1-15 plus covers; p. 12 is a photo page). Country NL
  (`CATALOGUE_COUNTRY` `1975|peugeot`); the 1971-74 editions are FR by the user's call.
- Loaded (adult range, as 1971-74): Racing P 10 (Bocama lugs, 46/50T, f. 16-21T),
  PR 10 (Reynolds 531, Stronglight 49 D, 11 kg), PX 10 LE (9.9 kg, Super LJ, Competition 93
  crank, Maillard 700, Wolber Transalpino, Mavic Monthlery, Mafac Competition, Lyotard 45 CA);
  Cyclotouring PA 60 (Super Competition / Criterium, Dural 49D 40/50T, 13 kg) and PX 60
  (Reynolds 531, Super LJ, Competition 99, Philippe Dural, 10.7 kg); Sports PX 8, P 8 E,
  PL 8 (5-speed, rear derailleur only) and UO 8 (new: 15-speed trim bike, 36/45/52T x
  14-28T, 13.8 kg, 27 x 1 1/4). PA 60 tyre size read as 1 1/8 as in 1974 (the scan is
  ambiguous). The catalogue's "spieloos" after the chainring sizes (Dutch for play-free /
  pinless) was not carried over.
- Not loaded: NSL 22 / PNSL 22 (Nouveau Style family and folding), G 50 CD / G 50 C /
  G 46 C / G 42 / J 8 (children's and youth), PE 41 / PE 40 / PE 22 and PE 25 V / PE 25 /
  PE 46 / PE 45 (town models, the PE series is excluded as in 1971 / 1972), UE 18 (ladies'
  10-speed sports with fenders, chain guard and sports bars: borderline, held out pending
  the user's call; p. 11 of the scans, Simplex Prestige, Normandy high-flange hubs,
  Mafac Racer, 40/50T x 14-28T, 16.0 kg, Schrader valves).
- Overrides: Rear Derailleurs 'simplex criterium' 4645 range 1971-74 -> 1971-75;
  Brakes 'altenburger synchron' 511 range 1970-74 -> 1970-75 (back-fills 2 specs on this
  catalogue); Cranksets 'stronglight 49 d light alloy 45 52t' and 'stronglight dural 49d
  40 50t' -> 1895 (as 1974), 'stronglight competition 93 light alloy 45 52t' -> 1904 (as the
  1973 PX 10), 'stronglight competition 99 40 50t' -> 1906 (as the 1974 PX 60); Tyres
  '27 x 1 1 4' -> null (the bare size otherwise matched 6786 Continental Cyclocross 27 x 1
  1/4 by substring, the only place it happened). The Lyotard 45 CA pedals are written as in
  1974 so the existing 3811 override applies (reflectors dropped from the text).
- Rear 'simplex prestige' -> 4583 (row dated 1971-74) and front -> 2583 (1964-75) are the
  same picks as 1974 and one year outside 4583's range.
- Left unlinked: Mafac Competition brakes (825-827 variants), bare Philippe bars, Simplex
  Competition seatpost, Maillard 700 hubs (3393 / 3394 flange not stated), Wolber
  Transalpino (1974 only in the DB's Wolber rows), generic frame / saddle / fender cells.
- Regression: every other catalogue's link count is unchanged. The comparison also showed
  two pre-existing drifts that the committed generator reproduces: 1974 Falcon generates
  27 linked against 25 in the DB, and 1990 Bianchi 189 against 191 (one-off SQL fixes the
  generator does not know about); 1984 / 1989 De Rosa are labelled "Derosa" in the file name
  but "De Rosa" in the DB, so a label-name comparison must handle that.

## 1976 Peugeot — `1976_peugeot_spec.csv` (9 bikes, 131 specs, 38 linked)

- Source: https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1976.html
  (43 images, loaded 2026-10-20). Mixes two catalogues, as 1973 / 1974: the Dutch
  "Peugeot '76" (cover, pp. 2-15 and back cover, 1045 px PeugeotShow scans; plus the
  1 January 1976 Cycles Peugeot Nederland price list, dealer stamp J.W. v.d. Kieft,
  Barneveld) with full specs, kg weights and frame heights; and the French
  "Cyclotourisme et course" leaflet printed 4.76 (bikeboompeugeot.com watermark, 8
  scans: cover, PA 60 / PX 60, PY 60 P / PA 55 / PA 65, two photo pages, courses PN 10 -
  PY 10, PY 10 P with a development table, back). The other images are the poster, a
  French text page and cropped text snippets of the same leaflet. Country NL
  (`CATALOGUE_COUNTRY` `1976|peugeot`).
- Loaded (adult range, as 1971-75): Racing P 10 (40/50T, f. 14-21T, 11.5 kg), PR 10
  (Reynolds 531, Stronglight 49 D 42/52T, 11 kg), PY 10 (new: made-to-measure 12-speed
  "course professionnel", f. 2,090; the Dutch back cover is prose only, so its components
  come from the French leaflet's PY 10 P: Simplex Super LJ, Mafac 2000, Stronglight dural
  38-54T, Maillard 700 pedals, Ideale 2002 or leather, Simplex dural seatpost, 6-speed
  13-28T); Cyclotouring PA 60 and PX 60 (Ideale 80, Super Competition front, Criterium
  rear, 40/50T x 14-26T); Sports PX 8, P 8 E (40/50T, 14-26T), PL 8 (5-speed), UO 8.
- Not loaded: NSL 22 / PNSL 22; G 42 / G 46 C / G 50 C / G 50 CD / J 8 (children's);
  PE 40 / PE 41 / PE 25 / PE 45 / PE 46 (town); UE 18 (ladies' 10-speed, borderline, held
  out as in 1975, spec unchanged: Simplex Prestige, 40/50T x 14-28T, Normandy high-flange,
  Mafac Racer, 16 kg); the French-only PN 10, PA 10 L, PR 10 L, PX 10 L, PY 60 P, PA 55,
  PA 65 (blurbs that duplicate the Dutch names or are ladies' models).
- Overrides: Front 'simplex super competition' 8794 range -> 1971-76; Rear 'simplex
  criterium' 4645 -> 1971-76; Brakes 'altenburger synchron' 511 -> 1970-76; Cranksets
  'stronglight 49 d light alloy 42 52t' -> 1895; Saddles 'ideale 2002 or treated leather'
  -> null (either / or, as the 1973 PX 10 saddle); Brakes 'mafac 2000 anodised' -> 836 MAFAC
  2000 later version (1970-79; 835 and 837 are 1970-only variants).
- Left unlinked: Simplex Competition and Simplex dural seatposts, Maillard 700 pedals
  (four colour variants), Philippe Dural bars, generic frame / saddle / fender cells.
- Regression: all 46 other catalogues' link counts unchanged (Falcon 1974 and Bianchi 1990
  drift as noted under 1975).

## 1977 Peugeot (DE) — `1977_peugeot_de_spec.csv` (11 bikes, 210 specs, 39 linked)

- Source: https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1977.html (43
  images, loaded 2026-10-20). The post holds three catalogues: (1) the German-market
  "Peugeot Rennräder" (cover B. Thevenet, Tour winner '75 and '77, and Gregor Braun, 1976
  Sportler des Jahres; 8 pages at 740 px) with full component specs for the racing and
  training range, which is what was loaded; (2) the French home-market "Présence" brochure
  (bikeboompeugeot.com, ~25 images: PRN 10 with Michelin Elan TS, tourisme / randonneur /
  gentlemen / ladies / course one-line blurbs, PY 10 and PY 10 P with specs, PY 60 P, the
  French back page) which was NOT loaded (blurbs only; the only specs duplicate the German
  PY 10/CP); (3) the French "Tarif Bicyclettes" no. 327, 1 September 1977 (price list with
  colour codes: P 10 853 F, PR 10 L 1,345 F, PX 10 L 2,119 F, PY 10 C 2,907 F, PY 60 P
  3,714 F, ...), not loaded. Country DE through the filename token, label "1977 Peugeot
  (DE) catalogue" (the 1977 French brochure, if ever loaded, takes plain `1977_peugeot_spec.csv`
  with an `FR` entry in `CATALOGUE_COUNTRY`).
- Loaded (racing and training, as the German names give them): PY 10/CP "Prestige Peugeot"
  (12-speed, Reynolds 531 5/10, Simplex LJ 4000 CP / SLJA 522, Stronglight 105 Bis, D6
  titanium headset, Maillard 700 6-speed, 9-9.5 kg), PX 10/LE and PXN 10/E (Reynolds 531
  7/10, LJ 1000 T, Lyotard 45 CA, 10 kg), PS 10/E and PSN 10/E (Super Luxe, 3 x Reynolds, SX
  410 T, 10.5 kg), PR 10/LE (Luxe), PA 10/LE (Peugeot Allege, SX 810 T, Mafac-S), PN 10/LE
  (Mixed cranks, SX 100 T, PIVO stem), PRN 10/E and PRN 13/E (15-speed, 32/42/52T),
  PR 60/L (Gentlemen Cyclotouring, Bluemels mudguards and rack). The N / E variants carry
  the parent spec with 700C training rims (Rigida or Mavic) and Michelin Elan TS 700 x 25.
  A new Stem column was used (the earlier Peugeot CSVs had none).
- Not loaded: PR 65 (ladies' 10-speed, Reynolds double-tube frame, 38/48T, fenders and rack:
  borderline, held out as UE 18 was; pp. 36 of the scans, 53 and 57 cm, 11.5 kg, silver,
  bronze, matt black); the Radtouristik models mentioned on the PR 10/LE page (PX 8/E-D/SP,
  P 60, P 60/L, PA 55, P 65, P 65/L) which are in a separate German brochure not on the post.
- Overrides: Rear 'simplex lj 4000 cp' -> 4602 (1975-77), 'simplex lj 1000 t' -> 4600,
  'simplex sx 810 t' -> 4617 (DB title "SX810 T" has no space so the matcher misses it);
  Front 'simplex slja 522' -> 7283 (SLJ A522, dated 1978-84, one year early, the only row);
  Headsets 'stronglight d 6 titanium' -> 3116; Brakes 'mafac racer with course levers' -> 838;
  Pedals 'lyotard 45 ca dural with christophe toe clips and lapize toe straps' -> 3811;
  null: Pedals 'lyotard 36 rcm ...' (the matcher found the 1950-70 "Lyotard 36" row, a
  different model and era), Rims 'mavic sport or pellet record light alloy', Tyres
  'peugeot professionnel or clement criterium tubulars' (either / or).
- CSV edits: the PX 10/LE and PXN 10/E either/or freewheel ("Maillard Normandy ... or Cyclo
  Competition ...") was split so only the Maillard text is the Freewheel value and the Cyclo
  Competition alternative sits in Extras (otherwise it linked to 2086 Cyclo Competition).
- Left unlinked: Mafac Competition (825-827 variants), Stronglight 49 / TS / 105 cranks (no
  matching rows), Philippe Professionnel bars and Philippe-Peugeot stem, Maillard 700 and
  Normandy hubs and freewheels, Laprade 505 / San Marco / Simplex SLJ 4164 seatposts,
  Gourgaud Lightrace headset, Mavic Monthlery or Pellet Super Champion rims, Peugeot
  Trophy / Route tyres.
- Regression: all 47 other catalogues' link counts unchanged (Falcon 1974 and Bianchi 1990
  drift as noted under 1975).

## 1978 Peugeot — `1978_peugeot_spec.csv` (12 bikes, 218 specs, 54 linked)

- Source: https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1978.html (54
  images, loaded 2026-10-20). Three catalogues on one post: (1) the Dutch "Peugeot '78"
  (Cycles Peugeot Nederland; cover "Perfectie op Maat sinds 1882", frame geometry diagram,
  16 spreads of prose specs with component weights in grams, and a comparison table for the
  Race / Gentleman / Lady range) which was loaded; (2) the French "Cycles Peugeot 78" (23
  pages of blurbs for PY 10 C / CP, PX 10 L, PS 10, PR 10 L, PA 10 L, P 10, PN 10 L), not
  loaded; (3) the French "Cycles Peugeot 1978" brochure (cover, PX 8 L "La Balade", mopeds
  such as the 103 SVL, ...), not loaded. Country NL (`CATALOGUE_COUNTRY` `1978|peugeot`).
- Loaded: Racing PA 10 LE / PAN 10 LE (Peugeot Allege 10/10, SX 810 T, Mafac-S, 10.8 kg),
  PS 10 / PSN 10 (Reynolds 531, 49D, SX 410 T, 10.6 kg), PR 10 LE / PRN 10 E (10.7 kg), PX 10
  LE (SLJ A502 / LJ 4000 CP, Maillard 700, Lyotard 65, Simplex SLJ 4160, 10.2 kg), PY 10 EC
  (12-speed, 105 Bis, Laprade 505, S5 headset, 10.1 kg), PY 10 CP (hand-built, Thevenet's
  bike, Reynolds 5/10, Laprade 606, titanium D6, 9.0 kg); Cyclotouring PA 60 (13 kg) and PR 60
  Gentleman (12.9 kg, Bluemels); Tandem TM 8 (mixed, Mafac Cyclo-Tandem, 49D, rear hub drum
  brake). The N / E variants (PAN, PSN, PRN) carry the parent spec with Mavic Module E rims
  and Michelin Elan / Elan TS clinchers. Component weights are summarised under "Weights:" in
  Extras so the component cells stay clean (the first draft had them inline and only 17 of
  218 specs linked; the verbose draft is in the scratchpad as 1978_peugeot_spec.verbose.csv).
- Not loaded: PR 65 Lady (ladies' semi-racer, 38/48T, Reynolds 531, Bluemels, rack: held out
  as borderline, like UE 18 / PR 65 (1977)); the French-only P 10, PN 10 L, PX 10 L, PY 10 C
  (blurbs; the Dutch PX 10 LE and PY 10 EC cover them), PX 8 L and the mopeds.
- Overrides: Front 'simplex slja 502' -> 7281 (1978-81); Rear 'simplex lj 4000 cp' range
  extended with 1978-84 -> 4603; Seat Posts 'laprade 505' -> 5815, 'laprade 606' -> 5816 (both
  1970-79), 'simplex slj 4160' -> 7340 (1978); Hubs 'maillard 700 dural high flange simplex
  quick release' -> 3393 and '... low flange ...' -> 3394 (Professional large / low flange);
  Headsets 'stronglight d6 titanium' -> 3116, 'stronglight v4 competition' -> 3125; Cranksets
  'stronglight 49d 42 52t' -> 1895 (as 1973-77; the DB has no 1970s 49D row); Tyres 'michelin
  elan ts 28 x 1 1/16' -> 8789 (the Elan TS row is dated 1979, one year after this catalogue;
  a judgement); Rims 'rigida chrolux' ranged 1960-70 -> 5158 so the 1978 TM 8 stays unlinked.
- Left unlinked: Mafac Competition (825-827 variants), Mavic Module E (1975 rows only),
  Peugeot Route / Trophy / Professionnel tubulars, Philippe Professionnel and Atax bars,
  Gauthier Rilsan and San Marco saddles, Record du Monde and Pellet rims, Normandy
  Competition hubs, generic cells.
- Regression: all 48 other catalogues' link counts unchanged (Falcon 1974 and Bianchi 1990
  drift as noted under 1975).

## 1980 Peugeot — `1980_peugeot_spec.csv` (FR, data_source 249: 26 bikes, 402 specs, 81 linked) and `1980_peugeot_nl_spec.csv` (NL, data_source 250: 6 bikes, 115 specs, 51 linked)

- Source: https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1980.html (63 images, loaded
  2026-10-22). Three catalogues on the post: (1) the Dutch "Peugeotboek voor totale fietsrecreatie,
  Kollektie 1980" (Cycles Peugeot Nederland b.v., Veenendaal; 38 PeugeotShow scans 840x1200 named
  "catalogues cycles peugeot 1980 labibleduvelo (N).jpg"; pp. 12 (PX 8 M) and 36 are not on the blog);
  (2) the French "Les vélos sport et course, Cycles Peugeot 1980" leaflet (AnyConv.com__1-16.jpg,
  bikeboompeugeot.com, 1000 px landscape panels) with full component specs, unlike the 1973-78 French
  blurbs; (3) "Les vélos enfants et juniors 1980" (AnyConv.com__17-26.jpg), children's, not loaded.
  FR is the plain file (`CATALOGUE_COUNTRY` `1980|peugeot`), NL uses the `_nl` filename token.
- FR loaded: Course PRO 10 (made to measure, Reynolds 5/10, all Spidel, options list in Extras), PY 10 S,
  PX 10 S, PV 10, PK 10, PKN 10, PKN 13, PF 10, PFN 10, PBN 10, PH 10, H 10 Helium; Cyclotourisme PF 60,
  P60M; Sport PX 8 M, PL 8 M-5v, PL 8 M, PH 8 M-5v, PH 8 M, H 8 Helium; Randonneurs PX 50 M, PL 50 M-5v,
  PL 50 M, PH 50 M; tandems TH 8, TM 8. No colours, weights or prices printed. "Même modèle" rows carry
  the parent spec.
- NL loaded: supersport PL 8 M; racing PBN 10, PFN 10, PKN 10, PVN 10, PY 10 LC (Spidel parts), with kg
  weights and colours. PBN 10 / PFN 10 exist in both editions as separate bikes.
- Not loaded (user's call 2026-10-22): ladies' and mixte drop-bar models, held out as UE 18 / PR 65 were:
  NL PX 18 MC / PX 18 M, PK 65 lady (PK65C / PK65T); FR PF 65, P65M, PX 18 M, PL 18 M, PH 18 M. NL PXN 10
  (prose only: 9.9 kg, full Reynolds 531 7/10, pearl white). Town: PE 46 M, PH 41 M, PX 41 M, the
  semi-sport VL 25 M / VL 22 M range. CPX 100-400 BMX; the Super Competition frameset (p. 27).
- Transcription: PVN 10 brakes printed "Mafac 605 side-pull" but the photo shows a Weinmann 605 caliper;
  stored as Weinmann 605, the misprint noted in Extras. PY 10 LC "Mafac side-pull LS2" stored as Spidel
  LS2 ("all parts Spidel"). PL 8 M rear derailleur is not named. PRO 10 Extras shortened under 255.
- Overrides: fronts SJA 102 -> 2573, SJA 103 / "SJ 103" -> 2574, SXA22 -> 2577, Spidel SLJ A522 -> 7283;
  rears Spidel SLJ 5500 CP -> 7309, SX410T -> 4621, SX810T -> 4617, SX 410 GT SP -> 4620; brakes Spidel
  LS2 -> 834 MAFAC LS2, NL Weinmann 605 -> 1133, Weinmann 506 -> 7764, Mafac Competition anodised -> 825;
  Spidel D8 headset -> 3117 (row 1981-83); cranks NL Stronglight 104 -> 1878 (Peugeot logo, 1980; the
  matcher found the 1982 row 8811), 104 Bis -> 1879, 105 Bis -> 1880; bars Atax Franco Italia -> 2897,
  Atax race bend -> 2901; levers drilled Mafac Promotion -> 347 Perfo, Mafac Dural Course -> 357; pedals
  Lyotard 136 race -> 3801, Spidel 700 dural cage -> 3833, Lyotard 36 RCM -> null (as 1977); seatpost
  Simplex SJ4164 -> 5905 Spidel SLJ 4164; Sedissport 108 -> 1402; freewheels Maillard Normandy 5-speed
  -> 8125 (ranged 1979-82), Maillard 700 6-speed -> 2123; hubs NL plain Maillard Normandy Simplex SX ->
  8137 small flange Q/R (flange not stated, photos look small flange: a judgement), Normandy Competition
  -> 3389; tyres '650' -> null (matched Wolber 22 Racing Team 650), Elan TS folding -> 8789; rims 'mavic
  module e' range widened 1975-78 -> 1975-84 (row dates), Module E drilled -> 5087, Super Champion dural
  -> 5176.
- Left unlinked: Peugeot Trophy hubs and tubulars, Gallet 31 / 33 and San Marco luxe saddles, Laprade SR
  seatposts, Nervar 5570 crank, Rigida Chrolux (ranged to 1960-70), Mafac Course 2000 and plain Promotion
  levers, Maillard 700 hubs and pedals, Maillard Normandy 6-speed and wing-nut hubs, generic French cells.
- Regression: all 49 other catalogues' link counts unchanged.

## 1981 Peugeot — `1981_peugeot_spec.csv` (FR, data_source 251: 23 bikes, 349 specs, 59 linked) and `1981_peugeot_ch_spec.csv` (CH, data_source 252: 1 bike, 15 specs, 1 linked)

- Source: https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1981.html (38 images named
  1.jpg-37.jpg and 1981_1.jpg, loaded 2026-10-22). Images 1-15: French "Les vélos sport et course,
  Peugeot 1981" leaflet (bikeboompeugeot.com, dealer stamp Ets Bulle, Dole), with per-model frame text
  (p. 5, plus "common to PRO 10 .. PFN 13": biconical seat stays, Simplex dropouts with screw stops,
  brazed guides / bosses / chain rest, Sedisport chain and 6-speed freewheel, dural rims and pedals) and a
  "Tableau récapitulatif" for the racing range (image 7: cranks, derailleurs, brakes, wheels, bars,
  saddle and post, gearing). 16-31: "Les vélos ville et campagne" and the children's range; 32-37 CPX and
  "Vélos cross" leaflet; none loaded. Image 38: Swiss German one-page "Rennvelos für höchste Ansprüche"
  (Cycles Peugeot DCF-DAC 02.81, printer Schraag, Valdoie): PY 10 S "Professionnel", pearl white, Fr.
  1680, 52-62 cm; loaded as CH at the user's call.
- FR loaded: racing PRO 10, PY 10 S, PX 10 S, PSV 10 (new: Super Vitus), PKN 10, PK 10, PFN 13, PFN 10,
  PF 10, PBN 10, PH 10; cyclotouring PF 60, P 60 M; sports PX 8 M, PL 8 M, PH 8 S, PH 8 M, PH 8 M 5V;
  randonneur PX 50 S, PL 50 M, PH 50 M; tandems TH 8, TM 8. Maillard Helicomatic rear hubs on PKN 10, PK 10,
  PSV 10, PF 10, PFN 10, PFN 13, PBN 10 (image 8).
- Not loaded: ladies' PH 15, PF 65, P 65 M, PX 18 M, PL 18 M, PH 18 M (held out as 1980); town (PX 40 M,
  PH 40 M, PH 22 M, PX 45 M, PH 45 M, PH 25 M, NS 640 / 622 / 540 / 522 ...), children's (M 23 S, Baby,
  CPX 12, CP 14, NJ, NC, RML, J 8 GL, J 8 GL 5, C 50 MDL ... C 32 C), CPX BMX.
- Overrides: Rear 'simplex s 061' -> 4616 Simplex S061 T (1981-90); Cranksets 'stronglight 104 bis 52 x
  42t' -> 1879; Headsets 'spidel d 8' -> 3117 (as 1980); Handlebars 'steel' -> null (PL 50 M matched Nitto
  B125, Steel). Matcher: Helicomatic -> 3387 (dated 1980), Stronglight 99 -> 1906, Weinmann 506 / 605,
  Spidel LS2 -> 834 via the 1980 overrides.
- Left unlinked: "Ensemble SLJ" derailleurs on PRO 10 / PY 10 S (no model numbers), bare Simplex SJA / SX,
  Atom 450 pedals (450RA / 450RN rows), Spidel 700 and Maillard 700 pedals, Maillard Trophy hubs, Gallet
  or San Marco saddles, the Swiss PY 10 S generic cells (Simplex Spidel, Spidel Competition side-pull,
  Super Competition tubulars).
- Regression: all 51 other catalogues' link counts unchanged.

## 1982 Peugeot — `1982_peugeot_spec.csv` (FR, data_source 253: 24 bikes, 403 specs, 82 linked) and `1982_peugeot_nl_spec.csv` (NL, data_source 254: 12 bikes, 210 specs, 59 linked)

- Source: https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1982.html (59 images, loaded
  2026-10-22). Images 1-4: French "Gamme Plus" price flyer (prices at 1/3/82; Z 40, Z 45, Z 10 790 F,
  Z 8 870 F, Z 18; one-liners, not loaded at the user's call). Images 5-28: French "Peugeot 1982. Une
  bonne odeur de vélo." (bikeboompeugeot.com; image N = printed page N-4): sport et course pp. 3-8, ville
  et tourisme 9-11, cross 15-17, enfant 18-21, "Tableau récapitulatif des modèles course" pp. 22-23 (frame,
  fork, headset, crank, pedals, freewheel / wheels, Simplex derailleurs, saddle and post, bars, brakes,
  accessories for all 13 racing models). Images 29-59: Dutch "Peugeotboek voor totale fietsrecreatie,
  kollektie 1982" (PeugeotShow; image N = page N-28; Peugeot centenary "Eeuwfeest 100").
- FR loaded: racing PRO 10, PY 10 S, PX 10 DU (new: Vitus 979 Duralinox frame and fork), PX 10 S, PSV 10 S
  (Super Vitus 980), PF 10 S, PFN 10 S, PFN 13, PF 10, PFN 10, PBN 10 S, PH 10 S, P 10; cyclotouring PF 60;
  sports PX 8 S, PH 8 S, PH 8 M, PH 8M 5V, P 8; randonneur PX 50 S, PL 50 M, PH 50 M; tandems TM 8, TH 8.
  Racing rows = p. 4 common features + frame text + table row.
- NL loaded: semi-race PX 8 M (15.0 kg, 54-66 cm), PL 8 M; race PH 12 (new aerodynamic: Sakae Custom, SX
  660 / SJA 222 CX, CLB Competition, Ofmega pedals, Mavic Module E, 10.8 kg), PBN 10, PFN 10, PKN 10, PVN
  10, PXN 10 (full spec this year, 9.9 kg); lugless ("Peugeot Specials '82") H 10, PH 10, PH 10 S
  (Helicomatic), PH 8 M.
- Not loaded: ladies' / mixte FR PH 15, PX 18 S, PH 18 S, P 18, PF 65; NL PX 18 MC / PX 18 M, PH 18 MC,
  PH 15. Town FR VX 45 MF, VX 40 MF, VL 25 M / VL 45 M / VL 40 M, PRP 20 M, PNS 55 S, NS 640 / NS 540, PX
  45 S, PH 45 M, PH 35 S, P 25, PH 40 M, PH 22 M; NL PH 46 M, PH 41 M, PX 18 MF, PX 41 MF (also the
  lugless PH 41 M / PH 46 M) and the "Tradition" sport range (pp. 8-11). Cross, children's, BMX, clothing.
- Transcription: NL PVN 10 / PXN 10 brakes printed "Mafac 605" again; no close-up this year, so stored as
  "605 side-pull" (unlinked) with the misprint noted. FR PY 10 S headset "Spidel 57" read as S7 and "SLJ
  550 CP" as the SLJ 5500 CP.
- Overrides: Rear S061 TSP -> 4616, SX 610 T / TSP -> 4631, SX 810 TSP and "810T" -> 4617, S001T -> 4647,
  Spidel SLJ 550 CP -> 7309; 'simplex prestige' rear ranged to <= 1979 (4583 is 1971-74; the NL PL 8 M
  stays unlinked). Front SJA 222 -> 2575, SJA 223 -> 2576, SJA 222 CX -> 2575, Spidel SLJA 422 -> 7263.
  Brakes Spidel LSX -> 823 MAFAC LSX, Weinmann 500 -> 8636 base row, bare Weinmann 605 -> 8642 (1978-84),
  Carrera 400 -> 1168; levers Weinmann 144-1 -> 7769, Carrera 400 -> 493 (No. 185). Cranks Spidel 107 ->
  1883 Stronglight 107; 'stronglight 104 anodised 45 x 52t 170 mm' ranged 1980-81 -> 1878, 1982 -> 8811.
  Headset 'spidel 57' -> 3123. Freewheels '600 sh 13 21' / '14 24' -> 8131 (600 SH 6-speed compact),
  '5 speed' -> null (matched Shimano F200). Handlebars 'race' -> null (matched Modolo Q-Race). Hubs
  'normandy luxe competition' was already a 1974 Motobecane override (3388) further down the Hubs block;
  a second copy of the key silently replaced it, so the two were merged into one ranged entry (to 1979
  -> 3388, from 1980 -> 3389 red label).
- Left unlinked: Atom 500 RA, Sakae SP 150, Spidel 700 RA, Lyotard 77R pedals; Lightrace headsets; Reydel
  Profil, Selle Italia CX, Royal 463/2 saddles; Solida 5270A, Sakae Custom cranks; Maillard Helicomatic
  and 6-speed Normandy freewheels; Maillard 700 SH hubs; SX 660 (only the undated SLJ SX660 row); CLB
  Competition (1950-70 rows), Ofmega pedals; Mafac Promotion levers (variants).
- Regression: all 53 other catalogues' link counts unchanged. A duplicate-key scan of COMPONENT_OVERRIDES
  found three older duplicates, left alone: Shifters 'suntour accushift plus x press' and 'suntour superbe
  pro', Pedals 'sr sp12 platform alloy'.

## 1983 Peugeot — `1983_peugeot_spec.csv` (CA, data_source 255: 9 bikes, 109 specs, 32 linked) and `1983_peugeot_nl_spec.csv` (NL, data_source 256: 15 bikes, 126 specs, 19 linked)

- Source: https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1983.html (33 PeugeotShow scans,
  loaded 2026-10-22). Images 1-10: bilingual English / French "Peugeot - Pleasure that lasts / Un plaisir
  qui dure", Velo Sport (1982) Inc., St-Georges-de-Beauce, Québec ("Made in Canada"; Peugeot under licence),
  one model per half page with a full component list and catalogue number (no. 401-490). Country CA, plain
  file name. Images 11-33: Dutch "Frans en vrij fietsen met Peugeot, kollektie 1983" (pp. 1-24): prose blurbs
  plus a small per-model table (frame sizes, colour, weight, freewheel, crankset); much thinner than the
  1980-82 Peugeotboek, loaded at the user's call because it is the only 1983 source for PY 10 FC, PSVN 10,
  PX 10 Du and P 12 E.
- CA loaded: PY 14 Professionnel (no. 448, 14-speed, Stronglight 107, SLJ 5500), PX 14 Super Competition
  (442), PB 12 Course (433, Reynolds 501), PK 12 Competition (437), PH 9 Challenge (429, Carbolite lugless),
  UO 12 Sprint (427), UO 9 Super Sport (408), UO 5 Club (401, Huret), PA 60 Nomade (474, 18-speed touring).
- NL loaded: semi-race PH 8 (lugless, Technyl chainrings), PL 8 M, PX 8 M; race P 10 S (new), H 10, P 12 E
  (new aerodynamic), PH 12, PBN 10, PKN 10, PFN 10, PSVN 10 (new, Super Vitus 980, Helicomatic, 9.9 kg), PVN
  10, PXN 10, PX 10 Du (new, Vitus Duralinox 979, 8.6 kg, to order), PY 10 FC (new, carbon fibre main tubes
  with Duralinox stays / fork / head tube, Stronglight 107 Ti, Ofmega Sintesi, Sedis Nickelée, 7.6 kg).
- Not loaded: CA PBL 12 (staggered), UO 16C and UE 19 (mixte), C 46 Sprint Junior (24 in), VX 40 Classique
  (Sturmey 3-speed), TX 30 Tourisme and UE 6 Sport (flat bars). NL PH 15, PH 18 C, PX 18 M / PX 18 MC
  (ladies'), the Tradition V 40/45 FC-RVS, VL 40/45 FC, V 22/25 M and PH 46 M / PH 41 M (town), CPX BMX.
- Overrides: Canadian derailleur suffixes read as the standard models: Rear 'simplex slj 5500 cp sp' ->
  7309, 'lj 4000 cp sp' -> 4603 (version 2, 1978-84), 'lj 1000 cp sp' -> 4646 (row 1975-81), 'sx 810 t p'
  -> 4617 (row 1977-81), 'sx 410 gt p' -> 4620; Front 'simplex sja 422' -> 7263 SLJ A422, 'sx a 32' ->
  2578 (row 1984-89, the only one), 'sx a 52' -> 2580; Brakes Weinmann 506 QR -> 7764, 605 QR -> 8642;
  Pedals 'lyotard 136r with reflectors' -> 3801; Cranksets Stronglight 104 bis (CA and NL wordings) -> 1879.
- Left unlinked: Maillard 700 / Trophy / alloy hubs, Professional 225 g and Challenge tubulars, Maillard 700
  7-speed freewheels, Huret Club (rows end 1980; 1984 Sachs Huret), Stronglight / Solida 5470 cranks,
  Maillard 700RN and 600 pedals, Lyotard 77R, Sedis Nickelée, CLB aero brakes, generic Dutch cells.
- Regression: all 55 other catalogues' link counts unchanged.

## 1984 Peugeot — `1984_peugeot_spec.csv` (FR, data_source 257: 25 bikes, 402 specs, 56 linked) and `1984_peugeot_gb_spec.csv` (GB, data_source 258: 11 bikes, 200 specs, 45 linked)

- Source: https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1984.html (40 images, loaded
  2026-10-22). Images 1-30: French "Peugeot Bicyclettes 1984, A la rencontre de la liberté"
  (bikeboompeugeot.com; image N = printed page N; dealer stamp 11/83, prices pencilled in). Racing pp. 4-7
  give frame / sizes and refer to the "Recapitulation table of racing models" pp. 22-23, printed in English
  (frame, fork, steering, crank, pedals, freewheel / wheels, derailleurs, post and saddle, bars, brakes,
  accessories; "6S SH" = 6-speed Maillard Helicomatic). Sport / touring / randonneur pp. 8-11 are prose.
  Images 31-40: UK "Cycles Peugeot 1984" brochure (bikeboompeugeot.com) with a "Detailed specification"
  table (image 39) for 11 models plus colour codes and sizes on the model spreads; GB via the filename token.
- FR loaded: racing PRO 10, PY 10 LS, PZ 10 (new: Campagnolo Super Record build, Reynolds 531 7/10), PY 10
  FC, PX 10 DU, PX 10 LS, PSV 10 L, PGN 10, PG 10 (tubular PGN 10), PH 12, PH 13, PH 11 (new: Peugeot BBT
  brazed butted tubing), PH 10 LS, PH 10 M, P 10 S, P 10 L; cyclotouring PCA 10 (Reynolds 501, Huret
  Duopar, CLB cantilevers, racks); sports PH 60 C (cycle computer in the stem), PX 8 L, PH 8 S, PH 8 M, P 8 L;
  randonneur PX 50 S, PL 50 M, PH 50 M.
- GB loaded: PY 10 FC 'Fibre de Carbone', PX 10 DU '979', PY 10 LS Professional, PS 10 L Roubaix (= the
  French PSV 10 L), PGN 10 US Routier (new, Reynolds 501 'Cromalloy M'), PGN 10 Paris-Nice, PH 11 Avance, PH
  10 LS Competition, PH 10 L Criterium, MB 1 Urban Express and MB 2 Canyon Express (Peugeot's first mountain
  bikes, chrome-moly TIG, SunTour, SR, Tange, Araya / Sumo).
- Not loaded: ladies' / mixte FR PH 15 T, PH 65, PCA 15, PH 18 S / PH 18 M, P 18 L, PX 18 L; GB VH 35 S, PH 18
  L, PH 15 C, P 15 C. Town FR VX 40 FC, VX 45 FC, VL 45 M, VL 40 M, V 25, PRP 20 M, PH 35 S, PX 45 S, PH 45 M,
  PH 40 M, P 45, P 25. Children's / cross / CPX BMX; GB C 50 CX, P 20, P 30. Track framesets CFP 11 / CFP 13
  (Columbus). GB P 10 L Premiere, P 10 S Talisman 12, PH 11 L, P 10 T (blurbs, not in the spec table).
- Overrides: run-together model numbers — Front 'simplex sja222' / 'sja222cx' -> 2575, 'slja422' -> 7263,
  'sxa32' -> 2578, 'sxa33' -> 7312; Rear 'sx610tsp' -> 4631, 'sx810tsp' -> 4617, 'sx061tsp' -> 4616,
  'sx410 gtsp' -> 4620, 'slj5500cp' -> 7309, 'slj6600tsp' -> 4655 SLJ6600 T, GB misprints 'slga550cp' ->
  7309 and 'slj660tsp' -> 4655; 'campagnolo 1020/a' -> 4126 Nuovo Record v4 (1982-84). Headsets
  'stronglight a9' -> 3112 (France locknut, 1984-85), 'stronglight b10' -> 3114. Rims 'super champion
  model 58 23 mm' -> 5178.
- Bare "Campagnolo" (PZ 10 headset and seat post): the existing overrides (headset 2959 for 1974
  Motobecane, post 5749 to 1985) now carry a `{ bike: 'PZ 10', id: null }` entry first, so only that
  Super Record bike is blocked. A year-based block was tried first and cost the 1983 Bianchi Campione del
  Mondo its seat-post link.
- Left unlinked: Campagnolo 1052/1 front (rows 1960-77), Peyrard / Nervar 3020 and Solida 5171 / 5271 / 5371
  cranks, Maillard Palette CX 500 / 550, CX650, CX700, 700 pedals, Helicomatic freewheels, Atom and Maillard
  hubs, Lightrace headsets, Turbo / Tenor / Viscount Terra saddles, CLB brakes, Huret Duopar (variants), the
  MB parts (SunTour, SR, Tange, Araya, Sumo, VP), generic cells.
- Regression: all 57 other catalogues' link counts unchanged.

### Peugeot 1974-78 unlinked-spec pass (2026-10-21)

Override-only pass, back-fill of NULL `component_id`; no new rows. Linked: Mafac Competition -> 825 (range 1971-80), Simplex LJA302 -> 2567, Philippe Professionnel -> 2895, Franco-Italia (incl. Atax-branded) -> 2897, Lyotard 136 Race -> 3801, Maillard 700 hubs -> 3393 / 3394, Normandy Sport -> 3390, Normandy -> 3391, Normandy Competition high flange -> 3384 (row has no years), Stronglight 105 -> 1880, 49 five-hole -> 1894, 49 triple -> 1893, 49D 40/50T -> 1895, Mavic Module E -> 5087 (row dated 1975), Maillard Normandy 5-speed freewheels 1977-78 -> 7240 (row dated 1978; 1979-82 is 8125). Same strings in the 1974 and 1975 catalogues picked up the Mafac and Maillard 700 hub links too.
Left unlinked on purpose or for lack of a DB row: Maillard 700 freewheels (nearest row 1980-82) and pedals (four variants), Mavic Monthlery, Pellet Record du Monde (only a 1970 Super Champion row), San Marco Gilux race, Gauthier Rilsan, Sedis 1977-78 chains (rows start 1979), Wolber Transalpino, Peugeot-branded tubulars, Simplex Super Competition front and 1978 Criterium rear, Stronglight TS cranks, Atax stems (rows 1980-82).
Peugeot linked after the pass: 1974 35/86, 1975 44/132, 1976 38/131, 1977 DE 71/210, 1978 99/218.

### Mavic rim links (2026-10-21)
"Mavic Monthlery, drilled for tubulars" (3 specs) -> 5093 Montlhéry Route, range 1970-80, as the 1973-75 picks (the Mavic catalogues list Route, Pro and Légère and the Peugeot text does not say which: a judgement). Peugeot 1978 now 102 / 218 linked. Also linked from other catalogues in the same pass: 1981 Bianchi "Mavic special sport" -> 5109, 1986 Raleigh "Mavic MA 40, hard anodized" -> 5077, 1987 Raleigh "Mavic M3CD ..." -> 5048. Left unlinked: Raleigh "Mavic Sprint" (no such row) and "Mavic Professional" (Montlhéry Pro 5092 or the 1970 Championnat du Monde Professionnel 5055), brand-only "Mavic" rims.

### Helicomatic freewheel links (2026-10-22)
The 1982-84 Peugeot catalogues print "Maillard Helicomatic ..." where the DB rows (from the 1982 Maillard "Freewheels" catalogue, data_source 103) are titled "600 SH" / "700 SH", so the matcher never connected them. Freewheels overrides, ranged 1980-84 (the rows are dated 1982 only): Helicomatic 6-speed wordings, "6-speed SH 13-21" and the Helicomatic cassette -> 8131 600 SH (6 speed compact), the Maillard catalogue's "original equipment model"; Helicomatic 5-speed -> 8130; "Maillard 700 SH 13-14-15-17-19-21" (1983 NL PX 10 Du) -> 8132. The two 1984 Raleigh Helicomatic Gold / Silver cells took 8131 too. Back-fill only: 1982 FR 82 -> 84, 1982 NL 59 -> 60, 1983 NL 19 -> 21, 1984 FR 56 -> 67, 1984 GB 45 -> 51, 1984 Raleigh 116 -> 118. Plain "Maillard Normandy 6-speed 14-24" stays unlinked (the only 6-speed Normandy row is the Normandy Sport).

## Link pass from /linkCoverage — 2026-10-24

- 1982 (NL) "Sedisport, 114 links, Delta treated" (5) -> 1402 Sedis Sedisport Delta, as the 1980 108-link value. 1984 (FR 3, GB 2) bare "Turbo" saddle -> 5508 Selle Italia Turbo (ranged 1980-90). +10 links; no other catalogue changed.
