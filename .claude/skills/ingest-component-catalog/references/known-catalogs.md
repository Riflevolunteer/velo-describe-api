# Component catalogs processed so far

One entry per catalog: source, what it added or dropped versus the previous
printing, and exactly which `component_detail` rows changed. All changes
were applied live via idempotent SQL kept in the session scratchpad; nothing
in the repo records them except this file.

## Campagnolo Catalogo N. 12 — late 1953 (Campy1953_catalog12.pdf, 28 pp)

- Italian, Vicenza. Lugano 1953 world championship page dates it. Rod-shift
  era: 1001 Cambio Corsa, 1002 Paris-Roubaix, plus 1012 Gran Sport and 1013
  Sport cable derailleurs, 1005 and 1011 front derailleurs, 1012/3 bar-end,
  1013/1, 1014, 1015 levers, 1006 / 1006/G / 1006/A hubs. Page 27 is a
  bound-in later reprint (39xx tool numbers).
- Added: 6990 "1001/2, Cambio Corsa (rear hub)" 1940-1953; 6991 "1002/2,
  Cambio Paris Roubaix (rear hub)" 1950-1955; 6992 "1013/4, Gran Sport
  (single lever with pump clip)" 1953-1960. source_id MANUAL-CAT12-1953-*.
- Years: 4102 (1001) year_to → 1953; 5980 (1013/1) → 1953; 3256, 3257, 3273
  (1006 family) → 1953; 4145 (1013/3) year_from → 1953; 5995 (1014/1)
  year_from → 1953.
- Left: 4116/4117 (two 1012/1 rows, distinct velobase examples, 300 g vs
  340 g) — user chose to leave as is.

## Campagnolo Catalogo N. 13 — c. 1955 (Campy1955_catalog13.pdf, 26 pp)

- US-importer copy (Perry Bowlus Wiley, New York). Same pages as N. 12
  with: braze-on levers 1013/5 (front) and 1013/6 (rear) new; 1015/1 lever
  with pump peg now listed; cable/housing lengths specified; Sport group
  loses its front derailleur and both groups lose bundled tools; 1013/2
  gains 503/1 pivot and new name plates; new fittings 663, 659, 143/1.
- No new rows: 1013/5-6 already exist as 5989 under the later Record name.
- Years/notes: 5983 (1015/1) year_to → 1955; 5989 description notes first
  listing in N. 13 as Gran Sport-era parts.
- Also applied here (from the 1973 Bianchi bike catalog): 1080 Universal
  Extra Mod. 51 year_to 1961 → 1973.

## Campagnolo Catalogo N. 14 — c. 1960 (Campyjpg1960_14/, 41 JPGs)

- First colour catalog. Record name arrives on hubs (1034 small flange,
  1035 large flange, 1036 pista), cranks (1049 strada, 1051 pista) and the
  1052/1 front derailleur; first cranks, bottom brackets (1046 square taper,
  1047 cottered), headsets (1039 strada, 1040 pista), pedals (1037, 1038,
  1038/1), seatposts (1044, 1045), 1053 track dropouts, 1013/7 flat-bar
  lever, tool case 1045. Cambio Corsa, Paris-Roubaix and the 1006 / 1006/G
  alloy hubs are gone. Rear derailleurs still Gran Sport/Sport only (no
  Record rear until 1963).
- No new rows: every part number already present; velobase evidently used
  this catalog for many 1960 dates.
- Years: 3259 (1034) year_from 1967 → 1960; 2966 (1040 "Record Pista")
  year_from 1970 → 1960; 5999 (1013/7) year_to → 1960; 4117 (1012/1) → 1960;
  4144 (1013/2) → 1960; 3273 (1006/A) → 1960; 3256, 3257 (1006, 1006/G)
  → 1955 (present in N. 13, absent in N. 14).

## Campagnolo Catalogo N. 15 "Prodotti Speciali" — 1967 (Campy1967_catalog15.pdf, 46 pp)

