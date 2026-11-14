-- APPLIED 2026-11-14, user approved. See ritchey-overdrive-2026-11-14.md.
-- 1990 Bianchi USA catalogue: dated cover, PDF pp.21-22 specification spread.
-- Signature 2 / Grizzly / Peregrine / Sika / Osprey explicitly specify
-- Ritchey Megabite Overdrive 26x2.0; existing source 168.
-- This attests the model's 1990 availability, not its manufacturing start
-- or the availability of every later Kevlar/WCS/casing variant in 1990.
-- Verified first run: one component row; rerun: zero rows.
UPDATE component_detail
SET year_from = '1990', source_ref = 168
WHERE component_id = 8384
  AND title = 'Ritchey MegaBite OverDrive'
  AND category_id = 23 AND brand_id = 252
  AND year_from = '1991' AND year_to = '1992'
  AND source_ref = 150;
