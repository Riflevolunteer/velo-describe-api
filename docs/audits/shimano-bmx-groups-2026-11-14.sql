-- APPLIED 2026-11-14, user approved. Rear derailleur
-- audit follow-up: component_group 156 "BMX" is owned by Campagnolo
-- (brand_id 11; its own rows are 1234 / 1480 / 3692 / 7010 / 7011) but also
-- holds 18 Shimano rows (brand_id 51).
--
-- History (shimano.md): the 1981 catalogue pass (source 69, Shimano Bicycle
-- System Components 1981, printed 12.1980) put the BMX DX / SX parts into 156.
-- The 1998 pass moved DX 9624 / 9626 to Shimano group 327 "DX (BMX)" and left
-- the rest for a separate review. This is that review.
--
-- User decision: two new Shimano groups named as the 1981 catalogue prints the
-- lines, kept apart from the 1998 revival group 327.
-- * "Shimano-DX (BMX, 1981)": alloy MX20 / MX6x parts titled Shimano-DX:
--   7514 FD-MX20, 7519 SL-MX20, 7526 FC-MX62, 7527 FC-MX61, 7528 BB-MX60,
--   7530 PD-MX10 / MX11 (printed as Shimano-DX), 7531 FH-MX20, 7539 BL-MX20,
--   7541 SP-MX20. Group years are the members' span, 1981-1988.
-- * "Shimano-SX (BMX, 1981)": steel MX10-coded parts: 7513 RD-MX10, 7515
--   FD-MX10, 7520 SL-MX10, 7529 FC-MX10, 7532 FH-MX10 / MX12, 7533 FH-MX15, and
--   7540 BL-MX10, whose title says "Shimano-BMX" (placed in SX by its MX10 code,
--   a judgement). Group years 1981-1981.
-- * 9625 BL-M600-MX (1997, red DX logo) -> 327, beside 9626 BR-M600-MX.
-- * 7521 SL-2S21 1-2 change trigger -> no group, like its SG-2S10 hub 7173.
-- Group 156 keeps only the five Campagnolo rows. No bike links on any of the 18
-- rows; titles, dates and sources unchanged. The generator does not use groups.
--
-- Applied: 2 groups inserted (331 Shimano-DX, 332 Shimano-SX); 18
-- component_detail rows moved; rerun 0. Readback: 156 holds 5 Campagnolo rows,
-- and 156 / 327 / 331 / 332 have no brand mismatches.
-- Restore: set group_id = 156 on all 18 rows, then delete the two new groups.

INSERT INTO component_group (title, brand_id, year_from, year_to)
SELECT 'Shimano-DX (BMX, 1981)', 51, '1981', '1988' FROM DUAL
WHERE NOT EXISTS (SELECT 1 FROM component_group WHERE title = 'Shimano-DX (BMX, 1981)' AND brand_id = 51);

INSERT INTO component_group (title, brand_id, year_from, year_to)
SELECT 'Shimano-SX (BMX, 1981)', 51, '1981', '1981' FROM DUAL
WHERE NOT EXISTS (SELECT 1 FROM component_group WHERE title = 'Shimano-SX (BMX, 1981)' AND brand_id = 51);

UPDATE component_detail
SET group_id = (SELECT group_id FROM component_group WHERE title = 'Shimano-DX (BMX, 1981)' AND brand_id = 51)
WHERE component_id IN (7514, 7519, 7526, 7527, 7528, 7530, 7531, 7539, 7541)
  AND brand_id = 51 AND group_id = 156;

UPDATE component_detail
SET group_id = (SELECT group_id FROM component_group WHERE title = 'Shimano-SX (BMX, 1981)' AND brand_id = 51)
WHERE component_id IN (7513, 7515, 7520, 7529, 7532, 7533, 7540)
  AND brand_id = 51 AND group_id = 156;

UPDATE component_detail SET group_id = 327
WHERE component_id = 9625 AND title = 'Shimano BL-M600-MX, BMX'
  AND brand_id = 51 AND group_id = 156;

UPDATE component_detail SET group_id = NULL
WHERE component_id = 7521 AND title = 'Shimano SL-2S21, 1-2 change trigger'
  AND brand_id = 51 AND group_id = 156;
