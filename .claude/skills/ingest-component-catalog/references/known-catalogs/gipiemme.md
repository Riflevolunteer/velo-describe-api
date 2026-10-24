# Gipiemme catalogs processed so far

## Gipiemme catalogue binder, "Special" and "Dual-Sprint" lines (37 scans, 1970s, VeloBase archive)

- `data_source` 202, label `Gipiemme catalogue binder, "Special" and
  "Dual-Sprint" lines (1970s)`. Source: velobase.com/Pages/Resources/CatalogScans.aspx
  `Gipiemme/Gipiemme.zip` (37 JPGs, `Scan10035-10038`, `10047-10050`,
  `10063-10093` with gaps, `Scan10081` lower-case). Trilingual
  Italian/English/German loose-leaf binder, Gipiemme S.R.L., Camisano Vicentino
  (Vicenza), tel 0444-70855 / 70518, capital 200,000,000 lire. **Undated;**
  VeloBase labels it "70's era". Specs and exploded parts lists only: no
  weights, no prices.
- **Pages are missing from this set** (gaps in the file numbering): there are no
  derailleurs, brakes, levers or shifters, which the full binder should hold.
- Two lines: "Gipiemme Special" (Art. 600xxx, blue panels) and "Gipiemme
  Dual-Sprint" (Art. 700xxx, yellow panels). Listed: cranksets with BB 600100,
  600100/M (pantographed), 600101 (track), 600100/C (cyclo-cross, side plates),
  700100, 700135 (mini, Z 35/42, 145 mm); crankpin assemblies 600120 / 700120;
  pedals 600154 (superlight road), 600155 (track), 700156 / 700157 (steel road /
  track), 700158 / 700158/A (white / black alloy); hubs 600160 and 700160
  (small flange, 32 holes, 100/125 mm, quick releases 480-483); headsets 600168 and
  700168; seat post 700116/2; fork ends 600222 / 600223 / 600225; braze-on set
  700115; tools 1401-1414; grease 700612-700618. Out of scope: fork ends,
  braze-ons, tools, grease, frame bolts and sockets.
- Rows updated (13, description only, `source_ref` 202, no years changed): 1595
  Special 600100, 1596 Special 600100/M, 1593 Special 600101 (Pista) (2 bike
  specs linked), 1592 Dual Sprint crank (700100), 66 Special BB (600120), 65
  "Sprint" BB in the Dual Sprint group (700120), 3752 Special pedals (600154),
  3751 Special (Pista) pedals (600155), 3750 Dual Sprint pedals (700156-158; 3 bike
  specs linked), 3352 Special hubs (600160), 3350 Dual Sprint hubs (700160), 3010
  'Special' Strada headset (600168), 5791 Special seat post (700116/2). The DB's
  existing weights were kept (580 g, 335 g, 350 g).
- Rows inserted (2, 1970-1980, `source_ref` 202): 8825 Special 600100/C
  (Ciclocross), group 29; 8826 Dual Sprint 700135 (Mini), group 28. Years are the
  decade bucket the existing Special / Dual Sprint rows use.
- Left alone, by choice:
  - 3353 "Sprint" hubs (525 g, 2 bike specs) may be the 700160 hub under its
    shorter name, but "Sprint" (group 126) and "Dual Sprint" (group 28) are
    separate groups in the DB and nothing in the binder decides it.
  - 3012 "Sprint" headset (1980, group 126) may be 700168, so no Dual-Sprint
    headset row was added.
  - 3011 "Special (?), Special (Strada)" (97 g, 1980) and 3010 look like two
    rows for the same 600168 headset; not independently attested, a possible
    merge for later.
  - 3351 / 3008 (Special Pista hub and headset, referenced by
    `COMPONENT_OVERRIDES`): no page of this binder shows them.
  - The Crono Special, Crono Sprint, Azzurra / Azzurro and White Laser lines are
    all newer than this binder.
- Unresolved: a date for the binder; the missing derailleur, brake, lever and shifter
  pages (the other Gipiemme sources named in the VeloBase index, "1982
  Catalog", "1980's era brochures" and "Catalogs & Ads 1978-1984", were not
  looked at).

