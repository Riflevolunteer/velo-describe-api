# Cross-catalog notes catalogs processed so far

## Cross-catalog notes

- The Nuovo Record 1020/A rows are dated per version in the DB (v3 1970-81,
  v4 1982-84, v5 1985-87); the bike generator's year-ranged override follows
  those. Keep them in step if either changes.
- Part numbers are reused across eras (1013/1 is a Gran Sport lever in 1953
  and a Record lever in 1967; 1040 is Gran Sport pista in 1960 and "Record
  Pista" later). Diff by number, then read the DB title before deciding.
- **Redundant velobase weights (2026-10-01, Simplex, at the user's
  call):** done when descriptions were still treated as add-only (since relaxed: velobase is not the authority, see SKILL.md). A
  velobase "(Spec)" weight was removed only where it exactly equals a
  catalogue weight for the same model on the same row. Removed text, so
  it can be restored: 2575 "126 grams (Spec)", 4616 "287 grams (Spec)",
  6209 "71 grams (Spec)", 6216 "86 grams (Spec)", 7263 "108 grams
  (Spec)" (each sat right after "France, "). Kept on purpose: every
  "(Actual)" and "(avg)" weight (measured specimens are independent
  evidence of real variance), (Spec) weights that only approximately
  match (6212 105 vs 105.5g, 4603, 4632), derived matches (6231 180g =
  2x90g), rows where the catalogue note doesn't restate the weight
  (2567, 6240), and 4617, where the weight anchors the SP wording.
  Weights on catalogue-inserted rows (e.g. 7281-7284, 7305) are
  themselves catalogue figures, not velobase ones.
- **Description/title sweep (2026-10-02, Simplex + Shimano 1972, after
  the "velobase is not the authority" rule).** 54 rows that had collected
  stacked "1978 catalog: ... Sep 1981 catalog: ..." fragments were
  rewritten into one consolidated description each (what the part is,
  then each figure with its catalogue year). Dropped: merge audit notes
  (the deleted rows are recorded above), velobase "(Spec)" weights that
  repeated a catalogue figure, and stale qualifiers. Kept: measured
  "(Actual)"/"(avg)" weights and "aka Super LJ ..." names. 4615 S0 gained
  the Sep 1981 S0/P figures (250g, 28t) that hadn't fit before. 6181 was
  also taken out of group 141 "Light Action". Old titles, so later
  sources using them can still be matched:
  - Shimano: 4498 "Crane D-501" -> "D500 / DB-100, Crane"; 4499 "Crane GS
    D-510" -> "D510 / DB-110, Crane G.S."; 4439 "Lark-W" -> "D280 /
    DD-300, Lark-W"; 4437 "D-600 Titlist" -> "D600, Titlist"; 4438
    "D-610 Titlist-GS" -> "D610, Titlist G.S."; 4444 "Eagle-SS" -> "D310,
    Eagle S.S."; 2461 "Thunder Bird GTO" -> "E111, Thunder Bird G.T.O.";
    6163 "L-600 Fingertip Control Barcons" -> "L600, Bar-End Control";
    6181 "L-422, Light Action" -> "L422, G.T. Console (5D)"; 6124/6120
    "Super Shifter (single)/(twin)" (originally both "Super Shifter") ->
    "L251, Super Shifter (single)" / "L252, Super Shifter (twin)".
  - Simplex: 2549 "302" -> "SJ A302"; 2576 "SJ A223 (triple)", 7264 "SLJ
    A423 (triple)", 2574 "SJ A103 (Triple)" -> suffix dropped; 4617 "SX
    810 T" -> "SX810 T"; 5904 "SLJ 6164" -> "SLJ6164"; 6209 "(Zytel
    levers, square finger pads)" -> "S3448"; 6231 "MB Silver Range" ->
    "MB2600"; 6212 "SJ (2nd type)" -> "SJ6311"; 6240 "SLJ (4th type,
    black anodized)" -> "SLJ5057 (black anodized)"; 6239 "SLJ (4th
    type)" -> "SLJ5057"; 6216 "SXP (2nd type; stem mount)" -> "SXP 4506".

## source_ref backfill (2026-10-05)

- 1,137 velobase rows (`source_ref` 1) retagged to the catalogue that last
  changed them, matching the "last source to change this row" rule in
  SKILL.md §4. Evidence: applied SQL from earlier sessions, ids in these
  logs, and catalogue cues in descriptions.
- Added `data_source` rows for six Campagnolo catalogues ingested without
  one: 108 Catalogo N. 13 (c. 1955), 109 Catalogo N. 14 (c. 1960), 110
  Dealer Parts Catalogue (1988), 111 "Euclid" brochure (September 1988),
  112 range brochures GB (June and September 1990), 113 range brochure GB
  (January 1991). Use these ids for any re-ingestion.
- Left as velobase: 10 Simplex rows whose only change was a typo or merge
  with no catalogue named, and 30 rows touched only by dedupe/sweep passes.

## Duplicate merge across velobase-heavy brands (2026-10-06)

Not a catalogue pass: a title / part-number duplicate scan over Shimano,
SunTour, Campagnolo, Simplex, Mavic, SR, Weinmann, Gipiemme, Dia-Compe and
Zeus, user-approved. Survivor got any years / weights the deleted row had.
No bike links or overrides pointed at deleted rows (3008 and 3353 kept
theirs). Deleted (id, title, source_id -> survivor):

- 4495 "Shimano Deore XT" (RD, 1994-95, `22DC1316-310E-4AEE-91C9-7C2FBBD22DE3`) -> 4496
- 4719 "SunTour Accushift alpha-4050" (RD, 1988, `BB2C5B9B-740A-4B8B-8B18-3C604D8D6114`) -> 4720 (group 251 -> 231)
- 4698 "SunTour Hero Version 1" (RD, `D958F463-EBE6-4534-8EA0-E6396D932D1F`) -> 4746
- 4699 "SunTour Hero Version 2" (RD, `1D780CF1-DA06-4ACC-ACD5-EAE2FF4A7593`) -> 4747
- 4716 "SunTour U" (RD, 354g, `E9CD72CF-85B9-4A17-865E-F01904E72298`) -> 4717
- 2230 "SunTour Alpha (6sp)" (Freewheels, 1980, `F7397AA0-5BF9-43D1-8CC8-CFF5C4DC3F3B`) -> 2232
- 4555 "Simplex Rigidex 35 (steel pulleys; ...)" (RD, 1954-58, `A3765D6E-6B35-431A-B1A7-A015EA3AC6F5`) -> 4556
- 6581 "Mavic (flat angled  planes)" (Stems, `10602BE5-E2CE-4B5A-8CD5-075150FB8271`) -> 6582, retitled "Mavic (flat, angled planes)" (was "Mavic (flat, angled  planes)")
- 3009 "Gipiemme Special (Pista)" (Headsets, 1980, `210CA368-E960-42E3-AF81-AA28AD8E4ECD`) -> 3008
- 3354 "Gipiemme Sprint" (Hubs, 525g, `C691F1D6-13DC-4EEB-8F7D-84CF06362415`) -> 3353
- 5787 "Gipiemme Crono Special" (Seat Posts, `0DE0711C-E514-4AFC-93B5-79DCE3A06DFB`) -> 5786
- 1754 "Sakae/Ringyo (SR) Sakae SX  Ovaltech" (1986, `D26C3B9D-EB40-466F-A661-CF9202C6E5C4`) and 1763 "Sakae/Ringyo (SR) SX OvalTech" (1987, `CDDA6052-7A33-4E97-9B52-A9B1FA1452CC`) -> 1766, now "Sakae/Ringyo (SR) SX OvalTech" 1985-1987 (was "... Sakae SX Ovaltech")
- 2648 "SunTour FD-2000, Superbe Pro (endless band)" (1981, bare, `3484717E-1DEF-476B-BD7B-3F76F7B80484`) -> 2652
- 2714 "Shimano CB-400" (1970, 833g, `C1D257B5-074D-4987-AD4F-67578DB3E63B`) -> 7509; 2715 "Shimano CB-410" (1970, 908g, `74693F62-3E03-4855-8A87-0B0560622EAC`) -> 7510
- 3102 "Shimano HP-7500 (NJS), Dura-Ace (Track)" (1970-84, 153g, `B44C65E9-0DAB-41AE-930B-49F30905E17F`) -> 7126
- 6119 "Shimano 333" (Shifters, `52319435-7DF0-4363-A741-E65C14C4BAF1`) -> 6136
- 680 "Dia-Compe MX-901" (Brakes, `962C41BA-1C00-4B67-AE78-3549825B2E8D`) -> 8088
- 3923 "Sakae/Ringyo (SR) Silstar SP-11" (Pedals, 1970, 185g, `036524D0-6997-4104-9F89-D654F3410143`) -> 8240
- 1118 "Weinmann AG Cyclocross 420" (Brakes, 1980, `8FFE15D4-6571-4220-A9B2-44130C50C0C8`) -> 1164
- 1139 "Weinmann AG Vainqueur 610 (black label)" (`BB2C2A19-CBEB-442A-AAFA-4108D8883790`) -> 1136
- 1151 "Weinmann AG Vainqueur 750 (black label)" (1980, 378g, `15A8EFBD-1607-48BD-A4FB-29FE1CD1A994`) -> 1148

Left as weaker suspects: SunTour XCD 6000 bare vs coded rows (7 categories),
164-166 sealed BBs, 1220 / 1223 CS-AP20-S8 XC Comp vs XC Pro, Shimano 1412 /
1413 Dura-Ace 7400 chain, SunTour 2619 a-4050 vs 2633 Edge 4050 FD,
Weinmann 1129 / 1130 570.

## Palo Alto Bicycles catalogue — 1981/82 (blogspot "Catalogues divers: Revue 1981", data_source 248)

- `data_source` label "Palo Alto Bicycles catalogue (1981/82)", country US. Source:
  https://labibleduvelodivers.blogspot.com/p/revue-1981.html (54 images at 1276 x 1650,
  "CATALOGUES VELOS 1981 (n)", numbered from the back: image 54 = cover "1981/82
  catalog", 53 = index; printed page n = image 53 - n). Palo Alto Bicycles, 171
  University Ave, Palo Alto CA; the next edition of the Palo Alto Bicycle Shop 1976
  catalogue (data_source 245). Gram weights for nearly everything. Components are
  pp. 2-37; clothing (4-7), tools (13, 23), Palo Alto-built wheels (14), spokes (15),
  the house "Palo Alto Cotton" tubular, tubes, pumps, toe clips and straps, cables,
  lubricants, superlight bolts, bottles, books, rollers, helmets, bags, racks, shoes and
  posters are out of scope. Read 2026-10-21.
- Main value: the Avocet range (saddles, seat post, cranks, bottom bracket, hubs, pedals,
  headsets), whose DB rows were bare velobase entries, many dated a year late.
