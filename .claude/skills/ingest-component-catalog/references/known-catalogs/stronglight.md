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
