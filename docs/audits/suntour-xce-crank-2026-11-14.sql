-- APPLIED 2026-11-14, user approved. Follow-up to
-- suntour-1990-links-2026-11-14.sql: the 1989 Bianchi Forte crank, which was
-- left out of the XCE-4050 derailleur unlink.
--
-- Spec 18618 "SunTour XCE-4050 48/38/28T" (1989 Bianchi catalogue, source 325)
-- -> 2002 SunTour CW-XE01, XCE (1980-1992, source 98).
-- * The SunTour 1990 catalogue (source 385, printed 09.1989) p.16 heads XCE
--   "'90 NEW COMPONENTS" and lists CW-XE00, 48x38x28T. It was not inserted,
--   because it is held as a possible duplicate of 2002.
-- * CW-XE01 is the 1992 code (source 98). 2002's original VeloBase specimen
--   (4CBE56FE-8B0F-42EF-9F7D-79FFA5840768) is unnumbered, marked "SunTour XCE",
--   with 50-40-28 rings and 110/74 BCD. VeloBase dates the XCE group from 1989,
--   which is consistent with the Bianchi spec but establishes no code.
-- * Same reasoning as the user's decision for the Forte / Volpe XCE-4050
--   derailleurs: neither code is shown to be the 1989 part, so unlink.
--   2002's dates and title are unchanged.
--
-- Generator: Cranksets 'suntour xce 4050 48 38 28t' -> null for 1989. Generator
-- diff across all 86 catalogues: this one spec only.
-- Applied: 1 row, rerun 0, readback NULL. Restore: 18618 -> 2002.
UPDATE bike_spec SET component_id = NULL
WHERE bike_spec_id = 18618 AND label_id = 38
  AND value_text = 'SunTour XCE-4050 48/38/28T' AND component_id = 2002 AND source_ref = 325;