- Changed (source_ref -> 248, 45 rows), all dated to include 1981: Avocet 4 Model I BB
  (was undated), 1453 Racing crank (1982 -> 1981), 1454 Touring Triple, 2937 / 2936 Model
  II / III headsets (1982 / 1983 -> 1981), 3189 / 3191 Model I / II low-flange hubs, 3669 /
  3670 / 3671 Model I / II / III pedals, saddles 5258 Racing I, 5253 Racing II, 5251 Racing
  III, 5252 RS, 5254 Touring I (later), 5255 Touring II, 5256 Touring WI, 5724 seat post
  (descriptions rewritten on all, velobase weights kept); Galli 741 Super Criterium brake
  (undated -> 1981); Universal 1083 Mod. 77 (1977 -> 1981), 1086 CX, 1082 Super 68, 1080
  Extra Mod. 51; SunTour 4773 VX-T; SR 6668 FS Foursir stem; Super Champion 5187
  Performance, 5183 Gentleman, 5180 Arc en Ciel, 5189 Record du Monde; Fiamme 4992 Ergal;
  Wolber 6918 Invulnerable 84; Clement 6731 50, 6733 70, 6737 CdM Seta, 6763 Paris-Roubaix
  Seta; Specialized 6861 Touring, 6867 Touring-X, 6869 Ultralight, 6863 Touring Turbo,
  6868 Turbo S; Lyotard 9085 45 and 3815 460D; 8765 Sedisport; Phil Wood 3478 hubs and 100
  BB.
- Added (8 rows, 1981): Avocet Touring III, Touring WII, Racing IIT, Racing WI, Racing WII
  saddles; Galli Brunito brake; Sugino Super Mighty Custom (kept apart from 9080 Mighty
  Custom, 1976: the Super Mighty series is the 1978 rename); Wolber steel-belted clincher.
- Judgement: the catalogue's SunTour "Cyclone II" is our Cyclone Mark-II (RD-3500,
  RD-3700, FD-2300, 1981-85), already covered; its "syncro-shift" Cyclone II lever has no
  row and was not added (no part number). SR "Model G" bar = 8220 Foursir-G (1980-82),
  unchanged. Not applied: the SunTour "Superbe" brake (CB-1000 1977-78 vs Superbe Pro
  CB-4100 / 3100 1979+, unclear); Regina Record Oro / Oro / Black chains (no unambiguous
  row); Avocet "W20" 5257 left as is. Duplicate noticed: two bare "Specialized
  Touring-II" rows (6865 with 265 g avg, 6866 bare), a merge candidate.

## Bikecology catalogue — 1980 (blogspot "Catalogues divers: Revue 1980", data_source 247)

- `data_source` label "Bikecology catalogue (1980)", country US. Source:
  https://labibleduvelodivers.blogspot.com/p/revue-1980.html (64 images at 1276 x 1650,
  "CATALOGUES VELOS 1980 (n)", numbered from the back: image 64 = cover, 01 = back
  cover; printed page n = image 65 - n). Bikecology Mail Order, 12509 Beatrice St, Los
  Angeles, $1.00, the cover advertises the "Annual Warehouse Clearance Sale, Sat., Sep. 6"
  (a Saturday in 1980) and "Eclipse '80 Nomad". Same retailer as the April 1976 (data_source
  244) and Summer 1981 (227) catalogues. Components are pp. 9-36 (headsets to rims);
  pp. 2-8 and 62-63 are handmade frames (Bob Jackson, Mercian, Colnago, Freschi, Jack
  Taylor tandem), p. 9 index and forks, the rest bags, clothing, shoes, tools, pumps,
  tubes, spokes, cables, wheels. Read 2026-10-21; pp. 32-34 (tubes, pumps, spokes) not
  read.
- Dated inside it: "NEW"/"New for 1980": Ideale 88/Titanium and 92 Touriste, SunTour
  Pro Superbe brake and Superbe pedal, SunTour New Winner freewheel system, SR SilStar pedal,
  SR Laprade 220 mm, redesigned Campagnolo Super Record rear (cage for 6-7 speed) and Record
  front, Wolber Liberty, Tange "NEW" Levin.
- Campagnolo, SunTour, Shimano, Cinelli, SR (Royal, Laprade, Custom, Swan, World bars),
  Dia-Compe G, Modolo, Mafac and the 600EX headset all already covered 1980: no change.
- Changed (source_ref -> 247, 27 rows): year_to -> 1980 on 1391 Regina Extra 50 Titanio
  (sold as the Record III Titanium), 8334 Record S (Record II "S"), 8765 Sedisport,
  9080 Sugino Mighty Custom, 880 Modolo Professional [INTERN PAT], 9068 Galli Ti, 845
  MAFAC Cyclo-Tandem, 909 Phil Wood disk brake, 6796 Cycle Pro 300, 6921 Wolber Liberty,
  Clement 6731 / 6733 / 6737 / 8971, 9104 Mavic Extra Legere, Super Champion 5180 Arc en
  Ciel and 5189 Record du Monde; year_from -> 1980 on 7821 SunTour TZ-6000 Z chain (1982;
  the Trans-Z chain dates from 1978), 4009 SunTour PL-4000 Superbe Pro (1981; judgement:
  the "all-new Superbe pedal going into 1980", 278 g, needle bearings), 8080 Dia-Compe
  NGC500 (1986); dated 1980-1980 (were undated) 3621 SunTour Vx hubs, 97 OMAS Titanio BB,
  3067 OMAS Superlight headset, 4910 Ambrosio Synthesis; descriptions on 2976 Chris King
  1", 3771 KKT Pro Ace (PA) light alloy, 6797 Cycle Pro T230.
- Added (7 rows, all 1980, group NULL): Ideale 92 Touriste (under brand 580 "Tron &
  Berthet", where the Ideale rows live), Barelli Superlight, Phil Wood tandem hub (double
  threaded), Cycle Pro 270 tubular, Cycle Pro High Extra (RRE) and Road Racing Extra
  clinchers, Cycle Pro touring tires. category_brand links already existed (0 rows
  inserted).
- Not applied: Ideale 88/Titanium (new for 1980; the DB has 88 Speciale Competition rows
  5654 / 5655 1960-80 and a 90 titanium 5658, so it is unclear which is the same part),
  OMAS sealed bearing hubs (not clearly one of 3449 / 3450), Jasik tandem headset parts,
  Regina Record I Oro and Super Corse Oro chains (still no unambiguous row), SR SilStar
  3922 (already 1970-82). Brands "Cycle Pro" (337) and "National" (670) cover the same
  Japanese maker (National Tire Co.); merged 2026-10-29: brand 670 deleted, rows 9097 /
  9098 moved to 337 and retitled (old titles "National tubular" / "National clincher";
  search_text is now the new title, since search-text.js drops "Cycle" as a brand stopword).
  Also deleted row 2983 "Cycle Pro" (Headsets, velobase, bare placeholder, no
  years, no bike_spec links) and the now-empty category_brand (Headsets, 337). Out of scope: frames,
  forks (Tange Italian-style, Cinelli-style, standard), the Bikecology-built wheels (Tourist
  179A / 279A / 379A, Racing Tubular 579), bolts, spokes, tubes, pumps, tools, toe clips and
  straps, mirrors, cables, tape and plugs, bags, clothing, shoes and helmets.

## Bike Warehouse catalogue No. 12 — 1978 (blogspot "Catalogues divers: Revue 1978", data_source 246)

- `data_source` label "Bike Warehouse catalogue No. 12 (1978)", country US. Source:
  https://labibleduvelodivers.blogspot.com/p/revue-1978.html (37 images at 1276 x 1650,
  "BICYCLE CATALOG 1978 (n)", numbered from the back: image 37 = back cover with the parts
  index, image 36 = p. 1, so printed page n = image 37 - n; image 01 = a final page of
  frame-builder ads). Bike Warehouse, a division of Nashbar / Associates Inc., Ohio,
  "Copyright 1978 Bike Warehouse", toll free 1-800-321-2474. A US mail-order retailer like
  Bikecology and Palo Alto; prices USD, grams. Components are pp. 1-10 plus the Lambertini
  saddles on p. 14; pp. 11-13 and 15-23 (tools, built-up wheels, bottles, carriers,
  clothing, helmets, shoes, speedometers, lights, books) and the wm. sampson frame ad are
  out of scope. Read 2026-10-21. Probably the same catalogue family as the unreadable
  400 x 400 "Bike Warehouse" 2velo.com album noted under Bikecology 1981; not compared.
- Dated inside it: "NEW" in 1978 = Shimano 600 EX and Dura-Ace EX groups, Uniglide
  freewheel and chain, SunTour Ultra-6, Sakae Laprade P5, Sunshine Hi/Lo hubs, Wolber
  Liberty, Michelin TS foldable clincher, HKK 2-Chain, Zeus alloy headset; "limited supply"
  Mavic, Weinmann and Super Champion rims.
- Almost everything Shimano, SunTour, Campagnolo, Wolber and Zeus Criterium / 2000 lists was
  already in the DB with 1978 covered (Shimano 600 EX / Dura-Ace EX 1978-84 rows, SunTour
  Cyclone / VX / Superbe, Wolber from data_source 235): no change.
- Changed (source_ref -> 246, 40 rows): year_to -> 1978 on SunTour 4772 V-Luxe; Phil Wood
  3478 Standard Flange, 3476 High-Low, 100 cartridge BB (descriptions rewritten); Zeus 4860
  2000 rear, 8857 2000 hub set, 3653 Criterium hubs, 3654 Gran Sport hubs, 3171 Gran Sport
  headset, 3168 2000 headset, 8853 2000 control lever, 8855 Criterium shift levers, 2026
  Criterium triple crank, 4049 2000 titanium pedals; 3756 Hi-E pedals; Hutchinson 9045
  Supersprint, 9046 80-GTX Corsa, 9047 Corsa Leggero, 6810 Krono Milano, 9050 Special Seta;
  9053 Michelin Fifty; 5004 Fiamme Strada red label; 5185 / 5180 Super Champion Medaille
  d'Or / Arc en Ciel; Cinelli 2801 64 Giro (70s), 2809 66 CdM early logo, 5337 Mod. 55, 9083
  Unicanitor 65; 9080 Sugino Mighty Custom. year_from -> 1978 on 3261 Campagnolo Hi-Lo
  (1980), Weinmann 7776 A124 and 5208 A129 (1979, first seen in the 1979 Chicken list),
  Sakae 7907 Royal P1 ESL post, 6663 Royal SL stem, 7901 Apex stem, 8234 Custom stem, 7886
  World Custom-SL bar (1980), 8789 Michelin Elan TS (1979; judgement: the "NEW Michelin TS
  foldable clincher"), 1398 Sedis Gold (1980). 3678 Bob Reedy pedals dated 1978 with a
  description.
- Added (21 rows, all 1978, group NULL): HKK Blue Sky Silver / Oro / Gold and HKK 2-Chain
  (Ultra-6) (new brand HKK, 669); Lambertini racing, smooth leather, suede and padded suede
  saddles (new brand Lambertini, 671); National tubular and clincher (new brand National,
  670); IRC Road Lite Z, High Racer Skinwall, High Pressure Gumwall; Hutchinson LL 240 and
  GTX 80 latex; Mavic Extra Legere; Dia-Compe Gran Compe Superbe, 500G and Gran Compe 710;
  Sunshine Hi/Lo hubs; Bullseye hub. category_brand links added for these.
- Not applied: KKT Pro Ace / Pro Vic / Top Run (existing rows cover the span or the name
  is ambiguous), Super Olimpic pedals (several Olimpic rows, no clear match), Dia-Compe
  730 x 810 (8929 is the 1964 Dia-Weinmann), Tange Levin (DB rows are undated variants),
  Rigida 13 mm, Fiamme Gold / Yellow Label (no single row). The Ideale saddle rows are
  filed under brand 580 "Tron & Berthet", which looks like a mislabelled brand; not
  changed here.

## Palo Alto Bicycle Shop catalogue — 1976 (blogspot "Catalogues divers: Revue 2 1976", data_source 245)

- `data_source` label "Palo Alto Bicycle Shop catalogue (1976)", country US. Source:
  https://labibleduvelodivers.blogspot.com/p/revue-2-1976.html (42 images at
  1276 x 1650, "CATALOGUES 1976 (n)", numbered from the BACK: image 01 = back cover, 41 =
  introduction and index, 42 = cover; printed page n = image 41 - n). Palo Alto Bicycle
  Shop, 171 University Avenue, Palo Alto CA, "Copyright 1976", 1976 USCF form in the back.
  A US mail-order retailer, like Bikecology, with its own catalogue numbers (T-, R-, H-,
  CS-, BB-, HS-, BR-, DR-, SE-, SP-) and gram weights. Components are pp. 1-30; pp.
  31-38 are shoes, cleats, clothing, touring bags, racks and a racing application, no
  category. Read 2026-10-21: all of pp. 1-30.
