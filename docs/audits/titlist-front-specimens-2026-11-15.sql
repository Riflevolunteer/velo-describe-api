-- APPLIED 2026-11-15, user approved: repair Titlist provenance and merge 2452.
-- Applied 4 updates + 1 delete. Readback confirms both specimen assignments,
-- 2452 absent, and no temporary or retired synthetic reference remaining.
-- Rerun: 0 affected rows. Component rows: 10262 -> 10261.
-- 2451's original specimen matches the alloy-body EB-100 with round cage holes,
-- not the steel-body Uniglide EB-200 described by our catalogue enrichment.
-- Move that specimen reference to existing 7111 EB-100. Move 2452's correct
-- three-rectangular-opening Uniglide specimen reference to 2451 EB-200.
-- Preserve its 135g measured weight and remove the misplaced 140g spec figure.
-- Retain 2451's 1977-1979 dates, source_ref 68 and catalogue specifications;
-- retain all 7111 facts and dates. 2452's 1970 bucket is not production evidence.
-- Neither row being merged has bike_spec links or generator overrides.
-- No image BLOBs on any of the three rows; source_id is the specimen reference.
--
-- Visual evidence:
-- https://www.disraeligears.co.uk/site/a_complete_line_of_shimano_1975_page_18.html
-- EB-100: alloy body, steel chain guide, 16T, 140g, lower inlet 1 or 1-1/8in.
-- https://www.disraeligears.co.uk/site/shimano_bicycle_system_components_february_1977_-_page_24.html
-- EB-200 new: satin nickel steel body/guide, alloy clamp, 14T, 133g, 1-1/8in.
-- https://www.disraeligears.co.uk/site/shimano_bicycle_parts_-_74_page_10.html
-- E-304 shows the same earlier round-hole design, separately stored as 7376;
-- no E302/E304 / EB-100 renumbering merge is performed here.
-- Specimen pages/photos: /private/tmp/shimano-front-duplicates/.
-- Catalogue scans: /private/tmp/titlist-front-review/.
--
-- Before (all brand 51, category 9, group/image NULL, used 0):
-- 2451 title: Shimano EB-200, Titlist
-- description: Shimano EB-200, Titlist, Japan. Panta front derailleur, steel and satin nickel body and chain guide, light alloy clamp, 14T, 133g, 1-1/8in clamp (Feb 1977, new); velobase 140g (Spec).
-- years 1977-1979, source_ref 68, search_text Shimano EB-200 Titlist
-- source_id 7F74795E-4637-4100-950F-3151A1F41DF6
-- 2452 title: Shimano Uniglide Titlist
-- description: Shimano Uniglide Titlist, Japan, 135 grams (Actual)
-- years 1970-1970, source_ref 1, search_text Shimano Uniglide Titlist
-- source_id AB2F52F2-41E5-4D01-8A0C-754E9E021A44
-- 7111 title: Shimano EB-100, Titlist
-- description: Shimano EB-100, Titlist, Japan. Alloy-body front derailleur with steel cage, 16 T capacity, 140 g, lower inlet 1 or 1-1/8 in. 1975 catalogue.
-- years 1975-1976, source_ref 24, search_text Shimano EB-100 Titlist
-- source_id 205213ef-bc3e-11f1-a2df-02fea3763e8d (synthetic; retired)
--
-- Temporary UUIDs free the UNIQUE source_id values during the transfer.
-- Each step requires the preceding state; a completed rerun is a no-op.

START TRANSACTION;

SELECT component_id FROM component_detail
WHERE component_id IN (2451,2452,7111) ORDER BY component_id FOR UPDATE;

