-- APPLIED 2026-11-14 with user approval. Evidence: michelin-2026-11-14.md.
-- Five component corrections, retaining all existing bike/component links.
-- Dates are catalogue-fitment bounds, not manufacturing start/end dates.
-- French Peugeot 1986/87 and Bianchi DE 1986 use existing catalogue
-- attributions; their dates are not printed on the inspected pages.
-- Expected first run: five component rows and one bike_spec row affected.
-- Verified first run: five component rows and one bike_spec row affected.
-- Verified re-run: zero rows affected. Catalogue dating caveats retained.

-- 1986 Peugeot US table (source 310), Triathlon/Ventoux/Tourmalet.
-- Retain the 1988 700C casing/weight data and add the explicitly named 27in size.
UPDATE component_detail
SET year_from = '1986',
    description = 'Road clincher in 700C and 27 x 1-1/8 in. 700C versions: triple-ply casing, diamond tread with centre band, 20-622 (220 g) or 23-622 (235 g).',
    source_ref = 310
WHERE component_id = 9498 AND title = 'Michelin Hi-Lite Road'
  AND year_from = '1988' AND year_to = '1988' AND source_ref = 262;

-- 1986 Peugeot US Mont Cenis (source 310); 1987 US Triathlon confirms 700x19.
UPDATE component_detail
SET year_from = '1986',
    description = 'Road clincher, offered in 700 x 19C and 700 x 20C.',
    source_ref = 312
WHERE component_id = 6836 AND title = 'Michelin Hi-Lite Pro'
  AND year_from = '1988' AND year_to = '1988' AND source_ref = 262;

-- Peugeot FR catalogue attributed 1986, PH11; maker confirmed in table footnote.
UPDATE component_detail
SET year_from = '1986', source_ref = 309
WHERE component_id = 9499 AND title = 'Michelin Super Elan'
  AND year_from = '1988' AND year_to = '1988' AND source_ref = 262;

-- 1989 Peugeot NL, printed p.30: Cosmic explicitly lists Michelin BIB TS20.
-- Also present on four bikes in the Peugeot FR 1986 technical table.
UPDATE component_detail
SET year_to = '1989', source_ref = 320
WHERE component_id = 6830 AND title = 'Michelin BIB TS-20'
  AND year_from = '1980' AND year_to = '1985' AND source_ref = 259;

-- Provisional year: Rekord 920 German sheet is attributed to 1986, undated.
-- Select 20-622 clincher identification is explicit; the catalogue year is inferred.
UPDATE component_detail
SET year_from = '1986',
    description = 'Road clincher, offered in 20-622.',
    source_ref = 324
WHERE component_id = 6826 AND title = 'Michelin Select'
  AND year_from = '1987' AND year_to = '1991' AND source_ref = 1;

-- Correct transcription, not a model/link change. Source image prints 700x20C.
-- Before applying, back up and repair the same cell in
-- bike_specs/1987_peugeot_us_spec.csv so regeneration preserves the correction.
UPDATE bike_spec
SET value_text = 'Michelin "Hi Lite Pro", 700x20C'
WHERE bike_spec_id = 15681 AND component_id = 6836 AND source_ref = 312
  AND value_text = 'Michelin "Hi Lite Pro", 700x70C [?]';
