# Stronglight catalogs processed so far

## Stronglight "Les voies de la performance / The road to performance" brochure (12 pages, c. 1985-89, VeloBase archive)

- `data_source` 194, label `Stronglight "Les voies de la performance"
  brochure (c. 1985-89)`. Source: velobase.com/Pages/Resources/CatalogScans.aspx,
  `Stronglight/Stronglight_1980s.pdf` (download path
  `%2fCatalogScans%2fStronglight%2f...`; the bare `%2fCatalogScans%2f...`
  path returns an HTML error page, not the PDF). Bilingual FR/EN leaflet,
  Haubtmann-Stronglight, 54 bd Fauriat, St-Etienne; pages 1-3 and 10-11 are
  photos. **Undated.** The 8-digit phone number "77 25 48 68" is the format
  France adopted in October 1985, and the Delta line and VTT/MTB variants
  fit the mid-late 1980s, so 1985 is used as a floor, never a later guess.
- Listed: cranksets Delta (ST DEL TAD / TAT), 107 (ST 107D / T / RHD /
  S / RHS), Bio Strong 400 LXT (ST 400 LXT BIO), 300 LX (ST 300 LXD / LXT),
  100 LX (ST 100 LXD / LXT), tandem ST 100 LXTD / LXTDT and ST 107 TDD /
  TDT; bottom brackets JPDELTA1, Delta adjustable (Ti or steel axle), JP
  651 / JP 650 sealed; headsets JD Delta, JD X12 (+ VTT/MTB), JD A9; hubs MR
  Delta (MFR / MRR) and MR Delta VTT; seatposts TS 200 and TS 300 (VTT).
  The cover also shows a 200 LX crank arm with no page.
- Rows updated (12, `source_ref` 194): `year_to` -> 1985 on 1883 "107", 1884
  "107 (triple)", 1916 "107 Pista", 156 "Competition ref. 650", 157
  "Competition ref. 651", 3127 "Delta" headset, 3112 "A9 (Stronglight France
  on locknut)" and 3592 "Delta" hub; descriptions only on 1910 "Delta" crank
  (702 g measured = catalogue triple), 1875 "100 LX", 158 "Delta (titanium
  axle)" (224 g Spec = catalogue) and 3126 "X12". No titles changed, so no
  `search_text` rewrites.
- Rows inserted (9, 1985-1985, `source_ref` 194): 8802 300 LX, 8803 Bio
  Strong 400 LXT, 8804 100 LX tandem, 8805 107 tandem, 8806 JP Delta 1
  (JPDELTA1, group 61), 8807 JD X12 VTT/MTB, 8808 MR Delta VTT/MTB, 8809 TS
  200, 8810 TS 300 MTB.
- Judgement calls:
  - 156 / 157 were matched to JP 650 / JP 651 by ref number and axle
    material; catalogue weights (199 g, 272 g) differ from the DB's measured
    190 g and 238 g, which were kept alongside. The weakest match.
  - A9 variants: only 3112 ("Stronglight France on locknut") was extended;
    3113 ("Spidel on locknut") left alone because the brochure locknut photo
    reads STRONGLIGHT.
  - 1875, 158 and 3126 had null years and kept them (a 1985 year_from would
    be false precision).
  - TS 200 / TS 300 might be one of the 1980-dated seatposts 5918-5921
    (aero, fluted, two-bolt aero, Delta); nothing in the brochure decides
    it, so they went in as new rows.
- Left alone: 80, 185, 190, 390, Ironlight cranks, JP1000 BB, Delta pedal,
  the three chainrings (107 Outer, Aero Delta, BioStrong) and the 200LX
  crank 1889 (cover photo only). Hub 3592 keeps `year_from` 1980, which is
  almost certainly too early for the Delta line (DB crank 1910 starts 1985);
  a brochure cannot move a start date earlier.
