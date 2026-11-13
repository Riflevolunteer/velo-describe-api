# Modolo catalogs processed so far

## Modolo Factory Price Lists — March 1986 (Velo Aficionado, 11 sheets), loaded 2026-11-13

- `data_source` 387, label `Modolo Factory Price Lists (March 1986)`, country IT.
  Source: https://velo-aficionado.squarespace.com/blog/modolo-brakes-quick-id-guide-factory-price-guides-and-1984-catalogue
  Download manifest `/tmp/modolo-1986-review/manifest.json`; combined scan
  `/tmp/modolo-1986-review/factory-guide.pdf`; listing/diff `review.md`, SQL
  `modolo-1986.sql`, before/after snapshots and verification in that folder.
  Sheets 1-9: brake factory list, explicitly March 1986; sheets 8-9 replace
  November 1985. Sheet 10: dated March 1986 handlebar/stem price list.
  Sheet 11: undated companion technical sheet; used for legible construction
  and dimensions of independently named parts, never as dating evidence.
  Available originals are only 700px wide: ambiguous tiny codes and weights
  left unread. No 1984 catalogue or standalone brake-ID photographs ingested.
- Added (all 1986-1986, source_ref 387, UUID source_ids): Handlebars
  **11132 Modolo Professional, anatomic** (black/silver, Dural 1.4mm wall,
  40-44cm c/c, group Professional 89), **11133 Modolo Speedy, anatomic**
  (silver, Dural 1.6mm wall, 38-44cm c/c, group Speedy 90); Shifters
  **11134 Modolo R0142, Orion** (complete nylon-bagged control, Q0022 bulk
  pack). Finish, width and quill options grouped within model families.
- Updated 28 existing rows (all source_ref -> 387), preserving independent
  weights and later date evidence. Cockpit rows 2869 / 2870 bars and
  6593 / 6594 / 6598 / 9473 / 9474 stems gain finishes, clamp choices,
  construction and sizes. Earlier start years: 2869 Equipe bar, 6593 closed
  Equipe stem, 9473 Speedy stem and 9474 Master SSC stem **1988 -> 1986**;
  6594 hinged Equipe stem **NULL/NULL -> 1986/1986**.
- **Later start:** 2870 Master SSC anatomic bar **1980 -> 1986**, year_to
  1988 retained. The old 1980 was a retained Velobase bucket; Modolo's 1990
  timeline explicitly dates anatomic bars to 1986, now supported by the
  contemporary list. The 1988 secondary source supplied no earlier
  attestation, and no existing bike specs reference 2870. This is not an
  inference from absence in a partial catalogue.
- **Dating conflict:** normal and hinged clamps are both priced in March
  1986, despite the 1990 timeline dating openable clamps to 1987. Preserve
  the earlier contemporary attestation; do not push these stems to 1987.
- Brakes: 866 Sporting America year_to **1980 -> 1986**; 867 Corsa
  **NULL -> 1986**; 870 Kronos, 872 Equipe, 888 Sporting **1985 -> 1986**;
  889 Superprestige **1984 -> 1986**; 890 Team **1980 -> 1986**.
  886 Speedy and 891 Master-Pro descriptions enriched, later end dates
  retained. Complete caliper codes: Kronos R0010, Master-Pro R0116/R0117;
  Speedy R0054/R0055 standard, R0056/R0057 compact. Reach, finishes and
  supplied levers/transmissions recorded; no prices stored.
- Brake levers: 369 tandem **NULL/NULL -> 1986/1986**; 377 Orion, 382 Corsa,
  384 Master-Pro, 385 Professional, 389 Sporting year_to **1985 -> 1986**;
  379 Sport, 380 Superprestige, 381 Team **1980 -> 1986**. Descriptions also
  updated for 374 Kronos and 386 Speedy with their compatible end dates
  retained. Shared Professional/Superprestige replacement codes R0017/R0018
  recorded without merging separately marketed families on shared spares.
  Shifter 6090 Kronos gets R0141, carbon-fibre construction and Q0021 pack.
