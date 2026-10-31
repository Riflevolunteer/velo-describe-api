# Falcon catalogs processed so far

## 1986 Falcon — `1986_falcon_spec.csv` (19 bikes, 402 specs, 64 linked; data_source 317, GB)

- Source: IceniCAM On-Line Library, https://www.icenicam.org.uk/library/Falcon/Catalogue_c1992.pdf
  (21 pp scan, no text layer; p21 is the library cover). "Falcon - Cycles
  for all the family", Falcon Cycles Ltd, P.O. Box 3, Bridge Street, Brigg,
  South Humberside. Two spec tables (p18 sports / tourist ladies, p19
  tourist / city / all-terrain); the photo pages p3-17 give sizes and colours.
  Transcribed 2026-10-31 by a Sonnet subagent, tables checked by hand.
- **Dated 1986, not IceniCAM's c1992 (user decision 2026-10-31).** No date,
  price or copyright line anywhere. Full Campagnolo Triomphe (DB 1984-88,
  mechs 1984-86), Huret Eco (to 1986/87), Shimano 105 on 6-speed freewheels
  with no SIS, Shimano Z-Series, Sachs-Huret Duopar, Suntour MounTech MTBs.
- Bikes: Sports Firefly, Mustang, Scorpio; racing Laser, Team Equipe,
  Challenger 12, Strada 12, Triomphe 12, Triathlon Competitor 12 (the
  table heads drop the "12"; photo-page names used); Tourist Melody and
  Ibiza (ladies' mixte, drop bars, Huret Eco 5-speed), Voyager, Black
  Diamond, Oxford, Westminster, Cotswold; All-Terrain Sierra, Everest, K2.
  Gents / ladies sharing one table column are one row with both size lists.
- Left out (not in the CSV, so no NON_ROAD_SKIP entry): Super Tourist
  (user decision: all-rounder bars, single-ring 5-speed with chainguard,
  as the deleted 1973/74 Super Tourists, though now 453 / Huret Rival);
  Conventionals City, Kensington, Marbella, Royale, Metro, Courier; Juvenile
  Tipper, Princess, Petal, Opal, La Petite; 8 BMX models.
- Repairs: Competitor crank "x 100" -> x 170 (misprint); K2 brakes
  "BRATSO" -> BR-AT50, bar / stem "SRMTB-204" / "SRMTS-101" -> "SR MTB-204"
  / "SR MTS-101"; Everest headset HP-O1G -> HP-01G; Sierra sizes 21", 23"
  from p17 (table: 21" only). Extras dropped the range-wide "mudguard eyes on
  all sports models" note and page tags to stay under 255 chars.
- New overrides: Atom alloy small flange (+ quick release / Q.R.) -> 3183;
  Triomphe crank -> 1515, Triomphe small-flange QR hubs -> 3277 (922/000);
  Lyotard No. 82 -> 3820, Lyotard alloy No. 460D -> 3815; Dia Compe 981 ->
  661; BR-AT50 -> 1003; ISCA Suede Tornado -> 5382; Araya 7X -> 4923;
  bare "Huret Duopar" front 8962 / rear 8959 ranged 1986-only (the 1984
  Peugeot's two Duopar rows stay unlinked, as before). Existing keys:
  Triomphe rear -> 4155 1st version (S3 equally in range), Shimano 105 ->
  A105 Golden Arrow, Sedisport -> 1402, Weinmann 605 -> 8642, Tange Falcon
  headset 3141.
- Left unlinked: bare Shimano 'Z' and 'Z' series G5, Suntour MT Tech
  (several Z / MounTech variants, nothing to choose on); Weinmann side pull;
  ISCA Aero Airline / anatomical / Suede; Solida 101, SR SAC, Sugino;
  Maillard 600 hubs and CX 550 pedals; Atom 13/21 freewheel; Rigida,
  Mavic, Hutchinson.
- Regression: no other CSV carries the new keys except 1984 Peugeot (unchanged).


## 1974 Falcon — `1974_falcon_spec.csv` (18 bikes, 203 specs, 25 linked; loaded as 1975 until 2026-10-08)

- Source: Falcon Cycles (Barton-upon-Humber) "range of lightweight
  cycles" brochure, 16 catalogue pages plus a 4-page typed Model 76 press
  sheet, all 640x405 scans (Downloads/Falcon/). No printed date; 1975
  inferred from Campagnolo Velox (1971-75), the Sport 3320 crank (DB to
  1975) and the team's Tour de la Nouvelle France / Tour de Suisse rides
  (1974-75). Transcribed by hand 2026-09-28. New bike brand on load.
- **Re-dated 1975 -> 1974 (2026-10-08, user decision).** velo-pages.com has
  the same brochure, page for page and word for word, as album "Falcon
  catalog (1974)" (item 27334, pages 27405-27451, 640 px only; red/blue
  cover, back cover "AGENT" box, "Hand made in England"). The roundel
  clue was weak: the 1973 edition carries the same roundels. Bikes 166-183
  year_from 1975 -> 1974; data_source 38 relabelled "1974 Falcon
  catalogue", citation `1974_falcon_spec.csv`; CSV renamed (backup of the
  old file in that session's scratchpad). Link picks checked identical
  at 1974 (no override range boundary between 1974 and 1975), and a reload
  of the renamed CSV was a full no-op. Still no printed date.
- Bikes: San Remo 76 (team replica), 98 track and 96 (enamelled twin),
  94, 92, 80; Black Diamond 70 and ladies 71; Olympic 78; Models 84, 68
  and ladies 69, junior 58, E.C. 72; Super-Tourist De Luxe 88 and ladies
  89; Tourist 82 and ladies 83 (not illustrated). "Exactly as" twins got
  their own rows with the parent spec copied. No weights printed.
  "Bend & Stem: Cinelli Giro d'Italia" split into Handlebars (Cinelli
  Giro D'Italia) and Stem (Cinelli). Gear counts in Gearing.
- Generic values suppressed with null overrides: Rims "Sprint" /
  "Lightweight sprint" (matcher hit Fiamme Sprint), Saddles "Mattress"
  (hit a Brooks mattress row).
- Picks: Brakes bare "Campagnolo" -> 573 2040 pre-CPSC (ranged to
  1977); Pedals "Campagnolo" -> 3708 1037 (to 1985), "track pattern" ->
  3711 1038; Hubs "quick release" -> 3260 1035 (to 1985), "single sided
  track" -> 3270 1036; Cranksets "Sport" / "Sport cotterless" -> 1476
  3320, "cotterless" -> 1496 1049 NR (to 1977); Velox rear -> 4167 2250;
  Renolds -> 1393 Renold. NR front/rear and Cinelli 64 via existing
  ranges; Brooks Professional via existing override.
- Left unlinked: bare "Campagnolo 10-speed" derailleurs on 94/78/80
  (Valentino or Nuovo Gran Sport, undeterminable); all Weinmann brakes
  (Vainqueur 999 variants, per the 1973 Raleigh decision; Tourist and
  centre-pull unnamed); Velox front (no row); Bluemels (no row); Cinelli
  bare bars/stem; generic Maes, quill, steel parts; Clement tubular.
- Regression: all other catalogs unchanged.


## 1973 Falcon — `1973_falcon_spec.csv` (17 bikes, 156 specs, 17 linked)

- Source: velo-pages.com Gallery2 album "Falcon catalog (1973)" (item
  27332, folder "Falcon"), read via Wayback (site 500s). 16 pages = items
  27343 + 3/4 steps to 27389 (list in `g2_view=slideshow.SlideshowMediaRss&
  g2_itemId=27343`); full-res 1433x916 never archived, only the 640x409
  display images (item+2, serial 2). Date is velo-pages' title; no printed
  date. data_source 139. Transcribed by hand 2026-10-08.
- Earlier edition of the same "range of lightweight cycles" brochure as
  1974 (same cover, Tour de Suisse / Nouvelle-France roundels, E. A.
  Clements foreword). Differences vs 1974: 76 chain "Regina or Renolds",
  Cinelli crown, 24" (not 24.5") size, alt finish Red/Black; 94 Lime Green
  with Prugnat lugs, Centre Pull, plastic saddle; 92 5-speed (10 extra);
  70 / 71 Flamboyant Purple 5-speed; 78 Bronze, Velox 5-speed, Weinmann
  lever 144; 80 not supplied in 5-speed; Majorca 64 and E.C. 74 here (no
  84, 69, E.C. 72); 82 / 83 "Super Tourist" with Sturmey-Archer 3-speed.
- Bikes: San Remo 76, 98, 96 ("exactly as" 98, spec copied), 94, 92, 80;
  Black Diamond 70 / 71; Olympic 78; Majorca 64; Model 68; Model 58;
  Super-Tourist De Luxe 88 / 89; Super Tourist 82 / 83 (not illustrated).
  "Handlebars and Stem: Cinelli" -> both labels.
- Repairs: 78 Derailleurs "None, Campagnolo Velox rear" so the split gives
  Front None (5-speed, no front mech) / Rear Velox.
- New overrides: Brakes 'weinmann centre pull with lever 144' -> 7929;
  Rear Derailleurs 'campagnolo velox rear' -> 4167. Everything else via
  existing 1975 keys (573 brakes, 3260 / 3270 hubs, 3708 / 3711 pedals,
  2801 Cinelli 64, 5303 Brooks, 7929 centre-pulls). Sturmey-Archer 3-speed
  -> brand-level 3593 (Motobecane precedent; Geared Hubs not reachable
  from the Hubs label).
- Left unlinked: bare "Campagnolo" derailleurs on 76 / 80; unbranded
  Cotterless cranks (explicit null since 2026-10-28: the later SR 9528 row caught them by substring), Quick
  release / Narrow barrel / Large flange hubs,
  Centre pull / side pull brakes; "Weinmann alloy tourist", "Weinmann with
  hooded levers"; Sprint / Endrick / Weinmann alloy rims; Clement.
- Regression: all other catalogs unchanged.

## Scope pass — 2026-10-24

- Deleted as utility bikes (user decision), with their 34 specs (none linked), and added to NON_ROAD_SKIP: 1973 Super Tourist Model 82 / 83 (all-rounder bars, Sturmey-Archer 3-speed, mattress saddle, Bluemels) and 1974 Tourist Model 82 / 83 (all-rounder bars, 5-speed with AW 3-speed option, mattress saddle, Bluemels, Endrick steel rims). Same pattern as the Super-Tourist De Luxe 88 / 89 dropped 2026-10-17. Ladies' drop-bar models (Black Diamond 71, Model 69) stay.
