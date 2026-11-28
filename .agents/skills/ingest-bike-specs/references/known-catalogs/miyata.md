# Miyata catalogs processed so far

## Koga-Miyata 1980–82 source assessment — 2026-11-20

- Koga-Miyata is the brand printed in these brochures; Miyata built the frames.
  [Koga's history](https://www.koga.com/en/about-koga/history) describes the
  combined name. A live read-only brand query found Miyata but no bike brand
  containing Koga; there is no local Koga CSV. The current generator filename
  pattern accepts a single alphabetic brand token, so ingestion needs an
  explicit mapping to the intended Koga-Miyata brand and regression review.
- [1980 brochure](https://bikalog.org/api/view/Koga%20Miyata/1980/koga-1980.pdf),
  20 PDF pages: Dutch-language model narratives include six racing models and
  touring models, with some named parts. The text repeatedly refers to a
  detailed specification list at the back; the Bikalog copy ends with general
  information and a back cover, without that list. Model descriptions note
  country-dependent equipment, so the photographs cannot settle those values.
- [1981 brochure](https://bikalog.org/api/view/Koga%20Miyata/1981/koga-1981.pdf),
  24 PDF pages: detailed component tables are present on PDF pp. 19–22.
  Pro series Fullpro-L, Fullpro and Proracer are on p. 19; sport Gentsracer,
  Roadspeed, Roadwinner-L and Roadwinner on p. 20; Gents-Touring,
  Ladies-Touring, Roadrunner and Roadmixed on p. 21; comfort Road-Gentleman
  and Road-Lady on p. 22. Apply road/touring scope rules. The tables contain
  country-labelled equipment variants, so resolve the intended market rather
  than combining alternative values. The scans are readable; OCR disrupts
  table columns. Koga also hosts its [1981 copy](https://www.koga.com/files/2/0/4/Koga_Brochure_1981.pdf).
- [1982 brochure](https://bikalog.org/api/view/Koga%20Miyata/1982/koga-1982.pdf),
  28 PDF pages: Dutch-language model and range descriptions, sizes and colours
  are present, but it refers to separate specification sheets. The scanned
  ending has a gearing chart and general information, not those detailed
  sheets. Both 1980 and 1982 contain some model-specific named parts in prose;
  lack of the sheets does not mean no evidence exists.
- Assessment checked the brochure text and the page endings, including all
  1981 specification tables; it did not transcribe or load bikes, or review
  component links. Other 1983–2001 Bikalog editions remain to be assessed.

## SR and Kusuki ATB fitments — 2026-11-18

After user approval, linked the 1985 Terra Runner OR handlebar spec 21658 to SR MTB-204 11690, and the 1986 Trail Runner handlebar/stem specs 19013/19014 to Kusuki BMT-3-26 11691 and Rockey-2 11692. Koga's 1986 brochure corroborates the latter pair and spells the stem Rockey-2; Miyata spells it Rocky 2. All were previously NULL. [Source and validation](../../../ingest-component-catalog/references/source-hunts.md#log).

## Ariake saddle fitment review — applied and validated (2026-11-17)

Reviewed the original Miyata saddle entries against the loaded CSVs and live
specs. User approved and applied the eight rows and 50 links on 2026-11-17.
This supersedes historical missing-row observations below. No maker
catalogue or Jaguar crosswalk has been found; these are bike-fitment identities.
Year bounds are earliest/latest attestations in this catalogue set, not
production dates. Existing sources are reused; source 407 (1987) is not needed.

| Component ID / title | Description | Attested years | Primary source | PDF evidence |
| --- | --- | --- | --- | --- |
| 11428 Ariake 77-17 | Quilted vinyl top, padded. | 1979–84 | 386 | 1979 p.9; 1980 p.9; 1981 p.11; 1982 p.15; 1983 p.17; 1984 p.25 |
| 11429 Ariake 77-17-IS | Padded saddle. | 1979–80 | 386 | 1979 p.9; 1980 p.9 |
| 11430 Ariake 77P-17 | Anatomically styled, vinyl top, padded. | 1981–83 | 402 | 1981 pp.10–11; 1982 pp.14–15; 1983 pp.15–16 |
| 11431 Ariake 77CP-DX | Anatomically styled, padded. | 1981–84 | 402 | 1981 pp.10–11; 1982 pp.13–14; 1983 pp.9–12,14; 1984 pp.24–25 |
| 11432 Ariake 77NP-DX | Anatomically styled, suede top, padded. | 1981–83 | 402 | 1981 p.10; 1983 pp.13,18 |
| 11433 Ariake 77AP-DX | Anatomically styled, leather top, padded. | 1981 | 402 | 1981 p.10 |
| 11434 Ariake 80N-DX | Nubuck leather top, padded. | 1982–83 | 403 | 1982 p.13; 1983 pp.5–8 |
| 11435 Ariake 77C-DX | Vinyl saddle. | 1985–86 | 405 | 1985 p.17; 1986 p.22 |

Source URLs and edition details are recorded in the year sections below.
1979's scan separates bare 77-17-IS from explicitly named Jaguar-II 77IS and
77CDX. Retain that distinction; 1985–86 bare 77C-DX is not an evidenced alias
for Jaguar II 5234. Leave Jaguar 5233 and Jaguar II 5234 unchanged. 1980's
reconstructed chart explicitly gives 77-17 for 110L as well as 110; there is no
81-L alternative printed there.

Applied eight new brand 525 / Saddles 17 rows with UUID load keys, catalogue
provenance, generated search text and no group; filled 50 previously NULL links
using exact spec/bike/year/source/value guards. Readback verified every component
field and each changed spec against the approved proposal; all other specs and
the existing Jaguar rows/links are unchanged. The five descriptive 77-17-IS specs
use a bike/year override to 11429 because adding both 77-17 titles makes substring
matching ambiguous.
Frame-dependent alternatives 21066 (1982 110) and 22019 (1983 90) stay NULL;
see [link decisions](../link-decisions.md). Generator guards and regression tests
cover the alternative specs, full-code selection and separation from Jaguar II.
Dry run across all 96 loaded catalogue CSVs changes exactly the intended 50
mappings: 77-17 ×9, 77-17-IS ×5, 77P-17 ×9, 77CP-DX ×13, 77NP-DX ×3,
77AP-DX ×1, 80N-DX ×8 and 77C-DX ×2; no losses or replacements. The two
alternative specs remain NULL. Baseline generator/live comparison has 21,176
paired specs, 21,161 unchanged and 15 pre-existing lost mappings. All 13 test
files pass, including the new alternative/code-separation regression tests.

SQL rerun affected zero rows. Final generator/live comparison across all 96
catalogues retains the same 15 pre-existing lost mappings, with zero gained or
changed mappings and no missing/ambiguous spec identities. Whole-database quality
checks remain at zero errors and the same 1,951 review findings (1,566 incomplete
dates, 326 date conflicts, 35 broad freewheel labels, 24 descriptions at limit);
the new rows and links introduce no findings. Duplicate groups have no candidates.
Near-pair review flags only 11428 / 11429: 1979 p.9 and 1980 p.9 list 77-17
and 77-17-IS separately, so they are retained and registered in
`REVIEWED_NOT_DUPLICATES`. No merges or date corrections were needed.
Temporary SQL, scans, snapshots and review scripts were removed after validation.

## 1979 Miyata — loaded (2026-11-13, source 386)

- CSV: `bike_specs/1979_miyata_spec.csv`; approved SQL:
  `/tmp/miyata-1979-review/1979_miyata.sql`; readable review:
  `/tmp/miyata-1979-review/review.md`. User approved and loaded 9 bikes,
  189 specs and 72 links; all 11 component date corrections applied.
  Source 386, `1979 Miyata catalogue`, country US. Readback confirmed
  totals and no specs without provenance. Full SQL rerun affected zero rows.
- Source: https://www.ragandbone.ca/PDFs/Miyata%20Catalogue%20PDFs/1979%20MIyata%20Catalogue.pdf
  Nine-page manufacturer scan: specification chart on PDF p. 9; model prose
  pp. 2-7. US edition stated by Toyoda America Inc., New York / Chicago /
  Los Angeles on pp. 8-9. Cover and history/warranty pages have no additional
  build specifications. Chart transcribed from full-size overlapping crops;
  ignored handwritten prices and corrected OCR codes RND, CTD and KEC.
- Nine complete bikes: Racing 1200 / 912; Touring 1000 / 800; Sports 710 /
  600 / 400 / 310 / 200. Separate 1200 / 1000 frame-only offers excluded.
  No junior, city or mixte models in this scan. 22 existing labels, 189
  specs, 72 links. Only 1000 (15-speed) and 912 (12-speed) have
  explicit speed counts; no gearing inferred for the other seven models.
- Period/default judgments: 1200 New Dura-Ace -> EA-200 (7434) / DA-100
  (7427), the 1977 generation on the stated freewheel build, rather than
  the 1986 7400 mappings or EX-only freehub derailleur. Bare Dura-Ace
  headset -> 3098, side-pulls -> first-generation 989, low-flange QR hubs
  -> 3556; specific variants are not printed. Its Extra crank, brazed-on
  shifters and unspecified-speed gold freewheel remain unlinked.
- 912 600EX -> Arabesque FD 2480 / short-cage RD 4468 / clamp shifters
  6147 / normal-reach brakes 969; clamp and reach are period defaults,
  not printed part codes. Explicit low-flange freehub -> 3540; six-speed
  cluster -> generic 600EX Uniglide cassette 1200 (retained under source
  Freewheel label). Printed `600EXLD, 52x42` crank conflicts with the
  LD row's gearing; preserved and unlinked.
- SunTour VGT Luxe -> 4705 second version on 710 / 600 / 400, replacing
  the automatic 4704 first version (ends 1976) only for these bikes.
  Seven front -> 2641; Seven rear and Cyclone front stay unlinked because
  period variants overlap. 1000's explicitly five-speed Pro-Compe -> 2242;
  other Pro-Compe and Perfect clusters unlinked without speed counts.
  VX shifter unlinked without clamp/braze evidence. PDL-M / PUB-10 /
  Bar-Con use current 1978-era rows 6264 / 7796 / 7792; DLW -> 6283,
  UB-10 -> 8057. 1000 PDL-S -> 8055, with year_to corrected 1975 -> 1979.
- Exact named Sakae cranks and cockpit parts support year_from 1980 ->
  1979 for 1757, 2910, 7874, 7875, 7876, 7878, 7888, 7902; Jaguar II
  family 5234 likewise 1980 -> 1979. MKS Unique Custom Road name plus
  forged-alloy / Cr-Mo construction matches 3869, year_from 1985 -> 1979.
  All 11 guarded date corrections are included before the bike inserts in
  the review SQL, without changing component provenance or descriptions.
- Generic rims, MYT tyres, KEC / uncertain HKK chains, unspecified Dia-Compe
  brakes/levers, generic saddles/posts and unidentifiable pedal models stay
  plain text. Royal-PIESL II is the printed I/1 glyph; linked to 7907
  RY-P1ESL II by the Extra Super Light name and titanium bolt specification.
- Regression against all 85 pre-existing CSVs: zero removed or altered SQL
  statements; precisely 470 new statements, all for 1979 Miyata. Total links
  6446 -> 6518, exactly the 72 new links. Post-load Miyata totals:
  1979 9 bikes / 189 specs / 72 links; 1986 18 / 395 / 156.

## 1985 Miyata — loaded (2026-11-15, source 405, country NULL)

- CSV: `bike_specs/1985_miyata_spec.csv` (scratchpad `build_miyata85.js`,
  not kept). Review SQL prepends six guarded date fixes: 11151 Sugino Astron
  year_to 1981 -> 1986 (also covers the already-linked 1986 Pista), 3860
  MKS Esquartz 107 1983 -> 1985, 7192 SL-AT50 year_from 1986 -> 1985, 10846
  SR MTS-100 and 6666 SR MTS-110 1984 -> 1985, 9543 Araya Model 5 1984 ->
  1985.
- Source: https://www.ragandbone.ca/PDFs/Miyata%20Catalogue%20PDFs/Miyata%20Catalogue%2085.pdf
  (19 pp). Spec table pp. 17-18, read from 170 dpi crops. Country left
  NULL: back cover has only the warranty ("some states" boilerplate),
  "Manufactured by Miyata Industry Co., Ltd. Chigasaki" and "Printed in
  Japan"; no edition code or distributor address.
- Seventeen bikes: Professional Racing (Team Miyata, Pro Miyata -> "Racing";
  Team Pista -> "Track"), Semi-Pro (912, 710, 310; Pista -> "Track"), Grand
  Touring (1000, 610, 210 -> "Touring"), All Terrain (Ridge Runner, Terra
  Runner OR, Street Runner -> "Mountain"), All Round Sports (110, 100, 90,
  Sport-10). Skipped: Beach Runner (hi-ten, single 48T, DC-1020 side-pulls,
  as the 1986 Shore Runner) and Sport Junior (24" wheels).
- 210 column is cut by the scan's page gutter (left edge missing on p. 18,
  absent from p. 17): kept only what is visible. Frame Size written "21",
  23", 19-1/2"M (other sizes lost in the scan gutter)", brake model number
  lost ("DIA-COMPE Cantilever", forced unlinked), weight blank, colours
  "Zodiac Blue #B-154, Sandstone" (second code lost).
- Overrides (bike-scoped, 1985 only): New Dura-Ace = 7400 on Team Miyata
  (FD 2510, RD 4503, SL-7400 6164, MF-7400-6 2221, FC 1819, PD 3970, BR 991,
  HB-7400 3560, HP 3099; post Dura-Ace EX 5899). Team Pista: Dura-Ace
  headset and hub forced null (auto hit road 7400 rows; track 7500 ends 1984,
  7600 starts 1986), MKS Unique Custom Track 10042, Nitto Pro AA 8560, D.I.D
  maker row 1355 for DID-TRACK (as 1986). Pro Miyata: Superbe Pro crank
  CW-5000 1991 (auto hit 1993 "Superbe"), PL-2000 4010, New Cyclone hub
  BH-2200 3606, Ukai 20A 5192; plain "Superbe" rear forced null (auto hit
  the 1980 Superbe II long cage). New 600 EX = 6207 as 1984 (912; 1000
  5-speed and Terra Runner 6-speed MF-6207 2217). New Cyclone 710 -> FD-3300
  2629 / RD-6000 4739 (as 1986). Deore XT-SP -> RD-M700-SP 4489; SLZ-408
  6195; Z-Series FD-Z202 / Z204 / Z206, RD-Z501, SL-Z401, BR-Z570;
  L512 SGS -> RD-L512 10970; AT-50 shifter 7192 (brake auto 1003). Pista:
  Sylvan Track 10043, Sprint Track RH-4400 3612, B115 2876, Astron 11151.
  Ridge Runner: NGC982 697, Ukai 7C 10470, XC-II 4015, Power Thumb 6307.
  SR CT-P5E -> 5857 (superseded 2026-11-16: 11316 SR CT-P5E), CT-P6 5861, SP-154 / SP-155, CTC-5DXC -> 8205 (as
  1986), MTS-100 / MTS-110. 1000 "Levin sealed" forced null (auto hit the
  MTB-225; kept on the Ridge Runner); Sugino GS-LP and VT forced null
  (rows are GS 1980-82 / VT 1980).
- L-513 / L-514 rear specs 21687/21601/21579 subsequently linked to 12745/12746 using Shimano's 1984 parts sheets; see the Shimano catalogue notes.
- Left unlinked: Superbe front and Superbe Pro shifter, Mountech front /
  Mountech LL rear, Deore XT-GS front and L-412
  shifters (no rows), top-mount SunTour shifters, Pro-Compe / UG clusters,
  Dura-Ace UG / 600 UG / UG chains, Dura-Ace track crank and sprockets,
  600 EX triple and 600 EX brakes, SunTour sealed hubs, SR CR-E posts,
  Ukai 7Z / 16-A2, Araya 16-B (two rows) / 16-A3 / 18 / Aero DX, Sugino
  TLP / TGT / TGT-LP, Miyata Signature cranks, Kusuki / Nitto B-801 /
  SR MTB bars and stems, KKT RMX / RT-7 / M-33 pedals, Ariake saddles.
- Regression: all 90 other CSVs regenerate byte-identical (after adding a
  plain 11151 fallback to the Astron key so the 1986 Pista keeps its link).

## 1984 Miyata — loaded (2026-11-15, source 404, CA)

- CSV: `bike_specs/1984_miyata_spec.csv` (scratchpad `build_miyata84.js`,
  not kept). Review SQL prepends ten guarded date fixes: year_to -> 1984
  for 1210 Dura-Ace EX cassette, 3769 KKT Pro Ace (Road), 1925 Sugino Aero
  Mighty, 5927 Sugino SP-K, 8230 SR RY2 Royal 2, 1967 Sugino GT (triple),
  10846 SR MTS-100, 6666 SR MTS-110, 9543 Araya Model 5 (was 1974: a long
  stretch on a generic steel-rim name, flagged); year_from 1985 -> 1984 for
  8873 Dia-Compe 164G.
- Source: https://www.ragandbone.ca/PDFs/Miyata%20Catalogue%20PDFs/Miyata%20Catalogue%2084.pdf
  (26 pp; the Rag & Bone selector names 1983+ files "Miyata Catalogue NN.pdf").
  Spec table pp. 24-25, read from 170 dpi crops (text layer too jumbled to
  use). Back cover: "Printed in Japan NOV. 1983" and edition code "CAN";
  no distributor address (1979-83 print Toyoda / Miyata Bicycle of America)
  -> country CA. The warranty's "some states" is shared boilerplate.
- Sixteen bikes, Type from series headings: Professional Racing (Team
  Miyata-SL, Team Miyata, Pro Miyata -> "Racing"), Semi-Pro (912, 710,
  310), Grand Touring (1000, 610, 210 -> "Touring"), All Terrain (Ridge /
  Terra / Street Runner -> "Mountain"; Street Runner kept like the 1986 City
  Runner: triple, cantilevers), All-Round Sports (110, 100, 90, Sport-10).
  Skipped: Sport Junior (24" wheels, children's), BMX-5000 / BMX-3000.
  Mixte "M" sizes stay in Frame Size cells. HANDLE row split into
  Handlebars (top) and Stem (bottom); HANDLE BAR TAPE -> Cable & Tape.
- Repairs: "16phi" written 16mm; Street Runner stem "S MTS-110" -> SR
  MTS-110; Ridge Runner tyre "26x2,125" -> 26x2.125.
- Overrides (bike-scoped, 1984 only): New 600-EX = 6207 (FD 2481, RD 4470,
  SL-6207 6148, FC-6207 1798, MF-6207 2217; hub auto 7551). Shimano 105 =
  Golden Arrow (FD auto 2466, RD auto 4452, BR-S105 958 replacing the auto
  1987-89 BR-1050 953, SL-A105 6132). Z-Series on the 110 (FD-Z204 2543,
  RD-Z503 4545, SL-Z401 6194, BR-Z570 959, BL-Z304 7181). Deore XT-EX rear
  -> RD-M700 4488. Dura-Ace EX on Team Miyata as 1981-82 (RD 4509, HP 3105,
  BR 997, cassette 1210, FH-7260 3569, SP-7200 5899, CN-7100 7472).
  Campagnolo on Team Miyata-SL: auto FD 2313 / RD 4152 / brakes 583 /
  headset 2968 / post 5761; "Super Light" pedals -> 4021 Super Record
  Strada 3716 (auto; Super Leggero); crank -> Strada Super Record 1509;
  Record hub forced null (low vs high flange). SunTour: Mountech-GTL ->
  RD-5500 4711 (not the 1985 v2 4712), ARX-GT 4729, Cyclone Mark-2 rear
  4742, Sprint hub BH-2000 7808, Power Thumb 6307, MSM 7800, ARX shifter
  6272, UB-10 -> LD-3000 6288 (as 1986), XC-2 pedals 4015, New Winner
  6-speed 2238, Perfect 5 / 6 2245 / 7813. MKS Esquartz -> 3858 (auto hit
  the 1983 Esquartz 107), Esquartz 102 3859, Silvan Road 3865. SR CT-P5E ->
  5857 (as 1986; superseded 2026-11-16: 11316 SR CT-P5E), Custom P6 5861, Royal-2 8230. Araya 20A / 7X / 7XN.
  Nitto Technomic-Aero -> 8563 Technomic (auto; no aero row).
- Left unlinked: New Superbe front / rear and Superbe PRO shifter (Superbe
  II vs Superbe Pro, 1984 name ambiguous); Cyclone Mark-2 and Mountech
  fronts (two rows each); Dura-Ace EX front, Campagnolo / Dura-Ace EX /
  top-mount / VX / DL-72 / Deore XT-106 shifters; plain Dura-Ace 52x42
  crank (EX vs 7400 in 1984); New 600-EX brakes (49 vs 57 reach); Pro-Compe
  6-speed and UG clusters; 600-UG chains; SunTour Sealed Bearing hubs;
  Sugino TAT / TGT, SR SCC-100 / CRC-100 / CXC-300 / CXC-2300 / CTC-5DX /
  CTC-5SD2 / SNS-5SG cranks; Dia-Compe DC-980 / DC-981 / GX-500N / DC-730,
  NGC-200 / 200H, PN-157 / 161 / 280 / 281, 165 levers; Araya 16A3 / 18;
  SR P5 / P5B / P6B posts; Tange Levin Sealed / Tange-ST; SR
  Randonneur / Custom / SC-713 / MTB bars, Nitto B-902; MKS AR-Road /
  AR-Road 2 / PT-7, SR SP-513; Ariake saddles (no rows). CR-2 / Model-33
  linked 2026-11-16 after the MKS rows were widened (see mks.md).
- Regression: all 89 other CSVs regenerate byte-identical.

## 1983 Miyata — loaded (2026-11-15, source 406)

- CSV: `bike_specs/1983_miyata_spec.csv` (scratchpad `build_miyata83.js`,
  not kept). Review SQL prepends fifteen guarded date fixes: year_from
  1984 -> 1983 for 660 Dia-Compe 980, 2654 FD-2900 / 4771 RD-4600 Trimec,
  8087 Dia-Compe AC500, 8873 Dia-Compe 164G; year_to -> 1983 for 8983
  Pro-Am 75-1, 1735 SR AEROX 5LA, 1200 Uniglide 600EX, 8250 SR CT-5LA-EL,
  3926 SR SP-152 (was 1980), 1757 Super Apex-5TG, 2910 SR RND, 8252 SR
  CT-5TG, 8200 SR CTC-5DRG2, 6283 SunTour LD-1000 DLW.
- Source: https://www.ragandbone.ca/PDFs/Miyata%20Catalogue%20PDFs/Miyata%20Catalogue%2083.pdf
  (20 pp). One spec strip at the foot of each model page, pp. 5-18 (one
  model per page, order from the p. 4 "1983 Miyata Model Line" table).
  Back cover: "Imported by: MIYATA BICYCLE OF AMERICA, INC., 2526 W. Pratt
  Blvd, Elk Grove, ILL"; "Printed in Japan APR. 1983" -> country US.
- Fourteen bikes, Type from the p. 4 series: Professional Racing (Aero /
  Team / Pro Miyata, 1200), Semi-Pro (912, 710, 310), Grand Touring (1000,
  610, 210 -> "Touring"), All-Round Sports (110, 100, 90 -> "Sports"),
  Mountain Bike (Ridge Runner -> "Mountain"). No out-of-scope models.
- Cell splits: "Handle" -> Handlebars + Stem ("X w/Y stem"); "Saddle" cell
  -> Saddle + Seat Post ("w/... pillar"); "Derailleurs" -> front / rear /
  shifter; "Brakes" -> Brakes + Brake Levers. No spoke row printed.
- Repairs: Pro Miyata "Supberbe Pro" -> Superbe Pro, "Esquarts" ->
  Esquartz. The 610 strip is cut at the page's left edge; text layer and
  visible fragments give "SR CT-5TG", "x 47 x 32 teeth" and sizes
  "-1/2", 21" / ", 25"", written as SR CT-5TG 52 x 47 x 32 teeth and
  19-1/2", 21", 23", 25" (the 52 and 23" inferred from the 1982 610 and
  the series pattern; flag if exactness matters).
- Overrides (bike-scoped, 1983 only): Aero Miyata Dura-Ace AX (auto RD
  4507 / BR 995 / bar 2917; FC 1826, PD 3973, FH-7370 3567, EX cassette
  1210, CN-7100 7472). Team Miyata EX (auto RD 4509 / BR 997 / HP 3105;
  FH-7260 3569, HS-7300 stem 6678, AX crank / pedals); EX front forced
  null (band vs brazed, as 1981-82). Pro Miyata Superbe Pro (auto FD 2652
  / RD 4766), AGC-300 686 / AGC250 279, Aero Mighty 1925, Esquartz 3858;
  bare "SUNTOUR SUPERBE" hub forced null (auto hit generic row ending
  1980; no flange given). 1200: Cyclone M2 rear 4742, NGC-400 694, Pro-Am
  8983, AEROX 5LA 1735, Esquartz 102 3859. 912: 600EX Arabesque 2480 /
  4468, cassette 1200, hub 3540, Royal-II 8230 (as 1982). 710: BL 2622 /
  BL-GT 4731, 500G 9106. 310: A-105 = 105 Golden Arrow (2466 / 4452 /
  6132), AC-500 -> 8087, SP-152 3926. 110: Trimec FD-2900 2654 / RD-4600
  4771. Others: Cyclone M2GT 4743, ARX GT 4729, PDL-M 6264, LD-1000 6283,
  Thumb shifter 6307, Dia-Compe 960 8096 / 980 660, 164 -> 8873, Perfect
  PT5S / PT6S -> 2245 / 7813, SR CT-5LAEL / CT-5TG / CTC-5DRG2 / CTC-5DX /
  Super-Apex 5TG, RND 2910, CT-P6 / CT-P6C 5861, Araya-5 9543. "DIA-COMPE
  610" forced null (auto 656 vs Gran Compe 689, as 1979-82). The 710 500G
  key gained a plain 9106 fallback so 1985 Bianchi keeps its auto link.
- Left unlinked: Team Miyata shifter (none printed); Dura-Ace AX posts and
  AX top-mount shifter; SunTour top-mount, Superbe, VX, UB10 (8057 ends
  1982, 6288 starts 1984), Trimec top-mount shifters; Cyclone M2 front;
  Superbe-Tech front and Mount-Tech rears (several rows); plain WINNER and
  Pro-Compe clusters; 600EX-LD 52x42 (gearing conflict); 600UG / KEC / DID
  Lanner / Suntour-Z chains (except Dura-Ace UG); NGC-200 / 200H, 144G /
  161 / 165 / 280 levers; Dia-Compe 500; SR CT-P5 / P5A / P5B / P6B posts;
  SR CTC-5SD2 (row is 5SD2AH); Sugino TAT; RH-4600 hub; MKS AR Road /
  CR-2 / 33, SunTour Oval Black pedals; Ariake saddles; SR / CT / Royal /
  AEROX stems; Nitto B92, SR SC-713 bars (no rows).
- Regression: all 91 other CSVs regenerate byte-identical.

## 1982 Miyata — loaded (2026-11-14, source 403)

- CSV: `bike_specs/1982_miyata_spec.csv` (scratchpad `build_miyata82.js`,
  not kept). Review SQL prepends eleven guarded date fixes: year_from ->
  1982 for 686 Dia-Compe AGC300 (was 1984) and 3859 MKS Esquartz 102 (was
  1984); year_to -> 1982 for 3150 Tange Ritzy, 6690 Sugino HP-GL, 1735 SR
  AEC-100 AEROX (AE-5LA), 8250 SR CT-5LA-EL, 8252 SR CT-5TG (all were
  1980), 8251 SR CT-5RG, 1200 Uniglide 600EX, 8983 SunShine Pro-Am 75-1,
  8985 Gyromaster 78-1 (all were 1981).
- Source: https://www.ragandbone.ca/PDFs/Miyata%20Catalogue%20PDFs/1982%20Miyata%20Catalog.pdf
  (16 pp, photo scan with a usable OCR text layer). Spec tables pp. 13-15
  ("Technical Specifications 1982 Models"), transcribed from the text layer
  and checked cell by cell against 160 dpi crops. US edition: warranty
  p. 16 names TOYODA AMERICA, INC., New York / Chicago / Los Angeles.
- Twelve bikes, Type from the series headings: Professional Racing (Aero
  Miyata, Team Miyata, Pro Miyata, 1200 -> "Racing"), Semi-Pro (912, 710,
  310), Grand Touring (1000, 610 -> "Touring"), All-Round Sports (210,
  110SP, 110 -> "Sports"). Ladies' 310S / 210M / 110L stay in Frame Size
  cells. Skipped: Commuter / Commuter-L (3-speed city).
- Repairs: Aero Miyata key wrenches "(3, 4, 5, 5, 6mm)" -> (3, 4, 5, 6mm);
  Team "ovel" -> oval, "Dra-Ace" -> Dura-Ace; 1000 chain "2/32" -> 3/32"
  (same typo as 1981). 912 "SHIMANO SF ends" kept as printed.
- Overrides (bike-scoped, 1982 only): Dura-Ace AX on Aero Miyata (RD 4507,
  Parapull 995, levers 438, FH-7370 3567, HD-7300 2917, FC 1826, PD 3973,
  HS 6678); Team keeps EX RD 4509 / brakes 997 / levers 439 / HP 3105 with
  AX crank / pedals / stem. Pro Miyata: Superbe Pro (auto FD 2652, RD 4766),
  Superbe small-flange hub -> RH-1000 8262 (the auto 3614 generic ends
  1980), AGC300 686 / AGC250 279, Sugino Aero Mighty 1925, HP-GL 6690, MKS
  Esquartz 3858, Tange Ritzy 3150. 1200: Cyclone Mark 2 rear -> RD-3500
  4742, SR AEROX 5LA -> 1735, Esquartz 102 3859, Pro-Am 75-1 8983, NGC400
  694. 1000 Cyclone Mark 2 GT -> RD-3700 4743. SunTour BL front -> FD-1900
  2622, BL-GT -> RD-3300 4731, New Winner 6-cog -> NW-6000 2238. SR Custom
  5LA-EL 8250 / 5RG 8251 / 5TG 8252. MKS Sylvan Road -> 2021 3865 (also
  added for the 1981 912 / 1000 "Silvan Road", ranged 1981: back-fill only).
- Left unlinked: Dura-Ace AX / EX front derailleurs (band / braze /
  oval-tube variants); AX topmount and EX / SunTour top-mount / BL /
  Superbe shifters (clamp vs brazed rows); Cyclone Mark 2 front (FD-2300 vs
  FD-2400); bare SunTour "WINNER" clusters; 912 600 EX-LD 52x42 (gearing
  conflict as 1979-80); Dura-Ace AX / 600AX / CT-P5A / Custom P5 posts;
  Dura-Ace EX hub; NGC 200 / 200H, #144 / #144G / #165 levers; SR CTC 5DX /
  Silstar 5DX C cranks (several CTC rows); DID Lanner chains, Ariake 80N-DX
  / 77xx saddles, MKS AR Road / CR-2, SR AEROX / Royal
  KM / Custom / Silver Win stems, KD-4L bars (no rows).
- Regression: all 87 other CSVs regenerate byte-identical except 1981
  Miyata, which gains exactly the two Sylvan Road back-fills.

## 1981 Miyata — loaded (2026-11-14, source 402; 70 -> 72 links after the 1982 Sylvan Road back-fill)

- CSV: `bike_specs/1981_miyata_spec.csv` (scratchpad `build_miyata81.js`,
  not kept). Review SQL prepends six guarded date fixes: year_to 1980 ->
  1981 for 8055 PDL-S, 1200 Uniglide 600EX cassette, 3925 SR SP-150, 8251
  SR CT-5RG; year_from 1982 -> 1981 for 8243 SR SP-450 and 8230 SR RY2
  Royal 2 (printed "SR Royal II").
- Source: https://www.ragandbone.ca/PDFs/Miyata%20Catalogue%20PDFs/1981%20Miyata%20Catalog.pdf
  (12 pp, real photo scan). Spec table "Technical Specifications 1981
  Models" across pp. 10-11; p. 9 is frame-set geometry (framesets out of
  scope); pp. 2-8 model prose with series headings. US edition: warranty
  (p. 12) names Toyoda and "some states"; CPSC reflectors throughout. A
  Canadian representative's business card (Willowdale, Ontario) is pasted
  over the back-page address block; printed text is the US edition.
- Nine bikes, Type from the series headings: Professional (Team Miyata,
  Pro Miyata -> "Racing"), Semi-Pro (912, 710, 310 -> "Semi-Pro"), Touring
  (1000, 610), All-Round Sports (210, 110 -> "Sports"). Ladies' 310S
  (stagger), 210M (mixte) and 110L kept in the men's rows' Frame Size cells.
  Skipped: Commuter / Commuter-L (Shimano 3-speed hub, racks, fenders,
  chain case, dynamo: city).
- Repairs: 310 column is cut by the page edge / gutter on p. 10. Visible
  prefixes completed from the 210 / 610 / 710 wording and the text layer
  (sizes 23" / 25", "Cr-Mo tubing, cutway lugs", PDL-M shifter, Pro-Compe
  14-17-20-24-28, rest of hubs / saddle / brakes text); the 310 crank teeth
  are lost, so the cell omits them. 310 colours may be incomplete. 1000
  chain "1/2" x 2/32"" printed typo -> 3/32". "SUN TOUR VII" kept as
  printed (= Seven).
- Overrides (bike-scoped, 1981 only): Dura-Ace EX RD -> 4509 RD-7200 (the
  auto hit 4508 is the 1984-85 last version); EX headset 3105, side-pull
  997 (the catalogue leaves reach unspecified, see the
  [Dura-Ace EX reach review](../../../ingest-component-catalog/references/known-catalogs/shimano.md#dura-ace-ex-cs-49-and-cs-57-brake-reach-review--2026-11-28)),
  levers 439, cassette 1210; Dura-Ace AX crank
  1826, pedals 3973, stem 6678. Pro Miyata: NGC 400 -> 694, 600 AX crank
  1787 / pedals 3957, 600 EX shifter -> brazed-on 6150 (frame-set page:
  "downtube shifter basement"); 912 600 EX shifter clamp-on 6147 (frame-set
  page: "downtube stop"), LD crank 52x39 -> 7498 FC-6210 (gearing now
  matches the LD row), Royal II stem 8230. 600EX headset 3089, hubs 3540,
  cassette 1200, brakes 969, levers 419. SunTour: VX 2614, VX-S 4775, VGT
  4705, Seven/VII 2641 / 4756, PDL-M / PDL-S / PUB-10 as 1980. SR: Custom
  5RG -> 8251 (also the 610 triple), SI-5DRG-AH 7876, Super-Apex 5TG 1757,
  CTD 7888, RND 2910, AH stem 7902, Custom P6 5861, SP-150 / SP-450.
  Araya 16B 350g -> 4917; Gyro-Master small flange QR -> 8985 78-1.
- Left unlinked: Dura-Ace EX FD (band 2518 vs brazed 2519) and hub (FH-7260
  vs FH-7261); Team Miyata "aerodynamic shifter" (frame-set page says
  Dura-Ace AX; A/B brazed types); Dura-Ace AX / 600 AX seat posts (several
  types); SR Custom P5 (5857 / 5858); Cyclone front; Pro-Compe / Perfect
  clusters; 600 UG chains (kept consistent with 1979-80); NGC 200H levers,
  MKS Silvan Road, SR SP-350, Silstar 5DX AH / 5DX C, Silver
  Win AH, KD-4L, Ariake 77xx saddles, KKT RT-E1 (no rows); Dia-Compe 610 /
  500 / 730; 600 EX stem (no HS-6200 row).
- Regression: all 87 other CSVs regenerate byte-identical.

## 1980 Miyata — loaded (2026-11-14, source 401)

- CSV: `bike_specs/1980_miyata_spec.csv` (built by scratchpad
  `build_miyata80.js`, not kept). Review SQL prepends one guarded date fix:
  8055 SunTour PDL-S year_to 1979 -> 1980.
- Source: https://www.ragandbone.ca/PDFs/Miyata%20Catalogue%20PDFs/1980%20Miyata%20Catalog.pdf
  (9 pp). Spec chart "'80 Model Specification" on PDF p. 9; pp. 1-8 are
  image-only model pages. Footer "Distributed by TOYODA AMERICA, INC. New
  York, Chicago, Los Angeles" -> country US. The chart is an OCR
  re-render (visible glyphs are OCR text over a blank background), so
  misreads were corrected from context and the 1979 chart: GT-PS/CT-PS ->
  CT-P5, AND -> RND, SORG/SOR -> 5DRG, SOX -> 5DX, AT-El/RT-Et -> RT-E1,
  Apex-1\H -> Apex-AH, GYAO-MASTEA -> GYRO-MASTER, #960 / #610 / #730.
  Handwritten prices on the scan ignored.
- Eight bikes: 1000 (Touring), 912 (Racing), 710 / 610 / 310 / 210 / 110 /
  110L (Sports, as 1979). 110L is the 19-1/2" loop-frame ladies' version of
  the 110 (touring levers, mudguards, full SunTour Seven group): kept per
  the ladies'/mixte rule. 310's 19-1/2" Mixte stays in its Frame Size cell.
  No speed counts printed, so Gearing left empty.
- Uncertain readings: 912 pedals print "; K T -TP Alloy" -> transcribed
  "KKT TP Alloy", unlinked (candidate 3775 KKT T.P. Top Run, 1970-81, not
  confirmed). 710 tyres "27" x 1A" with 100 lbs -> written 27" x 1" (the
  1979 100-lb size); tyre is unlinked MYT anyway.
- Overrides (all bike-scoped, 1980 only): 1979 choices carried forward
  (600EX Arabesque 2480 / 4468 / 6147 / 969 / 3540 / cassette 1200; Seven FD
  2641; PDL-M 6264, PUB-10 7796, UB-10 8057, PDL-S 8055; 500G 9106; 960
  8096; 5DRG-AH 7876; Super Apex-5TG 1757; Jaguar II 5234; CTD 7888; RND
  2910; SR-AH 7902; Apex-AH 7901; Quill-2K 3863; SP-300 3931). New for
  1980: bare "VGT" -> 4705 RD-1500 (the global 4695 is the 1971-73 4900);
  Seven rear -> 4756 RD-1900 (the 1976-79 4755 no longer overlaps); VXS ->
  4775 RD-2500 VX (S).
- Left unlinked: Cyclone front (four 3704 / FD-1300 rows cover 1980);
  Pro-Compe / Perfect clusters (no speed count); 600EXLD 52x42 (same
  conflict as 1979); 5DX-AH / 5DXC cranks (no row); CT-P5 (5857 and 5858
  both cover 1980); Dia-Compe 610 (656 vs GC610 689), #500, #730 (no
  period row); RY-KM, S-WIN stems,
  KD-4L / KE-36 bars, MKS QR-K1, KKT pedals, Ariake 77-17, generic hubs.
- Regression: all 86 other CSVs regenerate byte-identical.

## 1987 Miyata — loaded (2026-11-15, source 407, country NULL; partial 512 and 1000 kept by user call)

- CSV: `bike_specs/1987_miyata_spec.csv`, built by scratchpad
  `build_miyata87.js` from three Sonnet-subagent JSON transcriptions
  (one per page, 200 dpi crops), spot-checked against the scan. Review SQL
  prepends sixteen guarded date fixes (year_to -> 1987 for 2544, 3143
  Tange G-Master (was 1980), 3961, 3966, 5475 Turbo Triathlon (was 1980),
  5899, 6194, 7164, 7553, 7813 (was 1985), 8114; year_from 1989 -> 1987
  for Nitto 8586 MT-5, 8587 MT-6, 8589 NTC-A, 8590 Young-II, 8592 NTR).
- Source: https://www.ragandbone.ca/PDFs/Miyata%20Catalogue%20PDFs/Miyata%20Catalogue%2087.pdf
  (30 pp). One fold-out spec table scanned in three overlapping pieces:
  p. 26 (Carbon Fiber, Racing, Competitions/Fitness 912, 712), p. 28
  (Fitness 512, 312, ATB), p. 27 (Touring, Sports; its right edge repeats
  712). The Omnibus PDF (pp. 172-175) holds the same scans. Country NULL:
  warranty boilerplate only, no edition code or distributor address.
- Twenty-five bikes: Carbon Tech 5000 / 3000 / 1000, Aero Miyata, Team
  Miyata, Omnium -> "Racing"; 912, 712, 512, 312 -> "Competition / Fitness"
  (as 1986); 1000, 615 GT, 215 ST -> "Touring"; 112, 100, Triton, Nimbus,
  Victor -> "Sports"; Ridge / Sky / Terra / Trail / Valley Runner, Path
  Winder, Street Winder -> "Mountain" (Path / Street Winder kept like the
  1986 City Runner: derailleurs, cantilevers, triples). No separate
  Alumitech models here (that is its own 1987 catalogue on the selector).
- Gutter losses: the 512 column lost its left half between p. 26 and p.
  28, and the 1000 straddles p. 28's right edge and p. 27's left edge.
  Kept only text visible or with a single completion from sibling columns
  (e.g. "[SHI]MANO", "[AC]-2 crown", "[WO]LBER [Alpin]a"): 512 smallest
  size / weight / crank gearing / brake-lever and hub model numbers
  omitted; 1000 derailleurs, crank and brakes left blank, sizes and colour
  from the p. 15 model blurb. Cluster teeth for the 1000 lost.
- Cell splits: Derailleurs -> FD / RD / shifter by "FD .. RD .. SL" markers;
  "Brake Set" -> Brakes + Brake Levers ("w/... levers"). Spelling fixes:
  Champange, Gracier -> Glacier, SANSHIN -> SANSIN, Retension, "Chrom".
- Overrides (bike-scoped, 1987 only): New Dura Ace = 7400 (FD 2510, RD
  4503, SL-7400 6164, CS-7400-7 1204 for 7-speed, MF-7400-6 2221 on the
  6-speed Aero, CN-7400 7231, FC 1819, PD 3970, BR 991, BL 434, FH-7400
  7207, HP 3099); Aero's Superbe Pro hub -> BH-1600 3617 (auto hit the
  generic pre-1981 row). New 600EX = SIS 6208 where a row exists (RD 4471,
  SL 6149, MF-6208 2218, BR 972, BL 421, FH-6208 3539, CN-6208 7232) with
  6207 for FD 2481 / HP 3090 / PD 3961 / FC-6207-BP 1799. New 105 = 1050
  (FD 2462, RD 4449, SL 6130, FC 1778, PD 3953, FH 3523; brakes / levers
  unlinked, 49 vs 57 and 1050 vs 1051). New Deore XT = M730 (FD 2499, RD
  4491, SL 6159, CS 1201, FC 1810, PD 3967, BL 429, HB 3550); New Deore =
  MT60 (FD 2496, RD 4487, SL 6157, BL 427). Z-012 -> MF-Z012 7209; Sansin
  RE-60 9003 / CE-60 9007; Hatta Vesta 3020; XC-Sport 7000 FD 2660 / RD
  4788 / levers 470; MS-series RD-M531 4523, SL-MS55 6127, SL-MS40 6126;
  Light Action L-523 4518, L-532 4521, L-522 7553; BR-L490 1004; FC-B124
  1776 / FC-B126 7560; BL-Z325 7225; LD-5100 PLG 6290; AX-50 2459.
  BR-Z570 on 312 / 112 / 100 -> 959 (linked 2026-11-16, after the Aug 1986
  Shimano Complete Line confirmed BR-Z570 for the 1987 model year; 959 now
  runs 1983-1987; one Shimano entry covering four reaches, as for the 1984-86 links).
  Forced null: Aero's split disc / ADX-4 rim cell, XC-Sport IC
  shifter (integrated lever), DC-983D, SunTour "RD 2000".
- Left unlinked at ingestion: Alpha 3000 SS / GX (see the Triton review below), TY 60,
  QS10, L-525 (cage not given), split front-canti / rear-centre-pull brake
  cells, Wolber Aubisque / Alpina, National CX-Alpha, Ukai LA-14, Selle
  Royal / Vetta saddles, Sansin Gyro master, SR / Sugino / Strong posts,
  Nitto B-105F / B-126AA / B-811F / B-814F bars, Kusuki bars and
  stems, SR and Sugino-less cranks (SUC / CTC / SXC / FXC), MKS PB-100 /
  G-5000, Victor pedals, generic steel parts on Triton / Nimbus / Victor.
- Regression: all 92 other CSVs regenerate byte-identical.

### Triton Alpha 3000 derailleur review — 2026-11-16

- Baseline bike 1303, source 407: front spec 22519 `SUNTOUR ALPHA 3000 SS`
  and rear spec 22520 `SUNTOUR ALPHA 3000 GX` both had NULL component IDs.
  The original PDF linked above, scan p. 27, prints SS on the first line and
  GX on the second in the Triton derailleur cell; the CSV preserves that order.
  This supersedes the ingestion note's blanket uncertainty about both links.
- Rear candidate **7865**, `SunTour RD-3000-GX, alpha-3000 (ATB)`, is an exact
  series/cage match, dated 1987 with leaflet source 91. The automatic matcher
  returns NULL because neither normalized full string contains the other:
  the DB title adds `RD-3000-GX` and `(ATB)`, and puts GX before alpha-3000.
  User approved the rear link: **22520 NULL -> 7865 applied**, with a matching
  1987 Triton-scoped override. Guarded SQL matched spec, bike, source, value,
  label and target identity/category/year; reversal is to set 22520 back to
  NULL only while its component remains 7865.
- **4709**, `RD-3000-SS`, is also a rear derailleur, so it cannot fill front
  spec 22519. Front candidates **2600 / 2611 / 2612** are a-3000 versions
  (2612 triple), all still dated 1980 in the DB. Follow-up found that **SS is
  also a valid front designation**: Sutherland's Handbook, 6th ed. (1995),
  PDF p.217 lists a-3000 **FD-3000-SS**, 28.6 mm clamp and 2–18T chainring
  difference. PDF p.218 distinguishes FD-3000-GT (6–22T) and GX (6–24T).
  [Reference scan](https://paulinoposada.github.io/bike/documents/epdf.pub_sutherlands-handbook-for-bicycle-mechanics.pdf).
  Thus the initial concern that SS was necessarily rear wording is superseded.
- VeloBase's retained specimen pages identify **2611 as FD-3000-GT** and
  **2612 as FD-3000-GX**. **2600** names only a-3000, a double with a housing
  stop; its sole photo shows the group marking but no SS model code or reverse
  cage markings. It is a candidate for SS, not a proven crosswalk. The pages
  say `1980's`, not the exact 1980 used by the DB. No component dates, titles
  or front link were changed. See the SunTour notes for specimen URLs/photo.
- Next evidence: a marked FD-3000-SS specimen or manufacturer drawing to
  compare with 2600 before renaming it or adding a potentially duplicate row.
  Front 22519 remains NULL; the Triton's 52/42 double alone does not prove
  the exact specimen/version. Do not swap the specs.
- Validation: live readback confirms rear 22520 -> 7865 in Rear Derailleurs,
  front 22519 NULL; SQL rerun affected 0 rows. All **93 CSVs** regenerated:
  only the Triton rear mapping changed, NULL -> 7865. Component row counts
  unchanged; generator syntax check passed. Task-generated SQL/comparisons
  removed after validation.
- Further front sourcing on 2026-11-16: the Triton photograph on scan p.18
  is too small to establish the cage/housing-stop version. Recovered later
  SunTour specification sheets and an additional double-ring specimen also
  lack a usable SS crosswalk. See the [additional SunTour source checks](../../../ingest-component-catalog/references/known-catalogs/suntour.md#additional-ss-source-checks--2026-11-16).
  Front 22519 remains NULL; next target is a full-resolution 1987 dealer
  front-specification page or a marked SS specimen/box with cage and cable
  attachment views. No additional DB/generator changes.

## 1986 Miyata — `1986_miyata_spec.csv` (18 bikes, 395 specs, 131 linked)

- Source: SS Cycleworks bike museum scan
  https://sscycleworks.com/galleries/bike-museum/1986-miyata-catalog-compressed.pdf
  (24 pp, image-only, no text layer). US edition: back cover "Miyata
  Bicycle of America Inc., 2526 W. Pratt Blvd., Elk Grove Village IL", so
  `CATALOGUE_COUNTRY` 1986|miyata = US. Specs come from the two-page
  table on pp 22-23 (transcribed 2026-11-02 from 300 dpi tiles by two
  Sonnet subagents, spot-checked); the model pages give only blurbs. The
  Omnium page says "New models late 1986".
- Models: Professional Racing (Team Miyata, Omnium [table "Omnium
  Aluminum"], Pro Miyata), Competition / Fitness (912, 710, 310, Pista
  -> Type "Track"), Grand Touring (1000, 610, 210 -> Type "Touring"), All
  Terrain (Ridge / Terra / Trail / City Runner -> "Mountain"), All Round
  Sports (110, 100, 90, Sport 10 -> "Sports"; drop bars, dual levers,
  mixte "M" sizes kept in the Frame Size cell, not separate bikes).
- Skipped (not in the CSV): Shore Runner (ATB-styled beach / city bike:
  Dia-Compe 1020 side-pulls, SR 50/40 double, Hi-Ten; user's call
  2026-11-02; City Runner, with cantilevers and a triple, loaded as
  Mountain). Not in the spec table so never transcribed: Commuter series
  (Park Avenue 3-speed, Fifth Avenue 5-speed), Sport Junior / JR-M, Kiki &
  Lala, unicycles, Team Pista / Ridge Runner framesets.
- CSV built by `build_miyata86.js` (scratchpad, not kept): Derailleurs
  cell split into Front / Rear / Shifters ("(F) .. (R) .. w/<shifter>"),
  Brake Set into Brakes + Brake Levers ("w/... levers", "Aero Levers",
  "hooded levers"), Handle Bar Tape -> Cable & Tape, Speeds derived into
  Gearing. Fractions written 19-1/2", 27 x 1-1/8. Typos fixed: City Runner
  cluster "4-32" -> 14-32, Terra Runner "SHIGNATURE" -> SIGNATURE, Trail
  Runner fork "buting" -> tubing; Ridge Runner brakes "DIA COMPE (F) NGC
  982 SUNTOUR (R) XC" rewritten "... front, ... rear" (left unlinked: two
  parts). Brake-cable liner footnote not carried.
- Overrides (all ranged 1986 only; regenerating the seven other 1986
  catalogues gave identical SQL): New Dura-Ace = 7400 (FD 2510, RD 4503,
  BR 991, HP 3099, FC 1819, PD 3970, MF-7400-6 2221, HB-7400 freewheel hub
  3560, CN-7400 7231); "Dura-Ace 515 shifter" is printed so, read as SIS
  -> SL-7400 6164. New 600 EX front / headset / pedals / hubs / Biopace
  cranks -> 6207 rows (FD 2481, HP 3090, PD 3961, HB 7551, FC-6207-BP 1799,
  FC-6206 triple 1797); 600 UG chain -> CN-6208 7232. Deore XT = M700 (FD
  2497, RD-M700-SP 4489, replacing the matcher's 1994 "Deore XT" 4496).
  Z-series / Light Action: FD-Z202 / Z204 / Z206, RD-Z501, RD-L522 7553,
  RD-L523 4518, SL-L422 7555 (not the 1972 L422 console 6181), SL-Z401,
  BR-Z570 row 959 for Z-570 / Z-720, BL-Z304. SunTour: New Cyclone = FD-3300
  2629 / RD-6000 (S) 4739; Sprint RD-7000 4758, CB-7600/CB-8600 family 1042, CW-7500 1987,
  BH-2000 7808, RH-4400 track 3612; Seven FD-1400 2641; XC-Sport RD-XS00
  4788 (front 2660 via the 1986 Raleigh override); UB-10 / UBN-10 -> 6288;
  Perfect 6-speed 7813. Others: Sugino VP triple 1970, Sansin RE-60 9003,
  HB-AQ11 7137, Tange MA-60, MKS Esquartz 102 / Sylvan Track, SR SP-155,
  XC-II PL-5100, Dia-Compe GX-400 -> GX-N 8082, 164 levers -> 164G 8873,
  Araya 20A 4922, SR CT-P5E -> CT-P5 5857 (superseded 2026-11-16: 11316 SR CT-P5E), Sugino SPK -> SP-K 5927, Nitto
  55F -> Mod. 55, Olympiad B115, B-804 AA -> 10815 for Ridge Runner / Terra Runner (1986 catalog says NITTO 804 AA Alloy; Koga 1986 identifies B-804 AA as a special ATB aluminium bar), D.I.D maker row 1355 for "DID TRACK".
- Left unlinked on purpose: New 600 EX rear derailleur, brakes and
  freewheel (6207 vs SIS 6208 both cover 1986; nothing in the text
  decides); SunTour Sprint front (DB Sprint FD rows start 1987), Sprint
  aero levers and pedals (Sprint 9000 rows are 1987); New SEVEN rear;
  Winner Pro 7-speed (WP rows 1987+); Deore XT hub (HB-MN72 vs the 1986
  FH-7400-ATB row); Sansin Gyro-Master (Sunshine 3601 vs RE-40 9000);
  Araya 16-B (two rows); all Ukai rims, Tange MES, Miyata tyres and
  Miyata Signature parts (no DB rows).

## Selective front/rear brake specs — 2026-11-15 (approved plan, applied)

- 1986 Ridge Runner (bike 1105) now has explicit Front Brake / Rear Brake CSV
  columns: `DIA COMPE NGC 982 front` -> 697; `SUNTOUR XC rear` stays NULL pending
  exact model evidence. Replaced combined NULL spec 18966 with two position
  rows, preserving the original source 349 and wording. No other Miyata value
  or component changed, and shared brake cells retain Brakes.
- See [cross-catalog notes](cross-catalog-notes.md), "Selective Front Brake /
  Rear Brake specs", for the full original value, new row IDs, validation and
  the CSV repair. Temporary SQL and backups removed after validation.

## Rows-already-exist link pass — 2026-11-16 (approved, applied)

This supersedes the "left unlinked" notes above for these values. 35 specs were
linked through bike-year-ranged overrides and guarded per-spec UPDATEs.
Regenerating all 93 CSVs changed only these specs (7438 -> 7473 linked).

- **600 UG chains, 1980-85 (24).** The printed pin-plate colour picks the row:
  - "Gold" / "Gold/Black" x18 -> 7451 QA-400 / CN-6110 (golden pin plates).
  - "Silver" / "Silver/Black" x6 -> 7473 QA-410 / CN-6120 (satin nickel pin plates).
  - The existing 1986-87 CN-6208 entries for `shimano 600 ug gold black` / `silver
    black` keep their ranges; the 1980-85 ranges were added to the same keys.
- **"DIA-COMPE DC-980", 1984 x3 -> 660** Dia-Compe 980, the plain cantilever, as
  the 1983 / 1986-87 links. 691 GC980 is the buffed Gran Compe version.
- **"DC-981", 1984-85 x3 -> 661**, the only 981 row.
- **Plain NGC-200 levers, 1982-84 x5 -> 8861** NGC200 / 210 / 212. 8861
  `year_from` moved 1984 -> 1982 from this fitment, `source_ref` 261 -> 403.
  Revert: 1984 / 261.
- **Still unlinked:** NGC 200H x4 (1981-84). 200H is not one of 8861's printed
  codes.

## New Falcon headset links — applied 2026-11-20

Linked the 15 exact New Falcon specs on existing 1979–85 bikes to **12168 Tange
New Falcon**, superseding the former missing-row/unlinked entries (including 1980
1000 and 1984 912/710/Terra Runner). Original spec sources are preserved. The 1980
mapping uses the already-transcribed OCR reconstruction, corroborated by the
original 1979/1981 1000 charts; this limitation was included in approval. No new
bikes loaded. Bare Tange, Levin sealed and generic alloy descriptions are outside
this mapping. See [Tange evidence, exact IDs and validation](../../../ingest-component-catalog/references/known-catalogs/tange.md#new-falcon-fitment-review--2026-11-20-applied-and-validated).

## Mod. 55 handlebar links — applied 2026-11-20

Linked 13 existing 1981–87 Miyata MDL-55/MDL-55F/Model-55F/55F handlebar specs
to **2878 Nitto Mod. 55**, extending the existing 1986 fitment judgement with
bike/year-scoped generator overrides. Original spec wording and catalogue sources
are preserved; component fields/dates remain unchanged. This supersedes the prior
55F/MDL-55 missing-row and unlinked entries above. The 1987 B-105F specs stay NULL:
no global F-suffix stripping or B105/Mod. 55 equivalence. The F suffix itself is
not decoded by the reviewed sources; the scoped matching judgement was part of
user approval. [Original pages, exact IDs and validation](../../../ingest-component-catalog/references/known-catalogs/nitto.md#miyata-mod-55-linking-follow-through--2026-11-20-applied-and-validated).
