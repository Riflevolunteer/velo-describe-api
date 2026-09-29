## To run

npm run start

## Loading component and bike data into the AWS database

The database is the `velo-components` RDS MySQL instance in eu-central-1. It is
publicly accessible but its security group only allows specific IPs on 3306, so
the load runs from your laptop (no SSH/SSM hop needed). Add your current IP
(`curl https://checkip.amazonaws.com`) to security group `sg-0cebc796388f2a131`
if the connection times out.

`scripts/load-sql.js` runs .sql files using the app's own `.env` and password
decryption, so no mysql client is required.

`component_detail`/`bike`/`bike_spec` rows are provenance-tracked via
`source_ref` into `data_source` (`SELECT source_type, COUNT(*) FROM data_source
GROUP BY source_type`): some rows came from a one-off velobase.com crawl,
most now come from ingesting scanned manufacturer/bike catalogues by hand (see
the `ingest-component-catalog` and `ingest-bike-specs` skills). The crawl is
no longer the authoritative bulk source — it's one contributor among several,
useful for backfill or cross-checking a brand catalogue coverage hasn't
reached yet, not for regenerating the DB from scratch.

```
# 1. Regenerate the SQL from the crawl output (only ever adds/updates
#    velobase-sourced rows; never touches catalogue-sourced ones)
node scripts/generate-update-sql.js

# 2. Check connectivity and see current schema / row counts (read-only)
node scripts/load-sql.js --check

# 3. Load it
node scripts/load-sql.js velobase-update.sql
```

Tables are created from the `scripts/*.sql` CREATE TABLE files; the `--check`
output flags a schema that has fallen behind them (e.g. missing
`component_detail.source_id`).

`scripts/cleanup.sql` (wipe all component data before reloading) is legacy
from when the crawl was the only source and is now destructive: it deletes
catalogue-only rows, brands, groups and categories that `velobase-update.sql`
has no way to recreate. Read its header comment before ever running it again.

# TODO


- convert to es-2015 using babel

- Fix DB data quality issues with brands with No Components 

- ~~Add Search feature~~ done - `/searchComponents?q=` endpoint

- maybe also show max and min

- apply for eBay Marketplace Insights API access (sold prices, not just asking prices) - current app creds get invalid_scope for buy.marketplace.insights

- ~~Decouple the DB from velobase as the sole source of truth~~ done - `data_source`/`source_ref` provenance model (component_detail, bike, bike_spec all backfilled), ingest skills write catalogues as first-class sources, README/cleanup.sql no longer claim the DB is regenerable from a velobase wipe-and-reload

- once `source_ref`/`data_source` provenance has been relied on for a while, retire the `MANUAL-...` prefix convention on `component_detail.source_id` — it's now just a load-idempotency key, not provenance, and a plain sequential/UUID id would do

- `crypto.createDecipher` (used for the DB password in index.js/config.js and every scripts/*.js that connects) is deprecated by Node; migrate to `createDecipheriv` with an explicit IV
