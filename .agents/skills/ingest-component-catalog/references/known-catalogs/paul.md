# Paul Components catalogs processed so far

## 1996 maker catalogue remaining components — applied and validated 2026-11-22

The 15 posted images were inventoried after the earlier Love Lever/Powerglide
review; the catalogue internally discusses changes for 1996, but the archive
does not establish physical-edition completeness. The approved changes were
applied and validated; task-only SQL, scans, inventory and simulation were
removed afterward.
Source 502 already existed and its citation was expanded from printed p.8
to pp.3–10. Proposed new component records use the 1996 offering as an
availability attestation, not a proven introduction or production endpoint.

| Printed pages | Added component | Evidence and limits |
| --- | --- | --- |
| 3–4 | Powerglide medium cage; Powerglide short cage | Maker separately offers long, medium and short; existing 4369/4370 are independently documented long-cage specimens. Medium is listed as 175g and table says 32 teeth capacity without explaining whether wrap or max sprocket. Short has no separately stated weight/capacity. No chronology or cosmetic crosswalk is inferred. |
| 3–4 | 409 front derailleur | 6061-T6 body/links, stainless cage, brass pivot bushings; top/bottom pull and three clamp sizes; 100g listed. The table says 28 teeth capacity without specifying its basis. Spring 1996 availability is printed. |
| 5–6 | Stoplights and Stoplight NC | Both have 6061-T6 arms; titanium versus stainless anchor/eyebolts. Maker lists 95g without pads versus 125g; pair/individual weighing basis is not stated. They are separately named offerings. |
| 7 | Crosstop II brake | Suspension-oriented brake with DeAlie linkage and revised serviceable brass pivot bushings; 130g listed, weighing basis unspecified. |
| 9–10 | F-Hub and F-Hub DDT front hubs | 100mm spacing, 28/32/36 holes, 140g and 190g respectively; regular 19mm hollow axle/QR versus 1996 revised oversized DDT/titanium bolt. DDT axle is 25mm in the table and 25.4mm in prose; the conflicting figures are preserved. |

The Love Lever on p.8 is already **12200**; its LP counterpart is separately
supported by source 503. The planned crank on p.11 explicitly was not ready;
p.12 binders, cable carriers and brake booster, p.13 clothing and p.14 dealer
list are outside component scope. No earlier printing was compared, and the
catalogue cannot establish what was dropped.

The applied SQL added eight components, category associations for Brakes,
Front Derailleurs and Hubs, and an expanded citation for source 502. It does
not alter existing components, years, titles, bike links or groups. Existing
Paul brand 463 and its Rear Derailleurs/Brake Levers associations are retained.
The source's original citation and a restoration plan are recorded below. Maker
model cross-category/alias searches found no matching eight titles; no named
Paul bike specifications were found. A consistent-snapshot simulation using
the maintained matcher across 118 loaded catalogues found an identical full
finding set before/after, including the 15 pre-existing Huret lost proposals.
Whole-database quality baseline has zero errors; Paul near-duplicate report
found no candidates. Applied IDs 12261/12262 are medium/short Powerglide;
12263 409; 12264 Stoplights; 12265 Stoplight NC; 12266 Crosstop II;
12267 F-Hub and 12268 F-Hub DDT. Exact readback matched; rerun changed zero
rows. The 1996 maker distinguishes the Powerglide cages: `duplicate-classify.js`
records all five long/medium/short pairs as reviewed configurations instead
of generations inferred from weak legacy year buckets. The Paul group report
now reflects those configurations, and near/parenthetical reports have no
unreviewed pairs. Both duplicate-classifier and report test files passed.
The post-load generator/live comparison matches the baseline across 118 loaded
catalogues: no gained or changed mappings, and the same 15 pre-existing Huret
lost proposals. No Paul-named bike specifications or links were found; the
quality report returned zero errors. No existing component was overwritten.

