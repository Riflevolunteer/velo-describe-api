-- APPLIED 2026-11-15, user approved: merge the two Titlist renumbering pairs.
-- Applied: 2 updates + 2 deletes. Readback confirms both combined rows,
-- both original specimen source_ids retained, both duplicates absent.
-- Idempotency rerun: 0 affected rows. Component rows: 10265 -> 10263.
-- Evidence: Shimano September 1972 p.2, June 1974 p.7 and December 1974
-- (1975 model year) p.14 show matching designs, materials and weights:
-- D600 -> DB-200 (28T, 280g); D610 -> DB-210 (34T, 310g).
-- https://www.disraeligears.co.uk/site/shimano_bicycle_parts_-_72_page_2.html
-- https://www.disraeligears.co.uk/site/shimano_bicycle_parts_-_74_page_7.html
-- https://www.disraeligears.co.uk/site/a_complete_line_of_shimano_1975_page_14.html
--
-- Keep original VeloBase source_ids on 4437 / 4438. D601 / D611 are the
-- versions without the hanger adaptor and remain in the descriptions.
-- Keep the combined existing 1970-1976 bounds: 1970 is a VeloBase decade
-- bucket and 1976 was guessed during the original 1975 catalogue import.
-- Neither bound is established by this merge. source_ref -> 24, the
-- December 1974 catalogue that supplies the later code and front difference.
-- DB-600 (4440) / DB-610 (7428), the later lighter generation, stay separate.
-- No bike links or generator overrides on any of the four IDs at preflight.
--
-- Before (all brand 51, category 15, group_id/image NULL):
-- 4437: Shimano D600, Titlist; 1970-1974; source_ref 65;
-- search_text: Shimano D600 Titlist
-- source_id: 63220FCF-2A4C-4E59-8E7C-AFDCA097103D
-- description: Shimano D600, Titlist, Japan. Servo Panta rear derailleur, light alloy with steel cage, 28t, 280g; D601 without adaptor (Sep 1972). Renumbered DB-200 by 1975.
-- 4438: Shimano D610, Titlist G.S.; 1970-1974; source_ref 65;
-- search_text: Shimano D610 Titlist G.S.
-- source_id: 1F1B4D31-EE12-43DB-9785-2453A431EB15
-- description: Shimano D610, Titlist G.S., Japan. Long-cage Servo Panta rear derailleur, light alloy with steel cage, 34t, 310g; D611 without adaptor (Sep 1972). Renumbered DB-210 by 1975.
-- 7100: Shimano DB-200, Titlist; 1975-1976; source_ref 24;
-- search_text: Shimano DB-200 Titlist
-- source_id: 2051eafc-bc3e-11f1-a2df-02fea3763e8d
-- description: Shimano DB-200, Titlist, Japan. Servo Panta rear derailleur, alloy body and steel cage plate, 14 T front / 28 T rear capacity, 280 g. 1975 catalogue.
-- 7101: Shimano DB-210, Titlist GS; 1975-1976; source_ref 24;
-- search_text: Shimano DB-210 Titlist GS
-- source_id: 2051ebce-bc3e-11f1-a2df-02fea3763e8d
-- description: Shimano DB-210, Titlist GS, Japan. Long-cage Titlist, 14 T / 34 T, 310 g. 1975 catalogue.

START TRANSACTION;

UPDATE component_detail
SET title = 'Shimano D600 / DB-200, Titlist',
    search_text = 'Shimano D600 DB-200 Titlist',
    description = 'Shimano D600 / DB-200, Titlist, Japan. Short-cage Servo Panta rear derailleur, light alloy body and steel cage plates, 28T largest sprocket, 14T front difference, 280g. D601 without hanger adaptor; renumbered DB-200 by the 1975 model year.',
    year_to = 1976, source_ref = 24
WHERE component_id = 4437 AND title = 'Shimano D600, Titlist'
  AND source_id = '63220FCF-2A4C-4E59-8E7C-AFDCA097103D'
  AND brand_id = 51 AND category_id = 15
  AND year_from = 1970 AND year_to = 1974 AND source_ref = 65;

UPDATE component_detail
SET title = 'Shimano D610 / DB-210, Titlist GS',
    search_text = 'Shimano D610 DB-210 Titlist GS',
    description = 'Shimano D610 / DB-210, Titlist GS, Japan. Long-cage Servo Panta rear derailleur, light alloy body and steel cage plates, 34T largest sprocket, 14T front difference, 310g. D611 without hanger adaptor; renumbered DB-210 by the 1975 model year.',
    year_to = 1976, source_ref = 24
WHERE component_id = 4438 AND title = 'Shimano D610, Titlist G.S.'
  AND source_id = '1F1B4D31-EE12-43DB-9785-2453A431EB15'
  AND brand_id = 51 AND category_id = 15
  AND year_from = 1970 AND year_to = 1974 AND source_ref = 65;

DELETE old FROM component_detail old
JOIN component_detail survivor ON survivor.component_id = 4437
  AND survivor.title = 'Shimano D600 / DB-200, Titlist'
  AND survivor.source_id = '63220FCF-2A4C-4E59-8E7C-AFDCA097103D'
  AND survivor.year_from = 1970 AND survivor.year_to = 1976
  AND survivor.source_ref = 24
WHERE old.component_id = 7100 AND old.title = 'Shimano DB-200, Titlist'
  AND old.source_id = '2051eafc-bc3e-11f1-a2df-02fea3763e8d'
  AND old.brand_id = 51 AND old.category_id = 15 AND old.source_ref = 24
  AND NOT EXISTS (SELECT 1 FROM bike_spec WHERE component_id = old.component_id);

DELETE old FROM component_detail old
JOIN component_detail survivor ON survivor.component_id = 4438
  AND survivor.title = 'Shimano D610 / DB-210, Titlist GS'
  AND survivor.source_id = '1F1B4D31-EE12-43DB-9785-2453A431EB15'
  AND survivor.year_from = 1970 AND survivor.year_to = 1976
  AND survivor.source_ref = 24
WHERE old.component_id = 7101 AND old.title = 'Shimano DB-210, Titlist GS'
  AND old.source_id = '2051ebce-bc3e-11f1-a2df-02fea3763e8d'
  AND old.brand_id = 51 AND old.category_id = 15 AND old.source_ref = 24
  AND NOT EXISTS (SELECT 1 FROM bike_spec WHERE component_id = old.component_id);

COMMIT;
