# CLB catalogs processed so far

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

Scratchpad: `/tmp/clb-1989-1.pdf` through `-4.pdf`; transcription `/tmp/clb-1989-listing.json`; pre-change snapshot `/tmp/clb-existing.tsv`; exact before/after diff `/tmp/clb-1989-diff.json`; guarded transactional SQL `/tmp/clb-1989-ingest.sql`. Applied 1 source insert, 4 updates and 2 inserts; verified readback, description lengths 208-233 characters, generated new search_text, and a second load affected **zero** rows. Component count 10069 -> 10071. SQL and scans remain outside the repository.
