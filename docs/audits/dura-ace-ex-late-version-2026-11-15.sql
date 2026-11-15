-- APPLIED 2026-11-15, user approved: clarify the late RD-7200 variant, 4508.
-- Applied 1 update. Readback confirms title, description, search_text, years,
-- source_ref and original specimen source_id. Rerun: 0 affected rows.
-- Keep the broad DA-200 / RD-7200 record 4509 separate: its VeloBase gallery
-- includes multiple versions, and its six bike links span 1981-1984 with no
-- version identified by their text. No merges or bike-link changes.
--
-- Evidence reviewed:
-- https://www.disraeligears.co.uk/site/shimano_dura-ace_ex_7200_4th_style_derailleur.html
-- Owner's fourth-style specimen is dated HK (November 1983). Same late
-- construction as the 4508 photos: no alignment pins in the two parallelogram
-- pivots, revised two-part pivot seals, curved inner hatch plate and lower
-- pulley spoke protector. Supports year_from 1984 -> 1983, not an exact
-- production start. Existing year_to 1985 retained, not newly established.
-- https://www.disraeligears.co.uk/site/shimano_dura-ace_ex_7200_exploded_view_-_334e_march_1984.html
-- https://www.disraeligears.co.uk/site/shimano_bicycle_system_components_1984_page_24.html
-- The June 1984 catalogue p.24 (source 26) names RD-7200, 26T max and total
-- capacity, and shows the late seals/cage, including the S.B. cap. The separate
-- 334E drawing carries a February 1984 print imprint, although indexed as March.
-- Original VeloBase specimen page and photos saved in /private/tmp/dura-ace-ex-review/.
-- Original specimen source_id retained; measured weight 206g retained.
-- source_ref 1 -> 26; search_text rebuilt from the new title.
-- No generator overrides reference 4508. 4509 and its overrides unchanged.
--
-- Before 4508 (brand 51, category 15, group 55, image NULL):
-- title: Shimano Dura-Ace EX - Last version
-- description: Shimano Dura-Ace EX - Last version, Japan, 206 grams (Actual)
-- year_from 1984; year_to 1985; source_ref 1
-- search_text: Shimano Dura-Ace EX Last version
-- source_id: B6BF8317-2C6F-4EB4-B3B7-CBDA15F5AA79

UPDATE component_detail
SET title = 'Shimano RD-7200, Dura-Ace EX (late version)',
    search_text = 'Shimano RD-7200 Dura-Ace EX',
    description = 'Shimano RD-7200, Dura-Ace EX (late version), Japan. Short-cage friction rear, 26T max; revised two-part pivot seals, freely rotating cable fittings, curved inner hatch plate and lower pulley spoke protector. 206g measured.',
    year_from = 1983,
    source_ref = 26
WHERE component_id = 4508
  AND title = 'Shimano Dura-Ace EX - Last version'
  AND source_id = 'B6BF8317-2C6F-4EB4-B3B7-CBDA15F5AA79'
  AND brand_id = 51 AND category_id = 15 AND group_id = 55
  AND year_from = 1984 AND year_to = 1985 AND source_ref = 1
  AND description = 'Shimano Dura-Ace EX - Last version, Japan, 206 grams (Actual)';
