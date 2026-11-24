# Ideale saddles — brand 580 "Tron & Berthet" (Thron & Bethet, France)

The Ideale saddles live under component_brand 580 "Tron & Berthet" (about 80
rows titled "Ideale ..."; also BIM, Franceix and Norex). Search by component
title, not brand title, before assuming the brand is missing.

## 1955 Idéale 48 and 49 advertisement — applied 2026-11-24

The maker's [advertisement in L'Officiel du cycle, 1 October 1955 p.174](https://ebykr.com/wp-content/uploads/2026/11/ebykr-1955-lofficiel-ideale-advertisement-selle-course-48-49-p174-scaled.webp) presents the new Professionnel racing saddle with a pressed central depression, No. 48 in duralumin and No. 49 in steel; it says each came with a plastic bag and guarantee. The [No. 48 specimen](https://www.velobase.com/Pages/ViewComponent.aspx?ID=977B03F0-3204-40D9-ADA0-7F57F8214F3B) is marked 48 and Professionnel, has a depressed top and a duralumin-marked frame. The [No. 49 specimen](https://www.velobase.com/Pages/ViewComponent.aspx?ID=6E0A7747-9AF3-4E95-85AB-71BCD9C03EA6) is marked 49 and Professionnel, with a depressed top and steel rails. This supports matching the named models, not dating either individual specimen's manufacture. Both records 5620/5621 have NULL dates, source 1 and no bike links; no near-duplicate candidates were reported for the brand. No source with this advertisement's label was registered in the live DB.

After approval, registered the advertisement as source 546 and updated both descriptions and date bounds to 1955 as an availability attestation, not production endpoints. One source and two rows changed; readback verified descriptions, source, dates and zero links, and the guarded rerun changed zero rows. The quality report found zero errors. Generator/live comparison across 118 catalogues retained the prior 15 lost proposals, with no gains or changed mappings. No title or model identity was changed. Old descriptions are `Ideale 48 Professionnel, France` and `Ideale 49 Professionnel, France`; both old source refs are 1 and dates NULL. Rollback must check the applied values before restoring them and delete source 546 only if unreferenced. The c.1936 catalogue uses model numbers across leather grades and materials, so similarly numbered early records need specimen crosswalks; no broad date assignment is warranted.

## Bikecology 1980 88/Titanium identity — applied and validated 2026-11-20

The [1980 catalogue](https://labibleduvelodivers.blogspot.com/p/revue-1980.html),
source247, printedp14 (image51 of64 in the reversed blog sequence), explicitly
offers **88/Titanium with giant rivets**, new for1980, retailer stockA14-03,
$100. Its lower side leather is cut away relative to90; the advertised
undercarriage is titanium and the copper rivets are twice the normal diameter.
The page says all Bikecology Ideales are Rebour hand-treated and all except
the aluminium version exclude clamps. The titanium claim is dealer evidence,
not independent verification of a specimen's alloy. Its SW2lb is shipping
weight; the156x252mm caption belongs to the large90 photograph. Neither is
an actual88/Titanium weight or dimension.

The [Summer1981 p15 scan](https://ebykr.com/wp-content/uploads/2026/11/ebykr-1981-bikecology-catalog-p15-scaled.webp),
source227, instead specifies **steel rails** for the low-profile88, stock46-221-8,
$50,475g actual advertised weight. It describes a narrowed middle, cut-away
sides, aluminium butt plate and double copper rivets. Its shared88 name and
shape do not extend the titanium configuration into1981 or transfer475g to it.

Live reconciliation:5654 is the plated two-wire-frame88 Speciale Competition
with large rivets,1960–1981,source280;5658 is90 Speciale Competition titanium,
1970–1981,source280. Preserve both IDs, dates and descriptions. Neither is the
explicit titanium88 offering;2002/2003 titanium rows also differ.5655, mentioned
in the historical inventory below, is not a live row in this review.
Brand580/category17 already has a category_brand registration. The exact
merge-candidate report found no candidates in this brand; manual material/model
comparison supports keeping the new configuration separate.

Added **12169**, `Ideale 88/Titanium (low-profile, giant rivets)`, after explicit
approval: brand580/category17/groupNULL,1980–1980,source247,
UUID`eea00afd-4c49-47b0-8f5d-39d76bde3870`.
Description212 characters: low-profile cut-away leather, giant copper rivets,
Rebour treatment, advertised titanium undercarriage, no clamp; distinguish
steel88 and titanium90. Search text from the maintained helper:
`Tron Berthet Ideale 88/Titanium`. Dates record this catalogue attestation,
not proven production endpoints. No existing row is overwritten or merged.

The approved transaction inserted exactly one saddle and updated the two OMAS
rows recorded in [omas.md](omas.md). Readback checked every field of 12169 and
confirmed 5654/5658 and the other reviewed legacy rows were unchanged. The
second SQL load affected zero rows. Actual before/after comparison across
113 loaded catalogues and 24,061 specs found zero mapping changes; the existing
15 generator/live-DB losses remain identical. Post-load duplicate reports found
no merge candidates for either brand. The integrity report found zero errors
and 2,069 review findings, including 1,687 incomplete-date reviews.

12169/5654/5658 have no links. The two bike-spec mentions of 88 are combined
Extras options, not dedicated titanium88 specs; no new link is supported.
Restoration would delete only the inserted UUID after checking for links.
SQL, validation scripts, the temporary baseline, downloads and renders were
removed after validation; the page URLs above retain the evidence.

## Ron Kitching 1981 Ideale range page and an undated Anglo-Continental advert — Classic Rendezvous Ideale page (updated 10.22.2013), data_source 280 / 281, 2026-10-27

- Source: https://classicrendezvous.com/country-of-origin/france/french-parts/ideale/
  — a photo gallery. Two dated documents on it: `Kitching_range_81.gif` (Ron
  Kitching 1981 catalogue page, "entire range of Ideale saddles", sizes and
  weights; data_source 280, GB) and `Ideal64adL.jpg` (Anglo-Continental Cycles,
  Harrogate, "3 New Introductions from Ideale": No. 60 Record, 60 Professionnel,
  47; captioned "1940s Cycling magazine" but the file name says 64 and prices are
  pre-decimal, so treated as undated; data_source 281, GB). Captions add "mod. 90
  introduced in 1965" (not applied: 5656's 1960 start is earlier) and photo-only
  models 45, 52, 57, 59, 65, 72, Columbia, swallow, 2004 "Super Comfort".
- **First attempt reverted**: the brand-title search missed brand 580, so a new
  brand 697 "Ideale" with 14 duplicate rows (ids 9773-9786: 2000, 2001, 2002, 2003,
  2004 Randonneuse, No. 80 Record, No. 80 Speciale, No. 88, No. 90, No. 90R, No. 92
  Diagonale KR, No. 60 Record, No. 60 Professionnel, No. 47) and its category_brand
  row were inserted and deleted the same day (no links, no overrides). Brand 371
  "Ideal" (a 1930s drum-brake hub) is a different maker.
- **Applied to brand 580** (source_ref 280 unless noted):
  - year_to -> 1981 with descriptions from Kitching: 5602 2003 (leather / steel
    rails, was 1970-1970), 5603 2003 (suede, 1970-1970), 5605 2004 Randonneuse
    (1979-1979), 5650 80 Record (steel rails, 1970-1970), 5652 80 Speciale
    Competition (1970-1980), 5654 88 Speciale Competition (larger copper rivets,
    1960-1980), 5658 90 (titanium, 1970-1980), 5661 92 Diagonale (long model =
    gents 270 x 170mm, 1977-1977), 5660 92 Diagonale "Dame" (= ladies 230 x 170mm,
    1977-1977).
  - Descriptions only: 5598 2000 (Rilsan top, 270 x 150mm, 450g; dropped the
    "(Spec)" repeat), 5599 2001 (appended "490g with No. 2 clip in 1981"; the
    Cyclo-Pedia gives 518g), 5657 90 alloy rail (appended "Sold as the 90R ...
    500g in 1981"), 5640 60 Record (advert spec, source_ref 281).
  - New (source_ref 281, years NULL): 9787 Ideale 60 Professionnel, 9788 Ideale 47.
- Not changed: 5600 2002, 5648 80, 5656 90, 5604 2003 Titane (already carry
  catalogue text; 5656's 255-character description has no room for Kitching's
  720g / 735g Rebour weights); 5649 80 Record alloy rails, 5651 drilled skirt, 5655
  88 smaller rivets, 5662 92 short model, 9110 92 Touriste (Kitching doesn't
  distinguish them). No year_from moved.
- Bike links: 22 of the 27 Ideale bike specs were already linked (5599, 5600,
  5648) and keep fitting; the rest are either / or values ("Brooks Professional or
  Ideale 90", "Ideale 2002 or treated leather") and option prose in Extras, so the
  link pass had nothing to add.
