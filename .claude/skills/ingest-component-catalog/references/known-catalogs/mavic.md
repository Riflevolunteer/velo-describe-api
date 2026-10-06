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

## Mavic Trade catalogue 1986-1987 (1986) — disraeligears.co.uk, data_source id 119

Source: https://www.disraeligears.co.uk/site/mavic_-_trade_catalogue_1986-1987.html
(46 `..._page_N_main_image.jpg` images: front cover, pp. 1-44, rear cover;
bound locally, PDF page N = catalogue page N-1). English trade edition, 44
pp., complete — includes the clincher pages the 1984 scan lacked. Dated
"1986-1987" on the cover: year_from 1986 for parts first seen here, year_to
1987 for parts still listed (user-confirmed convention).

New per its own text: 365 stem ("a new light weight stem", absent in 1984);
641 pedal (= 640 in 9/16 x 20 BSA thread — resolves the 1988-ad "641");
1015 RS group (310/350/365/410/500/612/630/640-641/810-812/801/820)
replacing 1984's 1010/1012/1013; MTB rims Rando M4/M5; CXP 25, Challenger,
Comète; "definitive" 801/851 (Campagnolo-type hanger, flat outer plate).
Dropped since 1984: Pro 420 brake + 362 lever, 360 stem, 300/302 headsets,
510 hub, Sport 600, Bleu SSC, Argent 12 SSC, OR 10, Module E2 Argent, G 40.
The 1000 SSC options row reads Stem 370 / BB 613 / Crankset 635 — so the
1988 ad's "570 brake" and "635 BB" options were column-shifted misreads.
Specs differing from 1984 are named per edition in the descriptions
(Légère, Argent 10, CX 18, Module 3D Argent, 520/580 Piste, Sulky, 350,
370, 635).

**Updated** (50 rows, source_ref -> 119):
- Retitled (old title kept here for matching): 5048 "Mavic Module 3CD" ->
  "Mavic M3 CD"; 5061 "Mavic CXP 25 (aluminum rim, carbon fairing)" ->
  "Mavic CXP 25"; 6972 "Mavic Comete" -> "Mavic Comète"; 4346 "Mavic 851,
  SSC" -> "Mavic 851 (1986), SSC" (also year_from 1980 -> 1986; 4342 "851
  (1984)" covers 1984-85).
- year_from moved later: 6585 365 stem 1980 -> 1986 ("new").
- NULL years set: 5073 MA 1986-1987; 5086 Module 4 1984-1987 (1984 Sulky
  text names it); 5061 CXP 25 1986-1987.
- year_to -> 1987: rims 5109, 5093, 5092, 5091, 5105, 5052, 5054, 5066,
  5057, 5085, 5084, 5074, 5075, 5112 (red label, was 1979), 5048, 8155,
  8156; wheels 6971, 6972, 8157, 8158; hubs 8159, 3408, 8160, 3401, 8161,
  8162; BB 84; crank 1642; FDs 2405, 2406, 8163, 8164; shifter 8165; brake
  852; levers 361, 363.
- Description only: 5077 MA 40, 5067 GL330, 2861 350, 6586 370, 1641 630
  (1988-ad citation dropped), 3837 640, 4338 801 (1986), 854 Super Pro 430.

**Inserted** (1986-1987, UUID source_id, source_ref 119): rims MA 2 Argent
(8177), Rando M4 (8178), Rando M5 (8179); pedal 641 (8180, SSC).

**Deleted:** 5079 "Mavic MA 40" (1970-1970, velobase source_id
9364EF73-97C3-498C-AED9-890A2A2012B5, bare) — duplicate of 5077 (1980-1999,
holds the `mavic ma40` override and a bike_spec link). No links/overrides.

**Left unresolved:** 310/311/312 headsets given 82 g here vs 102 g in 1984
(82 g is the 1984 figure for the 300 — likely a copied table; not changed);
5074 MA 2 vs 5075 MA 2 (Red/Green Label) probably the same rim, both kept
(independent avg weights); 6973 "Comete -/+ (disc)" — a "COMETE +" disc is
photographed but not described; 630 crank 1640 vs 1641 font still unsettled;
no component_group rows for 1015 RS.

## Mavic Catalogue 88-89 (1988) — disraeligears.co.uk, data_source id 120

