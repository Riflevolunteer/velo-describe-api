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

## 3ttt catalogue, Bicycle Parts Pacific US edition (c. 1975) — retrobike.co.uk archive 1195, data_source id 135

- Source: https://www.retrobike.co.uk/archive/1975-3ttt-catalogue.1195/download
  (`375.pdf`, 6 pp scan, no text layer). The download 406s unless you first
  load the archive page with a cookie jar and send browser Accept headers +
  Referer. Stamped for the US distributor Bicycle Parts Pacific, 5841 Mission
  Gorge Rd, San Diego, tel. (714) (i.e. before San Diego moved to 619).
  **No printed date**: "1975" is only the archive's title. Used 1975 as a
  single-year bound: `year_to` 1970 -> 1975 on matched rows, inserts
  1975-1975, `year_from` never moved.
- Names, no part codes: Record Grand Prix, Record Competizione (Merckx or
  Gimondi), Record Competizione Superleggero, Record Competizione Track
  (Pista); stems mod. 1 Record (Strada) 60-140mm, mod. 2 / mod. 3 Record
  (Pista) 64/58 degree 110/120mm, Record Regolabile; seat pillar Mod. Record
  and Mod. Competizione ("new professional seat pillar"); saddles #10, #20,
  #30 Superleggero. Strengths are printed as kg/mm2 (Grand Prix R 25-30,
  Competizione R 30-38, Superleggero R 55-65). The Grand Prix text says
  Merckx is "sometimes called Tour de France".
- Velobase's 315 / 275 / 240 / 340 g weights equal this catalogue's figures
  exactly, so velobase probably copied them; they're not independent.
- Retitled (old title kept for matching), source_ref -> 135:
  2767 "3ttt Superleggero" -> "3ttt Record Competizione Superleggero";
  2753 "3ttt Competizione Track (Pista)" -> "3ttt Record Competizione Track
  (Pista)"; 6420 "3ttt Mod. 2 (64 degree Pista)" -> "3ttt Mod. 2, Record
  Pista (64 degree)"; 6422 "3ttt Mod. 3 (58 degree Pista)" -> "3ttt Mod. 3,
  Record Pista (58 degree)" (all year_to 1970 -> 1975);
  5228 "3ttt SL" (Saddles) -> "3ttt #30, Superleggero (SL)" (1970-1980 kept,
  294 g avg kept; SL = SuperLeggero is an inference from the name and the
  290 g weight, the catalogue never prints "SL").
- Updated, title kept, source_ref -> 135: 6406 Record Regolabile (adjustable
  version 1) (340 g matches; desc; year_to -> 1975); 5716 Mod. Record seat
  post (desc, sizes; year_to -> 1975; 254 g kept beside the catalogue 250 g).
- Description-only, source_ref left at 134: 2750 / 2752 CC Record
  Competizione Merckx / Gimondi ("double-butted larger centre section").
- Inserted (1975-1975, UUID source_id): 8299 Seat Posts "3ttt Mod.
  Competizione", 8300 Saddles "3ttt #20", 8301 Saddles "3ttt #10".
- Deleted (merged into 6417): 6418 "3ttt Mod. 1 Record Strada (first
  version)" (Stems, 1970-1970, no weight, velobase,
  `ED5AC6FB-D14F-413F-A7E4-BA504710BA61`): same title and years as 6417,
  no bike_spec links, no overrides.