- Retitles (old -> new, search_text regenerated): 866 `Modolo America` ->
  `Modolo Sporting America`; 870 `Modolo Kronos` -> `Modolo R0010, Kronos`;
  369 `Modolo tandem` -> `Modolo Speedy, tandem right lever`;
  381 `Modolo Team` -> `Modolo R0200 / R0201, Team`;
  6090 `Modolo Kronos` -> `Modolo R0141, Kronos`;
  6598 `Modolo professional` -> `Modolo Professional`.
- Held: Professional brakes 880 (INTERN PAT) vs 892 (v2), Flash brakes
  874/875 and drilled/non-drilled levers 371/372 cannot be distinguished by
  price-list names alone. Standard Equipe R0198/R0199 and Aero Equipe
  controls may overlap the existing KX90 lever family 370 (which covers
  standard/aero/krono variants); no duplicate rows or later replacement
  codes assigned without proof. A leather-covered Kronos anatomic bar is
  named only on undated sheet 11: not equated to the dated leather-covered
  Master SSC or given a guessed year. Cross brake 871 already compatible,
  unchanged. No deletes or merges.
- Out of scope: sheets 2-3 only cables, pads, packaging and small parts;
  these and exploded sub-parts on sheets 4-8 not standalone components.
  Complete separately sold brakes, brake levers and shifters on those sheets
  were included. Tools, hoods, arms, bodies, pivots, fasteners excluded.
- Verification: source inserted once, **3 components inserted / 28 updated**;
  all 31 rows and every expected field read back correctly, all other Modolo
  rows unchanged. Complete SQL rerun affected **zero rows**. Regenerated all
  **86 bike CSVs** before/after: SQL identical, **6518 links** in both.
  Added a bike/year-specific `gipiemme modolo kronos` -> 870 override for
  1982 Battaglin Arena to preserve its existing match after the R0010 retitle.

## Modolo "Brakes 90" + "Accessori Ricambi" — 1990 (La Bible du Vélo blog, 12 images)

