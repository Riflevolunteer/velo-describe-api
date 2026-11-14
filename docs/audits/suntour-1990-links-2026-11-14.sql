-- APPLIED 2026-11-14, user approved. Rear derailleur step 1 audit follow-up
-- (TODO.md, Rear Derailleurs): bike-link follow-through for the SunTour
-- Bicycle Equipment Catalog 1990 (data_source 385, printed 09.1989), plus one
-- truncated description. Evidence:
-- .agents/skills/ingest-component-catalog/references/known-catalogs/suntour.md
-- Catalogue p.16 heads XCE "'90 NEW COMPONENTS" (RD-XE00-GXB, FD-XE00-GXH).
-- p.17 heads XCT "'90 NEW COMPONENTS": RD-XT00-GX/-GXB and RD-XT10-GX/-GXB
-- with no distinguishing spec; one front FD-XT00-GXH; CT-XT00; CW-XT00
-- 48x38x28T.
--
-- Generator overrides changed to match (scripts/generate-bike-update-sql.js):
-- front/rear 'suntour xce 4050' -> null for 1989; 'suntour xct' rear -> null and
-- front -> 11072 for 1990; 'suntour xct balance response system' -> 11074 and
-- 'sr xct 48 38 28t' -> 11076 for 1990. 1991-92 ranges are kept on the 1992 rows.
-- Generator diff across all 86 catalogues: exactly these seven specs, no
-- others.
--
-- Applied: readback confirmed all 9 rows; rerun affected 0 rows.
-- Restore: set each spec back to the previous component_id given below.

-- 1989 Bianchi Forte / Volpe "SunTour XCE-4050" (source 325), user decision:
-- unlinked. XCE is '90 new in the 1990 catalogue (XE00). XE01 (4791 / 2663)
-- is the 1992 code with a VeloBase 1980 start that is known to be wrong.
-- Neither code is shown to be the 1989 part.
-- Previous: 18615 FD -> 2663, 18616 RD -> 4791, 18719 FD -> 2663,
-- 18720 RD -> 4791. Forte crank 18618 -> 2002 CW-XE01 is unchanged; see TODO.
UPDATE bike_spec SET component_id = NULL
WHERE bike_spec_id IN (18615, 18719) AND label_id = 16
  AND value_text = 'SunTour XCE-4050' AND component_id = 2663 AND source_ref = 325;
UPDATE bike_spec SET component_id = NULL
WHERE bike_spec_id IN (18616, 18720) AND label_id = 17
  AND value_text = 'SunTour XCE-4050' AND component_id = 4791 AND source_ref = 325;

-- 1990 Bianchi Nyala "SunTour XCT" (source 168). Its links pointed to 1992-only
-- XT01/XT02 rows. Rear: user decision, unlinked (two 1990 codes fit).
-- Previous: 7018 RD -> 7952, 7017 FD -> 7962, 7016 brakes -> 8038,
-- 7020 crank -> 8004.
UPDATE bike_spec SET component_id = NULL
WHERE bike_spec_id = 7018 AND label_id = 17
  AND value_text = 'SunTour XCT' AND component_id = 7952 AND source_ref = 168;
UPDATE bike_spec SET component_id = 11072
WHERE bike_spec_id = 7017 AND label_id = 16
  AND value_text = 'SunTour XCT' AND component_id = 7962 AND source_ref = 168;
UPDATE bike_spec SET component_id = 11074
WHERE bike_spec_id = 7016 AND label_id = 18
  AND value_text = 'SunTour XCT Balance Response System' AND component_id = 8038 AND source_ref = 168;
UPDATE bike_spec SET component_id = 11076
WHERE bike_spec_id = 7020 AND label_id = 38
  AND value_text = 'SR XCT 48/38/28T' AND component_id = 8004 AND source_ref = 168;

-- 9692 description was cut at the 255-character limit ("... DL 160, 1973-").
-- Same facts, reworded to 242 characters; dates 1973-76 are already on the row.
-- Previous description: identical up to "Sold as "Simplex Maxi" on the Raleigh
-- Gran Sport DL 160, 1973-", with "wide-range version of the Prestige" in
-- place of "wide-range Prestige".
UPDATE component_detail
SET description = 'Simplex AR 642 P, Maxi-Prestige, France. Long-cage, wide-range Prestige for 5/6-speed freewheels: 14-34T freewheel, 22T chainwheel difference, standard forkends only; 10 3/4 oz. Sold as "Simplex Maxi" on the 1973-76 Raleigh Gran Sport DL 160.'
WHERE component_id = 9692 AND title = 'Simplex AR 642 P, Maxi-Prestige'
  AND source_ref = 276 AND CHAR_LENGTH(description) = 255
  AND description LIKE '%Sold as "Simplex Maxi" on the Raleigh Gran Sport DL 160, 1973-';
