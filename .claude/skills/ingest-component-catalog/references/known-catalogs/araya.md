# Araya catalogs processed so far

## Araya catalogue excerpts 1980-1995 — bmxmuseum.com reference 4505, data_source id 152

- Source: https://bmxmuseum.com/reference/4505 ("1980-1995 Araya
  Catalogs", submitted 2016). Eight `_blowup.jpg` two-page scans served
  from `/images/reference/<x>/<y>/<yyyy><pp>-<yyyy><pp>...`; downloaded
  with a browser UA + Referer and bound with `bind-images-to-pdf.sh`.
  **Years and page numbers come from the scan filenames, not from print**
  (nothing on the pages is dated): 1980 pp. 1-2, 1982 pp. 1-2, 1984 pp.
  7-8, 1985 / 1988 / 1990 / 1992 pp. 9-10, 1995 pp. 1-2. A comment points
  to http://araya-rinkai.jp/catalog as a possible cross-check.
- Each is a fragment of a larger catalogue, so absence from a spread means
  nothing — **except** 1985, 1988, 1990 and 1992, whose right-hand page is
  the full-range "approximate measurement and weight table" (model, size,
  carton contents, net/gross kg). Net weight / contents reproduces every
  printed per-rim weight it can be checked against (RB-17 335g, 7X 445g,
  CV-7 375g, VX-400 400g, ADX-4 250g), so table-only models were given
  "approx." weights from it and those four years count as complete range
  lists (absence = dropped).
- Part numbers (No. 3945-4098, 64467-64483) appear only on 1980-90 spec
  boxes; the DB keeps model-name titles (`Araya <model>`) and carries the
  part numbers in descriptions. The 1992 and 1995 spreads name models by
  model only.
- First Araya source: the DB had 20 bare velobase rows (brand 488, Rims +
  one Wheel(sets)). `category_brand` already had Rims and Wheel(sets).
- Retitled (old title kept here for matching), source_ref -> 152:
  4916 "Araya 16A (box style alloy clincher)" -> "Araya 16A" (covers the
  16A(1)/(3)/(5) widths; 1960-1990 kept);
  4923 "Araya 7x" -> "Araya 7X", year_to 1980 -> 1995, 590g measured kept;
  4924 "Araya Aero 1 (ADX-1)" -> "Araya ADX-1", year_to 1990 -> 1992;
  4926 "Araya Aero 2 (ADX-2)" -> "Araya ADX-2", year_to 1980 -> 1982;
  4927 "Araya Aero 4 (ADX-4)" -> "Araya ADX-4", year_to 1990 -> 1995;
  4917 "Araya 16B (Road version)" -> "Araya 16B (No. 3956, 350g)" and
  4918 "Araya 16B (Track version)" -> "Araya 16B (No. 3955, 300g)" — the
  catalogue sells the 16B by weight grade (300 / 350 / 400g), never as
  road vs track, so velobase's labels went; both year_to 1980 -> 1992;
  4920 "Araya Tita Ace Gold Titanium" -> "Araya 16B Tita Ace Gold" (No.
  4092; year_from 1982 -> 1980);
  4928 "Araya CT-19N" -> "Araya CT-19" (no catalogue ever writes the N);
  4934 "Araya VX400" -> "Araya VX-400", year_to 1990 -> 1992.
- Years / descriptions only: 4921 Araya 18 1980 -> 1982-1992 ("NEW" 1982;
  M-18 from 1992); 4922 20A year_to -> 1995, velobase's 460g replaced (no
  size weighs that: 700C 405g, 27x1 415g, 24" 340g, 20" 275g then 330g);
  4925 ADX-1W year_to -> 1988; 4919 16B Gold NJS year_to -> 1992; 4929
  R-50 year_to -> 1992 (replaced R-40 in 1988); 4930 RM-20 year_to ->
  1992; 4932 SS-45 NULL -> 1985-1993 (1993 via the Bianchi Europa, source
  47); 4933 TX-350 NULL -> 1992; weights from the tables added as approx.
