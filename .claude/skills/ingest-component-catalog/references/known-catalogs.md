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

## Shimano "'72 Bicycle Parts" — printed 09.1972 (disraeligears.co.uk, 24 images)

- `data_source` 60. Source:
  https://www.disraeligears.co.uk/site/shimano_bicycle_parts_-_72.html
  (images `00_main_images/shimano_bicycle_parts_-_72_*_main_image.jpg`:
  front_cover, contents, page_1..page_21, rear_cover; printed page N =
  page_N). Dated by the rear-cover imprint "Printed in Japan '72.9". An
  English export catalogue (Shimano American Corp. NY, Shimano Europa
  Düsseldorf). Now the earliest Shimano catalogue in the log.
- **Pre-renumbering codes.** 1972 uses D/E/L/F/H/T/A/C/B/M + 3 digits
  (D600 Titlist, L221 Alumi, F200 freewheel, H710 hub); by Dec 1974 these
  were DB-/DE-/DD-/LB-/FC-/HC-... Kept as separate rows per number,
  matching the DB's existing D-600 Titlist (4437) vs DB-200 (7100). Where
  the weight is identical, the new row notes the likely 1975 successor:
  D700 -> DB-300, D710 -> DB-310, D210 -> DD-100, D220 -> DD-200 Lark
  SPO, D160 -> DD-500 Sky Lark. Eagle weights don't match the 1975 DE-
  rows (380/400 vs 350/380g), so they have no successor note.
  "Without adaptor" (claw-less) versions D501/511/601/611/701/711 are
  folded into the parent row.
- **Dura-Ace in Sept 1972 is only the crankset and hanger axle** (page
  16). Brakes are plain B110/B120 marked "Tourney", and levers are plain
  M110-M220. This argues against the velobase 1970 dates on Dura-Ace
  brake/shifter/hub/headset rows (987, 988, 6161, 3553, 1813-1815,
  3095/3096), but absence is weak evidence and velobase seems to use
  1970 as a decade placeholder, so they were left for a dedicated
  Dura-Ace pass.
- year_from moved down to 1972: 4498 Crane D-501, 4499 Crane GS D-510,
  2461 Thunder Bird GTO, 1816 GA-200 Dura-Ace First Gen, 7144 GB-100.
  year_to moved up to 1972: 4437 D-600 Titlist, 4438 D-610 Titlist-GS,
  4444 Eagle-SS (= D310), 6163 L-600 bar-end, 6120/6124 Super Shifter.
  6181 "L-422, Light Action" (undated) -> 1972-1972 and noted as the
  catalogue's L422 G.T. Console (5D); title kept. 4439 Lark-W enriched
  (D280, L120 W-Grip).
- Retitled: 6124/6120, two same-titled "Super Shifter" rows (1970, 135g
  and 160g), became "Super Shifter (single)" and "(twin)" with the S
  L251/253/255/257 and W L252/254/256/258 numbers. The weight-to-S/W
  mapping is inferred, not printed.
- New (43 rows, 7368-7410, all 1972-1972): rears D700, D710, D330,
  D320, D340, D210, D220, D160; fronts E302 Titlist, E101 Thunder Bird;
  shifters as one row per family with all mounts (L221-L228 Alumi,
  L241-L248 Long, L271-L278 Flat, L261-L268 Finger Tip, L211-L218 Lever,
  L231-L238 Short Lever, L905-L908 Round Stem, L535-L538 Short Stem DX)
  plus L313, L323, L411, L120 and the 3-speed hub controls L373, L363,
  L461, L110, L150, L472; freewheels F916-F924 single and F200-F512
  5-speed; hubs H710/H810, H720/H820, H700/H800, H500/H600, H300/H400;
  geared hubs T100, T300, A600 Auto-2, C100 coaster (Geared Hubs, as the
  DB files coaster hubs 2709/7143); brakes B110/B120 Tourney, B700 disc;
  brake levers M110 hooded, M210 dual extension.