Source: https://www.disraeligears.co.uk/site/mavic_catalogue_88-89.html (50
`..._page_N_main_image.jpg` images: front cover, pp. 1-48, rear cover;
bound locally, PDF page N = catalogue page N-1). **French edition**, cover
"88·89 catalogue", no print code. Dated year_from 1988 / year_to 1989 (same
convention as the 1986-87 entry). Per Disraeli Gears, the last catalogue
with the 800/850 derailleurs and the only one with the 803/853.

New vs 1986-87: M.R.L. 570 freewheel hub; Bulb'Air front lenticular;
Comète ± fully described (8 weight versions); rims 190 FB, Open 4 CD ("une
nouvelle génération"), MA 50 Cr.D (hard chrome), Oxygen M6, Mach 2 CD
(tubular, single eyelet), SSC n° 4 Cr.D; 355 aero bar; 611 RD Piste and 615
RD MTB BBs; 636 Piste crank; 645 LS Look pedal (6450/6451); triple FDs
830/831/832 and 870/871/872; long-cage 803/853 RDs. Stainless exposed
eyelets on all top rims; Module 4 gains 48 holes; all rim labels redesigned
(yellow MAVIC block + coloured "M" panel). Dropped: Montlhéry Légère, Argent
8, CXP 25, Sulky 540, all BMX (TTM 4/4 CD/504/504 CD/560).
**Resolves the 1988 ad's "570":** the 1000 SSC options column puts 570 under
Moyeux (hubs) — it is this MRL 570, not a brake. 1000 SSC options: 370,
570, 613, 635, 645, 870/871/872, 853. 1015 RS options: 613, 635, 645,
830/831/832, 803.

**Updated** (58 rows, source_ref -> 120):
- Retitled (old title kept here for matching): 5048 "Mavic M3 CD" (and
  before that velobase "Mavic Module 3CD") -> "Mavic Module 3 CD"; 5115
  "Mavic SSC N°4 CRD" -> "Mavic SSC n° 4 Cr.D" (NULL -> 1988-1989); 6973
  "Mavic Comete -/+ (disc)" -> "Mavic Comète ±"; 2863 "Mavic 355 Drop
  Handlebar / Bullhorn" -> "Mavic 355"; 1644 "Mavic Pista" -> "Mavic 636
  Piste" (NULL -> 1988-1989).
- year_from moved later: 5097 Open 4 CD 1980 -> 1988 ("new generation",
  absent 1986); 2409 870 SSC 1984 -> 1988 (absent from 1984 and 1986);
  4347 853 SSC 1980-1980 -> 1988-1989.
- NULL -> 1988-1989: 5080 MA 50 Cr.D.
- year_to -> 1989: rims 5073, 5074, 8177, 5084, 5085, 5048, 5086, 8150,
  8178, 8179, 5105, 5109, 5093, 5092, 5052, 5066, 8149, 5057, 5097; wheels
  6971, 6972, 6973; hubs 8159, 3408, 8160, 3401; 3045 312; 2861 350; 6585
  365; BB 84; cranks 1641, 1642; pedals 3837, 8180, 3836 645 LS (was 1987);
  FDs 2405, 2406, 8163, 2407, 8164; RD 4346; shifter 8165; brakes 852, 854;
  levers 361, 363.
- Description only: 5049 190 FB (single eyelet here, double in the 1988
  ad — both named), 5077 MA 40, 5069 GP 4, 5067 GL330, 85 610 RD (adds
  611/615 sub-refs), 4339 803 (1986).

**Inserted** (1988-1989, UUID source_id, source_ref 120): Bulb'Air (8181,
Wheel(sets)), M.R.L. 570 (8182, Hubs), FDs 830 (8183), 831 (8184), 832
(8185), 871 SSC (8186), 872 SSC (8187).

**Deleted:** none.

**Left unresolved:** label-variant rows not extended past 1987 because the
1988 labels were redesigned — 5075 MA 2 (Red/Green Label), 5112
Paris-Roubaix SSC (red label), 5113 (yellow label); the 1988-89
Paris-Roubaix SSC has no unlabelled row (insert one if a later source
needs it). 5097 Open 4 CD is linked to bike 100 "Virata" (1993), beyond its
1989 year_to — needs a 1990s catalogue. 2410 "870, SSC (31.8 clamp)" left
alone (likely later). 3403 hub / 1192 cassette "Mavic 571" probably the MRL
570's successor, not merged. 5114 "Mavic SSC" (1986, bare) still unplaced.

## Mavic Trade Catalogue 90/91 (1990) — disraeligears.co.uk, data_source id 121

