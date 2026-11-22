# Maillard catalogs processed so far

## Peugeot Helicomatic 600 SH workshop board — 2026-11-22

The [Peugeot–Maillard workshop board](https://cdn.shopify.com/s/files/1/1041/1160/products/DSC_0217_326099e0-6935-45d7-8cad-a6b6bcd9c952.jpg?v=1603008687)
names the **600 SH**. It shows MH sprockets at 14–18T and MG sprockets at
15–26T, 28T and 30T, with service references 2261, 2260 and 2263 below.
The [printer detail](https://cdn.shopify.com/s/files/1/1041/1160/products/DSC_0221_ef9f56e3-40c8-4b8d-94cd-d4a3311dbc02.jpg?v=1603008687)
shows a company identifier and yields no publication year. The board
documents service options, with no bike-specific fitments or assembled
sprocket combinations. The [used six-speed 14–24T example](https://www.velosaloon.com/products/maillard-600-sh-helicomatic-6-speed-freewheel-with-14-24-teeth-from-the-1988)
has a possible `88` stamp on its large cog. A sprocket marking cannot date
the assembled freewheel or establish the original 1989 Aubisque fitment.
The [1989 Dutch Cosmic catalogue review](../../../ingest-bike-specs/references/known-catalogs/peugeot.md#cosmic-helicomatic-specification--2026-11-22)
records its conflicting gear counts separately. The evidence leaves the
later five- and six-speed 600 SH availability bounds open.

## Maillard 700 colour-merge reconciliation — 2026-11-18, applied and validated

Reviewed the existing TODO against live rows, all affected bike links, the
original VeloBase records for 3827/3830/3831/3832/3833/3991, all four gallery
photos on 3827/3833/3991, and STC p.18. The 2026-11-01 assumption that the
merged cage differences were cosmetic is not supported. **The following
component, generator and bike-link corrections were approved and applied.** This
supersedes the earlier colour-only merge assumption.

| Row | Applied reconciliation |
| --- | --- |
| 3827 | Retitled `Maillard 700` to `Maillard 700 (silver cage)`; removed the black-cage specimens from its description. Restored year_to **1989 -> 1980**, the original weak VeloBase bound: the later generic bike fitments did not identify this silver specimen. Kept year_from 1970 and source_ref 1. |
| 3830 | Restored the vacant ID and original UUID `753B5F3D-A179-49BF-BE79-7339576BC9C0` as **Maillard 700 RN**, black anodised aluminium cage. Brand 273, Pedals 14, group 263. Dates **1978–1983**, attested by the externally dated STC catalogue and coded 1983 Peugeot fitments; not manufacture endpoints. Registered STC p.18 as **source 463**, country NULL. |
| 3831 / 3832 | Keep retired: black-cap/black-cage 3831 belongs with the restored RN configuration; red-cap/silver-cage 3832 stays with the silver specimen. Dust-cap colour alone does not need a row. |
| 3833 / 3991 | Keep separate, unchanged. These are Spidel-badged specimen records. Do not use the RN identification to settle their unprinted suffixes or RA fitments. |

The RN identity is inferred from the specimen's Maillard 700 identification,
black cage and the manufacturer's explicit code/material key, rather than a
photographed RN inscription. [3830's original main photo](https://www.velobase.com/CompImages/Pedals/D3104700-DEDE-4F80-9F86-3B1C158F3C2D.jpeg)
shows a Maillard red cap; [3831's photo](https://www.velobase.com/CompImages/Pedals/4C08E81B-5B6E-4345-9D1D-75D13E189FEE.jpeg)
has a black cap. The existing Spidel specimen 3833 remains distinct by badge;
no merge into it was made.

The silver identity cannot safely be expanded to **RC**. Its
[original record](https://www.velobase.com/Pages/ViewComponent.aspx?ID=9808EBBB-1B08-4FA9-A650-F18D0970BC95)
claims aluminium cage/body and 445 g; STC's RC description cannot be assigned
from silver colour alone. Its
[fourth gallery photo](https://www.velobase.com/CompImages/Pedals/F6A3D21B-7BB4-4247-B828-A51B9E9AEE3C.jpeg)
shows silver pedals on a Maillard 700 box with an apparently handwritten **RA**.
That is a new lead, not a factory-printed material key or proof the pedals and
box originally belonged together. Preserve the listed weight with that specimen
only. 3991's four photos show dark outer cage faces and bright worn/inner faces,
despite its chrome-steel title; neither this appearance nor its listing proves
an RA/RC suffix.

Applied bike-link corrections:

- **11640 / 11651**, 1983 Peugeot PY 14 / PX 14, explicit `Maillard 700RN`:
  **3827 -> restored 3830**.
- **9615 / 10060 / 10079 / 10651 / 10711 / 11878 / 11896 / 14566 / 14582 /
  15026 / 16479 / 22610 / 24550 / 24570 / 24885**: **3827 -> NULL**.
  These are Peugeot and Motobécane 1976–1988 family-only values; `super light`,
  precision bearings and toe-clip brand/material do not establish cage material.
  Added exact NULL generator decisions and redirected the existing 1983 RN override.
- Existing explicit-dural links to 3833, the four unresolved Spidel 700/RA specs,
  CXC links, 700C and 700 SS decisions remain unchanged.

Applied descriptions (160 / 179 characters):

- 3827: `Quill racing pedal with aluminium body and silver-finish cage; black or red Maillard dust cap. Original specimen listed at 445 g; cage material not established.`
- 3830: `Quill road pedal with black anodised aluminium cage, machined aluminium body, steel axle with 7 mm internal hex, ground annular bearings, removable cap and direct toe-clip fixing.`

Read-only baseline and offline rehearsal: **107 loaded catalogues, 23,168
specs**. Exactly the listed 17 mappings change: two RN redirects and fifteen
unsupported links removed. No gained links, other changed mappings, missing
identities or ambiguities. Simulated post-application retains only the baseline's
15 unrelated Huret 4401 differences. Same-brand Maillard Pedals duplicate report
has no groups; near report has only the two previously reviewed cross-brand
pairs. No deletion or additional duplicate merge was made.

Live validation: one source inserted, one component restored, one component
rewritten and exactly 17 bike links updated. Component total **10,764 -> 10,765**.
Readback matches every approved component field and link; affected spec fields
are unchanged apart from component_id and automatic updated_at. All other live
component titles and bike mappings match the saved baseline, including the five
explicit-dural links and four Spidel NULL decisions. Full comparison again covers
107 catalogues / 23,168 specs: 23,153 unchanged, only the same 15 pre-existing
Huret 4401 differences, no gained/changed/missing/ambiguous mappings. SQL rerun
affected **zero rows**. Post-load duplicate report: no same-brand groups; one
existing reviewed cross-brand 600 pair, no new merge candidate. `npm test`
passes all 13 suites. Local `/componentdetail?id=3827` and `id=3830` return HTTP
200 with the corrected titles and source labels (Velobase / STC 463).

Restoration values: before this correction, 3827 title/search_text were both
`Maillard 700`, dates 1970–1989, source_ref 1, description
`Maillard 700, France. Quill racing pedal, 445g. Variants: black dust cap with serrations / silver cage; red cap / black cage; black cap / black cage; red cap / silver cage.`
Its UUID remains `9808EBBB-1B08-4FA9-A650-F18D0970BC95`; brand/category/group
273/14/263 unchanged. All 17 spec IDs listed above previously linked to 3827.
3830 was absent. To restore, first return those links and the old 3827 fields,
remove restored 3830 only after its references are clear, and remove source 463
only if unreferenced; reverse the generator changes from git. Both retitled and
restored rows have search_text generated from their titles: `Maillard 700` /
`Maillard 700 RN`. Applied SQL, snapshots, downloads and other task scratch files
were removed after validation; lasting evidence and restoration details are here.

## Spidel 700 RA maker material table — 2026-11-22

Found two Maillard manufacturer pages on the [DCI pedal page](https://www.dcisite.be/en/parts/Pedals/maillard-700).
The [Série Maillard 700 technical table](https://www.dcisite.be/sites/default/files/pict-all/2022/parts/pedals/maillard-700/maIllard-700-pedals-05.jpg)
explicitly identifies **RA** as a natural-finish aluminium cage, **RN** as
black-anodised aluminium, and **RC** as chrome-plated steel. It lists weights
of **340 g RA**, **340 g RN** and **420 g RC**, without an explicit basis in
the table. The series page describes a machined alloy body, ground annular
bearings, a spindle with a 7 mm internal hex, a removable cap and direct toe-clip
mounting. The [facing p. 3, Pédale 700 type Spidel](https://www.dcisite.be/sites/default/files/pict-all/2022/parts/pedals/maillard-700/maIllard-700-pedals-06.jpg)
shows the quill-pedal drawing whose callouts match the numbered feature text.
Neither image supplies an imprint year. DCI's item year does not date the
brochure. The separate [cycle-fittings catalogue](https://www.icenicam.org.uk/library/Maillard/Cycle_fittings_catalogue.pdf#page=25),
source **49**, printed p. 23, names RC and RN and omits RA. The 1978-attributed
STC page below also covers RC and RN only. The new pages settle the RA material.

The [1982 French Peugeot catalogue](https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1982.html),
printed p. 22 (image 26), explicitly lists **Spidel 700 RA** for both **PRO 10**
and **PY 10 S**, establishing 1982 availability. Live specs **11032/11053**
have that exact text and source **253**. The [1981 French Peugeot catalogue](https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1981.html),
images 5 and 7, gives a shared racing-range description of dural pedals and
prints just **Spidel 700** for those two models. Live **10671/10691**, source
**251**, match that wording. The description supplies no cage finish or suffix
to distinguish RA from RN.

Live reconciliation found no explicitly identified conventional 700 RA row.
The known black-alloy **3833** and chrome-steel **3991** differ from the maker's
RA. Rechecked all four images of [silver-cage 3827](https://www.velobase.com/Pages/ViewComponent.aspx?ID=9808EBBB-1B08-4FA9-A650-F18D0970BC95).
The pedal architecture overlaps the 700 drawing. The [box photograph](https://www.velobase.com/CompImages/Pedals/F6A3D21B-7BB4-4247-B828-A51B9E9AEE3C.jpeg)
shows printed Maillard 700 and BSA markings with apparent handwritten RA.
Its association with the other gallery specimens and the reported 445 g is
unverified. Leave 3827's identity provisional and record the maker-attested
RA separately for the exact 1982 fitments. The 340 g maker listing concerns
the coded model only. Maillard RN **3830** and later CXC **10988/10989** cover
separate variants.

The January 1979 article remains unrecovered. The Vélocyclo scans attributed
to that issue are pp. 18–21, about CMP frames. The [BnF holding](https://catalogue.bnf.fr/ark:/12148/cb34356547z)
below remains an option for researching earlier availability.

### Applied 1982 reconciliation — 2026-11-22

User approved a separate catalogue-backed **Maillard 700 RA (Spidel)**,
component **12238**, UUID `7D145B06-539C-402B-A119-97E7F73B868F`, in Maillard
brand 273, Pedals 14 and Maillard 700 group 263. Maker brochure source
**515** cites both scans and has unknown market. The component has 1982
as both recorded bounds from the dated Peugeot fitment and a maker-listed
weight of 340 g. The evidence supports availability in 1982.

Applied **11032/11053: NULL → 12238**, preserving the printed text, label and
catalogue source 253. Exact 1982 PRO 10 and PY 10 S generator rules preserve
the two links on reload. Live readback confirmed **10671/10691** remain NULL.
The catalogue source and component each inserted once, and exactly two specs
were updated. The identical SQL rerun affected zero rows. The preview across
118 loaded catalogues and 24,829 specs identified two gains, and the applied
generator/live comparison matched the baseline's 15 existing findings exactly.
The Maillard pedal duplicate report was unchanged, database quality checks
found zero structural errors, and all 14 test suites passed.

Restore by clearing these two links under their same catalogue, bike, label,
value and component guards, then remove the UUID-matched component and source
only after checking for other references. Revert the scoped generator and
link registry edits with the data reversal.

## Spidel 700 RA acquisition lead — 2026-11-19, read-only

Rechecked live 3827/3830/3833/3991 and Peugeot specs
10671/10691/11032/11053, all NULL at this review. The explicit-dural links
were assessed separately. See the later applied 1982 reconciliation above. No component,
date, source or bike-link changes are supported by this pass.

The missing January 1979 article now has a concrete holding lead:

- [Vélocyclo's CMP discussion](https://www.velocyclo.fr/forum/de-1941-a-1980/mercier-cadre-cmp-1975/paged/2/)
  identifies January 1979 as **Le Cycle no.42**, with scans of a different
  article on pp.18–21. The retrieved page does not contain the Spidel article;
  the issue number is reported by the uploader, not verified from a cover.
- The [Bicycle Culture Center foreign-language library catalogue](https://cycle-info.bpaj.or.jp/file_upload/100080/_main/100080_01.pdf),
  dated 2026-08-01, **printed p.28 / PDF p.29**, lists **BDC 704, registration
  30831, old registration 200938**, a bound item including **Le Cycle
  nos.42–45 (1979)** alongside Les Cahiers du Cycle and L'Officiel du Cycle
  nos.40–41 (1978). This confirms a catalogued holding, not the article's
  contents or a downloadable issue. The separately recorded Tonton Vélo
  reference identifies the wanted article as **“SPIDEL un an après”, pp.34–37**.
- The Center's [library information](https://cycle-info.bpaj.or.jp/library-catalog/)
  and [membership/use rules](https://cycle-info.bpaj.or.jp/assembly/) describe
  member access to back issues and paid copying; a remote copy service was not
  established. No contact, purchase or membership registration was made.

Targeted searches for the article title, January 1979 issue and 700 RA still
returned the already reviewed forum references and modern restoration/sale
descriptions, not a period RA material key. The 1979 R. J. Chicken catalogue
search hit is the existing source recorded below, not a newly recovered source.
STC's RC/RN key remains valid but cannot be transferred to RA. Recovering the
article may help; its ability to distinguish cage materials remains unproven.
The task-created forum HTML was removed after recording the holding and URLs.

**Issue-recovery follow-through, 2026-11-19:** no public article scan recovered.
Checked Internet Archive metadata by title/date (1975–1982), then by cycling
subjects and Spidel without a date restriction; the returned records did not
identify this magazine issue. Mémoire du Cycle's
[Le Cycle collection](https://cyclememory.org/fr/search-coll-list.php?collectionID=773)
lists only four issues (1964, 1966 and 1971); its separate L'Officiel collection
also does not list January 1979. Targeted title/date/number searches, image
search and indexed dealer/marketplace searches found no usable scan or verified
exact-issue sale. The Journaux-collection site could not be fetched; that is not
evidence of absent stock. The known Tonton Vélo PZ10 reference supplies a short
quotation, not the article scan.

**Additional acquisition route: BnF reproduction request.** The
[BnF magazine record](https://catalogue.bnf.fr/ark:/12148/cb34356547z),
ISSN **0184-1238**, shelfmark **4-JO-31045**, has a printed holding explicitly
labelled **1978–1979** (conservation unit 2, Littérature et art / D4,
location L 4.20-A). Its public holdings panel offers reproduction under
conditions for that unit. This verifies the bound-period holding, not issue
completeness or the article's contents. The
[quote form](https://achatsreproduction.bnf.fr/views/vel/demande_devis.jsf)
accepts article title, date and pagination; submission requires a BnF account.
No request or order was submitted and no price or delivery time was established.
Use the printed shelfmark, not the accompanying PER DVD-70 holding.

The [predecessor title record](https://catalogue.bnf.fr/ark:/12148/cb343779409)
dates L'Officiel du cycle through 1979. An older 2016 BCC catalogue transcription
assigns no.42 to L'Officiel and nos.43–45 to Le Cycle, whereas the current BCC
catalogue assigns nos.42–45 to Le Cycle. Therefore search/request under both
titles and ask for the cover or masthead to verify the issue designation.

Prepared request text (not sent):

> Bonjour, je recherche une reproduction numérique lisible de l'article
> « SPIDEL un an après », signalé aux pages 34 à 37 du numéro de janvier 1979
> de Le Cycle, numéro 42 à confirmer (titre éventuellement encore L'Officiel
> du cycle). Votre catalogue indique la cote 4-JO-31045, volume 1978–1979.
> Pourriez-vous vérifier la présence de cet article et établir un devis pour
> ces quatre pages, ainsi que la couverture ou le sommaire permettant de
> confirmer le titre, le numéro et la date ? Merci de conserver lisibles les
> légendes et références des composants, notamment les pédales Maillard/Spidel.

Archive metadata, catalogue HTML, JavaScript and the anonymous catalogue cookie
file created for this recovery attempt were removed after recording the routes.
The RA material decision and all DB/generator mappings remain unchanged.

## Spidel 700 STC code/material review — 2026-11-18, read-only

Dating correction 2026-11-22: the catalogue's [printed p.27](https://forum.tontonvelo.com/download/file.php?id=303763) explicitly says ÉDITION 1978. The earlier external-attribution qualification below is historical; source 463's label/citation was corrected in the full STC reconciliation.

Recovered the [STC catalogue attributed to 1978](https://forum.tontonvelo.com/viewtopic.php?t=39556),
28 scans, including the separately supplied p.26. The occasionally cited topic
39533 is a broken/wrong reference; use 39556. The cover has no printed year;
internal references to 1978 models support the uploader's dating, without
establishing a publication date. Reviewed the pedal page at full resolution;
this was a focused evidence check, not a full STC ingestion.

**Printed p.18, [original scan](https://forum.tontonvelo.com/download/file.php?id=303772):**
Maillard 700 **RC = chrome-plated steel cage**, **RN = black anodised aluminium
cage**. Both have a machined aluminium-alloy body, treated steel spindle with
7 mm internal hex, ground annular bearings, removable cap and direct toe-clip
attachment. Printed weights: RC **225 g**, RN **175 g**; the page does not
explicitly say per pedal or pair, so do not replace existing pair weights with
these numbers without clarifying the basis. The page bears the Spidel logo.
It does **not** list RA, explain an RA/RN equivalence or identify a Peugeot
fitment. This is a direct RC/RN material key for the quill 700, not a key for
the later aerodynamic CXC family.

This advances the earlier group-board review but does not resolve RA. Live
3833 (black alloy) and 3991 (chrome steel) still have their original titles,
descriptions, source_ref 1 and 1970–1980 dates. The four Peugeot specs in the
table below were NULL at this review. Existing 3833 links include 1977 Maillard 700 explicitly
described as dural (9721), in addition to the four 1979/1980 dural links already
recorded below. No exact-variant date extension follows from a generic 700 name.

The new source prompted the review and correction above of the
**2026-11-01 colour-only merge**. At the start of this hunt, **3827** combined
silver/black cages and several dust-cap colours under one **445 g** description.
Its black-cage predecessors were 3830 (red cap,
UUID `753B5F3D-A179-49BF-BE79-7339576BC9C0`) and 3831 (black cap,
UUID `4DA6D166-8568-4C05-99E7-819B48D8A405`). Their original VeloBase pages
and main photos were recovered: 3830 has no material field; 3831 lists
aluminium alloy in a combined body/cage field. Photos show black quill cages,
but no photographed RN code. The period source proves the material distinction
was real; it does not by itself assign every merged specimen. Those specimens
and affected RN/generic links were reconciled in the applied section above.
The earlier analogy to Atom 450RN/600RN is superseded by this direct 700 evidence;
do not treat cage material as merely a colour variant.

Other new leads checked:

- [Motobécane 1982 general spares tariff](https://motobecane.s3.eu-west-1.amazonaws.com/document/telechargement/tg1982.pdf),
  printed p.191 (PDF p.193): retailer item **95946**, pair of Maillard 700
  pedals, without suffix or cage material. Printed p.201 (PDF p.203) lists
  **97195, série Spidel**, without a component breakdown. Neither supplies an RA
  crosswalk. Do not use price to choose a cage.
- A [forum reference](https://forum.tontonvelo.com/viewtopic.php?start=20&t=25518)
  identifies **Le Cycle, January 1979, pp.34–37, “SPIDEL un an après”**.
  The original article scan was not recovered; this is a specific acquisition
  lead, not inspected primary evidence or a proven material key.
- The [2023 PY10CP restoration account](https://peugeotpy10cpprestige.blogspot.com/2023/07/1978-peugeot-py10cp-prestige.html)
  names 700 RA but supplies no period cage-material/code key. Reposts and sale
  descriptions repeating that specification are not independent confirmation.

This initial sourcing pass made no DB, data_source, CSV, generator or bike-link
changes; the subsequent approved correction is recorded above. Evidence and
remaining actions recorded here and in TODO; task-created downloads/renders removed.

## Spidel 700 RA group-box review — 2026-11-17, read-only

Checked both original attachments from [Tonton Vélo topic 10923](https://forum.tontonvelo.com/viewtopic.php?t=10923):

- [Attachment 71574](https://forum.tontonvelo.com/download/file.php?id=71574)
  is a colour group-board illustration, explicitly captioned **pédales Spidel
  700 RA**. The pictured pedal is a conventional quill design with a bright
  cage and cylindrical body. The page has no visible date, issue number or
  publisher attribution. It confirms the model designation, but gives no cage
  material, weight, thread or RA/RN/RC key. Do not derive material from its colour.
- [Attachment 74807](https://forum.tontonvelo.com/download/file.php?id=74807)
  is printed **p.35**, **Un mariage réussi**. The uploader identifies it as
  **Le Cycle no.119, early 1986**; neither issue number nor date is visible
  in this single-page scan. It discusses Sedac's distribution of Maillard,
  Simplex, Stronglight and Mafac in Spidel groups. The small lower-left group
  is 600 (the accompanying text specifies Maillard diabolo pedals and a
  Stronglight B10 headset); the large group is 700, with newer-looking pedals
  and black crankset. **It does not print 700 RA against those pedals.**
  The large-board pedal has a broad body and perforated cage, unlike the
  conventional quill pedal in attachment 71574. No exact CXC submodel is
  established by this image.

These are **two different illustrations**, not one dated, captioned 700 RA
group box. Supersedes the TODO's conflated wording: the reported Le Cycle
date cannot be transferred to the undated colour board or used to extend a
particular 1970–1980 specimen row to 1986.

Compared original specimen listings and main photographs for **3833**, UUID
`9D35F262-6C11-46F1-A050-D922D4769CDE`, black alloy cages, and **3991**, UUID
`4CC081F5-1574-4D7F-BAFC-EF35F0221E17`, chrome-plated steel cages. The first
has black cages with elongated openings; the second has more scalloped/open
cage edges and chrome faces. Neither specimen page supplies a photographed
**700 RA** marking or a period code-to-material crosswalk. General quill-body
similarity and a bright finish on the group board cannot choose one of them.
Do not infer RA means alloy by analogy with another model, default to the
steel-cage row by colour, or map to platform **3990**, Galli **3741/3742**,
Atom **3665**, or generic Maillard **3827** just to bypass badge/variant ambiguity.

Live specs were NULL at this review:

| Spec | Bike | Year | Printed/stored pedal value |
| --- | --- | --- | --- |
| 10671 | 601 PRO 10 | 1981 | Spidel 700 |
| 10691 | 602 PY 10 S | 1981 | Spidel 700 |
| 11032 | 625 PRO 10 | 1982 | Spidel 700 RA |
| 11053 | 626 PY 10 S | 1982 | Spidel 700 RA |

The 1981/1982 local Peugeot CSVs agree with those stored values. Both candidate
rows still have legacy 1970–1980 dates and source_ref 1. Existing 1979/1980
explicit **dural** links (2560/2579/10156/10178 -> 3833) are outside this
unresolved RA identification and remain unchanged. A dated code/material
table, labelled boxed specimen, or original Peugeot detail identifying cage
construction is the next useful evidence. A bare family attestation does not
justify a new RA component or a finish-specific date extension.

No DB/source registration, CSV, matcher or link changes. The two scans, enlarged
pedal crop and candidate listing/photo downloads were removed after recording
their URLs and findings. The completed inspection was removed from TODO;
only the specific missing crosswalk remains waiting for new evidence. See the
Pedals section of the bike-link decisions for the retained NULL-link call.

## Maillard cycle fittings catalogue (Maillard_Cycle_fittings_catalogue.pdf, 34 pages, scan, no text layer)

- No printed date anywhere in the catalogue itself. Only soft internal
  clue: the Maillard 700 racing freewheel page lists its pro-team users
  (Peugeot, Mercier, Raleigh, Gitane, Lejeune, Flandria, Merckx), which
  reads mid-1970s-shaped. Initially inserted every new row with
  year_from/year_to NULL rather than guess off the sponsor list.
- Updated 2026-09-30: user found the same document hosted online
  identified as "Maillard 1978" (external identification, not a printed
  colophon in the scan — the PDF itself still has no date on any page).
  Consistent with the sponsor-list era clue above. Set year_from=year_to
  =1978 on all 29 rows that were NULL (guarded on that condition, so it
  only touched this catalogue's own inserts); data_source.label updated
  to note the year and that it's externally sourced, not printed.
- Also contains 5 pages (24-28) of LAM (H. Lamarque) brakes and brake
  levers — same Incheville, France address as Maillard, bundled as a
  sister-brand section, not a Maillard product. Pages 33-34 are not
  catalogue content at all: an unbranded technical line-drawing and a
  modern "IceniCAM Information Service" archive cover page from whoever
  scanned it; excluded.
- Checked whether this catalogue could finally identify the bare
  `Maillard` freewheel placeholder row (id 2110, no years, linked to 15
  1979 Peugeot bikes — the same "bare brand, no model" shape flagged as a
  latent bug risk in the bike-spec generator work). It can't: none of the
  bikes' tooth-count combos (`14-15-17-19-21-24` etc.) exactly match any
  combo table the catalogue prints for Atom or Normandy, and the Maillard
  700 racing freewheel explicitly supports "all combinations", so it can't
  be ruled in or out by ratio alone. Left id 2110 and its 15 links
  untouched rather than guess a redirect.
- Brakes (LAM): all three catalogue models (49-72, 59-77, 66-86mm reach)
  already exist in the DB under the exact same names — clean confirmation,
  no changes.
- Most Maillard hub lines already present (Atom, Normandy, Normandy
  Sport, Normandy Luxe Compétition x2 flange sizes, Maillard 700 x2
  flange sizes, drum brake) — no changes.
- Added (29 rows, all NULL years, source_ref -> this catalogue's
  data_source row):
  - Freewheels: Maillard Atom, Atom Luxe, Atom Inter, T.B.W. (all single-
    speed models missing entirely — DB only had 700/Normandy/Compact/
    Sprint/Helicomatic named rows, no Atom); Atom (3-speed), Atom
    (4-speed), Atom (5-speed) (split by speed to match the DB's existing
    Maillard 700 convention of one row per speed count); Normandy
    (5-speed, sealed bearings) (a real feature - chain-guard + sealed
    bearings - none of the 3 existing Normandy rows, which distinguish by
    lettering position, capture).
  - Hubs: Maillard GC4 and Atom Junior (juvenile hubs, nothing juvenile
    existed for Maillard at all); Atom Sport (small flange QR - only the
    Normandy Sport large-flange QR existed).
  - Pedals: Atom 63, Atom 2 BIS, Atom 440, Atom 600 Sport (none of the
    existing Maillard 700 / ATOM CXC rows match these by name or feature).
  - Bottom Brackets: Maillard Atom (no Maillard row existed in this
    category at all).
  - Brake Levers (LAM): 13 numbered ref variants (1R, 1C, 1 bis R, 1 bis
    C, 2R, 2C, 4R, 4C, 7R, 8R, 8C, 10C, 11C - light alloy). None of the 4
    existing generic LAM lever rows ("LAM Course", "LAM Competition", "LAM
    / Guidonnet", "LAM (drilled lever, cable adjuster)") use these ref
    codes, and none could be confidently mapped to a specific one, so all
    4 were left as-is rather than guess-merged.
- Left out of scope (no component_category): freewheel removal tools,
  Atom quick-release skewer hardware, fasteners/cones/axles/washers within
  every exploded diagram.

## Le Cycle magazine no. 58 — Maillard 700 freewheel advertisement (single page, via forum.tontonvelo.com attachment)

- One page, not a manufacturer catalogue: a Maillard ad for its three
  700-series freewheels (Course, Sprint, Compact), each with a tooth-range/
  speed-count table and (Course only) a small parts table. Dated 1980 per
  user identification, not printed on the page.
- All three models already existed from the main Maillard catalogue
  ingestion above; this page only adds date evidence, no new rows.
- Years corrected, year_from moved earlier (ad is dated earlier than what
  the DB claimed): 2113 "700 Course (5 speed)" 1984 -> 1980; 2114 "700
  Course (6 speed)" 1982 -> 1980. year_to left alone on both (later
  "still current" evidence from another source, not contradicted by an
  earlier ad).
- Years set (previously bare/undated, this ad is the only evidence so
  year_from = year_to = 1980): 2120 "Maillard Sprint"; 2112 "Maillard 700
  Compact".
- Left alone: 2111 "Compact Super" and 2124 "Compact Super (7 speed)"
  already dated 1980 - distinct SKUs from the ad's plain "700 Compact",
  not the same model despite the matching year.

## Maillard "Freewheels" catalogue — c. 1982, per filename (Maillard1982FreewheelCatalog.pdf, 4 pp, scan, no text layer)

- No printed date; "1982" is the filename's claim only. Lettered models
  A-M exactly repeat the scheme from the 1978 cycle-fittings catalogue
  above (data_source 49); N-U are new (Helicomatic 600/700 SH, 700 Course,
  700 Compact, 700 Sprint lines). Tools 406-420 out of scope (no category).
- Years: A-D, G, H (7234, 7233, 7235, 7236, 7237, 7238) year_to 1978 -> 1982,
  confirming the 1978 catalogue's single/3-speed/4-speed Atom family is
  still current. 7234 (Atom Luxe) description gained "2 or 4 pawls".
- K (7239, Atom 5-speed, dismountable): 1978 catalogue said 13-28T, this one
  says 13-24T (narrower). Kept the wider 1978 figure as primary, noted the
  1982 figure in parens rather than overwrite - may be a real narrowing of
  the range or just this edition's emphasis, not resolvable from the page.
- O (2050, 2051 "Atom 77 (6 speed, black/silver cogs)"): catalogue doesn't
  distinguish cog colour, extended both year_to -> 1982 (user decision -
  weak evidence but nothing contradicts either colour still being sold).
- P (2052 "Atom 77 Compact (6 speed)"): year_to 1980 -> 1982, description
  enriched with the narrow-chain/13-28T ratio detail, previously bare.
- S/T confirmed and enriched: 2113/2114 "700 Course (5/6 speed)" already
  covered this catalogue's range (2113's 1984 year_to already exceeds it,
  2114's 1982 matches exactly) - no year change, left as-is. 2112 "700
  Compact" and 2124 "700 Compact Super (7 speed)" year_to 1980 -> 1982,
  both descriptions enriched with the MR/MB/MS/MT sprocket-code detail.
- U: 2120 retitled "Maillard Sprint" -> "Maillard 700 Sprint" (catalogue's
  full name), year_to 1980 -> 1982, description enriched with steel/alloy
  and ratio detail.
- Added (11 rows, year_from=year_to=1982, this catalogue is the only
  evidence): E "Maillard Atom (3-speed, first sprocket 16T)" and F
  "Maillard T.B.W. (3-speed, first sprocket 16T)" - distinct from G/7237
  which is the first-sprocket-14T version; I "Maillard Normandy
  (5-speed)" and J "Maillard Normandy Sport (5-speed)" - distinct from
  7240's sealed-bearing/chain-guard Normandy variant; L "Maillard Atom 77
  (5-speed)" - only 6-speed Atom 77 rows existed; M "Maillard Special
  Tandem"; N "Maillard Normandy Sport (6-speed)"; Q split into "Maillard
  600 SH (5 speed)" and "Maillard 600 SH (6 speed compact)"; R split into
  "Maillard 700 SH (6 speed compact)" and "Maillard 700 SH (7 speed
  compact)" (mirrors the DB's existing one-row-per-speed-count convention
  for this family). Individual replacement sprockets the catalogue also
  sells separately (SHA-SHF, MA-MD/ZA-ZD, MR/MB/MS/MT) were not inserted
  as Single Sprockets rows (user decision) - their ranges are folded into
  the parent freewheel rows' descriptions instead.
- Deleted (user decision, bike_spec/COMPONENT_OVERRIDES checked clean on
  all three): 2115 "Maillard Helicomatic" and 2116 "Maillard Helicomatic
  (single cog)" - bare velobase placeholders with no part number or years,
  superseded by the new 600 SH / 700 SH rows above; 2111 "Maillard
  [multiple spaces] Compact Super" - garbled-title duplicate of 2124
  "Maillard 700 Compact Super (7 speed)", same year, no distinguishing
  detail.

## R. J. Chicken & Sons trade catalogue, Maillard section — 7 November 1979 (Cycle_fittings_from_R_J_Chicken_catalogue_1979-11-07.pdf, 13 pp, scan, no text layer)

- UK distributor's trade catalogue (pp 11-17, Maillard section) bundled
  with their own suggested trade price list, which carries a firm printed
  date ("NOVEMBER 7th, 1979") - harder evidence than the externally-guessed
  "1978" on the cycle-fittings catalogue above. Different document; not a
  reprint of it. Freewheel tools (406-408, a new chain-whip-style cog
  removing tool), Normandy Q/R skewer+cone accessory sets, and all
  axle/cone/dust-cap spare parts (p 17 and the price list's hub-spares
  block) left out of scope, same convention as the other Maillard entry.
- 7243 "Maillard Atom Sport" (quick-release small-flange hub) year_to
  1978 -> 1979, confirmed by the price list's "Atom S/F, Q/R" line.
- 3391 "Maillard Normandy (high flange, oblong holes)" enriched: the
  catalogue's "L/F Front & Rear" (460g, elongated cut-outs, single
  side/gear) and "L/F D/S Gear & Fixed" (300g) are the same shell under
  different end-threading, folded into one description rather than split
  into new rows.
- 7246 "Maillard Atom 440" year_to 1978 -> 1979, enriched with both trims
  the catalogue shows under one model number: 410g plain (p 13, boxed) and
  510g with reflectors added (p 14) - a running change, not a new part.
- 7239 "Maillard Atom (5-speed)" and 8125 "Maillard Normandy (5-speed)"
  (inserted last session off the 1982 "Freewheels" catalogue): this 1979
  document predates that one, so 8125's year_from moved back 1982 -> 1979,
  and both got the ratio combos this catalogue/its price list attest
  (14-16-18-20-22, 14-16-18-21-24, 14-17-20-23-26, 14-18-23-30-34) folded
  into their descriptions. The price list calls these "ATOM and NORMANDY"
  combinations jointly, without distinguishing plain Normandy from
  Normandy Sport (8126) - left 8126 untouched, the combos don't clearly
  belong to it specifically.
- Added (10 rows, year_from=year_to=1979, this catalogue is the only
  evidence): Hubs - "Maillard Atom (small flange, D/S Gear & Fixed)" 275g
  and "(small flange, Front & Rear)" 400g, both solid-axle (distinct from
  7243's QR version); "Maillard Normandy (small flange, de-luxe
  competition, Q/R)" 510g and "(small flange, Q/R)" standard (prose only,
  no weight given - weaker evidence); "Maillard Normandy (large flange,
  Q/R)" 600g and "Normandy de-Luxe (large flange, Q/R)" 590g competition -
  distinct from the existing "Luxe Competition" red/gold-label rows
  (3384/3388/3389), which carry unrelated weights and aren't contradicted.
  Pedals - "Maillard Atom 600RC" (chrome) and "600RN" (black cage), both
  430g quill pedals with 13mm long-thread spindle; "Maillard Atom 450RA"
  and "450RN", lower-tier quill pedals named only in the price list, not
  pictured - noted as the weakest evidence in this pass.


## Cleanup 2026-11-01 (no catalogue): Maillard 700 pedal colour variants folded

The cage-colour assumption and RN links in this historical entry are superseded
by the applied 2026-11-18 reconciliation above; dust-cap colours remain cosmetic.

- 3827 "Maillard 700 (black dust cap with serrations, silver cage)" (1970-80, 445g) retitled "Maillard 700",
  variants listed in its description, group 263 "Maillard 700", year_to 1980 -> 1989: the 1981-88 Peugeot
  catalogues print plain "Maillard 700" alongside "CX 700" / "Atom CX700 aero" (1984, 1986, 1988), so the
  quill 700 stayed in the range; 1983 "700RN" is the black-cage version (RN as Atom 450RN / 600RN).
- Deleted (velobase colour variants, no years, no links): 3830 "Maillard 700 (red dust cap, black cage)"
  753B5F3D-A179-49BF-BE79-7339576BC9C0; 3831 "Maillard 700 (black dust cap, black cage)"
  4DA6D166-8568-4C05-99E7-819B48D8A405; 3832 "Maillard 700 (red dust cap, silver cage)"
  47ADDBBA-080F-4F56-A9B5-B07F073ED399.
- Kept separate: 3833 Spidel/Maillard 700 Black Alloy Cages (the "dural" pick), 3991 Chrome Plated Steel
  Cages, 3990 (platform), 3665 Atom 700, 3741 / 3742 Galli Maillard.
- Links +14 (1976-88 Peugeot), generator overrides in Pedals; null for 1984 "700C" and 1989 "700 SS".
- Still no rows: CX 500 / 550 / 650 / 700 pedals (~80 specs, 1984-89 Peugeot), Atom 500 RA (5, 1982),
  Maillard 650 alloy.

## Maillard 700 hub refs from the cycle-fittings catalogue (source 49), 2026-11-12

- Tonton Vélo t=7509 ("MAILLARD, 1978 catalogue", Ti Claude, Dec 2011,
  31 scans Scan10004-10034) is the same M. Maillard, Incheville catalogue
  as source 49, and the likely origin of its "1978" identification.
  Pp. 16-17 (Maillard 700 light alloy racing hubs) give refs the first
  ingest left out.
- Descriptions rewritten, source_ref 1 -> 49, years and titles unchanged:
  3393 "Maillard 700, Professional (large flange)": front 2098.01; rear
  2099.01 (5-speed, 122 mm) / 2099.03 (5/6-speed, 122 mm) / 2099.04 (PRO,
  126 mm). 3394 "(low flange)": front 2291.01; rear 2292.01 / .03 / .04,
  same spacings; velobase 560 g kept. Both 28/32/36 hole, precision ground
  bearings, quick release. Old descriptions: "Maillard 700, Professional
  (large flange), France" / "... (low flange), France, 560 grams".
- Not changed: the "Professional" title wording (the catalogue calls them
  "Maillard 700"; PRO is only the 126 mm rear spacing), but a retitle would
  also need search_text; left for a later pass.


## Maillard CXC pedal brochure — 2026-11-13, user approved and loaded (source 382)

- Two original manufacturer interior scans recovered from Velo Vintage à Gogo t12976, post 12: https://www.velovintageagogo.com/t12976-pedales-maillard-cxc ; https://i.servimg.com/u/f61/20/03/68/88/cxc110.jpg and https://i.servimg.com/u/f61/20/03/68/88/cxc210.jpg . Downloaded as `/private/tmp/maillard-cxc-page1.jpg` and `maillard-cxc-page2.jpg`, both read visually. The c.1983 date is external attribution of the Velo-Pages brochure (album 30117); these recovered pages have no printed date, no weights and no thread specifications. Registered as data_source 382, undated brochure, country FR.
- All six named models have treated aluminium aerodynamic monoblock bodies. CXC 500/550 have integral aluminium cages; 500 has factory-set non-adjustable bearings and 550 adjustable bearings. CXC 600/650 have separate RA/RN/RC cages; 600 has factory-set bearings, 650 adjustable bearings. CXC 700 has a separate luxury RA/RC/RN cage and sealed precision-ground bearings. CXC 700 D has a removable RA/RC/RN cage fixed by four Pozidriv screws, with alternative cage drillings permitting height adjustment; sealed precision-ground bearings and professional racing quality. Reflector arrangements are 1/3/4/1+3 on 500/550, 1/2/4/1+3 on 600/650 and 2/4 on 700. Do not expand RA/RN/RC without a key. Christophe CXC 70 / CXC 70 mini clips and reflector accessories are out of scope.
- Found an incorrect 2026-10-26 duplicate merge: deleted row 3829's original source `B790B014-EFD2-433E-BB92-D8ABA077D5A5` explicitly gives model `ATOM CXC 650`, year 1983 and measured weight 344g. Its photo has a separate cage, matching the brochure's 650: https://www.velobase.com/Pages/ViewComponent.aspx?ID=b790b014-efd2-433e-bb92-d8aba077d5a5 ; https://www.velobase.com/CompImages/Pedals/83AEC3AE-4A30-41A7-8FE9-99E0930F7D3D.jpeg . This is distinct from survivor 3828, old title `Maillard ATOM CXC`, original source `5C3FF5DC-5A47-4011-98CA-F659EDDB0063`, whose six photos have integral cages and raised domed caps matching the brochure's 550. The 550 identification is a visual inference from the manufacturer comparison, not a photographed 550 model inscription. Existing source: https://www.velobase.com/Pages/ViewComponent.aspx?ID=5C3FF5DC-5A47-4011-98CA-F659EDDB0063 . Keep 379g measured on 550; move the incorrectly combined 344g fact back to 650. At review time, no bike specs or generator overrides referenced 3828/3829; the approved links are recorded below.
- 2026-11-15: `MAILLARD.webp`, saved by the user from retrobike thread 459549 (https://www.retrobike.co.uk/threads/maillard-spidel-700d-cxc-pedals.459549/) (1600 x 1139, sharper than the servimg copy) is the same brochure spread as page 2 (CXC 650 / 700 / 700 D with reflector drawings 1-4); captions identical to the summary above, still no date, weights or threads. Nothing new; no DB change.
- Applied SQL: retitled 3828 to `Maillard CXC 550` with search_text and manufacturer description, retain legacy year_from 1980 (a weak VeloBase bucket, not a proven launch date), extend year_to to 1989 from dated bike specs; restore vacant ID 3829 and original GUID as `Maillard CXC 650`, 1983-1988 (1983 retained from the original source; later bound from bike specs). Insert four missing models: CXC 500 (1984-1989), CXC 700 (1984-1988), CXC 600 and CXC 700 D (both undated). New-model year bounds are attestations, not proven launch/discontinuation dates. No deletes or merges proposed.
- Applied Pedals links: 70 NULL specs on 70 bikes, 69 Peugeot / 1 Falcon, 1984-1989: CXC 500 x18, 550 x39, 650 x10, 700 x3. Interpret dated bike-spec CX/CXC spellings as the brochure's model numbers, using exact values and year-scoped overrides. Keep plain Maillard 700 quill pedals, Spidel/Galli badge rows, bare Maillard text, and 1984 700C / 1989 700 SS questions unchanged.
- Offline rehearsal: all 85 CSVs, 18,283 generated specs, 6333 -> 6403 links; exactly 70 NULL-link additions. Live snapshot across 18,283 specs produces the same sole 70 changed mappings, with no existing component link changed. All descriptions <=234 characters. SQL and full mappings: `/private/tmp/maillard-cxc-review-2026-11-13/proposed.sql`, `plan.json`, `snapshot.json`, `csv-changes.json`, `live-changes.json`; transcription: `/private/tmp/maillard-cxc-listing-2026-11-13.json`. Simulation placeholders were replaced with actual IDs and all checks repeated against the final generator before linking. Actual rows: 10986 CXC 500, 3828 CXC 550, 10987 CXC 600, restored 3829 CXC 650, 10988 CXC 700 and 10989 CXC 700 D. Added 25 exact value/year-scoped overrides. Component read-back: exactly five inserted rows and one rewrite (3828). Spec read-back: exactly the approved 70 NULL links, all other fields unchanged; total linked 6363 -> 6433 and Pedals 413 -> 483 of 922 (52.4%). Components and links SQL rerun both affected zero rows. `npm test` passed. Full verification: `actual-generator-validation.json` and `load-verification.json` in the same directory.