- Merged/deleted: 131 "GB-100, Dura-Ace" (velobase, 1970-1970, 269 g
  avg, `E18061DD-E02A-4600-8FBF-DF2FE187A45A`) -> 7144 GB-100 Dura-Ace
  BB set, now 1972-1976 (the velobase 1970 start was dropped in favour
  of the catalogue's 1972).
- Left alone: 4440 "DB-600 Titlist" (230g; no DB-600 exists in either
  catalogue and the weight matches neither D600 nor DB-200, so the title
  looks wrong but isn't fixable from this source); generic Tourney brake
  rows 1009/1015. Out of scope: spoke protectors P100/P310/P410, spokes,
  tools X101-X702, outer bands/clips (page 19), cables W910-W922.

## Shimano "'73 Bicycle Parts" — printed 12.1972 (disraeligears.co.uk, 28 images)

- `data_source` 61. Source:
  https://www.disraeligears.co.uk/site/shimano_bicycle_parts_-_73.html
  (front_cover, contents, page_1..page_25, rear_cover; printed page N =
  page_N). Rear cover "Printed in Japan '72.12"; cover says '73, i.e.
  the 1973 model-year edition, three months after the Sept 1972 one.
- **First Dura-Ace range** (pages 2-3): D-501 Crane 225g, E-304 Titlist
  front, F-100 freewheel (new; 13-21 350g / 14-22 375g), B-210 side-pull
  caliper, M-140 hooded lever, H-731/H-831 large-flange hubs (260/360g),
  L-284 lever 75g, L-600 bar-end 80g, G-210/G-220 cranks 600g, G-520 BB
  300g, N-101 fork ends (out of scope). Sept 1972 had Dura-Ace only as a
  crankset, so first-gen Dura-Ace dates from model year 1973.
- Otherwise the Sept 1972 range is carried over unchanged (H300/H400
  renamed "Steel Rear Hub"; consoles now pictured single). New:
  B-220/B-230 side-pull (CS-79/CS-72), B900 oil disc, M-410 Popular and
  M-310 Tourist levers, P320/P420 spoke protectors (out of scope);
  B-110/B-120 now carry CC-65/CC-75 type names.
- year_to 1972 -> 1973: all 43 Sept 1972 rows (7368-7410) and 4437,
  4438, 4444, 6163, 6181, 6120, 6124. 7407 B110/B120 described with
  CC-65/CC-75 and "renumbered BB-100 by 1975"; 7409/7410 M110/M210 note
  likely MB-100/MB-110 successors; 7376 E302 notes the Dura-Ace E-304.
- Dura-Ace matched and rewritten: 4498 Crane (D-501 225g vs plain D500
  255g); 989 B-210/BA-100; 433 M-140/MA-100; 6162 L-284 (year_to 1973
  -> 1976, as its own Dec 1974 LA-100 note implied). Retitled (old
  titles): 2219 "FA-100, Dura-Ace" -> "F-100 / FA-100, Dura-Ace",
  year_from 1970 -> 1973 ("new racing model" here, absent Sept 1972);
  3554 "Dura-Ace High Flange First Gen" -> "H-731 / H-831 (HA-200),
  Dura-Ace large flange"; 1816 "GA-200, Dura-Ace First Gen" -> "G-210 /
  G-220 (GA-200), Dura-Ace"; 7144 "GB-100, Dura-Ace bottom bracket set"
  -> "G-520 / GB-100, Dura-Ace bottom bracket set".
- Redated from catalogue absence plus the Dec 1974 "Black Series": the
  Dura-Ace (Black) rows 988, 6161, 3553, 1813, 1814 (velobase 1970) and
  432, 2507, 3097 (1973-76) -> 1975-1976. 2220 FA-110 6-speed year_from
  1970 -> 1975 (no 6-speed in either 1972-era catalogue). **Superseded:**
  the Dec 1972 English edition (next section) shows 6-speed Dura-Ace
  freewheels, so 2220 was moved to 1973.
- Override changed: `'shimano dura ace'` brakes `to: 1983` pointed at 987
  "Dura-Ace (center-pull)"; both 1972-era catalogues show the first
  Dura-Ace brake is the B-210 side-pull and every Shimano centre-pull is
  Tourney, so it now points at 989. No bike_spec was linked to 987 at the
  time. 987 itself (velobase, 1970, 135g) was left; a Dura-Ace-badged
  centre-pull may exist outside these catalogues.
- New (7411-7414, 1973-1973): B-220/B-230 side-pull, B900 oil disc,
  M-410 Popular, M-310 Tourist, each noting its likely 1975 successor
  (BB-200, BC-200, MD-100, MC-100).
- Left: 1815 GA-200 "(drilled rings)" and 1289 Dura-Ace road chainring
  (velobase 1970) and 1288 chainring guard (undated); no catalogue
  identifies them.

## Shimano "Bicycle Parts", English Edition — printed 12.1972 (disraeligears.co.uk, 40 images)

- `data_source` 62. Source:
  https://www.disraeligears.co.uk/site/shimano_bicycle_parts_december_1972.html
  (front_cover, inside_front_cover, page_01..page_36, inside_rear_cover,
  rear_cover; printed page N = page_NN). Imprint "'72.12 M63". Same
  month as the "'73 Bicycle Parts" catalogue above but a separate
  premium dealer book: Road/Track/Touring "ensemble" spreads, then
  every upper-range part (Dura-Ace, Crane, Titlist, Tourney) with specs,
  sub-part numbers and exploded drawings. Low-res scans (446px) but
  legible.
- **D500/D501 resolved:** "D-501 ... 225g ... With Adapter: Model
  D-500", so D500 (with adapter) is 255g and D501 (without) is 225g,
  matching the 1975 DB-100's 225g. 4498's description was corrected (the
  '73 pass had called the difference "plain vs Dura-Ace").
- **Correction:** 6-speed Dura-Ace freewheels 13-18 / 13-23 are listed,
  so 2220 FA-110's year_from went back from 1975 to 1973.
- First Dura-Ace track parts. Redated from velobase 1970 to 1973-1973:
  3555 (retitled from "H-741/H-841, Dura-Ace Track" to "H-741 / H-841,
  Dura-Ace track large flange", 240/290g, likely HA-300 by 1975), 3095
  K-901 road head parts (likely UA-100), 3096 K-902 track (likely
  UA-200). 1812 GA-100 track chainwheel year_from 1974 -> 1973 (44-55T,
  1/8in, 107mm spindle).
- Retitled: 3556 "Dura-Ace Low Flange First Gen" -> "HS-731 / HS-831
  (HA-100), Dura-Ace small flange" (220/290g); 6163 "L600, Bar-End
  Control" -> "L600, Finger-Tip Bar-End Control" (the book's name).
- Weights added: 989 B-210 200g each; 7407 B110/B120 per-wheel weights;
  7409 M110 200g pair; 7410 M210 320g pair; 7398 H710/H810 270/360g;
  7399 H720/H820 230/350g; 2219 F-100 15-24 option. Confirmed with no
  change: 4499, 4437, 4438, 7376, 1816, 3554, 433, 6162, 6124/6120,
  7381.
- New (7415-7417, 1973-1973): Titlist front chain wheel (no code,
  39-48/48-55T, 165mm), HS-741/HS-841 Dura-Ace track small flange
  (200/250g), FR-912 to FR-916 chromoly track sprockets (likely FA-200
  by 1975).
- Out of scope: fork ends N-101 SF / N-102 LF / N-103 TF, spoke
  protectors P-100 to P-420, cable parts K-511 to K-541, casing and
  cable W-101 to W-642, tools X-101/102/401/701/702, chain-line and
  gear tables. No deletes.

## Shimano "Bicycle Parts", English Edition reprint — printed 02.1973 (disraeligears.co.uk, 40 images)

- `data_source` 63. Source:
  https://www.disraeligears.co.uk/site/shimano_bicycle_parts_february_1973.html
  (images are named `shimano_bicycle_parts_-_1973_*`: front_cover,
  contents, page_1..page_36, inside_rear_cover, rear_cover). Imprint
  "'73.2 MKS". A reprint of the Dec 1972 English edition above, same
  36 pages, at higher resolution (1560px). This copy has handwritten
  prices on the Crane page.
- Changes vs Dec 1972: new **E-404 Dura-Ace front derailleur** (105g,
  585-series parts), so E-304 is now Titlist only; L-262/L-261 (1in)
  added to the Finger-Tip table; D-501 parts list adds a cable adjusting
  barrel and spring. Everything else identical (the FR-900 track lock
  ring, out of scope, is in both).
- Retitled: 2506 "EA-100, Dura-Ace (First Generation)" -> "E-404 /
  EA-100, Dura-Ace" (105g in both catalogues, the same part renumbered;
  years 1973-76 kept). 7376 E302 reworded: E304 shown in the Dec 1972
  Dura-Ace spread, Titlist only by Feb 1973. 7381 Finger Tip rewritten
  with clamp sizes. 2507 EA-100 (Black) left at 1975-76 (no black parts
  here either). No new rows, no deletes.
- Follow-up retitle: 3553 "Dura-Ace High Flange First Gen  (Black)"
  (double space) -> "HA-200, Dura-Ace large flange (Black)". It uses the
  1975 code only, since black parts first appear in Dec 1974. 620g pair
  measured kept.

## Shimano "Dura-Ace Light Alloy Bicycle Parts" brochure — printed 04.1973 (disraeligears.co.uk, 8 scans)

- `data_source` 64. Source:
  https://www.disraeligears.co.uk/site/shimano_dura-ace_light_alloy_bicycle_parts.html
  (`..._-_scan_N_main_image.jpg`, N = 1-8). Imprint "Printed in Japan.
  7304". The first Dura-Ace-only brochure, with its own typeface and
  boxed packaging. It prints the same specs as the Dec 1972 and Feb 1973
  English editions but **no model codes**: it lists retail **package
  numbers** instead (scan 8 table).
- **Package numbers are not model codes.** FC-/HB-/CB-/SL-/FW-/DR-/HP-
  are box numbers. They look like 1975 prefixes but don't match them
  (1975 hubs are HA-100/200, not HB-). They were added to descriptions
  as "box ..." so a listing that quotes the box still matches: SL-101
  -> 6162 L-284; SL-210 -> 6163 L600; DR-101/102 -> 4498/4499 Crane/GS;
  DR-601 -> 2506 E-404; FC-201 to 204 (39-52 / 45-54 x 165 / 170) ->
  1816; Pro Model FW-101/102/103 -> 2219, FW-601/602 -> 2220; Touring
  Model FW-201 to 208 -> 7397 F200-F512 (8 combinations, one-to-one);
  CB-101 brake set -> 989 + 433; HP-101 -> 3095 K-901.
- **6-speed Dura-Ace hubs:** HB-102 large flange and HB-202 small flange
  "for 6-speed", with no code, weight or spacing. Noted on 3554/3556
  rather than given their own rows.
- Retitled: 6162 "L-284 / SL-101 , Dura-Ace First Gen." -> "L-284,
  Dura-Ace". The velobase title had used the box number SL-101, and had
  a stray space. Follow-up: 6163 "L600, Finger-Tip Bar-End Control" ->
  "L-600, ..." (hyphenated as the Dec 1972 and Feb 1973 books print
  it), and year_from 1970 -> 1972 (the velobase 1970 start had no
  catalogue support; Sep 1972 is the first).
- Follow-up, Dura-Ace brake levers: 433 "M-140 / MA-100, Dura-Ace First
  Gen." -> "M-140 / MA-100, Dura-Ace"; 432 "Dura-Ace First Gen. (black)"
  -> "MA-100, Dura-Ace (Black)" (1975 code only, as 2507/3553; 209g
  measured kept). Merged/deleted: 431 "Dura-Ace First Gen with Extention
  Lever" (velobase, bare, 1973-1973,
  `7C251DB1-620A-4728-A586-1ABC56AC24FB`) -> 433. No catalogue
  (Sep 1972 to Dec 1974) lists a Dura-Ace extension lever. Every Dura-Ace
  lever is the plain hooded M-140/MA-100, and the extension levers
  (M-210/220, MB-110) are standard Shimano. No bike links.
- Follow-up, Dura-Ace headsets: one row per part with both codes, as for
  the other first-gen road parts. 3098 "UA-100, Dura-Ace First Gen." ->
  "K-901 / UA-100, Dura-Ace" (1973-78), merging 3095 "K-901, Dura-Ace"
  (velobase, `71276C9D-6049-47A8-A0C3-2B832B701794`, box HP-101 note
  carried over). 7126 "UA-200, Dura-Ace track headset" -> "K-902 /
  UA-200, Dura-Ace track", year_from 1975 -> 1973, merging 3096 "K-902,
  Dura-Ace" (velobase, `BB7C6CE8-5CBE-459E-9C7A-CEC2FC673322`). The
  track hubs 3555 H-741/841 and 7124 HA-300 stay separate because their
  catalogue rear weights differ (290 vs 300g); the headsets have no such
  evidence. No bike links or overrides.
- No track, Titlist or Tourney parts (Dura-Ace road only), so those rows
  are neither confirmed nor capped. No year changes, no new rows, no
  deletes. Several descriptions were condensed to fit the box numbers.

## Shimano "'74 Bicycle Parts" — printed 06.1974 (disraeligears.co.uk, 32 images)

- `data_source` 65. Source:
  https://www.disraeligears.co.uk/site/shimano_bicycle_parts_-_74.html
  (front_cover, inside_front_cover, page_1..page_29, rear_cover; printed
  page N = page_N). Rear cover "74. 06. SZK Printed in Japan". The annual
  successor to the '73 catalogue, same layout.
- **Eagle renumbered by Jun 1974:** D-350 Eagle 350g, D-360 SPO 350g,
  D-370 GS 380g, D-380 GPO 380g replace the 1972 D310/D320/D330/D340
  (380/370/400/400g). The new weights match the 1975 DE-100/200/110/210
  exactly, so DE- renumbers the 1974 codes. New rows 7418-7421, each
  noting its likely DE- successor; the 1972-code rows 4444 and 7370-7372
  end in 1973.
- Other renumbering: Click-Stick L313 -> L-311, Semi-Console L323 ->
  L-321, 3-speed L363 -> L-361 and L373 -> L-371 (new rows 7422, 7423,
  7425, 7426; old rows end 1973). New: L-345 CL-Lever (7424). Renamed
  but same parts: S.T.O./G.T.O. -> SPO/GPO (7374 Lark, 2461 Thunder
  Bird noted). Crane GS headline code is now D-511 (D-510 "with
  adaptor").
- year_to 1973 -> 1974 (39 rows): D600, D610, D700, D710, D210, D160,
  D220; E302/E304 (only E-304 listed now), E101; L-600, Almi, Finger
  Tip, Flat, Short Stem DX, both Super Shifter rows (top-tube L251/252
  no longer listed), L120, L461, L472, L110, L150; F200-F512,
  F916-F924; H710/810, H720/820, H700/800 (first weights, 210/330g),
  H300/H400 (only the H-400 steel rear hub, 450g); T100, T300, A600,
  C100; B110/B120 (180g / 185g each), B-220/B-230 (now branded Tourney,
  group 144), B700 and B900 (disc and hydraulic disc listed without
  codes); M110, M210, M-410, M-310. 1816 Dura-Ace crank gained 75S rings
  and 172.5/175mm by request.
- Last listed 1973 (not in Jun 1974): Long L241-248, Lever L211-218,
  Short Lever L231-238, Round Stem L905-908, L411, L422, H500/H600,
  Titlist crankset, and all track parts (H-741/841, HS-741/841, K-902,
  FR-91x).
- Redated: 2454 ED-100 Thunder Bird and 2455 ED-200 Thunder Bird GPO
  (velobase 1974) -> 1975-1975. Jun 1974 still prints E-101 / E-111, so
  the ED- codes date from Dec 1974. Kept separate per code, as D600 /
  DB-200.
- Merged/deleted (velobase duplicates of the 1975 lever rows, bare,
  dated 1970): 6121 "LB-100 'ALMI Lever' (Titlist, Tourney, Eagle,
  Lark)" (`F694CBB1-25E1-4837-92C6-863A4C48B5C6`) -> 7116 LB-100, Almi
  Lever; 6125 "LB-400 FingerTip" (`1677E254-2B19-4C98-8AFB-AEE895D64DE1`)
  -> 7118 LB-400, Finger-Tip. Survivors now note their 1972-74 codes
  (L-221-228 / L-261-268). No bike links.
- Out of scope: fork ends N-101/N-102, axle stopper 710 9004, spoke
  protectors P-100/310/320/410/420, cables W-series, outer bands, tools
  X-101 to X-702.

## Shimano "A Complete Line of Shimano" — printed 12.1974 (equusbicycle.com/bike/shimanocatalog75/, 20 spread PDFs)

- First Shimano catalogue ingested (the Sept 1972 one above was added later). The Bicycle Info Project page
  links each thumbnail to pdf/shimanocat7500NN.pdf (one spread each,
  4537x2936 JPEG inside, usable OCR layer); merged to shimano75.pdf in
  the scratchpad. Back cover imprint "74 12. KM. NP." (December 1974, the 1975 model-year catalogue). **Correction (2026-10-02):** this was first misread as "'75.12"; the disraeligears copy (https://www.disraeligears.co.uk/site/a_complete_line_of_shimano_1975.html) shows "74 12" clearly. Data_source 24 was relabelled and the 37 "Dec 1975" description notes were rewritten to "Dec 1974"; no years changed, since 1975 as model year still holds. 37 pages.
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
- Notes ("Dec 1974 catalogue"): codes, capacities and weights on 38
  existing rows. Guarded; longest 219.
- Left: 600 hub rows 3530/3531 keep their later HB-6110/6120 titles
  (catalogue codes HB-200/HB-100 in the note); NB/NC/ND/NF fork ends,
  KA/KB/KD bands and cable parts, PB spoke protectors, small parts and
  XA/XB tools have no category. Sky Lark and Lark SS/SPO are separate
  rows since the catalogue separates them; Eagle SPO/GPO likewise.

## Shimano "Bicycle System Components" — printed 02.1977 (disraeligears.co.uk, 46 images)

- `data_source` 66. Source:
  https://www.disraeligears.co.uk/site/shimano_bicycle_system_components_february_1977.html
  (images are named `shimano_bicycle_system_components_1977_*`:
  front_cover, page_01..page_42, rear_cover, card_scan_01/02; printed
  page N = page_NN). Rear-cover imprint "CC 0277 YBC NP". The 1977
  model-year catalogue and the first after Dec 1974, organised by
  system: Dura-Ace 10 track ("will be introduced in 1977"), Dura-Ace
  road/track, Shimano-600, FF, PPS, Positron. Scans are 600px but the
  spec tables are legible.
- year_to -> 1977 (55 rows): mostly the Dec 1974 rows whose 1976
  year_to was a guess (Crane DB-100/110, DC-200/210/110, DG-100, EA-100,
  LA-100, LD-500, the LB- levers except LB-300, LD-200/300, GA-200/100,
  GB-100/200, FC-300/330, FB-100, HA-300, HC-100/200/210, HD-100,
  BE-100, BC-300, Tourney BB-100/110/200/210, MA-100, MB-200/100/110,
  MD-100, TB-100, TC-100, CB-100, CC-100, UA-200, FA-200) plus the
  Dura-Ace Black Series rows pictured on pages 10-12 (2507, 3097, 432,
  988, 1813, 1814, 6161, 3553). Several gained the 1977 weights (Crane
  206g, Crane-GS 216g, BA-100 195/193g, LA-100 71g, MA-100 220g, MB-200
  209g).
- Not listed in 1977 (they stay at 1976 or earlier): DB-200/210 Titlist,
  DB-300/310 Tourney, the DE- Eagles, DD-100/200/500, EB-100, LB-300
  Super Shifter, LD-400, HC-120, BC-200, MC-100, AB-100.
- Velobase rows confirmed and redated to 1977 (were 1970 or 1980):
  4440 "DB-600 Titlist" -> "DB-600, Titlist" (235g; 230g measured);
  2451 EB-200 Titlist; 2456 "ED-300, Thunderbird II" -> "ED-300,
  Thunder Bird-II"; 4442 "Skylark, DD-510" -> "DD-510, Sky Lark"; 4447
  "Eagle II" -> "DE-100F, Eagle-II"; 4527 "DG-200 Positron II, Positron"
  -> "DG-200, Positron-II"; 4528 DG-300 (year_from 1980 -> 1977); 4441
  "400, DC-400" -> "DC-400, Shimano-400"; 2453 "EC-400, Uniglide 400" ->
  "EC-400, Shimano-400" (Uniglide is the chain, not this derailleur);
  2473 "EC-500" -> "EC-500, Shimano-500" (1978 -> 1977); 6186 "LB-700,
  Positron" -> "LB-700, Positron Down Tube"; 6137 "LB-600" -> "LB-600,
  Shimano-600".
- Dura-Ace 10: the 1977 codes GA-110 crank, QA-100 chain, HA-310 hubs
  and FA-210 sprocket were inserted as their own rows (separate-code
  convention). The later 1980s rows 6385 SS-7000 (velobase 1970) and
  1817 FC-7000 (1976) had year_from moved to 1978 and notes added
  naming the 1977 code.
- New (35 rows, 7427-7461, all 1977-1977): DA-100 Dura-Ace (176g,
  Synchro-Line), EA-200 Dura-Ace (110g), DB-610, DB-400, DB-410, DC-410,
  DC-400F, DD-100F, EC-600, LC-410, LD-600, LE-400, LC-500, GA-110,
  GF-210/400/410/420, GG-200/210, GG-100, FC-600, FF-300, QA-100,
  QA-200 Uniglide-II, QA-400 Uniglide-600, HA-310, HE-300 Freehub-A,
  HE-400 Freehub-C, HD-200, BB-400 600 centre-pull, Tourney BB-240,
  BB-230, BB-120, MB-210, FA-210.
- Merged/deleted: 413 "MB-200, 600 (brake levers)" (velobase, bare,
  1975-1977, `6210DA00-CB05-4AB5-B610-659DE335C407`) -> 7130 MB-200, 600
  brake levers, now 1975-1977.
- Flagged, not changed: 4539 DB-300 Tourney (velobase 1975-1979) is
  absent here (replaced by DB-400/410), so its 1979 end looks wrong. It
  is also linked to the 1987 Strada "Shimano Tourney" spec (bike_spec
  1390, a generic name match), which is a bike-skill fix. Left until
  the 1978/1979 catalogues are in. Also left: 6187 LE-420 Positron 10-S
  Console (velobase 1970; the 1977 console is LE-400), 1777 "FFS"
  (bare), the 600 RD-6100/FD-6100 rows (later codes for DC-200/EC-600),
  1009/1015 generic Tourney brakes.
- Out of scope: fork ends NB-100/120, NC-100, ND-100, NF-100, pump
  holder KD-100, cable parts KA/KB, spoke protectors PB-, cables W-,
  outer bands, tools XA/XB, small parts.

## Shimano "Bicycle System Components" — printed 05.1978 (disraeligears.co.uk, 52 images)

- `data_source` 67. Source:
  https://www.disraeligears.co.uk/site/shimano_bicycle_system_components_may_1978.html
  (images are named `shimano_bicycle_system_components_1978_*`:
  front_cover, page_1..page_50, rear_cover; printed page N = page_N).
  Rear cover "(c) 5/1978 by Shimano Industrial Co., Ltd. - CC II 0578
  XBC NP". The 1978 model-year successor to Feb 1977, same layout,
  1560px scans.
- year_to -> 1978 (about 105 rows): nearly every row still current in
  Feb 1977, including the Dura-Ace Black Series (pictured p.14), Dura-Ace
  10, 600, 500, 400, Titlist DB-600/610, Tourney DB-400/410, FF, PPS
  DG-200/300, the LB- levers, hubs, Tourney BB-240/230/120/100, and the
  coaster and 3-speed hubs. 7117 LB-300 Super Shifter (ended 1976) is
  listed again, so it now runs to 1978 with an "absent Feb 1977" note.
- Not listed in 1978 (they stay ending 1977): DG-100 Positron, LB-500,
  LB-510, LE-400 (replaced by LE-410), MA-100 (replaced by MA-200) and
  its black version, Tourney BB-110/200/210, FC-600 (replaced by the
  FD- 600 UG freewheel).
- Capped: 4539 DB-300 and 4540 DB-310 Tourney year_to 1979 -> 1976.
  They are absent in both Feb 1977 and May 1978, where DB-400/410 replace
  them. 4539 still carries the 1987 Strada "Shimano Tourney" bike_spec
  1390, a generic name match for the bike skill to fix.
- Descriptions rewritten with 1978 weights or notes: DA-100 (174g,
  13/26T), ED-300 (179g), BB-300 (159/157g), HA-310 (225/295g), HA-300
  (rear 313g), HE-400 (480g), HD-100 (710g pair), HA-100/HA-200 (6-speed
  rears 310/335g, 126mm), DC-200 (235g), DC-110 (325g), MB-200; 2506
  EA-100 is printed as the "Crane" front (110g); 7144 GB-100 now serves
  GA-200 "A Type", GA-210 "B Type" and GA-110.
- **Code reuse:** MC-100 was the 1975 Tourist Lever (7132) and is a
  resin V-Brake Lever in 1978, so it was added as a separate row (7486)
  and both rows note the reuse.
- New (29 rows, 7462-7490, all 1978-1978): DG-210 Positron-EM, DG-220
  Positron-II 32, DC-300 Shimano-100, DD-400 Lark-Mini; GA-210 Dura-Ace B
  Type, GC-300 600 triple, GC-110 600 5-arm, GB-300, GF-440, GG-320;
  QA-110 Dura-Ace UG, QA-410 600 UG, FD-100/200/110/210 600 UG freewheel,
  FG-100 Uniglide freewheel; LE-410, LE-610, LE-150; BB-500 500
  centre-pull, BF-100 Radiax, BV-100 V-Brake C, BV-200 V-Brake M; MA-200,
  MB-120 DEL-77, MS-100 Soft LM, MC-100 V-Brake Lever; HD-600, HE-410,
  HE-310; NJ-100 Just Seat (Seat Posts).
- Merged/deleted: 4460 "DC-110, 500GS" (velobase, 1970, 340g,
  `2DBEE58D-17BD-4DDD-9BED-0333DB446193`) -> 7109 DC-110; 414 "Shimano
  600" (Brake Levers, bare, 1975-77,
  `6AC1A073-CF34-4E4F-AD67-54BE388816A9`) -> 7130 MB-200.
- **Not deleted (the bike_spec guard blocked it):** 4461 "Shimano 600"
  (Rear Derailleurs, velobase 1975, 236g,
  `9422ABE1-A7B3-4622-9DAB-EF4DEC646ED5`) was planned for merging into
  4462 DC-200 (236g matches DC-200's 235g). The pre-check missed that it
  has 5 bike_spec links: 1981 Kalkhoff Amateur 05 S / Touring 05 S /
  Touring 55 S and 1987 Bianchi Limited / Squadra, all "Shimano 600" or
  "600 SIS". Those are generic name matches to a 1975 derailleur and
  wrong for those years, so repointing them to DC-200 wouldn't help;
  this is for the bike skill. 4462 already carries 4461's 236g.
  **Resolved the same day:** the bike skill relinked those specs (see
  ingest-bike-specs known-catalogs, "Generic Shimano 600 / 600 SIS /
  Tourney links"), leaving 4461 with no bike links, and 4461 was then
  merged into 4462 and deleted.
- Out of scope: UL-100 handle lock, fork ends NB-200 (new)/NB-100/120,
  NC-100, ND-100, NF-100, cable parts KA/KB, spoke protectors PB-/PC-
  (PC-110/150 new), WE-100 colour casing (new) and W- cables, outer
  bands, tools XA/XB/XC, small parts.

## Shimano "Bicycle System Components" — printed 12.1978 (disraeligears.co.uk, 76 images)

- `data_source` 68. Source:
  https://www.disraeligears.co.uk/site/shimano_bicycle_system_components_december_1978.html
  (images `shimano_bicycle_system_components_december_1978_{front_cover,
  page_01..page_74,rear_cover}`; image page_NN = printed page NN). Rear
  cover "(c) Dec. 1978 by Shimano Industrial Co., Ltd. 1278 C1/20M XBC
  NP". The 1979 model-year catalogue ("World Racers '79", p.38) and the
  first with Dura-Ace EX, 600 EX, Altus/Selecta, Positron-III, the
  Centeron RS/LS/LE trio, the Freehub family and the MX range.
- **The 1978 EX/Altus codes are the same parts as velobase's 1980 codes.**
  Rows were retitled with both codes (as with Dura-Ace first gen), and
  descriptions rewritten, not duplicated: 4509 DA-200 / RD-7200, 2518
  EA-200 / FD-7200 (band), 2519 EA-210 / FD-7210, 6172 LA-110 / SL-7200,
  1828 GA-300 / FC-7200, 136 GB-110 / BB-7200, 3569 HF-100 / FH-7260 (6-sp),
  3568 HF-110 / FH-7250 (5-sp), 997 BA-200 / BR-7200 (CS-49), 998 BA-220 /
  BR-7210 (CS-57), 439 MA-200 / BL-7200, 3105 UA-110 / HP-7200; 4468 DC-230
  / RD-6200, 2480 EC-630 / FD-6200, 6147 LB-630 / SL-6200, 1793 GC-400 /
  FC-6200, 126 GB-210 / BB-6200, 3540 HF-350 / FH-6261 (small flange,
  HF-360/300/310), 7149 HF-370 / FH-6263 (large, HF-380/320/330), 969
  BB-330 / BR-6200, 419 MB-230 / BL-6200, 3089 UB-100 / HP-6200; 4476
  DH-100 / RD-AT11, 4477 DH-110 / RD-AT12, 2484 EF-100 / FD-AT11, 2485
  EF-110 / FD-AT12, 6153 LF-110 / SL-AT22, 7165 LC-450 / LC-460 (SL-AT11 /
  AT12); 7170 HF-400 / HF-410 (FH-Q620) Freehub-SQ, 7171 HF-800..830
  (FH-N620 / K610) SK / SN, 3521 HF-610 / FH-5A10 Freehub-5A; 3530 / 3531
  HB-200 / HB-6110 and HB-100 / HB-6120 (600 hubs, code already in the
  descriptions). The code mapping is inferred from matching specs and
  weights, not printed anywhere.
  Old titles: "Shimano RD-7200, Dura-Ace EX", "Shimano FD-7200, Dura-Ace
  EX (clamp)", "Shimano FD-7210, Dura-Ace EX (Braze-tab)", "Shimano
  SL-7200, Dura-Ace EX", "Shimano FC-7200, Dura-Ace EX", "Shimano BB-7200,
  Dura-Ace EX", "Shimano FH-7260 / FH-7250, Dura-Ace EX", "Shimano
  BR-7200 / BR-7210, Dura-Ace EX", "Shimano BL-7200, Dura-Ace EX",
  "Shimano HP-7200, Dura-Ace EX", "Shimano RD-6200, 600EX Arabesque (Short
  Cage)", "Shimano FD-6200 / FC-6200 / HP-6200 / BR-6200, 600EX
  Arabesque", "Shimano SL-6200, 600EX Arabesque (clamp-on)", "Shimano
  BB-6200 / BL-6200, 600EX", "Shimano FH-6261, 600EX (6sp)", "Shimano
  FH-6263 / FH-6253, 600EX (large flange freehub)", "Shimano RD-AT11,
  ALTUS-ST", "Shimano RD-AT12, ALTUS LT", "Shimano FD-AT11, Altus-ST",
  "Shimano FD-AT12, Altus LT", "Shimano SL-AT22, ALTUS-LT", "Shimano
  SL-AT11 / SL-AT12, Altus (stem)", "Shimano FH-Q620, Freehub-SQ",
  "Shimano FH-N620 / FH-K610, Freehub-SN / SK", "Shimano FH-5A10 -
  steel", "Shimano 600, HB-6110 (low flange)", "Shimano 600, HB-6120
  (high flange)", "Shimano RS, DH-500 / DH-510", "Shimano BB-250,
  Tourney", "Shimano LD-500, Dura-Ace bar-end control".
- year_from: 1828, 3568 (was 1970), 3569, 998, 126, 3540, 7149 -> 1978;
  4476/4477/6153 (were 1970), 7165, 7170, 7171 (were 1984), 3521, 4443
  -> 1979. Velobase 1970-1970 placeholders 6187 LE-420, 3578 HF-500, 3576
  HD-400, 3577 HD-410, 1014 BB-250 Tourney (QR; also the MX rear) ->
  1979-1979 with descriptions.
- year_to -> 1979: 114 rows still listed, including the Black Series
  (pictured pp.30/32), 7434 EA-200 Dura-Ace, 7464 DC-300 (pictured).
- **Code reuse:** EA-200 is printed twice: as the Dura-Ace Panta front
  (p.30, 16T 110g, = 7434 from Feb 1977) and as the Dura-Ace EX band
  front (p.25, 14T 102g, = 2518). LD-500 is printed under both Dura-Ace
  (black) and 600: one row, 7113. BV-100 and HE-410 are each printed as
  front and rear (existing single rows). LC-450 and LC-460 are both
  labelled Altus-ST. Positron-III front derailleurs carry D- codes
  (DG-400/410).
- Not listed (stay ending 1978): 7463 DG-220, 7468 GC-110 (same spec as
  GC-400, probably renamed; noted on the row), 7477 LE-610, 7469 GB-300,
  2709 CB-100. The Dura-Ace road section prints no caliper or brake lever
  (989 stays at velobase's 1979).
- New (21 rows, 1979-1979): EE-200/210 Positron-III rear, DG-400/410
  Positron-III front, ED-400/410 Shimano-FE, LG-200/210 Positron-III
  lever, LF-100/150 Altus-ST down tube, LC-600 Shimano-LS, LF-200
  Shimano-LE, GC-410 600 EX touring double, GH-200/210 Selecta-A,
  GH-220/230 Selecta-B, GH-300 Selecta-C, GH-100 OCTA-SS, GB-410, GB-430,
  GB-400, GG-420, HF-700/710 Freehub-6II/5II, CD-100 coaster D-type,
  CB-400/410 MX coasters, QA-500 600 UG Link Lock.
- Merged/deleted: 2508 "EA-200, Dura-Ace EX"
  (`909C0F14-DA93-4695-B7E7-8F65670594BD`) -> 2518; 1829 "GA-300, Dura-Ace
  EX" (610g, `33E0D8C7-7DD4-44BE-9258-82D777192E93`) and 1827 bare "Dura-Ace
  EX" crankset (`B0B21258-D724-4A2C-A0FE-EA2506ED7426`) -> 1828; 990
  "BA-200, Dura-Ace 7100" (332g avg, `C4A47AFF-B76D-410B-952A-6C3B946E81BC`)
  -> 997; 996 "BA-220 (CS-57)" (`C7DA3688-533B-4A63-9A2D-1583BD141921`) ->
  998; 440 "MA-200, Dura-Ace EX" (`1C064C8F-15D5-4154-8E3B-75DC862410EA`)
  and 7483 "MA-200, Dura-Ace" (our May 1978 row,
  `3fc693e2-be39-11f1-a2df-02fea3763e8d`) -> 439; 3104 bare "HP-7200"
  (`1EF4E183-DA5B-41EF-A5A6-95021F6D5A1C`, bike_spec 800 moved to 3105)
  -> 3105; 1792 bare "FC-6200" (NULL years,
  `5EE09FDE-A71D-43DD-A12F-19F973A01C6A`) -> 1793.
- Left: Takagi JT- parts (p.62, another brand); 4501/4502 "RD-7100
  (black), Early EX (version 1/2)" (dubious, but not addressed here);
  1210 "Dura-Ace EX" cassette; 3536 "600 Uniglide, 600EX (5sp) Freehub";
  2529 EE-100 Positron front; 4472 RD-6210 and 6150 SL-6210 (not
  printed); 7161 RD-RS11/12 kept separate from 4443 (1984 specs differ).
- Out of scope: fork ends NC-200 (new)/NC-100/NB-/ND-100/NF-100, cable
  parts KA-/KB-, KD-100, chain/freehub/spoke protectors GP-/PF-/PB-/PC-,
  WE-100 and W- cables, outer bands, UL-100, tools, small parts.

## Shimano "Bicycle System Components 1981" — printed 12.1980 (disraeligears.co.uk, 64 images)

- `data_source` 69. Source:
  https://www.disraeligears.co.uk/site/shimano_bicycle_system_components_-_1981.html
  (images `shimano_bicycle_system_components_1981_{front_cover,page_01..
  page_62,rear_cover}`; image page_NN = printed page NN). Rear cover
  "(c) Dec. 1980 by Shimano Industrial Co., Ltd. 1280 C1/15M Printed in
  Japan. XBC NP". The 1981 model-year catalogue.
- **First catalogue with the 1980s code system** (RD-7200, SL-QP10,
  HB-AQ11...). It prints "Old No." for EF-100 -> FD-AT11, DD-100F ->
  RD-LK10, QA-200 -> CN-UG20, LB-170 -> SL-QP10, LD-500 -> SL-BC10 and
  WE-100 -> 840 999xx colour casing. That confirms the renumbering was
  one-for-one. Other pairs are matched on spec and weight; LE-150 ->
  SL-C310 and BB-250 -> BR-TS30 / BR-MX10 are the least certain and say
  "probably" in their descriptions.
- **Merge policy (user-approved):** each 1975-79 code row and its 1980s
  code row became one "OLD / NEW" row, kept on the row with catalogue
  detail, with years the union of both and measured weights kept, as for
  Dura-Ace first gen and the Dec 1978 EX pass. Kept separate (one-to-many
  or unclear): EA-100 and EA-200 vs FD-7100 2509; GA-200 / GA-210 vs
  FC-7110 1818; GB-100 vs BB-7500; FF-300 vs MF-FF51 / 61; FA-200 vs
  SS-7500 alloy / steel; MB-120 DEL-77 vs BL-HD85; QA-500 vs CN-6130.
- Merged survivors: 7427 DA-100 / RD-7100 (1977-84), 4501 DA-100 / RD-7100
  (Black), 4462 DC-200 / RD-6100 (1975-82), 7110 DC-210 / RD-6101, 4443
  DH-500 / DH-510 (RD-RS12 / RD-RS11), 7432 DC-400F / RD-401F, 4442 DD-510
  / RD-SL10, 4527 DG-200 / RD-P210, 4528 DG-300 / RD-P240, 7435 EC-600 /
  FD-6100 (1977-82), 7113 LD-500 / SL-BC10, 7440 GA-110 / FC-7000, 1812
  GA-100 / FC-7500, 7452 HA-310 / HB-7020, 7124 HA-300 / HB-7520, 3556
  (HA-100 / HB-7110), 3554 (HA-200 / HB-7120), 7137 HC-210 / HB-AQ11, 3522
  HC-110 / HB-AQ21, 7138 HC-200 / HB-AN11, 7139 HC-100 / HB-AN21, 2219
  F-100 / FA-100 / MF-7150, 2220 FA-110 / MF-7160, 7474 FD-1x0/2x0
  (MF-6150/6160/6151/6161), 7461 FA-210 / SS-7000, 2711 TB-100 / SG-3S20,
  7127 BE-100 / BR-6102, 7449 QA-100 / CN-7000, 7472 QA-110 / CN-7100, 7451
  QA-400 / CN-6110, 7473 QA-410 / CN-6120, 7450 QA-200 / CN-UG20, 7126
  K-902 / UA-200 / HP-7500, 3098 K-901 / UA-100 / HP-7100.
- Merged/deleted (30): 4502 "Shimano RD-7100 (black), Early EX (version
  2)" (`ECB6CF6D-DBE8-4CE8-9B49-BDDCC3845520`); 4463 "Shimano RD-6100 600"
  (`173AD886-F397-48AB-86CF-9FE5CB1F9BFB`); 4464 "Shimano RD-6101 600 GS"
  (`DFCF6C60-DA1D-4458-B6F1-076456A89217`); 7161 "Shimano RD-RS11 /
  RD-RS12, Shimano-RS" (1984 pass, `205284ee-bc3e-11f1-a2df-02fea3763e8d`);
  4445 "Shimano RD-401F, 400FF" (`D225EEAB-08DE-42E7-9B3C-74A24B9406E6`);
  4448 "Shimano RD-SL10, Skylark" (`EE565BD7-0867-4295-A3CD-FD614581C2C9`);
  7160 "Shimano RD-P210, Positron-II" (1984,
  `205280b7-bc3e-11f1-a2df-02fea3763e8d`); 7159 "Shimano RD-P240,
  Positron-400" (1984, `20528286-bc3e-11f1-a2df-02fea3763e8d`); 2475
  "Shimano FD-6100 600 Uniglide" (135g,
  `FC033078-EA63-4FEA-8AA6-870FD61F935D`); 7166 "Shimano SL-BC10, 600
  (bar-end)" (1984, `20528d16-bc3e-11f1-a2df-02fea3763e8d`); 1817 "Shimano
  FC-7000, pitch 10 crankset" (`1902059B-9843-4F96-A3E7-4E95E1699521`);
  1822 "Shimano FC-7500, Dura-Ace" (`3AB24023-7A36-4A22-840D-D58A816B04F9`);
  3557 "Shimano HB-7020, Dura-Ace 10" (520g,
  `4C2227BA-F279-4AE9-B9FD-901E4D72ED74`); 3564 "Shimano HB-7520, Dura-Ace
  Track" (553g, `E6906EDD-893C-4D91-879D-11946F668D3B`); 3558 "Shimano
  HB-7110, Dura-Ace 7100 (low flange)"
  (`B73F469B-9339-4A05-B861-DDAB9A979CFA`); 3559 "Shimano HB-7120,
  Dura-Ace 7100 (high flange)" (`AC793FA1-3037-4684-8BCF-30F46636382D`);
  7167 "Shimano HB-AQ11 / HB-AQ21 (alloy quick release)" (1984,
  `20527a56-bc3e-11f1-a2df-02fea3763e8d`); 7168 "Shimano HB-AN11 /
  HB-AN21 (alloy nut type)" (1984, `205277c2-bc3e-11f1-a2df-02fea3763e8d`);
  7151 "Shimano MF-7150 / MF-7160, Dura-Ace (freewheel)" (1982,
  `20523f3f-bc3e-11f1-a2df-02fea3763e8d`); 2216 "Shimano MF-6151, 600
  (early model)" (422g, `156862F1-295B-4F0B-8FF2-8F8D1C34581F`); 6385
  "Shimano SS-7000, Dura-Ace 10" (`5595B61E-00F3-4FD4-8C08-BFD1E18E642E`);
  7172 "Shimano SG-3S20 three-speed hub" (1984,
  `20528900-bc3e-11f1-a2df-02fea3763e8d`); 968 "Shimano BR-6102, 600EX
  (cantilever)" (`37540293-D654-4C28-AAF5-B303E3DF43ED`); 1410 "Shimano
  CN-7000, Dura-Ace 10" (`969276F0-B95B-4808-A099-955C04F48006`); 1411
  "Shimano CN-7100, Dura-Ace (Uniglide)"
  (`2B28CCDD-B143-4F4F-BBEA-B46563A0006B`; bike_spec 791 and the bike
  generator's chains override `'dura ace ex'` moved to 7472 first); 1405
  "Shimano CN-6110, 600 Uniglide" (`82999CC3-7448-4501-AE51-511BDFBDB2F9`);
  7153 "Shimano CN-6120, 600 UG chain" (1982,
  `2052394f-bc3e-11f1-a2df-02fea3763e8d`); 7154 "Shimano CN-UG20,
  Uniglide-II chain" (1982, `20523aed-bc3e-11f1-a2df-02fea3763e8d`); 3101
  "Shimano HP-7500, Dura-Ace (Track)" (136g,
  `7F607DA6-A73A-4DB9-9B15-3CE4A8C3DF55`); 7152 "Shimano HP-7100, Dura-Ace
  (road head parts)" (1982, `20523e68-bc3e-11f1-a2df-02fea3763e8d`).
- Retitled with the 1981 code added, year_to -> 1981: 7433 DD-100F /
  RD-LK10, 4447 DE-100F / RD-EG10, 7462 DG-210 / RD-P21E, 7493 ED-400 /
  ED-410 (FD-FE12 / FD-FE11), 7114 LB-180 / SL-QB11, 6122 LB-150 /
  SL-QS10, 7115 LB-170 / SL-QP10, 7116 LB-100 / SL-AL10, 7118 LB-400 /
  SL-FT10, 7497 LF-200 / SL-LE10, 7496 LC-600 / SL-LS10, 7495 LF-100 /
  LF-150 (SL-AT21), 6186 LB-700 / SL-P221, 7436 LC-410 / SL-P211, 7437
  LD-600 / SL-P241, 7122 LD-300 / SL-3S30, 7123 LD-200 / SL-3S20, 7478
  LE-150 / SL-C310, 7498 GC-410 / FC-6210, 7507 HF-700 / HF-710
  (FH-6II10 / FH-5II10), 7141 HD-100 / HB-SN11 (668g), 3578 HF-500 /
  FH-MX60 / FH-MX40, 7475 FG-100 / MF-1500 / MF-1510, 7136 FB-100 /
  SF-1100, 2712 TC-100 / SG-3C20, 7508 CD-100 / CB-D110, 7458 BB-230 /
  BR-TS40, 7459 BB-120 / BR-TC30, 1010 BB-100 / BR-TC10, 1014 BB-250 /
  BR-TS30 / BR-MX10, 7134 MB-110 / BL-D500, 7133 MB-100 / BL-HD30, 7485
  MS-100 / BL-LM10, 7131 MD-100 / BL-PL10. Titles only (years already
  later): 6153 adds SL-AT23, 1793 "(MD type)", 7170 FH-Q610 / FH-Q510,
  7171 FH-K610 / K510 / N610 / N510, 3521 HF-600 / HF-610 (FH-6A10 /
  FH-5A10). Also 2509 "FD-7100, Dura-Ace 7100" -> "FD-7100, Dura-Ace"
  1981-1981 (was velobase 1970-1980), 1804 "FC-SL24, Selecta B1" ->
  "Selecta-T" to 1981. All old titles are the ones listed in the Dec 1978
  section or in the deletes above, plus: "Shimano DA-100, Dura-Ace",
  "Shimano RD-7100 (black), Early EX (version 1)", "Shimano DC-200, 600",
  "Shimano DC-210, 600 GS", "Shimano DD-510, Sky Lark", "Shimano DG-200,
  Positron-II", "Shimano DG-300, Positron 400", "Shimano EC-600,
  Shimano-600", "Shimano GA-110, Dura-Ace 10", "Shimano GA-100, Dura-Ace
  track chainwheel", "Shimano HA-310, Dura-Ace 10", "Shimano HA-300,
  Dura-Ace track hubs", "Shimano HC-210 / HC-200 / HC-110 / HC-100 ...
  hub", "Shimano FA-110, Dura-Ace", "Shimano FA-210, Dura-Ace 10",
  "Shimano TB-100 Three Speed Hub", "Shimano TC-100 Three Speed Coaster
  Brake", "Shimano BE-100, cantilever brake", "Shimano QA-100 / QA-110 /
  QA-400 / QA-410 / QA-200 ...", "Shimano K-902 / UA-200, Dura-Ace
  track", "Shimano K-901 / UA-100, Dura-Ace", and the bare-code titles of
  the B rows.
- year_from -> 1981 (DB had 1982 or 1984): 4478 / 4479 RD-DE10 / DE20,
  2486 FD-DE10, 1805 / 1806 FC-DE, 7150 BB-DE30, 1818 FC-7110, 7178
  BB-6210, 7156 RD-PF10 / PF20, 7158 RD-PF40, 7157 SL-PF13, 7155 MF-FF51 /
  61, 7176 MF-FF50, 7177 FC-FF35, 7173 SG-2S10.
- New (30 rows, 1981-1981): RD-PF1E; SL-PF41, SL-PF37 Digital-6,
  SL-PF35 / PF36; BR-TS60, BR-MX20; BL-D800 / D805 DEL-80, BL-HD85 / HD80,
  BL-LF10; FC-FF14, FC-FF30 / FF32, BB-FF30, BB-FF10; BMX DX / SX (group
  156): RD-MX10, FD-MX20, FD-MX10, SL-MX20, SL-MX10, SL-2S21, FC-MX62,
  FC-MX61, BB-MX60, FC-MX10, PD-MX10 / MX11, FH-MX20, FH-MX10 / MX12,
  FH-MX15, BL-MX20, BL-MX10, SP-MX20.
- Not listed in 1981 (stay ending 1979): Titlist, Tourney DB-, 500, 400
  and Lark-Mini / Shimano-100 rears; EC-500 / 400, EB-200, ED-300; all of
  Positron-III; LE-410 / 420, LB-600, LB-300 / 200 / 160; Selecta-A / B /
  C, OCTA-SS, GC-100 / 300; BB-300 / 400, MB-200 / 210, BB-240, Radiax,
  V-Brakes, CC-100, HE- freehubs, NJ-100.
- Left: Takagi JT-MX parts (another brand); RD-MX60 / MX50 chain
  tensioners; 3102 HP-7500 (NJS) kept separate; BB-SL31 128 is titled
  "Adamas AX" but is the Selecta-T BB here (untouched); QA-500 Link Lock
  vs CN-6130 left separate.
- Bike follow-up (not done): COMPONENT_OVERRIDES unlinks "Shimano 600"
  rear / front derailleurs from 1979; 4462 DC-200 / RD-6100 and 7435
  EC-600 / FD-6100 now run to 1982, so the 1981 Kalkhoff specs could link.

## Shimano "Aero Dynamics" AX brochure — printed 01.1981 (disraeligears.co.uk, 40 images)

- `data_source` 70. Source:
  https://www.disraeligears.co.uk/site/shimano_aero_dynamics.html (images
  `shimano_aero_dynamics_{front_cover,page_01..page_38,rear_cover}`;
  image page_NN = printed page NN). Rear cover "(c) Jan. 1981 by Shimano
  Industrial Co., Ltd. 1981 AC2/20M English Printed in Japan AZIZM".
  The AX launch brochure (shown at IFMA Cologne 1980). Pp.1-22 are the
  aerodynamics essay and wind-tunnel results, pp.23-36 the parts, pp.37-38
  the system chart. The Dec 1980 general 1981 catalogue has no AX, so this
  is its supplement.
- Ranges: Dura-Ace AX (7300), 600 AX (6300), Adamas AX (AD), and plain AX
  (Integer AX FC-AX21, Direction-6 AX FH-AX61, Positron AX RD / FD /
  SL-AX10, Parapull AX BR-AX10, DEL-80 AX BL-AX10 / AX50).
- year_from -> 1981 (DB had 1982, mostly velobase Adamas 1982-83): 128
  BB-SL31, 423 BL-AD10, 424 BL-AD50, 974 BR-AD10/20, 1801 FC-AD11, 1802
  FC-AD21, 2483 FD-AD10, 3541 FH-AD61/65, 3962 PD-AD10, 4474 RD-AD10, 6151
  SL-AD1x, 6152 SL-AD20/24, 1787 FC-6300, 3957 PD-6300, 2516 FD-7300, 7146
  FD-7310, 7147 SL-7310, 7148 SP-7300. 1803 FC-AD22 (AXII) is not in the
  brochure and stays at 1982.
- Retitled: 974 "Shimano BR-AD20, Adamas AX" -> "BR-AD10 / BR-AD20, Adamas
  AX Parapull" (brochure prints BR-AD10 at 397g, the 1982 BR-AD20 weight;
  treated as a renumber); 6151 "Shimano SL-AD10, Adamas AX" -> "SL-AD10 /
  SL-AD11 / SL-AD12 / SL-AD14, Adamas AX"; 6152 "Shimano SL-AD24, Adamas
  AX (top tube mount)" -> "SL-AD20 / SL-AD24, Adamas AX (positive
  click)"; 6141 "Shimano SL-6311, 600 AX  (Brazed-on B Type)" (double
  space) -> "(brazed-on B type)"; 6142 "... (Brazed-on B Typ for oval
  tubes)" -> "(brazed-on B type, oval tube)"; 6140 "(Brazed-on A Type)"
  -> "(brazed-on A type)"; 6170 "Shimano SL-7311, Dura-Ace AX" and 6171
  "Shimano SL-7321, Dura-Ace AX" gain type suffixes; 2516 "Shimano
  FD-7300, Dura-Ace AX" -> "(band)"; 2517 "Shimano FD-7320, Dura-Ace AX"
  -> "(oval tube)"; 5887 "Shimano SP-6310, 600 AX" -> "(B-type)"; 995
  BR-7300 and 965 BR-6300 gain "Parapull".
