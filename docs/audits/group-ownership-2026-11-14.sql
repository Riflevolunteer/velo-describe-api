-- APPLIED 2026-11-14, user approved. Follow-up to
-- shimano-bmx-groups-2026-11-14.sql: the seven remaining rows whose
-- component_group is owned by a different brand. Each moves to the matching
-- group its own brand already owns. No group is retitled, re-owned or deleted.
--
-- * SunTour XCE, 1992 Dia-Compe-made parts (source 98, 1992 SunTour
--   catalogue): 8021 BL-XE01-S / -N and 8035 CT-XE01 sit in 125 "XCE", owned
--   by Dia-Compe, whose own row there is 703 Dia-Compe XCE. Move to 155 "XCE"
--   (SunTour), which holds the other XCE parts (4791 / 2663 / 2002 XE01, 1990 XE00
--   rows including BL-XE00 11061 and CT-XE00 11059).
-- * SunTour XCM, 1992 (source 98): 8003 CW-XM01, 8022 BL-XM01-N, 8036 CT-XM01 and
--   8037 BA-XM00 sit in 182 "XCM", owned by SR, whose own row there is 1770
--   Sakae (SunTour) XCM. Move to 240 "XCM" (SunTour), which holds the other XCM
--   parts (4793, 2665, 1990 XM00 rows including CW-XM00 11066 and BL-XM00 11065).
-- * 4056 Zeus Pista pedals (source 208) sit in 250 "Pista", owned by Stronglight
--   (3995 PR300 Pista). Move to 161 "Pista" (Zeus), which holds 5711 Zeus Pista
--   saddle and 1342 Zeus Pista chainring bolts.
--
-- Two of the seven rows carry bike links (component_id unchanged). The generator
-- does not use groups. Titles, dates and sources unchanged.
-- Applied: 7 rows, rerun 0. DB-wide brand / group-owner mismatches after: 0.
-- Restore: 8021 / 8035 -> 125; 8003 / 8022 / 8036 / 8037 -> 182; 4056 -> 250.

UPDATE component_detail SET group_id = 155
WHERE component_id IN (8021, 8035) AND group_id = 125
  AND brand_id = (SELECT brand_id FROM component_group WHERE group_id = 155);

UPDATE component_detail SET group_id = 240
WHERE component_id IN (8003, 8022, 8036, 8037) AND group_id = 182
  AND brand_id = (SELECT brand_id FROM component_group WHERE group_id = 240);

UPDATE component_detail SET group_id = 161
WHERE component_id = 4056 AND title = 'Zeus Pista' AND group_id = 250
  AND brand_id = (SELECT brand_id FROM component_group WHERE group_id = 161);