- Dated inside it: Alas cranksets "available as of May 15, 1976"; new for 1976 Stronglight
  105 / 105bis cranksets and the 651 / 650 bottom brackets, Cinelli N 1/Record stem,
  Universal CX, C.L.B. Professional and Galli Ti / 75 brakes, latex-tube Clement
  tubulars and Vittoria's sealant-valve tubulars, Campagnolo Super Record alloy headset.
  Duplicate catalogue numbering: BR-09 / BR-10 swap Model 51 and 61 between pp. 23 and 24,
  and the p. 20 toe-clip numbers clash with the Weyless pedals of p. 19.
- Most rows (SunTour, Shimano, Campagnolo derailleurs, shifters, hubs, brakes, Super
  Champion rims, Cinelli bars and stems) already covered 1976 or were done in the
  Bikecology 1976 pass: no change.
- Changed (source_ref -> 245, 31 rows): Clement year_from 1977 -> 1976 on 6755 Gran
  Sport 65, 6733 70, 6762 Paris-Roubaix, 6757 Grifo 61, 6763 Paris-Roubaix Seta, 8971
  Criterium Seta Extra, 6738 Campionissimo Seta Extra, 6761 Nuovo Super Seta Extra; 6891
  Vittoria Mondiale and 6892 Normalcross dated 1976; Universal 1086 CX (description),
  1082 Super 68, 1081 Mod. 61, 1080 Extra Mod. 51 (year_to -> 1976); 595 CLB Professionnel
  (description, taken as the 1976 "New C.L.B. Professional"); 2123 Maillard 700 (6 speed)
  year_from 1980 -> 1976; 1364 Everest Serie Special; 5483 Selle Italia Criterium
  (buffalo) and 5326 Cinelli Unicanitor Mod. 50 year_to -> 1976; 5656 / 5657 Ideale 90
  descriptions; 5906 STM (straight post) dated 1976; 9043 Weyless seat post 207 g; 100
  Phil Wood BB year_from 1977 -> 1976; 3818 Lyotard 65, 3815 Lyotard 460D, 3769 KKT Pro Ace
  descriptions; 2798 Cinelli 14 year_to -> 1976; 6492 Cinelli 1R early version 1970 ->
  1976-1979 (judgement: new in 1976, the winged-logo 1R starts 1980); 1920 Sugino Mighty
  Competition and 8890 Mighty Victory year_to 1973 -> 1976.
- Added (34 rows, all 1976, group NULL): Vittoria Vulcan, Granturismo, Supersport,
  Competizione, Giro d'Italia, Tour de France, Criterium, Record, Imperforabile,
  Supercross, Record Seta, Imperforabile Seta and Record (clincher); Galli Ti and Galli 75
  brakes; Maillard 700 (5 speed); Everest Oro and Everest Dural freewheels; the new
  brand Alas (brand_id 668: headset, Edramon, Super Competizione and Competizione
  cranksets, steel and titanium bottom brackets); Stronglight 105; Sugino Mighty Custom;
  Cinelli 63 Campione del Mondo, 19 Track and Unicanitor 65; Selle Italia Superlight;
  Lyotard 45; KKT S.P. Sprint; Weyless Road and Track pedals.
- category_brand links added for Alas (Bottom Brackets, Cranksets, Headsets) and Weyless
  (Hubs, Seat Posts): the Bikecology 1976 load had added Weyless hub and seat post rows
  without them, so the brand-by-category lists would not have shown them.
- Not applied: Regina Super Corsa Oro and Extra Black chains (names do not map onto
  our "Extra 50" / "Oro" rows), Fiamme Red / Yellow Label rims and Super Champion
  clinchers (no single matching row), Shimano Tourney hubs, Phil Wood medium-flange hub,
  Lyotard 23 Platform (ambiguous between the Marcel Berthet rows), Cinelli 65 / 66 bars and
  the M-71 pedal (existing rows are the 1980s versions or already well described), the
  Vittoria "Butyl" (a tube type). Selle Italia Superlight kept apart from 5504
  Superleggera (1978-79, 215 g, Allen-key nose): same maker and probably related, but a
  different construction as described. Out of scope: pumps, tyre sealant and
  carriers, spokes and tools, toe clips and straps, cables and housing, brake parts, Arnold
  bolts and bottle cages, shoes, cleats, clothing, racks and bags.

## Bikecology catalogue, 5th edition — April 1976 (blogspot "Catalogues divers: Revue 1976", data_source 244)

- `data_source` label "Bikecology catalogue, 5th edition (April 1976)", country US. Source:
  https://labibleduvelodivers.blogspot.com/p/doc-1976.html (116 page images at
  1276 x 1650, "BICYCLE CATALOG 1976 (n)", legible; printed page = image number - 2).
  Bikecology Mail Order, Santa Monica CA, (c) April 1976, "5th Edition, supersedes
  all previous editions and prices". A retailer: its own catalogue numbers (HPA,
  HDA, SU, HSI ...) beside the makers' numbers, AW / SW weights and 1976 USD prices.
  Components are pp. 1-55 (table of contents on the second image); the rest is
  clothing, shoes, bags, camping, complete bikes (Ron Cooper, Mondia, Bob Jackson,
  Masi, Windsor, Niko, Rossin; pp. 87-111, an `ingest-bike-specs` job), tools,
  lighting and books. Read 2026-10-21: every component page (pp. 1-55).
- Dated items inside it: new for 1976 Cyclone shift levers, Maxy 5 crank, Sunshine
  small-flange hubs, Elan clincher wheel (from May), Sunshine Super Pro Am stem
  (June); introduced 1975 TTT Record stem, Rally rear derailleur, Weinmann 500 de
  Luxe, Campagnolo 2040/1; Campagnolo Record pedals "till 1/1/76"; Super Record hubs
  "discontinued by Campy in 1975".
- Most rows were already in the DB with years covering 1976 (SunTour, Shimano,
  Campagnolo, Sugino, Dia-Compe, Weinmann, Mafac, Regina, SR, 3ttt, Cinelli,
  Stronglight): no change.
- Changed (source_ref -> 244): 26 rows. year_to -> 1976 on 8074 SunTour 3703
  Allegro, 5599 / 5600 Ideale 2001 / 2002, 2773 3ttt Touriste bar, 5180 / 5185 /
  5189 Super Champion Arc en Ciel / Medaille d'Or / Record du Monde; year_from
  -> 1976 on 5333 Cinelli Unicanitor #4, 7887 / 2913 SR World Custom / World
  Randonneur, 3602 Sunshine/Sansin low flange, 5091 Mavic Montlhery Legere, and
  (from 1977) Clement 6737 / 6731 / 8972 / 6732 / 8970; dated 1976-1976 (were
  undated) 5344 Cool Gear The Seat, 5609 Ideale 39, 5337 Cinelli Mod. 55, 3476 Phil
  Wood High-Low, 3733 East Rochester Tool & Die, 6810 Hutchinson Krono Milano, 5182
  Super Champion Etoile; descriptions rewritten on most; 5648 Ideale 80 description
  only. 5303 Brooks Team Professional year_from 2000 -> 1976 (judgement: the
  Bikecology "Professional", 532 g, is taken as 5303; title kept; the 2000 date was a
  decade placeholder and contradicted the 1970s Raleigh links).
- Added (all 1976, group NULL): 9042 Weyless WLS 1000 hub set, 9043 Weyless seat
  post, Mavic Elan rim, Hutchinson Supersprint / 80-GTX Corsa / Corsa Leggero /
  Super Corsa / Cross TR / Special Seta (9045-9050), Michelin Falco / Nibbio /
  Fifty / High Speed (9051-9054).
- Not applied (no row or not enough evidence): Regina "Gran Sport Super Corsa Oro"
  CH6 / CH6a and "Extra Black" CH5 chains, HKK chains (no brand row), Everest
  superlight CH8, Renold track chain, Sugino Mighty Custom SU2 / Maxy 5 / Maxy II
  SU3 (the DB has Maxy 3-bolt and Maxy 5-arm, not the same), Ideale 90TB / 90IR vs
  our "90 Speciale Competition", Cinelli bars HSI 63 / 65, Tange "Levin HS TL" (maybe
  3152 LV-11), Fiamme Red / Gold / Yellow Label tubulars, Tahei and Lambertini
  saddles, Belri bar and stem, Dura-Ace track hubs H740 / H840 / H741 / H841 (the
  numbers do not match our HS-741 / H-741 rows and HA-300 may be the same hub),
  Campagnolo Nuovo Tipo C1264-C1267 (we hold the 1251 / 1253 pair numbers). Out of
  scope: the Bikecology-built wheels (Hosteller, Tourist, Olympiad, Elan, ...), tubes,
  juvenile tyres, spokes, pumps, forks, tape and plugs, clothing and shoes.

## Bikecology catalogue — Summer 1981 (2velo.com, multi-brand US retailer)

- `data_source` label "Bikecology catalogue (Summer 1981)", country US. Source:
  https://2velo.com/bikecology-bicycle-catalogs/ (56 pages, `bikeNN.jpg` via
  i0.wp.com `?w=1400`, ~1220 x 1600, legible). Bikecology Mail Order, Los
  Angeles; warehouse sale 12 Sept 1981. A retailer, so only its own catalogue
  numbers (no manufacturer part numbers) and retailer-view descriptions. Read
  2026-10-20: pp. 5 (Dura-Ace EX), 8, 10, 12-19, 21-29, 33, 34, 45; the rest
  (bikes, frames, clothing, tools, bags, tubes, spokes, lights) is out of scope.
- Almost everything it lists was already in the DB with years covering 1981
  (Campagnolo Record / Super Record headsets, cranks, hubs and derailleurs, SR
  Four-Sir / Custom / SAS / New Royal / Laprade, Cinelli 1A / 1R / 64, Tange
  Levin 3152, OMAS, Chris King, SunTour Cyclone / VX, Shimano Dura-Ace EX, Modolo,
  Dia-Compe G, KKT Pro Ace, Clement tubulars, Sedisport). Second-half rows
  (derailleurs, brakes, pedals, hubs, rims, tyres, chains) were only
  spot-checked for presence, not diffed row by row.
