# Tange catalogs processed so far

## Coded headset fitments — applied and validated 2026-11-21

The original bicycle catalogues identify six headset models added to the
Tange inventory. Each date is a catalogue attestation. The
descriptions use the named finish or sealing where printed. Thread
standard, stack height, bearing construction and weights require a
component drawing or measured original.

| Model / component ID | Catalogue evidence | Years and source | Linked spec IDs |
|---|---|---|---|
| TH-305 / 12230 | [1984 Peugeot GB PDF p.10](https://www.bikecatalogs.com/download/5370), MB2 Canyon Express explicitly prints the Tange name. [1987 Bianchi p.14](https://ebykr.com/library/bianchi-1987-catalog-road-sport-bicycles/) lists it on Premio, Strada LX and Strada. [1989 Bianchi US PDF pp.24–25](https://www.bikecatalogs.com/download/2796) specifies TH-305 on Premio and TH-305 sealed on the six named builds. | 1984–1989, source 258 | 12460, 1342, 1362, 1382, 18505, 18568, 18589, 18610, 18672, 18693, 18714 |
| TH-305C / 12231 | [1990 Bianchi US PDF p.21](https://www.bikecatalogs.com/download/2797), Nyala and Forza. The Tange attribution follows the shared TH-305 root code. Preserve the C suffix as a distinct catalogue configuration. | 1990–1990, source 168 | 7013, 7219 |
| MES Sealed / 12232 | [1986 Miyata PDF pp.22–23](https://www.ragandbone.ca/PDFs/Miyata%20Catalogue%20PDFs/Miyata%20Catalogue%2086.pdf), 710, 310, 610 and Terra Runner. | 1986–1986, source 349 | 18823, 18846, 18910, 18977 |
| AW27 / 12233 | [1984 Motobécane PDF p.10](https://www.bikecatalogs.com/download/3791), chrome on Mt. Becane and City-Becane. 1986 German Motobécane p.9 specifies TANGE AW 27 on T50 Tracker ([public Velopedia index](https://velopedia.online/veloTable), preview record 1352). | 1984–1986, source 465 | 22763, 23176, 25363 |
| MX 600M / 12234 | [1984 Peugeot GB PDF p.10](https://www.bikecatalogs.com/download/5370), MB1 Urban Express column. | 1984–1984, source 258 | 12441 |
| 230 SLP / 12235 | [1987 Peugeot US printed p.18](https://www.bikeboompeugeot.com/Brochures%20USA/Peugeot%201987%20USA%20Brochure/Peugeot%201987%20USA%20Brochure%20Page%2018.jpg), black sealed on Alpine Express. | 1987–1987, source 312 | 15914 |

The 1989 and 1990 Bianchi pages print the distinct TH-108 code without
the headset maker. Specs 7033, 18526 and 18631 still need a Tange-labelled
code or original fitment. The [1991 Specialized specification chart](https://www.retrobike.co.uk/gallery2/d/145087-2/Specialized-1991.pdf)
names the silver sealed MES-1. An independent crosswalk would be needed to
use that suffix or date for the 1986 MES. Keep the Unique FE/X and
Falcon/New Falcon construction questions tied to their earlier evidence.

Live readback confirmed the six components and all 22 links previously
NULL. Fifteen link by model name. The generator uses bike/year-scoped
overrides for the six 1989 Bianchi sealed specs and the 1986 Tracker.
Regeneration against 118 loaded catalogues and 24,829 specs retained
all 22 links, with the same 15 pre-existing lost proposals and no other
link differences. Replaying the guarded SQL changed zero rows. The
affected headset duplicate checks found no new candidates. To reverse,
remove the added overrides and clear the exact links above before checking
references to the new rows.

- JBM "Japan's Top Bicycle Parts Makers" (July 1974, data_source 271): 4 bottom brackets added (Unit Hanger, R-401, TS-401, JL-401); MA-60 and Falcon headsets dated 1974. Full entry in cross-catalog-notes.md.

## Cleanup 2026-11-01 (no catalogue): Tange-Seiki brand merged into Tange

- Brand 349 "Tange-Seiki" (2 headset rows) merged into brand 57 "Tange"; brand 349 and its category_brand row
  (Headsets) deleted. Old titles, for matching later sources: 3155 "Tange-Seiki Levin CD" -> "Tange Levin CD",
  3156 "Tange-Seiki Levin CDS" -> "Tange Levin CDS", 3152 "Tange Seiki LV-11, Levin" (already brand 57) ->
  "Tange LV-11, Levin"; search_text rewritten. Bike links (all via overrides by id) unchanged.

## New Falcon fitment review — 2026-11-20 (applied and validated)

Scope: identify the New Falcon headset named on existing Miyata bikes; no new
bikes loaded. Before application, the live brand/category review found no New
Falcon row under Tange (57), Headsets (12), including the former Tange-Seiki names.

### Evidence and identity limits

The Miyata catalogue scans hosted by [Rag & Bone](https://www.ragandbone.ca/HTML/Miyata.html)
name **Tange New Falcon** directly. PDF page numbers below count from the cover.
All listed pages except the already-transcribed 1980 reconstruction were inspected
visually during this review.

| Catalogue / existing source | PDF page(s) | Existing fitments |
| --- | --- | --- |
| [1979](https://www.ragandbone.ca/PDFs/Miyata%20Catalogue%20PDFs/1979%20MIyata%20Catalogue.pdf), 386 | 9 | 1000 |
| [1980](https://www.ragandbone.ca/PDFs/Miyata%20Catalogue%20PDFs/1980%20Miyata%20Catalog.pdf), 401 | 9 | 1000; inherited transcription, weaker evidence as below |
| [1981](https://www.ragandbone.ca/PDFs/Miyata%20Catalogue%20PDFs/1981%20Miyata%20Catalog.pdf), 402 | 11 | 1000 |
| [1982](https://www.ragandbone.ca/PDFs/Miyata%20Catalogue%20PDFs/1982%20Miyata%20Catalog.pdf), 403 | 13–14 | 1200, 912, 710, 1000; each explicitly adds “Italian size” |
| [1983](https://www.ragandbone.ca/PDFs/Miyata%20Catalogue%20PDFs/Miyata%20Catalogue%2083.pdf), 406 | 8–10, 12 | 1200, 912, 710, 1000 |
| [1984](https://www.ragandbone.ca/PDFs/Miyata%20Catalogue%20PDFs/Miyata%20Catalogue%2084.pdf), 404 | 24–25 | 912, 710, Terra Runner |
| [1985](https://www.ragandbone.ca/PDFs/Miyata%20Catalogue%20PDFs/Miyata%20Catalogue%2085.pdf), 405 | 17 | 710 |

1980's chart survives in this PDF as OCR glyphs on a blank background, not the
original chart image; see the [existing Miyata review](../../../ingest-bike-specs/references/known-catalogs/miyata.md#1980-miyata--loaded-2026-11-14-source-401).
The approved 1980 mapping uses its existing exact named-model transcription,
corroborated by the original 1979 and 1981 1000 tables. It is not an independently
verified original 1980 table reading. No construction details are inferred from it.

Existing **3141 Tange Falcon** is not an established match. It currently has
1974–1974/source 271 and description “Tange Falcon, Japan, 93 grams (Spec), for
FL250C”. Its [VeloBase specimen](https://www.velobase.com/Pages/ViewComponent.aspx?ID=502F6513-FBB0-44EF-9ABD-8A4340333E1E)
labels FL270C/FL250C, years N/A. [JBM July 1974, page 7](https://www.disraeligears.co.uk/site/00_main_images/jbm_-_japans_top_bicycle_parts_makers_page_7_main_image.jpg)
shows a Falcon exploded headset but does not name New Falcon or those FL codes,
weight or sizes. That earlier dating does not establish a crosswalk to the specimen
or to New Falcon. Preserve 3141 during this change; do not borrow its codes,
93 g weight or stack dimensions. Keeping the named fitment families separate is
provisional identity handling, not proof that every Falcon/New Falcon is physically
different. A period maker code/construction crosswalk would be needed to merge them.

The reviewed fitment tables establish the name and Italian-size offering, not
maker part code, exact thread/crown-seat dimensions, stack height, material,
weight or bearing/sealing construction. “New” is part of the model name, not an
introduction-year claim. 1979–85 is the attested availability range, not proven
production start/end. The 1985 912 says Tange Alloy Black anodized and the 1000
uses Levin sealed: do not extend the New Falcon mapping to those descriptions.
Other located bike-catalogue/transcription leads are not a maker code crosswalk;
no material or sealing claim is proposed from them. Earlier maker-source dead ends
remain in [source-hunts.md](../source-hunts.md); do not repeat tubing-only catalogues.

### Applied change

- Added **12168 Tange New Falcon**, brand 57, category 12, no group, 1979–1985,
  source_ref **405** (1985 Miyata); search text `Tange New Falcon`.
  Description: **“Threaded headset. Italian-size version specified.”**
  The row represents the named model family, not a dimension-specific configuration.
- Linked the previously NULL specs **20295, 20464, 20737, 20884, 20905,
  20926, 20968, 21828, 21848, 21867, 21906, 21137, 21158, 21286, 21494**.
  Each spec retains its catalogue source. The 1980 caveat above was included in approval.
- No bare Falcon/Tange alias, 3141 change or invented part number was added.

User approved the reviewed change set on 2026-11-20. Applied one UUID-keyed
insert (`3fd76ab6-a281-4160-9cc0-179c45847288`) and 15 exact-ID/value/source
NULL-link updates. All previous Tange headset fields and links, including 3141,
were compared with the pre-change snapshot and remain unchanged. Readback confirms
the description, 1979–1985 dates, brand/category/group, source, search text and all
15 approved links with their original provenance. A restoration would unlink only
those listed specs from 12168, then delete 12168 after checking for other references;
all 15 original links were NULL.

Validation: guarded SQL rerun affected zero rows. Across 23,800 specs, the maintained
generator/live comparison has 23,785 unchanged mappings and the same 15 pre-existing
lost mappings; no gained/changed/missing/ambiguous mappings remain after filling
the approved links. Pre-application in-memory simulation predicted exactly these
15 gains, with no additional mapping changes; no override was needed. Tange headset
duplicate checks found zero normal groups, near pairs or parenthetical-name pairs;
3141/12168 remain provisionally separate for the evidence limits above. Whole-DB
quality report: zero errors, 2,071 review findings (1,689 incomplete dates,
328 linked date conflicts, 35 broad freewheel labels, 19 descriptions at limit),
matching the prior recorded baseline. Task SQL, downloads, renders and snapshots
were removed after validation; source URLs and pages above retain the evidence.