- Nuovo Record arrives: 1020/a rear derailleur (1020/1a with hanger),
  1046/a bottom bracket with plastic sleeve 2110, group named Record
  throughout. Gran Sport and Sport gone from the group pages; budget line is
  now Valentino Super (2150/1 rear, 2050 front, 1204/1206 levers) and Nuovo
  Sport 2230. New: 1036/1 large-flange QR track hubs, Nuovo Tipo hub range
  1250-1253 (1260-1267 sub-numbers), special triple and cyclocross right
  cranks (753/1 flanged rings, 744/1-2 spindles), 1060 Corsa dropouts,
  1220/1230 QR bands, grease tins, 1102 workstand. Chainline and gear tables
  at the back.
- Added: 6993 "2150/1, Valentino Super (con attacco)" 1967-1970 (group
  Valentino Extra); 6994 "1036/1, Record Pista (high flange, quick release)"
  1967-1980; 6995 "1204 1206, Valentino" levers 1967-1980. source_id
  MANUAL-CAT15-1967-*.
- Years: 4146 (2230 Nuovo Sport) year_to → 1967; 3270, 3271 (1036 track
  hubs) → 1967; 3712, 3714 (1038, 1038/1 pedals) → 1967; 5752 (1044 first
  version) → 1968 (5749 covers 1969 on); 2316 (2050 Valentino front)
  year_from 1968 → 1967.
- Confirmed as-is: 4123 1020/a v1 1967-68, 1496 1049 v4 BCD 144 from 1967,
  1505 1051 144 BCD from 1967, 1495 1048/4 cyclocross from 1968, 30 1046/a,
  all levers. 4118 1012/4 Gran Sport (to 1973) is absent here but the 1973
  Bianchi Special still lists Gran Sport, so left alone.

## Campagnolo Catalogue No. 16, English edition — 1968 (Campy1968_catalog16.pdf, 46 pp)

- English printing of N. 15 with two additions: the Record brakes (2040 set:
  2000 front, 2001 rear, 2030 QR lever; spares 2002-2039) and the Sport
  Extra 2180 rear derailleur. Valentino Super 2150/1 → Valentino Extra 2170;
  Nuovo Sport 2230 → Sport Extra 2180. 1036/1 QR track hub not shown;
  1036/2 small-flange solid-spindle track hub is. 1038/1 toothed pedal
  dropped. New 1240 QR bolt and 693/1 steerer (out of scope).
- Added: 6996 "2180, Sport Extra (con attacco)" 1968-1975 (group Sport),
  source_id MANUAL-CAT16-1968-2180. year_to 1975 is a guess.
- Years: 6993 (2150/1 Valentino Super) year_to 1970 → 1967; 6994 (1036/1)
  year_to 1980 → 1967; 3271 (1036/2) year_to 1967 → 1968.
- Confirmed: 574 2040 Record "1968 - no lettering", 228 2030 lever 1968,
  4162 2170 Valentino Extra 1968, 6004 1026 twin Valentino lever.
- Left: 226 "2030, Nuovo Record" lever dated from 1967, a year before the
  brakes appear in any catalog; velobase may know something, not changed.

## Campagnolo Supplement to Cycle Catalogue No. 16 — November 1971 (Campy1971_catalog16sup/, 12 JPGs)

- Quadrilingual colour update sheet. Records the Superleggero series (1037/a,
  1038/a pedals; 1044/a, 1045/a seatposts; 763/a sprocket), the budget-line
  rename Sport Extra 2180 → Velox 2250 with 1013/1a and 1014/1a levers, the
  Gran Turismo 2270 with 1013/1b lever and 3360 Elefante bar control, and a
  new Sport groupset: 3320 cottered crank + 3331 bottom bracket (3330 set)
  and a Sport headset (687/a-690/a, no set number). Also 3345/3346 pump
  adaptors, 2041 toothed washer, eyelet-less dropouts (out of scope).
