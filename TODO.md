# TODO

Keep actions here; use [existing notes](.agents/skills/ingest-component-catalog/references/known-catalogs.md) for evidence and [link decisions](.agents/skills/ingest-bike-specs/references/link-decisions.md) before changing mappings. Use live `/linkCoverage`, `quality-report.js` and `duplicate-report.js` instead of copied gap/count inventories. Follow [housekeeping](.agents/skills/audit-data-quality/references/todo-housekeeping.md).

## Ready to work

- Persist link status/evidence so deliberately unlinked specs stop appearing as unresolved in `/linkCoverage`.
- Compare the recovered undated Sachs ATB brochure's AR41.4T, AV62.2T and MA82.8G/9G/10G with later Rival 7000/Classic specimens, then prepare any supported additions or enrichment. [Source, initial reconciliation and retained PDF](.agents/skills/ingest-component-catalog/references/known-catalogs/huret.md#recovered-sachs-composants-atb-brochure--undated).

## Product and infrastructure

- Design multiple component evidence references, preserving `source_ref` as the last source that changed a row.
- Show catalogue country in the client where rows collide; assess splitting mixed-country Peugeot 1971–74 CSVs.
- Plan a Cinelli/De Rosa bike-image pilot: inspect the existing blob column, settle rights/cropping, then design storage/API/client delivery.
- Remove the extra DB-password encryption, coordinate SSM/plaintext application deployment, smoke-test and rotate the password.

## Bike catalogues