- Unresolved / next: `Stronglight/Stronglight_no26.zip` in the same archive
  (presumably Catalogue no. 26, 1982) is unread and is the best source for
  the 1970s cranks (93, 99, 105 bis, 106) and headsets (P3, V4, S5, D6, S7;
  note the S7 override in `generate-bike-update-sql.js` says a catalogue shows
  it in 1979 while the DB has 1981-83). The VeloBase index also names
  Stronglight no. 24 (1978), no. 27 (1984) and a 1958 catalogue, but only
  the 1980s PDF and no. 26 zip have download links. The velo-pages "Stronglight
  catalog (1958)" (~11505-11526, 6 images) is still unused, see TODO.

## Stronglight "Catalogue n° 26" (16 scans, 1982, VeloBase archive)

- `data_source` 195, label `Stronglight Catalogue no. 26 (1982)`. Source:
  `Stronglight/Stronglight_no26.zip` (scans `01_front_cover.jpg` ..
  `16_RearCovers.jpg`, credited "Bob Hanson, Albuquerque, 2008"). Bilingual
  FR/EN, Etablissements Verot-Perrin, 54 bd Fauriat, Saint-Etienne, phone
  "(77) 25-48-68" (old 6-digit format, so pre-Oct 1985). **Undated; 1982 is
  the VeloBase index title** ("no. 26 (1982)", between no. 24 (1978) and no.
  27 (1984)), which the contents fit: D8 and S7 headsets current, the 700T /
  700A monobloc BB flagged "Nouveau modele", the 99 bis NM flagged "new
  model only in 170". Cranks, BBs, headsets, tandem diagram and tools only.
- Listed: cranksets 106, 104 (+ 104 bis), 99 bis NM (and 99 with
  non-perforated rings), TS bis, 105 bis, 49, 49 Tri; BB sets 65, 34, 700T /
  700A monobloc, 650 / 651 sealed; headsets D8, S7, P3, V4 Competition;
  tandem series (sets 49 or 99 NM, a drive-side diagram, no part number).
  Out of scope: extra-light screws 59 D-60 D / 61 D-62 D / 61 D-74 D,
  grease, cap, tools 82-94, 220/221, 710, 720, 730.
- Rows updated (17, `source_ref` 195). `year_to` -> 1982: 1882 "106", 1909
  "99 BIS NM", 1906 "99", 1915 "Touring Sport Bis" (was 1970), 1880 "105
  Bis", 1894 "49A" (was 1970), 1893 "49 Tri" (was 1970), 155 "Competition
  ref. 65", 3125 "V4 Competition (later version)". Description only: 1879
  "104 bis", 150 "700a", 151 "700t", 153 "No. 34", 157 "Competition ref.
  651", 3117 "D8", 3123 "S7", 3120 "P3 (later version)". Weights matching
  the DB exactly: 99 bis NM 944 g, 105 bis 908 g, 49 Tri 975 g, 49A 895 g,
  TS bis 920 g, S7 192 g. No titles changed, so no `search_text` rewrites.
- Row inserted: 8811 "Stronglight 104" (1982-1982, cranksets), the plain
  104; the DB only had 104 bis (null years) and "104 (Peugeot logo)" 1878
  (1980), which was left alone.
- Edition difference: 157 (651 BB) is 275 g here and 272 g in the 1980s
  brochure (`data_source` 194); both are named in its description and the
  measured 238 g was kept.