- Descriptions consolidated "(Jan 1981, 1982)" on 43 AX rows, keeping
  measured weights. Corrections: 5896 SP-7310 velobase "224 grams" (the
  SP-7300 figure) -> 244g; 6170 / 6171 SL-7311 / 7321 velobase 64g ->
  68g; 3541 garbled "Shimano Adamas AX (?)" opening removed; 6169 SL-7300
  band notes it is absent from the brochure (brazed-on types only).
- New (9 rows, 1981-1981): FC-AX21 Integer AX, BB-SL32, FH-AX61
  Direction-6 AX, RD-AX10 / FD-AX10 / SL-AX10 Positron AX (group 224),
  BR-AX10 Parapull AX, BL-AX10 / BL-AX50 DEL-80 AX, SD-AD10 Adamas AX
  saddle (Saddles, group 47).
- Confirmed: FH-7370 is printed as 7-speed, as in the 1982 catalogue.
  RD-AX10 is printed with the same 283 / 319g as RD-AD10; recorded as
  printed.
- Left: bare "Shimano Positron" 4525 (RD) and 6184 (shifter), 1980,
  possibly Positron AX but no code to merge on; 1197 bare "AX, 600 AX"
  cassette; 2477 FD-6300 braze tab (brochure shows band only); 2459
  FD-AX50 (a later part). Out of scope: SM-HP10 head parts cover,
  SM-BT10 Aero-Bottle, CP-AX30 / AX50 protectors.

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

## Shimano "New Shimano 600 EX — The High Energy Cycling Components" brochure — printed 10.1983 (disraeligears.co.uk, 8 scans)

- `data_source` 71. Source:
  https://www.disraeligears.co.uk/site/shimano_new_600_ex_-_brochure.html
  (images `shimano_new_600_ex_-_brochure_scan_1..8`). Rear cover "(c) Oct.
  1983 by Shimano Industrial Co., Ltd. 1083 FC/40M Printed in Japan XBC
  IZM"; front "ENGLISH (U)". Launch of the 6207 New 600 EX (scans 4-6) and
  the first 105 Golden Arrow (scan 7) for 1984; scan 8 advertises Dura-Ace
  AX / EX / 10 and Deore XT only.
- Nearly all parts were already in the DB (velobase plus 1984 dealer
  notes). New rows (2, 1984-1984): HB-6207F / HB-6207R conventional 600EX
  hubs (219 / 312g; the DB only had the FH-6207 freehub) and
  BR-Z575-105 / BR-Z645-105 (338g, 43-57 / 49-64mm).
- Corrections: 123 BB-3L11 / BB-3P11 had the cranks reversed (from our
  1984 pass); the brochure table gives BB-3P11 for FC-S125 (119mm) and
  BB-3L11 for FC-S105 (116mm), so the 1984 dealer reading is suspect.
  3537 / 3538 FH-6207 year_from 1980 -> 1984 (6207 series is new here).
- Retitled: 970 "Shimano BR-6207, 600EX (short reach)" -> "BR-6207-49,
  600EX (short, 49 type)"; 971 "Shimano BR-6207, 600EX (standard reach)"
  -> "BR-6207-57, 600EX (long, 57 type)"; 4454 "Shimano RD-A105, 105
  Golden Arrow (long cage)" -> "RD-A105GS ..."; 2217 "Shimano MF-6207,
  600EX (6sp)" -> "MF-6207-5 / MF-6207-6, 600EX"; 410 "Shimano BL-Z306,
  105 Golden Arrow" -> "BL-Z306-105, 105 Golden Arrow"; 3526 bare "Shimano
  105, 105 Golden Arrow" (Hubs, velobase 1980, 650g measured) -> "HB-F105 /
  HB-R105, 105 Golden Arrow (small flange)" 1984-1986. 3526 kept rather
  than merged because the 1985 Raleigh Supercourse spec (bike_spec 1959,
  "Shimano 105 small flange alloy, Q.R. 36 hole sealed") and its generator
  override point at it; the override comment was updated.
- Descriptions rewritten from the brochure (measured weights kept): 4470 /
  4469 RD-6207 (GS), 2481 FD-6207 (18T triple capacity), 6148 SL-6207
  (BA / FA / BB / FB / FC), 1798 FC-6207, 127 BB-6207, 3961 PD-6207 (440g
  pair, 31 deg), 420 BL-6207, 3090 HP-6207, 4452 RD-A105, 2466 FD-A105,
  6132 SL-A105, 1781 FC-S125, 1780 FC-S105, 3085 HP-A105, 7474 (MF-6160 /
  6161 also shown as the 105 freewheel).
