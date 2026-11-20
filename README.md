## To run

npm run start

## eBay marketplace listings

`GET /getTopListings?componentId=<id>&region=US` looks up a component search
and its category ladder, then searches the five sites configured for that region
in [ebay-regions.js](ebay-regions.js). Every search filters delivery to the
selected region. Results keep the home site first, retain each site’s order and
deduplicate by eBay’s legacy item ID. Each listing includes its marketplace and
original price currency; prices are not converted to a common currency.

The `velo-describe` client implements the region picker in
`screens/MarketAppraisalScreen.js` and persists it with
`hooks/useMarketplaceRegion.js` (US default, no geolocation). Requests send
`componentId` and `region`, and prices show both currency and site. Its 16
region codes match `EBAY_REGIONS`; keep those lists synchronized. Users in
countries outside the configured list choose a supported region. Arbitrary
delivery countries, currency conversion and a region cache are separate possible
extensions, not outstanding implementation steps for the existing picker.

`region` and legacy `marketplace` parameters are mutually exclusive. The API
retains `marketplace=ALL` for older clients; with neither parameter it searches
US only. One site failing does not discard results from the others. Each of the
five sites may attempt several category rungs, so request cost depends on which
rung first produces results. Category IDs and fallbacks live in
[ebay-categories.js](ebay-categories.js);
`scripts/validate-ebay-categories.js` checks them against the configured sites.

The site ordering comes from the **2026-10-28 probes** (git history `5a7b519` /
`67ed6b4`): GB, US, FR and DE supplied distinct vintage stock; smaller sites
mostly overlapped. Listings repeated across sites, and destination shipping
costs were often missing, so region results preserve site order rather than
rank different currencies by price plus shipping. Probe observations and the
ordering rationale are also recorded in `ebay-regions.js`.

## Loading component and bike data into the AWS database

The database is the `velo-components` RDS MySQL instance in eu-central-1. It is
publicly accessible but its security group only allows specific IPs on 3306, so
the load runs from your laptop (no SSH/SSM hop needed). Add your current IP
(`curl https://checkip.amazonaws.com`) to security group `sg-0cebc796388f2a131`
if the connection times out.

`scripts/load-sql.js` runs .sql files using the app's own `.env` and password
decryption, so no mysql client is required:

```
node scripts/load-sql.js --check   # connectivity + schema/row-count snapshot, no writes
node scripts/load-sql.js <file.sql>
```

Tables are created from the `scripts/*.sql` CREATE TABLE files; the `--check`
output flags a schema that has fallen behind them (e.g. missing
`component_detail.source_id`).

`component_detail`/`bike`/`bike_spec` rows are provenance-tracked via
`source_ref` into `data_source` (`SELECT source_type, COUNT(*) FROM data_source
GROUP BY source_type`). All bulk data now comes from ingesting scanned
manufacturer/bike catalogues by hand — see the `ingest-component-catalog` and
`ingest-bike-specs` skills. There used to be a one-off velobase.com crawler
(`crawl-components.js`, `crawl-component-details.js`, `generate-update-sql.js`)
that seeded the DB before catalogue ingestion existed; it and its generated
snapshots (`velobase-components.csv`, `velobase-component-details.jsonl`,
`velobase-update.sql`) have been removed along with `scripts/cleanup.sql` (a
wipe-before-reload step that only made sense for that crawl and had become
actively destructive to catalogue-only data — see git history if you need any
of it back).

### Proposed component evidence references

The current component `source_ref` identifies the source of the last
source-driven change, not every source supporting the row. `/componentdetail`
exposes its label and type. A second source can corroborate an unchanged row,
and a source can support only one attribute or contradict another source; none
of those relationships should overwrite `source_ref`.

Add a `component_evidence` table with an auto-increment primary key,
`component_id` and `source_id` integer references, a required `locator`
(varchar(255), e.g. printed page and panel, or an empty string if unknown),
and a required `claim` (varchar(255), a concise statement of what the source
actually shows). Add a unique key on `(component_id, source_id, locator, claim)`
for repeatable ingestion and an index on `source_id`. Match the existing
database's engine and integer types when implementing; validate references on
write, and decide foreign-key and delete behaviour against the live schema.
Multiple claims or locations from the same source are allowed. Record conflicting
evidence as claims, without implying that all claims describe current row values
or establishing production boundaries from an isolated appearance.

On a reviewed import, insert evidence for each verified claim even when the
component row is unchanged. Update `source_ref` only when that source actually
changes the component's data, in the same transaction as the change and its
evidence. Replaying an import must not change `source_ref` or duplicate evidence.
Manual corrections without a source should not invent one; document their reason
in the existing notes. On component merges, review and transfer evidence to the
survivor, deduplicating identical claims before deleting the old row. Keep
source and catalogue notes as the detailed audit trail: this table is not a
field-level change history.

