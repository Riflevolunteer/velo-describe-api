---
name: ingest-bike-specs
description: Ingest a vintage bike catalog spec CSV from bike_specs/ into the bike tables (bike, bike_brand, bike_spec_label, bike_spec) and link each spec line to a component_detail row. Use this whenever the user wants to run, load, ingest, import or "have a go on" a bike catalog or spec file (e.g. "run the 1983 bianchi", "load the kalkhoff one", "re-run zeus"), asks why a spec isn't linked to a component, wants a catalog value mapped to a specific DB component, or asks to fix/repair a spec CSV before loading. Also use it when checking what bikes are already in the DB.
---

# Ingest bike specs

Turns one catalog CSV into idempotent SQL, gets it reviewed, then loads it. The
generator (`scripts/generate-bike-update-sql.js`) does the mechanical work; the
value you add is catching bad source data before it's loaded and deciding which
spec values should link to which components. Everything that touches the DB is
reversible except a wrong `component_id` on an already-linked row, so the
review step matters more than speed.

## The shape of the data

- `bike_specs/<year>_<brand>_spec*.csv`. Column 0 is the model name; brand and
  year come only from the filename. The folder is gitignored, so CSV edits are
  not tracked. Back up a file to the scratchpad before rewriting it.
- Headers are trusted as canonical spec labels. Headers mapped in
  `BIKE_FIELD_LABELS` (Type, Frame Size, Color, Weight...) go onto the bike row,
  `SPLIT_LABELS` fan one column into several (Derailleurs → Front + Rear), and
  `IGNORED_LABELS` drop source-document columns (Catalog Page).
- A spec row is inserted only for a non-empty cell. "None" / "Not Specified" is
  stored as-is; the UI normalizes it at display time.
