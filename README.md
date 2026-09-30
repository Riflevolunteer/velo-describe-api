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

# TODO


- convert to es-2015 using babel

- Fix DB data quality issues with brands with No Components 

- ~~Add Search feature~~ done - `/searchComponents?q=` endpoint

- maybe also show max and min

- apply for eBay Marketplace Insights API access (sold prices, not just asking prices) - current app creds get invalid_scope for buy.marketplace.insights

- ~~Decouple the DB from velobase as the sole source of truth~~ done - `data_source`/`source_ref` provenance model (component_detail, bike, bike_spec all backfilled), ingest skills write catalogues as first-class sources, README/cleanup.sql no longer claim the DB is regenerable from a velobase wipe-and-reload; the velobase crawler and cleanup.sql have since been removed entirely (git history has them if needed)

- ~~retire the `MANUAL-...` prefix convention on `component_detail.source_id`~~ done - the skill now generates a UUID for new catalogue rows, and the 190 existing `MANUAL-...` rows were renamed to UUIDs too (one-off migration, since removed - git history has it if needed)

- `crypto.createDecipher` (used for the DB password in index.js/config.js and every scripts/*.js that connects) is deprecated by Node; migrate to `createDecipheriv` with an explicit IV

- ~~investigate the eBay Browse API's marketplace support to add other marketplaces~~ done - `?marketplace=` on `/getMarketPlacePrices`/`/getTopListings`, validated against `EBAY_MARKETPLACES` (EBAY_US default, GB/DE/FR/IT), passed through as `X-EBAY-C-MARKETPLACE-ID`; `/getMarketPlacePrices` now also returns `currency` since it's no longer always USD. `/getTopListings` still defaults to EBAY_US alone, since existing app clients render `price` without checking `currency` and a default fan-out would show e.g. GBP/EUR prices with no indication they aren't dollars; pass `?marketplace=ALL` to opt in to querying all five and merging results sorted by price (raw eBay relevance order isn't comparable across marketplaces), or `?marketplace=EBAY_XX` to narrow to one. `/getMarketPlacePrices` deliberately doesn't support ALL/default-to-all, since blending min/max/avg across currencies without FX conversion would be meaningless, so it still defaults to EBAY_US alone. Maybe add more marketplaces later (ES, AU, ...) as more catalogues get ingested

- ~~look into the 397 bare single-word `component_detail` rows (brand only, no model, e.g. "Simplex", "Shimano")~~ done - all 397 removed. 390 were unused velobase-crawl artifacts (some carrying the same bogus-specific-year shape that caused a 1979 Peugeot to show an "1920 Simplex" derailleur, see `ingest-bike-specs/references/known-catalogs.md`, "Bare-brand exact-match bug") and were deleted outright, along with the 119 `component_brand`/2 `component_group`/129 `category_brand` rows left with nothing else pointing at them; the other 7 were actually linked to real (but generic - chain pitch, gear-count range, bare brand name) `bike_spec` values, so those 29 spec rows were unlinked (`component_id` -> NULL, value/raw_label kept) before deleting the 7 placeholder rows. Also swept 6 more "brand + unknown model" rows (Falco Unknown, GIOS Unknown, OMAS unknown freewheel hubs with ti axle, Altenburger unknown, Bianchi (unknown), SunTour (unknown)) - none linked to bike_spec, deleted outright, plus the 3 brands (Falco, GIOS, the component-brand Bianchi) left with zero component_detail rows as a result

- ~~run a full DB sweep for other stray/placeholder rows~~ done - checked all FK-shaped references (component_detail/component_group/category_brand/component_brand/bike/bike_spec/data_source) for orphans, found none; did find and clean up 26 exact-duplicate component_detail rows (25 groups, all velobase double-crawls) and one junk component_group row literally titled "do not know" (id 248, zero components in it) - see known-catalogs.md for the per-group keep/delete detail

- ~~add a category filter to the eBay search~~ done - `fetchEbayListings` now passes `category_ids=57262` (eBay's "Bicycle Components & Parts") on every `/getMarketPlacePrices`/`/getTopListings` call; cut a "Brooks" search from 621k results (mostly Brooks Brothers/running shoes) to 1.3k genuine bike parts

- check `component_detail.search_text` values are actually good eBay search terms - it's `"<title> <category>"` (e.g. `"Agrati Extra Lusso Bottom Brackets"`), generated mechanically when each row was created/ingested, never reviewed for whether it's what a seller would actually title a listing as. Worth auditing a sample against real eBay results: parenthetical model notes stripped from title but sometimes the thing that would actually match a listing, the appended category name may not appear in real listing titles at all, older/obscure parts may just get zero results either way