UPDATE component_detail d
JOIN component_detail later ON later.component_id = 2452
JOIN component_detail earlier ON earlier.component_id = 7111
SET d.source_id = '02de22a1-4c4f-4301-91ef-a9058259bc4b'
WHERE d.component_id = 2451 AND d.title = 'Shimano EB-200, Titlist'
  AND d.source_id = '7F74795E-4637-4100-950F-3151A1F41DF6'
  AND d.brand_id = 51 AND d.category_id = 9 AND d.source_ref = 68
  AND d.year_from = 1977 AND d.year_to = 1979
  AND later.title = 'Shimano Uniglide Titlist'
  AND later.source_id = 'AB2F52F2-41E5-4D01-8A0C-754E9E021A44'
  AND later.brand_id = 51 AND later.category_id = 9 AND later.source_ref = 1
  AND earlier.title = 'Shimano EB-100, Titlist'
  AND earlier.source_id = '205213ef-bc3e-11f1-a2df-02fea3763e8d'
  AND earlier.brand_id = 51 AND earlier.category_id = 9 AND earlier.source_ref = 24
  AND NOT EXISTS (SELECT 1 FROM bike_spec WHERE component_id = 2452);

UPDATE component_detail earlier
JOIN component_detail later ON later.component_id = 2451
SET earlier.source_id = '7F74795E-4637-4100-950F-3151A1F41DF6'
WHERE earlier.component_id = 7111 AND earlier.title = 'Shimano EB-100, Titlist'
  AND earlier.source_id = '205213ef-bc3e-11f1-a2df-02fea3763e8d'
  AND later.source_id = '02de22a1-4c4f-4301-91ef-a9058259bc4b';

UPDATE component_detail duplicate
JOIN component_detail survivor ON survivor.component_id = 2451
JOIN component_detail earlier ON earlier.component_id = 7111
SET duplicate.source_id = '72b74ad1-a0b7-489b-bd96-f132dffa0dca'
WHERE duplicate.component_id = 2452 AND duplicate.title = 'Shimano Uniglide Titlist'
  AND duplicate.source_id = 'AB2F52F2-41E5-4D01-8A0C-754E9E021A44'
  AND survivor.source_id = '02de22a1-4c4f-4301-91ef-a9058259bc4b'
  AND earlier.source_id = '7F74795E-4637-4100-950F-3151A1F41DF6';

UPDATE component_detail survivor
JOIN component_detail duplicate ON duplicate.component_id = 2452
SET survivor.source_id = 'AB2F52F2-41E5-4D01-8A0C-754E9E021A44',
    survivor.title = 'Shimano EB-200, Uniglide Titlist',
    survivor.search_text = 'Shimano EB-200 Uniglide Titlist',
    survivor.description = 'Shimano EB-200, Uniglide Titlist, Japan. Panta front derailleur, satin nickel steel body and chain guide, light alloy clamp, 14T capacity, 28.6mm clamp; three rectangular cage openings. 133g specified, 135g measured.'
WHERE survivor.component_id = 2451 AND survivor.title = 'Shimano EB-200, Titlist'
  AND survivor.source_id = '02de22a1-4c4f-4301-91ef-a9058259bc4b'
  AND duplicate.source_id = '72b74ad1-a0b7-489b-bd96-f132dffa0dca';

DELETE duplicate FROM component_detail duplicate
JOIN component_detail survivor ON survivor.component_id = 2451
JOIN component_detail earlier ON earlier.component_id = 7111
WHERE duplicate.component_id = 2452 AND duplicate.title = 'Shimano Uniglide Titlist'
  AND duplicate.source_id = '72b74ad1-a0b7-489b-bd96-f132dffa0dca'
  AND survivor.title = 'Shimano EB-200, Uniglide Titlist'
  AND survivor.source_id = 'AB2F52F2-41E5-4D01-8A0C-754E9E021A44'
  AND survivor.description LIKE '%135g measured.'
  AND earlier.source_id = '7F74795E-4637-4100-950F-3151A1F41DF6'
  AND NOT EXISTS (SELECT 1 FROM bike_spec WHERE component_id = duplicate.component_id);

COMMIT;
