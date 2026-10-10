# GB catalogs processed so far

## GB Cycle Components leaflet (c. 1962) — icenicam.org.uk, data_source id 154

- Source: https://www.icenicam.org.uk/library/GB/Components_catalogue_b.pdf
  (3 pp: both sides of a fold-out at 2115x571pt plus an ICENICAM cover; no
  text layer). Render with `pdftoppm -r 200` and crop panels with `sips`
  (no PIL in the system python) to read the spec text. "GB Catalogue:
  Components, Spares, Prices", G.B. Cycle Components Ltd, Hanworth Trading
  Estate, Feltham, Middx, Tel. Feltham 4871; pre-decimal prices.
- **Undated.** c. 1962 inferred: the Coureur 66 is "introduced in time to be
  put to the test of the Tour de France and Tour of Britain, now universally
  available" (launch 1961, velobase 756); Sprite and Sport Mk 3 current; no
  GB 77 / 88 (1969-70) or Neta / Norma / Nova stems. Used 1962 as a
  single-year bound; year_from never moved earlier than the DB had.
- No part numbers on products; spares carry 3-4 digit numbers (Coureur 66
  66xx, Coureur Plus / Mk 3 5xx-6xx, Sprite 1xx / 6xx, stems 701-711, hubs
  720-750), cited in descriptions where useful.
- First GB source: all 43 GB rows (brand 80) were bare velobase. Added a
  Hubs `category_brand` link.
- Updated, source_ref -> 154: 756 Coureur 66 (springs on back plate, matches
  the leaflet drawing) year_to -> 1962; 758 Coureur Plus, 750 Sport Mk3,
  751 Sprite year_to -> 1962; 315 Super Hood Rapide NULL -> 1962-1962 (the
  Coureur 66 lever; probably 1961, not claimed); 2848 Ventoux description
  only; 2845 Maes steel and 2842 Maes alloy no ferrule (= bulged centre)
  NULL -> 1962-1962; 2843 Maes alloy with ferrule (= engraved reinforcing
  ferrule) 1970 -> 1962-1975; 6533 GB Forged stem NULL -> 1962-1975 (the
  1975 bound for 2843 and 6533 comes from the 1973-75 Raleigh bike specs
  linked to them, not this leaflet); 6534 Kromo NULL -> 1962-1962.
  Measured velobase weights kept (293g stem, 315 / 325g Maes).
- Not touched: 757 Coureur 66 with springs on pivots (1963, later version);
  2844 Maes scalloped ferrule (not shown); 6539 Hiduminium spearpoint stem
  (not the leaflet's stem); the other velobase stems / bars / levers.
- Inserted (1962-1962, UUID source_id): Handlebars 8469 Capo Berta, 8470
  Olympic (alloy or steel), 8471 Road Champion, 8472 Touring Bend, 8473
  All-Rounder (flat), 8474 Comfort (flat), each with drop / width / reach
  from the leaflet table; Brake Levers 8475 Superhood Plus, 8476 Touring
  lever 575, 8477 Touring lever 126, 8478 Sprite hooded lever (No. 180);
  Hubs 8479 Light Alloy Large Flange QR.
- Bike links: 1973-75 Raleigh "G.B. Maes Alloy Embossed / Engraved" (4
  specs) -> 2843 via Handlebars overrides; see the bike skill's raleigh.md.
- Out of scope: rubber hoods / half rubbers / lever sleeves 503-509,
  wingnuts, Type Professionnel toe clips, '66' cable clip, cables, spares,
  carded counter displays.
- Unresolved: true print date; whether 2842 / 2843 / 2844 are three genuine
  ferrule variants or velobase over-splitting of the leaflet's two alloy
  options (engraved ferrule / bulged centre).
