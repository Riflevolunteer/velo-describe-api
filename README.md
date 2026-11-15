## To run

npm run start

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
