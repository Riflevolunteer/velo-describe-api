# Michelin catalogs processed so far

## Bike-catalogue date-conflict review — 2026-11-14 (user approved, applied)

- [Applied SQL with previous values](../../../../../docs/audits/michelin-2026-11-14.sql):
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
