# Mavic catalogs processed so far

## Mavic Rims & "1000 SSC Group" advertisement (1988) — retrobike.co.uk archive, data_source id 106

**Not a full despiece catalogue.** The archive entry's `/download` link only
served a single page-pair (two stacked magazine-ad pages), despite the
listing title promising a full catalogue — no despiece, no per-part
materials/threading beyond the Rims page. First Mavic source of any kind in
the DB (172 pre-existing rows were all bare velobase crawl, source_ref 1).

Page 1 ("MAVIC RIMS" ad): 4 rims with real spec tables (seat dimension,
drilling, avg weight by size) — Mach 2 CD, 190 FB, Open 4 CD, Oxygen M6.

Page 2 ("MAVIC 1000 SSC GROUP" ad): a composition table giving one part
number per category for the 1000 SSC groupset, plus a sparser "options"
column of alternate/upgrade part numbers. Only the primary "1000 SSC" column
was acted on — the "options" column didn't reconcile cleanly against
existing category rows (e.g. option "635" for Bottom Brackets collides with
an existing Cranksets row of that number; option "613" for Hubs and "570"
for Brakes have no matching row anywhere), so none of those options numbers
were inserted or matched. Possible print-layout misread on a single
compressed image rather than genuine new SKUs — worth re-checking against a
sharper scan if one turns up.

**Updated** (year_to extended to 1988 and/or description enriched with
"part of Mavic 1000 SSC groupset composition"): Rims 190FB (5049, desc only),
Open 4 CD (5097); Handlebars 350 (2861); Stems 365 aero (6585); Brakes Super
Pro 430 SSC (854); Cranksets 630 narrow-font (1641); Pedals 640 (3837); Front
Derailleurs 860 (2407); Rear Derailleurs 851 SSC (4346, was a single-year
1980 placeholder); Headsets 310 (3043, desc only, years already covered
1988).

**Inserted** (source_ref 106): Rims "Mavic Mach 2 CD" (8149, 1988) — distinct
from the existing later "Mach 2 CD 2" revision (id 5082, dated 1990); Rims
"Mavic Oxygen M6" (8150, 1988) — first Mavic MTB rim row.

**Left unresolved / not acted on** (ambiguous single-image evidence, no
despiece to confirm):
- Bottom Brackets: ad gives "612" for the 1000 SSC BB; DB has no "612" row,
  only a vague "610 Series" (id 85, 1980–1990) that may or may not be the
  same part. Not merged or inserted — too thin to tell a specific SKU from a
  placeholder family name.
- Pedals "641" and Front Derailleurs "861": ad lists these as alternates
  ("640 or 641", "860/861/862") with zero description; left uninserted since
  a bare number with no other detail doesn't meet the "confirm by part
  number and by name" bar.
- Shifters: ad reads "820" for shift levers; DB's nearest row is "Mavic 821"
  (id 6087, 1980–1990, already covers 1988). Not renamed — too easy to
  misread a compressed single-page image, and 6087 already covers the date.
- Hubs "550"/"613": 550 only exists embedded in combined-number titles
  ("Mavic 500 RD / 550 RD", "Mavic 500/550"); already covers 1988, left
  alone. No "613" row anywhere; not inserted (no other detail).

If a real multi-page Mavic catalogue (despiece-level, like the Zeus one)
turns up, re-run this brand file against it — this pass only scratched the
surface of Mavic's DB footprint (172 rows, still only 12 catalogue-touched).

## Mavic Catalogue Général 84-85 (1984) — equusbicycle.com/bike/mavic/, data_source id 114

First full Mavic catalogue: 48 pp., bilingual FR/EN, despiece-level for hubs,
brakes, BB, derailleurs. Source is the Bicycle Info Project's 25 spread
scans (US dealer copy with handwritten prices). **Catalogue p.9 (polished
clincher rims table) is missing from the scan** — the p.10 photo shows them,
no names. Bound locally via `bind-images-to-pdf.sh`; nothing to commit.

