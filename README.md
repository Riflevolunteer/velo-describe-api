## To run

npm run start

## Loading component data into the AWS database

The database is the `velo-components` RDS MySQL instance in eu-central-1. It is
publicly accessible but its security group only allows specific IPs on 3306, so
the load runs from your laptop (no SSH/SSM hop needed). Add your current IP
(`curl https://checkip.amazonaws.com`) to security group `sg-0cebc796388f2a131`
if the connection times out.

`scripts/load-sql.js` runs .sql files using the app's own `.env` and password
decryption, so no mysql client is required.

```
# 1. Regenerate the SQL from the crawl output
node scripts/generate-update-sql.js

# 2. Check connectivity and see current schema / row counts (read-only)
node scripts/load-sql.js --check

# 3. Wipe and reload all component data (about a minute; ~9k statements)
node scripts/load-sql.js scripts/cleanup.sql velobase-update.sql
```

Tables are created from the `scripts/*.sql` CREATE TABLE files; the `--check`
output flags a schema that has fallen behind them (e.g. missing
`component_detail.source_id`).

Step 3 is a full wipe-and-reload; the data is entirely regenerable from
`velobase-component-details.jsonl`, and RDS automated backups cover rollback.
The post-load snapshot should show ~6989 component_detail rows and a non-zero
Ofmega brakes count.

# TODO


- convert to es-2015 using babel

- Fix DB data quality issues with brands with No Components 

- ~~Add Search feature~~ done - `/searchComponents?q=` endpoint

- maybe also show max and min

- apply for eBay Marketplace Insights API access (sold prices, not just asking prices) - current app creds get invalid_scope for buy.marketplace.insights
