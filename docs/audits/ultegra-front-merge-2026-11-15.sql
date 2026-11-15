-- APPLIED 2026-11-15, user approved: merge 2539 into combined family 2538.
-- Applied 1 update + 1 delete. Readback: 2538 updated; 2539 absent.
-- Idempotency rerun: 0 affected rows. Component rows: 10263 -> 10262.
-- 2538 was originally FD-6500 double, expanded during the 1998 catalogue
-- import to include FD-6503 triple. This preserves that family convention;
-- it does not claim the double and triple are interchangeable parts.
-- 2539's specimen has FD-6503 stamped on the inner plate and is braze-on.
-- https://velobase.com/Pages/ViewComponent.aspx?ID=EE140C8F-CDCE-4F9E-AE0B-BD31779A6EF9&Enum=113
-- https://si.shimano.com/en/pdfs/si/6C80D/SI-6C80D-001-ENG.pdf
-- Shimano's service instructions distinguish FD-6500 double / FD-6503 triple.
-- https://www.charlie-taylor.net/bikes/library/shimano/1998/00.htm
-- Source 365, the 1998 US catalogue, already supports the combined family.
-- Preserve 2538's 1998-1999 bounds and catalogue provenance. 2539's 1990-1990
-- was a decade placeholder: its VeloBase record actually says late 1990s.
-- Do not widen the family to 1990. Preserve the braze-on triple detail.
-- Neither row has bike_spec links or generator overrides at preflight.
-- Review photos and specimen HTML: /private/tmp/shimano-front-duplicates/.
--
-- Before (both brand 51, category 9, group 59, image NULL, used 0):
-- 2538 title: Shimano FD-6500 / FD-6503, Ultegra
-- description: Ultegra 6500 Dual SIS front derailleur, independently sided chain guide, adjustable return spring; FD-6500-B clamp (28.6-31.8mm, 81g) or braze-on for double, FD-6503 for triple.
-- years: 1998-1999; source_ref 365
-- search_text: Shimano FD-6500 FD-6503 Ultegra
-- source_id: 861EB2DC-F4E5-4020-8664-87199C94AE95
-- 2539 title: Shimano Ultegra Tripple
-- description: Shimano Ultegra Tripple, Japan
-- years: 1990-1990; source_ref 1
-- search_text: Shimano Ultegra Tripple
-- source_id: EE140C8F-CDCE-4F9E-AE0B-BD31779A6EF9

START TRANSACTION;

UPDATE component_detail
SET description = 'Ultegra 6500 Dual SIS front derailleur, independently sided chain guide, adjustable return spring; FD-6500 double: clamp (28.6-31.8mm, 81g) or braze-on; FD-6503 triple, including braze-on.'
WHERE component_id = 2538 AND title = 'Shimano FD-6500 / FD-6503, Ultegra'
  AND source_id = '861EB2DC-F4E5-4020-8664-87199C94AE95'
  AND brand_id = 51 AND category_id = 9 AND group_id = 59
  AND year_from = 1998 AND year_to = 1999 AND source_ref = 365
  AND description = 'Ultegra 6500 Dual SIS front derailleur, independently sided chain guide, adjustable return spring; FD-6500-B clamp (28.6-31.8mm, 81g) or braze-on for double, FD-6503 for triple.';

DELETE old FROM component_detail old
JOIN component_detail survivor ON survivor.component_id = 2538
  AND survivor.title = 'Shimano FD-6500 / FD-6503, Ultegra'
  AND survivor.source_id = '861EB2DC-F4E5-4020-8664-87199C94AE95'
  AND survivor.description = 'Ultegra 6500 Dual SIS front derailleur, independently sided chain guide, adjustable return spring; FD-6500 double: clamp (28.6-31.8mm, 81g) or braze-on; FD-6503 triple, including braze-on.'
  AND survivor.year_from = 1998 AND survivor.year_to = 1999
  AND survivor.source_ref = 365
WHERE old.component_id = 2539 AND old.title = 'Shimano Ultegra Tripple'
  AND old.source_id = 'EE140C8F-CDCE-4F9E-AE0B-BD31779A6EF9'
  AND old.brand_id = 51 AND old.category_id = 9 AND old.group_id = 59
  AND old.year_from = 1990 AND old.year_to = 1990 AND old.source_ref = 1
  AND old.description = 'Shimano Ultegra Tripple, Japan'
  AND NOT EXISTS (SELECT 1 FROM bike_spec WHERE component_id = old.component_id);

COMMIT;
