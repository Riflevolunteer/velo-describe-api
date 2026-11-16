# Motobecane catalogs processed so far

## 1984 UK distributor edition — loaded 2026-11-16

- CSV: `bike_specs/1984_motobecane_gb_spec.csv`. Loaded 12 bikes, 245
  specs across 25 existing labels, with 62 component links. No new
  component identities or spec labels. City-Becane is held pending the user's
  scope decision; its transcription remains available for adding it later.
- **Market correction to the search below:** despite VeloBase's US index
  title and the CPSC specification body, PDF p.1 explicitly states import and
  distribution in the UK by Cycles Stratton (UK) Ltd., Nutbourne, Chichester.
  The imprint reads December 1983; p.4 and other portraits explicitly identify
  the 1984 range. Use country **GB**, source label
  `1984 Motobecane (GB) catalogue`, source **429**. No source or 1984 bikes
  existed before this ingestion. New bike IDs **1306–1317**, spec IDs
  **22598–22842**.
- Evidence: [original PDF](https://velobase.com/CatalogScans/Motobecane/1984_Motobecane_catalog.pdf),
  p.10 specification spread, checked against portraits/captions on pp.2–9.
  Cover, production, warranty and rider prose on pp.1–3/6 were not turned into
  bike specifications. Model spelling follows the scan: **Grand Jubilee** and
  **Jubilee Sport**. Ladies' sizes/colours remain in the shared model entries;
  these are not duplicate bikes. Prolight is a complete bicycle, not a frameset.
- Split the source's combined blocks into individual canonical spec columns.
  Front/rear derailleur assignments use the distinct named models, not a blind
  copy of a rear name into the front slot. Mirage and Nomade do not name their
  front models, so no front spec was invented. Interclub retains CLB front
  cantilever (portrait p.8) and a combined rear spec for Weinmann 999 plus
  Maillard drum; neither half receives a speculative component link.
- Printed ambiguities preserved: `Cinelli Giro d’Italia 66` conflicts with
  Cinelli's 64/66 naming; `Stronglight D 9` is not silently changed to A9;
  Mt. Becane's fork is literally `Tandem type`; Super Mirage's table gives
  26.6 lb while its portrait p.7 gives 26.8 lb (CSV follows the table).
  Mirage's partly obscured hub table is supplemented only by the p.7 caption
  explicitly identifying Maillard hubs and front quick release.
- Supported mappings include Nervar 3020 → 10981, Maillard CX500 → 10986,
  Stronglight 107 → 1883, Super Record crank → 1509, Simplex SLJA522 → 7283,
  SJA102 → 2573, Hi-Stepper → 2443, titanium Duopar → 8173, SR MTP110 →
  10473 and SR CTP5/5E/6 → 5857/11316/5861. Plain Sedisport chains map to
  the named Sedisport row 8765 without adding an unprinted Delta treatment.
- Reviewed mappings: Le Champion's Record 1020 uses the period Nuovo
  Record v4 row 4126 (not obsolete steel Record 4131), with front 2300 and
  drilled lever 226. Mirage's 32T selects AR-GT 4723; Jubilee Sport's 28T
  exceeds standard ARX 4727's 26T limit and selects ARX-GT 4729. Helicomatic
  clusters up to 32T use existing original-equipment 600 SH row 8131, following
  the established Maillard/Peugeot crosswalk. Printed 34T clusters remain NULL
  because that row's documented range stops at 32T.
- Applied guarded `year_to` extensions to **1984**, attesting catalogue
  availability rather than manufacture endpoints; `year_from` stays unchanged.
  Old `year_to / source_ref`: Ofmega CX **1692: 1983 / 1**; Atom 440
  **3662: 1980 / 49**; Super Champion Gentleman **5183: 1983 / 294**;
  Weinmann A129 **5208: 1981 / 246**; Clement Criterium Cotone / Tipo 12 bis
  **8972: 1983 / 352**; Rigida 1320 27x1 **9894: 1981 / 360**.
  New `source_ref` is **429**. These existing identities
  match the printed model/configuration; no new duplicate rows are proposed.
  Keep the Gentleman rows 5183, 5217 (GTA), 5218 (GTA2), A129 finish row 5207,
  and Rigida 700C row 9895 distinct: no evidence of duplicate identities here.
- Validation before load: all **20,600** existing generated spec statements
  are unchanged across all pre-existing CSVs; this file contributes exactly
  245 additional statements. All 62 proposed links were reviewed by title,
  category, dates and distinguishing specs. Six date conflicts are covered by
  the guarded updates above. Existing front/rear-brake, Huret Rival and
  integrated-lever test files pass; `git diff --check` passes.
- User approved application with "apply". First run inserted one source,
  12 bikes and 245 specs, and updated exactly the six components above;
  no existing bikes/specs, brands or labels changed. Re-running all 635
  statements affected **zero rows** in every table.
- Live readback matches **all 245** approved values, labels and component IDs,
  including NULLs; regenerating their links against live component records
  also matches all 245. All specs have source 429 and all six corrected
  components have year_to 1984/source 429. The shared quality report finds
  **no errors or review findings in the loaded catalogue or six updated
  components**, including no duplicate specs, provenance gaps, category
  mismatches or linked date conflicts. Whole-DB structural errors: zero;
  unrelated existing review candidates remain. Live Motobecane totals:
  1974 US 6 bikes/117 specs/44 links; 1975 US 8/154/65;
  1984 GB 12/245/62. These are DB counts, not the old generated-file headings.
- Retained only for the pending City-Becane scope decision:
  `/private/tmp/motobecane-1984-ingest-2026-11-16/catalogue.pdf`, `table.json`,
  `transcription-notes.md` and `make-csv.py`. These preserve the source scan,
  full 13-model transcription and CSV construction. Applied SQL, summary,
  validation helper, disposable renders and regression SQL were removed
  after readback/idempotency checks. The pre-task `bike-update.sql` was restored.

### Initial search (superseded market identification)

- Recommended next source: [1984 US catalogue, VeloBase PDF](https://velobase.com/CatalogScans/Motobecane/1984_Motobecane_catalog.pdf).
  Downloaded and visually checked PDF pp. 9–10: ten scanned spreads in total;
  the last spread contains a readable 13-model specification table, including
  road, touring, tandem and mountain equipment. Named parts include Simplex
  SLJ A 522, Campagnolo 980, Stronglight 107 SP / 99, Nervar 3020,
  Weinmann 405 / 506 and Maillard Helicomatic. These are printed identities
  to reconcile, not approved component mappings.
- The [VeloBase catalogue index](https://www.velobase.com/Pages/Resources/CatalogScans.aspx)
  labels it US and the table includes CPSC equipment; the actual UK distributor
  imprint above supersedes that market identification. PDF p. 9 calls the
  mountain bike the 1984 model. Review City-Becane against the scope rules
  before extraction; the catalogue includes it alongside Mt. Becane.
- Other indexed options: 1976 US, 1978 and 1979 US. The existing processed
  catalogue notes cover 1974 and 1975 only. The 1984 edition is recommended
  to extend coverage into another decade, rather than on an assumed link rate.
- This initial search made no CSV, SQL or DB changes; subsequent preparation
  and retained review files are recorded above.

## Pivo handlebar link — 2026-11-14, user approved

- Linked 1975 Grand Jubile spec 3910, "PIVO Professional", to 11169 Pivo
  Professional (bar), 1973-78. The newly ingested Brügelmann 1973 p. 22
  lists Pivo Profi; later catalogues confirm the long reinforced sleeve.
- Added a 1975 Grand Jubile-scoped generator override. Before/after generation
  across all 86 CSVs is identical (6522 generated links): the current matcher
  already resolves this newly added component; the override records the choice.
- Applied the guarded NULL-only update in
  `/private/tmp/handlebar-link-review-2026-11-14/proposed.sql`: one row affected.
  No component or date changes. Handlebars now 232/954 linked.
- Still unresolved: Grand Touring "PIVO Professional, Randonneur bend"
  (the new road-bar row does not establish this bend); Tandem "PIVO Professional
  front, comfort rear" (two different bars in one spec).

## 1974 Motobecane — `1974_motobecane_spec.csv` (7 bikes, 136 specs, 43 linked)

- Source (added 2026-10-21): very likely VeloBase CatalogScans/Motobecane `1974_Motobecane_catalog.pdf` or `Motobecane1974.zip`, both titled "Motobécane - MBK 1974 US Catalog" (https://velobase.com/Pages/Resources/CatalogScans.aspx). Inferred from the title and year (the CSV has a page-reference column, as a scanned catalogue would), not confirmed. The index title states the market, so US is stated, not inferred.

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
- 2026-10-06: Wheels column (aliased to Rims only, so tyres sat in the Rims
  line) renamed "Wheel Rims & Tires" in the CSV so splitCellValue gives
  Rims + Tyres; export debris (`27x1.25\  … tires"`) cleaned and a ", "
  added between rims and tyres. "with HURET spoke protector" moved from 6
  Freewheel cells to Extras ("ATOM or MAEDA, 14-32" comma dropped). Weinmann
  Sprint rim override re-keyed to 'weinmann sprint alloy 27x125"' (7778).
  Old rows 3662 / 3680 / 3698 / 3716 / 3736 / 3755 / 3773 (Wheels), 3658 /
  3676 / 3694 / 3712 / 3732 / 3751 (Freewheel), 3665 / 3683 / 3701 / 3719 /
  3739 / 3758 (Extras) deleted and reloaded. New links: "CLEMENT ELVEZIA
  tubular" -> 6752, "CLEMENT PARIS-ROUBAIX Tubular" -> 6762. 129 -> 136
  specs, 40 -> 42 linked.

## 1975 Motobecane — `1975_motobecane_spec.csv` (11 bikes, 205 specs, 58 linked)

- Source (added 2026-10-21): very likely VeloBase CatalogScans/Motobecane `1975_Motobecane_catalog.pdf` or `Motobecane1975.zip`, both titled "Motobécane - MBK 1975 US Catalog" (https://velobase.com/Pages/Resources/CatalogScans.aspx). Inferred, not confirmed, as for 1974. US is stated by the index title.

- "Catalog Page" ignored. Frame Size and Wheel Rims & Tires cells had the same
  inch-mark debris; rewritten (`27" x 1-1/4"`).
- Riviera and Nobly/3 had "STURMEY ARCHER 3 speed hub" in the Derailleur
  column; moved into Hubs ("... front / STURMEY ARCHER 3 speed rear") and
  Derailleur blanked. They link to the brand-level "Sturmey Archer" hub row
  because the DB has no AW row.
- "Wheel Rims & Tires" added to SPLIT_LABELS (Rims + Tyres). Tyres link via
  overrides (Elvezia, Paris-Roubaix → Clement); the Super Champion rim model
  isn't named so Rims stay unlinked.
- 2026-10-06, cell splitting added to the generator: the three "SUPER
  CHAMPION rims, X tubulars" cells now split into Rims "SUPER CHAMPION
  rims" + Tyres "ELVEZIA / GRAN-TURISMO / PARIS-ROUBAIX tubulars" instead of
  the whole cell under both labels. Old rows 3939 / 3940 / 3958 / 3959 /
  3977 / 3978 deleted and reloaded; overrides rekeyed to the tyre part.
  Still 205 specs, 58 linked. CSV edit (user, same day): commas added to
  the other eight rims-and-tyres cells ("Steel rims 27" x 1-1/4", gum wall
  tires", "WEINMANN H. P. alloy knurled sides, 27" x 1-1/4" MICHELIN high
  pressure tires"; Grand Jubile's " ,27" typo fixed to ", 27"), so they split
  too: rows 3790 / 3791, 3807 / 3808, 3823 / 3824, 3841 / 3842, 3860 / 3861,
  3879 / 3880, 3898 / 3899, 3919 / 3920 deleted and reloaded as Rims + Tyres.
  No new links (no rim or tyre model named). 205 specs, 58 linked.
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

## Link-gap pass on the weakest categories — 2026-10-08

- 1974 Le Champion Handlebars "T.T.T. RECORD" -> 2771 3ttt Record (1st
  Version), via override. Judgment call: it is the only plain "Record" bar;
  the Record Competizione rows are a different, named model. 42 -> 43.
- Left unlinked: "PIVO Professional" x3 (1975; only a bare "Pivo (deep drop
  bars)" row), "WEINMANN extension levers" / "quick release levers" (the
  Weinmann AG lever rows are velobase cosmetic variants, QR one dated 1971
  only), "ATOM 14-26" / "ATOM or MAEDA" clusters (three cosmetic Atom
  5-speed variants, nothing in the text to choose on), "T.T.T. Franco Belge"
  has no row.


- 2026-10-11 (1970 Peugeot pass): the 'stronglight competition' headset
  override moved from 3124 (V4 Competition earlier version, two-pin
  locknut, 1950-60) to 3125 (later version, octagonal locknut, 1960-80).
  The five 1974 / 1975 Grand Touring, Grand Jubile and Grand Record
  "STRONGLIGHT Competition" headset specs were re-linked with a one-off
  UPDATE (stronglight-headset-fix.sql, 5 rows).

- 2026-10-30: 1975 Le Champion "GRAN-TURISMO tubulars" -> 9056 Vittoria Granturismo (the only Gran Turismo tubular row, 1974-78; user's call, maker not printed). +1.

- 2026-11-06 crankset pass: 1975 "TOURNEY Alloy Cotterless 40-52 chainwheel with alloy guard" -> 9562 Takagi Tourney, Three Arrows (row added after the Tourney "left unlinked" note; forged alloy cotterless double with alloy guards, 39-49T inner). 9562 year_to 1974 -> 1975. +1. T.A. Professional still unlinked: rows exist as "Professionnel" (1858 5 vis / 1859 3 attaches, both 1970-84) but nothing picks between them.
- 2026-11-13 Brakes sweep (user approved): 1974 Grand Record "WEINMANN 999 De
  LUXE or UNIVERSAL 61, Center Pull, quick release" -> 7929, the first-listed
  option, as the other 1974-75 Weinmann 999 bikes.
