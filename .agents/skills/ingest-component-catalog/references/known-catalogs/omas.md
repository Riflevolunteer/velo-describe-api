# OMAS catalogs processed so far

## Finnish Tunturi / Rossin catalogue lead — 2026-11-23

The [Scribd copy titled 1985](https://www.scribd.com/document/1071009686/1985-Rossin-Catalog-Tunturi) and its [searchable Doczz transcription](https://doczz.net/doc/7066010/untitled) present the same Finnish-market equipment catalogue. Its wheel section's OCR lists Nisi rims with OMAS cartridge-bearing hubs: **600/CB** in 36/36 and 32/36 spoke configurations, **300/CBG** in 32 holes, and a separate **101/CB** hub pair. These are promising matches to undated wheel rows **11771 600CB** and **11779 300CBG** and hub rows **11721/11722 101CB** (already attested 1980–81). Slashes and local stock numbers do not by themselves establish a different component. Source images and edition imprint have not been visually verified: OCR includes layout errors, Scribd's 1985 title is a host attribution, and the catalogue refers to a 1984 event, which supplies only a lower bound if the relevant pages belong to that edition. Check the original wheel page, its printed publication year and maker-code crosswalk before registering the source or changing any dates. A catalogue appearance establishes availability, not production endpoints. No database changes were made.

**Follow-up 2026-11-23:** live readback confirms 11771 describes Nisi Corsa Stretto / 101CB and 11779 grey Countach / 101CB, both still NULL/NULL and source469; 11721/11722 retain 1980–81. The searchable Finnish listing prints wheel codes 600/CB and 300/CBG under a general Nisi-rim and OMAS-hub heading, without the specific rim names; the separate maker matrix supplies those associations, conditional on the codes matching. It also lists 101/CB as a hub pair, but does not establish steel axles or the quick-release details needed to independently distinguish 11721/11722. A [2020 Bike Forums post](https://www.bikeforums.net/classic-vintage/1196207-rossin-record-restoration-project.html) points to a University of Helsinki personal catalogue archive and calls its Tunturi files 1985–89; this is another attribution, not a verified imprint or independent source for the wheel listing. The archive directory returned HTTP 403 on 2026-11-23, and the Doczz viewer and download were inaccessible through the web reader. No original wheel-page image or printed 1985 date was obtained; no changes are supported yet. Seek an accessible original page and cover/imprint or a dated independent advertisement before assigning years.

## Bikecology steel-axle hubs — applied and validated 2026-11-20

The [1980 catalogue](https://labibleduvelodivers.blogspot.com/p/revue-1980.html),
source247, printedp35 (image30 of64 in the reversed blog sequence), specifies
sealed bearings, chrome-moly axles,100mm front/125mm rear,36 countersunk14g
spoke holes and English freewheel thread; pair$69.90, retailer codeA35-23.
The photographed pair has dark quick-release end housings and the distinctive
bent OMAS levers. The [Summer1981 p33 scan](https://ebykr.com/wp-content/uploads/2026/11/ebykr-1981-bikecology-catalog-p33-scaled.webp),
source227, again explicitly specifies steel-alloy axles, aluminium skewer ends,
sealed bearings and36-hole small-flange bodies. It offers English/Italian
thread and5/6-speed configurations:30-210-8/30-212-5 and30-211-7/30-213-3.
The clear photo shows the same black-ended quick releases.490g is the
advertised pair weight;20oz is shipping weight. Neither is an individual-hub
weight or grounds to replace the manufacturer's500g family heading.

Crosswalk to the[undated maker PDF](https://classicrendezvous.com/wp-content/uploads/2023/05/O.M.A.S.pdf),
source469: PDFp8 **101/C** has steel axles107/A and118/A but standard
silver-ended quick releases108/117; PDFp9 **101/CB** has those same steel
axles with black-ended special quick releases108/B and117/B. The stated steel
axles exclude101(alloy both),101/S(alloy front/steel rear),101/SS(alloy
front/titanium rear) and101/T(titanium both). Together, material and pictured
QR hardware support **101CB/A front and101CB/P rear**. This is an identification
inferred from specifications/photos: Bikecology does not print those maker
codes. It supersedes the unresolved Bikecology question in the earlier notes.

Applied after explicit approval: 11721 `OMAS 101CB/A, Big Sliding (front)` and
11722 `OMAS 101CB/P, Big Sliding (rear)` changed from NULL/NULL years, source469
to **1980–1981, source227**, the latest dated attestation. Titles,
descriptions, search text, brand34/category13/group41 and UUIDs are unchanged. Source469
remains the code/specification evidence. These are availability attestations,
not manufacturing endpoints. Keep silver-QR101C rows11719/11720 undated;
preserve Ti-axle legacy pair3450 and1996 configurations10778–10789. Do not
create another generic pair row. Different QRs are sold configurations, even
where the bare hub bodies/service parts are shared.

Old UUIDs for restoration:11721 `00416cbd-a308-427f-acea-8bda821119ed`;
11722 `be51cd80-09f5-4c35-b1c2-23b2f2a0f068`. Restore their years toNULL and
source_ref469 if reverting this change; other fields are untouched.
The transaction updated exactly these two hubs and added [Ideale saddle12169](ideale.md).
Field-by-field readback checked both updates and confirmed 3450/11719/11720
were unchanged. The second SQL load affected zero rows. Post-load exact merge
reports found no candidates for either brand. No OMAS-named bike specs or links
exist; no generator rule or bike link was needed. The maintained generator reads
titles/category/ID, not these dates/source refs. Actual before/after comparison
including the new saddle left all 24,061 mappings across 113 loaded catalogues
identical, including the same 15 existing generator/live-DB losses. The integrity
report found zero errors and 2,069 review findings. Temporary SQL, scripts,
baseline and downloaded scans were removed after validation; original source
URLs/pages above retain the evidence.

## Recovered catalogue reconciliation — applied 2026-11-19

**Two sources must not be conflated:** this OMAS manufacturer catalogue has
**no printed year**; the independent **February1988 La Bicicletta guide** is
dated and genuinely prints BB codes150(titanium190g)/152(steel240g). Its scan26
was re-read to check the apparent conflict:
[dated guide image](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_1988_february_-_i_componenti_da_corsa_scan_26_main_image.jpg).
Therefore retain BB98/99 and their dated-source identities; the manufacturer's
130/132 page does not justify changing those codes or merging the rows.

All26 PDF pages were read. Page positions below are **PDF positions**, not
printed numbers (none was established). The [manufacturer PDF](https://classicrendezvous.com/wp-content/uploads/2023/05/O.M.A.S.pdf)
remains the retained recovery original listed below. CR calls it early1980s;
Frameteller calls related pages1978/1980 and credits CR. No printed date was
found on cover, conditions or imprint. New rows therefore have NULL years;
existing dates remain unchanged. No1978/1988/1995 date is assigned from these
host labels or the digital file date.

The recorded [Velo-Pages album index](https://web.archive.org/web/20100213060626/http://www.velo-pages.com:80/main.php?g2_itemId=12973)
was recovered for metadata comparison:28 items, comprising front/inside-front,
labelledpp01–24, inside-back/back. It supplies no model-by-model text. The
known101/S page maps PDFp6 to albumlabelp04, but the26-page PDF and28-item album
have not been proven page-identical or a complete single1978 edition. This
finishes the coverage check with a qualified result; it does not justify
repeating exhausted thumbnail/CDX hunts. Original edition completeness remains
unestablished, while every page of the recovered PDF is inventoried.

| PDF pages | Applied reconciliation |
| --- | --- |
| 4–11 | Eight Big Sliding road hub families101,101/B,101/S,101/SB,101/C,101/CB,101/SS,101/T; each has printed complete front/A and rear/P ordering codes. Added16 position/configuration rows. |
| 12–13 | Grand Prix Strada1000/A,P cup-and-cone hubs and Big Sliding Pista1100/A,P cartridge-bearing hubs; four new rows. |
| 15–17 | Enrich existing3068 as120 Big Sliding,10681 as120/S Special,10682 as120/D Diamante; preserve98g specified and3068's89g measured without spacer. Add printed thread/colour/lettering detail. |
| 18 | Enrich existing10728 as130 Big Sliding titanium190g and10724 as132 Big Sliding steel240g; nylon sleeve, bearing cups, road/track/triple and thread options. Preserve1996 axle ranges104–125mm and dates; no duplicate BB insert. |
| 21–22 | Two new complete crank/BB ensembles800(titaniumBB)/900(steelBB),170mm42/52T, and separately sold803 chainring with printed tooth options. Preserve measured bare crank1706; it is not one of the complete crank+BB packages. |
| 24–25 |56 explicitly coded wheel configurations: seven Nisi rim rows × eight101 hub families. Spoke counts24/28/32/36 remain options within each code family. Two photographed200T/24 and200T/32 configurations illustrate this matrix; only200T/24 is captioned patented Morini crossing. No separate OMAS-branded rim rows. |

**Applied after explicit approval: source469,79 new rows and five enrichments.**
Source label `OMAS Divisione Corse, Catalogo prodotti speciali (undated)`,
citation the CR PDF URL, countryNULL (publication market unverified). Retitles
rewrote search_text with the maintained helper; updates also set source_ref469
and Big Sliding group41. 3068 already had group41; the other four changed
from NULL to41. No year changes, merges, deletes or bike links.
New rows comprise20 complete hub ordering configurations,56 wheel-code families,
two crank/BB ensembles and one chainring. The separate front ordering codes
are printed independently even where service axles/bearings/QR references
repeat; they are not asserted to be different bare hub bodies.56 wheel codes
are matrix offerings, not56 separately photographed wheelsets, and no224-way
spoke-count expansion was made.

Old titles retained for matching (all five are now source469):3068 `OMAS "Big Sliding"`;10681 `OMAS 120 S Big
Sliding`;10682 `OMAS 120 D Big Sliding`;10724 `OMAS 132`;10728 `OMAS 130` (spaces
as in the baseline snapshot). All five were source357 before loading.
3068 remains1980–1996;10681/10682/10724/10728 remain1996–1996. The catalogue's
unknown year cannot extend these dates. The already-reviewed120/S versus120/D
pair is now explicitly Special versus Diamante; it remains separate.

Preserve legacy hub-pair3450 (Ti axles,393g measured) and all1996 hub/freehub
configurations10778–10789: no specimen/code bridge proves equivalence. In this
catalogue101/S has alloy-front/steel-rear axles;101/SS alloy-front/titanium-rear;
101/T titanium both. The heading weights are101445g,B450,S475,SB480,C500,CB500,
SS445,T465,GrandPrix490,Pista465. They are family headings, not individual-hub
weights. The counterintuitiveSS/T difference is visibly printed and is not
silently corrected or used to identify3450. No OMAS-named/linked bike specs
exist in that live baseline. The subsequent Bikecology identification above
supersedes the then-unresolved unnumbered-hub question.

Source exceptions: the high-resolution800 ensemble sheet prints pedal thread
9/16x22 while900 prints9/16x20. Preserve that conflict here; omit800 pedal
thread from the applied description rather than silently repair or recommend
an unsupported thread. Rims are named Nisi SLUDI,Countach,SuperCorsaTN/NT,
PistaM.20,CorsaStretto,grey-anodisedCountach andgrey-anodisedSolidal; spelling
and matrix codes were spot-checked visually. No weights/material/BCD are
invented for803. Service bearings, axles, QRs, fasteners and crank arms; brake
conversion kitspp19–20; lubricantp22; cages/mountsp23 are excluded. Cover,
conditions, section picturespp1–3/14 and back26 add no separate components.

Validation: the initial88-statement transaction inserted one source and79 components,
and updated exactly3068/10681/10682/10724/10728. Readback checked every field
against the prepared plan and all prior OMAS rows against the snapshot: only
the five approved rows changed. All new years remainNULL; all existing years,
legacy150/152 BBs, bare crank1706 and Ti hub-pair3450 are unchanged. Source469
metadata, group assignments, unique UUIDs, descriptions and generated search
text all match. Description maximum216 characters. Second SQL load: **zero
rows affected** across the source,79 insert guards and five update guards.
The category-picker follow-through added two guarded category_brand registrations
for OMAS34: Chainrings5 and Wheel(sets)24, previously absent. The actual
/brandsbycategory join now returns OMAS exactly once in each category, exposing
one chainring and56 wheel configurations. The final90-statement rerun changed
**zero rows**, including both category registrations.

Fresh generator comparison against the pre-load baseline across108 CSVs /
23,380 specs: **zero mapping changes**. There are still no OMAS-named or
OMAS-linked bike specs; no generator edits or bike links were needed. Post-load
exact report has seven pre-existing configuration pairs only: BB98steel/99Ti
and the six1996 front/rear hub pairs10778/10784 through10783/10789. These are
position/material configurations, not merge candidates. Near and parenthetical
reports both returned zero pairs. Existing reviewed120/S Special versus120/D
Diamante and130/132 versus ST variants remain separate.

### Added row map

All rows below use source469, catalogue-countryNULL and NULL year bounds.
Complete source/order codes remain distinct even where service pieces repeat.

| IDs | Catalogue offering | PDF page |
| --- | --- | --- |
| 11711 / 11712 | OMAS 101/A, Big Sliding (front) / OMAS 101/P, Big Sliding (rear) | 4 |
| 11713 / 11714 | OMAS 101B/A, Big Sliding (front) / OMAS 101B/P, Big Sliding (rear) | 5 |
| 11715 / 11716 | OMAS 101S/A, Big Sliding (front) / OMAS 101S/P, Big Sliding (rear) | 6 |
| 11717 / 11718 | OMAS 101SB/A, Big Sliding (front) / OMAS 101SB/P, Big Sliding (rear) | 7 |
| 11719 / 11720 | OMAS 101C/A, Big Sliding (front) / OMAS 101C/P, Big Sliding (rear) | 8 |
| 11721 / 11722 | OMAS 101CB/A, Big Sliding (front) / OMAS 101CB/P, Big Sliding (rear) | 9 |
| 11723 / 11724 | OMAS 101SS/A, Big Sliding (front) / OMAS 101SS/P, Big Sliding (rear) | 10 |
| 11725 / 11726 | OMAS 101T/A, Big Sliding (front) / OMAS 101T/P, Big Sliding (rear) | 11 |
| 11727 / 11728 | OMAS 1000/A, Grand Prix Strada (front) / OMAS 1000/P, Grand Prix Strada (rear) | 12 |
| 11729 / 11730 | OMAS 1100/A, Big Sliding Pista (front) / OMAS 1100/P, Big Sliding Pista (rear) | 13 |
| 11731 | OMAS 800, Big Sliding crank/BB ensemble (titanium axle) | 21 |
| 11732 | OMAS 900, Big Sliding crank/BB ensemble (steel axle) | 21 |
| 11733 | OMAS 803, road chainring | 22 |
| 11734–11741 | Wheel families 200, 200B, 200S, 200SB, 200C, 200CB, 200SS, 200T | 25 |
| 11742–11749 | Wheel families 300, 300B, 300S, 300SB, 300C, 300CB, 300SS, 300T | 25 |
| 11750–11757 | Wheel families 400, 400B, 400S, 400SB, 400C, 400CB, 400SS, 400T | 25 |
| 11758–11765 | Wheel families 500, 500B, 500S, 500SB, 500C, 500CB, 500SS, 500T | 25 |
| 11766–11773 | Wheel families 600, 600B, 600S, 600SB, 600C, 600CB, 600SS, 600T | 25 |
| 11774–11781 | Wheel families 300G, 300BG, 300SG, 300SBG, 300CG, 300CBG, 300SSG, 300TG | 25 |
| 11782–11789 | Wheel families 301, 301B, 301S, 301SB, 301C, 301CB, 301SS, 301T | 25 |

For each wheel row, the eight entries follow hub101,101/B,101/S,101/SB,101/C,
101/CB,101/SS,101/T respectively. Rim rows in that order are NisiSLUDI290/320g,
Countach,SuperCorsaTN/NT,PistaM.20,CorsaStretto,greyCountach,greySolidal. Each
family offers24/28/32/36 spokes and specified freewheel thread; A.C.I. stainless
straight-gauge15/1.8mm spokes. Only200T/24 carries the pictured Morini crossing
claim. This preserves the complete56-code matrix without multiplying each
spoke count into another identity.

Temporary SQL, inventory table, baseline/plan/verification snapshots,
transcriptions and helper scripts were removed after readback and the clean
rerun. Their lasting catalogue evidence, old/new row identities, applied IDs
and validation are recorded here. The requested recovered original PDF and
four high-resolution JPEGs under
`/private/tmp/sedis-omas-recovery-20261118/` are preserved. The earlier recovery
and legacy identity reviews below are historical; this applied section
supersedes their pending extraction/reconciliation status.

## Readable alternate catalogue scans recovered — 2026-11-18

Recovery-only review; no DB queries, source registration, component edits, date changes or ingestion. The earlier one-page Velo-Pages recovery below is no longer the only readable manufacturer evidence available. No old thumbnail/CDX recovery was repeated.

### Classic Rendezvous PDF

- [New working PDF](https://classicrendezvous.com/wp-content/uploads/2023/05/O.M.A.S.pdf), reached through the [OMAS page](https://classicrendezvous.com/country-of-origin/italy/italy-components/omas/), which labels it **early 1980s**. The obsolete `/images/Italian/Omas/O.M.A.S.pdf` URL returned 511; use the working canonical URL. A Bike Forums thread 731482 also points to the old PDF location; it is an alternate discovery route, not another scan or confirmed physical holder.
- **26 PDF pages**, 3,018,640 bytes. Embedded page images are approximately 1150–1215 by 1670–1726 pixels. All 26 pages render successfully. Visually sampled PDF pp.1–3,5–6,25–26; technical numbers and material captions are readable. No claim that every page has been transcribed. Cover title `DIVISIONE CORSE — CATALOGO PRODOTTI SPECIALI`; conditions on PDF p.2; back gives OMAS, Via Commenda 48, 40068 San Lazzaro di Savena, Bologna. No printed publication date established from the sampled cover/imprint pages. Digital creation 16 November 2000 is a scan-file date, not a publication year.
- **PDF p.6 reproduces the 101/S/475g manufacturer-page content** previously recovered as archive image 12999 (catalogue page 4 in the archived inventory). Codes 101S/A front and 101S/P rear, spare-part layout and weights match that earlier evidence. Unlike the small copy, the new scan lets us read **Art.107 front axle in light alloy** and **Art.118/A rear axle in steel**. This is more precise than assuming either a complete steel-axle or titanium-axle pair from its weight. It does not establish identity with titanium-axle legacy row 3450 or with the unnamed Bikecology hubs.
- Additional missing content is now readable: PDF p.5, 101/B, 450 g with 107/118 light-alloy axle captions; PDF p.25 is a wheel/rim configuration matrix. New pages overlap the old catalogue family, but the 26-page PDF has **not been exhaustively aligned** with the old album's 28-item/pp.1–24 inventory. Do not call it a proven complete 1978 edition. No printed page number was established on the inspected 101/S sheet; PDF p.6 and the old album's page 4 are separate reference systems.
- SHA-256 `e2f3deb784d453620872b2a820bbc47b38a387f9e323a17c15808e28abdee14f`.

### Frameteller image copies

The [Frameteller archive page](https://www.frameteller.it/author/manuel/page/6/) captions catalogue images 1978 and also mentions a 1980 catalogue, crediting Classic Rendezvous. Four original JPGs downloaded and image dimensions validated (**2000 px wide**, 2806–2808 px high):

- [Big Sliding Pista hubs, Art.1100, 465 g](https://www.frameteller.it/wordpress/wp-content/uploads/2016/04/catalogo-hubs-omas.jpg), visually read: 1100/A front, 1100/P rear, steel axle captions.
- [Big Sliding headset, Art.120, 98 g](https://www.frameteller.it/wordpress/wp-content/uploads/2016/04/catalogo-serie-sterzo-omas.jpg), visually read: 120/B and 120/N versions plus service parts; named light alloy, thread options printed.
- [Crank/BB ensembles 800/900](https://www.frameteller.it/wordpress/wp-content/uploads/2016/04/catalogo-crankset-omas.jpg), visually read: titanium versus steel BB assemblies, 170 mm cranks and 42/52 standard rings.
- [Second headset page](https://www.frameteller.it/wordpress/wp-content/uploads/2016/04/catalogo-serie-sterzo-omas2.jpg), downloaded/format-and-size checked; not transcribed in this pass.

These are readable additional pages, **not independent dating confirmation**: Frameteller credits Classic Rendezvous, and none of the inspected sheets prints 1978. Preserve the conflict between archive attributions until a dated imprint or an exact edition crosswalk establishes it. A readable source is recovered; full catalogue extraction/reconciliation is a separate next step.

### Retained recovered deliverables

`/private/tmp/sedis-omas-recovery-20261118/omas-cr.pdf` and the four `omas-*-frameteller.jpg` originals are retained as the requested recovered documents, usable for the pending edition/coverage review. Source URLs and PDF hash above make the recovery reproducible. Discarded downloaded index HTML and disposable page renders after verification. No outreach, purchase or paid acquisition.


## Big Sliding hub parts page, attributed 1978 — reviewed 2026-11-17

Recovered and visually read printed **p.4**, image **12999**, 456×640, from
Velo-Pages album 12973. [Original manufacturer page](https://web.archive.org/web/20160602080025id_/http://velo-pages.com/main.php?g2_view=core.DownloadItem&g2_itemId=12999&g2_serialNumber=2).
**1978 is the archive album attribution; this page prints no year.**

The header reads `MOZZI serie BIG SLIDING ART.101/S`, `Peso Gr.475`.
The complete hub codes are **101S/A** front and **101S/P** rear. The page shows
their bearings, dust covers, axle spacers, thrust washers, locknuts, axles and
quick releases as service parts. Front/rear bearing refs 102 /109; front/rear
quick-release refs 108 /117. These service items have no separate supported
component category and are not new hub models. Small specification lines are
not reliable enough in this recovered display copy to transcribe exhaustively.

### Identity decision

**No DB changes, new source, component rows, dates or bike links.**
Current legacy hub row **3450**, `OMAS Big Sliding (painted OMAS; Ti Axle)`,
1978–1988, source 262, describes a 393g measured pair (including engraved OMAS
variants). Its source_id is `B2B20F93-6C9F-4B63-A21C-1C7D95785152`.
The other numbered 101 AC/TC/ACB/ACR/TCB/TCR front/rear rows are 1996
steel/titanium and cassette configurations from source 357; those suffixes
are not interchangeable with this page's 101/S model and A/P position suffixes.

The original small recovered copy did **not yield readable axle-material captions**; this limit is superseded by the newly recovered PDF p.6 above. Its 475g heading cannot
alone prove that it is a steel-axle variant, identify 3450, justify relabelling
that row, or prove that a separate new identity is needed. Preserve 3450 and
the 1996 configurations. The live bike-spec search found no OMAS-named specs
to link. The unnumbered Bikecology1980 question was then unresolved; the
2026-11-20 review above supplies the steel-axle/black-QR crosswalk to101CB.

The OMAS near-duplicate report finds only the previously reviewed 10681 / 10682
headset pair, with no hub candidate. This does not establish the 101/S identity.
The recovered page was removed with the associated Stronglight task scratch
files after its approved load and validation. Source URL and inventory above
retain the evidence; full Stronglight/OMAS readback confirms all OMAS rows unchanged.
Readable alternate pages were subsequently recovered from Classic Rendezvous/Frameteller on 2026-11-18; the remaining edition/coverage verification is recorded above and in TODO.
