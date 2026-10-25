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

## Gipiemme "8 times world champions" catalogue (14 scans, c. 1986-87, disraeligears.co.uk)

- `data_source` 270, label `Gipiemme catalogue, "8 times world champions" (c. 1986-87)`, country IT. Source:
  https://www.disraeligears.co.uk/site/catalogo_gipiemme_-_8_times_world_champions.html (scans
  `00_main_images/catalogo_gipiemme_-_8_times_world_champions_scan_001..014_main_image.jpg`, 1560 x 1119). Gipiemme
  S.R.L., Grumolo Abbadesse, Loc. Vancimuglio (Vicenza), so later than the Oct 1984 catalogue (Camisano Vicentino).
  **Undated.** The page author guesses 1987 (the cover shows 1986 world-championship results); it is not the "1982"
  catalogue some sites label it. Dating rule used: `year_to` extensions to 1986 (safe lower bound), new rows 1986-1987,
  the one `year_from` move 1987 (safe upper bound).
- Contents: Cronospecial AA and B1 (Pista), Cronosprint BA, Sprint DD (overview pp. 4-5); cranksets 100AA / AT / A1 / A4,
  100CC / CT / BA Bagarre, Sprint 100SB, Minisprint 100DM; BBs 200AB-AT-A4, 200A1, Sprint 200DS; seat posts 600AA / DD /
  BA / CA / SS; pedals 300AX Multiasse, BB, B1, CA, DD, Sprint SA; hubs 400BB, CA, B1, B2, Sprint SA; headsets 500AA, CC,
  BP, B1, Sprint CE; brakes 700AA, CA, CC, Sprint SA; Cronospecial 800AE (801AE / 802AE / 870SE "Selectron"),
  Cronosprint 800CC (801CC / 802DD / 870DS), Sprint 802DD, 870BC; freewheels 906/907 AS, AA, CS, CC, CE; bars AA / CC / DD;
  stems 1400xx and chains 950xx as overview codes only. Out of scope: toe clips, washers, grease, 1840-1890 shell kit,
  braze-ons, fork ends. Misprints: "CONOSPECIAL 300B1", "400BA" (overview) for 100BA, steel freewheels headed
  "Cronospecial". Group codes differ between the overview pages and the detail pages; detail-page codes used.
- New vs Oct 1984: Bagarre crank, 100AT / 100CT triples, 100A4 cross and 100DM Minisprint cranks, Cronospecial 800AE
  Selectron derailleurs. Not pictured: the Economy group as such (only 500CE / 906CE), Cronospecial seat post 600BB
  (here 600AA).
- Rows inserted (10, 1986-1987, `source_ref` 270): 9511 Sprint 100SB, 9512 Crono Special 300B1 (Pista), 9513 400B2 (Pista),
  9514 Crono Sprint 700CA, 9515 / 9516 / 9517 Crono Special 801 AE / 802 AE / 870 SE, 9518 Crono Sprint 906 CE, 9519
  Crono Sprint CC bar, 9520 Sprint DD bar.
- Rows updated (36, `source_ref` 270): `year_to` -> 1986 on 9131, 764, 323, 2105, 2106, 8829, 8830, 5788, 6051, 9138,
  1587, 1589, 3006, 765, 3747, 3351, 9509, 5789, 4260, 6050, 2369; years set on 3348 (NULL -> 1984-1986) and 768
  (NULL -> 1986-1987); **`year_from` moved earlier 9469 1988 -> 1987** (revert value: 1988). Retitles (old title ->
  new, `search_text` rewritten): 4260 "Crono Sprint 800CC-801CC" -> "Crono Sprint 801 CC"; 6050 "Crono Sprint 800CC-870DS"
  -> "Crono Sprint 870 DS"; 768 "Sprint" -> "Sprint 700SA"; 1590 "Crono Sprint 400BA, Bagarre BA 100" -> "Crono Sprint
  100BA, Bagarre"; 1588 "Crono Special (Pista)" -> "Crono Special 100A1 (Pista)"; 9130 "Crono Special Triplo" ->
  "Crono Special 100AT, Triplo". Descriptions only: 9126 (2nd ring 35-40, was 30-40), 9127, 3748, 9137, 3007, 3353, 5786,
  3749, 3753.
- Spec differs between editions: 1589 100CC is 165-175mm cranks and 41-54T in Oct 1984 but 170mm and 52-53 / 42T here;
  both named in the description, `source_ref` 270.
- Rows deleted: 2368 "Crono Sprint 800CC-802DD" (1982, `source_id` CBFC2604-00EA-4496-9EDF-1F6D50DBC0F5), a duplicate
  of 2369 "802 DD", which survives; 6052 "Crono Sprint (friction)" (bare, no years, `source_id`
  41F71281-64AC-45B5-BA18-A73FD9EDC658), a duplicate of 6051 (870 BC retro-friction levers). Neither had bike_spec links
  or generator overrides.
