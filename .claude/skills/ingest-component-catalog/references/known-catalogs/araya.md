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
