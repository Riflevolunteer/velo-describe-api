-- APPLIED 2026-11-14, user approved. Rear derailleur
-- audit follow-up: the 1990 Bianchi Nyala shifter.
--
-- Evidence (SunTour Bicycle Equipment Catalog 1990, source 385, printed 09.1989):
-- * p.15 lists SL-PP00-R7U / SL-PP00-R6R / SL-PP00-L as the X-Press control for
--   X-1 / XCE / XCM / XCT: AccuShift Plus, right 7/6-speed index, left control,
--   22.2mm clamp, 296g pair. p.17 repeats SL-PP00 under XCT.
-- * 6305 "SunTour X-1 - trigger style" (VeloBase
--   BA1A3A1B-A027-489A-AE40-3934ABA19E67): group X-1, model field "X-press",
--   1990, 7sp AccuShift Plus, levers marked "accushift plus / power". The 1990
--   pass held it as a possible PP00 because no number is printed. The only 1990
--   X-1 X-Press is PP00, so group, model and year identify it; user approved the
--   retitle.
-- * 1990 Bianchi Nyala (XCT, spec 7019) and Osprey (X-1, spec 6999) print
--   "SunTour AccuShift Plus X-Press". Both linked 6312 SL-XP10, a 1992 code
--   whose row is dated 1990-93. Repointed to 6305.
-- * Not in this pass (user decision): Project 7 / Grizzly (XC-Pro) on 6312. The
--   1990 catalogue lists SL-PP10 (6316), but VeloBase dates XP10 from 1990.
--
-- Generator: Shifters 'suntour accushift plus x press' Nyala / Osprey -> 6305.
-- Generator diff before the retitle: exactly these two specs.
-- search_text from scripts/search-text.js.
-- Applied: 1 component_detail + 2 bike_spec rows; rerun 0; regeneration after
-- the retitle: output identical.
-- Restore: 6305 title 'SunTour X-1 - trigger style', description 'SunTour X-1 -
-- trigger style, Japan', search_text 'SunTour X-1 trigger style', source_ref 1;
-- 7019 / 6999 -> 6312.

UPDATE component_detail
SET title = 'SunTour SL-PP00-R7U / SL-PP00-R6R / SL-PP00-L, X-Press (X-1 / XCE / XCM / XCT)',
    search_text = 'SunTour SL-PP00-R7U SL-PP00-R6R SL-PP00-L X-Press',
    description = 'AccuShift Plus X-Press under-bar control levers, right 7/6-speed index / left, 22.2mm clamp, 296g pair. VeloBase specimen: X-1 group, 7-speed, levers marked accushift plus / power.',
    source_ref = 385
WHERE component_id = 6305 AND title = 'SunTour X-1 - trigger style'
  AND category_id = 19 AND year_from = '1990' AND year_to = '1990' AND source_ref = 1
  AND source_id = 'BA1A3A1B-A027-489A-AE40-3934ABA19E67';

UPDATE bike_spec SET component_id = 6305
WHERE bike_spec_id IN (7019, 6999) AND label_id = 46
  AND value_text = 'SunTour AccuShift Plus X-Press' AND component_id = 6312 AND source_ref = 168;
