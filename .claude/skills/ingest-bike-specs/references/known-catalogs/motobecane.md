# Motobecane catalogs processed so far

## 1974 Motobecane — `1974_motobecane_spec.csv` (7 bikes, 129 specs, 40 linked)

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
- 2026-10-04 compound-cell split (CSV rewritten, old bike_spec rows deleted,
  reloaded; 119 -> 131 specs, 35 -> 38 linked). Derailleur cells carried the
  shifter ("SUN TOUR V.G.T., stem power shifter"): shifter text moved to a
  new Shifters column — "SUN TOUR stem power shifter" -> 6263 PUB-10, "SUN
  TOUR down tube ratchet shifter" -> 8056 PDL-M, "SIMPLEX PRESTIGE stem
  shifter" unlinked (no 1970s Simplex stem lever row). Rear derailleur
  overrides re-keyed on the bare names: 'sun tour vgt' -> 4695 (4900 VGT —
  the plain "V.G.T." sits beside a "V.G.T. LUX" in the same catalogue, so
  it is the pre-Luxe part), 'sun tour vgt lux' -> 4704 (4902). Saddle cells
  "… with alloy / CAMPAGNOLO seat post" -> Saddle + Seat Post column;
  "CAMPAGNOLO seat post" -> 5749 (1044 Record). Brakes cells "WEINMANN 999
  … with extension / quick release levers" -> Brakes + Brake Levers
  ("WEINMANN extension levers" etc. unlinked — no model named). Then the
  Derailleur column was replaced by explicit Front Derailleur / Rear
  Derailleur columns: the groupset bikes keep their front rows (Prestige,
  Jubile, Nuovo Record), the two SunTour V-GT bikes (Mirage, Grand Touring)
  get none — V-GT is a rear-only model and the catalogue never names the
  front mech, so the split's copied rows were wrong. 131 -> 129 specs.
- 2026-10-05 re-link pass: Grand Touring "NERVAR cotterless, 40-52 alloy
  chainwheel rings, with alloy guard" -> 1653 Nervar (3-pin,
  alloy/cotterless), the only cotterless Nervar row. The steel cottered
  Nervar cranks on the other bikes still have no row.

## 1975 Motobecane — `1975_motobecane_spec.csv` (11 bikes, 205 specs, 58 linked)

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
- 2026-10-04 compound-cell split, same pattern as 1974 (194 -> 208 specs,
  52 -> 58 linked): Shifters column — "SUN TOUR stem power shifter" x2 ->
  6263, "SUN TOUR down tube ratchet shifters" -> 8056, "HURET Challenger
  stem shifter" -> 6073 (Challenger levers 1725-1782), Simplex Prestige
  unlinked; Seat Post column — "CAMPAGNOLO seat post" x2 -> 5749, alloy x3
  unlinked; Brake Levers column — Weinmann lever halves, unlinked. Rear /
  front Challenger overrides re-keyed to bare 'huret challenger' (4273 /
  2388), 'sun tour vgt luxe' -> 4704. Derailleur column then replaced by
  explicit Front / Rear Derailleur columns, front blank on the three
  SunTour V-GT Luxe bikes (Tandem, Mirage, Grand Touring) — see 1974 note.
  208 -> 205 specs.

