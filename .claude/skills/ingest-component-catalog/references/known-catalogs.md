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

## Campagnolo Catalogue n. 18, English edition — c. 1985 (Campy1985_catalog18.pdf, 70 pp)

- Vicenza (Via della Chimica) printing; no year printed. Dated 1985 from the
  filename, the "replaced by the Victory range" note and the 1013/5N-6N
  levers (DB from 1984). PDF page = printed page + 1. Has a usable OCR
  layer (pdftotext -layout) for the parts lists; picture pages read
  visually for the "No more available" asterisks.
- Groups: SR road 4000/F (on 1046/A steel BB and 1037/A pedals, Ti pedals
  on request), Record 1032/F, Gran Sport 2240/5F (marked no more
  available, replaced by Victory), SR track 4100, Record track 1033,
  Touring 279 (5011/06 Rally Touring, 0306/C, 5031/00), 980 Equipaggiamento
  281. Seven-digit numbers now primary: 0102018, 0104006-0104012, 5011/06,
  6011/00. Valentino Extra 2170 is back with a full parts page.
- Dropped since 1982: HiLo hub, Ti bottom brackets 4031/4131 (BB page lists
  only 1046, 1046/A, 1046/3, 1046/4, 3331, 5031/00), 1014/1 pump-clip lever,
  1049/3. Asterisked as no more available: 0304, 0305, 0306 cranks, 3700
  pedals.
- Added: 7012 "0104011, Super Record (braze-on)" front 1985-87; 7013
  "1046/4, Record Cyclocross" BB 1985-87. source_id MANUAL-CAT18-1985-*.
- Corrected: 7010/7011 BMX hubs swapped — 821 is large flange, 822 small
  flange (1982 photo and this catalogue agree; my 1982 text reading was
  transposed).
- Notes appended: 2301 Nuovo Valentino front = 0104008; 2313 1052/SR =
  0104010; 7007 1022/00 = 0104009; 7002 levers sold as 1207/N 1208/N;
  4162 reappears after the 1982 US edition; 1472, 1474, 1475, 3688 marked
  discontinued.
- Years (all year_to → 1985, 47 rows): 4162 (from 1975), 4083; 2276, 2316,
  2301; levers 5988, 5979, 5996, 7001, 5991, 5993, 5994, 5965, 7002; hubs
  3259, 3260, 3270, 3271, 3230, 3233, 7010, 7011; cranks 1505, 1507, 1495,
  7003, 1472, 1474, 1475, 1480; BBs 40, 30, 20; headsets 2963, 2966, 2951,
  2968, 2967; pedals 3708, 3709, 3711, 3715, 3716, 3717, 3688, 3692; posts
  5749, 5734, 5761; brakes 7005, 553, 554; freewheel 2072; sprockets 6380
  (from 1975), 6999.
- Confirmed: 4001 2nd gen rows, NR v5 from 1985, 3500 and 980 to 1985,
  0104007 to 1985, 980 front to 1986, 6000 levers 1984-87, 4061 v2, 2040
  post-CPSC, 1049/1049A rows, 7008, 7009.
- Left: 4031/4131 and HiLo at 1982 (absent here); 5995 1014/1 at 1982.
- Retitled (user request, 2026-09-28) so the clip-on / braze-on pairs read
  as pairs: 2313 → "1052/SR (0104010), Super Record (clip-on)"; 2300 →
  "0104007, Nuovo Record (clip-on, 3-hole standard band)"; 7007 →
  "1022/00 (0104009), Record (braze-on)"; 7012 unchanged.
