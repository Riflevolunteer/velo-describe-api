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
  Japanese maker (National Tire Co.); a later cleanup could merge them. Out of scope: frames,
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
