# Ofmega catalogs processed so far

## Master headset 3063 — date correction applied 2026-11-20

The [1987 Bianchi catalogue](https://velobase.com/CatalogScans/1987Bianchi.pdf)
PDF p. 14 names Ofmega Master headsets on Squadra and Campione d'Italia.
The [February 1988 guide, scan 45](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_1988_february_-_i_componenti_da_corsa_scan_45_main_image.jpg)
lists the Master headset as light alloy and steel with caged balls, 190 g.
Both scans were read visually. Matching the model names is an inference:
Bianchi does not print dimensions, weight or a part code, and these sources
do not establish production endpoints or exclude unrecorded revisions.

Before correction 3063 was 1988–88, source 262, with three linked 1987 bike specs: Bianchi
1262/1302 and Colnago Junior Special 13005 (the latter is from the separately
attributed 1987 Colnago catalogue). The Ofmega headset duplicate report found
no groups; generator/live comparison for the Bianchi and Colnago CSVs found
540 unchanged specs and no other findings. The user approved a guarded
year_from change 1988 → 1987. One row changed; the identical rerun changed
zero. Readback confirmed 1987–88 and unchanged title, description, source,
brand, category, UUID and all three links. The full generator/live comparison
retained the same 15 previously recorded Huret Rival lost proposals, with no
gained or changed links or missing/ambiguous identities. The quality report
showed zero errors and three fewer linked-date conflicts. Restore year_from
to 1988 only after checking for later changes or fitments. The review SQL was
removed after validation.

## Gran Premio headset 9160 — date correction applied 2026-11-20

The [November 1985 guide, scan 36](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_1985_november_-_i_componenti_da_corsa_scan_36_main_image.jpg)
names `Mod. 8100 Gran Premio` in its headset table (182 g, fork 26.4 mm,
steerer 30.2 mm). The [1987 Bianchi catalogue](https://velobase.com/CatalogScans/1987Bianchi.pdf)
PDF p. 14 names an Ofmega Gran Premio headset on the Pista. Both pages were
read visually. Matching the names is an inference: Bianchi supplies no 8100
code, dimensions or construction, and the sources do not establish
manufacturing endpoints or rule out unrecorded revisions.

Before the change 9160 was dated 1979–85, source 259; Bianchi Pista spec 1162 is its sole
link. The scoped Bianchi generator/live comparison found 300 unchanged specs,
no other findings; the Ofmega headset duplicate report found no groups.
The user approved a guarded change of year_to 1985 → 1987. It affected one
row; the identical rerun affected zero. Readback confirmed 1979–87, unchanged
title, description, UUID, source, brand and category, and the unchanged 1162
link. After application, the full generator/live report covered 117 catalogues
with no gained or changed links or identity findings, and the same 15 previously
recorded Huret Rival lost proposals. The quality report showed zero errors and
one fewer linked-date conflict. To reverse, restore year_to=1985 after checking
for later changes or fitments. Disposable review SQL was removed after validation.

## Mistral specimen comparison — 2026-11-18, applied and validated

Compared all eight gallery images on each rear-derailleur record, both images
on lever 6092, all four on 6093, and the main front-derailleur/pedal specimens
with the recovered 1984 group photographs. **User-approved corrections applied
and validated below.**

| Stable row | Main-specimen distinction | Applied title |
| --- | --- | --- |
| 4356 | Fixed outer-cable stop, no barrel adjuster; metal inner cage | `Ofmega Mistral (fixed cable stop)` |
| 4357 | Round knurled cable adjuster; slotted limit screws and bright pivot hardware | `Ofmega Mistral (round cable adjuster)` |
| 6092 | Moulded lettering, smooth cable-entry profile | `Ofmega Mistral (embossed-logo levers)` |
| 6093 | Printed lettering, raised cable-entry bosses | `Ofmega Mistral (printed-logo levers)` |

Primary specimen images: [4356](https://www.velobase.com/CompImages/RDerailleur/5ACEDD48-5302-49ED-8623-76163A83AFC0.jpeg),
[4357](https://www.velobase.com/CompImages/RDerailleur/A45D6260-3923-4DD7-BFEB-EB71B8A5432E.jpeg),
[6092](https://www.velobase.com/CompImages/Shifter/116C6D66-A5FA-4499-B7BF-DD5802EED520.jpeg),
[6093](https://www.velobase.com/CompImages/Shifter/5A75C128-B5A3-4C75-AC76-4A2AB8C689B1.jpeg).
4356's gallery also contains a blue adjustable-stop specimen
([image](https://www.velobase.com/CompImages/RDerailleur/0E14EDCC-70A6-401B-AA3E-7217C7A67C61.jpeg));
it cannot date or define the fixed-stop main specimen. Lever 6092's second
image intentionally compares both lettering types. Keep the physical variants
separate; the current first/second-generation ordering is not established.

New targeted primary checks: [Bicisport March 1982 advert](https://www.disraeligears.co.uk/site/bicisport_1982_march_-_ofmega.html)
([scan](https://www.disraeligears.co.uk/site/00_main_images/bicisport_1982-03_-_ofmega_01_main_image.jpg))
shows a round cable adjuster and Phillips screws; the
[May 1983 advert](https://www.disraeligears.co.uk/site/bicisport_1983_may_-_ofmega.html)
also shows an adjustable-stop Mistral and advertises 12–32T with a footnote
marker. The 1984 article distinguishes normal/long parallelogram links and
illustrates another hardware combination. These attest Mistral configurations,
not a reliable chronology for every specimen or a 32T rating for all versions.
The archive's tentative style sequence conflicts with VeloBase's generation
prose; do not resolve it by renumbering generations or swapping dates.

Applied changes rewrite those four titles, search_text and descriptions using
the main specimens, retaining source_ref 1 and listed weights 177/195 g (no new
measurement attribution). Dates remain 4356=1982, 4357=1980, 6092=1982,
6093=NULL: these are legacy/unverified values, not newly validated dates.
No merge, component insert, material-derived date move or bike link was made. All four
rows are unused. Front rows 2417/2418 remain separate; lettering and cage pattern
must not be read from an indistinct group photograph. The 1984 resin platform
pedals accord with the Sintesi design already held as 3882; the boxed **Mistral
Pista** specimen 3883 and later alloy-cage road 2620/10994 are distinct. No
missing resin Mistral pedal row needs to be invented from the group name.

Joint load with Victory 4172 affected exactly five component rows and inserted
one Campagnolo source (464); component count remains **10,765**. Readback
verified every approved field and all untouched component metadata against the
saved baseline. All bike specs/mappings are unchanged. Full comparison: **107
loaded catalogues / 23,168 specs**, 23,153 unchanged and the same 15 pre-existing
Huret 4401 differences; no gained/changed/missing/ambiguous mappings. SQL rerun
affected **zero rows**. Descriptions are 167–192 characters; all 13 test suites
passed. All five local component-detail responses returned HTTP 200 with the
correct titles, groups and sources.

Baseline duplicate review had 14 configuration and eight generation pairs,
no merge candidates or near pairs. After renaming, the checker proposed the
lettering pair as cosmetic; registered **4356/4357** and **6092/6093** in
`REVIEWED_NOT_DUPLICATES` because cable stops and cable-entry mouldings differ.
Ofmega and Campagnolo rear-derailleur merge reports now show no candidates;
Ofmega near report remains empty. No new generic matcher rule was needed.

Restoration: 4356/6092 old title `Ofmega Mistral (1st generation)`;
4357/6093 old title `Ofmega Mistral (2nd generation)`. Old descriptions:
4356 `Ofmega Mistral (1st generation), Italy, 177 grams`;
4357 `Ofmega Mistral (2nd generation), Italy, 195 grams (Actual),according to disraeligears.co.uk`;
6092 `Ofmega Mistral (1st generation), Italy`;
6093 `Ofmega Mistral (2nd generation), Italy`. All four search_text values remain
`Ofmega Mistral`; dates, groups, source_ref 1 and UUIDs were unchanged. Reverse
the two duplicate-review registry entries only if revisiting that identity
decision. Applied SQL, snapshots and other task scratch files were removed
after validation; the lasting evidence and restoration values are here.

## Mistral advert and period tests recovered — 2026-11-18, read-only

Recovered and visually read the original-resolution scans (1560 px wide) from
the leads in source-hunts.md. Month/year attribution comes from the archive's
issue records; the isolated scans do not reproduce a dated issue cover or
masthead. Printed article page numbers are visible. No DB/source registration,
CSV or generator changes in this sourcing pass.

- **La Bicicletta, April 1984, Mistral advert:**
  [archive page](https://www.disraeligears.co.uk/site/la_bicicletta_1984_april_-_ofmega.html),
  [full scan](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_1984_april_-_ofmega_main_image.jpg).
  Shows the Mistral-labelled group: resin rear derailleur, front derailleur,
  dark levers/platform pedals, alloy crankset, hubs, BB and headset. No model
  codes, weights or numerical dimensions. The lower pedal platform and integral
  adjustable toe-stop design need comparison with existing **3882 Sintesi**;
  do not treat these as the later alloy-cage **10994 / 2620 Mistral** pedals.
- **La Bicicletta, May 1984, pp.70–71, “Ofmega Mistral”, Umberto “Lupo”
  Mascheroni:** this is a **technical article, not a second advert**.
  [Archive page](https://www.disraeligears.co.uk/site/la_bicicletta_1984_may_-_ofmega_mistral.html);
  original [p.70](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_1984_may_-_ofmega_article_scan_01_main_image.jpg)
  and [p.71](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_1984_may_-_ofmega_article_scan_02_main_image.jpg).
  Describes the rear derailleur's proprietary resin, approximately uniform
  lateral spring effort and resettable cage-spring tension. Explicitly offers
  **normal and long parallelogram links**; the long-link version is described
  shifting from a 12/13T sprocket to 31/32T. This is not a universal 32T capacity
  for every Mistral specimen. Other detail: alloy “3181” cranks, Ergal rings,
  NiCrMo BB with eleven 6.35 mm balls per side, conventional headset with
  3.965 mm balls, adjustable toe stops and pedal bearing adjustment, cartridge
  ball-bearing hubs with locknut retention and Ergal QR nuts. No component
  codes or individual weights; resin composition is not disclosed.
- **Bicisport, April 1985, pp.106–107, “Il nuovo gruppo Ofmega…”:**
  [archive page](https://www.disraeligears.co.uk/site/bicisport_1985_april_-_il_nuovo_gruppo_ofmega.html);
  original [p.106](https://www.disraeligears.co.uk/site/00_main_images/bicisport_1985-04_collaudi_il_nuovo_gruppo_ofmega_scan_01_main_image.jpg)
  and [p.107](https://www.disraeligears.co.uk/site/00_main_images/bicisport_1985-04_collaudi_il_nuovo_gruppo_ofmega_scan_02_main_image.jpg).
  The new group is **Premier**, specifically rear/front derailleurs and levers,
  rather than a new Mistral edition. Forged/tempered alloy, self-lubricating
  pivot interfaces, two return springs, shielded ball-bearing pulleys and a
  cable adjuster; quoted **350 g for the whole shifting set**, not the rear
  derailleur. Maximum rear sprocket **30T**, tested as six-speed 13–21 with
  42/53 chainrings. These are contemporary Premier facts; the article does not
  print the later Squadra suffix or prove identity with every 1988 SQ variant.

Live comparison targets: Mistral rear **4356 / 4357**, front **2417 / 2418**,
levers **6092 / 6093**, pedals **3882 / 3883 / 10994**, hubs **9494**; Premier
rear **4359**, front **2419**, levers **6094 / 6095**. The inspected Mistral
derailleur/lever specimens have no bike links; 3882 Sintesi has two.
VeloBase main photos/listings for the Mistral pairs and 3882 were compared.
4357's adjuster, large bright pivot hardware and printed lettering, and 6093's
printed lettering, prompted the detailed specimen comparison above. This is
not a settled generation crosswalk. The archive itself distinguishes
multiple link/adjuster/hardware styles, and its chronology conflicts with some
VeloBase “first/second generation” prose. Measure/compare those features before
extending an exact row's dates or assigning the article's long-link capacity.
No new resin “Mistral road” pedal row is justified before reconciling Sintesi.

The source-acquisition action is complete; its specimen comparison is recorded
above. Original URLs and findings are retained here, and task-created source
downloads were removed. Premier's 1985 versus 1988 SQ comparison is recorded in
the [applied reconciliation below](#premier-test-and-specimen-reconciliation--2026-11-18-applied-and-validated).

## R. J. Chicken & Sons trade catalogue, Ofmega section — 7 November 1979 (Ofmega/Cycle_fittings_from_R_J_Chicken_catalogue_1979-11-07.pdf, 16 pp, scan, no text layer), data_source id 181

- Source: https://www.icenicam.org.uk/library/Ofmega/Cycle_fittings_from_R_J_Chicken_catalogue_1979-11-07.pdf
  (IceniCAM). The Ofmega section (cat. pp. 19-29) of the UK distributor R. J.
  Chicken & Sons Ltd's trade catalogue; the same 7 Nov 1979 catalogue as
  Maillard (104), Selle Italia (176), Sedis (177), Vredestein (179) and
  Weinmann (180). PDF pp.: 1 index, 2 blank, 3 = cat. p. 19 (range intro and
  the 2100 / 2200 / 2300 / 2400 / 2500 titanium-series models), 4-7 = pp.
  20-23 chainwheel sets (Super Competition 1000, Competition 1100, Gran
  Premio 1200, Turismo 1920), 8 = p. 24 spares (chainrings, cranks, headsets,
  bottom brackets, tools), 9 = p. 25 quill pedals 9600 / 9650, 10 = p. 26
  alloy hubs 6000 / 6100, 11 = p. 27 photo, 12 = p. 28 steel chainwheel sets
  4000 / 3120, 13 = p. 29 steel hubs, 14 blank, 15 the pink trade price
  sheet, 16 IceniCAM cover. Nearly every page is flagged "NEW".
- First Ofmega catalogue source: all 84 prior rows (brand 33) were bare
  velobase, grouped by model (Competizione 33, CX 34, Gran Premio 35, Linea
  36, Master 37, Mistral 38, Super Competizione 39, Vantage 40, Gruppo
  Titanio 249 and others). The DB names models, this catalogue uses four-
  digit model numbers and the English spellings "Super Competition" /
  "Competition" for what the DB calls Super Competizione / Competizione, so
  matching was by model name: 1000 / 1090 = Super Competizione crank, 1100 /
  1190 = Competizione crank, 1200 / 1290 = Gran Premio, 7000 = Competizione
  and Super Competizione BB, 7100 = Gran Premio and Turismo BB, 6000 / 6100 =
  Super Competizione / Competizione hubs.
- Dated by filename (7 Nov 1979); a UK distributor listing is a first-
  appearance record, not a start date.
- Updated, source_ref -> 181: 1694 Gran Premio crankset 1980 -> 1979 and 90
  Gran Premio bottom bracket 1980 -> 1979 (descriptions rewritten from the
  1200 set and the 7100 BB); 3446 Super Competizione hub 1980 -> 1979 (6000
  spec: 495g pair); 94 Super Competizione bottom bracket and 1701 Super
  Competizione crankset (road, 1st version) NULL -> 1979-1979 (7000 BB; 1000
  set, 570g); 88 Competizione bottom bracket description only (the 7000 set
  is shared with the Super Competizione).
- Inserted (1979-1979, UUID source_id): cranksets 8775 1920 Turismo, 8776
  2100 (Gruppo Titanio, 249), 8777 4000 steel single, 8778 3120 steel double;
  bottom bracket 8779 2200 (249); headsets 8785 8000, 8786 8100 De Luxe, 8787
  8200; hubs 8780 2300 (249), 8781 5800 steel; pedals 8782 2400 (249), 8783
  9600 quill, 8784 9650 quill. The 2100-2500 series is the catalogue's
  "Titanium - the ultimate quality" set (titanium axle, spindles and bolts),
  so it uses the existing Gruppo Titanio group.
- Not inserted (price-sheet only): 1300 Super Corsa and 1400 Corsa chainwheel
  sets, 7200 Super Corsa BB, 8300 headset; a "Competition" single 48T set.
- Left alone: Competizione crank rows 1689 / 1691 (1970-80) and Competizione
  hub rows 3441 / 3440 (1970 / 1970 colour anodised), because the 1979 sets
  cannot be tied to one of the versions; Gran Premio hub 3442 (the catalogue
  lists no Gran Premio hub); Titanio headset 3062 (the catalogue shows no
  titanium headset).
- Out of scope: spare chainrings 102 / 103 / 105, 112 / 113 / 115, 122 / 123 /
  125, left cranks 109 / 119 / 129, dust caps, nuts and bolts 107 / 108,
  extractor tools 1990 / 9840, chainwheel protectors 1970 and 3950, the 2500
  titanium handlebar expander bolt, and the Rustines repair items and
  Maillard freewheel tools that share the trade price sheet.
- Unresolved: which Super Competizione crank version (1st or 2nd) the 1979
  set belongs to (assumed 1st, 1701, because the 2nd version is dated
  1980-90); Ofmega Competizione bike specs ("Ofmega Competizione" pedals, 2
  bikes) have no pedal row to link to, since the catalogue's quill pedals
  carry model numbers only.

## Ofmega "Gruppo Squadra 002000" brochure — printed 1988 (8 scans, disraeligears.co.uk), data_source id 384

- Source: https://www.disraeligears.co.uk/site/ofmega_-_gruppo_squadra.html (1560 px, legible).
  Label `Ofmega Gruppo Squadra brochure (1988)`. Dated by the back cover's "PRINTED IN ITALY 1988"
  (Italian sales F. Tagliabue & F. S.p.A., Milano). Found in the 2026-11-13 unhunted-brand sweep.
- Pages: 1 cover, 2 group overview and code list, 3 crank / BB, 4 FD / levers, 5 RD, 6 hubs,
  7 pedals / headset, 8 back cover. The group came out of the G.S. Atala-Ofmega pro team.
- Code list: 2000 Pedaliera Mistral, 2250 SQ Serie movimento Squadra, 0520 SQ Gruppo cambio Premier
  Squadra (RD 5020 SQ + FD 5120 SQ + levers 5224 / 5325; the overview prints "0520 SQ" for the whole
  set), 6000 SQ Serie mozzi Squadra, 2620 Serie pedali Mistral, 8010 SQ Serie sterzo Mistral Squadra.
- Applied 2026-11-13 (source_ref -> 384 on every changed row):
  - 1699 Mistral crankset: description rewritten from the 2000 (610 g, 165-175, rings 41-44 / 52-54).
    The Guida '96 (357) spec differs (600 g, 170-175, outer 51-54), so it is named inline. Years unchanged.
  - 10723 "Ofmega Mistral SQ" BB = 2250 SQ: year_from 1996 -> 1988; description rewritten (310 g, 36 x 24),
    with the Guida '96 spec inline (113 mm, 328 g). This settles the Guida '96 "Mistral SQ vs 93 Mistral"
    possible duplicate: they are different versions (93 is the 2250 Mistral, 305 g, Guida '85/86). Keep both.
  - 4359 Premier RD (5020 SQ, 210 g; the velobase 221 g kept), 2419 Premier FD (5120 SQ, 90 g),
    6095 Premier shifters 2nd generation (5224 / 5225, retro-friction, 70 g pair): descriptions only.
  - Inserted (1988-1988): 10993 "Ofmega 6000 SQ, Squadra" hubs, 520 g pair (not the 1996 Squadra hubs
    10772 / 10777, 140 + 233 g); 10994 "Ofmega 2620, Mistral" road pedals, 360 g (only 3883 Mistral Pista
    existed); 10995 "Ofmega 8010 SQ, Mistral Squadra" headset, roller bearings, 120 g (3064 Mistral is the
    earlier 131 g headset).
- The Premier assignments in that application are superseded by the specimen
  review below; the quoted `5225` was a transcription error for `5325`.
- No deletes. No bike_spec links: no loaded spec names a Squadra / Mistral part (the 1987 Colnago
  "SQUADRA" is a bike model). SQL: session scratchpad `squadra/ofmega-squadra-1988.sql`.

## Premier test and specimen reconciliation — 2026-11-18, applied and validated

Re-read the April 1985 Bicisport test above, the printed-1988 Squadra brochure
(source **384**, scans **2, 4, 5, 8**), the November 1985 guide (source **259**,
[scan 18](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_1985_november_-_i_componenti_da_corsa_scan_18_main_image.jpg))
and every VeloBase gallery photo for **4359 / 2419 / 6094 / 6095**. This
supersedes the earlier blanket identification of the Premier specimens as SQ
components, and the attribution of the 1988 lever specification to **6095**.
Applied the reviewed change set after the user's approval.

- **Rear:** the 1985 test shows a barrel cable adjuster and slotted limit
  screws; the 4359 specimen has a fixed stop and slotted screws; the 1988
  **5020 SQ** has a fixed stop and Allen-head screws. The test's **30T** claim
  belongs to its adjuster-equipped configuration. Its **350 g** is the whole
  shifting set. Neither figure should be assigned to 4359. Retain the generic
  Premier row rather than inventing a screw-by-screw generation chronology.
- **Front 2419:** the black-link specimen agrees with the 1988 **5120 SQ**
  photograph; the test shows silver links. Finish alone does not establish a
  different functional model. Keep the existing description, including the
  separately identified 1985 94/86 g and 1988 90 g figures, and legacy dates
  **1980–1988**. These are not newly proved production bounds.
- **Levers:** 6094 has silver solid blades, outlined lettering and D-ring
  friction adjusters; 6095 has black broad solid blades with raised edge ribs
  and small cable holes near the pivots. The brochure instead shows long
  open cut-outs, anthracite alloy, patented retro-friction and **70 g/pair**.
  The printed code on scan 4 is **5224/5325**, not the previously transcribed
  **5224/5225**. The 1985 guide prints **11.5 g each**, anodised alloy, but no
  specimen picture or code. Neither it nor the April test establishes which
  solid-blade specimen it describes. Do not retain inferred first/second
  generation dates as specimen facts.

Applied changes (three updates and one insert):

| Row | Applied change | Dates / source |
| --- | --- | --- |
| 4359 | Replace blanket 5020 SQ identification with fixed-stop/slotted-screw specimen description, retaining 221 g and explicitly distinguishing SQ Allen screws / 210 g | Keep 1984–1988 and source 384 |
| 6094 | `Ofmega Premier (1st generation)` → `Ofmega Premier (silver solid-blade levers)`; describe the photographed alloy blades and D-ring adjusters; remove unassigned 11.5 g and the claim about 6095 | 1985–1985 → NULL/NULL; source 259 → 1 |
| 6095 | `Ofmega Premier (2nd generation)` → `Ofmega Premier (black solid-blade levers)`; describe blades/ribs/cable holes; remove unproved code, retro-friction, material and 70 g assignment | 1988–1988 → NULL/NULL; source 384 → 1 |
| 11702 (new) | `Ofmega 5224/5325, Premier Squadra`; brochure's cut-out retro-friction levers, anthracite anodised alloy, single-screw fitting, assembled/greased, 70 g/pair | 1988–1988 attestation, source 384; not a claim about production endpoints |

The two retitles also regenerate `search_text` (both remain `Ofmega Premier`).
Stable IDs, specimen images, UUIDs, brand/category/group and every existing link
are preserved. No new source is needed. Searching every Ofmega shifter and
code aliases found no existing row for the cut-out model; it is visibly
distinct from both solid-blade specimens. No rows were merged.

Specimen sources: VeloBase UUIDs **D9C085B9-9A2F-49D0-B8C0-94A96546E281**
(6094), **C8ECAC56-6FFF-4190-B7D3-D60A26407102** (6095),
**4C8CF807-E3F6-4719-8AFA-82768C91727D** (4359) and
**CC6B636B-A6DB-46E0-ABAD-307F50F31755** (2419). Direct comparison images:
[silver levers](https://www.velobase.com/CompImages/Shifter/CC72F9A4-A7E2-4CCD-961C-CF34708A733F.jpeg),
[black levers](https://www.velobase.com/CompImages/Shifter/F3B1AF43-8F95-4CEE-B209-41368822DBE4.jpeg),
[SQ levers/front](https://www.disraeligears.co.uk/site/00_main_images/ofmega_-_gruppo_squadra_scan_04_main_image.jpg),
[SQ rear](https://www.disraeligears.co.uk/site/00_main_images/ofmega_-_gruppo_squadra_scan_05_main_image.jpg).

The four existing links are generic `Ofmega Premier, Colnago signed` on 1986
International and 1987 Classic International: specs **5369/5370/12988/12989**
to **2419/4359**. They do not establish SQ codes and are retained at model
level. There are no linked Premier lever specs. A read-only simulation of the
retitles and added row across **107 loaded catalogues / 23,168 specs** preserved
every mapping and the exact finding list: 23,153 unchanged and the same 15
pre-existing unrelated Huret 4401 differences; no new gained/lost/changed or
ambiguous mappings. Post-load validation reproduced the exact same result.
All saved descriptions fit 255 characters. Readback compared every component's
metadata and image hash against the pre-load snapshot: exactly the three
approved updates and the one new row, with every other component unchanged.
Every live bike_spec row, including timestamps and the four Colnago links,
was unchanged. SQL rerun affected **zero** rows.

New row **11702** has UUID **468d1735-0d22-4d9a-974c-fcf785b14b89**. Duplicate
review retained 6094/6095 as physically distinct variants and 11702 as the
separately coded cut-out model; the three pairs are recorded in
`REVIEWED_NOT_DUPLICATES`. The Ofmega near-pair report was empty; no Premier
merge candidates remained. All **13 test suites passed**, and local
`/componentdetail` checks for 2419/4359/6094/6095/11702 confirmed the correct
titles, dates, sources and groups. The temporary local API was stopped.

The task scratchpad, including SQL, snapshots and downloaded comparison scans,
was removed after validation. Source URLs and material old/new values are
retained above. Any restoration should use those values, preserve existing
specimen UUIDs, and remove new UUID 468d1735-0d22-4d9a-974c-fcf785b14b89 only
after checking for references. No bike links were changed.


## Performance 1985–86 reconciliation — applied 2026-11-18, source 462

Consolidated shared 7000 BB **94→88**, retaining the measured 320g/116.5mm specimen, preserving identity UUID and making group NULL for the shared groups. Competizione/CX hubs and CX double/triple cranks received the approved availability/detail updates. [Exact old/new values, retired/new UUIDs and validation](cross-catalog-notes.md#performance-fallwinter-198586-reconciliation--applied-2026-11-18). Readback matched, SQL rerun changed zero rows, all 107 loaded catalogues retained their mappings, all 13 tests passed and whole-DB quality stayed unchanged with zero errors.
