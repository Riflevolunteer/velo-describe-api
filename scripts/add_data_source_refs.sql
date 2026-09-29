-- Adds generic source_ref (-> data_source.source_id) columns to the tables
-- that currently have no provenance tracking, or only the velobase-shaped
-- `component_detail.source_id` GUID/MANUAL-prefix convention.
--
-- Additive only: existing `component_detail.source_id` is left untouched so
-- nothing that depends on it (dedupe in scripts/generate-update-sql.js, the
-- MANUAL-... collision-avoidance convention in the ingest-component-catalog
-- skill) breaks. It can be retired in a later pass once source_ref is the
-- system of record.
--
-- Safe to re-run: run scripts/data_source.sql first if data_source doesn't
-- exist yet.

ALTER TABLE component_detail
  ADD COLUMN `source_ref` int DEFAULT NULL,
  ADD KEY `idx_component_detail_source_ref` (`source_ref`);

ALTER TABLE bike
  ADD COLUMN `source_ref` int DEFAULT NULL,
  ADD KEY `idx_bike_source_ref` (`source_ref`);

ALTER TABLE bike_spec
  ADD COLUMN `source_ref` int DEFAULT NULL,
  ADD KEY `idx_bike_spec_source_ref` (`source_ref`);

-- Backfill: everything currently in component_detail is either a velobase
-- crawl row (source_id = velobase GUID) or a manually-entered catalogue row
-- (source_id LIKE 'MANUAL-%'). Tag the velobase rows now, since that's a
-- single unambiguous source_ref value. The MANUAL-... rows encode which
-- catalogue they came from in the source_id string itself (see
-- .claude/skills/ingest-component-catalog/references/known-catalogs.md) but
-- mapping that back to per-catalogue data_source rows is a separate,
-- reviewable backfill pass -- do not guess it here.

INSERT INTO data_source (source_type, label, citation)
VALUES ('velobase', 'Velobase.com crawl', 'https://velobase.com');

UPDATE component_detail
SET source_ref = (SELECT source_id FROM data_source WHERE source_type = 'velobase' LIMIT 1)
WHERE source_id IS NOT NULL
  AND source_id NOT LIKE 'MANUAL-%';

-- bike / bike_spec have no existing marker to backfill from (not even a
-- MANUAL- convention) -- they stay source_ref = NULL ("unknown/legacy")
-- until/unless a bike_specs/*.csv -> catalogue mapping is reconstructed
-- from git history, per proposal step 4.