- Judgement calls and open items:
  - 1894 "49A" was extended to 1982 on its 895 g weight match alone; the
    catalogue calls the part simply "49".
  - 1907 "99 (new style, drilled)", 1908 "99 (new style, triple)" and 1909
    "99 BIS NM" may be the same part (bis = perforated rings). Not
    merged; the catalogue cannot decide it and bike links were not checked.
  - Null years kept null on 150, 151, 153, 1879 (700T / 700A are "new
    model" here, so a 1982-ish start is plausible but not stated).
  - The S7 headset: the DB's 1981-83 agrees with this catalogue. The
    `generate-bike-update-sql.js` comment "catalogue shows it 1979" is not
    supported by no. 26 (probably an earlier edition) and was left as is.
  - Absent from no. 26 and so unchanged: D6 (3116, 1977-80), S5 (3122,
    1973-80), 561 (154), 107 / 185 / 190 / 390 / Ironlight cranks (later or
    not listed), 1878 104 (Peugeot logo), 1914 Touring Sport, 105 ter, 63
    and earlier cranks, P3 Tandem, JDX94.
  - Catalogues no. 24 (1978), no. 27 (1984) and a 1958 catalogue are named on
    the VeloBase index but have no download link; the velo-pages "Stronglight
    catalog (1958)" (~11505-11526, 6 images) is still unused, see TODO.

## Stronglight "Catalogue n° 22" (19 scans, c. 1974, labibleduvelocataloguesstronlight.blogspot.com)

- `data_source` 265, label `Stronglight Catalogue no. 22 (1974)`, country FR. Source:
  https://labibleduvelocataloguesstronlight.blogspot.com/p/stronlight-1974.html (Blogger images
  `CATALOGUES STRONLIGHT 1974 (1)..(19)`, 1237 x 1582; the "(N)" in the URL is encoded as `%2528N%2529`,
  so a regex on it picks up a stray "28" prefix). FR / EN / DE / ES. Title page prints "catalogue n° 22"
  and no year; **1974 is the blog page title**, fitting between no. 24 (1978) and earlier. Scan N is
  printed page N-1 from scan 3 on. Read 2026-10-24.
- Listed: cranksets 99 (double 800 g, triple 850 g, "nouveau 99", slotted rings), 93 (double 850 g, also
  a track version; 93 Tri 900 g), type 49 "nouveau modele" with Intraviss bolts (810 g; rings no. 63
  38-48T, no. 49 46-53T, replacing ring no. 12), forged 3-arm 53 (540 g), 3-pin "Made by Stronglight"
  52 (680 g pair); chainwheels 255 (355 / 455) and 253; bottom bracket no. 34 (285 g); headsets S5
  Super Competition (503-508), P3 (103-108), V4 Competition (303-308). Cotterless axle length table
  (113 P / 118.5 C / 120.5 R / 124 S / 125.5 T), tools 82-85 and loose bolts / cups: out of scope.
- Rows inserted (4, 1974-1974, `source_ref` 265): 9500 93 Tri, 9501 No. 53, 9502 255, 9503 253.
- Rows updated (10, `source_ref` 265): 153 No. 34 (years 1975 -> 1974-1982, no. 26 also lists it),
  1897 Diamant No. 52 (`year_to` 1950 -> 1974; 680.4 g Spec = catalogue 680 g pair, so dropped),
  1905 93 Piste (`year_to` 1970 -> 1974, from "also exists in a track version"), descriptions only on
  1904 93, 1907 / 1908 99 new style (drilled / triple), 1317 "63", 1322 "Type 49", 3122 S5, 3119 P3
  (earlier version). 1894 49A description names both editions (810 g 1974 new model, 895 g no. 26) and
  keeps `source_ref` 195. No titles changed, so no `search_text` rewrites.
- Judgement calls and open items:
  - **Corrected by n° 25 (2026-10-24):** n° 22's 99 has slotted, non-perforated rings, so it is the plain
    1906 "99" (800 g / 850 g now on 1906); the "new style, drilled / triple" rows 1907 / 1908 are the
    perforated 99 Bis (900 g / 972 g, n° 25). My first match put the n° 22 spec on 1907 / 1908.
  - 1874 "93 Pista" (id 1874, source_id 24293C73-3E73-44F9-8378-1C194DE531D3, bare Velobase row, no years,
    no links) was merged into 1905 "93 Piste" (the catalogue says "version piste") and deleted 2026-10-24.
  - 1880 "105 Bis" starts 1970 in the DB, but n° 22 has no 105 and Palo Alto 1976 (row 9079) calls the
    105 "new for 1976". Not changed (`COMPONENT_OVERRIDES` pins 1880 to 1970-82 for the 1977/78
    Peugeot specs); needs a decision and a matching override change.
  - 1895 49D (Depose) 1936-79 is the earlier exposed-bolt 49 that n° 22 says the new model replaces;
    its `year_to` is probably too late but absence caps nothing.
  - Absent from n° 22 and unchanged: 104, 105 bis, 106, TS bis, D6 (3116, 1977-80), D8, S7, 700 / 650 /
    651 BBs, 49 Tri 1893 (listed in no. 26).
  - V4 later version 3125 matches n° 22 exactly (303-308, 185 g), no change; the earlier two-pin V4
    (3124, ends 1960) is consistent.