- Investigate remaining Motobecane 1970–90 edition gaps using the [recorded source leads](.agents/skills/ingest-bike-specs/references/known-catalogs/motobecane.md#19701990-gap-source-leads--2026-11-18).
- Decide Panasonic brand treatment, then ingest the 1985–89 US bikes from [recorded sources](.agents/skills/ingest-bike-specs/references/known-catalogs/panasonic.md).
- Load La Bicicletta’s May 1984 racing-bike buyer’s guide.
- Assess the bikalog backlog: Koga-Miyata 1980–2001, Nishiki 1987, Raleigh 1991, Colnago C35 1989.

## Waiting for distinguishing evidence

Reopen these when the specified material becomes available; existing ambiguity alone is not another search task.

- **Manual duplicate identities:** obtain comparable reach/drop and clamp/sleeve measurements or maker model codes for Belleri 2791/2792/2793, shell/flange/cone measurements or a model crosswalk for Pelissier 3457/3459, and measured reach or stamped model numbers for Weinmann 1103/1104. [Additional-photo review and exact evidence needed](.agents/skills/ingest-component-catalog/references/known-catalogs/cross-catalog-notes.md#manual-duplicate-additional-photo-review--2026-11-19).
- **Spidel pedals:** obtain January 1979 (reported no.42), pp.34–37, “SPIDEL un an après”, via BnF reproduction (4-JO-31045, volume 1978–1979) or Bicycle Culture Center holding 30831; verify the issue under Le Cycle / L'Officiel du cycle. Alternatively find a period 700 RA cage-material/code key or coded Peugeot fitment for specs 10671/10691/11032/11053. [Holdings, prepared request and evidence limits](.agents/skills/ingest-component-catalog/references/known-catalogs/maillard.md#spidel-700-ra-acquisition-lead--2026-11-19-read-only).
- **Mavic:** obtain a 1996 maker CXP30 tubular specification or measured bare-rim/inserts comparison to explain the dealer 520 g figure; obtain dated Open Pro 5099/5100 decal/finish evidence and a dated 31.8 mm specification for 870 clamp 2410. [Weight qualifiers and remaining evidence](.agents/skills/ingest-component-catalog/references/known-catalogs/mavic.md#cxp30-and-open-pro-weight-attribution--2026-11-19-applied).
- **FRM:** obtain a maker crosswalk for CU2 specimen 1570 versus 10279/10280, and Carbon-Ergal/Alu-Ergal hubs versus Feather/Pro. [Guida evidence](.agents/skills/ingest-component-catalog/references/known-catalogs/cross-catalog-notes.md#guida-96-follow-up-frm-identities--2026-11-18).
- **Regina:** obtain a dated parts-code or identified specimen crosswalk for Palo Alto's 1979–84 splined Oro 5/6-speed freewheels versus 2182/2194 and BX rows. [Maker and retailer comparison](.agents/skills/ingest-component-catalog/references/known-catalogs/regina.md#splined-oro-comparison--2026-11-18-read-only).
- **Huret/Sachs Huret:** recover 501.1 DFE or verify the listed 501.1/1 revision for 6110 enrichment; obtain exact New Success generation/Raleigh fitment, Rival 1086-00/AV62.1D fitment, Rider double, Duopar/Eco variant and Avant code evidence. [Recovery leads, dated adverts and remaining limits](.agents/skills/ingest-component-catalog/references/known-catalogs/huret.md#manufacturer-source-recovery-and-specimen-follow-up--2026-11-19-read-only).
- **SunTour:** obtain code/construction/date evidence for the remaining XCD/XCE, Superbe, Sprint, FD-3000-SS and other uncoded specimens. [Exact cases](.agents/skills/ingest-component-catalog/references/known-catalogs/suntour.md).
- **SunTour XCD freehub 3630:** obtain a specimen model code, comparable cassette-body/spacing measurements or coded XCD-6010 fitment to distinguish FH-XD10 from FH-XD11. [Evidence needed](.agents/skills/ingest-component-catalog/references/known-catalogs/suntour.md#xcd-freehub-3630-specimen-and-axis-review--2026-11-18-description-correction-applied).
- **Campagnolo:** obtain the remaining 2000/2001 code/version crosswalks and early front-derailleur date evidence. [Exact cases](.agents/skills/ingest-component-catalog/references/known-catalogs/campagnolo.md).
- **Ofmega Mistral:** obtain dated, comparable link-length/cable-stop evidence for 4356/4357 and coded embossed/printed lever specimens for 6092/6093 before revising their legacy dates. [Comparison](.agents/skills/ingest-component-catalog/references/known-catalogs/ofmega.md#mistral-specimen-comparison--2026-11-18-applied-and-validated).
- **Ritchey:** resolve Logic, Comp Road and Aero/OCR construction/version conflicts. [Evidence](.agents/skills/ingest-component-catalog/references/known-catalogs/ritchey.md).
- **EDCO:** obtain headset dimensions/code and BB axle/version evidence. [Evidence](.agents/skills/ingest-component-catalog/references/known-catalogs/edco.md).
- **Nisi 5145:** obtain a bare-rim weight measurement and model-coded specimen/packaging to establish its Sport/Super Sport identity; reopen only for that new evidence. [Specimen review](.agents/skills/ingest-component-catalog/references/known-catalogs/nisi.md#51385145-original-specimen-review--2026-11-18-applied-and-validated).
- **Bikecology:** independently identify Maxy II. Identify the 1980 Ideale 88/Titanium and OMAS sealed hubs. [Catalogue evidence](.agents/skills/ingest-component-catalog/references/known-catalogs/cross-catalog-notes.md); [OMAS distinction](.agents/skills/ingest-component-catalog/references/known-catalogs/omas.md).
- **Palo Alto rims:** obtain a labelled period profile/model crosswalk for the unnamed Super Champion and Fiamme Yellow Label clinchers. [Evidence](.agents/skills/ingest-component-catalog/references/known-catalogs/cross-catalog-notes.md#palo-alto-identity-review--applied-and-validated-2026-11-17).
- **Rim/hub fitment:** identify Battaglin 12943 and Bianchi 19546/19547 from original codes/construction. [Prior review](.agents/skills/ingest-bike-specs/references/known-catalogs/cross-catalog-notes.md#todo-link-drift-review--2026-11-17).
- **Brakes:** obtain original fitment evidence for Miyata 22585, Peugeot Alpine/Europe Express and Raleigh Chinook; identify Bianchi Universal 130/131 spec 6595. [Split-brake evidence](.agents/skills/ingest-bike-specs/references/known-catalogs/cross-catalog-notes.md#remaining-split-brake-evidence-review--2026-11-15-read-only); [Universal](.agents/skills/ingest-component-catalog/references/known-catalogs/universal.md).
- **Raleigh cranks:** identify Crested Butte 3564 and the unnamed Biopace 48/38/28 sets, including 18009/18045 and 1989 Royal, from original photos/parts codes. [Raleigh notes](.agents/skills/ingest-bike-specs/references/known-catalogs/raleigh.md).
- **Other bike fitment:** obtain codes for Seven 20424/20445, Record 20196, Alivio 20177 and Nyala 7018; identify Kalkhoff’s bare Shimano 600 and Colnago AL11 SIS; identify Gipiemme Sprint and fronts 2457/2377/2442. [Prior decisions](.agents/skills/ingest-bike-specs/references/link-decisions.md).
- **Clusters:** verify the original mechanism/model for Bianchi 18494/18682/1740; obtain dated evidence for Uniglide 1196/1200, XLR8 1194, Kheops 1212 and Stronglight Titanium 1213.
- **Tyres:** obtain period model/construction evidence for the remaining dated-fitment conflicts and Smoke/Dart Comp variants. [Panaracer](.agents/skills/ingest-component-catalog/references/known-catalogs/panaracer.md); [prior decisions](.agents/skills/ingest-bike-specs/references/link-decisions.md#tyres).

## Source acquisition

Choose named gaps from live `/linkCoverage`; consult the [source-hunt log](.agents/skills/ingest-component-catalog/references/source-hunts.md) before searching. Reopen exhausted hunts only for a new source/holder lead.

- Recover specification pages for the English Bianchi road catalogue indexed 1985; Bikalog holds only a five-page introductory/photo fragment. [Edition review](.agents/skills/ingest-bike-specs/references/known-catalogs/bianchi.md#bikalog-19851986-backlog-check--2026-11-17).
- Seek 1979–89 Peugeot/Motobécane spares lists for Maillard, Solida/Nervar and Lightrace; inspect the logged unopened tariffs/show report.
- Check Ron Kitching/Freewheel holdings at Otley and Warwick MRC for Rigida, Viscount and Brooks; retain the saddlewax Brooks lead.
- Check the remaining Nashbar editions/QBP/J&B/Colorado Cyclist leads for 1985–92 distributor evidence. [Hunt record](.agents/skills/ingest-component-catalog/references/source-hunts.md#log).

<a id="sr-sakae-next-work"></a>
<a id="yaesu-next-work"></a>

- Seek a new free Yaesu 1984–87 or SR No.19–23 scan/holder lead; paid acquisition remains deferred. Obtain Schwinn 1985’s printed CXC-T310 block if available.
- Seek maker/importer evidence for Tange, VP/HTI pedals, H.L./Kalloy/Kusuki/ITM bars/stems and the remaining named Japanese/Taiwanese gaps.
- Obtain a straight-on [Dia-Compe MTB brochure Short Stop panel](.agents/skills/ingest-component-catalog/references/known-catalogs/dia-compe.md#mtb-brochure--ebay-800322888787-photo-inventory-reviewed-2026-11-17) to confirm the obscured lever codes; seek 984D identification. Recover March 1989 pp.4–8/11–14 and the full right edge of p.3 from a new scan. Seek dated Tioga Surefoot-6 evidence and missing 1992 tyre pp.20–25.
- Recover a readable Gipiemme 1980/1982 brochure or coded 1980–83 importer list from a new scan/holder lead; use the [checked sources and recovery targets](.agents/skills/ingest-component-catalog/references/known-catalogs/gipiemme.md#198083-source-hunt--2026-11-19-read-only).
- Seek Vittoria 1982–93 and Bianchi 1974–77/1979–80/1991–99 sources.
- Inspect CLB catalogue photos in eBay 305827471354; seek period evidence for the remaining named brake and Sedis 1977–78 chain gaps.
- Revisit Brügelmann’s Cobra saddles, Mavic Titan and Hutchinson Krono identities using held evidence; seek missing 1986–87/1989–92 editions through a new holder.
- Seek a new dated manufacturer lead for Shimano BB-UN73; use [checked sources](.agents/skills/ingest-component-catalog/references/known-catalogs/shimano.md).
- Recover Sedis May 1971 only from a new readable scan or confirmed holder; verify the recovered OMAS PDF/image set against the catalogue indexed 1978 before claiming complete edition coverage. [Recovery evidence and files](.agents/skills/ingest-component-catalog/references/known-catalogs/omas.md#readable-alternate-catalogue-scans-recovered--2026-11-18); [Sedis limits](.agents/skills/ingest-component-catalog/references/known-catalogs/sedis.md#may-1971-recovery-search--2026-11-18-no-new-readable-copy).
