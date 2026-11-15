-- APPLIED 2026-11-15, user approved: merge catalogue-only 7376 into 7111.
-- Applied 1 update + 1 delete. Readback confirms 7111's combined title,
-- description, 1972-1976 dates and specimen reference; 7376 absent.
-- Idempotency rerun: 0 affected rows. Component rows: 10261 -> 10260.
-- E302 / E304 -> EB-100 is an inferred renumbering: matching illustrated cast
-- alloy body/linkage, round-hole steel cage, 140g and lower-inlet clamp sizes.
-- No explicit factory old-code/new-code cross-reference has been located.
-- E302 is the 1in clamp; E304 is the 1-1/8in clamp. EB-100 offers both.
--
-- Evidence:
-- https://www.disraeligears.co.uk/site/shimano_bicycle_parts_-_72_page_4.html
-- https://www.disraeligears.co.uk/site/shimano_bicycle_parts_february_1973.html
-- February 1973 p.12: E304 mechanism 584 9002 and chain guide 584 9003.
-- https://www.disraeligears.co.uk/site/shimano_bicycle_parts_-_74_page_10.html
-- https://www.disraeligears.co.uk/site/a_complete_line_of_shimano_1975_page_18.html
-- Keep the historical E304 Dura-Ace / Titlist listing note from 7376.
-- Keep source_ref 24 (December 1974 catalogue / 1975 model year), the latest
-- primary catalogue used for this reconciliation. year_from 1975 -> 1972 is
-- supported by the September 1972 catalogue; retain existing year_to 1976,
-- which was originally guessed during the 1975 catalogue import.
-- Keep 7111's corrected original specimen reference from the preceding repair.
-- Neither row has bike_spec links or generator overrides. Both images NULL.
-- Review scans: /private/tmp/titlist-front-review/.
--
-- Before (both brand 51, category 9, group_id NULL):
-- 7111 title: Shimano EB-100, Titlist
-- description: Shimano EB-100, Titlist, Japan. Alloy-body front derailleur with steel cage, 16 T capacity, 140 g, lower inlet 1 or 1-1/8 in. 1975 catalogue.
-- years 1975-1976; source_ref 24; search_text Shimano EB-100 Titlist
-- source_id 7F74795E-4637-4100-950F-3151A1F41DF6
-- 7376 title: Shimano E302, Titlist
-- description: Shimano E302, Titlist, Japan. Front derailleur, light alloy with steel chain guide, 140g: E302 lower inlet 1in, E304 lower inlet 1-1/8in (1972-74, though the Jun 1974 catalogue lists only E304); E304 the Dura-Ace front Dec 1972, Titlist from Feb 1973.
-- years 1972-1974; source_ref 271; search_text Shimano E302 Titlist
-- source_id 46936e68-bde6-11f1-a2df-02fea3763e8d (synthetic; retired)

START TRANSACTION;

UPDATE component_detail
SET title = 'Shimano E302 / E304 / EB-100, Titlist',
    search_text = 'Shimano E302 E304 EB-100 Titlist',
    description = 'Shimano E302 / E304 / EB-100, Titlist, Japan. Alloy body, steel cage, 16T, 140g, lower inlet. E302 1in / E304 1-1/8in; EB-100 both sizes. Renumbering inferred. E304 listed as Dura-Ace Dec 1972, Titlist Feb 1973; Jun 1974 lists E304 only.',
    year_from = 1972
WHERE component_id = 7111 AND title = 'Shimano EB-100, Titlist'
  AND source_id = '7F74795E-4637-4100-950F-3151A1F41DF6'
  AND brand_id = 51 AND category_id = 9 AND source_ref = 24
  AND year_from = 1975 AND year_to = 1976
  AND description = 'Shimano EB-100, Titlist, Japan. Alloy-body front derailleur with steel cage, 16 T capacity, 140 g, lower inlet 1 or 1-1/8 in. 1975 catalogue.';

DELETE old FROM component_detail old
JOIN component_detail survivor ON survivor.component_id = 7111
  AND survivor.title = 'Shimano E302 / E304 / EB-100, Titlist'
  AND survivor.source_id = '7F74795E-4637-4100-950F-3151A1F41DF6'
  AND survivor.description = 'Shimano E302 / E304 / EB-100, Titlist, Japan. Alloy body, steel cage, 16T, 140g, lower inlet. E302 1in / E304 1-1/8in; EB-100 both sizes. Renumbering inferred. E304 listed as Dura-Ace Dec 1972, Titlist Feb 1973; Jun 1974 lists E304 only.'
  AND survivor.year_from = 1972 AND survivor.year_to = 1976
  AND survivor.source_ref = 24
WHERE old.component_id = 7376 AND old.title = 'Shimano E302, Titlist'
  AND old.source_id = '46936e68-bde6-11f1-a2df-02fea3763e8d'
  AND old.brand_id = 51 AND old.category_id = 9 AND old.source_ref = 271
  AND old.year_from = 1972 AND old.year_to = 1974
  AND NOT EXISTS (SELECT 1 FROM bike_spec WHERE component_id = old.component_id);

COMMIT;
