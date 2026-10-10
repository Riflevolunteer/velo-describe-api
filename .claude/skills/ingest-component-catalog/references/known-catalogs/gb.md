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

## GB High Quality Components & Spares Catalogue (c. 1965) — flickr, data_source id 155

- Source: ten photos titled "GB Catalogue 1960s" in Wright38's Flickr
  photostream, starting at https://www.flickr.com/photos/jwright/4288375043/
  (cover); the others are 4288282447, 4288305887, 4288312383, 4288320785,
  4289035750, 4289069948, 4289077340, 4289085900, 4289095332 (found via
  `flickr.com/search/?user_id=81925991@N00&text=GB catalogue`; the photo
  page itself doesn't list siblings). Each is a two-page spread, cover + pp.
  1-16; the 4288320785 and 4289069948 spreads both show p. 8. `_o` original
  is rate-limited ("CIDR range blocked"); the `_k` 2048px size downloads
  with a flickr.com referer and is legible. Price 6d, G.B. Cycle Components
  Ltd, Hanworth Trading Estate, Feltham.
- **Undated.** c. 1965 from: Synchron stirrup sizes SR164 / SI64 / SII64 /
  SIII64; stem drawing caption "In the '65' range the forward extension
  remains solid"; Coureur 66 is the later springs-on-pivots version (757,
  velobase 1963); still no GB 77 / 88 (1969-70); Milk Race neutral service
  photos. Used 1965 as a single-year bound.
- New vs the c. 1962 leaflet (154): Synchron centre-pull, Tourmalet bar,
  Metric stem range and Record cast stem (velobase already had both at
  1960, kept), 124a quick-release lever, Arret lever, 123 OT / OR / ONW
  Sprite levers. Dropped: Capo Berta bar, Superhood Plus lever name,
  Superhood Rapide lever name (6620 Rapide unit still a spare), Maes steel
  bar, Kromo stem, large-flange QR hub — all left at year_to 1962.
- Spec differences between editions, both named in the description:
  Touring Bend width (15-1/2" or 17-1/2" in 154, 16-1/2" here), All-Rounder
  width (23" vs 21"), GB Forged extensions (1-3/4" only in 154), Olympic in
  steel (only in 154). Maes and Olympic drop read 5-1/8" in both.
- year_to -> 1965, source_ref -> 155: 757 Coureur 66 springs on pivots
  (1963, description rewritten from bare velobase), 758 Coureur Plus, 750
  Sport Mk3, 751 Sprite (description adds the lever options), 8476 / 8477
  Touring levers 575 / 126, 8478 Sprite hooded lever 180, 2842 Maes bulged
  centre, 8470 Olympic, 8471 Road Champion, 8472 Touring Bend, 8473
  All-Rounder, 8474 Comfort, 6540 GB Metric and 6544 GB Record stems
  (descriptions rewritten from bare velobase). 6533 GB Forged description
  only.
- Velobase rows with no years -> 1965-1965 (judgment calls): 314 "GB Super
  Hood (later version)" taken as the booklet's Superhood lever with barrel
  adjuster (595); 311 "GB Arret Coureur 66" taken as the Arret (Continental)
  lever, which the booklet offers with the Synchron, not the Coureur 66 —
  title kept.
- Inserted (1965-1965): Brakes 8480 Synchron (not the same as Altenburger
  Synchron 511 / 512); Handlebars 8481 Tourmalet; Brake Levers 8482 124a
  Quick Release, 8483 123 (OT / OR / ONW) — one row, the booklet sells the
  three separately but doesn't say how they differ (its search_text is just
  "GB 123").
- Out of scope: rubber hoods 503 / 507 / 508 / 510, Type Professionnel toe
  clips, carded Wetgrip blocks, Hiduminium wingnuts (incl. Sturmey Archer),
  '66' cable clip, cables and spares.
- Unresolved: true print date; what OT / OR / ONW mean; whether 314 / 311
  really are the booklet's levers.
