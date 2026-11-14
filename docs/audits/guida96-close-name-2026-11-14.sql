-- APPLIED 2026-11-14, user approved (three splits + B2 merge). Guida '96 (source 357) close-name review.
-- Evidence: cross-catalog-notes.md, Guida '96 section ("Both lists above reviewed 2026-11-14").
-- Verified: 3 inserts + 4 updates + 1 delete on first run; rerun zero rows; bike_spec links and
-- generated bike-update.sql (86 CSVs, 6510 linked) unchanged; npm test passes.
-- Three wrong matches from the 2026-11-04 pass 2 are split: the Guida '96 entry
-- gets its own row and the previously matched row is restored to its pre-pass
-- state (revert values from cross-catalog-notes.md "year_to -> 1996" list).
-- No bike spec or generator override references 1721 / 9176 / 9480, and no CSV
-- value names the new titles, so generated links should be unchanged.
-- Every statement is guarded on the current values; rerun must affect zero rows.

-- A9. Guida '96 scan 29 (p.132) prints "RITCHEY Logic Road": road crank, 170-180 mm,
-- 39-53, 590 g, cold-forged. 1721 is the 1991-92 MTB Logic triple (ritchey.md).
INSERT INTO component_detail (brand_id, title, description, year_from, year_to, category_id, group_id, search_text, source_id, source_ref)
SELECT 252, 'Ritchey Logic Road', 'Cold-forged alloy road crankset, arms 170-180 mm, 39-53 rings; 590 g with rings.', '1996', '1996', 7, NULL, 'Ritchey Logic Road', UUID(), 357
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM component_detail WHERE brand_id = 252 AND category_id = 7 AND title = 'Ritchey Logic Road');

UPDATE component_detail
SET year_to = '1992', source_ref = 150,
    description = 'Cold-forged duralumin MTB crankset made by Sugino, hidden pin, 170-180 mm, Q-factor 151 mm, 74/110 BCD, 24-36-46 or 26-36-48; 650 g spec, 714 g measured (175 mm, all parts). Black anodised added 1992.'
WHERE component_id = 1721 AND brand_id = 252 AND category_id = 7
  AND title = 'Ritchey Logic Crankset'
  AND year_from = '1991' AND year_to = '1996' AND source_ref = 357;

-- A8. Guida '96 scan 13 (p.116) prints "MICHE Primato" post: 25.0-27.2 mm, "23 mm"
-- (misprint), 325 g, patented safety system, forged, anodised; no aero shape.
-- Guida '99 scan 13 (p.101) "MICHE Primato": 24.8-27.2 mm, 235 mm, 315 g, same text.
-- 9480 Primato Aero was added from Guida '88 (262) as the aero post.
INSERT INTO component_detail (brand_id, title, description, year_from, year_to, category_id, group_id, search_text, source_id, source_ref)
SELECT 154, 'Miche Primato seat post', 'Forged anodised alloy seat post with patented safety system, round shaft; 25.0-27.2 mm, 325 g (1996); 24.8-27.2 mm, 235 mm, 315 g (1999).', '1996', '1999', 18, 128, 'Miche Primato', UUID(), 357
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM component_detail WHERE brand_id = 154 AND category_id = 18 AND title = 'Miche Primato seat post');

UPDATE component_detail
SET year_to = '1988', source_ref = 262
WHERE component_id = 9480 AND brand_id = 154 AND category_id = 18
  AND title = 'Miche Primato Aero'
  AND year_from = '1988' AND year_to = '1996' AND source_ref = 357;

-- A4. Guida '96 scan 17 (p.120) prints "AMBROSIO Road Racing" tubular rim: 20-28 in,
-- 20 mm, 28 holes (20 in only) / 36 (22-28), 390 g (28), plain finish. "Olimpic"
-- is not printed; 9176 is 20.5 mm / 400 g / 26-28 in. The '99 pass already
-- rejected Road Racing vs Olimpic Road Racing as a name-only collision.
INSERT INTO component_detail (brand_id, title, description, year_from, year_to, category_id, group_id, search_text, source_id, source_ref)
SELECT 64, 'Ambrosio Road Racing', 'Alloy tubular rim, 20 mm wide, 20-22-24-26-28 in; 28 holes (20 in only), 36 holes (22-28 in); plain finish; 390 g (28 in).', '1996', '1996', 16, NULL, 'Ambrosio Road Racing', UUID(), 357
FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM component_detail WHERE brand_id = 64 AND category_id = 16 AND title = 'Ambrosio Road Racing');

-- source_ref 262 is inferred: year_to 1988 came from the Guida '88 match.
UPDATE component_detail
SET year_to = '1988', source_ref = 262
WHERE component_id = 9176 AND brand_id = 64 AND category_id = 16
  AND title = 'Ambrosio Olimpic Road Racing'
  AND year_from = '1985' AND year_to = '1996' AND source_ref = 357;

-- B2 (user decision 2026-11-14): merge 10563 "Vittoria Pro Lite 19" (Guida '96 row,
-- no links/overrides) into bare velobase 6898 "Vittoria Pro L 19"" (no dates/text/links),
-- keeping 6898's id and velobase source_id, as the 10569 -> 6880 Corsa CX precedent.
-- Guida '96 scan 56 (p.159): "VITTORIA Pro Lite 19", open vulcanised, 700x19, cotton,
-- 180-200 g, folding bead, 7-8 bar, L. 40.500.
UPDATE component_detail
SET title = 'Vittoria Pro Lite 19', search_text = 'Vittoria Pro Lite 19',
    year_from = '1996', year_to = '1996', source_ref = 357,
    description = 'Open vulcanised tubular, 700x19; cotton casing; herringbone/diamond-point tread; folding bead; for racing and road training; 7-8 bar; 180-200 g.'
WHERE component_id = 6898 AND brand_id = 104
  AND category_id = 23 AND title = 'Vittoria Pro L 19"' AND source_ref = 1
  AND year_from IS NULL AND year_to IS NULL;

DELETE FROM component_detail
WHERE component_id = 10563 AND title = 'Vittoria Pro Lite 19' AND category_id = 23 AND source_ref = 357
  AND EXISTS (SELECT 1 FROM (SELECT component_id FROM component_detail WHERE component_id = 6898 AND title = 'Vittoria Pro Lite 19') t)
  AND NOT EXISTS (SELECT 1 FROM bike_spec WHERE component_id = 10563);