Source: https://www.disraeligears.co.uk/site/mavic_trade_catalogue_9091.html
(46 `..._page_N_main_image.jpg` images: front cover, pp. 1-44, rear cover;
bound locally, PDF page N = catalogue page N-1). **English edition**, cover
"Trade Catalogue 90/91"; Road pp. 4-23, ATB pp. 26-33, technical pp. 34-44;
no group-composition pages. Dated year_from 1990 / year_to 1991. Disraeli
Gears: the 845 pictured is a prototype.

Near-total range turnover vs 88-89. New road: 305 headset, 351 bar, Kit 357,
610 **URD** (axles 110/114/116/119/123 replace 112-125), 631 crank (internal
ring star; track/double/triple builds), 646 LMS pedal, 440 brakes, 840/841
RDs, 821 indexed shifters, Mach 2 CD 2 (double eyelet). New ATB line:
Oxygen M6 CD, Energy M7 CD, MA 40 MB, M 231 / 231 CD / 261 / 261 CD (P.S.P.
cantilever profile), 530 hub (Paris-Gao-Dakar kit = 530 hubs + Oxygen M6 CD
rims), 315 headset, 616 RD BB, 637 crank, 875 front, 845 rear, 825
shifters; 330 seatpost first appears. Dropped (all already year_to 1989):
600 RD BB, 630/635/636, 645 LS, 410/430 brakes, 810-832 FDs, 861/871,
801/803/851/853, 580 CX/Piste, MRL 570, Mach 2 CD, MA 50 Cr.D, SSC n° 4,
310/311/312. Spec changes named per edition: Open 4 CD 395/360 -> 420/385 g;
Rando M4 up to 44 mm/500 g -> 44-55 mm/550 g; Bulb'Air 650 780 g -> 650 900
g + 600 830 g; 365 stem gains 130 mm; 315 128 g here vs 125 g "1991".

**Updated** (59 rows, source_ref -> 121):
- Retitled (old title kept here for matching): 3409 "Mavic Paris Gao Dakar"
  (hub) -> "Mavic 530 (Paris-Gao-Dakar)"; 2862 "Mavic 351 SSC" -> "Mavic
  351"; 2864 "Mavic 357 Extension Kit" -> "Mavic Kit 357"; 83 "Mavic 616"
  -> "Mavic 616 RD". All -> 1990-1991 (were 1980 or 1990 placeholders).
- year_from moved later to 1990 (called new here, or absent from all three
  complete 1984/86/88 catalogues): 1645 631 (was 1980), 3049 305, 3046 315,
  5817 / 5818 330 seat posts, 855 440 brake, 364 440 lever, 6087 821, 4340
  840 / 4341 841 / 4345 845 (were 1992-1992; year_to kept 1992), 3838 646
  LMS (was 1991), 5072 M 261 (was NULL).
- year_to capped: 85 610 RD 1990 -> 1989 (superseded by 610 URD, new row).
- year_to -> 1991: rims 5049, 5073, 5074, 8177, 5084, 5085, 5048, 5086,
  5097, 5105, 5109, 5093, 5092, 5069, 5052, 5067, 5066, 5057, 5082, 8150,
  8178, 8179, 5071; wheels 6971, 6972, 6973, 8181; hubs 3397, 8159, 3401;
  bars 2861, 2863; stems 6585, 6586; crank 1643; pedals 3837, 8180; FDs
  2407, 8187; shifters 8165, 6085.

**Inserted** (UUID source_id, source_ref 121; 1990-1991 unless noted):
rims Oxygen M6 CD (8188), Energy M7 CD (8189), MA 40 MB (8190), M 231
(8191), M 261 CD (8192), **Paris-Roubaix SSC (8193, 1988-1991, SSC)** — the
unlabelled row the 88-89 pass flagged missing; its 1988 start rests on the
88-89 catalogue; BB 610 URD (8194); FD 875 (8195).

**Deleted:** none.

**Left unresolved:** 5071 M 231 CD is the `'mavic 231'` override target and
is linked to three 1993 bikes (Grizzly, Super Grizzly, Nth FS) beyond its
1991 year_to — they may really be the plain M 231 (8191). 3402 "Mavic 531"
hub (1990) possibly a 530 successor, not merged. 4343 "870 (MTB)" RD
(1990-1994, "as listed in 1991") absent here. 2410 "870, SSC (31.8 clamp)",
1192 / 3403 "571" unchanged.