- Changed (year_to -> 1981, source_ref -> this source): 5297 Brooks Professional
  Select (1979); 5656 and 5657 Ideale 90 Speciale Competition (to 1980); 1963
  Sugino Super Mighty Competition (to 1980; one bike spec links it); 1948 and
  1949 Sugino Mighty Tour double / triple (to 1980); 1856 Spécialités TA
  Cyclotouriste (to 1975). All guarded `year_to < 1981`.
- Not applied: candidate new rows (Selle San Marco Concor Maxi, Ideale 92
  Touriste Man / Lady, Sugino Super Mighty Custom) were not verified missing; the
  DB has Ideale "92 Diagonale" rows (1977) that may be the same saddle. The
  Brooks "Professional" here (532 g, chrome rails) is probably 5303, whose DB
  years (2000) contradict the 1970s bike links; not changed from this source.
- No ITM, Selle Royal, ISCA, Daido, Kusuki or mid-80s SR in this catalogue, so
  it closes none of the bike-link gaps that prompted the search.
- The other 2velo pages: Bike Warehouse (40 images at 400 x 400, unreadable),
  Cyclo-Pedia 11th edition (c. 1974, 72 pp: Huret, Simplex, Campagnolo, TA,
  Stronglight, Vittoria, Mafac, Weinmann, Ideale, 3ttt; brands already covered),
  Fiamme / Galli / Bocama (single-brand, not read).

## Holdsworth "Bike Riders Aids" — May 1975 (disraeligears.co.uk, data_source 260)

- `data_source` label "Holdsworth Bike Riders Aids (1975)", country GB. Source:
  https://www.disraeligears.co.uk/site/holdsworth_-_bike_riders_aids_1975.html (99 scans at
  `00_main_images/holdsworth_-_bike_riders_aids_1975_<page>_main_image.jpg`, page names
  front_cover, inside_front_cover, page_i ... page_xvi, page_1 ... page_80, inside_rear_cover,
  rear_cover; printed page n = bound PDF page n + 17). Holdsworthy Co. Ltd, London SE20, a UK
  mail-order retailer like Bikecology / Palo Alto; prices in GBP, weights in oz. Components are
  pp. 26-80; pp. i-xvi and 1-25 are essays, clothing, bags and bottles. Read 2026-10-23.
- Dated inside it: May 1975, "again in 1974 winner"; new = Campagnolo "Titanium Lightened
  Super Record Group" (ad only, with the "Super" Record titanium headset), Huret Challenger 2400,
  Evian-Racer centre-pull, GB Menton bar, Birmalux Sprint rim, Simplex Prestige 637 ("latest");
  Il Primo di Lusso stem's Allen bolt "new for 1974".
- Already covered 1975, no change: all Campagnolo (Catalogue 17a, data_source 7), Huret,
  Simplex (except 4583), Weinmann brakes and 133/144/161/162 levers, Universal 51/61/68, MAFAC
  Racer / Criterium / Cyclo-Tandem, Regina chains and freewheels, TA, Super Champion rims.
- Changed (source_ref -> 260, 37 rows): year_to -> 1975 on Simplex 4583 Prestige AR 637;
  Weinmann 7936 136 lever; GB 752 GB 77 (Coureur '77', description), 314 Super Hood, 2848
  Ventoux, 2847 Randonneur, 8473 All-Rounder, 6542 Norma, 6543 Nova (6541 Neta description
  only); TDC 3160 Continental Italia; Williams 2018 C34; Nylfor 3058; Chater Lea 3723 Sprint
  pedals; Cinelli 6501 Pista Steel stem (catalogue "Plain"); Fiamme 5006 Sprint rim; Wrights
  5706 W3SW (swallow). year_from -> 1975 on Sansin 3602 one-piece hubs; Lyotard 9085 45;
  Cinelli 9081 Mod. 63, 2804 65 Criterium, 5337 Unicanitor Mod. 55, 9083 Unicanitor 65 (the
  "Unica-Nitor 65/4 Campione del Mondo"), 5333 Unicanitor #4 (the 75/x "Tour de France"
  padded); Clement 6771 Seta Extra (No. 1), 8971 Criterium Seta Extra (No. 1 Bis), 8970 Seta
  Tipo 3, 9259 N. 10, 8972 Criterium Cotone (No. 12 Bis Criterium), 6737 CdM Seta (No. 13),
  6736 Campestre (No. 18), 6731 Clement 50 (No. 19); Brooks 5303 Team Professional (the
  catalogue's "B17 Professional", judgement). Dated 1975-1975 (were undated): Stronglight 153
  No. 34 BB, TDC 3157 Continental J, Lyotard 3812 45ter and 3813 460A.
- Added (40 rows, 1975, group NULL): D'Alessandro Silk / Cotton Imperforabile, Criterium,
  Cyclone, Worthy; Birmalux Sprint and High Pressure rims, Maes and Allrounder bars, alloy seat
  pin; Cinelli 18 Pista bar and Sacchi stem; Fiamme Maes bar and High Pressure rim; GB Menton;
  Gallet Junior; Clement Nuovo Alberto (made for Holdsworthy); new brands Il Primo (Giro di
  Sicilia bar, di Lusso stem), Allez (Maes bar), Van Schothorst (High Pressure, Endrick
  rims), Evian (Racer brake), Nicklin (N34, N200, N901 cranks), Canetti (7 tubulars), Kowalit
  (4 tubulars), YFC (Seamless), Matex, Merton (Coureur) saddles. Only items with a weight or
  size were added, as for data_source 259.
- Not added / unresolved: Weinmann USA Dual lever, Cherry centre-pull, Evian CLB B2 /
  Criterium / Tandem, TDC Super Set K, Suzue solid-axle hubs, Fiamme stem, WA Corsa pedals
  (maker unclear, possibly Way-Assauto), unnamed Renold / D.I.D. chains, Regina "Super Course"
  (probably 1376 Extra 50 Corsa), Universal hooded levers, Stronglight "49D" (DB 49A vs 49D
  rows), Cinelli alloy stem (1A vs 1R). Wrights W3 Swallow and Lyotard 45A were
  not inserted because 5706 and 9085 are the same parts.
- Merged (2026-10-23): 4940 "Birmalux Tubular Rims" (velobase source_id
  3185AC4D-FAD0-4E82-A2B4-5D506ACDDBD5, undated, 336 g actual, no bike_spec links) deleted
  into 9323 Birmalux Sprint, the only Birmalux tubular rim; its measured 336 g kept on 9323.
- Merged (2026-10-23): 634 "Evian (relabelled CLB Racer Course 73)" (velobase source_id
  8556B34A-976E-43C4-A66B-572F9CB01406, 1973-1977, no bike_spec links) deleted into 9340
  Evian Racer; 9340 widened from 1975 to 1973-1977 and its description notes the CLB relabel.

## La Bicicletta Guida '85/86 - I componenti da corsa (Nov 1985, 41 scans, disraeligears.co.uk), data_source id 259

- Source: https://www.disraeligears.co.uk/site/la_bicicletta_guida_8586_-_i_componenti_da_corsa.html
  (scans at `00_main_images/la_bicicletta_guida_1985_november_-_i_componenti_da_corsa_scan_NN_main_image.jpg`,
  01-41, 1560 px, legible). Label `La Bicicletta Guida '85/86, I componenti da corsa (1985)`, country IT.
- An Italian magazine's buyer's guide, **not a manufacturer catalogue**: tables per
  category of model / material / weight / size / lire price, about 60 makers, mostly
  without part numbers (codes only for Gian Robert, Miche, Ofmega, OMAS, Nisi,
  Regina). Read as a snapshot of what was on sale in late 1985. It never moves
  `year_from` below 1985 and never caps `year_to`.
- Scan map: 1-2 stems; 3-4 rear derailleurs, chains; 5-8 rims; 9-11 handlebars;
  11-13 front derailleurs; 13-14 brakes; 14-16 cranksets; 16-17 brake levers;
  18 shifters; 19-20 bottom brackets; 20-22 hubs; 24-25 pedals; 29 seat posts
  (**the section's first page is missing**, so it opens mid-list at Miche; the
  Campagnolo and Cinelli posts are probably lost), disc wheels, start of freewheels;
  30 freewheels, saddles; 31-32 saddles; 34-36 headsets; 39-41 tubulars.
  Out of scope: bottles, cages, toe straps / clips, tape, pumps, spokes, lugs /
  dropouts, Columbus and other tubing, frame jigs.
- Year rule applied: NULL or >1985 `year_from` -> 1985, NULL or <1985 `year_to`
  -> 1985 (undated velobase rows became 1985-1985, as in earlier passes).
- **195 rows updated** (`source_ref` -> 259). The full list with old -> new years
  is in the session report; by brand: Gipiemme 25, Clement 16, Ofmega 15,
  Modolo 14, Cinelli 11, Fiamme 10, saddles (Selle Italia / Royal / San Marco /
  Iscaselle) 14, rims (Nisi, FiR, Ambrosio, Vittoria) 29, 3ttt 6, Universal /
  Regina / Everest 16, Rino / Galli / Gian Robert / OMAS / Miche / Michelin /
  Cosmos / Gimondi / Pneudan / FT / Silva / Cobra / ITM about 35, Campagnolo 4
  (209 1040/1A NGS levers 1984 -> 1985; 43 4031 Super Record BB 1982 -> 1985;
  7015 Triomphe leisure RD 1986 -> 1985; 2073 7-speed alloy freewheel
  description). Notable start-year moves: 3ttt 8296 AR84N 1986 -> 1985, 8302
  Aero Dynamic Competizione 1987 -> 1985; Modolo 374 Kronos levers 1986 ->
  1985; Cinelli 2814 Perfection 1990 -> 1985, 5338 Volare SLX 1988 -> 1985;
  Selle Italia 5503 Super Turbo 1992 -> 1985, 5518 Turbo SLG 1990 -> 1985; ITM
  6564 400 Racing 1990 -> 1985.
- **Retitles** (old names, for matching later sources): 4906 "Ambrosio Pista
  Color" -> Ambrosio Pistacolor; 5024 "Galli Top Crit" -> Galli Top Criterium;
  2816 "Cinelli L.A. 84" -> Cinelli 62 Los Angeles; 6090 "Modolo - Kronos
  Aerodynamic Control Levers" -> Modolo Kronos (shifters); 6889 "Vittoria Giro
  del Mundo" -> Vittoria Giro del Mondo. search_text rewritten on all five.
- Judgement matches, worth revisiting: Universal "MS 77" = 1084 Super 77;
  Cinelli "Mod. SA Pista" (10-13 cm) read as a misprint of 7097 2A Pista; the
  guide swaps the 65 / 66 bar names (65 Campione del Mondo, 66 Criterium + 66
  CdM), so the DB's 65 Criterium (2804) and 66 Campione del Mondo (2806) were
  extended; Fiamme "Etichetta" colours mapped to the DB's label rows (Oro Ergal
  -> 4992 Ergal, Verde -> 4995 Green Label, Rossa -> 5004 Strada red label,
  Nera -> 5005 Type 22 Black Label, Gialla -> 4999 Professional yellow label);
  3ttt Record seat post 230 g / 160 mm = 8850 500/1 Reggisella.
