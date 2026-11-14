-- APPLIED 2026-11-14, user approved. Evidence and page URLs:
-- .agents/skills/ingest-component-catalog/references/known-catalogs/clement.md
-- Bianchi c.1983, Super Pista page (10th scan), says only Clement Pista.
-- The 1985/1988 guides distinguish Pistard from numbered Pista models.
-- Remove the unsupported model identification; do not backdate Pistard.
-- Generator Tyres 'clement pista tubular' override changed 6765 -> null.
-- Verified: exactly this generated link removed across all 86 catalogues.
-- First run: one spec and one component row; rerun: zero rows affected.
-- Previous spec: ID 1023, value Clement Pista tubular, component 6765,
-- source 42. Preserve the printed spec text and its catalogue source.
UPDATE bike_spec
SET component_id = NULL
WHERE bike_spec_id = 1023
  AND value_text = 'Clement Pista tubular'
  AND component_id = 6765 AND source_ref = 42;

-- Guida 85/86 scan 39 and Guida 88 scan 50 both specify 250 g, not 220 g.
-- Retain dates 1985-1988; source 262 already identifies the 1988 table.
-- Previous description: Clement Pistard, Italy, 220 grams
UPDATE component_detail
SET description = 'Tubular with Clement tex casing and studded tread, 28 in, 250 g. Tube: butylised latex in 1985; butyl in 1988.'
WHERE component_id = 6765 AND title = 'Clement Pistard'
  AND year_from = '1985' AND year_to = '1988' AND source_ref = 262
  AND description = 'Clement Pistard, Italy, 220 grams';