- Linking: only labels with a `LABEL_TO_CATEGORY` entry are matched, exact
  title first, then whole-word substring in either direction, deduped by
  normalized title. Ambiguous (>1 candidate) means no link. A single-word title
  inside a multi-word value never links (it's a brand catch-all). Anything the
  matcher can't resolve goes in `COMPONENT_OVERRIDES`, keyed by
  `component_category` title then `normalizeForMatch(value)`. An override is
  a component_id or a list of `{ from, to, id }` year ranges: overrides are
  global across catalogs, so a part that kept its name through several
  versions ("Campagnolo Nuovo Record", 1967-1987) must be ranged or a 1983
  catalog silently inherits the 1973 choice. When you add a range that
  changes an already-loaded catalog's pick, fix those rows with a one-off
  UPDATE; the back-fill only fills NULLs. An explicit `null` id means "do not
  link" — for when the only substring hit is a wrong-era row and the DB has no
  right one (1987 "Shimano 600" brakes vs the 1970s centre-pull).
- Idempotency: bikes key on brand+title+year_from; specs on bike+label+
  value_text. Re-runs skip existing rows and only back-fill `component_id`
  and `source_ref` where they are NULL. A changed value_text therefore creates
  a second row rather than replacing the first, and an existing wrong link or
  source_ref is never overwritten.
- Provenance: the generator creates one `data_source` row per input CSV
  (`source_type = 'catalogue'`, label `"<year> <brand> catalogue"`, citation =
  the filename) and stamps it onto every `bike`/`bike_spec` row that file
  produces, via `source_ref`. Bikes loaded before this existed are still
  `source_ref = NULL`; regenerating and reloading an already-loaded catalog's
  CSV back-fills them (see the Zeus example: rerunning
  `1973_zeus_spec.csv` tagged all 6 existing bikes and 96 specs with no other
  changes).

## Workflow

### 1. Inspect the CSV before generating

Read the header and a few rows. Look for the faults every catalog so far has
had at least one of:

- **Mangled inch marks**: `21\ or 23\""` style debris from a bad export in
  size or wheel columns. Strip backslashes and stray quotes and rewrite as
  `21" or 23"`; treat `19-1/2` as one number.
- **Copy-forward cells**: "Identical to Folgore". Copy the referenced model's
  cell into place for every column, so the detail page shows real values.
- **Wrong column for the data**: e.g. "STURMEY ARCHER 3 speed hub" in the
  Derailleur column. Move it to Hubs and blank Derailleur, or the split will
  mint two fake derailleur rows.
- **Header alignment**: `LABEL_ALIASES` in the generator folds known variants
  (Brakeset → Brakes, Saddles → Saddle, Standard Equipment → Extras...) into
  the canonical label and `LABEL_ORDER` fixes display order; the original
  header is kept in `bike_spec.raw_label`. Compare a new file's headers to
  the canonical list (`node scripts/db-query.js "SELECT title FROM bike_spec_label ORDER BY sort_order"`)
  and add an alias rather than letting a near-duplicate label be minted. A
  groupset column named "Rear Derailleurs" whose values are groupset names
  should become "Derailleurs" so both derailleurs get rows.
- **Source-document columns** (page references): add to `IGNORED_LABELS`.
- **Combined columns** that name two components with DB rows for each
  ("Wheel Rims & Tires"): add to `SPLIT_LABELS`. Leave combined columns alone
  when only one half is ever described (see the "Handlebars / Stem" note).
  The generator then splits each cell (`splitCellValue`): a cell that
  divides on " / ", ", " or "; " into exactly one part per label is shared
  out — by hint word (`SPLIT_PART_HINTS`: front / rear, rims / tires,
  crank / BB) when each part has one, else by position but only if some part
  carries its own label's hint and none carries another's (so "Campagnolo
  Nuovo Record, 12 speed" stays whole for both derailleurs) — so "SUPER CHAMPION
  rims, ELVEZIA tubulars" becomes Rims "SUPER CHAMPION rims" + Tyres
  "ELVEZIA tubulars". Any other cell (one groupset name for both
  derailleurs, "Sakae 42/52") is copied whole to every label. Cells with no
  separator ("Steel rims 27" x 1-1/4" gum wall tires") are not split: add a
  ", " in the CSV if both halves name real parts. Overrides key on the split
  part, not the whole cell. A paired " / " header with distinct halves
  ("Freewheel/Chain") is not in `SPLIT_LABELS` — split those in the CSV.

Write a small node script in the scratchpad for CSV rewrites (RFC-4180 parse,
edit cells, write back with quoting) rather than sed; several cells span lines.

### 2. Generate and review, do not load yet

```
node scripts/generate-bike-update-sql.js bike_specs/<file>.csv
cp bike-update.sql <scratchpad>/<name>.sql      # the generator overwrites this file on every run
node scripts/summarize-bike-sql.js <scratchpad>/<name>.sql
```

The summary shows labels, bike rows, every linked spec with its DB title, and
unlinked values by label. Check:

- Bike rows: sizes/colors/weight landed on the row, category isn't junk.
- **Every linked spec**, especially era. A 1973 catalog linking to a row titled
  "(1982 - 1987)" or "50th Anniversary" or "O.R." is wrong even though it was
  the only substring hit. Brand-only rows ("Brooks", "Sturmey Archer") are
  acceptable only when the DB genuinely has no model-level row.
- Unlinked values under component labels. Query candidates:
  `node scripts/db-query.js "SELECT d.component_id, c.title cat, d.title FROM component_detail d JOIN component_category c ON c.category_id=d.category_id WHERE c.title='Hubs' AND d.title LIKE 'Normandy%'"`
  Descriptive prose (Italian saddles, "Steel C.P. Randonneur bend"), maker-only
  text ("Catena Bianchi della Società... Regina") and unmapped labels (Fork,
  Lugs, Extras) are expected to stay plain text.

### 3. Fix links with overrides, not by hand-editing SQL

Add entries to `COMPONENT_OVERRIDES` in the generator. Pick period-correct
variants when the DB distinguishes them and say why in a comment; skip when
a dozen variants exist and the catalog text gives nothing to choose on
(Weinmann 999, Lyotard). Spelling variants that recur across catalogs go in
`WORD_ALIASES` (`jubile` → `jubilee`), not overrides. Then regenerate.

Regression check after any matcher, alias or split change: regenerate every
already-loaded catalog and confirm each link count is unchanged or explained.

### 4. Show the user, then load

Present labels, bike count, link count, the corrections made, and the judgment
calls (which variant you chose and why). Wait for a go-ahead: the user has
asked to see the SQL before inserting. Then:

```
node scripts/load-sql.js <scratchpad>/<name>.sql
node scripts/db-query.js "SELECT bb.title brand, b.year_from, COUNT(DISTINCT b.bike_id) bikes, COUNT(s.bike_spec_id) specs, SUM(s.component_id IS NOT NULL) linked FROM bike b JOIN bike_brand bb ON bb.brand_id=b.brand_id LEFT JOIN bike_spec s ON s.bike_id=b.bike_id GROUP BY bb.title, b.year_from ORDER BY bb.title, b.year_from"
```

A first load shows every INSERT affecting rows; a re-run shows 0 for inserts
and only back-fill UPDATEs affecting rows. Report the per-brand table.

### 5. Re-ingesting after a fix, or removing what a catalog shows is wrong

Updating or deleting existing rows isn't limited to fixing your own bad CSV
edits — a catalog can itself be the evidence that a bike or spec row is
wrong: a model that turns out not to be that brand/year, a spec value that
was a transcription error corrected by re-reading the source, a `component_id`
link that new catalog evidence shows points at the wrong-era row. Treat these
the same as an ingest-component-catalog dedupe: write the DELETE/UPDATE,
check nothing external only made sense with the old row (there's no
generator override or cross-catalog reference into `bike`/`bike_spec` today,
unlike `component_detail`, but check before assuming that stays true), show
the user the statements, then run them through `load-sql.js` (it accepts
DELETE and plain UPDATE, not just the generator's guarded ones).

Because value changes create duplicates, clean up first with a one-off SQL
file run through `load-sql.js`, then regenerate and load:

- Label renamed (e.g. "Rear Derailleurs" → "Derailleurs"): delete the
  `bike_spec` rows for the old label and the `bike_spec_label` row.
- Cell values changed for some bikes: delete those bikes' `bike_spec` rows and
  the `bike` rows, then reload. IDs change; nothing external references them yet.
- Only new overrides: just regenerate and load. The back-fill UPDATE handles it.
- A bike/spec row is simply wrong and nothing should replace it (catalog shows
  it never existed, or belongs to a different brand entirely): delete it
  directly, no reload needed. Record what and why in the relevant brand
  file under `references/known-catalogs/` (or `cross-catalog-notes.md` if
  it's a matcher/generator fix spanning brands) — see
  `references/known-catalogs.md` for the index.

### 6. Commit

Commit generator changes (overrides, aliases, splits, ignore list) with a
message that names the catalog and the notable mappings. CSV repairs can't be
committed; describe them in the message so the reasoning survives.

## Reference

- `references/known-catalogs.md` indexes `references/known-catalogs/<brand>.md`,
  one file per bike brand, each listing its catalogs processed so far, their
  quirks, the repairs made, and the linking decisions, so repeat questions
  ("why is Zeus Gigante the road hub?") have an answer. Read only the brand
  file(s) relevant to the catalog at hand, plus `cross-catalog-notes.md` for
  matcher/generator-wide fixes.
- Sibling API routes (`/bikeBrands`, `/bikesbybrand`, `/bikedetail`,
  `/searchBikes`) read these tables; `bike.created_at` and
  `bike_spec.updated_at` are DB defaults, nothing to set.
