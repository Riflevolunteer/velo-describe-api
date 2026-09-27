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

## Cross-catalog notes

- The Nuovo Record 1020/A rows are dated per version in the DB (v3 1970-81,
  v4 1982-84, v5 1985-87); the bike generator's year-ranged override follows
  those. Keep them in step if either changes.
- Part numbers are reused across eras (1013/1 is a Gran Sport lever in 1953
  and a Record lever in 1967; 1040 is Gran Sport pista in 1960 and "Record
  Pista" later). Diff by number, then read the DB title before deciding.
