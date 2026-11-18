# Motobecane catalogs processed so far

## c.1973 US — loaded and validated 2026-11-18

- CSV `bike_specs/1973_motobecane_us_spec.csv` preserves Grand Touring's conflicting table/portrait saddle and rear descriptions explicitly. Exact pages remain in ignored `Catalog Page`; no PDF page citations enter displayed component values. Source label `Motobecane US catalogue (c. 1973)` makes the estimated date explicit; citation includes the user URL, dating uncertainty, US dealer stamp and evidence pages.
- User approved with "apply". Applied all 238 statements: five bikes **1351–1355**, 89 specs **23380–23468**, nine links and source **453**; 19 existing labels reused. No existing bikes/specs, brands, labels or components changed. No matching bikes/source existed in preflight. All 15 table rows across the five bikes checked against p.8, with portraits pp.4–7; missing size/colour sheet not invented. Riviera/Nobly remain excluded as folding/utility.
- Accepted nine links: Campagnolo Nuovo Record rear **4125** / front **2297** on Grand Record and Le Champion; Huret Allvit rear **4290** / front **2394** on Nomade; Atom 700 pedals **3665**; Universal 61 brakes **1081**; T.T.T. Record stem **6417**. All seven identities cover 1973. The plural Derailleurs entries name the Allvit / Nuovo Record systems, supporting front/rear assignments under the existing group convention. VGT describes a rear only; Grand Touring front stays blank. No new component identities or date corrections.
- Seven speculative automatic links suppressed through scoped NULLs: Mirage Simplex Prestige front/rear (variant unproven), three Stronglight Competition headsets (V4 locknut unproven), two Brooks Professional saddles (Team Professional rivets unproven). Grand Touring's two contradictory values have explicit NULL guards. Other generic, alternative and ambiguous components stay unlinked; no need to resolve them before loading faithful catalogue text.
- Validation: generated all 99 local CSVs before/after; every SQL statement outside the target catalogue unchanged. Within target: revised source metadata, two conflict-preserving values, seven removed speculative links and one added Universal 61 link. Generator syntax, existing quality-link tests and direct conflict-guard checks pass. Rerunning all 238 applied statements affected zero rows in every table. All 89 live specs match approved model, canonical/raw label, value, component ID (including NULL) and source. Generator/live comparison independently matches all 89 with no missing/ambiguous/changed rows. Source453 has US market and original URL/dating/page citation. Zero duplicate specs, zero whole-DB structural errors, no review findings on these bikes/specs. No component identities were inserted, so no new component duplicate candidates or merges.
- Temporary source download, renders, CSV backup, provisional/reviewed SQL and validation outputs removed after readback and zero-change rerun. The maintained CSV and original URL preserve the source transcription and evidence. Shared `bike-update.sql` task output removed as disposable generated SQL.

## 1970–1990 gap source leads — 2026-11-18

