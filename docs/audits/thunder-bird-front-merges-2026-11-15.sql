-- APPLIED 2026-11-15, user approved: two Thunder Bird front family merges.
-- Applied 2 updates + 2 deletes. Readback confirms both combined rows,
-- fitting details, 1972-1975 ranges and retained specimen source_ids.
-- Rerun: 0 affected rows. Component rows: 10260 -> 10258.
-- 7377 E101-E104 -> 2454 ED-100; 2455 ED-200 -> 2461 E111-E114 GTO/GPO.
-- Inferred renumberings, supported by matching drawings, steel construction,
-- weights and inlet/clamp options; no explicit factory code cross-reference.
-- Solid cage standard: 190g; perforated GTO/GPO: 185g. Both 16T by 1975.
-- Preserve the actual specimen references on 2454 and 2461. 2455's VeloBase
-- image is a catalogue illustration, not an independent specimen.
--
-- Evidence:
-- https://www.disraeligears.co.uk/site/shimano_bicycle_parts_-_72_page_4.html
-- https://www.disraeligears.co.uk/site/shimano_bicycle_parts_-_74_page_11.html
-- https://www.disraeligears.co.uk/site/a_complete_line_of_shimano_1975_page_18.html
-- The six-hole cage on the 2461 specimen is already shown in both the June
-- 1974 GPO and December 1974 / 1975-model ED-200 illustrations. The VeloBase
-- five-hole GPO versus six-hole GTO claim is not supported by these drawings.
-- GPO naming is present by June 1974, with the older E111-E114 codes.
-- Keep both combined 1972-1975 ranges. Source 24 is the latest primary
-- catalogue used here; 2461 source_ref 65 -> 24. No bike_spec links or
-- generator overrides on any of the four IDs. All image BLOBs are NULL.
-- Review: /private/tmp/thunder-bird-front-review/ and
-- /private/tmp/titlist-front-review/1972-p4.jpg, 1975-p18.jpg.
--
-- Before (all brand 51, category 9, group_id NULL, used 0):
-- 2454 title: Shimano ED-100 Thunder Bird
-- description: Shimano ED-100 Thunder Bird, Japan, 190 grams, ED-100 Thunder Bird, 16 T, 190 g, upper or lower inlet.
-- years 1975-1975; source_ref 24; search_text Shimano ED-100 Thunder Bird
-- source_id 6E29EC72-FCEB-46DF-9E51-C7186A4DCC88
-- 7377 title: Shimano E101, Thunder Bird
-- description: Shimano E101, Thunder Bird, Japan, upper inlet 1in (E103 1-1/8in; lower inlet E102 1in, E104 1-1/8in), 190g, steel
-- years 1972-1974; source_ref 60; search_text Shimano E101 Thunder Bird
-- source_id 469511e8-bde6-11f1-a2df-02fea3763e8d (synthetic; retired)
-- 2461 title: Shimano E111, Thunder Bird G.T.O.
-- description: Shimano E111, Thunder Bird G.T.O., Japan. Steel front derailleur, 185g. Upper inlet E111 (1in) / E113 (1-1/8in), lower inlet E112 (1in) / E114 (1-1/8in) (Sep 1972); called Thunder Bird G.P.O. (Jun 1974). ED-200 by 1975.
-- years 1972-1974; source_ref 65; search_text Shimano E111 Thunder Bird G.T.O.
-- source_id 600877C0-7DBA-4D74-B05B-B09C7BB9EC54
-- 2455 title: Shimano ED-200, Thunder Bird GPO
-- description: Shimano ED-200, Thunder Bird GPO, Japan, 185 grams, ED-200 Thunder Bird GPO, 16 T, 185 g.
-- years 1975-1975; source_ref 24; search_text Shimano ED-200 Thunder Bird GPO
-- source_id 5EF2CB4E-3EF4-4FB4-94FD-68A6C00617AF (catalogue crop; retired)

START TRANSACTION;

