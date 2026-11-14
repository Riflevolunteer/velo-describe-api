# Ritchey MegaBite OverDrive evidence review, 2026-11-14

Status: user-approved correction applied and verified on 2026-11-14. Component
8384 updated; no bike spec, CSV or generator changes. Tyre coverage remains
238/973 linked; date flags fell from 10 to 5.

## Finding

The five Bianchi 1990 fitments identify the existing OverDrive model correctly.
Updated component **8384 year_from 1991 -> 1990**, retaining year_to 1992 and all
eight existing bike links, and set source_ref **150 -> 168** (the existing 1990
Bianchi catalogue). No retitle, new component, merge or description change.

| Spec ID | 1990 Bianchi model | Printed tyre | Matching wheel/rim evidence |
| --- | --- | --- | --- |
| 6906 | Signature 2 | Ritchey Megabite Overdrive 26x2.0 | Deore XT, FIR MTB Pro hard anodized |
| 6948 | Grizzly | Ritchey Megabite Overdrive 26x2.0 | XC-Pro, Vantage Comp hard anodized |
| 6969 | Peregrine | Ritchey Megabite Overdrive 26x2.0 | Deore DX, Vantage Comp silver |
| 6989 | Sika | Ritchey Megabite Overdrive 26x2.0 | Deore LX, Vantage Sport silver |
| 7009 | Osprey | Ritchey Megabite Overdrive 26x2.0 | SunTour X-1, Araya VP-20 silver |

The specification spread's model names are on PDF page 21 and tyre column on
page 22. Rows were aligned across the spread using model order, groups and rims;
the isolated leftmost group descriptions on page 22 are not model names. The
intervening Project 7 row has Bianchi Dakar-OS 700x41C and is excluded.

The three other existing 8384 links are Bianchi 1991 Peregrine / Sika / Osprey,
specs 19567 / 19585 / 19602. Their recorded years already fit and stay untouched.

## Evidence inspected

- **Bianchi USA 1990, existing source 168:** original archive
  [Retrobike 1676](https://www.retrobike.co.uk/archive/1990-bianchi-catalogue.1676/)
  currently returns 403. Downloaded the same 23-page scan from the
  [Bikecatalogs mirror](https://www.bikecatalogs.com/download/2797?download=1).
  PDF metadata points back to Retrobike 1676. Visually inspected PDF pages 1,
  21, 22 and 23. Cover explicitly prints 1990; back page identifies Bianchi
  USA Inc., South San Francisco, with MB90 code. Pages 21/22 establish the
  model/size fitments above. No inferred catalogue year is needed here.
- **Ritchey manufacturer comparison:** [Component Catalog 1991–92 at Ebykr](https://ebykr.com/library/ritchey-component-catalog-1991-92/),
  based on Equus scans. Inspected [mountain-tyre spread, printed pp.2–3](https://ebykr.com/wp-content/uploads/2026/11/ebykr-ritchey-component-catalog-1991-92-p02.webp).
  It distinguishes OverDrive from HardDrive and Z-Max, and lists 26x2.0
  standard, Kevlar and WCS variants, plus 700x38C. The standard 26x2.0 is
  650 g / 66 tpi. This agrees with the existing model record but does not
  establish which casing was fitted by Bianchi in 1990. This mirror printing
  is labelled 1991–92; it was not treated as an exact copy of source 150's
  separately ingested 1991 printing, or as a new source to ingest.
- Before application, live DB queries confirmed component 8384 was 1991–92, source 150, and
  all eight named links above. Current Ritchey tyre inventory has one OverDrive
  model record, separate from HardDrive, Z-Max and Mod Quad.

The new earlier evidence is bike fitment. It sets an attested availability
bound, not an exact launch date. Do not backdate the whole MegaBite family or
every WCS/Kevlar variant to 1990. The 1991/92 construction details retained in
8384's description remain supported by those later manufacturer catalogues.

## Applied change and validation

- [Applied SQL](ritchey-overdrive-2026-11-14.sql): one guarded UPDATE, affecting
  only year_from and source_ref on 8384. All eight bike links retained; coverage
  remains 238/973. Live tyre date flags verified **10 -> 5**.
- Previous values for restoration: year_from `1991`, year_to `1992`, source_ref
  `150`; title `Ritchey MegaBite OverDrive`, brand 252, category 23. No description,
  title, group or search_text change proposed.
- Verified one component row affected; dates now 1990–92, source 168. A SQL
  rerun affected zero rows. Compared all 18,472 live bike specs before/after:
  none changed and the same eight specs link to 8384. Generation across all 86
  CSVs was byte-identical before/after; original generated file restored.
  [Validation and before/after values](ritchey-overdrive-2026-11-14-applied.json).
- Remaining date review queue: Clement Pistard 6765, Clement Ritmo LTX 55 6767,
  Vittoria Giro del Mondo 6889, Vittoria Pro L Slick 6899, Vittoria Corsa 9247.
  These have not been reviewed in this task.

Raw scan and renders are working files under
`/private/tmp/ritchey-overdrive-2026-11-14/`. File hashes and source URLs are
retained in [the evidence manifest](ritchey-overdrive-2026-11-14-evidence.json).
No scan binaries, cookie files or unrelated catalogue data are archived here.
