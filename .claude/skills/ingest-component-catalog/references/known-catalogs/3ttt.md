# 3ttt catalogs processed so far

## 3ttt Product Sheets catalogue (1986) — velo-pages.com album via Wayback, data_source id 134

- Source: velo-pages.com Gallery2 album `g2_itemId=6809` ("3ttt catalog -
  Product Sheets"), read through the Wayback Machine because velo-pages.com
  was 500ing site-wide. 30 pages, page N = `g2_itemId` 6709+3N, full image =
  item+2 at `g2_serialNumber=2` (495x640, legible). **Only pp. 1, 7-17 and 30
  were archived**; pp. 2-6 and 18-29 never were (CDX has nothing at any
  serial), so this is a partial reading.
- Dating: 2011 snapshots title the album "(1988)", the 2022 one "(1986)".
  Took **1986** from p. 1 itself: "The 3T mark appears 25 years ago ... arises
  as TECNOTUBO S.n.c. in 1961" (Mario Dedionigi, ex-Ambrosio); "In 1985 it
  becomes 3T S.p.A.". Footer: 3T S.p.A., Via Masaccio 26, 10151 Torino.
- First 3ttt source: all 82 prior rows were bare velobase. The catalogue
  names parts by **code** (AR84, ATRAID, CRAID, CCR, CGP, CC, RSCAL) and
  Italian name (Attacco = stem, Curva = bend, Reggisella = seatpost), and
  lists sub-part codes on the exploded-view sheets. Bar tiers on these pages:
  CRAID (economy, TdF only) < CCR (silver anodised) < CGP (120 mm notched
  outer sleeve, not heat-treated) < CC Record Competizione (T6). ATRAID is
  called "a very new line" for touring/O.E.M., which suggests ~1986, but
  `year_from` 1980 (velobase decade bucket) was left alone.
- Retitled (old title kept for matching), source_ref -> 134:
  6424 "3ttt Record 84 (AR84 silver)" -> "3ttt AR84, Mod. 84" (1980-1990
  kept; override `'3ttt ar84'` keys on spec text, 3 bike_spec links
  unaffected; "Record 84" kept in description);
  6403 "3ttt Raid" -> "3ttt ATRAID, Attacco Raid" (1980-1990 kept);
  2768 "3ttt Record Grand Prix" -> "3ttt CGP, Curva Record Grand Prix"
  (year_to 1970 -> 1986);
  2777 "3ttt Competizione TdF" -> "3ttt CC, Record Competizione (TdF)",
  2750 "3ttt Competizione (Merckx Bend)" -> "3ttt CC, Record Competizione
  (Merckx bend)", 2752 "3ttt Competizione (Gimondi)" -> "3ttt CC, Record
  Competizione (Gimondi bend)" (all year_to 1980 -> 1986, velobase weights
  kept);
  5719 "3ttt Criterium" (Seat Posts) -> "3ttt RSCAL, Reggisella Criterium"
  (1970-1990 kept, 241.5 g avg kept).
  `search_text` left as it was on retitled rows.
- Inserted (1986-1986, UUID source_id): 8296 Stems "3ttt AR84N, Mod. 84
  (black)" (the N = nero reading is from the photo: one black, one silver
  stem; the text doesn't say), 8297 Handlebars "3ttt CRAID, Curva Raid",
  8298 Handlebars "3ttt CCR, Curva Criterium".
- Deleted (merged into 2768): 2770 "3ttt Record Grand Prix (later version)"
  (Handlebars, 1970-1970, 315 g, velobase,
  `DD88696E-341B-4645-A257-0AC4AEB0436E`): same name, weight and years as
  2768, no bike_spec links, no overrides.
- Not touched: 2769 "Record Grand Prix (later version - dual groove)" (1990;
  the 1986 CGP's notched sleeve might be this "dual groove", can't tell from
  the line drawing); 2751 Competizione early Merckx, 2753 Pista; 6423
  "3ttt Record" stem (1986, 7 bike_spec links), 6404 Record AR, 6425
  Criterium stem, which are probably on the missing pages.
- Unresolved: the CC dimension sheet (p. 18) and everything on pp. 2-6 /
  18-29. The W/D/R/X/Y dimension tables on pp. 12/14/16 weren't copied into
  descriptions (column meanings unclear: W = width, D/R/X/Y not stated).
