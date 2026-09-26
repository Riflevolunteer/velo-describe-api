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
  UPDATE; the back-fill only fills NULLs.
- Idempotency: bikes key on brand+title+year_from; specs on bike+label+
  value_text. Re-runs skip existing rows and only back-fill `component_id`
  where it is NULL. A changed value_text therefore creates a second row rather
  than replacing the first, and an existing wrong link is never overwritten.

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
- **Header alignment**: compare headers to labels already in the DB
  (`node scripts/db-query.js "SELECT title FROM bike_spec_label ORDER BY sort_order"`).
  Prefer an existing label over a new near-duplicate (Brakeset vs Brakes,
  Saddle vs Saddles). A groupset column named "Rear Derailleurs" whose values
  are groupset names should become "Derailleurs" so both derailleurs get rows.
- **Source-document columns** (page references): add to `IGNORED_LABELS`.
- **Combined columns** that name two components with DB rows for each
  ("Wheel Rims & Tires"): add to `SPLIT_LABELS`. Leave combined columns alone
  when only one half is ever described (see the "Handlebars / Stem" note).

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

### 5. Re-ingesting after a fix

Because value changes create duplicates, clean up first with a one-off SQL
file run through `load-sql.js` (it accepts DELETE), then regenerate and load:

- Label renamed (e.g. "Rear Derailleurs" → "Derailleurs"): delete the
  `bike_spec` rows for the old label and the `bike_spec_label` row.
- Cell values changed for some bikes: delete those bikes' `bike_spec` rows and
  the `bike` rows, then reload. IDs change; nothing external references them yet.
- Only new overrides: just regenerate and load. The back-fill UPDATE handles it.

### 6. Commit

Commit generator changes (overrides, aliases, splits, ignore list) with a
message that names the catalog and the notable mappings. CSV repairs can't be
committed; describe them in the message so the reasoning survives.

## Reference

- `references/known-catalogs.md` lists each catalog processed so far, its
  quirks, the repairs made, and the linking decisions, so repeat questions
  ("why is Zeus Gigante the road hub?") have an answer.
- Sibling API routes (`/bikeBrands`, `/bikesbybrand`, `/bikedetail`,
  `/searchBikes`) read these tables; `bike.created_at` and
  `bike_spec.updated_at` are DB defaults, nothing to set.
