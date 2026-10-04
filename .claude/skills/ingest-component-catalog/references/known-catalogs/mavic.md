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