For rollout, add the table before deploying writers and readers. Backfill only
verified claims and locators from notes; the existing `source_ref` alone does
not establish a specific claim or page. Existing rows may therefore have no
evidence entries. Preserve the current `/componentdetail` response fields and
add a separate evidence array per component, ordered consistently, with source
ID, label, type, citation, locator and claim. Fetch it separately or aggregate
carefully so multiple references do not duplicate component rows. Deploy the
reader after the schema, update ingest workflows, then backfill incrementally.
Validate repeat imports, unchanged corroboration, changed rows, multiple claims,
conflicts, merge handling, missing references and existing API consumers before
using it in the client. Roll back readers and writers before removing the table;
retain exported evidence if a rollback would otherwise discard collected data.

## Checking database quality

Run `node scripts/quality-report.js` for a read-only report over the existing
database, using the same `.env` connection as `db-query.js`. The command uses
one repeatable-read, read-only MySQL transaction and selects explicit columns
from the ten catalogue tables; it neither downloads images nor writes files,
schema or records. An unavailable table/query fails the command rather than
producing a partial clean result.

```sh
node scripts/quality-report.js --limit=5  # first five findings per check
node scripts/quality-report.js --limit=0  # all findings
node scripts/quality-report.js --json     # complete machine-readable report
```

Errors cover missing required/dangling references, component/group brand-owner
conflicts, duplicate bike specs, reversed date ranges and incompatible linked
categories. Duplicate specs mean the same bike, label and exact stored value,
regardless of component link/source; different values under one label remain
separate. Nullable group ownership means a shared group; an unlinked spec is valid.

Review findings cover missing component/bike/spec provenance, incomplete
component dates, undated bikes, dates requiring interpretation, linked-bike
date conflicts, linked labels without category rules and descriptions at the
255-character limit. These need evidence review before changing data. Bike
`year_from` alone is a normal single-year catalogue entry. Missing component
date bounds remain unknown; neither bound is inferred from the other.

Category rules come from `spec-categories.js`, shared with the bike generator
without changing its matching rules. Integrated shift/brake controls are valid
for Brake Levers. A Freewheel label linked to Cassettes or Single Sprockets is
a review candidate (`broad_freewheel_label`), because period catalogue headings
can cover either mechanism; the label alone does not establish a bad link.

Text output separates errors and review candidates, showing IDs, reasons and
related records. `--limit` affects text examples only; counts and JSON remain
complete. JSON contains timestamps, scope, table row counts, a summary and all
findings. Counts are findings, not distinct affected records; one record can
have several findings, and duplicate specs count once per set. Exit codes are
0 for no errors (reviews may remain), 2 for data errors, and 1 for command/query
failure. There is no repair mode.

| Report | Purpose |
| --- | --- |
| `scripts/quality-report.js` | Structural integrity and metadata/date review candidates |
| `scripts/duplicate-report.js` | Possible duplicate component identities and variants |
| `scripts/compare-bike-links.js` | Current generator matches versus stored bike-spec links |
| `/linkCoverage` | Linked/unlinked bike specs and identification priorities |

`/linkCoverage?unlinked=N` includes `next`, `candidate_count` and up to three
`candidates` (component ID, title and date bounds) on each listed value.
`next: "override"` means existing rows share the detected maker, component
category and model text; `next: "source_hunt"` means this heuristic found none.
Maker and model comparisons ignore spaces, including SunTour / Sun Tour and
LePree / Le Pree. Candidates are ordered by ID, and the count includes matches
beyond the three examples. They need identity, generation and fitment review
before any mapping; date bounds are displayed rather than used to exclude rows.
Unbranded values and labels without known component categories cannot produce
candidates, so a source-hunt hint is not proof that a component row is missing.
`unlinked=0` skips both classification and candidate queries. This endpoint is
read-only and does not apply overrides or change links.

Specs already reviewed and deliberately left unlinked are kept out of each
category's `values` and class counts and summarised instead as
`reviewed_unlinked: { values, bikes }`, per category and overall. A spec counts
as reviewed when `COMPONENT_OVERRIDES` explicitly resolves it to `id: null` for
its bike and year, or when it matches an entry in `REVIEWED_UNLINKED`
(`link-decisions.js`: label, value, optional bike and year range, reason and a
link to the decision in `link-decisions.md`). An override whose year ranges
simply miss the spec is still an open gap, not a review. `?reviewed=1` also
lists each category's reviewed values (up to `unlinked`) with `source`
(`override` or `registry`), `reason` and `ref`. Totals and link rates still
count every spec. Record a new leave-unlinked decision in `link-decisions.md`
and add its registry entry (or a null override) in the same change. Validated with classifier
and route fixtures; live deployment remains separate from local code changes.

