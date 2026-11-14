-- APPLIED 2026-11-14, user approved. Evidence and page URLs:
-- .agents/skills/ingest-component-catalog/references/known-catalogs/clement.md
-- Raleigh 1982 brochure scan 3 and 1983 printed p.5 say Clement Ritmo
-- tubular, without LTX 55 or construction/weight identifying that variant.
-- VeloBase's physical-label photograph confirms LTX 55 is a real marking.
-- Ten Speed Drive 1983 printed p.13 (mirror PDF page 12) describes plain
-- Ritmo, 255 g cotton with a latex-butyl tube; no LTX 55 identification.
-- The sources do not establish whether these are the same version.
-- Generator Tyres 'clement ritmo tubular' override changed 6767 -> null.
-- Printed spec values, catalogue sources and CSVs preserved.
-- First run: three spec rows, one component row; rerun: zero changes.
-- All 86 catalogues regenerated: only the three reviewed links removed.
-- All 18,472 live specs and 10,264 components compared: only approved fields
-- changed. Tyre coverage 237 -> 234/973; date flags 4 -> 3.
UPDATE bike_spec
SET component_id = NULL
WHERE component_id = 6767
  AND ((bike_spec_id = 4536 AND bike_id = 239 AND source_ref = 132
        AND BINARY value_text = BINARY 'Clement Ritmo tubular')
    OR (bike_spec_id = 4621 AND bike_id = 245 AND source_ref = 133
        AND BINARY value_text = BINARY 'Clement Ritmo Tubular')
    OR (bike_spec_id = 4669 AND bike_id = 247 AND source_ref = 133
        AND BINARY value_text = BINARY 'Clement Ritmo Tubular'));

-- Withdraw the unsupported catalogue-to-variant attribution, preserving the
-- photographed identity and legacy source_id. No production bounds inferred.
-- Before: dates 1983-1983, source_ref 279 (Ten Speed Drive 1983), description:
-- Clement Ritmo LTX 55, Italy. Cotton training tubular, mixed tread for reduced rolling resistance, latex-butyl inner tube, 255g
-- After: dates unknown, source_ref 1 (VeloBase physical-label photographs).
-- Title, search_text and source_id remain unchanged.
UPDATE component_detail
SET description = 'Tubular tyre marked Ritmo LTX 55; black tread and tan sidewalls.',
    year_from = NULL, year_to = NULL, source_ref = 1
WHERE component_id = 6767 AND title = 'Clement Ritmo LTX 55'
  AND year_from = '1983' AND year_to = '1983' AND source_ref = 279
  AND description = 'Clement Ritmo LTX 55, Italy. Cotton training tubular, mixed tread for reduced rolling resistance, latex-butyl inner tube, 255g';
