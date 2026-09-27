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

## Cross-catalog notes

- The Nuovo Record 1020/A rows are dated per version in the DB (v3 1970-81,
  v4 1982-84, v5 1985-87); the bike generator's year-ranged override follows
  those. Keep them in step if either changes.
- Part numbers are reused across eras (1013/1 is a Gran Sport lever in 1953
  and a Record lever in 1967; 1040 is Gran Sport pista in 1960 and "Record
  Pista" later). Diff by number, then read the DB title before deciding.
