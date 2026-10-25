# Wolber catalogs processed so far

DB brand: Wolber (brand 522). Tyres are category 23; the brand also has Super Champion rims,
saddles and a wheelset from the velobase crawl (not touched).

## Wolber Bicycle Tyres - Tubulars catalogue (Apr 1978) (Reminiscence Part 54, 7 pages)

- `data_source` 235, label "Wolber Bicycle Tyres - Tubulars catalogue (Apr 1978)". Source:
  http://cyclotourist.web.fc2.com/special_54.html (`Image/special/special54/wolber78_01l.jpg` ..
  `07l.jpg`, 800 x 1131; the `m` versions are 480 px; fetch with `curl -L`). English, imprint
  "SIRAS 6015 B 04.78"; page 7 is a French duplicate of the tubular pages (a few weights differ
  by 5-10 g: International / Special Course 275 g, Performance 210 g, Competition 230 g, Cross
  section 25 mm). Liberty is "available from September 1978".
- Contents: four tubular types (round vulcanised: Route Renforce Noir 370 g, Junior Butyl 330 g,
  International 270 g, Cross 290 g, Cross Super 370 g, Special Course 270 g; flat-moulded
  vulcanised: Touriste Renforce 360 g, Club Strada 330 g, Team Corsa 270 g, Training Cross 290 g,
  Leader 270 g; mixed: Neo-Pro 250 g; hand-made: Performance 220 g, Competition 240 g, Piste
  180 g), the tubeless-type Liberty (270 g), Wolber rim cement and repair kit, wired-on High
  Pressure W.20 / W.25 / W.28 and Super Randonneur 650 x 35B, and unnamed nylon-casing sports
  tyres (700 x 25C, 700 x 28C, 650 x 35B; no row).
- Updated (11 rows, all velobase, `source_ref` 1 -> 235): 6919 Junior, 6909 Club Strada, 6917
  International, 6914 Cross Super, 6923 Neo Pro (1978-80, catalogue 250 g, measured 264 g
  kept), 6927 Piste, 6921 Liberty, 6947 W20 (1976 -> 1976-78), 6948 W25, 6949 W28 (1970 ->
  1970-78), 6941 Super Randonneur. Undated rows set to 1978-1978.
- New (9 rows, 1978-1978, ids 9021-9029): Route Renforce Noir, Touriste Renforce,
  Team Corsa, Cross, Training Cross, Special Course, Leader, Performance, Competition.
- Kept apart on purpose (different names): 6913 Cross Extra (1978-80, 290 g) vs the new Cross,
  6920 Leader 80 vs Leader, 6910 Competition Slick vs Competition, 6942 Super-Corsa vs Team Corsa.
- Bike links: none. The unlinked Raleigh Wolber specs are 1974 "Transalpino tubulars", 1983
  "300g tubular", 1984 "Rallye" and bare "tubulars"; none names a model in this catalogue.


## Mel Pinto Imports parts catalog, 1970 to 1975 (p. 60), `data_source` 272

See the full entry in [suntour.md](suntour.md). Super Champion page: added
9581 Super Champion 302, Professional (410 g, 36 holes, 1970-1975, binder
range). 300, 301, 58 and 60 matched 5185, 5177 / 5180, 5178 and 5179
unchanged.

## Wolber tubulars, tyres and rims brochure, c. 1981 (Equus Bicycle Info Project, 3 PDFs), `data_source` 273

- Source: https://equusbicycle.com/bike/wolbersuperchampion/index.html
  (`pdf/wolbersuperchamp - 0001..0003.pdf`: covers and "Historic Account",
  tubulars and tyres, rims and cement). English export brochure, undated. It
  names Gentleman 81 and says Wolber has made Super Champion and Record rims
  at Soissons "since 1979", so c. 1981 or later; Equus says "circa 1980's". No
  upper bound, so **no year moved**: Corsa 80, Leader 80, Strada 80, Cross 28
  and W23 Invulnerable stay at 1984 (Kitching, `data_source` 261).
- Contents: 24 tubulars (hand-made, Soie silk, vulcanised round / flat, mixed,
  tubeless), 12 wired-on / BMX / moped tyres, 10 Super Champion rims (Mixte,
  Performance, Arc en Ciel, Tourmalet, Record du Monde, Record, Prestige,
  Speciale Competition, Model 58, Gentleman 81), rim cement and tubeless
  repair kit (out of scope, as is the Punch moped tyre).
- New (12 rows, 1981-1981, ids 9582-9593): Performance Soie 220 g, Competition
  Soie 220 g, Piste Soie 190 g, W 333, Junior Tubeless, 700 x 25C Tandem, 700
  x 22C Super Rallye, 650 x 32B Super Randonneur (425 g; the 650 x 35B row
  6941 stays), BMX 20 x 2.125 Super Cross, Super Champion Tourmalet,
  Prestige, Speciale Competition.
- Rewritten and retagged to 273 (descriptions only, years unchanged): 6911
  Corsa 80, 6920 Leader 80, 6932 Record 18 Piste, 6933 Record Route, 6912
  Criterium, 6931 Rallye 23 (700x22C), 6943 Tandem, 5188 Record, 5178 Mod. 58.
- Edition differences, existing `source_ref` kept and the brochure's figures named
  inline: 5186 Mixte (530 g here, 520 g Kitching 1984), 5187 Performance (305 g,
  265 g Palo Alto), 5180 Arc en Ciel (345 g, 330 g), 5189 Record du Monde
  (330 g, 20 mm; 310 g and 19.5 mm in 1981/82), 6917 International and 6914
  Cross Super, 6921 Liberty, 6927 Piste, 9029 Competition. Not appended
  (would pass 255 characters): 9024 Cross (355 g, 26 mm here against 290 g in
  1978: a different tyre), 9026 Special Course (280 g here, 270 / 275 g),
  9028 Performance (215 g, 22.7 mm here).
- Merged: 6934 "Wolber Record Route 18" (RD tyre, 1980-84, bare, `source_ref`
  261, source_id `6934` row title "Wolber Record Route 18") into 6933 "Wolber
  Record Route" (now 1980-84); same 18.5 mm / 185 g tubular. No bike links or
  overrides pointed at 6934.
- Left for a decision: Gentleman 81 duplicates 5184 / 5215 and Model 58
  duplicates 5178 / 5221 (two velobase rows each; 5178 has one bike link, so it
  would be the survivor), and Gentleman 81 years of 1970-80 against the "81" in
  the name. Invulnerable 84 (6918) shows as plain "Invulnerable" here
  (280 g, 21.5 mm).