- HiLo (user decision, 2026-09-28): deleted 3262 (velobase "unused body
  shell" repeat, D5258F61-…); retitled 3261 → "HiLo, Record (high-low
  flange rear)" with the 1982 catalogue description, years 1980-82.

## Campagnolo Catalogue n. 18 bis, English edition — December 1986 (Campy1986_Catalog18bis/, 54 JPGs)

- Vicenza printing, back cover "12/86". Printed page = JPG number - 1
  (n18_02 is missing). Bound with `bind-images-to-pdf.sh` at 4000 px (the
  JPGs are only 1226x1800 so nothing was downscaled); all pages read
  visually in three batches of 18. First catalogue for the C-Record /
  Victory / Triomphe generation; shares only 980/990 and 3331 with n. 18.
- Groups: 180 Record corsa (C-Record: 0102050, 0104018, 0118071/72,
  322/101, 306/101, 303/101, 305/101 [misprint for 305/501], 304/104,
  316/101, 315/101), 182 C-Record pista, 269/268 Victory corsa/leisure,
  267/266 Triomphe corsa/leisure. Loose: 0102068 990 rear, 0104012/13 980
  fronts, 3331 Gran Sport triple BB, first rims (060.101-105 Record
  pave/strada/crono, Victory strada/crono).
- Delta brake 315/101 (0116070/71) is listed but "not available when
  printing this catalogue"; groups shipped with Super Record brakes.
- Misprints: p 25 calls 0104027 "Triomphe corsa braze-on"; pp 16 and 30 and
  its parts (clip 7182039, long fork 1180009) make it the leisure clip-on.
  Group pages say pedals 305/101, parts page 305/501.
- Dropped since n. 18: every Super Record / Nuovo Record / Rally / Gran
  Sport / Valentino part, 1013/1014 levers, 1034 headsets, 1046 BBs, 1037
  pedals, 1044 posts, 1035/1036 hubs, 2040 brakes, 0304-0306 cranks,
  3550/3700/3800, 0104006-0104011 fronts, freewheels (box pictured p 5,
  no page).
- Added: 7014 "303/101, C-Record" BB 1985-86 (year_from from sibling
  C-Record rows); 7015 "0102057, Triomphe (leisure, long cage)" rear
  1986-86. source_id MANUAL-CAT18BIS-1986-*.
- Years (year_to -> 1986, 17 rows): 4096, 4088, 2318, 2314, 6007, 6002,
  6003, 2971, 1485, 1245, 44, 20, 3720, 3719, 590, 585, 584.
- Placeholder 1980-1980 rows re-dated (year_from is inferred from sibling
  rows of the same range, year_to from this catalogue): 3242, 3243, 23,
  212, 4971 -> 1985-86; 3278 -> 1984-86.
- Notes appended (34 rows, tagged "Cat. n. 18 bis"): part numbers on the
  C-Record/Victory/Triomphe rows that velobase titled by name only
  (4099, 4097, 4096, 4168, 4172, 4155, 4088, 2283, 2284, 2279, 2318, 2314,
  5969, 6007, 6002, 3242, 2969, 1483, 1517, 1245, 1241, 5737, 5738, 5764,
  3693, 560, 233, 235, 212, 4973, 4966, 4965, 4972, 4971). Row 20 got no
  note: its description is already 220 chars of 255.
- Confirmed: 3241, 3240, 3280, 3281, 3277 hubs; 2954, 2969 headsets; 1483,
  1516, 1515, 1517 cranks; 45 BB; 3693 pedals; 560 Delta; 233, 235 levers;
  4973, 4966, 4965, 4972 rims; 2279 980 front to 1986.
- Left: SR/NR/1049/2040/4061/4062/1013-5N rows dated to 1987 (4150, 4152,
  4127, 2313, 1496-1498, 1509, 572, 575, 583, 231, 6000) and my n. 18
  guesses 7012, 7013 — this is a new-range catalogue and p 6 says SR
  brakes were still being shipped, so absence here is not evidence. Not
  inserted: 0118063 Triomphe top-tube levers, 306/051 C-Record ring,
  316/102 round post, QR sets 314/414/914. 4156 Triomphe S3, 2319 LX,
  2280 990 front, 3695 C-Record Pista pedals untouched. 5737/5738 aero
  posts are titled 130/210 mm but the catalogue sells 180 mm styled and
  130 mm circular; noted, not retitled. No generator override references
  any changed row.

## Campagnolo "Fluid-Dynamic Wheels" brochure, USA edition — November 1987 (Campy1987_FluidDynamics.pdf, 10 pp)

- Disc wheels only (Ghibli M23, Ghibli M23 "Gyroscopic", Khamsin). Back
  page "Lonigo (VI) - November '87", West Caldwell NJ distributor on the
  cover. Has a usable text layer; the parts table is p 9. Photo p 5 shows
  a Delta brake in use, consistent with Delta shipping in 1987.
- Numbering: R0xx1 Ghibli, R0xx3 Gyroscopic, R0xx2 Khamsin, R0xx4 Khamsin
  convertible rear. Fronts 24/26/28 in, 100 or 90 mm; rears 28 in only,
  three thread variants (IT/IN/FR) per wheel. Gyroscopic is front only.
- DB shape is one row per model (no groups, no per-size rows); kept that.
- Added: 7016 "Ghibli M23 (front)" 1987-94 (year_to copied from 6958);
  7017 "Ghibli M23 Gyroscopic (front)" 1987-87 (only appearance known;
  first insert overran 255 chars and was
  truncated; fixed with a 252-char description in the same SQL file). source_id MANUAL-FDW-1987-*.
- Years: 6958 Ghibli M23 road rear and 6957 Ghibli track rear year_from
  1980 -> 1987 (placeholder; catalogue is the only evidence, the Khamsin
  sibling 6959 says 1986 so 1986 would also be defensible).
- Notes appended ("Fluid-Dynamic brochure"): 6958 R0501/11/21; 6957
  R0531/41/51; 6959 R0594/604/614 convertible rear, R0562-82 road rear,
  R0102/R0112 fronts.
- Left: 6956 Ghibli 7sp cassette (1995-99), Scirocco, Bora, Shamal,
  Vento — later models. No separate Khamsin front row.

## Campagnolo "Record" brochure, USA edition — November 1987 (Campy1987_Record/, 15 JPGs)

- Same Lonigo printer and "November '87" date as the Fluid-Dynamic
  brochure. C-Record renamed plain "Record" with A-series catalogue
  numbers; prose pages carry no numbers, the parts list is p 14 (file
  14.jpg). Bound at 4000 px (JPGs are 1308x1800), read in one batch.
- Groups: A000A Record (A500D Delta + Power-Grade levers, A100 rear +
  braze-on front, 0271 Doppler levers, A300 hubs, A040 crank, A0H0 BB,
  A600-L pedals, A0D0 headset, A0R2 post); A000P Record track (A300PFG,
  A040P, A0H0P, A630-L, A0D0P, A0R2); A000K Record Keirin (A300KFG,
  A040K, A0H0K, A630KA, A0D0K, 00R8K), all NJS. Alternatives: A022/A023
  clip-on fronts, Friction 0281-83, Syncro 0211-13, Syncro 2 0221-23,
  A330-FG large flange hubs, A610 SGR-1, A620-L Triple Bearing, A0R2-S,
  A0R8/A0R8-S, A300P, A300K, B600KA, 00R8-S.
- Delta now shipping (was "not available" in n. 18 bis). Misprint: A300KFG
  and A300K are both described as large flange.
- Added: 7018 A300KFG Keirin hubs, 7019 A040K Keirin crank, 7020 A0H0K
  Keirin BB, 7021 A0D0K Keirin headset, 7022 00R8K Keirin post (all group
  C-Record Pista), 7023 A620-L Triple Bearing pedals, 7024 A0D0P track
  headset; all 1987-87. source_id MANUAL-REC87-1987-*.
- Years: 7014, 23, 3242, 3243, 1485 year_to 1986 -> 1987 (renumbered
  A0H0/A0H0P/A300P/A300PFG/A040P); 3694 SGR-1 and 5971 Syncro II
  year_from -> 1987 (listed as A610 and 0221-23); 214 Power Grade lever
  1980-1980 -> 1987-90 (year_to mirrors the Delta rows, only 1987 is
  evidenced).
- Notes appended ("Record brochure"): A-numbers on 4098, 2283, 2284,
  5970, 5969, 5973, 5971, 560, 214, 3241, 3240, 3242, 3243, 1482, 1485,
  7014, 23, 2954, 3693, 3695, 3694, 5755, 5739, 5737, 5738.
- Left: 208/213 Corsa Record levers (generation unclear), 1483 C-Record
  crank at 1986 (1482 covers 1987-94), 4099/4096 first-gen rears at 1986
  (4098 A010 covers 1987-89), 5755/5739 A0R7 posts (number not in this
  brochure, noted). Victory/Triomphe/990/rims absent: single-group
  brochure, not evidence.

## Campagnolo "Athena" brochure, USA edition — April 1988 (Campy1988_Athena/, 9 JPGs)

- Thumbnails only (479x700) but legible. Cover "4/88", back "April 88",
  West Caldwell NJ. First-generation Athena with D-series numbers; parts
  list is p 8 (tn_09.jpg). Group id 5 exists.
- Group D000A: D500 brakes + levers, D100 rear + braze-on front, 0281
  Record Friction levers, D300 small-flange hubs, D040 crank (135 BCD,
  170/172.5, rings 39-44 / 48-53), D0H0 BB, D600-AM pedals, D0D0 headset,
  C0R2 post. Alternatives: C022/C023 clip-on fronts, 0282/0283 Friction,
  0221-23 Syncro 2, C0R2-S, D056 Compact levers. (C022/C023/C0D0/C0R2 are Chorus parts fitted to
  Athena and Croce d'Aune; settled by the 1988 dealer parts catalogue.) Rear has the "Multi Function System" five-position
  hanger insert (20-30 T).
- Added: 7025 "C0R2, Athena (styled)" post 1988-89 (year_to guessed from
  the 1990 SP-10AT v2 row); 7026 "D056, Athena Compact" levers 1988.
  source_id MANUAL-ATH88-1988-*.
- Years: 5967 Athena shifters 1980-80 -> 1988-90; 5968 Syncro II Athena
  year_from 1980 -> 1988.
- Notes appended ("Athena brochure"): 4092, 2281, 558, 211, 1479, 22,
  3236, 2952, 3690, 5969, 5971, 5967, 5968.
- Left: 4090 graphite rear and 557 Monoplaner graphite at 1980-90 (later
  finishes, not in this brochure); 5736 SP-10AT v2 at 1990; 215 Centaur
  Compact 1990 is a different part from D056.

## Campagnolo "Chorus" brochure, USA edition — April 1988 (Campy1988_Chorus/, 11 JPGs)

- Thumbnails (509x700), legible. Cover "4/88", back "April 88". Group
  code 700, 700-series part numbers (not the C-prefix I guessed from the
  Athena list). Parts list is p 10 (tn_10.jpg). Group id 8 exists.
- Group 700: 715/100 Monoplaner brakes + levers, 265/CS SM rear + braze-on
  front, 542/S Friction levers, 722/101 hubs, 706/101 crank (135 BCD,
  170/172.5/175, rings 39-54), 703/101 BB, 705/000 pedals, 704/101
  headset, 545 post 180 mm. Alternatives: 280/CS LG rear, 702/101 clip-on
  front, D056 Compact levers, 543/ST 544/F Friction, 325-327 Doppler,
  535-537/6AB and 538-541/7AB Syncro with Dual-Mode A/B inserts, 716/102
  post 130 mm. Rear has "Dual-Mode System" (parallelogram at 5 or 30 deg)
  and the first barrel adjuster on a Campagnolo rear.
- Added: 7027 "542/S, Chorus Friction" 1988-90, carrying all lever
  numbers in the description. source_id MANUAL-CHO88-1988-542-S.
- Years: 25 BB, 220 levers, 565 Monoplaner, 2287 adjustable-clamp front
  year_from 1980 -> 1988; 3249 722/101 hubs year_to 1987 -> 1988.
- Notes appended ("Chorus brochure"): 4108, 4107, 2286, 2287, 1487, 25,
  565, 220, 2956, 3249, 3700, 5742.
- Correction: 7025 (Athena C0R2 post) no longer says "shared with
  Chorus"; the Chorus post is 545 / 716/102 and the DB's Chorus aero post
  5742 is C0R1, the 1988 dealer catalogue later showed the 700-series numbers were
  provisional and C0R2/C0D0 are Chorus parts shared with Athena and
  Croce d'Aune; 7025/7028 corrected again in the DPC88 run.
- Left: 5976 and 222 graphite-finish rows at 1980 (later finish); 1992+
  CH-suffixed rows untouched.

## Campagnolo "Croce d'Aune" brochure, USA edition — March 1988 (Campy1988_Croce/, 11 JPGs)

- Full-size scans (1308x1800). Cover "3/88", back "March 88"; earliest of
  the four 1988 group brochures. Group code B000, B-series numbers; parts
  list is p 10 (10.jpg). Group id 9 exists.
- Group B000: B500 Delta "Penta-Drive" brakes + Power-Grade levers, B100
  SM rear (Twin-Axle System) + braze-on front, 0271 Doppler levers, B300
  hubs, B040 crank (135 BCD, 170/172.5/175, rings 39-47 / 48-54), B0H0 BB,
  B620-L Triple Bearing pedals, C0D0 headset, C0R2 post. Alternatives:
  B010-LG rear, A055 Record Compact levers, C022/C023 clip-on fronts,
  0272/0273 Doppler, 0281-83 Friction, 0221-23 Syncro 2 6 sp and
  0221-7/0222-7/0223-7 7 sp, B620-A steel clips, B620-R Multi-Size clips,
  C0R2-S. C-prefixed parts are Chorus parts, shared with Athena (see DPC88).
- Added: 7028 "C0D0, Croce d' Aune" headset 1988-91 (year_to from sibling
  front/hub rows). source_id MANUAL-CDA88-1988-C0D0.
- Years: 4112, 4111, 567, 27 placeholder 1980-1980 -> 1988-91 (year_to
  from siblings, only 1988 evidenced); 5744 post year_from 1980 -> 1988.
- Notes appended ("Croce brochure"): 4112, 4111, 2288, 567, 223, 1489,
  27, 3251, 3703, 5744, 5971 (7-speed Syncro 2 suffix).
- Correction: 7025 Athena C0R2 post now says "shared with Croce d'Aune".
- Left: 1490 and 2289 graphite rows; no Croce-specific shifter exists and
  none is listed (Record levers shared), so none inserted.

## Campagnolo Dealer Parts Catalogue — 1988 (1988CampagnoloDealerPartsCatalogue.pdf, 114 pp)

- Spare-parts catalogue, no text layer, no printed date (1988 from the
  filename; content predates Euclid/Centaur 1989). Six tabbed sections:
  Athena (blue), Chorus (magenta), Croce d'Aune (green), Record, Record
  Pista, Record Keirin (red). Each has a Basic Group / Substitutive
  components table then an exploded page per part with seven-digit
  sub-part numbers. Read visually in six batches of 20.
- Settles the numbering: A=Record, B=Croce, C=Chorus, D=Athena; x010
  rear, x021/22/23 fronts, x300 hubs (x031/x032), x040 crank (x071/x072),
  x0H0 BB, x500 brakes (x051/x052) + x053 lever, x600/x620/x630 pedals,
  x0R2 post, x0D0 headset. The x100 codes in the US brochures were
  gear+front subgroups; the Chorus brochure's 700-series and the Record
  brochure's 02xx lever numbers were provisional (now C0xx, A2xx).
- Sharing: Athena and Croce use Chorus C021 front, C0R2 post, C0D0
  headset; Record uses C023 adjustable clip. Chorus and Athena ship A281
  Record Friction levers, Croce and Record A271 Doppler. Compact levers:
  D056 (Athena, Chorus), A055 (Croce, Record). Seat pins: tables say
  x0R2/x0R8, parts pages x0R1/x0R7 (confirms 5755/5739 A0R7).
- No inserts: every part already had a row.
- Years: 7018-7024 (Keirin/Pista/Triple Bearing rows from the Nov 1987
  brochure), 7014, 23, 1485, 3242, 3243, 3695 year_to 1987 -> 1988.
- Notes appended, tag "DPC88:", 65 rows across all six groups (guarded
  with a LENGTH check; 5971 skipped at 248 chars). Longest now 251.
- Corrections: 7025 -> "Chorus C0R2 styled seat pin, also on Croce
  d'Aune"; 7028 -> "Chorus head set, also on Athena"; 7027 542/S Chorus
  Friction shortened and noted that DPC88 lists Chorus with A281; then
  retitled (user decision, 2026-09-28) to "Chorus levers (A281 Friction
  with Dual-Mode Syncro inserts)" so the provisional 542/S number is out
  of the title and the Chorus-specific A/B inserts are what it records.
- Left: Syncro insert codes 7222063-7222088, toe clips, straps, bottle
  1120005 (no category). 5971 Syncro II untouched (full).

## Campagnolo "Centaur" brochure, USA edition — April 1989 (centaur89.pdf, 11 pp)

- A4 scan, no text layer. Cover "4/89", back "April '89", Cartografica
  Veneta, Lonigo. First all-terrain group, code Q000; parts list p 10.
  Group id 7 exists.
- Basic group: Q010-LG rear (Q010-MD, Q010 SM substitutes; caps 44/38/32,
  max sprocket 34/34/30), M022 Euclid front (M023 adjustable, M024 35-36
  mm), Q222 Syncro clip-on levers (0118155 7-sp rear), Q500 Monoplaner
  cantilever brakes + levers (Q05C Compact, Q05E Biofitting), Q040 triple
  175 mm (Q071/Q072 170; rings QZ001/QZ00M/QZ00, 110/74 BCD), Q0H0 BB
  (124/132 axle), Q600 LG pedals (Q640 SM), Q300 hubs (Q300-FG), Q0R8
  post 325 mm with frame QR, Q0D0 steel headset with locking bracket.
- Added: 7029 "Q010-LG, Centaur (first generation)" rear 1989-90 with all
  three cage lengths in the description; 7030 "M024, Euclid (35-36 mm
  clip)" front 1989-91. source_id MANUAL-CEN89-1989-*.
- Years: 15 Centaur rows year_from 1990 -> 1989: 24, 2955, 3247, 3697,
  3698, 5974, 5975, 564, 219, 215, 216, 1486, 5741, 563, 3699.
- Notes appended ("Centaur brochure"): those 15 plus 3248, 217, 218,
  2291, 2292.
- Left: 4104/4105 RD-02CE/03CE (1990-93 second generation), 2285 Century
  grey front, 3245/3246 cassette hubs, 5740/5747 later posts, 3706 Icarus
  pedals. 3699 pedals row says country "France" (velobase error, not
  touched). Toe-clips, reflectors, gear guards, bottle: no category.

## Campagnolo derailleur dedupe — 2026-09-28 (user decision, sections A and B of the report)

- Analysed all 142 Campagnolo front/rear derailleur rows for same-part
  duplicates. Only 4099 carried bike_spec links (moved to 4096); no
  generator override referenced a deleted id. SQL kept as
  campy-derailleur-dedupe.sql; the user ran it (auto-mode blocks DELETEs).
  127 rows remain.
- Deleted (source_id prefix, so a velobase crawl reinsert can be spotted):
  4097 C-Record First Gen. (353F4ECB), 4099 "c record" (01F0EB60), 2284
  C-Record front (6AEB8E46), 4116 1012/1 1952 (C9705308), 4132 1020
  Record (1965) (DF4577B3), 4170 Victory S3 1987 (6FFDFE4E), 4156
  Triomphe S3 (1986) (F5906D74), 4140/4141 Record Ti 9-sp 1997/2000
  (B63A5BDB, 695C5686), 4100/4101 Cambio Corsa 1940/1945 (4B8F93E2,
  1299F4FE), 4147 bare 4001 1970-80 (E27153A5), 4150 4001 2nd gen matte
  (6A32380A), 4130 Record (1991) (1DA3D706), 4161 Valentino G.S.
  (1DBC4BA3).
- Merged/retitled: 4096 -> "0102050, C-Record (first generation)"
  1985-86; 4117 1012/1 from 1952; 4169 Victory S3 1987-88; 4157 Triomphe
  S3 1986-87; 4139 Record Ti 9-sp 1997-2000; 4102 1001 Cambio Corsa from
  1940; 4119 1012/4 first version re-dated 1951 -> 1955 (first appears
  in Catalogo N. 13). Notes on 4148, 4151, 4152, 4133, 4162.
- Cleanup (description-cleanup.sql, same day): the merge/delete
  housekeeping was stripped from those descriptions again since it is
  user-facing text; this file is the record. Also stripped velobase's
  "View Weight List" UI tail from 305 rows across all brands. Rule for
  future runs: catalogue facts go in descriptions, row-number bookkeeping
  goes only here.
- Left (section C placeholders, not applied): NULL years on 2280, 2289,
  4082; 1980 placeholders on 4090, 4089, 2277, 4153. Section D splits
  (NR v1-v5, Rally gens, cage lengths, finish variants, 0104007 bodies,
  M022-M024, RD-xxRE series) kept.