New per its own text: 550 RD, 1000 SSC group (raced 1983, on sale 1984),
Argent 8, 635 triple (also a new option on 1010/1012), 350 bend, 370 stem,
310 headset, 640 pedal, 610 RD BB, TTM 4; Super Pro 430 "latest"; G 40
"created two years ago" (c.1982). Groups table (p.41): 1000 SSC / 1010
Professionnel / 1012 Route / 1013 Sport, all with 610 BB, 350, 360, 630,
640, 820 levers. No group rows created for 1010/1012/1013.

**Resolves 1988-ad open items:** 820 is the shift lever (in every group);
612 = 610 RD double BB (116 mm) and the ad's "613" is the 610 RD triple BB
(121 mm), not a hub; 861 = SSC braze-on FD; 641 absent here (only 640), so
it postdates 1985. The "570" brake and the BB "635" collision remain
unexplained (635 is the triple crank).

**Updated** (42 rows, source_ref -> 114; 1988-ad citations dropped from
descriptions, year_to 1988 on 854/2861/3043/3837/2407 still rests on that
ad, source 106):
- Retitled (old title kept here for matching): 5093/5092/5091 "Mavic
  Monthlery Route/Pro/Legere" -> "Mavic Montlhéry Route/Pro/Légère"; 5109
  "Mavic Speciale Sport" -> "Mavic Spéciale Sport"; 5066 "Mavic G.E.L. 280
  (GEL280)" -> "Mavic G.E.L. 280"; 3401 "Mavic 520 Track Pista" -> "Mavic
  520 Piste"; 3397 "Mavic 500 RD / 550 RD" -> "Mavic 500 RD" (550 RD now its
  own row); 84 "Mavic 600RD, SSC" -> "Mavic 600 RD" (standard threaded BB;
  the 1984 SSC group used the 610); 85 "Mavic 610 Series" -> "Mavic 610 RD"
  (group Zap -> NULL, Zap is 1990s); 2411 "Mavic 862" -> "Mavic 862, SSC"
  (group Zap -> SSC).
- year_to -> 1984: Montlhéry x3, Module E2 Argent 5090, Module 3D Argent
  5085, OR 10 5103, G.E.L. 280, CX 18 5057, 510 3400, 520 Piste, 360 stem
  6584, Pro 420 853, levers 362/363, 600 RD 84.
- NULL -> 1984-1984: Spéciale Sport, Piste 5105, Argent 10 5052, 302 3042.
- year_from moved: G 40 5065 1980 -> 1982 ("two years ago"); GL330 5067
  1989 -> 1984; 610 RD, 350 bar 2861, 640 pedal 3837, Super Pro 430 854,
  851 (1984) 4342: 1980 -> 1984 (catalogue calls them new; 4342's own title
  says 1984).
- Description only: GP 4, Argent 8, 580 CX, 370, 410 brake, 300/310/311/312
  headsets, 635, 810, 811, 860, 801 (1980).

**Inserted** (1984-1984, UUID source_id, source_ref 114): rims Sport 600
(8152), Bleu SSC (8153, SSC), Argent 12 SSC (8154, SSC), TTM 4 (8155), TTM 4
CD (8156); wheels TTM 504 (8157), TTM 504 CD (8158); hubs 550 RD (8159,
SSC), 580 CX Piste (8160), Sulky 540 (8161), TTM 560 (8162); FDs 812
(8163), 861 SSC (8164, SSC); shifter 820 (8165).

**Deleted** (no bike_spec links, no overrides; both velobase, source_ref 1):
3398 "Mavic 500/550" (bare 1975 duplicate of 3397); 2408 "Mavic 862, SSC"
(1990, SSC group, no weight; duplicate of 2411). Their velobase source_id
GUIDs were not captured before the delete — match a reappearance by title.

**Left unresolved:** 630 crank — 1640 block-letter vs 1641 narrow-font, photo
doesn't settle which was current; Paris-Roubaix SSC "grise" vs 5112 red /
5113 yellow label rows; 5108 "Special Service Des Courses" / 5114 "Mavic
SSC" may be the same rims as the new Bleu/Argent 12 SSC rows; 6087 "Mavic
821" (Zap) left as a separate later lever; 5089 "Module E2" probably
duplicates 5090 "Module E2 Argent" but has 2 bike_spec links.