## Stronglight "Catalogue n° 25" (25 scans, c. 1980, labibleduvelocataloguesstronlight.blogspot.com)

- `data_source` 266, label `Stronglight Catalogue no. 25 (1980)`, country FR. Source:
  https://labibleduvelocataloguesstronlight.blogspot.com/p/stronlight-1980.html (Blogger images
  `CYCLES STRONLIGHT 1980 (1..25)`, 1600 x 1133 landscape). FR / EN / DE / ES, Etablissements
  Verot-Perrin, tel (77) 25-48-68 (6-digit), printed by J. Haubtmann. Title page prints "catalogue n° 25"
  and no year; **1980 is the blog page title**, between n° 24 (1978) and no. 26 (1982). Scan N is
  printed page N-1 from scan 3 on. Read 2026-10-24.
- Listed: cranksets 105 Bis (908 g, 1023 g with guard, super-light 870 / 775 g), 99 Bis (900 / 972 g),
  49 (rings 1055 / 490, 895 g), 49 Tri (975 g), TS Bis (920 g), No. 52, tandem series (diagram only);
  Coffret Luxe kit (105 / 99 / 49 / T.S.); axle 65 and 65 cups, 34, 650 (199 g, "nouveaute") and 651
  (275 g); chainwheels 255 (355 / 455) and 253; headsets D6, S5, P3 (octagonal locknut 303), V4. Out
  of scope: extra-light screws 59D-74D, sealing sleeve, tools 82-94, cap.
- No rows inserted. Rows updated (15, descriptions): 1880 105 Bis, 1893 49 Tri, 1915 Touring Sport Bis,
  1907 / 1908 (99 Bis double / triple), 155 ref. 65, 1322 Type 49 (ring 490), 3116 D6, 3120 P3 later
  version `source_ref` 266; 1906 99 (n° 22 spec moved here, `source_ref` 265). `year_to` -> 1980: 1897
  No. 52, 9502 255, 9503 253 (255 / 253 keep `source_ref` 265, 1897 is 266). 1894 49A (195), 3122 S5
  (265) name both editions. No titles changed, so no `search_text` rewrites.
- Edition differences recorded inline: 255 inner ring 36-39-40 (n° 22) vs 36-38-40 (n° 25); 253 teeth
  46-47-48-49-50-52 vs 46-48-50-52; 49 ring 490 46-53T vs 48-53T in no. 26; S5 225 g (n° 22) vs 210 g /
  190 g with alloy 603 / 604 (n° 25); axle 65 S length 124 (n° 22) vs 123 (n° 25).
- Judgement calls and open items:
  - 650 / 651 are marked "nouveaute" but Palo Alto 1976 (row 9079) already cites them, so 156 / 157
    (1970-85) were not touched.
  - Absent from n° 25, no change: 93 / 93 Tri / No. 53 (1904 stays 1967-1980; n° 24, 1978, is not in
    our sources), 104 (1878, 8811), 106 (1882), 107, D8, S7 (consistent with their 1981 start).
  - Years that look too early and were left: 1893 49 Tri (absent from n° 22, present 1980), 1909 99 BIS NM
    (the 1980 99 Bis is the lighter pre-NM version), 1882 106 (absent 1974 and 1980, in no. 26), 1880 105 Bis.
  - Coffret Luxe names "105 / 99 / 49 / T.S." as families, too loose to extend 1914 Touring Sport or 9079.
  - Rings 1055, 452, 252 and the dural double chainwheel 352 are only described as crank parts; no rows.
