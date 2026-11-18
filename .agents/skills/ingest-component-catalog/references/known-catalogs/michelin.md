# Michelin catalogs processed so far

## Elan 6834 — German Motobecane 1986 fitment, applied 2026-11-19

Source465, printed p.15, explicitly fits Michelin Elan700x23C to C352E Super-Mirage. Extended `year_to` **1985→1986**, retaining `year_from1975`; `source_ref381→465`. This attests catalogue availability, not a manufacture endpoint. Old source/date values above permit restoration. Duplicate review found no candidate involving6834; bike-link readback, zero-change rerun and integrity checks pass. [Catalogue evidence and validation](../../../ingest-bike-specs/references/known-catalogs/motobecane.md#german-1986-catalogue--dating-and-source-verification-2026-11-18).

## Wildgripper Polish product/range sheets — applied and validated 2026-11-17

- [Source PDF, two sheets](https://bikalog.org/api/view/Michelin/1999/michelin.pdf), fully read visually, with text layer used only as assistance. Sheet 1 names **Harfa-Harryson** as Polish distributor and prints **New '99** on Hot S, Country, Comp S and Comp. Use 1999 as an attestation for its six named models, not an inferred manufacturing interval. Sheet 2 is a Polish Wildgripper range table with a **1998 Bibendum emblem**; its publication year and issuer are unprinted. The emblem does not establish publication in 1998, and the shared archive path does not prove the two sheets are one edition. Keep the 13 sheet-2-only identities' years NULL.
- Added **two catalogue sources**, country **PL** (edition/distribution market), sharing the PDF citation with separate sheet references: **434** `Michelin Wildgripper, Harfa-Harryson Polish product sheet (1999)` and **435** `Michelin Wildgripper Polish range sheet (undated, 1998 Bibendum emblem)`. Pre-load source lookup found only existing Michelin source 184, with no matching source for this PDF.
- **User-approved and applied:** 19 inserts **11447–11465**, all brand **649**, category **23 Tyres**, group NULL; no updates, merges/deletes, bike-spec writes or generator changes. Pre-load Michelin inventory had 37 rows (56 after loading); cross-brand/title Wildgripper search found no counterparts. Preserve the existing road Sport/Sports, Hi-Lite and Axial models as distinct identities. No earlier full Michelin MTB catalogue was compared, so range additions/withdrawals cannot be inferred beyond the explicit New '99 copy.
- Titles below take the prefix `Michelin Wildgripper`. Order codes identify size/colour/use variants rather than a single model part number, so they are retained as evidence here rather than choosing one arbitrary SKU for a model title. Sizes/colours aggregate within a model; explicitly front-specific tread and City casing constructions remain separate.

| Component ID / model | Attestation | Specification / order-code evidence |
|---|---|---|
| 11447 Hot S | 1999, sheet 1 | Folding; red 122224 / black 122236, 630 g; XC/DH/dual slalom, recommended for full suspension. Both sizes print **50-599**, unresolved; omit that dimension from description rather than silently correcting it. |
| 11448 Country | 1999, sheet 1 | Wire bead, tan/black; 47-559 720 g **122237**, 50-559 780 g **122247**. |
| 11449 Comp S | 1999, sheet 1 | 127 TPI folding; green 47-559 520 g **122233**, green 50-559 540 g **122238**, black 50-559 540 g **122249**. |
| 11450 Comp | 1999, sheet 1 | 127 TPI wire bead, same tread/casing as Comp S; green 47-559 560 g **122239**, 50-559 580 g **122240**. |
| 11451 Lite S | 1999, sheet 1; sheet 2 confirms codes | 127 TPI folding universal; green 47-559 600 g **124609**, green 50-559 620 g **124704**; sheet 2 adds black 50-559 **124978**. Carbon protective layer. Front pictures alone do not establish a separately listed Lite S front SKU. |
| 11452 X-Sport | 1999, sheet 1; sheet 2 confirms codes | 33 TPI universal; folding tan/black 47-559 680 g **122178**, 50-559 750 g **122179**. Sheet 2 adds black wire 47-559 **122180**, 50-559 **122185**. Weights apply to folding versions only. |
| 11453 Lite | Undated, sheet 2 | 127 TPI wire universal; green 47-559 **124617**, black 50-559 **124989**, green 50-559 **124737**. |
| 11454 Lite (front) | Undated, sheet 2 | 127 TPI wire, green 47-559 **124662**. |
| 11455 Sprint S | Undated, sheet 2 | 127 TPI folding universal; green 47-559 **122069**, green 50-559 **122081**, black 50-559 **122146**. |
| 11456 Mud | Undated, sheet 2 | 33 TPI wire/gumwall universal, black 50-559 **122027**. |
| 11457 Soft | Undated, sheet 2 | 33 TPI wire/gumwall universal, black 54-559 **122019**. |
| 11458 Sport | Undated, sheet 2 | 72 TPI wire/skinwall universal; 47-559 TR/BK **122128**, black **122012**; 50-559 black **122063**. |
| 11459 Sport (front) | Undated, sheet 2 | 72 TPI wire/skinwall; 47-559 TR/BK **122127**, black **122059**; 50-559 black **122023**. |
| 11460 City (33 TPI, folding) | Undated, sheet 2 | Skinwall universal, 30-559 TR/BK **122168**. |
| 11461 City (27 TPI, wire bead) | Undated, sheet 2 | Gumwall universal, black/black 30-559 **122161**, 35-559 **122000**. |
| 11462 X-Sport (front) | Undated, sheet 2 | 33 TPI wire/skinwall, black **47-559**, **122242**. Enlarged table checked: its merged size cell is 47-559, not the following 50-559. |
| 11463 Jogger | Undated, sheet 2 | 27 TPI wire/gumwall universal, black 47-559, inch size printed 26 x 1.90, **124951**. Preserve both printed dimensions. |
| 11464 Sprint | Undated, sheet 2 | 33 TPI skinwall universal, 47-559; folding TR/BK **122170**, wire black **122232** or TR/BK **122244**. |
| 11465 Rock | Undated, sheet 2 | 33 TPI wire/skinwall universal, black 44-559 **122030**, 47-559 **122049**. |

- Sheet-2 abbreviations SW/GW are read as skinwall/gumwall, with folding/wire from the explicit Polish entries. Its TR/BK key literally says black with sheen/black; retain TR/BK in those descriptions rather than overriding it with the tan/black appearance. Sheet 1 separately describes tan/black X-Sport. Chemistry wording is omitted from the loaded descriptions rather than converting the Polish `silikon` wording to an unsupported modern compound specification. Prices are out of scope.
- Duplicate simulation: four configuration pairs, **City 27/33 TPI**, **Lite universal/front**, **Sport universal/front**, **X-Sport universal/front**; keep separate for the printed constructions/uses. No near-name or parenthetical-name pairs. No existing-row merge candidate.
- Shared-generator read-only before/after overlay: **96 loaded catalogues / 21,196 specs**, identical mappings/findings; 21,181 unchanged and the same 15 pre-existing lost-mapping findings, zero gains or new changes. Live text search found no Wildgripper bike specs. These sheets do not identify ATB Surmond **17335**, Chevron **13657**, Competition Slick **1158**, or unnamed/alternative Michelin specs.
- Applied through `scripts/load-sql.js`: **two sources and 19 components inserted**, matching the approved proposal; **rerun affected zero rows**. SQL guarded by UUID or existing Michelin/Tyres/title and source label; new rows have UUID source IDs and generated search text. Descriptions max **161 characters**, source citations within 255. No old values were overwritten; restoration would remove only the inserted UUID rows after checking bike references, followed by unused sources 434/435.
- Exact post-load readback asserted all 19 titles, descriptions, years, brand/category, NULL group, search text, UUIDs and source assignments; both source labels/citations/country/type match. Existing Michelin/Tyres association verified. Components **11447–11452** carry 1999–1999/source **434**; **11453–11465** carry NULL dates/source **435**. No new row has bike links.
- Actual post-load shared-generator comparison reproduces the baseline across **96 catalogues / 21,196 specs**: same 15 pre-existing lost-mapping findings, zero gains/new changes. Removing only the new components from the read-only snapshot also produces **identical findings**, confirming no mapping impact. Actual duplicate checks retain configuration pairs **11452/11462**, **11453/11454**, **11458/11459**, **11460/11461**; zero near/parenthetical pairs and no merge candidate.
- Source URL, page evidence, loaded IDs and validation are retained here. Task SQL, downloaded PDF/renders, transcriptions, scripts and snapshots were removed after successful readback, zero-change rerun and mapping/duplicate validation. No retained note depends on that scratch directory.

## Bike-catalogue date-conflict review — 2026-11-14 (user approved, applied)

- Applied changes:
  five component UPDATEs and one spec UPDATE; rerun affected zero rows.
- Applied: 9498 Hi-Lite Road / 6836 Hi-Lite Pro / 9499 Super Elan year_from
  1988 -> 1986; 6830 BIB TS-20 year_to 1985 -> 1989; 6826 Select year_from
  1987 -> 1986, inferred from the existing catalogue attribution. Original
  named-model links retained; all 26 Michelin date flags resolved.
- Original Peugeot US 1986 table confirms Hi-Lite Pro 700 x 20C and Hi-Lite
  Road 700 x 23C / 27 x 1-1/8. Peugeot FR tables attributed 1986/87 confirm
  Super Elan and BIB TS20; Peugeot NL 1989 Cosmic confirms Michelin BIB TS20.
  French catalogue dating is inferred by the archive. The undated Rekord 920
  German sheet confirms Select 20-622 but its attribution to 1986 remains
  inferred; no new independent dating evidence found.
- Actual transcription correction applied: US 1987 Mont Cenis p.5 prints
  700x20C, not the DB/CSV's 700x70C [?] (spec 15681). US Triathlon p.6 prints
  700x19. CSV backed up and repaired; override replaced with corrected scoped
  text. All 86 CSVs generated before/after: only that spec text changed; no
  component mappings changed. Date updates leave generation unchanged. All
  18,472 live specs compared: only 15681.value_text changed. Tyre flags 36 -> 10,
  coverage unchanged at 238/973. source_ref changes: 9498 262 -> 310,
  6836 262 -> 312, 9499 262 -> 309, 6830 259 -> 320, 6826 1 -> 324.
- The existing 1988 700C-specific Hi-Lite Road casing/weight details are retained
  with their size scope; no assumption that these also describe its 27-inch tyre.
- Re-read source pages (2026-11-14): [Peugeot 1986](https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1986.html),
  French table images 6/7 (PH11 Super Elan; PH501/PH513/PGN10M and its GOLD
  variant BIB TS20; Michelin maker in footnote), US table scans labelled
  (18)/(19) (Mont Cenis Pro, Triathlon/Ventoux Road 700C, Tourmalet Road 27in).
  [Peugeot FR 1987](https://www.bikeboompeugeot.com/Brochures%20France/Peugeot%201987%20France%20Brochure/Peugeot%201987%20France%20Brochures.htm),
  Specifications 1/2 confirm all 11 flagged Road rows and both Aubisque Super
  Elan rows; the archive explains that the French editions are undated.
- [US 1987 Mont Cenis p.5](https://www.bikeboompeugeot.com/Brochures%20USA/Peugeot%201987%20USA%20Brochure/Peugeot%201987%20USA%20Brochure%20Page%205.jpg)
  resolves the 70C typo; [Triathlon p.6](https://www.bikeboompeugeot.com/Brochures%20USA/Peugeot%201987%20USA%20Brochure/Peugeot%201987%20USA%20Brochure%20Page%206.jpg)
  confirms Pro 700x19. [Peugeot NL 1989](https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1989.html),
  printed p.30 (table image 29), explicitly lists Michelin BIB TS20 for Cosmic.
  [Bianchi DE sheet](https://labibleduvelocataloguesbianchi.blogspot.com/p/bianchi-1986.html),
  `1986 bianchi.jpg`, confirms Rekord 920 Select 20-622; dating remains inferred.
  Later manufacturer casing/weight information from sources 184/259/262 was
  retained from the existing records/notes; those complete catalogues were not
  re-read in this focused review. Raw scans/logs remain temporary working files.

## Michelin cycle tyres: Cycle Tyres leaflet (June 1983), trade price list (1 September 1979) and bicycle / moped / motorcycle tyres booklet, Edition 3 (c. 1980) — IceniCAM, data_source id 184

- Sources, all from https://www.icenicam.org.uk/library/Michelin/ (the
  folder also holds adverts and cuttings from 1912 to 1968, a 1969 leaflet and
  motorcycle tyre price lists, not used):
  - `Cycle_tyres_leaflet_1983-06.pdf` (4 pp, printed `6/83`): the range with a
    description and maximum pressure per model, plus a sizes and types table.
    The primary source, recorded as data_source 184 "Michelin Cycle Tyres
    leaflet (June 1983)".
  - `Cycle_tyres_trade_prices_1979-09-01.pdf` (5 pp, "September 1 1979"):
    covers by type and size with ETRTO marking and recommended trade price,
    and tubes. Used for years only; no separate data_source row.
  - `Cycle_+_motor_cycle_tyres_booklet_c1980.pdf` (28 pp, bilingual French /
    English, "Edition N° 3", undated, c. 1980): tread pattern chart and the
    bicycle tyre characteristics tables on pp. 3-7, the other 21 pages are
    mopeds, motorcycles, scooters, tubes and accessories. Used for years only.
- These are the British (Michelin Tyre Company, Stoke-on-Trent) editions, so
  they list Elan, Bib TS, Bib Sport 25, Club Tourist, CL, Chevron, Speed,
  Sports and so on. The French and racing models in the bike data ("Select",
  "Hi-Lite", "Competition Slick", "Altika", "Actic", "A1", "Axial Sport") are
  not in them.
- Range changes across the three papers: Elan 27 x 1 and 700C were 25mm
  (25-630 / 25-622) in 1979 and 23mm (23-630 / 23-622) by 1983; Elan TS (red /
  black 700 x 25c, trade 3.25) is on the 1979 list only; Bib TS 20 / 23 (folding,
  flexible bead cores, about 8.5oz, whitewall) and Bib TS 32 (650B) appear in the
  c. 1980 booklet, Bib TS 32 not in 1983; Bib Sport 25 (about 13.5oz, max 90
  psi), Club Tourist (27 x 1-1/8, max 95 psi) and CL (chevron / centre ribs,
  "will progressively replace chevron tyres") are in c. 1980 and 1983 but not on
  the 1979 list; Bib TS Cross (cyclo-cross, 700 x 23C / 28C, max 95 psi) is 1983
  only; Fifty / Chevron, Speed, Sports, Roadster, Endurance and Zig-Zag run
  through 1979-83.
- Existing rows (brand 649, all bare velobase, source_ref 1) before this pass:
  6834 Elan (1975), 6830 BIB TS-20 (1980), 6831 BIB TS-23, 6832 BIB-SPORT 25,
  6833 BIB-TS32, 6827 Sports, plus the French models above and 3428 "Michelin
  (Miche)", a hub row.
- Updated, source_ref -> 184: 6834 Elan year_to 1975 -> 1983; 6830 BIB TS-20
  year_to 1980 -> 1983; 6831 BIB TS-23 none -> 1980-1983; 6832 BIB-SPORT 25
  none -> 1980-1983; 6833 BIB-TS32 none -> 1980-1980; 6827 Sports none ->
  1979-1983. Descriptions rewritten from the leaflet (sizes with ETRTO, weight,
  max pressure).
- Inserted (UUID source_id, group_id NULL): 8788 Club Tourist (1980-1983),
  8789 Elan TS (1979), 8790 CL (1980-1983), 8791 Speed (1979-1983), 8792 Bib
  TS Cross (1983). search_text is the plain title.
- Not inserted: Roadster, Endurance, Zig-Zag and Chevron / Fifty (attested in
  all three papers but roadster and city tyres, no bike spec names them); the
  junior, small-wheel and delivery tyres (Universal, GT, Bib Cross, TB / Pave,
  Ribbed Balloon, Zig-Zag Comfort, Super Nylon, Carrier); wheelchair tyres; all
  the moped, light motorcycle, motorcycle and scooter tyres; Michelin tubes and
  rim bands.
- Bike links: loading rows does not link existing bike_spec rows. "Michelin 27"
  x 1-1/8" Club Tourist" (3 bikes, Raleigh 1984) and "Michelin Elan TS" (1
  Peugeot 1979 bike, currently linked to plain Elan) only pick up the new rows
  when the bike generator is re-run for those catalogues.
- Unresolved: the 1975 year_from of 6834 Elan is velobase and not supported
  by these papers; the c. 1980 booklet's actual year (Edition 3).

### Re-check of the June 1983 leaflet (2026-10-31)

- Re-read against the DB: every row above still matches it; later sources
  (259, 262) have pushed some `year_to` values past 1983, which is consistent.
- 9053 Fifty (added by source 276, 1976-1981): `year_to` 1981 -> 1983,
  source_ref 276 -> 184, because the leaflet lists Fifty (Chevron) 27 x 1-1/4
  (28-630).
- 6830 BIB TS-20, 6831 BIB TS-23: description "crotchet rims" -> "crochet
  rims" (the leaflet's spelling). Typo fix only, source_ref left at 259.
- Not changed: the "France" velobase prefix in the descriptions, although
  these British editions were made in Stoke-on-Trent.