- Left: 958 BR-S105, 409 BL-H105, 7169 HB-F105 / FH-R105 (freehub
  version, separate), 4453 RD-A105 dark; velobase 6208 rows dated 1980
  (3539 FH-6208, 6149 SL-6208, 2218 MF-6208, 5891 "SP-6207?") need an
  SIS-era source. No deletes.

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

## Shimano "New Dura-Ace — The Unlimited Challenge" brochure — printed 01.1985 (disraeligears.co.uk, 8 scans)

- `data_source` 72. Source:
  https://www.disraeligears.co.uk/site/shimano_new_dura-ace_-_brochure.html
  (images `shimano_new_dura-ace_-_brochure_scan_1..8`). Rear cover "(c)
  Jan. 1985 by Shimano Industrial Co., Ltd. 0185 FC/55M Printed in Japan
  XBC IZM"; front "ENGLISH (U)". Launch of Dura-Ace 7400 with SIS; scans
  2-5 essay and feature notes, 6-7 specs. FC-7400 46 / 54T rings
  "available from March '85". Only the BR-7400-49 brake is listed; no
  stem, seat post or chain.
- year_from -> 1985: 991 BR-7400 (was 1988), 2510 FD-7400 (1987), 3970
  PD-7400 (1987), 2221 MF-7400 6sp (1988), 7207 FH-7400-6/7 (1988), 7208
  HB-7400-F (1988), 3560 (velobase 1980 placeholder; now 1985-1989).
  Already 1985: 132, 434, 1819, 3099, 4503, 6164.
- Retitled: 3560 "Shimano FH-7400, Dura-Ace 7400 (freewheel)" ->
  "HB-7400-R / HB-7400-F, Dura-Ace (freewheel hub)" (its 1987 Giro link
  sits beside an MF-7400 freewheel, so the conventional hub is right; the
  hubs override comment was updated); 2510 "Shimano FD-7400, Dura-Ace 7400"
  -> "FD-7400-B / FD-7400-F, Dura-Ace"; 6164 "Shimano SL-7400, Dura-Ace
  7400 (6sp)" -> "SL-7400 (BCAI / FCAI / FCBI), Dura-Ace SIS (6sp)".
- Descriptions from the brochure (measured weights kept): 991 (BR-7400-49
  355g), 4503 RD-7400 (189g, 12-26T), 1819 FC-7400 (637g), 132 BB-7400
  (314g), 3970 PD-7400 (372g pair, 34 deg), 434 BL-7400 (216g), 3099
  HP-7400 (113g), 2221 MF-7400 (360g), 7207 (FH-7400-6 438g), 7208.
- Deleted: 1206 "Shimano FH-7400-6, Dura-Ace (6sp Uni-Glide)" (Cassettes,
  1990-91, bare, `27AD7396-BE5E-4150-BC80-C984E4C06CFC`) -> 7207.
- Left: 1412 / 1413 bare 7400 Uniglide chains (1980-90), 3561 FH-7402,
  1204 / 1205 CS-7400 cassettes dated 1980.

## Shimano "Complete Line of Shimano System Components" — printed 01.1986 (disraeligears.co.uk, 20 scans)

- `data_source` 73. Source:
  https://www.disraeligears.co.uk/site/complete_line_of_shimano_system_components_january_1986.html
  (images `..._scan_01..20`). Rear cover "(c) Jan. 1986 by Shimano
  Industrial Co., Ltd. 0186 FC/50M Printed in Japan XBC IZM"; front
  "ENGLISH (U)". 1986 model year: SIS spreads to 600EX (6208) and
  Shimano-L (Light Action L525); New Dura-Ace Track 7600, Light Action,
  Biopace, Z-Series and AT 50 parts; AX parts (FC-7300, PD-7300, BL-7300,
  BL-6300) still listed. No 105 Golden Arrow, EX, Adamas, Altus or
  Positron.
- year_from -> 1986 (DB had 1988, or velobase 1980): 1823 FC-7600, 7196
  BB-7600, 3565 HB-7600, 7210 SS-7600, 3103 HP-7600, 7231 CN-7400, 6677
  HS-7400, 5893 SP-7400-A, 7232 CN-6208, 7209 MF-Z012, 7225 / 7226
  BL-Z325 / Z326, 7192 SL-AT50, 2218 MF-6208, 6149 SL-6208 (now
  1986-1987), 4519 / 4520 RD-L525, 3952 PD-T100.
- year_to -> 1986: 1826 FC-7300, 3973 PD-7300, 438 BL-7300, 415 BL-6300,
  7551 HB-6207F/R, 3961 PD-6207, 7451 CN-6110, 7473 CN-6120, 4488 RD-M700,
  4546 RD-Z505, 6194 SL-Z401, 6195 SL-Z408, 3966 PD-MX15.
- **105 Golden Arrow capped at 1985** (absent from this "complete line";
  user chose the generous 1985 bound since no 1985 catalogue is in hand):
  123, 410, 958, 1780, 1781, 2466, 3085, 3526, 4452, 4454, 6132 year_to
  1986 -> 1985; 4453 "RD-A105 ... (dark parallelogram)" 1986-1986 ->
  1985-1985. The 1985 Raleigh Supercourse links still fit.
- Retitled: 972 "Shimano BR-6208 600EX" -> "BR-6208-49 / BR-6208-57,
  600EX"; 6149 "Shimano SL-6208, 600EX" -> "SL-6208 (FAI / FCAI / FCBI /
  BCAI), 600EX SIS"; 2218 "Shimano MF-6208, 600EX (6sp)" -> "MF-6208-6,
  600EX SIS"; 1799 "Shimano FC-6207 BP, 600EX (Biopace)" -> "FC-6207-BP,
  600EX (Biopace double, LD type)"; 1797 "Shimano FC-6206 Biopace, 600EX
  (Triple version of FC-6207)" -> "FC-6206, 600EX (Biopace triple, MD
  type)"; 4519 "Shimano RD-L525, Light Action" -> "RD-L525-SS, Light
  Action (SIS, short cage)"; 4520 "Shimano RD-L525, Light Action (long
  cage)" -> "RD-L525-GS / RD-L525-SGS, Light Action"; 4518 "Shimano
  RD-L523, Light Action" -> "RD-L523-SS / -GS / -SGS"; 4546 "Shimano
  RD-Z505, Z-Series" -> "RD-Z505 / RD-Z505-GS"; 4544 "Shimano RD-Z501,
  Z-Series" -> "RD-Z501 / RD-Z501-GS / RD-Z501-SGS"; 4489 "Shimano
  RD-M700, Deore XT (with "Super Plate System")" -> "RD-M700-SP, Deore XT
  (Superplate)"; 3565 "Shimano HB-7600, Dura-Ace 7600 (High Flange)" ->
  "HB-7600, Dura-Ace Track (large / small flange)"; 448 "Shimano BL-AT50,
  Z-Series" -> "BL-AT50, AT 50 series"; 7192 "Shimano SL-AT50" ->
  "SL-AT50, AT 50 series".
- Descriptions rewritten from the catalogue on about 30 more rows (RD-6208
  204g, BL-6208, FC-7600 605g, HP-7600 90g vs velobase 80g, SS-7600,
  CN-7400 / 6208, HS-7400, SP-7400-A 224g, RD-M700 222g, FD / SL / BR /
  BL-M700, HB-MN72, Z-Series rows, PD-T100, PD-MX15). FD-Z202 / 204 / 206
  keep velobase's "-HS" titles; the catalogue prints them without it (and
  with -GS long cages), noted in the descriptions.
- New (6 rows, 1986-1986): RD-L522-SS / SGS, SL-S424-FAI / FCAI (Light
  Action SIS), SL-L422 (BA / FA / S), FH-7400-ATB / HB-7400-ATB (Deore XT),
  PD-GX10, SP-7410 Dura-Ace semi-oval B (kept apart from 5895 SP-7410
  1994-2000, a later reuse of the code).
- Deleted: 4543 "Shimano RD-Z501-GS" (Rear Derailleurs, bare, velobase
  1984-NULL, group 103, "311 grams (Actual)") -> 4544, which now carries
  the 311g figure. Source_id **not captured** before the delete (the
  pre-delete query omitted the column); match a reappearance by title and
  the 311g weight.
- Left: 3537 / 3538 FH-6207 (not listed; year_to stays 1984); 3539
  FH-6208 and 5891 "SP-6207?" (1980 placeholders, not in this catalogue);
  4490 "RD-M700 (Version 2)" and 2498 FD-M700 2nd style; 1003 BR-AT50
  titled "Exage Trail"; Biopace chainring rows; out of scope SM-DG11 /
  DG16 guards, TL-CN20.

## Shimano "Bicycle System Components — The Complete Line" — printed 08.1986 (disraeligears.co.uk, 24 scans)

- `data_source` 74. Source:
  https://www.disraeligears.co.uk/site/shimano_bicycle_system_components_august_1986.html
  (images `shimano_bicycle_system_components_1986_scan_01..24`). Rear cover
  "(c) Aug. 1986 by Shimano Industrial Co., Ltd. 0786 FC/50M Printed in
  West Germany XBC", European distributor list; front "English (E)".
  1987 model year; largely a reprint of the Jan 1986 Complete Line.
- New vs Jan 1986: Dura-Ace 7-speed SIS (RD-7401, SL-7401, FH-7400-7,
  MF-7400-7, HB-7400 7-speed compatible), BL-7401 aero (replaces BL-7300),
  FH-6208-R 600EX SIS freehub, BL-6209 aero (replaces BL-6300), New 105
  1050 series (RD, FD, SL, FC/BB, BR-1050-49/57, BL-1050/1051, FH/HB-1050,
  HP, PD), RD-L532. Dropped: Shimano-L SIS (RD-L525-SS, RD-L522, SL-S424),
  BL-7300, BL-6300; those stay ending 1986 (4519 RD-L525-SS kept to 1988:
  velobase plus a 1987 Bianchi Premio link).
- year_from -> 1987 (absent from Jan 1986): 3523 FH-1050 (velobase 1980),
  122 BB-1050 (1985), 953 / 954 BR-1050 (1985), 1778 FC-1050 (1986), 422
  BL-6209 (1986), 3539 FH-6208 (1980-1980 -> 1987-1987). 1404 CN-6130
  year_to 1982 -> 1987. The 1987 Bianchi Brava links (953, 1778) still fit.
- Retitled: 3539 "Shimano FH-6208, 600EX" -> "FH-6208-R / HB-6207-F, 600EX
  (SIS freehub)"; 4521 "Shimano RD-L532, Light Action" -> "RD-L532-SS /
  RD-L532-SGS, Light Action"; 953 "Shimano BR-1050, 105 (39-49mm)" ->
  "BR-1050-49, 105 (short 49 type)"; 954 "Shimano BR-1050, 105 (47-57mm)"
  -> "BR-1050-57, 105 (long 57 type)"; 2221 "Shimano MF-7400, Dura-Ace
  (6sp)" -> "MF-7400-6 ..."; 2222 "Shimano MF-7400, Dura-Ace (7sp)" ->
  "MF-7400-7 ..."; 6165 "Shimano SL-7401, Dura-Ace 7400 (7sp)" -> "SL-7401
  (FAI / BCAI / FCAI / FCBI), Dura-Ace SIS (7sp)"; 2462 "Shimano FD-1050,
  105" -> "FD-1050-B / FD-1050-F, 105"; 6130 "Shimano SL-1050, 105 (6sp)"
  -> "SL-1050 (BCAI / BCBI / FCAI / FCBI / FAI), 105 SIS (6sp)".
- Descriptions from the catalogue (measured weights kept): 7207, 3560,
  4504 RD-7401 (205g), 435 BL-7401 (254g), 422 BL-6209 (238g), 4449
  RD-1050 (257g), 1778 FC-1050 (664g), 122 BB-1050 (327g), 406 / 407
  BL-1050 / 1051 (202 / 252g), 3523 / 3524 FH / HB-1050 (415 / 218g), 3083
  HP-1050 (129g), 3953 PD-1050 (280g), 1404 CN-6130.
- No new rows, no deletes. Out of scope: TL-CN20, SM-DG11 / DG16.

## Shimano "Bicycle System Components — The Complete Line", US edition — printed 12.1986 (disraeligears.co.uk, 28 scans)

- `data_source` 75. Source:
  https://www.disraeligears.co.uk/site/shimano_bicycle_system_components_december_1986.html
  (images `shimano_bicycle_system_components_1987_scan_1..28`). Rear cover
  "(c) Dec. 1986 by Shimano Industrial Co., Ltd. 1286 FC/100M Printed in
  Japan XBC IZM"; front "English (U)". US edition of the 1987 model year
  (the Aug 1986 printing is the European one).
- New vs Aug 1986: Santé (RD-5000, FD-5000-B/F, SL-5000-FCAI, MF-5000),
  New Deore XT M730 (RD, FD -AL/-HS, SL, BR-M730 cantilever, BR-M731
  U-Brake, BL, FH-M730-NT/QR + HB-M730, FC-M730 Biopace II + BB, PD,
  SQ-M730 QR), New Deore MT60 (RD, FD, SL, BR-MT60/MT61, BL), MS series
  (RD-M531-GS, SL-MS55, SL-MS40), Light Action SLR (BR-L490-49, BL-L330 /
  L331), SL-S434, SL-S431, RD-L532-GS, FC-B126 / FC-B124 Biopace, HB-1050
  conventional hubs. Not printed: Deore XT M700, AT 50, FC-7300 / PD-7300,
  FC-6206, FH-6208-R, FH-1050, PD-GX10, PD-MX15, RD-Z505 / Z503, SL-Z408,
  CN-6110 / 6120 / UG20 / 6130. No year_to changes made for those
  (regional edition; weak signal).
- year_from -> 1987: 1810 FC-M730, 2499 FD-M730, 6159 SL-M730, 982
  BR-M731, 1776 FC-B124 (all 1986, absent from both 1986 printings); 7223 /
  7224 BL-L330 / L331 (1988), 1004 BR-L490 (1980), 429 BL-M730 (1980),
  3967 PD-M730 (1980), 6126 SL-MS40 (1988), 6127 SL-MS55 (NULL), 4523
  RD-M531 (NULL), 2496 FD-MT60 (1988).
- Retitled: 4523 "Shimano RD-M531 Light Action SIS" -> "RD-M531-GS, MS
  series (SIS, long cage)"; 6127 "Shimano SL-MS55" -> "SL-MS55, MS
  series"; 6126 "Shimano SL-MS40 Light Action" -> "SL-MS40, MS series";
  6128 "Shimano SL-S434" -> "SL-S434-FCAI, Light Action SIS"; 1004
  "Shimano BR-L490, Light Action" -> "BR-L490-49, Light Action SLR"; 4521
  "RD-L532-SS / RD-L532-SGS" -> "RD-L532-SS / RD-L532-GS / RD-L532-SGS";
  2533 "Shimano FD-5000-F, Sante" -> "FD-5000-B / FD-5000-F, Sante"; 2499
  "Shimano FD-M730, Deore XT" -> "FD-M730 (-AL / -HS), Deore XT"; 2496
  "Shimano FD-MT60-AL, Deore" -> "FD-MT60 (-AL / -HS), Deore"; 3549
  "Shimano FH-M730, Deore XT M730" -> "FH-M730-NT / FH-M730-QR, Deore XT";
  3524 "Shimano HB-1050, 105" -> "HB-1050-R / HB-1050-F, 105".
- Descriptions from the catalogue (measured weights kept) on those rows
  plus 3550, 4534, 6190, 2223, 4491, 981, 982, 429, 3967, 1810, 130, 4487,
  6157, 978, 979, 427, 7223, 7224, 1776.
- New (2 rows, 1987-1987): SL-S431 Light Action SIS stem lever, FC-B126
  Biopace double (LD).
- Left: other Santé rows (BB / BL-5001 / 5002 / BR / FC / HB / HP-5000,
  1988) and 4535 RD-5001-LS not in this edition; MT60 BB / FC / HB / HP /
  PD and FH-MT60 not printed; 5892 SP-M730. Out of scope: SQ-M730 seat
  post QR, DF-M730 chain deflector, tools TL-RD10 / CT10 / FW30 / CN20,
  grease, shoe sets, accessories. No deletes.

## Shimano "Santé — A New Expression in Componentry" launch brochure — printed 12.1986 (disraeligears.co.uk, 12 scans)

- `data_source` 80. Source:
  https://www.disraeligears.co.uk/site/shimano_sante_-_brochure.html
  (images `shimano_sante_-_brochure_scan_1..12`). Rear cover "(c) Dec. 1986
  by Shimano Industrial Co., Ltd. Printed in Japan SHL IZM". Launch of the
  first Santé (5000) for 1987, same month as the Dec 1986 US Complete Line.
  Sold as a boxed set: RD, FD, shift levers, cables, freewheel and narrow
  600EX Uniglide chain (CN-6208). Parts: RD-5000, SL-5000-FCAI, FD-5000-B /
  F, MF-5000.
- No year changes, new rows or deletes. Descriptions rewritten on 4534,
  6190, 2533, 2223 and 7232 (boxed-set note). Conflict recorded on 2223
  MF-5000: the brochure says it fits the standard 126mm 6-speed dropout; the
  Dec 1986 catalogue reading gave 125mm. Both kept.

## Shimano "600 Ultegra" launch brochure — printed 10.1987 (disraeligears.co.uk, 8 scans)

- `data_source` 79. Source:
  https://www.disraeligears.co.uk/site/shimano_600_ultegra_-_brochure.html
  (images `shimano_600_ultegra_-_brochure_scan_1..8`). Rear cover "(c) 1987
  by Shimano Industrial Co., Ltd. 1087 SM/7M Printed in Japan AX IZM";
  front "English (U)". US launch of 600 Ultegra 6400 for 1988, two months
  before the Dec 1987 Complete Line; confirms the 1988 starts already in the
  DB. Parts: RD-6400, SL-6400 (BCAI / FCAI / FCBI / FAI), FD-6400-B / F,
  PD-6400, HB-6400-F / FH-6400-7, HP-6400, FC-6400-BP + BB-6400,
  BR-6400-49 / 57, BL-6400 / 6401 / 6402 (no stem, seat post or chain).
- No year changes, new rows or deletes. Retitled 6144 "Shimano SL-6400-BCAI
  / SL-6400-FCAI, 600 Ultegra SIS (6 / 7sp)" -> "SL-6400 (BCAI / FCAI / FCBI
  / FAI), 600 Ultegra SIS (6 / 7sp)". Descriptions on 13 rows now cite
  "(Oct, Dec 1987)" and add: FH-6400 647g with 7-sp 12-21T sprockets;
  CS-6400-7 spacer widths (3.30 / 3.1mm, 6-sp 3.65mm); BR-6400-57 "normal
  reach"; BL-6400 family 260g pair (brochure) vs BL-6401 328g (Dec 1987),
  both kept; PD-6400 5 deg more clearance; HP-6400 French M25 thread.

## Shimano "Bicycle System Components — The Complete Line", US edition — printed 12.1987 (disraeligears.co.uk, 36 scans)

- `data_source` 76. Source:
  https://www.disraeligears.co.uk/site/shimano_bicycle_system_components_december_1987.html
  (images `shimano_bicycle_system_components_1988_scan_01..36`). Rear cover
  "(c) Dec. 1987 by Shimano Industrial Co., Ltd. 1287 Printed in Japan XBC
  IZM"; front "English (U)". US edition, 1988 model year. First 600 Ultegra
  (6400) and second Santé (RD-5001, FC / BB / FH / HB / BR / BL / HP-5000);
  Exage introduced (intro page only, no parts). 600EX is gone except
  CN-6208. Freehub system page names the cassettes CS-7400-6 / -7,
  CS-5000 / CS-6400-7, CS-6208-6, CS-1000.
- Most rows already started in 1988 (velobase and the Jan 1988 dealer
  pass, `data_source` 48). 600EX rows velobase runs to 1988 (BL-6208,
  MF-6208, HS-6207) were left as they are (regional edition).
- Years: 3958 PD-6400 1980 -> 1988; 4535 RD-5001-LS 1987 -> 1988; 4522
  RD-L541 1987 -> 1988; 1204 CS-7400-7 1980-1980 -> 1987-1988; 3534
  year_to 1988 -> 1991.
