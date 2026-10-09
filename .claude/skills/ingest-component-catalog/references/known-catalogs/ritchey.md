# Ritchey catalogs processed so far

## Ritchey Component Catalog (1992) — retrobike.co.uk archive 1629, data_source id 149

- Source: https://www.retrobike.co.uk/archive/1992-ritchey-component-catalogue.1629/download
  (16 pp scan, no text layer; same cookie-jar + Referer trick as the 3ttt
  retrobike downloads). "Ritchey Component Catalog 1992, Quality
  Componentry"; back cover is (c) Ritchey Design 1991, Redwood City CA, with
  Ritchey Europe in Dubino, Italy — printed late 1991 for the 1992 season,
  so every row is bounded 1992 unless the text itself dates it earlier.
- **No part numbers anywhere**: titles are `Ritchey <model name>` with the
  catalogue's own capitalisation (MegaBite, HardDrive, ProLite, "WCS" in
  quotes as printed). "WCS" = World Championship Series, the new-for-1992
  top tier across tyres, rims, bars, saddles and one bottom bracket.
- First Ritchey source: the DB had four bare velobase rows (brand 252,
  `category_brand` for Cranksets / Headsets / Saddles only). Added
  `category_brand` links for Tyres, Rims, Wheel(sets), Stems, Handlebars,
  Seat Posts, Bottom Brackets, Brakes, Brake Levers. No `component_group`
  rows exist for Ritchey; all rows keep `group_id` NULL.
- Retitled (old title kept here for matching), source_ref -> 149:
  1721 "Ritchey Logic (by Sugino)" (Cranksets, NULL years) -> "Ritchey
  Logic Crankset", 1992-1992; description rebuilt from the catalogue (cold
  forged duralumin, hidden pin, 170-180mm, Q 151, 74/110, 24-36-46 /
  26-36-48, 650g spec), keeping velobase's measured 714g (175mm, all parts)
  and "made by Sugino" as uncontradicted independent facts;
  3078 "Ritchey Logic" (Headsets, 1990) -> "Ritchey Logic Headset",
  year_to 1990 -> 1992 (1/8" upper, 3/16" lower, steel locknut, 1" /
  1-1/8" OS / 1-1/4" OS, 130/140/145g);
  5462 "Ritchey Logic" (Saddles, 1990) -> "Ritchey Logic Saddle", year_to
  -> 1992 (leather, shortened spring-steel rails, black/white, 315g).
- Deleted: 5463 "Ritchey Logic (version 2)" (Saddles, 1990-1990, velobase
  `0B09405D-E528-47CF-80F3-4BC79D2591EA`): bare placeholder duplicating
  5462 with no "version 1" anywhere, no description, no bike_spec links,
  no overrides. The 1992 range is Logic / Logic Pro "WCS" / Logic Comp,
  none of which is a "version 2".
- Inserted (36 rows, UUID source_id, 1992-1992 unless noted):
  - Tyres 8382-8391: MegaBite Z-Max (NEW), MegaBite HardDrive (1989-1992:
    "won the 1989 NORBA World Championships"), MegaBite OverDrive, Force
    Racing K, Force Duro, Mod Quad, Quad, Road Force, Tom Slick, Cross-Bite
    (NEW). One row per tread; the WCS 127 tpi Kevlar sizes and weights are
    in each description rather than split into their own rows.
  - Rims 8392-8397: Vantage Pro "WCS" (NEW), Vantage Comp (1989-1992, same
    NORBA win), Vantage Expert, Vantage Sport, Vantage Cross-Sport, Vantage
    Comp Road (NEW). Widths in descriptions are read off the section
    drawings (outer/inner) and marked approx.
  - Wheel(sets) 8398: ProElite Wheels.
  - Stems 8399-8402: Force Comp (Mountain) (1990-1992: 1990 and 1991 World
    Championship medals), Force Directional (Mountain), Force Comp (Road),
    Force Directional (Road) (NEW).
  - Handlebars 8403-8406: ProLite "WCS" (NEW), ProLite, ForceLite (NEW),
    Original Force FD.
  - Seat Posts 8407-8408: Force Directional Seatpost (Mountain), (Road).
  - Saddles 8409-8410: Logic Pro "WCS" Saddle (NEW), Logic Comp Saddle (NEW).
  - Cranksets 8411: Logic Tandem Crankset.
  - Bottom Brackets 8412-8414: Logic Pro, Logic Pro "WCS" (NEW), Logic Comp.
  - Brakes 8415: Logic Cantilevers. Brake Levers 8416: Logic Brake Levers.
  - Headsets 8417: Logic Comp Headset.