- Not touched: 2768 CGP (already says non-heat-treated / sleeved / 315 g);
  2777 CC TdF (no TdF Competizione in 1975); mod. 1 Record Strada 6416
  "(2nd version)" / 6417 "(first version)" (290 g at 90mm fits either);
  Regolabile versions 2-5; 5717 Mod. Record 1980's; 5230 Criterium 78
  (385 g, close to #20's 390 g but no name evidence); 5229 Type A.
- Out of scope: Record stem binder bolt (6mm, steel R.80), expander (Imbus
  6mm), 6mm hex wrench.

## 3ttt catalogue sheets, R.J. Chicken & Sons UK (1989) — retrobike.co.uk archive 1407, data_source id 136

- Source: https://www.retrobike.co.uk/archive/1989-3ttt-chicken-sons-catalogue-extract.1407/download
  (`3ttt1989ChickenSon.pdf`, 6 pp, no text layer; same cookie-jar + Referer
  download as archive 1195). P. 1 is the UK importer RJC's cover letter dated
  **6 Sep 1989**; pp. 2-6 are 3TTT sheets H1-H5, each footed **5/89**.
  Letter: the most widely available bars are the Paris-Roubaix, "Super
  Competition" and Moscow Low Profile; of the stems, "the 84 and Record";
  3TTT is "the only producer to heat-treat its handlebars"; 84 stem fits
  Cinelli bars.
- The `Cat` numbers (B200..., S60D..., P262M, HT30, TB10) look like RJC's
  own catalogue numbers, not 3T factory codes (the 1986 sheets use AR84 / CC
  / CGP / RSCAL), so they went into descriptions as "RJC cat. ...", never
  titles. Bend profile numbers: TdF 64 Round, Merckx 66 Square, Gimondi 65
  Sloping, Saronni 63. H1 width table: TdF D158 R110 X65 Y43; Merckx D178
  R118 X65 Y52; Gimondi D158 R116 X100 Y49. "N.B. Cinelli width equivalent
  for 40 is 38": a 3TTT 40 is a Cinelli 38 (3TTT measures outside-to-outside).
- **Confirms** the 1986 entry's AR84N = black guess: the 84 is sold "Black
  Anodised" (S80B-S140B) or "Polished" (S80C-S140C).
- Gone vs the 1986 pages (weak, those survive only in part): CGP Record
  Grand Prix, CC by that name, CCR, CRAID, ATRAID, RSCAL.
- Retitled (old title kept for matching), source_ref -> 136:
  2764 "3ttt Paris - Roubaix" -> "3ttt Paris-Roubaix" (NULL -> 1989-1989,
  290 g kept); 2762 "3ttt Moscow Time Trial" -> "3ttt Moscow" (NULL ->
  1989-1989; catalogue 350 g beside velobase 270 g (Actual)); 2746 "3ttt
  Moser Time Trial" -> "3ttt Moser Low Profile" (year_to 1984 -> 1989).
- Updated, title kept, source_ref -> 136: 2777 / 2750 / 2752 CC Record
  Competizione TdF / Merckx / Gimondi (year_to 1986 -> 1989, treating the
  1989 "3TTT Competizione" as the same line; desc gains a dated "By 1989
  Competizione: 7000 alloy, polished or gun-metal grey, printed position
  marks, 330 grams" note since the spec differs from the T6 1970s-80s bar);
  6404 Record AR (AR stem "Record", year_to 1980 -> 1989, desc); 6424 AR84
  (desc: 6000 alloy, recessed tightener; years kept); 8296 AR84N (year_to
  1986 -> 1989, desc).
- Inserted (1989-1989, UUID source_id): Handlebars 8302 Aero Dynamic
  Competizione, 8303 Superleggera Race Team Service, 8304 Carbonair bend &
  stem, 8305 CST, 8306 CS, 8307 Extreme ATB, 8308 C Airone ATB; Stems 8309
  2002 / Attacco 2002, 8310 Triathlon, 8311 AR84 Computer Ready, 8312 Rear
  Tandem (adjustable), 8313 Extreme ATB, 8314 Mountain Top; Seat Posts 8315
  ATB Criterium.
- Not touched / flagged: 2745 "Aero - early 1980's" (maybe an earlier Aero
  Competizione, no evidence); 2754 "CSTRP/I" (maybe related to CST); 2766
  "Racing Team Service PISTA" (track sibling of Superleggera RTS?); 2767
  Record Competizione Superleggero left at 1975 rather than stretched to the
  1989 Superleggera RTS (250 g vs 240 g); 6395 "2002 Evol" (270 g, later
  evolution); 5715 "3ttt Mountain Top" filed under **Seat Posts** (1980,
  bare) - may be a mis-filed stem, or a real post. **6423 "3ttt Record"**
  (Stems, 1986-1986, bare) holds all 7 "T.T.T. Record" bike_spec links, and
  they're 1973-75 Raleighs + a 1974 Motobecane: that's really the 1970s
  Mod. 1 Record Strada (6416 / 6417), so the links want repointing once the
  first/second-version question is settled. Track stem on H4 is photo-only.
- Out of scope: spares B001 / S001 / S002, 3TTT Ribbon bar tape HT30-HT49,
  end plugs, TB10 bottle.