- Retitled: 4535 "Shimano RD-5001-LS, Sante" -> "RD-5001 / RD-5001-LS,
  Sante"; 4522 "Shimano RD-L541 GS, Light Action" -> "RD-L541-SS / -GS /
  -SGS"; 4491 "Shimano RD-M730, Deore XT M730" -> "RD-M730-GS /
  RD-M730-SGS, Deore XT"; 7215 "Shimano BR-L570, Light Action" ->
  "BR-L570-57, Light Action SLR"; 966 "Shimano BR-6400, 600 Ultegra" ->
  "BR-6400-49 / BR-6400-57"; 2478 "Shimano FD-6400-B, 600 Ultegra" ->
  "FD-6400-B / FD-6400-F"; 6144 "Shimano SL-6400, 600 Ultegra (7sp)" ->
  "SL-6400-BCAI / SL-6400-FCAI, 600 Ultegra SIS (6 / 7sp)"; 1789 "Shimano
  FC-6400, 600 Ultegra (Biopace)" -> "FC-6400-BP, 600 Ultegra (Biopace
  double, LD type)"; 3958 "Shimano PD-6400, 600EX Ultegra" -> "PD-6400,
  600 Ultegra"; 416 "Shimano BL-6401, 600EX Ultegra" -> "BL-6401, 600
  Ultegra (aero)"; 5889 "Shimano SP-6400-A 600 Ultegra" -> "SP-6400-A, 600
  Ultegra (round A type)"; 5890 "Shimano SP-6400-B 600 Ultegra - Aero" ->
  "SP-6400-B, 600 Ultegra (semi-oval B type)"; 3534 "Shimano FH-6400, 600
  Ultegra" -> "FH-6400-6/7 / HB-6400-F, 600 Ultegra" (override comment
  updated); 3580 "Shimano HB-5000 & FH-5000, Sante" -> "FH-5000 / HB-5000,
  Sante"; 1008 "Shimano BR-5000, Sante" -> "BR-5000-49, Sante"; 7203
  "Shimano FH-MT60, Deore" -> "FH-MT60-NT / FH-MT60-QR, Deore"; 7189
  "Shimano SL-MS41" -> "SL-MS41, MS series"; 7188 "Shimano SL-S441" ->
  "SL-S441, Light Action SIS"; 6128 "SL-S434-FCAI" -> "SL-S434-BCAI /
  SL-S434-FCAI".
- Descriptions from the catalogue (measured weights kept) on those plus
  125, 7217, 417, 4466, 3087, 6675, 1199, 1841, 140, 447, 7216, 3107,
  3971, 7207, 3523, 7218, 1809, 3965, 7228, 7198, 7227, 1204.
- New (4, Cassettes, 1988-1988): CS-7400-6, CS-5000, CS-6208-6, CS-1000.
- Merged/deleted: 3533 "Shimano FH-6400 & HB-6400 600EX Ultegra" (Hubs,
  velobase 1988-1999, 630g pair measured,
  `1E5F0209-4650-4284-B009-14E4658367FA`, no links) -> 3534.
- Left: 1205 / 1207 CS-7400-8 (8-speed, later; 1205's 1980 start is a
  placeholder); 6146 SL-BS50 dated 1980; FC-6400 round (1790); 1788 "6400
  Time Trial"; 1285 "600EX Ultegra" chainring. Out of scope: TL-RD10 /
  FW30 / CT10 / CN20, grease, shoe sets, DF-M730, SQ-M730, accessories.

## Shimano "Bicycle System Components — The Complete Line", US edition — printed 08.1988 (disraeligears.co.uk, 36 scans)

- `data_source` 81. Source:
  https://www.disraeligears.co.uk/site/shimano_bicycle_system_components_august_1988.html
  (images `..._-_scan_1..36`). Rear cover "(c) Aug. 1988 by Shimano
  Industrial Co., Ltd. 1088 Printed in Japan XBC IZM"; front "English (U)".
  1989 model year, full range (the same month's Exage manual is
  `data_source` 78). First Integrated-8 SIS (Dura-Ace RD / SL-7402,
  FH-7402, CS-7400-8), Hyperglide (Deore XT-II M732, Deore II MT62) and
  7-speed 105 (1051). Exage pages show bikes only. Dropped vs Dec 1987:
  Light Action L5xx, Z-Series derailleurs, BR-L490 / L570, BL-L330 / L331,
  SL-S434 (left as is, US edition).
- year_from -> 1989 (DB had 1990-91): 6166 SL-7402, 3561 FH-7402-8, 1205
  CS-7400-8, 992 BR-7402, 436 BL-7402, 3959 PD-6401, 430 BL-M732 / M733
  (now 1989-1992), 5892 SP-M730, 7580 BR-MT63, 425 BL-MT63, 7604 RD-L554,
  7605 RD-R552, 7612 / 7613 FD-Z254 / Z255, 7617 SL-MS52, 7619 SL-S452,
  7573 HB-RM50-F.
- year_to 1988 -> 1989: Dura-Ace 2510, 7231; CN-6208 7232; MF-6208 2218;
  105 6-speed 122, 953, 954, 1778, 3523, 3524; Santé 4535, 6190, 2533,
  2223, 1841, 140, 3580, 1008, 447, 7216, 3107, 7562; Deore XT M730 4491,
  3549, 981, 7198, 7227; Deore MT60 4487, 6157, 2496, 7203, 427, 978, 979.
  4534 RD-5000 stays 1988 (RD-5001 replaced it).
- Retitled: 6160 "Shimano SL-M732, Deore XT M730" -> "SL-M732, Deore
  XT-II"; 4492 "Shimano RD-M732, Deore XT" -> "RD-M732-SGS, Deore XT-II";
  2500 "Shimano FD-M732, Deore XT" -> "FD-M732, Deore XT-II"; 3551
  "Shimano FH-M732, Deore XT M732" -> "FH-M732 / HB-M730-F, Deore XT-II";
  430 "Shimano BL-M733, Deore XT (2-finger)" -> "BL-M732 / BL-M733, Deore
  XT-II"; 4482 "Shimano RD-MT62, Deore II" -> "RD-MT62-SGS, Deore II"; 2490
  "Shimano FD-MT62, Deore II" -> "FD-MT62 (-AL / -HS), Deore II"; 3543
  "Shimano FH-MT62, Deore II" -> "FH-MT62 / HB-MT62-F, Deore II"; 425
  "Shimano BL-MT63, Deore DX" -> "BL-MT63, Deore II / Deore DX (2-finger)";
  7580 "Shimano BR-MT63, Deore DX (U-II)" -> "BR-MT63, Deore II / Deore DX
  (U-II)"; 3965 "Shimano PD-MT60, Deore MT60 Series" -> "PD-MT60 /
  PD-MT61, Deore"; 1820 "Shimano FC-7402 / FC-7402-SG, Dura-Ace" ->
  "FC-7402 / FC-7402-BP / FC-7402-SG, Dura-Ace" (SG is 1990); 6131
  "Shimano SL-1051, 105 (7sp)" -> "SL-1051-BCAI / SL-1051-FCAI, 105 SIS
  (7sp)". Descriptions also on 983, 984 (357g Aug 1988 vs 375g 1990, both
  kept), 4450, 3954, 4505 (205g vs 209g), 3959.
- New (4 rows, 1989-1989): FC-1051-BP / BB-1050, FH-1051-6/7 (105, group
  42); CS-M732, CN-M732 (Deore XT-II, group 98). No deletes.

## Shimano "The New System Component Family for Every Riding Style", Exage dealer sales manual — printed 08.1988 (disraeligears.co.uk, 36 images)

- `data_source` 78. Source:
  https://www.disraeligears.co.uk/site/shimano_-_the_new_system_component_family_for_every_riding_style.html
  (images `..._{front_cover,page_01..34,rear_cover}`). Rear cover imprint
  faint: "(c) Aug. 1988 by Shimano Industrial Co., Ltd. ... Printed in
  Japan XBC IZM". 1989 model year, Exage family only: road Sport LX (A452),
  Exage Sport (A450/451), Action (A350/351), Motion (A250); off-road
  Mountain LX (M452), Exage Mountain (M450/451), Trail (M350/351), Country
  (M250). Line-up charts pp.9-12, specs pp.21-34. First Biopace-HP
  (FC-M452) and Hyperglide (CS-MT62).
- year_to 1988 -> 1989: the Jan 1988 (`data_source` 48) Exage Sport /
  Mountain / Trail rows still listed (4516, 2526, 6180, 1835, 7211, 7219,
  444, 445, 7220, 3573, 3575, 3976, 3106, 7182, 7221, 1833, 7197, 7212,
  7205, 7204, 7229, 7183, 2527, 7222, 7195, 7214, 7230), Sport LX 4536 /
  2534 / 6191 / 1842, CS-1000 7564, MF-Z012 7209, CN-UG20 7450.
- year_from -> 1989: 6178 SL-A250, 1001 BR-A250, 1000 BR-A350, 441
  BL-A351, 7592 BR-M250, 7602 HB-RA50, 7614 CN-UG50 (all 1990 from the
  1990 manual); 4514 RD-A350, 6177 SL-A351, 2524 FD-A351-B (1980-1980
  placeholders -> 1989-1989; Exage Action is not in Jan 1988); 2527
  FD-M350 / M351 (NULL).
- Retitled: 4515 "Shimano RD-A520, Exage Motion" -> "RD-A250, Exage Motion"
  (A520 was a typo); 4524 "Shimano RD-M452 SGS, mountain-LX" -> "RD-M452-GS
  / RD-M452-SGS, Mountain LX"; 2528 "Shimano FD-M452, mountain-LX" ->
  "FD-M452 (-AL / -HS), Mountain LX"; 1836 "Shimano FC-M452, mountain-LX"
  -> "FC-M452, Mountain LX (Biopace-HP triple)"; 6183 "Shimano SL-M453
  Mountain-LX" -> "SL-M453, Mountain LX"; 7182 / 7183 "RD-M450 / RD-M350"
  -> "-GS / -SGS"; 2534 "FD-A452" -> "FD-A452-B"; 2526 "FD-A451, Exage
  Sport" -> "FD-A451-B, Exage Sport (front SIS)"; 6191 "SL-A453, Sport LX"
  -> "SL-A453-BCAI / SL-A453-FCAI, Sport LX (7-speed)"; 6180 "SL-A451" ->
  "SL-A451-FCAI, Exage Sport (front SIS)"; 7211 "BR-A450, Exage Sport" ->
  "BR-A450-49 / BR-A450-57, Exage Sport / Sport LX"; 3573 "FH-A450" ->
  "FH-A450-6/7, Exage Sport / Sport LX"; 3575 "HB-A450" -> "HB-A450-R /
  HB-A450-F"; 7204 "HB-M450" -> "HB-M450-F"; 7221 "BL-M450" -> "BL-M450 /
  BL-M450-B"; 7222 "BL-M350" -> "BL-M350 / BL-M351-B"; 3976 "PD-A450" ->
  "PD-A450-A / PD-A450-B"; 3106 "HP-A450" -> "HP-A450-A / HP-A450-B".
  Descriptions rewritten on 41 rows (measured weights kept).
- New (18 rows, 1989-1989): SL-A452-BCAI / FCAI (Sport LX 6-speed),
  FC-A350, FC-A250, FH-RM50, FD-M451, SL-M451-A / B, SL-M452, BR-M452
  U-brake, FH-M452 / HB-M451-F, CS-MT62, CN-MT62, BL-M451-A, SL-M351-A / B,
  and Exage Country RD-M250-GS / SGS, FD-M250, SL-M250, BL-M250, FC-M250 /
  BB-M250 (no Exage Country group exists; ungrouped).
- Merged/deleted: 4517 "Shimano RD-A350" (bare, 1987-88, Light Action
  group 141, `2A287D28-16E4-4B3F-9EB9-814FFE8490BC`, no links) -> 4514.
- Left: 2457 bare "FD-A350" (1980, may be the non-front-SIS twin of
  FD-A351); 1988-only rows not listed here (7213 BR-M451 U-brake, 7186
  SL-M450, 7184 FD-A450, 6179 SL-A450, 7185 FD-M450) stay ending 1988;
  3574 FH-A451 (1990).

## Shimano "Dealers' 1990 Product Manual" — printed 08.1989 (disraeligears.co.uk, 68 images)

- `data_source` 77. Source:
  https://www.disraeligears.co.uk/site/shimano_-_dealers_1990_product_manual.html
  (images `shimano_-_dealers_1990_product_manual_{front_cover,
  inside_front_cover,contents,page_01..64,rear_cover}`; image page_NN =
  printed page NN). Rear cover "(c) Aug. 1989 by Shimano Industrial Co.,
  Ltd. 0889 Printed in Japan XBC IZM". 1990 model year, spec tables per
  group (Model No. / Specifications / Compatibility / Finish).
- First STI Rapidfire (ST-M090/091, M070/071, M060, M050, M020),
  Hyperglide (CS-HG90/70/50/20, CN-HG90/70/50, MF-HG20), Superglide
  chainrings, Super SLR dual-pivot (BR-1055, BR-A550, BR-A500), Dura-Ace
  8-speed (RD-7402, SL-7402, FH-7402-8 / FH-7403, CS-7400-8 / CS-7401). New
  groups 105 SC, RX100, Deore DX, Deore LX, Exage 500 / 400 / 300EX and
  500 / 400 / 300LX, 200GS. Gone vs 1988: 105 (1050), Santé, M730
  RD / FD / SL, MT60 (except FC-MT60-SG, PD-MT60 in DX), Light Action,
  Exage Sport / Mountain / Trail codes (PD-M450 / M350 continue in LX).
- year_from -> 1990 (velobase 1980 / NULL placeholders or 1991-92 starts):
  3562 FH-7403, 1208 CS-7401, 1205 CS-7400-8, 1414 CN-7401, 3527
  FH-1055 (now 1990-1993), 4532 / 6189 / 1007 / 446 / 3579 RX100, 3977
  PD-A550, 4493 / 4494 RD-M735, 2501 FD-M735, 5892 SP-M730, 1832 FC-A500,
  1807 FC-M550 (1990-1993), 2523 FD-M500, 4511 / 4512 RD-M300, 2521
  FD-M300, 1000 BR-A350, 441 BL-A351, 1195 CS-HG50, 6146 SL-BS50, 6193
  SL-SY20, 3561 (1985 -> 1990). All linked bikes are 1993 and still fit.
  976 BR-M453 year_from 1989 (from the merged 1005).
- year_to -> 1990: 6164, 6165, 7207, 7208, 7561, 1204, 7210, 7196, 7217,
  7189, 6127, 6128, 7188, 1809, 129, 975, 7199, 7200, 1404, 2459, 442.
- Retitled (old titles): 2511 "Shimano FD-7403, Dura-Ace 7400"; 6166
  "Shimano SL-7402, Dura-Ace 7400 (8sp)"; 992 "Shimano BR-7402, Dura-Ace
  7400"; 436 "Shimano BL-7402, Dura-Ace"; 1820 "Shimano FC-7402,
  Dura-Ace" (-> FC-7402 / FC-7402-SG); 3561 "Shimano FH-7402 / HB-7402,
  Dura-Ace 7400 (Uniglide Only)" (-> FH-7402-8); 1208 "Shimano CS-7401,
  Dura-Ace"; 1205 "Shimano CS-7400-8, Dura-Ace 7400 (Uniglide)"; 1414
  "Shimano CN-7401, Dura-Ace 7400"; 2467 "Shimano FD-1055, 105SC"; 6133
  "Shimano SL-1055, 105SC (7sp)"; 960 "Shimano BR-1055, 105SC" (->
  BR-1055-49, dual pivot); 961 "Shimano BR-1055, 105SC (Long version)"
  (-> BR-1055-57); 3527 "Shimano FH-1055 / HB-1055, 105SC"; 2531 / 6189 /
  1007 RX100 FD / SL / BR (variant codes added); 3977 "Shimano PD-A550,
  Light Action" (-> RX100, group 57); 6176 SL-A500; 138 "Shimano BB-A450,
  Exage Sport" (-> "/ Exage EX"); 2522 FD-A400; 6175 "Shimano SL-A400,
  Exage 300EX - 7sp SIS" (-> SL-A400-FCAI / BCAI, 400EX / 300EX); 1000
  "Shimano BR-A350, Exage Action" (-> -49 / -57, Exage Action / 400EX);
  441 "Shimano BL-A351 Exage Action"; 2520 FD-A300; 1001 "Shimano
  BR-A250, Exage Motion"; 442 "Shimano BL-A251 Exage Motion"; 4493 / 4494
  "RD-M735 SGS / SS" (-> -SGS / -SS); 984 / 983 BR-M733 / M732 (type
  added); 6359 "Shimano ST-M071, Deore DX" (-> ST-M070 / ST-M071, Rapidfire);
  4480 / 4481 "RD-M650, Deore DX (SGS) / (SS)"; 975 "Shimano BR-MT62, Deore
  II" (-> Deore II / Deore DX, group 95); 4483 / 4484 "RD-M550 GS / SGS";
  976 "Shimano BR-M453, Deore LX" (-> Deore LX / Exage LX (U-II)); 4511 /
  4512 "RD-M300 GS / SGS"; 1195 "Shimano CS-HG50"; 1202 "Shimano hg90,
  Deore XT M735 Series" (-> CS-HG90, Deore XT / 600 Ultegra); 6146
  "Shimano SL-BS50, 600 Ultegra" (-> SL-BS50 / SL-BS50-8, bar-end); 6193
  "Shimano SL-SY20 , Tourney" (stray space); 2459 "Shimano FD-AX50" (->
  FD-AX50 / FD-AX55); 7199 "PD-M450, Exage Mountain" (-> / 500LX); 7200
  "PD-M350, Exage Trail" (-> / 400LX / 300LX).
- Descriptions rewritten from the manual on about 85 rows (measured weights
  kept).
- New (56 rows, 1990-1990): FH-6401; CN-HG90; CS-HG70; CN-HG70; HP-R500;
  FD-A500, BR-A500, BL-A500, HB-RM50-F, CN-HG50; RD-A400, FC-A400; ST-M090 /
  M091; FC-M730-SG; HP-M735 / M737; BR-MT63; ST-M060, BR-M550, BB-M500,
  PD-M550; ST-M050 / BL-M050, RD-M500, FC-M500; RD-M400, FD-M400, BR-M351,
  FC-M400; BR-M250; 200GS (ST-M020, RD-M200, FD-M200, FD-M201, SL-M200 /
  M201, BR-M200, BL-M200, FC-M200 / M201, CS-HG20, HB-RA50, MF-HG20);
  individual RD-L554, RD-R552, RD-TY20, RD-TY10, FD-TY20, FD-TY25,
  FD-Z260-A, FD-Z261-A, FD-Z254, FD-Z255, CN-UG50, CN-UG30, SL-M301,
  SL-MS52, SL-MY20, SL-S452, SL-S460.
- Merged/deleted: 1211 "Shimano HG90, Ultegra" (Cassettes, 1990, group 59,
  `C73E1C23-CBBB-433B-8093-B74C035B09EF`) -> 1202; 1005 "Shimano BR-M453,
  mountain-LX" (1989, group 142, `52687280-2A5A-4D05-80E3-9F2A89EA126C`)
  -> 976. Neither had links or overrides.
- Left: 6182 "SL-A400, Light Action - non-index" (1980) not touched;
  425 BL-MT63 (velobase, not in manual); 1810 FC-M730 Biopace II kept
  apart from new FC-M730-SG; SL-S434-7 / -6 versions noted only in
  6128's original row (not rewritten); Dura-Ace Track page unchanged;
  out of scope tools TL-HG15 / RD10 / PD40 / FW30 / FC10 / CN20 / CT10 /
  FC30, SQ-M730, DF-M730, accessories.

## Shimano "Bicycle System Components" 1991 dealer manual, European edition — printed 08.1990 (disraeligears.co.uk, 88 images)

- `data_source` 82, label "Shimano Bicycle System Components 1991, European
  edition (printed 08.1990)". Source:
  https://www.disraeligears.co.uk/site/shimano_bicycle_system_component_-_91.html
  (front cover, introduction, contents, page_001..084 = printed pages 1-84,
  rear cover). Rear cover "(c) Aug. 1990 by Shimano Industrial Co., Ltd.
  0890 Printed in Germany XBC IZM", Shimano Europa GmbH plus European
  distributors: European edition, 1991 model year. Groups get individual
  spec pages for road (Dura-Ace, Track, Ultegra, 105SC) and XT / DX / LX;
  RX100, Exage EX / LX, Nexus, 200GS / 100GS and Tourney are spec tables.