- 1993 Bianchi links (bike skill, same day): "Ritchey Z-Max" -> 8382,
  "Ritchey Megabite Hardrive" -> 8383 (CSV spells it "Hardrive"), "Ritchey
  FD" -> 8407, "Ritchey Comp leather" (+ "Cro-mo rails") -> 8410; those
  four rows' year_to extended 1992 -> 1993 on the strength of the 1993
  Bianchi catalogue (source_ref -> 47 on them). See the bike skill's
  `known-catalogs/bianchi.md`.
- Out of scope (no category): Pro "WCS" latex tubes and rim tape, True
  Grips (original, II, III Gel, "WCS"), Cliff Hanger cable hanger, Logic
  and Prestige forks, Logic tubesets, CrMo BB shell, seat collar, Logic
  dropouts, clothing and bottles.
- Unresolved: exact start years for the non-NEW items (Quad, Original
  Force FD, Logic headset/saddle predate this; the velobase 1990 dates on
  3078/5462 were kept as year_from). A pre-1992 Ritchey catalogue would
  settle them — partly done by the 1991 catalogue below.

## Ritchey Quality Componentry catalogue (1991) — retrobike.co.uk archive 1538, data_source id 150

- Source: https://www.retrobike.co.uk/archive/1991-ritchey-quality-componentry-catalogue.1538/download
  (16 pp scan, no text layer, cover price $1.00, (c) Ritchey Design 1991;
  latest results quoted are the 1990 Worlds, so printed for the 1991
  season). Same cookie-jar + Referer download trick. Ritchey Taiwan
  (Taichung) appears alongside Redwood City and Nuova Olonio.
- The printing immediately before the 1992 catalogue (149) above. No part
  numbers; the same model names, so no new titles except one insert.
