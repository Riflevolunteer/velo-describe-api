---
name: ingest-component-catalog
description: Read a scanned manufacturer component catalog (PDF or a folder of page JPGs, e.g. Campagnolo Catalogo N. 12/13/14) and reconcile it with the component_detail table: list every component with DB category, part-numbered title, description and year, diff it against existing rows by part number, then apply year corrections and any genuinely new rows as idempotent SQL. Use this whenever the user drops in a component catalog, price list or parts book and asks to analyse it, list its components, "see what we can ascertain", diff it against the DB, or fix component years from a catalog. Not for bike catalogs (bikes with specs) — that is ingest-bike-specs.
---

# Ingest a component catalog

A manufacturer catalog is evidence about components: which part numbers
existed, what they were called, and which years they were on sale.
`component_detail` is populated from several sources — a velobase crawl and a
growing set of catalogues, each tracked via `source_ref` into `data_source`
(`SELECT * FROM data_source`) — and for most brands the velobase crawl already
has most parts, so a catalog's job is usually confirmation, year bounds, and
the occasional missing part. But a catalog is not merely a correction layer on
top of velobase: if the brand or part isn't in the DB at all yet, the catalog
is the first and only source for those rows, inserted the same way. The job is
to read it carefully, diff by part number, and change only what the pages
actually support.

## 1. Make the pages readable

- **PDF**: `pdfinfo` for page count; `pdftotext -f 1 -l 3 file - | wc -c`
  to check for a text layer. Nearly all of these are scans with none, so
  read them visually with the Read tool, `pages` in batches of ≤20 (its
  hard limit). Needs poppler (`brew install poppler`) for rendering.
- **Folder of JPGs**: bind them into one PDF first so they can be read in
  batches instead of 40 separate calls:
  `scripts/bind-images-to-pdf.sh <folder> <out.pdf>` (downscales to 1800 px
  with sips, converts each to PDF, merges with pdfunite). Sort order is the
  filename order; print the page→file map so you can cite pages.
- Pages are often rotated 90° in the scan; they are still legible. Later
  bound-in pages may come from a different printing (N. 12 had one).

## 2. List the components

Produce the listing in the chat first, before touching the DB, as a table
per category with these columns:

- **Category** — the DB's `component_category` title (Rear Derailleurs,
  Front Derailleurs, Shifters, Hubs, Brakes, Cranksets, Bottom Brackets,
  Headsets, Pedals, Seat Posts, Chains, Freewheels, Rims, Tyres, Saddles,
  Stems, Handlebars, Brake Levers, Chainrings, Single Sprockets, Cassettes,
  Wheel(sets), Geared Hubs, Shifting Brake Levers). Dropouts, frame
  fittings, cables, bands, pump clips and tools have no category: list them
  in one summary line and say they are out of scope.
- **Title** — in the DB's convention `Campagnolo <part no>, <name>`, e.g.
  "Campagnolo 1012/4, Gran Sport". Include sub-numbers when the catalog
  sells them separately (1001/1 front hub vs 1001/2 rear hub).
- **Description** — what the catalog says: what the part is, what it is
  sold with, cable lengths, threadings, sub-part numbers if useful.
- **Year** — the catalog year, and separately what the catalog implies
  (a Bartali 1948 photo means the part predates the catalog; a part present
  in N. 13 and absent from N. 14 has a year_to between them).

Close the listing with a "what we can ascertain" section: what is new in
this printing vs the previous one, what has been dropped, and what the
catalog's own dating implies. Then stop and let the user ask for the diff.

## 3. Diff against the DB

`scripts/component-diff.js '<title regex>'` prints matching rows with
category, years, description tail and source_id. Query by part number, not
by name — names drift (the 1040 track headset is titled "Record Pista #
1040" in the DB but was Gran Sport in 1960). A useful regex for a numbered
range: `'10(3[4-9]|4[0-9]|5[0-3])(/|,| |$)'`.

Read the DB rows' own `year_from`/`year_to` before judging: the existing
dates are often per-version and are the thing you are reconciling against
(check `source_ref` — join to `data_source` — if it matters which source set
them). Classify each catalog item as:

- **Present, years compatible** — no change to years, but still check the
  next bullet for enrichment.
- **Present, catalog extends the years** — a part listed as current moves
  `year_to` up to the catalog year; a part listed earlier than the DB's
  `year_from` moves that down. A part missing from a later catalog bounds
  `year_to` at the previous catalog's year, no further.
- **Present, catalog adds detail years alone don't capture** — a match by
  part number is not just a years check. If the catalog's title or
  description carries something the DB row doesn't (a model name, a
  material, a cable length, a sub-part breakdown, what it's sold with), fold
  it in even when the years already agree:
  - **Velobase is not the authority.** Its titles and descriptions are a
    crawl, often bare, sometimes garbled ("SO61", "(version 2)" with no
    version 1, a double space, a reversed hanger note). A manufacturer
    catalogue outranks it. Rewrite titles and descriptions outright when
    the catalogue gives a better one: fix typos, drop orphaned or
    unsupported suffixes, adopt the catalogue's model name and code, and
    replace wrong, redundant or confusing text rather than appending a
    correction after it. Propose these in the diff like any other change;
    they don't need a separate confirmation round.
  - Keep velobase facts that are independent evidence and not contradicted
    by the catalogue, chiefly measured weights ("(Actual)", "(avg)").
    Drop a velobase "(Spec)" weight that just repeats a catalogue figure.
  - **Same name, thin description** — rewrite the description to carry the
    catalog's detail (what it is, material, capacity, weight, codes)
    instead of leaving it as bare as the crawl left it.
  - **Present under another name** — same part number, different title
    (Record vs Gran Sport). Part numbers are reused across eras, so pick
    the title the catalogues best support for that row's years and mention
    the other name in the description; don't duplicate the row.
  - Earlier catalogue notes on the row (from our own passes) are ours to
    restructure too: consolidate repeated "1981 catalog: ... Sep 1981
    catalog: ..." fragments into one coherent description when a row gets
    crowded, keeping which catalogue each figure came from.
  - Record a rewrite's old title in `known-catalogs.md` (as with deleted
    rows), so a later source using the old name can still be matched.
