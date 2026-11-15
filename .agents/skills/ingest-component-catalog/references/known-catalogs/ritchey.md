# Ritchey catalogs processed so far

## Logic crank split — 2026-11-14 (user approved, applied)

- The Guida '96 pass (source 357, 2026-11-04) had matched "RITCHEY Logic Road"
  (scan 29, p.132: road, 170-180 mm, 39-53, 590 g, cold-forged) to 1721 and
  overwritten its description. Split: new **11172 Ritchey Logic Road**
  (Cranksets, 1996, source 357); 1721 Logic Crankset restored to 1991-1992,
  source 150, MTB triple text below. No bike links on either.

## OverDrive 1990 Bianchi fitment review — 2026-11-14 (user approved, applied)

- Applied changes:
  Applied 8384 MegaBite OverDrive year_from 1991 -> 1990 and source_ref
  150 -> 168; retained year_to 1992 and all eight bike links. One row affected;
  SQL rerun zero. All 18,472 bike specs unchanged; full generation across 86
  CSVs byte-identical. Tyre date flags 10 -> 5; coverage remains 238/973.
- Bianchi's cover explicitly prints 1990; model/specification spread PDF
  pp.21–22 lists OverDrive 26x2.0 on Signature 2, Grizzly, Peregrine, Sika and
  Osprey (specs 6906/6948/6969/6989/7009). Project 7's intervening 700C row
  was excluded. Retrobike currently blocks downloads; Bikecatalogs mirror's
  23-page PDF identifies Retrobike 1676 as its source.