- Follow-up 2026-10-24: 1914 "Touring Sport" (the plain-ring TS; 1915 is the perforated TS Bis) extended
  1970-1970 -> 1970-1980 (`source_ref` 266) because nine 1977-78 Peugeot specs ("Stronglight TS, 42/52T",
  "three-arm cranks 170mm", "40/50T") name it and n° 25's Coffret Luxe lists "T.S." in 1980. Those nine
  specs are now linked to 1914 and the three values are in `COMPONENT_OVERRIDES` (Cranksets, 1977-1980).
  1914's `year_from` 1970 is a velobase decade value and n° 22 (1974) does not list the TS, so a later
  start is likely, but no catalogue attests a start year.

## `year_from` moves (2026-10-24, first use of the "DB year_from is earlier than the evidence" rule)

Velobase decade-bucket `year_from` 1970 moved later on catalogue / bike evidence; `source_ref` left as is. Old value 1970 on all
seven, so to revert set `year_from = '1970'`.

| Row | Moved to | Evidence |
|---|---|---|
| 1906 "99" | 1974 | n° 22 (1974) calls it the "nouveau 99"; earliest linked bike 1974. |
| 1880 "105 Bis" | 1976 | Palo Alto 1976 (row 9079) "new for 1976"; absent from n° 22; earliest Bis bike 1977. |
| 1893 "49 Tri" | 1977 | Absent from n° 22 (1974), in n° 25 (1980); earliest linked bike 1977. |
| 1882 "106" | 1980 | Absent from n° 22; earliest linked bike 1980 (12 bikes 1980-84). n° 25 (1980) omits it, which conflicts with those bikes. |
| 1909 "99 BIS NM" | 1982 | No. 26 calls it the "new model"; nothing earlier lists it; no linked bikes. |
| 1907 / 1908 "99 (new style, drilled / triple)" | 1980 | Absent from n° 22, first listed in n° 25; weak, n° 24 (1978) not in our sources. |

Not moved: 156 / 157 (650 / 651: n° 25 "nouveaute" vs a 1976 citation, conflict); 1914 Touring Sport (no attested start year).
The generator's overrides for 1880 and 1893 still start at 1970 but only resolve 1977-79 bikes, so they agree.

## Stronglight "Catalogue n° 27" (16 scans, printed August 1982, labibleduvelocataloguesstronlight.blogspot.com)

- `data_source` 267, label `Stronglight Catalogue no. 27 (1982)`, country FR. Source:
  https://labibleduvelocataloguesstronlight.blogspot.com/p/stronlight-1984.html (Blogger images
  `STRONLIGHT 1984 (1..16)`, 1128 x 1600 portrait). FR / EN / DE, joint Stronglight and Spidel branding,
  Etablissements Verot-Perrin, tel (77) 25-48-68. **The back cover prints "AOUT 1982"** (Imprimerie J. Haubtmann,
  photographers Coussirat and Delpech); the blog title and the VeloBase index both say 1984, so the printed date wins.
  Scan 1 cover, 2 title page, then scan N is printed page N. Read 2026-10-24.
- Listed: cranksets 107 (+ Tri), 106 (+ Tri), 103, 101, 99 Bis (+ Tandem 99 diagram), Cyclo-Cross, BMX; bottom
  brackets 330 (sport / touring), 65 (competition), 650 / 651, adjustable one-piece shell (700 double-threaded /
  701 fully threaded; Ti axle 224 g, steel 288 g, "T" or "A"), monobloc 600 (312 g); needle-bearing headsets A9
  (78 g, parts 903-909) and B10 (66 g, parts 903 / 1005-1008). Out of scope: sealing sleeve, chain line table, tools
  22 / 85 / 90 / 91 / 93-96 / 720 bis / 710 / 730, extra-light bolts 590D / 591D / 61D / 62D.
- Compared with no. 26: the whole Super Competition headset line (D6, S5, S7, D8, P3, V4) is gone, replaced by the
  needle-bearing A9 and B10; also gone: 105 Bis, 104, 49, 49 Tri, Touring Sport Bis, 255, 253. New pages: A9 and B10,
  Cyclo-Cross, BMX, 600, 330.
