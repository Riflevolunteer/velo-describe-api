-- APPLIED 2026-11-14, user approved. Rear derailleur
-- deduplication pass.
--
-- Scan (scratchpad rd-audit/): duplicate-report reports no merge candidates for
-- the category. Additional scans of shared part codes, code-stripped model names
-- and uncoded VeloBase rows contained in coded rows found only labelled versions
-- and cage / finish siblings, apart from the two cases below.
--
-- 1. Huret Duopar titanium provenance (not a duplicate). The 1976 catalogue
--    (source 118) lists both 2600 / 2640 (standard) and 2648 / 2654 (long cage).
--    4302 was VeloBase "Huret Duopar (titanium)", retitled 2600 / 2640 in the 1976
--    pass, but its VeloBase GUID 15AB95B3-AA4E-41C1-968A-31796C9789E3 is a
--    specimen with model field 2648 (255 g with bolt). User decision: move the
--    specimen to 8173 (2648 / 2654, long cage). 4302 gets a fresh UUID and keeps
--    the 1976 catalogue facts only. 8173's previous synthetic source_id
--    0311fc96-c102-11f1-a2df-02fea3763e8d is retired. The GUID moves in two steps
--    because source_id is UNIQUE.
--    Previous descriptions: 4302 had "..., France, 255 grams (Actual). Titanium
--    ..."; 8173 "Huret Duopar 2648 / 2654 (titanium, long cage), France.
--    Double-parallelogram rear: 1976 titanium / forged alloy, 320g, 13-36T; June
--    1984 2648 H (34T) / 2648 GC (38T), titanium or steel / alloy, 36T capacity.
--    Sachs Huret badged c. 1980-84, 252g."
-- 2. 4733 "SunTour Cyclone (Black Pivot Knuckles)" (VeloBase
--    C0C55FDD-E9C6-48D9-8A76-312E08FC35EF, undated, short cage, plate "SunTour
--    (with split T) Cyclone", "Black Knuckle variant", no bike links or overrides).
--    User decision: merge into 4735 SunTour 5902 / RD-1700 Cyclone (1975-82). The
--    finish is noted in 4735's description, reworded to fit 255 characters.
--    Previous 4735 description: "SunTour 5902 / RD-1700, Cyclone, Japan. Racing
--    rear, forged light alloy, slant pantograph, 24T capacity, 31mm stroke, top
--    normal, 175g without bracket (184g in 1982); 1975: 13-24 / 40-51; 2811 99 01
--    (1976), RD-1700 (1978-82): 13-24 / 40-53. 178g avg."
--
-- Applied: 3 updates + 1 delete; rerun 0. 4302 new source_id
-- a59372f3-e065-11f1-a2df-02fea3763e8d. Rear Derailleurs rows 945 -> 944;
-- duplicate-report merge candidates 0. No bike links changed.
-- Side effect caught on regeneration: without 4733 the 1986 Raleigh Supercourse
-- "Suntour Cyclone" auto-matched 4734 (Cyclone 3-Pully, 1980). Blocked with a
-- Rear Derailleurs 'suntour cyclone' 1986 null override; generator output is now
-- identical to before the delete.

UPDATE component_detail
SET source_id = UUID(),
    description = 'Huret Duopar 2600 / 2640 (titanium), France. Titanium and forged light-alloy rear, steel full-ball pulleys, 320g; 13-36T freewheel, 36-53T chainrings. 2600 Huret dropout, 2640 Italian dropout (kit 2660).'
WHERE component_id = 4302 AND title = 'Huret Duopar 2600 / 2640 (titanium)'
  AND source_id = '15AB95B3-AA4E-41C1-968A-31796C9789E3' AND source_ref = 118;

UPDATE component_detail
SET source_id = '15AB95B3-AA4E-41C1-968A-31796C9789E3',
    description = 'Huret Duopar 2648 / 2654 (titanium, long cage), France. 1976: titanium / forged alloy, 320g, 13-36T; June 1984: 2648 H (34T) / GC (38T), Ti or steel / alloy, 36T capacity. Sachs Huret badged c. 1980-84, 252g; a 2648 weighed 255g with bolt.'
WHERE component_id = 8173 AND title = 'Huret Duopar 2648 / 2654 (titanium, long cage)'
  AND source_id = '0311fc96-c102-11f1-a2df-02fea3763e8d' AND source_ref = 156;

UPDATE component_detail
SET description = 'SunTour 5902 / RD-1700, Cyclone, Japan. Racing rear, forged alloy, slant pantograph, 24T capacity, 31mm stroke, top normal, 175g w/o bracket (184g 1982), 178g avg; 13-24 / 40-51 (1975), 40-53 (2811 99 01 1976; RD-1700 1978-82). Black-knuckle variant.'
WHERE component_id = 4735 AND title = 'SunTour 5902 / RD-1700, Cyclone'
  AND source_ref = 127 AND CHAR_LENGTH(description) = 250
  AND description LIKE '%RD-1700 (1978-82): 13-24 / 40-53. 178g avg.';

DELETE FROM component_detail
WHERE component_id = 4733 AND title = 'SunTour Cyclone (Black Pivot Knuckles)'
  AND source_id = 'C0C55FDD-E9C6-48D9-8A76-312E08FC35EF'
  AND NOT EXISTS (SELECT 1 FROM bike_spec WHERE component_id = 4733);