## Campagnolo brake and brake lever dedupe — 2026-09-28 (user decision, sections A and B)

- Analysed 70 rows (29 levers, 41 brakes). Only 588 carried a bike_spec
  link (moved to 587); no generator override referenced a deleted id.
  SQL kept as campy-brake-dedupe.sql; the user ran it. 57 rows remain.
- Deleted (source_id prefix): levers 217 (FE5E10FA) and 218 (C96C4AA3)
  "Centaur, Centaur", 221 Chorus (1993) (15A43395), 208 Corsa Record
  (5AEDA2CC), 213 Corsa Record pantographed (D34D675B), 230 4062 "long
  reach?" (7C7CBB54); brakes 586 Veloce Monoplaner (D2E450DB), 588 and
  589 Veloce (8A12DE4B, C9C7626B), 584 Triomphe unnumbered (FE99461C),
  563 Centaur unnumbered (28D66D99), 568 Euclid unnumbered (2CFFC1DA),
  571 Mirage Monoplanar (9631D3AB).
- Merged/retitled: 219 Q500 Centaur lever to 1993; 220 Chorus lever to
  1993; 587 -> "BR-02VL, Veloce Monoplaner"; 212 -> "0118065, C-Record
  (first generation)" (Corsa Record and pantographed examples noted);
  232 4062 pre-'83 year_from 1970 -> 1974; 570 Mirage noted Monoplaner.
- Left (section C, not applied): 222 Chorus graphite, 224 Euclid later
  version, 557 Athena Monoplaner graphite still dated from 1980; 226/228
  2030 overlap. Section D kept: 2040/2040-1 CPSC versions, 4061 v1/v2/
  4061-1, Gran Sport first/second gen, Delta family, numbered 1990s rows.

## Campagnolo crankset and bottom bracket dedupe — 2026-09-28 (user decision, sections A and B)

- Analysed 87 rows (34 BBs, 53 cranks). Only 1513 carried bike_spec links
  (5, moved to 1509); the generator's 1981 Kalkhoff 'campagnolo super
  record' crank override was repointed 1513 -> 1509 in the same commit.
  SQL kept as campy-crank-bb-dedupe.sql; the user ran it. 80 rows remain.
- Deleted (source_id prefix): BBs 36 BB-01RE CART 111 (56F4790A), 39
  Record con sfere 3/16 unwidthed (5D348EB8); cranks 1513 bare 1049/A
  Super Record 1980 (823786B4), 1469 "FC-01TDIC Tandem" (5EE3F466), 1497
  1049 v4 Special Record polished (06EBC9FF), 1470 "record pista
  non-fluted" (4B911B9B), 1508 3320 Sport (1C9F2B57).
- Merged/retitled: 35 -> "BB-01RE (CART 111), Record" 1992-95; 38 ->
  "Record (con sfere da 3/16, 70 and 74 mm)"; 1476 -> "3320, Gran Sport /
  Sport" 1970-75; notes on 1496 (polished Special Record) and 1505
  (non-fluted arms).
- Left (section C, not applied): 41/42 4131 start 1970 (should be 1974);
  1510-1514 no-flute SR arms dated 1980-90 (should be c. 1985-87); 1473
  Bianchi 0304 at 1980 only; 37 Triple Bearing BB at 1990 (title says c.
  1997); 1500 Olympus graphite no years; 1494 title "Campagnolo,
  Campagnolo Mirage"; 33 Record Pista BB empty description; 1471 "Record
  triple" 1990 ungrouped. Section D kept: 1049 v1-v4, 4031/4131 gens,
  1046 family, 0304-0306, C-Record gens, graphite finishes, 1990s series.

## Campagnolo hub and headset dedupe — 2026-09-28 (user decision, sections A and B)

- Analysed 89 rows (26 headsets, 63 hubs). No deleted row carried a
  bike_spec link or a generator override. SQL kept as
  campy-hub-headset-dedupe.sql; the user ran it. 79 rows remain.
- Deleted (source_id prefix): 2957 headset "don't know" (CF525DD7), 3225
  "pista/track hubs" (DE49DFC1), 3238 FH-00AT 1993 (991EFBB6), 7000 Sport
  Strada headset (MANUAL-CAT16SUP, my own insert; it was the 1040/A),
  3254 and 3255 unnumbered 1950 Gran Sport hubs (9A973289, F6003587),
  3228 Record 'SU' engraved (46B49944), 3235 Athena 7 speed (EDF21B4A),
  3264 and 3266 Record 8sp rear/front (9445FD63, 6F0FE940).
- Merged/extended: 2951 1040/A Gran Sport headset 1971-85 with the
  Sport-headset race numbers; 3237 FH-00AT to 1993; 3265 Record 8sp
  1991-96; notes on 3256 (pressed flanges) and 3259 (SU stamp).
- Left (section C, not applied): 2953 and 3239 Century finish dated
  1980 / 1985-90 (should be c. 1991-92); titles "1039, <C> Record Strada"
  (2963) and "Record Pista # 1040" (2966); 3272 4101 start 1970 (should
  be 1974); 3232 1253 kidney-bean at 1972 only; 3258 disc hub no years.
  Section D kept: Cambio Corsa front/rear, 1034-1036 flanges, 1250-1253,
  1039 eras, C-Record 321/322, SR 4011/4014/4101/4104, 3263 alloy body.
- Running total for the day's four dedupes: derailleurs 142 -> 127,
  brakes/levers 70 -> 57, cranks/BBs 87 -> 80, hubs/headsets 89 -> 79.

## Campagnolo pedal and seat post dedupe — 2026-09-28 (user decision, sections A and B)