For restoration, source 502's former citation was
`https://www.oldschoolracing.ch/archiv/paul-components/ ; internally dated For 96, printed p.8 Love Levers, image i0464eca1cb2fed53/version/1518555019/image.jpg; 110g/pair, adjustable brass Slop Adjust pivot`.
New UUIDs in ID order 12261–12268: `04205dca-e6c0-11f1-a2df-02fea3763e8d`,
`0422cf03-e6c0-11f1-a2df-02fea3763e8d`, `0425f71f-e6c0-11f1-a2df-02fea3763e8d`,
`0428fb16-e6c0-11f1-a2df-02fea3763e8d`, `042c5cb1-e6c0-11f1-a2df-02fea3763e8d`,
`042f4cce-e6c0-11f1-a2df-02fea3763e8d`, `0431fad5-e6c0-11f1-a2df-02fea3763e8d`,
`0434344a-e6c0-11f1-a2df-02fea3763e8d`. Remove the added components or
category associations only after checking later references, and remove their
reviewed-configuration entries if the new rows are removed.

## 1996 maker catalogue brake-page spot check — 2026-11-22, read-only

The [15-image maker catalogue](https://www.oldschoolracing.ch/archiv/paul-components/)
is already registered as source 502 for the scoped Love Lever work below;
its broader component range was not reconciled in that pass. Visually checked
the original [posted position 6 / printed p.5](https://image.jimcdn.com/app/cms/image/transf/none/path/s523b628f9fa66a2b/image/ie76148ce9125e113/version/1518555019/image.jpg)
and [position 7 / printed p.6](https://image.jimcdn.com/app/cms/image/transf/none/path/s523b628f9fa66a2b/image/ida862dec733f2925/version/1518555019/image.jpg).
The maker lists **Stoplights** and **Stoplight NC** as distinct brake sets,
with 6061-T6 arms, titanium versus stainless anchor/eyebolts respectively,
and 95g versus 125g in the printed table; p.5 qualifies 95g as without pads.
The individual-versus-pair weighing basis is not established by this check.
The live Paul component inventory contains neither named model, nor any Paul
brake row; an all-brand Stoplight name search and named bike-spec search found
none. This is an inventory gap, subject to an alias and duplicate review before
any insert. The manufacturer source attests its listed configurations; it does
not by itself establish production endpoints. Positions 14/15 are clothing
and the distributor list, outside component scope. No DB changes were made.

## Powerglide and Love Lever — applied and validated 2026-11-21

User approved the prepared variant proposal with “apply”. Applied **three existing-row updates and two additions12200/12201**, with **sources502/503**. Existing dates, UUIDs, categories, group/image values, source references and bike links remain unchanged. No merges, deletions or new Powerglide cage rows.

| ID | Applied identity / change | Source / dates |
| --- | --- | --- |
|4369|Paul Components Powerglide (long cage, decals); specimen-based description, reported195g retained.|1;1990–1990 unchanged|
|4370|Paul Components Powerglide (long cage, engraved); replaces the unsupported early-version label with observed markings.|1;1990–1990 unchanged|
|12027|Paul Components Love Levers (stainless pivots); title clarified, exact199g/pair description retained.|473;1995–1996 unchanged|
|12200|Paul Components Love Levers (Slop Adjust, 1996 configuration);110g/pair (55g each), adjustable brass pivots.|502;1996–1996 availability|
|12201|Paul Components Love Levers LP;23mm pull for Motolite; no unverified weight/material added.|503;1996–1996 availability|

Exact applied descriptions and all old values remain in the historical proposal/comparison below. All retitles regenerate search_text; bracket removal keeps the three existing eBay queries unchanged. The new Slop Adjust query is Paul Components Love Levers; LP is Paul Components Love Levers LP.

### Registered sources and inserted identities

- **502 — Paul Component Engineering catalogue (1996)**: original archive/internal1996 text, printed p.8; supported12200 in this scoped pass. The later full remaining-component reconciliation above also uses this source.
- **503 — Paul Component Engineering dealer price list (15 September 1996)**: independently dated paul1997_0005.jpg; supports12201 only.
- **12200 UUID:** f2e1d188-4962-4ec1-bb0d-490815566ba1.
- **12201 UUID:** b9b01e09-f9f5-426e-a870-7b563a95ec20.

Both additions are brand463/category2,group_id/image NULL. Their1996–1996 dates attest availability, not production limits. The existing category_brand associations already covered this category; none was added. The attributed1997 brochure remains comparison evidence rather than a newly registered source.

### Application validation

- Four guarded transaction files ran17 statements total: exactly three component updates,two component inserts and two source inserts; category guards affected zero rows. A full second execution affected **zero rows in every statement class**.
- Full before/after snapshots checked all11,263 pre-existing components. Only the three approved rows changed:4369/4370 titles/descriptions,12027 title. All existing source_ref values, dates, UUIDs, search strings, categories, groups and image hashes are unchanged. Both additions exactly match the reviewed fields and reserved UUIDs; all five descriptions fit varchar(255), maximum190 characters.
- All24,479 bike specs and1,422 bikes are unchanged in every captured field. Brand/category/group records, category associations and all495 pre-existing source records are unchanged. Only sources502/503 were added. Post-load component total11,265; source total497.
- Actual post-load generator comparison covers117 loaded catalogues and24,479 specs. Complete scope, summary and findings match the fresh pre-load baseline:24,464 matching specs and15 pre-existing lost mappings, with **zero newly gained/lost/changed mappings**. No CSV, bike matcher, override or link changes were needed.
- Whole-DB quality summary and full findings are identical before/after: **zero errors**,2,032 review findings. Database readback verified all five applied titles/descriptions, dates, provenance, UUIDs and eBay queries.
- No named Paul bike specs or links to any of these five rows were found. French Épaules fork text is excluded by word-boundary matching. No unsupported backfill was added.
- Post-load Paul near-name and parenthetical reports returned zero candidates. Ordinary grouping initially surfaced the expected Powerglide cosmetic pair and old/new Love Lever review pair. The approved REVIEWED_NOT_DUPLICATES entries now protect4369/4370,12027/12200 and12200/12201; grouped pairs report variant, with zero unresolved merge/review pairs. Duplicate-classification and duplicate-report tests pass (two test files).

### Decisions and housekeeping

Powerglide markings remain observed variants rather than a proven production chronology. Medium-cage175g/167g figures and unresolved capacities are not copied onto either long-cage specimen. The older retailer's199g/pair/stainless construction is preserved separately from the maker1996 configuration; the underlying weight discrepancy remains evidence, not a date correction. LP receives only its explicitly supported pull/compatibility.

The completed Paul review/apply TODO action was removed; source-hunt/index links now point to this applied result. The full old/new descriptions, source citations and UUIDs remain below for restoration. Temporary SQL, manifest, snapshots, reports and helpers were removed after exact readback, the zero-change rerun and final housekeeping.

## Powerglide and Love Lever — variant proposal prepared 2026-11-21

**Historical approved proposal, applied and validated above.** This section preserves the reviewed three-row clarification/two-row addition plan and preparation-stage checks. The current applied identities, source IDs and validation are above.

### Identity decisions

- **4369/4370:** use long-cage specimen identity and observed markings instead of an unverified production sequence.4369 has PAUL/US-flag decals;4370 has engraved PAUL/USA. Drop4370's unsupported early-version label without asserting which marking came first. Retain both independently photographed variants and4369's reported195g; do not present that figure as a measured weight. Do not transfer medium-cage175g/167g or unresolved capacities onto either long-cage specimen.
- **12027:** explicitly identify the retailer's stainless-pivot configuration, preserving its full description,199g/pair, colours,1995–1996 dates and source473. This is a construction qualifier, not an inferred cable-pull assignment.
- **New Slop Adjust:** represent the illustrated, unsuffixed Love Levers offering on the internally1996 booklet's printed p.8. The maker explicitly identifies a revised lever length and adjustable brass pivots, distinct from12027's published stainless-pivot configuration.110g is expressly per pair/55g each. This is an as-offered catalogue configuration, not a catch-all row for any surviving lever with retrofit adjustable pivots. No numerical pull or short-pull label is added without a source crosswalk.
- **New LP:** represent the explicitly named Love Levers LP sold separately from standard Love Levers on15September1996, with23mm pull for Motolite. Its source supplies no weight or material specification. Do not import the neighbouring standard model's110g, or use modern long-pull Love Lever specifications.

The unsuffixed1996 booklet model and separately named LP are retained as distinct published offerings. The proposal does not claim the older retailer row's pull is known, or treat adjustable pivots alone as a way to identify an individual used lever. Broader specimen-to-generation crosswalks remain unproved; those limits do not justify overwriting an independently documented configuration.

### Exact existing updates

| ID | Proposed title | Exact proposed description | Existing dates / source |
| --- | --- | --- | --- |
| 4369 | Paul Components Powerglide (long cage, decals) | Alloy long-cage rear derailleur with cable adjuster; red/gold/green specimen with PAUL and US-flag decals. Reported weight 195g; weighing basis unspecified. | 1990–1990 / 1 |
| 4370 | Paul Components Powerglide (long cage, engraved) | Alloy long-cage rear derailleur with cable adjuster; pictured specimen has engraved PAUL/USA markings. | 1990–1990 / 1 |
| 12027 | Paul Components Love Levers (stainless pivots) | Machined 6061-T6 aluminium brake levers, oversized stainless pivots and reach adjustment; black, purple or blue; 199g per pair. | 1995–1996 / 473 |

All three retitles regenerate search_text using scripts/search-text.js. Bracket removal means their generated queries remain exactly the current values: Paul Components Powerglide for4369/4370, Paul Components Love Levers for12027. The Powerglide changes are supported by their original VeloBase specimen pages/photos, so source_ref remains1. The retailer qualifier uses source473 and keeps it. No new maker catalogue is used to retag these rows.

### Exact additions

Both new rows: brand463 Paul Components,category2 Brake Levers,group_id/image NULL, fresh UUIDs below.1996–1996 records availability only, not manufacture boundaries. No numeric maker part codes established. Existing463/2 registration is present; the SQL checks it idempotently and should add no association. Search queries are Paul Components Love Levers and Paul Components Love Levers LP respectively.

| Reviewed title | Exact applied description | Attestation / source | Applied UUID |
| --- | --- | --- | --- |
| Paul Components Love Levers (Slop Adjust, 1996 configuration) | 6061-T6 brake levers with adjustable brass Slop Adjust pivots, stainless thrust washers, reach and slotted barrel adjusters; 110g per pair (55g each). Lever length increased by 1cm for 1996. | 1996–1996 / Paul Component Engineering catalogue (1996) | f2e1d188-4962-4ec1-bb0d-490815566ba1 |
| Paul Components Love Levers LP | Long-pull brake levers with 23mm cable pull for Motolite linear-pull brakes; listed separately from standard Love Levers. Individual left/right levers also offered. | 1996–1996 / Paul Component Engineering dealer price list (15 September 1996) | b9b01e09-f9f5-426e-a870-7b563a95ec20 |

### Provenance and restoration

Two separate catalogue sources were registered on application as502/503:

- **Paul Component Engineering catalogue (1996)** — cite the [archive](https://www.oldschoolracing.ch/archiv/paul-components/), printed p.8/direct image i0464eca1cb2fed53/version/1518555019/image.jpg and the internal1996 revision wording; used only for Slop Adjust.
- **Paul Component Engineering dealer price list (15 September 1996)** — cite the [original posted sheet](https://www.gringineer.com/blogs/default-blog/1997-paul-component-engineering-catalog-and-price-sheet), paul1997_0005.jpg and its explicit date; used only for LP.

The attributed1997 green brochure remains comparison evidence. It was not registered and does not supply a date/weight/material for the new LP row. Sources502/503 and components12200/12201 are now registered as recorded above.

Full old titles, descriptions, dates, source_ref, UUIDs and search strings are preserved in the comparison baseline below and as comments in the update SQL. Refreshed live rows match that baseline, including NULL groups/images and zero links. Updates guard every captured old column and image NULL, so stale rows are not overwritten. Existing dates appear only in WHERE guards, never UPDATE assignments. New rows guard both UUID and brand/category/configuration title; source/category inserts also use NOT EXISTS.

Applied reviewed variant pairs in duplicate-classify.js REVIEWED_NOT_DUPLICATES are4369/4370 (photographed markings),12027/12200 (published pivot construction),12200/12201 (separately offered configuration). These retain the documented distinctions without creating a cosmetic merge suggestion after the Powerglide retitles.

Restoration would reset the three captured existing rows to the full baseline values. Any rollback of new configurations must first verify/reconcile links or later evidence before deleting the UUID-identified inserts; remove new source records only if unreferenced. This is a restoration plan, not prepared deletion SQL.

### Proposal-stage validation

- Refreshed all Paul463 rows and all-brand Powerglide/Love Lever/Slop Adjust title aliases: only4369,4370,12027 exist. Both proposed new titles are absent. No maker source labels are registered yet; both relevant brand/category associations already exist.
- All three existing rows have zero bike links. A word-boundary search for Paul,Powerglide and Love Lever finds no named live bike specs; French Épaules text is not treated as a component hit. No affected generator overrides are present.
- A read-only consistent-snapshot simulation used the maintained buildReport/buildCataloguePlan pipeline twice, with current titles and then all five proposed titles/rows. All117 loaded catalogues and24,479 compared specs produced identical summaries and full findings:24,464 unchanged matches,15 pre-existing lost mappings,zero new gains/losses/changes. Synthetic negative IDs represented the additions only inside the simulation; they are absent from SQL.
- All descriptions fit varchar(255), maximum190 characters; all five eBay queries come from the maintained helper. All existing UUIDs, dates and non-proposed columns are preserved by construction.
- The prepared four transaction files contained17 statements in total and expected three component updates,two component inserts,two source inserts,zero category associations; no date/link/merge/delete writes. Actual application, exact readback, duplicate/mapping/quality validation and the successful zero-change rerun are recorded above.

### Preparation files — validated and removed

The reviewed VeloBase,Branford,maker-booklet and dealer-sheet SQL files were applied as separate transactions (4/3/5/5 statements), then removed with the manifest and temporary validation files after exact verification. The complete reviewed old/new values and UUIDs are preserved in these notes; no pending review/application files remain.

## Powerglide and Love Lever — comparison 2026-11-21

**Historical comparison stage; application above supersedes its remaining action.** This section preserves the source evidence and pre-load baseline. It is not a full Paul catalogue inventory; existing dates remain fixed under the user's instruction.

### Sources and dating

1. [Paul maker catalogue, internally1996](https://www.oldschoolracing.ch/archiv/paul-components/). Newly recovered during this comparison, via a forum's original scan reference. The archive's1996 attribution is corroborated by maker text referring to changes for1996 on printed pp.1,8,9. Fifteen posted images; inspected positions1–5,8–13 while locating the targets, not positions6,7,14,15. Target pages are printed p.3 (position4, Powerglide specs), p.4 (position5, illustration), p.8 (position9, Love Levers); printed p.1 (position2) supplies revision context. Images are only800px across at the untransformed endpoint; target figures/text were legible, not inferred from thumbnails. No physical completeness claim.

| Printed page / posted position | Direct original scan |
| --- | --- |
| 1 / 2, revision context | [i3f330df7c389da87](https://image.jimcdn.com/app/cms/image/transf/none/path/s523b628f9fa66a2b/image/i3f330df7c389da87/version/1518555019/image.jpg) |
| 3 / 4, Powerglide table | [i034730d0c03eb764](https://image.jimcdn.com/app/cms/image/transf/none/path/s523b628f9fa66a2b/image/i034730d0c03eb764/version/1518555019/image.jpg) |
| 4 / 5, derailleur illustration | [iae097db3c2e5fecd](https://image.jimcdn.com/app/cms/image/transf/none/path/s523b628f9fa66a2b/image/iae097db3c2e5fecd/version/1518555019/image.jpg) |
| 8 / 9, Love Lever revision | [i0464eca1cb2fed53](https://image.jimcdn.com/app/cms/image/transf/none/path/s523b628f9fa66a2b/image/i0464eca1cb2fed53/version/1518555019/image.jpg) |

2. [Gringineer green brochure, attributed1997](https://www.gringineer.com/blogs/default-blog/1997-paul-component-engineering-catalog-and-price-sheet). Original `paul1997_0002.jpg`, `_0003.jpg`, `_0004.jpg` re-read visually. The hosting title is not an independently verified1997 maker imprint. Keep this publication distinct from the internally1996 booklet and dated dealer sheet. Technical panel0003 explicitly describes revised Powerglide geometry; panels0002/0003 show standard and LP levers.

3. [Dealer price list,15September1996](https://cdn.shopify.com/s/files/1/0661/0501/6425/files/paul1997_0005.jpg?v=1791647921). Maker-printed date establishes separate1996 availability evidence for long/medium/short Powerglide, Love Levers and Love Levers LP. Do not date it1997 from its hosting post.

4. [Branford Vol.19 No.2,1995/96](https://timslife.com/brancat/Catalogs/bb19-2_1995.pdf), existing source473, printed/PDF p.22. Original page visually re-read; Love Levers entry D really prints199g per pair and oversized stainless pivots. This confirms the existing transcription, not the real-world accuracy of the retailer's weight.

5. Original VeloBase specimen pages/photos for [4369](https://velobase.com/Pages/ViewComponent.aspx?ID=76C8B904-3180-45E6-9E31-89E9E66AD64B) and [4370](https://velobase.com/Pages/ViewComponent.aspx?ID=B372908D-B63A-4F97-BDBB-57524D9AAD32), all three/two photographs respectively inspected. Photos are specimen evidence; contributor capacities/chronology are not promoted to maker specifications.

### Powerglide comparison

| Evidence | Cage / weight / capacity | Interpretation |
| --- | --- | --- |
| Existing4369 and original specimen | Long cage, red/gold/green finish, PAUL and US-flag decals;195g reported without Actual/Spec basis. | Long-cage specimen;195g is not contradicted by a lighter medium cage. |
| Existing4370 and original specimen | Long cage, engraved PAUL/USA face; no weight in DB/original page. | The early-version title is a contributor label; it does not date the specimen or identify a medium-cage configuration. |
| Internally1996 maker p.3 | Long/medium/short options; **175g (medium cage)**; capacity literally32 teeth (medium cage). | Keep the capacity label literal; the table does not identify it as maximum sprocket versus chain wrap. Do not silently convert it into either. |
| Green technical panel0003, attributed1997 | **167g (medium cage)**; long/medium/short capacities42/36/27T. | Even medium-to-medium differs from1996. This is an edition/revision discrepancy, not solely a cage-size explanation. |
| Dated1996 dealer list | Long, medium or short cages explicitly sold. | Confirms distinct options at that date, but supplies no weights/capacities or specimen-to-revision crosswalk. |

The1996 maker text describes refinements during Powerglide's first year, including a stronger cage spring, replaceable pivots, sealed pulleys and a breakaway mounting bolt. Its illustration is a long-cage unit and is not the weighing reference by implication. The later-attributed green technical panel instead stresses reworked geometry. Neither fact securely assigns either existing specimen to that exact technical revision.

Both maker tables identify6061-T6 bodies/links/cages, brass bushings,7075-T6 cage/mount bolts, stainless cable-clamp screw and Delrin pulleys with sealed bearings. These family facts do not justify replacing an individual specimen's weight or capacity. The original VeloBase entries both list long cage,32T maximum sprocket and40T wrap; those contributor fields are not proof that the maker's42T long cage is identical.

**Decision:** retain4369/4370 and their dates/weights; no merge, automatic reassignment or new three-cage insertion from the current comparison. The engraved/decal observations are useful distinguishing evidence, but not a proven generation chronology. The remaining reconciliation needs a revision/cage-specific match, not a search for a single correct Powerglide weight.

### Love Lever comparison

| Evidence | Pull / construction / weight | Interpretation |
| --- | --- | --- |
| Branford1995/96 p.22 →12027 |6061-T6, oversized stainless pivots, reach adjustment, black/purple/blue, **199g per pair**; no LP/long-pull designation. | Preserve the exact retailer claim and hardware. Absence of LP wording alone is insufficient to assign a pull ratio. |
| Internally1996 maker p.8 |6061-T6, adjustable brass pivot and stainless thrust washers; lever lengthened1cm for1996 and claimed5g reduction; **110g per pair,55g each**. | A positively identified hardware revision. Weight basis is explicit here; the110g figure is not a single lever. |
| Green brochure standard Love Lever | Works best with cantilevers; adjustable9.5mm brass pivot, reach adjustment and slotted barrel adjuster;110g mentioned without an explicit weighing basis in that panel. | Do not automatically transfer its full identity or weight to Branford's stainless-pivot record. |
| Green brochure and dated1996 sheet, Love Lever LP | Separate long-pull offering: **23mm cable pull**, intended for Motolite linear-pull brakes; standard/long-pull right/left singles also offered. | LP is a distinct pull configuration. The dated sheet provides no weight; do not assign the standard110g reference to LP by adjacency. |

The new1996 page resolves the weighing basis for that edition. It **does not validate or replace Branford's199g figure**: different documented pivot hardware supports a revision distinction, while the maker's claimed5g reduction does not explain the full89g difference. Retailer error versus different weighing/configuration remains unproved. No substitute number is assigned to12027.

The green brochure's110g alone had been ambiguous during initial triage; the newly recovered1996 maker page now explicitly establishes a110g-per-pair configuration. That evidence is bounded to the identified1996 model, not silently applied to every later Love Lever/LP. The dealer's separately sold replacement adjustable pivots also mean hardware on a surviving specimen can have been retrofitted.

**Comparison-stage decision, implemented by the proposal above:** preserve12027's retailer description/source473 and distinguish its stainless-pivot offering from the1996 adjustable-pivot Love Lever and explicitly23mm LP. The older row's original pull is still unproved; a broad Love Lever name alone is not a basis for treating these configurations as interchangeable. The comparison itself did not authorise additions; the subsequent concrete proposal and user approval did.

For context only, the [current manufacturer's Love Lever page](https://www.paulcomp.com/shop/components/brake-levers/long-pull/love-lever/) describes a long-pull, cartridge-bearing design. Current unsuffixed naming is not a crosswalk for the1990s standard/LP or pivot generations; no modern specs were copied.

### Live baseline and impact

All existing Paul463 rows are below; the all-brand Powerglide/Love-Lever alias query found no additional rows. All have NULL group_id/image hash and zero bike links. No Paul maker source was registered by label at the live check;473 is the relevant retailer source.

| ID / category | Title | Exact current description | Dates | source_ref | UUID / source_id | search_text |
| --- | --- | --- | --- | --- | --- | --- |
| 4369 /15 Rear Derailleurs | Paul Components Powerglide | Paul Components Powerglide, United States, 195 grams |1990–1990|1|76C8B904-3180-45E6-9E31-89E9E66AD64B|Paul Components Powerglide|
| 4370 /15 Rear Derailleurs | Paul Components Powerglide (early version) | Paul Components Powerglide (early version), United States |1990–1990|1|B372908D-B63A-4F97-BDBB-57524D9AAD32|Paul Components Powerglide|
| 12027 /2 Brake Levers | Paul Components Love Levers | Machined 6061-T6 aluminium brake levers, oversized stainless pivots and reach adjustment; black, purple or blue; 199g per pair. |1995–1996|473|63962acf-be37-4f01-b85d-9594023e3800|Paul Components Love Levers|

No affected generator overrides were found. The broad live-spec search matched only French fork text containing Épaules (25014/25031), not Paul components; these are excluded. No named Paul fitment or immediate wrong link was established. This read-only review therefore requires no generator run or SQL idempotence claim.

### Original specimen and supplementary evidence URLs

VeloBase image base `https://velobase.com/CompImages/RDerailleur/`:

- 4369: `2DDD08A8-B428-43A2-B618-A1475955E57B.jpeg`, `650435A6-66EF-4086-8D37-FEB6558AAAAA.jpeg`, `B5FC6AA2-D6F4-4CB0-B22F-8FECB8BFC76D.jpeg`.
- 4370: `F2075623-5B33-4C99-9B8A-F4E1DD9B829C.jpeg`, `8134CD95-80D1-4C55-AF42-F4195A281EB6.jpeg`.

The [MTB-News discussion](https://www.mtb-news.de/forum/t/paul-love-levers-evolution.968521/) was a discovery route to the maker booklet. Its original maker-page attachment `https://www.mtb-news.de/forum/attachments/paul-love-lever-katalog-jpg.1612320/` agrees with the full archive page. Forum generation labels/dates and contributor weight estimates were not adopted as source facts. The separate Disraeli Rasta specimen page reports195g and uncertain32T/40T figures; its chronology was not used to redate either DB row. A Paul website2000 archive and modern manufacturer page were inspected as context, not retroactive1996 specifications.

### Remaining action and housekeeping

The guarded, variant-specific proposal is now applied and validated above, preserving all existing dates and separately attributed weights. Unresolved Powerglide figures stay off the long-cage rows and the documented Love Lever offerings remain distinct. Other Paul brakes, hubs and 409 were outside this original pass; the later remaining-component reconciliation above supersedes that scope limit.

The comparison,proposal and review/apply actions are complete and removed from TODO. This evidence and the direct source URLs supersede the Paul acquisition-only status in source-hunts.md. Comparison-stage downloads and applied SQL/validation files were removed after their evidence and results were preserved here.