- New for 1991 (manual's own lists, p14 / p48): ST-7400 Dual Control (first
  road STI), BR-7403-49 dual pivot, SL-BS50-8; BR-6403-49 / BL-6403 Super
  SLR, FC-6400-SG; PD-M737 SPD (+ SH-M100 shoe), ST-M092 Servo-Wave SLR
  Plus, BR-M734, CN-HG91; BR-M650 / M651 (DX); ST-M050-S 3-finger,
  BR-M352 short-frame rear (Exage LX); BL-M201 / BR-M201 (200GS); 100GS
  group (Europe only); Nexus derailleur road / city group (RD-E700,
  RD-E500-7, FC-E700 / R500, FH-R700 / R500 etc.; not the later hub-gear
  Nexus).
- Not seen vs the 1990 manual (left alone, regional edition): CS-HG20,
  HB-RA50, BL-M050, RD-L554, RD-R552 (only named in a note), RD-TY10,
  FD-Z260-A / Z261-A / Z254 / Z255, CN-UG50 / UG30, SL-M301, SL-S460,
  FD-AX50 / 55, FC-M730 Biopace.
- Catalogue misprints: 300EX table weight line says "SL-A250-FCAI" (lever
  is SL-A400); p48 calls ST-M060 three-finger (p64: 4-finger).
- New groups: `component_group` 312 "Nexus", 313 "100GS" (brand 51,
  1991-1991).
- year_to -> 1991 on 93 rows (all listed rows ending before 1991: Dura-Ace
  FD-7403, SL-7400 / 7401, BR-7402-49, CS-7400-6/7/8, FH-7400, FH-7402-8,
  HB-7400 rows, PD-7401, BB-7600, SS-7600; Ultegra FC-6400-BP, FH-6401,
  PD-6400 / 6401, SL-BS50; BL-1055, BR-1055; PD-A550; Exage EX; XT / DX /
  LX carry-overs; all Exage LX, 200GS and Tourney rows; HG chains /
  cassettes, CS-1000, HP-R500). 985 BR-M734 year_from 1993 -> 1991.
- Retitled (old titles): 993 "Shimano BR-7403 SLR-S, Dura-Ace"; 967
  "Shimano BR-6403, 600 Ultegra"; 418 "Shimano BL-6403, 600 Ultegra"; 6365
  "Shimano ST-7400, Dura-Ace 7400"; 3562 "Shimano FH-7403 / HB-7400,
  Dura-Ace 7400 (Hyperglide Rear)"; 7565 "Shimano FH-6401, 600 Ultegra
  (7-speed HG)"; 3527 "Shimano FH-1055 / HB-1055-F, 105SC"; 3579 "Shimano
  HB-A550 / FH-A550, RX100"; 3572 "Shimano FH-HG50, Exage 500EX"; 3542
  "Shimano FH-M650 / HB-M650, Deore DX"; 3545 "Shimano HB-M550, Deore LX";
  1789 "Shimano FC-6400-BP, 600 Ultegra (Biopace double, LD type)" (-> also
  FC-6400-SG); 1782 "Shimano FC-1055, 105SC"; 1838 "Shimano FC-A550,
  RX100"; 1832 "Shimano FC-A500, Exage 500EX"; 7576 "Shimano FC-A400,
  Exage 400EX"; 1807 "Shimano FC-M550, Deore LX" (BB now BB-M550); 7587 /
  7591 / 1831 FC-M500 / M400 / M300 (-> -SG); 7600 "Shimano FC-M200 /
  FC-M201, 200GS"; 1809 "Shimano FC-MT60, Deore MT60 Series"; 7577
  "Shimano ST-M090 / ST-M091, Deore XT Rapidfire" (+ ST-M092); 7585
  "Shimano ST-M050 / BL-M050, Exage 500LX Rapidfire" (-> ST-M050 /
  ST-M050-S); 7590 "Shimano BR-M351, Exage 400LX (cantilever)" (+ BR-M352);
  7598 "Shimano BR-M200, 200GS (cantilever)" (+ BR-M201); 7599 "Shimano
  BL-M200, 200GS" (+ BL-M201); 6183 "Shimano SL-M453, Mountain LX"; 7632
  "Shimano BL-M451-A, Mountain LX / Exage Mountain"; 7637 "Shimano
  BL-M250, Exage Country"; 7222 "Shimano BL-M350 / BL-M351-B, Exage
  Trail"; 426 "Shimano BL-MT62, Deore II (4-finger)"; 2520 "Shimano
  FD-A300-B / FD-A300-A, 300EX"; 7209 "Shimano MF-Z012, Z-Series".
  Descriptions rewritten on these plus 985, 129, 442.
- New (24 rows, 1991-1991): Nexus RD-E700, RD-E500-7, FD-E700-B / F,
  SL-E500-7, SL-E700-7, BR-E700 / R500 (+ -L), BL-E700-EM / NL / BL-R500,
  FC-E700 / R500 (W / S), FH-R700 / R500, PD-M400; 100GS RD-M100-GS,
  FD-M100-B, ST-M010, SL-M100, BR-M100, BL-M101, FC-M100-SG; BR-M650,
  BR-M651, SL-M300-B / C, BB-M550, BB-UN10 (no group), CN-HG91, PD-M737.
- Deleted: 1207 "Shimano CS-7400-8, Dura-Ace 7400 (Uniglide)" (Cassettes,
  1993-1994, velobase, `C0B6F642-AD17-4F0E-B30F-68FCC49751E3`), bare
  duplicate of 1205; 443 "Shimano BL-A251 & BL-A25, Exage Motion w/
  extension lever" (Brake Levers, 1989-1990, velobase,
  `FDE17763-A1AB-4E33-B0D2-52CB9CFA0C27`), merged into 442 (extension lever
  option noted). Neither had links or overrides.
- Left: 1790 FC-6400 (generic, linked); 1839 FC-A550 white, 1840 FC-A550-T;
  6355 ST-R500; 1810 FC-M730 Biopace; override at line 660 still picks 993
  BR-7403 from 1990 although the brake is 1991 (no 1990 bikes affected yet).
  Out of scope: shoes SH-M100 / R100 / T100, SH-CV10, SQ-M730, DF-M730,
  SM-CS50 / ST74 / SP55 / MT55, tools.

## Shimano "'92 Shimano Bicycle System Component — Dealers' Product Manual", English (GB) — printed 08.1991 (disraeligears.co.uk, 108 images)

- `data_source` 83, label "Shimano Bicycle System Component 1992 Dealers
  Product Manual, European edition (printed 08.1991)". Source:
  https://www.disraeligears.co.uk/site/shimano_bicycle_system_component_-_92.html
  (front cover, inside front cover = new products, contents, page_001..104
  = printed pages, rear cover). Rear cover "(c) Aug. 1991 Shimano Inc. 0891
  Printed in Germany", Shimano Europa + European distributors: 1992 model
  year. XT / DX / LX / Dura-Ace / Ultegra / 105SC have spec pages; Exage
  LX, GS, RX100, Exage EX, CX and Youth are tables.
- New for 1992: XTR M900 group; 600 Ultegra STI 8-speed (ST-6400,
  FH-6402-HG, RD-6401, FD-6401, SL-6401-FCAI, SL-BS64-8, CS-HG90-8,
  PD-6402); 70GS; Exage 500CX / 200CX hybrid; Youth Package; Rapidfire
  Plus (ST-M900-8, ST-M095); top-pull FD-M901 / M736 / M651 / M301;
  cartridge BBs BB-UN90 / UN70 / UN50 / CS20 / CS10; SPD PD-M525 and
  PD-A525; SP-M650; HP-R501; BR-C510-B; BR-M501 / M502; RX100 triple
  (RD-A550-GS, FD-A553-GS, SL-A550-T, FC-A550-T); FC-M202 / M102;
  FH-7463-HG; FC-A300-BP; BB-A200 / BB-M200.
- Not seen vs 1991 (left at year_to 1991): Dura-Ace SL-7400 6sp,
  CS-7400-6/7/8 Uniglide, MF-7400, HB-7400-R freewheel hub, BR-7402-49;
  ST-M091; BR-M732; BB-M730 / BB-MT60; ST-M050 4-finger, BR-M454,
  BR-M550, BR-M250, BL-M451-A, BL-M350-B, BL-M250-C, SL-M453, SL-M300-B /
  C, BB-M500; FD-M200-B, FC-M200 / M201, FC-M100-SG; FH-6400-6/7; all
  Nexus and Tourney (FD-TY20 only as Youth FD-TY20-S); BB-UN10, BB-A450,
  CS-1000.
- New groups: 314 "70GS", 315 "Exage 500CX", 316 "200CX", 317 "Youth
  Package" (brand 51, 1992).
- year_to -> 1992 on 82 rows (all re-listed rows ending 1991, plus 7614
  CN-UG50 from 1990 and 7628 BR-M452 from 1989). 1848 FC-M900 (velobase
  1990-1990) and 3581 FH-M900 (NULL) -> 1992-1992; 3951 PD-A525 year_from
  1993 -> 1992; 3563 FH-7463 year_to 1990 -> 1992.
- Retitled (old titles): 2540 "Shimano FC-M901, XTR M900" (Front
  Derailleurs row; -> FD-M901 top-pull); 142 "Shimano BB UN-90"; 3108
  "Shimano HP-M900, XTR M900"; 6358 "Shimano ST-6400, 600EX Ultegra"; 3960
  "Shimano PD-6402, 600EX Ultegra"; 6145 "Shimano SL-6401, 600 Ultegra
  (8sp)"; 3535 "Shimano FH-6402, 600 Ultegra"; 2479 "Shimano FD-6401, 600
  Ultegra"; 3563 "Shimano FH-7463, Dura-Ace 7400"; 2532 "Shimano FD-A553,
  RX100"; 4532 "Shimano RD-A550, RX100"; 1830 "Shimano FC-A300, 300EX";
  6362 "Shimano ST-M095, Deore XT M735 Series"; 2502 "Shimano FD-M736,
  Deore XT"; 2489 "Shimano FD-M651, Deore DX"; 7581 "Shimano ST-M060, Deore
  LX Rapidfire"; 7599 "Shimano BL-M200 / BL-M201, 200GS"; 7628 "Shimano
  BR-M452, Exage Mountain (U-brake)". Descriptions also rewritten on 2541,
  1018, 1848, 3581, 3582, 4542, 4467, 1840, 6189, 3951.
- New (38 rows, 1992-1992): ST-M900-8, CS-M900-8, SP-M900; SL-BS64-8,
  CS-HG90-8; BB-UN70, SP-M650, BB-UN50, PD-M525; HP-R501, BB-CS20, BB-CS10,
  BB-A200 (no group); BR-M501 / M502, FD-M301; FC-M202-SG / CG, BB-M200,
  FC-M102-SG / CG; 70GS RD-TY70, FD-TY70-B, ST-M007 / -W, SL-TY70, BR-TY70,
  BL-TY70 / -S, FC-TY70; 500CX RD-M500-C-SGS, FD-M500-C, ST-M050-C, BR-C510
  / C510-B, FC-M500-C-SG; 200CX RD-M200-C-SGS, FD-M202-C, ST-M020-C,
  BR-C200 / C200-B, BL-M201-C, FC-M202-C; Youth FD-TY20-S, FC-M100-W.
- No deletes. Left: 1416 CN-M981 XTR (later era).
- Links fixed: overrides 'shimano xtr top pull dual sis' 2541 -> 2540
  FD-M901 and 'shimano deore dx top pull dual sis' 2487 -> 2489 FD-M651
  (top-pull versions); bike_spec 1611 and 1628 (both 1993) repointed.
  Out of scope: shoes SH-R200 / R110 / T110 / M200 / M100 / M050 / M030 /
  A100, SM-SH24 / SH50 / SH55, SM-PD20 / PD30, SQ-M900 / M730, DF-M730,
  SM-SP / MT cable guides, FE-SF25, tools.

## Shimano "'93 Shimano Bicycle System Components", English (E) — printed 07.1992 (disraeligears.co.uk, 96 images)

- `data_source` 84, label "Shimano Bicycle System Components 1993, European
  edition (printed 07.1992)". Source:
  https://www.disraeligears.co.uk/site/shimano_bicycle_system_components_-_93.html
  (images page_001..096; page_001 = front cover, image page N = printed
  page N). Rear cover "Jul. 1992 Shimano Inc., 0792 Printed in Germany XBC
  IZM", Shimano Europa + European distributors: 1993 model year. Spec pages
  for XTR / XT / DX / LX / Dura-Ace / Track / Ultegra / 105SC; tables for
  Exage ES / LT, Altus A10 / A20 / C10 / C20, Tourney TY20 / TY15, 700CX /
  400CX, RX100.
- New for 1993: Dual SIS (front SIS) with SG-X cranks (FC-M900-A,
  FC-M730-A, FC-MT60-A, FC-M560, FC-M520, FC-M320, FC-AT10 / AT20, FC-CT10 /
  CT20, FC-TY21, FC-1056, FC-C700 / C400); M-System brakes (BR-M734-M,
  BR-M650-M / M651-M and all new cantilevers); Deore LX M560 (black);
  Exage ES (M520) and LT (M320); Altus A10 / A20 / C10 / C20; Tourney TY20
  / TY15 series; 700CX / 400CX hybrids (11-21T CS-HG70-C); 105SC STI
  (ST-1055, RD-1056, FD-1056, SL-1056, FH-1056-HG, CS-HG70-8); ST-M075;
  PD-7410 road SPD; BB-UN91 / UN71 / UN51 / LP10 / LP20 / LP30 / CS21 /
  CS11; MF-Z015; SL-BS50-7.
- Not seen vs 1992 (left at year_to 1992 or earlier): Deore LX M550 (RD /
  FD / FC / FH / HB-M550, ST-M060-S, BR-C510-B, BB-UN50); all Exage LX,
  Exage EX, 200GS / 100GS / 70GS, 500CX / 200CX, Youth Package; BB-UN70,
  BB-CS20 / CS10 / M200 / M550; Dura-Ace SL-7401, FH-7402-8, FH-7400-7/6,
  BB-7400; Ultegra SL-6400, FH-6401-HG, CS-6400-6/7; RD / FD / FC-1055.
  Misprints: PD-MT60 shown 212g (412g elsewhere); SL-MY21 printed twice (Dual
  SIS and 6-speed versions).
- New groups: 318 "Exage ES", 319 "Exage LT" (brand 51, 1993). Altus rows
  use existing ALTUS 183, Tourney 144, 700CX 221, 400CX 157, Deore LX M560
  135. 1002 BR-M520 and 1834 FC-M520 moved from Exage Mountain (139) to
  Exage ES; 2224 MF-Z015 from Z-Series (103) to Tourney.
- year_to -> 1993 on 63 rows (all re-listed rows ending 1992; Tourney 7606
  RD-TY20, 7608 FD-TY20, 7609 FD-TY25 from 1991). Placeholders: 1834
  FC-M520, 1808 FC-M560, 6360 ST-M075, 2471 FD-C400 (velobase 1990-1990)
  and 3546 FH-M560 (NULL) -> 1993-1993; year_from -> 1993 on 2492 FD-M561
  (was 1992), 6357 ST-1055 (1992), 2537 FD-TY15 (1995), 2224 MF-Z015 (2000).
- Retitled (old titles): 1848 "Shimano FC-M900, XTR M900"; 7578 "Shimano
  FC-M730-SG, Deore XT (SG triple)"; 1809 "Shimano FC-MT60 / FC-MT60-SG,
  Deore / Deore DX"; 985 "Shimano BR-M734, Deore XT"; 7660 "Shimano
  BR-M650, Deore DX (cantilever)"; 7661 "Shimano BR-M651, Deore DX
  (low-profile cantilever)"; 6360 "Shimano ST-M075, Deore DX M650 Series";
  977 "Shimano BR-M560, Deore LX"; 4485 "Shimano RD-M560, Deore LX"; 1808
  "Shimano FC-M560, Deore LX M560 Series"; 3546 "Shimano FH-M560, Deore LX
  M560"; 2492 "Shimano FD-M561, Deore LX"; 1002 "Shimano BR-M520, Exage
  ES"; 1834 "Shimano FC-M520, Exage Mountain"; 2471 "Shimano FD-C400,
  400CX"; 2482 "Shimano FD-C700, 700CX"; 2468 "Shimano FD-1056, 105SC";
  6135 "Shimano SL-1056, 105SC (8sp)"; 6357 "Shimano ST-1055, 105SC"; 3972
  "Shimano PD-7410 SPD, Dura Ace 7410"; 6146 "Shimano SL-BS50 / SL-BS50-8,
  bar-end"; 2537 "Shimano FD-TY15, Tourney"; 2224 "Shimano MF-Z015,
  Z-Series". Descriptions also rewritten on 4473 RD-C700, 1783 FC-1056,
  4456 RD-1056.
- New (58 rows, 1993-1993): BB-UN91, BB-UN71, BB-UN51; ST-M560, FD-M560,
  HB-M560-F; Exage ES RD-M520, FD-M520 / M521, ST-M520; Exage LT RD-M320,
  FD-M320 / M321, ST-M320, BR-M320 / M321, FC-M320, BB-LP20 / LP30; Altus
  A10 (RD, FD-AT10 / AT11, ST, BR-AT10 / AT11, FC, BB-LP10), A20 (RD, FD,
  ST, BR-AT20 / AT21, FC), C10 (RD, FD, ST-CT10 / CT15, BL, BR-CT10 / CT11,
  FC, BB-CS21 / CS11), C20 (RD-CT20-GS, FD, ST-CT20 / SL-CT20, BL, BR-CT20
  / CT21, FC); Tourney FD-TY21-GS, SL-MY21, BL-TY20, BR-TY20 / TY21,
  FC-TY20 / TY21, RD-TY15, SL-MY15; 700CX ST-C070, BR-C700 / C701,
  FC-C700, FH-C070 / HB-C700, CS-HG70-C; 400CX RD-C400, ST-C040, BR-C400 /
  C401, FC-C400, FH-C040 / HB-C400; FH-1056-HG, CS-HG70-8.
- No deletes. BB-UN90 (142) kept separate from new BB-UN91. Left: 4457
  RD-1056-GS (velobase, not in manual), 6361 ST-M567 (velobase 1990,
  unknown), 133 BB-7410.
- 1993 bike links fixed (wrong-era rows): bike_spec 1517 Ultegra hubs 3534
  FH-6400-6/7 -> 3535 FH-6402-HG; 1440 Dura-Ace headset 3100 HP-7410 (1994+)
  -> 3099 HP-7400; 1448 Dura-Ace seat post 5895 SP-7410 (1994+) -> 5893
  SP-7400-A. Overrides 'shimano ultegra' (hubs), 'shimano dura ace'
  (headsets, seat posts) now year-ranged.
- 1993 Bianchi regenerated (2026-10-02): 49 NULL links back-filled (13 HG
  chains plus 36 via new overrides for Exage ES / LT, Altus AT10 / CT10 /
  CT20, Deore DX M-System / crankset, PD-M737, PD-A550, CS-M900-8); linked
  118 -> 167 of 408. Left unlinked: generic "Shimano Hyperglide 7-speed"
  cassettes, "Shimano" hubs, "Shimano SPD", "HG chain", AT10-X (not in the
  European manual), EX300 aero levers.
- Out of scope: shoes SH-R210 / R110 / T110 / M200 / M110 / M051 / M030 /
  A100 / A050, SH-CV20, SM-SH24 / 30 / 50 / 55 / 70 / 71, SM-PD20 / PD30,
  SQ-M900 / M730, DF-M730, cable guides / stoppers / cable boxes, FE-SF25,
  tools TL-UN72 / HG15 / CT10 / CN21 / WR38 / FC30 / FC10 / PD40 / PD73.

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

## Simplex "Dérailleurs - spécialités" catalogue (24 images, September 1981, via disraeligears.co.uk)

- `data_source` 58. Source:
  https://www.disraeligears.co.uk/site/simplex_-_derailleurs_specialites_1981.html
  (images `00_main_images/simplex_-_derailleurs_specialites_1981_*_main_image.jpg`:
  front_cover, inside_front_cover, page_1..page_20, inside_rear_cover,
  rear_cover; printed page N = page_N). Dated by "Printed in France -
  09-1981 - Imp. Gougenheim-Lyon" on the contents page. Eight months
  after the January 1981 poster, same printer. The most complete Simplex
  spec catalogue: every model has a weight, capacity and max sprocket,
  and P/SP options are given with their own weights.