- [User-supplied c.1973 US scan](https://www.bikecatalogs.com/download/3780) is now loaded; see the validated entry above. No printed year established; the [Ebykr index](https://ebykr.com/library/motobecane-catalog-about-1973/) corroborates *about* 1973, not an imprint date. The Michigan dealer stamp supports US distribution.
- Catalogue years represented after this load: c.1973 US, 1974 US, 1975 US, circa 1976 US, 1978 US and 1984 GB. Estimated dating is explicit in the relevant notes. This is coverage by catalogue year, not proof of the absence of individual models or other editions.
- [Bike Catalogs index](https://www.bikecatalogs.com/brand/motobecane) lists scans indexed 1973–1985 and an undated 1970–1972 catalogue. Inspect each edition's pages, year and market before transcription; an index year is not itself proof of the printed date.
- [German catalogue indexed 1986](https://www.velopedia.online/File/SmallPdf/Motobecane/Motobecane%20Katalog%201986?token=) names Deutsche Motobecane GmbH on its back page and includes road bikes and equipment descriptions, including C 662 E, C 502 and C153 S on printed pages 10–13. Verify its dating and read the specification panels in the scan before extracting. No bikes have been transcribed or loaded from it in this review.
- [French catalogue chronology discussion](https://forum.tontonvelo.com/viewtopic.php?t=32524) includes a 1985–86 lead and discusses uncertain dating of some French-market 1980–83 editions against price lists. Those hypotheses require independent verification and should not be transferred to other market editions.

## Embedded PDF citations — applied and validated 2026-11-17

- User reported PDF page references appearing in displayed Motobecane specs. Pre-cleanup read-only query found exactly four 1984/source-429 spec values with embedded PDF citations, all unlinked. The cause was citation text entered in component cells of `bike_specs/1984_motobecane_gb_spec.csv`, not API formatting or component descriptions.

| Spec / bike | Previous value | Applied value | Evidence retained |
|---|---|---|---|
| 23182 / 1335 City-Becane, Rear Derailleur | Huret Duopar Eco (PDF p.9) | Huret Duopar Eco | Original portrait PDF p.9; specification spread p.10 |
| 22811 / 1316 Super Mirage, Rear Derailleur | Huret Duopar Eco (PDF p.7) | Huret Duopar Eco | Original portrait PDF p.7; specification spread p.10 |
| 22829 / 1317 Interclub, Front Brake | CLB cantilever (PDF p.8) | CLB cantilever | Original portrait PDF p.8; specification spread p.10 |
| 22738 / 1312 Mirage, Hubs | Maillard alloy hubs; quick release front (PDF p.7 caption) | Maillard alloy hubs; quick release front | Original caption PDF p.7; specification spread p.10 |

- Local CSV repair removes only the four citation suffixes from spec cells and retains/adds their page evidence in the ignored `Catalog Page` column. Original scan URL and detailed evidence remain in the 1984 entry below. The old citation-bearing strings remain documented here for restoration; the underlying parts descriptions and source distinction are unchanged.
- Generator's two citation-bearing Duopar Eco NULL keys become one clean-value key with separate 1984 Super Mirage/City-Becane scopes; both remain unresolved against 4276/4400. Interclub's clean generic CLB value needs an explicit 1984/bike-specific NULL guard: without it, the matcher selects **604 CLB Cantilever Sport 1951, Cyclotouriste**, an unsupported identification. Mirage's clean hub text remains NULL. Updated regression tests cover the cleaned Duopar values and the CLB trap.
- **User-approved and applied:** four guarded `bike_spec.value_text` UPDATEs only, preserving spec/bike IDs, labels, source429 and NULL links. The first execution affected exactly four rows; the idempotency rerun affected **zero rows**. Direct guarded UPDATEs preserved IDs instead of regenerating/inserting changed values. No component, bike, label, source or other spec changed.
- Validation: shared-generator before/after across **96 loaded catalogues / 21,196 specs** changes exactly those four displayed values, no bike fields or component mappings. Overlaying the four proposed live text edits restores exactly the existing generator/live findings (same 15 pre-existing lost mappings); no new finding. Updated `test/quality-link-decisions.test.js` passes. This supersedes the earlier citation-bearing CSV examples below while preserving their source evidence and unlinked calls.
- Actual post-load readback matches all four approved values with the same IDs, NULL components and source429. Comparing every live spec against the pre-load snapshot found exactly the four intended value changes and no other field changes. There are **zero duplicate specs** in source429 and **zero remaining PDF/page citations in live Motobecane spec values**. Actual shared-generator/live comparison across **96 catalogues / 21,196 specs** reproduces the baseline exactly (same 15 pre-existing lost mappings, no gains/new changes or identity mismatches), validating CSV/live parity.
- Source evidence, old/new values, IDs and validation remain here. Temporary SQL, CSV backup, baseline, scripts and reports were removed after successful readback, zero-change rerun and mapping/duplicate validation. The maintained cleaned CSV remains in `bike_specs/`; it is gitignored as usual. No note depends on the deleted scratch directory.

## 1978 US catalogue — loaded 2026-11-17

- [Original Flickr album](https://www.flickr.com/photos/stronglight/albums/72157714839758201/).
  Model year is printed in technical introduction scan **03** (1978 line);
  scan **02** explicitly states the **U.S. market**. CSV:
  `bike_specs/1978_motobecane_us_spec.csv`; source **431**,
  `1978 Motobecane (US) catalogue`, country US. Before loading, live preflight
  found no matching source or existing 1978 Motobecane bikes.
- Scans: 01 cover detail, 02 warranty/market, 03 technical/year introduction,
  04 Nomade, 05 Mirage, 06 Super Mirage, 07 Grand Touring, 08 Grand Jubile,
  09 Sprintour, 10 Grand Record, 11 Le Champion and Team Champion,
  [12](https://www.flickr.com/photos/stronglight/50040395532/) and
  [13](https://www.flickr.com/photos/stronglight/50040394597/) specifications.
  All nine are complete adult drop-bar bikes; ladies'/mixte options remain
  in shared model entries. Le Champion/Team Champion are complete bikes also
  offered as framesets: no separate frameset rows. No out-of-scope models.
- Transcribed tables and checked all model captions. Nomade crank is **SI
  5SD2**, not 51; Team Champion has **Cinelli66 bars** and a literally named
  **Record I stem with recessed bolt**, resolving the table's misleading
  attachment of66 to the stem. Preserve unverified suffixes **SAX5RG2**,
  **AX5SD2**, **CGIII**, **SRP3**, and printed LeaderII/SuperLegeria spellings.
  Split saddle/seatpost, brakes/levers and derailleur/shifter cells.
- Nomade's caption says plural **Derailleurs: Huret ECO**, supporting front
  **8796** and rear **4399**. CompeV/VGT on Mirage/Super Mirage separates
  front **2603** from rear **4705**; Grand Touring SL/VGT separates front
  **2616** from rear **4705**, following manufacturer naming. The 1978 VGT
  matches RD-1500, replacing automatic obsolete4900 **4695**. No front
  specifications invented from the other bikes' rear-only names.
- Reviewed crosswalks: Campagnolo4030 crank/BB bundle → 1049/A Super Record
  **1509** (Catalogue17 crosswalk), 4061 brakes **582**, supplied pre-1983
  4062 levers **232**, 1037A pedals **3709**, 1039 headset **2963**, 1020 rear
  **4125**. Stronglight105B → 105Bis **1880**; early Cinelli66 **2809**;
  Pivo bar **11169**, Philippe351 **2895**; Maillard700 low-flange **3394**;
  Rigida13/20 27-inch **9894**; Weinmann124A **7776**, 256 **7928**, 999
  **7929**, 605 **8642**, Carrera **1167**; ItaliaSuperleggera **5504**.
  Plain Weinmann500 uses family **8636**, not washer variant1122.
- Rejected automatic **7233 Maillard Atom** for both high-end clusters:
  7233 is a single freewheel, but their portrait gear tables print five
  sprockets. Both remain NULL pending a supported 700/Racing alloy crosswalk.
  Sprintour's black five-speed Uniglide14–28 → FG-100 **7475**; its plain
  Shimano600 rear stays NULL (6100 versus contemporary Arabesque). Other
  deliberate NULLs are in the shared link-decision notes.
- User approved the reviewed SQL with "apply". Inserted **nine bikes,
  177 specs, 51 links**, using **21 existing labels**, and one new source.
  No component inserts/deletes/merges, existing bike/spec rewrites or new
  labels. Citation records album URL, printed year/market and scan numbers.
- Applied one guarded component correction: **4399 Huret Eco**, earliest
  attestation `year_from` **1980 → 1978**, retaining `year_to=1990`.
  Old source **156** → **431**. Title,
  description and search text unchanged. This supersedes c.1980 as earliest
  evidence, not absence from the full 1976 manufacturer catalogue; it does
  not establish an introduction date. Restoration: year_from1980/source156.
- Validation: all **20,999** prior generated spec INSERTs across95 existing
  CSVs unchanged; exactly177 new. All linked IDs reviewed by category/title/
  dates: sole conflict 4399 covered by the guarded update. Unique models,
  all cells within255 characters. Existing front/rear-brake, Huret Rival and
  integrated-lever tests pass; syntax/whitespace checks pass.
- Applied all **470 statements**: source **431**, bikes **1326–1334** and
  specs **22997–23173** inserted, exactly one source citation enriched and
  one component date/source updated. No existing bikes/specs, brands or labels
  changed. Rerunning the same SQL affected **zero rows** in every table.
- Direct readback matches **all 177 approved SQL specs** by bike, canonical
  and raw label, value, component ID (including NULL) and source 431.
  Generator/live comparison independently matches all 177, without missing,
  ambiguous or changed entries. All new bikes/specs have source 431; the source
  has country US and the full original album citation. Huret 4399 now has
  year_from 1978, year_to 1990, source 431.
- Quality report: **zero whole-DB structural errors**, no review findings in
  the nine bikes, their specs or corrected component. No duplicate specs or
  source gaps found. No component identities were inserted, so no new component
  duplicate candidates were introduced; no merges were necessary. Existing
  unrelated review candidates remain outside this task.
- Live Motobecane catalogue totals: 1974 US 6 bikes/117 specs/44 links;
  1975 US 8/154/65; c.1976 US 8/154/56; 1978 US 9/177/51;
  1984 GB 12/245/62. Removed task downloads, compact transcriptions, SQL and
  reports after validation; the maintained CSV and original source URLs above
  retain the transcription/provenance. Shared `bike-update.sql` was restored.

## Circa 1976 US catalogue — loaded 2026-11-17

- Source: [Stronglight Flickr album](https://www.flickr.com/photos/stronglight/albums/72157602026900257/),
  specification scans [14](https://www.flickr.com/photos/stronglight/1386178520/)
  and [15](https://www.flickr.com/photos/stronglight/1386192018/), checked
  against portraits pp.3, 9, 11 and 13. The album is explicitly **c.1976**,
  dated by its uploader from the optional Cyclone GT. No printed year has
  been established: the CSV's 1976 is an estimated catalogue year, not a
  verified imprint date. US market is inferred from repeated C.P.S.C. equipment
  statements and inch sizes; the back cover provides no distributor address.
- New CSV: `bike_specs/1976_motobecane_us_spec.csv`. Eight complete bikes:
  Nomade, Nomade Sprint, Super Mirage, Grand Touring, Grand Jubile, Grand
  Record, Le Champion and Team Champion. The actual portrait and table spell
  **Grand Jubile**, despite the uploader's Jubilee caption. Excluded Nobly/10:
  upright Tourist bars, fenders, carrier and kickstand; a town bike, including
  its men's version. Nomade's touring-bar mixte version remains in the shared
  road model under the established ladies'/mixte rule. No framesets included.
  Cover, factory photos, intervening illustrations and the unrelated modern
  Weinmann lever-cover photograph are not specification sources.
- Transcribed anew, rather than copying the 1975 CSV. Notable differences:
  Vitus Grand Touring, Nomade Sprint/Super Mirage, AX5 and alternative 49D
  cranks, treated Idéale 80 Special, Olympic pedals, Sedicolor chain and
  Michelin Elan tyres. Split rims/tyres, saddle/seatpost and brake/lever text.
  Stem/down-tube shifter descriptions have their own column. VGT Luxe and
  the Jubile/Cyclone GT alternative describe rear models only: no front
  specifications invented. Nuovo Record and Challenger group entries provide
  the named front/rear specifications under the existing convention.
- User approved the reviewed SQL with "apply". Inserted one source
  **430** (`1976 Motobecane (US) catalogue`), eight bikes **1318–1325**,
  154 specs using 21 existing labels, 56 links; no component inserts, merges,
  deletions or changes to existing bike/spec values. Source citation includes
  the CSV, Flickr album and approximate dating.
- Link review corrected automatic Idéale 80 **5648** to treated Speciale
  Competition **5652**; added Pivo Professional bar **11169** and explicit
  Grand Record Weinmann 999 **7929**. Existing period mappings include
  Nuovo Record rear **4125**, front **2297**, VGT Luxe **4704**, Campagnolo
  Record crank **1496**, hubs **3259/3260**, and Michelin Elan **6834**.
- Applied component update: Sedis Sedicolor **8764**, `year_from` **1979 →
  1976**, retaining `year_to=1979`; old source **177** → **430** through the
  guarded date update. This is an approximate
  earliest catalogue attestation, not a claimed introduction date; description,
  title and search text remain unchanged. No other component date changes.
- Deliberate NULLs: unqualified Normandy Luxe Competition does not identify
  gold-label **3388** versus red-label variants; Regina Oro 13–21 does not
  establish six-speed **2194**. AX5 lacks the suffix needed to choose a
  configuration; Tourney/Tourney Luxe lacks a sufficient code; alternative
  crank, pedal, freewheel and rear-derailleur equipment remains combined and
  unlinked. T.A. Professional, Pivo Randonneur and generic/house parts retain
  established uncertainty. See shared link decisions.
- Validation before review: compared all 20,845 prior generated spec INSERT
  statements across the 94 pre-existing CSVs; **none changed**, exactly 154
  added. All 56 proposed links reviewed by category, title and date; the sole
  date conflict is Sedicolor, covered by the proposed guarded update. All
  labels already exist. Live preflight finds no 1976 Motobecane bikes or
  source for this album before loading.
- Applied all 427 statements: exactly one source, eight bikes and 154 specs
  **22843–22996** inserted, one citation enriched and one component date/source
  updated. No new brands/labels or changes to existing bikes/specs. Rerunning
  the same SQL affected **zero rows** in every table.
- Direct readback matches all **154 approved SQL specs**, including bike,
  canonical/raw label, value, component ID (including NULLs) and source 430.
  The maintained generator/live comparison independently matches all 154
  with no missing, ambiguous or changed entries. Sedicolor is now 1976–1979,
  source 430. All new bikes/specs have source 430 and country US through it.
  Quality report: zero whole-DB structural errors; no review findings in the
  eight bikes, their specs or corrected component. Existing unrelated review
  candidates remain. No components were inserted, so no new component duplicate
  identities were created; no duplicate bike/spec rows were found.
- Existing front/rear-brake, Huret Rival and integrated-lever tests pass;
  generator syntax and `git diff --check` pass. Catalogue counts after load:
  1974 US 6 bikes/117 specs/44 links; 1975 US 8/154/65;
  circa 1976 US 8/154/56; 1984 GB 12/245/62.
- Removed the task's temporary downloads, construction helper, SQL and reports
  after validation; the maintained CSV and source URLs above preserve the
  transcription and provenance. Shared `bike-update.sql` was restored.

## 1984 UK distributor edition — loaded 2026-11-16

- CSV: `bike_specs/1984_motobecane_gb_spec.csv`. Loaded 12 bikes, 245
  specs across 25 existing labels, with 62 component links. No new
  component identities or spec labels. These figures describe the initial load;
  City-Becane was subsequently loaded and validated (2026-11-17, below).
- **Market correction to the search below:** despite VeloBase's US index
  title and the CPSC specification body, PDF p.1 explicitly states import and
  distribution in the UK by Cycles Stratton (UK) Ltd., Nutbourne, Chichester.
  The imprint reads December 1983; p.4 and other portraits explicitly identify
  the 1984 range. Use country **GB**, source label
  `1984 Motobecane (GB) catalogue`, source **429**. No source or 1984 bikes
  existed before this ingestion. New bike IDs **1306–1317**, spec IDs
  **22598–22842**.
- Evidence: [original PDF](https://velobase.com/CatalogScans/Motobecane/1984_Motobecane_catalog.pdf),
  p.10 specification spread, checked against portraits/captions on pp.2–9.
  Cover, production, warranty and rider prose on pp.1–3/6 were not turned into
  bike specifications. Model spelling follows the scan: **Grand Jubilee** and
  **Jubilee Sport**. Ladies' sizes/colours remain in the shared model entries;
  these are not duplicate bikes. Prolight is a complete bicycle, not a frameset.
- Split the source's combined blocks into individual canonical spec columns.
  Front/rear derailleur assignments use the distinct named models, not a blind
  copy of a rear name into the front slot. Mirage and Nomade do not name their
  front models, so no front spec was invented. Interclub retains CLB front
  cantilever (portrait p.8) and a combined rear spec for Weinmann 999 plus
  Maillard drum; neither half receives a speculative component link.
- Printed ambiguities preserved: `Cinelli Giro d’Italia 66` conflicts with
  Cinelli's 64/66 naming; `Stronglight D 9` is not silently changed to A9;
  Mt. Becane's fork is literally `Tandem type`; Super Mirage's table gives
  26.6 lb while its portrait p.7 gives 26.8 lb (CSV follows the table).
  Mirage's partly obscured hub table is supplemented only by the p.7 caption
  explicitly identifying Maillard hubs and front quick release.
- Supported mappings include Nervar 3020 → 10981, Maillard CX500 → 10986,
  Stronglight 107 → 1883, Super Record crank → 1509, Simplex SLJA522 → 7283,
  SJA102 → 2573, Hi-Stepper → 2443, titanium Duopar → 8173, SR MTP110 →
  10473 and SR CTP5/5E/6 → 5857/11316/5861. Plain Sedisport chains map to
  the named Sedisport row 8765 without adding an unprinted Delta treatment.
- Reviewed mappings: Le Champion's Record 1020 uses the period Nuovo
  Record v4 row 4126 (not obsolete steel Record 4131), with front 2300 and
  drilled lever 226. Mirage's 32T selects AR-GT 4723; Jubilee Sport's 28T
  exceeds standard ARX 4727's 26T limit and selects ARX-GT 4729. Helicomatic
  clusters up to 32T use existing original-equipment 600 SH row 8131, following
  the established Maillard/Peugeot crosswalk. Printed 34T clusters remain NULL
  because that row's documented range stops at 32T.
- Applied guarded `year_to` extensions to **1984**, attesting catalogue
  availability rather than manufacture endpoints; `year_from` stays unchanged.
  Old `year_to / source_ref`: Ofmega CX **1692: 1983 / 1**; Atom 440
  **3662: 1980 / 49**; Super Champion Gentleman **5183: 1983 / 294**;
  Weinmann A129 **5208: 1981 / 246**; Clement Criterium Cotone / Tipo 12 bis
  **8972: 1983 / 352**; Rigida 1320 27x1 **9894: 1981 / 360**.
  New `source_ref` is **429**. These existing identities
  match the printed model/configuration; no new duplicate rows are proposed.
  Keep the Gentleman rows 5183, 5217 (GTA), 5218 (GTA2), A129 finish row 5207,
  and Rigida 700C row 9895 distinct: no evidence of duplicate identities here.
- Validation before load: all **20,600** existing generated spec statements
  are unchanged across all pre-existing CSVs; this file contributes exactly
  245 additional statements. All 62 proposed links were reviewed by title,
  category, dates and distinguishing specs. Six date conflicts are covered by
  the guarded updates above. Existing front/rear-brake, Huret Rival and
  integrated-lever test files pass; `git diff --check` passes.
- User approved application with "apply". First run inserted one source,
  12 bikes and 245 specs, and updated exactly the six components above;
  no existing bikes/specs, brands or labels changed. Re-running all 635
  statements affected **zero rows** in every table.
- Live readback matches **all 245** approved values, labels and component IDs,
  including NULLs; regenerating their links against live component records
  also matches all 245. All specs have source 429 and all six corrected
  components have year_to 1984/source 429. The shared quality report finds
  **no errors or review findings in the loaded catalogue or six updated
  components**, including no duplicate specs, provenance gaps, category
  mismatches or linked date conflicts. Whole-DB structural errors: zero;
  unrelated existing review candidates remain. Live Motobecane totals:
  1974 US 6 bikes/117 specs/44 links; 1975 US 8/154/65;
  1984 GB 12/245/62. These are DB counts, not the old generated-file headings.
- **City-Becane included as Mountain — loaded and validated 2026-11-17.**
  PDF p.9 presents it alongside Mt. Becane and explicitly describes use in
  off-road conditions and on city streets. The photograph and p.10 table show
  26×2.125 tyres, cantilever brakes, derailleur gearing, a chrom-moly Inexternal
  frame and no city accessories. The table gives 12 speeds, 32.5 lb and sizes
  18 / 19½ / 22 inches. User approved including it as
  `Mountain`, based on construction/equipment and the off-road wording. Preflight
  found twelve existing 1984/source-429 models and no City-Becane row. P.9 identifies its rear as
  Duopar Eco; the p.10 table prints Duopar/Club. Preserve that source distinction
  in the CSV: rear `Huret Duopar Eco (PDF p.9)`, front `Huret Club`. The rear
  stays NULL pending the existing 4276 / 4400 reconciliation.
- **City-Becane application:** user approved SQL with "apply". Inserted bike
  **1335** and specs **23174–23193**, across 20 existing labels, reusing GB
  catalogue source **429**. The local CSV now includes it directly
  before Mt. Becane; all twelve prior CSV rows are unchanged. No new component,
  brand, source or label rows and no component date/description changes.
  Six links: front Huret Club → **2379** (existing plain-Club/Club II
  crosswalk, sold as Club from 1982), Nervar 3020 → **10981** (40×50 is within
  the row's ring ranges), black Sedisport → **8765**, six-speed Helicomatic
  13–32 → **8131**, SR CTP5E → **11316**, Helicomatic hub → **3387**. Every
  linked component includes 1984 in its recorded availability. Seatpost and
  cluster overrides extend the existing Mt. Becane decisions to City-Becane.
- Unlinked text remains for the printed Tange AW27 headset, Espace chrome bar,
  Polygon 10440 stem, handlebar ratchet shifter, generic cantilevers, Duopar Eco
  rear, Shimano Fold-Fit pedals, maker-only `Sella Italia` saddle, Weinmann
  431 26×1.75 rims and Hutchinson 26×2.125 tyres, plus frame/fork/gearing/extras.
  Existing rim 7780 is sourced as 431 BMX without a documented 26-inch size;
  no fitment/size equivalence is established here. Do not infer a brake model
  or promote the generic shifter/saddle wording into a component identity.
  The p.10 fork wording `Tandem type` is retained literally.
- City-Becane readback matches every approved bike field, all 20 spec values,
  raw labels, provenance references and six component IDs, including all fourteen
  NULL mappings. Rear Duopar Eco is spec **23182**, retained NULL pending the
  existing 4276 / 4400 identity review. All prior bike/spec rows, all component
  identities and the source record are unchanged. Catalogue 429 now has
  **13 bikes / 265 specs / 68 links**.
- First SQL load: 50 statements, exactly one bike and twenty specs inserted;
  the six links were set on insertion. Full rerun affected zero rows in every
  statement. No brand, source, label, component or other table count changed.
  All 13 test files pass; the existing quality-link-decisions test now covers
  the City-Becane and Super Mirage Eco guards without another test file.
- Generator comparison across all 96 loaded catalogues: all 21,176 prior
  generated specs unchanged, exactly twenty new City-Becane specs. After load,
  21,196 paired specs, 21,181 unchanged and the same fifteen pre-existing lost
  mappings; zero gained/changed/missing/ambiguous identities. Whole-DB quality
  findings are identical to the baseline: zero errors and 1,951 reviews
  (1,566 incomplete dates, 326 date conflicts, 35 broad freewheel labels,
  24 descriptions at limit). No new finding involves City-Becane.
- Temporary SQL, snapshots, CSV backup and helpers were removed after validation,
  together with the four original 1984-ingestion scratch files retained solely
  for City-Becane. The maintained thirteen-model CSV is preserved. Source URL,
  pages and the reconstruction evidence remain in these notes; no pending
  City-Becane ingestion or retained scratch dependency remains.

### Initial search (superseded market identification)

- Recommended next source: [1984 US catalogue, VeloBase PDF](https://velobase.com/CatalogScans/Motobecane/1984_Motobecane_catalog.pdf).
  Downloaded and visually checked PDF pp. 9–10: ten scanned spreads in total;
  the last spread contains a readable 13-model specification table, including
  road, touring, tandem and mountain equipment. Named parts include Simplex
  SLJ A 522, Campagnolo 980, Stronglight 107 SP / 99, Nervar 3020,
  Weinmann 405 / 506 and Maillard Helicomatic. These are printed identities
  to reconcile, not approved component mappings.
- The [VeloBase catalogue index](https://www.velobase.com/Pages/Resources/CatalogScans.aspx)
  labels it US and the table includes CPSC equipment; the actual UK distributor
  imprint above supersedes that market identification. PDF p. 9 calls the
  mountain bike the 1984 model. City-Becane is presented alongside Mt. Becane;
  its scope was subsequently approved on 2026-11-17 as recorded above.
- Other indexed options: 1976 US, 1978 and 1979 US. The existing processed
  catalogue notes cover 1974 and 1975 only. The 1984 edition is recommended
  to extend coverage into another decade, rather than on an assumed link rate.
- This initial search made no CSV, SQL or DB changes; subsequent preparation
  and retained review files are recorded above.

## Pivo handlebar link — 2026-11-14, user approved

- Linked 1975 Grand Jubile spec 3910, "PIVO Professional", to 11169 Pivo
  Professional (bar), 1973-78. The newly ingested Brügelmann 1973 p. 22
  lists Pivo Profi; later catalogues confirm the long reinforced sleeve.
- Added a 1975 Grand Jubile-scoped generator override. Before/after generation
  across all 86 CSVs is identical (6522 generated links): the current matcher
  already resolves this newly added component; the override records the choice.
- Applied the guarded NULL-only update in
  `/private/tmp/handlebar-link-review-2026-11-14/proposed.sql`: one row affected.
  No component or date changes. Handlebars now 232/954 linked.
- Still unresolved: Grand Touring "PIVO Professional, Randonneur bend"
  (the new road-bar row does not establish this bend); Tandem "PIVO Professional
  front, comfort rear" (two different bars in one spec).

## 1974 Motobecane — `1974_motobecane_spec.csv` (7 bikes, 136 specs, 43 linked)

- Source (added 2026-10-21): very likely VeloBase CatalogScans/Motobecane `1974_Motobecane_catalog.pdf` or `Motobecane1974.zip`, both titled "Motobécane - MBK 1974 US Catalog" (https://velobase.com/Pages/Resources/CatalogScans.aspx). Inferred from the title and year (the CSV has a page-reference column, as a scanned catalogue would), not confirmed. The index title states the market, so US is stated, not inferred.

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
- 2026-10-04 compound-cell split (CSV rewritten, old bike_spec rows deleted,
  reloaded; 119 -> 131 specs, 35 -> 38 linked). Derailleur cells carried the
  shifter ("SUN TOUR V.G.T., stem power shifter"): shifter text moved to a
  new Shifters column — "SUN TOUR stem power shifter" -> 6263 PUB-10, "SUN
  TOUR down tube ratchet shifter" -> 8056 PDL-M, "SIMPLEX PRESTIGE stem
  shifter" unlinked (no 1970s Simplex stem lever row). Rear derailleur
  overrides re-keyed on the bare names: 'sun tour vgt' -> 4695 (4900 VGT —
  the plain "V.G.T." sits beside a "V.G.T. LUX" in the same catalogue, so
  it is the pre-Luxe part), 'sun tour vgt lux' -> 4704 (4902). Saddle cells
  "… with alloy / CAMPAGNOLO seat post" -> Saddle + Seat Post column;
  "CAMPAGNOLO seat post" -> 5749 (1044 Record). Brakes cells "WEINMANN 999
  … with extension / quick release levers" -> Brakes + Brake Levers
  ("WEINMANN extension levers" etc. unlinked — no model named). Then the
  Derailleur column was replaced by explicit Front Derailleur / Rear
  Derailleur columns: the groupset bikes keep their front rows (Prestige,
  Jubile, Nuovo Record), the two SunTour V-GT bikes (Mirage, Grand Touring)
  get none — V-GT is a rear-only model and the catalogue never names the
  front mech, so the split's copied rows were wrong. 131 -> 129 specs.
- 2026-10-05 re-link pass: Grand Touring "NERVAR cotterless, 40-52 alloy
  chainwheel rings, with alloy guard" -> 1653 Nervar (3-pin,
  alloy/cotterless), the only cotterless Nervar row. The steel cottered
  Nervar cranks on the other bikes still have no row.
- 2026-10-06: Wheels column (aliased to Rims only, so tyres sat in the Rims
  line) renamed "Wheel Rims & Tires" in the CSV so splitCellValue gives
  Rims + Tyres; export debris (`27x1.25\  … tires"`) cleaned and a ", "
  added between rims and tyres. "with HURET spoke protector" moved from 6
  Freewheel cells to Extras ("ATOM or MAEDA, 14-32" comma dropped). Weinmann
  Sprint rim override re-keyed to 'weinmann sprint alloy 27x125"' (7778).
  Old rows 3662 / 3680 / 3698 / 3716 / 3736 / 3755 / 3773 (Wheels), 3658 /
  3676 / 3694 / 3712 / 3732 / 3751 (Freewheel), 3665 / 3683 / 3701 / 3719 /
  3739 / 3758 (Extras) deleted and reloaded. New links: "CLEMENT ELVEZIA
  tubular" -> 6752, "CLEMENT PARIS-ROUBAIX Tubular" -> 6762. 129 -> 136
  specs, 40 -> 42 linked.

## 1975 Motobecane — `1975_motobecane_spec.csv` (11 bikes, 205 specs, 58 linked)

- Source (added 2026-10-21): very likely VeloBase CatalogScans/Motobecane `1975_Motobecane_catalog.pdf` or `Motobecane1975.zip`, both titled "Motobécane - MBK 1975 US Catalog" (https://velobase.com/Pages/Resources/CatalogScans.aspx). Inferred, not confirmed, as for 1974. US is stated by the index title.

- "Catalog Page" ignored. Frame Size and Wheel Rims & Tires cells had the same
  inch-mark debris; rewritten (`27" x 1-1/4"`).
- Riviera and Nobly/3 had "STURMEY ARCHER 3 speed hub" in the Derailleur
  column; moved into Hubs ("... front / STURMEY ARCHER 3 speed rear") and
  Derailleur blanked. They link to the brand-level "Sturmey Archer" hub row
  because the DB has no AW row.
- "Wheel Rims & Tires" added to SPLIT_LABELS (Rims + Tyres). Tyres link via
  overrides (Elvezia, Paris-Roubaix → Clement); the Super Champion rim model
  isn't named so Rims stay unlinked.
- 2026-10-06, cell splitting added to the generator: the three "SUPER
  CHAMPION rims, X tubulars" cells now split into Rims "SUPER CHAMPION
  rims" + Tyres "ELVEZIA / GRAN-TURISMO / PARIS-ROUBAIX tubulars" instead of
  the whole cell under both labels. Old rows 3939 / 3940 / 3958 / 3959 /
  3977 / 3978 deleted and reloaded; overrides rekeyed to the tyre part.
  Still 205 specs, 58 linked. CSV edit (user, same day): commas added to
  the other eight rims-and-tyres cells ("Steel rims 27" x 1-1/4", gum wall
  tires", "WEINMANN H. P. alloy knurled sides, 27" x 1-1/4" MICHELIN high
  pressure tires"; Grand Jubile's " ,27" typo fixed to ", 27"), so they split
  too: rows 3790 / 3791, 3807 / 3808, 3823 / 3824, 3841 / 3842, 3860 / 3861,
  3879 / 3880, 3898 / 3899, 3919 / 3920 deleted and reloaded as Rims + Tyres.
  No new links (no rim or tyre model named). 205 specs, 58 linked.
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
- 2026-10-04 compound-cell split, same pattern as 1974 (194 -> 208 specs,
  52 -> 58 linked): Shifters column — "SUN TOUR stem power shifter" x2 ->
  6263, "SUN TOUR down tube ratchet shifters" -> 8056, "HURET Challenger
  stem shifter" -> 6073 (Challenger levers 1725-1782), Simplex Prestige
  unlinked; Seat Post column — "CAMPAGNOLO seat post" x2 -> 5749, alloy x3
  unlinked; Brake Levers column — Weinmann lever halves, unlinked. Rear /
  front Challenger overrides re-keyed to bare 'huret challenger' (4273 /
  2388), 'sun tour vgt luxe' -> 4704. Derailleur column then replaced by
  explicit Front / Rear Derailleur columns, front blank on the three
  SunTour V-GT Luxe bikes (Tandem, Mirage, Grand Touring) — see 1974 note.
  208 -> 205 specs.

## Link-gap pass on the weakest categories — 2026-10-08

- 1974 Le Champion Handlebars "T.T.T. RECORD" -> 2771 3ttt Record (1st
  Version), via override. Judgment call: it is the only plain "Record" bar;
  the Record Competizione rows are a different, named model. 42 -> 43.
- Left unlinked: "PIVO Professional" x3 (1975; only a bare "Pivo (deep drop
  bars)" row), "WEINMANN extension levers" / "quick release levers" (the
  Weinmann AG lever rows are velobase cosmetic variants, QR one dated 1971
  only), "ATOM 14-26" / "ATOM or MAEDA" clusters (three cosmetic Atom
  5-speed variants, nothing in the text to choose on), "T.T.T. Franco Belge"
  has no row.


- 2026-10-11 (1970 Peugeot pass): the 'stronglight competition' headset
  override moved from 3124 (V4 Competition earlier version, two-pin
  locknut, 1950-60) to 3125 (later version, octagonal locknut, 1960-80).
  The five 1974 / 1975 Grand Touring, Grand Jubile and Grand Record
  "STRONGLIGHT Competition" headset specs were re-linked with a one-off
  UPDATE (stronglight-headset-fix.sql, 5 rows).

- 2026-10-30: 1975 Le Champion "GRAN-TURISMO tubulars" -> 9056 Vittoria Granturismo (the only Gran Turismo tubular row, 1974-78; user's call, maker not printed). +1.

- 2026-11-06 crankset pass: 1975 "TOURNEY Alloy Cotterless 40-52 chainwheel with alloy guard" -> 9562 Takagi Tourney, Three Arrows (row added after the Tourney "left unlinked" note; forged alloy cotterless double with alloy guards, 39-49T inner). 9562 year_to 1974 -> 1975. +1. T.A. Professional still unlinked: rows exist as "Professionnel" (1858 5 vis / 1859 3 attaches, both 1970-84) but nothing picks between them.
- 2026-11-13 Brakes sweep (user approved): 1974 Grand Record "WEINMANN 999 De
  LUXE or UNIVERSAL 61, Center Pull, quick release" -> 7929, the first-listed
  option, as the other 1974-75 Weinmann 999 bikes.
