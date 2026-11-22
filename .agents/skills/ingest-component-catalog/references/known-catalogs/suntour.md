# SunTour catalogs processed so far

## XCD front FD-XD10-GXH identification — applied and validated 2026-11-22

Hooprider's [box close-up](https://cdn.freewebstore.com/resize/244687/camera-uploads_2016-08-12-14.56.52.jpg/1200/1200/0/)
reads `FD-XD10-GXH`. Its [box and unit photograph](https://cdn.freewebstore.com/resize/244687/camera-uploads_2016-08-12-14.56.43.jpg/1200/1200/0/)
shows the same long, narrow outer cage slot, sculpted inner cage, black
linkage and grey body as [2662's main photograph](https://velobase.com/CompImages/FDerailleur/B80767F4-F90B-4E92-9692-CBDE36E1D52A.jpeg).
The [side view](https://cdn.freewebstore.com/resize/244687/camera-uploads_2016-08-12-14.57.26.jpg/1200/1200/0/)
shows the bottom-pull cable anchor. The boxed comparison identifies the main
specimen's construction. The two unrelated photos in the VeloBase gallery
still have their separate evidentiary limits below. The [1990 maker catalogue,
p. 13](https://www.disraeligears.co.uk/site/suntour_bicycle_equipment_catalog_1990_-_page_13.html)
confirms FD-XD10-GXH, 28.6/31.8 mm clamps, 24T capacity (22T with oval
chainrings) and 115 g for the 28.6 mm version. The main specimen's clamp size
was not measured.

Updated **2662** from `SunTour XCD 6000 (1990)` to
`SunTour FD-XD10-GXH, XCD 6000`; search text from `SunTour XCD 6000` to
`SunTour FD-XD10-GXH XCD 6000`; source_ref **1 → 385**. Description now reads
“Bottom-pull triple front derailleur with grey body, black linkage and a slotted
cage. 28.6 or 31.8 mm clamp, 24T capacity (22T with oval chainrings), 115 g for
the 28.6 mm version.” The 1990 attestation and specimen ID
`7C8AC7D8-1AB3-43F1-90EB-D891069C922D` are retained. For restoration use the
previous title, search text and source above and the applied description in
the next section. FD-XD00-GX **2661** remains a separate model.

Removed the generator's proposed 2662 link for the 1990 Bianchi Axis
`SunTour XCD Top Pull` value. The Axis has no corresponding live spec, and
2662 has zero bike links. Readback confirmed one updated row and zero changes
on replay. Normal, near and parenthetical duplicate scans returned no candidates
for 2662. The full generator comparison over 118 loaded CSVs and 24,829 specs
had identical findings before and after. The DB quality audit also had identical
findings, with zero integrity errors. The matcher regression test passed.

## XCD mixed-gallery description — 2026-11-20, applied and validated

User approved with “apply”. Guarded SQL inserted one catalogue source and
updated exactly two component descriptions. The rerun inserted/updated zero
rows. SQL and validation scratch files were removed after exact readback;
old/new values below preserve the restoration evidence. No component additions,
merges, title, search-text, date, group or bike-link changes.

**2662 applied description at the time (superseded above):**
`XCD triple front derailleur; grey body, black upper linkage, slotted cage. Source gallery mixes constructions; FD-XD00-GX and 18T claims are not verified for its main specimen. Exact XD00/XD10 identity unresolved.`

**Captured old description:**
`XCD 6000 triple front derailleur, VeloBase model FD-XD00-GX, dated 1990: 28.6mm clamp, 5mm Allen clamp/cable bolts, no cable stop, 18T difference. Exact relationship to catalogue FD-XD10 remains unresolved.`

Source_ref **1** and VeloBase UUID stay unchanged. The applied description
qualifies the page-level FD-XD00-GX/18T claims and retains visible construction;
it does not identify the main specimen as XD10. The former clamp/bolt dimensions
are omitted because the gallery does not securely attribute them to that specimen.
Live 2662 has zero bike links. Keep 2661 and 2662 separate; the scoped duplicate
report proposes no XCD front merge. Existing 1990 top-pull override remains;
this description correction does not newly validate that mapping.

Validation: exact before/after readback confirms both approved descriptions,
all other fields unchanged apart from Mavic 5062 source_ref 357 → 483, and
zero bike links retained on both rows. Related Mavic rows 5063/10199/10607
are unchanged. Both descriptions fit 255 characters (5062: 227; 2662: 213).
Whole-DB quality summary and every finding are identical before/after:
zero errors, 2,075 review findings. The source table gains one row; component
count remains 11,218. Generator component reads use ID/title/category rather
than descriptions/source provenance; no identity or matching inputs changed,
so no full generator rerun or code tests were needed. The existing duplicate
and keep-separate decisions above stand. Unresolved evidence gaps remain open.

Restoration, only if deliberately requested: guard the current UUID, applied
description and source_ref, restore the captured old description and source_ref
(5062=357, 2662=1). Remove source 483 only if unreferenced and deliberately
rolling back its registration. All source URLs remain in these notes.

## XCD front 2662 mixed specimen gallery — 2026-11-20, read-only

At the initial review, 2661 was FD-XD00-GX (1988–1990/source 199), while
2662 remained uncoded (1990/source 1). Its then-current description attributed
FD-XD00-GX and 18T to VeloBase; the applied correction above supersedes that
wording. The research below made no DB, source-registry, matcher or bike-link
changes.

Directly retrieved [2662's original page](https://velobase.com/Pages/ViewComponent.aspx?ID=7C8AC7D8-1AB3-43F1-90EB-D891069C922D)
and visually inspected all three full-size photographs:

- [Main photograph B80767F4](https://velobase.com/CompImages/FDerailleur/B80767F4-F90B-4E92-9692-CBDE36E1D52A.jpeg)
  (credited to eBay seller legendarymen2010) shows a black upper linkage,
  grey body and sculpted cage with a long narrow outer slot, on red cloth.
- [Added photograph BC5F23A2](https://velobase.com/CompImages/FDerailleur/BC5F23A2-6F7B-4649-9F00-9DB347E7D7C3.jpeg)
  and [reverse B735C600](https://velobase.com/CompImages/FDerailleur/B735C600-8FAE-4B36-964F-DCEB874DBDE7.jpeg),
  both credited to movinyl, show a different construction: black clamp/body,
  silver linkage and broad outer-cage opening. The accompanying original
  instruction heading explicitly lists FD-XD00-GX, FD-4050-GX and FD-XE45-GX;
  a SunTour parts bag is also pictured. An instruction covering several models
  is not alone proof of the exact enclosed specimen's identity.

This is a mixed-construction gallery, not three views of one unit. Consequently
neither the page-level model field nor the added photos' literature establishes
FD-XD00-GX for the main red-background specimen. This qualifies the earlier
placeholder review's treatment of the gallery as one specimen; do not merge
2662 into 2661 or transfer measurements across its photographs.

A new comparison is the [Bicyclist FD-XD10-GXH listing](https://bicyclist.cc/product/suntour-xcd-front-mech-1990/).
All four original photographs were inspected (uploads/2021/10,
`Suntour-XCD-6000-front-mech-1990-%E2%80%93-FD-XD10-GXH-1.jpg` through `-4.jpg`).
They resemble 2662's main unit in linkage/cage construction. The fourth shows
inner-cage markings, but its 516-pixel-wide image does not establish a reliably
readable full model code. The seller's model/date attribution is not a verified
maker crosswalk. Its [separate group listing](https://bicyclist.cc/product/full-suntour-xcd-accushift-groupset-from-1990-3-x-7-speed/amp/)
also calls the front XD10; this is the same seller, not independent confirmation.

Other SunTour cases, including Alpha SS, were triaged from existing notes but
not fully re-reviewed. No SQL prepared. Temporary HTML, comparison photographs
and the update helper were removed after documentation.

### Close-up and instruction-sheet follow-up — 2026-11-20

Research only; no date or DB changes. Live readback still has the corrected
2662 description above, source 1 and no bike links; 2661 remains separate.

All six 1800-pixel photographs in the [Velosaloon listing](https://www.velosaloon.com/products/suntour-xcd-fd-xd10-gx-triple-clamp-on-front-derailleur-from-1988)
were visually inspected. They show the grey-body/black-linkage/slotted-cage
construction of 2662's main photograph. The [inner-cage close-up, DSC_0201](https://cdn.shopify.com/s/files/1/1041/1160/products/DSC_0201_c3c0b77f-7cd4-4813-b7c7-1da400a2eee9.jpg?v=1620551994)
clearly shows maker/country, **GX**, VIA and a two-character marking read as
**EI**. It supplies no readable full XD00/XD10 code. This is a useful original
specimen photograph, but the seller's FD-XD10 title is still an attribution,
not maker identification. Neither its advertised year nor a date decoding of
the small stamp is adopted. The close-up narrows the earlier request for a
better cage photograph: a readable GX mark alone cannot settle this identity.

The [SunTour front-derailleur instruction scan, BikeCatalogs document 2652](https://www.bikecatalogs.com/document/2652)
([PDF](https://www.bikecatalogs.com/download/2652), originally a Retrobike gallery
scan) was downloaded, rendered and visually read. Its model heading lists
XP00, XC10, XL00, X100, CR00, XE01, XM01, XT01, XU00 and TP00, all with GXH
suffixes; **neither XD00 nor XD10 appears**. Its generic installation and cable
drawings do not provide the missing model-to-construction identification.

Potential boxed-specimen leads are [Hooprider's FD-XD10-GXH listing](https://www.hoopriderparts.com/product/suntour-fd-xd10-gxh-xc-d-triple-front-derailleur---nos)
and [eBay item 267766385070](https://www.ebay.com/itm/267766385070). Accessible
index/search text advertises boxed units, but full pages/downloads returned
403 or cache misses; no maker box label was inspected. These remain leads,
not corroboration. The [South Salem front-derailleur page](https://sscycleworks.com/components/derailleur-front-suntour.html#XCD-4050-triple-318)
also surfaced an XCD-4050-labelled listing; its seller text does not supply an
XD00/XD10 construction key and was not used as identification evidence.

**Remaining evidence:** a readable maker-labelled XD10 box photographed with
its corresponding unit, or a maker service/parts drawing distinguishing XD00
from XD10. A full model stamp on the main specimen would also resolve it if
one exists. Another GX-only close-up, seller title or rereading the already
held catalogue is insufficient. This review kept 2661/2662 separate and
retained the qualified description. The 2026-11-22 boxed specimen above
supplied the evidence needed to update 2662. Task downloads and renders were
removed after recording their source URLs.


## XCD freehub 3630 specimen and Axis review — 2026-11-18 (description correction applied)

**Exact generation remains unresolved.** Compared the original specimen,
Edition No.89 and the 1990 catalogue, then re-read the original 1989 Bianchi
Axis table. None supplies the missing specimen-to-code crosswalk. Do not
retitle/merge 3630 into 11416 or assign FH-XD11 from the shared XCD branding.
The completed photo comparison supersedes the old instruction merely to
inspect the original reference; new evidence must supply a code or measured
construction/cassette distinction.

### Evidence

- [3630 original listing](https://www.velobase.com/Pages/ViewComponent.aspx?ID=DAFB66FD-BC5E-4B30-BF80-58D3AD65720D),
  source **1**, leaves Model and Rear Spacing blank; reports cassette,
  36 holes, low flange, aluminium shells and steel axles. Its sole full-size
  [photograph](https://www.velobase.com/CompImages/Hubs/866015BC-C994-430B-876F-1612E3FCF5CA.jpeg)
  shows front/rear grey shells, SUNTOUR XCD markings, hollow axles with
  separate quick releases and an exposed rear cassette body. No numbered
  model/date stamp, scale, fitted cassette or measured spacing. The thumbnail
  is the same photograph, not another view. Similar shell shape/colour is
  insufficient to distinguish generations or six/seven-speed bodies.
- Source **427**, [Edition No.89 PDF p.29 / printed p.28](https://www.radiolabworks.com/bikes/catalogs/Suntour%201988%20%2389%20Components%20Catalog.pdf#page=29),
  visually read: NEW **FH-XD10-U7** (7-speed) and **FH-XD10-R6** (6-speed),
  32/36H, 130mm, QR, grey forged alloy shell and black Cr-Mo axle. Listed
  710/690g include the pictured cassette offering; they are not bare-hub
  measurements to compare directly with 1990. Existing **11416** represents
  both configurations. Sprocket references are **FH-HC10** (black XCD sets),
  represented by **11414**. HB-XD00 and HB-XD10 are separate freewheel hubs.
- Source **385**, [1990 printed p.14](https://www.disraeligears.co.uk/site/00_main_images/suntour_bicycle_equipment_catalog_1990_-_page_14_main_image.jpg),
  visually read: **FH-XD11-7U**, 32/36H, 130/135mm, 470g at 36H/130mm,
  QR-RA00-R; cassette **CS-AP00-K7U**, listed silver. Separate **FH-XD00-6R**,
  32/36H, 130mm, 465g, cassette CS-AP00-K6R black, already **11034**. Do not
  infer the seven-speed model from a bare freehub photo or substitute the
  six-speed row. 3630's original page does not attest any of these codes.
- Source **325**, original [Bianchi 1989 table, img-2487-2](https://cdn.shopify.com/s/files/1/0661/0501/6425/files/img-2487-2.jpg?v=1764982612),
  visually read: Axis hubset **Suntour XCD-6010**, stainless spokes; separate
  cassette **Suntour 13-28T 7-speed cassette**, chain Suntour GPX. Neither
  FH code nor CS-AP00 code is printed. This rules out a screw-on-freewheel
  interpretation of the bike, but does not establish the loose specimen's
  generation or prove an exact cassette code. Retain the current broad hub
  link **18707 → 3630** and existing cassette link **18703 → 1224**; the
  latter is an existing mapping, not independent proof of 3630's compatibility.
  The 1990 maker table says silver. The catalogue description was reconciled
  on 2026-11-22 below. The Axis spec gives neither cassette finish nor code.

### Applied description correction and validation

The old 3630 description asserted `for the CS-AP00-K7U cassette` without
that identification in its specimen evidence. User approved removing that
assertion and describing the observed/reported hub set, retaining uncertainty.
Retained title/search text, **1988–1990**, UUID, source **1** and all links.
The legacy dates are retained, not newly verified production boundaries.

Old description: `SunTour XCD 6000 (freehub), Japan. XCD 6000 hub set with a cassette freehub body (aluminium shell), for the CS-AP00-K7U cassette; the freewheel version is 3631 HB-XD00.`

Applied description (**201 characters**): `XCD low-flange quick-release hub set; grey aluminium shells, steel axles, 36 holes and a rear cassette body; SUNTOUR XCD shell markings. Exact model code, rear spacing and cassette fitment unconfirmed.`

- Read-only part/name query confirms distinct **3631**, **11034**, **11036–11039**,
  **11415/11416**; no separate coded FH-XD11 row found. This does not justify
  inserting one while 3630's identity is unresolved. SunTour/Hubs duplicate
  report has one configuration pair, with no candidate involving 3630.
- Live baseline: 3630 has only Axis spec **18707**; 11416 has no bike links.
  The Axis cassette spec **18703 → 1224** is separate. The existing 1989
  `suntour xcd 6010` override remains unchanged. No identity/matcher fields
  changed. Description is not read by the matcher; no regeneration was
  needed for this description-only correction.
- Guarded SQL affected exactly **one row**, then **zero** on rerun. Readback
  verified the exact description, length **201**, retained title/search text,
  UUID, **1988–1990** dates and source **1**. Component count remains
  **10,764**. Exact bike-spec readback confirms **18707 → 3630** and
  **18703 → 1224**, with original text and source **325** retained.
  No CSV, generator, source, date, identity or bike-link changes.
  Restore the exact old description above, guarded on the applied text
  and retained identity/source/dates, if reverting.
- Maker scans, HTML, specimen/Bianchi downloads and duplicate output removed
  after this review; durable URLs and evidence are recorded above. Reopen the
  identity only for a specimen code, comparable body/spacing measurements or
  a coded original XCD-6010 fitment/parts source.
  Applied SQL was removed after successful readback and zero-change rerun.

### XD10 comparison and cassette 1224 correction — 2026-11-22

- Scan 33 of [Fuji Edition No. 19](https://ebykr.com/library/fuji-1989-catalog/)
  specifies a grey QR **XCD 6000 XD10 cassette rear hub** on the 1989 Sundance.
  The same column lists a seven-speed 13/30T cassette as “FH XD01”. Treat that
  as Fuji's printed cluster wording. The hub listing gives a coded 1989 fitment
  for a different bicycle and supplies no identification of the Bianchi
  XCD-6010 or specimen 3630.
- The [boxed XCD pair](https://jp.mercari.com/item/m41041393168) has a threaded
  rear hub. The maker box in photo 4 gives 100 mm front, 135 mm rear and 36H.
  [MOMBAT's 130 mm pair](https://mombatbicycles.com/MOMBAT/PartsForSalePages/hubs.html)
  likewise has a threaded rear hub, visible in photo HUB112. The
  [Bicyclist example](https://bicyclist.cc/product/full-suntour-xcd-accushift-groupset-from-1990-3-x-7-speed/amp/)
  labels its 130 mm cassette hub FH-XD11-7U in seller text. Its shell, logo and
  general cassette-body appearance overlap the unmeasured specimen, and the
  group photograph supplies no readable code on the hub. The
  [SunTour compatibility sheet](https://www.bikecatalogs.com/download/2654)
  compares 1991 and 1992 bodies and does not distinguish XD10 from XD11.
- Re-read [1990 SunTour p. 14](https://www.disraeligears.co.uk/site/00_main_images/suntour_bicycle_equipment_catalog_1990_-_page_14_main_image.jpg),
  source **385**. The **CS-AP00-K7U** seven-speed cassette cogs, stock code
  **47179702**, are listed in silver against **FH-XD11-7U**. The separate
  six-speed cassette cogs are listed in black. As the old 1224 wording
  “7-speed cassette cogs, black, AccuShift Plus compatible.” conflicted
  with the cited maker page, the guarded update replaced it with
  “AccuShift Plus seven-speed cassette cogs, code 47179702, listed in silver
  for the FH-XD11-7U freehub (1990 SunTour catalogue, p. 14).”
  A seller photograph shows dark cogs alongside an XD11-attributed group.
  The revised description states what the maker catalogue lists.
- First application affected one component description and the rerun
  affected zero. Readback confirmed the cassette's title, UUID, 1989–1990
  dates and source 385, with Axis **18703 → 1224** and **18707 → 3630**
  preserved. The description correction verifies the catalogue offering.
  3630 still needs a code, comparable body measurement or coded Bianchi
  fitment. Reverting only the description under the same ID, UUID, source,
  date and title guards restores the old value above.

#### Axis teardown comparison — 2026-11-22

The [owner's 1989 Axis teardown](https://johns-recycled-bicycle.blogspot.com/2017/05/1989-bianchi-axis-cyclocross.html)
shows a dark cassette and nine left-side balls in `IMG_5500.JPG`.
[Sutherland's hub service table](https://paulinoposada.github.io/bike/documents/epdf.pub_sutherlands-handbook-for-bicycle-mechanics.pdf#page=232)
lists the 1989 XCD with 9 × ¼-inch left and 12 × 3/16-inch right balls.
[SunTour Edition 89, p. 28](https://www.radiolabworks.com/bikes/catalogs/Suntour%201988%20%2389%20Components%20Catalog.pdf#page=29)
lists FH-XD10-U7 and black seven-speed cassette cogs. The Axis teardown
supports the 1989 assembly as a candidate. It lacks a readable hub code
or sufficient detail to compare the body fastening. The standalone 3630
image has no bearing or cassette-body measurements for comparison.
The 1990 seller-attributed XD11 group also shows dark cogs, so finish alone
does not distinguish the two hubs. Live Axis specs **18707 → 3630** and
**18703 → 1224** were checked. An original code or distinguishing
construction still needs to connect a specific model to the bike or specimen.

## PLG 6290 handed-code reconciliation — 2026-11-18 (applied and validated)

The LD-5100 versus LS-5700/LS-5800 question is resolved at the PLG pair/family
level: the 1989 codes identify **right and left levers**, not two competing
complete sets. Retain existing canonical title `SunTour LD-5100, PLG` and
stable ID **6290**; the later handed codes are recorded in its description.
User approved and applied the update below. No new component, merge, retitle
or bike-link change.

### Visually inspected evidence

- Source **428**, [1988-range spread 8, printed p.13](https://www.equusbicycle.com/bike/suntour/catalog88/pdf/suntour88%20-%200008.pdf):
  PLG non-index **LD-5100**, handlebar thumbshift, power control R.H./L.H.,
  22.2mm clamp, 150g. The nearby photograph is labelled **PL10**, not PLG;
  do not use that down-tube lever photo as a PLG construction comparison.
- Source **427**, [Edition No.89 PDF p.36 / printed p.35](https://www.radiolabworks.com/bikes/catalogs/Suntour%201988%20%2389%20Components%20Catalog.pdf#page=36):
  PLG **LS-5700 right** (31359921), **LS-5800 left** (31359931), alloy
  handles, black plastic hoods, chromium-plated steel clamps, Power Ratchet,
  handlebar mounting, 7/8in (22.2mm), **150g/pair**. No NEW marker on this
  offering. Absence of that marker alone is not continuity proof.
- [Original specimen listing](https://www.velobase.com/Pages/ViewComponent.aspx?ID=60DD3362-5238-48B3-AA9E-470213416012)
  and all four attachments inspected. Photos
  `8963B964-96A2-410F-99E1-21F1A7ABE830.jpeg`,
  `98AC71DF-6239-464E-9CF7-E29C45DA3399.jpeg`, and
  `85E141F6-C40F-4AD5-93B9-50D10660B635.jpeg` under
  `https://www.velobase.com/CompImages/Shifter/` show the same PLG design
  as No.89: black Suntour hood, exposed alloy lever neck with black ribbed
  tip, round silver tension fitting with winged adjuster, matching cable
  outlet and chrome clamp arrangement. Visible TAIWAN marking is not a date
  or model code; do not assert Japan as specimen manufacture location.
  The fourth attachment, `DCA644AB-0928-4BD8-9E40-295EDA373DFD.jpeg`, is an
  unattributed catalogue-table crop explicitly giving LD-5100 for L/R,
  Power, 22.2mm and 150g. Its unknown edition is not separate dated evidence.
- The combination of PLG family designation, handed-code table, matching
  visible construction and matching dimensions/control/weight supports one
  family record through the 1989 catalogue. This is a reconciliation
  inference, not a factory statement that every internal service part is
  interchangeable or that every LD-5100 specimen carries LS markings.

### Applied update and validation

One guarded update: **year_to 1988 → 1989**, **source_ref 428 → 427**;
retain **year_from 1987**, title/search text and all other identities.
1989 is catalogue availability, not a proven production endpoint. The
1987 Miyata fitment independently supports retaining the earlier start.

Old description: `Non-index handlebar thumbshift levers, power control right and left, 22.2mm clamp, 150g.`

Applied description (**195 characters**): `PLG non-index handlebar thumbshift pair; LD-5100 (1988), LS-5700 right/LS-5800 left (1989); Power Ratchet; 22.2mm clamps; alloy levers, black plastic hoods, chrome-plated steel clamps; 150g/pair.`

Restoration: return that exact old description, year_to 1988 and source_ref
428, guarded on the applied new values. UUID remains
`60DD3362-5238-48B3-AA9E-470213416012`.

- Live part/name/description search found no existing LS-5700/LS-5800
  component or another PLG shifter row. SunTour/Shifters duplicate report
  returned no candidate groups. No duplicate insert is warranted.
- Sole matching live bike spec is **22396**, 1987 Miyata Street Winder,
  `SUNTOUR LD 5100PLG`, source **407**, linked to **6290**. Existing exact
  bike/year override retains it. No unlinked named-code candidate was found.
- Generator/live baseline over loaded catalogues: **23,168** compared,
  **23,153** unchanged, **15** pre-existing lost mappings, zero gained,
  changed, missing or ambiguous. Post-load comparison across **107 loaded
  catalogues** exactly matches the baseline scope, files, summary and findings.
  Changed fields (description, dates, source_ref) are not read by
  `readComponentRecords`; title/category/ID remain unchanged.
- Applied SQL affected exactly **one row**, then **zero** on rerun.
  Readback confirms the exact description, **1987–1989**, source **427**,
  retained title/search text/UUID and the one existing link. Source 427
  resolves to the registered Edition No.89 catalogue. Component count
  remains **10,764**. No bike or generator writes.
- Exact bike readback confirms **22396 → 6290**, retaining its stored
  value, source **407**, Street Winder identity and **1987** year.
- Downloads, renders, duplicate report, applied SQL and before/after mapping
  files removed after successful readback, zero-change rerun and comparison.
  Durable evidence and restoration values remain above.

## Palo Alto Cyclone II lever identity — 2026-11-17

Palo Alto 1981/82 printed p.32 (image 19), retailer 32-101, is existing
**6282 LD-2300 Top-Mount (Symmetric)**. Its centrally paired slotted levers,
endless clamp, recessed Allen bolts and automatic Synchro-Shift trim match the
coded manufacturer photograph in [No.59 p.4](https://www.disraeligears.co.uk/site/suntour_catalog_no_59_-_page_4.html).
LD-2350 **6266** is the separately pictured braze-on version; ordinary Cyclone
side-mounted friction levers are separately sold as 32-104/105 on the retailer
page. This supersedes the former no-row claim. Existing 6282 already has the
correct specifications, 1981–85 dates and maker source 127: no DB change or new
source. [Full evidence and scan-page correction](cross-catalog-notes.md#palo-alto-identity-review--applied-and-validated-2026-11-17).

## XC Sport CB-6600 early evidence — 2026-11-15, read-only review

- Manufacturer *Inside Line*, **Vol.5 No.2, Fall 1985**, hosted by MOMBAT:
  [cover](https://mombatbicycles.com/85XCSport1.jpg),
  [printed p.2](https://mombatbicycles.com/85XCSport2.jpg),
  [printed p.3](https://mombatbicycles.com/85XCSport3.jpg), visually checked.
  P.3 explicitly identifies the **XC Sport CB-6600 roller-cam caliper** and
  separate **CB-6700 lever**. Internal coil spring replaces the original XC
  external bow spring; additional pad-height adjustment and Delrin rollers
  are specified. This is pre-release/announcement evidence, not proof of
  commercial availability in 1985. No data_source row registered yet.
- This supersedes the assumption that a 1986 XC Sport brake cannot be
  reconciled with **1058 CB-6600 XC Sport 7000** solely because that row started
  in 1987. Source 310's 1986 Peugeot Orient Express explicitly specifies the
  XC Sport chainstay rear. **Applied on user approval, 2026-11-15:**
  **22583 NULL -> 1058**, year_from
  **1987 -> 1986**, source_ref **91 -> 310**, year_to **1988** and description
  unchanged, with an exact 1986 Orient Express override. No row insertion or
  merge. Original values above are the restoration baseline. Transaction
  affected one component and one spec; rerun zero changes. All 93 loaded CSVs
  compared: only 22583's generated mapping gained a link. Live readback and
  scoped quality checks clean, all nine test files pass. Temporary SQL and
  comparison files removed. Full six-half review and validation are recorded
  in the bike skill's cross-catalog notes; only unresolved actions remain in TODO.
- Do not automatically apply this identification to the 1986 Miyata Ridge
  Runner **22585**: its source 349 p.11 says XC without Sport and shows a
  chainstay-mounted rear (mounting corrected from seatstay after the 2026-11-21
  review of VeloBase's 300dpi original). The scan does not establish the external-bow versus
  internal-coil construction/code. Keep 1052 CB-6100 versus 1058 open until a
  sharper original-bike view or parts code is available.

## SunTour road catalogue 1989 (pp 7-8, 13-14, system chart) and Japanese Superbe page c. 1983 (equusbicycle.com, 6 scans)

- Source: https://equusbicycle.com/bike/suntour/suntourscans.html.
  `data_source` 86 "SunTour road catalogue (1989)": Superbe-Pro-page-1 / 2
  (printed pp 7-8), Suntour-GPX-page-1 / 2 (pp 13-14, "'89 NEW COMPONENTS"),
  Suntour-road-range-89 (Component System Chart, Light Weight: Superbe Pro,
  Sprint 9000, GPX, Olé, Edge 4050, Blaze 3040 / alpha-2000 / 1500 / RT1000).
  `data_source` 87 "SunTour Superbe catalogue page, Japanese (c. 1983)":
  SuperbeJapanese.jpg, undated, RD-3100 Superbe Pro marked NEW; dated c. 1983
  on that basis, no year_from moved on it.
- All SunTour rows (brand 56) are velobase. Retitled (old titles): 4745
  "SunTour GPX" (RD) -> RD-GP00-SSB; 4769 "SunTour Superbe Pro" (RD
  1986-1994, 198g) -> RD-SB00-SSB (Accushift); 2634 / 2635 "FD-GP00 SSB" /
  "FD-GP00 SSH"; 2650 / 2651 "FD-SB00-B" / "FD-SB00-H" -> -SSB / -SSH; 1047
  "SunTour BA-B00-N, Superbe Pro" (typo) -> BA-SB00-N (standard reach); 1048
  -> "(short reach)"; 463 -> BL-SB00-N / -S; 6302 "SunTour Superbe Pro (Power
  Command Friction)" -> SL-SB00-B / -C (Power Ratchet); 6295 -> SL-IP00-B /
  -C, Accushift I.P.C.; 6262 "SunTour SL-BC00 Bar Con (SL-BC01-R6 /
  SL-BC01-L)" -> SL-BC00-R6R / -R7U / -L (bar-con), 1980 -> 1989, group 68;
  168 / 173 / 3132 -J / -F / -I (-C) variants added; 2249 -> "FW-AL00-U7,
  Alpha freewheel (7-speed Accushift)"; 456 "BL-GP00, GPX Aero Levers" ->
  "(aero)"; from the Japanese page 4760 "SunTour Superbe" (RD, 196g) ->
  RD-2100, Superbe and 3615 "SunTour Superbe" (hub, 604g pair) -> RH-2000,
  Superbe (high flange). Descriptions rewritten on these plus CW-GP00,
  CW-SB10, HB-GP00, PL-GP00, SP-SU00-S, SL-GP00-B / C, BA-GP00-S, FD-1500,
  LD-2000, LD-2050.
- Years: chart velobase 1980 placeholders -> 1989-1989 on 1038 BA-ED45-S,
  2633 FD-ED45-SSH, 1983 CW-ED45, 6285 SL-4050, 6274 SL-3040; year_to -> 1989
  on 1426 SP-6000, 1424 SP-6200, 4007 PL-5600, 1987 CW-7500; 4011 PL-SB00
  year_from 1990 -> 1989; year_to -> 1983 on 2645 FD-1500, 6296 / 6297
  LD-2000 / LD-2050.
- New (1989): CH-GP00 (GPX), BL-SB10 (Superbe Pro aero). Chart-only codes
  without specs not inserted.
- Left: RD-3100 Superbe Pro (velobase 4766 / 4767 / 4768 "Superbe Pro" rows
  1979-1986, two bike-linked, can't tell which); RH-1000 low flange (3614's
  383g doesn't match 548g printed). Bike link counts unchanged.

## SunTour "Bicycle Equipment Catalog" Edition No. 61 — printed 09.1983 (disraeligears.co.uk, 40 images)

- `data_source` 88, label "SunTour Bicycle Equipment Catalog Edition No. 61
  (printed 09.1983)". Source:
  https://www.disraeligears.co.uk/site/suntour_bicycle_equipment_catalog_no_61.html
  (front cover, page_1..38, rear cover; image page N = printed page N).
  SunTour U.S.A. Inc. (Fairfield NJ) / Maeda Industries; rear cover
  "Printed in Japan SEP. '83" -> 1984 model year. pp 1-8 features, 9-26
  specs (model code, materials, weight), 27-38 tools / maintenance / gear
  capacity and spoke charts.
- Ranges: Superbe Pro (RD-5200, FD-2000, LD-3200 / LD-3250, CB-3000 =
  CB-3100 + CB-3200, CB-4000 = CB-4100 + CB-3200, BH-1500, PL-4000 /
  PL-2000, HS-150, BH-1600 / BH-1700, HC-100); Superbe (RD-5300, FD-3000,
  LD-2000 / 2050, RH-1000 / 2000 / 3000 / 4000, CW-1000 / 3000, BB-100 /
  300, PL-1000 / 3000, HS-100 / 300); Sprint BH-2000, RH-4400; touring
  Superbe Tech RD-4700 / 4800 / 5400, MounTech RD-4900 / 5500 FD-2700,
  AG-Tech RD-5000 / 5600 FD-2800; Cyclone Mk-II RD-3500 / 3700 FD-2300 /
  2400; Top-Mount LD-2300 / 2350; BL, ARX, VX, AR, Seven, GT, Honor,
  Volante; NSL / Compe-V / Spirt FDs; shift levers Bar-Con, PDL-M, PSL-M,
  DLW, SLW, PUB-10 / 5, UBN-10 / 5, Mighty Shifter II, MSM; Micro Lite /
  New Winner / Perfect / Pro-Compe / AG freewheels; Ultra-6 UC-6000, Z
  TZ-6000 chains; Trimec, CAP, Mighty Click systems; dirt XC-II PL-5100,
  LD-2800, BH-1400, NW-5100; SA- / SS- sealed BBs; TH-1000 3-speed hub;
  BMX ensemble (not inserted).
- All SunTour rows (brand 56) were velobase. Retitled (old titles): 4768
  "SunTour Superbe Pro (friction)" -> RD-5200, Superbe Pro; 4763 "SunTour
  Superbe II" -> RD-5300, Superbe (Superbe II); 4761 "Superbe Tech Short
  Cage" / 4762 "Superbe Tech L" / 4764 "Superbe Tech-GTL" -> RD-4700 /
  4800 / 5400; 4711 "Mountech GTL" -> RD-5500; 4710 "AG Tech (Alpine
  Gear)" -> RD-5000; 4742 / 4743 "Cyclone M-II (GT)" -> RD-3500 / 3700;
  4730 "BL - Blue Line" -> RD-3200; 4731 "BL - Blue Line (Long Cage)" ->
  RD-3300, BL (GT); 4727 "aRX (short cage)" -> RD-4300; 4729 "aRX GT" ->
  RD-4500; 4774 "Vx" / 4775 "Vx S" / 4707 "Vx-GT" -> RD-2200 / 2500 /
  2400; 4725 "aR II" / 4723 "aR II GT" -> RD-4200 / 4400; 4756 "Seven
  (version 2A)" -> RD-1900; 4702 "Honor (version 2D, 2E, 3A, or 3B)" ->
  RD-1100; 4708 "Volante (type 1A)" -> RD-2600; 4771 "Trimec" -> RD-4600;
  4685 "Mighty Click" -> RD-2700; 2652 "FD2000, Superbe Pro"; 2621 "ARx"
  (FD) -> FD-2600; 2614 "Vx" (FD) -> FD-1600; 2605 'NSL "New SL"' ->
  FD-1700; 2641 "Seven" (FD) -> FD-1400; 2603 "Compe-V (5-hole)" ->
  FD-1100; 2601 "Spirt" -> FD-1000; 2654 "FD2900, Trimec"; 6299 "LD-3200,
  Superbe" / 6300 "LD-3250, Superbe" -> Superbe Pro (catalogue files them
  under Superbe Pro); 6282 "LD-2300, Cyclone Mk-II (Symmetric)" ->
  Top-Mount; 6266 "Symmetric LD-2350 (Direct Mount)"; 6264 "LD-1500 Power
  Shifter" -> PDL-M; 6272 "LD3300, ARx"; 6265 "LD-1900, Road VX"; 6288
  "LD-3000, Honor" (1988) -> LD-3000, UBN-10 (stem), 1984-1988; 462
  "CB-3200, Superbe (dual slot drilled)" -> Superbe Pro brake lever; 3622
  "BH-1400, XC" -> XC (sealed); 3612 "Sprint Pista" -> RH-4400; 3135
  "Superbe" (headset) -> HS-100; 4009 "PL-4000, Superbe" -> Superbe Pro;
  4015 "PL-5100, XC" -> XC-II; 2235 "Microlite" -> LF-6000 / LF-7000;
  2237 "New Winner (NW-7000) Ultra 7"; 2240 "New Winner 6sp Ultra" ->
  NW-6500; 2238 "Suntour New Winner 6 speed" -> NW-6000; 2242 "Pro-Compe
  (5-speed)" -> PC-5000; 2244 "PT-3800 PR 5S" -> AG.
- Years: listed rows year_to -> 1984 and NULL / later year_from -> 1984
  (e.g. 4771, 2654, 6300, 4010, 2235, 2237, 6288 year_from 1985-1988 ->
  1984); 2641 FD-1400 1984-1985 (1985 from the Raleigh bike catalogue).
- New (37 rows, 1984): RD-4900, RD-5600, RD-3600, RD-2000 Seven GT,
  RD-1200 GT, RD-5100 CAP, FD-2400; LD-1400, LS-1500, LD-2900 / 2950,
  LS-1000, LD-1300 PUB-10, LS-1300 PUB-5, LS-3500 UBN-5, LS-2200, LD-3500
  MSM, LD-1950, LD-3350, Trimec LD-2700 / 2750 and LD-3100 / LS-3600,
  LD-2400 DLC, LD-2500 UBD-10; BH-1700, BH-2000, BH-4600 / 4700, RH-4100 /
  4300, TH-1000; US-6500, PN-6000 / PS-6000, PT-6200, PT-6100, NW-5100,
  FT-3050 / FS-1500 / MF-1000; SA / SS sealed BB series; HS-300;
  UC-6000; TZ-6000 (1984-1989).
- Deleted: 6298 "SunTour LD-3200, Superbe" (Shifters, 1986, velobase,
  `CA43ECD7-E26F-4BAA-AB94-A1B7F28F15C1`) dup of 6299; 1049 "SunTour
  CB-3100, Superbe Pro Short Reach" (Brakes, 1980,
  `B8834FB9-1BEF-499E-B6F8-43C50CA4E099`) dup of 1045; 2610 "SunTour
  FD-2800, AGear Tech" (1970-1980, `C8FD52D8-FCCE-439E-B171-D62950C93AEA`)
  dup of 2609; 4000 "SunTour XC-II" (Pedals, 1980, 446g,
  `7DF3E0F8-F0CA-456A-8D06-529379C86866`) merged into 4015 (its 1985
  Raleigh link moved first).
- Bike links: 1985 Raleigh "SunTour AR-GT" x2 4726 -> 4723 RD-4400;
  "SunTour UB-10 (stem mount)" x4 -> 6288 UBN-10. Overrides added for
  these plus 'suntour vx' (FD 2614 / RD 4774), 'suntour arx' (FD 2621),
  'suntour ag tech' (RD 4710), 'suntour xc ii chrome moly shafts' (4015)
  so the retitled rows stay linked on regeneration. Raleigh 1985 79 -> 83.
- Left: 4766 / 4767 velobase "Superbe Pro" RDs (pre-1984, RD-3100 era);
  FD-2000 variants 2647-2649; 4728 aRX long cage; 4712 MounTech GTL v2;
  FD-2700 v1 / v2; 2606 bare "BL" FD; 6259 "3090 Bar-Con"; 6283 "DLW
  LD-1000"; 6257 / 6263 LD-1100 PUB-10; BMX ensemble and CB-5000 coaster
  brake not inserted. Bike values not in this catalogue: HR, SU-2, DLN,
  PUB-M, Alpha-5000; the 1983 Bianchi Superbe Pro FD stays unlinked.

## SunTour "Small Parts Catalog" — undated, c. 1983 (disraeligears.co.uk, 50 scans)

- `data_source` 89, label "SunTour Small Parts Catalog (c. 1983)". Source:
  https://www.disraeligears.co.uk/site/suntour_small_parts_catalog_-_1983.html
  (scan_1..50). SunTour U.S.A., Inc., P.O. Box 1076, Fairfield NJ. Spare-parts
  book: one exploded diagram and 8-digit spare-part list per model, no
  specs, weights or printed date ("1983" is the site's label). Spare parts
  themselves out of scope.
- Models: RD-1200 GT, RD-1100 Honor, RD-2000 7GT, RD-2200 / 2400 Road VX
  (GT), RD-4200 / 4400 AR (GT), RD-4300 / 4500 ARX (GT), RD-3500 / 3700
  Cyclone Mk II (GT), RD-2100 Superbe, RD-5300 (labelled "Superbe Pro"),
  RD-5600 AG Tech-GTL, RD-5500 MounTech-GTL, RD-4700 / 5400 Superbe Tech
  (L / GTL cages); FD-1000 Spirt, FD-1400 Seven, FD-1600 Road VX, FD-1100
  Compe-V, FD-2500 AR, FD-2600 ARX, FD-2800 AG Tech, FD-2700 MounTech,
  FD-2300 Cyclone Mk II, FD-3000 Superbe; LS-3500 UB-5, LD-3000 UB-10,
  LS-1300 PUB-5, LD-1300 PUB-10, LD-1900 Road VX, LD-2900 DLW, LD-1500
  PDL-M, LD-2300 Top-Mount, LD-2000 / 2050 Superbe, LD-3250 / 3200 Superbe
  Pro, LD-2800, LD-1400 Bar-Con; BH-2000 Sprint hubs; PL-4000 / PL-2000
  Superbe Pro, PL-5100 XC-II; CB-3000 / CB-4000 Superbe Pro brakes. All
  already present from No. 61.
- Retitled (old titles): 6288 "SunTour LD-3000, UBN-10 (stem)" -> "UB-10 /
  UBN-10 (stem)"; 7798 "SunTour LS-3500, UBN-5 (stem)" -> "UB-5 / UBN-5
  (stem)". 4763 RD-5300 description notes the parts book's "Superbe Pro"
  label (No. 61 naming kept). From No. 61, missed in that pass: 2609
  FD-2800 AG Tech and 2607 / 2608 FD-2700 MounTech v1 / v2 year_to 1980 ->
  1984 with No. 61 specs.
- Not done (user decision): year_from 1984 -> 1983 on the 15 rows that start
  in 1984 only from No. 61 — the book is undated.

## SunTour "Bicycle Equipment Catalog" Edition No. 62 — printed 12.1984 (disraeligears.co.uk, 32 images)

- `data_source` 90, label "SunTour Bicycle Equipment Catalog Edition No. 62
  (printed 12.1984)". Source:
  https://www.disraeligears.co.uk/site/suntour_bicycle_equipment_catalog_no_62.html
  (front cover, page_1..30, rear cover; image page N = printed page N).
  Rear cover "Printed in Japan DEC. '84" -> 1985 model year. pp 3-24
  components, 25-26 clothing / bags, 27-30 sprocket, gear capacity, spoke
  and dropout charts.
- New vs No. 61: new Cyclone (RD-6000 S / 6200 W / 6800 GT, FD-3300 / 3360 /
  3700, LD-3700 / 3750 / 3800 / 3850, CB-7000 / 8000 sets, CW-7000, BB-400,
  BH-2200, PL-5300); Le Pree (RD-6100 / 6700, FD-3400, RH-4900, LD-3900 /
  3950 / 4000 / 4050); full XC group (RD-6300, FD-3500, LD-3600, CB-6000 /
  6100 / 6200, MS-1400, SP-2000, BH-2300, RH-4800, PT-6300); Superbe Pro
  FD-2060, LD-4600, CB-3500 set (CB-3600 calipers), SP-2100; Superbe
  FD-3060; LX-10 LD-4100 / 4150; renumbered DLW LD-4200 / 4250, SLW
  LS-3900, PUB-10 LD-4300, PUB-5 LS-4600; Trimec RD-6400 / 6600, FD-3600,
  LD-4400 / 4450 / 4500 / 4550, LS-4700 / 4800; Mighty Click LS-2800;
  DS-200 / 210 / 220 / 230; LS-4900.
- Dropped vs No. 61 (left at year_to 1984): BL and VX groups, Superbe RH
  hubs / CW-1000 / CW-3000 / BB-100 / 300 / PL-1000 / 3000 / HC-500,
  RD-4800 / 5400, FD-1700 / 1100, LD-2900 / 2950, LS-1000, LD-1300,
  LS-1300, LD-3500 MSM, LD-2800, Trimec RD-4600 / LS-3600 / LD-2750, CAP
  RD-5100, BH-1700 / 2000, RH-4100 / 4300, US-6500, NW-5100, PT-6200.
  1985 Raleigh "SunTour road VX quill" still links PL-1500 (year_to 1984,
  left).
- Retitled (old titles): 4739 "SunTour Cyclone" (RD, 1984, 210g) -> RD-6000,
  Cyclone (S) (1985 Raleigh "Cyclone MKIII"); 2629 "SunTour FD-3300
  Cyclone"; 4778 "SunTour XC" (RD) -> RD-6300; 4749 "SunTour LePree
  (standard cage)" -> RD-6100, Le Pree (S); 3608 "SunTour LePree" (hub) ->
  RH-4900; 1037 / 1036 CB-7100 / 8100 -> "(CB-7000 / CB-8000 set)"; 1050 /
  1051 CB-3600 / 4100 -> "(CB-3500 / CB-4000 set)"; 1052 "CB-6100, XC" ->
  "(CB-6000 set, roller cam)"; 6308 "LD-3600, XC" -> LD-3600 (LS-4400 /
  LS-4500). Descriptions also on FD-3400, FD-3500, CB-6200, CB-7200,
  CB-2200, CB-3200, CW-7000, CW-6000, BB-400, BH-2200, LD-3700 / 3800,
  PT-6300, SP-2000, RH-4800.
- Years: 17 velobase 1980-1980 placeholders -> 1985-1985; year_to 1984 ->
  1985 on 62 re-listed rows.
- New (26 rows, 1985): RD-6200, RD-6800, FD-3360, FD-3700, LD-3750 / 3850;
  RD-6700, LD-3900 / 3950, LD-4000 / 4050; FD-2060, LD-4600, SP-2100;
  FD-3060; LD-4100 / 4150 LX-10; LD-4200 / 4250 DLW; LS-3900 SLW; LD-4300
  PUB-10; LS-4600 PUB-5; Trimec RD-6400, RD-6600, FD-3600, LD-4400 / 4450,
  LS-4700 / 4800; LS-2800; BH-2300; DS series; LS-4900.
- No deletes. Left: 4750 "LePree (standard cage) version 1", 4751 "LePree 3
  Pulley System"; BMX ensemble and CB-5000 not inserted. Override comments
  for 'suntour cyclone mkiii' updated; link counts unchanged. HR, SU-2, DLN,
  PUB-M (1985 Raleigh) still not in any SunTour catalogue.

## SunTour "Bicycle Equipment Catalog" Edition No. 62 — second printing, FEB. 1985 (sscycleworks.com, 32-page PDF), 2026-11-02

- `data_source` 348, label "SunTour Bicycle Equipment Catalog Edition No. 62
  (printed 02.1985)". Source:
  https://sscycleworks.com/galleries/bike-museum/SunTour-1985-catalog.pdf
  (PDF page N = printed page N-1). Rear cover "Printed in Japan FEB. '85",
  SunTour U.S.A. Fairfield NJ + Maeda addresses, dealer mailing label (Oct
  1985). Same edition as source 90 (DEC. '84). Read printed pp 3-24.
  Skipped: pp 1-2 (photos), clothing and the chart pages.
- Diff: every road / MTB / Trimec / PUB / freewheel / sealed-BB code already
  had a row covering 1985 (source 90 pass). False alarms: CW-5050 / 6050 /
  7050 crank arms; SA-110 / 160 / 190, SS-* (series row 7818); RD-5000 here
  = AG Tech 4710; LD-4500 / 4550, PT-5100 only named in notes. No description
  enrichment (same edition as 90).
- BMX pp 15-16 and 3-speed trigger p 22 (skipped by earlier passes) ingested:
  - year_to 1979 -> 1985: 8284 MF-2000, 8290 MS-1000, 8291 MH-1500, 8292
    MH-1000, 8295 CB-5000.
  - New (group 320 BMX unless noted): 10059 BH-1000 / BH-1100, 10060 BH-1200 /
    BH-1300 sealed hubs; 10061 HB-6100, 10062 HB-6200 single thread rears;
    10063 MS-1100, 10064 MS-1200 Power Stems; 10065 SA-180 Hadley BB; 10066
    MF-3000 EZ Off (16T Cr-Mo single, 155g; a different product from 8286
    MF-3000 Hole Shot 2S of 1979, which is left at 1979); 10067 TL-2000
    trigger (no group, 1983-1985; 1983 from 7811's No. 61 note).
- Merged (user-approved): deleted 8261 "SunTour MF-1000, single freewheel (mini
  size)" (1978-1982, source 128, `50ef70eb-c178-11f1-a2df-02fea3763e8d`, no
  bike_spec links or overrides) into 7817 FT-3050 / FS-1500 / MF-1000. 8261
  said MF-1000 was "new for 1978"; 7817 stays 1979-1985 because of its other
  two parts.
- **Stub check, 2026-11-16:** re-read printed pp.3-6 for the VeloBase stub rows.
  LD-4650 (p.3, braze-on, 51g), CW-5000 / CW-5050 (p.4, 657g) and Superbe FD-3000
  (p.6, clamp band, 90g) are listed. **Applied 2026-11-16 (user approved):** stub
  descriptions on 6301, 1991 and 2646 rewritten from these pages, source_ref 1 -> 348;
  titles, years and search_text unchanged (old: "SunTour LD-4650, Superbe Pro, Japan, 51
  grams"; "SunTour CW-5000, Superbe Pro, Japan, 676 grams (avg)"; "SunTour FD-3000,
  Superbe II (endless band), Japan, 95.5 grams (avg)"). VeloBase year_from 1983 / 1984
  on LD-4650 / CW-5000 kept, although neither is in No. 61's Superbe Pro list (linked
  bikes are 1985-86). Validation: 3 rows, rerun 0, all 93 bike CSVs regenerate
  identically, no quality-report findings. **Not found:** 1046 CB-4700 "Superbe Pro (long reach)" (Superbe Pro
  calipers here are CB-3500 / CB-4000 sets only; earlier code diffs of 1978, 1979 JP,
  No. 59-61 found no CB-4700 either) and 2613 FD-3200 "Le Tech" (not in No. 61-62, and
  not on the No. 63 Japanese Le Pree / Superbe Tech spread, `1985suntour08.jpg`, which
  shows FD-3400, FD-2700 and FD-2800 only).
- Left: 2647 FD-2000 (clamp); out of scope HL-1000 head lock-up, MC-1000 seat
  clamp, QR-170 / QR-180, EF / EP dropouts, SD spoke discs, accessories, tools.

## SunTour USA "AccuShift" product leaflets — undated, c. 1987 (disraeligears.co.uk, 43 scans)

- `data_source` 91, label "SunTour USA AccuShift product leaflets (c.
  1987)". Source:
  https://www.disraeligears.co.uk/site/suntour_product_leaflets_-_1987.html
  (scan_1..43). Seven fold-out leaflets, SunTour USA, Fairfield NJ, "Printed
  in USA", no date (site: 1987): AccuShift overview with "SunTour Family of
  Indexed Shift Systems" chart, Superbe Pro, Sprint 9000, Cyclone 7000, XC
  9000, XC Sport 7000, Winner Freewheel System. Spec panels give model codes
  and weights. Superbe Pro crankset printed "CW-SDB10" (misprint for
  CW-SB10).
- Retitled (old titles): 4740 "SunTour Cyclone 7000" (RD, 221g) ->
  RD-CL10-SS; 4741 "SunTour Cyclone 7000 (White)" (RD, 280g) -> RD-CL10-GT
  (white); 4759 "SunTour Sprint 9000 (Indexed)" -> RD-SP10; 4758 "SunTour
  Sprint" (RD, 183g) -> RD-7000 (non-indexed); 4788 "SunTour XC Sport 7000"
  (RD) -> RD-XS00; 1058 "SunTour XC Sport 7000" (Brakes) -> CB-6600 roller
  cam; 459 "SunTour Sprint" (Brake Levers, 236g) -> CB-7700 aero; 3613
  "SunTour BH-SP00, Sprint" (557g) -> HB-SF00; 4709 "SunTour alpha-3000 SS"
  -> RD-3000-SS; 4721 "SunTour alpha-5000" -> RD-5000-SS; 2660 "SunTour
  FD-XS00, XC Sport 7000" -> FD-XS00-GT / GX; 2247 "SunTour WT-7000 WINUL
  7S-S" -> WT-7000, Winner (Ultra 7); 466 "SunTour CB-6200, XC" -> XC / XC
  9000; 1424 "SP-6200 , Sprint 9000" (stray space). Descriptions also on
  RD-XC00, FD-XC00-GX, FD-CL10-B, CL-XC00 / XC10 / XS00 / XS10, BA-XC00,
  HB-XC00 / XC10, CB-6700, LD-4700, PL-5600, HS-SA00, CW-7500, PL-CL10,
  SP-XC00, HS-SB00, WP-6000.
- Years: year_to -> 1987 on PL-5300, SP-6100, CB-7200, LD-3700, LD-3750 /
  3850, LD-3600, RH-4800, PL-5100, CB-6200; velobase 1980 / 1990 / NULL
  year_from -> 1987 on SP-XC00, HS-SB00, WP-6000, WT-7000, FD-XS00, PL-CL10,
  CB-7700.
- New (25 rows, 1987): FD-SP00-B, LD-4800 / 4850, CB-8600 (Sprint 9000);
  SL-CL10-B / C, BL-CL10, CW-CL10, HB-CL10 / CL00, FD-CL10-H (Cyclone 7000);
  PL-5700 (XC 9000); RH-5000, SP-XS00 (XC Sport 7000); SL-5000-BS / CS /
  CP, SL-5000-CH, RD-5000-GT, RD-5000-GX, FW-AL00-R6 (alpha-5000); SL-3000-
  BS / CS / CP, SL-3000-CH, RD-3000-GX (alpha-3000); WP-7000 / 6500 / 5000,
  WT-6500 / 6000 / 5000.
- Deleted: 468 "SunTour CB-6200, XC 9000" (Brake Levers, 1987, velobase,
  `D7918D6F-D428-4FF7-AC31-2B8167F55224`) merged into 466; 4722 "SunTour
  alpha-5000" (RD, 1987, 278g avg, `82D59CFF-6A7C-4C07-9CD4-447D8D613A43`)
  merged into 4721 (weight noted). Neither had links.
- Bike links (1987 Bianchi): "SunTour Alpha-5000 14-28T" -> 7866
  FW-AL00-R6; "SunTour Alpha-5000 Accushift" and "SunTour Accushift
  (Alpha-5000 front derailleur)" shifters -> 7859 SL-5000-BS / CS / CP.
  Overrides also pin 'suntour cyclone 7000' (RD 4740, FD 2631) and 'suntour
  alpha 5000' (RD 4721). Left: 2631 "Cyclone 7000 (White)" FD vs 2630
  FD-CL10-B (both 107g); Alpha-5000 FD / brakes / crankset / hubs not in
  leaflets; 2229 bare "Winner", 2234 FW-WT10-S7U, SB-XC00, HL-3000.

## 1991 Bicycle Equipment Catalog — targeted reconciliation

Applied and validated 2026-11-21, `data_source` 509. Reviewed the XC-Pro
headset, XC-Comp equipment and CH-AP50 as a follow-up to the 1991 US
Bianchi import. Page numbers below are printed. [Maker scan](https://www.disraeligears.co.uk/site/suntour_bicycle_equipment_catalog_1991.html)

- P. 9 added **12229** FH-XC00-7, XC-Comp seven-speed freehub,
  1991–1991, UUID `730c3f93-2111-4a76-97b2-41efd33f6b4d`.
  32H or 36H, 130 or 135 mm over locknuts, QR, 473 g for 36H/130 mm.
  The maker pairs it with silver CS-AP00-S7. The Bianchi US Axis's
  hubset and cassette specifications support rear-hub link 26512.
  Keep 1992 FH-XC02-7 (7982), 1990 shared FH-XP00-7U (11016), and
  1989 XC 9000 FH-XC10-U7/R6 (3624) as separate models.
- P. 9 moved the start of HB-XC02-F (7980) and CW-XC01 (7999)
  from 1992 to 1991, previous source 278. Pp. 8, 9 and 23 moved
  FD-XC10-GXH (11021), CH-AP10 (1419) and CH-AP50 (11069) from
  1990–1990 to 1990–1991, previous source 385.
- P. 7 moved HS-XP01 (3138) from 1980–1990 to 1980–1991, previous
  source 1. The catalogue identifies variants HS-XP01-J (JIS) and
  HS-XP01-I (English/Italian). It lists 26 × 5/32 in balls, 37 mm stack,
  125 g, and 30.0/27.0 mm or 30.2/26.4 mm race diameters. Previous DB
  description: “XC-Pro ATB headset with WTB / SunTour Grease Guard (two
  o-ring-sealed grease ports): 20 x 3/16in balls each race, 37mm stack,
  English/Italian 25.4mm x 24TPI, JIS or ISO crown race. VeloBase model
  HS-XP01; follows 1990 HS-XP00 (11020).”

The hub scan found no new near-pair candidates. The live spec and the
generator agree on 12229. The SQL replay affected zero rows.
[Fitment, provenance and full-batch checks](../../../ingest-bike-specs/references/known-catalogs/bianchi.md#1991-us-component-follow-up--applied-and-validated)

## SunTour "1992 Bicycle Equipment Catalog" — printed 09.1991 (disraeligears.co.uk, 32 scans)

- `data_source` 98, label "SunTour Bicycle Equipment Catalog 1992 (printed
  09.1991)". Source:
  https://www.disraeligears.co.uk/site/suntour_bicycle_equipment_catalog_1992.html
  (front cover, inside front cover, page_1..28, inside rear cover, rear
  cover "Printed in JAPAN Sep/'91"); 1992 model year, same convention as
  No. 61 / 62. SunTour USA / Maeda Industries, English. pp 2-8 features
  (Micro Drive, PowerFlo, Wishbone, Command, X-Press, SE cantilever, Lite
  Operation, Grease Guard, Microlite), 9-18 ATB & hybrid (XC-Pro MD /
  XC-Pro, XC-Comp MD / XC-Comp, XC-LTD, X-1, FS-E, XCE, XCM, XCT, XCU),
  19-26 road (Superbe Pro + Track, SL, Radius, Edge, Blaze, VX, RT), 27
  options (Microlite hubs / BBs, Scrambler RD, top-pull FDs, Command and
  bar-end levers), 28-29 accessories / tools and system charts. Model
  codes, code numbers, specs and weights; no prices.
- New for '92 per the catalogue: Micro Drive (CW-XP10 / CW-XC11, CS-AP20,
  FH-XP20 / FH-XC11, BB-SL10), PowerFlo cassettes, Wishbone (SL-XP20 /
  XM20 / FE20 / XU20) and Command (SL-CD01) shifters, X-Press, SE
  cantilever CT-XP11, Lite Operation, the FS-E / XCM / XCT hybrid line,
  Superbe Pro 8-speed (FH-SB00-8, CS-AP00-S8). Two velobase rows dated
  1990 for MD parts (1214 CS-AP20-K7, 1999 CW-XP10) were moved to
  1992-1992 on the catalogue's own "new for 1992" statement.
- Retitled (old titles): 4786 "XC Pro GX" -> RD-XP00-GXB; 4787 'XC Pro
  "MD" SS Type' -> RD-XP00-SSB; 4785 bare "SunTour XC Pro" (RD) ->
  RD-XP00-GTB (the one cage not otherwise represented; a judgement call);
  4783 "XC Comp" -> RD-XC20-GXB; 4784 "XC LTD" -> RD-XL00-GXB; 4776 "X-1"
  -> RD-X101-GXB; 4791 "XCE" -> RD-XE01-GXB; 4793 "XCM" -> RD-XM02-GXB;
  4757 "SL" -> RD-SL00-SSB; 4753 "Radius" -> RD-RA00-SSB; 4715 "VX
  Accushift" -> RD-VX02-SSB / -SSZ; 2659 "FD-XP00-GXH, XC Pro" -> FD-XP00
  / FD-XP01; 2658 "FD-XL00-GXH" -> + XC-LTD; 2663 "XCE" (FD) ->
  FD-XE01-GXH; 2665 "XCM" (FD) -> FD-XM02-GXH; 2639 / 2640 "FD-RA00-SS"
  (spec / actual) -> FD-RA00-SSB (braze-on) / FD-RA00-SSH (clamp-on);
  6311 "XC Pro" (shifter) -> SL-XP00-R7 / L; 6312 -> SL-XP10 X-Press;
  6313 SL-XP20 -> Wishbone; 6310 -> SL-XL00-R7 / L; 6306 "X-1 - thumb
  style" -> SL-X102-R7 / L; 6269 "Command (7 & 8 Speed)" -> SL-CD01-R7 /
  L; 6304 "Superbe Pro (7, 8 index)" -> SL-SB02-B / -BF; 6293 -> SL-SL00-B
  / -BF / -C; 6291 "Radius" (shifter) -> SL-RA00-B / -BF / -C; 6284
  "Suntour (Edge?)" -> SL-ED00-B7 / -B7F / -C7; 6270 "Wishbone SL-XM20-7"
  (1993) -> SL-XM20-R7 / L, year_from 1992; 3627 "XC Pro (Front)" ->
  HB-XP01-F; 3629 FH-XP20-7; 3632 "AT" -> HB-AT02-F / -R; 3618 "Superbe
  Pro (8speed)" (hub) -> FH-SB00-8; 1214 "CS-AP20-K7 Power-Flow
  MicroDrive" -> CS-AP20-S7 / -K7; 1221 CS-AP10-K7 -> + S7; 1216
  "CS-AP00-S7, Superbe Pro" -> + K7, all groups; 6388 "HC-100 Superbe Pro"
  -> track cog; 1998 "XC Pro" (crank) -> CW-XP01; 1997 "XC LTD" -> CW-XL00;
  2002 "XCE" (crank) -> CW-XE01; 177 "BB-SL10, XC Pro" -> -E / -73 / -I
  Microlite; 169 BB-SL00-I -> -E / -73 / -I; 174 BB-SB11 -> -E / -I; 176
  "X-1, X-1" (BB) -> BB-X101-E / -I; 469 BL-XP00 -> -S; 457 BL-RA00-S ->
  + -N; 465 "X-1" (lever) -> BL-X101-S; 1056 CT-XP00 -> + CT-XP20; 1048
  BA-SB00-S -> + BA-SB01-S; 1041 "BA-SL00-SF" -> BA-SL00-S; 1040 "Radius
  (by Dia-Compe)" -> BA-RA01-S; 4019 PL-XP01 -> + PL-XP02.
- Years: year_to -> 1992 on the rows above plus 1217, 1425, 4017, 4010
  (PL-2000 track, 1987 -> 1992). Descriptions rewritten with the
  catalogue's capacities, clamp sizes, hole counts and weights.
- New (99 rows, 1992): RD XC20-GTB / -SSB, FE00, XT02, XU01, ED01, RT01,
  SR21 x3; FD XC01, X100, FE00, XT02, XU00, ED01, RT01, TP10 / TP00 /
  TP05 top-pull, BR01 braze-on; shifters XL10, XM01, XM10, FE20, XU01,
  XU20, BC01 bar-end, BE02 (B7 / C7 / CP7), RT01; hubs FH-XP02-7,
  HB-XC02-F, FH-XC11-7, FH-XC02-7, HB-XL00-F, FH-XL01-7, FH-AT01-7,
  HB-SB00-F / -R, FH-SB00-7, HB-SL10-F, FH-SL01-7, FH-SL10-7, HB-RA01-F /
  -R, FH-RA01-7, BH-1600 / 1800 track; FW-AL10-K7, FW-WT10-S7; CH-AP15,
  CH-AP21; cranks CW-XC11, XC01, X101, FS00-S, FS00-N, XM01, XT01 / XT02
  (SR), XU00 (SR), 6000 track, RA01, ED01, BE01, VX01 (SR), RT00 (SR); BBs
  XP00, XC01, XT00 (SR), RA01, VX01 (SR), SB20 Microlite; brake levers
  XC01-S, XL00-S, FE00 / FE10 (DC), XE01 (DC), XM01-N, XT01-N, XU00-N
  (DC), SB11, ED00, BE00, VX00-N, RT00-N (DC); brakes CT-XP11 SE, CT-XL00,
  CT-X101, CT-FE00, BA-FE00, CT-XE01, CT-XM01, BA-XM00, CT-XT01, CT-XU00,
  BA-ED00, BA-BE00, BA-VX00, BA-RT00 (DC); HS-XP02 (J / I / OS), HS-ST00
  (J / I); SP-XP00, SP-XP10. "DC" = Dia-Compe-made, "SR" = Sakae
  Ringyo-made, as marked in the catalogue.
- Deleted: 1215 "SunTour CS-AP00-S7, Radius" (Cassettes, 1990-1992, 286g,
  velobase, `1CEE96DF-97C2-43B4-94A7-84A1E21D4BF1`) — same part number as
  1216, merged there; 170 "SunTour Micro Drive" (Bottom Brackets,
  1992-1995, 291g spec, velobase, `8D2C0877-4C07-4872-A727-F9B43A45739D`)
  — the MD bottom bracket is BB-SL10-E, merged into 177. Neither had bike
  links or overrides.
- Not in 1992 (not capped — one catalogue): GPX, Ole, Sprint 9000,
  Cyclone 7000, alpha series, XCD 6000, XC 9000 / 9010, XC Sport 7000, XC
  Expert, X-1 Chroma, Edge 4050, MounTech, S-1; 1223 / 1220 CS-AP20-S8
  8-speed MD (1992 has 7-speed MD only, 8-speed is 1993). Velobase
  year_from = 1980 left on XCE (4791 / 2663 / 2002), AT 3632, Radius 2639
  / 2640 / 1040, HC-100 6388, 1220 — wrong, but this catalogue gives no
  earlier bound.
- **Stub check, 2026-11-16** (pp.21-26 re-read for VeloBase stub rows): p.26
  Blaze lists RD-BE02-SSB (code 23879921) with no specifications, so 4732 can
  only get the code. SL (p.23) has front HB-SL01-F (3610) but a rear freehub
  FH-SL01-7 (7989), **no HB-SL01-R**, so 3611 is unattested here. CH-AP02 is on
  none of the 1992 road pages: Superbe Pro uses CH-AP01 (p.21), SL uses CH-AP11
  (p.23), and Edge / Blaze / VX / RT use CH-AP20 (pp.25-26). The SR SunTour 1993
  catalogue (source 278) spec chart p.14 lists "CH-AP02, CH-AP01" under XC-Pro (MD)
  and XC-Pro at 321g (116 links), and p.4 names CH-AP02 among the PowerFlo
  chains. Its text layer has no HB-SL01 or BE02.
- **Applied 2026-11-16 (user approved):** 4732 RD-BE02-SSB description rewritten
  from p.26 (code only), source_ref 1 -> 98, year_from 1990 -> 1992; 2623 FD-BE02-SSH
  year_from 1990 -> 1992 (the 1990 catalogue's Blaze parts are BE00: 11111 / 11112).
  1423 "SunTour CH-AP02, Sprint" (1988-1993, group 66 Sprint, VeloBase
  `581F6286-4B3F-4854-8385-9EAFFD9FB7F9`, "Japan, 325 grams") -> "SunTour CH-AP02,
  XC-Pro", 1993-1993, group 71, source_ref 278, search_text "SunTour CH-AP02 XC-Pro",
  description from the 1993 chart. Validation: 3 rows, rerun 0, all 93 bike CSVs
  regenerate identically, no quality-report findings. None of the three had bike links.
- Bike links (1993 Bianchi): Volpe "SunTour FS-E Top Pull" -> 7951
  RD-FE00-GXB (rear) and 7968 FD-TP05-GXH Top-Pull Lite (front; the system
  chart on p. 28 puts TP05 under FS-E), "FS-E 52/42/32T" -> 8002
  CW-FS00-N, "PowerFlo 12-30T 7-speed" -> 1221; Project 7 "XC Comp Top
  Pull PowerFlo" front -> 7966 FD-TP10-GXH (chart: TP10 under XC-Comp),
  "XC-COMP MD 42/32/20T" -> 7998 CW-XC11; Grizzly "SunTour XC Comp"
  headset -> 8045 HS-ST00. Overrides added for all seven; 1993 Bianchi
  167 -> 174 linked. Left: Volpe bare "SunTour" hubs, Project 7 "SunTour
  XC-COMP" hubs (front / freehub are separate rows), "SunTour AP-12 chain"
  (not in the catalogue). Regression: 1983 / 1987 Bianchi regenerate 1-2
  links lower than loaded, all Campagnolo (582 -> 583, 4149 -> 4152, 4096,
  2966) — pre-existing drift, not from this pass. `summarize-bike-sql.js`
  was not parsing the `source_ref` subquery on spec inserts (0 specs
  reported since source_ref was added); regex fixed.

## SR SunTour "1993 Bicycle Equipment", English — printed 10.1992 (bikalog.org, 20 pages)

- `data_source` 278, label "SR SunTour Bicycle Equipment 1993, English edition
  (printed 10.1992)". Source: https://bikalog.org/api/view/Sun%20Tour/1993/SunTour93.pdf
  (ocrmypdf scan, 1063px pages, PDF page N = printed page N; the pp. 14-15 spec
  chart needs pdftoppm -r 300 in horizontal strips to read). Rear cover "SR
  SUNTOUR / Printed in Belgium, Oct. '92"; first catalogue after the SR (Sakae
  Ringyo) merger. Pages: 2-8 features, 9-10 ATB groups (XC-Pro MD / XC-Pro,
  XC-Comp MD / XC-Comp, XC-LTD, XC-Expert MD, S-1, X-1, XCE, XCM, XC Sport), 11
  road (Superbe Pro, Superbe Pro Track, SL, FS-E, Blaze), 12 Microlite and
  options, 13 accessories and tools, 14-15 spec chart, 16-19 SR Sakae (DuoTrack
  fork, bars, stems, seatposts, pedals, cassette BBs, cranks). Abridged: the
  X-1 / XCE / XCM / XC Sport / FS-E / Blaze / S-1 groups are photos only.
- **'93 NEW** (stated): XC-Expert MD group; 8-speed Micro Drive (CS-AP20-S8,
  11-28T); S-1 derailleur and Twist Shifter; MT Twist Shifter; cantilevers
  CT-XP01 / CT-XC02 with levers BL-XP01 / XC02; Micro Claw pedals PL-XP10 /
  XP11; BB-CB00 cassette BB; Power Hanger; SL with Microlite and 8-speed;
  DuoTrack fork. XC-Pro / XC-Comp derailleurs renumbered RD-XP00 -> RD-XP01 and
  RD-XC20 -> RD-XC01 (different capacities and weights, so new rows); FD-TP00
  -> TP01, SL-SL00 -> SL01, SL-XP00 -> SL-XP01 likewise.
- **year_to -> 1993 (52 rows)**: 4784, 2659, 7959, 2658, 7966, 7969, 6312, 6310,
  7970, 6304, 3627, 7979, 7980, 7982, 7983, 7984, 7986, 7987, 7988, 7990, 7993,
  1214, 1221, 1216, 1217, 7995, 1425, 7996, 7997, 1999, 1998, 7998, 7999, 1997,
  8006, 8012, 8013, 8017, 8019, 8025, 8030, 8031, 4019, 4017, 4010, 8044, 8045,
  8046, 6388, plus the retitled freehubs 3629, 7981, 7989.
- **year_from moved later (old values, for reverting)**, all on the catalogue's
  "'93 NEW" plus absence from the full 1992 catalogue: 4792 1990-1990 -> 1993-1993,
  2664 1990-1990 -> 1993-1993, 6318 1990-1990 -> 1993-1993, 1220 1980-1990 ->
  1993-1993, 4714 S-1 1992 -> 1993 (year_to stays 1993), 6370 NULL -> 1993-1993,
  6271 NULL -> 1993-1993.
- **Retitled (old titles)**: 4792 "SunTour XC Expert MD" -> "RD-XX00-GXB, XC-Expert
  MD"; 6318 "SunTour XC Expert" (Shifters) -> "SL-XX00-R / SL-XX00-L, XC-Expert MD
  (thumb)" (a judgement: could have been the Twist Shifter); 2664 "FD-XX00-GXH, XC
  Expert" -> "..., XC-Expert MD"; 1225 "CS-AP20-K8, XC Expert" -> "..., XC-Expert
  MD"; 1220 "CS-AP20-S8, XC Comp" -> "CS-AP20-S8, PowerFlo MD 8-speed (11-28)"
  (group 153 -> NULL); 6271 "Suntour SL-XP01" -> "SL-XP01-R / SL-XP01-L, XC-Pro /
  XC-Comp (thumb)"; 3629 "FH-XP20-7, XC-Pro MD (7-speed freehub)" -> "FH-XP20-8 /
  FH-XP20-7, XC-Pro MD (freehub)"; 7981 "FH-XC11-7, XC-Comp MD (7-speed freehub)"
  -> "FH-XC11-8 / FH-XC11-7, ..."; 7989 "FH-SL01-7, SL (7-speed freehub)" ->
  "FH-SL01-8 / FH-SL01-7, SL (freehub)"; 5934 "SP-SB00 (-S)(-L) , Superbe Pro" ->
  "SP-SB00-S / SP-SB00-L, Superbe Pro". search_text rewritten on all. The three
  freehub descriptions name 1992 vs 1993 weights (375g 7-speed in 1992 vs 454-472g
  in 1993). 1986 CW-SL00 and 4714 / 6370 S-1 descriptions rewritten.
- **New group** 325 "XC-Expert MD" (SunTour); 4792, 2664, 6318, 1225 moved there
  from 155 XCE (XCE = the XE01 parts, a separate group also shown in 1993). 4714
  S-1 group NULL -> 306.
- **New rows (24, ids 9714-9737, all 1993-1993)**: RD-XP01-GXB / GTB / SSB,
  RD-XC01-GXB / GTB / SSB, RD-XX00-GTB, FD-TP01-GXH, SL-SL01-B / BF, TS-XX00 Twist
  Shifter, FH-XX00-8 / 7, HB-SU00-F suspension hub, CS-AP10-S8, CH-AP12, CW-XX00,
  BB-CB00 cassette BB, BL-XP01, BL-XC02, BL-XX00, CT-XP01, CT-XC02, CT-XX00,
  PL-XP10 / PL-XP11 Micro Claw.
- **Merged (user-approved)**: deleted 1223 "SunTour CS-AP20-S8, XC Pro" (velobase,
  1992-1992, 319g spec, `A6807582-6EB7-4D17-B1A6-8E7F0D5D6A37`, no links or
  overrides) into 1220, which keeps the 1993 Bianchi Project 7 link and the
  `'suntour powerflo 11 28t 8 speed': 1220` override.
- **Printed oddities**: "SC-AP00-S7" for CS-AP00-S7; SL-XP10 X-Press 276g in the
  XC-Pro column vs 331g in XC-Comp (1992: 331g, left as is); HS-ST00 125g under
  XC-LTD vs 122g elsewhere.
- **Left**: SR Sakae pages 16-19 (brand 49 `Sakae/Ringyo (SR)`; photo-only codes
  such as HP-MTS-456BL, SP-MTE-335, PL-MTP-129HG, BB-CB10, CW-CSC tandem, DuoTrack
  fork) for a separate pass; RD-XP00 / XC20, CT-XP00 / 20, BL-XP00 / XC01 not
  capped (abridged catalogue); photo-only groups X-1 / XCE / XCM / XC Sport /
  FS-E / Blaze unmatched; out of scope: grips, binder SB-XP00, cable stops,
  BP-100 pulleys, Power Hanger OT-PH00, lights, tools, accessories, Litage forks.

## SunTour "'73 Products" — 1973 (disraeligears.co.uk, 24 scans)

- `data_source` 99, label "SunTour '73 Products catalogue (1973)". Source:
  https://www.disraeligears.co.uk/site/suntour_73_products.html (front
  cover, index, page_1..21, rear cover; PDF page N+2 = printed page N).
  Maeda Industries, Sakai; English; no prices. pp 1-5 derailleurs with
  exploded parts diagrams, 6-10 control levers (position codes A down
  tube / B stem / C bar-end / C' handlebar / D top tube), 11-14
  freewheels, 15-19 accessories (QRs, quick bands, clips, gear guard,
  Multi-stand, fork ends, spoke discs, one-piece BB set), 20-21 machinery
  / factory. Derailleur and lever numbering is the 4-digit 1970s series
  (2902, 4900, 3302 ...), not the later LD-/LS-/RD- codes.
- Listed: RD V-Luxe 2902 (first appearance), VGT 4900, GT 4600, Honor
  2600 (earlier two-bolt body), Skitter 2200; FD Spirt 3700, Compe-V 3701,
  SL 3702; levers 3203 / 3202 SLW, 3153 Sport, 3155 Mark-II, 3051 TT-5,
  3112 STM-3, 3552 PSL-M, 3551 PDL-S, 3302 DLW, 3553 PDL-M, 3020 / 3030
  UB-5 / UB-10, 3070 / 3080 PUB-5 / PUB-10, 3021 / 3031 long levers, 3043
  / 3039 HS-3B / HS-3, 3090 Bar-Con, 3450 Mighty Shifter, 3460 trigger;
  freewheels 1110 Winner (alloy body), 1100-1106 Perfect, -G Pro-Compe,
  -Z Z-gear, 1250 3-sp, 1200 / 1800 4-sp, single freewheel, racing
  sprocket; 4100 one-piece BB set. No hubs, cranks, pedals, brakes.
- Retitled (old titles): 4772 "SunTour V-Luxe" -> 2902, V-Luxe; 4695
  "SunTour V-GT (type 2C or 2D)" -> 4900, VGT (type 2C / 2D) (weight 397g
  avg matches the 385 / 420g 4900, so this row is the plain VGT, not a
  Luxe); 4703 "GT (version 1B)" -> 4600, GT (version 1B); 4702 "RD-1100,
  Honor" -> 2600 / RD-1100, Honor; 4689 "New Skitter (version 2B)" ->
  2200, Skitter (version 2B); 2603 "FD-1100, Compe-V (5-hole)" -> 3701 /
  FD-1100; 2601 "FD-1000, Spirt" -> 3700 / FD-1000 (1973 version is
  steel, low normal; No. 61 version alloy, top normal — both in the
  description); 2616 "SunTour SL" (FD) -> 3702, SL; 6259 "3090 Bar-Con"
  -> 3090, Bar-Con (power double lever); 6283 "DLW LD-1000" -> 3302 /
  LD-1000, DLW; 6256 "3-Speed trigger" (undated) -> 3460, Trigger Lever,
  1973-1973; 6263 "LD-1100" -> 3080 / LD-1100, PUB-10; 2245 "PT-5000,
  Perfect (5 speed)" -> 1100-1106 / PT-5000; 2242 "PC-5000, Pro-Compe
  (5-speed)" -> 1101-G / PC-5000; 2229 "SunTour Winner" -> 1110, Winner
  (5-speed, alloy body).
- Years: year_from -> 1973 on 2601 (1976), 6283 (1976), 6263 (1979), 2229
  (1980 — catalogue is earlier, so allowed); year_to -> 1973 on 2616
  (1972). 4695 / 4703 already ended 1973.
- New (21 rows, 1973): levers 3203, 3202, 3153, 3155, 3051, 3112, 3552,
  3551, 3553, 3020 / 3030, 3070, 3021 / 3031, 3043 / 3039, 3450;
  freewheels 1102-Z..1106-Z Z-gear, 1250, 1200, 1800, single freewheel
  (no number); Racing Sprocket "888" (Single Sprockets, no number); 4100
  one-piece-crank BB set. Rule applied: where the DB row for the same
  model name is one of our own 1984 / 85 catalogue rows carrying an LD- /
  LS- code (LS-1000 SLW, LS-1500 PSL-M, LS-1300 PUB-5, LS-3500 UB-5,
  LD-3000 UB-10, LS-2200 Mighty Shifter II), the 1973 number got its own
  row rather than stretching the 1984 row back 11 years; velobase rows
  already dated into the 1970s were folded.
- Deleted: 6257 "SunTour LD-1100 (PUB-10)" (Shifters, 1970-1970, no
  weight, velobase, `196B6891-CC60-43C5-BBDA-46F387E06976`) — same part as
  6263, merged there. No links or overrides.
- Not in 1973 (left): 4704 / 4705 "V-GT Luxe" v1 / v2 — the Luxe name is
  not in this catalogue; the 1974 / 75 Motobecane links to 4704 stand.
  2602 bare "Compe-V" 1974-79 (140.5g avg) is probably the same part as
  2603 but velobase keeps it separate; not merged. 2617 SL (Black), 2605
  FD-1700 NSL, 4694 V (2C), 4718 "Vista VG T", 2231 AP, 2241 Perfect YE,
  2243 Pro-Compe Ultra-6 — absent, no cap applied. Motobecane 1974 / 75
  "SUN TOUR V.G.T." front-derailleur lines still unlinked: the 1973
  front line is Spirt / Compe-V / SL and the bike catalogue does not say
  which. Bike links unchanged.

## SunTour "'74 Products" — 1974 (disraeligears.co.uk, 22 scans)

- `data_source` 100, label "SunTour '74 Products catalogue (1974)". Source:
  https://www.disraeligears.co.uk/site/suntour_74_products.html (front
  cover, page_1..20, rear cover; PDF page N+1 = printed page N). Maeda
  Industries, print code 30/0249, Maeda Industries of U.S.A. (Fairfield
  NJ) now listed; English; no prices. pp 2-7 rear derailleurs and p 8
  fronts, each with an exploded diagram and a code / part-number parts
  list; 9-12 control levers; 13-15 freewheels; 16 3-speed hub; 17-19
  accessories; 20 factories.
- New vs '73: V-T Luxe 3902 (mid-length, 32T, 295g — "completes the V
  Luxe range"); the V-GT Luxe appears as **4902** (335g, body engraved
  "V-GT Luxe"), replacing the 385g 4900 VGT; Turtle Lever 3158; PSL-S
  3550; ST-10 / ST-5 3230 / 3220 paddle stem levers; 3-speed hub 3828 /
  3836 (28H / 36H) with casing clips 1096-1098; resin clips 1071-1078;
  spoke discs renumbered 1144 / 1145 / 1146. Dropped vs '73: SLW 3203
  top-tube, TT-5 3051, STM-3 3112, long levers 3021 / 3031, HS-3 console
  3043 / 3039, Honor two-bolt body, plain Perfect 1102-1106 (only 1100,
  1101 and the Z-gear models listed). Front derailleurs unchanged in
  number and parts list but the copy now says "top normal" where 1973
  said "low normal" — recorded as catalogue text, not a redesign.
- Retitled (old titles): 4704 "SunTour V-GT Luxe (version 1)" -> 4902,
  V-GT Luxe (version 1), year_from 1973 -> 1974 (first appearance; the
  1973 catalogue has no Luxe VGT); 2737 "SunTour 3-speed" (Geared Hubs,
  undated velobase) -> 3828 / 3836, 3-speed hub, 1974-1974.
- Years: year_to -> 1974 on 4772, 4703, 4702, 4689, 2616 and the 1973
  rows carried over (8049 SLW down-tube, 8050, 8051, 8054-8058, 8061-8068);
  6256 trigger -> 1974. 1973-only rows left at 1973: 8048, 8052, 8053,
  8059, 8060. Descriptions of 4772, 4702, 2601, 2603, 2616, 2245 gained
  the 1974 detail.
- New (4 rows, 1974): 8069 V-T Luxe 3902; 8070 Turtle Lever 3158; 8071
  PSL-S 3550; 8072 ST-10 / ST-5 3230 / 3220.
- Bike links unchanged: the 1974 / 75 Motobecane "V.G.T. Luxe" lines
  already pointed at 4704, which this catalogue now dates and numbers
  correctly. The Motobecane front lines stay unlinked (same three fronts
  as 1973, bike catalogue silent). Left: 4705 "V-GT Luxe (version 2)"
  1978-82 velobase; the 252g velobase weight on 4704 vs 335g here
  (flagged in the description).

## SunTour "'75 Products" — 1975 (disraeligears.co.uk, 8 scans)

- `data_source` 101, label "SunTour '75 Products brochure (1975)". Source:
  https://www.disraeligears.co.uk/site/suntour_75_products.html (scan_1..8:
  cover, two mood photos, index, three product pages, rear cover; Shiga
  factory added; "Printed in Japan"). Fold-out brochure, specs only — no
  exploded diagrams or parts lists. English, no prices.
- New vs '74: Cyclone 5902 RD (forged alloy, 24T, 13-24 / 40-51, 175g) and
  3704 FD (forged alloy, low normal, 95g) — first appearance; Love 2000
  steel touring RD (232g); Allegro 3703 steel FD (low normal, triple);
  Winner-S 1110-S (steel cogs, to 26T); 1300 "Frash type" 3-speed
  freewheel; single freewheels numbered 1716-1724 and a full-ball 5/32in
  1718-S..1724-S series; racing sprockets numbered 1762-1767 (12T added);
  "SD" fork ends 4421-4424; spoke discs renumbered 1147 / 1148 / 1149;
  cable caps 1099. Dropped vs '74: all top-tube consoles (Sport 3153,
  Mark-II 3155, Turtle 3158). Names: 2902 listed as "V" (not V-Luxe), 3902
  as "VT", 4902 as "VGT"; VGT weight 335g -> 310g; VT capacity 32T -> 28T
  (14-30 / 36-48); Honor 14-30 / 36-48.
- Retitled (old titles): 4735 "SunTour Cyclone" (1976, 178g avg) -> 5902,
  Cyclone, year_from 1975; 2626 "SunTour Cyclone (with no cable housing
  stop)" -> 3704, Cyclone (no cable housing stop), year_from 1975, 95g;
  2624 / 2625 / 2627 / 2628 Cyclone FD variants -> "3704, Cyclone (...)"
  (years 1976-80 unchanged — the brochure attests one 1975 version only);
  8066 "SunTour single freewheel (1/2 x 1/8in)" -> 1716-1724, single
  freewheel; 8067 "SunTour Racing Sprocket (888 track cog)" -> 1762-1767,
  Racing Sprocket.
- Years: year_to -> 1975 on 4772, 8069, 4703, 4702, 4689, 2616, 2737 and
  the carried-over '73 / '74 rows (8049, 8054-8058, 8061, 8062-8068, 8071,
  8072, 6256). 8050, 8051, 8070 stay at 1974. Descriptions of 4772, 8069,
  4704, 4702 gained the 1975 figures.
- New (5 rows, 1975): 8073 Love 2000; 8074 Allegro 3703; 8075 Winner-S
  1110-S; 8076 1300 Frash 3-speed; 8077 1718-S..1724-S single freewheel.
- Deleted: 4736 "SunTour Cyclone (variation 2)" (RD, 1975, 175g spec "from
  1975 Suntour catalog", velobase, `10A24F5C-EA9A-48BA-8437-AA7A0BC79D9C`)
  and 4737 "SunTour Cyclone (variation 3)" (RD, 1975, 170g actual "less
  frame hanger bracket", velobase, `548018C6-7E85-45BD-A042-BAD23BC1CB4F`)
  — both the 5902; weights folded into 4735. No links or overrides.
- Left: 4733 Cyclone "(Black Pivot Knuckles)" undated finish variant; 4713
  "Love (version 2)" 1987-89 is a different later part; 2602 bare Compe-V
  1974-79 (140.5g avg) still unmerged with 2603 (136g). Bike links
  unchanged (no Cyclone-era bikes 1975-79 in the DB yet; the 1975
  Motobecane V-GT Luxe links to 4704 stand, now with the 310g figure).


## SunTour "Component Parts" service book, blue cover — undated, c. 1974 (equusbicycle.com, 33 single-page PDFs)

- `data_source` 124, label "SunTour Component Parts service book (c. 1974)".
  Source: https://equusbicycle.com/bike/suntour/earlysuntourcatblue/index.html
  (pdf/earlysuntourcatalogblue - 0001..0033.pdf; equus calls it "circa early
  1970's", HTML title "Through 1988" is template junk). Maeda Industries,
  Sakai + Mihara factory, Tokyo office, Maeda Industries of U.S.A.
  (Fairfield NJ); English; no prices. Service parts book: per model an
  exploded diagram and a parts list (assy no. / code no. / part no.) with a
  short spec box. PDF page = printed page + 4 up to p. 2, then the scan
  skips printed pp 3-4 (VT 3902, in the index only) and pp 27-28 (3-speed
  hub); pp 31-32 accessories (resin / steel / press clips, alu band,
  casings, cable length table) out of scope.
- Dating, c. 1974: 4902 VGT at 335g (1974 figure; 1975 says 310g), VT, PSL-S
  3550, ST-10 / ST-5, 3-speed hub and 1071-1078 resin clips all present
  (new in '74); fronts "top normal" ('74 wording); USA office listed. No
  Cyclone, Love, Allegro, Winner-S, Frash or Shiga factory (all '75). Unlike
  '74, no Sport / Mark-II / Turtle top-tube consoles — either a parts-book
  omission or a late-'74 / early-'75 printing.
- Listed: RD 4902 VGT (plate "V-GT Luxe"), 2902 V (plate "V-Luxe"), [3902
  VT], 4600 GT, 2600 Honor, 2200 Skitter; FD 3702 SL, 3701 Compe-V, 3700
  Spirt; levers 3553 PDL-M, 3552 PSL-M, 3551 PDL-S, 3550 PSL-S, 3080 / 3070
  PUB-10 / 5, 3030 / 3020 UB-10 / 5, 3302 DLW, 3202 SLW, 3230 / 3220 ST-10 /
  5, 3090 Bar-Con, 3450 Mighty Shifter, 3460 trigger; freewheels Winner
  (body 1651 99), Pro-Compe gold (1558 99), Perfect 3/32 and 1/8 (1551 99).
  No new models vs '73 / '74.
- Years: none changed — every matching row already spans 1974. 8050 / 8051
  / 8070 consoles (absent here) already end 1974.
- Descriptions rewritten, source_ref -> 124 (10 rows): 8057 UB-5 / UB-10
  and 8058 PUB-5 / 6263 PUB-10 (bell fitting on the lever axle end, bell
  1119 / clangor 1115 — parts drawn on both diagrams, listed under UB);
  8049 SLW (1in clamp 1001 / 1-1/8in 1002); 8072 ST-10 / ST-5 (black
  handles); 6256 3460 trigger (kit contents); 2616 SL (same frame 872 as
  Compe-V, plain cage 873 vs drilled 871); 2229 Winner, 2242 Pro-Compe,
  2245 Perfect (sprocket ranges, 28-34T zig-zag). Dropped for length (still
  true): 2242 "e.g. 1101-G 14-15-17-19-21"; 2245 "1974 lists 1100, 1101 and
  Z-gear only". Titles unchanged.
- Added / deleted: none. Left: 2602 bare Compe-V (140.5g avg) vs 2603 —
  still probably one part, no new signal here, no bike links on either.
  Bike links unchanged.

## SunTour "'76 Products" — 1976 (disraeligears.co.uk, 9 scans)

- `data_source` 125, label "SunTour '76 Products catalogue (1976)". Source:
  https://www.disraeligears.co.uk/site/suntour_76_products.html (scan_1..9:
  cover, two seascape photo pages, accessories, derailleurs, control
  levers, freewheels, 3-speed hub / tools, rear cover). Maeda Industries;
  Sakai, Mihara, Shiga factories, Tokyo office, Fairfield NJ; English; no
  prices; specs only, no parts lists.
- **Renumbering:** every part now carries an 8-digit "No. xxxx 99 01" code.
  Map: RD 5902 -> 2811 99 01, 2902 -> 2620, 3902 -> 2630, 4902 -> 2720, 4600
  -> 2410, 2600 -> 2310, 2200 -> 2210, Love 2000 -> 2810; FD 3704 -> 2931,
  3702 -> 2932 99 01 / 02, 3701 -> 2920 99 02 / 08, 3700 -> 2910 99 07 / 08 /
  09; levers 3553 -> 3169, 3552 -> 3159, 3302 -> 3029, 3202 -> 3019, 3090 ->
  3124, 3450 -> 3134, 3080 -> 3104, 3070 -> 3094, 3230 / 3220 -> 3324 /
  3214, 3030 / 3020 -> 3064 / 3054, 3460 -> 3197; freewheels 1110 -> 1651 99
  02, 1110-S -> 1651 99 10, 1100 -> 1551, 1101-G -> 1558, 1250 -> 1531, 1300
  -> 1231, 1200 / 1800 -> 1541 99 01 / 11, 1716-1724 -> 1116-1124 99 01,
  1718-S.. -> 1018-1024 99 01; track cogs 1762-1767 -> 1172-1177 01 02; hub
  3828 / 3836 -> 4011 99 35 / 34. The c. 1974 parts book's internal code
  numbers are the stems of these. Rows keep their 4-digit titles; the
  1976 number is in the description.
- New vs '75: Cyclone GT 2812 (34T / 36T with bracket, 188g), Seven 2320
  (364g), Seven-GT 2321 (385g) rears; Seven 2940 front; Cyclone CL-10 3369
  lever (first in our catalogues); N PUB-10 / N PUB-5 3106 / 3105; Winner
  and Winner-S 6-speed 1661 99 02 / 20; 13T alloy track cog 1173 01 04;
  Rock Ring lockrings; (out of scope) SDB fork ends, tandem chain
  tensioner. Dropped vs '75: Allegro 3703, PDL-S / PSL-S, Z-gear as numbered
  models (feature panel only; touring Perfect sets now 14-17-21-26-32 in
  place of 14-18-22-27-32). Specs changed: VGT 310 -> 300g; Cyclone RD front
  40-51 -> 40-53; Cyclone FD 95 -> 98g; Skitter not marked quick cage. PUB-10
  / PUB-5 are listed without the power-shifter star although the lever
  reads "Power Shift"; recorded, not acted on.
- Retitled (old titles): 4738 "SunTour Cyclone GT" -> "2812 99 01, Cyclone
  GT"; 4755 "SunTour Seven (version 1B)" -> "2320 99 01, Seven" (velobase
  313g Spec dropped — the 1983 RD-1900 figure); 4754 "SunTour Seven GT
  (version 1A)" -> "2321 99 01, Seven-GT" (velobase 343g kept); 6276
  "SunTour LD-1600, Cyclone" -> "3369 99 01 / LD-1600, Cyclone CL-10",
  year_from 1970 -> 1976 (1970 was an impossible velobase placeholder;
  user-approved).
- Years: year_to -> 1976 on 8069, 4703, 8073, 2616, 8056, 8054, 8049,
  8061, 8058, 8072, 8057, 6256, 8075, 8062, 8064, 8065, 8063, 8076, 8066,
  8077, 8067, 2737. Descriptions (1976 numbers, weights, citation text
  removed) on those plus 4735, 4772, 4704, 4702, 4689, 2626, 2603, 2601,
  6283, 6259, 6263, 2229, 2242, 2245 — 40 rows, all source_ref 125.
- New (5 rows, 1976-1976): 8253 Seven FD 2940 99 01 / 02 (group Seven; own
  row, not stretched onto 2641 FD-1400); 8254 N PUB-10 / N PUB-5; 8255
  Winner 6-speed 1661 99 02; 8256 Winner-S 6-speed 1661 99 20; 8257 13T alloy
  racing sprocket 1173 01 04.
- Deleted: 6275 "SunTour Cyclone MK1" (Shifters, 1970-1980, bare, no
  weight, velobase, `0ED2357C-854F-42AF-843E-5452F27C69B1`) — merged into
  6276 Cyclone CL-10, the only Cyclone lever in 1976. No links or overrides.
- Left: 8074 Allegro, 8055 PDL-S, 8071 PSL-S stay at 1975; 2602 bare
  Compe-V still unmerged with 2603; 4701 "New Skitter (version 2C)" 1977
  velobase left beside 4689; Cyclone FD variants 2624 / 2625 / 2627 / 2628
  untouched. Bike links unchanged (no 1976-79 SunTour bikes in the DB).

## SunTour Catalog 1978 — printed 10.1977 (disraeligears.co.uk, 44 scans)

- `data_source` 126, label "SunTour Catalog 1978 (printed 10.1977)". Source:
  https://www.disraeligears.co.uk/site/suntour_catalog_1978.html (front
  cover, inside front cover, page_1..40, inside rear cover, rear cover; PDF
  page N = printed page N-2). Maeda Industries; USA office now 60 Chapin
  Road, Pine Brook NJ; English; no prices; spec boxes in oz / g. Sections:
  Superbe Road (pp 4-7), Superbe Track (8-10), Cyclone family (12-13), Road
  VX (14-17), range by category (18-33), comparison tables (34-38), chain
  lines, gear tables. No 1977 catalogue seen.
- **Renumbering:** the 1976 8-digit codes give way to RD- / FD- / LD- / LS-
  / PT- / FS- / HC- / TH- codes (the No. 61 / 62 series). Map: Cyclone
  5902/2811 -> RD-1700, Cyclone GT 2812 -> RD-1800, Seven 2320 -> RD-1900,
  Seven-GT 2321 -> RD-2000, Honor 2310 -> RD-1100, GT 2410 -> RD-1200 (new
  design), Skitter 2210 -> RD-1000, Love 2810 -> RD-1600; FD Cyclone 2931 ->
  FD-1300, SL 2932 -> FD-1200, Seven 2940 -> FD-1400, Compe-V FD-1100, Spirt
  FD-1000; levers Cyclone 3369 -> LD-1600, PDL-M 3169 -> LD-1500, PSL-M 3159
  -> LS-1500, DLW 3029 -> LD-1000, SLW 3019 -> LS-1000, N PUB-10 3106 ->
  LD-1700, PUB-10 3104 -> LD-1300, PUB-5 3094 -> LS-1300, ST-10 / ST-5 ->
  LD-1200 / LS-1200, UB-10 / UB-5 -> LD-1100 / LS-1100, Bar-Con 3124 ->
  LD-1400; freewheels Winner-S 1651 99 10 -> WS-5000, 1531 -> PT-3000, 1231
  -> FT-3000, 1116-1124 -> FS-1000, 1018-1024 -> FS-2000; track cogs
  1172-1177 -> HC-100, 1173 01 04 -> HC-500; hub 4011 -> TH-1000.
  **LD-1100 is the UB-10, not the PUB-10** (PUB-10 = LD-1300).
- New vs '76: Superbe road (RD-2100, FD-1500, LD-2000, RH-2000 / RH-1000,
  CB-1000, PL-1000, SP-1000, CW-1000, BB-100, HS-100) and track (CW-3000,
  BB-300, RH-3000 / RH-4000, PL-3000, HS-300, HC-100 / 500 / 900); Road VX
  (RD-2200 / 2300 VxT / 2400 VxGT / 2500 VxS, FD-1600, LD-1900, CW-1500,
  BB-150, RH-2500 / RH-1500, PL-1500); PC-6000; US-6000 / US-6500 Ultra-6 and
  UC-6000 chain; LS-2200 Mighty Shifter II; TL-1000 trigger; MF-1000 mini
  freewheel. Dropped vs '76: whole V range (V, VT, VGT — back in 1982 per
  Disraeli Gears), Winner alloy 5 / 6-speed, Winner-S 6, N PUB-5, 3450 Mighty
  Shifter, 4-speed freewheels, separately numbered Z-gear ("Z gear used over
  17 teeth" on PT-5000). The comparison table labels a 65g lever "Cyclone"
  — it is the LD-2000 Superbe.
- Rule applied: where a row already carried the 1978 code (mostly our
  1983-85 rows), its year_from moved down to 1978 and the older-number row
  kept its years with a "succeeds" / "from 1978" note; where none did, the
  code was folded into the older row's title and year_to extended to 1978.
- year_from -> 1978: 4756 RD-1900, 7788 RD-2000, 7789 RD-1200, 2641
  FD-1400, 6296 LD-2000, 6265 LD-1900, 6264 LD-1500, 7793 LS-1500, 7795
  LS-1000, 7796 LD-1300, 7797 LS-1300, 7799 LS-2200, 7792 LD-1400, 7812
  US-6500, 7820 UC-6000, 6388 HC-100, 6389 HC-500, 3619 RH-3000, 7811
  TH-1000, 4013 PL-3000, 172 BB-100, 7819 HS-300. Velobase 1970 placeholder
  floors -> 1978 (user-approved): 4774 RD-2200, 4014 PL-1500, 1994 CW-3000,
  1995 CW-1500, 5933 SP-1000, 3620 RH-4000, 3615 RH-2000.
- year_to -> 1978: 4735, 4773, 4701, 8073, 2616, 8254, 8072, 8057, 8075,
  8063, 8076, 8066, 8077, 1995. Capped at 1976 (absent): 4772 V-Luxe (was
  1979), 4704 V-GT Luxe v1 (was 1978), 2229 1110 Winner (was 1990).
- Retitled (old titles): 4735 "5902, Cyclone" -> "5902 / RD-1700, Cyclone";
  4738 "2812 99 01, Cyclone GT" -> "2812 99 01 / RD-1800, Cyclone GT"; 4773
  "SunTour  Vx-T" -> "RD-2300, VX-T"; 4701 "SunTour New Skitter (version
  2C)" -> "RD-1000, Skitter (version 2C)"; 8073 "2000, Love" -> "2000 /
  RD-1600, Love"; 2626 "3704, Cyclone (no cable housing stop)" -> "3704 /
  FD-1300, ..."; 2616 "3702, SL" -> "3702 / FD-1200, SL"; 8254 "3106 99 01 /
  3105 99 01, N PUB-10 / N PUB-5" -> "... / LD-1700, ..."; 8072 "3230 /
  3220, ST-10 / ST-5" -> "3230 / 3220 / LD-1200 / LS-1200, ..."; 8057 "3020 /
  3030, UB-5 / UB-10" -> "3020 / 3030 / LS-1100 / LD-1100, ..."; 8075
  "1110-S, Winner-S" -> "1110-S / WS-5000, ..."; 8063 "1250, 3-speed
  freewheel" -> "1250 / PT-3000, ..."; 8076 "1300, 3-speed freewheel (Frash
  type)" -> "1300 / FT-3000, 3-speed freewheel (Flash type)"; 8066 / 8077
  gained "/ FS-1000" / "/ FS-2000"; 1995 "SunTour Road Vx, Vx" -> "CW-1500,
  VX"; **6263 "3080 / LD-1100, PUB-10" -> "3080, PUB-10"** (velobase LD-1100
  code and 143g were the UB-10's; override comment in
  generate-bike-update-sql.js fixed to match).
- Descriptions rewritten (no title / year change) on 4760, 4774, 4707,
  4775, 4702 (velobase "versions 2D-3B" dropped for length), 2645, 2614,
  6276, 6259, 1044, 460, 4014, 5933 plus all rows above — 66 rows on
  source_ref 126. Spec differences 1978 vs No. 61 named inline (RD-1900 364
  / 313g, RD-2000 385 / 343g, RD-2500 30T / 27T, FD-1600 15T 105g / 18T
  114g, LD-2000 65 / 78g, LS-1000 65 / 56g, PL-1500 390 / 360g, RH-3000 525
  / 535g, TH-1000 TL-1000 / TL-2000).
- New (8 rows, 1978-1978): 8258 TL-1000 trigger; 8259 PC-6000 Pro-Compe 6;
  8260 US-6000 Winner Ultra-6; 8261 MF-1000 mini single freewheel (own row;
  7817's combined 1984 FT-3050 / FS-1500 / MF-1000 row left); 8262 RH-1000
  Superbe small-flange hubs (group Superbe); 8263 RH-2500 / 8264 RH-1500 VX
  hubs (group VX); 8265 BB-150 VX.
- Deleted: 6267 "SunTour LS-1100, LS" (Shifters, 1980-1980, bare, velobase,
  `C128FAEC-32BC-4261-BCE7-9847CFC0B7AD`) — LS-1100 is the UB-5, merged into
  8057. No links or overrides. User-approved.
- Left: 3621 bare "SunTour Vx" hub (RH-2500 or RH-1500, can't tell); 3614
  Superbe hub, 1335 Superbe chainrings, 6694 Superbe stem (bare velobase);
  2243 Pro-Compe (Ultra-6); 4705 V-GT Luxe v2 (velobase 1978-82, conflicts
  with V range absent 1978 — left pending the 1982 catalogue); 8255 / 8256
  Winner 6-speeds and 8061 Mighty Shifter end 1976; 7817 combined row; the
  three Cyclone FD variants 2624 / 2625 / 2627 / 2628 keep "3704" titles.
  Bike links unchanged.

## SunTour Catalog Edition No. 59 — printed 10.1981 (disraeligears.co.uk, 22 scans)

- `data_source` 127, label "SunTour Catalog Edition No. 59 (printed
  10.1981)". Source: https://www.disraeligears.co.uk/site/suntour_catalog_no_59.html
  (front cover, page_1..20, rear cover; PDF page N = printed page N-1).
  SunTour U.S.A. (10 Madison Road, Fairfield NJ) / Maeda; rear cover
  "Printed in Japan Oct. '81" -> 1982 model year, the only catalogue we have
  between 1978 (126) and No. 61 (88). Sections: Microlite & Aerodynamics
  (Superbe Pro FDs, Cyclone Mk-II), New Products (Top-Mount, ARX, AR),
  feature pages, gear capacity table (p8), Superbe Pro road / Superbe road +
  track, Cyclone + BL, Road VX, RD / FD / shift lever ranges, New Winner
  freewheels + chains, fork ends, BMX (photo + code list only), hubs,
  CB-5000 coaster, accessories, tools.
- New vs 1978: Superbe Pro group (RD-3100, FD-2000 / 2050, CB-3000 / 4000,
  CB-3200, PL-4000 / 2000, HS-150, RH-3100); Cyclone Mk-II (RD-3500 / 3700,
  FD-2300 / 2350 / 2400); Top-Mount LD-2300 / 2350; ARX, AR; BL (RD-3200 /
  3600 / 3300, FD-1900, LD-2200 / 2250); VGT RD-1500 back; Mighty Click
  RD-2700 / 2800, FD-1800, LS-2900, DLC / UBD-10 click levers (LD-2450 /
  2550 Honor versions); AG RD-3400, FD-2100, PT-3800; Volante RD-2600 /
  Volante-S RD-4100; New Winner NW-*; IC console levers LS-3200 / 3300;
  TZ-6000; RS-1000 stem; RH-4100 / 4200 / 4300. Dropped vs 1978: Skitter,
  Love, VX-T, SL FD, N PUB-10, ST levers, Winner-S, PT-3000 / FT-3000 /
  FS-1000 / FS-2000, PC-6000, US-6000, TL-1000 / TH-1000, CB-1000,
  SP-1000, CW-1500 / BB-150. Gone again by No. 61: RD-3100, RD-2100,
  FD-1500, RD-1700 / 1800, FD-1300, RD-1500, RD-2800, RD-4100, RD-3400 /
  FD-2100, FD-1800, consoles. **LD-2200 is the BL lever; LS-2200 is the
  Mighty Shifter II.** Gear table lists an IC rear derailleur with no code.
- year_from -> 1982: 4729, 4725, 4723, 7787, 2652, 7791, 2620, 6266, 7801,
  7805, 7806, 1051, 4010, 4001, 7821, 7810, 2237, 2236, 7813, 7817.
  year_to -> 1982: 4735, 4738, 2626, 6276, 6277 (dark LD-1600 = "Cyclone
  Black Series"), 8057, 6283, 8262, 8263, 8264, 8261, 4684, 6694.
- Velobase placeholder floors (user-approved): 1970 -> 1982 on 4685
  RD-2700, 6273 LD-2200, 2605 FD-1700, 2240 NW-6500, 2244 PT-3800; absent
  here, first in No. 61 -> 1984 on 4710 RD-5000, 2609 FD-2800, 2607 / 2608
  FD-2700, 4711 RD-5500, 4761 RD-4700 (was 1970 / 1980). 4705 VGT keeps
  1978 (single absence).
- Retitled (old titles): 4766 "SunTour Superbe Pro" -> "RD-3100, Superbe
  Pro"; 4705 "SunTour V-GT Luxe (version 2)" -> "RD-1500, VGT (V-GT Luxe
  version 2)"; 4684 "SunTour Alpine" -> "RD-3400, AG (Alpine Gear)"; 2599
  "SunTour AG" (FD) -> "FD-2100, AG (Alpine Gear)"; 6694 "SunTour Superbe"
  (stem) -> "RS-1000, Superbe"; 2620 "SunTour AR, FD-2500" -> "FD-2500,
  AR"; 7805 "LD-2400, DLC (Mighty Click)" -> "LD-2400 / LD-2450, DLC
  (Mighty Click / Honor)"; 7806 "LD-2500, UBD-10 (Mighty Click, stem)" ->
  "LD-2500 / LD-2550, UBD-10 (Mighty Click / Honor, stem)". 4009 PL-4000
  group Superbe -> Superbe Pro.
- Descriptions rewritten and "(No. 61, Sep 1983)" citations dropped where
  this catalogue carries the same spec; kept where the spec is No. 61's only
  (4001, 2236 / 2237, 7813, 7817, 2240, 2244 and the 1984 floor rows).
  Edition differences named inline: RD-4500 34 / 32T, RD-4400 32 / 34T
  capacity, RD-3200 25 / 24T, RD-3300 36 / 34T, RD-2500 30 / 28 / 27T
  (1978 / 1982 / No. 61), RD-2700 22 / 16T, RD-2600 25T / 21T, RD-2100
  22T 198g / 20T 194g (1978 / 1982), FD-1900 110 / 93g, LD-2300 69 / 73g,
  LD-2350 66 / 68g, HS-150 94 / 110g, PL-4000 300 / 290g, CW-1000 609 /
  600g, RH-4300 469 / 544g, TZ-6000 silver / gold pin plates. 57 rows
  updated on source_ref 127.
- New (11 rows, 1982-1982): 8266 RD-2800 Mighty Click GT; 8267 RD-4100
  Volante-S; 8268 FD-2050 Superbe Pro braze-on; 8269 FD-2350 Cyclone Mk-II
  braze-on; 8270 FD-1800 Mighty Click 10; 8271 LD-2250 BL braze-on; 8272
  LS-3300 / 8273 LS-3200 IC console levers; 8274 LS-2900 Mighty Click
  console; 8275 RH-3100 Superbe Pro track hubs; 8276 RH-4200.
- Deleted (user-approved, no links or overrides): 461 "SunTour CB-3200,
  Superbe" (Brake Levers, 1982, 213g, `88BC2376-1D64-4EFC-9CC6-5598428DEF88`)
  -> 462 (only CB-3200 is the Superbe Pro lever); 4724 "SunTour aR" (RD,
  1982, 280g, `78FBBF86-1C91-4C96-9F3F-E43AB4F0F4CA`) -> 4725 RD-4200; 4726
  "SunTour aR GT" (RD, 1981-83, 303g, `90623F8E-6507-4BF4-9195-D4A0DCB47D6F`)
  -> 4723 RD-4400; 2606 "SunTour BL" (FD, 1980, 90g,
  `0697B982-416E-4184-8CAE-54DC0E2460F8`) -> 2622 FD-1900.
- Left: 4767 velobase "Superbe Pro" RD (1983, 180g actual — probably
  RD-5200, user chose to keep); IC rear derailleur (no code); BMX parts and
  CB-5000 coaster brake; fork ends / accessories / tools; 2604 "7 (early
  style)" FD; 4733 Cyclone black pivot knuckles; FD-2000 variants 2647-2649.
  Bike follow-up: 2652 FD-2000 now starts 1982, so the 1983 Bianchi Superbe
  Pro FD could link (override in generate-bike-update-sql.js starts 1984);
  4766 keeps its 1983 Bianchi link.

### FD-2000 / FD-2050 mounting and retained VeloBase identifier — 2026-11-15 review

- Visually re-read [No. 59 printed p.9](https://www.disraeligears.co.uk/site/suntour_catalog_no_59_-_page_9.html),
  source **127**. **FD-2000** has an endless stainless band, 28.6mm round /
  35 x 21mm aero tube fitment, 14T capacity and 82g weight. **FD-2050** is
  separately illustrated with braze-on mounting, 14T capacity and 92g including
  the adapter. These confirm the mounting distinction in existing rows
  **2652** and **8268**; do not rename FD-2000 as braze-on or merge the two.
- Re-fetched the [VeloBase page](https://velobase.com/Pages/ViewComponent.aspx?ID=24650D30-1421-47DE-9984-EC432D3F7E78)
  retained as 2652's `source_id`. Its title is "SunTour FD2000, Superbe Pro",
  model field "FD2000 Braze on", clamp style "Braze-on Tab", years 1984-86;
  no component photo was available to establish a specimen identity. Its
  mounting metadata conflicts with the manufacturer's model definitions.
  Do not use this page to overturn the catalogue-backed endless-band identity,
  or assign its unphotographed entry to 8268 as a proven FD-2050 specimen.
- The previous TODO's apparent title/description conflict is resolved in favour
  of the manufacturer catalogue. Live 2652 already has the correct endless-band
  title/description and catalogue `source_ref` **192** (No. 60); the VeloBase
  GUID is a retained historical identifier, not its current primary source.
  No identifier, description, source_ref or dates were changed in this review.
  The 78g measured-weight attribution from retired row **2649** remains as
  recorded in the No. 60 merge notes below; it is not a weight established by
  the conflicting braze-on page.
- **Still open: mounting identification for five linked bikes.** Live specs
  **920** (1983 Bianchi Professional), **3299** (1985 Raleigh Prestige),
  **8179** (1986 Raleigh Prestige), **20864** (1982 Pro Miyata), **21809**
  (1983 Pro Miyata) all link to 2652 but print only SunTour Superbe Pro, without
  model code or mounting. The generic generator override therefore remains an
  inferred mounting choice. Need an original model photo showing band/boss or
  a period parts/fitment document before confirming or changing each link.
  A catalogue's separate FD-2050 listing alone does not identify these bikes.
- Validation: live rows 2652 / 8268 and all five linked spec texts read back;
  original manufacturer illustrations and mounting specifications checked.
  No DB/CSV changes, merges, date moves or matcher behaviour changes applied.

## SunTour Catalog, Japanese domestic edition — printed 04.1979 (cyclespeugeot.web.fc2.com, 48 JPGs)

- `data_source` 128, label "SunTour Catalog, Japanese edition (printed 04.1979)".
  Source: http://cyclespeugeot.web.fc2.com/reminiscence/suntour79.html
  ("Reminiscence" Part 96; catalog/suntour79/1..48.jpg, image N = printed page
  N-2). Maeda Industries (Sakai, Mihara, Shiga), SunTour U.S.A. 60 Chapin Road,
  Pine Brook NJ; rear cover "PRINTED IN JAPAN. APR. 1979". Japanese, no prices,
  "NEW" flags. pp 2-5 features, 6-13 Superbe road / track, 14-15 Cyclone, 16-18
  Road VX, 19 New Winner / Ultra-6, 20-22 BMX, 23 Mighty Click, 24-34 range by
  category (RDs, FDs, levers, freewheels, 3-speed hub / coaster, fork ends,
  accessories), 35-36 cables / tools, 37 clothing, 38-44 comparison tables,
  chain lines, gear tables. Sits between 1978 (126) and No. 59 (127).
- New vs 1978 (NEW-flagged): Superbe Pro RD-3100, CB-3000 / 3100, CB-4000 /
  4100, HS-150, PL-2000, RS-1000 (filed under Superbe Pro; No. 59 has it as
  Superbe), HC-100 now badged Superbe Pro; NSL FD-1700; Mighty Click RD-2800,
  FD-1800, LS-2900, LD-2100 LP-10, LS-2800 LP-5; PN-6000; LS-3000 Luxury; the
  whole BMX line. Not flagged but absent from 1978: VGT RD-1500, Volante,
  New Winner NW-7000 / 6500 / 6000 / 5000, RD-2700, LS-2500 Tank, LS-2100 SFL,
  LS-3100. Absent vs 1978 (stay capped 1978): CB-1000 (calipers and levers),
  Love, VX-T, SL FD-1200, N PUB-10, WS-5000, US-6000, PT-3000, FS-1000 /
  FS-2000 (FS-1500 SD instead). Last appearance before No. 59: Skitter,
  ST-10 / ST-5, TL-1000, CW-1500, BB-150, PC-6000, FT-3000 (SP-1000 already to
  1980). CB-3200 filed under Superbe here, 210g.
- **LS-2800 in 1979 is the Mighty Click LP-5 stem lever** (same 22.2mm, 218g
  part as No. 62's LS-2800) — 7844 retitled.
- year_from -> 1979: 4685, 8266, 2605, 8270, 6297, 7801, 8274, 7844, 1051,
  3136, 4010, 4001, 2237, 2240, 2238 (1980), 2236, 7813 (PS-6000 still No. 61
  only), 7817 (FS-1500 from 1979; FT-3050 No. 61), 6694 RS-1000 (velobase 1970
  placeholder; catalogue flags NEW). year_to -> 1979: 4701, 8072, 8258, 1995,
  8265, 8259, 8076. year_to 1979 -> 1978 (absent): 1044 / 460 CB-1000.
- Retitled (old titles): 7844 "SunTour LS-2800, Mighty Click" -> "LS-2800,
  Mighty Click LP-5"; 2236 "SunTour NW-5000, New Winner 5sp" -> "New Winner
  (5-speed)".
- Descriptions rewritten (edition differences inline, No. 61 citations
  dropped where 1979 gives the same spec): 4766 (22T / 12T front in 1979 vs
  20T / 10T in 1982), 4760, 4708, 4705 (36T / 16T vs 38T / 18T; velobase
  249g Spec dropped for length), 4685, 2614, 6296, 1045, 462, 3615 (590g vs
  599g), 3620, 1994, 3135, 4008, 175 (292 / 295g), 1995, 8261, 6388 ("Superbe
  Pro name from the 1980s" was wrong) plus the year rows. 44 rows on
  source_ref 128.
- New (19 rows, 1979-1979, source_ref 128): 8277 LS-2500 Tank, 8278 LS-2100
  SFL, 8279 LD-2100 Mighty Click LP-10, 8280 LS-3100 sports lever (3-speed
  hub); BMX (new SunTour group 320 "BMX", 4001 MP-1000 moved into it): 8281
  RD-2900 Hole Shot, 8282 LS-2600 Hole Shot, 8283 LS-3000 Luxury, 8284 /
  8285 MF-2000 / MF-1500 EZ Off, 8286 MF-3000 Hole Shot 2S, 8287 CW-2000 VX
  gear crank, 8288 CW-1600 VX Jr, 8289 CW-2100 chain rings, 8290 MS-1000 stem,
  8291 / 8292 MH-1500 / MH-1000 front hubs, 8293 MH-2000 Unit Hub, 8294
  HB-5000 Double Thread Hub, 8295 CB-5000 coaster brake (Geared Hubs).
- Deleted (user-approved): 1979 "SunTour BMX" (Cranksets, NULL years, bare
  velobase, `A05A7AEB-ECAF-4322-ABD3-0860F9405EA7`, no links or overrides) —
  placeholder for CW-2000 or CW-1600, can't tell which.
- Left: 4755 / 4754 (2320 / 2321 Seven, Seven-GT) keep year_to 1979 though
  1979 lists the RD-1900 / 2000 at No. 61 weights (313 / 343g); MC-1000 seat
  clamp, DT-100, fork ends, accessories, tools out of scope. Bike links
  unchanged (no 1979 SunTour bikes; 4766 override years untouched).
- Follow-up (bike link, not from this catalogue): 1993 Bianchi Volpe
  "Barcon lever Accushift Plus" (spec 1579) -> 7976 SL-BC01-R7 / -L Bar-End
  Control, the only AccuShift Plus bar-end lever in the 1992 catalogue;
  override added, 7976 year_to 1992 -> 1993 (source_ref 47, 1993 Bianchi
  catalogue; spec still the 1992 catalogue's, named inline). 1993 Bianchi
  181 -> 182 linked.

## SunTour dealer catalogue (1987), specification pages, and Maeda "Control Lever" parts pages (1976) — velo-pages.com via Wayback, data_source id 185

- Source: velo-pages.com Gallery2 items 12884 / 12893 / 12899 / 12902 (the TODO's
  "SunTour dealer catalog (1987), ~12884-12902, 4 images") and 12603 / 12606 /
  12621 / 12624 (the "SunTour parts catalog (1976), ~12601-12625, 4 images"),
  read through the Wayback Machine. Only these eight were archived at full size
  (484x640 and 640x495); every other item in both ranges is a thumbnail. The
  12606 snapshot is stored gzip-compressed: fetch it with `if_` instead of
  `id_` in the Wayback URL.
- 1987 dealer catalogue pages (landscape): p. 14 Shift Lever Specifications
  (Superbe Pro SL-SB00, Index Power Control SL-IP00, Sprint LD-4850 / 4800,
  Cyclone-7000 SL-CL10, Cyclone LD-3750 / 3700, alpha-5000 and alpha-3000
  SL-5000 / SL-3000 side and stem mount, DLW LD-4250 / 4200, PUB-10 LD-4300,
  UB-10 LD-3000, with braze-on and clamp-on weights), p. 17 Brake Caliper
  Specifications (XC-9000 BA-XC00 570g, XC-Sport-7000 CB-6600 492g), p. 19
  Brake Lever Specifications (CB-6200 306g, CB-6700 276g), p. 20 Crankset
  Specifications (Superbe Pro CW-SOB10 / CW-SB10 634g, Sprint CW-7500 680g,
  Cyclone-7000 CW-CL10 712g, all 52 x 42T 170mm). 1976 pages (portrait, Maeda
  Industries Ltd, "Control Lever" parts lists 30-02 Cyclone, 30-03 PDL-M, 30-08
  PUB-5, 30-09 NPUB-10): exploded views with part codes only, no printed date.
- Diff on 2026-10-17: every model was already in the DB from the c. 1987
  AccuShift leaflets (data_source 91) and the 1984 / 1989 catalogues, with the
  same weights (SL-SB00 56 / 81g, SL-IP00 85 / 104g, UB-10 142g, PUB-10 168g,
  XC9000 570g, CB-6600 492g, CB-6200 306g, CB-6700 276g, CW-7500 680g, CW-CL10
  712g) and years that already contain 1976 for the parts pages (PDL-M 8056,
  PUB-5 8058, N PUB 8254, Cyclone 6276). No rows added or deleted.
- Updated, source_ref -> 185: year_to 1985 -> 1987 on 7835 DLW LD-4200 / LD-4250
  and 7837 PUB-10 LD-4300 (both in the 1987 table); descriptions on 1993 CW-SB10
  Superbe Pro (634g in the 1987 table against 680g in the 1989 catalogue, both
  named, the velobase "634g (Spec)" dropped), 6278 LD-3700 and 7826 LD-3750 /
  LD-3850 Cyclone (LD-3750 braze-on 51g in No. 62, 41g in 1987), 7849 Sprint
  LD-4800 / LD-4850 (80g clamp-on, 56g braze-on) and 7851 SL-CL10 Cyclone 7000
  (80g braze-on, 100g clamp-on).
- Left: DLW LD-4250 braze-on weight (DB 74g from No. 62, the 1987 table reads
  about 64g but the print is too small to be sure).
- Does not fill the gaps that motivated it: Ultra 6 freewheel (4 bikes), HR
  rear derailleur (4), Raleigh / Sun Tour Compe V front derailleur (4) and
  AccuShift Plus X-Press (2) are not on the eight archived pages.
- Out of scope: the parts listings (frame clamps, ratchets, springs, washers),
  bike or marketing content.

## SunTour Bicycle Equipment Catalog Editions No. 60 (1982), No. 61 (1983) and No. 63 (1985), Japanese editions — cyclespeugeot.web.fc2.com, data_source id 192 (No. 60)

- Sources: http://cyclespeugeot.web.fc2.com/reminiscence/suntour82.html,
  `suntour83.html` and `suntour85.html` (Reminiscence parts 82-85 series; plain JPEGs).
  Japanese text with yen prices, Maeda Industries Ltd, Sakai, Osaka.
  - **suntour82 = Edition No. 60** (cover reads "Edition No.60"), 29 images: 16 tall
    single-page crops (`save0133`-`save0148`, 480px wide) and 12 spreads
    (`suntour82_01`-`12`) plus a gear capacity chart (`suntour82_capacity`); the
    two sets show the same pages. The red triangle logo (introduced 1981), no MTB
    parts yet. We held No. 59 (10.1981, source 127) and No. 61, not No. 60, so this
    is the missing edition between them. Recorded as data_source 192.
  - **suntour83 = Edition No. 61**, dealer edition (cover marked 販売店様用),
    35 images (page 31 is missing from the site). The same edition number as
    data_source 88; the Superbe Pro page (RD-5200, FD-2000, LD-3200 / 3250, CB-3000
    set) matches that entry, so it is a Japanese-language second copy. Only pages
    1-12 were read; nothing was ingested.
  - **suntour85 = Edition No. 63**, 16 spreads (32 pages), 1920px originals. We held
    No. 62 (12.1984, source 90), not No. 63. Superbe Pro, Superbe, Cyclone, XC
    (mountain), Cyclone Mark-II, ARX, AR, Le Pree, Superbe Tech, Mountech, AG Tech,
    BMX, Trimec, 3-speed hub and coaster brake, freewheels and chains, fork ends,
    accessories, special tools, original goods, sprocket diagrams, gear capacity.
    Gets no data_source row because no row changed.
- Diff on 2026-10-18 (codes read against all 690 SunTour rows): No. 60 - 94 of
  the 107 codes read already had rows covering 1982; the other 13 were false alarms
  (CB-3000 / HC-1000 / HC-900 / SA-110 / SA-120 / SS-110 / SS-120 exist as CB-3100,
  HC-100 / HC-500 and the SA-100 / SS-100 series row, RD-2300 was a misreading of
  RD-2200) or the three year changes below. No. 63 - all 73 codes read already had
  rows covering 1985; CW-5050 and CW-7050 are the crank-arm versions of CW-5000 /
  CW-7000.
- Updated, year_from -> 1982, source_ref -> 192 (years only, descriptions untouched):
  2235 LF-6000 / LF-7000 Micro Lite (was 1984), 3612 RH-4400 Sprint track hub (was
  1984), 7818 SA-100 / SS-100 series sealed bottom bracket (was 1984). No rows
  added or deleted.
- No. 60 first-appearance notes: Micro-lite 6 and 7-speed (LF-6000 / LF-7000), Ultra-6
  chain UC-6000 and Z chain TZ-6000, Perfect Ultra-6 US-6500, the AG (Alpine Gear)
  and Mighty Click systems, the IC system, Volante and Luxury rears, sealed SA / SS
  bottom brackets. The Superbe Pro generation is RD-3100 (1982) and RD-5200 (1985).
- Does not fix the unlinked bike specs it was meant to: "Sun Tour Ultra 6"
  (freewheel, 4 bikes) is ambiguous between at least five existing rows (7812
  US-6500 Perfect Ultra-6, 2240 NW-6500, 8260 US-6000, 7868 WP-6500, 7870 WT-6500),
  "Raleigh/Sun Tour Compe V" (4 bikes) fails on the "Raleigh/" prefix although row
  2603 (FD-1100 Compe-V, 1970-84) exists, and "SunTour HR" (4 bikes) is probably the
  Honor (4702 RD-1100). All three are COMPONENT_OVERRIDES jobs, not catalogue gaps.
  AccuShift Plus X-Press is not in any of these editions (later system).
- Out of scope: fork ends and dropouts, spoke discs, accessories, special tools,
  original goods, BMX parts, gear capacity and spoke length charts.
- **Description enrichment pass, 2026-10-26** (No. 60 only, source_ref 192). Read
  the 16 large single pages (`save0133`-`0148`, 480px; zoomed with pdftoppm for
  small print); the other 4 spreads (cover, feature pages) exist only as 400px
  thumbnails and carry no specs. 114 rows matched; nearly all already carry the
  No. 59 (10.1981, same 1982 model year) specs from that pass, so No. 60 adds little.
  - Rewritten: 4684 RD-3400 AG (was "34T capacity" from Ron Kitching 1984; No. 60
    prints 40T total, 38T max, 16T front difference, swing cage, 375g); 7818 SA / SS
    sealed BB (dropped the "Sep 1983 No. 61 catalogue:" citation; per model SA-100
    single 42mm 275g, SA-110 double 43.5mm 280g, SA-120 triple 45mm 280g, SS 355 /
    365 / 368g; the No. 61 ranges 275-304g / 355-389g and the 130 / 140 / 160 /
    SS-150 versions dropped for length); 8275 RH-3100 (525g pair, solid large flange,
    hollow Cr-Mo axle, 1.29 x 24 left lockring; Kitching's 572g kept); 4009 PL-4000
    (290g pair in No. 60 next to Bikecology's 278g; the No. 59 300g figure the
    earlier pass noted had been lost in the Bikecology rewrite and was not
    restored); 3136 HS-150 (No. 60 already prints 110g: now "94g (1979, No. 59),
    110g (No. 60, No. 61)", was "94g (1979-82)").
  - Years: 8278 LS-2100 SFL year_to 1979 -> 1982; 8281 RD-2900 year_to 1979 -> 1982.
  - Retitled (old title): 8281 "SunTour RD-2900, Hole Shot (BMX)" -> "SunTour
    RD-2900, Hole Shot / Luxury" (No. 60 sells the same steel cam-slide 2-speed,
    14-24T, 235g, as the "Luxury" mini-cycle rear, 10T capacity vs 12T in 1979);
    search_text rewritten.
  - New: 9713 SunTour IC-1000, IC System (Cranksets, 1982-1982, no group): IC
    chainwheel with built-in front freewheel, 40 / 44 / 46 / 48T, 125 / 150 /
    165mm, chain guard, 910g; crank partner of LS-3200 / 3300.
  - Merged (user-approved): deleted 2649 "SunTour FD-2000, Superbe Pro (endless
    band; later version)" (velobase, 1980-1980, 78g,
    `6AF4F545-3676-44F6-AB91-D857437DEB52`, no bike_spec links or overrides) into
    2652 FD-2000 (endless band), which now ends "78g (velobase)". 2647 FD-2000
    "(clamp)" left: no catalogue shows a clamp version, but no duplicate signal.
  - Follow-up merge, 2026-10-26 (user-approved, no catalogue): deleted the three
    bare velobase "SunTour Sealed bottom bracket" rows (Bottom Brackets, all
    1982-1985, no part number, no bike_spec links or overrides) into 7818 SA-100 /
    SS-100 series, whose years they matched exactly: 164 (313g avg,
    `A908F7F5-6084-4BB2-B5FA-812888604425`), 165 (254g avg,
    `23181AC5-5FB4-414E-9D50-5FD647806C61`), 166 (326g,
    `886F5328-9A26-43D8-B07D-160F74658F76`). The weights don't match a printed SA
    / SS figure, so 7818 now ends "254 / 313 / 326g measured (velobase)"; its
    "SunTour SA-100 / SS-100 series, sealed bottom bracket, Japan." prefix was
    dropped for length.
  - Left: IC CG-100 chain watcher, DG-100 guard, FP-100 plate, TA-220 tool (no
    category); RD-3400 year_from 1980 not moved (No. 59 lists AG as new vs 1978,
    but whether the 1979 Japanese edition or Bikecology 1980 shows it was not
    rechecked).

## SunTour USA Technical Bulletin #21, AccuShift installation and troubleshooting guide — undated, c. 1987 (SunTour-ServiceBulletin.zip, VeloBase archive, 33 pp) — reviewed, no rows changed

- Source: velobase.com catalogue archive, `/CatalogScans/SunTour/SunTour-ServiceBulletin.zip`
  (33 GIF/JPG scans: 31 bulletin pages plus a Superbe-Pro 1985 advertisement and one
  duplicate). SunTour U.S.A., Parsippany NJ. Dated only by "the '87 Superbe Pro",
  so c. 1987-88. No data_source row created.
- A service guide, not a parts list: IC / IFC / IPC lever classes (IPC = "Power
  AccuShift", RE / UL / P selector), rear derailleurs with a 4-digit name (Sprint 9000,
  XC 9000, Cyclone 7000, XC Sport 7000, alpha-5000; alpha-3000 is the one
  incompatible exception), Winner / Winner Pro / a freewheels, Superbe Pro, SunTour
  Pro and Cyclone chains, hub shell offset 33 mm (5-speed) / 37 mm (6-speed and
  Ultra-7), drop dimension 24-28 mm, lever models SL-IP00, SL-CL10-B/C,
  SL-5000-BS/CS/CH/CP, SL-3000-BS/CS/CH/CP, torque and troubleshooting tables.
- No rows added or changed: 6295 SL-IP00 already carries the index / Power Ratchet
  modes (87); 7863 / 7864 alpha-3000 levers already come from the c. 1987 leaflet
  (91); nothing dates anything more precisely.
- Does NOT contain "AccuShift Plus": that is the later 1989-90 generation (4744
  Accushift Edge 4050, CH-AP10 1419, CS-AP00-S6R 1219 already exist), so the unlinked
  "AccuShift Plus" bike specs stay a COMPONENT_OVERRIDES decision.
- Deleted 2026-10-18 (user decision, no catalogue): 6260 "SunTour a-3000" (Shifters,
  velobase, source_id 0CF5012B-3AE4-4E2E-9EAC-E26ACA5CF042, source_ref 1, no years,
  description "SunTour a-3000, Japan", no bike links, no override). A bare placeholder
  beside the 1987 alpha-3000 levers 7863 / 7864; it might instead have been a shifter
  from a different a-3000 run, which has no source. The front records' 1980
  dates are imported decade placeholders, not evidence of a 1980 generation
  (see the 2026-11-16 front review). If a later source establishes a distinct
  earlier a-3000 shifter, reconcile it before inserting a replacement.

## SunTour "Component Catalog '88 New Line-up", Japanese edition (12 images, 1988, Reminiscence Part 32)

- `data_source` 199, label `SunTour Component Catalog '88 New Line-up,
  Japanese edition (1988)`. Source:
  http://cyclespeugeot.web.fc2.com/reminiscence/suntour88.html
  (`catalog/suntour88/suntour88_01..12.jpg`, large versions `_04l.._12l` for
  pp. 6-22). The cover reads "'88 NEW LINE-UP"; the page text recalls the
  1988 Tour de France (Steve Bauer in yellow) and SunTour's sponsorship of
  the SMM/La Suisse team, so everything is 1988 and "NEW" marks products
  introduced in 1988. **Only printed pp. 1-4, 6-7, 10-11, 13-14, 16-17, 19 and
  21-22 are on the site**; pp. 5, 8-9, 12, 15, 18, 20 and 23 onward are not.
  Japanese text; model codes and weights read from the large images (the
  XCD 6000 labels were re-read from a 3x crop). Code Nos. were only read at
  page size, so none was written into a description.
- Ranges covered: Superbe Pro, Sprint 9000, Cyclone 7000, XC 9000, XC Sport
  7000 and XCD 6000 (all NEW), plus Winner-Pro 7/6/5-speed and SunTour-alpha
  freewheels, and the Accushift explanation pages (I.P.C, I.F.C, P.C, F.C).
  New in 1988: the whole XCD 6000 group, SL-BC00 Bar-Con, OS-410 cable holder,
  SL-XS00-CH, CL-XC01, BL-XC00, SP-SU00-S, BL-PC00 Palm Control, FW-AL00 alpha
  freewheels. No "AccuShift Plus" appears.
- `year_to` -> 1988 (23 rows, year only, part shown current in 1988): freewheels
  7867 WP-7000, 7868 WP-6500, 7869 WP-5000, 7866 FW-AL00-R6; 1042 CB-7600, 7850
  CB-8600, 7852 BL-CL10, 459 CB-7700, 454 CB-7200; 7853 CW-CL10, 1420 SP-6100,
  167 BB-400; 7855 FD-CL10-H, 7848 FD-SP00-B, 4780 RD-XC00, 7851 SL-CL10, 7849
  LD-4850; hubs 7854 HB-CL10, 7857 RH-5000, 3623 RH-4800; pedals 4003 PL-CL10,
  7856 PL-5700, 4015 PL-5100.
- `year_from` -> 1988 (6 rows, catalogue earlier than the DB): 6262 SL-BC00
  Bar-Con (1989), 7784 BL-SB10 (1989), 4011 PL-SB00 (1989), 173 BB-SB10
  (1989), 7986 HB-SB00 hubs (1992, now 1988-1992), 5932 SP-SU00-S (1989; still
  titled "GPX", but the catalogue lists it NEW on the Cyclone page).
- XCD 6000 (9 rows, years 1988-1990; **1990 is a judgement**, taken from the
  existing 1988-90 generic rows and the 1990 siblings 2000, 2662, 4789, 1224,
  6316, not from this catalogue, which only shows 1988): years only on 3631
  HB-XD00 and 4021 PL-XD00; descriptions rewritten from the catalogue on 472
  BL-XD00 (326 g), 1060 BA-XD00 (roller cam, 255 g), 2001 CW-XD00 (724 g,
  matched the Spec), 6317 SL-XD00 (198 g pair, matched the Spec), 6376 CL-XD10
  (518 g pair; also gained 1988-1990, it had null years). Retitled with
  `search_text` rewritten: 2661 "SunTour XCD 6000" -> "SunTour FD-XD00-GX,
  XCD 6000" (110 g matched) and 4790 "SunTour XCD 6000 Rear Derailleur" ->
  "SunTour RD-XD00-GX, XCD 6000" (the velobase 896 g Spec replaced by the
  catalogue's 296 g, probably a typo for 296).
- Rows inserted (8, 1988-1988): 8813 SL-XS00-CH XC Sport 7000 thumb shifter,
  8814 SP-SU00-L XCD 6000 seatpost (300 mm), 8815 BB-XD00, 8816 BA-XD10
  cantilever, 8817 FW-AL00-R5 alpha 5-speed, 8818 HB-SP00 Sprint 9000 hubs,
  8819 BB-500 Sprint 9000, 8820 SP-8000 Superbe Pro chain.
- Rows deleted (2): 471 `SunTour XCD 6000` brake lever (`source_id`
  D2F7B720-33A5-4425-A41A-DA49BDF7B2EB, 1988-90, source_ref 1) and 1059
  `SunTour XCD 6000` brakes (`source_id` BE246287-8E28-4AE2-AE81-98C06000FF48,
  1988-90, source_ref 1): bare, no part number, duplicates of the numbered
  472 BL-XD00 and 1060 BA-XD00. No bike_spec links, no
  `COMPONENT_OVERRIDES` references; the DELETE was shown first and guarded
  on `source_id` and `NOT EXISTS`. If a later source seems to reintroduce
  "SunTour XCD 6000" brake levers or brakes, it is these.
- Left alone: 3630 "SunTour XCD 6000" hub (1980-1990, generic; unclear
  whether the catalogue's second hub is an HB-XD10); CL-XC01 (XC 9000
  combination lever, NEW) is probably the same part as the existing CL-XC10
  (1987, 6373), so no row was added; no-category items OS-410 cable holder,
  BL-PC00 Palm Control, HL-3000 head binder, QR-170 seatpost binder, OT-GP00
  grip; CL-XS00, SP-XS00 and CW-XC00 (not shown in the pages we have); the
  pages missing from the Reminiscence set.
- Gotcha: a quote in a `data_source` label (the "'88") must be escaped in
  every subquery that matches on it, not just in the INSERT; the first load
  failed on the `source_ref` subquery and loaded nothing until the generator
  escaped it in both places.

## SunTour "BL" touring leaflet (6 images, February 1981) and "Original Goods" catalogue (4 images, May 1983), Reminiscence

- **BL leaflet** (`suntourbl81`, Reminiscence Part 59), `data_source` 201, label
  `SunTour BL leaflet, Japanese edition (Feb 1981)`. Source:
  http://cyclespeugeot.web.fc2.com/reminiscence/suntourbl81.html
  (`suntour-bl_01l..06l.jpg`). Japanese, Maeda Industries (SunTour USA on the
  back), "PRINTED IN JAPAN FEB.'81". The touring group "BL" (Blue Line), above
  Road-VX: RD-3200 (BL, 25T capacity, 24T max, 208 g, 4,400 yen), RD-3600 (BL-S,
  30T / 26T, 225 g), RD-3300 (BL-GT, 36T / 34T, quick cage, 220 g), FD-1900 (95 g),
  LD-2200 (68 g) and LD-2250 (direct-mount, 58 g), plus exploded parts lists
  (out of scope). All six were already in the DB from Edition No. 59, the 1982
  catalogue and No. 61, with matching specs.
  - Rows updated (4, `source_ref` 201): `year_from` 1982 -> 1981 on 7787 RD-3600,
    6273 LD-2200 and 8271 LD-2250 (the leaflet predates 1982); 2622 FD-1900
    description gained "95g (Feb 1981)" beside the existing 110 g (1982) and 93 g
    (No. 61) edition weights. RD-3200 4730 (1980-84) and RD-3300 4731 (1981-84)
    needed nothing. None of these rows has linked bike specs or overrides.
  - Not in the leaflet: the "Hero" siblings (2636, 4746, 4747, 1987), which the
    Reminiscence page says share the BL design (the page also mentions a black
    plate variant); left alone.
- **Original Goods catalogue** (`suntour_goods83`, Reminiscence Part 102, 4
  images), no `data_source`, no rows. "SunTour Catalog, Original Goods",
  Edition No. 61-D, printed May 1983 (the red triangle mark appeared in 1981).
  Accessories only: team bag PE-2400, quick bag PE-2500, 2-way shoulder bag
  PE-2600, bike bag PE-1400, wheel cover PE-1500, water bottle PE-1200, wallet
  PE-2300, sweat band PE-2100, racing cap PE-1300, bandana PE-2200, jersey
  PE-1600, pants PE-1700, apron PE-1800, stickers PE-1900 / PE-2000. None has a
  component category, so it is out of scope entirely.

## COMPONENT_OVERRIDES decisions for four SunTour spec strings (2026-10-18, no catalogue; bike_spec links only)

- Not a catalogue: these specs name parts the DB already has but the bike
  generator's matcher refuses to guess, so they were linked with year-ranged
  entries in `COMPONENT_OVERRIDES` (`scripts/generate-bike-update-sql.js`, new
  `Freewheels`, `Cassettes` and `Shifters` blocks, plus two lines in `Front
  Derailleurs`). The generator was re-run, and only the 16 matching `UPDATE
  bike_spec SET component_id` statements were loaded (14 rows changed, second run 0;
  Grizzly and Project 7 X-Press were already linked to 6312 by the matcher). No
  `component_detail` row changed.
- **Compe V -> 2603** "SunTour 3701 / FD-1100, Compe-V (5-hole)", 1977-78: "Raleigh/Sun
  Tour Compe V" (Grand Prix, Record Ace, Super Course, Super Grand Prix 1978; the
  "Raleigh/" prefix blocked the matcher) and "Compe V alloy front" (Super Course
  1977). The only Compe V row; clear.
- **Sun Tour Ultra 6 -> 2240** NW-6500, New Winner Ultra 6 (1979-85), for the
  1982 Raleigh Clubman 12, Competition 12, Rapide 12 and Record Ace 12
  freewheels. **A judgement:** US-6500 7812 (Perfect Ultra-6, 1978-84) is equally in
  range, and the spec text can't separate them. 8260 (1978 only) and 7868 / 7870
  (1987-88) are out by year. The same bikes' rear derailleurs link to 7820.
- **SunTour AccuShift Plus** (all 1990 Bianchi): cassettes "black 12-30T / 13-23T /
  14-28T 7-speed" (Osprey, Eros, Nyala) -> 1216 CS-AP00-S7 / K7 (1990-92); the
  "X-Press" shifters (Nyala, Osprey) -> 6312 SL-XP10 X-Press (XC-Pro / XC-Comp,
  1990-92), the row the matcher had already given Grizzly and Project 7.
  **Correction:** an earlier TODO guess that AccuShift Plus meant row 4744
  (Accushift Edge) was wrong; these specs are cassettes, freewheels and
  shifters, not rear derailleurs.
- Still unlinked: "AccuShift Plus silver 12-30T 7-speed" freewheels (Grizzly,
  Project 7; the 1992 freewheels 7994 / 7995 are the wrong year and 2249 alpha is
  13-24T) and "SunTour HR" rear derailleur (Marathon, Pursuit, Record, Teton, 1985
  Raleigh; the only candidate is 4702 RD-1100 Honor, linked by the abbreviation
  alone, and the Teton is a mountain bike). Both left for a source or a call.

### Follow-up (2026-10-18): "SunTour HR" linked

- Decided after the entry above: the four 1985 Raleigh "SunTour HR" rear
  derailleurs (Marathon, Pursuit, Record, Teton) now link to 4702 "SunTour 2600
  / RD-1100, Honor" through `Rear Derailleurs` `'suntour hr': [{ from: 1985, to:
  1985, id: 4702 }]`. **A judgement:** no DB row is titled HR; the Honor
  (1973-85, 28T, 14-30) fits the 14-30 5/6-speed freewheels and the mid tier.
  If a catalogue shows HR is a different model, repoint that entry. The
  "AccuShift Plus silver 12-30T 7-speed" freewheels stay unlinked.

## Mel Pinto Imports parts catalog, 1970 to 1975 (disraeligears.co.uk, 61 scans), `data_source` 272

- Source: https://www.disraeligears.co.uk/site/mel_pinto_catalog_-_1970_to_1975.html
  (scan_1..61). A US distributor's mixed parts binder (Campagnolo, Huret,
  Mavic, Shimano, Simplex, Stronglight, Sugino, SunTour, Super Champion),
  dated 1970 to 1975 as a range only and no page more closely, so it moved
  no `year_from` / `year_to`. SunTour pages carry "IBM No. 50-05-xxx" and
  the 888 mark. Spares (28 per derailleur etc.) are out of scope.
- Page map: 1-16 Campagnolo (1 composite, 2-6 Record road / track ensembles,
  7-9 Nuovo Record gear, 10 Sport Extra, 11-13 spares, 14 Nuovo Tipo 1253
  hubs 1266 / 1267, 15 extra-light pedals, 16 Record brakes 2040), 17-18
  Campagnolo tools, 19-29 Huret (Jubilee, Luxe 2100 / 2100T / 2100 ST,
  Allvit 1900, Super Allvit 1999, Svelto 2000 / 2000D / 2030, adaptors,
  Jubilee front 500, front derailleurs and levers), 30 Mavic rims, 31-43
  Shimano (Crane D-501, Crane GS D-510, Dura-Ace front derailleur, L-284 and
  10-speed lever, cranks, hubs, B-210, M-140), 44-46 Simplex (Criterium and
  Prestige AR 637, AV 223 / 323, 1971 / 72 productions), 47-48 Stronglight
  (axles, V4, S5), 49-50 Sugino (Mighty Compe, Maxi), 51-57 SunTour (V
  2900/1, V-GT 2902/3, GT 4600, Honor 2600, Compe-V 3701, Spirt 3700,
  handlebar-end 3090), 58-59 SunTour levers (3302, 3070 / 3080), 60 Super
  Champion rims 300 / 301 / 302 / 58 / 60, 61 cadence chart.
- Diff: every part was already in the DB except the three rims below. SunTour
  matches 4702, 4693 / 4694, 4695 / 4704, 4703, 2603, 2601, 6283, 8058, 6263,
  6259: no change (Honor 4702 shows 380 g against 400 g in the row; left, the
  description is 241 / 255).
- Added (source_ref 272, 1970-1975 = the binder range): 9579 Mavic Monthléry N
  (395 g), 9580 Mavic Monthléry Légère (310 g), 9581 Super Champion 302,
  Professional (410 g).
- Adjusted: Huret Luxe 4295 / 4296 / 4297 descriptions (refs 2100 T / 2100
  ST, cages 2101 / 2101-C; mapping T = Touring, ST = Super Touring is a
  reading, not stated); 9104 Mavic Extra Légère description (20 mm and 259 g
  here against 21.5 mm in Bikecology 1980; source_ref left on 247).
- Not changed, for a later source: "V 2900/1" and "V-GT 2902/3" here against
  4772 "2902, V-Luxe" and 4704 "4902, V-GT Luxe" in the DB (number conflict);
  Shimano "D-501 / D-509" here against the title "D500 / DB-100, Crane"
  (4498); Huret 2150 twin levers have no row (1882 / 1884 is 6071, Luxe
  1337-1344 is 8174, 1976); Mavic Extra Légère 9104, Piste 5105 and Spéciale
  Sport 5109 could take a 1975 `year_from` from this binder (they start 1978,
  1979, 1980; left because other catalogues set them); Huret 700 front 2385
  ends 1973 though the binder still lists a Luxe 700.

## SunTour New Winner multiple freewheel poster (2 scans, Nov 1978, VeloBase archive, data_source 289), 2026-10-29

Source: velobase.com CatalogScans, `SunTour/SunTourNewWinner.zip` ("new winner 1.jpg"
interchangeable cog chart, "new winner 2.jpg" operation manual; "PRINTED IN JAPAN NOV.
1978", Maeda Industries / SunTour U.S.A.). Not a catalogue: one poster for NW-7000 (Ultra 7,
126mm), NW-6500 (Ultra 6, 120mm), NW-6000 (6-speed, 126mm, regular chain) and NW-5000
(5-speed, 120mm), 1.37" x 24T thread, with cog ranges per position, close-ratio sets and cog
/ spacer part numbers (160xxxxx / 150xxxxx).
- Adjusted: 2236, 2237, 2238, 2240 `year_from` 1979 -> 1978 (poster predates the April 1979
  catalogue, data_source 128; old value 1979), thread and close-ratio set added to each
  description, 2238 chain noted as regular, `source_ref` 128 -> 289.
- Hub widths on the poster already matched the rows. No rows added; 2239 "Suntour New Winner
  7 speed" (1990) and 7816 NW-5100 untouched.
- Left: the cog and spacer part numbers (no component rows for individual sprockets).

## 3630 SunTour XCD 6000 hub retitled (2026-11-06, hub duplicate pass)

- 3630 "SunTour XCD 6000" (VeloBase DAFB66FD-BC5E-4B30-BF80-58D3AD65720D; photo shows a cassette freehub body) -> "SunTour XCD 6000 (freehub)", year_from 1980 -> 1988 (XCD group new in the 1988 catalogue, source 199); kept beside 3631 HB-XD00 (freewheel). 1989 Bianchi Axis hub relinked to it.

## Bottom bracket duplicate merge — 2026-11-06 (user approved)

- Deleted 178 "SunTour XC Pro Grease Guard" (VeloBase source_id
  84F8A702-0F91-45A8-8EDF-345E527EE185) into 8012 "SunTour BB-XP00-E /
  BB-XP00-73 / BB-XC01-I, XC-Pro". The specimen describes the same English
  Grease Guard cup-and-cone design with 1/4in balls, 11 per side; it is not
  the Microlite cartridge in 177. Survivor already holds the useful details.
- Kept 8012's catalogue dates 1992-1993 and source_ref 278. Discarded 178's
  erroneous 1980-1980 bucket; no bike_spec links, overrides or stored images
  on either row. SQL and rollback: `/private/tmp/bottom-bracket-merges.sql`
  and `/private/tmp/bottom-bracket-merges-rollback.sql`.

## XCD rear derailleur designs kept separate — 2026-11-08

User approved the reviewed distinction between **4789 SunTour XCD 6000
(1990)** and **4790 SunTour RD-XD00-GX, XCD 6000**. Added 4789 to
`REVIEWED_VARIANTS` and the pair `[4789, 4790]` to `REVIEWED_NOT_DUPLICATES`:
the latter also records the relationship now that 4790's coded title no
longer groups with 4789. No merge or new component row.

- 4789's original VeloBase reference `7C2E3966-D524-41DE-BC0C-FDD9B9E561E5`
  has a grey alloy body, black outer plate marked **SUNTOUR XCD**, a revised
  cable clamp and long cage; fields specify AccuShift, cable adjuster,
  5mm Allen mounting and cable-fixing bolts. Photo:
  https://www.velobase.com/CompImages/RDerailleur/ED6DC1BE-BFE5-4D2A-9AFA-0D5BE6922938.jpeg
- 4790's reference `AEC4D908-707A-47E4-AFC6-BF092E12F066` has a different
  body/clamp arrangement and **XCD 6000 ACCUSHIFT** lettering. Its cable
  bolt is listed as 4mm Allen. Photo:
  https://www.velobase.com/CompImages/RDerailleur/C47BACEC-29FF-4369-8CEC-112BA37CB0BD.jpeg
- Corroborating manufacturer excerpt: 1988 English catalogue spread pp.
  11-12 explicitly gives RD-XD00-GX, 296g and 40T capacity, supporting
  4790's existing Japanese 1988 catalogue description/source 199:
  https://www.equusbicycle.com/bike/suntour/catalog88/pdf/suntour88%20-%200007.pdf
  No additional source/ingest for this corroborating excerpt.

**Exact later model code remains unresolved.** VeloBase calls 4789
RD-XD00, but the newly located 1990 catalogue lists the XCD RD-XD10-GXB
(long) / RD-XD10-GTB (short) family. The photographed specimen has no
readable model stamp; resemblance does not establish an exact suffix.
Do not copy the RD-XD10 capacities/weights into 4789 or retitle it with an
unverified code. The page's 1990 attribution and existing date bounds were
left alone; no inferred introduction date was assigned.

Source lead at the time of this photo review: SunTour Bicycle Equipment Catalog
1990, host dates printing to autumn 1989. **Subsequently ingested in full on
2026-11-13, data_source 385; see the 1990 catalogue section below.** Only pp. 11-14 were read this
pass (11-12 XC Comp, 13-14 XCD). Manufacturer p. 13:
https://www.disraeligears.co.uk/site/suntour_bicycle_equipment_catalog_1990_-_page_13.html
It lists RD-XD10-GXB (305g, 40T total, 22T chainring difference) and GTB
(261g, 34T total, 16T chainring difference), both 30T maximum sprocket on
28mm dropout / full index mode, AccuShift Plus. These specifications belong
to the catalogue's named models and were **not** loaded into 4789.
Register this catalogue if a later review uses it to change identified
components; no new data_source row was needed for this photo-only enrichment.

Applied `/tmp/xcd-correction.sql`: one guarded description UPDATE on 4789,
from `SunTour XCD 6000 (1990), Japan` to a 199-character description of the
visible features and original reference fields. Kept source_ref **1**, the
existing VeloBase source, title/search_text and **1990-1990** dates. 4790
remains unchanged at **1988-1990**, source_ref **199**, with its existing
296g manufacturer specification. No generator edits. Verified **18699**,
1989 Bianchi Axis `SunTour XCD-6000`, still links to 4790; 4789 has no live
bike links. Existing scoped generator choices remain unchanged.

Readback passed; a second SQL run affected **zero rows**. Existing
`node --test test/duplicate-classify.test.js` passed; component count
unchanged at **10070**. Evidence/review plan `/tmp/xcd-investigation.txt`,
original proposal `/tmp/xcd-review-proposal.sql`, images
`/tmp/xcd-4789.jpg`, `/tmp/xcd-4790.jpg`, `/tmp/xcd-1988-p7.jpg`,
`/tmp/xcd-1990-p13.jpg` and `/tmp/xcd-1990-p14.jpg`.

## SunTour component catalogue, English edition — ©SunTour November 1987, the 1988 range (2026-11-16)

- Source: [equusbicycle.com catalog88](https://www.equusbicycle.com/bike/suntour/catalog88/pdf/)
  ("Through 1988" is the Equus page title), eight two-page spreads `suntour88 -
  0001..0008.pdf` with a usable text layer. Back cover: Maeda / SunTour USA and
  European distributors, "Designed and Published by Ron Kitching Ltd, Printed in
  England by Lund Humphries ©SunTour November, 1987". UK English edition of the 1988
  range. `data_source` **428**, label `SunTour Bicycle Component Catalogue, English
  edition (©SunTour November 1987)`. Spreads: 1 back / front cover; 2 AccuShift
  philosophy and compatibility chart; 3 Superbe Pro (pp.5-6); 4 Sprint / Cyclone
  intro; 5 Sprint 9000, Cyclone 7000, Alpha 5000 / 4050 / 3040 / 2000 road (pp.7-8);
  6 XC intro; 7 XC 9000 / 9010, XCD 6000, XC Sport 7000, XCD 4050, Alpha 2000 / 3040
  ATB (pp.11-12); 8 SVX, Seven, RT1000, AT1000, non-index levers, headsets, bottom
  brackets, freewheels, chains (pp.13-14). Not in scope: head binder HL-3000,
  QR-170, tool TA-320.
- Marked New for 1988: Alpha 4050 / 3040 / 2000 (road and ATB), XCD 4050, XCD 6000,
  XC-9010 RD-XC10-GX, BL-XC00, CL-XC01, SL-XS00-CH, SL-BC00, SL-CL20, SP-SU00-S,
  RT1000 and AT1000 (non-index), SL-DL10, SL-PL10 (L10), PLG LD-5100.
- **Alpha 5000 in 1988 is derailleurs only:** RD-5000-SS (278g), RD-5000-GX
  (301g), FD-5000-SS (100g). No alpha-5000 brakes, crank or hubs exist in the range
  (the 1987 Bianchi Sport SX hubs are Sansin RE-60a, 9010).
- **Supersedes Edition No. 89 readings:** RD-2000-SS / GX are the 1988 Alpha 2000
  codes (Edition 89 p.34's RD-2000-GX is a leftover), RD-2001 the 1989 ones. SVX
  RD-7300 / RD-7400 (no -GT suffix) and RT1000 / AT1000 are listed non-index here;
  the Edition 89 transcription called RD-7300 AccuShift, so the descriptions now
  carry both editions. 6376 CL-XD10 matches CL-XD00 (518g pair, identical) and
  6373 CL-XC10 (1987) is left as the earlier note had it.
- **8 added** (1988-1988 unless shown): 11418 FD-5000-SS, Alpha 5000 (1987-1988,
  1987 from the Sport SX fitment and the c. 1987 alpha-5000 group); XCD 4050 11419
  BA-4150 (cantilever), 11420 BL-4050, 11421 CL-4050, 11422 PL-4050; 11423
  RD-SN00-SS / GT, Seven (non-index); 11424 SL-DL10-BS / CS; 11425 SL-PL10-BS / CS.
- **Retitled** (old titles): 2615 "FD-SN00, SunTour 7" -> FD-SN00, Seven; 2619 + -SSB
  / -GXB; 11392 / 11391 / 11386 / 11084 + the 1988 single codes SL-4050-CH /
  SL-3040-CH / SL-2000-CH / SL-AT10-CH; 11390 + -SSB / -GXB; 4706 + RD-2000-SS /
  RD-2000-GX; 4770 "RD-7400-GT, SVX GT" -> RD-7400 / RD-7400-GT, SVX (long cage);
  8816 "CT-XD10, XCD 6000 (cantilever)" -> BA-XD10 / CT-XD10; 6376 "CL-XD10, XCD
  6000 (Combination Lever)" -> CL-XD00 / CL-XD10. Descriptions rewritten on 1034,
  2615, 2619, 4706, 4770, 6290, 6372, 11129, 11382, 11386-11389, 11391, 11393,
  11415 (1988 vs 1989 weights / index status kept where they differ).
- **Years:** year_from 1989 -> 1988 on 2619, 6285, 6274, 6372, 11084, 11129,
  11382, 11386, 11387, 11388, 11389, 11390, 11391, 11392, 11393, 11415. year_to ->
  1988 on 4721 RD-5000-SS and 7862 RD-5000-GX (1987), 2615 FD-SN00 (1987), 7792
  LD-1400 Bar-Con (1985). **year_from moved later:** 1034 BA-4050 "XCD 4050"
  1980-1980 -> 1988-1988 (VeloBase placeholder; XCD 4050 is new for 1988 and
  Edition 89's XCD 4050 page has no brake).
- **Bike link (user approved):** 1987 Bianchi Sport SX "Derailleurs: SunTour
  Alpha-5000" front 1329 -> 11418 (Front Derailleurs override). Regenerating all
  93 bike catalogues changed only that spec; SQL re-run added nothing.
- Former 6290 PLG LD-5100 versus LS-5700/LS-5800 hold superseded by the [applied handed-code reconciliation](#plg-6290-handed-code-reconciliation--2026-11-18-applied-and-validated); 7861
  RD-5000-GT not listed in 1988 (kept at 1987).

## Uncoded VeloBase stubs vs coded rows — 2026-11-16 review

VeloBase pages (ViewComponent.aspx?ID=<source_id>) give a model field for most bare rows:

- 3138 "XC Pro" headset (A3358349): model **HS-XP01**, Grease Guard, 20 x 3/16in balls,
  37mm stack. Distinct from 1990 HS-XP00 (11020) and 1992 HS-XP02 (8044). Its two links
  (1990 Bianchi Project 7 / Grizzly "SunTour XC-Pro") belong on 11020, the XC-Pro headset in
  the 1990 catalogue. The [1991 catalogue follow-up](#1991-bicycle-equipment-catalog--targeted-reconciliation)
  confirmed the HS-XP01 code and superseded the date and bearing-size figures.
- 6280 "Cyclone 5000/7000/9000" shifter (86C13EBA): model **SL-CL10-B**, braze-on, 80g =
  7851. No links; the only reference was a `'suntour cyclone 7000 barcon'` override for the
  non-road-skipped 1987 Volpe, which pointed a bar-con at a down-tube lever.
- 6294 "Sprint" shifter (3D51F27D): model **LD-4850**, braze-on friction, mid-late 1980s, =
  7849 LD-4800 / LD-4850. Its link is the 1985 Raleigh Competition "SunTour Sprint, down
  tube", so 7849 year_from needs 1987 -> 1985 (fitment, non-index Sprint era).
- 3614 "Superbe" hub (F93775A4): model **RH-1000**, low flange, body stamped SUPERBE, 383g
  avg = 8262 RH-1000. Supersedes the No. 61 note above: 383g is a single hub, not a pair
  (8262 prints 548g a pair).
- 4794 "XC-Master (1991)" (916A66BE): model **RD-XM01-GXB**, outer plate "SunTour
  XC-Master", citing the 1991 catalogue p.14 (not held). Distinct from 4793 (XM00 / XM02).
- 4020 PL-XP01 titanium (76C51DEA): titanium axle, 256g actual; kept apart from 4019
  (steel axle, 305g pair) and registered in `REVIEWED_NOT_DUPLICATES`.
- No coded row to merge into: 1335 Superbe chainrings (6A1211EB: first-generation, Sugino-made,
  stamped S-<teeth>, 144 BCD), 1336 Superbe Pro Black rings (DA35D6CE: black / gold edition,
  144 BCD), 1337 Superbe Pista ring (50586F06: NJS, 1/8in), 4006 Radius pedal (7F329AE0: no
  model field, platform, late 1980s - early 1990s; the 1990 catalogue lists no Radius pedal).
- **Applied 2026-11-16 (user approved):** bike_spec 6910 / 6931 3138 -> 11020 and 3320 6294 ->
  7849; 3138 retitled "SunTour HS-XP01, XC-Pro (Grease Guard)" (old "SunTour XC Pro"), 4794
  "SunTour RD-XM01-GXB, XCM (XC-Master)" (old "SunTour XC-Master (1991)"), 4020 "SunTour
  PL-XP01, XC-Pro (Grease Guard, titanium axle)" (old "SunTour PL-XP01 XC Pro Grease Guard
  Titanium"), descriptions rewritten from VeloBase; 7849 year_from 1987 -> 1985 and LD-4850
  Sprint note added. **Deleted:** 6294 "SunTour Sprint" (Shifters, 1980-1985, group 66,
  3D51F27D-E5A7-4B35-A07F-97D933DD0B2A), 6280 "SunTour Cyclone 5000/7000/9000" (Shifters,
  1988-1989, group 146, 86C13EBA-F63E-44D5-A572-FEBB22DBA828, 80g), 3614 "SunTour Superbe"
  (Hubs, 1970-1980, group 67, F93775A4-BFB2-4DFC-9C74-A6E6CA285012, 383g avg). Generator:
  Headsets 'suntour xc pro' 1990 -> 11020, Shifters 'suntour sprint down tube' 1985 -> 7849,
  'suntour cyclone 7000 barcon' -> null. Validation: 10 rows, rerun 0; regenerating all 93
  bike CSVs changed only specs 3320, 6910, 6931, matching the DB; no dangling bike_spec
  references; no quality-report findings; SunTour duplicate report unchanged.

## VeloBase model-field pass — 2026-11-16 (user approved, applied)

VeloBase pages for the 53 remaining stub rows were read for model / marking fields.

- **Merged (deleted, no links):** 2232 "SunTour Alpha (6sp)" (Freewheels, 1980-1990, VeloBase
  model FW-AL00-R6, marked AP GF) into 7866 FW-AL00-R6; 4750 "SunTour LePree (standard cage)
  version 1" (1980-1980, group 236, model RD-6100, 28T max / 30T wrap, versions told apart
  by photo only) into 4749 RD-6100. Deleted source_ids: 2232 `EA2A035D-F897-4783-9043-7F3737F322D5`,
  4750 `E85A7086-131B-4852-8668-5ABD15D1F3FE` (both source_ref 1, "<title>, Japan").
- **Retitled with VeloBase codes, descriptions rewritten** (old titles): 4688 "New Skitter
  (version 2A)" -> 2200; 4690 "Grand-Prix (type 3)" -> 2300; 4691 "Echo (type 1)" -> 2600
  (code later reused for Honor 4702); 4692 "Competition (type 1)" -> 2800; 4693 / 4694 "V
  (version 2A / 2C)" -> 2901; 4713 "Love (version 2)" -> RD-LV00; 4765 "Superbe II
  (long-cage friction)" -> RD-5800, Superbe II (long cage); 4751 "LePree 3 Pulley System" ->
  RD-6700, Le Pree (3-pulley); 4779 "XC (triple pulley)" -> RD-6300, XC (3-pulley); 4734
  "Cyclone 3-Pully" -> Cyclone (3-pulley); 6303 "Superbe Pro (6, 7 index)" -> SL-SB01-B,
  Superbe Pro (index). search_text changed only on the three 3-pulley rows.
- **Date:** 2617 SL (Black) 1972 -> 1975 (specimen inner plate 4532, RL date code = Dec
  1975); description now says it is a finish variant of 2616.
- **Kept apart:** the three-pulley rows from their standard rows (4778 / 4779, 4751 / 7827
  registered in `REVIEWED_NOT_DUPLICATES`; the duplicate report still lists them as
  generation pairs). This pass left 2662 open. Its 2026-11-22 boxed identification
  is recorded above. Other rows left as they were: 2631,
  4712 (earlier decisions); unsourced decade dates on 4765 / 4751 / 4779 / 4734.
- Validation: 15 rows, rerun 0; all 93 bike CSVs regenerate identically; no dangling
  bike_spec references; no quality-report findings.

## Placeholder rows and SunTour Quattro — 2026-11-16 review

- 6255 "SunTour (1980's)" shifter (VeloBase 7DF320F2): no model field; top-mount friction
  down-tube lever, aluminium, "1979 - Mid 1980's", OEM on a Sekai SX 2000 with V-GT Luxe and
  ARX. Could be any top-mount lever, so it is not an identity. No links.
- 5931 "SunTour (internal binder type)" seat post (FA0C0437): no model, years N/A;
  cam-action post for aluminium Schwinn Paramounts with no external binder. No links.
- 6258 "SunTour Quattro" shifters (BFA80E6B): 7-speed AccuShift, clamp-on down-tube,
  aluminium, "Late 1980's". VeloBase's notes: Quattro was a SunTour run made for the Bianchi
  Campione d'Italia from 1989 (Cyclone 7000 in 1987-88), never an official SunTour group and
  absent from SunTour catalogues. This supersedes the earlier TODO reading that Quattro was only
  a Bianchi label for some other SunTour model. Links 18470 (1989 Campione d'Italia), 7184 (1990
  Campione d'Italia), 19492 (1991 Trofeo) are kept. The matching Quattro derailleurs (FD 18468
  / 7182 / 19490, RD 18469 / 7183 / 19491) have no rows.
- **Applied 2026-11-16 (user approved):** deleted 6255 and 5931 (old values above); 6258
  description rewritten from VeloBase (old "SunTour Quattro, Japan"), year_from 1980 -> 1989,
  source_ref stays 1. Validation: 3 rows, rerun 0, all 93 bike CSVs regenerate identically,
  Quattro links unchanged, no dangling bike_spec references, no quality-report findings.

## Sprint (non-index) / Cyclone stub check — 2026-11-16

- 4002 PL-5300 Cyclone: Edition No. 62 (source 348) printed p.8, alloy body, black steel
  plate, Cr-Mo spindle, 60mm plate, 398g pair. Not in the 1988 English catalogue (Cyclone
  7000 pedal there is PL-CL10).
- 1042 CB-7600: 1988 English catalogue (source 428) p.7 lists CB-7600 short reach 40-50mm
  and CB-8600 normal reach 47-57mm, grey satin anodized, thrust bearing, 306g pair
  (CB-7600). VeloBase specimen (FAF00499-5EFB-482E-8F97-ACC73C7B1699): front arm marked
  "Suntour Sprint", back "4000 (Max 50 - 40mm Min)", 316g, years 1985-1987. Kept in group
  66 Sprint (non-index, 1985-87) rather than 147 Sprint 9000; years left 1985-1988.
- 171 BB-5000 "Sprint": VeloBase (6D2C11CE-62B5-4841-8D67-03FE587A3E06) gives Mid 1980's,
  cups marked "SunTour Japan 1.37x24T BB", 1/4in x 9 balls per side, Campagnolo square
  taper, 109mm. The 1988 Sprint bottom bracket is BB-500 (p.13; 8819: Superbe taper, 11
  balls, 298g), so not the same part. Not in No. 61 / 62, the 1985 Japanese No. 63 or
  1988-89 sources. Left unchanged.
- **Applied 2026-11-16 (user approved):** 4002 description rewritten, source_ref 91 -> 348
  (old: "SunTour PL-5300, Cyclone, Japan, 398 grams"); 1042 "SunTour CB-7600, Sprint" ->
  "SunTour CB-7600, Sprint (short reach)", description rewritten, source_ref 199 -> 428
  (old: "SunTour CB-7600, Sprint, Japan, 316 grams"). Years, groups and search_text
  unchanged; VeloBase year_from 1984 / 1985 kept although neither is in No. 61. Both bike
  links are override-pinned by id. Validation: 2 rows, rerun 0, all 93 bike CSVs
  regenerate identically, no quality-report findings.

## Remaining placeholder descriptions — 2026-11-16 read-only review

The request referred to 30 placeholders. A fresh live query found **36** descriptions
beginning with their exact title plus `, Japan` and containing no full stop: the
remaining imported title/country/weight stubs, including longer weight annotations.
This is a reproducible current scope, not a claim to reconstruct the earlier 30-row
selection. All 36 retain source_ref **1**. Each original VeloBase page was
retrieved again on 2026-11-16 using
`https://velobase.com/Pages/ViewComponent.aspx?ID=<component_detail.source_id>`.
The initial review made no database changes; the subsequent user-approved
description updates below were applied on 2026-11-16. No generator changes.

**Applied 2026-11-16 (user approved):** description-only enrichment for every row
below, replacing the imported `<title>, Japan[, weight]` descriptions. Guarded SQL
checked the ID, brand, source_ref, original source UUID and binary old description.
First application affected **36 rows**; rerun affected **zero**. Descriptions are at
most 249 characters. Exact live readback verified every description and all other
SunTour columns/rows against the pre-application snapshot: titles, search_text,
years, categories, groups, source UUIDs and source_ref stayed unchanged. VeloBase
remains the evidence source; its specifications are not promoted to
manufacturer-confirmed facts. Reviewed SQL, baseline and validation scratch files
were removed after validation.

| ID | Evidence recovered / applied enrichment |
| --- | --- |
| 171 | BB-5000: 109mm steel axle, Campagnolo taper, nine 1/4in balls/side, English cups. Keep separate from BB-500's Superbe taper / eleven balls; precise dates still unsupported. |
| 1046 | Superbe arm lettering, rear marking 4700, 47-57mm reach, Dia-Compe manufacture, quick release, 325g average. Code is present on VeloBase; a period catalogue crosswalk remains wanted. Do not silently change the current Superbe Pro title/group. |
| 1335 | Sugino-made first-generation Superbe rings, 144 BCD, 42-56T, 3/32in, S-[teeth] stamp, actual 155g 54/44T. |
| 1336 | Superbe Pro black/gold edition rings, black anodizing, 144 BCD, 42-53T, threaded keeper pin, actual 123g 52/42T. |
| 1337 | Superbe Pista ring, 144 BCD, 1/8in chain, SunTour Superbe [teeth] Japan NJS marking. |
| 1980 | Sugino-made ARX double, alloy, unfluted 170mm arms, square taper, 9/16in pedals; no model number. |
| 1989 | Superbe double, 53/39T; right arm SR Suntour Superbe, reverse SR Suntour 172,5 Taiwan. Do not repeat Japan as specimen manufacture location from the generic country field, or copy an uncertain BB length. |
| 1990 | Superbe Comp triple, 130/74 BCD, 170/175mm, alloy, square taper; inner ring mounted with long bolts/spacers. Double and triple remain separate. |
| 2231 | AP-marked six-sprocket black steel freewheel, four-prong removal, French/Italian threads listed, 13-18 / 13-28, actual 336g. AP marking alone does not identify a particular FW-AL generation; keep undated. |
| 2241 | YE Suntour Perfect marking, six sprockets, gold, English thread, two-prong removal, 16-21T, actual 419g. VeloBase's aluminium-cog / AccuShift fields need corroboration; do not assert them as fact or merge by the Perfect name. |
| 2600 | Alpha 3000 double, first specimen with cable stop, nickel-plated cage, 28.6mm clamp, 8mm wrench cable bolt. |
| 2611 | VeloBase model **FD-3000-GT**, later Alpha 3000 double without cable stop. This code is missing from the DB title; preserve suffix as reported pending period confirmation. |
| 2612 | VeloBase model **FD-3000-GX**, later Alpha 3000 triple without cable stop. Retain the double/triple distinction and keep separate from 2646 Superbe FD-3000. |
| 2613 | FD-3200, Le Tech triple, 28.6mm clamp, nickel-plated cage, 8mm wrench clamp/cable bolts, no cable stop, 100g specification. |
| 2618 | Vany double, steel cage, pivot-arm design; Suntour Vany JAPAN clamp marking; no numbered model or date. |
| 2631 | VeloBase model FD-CL10-SS-H, white Cyclone 7000, 18T capacity, 107g; page also describes -SS-B and lists both clamp/braze-on mounting. This is not enough to choose a merge into 7855 hinged or 2630 braze-on. Existing decision moving spec 1309 to 2630 remains unchanged. |
| 2636 | Hero double, chrome steel cage, 28.6mm clamp, 8mm wrench bolts, no stop. Page transcribes marking as SUNTOUR HERE; retain that attribution rather than inventing a model. |
| 2662 | Earlier review captured VeloBase's FD-XD00-GX, 28.6mm, 5mm Allen bolts and 18T claims. The [boxed-specimen match](#xcd-front-fd-xd10-gxh-identification--applied-and-validated-2026-11-22) now identifies the main specimen as FD-XD10-GXH. |
| 3130 | HS-400, sealed, aluminium/steel, steel crown/upper head race, twenty 3/16in balls per race, English/Italian or French threading. No dates. |
| 3131 | Alpha 3040 steel headset, twenty 5/32in balls per race, 26.4mm crown race, 25.4mm x 24TPI; Suntour Alpha Japan cup. Page says unknown start to late 1990s, not a precise 1990 attestation. Keep current dates pending evidence. |
| 3611 | **Photo confirms cassette freehub**, SL decal, low flange, QR; fields specify 126mm and 32/36 holes. VeloBase model HB-SL01-R conflicts with catalogue FH-SL01. Photo `https://velobase.com/CompImages/Hubs/FF46824B-F2D7-46E2-823D-3779EB814BEC.jpeg` inspected. The earlier photo-check action is complete: compare its generation/cassette with 7989 FH-SL01-7 before merging; no threaded-rear-hub source hunt is needed. |
| 4006 | Radius platform pedal, alloy body/cage, steel axle, 9/16in thread; still no numbered catalogue identity. |
| 4686 | Wide version 1A, steel direct pull, medium cage, bolt-on, no adjuster, Suntour 4 marking, 28T max, 314g spec. |
| 4687 | Wide version 1D's structured fields are empty. Inspected photo `https://velobase.com/CompImages/RDerailleur/3C22D54F-781F-4C4E-AFAB-5E5C43DAD2C6.jpeg`: toothed mounting washer, exposed cylindrical spring, curved metal cage. Describe that specimen; do not copy 1A's capacities. Page lists 310g spec and 1956-63. |
| 4696 | Checker, short cage, alloy/steel, AccuShift/friction, adjuster, 26T max, 309g spec; inner marking VIA DF. **DF corresponds to June 1987** under the recorded SunTour date-code table. This is specimen evidence against literal 1980, not an introduction/end-year bound; defer date SQL pending corroboration. |
| 4697 | Competition type 2, steel short cage, claw, 24T max, 256g spec; type-specific knuckle lettering. Keep apart from type 1. |
| 4700 | VeloBase model **MRC-50**, SMS Max; Bridgestone collaboration, cable/cam indexing, claw, short cage, 34T max, actual 451g. Code absent from DB title. |
| 4712 | VeloBase model **RD-5500**, second-version Mountech GTL, long cage, standard replacement guide pulley, 34T / 38T wrap; contributor reports BK specimen (November 1985). Keep separate from earlier Tech-pulley 4711; do not copy earlier specifications. |
| 4717 | U, claw, medium cage, friction, adjuster, 30T / 28T wrap, actual 349g including hanger but excluding dropout bolt; retain the existing second-example 354g too. |
| 4718 | Vista-branded, SunTour-made VG T, alloy, medium cage, friction, adjuster, VISTA / VG T markings. Page reports 257g, 34T / 36T. No brand reassignment or merge proposed. |
| 4746 | Hero version 1, steel, claw, friction, short cage, adjuster, 30T max, 353g spec attributed by VeloBase to Disraeli Gears. Existing fitment range is not replaced by its page's 1987 attribution. |
| 4747 | Hero version 2, alloy/steel, short cage, 5mm Allen mount, adjuster, Blue Line-like revision. Date still unknown. |
| 6261 | AX-5000 handlebar shifters, six-speed AccuShift/friction. Page's five-speed indexing note is explicitly uncertain. |
| 6292 | Seven stem/headset levers, aluminium, power shift lever marking; right retro-friction, left friction, lollipop cable heads. No exact catalogue code. |
| 6314 | ST-ES01 ErgoTec, AP-MD ES01 marking, spring-return thumb/finger controls, 7/8-speed AccuShift, actual 263g including uncut cables, 1994 attribution. |
| 6693 | Ole alloy quill stem, 25.4mm clamp, 22.0mm quill, wedge, 5mm Allen expander/binder; no numbered model. |

**Validation / limits:** the only live bike links on these rows are Hero fronts
8444 / 8464 / 8484 / 8583 -> 2636, Hero rears 8445 / 8465 / 8485 / 8584 -> 4746,
and Radius pedals 7207 -> 4006. All nine remain unchanged. The whole-DB quality
report returned zero errors; among the reviewed IDs it flags only the five undated
rows 2231 / 2241 / 2618 / 3130 / 4747. These are review findings, not permission to
invent dates. SunTour duplicate report has seven groups / eleven pairs; its near
report has zero candidates. Alpha 3000 configuration differences and existing
Wide/Hero/specimen generations are preserved; no new merge is established by title
similarity. Preflight checked every source guard against the baseline. Application
and exact readback passed; row count remained 10496, every live bike mapping was
unchanged, and rerun affected zero rows. Description-only edits do not change the
generator's matching inputs, so catalogue regeneration was unnecessary. The five
missing-date findings remain open evidence questions; no date corrections or merges
were included.

## SunTour Bicycle Component Catalog Edition No. 89 — printed 09.1988 (2026-11-16)

- Source: [RadioLabWorks PDF](https://www.radiolabworks.com/bikes/catalogs/Suntour%201988%20%2389%20Components%20Catalog.pdf)
  (filename says "1988 #89"), 45 scanned pages, no text layer. Cover "Edition No.89";
  p.2 intro calls it the '89 product line (Steve Bauer, 1988 Tour); back cover
  "Printed in JAPAN Sep./'88", Maeda Osaka / SunTour USA. `data_source` **427**,
  label `SunTour Bicycle Component Catalog Edition No. 89 (printed 09.1988)`. Model
  year 1989. Supersedes the partial road pages held as source 86.
- Pages (pdf numbering; printed = pdf - 1): 1-3 cover / intro; 4-7 road and ATB
  system charts (codes only); 8-11 Superbe Pro + Track; 12-13 Sprint 9000;
  14-15 GPX; 16 Olé; 17 Edge 4050; 18 Blaze 3040; 19 Alpha 2000 / 1500 / RT1000
  road; 20 Cyclone 7000; 21 Alpha 4050 / 3040 / 2000 / SVX derailleurs; 22-23
  freewheels; 24-27 XC 9000; 28-29 XCD 6000; 30 XCE 4050; 31 XCE 4051 front index;
  32 XCM 3040; 33 Alpha 2000 / 1500 / AT1000 ATB; 34 XCD 4050 / Alpha 3040 / 2000
  ATB; 35-38 accessories, PLG / PUB-10 / UB-10 / DLW levers, dropouts, quick
  releases; 39 tools; 40 Scrambler II; 41 LV-3; 42-43 Original Goods; 44-45 back
  cover (duplicate scan). Transcribed by three subagents; pp.7, 20, 29 and 30
  checked at full size. Out of scope: dropouts, tools, accessories, apparel.
- '89 new groups: Olé, Edge 4050, Blaze 3040, XCE 4050, XCE 4051 (front index),
  XCM 3040; Alpha 2000 / 1500 (marked NEW); new parts BL-SP10, BA-SP00-S,
  Bar-Con SL-BC00, FH-XD10 freehubs, FW-XC00-R6, CL-XC01 / XC02-U7, CL-XD01 /
  XD02-U7, CT-XD10. Absent (dropped by 1989): XC Sport 7000, alpha-5000,
  alpha-3000. **No SunTour Quattro anywhere**: the 1989-91 Bianchi "SunTour
  Quattro" derailleurs are not a SunTour catalogue name in this edition.
- **Code reuse, not continuity:** the Alpha 1500 RD-1500 / FD-1500, Alpha 2000
  FD-2000 and the Cyclone standard-reach CB-6100 reuse codes of different older
  parts (4705 RD-1500 V-GT, 2645 FD-1500 Superbe, 2652 FD-2000 Superbe Pro, 1052
  XC roller-cam CB-6100). New rows were added; the old rows were not extended.
- **46 added** (11372-11417, all 1989-1989, source 427): 11372 BL-OL00; 11373 BA-OL00-1 / -2;
  11374 BB-OL00-J; 11375 SL-ED45-B7U / C7U; 11376 BB-ED45; 11377 HB-ED45-F / R;
  11378 RD-BE34-SSB / SS; 11379 FD-BE34-SSH; 11380 HB-BE34-F / R; 11381 RD-1500
  Alpha 1500 (SSB / SS / GXB / GX); 11382 RD-RT10-SSB / SS; 11383 FD-2000-SSH / GXH
  Alpha 2000; 11384 FD-1500-SSH / GXH Alpha 1500; 11385 SL-2000-CP; 11386
  SL-2000-CHR / CHL; 11387 RD-AT10-GXB / GX; 11388 FD-AT10-GXH; 11389 RD-3040-SS /
  GX; 11390 FD-3040-SS / GX; 11391 SL-3040-CHR / CHL; 11392 SL-4050-CHR / CHL;
  11393 RD-7300 SVX; 11394 CB-6100 Cyclone (standard reach); XCE 4050 11395
  RD-XE45-GXB, 11396 FD-XE45-GXH, 11397 SL-XE45, 11398 BL-XE45, 11399 BA-XE45-C,
  11400 CT-XE45, 11401 CW-XE45, 11402 BB-XE45, 11403 HB-AT45 (FQ / RQ / FS / RS; the
  XCE and XCM hubs per the p.7 chart), 11404 PL-XE45; XCE 4051 11405 SL-XE46-L3,
  11406 FD-XE46-GXH, 11407 CW-XE46; XCM 3040 11408 SL-XM34, 11409 BL-XM34, 11410
  CW-XM34, 11411 FD-XM34-GXH, 11412 CT-XM34; 11413 FW-XC00-R6; 11414 FH-HC10-U7 /
  R6 cassettes; 11415 HB-XD10-F / R (bolt-on); 11416 FH-XD10-U7 / R6; 11417 CL-XD01 /
  CL-XD02-U7.
- **Retitled** (old titles): 4752 "SunTour Ole" -> RD-OL00-SSB; 6289 "LS-OL00-BS/CC"
  (Bike Nashbar 1988 spelling) -> SL-OL00-BS / SL-OL00-CS; 3133 "HS-OL00-J" -> + -F / -C;
  4005 "SunTour (MKS) Ole" -> PL-OL00, Ole (MKS); 4744 "SunTour Accushift Edge (4050,
  Accushift Plus)" -> RD-ED45-SSB, Edge 4050 (matches its VeloBase model field);
  6285 "SL-4050, Edge" -> SL-4050-BS / -CS, Edge 4050 (6-speed); 6274
  "SL-3040-BS/CS, Blaze" -> + SL-3040-CP / SL-3041-CP; 4795 "XCM Accushift 3040" ->
  RD-XM34-GXB, XCM 3040; 4770 "SVX GT" -> RD-7400-GT; 4720 "Accushift alpha-4050"
  -> RD-4050-SS / RD-4050-GX; 2619 "a-4050, 4050" (FD) -> FD-4050-SS / -BS / -GX;
  4706 "Accushift alpha-2000" -> RD-2001-SSB / SS / GXB / GX (its 297g VeloBase
  weight kept, type unknown); 11129 FD-RT10-SSH "AC1000" -> RT1000 / AC1000; 11127
  SL-1500-CP -> + Alpha 1500; 11130 SL-RT10-CP -> + RT1000; 11084 SL-AT10 -> + AT1000;
  8816 "BA-XD10, XCD 6000 (cantilever)" -> CT-XD10 (164g 1988 JP vs 230g pr here);
  6372 "CL-XC02-U7" -> CL-XC01 / CL-XC02-U7. Descriptions also rewritten on 1985
  CW-OL00, 2638 FD-OL00, 3609 HB-OL00, 2653 FD-4300.
- **Years:** year_to -> 1989 on 167, 7852, 454, 7853, 7855, 8815, 7854, 3625, 6288,
  7835, 7837, 2235, 7817, 8284, 4003, 4741, 4740, 8817, 7866, 7851, 6281, 1420,
  7869, 7868, 7867, 7872, 7871, 7870, 1047, 4770 (1985), 2653 (1986), 4720 (1988),
  8816 (1988). year_from -> 1989 (earlier) on 11097 BL-SP10, 11129, 11127, 11130,
  11084 (all 1990 before). **year_from moved later:** 4795 1980 -> 1989 and 2619
  NULL -> 1989 (VeloBase placeholders; '89 new group); 4793 RD-XM00 / XM02 and 2665
  FD-XM00 / XM02 1989 -> 1990 (the 1989 XCM is XM34; their own descriptions date
  XM00 to 1990); 4005 PL-OL00 1980 -> 1988 (Bike Nashbar Spring 1988 already lists
  Olé although this edition calls it '89 new). 7817 FT-3050 / FS-1500 / MF-1000
  year_to 1989 rests on FS-1500 and MF-1000 only.
- **Bike links (user approved):** 1989 Bianchi Forte 18614 -> 11398, 18615 -> 11396,
  18616 -> 11395, 18617 -> 11397, 18618 -> 11401; Volpe 18719 -> 11396, 18720 ->
  11395, 18728 -> 11403; 1989 Peugeot (NL) VTT Express 17373 2665 -> 11411, 17374
  4793 -> 4795. Generator overrides updated; regenerating all 93 bike catalogues
  changed only these ten specs, no other output references the new ids, and the
  retitled rows' generated links equal the DB. SQL re-run affected no rows.
- **Edition No.89 pp.40–41, Scrambler II / LV-3 transcription (2026-11-18):**
  PDF pp.40–41 (printed pp.39–40) were inspected from the full-size scan. On
  p.40, Scrambler II rear derailleur **RD-SR10-GT** is indexed, with black-finished
  aluminium alloy and carbon-fiber composite body, steel cage, 28T largest sprocket in index mode (28 mm dropout),
  34T total capacity / 18T chainring difference, 290 g without bracket; codes
  25519921 without bracket and 25519901 with bracket. **RD-SR10-SS** is also
  indexed, same listed material, 28T maximum / 28 mm dropout, 28T total capacity /
  12T chainring difference, 260 g without bracket; codes 25509921 without
  bracket and 25509901 with bracket. Thus the catalogue treats GT and SS as
  separate capacity configurations, not merely bracket variants. Page 41's
  separate LV-3 rear derailleur is RD-LV00, code 22319901, steel black-finished
  body, 22T largest sprocket, 8T capacity (3-speed only), 473 g.
  Source PDF: https://www.radiolabworks.com/bikes/catalogs/Suntour%201988%20%2389%20Components%20Catalog.pdf .
  Live DB comparison: 7956 is 1992 RD-SR21-SSB/SSZ, 28T maximum, 28T
  capacity, 255 g; 7957 is RD-SR21-GTB/GTZ, 28T maximum, 34T capacity,
  275 g; 7958 is RD-SR21-GXB/GXZ, 32T maximum, 40T capacity, 283 g.
  The SS and GT capacities match the 1989 RD-SR10 configurations, but the
  model codes, 1989 weights and AccuShift designation differ from the 1992
  AccuShift Plus Lite rows. Page 40 does not list an RD-SR10 GX. Do not
  equate or merge these generations solely on matching capacities. A live title
  search found no RD-SR10 row. No DB changes were made.

  Other p.40 Scrambler II items (1989 availability): FD-4200 front derailleur,
  22T capacity, 160 g; SL-SR10-CT/BT double downtube levers, six-speed right
  and three-speed left index, 96/80 g; SL-SR11-CT/BT double downtube levers,
  six-speed indexed right and friction left, 94/78 g; SL-SR16-CT/BT single
  six-speed downtube lever, 76/60 g; SL-SR20-CH handlebar levers, six-speed
  right and three-speed left index, 130 g/pair; SL-SR30-CC five-speed and
  SL-SR40-CC six-speed top-tube levers, listed 270 g/pair; FW-AL00-R6
  six-speed freewheel, 13–21/24/28/32T options; TZ-6000 chain, 116 links,
  358 g. CT denotes clamp and BT braze-on in the downtube listings.

  Other p.41 LV-3 items: SL-LV00 handlebar indexed lever in black or white,
  116 g; SL-LV10 with brake bracket, black or white, 100 g; HB-LV00 steel
  small-flange front/rear hubs, 28/36 holes, 93/115 mm locknut widths,
  180/393 g; CW-LV00 steel cotterless 165 mm crankset, 36T oval, black or
  white, 1060 g; FW-LV00 three-speed 14/17/22T freewheel, M30 x 1 thread,
  214 g; TZ-6000 chain, 116 links, listed here as 338 g. Accessories outside
  component categories: DG-LV00 derailleur guard, SD-LV00 freewheel
  protector and SD-LV10 spoke disc. Row 4713 identifies RD-LV00 and records
  a 26T maximum, while this edition prints 22T; preserve both as separate
  source claims pending clarification. The two page-specific TZ-6000 weights
  also differ; neither figure is corrected from this comparison.
- **Live reconciliation of pp.40–41, 2026-11-18 (read-only):** visually
  rechecked both pages and searched SunTour titles and descriptions by model,
  Love and Scrambler. Source 427 is already registered. No DB changes.
  | Page item | Live match or proposed treatment |
  | --- | --- |
  | RD-SR10-GT / SS | No matching row found; separate 1989 GT and SS candidates. 1992 RD-SR21 rows 7957 / 7956 are distinct; 7958 is a later GX, not a page item. Bracket codes are configurations, not separate derailleur models. |
  | FD-4200 | No matching SunTour front derailleur found; candidate, with outerless/outered codes 29509941 / 29509931. RD-4200 4725 is a rear derailleur and LD-4200 7835 a lever. |
  | SL-SR10-CT/BT, SL-SR11-CT/BT, SL-SR16-CT/BT, SL-SR20-CH, SL-SR30-CC and SL-SR40-CC | No matching model rows found. Distinguish double indexed-left, double friction-left, single downtube, handlebar, and five-/six-speed top-tube configurations; the top-tube feature text says six-speed even though SR30 is explicitly labelled five-speed. |
  | FW-AL00-R6 | Existing 7866; 1987–89 includes this page. The page supplies 13–21/24/28/32T ranges and weights. |
  | TZ-6000 | Existing 7821; 1980–89 includes this page. Both pages list the same 116-link codes but 358g and 338g respectively. Scrambler page calls the chain “Ultra size”, while 7821 says regular and not Ultra 6/7; do not infer interchangeability or overwrite that limitation without further evidence. |
  | RD-LV00 | Existing 4713, 1987–89, source 1 (VeloBase), no bike links at review. Edition No.89 explicitly specifies 22T largest sprocket, 8T total capacity, three-speed only, 473g; the existing 26T maximum remains a conflicting VeloBase claim, and 485g is an independent measured average. Do not represent 26T as the catalogue specification or infer separate versions. |
  | SL-LV00 / SL-LV10 | No matching model rows found; separate handlebar levers, the latter with brake bracket. |
  | HB-LV00 | No matching model found; front and rear are distinguishable products, 93/115mm and 180/393g respectively. |
  | CW-LV00 / FW-LV00 | No matching model rows found; respectively 36T oval steel crankset and 14/17/22T three-speed M30 freewheel. |

  LV-3 guard and discs are outside the component categories. The catalogue
  attests the 1989 product line; it does not establish production endpoints.
  Searches also found the earlier RD-1600 Love 8073, distinct from RD-LV00.
  No exact model names or 4713 overrides were found in bike CSVs or the
  generator; 7821 had 19 live bike links and 7866 one at review.
- **Applied and validated, 2026-11-18:** after approval added 11551/11552 RD-SR10-GT/SS; 11553 FD-4200; 11554–11559 SL-SR10, SR11, SR16, SR20, SR30 and SR40; 11560/11561 SL-LV00/LV10; 11562/11563 HB-LV00 front/rear; 11564 CW-LV00; 11565 FW-LV00. All use source 427, SunTour brand 56 and the appropriate categories, with 1989/1989 as the attested catalogue year, not proven production limits. Updated 4713 preserves 1987–89 and the measured 485g, attributes the 22T/26T claims, and adds 8T/3-speed and 473g from No.89. Updated 7866 adds the four printed freewheel ranges and weights. TZ-6000 7821 remains unchanged because catalogue weights and Ultra/regular wording conflict. No merges, retitles, bike writes or existing date changes. SR30 retains the conflicting five-speed model label and six-speed feature text. Earlier RD-SR21 configurations remain distinct.

  Before 4713 had source 1 and description: “Love rear derailleur, version 2: steel, AccuShift positive click, single sprung pivot (Allvit-derived) for basic city and children's bikes, bolt-on, short cage, 26T max; outer plate SUNTOUR LOVE; 485 g avg. VeloBase model RD-LV00.” Before 7866 had source 427 and description: “SunTour FW-AL00-R6, Alpha freewheel (6-speed), Japan, c. 1987 AccuShift leaflet: alpha 6-speed regular freewheel for AccuShift, alpha-5000 road and ATB groups, TZ-6000 Z chain”. Restore these values if reverting the description updates; check bike references and generator overrides before removing any added rows.

  Readback verified the 15 inserts and two updates, categories and source references; rerun affected zero rows. Duplicate reports found no merge or near candidates. A live search found no bike specs naming the new models; no links were added. Actual generator/live comparison across 98 loaded catalogues and 21,382 specs exactly matched the pre-load baseline: the existing 15 lost matches concern Huret Rival 4401, outside this task. SQL and comparison scratch files removed after validation.
- **Left / open:** 3630 unnumbered XCD freehub vs FH-XD10 (new 1989) / FH-XD11
  (1990); 6376
  CL-XD10 (1988 JP code) kept apart from 11417; 1989 Brava "SunTour GPX" front and
  "GPX AccuShift" shifters still unlinked (SSB / SSH, B / C rows, text does not
  choose); p.34's RD-2000-GX is the 1988 Alpha 2000 code (see the 1988 English entry
  above, now in 4706's title); BH-1600 / BH-1800
  7993 vs 3617 overlap untouched. Doubtful small-print stock codes were not used
  in any description.
- **VeloBase stub rewrite (applied 2026-11-16, user approved).** 22 rows whose
  description was only "<title>, Japan[, N grams]" were rewritten from this edition
  (pdf pages; printed = pdf - 1) and set to source_ref 427 (old source_ref 1, or 86
  for 1038 / 1983 / 2633 / 1426, 199 for 3631 / 4021). Edge p.17: 455 BL-ED45, 1038
  BA-ED45-S, 1983 CW-ED45, 2633 FD-ED45-SSH. Blaze p.18: 453 BL-BE34, 1035 BA-BE34-S,
  1981 CW-BE34. Cyclone 7000 p.20: 1420 SP-6100 (351g; VeloBase 346g), 6281. XC 9000
  pp.24-27: 467 BL-XC00, 1054 CT-XC00, 1055 CT-XC10 (SE, rear only), 1996 CW-XC00,
  3624, 4016 PL-XC10, 4781 RD-XC10-GXB, 4782 RD-XC10-SSB, 6309, 6695 MS-1400, 1426
  SP-6000 (345g; VeloBase 352g; printed on the XC 9000 page). XCD 6000 pp.28-29: 4021
  PL-XD00, 3631.
  - Retitled (old titles): 3624 "FH-XC10-R6, XC 9000" -> FH-XC10-U7 / FH-XC10-R6, XC
    9000 (freehub); 6309 "SL-XC00-R7U, XC 9000" -> SL-XC00-R7U / -R6R / -L, XC 9000
    thumb shifters; 3631 "HB-XD00, XCD 6000 (freewheel)" -> HB-XD00-F / HB-XD00-R;
    6281 "SL-CL20, Cyclone 7000 (White)" -> SL-CL20-BS / SL-CL20-CS, Cyclone 7000
    (White). search_text on 3624 / 6309 dropped the speed suffix (SunTour FH-XC10 /
    SL-XC00 XC 9000).
  - Years: 6695 year_to 1988 -> 1989 (still listed). 467, 4781, 6281 keep year_from
    1988 (1988 English catalogue lists BL-XC00, RD-XC10-GX, SL-CL20 as new).
  - Conflicts kept: 1054 CT-XC00 VeloBase 570g vs catalogue 230 g/pr (570g is
    probably the roller-cam BA-XC00, 552 g/pr); 6281 catalogue shows grey finish,
    VeloBase specimen is white, "(White)" kept in the title. 1423 CH-AP02 is not in
    this edition (Sprint chain here is SP-6200).
  - Review flag, not changed: 1989 Bianchi Tangent Brakes "SunTour XC-9010" (spec
    18675) links 1055 CT-XC10, which this edition calls rear only.
  - Validation: 22 rows affected, rerun 0; all 93 bike CSVs regenerated with
    identical output before/after; quality-report has no findings on these ids.

## SunTour Bicycle Equipment Catalog 1990, English — printed September 1989 (2026-11-13)

- Full catalogue reconciled and loaded: `data_source` **385**, label `SunTour Bicycle Equipment Catalog 1990 (printed 09.1989)`. Source: https://www.disraeligears.co.uk/site/suntour_bicycle_equipment_catalog_1990.html. Front cover says 1990; rear cover says `Printed in JAPAN Sep./'89`. Maeda Japan and SunTour USA, English worldwide edition; market country unknown (`NULL`), not inferred from print location.
- Read all 32 scans: front, pp.1–30, rear. Features/photo pages 1–9,11,19–21,23,25; specifications p.10,12–18,22,24,26–30; rear component system chart repeats the range. Excluded clothing, tools, cables, grips, binders, skewers, battery housing and lock rings. BEAST selector BT-SA00 specifications are retained inside transmission row 1978, without inventing a front-derailleur category assignment.
- **122 added** (11010–11131), **68 existing updated**, including **27 date ranges** and **20 retitles**. No deletes, no merges, no bike links changed. SunTour rows 714 -> 836; all 344 pre-existing linked bike specs retained. Model year is 1990; do not move every part to 1989 just from printing date. No year_from moved later; no absence-based end-year caps.
- Range fills the gap between the held 1988 and 1992 sources: XC-Pro, XC-Comp, XCD, newly designed X-1, Chroma, XCE/XCM/XCT, FT and AC2000/AC1000; road Superbe Pro, Sprint, GPX, Radius, Edge, Blaze, VX and Track. Many lower-tier entries are only model/code listings, with no numerical specifications; none were invented.
- SQL and complete listing/readback: `/private/tmp/suntour-1990/suntour-1990.sql`, `catalogue-listing.tsv`, `reconciliation.txt`, `db-before.tsv`, `db-after.tsv`, `final-plan.json`. Exact readback checked every planned field, all untouched SunTour rows, and all existing bike links. Second SQL run affected **zero** source/component rows.

### New rows

| ID | Category | Title |
|---|---|---|
| 11010 | Shifters | SunTour BT-SB00, BEAST shift control switch |
| 11011 | Bottom Brackets | SunTour BB-XC00-E, XC-Comp / XC-Pro normal type |
| 11012 | Shifters | SunTour SL-XP00-R6R / SL-XP00-L, XC-Pro thumb shifters (6-speed) |
| 11013 | Brake Levers | SunTour BL-XP00, XC-Pro normal lever |
| 11014 | Cranksets | SunTour CW-XP10, XC-Pro full-size triple (1990) |
| 11015 | Hubs | SunTour HB-XP00-F, XC-Pro front hub |
| 11016 | Hubs | SunTour FH-XP00-7U, XC-Pro / XC-Comp 7-speed freehub |
| 11017 | Hubs | SunTour FH-XP00-6R, XC-Pro / XC-Comp 6-speed freehub |
| 11018 | Pedals | SunTour PL-XP00, XC-Pro pedals |
| 11019 | Freewheels | SunTour FW-AL10-S7U, Alpha AccuShift Plus 7-speed freewheel |
| 11020 | Headsets | SunTour HS-XP00-E / HS-XP00-O, XC-Pro headset |
| 11021 | Front Derailleurs | SunTour FD-XC10-GXH, XC-Comp |
| 11022 | Shifters | SunTour SL-XC10-R7U / SL-XC10-R6R / SL-XC10-L, XC-Comp thumb shifters |
| 11023 | Cranksets | SunTour CW-XC10, XC-Comp |
| 11024 | Hubs | SunTour HB-XC01-F, XC-Comp front hub |
| 11025 | Hubs | SunTour HB-XC01-R, XC-Comp rear hub |
| 11026 | Rear Derailleurs | SunTour RD-XD10-GTB, XCD (GT) |
| 11027 | Shifters | SunTour SL-XD10-R7U / SL-XD10-R6R / SL-XD10-L, XCD thumb shifters |
| 11028 | Brakes | SunTour CT-XD20, XCD self-energizing cantilever |
| 11029 | Brakes | SunTour CT-XD11, XCD cantilever |
| 11030 | Brake Levers | SunTour BL-XD10 / BL-XD10-S, XCD |
| 11031 | Cranksets | SunTour CW-XD10, XCD |
| 11032 | Bottom Brackets | SunTour BB-XD10-E, XCD |
| 11033 | Pedals | SunTour PL-XD10, XCD |
| 11034 | Hubs | SunTour FH-XD00-6R, XCD 6-speed freehub |
| 11035 | Cassettes | SunTour CS-AP00-K6R, AccuShift Plus 6-speed |
| 11036 | Hubs | SunTour HB-XD01-FQ, XCD front hub (quick release) |
| 11037 | Hubs | SunTour HB-XD01-RQ, XCD rear hub (quick release) |
| 11038 | Hubs | SunTour HB-XD11-FS, XCD front hub (solid axle) |
| 11039 | Hubs | SunTour HB-XD11-RS, XCD rear hub (solid axle) |
| 11040 | Freewheels | SunTour FW-AL10-K6R, AccuShift Plus 6-speed |
| 11041 | Shifters | SunTour SL-X100-R7U / SL-X100-R6R / SL-X100-L, X-1 thumb shifters |
| 11042 | Brakes | SunTour CT-X100, X-1 cantilever |
| 11043 | Brake Levers | SunTour BL-X100-S, X-1 short |
| 11044 | Cranksets | SunTour CW-X100, X-1 |
| 11045 | Bottom Brackets | SunTour BB-X100-E, X-1 / XCE / XCT |
| 11046 | Pedals | SunTour PL-X100, X-1 |
| 11047 | Hubs | SunTour HB-AT00-FQ, ATB front hub (quick release) |
| 11048 | Hubs | SunTour HB-AT00-RQ, ATB rear hub (quick release) |
| 11049 | Hubs | SunTour HB-AT00-FS, ATB front hub (solid axle) |
| 11050 | Hubs | SunTour HB-AT00-RS, ATB rear hub (solid axle) |
| 11051 | Hubs | SunTour FH-AT00-7U, ATB 7-speed freehub |
| 11052 | Hubs | SunTour FH-AT00-6R, Radius / Edge / X-1 6-speed freehub |
| 11053 | Brakes | SunTour CT-CR00, X-1 Chroma cantilever |
| 11054 | Brake Levers | SunTour BL-CR00 / BL-CR00-S, X-1 Chroma |
| 11055 | Cranksets | SunTour CW-CR00, X-1 Chroma |
| 11056 | Rear Derailleurs | SunTour RD-XE00-GXB, XCE |
| 11057 | Front Derailleurs | SunTour FD-XE00-GXH, XCE |
| 11058 | Shifters | SunTour SL-XE00-R7U / SL-XE00-R6R / SL-XE00-L, XCE thumb shifters |
| 11059 | Brakes | SunTour CT-XE00, XCE cantilever |
| 11060 | Brakes | SunTour BA-XE00, XCE brake caliper |
| 11061 | Brake Levers | SunTour BL-XE00-S / BL-XE00, XCE |
| 11062 | Pedals | SunTour PL-XE00, XCE |
| 11063 | Shifters | SunTour SL-XM00-R7U / SL-XM00-R6R / SL-XM00-L, XCM thumb shifters |
| 11064 | Brakes | SunTour CT-XM00, XCM cantilever |
| 11065 | Brake Levers | SunTour BL-XM00, XCM |
| 11066 | Cranksets | SunTour CW-XM00, XCM |
| 11067 | Bottom Brackets | SunTour BB-XM00, XCM |
| 11068 | Pedals | SunTour PL-XM00, XCM |
| 11069 | Chains | SunTour CH-AP50, AccuShift Plus |
| 11070 | Rear Derailleurs | SunTour RD-XT00-GX / RD-XT00-GXB, XCT |
| 11071 | Rear Derailleurs | SunTour RD-XT10-GX / RD-XT10-GXB, XCT |
| 11072 | Front Derailleurs | SunTour FD-XT00-GXH, XCT |
| 11073 | Shifters | SunTour SL-XT00-R7U / SL-XT00-R6R / SL-XT00-L, XCT thumb shifters |
| 11074 | Brakes | SunTour CT-XT00, XCT cantilever |
| 11075 | Brake Levers | SunTour BL-XT00, XCT |
| 11076 | Cranksets | SunTour CW-XT00, XCT |
| 11077 | Pedals | SunTour PL-XT00, XCT |
| 11078 | Rear Derailleurs | SunTour RD-A200-GX / RD-A200-GXB, AC2000 |
| 11079 | Front Derailleurs | SunTour FD-A200-GXH, AC2000 |
| 11080 | Shifters | SunTour SL-A200-CH6R / SL-A200-CHL, AC2000 thumb shifters |
| 11081 | Shifters | SunTour SL-2001-CHR / SL-2001-CHL, AC2000 / AC1000 thumb shifters |
| 11082 | Rear Derailleurs | SunTour RD-A100-GX / RD-A100-GXB, AC1000 |
| 11083 | Front Derailleurs | SunTour FD-AT00-GXH, AC1000 |
| 11084 | Shifters | SunTour SL-AT10-CHR / SL-AT10-CHL, AC1000 thumb shifters |
| 11085 | Rear Derailleurs | SunTour RD-FT50-SSB, FT |
| 11086 | Front Derailleurs | SunTour FD-FT50-SSH, FT |
| 11087 | Front Derailleurs | SunTour FD-VX00-SSH, VX / FT |
| 11088 | Shifters | SunTour SL-FT50-R7U / SL-FT50-R6R, FT handlebar shifters |
| 11089 | Shifters | SunTour SL-FT60-B7U / SL-FT60-C7U / SL-FT60-B6R / SL-FT60-C6R, FT down-tube shifters |
| 11090 | Brakes | SunTour BA-FT50, FT brake caliper |
| 11091 | Brake Levers | SunTour BL-FT50, FT |
| 11092 | Cranksets | SunTour CW-FT50-AL / CW-FT50-FE, FT single |
| 11093 | Cranksets | SunTour CW-FT51-AL / CW-FT51-FE, FT double |
| 11094 | Bottom Brackets | SunTour BB-FT50-E, FT |
| 11095 | Brakes | SunTour DB-FT50, FT hub brake |
| 11096 | Freewheels | SunTour FW-WT10-S6R, Winner Pro (6-speed) |
| 11097 | Brake Levers | SunTour BL-SP10, Sprint |
| 11098 | Shifters | SunTour SL-GP10-B / SL-GP10-C, GPX |
| 11099 | Cranksets | SunTour CW-GP10, GPX |
| 11100 | Bottom Brackets | SunTour BB-GP10-E / BB-GP10-F / BB-GP10-I, GPX |
| 11101 | Hubs | SunTour FH-GP00-7U, GPX (7-speed freehub) |
| 11102 | Hubs | SunTour FH-GP00-6R, GPX (6-speed freehub) |
| 11103 | Brakes | SunTour BA-RA00-SF / BA-RA00-SR, Radius |
| 11104 | Cranksets | SunTour CW-RA00, Radius |
| 11105 | Bottom Brackets | SunTour BB-RA00-E, Radius |
| 11106 | Hubs | SunTour HB-RA00-F / HB-RA00-R, Radius |
| 11107 | Rear Derailleurs | SunTour RD-ED00-SSB, Edge |
| 11108 | Front Derailleurs | SunTour FD-ED00-SSH, Edge |
| 11109 | Cranksets | SunTour CW-ED00, Edge |
| 11110 | Pedals | SunTour PL-ED00, Edge |
| 11111 | Rear Derailleurs | SunTour RD-BE00-SSB, Blaze |
| 11112 | Front Derailleurs | SunTour FD-BE00-SSH, Blaze |
| 11113 | Shifters | SunTour SL-BE00-B7U / SL-BE00-C7U / SL-BE00-B6R / SL-BE00-C6R / SL-BE00-CP7U / SL-BE00-CP6R, Blaze / FT |
| 11114 | Cranksets | SunTour CW-BE00, Blaze |
| 11115 | Bottom Brackets | SunTour BB-BE00-E, Blaze |
| 11116 | Pedals | SunTour PL-BE00, Blaze |
| 11117 | Hubs | SunTour HB-BE00-F / HB-BE00-R, Blaze |
| 11118 | Rear Derailleurs | SunTour RD-VX00-SSB, VX |
| 11119 | Rear Derailleurs | SunTour RD-VX10-SSB, VX |
| 11120 | Shifters | SunTour SL-VX00-B7U / SL-VX00-C7U / SL-VX00-B6R / SL-VX00-C6R / SL-VX00-CP7U / SL-VX00-CP6R, VX |
| 11121 | Cranksets | SunTour CW-VX00, VX |
| 11122 | Bottom Brackets | SunTour BB-VX00-E, VX |
| 11123 | Pedals | SunTour PL-VX00, VX |
| 11124 | Rear Derailleurs | SunTour RD-A200-SSB, AC2000 |
| 11125 | Front Derailleurs | SunTour FD-A200-SSH, AC2000 |
| 11126 | Shifters | SunTour SL-A200-B6R / SL-A200-C6R / SL-A200-CP6R, AC2000 |
| 11127 | Shifters | SunTour SL-1500-CP, AC2000 / AC1000 |
| 11128 | Rear Derailleurs | SunTour RD-A100-SSB, AC1000 |
| 11129 | Front Derailleurs | SunTour FD-RT10-SSH, AC1000 |
| 11130 | Shifters | SunTour SL-RT10-CP, AC1000 |
| 11131 | Shifters | SunTour LD-286-C, AC1000 |

### Existing rows changed

IDs: 1978, 8012, 4786, 4785, 2659, 7967, 6316, 1057, 1056, 469, 1418, 3628, 1222, 1219, 2248, 5936, 4783, 7949, 1053, 3134, 1060, 1224, 2233, 1419, 8814, 4776, 7960, 4777, 2655, 4793, 2665, 1421, 4769, 2651, 2650, 6262, 7784, 4012, 2234, 5934, 4759, 2644, 7848, 7849, 1043, 1987, 8819, 4007, 8818, 5932, 4745, 6268, 3607, 3132, 4753, 2640, 2639, 8040, 8041, 8042, 3617, 7993, 6388, 6311, 6284, 8026, 8027, 8028.

Date changes (old -> new):

- 8012: `year_from` 1992 -> 1990.
- 7967: `year_from` 1992 -> 1990.
- 2248: `year_to` 1980 -> 1990.
- 7949: `year_from` 1992 -> 1990.
- 1053: `year_to` 1989 -> 1990.
- 8814: `year_to` 1988 -> 1990.
- 7960: `year_from` 1992 -> 1990.
- 4777: `year_to` 1989 -> 1990.
- 1421: `year_from` 1992 -> 1990.
- 6262: `year_to` 1989 -> 1990.
- 7784: `year_to` 1989 -> 1990.
- 2234: `year_to` 1980 -> 1990.
- 7848: `year_to` 1988 -> 1990.
- 7849: `year_to` 1988 -> 1990.
- 1987: `year_to` 1989 -> 1990.
- 8819: `year_to` 1988 -> 1990.
- 4007: `year_to` 1989 -> 1990.
- 8818: `year_to` 1988 -> 1990.
- 3132: `year_to` 1989 -> 1990.
- 8040: `year_from` 1992 -> 1990.
- 8041: `year_from` 1992 -> 1990.
- 8042: `year_from` 1992 -> 1990.
- 3617: `year_to` 1985 -> 1990.
- 7993: `year_from` 1992 -> 1990.
- 8026: `year_from` 1992 -> 1990.
- 8027: `year_from` 1992 -> 1990.
- 8028: `year_from` 1992 -> 1990.

Retitles (old -> new; search_text rewritten with the same guarded update):

- 1978: `SunTour / Browning Electronic Accushift Transmission` -> `SunTour BT-CW00, BEAST electronic transmission`.
- 6316: `SunTour X-Press, XCD 6000` -> `SunTour SL-PP10-R7U / SL-PP10-R6R / SL-PP10-L, X-Press`.
- 1057: `SunTour CT-XP10, XC Pro` -> `SunTour CT-XP10, XC-Pro SE`.
- 3628: `SunTour XC Pro (Rear, Freewheel)` -> `SunTour HB-XP00-R, XC-Pro (rear freewheel hub)`.
- 2233: `SunTour Alpha (7sp)` -> `SunTour FW-AL10-K7U, AccuShift Plus 7-speed`.
- 4776: `SunTour RD-X101-GXB, X-1` -> `SunTour RD-X100-GXB / RD-X101-GXB, X-1`.
- 4777: `SunTour X-1 Chroma` -> `SunTour RD-CR00-GXB, X-1 Chroma`.
- 2655: `SunTour X-1 Chroma` -> `SunTour FD-CR00-GXH, X-1 Chroma`.
- 4793: `SunTour RD-XM02-GXB, XCM` -> `SunTour RD-XM00-GXB / RD-XM02-GXB, XCM`.
- 2665: `SunTour FD-XM02-GXH, XCM` -> `SunTour FD-XM00-GXH / FD-XM02-GXH, XCM`.
- 6262: `SunTour SL-BC00-R6R / SL-BC00-R7U / SL-BC00-L, Superbe Pro (bar-con)` -> `SunTour SL-BC00-R6R / SL-BC00-R7U / SL-BC00-L / SL-BC01-R6R / SL-BC01-L, Superbe Pro (bar-con)`.
- 4759: `SunTour RD-SP10, Sprint 9000 (index)` -> `SunTour RD-SP10-SSB, Sprint 9000 (index)`.
- 7848: `SunTour FD-SP00-B, Sprint 9000` -> `SunTour FD-SP00-B / FD-SP00-SSB, Sprint 9000 (braze-on)`.
- 8819: `SunTour BB-500, Sprint 9000` -> `SunTour BB-500-E / BB-500-F / BB-500-I, Sprint 9000`.
- 6268: `SunTour Command (6 & 7 Speed)` -> `SunTour SL-CD00-R7U / SL-CD00-R6R / SL-CD00-L, Command (6 & 7-speed)`.
- 6311: `SunTour SL-XP00-R7 / SL-XP00-L, XC-Pro (thumb)` -> `SunTour SL-XP00-R7U / SL-XP00-R7 / SL-XP00-L, XC-Pro thumb shifters (7-speed)`.
- 6284: `SunTour SL-ED00-B7 / SL-ED00-B7F / SL-ED00-C7, Edge` -> `SunTour SL-ED00-B7U / -C7U / -B6R / -C6R / -B7 / -B7F / -C7, Edge`.
- 8026: `SunTour BL-ED00-S / BL-ED00-N, Edge (Dia-Compe)` -> `SunTour BL-ED00 / BL-ED00-S / BL-ED00-N, Edge (Dia-Compe)`.
- 8027: `SunTour BL-BE00-S / BL-BE00-N, Blaze (Dia-Compe)` -> `SunTour BL-BE00 / BL-BE00-S / BL-BE00-N, Blaze (Dia-Compe)`.
- 8028: `SunTour BL-VX00-N, VX (Dia-Compe)` -> `SunTour BL-VX00 / BL-VX00-N, VX (Dia-Compe)`.

### Identity and edition decisions

- Prior 1992 reconciliation over-specified some original VeloBase identities: 4776 original model RD-X100/32T, 4793 RD-XM00 (1989–90), 2665 FD-XM00-GX (1989–90). Preserve the original source_id and represent both attested revisions explicitly in the existing row: X100/X101, XM00/XM02 rear and front; descriptions distinguish 1990 and 1992. No new duplicate rows for those early versions. Original GUIDs respectively EA3A02BB-AEC2-4613-9C7C-2862BDF56151, F341EA41-D775-4F78-B6FD-4EFFC480D4C4, F995CACC-BBB4-41E6-A751-57D2488463BA.
- CW-XP10 in p.10 is full-size 46/36/24T (26T inner also listed), 742g, not 1992 Micro Drive 42/32/20T, 94/56mm. New full-size row is distinct from existing 1999. Printed 130/74mm BCD alongside 36T middle rings in XC-Pro/XC-Comp/XCD is questionable: retained in transcription, omitted from product descriptions pending clarification. Never silently substitute 110mm.
- 6316 original VeloBase model field SL-PP10 (GUID 4889346A-5201-4DB7-AF56-66BBA945B150), now accurately numbered PP10. Distinct from 6312 SL-XP10. P.10 CL-XP00 six-speed X-Press / PP10-R7R labels resolve to p.12 PP10-R6R/R7U by identical stock numbers (33119561/33119571, left33119701); no new CL-labelled duplicate. Six-speed XP00 thumb set is separate from seven-speed6311.
- FH-AT00-GR on p.15 is FH-AT00-6R on p.16/27: stock47669914,47669904,47669916,47669906 identical. One6R record. Catalogue ATB/road weights465g/468g are retained with spacing/listing context.
- Original 2233 Alpha7 model FW-AL10-K7U, black (GUID EB3D983E-DCEA-4E09-B76E-6AADD9B896A6), updated instead of adding duplicate. Original2232 model FW-AL00-R6 AP, silver (EA2A035D-F897-4783-9043-7F3737F322D5), distinct from new AL10-K6R. New S7U is silver. P.10 S7U13–28T410g conflicts with repeated p.12 490g; use490g for ATB, keep valid road13–23T410g separately.
- HS-XP00-E/O catalogue headset is new. Original3138 indexed VeloBase model HS-XP01 Grease Guard (GUID A3358349-9145-4404-8E47-5ED4F2F872F1), not XP00; later8044 is XP02. Preserve3138 unchanged.
- RD-ED00 is distinct from generic4744, whose original model is RD-ED45-SSB (GUID5F2CD359-F582-4EC4-B63A-3220D1B86177). RD-XM00 is distinct from4795 originalRD-XM34.
- Preserve differing specifications by edition: XC-Pro/Comp rear capacities/weights, front derailleur sizes, BB weights, brake weights, SP-XC00 330/332g versus earlier283g and recorded290g; Superbe Pro front weights reversed in1989vs1990; GPX headset263g1989vs125g1990; PL-TM00 477g1990vs476g1992. Kept independent measured weights, including RD-SB00198g average, RD-SP10197g, Radius261g and CW-7500657g. Shared source citations removed from descriptions unless needed to distinguish specifications.
- Later family suffixes retained explicitly: 6311XP00R7U(1990)/R7(1992), 6284Edge6/7-speed codes versus1992B7/B7F/C7, and Edge/Blaze/VX lever base codes alongside1992S/N suffixes. This records edition families rather than asserting all versions identical.

### Unresolved (not force-matched or inserted)

Seven catalogue entries have possible existing specimen matches requiring stronger identity evidence:

- p.13 `RD-XD10-GXB`: Unnumbered later long-cage 4789 may be this model. On 2026-11-22 the [Chouchin Cycle photos](https://chouchincycle.shop-pro.jp/?pid=190702469) showed the matching logo, grey knuckles and sculpted AccuShift Plus cage seen in [4789's sole image](https://velobase.com/CompImages/RDerailleur/ED6DC1BE-BFE5-4D2A-9AFA-0D5BE6922938.jpeg). The pictured instruction sheet lists multiple models and the gallery gives no readable, unit-specific mark. Page 13 illustrates two cage lengths. Keep the existing uncertainty until a labelled unit or measured cage comparison distinguishes the variant.
- p.13 `FD-XD10-GXH`: **Resolved 2026-11-22.** The [labelled box and matching construction](#xcd-front-fd-xd10-gxh-identification--applied-and-validated-2026-11-22) identify 2662, which now carries this code and source 385.
- p.14 `FH-XD11-7U`: Existing unnumbered 3630 XCD 6000 freehub may be this or an earlier hub. [Original specimen and Axis review](#xcd-freehub-3630-specimen-and-axis-review--2026-11-18-description-correction-applied) completed 2026-11-18: no exact code recovered; need specimen code/measurements or coded fitment before changing/adding.
- p.15 `SL-PP00-R7U / SL-PP00-R6R / SL-PP00-L`: Unnumbered 6305 X-1 trigger style may be this model; inspect original reference before retitling or duplicating. **Resolved 2026-11-14 (user approved):** the VeloBase page gives group X-1, model "X-press", 1990, 7sp AccuShift Plus; the only 1990 X-1 X-Press is PP00. 6305 is retitled `SunTour SL-PP00-R7U / SL-PP00-R6R / SL-PP00-L, X-Press (X-1 / XCE / XCM / XCT)` with source 385. The 1990 Bianchi Nyala (XCT) and Osprey (X-1) X-Press shifters moved from 6312 SL-XP10 to it. Follow-up the same day: 1990 Project 7 / Grizzly (XC-Pro) moved from 6312 to 6316 SL-PP10. p.10, the XC-Pro page, lists SL-PP10 (stock 33119571, as p.12), and 6312's 1990 start is VeloBase-only.
- p.16 `SL-CR00-R7U / SL-CR00-R6R / SL-CR00-L`: Existing6306 originally X-1 thumb style, Chroma group and yellow accents, now retitled SL-X102 by 1992 pass. Original has no exact model field; hold likely duplicate.
- p.16 `CW-XE00`: Existing2002 originally unnumbered XCE crank (50-40-28T,110/74BCD), now CW-XE01 after1992 pass; original has no exact model, hold potential duplicate.
- p.27 `PL-RA00`: Review edition/code conflict before any change. Existing bare Radius row 1980-1990 has no exact code; catalogue family supports model naming, inspect if photo-only ambiguity matters. Original VeloBase source MODEL field blank, only Radius name, alloy body/cage, steel axle, platform 9/16x20. Exact RA00 identity unresolved; no new RA00 duplicate inserted.

Original model-field recovery is matching corroboration; all applied component changes are supported by the1990 catalogue or explicitly preserve the already-held1992 specifications. Indexed original-reference URLs and details are saved in `original-model-review-11-20.txt` and `review-01-10.txt` in the scratchpad. No other catalogue was newly ingested during this pass.

### Bike-link follow-through, 2026-11-14 (user approved)

The 1990 catalogue
heads both XCE (p.16) and XCT (p.17) as "'90 NEW COMPONENTS".
- 1990 Bianchi Nyala "SunTour XCT": the front, brake and crank links now go
  to the 1990 rows 11072 FD-XT00-GXH, 11074 CT-XT00 and 11076 CW-XT00. They
  previously pointed to the 1992 rows 7962 / 8038 / 8004. The rear 7018 was
  on 7952 RD-XT02 and is now unlinked: p.17 lists RD-XT00 (11070) and RD-XT10
  (11071) with no spec that tells them apart. Shifter 7019 -> 6312 SL-XP10 is
  unchanged (p.17 lists SL-PP00 X-Press for XCT, so it still needs review).
- 1989 Bianchi Forte / Volpe "SunTour XCE-4050": front 18615 / 18719 (was 2663)
  and rear 18616 / 18720 (was 4791) are now unlinked. XE01 is the 1992 code
  and XE00 is '90 new; neither is shown to be the 1989 part. Forte crank
  18618 (was 2002 CW-XE01) was unlinked later the same day on the same reasoning. CW-XE00 is still held as a
  possible duplicate of 2002, whose VeloBase specimen is unnumbered with 50-40-28
  rings; VeloBase dates the XCE group from 1989.
- Generator overrides use null / 1990-scoped ranges for these values. The
  generator diff across all 86 catalogues changed only these seven specs.
  Readback was checked, and a rerun affected 0 rows.

### Rear derailleur date audit, 2026-11-14 (user approved)

- 4712 "Mountech GTL v2": VeloBase model field RD-5500 (more rigid double pulley
  cage, standard guide pulley; specimen date code BK, c. 1985). It is a revision of
  4711 RD-5500 MounTech (GTL), kept as its own row. 1987 Raleigh Maverick 18 Pro
  "Suntour Mountech" (8874), previously linked to 4712 by the matcher's
  title-shape hit, is now unlinked with a null override for 1987. RD-4900 7785,
  4711 and 4712 all fit, the same call as the 1986 Falcon "MT Tech".
- 4770 SVX GT: VeloBase model RD-7400, outer plate "SunTour SVX", 1985. No held
  SunTour catalogue lists SVX. 1986 Raleigh Technium 460 "Suntour SVX" (8342) is
  unlinked with a null override for 1986 (no GT printed; short-cage existence
  unknown). The front 8341 -> 2653 FD-4300 SVX is unchanged.

- 2026-11-14 group ownership (user approved): the 1992 Dia-Compe-made XCE parts
  8021 BL-XE01 / 8035 CT-XE01 moved from Dia-Compe-owned group 125 to SunTour 155
  "XCE". XCM 8003 CW-XM01 / 8022 BL-XM01 / 8036 CT-XM01 / 8037 BA-XM00 moved from
  SR-owned 182 to SunTour 240 "XCM". The original groups keep their own brand's rows
  (703 Dia-Compe XCE, 1770 Sakae XCM).

- 2026-11-14 rear derailleur dedupe (user approved): deleted 4733 "SunTour Cyclone
  (Black Pivot Knuckles)" (VeloBase C0C55FDD-E9C6-48D9-8A76-312E08FC35EF; undated,
  short cage, split-T "SunTour Cyclone" plate, no links). Merged into 4735 5902 /
  RD-1700 Cyclone, whose description now notes the black-knuckle variant. Added a
  Rear Derailleurs 'suntour cyclone' 1986 null override, because without 4733 the
  1986 Raleigh Supercourse auto-matched 4734 Cyclone 3-Pully (1980).

## Rear derailleur audit fixes — 2026-11-15 (user approved; audit items 1-3)

- Wrong link corrected: spec 3693 (1974 Motobecane Mirage "SUN TOUR V.G.T.") 4695 4900 VGT (1971-73) -> 4704 4902
  V-GT Luxe (1974-76). The '74 Products catalogue shows the 4902 replacing the 385 g 4900 and the 1975 catalogue calls
  the 4902 "VGT"; the same bike prints "V.G.T. Luxe" in 1975. Bike-scoped 1974 Mirage entry added to `'sun tour vgt'`.
- 4791 RD-XE01-GXB, XCE: VeloBase `year_from` placeholder 1980 -> 1992 (1992-1992). The 1990 catalogue (source 385)
  marks XCE new for 1990 as RD-XE00 (11056); XE01 is the 1992 code. Supersedes the 1992 note's "no earlier bound".
  At that point front 2663 and crank 2002 still carried the 1980 placeholder;
  corrected subsequently in the front audit and 2026-11-17 crank review below.
- Dates from explicit model prints (fitment evidence; no 1986 SunTour catalogue held; descriptions unchanged): `year_to`
  1985 -> 1986 on 4778 RD-6300 XC (1986 Raleigh Elkhorn), 7827 RD-6700 Le Pree GT (Technium 480), 4739 RD-6000 Cyclone
  S (Miyata 710 "New Cyclone"), 4723 RD-4400 aR II GT (Miyata 100 "AR-GT"), 4725 RD-4200 aR II (Technium 440);
  `year_from` 1987 -> 1986 on 4788 RD-XS00 XC Sport 7000 (Miyata Terra Runner, Peugeot Orient Express) and 4746 Hero
  (Version 1) (four 1986 Raleigh); 4705 RD-1500 VGT `year_to` 1982 -> 1983 (1983 Raleigh Royal / Royale "VGT Large
  Capacity"). All were existing override picks.
- Validation: 1 spec + 9 rows; rerun 0. All 93 CSVs regenerated: only the Mirage mapping changed (4695 -> 4704).
  `quality-report` has no findings on the touched rows (14 date flags cleared).

## Front derailleur audit fixes — 2026-11-15 (user approved; audit items 1-4)

- 2663 FD-XE01-GXH, XCE: VeloBase `year_from` placeholder 1980 -> 1992 (1992-1992), as rear 4791; the 1990 catalogue
  introduces XCE as FD-XE00 (11057). The remaining crank 2002 placeholder
  was subsequently corrected in the 2026-11-17 review below.
- Dates from explicit model prints (fitment evidence; no 1986 SunTour catalogue held; descriptions unchanged): `year_to`
  1985 -> 1986 on 2620 FD-2500 AR (1986 Miyata 100, Raleigh Technium 440), 2629 FD-3300 Cyclone (Miyata 710 "New
  Cyclone"), 2637 FD-3400 LePree (Technium 480), 2641 FD-1400 Seven (Miyata Sport 10); `year_from` 1987 -> 1986 on 2636
  Hero (four 1986 Raleigh) and 2660 FD-XS00 XC Sport 7000 (Miyata Terra Runner, Peugeot Orient Express, Raleigh
  Elkhorn); 2609 FD-2800 AG Tech `year_from` 1984 -> 1983 (1983 Miyata Ridge Runner "AG-TECH"). These match the rear
  widenings the same day.
- 2653 FD-4300 SVX: NULL dates -> 1986-1986 from the 1986 Raleigh Technium 460 fitment only.
- Relinked (user decision): spec 1309 (1987 Bianchi Campione d'Italia "SunTour Cyclone 7000") 2631 "Cyclone 7000
  (White)" (VeloBase finish variant) -> 2630 FD-CL10-B, the catalogue row; FD override `'suntour cyclone 7000'` -> 2630.
  2631 is kept as the white-finish variant (both 107 g); this closes the 1987 leaflet note's "2631 vs 2630" left item.
- Validation: 9 rows + 1 spec; rerun 0. All 93 CSVs regenerated: only the Campione d'Italia front changed (2631 ->
  2630). `quality-report` has no findings on the touched rows.


## Alpha 3000 front identification — 2026-11-16

- Sutherland’s Handbook for Bicycle Mechanics, sixth edition (1995),
  [PDF p.217](https://paulinoposada.github.io/bike/documents/epdf.pub_sutherlands-handbook-for-bicycle-mechanics.pdf#page=217):
  FD-3000-SS is an a-3000 front, 28.6 mm clamp, 2–18T chainring difference.
  PDF p.218 distinguishes FD-3000-GT (6–22T) and FD-3000-GX (6–24T).
  This is a specification crosswalk, not proof of production boundaries.
- Retained VeloBase specimen identifiers, inspected during the Triton review:
  [2600 a-3000](https://velobase.com/Pages/ViewComponent.aspx?ID=F92717AF-D46C-4584-8C8D-55F2992DBD93),
  [2611 FD-3000-GT](https://velobase.com/Pages/ViewComponent.aspx?ID=1287C1CB-CCA4-45F4-AE1A-11C77F9AD5B1),
  [2612 FD-3000-GX](https://velobase.com/Pages/ViewComponent.aspx?ID=B9E240CA-07D7-4202-AADA-5175C3DB805B).
  These pages say `1980’s`, not precisely 1980 as imported into the DB.
  2600 has a built-in housing stop; its
  [sole specimen photo](https://velobase.com/CompImages/FDerailleur/913C48B2-5D34-4944-986B-66E5285D726E.jpeg)
  shows the a-3000 group marking but no SS code or reverse cage markings.
  2611/2612 are described as later specimens without housing stops. No
  exact SS crosswalk to 2600 is established; no new duplicate row inserted,
  no date/description/title changes made.
- 1987 Miyata Triton front spec 22519 remains NULL pending a marked SS
  specimen or manufacturer drawing. Its catalogue SS wording is valid for
  a front; the existence of RD-3000-SS 4709 does not make it a transcription
  error. Rear 22520 was approved and linked NULL -> RD-3000-GX 7865, with a
  1987 Triton override; live readback and rerun validated, all 93 CSVs compared
  with only that rear mapping changed. See the Miyata notes for application.
- Retrieval: short-form VeloBase URLs failed through web open, but search
  returned the full specimen metadata; direct download recovered 2600’s page
  and photo. Sutherland PDF screenshot requests failed; its searchable text
  provided the tables. Narrow SS-code and Triton fitment searches found no
  marked SS specimen. Reopen with a model-stamped specimen/manufacturer
  drawing rather than repeating those broad searches. Temporary files removed.

### Additional SS source checks — 2026-11-16

- Live readback still has 2600 / 2611 / 2612 at imported 1980 dates and Triton
  front 22519 NULL. This follow-up made no DB or generator changes.
- Original [Miyata 1987 catalogue](https://www.ragandbone.ca/PDFs/Miyata%20Catalogue%20PDFs/Miyata%20Catalogue%2087.pdf),
  scan p.18: inspected the Triton product photograph and a crop of its front
  derailleur. The component is visible but too small to read a model code or
  establish the housing-stop/cage details needed to identify 2600. Scan p.19
  carries the Triton description but mainly Nimbus/Victor photographs; it
  does not provide a closer Triton component view.
- Recovered SunTour's English **Through 1988** specification spreads at
  [Equus PDF 000005](https://www.equusbicycle.com/bike/suntour/catalog88/pdf/suntour88%20-%200005.pdf)
  (road Alpha) and
  [000007](https://www.equusbicycle.com/bike/suntour/catalog88/pdf/suntour88%20-%200007.pdf)
  (ATB/touring). These show the later FD-3040 family, not a numbered
  FD-3000-SS illustration. This does not prove when the earlier model ended.
- The [RadioLabWorks file labelled 1988 / No.89](https://www.radiolabworks.com/bikes/catalogs/Suntour%201988%20%2389%20Components%20Catalog.pdf)
  is Edition No.89; PDF p.3 explicitly calls it the new **1989** product line
  and describes the 1988 Tour. Cover and introduction checked; it is not a
  newly recovered 1987 catalogue. No full-range reconciliation attempted.
- [SunTour front-derailleur instructions](https://www.bikecatalogs.com/download/2652),
  visually inspected: lists XP00/XC10/XL00/X100/CR00/XE01/XM01/XT01/XU00/TP00
  fronts, not Alpha 3000. Its generic adjustment drawings cannot identify SS.
- A further [double-ring Alpha 3000 specimen](https://rebike-art.gr/stock-house-Stock-Vintage/suntour-alpha-3000-bicycle-286-mm-bottom-pull-double-ring-front-derailleur.html?limit=75)
  has one available high-resolution photograph (product 334-13); the visible
  group label gives no SS code and the listing provides no numbered model.
  It does not establish a crosswalk to the retained VeloBase specimen.
- The 1987 dealer catalogue link from Sheldon Brown still returns HTTP 500
  (velo-pages album 12478); earlier Wayback recovery, recorded under source
  185 above, lacks its front-specification page. Target a new full-resolution
  copy of that page or an SS-stamped specimen/box with cage and cable-stop
  views. Further SS-code spelling/Japanese and image searches yielded no
  such evidence. Downloaded PDFs, HTML and image crops were removed after
  recording these URLs and findings; no source rows or speculative duplicates
  were created.

- The 43-page [Bike Catalogs file labelled 1987](https://www.bikecatalogs.com/download/4372)
  opens with the existing AccuShift leaflets (source 91). PDF p. 6 charts the
  Alpha 3000 rear derailleurs and shifters. It supplies no front specification
  or replacement for the missing dealer-catalogue page.
- For Nyala spec 7018, the [1990 Bianchi photo, PDF p. 12](https://www.bikecatalogs.com/download/2797#page=12)
  shows a direct hanger and long cage. [SunTour p. 17](https://www.disraeligears.co.uk/site/00_main_images/suntour_bicycle_equipment_catalog_1990_-_page_17_main_image.jpg)
  lists both RD-XT00-GXB and RD-XT10-GXB beside the separately bracketed GX
  options. The photo and seven-speed fitment text supply no mark that
  distinguishes the two GXB models. Spec 7018 remains unlinked.

## XCE crank dating and Tangent brake-link review — 2026-11-17, applied and validated

User approved both guarded updates; applied and read back on 2026-11-17.
The generator guard is local and tested; application deployment is unchanged.
Temporary SQL was removed after readback and a zero-change rerun.
Restoration, if required: restore 2002 year_from=1980 only with its current
title/source98 guard; restore 18675 component_id=1055 only with the original
Tangent/1989/source325/Brakes/value guards, and review the generator decision.

- **2002, SunTour CW-XE01, XCE:** applied `year_from` 1980 -> 1992;
  retain `year_to` 1992 and source_ref 98. The 1992 catalogue printed p.17,
  item 12 explicitly lists CW-XE01, 48/38/28T, 170/175mm:
  https://www.disraeligears.co.uk/site/suntour_bicycle_equipment_catalog_1992_-_page_17.html.
  This records the earliest held attestation of the coded XE01, not a proven
  production start or discontinuation. 1990 printed p.16 lists CW-XE00,
  48/38/28T, 165/170/175mm instead; it does not attest XE01.
  Earlier notes leaving 1980 as a bucket are superseded for the current
  catalogue identity only; XCE 4050/4051 parts are already attested in 1989.
- The retained original VeloBase reference
  `4CBE56FE-8B0F-42EF-9F7D-79FFA5840768` was re-read, including its photo:
  https://www.velobase.com/Pages/ViewComponent.aspx?ID=4CBE56FE-8B0F-42EF-9F7D-79FFA5840768.
  Its model field is blank; it lists 50/40/28T, 170mm and 110/74mm BCD, with
  broad late-1980s/early-1990s dates. That specimen does not independently
  identify XE00 or XE01. No merge, speculative new row, title or description
  change is proposed; exact specimen identity needs a readable model marking
  or independent crosswalk. 2002 has no live bike links or generator override.
- **1989 Bianchi Tangent spec 18675**, Brakes `SunTour XC-9010`: applied
  component_id **1055 -> NULL**, keeping wording and source 325. Original
  Bianchi US table p.18, image `img-2487-2`, prints the group plus GPX aero
  levers under BRAKESET, without front/rear model codes:
  https://www.gringineer.com/blogs/default-blog/1989-bianchi-catalog.
  SunTour Edition No.89 PDF p.26 / printed p.25 explicitly distinguishes
  CT-XC10 (62699911), SE mechanism, **rear only**, from standard CT-XC00
  (62699901):
  https://www.radiolabworks.com/bikes/catalogs/Suntour%201988%20%2389%20Components%20Catalog.pdf.
  A rear-only row cannot identify this combined brake entry. Do not replace
  it with the standard row or infer a front/rear split from group membership.
  A Tangent/1989 NULL override prevents reintroducing this unsupported link.
- Pre-application validation: all **96** held CSVs / **21,176** generated
  specs compared using the live component/brand rows and old/new generator.
  Exactly one mapping changes: Tangent Brakes 1055 -> NULL. No other spec
  content/mapping changes. These are generated counts, not live DB coverage.
  Full `npm test` passes, including a regression against a unique rear-only
  candidate and unchanged independently reviewed derailleur mapping.
  Application affected exactly one component and one bike spec; readback
  confirms 2002=1992-1992/source98 with no bike links and 18675=NULL.
  SQL rerun affected zero rows. Post-application generator/live-DB comparison
  for source325: all 398 specs agree, no missing/ambiguous identities or
  gained/lost/changed mappings. No components inserted, deleted or merged.
- XCD rear **4789** remains deliberately uncoded: the held 1990 catalogue
  and its specifications have already been reviewed. Reopen with a readable
  specimen code or an independent manufacturer crosswalk; do not repeat the
  catalogue comparison as though it supplies the missing specimen identity.

## Anatomy Of A Winner — January 1976 article, applied 2026-11-17

- User requested ingestion of the recovered article. **Source 436**, `source_type=article`, label **Sean Morris, Anatomy Of A Winner, January 1976, p.27**, country NULL. [Recovered scan, Velo-Pages image 12413](https://web.archive.org/web/20250623153717id_/https://www.velo-pages.com/main.php?g2_view=core.DownloadItem&g2_itemId=12413&g2_serialNumber=4), 495×640. The sheet prints the author, January 1976 and p.27; the magazine title is not established by this sheet. This is a period technical article, not a manufacturer catalogue.
- Fully read the one recovered article page. It treats five- and six-speed Winner freewheels with alloy or steel sprockets. No manufacturer model codes are printed. Matching the early family to **2229 / 8075 / 8255 / 8256** uses the already processed 1973/1975/1976 maker catalogues, not an invented code crosswalk. No new component identities or service-part rows were needed. Keep the later New Winner and Winner Pro/System generations separate.
- Technical evidence added: adjustable bearings, interchangeable threaded/splined sprockets, and the six-speed body's wider threaded section accepting a double-threaded sprocket. The article also describes mixed steel/alloy assemblies, disassembly and spacer placement; detailed service instructions belong here rather than in component identity fields. Its maximum-tooth statements (steel to 28T, excluding 25/27T; alloy to 24T) differ from some catalogue-position ranges already stored, especially the 1976 six-speed alloy row's sixth-position 18–26T. Retained the manufacturer ranges; this general service article does not identify a replacement numbered configuration or justify overriding those specifications. Its January 1976 date attests contemporary discussion, not introduction/discontinuation boundaries.

| Row | Retained identity | Enrichment | Old source → new source | Retained dates |
| --- | --- | --- | --- | --- |
| 2229 | 1110, Winner, five-speed alloy body | Adjustable bearings and threaded/splined cog interchangeability; retained measured 334g and maker ranges | 126 → 436 | 1973–1976 |
| 8075 | 1110-S / WS-5000, Winner-S, five-speed steel cogs | Same service/construction details; retained finish, ranges and dated codes | 126 → 436 | 1975–1978 |
| 8255 | 1661 99 02, Winner, six-speed alloy cogs | Wider threaded body/double-threaded cog and adjustable bearings | 125 → 436 | 1976–1976 |
| 8256 | 1661 99 20, Winner-S, six-speed steel cogs | Same six-speed construction/bearing details | 125 → 436 | 1976–1976 |

- **Previous descriptions**, retained for provenance/restoration (titles, source IDs, search text, categories and groups were unchanged):
  - **2229:** `SunTour 1110, Winner (5-speed, alloy body), Japan. Racing boss-type, 1/2 x 3/32in, "Ultra Super Duralumin" cogs, steel 13 / 14T top; 2nd 14-16T, 3rd 15-18T, 4th & 5th 16-24T; close-ratio 13-17; No. 1651 99 02 in 1976. 334g avg (velobase).`
  - **8075:** `SunTour 1110-S / WS-5000, Winner-S (5-speed, steel cogs), Japan. Racing boss-type 5-speed, steel, silver finish, 1/2 x 3/32in, 1st 13-14T, 2nd 14-16T, 3rd 15-18T, 4th-5th 16-26T, close-ratio 13-17; new 1975; 1651 99 10 in 1976, WS-5000 from 1978.`
  - **8255:** `SunTour 1661 99 02, Winner (6-speed, alloy cogs), Japan. Racing boss-type 6-speed, 1/2 x 3/32in, "Ultra Super Duralumin" cogs, steel 13T top; 2nd 14-15T, 3rd 15-17T, 4th 16-20T, 5th 17-23T, 6th 18-26T; racing only; new for 1976.`
  - **8256:** `SunTour 1661 99 20, Winner-S (6-speed, steel cogs), Japan. Racing boss-type 6-speed with steel cogs, 1/2 x 3/32in, 13T top, 2nd 14-15T, 3rd 15-17T, 4th 16-20T, 5th 17-23T, 6th 18-26T; new for 1976.`
- **Applied/readback:** one article source inserted and four descriptions/source references updated. Description lengths **248 / 227 / 232 / 208**, all below 255; dates and titles retained exactly. Rerun inserted/updated zero rows. All four rows had zero linked bike specs before and after. No identity additions, renames or merges; retained the independently documented speed/material variants. The matcher reads component IDs/titles/categories, all unchanged by this ingestion. The full generator/live reports matched exactly apart from timestamps: 21,196 comparisons, including the same 15 pre-existing lost-link findings; this ingestion added no mapping differences. Removed the article SQL/comparison scratch files and recovered 12413 image after validation; the archived source URL above retains the evidence location.

## Remaining recovered Velo-Pages SunTour adverts and manual — applied and validated 2026-11-17

All twelve remaining images in the recovered 12410–12470 cluster were visually read and reconciled with the existing component rows. These comprise eleven adverts and one installation manual; the previously ingested Winner article 12413 is separate. The archived HTML titles establish the archive's issue-date attributions below, not independently verified publication dates. Only 12410 and 12434 print their respective show years. The original page item for each display image is image ID minus two. Image addresses use `main.php?g2_view=core.DownloadItem&g2_itemId=<image ID>&g2_serialNumber=2`; the recovery CDX inventory records exact hosts and captures. No missing-page search or unrelated SunTour backlog was included.

| Image | Archive attribution/document | Inventory and reconciliation |
| --- | --- | --- |
| 12410 | March 1975 range advert | Prints March 16–19, 1975 National Bicycle Show. Group photograph, no readable model codes or specifications identifying new rows; existing 1975 maker brochure remains the numbered source. |
| 12416 | June 1976 Cyclone advert | Racing Cyclone rear, slant mechanism and low-effort shifting. Compatible with 4735; no new specifications beyond the processed maker sources. |
| 12431 | May 1977 range advert | General component/upgrade promotion. No numbered identity or measured specification to load. |
| 12434 | February 1978 range advert | Superbe, Cyclone and Road VX rear-derailleur boxes; prints 1978 New York Coliseum show. Confirms contemporary group names; no new numbered model or basis to narrow production dates. |
| 12437 | March 1978 Road VX advert | Rear/front derailleurs, down-tube levers and freewheel pictured. Compare 4774 / 4707, 2614 and 6265; pictured freewheel is not identified by a printed code. General forged-alloy derailleur claim conflicts with the more specific die-cast/pressed-body maker evidence for VX rears. Retained maker construction descriptions rather than copying broad advertising claims. |
| 12440 | April 1978 Superbe advert | Rear/front derailleurs, levers and freewheel pictured. Compare 4760 / 2645 / 6296. Cold-forged alloy front and Delrin rear pulleys already recorded. Two-anchor-point front movement and stainless fulcrum-pin claims retained here; no unsupported identification of the uncoded freewheel. |
| 12446 | July 1978 Superbe advert | Exploded/assembled early Superbe rear; generic 0.01mm manufacturing-tolerance claim and road/track group promotion. No new model or variant beyond 4760. Do not treat a general tolerance claim as a measured specimen specification. |
| 12449 | August 1978 Cyclone advert | Two rear derailleurs for racing/touring, both with quick-release cages; matching original Cyclone racing 4735 and touring 4738. Source 437 adds the explicit quick cage to 4735; 4738 already has it. The control-lever stainless-steel wording is broader than the maker's forged-alloy levers/stainless clamp specification for 6276; retained the maker material specification. |
| 12455 | November 1978 Cyclone advert | Same substantive creative/copy as 12449. No second identity or duplicated source load. |
| 12458 | May 1979 range advert | Superbe, VX and Cyclone groups; New Winner advertised for ordinary ten-speed through fourteen-speed gearing. Existing New Winner 2236–2240 already cover the speed configurations. No printed part codes identify additional rows or dates to change. |
| 12467 | June 1980 Superbe Pro pedal advert | Road quill and track flat-plate versions, hollow Cr-Mo spindle, sealed needle bearings, interchangeable plates, 300g per pair. Reconciled with PL-4000 4009 and PL-2000 4010 using the processed maker identities and contemporary construction. Source 438 enriches those rows; no duplicate or later PL-SB00 identity inferred. |
| 12470 | Cyclone Mark II front operations manual, archive dated 1984 | Eight installation/adjustment panels: separate clamp band, cage alignment/clearance, bare cable attachment and limit adjustment. Prints Cyclone Mark-II and Made in Japan, but no publication year, model code or quantitative capacity. Family service evidence only: not enough to assign specifically to 2632 FD-2300 versus the other mounting/cable-stop variants, rename a row, or alter dates. |

### Applied changes and retained evidence

- **437**, `source_type=advertisement`, **SunTour Cyclone advertisement (archive dated August 1978)**: [12449, September 2015 capture](https://web.archive.org/web/20150929044029id_/http://www.velo-pages.com/main.php?g2_view=core.DownloadItem&g2_itemId=12449&g2_serialNumber=2). **4735** description now includes quick-release cage; old source **127 → 437**. Existing codes, dimensions, gearing, dated weights and measured 178g retained.
- **438**, `source_type=advertisement`, **SunTour Superbe Pro pedals advertisement (archive dated June 1980)**: [12467, September 2015 capture](https://web.archive.org/web/20150929045414id_/http://www.velo-pages.com/main.php?g2_view=core.DownloadItem&g2_itemId=12467&g2_serialNumber=2). **4009** source **192 → 438**, **4010** source **278 → 438**. Added road/track plate compatibility to 4009, hollow spindle/needle-bearing specification to 4010, and the advert's 300g family pair weight to both. Retained earlier 278g figures and 4009's No.60 290g figure with their distinct evidence attributions. Both source countries remain NULL; market was not independently established.
- **Previous descriptions** for restoration (identities and all date fields unchanged):
  - **4735:** `SunTour 5902 / RD-1700, Cyclone, Japan. Racing rear, forged alloy, slant pantograph, 24T capacity, 31mm stroke, top normal, 175g w/o bracket (184g 1982), 178g avg; 13-24 / 40-51 (1975), 40-53 (2811 99 01 1976; RD-1700 1978-82). Black-knuckle variant.`
  - **4009:** `SunTour PL-4000, Superbe Pro, Japan. Road pedal, X-shaped body machined from solid aluminium bar, replaceable heat-treated alloy cage plates, hollow Cr-Mo axle, sealed needle bearings, 60mm, 9/16 x 20; 278g (Bikecology 1980), 290g pair (No. 60)`
  - **4010:** `SunTour PL-2000, Superbe Pro (Track), Japan. Track pedal, forged alloy body, detachable alloy plate, sealed bearing, Cr-Mo spindle with 6mm allen hole, 60mm, 9/16 or 14 x 1.25, 278g pair; new in 1979; plate interchangeable with quill type.`
- **Validation:** two sources and three description/source updates applied; no new components, renames, merges or date changes. Readback checked exact retained titles, years, search text and linked-spec counts against the saved baseline. Description lengths 246 (4735), 248 (4009), 227 (4010). Existing linked-spec counts remain 1 / 0 / 1 respectively. Guarded rerun inserted/updated zero rows. Full generator/live comparison identical apart from timestamps: 21,196 comparisons and the same 15 pre-existing lost-link findings, with no new mapping differences. No new identity or title changes to create additional duplicate candidates; the existing racing/touring and road/track configurations remain distinct.
- All recovered SunTour images are reviewed. Removed their temporary downloads, page metadata, SQL and comparison snapshots after recording the above; other brands' recovered files remain for their pending reviews. The dated archive titles are evidence qualifications, not automatic date corrections or additional source-hunt tasks.