- Analysed 69 rows (35 pedals, 34 posts). No deleted row carried a
  bike_spec link or a generator override. SQL kept as
  campy-pedal-post-dedupe.sql; the user ran it. 60 rows remain (9
  deletions, one more than the report's count of 8).
- Deleted (source_id prefix): pedals 3704 Euclid 1st Gen (6454032B),
  3699 Centaur unnumbered (309CE850), 3713 1038/1 alloy con denti
  1958-59 (092485E7); posts 5757 SP-10RE circa 97 (F81DDBFE), 5760 4051
  fluted two-bolt 1975 (D154629D), 5762/5763 4051-1 polished and
  semi-polished uppers (C9793725, 4CDE9E76), 7025 C0R2 Athena
  (MANUAL-ATH88, my own insert), 5744 Croce d'Aune long version
  (27443F7F).
- Merged/retitled: 3714 1038/1 con denti 1958-67; 5759 -> "4051, Super
  Record (two-bolt, fluted)" 1974-80; 5761 finish note; 5742 -> "C0R2,
  Chorus (styled; fitted to Athena and Croce d' Aune)" 1987-90, the one
  row for the shared Chorus post (DPC88 lists it in all three groups).
- Left (section C, not applied): 3696 PD-02RE dated 1980-90 (1991-94);
  3716/3717 SR pedals start 1970; 3707 orthopedic no years; 3689 title
  spacing; 5755/5739 titles carry "1986-1989" and sit in different
  groups; 5737/5738 lengths 130/210 vs catalogue 180/130; 5741 wants
  Q0R8 in the title; 5748 "Superlegerro". Section D kept: 1037/1037-a,
  1038 family, 1044 versions, 1045, Euclid bolt variants, both Centaur
  posts, PD-12CH/PD-22CH.
- Day's five dedupes: derailleurs 142->127, brakes/levers 70->57,
  cranks/BBs 87->80, hubs/headsets 89->79, pedals/posts 69->60 (54 rows).

## Campagnolo shifter, Ergopower and chainring dedupe — 2026-09-28 (user decision, sections A and B)

- Analysed 78 rows (15 chainrings, 50 shifters, 13 shifting brake
  levers). No deleted row carried a bike_spec link or a generator
  override (5970 and 5976 stay pinned). SQL kept as
  campy-shifter-ring-dedupe.sql; the user ran it. 64 rows remain.
- Deleted (source_id prefix): shifters 5975 Q222 repeat (603373EE), 5991
  bare 1014 Record (2C598429), 5988 1012/1013 bar-end umbrella
  (B73DB228), 6005 Valentino Extra thumb-nut (B284DB07), 5984 Gran
  Turismo unnumbered (BC04F5BF), 5967 Athena = A281 (A1C92234), 5968
  Syncro II Athena = A221 (A640349D), 5997 Record 8-speed = SL-01RE
  (D6A977B0); Ergopower 6347 Carbon BB-System Record 9-sp repeat
  (FC42C347); chainrings 1236 753 151 BCD (8CC001FD), 1239 760 151 BCD
  (8057CC96), 1243 unnumbered Super Record ring (894D350F), 1232 and
  1242 chainring guards PATENT stampings (F2F61D9C, 766A3B56).
- Merged/retitled: 6343 -> "Record 9-speed Ergopower (Carbon BB-System)"
  1998-2000; 1235 -> "753, Record" and 1238 -> "760, Record Pista" with
  151/144 BCD notes; 1231 -> "chainring guard (BREV or PATENT CAMPAGNOLO
  stamping)"; 5969 C-Record Friction to 1990 (Athena years); notes on
  5979 (1012/2 pattern), 6004 (thumb-nut), 1244 (outer 87 g).
- Left (section C, not applied): 5976 Chorus graphite and 6001 SR
  Retro-Friction dated 1980 (linked; c. 1990-92 and 1984-87); all
  unnumbered Ergopower rows dated 1990 (6338, 6339 NULL, 6340, 6341,
  6342, 6348, 6349); 1237 759 skip-tooth NULL; 5987 title lacks group.
  Section D kept: 1013/1 eras, both 1013/1A rows, 1014 versions, 1015s,
  760/A gens, C-Record lever family, 7027 Chorus levers, EC/SL series.
- Day's six dedupes: derailleurs 142->127, brakes/levers 70->57,
  cranks/BBs 87->80, hubs/headsets 89->79, pedals/posts 69->60,
  shifters/rings 78->64 (68 rows). Remaining Campagnolo categories not
  analysed: rims, wheels, freewheels/cassettes, chains, stems/bars.

## Campagnolo rim and wheel dedupe — 2026-09-28 (user decision, sections A and B)

- Analysed 42 rows (30 rims, 12 wheels). No deleted row carried a
  bike_spec link; the generator's 'campagnolo omicron' rim override keeps
  its target 4962. SQL kept as campy-rim-dedupe.sql; the user ran it.
  37 rows remain. No wheel duplicates found.
- Deleted (source_id prefix): 4945 Barcelona 92 high profile (853D7D7E),
  4963 Omicron Electrox (2F4933C9), 4964 Omicron Oxide (75428F3E), 4960
  Omega Strada hardox clincher (FE7484FC), 4949 Epsilon Strada Oxide
  (6C0CA46D).
- Merged/retitled: 4946 -> "Barcelona 92 (high profile)"; 4962 ->
  "Omicron Strada (polished, Electrox or oxide finish)"; 4948 ->
  "Epsilon Strada (G25 or oxide finish)"; 4957 Omega Strada Hardox noted
  as clincher, 395-430 g.
- Left (section C, not applied): NULL years on 4944 ATEK, 4947 Electron,
  4948 Epsilon, 4950 Gamma, 4954 Moskva 80, 4958 Omega XL; placeholder
  1980/1990 on 4967 Seoul 88, 4952 Mexico 68, 4953 Montreal 76, 4968
  Shamal 12 HPW, 4961, 4969, 4946; 4973 should read "060.102, Record
  Strada"; wheels 6955 title in capitals, 6961/6962 Shamal and 6963
  Vento dated 1990. Section D kept: Omega profiles/widths, the five 1986
  Record/Victory rims, all wheel rows.
- Day's seven dedupes: derailleurs 142->127, brakes/levers 70->57,
  cranks/BBs 87->80, hubs/headsets 89->79, pedals/posts 69->60,
  shifters/rings 78->64, rims/wheels 42->37 (73 rows). Not analysed:
  freewheels/cassettes/sprockets, chains, stems/bars, saddles, tyres.

## Campagnolo freewheel, cassette and sprocket review — 2026-09-28

- Analysed 15 rows (6 cassettes, 5 freewheels, 4 sprockets). No
  duplicates; every row is a distinct model, speed, material or version.
  Only 1186 Exa-Drive 8-sp is linked. Nothing deleted.
- Years fixed (campy-fw-years.sql, run by me, no deletions): 2072 alloy
  6-sp from 1982 (first catalogue appearance); 2073 alloy 7-sp 1985-90;
  2076 titanium 1987-90; 2075 7-sp narrow 1988-90, noted as the Servizio
  Corsa Compact of the 1988 dealer catalogue; 1187/1188 Exa-Drive 9-sp
  to 2000. The 1985-90 and 1987-90 values are estimates, not catalogue
  evidence; 2075's identification is from the DPC88 insert table.
- Left: 1183 "(7sp, Xenon?)" title; 2074 freewheel core is a sub-part
  row kept as is.

## Campagnolo section C placeholder years and titles — 2026-09-28 (user request, all categories)

- The section C items left by the seven dedupe reports, applied in one
  idempotent file (campy-section-c-years.sql, 49 statements, 66 rows,
  run by me since nothing is deleted). Only 1231 chainring guard keeps
  NULL years (no basis for a date).
- Catalogue-backed: 41/42 4131, 3272 4101, 3717 4121 start 1974 (Super
  Record launch); 1473 Bianchi 0304 to 1985 (sibling 1472); 4973 retitled
  "060.102, Record Strada" (Cat. n. 18 bis); 5739 A0R7-S 1986-89 and
  group Record to match 5755; 1354 Record chain to 1993.
- Estimates (est), model history not catalogue evidence: 990 century
  finish 2280/4089 1987-90; graphite/Century finishes 2289, 4090, 224,
  1500 1990-91, 222, 557, 2953, 3239 1990-92 or 1991-92; 4082 Rally with
  NR parallelogram 1974-82; 2277 3600/NT wing logo 1980-85; no-flute SR
  arms 1510/1511/1512/1514 1985-87; 37 Triple Bearing BB 1997; 3258
  disc hub 1985-90; 3696 PD-02RE 1991-94; 3707 orthopedic 1970-85; 5976
  Chorus graphite levers 1990-92; 6001 SR Retro-Friction 1984-87;
  Ergopower 6338 1992-94, 6339 Avanti 1995-98, 6340/6342 1998-2000, 6341
  from 1992, 6348 1996-97, 6349 1992-93; 1237 759 skip-tooth 1950-60;
  rims Greek-letter 4948/4950/4958/4961 1988-92, 4969 from 1988, 4962
  from 1985, Olympic-city 4946/4952/4953/4954/4967 1990-92, 4944/4947/
  4968 and Shamal wheels 6961/6962 1992-96, 6963 Vento 1994-98.
- Titles fixed: 1494 "Mirage" (was doubled), 2963 "1039, Record Strada"
  (stray <C>), 2966 "1040, Record Pista", 3689 "Record, 50th
  Anniversary", 5748 Superleggero spelling, 5755/5739 A0R7 cylindrical
  180/130 mm, 5737/5738 A0R2-S / A0R2 C-Record aero, 5741 "Q0R8, Centaur
  (325 mm, frame QR)", 6955 "Bora (1st generation, 26 in)"; 33 Record
  Pista BB given a description.
- Generator: 'campagnolo omicron' -> 4962 has no year range, so the
  1980 -> 1985 start change does not affect it. The 1049/A no-flute rows
  are not referenced.

## Campagnolo "Euclid" brochure, USA edition — September 1988 (euclid89.pdf, 13 pp)

- A4 scan, no text layer; cover "9/88", back "September 88" (Centrooffset,
  Mestrino). The filename says 89 but the brochure is 1988. Page 2 (group
  photo spread) did not render; the parts list on p 12 is complete. First
  mountain-bike group, code M000, Chorus-derived. Group id 10 exists.
- Basic composition: M010 gear, M022 front (M023 adjustable, M024 35-36
  mm), M500-CP brakes + levers (standard or Biofitting; Syncro levers
  0118122 6-sp, 0118124 7-sp on the brake-lever stalk, I.G.A.S.; M2KD
  third-brake kit), M040 triple 110/74 (170/175/180; 46-50 / 36-38 /
  24-28), M0H0 BB 132 mm (136 asymmetric and 140 options), M600-PR pedals
  (M600-AM steel clips), M300 hubs (M300-FG, M300P, M300PFG; 7 or 9 mm
  ends; gear-guard versions), M0R8 post (M0RV two straps; 50/60 mm frame
  QR), M0D0 headset with cable carrier. Gear guards 1390001/2.
- No inserts. Years (catalogue-backed): 17 Euclid rows year_from 1989 ->
  1988 (225, 569, 1491, 1492, 2291, 2292, 7030, 2958, 3252, 3253, 3705,
  4113-4115, 5745, 5746, 5977); 28 M0H0 1990 -> 1988-91; 3253 M300-FG to
  1991. 224 later-version levers and 2290 graphite front stay 1990-91.
- Notes appended ("Euclid brochure"): M-numbers and specs on 16 rows,
  including that the brochure lists one M010 gear where velobase has
  three cage lengths (4113/4114/4115 kept as they are).
- Left: solid-spindle M300P/M300PFG and the Biofitting lever as notes,
  not rows; accessories (bottle 1120007, spoke guard, mudguard,
  reflectors) have no category.

## Campagnolo range brochures, GB edition — June 1990 and September 1990 "Anaheim 1990" (Campy1990_Groups/, 12 + 14 thumbnails)

- Two overview brochures, one page per group with photo, paragraph and an
  options table (standard / on request). No part numbers, so a year and
  options record only. Read as two bound PDFs (groups-6-90, groups-9-90).
- June: Xenon, Athena, Chorus, Croce d'Aune, Record, Olympus, Centaur,
  Euclid, Tandem Road (Croce d'Aune and Xenon variants), MTB Tandem
  (Centaur and Olympus variants), lubricants and tools. September adds
  Record Pista, Record Keirin and Themis (new touring group), drops the
  Xenon and Olympus tandem variants.
- First appearances: Tandem Road and MTB Tandem groups June 1990; Themis
  September 1990. Chorus rear "preset for 8 speed" by September. Century
  (Record) and graphite (Athena, Chorus, Croce, Centaur, Euclid) finishes
  all current 1990, supporting the 1990-92 estimates set earlier today.
- No inserts. Years: 17 rows year_to -> 1990 (223 Croce levers, 5739/5755
  A0R7 posts, 3249 Chorus 722/101 hubs, 1489/1490 Croce cranks, 7018-7024
  Keirin/Pista/Triple Bearing, 3242/3243/23/1485 C-Record Pista); 3718
  Themis pedals year_from 1989 -> 1990.
- Notes ("1990 range brochures"): 3265 Record cassette hub, 1354 Rohloff
  chain, 4128 Olympus, 4115 Euclid, 3227 tandem hub composition, 4154
  Themis composition, 3718; short "1990:" notes on 4108 Chorus.
- Truncation incident: four notes overflowed varchar(255) and two (5971,
  7029) lost their guard text, so the file was not idempotent on re-run.
  Repaired in groups-1990-fix.sql by rebuilding from the pre-note text;
  the main file now carries LENGTH(description) < 120 guards. The same
  check found two older truncations (3261 HiLo, 7002 1207/1208) and
  closed their sentences. Rule: always add a LENGTH guard on CONCAT notes.
- Left: no Themis-specific rows beyond 4154/3718 (parts are Xenon and
  Olympus); no tandem lever or 40-h hub rows beyond 3227; 4098 A010 not
  extended (4133 R010 covers 1990-91); 7026 D056 not listed, left at 1988.

## Campagnolo range brochure, GB edition — January 1991 (Campy1991_Groups/, 16 thumbnails)

- Cover "1/91". Same format and page order as the Sep 1990 "Anaheim"
  brochure; every group text and options table is reprinted word for
  word (Xenon, Athena, Chorus 8-speed, Croce d'Aune, Record, Record
  Pista/Keirin, Themis, Olympus, Centaur, Euclid, Tandem Road, MTB
  Tandem, lubricant and tools). Only addition: Biodynamic, Biothermal
  and Biodynamic 900 bottles (no category). No part numbers.
- Significance: last brochure before the 1992 Record OR / Icarus /
  Ergopower generation, so it documents a 1991 endpoint for every
  1988-90 group.
- No inserts. Years: 71 rows year_to 1990 -> 1991 across Xenon, Athena,
  Chorus, Croce d'Aune, Record/C-Record, Record Pista/Keirin, Olympus,
  Centaur and misc (tandem hub 3227, Veloce headset 2970, Icarus/Centaur
  pedals 3706, disc hub 3258, freewheels 2073/2075/2076). Left at 1990
  because not listed: 1494 Mirage crank, 587 Veloce brakes, 2969
  Triomphe headset.
- Notes ("Current in the Jan 1991 range brochure"): one per group rear
  derailleur where length allowed (4173 Xenon, 4092 Athena, 4112 Croce,
  4133 Record, 4128 Olympus); 4108, 7029, 4115, 4154 skipped by the
  LENGTH guard, which behaved as intended.

## Campagnolo rims and Fluid-Dynamic wheels, GB edition — January 1991 (Campy_1991Rims.pdf, 12 pp)

- Cover "1/91". Scan, no text layer. Pages: tubular rims (Sigma, Omega,
  Lambda), clincher "crochet" rims (Omega, Lambda, Ypsilon, Omicron,
  Gamma), ATB rims (Thorr, Contax), Fluid-Dynamic wheels (Ghibli M23,
  Gyroscopic, Khamsin, Scirocco, bags), and the R-number wheel table.
  Rims carry P-series numbers: xxx1 tubular, xxx2 clincher, xxx4 ATB.
- Rim numbers: P0071 Sigma Pave, P0091 Sigma Strada, P0111 Sigma 20,
  P0121 Sigma Crono; P0451/P0222 Omega V profile tub/clincher, P0161/
  P0162 Omega XL, P0171/P0172 Omega Strada, P0211/P0212/P0232 Lambda,
  P0322 Ypsilon V, P0272/P0352 Omicron polished/Electrox, P0282/P0332
  Gamma polished/Electrox; P0504/14/24 Thorr and P0534/44/54 Contax in
  Hardox/oxide/polished. Wheel table reprints Nov 1987 plus Scirocco
  R0215 road and R0225 track.
- First appearances Jan 1991: P-numbers, Sigma 20, Ypsilon, Thorr,
  Contax, Scirocco track. Record Pave/Strada/Crono and Victory rims of
  1986 are gone (Sigma replaces them). Confirms the Greek-letter rims'
  1988-92 estimates.
- Added: 7031 P0071 Sigma Pave, 7032 P0111 Sigma 20 Strada, 7033 P0322
  Ypsilon Strada V Profile, 7034 P0504 Thorr (ATB, finishes noted), 7035
  P0534 Contax (ATB), all 1991-92 (year_to a guess). source_id
  MANUAL-RIM91-1991-*.
- Years: 4951 Lambda, 4962 Omicron, 4970 Sigma Strada, 6959 Khamsin,
  7017 Ghibli Gyroscopic year_to -> 1991.
- Notes ("Jan 1991"): P-numbers on 4957, 4958, 4961, 4951, 4962, 4950,
  4970, 4969; R0225 on 6960; still-listed on 6959, 7017. All guarded.
- Left: 4948 Epsilon (not in this catalogue); 4955/4956 Omega 19/20 and
  the Olympic-city rims (not listed, later or earlier); wheel bags.

## Campagnolo 1992 Road Range and 1992 Rims Range, GB — 1992 (Campy1992_Rims&Road/, 8 + 8 thumbnails)

- Two Lonigo-printed brochures. Road: first catalogue of the Ergopower
  generation, three groups (Record RR, Chorus RS, Athena RS) with the
  two-letter codes the DB already uses (RD-01RE, FD-01SRE/FRE, SL-01SRE
  CG, EC-02RE CG, HS-01OR, FC-01RE, BB-01/03RE, BB-01/03CART, PD-12REQR,
  PD-02RE, SP-RE, BR-02RE, BL-02RE CG, HB/FH-00RE, FH-01RE, CS-8AL,
  CS-8S, CN-CA68S; CH and AT equivalents; HS-01CO Contax on Chorus;
  FD-02FCH adjustable clip shared). Optionals: FC-01TDIC tandem crank,
  HB/FH-00TD tandem hubs, FC-01ICTG Icarus triple, FC-01ATTG Athena
  triple, SL-02BE CG Icarus bar-end. Rims: P-series as 1991 plus Omega
  19 P0562, Omicron/Gamma black and silver replace Electrox, ATB rims
  Stheno P0594/P0604, ATEK P0614/P0624, Mirox P0634/P0644, Zark P0664/
  P0654 replace Thorr and Contax; Sigma Crono, Omega XL tubular, Ghibli
  Gyroscopic, 28 in fronts and French threads dropped. The ATB text says
  "Atex" but the table prints ATEK (matches DB 4944).
- Added (17 group parts 1992-94, 3 rims 1992-93, year_to guessed):
  FC-01RE, SP-RE, BR-02RE, BL-02RE (Record); FD-01SCH, SP-CH, PD-02CH,
  BL-02CH (Chorus); FD-01SAT, SL-01SAT, HS-01AT, FC-01AT, BB-01AT, SP-AT,
  BR-02AT, FC-01ATTG (Athena); Stheno, Mirox, Zark. source_id
  MANUAL-ROAD92-1992-<code> and MANUAL-RIM92-1992-<code>. Record hubs
  HB/FH-00RE not inserted: 3265 "Record 8sp" covers them, coded in note.
- Retitled: 21 -> "BB-03AT / BB-03CART, Athena (CART 111 cartridge)";
  1486 -> "FC-01TDIC, Tandem (Centaur-based)" (was titled Centaur; it is
  the tandem crank); 5987 -> "SL-02BE CG, Icarus (bar-end)"; 1493
  "FC-01CSIC" -> "FC-01ICTG, Icarus TG (triple)" (velobase misreading).
- Years: 4091, 4134, 6344, 3701, 1486, 3227, 4955 -> 1993; 2287, 3250 ->
  1994; 21, 2960 -> 1992; 7034 Thorr and 7035 Contax cut back to 1991.
- Notes ("1992 Road Range" / "1992 Rims Range"): 36 rows, all LENGTH
  guarded; one row (see tail check) filled to exactly 255 by design.
- Left: HS-01RE 2964 at 1991 (Record ships HS-01OR in 1992); 2306
  FD-01SRE already 1991-94; C-Record/Croce/Euclid/Olympus/Centaur MTB
  rows untouched (not in a road brochure); wheel bags.

## Campagnolo 1993 Product Range, GB — printed 9/92 (Campyjpg1993/, 18 double-page scans)

- Full-range catalogue, first with every part coded and group codes
  (GR-03RE Record, GR-03CH Chorus, GR-03AT Athena, GR-03VL Veloce new,
  GR-03OR Record O.R., GR-03IC Icarus, GR-03CE Centaur), then rims,
  Shamal (first appearance, 16-spoke, R0226-R0658), Ghibli/Scirocco/
  Khamsin (as 1992) and two pages of special tools (out of scope).
- 1993 changes: RD-11RE/CH/AT replace RD-01; FD-11SRE/FRE and FD-11SCH
  replace FD-01; EC-12RE CG (EC-12REAB on Athena) replaces EC-02RE;
  PD22REQR/CHQR/ATQR replace PD-12; BB-11/13RECART TBS cartridge; CS-8RE
  Ni-Cr and CS-8SR alloy split from CS-8S; CN-NTS chain on Athena/Veloce/
  Centaur; FH-01SR alloy-body freehub. Rims: Sigma Pave and Ypsilon
  dropped, Omega 19 26 in P0682 added, Stheno 405 g, ATEK 390 g.
- Corrections to my 1992 run: FC-01CSIC is the real Icarus Compact Drive
  crank code (1493 reverted from my wrong "FC-01ICTG" retitle; the 1992
  FC-01ICTG road triple optional was a different part). FC-01TDIC is the
  Centaur triple (24-26/34-36/46-48) as well as the tandem crank; 1486
  retitled to say both.
- Added (15, 1993-94 guessed): RD-11CH, RD-11OR, RD-12IC, RD-12CE;
  FD-11SRE, FD-11SCH, FD-01SVL; FC-01VL; SL-02TB CG; BL-02OR CG;
  BR-02CLTDIC; HB/FH-00IC; CN-NTS (no group); PD-22RE QR; PD-12VL QR.
  source_id MANUAL-RANGE93-1993-<code>.
- Retitled: 18 -> "BB-01VL / BB-03VL, Veloce (cartridge; also Stratos)";
  2970 -> "HS-01VL, Veloce" 1993-94 (was placeholder 1990-91); 5747 ->
  "SP-IC, Icarus / Centaur / Record O.R.".
- Years: 4134, 4109, 4091, 6344 -> 1992 (superseded); 211, 565, 587,
  2960, 3706, 5747 -> 1994 (confirmed current).
- Notes ("1993 Range"): 41 rows, LENGTH guarded, longest now 253.
- Left: Veloce seat post (none listed); RD-11IC/RD-13CE/FD-03FOR/HS-03/
  04 as notes not rows; Shamal 6961/6962 already 1992-96; tools.

## Campagnolo 1994 range catalogue, GB — 60th anniversary (Campyjpg1994/, 16 double-page scans + thumbnails)

- Prose page per group plus a Technical Specifications table at the back;
  NO part codes printed anywhere, so a year/composition record only.
  Groups: Record, Chorus, Athena, Veloce, Stratos (new, OEM, Ergopower
  only), Record O.R. Icarus and Centaur are gone. New: Exa-Drive
  cassettes and chain, carbon-bodied Record Ergopower, dual-pivot
  Cam-Plus brakes on Record and Chorus, Stratos group, Dedra 23 mm hybrid
  rim, Bora carbon 16-spoke and Vento 20-spoke wheels; Shamal now 26/28
  in road and track; Ghibli 24/26 fronts and 28 rears only; Omega XL and
  Contax chain gone.
- Added (8, uncoded so descriptive titles; source_id MANUAL-RANGE94-
  1994-*): Stratos rear, front, Ergopower, crankset, QR pedals (1994);
  Dedra hybrid rim (1994-96); Record dual-pivot (1994, Cam-Plus) and
  Chorus dual-pivot (1994) brakes. Stratos brakes 581 and hubs 3274
  already existed.
- Years -> 1993 (dropped for 1994): Icarus 1493, 4121, 7057, 7065, 7066,
  5986, 3706, 2960; Centaur 7058, 1486, 3246; single-pivot 565 BR-02CH
  and 7038 BR-02RE. Years -> 1994 (confirmed current): 4135, 4093, 6345,
  6349, 4164, 6006, 3279, 3702, 7052, 7053, 7054, 4955, 6957, 6958, 6960,
  6959.
- Notes ("1994 range"): 15 rows incl. 578 BR-14RE (1995 coded successor
  of the 1994 dual-pivot), 1186 Exa-Drive, 6346 carbon Ergopower, Shamal/
  Bora/Vento/Ghibli wheel facts. LENGTH guarded, longest 247.
- Left: Record O.R. rows already 1992-95; Athena Monoplaner 556 (1995)
  and Avanti rows untouched; tools none; Icarus SP-IC 5747 kept to 1994
  since the same post serves Record O.R.

## Campagnolo 1995 range catalogue, GB (Campyjpg1995/, 20 double-page scans + thumbnails)

- Prose group pages plus a Technical Specifications table; NO part codes.
  Groups: Record, Chorus, Athena, Veloce, Mirage (new), Avanti (new),
  Record O.R. Stratos gone after one year. New: low-profile cranks
  across the range, Record shorter-axle three-bearing cartridge BB,
  carbon Ergopower extended to Chorus, triple options on Chorus, Athena,
  Veloce and Mirage, Athena aero seat pillar, revamped head sets, Exa-
  Drive on every group; rims Delta (clincher) and Arkos (28 in off-road)
  new, Sigma 20 gone; wheels Zonda new (26/28 clincher), Ghibli rear now
  7-sp cassette.
- Added (18, uncoded, descriptive titles, source_id MANUAL-RANGE95-1995-
  <GROUP>-<code>): Mirage rear, front, cartridge BB, Ergopower, hubs, QR
  pedals (1995-96); Avanti crank, cartridge BB, hubs, QR pedals, seat
  pillar (1995-98); Chorus triple crank, Veloce triple crank, Athena aero
  pillar, Chorus carbon Ergopower (1995-96); Delta and Arkos rims
  (1995-96); Zonda 1st generation wheelset (1995-98).
- Re-dated: 1494 "Mirage" crank (velobase placeholder 1990) -> "Mirage
  crankset (1995)" 1995-96.
- Years -> 1995 (confirmed current): 36 rows across Chorus, Athena,
  Veloce, Record dual-pivot 7076/7077, Ergopower, headsets, posts, pedals,
  the 1992 ATB rims, Dedra, ATEK.
- Notes ("1995 range"): 15 rows incl. 6956 Ghibli 7-sp, 2956 head set
  revamp, 7070 Stratos dropped, 7032 Sigma 20 gone. LENGTH guarded, 245.
- Incident: the generator's own length assert tripped on one description
  after 14 INSERTs had already been printed, so the first load ran only
  those inserts and no updates. Fixed the text, regenerated, reloaded;
  the guarded inserts were no-ops. Rule: run the length check before
  printing any SQL, not inline.
- Left: Mirage/Avanti brake levers and headsets (not separately described
  or specced); Record O.R. rows already 1992-95; Chorus/Athena/Veloce
  triple rear and front derailleurs carried as notes on the triple crank
  rows rather than as separate rows.

## Cinelli "Il Grande Ciclismo" brochure — 1982 (Cinelli_Accessories_2.pdf, 8 pp)

- First non-Campagnolo catalogue. Printer's imprint on the cover dates it
  1982 (Lito Mariani, Cislago). Component content is one spread (p 4):
  bar dimension table Mod. 63/64/65/66/67 (63 and 66 both named
  Campione del Mondo; 63 shallow 147/76, 66 deep 156/90), stems 1A / 1R /
  2A pista with length table, CMX and the openable "attacco apribile"
  stem, Unicanitor cutaway; p 3 photo of toe clips, Binda straps,
  Unicanitor variants and the M71 pedal. Pages 5-7 are lugs, shells,
  crowns, dropouts, clothing, helmets and bags (no category); p 8 tandem.
- Brand 227, 68 rows, no groups. Added (4, 1982, source_id
  MANUAL-CIN82-1982-*): Mod. 63 Campione del Mondo bar, 2A Pista alloy
  stem (6501 "Pista Steel" 1960-70 is the earlier one), CMX stem,
  openable handlebar stem.
- Years -> 1982: bars 2802 (64 80s), 2804 (65), 2806/2808/2810 (66 1980s
  logos), 2812 (67); stems 6489 1A winged C, 6491 1R; 3724 M71 (was 1971
  only); saddles 5331, 5335, 5332 (NULL -> 1970-82).
- Notes ("1982 Cinelli brochure"): bar dimensions on 64/65/66/67, stem
  lengths on 1A/1R, straps on M71, Unicanitor finishes. Guarded.
- Left: 2807 66 CdM 1950 and 2809 early logo 1960-70 (earlier versions);
  2800 26.0 clamp 1990; Cinelli_10_Speed_Drive.pdf in Downloads not yet
  processed.

## Shimano "A Complete Line of Shimano" — printed 12.1975 (equusbicycle.com/bike/shimanocatalog75/, 20 spread PDFs)

- First Shimano catalogue in the log. The Bicycle Info Project page
  links each thumbnail to pdf/shimanocat7500NN.pdf (one spread each,
  4537x2936 JPEG inside, usable OCR layer); merged to shimano75.pdf in
  the scratchpad. Back cover imprint "'75.12. KM.NP". 37 pages.
- Contents: Dura-Ace road (DB-100/110 Crane, EA-100, LA-100, LD-500,
  FA-100/110, HA-100/200, GA-200 + GB-100, BA-100, MA-100, UA-100, Black
  Series), Dura-Ace track (HA-300, FA-200, GA-100, UA-200), 600 series
  NEW (DC-200/210, EC-200/210, LB-180, BB-300, BE-100 cantilever,
  MB-200, HB-100/200, GC-100 + GB-200), Positron DG-100 NEW with LB-500/
  510, 500 DC-100/110, Titlist DB-200/210 and EB-100, Tourney DB-300/
  310, Eagle DE-100/200/110/210, Lark DD-100/200/500/300, fronts EC-100
  Shimano 50 and ED-100/200 Thunder Bird, levers LB-100 to LB-400 and
  LD-200/300/400, freewheels FC-300/330 and FB-100, hubs HC-100/110/120/
  200/210 and HD-100, Tourney brakes BB-100/110/200/210 (Auto Adjust
  NEW), levers MD/MC/MB-100 and MB-110, coaster CC-100 Mighty Mite NEW
  and CB-100, hub gears TB-100/TC-100/AB-100, disc BC-300 NEW and
  BC-200 hydraulic, protectors, small parts, outer bands, tools.
- Added (46, all 1975-76 with year_to guessed; source_id
  MANUAL-SHI75-1975-<code>): 11 rears, 2 fronts, 11 shifters, 3 track
  parts (HA-300, FA-200 sprocket, UA-200), 7 brakes and levers, 2
  freewheels, 5 hubs, 2 geared hubs, 2 bottom brackets. Group ids:
  Dura-Ace 50, 600 93, Positron 224, 500 133; Titlist/Eagle/Lark/
  Tourney-generic parts left ungrouped.
- Retitled: 4539 "Tourney" 300 g -> DB-300; 4540 "Tourney" 274 g NULL
  years -> DB-310 Tourney GS 1975-79 (weights match the catalogue's
  300 / 330 g); 413 "600" levers -> MB-200; 1812 GA-100 -> track
  chainwheel (the catalogue's GA-100 is the track crank, GA-200 road).
- Years: 3530/3531 600 hubs and 414 levers year_from 1976 -> 1975;
  4439 Lark W and 1010 BB-100 year_to -> 1975.
- Notes ("Dec 1975 catalogue"): codes, capacities and weights on 38
  existing rows. Guarded; longest 219.
- Left: 600 hub rows 3530/3531 keep their later HB-6110/6120 titles
  (catalogue codes HB-200/HB-100 in the note); NB/NC/ND/NF fork ends,
  KA/KB/KD bands and cable parts, PB spoke protectors, small parts and
  XA/XB tools have no category. Sky Lark and Lark SS/SPO are separate
  rows since the catalogue separates them; Eagle SPO/GPO likewise.

## Shimano 1982 Bicycle System Components — printed 01.82 (Downloads/Shimano1982/, 44 spread JPEGs, blz01-45, no 44)

- 1200x858 spreads bound to shimano82.pdf; the Read tool dropped pages
  in every batch of 15, so it took six passes of 3-10 pages to see all
  44. Copyright 1982, imprint "0182 F1/37M". 37 numbered pages: aero
  essay, AX features, innovations (Centeron, DD pedal, Parapul, Uniglide,
  10 mm pitch, NBM shoe), then Dura-Ace 10 track, Dura-Ace track, Dura-
  Ace AX, 600 AX, Dura-Ace EX, 600 EX, Deore, Dura-Ace road (7100), 600,
  Adamas AX, FF System, PPS System, and the system components chart.
- Every part coded; weights and capacities given. DB already held the
  AX, EX, Deore and Adamas ranges (velobase dates them 1981-84), so the
  work was codes and years on older rows.
- Added (12, 1982-84 guessed, source_id MANUAL-SHI82-1982-<code>):
  FD-7310, SL-7310, SP-7300 (Dura-Ace AX braze-on front, brazed A lever,
  A-type post); FH-6263 / FH-6253 600EX large-flange freehub (black
  variants in the description); BB-DE30 Deore triple; MF-7150 / MF-7160
  Dura-Ace freewheel; HP-7100; CN-6120 and CN-UG20 chains; MF-FF51 /
  MF-FF61 FF freewheel; RD-PF10 / RD-PF20 Positron-FH; SL-PF13 PPS stem
  lever. Groups: DA AX 100, 600EX 46, Deore 158, DA 7100 137, 600 93,
  Positron 224; chains and FF ungrouped.
- Retitled: 3571 "HF-7261" -> FH-7261 (small flange 6-sp silver); 3541
  "Adamas AX (?)" hubs -> FH-AD61 / FH-AD65 1982-83; 1800 "Adamas AX, FF
  System" crank -> FC-FF33, FF System; 1404 Link-Lock -> CN-6130.
- Years: 3530/3531 600 HB-6110/6120 hubs (were 1975-76) -> 1982, since
  the catalogue prints those codes; BB-7500 134 (shared by FC-7200/7300/
  7500), BB-7200 136, BB-6200 126, HP-7500 3101/3102, SS-7500 6386/6387
  -> 1984; FC-7000 1817, SS-7000 6385, CN-7000 1410 -> 1983 (with
  HB-7020); FH-7250/7260 3568/3569, FH-6261 3540, CN-6200 1407, CN-7100
  1411, SL-7210/7220 6173/6174, HS-7200 6679, MF-6151 2216, MF-1500 2214
  -> 1982; RD-DE20 4479 1980 -> 1982-84.
- Notes ("1982 catalogue"): 91 rows with codes, weights, capacities and
  sub-variants (black/silver, 5/6-speed, band/braze-on). Guarded; longest
  245.
- Left: fork ends FE-*, cable parts SM-*, SM-BT10 bottle, CP-AX30/50
  protectors, CL-P210 cable (no category); 4445 "400FF" and 4525/6184
  bare "Positron" rows untouched (PF rows inserted separately); 1197/
  1198 AX cassette rows untouched.

## Shimano 1984 Bicycle System Components Dealer Catalog — June 1984 (Downloads/Shimano 84.pdf, 162 pages, scan, no text layer)

- Colophon "(c) Jun. 1984 ... 0684 FC/10M". 160 numbered pages; PDF page =
  catalogue page + 1. Read in batches of 10, no pages dropped. Sections:
  series feature spreads (AX, EX, New 600EX, 105, Deore XT, DX, FF/PPS),
  system combination charts (14-19), spec charts (20-21), then per-model
  parts pages with weights and capacities for rear/front derailleurs,
  levers, hubs, freehubs, internal hubs, freewheels, cranks, pedals,
  brakes, brake levers, chains, headsets, seat posts, stems, plus fork
  ends, protectors, carded parts, clamps, cables and tools.
- Dealer/service book: superseded 1981-83 ranges (Dura-Ace 10, 7100, EX,
  600 Arabesque, 600 AX, Deore, Altus, FF/PPS, Tourney) keep full spec
  and parts pages beside the new 1984 lines (New 600EX 6207, 105 Golden
  Arrow, Z components, Deore XT M700, AL-11, Biopace CR-BP10, PD-AD20,
  PD-7310, Positron-FH400, DX/SX BMX, SG three-speed hubs). Adamas AX is
  gone except PD-AD20 and FD-AX50; PD-MX10 is stamped DISCONTINUED.
- User chose "apply without budget": group-level parts only. Added 24
  (1984-1984, source_id MANUAL-SHI84-1984-<code>): RD-PF40, RD-P240,
  RD-P210, RD-RS11 / RS12; FD-T105; SL-Z403, SL-MT50, SL-AT11 / AT12,
  SL-BC10; HB-AQ11 / AQ21, HB-AN11 / AN21, HB-F105 / FH-R105, FH-Q620,
  FH-N620 / K610; SG-3S20, SG-2S10, SG-3S23, SG-3C23 (Geared Hubs);
  MF-FF50; FC-FF35; BB-6210; PD-7310, PD-AD20; BL-Z304. Groups: Positron
  224, 105 Golden Arrow 43, Z-Series 103, ALTUS 183, 600 93, 600EX 46,
  Dura-Ace 50, Adamas AX 47; RS, AL-11, alloy hubs, SQ/SN freehubs,
  SG-3S20/2S10, FF parts ungrouped.
- Not inserted (budget, listed for a later pass): SL-PF45, P221, P213,
  PF50, EM50, 2S21, 3S45, 3S20, LS10, QS10, QP10 levers; HB-SN11 / SN31;
  HB-MX25 / 26, FH-MX15, FH-MX20, FC-MX61 / BB-MX60, PD-MX10 / MX20,
  BR-MX10 / 20, BL-MX10 / 20, SF-MX10, SP-MX20 (DX/SX BMX); CB-D110
  coaster; SF-1100; BR-TS10 / 30 / 40 / 60, BR-C800 / C801; BL-D800 /
  D805, D500, HD30, HD85, LM10, PL10, LF10.
- Retitled: 4445 "400FF" -> RD-401F, 400FF (to 1984); 123 "105 Golden
  Arrow" BB -> BB-3L11 / BB-3P11 1983-86; 959 "BR-Z57, 105 Golden Arrow"
  -> BR-Z570 / Z640 / Z720 / Z790, Z-Series, group 103. 410 BL-Z306 stays
  in the 105 group with a Z-Series note.
- Years -> 1984 (34 rows, all had a full parts page): FH-7250/7260,
  FH-6261, HB-6110/6120, CN-6200, CN-7100, SL-7210/7220, HS-7200,
  MF-6151, MF-1500 (were 1982 from the 1982 book); HB-7020, SS-7000,
  CN-7000, FC-7000, FH-7370, FH-6361 hub (were 1983); BR-7210 998,
  BL-H105 409; RD-AT11/AT12, FD-AT11/AT12, FD-AL11, FD-FE12, SL-AT22,
  SL-Z408, FH-6207 3537/3538, FH-5A10, CR-BP10 1280, FC-FF33 1800,
  PD-MX15 3966 (velobase 1980 placeholders, year_from left alone).
  RD-Z501 4544 year_from 1986 -> 1984; 4543 GS year_from NULL -> 1984.
- Notes ("1984 dealer catalogue", 30 rows): capacities, weights, cage and
  band variants, Italian conversion part, April-1984 Biopace rings.
  Guarded on tag and LENGTH; no row reached 255.
- Left: SP-7320 5897 and SP-6322 5888 are not in this book (only 7300/
  7310/7322 and 6300/6310), untouched; FD-Z rows carry a velobase "-HS"
  suffix; 3966 PD-MX15 still grouped Deore XT (it is Shimano SX); 7149
  FH-6263 not listed here. Out of scope: CP protectors, FE fork ends,
  SM-HP10, SM-BT10, carded parts, clamps, cables, tools.

## Shimano 1988 Bicycle System Components Dealer Catalog — January 1988 (Downloads/Shimano 88.pdf, 146 pages, scan, no text layer)

- Colophon "(c) Jan. 1988 by Shimano Industrial Co., Ltd." printed West
  Germany. Dealer parts catalogue, same format as the 1984 book: series
  spreads absent, straight into per-model exploded-parts pages grouped by
  category (Rear/Front Derailleurs, Shifting Levers, Front Chainwheels,
  Pedals, Hubs, Multiple Freewheels, Brake Arches, Brake Levers, Head
  Parts, Seat Pillars, Handle Stems, Seat Post QR, Chain Deflector,
  Chains, Tools, Fork Ends, Others). Entirely SIS-era (Dura-Ace 7400 down
  to Exage trail/Z, New Positron PPS, plus the older Positron SG-3C30
  three-speed hub); no overlap with the 1975/1982/1984 catalogues' part
  numbers.
- Years -> 1988 (15 rows, catalogue shows them still current): 4521
  RD-L532, 4519/4520 RD-L525 (both cage variants), 4529 RD-P500, 4523
  RD-M531 (year_to only, no year_from ever set), 2527 FD-M350/M351 (year_to
  only), 6128 SL-S434, 6127 SL-MS55 (year_to only), 3952 PD-T100, 3523
  FH-1050, 2218 MF-6208, 3520 CB-E110, 1004 BR-L490, 448 BL-AT50, 7154
  CN-UG20.
- Years corrected, year_from moved earlier (3 rows, DB claimed a start
  date *after* this catalogue's Jan 1988 date, which can't be right): 1809
  FC-MT60 (was 1989), 3971 PD-7401 (was 1990), 417 BL-6402 (was 1992).
- Added (51 rows, all 1988-1988, source_ref -> this catalogue's
  data_source row): RD-M450, RD-M350 (Rear Derailleurs); FD-A450, FD-M450
  (Front Derailleurs); SL-M450, SL-M350, SL-S441, SL-MS41, SL-MT36,
  SL-MT34, SL-AT50, SL-3S60, SL-P500 (Shifters); FC-M350 (Cranksets);
  BB-7600, BB-M450 (Bottom Brackets); PD-M731, PD-M450, PD-M350, PD-MX20,
  PD-E100 (Pedals); FH-MT60, HB-M450, FH-M450, SG-3C30, FH-7400-6/7,
  HB-7400-F (Hubs); MF-Z012, SS-7600 (Freewheels); BR-A450, BR-M450,
  BR-M451, BR-M350, BR-L570 (Brakes); BL-5002, BL-6400, BL-1052, BL-A450,
  BL-A453, BL-M450, BL-M350, BL-L330, BL-L331, BL-Z325, BL-Z326 (Brake
  Levers); HP-M730, HP-MT60, HP-M450, HP-M350 (Headsets); CN-7400, CN-6208
  (Chains).
- BR-L570 added rather than left unrepresented: DB had BR-L490 (49-type)
  but no 57-type companion, and the catalogue pairs them the same way
  BR-1050's 39-49/47-57 rows are already split in the DB, so the missing
  half was inserted rather than treated as covered by BR-L490 alone.
- FH-7400-6/7 / HB-7400-F deliberately NOT merged into the existing bare
  `Shimano FH-7400, Dura-Ace 7400 (freewheel)` row (id 3560, year 1980-1980,
  no weight/detail — the same "bogus single year, no real data" shape as
  the bare-brand exact-match bug fixed 2026-09-29 in the bike-spec
  generator). That row can't be confidently identified as the same
  sub-revision as this catalogue's plain FH-7400/HB-7400 (the DB's other
  7400-family rows are FH-7402/HB-7402 "Uniglide Only" 1985 and
  FH-7403/HB-7400 "Hyperglide Rear" 1991-96 — different numbers,
  different mechanism). Inserted fresh with the catalogue's own weights
  instead of guessing a merge; id 3560 left untouched.
- Not inserted (no component_category, out of scope): SQ-M730 (seat post
  quick-release) and DF-M730 (chain deflector) — accessory items with no
  matching category, same as fork ends/tools/cables/brazed-on parts.

## Maillard cycle fittings catalogue (Maillard_Cycle_fittings_catalogue.pdf, 34 pages, scan, no text layer)

- No printed date anywhere in the catalogue itself. Only soft internal
  clue: the Maillard 700 racing freewheel page lists its pro-team users
  (Peugeot, Mercier, Raleigh, Gitane, Lejeune, Flandria, Merckx), which
  reads mid-1970s-shaped. Initially inserted every new row with
  year_from/year_to NULL rather than guess off the sponsor list.
- Updated 2026-09-30: user found the same document hosted online
  identified as "Maillard 1978" (external identification, not a printed
  colophon in the scan — the PDF itself still has no date on any page).
  Consistent with the sponsor-list era clue above. Set year_from=year_to
  =1978 on all 29 rows that were NULL (guarded on that condition, so it
  only touched this catalogue's own inserts); data_source.label updated
  to note the year and that it's externally sourced, not printed.
- Also contains 5 pages (24-28) of LAM (H. Lamarque) brakes and brake
  levers — same Incheville, France address as Maillard, bundled as a
  sister-brand section, not a Maillard product. Pages 33-34 are not
  catalogue content at all: an unbranded technical line-drawing and a
  modern "IceniCAM Information Service" archive cover page from whoever
  scanned it; excluded.
- Checked whether this catalogue could finally identify the bare
  `Maillard` freewheel placeholder row (id 2110, no years, linked to 15
  1979 Peugeot bikes — the same "bare brand, no model" shape flagged as a
  latent bug risk in the bike-spec generator work). It can't: none of the
  bikes' tooth-count combos (`14-15-17-19-21-24` etc.) exactly match any
  combo table the catalogue prints for Atom or Normandy, and the Maillard
  700 racing freewheel explicitly supports "all combinations", so it can't
  be ruled in or out by ratio alone. Left id 2110 and its 15 links
  untouched rather than guess a redirect.
- Brakes (LAM): all three catalogue models (49-72, 59-77, 66-86mm reach)
  already exist in the DB under the exact same names — clean confirmation,
  no changes.
- Most Maillard hub lines already present (Atom, Normandy, Normandy
  Sport, Normandy Luxe Compétition x2 flange sizes, Maillard 700 x2
  flange sizes, drum brake) — no changes.
- Added (29 rows, all NULL years, source_ref -> this catalogue's
  data_source row):
  - Freewheels: Maillard Atom, Atom Luxe, Atom Inter, T.B.W. (all single-
    speed models missing entirely — DB only had 700/Normandy/Compact/
    Sprint/Helicomatic named rows, no Atom); Atom (3-speed), Atom
    (4-speed), Atom (5-speed) (split by speed to match the DB's existing
    Maillard 700 convention of one row per speed count); Normandy
    (5-speed, sealed bearings) (a real feature - chain-guard + sealed
    bearings - none of the 3 existing Normandy rows, which distinguish by
    lettering position, capture).
  - Hubs: Maillard GC4 and Atom Junior (juvenile hubs, nothing juvenile
    existed for Maillard at all); Atom Sport (small flange QR - only the
    Normandy Sport large-flange QR existed).
  - Pedals: Atom 63, Atom 2 BIS, Atom 440, Atom 600 Sport (none of the
    existing Maillard 700 / ATOM CXC rows match these by name or feature).
  - Bottom Brackets: Maillard Atom (no Maillard row existed in this
    category at all).
  - Brake Levers (LAM): 13 numbered ref variants (1R, 1C, 1 bis R, 1 bis
    C, 2R, 2C, 4R, 4C, 7R, 8R, 8C, 10C, 11C - light alloy). None of the 4
    existing generic LAM lever rows ("LAM Course", "LAM Competition", "LAM
    / Guidonnet", "LAM (drilled lever, cable adjuster)") use these ref
    codes, and none could be confidently mapped to a specific one, so all
    4 were left as-is rather than guess-merged.
- Left out of scope (no component_category): freewheel removal tools,
  Atom quick-release skewer hardware, fasteners/cones/axles/washers within
  every exploded diagram.

## Le Cycle magazine no. 58 — Maillard 700 freewheel advertisement (single page, via forum.tontonvelo.com attachment)

- One page, not a manufacturer catalogue: a Maillard ad for its three
  700-series freewheels (Course, Sprint, Compact), each with a tooth-range/
  speed-count table and (Course only) a small parts table. Dated 1980 per
  user identification, not printed on the page.
- All three models already existed from the main Maillard catalogue
  ingestion above; this page only adds date evidence, no new rows.
- Years corrected, year_from moved earlier (ad is dated earlier than what
  the DB claimed): 2113 "700 Course (5 speed)" 1984 -> 1980; 2114 "700
  Course (6 speed)" 1982 -> 1980. year_to left alone on both (later
  "still current" evidence from another source, not contradicted by an
  earlier ad).
- Years set (previously bare/undated, this ad is the only evidence so
  year_from = year_to = 1980): 2120 "Maillard Sprint"; 2112 "Maillard 700
  Compact".
- Left alone: 2111 "Compact Super" and 2124 "Compact Super (7 speed)"
  already dated 1980 - distinct SKUs from the ad's plain "700 Compact",
  not the same model despite the matching year.

## Simplex "New Generation" & Selematic brochure (6 pages, 1982)

- Small single-product-line brochure (not a full-line catalog): the
  Selematic pressure gear-changer plus the "new generation" SJ/SLJ
  derailleurs and SXP/SLJ shifters. Printed 09-1982 per the back-cover
  imprint. Scan, no text layer.
- Rear derailleurs: S061 T/P, SX610 T/P, SX610 GT/P, SLJ6600 T/SP, SLJ6600
  GT/SP already/partly in the DB.
  - 4654 "SLJ6600 GT (long cage)": year_to 1980 -> 1982 (catalog postdates
    it; weight matches exactly, 208g both).
  - 4630 "SX610 T (version 1)": had no weight, catalog gives 311g -
    appended.
  - 4628 "SX610 GT (version 1)", 4655 "SLJ6600 T (version 1)": years
    already compatible (1982 within range); left alone (4655's catalog
    weight, 195g, differs from the DB's 204g by a small margin - ordinary
    measurement variance on a hand-weighed vintage part, not treated as a
    different SKU).
  - New: S061 T/P (7262) - no match anywhere in the DB. 287g, capacity
    30/30 teeth, T/SP fork-end fitting. Single-catalog attestation,
    year_from = year_to = 1982.
- Front derailleurs: SJ A222/A223 already in the DB but dated 1984-1985;
  this 1982 brochure predates that.
  - 2575 "SJ A222", 2576 "SJ A223 (triple)": year_from 1984 -> 1982.
    Catalog also carries fitting/capacity detail (Ø28/28.6mm down tube,
    brazed tunnel 4123, 14/24-tooth capacity) the DB description lacked -
    appended. Catalog's weights (108g/119g) differ from the DB's 126g
    spec on both - noted in the appended text, not overwritten.
  - New: SLJ A422 (7263), SLJ A423 triple (7264) - no match at all in the
    DB (a separate SLJ-series-compatible SKU from SJ A222/223, identical
    weight/capacity/fitting). Single-catalog attestation, year_from =
    year_to = 1982.
- Shifters (SXP 4506, SLJ 5057, SXP 4557/4558, SXP 4555/4556, SXP L
  4543/4542, SXP 4541/4540), resolved on a follow-up pass: only one had a
  confident match - SLJ 5057's 88g is exact against `Simplex SLJ (4th
  type, black anodized)` (6240, also 88g), both retro-friction down-tube
  levers, so appended the part-number note to that row's description
  rather than retitling. The other 5 had no weight in the catalog and
  outnumber the DB's 4 unnumbered SXP "type" buckets, so inserted as new,
  distinctly-specced rows instead of forcing an uncertain match: SXP 4506
  (7265), SXP 4557/4558 (7266), SXP 4555/4556 (7267), SXP L 4543/4542
  (7268), SXP 4541/4540 (7269) - all `source_ref` 51, year_from = year_to
  = 1982.

## Le Cyclo instruction/price leaflet (2 pages, c.1927, via disraeligears.co.uk)

- French "Changement de Vitesse" owner's/dealer instruction sheet with
  pricing, not a full catalog - but it's the earliest date evidence for
  any Cyclo derailleur/shifter/freewheel row in the DB (every existing one
  was completely undated).
- Describes Le Cyclo's 2- and 3-speed boxed sets, distinguished only by
  mounting support (A/B/C) and tension-pulley type (toothed vs Rosa
  flanged), never by any of the DB's existing named sub-lines (Route,
  Sport, Randonneur - also all bare/undated). Couldn't confidently map the
  mechanism onto any of those, so it got its own plain row instead of a
  guess.
- Dated 1927 and enriched: 6008 "Cyclo (double cable)" (Shifters) - the
  whole leaflet describes this exact double-cable, helical-drive control
  system; 2077 "Cyclo (2 speed)" (Freewheels) - "grand pignon 472" per the
  leaflet.
- New: 7270 "Cyclo (3 speed)" (Freewheels) - "grand pignon 347"; no
  existing row covered a 3-speed Cyclo freewheel at all. 7271 "Cyclo
  (double-cable system, 1927 leaflet)" (Rear Derailleurs) - the mechanism
  itself, with the leaflet's full pricing (Support A 87fr, Course/Rosa
  flanged Support C 95fr, Support B 110fr, standalone flanged tension
  pulley 20fr).
- Gotcha hit here: `component_detail.description` is `varchar(255)` and a
  `CONCAT`/literal insert past that silently truncates mid-word (MySQL's
  default SQL mode doesn't error on this) - 7271's first insert lost the
  Support B price and the tension-pulley accessory entirely. Caught by
  checking `LENGTH(description)` after loading; fixed by shortening the
  text, not by widening the column. Worth checking length on any
  catalog-enrichment description that's pushing close to 255 chars.

## Le Cyclo "Changement de Vitesse" catalog (12 pages, c.1932, via disraeligears.co.uk)

- Dated by internal evidence: "Créé en Avril 1924" plus race results
  through the 1931 Tour de France/Paris-Brest-Paris.
- Same double-cable helical-drive mechanism as the 1927 leaflet above, now
  2/3/4-speed plus a new **Cyclo-Tank** variant (demountable rear hub) not
  present in 1927. Every speed count comes in a toothed-tension-pulley or
  flanged-("Rosa")-pulley variant. Pricing is markedly lower than 1927
  (e.g. 2-speed Support A: 87fr -> 64fr) - read as period deflation, not a
  product regression.
- Dated and enriched: 4194 "Cyclo Route (steel pulleys)" and 4195 "Cyclo
  Route (with Rosa flanged pulley)" (Rear Derailleurs, both bare/undated
  before this) with this catalog's full speed-count pricing - the
  toothed/flanged split described here matches those two rows' titles
  closely enough to treat as first attestation, even though the leaflet
  itself never uses the word "Route". 3641 "Tank (earlier version)" (Hubs,
  brand `Tank`, separate from Cyclo) similarly dated/enriched with the
  Cyclo-Tank hub's spec (left-hand thread for drum brake, P/M/G tooth
  ranges) - picked over 3642 "(later version)" as the better fit for a
  1932-era hub, not on hard evidence either way.
- New: 7272 "Cyclo Rosa (1932 leaflet, twin-cable)" (Front Derailleurs) -
  the DB's existing `Cyclo Rosa (...)` Front Derailleur rows are dated
  1950 and described as single-lever "direct lever" designs; this
  catalog's twin-cable, lever-actuated mechanism (numbered parts 501-538)
  looks like an earlier, different generation, not the same part to
  redate. 7273 "Cyclo (1 or 2 threadings)", 7274 "Cyclo Rosa
  (extra-light)", 7275 "Cyclo (tandem)" (all Hubs) - no Cyclo-brand hub
  rows existed at all before this.
- Left unresolved, out of scope for this pass: the freewheel tooth-range
  tables (pages 3-5, for the 2/3/4-speed systems) could further enrich
  2077 "Cyclo (2 speed)", 2078 "Cyclo (4 speed)", and 7270 "Cyclo (3
  speed)" (the last from the 1927 leaflet) with precise P/M/G ranges
  beyond the 1927 leaflet's vague "472 or 347" reference - not done here,
  a future pass could pick it up.

## Simplex "Derailleurs" fold-out poster catalog (16 panels, January 1981, via disraeligears.co.uk)

- Dated precisely by the printer's credit line on the last panel:
  "Printed in France - Imp. Gougenheim - Lyon - January 1981". Spec-sheet
  style catalog (weight/housing material/capacity/fitting tables per
  model ref) across Rear/Front Derailleurs, Shifters, Seat Posts and a
  chainring line - 45 rows touched in total (9 Rear Derailleurs, 12 Front
  Derailleurs, 20 Shifters, 2 Seat Posts, 2 Chainrings).
- Convention followed throughout: P vs SP (standard fork end vs
  with-hanger) and L/R lever pairs are folded into one row's description,
  matching how existing sibling rows already did it (e.g. 4658 "Simplex
  SX110 T" already notes both its fork-end weights in one row) - not
  split into separate rows. A genuinely different cage/capacity (GT =
  long cage) gets its own row, matching existing SX410 T vs SX410 GT
  (long cage).
- Years extended: 4657 "SX100 T" and 4658 "SX110 T" (year_to 1980->1981),
  4600 "LJ1000 T" (year_to 1970->1981, a big jump but the catalog
  attests the same identifiable part still current), 5901 "SX 1500" seat
  post (year_to 1980->1981).
- Enriched (catalog detail folded in even though years already agreed):
  4614 "SJ810 GT" (P/SP weight split), 4646 "LJ1000 CP", 4647 "S001 T,
  Prestige (version 2)" (its missing with-hanger weight), and all 6
  matched Front Derailleur rows (2585 SA02, 2586 SA12, 2577 SX A22, 2580
  SX A52, 2573 SJ A102, 2574 SJ A103) - the DB's bare descriptions lacked
  housing material, fixing-clip material, and chainring compatibility
  that the catalog gives for every model.
- New rows - Rear Derailleurs: "SX810 T" (no `SX810` row existed at all),
  "SLJ6000 GT (long cage)" (only the 26t plain `SLJ6000` existed), "LJ4000
  T (version 2)" (the `LJ4000 CP` line has v1/v2/v3 but `LJ4000 T` only
  had v3 - a gap this catalog's 1981 attestation fills, dated to the same
  1978-1984 window as CP's v2). Front Derailleurs: "SX A23"/"SX A53"
  (triple versions of A22/A52), and the entire **SLJ A** series
  (SLJ A502/503/522/523) - none existed. Seat Posts: "SLJ4164" - only a
  **Spidel**-branded `Spidel SLJ 4164, Serie Sport Ref 01` existed
  (same OEM-rebadge pattern as other Spidel/Simplex rows), no plain
  Simplex-brand row. Chainrings: "DP210"/"DP211" (steel/dural 3-arm
  detachable double chainwheel, 45-53t) - nothing like it existed.
  Shifters: **all 20** model refs (Série S/SP/SJ/LJ/SLJ down-tube and
  braze-on-boss levers, SXP/SXP-L stem levers, SLJ2615 handlebar control
  lever) - none matched any existing DB row, including the DB's bare
  "type"-generation Shifters placeholders, which are mechanically
  stem-mount rather than this catalog's down-tube clip/braze-on series.
- One case deliberately left as new inserts rather than reinterpreting an
  existing row: 4651 "SLJ5500 (version 1)" is dated 1979-1984 at 219g,
  but this catalog's three SLJ5500 variants (CP/SP 183g, GT/SP 201g,
  T/SP 192g) are all 20-35g lighter - too big a gap for measurement
  noise, so treated as a separate lighter sub-line rather than asserting
  they're the same casting as "version 1". **Correction (1984 pass):**
  those three inserts never actually landed in the DB; they were added
  by the 1984 pass below (7309-7311, dated 1981-1984).
- Panel 16 is a separate 1928-1935 historical facsimile insert bundled
  into this 1981 catalog (race palmarès by year, plus original "Le
  Simplex Type Route"/"Super-Simplex" pricing) - handled as its own pass,
  not part of the above. Scan quality is poor (the site's own caption:
  "poorly printed and of limited utility"), so only two clearly legible
  matches were actioned: 4550 "Simplex (like Cyclo; chainstay mount)" and
  4551 "(...; hanger mount)" (both bare, 1928-1950) enriched with "Le
  Simplex Type Route"'s 1928-35 pricing (87/110/120fr for 2/3/4-speed)
  and its three fixation options; 4558 "Simplex Selection Standard (Super
  Simplex Competition)" (bare, dated exactly 1934-1935) enriched with the
  "Super-Simplex"'s separated parallelogram-arm/tensioner mechanism.
  "Le Simplex Type 38" and "Le Simplex Type Tour de France 34" have no
  DB match and the surrounding print was too degraded to transcribe
  confidently - left unresolved rather than guessed.

## Simplex "Loisirs... détente" catalogue (20 pages, 1984)

- `data_source` 55. Source: `~/Downloads/Simplex/scan0001-0020.jpg`
  (printed page N = scan(N-1) for pages 6-19, e.g. page 7 = scan0006). Dated by the back-cover
  imprint "Printed in France 1?/84" (month digit cut off at the scan
  edge) and the president's foreword ("By 1984..."). Bilingual FR/EN
  spec-sheet catalogue organised by range: Bronze, Silver
  Sport/Touring/"Mountain Bike", Gold Racing/Touring, plus QR/seat
  posts, braze-ons and dropouts (out of scope). The contents list a
  page 20 (BMX wheels) that is not in the scan.
- New vs 1981/82: the first Simplex MTB group (SX 630 GT/SPMB, SJ A103
  MB, MB 2600/2601 thumb shifters), SX 1 T/P, SX A32/A33, SX 630 T/SP,
  Delrin SX 88xx / S 344x / SP 246x levers, Zamac SJ 62xx/63xx levers,
  SLJ 5068/5069, SLJ 6164 seat post (successor to 1981's SLJ4164).
  Dropped: LJ1000, SX100/110, SLJ6000 GT, SA02/12, SX A22/23/52/53, SLJ
  A502/503/423, most SXP stem levers, Selematic. Their DB year_to values
  were already at or below 1983, so nothing needed capping.
- Years extended to 1984: 4655 SLJ6600 T (v1), 4654 SLJ6600 GT, 7263 SLJ
  A422, 7304 SLJ2615, 5901 SX 1500. 5904 SLJ 6164 was undated, now
  1984-1984.
- Enriched only (capacity/weight/fitting appended, years unchanged):
  4614, 4620, 4621, 4631, 4629, 4632, 4633, 4603, 2578, 2575, 2576.
  Catalogue part numbers appended to unnumbered rows: 6209 "Zytel levers,
  square finger pads" = S 3448 (71g exact), 6212 "SJ (2nd type)" = SJ 6311
  (105g), 6231 "MB Silver Range" = MB 2600/2601 (180g = 2x90g), 6239 "SLJ
  (4th type)" = SLJ 5057 (the 1984 photo shows a silver lever, not 6240's
  black anodized one, so 6240's years were left alone).
- Left ambiguous: SX 610 GT/P at 332g matches 4628 v1's weight but
  4629 v2's years. Noted on 4629 only.
- New (16 rows, 7308-7323): SX1 T; SLJ5500 CP / T / GT (version 1)
  (1981-1984, see the 1981 correction above; GT is "version 1" because
  4652 is the 1985-90 "version 2"); SX A33; SJ A103 MB; shifters S3445,
  SP2466, SP2468, SX8811, SX8820 (+8821 LH), SJ6320 (+6321 LH), SJ6211,
  SJ6220 (+6221 LH), SXP 4503, SLJ5068 (+5069 LH).
- Retitled: 4616 "SO61 T" -> "S061 T" (letter-O typo); 4655 "SLJ6600 T
  (version 1)" -> "SLJ6600 T" (there was no version 2 row); 4620 "SX410
  GT (long cage)" -> "SX410 GT"; 4654 "SLJ6600 GT (long cage)" ->
  "SLJ6600 GT"; 7277 "SLJ6000 GT (long cage)" (1981 pass) -> "SLJ6000
  GT", search_text updated too (the 1981 insert had baked the suffix
  into it).
- Merged/deleted (none had bike_spec links or overrides):
  - 7262 "S061 T/P" (1982 pass, `cccbde79-bd11-11f1-a2df-02fea3763e8d`)
    -> 4616. The 1982 pass missed the match because of the SO61 typo.
    Both rows were 287g.
  - 7276 "SX810 T" (1981 pass, `8acf1f80-bd18-11f1-a2df-02fea3763e8d`)
    -> 4617 "SX 810 T" (same 266g T/SP). 4617 also took its SX group.
  - 2588 "Super LJ A 522" (velobase,
    `3475EE29-C9B1-4A25-BC95-9BF6B7434423`) -> 7283 "SLJ A522", same
    114g. 7283 is now 1980-1984 in the Super LJ group.
  - 2593 "Super LJ 523 (triple)" (`6897DE83-CFB2-42F8-81B6-BD286984FF44`)
    and 2594 "Super LJ 523 (triple; second version)"
    (`D286DD35-9F7C-4CDA-8114-32536EED7089`), both bare velobase rows
    dated 1980, -> 7284 "SLJ A523", now 1980-1984. Nothing distinguished
    the "second version".
  - 7265 "SXP 4506" (1982 pass, `1d2bc191-bd12-11f1-a2df-02fea3763e8d`,
    89g) -> 6216 "SXP (2nd type; stem mount)", whose 86g matches the 1984
    catalogue exactly.
  - 6214 "Simplex (Delrin)" (velobase, bare, 1984-1985,
    `2328F219-60B4-40BD-BF62-038E49A9369A`) -> 7317 "SX8811", on a
    follow-up pass at the user's call (it could equally have been SP
    2468). 7317 took its year_to, now 1984-1985.
  - 4628 "SX610 GT (version 1)" (velobase, 1981-1983, 332g,
    `82D7087F-50FC-424E-B57B-79B9947EFFA0`) -> 4629 "SX610 GT (version
    2)", on a follow-up pass at the user's call: the 1984 catalogue's
    332g GT/P matched v1's weight but v2's years, so the split wasn't
    supported. 4629 is now 1981-1985 and retitled "Simplex SX610 GT"
    (dropped "(version 2)").
  - 4630 "SX610 T (version 1)" (velobase, 1981-1983, 311g; source_id
    not captured before the delete, so it's recoverable only from an RDS
    snapshot or a re-crawl) -> 4631, retitled "Simplex SX610 T", now
    1981-1985. Merged at the user's call despite the weight evidence
    for two versions (1982 brochure 311g = v1, 1984 catalogue 275g = v2);
    both weights are kept in 4631's description. If a later catalogue
    makes the v1/v2 distinction matter, split again on weight.
- Left unresolved: BMX wheels page missing from the scan.

## Cross-catalog notes

- The Nuovo Record 1020/A rows are dated per version in the DB (v3 1970-81,
  v4 1982-84, v5 1985-87); the bike generator's year-ranged override follows
  those. Keep them in step if either changes.
- Part numbers are reused across eras (1013/1 is a Gran Sport lever in 1953
  and a Record lever in 1967; 1040 is Gran Sport pista in 1960 and "Record
  Pista" later). Diff by number, then read the DB title before deciding.