- Rows inserted (5, 1982-1982, `source_ref` 267): 9504 106 (triple), 9505 330, 9506 600, 9507 Cyclo-Cross, 9508 BMX.
- Rows updated (8, `source_ref` 267): `year_from` 1984 -> 1982 on 3112 A9 (France locknut) and 3114 B10 (Spidel locknut),
  because the catalogue is earlier than the DB's dates (old values 1984); `year_to` 1980 -> 1984 on 1877 103 (n. 27 lists
  it in 1982 and two linked bikes are 1983-84; the 1984 rests on those bikes) and 1980 -> 1982 on 1876 101; descriptions on
  1883 107 (884 g / 810 g with bottom bracket added to the 610 g crank-only), 1884 107 (triple), 1909 99 BIS NM (axle 118 /
  125), 158 Delta (the adjustable shell, 224 g / 288 g, is the same as n. 27's "boitier de pedalier reglable"; the 700T /
  700A rows 151 / 150 are 212 g / 262 g and stay separate). No titles changed, so no `search_text` rewrites.
- Judgement calls and open items:
  - n. 27's 99 Bis weighs 944 g / 1000 g, which is the 99 BIS NM (1909) of no. 26, not the 900 g / 972 g of n. 25
    (1907 / 1908). 1907 / 1908 therefore keep 1980-1980 and were not extended.
  - No. 26 is labelled 1982 in `data_source` 195 from the VeloBase index title; with n. 27 printed Aug 1982, no. 26 is
    probably 1981 or earlier. Not relabelled.
  - 330 and 600 have no weight or year evidence beyond 1982 (1982-1982 is the weakest of the inserts).
  - Absent from n. 27 and not capped (one catalogue's absence): 105 Bis, 49, 49 Tri, Touring Sport Bis, 255, 253,
    D6, S5, S7, D8, P3, V4. 3113 A9 (Spidel locknut) and 3115 B10 Bernard Hinault are not shown in n. 27 and unchanged.
  - 104 is mentioned only as "same fixing diameter as 101 and 103"; no page, no row change.

## Classic Rendezvous Stronglight page (updated 6.1.2009): Catalogue n° 27 and n° 26 scans with "Nouveautés" leaflets, data_source 282, 2026-10-27

- Source: https://classicrendezvous.com/country-of-origin/france/french-parts/stronglight/ — a gallery
  (Mod. 49, 57 "intro 1957", 63, 93, 99, 105 bis, P3; a 1962 Cycling quote) plus 32 catalogue scans
  `stronglight_1..32.jpg`, 560-575 x 768. Scans 1, 3-16 = Catalogue n° 27 (Aug 1982, already source 267;
  scan 2 an alternate cover); scans 17-32 = Catalogue n° 26 (already source 195). The only new material
  is three leaflets bound into this n° 26 copy (not in the VeloBase copy): "Nouveautés 1981 — Pédalier
  107 aérodynamique" (884 g, 810 g with 700T), "Nouveauté 1982 — Jeu de direction A9" (78 g, locknut photo
  reads "STRONGLIGHT SP..."), and a 106 Tri / adjustable 700 BB page (specs as n° 27). data_source 282
  "Stronglight 'Nouveautés 1981' / 'Nouveauté 1982' leaflets, bound into Catalogue no. 26 (Classic
  Rendezvous copy)", country FR.
- year_from moved later (old values for reverting): 1883 107, 1884 107 (triple), 1916 107 Pista 1980 ->
  1981; 1885 107 (variation 2, velobase) 1980-1980 -> 1981-1981. Evidence: the leaflet's "Nouveautés 1981",
  and n° 25 (c. 1980) omits the 107; earliest linked bike 1982. The `'spidel 107 aerodynamic'` override
  has no year range.
- year_from moved earlier: 3113 A9 (Spidel locknut, velobase) 1984 -> 1982, on the partly visible
  "STRONGLIGHT SP..." locknut in the 1982 leaflet photo (weakest call here).
- No inserts, deletes or description changes; leaflet weights already match the rows. Gallery photos
  carry no new codes or dates.