- **Key finding: SX610's old "version 1/version 2" weights were P vs
  SP.** Here SX610 T/P is 311g and T/SP 275g; GT/P 332g and GT/SP 296g.
  That confirms the follow-up merges 4630 -> 4631 and 4628 -> 4629.
- **The 1984 catalogue's "/P" weights are SP weights on some rows:**
  SX410 "T/P" 279g, SX610 "T/P" 275g and SJ810 "GT/P" 296g all match this
  catalogue's SP versions. It isn't systematic (1984's SX410 GT/P 336g and
  SX610 GT/P 332g are correct P weights), so notes were appended to 4621,
  4614 and 4631 rather than rewriting the 1984 labels.
- **SP 3959 settles the 21.2mm twin stem lever:** printed SP 3959 here
  (and S 3959 in 1978), so the January 1981 poster's "SP 3599" was a
  misprint. 7290's "3599 for 21.2mm" was corrected to "3959 for 21.2mm
  (Jan 1981 poster misprint 3599)".
- vs January 1981: new are SX610 T/GT, S061 (with T/SP 251g), SJ A222/223
  and SLJ A422/423 with CX options, the renumbered SLJ 505x levers
  (lighter than the 500x they replace: 5055 51g vs 5005 54g, 5058 35g vs
  5008 38g), and SX P 4562/4563 and 4503/4506. Gone are SX100 T, SLJ6000
  T/GT and SLJ5000 (DB year_to values already at or below 1981).
- year_from moved down to 1981: 2575 SJ A222, 2576 SJ A223, 7263 SLJ
  A422, 7264 SLJ A423, 7322 SXP 4503, 7323 SLJ5068. Each got a short "Sep
  1981" note.
- Enriched: 4631 SX610 T, 4629 SX610 GT (answers its "version pictured
  unconfirmed" note), 4616 S061 T (first SP weight), 4620 SX410 GT, 4658
  SX110 T, 6240 SLJ 4th type (SLJ 5057 twin 88g confirmed), plus the
  1984-label notes on 4621/4614.
- New (7341-7344, 1981-1981): SLJ5055, SLJ5058, SXP 4562, SXP 4563. The
  SLJ 5057 twin needed no new row (6240 holds the ref).
- Left unresolved: 4615 S0 is at 233/255 chars, so this catalogue's S0/P
  figures (250g, 28t/28t, vs January's 246g, 26t/28t) weren't added.
  No deletes, and no bike-linked rows changed years.

## Simplex "Derailleurs" catalogue, English edition (6 scans, July 1978, via disraeligears.co.uk)

- `data_source` 57. Source:
  https://www.disraeligears.co.uk/site/simplex_-_derailleurs_1978.html
  (images `00_main_images/simplex_-_derailleurs_1978_scan_N_main_image.jpg`,
  N = 1-6; scans 2-4 and 5-6 are two spreads). Dated by the imprint
  "Printed in France - 07-1978 - Imp. Gougenheim - Lyon". The earliest
  dated Simplex source for the 1970s-80s range.
- Spec catalogue, items numbered 1-68: weights, capacities, tube sizes,
  model refs. Its own key: P = "fit rear fork end without hanger", SP =
  "with hanger" (frame meaning, as in the 1981 poster). It also notes the
  C.P.S.C.-compliant 5mm allen cable-grab screw 4082 on all rear mechs.
- vs September 1979: here but gone by 1979 are SX A12 (25.4mm), SX
  A42/A43, LJ A302/A303, LJ A322/A323, the S stem levers sold as
  S3956/S3958, the dural SX3612-3614 levers, and DP213/215. Not yet here:
  SLJ5500, SLJ5001, SLJ6600, SX A52/53, SJ A102/103, which supports their
  1979 starts. SLJ5000 is still current with CP/T/GT cages.
- year_from moved down to 1978 (26 rows): 7306/7307 DP210/211, 7281-7284
  SLJ A502/503/522/523, 7279 SX A23, 7277 SLJ6000 GT, 7305 SLJ4164,
  7285-7288 S3950/3951/3952/S2954, 7289/7290 SP3510/3511, 7294-7296
  LJ4010/4012/4084, 7297-7299 SLJ5005/5007/5008, 7300-7303 SXP
  4189/4190 and SXP-L 4191/4192, 7304 SLJ2615. Most also got short
  "1978 catalog:" notes (silver/gold options, "without click" vs "luxe",
  SLJ4164's 188mm/193g).
- 7289/7290 SP3510/SP3511 were sold in 1978 as S 3956/3957/3510 and S
  3958/3959/3511 (same part numbers, S prefix), noted on each. Two
  corrections there:
  - Lever material: the 1981 pass wrote "light alloy lever", but the
    poster's shared Series S/SP header says "lever member Zytel" and 1978
    says Delrin. Replaced with "Zytel lever".
  - The 21.2mm twin is "SP 3599" in the 1981 poster (7290 already said so)
    and "S 3959" in 1978. Both kept at the time; the September 1981
    catalogue later showed SP 3959, so 3599 was a poster misprint (see
    that section).
- Enriched only (years already covered 1978): 4615 S0 (243g, 25t, P
  only), 4647 S001 T, 4657 SX100 T, 4658 SX110 T, 4621 SX410 T (T/P 311g;
  the 1981 poster says 315g), 4614 SJ810 GT (GT/P 330g), 4646/4600 LJ1000
  CP/T (245g), 4603/7278 LJ4000 CP v2/T v2 (177g), 4650 SLJ5000 (230g,
  all three cages' capacities), 2567 LJ A302. The 1978 catalogue prints
  one weight per CP/T pair (items 8 and 9), so the LJ1000 and LJ4000
  notes say "(one figure for CP and T)"; the first pass had appended it
  as if it were model-specific.
- New (14 rows, 7327-7340, all 1978-1978): front SX A12, SX A42, SX A43,
  LJ A303, LJ A322, LJ A323; shifters SX3612, SX3613, SX3614, LJ4001
  (LH double clip, missing from the 1981 LJ set), SLJ5006 (LH double
  clip, likewise); chainrings DP213/DP215 (5-pin, 28-50t); seat post
  4160 (all dural, not fluted, 197g; no unnumbered DB seat post matches).
- No deletes. Rows with bike links (2567, 2577, 2586, 4621, 4657) already
  covered 1978, so no override years were affected.
- Out of scope: QR SLJ/SX 3607, demultiplicator 3637L, cable clips and
  tunnels, dropouts, seat bolt 3649A, chainguards C1 A/C2 A, tensioners
  T 232/234, spoke disc. Item 53 prints "SLJ 4146 A (240 mm)", a likely
  misprint for SLJ 4164 A.

## Simplex "Dérailleurs - Pièces Détachées" parts book (20 pages, September 1979, via disraeligears.co.uk)

- `data_source` 56. Source:
  https://www.disraeligears.co.uk/site/simplex_derailleurs_-_pieces_detachees_1979.html
  (images `00_main_images/..._front_cover_main_image.jpg` and
  `..._page_N_main_image.jpg`, N = 2-20; PDF page N = printed page N).
  Dated by the page-20 imprint "Nouvelle Imprimerie Dijonnaise. Printed
  in France. Septembre 1979". The earliest dated Simplex source we have
  for the 1970s-80s range.
- Exploded parts diagrams only: no weights, capacities or prices. Its
  evidence is which model refs and P/SP/CP/T/GT variants existed by
  September 1979. Sub-part numbers were not ingested.
- Range shown: rear S0, S001, SX100 (T/P only), SX110, SX410 T/GT, SX810,
  SJ810 GT, LJ1000 CP/T, LJ4000 CP/T, SLJ5001 CP/T/GT, SLJ5500 CP/T/GT,
  SLJ6000 T/GT; front SA02/12, SX A22/23/52/53, SJ A102/103, SLJ
  A502/503/522/523; shifters "Manettes" S/SJ/LJ/SLJ families (no model
  refs, so they can't pin a row), SXP 4189/4190, SXP-L 4191/4192, SLJ2615;
  DP210/211 chainrings; SX 1500 and SLJ4164/4164A seat posts. Out of
  scope: T 232/234 chain tensioners, relay 3637L, SLJ/SX 3607 QR, tunnels
  4123/4124, dropouts, chainguards C1/C2.
- vs the January 1981 poster: SLJ5001 and S0 are here but SLJ6600 and the
  numbered S/SJ/SLJ shifter refs aren't; SX100 GT is in neither.
- year_from moved down to 1979 (the book predates the 1980/1981 starts the
  poster passes gave them): 7279 SX A23, 7280 SX A53, 7281 SLJ A502, 7282
  SLJ A503, 7283 SLJ A522, 7284 SLJ A523, 7300/7301 SXP 4189/4190,
  7302/7303 SXP-L 4191/4192, 7304 SLJ2615, 7306/7307 DP210/211, 7305
  SLJ4164, 5901 SX 1500, 7310 SLJ5500 T, 7311 SLJ5500 GT/SP, 7277 SLJ6000
  GT. 7306/7307 enriched with the interchangeable-ring refs by tooth count
  and the 992b 5-arm spider; 7305 with the 1979 shaft lengths (4163 195mm
  / 4163A 247mm, vs 190/240mm in 1981).
- 4615 "SO" (1970-1970, bare) retitled "Simplex S0" (digit zero, as in
  S001/S005/S007) and extended to 1981, enriched with this book's S0/P
  and S0/SP and the 1981 poster's panel-2 specs (S0/P 246g, S0/SP 216g,
  S0 E/P 246g). The 1981 year_to comes from the poster, which the 1981
  pass had missed for this row.
- New: 7324-7326 SLJ5001 CP / T / GT (1979-1979, Super LJ group). They
  share body 3936 and pivot bolts with the SLJ5000 line (4650, 1971-78),
  while SLJ5500 uses body 4416, so they're read as the last SLJ5000
  update rather than a new line. Kept as separate rows rather than
  folded into 4650.
- Merged/deleted: 2592 "Super LJ 503 (triple; first version)" (velobase,
  bare, undated, `86E493E0-2A15-4108-A63E-8196137F5684`) -> 7282 SLJ
  A503, which took its Super LJ group and an "aka Super LJ 503 (triple)"
  note. Same pattern as the 2593/2594 -> 7284 merge.
- Left alone: 4618 SX100 GT (1975-81, velobase) is absent from both this
  book and the 1981 poster (both show SX100 T/P only), which is weak
  evidence on its own. 2589 "Super LJ" (bare, generic) is too generic to
  map.
- The override comment on `'simplex sx 410 tsp'` ("TSP variant not in
  DB") is still right: this book shows SX 410 T/SP, but P/SP pairs share
  one row (4621).

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

## Simplex catalogue (20 pages, 1989, via disraeligears.co.uk)

- `data_source` 59. Source:
  https://www.disraeligears.co.uk/site/simplex_-_catalogue_1989.html
  (images `00_main_images/simplex_-_catalogue_1989_page_N_main_image.jpg`,
  N = 1-20; printed page N = page_N, pages 2 and 19 blank). Dated by the
  page-18 imprint "Photos: Christian Morel - Garnier imprimeur conseil -
  Dijon/France - 1989". Trilingual FR/EN/DE. The company had moved to
  Marsannay-la-Côte. First Simplex catalogue with 5-digit ordering refs
  (10071, 11402...) alongside model names. All rear mechs are usable
  non-indexed (3-7 speed) or indexed (5-6, or 5-7 on the slant
  parallelograms).
- vs 1984: the range is almost entirely replaced (no Bronze/Silver/Gold
  tiers, no SX410/610/630, S061, SLJ5500/6600, SLJ A fronts, SX 88xx, SP
  246x). Carried over: SX A32/A33 (A33 now 20t capacity, was 24t),
  SJ6320/6321, SJ6311, SLJ5068/5069, SLJ6164. MB2700/2701 replace the
  1984 MB2600/2601.
- year_to moved to 1989: 2578 SX A32, 7312 SX A33, 7319 SJ6320, 7323
  SLJ5068, 5904 SLJ 6164. year_from moved down to 1989: 4561 Alpha T,
  4569 Fun Bike SX GT, 2549 "Simplex 302" (the catalogue's SJ A302,
  Vallée set, 125g; noted, not retitled).
- Enriched (refs/weights/capacity appended): the above plus 4570 S002 T
  (T/SP 11402, GT/SP 11403), 4564 Vallee (T/SP 10111, 271g), 4565 SX
  Foret GT (GT/SP 10116, 313g), 6212 SJ 2nd type (SJ6311 chrome 11353),
  2579 SX A32 white (10502).
- New (18 rows, 7349-7366, all 1989-1989): rear SX650 (Touring, 300g);
  front SX A202, SX A203, SJ A303, SJ A Fun Bike; shifters SX5810,
  SX5811, SX5820, SXP5803, SXP5806 (SX 58 series, acetal), SJ6310 (SJ 63
  chrome collar), MB2700, SX Index (one row listing the colour/fitting
  refs), IR8020, ERGO 2900 (left-hand refs folded into the right-hand
  rows); Wheel(sets) Free Style Mod 300 / Mod 400; Freewheels "5/6-speed
  index freewheel" (5.45mm pitch, no model name in the catalogue).
- Retitled (follow-up): 4564 "Vallee" -> "SX Vallee T", the catalogue's
  SX Vallée T/SP, to match 4565 "SX Foret GT" / 4568 "SX Foret T"
  (accents dropped as in those rows).
- Added (follow-up): 7367 "Simplex S002 GT" (GT/SP 11403, 270g, 38t,
  max 32t), giving the long cage its own row per the T/GT convention. It
  had only been mentioned inside 4570 S002 T's description, which was
  left as is. Dated 1989-1990; the 1990 year_to follows 4570, whose
  velobase text also covers the GT version.
- Merged/deleted (the catalogue shows one Alpha T sold in three colours
  and one SX Forêt GT, so the bare velobase "version" rows weren't
  independently attested):
  - 4562 "Alpha T (version 2)" (bare, 1990,
    `05F54A27-064B-484C-A00E-86889E77909F`) and 4563 "Alpha T (version
    3)" (bare, 1990, `E41C2843-A92D-4B08-B4DA-8D29849ACBCD`) -> 4561,
    retitled "Simplex Alpha T", now 1989-1995.
  - 4566 "SX Foret GT (version 2)" (1990, 315g,
    `F7030D7D-730B-460F-9F47-5A298518ACCA`) and 4567 "SX Foret GT
    (version 3)" (bare, 1990, `9163A732-22B9-4C5F-94D7-D2652ECDDF32`) ->
    4565, retitled "Simplex SX Foret GT", now 1989-1990.
- Left alone: 4568 SX Foret T (1990; the catalogue shows only GT), 2582
  "Simplex Alpha" front (bare, undated; no Alpha front in this
  catalogue), the 651 rows and the 6219-6221 Alpha shifters (1990s). The
  chain on page 12 has no model name and was not added. Out of scope:
  bosses 5482/4294, collars 3604/3594/2112, cable guide 5244, gear guard
  5799, seat-post QR 11099 and bolt 3649, and the page-15 spare parts
  (hanger plates 5122/150 and 46000/150, pulley 2648/150, Fun Bike pivot
  2551/122, Alpha index adjuster 11400/000).

## Simplex "Loisirs... détente" catalogue (20 pages, September 1984)

- `data_source` 55. Source: `~/Downloads/Simplex/scan0001-0020.jpg`
  (printed page N = scan(N-1) for pages 6-19, e.g. page 7 = scan0006);
  complete copy at
  https://www.disraeligears.co.uk/site/simplex_-_loisirs_detente_1984.html
  (images `..._loisirs_detente_1984_{front_cover,inside_front_cover,page_1..20,inside_rear_cover,rear_cover}_main_image.jpg`).
  Dated by the rear-cover edge imprint "Conception et réalisation
  Gougenheim imprimerie publicité Lyon - Printed in France 09/84". The
  local scan clipped it and was first misread as "1?/84"; the
  disraeligears copy shows it in full. Corroborated by the president's
  foreword ("By 1984..."). Bilingual FR/EN spec-sheet catalogue organised
  by range: Bronze, Silver Sport/Touring/"Mountain Bike", Gold
  Racing/Touring, plus QR/seat posts, braze-ons and dropouts (out of
  scope).
- Page 20 (BMX wheels, missing from the local scan) was ingested from
  the disraeligears copy: new Wheel(sets) rows 7345 FW200 (front, 1400g),
  7346 RW200 (rear, 1438g), 7347 FW201 (front with drum brake, 1596g)
  and 7348 RW201 (rear with drum brake, 1640g). All are 1984-1984,
  `source_ref` 55, glass-fibre polyamide 6/6 with light-alloy hubs and
  five colours. Pair refs PW200/PW201 are noted in the descriptions
  rather than given their own rows. These were the first Simplex
  Wheel(sets) rows in the DB.
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
- Bike override repointed (follow-up pass): `'simplex slj 5500 cp'` in
  `generate-bike-update-sql.js` 4651 -> 7309, and bike_spec 2553/2572
  (1979 Peugeot PY 10 CP / PY 10 LC, "Simplex SLJ 5500 CP") moved with
  it. That moved 7309's year_from 1981 -> 1979, on the 1979 Peugeot
  catalogue's evidence (data_source 40, a bike catalogue, not this one).
  4651 "SLJ5500 (version 1)" now has no bike links.
- Retitled: 4616 "SO61 T" -> "S061 T" (letter-O typo); 4655 "SLJ6600 T
  (version 1)" -> "SLJ6600 T" (there was no version 2 row); 4620 "SX410
  GT (long cage)" -> "SX410 GT"; 4654 "SLJ6600 GT (long cage)" ->
  "SLJ6600 GT"; 7277 "SLJ6000 GT (long cage)" (1981 pass) -> "SLJ6000
  GT", search_text updated too (the 1981 insert had baked the suffix
  into it). Its description also said "1981 catalog: T/SP 250g", but
  panel 5 of the poster gives SLJ 6000 T/SP 238g and GT/SP 250g, so
  corrected to "GT/SP 250g". 4653 "SLJ6000" (238g) -> "SLJ6000 T" to
  pair with 7277, since 238g is exactly the poster's T/SP; also
  enriched with the poster's T/SP spec (26t capacity, max sprocket 24t).
  4652 "SLJ5500 GT  (version 2)" (stray double space) -> "SLJ5500 GT";
  7311 "SLJ5500 GT (version 1)" -> "SLJ5500 GT/SP" (the catalogue name),
  since the "version 2" it was numbered against is gone. The two GT rows
  are now told apart by name and weight (7311 1981-84 at 201g, 4652 at
  219g).
- Merged/deleted (follow-up pass, at the user's call): 4651 "SLJ5500
  (version 1)" (velobase, 1979-1984, 219g, no cage type,
  `B35882D6-65CE-43AC-B68E-B329887D1C77`) -> 4652 "SLJ5500 GT", now
  1979-1990. The two velobase rows shared the same 219g, which matches
  no SLJ 5500 in the 1981 or 1984 catalogues (183/192/201g). Its bike
  links had already moved to 7309.
- Deleted (follow-up pass, not catalogue-driven): 4609 "S005, Composit"
  (velobase, bare, `7184D8BF-4731-40BE-AF44-5BCCC0EECF1D`), an
  exact-title, same-years duplicate of 4610, which keeps its 255g spec.
  4612 "S007 T" (velobase, bare, `0A3F1654-775B-4724-AB13-B1F598160104`)
  -> 4572 "S007T" (same 1991-1995, keeps its 257g spec); the titles
  differ only by a space. 4572 then retitled "S007 T" to match 4611 "S007
  GT". 4647 "S001 T, Prestige (version 2)" -> "S001 T, Prestige" (no
  version 1 row existed; 4582 "Prestige (variant version of AR637P/NI)",
  1974, may be what it was numbered against, but nothing links them);
  also added the 1981 poster's T/P weight (272g), which the 1981 pass
  had skipped, next to its T/SP 236g.
- Merged/deleted (follow-up pass, not catalogue-driven): 4582 "Prestige
  (variant version of AR637P/NI)" (velobase, bare, 1974,
  `D357B3A8-5CCF-47F2-9F0A-A7FE9038E6CD`) -> same-titled 4583 (246g,
  6 bike links, the `'simplex prestige'` override). 4583's year_to moved
  1972 -> 1974; the override comment was updated to match.
- Reworded 4617 "SX 810 T" and 4658 "SX110 T" hanger text. **Gotcha:**
  "hanger" means opposite things in the two sources. The 1981 poster's
  "Fits fork end: with hanger" (SP) describes the *frame* (the dropout
  has a hanger, so the derailleur has no claw and is ~36g lighter);
  velobase's "with/without hanger" describes the *derailleur* (its own
  claw). The velobase text was correct all along. A first pass misread
  it as an error and "fixed" both rows into the poster's meaning, which
  then read backwards. Final wording names the claw explicitly:
  4617 "266 grams (Spec), SP version (no claw, for frames with a
  derailleur hanger)"; 4658 "283 grams (Actual) with integral claw
  (standard dropouts), approx. 248 g without (SP, for frames with a
  hanger)". 4656 "SX300 T" (direct attachment 279g, with hanger 292g)
  is consistent and was left alone. 4647 "S001 T, Prestige" carried the
  poster's own phrasing ("T/SP (with hanger) 236g"); reworded to "T/SP
  (for frames with a hanger) 236g". Read "hanger" in any source by which
  part it belongs to before treating weights as contradictory.
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
- BMX wheels page: resolved later from the disraeligears copy (see the
  top of this section).