- **Dating**: the catalogue's own text dates several parts earlier than
  the 1992 listing implied — "this year brings" the MegaBite Z-Max and
  the WCS series (so Z-Max is 1991, not 1992; "two full years of
  MegaBite experience" puts MegaBite at 1989); "new for 1991" Vantage
  Comp Road and Vantage Cross-Sport; "the new stem" Force Comp (Road);
  "the new Logic Brakeset", "new Logic Bottom Brackets", "this new
  crankset"; ProLite "introduced just last year" (1990); Force Comp
  (Mountain) "won the 1989 NORBA World Championships". 1992's NEW stamps
  on Force Directional (Road) and Vantage Comp Road were marketing — both
  are here.
- year_from 1992 -> 1991 (source_ref -> 150), descriptions unchanged:
  8384 OverDrive, 8385 Racing K, 8386 Force Duro, 8387 Mod Quad, 8388
  Quad, 8390 Tom Slick, 8394 Vantage Expert, 8395 Vantage Sport, 8412
  Logic Pro BB.
- year_from -> 1991 and description rewritten to carry the 1991 spec where
  it differs from 1992: 8382 Z-Max (1991: 26x2.1 640g / Kevlar 590g 60 tpi,
  WCS 2.1 / 2.35 only; 20"/24" sizes 1992), 8389 Road Force (1991 weights
  ~10g lighter), 8396 Cross-Sport, 8397 Comp Road ("new for 1991"), 8398
  ProElite Wheels (1991 build on Vantage Comp 415g rims, 28/32 spokes,
  laced and numbered by Wheelsmith; 1992 on Vantage Pro "WCS" — the
  two-edition spec case, both named inline), 8400 FD (Mountain) (350g ->
  340g), 8401 Force Comp (Road), 8402 FD (Road) (260g -> 270g, black
  chrome offered 1991), 8407 FD Seatpost (Mountain), 8408 FD Seatpost
  (Road) (210mm only; 240mm added 1992), 8414 Logic Comp BB (295g ->
  290g), 8415 Logic Cantilevers, 8416 Logic Brake Levers (95g "per set"
  1991 vs "each" 1992, both recorded), 8417 Logic Comp Headset (1" only,
  115g; JIS and 110g from 1992), 1721 Logic Crankset (black anodised added
  1992).
- year_from -> 1989: 8399 Force Comp (Mountain) (1990 -> 1989; 170mm
  length offered in 1991 only).
- year_from -> 1990: 8404 ProLite (540mm in 1991, 560mm from 1992).
- **Rename lineage**: the 1991 "ForceLite" is a 6061-T6 heat-treated,
  560mm, 6/9 deg, 230g bar = the 1992 "Original Force FD" (8406) exactly;
  the 1992 ForceLite (8405) is a different 2014-T6 175g bar. 8406 now
  starts 1991 with "sold as the ForceLite in 1991" in its description;
  8405 untouched. A 1991 bike spec saying "Ritchey ForceLite" should link
  to 8406, not 8405 (bike-skill override needed if one turns up).
- Description only (years already covered): 8383 HardDrive (1991 700x38c
  470g vs 1992 700x40c; OEM-only 27 tpi 26x2.1 680g / 700x38c 490g), 8393
  Vantage Comp (24" is 1992), 5462 Logic Saddle (sheepskin leather;
  "Logic Racing Saddle" in 1991), 3078 Logic Headset (1-1/4" OS is 1992).
- Inserted (1991-1991, UUID source_id): 8418 Tyres "Ritchey MegaCross" —
  cyclocross racing tubular with Thomas Frischknecht, MegaBite tread,
  700x28c 350g cotton/latex, Kevlar 300g; absent from the 1992 catalogue.
- Dropped after 1991 (recorded in descriptions, no rows): the 27 tpi
  OEM-only tyre sizes, Vantage Expert's black/duro super-hard-anodised
  finish, MegaCross.
- Untouched, consistent as 1992 introductions: Vantage Pro "WCS",
  Cross-Bite, Logic Pro "WCS" BB, Logic Pro "WCS" and Logic Comp saddles,
  Logic Tandem Crankset, ProLite "WCS", 2014-T6 ForceLite.
- Note: 8382 / 8383 / 8407 had source_ref 47 (1993 Bianchi, for their
  year_to 1993) and now carry 150; the 1993 bound still comes from the
  Bianchi catalogue (see bianchi.md).
- Out of scope: True Grips (black, grey, 100g), Cliff Hanger (new 1991),
  Logic Fork with FD steerer (new 1991), Logic tubesets and dropouts, and
  the "ProControl" bundle (eight existing parts, not a product).
- Unresolved: true start years for Quad, Force Duro, Racing K, OverDrive,
  Mod Quad, Tom Slick, Vantage Expert/Sport, FD stems and posts, Logic
  headset/saddle — all predate 1991 ("longtime favorite", "the original")
  but nothing here dates them. A 1989 or 1990 Ritchey catalogue would —
  the 1988 catalogue below settles Quad, Racing K, Duro, Vantage (Expert)
  and the FD stem.

## Ritchey Mountain Bikes catalogue (1988) — retrobike.co.uk archive 1635, data_source id 151

- Source: https://www.retrobike.co.uk/archive/1988-ritchey-catalogue.1635/download
  (16 pp scan, no text layer; "An American Tradition, Handcrafted Ritchey
  USA Mountain Bikes 1988", Ritchey USA, 1326 Hancock Ave, Redwood City,
  printed in Taiwan). Same download trick as the other retrobike files.
- **Mostly a bike catalogue**: seven bikes with full spec sheets on pp.
  8-14 (OutBack, Ascent Comp, Ultra, TimberComp, Super Comp, Annapurna,
  Skyliner tandem) — not transcribed here; they belong to
  `ingest-bike-specs` (Ritchey does not yet exist as a bike brand). The
  component content is pp. 4-5 (tyres, Force Directional bar and stem,
  Vantage rim) and p. 15 (tyre spec table). No part numbers; pre-Logic,
  pre-MegaBite, pre-WCS, pre-ProLite, no Vantage Comp yet.
- **Dating from the text**: Quad 1.9 "introduced in 1985"; Force Racing K
  "the 1st mountain bike tire on the market with a Kevlar bead", 1986
  NORBA Nationals wins (Overend, Whitehead), "improved in 1987 with a new
  127 tpi casing"; "new for 1987 was the Force Duro K"; Vantage rim "the
  newest edition to the Ritchey component line"; "the new Ritchey stem,
  called Force Directional". Also historical: Ritchey's chromoly single-
  tube stem design dates from the early 1970s (road/track record bikes),
  the Bullmoose one-piece bar from 1981.
- year_from pulled back, descriptions rewritten with the 1988 spec and the
  later drift, source_ref -> 151: 8388 Quad 1991 -> 1985 (650g in 1988,
  640g by 1991; GripStrip centre ridge); 8385 Force Racing K 1991 -> 1986
  (540g in 1988, 535g by 1991; the wire-bead "Force Racing" 600g of 1988
  folded in as a variant, not a row — gone by 1991, same tread); 8386
  Force Duro 1991 -> 1987 (K = Kevlar 127 tpi 575g, wire 640g); 8394
  Vantage Expert 1991 -> 1988 (launched as plain "Vantage", 6061-T6
  double heat treated, 445g, silver/grey/black; "Vantage Expert" and 450g
  from 1991 — old name "Vantage" recorded here for matching, the 1988 bike
  specs all say "Ritchey Vantage"); 8400 Force Directional (Mountain)
  1991 -> 1988 (new 1988 as the TIG-welded Mod I in Lo/Med/Hi reach/rise
  6.1"/1.0", 5.0"/1.75", 4.3"/2.4").
- Inserted (1988-1988, UUID source_id): 8419 Stems "Ritchey Force
  Directional Mod II" (fillet brazed, Imron painted, Lo/Med/Hi 6.8"/1.4",
  5.9"/2.0", 5.5"/3.5"; Super Comp "FDII" and Annapurna); 8420 Handlebars
  "Ritchey Force Directional Model I" (chromoly, 12 deg, 22.5", 340g);
  8421 Handlebars "Ritchey Force Directional Model II" (Tange Prestige
  double butted, 12 deg, 22.5", 260g; the "Prestige bar"). None of the
  three appears in 1991 or 1992.
- Not touched: 8406 Original Force FD — the Ultra's "Alloy Bulge Bar" is
  probably this alloy Force bar but the catalogue gives it no name, weight
  or material; 8393 Vantage Comp, 8395 Vantage Sport (not yet in 1988).
- Bike-spec hints for a future Ritchey bike ingest: "Ritchey Vantage" ->
  8394; "Force Directional Mod I" stem -> 8400, "Mod II" / "FDII" -> 8419;
  "Force Directional Mod I" bar -> 8420, "Mod II Prestige" bar -> 8421;
  "Ritchey Quad 1.9" -> 8388; "Force Racing" -> 8385; "Force Duro" -> 8386;
  Skyliner stoker stem "Mod. I Stoker" has no row.
- Out of scope: frames, Tange Prestige / 4130 tubesets, braze-ons, Imron
  paint, Vantage wheelsets (mentioned à la carte, no spec), clothing,
  bottles.
- Unresolved: start years for OverDrive, Mod Quad, Tom Slick, Vantage
  Sport, FD seatposts, Logic headset/saddle (all absent here, present in
  1991 as established lines — so 1989 or 1990); whether the 1988 "Alloy
  Bulge Bar" is 8406.