- Added: 6997 "1013/1a 1014/1a, Velox" levers 1971-1975 (group Velox); 6998
  "1013/1b, Gran Turismo" lever 1971-1975; 6999 "763/a, Superleggero
  Sprocket" 1971-1980; 7000 "Sport Strada Headset" 1971-1975 (group Sport).
  source_id MANUAL-CAT16S-1971-*. End years are guesses.
- Note appended to 20 (3331 "(Nuovo) Gran Sport (Thin Cup)"): sold as the
  Sport bottom bracket in 1971.
- Years: 5748 (1044 Nuovo Record Superleggero = the 1044/a) year_to → 1971;
  5985 (Elefante) → 1971; 4120 (2270 Gran Turismo) → 1971.
- Confirmed: 4167 Velox 1971, 3709/3715 superlight pedals from 1971, 5754
  1045/a 1971, 1508 3320 Sport 1971-75, 2316 Valentino front to 1980.
- Caution: 5964 "1013/1A, Gran Sport (Single Sided)" 1960-70 and 5965
  "1014/1A, Nuovo Gran Sport" 1974-83 reuse the /1A suffix for different
  eras; the 1971 Velox levers are distinct rows.

## Campagnolo Catalogue No. 17, English edition — 1974 (Campy1974_catalog17.pdf, 93 pp)

- Has an OCR text layer but it is drawing noise; pages read visually. PDF
  page ≠ printed page (blanks/skips); printed pages 77-78 (cyclocross parts,
  Rally gear) are missing from the scan. Colour-coded groups: Super Record
  road 4000/F (blue), track 4100, Record road 1032/F and track 1033
  (yellow), Gran Sport 2240 (green), Valentino Extra, triple/cross/Rally,
  sundries, tools, tables.
- Super Record debut: 4001 rear, 4061/4061-1 brakes with 4062 drilled lever,
  4011/4014 Ti-spindle hubs, 4021 pedals, 1049/A crank + 4030 set + 4031 Ti
  bottom bracket, 4041 headset, 4051 seatpost; track 4101/4121/4151/4131/
  4141. Nuovo Gran Sport 3500 replaces Velox/Gran Turismo with 1014/1A and
  1013/1A levers; 1207/1208 braze-on levers; Sport crank becomes 3320/A with
  fixed ring pairs; Nuovo Tipo solid-axle 1250/1252 dropped; 1049/3, 1049/5
  (fixed 36T) triples and 1049/4 cyclocross as 1048/x sets. 1052/1 is the
  front derailleur for every group (no SR front until 1979).
- Added: 7001 "1013/1A, Nuovo Gran Sport (right hand)" 1974-1983 (distinct
  from 5964, the 1960s Gran Sport 1013/1A); 7002 "1207 1208, Gran Sport /
  Valentino (braze-on)" 1974-1983; 7003 "1049/5, Record Triple (fixed 36T
  inner)" 1974-1980. source_id MANUAL-CAT17-1974-*.
- Completed: row 19 (velobase "super record - titanium - 1st gen;", no
  number/years/group) → "4031, Super Record (First Gen, titanium spindle)"
  1974-1979, group Super Record. Note on 2951 (1040/A "Gran Sport"): sold as
  the Sport head set.
- Years: 6997 Velox levers and 6996 Sport Extra year_to → 1973; 3229, 3231
  Nuovo Tipo solid-axle → 1973.
- Confirmed: whole SR group dated from 1970/1974 by velobase; 4148 4001 1st
  gen 1974-79; 1509 1049/A from 1974; 4085 3500 from 1974; 5965 1014/1A from
  1974; 1498 covers 1049/3 (triple v4 from 1973); 4081 Rally 1st gen 1974.
- Skipped: 3320/A (covered by 1508 3320 Sport 1971-75); Rally (page missing).