- Inserted (47 rows, UUID source_id, years = first/last spread seen):
  - Road/touring rims: 15 (1982-1995, M-15 from 1992), SS-40, SP-30 (8424),
    SP-20, CTL-370 (CTL-385 from 1992), RS-430, VX-300 (8428), PX-45
    (8429), PX-35 (8430), LP-50, LP-60.
  - Tubular: ADX-3 (20" BMX), ADX-5, ADX-240CF, Pro Staff 400, Pro Staff
    340, R-40 (1985 only).
  - Aero clincher: ADX-2W (1980-82), ADX-7W (BMX, 1984-88).
  - MTB: 7S, RM-25, RX-7, MP-22 (1985-1995, all sizes), XA-1 (1984-88,
    20" "Aero Turbo" + 26"), RM-400 Pro, RM-14, RM-17, CV-7 (1990-95, 26"
    + 20" side-concave), VP-20 (8450, 1990-95), AP-21 (8451, 1992), TM-18
    (8452, 1992), RM-395 Team (1992-95, Team-XC in 1995), RM-910DH,
    RM-915DH, TM-810F, TM-830H, TM-820, GP-710 (all 1995).
  - BMX: 7C (1980-82), 7X(N) (1984-90), 7L (1984-85), 17(4) chrome steel
    (1984), RB-17 (1990-95, 20" + 24"), RB-907X "Super 7X" (1995).
  - Wheel(sets): EP Wheel (plastic mag, 1985-88), Carbon Disc (1985-92),
    Aluminum Disc (1985-92).
- Renames carried in descriptions: 18 -> M-18, 15 -> M-15, CTL-370 ->
  CTL-385, Carbon Disc -> Carbon Disk Light, Aluminum Disc -> Disk VX (all
  1992); R-40 -> R-50 (1988); RM-395 Team -> Team-XC, 7X -> RB-907X Super
  7X (1995, beside the plain 7X).
- Bike links (bike skill, same day, overrides in the Rims section): 1985
  Raleigh Alyeska / Grand Prix "SP-30" -> 8424; 1993 Bianchi PX-35 ->
  8430, PX-45 -> 8429, AP21 -> 8451, VP20 -> 8450, VX300 -> 8428 (9 specs;
  the CSVs drop the hyphen). PX-35 / PX-45 / AP-21 / VX-300 year_to
  extended 1992 -> 1993 on the Bianchi catalogue (source_ref 47). 1993
  Bianchi Ibex "RM-18T" matches no Araya model (TM-18 is the nearest) —
  explicit null override, left unlinked. 1985 Raleigh Portage "Araya 650
  x 35c" names no model, unlinked.
- Not touched: 6953 "Araya Tri-Spoke" (Wheel(sets), velobase, no years) —
  not in any of these spreads.
- Unresolved: real print dates; the 20A 20x1-1/8 weight (275g in the
  tables and 1984-90 boxes, 330g in the 1992/95 boxes — both recorded);
  the models on the pages not scanned (e.g. 1984 pp. 1-6 road range);
  whether "Santana" in the 1992 spoke chart is a model or a customer.

## Araya Rim catalogue (4 images, 1978, Reminiscence Part 31) — data_source id 215

- `data_source` 215, label "Araya Rim catalogue (1978)". Source:
  http://cyclespeugeot.web.fc2.com/reminiscence/araya78.html, JPGs
  `catalog/araya78/araya_01-04.jpg` (720 x 510). Japanese, Araya Industrial Co. Ltd., Osaka.
  Dated 1978 by the site; the cover carries a news flash that two Japanese riders on Araya
  rims (Gold label tubulars) won 1st and 2nd in the Aug 1977 World Championships in
  Venezuela (the same flash as the Sugino 1978 catalogue). Pages: 1 cover (20A), 2
  back cover with addresses, 3 Model 16B (Gold, Red, Blue labels) and Model 20A, 4
  Models 16A (1), (2), (4), (5), 7B and 7C. The earliest Araya source; the DB's other
  Araya rows come from the 1980-95 bmxmuseum excerpts (data_source 152). Tables
  read at 720 px, so weights could be a digit off.
- Confirmed with no change: 4916 16A (16A(1) 26x1-3/8 630 g exact), 4922 20A (700C 405 g,
  27x1-1/4 415 g exact; 5 bike links), 4917 / 4918 / 4919 16B (Gold 300 g, Red 300 g, Blue
  about 400 g, 24x1-1/4 Red about 400 g; agrees with the 400 g grade noted for 1980-82).
- Updated (`source_ref` -> 215): 8460 7C `year_from` 1980 -> 1978 (20x1.75, 455 g, the
  same weight as the 1980 spec box).
- New (2 rows, 1978-1978, group NULL): 8927 "16A (2) / (4) / (5) hollow" (16A(2) 27x1-1/4
  610 g, 650B x 35B 560 g, 24x1-1/4 530 g; 16A(4) 22 mm, 700C 525 g, 27x1-1/4 535 g; 16A(5)
  hollow 700C 415 g) and 8928 "7B" (BMX 20x1.75, 420 g). The 4916 16A row's description is
  at the 255-character limit, so the 1978 variants live in their own row.
- Unresolved: the 1978 hollow 16A(5) reads 415 g against 485 g in the 1980 spread (4916 gives
  16A(5) 22.0/16.0 700C 485 g), so it may be a later generation or a different measure.
  The 1978 pages also say the 20A matches the structure of the new Mavic rim announced
  with the Michelin Elan in 1976; no row changed on that.

## Araya Rim catalogue (11 images, 1993, Reminiscence Part 34) — data_source id 274

- `data_source` 274, label "Araya Rim catalogue (1993)". Source:
  http://cyclespeugeot.web.fc2.com/reminiscence/araya93.html
  (`catalog/araya93/araya93-01..13.jpg`, 640 px; 02 and 04 are not linked on the
  page; read at 2x). English with Japanese text. Dated 1993 by the site; the
  cover print line is too small to read for certain. Page 1 is the cover plus
  an "approximate measurement and weight table" (too small to read), pp. 2-12
  the model pages (MTB, cross / hybrid, all-terrain, racing and touring,
  disk and special tubular, tubular, BMX), p. 13 spoke-length charts (out of
  scope). A complete range list: models in the 1992 DB that it lacks (CT-19,
  RM-14, RX-7) keep their 1992 `year_to`.
- NEW in this printing: RM-395 Team-XC, RM-400 Pro-XC, TM-810F, GP-710,
  AP-21 (24), SA-530C, ADX-510, RT-520, SA-230S, Santana 350.
- New (5 rows, 1993-1993, ids 9594-9598): SA-530C, ADX-510, RT-520, SA-230S,
  Santana 350 (Japanese domestic only).
- `year_from` moved EARLIER (1993 is earlier than the 1995 spread that was
  the only source): 8456 TM-810F 1995 -> 1993, 8459 GP-710 1995 -> 1993.
- `year_to` extended to 1993 (and descriptions given the 1993 spec-box
  figures, `source_ref` -> 274): 8446 RM-400 Pro (415g as Pro-XC), 8448 RM-17
  (430g, DB 440g), 4930 RM-20, 8452 TM-18, 4934 VX-400, 4933 TX-350, 8427
  RS-430, 8424 SP-30, 8425 SP-20, 8431 LP-50, 8432 LP-60, 4921 18 (M-18),
  8426 CTL-370 (CTL-385: 385g / 355g), 4924 ADX-1, 8434 ADX-5, 8435
  ADX-240CF (240g), 8437 / 8436 Pro Staff 340 / 400, 4929 R-50, 8467
  Carbon Disc (Super Light 920g, Light 1,300g).
- Descriptions only (`source_ref` -> 274): 8453 RM-395 Team (Team-XC name
  and 410g attested 1993, not 1995; `year_to` 1995 kept), 8451 AP-21 (24"
  465g), 8429 PX-45 (500g, DB 490g), 4932 SS-45 (480g, DB 450g), 4920 16B
  Tita Ace Gold (1993 says titanium material, 310g; DB said "titanium-coloured
  anodised", 300g), 4933 TX-350 (465g; the 372g was a carton-table figure).
- Old figures kept in the descriptions where the weights disagree.
- Left alone: 4922 20A (1993: 700C 460g, 26x1 420g, 24x1-1/8 385g against
  405g / 340g from 1978-92; edition difference, not appended, 255 limit), 8422 15
  (M-15 1993: 620 / 580 / 575 / 530g against 570 / 565 / 520g), the 16B family
  (4917 350g, 4918 300g, 4919 Gold NJS; 1993 has 16B Gold 310g polish 36H and
  16B Red 360g, which do not map cleanly), 4931 "Super Aero" (velobase,
  432g Actual; both SA-530C and SA-230S carry a "Super Aero" label, the
  230S is 435g), 8468 Aluminum Disc (not in this catalogue, stays 1992).
- Bike links: none changed; existing 1993 Bianchi links (8428-8430, 8450,
  8451) stay on rows whose years now reach 1993 anyway.
