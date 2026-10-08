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
