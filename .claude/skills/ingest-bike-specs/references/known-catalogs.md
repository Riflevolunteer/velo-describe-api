# Catalogs processed so far

One entry per CSV. Records the source-data repairs (which live only in the
gitignored CSV) and the linking decisions, so they don't get re-litigated.
Link counts are as of the last load; regenerate to confirm.

## 1973 Zeus — `1973_zeus_spec.csv` (6 bikes, 96 specs, 35 linked)

- Header "Rear Derailleurs" renamed to "Derailleurs": values (Criterium 69,
  Alfa 72, Alfa Junior) are groupset names, so both derailleurs get rows.
  Old label rows were deleted from the DB before reload.
- "Handlebars / Stem" is a rename to Handlebars, not a split: the values only
  ever describe the bar.
- Overrides: Zeus Gigante → Gigante road (bare "Gigante" is road-only in this
  catalog); Zeus Pista hubs → Gigante Pista; Super Alfa → Super Alfa 71; Alfa 72
  → "Especial Alfa 72" (rear) and Zeus Alfa (front); Zeus Leather saddle →
  Zeus (black suede); Cinelli Pista Handlebars → Cinelli 67 Pista (old logo);
  Iris 1/2 x 3/32 chain → Iris (brand row kept on purpose).
- Left unlinked: Alfa Junior front derailleur (no Junior front in DB), Alfa
  bottom bracket/headset/hubs/seatpost (no Alfa rows in those categories),
  Competición bars, Arius saddles, Z 67 fixed gear.

## 1940 Bianchi — `1940_bianchi_specs.csv` (17 bikes, 153 specs, 3 linked)

- Four models had "Identical to <model>" placeholder cells (Freccia←Folgore,
  Costantino←Cesare, Cleopatra and Cirene←Cecilia); copied across 24 cells.
  Those four bikes were deleted and reloaded.
- Header has a UTF-8 BOM; the parser copes.
- Only "Regina Extra (1 speed)" freewheels link. Everything else is Italian
  prose or names the maker (Società Catene Calibrate Regina) rather than a
  model. Not fixable with overrides.

## 1973 Raleigh — `1973_raleigh_spec.csv` (9 bikes, 165 specs, 48 linked)

- Header "Weight." (trailing period) is mapped in BIKE_FIELD_LABELS.
- This catalog motivated the single-word-title rule: Brooks B17N, Simplex
  14/24T and Nisi/AVA rims were all linking to brand catch-all rows.
- Period choices (1973): Nuovo Record front → Record 1052/1 (1973-1977), rear
  → 1020/A v3; Campagnolo Record brakes → 2040 standard reach pre-CPSC;
  Record hubs → 1035 high flange, track → 1036 Record Pista; Huret Jubilee →
  4-hole front / first-version rear; Brooks B17N → B17 Champion Narrow, B17 →
  Champion Standard, Professional → Team Professional, Team Special → the
  "Team Special" row; Clement Criterium Silk → Criterium Seta.
- Brand rows kept deliberately: Simplex freewheel, Nisi, AVA.
- Left unlinked: Weinmann 999 (a dozen Vainqueur variants), New Simplex Maxi
  (no row), Raleigh-branded parts, G.B. Maes bars.

## 1974 Motobecane — `1974_motobecane_spec.csv` (7 bikes, 119 specs, 30 linked)

- "Catalog Page Reference" column ignored via IGNORED_LABELS.
- Frame Size cells had backslash/doubled-quote inch-mark debris; rewritten.
- Values carry shifter asides after an em dash or comma ("SIMPLEX PRESTIGE —
  stem shifter"); normalizeForMatch now treats dashes and commas as spaces.
  "Jubile" aliases to "Jubilee".
- Wrong auto-link fixed: CAMPAGNOLO RECORD pedals were hitting the 1983 50th
  Anniversary pedal; now Record Strada 1037.
- Overrides: Campagnolo Record crank → Nuovo Record Strada v4 (BCD 144), hubs
  → 1035, headset "Campagnolo" → 1039 Gran Sport/Record; Stronglight
  Competition → V4 Competition (earlier); Stronglight 49 → 49D; Universal 61 →
  Mod. 61; Normandy Luxe Competition → gold label; SunTour V.G.T. Lux → V-GT
  Luxe v1, V.G.T. → V-GT type 2C/2D; Brooks Professional "with ... seat post"
  → Team Professional.
- Left unlinked: Sedis (no plain row), Weinmann 999 De Luxe / 500, Nervar and
  Solida steel cranks, T.A. Professional (no row), Atom freewheels, Lyotard,
  Motobecane-branded parts, Pivo generic stems.

## 1975 Motobecane — `1975_motobecane_spec.csv` (11 bikes, 194 specs, 46 linked)

- "Catalog Page" ignored. Frame Size and Wheel Rims & Tires cells had the same
  inch-mark debris; rewritten (`27" x 1-1/4"`).
- Riviera and Nobly/3 had "STURMEY ARCHER 3 speed hub" in the Derailleur
  column; moved into Hubs ("... front / STURMEY ARCHER 3 speed rear") and
  Derailleur blanked. They link to the brand-level "Sturmey Archer" hub row
  because the DB has no AW row.
- "Wheel Rims & Tires" added to SPLIT_LABELS (Rims + Tyres). Tyres link via
  overrides (Elvezia, Paris-Roubaix → Clement); the Super Champion rim model
  isn't named so Rims stay unlinked.
- Wrong auto-link fixed: CAMPAGNOLO Record headset was hitting Record Pista
  #1040; now 1039 Gran Sport/Record.
- Overrides: Record 42-53 crank → v4; Record large/low flange → 1035/1034;
  Huret Jubile wide ratio → Jubilee rows; Huret Challenger stem shifter →
  hinged band (front) / generic Challenger (rear, auto); SunTour V.G.T. Luxe
  both shifter forms → V-GT Luxe v1; Universal Mod 68 → Super 68; Mafac Racer
  → "lettered MAFAC RACER"; Philippe Professional → Professionnel; Cinelli
  Giro d'Italia → 64 Giro D'Italia (70's model) bar and 1A (winged C) stem;
  Regina Oro 13-21 → Regina Oro (6 speed).
- Left unlinked: Unicanitor (ten variants, user to pick), Sedis, Weinmann,
  Nervar/Solida/Tourney/T.A. cranks, Atom clusters, Lyotard/Union pedals.

## Outstanding across catalogs

Spec labels are inconsistent singular/plural and by wording (Saddle/Saddles,
Stem/Stems, Chain/Chains, Crankset/Cranksets, Freewheel/Freewheels/Gear
Cluster, Frame/Frame Material/Frame Type, Extras/Extras No Charge/Standard
Equipment/Included Accessories). Fixing it means choosing canonical names,
renaming CSV headers, and a one-off SQL to merge label rows. Treat as its own
task.

Not yet loaded: 1983, 1984, 1987, 1993 Bianchi; 1981 Kalkhoff.