- **193 rows inserted** (1985-1985, UUID source_id, `source_ref` 259): only parts
  the guide gives a weight or a size for (user's choice, 2026-10-23); the ~110
  name-only entries were not inserted. New brands: Cycloman (3 stems), Cascella
  (Performance Strada crankset), CAM (Contak pedals), C.B.L. Brusati (Hickory
  wooden rim), Silpa (4 saddles), plus 12 category_brand links. Largest groups:
  Vittoria 17 rims and tubulars, Nisi 17 coded rims (00100 ... 00840),
  Gipiemme 19 (200 RS/CC/RT/CT/R1 BBs, Crono Special Cross / Tandem / Triplo
  cranks, Minisprint), San Marco 14, Gian Robert 11 (1005-3005 shifters, 1009,
  1012, 1014-1018), Ambrosio 12, ITM 11, Pneudan 10, Miche 9 (1301, 1302,
  1601-1603, 1902, 1905, brakes), Cosmos 8, FiR 8, Pirelli 6, Royal 6, Ofmega 6,
  Clement 5, Hutchinson 5; one Campagnolo row, "Gran Sport (1980s)" hubs
  (548 / 524 g; no 1980s GS hub row existed).
- No deletes.
- Left alone (the guide can't say which version it means): Ofmega Mistral RD /
  shifter generations, Premier shifter generations, Competizione hub/crank
  versions; Gipiemme Cronosprint 800-series derailleurs, Cronosprint Classic /
  Economic brakes and cranks vs 700CC / 100 CC, Special hubs 3352; Rino Crono
  Nero 2274, Criterium headset types, Supercrono vs Crono RD; Ambrosio Montreal
  and the Elite / 19 Extra / Aero family (Aerodynamic, Aero Elite, Elite, 19
  Extra not inserted); Modolo Corsa brake versions; Clement Mirage, Ritmo,
  Criterium sub-models; Vittoria Nuovo Pro 260 (guide's Nuovo Pro is 290 g);
  Nisi Countach, Toro, M20 / Pista Speciale (00120 / 00150); OMAS Big Sliding
  hub articles 101 ... 1100 (only two DB hub rows); Gian Robert Campione RD
  types and Competition hub finishes.
- Unresolved: Campagnolo Super Record hubs are still sold here in 1985, but the
  DB only has Ti-axle 4011 / 4014 rows dated 1974-75, so a 1980s Super Record hub
  row may be missing. Galli hubs are headed "Galli Maillard" (Maillard-made).
  The missing seat-post page.

## Ron Kitching "Everything Cycling" — Accessories, Tubulars and Sundries, June 1984 (disraeligears.co.uk, data_source 261)

- `data_source` label "Ron Kitching Everything Cycling (1984)", country GB. Source:
  https://www.disraeligears.co.uk/site/ron_kitching_everything_cycling_-_1984.html (74 scans at
  `00_main_images/ron_kitching_everything_cycling_-_1984_<page>_main_image.jpg`, front_cover,
  page_1 ... page_72, rear_cover; printed page n = bound PDF page n + 1). Ron Kitching, Cycleparts
  International Centre, Hookstone Park, Harrogate: the UK importer / wholesaler of SunTour, TA,
  Zeus, Dia-Compe, Wolber, Milremo and others. GBP ex VAT, gram weights for nearly everything;
  pp. 53-59 and 65-66 are weight / availability / tubular-use tables (useful cross-checks).
  Components pp. 2-52 and tubulars 62-64; bags, lighting, pumps, bottles, toe clips, shoe plates,
  tape, cables, spokes, tools, books, stands and racks out of scope. Read 2026-10-23.
- "NEW" = new to Kitching's UK range: SunTour Superbe Pro II RD-5200, Superbe II RD-5300, LE
  Tech RD-5900 / FD-3200, Cyclone RD-6000 / FD-3300 (the table's "Cyclone III"), CW-5000, BH-1500 /
  BH-1600 / BH-2000, CB-2200, Cyclone CB-7000/8000, LD-3700/3750, SP-2000/2100, MS-1400 XC-V; Zeus
  Supercronos brake and FD, New Racer crank; Dia-Compe DC/QS/GX-630N, RGC-400, 204C, DC981,
  NGC982; Cinelli Domino and Volare; 3ttt AR 84; Milremo Pro UL; Fontana tubulars; Sup'air 240;
  Nitto B801 / MT-1; Win MT-28; FAG L66; ATAX Polypro.
- Already covered 1984: almost all SunTour (Catalogs 61 / 62, data_source 88 / 90), Mavic
  (84-85, 114), Cinelli 64-67 and stems, 3ttt Record range, Araya ADX-1/3/4, Stronglight 107 /
  650 / 651, Nitto 185 / Crystemblue.
- Changed (source_ref -> 261, 151 rows; full list in the session report): SunTour gap rows (16:
  4684 RD-3400 AG, 8268 FD-2050, 2599 FD-2100, 6276 LD-1600, 8262 / 8264 / 8275 RH-1000 / 1500 /
  3100, 5933 SP-1000, 6694 RS-1000 to 1984; 6278 LD-3700, 7826 LD-3750, 6308 LD-3600, 464 CB-2200,
  1052 CB-6100, 7832 SP-2100, 5935 SP-2000 from 1985 to 1984); Dia-Compe 20 rows dated 1986 by
  data_source 102 / 209 now from 1984; Zeus 26 (New Racer / Gran Sport / Gigante / Pista /
  Criterium to 1984, 2000 Titanox BBs and freewheels, Supercronos descriptions with code numbers);
  Spécialités TA 25 rows from the 1975 TA catalogue to 1984 (incl. Tevano 1863 / 1864); Wolber 16
  tubulars; Vittoria 8, Cinelli 8, Milremo 7, Ideale (brand Tron & Berthet) 6, MKS 5, Lyotard 4,
  3ttt 2, Ambrosio 2 and singles for ATAX, Bador, Bullseye, FAG/Nadax, Lightrace, Araya, San Marco,
  Super Champion, Strong, Stronglight, Tange, Arius.
- Retitle: 6940 "Wolber Strada 801" -> Wolber Strada 80 (search_text rewritten). Data fix: 3859
  MKS Esquartz 102 years 1880-1880 -> 1984-1984.
- Added (108 rows, 1984, group NULL; weight or size only): Zeus 7, Milremo 38, Cinelli 6,
  Vittoria 9, Wolber 4, Mavic Monthlery Route / Pro, Fiamme Bussola, MKS GR-8 / 505 / 707, Nitto
  B801 / MT-1, ATAX 3, Bador stem, Bullseye BB and pedals, FAG L66, Lightrace TTS Super BB; new
  brands Lion (9 tubulars), Fontana (3), Sup'air (2), Izumi (3 chains), Enuma, Jaguar (3 saddles),
  Conpy, Cypari (2 brakes), Win (4), Silver Star. A "Mavic GEL 280" insert was dropped: 5066
  "G.E.L. 280" already covers it.
- Merged (2026-10-23, user-approved): 9081 "Cinelli 63 Campione del Mondo" (source_id
  c54eeecb-cd89-11f1-a2df-02fea3763e8d, 1975-76, from data_source 260 / 245) deleted into 7096
  "Cinelli Mod. 63, Campione del Mondo", now 1975-1984, description consolidated (reach / drop
  corrected to 76 / 147mm per the Kitching table; the old text had them swapped). 2602 "SunTour
  Compe-V" (velobase source_id F2E28746-7806-4B13-B427-BC322E8FC324, 1974-79, 140.5 g avg, no
  links) deleted as a placeholder for 2603 "3701 / FD-1100, Compe-V (5-hole)".
- Judgement / unresolved: SunTour BH-2000 is "Cyclone" here, "Sprint (road)" in the DB (7808,
  unchanged); LD-2800 "Microlite" = 6307 Power Thumb Shifter (155 g); Tevano 1863 / 1864
  (velobase 1970) moved to 1984-1984 on 2026-10-23: the c. 1975 TA catalogue (206) has no
  Tevano crankset (TEVANO is only its distributor) and this catalogue calls Tevano "the newest
  name"; 1863's description now carries the AX5000 spec, 575 g measured kept; left
  alone for unclear versions: Zeus 2000 / New Racer cranks, New Racer brake variants, Lyotard
  136R types, Ideale 88 rivet variants, 3ttt Regolabile versions, Dia-Compe G-500N / DC-500N,
  SunTour PSL-M / PDL-M / SLW / Mighty Shifter old-vs-LD codes.

## La Bicicletta Guida '88 - I componenti da corsa (Feb 1988, 54 scans, disraeligears.co.uk), data_source id 262

- Label `La Bicicletta Guida '88, I componenti da corsa (1988)`, country IT. Source:
  https://www.disraeligears.co.uk/site/la_bicicletta_guida_88_-_i_componenti_da_corsa.html (scans at
  `00_main_images/la_bicicletta_guida_1988_february_-_i_componenti_da_corsa_scan_NN_main_image.jpg`,
  01-54, only ~436 px wide: model names and weights legible, fine print marginal). The next edition
  of the '85/86 guide (data_source 259, above); same table format. Miche is printed as "FAC
  MICHELIN" (the company F.A.C. Michelin). **The scans stop part-way through the Vittoria
  tubulars**, so the rest of the tubular / clincher section is missing. Read 2026-10-23.
- Scan map: 1-3 stems; 4-5 rear derailleurs; 5-6 seat posts; 6-7 chains; 7-11 rims; 12-14
  brakes; 14-18 handlebars; 18-19 front derailleurs; 19-21 cranksets; 22-23 brake levers; 23-24
  shifters; 24-26 bottom brackets; 26-28 hubs; 29-32 pedals; 35-37 disc wheels; 37-39 freewheels;
  39-41 saddles; 43-45 headsets; 50-54 tubulars. Out of scope: bottles, cages, toe straps / clips,
  tape, pumps, spokes, frame fittings, tubing (Columbus, Falck, Oria, Tensor), machinery.
- vs 1985: Campagnolo C-Record ("Record"), Croce d'Aune, Chorus, Nuovo Victory / Triomphe, LX / LZ,
  Doppler, Ghibli / Khamsin, Sigma / Omega / Lambda rims new, Super Record / Nuovo Record / Rally
  still listed, Gran Sport / Valentino / 980 / 990 gone; Ofmega derailleurs now Simplex-based
  (Master / Linea / Vantage / Alpine LP); Galli "Aris" Team groups (Sachs-Huret); Miche indexed
  (SunTour-made) derailleurs and a new Primato group; Rino, Everest chains, Cycloman, Bador, Vetta,
  Silpa gone; Gommitalia tubulars new; MTB parts throughout.
- Year rule: year_to < 1988 -> 1988, year_from > 1988 -> 1988, undated -> 1988-1988. No
  descriptions changed (the 1985 pass wrote most specs; the 1988 weights mostly repeat them).
- Changed (source_ref -> 262, 277 rows; full list in the session report b88-report.txt): Campagnolo
  31 (Super Record RD 4152 / FD 7012, 2313 / brake 583 / levers 231 / pedals 3716, 3717 / headsets
  2968, 2967 / shifters 6001 / crank 1509; Nuovo Record RD 4127, crank 1496, 1498, BB 30, hubs
  3259, 3260, Superleggero pedals 3709, 3715; Rally Touring 4083; Record Pista BB 40 and hubs 3270,
  3271; Victory / Triomphe brakes, levers, hubs, pedals, BB 44, RD 4157; Cobalto 561; LX FD 2319);
  rims 46 (Ambrosio, Fiamme, FiR, Gimondi, Nisi, Galli); Ofmega 31; Gipiemme 23; tyres 47 (Clement,
  Pirelli, Pneudan, Vittoria, Michelin 6836 / 6832); bars and stems 42; Miche / Modolo / Universal /
  Saccon 26; Gian Robert, OMAS, FT, Everest, Regina, saddles 31. Start years moved down to 1988:
  Modolo 6597 Flash / 6593 Equipe stems and 2869 Equipe bar; 3ttt 8309 A2002, 8310 Triathlon, 8304
  Carbonair, 2764 CPR, 2762 CMOS; Ofmega 1686 Alpine LP crank (was 1997); Miche 4351 / 2413 / 6089
  Competition RD / FD / shifters (were 1989); Regina 1389 America Superleggera, 1377 Super Racing,
  8799 50 Silver chains.
- Added (34 rows, 1988; weight or size only): Miche Primato crank / BB / aero post / levers / Index
  shifters, Superfast RD / FD / crank, Monolithic crank and pedal; Ofmega Linea RD, Alpine LP RD /
  FD / pedal, Alpine and Mountain MTB brakes, Mistral hubs, Mountain pedal; stems Cosmos Super and
  Double M.Bike, Gian Robert Competition, Gipiemme Crono Special, ITM 500 SL / 500 ATB / Pioneer,
  Modolo Speedy and Master SSC; Ambrosio Aerodynamic (430 g; kept apart from 4890 "19 Extra Elite
  Aero dynamic", 465 g) and Aero Elite; Nisi Ziggurat and Dart MTB rims; Michelin Hi-Lite Road and
  Super Elan clinchers; Campagnolo Doppler shifters.
- No deletes. Left alone for unclear versions: Campagnolo C-Record first-gen rows, 7005 Super
  Record short reach, 8812 Syncro v1; Cinelli 64 / 66 logo variants; Ofmega Competizione / Linea
  crank and FD versions; Gipiemme Crono Sprint 800-series and Sprint seat-post types; Nisi Countach
  / Laser eyelet variants; Iscaselle Tornado covers; Vittoria Corsa CX (6880 / 6881); Clement Ritmo
  LTX 55. Not added (no weight): Galli Aris groups, Cascella, Saccon levers, Royal / San Marco
  posts, Selle Italia Personal, Gommitalia tubulars, Iscaselle Time / Record, Campagnolo Ghibli M 25
  (the DB has M23 rows covering 1988).

## La Bicicletta, July 1984 - Guida all'acquisto: le bici da turismo (8 scans, disraeligears.co.uk), read 2026-10-24, not ingested

- Source: https://www.disraeligears.co.uk/site/la_bicicletta_1984_july_-_guida_allacquisto_le_bici_da_turismo.html
  (scans at `00_main_images/la_bicicletta_1984_july_-_guida_allacquisto_le_bici_da_turismo_scan_NN_main_image.jpg`,
  01-08, 1560 px, legible). No `data_source` row was created.
- **Not a component catalogue.** A buyer's guide to complete city, touring, folding and children's
  bikes: model / frame / wheels / colours / fittings / price in lire. Part 1 of 2 and covers makers
  A to D: Atala, Aurelia Dino, Battaglin, Benotto, Bianchi, Biemmezeta, Bibici, Bicipeg, Bottecchia,
  Carraro, Ceriz, Chiorda, Dei. The sequel (E to Z) is in issue no. 8, August 1984; not found yet.
- The fittings column is house parts ("freni a filo", "cambio 5v", "manubrio piega inglese") with
  makers named only as a brand and no part number: Suntour 10v, Modolo brakes, Ofmega headset and
  groups, Huret, Simplex 3v, Sturmey Archer 3v, Mauri, Universal, Ambrosio, Gian Robert, GPM. The
  only model-level names: Campagnolo 980 (1984 Bianchi Stelvio, Bottecchia Dolomiti), Campagnolo GS
  (Biemmezeta Portofino), Campagnolo NV derailleur and NT hubs (Dei Gran Turismo, Turismo 5V).
- **Effect on the DB: none.** Campagnolo 980 (rear 4087 1980-85, front 2279 1980-86), Nuovo
  Valentino (4079, 2301) and Nuovo Gran Sport 3500 (4085) already cover the years; the NT hub is not
  tied to a row. Brand-only text lands in the `brand_only` class of `/linkCoverage`.
- Left as a bike source: ~90 city / folding / kids' models, low value for link coverage (brand-only
  or house parts). If ever loaded, use `ingest-bike-specs`. Part 2 (August 1984) is the more useful
  half: Colnago, Legnano, Peugeot, Raleigh and similar makers fall there.

## JBM "Japan's Top Bicycle Parts Makers" — July 1974 (disraeligears.co.uk, 24 scans, data_source 271)

- Source: https://www.disraeligears.co.uk/site/jbm_-_japans_top_bicycle_parts_makers.html
  (front cover, pages 1-22, rear cover; scans at 00_main_images/..._page_N_main_image.jpg).
  Rear cover code "JBM 0774". Marketing group catalogue for six makers: Takagi
  (pp. 5-6), Tange (7-8), Araya (9-10), Sakae/SR (11-14), Kyokuto/KKT (15-17),
  Shimano (18-22). Page 3 calls the spotlighted lines "models for 1974".
- Shimano was already covered by the '72/'73/'74 catalogues (sources 60/61/65/178), so
  JBM was confirmation plus a few gaps. Out of scope (no category): Tange frame sets,
  fork/stay ends, forks, chain guards, toe clips/straps/strap ends, quick seat pins,
  spokes, spoke protectors, tools, twist-grip/trigger levers (already rows 7393/7394).
- Rows added (56): Shimano L-160/L-170 Finger Tip EM, L-395 Silver Stem; Sakae Custom-5,
  Apex-3B, Apex-S, Silver Cotterless, Racer bar, Custom-P1, 11 stems (RY-110, RY-90/70,
  SR-100AH, SR-80AH/E, SR-60AH/E, SR-50E/40E, SW-60LB, SW-60, SW-35, Dia Star-R/A,
  SB-50DM); Araya Model 1/5/5W/7A/10/17; KKT RT-SF AL, RT-SF, RT-SR, RT-GL, RT-A, RT-B,
  F-1, RM-3, No. 50 Racer, Pro Ace (Road)-P.A; Tange Unit Hanger, R-401, TS-401, JL-401;
  Takagi 12 cranksets + 5 chainring sets (first Takagi rows beyond "Tourney XT").
  Year range 1974-1974 on all new rows (only attestation, not an end date). Exercisers
  (KKT Exerciser-F, DX-2) deliberately not ingested.
- Rows adjusted (25), old values for revert:
  - year_from moved earlier (JBM is older than the setting source): 1749 Royal-5 1980->1974
    (spec differs: 1974 forged alloy milled 5-pin, c.1982 14S super duralumin), 8821 GS-3
    1980->1974, 2913 WR 1976->1974, 7887 WS 1976->1974, 7889 CT-L 1980->1974,
    7891 RN-L 1980->1974, 7896 NR-S/L 1980->1974, 8928 Araya 7B 1978->1974,
    9086 KKT S.P. Sprint 1976->1974, 3770 KKT Pro Ace Pista 1980->1974 (folded in the
    Pro Ace (Track) 68-2 pedal rather than inserting a new row).
  - NULL years set 1974/1974: 3773 RT-E, 3774 SPA, 3144 Tange MA-60, 3141 Tange Falcon.
  - year_to 1973->1974: 7384 Shimano L905-L908 Round Stem (JBM lists W-Round Stem L-908/906,
    though the Jun 1974 catalogue (65) does not).
  - Retitles (old title in case a later source uses it; search_text rewritten):
    7374 "Shimano D220, Lark S.T.O." -> "Shimano D220, Lark SPO";
    8766 "Shimano L-293 / L-294 / L-296, Unishift" -> adds L-298;
    3774 "KKT/Kyokuto SPA" -> "KKT/Kyokuto S.P. (Sprint) SPA, light alloy";
    3775 "KKT/Kyokuto Top-Run" -> "KKT/Kyokuto T.P. (Top Run)";
    3769 "KKT/Kyokuto Kyokuto Pro Ace, (Road)" -> "KKT/Kyokuto Pro Ace (Road)";
    3770 "KKT/Kyokuto Kyokuto Pro Ace Pista NJS" -> "KKT/Kyokuto Pro Ace (Track), Pista NJS".
  - Descriptions rewritten/enriched: 7376, 7412, 8766, 1734, 1749, 8821, 5853, 4917, 4918,
    8928, 3769 (JBM says forged light alloy body; the 1976 source 245 says all-steel; both
    kept, labelled by year), 3770, 3773, 3774, 3775, 9086.
- Left as is / unresolved: Pro Ace (PA) row 3771 (1980 superlight) is a different part from
  the 1974 "(Road)-P.A with reflector" (new row). Catalogue spellings "Randnner" (World
  Randnner, Randnner-L) read as typos for Randonneur and matched to WR / RN-L. JUN-50 (6660)
  confirmed, no change. JBM weights for KKT pedals are probably per pair but are not stated.
  No deletes or merges.

## Ten Speed Drive Imports (US importer) catalogue, 1983 — printed late 1982 (bulgier.net, 17 JPGs), data_source 279

- Source: http://bulgier.net/pics/bike/Catalogs/tsd82-83/ (https fails on the EG
  proxy with a certificate error; plain http works). Files 1.jpg-9woodrup.jpg =
  printed pp 1-17 (9acinelli...9hconcorsaddles are pp 10-17, 9woodrup is p 9).
  The TOC runs to p 28: Sergal, Brancale, Detto Pietro, Pavarin, Campagnolo (p 24),
  Columbus, Regina (p 26), Cobra, Mariplast and terms are not scanned. Dated by
  "Guerciotti 1983 Framesets", the Ambrosio Hypothesis "new ... mid 1983" and a
  July 1982 Bicycling quote. Importer's selection, not full maker ranges, so no
  year_to was capped from absence. country = US.