## Gipiemme freewheel and "Cronospecial" pedal brochures (4 scans, c. 1982-83, equusbicycle.com)

- `data_source` 203, label `Gipiemme freewheel and Cronospecial pedal brochures
  (c. 1982-83)`. Source: http://equusbicycle.com/bike/gipiemme/ (the whole
  page is four images: `images/01gipiemmefreewheel.jpg`,
  `02gipiemmefreewheel.jpg`, `01gipiemmepedal.jpg`, `02gipiemmepedal.jpg`,
  1200 px). Gipiemme S.R.L., via XX Settembre 60, Camisano Vicentino. **Undated;**
  equus says "early to mid 1980's". The pedal leaflet announces the Multiasse as
  a "1983 world-wide novelty" that is "not yet on sale", so c. 1982-83 was used.
  It is **not** the 1982 catalogue, and holds no derailleurs, brakes or levers.
- Freewheel brochure "Ruote libere / Freewheel": light-alloy "Cronospecial"
  907 AS (7-speed), 906 AS and 906 A (6), 905 A (5), and steel "Cronosprint"
  907 CS, 906 CS, 906 C, 905 C, with tooth ranges, spacers 941-946 and tool 910.
  Narrow racing chains (max 7.2 mm) for the 907 and 906 S versions, regular
  chains for 906 A / C and 905. Pedal leaflet: the "Cronospecial" road/track
  set, and the patented "Multiasse" eccentric axle (0-5 mm, +/-2.5 mm).
- Rows updated (4, `source_ref` 203): 2105 Crono Special (906AS) and 2106 (907AS)
  (descriptions, 203 g and 195 g kept, years 1982 unchanged), 3747 Cronospecial
  pedals (description), 3748 Cronospecial Multiasse (**1982 -> 1983-1983**, from the
  "1983 novelty, not yet on sale" text).
- Rows inserted (6, 1982-1983, `source_ref` 203): 8827 Crono Special 906 A and
  8828 905 A (group 27); 8829 Crono Sprint 907 CS, 8830 906 CS, 8831 906 C, 8832
  905 C (group 85). The 1982-1983 span covers the leaflet's uncertain print year.
- Left alone: 2107 "Crono Sprint (gold)" and 2108 "(silver)" freewheels, which
  are finishes in velobase and cannot be tied to a steel code; 3749 Cronosprint
  pedals (not in the leaflet).
- Still unresolved, and why: the derailleurs, brakes and levers (about 30 bare
  Gipiemme rows) have no source. The other two Gipiemme entries in VeloBase's
  index are velo-pages albums: "Gipiemme 1982 Catalog" (album
  `g2_itemId=1483`, page items 1505-1546, the 2020 Wayback copy only has
  thumbnails of about 5 KB) and "Catalogs & Ads 1978-1984" (`g2_itemId=65`).
  velo-pages.com is down site-wide, and on 2026-10-18 the Wayback Machine itself
  answered "Temporarily Offline", so full-size scans could not be checked. Retry
  the CDX search for images over about 15 KB in items 1505-1546 when Wayback is
  back.

## Gipiemme "Gruppi completi e componenti" catalogue (9 scans, October 1984, disraeligears.co.uk)

- `data_source` 269, label `Gipiemme catalogue, complete groups and components (Oct 1984)`, country IT. Source:
  https://www.disraeligears.co.uk/site/gipiemme_-_catalogue_1984.html (scans at
  `00_main_images/gipiemme_catalogue_1984_-_<name>_main_image.jpg`: front_cover, section_divider, page_g1..g6,
  rear_cover; 1560 x 1072 landscape; only the cover's full-size link is in the page HTML, the rest follow the same
  pattern). Gipiemme S.R.L., via XX Settembre 60, Camisano Vicentino; IT / EN / FR / DE. **"10/84" is printed on every
  page**, so the date is stated. Read 2026-10-24.
