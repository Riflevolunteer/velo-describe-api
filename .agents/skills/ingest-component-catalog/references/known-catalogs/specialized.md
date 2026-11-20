# Specialized catalogs processed so far

## Components 1989 — applied and validated 2026-11-21

User approved the reviewed proposal with “apply”. Registered **source500**, **Specialized Components (1989)**, citing the original maker post and scan filenames0001–0008. Applied **15 description/source updates and nine additions12190–12198**. Existing dates and bike links are fixed; no merges or deletions.

Updated IDs:6865,6867,6868,11347,11348,11349,11350,11351,11352,11353,11354,11357,11358,12018,12019. Exact applied descriptions and full pre-load restoration values remain in the approved proposal below. All keep their old titles, search_text and UUIDs; source_ref changes from422 or472 to500.

New rows are brand53,1989–1989 availability attestations, not production boundaries; group_id/image NULL. Exact descriptions remain below. New category associations are Headsets12 and Saddles17.

| ID | Title | UUID |
| --- | --- | --- |
| 12190 | Specialized Fat Boy/K4 | c0b2e6f4-cd69-40b2-abf7-2557e4e1329f |
| 12191 | Specialized Nimbus | 049660c0-896a-418d-a85d-eb395c3c5283 |
| 12192 | Specialized Ground Control/K4 | f7a1a6b2-f3a9-4434-8e9d-a5fc8c16ee97 |
| 12193 | Specialized Blob (men's) | 64adf62e-7a12-4d77-b082-33df910cde2a |
| 12194 | Specialized Blob (women's) | 2ea66fd9-40f1-4b15-99e7-2d5c7e2b413c |
| 12195 | Specialized TIG Sport Stem | 3e4a0e24-0f91-44a3-adb5-497f5f2dc1ee |
| 12196 | Specialized TIG Comp Stem | d11d439c-194a-4533-88c2-8ed53bedc485 |
| 12197 | Specialized Compact Sealed Headset (alloy) | a12edcd1-c520-49dc-aefd-e9e8c7ff7103 |
| 12198 | Specialized Compact Sealed Headset (steel) | 0926bdeb-4161-44fe-85da-14137679b81c |

**Identity decisions retained:** TriCross9909/10230 and Off-Road Bar System remain held without speculative rows/merges. Stumpjumper6683,S-2 Road6684 and Bullmoose2920 remain unchanged. Turbo VS11355/VR11356 retain source422. Blob12193/12194 are explicitly offered men’s/women’s models (0006); headsets12197/12198 are alloy/steel (0007), so these are reviewed non-duplicates.

Existing bike links18003→11347 and18021→11349 are unchanged. The only unlinked maker/model search hits are Umma Gumma tyre specs20131/20149, not identified by this catalogue. No new supported bike link was demonstrated.

### Validation

- Full before/after snapshots checked every one of11,253 pre-existing component rows. Exactly the21 approved existing rows changed: descriptions/source_ref, plus12048 title/search_text. All existing dates, UUIDs, other titles/search strings, categories, groups and image hashes are unchanged. All10 additions match the approved title, description, UUID, generated search_text, category, NULL group/image and catalogue-year attestation.
- All24,479 live bike specs and all1,422 bikes are unchanged in every captured field. Brand/category/group records and all493 existing sources are unchanged. The only category_brand additions are Specialized53/Headsets12 and53/Saddles17. Sources500/501 are the only new sources.
- Full generator comparison across117 loaded catalogues and24,479 specs has identical scope, summary and findings before/after:24,464 matching specs and15 pre-existing lost mappings, with zero new gained/lost/changed mappings. No CSV, bike matcher, override or link changes were needed.
- Whole-DB quality summary and complete findings are unchanged: zero errors and2,032 review findings. All31 written descriptions fit varchar(255), maximum225 characters. DB readback verifies provenance, stored lengths and fixed existing dates.
- Both SQL files were rerun in full: zero affected rows for sources, category registrations, component inserts and component updates. Each catalogue ran in its own transaction. Specialized31 statements affected one source,two category associations,nine inserts and15 updates; Ringlé11 statements affected one source,one insert and six updates.
- Post-load near-name and parenthetical reports returned zero candidates for both makers. Ordinary grouping surfaced only the already held TriCross generations and the separately offered Blob, headset and Zooka configurations. Reviewed pairs are recorded in duplicate-classify.js REVIEWED_NOT_DUPLICATES:12193/12194,12197/12198,12048/12199. The retained saddle pair now reports variant; headset/Zooka pairs remain configuration. Existing duplicate-classification/report tests pass (two test files).
- Completed review/apply tasks were removed from TODO; evidence holds remain in these notes. Temporary SQL, snapshots, comparison reports and helpers were removed after validation and housekeeping.

## Components 1989 — reconciled proposal 2026-11-21

**Historical approved proposal, now applied and validated above.** The following records the exact reviewed change set and its pre-load baseline; application status and validation are in the current section above.

The 28 inventory entries resolve to **15 existing description updates, nine additions, two unchanged matches and two held entries**. Existing updated rows remain brand53/category23; titles, UUIDs, dates, search_text, group_id and image_hash stay unchanged. New rows use1989–1989 as availability evidence, not production boundaries.

Changed rows/additions now use **source500, Specialized Components (1989)**, citing the [original maker post](https://www.gringineer.com/blogs/default-blog/1989-specialized-components-catalog) and original scan filenames0001–0008 documented below. No registration existed at the proposal-stage check. Unchanged rows keep their source_ref. New rows have group_id/image_hash NULL and fresh UUIDs; missing category_brand associations were created idempotently.

### Identity and source reconciliation

- **TIG Sport and Comp are separate additions.** The [original Stumpjumper6683 specimen](https://velobase.com/Pages/ViewComponent.aspx?ID=F3E99B36-0AD9-464F-95E6-CFAD5E343BCA) was recovered and all five photographs visually inspected. They show a polished twin-arm/triangular quill assembly, two split handlebar clamps and a central horizontal cable-stop crossbrace. Maker0007 shows black single-extension Cr-Mo TIG Sport/Comp stems with internal cable tube. Keep6683 separate and unchanged; do not infer a production year from its stamp. S-2 Road6684 and integrated Bullmoose2920 are also retained.
- Original specimen image files under `https://velobase.com/CompImages/Stems/`: `20F6C66A-B675-44BC-A6C5-512BF4B32E33.jpeg`, `1D0302FC-C922-4144-BEB8-3D40A18E93F8.jpeg`, `9FF5ECEF-6309-42A1-8CAB-F6A7CBCA94D4.jpeg`, `776D8227-2C34-46CC-943B-8CF91B0C1C89.jpeg`, `05302FA0-560C-43C5-8048-AD3323D1C578.jpeg`.
- **Fat Boy/K4, Nimbus and Ground Control/K4** have no named/alias match in the all-brand query. K4 means a puncture belt, not a synonym for Kevlar bead or base tyre. Blob expressly offers men's/women's models; Compact Sealed expressly offers alloy/steel models. Those are separate offered configurations even without individual dimensions. Stem reach units remain unstated; headset sizing is transcribed without assigning an unsupported unit or standard.

- **Nashbar422 was re-read from the original 68-page scan**, printed [pp.65–66](https://drive.google.com/uc?export=download&id=1a93988JbJO2Sn9v8pOBZB5U4Z4plTAdh). The table really lists Crossroads II530g, Ground Control735g, Ground Control S600g, Hardpack520g, Turbo R/K4 170g, Touring II270g and Turbo S180g. Different maker1989 weights do not justify erasing the older edition. Unsized table weights stay qualified; maker weights are tied to actual sizes. Independent Touring II265g(avg) and Turbo S197g(avg) survive separately from claimed catalogue weights.
- Nashbar prose confirms Turbo LR's27x1,27x1-1/8,700x19/25/28 options. Do not drop those because maker1989's grouped table labels some rows LS. Shared unsuffixed700x25 entries remain explicitly shared in the descriptions. Source472 is **Colorado Cyclist (attributed1988)**; its ultralight tube bundles for12018/12019 survive.

- **TriCross held, not merged or added.** Nashbar p.65 expressly offers27x1-3/8,700x35C and multiple26in sizes including26x1.75; p.66 gives a single470g/75psi/36tpi without a size. This establishes a broader period family, but does not assign that weight to26x1.75/530g9909 or establish that later700x35C/337g10230 is maker1989's470g construction. Leave both unchanged. A size/construction-specific crosswalk is needed to reopen.
- **Off-Road Bar System held.** This is an incompletely enumerated family, with SLX expressly double heat-treated but no full configuration matrix or widths. No speculative generic insert or merge into2920.
- **11355 Turbo VS and11356 Turbo VR unchanged:** existing descriptions already carry the material/bead/tread,700x25/165g/115psi/110tpi facts. Keep source422. Other existing Specialized rows absent from the maker inventory are not invalidated.

### Exact description updates

Retain every existing date and title. Edition names distinguish differing specifications; ordinary descriptions do not repeat their own source.

| ID / title change | Exact proposed description |
| --- | --- |
| 6865 | Fine-cord touring tyre; 265g (avg). Nashbar 1988: 270g/105psi/66tpi. 1989: 700x25/27x1, 260g/105psi; 700x28/27x1-1/8, 290g/95psi; 700x32/27x1-1/4, 330g/95psi; all 66tpi. |
| 6867 | Heavy-duty touring/tandem clincher with thick X-pattern tread and reinforced casing; 400g, 36tpi, 95psi. 27x1-1/4 listed in 1988/1989; independently recorded 700x32c specification retained. |
| 6868 | Folding file-tread clincher with Kevlar bead; 197g (avg). Nashbar 1988: 180g, 115psi, 106tpi. 1989: 700x28(S), 240g/105psi/66tpi; shared S/R table 700x25, 180g/115psi/106tpi. Earlier 27x1 and 27x1-1/8 options. |
| 11347 | On/off-road interlocking tread. 35-80psi; 1989: 26x1.5, 550g; 24x1.5, 500g (25tpi); 26x1.95, 650g; 24x1.95, 600g (66tpi). Nashbar 1988 lists 530g/25tpi without a weight-specific size. |
| 11348 | Folding Kevlar-bead racing knobby, 26x1.95, 35-80psi, 66tpi; 1989 open-knob pattern for front competition/mud use, 590g. Nashbar 1988 lists 600g. |
| 11349 | Nylon-casing off-road knobby, 35-80psi, 66tpi. 1989: 26x1.95, 670g; 24x1.95, 650g. Nashbar 1988 lists 735g for the 26x1.95 offering. |
| 11350 | Off-road knobby for rocky/hard ground, 35-80psi, 66tpi; 26x1.5, 520g; 26x2.2, 705g. Nashbar 1988 gives 520g without identifying which of its two listed sizes was weighed. |
| 11351 | Slick city/off-road tyre, 100psi, 66tpi: 26x1.25, 375g; 26x1.95, 695g; 24x1.25, 335g. The 1.25in tyre requires a rim 1.5in or narrower. Separate from the Kevlar-belted Fat Boy/K4. |
| 11352 | Wire-bead file-tread clincher. 1989: 27x1(LS), 240g/115psi/106tpi; 700x28 and 27x1-1/8(LS), 300g/105psi/66tpi; shared LS/LR table 700x25, 240g/115psi/106tpi. Nashbar 1988 lists 240g/115psi/106tpi across its size offering. |
| 11353 | Wire-bead slick clincher. 1989: 700x19(LR), 230g/115psi/106tpi; shared LS/LR table 700x25, 240g/115psi/106tpi. Nashbar 1988 also offers 27x1, 27x1-1/8 and 700x28, with a single 230g/115psi/106tpi listing. |
| 11354 | Folding slick racing clincher with Kevlar puncture belt between casing plies. Nashbar 1988: 700x25, 170g/115psi/106tpi. 1989 shared S/R K4 table: 700x25, 195g/115psi/106tpi. |
| 11357 | Heavy-duty nylon-casing city tyre with deep-ribbed tread, 25tpi. 27x1-1/8: 475g/100psi; 27x1-1/4: 500g/100psi; 26x1-3/8: 610g/80psi. Nashbar 1988 gives 475g/100psi across its size offering. |
| 11358 | Touring clincher with Kevlar puncture belt between casing plies, 66tpi. 700x25/27x1: 335g/100psi; 700x28/27x1-1/8: 355g/95psi; 700x32/27x1-1/4: 370g/95psi. Nashbar 1988 lists 355g/100psi. |
| 12018 | Kevlar-bead file-tread road clincher with K4 puncture belt. 700x28(S): 255g/105psi/66tpi; shared S/R K4 table 700x25: 195g/115psi/106tpi. Colorado Cyclist 1988 offered it with an ultralight tube. |
| 12019 | Kevlar-bead slick road clincher, without K4 puncture belt. 700x19(R): 170g/115psi/106tpi; shared S/R table 700x25: 180g/115psi/106tpi. Colorado Cyclist 1988 offered 700x19/25 with an ultralight tube. |

### Exact additions

All are brand53,1989–1989,group_id/image_hash NULL. No numeric maker part number was established. Guard by brand/category/exact configuration title and recheck aliases before insertion. Generate search_text using the maintained helper, including its normal removal of bracketed qualifiers; generate fresh UUIDs at application.

| Category / ID | Proposed title | Exact proposed description |
| --- | --- | --- |
| Tyres / 23 | Specialized Fat Boy/K4 | Slick city/off-road tyre with Kevlar puncture belt between casing plies; 26x1.25, 420g, 100psi, 66tpi; separate from the unbelted Fat Boy. |
| Tyres / 23 | Specialized Nimbus | Street/all-weather touring tyre; 26x1.4, 500g, 35-80psi, 66tpi. |
| Tyres / 23 | Specialized Ground Control/K4 | Off-road knobby with Kevlar puncture belt between casing plies; 26x1.95, 710g, 35-80psi, 66tpi; separate from Ground Control and folding Ground Control/S. |
| Saddles / 17 | Specialized Blob (men's) | Men's Blob saddle; second-generation variable-thickness Elastopolymer gel, strengthened rails, shorter nose and wider rear. Rail alloy, dimensions and weight unspecified. |
| Saddles / 17 | Specialized Blob (women's) | Women's Blob saddle; second-generation variable-thickness Elastopolymer gel, strengthened rails, shorter nose and wider rear. Individual dimensions, rail alloy and weight unspecified. |
| Stems / 22 | Specialized TIG Sport Stem | Cr-Mo TIG-welded stem, black chrome finish, internal brake-cable tube, 24deg rise; 25.4/26.0mm handlebar clamps. Printed reaches 10.5/12.5/14.5, unit unstated. |
| Stems / 22 | Specialized TIG Comp Stem | Cr-Mo TIG-welded stem, black chrome finish, internal brake-cable tube, 10deg rise; 25.4/26.0mm handlebar clamps. Printed reaches 11.5/13.5/15.5, unit unstated. |
| Headsets / 12 | Specialized Compact Sealed Headset (alloy) | Low-profile alloy headset with contact-sealed upper/lower races and O-ring locknut; English/Italian threads; printed sizing 30.2/26.4 and 30.0/27.0. Stack height and weight unspecified. |
| Headsets / 12 | Specialized Compact Sealed Headset (steel) | Low-profile steel headset with contact-sealed upper/lower races and O-ring locknut; English/Italian threads; printed sizing 30.2/26.4 and 30.0/27.0. Stack height and weight unspecified. |

### Restoration baseline and validation

Pre-load read-only baseline captured2026-11-21. Old search_text equals the old title in every row; all15 have group_id/image_hash NULL. Full old descriptions and provenance follow for restoration.

| ID | Old title / search_text | Old description | Dates | source_ref | source_id |
| --- | --- | --- | --- | --- | --- |
| 6865 | Specialized Touring-II | Specialized Touring-II, United States, 265 grams (avg). Extra fine cords, otherwise as Touring. Sizes 27 x 1, 27 x 1 1/8, 700x25, 700x28; 66 tpi, 95 psi. | 1980–1988 | 422 | 9CC4F586-57ED-4E06-A52D-EBACE860111A |
| 6867 | Specialized Touring-X | Specialized Touring-X, United States, 400 grams (Spec), 700x32c. Extra thick X-shaped tread for heavy touring and tandems; also 27 x 1 1/4; 36 tpi, 95 psi. | 1980–1988 | 422 | 3B1E653B-BDE2-4949-BB1E-90B2AE306D18 |
| 6868 | Specialized Turbo S | Specialized Turbo S, United States, 197 grams (avg). Folding clincher, 27 x 1 and 700C x 1. Also 700x25; 106 tpi, 100 psi. | 1979–1988 | 422 | 69CAE715-643C-42A1-8302-0FF97BE2DA6A |
| 11347 | Specialized Crossroads II | On/off-road tyre, flat-top section with interlocking tread blocks; 24x1.5, 26x1.5, 26x1.95; 530g, 35-80 psi, 25 tpi. | 1988–1988 | 422 | d6e8aca7-a712-4cbe-ab0e-7597f49c4f4b |
| 11348 | Specialized Ground Control S | Off-road racing tyre, folding Kevlar bead, 26x1.95, 600g, 35-80 psi, 66 tpi, knobby. | 1988–1988 | 422 | 6e91354f-d6d5-488a-b94f-d625b85195bb |
| 11349 | Specialized Ground Control | Off-road tyre, nylon casing, 26x1.95, 735g, 35-80 psi, 66 tpi, knobby. | 1988–1988 | 422 | afb60cb2-0129-4374-b51d-b84e8a5e07e0 |
| 11350 | Specialized Hardpack | Off-road tyre for maximum flotation, 26x2.2 or 26x1.5, 520g, 35-80 psi, 66 tpi, knobby. | 1988–1988 | 422 | 552658f0-a365-4afc-b800-cfbac422fc8e |
| 11351 | Specialized Fat Boy | Slick city / off-road tyre, 26x1.25, 100 psi, 66 tpi. | 1988–1988 | 422 | c3c277e3-e0b1-4444-b0f7-d6c87990f516 |
| 11352 | Specialized Turbo LS | High-performance touring clincher, steel bead, fine-weave nylon casing; 27x1, 27x1-1/8, 700x25c, 700x28c; 240g, 115 psi, 106 tpi. | 1988–1988 | 422 | dc31097f-3e3a-4221-8afb-e3c344242686 |
| 11353 | Specialized Turbo LR | Racing / training clincher, nylon casing; 27x1, 27x1-1/8, 700x19c, 25c, 28c; 230g, 115 psi, 106 tpi, smooth. | 1988–1988 | 422 | 8dc32303-47ff-498b-ab42-6ce83b5dcad9 |
| 11354 | Specialized Turbo R/K4 | Folding racing clincher, 106 tpi casing with Kevlar belt, 700x25c, 170g, 115 psi. | 1988–1988 | 422 | f4ce0149-c59f-473a-b27a-4b30265ef29e |
| 11357 | Specialized Commuter II | City tyre, nylon casing, deep-ribbed tread; 26x1-3/8, 27x1-1/8, 27x1-1/4; 475g, 100 psi, 25 tpi. | 1988–1988 | 422 | 40902ae3-2096-488c-9034-5f825d6f1769 |
| 11358 | Specialized Touring II K4 | Puncture-resistant touring clincher, Kevlar-blend casing; 27x1 to 27x1-1/4, 700x25c, 28c, 32c; 355g, 100 psi, 66 tpi. | 1988–1988 | 422 | f375fd5c-4fae-46be-aea9-a71f26e4bc6e |
| 12018 | Specialized Turbo S K4 | Kevlar-belted road clincher, offered separately from the unbelted Turbo S; sold with an ultralight inner tube. | 1988–1988 | 472 | e740f421-f806-422b-9fe5-3e84a9989590 |
| 12019 | Specialized Turbo R | Road clincher in700x19 or700x25, offered separately from the Kevlar-belted Turbo R K4; sold with an ultralight inner tube. | 1988–1988 | 472 | 02e2911b-b32e-4071-8549-a110e34223cc |

Bike links remain **18003**,1988 Ozark II, `Specialized Crossroads II, 26 x 1.5` →11347, and **18021**,1988 Avanti, `Specialized Ground Control 26 x 1.95` →11349. No relink is proposed. Other queried Specialized rows have no bike links. The edition-qualified1989 evidence is not an assertion that1988 bikes used later revisions.

Scripted comparison checks one baseline per update, absent addition titles after punctuation/case folding, unique proposed identities and descriptions≤255. The all-brand alias query returned only the existing Bullmoose, Stumpjumper,S-2 and Zooka leads, not any of these new Specialized offerings. Categories12 Headsets,17 Saddles,22 Stems and23 Tyres were verified live.

The proposal-stage checks below were read-only; application, idempotence, DB readback and full mapping validation are now complete above. The two identity holds remain evidence decisions, without duplicate hunt tasks. Task downloads/renders and proposal JSON were removed once the exact review and restoration data had been preserved here.

## Components 1989 — inventory 2026-11-21

**Historical inventory stage; the proposal above supersedes its next actions.**

**Inventory and read-only comparison only.** No SQL, source registration,
component/date/link changes or generator edits. This completes the source
hunt's remaining-page inventory, not an approved ingestion proposal.

### Source, scope and page ledger

[Original maker scan post](https://www.gringineer.com/blogs/default-blog/1989-specialized-components-catalog).
Eight images: featured cover
[Speccomp1989_0001](https://www.gringineer.com/cdn/shop/articles/Speccomp1989_0001.jpg?v=1794971553)
and body `Speccomp1989_0002.jpg` through `_0008.jpg` under
`https://cdn.shopify.com/s/files/1/0661/0501/6425/files/`.
The cover explicitly prints **1989 Components**. No maker-labelled source
was found in the live source-label check. Existing related sources include
Bike Nashbar Spring1988 **422**, Colorado Cyclist (attributed1988) **472**, and Guida1996/1999
**357/353**; they are separate publications.

Page numbers below are scan suffixes/bound review PDF positions, not printed
folios. All six body content pages0002–0007 were visually inspected at1800px;
the previously inspected cover/address back0001/0008 establish edition/limits.
The posted set has both covers; physical completeness is not independently
certified.

| Scan | Contents and scope |
| --- | --- |
|0001|Dated cover.|
|0002|Seven tyre models, with size/pressure/TPI/weight tables; pump/patch kit excluded.|
|0003|Fourteen named tyre variants in grouped tables; tyre levers/rim strips excluded.|
|0004|Shoes and bags; excluded.|
|0005|Shoes, cleats, bags and tools; excluded. Saddles visible under bags are not separately named offerings here.|
|0006|Blob saddles in men's/women's options; gloves, helmet, clips and straps excluded.|
|0007|TIG Sport/Comp stems, alloy/steel Compact Sealed Headsets, Off-Road Bar System; bottle cages/bottles and Stayguard excluded.|
|0008|Address back cover; no component specifications.|

### Eligible inventory

**28 inventory entries**:21 named tyre variants,2 Blob options,2 stems,
2 headset material options and1 incompletely specified bar family. These are
inventory configurations/families, **not28 proposed database additions**.
All are1989 availability evidence; no production-boundary or date change
is inferred. No numerical maker part codes were established.

| Category | Scan | Printed model / configuration | Source specifications | Existing-record comparison |
| --- | --- | --- | --- | --- |
| Tyres | 0002 | Specialized Commuter II | Heavy-duty casing/deep tread. 27x1-1/8:100psi,25tpi,475g;27x1-1/4:100psi,25tpi,500g;26x1-3/8:80psi,25tpi,610g. | 11357 — named comparison only; retain edition/size differences. |
| Tyres | 0002 | Specialized Touring II | Smooth centre/recessed herringbone. 700x25C and27x1:105psi,66tpi,260g;700x28C and27x1-1/8:95psi,66tpi,290g;700x32C and27x1-1/4:95psi,66tpi,330g. | 6865 — named comparison only; retain edition/size differences. |
| Tyres | 0002 | Specialized Touring X | Thick tread/triple casing. 27x1-1/4:95psi,36tpi,400g. | 6867 — named comparison only; retain edition/size differences. |
| Tyres | 0002 | Specialized TriCross | Road-bike loose dirt/mud/hard-surface tyre. 700x35C and27x1-3/8:75psi,36tpi,470g. | 9909 is26in;10230 is700x35C but later337g. Construction/generation comparison required. |
| Tyres | 0002 | Specialized Crossroads II | On/off-road tread. 26x1.5:550g;26x1.95:650g;24x1.5:500g;24x1.95:600g. All35-80psi;1.5in25tpi,1.95in66tpi. | 11347 — named comparison only; retain edition/size differences. |
| Tyres | 0002 | Specialized Fat Boy | Slick. 26x1.25:375g;26x1.95:695g;24x1.25:335g;100psi,66tpi. 1.25in size requires1.5in-or-narrower rims. 1.95in and24in additions marked new. | 11351 — named comparison only; retain edition/size differences. |
| Tyres | 0002 | Specialized Fat Boy/K4 | Separate puncture-belted version: Kevlar layer between casing plies. 26x1.25:100psi,66tpi,420g; marked new. | No named row found in the queried inventory; candidate for reconciliation. |
| Tyres | 0003 | Specialized Touring II K4 | Touring II with Kevlar puncture belt between casing plies. 700x25C/27x1:100psi,66tpi,335g;700x28C/27x1-1/8:95psi,66tpi,355g;700x32C/27x1-1/4:95psi,66tpi,370g. | 11358 — named comparison only; retain edition/size differences. |
| Tyres | 0003 | Specialized Turbo/LS | Wire-bead file-tread Turbo; shared LS/LR table. Explicit LS rows27x1:115psi,106tpi,240g;700x28 and27x1-1/8:105psi,66tpi,300g. Unsuffixed700x25C row115psi,106tpi,240g. | 11352 — named comparison only; retain edition/size differences. |
| Tyres | 0003 | Specialized Turbo/LR | Wire-bead slick Turbo; shared LS/LR table. Explicit LR700x19:115psi,106tpi,230g. Unsuffixed700x25C row115psi,106tpi,240g; other rows explicitly LS. | 11353 — named comparison only; retain edition/size differences. |
| Tyres | 0003 | Specialized Turbo/S | Kevlar-bead file-tread Turbo. Explicit700x28(S):105psi,66tpi,240g. Shared S/R table's unsuffixed700x25C row:115psi,106tpi,180g;700x19 explicitly R. | 6868 — named comparison only; retain edition/size differences. |
| Tyres | 0003 | Specialized Turbo/R | Kevlar-bead slick Turbo. Explicit700x19(R):115psi,106tpi,170g. Shared S/R table's unsuffixed700x25C row:115psi,106tpi,180g;700x28 explicitly S. | 12019 — named comparison only; retain edition/size differences. |
| Tyres | 0003 | Specialized Turbo/S K4 | File tread with Kevlar puncture belt between casing plies. Explicit700x28(S):105psi,66tpi,255g. Shared S/R K4 table's unsuffixed700x25C row:115psi,106tpi,195g. | 12018 — named comparison only; retain edition/size differences. |
| Tyres | 0003 | Specialized Turbo/R K4 | Slick tread with Kevlar puncture belt between casing plies. Shared S/R K4 table's unsuffixed700x25C row:115psi,106tpi,195g;700x28 explicitly S. | 11354 — named comparison only; retain edition/size differences. |
| Tyres | 0003 | Specialized Turbo/VS | File tread, Kevlar-blend casing and folding Kevlar bead. Shared VS/VR table700x25C:115psi,110tpi,165g. | 11355 — named comparison only; retain edition/size differences. |
| Tyres | 0003 | Specialized Turbo/VR | Slick tread, Kevlar-blend casing and folding Kevlar bead. Shared VS/VR table700x25C:115psi,110tpi,165g. | 11356 — named comparison only; retain edition/size differences. |
| Tyres | 0003 | Specialized Nimbus | Street/all-weather touring tread. 26x1.4:35-80psi,66tpi,500g. | No named row found in the queried inventory; candidate for reconciliation. |
| Tyres | 0003 | Specialized Hardpack | Rocky/hard-ground knobby. 26x1.5:520g;26x2.2:705g;35-80psi,66tpi. | 11350 — named comparison only; retain edition/size differences. |
| Tyres | 0003 | Specialized Ground Control | Off-road knobby. 26x1.95:670g;24x1.95:650g;35-80psi,66tpi. | 11349 — named comparison only; retain edition/size differences. |
| Tyres | 0003 | Specialized Ground Control/S | Lightweight Kevlar-bead racing tyre; new open knob pattern, front competition/mud use. 26x1.95:35-80psi,66tpi,590g; marked new. | 11348 — named comparison only; retain edition/size differences. |
| Tyres | 0003 | Specialized Ground Control/K4 | Ground Control with separate Kevlar puncture belt between casing plies. 26x1.95:35-80psi,66tpi,710g; marked new. | No named row found in the queried inventory; candidate for reconciliation. |
| Saddles | 0006 | Specialized Blob (men's model) | Men's option; second-generation Elastopolymer gel with variable thickness, stronger1989 rails, shorter nose/wider back described for the Blob family. No weight, dimensions or specific rail alloy printed. | No named model/configuration row found; inventory candidate, not an insertion decision. |
| Saddles | 0006 | Specialized Blob (women's model) | Women's option; shares the printed Blob-family gel/rail description. Separate men's/women's options expressly offered, but individual dimensions/construction differences are not specified. | No named model/configuration row found; inventory candidate, not an insertion decision. |
| Stems | 0007 | Specialized TIG Stem System, Sport | Cr-Mo with black chrome finish, internal brake-cable tube;24deg rise, printed reaches10.5/12.5/14.5 (unit not stated);25.4/26.0mm handlebar clamps. | No named Sport/Comp row; inspect uncoded Stumpjumper6683 before deciding insertion. |
| Stems | 0007 | Specialized TIG Stem System, Comp | Cr-Mo with black chrome finish, internal brake-cable tube;10deg rise, printed reaches11.5/13.5/15.5 (unit not stated);25.4/26.0mm handlebar clamps. | No named Sport/Comp row; inspect uncoded Stumpjumper6683 before deciding insertion. |
| Headsets | 0007 | Specialized Compact Sealed Headset (alloy) | Low-profile alloy option, contact-sealed top/bottom races and O-ring locknut;English/Italian threads;30.2/26.4 and30.0/27.0 sizing. No numbered code/stack/weight. | No named model/configuration row found; inventory candidate, not an insertion decision. |
| Headsets | 0007 | Specialized Compact Sealed Headset (steel) | Separate steel option with the same printed seal/thread/fit list; no numbered code/stack/weight. | No named model/configuration row found; inventory candidate, not an insertion decision. |
| Handlebars | 0007 | Specialized Off-Road Bar System | Family listing:5/8deg bends,black/silver anodising,25.4/26.0mm clamps;SLX models expressly double heat-treated alloy. No width/weight, base alloy or full model-code matrix; not a settled single-row identity. | Family/SLX identity incomplete; do not identify this separate handlebar with integrated Bullmoose2920. |

### What we can ascertain

- **Bead, casing and puncture belt are different features.** Maker
  [0003](https://cdn.shopify.com/s/files/1/0661/0501/6425/files/Speccomp1989_0003.jpg)
  distinguishes wire-bead LS/LR, Kevlar-bead S/R, K4 belt versions, and
  VS/VR Kevlar-blend casings with folding Kevlar beads. Do not make K4
  a generic synonym for a Kevlar bead or merge S/R/file/slick offerings.
- **Grouped tyre tables need literal transcription.** Shared unsuffixed
  700x25 rows are recorded as shared rows above; size rows expressly marked
  (LS),(LR),(S),(R) are not transferred to the other variant. Full future
  reconciliation should preserve this distinction instead of giving every
  model every size in its neighbouring shared table.
- **New named tyre candidates:** Fat Boy/K4, Nimbus and Ground Control/K4
  have no exact named row in the baseline query. Base Fat Boy11351 and
  Ground Control11349 are separate, already represented offerings. This is
  not yet an approved insertion count: check generation/construction and
  title aliases during reconciliation.
- **Size-qualified weights matter.** Maker0003 gives Hardpack26x1.5 **520g**
  and26x2.2 **705g**, while11350 currently mentions both sizes with one520g.
  Maker [0002](https://cdn.shopify.com/s/files/1/0661/0501/6425/files/Speccomp1989_0002.jpg)
  likewise gives different weights/pressures for Commuter II sizes;11357's
  single475g/100psi should not be interpreted as covering its26in option.
  These are concrete description-reconciliation questions, not date problems.
- **Preserve independent edition evidence.** Existing Crossroads II11347
  has530g from Nashbar1988;1989 maker26x1.5 is550g. Ground Control11349
  has735g versus maker670g for26x1.95, and Ground Control S11348 has600g
  versus590g. Differences alone do not prove an old transcription error or
  authorise replacing every older specification.
- **TriCross needs construction evidence.** Maker700x35C/27x1-3/8,470g
  does not identify the older26x1.75/530g9909. Later700x35C10230 is337g.
  Neither shared name nor equal700C size proves identical generation.
- **Additional component evidence:** [0007](https://cdn.shopify.com/s/files/1/0661/0501/6425/files/Speccomp1989_0007.jpg)
  explicitly separates TIG Sport24deg from Comp10deg and alloy from steel
  headset options. Stem reach values are printed without an explicit unit;
  the table preserves them rather than silently converting them to millimetres.
  The Off-Road Bar System names SLX options but lacks the model/configuration
  matrix needed for a precise row. Neither it nor the TIG stems is automatically
  the existing Bullmoose2920, Stumpjumper6683 or S-2 Road6684.
- Blob's second-generation gel and stronger1989 rails are maker claims,
  not proof that a previously pictured generic saddle is this generation.
  The text offers men's/women's models without individual dimensions/weights.
  No earlier/later catalogue was compared to infer that unlisted products
  were dropped; absence here does not invalidate existing cranks/hubs/rims.

### Read-only validation and remaining action

The transcription was saved before the DB read. A script normalised
punctuation/case in titles and compared the inventory with all live
Specialized53 rows plus cross-brand name leads. It found18 tyre names with
existing name candidates (TriCross has two size-distinct candidates), three
without a named match, and no named match for the seven non-tyre entries.
This is **a candidate comparison, not a completed identity diff**.

Live affected fitments are **18003**,1988 Ozark II,
`Specialized Crossroads II, 26 x 1.5` →11347, and **18021**,1988 Avanti,
`Specialized Ground Control 26 x 1.95` →11349. Other queried Specialized
rows have no links. Preserve those existing mappings while comparing model/
edition evidence; no immediate wrong link was established.

Next: reconcile size/bead/belt variants and the new named candidates; compare
uncoded stem/bar identities and the TriCross generations before preparing
any inserts, description changes or merges. No dates or links changed.
Temporary scans, bound PDF, transcription and comparison files were removed
after preserving this inventory, source URLs and the next action in TODO.