## Campagnolo Catalog 17a, US English edition — 1975 (Campy1975_catalog17a.pdf, 58 pp)

- Black-and-white US-market condensation of Catalogue 17 (54 printed pages,
  PDF page = printed + 4; no text layer). "Sole Technical Advisor" page runs
  1974 Worlds to 1977 Worlds; copyright 1975. Group pages (SR road 4000/F,
  NR road 1032/F, SR track 4100, Record track 1033, Gran Sport 2240) then
  exploded parts pages with abbreviations R/NR/SR/RL/NGS/V/VO/S/SL/NT.
  Contains the Rally 3450 parts page missing from the Cat 17 scan.
- Still current in 1975, contrary to earlier conclusions: Velox 2250 and
  Gran Turismo 2270 (pictured p 18), Velox levers 1013/1A (V) and 1014/1A
  (V, NGS), and the Nuovo Tipo solid-spindle hubs 1250/1252 (p 25). Also
  1036 and 1036/2 solid-spindle Record track hubs, and "six-sprocket hubs
  also available" with the 1006/8 skewer.
- Added: 7004 "4104, Super Record Pista (Low Flange, Ti Spindle)" 1975-1980;
  7005 "4061/1, Super Record (short reach)" 1975-1982; 7006 "764, Record
  Pista Sprocket (1" x 3/16" chain)" 1975-1980. source_id
  MANUAL-CAT17A-1975-*. End years mirror sibling rows.
- Years (all year_to → 1975): 3229, 3231 Nuovo Tipo solid axle (reverses
  the Cat 17 change to 1973, note appended); 4167 Velox, 4120 Gran Turismo
  (notes appended), 6997 Velox levers; 4162 2170 Valentino Extra; 3275 4011,
  3276 4014, 3272 4101 SR hubs; 3270 1036, 3271 1036/2; 2963 1039 headset;
  3711 1038, 3715 1038/a pedals; 5753 1045, 5748 1044/a, 5754 1045/a seat
  pins; 5996 1013/1, 5989 1013/5-6, 5995 1014/1, 5979 1012/3 controls;
  6380 763 sprocket.
- Confirmed: SR road group, 4081 Rally 1st gen to 1975 / 4080 1.1 gen from
  1975, 576 2040/1 short reach 1970-78, 230 4062 from 1975, 5760 4051 fluted
  1975, 2297 1052/1, 1508 3320 Sport to 1975, 1509 1049/A, 1507 4151.
- Skipped: set numbers 3330, 1048, 1050, 4030, 4130 (crank + BB bundles);
  2000/1, 2001/1 (covered by 2040/1 rows). Sport Extra 6996 absent, left at
  1973.
- Deleted (user decision, 2026-09-28): 4159 "Nuovo Valentino Extra" and
  4160 "Valentino Extra" — unnumbered velobase repeats of 4162 (2170). Both
  were unreferenced by bike_spec and by generator overrides. The velobase
  crawler could reinsert them under their original source_ids
  (AA0D3126-…, 39DECE91-…); if they reappear, delete again.

## Campagnolo USA "Bicycle Components" — 1982 (Campy1982_Olympic/, 50 JPGs)

- Houston, Texas edition, copyright 1982, LA 1984 Olympic supplier cover.
  Printed page = JPG number. Bound with `bind-images-to-pdf.sh`, but the
  1800 px downscale made the gruppo pages unreadable: read those JPGs
  directly (pp 4-9, 12, 23, 25, 26, 31, 34, 36, 38, 41). Carries the new
  seven-digit identification numbers in brackets (0102018 = 4001, 0104007 =
  1052/NT, 0104006 = 3600/NT, 5011/06 = 3550, 6011/00 = 980 rear). velobase
  already used it: 2276 (3600/NT) says "82 Olympic Catalog".