- Component pages: Cinelli bars / stems / saddles (p 11), Vittoria tubulars (12),
  Clement tubulars (13), Silca pumps (14, out of scope), Ambrosio rims (15), Mavic
  rims and Alpina spokes (16), San Marco Concor saddles (17), Campagnolo
  pantographed parts (8). Bike pages (Guerciotti, Ciocc, Cinelli, Woodrup) were not
  loaded; they are bike-catalogue material.
- year_from -> 1983 (old values for reverting): 6900 Vittoria Special Pro 1984,
  9428 Corsa CG 1984, 9244 Pavè 1985, 9433 Pista CS 1984, 6777 Clement Super Condor
  1985, 4899 Ambrosio Metamorphosis 1984, 9481 Aerodynamic 1988, 4898 Hypothesis
  1985, 9368 Cinelli Mod. L. Strada (= "Mod L Ultralight") 1984, 9298 San Marco
  Concor Max (= "Concor Maxi") 1985. All earlier moves, not later ones.
- NULL -> 1983-1983 (bare velobase rows, descriptions added): 6767 Clement Ritmo
  LTX 55, 6759 Clement Mirage Servizio Course, 4890 Ambrosio 19 Extra Elite Aero
  dynamic.
- year_to -> 1983: 6880 Vittoria Corsa CX Servizio Corse (1980), 6737 Clement
  Campionato del Mondo Seta (1981), 8972 Criterium Cotone (#12 Bis Criterium
  Cotton, 1981), 8970 Seta Tipo 3 (#3 Pista Seta, 1977), 6732 Sei Giorni (#8 Six
  Day, 1977), 8973 Gentleman (1977), 4889 Ambrosio 19 Extra Elite Durex (1980), 4888
  19 Extra Elite (1980), 4902 Montreal Durex Crono (1980), 5335 Cinelli Unicanitor
  #3 Buffalo (#3 Nitor Tour de France, 1982). Year-ranged overrides on 8970 / 8972
  / 8973 still fit. Description only: 4913 Ambrosio Montreal Durex.
