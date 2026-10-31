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

## GB Synchron brake leaflet (c. 1965) — icenicam.org.uk, data_source id 175

- Source: https://www.icenicam.org.uk/library/GB/Synchron_brake_leaflet.pdf
  (3 pp, no text layer: p1 the Synchron advert, p2 the "Spares for GB
  Synchron" price list, p3 the IceniCAM cover). G.B. Cycle Components Ltd,
  Feltham, Middlesex; pre-decimal prices.
- **Undated.** 1965 used as a single-year bound to match the c. 1965 GB
  catalogue (155). Evidence is weak: only the Sport Mk. 3, Superhood and
  quick-release levers appear and there are no SR164-style stirrup size
  codes (the 1965 catalogue has them), so the leaflet may be a little
  earlier (c. 1963-65). Pre-1971 from the prices.
- Single-product leaflet, not a catalogue. Confirms the Synchron as in 155:
  forged alloy stirrups pivoting on a common back plate, a stud on the L/H
  stirrup bearing under the R/H one ("Synchronised" action), single spring,
  operative stirrup depth 2"-2-1/4". Packs: with Sport Mk. 3 levers 45/6 a
  pair, Superhood levers 47/6, quick-release levers 49/6. Superhood hood has
  a slot for the metal insert of a GB rubber; the quick-release lever has an
  automatic cable release.
- Spare numbers (not in any row's years): 801 back plate, 802 L/H stirrup,
  803 R/H stirrup, 804-807 anchor bolts, 808-811 nut, washer, seating pads,
  812 spring, 813-817 pivot bolt parts, 818 cable adjuster, 819 cable clamp
  bolt, 820 plastic cap, 562 Wetgrip blocks, 624-631 cables, 850 Superhood
  lever complete (10/6), 851 block, 852 lever only, 853 fixing screw, 854
  ferrule cup, 598 / 599 cross pin and nylon bush, 531 / 532 bar clips, 124A
  quick-release lever complete (12/6).
- Description rewritten, source_ref 155 -> 175, years unchanged: 8480
  Synchron (adds stirrup depth), 314 Super Hood later version (adds the
  850 / 851 / 852 Synchron-set spare numbers and the rubber slot), 8482 124a
  Quick Release (adds "sold as a set with the Synchron" and 124A complete).
- Matched with no change: 750 Sport Mk3 (the Synchron's standard lever).
- Not in this leaflet, untouched: 311 Arret, 315 Superhood Rapide, 8475
  Superhood Plus.
- Rows added 0, deleted 0; no bike_spec links to the changed rows.
- Out of scope: spares 801-820, Wetgrip blocks, cables, bar clips.
- Unresolved: true print date; whether the Superhood spares 850-854 are the
  same lever as 595-597 in 155 (taken as the same, sold with the Synchron).

## GB Retail Price List, Catalogue of Components & Spare Parts (c. 1957) — icenicam.org.uk, data_source id 316

- Source: https://www.icenicam.org.uk/library/GB/Components_catalogue_a.pdf
  (6 pp, no text layer: p1 cover, p2 toe clips + rubber accessories 503-507,
  p3 spread stems + handlebar bends + wingnuts, p4 spread caliper brakes +
  spares 531-650, p5 carded displays + warranty, p6 IceniCAM cover). Render
  p3/p4 with `pdftoppm -r 250` and crop with `sips -c` to read the small
  print. G.B. Cycle Components Ltd, Hanworth Trading Estate, Feltham.
- **Undated.** c. 1957 from: Coureur Plus "the latest development ... first
  ever all nylon action brake" (velobase 758 starts it 1957); Sport Mk II
  current with a "revolutionary new" Arret lever, no Sport Mk3 (DB 1958);
  "spare parts for old model brakes ... refer to 1954/5 price list"; no
  Coureur 66 (1961), no Sprite. Used 1957 as a single-year bound. Earliest
  GB source so far, so year_from moved *earlier* on the rows it shares with
  the c. 1962 leaflet (154).
- Range: brakes Coureur Plus, Coureur, Sport Mk II, Grandtour (B depth
  only), Sport Tourist (B or C); stirrup depth A 47-67, B 60-80, C 76-105 mm.
  Levers Superhood 585, Superhood Plus 595, Arret 616, Grand Tour 575, Sport
  Tourist 621, Tourist 643. Handlebar table = the 154 table plus Pelissier
  and R.H. Maes; steel bars Kromo bulged (Maes, R.H. Maes) or mild steel
  engraved ferrule (Maes, R.H. Maes, Olympic). Alloy stems 1-3/4" girder
  45 mm, 2-3/4" / 3-1/2" oval non-twist 70 / 89 mm; steel stems (Kromo or
  531) straight Nos. 1-9 (60-146 mm), Toni Merken Nos. 10-12, Underslung
  Nos. 13-15.
- year_from -> 1957, source_ref -> 316: handlebars 8469 Capo Berta, 8470
  Olympic, 8471 Road Champion, 8472 Touring Bend, 8473 All-Rounder, 8474
  Comfort, 2842 / 2843 Maes alloy (all were 1962); 2845 Maes steel, 9948
  R.H. Maes steel (were 1960); stems 6533 Forged (1960), 6534 Kromo (1962,
  description adds the c. 1957 Nos. 1-9 range), 6532 531 Toni Merken
  (1960); levers 8475 Superhood Plus (1962, adds 595-599 numbers), 8476
  Touring lever 575 (1962; description names it the Grand Tour lever).
- year_to -> 1957 with descriptions: 754 Coureur (1950), 749 Sport MK2
  (1950; retitled "GB Sport Mk II", old title "GB Sport MK2"), 313 Super
  Hood earlier version (1950; taken as the 585 Superhood).
- Retitled: 311 "GB Arret Coureur 66" -> "GB Arret", year_from 1965 -> 1957
  (same Arret rubbers 507 in 155 and here; "Coureur 66" unsupported).
- NULL -> 1957-1957 with descriptions: 2846 Pelissier (drop 5-7/8", width
  15-1/2", reach 3-5/8"), 6535 Kromo Toni Merken, 6536 Kromo underslung.
  6538 Girder section description only (years 1940-1960 kept).
- Inserted (1957-1957, UUID source_id): Brakes 10022 Grandtour, 10023 Sport
  Tourist; Brake Levers 10024 Sport Tourist lever 621, 10025 Tourist lever
  643.
- Deleted (merge): 312 "GB Gran Tour" (velobase
  CF63B149-3CD2-498B-92BE-79B572C435F0, 1950-1950, bare) = the Grand Tour
  lever No. 575 = 8476. No bike_spec links or overrides.
- Not touched: 758 Coureur Plus (already 1957), 6531 GB 531, 6539
  spearpoint (years compatible), 310 straight lever, 314 / 315.
- Out of scope: toe clips (Type Professionnel, Clip-on), rubbers 503-507,
  cable clamp buffers, wingnuts, cables, spares, boxed spares kit, carded
  displays.
- Unresolved: true print date; All Rounder drop reads 1-3/4" here vs
  1-1/4" in the 154 read (one is a misread); 595 is Superhood Plus complete
  here but Superhood with barrel adjuster in 155 (314) — renamed lever?;
  6532 / 6535 are probably one stem (Kromo or 531 tube) split by velobase;
  R.H. Maes in alloy not confirmed (only steel stated).
