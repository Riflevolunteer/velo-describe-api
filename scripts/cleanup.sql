-- DANGER — do not run this against a DB that has catalogue-ingested data.
--
-- This was written when component_detail held only a velobase crawl and
-- velobase-update.sql could regenerate it losslessly. That stopped being true
-- once the ingest-component-catalog skill started inserting rows straight
-- into the DB (MANUAL-... source_id, tracked via source_ref -> data_source):
-- generate-update-sql.js only recreates brands/groups/categories/components
-- present in velobase-component-details.jsonl, so wiping and reloading here
-- silently and permanently deletes every catalogue-only row and any
-- catalogue-only brand/group/category, with no way to regenerate them.
-- Before ever running this again: `SELECT source_type, COUNT(*) FROM
-- data_source GROUP BY source_type` — if 'catalogue' is non-zero, don't.
--
-- Order matters: component_detail and category_brand reference the lookup tables,
-- so they must be cleared first.

DELETE FROM component_detail;
DELETE FROM category_brand;
DELETE FROM component_brand;
DELETE FROM component_group;
DELETE FROM component_category;

ALTER TABLE component_detail AUTO_INCREMENT = 1;
ALTER TABLE component_brand AUTO_INCREMENT = 1;
ALTER TABLE component_group AUTO_INCREMENT = 1;
ALTER TABLE component_category AUTO_INCREMENT = 1;
