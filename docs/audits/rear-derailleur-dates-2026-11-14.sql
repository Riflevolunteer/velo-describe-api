-- APPLIED 2026-11-14, user approved. Rear derailleur
-- step 1 audit follow-up (TODO.md, Rear Derailleurs): the four linked-spec date
-- conflicts that had no generator override behind them.
--
-- Evidence:
-- * 4561 Simplex Alpha T: the 1987 Peugeot (FR) catalogue (source 311) prints
--   "Simplex Alpha T/P" on four demi-course bikes. T/P is the row's own ref
--   suffix (T/P 10071, Simplex 1989 catalogue, source 59), so the identity is
--   exact. year_from 1989 -> 1987. source_ref stays 59.
-- * 4264 Gipiemme Special: Guida '85/86 (source 259) gives 219 g. The 1987
--   Bianchi (US) catalogue (source 46) still fits a Gipiemme Special rear to the
--   Super Leggera, whose front already links 2370 Gipiemme Special (1970-87).
--   User decision: year_to 1985 -> 1987. The c. 1986-87 Gipiemme catalogue
--   (source 270) shows no Special derailleur; that absence is not proof the part
--   was unavailable.
-- * 8874 1987 Raleigh Maverick 18 Pro "Suntour Mountech" -> 4712 Mountech GTL
--   v2 was a matcher title-shape hit. VeloBase gives 4712 as model RD-5500, a
--   revision of 4711 RD-5500 MounTech (GTL). RD-4900 7785 also fits (46/36/26,
--   14-28). Unlinked, matching the existing 1986 Falcon "MT Tech" decision.
-- * 8342 1986 Raleigh Technium 460 "Suntour SVX" -> 4770 SVX GT (VeloBase
--   RD-7400, 1985). The bike does not print GT, and no held SunTour catalogue
--   lists SVX. User decision: unlinked. 4770 dates unchanged.
--
-- Generator: Rear Derailleurs overrides 'suntour mountech' (1987) and 'suntour
-- svx' (1986) -> null. Generator diff across all 86 catalogues: exactly these
-- two specs.
-- Applied: 2 component_detail + 2 bike_spec rows; rerun 0. Regeneration
-- after the date moves: output identical (no matching changes).
-- Restore: 4561 year_from '1989' and the description without the final
-- sentence; 4264 year_to '1985' and description 'Gipiemme Special, Italy, 219
-- grams'; 8874 -> 4712; 8342 -> 4770.

UPDATE component_detail
SET year_from = '1987',
    description = 'Simplex Alpha T, France. Rear derailleur, 30t, max sprocket 24 or 28t (screw J), indexed 5-6 or non-indexed 3-7, 240g (1989), 242g measured. Refs T/P 10071, T/SP 10074; white 10073/10076, black 10072/10075. Alpha T/P on 1987 Peugeot bikes.'
WHERE component_id = 4561 AND title = 'Simplex Alpha T'
  AND year_from = '1989' AND year_to = '1995' AND source_ref = 59
  AND CHAR_LENGTH(description) = 206;

UPDATE component_detail
SET year_to = '1987',
    description = 'Gipiemme Special, Italy, 219 grams. Still fitted to the 1987 Bianchi Super Leggera.'
WHERE component_id = 4264 AND title = 'Gipiemme Special'
  AND year_from = '1970' AND year_to = '1985' AND source_ref = 259
  AND description = 'Gipiemme Special, Italy, 219 grams';

UPDATE bike_spec SET component_id = NULL
WHERE bike_spec_id = 8874 AND label_id = 17
  AND value_text = 'Suntour Mountech' AND component_id = 4712 AND source_ref = 224;

UPDATE bike_spec SET component_id = NULL
WHERE bike_spec_id = 8342 AND label_id = 17
  AND value_text = 'Suntour SVX' AND component_id = 4770 AND source_ref = 223;
