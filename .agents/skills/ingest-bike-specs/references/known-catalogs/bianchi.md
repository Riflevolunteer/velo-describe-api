# Bianchi catalogs processed so far

## 1991 and 1992 US catalogue inventory — 2026-11-21

Live readback found the 1991 and 1992 Japanese catalogue sources 358 and
359. The following US catalogues give different market fitments and use
separate edition identities, even where the model names coincide.

- **1991.** The [24-page archive PDF](https://www.bikecatalogs.com/download/2798)
  prints 1991 Bicycles on the cover. The US-market warranty footer on PDF
  p. 19 is clearer in the [Gringineer photographs](https://www.gringineer.com/blogs/default-blog/1991-bianchi-catalog).
  The photos are the eight product pages (PDF pp. 12–19) and the geometry
  page (PDF p. 22). The complete sequence also has the covers, catalogue
  introduction and accessories. Both scans agree on the printed layouts.
  Handwritten prices in the archive copy are dealer annotations.
- **1992.** The [24-page archive PDF](https://www.bikecatalogs.com/download/2799)
  prints Bianchi USA, Inc., South San Francisco and code MB92 on p. 24.
  PDF p. 22 prints the 1992 copyright and US-market warranty. The
  [Gringineer photographs](https://www.gringineer.com/blogs/default-blog/1992-bianchi-catalog)
  corroborate the product pages. PDF pp. 12–15 cover Project/Cross-Terrain,
  pp. 16–19 Road Racing, and pp. 20–22 Mountain. The geometry and
  accessories follow on pp. 23–24.

For 1992 the complete in-scope builds are the drop-bar **Equinox and
Volpe** (p. 15), **TSX and SBX** (p. 16), **Giro, Virata and Alfana**
(p. 17), **Campione, Eros and Forza** (p. 18), **Europa and Premio**
(p. 19), **Super Grizzly and Grizzly** (p. 20), **Peregrine, Osprey
and Ibex** (p. 21), **Nyala and Ocelot** (p. 22). TSX and SBX have complete
builds and optional framesets. Exclude the flat-bar Project-7, Project-5,
Project-3, Backstreet, Boardwalk, Advantage, Main Street and Avenue, and
the component-free MiniMax frameset. The Ocelot adult model is in scope
and its junior wheel-size option is listed within the same block.

### 1992 US preparation complete — 2026-11-22

Transcribed the scoped builds from MB92 pp. 15–22 into
`bike_specs/1992_bianchi_us_spec.csv`. The ten road builds use the same
Road category as the US 1991 and Japanese 1992 inputs. The Grizzly's
explicit Logic Pro bottom bracket has its own field. The top-pull marking
on the Shimano mountain groups is carried on the front derailleur entry.
Equinox has no separately specified rear derailleur, and the Ocelot
adult, mixte and junior options remain in its single printed build.

Live preflight found only the eight 1992 Japanese bikes, all on source
359, and verified that the 23 used spec labels already exist at their
current sort positions. The reviewed SQL references one new US catalogue
source with the scan citation, 19 bikes and 398 unique specs, with 191
supported component links. Preparation is complete and the SQL is ready
for import review at
`/private/tmp/velo-backlog-20261122/1992-bianchi-us-reviewed.sql`.
The live database has no import from this edition.

- Bianchi pp. 16–17 and the [Shimano '92 dealer manual](https://www.bikecatalogs.com/download/4273),
  printed pp. 49–53, support FH-6402-HG, CS-HG90-8 and the 6401
  derailleurs for the eight-speed SBX, Giro and Virata. SBX and Giro
  have ST-6400 integrated controls. Virata has separate aero levers
  and eight-speed down-tube shifters.
- Shimano printed pp. 1–5, 10–21, 34–35 and 61–62 support the XTR
  eight-speed Super Grizzly, top-pull Shimano mountain front mechs
  and distinct RX100 double/triple builds. The 1992 SunTour [maker catalogue](https://www.equusbicycle.com/bike/suntour/catalog92/index.html)
  supports FD-TP10-GXH for Equinox's top-pull XC-Comp and FD-TP05-GXH
  for Volpe's FS-E combination, plus CS-AP10 PowerFlo for their
  respective 12–28T silver and 12–30T black cassettes.
- TSX's uncoded Athena brakes, crank and front derailleur have overlapping
  candidates or an unresolved mount. Bianchi's house-brand tyres and
  the generic hubsets, brake levers and some cassette descriptions remain
  without exact matches. Grizzly's 26×2.1 Kevlar Smoke Comp stays as
  printed text. The US Grizzly's Shimano XT 32H/7-speed equipment does
  not identify 1991 Japanese Grizzly specs 19546/19547.
- The listed Nitto Dynamic-II, black 3T AR84, Avocet Racing and Avocet
  R20 GelFlex are later fitment attestations than the current ends on
  rows 6614, 8296, 5250 and 5249. The review preserved component dates.
  The SQL uses reviewed edition-level matches without a matcher change.
  Use the reviewed SQL for this edition. A fresh default generation
  requires reconciling the reviewed decisions before its output is applied.

### 1991 Ocelot XCU links — applied 2026-11-26

The 1991 US Ocelot (bike 1544) lists XCU Balance Response brakes, XCU 48/38/28T Powering crank and XCU derailleurs. [SunTour 1991 p. 14](https://www.disraeligears.co.uk/site/00_main_images/suntour_bicycle_equipment_catalog_1991_-_page_14_main_image.jpg) lists CT-XU00, CW-XU00 48/38/28, and RD-XU00-GXB/GXZ. User-approved group-and-year inferences applied: spec 26792 NULL to 8039, 26793 NULL to 8005, 26796 NULL to 12284. Bianchi does not give codes; substitutions and earlier stock remain possible. The maker group lists six-speed controls while this bike specifies seven speeds, so rear fitment in particular is an inference, not a coded confirmation. Restore each link to NULL guarded by its new ID and remove its scoped generator override if later superseded.

Correction: the original [1991 SunTour catalogue](https://sscycleworks.com/galleries/bike-museum/SunTour-91-catalog-compressed.pdf), printed p. 14, visually reads **FD-XU00-GXH**, matching component 7963. The earlier FD-XU01-GDH claim was an automated transcription error. Bianchi itself says only XCU; user approved the group-based inference spec 26795 NULL → 7963, now applied with a scoped generator override. Readback confirmed 7963 and source 508; guarded SQL replay changed zero rows. The 118-catalogue comparison retained the same 15 unrelated Huret losses with no gains or changes, and the link-decision test passed. Restore to NULL guarded by 7963 and remove the override if later superseded. No brake lever is separately specified by Bianchi. The three earlier links were also validated with scoped overrides and a zero-change SQL replay.

**X-Press shifter follow-up:** Bianchi prints seven-speed Accushift Plus Express without a model code. The [1992 SunTour XCU catalogue](https://ebykr.com/library/suntour-catalog-1992/) lists SL-XM10-R7 right/index and SL-XM10-L left/power as its seven-speed X-Press pair; SL-XU01-R7/L are a separate shift-lever pair. User approved spec 26797 NULL → 7972 as a fitment inference; 1991 XCU's own printed X-Press option is six-speed. Applied and added Ocelot/year-scoped generator mapping; source 508 preserved. Readback confirmed 7972, SQL replay changed zero rows, 118-catalogue comparison retained the same 15 unrelated Huret losses and no gains or changes, and link-decision test passed. Restore spec to NULL guarded by 7972 and remove the override if superseded.

**Nyala shifter follow-up:** 1991 Nyala spec 26777 also reads Accushift Plus Express and specifies a seven-speed cluster. The [1991 SunTour catalogue](https://sscycleworks.com/galleries/bike-museum/SunTour-91-catalog-compressed.pdf), printed p.14, lists the seven-speed SL-XM10-R7 / SL-XM10-L X-Press pair for XCM. User approved NULL → 7972 as a group-and-gearing inference; Bianchi does not give the code. Applied with scoped generator mapping; readback confirmed Nyala and Ocelot both link 7972 with source 508 preserved. Guarded SQL replay changed zero rows; comparison of 118 catalogues retained the 15 unrelated Huret losses with no gains or changes, and link-decision test passed. Restore Nyala to NULL guarded by 7972 and remove its scoped override if superseded.

**Accushift cluster follow-up:** User approved Ocelot spec 26802, Nyala spec 26782 and Ibex spec 26762 NULL → 7994 FW-AL10-K7, black seven-speed 13–30T, based on their XCU/XCM/X-1 groups, year and gearing. The Bianchi catalogue does not specify mechanism, finish or part code; 11019 is a silver threaded seven-speed alternative, so these are inferences. Scoped generator mappings cover only these 1991 bikes. Readback confirmed the links and unchanged source 508; Volpe remains NULL. Guarded SQL replays changed zero rows; 118-catalogue generator comparison retained the 15 pre-existing Huret losses and no gains or changes; link-decision test passed. To restore, set the relevant spec to NULL guarded by 7994 and remove its scoped override.

**Ibex X-Press follow-up:** User approved spec 26757 NULL → 7970, SL-XL10-R7 / SL-XL10-L, as an X-1 seven-speed X-Press group inference. Bianchi does not provide the model code; the [SunTour catalogue](https://ebykr.com/library/suntour-catalog-1992/) lists XL10 for X-1 and the component is dated 1991–93. The two Ibex updates each affected one row; readback confirmed both and source 508, guarded replay changed zero, all 118 catalogue comparisons retained the same 15 unrelated Huret losses with no gains or changes, and the link-decision test passed. Restore 26757 to NULL guarded by 7970 and remove its scoped override if superseded.

### 1991 US import applied and validated

**Osprey front derailleur follow-up:** US bike 1541 spec 26735 `Shimano Deore-LX, Top Pull` linked NULL → 2491 FD-M550 at user request. [Shimano 1991 p.64](https://www.disraeligears.co.uk/site/shimano_bicycle_system_component_-_91_page_64.html) lists the FD-M550 family and mentions a pull-top type; Bianchi does not specify its code, so this is a group/year fitment inference and the reference does not identify a more specific suffix. The Japanese Osprey spec 19595 already links 2491. Added US Osprey-scoped generator mapping; readback confirmed 2491 and source 508, replay affected zero rows, 118-catalogue comparison retained the 15 unrelated Huret losses and no gains or changes, and the link-decision test passed. Restore 26735 to NULL guarded by 2491 and remove the scoped override if superseded.

**Osprey cassette follow-up:** US bike 1541 spec 26742 says Shimano Hyperglide 12–28T seven-speed cassette; Japanese Osprey spec 19601 explicitly names CS-HG70 12–28T and links 7567. [Shimano's 1991 group table](https://vintagecannondale.com/cannondale/shimano/Shimano91e.pdf) lists CS-HG70 for Deore LX. User approved NULL → 7567 as a group-and-gearing inference, since the US catalogue does not give the code and the Japanese edition is a separate build. Applied with scoped generator mapping; readback confirmed 7567 and source 508, guarded replay changed zero rows, the 118-catalogue comparison retained the 15 unrelated Huret losses with no gains or changes, and link-decision test passed. Restore to NULL guarded by 7567 and remove mapping if superseded.

Source CSV `bike_specs/1991_bianchi_us_spec.csv` preserves the printed
sizes, weights, finish and equipment by build. The generator creates a
separate `1991 Bianchi (US) catalogue` source with market US and the
original scan citation. The Japanese edition uses source 358.

- PDF p. 14 has Equinox, Axis and Volpe with drop bars and Command shifters.
  The catalogue classifies these as Cross-Terrain and expressly describes
  flat- and drop-bar versions on p. 11. The drop-bar road-type models follow
  the 1989 scope precedent. Excluded six flat-bar builds on pp. 12–13
  (Project-7, Project-5, Backstreet, Boardwalk, Advantage and Main Street).
- PDF pp. 15–16 give the complete Proto, Virata, Alfana, Eros, Forza and
  Premio builds. Forza combines Exage 500EX shift hardware with 400EX
  braking and crankset. Premio is 300EX in this edition. PDF pp. 17–19
  give Grizzly, Peregrine, Sika, Osprey, Ibex, Nyala, Ocelot and Pista.
  Ocelot has one adult build with an additional mixte size. The separate
  Proto frameset on p. 19 is outside scope.
- Axis explicitly specifies a 12–28T cassette. The [1991 SunTour maker
  catalogue](https://sscycleworks.com/galleries/bike-museum/SunTour-91-catalog-compressed.pdf),
  printed p. 9 (PDF p. 11), shows the seven-speed 36H FH-XC00-7, the
  12–28T CS-AP00-S7 cassette and CH-AP10 chain, with CW-XC01 crankset;
  p. 8 lists the FD-XC10-GXH front derailleur. Live Axis bike 1530 links
  to 1216 (cassette spec 26514), 1419, 7999 and 11021. The
  [component follow-up](#1991-us-component-follow-up--applied-and-validated)
  linked hub spec 26512 to FH-XC00-7 (12229).
- The 1991 maker catalogue also lists XC-Pro CW-XP01, the two-finger
  BL-XP00-S and the Grease Guard HS-XP01 on printed pp. 6–7. Its parallel
  threaded and freehub options leave Equinox and Grizzly without a safe
  hub or cluster link. This US Grizzly's 32H specification does not settle
  the separately sourced Japanese specs 19546/19547.
- The [1991 Shimano dealer catalogue](https://vintagecannondale.com/cannondale/shimano/Shimano91e.pdf)
  supports the Ultegra, 105SC, Deore DX and LX group matches. Kept the
  US Virata's printed Dynamic-II stem and mapped spec 26563 to Nitto
  Dynamic-2 6614. The bike import preserves existing component dates.
- Equinox and Axis 287 levers were linked NULL → 8951 after the 1994 Dia-Compe grouped lever record was separated on 2026-11-27; specs 26483/26504 retain source 508, and exact scoped overrides reproduce the links. The
  uncertain Accushift Plus 12–28T / 13–30T clusters other than Ocelot, Nyala and Ibex and Pista's explicit
  16T fixed sprocket (26822) stay unlinked. The Grizzly and other
  same-name builds retain their edition-specific text. Names such as
  Command and generic grip, housing and frame specifications keep their
  catalogue wording where the version or component identity is unclear.
- The user approved group-and-year SunTour matches for Ibex XCE brakes and
  crank (26752/26753), Nyala XCT brakes and crank (26772/26773), and the Nyala
  XCM rear (26776). The catalogue prints no component codes; these links are
  inferences. Nyala's top-pull XCM front 26775 remains NULL. [Model evidence,
  old links and validation](../../../ingest-component-catalog/references/known-catalogs/suntour.md#full-range-follow-up--applied-and-validated-2026-11-22).

Applied on user approval on 2026-11-21. Added source **508** (US),
bikes **1529–1545** and **350** specs with **129** component links. All
350 specs reference source 508. The import reused 22 existing labels and
the Bianchi brand. Readback matched the approved generator output for
every new spec. The whole-database comparison covered 24,829 specs,
with the same 15 pre-existing lost proposals and zero gained, changed,
missing or ambiguous identities. The Japanese sources 358 and 359
retained their prior bike, spec and link counts. The identical SQL
rerun affected zero rows. All 14 test files passed before loading.

The structural audit reported zero errors. The only new findings were
15 linked-date review flags for the approved fitments. Affected
component IDs are Axis 7999/11021/1419, Volpe 275/9016, Proto 11791,
Virata 6614/416, Grizzly 3138, Nyala and Ocelot 11069, and Pista
3060/1702/3880/5497. The component follow-up below cleared these flags.
For restoration, verify dependencies on source 508,
then remove only the 508 specs and bikes before removing that source.
The source CSV remains in `bike_specs/`.

### 1991 US component follow-up — applied and validated

The [1991 SunTour catalogue](https://www.disraeligears.co.uk/site/suntour_bicycle_equipment_catalog_1991.html)
lists FH-XC00-7 under XC-Comp on [printed p. 9](https://www.disraeligears.co.uk/site/suntour_bicycle_equipment_catalog_1991_-_page_9.html).
It specifies 32H or 36H, 130 or 135 mm, quick release and 473 g for the
36H/130 mm hub. Bianchi PDF p. 14 lists the Axis with a 36H XC-Comp hubset
and specifies a 12–28T seven-speed cassette. Together those details
support linking spec 26512 to the listed rear freehub. Its cassette spec
26514 already points to the compatible family (1216). The catalogue does
not give the Axis's rear spacing. The 1990 shared FH-XP00-7U (11016),
1989 XC 9000 FH-XC10-U7/R6 (3624) and 1992 FH-XC02-7 (7982) are separately
coded rows. Component 12229 uses the 1991 attestation for both date
bounds and the same brand, category and group as 7982.

| Source and fitment | Component | Previous range and source | Applied range |
|---|---|---|---|
| SunTour p. 7 | 3138 HS-XP01-J/I | 1980–1990, source 1 | 1980–1991 |
| SunTour p. 8, Axis | 11021 FD-XC10-GXH | 1990–1990, source 385 | 1990–1991 |
| SunTour p. 9 | 7980 HB-XC02-F | 1992–1993, source 278 | 1991–1993 |
| SunTour p. 9, Axis | 7999 CW-XC01 | 1992–1993, source 278 | 1991–1993 |
| SunTour p. 9, Axis | 1419 CH-AP10 | 1990–1990, source 385 | 1990–1991 |
| SunTour p. 23, Nyala/Ocelot | 11069 CH-AP50 | 1990–1990, source 385 | 1990–1991 |
| Bianchi PDF p. 14, Volpe | 275 Dia-Compe AC250S/BRS300 | 1989–1989, source 447 | 1989–1991 |
| Bianchi PDF p. 14, Volpe | 9016 Sansin AE-60/AE-60S | 1987–1987, source 234 | 1987–1991 |
| Bianchi PDF p. 15, Proto | 11791 Vittoria Oscar X | 1989–1990, source 471 | 1989–1991 |
| Bianchi PDF p. 15, Virata | 6614 Nitto Dynamic-2 | 1989–1990, source 159 | 1989–1991 |
| Shimano 1991 German road specification chart | 416 BL-6401 aero lever | 1988–1990, source 79 | 1988–1991 |
| Bianchi PDF p. 19, Pista | 3060 Ofmega Competizione headset | 1980–1990, source 262 | 1980–1991 |
| Bianchi PDF p. 19, Pista | 1702 Ofmega Super Competizione track crankset | 1980–1990, source 1 | 1980–1991 |
| Bianchi PDF p. 19, Pista | 3880 Ofmega Master Pista pedals | 1980–1990, source 1 | 1980–1991 |
| Bianchi PDF p. 19, Pista | 5497 Selle Italia Mundialita | 1985–1990, source 262 | 1985–1991 |

SunTour p. 7 specifies 26 × 5/32 in balls, 37 mm stack, 125 g and JIS or
English/Italian race dimensions. The headset description uses those maker
figures in place of the VeloBase 20 × 3/16 in specification. Dia-Compe
March 1989 p. 1 explicitly maps the BRS300 aero lever to AC250S. The printed
Sansin fitment establishes the AE-60 member of row 9016 and the Pista
establishes the Mundialita model in a celeste finish. The Bianchi pages
support availability in 1991. Earlier imported dates and the scope of the
later variants remain as recorded. The separate [Shimano German component
brochure](https://vintagecannondale.com/cannondale/shimano/Shimano91e.pdf)
lists BL-6401 with the 600 Ultegra BR-6400 in the road specification chart.

Applied on 2026-11-21. Source 509 covers the six SunTour rows and the
new freehub. The eight Bianchi-backed date changes use source 508.
Source 510 supports the Shimano lever. Live spec 26512 and the scoped
generator rule point to 12229. The full 24,829-spec comparison matched
the pre-change report, including the same 15 existing lost proposals.
The date audit removed the 15 Bianchi flags (277 → 262 database-wide),
with zero structural errors or new findings. The SunTour hub duplicate
scan found no near pairs. All three SQL files affected zero rows on
replay. All 14 test files passed.

To reverse this batch, verify dependencies, restore the old ranges and
sources in the table, and restore the old headset description recorded
in the [SunTour notes](../../../ingest-component-catalog/references/known-catalogs/suntour.md#1991-bicycle-equipment-catalog--targeted-reconciliation).
Restore the Axis rule and spec link to NULL before removing component
12229, then check sources 509 and 510 for remaining references.

## 1994–99 catalogue source review — 2026-11-21

Downloaded the archive PDFs, counted their pages, checked the page sequences
and inspected representative specification pages and market evidence. The live
source register has no Bianchi 1994–99 entry. The pages below are PDF page
numbers. Full model inventories and transcription are pending.

| Source | Edition evidence | Specification coverage and condition |
| --- | --- | --- |
| [1994, 23 pages](https://www.bikecatalogs.com/download/2801) | English North American range. Rear cover names Bianchi USA and Bianchi Canada and carries code M694. | Road, Reparto Corse, MTB and cross-terrain blocks with specs beside the models. Legible. Some handwritten dealer prices. |
| [1995, 28 pages](https://www.bikecatalogs.com/download/2802) | English Bianchi USA range. Rear cover also lists Canadian and Australasian offices. The 110th anniversary model and 1994 race results support the archive's 1995 dating. | Legible consolidated specification tables on pp. 23–27, following geometry on p. 22. |
| [1996, 23 pages](https://www.bikecatalogs.com/download/2804) | English Bianchi USA, ©1996 on p. 23. | Legible road/MTB/cross-terrain tables on pp. 16–22. Several PDF pages are spreads. |
| [1996 Austrian-distributed, 33 pages](https://www.bikecatalogs.com/download/2803) | German-language copy with Thalinger GmbH of Wels printed on the rear cover (PDF p. 1), plus its separate Austrian price sheet effective 1 January 1996 (p. 33). | Illustrated specs, including road pp. 7–13, and model tables on pp. 31–32. Use the insert only for explicitly listed Austrian variants. |
| [1997, 24 pages](https://www.bikecatalogs.com/download/2805) | Cover-dated Japanese 1997 catalogue on pp. 1–19. Pp. 20–24 append different covers and sample pages, including an English 1997 product guide. | Main model images are about 320 px wide. Models such as Neuron Chorus are identifiable, but the component tables are too soft for reliable transcription. |
| [1998, 31 pages](https://www.bikecatalogs.com/download/2806) | English Bianchi USA, in-catalogue 1998 text and Hayward imprint. The [Upcycles archive](https://upcycles.cc/blogs/catalog-archive/1998-bianchi-catalog-usa) also identifies this edition. | Legible model specs and geometry on pp. 29–31, including Alloro, Veloce, Campione, Eros, Trofeo, Premio, San Remo and Volpe on p. 29. |
| [1999, 20 pages](https://www.bikecatalogs.com/download/2807) | Cover-dated Japanese 1999 road catalogue. Some pages are rotated. | Model names and photographs survive. Small Japanese build tables remain blurred at their native image size. |

The [collector's catalogue thread](https://www.bikeforums.net/classic-vintage/1245218-bianchi-catalog-treasure-trove-plus-other-stuff.html)
reports a full US-market scan run through 1998 and a 1999 USA scan in post 8.
The album and 1999 cover attachment were not retrievable. A new public copy
of that album or sharper originals would reopen the 1997/1999 search.

On 2026-11-22 all 33 rendered pages matched the [Rennrad-News copy](https://www.rennrad-news.de/forum/attachments/bianchi-katalog-1996-pdf.440144/).
The Thalinger imprint is part of the rear-cover layout and establishes
Austrian distribution for this copy. PDF p. 30 lists both Piaggio Deutschland
and Thalinger Austria among Bianchi's international distributors. Treat this
copy as Austrian-distributed and keep its illustrated range separate from the
North American source. The insert explicitly mentions an Austrian equipment
specification. For example, its SL 470 has an XT Mix/Grip build while p. 31
shows an LX transmission, hubs and crankset with XT brakes. Preserve the
printed specifications with their respective page evidence. The price sheet
alone cannot supply the unprinted fields of a local build. No import applied.

The archive's [1985 PDF](https://www.bikecatalogs.com/download/2790) is the same
five-page introductory/photographic fragment described below. The collector's
[1985 USA specification photo in post 25](https://cimg1.ibsrv.net/gimg/bikeforums.net-vbulletin/1743x1860/73473a67_f7c6_4518_91f3_f4bcd24ec310_b574c54d05b023781a243cb673363d44a8de138d.jpeg)
supplies a legible right-hand table with ten rows, including hubs, shifters,
derailleurs, gear clusters, rims and tyres. The photo omits the left half
that identifies each model and supplies frame, crank and brake specifications.
Its English text, CPSC notation and pound weights support US-market treatment.
The matching left half or full album is needed to align the rows and establish
whether the photo belongs to the exact brochure represented by the fragment.
Visual follow-up on 2026-11-22 checked all five attachments in that post.
The other four show a later Bianchi geometry sheet, two Campagnolo sheets
and a Mercian brochure. They supply no model labels for this table.

### Early and 1997 source follow-up — 2026-11-22

The [Ruko of Canada catalogue, PDF p. 94 / printed p. 97](https://www.berettaweb.com/Beretta%20Catalogs/Catalogs/1974_Ruko_%26_Beretta_Catalog.pdf#page=94)
is the 1974 Canadian distributor source. PDF p. 1 prints 1974 and p. 2
gives the Streetsville, Ontario imprint. The sole explicitly branded
Bianchi build on the bicycle pages is the ten-speed Specialissima
Professional, with Campagnolo Record equipment, Regina Oro chain and
freewheel, TTT bars, Cinelli Record Unica and Clement or Pirelli tubular
equipment. The block supplies model/period availability rather than exact
Campagnolo or Regina part numbers. The rest of the bicycle section is
Chiorda. This satisfies the 1974 source lead for this one build. A broader
1974 manufacturer specification table remains useful.

[Roadworks' 1997 catalogue photographs](https://oli-roadworks.blogspot.com/2010/)
include a legible Super GY product block, naming Rock Shox Super Deluxe
and Judy DH, White Industries front hub and forged crank, and Shimano
XT shifters and V-brakes. The publisher describes a New Zealand importer
context for the copy. The photographs do not include the full US
component tables or establish its market imprint. Keep the existing
US and Japanese recovery action for the full ranges.

### 1993 Reparto Corse edition recovered — 2026-11-22

[Upcycles' complete 52-page Bianchi Reparto Corse scan](https://cdn.shopify.com/s/files/1/0786/6705/5385/files/1993_Bianchi_Reparto_Corse_catalog.pdf?v=1755877446)
is a separate bilingual Italian/English range. PDF p. 52 gives Bianchi
Reparto Corse's Treviglio, Italy imprint and shows the 1992–93 world-champion
badge. Year-suffixed frame names on pp. 8–12 include Cromor 93, SBX 93,
TSX 93, EL 93 and Genius Road 93. The catalogue includes frames and
complete builds. Road and track specifications are on PDF pp. 19, 21,
23, 25, 27, 29, 31, 33, 35 and 37. MTB geometry/frames appear on pp. 39–41,
with complete-build tables on pp. 43, 45 and 47. The bilingual EL Pista
Record table on p. 35, for example, gives Campagnolo Pista Record, FIR
Alcor rims and the option of SBX Pista or EL Crono Pista frame variants.
The print and model range differ from source 47, the loaded US edition.
This fulfils the separate-edition acquisition action. The Italian imprint
identifies the publisher and the scan does not assign a sole sales market.
No source row, bike or component was written from this edition.

## Source backlog reconciliation — 2026-11-20

Live catalogue readback and existing notes confirm the 1991/1992 Japanese
editions and 1993 US edition are already loaded (see their sections below).
The broad TODO request for 1991–99 sources was stale: remaining year gaps are
1994–99, alongside 1974–77 and 1979–80. A 1991–93 acquisition is useful only
when it establishes a different market/edition, not another mirror of these
loaded catalogues. The source review above supersedes the 1994–99 acquisition
status. The 2026-11-22 recovery above fulfils the distinct 1993 edition request.

## Cluster review — 2026-11-20

**Applied and validated on user approval.** Pre-change live readback: specs18494 (Sport SX, bike1083, 1989, source325),18682 (Tangent, bike1092, 1989, source325) and1740 (Ocelot, bike112, 1993, source47) are all NULL under Cassette label48. This review supersedes the older unresolved-mechanism/missing-table statements below for these three cluster entries only; it does not verify other fields or every product table.

- **Sport SX 18494:** the [1989 specification table](https://cdn.shopify.com/s/files/1/0661/0501/6425/files/img-2486-2.jpg?v=1764982608) prints a silver Shimano 13–24T seven-speed cassette, UG50 chain, RM-50 hubs and Sport LX SIS. On 2026-11-22, Shimano's manual and a same-year Club Fuji specification established the silver 13–24T **CS-1000-7**, now component **12237**. A Shimano service sheet also lists FH-RM50 in seven-speed combinations. CS-1000-7 is the leading candidate. The Bianchi table gives no cassette code, so 18494 remains NULL pending a coded original cassette or Bianchi parts list. [Component evidence](../../../ingest-component-catalog/references/known-catalogs/shimano.md#cs-1000-variants-and-fh-rm50--applied-and-validated-2026-11-22).
  - **Fitment follow-up, 2026-11-22:** the [25-page US store copy](https://www.bikecatalogs.com/document/2796) repeats the uncoded entry on PDF p. 24. The pearl-white bike on PDF p. 10 is hand-corrected to Sport SX and lists Sport LX 14-speed SIS, but the photo cannot identify the cassette. Page 24 explicitly calls the Super Grizzly cassette Hyperglide and omits the term for Sport SX. Shimano's [Santé/Ultegra exploded views](https://si.shimano.com/de/pdfs/ev/FH-5000-7_CS-5000-7-0846/EV-FH-5000-7_CS-5000-7-0846C.pdf) list silver 13T and 24T sprockets for both seven-speed families, so the range and finish alone cannot distinguish the model.
  - The [two celeste survivors in the owner thread](https://www.bikeforums.net/classic-vintage/1213866-1989-bianchi-sport-sx-advice-info.html) are photographed from the non-drive side without readable cassette markings, including the bike its owner described as original. [Another owner](https://www.bikeforums.net/classic-vintage-bicycles-whats-worth-appraisals/950086-1989-90-bianchi-sport-sx.html) reports keeping the original sprockets after changing the installed gearing and does not identify them. Live readback confirmed spec 18494, bike 1083, source 325, label `Cassette`, value `Shimano silver 13-24T 7-speed`, and a NULL component link.
- **Tangent18682:** original [1989 second specification table](https://cdn.shopify.com/s/files/1/0661/0501/6425/files/img-2487-2.jpg?v=1764982612) explicitly prints SunTour13-28T7-speed cassette with XC-9010 hubs. SunTour Edition No.89, printed p.25/PDF26, visually re-read in the [maker PDF](https://www.radiolabworks.com/bikes/catalogs/Suntour%201988%20%2389%20Components%20Catalog.pdf), source427: FH-XC10-U7 freehub, FH-HC10-U7 silver7-speed cassette sprockets,13-15-17-19-21-24-28T standard ratio. Supports existing11414 by group/mechanism/ratio, a fitment inference rather than a code printed by Bianchi. Applied NULL→11414, label/value/source unchanged. No new row/date change. Supersedes the generator's stale "Tangent has no row" comment;11414 was added by the later SunTour ingestion. Axis retains its existing separate mapping.
- **Ocelot1740:** visually re-read PDF26 of the [complete1993 USA catalogue](https://cdn.shopify.com/s/files/1/0786/6705/5385/files/1993_Bianchi_catalog_-_USA.pdf?v=1751937419), source47. It explicitly prints Shimano Hyperglide14-28T6-speed **freewheel**, HG20 black chain, CT20 group and alloy36H hubs. Cassette label was a transcription/column-structure error. [Shimano1993 p.73](https://www.disraeligears.co.uk/site/00_main_images/shimano_bicycle_system_components_-_93_page_073_main_image.jpg), source84, visually re-read: C20 specifies MF-HG20. Existing7603 dates1990–94 and14-28T match. Applied label48/Cassette→36/Freewheel, raw_label Cassette→Freewheel, NULL→7603; value/source47 preserved. In CSV, only Ocelot's value moves into an added Freewheel column, all other cells preserved. Exact bike/year Freewheels override installed. Restore by moving that value back to Cassette and reverting the three live fields if later decisions have not superseded this.

Application changed exactly two bike_spec rows, preserving stable IDs, source47/325 and both value strings. No component writes or date changes. Exact readback:1740 label36/raw_label Freewheel/component7603;18682 label48/raw_label Cassette/component11414;18494 remains NULL. The identical guarded SQL rerun changed zero rows. Original field values above provide the restoration plan; original1993 CSV changed only by adding Freewheel and moving Ocelot's existing value into it. Generator and CSV changes are retained.

Validation: all loaded CSVs compare at23,800 specs,23,785 unchanged and the same15 pre-existing lost proposals, with zero gained/changed/missing/ambiguous identities. Exact finding set and summary equal the pre-change baseline (unchanged includes NULL-to-NULL baseline specs). The intermediate Ocelot missing-label pair disappeared after the guarded live relabelling. All three scoped cluster decisions verified, quality-link-decisions test passed, and whole-DB quality remains zero errors/2,067 review findings with unchanged check counts. Temporary SQL, source downloads/renders, comparison JSON and validated CSV backup were removed; durable source URLs and material old/new values remain here. Other cluster dating targets1196/1200/1194/1212/1213 were not reviewed in this bounded pass.

## Bikalog 1985/1986 backlog check — 2026-11-17

Reconciled the vague TODO against live catalogue sources and Bikalog's API index.
Already loaded: **1985 Japan**, source **144**, nine current bikes (the earlier
ten-bike ingestion included the subsequently excluded Bambina); **1986 DE**,
source **324**, two bikes; **1988 US**, source **167**, six bikes. The last is
the Bikalog `Bianchi/1986/bianchi-1986-roadmodels.pdf` already identified below
as misdated: the same C-4/Mondiale/Super Leggera/Pista/Giro/Limited scans, with
Chorus Syncro, Ultegra and the 1986–1987 championship reference. No separate
1986 import is needed from that host.

Downloaded [Bikalog's 1985 file](https://bikalog.org/api/view/Bianchi/1985/bianchi-1985-roadmodels.pdf):
**five pages**, English, different from the two-page Japanese range sheet.
Cover, “The second hundred years begin” introduction, Racing Series divider
and Professional-series spread, with **Pista / Centenario** photographs.
Its text layer contains introductory prose and model names, **no specification
tables**. Visually checked the cover and final photo page. No market imprint
or printed year was established; 1985 is the archive attribution, compatible
with the centenary theme, not a newly verified exact edition date. Do not infer
component codes from these bike photographs or treat this fragment as a complete
unloaded specification catalogue. Remaining action: recover the missing spec
pages before deciding whether this edition supplies additional bike data.

Removed the duplicate 1986/vague 1985 bike-loading backlog wording and recorded
the precise acquisition need instead. No DB, CSV or matcher changes. Task-created
API listing, PDF and two page renders removed after documenting these findings.

## 1940 Bianchi — `1940_bianchi_specs.csv` (17 bikes, 153 specs, 3 linked)

- Source (added 2026-10-21): very likely VeloBase CatalogScans `Bianchi_1940.pdf`, "1940 Bianchi Catalog" (17.8 MB; https://velobase.com/Pages/Resources/CatalogScans.aspx). Inferred from the matching title and year, not confirmed: no download is on disk and the notes never named the file. No market is stated.

- Four models had "Identical to <model>" placeholder cells (Freccia←Folgore,
  Costantino←Cesare, Cleopatra and Cirene←Cecilia); copied across 24 cells.
  Those four bikes were deleted and reloaded.
- Header has a UTF-8 BOM; the parser copes.
- Only "Regina Extra (1 speed)" freewheels link. Everything else is Italian
  prose or names the maker (Società Catene Calibrate Regina) rather than a
  model. Not fixable with overrides.
- **Removed (user request, 2026-10-04):** the whole catalogue was deleted —
  all 17 bikes (bike_id 7-27) and their 153 `bike_spec` rows, including the
  3 links to `component_detail` 2170 "Regina Extra (1 speed)" (component row
  itself left in place, just unlinked — nothing else referenced it, so it's
  now linked to zero bikes). Also deleted the two `bike_spec_label` rows
  this catalogue had minted and used exclusively — "Chain Guard" (20) and
  "Other Features" (25), both with zero remaining references elsewhere.
  `data_source` 34 ("1940 Bianchi catalogue") left in place; no generator
  code (`COMPONENT_OVERRIDES`) referenced these bike_ids or component 2170.

## 1983 Bianchi — `1983_bianchi_spec.csv` (9 bikes, 118 specs, 51 linked)

- Source (added 2026-10-21): ebykr.com "Bianchi Catalog of about 1983" (https://ebykr.com/library/bianchi-1983-catalog/), 12 pages in English, published in Italy by Bianchi; scans from Mark Bulgier's archive (bulgier.net/pics/bike/Catalogs/Bianchi-83/, posted 2001, also on 2velo.com). It carries no year; ebykr estimates 1983 from the Super Pista text citing a 1982 World Championship medal. The catalogue names no export market, so IT is the publisher's country, still an inference for the intended market.

- **TTT link correction, 2026-11-27:** the user rejected model-specific links from bare TTT. Cleared stems 912/938/963/976/989 from 6404, Eco Pista stem 1003 from 6420, and Eco Pista handlebars 1004 from 2753. All retain `TTT` and source 42. [Catalogue pp.2, 4, 6–9](https://ebykr.com/library/bianchi-1983-catalog/) name TTT or an engraved TTT stem without its component model; Eco Pista names TTT bars and stem. Campione del Mondo has no handlebar spec, and p.6 does not name its bars. Scoped NULL overrides replace the earlier model inferences; the 1984 stems were subsequently corrected below. SQL replay affected zero rows; the scoped comparison found all 118 specs matched, and the full 118-catalogue comparison retained only the 15 unrelated pre-existing Huret losses. Link-decision tests passed. To reverse, restore 912/938/963/976/989 to 6404, 1003 to 6420 and 1004 to 2753, and restore the previous overrides.

- 2026-11-26: page 6 describes Campione del Mondo Gran Sport brakes with Super Record levers, but does not specify gear shifters. Corrected spec 960 from Shifters to Brake Levers and moved its CSV cell from `Shifters/Levers` to `Brake Levers`; retained the database's original raw label and source. Initially left unlinked due to hood-logo ambiguity, then linked to 231, the 4062 family, after merging the hood-based records. Readback and SQL rerun verified both corrections; the catalogue's generated links match the live database. [Lever review](../../../ingest-component-catalog/references/known-catalogs/campagnolo.md#super-record-4062-brake-lever-review--2026-11-26).

- This catalog exposed that overrides were global: its "Campagnolo Nuovo
  Record" derailleurs inherited the 1973 Raleigh picks. COMPONENT_OVERRIDES
  now accepts year ranges; Nuovo Record front/rear and the Gran Sport and
  Nuovo Record brakes are ranged. (The rear ranges first chosen here were
  wrong against the DB's own dating and were corrected later — see "Nuovo
  Record rear-derailleur ranges" below.)
- Repairs: three "&"-joined columns split in the CSV into Stem/Handlebars,
  Saddle/Seatpost, Hubs/Headset (a bare groupset name goes in both cells, a
  single-part value fills only its cell); "Frame Material/Tubing" → Frame
  Material, "Tires" → Tyres, "Rims/Wheels" → Rims; "(Bianchi-)engraved"
  dropped, "N.R." → Nuovo Record, "Super Record chainwheel" → Campagnolo
  Super Record, "Ofmega Competition" → Competizione (DB spelling). Six cells
  hand-fixed after the split (Selle Italia out of Seatpost, Campagnolo Tipo
  out of Headset, spoke note kept on hubs only, "Mavic rims" → "Mavic").
- Auto-links corrected: NR headset was hitting "Nuovo Record Alleggerita"
  (now 1039), NR hubs an odd "(low flange, non-drilled, disk?)" row (now 1034).
- 1983 choices: Gran Sport → 3600/NT front, 3500 rear, second-gen brakes,
  1006 hubs, 1040/A headset, 0306 116 BCD triple; Ofmega Competizione crank →
  the Bianchi-labelled row; Gipiemme Pista → Gipiemme Special Pista hubs and
  600101 crank (hub identification remains provisional: [review](../../../ingest-component-catalog/references/known-catalogs/gipiemme.md#early-pista-hub-links--evidence-review-2026-11-20));
  Record Pista → 1051 crank, 1036 hubs, #1040 headset; fluted Campagnolo posts
  → 1044 NR Superleggero; Cinelli #2 → Unicanitor #2 suede; Sugino
  SuperMighty → Super Mighty Competition.
- Left unlinked: TTT stem/bars/saddle/post (no model), Cinelli bars, San
  Marco saddle/post, Selle Italia Aero II (no row), Campagnolo Tipo (five
  Nuovo Tipo rows), tyres, Mafac cantilever, Shifters/Levers (no category
  mapping).
- 2026-10-05: Campione d'Italia "Mavic Monthlery" rim -> 5093 Mavic
  Montlhéry Route (the 84-85 Mavic catalogue names the Route as the
  première-monte/OEM rim; Pro was for retail builds). Judgment call; the
  rows were retitled Monthlery -> Montlhéry in that catalogue pass, so the
  bare value no longer even substring-matches.

## 1984 Bianchi — `1984_bianchi_spec.csv` (6 bikes, 77 specs, 24 linked)

- **TTT stem correction, 2026-11-27:** [the c.1984 catalogue](https://ebykr.com/library/bianchi-1984-catalog/) names Bianchi-engraved TTT stems without a model on Tipo Corsa and Super Leggera. Cleared specs 1054/1067 from 6404, preserving `TTT` and source 43, and added scoped NULL overrides. Readback and SQL replay confirmed both links and zero further changes; all 77 scoped specs matched, and the 118-catalogue comparison retained only the 15 pre-existing unrelated Huret losses. Link-decision tests passed. To reverse, restore 1054/1067 to 6404 and remove the scoped NULL overrides.

- Gran Sport consolidation, 2026-11-17, user approved: Campione d'Italia
  Crankset spec **1045** (`Campagnolo Gran Sport`) moved **1473 -> 1472**.
  Bianchi-marked chainrings and the 608 g actual specimen fact survive in the
  consolidated component description; the generic catalogue value does not
  establish that ring marking on this particular bike. All other bike/spec
  fields and links unchanged; full loaded mapping comparison validated.

- Source (added 2026-10-21): ebykr.com "Bianchi Catalog of about 1984" (https://ebykr.com/library/bianchi-1984-catalog/), 9 pages in English, published in Italy by Bianchi; scans from Mark Bulgier's archive (bulgier.net/pics/bike/Catalogs/Bianchi-84/, posted 2001, also on 2velo.com). It carries no year; ebykr estimates 1984 from the Super Pista text citing a 1983 World Championship gold medal. Its models are exactly the six loaded. The catalogue names no export market, so IT is the publisher's country, still an inference for the intended market.

- 2026-11-27 user decision: generic TTT stems on Super Leggera and Tipo Corsa should not link to model-specific components. Check and clear the live links and update the generator; the earlier unlinked note below has not yet been reverified against the live database.

- Looser translation than 1983. Repairs: Frame → Frame Material, "Fork
  details" → Fork, Tires → Tyres, "Rims & Spokes" → Rims, "Saddle & Seatpost"
  split; Campagnolo prefix restored on "Gran Sport pedals/crankset" and
  "Super Record chainwheel"; the translator's "Super Record Pro" → Super
  Record (four cells); the Super Leggera's "Engraved chainring" → Campagnolo
  Super Record and "Fluted seatpost" → "Campagnolo fluted"; TTT stem → TTT;
  Ofmega Competition → Competizione; "Rugged Gipiemme Pista Grupo" → Gipiemme
  Pista Gruppo; trailing "rims" dropped from Mavic values.
- "Groupset / Components" kept as a free-text label (no category); it
  duplicates the part cells but is the only place two bikes name their group.
- Auto-links corrected: NR pedals were hitting "Nuovo Record orthopedic" (now
  1037 Record Strada); "Record Pista" crank was hitting the "non-fluted" row
  (now 1051, same as 1983).
- Picks: Modolo Flash → 1st version; Gran Sport pedals → 3700 and crank →
  0304 Bianchi-labelled (both ranged from 1978); Mavic GP4 → plain GP 4;
  "Mavic OR 10 (tied and soldered spokes)" → OR 10.
- Left unlinked: fork prose, TTT stems, San Marco, plain Mavic and Super
  Champion rims, Wolber tyres, the groupset column.

## 1985 Bianchi — `1985_bianchi_spec.csv` (10 bikes, 164 specs, 77 linked)

- Source: ebykr.com scan of the Piaggio Japan range sheet
  (https://ebykr.com/library/bianchi-1985-japan-range-sheet/, two pages,
  Japanese, prices dated 1 April 1985), `data_source` 144. The scan cuts
  the spec table's row-label column off; rows identified by content and
  order (price, sizes, frame, bars, stem, brakes with levers, crank,
  pedals, freewheel, chain, saddle, seatpost, derailleurs, hubs, tyres,
  rims, extras, weight, colour). The Campagnolo / Sakae P-5 row between
  Saddle and Derailleur is the seatpost row. Transcribed by hand
  (2026-10-08) from ebykr's Japanese transcription checked against the
  1164 px scan; chains corrected to Sedis on the Centenario, Super Leggera
  and Campione (the transcription had HKK throughout). Yen prices put in
  Extras (no price column). "Yoshigai" rendered Dia-Compe, "Mikashima"
  MKS, スーパーレゲロ Superleggero, モンディアリタ Mundialita.
- Bikes: Centenario (100th-anniversary limited edition, black nickel,
  ¥600,000), Super Leggera, Campione, Campionissimo, Squadra, Speciale-II
  (tubular and 700C builds in one column, kept as either/or cells),
  Strada, Randonneur 700, Rekord 26, Bambina.
- Brakes and levers were one cell ("Yoshigai 500G + GC200"): split into
  Brakes / Brake Levers in the CSV for the four Dia-Compe bikes.
- Overrides (all 1985 Bianchi comments in the generator): brakes
  'campagnolo nuovo record bianchi engraved' -> 572 (post-CPSC range),
  'campagnolo super record bianchi engraved' -> 583, 'modolo flash' -> 874
  1st version; cranks with dimensions -> 1472 Gran Sport, 1496 Nuovo
  Record Strada ("Record with SL chainrings" = 1049 with Super Leggero
  rings), 1687 Ofmega Competizione BIANCHI; pedals 'campagnolo
  superleggero' -> 3709 1037/a SL; freewheels Regina CX 13-21 / 13-23 ->
  2168 (as 1987 Bianchi), 'suntour nw 13 21t 6 speed' -> 2238 NW-6000;
  FD 'campagnolo 990 980' -> 2279 Campagnolo 980 (990 front exists only
  as the 1987+ century finish; rear matched 4088 990 itself); RD 'suntour
  arx' merged with the 1985 Raleigh entry into a ranged one: Randonneur
  700 -> 4729 RD-4500 GT (50/45/34 triple, 14-28), default 4727 RD-4300;
  hubs 'campagnolo nuovo record 36h' -> 3259, 'campagnolo record 32h /
  36h' -> 3260, 'campagnolo gran sport 36h' -> 3256 1006 (as 1983; DB's
  only Gran Sport hub, velobase-dated 1950-55 though the number was
  reused — check against a 1980s Campagnolo catalogue); bars 'sakae ctd
  390 mm / 370 mm' -> 7888, 'nitto 105 390 mm' -> 2889 Universiade 105;
  seatposts 'sakae p 5' -> 5857 CT-P5, 'sakae p 3' -> 5855 CT-P3; null:
  'selle italia turbo junior' (matcher hit the adult Turbo), the
  Speciale-II either/or rim cell.
- Left unlinked: TTT bars/stems, Nitto Technomic stems and Junior bar,
  Sakae RY / AH stems, Sakae bare 390 bar, Dia-Compe 500G / DC400N / GC200
  / NGC200 / DC195 (no 1985 rows by those codes), Campagnolo Victory hubs
  (flange unknown), Suzue LPF / 28H, Ofmega Junior cranks and Competizione
  pedals, Sakae CT/SPG triple, MKS Promenade, Vittoria (bare and Seta),
  Panaracer, Sedis / HKK, Selle Italia Aero II / ANA, Martano Pro / G-P80,
  Ambrosio, Bianchi original rims, frame prose.
- Regression: all 22 loaded catalogues unchanged (1,449 links).

## 1987 Bianchi — `1987_bianchi_spec.csv` (16 bikes, 320 specs, 144 linked)

- **Model casing normalized 2026-11-27:** live bikes 79–92 and the local source CSV now use Mondiale, Giro, Pista, Super Leggera, Trofeo, Nuovo Alloro, Limited, Squadra, Brava, Campione d'Italia, Sport SX, Premio, Strada LX and Strada; X4 stays unchanged. The CSV's excluded VOLPE row was also renamed Volpe and its exact-name skip updated. Adjusted the seven case-sensitive component overrides and the Mondiale regression test. CSV comparison confirmed only model fields changed; all 15 live bikes retain their IDs, source and 300 specs. The scoped catalogue comparison reported 300 unchanged with no missing, gained, lost or changed mappings; all 118 loaded catalogues retained the same 15 unrelated pre-existing Huret losses and no new differences. SQL replay affected zero rows and the link-decision test passed. To reverse, restore uppercase names for IDs 79–92, capitalize the same CSV names plus Volpe, and revert the corresponding skip and override names. The CSV is gitignored and maintained locally.

- **ITM 100 source-text correction, 2026-11-25:** The catalogue PDF p. 14 prints `ITM 100 black` for Campione d’Italia, not bare `ITM 100`. The approved update corrected Stem spec 1306 and the local CSV while retaining the 9203 link; component 9203 was extended to 1987. A 1987-scoped generator override preserves the link. [Source evidence and validation](../../../ingest-component-catalog/references/known-catalogs/cross-catalog-notes.md#itm-mod-100--9203--applied-and-validated-2026-11-25).

- 2026-11-19 applied: the earlier automatic SunTour prefix on SPORT SX Brakeset was unsupported. [Alpha-5000 reconciliation and validation](../../../ingest-component-catalog/references/known-catalogs/dia-compe.md#alpha-5000--applied-2026-11-19) added Dia-Compe11710/source468 and corrected/linked spec1324 in place, retaining bike89/spec source46. The CSV and DB now say `Dia-Compe Alpha-5000 Balance Response System with aero levers`. Crank1327 is unchanged/NULL. All300 current catalogue specs match generated values/links; no duplicates, zero-change SQL rerun; exactly one mapping gain across108 catalogue CSVs.

- Source (added 2026-10-21): VeloBase CatalogScans `1987Bianchi.pdf`, "1987 Bianchi" (2.39 MB; https://velobase.com/Pages/Resources/CatalogScans.aspx), downloaded 2026-10-19 (the browser's download origin confirms it). The index states no market; US is the user's call (2026-10-19).

- Richest catalog: full parts lists with model numbers, but six columns pair
  two components comma-separated. Split in the CSV on the first comma:
  Handlebar and Stem, Saddle and Seatpost, Hubset and Spokes, Freewheel and
  Chain, Tires and Rims, Derailleurs and Shift Levers (→ Derailleurs +
  Shifters; a comma-less groupset name fills both). Brakeset keeps the
  caliper only (lever notes dropped). Finish qualifiers stripped everywhere
  (pantographed, anodized, laser etched, silver, aero kit, alloy).
- Renames: Frame → Frame Material, Miscellaneous → Extras; N600/N105 →
  Shimano 600/105 (the 6207 and 1050 groups); 3T → 3ttt; Suntour → SunTour
  and bare Alpha-5000 prefixed; bare "C Record" chain → Regina C Record;
  Pista "Campagnolo 16T fixed gear" → "Campagnolo 16T fixed cog".
- Hand fixes after the split: five ITM stems kept a leading comma; Trofeo's
  "Campagnolo Super Record/B Special 3T RSR" is derailleur + seatpost
  spillover (→ Super Record); Super Leggera's "C Record/B Special Gipiemme
  derailleur" → Gipiemme Special derailleur, C Record levers; "Anatomic"
  saddle → "Anatomic saddle" (was substring-hitting Madison Anatomic);
  Campione d'Italia's mixed SunTour cell → Cyclone 7000 with the Alpha-5000
  front noted in Shifters.
- Introduced the explicit-null override ("do not link"): 1987 "Shimano 600"
  brakes substring-hit the 1970s centre-pull and the DB has no 6207 row.
  Ranged so pre-1984 catalogs still get the centre-pull.
- Auto-links corrected: C Record pedals (Pista → 305/501), C Record headset
  (Century Finish → 304/104), Master Gran Premio crank (Master → Gran
  Premio), Shimano 105 hubs (Golden Arrow → HB-1050), Dura-Ace brakes
  (centre-pull → BR-7400, ranged from 1984).
- Nuovo Alloro front spec 1229 retains Victory 2318. Campagnolo's February
  1987 brochure independently attests that front family, resolving the old
  date flag. [Component review](../../../ingest-component-catalog/references/known-catalogs/campagnolo.md#victory-front-availability-and-tre-cime-fitment--2026-11-22)
- Picks: New Victory → Victory rows (S3 rear, 422 low-flange hubs, 415/102
  brakes, 0355 crank, 405/000 pedals); Dura-Ace SIS-7 → 7400 series
  (RD-7401, FD-7400, MF-7400 7sp, FC/PD/HP-7400); Shimano 525/532 SIS →
  Light Action RD-L525/L532; C Record shifters → Retro-Friction 2nd gen;
  C Record seatpost → Aero 130mm; Ofmega Competizione Pista hubs → Super
  Competizione Track; Gipiemme Cronosprint headset → Crono Sprint; 3ttt AR84
  → Record 84; ITM 400 → 400 Racing; SR Custom → Sakae CUSTOM; Regina CX →
  CX 6sp; Vittoria CG → Corsa CG Seta; Giro del Mondo → DB's "Mundo".
- Brand rows kept: "Shimano" chain, "DID", "Sedisport" → Sedisport Delta,
  "Shimano 600 SIS" → plain Shimano 600 derailleur/shifter (no 6207 rows).
- Left unlinked: frame/fork prose, spokes, budget house-brand parts (KK-310,
  HL, KL, TH-305, HTI-A1, CST, UCP), Regina Pista chain, Gipiemme
  Cronosprint posts (three variants), 3ttt Competizione bars (three bends),
  ITM Mondial bars and ITM 100-300 stems (no rows at that review), Extras.
- **2026-11-20 HTI correction applied:** [1987 catalogue](https://velobase.com/CatalogScans/1987Bianchi.pdf), PDF p.15, visibly prints `HTI-A1 alloy quill` for Premio but `HTI-A17 alloy` for Strada LX and Strada. Corrected live specs **1368/1388** and the source CSV from `HTI-A1 alloy` to `HTI-A17 alloy`; Premio **1348** remains A1. Both affected links remain NULL, source 46, label 5; no second pedal spec exists on either bike. No matching HTI component row was found. The guarded update affected two rows; the repeat affected zero. Readback confirmed both values, unchanged links and provenance, and the unchanged Premio. The scoped generator/live comparison remained 300 unchanged, no gained/lost/changed/missing/ambiguous specs. Restore the old text `HTI-A1 alloy` on 1368/1388 if needed. Do not infer that A1 and A17 are interchangeable; no maker-code crosswalk was found.
- 2026-11-06 (superseded by the 2026-11-17 table repairs below): the five 1987 "Regina C Record" chains -> 1384 Regina Extra
  CX / CX-S (1980-90). The c. 1984 De Rosa C-Record catalogue specifies a
  Regina CX-S chain; Campagnolo's 1988 compatibility table lists Regina CX-S
  for Record and Super Record. This supports the shared 1987 Bianchi wording:
  [De Rosa c. 1984 catalogue](https://ebykr.com/library/de-rosa-c1984-catalog-c-record-professional-six-day-track-order-cards/);
  [Campagnolo 1988 dealer parts catalogue](https://velobase.com/CatalogScans/Campagnolo/1988CampagnoloDealerPartsCatalogue.pdf).
- 2026-10-04: Premio "Dia Compe QS500N Balance Response System" -> 682
  (retitled QS500N by the Dia-Compe 1986 ingest) via override; 143 -> 144.

## 1993 Bianchi — `1993_bianchi_spec.csv` (24 bikes, 408 specs, 174 linked)

- Source (added 2026-10-21, PROBABLE, not confirmed against the spec pages): retrobike.co.uk archive "1993 Bianchi Catalogue" (https://www.retrobike.co.uk/archive/1993-bianchi-catalogue.1672/, file name "Catalogo Bianchi 1993.pdf"). Its cover is hand-marked "93" and the text says "28 different models of Road, Mountain and Cross-Terrain bicycles", weights in lbs, a Reparto Corse mountain bike with Genius Nivacrom tubing, "In 1993" and "108 years": an English, US-style catalogue consistent with this CSV. The download truncates on every attempt (1.4-2.6 MB, no PDF trailer), so only the cover, history, a blueprint spread and two further pages were recovered (images carved from the Flate/DCT streams); the product spec pages could not be read and the tables were not compared. Not the same as the Japanese-edition "Bianchi 1993" on labibleduvelocataloguesbianchi.blogspot.com/p/bianchi-1993.html (yen prices, Giro / MMX / EL models), which has not been ingested. Market stays US as stated by the user.

- **Source recovery update, 2026-11-15:** the complete 31-page USA catalogue is
  now available from [Upcycles](https://upcycles.cc/blogs/catalog-archive/1993-bianchi-catalog-usa)
  ([PDF](https://cdn.shopify.com/s/files/1/0786/6705/5385/files/1993_Bianchi_catalog_-_USA.pdf?v=1751937419)).
  Visually verified PDF pp.24–25 for Nth FS / Super Grizzly / Grizzly rim
  specifications. This supersedes the missing-table caveat for those three
  values only; other product tables still need comparison with the CSV.
  **2026-11-17, Eros rim also visually verified on PDF p.22:** the table prints
  `Mavic 192 silver anodized`, confirming spec **1556 -> 5050** and documenting
  1993 availability for that otherwise undated model. Component dating/description
  and source 47 citation corrections were applied on user approval and validated:
  5050 now records 1993 availability, source 47, an enriched description; the
  existing spec 1556 is unchanged. SQL rerun changed zero rows; all catalogue
  mappings stayed unchanged and only 5050's incomplete-date finding disappeared.
  See the [192 review](../../../ingest-component-catalog/references/known-catalogs/mavic.md#mavic-192-availability--2026-11-17-applied-and-validated).
  This extends verification to this rim entry only, not every Eros field or every
  catalogue table.
  Nth FS prints `Mavic 231 hard anodized` (5071 CD supported); Super Grizzly
  and Grizzly print `Mavic 231 silver anodized` (standard 8191, existing CD
  links wrong). The earlier finish stripping and all-three-CD mapping below
  are superseded by this evidence. The reviewed repair covers the finishes,
  two relinks, scoped overrides and 8191 year_to extension together. **Applied
  on user approval, 2026-11-15:** restored the three finish values in CSV/live
  specs, retained 1607 -> 5071 and corrected 1624 / 1658 -> 8191; extended
  8191 through 1993 (source 47). Replaced the unqualified override with an
  ambiguity guard and 1993 bike-scoped finish mappings. Compared all 93 loaded
  CSVs: only these three values and two links changed. Live IDs preserved,
  one Rims spec per bike, SQL rerun zero changes, scoped quality check clean,
  and all nine test files pass. Exact IDs, source pages and old/new values:
  [Mavic coating evidence](../../../ingest-component-catalog/references/known-catalogs/mavic.md#bianchi-m-231-coating-evidence--2026-11-15-read-only-review).

- Six " / "-paired columns split in the CSV: Fork/Headset, Drivetrain/
  Shifters (→ Derailleurs + Shifters; a slash-less cell fills both),
  Saddle/Seatpost, Hubset/Spokes, Freewheel/Chain (→ Cassette + Chain: 20 of
  24 bikes list cassettes), Tires/Rims. Frame Details → Frame Material.
- Noise stripped: spoke counts (32H/36H), SG-X/Powering/SuperShifter, tyre
  sizes, rim finish words, trailing "cassette"/"chain" nouns. Prefixes and
  typos: Dura-Ace → Shimano Dura-Ace, HG50/70/90 → Shimano CN-HG.., HP50 →
  HG50, 7401 chain → CN-7401, Diacompe → Dia-Compe, Suntour → SunTour, LOOK
  PM76/PM56 → PP76/PP56.
- Shifters label now maps to Shifters AND Shifting Brake Levers, so STI
  links (ST-7400, ST-6400, ST-1055). No Record/Chorus Ergopower rows of
  this era exist.
- The 1990 boundary: Campagnolo Record, Shimano 105 and Dura-Ace overrides
  for brakes/headsets/hubs/pedals/seat posts were converted to year ranges
  (pre-1990 = 1973/1987 picks; from 1990 = BR-14RE, 105SC 1055, 7402/7410,
  Record 8sp). Without this the 1993 bikes inherited 1973 and 1987 rows.
- Blocked with null: bare "Alloy" hubs (was hitting a Roval hub) and
  seatposts (Titan alloy), "FIR Tour or Ambrosio Giro d'Italia" (either/or),
  bare "Campagnolo" seatpost from 1990 (no Record post of that span).
- Picks: Record 8-speed → C-Record-generation crank 1482, RD-01RE, FD-01SRE,
  HS-01RE, Record 8sp hubs, Exa-Drive cassette; Chorus → FC-01CH, RD/FD-01CH,
  Monoplaner brakes (bare "Chorus" hit a 2000s 10s row), 704/101 headset,
  FH-00CH hubs, Chorus Friction downtube levers; Veloce → 2317/4164/3279;
  Ultegra → 6400 series; RX100 → A550 series; XTR → M900; XT → M735/M737;
  DX → M650; LX → M550/M560; Dia-Compe 987 and XCE; Turbo-Matic → Turbo
  Matic 2; Flite → Titanium; Avocet R20; Rohloff → SLT 99; Mavic 231 → M 231
  CD; Omicron → Strada Polished; Vittoria Corsa CX → Servizio Corse; Tange
  CD → Tange-Seiki Levin CD.
- Left unlinked: frame/fork prose (Rock Shox: Forks has no category),
  spokes, sealed/Aheadset/black headsets, AT10/CT10/CT20/Exage LT+ES groups
  (no rows), Rapidfire Plus, Hyperglide cassettes and HG chains, Bianchi
  saddles/tyres, Ritchey, Kalloy, Selcof, Tioga, Panaracer, Maxxis, MTB Araya
  and Ukai rims, FIR rims.
- 2026-10-09, after the Ritchey 1992 catalogue ingest (component skill,
  `known-catalogs/ritchey.md`, data_source 149): 10 Ritchey specs linked
  via new overrides — Tyres "Ritchey Z-Max" -> 8382 MegaBite Z-Max (Nth
  FS), "Ritchey Megabite Hardrive" -> 8383 MegaBite HardDrive (Ibex,
  Osprey; the CSV's "Hardrive" spelling defeats the substring match);
  Seat Posts "Ritchey FD" -> 8407 Force Directional Seatpost (Mountain)
  (Super Grizzly); Saddles "Ritchey Comp leather" (+ "Cro-mo rails" on the
  Virata) -> 8410 Logic Comp Saddle (6 bikes). Those four rows' year_to
  extended 1992 -> 1993 (source_ref -> 47). Applied directly as guarded
  UPDATEs rather than a full bike-update.sql reload; the regenerated SQL
  agrees. 185 -> 195 linked.
- 2026-10-09, after the Araya 1980-95 catalogue excerpts ingest
  (component skill, `known-catalogs/araya.md`, data_source 152): 7 Rims
  specs linked via new overrides — "Araya PX-35" -> 8430 (Advantage),
  "Araya PX-45" -> 8429 (Boardwalk), "Araya AP21" -> 8451 AP-21 (Nyala,
  Ocelot), "Araya VP20" -> 8450 VP-20 (Osprey), "Araya VX300" -> 8428
  VX-300 (Project 3, Volpe); the CSV drops the hyphens. PX-35 / PX-45 /
  AP-21 / VX-300 and the already-linked SS-45 (Europa) extended to 1993
  on this catalogue (source_ref 47). "Araya RM-18T" (Ibex) matches no
  Araya model in any 1980-95 spread — TM-18 (1992) is the nearest guess
  — so it has an explicit null override. 195 -> 202 linked.
- 2026-10-03, after the SunTour 1992 catalogue ingest (component skill log):
  Volpe "SunTour FS-E Top Pull" → RD-FE00-GXB 7951 (rear) / FD-TP05-GXH
  Top-Pull Lite 7968 (front; "Top Pull" only describes the front, the
  Derailleurs split copies it to both), "FS-E 52/42/32T" → CW-FS00-N 8002,
  "PowerFlo 12-30T 7-speed" → CS-AP10 1221; Project 7 "XC Comp Top Pull
  PowerFlo" front → FD-TP10-GXH Top-Pull Pro 7966 (rear stays 4783, now
  titled RD-XC20-GXB), "XC-COMP MD 42/32/20T" → CW-XC11 7998; Grizzly
  "SunTour XC Comp" headset → HS-ST00 8045. All via overrides, back-filled
  with a regenerate + load (7 UPDATEs). 167 → 174 linked. Still unlinked:
  bare "SunTour" hubs (Volpe), "SunTour XC-COMP" hubs (Project 7 — front
  hub and freehub are separate rows), "SunTour AP-12 chain" (not in the
  1992 catalogue). `summarize-bike-sql.js` had reported 0 specs since
  `source_ref` was added to the spec INSERT; regex fixed in this pass.
- 2026-10-06: Volpe "Barcon lever Accushift Plus" → SL-BC01 7976 (year_to
  extended to 1993 on this bike). Bare "Shimano Hyperglide" 8-speed
  cassettes, each on one bike, picked by group + catalogued range: SBX
  12-23T → CS-HG90-8 7671 (U), Virata 13-23T → CS-HG70-8 7762 (T), Super
  Grizzly 12-28T → CS-M900-8 7668 (Q). The 6 / 7-speed values (12-28T,
  13-28T, 13-30T, 14-28T, black 13-30T) are shared by bikes of different
  groups (e.g. 12-28T 7-speed on XT, DX and LX bikes), so a value-keyed
  override can't pick one; left unlinked. 181 → 185 linked.

## 1973 Bianchi — `1973_bianchi_spec.csv` (22 bikes, 86 specs, 8 linked)

- Source (added 2026-10-21): VeloBase CatalogScans `Bianchi1973_ital.pdf`, "1973 Bianchi Catalog (Italian market)" (10.9 MB; https://velobase.com/Pages/Resources/CatalogScans.aspx); the filename matches the one named below. The index title confirms the Italian market, so IT is stated, not inferred.

- First catalog built from a scanned PDF (Bianchi1973_ital.pdf, Italian
  market, 8 pages, no text layer): pages read visually, the CSV written by
  hand. Model names carry the catalog code, e.g. "Rekord 74 (00.5.67)". Six
  "derived" models have no specs of their own and are kept as bare rows with
  a "Derived from ..." Extras note.
- Only four bikes have component-level specs; the rest is frame tubing,
  tyre sizes, brakes by type, fittings. New free-text label "Gearing" for
  chainring/sprocket counts (added to LABEL_ORDER after Rear Derailleur).
- Overrides: Universal Corsa Mod. 68 → Super 68; Universal Mod. 51 → Extra
  Mod. 51 (DB dates it 1951-61, this catalog still fits it in 1973 — worth
  a year_to extension); Campagnolo Valentino → 2050 front / Nuovo Valentino
  rear; Campagnolo Gran Sport rear ranged: 1012/4 to 1977, 3500 from 1978.
  No early-70s Gran Sport front row, so the Special's front stays unlinked.
- Durall (Bianchi house alloy brand) brakes/bars, rod brakes and wheel
  descriptions stay as text.
- 2026-10-24: Ghisallo 28in and 26in Condor 10 vel. (00.5.05, 00.5.62)
  deleted as city bikes (2 bikes, 8 specs) and added to NON_ROAD_SKIP:
  "Sport" section with fenders, chain guard and 28 x 1 5/8 x 1 1/4 tyres,
  like the Sebino Condor already dropped. Borderline (10-speed, alloy QR
  hubs, centre-pulls); the user's call. Strada/Eco and Europa ("Derived from
  Rekord Strada", Corsa section) kept as bare rows.

## 1987 Bianchi Shimano override pass — 2026-10-02

- 12 links back-filled (125 -> 137 of 320) from period rows the Shimano
  catalogue passes dated: Limited "Shimano 600" brakes 972 BR-6208,
  crankset 1798 FC-6207, headset 3090 HP-6207, pedals 3961 PD-6207, hubs
  7551 HB-6207F / R (freewheel hubs, bike has MF-6208; row dated 1984-86);
  "600 14-24T" freewheel (Limited, Squadra) 2218 MF-6208-6; "600 SIS"
  shifters (Limited, Squadra) 6149 SL-6208 (replaces the earlier `null`,
  set when SL-6208 still had a 1980 velobase date); Giro "Dura-Ace SIS-7"
  shifters 6165 SL-7401; Brava "UG-2" chain 7450 CN-UG20; Volpe "AT-50
  cantilever" 1003 BR-AT50 (range from 1986, so the 1985 Raleigh value stays
  unlinked). All ranged by year. Regression: other catalogues unchanged.
- Left: "Shimano 525 SIS" / "532 SIS" front derailleurs and shifters and
  "Tourney" (no FD-L525 / L532, no 1987 Tourney rows); "Shimano UG",
  bare "Shimano" chain, "Shimano 14-28T" and "105 14-24T" freewheels
  (generic or no MF-1050 row).

## Link-gap pass on the weakest categories — 2026-10-08

- 1983 Super Pista Tyres "Clement Pista tubular" -> 6765 Clement Pistard,
  via override. Judgment call: Pistard is Clement's track tubular and the
  only track-named Clement row. 1983: 50 -> 51 (the heading above said 47
  from an earlier load; the DB had 50 before this pass).
  Review 2026-11-14: that rationale is superseded by the inspected Clement
  range, which distinguishes Pistard from several numbered Pista tyres. The
  Bianchi page gives no code/weight/casing. User approved clearing spec 1023's
  link and setting the override to null; applied 2026-11-14. Printed spec text
  and source retained; no CSV edit. All other generated/live mappings unchanged;
  SQL rerun zero. Evidence and correction details are in the component Clement notes.
  Do not widen Pistard's dates or guess another track model from this fitment.
- 1987 PISTA Freewheel "Campagnolo 16T fixed cog": override ranged to 6380
  (763 steel sprocket) up to 1985 and `null` from 1986, so it stays
  unlinked — the 763 row ends 1985 and there is no later Campagnolo cog row.
- Left unlinked, no DB row: "ITM Mondial" / "Mondial Pista", "Modolo Flyer"
  (1987); "Ambrosio Elite" / "Montreal" (1987; five Elite and six Montreal
  variants); "Regina CXS 7-speed" is a 1986 Cinelli value, the only CX-S row
  is 6-speed; 1993 Araya AP21 / VX300 / PX-35 / PX-45 / RM-18T / VP20, Ukai
  EX-17, FIR Tour / Pulsar, Vittoria Open Tubular Flash M19, Panaracer
  Smoke / Dart, Ritchey, Maxxis, Bianchi-branded tyres.

## C-Record era fix on the 1987 catalogue — 2026-10-09

- The bare 'campagnolo c record' overrides were flat on the 1985-86
  first-generation rows (set during the 2026-10-05 re-link sweep to
  preserve the original matcher hits). Ranging them for the 1989 De Rosa
  showed the Mondiale and X4 on wrong-era rows: Rear Derailleur
  "Campagnolo C Record" 4096 -> 4098 A010 Corsa Record 2nd gen (1987-89)
  and Crankset "Campagnolo C Record 53/42T" 1483 -> 1482 C-Record
  (1987-94), 4 rows, one-off UPDATE (crecord-era-fix.sql). Still 148
  linked. Levers, FD, hubs, headset, pedals, seatpost, shifters (5970,
  1987-91) were already period-correct.
- **Superseded 2026-11-15 for the rear derailleur:** the February 1987 Campagnolo Record brochure (source 414) shows the
  first-style 0102050, and A010 first appears in the November 1987 (1988-season) brochure, so the 1987 X4 / Mondiale rears
  (1110 / 1130) moved back 4098 -> 4096 (4096 `year_to` -> 1987); see campagnolo.md. The crank move (1483 -> 1482) was
  reviewed below on 2026-11-17; neither crank generation is established by the Bianchi source.

- 2026-10-10 (Nitto No. 6, 1980 ingest): 1985 Bambina Stem "Nitto Technomic,
  60 mm" -> 8563 Nitto Technomic (generic match; 8563 year_to 1985). Overrides
  added: Handlebars 'nitto 165 400 mm' -> 2877 (Campionissimo; the row was
  retitled "Nitto Mod. 165" and the matcher lost it) and Stems
  'nitto technomic aero ...' -> null (Squadra; the Aero is a later model with
  no DB row, and the matcher would have taken the plain Technomic). 2877 /
  2889 year_to moved to 1985 on the strength of the Campionissimo / Squadra
  specs. Still unlinked: Bambina "Nitto Junior, 340 mm" (no Junior in the
  1980 catalogue) and Campionissimo "Nitto, Bianchi engraved" (no model).
- 2026-10-10 (Nitto No. 11, 1989 ingest): Handlebars override 'nitto junior
  340 mm' -> 8622 Nitto B110AA (Bambina), the only 340mm junior bar in the
  1989 catalogue; 8622 year_from set to 1985 on this link's evidence.

## 1981 Bianchi — `1981_bianchi_spec.csv` (7 bikes, 123 specs, 38 linked)

- Source: https://saarf.london/2014/02/14/bianchi-1981-catalog/ (pg11 ..
  pg41.jpg): Vespa of America Corporation (Piaggio Group, Brisbane CA) US
  catalogue, "© 1980 Vespa of America", for the 1981 range (Sprint/81). Last
  page is a full specification table; transcribed by hand (crops at x3).
- Bikes: Super Corsa, Super Leggera, Rekord 748, Sprint/81, Rekord "M"
  Strada, Rekord "W" Strada, Super Turismo; weight, frame sizes (cm only) and
  colours on the bike rows.
- Transcription choices: canonical headers written directly; "Derailleur"
  -> Derailleurs (fans to front + rear, as 1983); "Rims-Spokes" split into
  Rims / Spokes; "Fork Ends" folded into Fork; "Standard Package" -> Extras;
  "OF. ME. GA. (manufacturer)" headsets -> "Ofmega"; source spelling
  "Rekord" kept in values.
- Generator: WORD_ALIASES `rekord` -> `record` (no DB title uses "Rekord");
  the 1974 Motobecane `'3ttt record'` -> 2771 (1st Version, 1970) override
  ranged `{ to: 1975 }` so the 1981 plain "T.T.T. Rekord" bar/stem stay
  unlinked.
- Original picks (rear 4149 superseded by the 2026-11-17 review below): Super Record
  by existing overrides (RD 4149 PAT. 80 for 1980-83,
  brakes 582 v1, FD 2313, headset 2968, pedals 3716) plus crank 1509 (1049/A
  Strada Super Record, "special engraving"); Nuovo Record FD 2299 / RD 4125
  by matcher; Nuovo Gran Sport FD 2276 / RD 4085 (as 1983 Gran Sport);
  Record Strada headset 2963 and 32-hole hubs 3259 (1034 low flange, as the
  1983 NR hubs); "T.T.T. Rekord competition, superlight" bars -> 2767 Record
  Competizione Superleggero (name match; velobase dates it 1970-75);
  Universal model 77 -> 1083, ART. 125 -> 1075; Everest Special Oro chain
  -> 1365; Regina Extra Oro 5-speed -> 2182, plain Regina Extra 5-speed ->
  8171 (scalare); Mavic OR10 -> 5103, OR7 -> 5104; Clement Campionissimo ->
  6738 (only dated Campionissimo row), Criterium -> 6745.
- Left unlinked: TTT plain Record bar/stem and model 78 stem, "Super-light
  Rekord" pedals (1037 vs 4021 undecidable), Campagnolo "New Type" hubs
  (five Nuovo Tipo rows), Huret (no model), Dia-Compe / Universal
  centre-pulls, Universal ART. 130/131, Ofmega Super Corsa cranks / hubs,
  Gipiemme / Sugino Corsa cranks, Everest and Regina Oro 6-speed freewheels,
  Regina Super Corsa chain, Clement Gentleman tyres, Italia / TTT saddles,
  house "Corsa" parts.
- Regression: all 28 catalogues regenerated; only the 31 new 1981 links
  changed.

### Universal 130/131 follow-up — 2026-11-17

- The [alternate original 1981 US brochure scan](https://bikalog.org/api/view/Bianchi/1981/bianchi-1981.pdf)
  p.4 confirms `Universal ART. 130/131` on Super Turismo; p.3's portrait supplies
  no numbered front/rear identification. Spec **6595** stays NULL and the CSV
  remains unchanged. Universal's own catalogue defines both codes as front
  options; a newly checked Holdsworthy 1967–68 listing gives **131/133** for a
  Sport front/rear set. That is a possible catalogue-error lead, not permission
  to correct Bianchi's text. Full source pages, rejected inferences and the
  remaining evidence needed are in component notes `known-catalogs/universal.md`.

## 1982 Bianchi — `1982_bianchi_spec.csv` (6 bikes, 56 specs, 21 linked)

- Source: https://saarf.london/2014/02/18/bianchi-racing-catalog-1982/
  (112, 211, 311, 411, 512, 61-91.jpg): US racing brochure ("Bianchi. There
  are no substitutes. Only compromises."; "all 12 of the Bianchis now
  available in America" — only the racing pages are scanned). A photo and
  a prose paragraph per bike, no table, sizes or colours; transcribed by
  hand. Not the 1983 catalogue: same model names, different specs (1982
  Nuovo Racing has Universal 77 brakes and G.P.M. crank, 1983 Ofmega).
- Bikes: Nuovo Racing, Nuovo Touring (new, 18-speed 30-110, Shimano 600
  G.S.), Campione del Mondo (Belgian team bike), Super Leggera, Super Corsa
  (19 lb), Super Pista. "G.P.M." written as Gipiemme. Super Corsa's "only
  Campagnolo Super Record equipment" fanned to FD / RD / crank / brakes /
  levers / pedals / seatpost (as 1979 Colnago); Super Leggera's "Nuovo and
  Super Record" kept as a groupset value only (undecidable per part).
- Original picks (Super Record rear 4149 superseded below): Super Record and
  Nuovo Record by existing ranges (1982 -> FD 2300
  0104007, RD 4126 v4; SR levers 231 (formerly 232), brakes 582, seatpost 5761, RD 4149);
  Gran Sport brakes 554; Record Pista crank 1505 / headset 2966; Cinelli #2
  -> 5332; Mavic OR 10 -> 5103. New overrides: Universal 77 -> 1083;
  "Campagnolo Gran Sport, drilled" levers -> 209 1040/1A; Record Pista hubs
  -> 3270 (1036 high flange, as 1983); Shimano 600 GS rear -> 7110 RD-6101
  600 GS, front -> 7435 FD-6100 Shimano-600 (same era, no "600 GS" front
  row).
- Left unlinked: bare Mavic / Clement, Gipiemme crank and pedals (no
  model), "Campagnolo, Bianchi engraved chainwheels", engraved stems /
  seatposts, T.T.T. track stem.
- Regression: all 29 catalogues regenerated; only the 5 new 1982 links
  changed.

## 1988 Bianchi — `1988_bianchi_spec.csv` (6 bikes, 57 specs, 31 linked)

- Source: https://saarf.london/2014/03/01/bianchi-1986-vintage-roadbike-catalog/
  (111, 21, 32, 411, 511.jpg): US catalogue, Professional Series (C-4
  Project, Mondiale, Super Leggera, Pista) and Competition Series (Giro,
  Limited), accessories page. Prose per bike, no sizes / colours / weights;
  transcribed by hand. saarf dates it 1986; loaded as **1988**: Super
  Leggera "introduces the Campagnolo Chorus Syncro group" (all Chorus rows
  1987/88+), Limited has Shimano 600 Ultegra SIS (Ultegra rows from 1988),
  Victory Syncro fits Victory S3 (1987-88), and the accessories cap reads
  "campione del mondo 1986-1987" (Argentin, retrospective). Differs from
  the 1987 catalogue on every shared model (Mondiale C-Record Syncro +
  Cobalto vs C Record + Super Record brakes; Super Leggera Chorus vs
  Modolo/Gipiemme; Giro Victory vs Dura-Ace; Limited 600 Ultegra vs 600).
- Same scans as the "1986" set on https://2velo.com/bianchi-bicycle-catalog-80s/
  (115, 28, 37, 46, 55.jpg; checked 2026-10-24), so 2velo's 1986 is this
  catalogue, not a missing year. 2velo's "1988" set (1988p11-p81.jpg) is a
  different, Japanese "Bianchi by BJ Sport Inc." catalogue (yen prices): Proto
  (Columbus MAX), Mondiale (SL), Leggera (Chorus), X-4 Argentin, X-4, Squadra
  (Victory), Speciale, Rekord, Axis, Grizzly, X-4 / M-8 / S-8 frames, plus
  Bambina and Aquiletta (children's). Also c. 1988 (MAX, Chorus), so it would
  load as `1988_bianchi_jp_spec.csv` beside this US one, not displace it.
  Held 2026-10-24 (user): only 500px scans exist and the Japanese spec lines
  are unreadable; wait for a sharper copy.
- Also bikalog.org `Bianchi/1986/bianchi-1986-roadmodels.pdf` (5 pages,
  OCRmyPDF): the same five scans (identical page sizes 1169x1460 ...
  1151x1460, same OCR text). Three sites now file it as 1986; it stays 1988
  on the component evidence above.
- Group text fanned to FD / RD / crank / brakes / levers (Mondiale brakes =
  Cobalto from the text); C-4's "C-Record component group" kept as a
  groupset value only. Shifters written per group ("Campagnolo Chorus
  Syncro") so each reaches its own row.
- Picks: C-Record by existing ranges (crank 1482, FD 2283, RD 4098, levers
  214; shifters 5973 by matcher); Cobalto 561; Victory crank 1516, FD 2318,
  brakes 590, levers 235 (only Victory rows, dated to 1986), shifters 6007;
  Chorus levers 220 / crank 1487 by matcher. New overrides: Chorus FD 2286,
  RD 4108 short cage, shifters 7027; 600 Ultegra FD 2478 / RD 4466 / brakes
  966 / levers 7217 (BL-6400 base) / crank 1790 / SIS shifters 6144 (was
  hitting "Shimano 600" 1970-80); Ofmega Super Competizione Pista 1702.
  Ranges changed: Victory RD -> 4169 Victory S3 from 1987 (4168 G010-SM to
  1986); Chorus brakes 565 range now from 1988 (was 1990).
- Left unlinked: Look pedals (no model, seven Look rows), Clement Meeting
  and IRC Triathlete tyres (no rows), Ambrosio disc wheels, 3ttt bars /
  stems, frames, forks, Celeste tape.
- Regression: all 30 catalogues regenerated; only the 1988 links changed.

## 1990 Bianchi — `1990_bianchi_spec.csv` (26 bikes, 519 specs, 262 linked)

- OverDrive evidence review (2026-11-14, user approved, applied): dated cover and
  pp.21–22 confirm Ritchey Megabite Overdrive 26x2.0 on Signature 2 / Grizzly /
  Peregrine / Sika / Osprey, specs 6906/6948/6969/6989/7009. Updated component
  8384 year_from 1991 -> 1990, source_ref 150 -> this source 168; all links
  retained. No CSV/generator changes needed. All 18,472 bike specs unchanged;
  generation across 86 CSVs byte-identical; SQL rerun zero. Source URLs and
  casing/bead qualification are in the component Ritchey notes.

- Script-accessible second copy (found 2026-11-20):
  https://www.gringineer.com/blogs/default-blog/1990-bianchi-catalog, 16 page
  photographs; specification table on `img-2506-2.jpg` and `img-2507-2.jpg`.
- Source: https://www.retrobike.co.uk/archive/1990-bianchi-catalogue.1676/
  ("1990 Bianchi Catalogo.pdf", 23 pp, Bianchi USA Inc., South San
  Francisco; the download needs a browser UA + cookie from the archive
  page, plain curl gets 406). Prose per bike on pp. 4-19, geometry on p. 20,
  full spec table on pp. 21-22 (read from x3 crops of the 1275 px page
  images). Series: Cross-Terrain, Mountain, Road; category = series plus
  the catalogue's level word (Professional / Competition / Performance)
  where given. Mondiale Frameset is prose-only (frame + Cinelli BB).
- CSV choices: paired columns split into Fork/Headset, Handlebars/Stem,
  Saddle/Seatpost, Hubs/Spokes, Freewheel-or-Cassette/Chain, Rims/Tyres,
  FD/RD/Shifters; Brakeset split into Brakes + Brake Levers when a lever is
  named. Freewheel vs Cassette follows the catalogue's "cassette" wording.
  Crank finish words (Powering, Superglide, hard anodized) dropped; "Ofmega
  Competition" -> Competizione; Pista "16T fixed gear" -> "fixed cog" (hits
  the existing null). "*" (CPSC reflector group) written out in Extras.
  The Pedals column is out of focus in the scan: SR MTP-126 / MTP-170,
  H.T.I. HTI-P15, H.K. VP-230, Sakae CTP-170 and Forza "H.K. VP-382S" are
  best readings.
- Generator: 1990 Bianchi block in each category, all ranged by year.
  Existing overrides ranged: FD / RD 'shimano 105' (Golden Arrow to 1989,
  105SC from 1990), FD / RD 'shimano deore xt' (M700 to 1989, M735 from
  1990), Brakes 'shimano dura ace' (1990 -> BR-7402 992; BR-7403 dual
  pivot from 1991, its DB start), Cranksets 'shimano dura ace 53 42t'
  (FC-7400 to 1988, FC-7402 from 1989), Shifters 'shimano 105 sis'
  (SL-1050 to 1989, SL-1055 from 1990), Pedals 'ofmega master' (Pista ->
  3880 Master Pista).
- Matcher corrections: Dura-Ace FD-7703 / EX rear -> FD-7403 / RD-7402;
  Ultegra RD-6500 / "Ultegra Tripple" -> 600 Ultegra 6400; 105 Golden Arrow
  -> 105SC; XT M700 -> M735; Chorus RS post -> C0R2 5742; Athena
  Ergopower -> null (Synchro-2 downtube levers, no row); X-1 Chroma 1989
  rear -> RD-X101.
- Picks: 1990 Shimano groups by DB dating (105SC, 600 Ultegra, Dura-Ace
  8sp, Deore XT M735 / DX M650 / LX M550, 200GS, Exage 500EX); XC-Pro hubs
  -> 3628 rear freewheel hub (bikes listed with freewheels); Campione crank
  -> 1705 Ofmega Vantage (Bianchi Quattro version). Bike-keyed: X-Press
  shifters only on Project 7 / Grizzly (6312 XC-Pro), 13-23T 7sp cassette
  only on Virata (CS-HG90).
- Linked to SunTour rows the DB dates only 1992 (same model, only row):
  XC-Comp FD 7959 / crank 7999 / hub 7982, XCT FD 7962 / RD 7952 / crank
  8004 / cantilever 8038, X-1 crank 8000 / cantilever 8032, Radius crank
  8007, XC-Pro seatpost 8046. This catalogue is evidence for year_from
  1990 on those rows; applied 2026-11-20 for 8000, 8007 and 8032, the three
  still flagged as date conflicts ([review](../../../ingest-component-catalog/references/known-catalogs/cross-catalog-notes.md#1990-bianchi-us-batch--applied-and-validated-2026-11-20)).
- Left unlinked: SR / H.L. / ITM / Modolo bars and stems, Tange CD /
  TH-series headsets, Bianchi Dakar / Advantage tyres, Vittoria Zefir /
  Formula 1, IRC Triathlete, C.S.T., Regina RL.SY90, Sedisport 270, Viscount
  saddles, SR / Strong posts, Modolo Quattro brakes,
  Ambrosio Montreal (several variants), Campagnolo Delta XL, Athena
  Synchro-2.
- Rapidfire shifters linked 2026-10-31 (Shifting Brake Levers): DX -> ST-M070 6359, LX -> ST-M060 7581,
  XT -> ST-M090 7577.
- Regression: all 31 catalogues regenerated; only the 1990 rows changed.
- Checked 2026-10-31 (was open): the 1987 Bianchi has one 105 bike, BRAVA,
  and its derailleurs read "Shimano 105 SIS", which keys to FD-1050 2462 /
  RD-1050 4449, so the bare 'shimano 105' Golden Arrow range never reached
  it. Every 105 part on it is a 1050 row; "Shimano 105 14-24T" freewheel
  stays unlinked (no 105 freewheel row).

## 1978 Bianchi — `1978_bianchi_spec.csv` (7 bikes, 102 specs, 36 linked)

- Source: https://labibleduvelocataloguesbianchi.blogspot.com/p/bianchi-1978.html (5 scans at 960px, no larger copy served: clothing page, Barcellona, Super-Turismo, Rekord 748 / 746 / 745, Specialissima Super-Leggera / Professionale and Campione del Mondo CX). Italian text, no prices: `data_source` 263, country IT inferred. Model codes in titles as 1973 ("Rekord/748 (00.4.60)").
- CSV written by hand from enlarged crops, translated to English as 1973. "flange normali" -> "normal flange", "bassi" -> "short reach", "a richiesta" sizes -> "Made to measure". Packed gross weights ("peso lordo") not recorded.
- Scope: Super-Turismo 10 velocita (00.4.47) left out as a city bike (T.T.T. "Rekord Inglese" upright bars, fenders, ESGE rack, kickstand, chain guard, lights), as the 1973 Ghisallo. Specialissima Professionale (00.5.11) kept as a bare row: the catalogue shows it with the Super-Leggera and only says packaging and weight are as 00.4.30.
- New overrides (all ranged): Super Record cranks -> 1509 1049/A, Record Strada crank -> 1496; Super Record "bassi" brakes -> 7005 4061/1 short reach; Universal Competizione/77 -> 1083 Mod. 77, Competizione CX -> 1086 CX; "normal flange" Record hubs -> 3259 1034 low flange; Super Record Strada pedals -> 3716 4021, Record Super Leggeri -> 3709 1037/a; Record Strada seatpost -> 5749; Record BB -> 30 1046/a; Regina Extra Oro chain -> 1382 (originally 1385, merged into 1382 on 2026-10-26); Regina Extra Oro 5-speed -> 2182, Extra 5-speed -> 8171. "Mavic special" set to null (substring hit Service des Courses 5108). No other catalogue's link count changed.
- Judgement calls kept: Super Record front -> 2313 1052/SR; the later 1975 start-date inference is unverified. The 2026-11-20 review of the 960px Barcellona drivetrain inset could not safely identify the exact cage/linkage variant for spec 12484; retain the current link pending a clearer original ([evidence](../../../ingest-component-catalog/references/known-catalogs/campagnolo.md#early-fitment-follow-up--2026-11-20-applied-and-validated)). "Ambassador" headset -> 9159 Ofmega 3150 Ambassador; bare "Campagnolo" CX pedals / seatpost via the existing 3708 / 5749 overrides.
- Left unlinked in the original pass: T.T.T. bars and posts, Clement tubulars,
  Regina chains (resolved below), Regina Extra Oro 6-speed (subsequently linked
  to existing 2194; the old no-row claim is superseded), Campagnolo "Sport"
  headset, Bianchi / Gipiemme house parts.

## 1978 Regina chain identities — 2026-11-17, applied and validated

Re-read the [original catalogue](https://labibleduvelocataloguesbianchi.blogspot.com/p/bianchi-1978.html):
scan 2 specifies `Regina Extra Tipo ORO 50 RECORD alleggerita` for Barcellona;
scan 5 gives the same for Super-Leggera and `Regina Extra Super Corsa ORO` for
Campione del Mondo CX. Regina C-78 p.5 distinguishes gold drilled 50 Record
from ordinary gold 50 Oro. Palo Alto 1976 p.13 separately lists plain and
drilled Super Corsa Oro, and 1979/80 p.20 calls the drilled chain Record Oro.
This resolves the original chain ambiguity; see [maker/retailer construction
evidence](../../../ingest-component-catalog/references/known-catalogs/regina.md#palo-alto-chain-identities-and-titanio-correction--2026-11-17-applied-and-validated).

| Spec | Bike | Original stored value | Applied link |
| --- | --- | --- | --- |
| 12482 | Specialissima Barcellona (00.4.02) | Regina Extra Oro 50 Record, lightened | NULL →1381 Extra 50 Record |
| 12503 | Specialissima Super-Leggera (00.4.30) | Regina Extra Oro 50 Record, lightened | NULL →1381 Extra 50 Record |
| 12523 | Campione del Mondo CX (00.4.31) | Regina Extra Super Corsa Oro | NULL →1382 Extra 50 Oro |

Added exact-value, 1978-only Chains overrides; preserved all value strings,
CSVs, bikes and source 263. Guarded updates affected exactly these three rows;
readback passed and rerun changed zero. The all-loaded-CSV comparison gained
only these links before application; afterwards all 21,196 comparisons and
15 pre-existing unrelated loss findings equal the pre-task baseline. All 13
test files pass. Task-created SQL, scan downloads and comparisons removed.

## Judgement calls — 2026-10-30

- 1987 Giro / Super Leggera "Gipiemme Cronosprint" seatpost -> 5789 Crono Sprint 600BA fluted (the plain group's post); 1983-84 Eco Pista "San Marco" -> 5883 G.S. later version; 1978 Rekord/746 "T.T.T. Record" -> 5716 Mod. Record, row redated 1970-75 -> 1970-78. +5. 1978 Specialissima Barcellona "Clement silk tubulars, extra-light" left unlinked (three road Seta Extra rows).
- 2026-10-30: 1985 (Japan) Strada "Sakae AH" stem -> 7902 SR-AH (row redated to 1986). +1. Sakae RY stems (Randonneur 700, Rekord 26, Speciale-II) left unlinked by decision: only 1974 RY and 1982 RY2 rows.
- 2026-10-30: 1978 Campione del Mondo CX "T.T.T. Record Competizione" bar left unlinked by decision (the DB splits it by Gimondi / Merckx / TdF bend; none printed).
- 2026-10-30: 1990 Alfana "Shimano Hyperglide silver 13-23T 7-speed" -> 7567 CS-HG70 (silver, 105SC; the Virata keeps 1202 via its bike range); 1990 Pista "Ambrosio Montreal black" -> 9175, as the 1987 Pista (row to 1990). +2.
- 2026-10-30, left unlinked by decision: 1985 Super Leggera / Centenario "Vittoria Seta" (three road Corsa Seta variants), 1984 Nuovo Racing "Wolber Rallye" (four Rallye rows).
- 2026-10-30: 1990 Giro / Super Leggera "Sedisport 270 black" chain left unlinked by decision (no 270 row).

## 1986 Bianchi (DE) — `1986_bianchi_de_spec.csv` (2 bikes, 36 specs, 24 linked)

- Source (2026-10-31): two German-language pages on https://labibleduvelocataloguesbianchi.blogspot.com/p/bianchi-1986.html, `bianchi-specialissima-x4-catalogue.jpg` (700x959, page 3, "Best.-Nr.: 1B2") and `1986 bianchi.jpg` (647x807, Rekord 920 Campagnolo). The page's other five "Bibibike Bianchi C4 1986 (1-5)" scans are the US C-4 Project catalogue loaded as 1988 (same pixel sizes as the saarf / bikalog set), so they were not used. `data_source` 324, country DE from the filename token. Partial: the rest of the brochure isn't online, and the two pages use different layouts, so they may come from separate brochures.
- No year printed. Dated 1986 by components: launch-spec X4 (Columbus SLX, C Record with Super Record brakes, Regina CX 6-speed; the X4 first appears in January 1986 price lists) and a pre-Syncro Victory group on the Rekord 920 (Victory Special, 6-speed Regina BX Silver). No Chorus, Syncro or Ultegra, which all date the "1986" C-4 catalogue to 1988.
- Michelin evidence follow-up (2026-11-14, user approved): Rekord 920 sheet
  explicitly identifies Michelin Select clinchers 20-622 (spec 18331 -> 6826).
  Component year_from 1987 -> 1986, source_ref 1 -> 324, with its description
  enriched to road clincher/20-622. The catalogue's 1986 attribution remains
  inferred; this is not a newly verified production start. Existing link retained.
- Translated to English on transcription (as 1977 Peugeot DE). Order number 1B2 and "12-Gang" go in Extras.
- New overrides: Victory Special RD -> 4168 G010-SM (to 1986); Victory 42/52T crank -> 1516; Victory hubs -> 3281 low flange (1984-87; also filled the 1985 Japan Campione hub, 81 -> 82); Regina CX 6-speed -> 2168 (the CX/CX-S row ends 1985); "Regina Silver" chain -> 1386 Extra "Silver BX" (1985-87, judgement: pairs with the BX Silver freewheel); Mavic GL 330 -> 5067; "Italia S. Turbo" -> 5503 Super Turbo; "Leather, S. Mundialita" -> 5497 Selle Italia Mundialita.
- Left unlinked: ITM bars and seat post, GPM headset, 3ttt Aero CCA bar and stem, plain alloy stem, spokes, frame and fork.

## 1989 Bianchi — `1989_bianchi_spec.csv` (19 bikes, 398 specs, 167 linked)

- **984D links applied and validated, 2026-11-21:** rechecked the original
  second table, `img-2487-2.jpg`: Forte **18613** and Volpe **18717** explicitly
  print `Dia-Compe 984D`. March1989 maker source447 p.18 identifies984D separately
  from984 Ratchet. Added **12226 984D, Advantage ZAOH**,1989–1989, and filled
  these two NULL links only; existing Axis18696→11549/984 is retained. No
  existing dates, CSV text or lever identities change. [Evidence, SQL and
  full validation](../../../ingest-component-catalog/references/known-catalogs/dia-compe.md#984d-maker-identity-and-bianchi-links--2026-11-21-applied-and-validated).

- **Branford tyre follow-through, applied 2026-11-19:** Mondiale tyre spec **18354**
  `Vittoria Oscar X`, formerly NULL, now links to **11791**. The original
  `img-2486-2.jpg` specification table was visually rechecked; Branford1990
  pp.22–23 supplies the tyre construction/size details. New Oscar X dates
  1989–1990, source471; existing bike/spec source325 is preserved. Automatic
  exact-name matching needs no override. All other mappings are unchanged.
  [Applied component evidence and validation](../../../ingest-component-catalog/references/known-catalogs/cross-catalog-notes.md#branford-tyre-tables-reconciliation--applied-2026-11-19).

- Source (2026-10-31): https://www.gringineer.com/blogs/default-blog/1989-bianchi-catalog, 19 photographed pages (no page text; the cdn.shopify.com `img-2470-1` ... `img-2487-2` files plus the lead `img-1540-1`). US edition: footer "Bianchi bicycles, for the U.S. market, are produced at F.I.V. Edoardo Bianchi, Treviglio", edge code "MB89 Bianchi (R) USA, Inc.", Minnesota dealer stamp, lbs. `data_source` 325, country US. No prices.
- Layout: one page per top model (full spec strip), two-up pages with short strips, geometry on p16, full spec tables on p17-p18 (used as the master; they agree with the per-model strips). Krono (time trial) has its own page but is missing from the tables, so its row comes from p04. Sections are not printed; category = Road / Mountain / Cross-Terrain plus Professional / Competition / Performance by position.
- Scope: Equinox, Tangent, Axis, Volpe ("Cross-Terrain", 700x35C) loaded (user, 2026-10-31): in 1989 they are drop-bar (Dirtdrop / DR-9 bars, aero levers, barcons), unlike the flat-bar 1990 versions that were held out. **Skipped:** Broadway (26 x 1.62", 5-speed, 19" mixte option; user agreed to skip as a city/ATB commuter) and Advantage (flat-bar 700x35C hybrid). Neither was put in the CSV.
- CSV choices as 1990: paired columns split, Brakeset into Brakes + Brake Levers, Freewheel vs Cassette by the catalogue's "cassette" wording, "*" written out as "(CPSC reflector group)". Catalogue "Shimano Ultegra" kept as printed (it is 600 Ultegra 6400).
- Picks (all ranged 1989): Deore XT-II M732 group (FD 2500, RD 4492, SL 6160, BR-M732 983, BL 430, FC-M730 1810, hubs 3551, chain 7642), Deore II MT62 (FD 2490, RD 4482, SL 6156, BR 975, BL-MT63 425, hubs 3543), Mountain LX M452 (FD 2528, RD 4524, SL-M453 6183, BR-M452 7628, BL-M451 7632, FC 1836, hubs 7629), Exage Country M250, Exage Action A350/A351 + Exage Motion A250 (Strada LX), Sport LX A452 + SL-A453 7-speed, SunTour Edge 4050 / Blaze BE34 / GPX / XC 9010 / XCD 6000 (FD-XD00 2661, RD-XD00 4790 instead of the "(1990)" rows). Cassettes bike-keyed: 13-28T -> CS-M732 7641 (Super Grizzly), CS-MT62 7630 (Grizzly, Incline); 13-23T -> CS-6400-7 1199 (Limited).
- Existing overrides ranged: FD / RD 'shimano 105' now Golden Arrow to 1988, FD-1050 2462 / RD-1050 4449 for 1989 (Krono); Brake Levers 'shimano 105 aero' BL-1050 406 for 1987-89; Cranksets 'shimano 105 52 42t' FC-1050 1778 for 1987-89; FD / RD 'shimano ultegra' from 1988; Seat Posts 'campagnolo athena' C0R2 5742 for 1988-89; Cassettes 'shimano hyperglide silver 12 28t 7 speed' CS-M732 for 1989 (Equinox). Athena Synchro-2 shifters -> null (matcher took the 1992 Ergopower row). Super Mundialita stays on 5497 (existing 1985-90 decision).
- 2026-11-05 handlebar: Equinox “Nitto heat treated Dirtdrop” -> 8607 RM-013-14S (1989 Nitto No. 11 lists the heat-treated MTB drop bar; the 1987 MB-1 review identifies Nitto / Bridgestone DirtDrop as heat-treated alloy).
- **Equinox shifter review, 2026-11-27:** spec 18658, source 325, `Shimano Deore XT-2 barcon SIS`, remains NULL. [Shimano's XT catalogue](https://www.retrobike.co.uk/gallery2/d/66245-1/shimanoXT1989catalog.pdf) identifies SL-M732 (6160) as a 22.2 mm clamp-on handlebar control, incompatible with the catalogue's explicit barcon mounting unless a conversion is evidenced. [Shimano's September 1988 SL-BS50 instructions](https://si.shimano.com/en/pdfs/si/S-1/SI-S-1-000-00-ENG.pdf) show a 7-speed SIS/friction bar-end control, a plausible alternative matching mount and speed, but Bianchi's text names XT-2 and does not specify SL-BS50; an original photograph or parts specification is needed to establish the exact model. Component 6146 includes SL-BS50 but currently starts in 1990 despite the dated instructions; correcting its date and assessing affected links is a separate action. No DB or generator changes made during this review.
- **Sport SX brake lever review, 2026-11-27:** spec 18488 (bike 1083, source 325), `Shimano Sport LX aero`, remains NULL. Shimano's [service instructions](https://manualzz.com/doc/53871379/shimano-bl-a453-brake-lever-service-instructions) identify BL-A451 as aero and BL-A452 as aero short; the existing records 444 and 445 cover both in 1989. BL-A450 (7219) is the standard non-aero lever, and BL-A453 (7220) is for flat bars. The [1989 Fuji catalogue](https://ebykr.com/library/fuji-1989-catalog/) specifies BL-A451 on the Sport LX Club Fuji, making it a plausible candidate but not evidence of Bianchi fitment. Bianchi's table provides no lever code or short-reach detail, so neither aero variant is confirmed; a marked original lever or Bianchi-specific parts listing could resolve it. Scoped generator/live comparison: all 398 specs unchanged; no DB or generator changes.
- Left unlinked at initial load (later resolutions recorded separately): SunTour XCE-4050 (only 1992 Dia-Compe XCE rows, dated "1980-1992"), SunTour / Shimano barcons, GPX FD and shifters (B / C variants), Croce d'Aune Synchro-2, Sport LX levers / pedals, Quattro derailleurs, Modolo / Ofmega / Gipiemme Quattro, Viscount, SR / KA posts and stems, H.K. / H.T.I. / SR pedals, Vittoria / IRC / C.S.T. tyres, Sedisport 270, Tange TH headsets, Ukai 21A, Campagnolo Omega Super.
- Subsequent GPX shifter review: Brava spec 18449 now links to the combined SL-GP00-B/C family 6286; mount is unspecified and the model is inferred from the period. [Evidence and validation](../../../ingest-component-catalog/references/known-catalogs/suntour.md#suntour-gpx-shifter-family-review--2026-11-27).
- Subsequent GPX front review: Brava spec 18447 links to the combined FD-GP00-SSB/SSH family 2634; mount and exact code are unspecified and the family is inferred from the period. [Evidence and validation](../../../ingest-component-catalog/references/known-catalogs/suntour.md#gpx-front-derailleur-mounts-and-date-review--2026-11-27).
- March 1989 Dia-Compe guide follow-through, user approved and applied
  2026-11-17: Axis **18697** `Dia-Compe 250S aero` -> **275 AC250S/BRS300**;
  Volpe **18718** `Dia-Compe BL-08 aero` -> **11536 BL08/BL08C**, both formerly
  NULL. Source 447 pp.1–2 supports these named lever families. Exact 1989
  overrides installed; all other specs retain their targets. Full comparison
  over 98 loaded CSVs found precisely these two gains; SQL rerun changed zero.
- Regression: all other catalogues regenerated with the old and new generator; SQL byte-identical.

- 1990 Dia-Compe MTB brochure (©1989), source **448**, user approved and
  applied 2026-11-17: Axis Brakes **18696**, `Dia-Compe 984`, **NULL -> 11549**,
  new 984 cantilever, dates **1989–1990** (1989 attestation is this bike catalogue).
  Exact 1989-only generator override installed. Forte **18613** and Volpe
  **18717**, `Dia-Compe 984D`, were then left NULL: that brochure prints no D
  suffix. Both now link to distinct12226 using March1989 source447, applied
  and validated2026-11-21 above.
  All 98 loaded CSVs / 21,382 generated mappings compared before/after; only
  the Axis brake mapping changed. Existing live comparison discrepancies unchanged;
  SQL rerun zero changes. [Component evidence and restoration data](../../../ingest-component-catalog/references/known-catalogs/dia-compe.md#mtb-brochure--ebay-800322888787-photo-inventory-reviewed-2026-11-17).

## 1991 Bianchi (JP) — `1991_bianchi_spec.csv` (14 bikes, 247 specs, 123 linked)

- Source (2026-11-04): https://2velo.com/bianchi-bicycle-catalog-90s/ `1991-catalog-p0111` .. `p1111.jpg` (11 scans, 299-400 px
  wide; the same files are on labibleduvelocataloguesbianchi.blogspot.com/p/bianchi-1991.html). Japanese catalogue, yen prices,
  back page "ビアンキ日本総代理店 株式会社エヌビーエス" (NBS Co., Osaka); `data_source` 358, country JP. p01 cover (road list), p02-p06
  road bikes two per page with SIZE / COMPONENT / WEIGHT strips (the lower bike's strip is cut off on most scans; p04 is missing),
  p07 geometry, **p08-p09 full spec table** (model, sizes and colours, frame, fork, brakeset, bar and stem, crank, pedals /
  derailleurs and shifters, saddle and post, hubs, freewheel and chain, tyres and rims, misc, weight), p10-p11 clothing and
  accessories. The table was read from 3.5-4x crops (a Swift CoreGraphics crop tool in the session scratchpad; `sips` crops from
  the centre); katakana names transliterated.
- Bikes: road Proto (Columbus MAX, C-Record), X-4 (TSX, C-Record), Mondiale (SLX, Croce d'Aune), Super Leggera (SLX, Chorus), Giro
  (SLX, Athena), Virata (Super Set-2 Tange Prestige, Ultegra), Alfana (Tange Prestige, 105SC 1055), Trofeo (Cromor, SunTour Quattro
  with Ofmega / Modolo Quattro); MTB Signature (MAX, Deore XT), Aranessa (Cromor-OR, 46 cm, Deore XT Rapidfire), Grizzly (Tange
  Prestige, SunTour XC-Pro, Ritchey Logic fork), Peregrine (Deore DX), Sika (SunTour XC-LTD), Osprey (Deore LX).
- **Left out (hybrid):** Equinox and Axis, 46-55 cm, 700x38C Bianchi Dakar tyres, Sakae FX-Hybrid / EX-Cross bars, top-pull
  thumb shifters: the flat-bar cross-terrain models held out of 1990 (the 1989 drop-bar versions were loaded).
- Bar / stem order: the table prints the bar first ("TTT コンペティション / ビアンキ" = TTT Competizione bar, Bianchi stem;
  "Sakae MTB-227 / Ritchey Force Comp"). Unreadable or ambiguous text kept generic, not guessed: X-4 bar "TTT" (reads "S.レゲロ"),
  Mondiale / Super Leggera / Giro freewheel "Regina 13-23T 7-speed" (the model reads like "RL SY90"), Signature rim "Araya, super
  hard" (NEW RM-? number unreadable), Trofeo chain "SunTour", Trofeo saddle "Selle Italia". Prices in Extras.
- Overrides added (keys are this catalogue's exact strings): C-Record 53/42T crank -> 1482 (1987-94; the substring hit was
  1483, 1985-86); "... aero levers" brakes -> 560 Delta C-Record, 565 Chorus Monoplaner, 558 D500 Athena, 567 Delta Croce d'Aune;
  1055SG crank 1782, Ultegra crank 1790 FC-6400; 105SC (1055) brakes 960 / FD 2467 / RD 4455 / hubs 3527, pedals 1055 3955 and
  PD-1056 3956; Deore XT crank 7578 FC-M730-SG (no FC-M735 row), XT U-2 brake 984 BR-M733, XT hubs 3551; DX brakes 7660 / hubs 3542;
  LX crank 1807 / brakes 7582 / hubs 3544; SunTour XC-Pro brakes 1056 / crank 1998 / FD 2659 / shifters 6311, XC-LTD crank 1997 /
  FD 2658 / RD 4784 / shifters 6310; Sakae MTP-126 -> 9755; CS-HG70 7567, CS-M732 7641, CN-HG70 7568; Vittoria Super Criterium
  -> 6884; Trofeo "Ofmega Quattro" crank -> 1705 Ofmega Vantage (Bianchi Quattro version, 1980-90). Ranges widened: Chorus Synchro 2
  shifters 7027 to 1989-91, Campagnolo Athena hubs 3237 for 1991-92 (3236 D300 stays 1989).
- Left unlinked: Aranessa "Shimano Deore XT" brakes (BR-M732 1989-91 or BR-M734 1991-93), 105SC SIS shifters (SL-1055 BCAI / FCAI),
  Deore DX crank (no FC-M650 row), Deore XT "Competition" pedals, SunTour Quattro FD / RD, Modolo Quattro brakes, Campagnolo Sigma
  and Omega XL rims (only Strada / clincher rows), Vittoria Nuovo Pro (only the 1984-88 Nuovo Pro 260 and 1996 R.T. rows).

### Grizzly hub review — 2026-11-17, correction applied

Re-read [original Japanese specification table p.9](https://2velo.com/wp-content/uploads/2014/03/1991-catalog-p0911.jpg).
The Grizzly row names SunTour XC-Pro hubs and a SunTour 12-28T seven-speed
cluster. It prints no hub code; the table's FREE AND CHAIN heading does not
independently establish threaded versus cassette construction. Enlargement of
the 400px scan aids reading but supplies no missing model number.

Live bike **1147**, source **358**, hub spec **19546** (`Hubs`, raw label `Hubs`,
`SunTour XC-Pro`) formerly linked to **3628 HB-XP00-R**, a specific threaded rear hub.
Cluster **19547**, `SunTour 12-28T 7-speed`, links to cassette **1222 CS-AP00-S7U**.
The links are incompatible if both refer to the rear wheel; neither generic
group text nor the previously inferred cassette mapping identifies a numbered hub.
[SunTour 1990 p.10](https://www.disraeligears.co.uk/site/suntour_bicycle_equipment_catalog_1990_-_page_10.html)
was re-read from the held scan: it distinguishes HB-XP00-R's BC 1.37x24 thread
from FH-XP00-7U / -6R freehubs and their CS-AP00 cassettes. It does not identify
the 1991 Japanese bike's fitment. Do not infer 11016 or extend its 1990 dates.

**Applied 2026-11-17, user approved: 19546 component_id 3628 -> NULL**, preserving text, labels, sources
and all component records. Scoped Grizzly/1991 NULL guard added; normal matching
outside that bike/year preserved. Keep
19547's existing link pending independent mechanism/model evidence; this review
does not establish it as correct. Need a period Bianchi parts list or original
front/rear hub markings. Restoration if later justified: guarded NULL -> 3628
on the same spec/bike/source/text, and revise the scoped guard.

Full fixed-snapshot comparison across 96 loaded catalogues / 21,176 specs showed
no generated mapping or finding changes from the guards; tests passed. Application
changed this spec and Battaglin 12943 only, two rows total; rerun changed zero.
Readback confirmed the original text, label/raw label and source 358; cluster
19547 remains on 1222. Quality check found zero structural errors; remaining
generator/live losses are the 16 Huret Rival specs. Completed unlink task removed
from TODO; hub/cluster identification evidence remains open. Temporary SQL removed
after validation. This supersedes treating the stored cassette link as proof of
the actual mechanism in the earlier cross-catalog drift triage.

### Grizzly cassette stock number and hub review — 2026-11-22

[SunTour 1990 p. 10](https://www.disraeligears.co.uk/site/00_main_images/suntour_bicycle_equipment_catalog_1990_-_page_10_main_image.jpg)
lists silver XC-Pro cassette **CS-AP00-S7U**, stock **47179802**, with
FH-XP00-7U. [SunTour 1991 p. 6](https://www.disraeligears.co.uk/site/00_main_images/suntour_bicycle_equipment_catalog_1991_-_page_6_main_image.jpg)
lists the same stock number under **CS-AP00-S7** for the 12T top cog and
gives the standard XC-Pro ratio **12×14×16×18×21×24×28T**. The page lists
the 13T-top cassette under stock **47179803**. Its threaded FW-AL10-S7
offerings begin at 13T. The [1991 US Bianchi catalogue](https://www.bikecatalogs.com/document/2798)
independently calls the same-year Grizzly's XC-Pro 12–28T seven-speed
cluster a cassette. Together these sources support retaining **19547 → 1222**
as a documented fitment inference for the 12–28T Japanese specification.

The part numbers distinguish the hub generations even though the cassette
stock number carries over. The 1991 XC-Pro freehub is **FH-XP01-7**, offered
in both 130 and 135 mm widths and both 32H and 36H. The 1990 **FH-XP00-7U**
has different stock numbers and shares the cassette. The Japanese table
gives only the hub group. Live **19546** remains NULL until an original
hub identification distinguishes the generations. The cassette link and
its source **358** were verified in live readback. No DB changes were needed
to resolve the cassette question.

## 1992 Bianchi (JP) — `1992_bianchi_spec.csv` (8 bikes, 96 specs, 30 linked)

- Tyre follow-up (2026-11-09, done): printed pp.20-21 ([Virata](https://2velo.com/wp-content/uploads/2014/03/1992-catalog-p2011.jpg), [Alfana](https://2velo.com/wp-content/uploads/2014/03/1992-catalog-p2111.jpg)) confirms Vittoria Formula-1 tubular, specs 19675 / 19687 -> existing 6875 Competition Formula Uno. Singular normalized wording now has 1992 bike-scoped overrides; existing plural 1990 Pista rule stays. No new Vittoria row or date changes. Compound 1989 Formula 1 and Juniore stays unlinked. The Nuovo Pro ambiguity recorded here was subsequently resolved by the existing user-approved 1991–92 -> 6893 Nuovo Pro 260 override: specs 19427 / 19445 / 19651 / 19663 verified linked in the 2026-11-14 read-only tyre audit, with component dates now 1984–92. R.T. rows remain distinct; this audit made no DB changes.
- Source (2026-11-04): https://2velo.com/bianchi-bicycle-catalog-90s/ `1992-catalog-p1711` .. `p2311.jpg` (7 scans, 400 px; the
  labibleduvelo copy adds one accessory page), printed pp. 17-23 of a larger Japanese catalogue (yen); `data_source` 359, country JP.
  p17 "'92 Road" opener, p18-p21 road bikes with English spec blocks (PRICE / WEIGHT / SIZE / FRAME-FORK / HANDLE BAR-STEM /
  COMPONENT / TIRE-RIM / SADDLE-POST, read from 4x crops), p22-p23 clothing and accessories. No MTB pages survive.
- Bikes: Proto, X-4, Mondiale, Super Leggera, Giro, Virata (600 Ultegra 8-speed), Alfana (105SC), Premio (new, RX100). The
  "COMPONENT" group name is fanned to Brakes, Crankset and Derailleurs. **Skipped:** the bike at the top of p20 (name cut off;
  Superset-2 Tange Prestige, 600 Ultegra 8-speed Dual Control, Vittoria Nuovo Pro tubular / Araya Pro Staff 340, Avocet Racing-I
  white, about ¥186,000). Prices, the X-4 and Virata weights and Premio sizes were too blurred to read; Sakae bar / stem codes
  and the Premio Viscount saddle model left generic.
- Era note: the catalogue still says "Campagnolo C-Record" in 1992, the year Campagnolo renamed it Record (RD-01RE 4134); the C-Record
  parts link to the 1990-91 C-Record rows (4133 R010, 560 Delta, 1482) as printed, with no global range change.
  "Vittoria Criterium" (Mondiale) -> 6884 Criterium Super, ranged to 1992 (9061 Criterium ends 1981).
- RX100 fix (2026-11-04, +4 links, 30 -> 34): Premio "Shimano RX100" (fanned to Brakes, Crankset, FD, RD) was unlinked because
  each category has an A550 and an A551 row. Ranged overrides 'shimano rx100' 1989-93: brakes 1007 BR-A550, crank 1838 FC-A550-SG / -BP,
  FD 2531 FD-A550, RD 4532 RD-A550-GS / -SS (the A551 rows start 1994-95). Hubs (3579) and pedals (3977) already had overrides.
  Regression: 1993 unchanged (195).
- 1993 Eros RD fix (2026-11-04): override 'shimano rx100 gs sis' (Rear Derailleurs) 4533 RD-A551-GS (1994-97) -> 4532 RD-A550-GS / -SS;
  bike_spec 1544 relinked by a one-off UPDATE (the back-fill only fills NULLs). 1993 still 195 links.
- Found while checking: 10569 "Vittoria Corsa CX" (1996, inserted by the Guida '96 pass 2) duplicates 6880 Corsa CX Servizio Corse,
  which the 'vittoria corsa cx' override points at; merged into 6880 the same day (see cross-catalog-notes.md, Guida '96).

## 1993 Bianchi era check — 2026-11-04 (user request)

- Query: 1993 Bianchi links whose component years exclude 1993. 34 found; 5 are undated rows (Tange Levin CD, Mavic 192, Ukai
  CR-700, Michelin Hi-Lite Supercomp H.D., Vittoria Flash M23), left as is.
- Relinked (20 specs, one-off UPDATEs; the overrides were split into `{ to: 1992, id: old }, { from: 1993, id: new }` so other
  catalogues keep their picks): MG/Bianchi Team Record brakes 578 BR-14RE (1995-2000) -> 7038 BR-02RE (Brakes 'campagnolo record'
  range now 1990-93 -> 7038, 1994+ -> 578) and RD 4134 RD-01RE -> 4135 RD-11RE; Campagnolo 12-23(T) 8-speed cassettes x4 1186
  Exa-Drive (1994-96) -> 1185 CS-8S Record steel; Gatorade Team Dura-Ace 8-speed 1205 CS-7400-8 -> 1208 CS-7401; Krono / Genius
  Chorus FD 2286 FD-01FCH -> 7060 FD-11SCH and RD 4109 RD-01CH -> 7055 RD-11CH; SBX Veloce FD 2317 (1995-99) -> 7061 FD-01SVL;
  Virata 105 crank / FD / RD 1782 / 2467 / 4455 (1055) -> 1783 / 2468 / 4456 (1056); Peregrine Deore LX top-pull FD 2491 -> 2492
  FD-M561, RD 4484 -> 4485 RD-M560, hubs 3544 -> 3546 FH-M560; Grizzly XT hubs 3552 FH-M737 (1994-98) -> 3551 FH-M732 / HB-M730;
  Project 7 XC-Comp RD 4783 RD-XC20 -> 9717 RD-XC01-GXB.
- Widened year_to to 1993 (no 1993 sibling row): 5071 Mavic M 231 CD (1991), 5097 Open 4 CD (1991), 5503 Selle Italia Super Turbo
  (1992), 2964 Campagnolo HS-01RE Record headset (1991).
- Left: Krono "Campagnolo Chorus 8-speed Downtube shift levers" -> 5976 Chorus Friction graphite (1990-92); the DB has no 1993
  Chorus down-tube lever row. Regression: all catalogues regenerated, link counts unchanged; 1993 still 195 links.
- Follow-up 2026-11-23: spec 1460 remains pinned to 5976; its 1990–92 bounds were estimates, not a maker catalogue end date (see Campagnolo section C notes). Eight-speed describes the drivetrain and does not establish whether the lever indexes. Campagnolo's [1994 spare-parts catalogue](https://www.campagnolo-sirer.cz/img/cms/Katalogy_nahradnich_dilu/1994_Katalog%20nahradnich%20dilu%20Campagnolo.pdf), pp. 32–33, lists Record/Veloce/Stratos levers and a separate SL-01SFR friction assembly, but does not identify the Krono fitment or establish equivalence to graphite 5976. The [1993 Bianchi USA catalogue](https://upcycles.cc/blogs/catalog-archive/1993-bianchi-catalog-usa) is a potential original-fitment source; obtain a clear lever detail or coded parts specification. Preserve the existing link and dates pending identification; neither the date conflict nor friction alone proves a wrong link.
- Original-catalogue follow-up 2026-11-24: inspected the [1993 USA catalogue PDF](https://cdn.shopify.com/s/files/1/0786/6705/5385/files/1993_Bianchi_catalog_-_USA.pdf?v=1751937419), PDF pp. 12–13. The Krono photograph shows a downtube lever, but its small pivot and blade do not resolve the finish, indexing mechanism or part number. The specification combines “Campagnolo Chorus 8-speed” and “Downtube shift levers” under derailleurs/shift levers and separately lists an eight-speed cassette; it gives no lever code. A [secondary listing for an SBX Chorus Chrono](https://velopedia.com/bikes/bianchi/1993/sbx-chorus-chrono-41485/) says Synchro, but does not document its source or establish that it describes this USA Krono fitment. Live readback confirms 5976 is the graphite friction row and 7027 represents earlier Chorus A281/Dual-Mode options; neither is identified by this photograph. Retain the existing link provisionally, without changing dates. A coded parts list or clearer, documented original-fitment close-up remains needed. No DB changes.
- Alfana 105SC fix (2026-11-04, +5): 1992 "Shimano 105SC" (fanned to brakes, crank, FD, RD) was unlinked (1055 and 1056 rows both
  match); overrides 'shimano 105sc' 1990-92 -> 960 BR-1055 / 1782 FC-1055-SG / 2467 FD-1055 / 4455 RD-1055, 1993+ -> 1056 crank / FD / RD.
  1991 "Shimano 105SC (1055) SIS" shifters -> 6134 SL-1055-BCAI, as the 1990 Alfana. 1991 124 links, 1992 38. Only these two CSVs use
  the strings.
- Virata 600 Ultegra fix (2026-11-04, +4): 1992 "Shimano 600 Ultegra 8-speed" crank -> 1790 FC-6400, FD -> 2479 FD-6401, RD -> 4467
  RD-6401 (the 8-speed generation, 1992-97); brakes -> 966 BR-6400 (user call, as the 1990-91 Viratas; BR-6403 967 would also fit). 1991 "Shimano CS-6400SG 13-23T 7-speed" -> 1202 CS-HG90 / 600 Ultegra 7-speed HG, as the 1990 Virata. 1991 125
  links, 1992 42.
- 1993 Virata "Shimano 105" hubs 3527 FH-1055-HG (7-speed) -> 7761 FH-1056-HG (8-speed, matching its 1056 group); Hubs override 'shimano 105'
  now 1990-92 -> 3527, 1993+ -> 7761 (its other users are 1987 bikes on 3524). bike_spec 1534 relinked by UPDATE.

## 1992 Bianchi era check — 2026-11-04 (user request)

- 11 links pointed at 1988-91 Campagnolo rows; relinked to the 1992-range rows (one-off UPDATEs) and the overrides ranged so 1991
  and earlier keep their ids: Super Leggera Chorus crank 1487 -> 1488 FC-01CH, FD 2286 -> 7040 FD-01SCH (Chorus RS), RD 4108 -> 4109
  RD-01CH; Giro Athena FD 2281 -> 7044 FD-01SAT, RD 4092 -> 4091 RD-01AT (Athena RS); Proto / X-4 "C-Record" FD 2283 -> 2306
  FD-01SRE, RD 4133 -> 4134 RD-01RE, seat post 5737 -> 7037 SP-RE (Campagnolo renamed C-Record to Record for 1992; the Japanese
  catalogue kept the old name). New override entries carry explicit pre-1992 ranges (FD Athena 2281, FD C-Record 2283, RD Athena
  4092, crank Chorus 1487) because a range miss means "no link", not a matcher fall-through.
- Check: generated SQL for every catalogue diffed old vs new generator; only 1992 changed (the 11 links). 1992 now has no
  off-era links.

## 1991 Bianchi era check — 2026-11-04 (user request)

- 10 links outside the component's years; no 1991-generation sibling rows exist for any of them.
- Widened year_to to 1991 (same part, the catalogue is the evidence; revert value in brackets): 7641 Shimano CS-M732 (1989; the
  table prints the code), 1705 Ofmega Vantage (Bianchi Quattro version) (1990), 3628 SunTour XC Pro rear freewheel hub (1990), 6258
  SunTour Quattro shifters (1990), 6826 Michelin Select (1990).
- Unlinked (do-not-link overrides, one-off UPDATEs to NULL): Virata / Alfana "Nitto Dynamic III, 90 degree" stem (was 8562, the
  1980 Dynamic; 6614 is the 1989 Dynamic-2; no Dynamic III row) and "Panaracer Record" tyres (was 6841 Record P-27RD, a 27" tyre
  from the 1980 bucket). Only this CSV uses either string. 1991: 125 -> 121 links, none off-era.

## 1992 Bianchi Campagnolo seatpost links — 2026-11-06

- User approved the two clear Campagnolo links: Super Leggera "Campagnolo Chorus"
  (bike_spec 19650) -> 7041 SP-CH Chorus RS; Giro "Campagnolo Athena"
  (19662) -> 7049 SP-AT Athena RS. Both seatposts are in the Campagnolo 1992
  Road Range, data_source 18, and dated 1992-1995 in the component table.
- Added 1992-only ranges to the Seat Posts overrides, retaining every earlier
  range. Generated all 81 catalog CSVs before and after: exactly these two
  matches changed (6061 -> 6063 linked specs in generated output).
- Applied only the two generated NULL-only back-fill UPDATEs through
  /private/tmp/bianchi-1992-seatposts.sql; two rows affected and read-back
  confirmed both targets. No component changes. Live Seatpost coverage
  229 -> 231 of 728 specs (31.7%).


## 1992 Mondiale Croce d'Aune brake link — 2026-11-07

- User-approved: Brakes spec 19633, "Campagnolo Croce d'Aune", -> 567
  Campagnolo Delta, Croce d'Aune. The 1989 and 1991 Mondiale already use 567.
- Original 1992 Japanese catalogue scan re-read:
  https://2velo.com/wp-content/uploads/2014/03/1992-catalog-p1911.jpg
  names the Croce d'Aune component group and pictures Delta-style calipers.
  The photo does not resolve internal pivots; model identification follows
  the named group and continuity with 1991.
- 567 year_to 1991 -> 1992, source_ref 110 -> 359. This is a 1992 bicycle
  fitment attestation, not proof of manufacture in 1992. Description retained.
- Brakes override retains 1988-1991 and adds a 1992-only Mondiale range.
  All 81 CSVs compared: exactly this link changes (6076 -> 6077 generated
  linked specs); no other component or bike-spec changes.
- Applied `/tmp/bianchi-1992-mondiale-brake-link.sql` in a transaction:
  one component date/provenance update and one spec link. Read-back passed;
  rerun affected zero rows. Live brake coverage 625 -> 626 of 1013.

## 1993 Europa / Nyala cassette links — 2026-11-09, user approved

- Specs **1570** Europa `Shimano Hyperglide 13-28T 7-speed` and **1723** Nyala `Shimano Hyperglide black 13-30T 7-speed` -> **1195 Shimano CS-HG50**. Group-based identifications: Europa has Altus A10, Nyala C10, both list CN-HG50 chains; Shimano's 1993 p. 73 explicitly specifies CS-HG50 for both groups. The Bianchi spec text itself does not print CS-HG50. Added bike-specific 1993-only overrides; no CSV values/labels or component dates changed.
- Source chart: https://www.disraeligears.co.uk/site/00_main_images/shimano_bicycle_system_components_-_93_page_073_main_image.jpg (component source 84). This resolves the old CT10/AT10 cassette-source-gap claim for these two bikes.
- Superseded2026-11-20 for Ocelot1740: original PDF26 explicitly prints a freewheel; label/CSV corrected to Freewheel and linked to7603. See the applied cluster review above; this does not verify all other1993 product fields.
- Applied `/private/tmp/cassette-review-2026-11-09.sql`, shared with two Peugeot links and Mavic correction. All 81 CSVs compared: exactly those four links changed, 6066 -> 6070. SQL rerun zero rows. Cassette-label coverage **42/45 (93.3%)**.

## 1985 Rekord26 DC400N link — 2026-11-12, user approved

- Products1986 printed p.4 (source209) explicitly names DC400N,38–48mm,117g per caliper. New component10977,1985–86 (earlier attestation is this Bianchi sheet,source144); spec5797 `Dia-Compe DC400N` linked from NULL. Exact generator override ranged1985–86. DC500N681 is a distinct43–57mm brake and was not used.
- All85 CSVs compared: only this mapping and the1986 Raleigh QS400N mapping changed. Live DB comparison confirms the same two links; no spec identities or values changed. SQL rerun zero changes. Evidence/SQL: `/private/tmp/existing-source-review/`.

- 2026-11-13: 1990 Signature 2 / Peregrine Brake Levers ("Shimano Deore XT / DX
  2 finger") relinked 430 -> 7577 ST-M090 / M091 / M092 and 425 -> 6359
  ST-M070 / M071: beside Rapidfire shifters the 2-finger lever is the
  integrated shift / brake pair. Bike-scoped 1990 overrides.
- 2026-11-13 Shifters sweep (user approved): 1993 bare "Rapidfire Plus" now
  links by each bike's rear derailleur group: Denali 6360 ST-M075 (DX),
  Peregrine 7708 ST-M560 (LX), Ibex / Osprey / Project 3 7716 ST-M320
  (Exage LT), Project 5 7713 ST-M520 (Exage ES), Super Grizzly / Nth FS 7667
  ST-M900-8 (XTR). SBX / Veloce "Campagnolo Ergopower" -> 6349 EC-02VL Veloce.
  Bike-scoped 1993 Shifters overrides. Supersedes "Rapidfire Plus (no rows)".

## 1987 X4 / Mondiale C-Record review — 2026-11-17

The [component evidence review](../../../ingest-component-catalog/references/known-catalogs/campagnolo.md#c-record-crank-and-1987-bianchi-follow-up--2026-11-17-read-only-review)
confirms the early engraved-shield crank was still shown in February 1987 and the exact n.18 bis
copy really is dated 12/86. The 2026-10-09 assertion that 1483 was wrong-era is superseded:
1987 is not sufficient evidence to move 1107 / 1127 either way. The October assertion that both
seatpost links were already correct is also superseded by the original-table discrepancies below. At that review stage both remained on 1482 pending a
clear original marking/parts crosswalk or a deliberate unlink decision. The deliberate
unlink is now applied below; the initial review made no matcher changes.

The original `1987Bianchi.pdf` at VeloBase CatalogScans (local Downloads copy), PDF p.4 bike
photos and pp.14-15 specification spread were checked. P.15's first two rows are X4 / Mondiale.
Their explicit table values differ from the loaded CSV/live records:

| Spec | Bike / field | Stored text / link | Original table / next action |
| --- | --- | --- | --- |
| 1113 | X4 seatpost | Campagnolo C Record / 5737 | Campagnolo Super Record; reconcile with p.4 group/photo before selecting a post variant. |
| 1133 | Mondiale seatpost | Campagnolo C Record / 5737 | Gipiemme Cronosprint anodized; preserve the named model and resolve its multiple post variants before linking. |
| 1117 | X4 chain | Regina C Record / 1384 | CX silver in the Regina freewheel/chain cell; review correcting stored text and whether current CX-family link remains appropriate. |
| 1137 | Mondiale chain | Regina C Record / 1384 | Corsa silver in the Regina freewheel/chain cell; identify independently of CX before linking. |
| 1119 | X4 rims | Campagnolo / NULL | Bianchi Speciale; retain the house-part wording without inferring the manufacturer. |

The complete-bike/group prose on p.4 is not a per-part code list; the photographs show customised
parts and do not settle all variants. Record any source conflict explicitly instead of replacing
these specific table entries with a blanket group name. The February 1987 manufacturer brochure
confirms family availability, not exact Bianchi fitment. The Bianchi review changed no CSV, spec links or generator fields. The subsequently approved
1483 date/source/description enrichment was applied and validated 2026-11-17; see component
notes for old/new values and validation. SQL and disposable maker scans were removed afterwards.
The p.4/p.15 renders were removed after the equipment-table repairs below were validated.
The original user-held PDF and source URLs remain available as recorded above.

## 1987 equipment-table repairs — 2026-11-17, applied and validated

Source 46, VeloBase `1987Bianchi.pdf`, PDF p.15 equipment table (bike names on p.14),
https://velobase.com/Pages/Resources/CatalogScans.aspx . Original held at
`/Users/acooper/Downloads/1987Bianchi.pdf`; the temporary p.4 / p.15 renders were removed after
application and validation. The original PDF remains available for unresolved fitment questions.

Use the explicit equipment table for stored spec text. P.4's blanket C-Record group description
and customised complete-bike photographs do not override a separately named seatpost, chain or
rim in the table. This records the source conflict rather than pretending the catalogue gives
one consistent account of every part. The photographs do not establish a Cronosprint part code.

The local gitignored CSV, generator mappings and live DB specs are corrected as below (user
approved 2026-11-17). All rows retain source_ref 46 and their original spec IDs.

| Spec | Bike / field | Old text / link | Applied text / link |
| --- | --- | --- | --- |
| 1113 | X4 seatpost | Campagnolo C Record / 5737 | Campagnolo Super Record / 5761 |
| 1133 | Mondiale seatpost | Campagnolo C Record / 5737 | Gipiemme Cronosprint anodized / NULL |
| 1117 | X4 chain | Regina C Record / 1384 | Regina CX silver / 1384 |
| 1137 | Mondiale chain | Regina C Record / 1384 | Regina Corsa silver / 1376 |
| 1197 | Super Leggera chain | Regina C Record / 1384 | Regina Corsa silver / 1376 |
| 1217 | Trofeo chain | Regina C Record / 1384 | Regina Corsa silver / 1376 |
| 1237 | Nuovo Alloro chain | Regina C Record / 1384 | Regina Corsa silver / 1376 |
| 1119 | X4 rims | Campagnolo / NULL | Bianchi Speciale / NULL |

- 5761 is the existing period 4051/1 Nuovo Super Record single-bolt post, already the generator's
  1981+ Super Record choice (1980-1988); do not substitute the older two-bolt 5759.
- Cronosprint 5789 600BA fluted, 5790 600CA Aero and 5788 600DD are distinct, period-plausible
  posts. The qualified Mondiale text gets an explicit scoped NULL. Existing bare Cronosprint
  mappings for Giro / Super Leggera are separate recorded decisions and have not changed.
- The table names CX for X4 and Corsa for the other four chains. Existing 1384 CX / CX-S and
  1376 Extra 50 Corsa retain these identities; manufacturer catalogues distinguish CX-S / Corsa
  (Regina notes, sources 138 / 190). `silver` is retained as the table's finish, not used to replace
  the printed model with generic 8799 50 Silver or 1386 Silver BX. No component metadata changed.
- `Bianchi Speciale` remains a house rim, explicitly NULL; the p.4 prose calls it Bianchi Black
  and Silver Pro. Neither description identifies a Campagnolo model/manufacturer.
- The earlier five-chain "C Record means CX-S" inference is superseded. All five inaccurate CSV
  values were removed, and the obsolete `regina c record` override was replaced by exact named,
  bike/year-scoped CX/Corsa mappings. Crank links 1107 / 1127 have not changed and remain unresolved.

Validation before DB application: CSV round-trip comparison found only the eight cells above
changed. Using one live component snapshot, all 94 loaded CSVs / 20,845 generated specs were
compared before/after; exactly these eight identities/texts changed, with five link replacements,
one removed link and two retained links. Generated linked specs 7,544 -> 7,543. A simulated snapshot
with the eight reviewed SQL updates restores exact CSV/DB identity pairing: no missing rows or
ambiguous identities, and the same unrelated baseline of 6 gains / 33 losses / 0 changed targets.
The full test suite and `git diff --check` passed. This preparatory comparison was a simulation;
actual application and live validation follow below.

Applied 2026-11-17 on user approval: eight guarded UPDATEs inside one transaction affected eight
spec rows; rerun affected zero. Readback confirmed the eight text/link pairs above, the original
spec IDs and source_ref 46. Compared every selected spec field to the saved pre-apply snapshot:
only these eight reviewed value/link pairs changed; bike and component snapshot records were
unchanged. No rows inserted/deleted. Live catalogue: 15 bikes / 300 specs, 164 linked (one fewer
because the incorrect Mondiale C-Record post was unlinked).

Live generator comparison after application covered all 94 loaded catalogues / 20,845 specs:
no missing or ambiguous identities, and the same pre-existing unrelated 6 gains / 33 losses /
0 changed targets as before this repair. Whole-DB quality report: zero errors; remaining review
findings are not new repair approvals. SQL, CSV/generator backups, snapshots, helper scripts and
both sets of temporary source renders were removed after validation. Old/new values and the
original source/page references above preserve the correction evidence without scratch files.

The later crank review below deliberately unlinks 1107 / 1127 because the generation
is unresolved. A numbered Cronosprint fitment for Mondiale (1133 deliberately NULL)
also remains unidentified. Do not reopen the
house-rim manufacturer or substitute a seatpost variant without new distinguishing evidence.


## 1987 crank generation links — 2026-11-17, applied and validated

Reviewed the remaining source-46 fitment item against the recorded original-source
review above and current live rows. No new source hunt: the February 1987 maker
brochure (source 414, scans 4/5/13, imprint scan 16) attests the early engraved-shield
crank in 1987. The Bianchi source-46 `1987Bianchi.pdf` pp.4/15 does not distinguish
that specimen from the later painted-shield version. The previous generator cutoff
is therefore insufficient evidence for these two exact fitments.

User approved and applied 2026-11-17:

| Spec / bike | Stored text | Old link | Applied link |
| --- | --- | --- | --- |
| 1107 / 78 X4 | Campagnolo C Record 53/42T | 1482 | NULL |
| 1127 / 79 MONDIALE | Campagnolo C Record 53/42T | 1482 | NULL |

Both specs retain label_id 38, raw_label Crankset and source_ref 46. Their bikes
retain brand_id 2, year 1987 and source_ref 46. No text, component or CSV change.
Component 1482 retains GUID `532FA429-4CD0-48D8-90CD-1F60ECB92A3D`, years
1987–1994/source 110; alternative 1483 retains GUID
`F9D3301A-7F48-4698-A44B-49AC8228AB22`, years 1985–1987/source 414. Neither a
substitution nor a merge is justified. Reopen only with an original fitment close-up
showing the shield position/style or a period Bianchi parts crosswalk identifying
the generation; tooth count and self-extracting bolts do not distinguish it.

The local generator now has bike/year-scoped NULL guards for these exact values,
before its existing year-based fallbacks. Existing mappings outside these two
fitments are retained. The old comment asserting a proven 1987 boundary is superseded.
Mondiale seatpost 1133 remains deliberately NULL under the already applied decision:
no code distinguishes 5789 600BA, 5790 600CA or 5788 600DD. Seek a new original,
Mondiale-specific code or distinguishing fitment photograph before reopening it;
repeating generic Cronosprint catalogue searches supplies no new identity evidence.

The two SQL UPDATEs guarded each original spec/bike/text/link/source identity in
one transaction. Restoring the old assignments would require setting component_id
back to 1482 for these exact NULL identities and revisiting their generator guards;
that would restore unsupported fitments and is not the current decision.

Pre-apply validation: one live snapshot, all 96 local CSVs / 21,176 generated specs,
exactly the two intended 1482-to-NULL mapping changes and no other generated spec
changes. The selected source-46 catalogue has 300 specs: before application the
new plan differs only on 1107/1127; simulating those two NULL updates yields 300
unchanged, no missing/ambiguous identities and no link differences. Regression
coverage checks each candidate alone, both candidates, and the bike/year scope.
`npm test` passes all 12 test files; `git diff --check` passes.

Application affected exactly two bike_spec rows; rerun affected zero. Live readback
confirmed 1107 / 1127 are NULL with the same text, raw labels, source_ref 46 and
bike identities above; seatpost 1133 remains NULL. Compared all snapshot spec
identities/texts/links to the pre-apply snapshot: exactly those two component_id
fields changed, with no inserted/deleted specs. Snapshot bike, source and component
identity records were unchanged. The live source-46 comparison now has 300/300
unchanged mappings, no missing/ambiguous identities and no link differences.
Rechecking all 96 CSVs / 21,176 specs against the original plan again found only
the two reviewed link removals. The completed TODO action was removed; unknown
identities and reopening evidence remain in these notes and link-decisions.md.
Task SQL, snapshots, validation outputs and helper scripts were removed after
successful validation; the user-held source PDF remains available.


## 1981–1983 Super Record rear links — 2026-11-17, applied and validated

**2026-11-27 Super Leggera link:** At the user's request, spec 985 (source 42) NULL → 4151, 4001 / 0102018 with screw-mounted spring. This is a period-appropriate judgment call consistent with the earlier Super Corsa selections, not identification of the spring from the [1983 catalogue](https://ebykr.com/library/bianchi-1983-catalog/), which names Super Record without distinguishing variants. 4149 is a specific PAT.80 first-generation specimen; 4152 is a pivot-mounted spring variant with stored dates 1984–88, not independently proven introduction dates. Added a 1983 Super Leggera scoped generator override. Readback confirmed 4151 and unchanged text/source; SQL replay affected zero rows. Scoped pre-apply comparison showed only spec 985 gained; the all-catalogue comparison after application retained the 15 pre-existing unrelated Huret losses, with no gains or changes. Link-decision tests passed. To reverse, restore 985 to NULL guarded by 4151 and remove its override.

**Subsequent user selection:** 1981 Super Corsa spec 6492 and 1982 spec 6647 NULL → 4151, Super Record 4001 / 0102018 with screw-mounted spring. This supersedes the NULL decision below for these two specs; the catalogues themselves do not distinguish the generation. Scoped 1981–82 Super Corsa generator mapping added; readback confirmed 4151 and sources 165/166 while 1983 spec 985 was still NULL. SQL replays changed zero rows; 118-catalogue comparison retained 15 unrelated Huret losses and no gains or changes. Updated link-decision test passes and keeps other years/bikes guarded. Restore either spec to NULL guarded by 4151 and adjust its override if superseded.

User approved clearing unsupported PAT.80 specimen 4149 from rear specs **6492**
(1981 Super Corsa, source 165), **6647** (1982 Super Corsa, source 166) and **985**
(1983 Super Leggera, source 42). All three were then NULL, retaining text/raw labels and
sources. Earlier year-based 4149 picks above are superseded: the generic group
name does not distinguish this late first-generation specimen from second-gen
4151. The original generator guard prevented reassignment; subsequent scoped
judgment calls are recorded above. See the
[component review](../../../ingest-component-catalog/references/known-catalogs/campagnolo.md#super-record-and-early-campagnolo-specimen-review--2026-11-17)
for specimen/photo evidence, the complete five-catalogue change and live validation.
