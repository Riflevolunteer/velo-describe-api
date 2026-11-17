# Mavic catalogs processed so far

## Hub description and rim overlap review — 2026-11-17

Focused follow-up to the open audit actions; no DB changes applied. Read live
rows and bike usage, source records, the current duplicate report, the original
1986-87 / 90-91 hub tables, 1997 road/trekking rim spreads and 1996/1999 guide
rim listings. This is not a new catalogue ingestion or approval of merges.

### 3397 Mavic 500 RD — description correction pending approval

[90/91 p.10](https://www.disraeligears.co.uk/site/00_main_images/mavic_trade_catalogue_9091_page_10_main_image.jpg),
the row's cited source **121**, explicitly distinguishes front **500 RD**,
100 mm, **230 g steel QR / 215 g alloy QR**, from rear **506 RD**, 126 mm,
**280 / 260 g**. It describes polished forged dural, a light alloy axle and
adjustable sealed cartridge bearings. [1986-87 p.16](https://www.disraeligears.co.uk/site/00_main_images/mavic_-_trade_catalogue_1986-1987_page_16_main_image.jpg),
source **119**, gives the same weights and a footnote offering a 121 mm
five-speed rear. Neither checked table calls 506 RD a pair code. The existing
description's front 236/212 g and rear 286/261 g do not match its cited 90/91
table; its separately listed 121 mm weights are not supported by those pages.

Live before value, **3397**, brand 31, category 13, source_ref 121,
title/search_text `Mavic 500 RD`, years 1975-1991:

> Mavic 500 RD, France, 462 grams. Sealed adjustable annular-bearing hub, forged body, steel or dural QR. Front 100 mm 236/212 g; rear 5-sp 121 mm 275/250 g, 6/7-sp 126 mm 286/261 g. Pairs 505 RD, 506 RD.

Proposed replacement, **231 characters**:

> Mavic 500 RD, France, 462 grams. Forged polished-alloy body, alloy axle, adjustable sealed cartridge bearings. Steel/alloy QR: front 500 RD, 100 mm, 230/215 g; rear 506 RD, 126 mm, 280/260 g. A 121 mm 5-speed rear was also offered.

The independent existing 462 g record is retained without inventing a skewer,
front/rear or pair attribution. Correcting the catalogue specification does not
establish what that specimen measurement represents. Preserve source_ref **121**,
title/search_text, dates and both existing bike links **14700 / 15661**.
Only description changes; no numbered hub insertion, rename or link correction.
Restoration, only if deliberately justified: restore the exact old description
above on 3397, guarded by title/brand/category/source and the exact new text.

Prepared SQL, expected one row then zero on rerun, retained for approval at
`/private/tmp/mavic-quality-20261117.vs57u6/pending-hub-description.sql`.
Read-only preflight matched exactly the intended row and confirmed length 231
within 255. Live readback also confirmed both Peugeot `Mavic 506 RD` specs still
use 3397. No code change or test suite run needed for this text-only proposal;
generator component matching reads ID/title/category, not description. After
approval, readback/idempotency, link and quality validation remain required.

### Rim overlaps — no merge proposed from this pass

The [1997 maker catalogue](https://labibleduvelocataloguesmavic.blogspot.com/p/mavic-1997.html)
spreads **3** (road) and **4** (MTB/trekking) distinguish tubular/clincher Reflex
and CXP 30, list coating/colour options, and show T261 only in silver. Broad
rows and finish-specific rows overlap in coverage, but that alone does not
identify which record should absorb a construction or edition difference.

**T261 9983 / 10182** needs a more specific crosswalk before merging:

- [Guida '96 scan 16, printed p.119](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_96_-_componenti_scan_16_main_image.jpg),
  source **357**: T 261 Argent, 700C, **26 mm**, 540 g, 36/40/48 holes,
  silver anodised, double stainless eyelets, hybrid/tandem use.
- 1997 maker spread 4: T261, **23 mm in the profile drawing**, 540 g,
  36/40/48 holes, recommended 28-35 mm tyres, double-wall profile, silver.
- [Guida '99 scan 16, printed p.104](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_99_-_componenti_scan_16_main_image.jpg),
  source **353**: T 261 Argent, 622, **20 mm**, 540 g, 36/40/48 holes,
  double wall/stainless eyelets, silver anodised, trekking/touring/tandem.

10182 currently carries the 1999 20 mm/double-wall wording and a 1996-1999
range but source_ref **357**. Thus the older-source attribution does not support
all its description as written. Do not silently interpret 26/23/20 as outside
versus inside measurements or assert a generation change; obtain a numbered
profile/specimen crosswalk or manufacturer clarification first. Both rows have
zero bike links; neither appears in generator overrides. Kept unchanged.

Reflex **9975 / 10197 / 10198**, T217 **9981 / 10184 / 10185** and tubular CXP 30
**5062 / 10199** also remain open for construction/edition reconciliation.
Guida '96 scan 16 prints 22 mm for T217 whereas '99 scan 16 gives 17 mm;
the '97 drawing gives 22 mm. Guida '96 scan 17 places CXP 30 in the tubular
section but prints 520 g, unlike the maker's 465 g tubular / 520 g clincher.
Guida '99 scan 17 separately lists the 465 g tubular. These conflicts need
explicit reconciliation, not an automatic merge or a guessed measurement basis.
No correction made to 10197's hard-anodised wording: Guida '99 scan 17 itself
prints that wording for Argent, so it is not a proved transcription error.

Current `duplicate-report --brand=Mavic` still gives 13 pairs (7 configuration,
4 generation, 2 variant) and does not flag these broad/finish overlaps. Schema
inspection found component_id only in component_detail and bike_spec; usage was
checked, but no deletion is prepared. Original existing source files were left
alone. Task-created downloads/indexes removed after recording URLs and findings;
only the pending description SQL is retained. TODO records remaining actions.

## General quality audit — 2026-11-15 (read-only)

Scope: all live Mavic components (brand 31), all their bike links, and all
spec values containing Mavic. No component, link, date or generator changes
were applied. This was a structural/identity triage with targeted scan checks,
not a fresh extraction of every catalogue or verification of every specimen.

- Live baseline: **243 components**, **94 linked specs**; **182 Mavic-text specs**,
  of which **88 unlinked** (includes generic maker text, alternatives and Extras;
  this is not a count of missing models). **44 components** retain source_ref 1
  (VeloBase only); no component lacks a source reference or description.
- Ran the existing quality-report snapshot reader and checks, then scoped
  findings to Mavic components, linked/Mavic-text specs, owned groups and
  category-brand entries. **No structural errors or linked date conflicts**;
  **12 incomplete-date findings**: 3406, 4344, 5044, 5050, 5064, 5081, 5095,
  5096, 5101, 5106, 6823, 6975. Missing dates remain unknown, not inferred.
- `duplicate-report.js --brand=Mavic`: 13 grouped pairs (7 configuration,
  4 generation, 2 variant), no automatic merge/review candidates.
  `--near --reviewed`: seven already-reviewed kept-apart pairs; no new near
  candidates. `--paren --reviewed`: zero. These reports miss the manually
  identified naming/coverage overlaps below and do not close them.

### Findings and next evidence

1. **Coating specificity in existing bike links (resolved by source review and
   user-approved repair below):** specs **1607**
   (1993 Bianchi Nth FS), **1624** (Super Grizzly), **1658** (Grizzly) all said
   only `Mavic 231` and linked to **5071 M 231 CD** through the unscoped
   `mavic 231` Rims override. Mavic's [90/91 p.27 scan](https://www.disraeligears.co.uk/site/00_main_images/mavic_trade_catalogue_9091_page_27_main_image.jpg)
   explicitly distinguishes neutral-anodised **8191 M 231** from hard-anodised
   **5071 M 231 CD**; **9972 Ceramic** is also a separate row. The scan was
   visually checked. At audit time the CSV lacked the coating and the original
   1993 Bianchi product tables were unverified (see the bike catalogue notes).
   This initially flagged insufficient evidence for CD. The recovered Bianchi
   tables below now confirm 1607's CD identification and contradict the CD
   links on 1624/1658. The latter now use standard row 8191. The 2026-11-04
   extension of 5071 to 1993 is now supported specifically by Nth FS.
2. **Existing-row mapping opportunity:** specs **14700** (1986 Peugeot PX)
   and **15661** (1987 PX 10), `Mavic 506 RD`, were NULL. Existing **3397
   Mavic 500 RD** includes the 506 RD rear configuration and covers those
   years. The source review below now confirms both proposed mappings to
   3397; both links and scoped generator overrides are now applied and validated
   in the entry below.
3. **Description/source discrepancy (corrected below):** **1643 Mavic 637 (MTB)**
   ended `170/175/180 mm, 680/690/700 g.` Its cited source **121**,
   [90/91 p.31 scan](https://www.disraeligears.co.uk/site/00_main_images/mavic_trade_catalogue_9091_page_31_main_image.jpg),
   visually reads **660/680/700 g** for those lengths. The user-approved
   correction is applied and validated in the entry below. No bike links use
   this row.
4. **Dates need identity-specific evidence:** **5099 Open Pro (1986)** and
   **5100 Open Pro SUP Maxtal (1980–90)** are VeloBase-only rows alongside
   **10183 Open Pro Argent SUP UB Control (1999)**. Their dates and relationship
   need a maker/specimen crosswalk, not automatic extension/merging. Likewise
   **2410 870 SSC 31.8 mm (1984–92)** starts four years before **2409 870 SSC
   (1988–92)**, whose 1988 introduction is recorded above. Find positive
   31.8 mm version evidence before changing either identity/date. None of these
   rows has a bike link.
5. **Manual rim-overlap queue missed by automatic grouping:** compare
   **9975 Reflex tubular / 10197 Argent / 10198 Blu** (375 g); **9981 T217 /
   10184 T217 Argent / 10185 T217 CD** (470 g); **9983 T261 / 10182 T261
   Argent** (540 g); **5062 CXP 30 tubular / 10199 CXP 30 Argent** (465 g).
   Existing broad descriptions already include some of the separately inserted
   finishes. Reconcile the 1996/1997/1999 scans and the variant policy to decide
   whether to merge or narrow the broad row. These are candidates, not proven
   duplicates; no links use these rows. Keep the already-reviewed **10597 CXP
   Titane clincher / 10607 CXP 30 Titane tubular** distinction recorded in
   cross-catalog-notes.md.

Previously recorded questions remain evidence gaps: Sprint, Velotech, Titan,
190 NE versus 190FB/195NE, bare 400, 630 lettering, early rim identities and
the conflicting 310 headset weights. Rechecked 1986–87 p.22: it does print
82 g for 311/312; this does not resolve the 1984 102 g discrepancy. Earlier
historical entries saying 5089/5090 probably duplicate should be read against
their current polished versus silver-anodised descriptions; no merge supported
by this pass. Old claims that 5097 ends in 1989 or that Helium has no row are
historical: 5097 now ends in 1993 and Helium is represented by 9985/10376/10377.

Validation: read-only inventory/source/link queries, consistent-snapshot
quality checks and all three duplicate modes. No regeneration was necessary
because mappings and component records were unchanged. Task-created scripts
and downloaded page copies were removed after recording the source URLs here.

## Peugeot 506 RD hub identification — 2026-11-15, read-only review

- Visually checked source **119**, [Mavic 1986–87 printed p.16](https://www.disraeligears.co.uk/site/00_main_images/mavic_-_trade_catalogue_1986-1987_page_16_main_image.jpg):
  heading **500 RD Hubs**, front **500 RD**, 100 mm; rear **506 RD**,
  **126 mm**, 24/28/32/36/40 holes, **280 g steel QR / 260 g alloy QR**.
  Footnote offers the rear in 5-speed 121 mm width. Thus 506 RD is the road
  rear configuration within the existing 500 RD family; the audit's earlier
  wording calling 506 RD a pair code was inaccurate. The source does not
  justify inferring which skewer material Peugeot fitted.
- Source **310**, [1986 Peugeot page](https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1986.html),
  image **CATALOGUES CYCLES PEUGEOT 1986 (18)** / `b18.jpg`, US specification
  table: **PX** column explicitly prints **Mavic 506 RD** under Hubs and a
  six-sprocket Maillard 700 Super Plus 13/14/15/17/19/21 freewheel. Original
  table visually checked. Before repair: **14700**, bike **884**, year **1986**,
  label **12 Hubs**, source_ref **310**, value `Mavic 506 RD`, component NULL.
- Source **312**, [1987 Peugeot USA printed p.4](https://www.bikeboompeugeot.com/Brochures%20USA/Peugeot%201987%20USA%20Brochure/Peugeot%201987%20USA%20Brochure%20Page%204.jpg):
  **PX10** sidebar explicitly prints **Mavic 506 RD**, with the same six-cog
  freewheel. Visually checked. The old Blogger `lh3` proxy returned 404;
  BikeBoomPeugeot provides a working original scan. Before repair: **15661**, bike
  **933**, title **PX 10**, year **1987**, label **12 Hubs**, source_ref
  **312**, value `Mavic 506 RD`, component NULL.
- **Supported proposal:** link both existing specs **NULL -> 3397 Mavic 500
  RD**. This family record already covers the 126 mm 506 rear and is dated
  **1975–1991**, source_ref **121**. No insert, rename, year widening, CSV
  value/label change or split is needed. Do not substitute 8159 550 RD (its
  rear is 556 RD), 3400 510 (516 rear), or 3408 580 CX (80 mm front).
- **Applied on user approval, 2026-11-15:** specs **14700 / 15661 NULL ->
  3397**. Added `mavic 506 rd` Hubs overrides scoped to **1986 PX / 1987
  PX 10**. Values, CSVs, source references 310/312, component dates and all
  existing IDs were preserved. Guarded transactional SQL affected exactly
  **two specs**; rerun **zero**. Restoration is component_id 3397 -> NULL on
  only 14700/15661, guarded by bike 884/933, label 12, source 310/312 and
  exact `Mavic 506 RD` value.
- Compared the actual generator through matching/integrated controls across
  **93 loaded CSVs / 20,600 specs**: exactly those two mappings changed,
  generated links **7,324 -> 7,326**. No other value/target changes;
  `bike-update.sql` was untouched. Live readback confirms both targets, dates
  within 1975–1991 and no duplicate specs. Scoped consistent-snapshot quality
  checks on 3397 and all its linked specs found **zero findings**. Verified
  overrides do not match other bikes/years. `npm test` passed all nine test
  files and `git diff --check` passed. Temporary SQL/comparison files removed
  after validation.
- Separate description issue noticed during identification: 3397 currently
  ends `Pairs 505 RD, 506 RD.` The 1986–87 table labels 506 RD as the rear,
  so that wording needs a source-aware review; it is not grounds to create a
  duplicate hub row. Component-description changes were not part of the
  approved link repair and remain open.
  Downloaded HTML/scans and temporary image indexes were removed after recording
  evidence; the SQL retained for approval was removed after application.

## Bianchi M 231 coating evidence — 2026-11-15, read-only review

- New source recovery: [Upcycles, 1993 Bianchi USA catalogue](https://upcycles.cc/blogs/catalog-archive/1993-bianchi-catalog-usa),
  [complete PDF](https://cdn.shopify.com/s/files/1/0786/6705/5385/files/1993_Bianchi_catalog_-_USA.pdf?v=1751937419).
  Retrieved intact (18,861,771 bytes, 31 PDF pages). It has the same hand-marked
  93 cover and dealer annotations as the previously truncated source. Visually
  checked **PDF pages 24–25** (no printed page number visible), not the whole
  catalogue. This supplies the missing original-bike evidence for the three
  specs; no further specimen-photo hunt is needed for their factory rim finish.
- **Nth FS, spec 1607, bike 104:** PDF p.24 prints **Mavic 231 hard anodized**.
  This supports its existing **5071 M 231 CD** link, using Mavic 90/91 p.27's
  explicit hard-anodised CD versus neutral-anodised standard distinction.
- **Super Grizzly, spec 1624, bike 105:** PDF p.24 prints **Mavic 231 silver
  anodized**. **Grizzly, spec 1658, bike 107:** PDF p.25 prints the same.
  Their former **5071 CD links were wrong**; the supported target is **8191
  M 231**, the standard neutral/silver-anodised version. The product photos
  show silver rims as corroboration; the printed specification is decisive.
- Root cause: the 1993 CSV cleanup explicitly removed rim finish words and
  collapsed different specifications to `Mavic 231`; the unscoped override
  then assigned all three to CD. This supersedes the audit's earlier
  ambiguity and the original all-three-CD mapping in the Bianchi bike notes.
- **Reviewed repair (subsequently applied below):** restore `Mavic 231 hard anodized` for
  1607/Nth FS and `Mavic 231 silver anodized` for 1624/Super Grizzly and
  1658/Grizzly in both CSV and existing live spec values (UPDATE in place,
  preserve spec IDs; regeneration alone would insert duplicate specs).
  Keep 1607 -> 5071; relink 1624/1658 **5071 -> 8191**. Add 1993 bike-scoped
  overrides for the restored values and replace the unqualified `mavic 231`
  -> 5071 override with an ambiguity guard. Compare all loaded CSV mappings.
- **Associated date correction (subsequently applied below):** 8191 was **1990–1991**,
  source_ref **121**. Extend only year_to **1991 -> 1993**, source_ref
  **121 -> 47**, using these original 1993 fitments; keep its description and
  year_from. 5071 remains **1990–1993**, source_ref **121**. No new component
  row or merge is needed. This is availability evidence, not proof of an end
  of production in 1993.
- The pre-repair readback showed all three specs saying `Mavic 231`, source_ref
  **47**, and linking to **5071**. No DB, CSV or generator changes were
  made during this review. Original source URLs and page references are retained
  here; task-created PDF/text/renders were deleted after review.

### Application and validation — 2026-11-15, user approved

- Applied the reviewed repair in place: **1607** now `Mavic 231 hard anodized`
  -> **5071**; **1624 / 1658** now `Mavic 231 silver anodized` -> **8191**.
  Source_ref **47**, raw label, bike/spec IDs and one Rims spec per bike were
  preserved. Restored exactly these three cells in `1993_bianchi_spec.csv`.
- **8191** year_to **1991 -> 1993**, source_ref **121 -> 47**; year_from
  **1990**, description and identity unchanged. These old values and the
  original `Mavic 231` -> 5071 assignments above provide the restoration
  baseline. No component insert/delete/merge and no loss/gain of links.
- Generator now uses 1993 bike-scoped finish mappings for these three bikes;
  bare `mavic 231` is explicitly ambiguous. Verified it stays NULL even with
  only one candidate, and the finish overrides do not apply to other bikes
  or years. The earlier all-three-CD mapping is superseded.
- Compared the actual generator's preprocessing, matching and integrated-lever
  results for **93 loaded CSVs / 20,600 specs** before/after: exactly the three
  expected value changes and two target changes, **7,324 generated links** in
  both snapshots. Existing `bike-update.sql` was untouched. These are generated
  CSV counts, not a claim that every generated mapping agrees with live DB.
- Guarded transactional SQL affected **one component and three specs**;
  rerun affected **zero**. Live readback matches all three generated results;
  scoped consistent-snapshot quality checks found **zero findings** on 5071,
  8191 and every spec linked to them. `npm test` passed all nine test files;
  `git diff --check` passed. Temporary SQL, CSV backup, comparison script and
  snapshots were removed after validation.

## 637 crank description correction — 2026-11-15, user approved

- Component **1643 Mavic 637 (MTB)**: corrected the weight sequence for
  **170/175/180 mm** from **680/690/700 g** to **660/680/700 g**, matching
  source **121**, [90/91 printed p.31](https://www.disraeligears.co.uk/site/00_main_images/mavic_trade_catalogue_9091_page_31_main_image.jpg).
- Only that sequence changed. Full original description for restoration:
  `Mavic 637 (MTB), France. ATB crankset: oval 26/28 small ring with five torque positions (round 24/26/28 available), 36/38 middle, 46/48 large, Zicral rings; 9/16 x 20; 170/175/180 mm, 680/690/700 g.`
  Restore it only with a guard matching the corrected description.
- Guarded SQL updated exactly one row; live readback confirmed the corrected
  **198-character** description, source_ref **121**, years **1990–1991** and
  **zero bike links**. Rerun affected zero rows. Titles, dates and mapping inputs
  did not change, so catalogue regeneration was unnecessary. Temporary SQL was
  removed after validation.

## Mavic Rims & "1000 SSC Group" advertisement (1988) — retrobike.co.uk archive, data_source id 106

**Not a full despiece catalogue.** The archive entry's `/download` link only
served a single page-pair (two stacked magazine-ad pages), despite the
listing title promising a full catalogue — no despiece, no per-part
materials/threading beyond the Rims page. First Mavic source of any kind in
the DB (172 pre-existing rows were all bare velobase crawl, source_ref 1).

Page 1 ("MAVIC RIMS" ad): 4 rims with real spec tables (seat dimension,
drilling, avg weight by size) — Mach 2 CD, 190 FB, Open 4 CD, Oxygen M6.

Page 2 ("MAVIC 1000 SSC GROUP" ad): a composition table giving one part
number per category for the 1000 SSC groupset, plus a sparser "options"
column of alternate/upgrade part numbers. Only the primary "1000 SSC" column
was acted on — the "options" column didn't reconcile cleanly against
existing category rows (e.g. option "635" for Bottom Brackets collides with
an existing Cranksets row of that number; option "613" for Hubs and "570"
for Brakes have no matching row anywhere), so none of those options numbers
were inserted or matched. Possible print-layout misread on a single
compressed image rather than genuine new SKUs — worth re-checking against a
sharper scan if one turns up.

**Updated** (year_to extended to 1988 and/or description enriched with
"part of Mavic 1000 SSC groupset composition"): Rims 190FB (5049, desc only),
Open 4 CD (5097); Handlebars 350 (2861); Stems 365 aero (6585); Brakes Super
Pro 430 SSC (854); Cranksets 630 narrow-font (1641); Pedals 640 (3837); Front
Derailleurs 860 (2407); Rear Derailleurs 851 SSC (4346, was a single-year
1980 placeholder); Headsets 310 (3043, desc only, years already covered
1988).

**Inserted** (source_ref 106): Rims "Mavic Mach 2 CD" (8149, 1988) — distinct
from the existing later "Mach 2 CD 2" revision (id 5082, dated 1990); Rims
"Mavic Oxygen M6" (8150, 1988) — first Mavic MTB rim row.

**Left unresolved / not acted on** (ambiguous single-image evidence, no
despiece to confirm):
- Bottom Brackets: ad gives "612" for the 1000 SSC BB; DB has no "612" row,
  only a vague "610 Series" (id 85, 1980–1990) that may or may not be the
  same part. Not merged or inserted — too thin to tell a specific SKU from a
  placeholder family name.
- Pedals "641" and Front Derailleurs "861": ad lists these as alternates
  ("640 or 641", "860/861/862") with zero description; left uninserted since
  a bare number with no other detail doesn't meet the "confirm by part
  number and by name" bar.
- Shifters: ad reads "820" for shift levers; DB's nearest row is "Mavic 821"
  (id 6087, 1980–1990, already covers 1988). Not renamed — too easy to
  misread a compressed single-page image, and 6087 already covers the date.
- Hubs "550"/"613": 550 only exists embedded in combined-number titles
  ("Mavic 500 RD / 550 RD", "Mavic 500/550"); already covers 1988, left
  alone. No "613" row anywhere; not inserted (no other detail).

If a real multi-page Mavic catalogue (despiece-level, like the Zeus one)
turns up, re-run this brand file against it — this pass only scratched the
surface of Mavic's DB footprint (172 rows, still only 12 catalogue-touched).

## Mavic Catalogue Général 84-85 (1984) — equusbicycle.com/bike/mavic/, data_source id 114

First full Mavic catalogue: 48 pp., bilingual FR/EN, despiece-level for hubs,
brakes, BB, derailleurs. Source is the Bicycle Info Project's 25 spread
scans (US dealer copy with handwritten prices). **Catalogue p.9 (polished
clincher rims table) is missing from the scan** — the p.10 photo shows them,
no names. Bound locally via `bind-images-to-pdf.sh`; nothing to commit.

New per its own text: 550 RD, 1000 SSC group (raced 1983, on sale 1984),
Argent 8, 635 triple (also a new option on 1010/1012), 350 bend, 370 stem,
310 headset, 640 pedal, 610 RD BB, TTM 4; Super Pro 430 "latest"; G 40
"created two years ago" (c.1982). Groups table (p.41): 1000 SSC / 1010
Professionnel / 1012 Route / 1013 Sport, all with 610 BB, 350, 360, 630,
640, 820 levers. No group rows created for 1010/1012/1013.

**Resolves 1988-ad open items:** 820 is the shift lever (in every group);
612 = 610 RD double BB (116 mm) and the ad's "613" is the 610 RD triple BB
(121 mm), not a hub; 861 = SSC braze-on FD; 641 absent here (only 640), so
it postdates 1985. The "570" brake and the BB "635" collision remain
unexplained (635 is the triple crank).

**Updated** (42 rows, source_ref -> 114; 1988-ad citations dropped from
descriptions, year_to 1988 on 854/2861/3043/3837/2407 still rests on that
ad, source 106):
- Retitled (old title kept here for matching): 5093/5092/5091 "Mavic
  Monthlery Route/Pro/Legere" -> "Mavic Montlhéry Route/Pro/Légère"; 5109
  "Mavic Speciale Sport" -> "Mavic Spéciale Sport"; 5066 "Mavic G.E.L. 280
  (GEL280)" -> "Mavic G.E.L. 280"; 3401 "Mavic 520 Track Pista" -> "Mavic
  520 Piste"; 3397 "Mavic 500 RD / 550 RD" -> "Mavic 500 RD" (550 RD now its
  own row); 84 "Mavic 600RD, SSC" -> "Mavic 600 RD" (standard threaded BB;
  the 1984 SSC group used the 610); 85 "Mavic 610 Series" -> "Mavic 610 RD"
  (group Zap -> NULL, Zap is 1990s); 2411 "Mavic 862" -> "Mavic 862, SSC"
  (group Zap -> SSC).
- year_to -> 1984: Montlhéry x3, Module E2 Argent 5090, Module 3D Argent
  5085, OR 10 5103, G.E.L. 280, CX 18 5057, 510 3400, 520 Piste, 360 stem
  6584, Pro 420 853, levers 362/363, 600 RD 84.
- NULL -> 1984-1984: Spéciale Sport, Piste 5105, Argent 10 5052, 302 3042.
- year_from moved: G 40 5065 1980 -> 1982 ("two years ago"); GL330 5067
  1989 -> 1984; 610 RD, 350 bar 2861, 640 pedal 3837, Super Pro 430 854,
  851 (1984) 4342: 1980 -> 1984 (catalogue calls them new; 4342's own title
  says 1984).
- Description only: GP 4, Argent 8, 580 CX, 370, 410 brake, 300/310/311/312
  headsets, 635, 810, 811, 860, 801 (1980).

**Inserted** (1984-1984, UUID source_id, source_ref 114): rims Sport 600
(8152), Bleu SSC (8153, SSC), Argent 12 SSC (8154, SSC), TTM 4 (8155), TTM 4
CD (8156); wheels TTM 504 (8157), TTM 504 CD (8158); hubs 550 RD (8159,
SSC), 580 CX Piste (8160), Sulky 540 (8161), TTM 560 (8162); FDs 812
(8163), 861 SSC (8164, SSC); shifter 820 (8165).

**Deleted** (no bike_spec links, no overrides; both velobase, source_ref 1):
3398 "Mavic 500/550" (bare 1975 duplicate of 3397); 2408 "Mavic 862, SSC"
(1990, SSC group, no weight; duplicate of 2411). Their velobase source_id
GUIDs were not captured before the delete — match a reappearance by title.

**Left unresolved:** 630 crank — 1640 block-letter vs 1641 narrow-font, photo
doesn't settle which was current; Paris-Roubaix SSC "grise" vs 5112 red /
5113 yellow label rows; 5108 "Special Service Des Courses" / 5114 "Mavic
SSC" may be the same rims as the new Bleu/Argent 12 SSC rows; 6087 "Mavic
821" (Zap) left as a separate later lever; 5089 "Module E2" probably
duplicates 5090 "Module E2 Argent" but has 2 bike_spec links.

## Mavic Trade catalogue 1986-1987 (1986) — disraeligears.co.uk, data_source id 119

Source: https://www.disraeligears.co.uk/site/mavic_-_trade_catalogue_1986-1987.html
(46 `..._page_N_main_image.jpg` images: front cover, pp. 1-44, rear cover;
bound locally, PDF page N = catalogue page N-1). English trade edition, 44
pp., complete — includes the clincher pages the 1984 scan lacked. Dated
"1986-1987" on the cover: year_from 1986 for parts first seen here, year_to
1987 for parts still listed (user-confirmed convention).

New per its own text: 365 stem ("a new light weight stem", absent in 1984);
641 pedal (= 640 in 9/16 x 20 BSA thread — resolves the 1988-ad "641");
1015 RS group (310/350/365/410/500/612/630/640-641/810-812/801/820)
replacing 1984's 1010/1012/1013; MTB rims Rando M4/M5; CXP 25, Challenger,
Comète; "definitive" 801/851 (Campagnolo-type hanger, flat outer plate).
Dropped since 1984: Pro 420 brake + 362 lever, 360 stem, 300/302 headsets,
510 hub, Sport 600, Bleu SSC, Argent 12 SSC, OR 10, Module E2 Argent, G 40.
The 1000 SSC options row reads Stem 370 / BB 613 / Crankset 635 — so the
1988 ad's "570 brake" and "635 BB" options were column-shifted misreads.
Specs differing from 1984 are named per edition in the descriptions
(Légère, Argent 10, CX 18, Module 3D Argent, 520/580 Piste, Sulky, 350,
370, 635).

**Updated** (50 rows, source_ref -> 119):
- Retitled (old title kept here for matching): 5048 "Mavic Module 3CD" ->
  "Mavic M3 CD"; 5061 "Mavic CXP 25 (aluminum rim, carbon fairing)" ->
  "Mavic CXP 25"; 6972 "Mavic Comete" -> "Mavic Comète"; 4346 "Mavic 851,
  SSC" -> "Mavic 851 (1986), SSC" (also year_from 1980 -> 1986; 4342 "851
  (1984)" covers 1984-85).
- year_from moved later: 6585 365 stem 1980 -> 1986 ("new").
- NULL years set: 5073 MA 1986-1987; 5086 Module 4 1984-1987 (1984 Sulky
  text names it); 5061 CXP 25 1986-1987.
- year_to -> 1987: rims 5109, 5093, 5092, 5091, 5105, 5052, 5054, 5066,
  5057, 5085, 5084, 5074, 5075, 5112 (red label, was 1979), 5048, 8155,
  8156; wheels 6971, 6972, 8157, 8158; hubs 8159, 3408, 8160, 3401, 8161,
  8162; BB 84; crank 1642; FDs 2405, 2406, 8163, 8164; shifter 8165; brake
  852; levers 361, 363.
- Description only: 5077 MA 40, 5067 GL330, 2861 350, 6586 370, 1641 630
  (1988-ad citation dropped), 3837 640, 4338 801 (1986), 854 Super Pro 430.

**Inserted** (1986-1987, UUID source_id, source_ref 119): rims MA 2 Argent
(8177), Rando M4 (8178), Rando M5 (8179); pedal 641 (8180, SSC).

**Deleted:** 5079 "Mavic MA 40" (1970-1970, velobase source_id
9364EF73-97C3-498C-AED9-890A2A2012B5, bare) — duplicate of 5077 (1980-1999,
holds the `mavic ma40` override and a bike_spec link). No links/overrides.

**Left unresolved:** 310/311/312 headsets given 82 g here vs 102 g in 1984
(82 g is the 1984 figure for the 300 — likely a copied table; not changed);
5074 MA 2 vs 5075 MA 2 (Red/Green Label) probably the same rim, both kept
(independent avg weights); 6973 "Comete -/+ (disc)" — a "COMETE +" disc is
photographed but not described; 630 crank 1640 vs 1641 font still unsettled;
no component_group rows for 1015 RS.

## Mavic Catalogue 88-89 (1988) — disraeligears.co.uk, data_source id 120

Source: https://www.disraeligears.co.uk/site/mavic_catalogue_88-89.html (50
`..._page_N_main_image.jpg` images: front cover, pp. 1-48, rear cover;
bound locally, PDF page N = catalogue page N-1). **French edition**, cover
"88·89 catalogue", no print code. Dated year_from 1988 / year_to 1989 (same
convention as the 1986-87 entry). Per Disraeli Gears, the last catalogue
with the 800/850 derailleurs and the only one with the 803/853.

New vs 1986-87: M.R.L. 570 freewheel hub; Bulb'Air front lenticular;
Comète ± fully described (8 weight versions); rims 190 FB, Open 4 CD ("une
nouvelle génération"), MA 50 Cr.D (hard chrome), Oxygen M6, Mach 2 CD
(tubular, single eyelet), SSC n° 4 Cr.D; 355 aero bar; 611 RD Piste and 615
RD MTB BBs; 636 Piste crank; 645 LS Look pedal (6450/6451); triple FDs
830/831/832 and 870/871/872; long-cage 803/853 RDs. Stainless exposed
eyelets on all top rims; Module 4 gains 48 holes; all rim labels redesigned
(yellow MAVIC block + coloured "M" panel). Dropped: Montlhéry Légère, Argent
8, CXP 25, Sulky 540, all BMX (TTM 4/4 CD/504/504 CD/560).
**Resolves the 1988 ad's "570":** the 1000 SSC options column puts 570 under
Moyeux (hubs) — it is this MRL 570, not a brake. 1000 SSC options: 370,
570, 613, 635, 645, 870/871/872, 853. 1015 RS options: 613, 635, 645,
830/831/832, 803.

**Updated** (58 rows, source_ref -> 120):
- Retitled (old title kept here for matching): 5048 "Mavic M3 CD" (and
  before that velobase "Mavic Module 3CD") -> "Mavic Module 3 CD"; 5115
  "Mavic SSC N°4 CRD" -> "Mavic SSC n° 4 Cr.D" (NULL -> 1988-1989); 6973
  "Mavic Comete -/+ (disc)" -> "Mavic Comète ±"; 2863 "Mavic 355 Drop
  Handlebar / Bullhorn" -> "Mavic 355"; 1644 "Mavic Pista" -> "Mavic 636
  Piste" (NULL -> 1988-1989).
- year_from moved later: 5097 Open 4 CD 1980 -> 1988 ("new generation",
  absent 1986); 2409 870 SSC 1984 -> 1988 (absent from 1984 and 1986);
  4347 853 SSC 1980-1980 -> 1988-1989.
- NULL -> 1988-1989: 5080 MA 50 Cr.D.
- year_to -> 1989: rims 5073, 5074, 8177, 5084, 5085, 5048, 5086, 8150,
  8178, 8179, 5105, 5109, 5093, 5092, 5052, 5066, 8149, 5057, 5097; wheels
  6971, 6972, 6973; hubs 8159, 3408, 8160, 3401; 3045 312; 2861 350; 6585
  365; BB 84; cranks 1641, 1642; pedals 3837, 8180, 3836 645 LS (was 1987);
  FDs 2405, 2406, 8163, 2407, 8164; RD 4346; shifter 8165; brakes 852, 854;
  levers 361, 363.
- Description only: 5049 190 FB (single eyelet here, double in the 1988
  ad — both named), 5077 MA 40, 5069 GP 4, 5067 GL330, 85 610 RD (adds
  611/615 sub-refs), 4339 803 (1986).

**Inserted** (1988-1989, UUID source_id, source_ref 120): Bulb'Air (8181,
Wheel(sets)), M.R.L. 570 (8182, Hubs), FDs 830 (8183), 831 (8184), 832
(8185), 871 SSC (8186), 872 SSC (8187).

**Deleted:** none.

**Left unresolved:** label-variant rows not extended past 1987 because the
1988 labels were redesigned — 5075 MA 2 (Red/Green Label), 5112
Paris-Roubaix SSC (red label), 5113 (yellow label); the 1988-89
Paris-Roubaix SSC has no unlabelled row (insert one if a later source
needs it). 5097 Open 4 CD is linked to bike 100 "Virata" (1993), beyond its
1989 year_to — needs a 1990s catalogue. 2410 "870, SSC (31.8 clamp)" left
alone (likely later). 3403 hub / 1192 cassette "Mavic 571" probably the MRL
570's successor, not merged. 5114 "Mavic SSC" (1986, bare) still unplaced.

## Mavic Trade Catalogue 90/91 (1990) — disraeligears.co.uk, data_source id 121

Source: https://www.disraeligears.co.uk/site/mavic_trade_catalogue_9091.html
(46 `..._page_N_main_image.jpg` images: front cover, pp. 1-44, rear cover;
bound locally, PDF page N = catalogue page N-1). **English edition**, cover
"Trade Catalogue 90/91"; Road pp. 4-23, ATB pp. 26-33, technical pp. 34-44;
no group-composition pages. Dated year_from 1990 / year_to 1991. Disraeli
Gears: the 845 pictured is a prototype.

Near-total range turnover vs 88-89. New road: 305 headset, 351 bar, Kit 357,
610 **URD** (axles 110/114/116/119/123 replace 112-125), 631 crank (internal
ring star; track/double/triple builds), 646 LMS pedal, 440 brakes, 840/841
RDs, 821 indexed shifters, Mach 2 CD 2 (double eyelet). New ATB line:
Oxygen M6 CD, Energy M7 CD, MA 40 MB, M 231 / 231 CD / 261 / 261 CD (P.S.P.
cantilever profile), 530 hub (Paris-Gao-Dakar kit = 530 hubs + Oxygen M6 CD
rims), 315 headset, 616 RD BB, 637 crank, 875 front, 845 rear, 825
shifters; 330 seatpost first appears. Dropped (all already year_to 1989):
600 RD BB, 630/635/636, 645 LS, 410/430 brakes, 810-832 FDs, 861/871,
801/803/851/853, 580 CX/Piste, MRL 570, Mach 2 CD, MA 50 Cr.D, SSC n° 4,
310/311/312. Spec changes named per edition: Open 4 CD 395/360 -> 420/385 g;
Rando M4 up to 44 mm/500 g -> 44-55 mm/550 g; Bulb'Air 650 780 g -> 650 900
g + 600 830 g; 365 stem gains 130 mm; 315 128 g here vs 125 g "1991".

**Updated** (59 rows, source_ref -> 121):
- Retitled (old title kept here for matching): 3409 "Mavic Paris Gao Dakar"
  (hub) -> "Mavic 530 (Paris-Gao-Dakar)"; 2862 "Mavic 351 SSC" -> "Mavic
  351"; 2864 "Mavic 357 Extension Kit" -> "Mavic Kit 357"; 83 "Mavic 616"
  -> "Mavic 616 RD". All -> 1990-1991 (were 1980 or 1990 placeholders).
- year_from moved later to 1990 (called new here, or absent from all three
  complete 1984/86/88 catalogues): 1645 631 (was 1980), 3049 305, 3046 315,
  5817 / 5818 330 seat posts, 855 440 brake, 364 440 lever, 6087 821, 4340
  840 / 4341 841 / 4345 845 (were 1992-1992; year_to kept 1992), 3838 646
  LMS (was 1991), 5072 M 261 (was NULL).
- year_to capped: 85 610 RD 1990 -> 1989 (superseded by 610 URD, new row).
- year_to -> 1991: rims 5049, 5073, 5074, 8177, 5084, 5085, 5048, 5086,
  5097, 5105, 5109, 5093, 5092, 5069, 5052, 5067, 5066, 5057, 5082, 8150,
  8178, 8179, 5071; wheels 6971, 6972, 6973, 8181; hubs 3397, 8159, 3401;
  bars 2861, 2863; stems 6585, 6586; crank 1643; pedals 3837, 8180; FDs
  2407, 8187; shifters 8165, 6085.

**Inserted** (UUID source_id, source_ref 121; 1990-1991 unless noted):
rims Oxygen M6 CD (8188), Energy M7 CD (8189), MA 40 MB (8190), M 231
(8191), M 261 CD (8192), **Paris-Roubaix SSC (8193, 1988-1991, SSC)** — the
unlabelled row the 88-89 pass flagged missing; its 1988 start rests on the
88-89 catalogue; BB 610 URD (8194); FD 875 (8195).

**Deleted:** none.

**Left unresolved:** 5071 M 231 CD is the `'mavic 231'` override target and
is linked to three 1993 bikes (Grizzly, Super Grizzly, Nth FS) beyond its
1991 year_to — they may really be the plain M 231 (8191). 3402 "Mavic 531"
hub (1990) possibly a 530 successor, not merged. 4343 "870 (MTB)" RD
(1990-1994, "as listed in 1991") absent here. 2410 "870, SSC (31.8 clamp)",
1192 / 3403 "571" unchanged.

## Mavic Catalogue c. 1980 — disraeligears.co.uk, data_source id 240

Source: https://www.disraeligears.co.uk/site/mavic_-_catalogue_1980.html (24 pages, bilingual FR/EN, no printed date). Dated c. 1980: page 9 lists the 1980 teams using the Grise SSC rim, the 800 derailleur is not called "new", and there is no G 40 rim (1982). Covers rims (Module E / E2 / 3, polished and anodised tubulars), 500 RD road and track hubs and the CX hubs, 600 RD bottom bracket, 800 derailleurs, series 600 pedal (ref. 640), cranks (no model number printed), G.I. 351 / F.B. 352 bends, stems, 410 / 420 brakes, 300 headset, tools.

- year_from moved back to 1980 (were 1984): 8152 Sport 600, 5109 Spéciale Sport, 5105 Piste, 5052 Argent 10, 8153 Bleu SSC, 8154 Argent 12 SSC, 3408 580 CX, 8160 580 CX Piste, 3837 640 pedal, 361 410 lever.
- year_to extended to 1980: 5087 Module E (Red Label, was 1975; 3 Peugeot 1978 specs link to it), 5089 Module E2 (was 1979), 5111 Sport Tubular (was 1970), 6583 grooved quill stem (was 1970). 5053 Argent 7 and 5104 OR 7 had NULL years, now 1980-1980.
- Descriptions only: 3401 520 Piste (listed in 1980 as the 500 RD track hub), 2405 810 (105 g in 1980), 6582 flat stem.
- Retitled 4336 "Mavic 801" (1970-80, 175 g, bare) -> "Mavic 800 (original)", 1979-80: the catalogue's rear 800 weighs 175 g and has the 8-position chain tension / adjustable roller design, not the 801's adjustable chain guide (4337, 1980-85). The 1979 start comes from the 810 front (1979), not from this catalogue. Old title "Mavic 801" so later sources using it can be matched. 4348 "Mavic 800" (1993, 241 g) is a different, later row and was left alone.
- New rows: 9030 Mavic 800 levers (68 g pair), 9031 Mavic 351, G.I. bend and 9032 Mavic 352, F.B. bend (40-44 cm, 340-355 g). Existing 2862 "Mavic 351" is a different 1990 bar (part number reused).
- Unresolved: 3835 "Mavic 600" pedal (1979, bare) is probably the series name of the 640, a merge candidate; Module 3 CD / 3D Argent are absent from this catalogue (weak evidence they came later, not capped); the catalogue's crank has no number (the 1979-84 "Mavic 600" rows 1637-1639 cover it).

## Mavic "The MAVIC advantage" dealer leaflet (1984) — disraeligears.co.uk, data_source id 241

Source: https://www.disraeligears.co.uk/site/the_mavic_advantage.html (10 pages, FR/EN/DE, Taff Vale Cycles dealer stamp). A digest of the 84/85 catalogue ("ask for catalogue 84/85"; imprint "884"), so dated 1984. Almost everything already matched data_source 114 and the later passes: 410 / 420 / 430 brakes, 300 / 310 headsets, 801 / 851 182 g, 810-812 and 860-862, 500 RD pair 522/473 g, Module 3 / 3D / 4, the tubular and hard-surface rims, TTM 4 / 560 / 504 weights.

- year_to 1980 -> 1984: 5087 Module E (Red Label) and 5089 Module E2 (both still listed in 1984). 5089 description rewritten: holes 32-36-40 (the 1980 pass had "36-32"), 650A 36 holes 400 g, velobase "(Spec)" weight dropped.
- 8159 550 RD: pair weight 511/462 g (1984) added; the per-end figures in the row sum to 505/465 g, so the sources differ slightly.
- Consistent, no change: Module 3D Argent present in 1984 (absent in 1980, row left 1980-91), Sport 700C and Argent 7 absent in 1984 (rows end 1980), 801 at 182 g vs the 1980 catalogue's 175 g 800 (supports the 4336 retitle).
- Out of scope: the 1000 SSC group page (no part numbers or weights), QR skewers, tools.

## Mavic leaflet c. 1979 — disraeligears.co.uk, data_source id 242

Source: https://www.disraeligears.co.uk/site/mavic_-_leaflet_1979.html (7 pages, FR/EN fold-out, no printed date). Dated c. 1979 by the site (shows Module E, no separate E2 rim, same photos as the c. 1980 catalogue, data_source 240); the leaflet's own caption says Module E also exists with a double eyelet (E2), 36 and 32 holes. Earliest Mavic document with a derailleur. Series 100 rims, 500 road / track / CX hubs, 600 bottom bracket (310 g), pedal (164 g) and cranks, 800 rear (175 g, 12-32) / front (102 g) / levers (68 g), 300 headset (82 g), bends and stems (no part numbers), 410 / 420 brakes (410 stirrup 184 g, lever 102 g).

- year_from 1980 -> 1979 (14 rows): rims 5091 Montlhéry Légère, 5093 Route, 5105 Piste, 5052 Argent 10, 5053 Argent 7, 5104 OR 7, 5069 GP 4, 8153 Bleu SSC, 8154 Argent 12 SSC; hubs 3408 580 CX and 3401 520 Piste ("track and CX versions"); 84 600 RD; 853 Pro 420; 9030 800 levers; 361 410 lever. The leaflet's "Argent S.S.C." was taken as 8154 "Argent 12 SSC" (both 395 g, 20 mm).
- Descriptions: 361 (204 g is the pair, 102 g each), 2405 810 (102 g in 1979, 105 g in 1980), 3835 bare "Mavic 600" pedal now the series 600 pedal (164 g), succeeded by the 640 (3837, 167 g). This resolves the open question in the c. 1980 entry: 3835 and 3837 are two eras of one series, not a duplicate; no merge.
- Confirmed, no change: 4336 Mavic 800 (original) 175 g 12-32T (its 1979 start now has a source), Module E / 3, Montlhéry Pro, CX 18, Paris-Roubaix SSC red label (1979), 300 headset, 410 / 420 brakes.
- Judgement: the 1979 date is inferred. If the leaflet is really 1980, the 14 year_from moves are one year early; the pre-existing 1979 rows (810, E2, 300, Paris-Roubaix SSC red label, 600 cranks) support 1979. Not in the leaflet and left alone: Sport 700C, Module E2 Argent, 3D Argent, Module 4, GL 330, G.E.L. 280, Argent 8 (all dated 1980 or later).


## Mel Pinto Imports parts catalog, 1970 to 1975 (p. 30), `data_source` 272

See the full entry in [suntour.md](suntour.md). Added 9579 Monthléry N (395 g)
and 9580 Monthléry Légère (310 g), both 20 mm, 700C, years 1970-1975 (the
binder range). 9104 Extra Légère description now names the 20 mm / 259 g
Pinto figures against 21.5 mm in Bikecology 1980 (source_ref left on 247).

## Mavic racing rims sheet (1974) — labibleduvelocataloguesmavic "MAVIC 1974", data_source id 300

- Source: https://labibleduvelocataloguesmavic.blogspot.com/p/mavic-1974.html, one JPG (1024 x 728,
  proxied from bibibike.forumserv.com 1974-4d2cec9.jpg): "Jantes en alliage léger pour cycles de
  course / Lightweight rims for racing cycles", Mavic, Saint Trivier sur Moignans. No year printed;
  1974 from the blog. It is the same sheet as Mel Pinto binder p. 30 (source 272, 1970-75).
- Rims: Monthléry N 395 g and Monthléry Légère 310 g (20 mm, 700C, 24-40 holes); Extra-Légère or
  Golden Monthléry 259 g (20 mm, 28-40); Sport 390 g, Piste 420 g, Spéciale Sport 410 g (21.5 mm,
  700C; Sport and Spéciale Sport 32-40, Piste 24-40); Démontable clincher 22 mm (650B, 26 x 1 3/8,
  700C, 27 x 1 1/4; 32-40).
- year_from moved earlier to 1974 (old value): 9104 Extra Légère (1978), 5105 Piste (1979), 5109
  Spéciale Sport (1980), 5091 Montlhéry Légère (1976). The 2026-10 Mel Pinto pass left these because
  the binder's range is loose; a dated maker's sheet settles it. The 'mavic special sport' override
  (1980-91 -> 5109) is unchanged.
- Descriptions: 5105 Piste (21.5 mm and 420 g in 1974 vs 370 g in 1979), 5109 Spéciale Sport (410 g,
  32-40 holes in 1974 vs 400 g c. 1980), 5047 Démontable (was a velobase stub; 1974-1974, clincher
  sizes and holes, measured 470 g kept), 5091 Montlhéry Légère (1974 holes and weight).
- Merged: deleted 9580 "Mavic Monthléry Légère" (1970-75, source 272, 0 links; added from the Mel
  Pinto copy of this sheet) into 5091 Montlhéry Légère. No overrides referenced it.
- Matched, no change: 5111 Sport Tubular (390 g, 21.5 mm), 9579 Monthléry N.
- Lead, kept apart (user's call): 9579 Monthléry N (395 g, 20 mm, 1970-75) looks like the earlier
  name of 5092 Montlhéry Pro (20 mm, 395 g in Kitching 1984, 399 g avg). 5110 "Mavic Sport" (velobase
  stub, 1960) vs 5111 Sport Tubular also left.

## Mavic catalogue (1979) — labibleduvelocataloguesmavic "MAVIC 1979", data_source id 301

- Source: https://labibleduvelocataloguesmavic.blogspot.com/p/mavic-1979.html, 17 JPGs ("MAVIC 1979
  (1-17)", s0 = 1725 x 1237, FR / EN). Printed page = scan - 1; scan 2 is the contents. Dated by
  its own text: the Grise SSC rim "developed in 1974 ... used for five years ... (In 1979:
  Renault-Gitane, Miko-Mercier, Fiat-la France, Raleigh, Bianchi, Gios, Teka, Supéria, Scic,
  Novostil, Flandria, Zonca-Santini, Magniflex)". So it is a year before the c. 1980 catalogue
  (source 240, 1980 team list) and fuller than the c. 1979 leaflet (source 242).
- Pages: 2 clincher rims (Module E, E2, E2 Argent, E2 650A, Module 3 700C / 650), 3 polished
  tubulars (Sport 700C 390 g / 600 300 g, Spéciale Sport 400, Montlhéry Route 420, Pro 395, Légère
  310, Piste 370), 4-5 anodised tubulars (Argent / Or 10, Argent / Or 7, GP 4, Bleu SSC, Argent 12
  SSC, Grise SSC Paris-Roubaix 400 g), 6-7 500 RD hubs (front 236 / 212 g, 505 RD 275 / 250 g, 506 RD
  286 / 261 g), 8-9 600 RD bottom bracket (602 / 603 metric and Italian, steel / alloy / titanium
  axles, 210-340 g), 10-11 800 rear (175 g, 12-32), 12 Series 600 cranks (593-600 g) and pedals 640
  (167 g) / 641, 13 bends 351 G.I. / 352 F.B. and flat / round / grooved stems, 14 brakes 410 / 420,
  15 hub spares, 16 tools (out of scope). No front derailleur or shifter in this printing (absence
  only; 2405 810 stays 1979).
- year_from 1980 -> 1979: 5090 Module E2 Argent, 8152 Sport 600, 9031 351 G.I. bend, 9032 352 F.B.
  bend, 3837 640 pedal (description rewritten: 167 g, 641 meanings).
- Added: 9969 Mavic 641, Piste (1979-1979): in 1979 the 641 is the track version of the 640. The
  number was reused: 8180 "Mavic 641" (1986-91) is the 640 with 9/16 x 20 threads. Kept apart.
- Merged (0 links, no overrides; source_id values were not captured before the delete):
  3835 "Mavic 600" pedal (1979, 164 g, source 242) into 3837: the 1979 catalogue calls the Series
  600 pedal ref. 640, which reverses the c. 1980 entry's "two eras, no merge"; 9421 "Mavic Monthlery
  Route" (1984, source 261) into 5093 Montlhéry Route and 9422 "Mavic Monthlery Pro" (1984, source
  261) into 5092 Montlhéry Pro: Kitching 1984 rows duplicating the existing ones, whose facts
  (21.5 mm 420 g; 20 mm 395 g) the survivors already carry.
- Matched, no change: rims Module E / E2 / 3, Montlhéry Route / Pro / Légère, Piste, Spéciale Sport,
  Argent / Or 10 and 7, GP 4, Bleu / Argent 12 SSC, Paris-Roubaix SSC; 3397 500 RD; 84 600 RD; 4336
  800; 1637 Series 600 cranks; 6582 / 6583 stems; 410 / 420 brakes.

## Mavic USA technical manual (c. 1990) — labibleduvelocataloguesmavic "MAVIC 1989", data_source id 302

- Source: https://labibleduvelocataloguesmavic.blogspot.com/p/mavic-1989.html, 23 JPGs (Mavic-1 ...
  Mavic-19, 770 x 1024 at s0). Not a range catalogue: an English Mavic USA installation manual (east
  and west US phone numbers) with a specification box per section: 305 / 315 / 316 / 317 headsets,
  500 / 530 / 550 hubs, 610 URD and 616 RD bottom brackets, 631 and 637 cranksets, 646 LMS pedals,
  820 retrofriction levers, 821 / 825 index levers, 840 / 841 / 845 and 801 PRO / 851 SSC rears.
  Undated (welcome text: "much has changed ... in the last two years. Since SSC ..."); the blog says
  1989. Dated c. 1990 (user's call): it shows the 1990 range (new in the 90/91 catalogue, absent from
  88-89) beside the 801 / 851 the 90/91 catalogue had dropped, so no year_from was moved on it.
- Updated (source_ref -> 302): 4338 Mavic 801 (1986) and 4346 Mavic 851 (1986), SSC year_to 1989 ->
  1990 (still supported as 801 PRO / 851 SSC). 3047 Mavic 316 and 3048 Mavic 317: velobase "(Spec)"
  weights were swapped (316 is 145 g, 317 is 155 g); descriptions rewritten with thread, head and
  crown race diameters and stack height; year_from 1980 -> 1990 (velobase decade bucket; absent
  from the complete 1984, 86-87 and 88-89 catalogues), year_to 1990 kept.
- Matched, not changed (specs here vs DB): 305 118 g (DB 116), 315 140 g, 530 505 g, 610 URD spindles
  112 / 114 / 116 / 119 / 123 (290-315 g), 616 RD 124 / 134 (350 / 360 g), 631 track / double / triple
  668 / 730 / 835 g, 637 660-700 g, 646 LMS 480 g (DB 496), 820 70 g, 821 77 g, 825 160 g, 840 230 g /
  841 235 g / 845 295 g (max cog 28 / 30 / 32, capacity 30 / 36 / 38).
- If a dated source shows the manual is 1989, the 1990 starts of those rows could move to 1989.

## Mavic "ATB Guide 90-1" (2 scans) — labibleduvelocataloguesmavic "MAVIC 1990", checked 2026-10-30, no change

- Source: https://labibleduvelocataloguesmavic.blogspot.com/p/mavic-1990.html, 2 JPGs proxied from
  bibibike.forumserv.com (mavic1990a / mavic1990b): the cover of the "ATB Guide 90-1" (Saint-Trivier-
  sur-Moignans, printed in France) and its derailleur spread only: indexed ATB group for 6 or 7 speed,
  anatomic under-bar levers adjustable to all positions; 845 rear 250 g, 875 front 110 g, 825 shifters
  160 g. All three already match 4345 / 8195 / 6085 (source 121, years 1990-91/92). No data_source row
  created, no SQL. The rest of the guide is not on the page; do not re-check.

## French buyer's guide, Mavic ATB pages (1991) — labibleduvelocataloguesmavic "MAVIC 1991", data_source id 303

- Source: https://labibleduvelocataloguesmavic.blogspot.com/p/mavic-1991.html, one JPG (1024 wide,
  proxied from bibibike.forumserv.com 1991-4d2cec1.jpg): pp. 100-101 of a French 1991 magazine buyer's
  guide (publisher not shown), Mavic's ATB range: 315 / 316 / 317 headsets, 616 RD BB, ATB hubs (505 g
  the pair), 875 front 110 g, 825 shifters 160 g, 845 rear 250 g, 637 Zicral crankset, seatpost, and a
  "Jantes Mavic VTT 26" table: Oxygen M6 / M6 CD 30 mm 490 g, Energy M7 CD 26 mm 580 g, Rando M4 26 mm
  550 g, Rando M5 32 mm 500 g, MA 40 MB 20.5 mm 400 g, P.S.P. M 231 / CD 23 mm 410 g, M 261 / CD 26 mm
  460 g, M 281 / CD 28 mm 520 g, M 231 Ceramic 23 mm 410 g; plus the ceramic coating's three claims.
- Added (1991-1991, user's call to use this secondary source): 9970 Mavic M 281, 9971 Mavic M 281 CD,
  9972 Mavic M 231 Ceramic (the only rows missing from the DB). Everything else matched; no updates.
- If a Mavic catalogue turns up for 1991-92, check these three for wider years and a maker's weight.

## Mavic "Les 92" leaflet (1992) — labibleduvelocataloguesmavic "MAVIC 1992", data_source id 304

- Source: https://labibleduvelocataloguesmavic.blogspot.com/p/mavic-1992.html, 6 JPGs ("MAVIC 1992
  (1-6)", 1453 x 2048, FR / EN / IT): cover "MAVIC LES 92" (571 hubs and the 3G wheel), 571 road
  freehub (new, raced in the 1991 Tour de France by RMO, Lotto, ONCE; 4 stage wins), its 8-speed
  cogs and spec table, 577 MTB freehub (parts interchangeable with the 571), 501 / 531 hubs ("the new
  501 and 531", from the 500 series, flanges 45 mm apart), 451 brakes (tested in the 1991 Tour).
- None of these is in the complete 90/91 trade catalogue (source 121: 440 brakes, 500 / 530 / 550
  hubs), so the velobase decade buckets were moved later on the leaflet's "new" / 1991-Tour dating.
- year_from moved later (old value): 1192 Mavic 571 cassette 1990 -> 1991; 3399 Mavic 501 hub
  1990 -> 1992; 3402 Mavic 531 hub 1990 -> 1992; 856 Mavic 451 brake 1980 -> 1991; 365 Mavic 451
  lever 1989 -> 1991. year_to -> 1992 on 1192, 3399, 3402, 856 (365 kept 1993).
- Dated from undated stubs: 3403 Mavic 571 hub NULL -> 1991-1992; 3405 Mavic 577 NULL -> 1992-1992.
- Descriptions rewritten on all seven (velobase "(Spec)" weights kept on 3399 / 3402 / 856 / 365).
  No bike links or overrides on any of them. 6970 3G Carbon (1992) on the cover matches.

## Mavic ZMS 8000 group brochure (1994) — labibleduvelocataloguesmavic "MAVIC 1994", data_source id 305

- Source: https://labibleduvelocataloguesmavic.blogspot.com/p/mavic-1994.html: 3 JPGs (1024 x 1409,
  proxied from bibibike.forumserv.com mavic-zap-1994_1..3) of the "Groupe ZMS, Zap Mavic System 8000"
  brochure, FR / EN, plus a fourth image, a Cosmic wheel photo from arueda.com (not a Mavic document,
  not used). Year from the blog and file names.
- Content: the ZMS 800, "the first rear derailleur controlled by a microprocessor" (2 zap buttons,
  microprocessor in the bar end, energy from the upper jockey via cam and rack, solenoid, indexing
  piston; double shift in 0.1 s, long press runs to the end cog, self-setting limits). Composition:
  305 headset, 451 brakes, 571/2 32h hubs, 571 CB 12/23 cogs, 610 long 114 mm BB, 631 42 x 52 crankset
  (170 mm group 1, 172.5 mm group 2), 650 chain, 821 shifter, 862 front, ZMS 800 (only in the group).
- year_to -> 1994: 3049 305 (1991), 1645 631 (1991), 8194 610 URD (1991), 6087 821 (1991), 856 451
  brake (1992), 1192 571 cassette (1992), 365 451 lever (1993), 2411 862 SSC (1992). Description: 3404
  571/2 (was a bare stub; years 1993-95 unchanged).
- Added (1994-1994): 9973 Mavic ZMS 800 rear (group 32 Zap, as the 451 / 305 / 821 rows), 9974 Mavic 650
  chain. 6088 "Mavic ZAP" shifter (1993) is the first-generation Zap, left as is. No start year moved.

## Bike-Pro Publications catalogue, Mavic rear derailleurs (1996) — labibleduvelocataloguesmavic "MAVIC 1996", data_source id 306

- Source: https://labibleduvelocataloguesmavic.blogspot.com/p/mavic-1996.html: 2 images proxied from
  bibibike.forumserv.com. Image 1 (1024 x 543, "1996-4d2ced7.png") is a US retailer's text, "(c) 1996
  Bike-Pro Publications", on the 840 double / 841 triple road rears and the 845 ATB rear. Image 2
  ("mavic_helium-1996") is an owner's photo of red Helium hubs and rims, not a document, not used; the
  DB has no Helium rows.
- Content: 840 short cage, 841 medium cage for triples ("largely identical to the 845"), all bolted and
  repairable with a parts diagram; body and links forged 2014 alloy, C.N.D. black body, silver links;
  2 mm hex adjusters; pulley plates 5 mm inner / 3.2 mm outer; grey nylon pulleys on needle bearings;
  span 6, 7 or 8 speed; "the most expensive rear derailleurs we sell".
- year_to 1992 -> 1996 on 4340 840, 4341 841, 4345 845; descriptions add 8-speed (and the body / link
  detail on 4340). A retailer listing, so possibly old stock; it is the only post-1992 attestation. No
  bike links or overrides. No start year moved.

## Mavic Catalogue Rims & Wheels (1997) — labibleduvelocataloguesmavic "MAVIC 1997", data_source id 307

- Source: https://labibleduvelocataloguesmavic.blogspot.com/p/mavic-1997.html: 8 JPG spreads
  (2048 px, "MAVIC 1997 (1-8)"), English, Mavic S.A. / Mavic U.S.A. addresses. 1 cover, 2 MTB wheels
  (Crossland, Crossmax), 3 road rims, 4 MTB / trekking / BMX rims, 5 "Why choose Mavic" (skipped),
  6 "What's new" (Helium, Crossmax), 7 FTS hubs + SUP / UB Control / Ceramic tech, 8 road wheels +
  501 hub. Left-edge spec columns read from full-size crops.
- Dating in the text: Helium launched to the pros July 1996 (Tour: ONCE, Gan, Motorola, MG); Crossmax
  2 bronzes and Cosmic Carbone gold (Pascal Richard) at Atlanta 1996; GP4 "is back"; FTS "at the
  heart of all '97 Mavic wheels". Absent: M 231/261/281, Oxygen, Energy, Module, Open 4, Mach 2, MA 40 MB.
- year_to -> 1997: 5074 MA 2, 5069 GP 4 (1997 spec 480 g, 32/36 named inline), 8193 Paris-Roubaix
  SSC, 3399 501 hub, 6972 Comète (description now covers the 1985-91 and 1997 generations).
- NULL -> 1997-1997: 5102 Open SUP CD, 5059 CXP 12, 5060 CXP 14.
- year_from moved later (old value), absent from the complete 90/91 trade catalogue (source 121), no
  earlier attestation in hand: 5107 Reflex 1990 -> 1997 (treated as the clincher; velobase 394 g avg
  sits between clincher 410 and tubular 375/390), 5062 CXP 30 1990 -> 1997, 5063 CXP 30 (clincher)
  1990 -> 1997. Probably c. 1993-94 in reality; move earlier if a dated source turns up.
- Retitled: 5062 "Mavic CXP 30" -> "Mavic CXP 30 (tubular)" (search_text unchanged).
- Added: rims 9975 Reflex (tubular), 9976 121, 9977 217, 9978 220, 9979 221, 9980 238, 9981 T217,
  9982 T238, 9983 T261, 9984 "Mavic X BMX" (logo is an X with a superscript x; name uncertain);
  wheels 9985 Helium (1996), 9986 Cosmic Carbone (1996), 9987 Cosmic Expert, 9988 Cosmic Pro,
  9989 Crossland, 9990 Crossmax (1996). MA 40 (5077, to 1999) confirmed, unchanged.

## CC9 cassette correction — 2026-11-09, user approved

- Source **374**, `Mavic catalogue (1999), CC9 cassette page 24`: https://bikalog.org/api/view/Mavic/1999/mavic99.pdf, PDF page 12/printed p. 24. Only the CC9 section was reconciled, not the rest of the catalogue. Local source `/private/tmp/cassette-mavic99.pdf`, inspected render `/private/tmp/cassette-mavic99-p12.jpg`.
- Retitled component **1193** from `Mavic CR601 / CC9 (9-speed)` to `Mavic CC9 (9-speed)`; search_text -> `Mavic CC9`. The original VeloBase UUID remains `3576A017-58A4-4C68-A960-07360890255E`; its page actually says late 1990s, so the stored 1990-1990 was a decade-bucket crawl artifact. **year_from moved later, 1990 -> 1999; year_to 1990 -> 1999**, using documented attestation only, not a proven launch/end year. Move earlier if a dated earlier source is recovered.
- Replaced bare description with treated steel sprockets, ED 8/9-speed indexing, individually available cogs, 11-21T 193g / 12-23T 223g and the separate CC8 conversion kit. The specimen listing's aluminium material conflicts with the manufacturer's treated steel. CR601 is retained here as the old source name; it was not printed in the catalogue CC9 panel. source_ref **1 -> 374**.
- No bike links or generator references to 1193; no merge/delete. Prior full-row backup `/private/tmp/cassette-before-mavic.tsv`. Applied guarded update within `/private/tmp/cassette-review-2026-11-09.sql`; rerun zero rows. Description 213 characters. All 81 bike CSVs compared; only the four separately approved Shimano links changed.