- Scan URLs: [original Retrobike 1676](https://www.retrobike.co.uk/archive/1990-bianchi-catalogue.1676/),
  [downloaded mirror](https://www.bikecatalogs.com/download/2797?download=1).
  Inspected PDF cover (1990), pp.21–22 model/tyre spread and back cover (MB90,
  Bianchi USA, South San Francisco). Matched the five rows by model order,
  groups and rims across the spread. The three other retained links are Bianchi
  1991 Peregrine/Sika/Osprey, specs 19567/19585/19602.
- Compared the Ebykr/Equus Ritchey 1991–92 manufacturer tyre spread: OverDrive
  is distinct from HardDrive/Z-Max and includes 26x2.0. This was a comparison,
  not a new catalogue ingest or an assumed identical copy of source 150.
  [Manufacturer comparison](https://ebykr.com/library/ritchey-component-catalog-1991-92/),
  [printed pp.2–3 tyre spread](https://ebykr.com/wp-content/uploads/2026/11/ebykr-ritchey-component-catalog-1991-92-p02.webp).
- The correction resolves five date flags but establishes only 1990 availability
  of the model, not a precise introduction or the Bianchi bikes' casing/bead/WCS
  configuration. Existing 1991/92 variant details remain from the later sources.

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

## Component catalogue (2000) — applied 2026-11-15, source 411

- Source: https://bikalog.org/api/view/Ritchey/2000/ritchey00.pdf. Twelve PDF
  sheets, generally two original pages per sheet; cover explicitly says 2000.
  English international edition; no specific market established (country NULL).
  Scan has cover then printed p.4, pp.5–8, 10–17, 20–25, 28–29 and back cover.
  Printed pp.2–3, 9, 18–19 and 26–27 are absent; some bottom tables are cropped.
  No road-tyre or road-cockpit offerings inferred from missing pages.
- Inventory: 64 visible component offerings/configurations, with no manufacturer
  part numbers. Frames, tubing, forks, grips/bar ends, pads, cleats, spokes,
  QR hardware and rim tape have no suitable component category and are excluded.
  The 2x9 Pro Race Kit is a shifter/conversion kit; compact cranks are explicitly
  sold separately, so it is not inserted as a complete crankset.
- **Applied:** 57 new rows (11250–11306), three existing-row updates, source 411 and
  three category-brand associations (252/13 Hubs, 252/14 Pedals, 252/19 Shifters).
  No deletes, merges, bike writes, group additions or matcher changes. All new
  group IDs remain NULL, consistent with existing Ritchey rows. Hubs/pedals
  already have 1999 components but lacked those category-brand associations.
- Source label: `Ritchey component catalogue (2000)`. All 60 affected rows
  reference source 411. Ritchey component count increased from 71 to 128.

### Existing rows updated

| ID | Printed page | Change | Dates before -> applied |
|---|---|---|---|
| 8390 Tom Slick | 7 | Add 26x1.0 Pro/Comp 340/375 g, retain 26x1.4 360/450 g; preserve earlier 700x38c and casing data | 1991–1999 -> 1991–2000 |
| 10386 Wing Pro | 24 | Add Wing crossbrace/shock absorption and gel details; 2000 weight 260 g, preserve 1999 listing 230 g explicitly | 1999–1999 -> 1999–2000 |
| 10340 Logic WCS Road | 17 | Retitle `Ritchey Road WCS pedals`, regenerate search text; DSR, 5-degree float, needle bearings, low 7 mm axle-centre distance, MTB-cleat compatibility; 2000 238 g vs 1999 235 g | 1999–1999 -> 1999–2000 |

- All three changed source 353 -> 411 and have no live bike links. No year_from moves.
  Catalogue weight changes are specification listings, not new measurements.
- Original 8390 description: `Smooth-rolling slick for MTB or road with inverted
  wedge cuts, VFA technology. 26x1.4 450g (60/66 tpi), 26x1.4 Kevlar 360g
  (127 tpi), 700x38c 450g (60 tpi).` Title/search text `Ritchey Tom Slick`.
- Original 10386 description: `Cover: black leather; shell: nylon; rails:
  manganese steel; padding: differentiated-density polyurethane; colour:
  black; 230g`. Title/search text `Ritchey Wing Pro`.
- Original 10340 title/search text `Ritchey Logic WCS Road`, description
  `Forged polished aluminium body, CrMo axle; 235g`. IDs, UUIDs, brand,
  category and group of all existing rows remain unchanged. Original ranges are
  in the table above; their previous source_ref was 353.

### New identities and generation decisions

| Category | New rows | Printed pages / scope |
|---|---|---|
| Tyres | 14 | 4–7, 10: Z-Max Millennium, Z.E.D., SpeedMax and Alpha/Omega MTB variants, SpeedMax Cross, Max Cross, AlphaBite Trailmix, MudMax, AlphaBite, BMX Alpha/Omega, Black Mamba, BMX Z-Max |
| Wheel(sets) | 3 | 11: Zero Mountain WCS/Pro and visible Zero Road WCS; no unseen cropped row reconstructed |
| Hubs | 5 | 12–13: Disc Z-Hub Pro, Mountain WCS/Pro, Road WCS/Pro |
| Rims | 10 | 14–15: OCR/Rock Mountain WCS/Pro/Comp, OCR Pro/Rock Pro/OCR Comp 700, Disc-OCR |
| Brakes | 1 | 16: Linear Logic Pro, 184 g |
| Pedals | 2 | 17: Comp V2, 360 g; Pro Mountain, 310 g |
| Handlebars | 5 | 20: 5-degree Mountain WCS/Pro/Comp and Rizer Pro/HD |
| Stems | 3 | 20–21: threadless alloy Mountain Pro/Comp and Fatbone |
| Headsets | 6 | 22–23: Logic WCS cartridge, Scuzzy Logic Pro/Comp, Logic Pro/Comp threadless, Logic Threaded |
| Saddles | 2 | 24: Wing WCS (vanadium, 240 g) and Wing Comp (steel, vinyl/Kevlar, 300 g) |
| Seat Posts | 3 | 24: Pro/Comp Mountain and Pro Road |
| Cranksets | 2 | 25: V-Pro 104/64 PCD, 633 g; Logic Compact Mountain 94/58 PCD, 625 g |
| Shifters | 1 | 25: 2x9 Racing System Pro Race Kit, with rings/cog/lockring/grips; crank not included |

- All new ranges are 2000–2000, except base SpeedMax **1996–2000**, since p.5
  explicitly dates its introduction to 1996. No earlier date is inferred for
  Alpha/Omega or BMX designs from that statement. These are attestations,
  not manufacture start/end boundaries.
- Z-Max Millennium is kept as a separately marketed anniversary offering from
  the early MegaBite Z-Max 8382, with its own WCS/Pro/Comp specifications. BMX
  wheel-size offerings are kept distinct. No automatic 8382 date widening or
  inference of a 1990 introduction from “10th anniversary”; prior 1991 evidence
  and early tyre specifications remain intact. The WCS marketing text mentions
  carbon fibre and reinforced-Kevlar blue-coated casing; it does not establish
  cotton casing or a carbon-fibre bead, so neither claim is added.
- The 2000 5-degree flat bars differ from the earlier ProLite/ForceLite/Force FD
  4/6/9-degree offerings. New Pro uses 2014-T6, not the early EA70 ProLite alloy.
  Threadless removable-faceplate alloy stems are distinct from the old chromoly
  quill FD/Comp stems. New post lengths/tiers are not assigned to the old
  210/240/300/330 mm generic FD rows.
- The modern threaded Logic has 5/32-inch upper balls and 35 mm stack, whereas
  older 3078/8417 have 1/8-inch upper balls and 33 mm stack. Cartridge Logic WCS
  differs from 10403/10404's older ball/roller WCS constructions. Do not merge
  merely on Logic/WCS branding.
- New Z-Hubs have named Mountain/Road/Disc identities and specified 6061 flanges,
  unlike the generic 1999 WCS rows with 7075 flanges and differing weights/axles.
  Keep these constructions separate. Mountain OLD is printed 100/136 mm;
  do not silently turn 136 into 135. Pro Road seatpost table lists diameter
  27.2 mm but references weight at 27.0; no additional diameter is inferred.
- Disc-OCR is positively identified by its heading, disc use, reversible
  orientation and anti-pinch lip. Its suspect Pro Aero/622-14/rear table is not
  used to assign dimensions, weight or a Pro Aero model identity.

### Applied new component IDs

All rows below use source 411 and group NULL; ranges are 2000–2000 except
SpeedMax 11252, whose range is 1996–2000. Pages refer to printed pagination.

| ID | Category | Page | Title |
|---|---|---|---|
| 11250 | Tyres | 4 | Ritchey Z-Max Millennium |
| 11251 | Tyres | 4 | Ritchey Z.E.D. |
| 11252 | Tyres | 5 | Ritchey SpeedMax |
| 11253 | Tyres | 5 | Ritchey SpeedMax Alpha (MTB) |
| 11254 | Tyres | 5 | Ritchey SpeedMax Omega (MTB) |
| 11255 | Tyres | 6 | Ritchey SpeedMax Cross |
| 11256 | Tyres | 6 | Ritchey Max Cross |
| 11257 | Tyres | 6 | Ritchey AlphaBite Trailmix |
| 11258 | Tyres | 7 | Ritchey MudMax |
| 11259 | Tyres | 7 | Ritchey AlphaBite |
| 11260 | Tyres | 10 | Ritchey SpeedMax Alpha (BMX) |
| 11261 | Tyres | 10 | Ritchey SpeedMax Omega (BMX) |
| 11262 | Tyres | 10 | Ritchey Black Mamba |
| 11263 | Tyres | 10 | Ritchey Z-Max BMX |
| 11264 | Wheel(sets) | 11 | Ritchey Zero Mountain WCS |
| 11265 | Wheel(sets) | 11 | Ritchey Zero Mountain Pro |
| 11266 | Wheel(sets) | 11 | Ritchey Zero Road WCS |
| 11267 | Hubs | 12 | Ritchey Disc Z-Hub Pro |
| 11268 | Hubs | 13 | Ritchey Z-Hub Mountain WCS |
| 11269 | Hubs | 13 | Ritchey Z-Hub Mountain Pro |
| 11270 | Hubs | 13 | Ritchey Z-Hub Road WCS |
| 11271 | Hubs | 13 | Ritchey Z-Hub Road Pro |
| 11272 | Rims | 14 | Ritchey Mountain OCR WCS |
| 11273 | Rims | 14 | Ritchey Mountain Rock WCS |
| 11274 | Rims | 14 | Ritchey Mountain OCR Pro |
| 11275 | Rims | 14 | Ritchey Mountain Rock Pro |
| 11276 | Rims | 14 | Ritchey Mountain OCR Comp |
| 11277 | Rims | 14 | Ritchey Mountain Rock Comp |
| 11278 | Rims | 15 | Ritchey Disc-OCR |
| 11279 | Rims | 15 | Ritchey OCR Pro 700 |
| 11280 | Rims | 15 | Ritchey Rock Pro 700 |
| 11281 | Rims | 15 | Ritchey OCR Comp 700 |
| 11282 | Brakes | 16 | Ritchey Linear Logic Pro |
| 11283 | Pedals | 17 | Ritchey Comp V2 |
| 11284 | Pedals | 17 | Ritchey Pro Mountain |
| 11285 | Handlebars | 20 | Ritchey WCS Mountain Bar (5 degree) |
| 11286 | Handlebars | 20 | Ritchey Pro Mountain Bar (5 degree) |
| 11287 | Handlebars | 20 | Ritchey Comp Mountain Bar (5 degree) |
| 11288 | Handlebars | 20 | Ritchey Rizer Bar Pro |
| 11289 | Handlebars | 20 | Ritchey Rizer Bar HD |
| 11290 | Stems | 20 | Ritchey Mountain Stem Pro |
| 11291 | Stems | 20 | Ritchey Mountain Stem Comp |
| 11292 | Stems | 21 | Ritchey Fatbone Mountain Stem |
| 11293 | Headsets | 22 | Ritchey Logic WCS (cartridge) |
| 11294 | Headsets | 22 | Ritchey Scuzzy Logic Pro |
| 11295 | Headsets | 22 | Ritchey Scuzzy Logic Comp |
| 11296 | Headsets | 23 | Ritchey Logic Pro (threadless) |
| 11297 | Headsets | 23 | Ritchey Logic Comp (threadless) |
| 11298 | Headsets | 23 | Ritchey Logic Threaded (5/32 inch upper bearing) |
| 11299 | Saddles | 24 | Ritchey Wing WCS |
| 11300 | Saddles | 24 | Ritchey Wing Comp |
| 11301 | Seat Posts | 24 | Ritchey Pro Mountain Seatpost |
| 11302 | Seat Posts | 24 | Ritchey Comp Mountain Seatpost |
| 11303 | Seat Posts | 24 | Ritchey Pro Road Seatpost |
| 11304 | Cranksets | 25 | Ritchey V-Pro Crank |
| 11305 | Cranksets | 25 | Ritchey Logic Compact Mountain |
| 11306 | Shifters | 25 | Ritchey 2x9 Racing System, Pro Race Kit |

### Unresolved identities — unchanged

| Model | Existing candidates | Evidence needed |
|---|---|---|
| Fuzzy Logic Pro | 10402 | Existing 1999 Fuzzy Logic Threadless 86/92 g lacks tier; 2000 Pro 103/110 g needs version/construction crosswalk |
| Fuzzy Logic Comp | 10402 | Same generic older row; 2000 Comp 112/120 g is not assigned or inserted speculatively |
| Comp Road seatpost | 10169, 8408 | Determine whether 250 mm/250 g Comp relates to 1999 Expert Road 250 mm/220 g or earlier FD Road; names/weights alone insufficient |
| Pro Aero / Aero OCR Road rims | 10190, 10191 | Resolve OCR front/rear table contradiction and 400 g older vs 430/440 g listings before renaming or dating |

### Applied validation (2026-11-15)

- Load committed 57 component inserts, three updates, one source and three
  category-brand associations. Rerunning identical SQL made zero mutations.
  No deletes, merges, group additions, bike writes or code changes.
- Readback verified every planned field on all 60 affected rows, source 411,
  new IDs and all three associations. All brand/category/group/source references
  valid. Ritchey now has 128 components, up from 71.
- All 60 affected rows have zero live bike links. The pre-load baseline had 47
  live specs either linked to Ritchey or mentioning the maker; this ingestion
  does not reassign any early-bike links.
- Actual generation over all 93 CSVs is byte-identical before/after: 1,199 bikes,
  20,600 specs, 7,313 mapped. These are generated counts, not live DB coverage.
  Root `bike-update.sql` untouched; no backfill or matcher override needed.
- Actual duplicate report agrees with simulation: configuration pairs 5 -> 7,
  review 1 -> 1; no new near pairs or merge/review candidates. New pairs
  11253/11260 and 11254/11261 are SpeedMax Alpha/Omega MTB/BMX sizes, kept as
  distinct configurations. Existing review 10312/10328 is a 1999 front 100 mm /
  rear 130 mm pair, kept apart; this source gives no crosswalk for the older hubs.
- Descriptions/titles/search text checked below 255 characters; maximum new
  description 232. Guarded SQL passed readback and zero-mutation rerun.
- Fresh live tyre-only snapshot: 237/1,074 linked (22.1%), 837 unlinked, 614
  components. This task adds 14 tyre rows and changes zero links; differences
  from the historical 2026-11-14 snapshot include other intervening work.
- Source, decisions, original values, applied IDs and validation retained here;
  disposable download, SQL, scripts, snapshots and logs removed after validation.