- Unresolved / left for later (item F): 200AB / AT / A4 / A1 against the 1985 guide's 200 RS / RT / R1 (likely A -> R
  letter change) and 200DS against 65 "Sprint"; 400CA against 9509; 3349 "Crono Special Pista" hub (1988) against 3351
  (probable duplicates, 3351 is a `COMPONENT_OVERRIDES` target); 600SS against 5792 / 5793 "Sprint (type 1/2)"; 906AA /
  907AA against 8827 / 8828; Cronospecial bar AA against 2849; 3012 "Sprint" headset and 3004 "Crono Sprint E" against
  500CE (3012 description not changed, name match only); 763 vs 764 brake variant for 700AA.
- Follow-up merge (item F, done): 3349 "Crono Special Pista" (1988, bare, group 165, `source_id`
  400AD9EE-82B3-4C33-8D42-9717200FDE20, `source_ref` 262) deleted into 3351 "Special Pista" (400B1 track hubs, 2 bike
  specs, `COMPONENT_OVERRIDES` target). 3351 `year_to` 1986 -> 1988 (old 1986), `source_ref` 270 -> 262, description
  notes the later "Cronospecial Pista" name. 3349 had no bike_spec links or overrides.
- Follow-up, 200 bottom brackets (item F, done): the 1985 guide (`data_source` 259, scan 20) actually prints 200 BB / CC /
  BT / CT / B1 (320 / 337 / 330 / 330 / 315 g); our 1985 rows had misread B as R. The c. 1986-87 catalogue renumbers
  200BB / BT / B1 as 200AB / AT / A1 (not an A -> R change, as first guessed). Merged 9132 "200 RS" (= 200BB, 320 g,
  `source_id` 56000bc2-ceee-11f1-a2df-02fea3763e8d) into 64 (description now 320 g, "numbered 200AB in the later
  catalogue"). Retitled 9134 "200 RT" -> "200 BT" (`year_to` 1986) and 9136 "200 R1" -> "200 B1" (weight 316 -> 315 g,
  `year_from` **1985 -> 1984** from the Oct 1984 catalogue, `year_to` 1986; revert value 1985); `search_text` rewritten.
  Inserted 9521 "Sprint 200DS" (1986-1987, group 126). 9133 200CC and 9135 200CT left as they were. 65 "Sprint" is the
  1970s 700120 crankpin assembly, a different part. No bike_spec links or overrides on any of the rows.
- Follow-up, rest of item F (done), checked against the 1985 guide (`data_source` 259, scans 10, 13, 21, 30, 35; Gipiemme
  entries by name only, no part numbers):
  - **Reverted a guess:** 9509 "400DD, Crono Sprint" had been given "numbered 400CA in the later catalogue" and `year_to` 1986
    from a name match; back to 1984-1984, `source_ref` 269. The Oct 1984 catalogue has 400DD for the Cronosprint hub, so 400CA
    is a different number; inserted 9522 "Crono Sprint 400CA" (1986-1987, 32 or 36 holes).
  - 9513 400B2 (Pista): `year_from` 1986 -> **1985**, 545 g, from the guide's second, heavier Special Pista hub (inferred
    from weight and price, not a part number; old value 1986).
  - 3004 "Crono Sprint E" (bare) = the Economy headset 500CE (Oct 1984 catalogue, 1985 guide "Cronosprint Economy" 150 g,
    c. 1986-87 catalogue "Sprint 500CE"): retitled "Crono Sprint 500CE (Economy)", 1984-1986, group 85. 3012 "Sprint"
    left alone: it could instead be the 1970s Dual-Sprint 700168 headset. (1591 "Crono Sprint /E" is likely the 100CE
    Economy crank; not touched.)
  - Freewheels 8827, 8828, 8831, 8832: `year_to` 1985 -> 1986; the later catalogue's 906AA-907AA (alloy 5/6) and
    906CC-907CC (steel) look like the 906A / 905A and 906C / 905C lines renamed (judgement call).
  - Bars: 2849 description notes Cronospecial AA (26mm, 38-44cm; 338 g kept, the 1985 guide has 275 g); 9520 Sprint DD
    `year_from` 1986 -> **1985**, 355 g (the guide's 25.7mm bar; old value 1986). 9519 Crono Sprint CC has no guide match.
  - 9510 700CE Economy brakes `year_to` 1984 -> 1985 (guide lists Cronosprint Economic brakes).
  - 763 / 764 (hex socket vs nut on the centerbolt): no source can tell them apart; left as is.
  - `source_ref`: 259 on 9510, 9513, 9520 (changed from the guide); 270 elsewhere; 9509 back on 269.