- Five gruppos: Super Record road (Ti and steel), Nuovo Record, Gran Sport
  road, Gran Sport Touring (0305/0306 116 BCD cranks, 5031/00 triple BB,
  3550 Gran Sport Rally), Record/SR track. SR hubs 4011/4014/4101/4104 and
  the one-bolt 4051 are gone; SR uses Record hubs and 4051/1. Gran Sport now
  has its own 3600/NT front, 3700 pedals, 3800 post, 2040/F and 2040/FS
  brakes, 0304 crank. 980 rear and front listed. First freewheel (6-speed,
  3 pawl, 12 ranges), HiLo hub, BMX 305/806/821/822, toe clips.
- Dropped since 1975: Velox, Gran Turismo, Valentino Extra and 1204-1208
  levers, 1250/1252 solid-axle Nuovo Tipo, 1045, 1044/a, 1045/a posts.
- Added: 7007 "1022/00, Record (braze-on)" 1982-85; 7008 "1046/3, Record
  Triple and Cyclocross" BB 1982-85; 7009 "5031/00, Gran Sport Touring
  Triple" BB 1982-85; 7010 "821, BMX (small flange)" and 7011 "822, BMX
  (large flange)" hubs 1980-82 (group BMX). source_id MANUAL-CAT82-1982-*.
  End years are guesses.
- Notes appended: 4083 Rally Touring = 3550 Gran Sport Rally / 5011/06
  (225 g matches); 553, 554 Gran Sport brakes = 118 2040/F and 117 2040/FS.
- Years (all year_to → 1982, 48 rows): 2276, 2316; levers 5991, 5993, 5994,
  5995, 5996, 5989, 5979, 5988; hubs 3259, 3260, 3270, 3271, 3230, 3233,
  3261, 3262; cranks 1505, 1507, 1495, 7003, 1472, 1474, 1475, 1480; BBs 40,
  30, 20, 43, 41, 42; headsets 2963, 2966, 2951, 2968; pedals 3708, 3709,
  3711, 3715, 3688, 3716, 3717, 3692; posts 5749, 5734, 5761; brakes 553,
  554; freewheel 2072.
- Confirmed: 4001 2nd gen rows, NR v3 to 1981 / v4 from 1982, 3500, 980
  (4087, 2279), 1052/NT to 1982 / 0104007 from 1982, 1052/SR from 1979,
  Rally 1.1 to 1982, post-CPSC 2040/2040-1, 4061 v1 to 1982, 7005, 1049,
  1049/A, 4141, 7001/5965/7002.
- Left: 3229/3231 solid-axle Nuovo Tipo stay at 1975 (absent here); both
  4131 rows extended since the catalog does not distinguish axles; 1473
  Bianchi-labelled 0304 untouched; toe clips have no category.
- Deleted (user decision, 2026-09-28): 2296 "Record 1052/1" (bare 1972
  example, covered by 2298/2297) and 2304 "1052/1, Record (2nd version
  variation)" (no stated feature, covered by 2305). Original source_ids
  7872E656-… and 35CEFF78-…; delete again if a crawl reinserts them.
- Then collapsed the rest of the 1052/1 family to two rows (user decision,
  2026-09-28), since no catalog splits it into versions: deleted 2298
  "later body with cable stop" (155D51C4-…, overlapped 2297) and 2303 "no
  slot in cable stop" (C10C6511-…); retitled 2305 → "1052/1, Record (first
  body, 1960-1969)" and 2297 → "1052/1, Record (second body, 1970-1977)".
  2297 keeps the bike-spec links and the generator's pre-1978 override.

## Cross-catalog notes

- The Nuovo Record 1020/A rows are dated per version in the DB (v3 1970-81,
  v4 1982-84, v5 1985-87); the bike generator's year-ranged override follows
  those. Keep them in step if either changes.
- Part numbers are reused across eras (1013/1 is a Gran Sport lever in 1953
  and a Record lever in 1967; 1040 is Gran Sport pista in 1960 and "Record
  Pista" later). Diff by number, then read the DB title before deciding.
