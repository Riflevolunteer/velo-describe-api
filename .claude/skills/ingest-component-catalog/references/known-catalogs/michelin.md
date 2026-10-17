# Michelin catalogs processed so far

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