UPDATE component_detail
SET title = 'Shimano E101 / E102 / E103 / E104 / ED-100, Thunder Bird',
    search_text = 'Shimano E101 E102 E103 E104 ED-100 Thunder Bird',
    description = 'Shimano E101-E104 / ED-100, Thunder Bird, Japan. Steel, solid cage, 16T, 190g. Upper inlet: E101 1in / E103 1-1/8in; lower: E102 1in / E104 1-1/8in. ED-100 offers all four fittings; renumbering inferred.',
    year_from = 1972
WHERE component_id = 2454 AND title = 'Shimano ED-100 Thunder Bird'
  AND source_id = '6E29EC72-FCEB-46DF-9E51-C7186A4DCC88'
  AND brand_id = 51 AND category_id = 9 AND source_ref = 24
  AND year_from = 1975 AND year_to = 1975;

UPDATE component_detail
SET title = 'Shimano E111 / E112 / E113 / E114 / ED-200, Thunder Bird GTO / GPO',
    search_text = 'Shimano E111 E112 E113 E114 ED-200 Thunder Bird GTO GPO',
    description = 'Shimano E111-E114 / ED-200, Thunder Bird GTO / GPO, Japan. Steel, six-hole cage, 16T, 185g. Upper inlet: E111 1in / E113 1-1/8in; lower: E112 1in / E114 1-1/8in. GPO name by Jun 1974; ED-200 renumbering inferred.',
    year_to = 1975, source_ref = 24
WHERE component_id = 2461 AND title = 'Shimano E111, Thunder Bird G.T.O.'
  AND source_id = '600877C0-7DBA-4D74-B05B-B09C7BB9EC54'
  AND brand_id = 51 AND category_id = 9 AND source_ref = 65
  AND year_from = 1972 AND year_to = 1974;

DELETE old FROM component_detail old
JOIN component_detail survivor ON survivor.component_id = 2454
  AND survivor.title = 'Shimano E101 / E102 / E103 / E104 / ED-100, Thunder Bird'
  AND survivor.source_id = '6E29EC72-FCEB-46DF-9E51-C7186A4DCC88'
  AND survivor.description = 'Shimano E101-E104 / ED-100, Thunder Bird, Japan. Steel, solid cage, 16T, 190g. Upper inlet: E101 1in / E103 1-1/8in; lower: E102 1in / E104 1-1/8in. ED-100 offers all four fittings; renumbering inferred.'
  AND survivor.year_from = 1972 AND survivor.year_to = 1975 AND survivor.source_ref = 24
WHERE old.component_id = 7377 AND old.title = 'Shimano E101, Thunder Bird'
  AND old.source_id = '469511e8-bde6-11f1-a2df-02fea3763e8d'
  AND old.brand_id = 51 AND old.category_id = 9 AND old.source_ref = 60
  AND old.year_from = 1972 AND old.year_to = 1974
  AND NOT EXISTS (SELECT 1 FROM bike_spec WHERE component_id = old.component_id);

DELETE old FROM component_detail old
JOIN component_detail survivor ON survivor.component_id = 2461
  AND survivor.title = 'Shimano E111 / E112 / E113 / E114 / ED-200, Thunder Bird GTO / GPO'
  AND survivor.source_id = '600877C0-7DBA-4D74-B05B-B09C7BB9EC54'
  AND survivor.description = 'Shimano E111-E114 / ED-200, Thunder Bird GTO / GPO, Japan. Steel, six-hole cage, 16T, 185g. Upper inlet: E111 1in / E113 1-1/8in; lower: E112 1in / E114 1-1/8in. GPO name by Jun 1974; ED-200 renumbering inferred.'
  AND survivor.year_from = 1972 AND survivor.year_to = 1975 AND survivor.source_ref = 24
WHERE old.component_id = 2455 AND old.title = 'Shimano ED-200, Thunder Bird GPO'
  AND old.source_id = '5EF2CB4E-3EF4-4FB4-94FD-68A6C00617AF'
  AND old.brand_id = 51 AND old.category_id = 9 AND old.source_ref = 24
  AND old.year_from = 1975 AND old.year_to = 1975
  AND NOT EXISTS (SELECT 1 FROM bike_spec WHERE component_id = old.component_id);

COMMIT;