- New (3 rows, 1983-1983): 9770 Clement Grinta (rain tubular), 9771 Ambrosio Off
  Road Durex (26 x 1.75), 9772 Selle San Marco Concor Junior.
- Name map used (catalogue -> row): Clement #1 Bis Criterium Seta Extra -> 8971,
  #6 Criterium Seta -> 6748, #12 Bis Strada 66 -> 6775, #1 Pista Seta Extra ->
  6771; Concor SC -> 5547 Supercorsa; Mavic Grise SSC -> 5112 Paris-Roubaix SSC, E2
  -> 5090 Module E2 Argent.
- Flagged, not changed: 6740 Clement CF 2001 (1970-1988) is "Clement's newest
  model" here, contradicting the velobase 1970, but 6741 CF 2001/T is dated 1980,
  so not moved later; Cinelli Mod. 65 "new" is a US-launch remark (in the 1982
  Cinelli brochure); Concor SL 305g ambiguous between 5552 Superleggera (260g) and
  9295 Supercorsa SL; Ambrosio Synthesis Durex Pro (400g, 22mm) matches neither
  4910 (310g) nor 4911; Ambrosio anodised Montreal vs the garbled 4914; Campagnolo
  pantographed / engraved parts not added as rows.

## Duplicate report `review` pass (2026-10-29, user's go-ahead)

69 `review` rows: 46 reclassified as configurations (classifier words added in
`duplicate-classify.js`), 7 marking rows kept in `REVIEWED_VARIANTS` (2021, 2033, 862, 2057, 3113,
1896, 5798), 5 deleted or merged, 11 left for a source.
- Deleted (all velobase or bare, no `bike_spec` links, no overrides): 1885 "Stronglight 107
  (variation 2)" (1981, 635g, src 282, `1BE4D7C5-71DE-4BE4-A027-96CDAF306827`; weight already in
  1883); 388 "Modolo Speedy (variation 2)" (1970-80, `B18EC253-4202-4E9A-923B-8DAF9723CD43`,
  survivor 386); 2723 "Sturmey Archer AW" (no years, `06CCAAD7-45EB-40A8-9DC8-49D71FE87F92`,
  siblings 2724 / 2725); 1729 "Sachs New Success" (no years, 640g Actual complete with rings and
  bolts, `015218AC-C4C5-48D0-8D05-6E80FDA49C66`; weight folded into 1730); 798 "LAM [Super-Dural]
  Course" (no years, `988012E7-A52C-4836-BF1A-E954616811BA`; marking noted on 811).
- Merged later the same day (user's call, no evidence either way): 6036 "Galli (Galli Approved, New
  Success)" (`4ECD396E-5AF1-458B-8B51-F539E3547383`) into 6035; 767 "Gipiemme Special (hex bolts)"
  (`332A7EE6-6BB4-44CF-8219-434C5DA44665`) into 766; 6249 "Sturmey Archer HSJ-508, 4-speed"
  (`1FF558D6-B486-4F15-B46E-0D80A5077530`) into 6250 (Brass); 6645 "Pivo 75 (with crescent)"
  (`80062252-5C81-4BA9-BD01-7AD2744680BE`) into 6644. Each survivor's description notes the variant;
  no links or overrides.
