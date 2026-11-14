-- APPLIED 2026-11-14, user approved. Follow-up to
-- suntour-x-press-pp00-2026-11-14.sql: the 1990 Bianchi Project 7 / Grizzly
-- (XC-Pro) X-Press shifters.
--
-- Evidence (SunTour Bicycle Equipment Catalog 1990, source 385, printed 09.1989):
-- * p.10, the XC-Pro group's specification page, lists the X-Press control lever
--   as SL-PP10-R7R (stock 33119571) / SL-PP10-L (33119701), 22.2mm, 296g pair.
-- * p.12 lists SL-PP10-R7U / -R6R / -L for XC-Comp / XCD with the same stock
--   numbers. Row 6316 already holds PP10 (original VeloBase model field SL-PP10).
-- * 6312 SL-XP10 is the 1992 / 1993 catalogue code (source 278). Its 1990 start
--   comes only from VeloBase ("1990 - early 1990s"; black housing and brass
--   adjusters, described as nearly identical to the lower-group X-Press). The
--   1990 manufacturer catalogue lists no XP10. The 2026-11-13 notes record that
--   the matcher had already linked these two bikes to 6312 before PP10 was
--   identified.
-- * 1990 Bianchi Project 7 (6917) and Grizzly (6938), both XC-Pro, print
--   "SunTour AccuShift Plus X-Press" -> 6316. 6312's dates are unchanged.
--
-- Generator: Shifters 'suntour accushift plus x press' Project 7 / Grizzly ->
-- 6316. Generator diff across all 86 catalogues: exactly these two specs.
-- Applied: 2 rows, rerun 0, readback 6316. Restore: 6917 / 6938 -> 6312.
UPDATE bike_spec SET component_id = 6316
WHERE bike_spec_id IN (6917, 6938) AND label_id = 46
  AND value_text = 'SunTour AccuShift Plus X-Press' AND component_id = 6312 AND source_ref = 168;
