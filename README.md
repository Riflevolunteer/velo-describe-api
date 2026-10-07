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

- Audit component_id link rate by category - currently ranges from 9% (Handlebars) to 82% (Rear Derailleurs) across the 8 loaded bike brands, with no clear correlation to catalogue size (Brake Levers has 392 components yet only 21% link; Rear Derailleurs has 865 and hits 82%). Spot-checked a sample of unlinked Handlebars/Tyres values and found three distinct causes, in descending order of how much of the gap they explain: (1) brand-only spec text with no model ("Cinelli Handlebars", "Michelin 700c Tires") - correctly left unlinked since multiple candidate models exist and matchComponent refuses to guess; (2) pure dimension specs with no brand ("28 x 1 5/8 x 1 1/4 two-tone") - not a "component" in any linkable sense; (3) genuinely missing component_detail rows for specific named models (e.g. three D'Alessandro tubular models referenced in specs aren't in the DB at all). Also confirmed short/ambiguous-but-resolvable cases like "TTT" (Handlebars, blocked by the word-boundary guard in matchComponent from matching "3ttt Aero - early 1980's" despite being the only sensible candidate) aren't a matcher bug - they're exactly what COMPONENT_OVERRIDES exists for, just not yet added for this value.

- Add missing component_detail rows for named models found in a full unlinked-spec sweep of the 5 weakest-linking categories (Handlebars, Tyres, Rims, Brake Levers, Freewheel - see the link-rate audit above). Of 671 unlinked specs (359 unique values) across these categories, ~64% had no matching candidate at all; of those, the following name a real, specific product rather than a generic brand+descriptor phrase (which can never resolve to one row) or a bare dimension/weight string (not a "component"):
  - Handlebars: ITM Mondial, ITM Mondial Pista, Modolo Flyer, Kusuki WPR-B randonneur style, Kusuki WP-B light alloy, PIVO Professional, T.T.T. Franco Belge, T.T.T. RECORD (check these last two aren't already in the DB under a "3ttt ..." title before adding)
  - Tyres: Vittoria Open Tubular Flash M19, Vittoria Open Tubular, Panaracer Smoke/Dart Comp (+ Kevlar variant), Panaracer Smoke, Panaracer Ridgeline-2 700x35C, Ritchey Megabite Hardrive, Ritchey Z-Max, Clement No. 3 Silk Tubular, Clement Ritmo Tubular, D'Alessandro Mondiale/Super-Cross/Leggerísimo Pista Tubulars, IRC Triathlon 700x20C, Michelin Competition Slick 700x20C, Bianchi Parabola-XT, Bianchi Advantage-SL Road, Bianchi Advantage, CST C-631
  - Rims: Rigida Jade, Rigida Saphir, Ukai EX-17, Ukai 22A, Araya AP21/VX300/PX-35/PX-45/RM-18T/VP20/SP-30, FIR Tour, FIR Pulsar
  - Brake Levers: Dia-Compe 164, Dia-Compe 161
  - Freewheel: Sun Tour Ultra 6, Shimano 600AX Cassette, Regina CXS 7-speed - but most of this category's remaining unlinked specs are brand + bare tooth-range ("Maillard 14-15-17-19-21-24", "Shimano 14-28T") describing gearing config rather than naming a distinct product; worth deciding whether vintage freewheels should even be catalogued by tooth range before adding rows for these, since otherwise they're permanently unlinkable regardless of data entry

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

- show the data source at the bottom of bike spec views and component views - API side done: `/bikedetail` (on `bike`) and `/componentdetail` now return `source_label` (e.g. "1973 Zeus catalogue") and `source_type` from `data_source`. Still needs rendering in the client app; 85% of components are `source_type = 'velobase'`, so the client may want to only show catalogue sources. Possible follow-up: on component pages, list the catalogues whose bikes fitted that part (via `bike_spec` → `bike` → `data_source`, 66 components appear in more than one)

- velo-pages.com (a Gallery2 photo site) is currently 500ing site-wide (whole domain, every endpoint), so it can't be browsed directly. Went looking for a Modolo 1979 "Professional" brochure there (`g2_itemId=5745`) and found the Wayback Machine never archived it beyond 150x150 thumbnails (confirmed by exhaustively checking every serial number) - unreadable, dead end, as is the related 1983 Modolo brochure (`g2_itemId=33044`, zero images archived at all, not even thumbnails). But the same method - CDX-search the whole domain for archived images over ~15KB (thumbnails run 2-6KB; real scans are hundreds of KB to a few MB), then cluster by itemId proximity since a brochure's pages get sequential IDs, then resolve each cluster's title via the nearest archived HTML page (typically itemId-3..itemId+3) - surfaced 36 other multi-page clusters site-wide that *do* have full-resolution scans archived. Catalogues/brochures identified so far, readable and ready to feed into `ingest-component-catalog` once someone pulls the images:
  - Simplex - Product Sheets (09-1975), ~itemId 20404-20650, 116 images (by far the biggest - likely the full derailleur/component line)
  - Fiamme catalog (1985), ~1400-1464, 39 images
  - Shimano 105 technical information (1983), ~7179-7234, 14 images
  - SunTour advertisement (03-1975), ~12410-12470, 13 images
  - ~~3ttt catalog - Product Sheets (1988), ~6732-6762, 12 images~~ done - actually 1986 (p. 1 dates the 3T mark to 1961 + 25 years) and a 30-page album (`g2_itemId=6809`), of which only 13 pages are archived; ingested as data_source 134, see `known-catalogs/3ttt.md`
  - Simplex catalog (1971), ~19978-20006, 9 images
  - ~~Regina catalog (1978), ~5937-5984, 9 images~~ done - Catalogo C-78, 16-page album (`g2_itemId=5934`), 8 pages archived; ingested as data_source 138, see `known-catalogs/regina.md`
  - Detto Pietro catalog (1970's), ~6606-6638, 9 images
  - Shimano Dura-Ace EX brochure (1978), ~6973-6982, 5 images
  - Lyotard catalog (06-1977), ~2087-2110, 5 images
  - SunTour dealer catalog (1987), ~12884-12902, 4 images

  Also found, archived but not manufacturer catalogues (Bicycling Magazine/Bike World feature spreads - useful as corroborating evidence for specific models mentioned, not a source of part-numbered rows): Bicycling Magazine 06-1971 (1970 Paris Salon / 1971 NYC Cycle Show, ~13402-13462, 15 images), Bicycling Magazine 03-1969 (Evolution Of The Pedal, ~15622-15657, 11 images), Bicycling Magazine 01-1980 (Bicycle Workshop Pt.1 - Rear Derailleurs, ~18111-18134, 7 images), Bicycling Magazine 11-1974 (Stella SX-73 Model B, ~14387-14394, 4 images), Bicycling Magazine 03-1976 (Viscount product line, ~14683-14693, 4 images), Bike World 01-1979 (Wheel Truing For Beginners, ~17808-17813, 4 images). Two more clusters resolved to generic component-category pages rather than a catalogue/brochure title ("Chain - 03" ~20906-20921, "Seat Post - 02" ~20987-21020) - probably user-submitted photo sets, not manufacturer sources.

  17 more clusters are confirmed to have full-resolution images archived but couldn't be named (no archived HTML page found within itemId ±6 of the image cluster) Stronglight (1958): ~11510-11525 (6 images), SUNTOUR ~12603-12624 (4), ~13732-13755 (5), ~20730-20755 (8), ~21734-21755 (9), ~22839-22853 (5), ~25482-25496 (5), ~25915-25934 (4), ~26598-26619 (7), ~27321-27484 (54 - second-biggest find, worth prioritising), ~27595-27644 (15), ~27998-28024 (6), ~29092-29101 (4), ~30921-30946 (4), ~31110-31119 (6), ~42595-42622 (6), ~42864-42873 (4). Widening the offset search further, or just opening `https://web.archive.org/web/2020/https://www.velo-pages.com/main.php?g2_itemId=<id>` for the first id in each range by hand, should identify these.