- Seven groups (G1 table): Cronospecial AA, Special BB (road); Cronosprint Nero / Aero CA, Cronosprint Classic CC,
  Cronosprint Economy CE (road); Special B1 (track); Special B4 (cross). G1 prints "Nero" where G4 prints "Aero". Classic
  and Cross are in the G1 table only, never pictured, so no rows. Pages: G2 Cronospecial AA, G3 Special BB, G4
  Cronosprint Aero CA, G5 Cronosprint Economy CE, G6 Special Pista B1.
- New part numbering, replacing the 1970s binder's 6001xx / 7001xx: 100 crankset, 200 bottom bracket, 300 pedals, 400
  hubs, 500 headset, 600 seat post, 700 brakes, 800 derailleur set (front, rear, shifters); the suffix is the group
  (AA, BB, CA, CC, CD, CE, DD, A1, B1). Cronospecial and Special share 100AA / 200BB / 400BB / 500AA / 600BB / 800AS.
  The page author (disraeligears) guesses the derailleurs are re-badged Simplex (800AS = SLJ6600, 800CS = LJ4000,
  800DS = SX610); the catalogue itself names no maker. G1 also prints thread sizes (pedals 9/16x20F or M14x1.25, BB
  "36x25F" / M35x1 / "1.360x24", hubs 35x24F / 37.1x1 / 1.370x24, headset 25.4x24F / M25x1 / 1"x24, seat post
  diameters 25-27.2); the 36x25F and 1.360 look like misprints and were not used.
- The first Gipiemme catalogue on file with derailleurs, brakes and brake levers (the binder, `data_source` 202, has none;
  203 is freewheels and pedals only).
- Rows inserted (2, 1984-1984, group 85 Crono Sprint, `source_ref` 269): 9509 400DD hubs (Aero and Economy), 9510 700CE
  brakes (Economy, black enamel).
- Rows updated (19, `source_ref` 269): `year_to` -> 1984 on 1587 (100AA), 1589 (100CC), 5788 (600DD), 765 (700CC),
  4261 (800DS rear); `year_from` -> 1984 (old values in brackets) on 9133 200CC (1985), 64 200BB (1988), 3351 400B1
  (1985), 9137 500AA (1985), 321 Crono Special levers (1985), 324 Special levers (1985); descriptions only on 3348 400BB,
  3007 500CC, 3008 500B1, 5790 600CA, 5786 600BB, 2367 / 4259 800AS front and rear, 3747 300AA. No titles changed, so
  no `search_text` rewrites. The old 3747 text ("current model in the 1982-83 leaflet") was dropped as a citation of
  its own source.
- Judgement calls and open items (all left unchanged):
  - 100CE (Economy crank) and 500CE (Economy headset) are probably 1591 "Crono Sprint /E" and 3004 "Crono Sprint E"
    (no years, group 85 / none); the "E" is only suggestive.
  - 100A1 (Pista crank) could be 1588 "Crono Special (Pista)" (1982-88, group 165) or 1593 "Special 600101 (Pista)"
    (1970-70).
  - 200B1 (Pista bottom bracket): 9136 "200 R1" (1985, 316 g) is probably the same part with B read as R; recheck the
    1985 guide pages (`data_source` 259) before relinking.
  - 800CS (Aero front and rear) and 800DS (front): the DB has 2368 / 4260 "800CC-80xCC" and 2369 "802 DD" from 1982,
    so 800CS may be a rename of 800CC; not inserted.
  - Pedals 300BB, 300CA and 300DD (DB 3752 Special, 3749 Cronosprint) and the Cronospecial and Special brakes (763 /
    764 and 766 / 767, "nut vs hex socket" cannot be seen in the photos) left alone.
  - 5788 "Crono Sprint 600DD" sits in group 27 (Crono Special) although its title and the catalogue say Crono Sprint
    (group 85); group not changed.
  - Spelling: the catalogue prints "Cronospecial" / "Cronosprint" as one word; the DB mixes it with "Crono Special" /
    "Crono Sprint" (about 100 rows). A spelling pass was not done.
  - Absent from this catalogue and not capped (one catalogue's absence): Dual Sprint, Azzurra, Azzurro, Bagarre,
    Exploit, Crono Sprint White Laser rows.