- Still `review` (7): 6641 Pivo track, 716 Favorit F2671/6-2, 8461 Araya 7X(N) (BMX, real), 5044 Mavic
  (1960's?) 410g, 5655 Ideale 88 smaller rivets, 6426 3ttt Mutant, 6973 Mavic Comète ± (real).

## Palo Alto Bicycle Shop catalogue — 1978-79 (VeloBase `Palo Alto Shop Catalogs/PaloAlto+78-79.zip`, 48 JPGs, data_source 292), 2026-10-30

- Source: 48 page images `78-79 Palo Alto00NN.jpg` (no 0037; the image-to-printed-page mapping is not constant,
  roughly printed page = image + 2 up to p. 30 then shifting, so cite printed pages), "Copyright 1978"
  (a 12-tooth cog is noted as late 1978), Palo Alto Bicycle Shop, 171 University Ave, CA; country US. Index:
  pedals 12-13, hubs 14-15, wheels 15-16, rims 17, freewheels 18-19, chains 20, handlebars 27, stems 28,
  brakes and headsets 29-30, derailleurs 31, shifters 32, superlight parts 33, tyres 37-40, saddles 42-44,
  seat posts 44, cranksets and chainrings 45-47, bottom brackets 47-48. Clothing, books, touring, tools,
  spokes and frames not read. Transcribed by five Sonnet subagents into 203 records, matched against the DB
  by group agents, then corrected by hand.
- Result: 98 existing rows matched (79 needed nothing). 9 `year_to` -> 1978: 6781 Clement Veltro (was
  1977), 8069 V-T Luxe, 9056 Vittoria Granturismo, 9058 Competizione, 9060 Tour de France, 9062 Record,
  9063 Imperforabile, 9069 Galli 75, 9072 Everest Dural (all were 1976). 8 `year_from` -> 1978 (earlier;
  old values): 5255 Avocet Touring II 1980, 5258 Racing I 1980, 6277 Cyclone shifter 1980, 7097 Cinelli 2A
  1982, 9117 Touring III 1981, 9118 Touring WII 1981, 9120 Racing WI 1981, 9121 Racing WII 1981. 2243
  Pro-Compe Ultra-6 filled 1978. 19 descriptions enriched. 14 new rows (1978-1978): Phil Wood Platform
  pedal, Avocet Model I high flange and Model III hubs, Rigida 13-19 27x1 / 700Cx1 rims, Cyclo Alloy
  5 speed, Avocet seat post, Cinelli headset, Sugino Mighty Custom and Mighty Victory chainrings (9899, 9900),
  Sugino Mighty Custom/Victory BB, TA non-sealed BB, Clement Elvezia 75, Cycle Pro National 1 1/8 clincher.
- Rejected on review: matches to the Avocet Model I / II hubs "(by Ofmega)" 3189 / 3190 / 3191 (later parts);
  year extensions on 3712 (Record Pista 1960-67) and the Sugino Mighty Competition rows 1326 / 1920 (may be
  the pre-Super-Mighty model; 935g vs 900g on 1963); "Record Seta" with no brand; new rows for Record Road /
  Track Black pedals (finish variants), Christophe toe clips (no category), Cyclo Pan kits, SunTour
  "Standard" levers; the agents' claim that no Ti chain exists (1391 Extra 50 Titanio does).
- Still ambiguous (38 records, not loaded): Regina Supercorsa Black / Oro / Record Oro chains and Super Corsa
  Oro 5 / 6-speed freewheels (Extra 50 family, no proof), Super Champion 27x1 / 27x1 1/4 / 700C clinchers
  and Rigida 16-22 clinchers and Fiamme Yellow Label clinchers (no model names that match the DB), Cyclone
  front derailleurs, Cinelli 1/A stems by logo era, Stronglight / TA ring variants.
- Closed TODO gap: Sugino Mighty Custom (a second source; Maxy II is not in this catalogue). Not closed:
  Regina Super Corsa Oro chains, Fiamme / Super Champion clinchers.



## Palo Alto Bicycle Shop catalogue — 1979-80 (VeloBase `PaloAlto+79-80.zip`, 52 JPGs, copyright 1979, components pp. 1-33), 2026-10-30

- `data_source` label "Palo Alto Bicycle Shop catalogue (1979-80)", country US. Same method as the 1978-79 entry above: four
  Sonnet subagents transcribed image ranges (195 records), five group agents proposed the diff (111 match, 43 ambiguous, 25 skip,
  16 new), reviewed by hand; this time the corrected plan was loaded without a separate go-ahead (noted to the user).
- Changed (old values for reverting). `year_to` -> 1979 on 15 rows: 9892 Avocet Model I (high flange) (1978-1978); 9893 Avocet Model III (1978-1978); 8260 SunTour US-6000, Winner Ultr (1978-1978); 2243 SunTour Pro-Compe (Ultra-6) (1978-1978); 9896 Cyclo Alloy (5 speed, custom (1978-1978); 9897 Avocet Seat Post (1978-1978); 2801 Cinelli 64 Giro D'Italia (70 (1970-1978); 2809 Cinelli 66 Campione del Mond (1960-1978); 9069 Galli 75 (1976-1978); 8883 Sugino MCVS / MCVD, Super Mi (1978-1978); 9899 Sugino Mighty Custom (1978-1978); 9900 Sugino Mighty Victory (1978-1978); 9901 Spécialités TA bottom bracke (1978-1978); 9902 Sugino Mighty Custom/Victory (1978-1978); 9903 Clement Elvezia 75 (1978-1978). `year_from` -> 1979 (earlier) on 5 rows: 5187 Super Champion Performance (1980-1981); 9123 Sugino Super Mighty Custom (1981-1981); 9119 Avocet Racing IIT (1981-1981); 6863 Specialized Touring Turbo (1980-1981); 6868 Specialized Turbo S (1980-1981). Fill 1979/1979 on []. Descriptions enriched on 11 rows (ids [3259, 3260, 4125, 5749, 6667, 7886, 9068, 8883, 6861, 6863, 6868]); old text was never shortened. New rows (1979-1979): Cyclo Alloy (6 speed, custom), Specialized Racing 700C x 1.
- Rejected on review: matches to the Avocet hubs "(by Ofmega)" 3189 / 3190 / 3191 again, Avocet Professional headset -> Model II 2937, Avocet sealed BB -> Model I (4), Rigida 14-20 mm rims -> the 13-19 rows 9894 / 9895 and a generic Rigida 27 x 1 1/4 row 5153; new rows for BB spindles and cup sets (sub-parts), Palo Alto house tubulars (retailer house brand, TODO policy question), the Rigida 700C x 1 1/4, SR Laprade seat post (Laprade brand already has rows) and Avocet chainrings for double / triple (no model name).
- Still ambiguous (43, not loaded): Regina chains and freewheels again, Cyclone front derailleur variants, Cinelli 1/A stems, Super Champion and Fiamme clinchers.


## Palo Alto Bicycles catalogue — c. 1983-84 (VeloBase `palo_alto_1984.pdf`, 52-page scan with noisy OCR), 2026-10-30

- `data_source` label "Palo Alto Bicycles catalogue (c. 1983-84)", country US. **Undated**: no printed year; it lists "The Fabulous World of
  Cycling-1983" and 1982-83 Tour de France stories, so it is late 1983 or 1984 (file name says 1984). Hence `year_to` was extended only to
  1983 (the floor) and new rows are 1983-1984. Printed page = PDF page - 2: saddles / seat posts 10-11, hubs 16, wheels 17, rims 18,
  bars / stems / headsets 19, pedals 20, toe clips 21, brakes 24, mountain bike parts 25-27, cranksets 28, bottom brackets 29, freewheels 30,
  chains 31, derailleurs and shift levers 32, tyres 36-38. Four Sonnet transcription agents (196 records), four group agents (111 match,
  29 ambiguous, 38 skip, 18 new), reviewed by hand and shown to the user before loading.
- `year_to` -> 1983 on 35 rows (old values): 5254 Avocet Touring I (later) (was 1970-1981); 5256 Avocet Touring WI (was 1970-1981); 5255 Avocet Touring II (was 1978-1981); 9118 Avocet Touring WII (was 1978-1981); 9117 Avocet Touring III (was 1978-1981); 9120 Avocet Racing WI (was 1978-1981); 9121 Avocet Racing WII (was 1978-1981); 5258 Avocet Racing I (was 1978-1981); 5253 Avocet Racing II (was 1970-1981); 5251 Avocet Racing III (was 1970-1981); 5183 Super Champion Gentleman (was 1970-1981); 5180 Super Champion Arc en Ciel (was 1960-1981); 2937 Avocet Model II (was 1981-1982); 3671 Avocet Model III Platform  (was 1980-1981); 3669 Avocet Model I (was 1980-1981); 3670 Avocet Model II (was 1981-1982); 3922 Sakae/Ringyo (SR) SP-100AL (was 1970-1982); 8240 Sakae/Ringyo (SR) SP-11, S (was 1982-1982); 1856 Spécialités TA Cyclotouris (was 1962-1981); 1453 Avocet Racing (was 1981-1982); 1454 Avocet Touring Triple (was 1981-1981); 4 Avocet Model I (was 1981-1981); 9901 Spécialités TA bottom brac (was 1978-1979); 1244 Campagnolo 753/A, Super Re (was 1970-1980); 2243 SunTour Pro-Compe (Ultra-6 (was 1978-1979); 8765 Sedis Sedisport (was 1979-1981); 6861 Specialized Touring (was 1976-1981); 6865 Specialized Touring-II (was 1980-1980); 6862 Specialized Touring K4 (was 1980-1980); 6869 Specialized Ultralight (was 1980-1981); 6868 Specialized Turbo S (was 1979-1981); 6863 Specialized Touring Turbo (was 1979-1981); 6867 Specialized Touring-X (was 1980-1981); 6860 Specialized Expedition (was 1980-1980); 6763 Clement Paris - Roubaix Se (was 1976-1981).
- Descriptions enriched on 15 rows (ids [2968, 3671, 3708, 3716, 5761, 6860, 6861, 6862, 6863, 6865, 6867, 6868, 6869, 8765, 9771]), none shortened. New rows (1983-1984): Specialized Saturne rim, Ritchey Bullmoose bar / stem, Specialized TriCross, Crossroads and Street Stomper tyres, Vittoria Pave CG tubular.
- Rejected: matches of the Avocet hubs to the "(by Ofmega)" rows 3189 / 3191 (again) and a Campagnolo front derailleur to the 1985+ 7012; new rows for SR Laprade 250 mm, Avocet headsets Model 20 / 30 (likely the DB's Model II / III), Shimano XT hubs and 600 XT chainset (no model numbers), Sugino Aero Tour A/T cranks (DB has "Sugino AT"), A/T bottom bracket and chainrings, Avocet chainrings.
- Still ambiguous (29, not loaded): Regina chains and freewheels, Cyclone and Campagnolo generation variants; no help for Fiamme / Super Champion clinchers or Sugino Maxy II.

## Dedupe 2026-10-30: Cambio Rino Aereo crankset

- Deleted 1465 "Cambio Rino (type aereo)" (velobase stub, no years, description "Italy" only,
  source_id E06940DC-5EDE-40EA-85E3-1BE6AD1F36F3); kept 1466 "Cambio Rino Aereo" (1985, La Bicicletta
  Guida '85/86, source 259). No bike_spec links or overrides. duplicate-report missed it because
  the stub's model name sat inside the parenthetical ("Cambio Rino" vs "Cambio Rino Aereo").

## Dedupe 2026-10-30: model names hidden in parentheticals (one-off scan)

- Scan: rows whose bracketed text holds the extra model words of another row of the same brand +
  category (the Cambio Rino "(type aereo)" pattern). 61 pairs, nearly all configuration variants
  (BCD, flange, quill length, speeds); 3 real leads.
- Merged 8006 "SunTour CW-6000, Superbe Pro Track" (1992-93, SR SunTour 1993, source 278, source_id
  7100218c-bf6e-11f1-a2df-02fea3763e8d) into 1992 (No. 62 Dec 1984, source 90 kept), retitled from
  "SunTour CW-6000, Superbe Pro (Track)" to "SunTour CW-6000, Superbe Pro Track", years 1985-1993; the
  description names both editions' specs (595g 52T 170mm vs 625g 49T 165mm).
- Merged 3011 "Gipiemme Special (?), Special (Strada)" (velobase, 1980, 97 g Actual, source_id
  2AA2D25A-B2CA-4C27-A2A0-CBA36FE58B11) into 3010 Gipiemme 'Special' Strada (600168): weight and the
  1980 year folded in.
- Left: 2679 "Zeus (Campagnolo Gran Sport copy)" (velobase 1950-60) vs 2686 Zeus Gran Sport front
  (Zeus 1977, ref. 28): may be an earlier part, no evidence either way.

## Ron Kitching catalogue (1960), Cinelli excerpts (labibleduvelo Cinelli 1960 page), data_source 297

- Source: https://labibleduvelocataloguescinelli.blogspot.com/p/cinelli-1960.html, 26 JPGs
  (Kitching60-Cinelli1..26, s0 = 877 x 1600). Only the pages mentioning Cinelli were posted, so
  this is a partial catalogue: pp. 20, 28, 31, 32, 58-63, 65, 69, 71, 73, 78, 79 and spares S 8-S 11,
  S 28, S 29, plus the Cinelli cycle pages. Multi-brand retailer: attests years, absence caps
  nothing. Country GB.
- Pages used (scratch p-numbers): p01 cranks, p02 Cinelli bars / stems feature, p05-p08 chainwheels
  and cranks, p11 bars and stems, p12 headsets and hubs, p14 saddles and pillars, p22 bracket
  fittings, p23 cranks supplied separately, p24 replacement chainwheels. Skipped: p03 mudguards,
  p04 bottles / cages / bracket fittings for carriers, p09 cotter pins / cyclometers / cycles, p10
  dynamos / frames, p13 lamps / mudguards, p15 seat bolts / shoeplates / spanners, p16-p20 Cinelli
  juvenile, Corsa, Super Corsa, Pista cycles and frames (a bike-specs job if wanted), p21 clothing,
  p25 Simplex lever spares and stem bolts, p26 head-fitting spares table.
- Transcribed by three Sonnet subagents (248 lines, 199 distinct). Spot-checked at full size: Cinelli
  16 drop 5 3/4 and 17B forward 4 3/4 (the subagent read 5 1/4 / 4 1/4 on p11), Milremo Gran Prix
  5 3/4 / 3 1/2 and Gran Premio 5 1/2 / 4 3/4, Lenco forward 4 3/4, Scheeren layout (the 6 / 7.5 /
  9.5 cm line is the 151).
- 1960 Cinelli bar numbering: road 11 San Remo, 12 Gran Fondo, 13 Koblet, 15 Tour of Britain,
  16 Campione del Mondo, 17 Corsa Strada, 17B Giro d'Italia (15 / 16 / 17B also engraved);
  track 14 Pista, 18 Madison. All chromed steel, 15/16in. The 6x numbering came later; no merge
  with the 6x rows. Stems: No. 1 Road (plain or badged, 4-14 cm), No. 2 Stayer (adjustable 5-15),
  No. 3 Sacchi (11-14).
- Retitled (old title -> new): 6485 "Cinelli #1" -> Cinelli No. 1 Road; 6494 "Cinelli Adjustable" ->
  Cinelli No. 2 Stayer (user's call that they are the same part); 1892 "Stronglight 45" ->
  Stronglight 45 Competition. search_text rewritten with each.
- year_from moved earlier to 1960 (old value): 9320 Cinelli Sacchi (1975), 9319 Cinelli 18 Pista
  (1975; 1960 name Madison, its 1960 dimensions differ from the 1975 Holdsworth figures, both kept),
  9898 Cinelli Headset (1978; = the 1960 "Special", user's call), 153 Stronglight No. 34 BB (1974),
  1861 T.A. Professional Track (1962; Kitching "755 Track"), 1303 / 1304 T.A. 173 / 175 adapters
  (1975), 1309 / 1310 T.A. CR.205 / CY.205 rings (1975), 1296 Simplex Competition dural (1970),
  2845 GB Maes steel (1962), 6533 GB Forged stem (1962). No year_from moved later.
- year_to -> 1960: 9034 Brooks B17 Campagnolo (1959), 1892 Stronglight 45 (1950), 1898 Stronglight 54
  (1950), 1298 Simplex Touriste (1950), 3184 Atom low flange (1950), 3209 / 3213 / 3214 BH Airlite
  Continental solid / Racelite / Solite (1950). NULL -> 1960-1960: 1539 Duprat Professionnels 3-pin
  (= 300S / 300D), 1532 Duprat 5-pin single flute (= 500S / 500D), 1524 Chater Lea 3-pin fluted.
- Descriptions only: 2798 Cinelli 14 (1960 vs 1976 dims), 5678 Unica-Nitor combination (Road / Track,
  colours, pillar sizes), 29 / 34 Campagnolo 1047 / 1046 BB axles, 6590 Milremo Grand Sport stem.
- Conflict kept (user's call): 3256 / 3257 Campagnolo 1006 / 1006/G hubs stay year_to 1955 (absent
  from Catalogo N. 14, source 109 kept); description notes they were still sold by Kitching in 1960.
- Added (41, all 1960): Cinelli bars 11, 12, 13, 15, 16, 17, 17B; Cinelli Super Corsa crank, Special
  BB, chrome seat pillar; Milremo cranks No. 30 / 50 Special Course, 55 Course, 555 Club, chainwheels
  130 / 150 / 230 / 250, bars Gran Sport / Gran Prix / Gran Premio, Cadet hub; Magistroni 70 Giro
  d'Italia crank, Supercorsa BB; GB R.H. Maes (steel); Philippe No. 40, AVA Super-Dura, Scheeren 151 /
  153 Weltmeister and 156 Sport stems; Lightrace G.M.A. and Lelege, Stronglight No. 97, Felix Boehm
  Hollow BBs; FB 1034 / 1079 Extralusso, Exceltoo 650B hubs; Vittoria cast adjustable and Strata dural
  seat pillars; new brand T.W.F. (800 Superlight headset, Superlight BB). 10 category_brand links.
- Left (noted only): Durax "H.C." / "S.C." cranks (codes not mapped to Course / Super Course /
  Special Course); Lycett L.15 / S.21, Mansfield Ace / Victor, Terrys 1086X / 1087X utility saddles;
  Lenco All Rounder flat bar; Maxi-Car tandem hub; Edco, Lightrace, Magistroni Continental / English
  and T.D. Cross Continental headsets (no model); T.A. ring options (CR / RA / CY / 201 / 207 / 208 /
  TCY203 / 3235 triple) beyond the four dated rows; Simplex / Stronglight 49D / 57 replacement rings;
  Campagnolo 1048 = cranks-only of the 1049 Record Strada (1502), no change.
