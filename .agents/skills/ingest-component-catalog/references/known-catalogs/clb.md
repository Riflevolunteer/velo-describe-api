# CLB catalogs processed so far

## Cologne report enrichment — applied 2026-11-19

Row **635** description enriched from the recovered press report, source **470**. Dates, title and bike links are unchanged; the magazine issue/date remains unverified. [Exact old/new values, evidence and validation](cross-catalog-notes.md#cologne-press-report-reconciliation--applied-2026-11-19). Readback matched; the SQL rerun changed zero rows and all catalogue mappings were preserved.

## CLB GO! no. 1 and Top Line brochures (1989)

Processed 2026-11-07; `data_source` **367**, label **CLB GO! no. 1 and Top Line brochures (1989)**, country FR (printed Saint-Etienne address).

Source: https://www.equusbicycle.com/bike/clb/clb1989/index.html. Four one-page PDF scans, all read visually:

1. `pdf/clb1989 - 0001.pdf` — newsletter cover, explicitly **No. 1 APRIL 89**.
2. `pdf/clb1989 - 0002.pdf` — newsletter inside: new Omega R/T range, new aero lever, SBS synchronization, EXTREM pads and future developments.
3. `pdf/clb1989_topline - 0003.pdf` — Top Line outer spread: Space Line/Olympic/Elite, set packaging and mounting drawing.
4. `pdf/clb1989_topline - 0004.pdf` — Top Line inner spread: model descriptions, caliper weights, shared 38-47mm reach and technical details.

The separate Top Line leaflet has no printed year established; **1989 is the host's attribution**, while April 1989 is printed on the GO! newsletter. No earlier complete CLB range was available for comparison. The new-range wording supports the Omega offering and lever design being current in April 1989; it does not prove every Top Line model was introduced then. Recorded 1989-only bounds are attestations, not claims of introduction or discontinuation. Space Line's earlier 1980 bucket was retained.

### Applied changes

| Row | Component | Change |
| --- | --- | --- |
| 611 | CLB Elite | Previously undated, bare description. Set 1989-1989; heat-treated light alloy, synchronized side-pull, 38-47mm, 115g/caliper, white epoxy, racing quick release, Profil aero levers, Z-Peugeot and optional EXTREM pads. |
| 627 | CLB Olympic Synchro | Previously undated; set 1989-1989. Add 38-47mm, synchronized light-alloy construction, white/black with red markings, regular/aero lever options, 100g/caliper. Preserve the independent reported 204g complete-pair weight, now explicitly labelled. |
| 628 | CLB Omega R | Previously undated, bare description. Set 1989-1989; 43-57mm, SBS, hollow adjustment pin, four colours, aero-lever system in attache case, optional EXTREM pads. |
| 635 | CLB Space Line | Extend 1980-1980 to **1980-1989**, retaining year_from. Add 38-47mm, synchronized heat-treated alloy, hard anthracite anodising, 90g/caliper, regular/aero levers and Jeannie Longo. Preserve independent reported 204g complete-pair weight, now explicitly labelled. |
| 10968 | CLB Omega T | **New**, 1989-1989. Explicit newsletter model, 53-72mm reach; other Omega system details as R. UUID `43ff9133-7c6a-4a4f-9df9-0749092a69e9`. |
| 10969 | CLB Profil (aero; slotted lever blade) | **New**, 1989-1989. Profil name from Top Line's Elite text; slotted blade pictured on outer spread and newsletter, concealed side-exit cable routing, integrated spring, ergonomic right/left rests and direct fixing-pin access from newsletter. UUID `a10f602d-6141-4163-9f48-ef441233aa78`. |

All four existing rows previously had source_ref 1; every changed/new row now points to 367. No retitles, later year_from moves, merges or deletes. Existing 627 bike link (1989 Peugeot C 653 MAB Z Racing Team, spec 17450) remains valid; no generator overrides refer to these component IDs, and no bike links were changed.

Independent weight check: original VeloBase entries for Olympic `6A1268EE-DD3B-4F48-9BB9-BB57E7435DFE` and Space Line `C9A3FF8D-AA0B-4DC7-ABFE-9D9DF7FBDDE3` explicitly say 204g is for a NOS pair including factory pads and complete mounting hardware. This does not conflict with manufacturer caliper-only weights. Both facts were retained.

### Identification boundaries and remaining gaps

- Do not collapse Omega T into Omega S 630, RS 629 or TS 631: the manufacturer explicitly calls its 53-72mm model **T**. Those other rows have independently named variants; the Omega S reference photo was checked. No dates or dimensions were assigned to them from family-level resemblance.
- Earlier aero lever 239 has a different smooth blade/hood design; Super Profil 259 retains back-of-blade perforations and its reference explicitly describes no return spring. Neither was assumed to be the new slotted, spring-equipped Profil lever. The existing names/dates were left alone.
- Top Line also offers traditional (non-aero) levers on Space Line and Olympic, without enough model identification/photo detail to create or update a distinct lever row. Do not assign all contemporary levers to one generic existing row.
- EXTREM pads, cable housing, hardware and attache cases have no component category and were excluded. Unnamed future ATB developments and children's brakes are insufficiently identified for rows. No page was skipped, but diagrams/packaging were used only as supporting evidence.
- These partial brochures do **not** show GL 47-60 or the 1980s Competition aerodynamic brake, so their catalogue/bike-link gaps remain. Absence here does not bound any other CLB row's years.
- The separate purported 1980 catalogue, only partially photographed on eBay, was not part of this ingest.

## Catalogue photo review — eBay 305827471354, 2026-11-19 (read-only)

All six unique [listing photographs](https://www.ebay.com/itm/305827471354)
were inspected at original resolution: cover, GL exploded page, factory/back,
contents/legal page, cover detail and Competition exploded page. This supersedes
the earlier two-interior-photo inspection in the source-hunt log. No complete
catalogue recovered. The seller's **1980** attribution remains unverified: the
legal page cites Act 80-335 of **12 May 1980**, establishing only a lower date
limit. Contents span printed pp.1–36; the photographed technical pages' printed
page numbers are not visible.

- **GL family:** [GL exploded page](https://i.ebayimg.com/images/g/Tt8AAOSwvHFnBZXD/s-l1600.jpg)
  prints GL 47.60, 48.65, 55.75 and 63.85, AS13 GL treated alloy. GL47.60 has
  polished round arm **18143**, polished Y-arm with release carrier **18144**,
  polished cable release **18301** with snap ring, black self-adhesive CLB plate
  **18510**, black self-adhesive tip **18513** and M5×100 adjuster **18102**
  with Ø11mm knurled nut. Longer-reach arms have separate codes; do not assign
  all family hardware or finishes to every GL row. The facing set page is
  cropped, so no complete GL set code was transcribed.
- **Competition 46.57:** [Competition page](https://i.ebayimg.com/images/g/K1sAAOSwJ7hnBZXJ/s-l1600.jpg)
  explicitly identifies set **101250**, **46–57mm** reach, AS13 GL treated alloy,
  Professional anodised levers **843** (Ø23.5mm), CLB PRO handrests **844**
  (natural or black), low-friction cables, presentation box and four spare
  blocks. Round/Y arms **18154/18155**, release **18314** with rubber snap ring.
  This supports a separately named later Competition candidate; live row
  **608** is the older 1950–70 Competition, not a suitable automatic match.
- The GL drawing supports family description enrichment but **does not identify
  row 614 exactly**: its [reference specimen](https://velobase.com/ViewComponent.aspx?ID=5AE8DB7C-5CDF-47F8-855A-A6601F4A3F52)
  has an inset badge, whereas the parts list specifies self-adhesive plates.
  A polished release alone does not settle the full variant. Rows **613/614/615**
  remain separate and undated. No pictured white GL47.60 or original 1989
  Peugeot fitment establishes specs **17182/17219**.
- Competition's conventional lever **843** does not establish the aerodynamic
  assembly on 1982–84 Peugeot PH12 (**11470/11789/12040**) or the earlier generic
  Competition fitment. Do not equate Competition 46.57 with GL47.60, date it
  exactly 1980, reuse 608, or identify an existing lever solely from “Professional”.

No SQL, source registration, DB, CSV or generator changes. Next supported work is
to reconcile/prepare the distinct Competition candidate with the date limitation
explicit; GL variant-specific enrichment and bike links need further evidence.
Photo downloads removed after review; original URLs above preserve the evidence.

## Competition 46.57 / set 101250 — applied 2026-11-19

The prepared addition was applied after explicit user approval: component
**11709**, source **467**. One source and one component were inserted.
The [Competition photograph](https://i.ebayimg.com/images/g/K1sAAOSwJ7hnBZXJ/s-l1600.jpg)
was inspected again. Its printed page number is not visible. This is a partial
catalogue source, not a complete-range ingestion.

| Applied field | Value |
| --- | --- |
| Title | CLB 101250, Competition 46.57 |
| Brand / category | CLB (70) / Brakes (3) |
| Years / group | NULL / NULL; no group assignment |
| Description | Side-pull, 46-57mm reach, AS13 GL treated alloy. Set 101250: Professional anodised 843 levers (23.5mm), CLB PRO 844 handrests (natural/black), low-friction cables, box and four spare blocks. Cable release with rubber snap ring. |
| Search text | CLB 101250 Competition 46.57 |
| UUID | fe214f28-f5fe-42be-b6b3-e8df4c626979 |
| Source 467 | CLB technical catalogue (undated, not before May 1980) |
| Citation | https://www.ebay.com/itm/305827471354 |

**101250 is the complete set code**, not an individual caliper code. The model
is 46.57. The legal notice establishes only a printing lower bound of 12 May
1980, not a component introduction or availability year; both component years
remain NULL. Catalogue market is unverified (English text alone is insufficient),
so source 467 country is NULL.

Live reconciliation found no 101250/46.57 row across all CLB components or the
cross-brand code/title search. Existing 608 is the 1950–70 Competition; GL
612–615, Professionnel and other CLB models were reviewed as separate identities.
No merge or overwrite was needed. Before application, the only registered CLB
catalogue source was 367 (the 1989 brochures), which does not represent these
photographs. Source 467 now records this partial technical catalogue.
Readback verified title, description, brand/category, NULL years/group, UUID,
search text and provenance. Description length is 227 characters; search text
comes from the maintained helper. The guarded second load affected **zero**
source and component rows. No existing values were overwritten. The post-load
CLB duplicate report raised no candidate involving 11709; existing lever/GL
variant pairs remain outside this addition and were not merged.

Live Competition specs 11470 (1982 PH12 aerodynamic) and 12040 (1984 PH12,
generic Competition) remain NULL; no live spec points to 608. The prior-review
ID 11789 was not returned as a current Competition value and is not an update
target. The conventional 843 lever does not identify the aerodynamic assembly,
nor do the photographed set/reach establish the generic earlier fitment.
Keep the generator's existing era restriction and aero exclusion. No separate
843 lever insertion is proposed because its correspondence with existing
Professionnel specimens is not established.

Validation used a read-only consistent DB snapshot and simulated the proposed
row in memory: **108 catalogue CSVs / 23,380 generated spec mappings**, zero
mapping changes. Both PH12 values remain NULL. The SQL's component insertion
guard matched zero existing rows, as expected. This is a before/after generator
simulation, not a claim that all generated mappings agree with the live DB.
The existing generator emitted its usual overlength-value warnings for PR 65
Lady Extras and Royal/Randonneur 18 Frame Material in both runs.

Post-application validation repeated the comparison with/without live row 11709
in a read-only consistent snapshot: 108 CSVs / 23,380 mappings, **zero changes**.
Live PH12 specs 11470/12040 remain NULL; no live spec points to 608 or 11709.
Application changed only the new source and component records. No bike links,
CSVs or generator rules were changed. The prepared/applied SQL and temporary
validation script were removed after validation; source URLs and applied
values above retain the evidence.

Scratchpad for the separate **1989** ingest: `/tmp/clb-1989-1.pdf` through `-4.pdf`; transcription `/tmp/clb-1989-listing.json`; pre-change snapshot `/tmp/clb-existing.tsv`; exact before/after diff `/tmp/clb-1989-diff.json`; guarded transactional SQL `/tmp/clb-1989-ingest.sql`. Applied 1 source insert, 4 updates and 2 inserts; verified readback, description lengths 208-233 characters, generated new search_text, and a second load affected **zero** rows. Component count 10069 -> 10071. SQL and scans remain outside the repository.