- **Genuinely missing** — only for categories that exist. Confirm by part
  number and by name before inserting.
- **Apparent duplicates, placeholders, or rows the catalog shows don't
  belong** (two rows, same title, different source_id and weight; a row
  that's actually a bare placeholder superseded by a numbered one; a part
  the catalog's own text says never existed as described) are not something
  to just leave alone by default. Deleting or merging them is a normal,
  available outcome of a catalog reconciliation — the `known-catalogs.md`
  history has many of these (the 2026-09-28 Campagnolo dedupe passes deleted
  dozens of rows). Prefer a distinguishing title suffix over deletion only
  when the rows are each independently attested (two genuine
  catalog-photographed variants); otherwise propose the merge/delete plan
  and get the user's go-ahead (destructive statements need review, same as
  any DELETE) before running it.
- **Existing row, especially velobase-sourced, absent from this catalog** —
  absence from one catalog alone is weak evidence (see the year-bounding
  bullet above; it just caps `year_to`, it doesn't imply the part never
  existed). Only raise it as a merge/delete candidate when the absence
  *combines* with an independent duplicate/placeholder signal — bare or
  generic title, no part number, a near-identical row elsewhere with a real
  part number, or the catalog's own text contradicting it. In that case
  treat it exactly like the bullet above: propose the merge/delete plan and
  wait for confirmation before running it. Don't propose deletion on
  absence alone.

## 4. Apply as idempotent SQL

Write one `.sql` file per catalog in the scratchpad, then
`node scripts/load-sql.js <file>` and verify with `scripts/db-query.js`.

- `UPDATE ... WHERE component_id = N AND year_to < Y` style guards so a
  re-run is a no-op.
- Inserts mirror an existing row of the same brand/category: `brand_id`,
  `category_id`, `group_id` (look up `component_group` by title),
  `search_text` = `"<title> <category>"`.
- **Provenance**: look up this catalogue's `data_source` row —
  `SELECT source_id FROM data_source WHERE source_type = 'catalogue' AND label = '<label>'`
  (label convention: `"<Manufacturer> <short catalogue name> (<year>)"`, e.g.
  `Campagnolo Catalogue n. 18, English edition (c. 1985)` — match
  `known-catalogs.md`'s section headings). If it doesn't exist yet, insert it
  first (`source_type = 'catalogue'`, `citation` = the source filename/path).
  Set every new row's `source_ref` to that id. This catalogue does not need
  to be a correction to an existing velobase row — if the brand or part isn't
  in the DB at all, these inserts are the first and only source for it.
  Still also give every new row a `source_id` — `component_detail.source_id`
  is the load-idempotency key regardless of source, so it still needs a
  unique value — but generate it as a plain UUID (`SELECT UUID()` in the SQL,
  or `crypto.randomUUID()` if scripting it) rather than the retired
  `MANUAL-<CODE>-<YEAR>-<part>` naming. That naming existed only to dodge the
  velobase crawler's GUID space; `source_ref` now carries the actual
  provenance, so a `MANUAL-...`-shaped id buys nothing a UUID doesn't.
- **Comments on their own lines.** `load-sql.js` splits on `;` followed by
  a newline; a trailing `-- comment` after the semicolon merges statements
  into one batch. MySQL has executed them anyway so far, but the statement
  count it reports is then wrong, and it is not something to rely on.
- Description changes are idempotent either way: an append is guarded
  with `description NOT LIKE '%Catalogo N. 14%'`; a rewrite sets the new
  text with `WHERE component_id = N AND description <> '<new text>'`.
  `description` is `varchar(255)` and silently truncates, so check
  `CHAR_LENGTH` of the new text before loading.
- **Deletes and merges are in scope, not just inserts/updates.** Before
  deleting a row: check `bike_spec.component_id` for links to it and
  `COMPONENT_OVERRIDES` in `scripts/generate-bike-update-sql.js` for
  references to its id — move them to the surviving row first (an override
  or a linked spec pointing at a deleted id silently breaks). Present the
  DELETE statements for review like any other SQL; nothing here auto-runs
  a DELETE without the user seeing it first.

Report the result as a table of row, part, change. State which changes came
from a different catalog than the one being processed (they happen: a bike
catalog can show a brake still fitted years after the DB's year_to).

## 5. Record it

Add an entry to `references/known-catalogs.md`: catalog, year, source file,
what was new/dropped vs the previous printing, rows added, rows adjusted,
rows deleted/merged and why (include the deleted row's id and source_id, so
a later catalog that seems to reintroduce it can be recognised as the same
part), and anything left unresolved. Nothing in the repo changes for a
catalog, so there is normally nothing to commit; the SQL stays in the
scratchpad.

## Gotchas

- DB access needs your IP in the RDS security group; `connect ETIMEDOUT`
  means it changed (README).
- The Read tool's PDF renderer needs poppler's `pdftoppm`.
- A catalog is a first-appearance record, not a start date: do not move
  `year_from` earlier than the DB says unless the catalog itself is earlier.
- Bike-catalog overrides (`COMPONENT_OVERRIDES` in the bike generator) that
  pick a version by year must agree with these rows' years; if you change a
  component's years here, check the bike skill's ranges.
