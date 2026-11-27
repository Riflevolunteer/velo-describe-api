# Campagnolo catalogs processed so far

## 1049 crankset identity review — 2026-11-27

The [1982 Campagnolo USA catalogue, pp.25–30](https://ebykr.com/library/campagnolo-1982-catalog/), source 10, lists Record road 1049, Super Record road 1049/A, 1049/3 triple, 1049/4 cyclocross, and 1049/5 triple with special right arm. Its p.27 parts list gives both road sets the 751/752 arms but different 753 and 753/A rings; this is evidence for that printing, not proof of identical components throughout their production. P.30 explicitly describes the 1978–79 right-arm and axle revision, distinguishable by the raised collar around the spindle hole; a model code or year alone does not establish which revision a bike received. Current 1496 1049 road (1967–88) and 1509 1049/A (1974–88) are broad records spanning both revisions, with 45 and 47 bike links respectively, not confidently identified single revisions. The earlier user decision retained the early v1/v2/v3 and v4 rows and the two main groups separately; no new merge or splitting/repointing is proposed.

The 1982 catalogue calls 1049/3 the larger-inner triple and 1049/5 the fixed-36T triple with special crank 819. Component 7003 is explicitly 1049/5; 1498 is a 144/100 BCD triple specimen. Its [VeloBase specimen](https://velobase.com/Pages/ViewComponent.aspx?ID=5e4be2a4-2f98-4b0d-8330-4d4834bb9518) labels its model 1049/5, whereas the earlier note below says it covers 1049/3. Neither assignment is settled merely by that generic DB title: compare an identifiable specimen's inner ring, spider and 819 arm with the maker's 1049/3 and /5 diagrams before merging 1498 with 7003 or assigning /3. This supersedes the earlier unqualified 1498-to-/3 claim. The three early 151 mm BCD records 1501/1502/1503 use VeloBase version/date labels, with no manufacturer-documented change dates yet established here. 1510/1511/1512/1514 are VeloBase-derived no-flute specimens dated 1985–87; obtain dated maker evidence or coded specimens before folding them into 1509 or equating finishes.

Applied on user approval: enriched descriptions for 1496 and 1509 with the 1978–79 arm revision and the 1982 shared arm/different ring evidence, retaining dates, sources, measured weights, all 92 existing bike links and their IDs. Readback verified both rows and their respective 45 and 47 links; SQL replay affected zero rows and the link-decision test passed. Neither model is claimed to be a single arm revision. Rollback: 1496 description `Campagnolo 1049, (Nuovo) Record Strada v4 (BCD 144), Italy, 662 grams (Actual),170 mm w/ 44/54 incl. dustcaps. Arms 165-180mm, chainrings 42-55T. Also sold polished as Special Record.`, source 292; 1509 description `Campagnolo 1049/A, Strada Super Record, Italy, 594 grams (Actual),172,5 mm w/ 52/42 incl. dustcaps`, source 262. Restore those descriptions if reversing.

## Super Record 4061/4061/1 brake reach review — 2026-11-27

[Catalogue 17 (1974)](https://www.campyonly.com/history/catalogs/catalog_17.pdf) and [17a (1975), printed p. 40](https://www.campyonly.com/history/catalogs/catalog_17a.pdf) list the standard 4061 and short 4061/1 sets. The [1982 US catalogue, p. 36](https://www.campyonly.com/history/catalogs/1982_olympic_catalog.pdf) gives their nominal reaches as 52 and 47 mm; [No. 18, December 1986, pp. 56–57](https://ebykr.com/library/campagnolo-catalogue-18/) lists both. The maker listings alone do not establish the date of the caliper revision or independently demonstrate which physical revision the later short set used. Existing 582 (1974–82) and 583 (1983–88) represent presumed early and later versions; the 1983 boundary and later short-reach version assignment remain provisional.

Applied on user approval: folded reach-only 7005 into 582, described both reach codes in each generation family, repointed 1978 Bianchi short-reach specs 12473/12493, and linked Pinarello specs 25842/25846/25864/25907 whose recorded obstacle was choosing a reach. Retained the separate generation rows and original bike wording. The circa-1982 catalogue attribution and generation boundary make spec 25907's early-generation assignment provisional. Updated generator overrides. Readback confirmed both family records and six links; SQL replay changed nothing, the link-decision test passed, no Campagnolo parenthetical-name duplicate pairs remained, and the comparison of 118 catalogues showed only 15 previously known unrelated Huret losses with no gains or changed links.

Rollback: restore 582's title `Campagnolo 4061, Super Record (v1)`, description `Campagnolo 4061, Super Record (v1), Italy`, search `Campagnolo 4061 Super Record`, source 1; restore 583's title `Campagnolo 4061, Super Record (v2)`, description `Campagnolo 4061, Super Record (v2), Italy, 343.33 grams (avg)`, same search text, source 262. Retired 7005 had brand 11, category 3, group 16, NULL image, title `Campagnolo 4061/1, Super Record (short reach)`, description `Campagnolo 4061/1 Super Record short-reach brakes and control levers: 2000/1 front and 2001/1 rear short-reach calipers with 2043 rubber stop, 4062 drilled lever, Italy. Catalog 17a (1975).`, years 1975–85, search `Campagnolo 4061/1 Super Record`, source 7 and source_id `2050fa3a-bc3e-11f1-a2df-02fea3763e8d`. Restore 7005, repoint 12473/12493 and reset 25842/25846/25864/25907 to NULL, then revert the corresponding overrides if reversing this decision.

## Record 2040 reach-family review — 2026-11-27

[Catalogue 17a, 1975, printed p. 37](https://www.campyonly.com/history/catalogs/catalog_17a.pdf) and [No. 18, December 1986, printed pp. 56–57](https://ebykr.com/library/campagnolo-catalogue-18/) distinguish the Record 2040 standard 52 mm from 2040/1 short 47 mm sets. The nominal dimensions belong to the two options, not a continuously adjustable 47–52 mm range. Existing specimen rows distinguish pre-CPSC and post-CPSC calipers by quick-release and wheel-guide details; their exact transition dates remain specimen-derived rather than directly established by those catalogues.

**Applied and validated on user approval:** merged pre-CPSC 573/576 into survivor 573 (1969–78) and post-CPSC 572/575 into survivor 572 (1978–88); preserved their separate generation labels, both reach codes and the 332 g short-reach specimen observation. Family endpoints combine prior row ranges and do not prove both reaches existed throughout; the short version is attested by 1975. Moved Raleigh specs 8055/9026/9339 from 575 to 572, retaining their wording and sources (8055/9026 explicitly say short reach); other links stayed on 572/573. The 1968 unlettered specimen 574 stays separate. Unlinked generic specs remain held where other identity/generation ambiguity persists. Source 7 is the 1975 guide, source 8 the December 1986 catalogue; source 472 and its inherited 1988 endpoint were on 575. Updated generator overrides. Readback confirmed 13 links on 572 and 14 on 573, with 574 retained; SQL replay affected zero rows. The 118-catalogue comparison retained only 15 pre-existing unrelated Huret losses, the link-decision test passed, and the Campagnolo brake parenthetical duplicate report found no candidates.

Restoration: 573 formerly `Campagnolo 2040, Record (standard reach, pre-CPSC)`, description same plus `, Italy`, 1969–78, search `Campagnolo 2040 Record`, source 1; retired 576 was `Campagnolo 2040/1, Record (short reach, pre-CPSC)`, description same plus `, Italy`, 1970–78, search `Campagnolo 2040/1 Record`, source 1, UUID `A6A159C1-43DF-44A4-BF24-1C932A42B811`. 572 formerly `Campagnolo 2040, Record (standard reach, post-CPSC)`, description same plus `, Italy`, 1978–87, search `Campagnolo 2040 Record`, source 1; retired 575 was `Campagnolo 2040/1, Record (short reach, post-CPSC)`, description same plus `, Italy, 332 grams (Actual),pair (cleaned & w/o grease)`, 1978–88, search `Campagnolo 2040/1 Record`, source 472, UUID `2E83607D-E755-4D41-8FC9-8532C7C25B90`. Both retired records had brand 11/category 3/group 12 and NULL image. Restore these records and 572/573 fields, repoint 8055/9026/9339 to 575 and revert generator overrides if superseded.

## Super Record 4062 brake-lever review — 2026-11-26

[Catalogue No. 17 (1974), printed p. 28](https://ebykr.com/library/campagnolo-catalogue-17/) names 4062 as the drilled brake control with Super Record 4061/4061/1 brakes. [No. 17a (1975), printed p. 37](https://www.campyonly.com/history/catalogs/catalog_17a.pdf) lists 4062 as a drilled lever, but its shared 2030/4062 illustration shows an undrilled blade and cannot date a Super Record hood. The [1982 US catalogue, printed p. 36](https://www.campyonly.com/history/catalogs/1982_olympic_catalog.pdf) shows the drilled levers with 4061 but the hood marks are illegible. [No. 18, December 1986, printed pp. 56–57](https://ebykr.com/library/campagnolo-catalogue-18/) lists 4061/4061/1 with drilled levers and identifies 4062 in the set illustration. Neither catalogue establishes the logo transition date or the lifespan of a specific hood version.

The existing [232 Velobase specimen](https://velobase.com/Pages/ViewComponent.aspx?ID=DDBF6DA9-6F6D-4BBE-97E5-DC40B291F2D7) has globe-logo hoods and [231](https://velobase.com/Pages/ViewComponent.aspx?ID=71fc07e4-7f97-4e32-8584-bc1636ed0c6f) shield-logo hoods. [Cycling Obsession](https://cycling-obsession.com/vintage-campagnolo-super-record-brake-levers-review/) places the transition around 1983, while [Le Cycleur](https://lecycleur.com/campagnolo/super-record-brakelevers-1st-2nd-and-3rd-gen/) notes both hoods on the same body generation and offers separately inferred body/clamp revisions. Hoods are replaceable, and neither account independently establishes a precise factory changeover. The current 1974–83 and 1983–88 row ranges are provisional, not proven variant production dates; do not tighten them from these sources. An estimated 1983 Bianchi Campione del Mondo does not specify the logo, so its spec 960 remains unlinked. Existing year-based links and overrides to 231/232 should be treated as provisional rather than evidence of fitted hood style.

The initial proposal to retain two rows was reconsidered after the user questioned the hood split: the maker uses 4062 for the assembly, and removable hoods alone are weak evidence for separate component identities. On user approval, merged 232 into survivor 231, `Campagnolo 4062, Super Record`, with drilled blades, the 4061/4061/1 sets and both hood logos in its description; observed weights remain specimen measurements. The 1974–88 range combines the previous ranges and remains approximate, not a catalogue-proven production span. Source changed from 262 to maker catalogue 8; the maker source documents the shared assembly, while the Velobase specimens document the hood variants. Retired 232 (source 1, source_id `DDBF6DA9-6F6D-4BBE-97E5-DC40B291F2D7`) had title `Campagnolo 4062, Super Record pre-'83 (hoods w/ world/globe logo)` and 1974–83 dates. Survivor 231 previously had title `Campagnolo 4062, Super Record post-'83 (hoods w/ shield logo)` and 1983–88 dates.

Repointed nine existing 232 links to 231 and linked 1983 Bianchi Campione del Mondo spec 960 to the 4062 family. Retained Colnago Regal S.R. 30nnale spec 5486 as a family-level group identification; the catalogue's group text does not establish special lever decoration. Updated generator overrides, including the Bianchi's exact value. Readback confirmed 26 links and no 232 row; replay affected zero rows. The 118-catalogue generator comparison retained only 15 pre-existing unrelated Huret losses, with no gains or changes, and the link-decision test passed. No parenthetical-name Campagnolo lever duplicate candidates remained. To reverse, restore 232 from its specimen fields and source ID, repoint specs 23162/5262/5318/25847/25865/6645/25878/25893/25908, reset 960 to NULL, and restore 231's title, original description, 1983 start, search text and source 262.

## February 1987 Record brochure — inventory applied and validated 2026-11-22

All 16 [manufacturer brochure scans](https://www.disraeligears.co.uk/site/campagnolo_-_record_february_1987_version.html) were inspected, source 414, printed February 1987. Scan numbers refer to the online images. Its component pages do not print assembly codes; codes below are existing identities cross-referenced to earlier/later maker books, not codes claimed to be printed here. It is a Record group brochure, so omission is not evidence for discontinuing other parts.

| Scans | Inventory and reconciliation |
| --- | --- |
| 1–3, 8–9, 16 | Cover, history/team and race photographs, dated back cover; no additional component listings. |
| 4–7 | Road group: early shield-logo rear 4096; front 2283, braze and clamp; Doppler 5970 and Syncro 5973 shifters. Rear capacity 30T, maximum sprocket 28T and front capacity 18T; details mostly already represented. Earlier rear and lever mechanisms confirmed; ordinary friction 5969 is not assigned to an unlabelled photo. |
| 10–11 | Delta brake 560 and lever family; eight-arm mechanism, adjusters, material and lever quick release largely already captured. Lever 212/214 distinctions are not settled by this uncoded picture. The illustration itself does not prove a shipment date. |
| 12 | Threaded headset 2954 with 5/32in balls; post family 5737/5738, listed 130/180mm and 25/25.8/26/26.2/26.4/26.6/27/27.2/27.4mm. The brochure does not cross-tab all diameters against each length or give component codes. Keep the short post's uncertain circular/styled identification and the earlier Mondiale-fitment decision separate. |
| 13 | First-style road crank 1483, road bottom bracket 7014, road chainring family 11816. Hidden fifth fixing, forged Avional crank, self-extractor, heat-treated steel BB axle, alloy cups, retained bearings, sleeve and 39–57T chainring range. |
| 14 | Road hubs 3240/3241 (large and small flange), road pedal family 3693 and ergonomic-pedal family 3695. The text describes 5/32in bearing balls, countersunk spoke holes and the blind quick-release cap. The pedal descriptions alone do not distinguish every named later version. |
| 15 | Track set: solid-axle small/high-flange hubs 3242/3243, Pista BB 23 and headset 7024, track crank family 1484/1485, pedal 3693 and post family. Five fixing spokes and Avional are shown/described, but the uncoded picture does not distinguish the two track-crank specimen generations. Do not infer an exact new Pista pedal or change its dates. |

Applied **six description-only updates**: crank 1483, headset 2954, high-flange road hubs 3240, long post 5738, road BB 7014 and road chainrings 11816. Each now cites existing source 414; 1483 already cited it. Manufacturer family sizing is qualified on 5738 rather than presented as a confirmed individual-length matrix; the 1987 maker 39–57T chainring range and 1990 retailer's stocked sizes are separately attributed on 11816. Existing measured weights and prior independent model codes are retained. Other illustrated components are either already detailed or lack a secure variant identification. No new rows, dates, merges, deletes, bike-link writes, generator or CSV changes.

**Applied and validated:** six exact before-image guards matched and the approved transaction updated six rows; rerun changed zero. All six now cite source 414 and readback matched the proposed descriptions; titles and dates were unchanged. The normal duplicate report's 1483/1482 and 1484/1485 generation pairs remain distinct; near and parenthetical reports found no pairs. Quality baseline and post-load both had zero errors and 1,982 review findings. Generator/live comparison: 118 catalogues, 24,829 specs, no gained or changed matches and the same 15 known Huret lost proposals. The unlinked Record specs were reviewed: 1107/1127 still lack evidence distinguishing crank generations; generic group, ambiguous hub/post and other-period specs cannot be assigned from this brochure. No bike-link changes. Task-owned scans and SQL were removed after validation.

Applied descriptions (all source 414):

- **1483:** 306/101 C-Record crank, heat-forged Avional; shield near spider, hidden fifth chainring fixing, 135 mm BCD and self-extracting bolts 2350001. 652 g (53/42).
- **2954:** 304/104 C-Record (A0D0) threaded headset; hardened steel races, 5/32in balls, aerodynamic alloy body and SELFORM membrane; British/Italian. 1987 retailer 99g; legacy 152g listing.
- **3240:** 321/101 C-Record high-flange road quick-release hubs; cup-and-cone chrome steel bearings, 5/32in balls, countersunk spoke holes and blind-cap skewer. Also A330-FG; DPC88 A300-FG (A031-FG/A032-FG).
- **5738:** A0R2/316-101 long aero post, tapered elliptical section, single-bolt clamp. Maker lists 180mm; 1987 retailer 25/27/27.2mm, 218g. Maker family sizes 25/25.8/26/26.2/26.4/26.6/27/27.2/27.4mm. Legacy specimen 210mm, 230g measured.
- **7014:** 303/101 C-Record road bottom bracket, A0H0; heat-treated steel axle 303001, alloy cups 4033/4034, retained chrome-steel balls and polythene sleeve 2110. Road set with braze-on boss.
- **11816:** C-Record replacement road chainrings, pressed light alloy with machined teeth. Maker 1987: 39-57T; retailer 1990 stocked 39/42/52/53/54T, with custom engraving on outer rings.

Previous descriptions and source refs, for guarded restoration if needed:

| ID | Previous source | Previous description |
| --- | --- | --- |
| 1483 | 414 | Campagnolo 306/101, C-Record, Italy. Engraved shield near spider, 135 mm BCD; 652 g (53/42), self-extracting bolts 2350001. Cat. n. 18 bis (12/1986); Record brochure (02/1987), scans 4/5/13. Availability evidence, not a production end date. |
| 2954 | 475 | 304/104 C-Record(A0D0) threaded headset;hardened steel races pressed into aerodynamic alloy body,SELFORM membrane;British/Italian. 1987 retailer99g;legacy152g listing. |
| 3240 | 110 | Campagnolo 321/101, C-Record (High Flange), Italy Record brochure (Nov 1987): A330-FG. DPC88: A300-FG (A031-FG/A032-FG). |
| 5738 | 475 | Aerodynamic polished alloy post with tapered elliptical mid-section and single-bolt clamp;A0R2,316/101. 1987:180mm,25.0/27.0/27.2mm,218g. Legacy specimen described as210mm,230g measured. |
| 7014 | 9 | Campagnolo 303/101, C-Record, Italy. Road bottom bracket set with braze-on boss; cups 4033/4034, axle 303001, sleeve 2110. Catalogue n. 18 bis (Dec 1986). year_from inferred from sibling C-Record rows. Record brochure (Nov 1987): A0H0. DPC88: A0H0. |
| 11816 | 475 | Replacement road chainrings for C-Record; 39-54T options. Service list specifically offers39/42/52/53/54T; outer rings also offered with custom hand engraving. |

## February 1987 Record brochure — initial scope review — 2026-11-22

This historical triage preceded the full inventory and application above; it no longer describes the current reconciliation status.

[Record brochure, February 1987](https://www.disraeligears.co.uk/site/campagnolo_-_record_february_1987_version.html), source 414, has 16 scans and was used for focused rear-derailleur and crank reviews, not a full component reconciliation. The later crank review also checked scans 6 and 7 for the rear and levers; the original scope statement below should not be read as saying those pages remain unexamined. The dated imprint is on scan 16.

This triage visually checked scans 9–12 and 14. Scan 9 is a race photo; scans 10–11 describe the Delta brake and levers; scan 12 describes the headset and seatpost; scan 14 covers pedals and hubs. Scan 12 lists post lengths 130/180 mm and diameters 25, 25.8, 26, 26.2, 26.4, 26.6, 27, 27.2 and 27.4 mm. Live row 5738 currently cites retailer 1987 dimensions 25/27/27.2 mm for the long post; 5737 is the short post. Compare the illustrated and coded variants before applying the maker's uncoded size list to either record. The scan has no individual post codes and does not establish the unidentified 1987 Bianchi Mondiale post variant. Existing Delta row 560 already has much of the mechanism and chronology from other sources; the February brochure's depiction alone does not establish when the brake shipped.

This is a sampled source and live-row comparison, not a full inventory or a proposed DB change. The likely benefit is manufacturer-backed details for existing C-Record parts; new identities or bike links are unproven. No data changes made. Task-created sample images were removed after recording the page references.

## Victory front availability and Tre Cime fitment — 2026-11-22

The complete February 1987 *Nuovo Victory / Nuovo Triomphe* brochure
supplies scan 2, missing from the November 1986 ZIP registered as source
196. Scan 2 illustrates the two standard Victory front mounts and describes
spring-loaded limit screws and the clip-on's three inserts. Scan 8 prints
February 1987. The front pair's short outer cage profile, broad linkage
face and mounting details match the Corsa pair in December 1986 No. 18 bis,
printed pp. 25 and 27. The February brochure omits assembly codes. No. 18
bis names 0104020 clip-on and 0104021 braze-on and already shows the
coaxial adjustment springs. P. 28 shows the deeper Leisure cages, 0104024
clip-on and 0104025 braze-on. The brochure's separate LX front photo and
23T specification support keeping component 2319 separate.
[February 1987 scan 2](https://www.disraeligears.co.uk/site/campagnolo_-_nuovo_victory_nuovo_triomphe_february_1987_version_scan_2.html),
[complete February scans](https://www.bikecatalogs.com/download/2910),
[December 1986 No. 18 bis](https://velobase.com/CatalogScans/Campagnolo/Campy1986_Catalog18bis.zip).

Bianchi's 1987 US catalogue calls the Nuovo Alloro group Victory on PDF
p. 8 and specifies New Victory with C Record levers on p. 14. The close-up
supports the family, while the catalogue supplies no individual front code.
Pinarello's circa-1987 GITA brochure, PDF p. 2, names the new Victory group
and shows the Tre Cime's double crank and Victory short-cage front. This
supports the existing family-level row for spec 26070. Neither bike needs
an exact mount or assembly code inferred from the group wording.
[Bianchi original](https://velobase.com/CatalogScans/1987Bianchi.pdf),
[Pinarello GITA original](https://bikalog.org/api/view/Pinarello/1987/pinarello-1987.pdf).

Applied with the February brochure as source **514**, market NULL. Component
**2318** moved from 1984–1986/source 9 to 1984–1987/source 514 and now records
the Corsa and Leisure mounts, deep Leisure cage and Nuovo Corsa limit screws.
It retains 97 g. Its previous description was `Campagnolo Victory, Italy,
97 grams Cat. n. 18 bis (Dec 1986): 0104020/21 corsa clip-on/braze-on,
0104024/25 leisure.` Component 2319 remains the separate LX row. The existing
1987 links on Nuovo Alloro 1229, Colnago Junior Victory 13052 and Peugeot
PSN 10 Mont Cenis 15685 now fall inside 2318's attested range. Giro 6703's
circa-1988 fitment remains a date flag. The 1987 maker brochure establishes
availability for 1987 and gives no production end date.

Linked Tre Cime spec **26070** from NULL to **2318** and removed its scoped
NULL override. The spec retains bike 1501, label 16, raw label `Front
Derailleur`, `Campagnolo Victory` wording and source 495. To restore, require
these existing fields and component 2318 before resetting the link to NULL
and restoring the generator exception. Restore the component's previous
description, source 9 and 1986 upper bound only with current-value guards.

The transaction inserted one source and updated one component and one spec.
The identical rerun changed zero rows. Live readback matched the proposal
across all 24,829 compared specs. The only generated mapping change was the
expected Tre Cime link, and the final comparison retained the 15 pre-existing
lost proposals. The normal, near and parenthetical duplicate classifications
matched the baseline. The quality report had zero errors and three fewer date
flags. All 14 repository test files passed.

## Victory LX rear reconciliation — 2026-11-18, applied and validated

Re-read source **196**, the English *Nuovo Victory / Nuovo Triomphe* brochure:
[original ZIP](https://velobase.com/CatalogScans/Campagnolo/Campy1986_Victory_Triomphe.zip),
[archive](https://www.disraeligears.co.uk/site/campagnolo_-_nuovo_victory_nuovo_triomphe_november_1986_version.html),
[LX page](https://www.disraeligears.co.uk/site/campagnolo_-_nuovo_victory_nuovo_triomphe_november_1986_version_scan_4.html).
Inspected ZIP scans **01, 03, 04 and 08** for context, LX specification and
dating; scan 08 explicitly prints **November 1986**. The ZIP still lacks 02.jpg;
the relevant LX page **04.jpg** is present and legible. This is a focused rear
derailleur reconciliation, not another ingestion of the entire brochure.

The LX page explicitly names the front/rear set and shows the **shield-logo,
long-cage rear**, Phillips limit screws, engraved main pivot-bolt heads and no
early plastic thread-lock insert. It specifies a heat-treated aluminium-alloy
cage, **38T total capacity**, **32T maximum sprocket**, and operation with a
**12T sprocket**. Its **23T front-change** figure belongs to the front changer;
do not call that the rear's chainring capacity or assume all maxima can be
combined. No rear part code or weight is printed.

Pre-load Campagnolo rear inventory, code/name/description aliases and group
212 found **no existing LX rear row**. Compared the neighbouring identities:

| Existing row | Evidence / decision |
| --- | --- |
| 4172, 0102047 early Leisure | Plastic insert, slotted screws, plain pivot heads; retain the already corrected 1984–1986 row and source 464 |
| 4168, G010-SM Victory | Existing short-cage model; retain its identity, dates and four links |
| 4169, Victory S3 | Original main specimen is script-logo **short cage**; retain its identity, dates and five links |
| 4078, Rally Racing | Original main specimen has different slant-parallelogram construction, body return spring and cable barrel adjuster; not the LX photo |
| 2319, LX front | Correct companion already exists in Victory LX group 212; no metadata or date change needed |

Comparison images: [4169 main](https://www.velobase.com/CompImages/RDerailleur/EAF6F3F9-62BE-4148-8C40-86C5D09311DA.jpeg),
[4078 main](https://www.velobase.com/CompImages/RDerailleur/46ABFCB1-012A-4A9D-9185-8E2F38B07C17.jpeg),
[shield-logo LX](https://www.disraeligears.co.uk/site/00_main_images/campagnolo_victory_lx_3rd_style_lx_victory_lx_derailleur_main_image.jpg),
[script-logo long-cage specimen](https://www.disraeligears.co.uk/site/00_main_images/campagnolo_victory_lx_4th_style_g010-lg_victory_lx_s3_derailleur_main_image.jpg).
The modern archive's proposed **G010-LG** code is explicitly uncertain; do not
promote it to a manufacturer-proved code. Its measured specimen weight and
tentative 1987 chronology are not assigned to the brochure model. The recovered
1988 dealer-parts PDF (source 110) has no usable text layer and its opening
scope page lists Athena/Chorus/Croce d'Aune/Record; no primary LX code crosswalk
was established from it. This does not establish absence from the whole PDF.

**Approved and applied: one insert, no updates/deletes/source registrations.**

- New row **11703**, **`Campagnolo Victory LX (shield logo)`**, brand 11, category 15
  (Rear Derailleurs), existing group **212 (Victory LX)**, source **196**.
- Dates **1986–1986** record this brochure attestation, not production endpoints.
  Search text **`Campagnolo Victory LX`**; UUID
  **`cdeada59-df78-4d47-84b9-6aafd6fc7a97`**.
- Description (196 characters): `Long-cage friction rear derailleur with a shield logo, Phillips limit screws and engraved pivot bolts. Heat-treated alloy cage; 38T total capacity, 12-32T sprockets. Part of the LX front/rear set.`
- Existing generic Victory/New Victory bike specifications do not identify LX
  hardware. No loaded derailleur spec explicitly names this LX model, and no
  fitment/link or generator override change was made. Do not redirect the
  existing short-cage links merely because this long-cage row is added.

Read-only before/after simulation across **107 loaded catalogues / 23,168
specs** preserved the exact summary and finding list: 23,153 unchanged plus
the same 15 pre-existing unrelated Huret 4401 differences, with no new mapping
differences or ambiguities. The scoped duplicate baseline had no merge
candidates; the distinct LX construction above supplies the new-row decision.
Post-load mapping validation reproduced the exact same summary and finding
list. Full metadata and image-hash readback verified **every existing component
unchanged**; all live bike_spec rows (including timestamps) and data_source
rows were also unchanged. Row 11703 matched every approved field. SQL rerun
inserted **zero** rows.

Recorded **4168/11703**, **4169/11703** and **4172/11703** in
`REVIEWED_NOT_DUPLICATES` for short/long cage and early/LX hardware distinctions.
The scoped rear-derailleur duplicate summary was unchanged and proposed no
pair involving 11703; the near-pair report was empty. All **13 test suites
passed**. Local `/componentdetail` checks confirmed 11703's title, dates,
description, search text, source 196 and Victory LX group, and retained the
existing metadata/source/group on 2319 and 4172. The temporary API was stopped.

Task-created SQL, snapshots and downloaded comparison images were removed
after validation. Source URLs, the inserted UUID and exact component fields
are retained above. Rollback would remove only row 11703 / UUID
`cdeada59-df78-4d47-84b9-6aafd6fc7a97` after checking references; no existing
component fields or source registrations need restoring.

## Victory Leisure 4172 style comparison — 2026-11-18, applied and validated

Read all four scans of the [early French Victory leaflet](https://www.disraeligears.co.uk/site/campagnolo_-_victory.html),
the May 1984 advert/close-up below, and all five images in 4172's original
VeloBase gallery. The leaflet is undated (1984 is external attribution); its
[Leisure page](https://www.disraeligears.co.uk/site/00_main_images/campagnolo_-_victory_scan_03_main_image.jpg)
explicitly identifies group 268's long-cage rear as **0102047**. It photographs
the early plastic thread-locking insert beside the slotted limit screws.

| Evidence/specimen | Distinguishing construction | Conclusion |
| --- | --- | --- |
| May 1984 advert, early leaflet, 4172 main image | Plastic insert in the outer plate; slotted limit screws; plain main pivot-bolt heads | Same early Leisure configuration; a visual identification supported by the leaflet's code |
| 4172 gallery's three red-background photos | No plastic insert; slotted screws and plain pivot-bolt heads | Another revision; these photos do not define the main specimen |
| November 1986 Nuovo Victory/LX source 196 | Phillips-head limit screws and engraved pivot-bolt heads, illustrated by the later LX style | Later configuration; do not transfer its 38T total / 32T maximum / 12T minimum claims to the early specimen |

Original [main photo](https://www.velobase.com/CompImages/RDerailleur/E9813E13-6759-45DC-9928-6252C04EE7A7.jpeg)
and [red-background specimen](https://www.velobase.com/CompImages/RDerailleur/9B8A356A-B4F6-4C37-BF76-57A8F7BC14F4.jpeg).
The earlier sourcing note's tentative “later-looking shield” interpretation is
superseded: the emblem alone does not distinguish these revisions. The insert,
limit screws and bolt-head engraving are the useful discriminants. The three
archive specimen style photos were also checked against those features; their
tentative dates are not independent primary dating evidence.

**Approved and applied:** retained ID/UUID 4172, retitled to
`Campagnolo 0102047, Victory Leisure (plastic insert)`, regenerated search_text,
rewrote its description around the observed construction and listed 179 g,
removed the later LX capacity assertion, and moved year_from **1985 -> 1984**
from the period advert plus coded leaflet comparison. Retained year_to 1986 as
the legacy upper bound, not a demonstrated final year for this exact revision.
Moved group_id **212 (Victory LX) -> 18 (Victory)** to match the early identity;
the two groups were checked live before preparing this ownership correction.
Registered the undated French leaflet with the attributed date and advert URL
as **source 464**, country NULL; source_ref **196 -> 464**. No new component or
merge was made. The separate later LX rear insertion using source 196 is recorded above.

Applied description (170 characters): `Long-cage friction rear derailleur with headless slotted limit screws, a plastic thread-locking insert in the outer plate and plain pivot-bolt heads. Listed weight 179 g.`
Search text is `Campagnolo 0102047 Victory Leisure`.

4172 has no bike links. The joint five-row Ofmega/Victory load changed exactly
the reviewed five component rows and one source, with no other component
metadata or bike-spec changes. Full comparison covers 107 loaded catalogues /
23,168 specs with no new mapping differences; the four existing 4168 Victory
links are unchanged. SQL rerun affected zero rows, all 13 test suites passed,
and local component detail returned the correct title, source 464 and Victory
group. No Campagnolo rear-derailleur merge candidates were reported. This
completes the advert/leaflet style correction; task scratch files were removed.

Restoration values: title `Campagnolo Victory (long cage "Leisure gear")`;
description `Campagnolo Victory (long cage "Leisure gear"), Italy, 179 grams. 0102047 Victory leisure gear, the rear derailleur of the LX set: gear-change capacity 38T, biggest sprocket 32T, takes 12T sprockets.`;
year_from 1985, year_to 1986, group_id 212, source_ref 196, search_text
`Campagnolo Victory`. UUID `5EE30396-84D1-4017-B767-7858F2FE8D77`, brand 11 and
category 15 were unchanged. Restore those old fields before removing source
464, and remove that source only if no other row references it.

## Victory Leisure advert recovered — May 1984, reviewed 2026-11-18

Recovered and visually read the full advert (1560 px wide) and its original
derailleur close-up from the recorded source-hunt lead:
[La Bicicletta May 1984 archive page](https://www.disraeligears.co.uk/site/la_bicicletta_1984_may_-_campagnolo.html),
[full scan](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_1984_may_-_campagnolo_main_image.jpg),
[rear-derailleur close-up](https://www.disraeligears.co.uk/site/00_additional_images/la_bicicletta_1984_may_-_campagnolo_additional_image_01.jpg).
The May 1984 date is the archive's issue attribution; no dated masthead or page
number is visible on this isolated advert.

The copy and group-board caption explicitly promote **Victory leisure**.
The fitted derailleur has a long pulley cage. The range table lists Super
Record and Nuovo Record for corsa/pista, Victory for corsa/leisure, Gran Sport
for corsa and Triomphe for corsa/leisure. This establishes advertised group
availability in the attributed issue, not the manufacture endpoints or exact
specifications of every component sold under those group names. No component
part numbers, capacity figures, weights or variant dimensions are printed.

Read-only live comparison: **4172**, Victory long-cage Leisure, is dated
1985–1986 and described using the November 1986 Nuovo Victory/LX brochure
(source 196). Its original VeloBase specimen is UUID
`5EE30396-84D1-4017-B767-7858F2FE8D77`. Initial emblem-based caution was
superseded by the insert/screw/bolt comparison above: the main image is the
early configuration, and later revisions also occur in its gallery. Row 4172
has no bike links; short-cage **4168** already starts in 1984. The subsequent
comparison used the advert, the
[early Victory leaflet](https://www.disraeligears.co.uk/site/campagnolo_-_victory.html)
and the actual 4172 gallery to establish which style its 0102047 identity covers.
The leaflet was read in that subsequent comparison, not this sourcing pass.

No DB, source-registration, CSV, matcher or bike-link changes. The acquisition
action was removed from TODO; the applied correction is recorded above.
Task-created source downloads were removed after recording the stable URLs.

## Bikecology Nuovo Tipo reconciliation — 2026-11-18 (applied and validated)

Visually inspected Campagnolo No.17 printed pp.54/61 and Bikecology April
1976 printed p.41 (image 43), plus both original large-flange specimen
photographs and 3232's box photograph. This completes the earlier p.54
inspection task and supersedes the C1264–C1267 identity hold in the April
1976 cross-catalog notes. User approved the two description/source updates;
both are applied and validated below.

### Evidence and identities

- Maker source **6**, [printed p.61](https://ebykr.com/wp-content/uploads/2026/10/ebykr-campagnolo-catalogue-17-p69.webp):
  **1251** is the small-flange QR pair, **1264/1265** its front/rear;
  **1253** is the large-flange QR pair, **1266/1267** its front/rear.
  The photographed large-flange hubs have round cutouts, appearing oval
  in perspective. [Printed p.54](https://ebykr.com/wp-content/uploads/2026/10/ebykr-campagnolo-catalogue-17-p62.webp)
  depicts that same round-hole construction, not the kidney-bean specimen.
- Retailer source **244**, [April 1976 catalogue](https://labibleduvelodivers.blogspot.com/p/doc-1976.html),
  printed **p.41**, file `BICYCLE CATALOG 1976 (43).jpg`: explicitly lists
  C1264/C1265/C1266/C1267 individually and C1251/C1253 as pairs. Both are
  QR, five-speed, silver, English/French/Italian thread options, 100 mm
  front/120 mm rear OLD, 36/36h offered. Listed front/rear weights are
  **227/291g small flange**, **255/326g large flange**. These are retailer
  listings, not newly measured specimen weights. The large-flange photo
  matches the round-hole construction. The retailer C prefix does not
  establish another manufacturer model.
- Existing **3230** already represents 1251 with 1264/1265; existing
  **3233** represents round-hole 1253 with 1266/1267. No new individual-hub
  rows or pair duplicates are warranted under the existing hubset model.
- Keep **3232** separate. Its [original specimen](https://www.velobase.com/Pages/ViewComponent.aspx?ID=13613D0A-8B52-4120-8DEB-6A5A69F2D766)
  has unmistakable broad curved kidney-bean openings, unlike [3233](https://www.velobase.com/Pages/ViewComponent.aspx?ID=B30B0713-8C02-47FA-B8D8-8DB2C57D0223).
  The box says Nuovo Tipo / large flanges but provides no dated variant
  crosswalk. Its listing's Motobecane-only and 1972 claims remain secondary;
  neither inspected catalogue establishes them or extends its dates.
  Retain legacy **1972/1972**, source **1**, unchanged; this is not proof
  of a one-year production run. No automatic follow-up source hunt.
- Solid-axle **3229/3231**, with their distinct 1260–1263 codes, are outside
  the QR offering and remain unchanged.

### Applied description enrichment and restoration values

Only **description** and **source_ref** changed on 3230/3233. All titles,
search text, dates, UUIDs, brands, categories and groups remain unchanged.
Source 244 is already registered. Moving source_ref records the last source
used to change the row, without discarding the evidence history here.

| Row | Retained dates | Old source_ref → applied | Applied description |
|---|---|---|---|
| 3230, 1251 small flange | 1960–1986 | 462 → 244 | Small-flange QR hub pair; 1264 front/1265 rear; hollow axles 1001/4,1256; skewers 1310/1311; 24-40h; OLD 100/120mm; 5-speed; English/French/Italian threads; silver; listed front/rear 227/291g; Italy. |
| 3233, 1253 round-hole large flange | 1967–1985 | 352 → 244 | Large-flange round-hole QR hub pair; 1266 front/1267 rear; 36/36h or 32/40h; OLD 100/120mm; 5-speed; English/French/Italian threads; silver; listed front/rear 255/326g; Italy. |

Old **3230** description: `Campagnolo 1251, Nuovo Tipo small-flange quick-release hubs, 1264 front and 1265 rear, hollow spindles 1001/4 and 1256, skewers 1310/1311, 24 to 40 holes, Italy.`
Old **3233** description: `Campagnolo 1253, Nuovo Tipo large-flange quick-release hubs, 1266 front and 1267 rear, 36/36 or 32/40 holes, Italy.`
Restore those descriptions and source_ref 462/352, guarded on the applied
descriptions/source 244, if later reverting. Prior drilling/axle/skewer facts
are retained; 36/36h is the 1976 retailer's offering, not a restriction on
all other catalogue configurations.

### Validation

- Live part/name search found only the existing five relevant Nuovo Tipo
  rows. Dates already cover 1976 for 3230/3233. No title/date/identity changes.
- 3230 has four bike links: specs **954/4459/4549/4642**; 3229/3231/3232/3233
  have none. Four Bottecchia 1972 large-flange QR specs
  **23315/23330/23345/23360** stay NULL: neither bike wording nor these
  catalogues identifies their photographed variant. Existing NULL overrides
  and other Nuovo Tipo overrides remain unchanged.
- Campagnolo/Hubs duplicate report retains 3232/3233 as a configuration
  pair, with no proposed merge. No new component is being inserted.
- Full generator/live baseline: **23,168 specs**, 23,153 unchanged,
  15 lost mappings, zero gained/changed/missing/ambiguous; the existing
  losses are outside this hub task. The post-load comparison over all **107
  loaded catalogues** has identical scope, files, summary and findings to
  the baseline. No matcher input fields changed.
- Applied descriptions are **199/175 characters**, below 255. Guarded SQL
  checks exact old descriptions, sources, dates, titles, brand and category;
  `scripts/load-sql.js` affected exactly **two rows**, then **zero** on rerun.
  Readback confirmed both descriptions, source **244**, and retained dates,
  titles, UUIDs, search text, brand/category/group. Source 244 resolves to the
  registered April 1976 catalogue. Component count remains **10,764**.
- Exact bike-spec readback confirms **954/4459/4549/4642 → 3230** and
  **23315/23330/23345/23360 → NULL**. No bike writes, new rows, merges,
  date changes or generator changes. 3229/3231/3232 remain unchanged.
- Evidence URLs and restoration values are retained above. Task downloads,
  prepared/applied SQL and before/after comparison scratch files were removed
  after successful readback, zero-change rerun and mapping comparison.

## Gran Sport Bianchi-marked crank consolidation — 2026-11-17

User approved and applied **1473 -> 1472**, retaining the Bianchi-marked outer
ring and 608 g actual 53/42 specimen weight in 1472's description. Dates remain
1980–1985, source_ref 8 and the stable 1472 identity are unchanged. Spec 1045
and the generic Gran Sport generator override now use 1472; rerun changed zero
rows, all loaded mappings and DB integrity validated, and all 13 test files passed.
This supersedes historical references below to 1473 as a separate live row.
[Evidence, exact old/new fields and validation](cross-catalog-notes.md#campagnolo-1473---1472--applied-and-validated-2026-11-17).

## Campagnolo Catalogo N. 12 — late 1953 (Campy1953_catalog12.pdf, 28 pp)

- Italian, Vicenza. Lugano 1953 world championship page dates it. Rod-shift
  era: 1001 Cambio Corsa, 1002 Paris-Roubaix, plus 1012 Gran Sport and 1013
  Sport cable derailleurs, 1005 and 1011 front derailleurs, 1012/3 bar-end,
  1013/1, 1014, 1015 levers, 1006 / 1006/G / 1006/A hubs. Page 27 is a
  bound-in later reprint (39xx tool numbers).
- Added: 6990 "1001/2, Cambio Corsa (rear hub)" 1940-1953; 6991 "1002/2,
  Cambio Paris Roubaix (rear hub)" 1950-1955; 6992 "1013/4, Gran Sport
  (single lever with pump clip)" 1953-1960. source_id MANUAL-CAT12-1953-*.
- Years: 4102 (1001) year_to → 1953; 5980 (1013/1) → 1953; 3256, 3257, 3273
  (1006 family) → 1953; 4145 (1013/3) year_from → 1953; 5995 (1014/1)
  year_from → 1953.
- Left: 4116/4117 (two 1012/1 rows, distinct velobase examples, 300 g vs
  340 g) — user chose to leave as is.

## Campagnolo Catalogo N. 13 — c. 1955 (Campy1955_catalog13.pdf, 26 pp)

- US-importer copy (Perry Bowlus Wiley, New York). Same pages as N. 12
  with: braze-on levers 1013/5 (front) and 1013/6 (rear) new; 1015/1 lever
  with pump peg now listed; cable/housing lengths specified; Sport group
  loses its front derailleur and both groups lose bundled tools; 1013/2
  gains 503/1 pivot and new name plates; new fittings 663, 659, 143/1.
- No new rows: 1013/5-6 already exist as 5989 under the later Record name.
- Years/notes: 5983 (1015/1) year_to → 1955; 5989 description notes first
  listing in N. 13 as Gran Sport-era parts.
- Also applied here (from the 1973 Bianchi bike catalog): 1080 Universal
  Extra Mod. 51 year_to 1961 → 1973.

## Campagnolo Catalogo N. 14 — c. 1960 (Campyjpg1960_14/, 41 JPGs)

- First colour catalog. Record name arrives on hubs (1034 small flange,
  1035 large flange, 1036 pista), cranks (1049 strada, 1051 pista) and the
  1052/1 front derailleur; first cranks, bottom brackets (1046 square taper,
  1047 cottered), headsets (1039 strada, 1040 pista), pedals (1037, 1038,
  1038/1), seatposts (1044, 1045), 1053 track dropouts, 1013/7 flat-bar
  lever, tool case 1045. Cambio Corsa, Paris-Roubaix and the 1006 / 1006/G
  alloy hubs are gone. Rear derailleurs still Gran Sport/Sport only (no
  Record rear until 1963).
- No new rows: every part number already present; velobase evidently used
  this catalog for many 1960 dates.
- Years: 3259 (1034) year_from 1967 → 1960; 2966 (1040 "Record Pista")
  year_from 1970 → 1960; 5999 (1013/7) year_to → 1960; 4117 (1012/1) → 1960;
  4144 (1013/2) → 1960; 3273 (1006/A) → 1960; 3256, 3257 (1006, 1006/G)
  → 1955 (present in N. 13, absent in N. 14).

## Campagnolo Catalogo N. 15 "Prodotti Speciali" — 1967 (Campy1967_catalog15.pdf, 46 pp)

- Nuovo Record arrives: 1020/a rear derailleur (1020/1a with hanger),
  1046/a bottom bracket with plastic sleeve 2110, group named Record
  throughout. Gran Sport and Sport gone from the group pages; budget line is
  now Valentino Super (2150/1 rear, 2050 front, 1204/1206 levers) and Nuovo
  Sport 2230. New: 1036/1 large-flange QR track hubs, Nuovo Tipo hub range
  1250-1253 (1260-1267 sub-numbers), special triple and cyclocross right
  cranks (753/1 flanged rings, 744/1-2 spindles), 1060 Corsa dropouts,
  1220/1230 QR bands, grease tins, 1102 workstand. Chainline and gear tables
  at the back.
- Added: 6993 "2150/1, Valentino Super (con attacco)" 1967-1970 (group
  Valentino Extra); 6994 "1036/1, Record Pista (high flange, quick release)"
  1967-1980; 6995 "1204 1206, Valentino" levers 1967-1980. source_id
  MANUAL-CAT15-1967-*.
- Years: 4146 (2230 Nuovo Sport) year_to → 1967; 3270, 3271 (1036 track
  hubs) → 1967; 3712, 3714 (1038, 1038/1 pedals) → 1967; 5752 (1044 first
  version) → 1968 (5749 covers 1969 on); 2316 (2050 Valentino front)
  year_from 1968 → 1967.
- Confirmed as-is: 4123 1020/a v1 1967-68, 1496 1049 v4 BCD 144 from 1967,
  1505 1051 144 BCD from 1967, 1495 1048/4 cyclocross from 1968, 30 1046/a,
  all levers. 4118 1012/4 Gran Sport (to 1973) is absent here but the 1973
  Bianchi Special still lists Gran Sport, so left alone.

## Campagnolo Catalogue No. 16, English edition — 1968 (Campy1968_catalog16.pdf, 46 pp)

- English printing of N. 15 with two additions: the Record brakes (2040 set:
  2000 front, 2001 rear, 2030 QR lever; spares 2002-2039) and the Sport
  Extra 2180 rear derailleur. Valentino Super 2150/1 → Valentino Extra 2170;
  Nuovo Sport 2230 → Sport Extra 2180. 1036/1 QR track hub not shown;
  1036/2 small-flange solid-spindle track hub is. 1038/1 toothed pedal
  dropped. New 1240 QR bolt and 693/1 steerer (out of scope).
- Added: 6996 "2180, Sport Extra (con attacco)" 1968-1975 (group Sport),
  source_id MANUAL-CAT16-1968-2180. year_to 1975 is a guess.
- Years: 6993 (2150/1 Valentino Super) year_to 1970 → 1967; 6994 (1036/1)
  year_to 1980 → 1967; 3271 (1036/2) year_to 1967 → 1968.
- Confirmed: 574 2040 Record "1968 - no lettering", 228 2030 lever 1968,
  4162 2170 Valentino Extra 1968, 6004 1026 twin Valentino lever.
- Left: 226 "2030, Nuovo Record" lever dated from 1967, a year before the
  brakes appear in any catalog; velobase may know something, not changed.

## Campagnolo Supplement to Cycle Catalogue No. 16 — November 1971 (Campy1971_catalog16sup/, 12 JPGs)

- Quadrilingual colour update sheet. Records the Superleggero series (1037/a,
  1038/a pedals; 1044/a, 1045/a seatposts; 763/a sprocket), the budget-line
  rename Sport Extra 2180 → Velox 2250 with 1013/1a and 1014/1a levers, the
  Gran Turismo 2270 with 1013/1b lever and 3360 Elefante bar control, and a
  new Sport groupset: 3320 cottered crank + 3331 bottom bracket (3330 set)
  and a Sport headset (687/a-690/a, no set number). Also 3345/3346 pump
  adaptors, 2041 toothed washer, eyelet-less dropouts (out of scope).
- Added: 6997 "1013/1a 1014/1a, Velox" levers 1971-1975 (group Velox); 6998
  "1013/1b, Gran Turismo" lever 1971-1975; 6999 "763/a, Superleggero
  Sprocket" 1971-1980; 7000 "Sport Strada Headset" 1971-1975 (group Sport).
  source_id MANUAL-CAT16S-1971-*. End years are guesses.
- Note appended to 20 (3331 "(Nuovo) Gran Sport (Thin Cup)"): sold as the
  Sport bottom bracket in 1971.
- Years: 5748 (1044 Nuovo Record Superleggero = the 1044/a) year_to → 1971;
  5985 (Elefante) → 1971; 4120 (2270 Gran Turismo) → 1971.
- Confirmed: 4167 Velox 1971, 3709/3715 superlight pedals from 1971, 5754
  1045/a 1971, 1508 3320 Sport 1971-75, 2316 Valentino front to 1980.
- Caution: 5964 "1013/1A, Gran Sport (Single Sided)" 1960-70 and 5965
  "1014/1A, Nuovo Gran Sport" 1974-83 reuse the /1A suffix for different
  eras; the 1971 Velox levers are distinct rows.

## Campagnolo Catalogue No. 17, English edition — 1974 (Campy1974_catalog17.pdf, 93 pp)

- Has an OCR text layer but it is drawing noise; pages read visually. PDF
  page ≠ printed page (blanks/skips); printed pages 77-78 (cyclocross parts,
  Rally gear) are missing from the scan. Colour-coded groups: Super Record
  road 4000/F (blue), track 4100, Record road 1032/F and track 1033
  (yellow), Gran Sport 2240 (green), Valentino Extra, triple/cross/Rally,
  sundries, tools, tables.
- Super Record debut: 4001 rear, 4061/4061-1 brakes with 4062 drilled lever,
  4011/4014 Ti-spindle hubs, 4021 pedals, 1049/A crank + 4030 set + 4031 Ti
  bottom bracket, 4041 headset, 4051 seatpost; track 4101/4121/4151/4131/
  4141. Nuovo Gran Sport 3500 replaces Velox/Gran Turismo with 1014/1A and
  1013/1A levers; 1207/1208 braze-on levers; Sport crank becomes 3320/A with
  fixed ring pairs; Nuovo Tipo solid-axle 1250/1252 dropped; 1049/3, 1049/5
  (fixed 36T) triples and 1049/4 cyclocross as 1048/x sets. 1052/1 is the
  front derailleur for the Record groups (no SR front until 1979); the
  2240 Gran Sport group (p 54) takes the 2050 front (row 2316, "Valentino";
  note and source_ref 6 added 2026-10-29).
- Added: 7001 "1013/1A, Nuovo Gran Sport (right hand)" 1974-1983 (distinct
  from 5964, the 1960s Gran Sport 1013/1A); 7002 "1207 1208, Gran Sport /
  Valentino (braze-on)" 1974-1983; 7003 "1049/5, Record Triple (fixed 36T
  inner)" 1974-1980. source_id MANUAL-CAT17-1974-*.
- Completed: row 19 (velobase "super record - titanium - 1st gen;", no
  number/years/group) → "4031, Super Record (First Gen, titanium spindle)"
  1974-1979, group Super Record. Note on 2951 (1040/A "Gran Sport"): sold as
  the Sport head set.
- Years: 6997 Velox levers and 6996 Sport Extra year_to → 1973; 3229, 3231
  Nuovo Tipo solid-axle → 1973.
- Confirmed: whole SR group dated from 1970/1974 by velobase; 4148 4001 1st
  gen 1974-79; 1509 1049/A from 1974; 4085 3500 from 1974; 5965 1014/1A from
  1974; 1498 covers 1049/3 (triple v4 from 1973); 4081 Rally 1st gen 1974.
- Skipped: 3320/A (covered by 1508 3320 Sport 1971-75); Rally (page missing).

## Campagnolo Special Catalog, US edition — c. 1974 (Campagnolo_other_Vintage_Catalogs/CampagnoloSpecialCatalogue.pdf, 64 pp)

- Blue "Special Catalog" from Olympic Resources Inc., Houston (US Cycling
  Team supplier badge, "Printed in U.S.A."). Printed page = PDF page - 2; no
  text layer. No printed date; dated c. 1974 from a reseller listing ("1039
  SPECIAL CATALOG 1974") and the contents (one-bolt 4051, SR hubs, Velox,
  Gran Turismo, solid-axle Nuovo Tipo, 1052/1 as the only front derailleur,
  "New Special Triple Crankset Conversion" for 1049/5). data_source 342.
- Skipped: printed pp 47-49 (cables, seat-tube bolts, fork ends), 51-56
  (tools, stand), 57-60 (chain-line diagrams, gear table), covers/blanks.
- Group pages 4000/F SR road, 1032/F NR road, SR track, Record track,
  Gran Sport/Sport, then parts pages with codes R/NR/SR/OSR/RL/NGS/V/NT.
  Also lists Sport Extra 2180 and the 3360 Elefante control (p 23).
- Years: 6996 2180 Sport Extra year_to 1973 -> 1974; 5985 Elefante
  year_to 1971 -> 1974; 7004 4104 year_from 1975 -> 1974 (pair 4104 with
  4105/4106 on p 25).
- Retitled: 5985 "Campagnolo Elefante Control Shifter" -> "Campagnolo
  3360, Elefante" (search_text too); 3272 "Campagnolo 4101, Super Record
  Pista" -> "... (High Flange)".
- Descriptions rewritten (sub-numbers, holes, threads, sizes; velobase
  weights kept, old 17a/Cat 16/Cat 17 citation tails dropped): 3275, 3276,
  3272, 7004 SR hubs; 3259, 3260, 3270, 3271 Record hubs; 3229, 3230, 3231
  Nuovo Tipo; 19 4031, 41, 42 4131; 2967 4141; 3708, 3709, 3711, 3715
  pedals; 5753, 5754 1045 posts; 6380 763; 6996. All tagged source_ref 342.
- Not moved: 7005 4061/1 stays from 1975. The 2000/1 and 2001/1 here are
  "SR, short-reach" calipers but no 4061/1 set number, and they are also
  the 2040/1 calipers. 1052/SR (2313, from 1975) absent; only 1052/1
  "(R, RL, SR)". 1253 photo labels 1266/1267 and the 1026 diagram label on
  p 22 not used (unconfirmed). SQL in the session scratchpad
  (special-1974.sql); no rows added or deleted.

## Campagnolo Catalog 17a, US English edition — 1975 (Campy1975_catalog17a.pdf, 58 pp)

- Black-and-white US-market condensation of Catalogue 17 (54 printed pages,
  PDF page = printed + 4; no text layer). "Sole Technical Advisor" page runs
  1974 Worlds to 1977 Worlds; copyright 1975. Group pages (SR road 4000/F,
  NR road 1032/F, SR track 4100, Record track 1033, Gran Sport 2240) then
  exploded parts pages with abbreviations R/NR/SR/RL/NGS/V/VO/S/SL/NT.
  Contains the Rally 3450 parts page missing from the Cat 17 scan.
- Still current in 1975, contrary to earlier conclusions: Velox 2250 and
  Gran Turismo 2270 (pictured p 18), Velox levers 1013/1A (V) and 1014/1A
  (V, NGS), and the Nuovo Tipo solid-spindle hubs 1250/1252 (p 25). Also
  1036 and 1036/2 solid-spindle Record track hubs, and "six-sprocket hubs
  also available" with the 1006/8 skewer.
- Added: 7004 "4104, Super Record Pista (Low Flange, Ti Spindle)" 1975-1980;
  7005 "4061/1, Super Record (short reach)" 1975-1982; 7006 "764, Record
  Pista Sprocket (1" x 3/16" chain)" 1975-1980. source_id
  MANUAL-CAT17A-1975-*. End years mirror sibling rows.
- Years (all year_to → 1975): 3229, 3231 Nuovo Tipo solid axle (reverses
  the Cat 17 change to 1973, note appended); 4167 Velox, 4120 Gran Turismo
  (notes appended), 6997 Velox levers; 4162 2170 Valentino Extra; 3275 4011,
  3276 4014, 3272 4101 SR hubs; 3270 1036, 3271 1036/2; 2963 1039 headset;
  3711 1038, 3715 1038/a pedals; 5753 1045, 5748 1044/a, 5754 1045/a seat
  pins; 5996 1013/1, 5989 1013/5-6, 5995 1014/1, 5979 1012/3 controls;
  6380 763 sprocket.
- Confirmed: SR road group, 4081 Rally 1st gen to 1975 / 4080 1.1 gen from
  1975, 576 2040/1 short reach 1970-78, 230 4062 from 1975, 5760 4051 fluted
  1975, 2297 1052/1, 1508 3320 Sport to 1975, 1509 1049/A, 1507 4151.
- Skipped: set numbers 3330, 1048, 1050, 4030, 4130 (crank + BB bundles);
  2000/1, 2001/1 (covered by 2040/1 rows). Sport Extra 6996 absent, left at
  1973.
- Deleted (user decision, 2026-09-28): 4159 "Nuovo Valentino Extra" and
  4160 "Valentino Extra" — unnumbered velobase repeats of 4162 (2170). Both
  were unreferenced by bike_spec and by generator overrides. The velobase
  crawler could reinsert them under their original source_ids
  (AA0D3126-…, 39DECE91-…); if they reappear, delete again.

## Campagnolo USA "Bicycle Components" — 1982 (Campy1982_Olympic/, 50 JPGs)

- Houston, Texas edition, copyright 1982, LA 1984 Olympic supplier cover.
  Printed page = JPG number. Bound with `bind-images-to-pdf.sh`, but the
  1800 px downscale made the gruppo pages unreadable: read those JPGs
  directly (pp 4-9, 12, 23, 25, 26, 31, 34, 36, 38, 41). Carries the new
  seven-digit identification numbers in brackets (0102018 = 4001, 0104007 =
  1052/NT, 0104006 = 3600/NT, 5011/06 = 3550, 6011/00 = 980 rear). velobase
  already used it: 2276 (3600/NT) says "82 Olympic Catalog".
- Five gruppos: Super Record road (Ti and steel), Nuovo Record, Gran Sport
  road, Gran Sport Touring (0305/0306 116 BCD cranks, 5031/00 triple BB,
  3550 Gran Sport Rally), Record/SR track. SR hubs 4011/4014/4101/4104 and
  the one-bolt 4051 are gone; SR uses Record hubs and 4051/1. Gran Sport now
  has its own 3600/NT front, 3700 pedals, 3800 post, 2040/F and 2040/FS
  brakes, 0304 crank. 980 rear and front listed. First freewheel (6-speed,
  3 pawl, 12 ranges), HiLo hub, BMX 305/806/821/822, toe clips.
- Dropped since 1975: Velox, Gran Turismo, Valentino Extra and 1204-1208
  levers, 1250/1252 solid-axle Nuovo Tipo, 1045, 1044/a, 1045/a posts.
- Added: 7007 "1022/00, Record (braze-on)" 1982-85; 7008 "1046/3, Record
  Triple and Cyclocross" BB 1982-85; 7009 "5031/00, Gran Sport Touring
  Triple" BB 1982-85; 7010 "821, BMX (small flange)" and 7011 "822, BMX
  (large flange)" hubs 1980-82 (group BMX). source_id MANUAL-CAT82-1982-*.
  End years are guesses.
- Notes appended: 4083 Rally Touring = 3550 Gran Sport Rally / 5011/06
  (225 g matches); 553, 554 Gran Sport brakes = 118 2040/F and 117 2040/FS.
- Years (all year_to → 1982, 48 rows): 2276, 2316; levers 5991, 5993, 5994,
  5995, 5996, 5989, 5979, 5988; hubs 3259, 3260, 3270, 3271, 3230, 3233,
  3261, 3262; cranks 1505, 1507, 1495, 7003, 1472, 1474, 1475, 1480; BBs 40,
  30, 20, 43, 41, 42; headsets 2963, 2966, 2951, 2968; pedals 3708, 3709,
  3711, 3715, 3688, 3716, 3717, 3692; posts 5749, 5734, 5761; brakes 553,
  554; freewheel 2072.
- Confirmed: 4001 2nd gen rows, NR v3 to 1981 / v4 from 1982, 3500, 980
  (4087, 2279), 1052/NT to 1982 / 0104007 from 1982, 1052/SR from 1979,
  Rally 1.1 to 1982, post-CPSC 2040/2040-1, 4061 v1 to 1982, 7005, 1049,
  1049/A, 4141, 7001/5965/7002.
- Left: 3229/3231 solid-axle Nuovo Tipo stay at 1975 (absent here); both
  4131 rows extended since the catalog does not distinguish axles; 1473
  Bianchi-labelled 0304 untouched; toe clips have no category.
- Deleted (user decision, 2026-09-28): 2296 "Record 1052/1" (bare 1972
  example, covered by 2298/2297) and 2304 "1052/1, Record (2nd version
  variation)" (no stated feature, covered by 2305). Original source_ids
  7872E656-… and 35CEFF78-…; delete again if a crawl reinserts them.
- Then collapsed the rest of the 1052/1 family to two rows (user decision,
  2026-09-28), since no catalog splits it into versions: deleted 2298
  "later body with cable stop" (155D51C4-…, overlapped 2297) and 2303 "no
  slot in cable stop" (C10C6511-…); retitled 2305 → "1052/1, Record (first
  body, 1960-1969)" and 2297 → "1052/1, Record (second body, 1970-1977)".
  2297 keeps the bike-spec links and the generator's pre-1978 override.

## Campagnolo Catalogue n. 18, English edition — December 1986 printing (Campy1985_catalog18.pdf, 70 pp)

- Vicenza (Via della Chimica) printing. The original back cover, PDF p. 70,
  has printer code `12/86`. The earlier c. 1985 attribution came from the
  filename and is superseded by the imprint. In this PDF, printed pp. 22–29
  are PDF pp. 21–28. Has a usable OCR
  layer (pdftotext -layout) for the parts lists; picture pages read
  visually for the "No more available" asterisks.
  See the [imprint and availability review](#no-18-imprint-and-super-record-availability--2026-11-22)
  for the source and component corrections. The actions below record the original ingest.
- Groups: SR road 4000/F (on 1046/A steel BB and 1037/A pedals, Ti pedals
  on request), Record 1032/F, Gran Sport 2240/5F (marked no more
  available, replaced by Victory), SR track 4100, Record track 1033,
  Touring 279 (5011/06 Rally Touring, 0306/C, 5031/00), 980 Equipaggiamento
  281. Seven-digit numbers now primary: 0102018, 0104006-0104012, 5011/06,
  6011/00. Valentino Extra 2170 is back with a full parts page.
- Dropped since 1982: HiLo hub, Ti bottom brackets 4031/4131 (BB page lists
  only 1046, 1046/A, 1046/3, 1046/4, 3331, 5031/00), 1014/1 pump-clip lever,
  1049/3. Asterisked as no more available: 0304, 0305, 0306 cranks, 3700
  pedals.
- Added: 7012 "0104011, Super Record (braze-on)" front 1985-87; 7013
  "1046/4, Record Cyclocross" BB 1985-87. source_id MANUAL-CAT18-1985-*.
- Corrected: 7010/7011 BMX hubs swapped — 821 is large flange, 822 small
  flange (1982 photo and this catalogue agree; my 1982 text reading was
  transposed).
- Notes appended: 2301 Nuovo Valentino front = 0104008; 2313 1052/SR =
  0104010; 7007 1022/00 = 0104009; 7002 levers sold as 1207/N 1208/N;
  4162 reappears after the 1982 US edition; 1472, 1474, 1475, 3688 marked
  discontinued.
- Years (all year_to → 1985, 47 rows): 4162 (from 1975), 4083; 2276, 2316,
  2301; levers 5988, 5979, 5996, 7001, 5991, 5993, 5994, 5965, 7002; hubs
  3259, 3260, 3270, 3271, 3230, 3233, 7010, 7011; cranks 1505, 1507, 1495,
  7003, 1472, 1474, 1475, 1480; BBs 40, 30, 20; headsets 2963, 2966, 2951,
  2968, 2967; pedals 3708, 3709, 3711, 3715, 3716, 3717, 3688, 3692; posts
  5749, 5734, 5761; brakes 7005, 553, 554; freewheel 2072; sprockets 6380
  (from 1975), 6999.
- Confirmed: 4001 2nd gen rows, NR v5 from 1985, 3500 and 980 to 1985,
  0104007 to 1985, 980 front to 1986, 6000 levers 1984-87, 4061 v2, 2040
  post-CPSC, 1049/1049A rows, 7008, 7009.
- Left: 4031/4131 and HiLo at 1982 (absent here); 5995 1014/1 at 1982.
- Retitled (user request, 2026-09-28) so the clip-on / braze-on pairs read
  as pairs: 2313 → "1052/SR (0104010), Super Record (clip-on)"; 2300 →
  "0104007, Nuovo Record (clip-on, 3-hole standard band)"; 7007 →
  "1022/00 (0104009), Record (braze-on)"; 7012 unchanged.
- HiLo (user decision, 2026-09-28): deleted 3262 (velobase "unused body
  shell" repeat, D5258F61-…); retitled 3261 → "HiLo, Record (high-low
  flange rear)" with the 1982 catalogue description, years 1980-82.

## Campagnolo Catalogue n. 18 bis, English edition — December 1986 (Campy1986_Catalog18bis/, 54 JPGs)

- Vicenza printing, back cover "12/86". Printed page = JPG number - 1
  (n18_02 is missing). Bound with `bind-images-to-pdf.sh` at 4000 px (the
  JPGs are only 1226x1800 so nothing was downscaled); all pages read
  visually in three batches of 18. First catalogue for the C-Record /
  Victory / Triomphe generation; shares only 980/990 and 3331 with n. 18.
- Groups: 180 Record corsa (C-Record: 0102050, 0104018, 0118071/72,
  322/101, 306/101, 303/101, 305/101 [misprint for 305/501], 304/104,
  316/101, 315/101), 182 C-Record pista, 269/268 Victory corsa/leisure,
  267/266 Triomphe corsa/leisure. Loose: 0102068 990 rear, 0104012/13 980
  fronts, 3331 Gran Sport triple BB, first rims (060.101-105 Record
  pave/strada/crono, Victory strada/crono).
- Delta brake 315/101 (0116070/71) is listed but "not available when
  printing this catalogue"; groups shipped with Super Record brakes.
- Misprints: p 25 calls 0104027 "Triomphe corsa braze-on"; pp 16 and 30 and
  its parts (clip 7182039, long fork 1180009) make it the leisure clip-on.
  Group pages say pedals 305/101, parts page 305/501.
- Dropped since n. 18: every Super Record / Nuovo Record / Rally / Gran
  Sport / Valentino part, 1013/1014 levers, 1034 headsets, 1046 BBs, 1037
  pedals, 1044 posts, 1035/1036 hubs, 2040 brakes, 0304-0306 cranks,
  3550/3700/3800, 0104006-0104011 fronts, freewheels (box pictured p 5,
  no page).
- Added: 7014 "303/101, C-Record" BB 1985-86 (year_from from sibling
  C-Record rows); 7015 "0102057, Triomphe (leisure, long cage)" rear
  1986-86. source_id MANUAL-CAT18BIS-1986-*.
- Years (year_to -> 1986, 17 rows): 4096, 4088, 2318, 2314, 6007, 6002,
  6003, 2971, 1485, 1245, 44, 20, 3720, 3719, 590, 585, 584.
- Placeholder 1980-1980 rows re-dated (year_from is inferred from sibling
  rows of the same range, year_to from this catalogue): 3242, 3243, 23,
  212, 4971 -> 1985-86; 3278 -> 1984-86.
- Notes appended (34 rows, tagged "Cat. n. 18 bis"): part numbers on the
  C-Record/Victory/Triomphe rows that velobase titled by name only
  (4099, 4097, 4096, 4168, 4172, 4155, 4088, 2283, 2284, 2279, 2318, 2314,
  5969, 6007, 6002, 3242, 2969, 1483, 1517, 1245, 1241, 5737, 5738, 5764,
  3693, 560, 233, 235, 212, 4973, 4966, 4965, 4972, 4971). Row 20 got no
  note: its description is already 220 chars of 255.
- Confirmed: 3241, 3240, 3280, 3281, 3277 hubs; 2954, 2969 headsets; 1483,
  1516, 1515, 1517 cranks; 45 BB; 3693 pedals; 560 Delta; 233, 235 levers;
  4973, 4966, 4965, 4972 rims; 2279 980 front to 1986.
- Left: SR/NR/1049/2040/4061/4062/1013-5N rows dated to 1987 (4150, 4152,
  4127, 2313, 1496-1498, 1509, 572, 575, 583, 231, 6000) and my n. 18
  guesses 7012, 7013 — this is a new-range catalogue and p 6 says SR
  brakes were still being shipped, so absence here is not evidence. Not
  inserted: 0118063 Triomphe top-tube levers, 306/051 C-Record ring,
  316/102 round post, QR sets 314/414/914. 4156 Triomphe S3, 2319 LX,
  2280 990 front, 3695 C-Record Pista pedals untouched. 5737/5738 aero
  posts are titled 130/210 mm but the catalogue sells 180 mm styled and
  130 mm circular; noted, not retitled. No generator override references
  any changed row.

## Campagnolo "Fluid-Dynamic Wheels" brochure, USA edition — November 1987 (Campy1987_FluidDynamics.pdf, 10 pp)

- Disc wheels only (Ghibli M23, Ghibli M23 "Gyroscopic", Khamsin). Back
  page "Lonigo (VI) - November '87", West Caldwell NJ distributor on the
  cover. Has a usable text layer; the parts table is p 9. Photo p 5 shows
  a Delta brake in use, consistent with Delta shipping in 1987.
- Numbering: R0xx1 Ghibli, R0xx3 Gyroscopic, R0xx2 Khamsin, R0xx4 Khamsin
  convertible rear. Fronts 24/26/28 in, 100 or 90 mm; rears 28 in only,
  three thread variants (IT/IN/FR) per wheel. Gyroscopic is front only.
- DB shape is one row per model (no groups, no per-size rows); kept that.
- Added: 7016 "Ghibli M23 (front)" 1987-94 (year_to copied from 6958);
  7017 "Ghibli M23 Gyroscopic (front)" 1987-87 (only appearance known;
  first insert overran 255 chars and was
  truncated; fixed with a 252-char description in the same SQL file). source_id MANUAL-FDW-1987-*.
- Years: 6958 Ghibli M23 road rear and 6957 Ghibli track rear year_from
  1980 -> 1987 (placeholder; catalogue is the only evidence, the Khamsin
  sibling 6959 says 1986 so 1986 would also be defensible).
- Notes appended ("Fluid-Dynamic brochure"): 6958 R0501/11/21; 6957
  R0531/41/51; 6959 R0594/604/614 convertible rear, R0562-82 road rear,
  R0102/R0112 fronts.
- Left: 6956 Ghibli 7sp cassette (1995-99), Scirocco, Bora, Shamal,
  Vento — later models. No separate Khamsin front row.

## Campagnolo "Record" brochure, USA edition — November 1987 (Campy1987_Record/, 15 JPGs)

- Same Lonigo printer and "November '87" date as the Fluid-Dynamic
  brochure. C-Record renamed plain "Record" with A-series catalogue
  numbers; prose pages carry no numbers, the parts list is p 14 (file
  14.jpg). Bound at 4000 px (JPGs are 1308x1800), read in one batch.
- Groups: A000A Record (A500D Delta + Power-Grade levers, A100 rear +
  braze-on front, 0271 Doppler levers, A300 hubs, A040 crank, A0H0 BB,
  A600-L pedals, A0D0 headset, A0R2 post); A000P Record track (A300PFG,
  A040P, A0H0P, A630-L, A0D0P, A0R2); A000K Record Keirin (A300KFG,
  A040K, A0H0K, A630KA, A0D0K, 00R8K), all NJS. Alternatives: A022/A023
  clip-on fronts, Friction 0281-83, Syncro 0211-13, Syncro 2 0221-23,
  A330-FG large flange hubs, A610 SGR-1, A620-L Triple Bearing, A0R2-S,
  A0R8/A0R8-S, A300P, A300K, B600KA, 00R8-S.
- Delta now shipping (was "not available" in n. 18 bis). Misprint: A300KFG
  and A300K are both described as large flange.
- Added: 7018 A300KFG Keirin hubs, 7019 A040K Keirin crank, 7020 A0H0K
  Keirin BB, 7021 A0D0K Keirin headset, 7022 00R8K Keirin post (all group
  C-Record Pista), 7023 A620-L Triple Bearing pedals, 7024 A0D0P track
  headset; all 1987-87. source_id MANUAL-REC87-1987-*.
- Years: 7014, 23, 3242, 3243, 1485 year_to 1986 -> 1987 (renumbered
  A0H0/A0H0P/A300P/A300PFG/A040P); 3694 SGR-1 and 5971 Syncro II
  year_from -> 1987 (listed as A610 and 0221-23); 214 Power Grade lever
  1980-1980 -> 1987-90 (year_to mirrors the Delta rows, only 1987 is
  evidenced).
- Notes appended ("Record brochure"): A-numbers on 4098, 2283, 2284,
  5970, 5969, 5973, 5971, 560, 214, 3241, 3240, 3242, 3243, 1482, 1485,
  7014, 23, 2954, 3693, 3695, 3694, 5755, 5739, 5737, 5738.
- Left: 208/213 Corsa Record levers (generation unclear), 1483 C-Record
  crank at 1986 (1482 covers 1987-94), 4099/4096 first-gen rears at 1986
  (4098 A010 covers 1987-89), 5755/5739 A0R7 posts (number not in this
  brochure, noted). Victory/Triomphe/990/rims absent: single-group
  brochure, not evidence.

## Campagnolo "Athena" brochure, USA edition — April 1988 (Campy1988_Athena/, 9 JPGs)

- Thumbnails only (479x700) but legible. Cover "4/88", back "April 88",
  West Caldwell NJ. First-generation Athena with D-series numbers; parts
  list is p 8 (tn_09.jpg). Group id 5 exists.
- Group D000A: D500 brakes + levers, D100 rear + braze-on front, 0281
  Record Friction levers, D300 small-flange hubs, D040 crank (135 BCD,
  170/172.5, rings 39-44 / 48-53), D0H0 BB, D600-AM pedals, D0D0 headset,
  C0R2 post. Alternatives: C022/C023 clip-on fronts, 0282/0283 Friction,
  0221-23 Syncro 2, C0R2-S, D056 Compact levers. (The earlier attribution of C0D0 to Athena is superseded by the dealer group-table review below; C022/C023/C0R2 are Chorus parts fitted to
  Athena and Croce d'Aune; settled by the 1988 dealer parts catalogue.) Rear has the "Multi Function System" five-position
  hanger insert (20-30 T).
- Added: 7025 "C0R2, Athena (styled)" post 1988-89 (year_to guessed from
  the 1990 SP-10AT v2 row); 7026 "D056, Athena Compact" levers 1988.
  source_id MANUAL-ATH88-1988-*.
- Years: 5967 Athena shifters 1980-80 -> 1988-90; 5968 Syncro II Athena
  year_from 1980 -> 1988.
- Notes appended ("Athena brochure"): 4092, 2281, 558, 211, 1479, 22,
  3236, 2952, 3690, 5969, 5971, 5967, 5968.
- Left: 4090 graphite rear and 557 Monoplaner graphite at 1980-90 (later
  finishes, not in this brochure); 5736 SP-10AT v2 at 1990; 215 Centaur
  Compact 1990 is a different part from D056.

## Campagnolo "Chorus" brochure, USA edition — April 1988 (Campy1988_Chorus/, 11 JPGs)

- Thumbnails (509x700), legible. Cover "4/88", back "April 88". Group
  code 700, 700-series part numbers (not the C-prefix I guessed from the
  Athena list). Parts list is p 10 (tn_10.jpg). Group id 8 exists.
- Group 700: 715/100 Monoplaner brakes + levers, 265/CS SM rear + braze-on
  front, 542/S Friction levers, 722/101 hubs, 706/101 crank (135 BCD,
  170/172.5/175, rings 39-54), 703/101 BB, 705/000 pedals, 704/101
  headset, 545 post 180 mm. Alternatives: 280/CS LG rear, 702/101 clip-on
  front, D056 Compact levers, 543/ST 544/F Friction, 325-327 Doppler,
  535-537/6AB and 538-541/7AB Syncro with Dual-Mode A/B inserts, 716/102
  post 130 mm. Rear has "Dual-Mode System" (parallelogram at 5 or 30 deg)
  and the first barrel adjuster on a Campagnolo rear.
- Added: 7027 "542/S, Chorus Friction" 1988-90, carrying all lever
  numbers in the description. source_id MANUAL-CHO88-1988-542-S.
- Years: 25 BB, 220 levers, 565 Monoplaner, 2287 adjustable-clamp front
  year_from 1980 -> 1988; 3249 722/101 hubs year_to 1987 -> 1988.
- Notes appended ("Chorus brochure"): 4108, 4107, 2286, 2287, 1487, 25,
  565, 220, 2956, 3249, 3700, 5742.
- Correction: 7025 (Athena C0R2 post) no longer says "shared with
  Chorus"; the Chorus post is 545 / 716/102 and the DB's Chorus aero post
  5742 is C0R1, the 1988 dealer catalogue later showed the 700-series numbers were
  provisional; C0R2 is shared with Athena and Croce d'Aune, and C0D0 with
  Croce d'Aune. The Athena C0D0 claim is superseded by the dealer group-table review below; 7025/7028 were updated in the DPC88 run.
- Left: 5976 and 222 graphite-finish rows at 1980 (later finish); 1992+
  CH-suffixed rows untouched.

## Campagnolo "Croce d'Aune" brochure, USA edition — March 1988 (Campy1988_Croce/, 11 JPGs)

- Full-size scans (1308x1800). Cover "3/88", back "March 88"; earliest of
  the four 1988 group brochures. Group code B000, B-series numbers; parts
  list is p 10 (10.jpg). Group id 9 exists.
- Group B000: B500 Delta "Penta-Drive" brakes + Power-Grade levers, B100
  SM rear (Twin-Axle System) + braze-on front, 0271 Doppler levers, B300
  hubs, B040 crank (135 BCD, 170/172.5/175, rings 39-47 / 48-54), B0H0 BB,
  B620-L Triple Bearing pedals, C0D0 headset, C0R2 post. Alternatives:
  B010-LG rear, A055 Record Compact levers, C022/C023 clip-on fronts,
  0272/0273 Doppler, 0281-83 Friction, 0221-23 Syncro 2 6 sp and
  0221-7/0222-7/0223-7 7 sp, B620-A steel clips, B620-R Multi-Size clips,
  C0R2-S. C-prefixed parts are Chorus parts, shared with Athena (see DPC88).
- Added: 7028 "C0D0, Croce d' Aune" headset 1988-91 (year_to from sibling
  front/hub rows). source_id MANUAL-CDA88-1988-C0D0.
- Years: 4112, 4111, 567, 27 placeholder 1980-1980 -> 1988-91 (year_to
  from siblings, only 1988 evidenced); 5744 post year_from 1980 -> 1988.
- Notes appended ("Croce brochure"): 4112, 4111, 2288, 567, 223, 1489,
  27, 3251, 3703, 5744, 5971 (7-speed Syncro 2 suffix).
- Correction: 7025 Athena C0R2 post now says "shared with Croce d'Aune".
- Left: 1490 and 2289 graphite rows; no Croce-specific shifter exists and
  none is listed (Record levers shared), so none inserted.

## Campagnolo Dealer Parts Catalogue — 1988 (1988CampagnoloDealerPartsCatalogue.pdf, 114 pp)

### Focused Syncro recheck — 2026-11-23

The [original 114-page scan](https://velobase.com/CatalogScans/Campagnolo/1988CampagnoloDealerPartsCatalogue.pdf) was rechecked at PDF pages 11–13 (blue section printed pages 3–5). Page 11 distinguishes A281–283 Record Friction from A271–273 Doppler. Page 12 lists Record Syncro A221 braze-on, A222 clip-on and A223 top-of-tube; right lever assembly 0118130 excludes the micrometric insert, and front lever assembly is 0118113. Page 13's compatibility chart lists six-speed inserts yellow 7222064/a, red 7222072 and white 7222075; seven-speed blue 7222063, green 7222071, black 7222076 and grey 7222088. Compatibility is qualified by derailleur, freewheel and chain, not universal. These are service parts, without a component category; this focused recheck establishes no new complete-component row or database change. The date remains filename-attributed, not printed.

### C-Record headset bearing crosswalk — 2026-11-24

The [original No. 18 bis table, printed p. 37](https://ebykr.com/wp-content/uploads/2026/10/ebykr-campagnolo-catalogue-18-bis-p36.webp), visually checked, explicitly lists headset **304/104** for both road and track and bearing set **1134014**. The [dealer parts catalogue](https://velobase.com/CatalogScans/Campagnolo/1988CampagnoloDealerPartsCatalogue.pdf), PDF pp. 88 and 100, gives **1134014 as 5/32 inch** for A0D0P track and **1134018 as 3/16 inch** for A0D0 road. These different part numbers and bearing sizes provide evidence of distinct documented configurations, rather than merely two incompatible figures for an assumed unchanged assembly. They do not date the transition, establish bearing interchangeability, or conclusively tie the uncoded February 1987 brochure to either later assembly; avoid treating 1988 as a verified change year. The parts-table crosswalk supersedes the earlier claim below that the evidence only consisted of conflicting size statements.

Live 2954 remains an aggregate 1985–1991 family with six generic C-Record bike links and source 110; no exact coded version is stated by those six values. No split or link change is proposed on this evidence. The approved guarded description-only update applied this crosswalk, preserving the established maker figures, existing weight claims, source 110 and 1985–1991 dates. Readback confirmed the new text and all six original links (1102, 1122, 5978, 6027, 18301 and 20268); rerun affected zero rows. Quality report found zero errors and 2,020 review findings. Before-image: `304/104 C-Record (A0D0) threaded headset; hardened steel races, aerodynamic alloy body, SELFORM membrane; British/Italian/French. Balls: 5/32in (1987 brochure), 3/16in (1988 parts book). 1987 retailer 99g; legacy 152g listing.` Restore only after checking the current value.

### Keirin axle width crosswalk — 2026-11-24

Visually rechecked the [Keirin dealer scan 97](https://www.disraeligears.co.uk/site/campagnolo_-_dealer_parts_catalog_scan_97.html): part **7281177** is listed as “68 P axle, width 120”; its same-page diagram specifies **68 mm bracket width** and **111 mm total axle length**. An earlier Campagnolo [No. 17a, printed p.33](https://www.campyonly.com/history/catalogs/catalog_17a.pdf), explains the 68-P-120 naming convention: 68 is bracket width, P is track and 120 is suggested rear hub width for chainline. Its 68-P-120 axle is separately listed as **109 mm**, so it is not evidence that the Keirin spindle has that length or is the same part. The later dealer group table lists a 120 mm rear Keirin hub. Applied to the Keirin list, the earlier naming convention makes rear-hub width a plausible interpretation of “120”, not a directly printed definition for 7281177; retain the inference explicitly.

The approved guarded description-only update records the 111 mm axle and qualifies the rear-hub interpretation. Readback confirmed the updated description, unchanged 1987–1991 dates, source 110 and zero bike links; a rerun affected zero rows. The quality report found zero errors and 2,020 review findings. Previous description: `A0H0K Record Keirin NJS-approved track bottom bracket; BSC thread, 68mm shell. 1988 parts book: 7281177 axle listed as 68 P, width 120; diagram gives 111mm total axle length. Meaning of 120 is unclear.` Restore only after checking the current value.

### Group table recheck — 2026-11-23

PDF pp. 7–8 list D0D0 as Athena's standard headset and no headset substitute; p. 27 lists C0D0 for Chorus. The earlier claim below that this catalogue places C0D0 on Athena is unsupported and superseded. Both tables list C021 front and C0R2 post. Record pp. 69–70 list C023 as a substitute front; this does not identify it with the separately attested A023. Record headset A0D0 is listed in French M25×1 as well as BSC and Italian on p. 69, with French upper cup and locknut on p. 88. Page 88 lists 3/16-inch balls, conflicting with the 5/32-inch figure recorded from the February 1987 brochure; recheck both before changing 2954. Keirin p. 111 labels axle 7281177 as width 120, while its diagram specifies 111 mm overall length and a 68 mm bracket; retain both as conflicting printed figures pending clarification for 7020. Pista and Keirin basic group tables pp. 93 and 107 were matched to existing component families; no missing complete assembly was established. This was a focused review, not a new full inventory.

**2954 evidence rechecked 2026-11-24:** [February 1987 brochure scan 12](https://www.disraeligears.co.uk/site/campagnolo_-_record_february_1987_version_scan_12.html) explicitly says 5/32-inch balls; [dealer parts catalogue](https://velobase.com/CatalogScans/Campagnolo/1988CampagnoloDealerPartsCatalogue.pdf), PDF p. 88, names A0D0 and lists 1134018 as 3/16-inch. The brochure does not print an assembly code, and neither source establishes whether the discrepancy reflects a revision or an error. PDF pp. 69 and 88 also document French threading. Before the correction below, the description named only British/Italian and presented 5/32-inch without the conflicting evidence. Retain the distinction between the printed claims until identity or revision evidence resolves it.

**2954 correction applied 2026-11-24:** Added French threading and attributed 5/32-inch balls to the 1987 brochure and 3/16-inch to the 1988 parts book. Changed source_ref 414 to 110. Previous description: `304/104 C-Record (A0D0) threaded headset; hardened steel races, 5/32in balls, aerodynamic alloy body and SELFORM membrane; British/Italian. 1987 retailer 99g; legacy 152g listing.` The guarded update affected one row; readback verified the 226-character description and unchanged title and dates, and rerun affected zero rows. Restore the old description and source 414 only with a current-value guard. Revision versus printing error remains unresolved.

**7020 evidence rechecked 2026-11-24:** Visually inspected the [dealer parts catalogue](https://velobase.com/CatalogScans/Campagnolo/1988CampagnoloDealerPartsCatalogue.pdf), PDF p. 111. Its parts list prints axle 7281177, `68 P axle, width 120`, while the adjacent diagram labels bracket width 68 mm and total axle length 111 mm; it also illustrates BSC 1.370×24 TPI threads. The meaning of the list's 120 is not explained, so it should not be asserted as axle length or bracket width. Before the correction below, row 7020 repeated the unqualified 120 and omitted the diagram. Seek a coded specimen or independent manufacturer source to resolve the dimension.

**7020 correction applied 2026-11-24:** Updated the description to distinguish the parts-list wording from the 111 mm diagram, noting the 68 mm shell and BSC thread. Source changed from 16 to 110. Previous description: `Campagnolo A0H0K, Record Keirin, Italy. NJS-threaded track bottom bracket. Record brochure, Nov 1987. DPC88: 68 P axle, width 120.` The exact-value guarded update affected one row; readback verified the 201-character description and unchanged title and dates; rerun affected zero rows. Restore the old description and source 16 only with a current-value guard.

**7028 correction applied 2026-11-24:** Removed “also on Athena” from its description and set source_ref from 13 to 110. The previous full description was `Campagnolo C0D0, Croce d' Aune, Italy. Avional head set, 1/4 in balls in resin retainers, SELFORM damping element, resin seal on lower race; Italian/BSC/French. Chorus head set, also on Athena (DPC88). Croce d'Aune brochure, Mar 1988.` All other fields and links were retained. The exact-value guarded update affected one row; readback verified the corrected description and a rerun affected zero rows. Restore the old description and source 13 only with a current-value guard.

- Spare-parts catalogue, no text layer, no printed date (1988 from the
  filename; content predates Euclid/Centaur 1989). Six tabbed sections:
  Athena (blue), Chorus (magenta), Croce d'Aune (green), Record, Record
  Pista, Record Keirin (red). Each has a Basic Group / Substitutive
  components table then an exploded page per part with seven-digit
  sub-part numbers. Read visually in six batches of 20.
- Settles the numbering: A=Record, B=Croce, C=Chorus, D=Athena; x010
  rear, x021/22/23 fronts, x300 hubs (x031/x032), x040 crank (x071/x072),
  x0H0 BB, x500 brakes (x051/x052) + x053 lever, x600/x620/x630 pedals,
  x0R2 post, x0D0 headset. The x100 codes in the US brochures were
  gear+front subgroups; the Chorus brochure's 700-series and the Record
  brochure's 02xx lever numbers were provisional (now C0xx, A2xx).
- Sharing: Athena and Croce use Chorus C021 front and C0R2 post; the
  C0D0 headset claim for Athena is superseded by the group table recheck above.
  Record uses C023 adjustable clip. Chorus and Athena ship A281
  Record Friction levers, Croce and Record A271 Doppler. Compact levers:
  D056 (Athena, Chorus), A055 (Croce, Record). Seat pins: tables say
  x0R2/x0R8, parts pages x0R1/x0R7 (confirms 5755/5739 A0R7).
- No inserts: every part already had a row.
- Years: 7018-7024 (Keirin/Pista/Triple Bearing rows from the Nov 1987
  brochure), 7014, 23, 1485, 3242, 3243, 3695 year_to 1987 -> 1988.
- Notes appended, tag "DPC88:", 65 rows across all six groups (guarded
  with a LENGTH check; 5971 skipped at 248 chars). Longest now 251.
- Corrections: 7025 -> "Chorus C0R2 styled seat pin, also on Croce
  d'Aune"; 7028 -> "Chorus head set, also on Athena" (the Athena claim is unsupported, see recheck above); 7027 542/S Chorus
  Friction shortened and noted that DPC88 lists Chorus with A281; then
  retitled (user decision, 2026-09-28) to "Chorus levers (A281 Friction
  with Dual-Mode Syncro inserts)" so the provisional 542/S number is out
  of the title and the Chorus-specific A/B inserts are what it records.
- Left: Syncro insert codes 7222063-7222088, toe clips, straps, bottle
  1120005 (no category). 5971 Syncro II untouched (full).

## Campagnolo "Centaur" brochure, USA edition — April 1989 (centaur89.pdf, 11 pp)

- A4 scan, no text layer. Cover "4/89", back "April '89", Cartografica
  Veneta, Lonigo. First all-terrain group, code Q000; parts list p 10.
  Group id 7 exists.
- Basic group: Q010-LG rear (Q010-MD, Q010 SM substitutes; caps 44/38/32,
  max sprocket 34/34/30), M022 Euclid front (M023 adjustable, M024 35-36
  mm), Q222 Syncro clip-on levers (0118155 7-sp rear), Q500 Monoplaner
  cantilever brakes + levers (Q05C Compact, Q05E Biofitting), Q040 triple
  175 mm (Q071/Q072 170; rings QZ001/QZ00M/QZ00, 110/74 BCD), Q0H0 BB
  (124/132 axle), Q600 LG pedals (Q640 SM), Q300 hubs (Q300-FG), Q0R8
  post 325 mm with frame QR, Q0D0 steel headset with locking bracket.
- Added: 7029 "Q010-LG, Centaur (first generation)" rear 1989-90 with all
  three cage lengths in the description; 7030 "M024, Euclid (35-36 mm
  clip)" front 1989-91. source_id MANUAL-CEN89-1989-*.
- Years: 15 Centaur rows year_from 1990 -> 1989: 24, 2955, 3247, 3697,
  3698, 5974, 5975, 564, 219, 215, 216, 1486, 5741, 563, 3699.
- Notes appended ("Centaur brochure"): those 15 plus 3248, 217, 218,
  2291, 2292.
- Left: 4104/4105 RD-02CE/03CE (1990-93 second generation), 2285 Century
  grey front, 3245/3246 cassette hubs, 5740/5747 later posts, 3706 Icarus
  pedals. 3699 pedals row says country "France" (velobase error, not
  touched). Toe-clips, reflectors, gear guards, bottle: no category.

## Campagnolo derailleur dedupe — 2026-09-28 (user decision, sections A and B of the report)

- Analysed all 142 Campagnolo front/rear derailleur rows for same-part
  duplicates. Only 4099 carried bike_spec links (moved to 4096); no
  generator override referenced a deleted id. SQL kept as
  campy-derailleur-dedupe.sql; the user ran it (auto-mode blocks DELETEs).
  127 rows remain.
- Deleted (source_id prefix, so a velobase crawl reinsert can be spotted):
  4097 C-Record First Gen. (353F4ECB), 4099 "c record" (01F0EB60), 2284
  C-Record front (6AEB8E46), 4116 1012/1 1952 (C9705308), 4132 1020
  Record (1965) (DF4577B3), 4170 Victory S3 1987 (6FFDFE4E), 4156
  Triomphe S3 (1986) (F5906D74), 4140/4141 Record Ti 9-sp 1997/2000
  (B63A5BDB, 695C5686), 4100/4101 Cambio Corsa 1940/1945 (4B8F93E2,
  1299F4FE), 4147 bare 4001 1970-80 (E27153A5), 4150 4001 2nd gen matte
  (6A32380A), 4130 Record (1991) (1DA3D706), 4161 Valentino G.S.
  (1DBC4BA3).
- Merged/retitled: 4096 -> "0102050, C-Record (first generation)"
  1985-86; 4117 1012/1 from 1952; 4169 Victory S3 1987-88; 4157 Triomphe
  S3 1986-87; 4139 Record Ti 9-sp 1997-2000; 4102 1001 Cambio Corsa from
  1940; 4119 1012/4 first version re-dated 1951 -> 1955 (first appears
  in Catalogo N. 13). Notes on 4148, 4151, 4152, 4133, 4162.
- Cleanup (description-cleanup.sql, same day): the merge/delete
  housekeeping was stripped from those descriptions again since it is
  user-facing text; this file is the record. Also stripped velobase's
  "View Weight List" UI tail from 305 rows across all brands. Rule for
  future runs: catalogue facts go in descriptions, row-number bookkeeping
  goes only here.
- Left (section C placeholders, not applied): NULL years on 2280, 2289,
  4082; 1980 placeholders on 4090, 4089, 2277, 4153. Section D splits
  (NR v1-v5, Rally gens, cage lengths, finish variants, 0104007 bodies,
  M022-M024, RD-xxRE series) kept.

## Campagnolo brake and brake lever dedupe — 2026-09-28 (user decision, sections A and B)

- Analysed 70 rows (29 levers, 41 brakes). Only 588 carried a bike_spec
  link (moved to 587); no generator override referenced a deleted id.
  SQL kept as campy-brake-dedupe.sql; the user ran it. 57 rows remain.
- Deleted (source_id prefix): levers 217 (FE5E10FA) and 218 (C96C4AA3)
  "Centaur, Centaur", 221 Chorus (1993) (15A43395), 208 Corsa Record
  (5AEDA2CC), 213 Corsa Record pantographed (D34D675B), 230 4062 "long
  reach?" (7C7CBB54); brakes 586 Veloce Monoplaner (D2E450DB), 588 and
  589 Veloce (8A12DE4B, C9C7626B), 584 Triomphe unnumbered (FE99461C),
  563 Centaur unnumbered (28D66D99), 568 Euclid unnumbered (2CFFC1DA),
  571 Mirage Monoplanar (9631D3AB).
- Merged/retitled: 219 Q500 Centaur lever to 1993; 220 Chorus lever to
  1993; 587 -> "BR-02VL, Veloce Monoplaner"; 212 -> "0118065, C-Record
  (first generation)" (Corsa Record and pantographed examples noted);
  232 4062 pre-'83 year_from 1970 -> 1974; 570 Mirage noted Monoplaner.
- Left (section C, not applied): 222 Chorus graphite, 224 Euclid later
  version, 557 Athena Monoplaner graphite still dated from 1980; 226/228
  2030 overlap. Section D kept: 2040/2040-1 CPSC versions, 4061 v1/v2/
  4061-1, Gran Sport first/second gen, Delta family, numbered 1990s rows.

## Campagnolo crankset and bottom bracket dedupe — 2026-09-28 (user decision, sections A and B)

- Analysed 87 rows (34 BBs, 53 cranks). Only 1513 carried bike_spec links
  (5, moved to 1509); the generator's 1981 Kalkhoff 'campagnolo super
  record' crank override was repointed 1513 -> 1509 in the same commit.
  SQL kept as campy-crank-bb-dedupe.sql; the user ran it. 80 rows remain.
- Deleted (source_id prefix): BBs 36 BB-01RE CART 111 (56F4790A), 39
  Record con sfere 3/16 unwidthed (5D348EB8); cranks 1513 bare 1049/A
  Super Record 1980 (823786B4), 1469 "FC-01TDIC Tandem" (5EE3F466), 1497
  1049 v4 Special Record polished (06EBC9FF), 1470 "record pista
  non-fluted" (4B911B9B), 1508 3320 Sport (1C9F2B57).
- Merged/retitled: 35 -> "BB-01RE (CART 111), Record" 1992-95; 38 ->
  "Record (con sfere da 3/16, 70 and 74 mm)"; 1476 -> "3320, Gran Sport /
  Sport" 1970-75; notes on 1496 (polished Special Record) and 1505
  (non-fluted arms).
- Left (section C, not applied): 41/42 4131 start 1970 (should be 1974);
  1510-1514 no-flute SR arms dated 1980-90 (should be c. 1985-87); 1473
  Bianchi 0304 at 1980 only; 37 Triple Bearing BB at 1990 (title says c.
  1997); 1500 Olympus graphite no years; 1494 title "Campagnolo,
  Campagnolo Mirage"; 33 Record Pista BB empty description; 1471 "Record
  triple" 1990 ungrouped. Section D kept: 1049 v1-v4, 4031/4131 gens,
  1046 family, 0304-0306, C-Record gens, graphite finishes, 1990s series.

## Campagnolo hub and headset dedupe — 2026-09-28 (user decision, sections A and B)

- Analysed 89 rows (26 headsets, 63 hubs). No deleted row carried a
  bike_spec link or a generator override. SQL kept as
  campy-hub-headset-dedupe.sql; the user ran it. 79 rows remain.
- Deleted (source_id prefix): 2957 headset "don't know" (CF525DD7), 3225
  "pista/track hubs" (DE49DFC1), 3238 FH-00AT 1993 (991EFBB6), 7000 Sport
  Strada headset (MANUAL-CAT16SUP, my own insert; it was the 1040/A),
  3254 and 3255 unnumbered 1950 Gran Sport hubs (9A973289, F6003587),
  3228 Record 'SU' engraved (46B49944), 3235 Athena 7 speed (EDF21B4A),
  3264 and 3266 Record 8sp rear/front (9445FD63, 6F0FE940).
- Merged/extended: 2951 1040/A Gran Sport headset 1971-85 with the
  Sport-headset race numbers; 3237 FH-00AT to 1993; 3265 Record 8sp
  1991-96; notes on 3256 (pressed flanges) and 3259 (SU stamp).
- Left (section C, not applied): 2953 and 3239 Century finish dated
  1980 / 1985-90 (should be c. 1991-92); titles "1039, <C> Record Strada"
  (2963) and "Record Pista # 1040" (2966); 3272 4101 start 1970 (should
  be 1974); 3232 1253 kidney-bean at 1972 only; 3258 disc hub no years.
  Section D kept: Cambio Corsa front/rear, 1034-1036 flanges, 1250-1253,
  1039 eras, C-Record 321/322, SR 4011/4014/4101/4104, 3263 alloy body.
- Running total for the day's four dedupes: derailleurs 142 -> 127,
  brakes/levers 70 -> 57, cranks/BBs 87 -> 80, hubs/headsets 89 -> 79.

## Campagnolo pedal and seat post dedupe — 2026-09-28 (user decision, sections A and B)

- Analysed 69 rows (35 pedals, 34 posts). No deleted row carried a
  bike_spec link or a generator override. SQL kept as
  campy-pedal-post-dedupe.sql; the user ran it. 60 rows remain (9
  deletions, one more than the report's count of 8).
- Deleted (source_id prefix): pedals 3704 Euclid 1st Gen (6454032B),
  3699 Centaur unnumbered (309CE850), 3713 1038/1 alloy con denti
  1958-59 (092485E7); posts 5757 SP-10RE circa 97 (F81DDBFE), 5760 4051
  fluted two-bolt 1975 (D154629D), 5762/5763 4051-1 polished and
  semi-polished uppers (C9793725, 4CDE9E76), 7025 C0R2 Athena
  (MANUAL-ATH88, my own insert), 5744 Croce d'Aune long version
  (27443F7F).
- Merged/retitled: 3714 1038/1 con denti 1958-67; 5759 -> "4051, Super
  Record (two-bolt, fluted)" 1974-80; 5761 finish note; 5742 -> "C0R2,
  Chorus (styled; fitted to Athena and Croce d' Aune)" 1987-90, the one
  row for the shared Chorus post (DPC88 lists it in all three groups).
- Left (section C, not applied): 3696 PD-02RE dated 1980-90 (1991-94);
  3716/3717 SR pedals start 1970; 3707 orthopedic no years; 3689 title
  spacing; 5755/5739 titles carry "1986-1989" and sit in different
  groups; 5737/5738 lengths 130/210 vs catalogue 180/130; 5741 wants
  Q0R8 in the title; 5748 "Superlegerro". Section D kept: 1037/1037-a,
  1038 family, 1044 versions, 1045, Euclid bolt variants, both Centaur
  posts, PD-12CH/PD-22CH.
- Day's five dedupes: derailleurs 142->127, brakes/levers 70->57,
  cranks/BBs 87->80, hubs/headsets 89->79, pedals/posts 69->60 (54 rows).

## Campagnolo shifter, Ergopower and chainring dedupe — 2026-09-28 (user decision, sections A and B)

- Analysed 78 rows (15 chainrings, 50 shifters, 13 shifting brake
  levers). No deleted row carried a bike_spec link or a generator
  override (5970 and 5976 stay pinned). SQL kept as
  campy-shifter-ring-dedupe.sql; the user ran it. 64 rows remain.
- Deleted (source_id prefix): shifters 5975 Q222 repeat (603373EE), 5991
  bare 1014 Record (2C598429), 5988 1012/1013 bar-end umbrella
  (B73DB228), 6005 Valentino Extra thumb-nut (B284DB07), 5984 Gran
  Turismo unnumbered (BC04F5BF), 5967 Athena = A281 (A1C92234), 5968
  Syncro II Athena = A221 (A640349D), 5997 Record 8-speed = SL-01RE
  (D6A977B0); Ergopower 6347 Carbon BB-System Record 9-sp repeat
  (FC42C347); chainrings 1236 753 151 BCD (8CC001FD), 1239 760 151 BCD
  (8057CC96), 1243 unnumbered Super Record ring (894D350F), 1232 and
  1242 chainring guards PATENT stampings (F2F61D9C, 766A3B56).
- Merged/retitled: 6343 -> "Record 9-speed Ergopower (Carbon BB-System)"
  1998-2000; 1235 -> "753, Record" and 1238 -> "760, Record Pista" with
  151/144 BCD notes; 1231 -> "chainring guard (BREV or PATENT CAMPAGNOLO
  stamping)"; 5969 C-Record Friction to 1990 (Athena years); notes on
  5979 (1012/2 pattern), 6004 (thumb-nut), 1244 (outer 87 g).
- Left (section C, not applied): 5976 Chorus graphite and 6001 SR
  Retro-Friction dated 1980 (linked; c. 1990-92 and 1984-87); all
  unnumbered Ergopower rows dated 1990 (6338, 6339 NULL, 6340, 6341,
  6342, 6348, 6349); 1237 759 skip-tooth NULL; 5987 title lacks group.
  Section D kept: 1013/1 eras, both 1013/1A rows, 1014 versions, 1015s,
  760/A gens, C-Record lever family, 7027 Chorus levers, EC/SL series.
- Day's six dedupes: derailleurs 142->127, brakes/levers 70->57,
  cranks/BBs 87->80, hubs/headsets 89->79, pedals/posts 69->60,
  shifters/rings 78->64 (68 rows). Remaining Campagnolo categories not
  analysed: rims, wheels, freewheels/cassettes, chains, stems/bars.

## Campagnolo rim and wheel dedupe — 2026-09-28 (user decision, sections A and B)

- Analysed 42 rows (30 rims, 12 wheels). No deleted row carried a
  bike_spec link; the generator's 'campagnolo omicron' rim override keeps
  its target 4962. SQL kept as campy-rim-dedupe.sql; the user ran it.
  37 rows remain. No wheel duplicates found.
- Deleted (source_id prefix): 4945 Barcelona 92 high profile (853D7D7E),
  4963 Omicron Electrox (2F4933C9), 4964 Omicron Oxide (75428F3E), 4960
  Omega Strada hardox clincher (FE7484FC), 4949 Epsilon Strada Oxide
  (6C0CA46D).
- Merged/retitled: 4946 -> "Barcelona 92 (high profile)"; 4962 ->
  "Omicron Strada (polished, Electrox or oxide finish)"; 4948 ->
  "Epsilon Strada (G25 or oxide finish)"; 4957 Omega Strada Hardox noted
  as clincher, 395-430 g.
- Left (section C, not applied): NULL years on 4944 ATEK, 4947 Electron,
  4948 Epsilon, 4950 Gamma, 4954 Moskva 80, 4958 Omega XL; placeholder
  1980/1990 on 4967 Seoul 88, 4952 Mexico 68, 4953 Montreal 76, 4968
  Shamal 12 HPW, 4961, 4969, 4946; 4973 should read "060.102, Record
  Strada"; wheels 6955 title in capitals, 6961/6962 Shamal and 6963
  Vento dated 1990. Section D kept: Omega profiles/widths, the five 1986
  Record/Victory rims, all wheel rows.
- Day's seven dedupes: derailleurs 142->127, brakes/levers 70->57,
  cranks/BBs 87->80, hubs/headsets 89->79, pedals/posts 69->60,
  shifters/rings 78->64, rims/wheels 42->37 (73 rows). Not analysed:
  freewheels/cassettes/sprockets, chains, stems/bars, saddles, tyres.

## Campagnolo freewheel, cassette and sprocket review — 2026-09-28

- Analysed 15 rows (6 cassettes, 5 freewheels, 4 sprockets). No
  duplicates; every row is a distinct model, speed, material or version.
  Only 1186 Exa-Drive 8-sp is linked. Nothing deleted.
- Years fixed (campy-fw-years.sql, run by me, no deletions): 2072 alloy
  6-sp from 1982 (first catalogue appearance); 2073 alloy 7-sp 1985-90;
  2076 titanium 1987-90; 2075 7-sp narrow 1988-90, noted as the Servizio
  Corsa Compact of the 1988 dealer catalogue; 1187/1188 Exa-Drive 9-sp
  to 2000. The 1985-90 and 1987-90 values are estimates, not catalogue
  evidence; 2075's identification is from the DPC88 insert table.
- Left: 1183 "(7sp, Xenon?)" title; 2074 freewheel core is a sub-part
  row kept as is.

## Campagnolo section C placeholder years and titles — 2026-09-28 (user request, all categories)

- The section C items left by the seven dedupe reports, applied in one
  idempotent file (campy-section-c-years.sql, 49 statements, 66 rows,
  run by me since nothing is deleted). Only 1231 chainring guard keeps
  NULL years (no basis for a date).
- Catalogue-backed: 41/42 4131, 3272 4101, 3717 4121 start 1974 (Super
  Record launch); 1473 Bianchi 0304 to 1985 (sibling 1472); 4973 retitled
  "060.102, Record Strada" (Cat. n. 18 bis); 5739 A0R7-S 1986-89 and
  group Record to match 5755; 1354 Record chain to 1993.
- Estimates (est), model history not catalogue evidence: 990 century
  finish 2280/4089 1987-90; graphite/Century finishes 2289, 4090, 224,
  1500 1990-91, 222, 557, 2953, 3239 1990-92 or 1991-92; 4082 Rally with
  NR parallelogram 1974-82; 2277 3600/NT wing logo 1980-85; no-flute SR
  arms 1510/1511/1512/1514 1985-87; 37 Triple Bearing BB 1997; 3258
  disc hub 1985-90; 3696 PD-02RE 1991-94; 3707 orthopedic 1970-85; 5976
  Chorus graphite levers 1990-92; 6001 SR Retro-Friction 1984-87;
  Ergopower 6338 1992-94, 6339 Avanti 1995-98, 6340/6342 1998-2000, 6341
  from 1992, 6348 1996-97, 6349 1992-93; 1237 759 skip-tooth 1950-60;
  rims Greek-letter 4948/4950/4958/4961 1988-92, 4969 from 1988, 4962
  from 1985, Olympic-city 4946/4952/4953/4954/4967 1990-92, 4944/4947/
  4968 and Shamal wheels 6961/6962 1992-96, 6963 Vento 1994-98.
- Titles fixed: 1494 "Mirage" (was doubled), 2963 "1039, Record Strada"
  (stray <C>), 2966 "1040, Record Pista", 3689 "Record, 50th
  Anniversary", 5748 Superleggero spelling, 5755/5739 A0R7 cylindrical
  180/130 mm, 5737/5738 A0R2-S / A0R2 C-Record aero, 5741 "Q0R8, Centaur
  (325 mm, frame QR)", 6955 "Bora (1st generation, 26 in)"; 33 Record
  Pista BB given a description.
- Generator: 'campagnolo omicron' -> 4962 has no year range, so the
  1980 -> 1985 start change does not affect it. The 1049/A no-flute rows
  are not referenced.

## Campagnolo "Euclid" brochure, USA edition — September 1988 (euclid89.pdf, 13 pp)

- A4 scan, no text layer; cover "9/88", back "September 88" (Centrooffset,
  Mestrino). The filename says 89 but the brochure is 1988. Page 2 (group
  photo spread) did not render; the parts list on p 12 is complete. First
  mountain-bike group, code M000, Chorus-derived. Group id 10 exists.
- Basic composition: M010 gear, M022 front (M023 adjustable, M024 35-36
  mm), M500-CP brakes + levers (standard or Biofitting; Syncro levers
  0118122 6-sp, 0118124 7-sp on the brake-lever stalk, I.G.A.S.; M2KD
  third-brake kit), M040 triple 110/74 (170/175/180; 46-50 / 36-38 /
  24-28), M0H0 BB 132 mm (136 asymmetric and 140 options), M600-PR pedals
  (M600-AM steel clips), M300 hubs (M300-FG, M300P, M300PFG; 7 or 9 mm
  ends; gear-guard versions), M0R8 post (M0RV two straps; 50/60 mm frame
  QR), M0D0 headset with cable carrier. Gear guards 1390001/2.
- No inserts. Years (catalogue-backed): 17 Euclid rows year_from 1989 ->
  1988 (225, 569, 1491, 1492, 2291, 2292, 7030, 2958, 3252, 3253, 3705,
  4113-4115, 5745, 5746, 5977); 28 M0H0 1990 -> 1988-91; 3253 M300-FG to
  1991. 224 later-version levers and 2290 graphite front stay 1990-91.
- Notes appended ("Euclid brochure"): M-numbers and specs on 16 rows,
  including that the brochure lists one M010 gear where velobase has
  three cage lengths (4113/4114/4115 kept as they are).
- Left: solid-spindle M300P/M300PFG and the Biofitting lever as notes,
  not rows; accessories (bottle 1120007, spoke guard, mudguard,
  reflectors) have no category.

## Campagnolo range brochures, GB edition — June 1990 and September 1990 "Anaheim 1990" (Campy1990_Groups/, 12 + 14 thumbnails)

- Two overview brochures, one page per group with photo, paragraph and an
  options table (standard / on request). No part numbers, so a year and
  options record only. Read as two bound PDFs (groups-6-90, groups-9-90).
- June: Xenon, Athena, Chorus, Croce d'Aune, Record, Olympus, Centaur,
  Euclid, Tandem Road (Croce d'Aune and Xenon variants), MTB Tandem
  (Centaur and Olympus variants), lubricants and tools. September adds
  Record Pista, Record Keirin and Themis (new touring group), drops the
  Xenon and Olympus tandem variants.
- First appearances: Tandem Road and MTB Tandem groups June 1990; Themis
  September 1990. Chorus rear "preset for 8 speed" by September. Century
  (Record) and graphite (Athena, Chorus, Croce, Centaur, Euclid) finishes
  all current 1990, supporting the 1990-92 estimates set earlier today.
- No inserts. Years: 17 rows year_to -> 1990 (223 Croce levers, 5739/5755
  A0R7 posts, 3249 Chorus 722/101 hubs, 1489/1490 Croce cranks, 7018-7024
  Keirin/Pista/Triple Bearing, 3242/3243/23/1485 C-Record Pista); 3718
  Themis pedals year_from 1989 -> 1990.
- Notes ("1990 range brochures"): 3265 Record cassette hub, 1354 Rohloff
  chain, 4128 Olympus, 4115 Euclid, 3227 tandem hub composition, 4154
  Themis composition, 3718; short "1990:" notes on 4108 Chorus.
- Truncation incident: four notes overflowed varchar(255) and two (5971,
  7029) lost their guard text, so the file was not idempotent on re-run.
  Repaired in groups-1990-fix.sql by rebuilding from the pre-note text;
  the main file now carries LENGTH(description) < 120 guards. The same
  check found two older truncations (3261 HiLo, 7002 1207/1208) and
  closed their sentences. Rule: always add a LENGTH guard on CONCAT notes.
- Left: no Themis-specific rows beyond 4154/3718 (parts are Xenon and
  Olympus); no tandem lever or 40-h hub rows beyond 3227; 4098 A010 not
  extended (4133 R010 covers 1990-91); 7026 D056 not listed, left at 1988.

## Campagnolo range brochure, GB edition — January 1991 (Campy1991_Groups/, 16 thumbnails)

- Cover "1/91". Same format and page order as the Sep 1990 "Anaheim"
  brochure; every group text and options table is reprinted word for
  word (Xenon, Athena, Chorus 8-speed, Croce d'Aune, Record, Record
  Pista/Keirin, Themis, Olympus, Centaur, Euclid, Tandem Road, MTB
  Tandem, lubricant and tools). Only addition: Biodynamic, Biothermal
  and Biodynamic 900 bottles (no category). No part numbers.
- Significance: last brochure before the 1992 Record OR / Icarus /
  Ergopower generation, so it documents a 1991 endpoint for every
  1988-90 group.
- No inserts. Years: 71 rows year_to 1990 -> 1991 across Xenon, Athena,
  Chorus, Croce d'Aune, Record/C-Record, Record Pista/Keirin, Olympus,
  Centaur and misc (tandem hub 3227, Veloce headset 2970, Icarus/Centaur
  pedals 3706, disc hub 3258, freewheels 2073/2075/2076). Left at 1990
  because not listed: 1494 Mirage crank, 587 Veloce brakes, 2969
  Triomphe headset.
- Notes ("Current in the Jan 1991 range brochure"): one per group rear
  derailleur where length allowed (4173 Xenon, 4092 Athena, 4112 Croce,
  4133 Record, 4128 Olympus); 4108, 7029, 4115, 4154 skipped by the
  LENGTH guard, which behaved as intended.

## Campagnolo rims and Fluid-Dynamic wheels, GB edition — January 1991 (Campy_1991Rims.pdf, 12 pp)

- Cover "1/91". Scan, no text layer. Pages: tubular rims (Sigma, Omega,
  Lambda), clincher "crochet" rims (Omega, Lambda, Ypsilon, Omicron,
  Gamma), ATB rims (Thorr, Contax), Fluid-Dynamic wheels (Ghibli M23,
  Gyroscopic, Khamsin, Scirocco, bags), and the R-number wheel table.
  Rims carry P-series numbers: xxx1 tubular, xxx2 clincher, xxx4 ATB.
- Rim numbers: P0071 Sigma Pave, P0091 Sigma Strada, P0111 Sigma 20,
  P0121 Sigma Crono; P0451/P0222 Omega V profile tub/clincher, P0161/
  P0162 Omega XL, P0171/P0172 Omega Strada, P0211/P0212/P0232 Lambda,
  P0322 Ypsilon V, P0272/P0352 Omicron polished/Electrox, P0282/P0332
  Gamma polished/Electrox; P0504/14/24 Thorr and P0534/44/54 Contax in
  Hardox/oxide/polished. Wheel table reprints Nov 1987 plus Scirocco
  R0215 road and R0225 track.
- First appearances Jan 1991: P-numbers, Sigma 20, Ypsilon, Thorr,
  Contax, Scirocco track. Record Pave/Strada/Crono and Victory rims of
  1986 are gone (Sigma replaces them). Confirms the Greek-letter rims'
  1988-92 estimates.
- Added: 7031 P0071 Sigma Pave, 7032 P0111 Sigma 20 Strada, 7033 P0322
  Ypsilon Strada V Profile, 7034 P0504 Thorr (ATB, finishes noted), 7035
  P0534 Contax (ATB), all 1991-92 (year_to a guess). source_id
  MANUAL-RIM91-1991-*.
- Years: 4951 Lambda, 4962 Omicron, 4970 Sigma Strada, 6959 Khamsin,
  7017 Ghibli Gyroscopic year_to -> 1991.
- Notes ("Jan 1991"): P-numbers on 4957, 4958, 4961, 4951, 4962, 4950,
  4970, 4969; R0225 on 6960; still-listed on 6959, 7017. All guarded.
- Left: 4948 Epsilon (not in this catalogue); 4955/4956 Omega 19/20 and
  the Olympic-city rims (not listed, later or earlier); wheel bags.

## Campagnolo 1992 Road Range and 1992 Rims Range, GB — 1992 (Campy1992_Rims&Road/, 8 + 8 thumbnails)

- Two Lonigo-printed brochures. Road: first catalogue of the Ergopower
  generation, three groups (Record RR, Chorus RS, Athena RS) with the
  two-letter codes the DB already uses (RD-01RE, FD-01SRE/FRE, SL-01SRE
  CG, EC-02RE CG, HS-01OR, FC-01RE, BB-01/03RE, BB-01/03CART, PD-12REQR,
  PD-02RE, SP-RE, BR-02RE, BL-02RE CG, HB/FH-00RE, FH-01RE, CS-8AL,
  CS-8S, CN-CA68S; CH and AT equivalents; HS-01CO Contax on Chorus;
  FD-02FCH adjustable clip shared). Optionals: FC-01TDIC tandem crank,
  HB/FH-00TD tandem hubs, FC-01ICTG Icarus triple, FC-01ATTG Athena
  triple, SL-02BE CG Icarus bar-end. Rims: P-series as 1991 plus Omega
  19 P0562, Omicron/Gamma black and silver replace Electrox, ATB rims
  Stheno P0594/P0604, ATEK P0614/P0624, Mirox P0634/P0644, Zark P0664/
  P0654 replace Thorr and Contax; Sigma Crono, Omega XL tubular, Ghibli
  Gyroscopic, 28 in fronts and French threads dropped. The ATB text says
  "Atex" but the table prints ATEK (matches DB 4944).
- Added (17 group parts 1992-94, 3 rims 1992-93, year_to guessed):
  FC-01RE, SP-RE, BR-02RE, BL-02RE (Record); FD-01SCH, SP-CH, PD-02CH,
  BL-02CH (Chorus); FD-01SAT, SL-01SAT, HS-01AT, FC-01AT, BB-01AT, SP-AT,
  BR-02AT, FC-01ATTG (Athena); Stheno, Mirox, Zark. source_id
  MANUAL-ROAD92-1992-<code> and MANUAL-RIM92-1992-<code>. Record hubs
  HB/FH-00RE not inserted: 3265 "Record 8sp" covers them, coded in note.
- Retitled: 21 -> "BB-03AT / BB-03CART, Athena (CART 111 cartridge)";
  1486 -> "FC-01TDIC, Tandem (Centaur-based)" (was titled Centaur; it is
  the tandem crank); 5987 -> "SL-02BE CG, Icarus (bar-end)"; 1493
  "FC-01CSIC" -> "FC-01ICTG, Icarus TG (triple)" (velobase misreading).
- Years: 4091, 4134, 6344, 3701, 1486, 3227, 4955 -> 1993; 2287, 3250 ->
  1994; 21, 2960 -> 1992; 7034 Thorr and 7035 Contax cut back to 1991.
- Notes ("1992 Road Range" / "1992 Rims Range"): 36 rows, all LENGTH
  guarded; one row (see tail check) filled to exactly 255 by design.
- Left: HS-01RE 2964 at 1991 (Record ships HS-01OR in 1992); 2306
  FD-01SRE already 1991-94; C-Record/Croce/Euclid/Olympus/Centaur MTB
  rows untouched (not in a road brochure); wheel bags.

## Campagnolo 1993 Product Range, GB — printed 9/92 (Campyjpg1993/, 18 double-page scans)

- Full-range catalogue, first with every part coded and group codes
  (GR-03RE Record, GR-03CH Chorus, GR-03AT Athena, GR-03VL Veloce new,
  GR-03OR Record O.R., GR-03IC Icarus, GR-03CE Centaur), then rims,
  Shamal (first appearance, 16-spoke, R0226-R0658), Ghibli/Scirocco/
  Khamsin (as 1992) and two pages of special tools (out of scope).
- 1993 changes: RD-11RE/CH/AT replace RD-01; FD-11SRE/FRE and FD-11SCH
  replace FD-01; EC-12RE CG (EC-12REAB on Athena) replaces EC-02RE;
  PD22REQR/CHQR/ATQR replace PD-12; BB-11/13RECART TBS cartridge; CS-8RE
  Ni-Cr and CS-8SR alloy split from CS-8S; CN-NTS chain on Athena/Veloce/
  Centaur; FH-01SR alloy-body freehub. Rims: Sigma Pave and Ypsilon
  dropped, Omega 19 26 in P0682 added, Stheno 405 g, ATEK 390 g.
- Corrections to my 1992 run: FC-01CSIC is the real Icarus Compact Drive
  crank code (1493 reverted from my wrong "FC-01ICTG" retitle; the 1992
  FC-01ICTG road triple optional was a different part). FC-01TDIC is the
  Centaur triple (24-26/34-36/46-48) as well as the tandem crank; 1486
  retitled to say both.
- Added (15, 1993-94 guessed): RD-11CH, RD-11OR, RD-12IC, RD-12CE;
  FD-11SRE, FD-11SCH, FD-01SVL; FC-01VL; SL-02TB CG; BL-02OR CG;
  BR-02CLTDIC; HB/FH-00IC; CN-NTS (no group); PD-22RE QR; PD-12VL QR.
  source_id MANUAL-RANGE93-1993-<code>.
- Retitled: 18 -> "BB-01VL / BB-03VL, Veloce (cartridge; also Stratos)";
  2970 -> "HS-01VL, Veloce" 1993-94 (was placeholder 1990-91); 5747 ->
  "SP-IC, Icarus / Centaur / Record O.R.".
- Years: 4134, 4109, 4091, 6344 -> 1992 (superseded); 211, 565, 587,
  2960, 3706, 5747 -> 1994 (confirmed current).
- Notes ("1993 Range"): 41 rows, LENGTH guarded, longest now 253.
- Left: Veloce seat post (none listed); RD-11IC/RD-13CE/FD-03FOR/HS-03/
  04 as notes not rows; Shamal 6961/6962 already 1992-96; tools.

## Campagnolo 1994 range catalogue, GB — 60th anniversary (Campyjpg1994/, 16 double-page scans + thumbnails)

- Prose page per group plus a Technical Specifications table at the back;
  NO part codes printed anywhere, so a year/composition record only.
  Groups: Record, Chorus, Athena, Veloce, Stratos (new, OEM, Ergopower
  only), Record O.R. Icarus and Centaur are gone. New: Exa-Drive
  cassettes and chain, carbon-bodied Record Ergopower, dual-pivot
  Cam-Plus brakes on Record and Chorus, Stratos group, Dedra 23 mm hybrid
  rim, Bora carbon 16-spoke and Vento 20-spoke wheels; Shamal now 26/28
  in road and track; Ghibli 24/26 fronts and 28 rears only; Omega XL and
  Contax chain gone.
- Added (8, uncoded so descriptive titles; source_id MANUAL-RANGE94-
  1994-*): Stratos rear, front, Ergopower, crankset, QR pedals (1994);
  Dedra hybrid rim (1994-96); Record dual-pivot (1994, Cam-Plus) and
  Chorus dual-pivot (1994) brakes. Stratos brakes 581 and hubs 3274
  already existed.
- Years -> 1993 (dropped for 1994): Icarus 1493, 4121, 7057, 7065, 7066,
  5986, 3706, 2960; Centaur 7058, 1486, 3246; single-pivot 565 BR-02CH
  and 7038 BR-02RE. Years -> 1994 (confirmed current): 4135, 4093, 6345,
  6349, 4164, 6006, 3279, 3702, 7052, 7053, 7054, 4955, 6957, 6958, 6960,
  6959.
- Notes ("1994 range"): 15 rows incl. 578 BR-14RE (1995 coded successor
  of the 1994 dual-pivot), 1186 Exa-Drive, 6346 carbon Ergopower, Shamal/
  Bora/Vento/Ghibli wheel facts. LENGTH guarded, longest 247.
- Left: Record O.R. rows already 1992-95; Athena Monoplaner 556 (1995)
  and Avanti rows untouched; tools none; Icarus SP-IC 5747 kept to 1994
  since the same post serves Record O.R.

## Campagnolo 1995 range catalogue, GB (Campyjpg1995/, 20 double-page scans + thumbnails)

- Prose group pages plus a Technical Specifications table; NO part codes.
  Groups: Record, Chorus, Athena, Veloce, Mirage (new), Avanti (new),
  Record O.R. Stratos gone after one year. New: low-profile cranks
  across the range, Record shorter-axle three-bearing cartridge BB,
  carbon Ergopower extended to Chorus, triple options on Chorus, Athena,
  Veloce and Mirage, Athena aero seat pillar, revamped head sets, Exa-
  Drive on every group; rims Delta (clincher) and Arkos (28 in off-road)
  new, Sigma 20 gone; wheels Zonda new (26/28 clincher), Ghibli rear now
  7-sp cassette.
- Added (18, uncoded, descriptive titles, source_id MANUAL-RANGE95-1995-
  <GROUP>-<code>): Mirage rear, front, cartridge BB, Ergopower, hubs, QR
  pedals (1995-96); Avanti crank, cartridge BB, hubs, QR pedals, seat
  pillar (1995-98); Chorus triple crank, Veloce triple crank, Athena aero
  pillar, Chorus carbon Ergopower (1995-96); Delta and Arkos rims
  (1995-96); Zonda 1st generation wheelset (1995-98).
- Re-dated: 1494 "Mirage" crank (velobase placeholder 1990) -> "Mirage
  crankset (1995)" 1995-96.
- Years -> 1995 (confirmed current): 36 rows across Chorus, Athena,
  Veloce, Record dual-pivot 7076/7077, Ergopower, headsets, posts, pedals,
  the 1992 ATB rims, Dedra, ATEK.
- Notes ("1995 range"): 15 rows incl. 6956 Ghibli 7-sp, 2956 head set
  revamp, 7070 Stratos dropped, 7032 Sigma 20 gone. LENGTH guarded, 245.
- Incident: the generator's own length assert tripped on one description
  after 14 INSERTs had already been printed, so the first load ran only
  those inserts and no updates. Fixed the text, regenerated, reloaded;
  the guarded inserts were no-ops. Rule: run the length check before
  printing any SQL, not inline.
- Left: Mirage/Avanti brake levers and headsets (not separately described
  or specced); Record O.R. rows already 1992-95; Chorus/Athena/Veloce
  triple rear and front derailleurs carried as notes on the triple crank
  rows rather than as separate rows.


## VeloBase archive, seven small Campagnolo files (44 pages, 2026-10-18)

The last unread Campagnolo files in VeloBase's catalogue archive
(`Campagnolo/` folder, download path `%2fCatalogScans%2fCampagnolo%2f...`).
All are brochures, service sheets or newsletters with few part numbers, so
the DB already held nearly everything. Three files changed rows; each got
its own `data_source`.

- **`Campy1986_Victory_Triomphe.zip`** (8 scans, imprint November 1986,
  **scan `02.jpg` missing, so one page is absent**), `data_source` 196, label
  `Campagnolo Nuovo Victory and Nuovo Triomphe brochure (November 1986)`.
  Prose on the Nuovo Victory and Nuovo Triomphe groups and the "LX" front and
  rear derailleur set (gear-change capacity 38T, biggest sprocket 32T, front
  change 23T; Triomphe set 32T / 30T / 18T). Rows updated (6, description
  only, no year changes): 2319 LX front (added 23T capacity, 744 / 744-1
  axle), 4172 Victory long-cage "Leisure gear" (added LX-set capacity 38T,
  biggest sprocket 32T; its "Cat. n. 18 bis" citation was dropped as a pure
  citation of the old source), hubs 3280 / 3281 Victory and 3277 / 3278
  Triomphe (24/28/32/36/40-hole options; Victory also 6- or 7-speed
  spacings). The original 4172/LX identification by capacity alone is superseded
  by the 2026-11-18 style comparison and separate LX insertion above;
  the Triomphe leisure rear 7015 was left alone because the brochure's 32T
  Triomphe figure is the corsa cage. The 130 mm Victory/Triomphe seatpost was
  already in 5764 (416/101).
- **`RecordNews87.zip`** (6 scans, Record News Vol. 2 No. 3, Winter 1987,
  Campagnolo USA), `data_source` 197. Syncro history: development began April
  1986, debut at the Cologne show October 1986, shown at the BRS Expo (Long
  Beach) January 1987; exploded parts list; chain/freewheel compatibility
  chart for C Record, Super Record, Victory and Triomphe rear derailleurs.
  **Row inserted:** 8812 "Campagnolo 0118084-0118096, Syncro (first version)"
  (Shifters, 1986-1987): 6-speed 0118084 braze-on / 0118086 top-tube / 0118087
  clamp-on (insert 7222064); 7-speed 0118088/89/90 (7222063) and
  0118094/95/96 (7222069). One row for all nine kits (they differ only in
  speed count and fitting). **Misread corrected:** the kit numbers first read
  as 0116xxx from the bound PDF; the raw JPG at full size shows 0118xxx. 5973
  "C-Record Syncro" (0211/0212/0213, 1987-88) is the renumbered version and
  was left as is; year_to 1987 for 8812 rests on the Nov 1987 Record brochure
  already using 0211-0213.
- **`1980CampagnoloFreewheel.pdf`** (8 pp, IT/EN/FR/DE, Brevetti
  Internazionali Vicenza; print code "34-02-0927348-1-80-6000" read as January
  1980, 6000 copies), `data_source` 198, label `Campagnolo freewheel service
  sheet (January 1980)`. Freewheel body parts 050071-050078 (adjusting cone,
  spacers, 1/8" stainless balls, outer body, pawl, inner body, springs),
  tools 1-7, and a sprocket lay-out chart (AB / DE / F / G, 12-28T, a sixth
  sprocket step). Rows updated: 2074 "Aluminum Freewheel core" (added the parts
  list and 12-28T range; years 1980-1980 unchanged) and 2072 "aluminum (6
  speed)" (**year_from 1982 -> 1980, the least certain call**: the sheet shows
  a six-sprocket light freewheel in January 1980 but does not say
  "aluminium").
- **Read, no rows changed:**
  - `Campy1986_Synchro.zip` (4 scans, 1986): prose leaflet on the Syncro
    lever (5/6- and 7-speed, 4 mm and 3 mm spacing, secondary lever turns 45
    degrees to disengage indexing); no part numbers or weights.
  - `Campy1987_Sytn.zip` (4 scans, USA, 1987): SYNT sintered brake pads
    (friction about 70% above the ordinary pad; for Delta, Croce d'Aune with
    Penta Drive, and Chorus Mono-Planer); no brake-pad category and no part
    numbers.
  - `Campy1987_RecordIntro.zip` (8 spreads): "Record: the name of success",
    race-win lists and prose on the Record gear set (capacity 30T, biggest
    sprocket 28T, front 18T), brakes, headset and seatpin, chainring and BB,
    pedal and hub, Record Pista. Low-resolution; the Nov 1987 Record brochure
    already holds the detail.
  - `Campagnolo50thAnniversary.pdf` (6 pp, Campagnolo USA, Houston): the 1983
    limited, numbered 50th Anniversary Group and the new freewheel ads; no
    part numbers. Rows for the group already exist in every category, all
    1983-1983.
- Still unread in this folder: none. The remaining `Campy1953`-`Campy1995`
  files are duplicates of ingested catalogues or are recorded above.

## Campagnolo year_from check on 4079 and 5734 — 2026-10-24 (user decision)

Prompted by the new "DB year_from is earlier than the evidence" rule; checked against the catalogue notes above.

- **4079 "Campagnolo Nuovo Valentino" rear (1970-1970, velobase, source_id 6926B3EA-15EE-4DD5-87C8-99E0B83EF5A7)
  merged into 4162 "2170, Valentino Extra" (1968-1985) and deleted.** An unnumbered repeat like 4159 / 4160 (deleted
  2026-09-28); it survived only through one link, the 1978 Bianchi Rekord/745 ("Campagnolo Valentino" rear). That link and
  the generator override `'campagnolo valentino'` (Rear Derailleurs) now point at 4162. "Nuovo Valentino" appears in the
  catalogues only as the front 0104008 (n. 18, 1985, row 2301). Delete again if a crawl reinserts it.
- **5734 "3800, Gran Sport" seatpost `year_from` 1970 -> 1978.** The 1982 US catalogue says Gran Sport "now has its own 3800
  post", n. 18 (1985) lists it, and the earliest linked bike is the 1978 Raleigh Competition GS. Medium confidence:
  catalogue n. 17 (1974) and n. 17a (1975) were not rechecked for a 3800 post (the notes above neither list nor exclude
  one); if either shows it, restore 1974 / 1975. To revert, set `year_from = '1970'`.

## Campagnolo press advertisements compilation — 1983-2008 (Campagnolo_other_Vintage_Catalogs/CampagnoloPress.pdf, 71 pp, data_source 343)

- campybike.com compilation of magazine ads (Italian, plus English, French, German, Portuguese). Not a catalogue: no page
  prints a part number and most carry no year, so treat as a partial source (dated attestations and "new" claims only;
  absence proves nothing). Dating clues: p1-2 1983 Cinquantenario; p7 1986 Worlds; p10 Oscar 1989 (Euclid); p15/17 "Da
  60 anni" (~1993, Shamal "ultima novità"); p21 German rim ad with 5-digit postcode 51381 Leverkusen (=> July 1993 or
  later); p22 "gamma '95"; p27/29 "gamma/gruppi 1996"; p32 "ruote gamma '97"; p35/40 Ironman '97/'98; p46-47 2002;
  p49-50 2003; p52 2004; p58/60 2005; p64/66/71 75th anniversary, Worlds 2008, 11-speed.
- Skipped / out of scope: sportswear and pad ads 48, 57, 59, 63, 65, 67, 68; event ads 23, 31; p54 repeats p51.
  Pages 41-71 (2000-2008: 10-speed, ErgoBrain, Pro-Fit Plus, Hyperon/Neutron/Nucleon, G3, CT, Ultra-Torque, 2-Way Fit,
  11-speed) not ingested: the DB's Campagnolo coverage ends ~2000. 1983-1992 items (Cinquantenario, SGR, Croce d'Aune,
  Centaur, Euclid, Record OR/Cart BB, Stheno/Omega 19/Mirox) all already present with compatible years.
- Years: 1187 Record Titanium Exa-Drive 9sp `year_from` 1998 -> 1997 (p32, 9-speed "nuovissimo" in '97 range); 6342
  `year_from` 1998 -> 1996 (p29, 1996 groups); 4961 Omega V `year_to` 1992 -> 1995 (p21 plus the 1995 range note
  "Omega V continue[s]"; source_ref 22); 4962 Omicron and 4970 Sigma Strada `year_to` 1991 -> 1993 (p21; if the p21 Sigma
  is really Sigma 20, revert 4970 to 1991).
- `year_from` moved later: 4968 Shamal 12 HPW 1992-1996 -> 1997-1998 (1993-95 range catalogues list only the 16-spoke
  Shamal; H.P.W. hubs presented as new on p30, undated, probably 1996; earliest dated p32 '97); 4947 Electron 1992-1996
  -> 1998-1998 (absent from 1991-95 rim catalogues; "nuova gamma" Climb-Dynamic, earliest dated p40, 1998).
- Retitled (old titles): 4968 "Campagnolo Shamal 12 HPW" -> "Shamal 12-HPW"; 4947 "Campagnolo Electron" -> "Electron
  (Climb-Dynamic)"; 6342 "Campagnolo Record Titanium, Carbon BB-System" -> "Record Titanium Ergopower (Carbon
  BB-System)". search_text rewritten with each. Descriptions rewritten on 1187, 6342, 4968, 4947; 6963 Vento noted as
  16-HPW in 1997.
- Added: 10055 "Pro-Fit, Record" pedal 1998 (p37, 266 g pair vs 430 g Record '97); 10056 "Proton (Climb-Dynamic)" wheel
  1998. UUID source_ids.
- Merged (user decision): 4956 "Campagnolo Omega 20" (velobase 1990-1990, 395 g, source_id
  18F51D39-7888-45FF-BCC9-809A15390351) deleted as a duplicate of 4957 Omega Strada Hardox (P0171/P0172, 395/430 g; the
  1995 range calls it Omega 20). No bike_spec links or overrides. 4957 retitled "Omega 20 (Omega Strada Hardox)",
  search_text "Campagnolo Omega 20" (old title "Campagnolo Omega Strada Hardox"). Delete again if a crawl reinserts it.
- Unresolved: Eurus 1997 and K2 / Kilimangiaro rims (p26, undated ~1995-96) named only, not added. Nucleon was not added during this press pass; subsequently reconciled and loaded from the 2000 parts book as 11249 (source 410, below).

## Falcon parts catalogue (1970) — see cross-catalog-notes.md (`data_source` 352)

- UK importer pages for hubs, chainsets, gears, pedals, headsets, 1044, 2040. 3712 1038 standard
  year_to -> 1970; 3233 1253 gets 1266/1267 sub-numbers; 1495 1048/4 description (45T, 170 mm).
  1970 1048 triple not matched to 1498.

## Bottom bracket duplicate merge — 2026-11-06 (user approved)

- Deleted 37 "Campagnolo Record Triple Bearing (c. 1997)" (VeloBase source_id
  A09A95F1-DAF7-4779-B315-44D79FB74A74) into 10101 "Campagnolo Record 9-speed
  bottom bracket": same 102mm, 190g cartridge. Preserved the triple-bearing
  description and BB-31RECART Italian / BB-33RECART BSC codes from the
  [VeloBase specimen](https://velobase.com/Pages/ViewComponent.aspx?ID=a09a95f1-daf7-4779-b315-44d79fb74a74).
- 10101 year_from 1999 -> 1997 carries forward 37's previously curated circa
  1997 dating (not a newly found 1997 catalogue attestation); year_to remains
  1999. Source_ref remains 353, the Guida '99 catalogue supporting its
  construction, dimensions and weight. Title/search_text unchanged.
- Neither row had bike_spec links, overrides or stored images. SQL and
  rollback: `/private/tmp/bottom-bracket-merges.sql` and
  `/private/tmp/bottom-bracket-merges-rollback.sql`.


## Croce d'Aune Delta brake: 1992 Bianchi fitment — 2026-11-07

- User-approved bike-catalogue correction: 567 "Campagnolo Delta, Croce d'
  Aune" year_to 1991 -> 1992; source_ref 110 (1988 Dealer Parts Catalogue)
  -> 359 (1992 Bianchi JP catalogue). Description and year_from 1988 retained.
- Evidence: https://2velo.com/wp-content/uploads/2014/03/1992-catalog-p1911.jpg
  Mondiale names the Croce d'Aune group and shows Delta-style calipers;
  the 1991 Mondiale already links to 567. This attests fitment in 1992,
  not continued manufacture; no 1992 Campagnolo range claim is made.
- Bike spec 19633 -> 567, with a 1992-only Mondiale generator range.
  Applied `/tmp/bianchi-1992-mondiale-brake-link.sql`; read-back verified,
  rerun affected zero rows. All 81 CSVs compared: only this link changed.

## Spare Parts and Tools Catalogue (2000) — applied 2026-11-15, source 410

- Source: https://bikalog.org/api/view/Campagnolo/2000/campagnolo-2000sp.pdf, 109 PDF pages, multilingual IT/EN/FR/DE. Front cover explicitly says 2000; prepress marks include January 2000 on the front and October 2001 on the back. Use the stated 2000 edition as availability evidence, not production boundaries or proof that every service part first appeared then. Country/market remains NULL.
- Applied on user approval: **74 new components (49 chainrings, 25 other components), 40 existing-row updates, source 410 and Daytona group 333**. All mutation counts matched the approved plan. No deletes, merges, bike writes or generator changes. 34 existing year_to values extend to 2000; no year_from changes. Electron 4947 and Shamal 4968 move from Rims to Wheel(sets). 4968 receives only a category/source correction; its 1997–98 dates remain unchanged.
- Applied with exact old-value guards and restoration values captured before writes. Component IDs 11176–11249 were added; the row/code/page inventory is below. Existing IDs and UUIDs were retained. Rerun affected zero rows in all mutation categories. SQL, source download and review/validation scratch artifacts were removed after validation; public source/page evidence and material old/new values are retained here.
- Extraction: 181 records across PDF 7–44, 48–56, 58–66, 74–78 and 81, including left/right, tooth-range and front/rear configurations. Consolidated complete cassette configurations and paired controls/hubs/wheels in the SQL; no duplicate row per ratio or handedness where one existing pair/family suffices. Chainrings are individually identified, separately supplied components, so their 49 distinct codes remain separate.
- Skipped: PDF 1–6 cover/index; 45–47 quick releases; 57 lockrings; 67–68 pedal repair parts/cleats; 69–73 cables, computers and miscellaneous parts; 79–80 wheel-hub repair parts; 82–83 Shamal Pista repair parts; 84–109 tools, glossary, dealer lists, notes/back cover. Do not promote cup, axle, crank-arm, clamp or bearing callouts to complete assembly identities.
- Visually checked suspicious code distinctions: PDF10 BB-RE213/214 and BB-CH213/214 identify cups, not extra BBs; PDF66 PD-RE/CH/DA201/202 identify pedal bodies and 203/204 axles, not extra pedal models. PDF13 shows FC-RE039 across the merged 9/10-speed table columns (also used by Chorus); FC-RE042 is the 9-speed 42T inner and FC-RE142 the 10-speed version. FC-AT352 is Daytona/Racing Triple; Veloce uses FC-MI352. Printed bolt/ring tables establish the listed options, not every possible cross-product as a sold fitted combination.
- Added source specifications are separated from retained independent facts: pre-existing weights/materials/dimensions and historical part names remain from their prior sources unless contradicted. The 2000 diagrams generally provide codes and service layout, not new measured weights. In particular, 4139 retains its earlier VeloBase titanium/223 g evidence; the 2000 heading says Record 9 Speed. 10101 retains the separately curated prior BB-31RECART/33RECART facts as a 1999 listing, while the 2000 assembly headings print BB99-RE02IT/BC; no manufacturer cross-reference chart is claimed.

### Existing rows updated

| ID | Printed page | Old title | Resulting title | Dates before -> after | Prior source |
|---|---|---|---|---|---|
| 10128 | 1 | Campagnolo Record headset (threaded, 9-speed era) | Campagnolo HS00-RE, Record headset | 1999–1999 -> 1999–2000 | 353 |
| 10129 | 1 | Campagnolo Record Threadless headset | Campagnolo HS00-RETH, Record Threadless (1 inch) | 1999–1999 -> 1999–2000 | 353 |
| 10130 | 2 | Campagnolo Chorus headset (threaded, 9-speed era) | Campagnolo HS00-CH, Chorus headset | 1999–1999 -> 1999–2000 | 353 |
| 10131 | 2 | Campagnolo Chorus Threadless headset | Campagnolo HS00-CHTH, Chorus Threadless | 1999–1999 -> 1999–2000 | 353 |
| 5758 | 3 | Campagnolo Record Titanium | Campagnolo SP99-RE272T, Record Titanium | 1999–2000 -> 1999–2000 | 1 |
| 10101 | 4 | Campagnolo Record 9-speed bottom bracket | Campagnolo BB99-RE02IT / BB99-RE02BC, Record | 1997–1999 -> 1997–2000 | 353 |
| 10102 | 4 | Campagnolo Chorus 9-speed bottom bracket | Campagnolo BB99-CH02IT / BB99-CH02BC, Chorus | 1999–1999 -> 1999–2000 | 353 |
| 10094 | 7 | Campagnolo Record 9-speed crankset | Campagnolo Record 9/10-speed crankset | 1999–1999 -> 1999–2000 | 353 |
| 10095 | 9 | Campagnolo Chorus 9-speed crankset | Campagnolo Chorus 9/10-speed crankset | 1999–1999 -> 1999–2000 | 353 |
| 10096 | 12 | Campagnolo Veloce 9-speed crankset | Campagnolo Veloce 9-speed crankset | 1999–1999 -> 1999–2000 | 353 |
| 10098 | 13 | Campagnolo Veloce Triple crankset | Campagnolo Veloce Triple crankset | 1999–1999 -> 1999–2000 | 353 |
| 10099 | 11 | Campagnolo Racing Triple crankset | Campagnolo Racing Triple crankset | 1996–1999 -> 1996–2000 | 357 |
| 4139 | 15 | Campagnolo Record Titanium 9-speed | Campagnolo RD00-RE209, Record Titanium 9-speed | 1997–2000 -> 1997–2000 | 1 |
| 10084 | 15 | Campagnolo Chorus 9-speed | Campagnolo RD00-CH209, Chorus 9-speed | 1999–1999 -> 1999–2000 | 353 |
| 10088 | 18 | Campagnolo Racing Triple 9-speed | Campagnolo RD00-RA309, Racing Triple 9-speed | 1999–1999 -> 1999–2000 | 353 |
| 10086 | 20 | Campagnolo Veloce 9-speed | Campagnolo RD99-VL209, Veloce 9-speed | 1999–1999 -> 1999–2000 | 353 |
| 4166 | 20 | Campagnolo RD99-VL309, Veloce Triple | Campagnolo RD99-VL309, Veloce Triple | 1998–2000 -> 1998–2000 | 1 |
| 10087 | 21 | Campagnolo Mirage 9-speed | Campagnolo RD99-MI209, Mirage 9-speed | 1999–1999 -> 1999–2000 | 353 |
| 10091 | 22 | Campagnolo Record 9-speed (braze-on / clamp) | Campagnolo Record 9/10-speed (braze-on / clamp) | 1999–1999 -> 1999–2000 | 353 |
| 10090 | 23 | Campagnolo Chorus 9-speed (braze-on / clamp) | Campagnolo Chorus 9-speed (braze-on / clamp) | 1999–1999 -> 1999–2000 | 353 |
| 10093 | 24 | Campagnolo Racing Triple (braze-on / clamp) | Campagnolo Racing Triple (braze-on / clamp) | 1996–1999 -> 1996–2000 | 357 |
| 6343 | 27 | Campagnolo Record 9-speed Ergopower (Carbon BB-System) | Campagnolo EP99-RE09R / EP99-RE09L, Record Ergopower (9-speed) | 1998–2000 -> 1998–2000 | 1 |
| 10117 | 30 | Campagnolo Veloce 9-speed Ergopower | Campagnolo EP00-VL09R / EP00-VL09L, Veloce Ergopower (9-speed) | 1999–1999 -> 1999–2000 | 353 |
| 10118 | 31 | Campagnolo Mirage 9-speed Ergopower | Campagnolo EP00-MI09R / EP00-MI09L, Mirage Ergopower (9-speed) | 1999–1999 -> 1999–2000 | 353 |
| 10112 | 33 | Campagnolo Chorus dual-pivot brakes (9-speed era) | Campagnolo BR00-CH, Chorus dual-pivot brakes (9-speed era) | 1999–1999 -> 1999–2000 | 353 |
| 10114 | 35 | Campagnolo Veloce dual-pivot brakes | Campagnolo BR00-VL, Veloce dual-pivot brakes | 1999–1999 -> 1999–2000 | 353 |
| 10119 | 36 | Campagnolo Record 9-speed down-tube shifters | Campagnolo SL99-RE09CG, Record 9-speed down-tube shifters | 1999–1999 -> 1999–2000 | 353 |
| 10120 | 37 | Campagnolo 9-speed bar-end shifters | Campagnolo SL99-BE09CG, 9-speed bar-end shifters | 1999–1999 -> 1999–2000 | 353 |
| 10135 | 38 | Campagnolo Record aero brake levers (9-speed era) | Campagnolo BL99-RECG, Record aero brake levers (9-speed era) | 1999–1999 -> 1999–2000 | 353 |
| 10106 | 42 | Campagnolo Record 9-speed front hub | Campagnolo Record 9-speed front hub | 1999–1999 -> 1999–2000 | 353 |
| 10107 | 44-45 | Campagnolo Chorus 9-speed hubs | Campagnolo Chorus hubs (9/10-speed rear) | 1999–1999 -> 1999–2000 | 353 |
| 10109 | 48 | Campagnolo Veloce 9-speed hubs | Campagnolo Veloce 9-speed hubs | 1999–1999 -> 1999–2000 | 353 |
| 10110 | 48 | Campagnolo Mirage 9-speed hubs | Campagnolo Mirage 9-speed hubs | 1999–1999 -> 1999–2000 | 353 |
| 1188 | 52 | Campagnolo Record Titanium/Steel Exa-Drive Mk2 (9sp), Record 9-speed | Campagnolo Record Titanium/Steel Exa-Drive Mk2 (9sp), Record 9-speed | 1998–2000 -> 1998–2000 | 1 |
| 10121 | 56 | Campagnolo Chorus 9-speed cassette | Campagnolo Chorus 9-speed cassette | 1999–1999 -> 1999–2000 | 353 |
| 10055 | 60 | Campagnolo Pro-Fit, Record | Campagnolo PD00-RE, Record Pro-Fit | 1998–1999 -> 1998–2000 | 353 |
| 10133 | 60 | Campagnolo Pro-Fit, Chorus | Campagnolo PD00-CH, Chorus Pro-Fit | 1999–1999 -> 1999–2000 | 353 |
| 4947 | 72 | Campagnolo Electron (Climb-Dynamic) | Campagnolo WH99-ELCF / WH99-ELCR, Electron (Climb-Dynamic) | 1998–1998 -> 1998–2000 | 343 |
| 4968 | 69 | Campagnolo Shamal 12-HPW | Campagnolo Shamal 12-HPW | 1997–1998 -> 1997–1998 | 343 |
| 6963 | 70 | Campagnolo Vento | Campagnolo WH99-VECF / WH99-VECR, Vento | 1994–1999 -> 1994–2000 | 353 |

### Original values for restoration

Dates/titles/sources are in the preceding table. The original categories were unchanged except 4947/4968, both Rims (16). Resulting category for both is Wheel(sets) (24). Group/brand/UUID of existing rows are unchanged. Original descriptions and search text:

| ID | Original description | Original search_text |
|---|---|---|
| 10128 | 1in threaded headset, anodized alloy, lubrication hole, 104g. | Campagnolo Record headset |
| 10129 | 1in threadless headset, alloy, lubrication hole, carbon top cap, 110g. | Campagnolo Record Threadless headset |
| 10130 | 1in threaded headset, light alloy, anodized, 106g. | Campagnolo Chorus headset |
| 10131 | 1in threadless headset, light alloy, self-centring bearings, 119g. | Campagnolo Chorus Threadless headset |
| 5758 | Campagnolo Record Titanium, Italy, 195 grams (Spec) | Campagnolo Record Titanium |
| 10101 | Triple-bearing cartridge bottom bracket, hollow steel axle 102mm, alloy cups and carbon-fibre composite body; BB-31RECART Italian or BB-33RECART BSC; 190g. | Campagnolo Record 9-speed bottom bracket |
| 10102 | Cartridge bottom bracket, steel axle 102mm, alloy cups and body, Italian or English, 220g. | Campagnolo Chorus 9-speed bottom bracket |
| 10094 | Alloy crankset, 170 / 172.5 / 175mm, 39-52 / 39-53 / 42-52T, 632g with rings. | Campagnolo Record 9-speed crankset |
| 10095 | Alloy crankset, 170 / 172.5 / 175mm, 39-52 / 42-52 / 39-53T, 667g with rings. | Campagnolo Chorus 9-speed crankset |
| 10096 | Alloy crankset, 170 / 172.5 / 175mm, 39-52 / 42-52 / 39-53T, 650g with rings. | Campagnolo Veloce 9-speed crankset |
| 10098 | Alloy triple crankset, 170 / 175mm, 30-42-52T, 740g with rings. | Campagnolo Veloce Triple crankset |
| 10099 | Alloy triple crankset, 170 / 175mm, 30-40-50 / 32-42-52T, 735g with rings. | Campagnolo Racing Triple crankset |
| 4139 | Campagnolo Record Titanium 9-speed, Italy, 223 grams | Campagnolo Record Titanium 9-speed |
| 10084 | 9-speed rear derailleur, aluminium alloy, anodized, max sprocket 26T, total capacity 27T, 243g. | Campagnolo Chorus 9-speed |
| 10088 | 9-speed triple rear derailleur, aluminium alloy and steel, anodized, max sprocket 28T, total capacity 37T, 261g. | Campagnolo Racing Triple 9-speed |
| 10086 | 9-speed rear derailleur, aluminium alloy and steel, anodized, max sprocket 28T, total capacity 27T, 251g. | Campagnolo Veloce 9-speed |
| 4166 | Campagnolo RD99-VL309, Veloce Triple, Italy, 268 grams (Spec),2000 Campagnolo Catalog | Campagnolo RD99-VL309 Veloce Triple |
| 10087 | 9-speed rear derailleur, aluminium alloy and steel, anodized, max sprocket 28T, total capacity 26T, 271g. | Campagnolo Mirage 9-speed |
| 10091 | Front derailleur, aluminium alloy body, chromed steel cage, 15T capacity, 54T max; braze-on 89g, clamp 102g. | Campagnolo Record 9-speed |
| 10090 | Front derailleur, aluminium alloy body, chromed steel cage, 15T capacity, 54T max; braze-on 87g, clamp 100g. | Campagnolo Chorus 9-speed |
| 10093 | Triple front derailleur, anodized alloy body, chromed steel cage, 22T capacity; braze-on 98g, clamp 114g. | Campagnolo Racing Triple |
| 6343 | Campagnolo Record 9-speed Ergopower (Carbon BB-System), Italy. Carbon-lever Ergopower of the 1998-2000 Record 9-speed group. | Campagnolo Record 9-speed Ergopower |
| 10117 | 9-speed Ergopower, alloy levers, steel-pivot body, triple compatible, 387g pair. | Campagnolo Veloce 9-speed Ergopower |
| 10118 | 9-speed Ergopower, alloy levers, steel-pivot body, triple compatible, 400g pair. | Campagnolo Mirage 9-speed Ergopower |
| 10112 | Dual-pivot caliper, alloy and steel, aluminium pad holders, 380g pair with pads. | Campagnolo Chorus dual-pivot brakes |
| 10114 | Dual-pivot caliper, alloy, steel pivot, 390g pair with pads. | Campagnolo Veloce dual-pivot brakes |
| 10119 | Indexed 9-speed down-tube levers, alloy, steel pivots, 74g pair. | Campagnolo Record 9-speed down-tube shifters |
| 10120 | Indexed 9-speed bar-end levers for time trial, cyclocross and triathlon, alloy, steel pivots, 163g pair. | Campagnolo 9-speed bar-end shifters |
| 10135 | Aero brake levers for down-tube shifting, aluminium alloy, black rubber hoods, 267g pair. | Campagnolo Record aero brake levers |
| 10106 | Front hub, 7075 alloy body and axle, 100mm, 28/32/36H, 181g with QR. | Campagnolo Record 9-speed front hub |
| 10107 | 7075 alloy body and axle, alloy freewheel body; front 100mm, 32/36H, 205g; rear 9-speed, 130mm, 326g (with QR). | Campagnolo Chorus 9-speed hubs |
| 10109 | Alloy body, steel axle; front 100mm, 32/36H, 216g; rear 9-speed, 130mm, alloy freewheel body, 458g (with QR). | Campagnolo Veloce 9-speed hubs |
| 10110 | Alloy body, steel axle, cartridge bearings; front 100mm, 32/36H, 229g; rear 9-speed, 130mm, 460g (with QR). | Campagnolo Mirage 9-speed hubs |
| 1188 | Campagnolo Record Titanium/Steel Exa-Drive Mk2 (9sp), Record 9-speed, Italy | Campagnolo Record Titanium/Steel Exa-Drive Mk2 Record 9-speed |
| 10121 | Steel sprockets on a 7075 alloy carrier, no lockring, 12-21 / 12-23 / 13-23 / 13-26T, 197g (12-21T). | Campagnolo Chorus 9-speed cassette |
| 10055 | Campagnolo Pro-Fit, Record, Italy. Clipless pedal with release-force indicator window, safety wings and wide shoe support; 266 g per pair against 430 g for the 1997 Record pedal. | Campagnolo Pro-Fit Record |
| 10133 | Clipless road pedal, alloy and steel, adjustable cones and cups, float cleat, 325g pair. | Campagnolo Pro-Fit Chorus |
| 4947 | Campagnolo Electron, Italy. Climb-Dynamic low-profile wheel, sister of the Proton: light, laterally stiff, asymmetric rear rim; tubular or clincher. | Campagnolo Electron |
| 4968 | Campagnolo Shamal 12-HPW, Italy. 12-spoke Shamal on H.P.W. (High Performance Wheel) hubs: adjustable bearings, improved dish, Titanium version; 9-speed ready. Successor to the 16-spoke Shamal of 1992-96. | Campagnolo Shamal 12-HPW |
| 6963 | Campagnolo Vento, Italy 1994 range: Vento 20-spoke clincher 28 in, 930/1190 g, 8-sp steel body. 1995 range: Vento 28 in clincher, 930 / 1190 g. 1997: Vento 16-HPW, 16 spokes on H.P.W. hubs, 9-speed ready. | Campagnolo Vento |

### New identities added

| Category | Count | Scope |
|---|---|---|
| Chainrings | 49 | Printed FC-RE/CH/AT/MI/VL/RA/PI/TH/RETH/CHTH codes; different speed, tooth and matching-inner-ring variants kept distinct |
| Rear Derailleurs | 6 | Record/Chorus 10-speed standard and L codes; Daytona double and Triple 9-speed |
| Front Derailleurs | 3 | Chorus 10-speed; Daytona double and Triple |
| Shifting Brake Levers | 3 | Paired Record/Chorus 10-speed and Daytona 9-speed Ergopower |
| Cassettes | 4 | Record 10-speed, Record Titanium 10-speed, Chorus 10-speed, dedicated Ghibli nine-sprocket/10-speed-spacing sets |
| Wheel(sets) | 2 | WH99 Bora 9/10-speed tubulars; Nucleon tubular/clincher variants |
| Other | 7 | Record oversize threadless headset, Record Carbon post, Daytona crankset/brakes/hubset/Pro-Fit pedals, 10-speed bar-end shifters |

### Unresolved identities — no speculative rows/links

| Printed page | Model | Existing candidates | Decision / next evidence needed |
|---|---|---|---|
| 3 | SP00-CH272 Chorus post | 5743, 7041 | Complete code is printed, but relationship to earlier Chorus RS post requires a physical/code crosswalk; do not insert a second possible identity. |
| 5 | BB00-AH11IT/BC and BB00-AH15IT/BC, AC-H | 10103, 10509 | 111/115.5 mm AC-H named assemblies may overlap uncoded Athena/Racing Triple cartridges; lengths alone do not prove a new identity. |
| 6 | BB99-REPIIT/BC, Record Pista | 23, 40 | Complete assembly codes printed; continuity with older Record Pista cup-and-cone rows not established. |
| 8 | Record Pista crankset | 1484, 1485, 1505 | 2000 printed lengths 165/170 mm, rings 47-52T, 3 mm rings for 1/8 in chain; no complete-set code establishing continuity with C-Record Pista versions. |
| 21 | RD99-MI309 Mirage Triple | 4122 | Existing title RD09-MI3 is reportedly from 1999 but is not the printed RD99-MI309 code; verify the specimen/version before renaming or adding. |
| 26 | Mirage double / Triple | 2317, 2294, 10505 | Shared Veloce/Mirage family and existing FD11-SM13 Triple code need a crosswalk before extending or splitting. |
| 28 | EP00-CH09R/L Chorus 9-speed | 6340, 7092 | Earlier Chorus carbon generations lack complete codes. Keep 2000 code assignment unresolved until the body/generation is established. |
| 32 | BR00-RE Record | 578 | Existing BR-14RE is a specifically coded earlier brake. The 2000 family code alone does not establish unchanged construction or a renumbering. |
| 43 | Record 9/10-speed rear | 3268 | Current Record Exa-Drive 9-speed row already covers 1999-2006. No assembly code printed; leave construction/version details unchanged. |
| 49-50 | Record Pista front/rear | 3242, 3243, 3270, 3271 | No assembly codes or sufficient identification to establish continuity with older small/high flange track hubs; do not invent separate dated duplicates. |
| 54 | Record MK2 Titanium 9-speed | 1187, 1188 | Printed as a separate family from standard Record MK2. Do not fold it into 1188 titanium/steel; 1187 describes the original 1997 titanium version, so MK1/MK2 continuity remains unproven. |
| 58 | ED-C 9-speed (ED-Z compatible) | 10122, 10123, 10124 | Loose-sprocket combination table is not explicitly assigned to one retail group. Do not map by tooth ranges or manufacture a model identity. |
| 59 | CS99-RE0823 / RE0833 / RE0836, Record 8-speed | 1186 | Three complete 8-speed set codes printed; relationship to older uncoded Record Exa-Drive 8-speed row is not established by speed/ranges alone. |
| 75 | WH00-SMPTF / WH00-SMPTR, Shamal Pista | 10513 | 2000 complete 28-inch tubular track wheels; continuity with the 1996 Shamal 12 track identity needs confirmation before adding or extending. |

### Validation before and after application

- Live Campagnolo row count: **657 -> 731**, verified 2026-11-15. All 40 existing rows selected for changes have zero live bike links. New group Daytona absent in that snapshot. Existing category-brand associations already cover every proposed category; no new associations needed.
- Simulated the 74 additions, retitles and two category moves through the current generator over all 93 CSVs. Full generated SQL is byte-identical to the pre-change baseline: 1,199 bikes, 20,600 specs, 7,313 mapped. These are generated CSV counts, not live DB totals or a refreshed coverage snapshot. Root `bike-update.sql` untouched. No linking override change or bike SQL warranted.
- Description lengths checked: maximum 203 characters, under the 255-character column limit; titles and generated search text checked too. Retitles regenerate search_text with the maintained helper. No application code changed.
- Offline duplicate simulation: no new pairs or merge/review candidates; generation pairs 31 -> 30, configuration 16 -> 16, cosmetic 2 -> 2. One old grouping disappears after a supported retitle; this is report grouping, not a deletion. Existing cosmetic pairs 4106/4108 (older Chorus graphite/standard) and 1472/1473 (Gran Sport/Bianchi marking) are outside the 2000 offering identities and remain untouched; no automatic merge is authorised by a report.
- Actual post-load validation: all 114 affected rows matched the approved titles, descriptions, years, categories, groups, brand, UUIDs and search text; every source_ref is 410. All category/brand/group/category-brand references are valid; descriptions at most 203 characters. Zero live bike links on affected rows, so no link fills or corrections were warranted. All 93 CSVs regenerated against the actual DB: full SQL byte-identical to the pre-load baseline. No root generated file overwritten. SQL rerun changed zero rows, including source/group inserts.
- Actual duplicate report agrees with the simulation: generation 31 -> 30, configuration 16 -> 16, cosmetic 2 -> 2; no new pairs. The former 7077/10112 generation pair drops out of title grouping after 10112 gains its printed BR00-CH code; the earlier 1994 Chorus row is kept distinct, with no deletion or merge. Existing two cosmetic candidates remain outside this 2000 scope.

### New component IDs and catalogue evidence

All new rows have the catalogue-attested range 2000–2000 (availability, not production limits), brand 11 and source 410. Daytona components use new group 333; shared components retain NULL group. No new category-brand associations were needed.

| ID | Category | Printed page | Title |
|---|---|---|---|
| 11176 | Headsets | 1 | Campagnolo HS00-RETHOS, Record Threadless (1 1/8 inch) |
| 11177 | Seat Posts | 3 | Campagnolo SP00-RE272C, Record Carbon |
| 11178 | Cranksets | 10 | Campagnolo Daytona crankset |
| 11179 | Chainrings | 7 | Campagnolo FC-RE039, 39T chainring |
| 11180 | Chainrings | 7 | Campagnolo FC-RE042, 42T chainring |
| 11181 | Chainrings | 7 | Campagnolo FC-RE142, 42T chainring (10-speed) |
| 11182 | Chainrings | 7 | Campagnolo FC-RE152, Record 52-tooth chainring |
| 11183 | Chainrings | 7 | Campagnolo FC-RE252, Record 52-tooth chainring, 10-speed |
| 11184 | Chainrings | 7 | Campagnolo FC-RE352, Record 52-tooth chainring |
| 11185 | Chainrings | 7 | Campagnolo FC-RE452, Record 52-tooth chainring, 10-speed |
| 11186 | Chainrings | 7 | Campagnolo FC-RE153, Record 53-tooth chainring |
| 11187 | Chainrings | 7 | Campagnolo FC-RE253, Record 53-tooth chainring, 10-speed |
| 11188 | Chainrings | 8 | Campagnolo FC-PI047, Record Pista 47-tooth chainring |
| 11189 | Chainrings | 8 | Campagnolo FC-PI048, Record Pista 48-tooth chainring |
| 11190 | Chainrings | 8 | Campagnolo FC-PI049, Record Pista 49-tooth chainring |
| 11191 | Chainrings | 8 | Campagnolo FC-PI050, Record Pista 50-tooth chainring |
| 11192 | Chainrings | 8 | Campagnolo FC-PI051, Record Pista 51-tooth chainring |
| 11193 | Chainrings | 8 | Campagnolo FC-PI052, Record Pista 52-tooth chainring |
| 11194 | Chainrings | 9 | Campagnolo FC-CH152, Chorus 52-tooth chainring |
| 11195 | Chainrings | 9 | Campagnolo FC-CH252, Chorus 52-tooth chainring, 10-speed |
| 11196 | Chainrings | 9 | Campagnolo FC-CH352, Chorus 52-tooth chainring |
| 11197 | Chainrings | 9 | Campagnolo FC-CH452, Chorus 52-tooth chainring, 10-speed |
| 11198 | Chainrings | 9 | Campagnolo FC-CH153, Chorus 53-tooth chainring |
| 11199 | Chainrings | 9 | Campagnolo FC-CH253, Chorus 53-tooth chainring, 10-speed |
| 11200 | Chainrings | 10 | Campagnolo FC-AT152, Daytona 52-tooth chainring |
| 11201 | Chainrings | 10 | Campagnolo FC-AT352, 52T chainring |
| 11202 | Chainrings | 10 | Campagnolo FC-AT153, Daytona 53-tooth chainring |
| 11203 | Chainrings | 11 | Campagnolo FC-RA630, Racing Triple 30-tooth chainring |
| 11204 | Chainrings | 11 | Campagnolo FC-RA040, Racing Triple 40-tooth chainring |
| 11205 | Chainrings | 11 | Campagnolo FC-RA042, Racing Triple 42-tooth chainring |
| 11206 | Chainrings | 11 | Campagnolo FC-RA050, Racing Triple 50-tooth chainring |
| 11207 | Chainrings | 12 | Campagnolo FC-MI039, Veloce 39-tooth chainring |
| 11208 | Chainrings | 12 | Campagnolo FC-MI042, Veloce 42-tooth chainring |
| 11209 | Chainrings | 12 | Campagnolo FC-VL152, Veloce 52-tooth chainring |
| 11210 | Chainrings | 12 | Campagnolo FC-MI153, Veloce 53-tooth chainring |
| 11211 | Chainrings | 13 | Campagnolo FC-MI730, Veloce Triple 30-tooth chainring |
| 11212 | Chainrings | 13 | Campagnolo FC-VL142, Veloce Triple 42-tooth chainring |
| 11213 | Chainrings | 13 | Campagnolo FC-MI352, 52-tooth chainring |
| 11214 | Chainrings | 14 | Campagnolo FC-TH155, Chrono/Triathlon 55-tooth chainring |
| 11215 | Chainrings | 14 | Campagnolo FC-RETH155, Record Chrono/Triathlon 55-tooth chainring |
| 11216 | Chainrings | 14 | Campagnolo FC-CHTH155, Chorus Chrono/Triathlon 55-tooth chainring |
| 11217 | Chainrings | 14 | Campagnolo FC-TH255, Chrono/Triathlon 55-tooth chainring |
| 11218 | Chainrings | 14 | Campagnolo FC-RETH255, Record Chrono/Triathlon 55-tooth chainring |
| 11219 | Chainrings | 14 | Campagnolo FC-CHTH255, Chorus Chrono/Triathlon 55-tooth chainring |
| 11220 | Chainrings | 14 | Campagnolo FC-TH154, Chrono/Triathlon 54-tooth chainring |
| 11221 | Chainrings | 14 | Campagnolo FC-RETH154, Record Chrono/Triathlon 54-tooth chainring |
| 11222 | Chainrings | 14 | Campagnolo FC-CHTH154, Chorus Chrono/Triathlon 54-tooth chainring |
| 11223 | Chainrings | 14 | Campagnolo FC-TH254, Chrono/Triathlon 54-tooth chainring |
| 11224 | Chainrings | 14 | Campagnolo FC-RETH254, Record Chrono/Triathlon 54-tooth chainring |
| 11225 | Chainrings | 14 | Campagnolo FC-CHTH254, Chorus Chrono/Triathlon 54-tooth chainring |
| 11226 | Chainrings | 14 | Campagnolo FC-TH144, Chrono/Triathlon 44-tooth chainring |
| 11227 | Chainrings | 14 | Campagnolo FC-TH142, Chrono/Triathlon 42-tooth chainring |
| 11228 | Rear Derailleurs | 16 | Campagnolo RD00-RE210, Record 10-speed rear derailleur |
| 11229 | Rear Derailleurs | 16 | Campagnolo RD00-RE210L, Record 10-speed rear derailleur, L variant |
| 11230 | Rear Derailleurs | 17 | Campagnolo RD00-CH210, Chorus 10-speed rear derailleur |
| 11231 | Rear Derailleurs | 17 | Campagnolo RD00-CH210L, Chorus 10-speed rear derailleur, L variant |
| 11232 | Rear Derailleurs | 19 | Campagnolo RD00-DA209, Daytona 9-speed rear derailleur |
| 11233 | Rear Derailleurs | 19 | Campagnolo RD00-DA309, Daytona Triple 9-speed rear derailleur |
| 11234 | Front Derailleurs | 23 | Campagnolo Chorus 10-speed front derailleur |
| 11235 | Front Derailleurs | 25 | Campagnolo Daytona front derailleur |
| 11236 | Front Derailleurs | 25 | Campagnolo Daytona Triple front derailleur |
| 11237 | Shifting Brake Levers | 27 | Campagnolo EP00-RE10R / EP00-RE10L, Record Ergopower (10-speed) |
| 11238 | Shifting Brake Levers | 28 | Campagnolo EP00-CH10R / EP00-CH10L, Chorus Ergopower (10-speed) |
| 11239 | Shifting Brake Levers | 29 | Campagnolo EP00-DA09R / EP00-DA09L, Daytona Ergopower (9-speed) |
| 11240 | Brakes | 34 | Campagnolo BR00-DA, Daytona |
| 11241 | Shifters | 37 | Campagnolo SL00-BE10CG, Bar-end (10-speed) |
| 11242 | Hubs | 46-47 | Campagnolo Daytona hubs (9-speed rear) |
| 11243 | Cassettes | 53 | Campagnolo Record 10-speed cassette |
| 11244 | Cassettes | 55 | Campagnolo Record Titanium 10-speed cassette |
| 11245 | Cassettes | 57 | Campagnolo Chorus 10-speed cassette |
| 11246 | Cassettes | 59 | Campagnolo CS00-GH0919 / CS00-GH0911, Ghibli sprocket set |
| 11247 | Pedals | 60 | Campagnolo PD00-DA, Daytona Pro-Fit |
| 11248 | Wheel(sets) | 68 | Campagnolo WH99-BOTF / WH99-BOTR, Bora (9/10-speed) |
| 11249 | Wheel(sets) | 71 | Campagnolo WH99-NUTF / WH99-NUTR / WH99-NUCF / WH99-NUCR, Nucleon |

## Rear derailleur audit fixes — 2026-11-15 (user approved; audit items 1, 2, 6, 7)

- 4108 Chorus (short cage): `year_from` 1988 -> 1987, `source_ref` 112 -> 311 (1987 Peugeot catalogue: PY CA W 'Chorus'
  lists the full Chorus group, rear derailleur included; spec 14999 already linked). Matches 2286 FD-01FCH (1987-91).
- 4112 Croce d' Aune (Short Cage): `year_to` 1991 -> 1992, `source_ref` 113 -> 359 (1992 Bianchi catalogue, Mondiale
  page https://2velo.com/wp-content/uploads/2014/03/1992-catalog-p1911.jpg, as for brake 567 on 2026-11-07); fitment
  evidence, not a 1992 range claim. Spec 19636 (1992 Mondiale rear) NULL -> 4112; rear override now 1988-1992.
- Retitles (`source_ref` unchanged; old titles for matching later sources): 4104 "Campagnolo RD-02CE Centaur" ->
  "Campagnolo RD-02CE, Centaur"; 4098 "Campagnolo A010 Corsa Record 2nd Gen." -> "Campagnolo A010, C-Record (second
  generation)" (`search_text` -> "Campagnolo A010 C-Record"; description keeps "also called Corsa Record"); 4137
  "Campagnolo RD-31RE, Record (1995-1997)" -> "Campagnolo RD-31RE, Record" (row stays 1995-1995; VeloBase title claimed
  1995-97, unverified); 4138 "Campagnolo Record Titanium 8-speed (1996)", 7070 "Campagnolo Stratos rear derailleur
  (1994)", 7078 "Campagnolo Mirage rear derailleur (1995)" lose the bracketed year. Descriptions' leading title text
  updated to match.
- 4106 Chorus (short cage, graphite finish) registered in `REVIEWED_VARIANTS` as a finish model beside 4108 (dates
  1990-91 remain the earlier estimate).
- Validation: 9 statements, 9 rows; rerun 0. Generator over all CSVs: 20,584 mappings before and after, only change
  1992 Bianchi Mondiale rear NULL -> 4112 (linked 7,323 -> 7,324). `quality-report.js` 0 errors; 4108's 1987 date
  conflict cleared. `npm test` passed. Rear Derailleur coverage 876 / 1,074.

## Campagnolo "Record" brochure — February 1987 (Disraeli Gears, 16 scans), data_source 414; C-Record rear generation in 1987, 2026-11-15 (user approved)

- Label `Campagnolo "Record" brochure (February 1987)`, country IT. Source:
  https://www.disraeligears.co.uk/site/campagnolo_-_record_february_1987_version.html (`00_main_images/campagnolo_-_record_scan_NN_main_image.jpg`,
  1560 x 2215). English; back page (scan 16) "Printed in Italy February 1987", Campagnolo S.p.A. Vicenza / SARL / Corporation
  addresses. Read for the rear derailleur only: scan 3 Record history and victories, scan 4 Record group photo, scan 5 crank /
  pedals / posts, scan 15 Record Pista. No catalogue numbers on the pages read; the rest unread.
- Scan 4 shows the first-style C-Record rear: winged-hub shield logo on the outer parallelogram plate (Disraeli Gears' 1st-style
  marker; 2nd-style A010 has the script logo, a cut-out at the tension pulley and a brass nut at the p-pivot, dated from 1988).
  With n. 18 bis (Dec 1986, source 9) and Record News Winter 1987 (source 197), 0102050 was current for the 1987 season; A010 is
  first attested in the November 1987 Record brochure (source 16), a 1988-season document.
- Applied: 4096 "0102050, C-Record (first generation)" `year_to` 1986 -> 1987, `source_ref` 9 -> 414, description rewritten (old:
  "Campagnolo 0102050, C-Record (first generation), Italy. Cat. n. 18 bis (Dec 1986): 0102050."). 4098 A010 keeps 1987-89.
  1987 Bianchi X4 / Mondiale rear specs 1110 / 1130 moved 4098 -> 4096, reversing the date-only 2026-10-09 "C-Record era fix"
  (bianchi.md) for the rear derailleur. Rear override `'campagnolo c record'` now `to: 1987 -> 4096`, `1988-89 -> 4098`.
- Validation: 3 statements (1 / 1 / 2 rows), rerun 0. Generator over all CSVs: 20,584 mappings, only the two 1987 Bianchi rear
  specs changed (4098 -> 4096), matching live. `quality-report.js` 0 errors; 4096's remaining date flag is the 1984 De Rosa
  (documented late-1984 brochure for 1985). `npm test` passed.
- Follow-up reviewed 2026-11-17 below: source 9's `12/86` imprint is confirmed; the early crank
  is attested in February 1987, but the two Bianchi crank generations remain unidentified. The date
  enrichment and Bianchi table repairs were approved, applied and validated on 2026-11-17 (below);
  crank generations and the Mondiale post variant remain unresolved.

## Front derailleur audit fixes — 2026-11-15 (user approved; audit items 1, 3, 5)

- 1993 era fix (1993 Product Range, source 20: FD-11SRE / FD-11SCH replace FD-01): 2306 FD-01SRE `year_to` 1994 -> 1992
  and retitled "Campagnolo FD-01SRE, Record (91-94)" -> "Campagnolo FD-01SRE, Record (braze-on)" (FD-01FRE clip-on in its
  note); 7040 FD-01SCH `year_to` 1994 -> 1992. Spec 1424 (1993 Bianchi MG/Bianchi Team "Record 8-speed Ergopower")
  2306 -> 7059 FD-11SRE; generator FD key `'campagnolo record 8 speed ergopower'` now 2306 to 1992 / 7059 from 1993, as
  the Chorus FD and Record RD keys. Source refs unchanged. 7044 FD-01SAT stays 1992-94 (no Athena FD-11 in 1993).
- 2288 Croce d'Aune front: `year_to` 1991 -> 1992, `source_ref` 110 -> 359 (1992 Bianchi catalogue, Mondiale page
  https://2velo.com/wp-content/uploads/2014/03/1992-catalog-p1911.jpg; fitment evidence, not a 1992 range claim, as
  4112 / 567 / 1489). Spec 19635 NULL -> 2288; front override now 1987-1992.
- Retitles (old titles for matching later sources; descriptions' leading text updated): 2288 / 2289 "Croce d' Aune" ->
  "Croce d'Aune" (+ `search_text`); 2278 "Campagnolo, 50th Anniversary" -> "Campagnolo 50th Anniversary"; 2299
  "Campagnolo Record 1052/NT (1978 - 1982, 3-hole narrow band)" -> "Campagnolo 1052/NT, Record (3-hole narrow band)"
  (`search_text` "Campagnolo 1052/NT Record"); 7071 / 7079 drop "(1994)" / "(1995)". Rear 4112 keeps "Croce d' Aune".
- Validation: 10 guarded statements, 8 component + 2 spec rows; rerun 0. All 93 CSVs regenerated before/after: only
  the two intended links changed (7325 -> 7326 linked). `quality-report` has no findings on the touched rows.
  Campagnolo front specs now 183 / 195 linked.

## Super Record front mounting/code review — 2026-11-20, read-only

Initial readback: **2313**, `1052/SR (0104010), Super Record (clip-on)`,
1975–1988, and **7012**, `0104011, Super Record (braze-on)`, 1985–1988.
Both currently have source_ref **262**, the 1988 Guida availability extension.
Keep these as distinct mounting configurations of the same derailleur family.
They are not successive generations or duplicate complete assemblies.

Re-downloaded and visually checked the original
[Catalogue n.18 scan](https://velobase.com/CatalogScans/Campagnolo/Campy1985_catalog18.pdf),
printed pp.23–25. The overview explicitly separates **0104010 clip-on** and
**0104011 braze-on**. The exploded pages share cage **1052/7**, upper arm
**7117027** and lower arm **7117028**. The former has clip **7182025**, hinge
and clamp bolt; the latter has hanger **7102012**, concave washer and mounting
screw. These are manufacturer-confirmed codes/configurations. The earlier
[1982 US catalogue](https://www.campyonly.com/history/catalogs/1982_olympic_catalog.pdf),
printed p.9, lists **1052/SR** (available in derailleur groups only); the later
n.18 pages use the seven-digit assembly codes. The 1982 text was recovered
from indexed manufacturer-page extraction, not a newly inspected local scan.

Visually rechecked [Guida 1988 scan 18](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_1988_february_-_i_componenti_da_corsa_scan_18_main_image.jpg):
`SUPER RECORD a fascetta-a saldare` explicitly offers both mountings. Thus
overlap and availability in **1988** are supported; 1988 is not a demonstrated
production end date.

**Start dates remain unproved.** 7012's 1985 comes from first ingestion of
the catalogue attributed c.1985, not a launch announcement. 2313's 1975 was
an October 24 fitment inference from 1975/76 Raleigh and 1978 Bianchi group
names (see bike cross-catalog notes); it does not independently identify the
black-link Super Record front. Earlier n.17a review records only 1052/1 in
the 1975 maker catalogue. This supersedes treating the inferred 1975 date as
verified model-introduction evidence, but does not establish an exact 1979
boundary either. The initial 2313 description said `(1979-1987)`, contradicting
its structured dates. That range was removed in the approved correction below.

Initial bike-link readback found all Super Record front links on 2313 and none on 7012.
In particular **4261** (1975 Raleigh), **7878** (1976 Raleigh) and **12484**
(1978 Bianchi) required original front-changer image/code evidence before
redating the component or selecting an alternative. Later generic Super Record
specs also do not establish clamp versus braze-on solely by group name.
No DB, generator or bike-link changes were made in this audit. Task-created
downloads and renders were removed after recording this evidence.

### Early fitment follow-up — 2026-11-20, applied and validated

Directly inspected original US Raleigh Team Professional DL185 **printed p.3**
in both [1975](https://labibleduvelocataloguesraleigh.blogspot.com/p/raleigh-1975.html)
and [1976](https://labibleduvelocataloguesraleigh.blogspot.com/p/raleigh-1966.html).
The 1976 URL is historically misnamed; the page title now correctly says 1976.
Both editions show the same close-up at top right: **solid outer cage,
silver linkage and clamp-on body**, matching retained **2297 / 1052/1**.
They do not show the three-hole black-link **2313 / 1052/SR**. This is direct
maker fitment evidence, consistent with 2297's already-recorded n.17/17a group
assignment, and supersedes the October 24 inference from the phrase
`Campagnolo Super Record 12 Speed` for these two fronts. Preserve that original
catalogue wording; correct the link rather than transcribing a different name.

User-approved, applied guarded changes:

- Spec **4261**, bike 223/source 130, 1975: component **2313 → 2297**.
- Spec **7878**, bike 449/source 221, 1976: component **2313 → 2297**.
- Component **2313** description only: replace `Campagnolo 1052/SR, Super
  Record (1979-1987), Italy, 92 grams (avg) Catalogued as 0104010 clip-on
  Super Record front changer in Catalogue n. 18 (1985).` with `Super Record
  clamp-on front changer with black alloy linkage arms and three-hole steel
  cage. Earlier code 1052/SR; later 0104010. Italy; 92 g measured average.`
  Preserve title, structured dates, source_ref 262 and measured weight.
- The generator rule scopes the 2297 exception to exact bike title
  `Team Professional DL 185`, 1975–76, under `campagnolo super record 12 speed`;
  the existing later rule remains. SQL records old values/restoration and
  guards each original link, bike, label, wording and source.

Pre-application validation compiled the proposed generator in memory and compared all
loaded catalogue CSVs against a consistent DB snapshot: **24,061 specs**, only
4261/7878 change. Simulating those two DB corrections reproduces the baseline
summary and exact finding set (15 pre-existing lost proposals, no other changed
or gained mappings).

Application affected exactly two bike specs and one component description;
the identical SQL rerun affected zero rows. Exact readback verifies both links
now 2297, original labels/wording/sources 130/221 retained, and spec 12484 still 2313.
2313's description exactly matches the 159-character replacement; both component
titles, structured dates and source_ref 262 remain unchanged. Restore using the
old values above, with current-value guards, if this decision is superseded.
The actual final generator/live comparison preserves the entire baseline summary
and exact finding set across 24,061 specs. Whole-DB quality remains zero errors,
with the same 2,071 review findings and exact finding set. All 14 test files pass.
SQL, proposal patch/scripts and before/after validation snapshots were removed
after recording these results. No pending correction artifact remains.

**Date search limits:** inspected the [17a supplement](https://www.campyonly.com/history/catalogs/catalog_17a_supp.pdf),
PDF pp.5–6: four-hole **Record 0104007**, arms 7117009/7117011, not an explicitly
named black-arm Super Record. Its 1979 attribution comes from the archive,
not a newly verified printed date. Bikecology 1980, source 247, printed p.24
([original scans](https://labibleduvelodivers.blogspot.com/p/revue-1980.html),
image 41), advertises one Record front and a revised/lightened cage; it does not
establish a separate Super Record launch. Neither source's limited offering
proves nonexistence of other variants. The 1982 maker pp.9–10 distinguish
1052/SR/black arms from Record braze-on; they do not establish a Super Record
braze-on launch. Modern Le Cycleur chronology calls black-arm introduction
approximately 1979 and explicitly **assumes** braze-on introduction in 1982: useful
leads, not primary dating proof. Do not promote either to a firm launch year.

Rechecked [1978 Bianchi Barcellona page](https://labibleduvelocataloguesbianchi.blogspot.com/p/bianchi-1978.html),
image 2 and drivetrain inset: the available 960px scan does not resolve a safe
cage/linkage variant identification. Spec 12484 remains unchanged pending a
clearer original. Sampled 1982 Bianchi brochure photos likewise did not establish
a coded early Super Record braze-on. The next useful date evidence is a dated
1978–82 maker/importer sheet naming the black-arm front, or a dated pre-1985
0104011/braze-on Super Record offering; no further generic name-only fitment
inference is justified. Task downloads/renders were discarded after recording
these source/page findings; the subsequently approved correction artifacts were
also removed after application and validation.

## No. 18 imprint and Super Record availability — 2026-11-22

- **Source 8.** The [registered No. 18 PDF](https://velobase.com/CatalogScans/Campagnolo/Campy1985_catalog18.pdf)
  and the [mirror filed under 1984](https://gallery.heinrich.id.au/wp-content/uploads/2018/04/1984-Campagnolo-Catalog-18-Super-Record.pdf)
  both show `12/86` in the right-margin printer line on PDF p. 70. This dates
  the registered English printing to December 1986. Source 9's separate No. 18 bis
  copy has its own verified December 1986 imprint. The title of either scan file
  cannot establish when the corresponding range first appeared.
- **7012 / 0104011, braze-on Super Record.** The 1983 Ten Speed Drive Imports
  catalogue (source 279) names the Super Record braze-on on the
  [Guerciotti Jet, p. 3](https://ebykr.com/wp-content/uploads/2026/11/ebykr-ten-speed-drive-imports-catalog-1983-p03-scaled.webp)
  and [Cinelli Super Corsa VIP, p. 10](https://ebykr.com/wp-content/uploads/2026/11/ebykr-ten-speed-drive-imports-catalog-1983-p10-scaled.webp).
  The c. 1983–84 [Palo Alto catalogue](https://velobase.com/CatalogScans/Palo%20Alto%20Shop%20Catalogs/palo_alto_1984.pdf)
  (source 294), printed pp. 23 and 32, independently lists both Super Record
  mounts and labels the black-trim braze-on as retailer SKU 42-407 (91 g).
  This supersedes the earlier refusal to match Palo Alto's offering to 7012
  based on its old 1985 date. No. 18 p. 24 supplies the maker assembly code,
  arms, cage and hanger. The importer and retailer do not print `0104011`.
  Use 1983 as the season of documented availability for that mount and family.
- **2313 / 1052/SR, clip-on Super Record.** Visually verified the original
  [1982 Campagnolo USA catalogue](https://ebykr.com/library/campagnolo-1982-catalog/),
  printed pp. 9–10 (source 10). They label 1052/SR, the clamp and black arms
  7117009/SR and 7117011/SR. The braze-on illustrated alongside it is silver-arm
  Record 1022/00, a separate row (7007). No. 18 uses the later 7117027/7117028
  arms on the two Super Record versions. The 1978 Barcellona original served at
  960 px even via the unscaled image URL, and the c. 1979 Pinarello Prestige and
  Super Record panels supply group names without a clear front variant or printed
  year. A firm earlier boundary for 2313 and the fitment for 12484 still need
  distinguishing evidence.
- **2300 / 0104007, standard-band Nuovo Record.** No. 18 printed pp. 8, 23 and
  27 list this model in the Record road group and picture the three-hole cage
  and later standard clamp. The December 1986 attestation covers the range
  conflict on spec 2290 (1986 Cinelli 840 SLX Competition).

**Applied and validated.** Source 8 now reads `Campagnolo Catalogue n. 18,
English edition (December 1986)` instead of `(c. 1985)`. Its citation changed
from `Campy1985_catalog18.pdf` to the original scan URL and back-cover
reference above. Component 7012 moved from 1985–1988/source 262 to
1983–1988/source 279. Guida 1988 (source 262) still supports the upper
availability bound. Component 2300 moved from 1982–1985 to 1982–1986 with
source 8. Its description formerly said 1982–1987 and now records the
standard band, three-hole 1052/7 cage and existing 95 g weight.

Removed stale 1985 printing references from the other affected descriptions.
1472/1474/1475 and 3688 now date the catalogue's unavailability notices to
December 1986 and keep their previous component bounds. 2301 retains 0104008
and its measured weight. 4162 retains the December 1986 parts-page evidence
without treating it as a sales listing. 7007 retains the 1982 listing and
the later 0104009 code. 7013 retains axle 744/2, 68-C/70-C and 115.5 mm.
7012 retains the cage, arm and hanger references from No. 18 p. 24.
The [assembly comparisons below](#no-18-assembly-and-date-follow-up--2026-11-22)
supersede this pass's provisional interpretation of the 0104008 image labels
and its held date decisions for 2301, 7007 and 7013.

The guarded transaction updated one source and ten components. The same
SQL reran with zero affected rows. Live readback matched the proposed values.
The normal, near and parenthetical duplicate classifications matched the
pre-change comparison. All 24,829 compared bike specs kept their previous
mapping results, including the same 15 pre-existing lost proposals. Neither
unlinked front carrying generic Super Record wording identifies the braze-on
mount. The live quality report had zero errors and removed exactly the date
conflict on spec 2290. All 14 test files passed.

### No. 18 assembly and date follow-up — 2026-11-22

Reviewed the [December 1986 No. 18 printing](https://velobase.com/CatalogScans/Campagnolo/Campy1985_catalog18.pdf)
against the original maker pages and the retained component identities.

- **2301, Nuovo Valentino 0104008.** The visual read of p. 23 shows one
  0104008, adjacent to Gran Sport 0104006 and 980 0104012. The duplicate
  0104008 label came from OCR. P. 30's assembly photo matches the
  [2301 specimen](https://velobase.com/CompImages/FDerailleur/2BC51FDD-A9F4-4576-89C9-D040C3F7A79D.jpeg)
  in the slim linkage, unperforated outer cage and crest location. The
  illustration gives cage 2050/7 and arms 7117017/7117018. The approximate
  [U.S.A. parts supplement](https://ebykr.com/library/campagnolo-usa-parts-sheets/)
  also names 0104008 with an estimated publication year. The 1982 U.S.
  catalogue's p. 9 calls 2050 Nuovo Valentino, so the model name alone
  cannot assign that listing to 0104008. Retain the existing lower bound.
  Extend 1982–1985 to 1982–1986, source 8. The description adds the clip-on
  construction and part codes while preserving 91.5 g measured average.
- **7007, Record braze-on.** The [1982 U.S. catalogue](https://www.campyonly.com/history/catalogs/1982_olympic_catalog.pdf),
  pp. 9–10, and No. 18, pp. 23 and 26, show the same silver 778/782 arms,
  1052/7 cage, 7300105 washer, 7350115 screw and body assembly 7143036.
  The hanger changes from 7102009 under 1022/00 (1052/BZ) to 7102012 under
  0104009. This is a documented revision within the family represented by
  7007. Keep the two configurations explicit in its description and attribute
  101 g to the 1982 listing. Extend 1982–1985 to 1982–1986 and change
  source_ref 10 to 8. The black-arm Super Record assembly remains distinct.
- **7013, Record Cyclocross 1046/4.** No. 18 pp. 46–47 tie this exact set
  to 744/2 and print 115.5 mm for both 68-C and 70-C. The 1982 U.S.
  catalogue lists the combined 1046/3 triple/cyclocross set (7008). The
  [Winter 1982–83 Record News](https://www.campyonly.com/history/record_news/record_news_vol_1-2.pdf),
  pp. 5–6, identifies a 1046 C cyclocross assembly and both older and revised
  744/2 axles. Its revised 68 C and 70 C dimension sums are 114.5 and 116.5 mm,
  respectively, using the chart's three axle spans. The earlier application
  and axle family therefore supply corroboration only. They give neither
  the numbered 1046/4 set nor the later 115.5 mm specification. The retailer
  photo of the bottom-bracket spread shows that specification but lacks a
  printed date for its copy. Replace the original estimated 1985–1987 range
  with the verified 1986 catalogue year and retain source 8. The description
  now explicitly attributes 115.5 mm to the December 1986 printing.
  [Retailer photo of pp. 46–47](https://cdn11.bigcommerce.com/s-1rmgckn/images/stencil/1280x1280/products/14237/174446/IMG_5039__05016.1733884915.jpg?c=2)

The changes keep the three original titles and IDs. The earlier descriptions
for restoration were `Nuovo Valentino front changer with part number 0104008.
Italy, 91.5 g measured average.`, `Record braze-on front changer, pictured as
1052/BZ under code 1022/00 in 1982. Italy, 101 g. Catalogue n. 18 lists the
Record braze-on model as 0104009.` and `Record cyclocross bottom bracket set
1046/4. Axle 744/2, marked 68-C or 70-C, 115.5 mm. Italy.`, respectively.

Applied three guarded updates and confirmed zero changes on an identical
rerun. Live readback matched all proposed values. The full comparison of
24,829 bike-spec mappings and the normal, near and parenthetical duplicate
classifications matched the baseline. None of the three components has a
live bike link or a spec naming its exact model. The integrity report still
has zero errors and the same findings. All 14 test files passed.

## Record front derailleur specimen comparison — 2026-11-18

Compared retained specimens 2295 / 2299 / 2300. Keep all three configurations
distinct: 2295 (0104007, 1978 specimen) has a four-hole outer cage; 2299
(1052/NT) has a three-hole cage with a narrow straight clamp band; 2300
(0104007 / later standard-band configuration) has a three-hole cage with a
standard band. The three-hole rows are not duplicates of the four-hole row,
and the clamp-width distinction separates 2299 from 2300. VeloBase pages:
[2295, 0104007 four-hole](https://velobase.com/Pages/ViewComponent.aspx?ID=d6566c27-a564-4fd4-a756-6aea9e52b615),
[2299, 1052/NT narrow band](https://velobase.com/Pages/ViewComponent.aspx?ID=b83cce69-5737-415a-a16f-c9ec8c4d96c1),
[2300, 0104007 standard band](https://velobase.com/Pages/ViewComponent.aspx?ID=9787be9f-16d6-4f73-9c3c-302f783978b3).
These are specimen/configuration distinctions; the source page's broad date
ranges are not independent proof of production boundaries. No database values
or bike links changed.

## C-Record crank and 1987 Bianchi follow-up — 2026-11-17, read-only review

- Scope: current crank rows 1482 / 1483 and their bike links; 1987 Bianchi X4 / Mondiale C-Record
  specifications; February 1987 Record brochure (source 414), source 9's original imprint and the
  November 1987 Record brochure (source 16). Initial review made no data changes; the subsequently
  approved 1483 enrichment is applied and validated below. No CSV or generator changes.
- **Imprint settled:** recovered https://velobase.com/CatalogScans/Campagnolo/Campy1986_Catalog18bis.zip,
  inspected `Campy1986_Catalog18bis/n18_55.jpg`. The vertical right-margin printer line clearly ends
  `12/86`. Source 9's December 1986 dating is correct for this exact copy. Disraeli Gears' other
  printings do not contradict it; do not redraft source 9 as 1985 or alter other dates on that basis.
  This closes the imprint check recorded in the 2026-11-15 rear-derailleur review above.
- **Physical crank distinction:** retained VeloBase specimens are
  https://velobase.com/Pages/ViewComponent.aspx?ID=F9D3301A-7F48-4698-A44B-49AC8228AB22 (1483;
  engraved winged shield nearer the spider) and
  https://velobase.com/Pages/ViewComponent.aspx?ID=532FA429-4CD0-48D8-90CD-1F60ECB92A3D (1482;
  painted shield farther down the arm). Both use self-extracting bolts and 135 mm BCD: those features
  and the Bianchi 53/42 ratio do not distinguish them. Do not merge the rows or use the bolt alone
  as a generation marker. VeloBase dates are secondary metadata, not a demonstrated production boundary.
- **Early crank attested in 1987:** source 414's scans 4 / 5 / 13 show the shield nearer the spider,
  consistent with 1483's engraved-logo specimen. Scan 13 describes Avional construction, hidden fifth
  ring attachment, incorporated extractor and 39-57T rings; scan 16 explicitly prints February 1987.
  Source page: https://www.disraeligears.co.uk/site/campagnolo_-_record_february_1987_version.html ;
  images `https://www.disraeligears.co.uk/site/00_main_images/campagnolo_-_record_scan_NN_main_image.jpg`.
  Approved and applied 2026-11-17: 1483 `year_to` 1986 -> 1987, `source_ref` 9 -> 414, description enriched with its physical
  identity and attestation. This is an availability bound, not proof of discontinuation in 1987.
- Source 16 recovered from https://velobase.com/CatalogScans/Campagnolo/Campy1987_Record.zip:
  `09.jpg` shows the lower shield position, consistent with 1482; `14.jpg` lists A040, 135 mm width,
  incorporated extractor. A040 numbering alone is not proof of a distinct crank generation.
  Retain 1482's existing range pending stronger introduction/production-boundary evidence.
- **Bianchi crank fitment unresolved:** the original VeloBase `1987Bianchi.pdf` (held in Downloads;
  source/index https://velobase.com/Pages/Resources/CatalogScans.aspx) PDF p.15 names C Record 53/42T
  for X4 and Mondiale; X4 adds pantographed/anodized rings. PDF p.4 photographs both complete bikes,
  but their small/custom-marked cranks do not establish engraved versus painted shield. Current specs
  1107 / 1127 linked 1482 at that review; they were subsequently left unlinked (see link decisions).
  This supersedes the October note's assertion that the earlier row was
  proved wrong-era: 1987 itself does not identify either row. Do not automatically reverse to 1483;
  obtain a distinguishing original close-up or period Bianchi parts crosswalk, or review deliberately
  unlinking these two specs. The existing generator's 1987 cutoff is not new identity evidence.
- **Other scoped parts:** source 414 scans 4 / 6 / 7 show the earlier rear and retro-friction lever
  mechanism (second balancing friction system), supporting availability of the families behind
  4096 / 5970. Scans 4 / 5 / 12 / 14 show the familiar C-Record front, headset, pedals, hubs and
  aero post families; this does not establish every Bianchi mounting, length or version. No further
  exact bike-link change follows from the maker brochure alone. In particular it lists 130/180 mm
  posts, so a generic group name cannot establish the 130 mm variant.
- **New original-table discrepancies:** Bianchi PDF p.15 prints X4 seatpost `Campagnolo Super Record`
  and Mondiale `Gipiemme Cronosprint anodized`, while CSV/live specs 1113 / 1133 both say
  `Campagnolo C Record` and link 5737. Its chain cells are X4 `CX silver` and Mondiale `Corsa silver`
  (Regina from the paired freewheel/chain context), while specs 1117 / 1137 both say `Regina C Record`
  and link 1384. X4's rim is `Bianchi Speciale`, while 1119 says `Campagnolo` (NULL link).
  Correct transcription and explicitly resolve any conflict with the p.4 group/photo description
  before choosing component variants; see the Bianchi follow-up below. These are stronger immediate
  data-quality leads than a speculative crank-generation swap.
- **Application and validation, 2026-11-17 (user approved):** one guarded component UPDATE affected
  one row; rerun affected zero. Readback: 1483 years 1985-1987, source 414, description exactly as
  below (240 characters). 1482 remains 1987-1994/source 110. Their existing bike-link counts remain
  10 / 20 respectively; no spec rows or generator mappings were written. Whole-DB quality report:
  zero structural errors. Maintained generator/live-DB comparison before/after: 94 catalogues,
  20,845 compared specs; unchanged baseline of 20,806 unchanged, 6 gains, 33 losses, no changed
  targets, missing identities or ambiguities. These pre-existing differences are not approved fixes.
- Previous description (for restoration): `Campagnolo C-Record, Italy, 652 grams,53/42; w/ self-extracting crank bolts Cat. n. 18 bis (Dec 1986): 306/101, 135 BCD, screw with incorporated extractor 2350001.`
- New description: `Campagnolo 306/101, C-Record, Italy. Engraved shield near spider, 135 mm BCD; 652 g (53/42), self-extracting bolts 2350001. Cat. n. 18 bis (12/1986); Record brochure (02/1987), scans 4/5/13. Availability evidence, not a production end date.`
- Applied SQL and disposable maker scans were removed after readback/idempotency validation.
  The Bianchi p.4/p.15 source renders were subsequently removed after the table corrections below
  were validated. The original user-held Bianchi PDF is preserved in Downloads; all maker source
  URLs/page references above allow recovery without temporary files.

- Bianchi table follow-up applied and validated 2026-11-17 (user approved): see
  [equipment-table repairs](../../../ingest-bike-specs/references/known-catalogs/bianchi.md#1987-equipment-table-repairs--2026-11-17-applied-and-validated)
  for the repaired local CSV, generator and eight spec updates (including the other three chains
  affected by the same transcription). Rerun zero, exact readback, unchanged unrelated link drift,
  zero integrity errors. The 1483 component enrichment above remains applied and validated.


## Super Record rear naming review — 2026-11-26

**Applied and validated on user approval.** [Catalogue no.17 (1974), printed p.8](https://velobase.com/CatalogScans/Campagnolo/Campy1974_catalog17.pdf) depicts 4001 with textured outer lettering and lists titanium 4004/4005 bolts. [1982 US catalogue printed pp.12–13](https://www.campyonly.com/history/catalogs/1982_olympic_catalog.pdf) explicitly captions 4001 [0102018]; its assembled photo shows a script-logo outer plate while the separate exploded diagram uses an earlier-looking arm. [No.18, December 1986, printed p.17](https://velobase.com/CatalogScans/Campagnolo/Campy1985_catalog18.pdf) calls it 0102018, lists spring 98/A and screw 84, and shows a script-logo derailleur and removable-spring parts. These catalogues establish the family and code transition but do not identify the date or availability of the pivot-mounted spring version; drawings may be reused. Do not assign a 1986 introduction or extend a variant's dates solely from the illustration.

The six applied updates changed titles/descriptions and search text; no IDs, source UUIDs, groups, dates or bike links changed. 4148 moved provenance 1 → 6 because the 1974 maker catalogue supports the early family; its separately qualified 181.5 g average remains VeloBase evidence. 4152 moved 262 → 1 because the 1988 retailer guide attests an undifferentiated Super Record, whereas the pivot-mounted spring is attested by the original specimen record; the single source_ref cannot represent both. 4149, 4151, 4153 and 4086 retain source 1 where their individual specimen, spring or modification claims require it. Manufacturer catalogue codes alone cannot identify those specific specimens. Source 1 must not be replaced merely to improve appearance of provenance.

Restoration (old values; all original descriptions not listed remain unchanged):

| ID | Old title | Old description | Old search_text | Old source |
| --- | --- | --- | --- | --- |
| 4086 | Campagnolo, 50th Anniversary | Campagnolo, 50th Anniversary, Italy, 180 grams | Campagnolo 50th Anniversary | 1 |
| 4148 | Campagnolo 4001, Super Record (1st Generation) | Campagnolo 4001, Super Record (1st Generation), Italy, 181.5 grams (avg) Super Record launched 1974. | Campagnolo 4001 Super Record | 1 |
| 4149 | Campagnolo 4001, Super Record, PAT. 80 (first generation) | unchanged | Campagnolo 4001 Super Record PAT. 80 | 1 |
| 4151 | Campagnolo 4001, Super Record (2nd gen, ver.1) | Second-generation Super Record with signature-logo outer plate, revised pulley cage and bolt-mounted replaceable parallelogram spring. Model 4001 / 0102018; 180 g. | Campagnolo 4001 Super Record | 1 |
| 4152 | Campagnolo 4001, Super Record (2nd gen. ver. 2) | Campagnolo 4001, Super Record (2nd gen. ver. 2), Italy, 181.5 grams (avg) | Campagnolo 4001 Super Record | 262 |
| 4153 | Campagnolo Super Record 4001, Modified Cicli Bombardieri | unchanged | Campagnolo Super Record 4001 Modified Cicli Bombardieri | 1 |

All old years remain as stored, not proof of introduction or discontinuation. 4149 is the separate PAT.80 specimen; its possible overlap with 4148 does not prove either is a duplicate. 4151 and 4152 have different reported spring constructions; preserve both. 4153 is an unphotographed, reported workshop modification, not an official Campagnolo variant. 4086 is the separate 50th Anniversary group rear; no distinct maker part number is established. 1974 and 1982 illustrations do not establish that every 1980–83 bike had the same variant. In particular, 4152 has 22 existing bike links, including generic Super Record specs: these links should not be interpreted as independent proof of a pivot-mounted spring. No merge, delete or relink is proposed without fitment evidence.

Validation: six guarded updates each affected one row; exact field readback confirmed titles, descriptions, dates, sources and bike-link counts (4148 seven, 4151 one, 4152 22; others zero). SQL replay affected zero rows. The 118-catalogue comparison retained zero gains/changes, 15 pre-existing unrelated Huret losses and no missing or ambiguous identities. Link-decision test passed; whole-DB quality reported zero errors. Renaming changed candidate grouping: the normal duplicate report now flags 4148/4149 as generation, 4148/4153 as generation and 4149/4153 for review. 4148 and 4149 share the early family but 4149 preserves a separately documented PAT.80 specimen; 4153 is a reported modification without a photo, not proven identical to either. Retain all pending a photographed modification. 4151/4152 remain classified as generation; 4149/4151 were explicitly kept apart in the previous review. Task-created SQL, catalogue downloads and renders were removed after validation.

## Super Record and early Campagnolo specimen review — 2026-11-17

User approved, applied and validated 2026-11-17. Scope: TODO specimens 4149 / 4151,
modified 4153 and bare 4077, with adjacent first-generation 4148 checked for context.
Retain all four stable identities; 4149 and 4151 are different constructions, not
duplicates. The pair is registered in `duplicate-classify.js` so later comparisons
preserve the decision. No merge/delete or new source/component was needed.

Evidence is source 1's original specimen pages and full-size owner photographs:

| ID / retained VeloBase GUID | Evidence and decision |
| --- | --- |
| 4149 / D505A6CB-2FFC-46C6-BE6B-EB4697DD9FE1 | [Original page](https://velobase.com/Pages/ViewComponent.aspx?ID=D505A6CB-2FFC-46C6-BE6B-EB4697DD9FE1). Main `050D9FB8-0F48-43C9-88A3-22283202D604.jpeg`, reverse `FD73D676-0E20-40F3-8F10-F25A91EACF49.jpeg`: textured CAMPAGNOLO SUPER RECORD outer link and older cage, unlike 4151's signature plate. Owner explicitly describes an unmodified late PAT. 80 example of the older design. Retain as the separately recorded atypical dated specimen, in the same first-generation family as 4148, not a universal 1980–1983 variant. |
| 4151 / 72C70FC7-3747-41AC-BFEE-0F6B61BFF558 | [Original page](https://velobase.com/Pages/ViewComponent.aspx?ID=72C70FC7-3747-41AC-BFEE-0F6B61BFF558). Main `863CAB5D-9B6A-46C0-A19A-5126A859E921.jpeg`, detail `5A25403E-D9D3-4D11-B54F-0EEA2D57741E.jpeg`: signature-logo outer link, revised cage, replaceable spring anchored by a screw. Model field 4001 / 0102018. Keep distinct from 4149; do not infer a new date boundary. |
| 4153 / A56155ED-FC6C-456B-8812-0A4C72EDA55B | [Original page](https://velobase.com/Pages/ViewComponent.aspx?ID=A56155ED-FC6C-456B-8812-0A4C72EDA55B). Owner describes a Cicli Bombardieri clearance-screw modification for sprockets over 28T, actual 185 g. The current page has **no specimen photo** (`NoImgs.jpg`); attribution is reported, not visually confirmed in this pass. Retain the documented modified specimen separately from standard stock parts. The source only says early–late 1980s; that does not establish exact manufacture/modification dates. |
| 4077 / 1E3E59A9-E17C-4953-BA6A-DEBE661F7284 | [Original page](https://velobase.com/Pages/ViewComponent.aspx?ID=1E3E59A9-E17C-4953-BA6A-DEBE661F7284). Main `748AE033-6D7B-407B-8726-850E15B40F2D.jpeg`, reverse `8B0D6B76-414E-44DE-B760-B06A82494C62.jpeg`: CAMPAGNOLO outer link, plain inner link/cage and different adjustment screws. Owner reports one replaced pulley. This is a photographed identity, not a placeholder to delete or automatically merge into Gran Sport 4118 / Record 4131. Source says 1963–unknown, not a 1963 production end. Its material field is disputed in the page's pending report; do not repeat the aluminium claim. |

Photo URLs are `https://velobase.com/CompImages/RDerailleur/<filename>` above.
4148's context page, GUID `730A5EB4-32A7-467E-B519-70AC5DAB88B6`, describes the
ordinary first-generation family. Its 1974–1979 metadata does not disprove the
separately photographed late PAT. 80 specimen. Broader web searches surfaced
collector histories and another PAT.80 specimen of the later design; they do not
replace these original rows' own photographs or prove a universal generation from
the date stamp. No new exact introduction/discontinuation date is asserted.

Applied metadata corrections (all retain brand 11, category 15, source_ref 1,
source_id above and original group assignments: NULL for 4077; 16 for the others):

| ID | Old title / description | Applied title / description | Date correction |
| --- | --- | --- | --- |
| 4077 | Title `Campagnolo "Campagnolo" model`; description `Campagnolo "Campagnolo" model, Italy` | Same title; `Gran Sport-style rear derailleur with CAMPAGNOLO on the outer link, unmarked inner link and cage, and different adjustment screws. The photographed specimen has one replacement pulley.` | year_from 1963 retained; year_to 1963 → NULL (source explicitly unknown). |
| 4149 | Title `Campagnolo 4001, Super Record, PAT. 80`; description `Campagnolo 4001, Super Record, PAT. 80, Italy, 184 grams (Actual)` | Title `Campagnolo 4001, Super Record, PAT. 80 (first generation)`; description `First-generation Super Record specimen with textured CAMPAGNOLO SUPER RECORD outer plate and earlier cage profile; B-knuckle stamped PAT. 80. 184 g (actual).` | year_from 1980 retained as specimen dating; unsupported year_to 1983 → NULL. |
| 4151 | Title `Campagnolo 4001, Super Record (2nd gen, ver.1)`; description `Campagnolo 4001, Super Record (2nd gen, ver.1), Italy, 180 grams` | Same title; `Second-generation Super Record with signature-logo outer plate, revised pulley cage and bolt-mounted replaceable parallelogram spring. Model 4001 / 0102018; 180 g.` | Existing 1978–1984 retained, not independently redated. |
| 4153 | Title `Campagnolo Super Record 4001, Modified Cicli Bombardieri`; description `Campagnolo Super Record 4001, Modified Cicli Bombardieri, Italy, 185 grams (Actual)` | Same title; `Reported Cicli Bombardieri modification: added adjustment screw increases pulley-to-sprocket clearance for climbing sprockets over 28T. 185 g (actual). Modification date unverified.` | 1980–1980 → NULL/NULL; the source gives only decade buckets. |

4149's retitle also recomputes search_text with `scripts/search-text.js`, which
retains the original `Campagnolo 4001 Super Record PAT. 80`. Descriptions are
184 / 157 / 163 / 181 characters respectively. Measured weights and all stable
identifiers survive. No component row is added or removed.

Subsequent user selections: 1982 Battaglin spec 12880 and 1981–82 Bianchi specs
6492 / 6647 and 1983 Bianchi spec 985 were linked to 4151 as judgment calls; spec 782 remains NULL.
See the Battaglin and Bianchi notes.

Bike-link follow-through at the time of this review: earlier ingestion notes selected 4149 from the general
1980–1983 year override. None of these stored values identifies PAT. 80 or the
photographed first-generation configuration. Applied **4149 → NULL**, preserving
the unresolved generation instead of selecting 4151, for:

| Spec / bike ID | Catalogue source | Bike / stored text |
| --- | --- | --- |
| 782 / 55 | 41, 1981 Kalkhoff | Professional 13 S / Campagnolo Super Record |
| 985 / 69 | 42, 1983 Bianchi | Super Leggera / Campagnolo Super Record |
| 6492 / 357 | 165, 1981 Bianchi | Super Corsa / Campagnolo Super Rekord |
| 6647 / 368 | 166, 1982 Bianchi | Super Corsa / Campagnolo Super Record |
| 12880 / 756 | 268, 1982 Battaglin | Campagnolo / Campagnolo Super Record |

All retain label_id 17, source_ref and original text/bike identity. The stored
raw labels are Derailleurs for 782 / 985 / 6492, Rear Derailleur for the other two.
No live bike uses 4077, 4149, 4151 or 4153. The generator now makes the generic
1980–1983 rear decision NULL; other years and separately reviewed front/group
mappings remain unchanged. This withdraws the unsupported PAT.80 fitment, not the
catalogue's Super Record family identification. Reopen only with a distinguishing
original bicycle photo or period parts crosswalk. Earlier Kalkhoff/Bianchi picks
are historical and superseded by this approved withdrawal.

Applied four fully guarded component UPDATEs and five guarded spec unlinks in
one transaction. Actual affected rows: four components and five specs; rerun zero
for both tables. The old values and source identities above preserve restoration
information: a reviewed reversal would restore those exact component fields and
set the five exact NULL spec identities back to 4149, also revisiting the generator
guard. That would restore unsupported fitments and is not the current decision.

Pre-apply validation, one live snapshot: all 96 local CSVs / 21,176 generated specs
compared before/after the simulated retitle and generator guard. Exactly the five
4149-to-NULL mappings above change; no other generated spec changes. Simulated
application across the five affected catalogues gives 562/562 unchanged mappings,
no missing/ambiguous identities and no link differences. Regression checks include
either candidate alone, both candidates, Record/Rekord aliases, range boundaries
and the unchanged front-derailleur mapping. All 12 test files pass.

Post-apply validation: exact full-row readback of all six reviewed/adjacent
components matches the original rows plus the four approved corrections; 4148 and
4152 are unchanged. All five affected specs retain their raw labels, text, sources
and bike identities, with only component_id cleared (timestamps are DB-managed).
Comparison of every spec in the saved live snapshot found exactly those five link
removals, with no inserted/deleted specs; snapshot bike and source records were
unchanged. All 96 CSVs / 21,176 generated specs were checked again against the
original plan: exactly the same five reviewed mapping changes. Live comparison
across the five affected catalogues gives 562/562 unchanged mappings, no link
changes/gains/losses and no missing/ambiguous identities. Whole-DB quality report:
zero integrity errors; missing dates remain explicit review flags, not evidence
for inventing replacement dates. `git diff --check` passes.

The completed TODO action was removed. Task SQL, snapshots, helper scripts, source
page downloads and inspected photo copies were removed after validation. Original
source URLs/photo filenames and old/new values above retain the evidence.

## Bikalog Campagnolo 2001 range and parts books — applied and validated 2026-11-17

- **441**, *Campagnolo Range Catalogue (2001), English edition*: https://bikalog.org/api/view/Campagnolo/2001/campagnolo-2001.pdf, 40 PDF pages (many two-page spreads). Full supported component range transcribed, including visually checked PDF33–38 specification tables and PDF32 rims; narrative/component sections PDF5–24 and 28–32. Covers, decorative pages, computer-only, warranty and dealer material excluded from component rows.
- **442**, *Campagnolo Spare Parts and Tools Catalogue (2001)*: https://bikalog.org/api/view/Campagnolo/2001/campagnolo-2001sp.pdf, 104 PDF pages. Cover states 2001; printed component page = PDF page minus 6. Complete components and separately supplied chainrings inventoried from PDF7–45,49–63,72–75,78 and 81. Compatibility tables PDF36–37 read visually. QR46–48, pedal repair 64–65, cables 66–67, computer 68–69, small repairs 70–71, wheel-hub repairs 76–77/79–80/82–83, tools/dealers 84–104 excluded as complete component identities. CN-RE100 is a chain joining part, not a whole chain. Repair body/cup/axle/cage/arm codes were not promoted to whole assembly models.
- **443**, *Campagnolo Record 10-speed introduction brochure (2000)*: https://bikalog.org/api/view/Campagnolo/2000/campagnolo-2000-record10spd.pdf, five PDF pages; narrative/specification spreads PDF3–4 fully checked. It already attests 13–29 cassettes, long-cage Record/Chorus 10-speed rear derailleurs and anti-friction front-cage inserts. These are not first appearances in 2001. Its PDF4 explicitly names **Exa-Drive MK2**, refining existing 2000 cassette titles, and supports the C10 chain earlier than 2001.
- All three are registered as catalogue sources, country NULL: edition language does not establish a national market. Primary source_ref for joint range/parts reconciliation is 442; the SC-S and C10 changes use 441, and the three older cassette title clarifications use 443. Source_ref still means last source to change the row; unchanged earlier maker facts and other attestations remain in these notes.

### Identity and evidence decisions

- The manufacturer positively distinguishes **2001 nine-speed** rear/Ergopower indexing from 1997–2000. New RD01 and EP01 configurations are separate rows, not aliases or automatic date extensions of RD99/RD00/EP99/EP00 nine-speed components. In printed 30–31/PDF36–37, old nine-speed rear adjustment is at the upper body and 2001 at the lower body;2001 nine-speed Ergo has a 9 speed mark. Conversion ratchets:1997/98 nine-speed Ergo to 2001 rear EC-RE064;1999/2000 Ergo to 2001 rear EC-RE063;2001 Ergo to older nine-speed rear EC-RE313. These are repair parts, not complete controls. SL99 nine-speed down-tube/bar-end shifters remain sold but explicitly target 2000 and earlier nine-speed rears.
- Original 2000 spares PDF33/34 really prints **EP00-RE10L / EP00-CH10L**. The 2001 book instead supplies **EP99-RE09L / EP00-CH09L** as shared complete left controls. Earlier titles remain valid and retained; descriptions preserve both dated supply listings. Daytona 2001 ten-speed pairs EP01-DA10R with EP00-DA09L; matching 10L codes were not invented.
- **Ultra-Drive versus Exa-Drive MK2:** the 2001 maker narrative positively describes evolved tooth profiling/machining. Kept the eight 2001 UD speed/group/material families distinct from the 2000 MK2 offerings; shared individual sprocket codes alone do not collapse a complete generation. The 2000 Record/Chorus steel-family weights 192/224g versus 2001 figures 188/220g remain separate edition evidence. Record titanium remains 156g. All cassette nominal weight configurations and supplied-without-lockring qualifications are preserved.
- Exact unchanged assembly/chainring codes support availability through 2001; this is not a measured production endpoint. All 49 previously inserted chainring codes are reused, not inserted again. Daytona 2001 ten-speed uses existing Chorus outer chainrings; added compatibility to those ring descriptions. No component year_from moved later and no row with a later year_to was shortened.
- New Hiddenset construction, Pro-Fit PLUS pedal design, differential rear brake architecture and Daytona ten-speed are independently distinguished from older rows. Record/Chorus 10-speed RD00 codes continue with detailed specifications. The new Pista BB is cartridge construction, distinct from the older cup-and-cone candidates; the older BB99 Pista identity question is not automatically resolved by the later BB01 code.
- **5758 Record Titanium → Chorus attestation:** range narrative explicitly moves the earlier Record 195g titanium post into standard Chorus; add SP01-CH272T in the description and extend 2001, retaining its earlier SP99-RE272T title/group. This is not a duplicate seatpost insertion. AC-S alloy cups/solid 111mm/299g resolves 10104; SC-S steel cups/111or 115.5mm/358g resolves 10105. AC-H remains separate and unresolved.
- **Proton resolved:** the [1999 guide scan 40, printed 132](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_99_-_componenti_scan_40_main_image.jpg), source 353, positively names earlier Proton with steel axles,22/24 round spokes and 684/1026g front/rear. The hub text refers to Proton 98. Preserve 10056 dates 1998–99 and identify this earlier construction. The old press PDF40 explicitly names Nucleon/Electron/Proton, but its 1998 sporting-result caption alone is not publication dating. Its former broad tubular-or-clincher wording is historical evidence, not disproved merely by a selective 1999 clincher listing. The 2001 WH01Proton has alloy axles and 685/965g, positively supporting a separate coded generation. Original user-provided `/Users/acooper/Downloads/Campagnolo_other_Vintage_Catalogs/CampagnoloPress.pdf` was read only and preserved.
- Shamal road WH99’s 14 front/16 rear spokes distinguish earlier 12-HPW and 16/16-spoke rows, resolving that held identity without a merge. Its exact codes already occur in 2000, so the new row has 2000–2001 attestation. Shamal Pista remains held. Repair-kit spare-spoke quantities were not mistaken for complete-wheel spoke counts.
- Source conflicts retained: RecordCarbon post 160g narrative versus 180g table; Nucleon 1520g narrative versus 1540g tubular/1580g clincher table totals; Ghibli 130mm narrative versus 132mm table OLD; Record 177.5/180mm arms listed in service book while complete long-size range table is ten-speed-only. New rows/specs use clearly identified configurations; these conflicts do not justify arbitrary identity/date changes.

### Applied component inventory

Added **40 components**, IDs **11487–11526**, and updated **93 existing rows**. No deletes, merges, bike writes, generator changes or new component groups. Existing Racing Triple grouping remains NULL rather than inventing a group. All new rows use UUID source IDs, brand 11 and existing category-brand associations.

| ID | Category | Catalogue-attested dates | Source | Title / specifications | Evidence |
| --- | --- | --- | --- | --- | --- |
| 11487 | Chains | 2000–2001 | 441 | Campagnolo C10, Record Ultra-Drive chain — 10-speed chain, 114 links; Floating Link Action, chrome-nickel-PTFE finish, Perma-Link permanent closure. 279g. Used with Record, Chorus and Daytona 10-speed drivetrains. | range PDF 6/11/17/33/34/35, record2000 PDF 3/4 |
| 11488 | Headsets | 2001–2001 | 442 | Campagnolo HS01-REHI, Record Hiddenset (1 inch) — Integrated headset for 1-inch unthreaded fork; internal frame bearing seats, 5.9mm stack, carbon cover and alloy fixing screw. 75g. | spares PDF 8 |
| 11489 | Headsets | 2001–2001 | 442 | Campagnolo HS01-REHIOS, Record Hiddenset (1 1/8 inch) — Integrated headset for 1-1/8-inch unthreaded fork; internal frame bearing seats, 5.9mm stack, carbon cover and alloy fixing screw. 75g. | spares PDF 8 |
| 11490 | Seat Posts | 2001–2001 | 442 | Campagnolo SP01-DA272, Daytona seat post — Steel seatpost tube, light-alloy saddle head shared with Record/Chorus, 27.2mm diameter x 250mm length, Daytona marking; 230g. | spares PDF 10 |
| 11491 | Bottom Brackets | 2001–2001 | 442 | Campagnolo BB01-REPIIT / BB01-REPIBC, Record Pista — Cartridge track bottom bracket, symmetric hollow 111mm axle, composite/light-alloy cartridge, alloy cups; without sealings. Italian or English thread; 220g. | spares PDF 11 |
| 11492 | Rear Derailleurs | 2001–2001 | 442 | Campagnolo RD01-RE209, Record 9-speed — New-generation 9-speed rear, carbon outer plate, lightened inner plate, titanium hanger/pivot bolt; 11–26T, 27T capacity, 14T front difference; 190g. | spares PDF 21 |
| 11493 | Rear Derailleurs | 2001–2001 | 442 | Campagnolo RD01-CH209, Chorus 9-speed — New-generation 9-speed rear, lightened upper body; 11–26T, 27T capacity, 14T front difference; 211g. | spares PDF 22 |
| 11494 | Rear Derailleurs | 2001–2001 | 442 | Campagnolo RD01-RA309, Racing T 9-speed — New-generation 9-speed triple rear, lightened upper body; 11–29T, 35T capacity, 22T front difference; 214g. | spares PDF 22 |
| 11495 | Rear Derailleurs | 2001–2001 | 442 | Campagnolo RD01-DA210, Daytona 10-speed — Daytona 10-speed rear; 11–29T, 30T total capacity, 14T front difference; 223g. | spares PDF 23 |
| 11496 | Rear Derailleurs | 2001–2001 | 442 | Campagnolo RD01-DA209, Daytona 9-speed — New-generation 9-speed rear; 11–29T, 30T capacity, 14T front difference; 223g. | spares PDF 23 |
| 11497 | Rear Derailleurs | 2001–2001 | 442 | Campagnolo RD01-DA309, Daytona Triple 9-speed — New-generation 9-speed triple rear; 11–29T, 37T capacity, 22T front difference; 229g. | spares PDF 23 |
| 11498 | Rear Derailleurs | 2001–2001 | 442 | Campagnolo RD01-VL209, Veloce 9-speed — New-generation 9-speed rear; 11–29T, 30T capacity, 14T front difference; 250g. | spares PDF 24 |
| 11499 | Rear Derailleurs | 2001–2001 | 442 | Campagnolo RD01-VL309, Veloce Triple 9-speed — New-generation 9-speed triple rear; 11–29T, 37T capacity, 22T front difference; 255g. | spares PDF 24 |
| 11500 | Rear Derailleurs | 2001–2001 | 442 | Campagnolo RD01-MI209, Mirage 9-speed — New-generation 9-speed rear; 11–29T, 30T capacity, 14T front difference, black-chromed cage plate; 269g. | spares PDF 25 |
| 11501 | Rear Derailleurs | 2001–2001 | 442 | Campagnolo RD01-MI309, Mirage Triple 9-speed — New-generation 9-speed triple rear; 11–29T, 37T capacity, 22T front difference, black-chromed cage plate; 274g. | spares PDF 25 |
| 11502 | Shifting Brake Levers | 2001–2001 | 442 | Campagnolo EP01-RE09R / EP99-RE09L, Record Ergopower (9-speed) — 9-speed Ergopower pair with 2001-generation index geometry; composite levers/body, ball bearings; Ergo Brain ready, double/triple front control; 342g pair. Complete RH EP01-RE09R, LH EP99-RE09L. | spares PDF 31 |
| 11503 | Shifting Brake Levers | 2001–2001 | 442 | Campagnolo EP01-CH09R / EP00-CH09L, Chorus Ergopower (9-speed) — 9-speed Ergopower pair with 2001-generation index geometry; composite body, anodised alloy levers, ball bearings; Ergo Brain ready, double/triple front control; 365g pair. Complete RH EP01-CH09R, LH EP00-CH09L. | spares PDF 32 |
| 11504 | Shifting Brake Levers | 2001–2001 | 442 | Campagnolo EP01-DA09R / EP00-DA09L, Daytona Ergopower (9-speed) — 9-speed Ergopower pair with 2001-generation index geometry; composite body, anodised alloy levers; Ergo Brain ready, double/triple front control; 399g pair. Complete RH EP01-DA09R, LH EP00-DA09L. | spares PDF 33 |
| 11505 | Shifting Brake Levers | 2001–2001 | 442 | Campagnolo EP01-DA10R / EP00-DA09L, Daytona Ergopower (10-speed) — 10-speed Ergopower pair with 2001-generation index geometry; composite body, anodised alloy levers; Ergo Brain ready, double/triple front control; 399g pair. Complete RH EP01-DA10R, LH EP00-DA09L. | spares PDF 33 |
| 11506 | Shifting Brake Levers | 2001–2001 | 442 | Campagnolo EP01-VL09R / EP01-VL09L, Veloce Ergopower (9-speed) — 9-speed Ergopower pair with 2001-generation index geometry; composite body, anodised alloy levers; Ergo Brain ready, double/triple front control; 402g pair. Complete RH EP01-VL09R, LH EP01-VL09L. | spares PDF 34 |
| 11507 | Shifting Brake Levers | 2001–2001 | 442 | Campagnolo EP01-MI09R / EP00-MI09L, Mirage Ergopower (9-speed) — 9-speed Ergopower pair with 2001-generation index geometry; composite body/composite levers; Ergo Brain ready, double/triple front control; 406g pair. Complete RH EP01-MI09R, LH EP00-MI09L. | spares PDF 35 |
| 11508 | Brake Levers | 2001–2001 | 442 | Campagnolo BL01-RECGC, Record Carbon brake levers — Carbon/composite aero brake-lever assembly, 105g pair; non-Ergopower controls for separate shifting. Complete model BL01-RECGC; distinct from the earlier aluminium BL99-RECG. | spares PDF 45, range PDF 33 |
| 11509 | Brakes | 2001–2001 | 442 | Campagnolo BR01-RED, Record-D differentiated brakes — Differentiated road calipers: dual-pivot front with lighter single-pivot rear, 39-50mm reach, orbital pad adjustment, stainless ball bearings, alloy/titanium small parts; 308g pair. | spares PDF 38, range PDF 33 |
| 11510 | Brakes | 2001–2001 | 442 | Campagnolo BR01-CH, Chorus brakes — Traditional dual-pivot front/rear calipers, 39-50mm reach, orbital pad adjustment, 380g pair. New Record-derived geometry and drop-forgings; steel replaces some Record titanium/alloy small parts. | spares PDF 39, range PDF 11/34 |
| 11511 | Brakes | 2001–2001 | 442 | Campagnolo BR01-CHD, Chorus-D differentiated brakes — Differentiated calipers with Record-derived geometry/drop-forgings: dual-pivot front and lighter single-pivot rear, 39-50mm reach, orbital pad adjustment; 340g pair. | spares PDF 39, range PDF 11/34 |
| 11512 | Brakes | 2001–2001 | 442 | Campagnolo BR01-DA, Daytona brakes — Road caliper assembly, 39-50mm reach, orbital pad adjustment, 376g pair. 2001 pads shared with Record and Chorus; complete code BR01-DA. | spares PDF 40, range PDF 35 |
| 11513 | Brakes | 2001–2001 | 442 | Campagnolo BR01-VL, Veloce brakes — Road calipers, 39-50mm reach, 368g pair. New separate longer/narrower pads and matte black-anodised light-alloy pad holders with orbital adjustment; complete code BR01-VL. | spares PDF 41, range PDF 19/36 |
| 11514 | Wheel(sets) | 2000–2001 | 442 | Campagnolo WH99-SMTF / SMTR / SMCF / SMCR, Shamal (14/16-spoke) — 28in high-profile alloy wheels, 9/10-speed, 14 front/16 rear spokes, 20mm width, 100/130mm OLD. Tubular WH99-SMTF/SMTR 880/1060g; clincher SMCF/SMCR 900/1075g. Distinct from earlier 12-HPW and 16/16-spoke models. | spares PDF 73, range PDF 31/38 |
| 11515 | Pedals | 2001–2001 | 442 | Campagnolo PD01-RE, Record Pro-Fit Plus — Pro-Fit Plus clipless pedals, alloy body, titanium axle, composite fixing nut, 3 sealed bearings, floating cleats standard/fixed optional; 266g pair. New wider support, plate and springs; ErgoBrain magnet compatible. | spares PDF 63, range PDF 6/11/16/33 |
| 11516 | Pedals | 2001–2001 | 442 | Campagnolo PD01-CH, Chorus Pro-Fit Plus — Pro-Fit Plus clipless pedals, alloy body, steel axle, composite fixing nut, 3 sealed bearings, floating cleats standard/fixed optional; 316g pair. New wider support, plate and springs; ErgoBrain magnet compatible. | spares PDF 63, range PDF 6/11/16/34 |
| 11517 | Pedals | 2001–2001 | 442 | Campagnolo PD01-DA, Daytona Pro-Fit Plus — Pro-Fit Plus clipless pedals, steel axle, double-bearing system, composite axle nut, adjustable release, floating cleats standard/fixed optional; 325g pair. Wider support/new plate and springs; ErgoBrain magnet compatible. | spares PDF 63, range PDF 6/11/16/35 |
| 11518 | Cassettes | 2001–2001 | 442 | Campagnolo Record Ultra-Drive (10-speed, steel/titanium) — 2001 Ultra-Drive tooth-profile cassette, steel/titanium on alloy carrier; 11-21,11-23,12-25,13-26 or13-29T. Preassembled large-cog pairs, CS-601–605 spacers. 188g for11-23 with lockring; sold without lockring. | spares PDF 55, range PDF 5/11/16/19/33 |
| 11519 | Cassettes | 2001–2001 | 442 | Campagnolo Record Ultra-Drive Titanium (10-speed) — 2001 Ultra-Drive titanium-labelled cassette, alloy carrier, preassembled pairs, CS-601–605 spacers;11-23,12-25,13-26 or13-29T. 156g for11-23 with lockring; sold without lockring.11T top shares steel9S-011. | spares PDF 56, range PDF 5/11/16/19/33 |
| 11520 | Cassettes | 2001–2001 | 442 | Campagnolo Record Ultra-Drive (9-speed, steel/titanium) — 2001 Ultra-Drive steel/titanium cassette on alloy carrier;11-23,12-21,12-23,13-23 or13-26T per parts book, with preassembled large-cog clusters.191g for12-23 with lockring; sold without lockring. | spares PDF 57, range PDF 5/11/16/19/33 |
| 11521 | Cassettes | 2001–2001 | 442 | Campagnolo Chorus Ultra-Drive (10-speed) — 2001 Ultra-Drive nickel-chromed steel cassette on alloy carrier;11-23,12-25,13-26 or13-29T, preassembled large pairs, CS-601–605 spacers.220g for11-23 with lockring; sold without lockring. | spares PDF 58, range PDF 5/11/16/19/34 |
| 11522 | Cassettes | 2001–2001 | 442 | Campagnolo Chorus Ultra-Drive (9-speed) — 2001 Ultra-Drive nickel-chromed steel cassette on alloy carrier;12-21,12-23,13-23 or13-26T per parts book, with preassembled clusters.197g for12-21 with lockring; sold without lockring. Range table also lists11-23T. | spares PDF 59, range PDF 5/11/16/19/34 |
| 11523 | Cassettes | 2001–2001 | 442 | Campagnolo Daytona Ultra-Drive (10-speed) — Ultra-Drive10-speed steel cassette with one alloy carrier and macro-spacers;11-23,12-25,13-26 or13-29T;233g for11-23 with lockring, sold without lockring. CS-601/602/606/607 spacers. | spares PDF 60, range PDF 5/11/16/19/35 |
| 11524 | Cassettes | 2001–2001 | 442 | Campagnolo Veloce Ultra-Drive (9-speed) — 2001 Ultra-Drive chromed steel9-speed cassette, loose sprockets with CS-102 spacers;12-23,13-23,13-26 or13-28T.231g for12-23 with lockring; sold without lockring. | spares PDF 61, range PDF 5/11/16/19/36 |
| 11525 | Cassettes | 2001–2001 | 442 | Campagnolo Mirage Ultra-Drive (9-speed) — 2001 Ultra-Drive galvanised steel9-speed cassette, Veloce UD-compatible ratios12-23,13-23,13-26 or13-28T.231g for12-23 with lockring; sold without lockring. | spares PDF 61, range PDF 5/11/16/19/36 |
| 11526 | Wheel(sets) | 2001–2001 | 442 | Campagnolo WH01-PRCF / WH01-PRCR, Proton (alloy axle) — 2001 Proton clincher wheels, 28in, light-alloy axles, traditional nipples, 20mm rim width; 22 front/24 rear spokes, asymmetric rear rim, 100/130mm OLD. 685g front, 965g rear; 1650g pair. Distinct from earlier steel-axle Proton. | spares PDF 78, range PDF 30/38 |

### Existing rows: changes and restoration evidence

| ID | Prior → current source | Applied fields | Evidence |
| --- | --- | --- | --- |
| 4947 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 75, range PDF 30/38 |
| 5758 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 10 |
| 10056 | 353 → 353 | title: Campagnolo Proton (Climb-Dynamic) → Campagnolo Proton (Climb-Dynamic, steel axle); search_text: Campagnolo Proton → Campagnolo Proton; description enriched (old/new below) | guida1999 PDF 132 |
| 10091 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 26 |
| 10093 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 27 |
| 10094 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 13 |
| 10095 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 15 |
| 10096 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 18 |
| 10098 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 19 |
| 10099 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 17 |
| 10101 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 11 |
| 10102 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 11 |
| 10104 | 353 → 442 | title: Campagnolo Veloce 9-speed bottom bracket → Campagnolo BB00-AS11IT / BB00-AS11BC, AC-S (Veloce); year_to: 1999 → 2001; search_text: Campagnolo Veloce 9-speed bottom bracket → Campagnolo BB00-AS11IT BB00-AS11BC AC-S; description enriched (old/new below) | spares PDF 12 |
| 10105 | 353 → 441 | title: Campagnolo Mirage 9-speed bottom bracket → Campagnolo SC-S, cartridge bottom bracket; year_to: 1999 → 2001; search_text: Campagnolo Mirage 9-speed bottom bracket → Campagnolo SC-S cartridge bottom bracket; description enriched (old/new below) | range PDF 35/36 |
| 10106 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 49, range PDF 7/33 |
| 10107 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 49/50, range PDF 12/34 |
| 10109 | 410 → 442 | title: Campagnolo Veloce 9-speed hubs → Campagnolo Veloce hubs (9/10-speed rear); year_to: 2000 → 2001; search_text: Campagnolo Veloce 9-speed hubs → Campagnolo Veloce hubs; description enriched (old/new below) | spares PDF 51, range PDF 20/36 |
| 10110 | 410 → 442 | title: Campagnolo Mirage 9-speed hubs → Campagnolo Mirage hubs (9/10-speed rear); year_to: 2000 → 2001; search_text: Campagnolo Mirage 9-speed hubs → Campagnolo Mirage hubs; description enriched (old/new below) | spares PDF 51, range PDF 23/36 |
| 10119 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 43, range PDF 37 |
| 10120 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 44, range PDF 37 |
| 10128 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 7 |
| 10129 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 7 |
| 10130 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 9 |
| 10131 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 9 |
| 11176 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 7 |
| 11177 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 10 |
| 11178 | 410 → 442 | title: Campagnolo Daytona crankset → Campagnolo Daytona 9/10-speed crankset; year_to: 2000 → 2001; search_text: Campagnolo Daytona crankset → Campagnolo Daytona 9/10-speed crankset; description enriched (old/new below) | spares PDF 16 |
| 11179 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 13/15/16 |
| 11180 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 13/15/16 |
| 11181 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 13/15/16 |
| 11182 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 13 |
| 11183 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 13 |
| 11184 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 13 |
| 11185 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 13 |
| 11186 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 13 |
| 11187 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 13 |
| 11188 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 14 |
| 11189 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 14 |
| 11190 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 14 |
| 11191 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 14 |
| 11192 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 14 |
| 11193 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 14 |
| 11194 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 15 |
| 11195 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 15/16 |
| 11196 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 15 |
| 11197 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 15/16 |
| 11198 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 15 |
| 11199 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 15/16 |
| 11200 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 16 |
| 11201 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 16/17 |
| 11202 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 16 |
| 11203 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 17 |
| 11204 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 17 |
| 11205 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 17 |
| 11206 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 17 |
| 11207 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 18 |
| 11208 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 18 |
| 11209 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 18 |
| 11210 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 18 |
| 11211 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 19 |
| 11212 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 19 |
| 11213 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 18/19 |
| 11214 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 20 |
| 11215 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 20 |
| 11216 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 20 |
| 11217 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 20 |
| 11218 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 20 |
| 11219 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 20 |
| 11220 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 20 |
| 11221 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 20 |
| 11222 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 20 |
| 11223 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 20 |
| 11224 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 20 |
| 11225 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 20 |
| 11226 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 20 |
| 11227 | 410 → 442 | year_to: 2000 → 2001 | spares PDF 20 |
| 11228 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 21 |
| 11229 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 21 |
| 11230 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 22 |
| 11231 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 22 |
| 11234 | 410 → 442 | title: Campagnolo Chorus 10-speed front derailleur → Campagnolo Chorus 9/10-speed front derailleur; year_to: 2000 → 2001; search_text: Campagnolo Chorus 10-speed front derailleur → Campagnolo Chorus 9/10-speed front derailleur; description enriched (old/new below) | spares PDF 26 |
| 11235 | 410 → 442 | title: Campagnolo Daytona front derailleur → Campagnolo Daytona 9/10-speed front derailleur; year_to: 2000 → 2001; search_text: Campagnolo Daytona front derailleur → Campagnolo Daytona 9/10-speed front derailleur; description enriched (old/new below) | spares PDF 28 |
| 11236 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 29 |
| 11237 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 31 |
| 11238 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 32 |
| 11241 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 44, range PDF 37 |
| 11242 | 410 → 442 | title: Campagnolo Daytona hubs (9-speed rear) → Campagnolo Daytona hubs (9/10-speed rear); year_to: 2000 → 2001; search_text: Campagnolo Daytona hubs → Campagnolo Daytona hubs; description enriched (old/new below) | spares PDF 49/50, range PDF 35 |
| 11243 | 410 → 443 | title: Campagnolo Record 10-speed cassette → Campagnolo Record 10-speed cassette (Exa-Drive MK2); search_text: Campagnolo Record 10-speed cassette → Campagnolo Record 10-speed cassette | record2000 PDF 4 |
| 11244 | 410 → 443 | title: Campagnolo Record Titanium 10-speed cassette → Campagnolo Record Titanium 10-speed cassette (Exa-Drive MK2); search_text: Campagnolo Record Titanium 10-speed cassette → Campagnolo Record Titanium 10-speed cassette | record2000 PDF 4 |
| 11245 | 410 → 443 | title: Campagnolo Chorus 10-speed cassette → Campagnolo Chorus 10-speed cassette (Exa-Drive MK2); search_text: Campagnolo Chorus 10-speed cassette → Campagnolo Chorus 10-speed cassette | record2000 PDF 4 |
| 11246 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 62, range PDF 37 |
| 11248 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 72, range PDF 31/38 |
| 11249 | 410 → 442 | year_to: 2000 → 2001; description enriched (old/new below) | spares PDF 74, range PDF 29/38 |

Previous and replacement descriptions for all description rewrites (other old fields are in the table above):

- **4947** previous: `Complete Electron Climb-Dynamic wheel family with asymmetric rear rim. 2000 clincher models: WH99-ELCF front, WH99-ELCR rear, 28 inch, 9/10-speed rear; 1998 source also offered tubulars.` New: `WH99-ELCF/ELCR Electron clincher wheels, 28in, 9/10-speed; alloy 20mm asymmetric rear rim, 22/24 spokes, 100/130mm OLD, 680g front/940g rear (2001). Earlier 1998 source also offered tubulars.`
- **5758** previous: `Titanium Record seatpost; SP99-RE272T; 195 g.` New: `Titanium seatpost, 195g. Earlier Record code SP99-RE272T; now standard Chorus as SP01-CH272T. Polished titanium tube, shared alloy head; 27.2mm x 250mm. Record-to-Chorus transition stated in 2001 range narrative.`
- **10056** previous: `Campagnolo Proton, Italy. Climb-Dynamic low-profile wheel, sister of the Electron: asymmetric rear rim, tubular or clincher.` New: `Climb-Dynamic clincher wheels, steel axles and Chorus quick releases; HPW hubs described as derived from Proton 98. 700C, 20mm rim width; front 22/rear 24 round spokes; asymmetric rear rim. 684g front, 1026g rear (1999 guide).`
- **10091** previous: `Record front derailleur for 9/10-speed; braze-on or 28.6/32/35 mm band. Earlier 9-speed spec: alloy body, chromed steel cage, 15T capacity, max 54T; 89 g braze-on / 102 g clamp.` New: `Record 9/10-speed double front, alloy body/chromed steel cage; 15T capacity, max 54T; braze-on or 28.6/32/35mm band.2001:91g/104g; earlier 9s:89g/102g. Lightened cage with anti-friction insert; adjustable spring.`
- **10093** previous: `Triple front derailleur, anodized alloy body, chromed steel cage, 22T capacity; braze-on 98g, clamp 114g. Band options 28.6/32/35 mm.` New: `Triple front, anodised alloy body/chromed steel cage, 22T capacity, max 52T; braze-on or 28.6/32/35mm band. Earlier braze-on 98g, 2001 range 107g; clamp 114g.`
- **10094** previous: `Alloy crankset, 170/172.5/175 mm; 39/52, 42/52 or 39/53T. Shared crank arms for 9/10-speed; speed-specific chainrings; earlier 9-speed listing 632 g with rings.` New: `Alloy 9/10-speed crankset; 170/172.5/175mm, 39/52, 42/52 or 39/53T. Shared arms, speed-specific rings; 632g with rings. 2001 service table also lists 177.5/180mm arms; range table lists these complete-set lengths for 10s only.`
- **10096** previous: `Alloy double crankset; 170/172.5/175 mm; 39/52, 42/52 or 39/53T; 650 g with rings.` New: `Alloy 9-speed double crankset; 170/172.5/175mm; 39/52, 42/52 or 39/53T ring options. Earlier listing 650g with rings; 2001 range 659g. Exa-Drive; 111mm BB axle.`
- **10098** previous: `Alloy triple crankset; 170/175 mm; 30/42/52T; 740 g with rings.` New: `Alloy 9-speed triple crankset; 170/175mm, 30/42/52T. Earlier listing 740g with rings; 2001 range 731g.111mm BB axle, or 115.5mm with 32/35mm seat tube.`
- **10104** previous: `Cartridge bottom bracket, steel axle 111mm, alloy cups, Italian or English, 299g.` New: `AC-S cartridge bottom bracket, solid 111mm steel axle, alloy cups, Italian or English thread; 299g. Named AC-S assembly in 2001 spares; construction and weight match the earlier Veloce 9-speed listing.`
- **10105** previous: `Cartridge bottom bracket, galvanized steel cups, steel axle 111mm (double) or 115.5mm (triple), Italian or English, 358g.` New: `Sealed cartridge bottom bracket, solid steel axle, galvanised steel cups. Italian or English; 111mm for double or triple with 28.6mm seat tube, 115.5mm for triple with 32/35mm seat tube. 358g (111mm).`
- **10106** previous: `Front hub, 7075 alloy body and axle, 100mm, 28/32/36H, 181g with QR. Front hub also listed in 2000.` New: `Record front hub, 7075 alloy body/axle, adjustable bearings and lubrication port; 100mm OLD, 28/32/36H. 181g with QR (32H nominal); front assembly continues in 2001.`
- **10107** previous: `Chorus hubset; 2000 rear listed for 9/10-speed. 7075 alloy body/axle, alloy freehub; front 100 mm, 32/36H, 205 g; rear 130 mm, 326 g with QR (1999 specifications).` New: `Chorus 9/10-speed rear hubset, 7075 alloy body/axle and alloy freehub, adjustable bearings; 32/36H, 100/130mm OLD. 2001 weights with QR: 180g front/326g rear; 1999 front specification was 205g.`
- **10109** previous: `Alloy body, steel axle; front 100mm, 32/36H, 216g; rear 9-speed, 130mm, alloy freewheel body, 458g (with QR). Rear assembly also listed in 2000.` New: `Veloce hubs, alloy body, steel axle, sealed bearings, alloy freehub, 32/36H, 100/130mm OLD; 9/10-speed rear. With QR: 2001 front 241g/rear458g; 1999 front 216g/rear458g.`
- **10110** previous: `Alloy body, steel axle, cartridge bearings; front 100mm, 32/36H, 229g; rear 9-speed, 130mm, 460g (with QR). Rear assembly also listed in 2000.` New: `Mirage hubs, alloy body, steel axle, sealed cartridge bearings, alloy freehub; 32/36H,100/130mm OLD,9/10-speed rear. With QR: 2001 front226g/rear447g;1999 front229g/rear460g.`
- **10119** previous: `SL99-RE09CG; Indexed 9-speed down-tube levers, alloy, steel pivots, 74g pair.` New: `SL99-RE09CG indexed 9-speed down-tube controls, alloy levers and steel pivots, 74g pair. Compatible only with 2000 range and earlier 9-speed rear derailleurs; not native to the 2001 9-speed rear geometry.`
- **10120** previous: `SL99-BE09CG; Indexed 9-speed bar-end levers for time trial, cyclocross and triathlon, alloy, steel pivots, 163g pair.` New: `SL99-BE09CG indexed 9-speed bar-end controls for TT, cyclocross and triathlon; alloy, steel pivots, 163g pair. Compatible only with 2000 range and earlier 9-speed rear derailleurs; distinct from SL00-BE10CG.`
- **11177** previous: `Carbon Record seatpost; shares saddle-clamp service parts with the titanium Record post.` New: `Record Carbon post, composite tube and shared alloy saddle head, 27.2mm x 250mm. 2001 technical table: 180g; narrative: 160g. Shares head repair parts with the titanium post.`
- **11178** previous: `Double crankset; 170/172.5/175 mm; 39/52, 42/52 or 39/53T; separate left/right arm service codes FC-DA716 through FC-DA721.` New: `Alloy double crankset; 170/172.5/175mm, 39/52, 42/52 or 39/53T; 646g. Shared 9/10-speed FC-DA716–721 service arms; 10s uses FC-RE039/142 inners and Chorus FC-CH252/452/253 outers.`
- **11179** previous: `39-tooth inner chainring for Record/Chorus 9- and 10-speed and Daytona doubles.` New: `39-tooth inner chainring for Record, Chorus and Daytona 9/10-speed doubles; one shared code across both speed columns.`
- **11181** previous: `42-tooth inner chainring for Record/Chorus 10-speed doubles.` New: `42-tooth inner chainring for Record, Chorus and Daytona 10-speed doubles.`
- **11195** previous: `52-tooth ring for 39-tooth inner ring, 10-speed.` New: `52-tooth ring for 39-tooth inner ring, 10-speed; shared by Chorus and Daytona 10-speed.`
- **11197** previous: `52-tooth ring for 42-tooth inner ring, 10-speed.` New: `52-tooth ring for 42-tooth inner ring, 10-speed; shared by Chorus and Daytona 10-speed.`
- **11199** previous: `53-tooth ring for 39-tooth inner ring, 10-speed.` New: `53-tooth ring for 39-tooth inner ring, 10-speed; shared by Chorus and Daytona 10-speed.`
- **11228** previous: `Record rear derailleur, 10-speed.; Standard model code as printed.` New: `Record 10-speed rear, carbon outer cage plate, lightened inner plate, titanium hanger/pivot bolt; 11–26T, 27T capacity, 14T max front difference; 187g. Standard complete code.`
- **11229** previous: `Record rear derailleur, 10-speed; L variant as printed.; L model suffix as printed.` New: `Record 10-speed rear, medium-cage/L code; carbon outer plate, lightened inner plate, titanium hanger/pivot bolt; 13–29T, 30T capacity, 14T max front difference; 193g.`
- **11230** previous: `Chorus rear derailleur, 10-speed.; Standard model code as printed.` New: `Chorus 10-speed rear, lightened upper body; 11–26T, 27T capacity, 14T max front difference; 209g. Standard complete code.`
- **11231** previous: `Chorus rear derailleur, 10-speed; L variant as printed.; L model suffix as printed.` New: `Chorus 10-speed rear, medium-cage/L code, lightened upper body; 13–29T, 30T capacity, 14T max front difference; 215g.`
- **11234** previous: `Front derailleur for Chorus 10-speed; braze-on and 28.6/32/35 mm band mountings illustrated separately from the 9-speed cage.` New: `Chorus 9/10-speed double front, 15T capacity, max 54T; lightened cage with anti-friction insert. Braze-on 89g or 28.6/32/35mm band 102g.`
- **11235** previous: `Double front derailleur; braze-on and 28.6/32 mm band mountings illustrated.` New: `Daytona 9/10-speed double front, 15T capacity, max 54T; lightened cage with anti-friction insert. Braze-on 93g or 28.6/32/35mm clamp 106g.`
- **11236** previous: `Triple front derailleur; braze-on and 28.6/32 mm band mountings illustrated.` New: `Daytona 9-speed triple front, 22T capacity, max 52T. Braze-on 107g or 28.6/32mm clamp 114g; shared service diagram with Veloce double butdistincttriple cage.`
- **11237** previous: `Record 10-speed integrated brake/shift lever pair; right EP00-RE10R, left EP00-RE10L. Separate from the 9-speed pair.` New: `Record 10-speed Ergopower pair, 342g; composite levers/body, ball bearings, Ergo Brain ready. RH EP00-RE10R; 2000 complete LH EP00-RE10L, 2001 service complete LH EP99-RE09L. Separate from new-generation 9s pair.`
- **11238** previous: `Chorus 10-speed integrated brake/shift lever pair; right EP00-CH10R, left EP00-CH10L. Separate from the 9-speed pair.` New: `Chorus 10-speed Ergopower pair, 365g; composite body, anodised alloy levers, ball bearings, Ergo Brain ready. RH EP00-CH10R; 2000 complete LH EP00-CH10L, 2001 service complete LH EP00-CH09L. Separate from new-generation 9s pair.`
- **11241** previous: `10-speed bar-end shifting lever set for Chrono/Triathlon use; separate from SL99-BE09CG 9-speed.` New: `SL00-BE10CG indexed 10-speed bar-end control set for Chrono/Triathlon use, 163g pair. Distinct from the SL99-BE09CG 9-speed version, whose rear-derailleur compatibility ends with the 2000 generation.`
- **11242** previous: `Daytona front and 9-speed rear hubs, individually illustrated as complete hub offerings; no complete assembly codes printed.` New: `Daytona front and 9/10-speed rear hubs, light-alloy body/axle and freehub, adjustable bearings; 32/36H, 100/130mm OLD; 186g front/332g rear with QR (32H nominal). No complete assembly codes printed.`
- **11246** previous: `Dedicated sets for the 2000 Ghibli wheel: nine sprockets with 10-speed spacing; CS00-GH0919 11-19T or CS00-GH0911 11-21T.` New: `CS00-GH0919 11-19T or CS00-GH0911 11-21T dedicated Ghibli wheel sets: nine sprockets at 10-speed spacing, steel/titanium, 165g. Not an ordinary 9-speed cassette; 2001 specifications refer to Ghibli 132mm OLD.`
- **11248** previous: `Complete 28-inch tubular road wheels; WH99-BOTF front and WH99-BOTR 9/10-speed rear.` New: `WH99-BOTF/BOTR 28in tubular wheels, 9/10-speed rear. Carbon 50mm-profile rim with aluminium braking surface, 19mm width; 14 front/16 rear spokes, 100/130mm OLD; 725g front, 905g rear (2001).`
- **11249** previous: `Complete 28-inch wheels; WH99-NUTF/NUTR tubular front/rear or WH99-NUCF/NUCR clincher front/rear; 9/10-speed rear.` New: `WH99-NUTF/NUTR tubular or NUCF/NUCR clincher, 28in, 9/10-speed. Alloy 20mm rim, asymmetric rear, 22/24 spokes, 100/130mm OLD. Front/rear: tubular 645/895g; clincher 670/910g (2001).`

### Remaining identities — no speculative rows or links

Earlier 2000 holds remain unless explicitly resolved above, including SP00-CH272, BB99 Pista, RD99-MI309, EP00-CH09 and the older MK2 Titanium/ED-C cassette crosswalks. Seek a coded specimen or independent maker crosswalk for the following additional or continuing questions.

| Subject | Existing candidates | Evidence / remaining distinction |
| --- | --- | --- |
| AC-H 111 / 115.5mm | 10103, 10509 | The dimensions and cartridge materials do not yet identify an uncoded Athena/Racing Triple specimen. A group/code or physical crosswalk is needed. |
| Record Pista crankset | 1484, 1485, 1505 | The 165/170mm arms, ring callouts and 592g range figure do not establish continuity with an older C-Record complete crankset. |
| Veloce / Mirage double and Mirage Triple fronts | 2317, 2294, 10505 | Whole assemblies are uncoded. Repair body/cage numbers and the new Mirage black-chromed finish do not identify an earlier complete specimen. |
| BR01-MI Mirage brakes | 10115 | Compare the uncoded 1999 390g assembly with the newly styled 2001 380g offering before assigning BR01-MI or inserting a possible duplicate. |
| BR00-RE traditional Record brakes | 578 | The 2001 book repeats BR00-RE, but provides no positive crosswalk to the earlier specifically coded BR-14RE specimen. |
| WH00-SMPTF / SMPTR Shamal Pista | 10513 | Complete codes continue, but the reviewed range does not establish actual wheel spoke counts. Repair-kit quantities include spares and are not wheel specifications. |
| Record rear hub | 3268 | The earlier Exa-Drive nine-speed specimen already spans 1999–2006. A service-family heading does not prove the same physical version. |
| Record Pista hubs | 3242, 3243, 3270, 3271 | No complete assembly codes. The 240/331g, 100/120mm high-flange specification alone does not distinguish the older specimens. |
| Record eight-speed CS99 sets | 1186 | CS99-RE0823/0833/0836 repeat the 2000 codes. The 2001 262g 12–23T offering is not a demonstrated crosswalk to the older uncoded 240g 13–21T row. |
| Record C9 Ultra-Drive chain | 10126 | The earlier nickel-chrome/PTFE Record nine-speed chain may overlap the 2001 C9, 114-link/300g model. An explicit earlier code or construction crosswalk is needed before a rename or separate generation. |
| C-BA01SA Barcelona tubular rim | 4946 | 2001 specifies 15mm profile, 395g and polygonal 6082-T6 construction. The older high-profile claim is thin legacy evidence; compare profile/code before deciding whether this is continuity or a new version. |
| C-MO11SA Montreal clincher rim | 4953 | 2001 specifies 19mm profile, 420g and 622x20 construction. The earlier Montreal 76 row has 826g measured per pair. Name suffixes and weight alone do not identify another generation. |
| Ghibli road / track wheels | 6956, 6957, 6958, 7016, 7017 | No complete assembly crosswalk; road 995g and nine-cog/ten-speed spacing may differ from the earlier seven-speed wheel. Resolve the 130mm narrative versus 132mm table OLD; track 120mm/995g is not unique identity proof. Dedicated sprockets 11246 are recorded separately. |

### Validation and cleanup

- Exact old-value guards were used for every update. The three main loads affected exactly the reviewed 39 inserts/92 updates; the targeted Proton follow-up added one component and updated 10056, yielding 40/93. Readback verified every planned field, source, title/search text and retained old field; all untouched Campagnolo rows matched the saved baseline. All descriptions fit 255 characters. Each SQL file reran with zero inserted/updated rows.
- Before application, the shared generator/live comparison was simulated against all loaded catalogues; both the main change and Proton follow-up preserved mappings. The actual final report also exactly matches the baseline apart from timestamps:21,196 comparisons,21,181 unchanged and the same 15 pre-existing lost-link findings. All 40 new components have zero linked specs; no independently identified new fitment arose in the loaded bike catalogues, which predate this offering. Existing linked-spec counts on changed rows stayed unchanged.
- Final duplicate summary: {"generation": {"pairs": 31}, "configuration": {"pairs": 18}, "variant": {"pairs": 1}, "cosmetic": {"pairs": 1}}. No new duplicate/cosmetic pair.
- Task-created PDFs, renderings, extraction/proposal inventories, SQL and validation snapshots were removed after their lasting evidence, old/new values and outcomes were recorded here. The original user-provided press PDF was preserved. No pending SQL or review artifact is required to resume the remaining identity questions.
