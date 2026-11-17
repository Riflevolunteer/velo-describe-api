# TODO

Keep actions here; use [existing notes](.agents/skills/ingest-component-catalog/references/known-catalogs.md) for evidence and [link decisions](.agents/skills/ingest-bike-specs/references/link-decisions.md) before changing mappings. Use live `/linkCoverage`, `quality-report.js` and `duplicate-report.js` instead of copied gap/count inventories. Follow [housekeeping](.agents/skills/audit-data-quality/references/todo-housekeeping.md).

## Ready to work

- Persist link status/evidence so deliberately unlinked specs stop appearing as unresolved in `/linkCoverage`.
- Design multiple component evidence references, preserving `source_ref` as the last source that changed a row.
- Review current metadata/date flags with `node scripts/quality-report.js`; verify identities before changing dates or links.
- Review manual merge candidates: Simplex 4634/4641–4643, 2556/2557; Nervar 1657/1659; Pelissier 3457–3459; Belleri 2791–2794; Weinmann 1103/1104; Campagnolo 1472/1473.
- Inspect Simplex fronts 2590/2591 against 2587/7282; inspect Campagnolo 2295 against 2299/2300; register the reviewed 2297/2305 distinction. [Specimen notes](.agents/skills/ingest-component-catalog/references/known-catalogs/cross-catalog-notes.md#reviewed-specimen-and-variant-distinctions).
- Transcribe SunTour Edition No.89 Scrambler II/LV-3, PDF pp.40–41; compare RD-SR10 with 7956–7958. [SunTour notes](.agents/skills/ingest-component-catalog/references/known-catalogs/suntour.md).

<a id="sr-sakae-next-work"></a>

- Check Koga-Miyata 1986 MTB-204/BMT-3-26/Rockey-2 and Trek 1987 pp.13–14 MTB-209/MTB-210/FX-200 against existing rows and fitment. [Source leads](.agents/skills/ingest-component-catalog/references/source-hunts.md).
- Review remaining Kusuki, Sugino TGT-LP, Dia-Compe PN-280/281/730, KKT RT-E1 and Sansin ET-Q/ET-QS identities using [Panasonic evidence](.agents/skills/ingest-bike-specs/references/known-catalogs/panasonic.md).
- Decide variant representation for Raleigh Zenith/Granada specs 8781/8804. [Weinmann evidence](.agents/skills/ingest-component-catalog/references/known-catalogs/weinmann.md).
- Review Guida ’96 pass 3 and remaining FRM/OMAS/Mavic identities. [Catalogue notes](.agents/skills/ingest-component-catalog/references/known-catalogs/cross-catalog-notes.md).
- Prepare and review the Mavic T261 9983/10182 consolidation and 1995 availability correction using the recovered maker profile. [Evidence](.agents/skills/ingest-component-catalog/references/known-catalogs/mavic.md#t261-profile-crosswalk--2026-11-17-read-only).
- Review finish-specific representation for Mavic Reflex tubular 9975/10197/10198 while preserving the documented CD/Ceramic options. [Evidence](.agents/skills/ingest-component-catalog/references/known-catalogs/mavic.md#other-waiting-cases).
- Recover the logged Dura-Ace EX and Detto Pietro scans; compare EX descriptions and triage supported Detto categories. [Recovery log](.agents/skills/ingest-component-catalog/references/source-hunts.md#log).
- Establish issuer/date and reconcile the Polish IRC sheets indexed 1999. [Source log](.agents/skills/ingest-component-catalog/references/source-hunts.md).
- Check Regina source 117’s splined-body provision against Palo Alto’s splined Oro freewheels. [Identity review](.agents/skills/ingest-component-catalog/references/known-catalogs/cross-catalog-notes.md#palo-alto-identity-review--applied-and-validated-2026-11-17).

## Product and infrastructure

- Show catalogue country in the client where rows collide; assess splitting mixed-country Peugeot 1971–74 CSVs.
- Plan a Cinelli/De Rosa bike-image pilot: inspect the existing blob column, settle rights/cropping, then design storage/API/client delivery.
- Remove the extra DB-password encryption, coordinate SSM/plaintext application deployment, smoke-test and rotate the password.

## Bike catalogues

- Load Bikecology April 1976 complete bikes, pp.87–111.
- Decide Nashbar brand treatment, then load its Spring 1988 house bikes, pp.30–40; re-read the scans.
- Decide Panasonic brand treatment, then ingest the 1985–89 US bikes from [recorded sources](.agents/skills/ingest-bike-specs/references/known-catalogs/panasonic.md).
- Load La Bicicletta’s May 1984 racing-bike buyer’s guide.
- Assess the bikalog backlog: Koga-Miyata 1980–2001, Nishiki 1987, Raleigh 1991, Colnago C35 1989.

## Waiting for distinguishing evidence

Reopen these when the specified material becomes available; existing ambiguity alone is not another search task.

- **Spidel pedals:** obtain a period 700 RA cage-material/code crosswalk or coded Peugeot fitment for specs 10671/10691/11032/11053. [Group-box review](.agents/skills/ingest-component-catalog/references/known-catalogs/maillard.md#spidel-700-ra-group-box-review--2026-11-17-read-only).
- **Mavic:** obtain CXP30 specimen/edition weight attribution, dated Open Pro 5099/5100 decals/finishes and a dated 31.8 mm specification for 870 clamp 2410. [Evidence](.agents/skills/ingest-component-catalog/references/known-catalogs/mavic.md).
- **Huret/Sachs Huret:** recover sheet 501.1 DFE for description enrichment; obtain coded fitment/specimens for New Success, Rival, Rider, Duopar/Eco and Avant, plus dated ARIS evidence. [Exact cases](.agents/skills/ingest-component-catalog/references/known-catalogs/huret.md).
- **SunTour:** obtain code/construction/date evidence for the remaining XCD/XCE, Superbe, Sprint, FD-3000-SS and uncoded specimens; resolve FH-XD10/11 and LD-5100/LS-5700/5800 identities. [Exact cases](.agents/skills/ingest-component-catalog/references/known-catalogs/suntour.md).
- **Campagnolo:** obtain the remaining 2000/2001 code/version crosswalks and early front-derailleur date evidence. [Exact cases](.agents/skills/ingest-component-catalog/references/known-catalogs/campagnolo.md).
- **Ritchey:** resolve Logic, Comp Road and Aero/OCR construction/version conflicts. [Evidence](.agents/skills/ingest-component-catalog/references/known-catalogs/ritchey.md).
- **EDCO:** obtain headset dimensions/code and BB axle/version evidence. [Evidence](.agents/skills/ingest-component-catalog/references/known-catalogs/edco.md).
- **Nisi:** identify 5138 against 00120/00130 and verify 5145’s weight. [Evidence](.agents/skills/ingest-component-catalog/references/known-catalogs/nisi.md).
- **Bikecology:** independently identify Maxy II and C1264/C1265; inspect 3232 against Campagnolo Cat.17 p.54. Identify the 1980 Ideale 88/Titanium and OMAS sealed hubs. [Catalogue evidence](.agents/skills/ingest-component-catalog/references/known-catalogs/cross-catalog-notes.md); [OMAS distinction](.agents/skills/ingest-component-catalog/references/known-catalogs/omas.md).
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
- Check the logged Performance/Nashbar/QBP/J&B/Colorado Cyclist browser-only leads for 1985–92 distributor evidence.

<a id="yaesu-next-work"></a>

- Seek a new free Yaesu 1984–87 or SR No.19–23 scan/holder lead; paid acquisition remains deferred. Obtain Schwinn 1985’s printed CXC-T310 block if available.
- Seek maker/importer evidence for Tange, VP/HTI pedals, H.L./Kalloy/Kusuki/ITM bars/stems and the remaining named Japanese/Taiwanese gaps.
- Recover the logged Dia-Compe 1987–93 catalogue leads; seek dated Tioga Surefoot-6 evidence and missing 1992 tyre pp.20–25.
- Read the logged Ofmega Mistral adverts/group test and Campagnolo May 1984 Victory advert; seek Gipiemme 1980–83, Vittoria 1982–93 and Bianchi 1974–77/1979–80/1991–99 sources.
- Inspect CLB catalogue photos in eBay 305827471354; seek period evidence for the remaining named brake and Sedis 1977–78 chain gaps.
- Revisit Brügelmann’s Cobra saddles, Mavic Titan and Hutchinson Krono identities using held evidence; seek missing 1986–87/1989–92 editions through a new holder.
- Seek a new dated manufacturer lead for Shimano BB-UN73; use [checked sources](.agents/skills/ingest-component-catalog/references/known-catalogs/shimano.md).
- Recover Sedis May 1971 and missing OMAS 1978 pages only from a new readable scan/holder. [Recovery limits](.agents/skills/ingest-component-catalog/references/source-hunts.md#log).
