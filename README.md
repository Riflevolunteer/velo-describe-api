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
| `/linkCoverage` | Linked/unlinked bike specs and identification priorities |

Validated against fixture cases, the existing test suite and the live database
on **2026-11-15 at 10:57 UTC**: 10,258 components, 1,199 bikes and 20,600 specs;
**0 structural errors**, 2,033 review findings: 1,553 components with incomplete
dates, 421 linked specs outside a known component date bound, 35 broad Freewheel
labels and 24 descriptions at the length limit. No missing provenance, dangling
references, exact duplicate bike specs, ownership conflicts or reversed date
ranges were found. This is a dated whole-DB quality snapshot, not a new link
coverage calculation or a conclusion that all identities are correct.

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