- `data_source` 318, label "Modolo Brakes 90 catalogue (1990)", country IT.
  Source: https://labibleduvelocataloguesmodolo.blogspot.com/p/modolo-1990.html
  (12 images at `=s2048`, watermarked "Archives VRC: not to be shared without
  asking"; used for facts only, no images republished). Modolo S.r.l., Via
  Vanizza 21/C, S. Lucia di Piave (TV). English brake booklet (p1, 5, 6, 7,
  11) and Italian spare-parts booklet (p2, 3, 9, 10, 12). p4 / p8 covers, p6 =
  right half of p5, p12 = p10 again. No weights or reach printed. Transcribed
  2026-10-31 by a Sonnet subagent (`modolo1990.json`), p2 and p7 checked by hand.
- Range (brake sets, calipers + levers): Supertitanium SLK 90, Master SLK 90
  ("'88' / Master SLK 90"), Equipe KX90, ALX 90, Mach 3, Mach 1 (OEM only),
  Rocky (MTB cantilever), Cross (cantilever). "A new Range of '90' Brakes",
  Orbiter-Cam release, P.R.S. spring and Sinter 90 pads are the stated
  novelties; "90" is not a launch year (KX90 is in the 1985/86 guide).
  Not in the range: Speedy, Flash, Corsa, Sporting, Kronos, Master Pro,
  Professional (all already end by 1988).
- Replacement levers (spare-parts tables), standard / aero-standard / krono:
  Supertitanium SLK 90 R0760 / R0767 / R0774; Master SLK 90 R0761 / R0768 /
  R0775; Equipe KX 90 R0762 / R0769 / R0776; ALX 90 R0763 / R0770 / R0777;
  Mach 3 R0764 / R0771; Mach 1 R0766 / R0773 (no krono). Bodies R0779-R0786.
  Master SLK clamp printed "R00016" (sic).
- Timeline (p5 / p11), applied by user decision as start years: 1976-77
  Professional, 1979 Speedy and Flash, 1980 Kronos levers, 1981 Kronos brake
  (limited to 3,000; wording unverified), 1982 Corsa / Sporting / Cross with
  '919' hoods, 1983 Master-Pro, 1986 anatomic bars, 1987 openable bar clamps.
- Updated (source_ref -> 318): brakes 873 Equipe KX90 year_to 1988 -> 1990,
  865 ALX 90 1988 -> 1990, 877 Mach 1 1988 -> 1990, 883 Rocky 1988 -> 1990,
  871 Cross 1985-1985 -> 1982-1990; 885 Supertitanium SLK 90, 884 Master SLK
  90, 878 Mach 3 descriptions only. Levers 370 Equipe KX90 year_to 1985 ->
  1990 + part numbers; 375 Mach 3 (velobase, undated) -> 1990-1990 + part
  numbers. Timeline year_from moves earlier: 374 Kronos levers 1985 -> 1980,
  870 Kronos brake 1983 -> 1981, 888 Sporting 1984 -> 1982, 867 Corsa NULL
  -> 1982. Old descriptions were bare velobase "Modolo X, Italy" text;
  measured / listed weights kept (370 224 g Actual, 374 140 g, 870 195 g).
- Added: brake levers 10026 ALX 90, 10027 Supertitanium SLK 90, 10028 Master
  SLK 90, 10029 Mach 1; saddle 10030 Modolo Rocky (MTB, "jeans" graphics),
  with category_brand (Saddles, Modolo).
- No deletes. Left open: Corsa 2nd / 3rd version rows (868 / 869) still
  undated; SLK 90 brakes keep velobase year_from 1980 (no evidence for a
  later start beyond the "'88'" name); out of scope: pads (Sinter 90 D-0015,
  Monoblock), SSC / Speedy cables, Aero-Carbon pad holders, 919 hoods, bags.

## Modolo Professional / Speedy / Flash leaflet — c. 1979 (Swoon Cycles listing, 5 photos)

- `data_source` 346, label "Modolo Professional / Speedy / Flash leaflet
  (c. 1979)", country IT. Source: 5 BikeRecyclery dealer photos (900x600 webp)
  from https://swooncycles.com/products/modolo-brakes-catalog-brochure-1980s-mint,
  saved by the user to `~/Downloads/modolo` (the site 429s automated fetches).
  Tri-fold, IT/FR/EN, red cover "Non correr rischi! Frena Modolo / Don't
  risk! Brake Modolo". Imprint: Industria Modolo Adamo & C. s.n.c., Sarano di
  S. Lucia di Piave (TV). Read 2026-11-01 in the main context.
- Pages: p1 cover; p2 back panel (cables, red Professional presentation box;
  text illegible at this resolution); p3 Professional brake panel + Leva
  Professional / Speedy / Flash lever panel (the only legible page); p4
  Professional / Speedy / Flash brake panels (text illegible); p5 overview.
- Undated. c. 1979 inferred: Speedy and Flash are present (1979 in Modolo's
  own timeline, 1990 catalogue) and Kronos (levers 1980, brake 1981) is not;
  the pre-S.r.l. "Adamo & C. s.n.c." imprint fits. It's a leaflet, so absence
  of other parts is weak evidence and caps nothing.
- Professional text: self-lubricating transmission (molybdenum-bisulphide
  tube), maintenance booklet with 1-year guarantee, serial number tracing the
  lot and tester, central pivot and lower articulation, 6 anodised colours,
  pantographed levers on the Stratos version. Photo caliper reads "MODOLO
  INTERN PAT" (row 880). Professional Stratos levers: contrasting colour
  marks, two rows of holes on the blade and one on the back, pantographed side.
  All Modolo levers: light high-resistance alloy, tubular section.
- Updated (source_ref -> 346), descriptions rewritten (old bare velobase "Modolo
  X, Italy" text dropped, weights kept): 880 Professional brake (previous
  text from Bikecology 1980, source 247, consolidated), 385 Professional
  levers, 386 Speedy levers, 372 Flash levers (non-drilled).
- `year_from` moved later: 386 Speedy levers 1970 -> 1979 (velobase decade
  bucket; Modolo timeline dates Speedy to 1979, matching brake 886). No bike
  specs or overrides referenced 385/386.
- No inserts, no deletes. Left open: 385 Professional levers keep year_from
  1980 (the leaflet is undated, so it can't safely push it to 1979; the brake is
  1976). Flash brake 875 (2nd version) is still undated. The Speedy and Flash
  brake panel text is unread and would need a higher-resolution photo.