## Weinmann 50th anniversary catalogue "Bicycle Components and Ski-Boots" — May 1983 (leblogduvelovintage.art.blog, catalogue-weinmann.pdf, 27 pp)

- `data_source` 85. Source:
  https://leblogduvelovintage.art.blog/2022/09/24/catalogue-weinmann-80s/
  (PDF https://leblogduvelovintage.art.blog/wp-content/uploads/2022/09/catalogue-weinmann.pdf).
  Weinmann AG Schaffhausen jubilee brochure, German / French / English,
  letters dated "Schaffhausen im Frühjahr 1983" and "Singen/Htwl., im Mai
  1983", printed in Switzerland 7000834. Mostly company history, factory
  photos and ski-boots; five product spreads give model numbers over photos,
  no specs. Printed pages 18-21 are missing from the scan (a centre-pull
  spread with 999 / 610 / 750 may be there), so absence proves nothing.
- Listed: side-pulls Carrera 600, Carrera 400, Aero 409, 605, 405, 506 (with
  No. 1664 QR); HP 2000 new spindle rim brake (announced); levers No. 185,
  187, 185-100, 186-100 / 186-101, 144 / 144-1 (147.7-1 hood), 180 / 180-1,
  juvenile 190 / 191, touring 146 / 160-146.3; rims 903 Carrera (AS), A124
  Super X, 571 S, A125 Sprint, A106, 431 BMX, 420, 801 INOX 18/10, Moto
  (motorcycle, skipped).
- All 112 Weinmann rows (brand 105 "Weinmann AG") are velobase. Updated:
  1168 Carrera 400 and 491 / 492 levers 405 / 605 year_to -> 1983; 1117 AG
  405 brake NULL -> 1981-1983 (1981 from the Kalkhoff bike catalogue);
  retitled 1163 "Weinmann AG Aero" -> "Weinmann AG Aero 409" (year_to
  1983, 294g measured kept), 493 "Weinmann AG Carrera # 185" -> "Weinmann
  AG No. 185 (Carrera)" (year_to 1983).
- New (20 rows): Carrera 600 (group 113), AG 506 (1979-1983, year_from from
  the 1979 Peugeot / 1981 Kalkhoff bike catalogues), HP 2000; levers No.
  185-100, 186-100 / 186-101, 187, 144 / 144-1, 180 / 180-1, 190, 191, 146,
  160-146.3; rims 903 Carrera (AS), A124 Super X, 571 S, A125 Sprint
  (1974-1983, year_from from the 1974 Motobecane bike catalogue), A106, 431
  BMX, 420, 801 INOX 18/10. All 1983-1983 unless noted.
- Left: 605 brake variants 1132-1135 (photo can't pick a lettering
  version); Carrera (earlier / later) 1167 / 1169; 1154 "AG 801" filed as a
  brake but probably the 801 INOX rim; velobase clutter (bare "AG" levers,
  "Made in Switzerland") not touched.
- Bike links: overrides 'weinmann 506 side pull' (+ 'with safety levers'),
  'weinmann 506', 'clb weinmann 506' -> 7764 and the 1974 Motobecane
  "WEINMANN Sprint alloy 27x1.25\  MICHELIN..." rim value -> 7778 (the CSV
  cell has a stray backslash that MySQL drops on insert, so the key keeps
  it). Back-filled 8 specs: Peugeot 1979 (3), Kalkhoff 1981 (3), Motobecane
  1974 (2).

## SunTour road catalogue 1989 (pp 7-8, 13-14, system chart) and Japanese Superbe page c. 1983 (equusbicycle.com, 6 scans)

- Source: https://equusbicycle.com/bike/suntour/suntourscans.html.
  `data_source` 86 "SunTour road catalogue (1989)": Superbe-Pro-page-1 / 2
  (printed pp 7-8), Suntour-GPX-page-1 / 2 (pp 13-14, "'89 NEW COMPONENTS"),
  Suntour-road-range-89 (Component System Chart, Light Weight: Superbe Pro,
  Sprint 9000, GPX, Olé, Edge 4050, Blaze 3040 / alpha-2000 / 1500 / RT1000).
  `data_source` 87 "SunTour Superbe catalogue page, Japanese (c. 1983)":
  SuperbeJapanese.jpg, undated, RD-3100 Superbe Pro marked NEW; dated c. 1983
  on that basis, no year_from moved on it.
- All SunTour rows (brand 56) are velobase. Retitled (old titles): 4745
  "SunTour GPX" (RD) -> RD-GP00-SSB; 4769 "SunTour Superbe Pro" (RD
  1986-1994, 198g) -> RD-SB00-SSB (Accushift); 2634 / 2635 "FD-GP00 SSB" /
  "FD-GP00 SSH"; 2650 / 2651 "FD-SB00-B" / "FD-SB00-H" -> -SSB / -SSH; 1047
  "SunTour BA-B00-N, Superbe Pro" (typo) -> BA-SB00-N (standard reach); 1048
  -> "(short reach)"; 463 -> BL-SB00-N / -S; 6302 "SunTour Superbe Pro (Power
  Command Friction)" -> SL-SB00-B / -C (Power Ratchet); 6295 -> SL-IP00-B /
  -C, Accushift I.P.C.; 6262 "SunTour SL-BC00 Bar Con (SL-BC01-R6 /
  SL-BC01-L)" -> SL-BC00-R6R / -R7U / -L (bar-con), 1980 -> 1989, group 68;
  168 / 173 / 3132 -J / -F / -I (-C) variants added; 2249 -> "FW-AL00-U7,
  Alpha freewheel (7-speed Accushift)"; 456 "BL-GP00, GPX Aero Levers" ->
  "(aero)"; from the Japanese page 4760 "SunTour Superbe" (RD, 196g) ->
  RD-2100, Superbe and 3615 "SunTour Superbe" (hub, 604g pair) -> RH-2000,
  Superbe (high flange). Descriptions rewritten on these plus CW-GP00,
  CW-SB10, HB-GP00, PL-GP00, SP-SU00-S, SL-GP00-B / C, BA-GP00-S, FD-1500,
  LD-2000, LD-2050.
- Years: chart velobase 1980 placeholders -> 1989-1989 on 1038 BA-ED45-S,
  2633 FD-ED45-SSH, 1983 CW-ED45, 6285 SL-4050, 6274 SL-3040; year_to -> 1989
  on 1426 SP-6000, 1424 SP-6200, 4007 PL-5600, 1987 CW-7500; 4011 PL-SB00
  year_from 1990 -> 1989; year_to -> 1983 on 2645 FD-1500, 6296 / 6297
  LD-2000 / LD-2050.
- New (1989): CH-GP00 (GPX), BL-SB10 (Superbe Pro aero). Chart-only codes
  without specs not inserted.
- Left: RD-3100 Superbe Pro (velobase 4766 / 4767 / 4768 "Superbe Pro" rows
  1979-1986, two bike-linked, can't tell which); RH-1000 low flange (3614's
  383g doesn't match 548g printed). Bike link counts unchanged.

## SunTour "Bicycle Equipment Catalog" Edition No. 61 — printed 09.1983 (disraeligears.co.uk, 40 images)

- `data_source` 88, label "SunTour Bicycle Equipment Catalog Edition No. 61
  (printed 09.1983)". Source:
  https://www.disraeligears.co.uk/site/suntour_bicycle_equipment_catalog_no_61.html
  (front cover, page_1..38, rear cover; image page N = printed page N).
  SunTour U.S.A. Inc. (Fairfield NJ) / Maeda Industries; rear cover
  "Printed in Japan SEP. '83" -> 1984 model year. pp 1-8 features, 9-26
  specs (model code, materials, weight), 27-38 tools / maintenance / gear
  capacity and spoke charts.
- Ranges: Superbe Pro (RD-5200, FD-2000, LD-3200 / LD-3250, CB-3000 =
  CB-3100 + CB-3200, CB-4000 = CB-4100 + CB-3200, BH-1500, PL-4000 /
  PL-2000, HS-150, BH-1600 / BH-1700, HC-100); Superbe (RD-5300, FD-3000,
  LD-2000 / 2050, RH-1000 / 2000 / 3000 / 4000, CW-1000 / 3000, BB-100 /
  300, PL-1000 / 3000, HS-100 / 300); Sprint BH-2000, RH-4400; touring
  Superbe Tech RD-4700 / 4800 / 5400, MounTech RD-4900 / 5500 FD-2700,
  AG-Tech RD-5000 / 5600 FD-2800; Cyclone Mk-II RD-3500 / 3700 FD-2300 /
  2400; Top-Mount LD-2300 / 2350; BL, ARX, VX, AR, Seven, GT, Honor,
  Volante; NSL / Compe-V / Spirt FDs; shift levers Bar-Con, PDL-M, PSL-M,
  DLW, SLW, PUB-10 / 5, UBN-10 / 5, Mighty Shifter II, MSM; Micro Lite /
  New Winner / Perfect / Pro-Compe / AG freewheels; Ultra-6 UC-6000, Z
  TZ-6000 chains; Trimec, CAP, Mighty Click systems; dirt XC-II PL-5100,
  LD-2800, BH-1400, NW-5100; SA- / SS- sealed BBs; TH-1000 3-speed hub;
  BMX ensemble (not inserted).
- All SunTour rows (brand 56) were velobase. Retitled (old titles): 4768
  "SunTour Superbe Pro (friction)" -> RD-5200, Superbe Pro; 4763 "SunTour
  Superbe II" -> RD-5300, Superbe (Superbe II); 4761 "Superbe Tech Short
  Cage" / 4762 "Superbe Tech L" / 4764 "Superbe Tech-GTL" -> RD-4700 /
  4800 / 5400; 4711 "Mountech GTL" -> RD-5500; 4710 "AG Tech (Alpine
  Gear)" -> RD-5000; 4742 / 4743 "Cyclone M-II (GT)" -> RD-3500 / 3700;
  4730 "BL - Blue Line" -> RD-3200; 4731 "BL - Blue Line (Long Cage)" ->
  RD-3300, BL (GT); 4727 "aRX (short cage)" -> RD-4300; 4729 "aRX GT" ->
  RD-4500; 4774 "Vx" / 4775 "Vx S" / 4707 "Vx-GT" -> RD-2200 / 2500 /
  2400; 4725 "aR II" / 4723 "aR II GT" -> RD-4200 / 4400; 4756 "Seven
  (version 2A)" -> RD-1900; 4702 "Honor (version 2D, 2E, 3A, or 3B)" ->
  RD-1100; 4708 "Volante (type 1A)" -> RD-2600; 4771 "Trimec" -> RD-4600;
  4685 "Mighty Click" -> RD-2700; 2652 "FD2000, Superbe Pro"; 2621 "ARx"
  (FD) -> FD-2600; 2614 "Vx" (FD) -> FD-1600; 2605 'NSL "New SL"' ->
  FD-1700; 2641 "Seven" (FD) -> FD-1400; 2603 "Compe-V (5-hole)" ->
  FD-1100; 2601 "Spirt" -> FD-1000; 2654 "FD2900, Trimec"; 6299 "LD-3200,
  Superbe" / 6300 "LD-3250, Superbe" -> Superbe Pro (catalogue files them
  under Superbe Pro); 6282 "LD-2300, Cyclone Mk-II (Symmetric)" ->
  Top-Mount; 6266 "Symmetric LD-2350 (Direct Mount)"; 6264 "LD-1500 Power
  Shifter" -> PDL-M; 6272 "LD3300, ARx"; 6265 "LD-1900, Road VX"; 6288
  "LD-3000, Honor" (1988) -> LD-3000, UBN-10 (stem), 1984-1988; 462
  "CB-3200, Superbe (dual slot drilled)" -> Superbe Pro brake lever; 3622
  "BH-1400, XC" -> XC (sealed); 3612 "Sprint Pista" -> RH-4400; 3135
  "Superbe" (headset) -> HS-100; 4009 "PL-4000, Superbe" -> Superbe Pro;
  4015 "PL-5100, XC" -> XC-II; 2235 "Microlite" -> LF-6000 / LF-7000;
  2237 "New Winner (NW-7000) Ultra 7"; 2240 "New Winner 6sp Ultra" ->
  NW-6500; 2238 "Suntour New Winner 6 speed" -> NW-6000; 2242 "Pro-Compe
  (5-speed)" -> PC-5000; 2244 "PT-3800 PR 5S" -> AG.
- Years: listed rows year_to -> 1984 and NULL / later year_from -> 1984
  (e.g. 4771, 2654, 6300, 4010, 2235, 2237, 6288 year_from 1985-1988 ->
  1984); 2641 FD-1400 1984-1985 (1985 from the Raleigh bike catalogue).
- New (37 rows, 1984): RD-4900, RD-5600, RD-3600, RD-2000 Seven GT,
  RD-1200 GT, RD-5100 CAP, FD-2400; LD-1400, LS-1500, LD-2900 / 2950,
  LS-1000, LD-1300 PUB-10, LS-1300 PUB-5, LS-3500 UBN-5, LS-2200, LD-3500
  MSM, LD-1950, LD-3350, Trimec LD-2700 / 2750 and LD-3100 / LS-3600,
  LD-2400 DLC, LD-2500 UBD-10; BH-1700, BH-2000, BH-4600 / 4700, RH-4100 /
  4300, TH-1000; US-6500, PN-6000 / PS-6000, PT-6200, PT-6100, NW-5100,
  FT-3050 / FS-1500 / MF-1000; SA / SS sealed BB series; HS-300;
  UC-6000; TZ-6000 (1984-1989).
- Deleted: 6298 "SunTour LD-3200, Superbe" (Shifters, 1986, velobase,
  `CA43ECD7-E26F-4BAA-AB94-A1B7F28F15C1`) dup of 6299; 1049 "SunTour
  CB-3100, Superbe Pro Short Reach" (Brakes, 1980,
  `B8834FB9-1BEF-499E-B6F8-43C50CA4E099`) dup of 1045; 2610 "SunTour
  FD-2800, AGear Tech" (1970-1980, `C8FD52D8-FCCE-439E-B171-D62950C93AEA`)
  dup of 2609; 4000 "SunTour XC-II" (Pedals, 1980, 446g,
  `7DF3E0F8-F0CA-456A-8D06-529379C86866`) merged into 4015 (its 1985
  Raleigh link moved first).
- Bike links: 1985 Raleigh "SunTour AR-GT" x2 4726 -> 4723 RD-4400;
  "SunTour UB-10 (stem mount)" x4 -> 6288 UBN-10. Overrides added for
  these plus 'suntour vx' (FD 2614 / RD 4774), 'suntour arx' (FD 2621),
  'suntour ag tech' (RD 4710), 'suntour xc ii chrome moly shafts' (4015)
  so the retitled rows stay linked on regeneration. Raleigh 1985 79 -> 83.
- Left: 4766 / 4767 velobase "Superbe Pro" RDs (pre-1984, RD-3100 era);
  FD-2000 variants 2647-2649; 4728 aRX long cage; 4712 MounTech GTL v2;
  FD-2700 v1 / v2; 2606 bare "BL" FD; 6259 "3090 Bar-Con"; 6283 "DLW
  LD-1000"; 6257 / 6263 LD-1100 PUB-10; BMX ensemble and CB-5000 coaster
  brake not inserted. Bike values not in this catalogue: HR, SU-2, DLN,
  PUB-M, Alpha-5000; the 1983 Bianchi Superbe Pro FD stays unlinked.

## Cross-catalog notes

- The Nuovo Record 1020/A rows are dated per version in the DB (v3 1970-81,
  v4 1982-84, v5 1985-87); the bike generator's year-ranged override follows
  those. Keep them in step if either changes.
- Part numbers are reused across eras (1013/1 is a Gran Sport lever in 1953
  and a Record lever in 1967; 1040 is Gran Sport pista in 1960 and "Record
  Pista" later). Diff by number, then read the DB title before deciding.
- **Redundant velobase weights (2026-10-01, Simplex, at the user's
  call):** done when descriptions were still treated as add-only (since relaxed: velobase is not the authority, see SKILL.md). A
  velobase "(Spec)" weight was removed only where it exactly equals a
  catalogue weight for the same model on the same row. Removed text, so
  it can be restored: 2575 "126 grams (Spec)", 4616 "287 grams (Spec)",
  6209 "71 grams (Spec)", 6216 "86 grams (Spec)", 7263 "108 grams
  (Spec)" (each sat right after "France, "). Kept on purpose: every
  "(Actual)" and "(avg)" weight (measured specimens are independent
  evidence of real variance), (Spec) weights that only approximately
  match (6212 105 vs 105.5g, 4603, 4632), derived matches (6231 180g =
  2x90g), rows where the catalogue note doesn't restate the weight
  (2567, 6240), and 4617, where the weight anchors the SP wording.
  Weights on catalogue-inserted rows (e.g. 7281-7284, 7305) are
  themselves catalogue figures, not velobase ones.
- **Description/title sweep (2026-10-02, Simplex + Shimano 1972, after
  the "velobase is not the authority" rule).** 54 rows that had collected
  stacked "1978 catalog: ... Sep 1981 catalog: ..." fragments were
  rewritten into one consolidated description each (what the part is,
  then each figure with its catalogue year). Dropped: merge audit notes
  (the deleted rows are recorded above), velobase "(Spec)" weights that
  repeated a catalogue figure, and stale qualifiers. Kept: measured
  "(Actual)"/"(avg)" weights and "aka Super LJ ..." names. 4615 S0 gained
  the Sep 1981 S0/P figures (250g, 28t) that hadn't fit before. 6181 was
  also taken out of group 141 "Light Action". Old titles, so later
  sources using them can still be matched:
  - Shimano: 4498 "Crane D-501" -> "D500 / DB-100, Crane"; 4499 "Crane GS
    D-510" -> "D510 / DB-110, Crane G.S."; 4439 "Lark-W" -> "D280 /
    DD-300, Lark-W"; 4437 "D-600 Titlist" -> "D600, Titlist"; 4438
    "D-610 Titlist-GS" -> "D610, Titlist G.S."; 4444 "Eagle-SS" -> "D310,
    Eagle S.S."; 2461 "Thunder Bird GTO" -> "E111, Thunder Bird G.T.O.";
    6163 "L-600 Fingertip Control Barcons" -> "L600, Bar-End Control";
    6181 "L-422, Light Action" -> "L422, G.T. Console (5D)"; 6124/6120
    "Super Shifter (single)/(twin)" (originally both "Super Shifter") ->
    "L251, Super Shifter (single)" / "L252, Super Shifter (twin)".
  - Simplex: 2549 "302" -> "SJ A302"; 2576 "SJ A223 (triple)", 7264 "SLJ
    A423 (triple)", 2574 "SJ A103 (Triple)" -> suffix dropped; 4617 "SX
    810 T" -> "SX810 T"; 5904 "SLJ 6164" -> "SLJ6164"; 6209 "(Zytel
    levers, square finger pads)" -> "S3448"; 6231 "MB Silver Range" ->
    "MB2600"; 6212 "SJ (2nd type)" -> "SJ6311"; 6240 "SLJ (4th type,
    black anodized)" -> "SLJ5057 (black anodized)"; 6239 "SLJ (4th
    type)" -> "SLJ5057"; 6216 "SXP (2nd type; stem mount)" -> "SXP 4506".
