-- APPLIED 2026-11-14, user approved. Rear derailleur step 1 audit follow-up
-- (TODO.md, Rear Derailleurs): Dura-Ace Black Series rear group alignment.
--
-- 4501 Shimano DA-100 / RD-7100, Dura-Ace (Black) and 7427 DA-100 / RD-7100,
-- Dura-Ace (silver) stay separate rows. They are finishes sold separately; the
-- variant decision was made 2026-10-28 (commit 28b9ace) and is recorded in
-- shimano.md. The 2026-11-14 audit flag came from the classifier, not new
-- evidence: the 1979 Miyata 1200 link made 7427 the survivor, so its
-- REVIEWED_VARIANTS entry no longer covered 4501. Fixed in duplicate-classify.js.
--
-- Group: 7427 and every other Dura-Ace Black Series row (432, 988, 1813, 1814,
-- 2507, 3097, 3553, 6161) are in group 50 "Dura-Ace", including other
-- dual-coded first-generation rows such as 3098 K-901 / UA-100 / HP-7100. 4501
-- alone sat in 137 "Dura-Ace 7100", the 1981 FC-7110 / FD-7100 group. Move it
-- to 50. Group 137 keeps 1818 and 2509. No bike links on 4501; titles, dates and
-- sources unchanged.
--
-- Applied: 1 row, rerun 0, readback 4501 and 7427 both group 50.
-- Restore: group_id = 137.
UPDATE component_detail
SET group_id = 50
WHERE component_id = 4501 AND title = 'Shimano DA-100 / RD-7100, Dura-Ace (Black)'
  AND category_id = 15 AND group_id = 137 AND source_ref = 396;