Validated against fixture cases, the existing test suite and the live database
on **2026-11-15 at 10:57 UTC**: 10,258 components, 1,199 bikes and 20,600 specs;
**0 structural errors**, 2,033 review findings: 1,553 components with incomplete
dates, 421 linked specs outside a known component date bound, 35 broad Freewheel
labels and 24 descriptions at the length limit. No missing provenance, dangling
references, exact duplicate bike specs, ownership conflicts or reversed date
ranges were found. This is a dated whole-DB quality snapshot, not a new link
coverage calculation or a conclusion that all identities are correct.

## Comparing generated and stored bike links

Run `node scripts/compare-bike-links.js` to compare the current generator's
proposed component links with the live database. It shares CSV parsing,
model exclusions, overrides, matching, cell splitting, integrated-control
fallbacks and stored-value truncation with `generate-bike-update-sql.js`.
It never generates or overwrites `bike-update.sql` and never changes the DB.

```sh
node scripts/compare-bike-links.js --limit=5
node scripts/compare-bike-links.js --json
node scripts/compare-bike-links.js bike_specs/1986_miyata_spec.csv --limit=0
```

The default scans local `bike_specs/*.csv`, selecting only catalogue sources
that already have bikes in the DB. Positional CSV paths narrow that selection.
Unloaded CSVs are skipped before reading their contents. JSON lists selected
sources/files, skipped files and loaded catalogue sources without a selected
CSV. A loaded catalogue without a local CSV cannot be compared. Bikes without
catalogue provenance are outside this report; use `quality-report.js` for
missing provenance.

The DB reads use a single repeatable-read, read-only transaction. Each generated
bike is paired by catalogue source, brand, title and year, then each spec by
canonical label and exact stored value. Country editions remain separate.
Missing bikes/specs on either side and duplicate identities are reported as
`missing_in_db`, `missing_in_csv` or `ambiguous`, separately from link changes.
These findings count bikes or specs as identified by `entity`; a missing or
ambiguous bike is reported once, without comparing its specs. Title, label or
value differences appear as missing identities rather than guessed matches.

`gained` means a stored NULL now has a proposed match; `lost` means a stored
link has no proposed match; `changed` means two different component IDs.
Details include bike/spec IDs, original value and both component identities.
These are review candidates, not approved corrections. In particular, normal
SQL generation only fills NULL links: it does not apply reported losses or
replace existing links. `compared` includes uniquely paired specs only, and
`unchanged` includes both unchanged links and specs still unlinked.

Text defaults to 20 examples per finding kind; `--limit=0` shows all.
`--json` always includes every finding and timestamps. Exit 0 means the
comparison completed, even with differences; exit 1 means an input/query failure.
The command fails rather than returning partial findings on a query error.

Validated **2026-11-16** against fixtures and the full test suite, then against
94 live loaded catalogues: 20,845 uniquely paired specs, 20,806 unchanged,
6 proposed gains, 33 proposed losses and no changed targets or missing/ambiguous
identities. These are dated observations, not approved mapping changes. The
refactored generator's SQL was byte-identical to its prior implementation across
all local CSVs using the same live component snapshot; the comparison preserved
the existing `bike-update.sql` checksum.

## Reviewing duplicate components

`node scripts/duplicate-report.js` is read-only. It groups rows by brand,
category and title without parentheticals, then compares every unordered pair
within each group, including pairs that exclude the preferred survivor.
`--merge` shows duplicate/cosmetic candidates; `--relation=`, `--used`,
`--brand=` and `--category=` narrow the results. Combined filters must match
the same pair; `--used` checks bike links on either endpoint. Candidates need
evidence review before any merge.

Text output identifies both endpoints. JSON groups contain `survivor` and
`pairs: [{a, b, relation}]`; summary entries contain `{pairs: N}`. Counts are
comparisons, so one row may occur in several pairs. They are not counts of
distinct components, proposed deletions or links to repoint. This replaces the
old survivor-relative JSON `others` and summary `rows`/`repoint` fields.
`buildGroups` retains its survivor-relative `others` view for code callers.
The separate `--near` and `--paren` modes retain their existing pair output.

Shared qualifier clauses and speed counts are removed before classifying the
difference: `(6 speed, gold)` versus `(6-speed, silver)` is cosmetic, while
different speed counts are configurations. Disjoint dates remain generations.
Recorded kept-apart pairs and rows in `REVIEWED_VARIANTS` stay protected from
merge recommendations whichever endpoint is preferred, including in larger
groups; other pairs in those groups are still compared.

Validated 2026-11-15 with classifier regressions (including the historical,
already-merged Regina 2177/2178 example) and CLI tests using fixed query results
for pair output, combined filters, counts and reviewed variants. This tooling
change does not establish new live DB duplicate counts or apply any merges.

## TODO

See [TODO.md](TODO.md).
