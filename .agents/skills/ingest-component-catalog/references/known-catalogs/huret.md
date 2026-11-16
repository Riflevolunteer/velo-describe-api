# Huret catalogs processed so far

## Imported dates and model codes corrected — 2026-11-16, user approved

User approved correcting the imported dates and adding the model codes from
the audit below. Applied **26 guarded component updates**, overlapping
**23 date corrections** and **11 retitles**. No components, sources or bike
specs were inserted/deleted; component IDs, VeloBase GUIDs, brand/category/group
ownership, source_ref **1**, weights and country text were preserved.

**Date representation:** for the audit's seventeen approximate-date rows
(1731, 2432, 2433, 2434, 2438, 2441, 2444, 2445, 4403, 4413, 4414, 4415,
4420, 6104, 6106, 6113, 6114), both exact bounds are now **NULL**. Their
descriptions retain the corresponding approximate date in the audit table
below, in the form `Approximate dating: mid-1980s; exact years unknown.`
This removes false precision without treating an approximate decade as an
exact availability interval.

For **2440, 2442, 4407, 4412, 4416, 4418**, the recorded start remains
**1989, 1985, 1984, 1987, 1996, 1990**, respectively; the duplicated end
year is now **NULL**. Descriptions state the known starting year and unknown
end. These are source/availability bounds, not newly established manufacture
endpoints. The 1988/1989 date-conflict flags on 4412 consequently disappear
because its end is unknown; the earlier ARIS bike-identity decision remains
a reviewed inference, not new confirmation of that exact generation's dates.
The approved 4417 1989–1990 fitment range was not changed.

| ID | Previous title | New title |
| --- | --- | --- |
| 2445 | Sachs Huret Rival Sport | Sachs Huret AV 62.2D, Rival Sport |
| 4403 | Sachs Huret New Success touring | Sachs Huret AR 47.1T, New Success Touring |
| 4409 | Sachs Huret Rival 7000 | Sachs Huret RD R7000, Rival 7000 |
| 4412 | Sachs Huret ARIS New Success 1st Gen. | Sachs Huret 47.2D, ARIS New Success (1st generation) |
| 4413 | Sachs Huret ARIS New Success 1st Gen. Touring | Sachs Huret AR 47.2T, ARIS New Success Touring (1st generation) |
| 4414 | Sachs Huret ARIS New Success 2nd Gen. | Sachs Huret RN500 / 54.01D, ARIS New Success (2nd generation) |
| 4415 | Sachs Huret ARIS New Success 3rd Gen. | Sachs Huret RNS00, ARIS New Success (3rd generation) |
| 4416 | Sachs Huret ARIS New Success 4th Gen. | Sachs Huret RNS50, ARIS New Success (4th generation) |
| 4420 | Sachs Huret Rival Sport | Sachs Huret Rival Sport, AR 41.3 D |
| 6108 | Sachs Huret Rival Aris Classic 3000 | Sachs Huret MA82.4/3E, Rival ARIS Classic 3000 |
| 6110 | Sachs Huret ARIS New Success (type 1) | Sachs Huret MA85.5/4E, ARIS New Success (type 1) |

Descriptions now lead with the coded title where retitled; every retitle
also regenerated `search_text` with `ebaySearchText(title, 'Sachs Huret')`.
The spelling check confirmed that the source pages themselves distinguish
[4414 RN500 / 54.01D](https://www.velobase.com/Pages/ViewComponent.aspx?ID=66BECFCD-9CF5-4302-B240-062F1DD6B822)
from
[4415 RNS00](https://velobase.com/Pages/ViewComponent.aspx?ID=A1D454BA-50D7-4F11-8DCC-EAD51F35ED6B).
They are recorded literally as specimen-page codes; no manufacturer crosswalk
or equivalence between those spellings was inferred. Other code evidence
is the model field on each row's unchanged VeloBase `source_id`, using
`https://velobase.com/ViewComponent.aspx?ID=<source_id>`; the prior audit
records the extracted codes and the 4403/6110 page URLs.

4420 keeps its existing name before the added code. Preflight found that
putting the code first made six generic `Huret Rival` CSV values uniquely
match early 4401 solely by removing a substring candidate. Keeping the name
prefix preserves the unresolved generation ambiguity and requires no new
matcher override. Final comparison across **94 local CSVs / 20,876 generated
spec INSERT mappings** found **zero changed mappings**. Generation ran in
memory against the same before/after component set; the existing
`bike-update.sql` was preserved and no generated catalogue SQL was loaded.

Validation: first load updated exactly **26 rows**, rerun updated **zero**.
Readback exactly matched every planned field; all **10,470 other component
rows** and **20,845 stored bike specs** were unchanged, including all **124
Sachs Huret component links**. Component total remains **10,496**. Shared
quality checks find **zero structural errors**; the only newly introduced
review flags are **23 incomplete-date flags**, deliberately exposing the
unknown bounds. Six Rival front date flags remain, as recorded below.
Post-change duplicate merge, near and parenthetical reports each found zero
candidates. Existing Huret Rival link and duplicate-classifier tests passed;
descriptions are at most **140 characters**. Documentation passed
`git diff --check`.

Restoration, only if deliberately requested later: the audit table retains
the seventeen old numeric date pairs; the six open-ended rows previously
repeated their current start in `year_to`. Restore old titles from the table
above. Old `search_text` equalled the old title on each retitled row except
6110, where it was `Sachs Huret ARIS New Success`. To restore descriptions,
remove the newly appended approximate-date / known-start sentence and its
added separator punctuation, then replace the leading new title with the old
title, preserving the original following
country/weight text. Apply restoration only against the exact corrected
values, with the original GUID/source/ownership guards. Temporary SQL,
baseline/readback snapshots and comparison helpers were removed after
validation. Modolo attribution, richer configuration descriptions, six-speed
lever compatibility and dated generation evidence remain separate follow-ups.

## Sachs Huret brand quality audit — 2026-11-16, read-only

Scope: **Sachs Huret, brand 171**, all categories. Huret 139 and Sachs 98
were checked for neighbouring identities and cross-brand bike links, not folded
into the component totals. No DB, CSV or matcher changes were made.

| Category | Components | Components used | Bike-spec links | VeloBase-only source |
| --- | ---: | ---: | ---: | ---: |
| Brakes | 1 | 0 | 0 | 1 |
| Cranksets | 1 | 0 | 0 | 1 |
| Front derailleurs | 19 | 8 | 45 | 10 |
| Rear derailleurs | 29 | 10 | 74 | 16 |
| Shifters | 20 | 2 | 5 | 9 |
| Total | 70 | 20 | 124 | 37 |

Used a consistent read-only snapshot with the shared quality-report checks:
**zero structural errors**, including dangling references, category/group
conflicts, reversed ranges and duplicate bike specs in scope. Every component
has a valid source and category/brand association. Eight components lack dates
(944, 4404–4406, 4409–4411, 6103); 34 descriptions are under 70 characters;
45 components have no group. These metadata gaps do not establish bad links.

All **37 VeloBase-only source pages** were retrieved successfully and their
model/date/system fields read. These remain specimen evidence; they are not
manufacturer production-date confirmation. Main findings and proposed work:

1. **Imported decade dates masquerade as exact years.** Seventeen rows have
   approximate source dates compressed into exact DB bounds:

   | IDs | Source date wording | Stored bounds |
   | --- | --- | --- |
   | 1731, 2432, 2445, 4420, 6113 | Late 1980's, open end | 1980–1980 |
   | 2433, 2438, 6106, 6114 | 1980's | 1980–1980 |
   | 2441, 4403 | Mid 1980's | 1980–1980 |
   | 2434 | 1990's, open end | 1990–1990 |
   | 2444 | Early 1990's, open end | 1990–1990 |
   | 4413 | 1990's | 1990–1990 |
   | 4414 | Early 1990's | 1990–1990 |
   | 4415 | Mid 1990's | 1990–1990 |
   | 6104 | 1970's–1980's | 1970–1980 |

   All seventeen have zero bike-spec links. Preserve the source's uncertainty
   when preparing corrections; do not substitute invented exact introduction
   years or assume a decade label establishes continuous production.
   Six more source pages give an explicit start with unknown end, while the
   DB repeats the start as the end: **2440** (1989), **2442** (1985), **4407**
   (1984), **4412** (1987), **4416** (1996), **4418** (1990).
   An attested year can be a conservative availability bound, but is not a
   discontinuation date. **4417** is a separate case: VeloBase says 1990's,
   but the approved 1989 Peugeot fitment remains positive evidence for its
   earlier start; do not undo that correction from the vague specimen label.

2. **Useful model codes missing from titles/descriptions.** Source fields give
   2445 **AV 62.2D**; 4403 **AR 47.1T**; 4409 **RD R7000**;
   4412 **47.2D**; 4413 **AR 47.2T**; 4414 **RN500 / 54.01D**;
   4415 **RNS00**; 4416 **RNS50**; 4420 **AR 41.3 D**;
   6108 **MA82.4/3E**; 6110 **MA85.5/4E**. Treat these as specimen-page
   transcriptions pending review, particularly the similar RN500/RNS00
   spellings. No renames, merges or new aliases have been applied.
   [4403 specimen](https://velobase.com/ViewComponent.aspx?ID=D8601937-0FD6-48D8-8DC4-CF98D64B2861)
   identifies a long-cage friction New Success, 36T maximum sprocket / 42T
   wrap, with approximate mid-1980s dating, contradicting the precise 1980
   reading. April 1986 manufacturer scan 3 explicitly offers a long-cage New
   Success, but does not print the touring code: it cannot independently
   establish AR 47.1T's exact production endpoints.

3. **Descriptions conceal important configurations.** The
   [944 specimen page](https://velobase.com/ViewComponent.aspx?ID=EB4FE66D-362B-4644-9009-2A94529CB64B)
   reports Modolo manufacture / Master SLK 90 identity. The
   [6110 specimen](https://velobase.com/ViewComponent.aspx?ID=46733377-2BA5-459B-B965-CDBB581772AC)
   is a seven-speed ARIS downtube braze-on shifter; 6108's page says eight-speed
   ARIS; 6113 describes indexed Rival Sport with selectable modes, whereas
   6114 is retro-friction. Preserve these differences. Both six-speed 1987
   bikes using 6110 need configuration evidence: **8849**, Raleigh Randonneur
   18 (ratchet wording; freewheel 8855), and **15103**, Peugeot Savoie
   (ARIS indexing; six-speed freewheel 15098). Their links are review
   candidates, not proven wrong: the source page alone does not establish
   whether the lever supports both spacings. The 1989 Savoie 17501 has a
   seven-speed freewheel. Existing rear/front ARIS-from-1987 decisions do not
   independently prove the exact lever configuration. The old note below
   suggesting a 6110/6111 duplicate review is obsolete: **6111 is absent**
   from the live DB; no new merge is required or inferred here.

4. **Eight live link/date flags, already known identity questions.** Six
   1988 front specs point to 8488 (ends 1987): **16411, 16583, 16603, 16623,
   16661, 16962**. Resolve 1086-00 versus AV 62.1 D from code/construction
   evidence before changing the date or repointing. Re-read the
   [April 1986 manufacturer scan 3](https://www.disraeligears.co.uk/site/00_main_images/sachs_kettenschaltung_fur_rennen_touristik_off-road_-_1986_scan_03_main_image.jpg):
   it identifies the Rival front as AV 62.1 D, but does not cross-reference
   1086-00. The other two flags are rear specs **16509** (1988) / **17500**
   (1989) on 4412 (1987 only); retain the approved November 15 ARIS decision
   while seeking a dated generation source. Rider double specs **15470,
   17763, 17782, 17858** and PXR 80 rear **16963** remain correctly NULL
   under the documented guards. No new supported link was identified.

5. **Duplicate and missing-model review.** Full Huret-family duplicate report:
   14 groups / 34 pairs, all classified configurations, generations or a
   reviewed variant; no automatic merge candidates. Near and parenthetical
   reports each return zero. This does not close manual 8488/8961/2442 or
   Rider specimen questions. Indexed 6113 and retro-friction 6114 remain
   distinct configurations. Two New Success crank specs (**15100, 17498**)
   and three freewheels (**15098, 17459, 17497**) remain unlinked. Adjacent
   Sachs crank 1730 is the later Campagnolo-made model, so its name alone is
   not a supported 1987/1989 match. The old TODO saying the 1987 New Success
   hub is unlinked was stale: **15096** and **17495** already link Sachs
   hub **3509**. That row's description is now the 1996 130mm/eight-speed
   configuration (source 357); an early-specimen/configuration check is still
   needed before treating those later dimensions as the 1987/1989 fitment.

The broader link search includes Huret-branded specs, links into brand 171
whose text omits the maker, and the newly loaded 1984 Motobecane catalogue.
Its unlinked Duopar, S PP, Challenger S. and Rival cases remain covered by
[the recorded link decisions](../../../ingest-bike-specs/references/link-decisions.md#1984-motobecane-loaded-2026-11-16).
Maker-only text, either/or cells, spoke protectors and dropout mentions were
not counted as missing named models. `/linkCoverage` was unavailable on
localhost; equivalent read-only snapshot queries were used rather than
starting the API. No generated/live mapping comparison was needed because
component records and matching rules were unchanged. Temporary audit output
and fetched copies were removed after recording these findings.

## Huret "Accessoires Cycles, Cyclomoteurs, Motos" — 1973 (disraeligears.co.uk, 28 scans)

- `data_source` 95, label "Huret Accessoires Cycles Cyclomoteurs Motos
  (1973)". Source:
  https://www.disraeligears.co.uk/site/huret_accessoires_cycles_cyclomoteurs_motos_-_1973.html
  (scan_01..28). French, "1973" on cover, Huret 60 av. Félix-Faure,
  Nanterre; stamped by UK agent Delite Accessories Ltd, Wickham Skeith,
  Suffolk. Exploded diagrams with reference numbers, capacities, some
  weights; no prices.
- Listed: Jubilee rear 2200 / 2252 / 2240 (133g) and long cage 2248 / 2253 /
  2254; Jubilee front 500 (80g); front 700; Allvit 1900 / 1900 D; Super
  Allvit 1999; Svelto 2000 / 2000 D and 2030 (small wheel); levers 1882 /
  1884 / 641, long 1826 / 1886 / 1887, Jubilee 1567, Stick-Shift 1885 /
  1888, stem levers 1512-1574, bar-end 2300 / 2301; out of scope: cable
  clips and guides, dropouts 230-235 / 902-905, chain guard 643, spoke
  protectors 996 / 998 / 999, wing nuts 892 / 895, chain tensioners 1112 /
  1121, speedometers 4100-4900 and drives 6000 / 6500, display boxes.
- All Huret rows (brand 139) were velobase. Retitled (old titles): 4303
  "Huret Jubilee (first version; shorter spring on parallelogram)" and 4304
  (black) -> codes 2200 / 2252 / 2240 added; 4307 "Huret Jubilee (long pulley
  cage)" -> 2248 / 2253 / 2254, NULL -> 1973; 2396 "Huret Jubilee (5 holes in
  outer cage plate)" -> Jubilee 500; 4292 "Huret Super Allvit" -> 1999; 4293
  "Huret Svelto (2nd version)" -> 2000 / 2000 D; 6077 "Huret Jubilee"
  (shifter) -> 1567 (manette double luxe); 6071 "Huret Allvit (short
  levers/standard model)" -> 1882 / 1884 / 641; 6062 "Huret Allvit / Luxe
  (long levers)" -> 1826 / 1886 / 1887. Descriptions on 2395, 2397 (ref.
  500), 4290 (1900 / 1900 D), 2385 (ref. 700). year_to -> 1973 on 4303,
  4304, 4290, 4292, 4293, 2385, 6077, 6071, 6062.
- New (4 rows, 1973): Svelto 2030; Stick-Shift 1885 / 1888; stem-mount
  levers 1512-1574; bar-end controls 2300 / 2301.
- Bike links (user decision): 1973 Raleigh "New Huret Jubilee", 1974
  Motobecane "HURET JUBILE", 1975 "HURET JUBILE, wide ratio" front
  derailleurs repointed 2395 (4-hole, 1977-80) -> 2396 (5-hole, 1972-76) on
  the rows' own dates; overrides now year-ranged (<=1976 2396, >=1977 2395).
- Left: 2394 "Huret Alvit" front (1961-1985, linked 1973 Raleigh; no Allvit
  front in this catalogue); 4305 / 4306 later Jubilee versions (1970); 4291
  Allvit Cable Saver; Challenger / Success rows (not in 1973). "ATOM ... with
  HURET spoke protector" freewheel values (spoke protector out of scope).

## Huret "Accessoires Cycles, Cyclomoteurs, Motos" — 1975 (disraeligears.co.uk, 27 images)

- `data_source` 96, label "Huret Accessoires Cycles Cyclomoteurs Motos
  (1975)". Source:
  https://www.disraeligears.co.uk/site/huret_accessoires_cycles_cyclomoteurs_motos_-_1975.html
  (front cover, inside front cover, page_1..24 = sheets H1-H24, rear cover).
  Huret et ses Fils, Nanterre, "member of Frexa", French / English, some
  speedometers stickered "Not available on U.S. market". Reference numbers
  and capacities, no prices or weights.
- Listed: rear Challenger 2400 / 2440 / 2448 / 2454 (new), Allvit 1900,
  Super Allvit 1999 (2.38 chain only), Svelto 2000 (now 13-28T) and 2030 (now
  13-26T); front Challenger 950 / 951 (new), Standard 900 / 901 (new codes);
  levers Competition 1733-1736 / 1707 (new), Standard 1898 / 1882, 1899 /
  1884 / 1879, 661 / 641 C / 1848 C, Challenger 1725-1782 down tube and stem
  (new), 80mm long 1747-1794 (new), bar-end 2300 / 2301; cable clips,
  dropouts, spoke protectors, wing nuts, chain tensioners, dropout kits,
  speedometers out of scope.
- Not in 1975 vs 1973 (not capped, regional / range split): whole Jubilee
  range (rear 2200 etc., front 500, lever 1567 — still on 1975 Motobecane
  bikes), 700 front, Stick-Shift 1885 / 1888, stem levers 1512-1574, long
  levers 1826 / 1886 / 1887.
- Retitled (old titles): 4273 "Huret Challenger" (RD) -> Challenger 2400 /
  2440 / 2448 / 2454; 2388 "Huret Challenger (hinged clamping band)" ->
  Challenger 950 / 951 (hinged clamping band); 6073 "Huret Challenger
  (1970's)" (shifter) -> Challenger levers 1725-1782, 1970 -> 1975-1975;
  6071 "Huret 1882 / 1884 / 641, Allvit & Svelto (standard levers)" -> +
  1898 / 1899 / 1879 / 661 / 1848 C. year_to 1973 -> 1975 on 4290 Allvit,
  4292 Super Allvit, 4293 Svelto 2000, 7940 Svelto 2030, 6071, 7943 bar-end.
- New (3 rows, 1975): Standard 900 / 901 front, Competition levers 1733-1736
  / 1707, 80mm long levers 1747-1794.
- Bike links unchanged; added override 'huret challenger stem shifter' ->
  4273 in Rear Derailleurs (the retitle had stopped the name match for 1975
  Motobecane Nomade). Left: velobase Challenger variants 2377, 4298, 6064,
  4300, 4289.


## Huret "Accessoires Cycles, Cyclomoteurs, Motos" — 1976 (disraeligears.co.uk, 40 images)

- `data_source` 118, label "Huret Accessoires Cycles Cyclomoteurs Motos
  (1976)". Source:
  https://www.disraeligears.co.uk/site/huret_accessoires_cycles_cyclomoteurs_motos_-_1976.html
  (front cover, inside front cover, page_1..36 = sheets H1-H36, inside rear
  cover gear charts, rear cover). Huret et ses Fils, Nanterre, "member of
  Frexa", French / English, weights in g and oz, no prices.
- New vs 1975: Success rear 2460 / 2470 and front 975; Duopar 2600 / 2640 and
  long cage 2648 / 2654; Allvit Safety 2546 / 2549; Jubilee front 530 (28.6mm);
  Ratchet levers (down tube 1465-1468, stem 1416 / 1471 / 1472); Challenger
  Click-In (1349-1354, stem 1363 / 1368 / 1370); 80mm stem levers 1239 / 1240 /
  1245; 80mm Click-In (1375-1380, stem 1389 / 1394 / 1396); Luxe levers
  1337-1344. Jubilee range is back (absent 1975): rear 2200 family now 136g
  (133g in 1973), long cage 145g, front 500.
- Renumbered: Allvit 1900 -> 2500 / 2540, Super Allvit 1999 -> 2548 / 2554,
  Svelto 2000 -> 2040 / 2072, Svelto small-wheel 2030 -> 2065; front
  "Standard" 900 / 901 is now "Club"; Competition levers 1733-1736 / 1707 now
  "Jubilee / Success". Dropped: Challenger long cage 2448 / 2454, 1975
  standard lever numbers (1898 / 1882 / 1899 / 1884 / 1879 / 661 / 641 C /
  1848 C).
- Retitled (old titles): 4299 "Huret Success" -> Success 2460 / 2470; 4292
  "Huret Super Allvit 1999" -> + 2548 / 2554; 4302 "Huret Duopar (titanium)"
  -> Duopar 2600 / 2640 (titanium), NULL -> 1976; 4293 "Huret Svelto 2000 /
  2000 D (2nd version)" -> + 2040 / 2072; 7940 "Huret Svelto 2030" -> + 2065;
  2396 "Huret Jubilee 500 (5 holes ...)" -> Jubilee 500 / 530 (5 holes ...);
  2389 "Huret Success (solid clamping band)" -> Success 975 (solid clamping
  band), year_from 1977 -> 1976; 2378 "Huret Club" -> Club 900 / 901
  (velobase 133g Spec dropped, catalogue 163g); 7945 "Huret Competition
  levers 1733-1736 / 1707" -> Jubilee / Success levers 1733-1736 / 1707; 6066
  "Huret Ratchet" -> Ratchet levers 1465-1468 / 1416 / 1471 / 1472.
- year_to -> 1976: 4303, 4307, 4290 Allvit (title kept for the bike-name
  match), 4292, 4293, 7940, 7945, 6073 Challenger levers, 7946 80mm levers,
  7943 bar-end. Description only: 4273 Challenger (2448 / 2454 not in 1976).
- New (5 rows, 1976): 8172 Allvit Safety 2546 / 2549, 8173 Duopar 2648 /
  2654 (titanium, long cage), 8174 Luxe levers 1337-1344, 8175 Challenger
  Click-In levers 1349-1370, 8176 80mm long Click-In levers 1375-1396.
- Deleted (merged): 7944 "Huret Standard 900 / 901" (Front Derailleurs,
  1975-1975, our 1975 catalogue row, `37ddc8a5-be86-11f1-a2df-02fea3763e8d`)
  into 2378 Club 900 / 901 — same refs. No links / overrides.
- Bike links unchanged (regenerated all catalogues: 901 links, identical).
  Front Jubilee overrides (<=1976 2396, >=1977 2395) still agree with row
  years.
- Left: 6077 Jubilee lever 1567 and 4304 Jubilee black (not in 1976); 6071
  1975 standard levers (Luxe 1337-1344 inserted separately, catalogue
  doesn't say it's the same lever); velobase Allvit generations 4269-4272,
  Challenger II / 3rd-version rows, Success-Duopar CPSC fronts (1978+).

## Huret catalogue — July 1981 (disraeligears.co.uk, 10 scans), `data_source` 313

- Source: https://www.disraeligears.co.uk/site/huret_-_catalogue_july_1981.html (images
  `huret_-_catalogue_1981_scan_1..10_main_image.jpg`; the page also shows thumbnails of other documents).
  French text; no date on the cover (Huret, 60 avenue Felix Faure, Nanterre, "member of Frexa"), "Juillet 81"
  printed sideways in the p10 margin. Pages: 1 cover, 2-4 derailleurs and levers, 5 accessories, 6
  speedometers, 7 "Serie Course" (brakes, levers, freewheels), 8 chainset / BB / pedals / seatpost / hubs,
  9 Commander preselection, 10 Sachs-Huret Commander. Transcription:
  scratchpad `dg/huret-1981.csv` (Sonnet subagent, 66 rows). Skipped: speedometers, collars, clips.
- Marked new: Super Success 2470 S, Duopar alloy / steel 2690-01, chainset 1010, BB axle, hubs 472 / 473,
  Commander system. Content otherwise close to the c. 1980 English catalogue (`data_source` 188).
- Merged: 8490 "Sachs Huret Club 1000-01" (1984, `data_source` 156, no links / overrides) into 2379, retitled
  "Huret Club II" -> "Huret Club II 1000-01 / 1001-01", 1978-1980 -> 1978-1987 (same refs and 143g in 1981
  and 1984; 1986-87 Peugeot print "Club 2"). The S.P.P. version is "Club 1000-01 CPSC", 158g (see below).
- year_to -> 1981: 4298 Challenger II rear (2440 / 2400), 2380 Challenger II front (1050-00), 6064
  Challenger II levers (548-01 / 546-01), 6066 Ratchet levers (1466 / 1468); all were 1980.
- year_from 1984 -> 1981: 8491 Jubilee / Success / Duopar levers 1164 / 2390 / 2380, 8484 Commander 12900,
  8495 Commander 13031, 8498 Sachs Orbit 12961 2-speed hub.
- Added (1981-1981): 9991 Allvit III 2700 / 2700 H / 2740, 9992 Allvit Safety III 2746 / 2746 H / 2749,
  9993 Super Allvit III 2748 / 2748 H / 2754, 9994 Luxe levers 1136-01 / 1134-01, 9995 stem levers 1158-01,
  9996 freewheel 685 / 686 (steel sprockets), 9997 685 D / 686 D (Dural), 9998 hubs 472 / 473, 9999
  chainset 1010, 10000 pedals 490, 10001 side-pull 342, 10002 centre-pull 343, 10003 brake levers 323
  (category_brand rows added for Huret in Freewheels, Hubs, Pedals, Brake Levers).
- Not added: Commander double stem lever 12970 (8494 is the 1984 double lever 13000; may be a renumber),
  chain 238 (12962), BB axle and seatpost (no ref printed).
- Bike links made with this pass: 1983 / 1986-87 Peugeot "Huret Club" / "Club 2" x7 -> 2379; 1984 Raleigh
  "Club brazed-on" x4 -> 8489 (Club S is its braze-on version); 1987 Raleigh "Huret Rival" front x2 -> 8488.
- Settled 2026-11-01: 2387 "Club CPSC" (1977-78 velobase stub) merged into 8796 "Huret Eco (front)" (the 1981
  "Club 1000-01 CPSC", 158g; title kept, year_from -> 1977). 4298 "Challenger II" is not 4273: same 2400 / 2440 refs
  but the 180g redesign (4273 is 255g, linked 1974-76), so a generation; year_from 1970 -> 1978. No Rival, Eco S front or Luxe front in this catalogue.

## Huret "new 82" leaflet — November 1981 (disraeligears.co.uk, 6 scans), `data_source` 314

- Label "Huret new 82 leaflet (November 1981)". Source:
  https://www.disraeligears.co.uk/site/huret_-_new_82.html (`00_main_images/huret_-_new_82_scan_1..6_main_image.jpg`,
  1560 x 2220). French / English; every sheet badged "new 82", "NOV. 81" in the margin of sheets 2, 5, 6. Sheets: 1-2
  Rival set, 3 Eco S set, 4 Eco Mark II set, 5 Sensosaver 3 and Duopar Eco, 6 Eco set. Weights and capacities, no
  prices. Read directly (6 pages, no subagents). Out of scope: braze-on fittings 3014 (oval) / 3034 (round).
- New for 1982 per the leaflet: Rival group (rear 2850-00, fronts 1086-00 / Rival S 1056-00 / braze-on 3030-01,
  lever), Eco S 2830-00, Club AS 1005-01 / 1009-01 (ASM without casing stop), Club S 3040-01 braze-on, Eco TD
  2820-01, Luxe AS levers (clip, or central boss 3120-00 S / 3130-00 S), Sensosaver 3 (rear 2800-01, lever 1169-00).
  Luxe A replaces the Luxe lever (9994 Luxe 1136-01 / 1134-01 stays 1981). Disraeli's "Rival 2850-00 1st style 1981?"
  is a late-1981 release for 1982. The Eco S set is Eco S rear + Club AS front + Luxe AS levers: there is no Eco S front.
- year_from 1984 -> 1982 (rows first dated by June 1984): 8485 Eco S, 8488 Rival 1086-00, 8489 Club AS, 8493 Rival
  lever 3252-00, 6112 Luxe AS, 8496 Luxe A.
- year_from moved later (velobase buckets; revert values): 4401 Rival 2850-00 1980 -> 1982 ("nouveau", absent from c.
  1980 and July 1981); 4276 Duopar Eco 1970 -> 1980 (absent from the full 1976 catalogue, first in c. 1980; year_to 1980
  -> 1982); 4301 Huret Eco 1960 -> 1980 (absent from 1973 / 1975 / 1976, first in c. 1980).
- Retitled: 8489 "Sachs Huret Club AS 1005-01" -> "Sachs Huret Club AS 1005-01 / 1009-01" (search_text too), year_to
  1984 -> 1987 for the 1986-87 Peugeot Corbier Eco S fronts now linked to it. Descriptions: 8488 (braze-on and Rival S
  now point to their own rows), 6112 (central-boss refs), 2379 ("sold as plain Club from 1982").
- Added (brand Huret 139, group NULL): 10004 Eco TD 2820-01 (1982), 10005 Eco Sensosaver 2800-01 (1982), 10006 Rival S
  1056-00 (1982-84), 10007 Rival braze-on 3030-01 (1982-84), 10008 Club S braze-on 3040-01 (1982-84), 10009 Sensosaver 3
  lever 1169-00 (1982). The 1982-84 ones end 1984 because the June 1984 catalogue names them inside 8488 / 8489.
- Bike links: 1984 Raleigh "Huret Club brazed-on" x4 [6177 6200 6223 6245] 8489 -> 10008; Eco S fronts -> 8489 Club AS:
  1984 Raleigh "Huret ECO-S" Medale / Stratos [6470 6427] (were unlinked), 1986 Peugeot Corbier "Eco S, satin finish"
  [14899 14919] and 1987 "ECO 5" [15855 15873] (were 8796). Front overrides updated: 'huret club brazed on' 10008,
  'huret eco s' / 'huret eco s satin finish' / 'huret eco 5' 8489.
- Left: 12 "Huret Rival" rears (1985-87) on 4279, a bare velobase row with no years duplicating 4401 / 8957 (merge
  later); 4301 / 4399 Eco duplicate pair (the leaflet's 235 g Eco matches both); front capacity "26T max difference"
  here vs 16T in the 1984 rows (different measure, left).

## Huret "Nouveau - New" leaflet — September 1982 (disraeligears.co.uk, 8 scans), read 2026-11-01, nothing loaded

- Source: https://www.disraeligears.co.uk/site/huret_nouveau_-_new_-_september_1982.html
  (`00_main_images/huret_nouveau_-_new_1982_scan_1..8_main_image.jpg`, 1560 x 2251). French / English, "Groupe Sachs",
  "Septembre 1982" printed in the p8 margin. Sheets: 1-2 Rival set, 3 Eco S set, 4 Eco Mark II set (Eco TD, Club S
  braze-on, Luxe AS central boss), 5 Commander-Orbit 12-speed (rear, double pre-selection lever, Orbit hub), 6
  Commander 5/6-speed (rear, single stem lever), 7 Sensosaver 3 and Duopar Eco 2690-01 C, 8 Eco set (Eco rear, Club
  1000-01 / 1001-01, Luxe A).
- A reprint of the November 1981 "new 82" leaflet (314) plus the Commander sheets (as July 1981, 313). Every ref,
  weight and capacity matches rows already loaded from 313 / 314, and every row already reaches 1982, so there were no
  changes and no `data_source` row. The Commander double lever has no ref (12970 vs 8494's 13000 is still open); the
  235 g Eco rear again matches both 4301 and 4399. Do not re-read.

## Huret "Nouveau - New" leaflet — June 1983 (disraeligears.co.uk, 8 scans), `data_source` 326

- Label "Huret Nouveau - New leaflet (June 1983)". Source:
  https://www.disraeligears.co.uk/site/huret_nouveau_-_new_-_june_1983.html
  (`00_main_images/huret_nouveau_-_new_1983_scan_1..8_main_image.jpg`, 1560 x 2251). "Juin 1983" in the p8 margin.
- The September 1982 leaflet word for word (same eight sheets, refs, weights and capacities), with the "Groupe Sachs"
  badge and the Huret logo on the parts replaced by "SACHS HURET". Read directly, no subagents.
- year_to 1982 -> 1983 (still listed, source_ref -> 326): 10004 Eco TD 2820-01, 10005 Eco Sensosaver 2800-01, 10009
  Sensosaver 3 lever 1169-00, 4276 Duopar Eco (2690-01 C). No links or overrides on any of them. Every other row on the
  sheets already reaches 1983 or later. No inserts, no deletes; the Commander double lever still has no ref, and the
  235 g Eco rear again matches both 4301 and 4399.

## Sachs-Huret "Derailleurs - Speedometers" catalogue — September 1983 (disraeligears.co.uk, 16 scans), `data_source` 327

- Label "Sachs-Huret Derailleurs - Speedometers catalogue (September 1983)". Source:
  https://www.disraeligears.co.uk/site/huret_derailleurs_-_speedometers_-_september_1983.html
  (`00_main_images/huret_derailleurs_-_speedometers_1983_scan_1..16_main_image.jpg`, 1560 x 2234). French / English,
  Etablissements Huret et ses Fils, Nanterre, parts badged SACHS HURET; "SEPTEMBRE 1983" in the p16 margin. Transcribed
  by one Sonnet subagent (scratchpad `dg2/huret-sept1983.json`, 31 items); p10 read by hand.
- Pages: 1 cover, 2 Jubilee, 3 Success, 4 Jubilee long cage + 530 SPP, 5 Duopar 2648, 6 Hi-Stepper ATB (Duopar Eco
  2690-00 H / GC, front 3080-00 S, levers 3300 / 3303), 7 Pilot (rear 2900-00 H, fronts 3060-00 / 3080-00, lever 3416 /
  3416 R), 8 Rival, 9 Commander-Orbit (rear, double lever 13000, Orbit 12961), 10 Commander 5/6, 11 Torpedo 2 x 3 (Eco
  2490-01, Torpedo S H 3111, double lever, no ref), 12 Eco S, 13 Eco; out of scope 14-15 speedometers, 16 usage chart.
- The same range as the June 1984 catalogue (156), nine months earlier. Pilot and Hi-Stepper are marked NEW here.
- year_from 1984 -> 1983 (old value 1984, from 156; source_ref -> 327): 4408 Pilot 2900-00 H, 8487 Pilot 3060-00, 2436
  Pilot 3080-00 (triple), 8492 Pilot 3416 / 3416 R, 2443 Hi-Stepper 3080-00 S, 6067 Hi-Stepper 3300 / 3303, 8486
  Jubilee 530 SPP, 8494 Commander 13000, 8499 Torpedo S, 8497 Torpedo 2 x 3 double lever. No links or overrides.
- Commander refs conflict, left: the p10 captions give rear 13031 / 13041 and single lever 12913 / 12900, the reverse of
  8484 (rear 12913 / 12900) / 8495 (lever 13031 / 13041) as set from 156; this catalogue's own p9 captions the rear
  12900, and disraeligears' derailleur pages are "Commander 12913" / "12900", so p10 is taken as swapped captions.
  p10 also names the double indexed lever for 10 / 12 speeds "12970 S or 13062" (already in 8495's description).
- Not added: Pilot lever "3413 S" (caption only, no text), Pilot long cage (no ref), Torpedo 2 x 3 lever ref (none
  printed). No inserts or deletes; 4276 Duopar Eco 2690-01 C is absent (the 2690-00 H / GC ATB version is listed), so
  its 1983 year_to (from 326) stands.

## Sachs-Huret catalogue — June 1984 (labibleduvelocataloguessachshuret.blogspot.com, 16 pages)

- `data_source` 156, label "Sachs-Huret catalogue (June 1984)". Source:
  https://labibleduvelocataloguessachshuret.blogspot.com/p/sachs-huret-1984.html
  (16 blogger images, 760px at /s1600/ — that's the original size, still
  legible). German / English, "JUNE 1984" printed bottom-left of the rear
  cover (usage chart), Huret et ses Fils, Nanterre, with Fichtel & Sachs AG,
  Schweinfurt for DE / AT / NL / Scandinavia. Weights and capacities, no
  prices. Pp. 2-13 derailleur groups, 14-15 speedometers (out of scope).
- Brands: Huret (139) holds the 1970s rows, Sachs Huret (171) the 1980s
  velobase rows, Sachs (98) the hubs. Matched rows kept their brand; new
  1984 rows went to Sachs Huret, Sachs for Orbit / Torpedo.
- Marked NEW in 1984: Pilot rear 2900-00 H, front 3060-00 and levers 3416,
  Hi-Stepper front 3080-00 S and thumb shifters 3300 / 3303, electronic
  computer. Velobase had Pilot rear (4408) and Pilot triple front (2436) at
  1980-1980 — decade placeholders; year_from moved *later* to 1984 on the
  NEW label (user-approved, an exception to "never move year_from").
- Gone vs 1976 (not capped, eight-year gap): Allvit, Super Allvit, Svelto,
  Challenger, Success 2460, Duopar 2600 / 2640, Jubilee 2252 / 2240 / 2254,
  Jubilee front 500, Ratchet / Click-In / 80mm levers.
- Retitled (old titles): 4419 "Sachs Huret Jubilee" -> Jubilee 2200 (taken
  as the 1984 drilled-cage Jubilee; 4303 "first version" keeps 1972-76 and
  its 1973-75 links); 4281 "Huret Super Success" -> + 2470 S; 4400 "Sachs
  Huret DuoPar Eco" -> Duopar Eco 2690-00 H / GC; 4408 "Sachs Huret Pilot"
  -> Pilot 2900-00 H; 4401 "Sachs Huret Rival" -> Rival 2850-00; 4399 "Sachs
  Huret Eco" -> Eco 2490-01 / 2490-01 H; 2395 "Huret Jubilee (4 holes in
  outer cage plate)" -> Jubilee 530 (4 holes ...); 2390 "Huret Success CPSC
  (later version; solid band)" -> Success 975 CPSC (...); 2443 "Sachs Huret
  Hi Stepper" -> Hi-Stepper 3080-00 S; 2436 "Sachs Huret Pilot (triple)" ->
  Pilot 3080-00 (triple); 6112 "Sachs Huret Luxe AS Double Shifters" -> Luxe
  AS 3152-00 S; 6067 "Huret Ratcheting Thumb Shifters" -> Hi-Stepper 3300 /
  3303 thumb shifter (judgment call: bare row taken as the Hi-Stepper).
- year_to -> 1984: 4419, 4307 Jubilee long cage (now 155g / 40T vs 145g in
  1976, both named), 4299 Success, 8173 Duopar 2648 (H 34T / GC 38T,
  titanium or steel bodies; 1976 spec named inline), 4400, 4401, 2395 (agrees
  with the >=1977 Jubilee front override), 2390. 2443, 6067 NULL ->
  1984-1984. Descriptions only: 4281, 4399, 6112.
- New (16 rows, 1984-1984): rear 8484 Commander 12913 / 12900, 8485 Eco S
  2830-00 / H; front 8486 Jubilee 530 SPP, 8487 Pilot 3060-00, 8488 Rival
  1086-00, 8489 Club AS 1005-01, 8490 Club 1000-01; shifters 8491 Jubilee
  1164-00 / 2390-00 / 2380-00, 8492 Pilot 3416 / 3416 R, 8493 Rival 3252-00,
  8494 Commander 13000, 8495 Commander 13031 / 13041, 8496 Luxe A 3152 B,
  8497 Sachs Torpedo 2 x 3 double lever; geared hubs 8498 Sachs Orbit
  12961, 8499 Sachs Torpedo S.
- Bike links (generator): 1984 Raleigh "Huret ECO-S" rears (Pulsar 10, Team
  Cadet 10, Stratos 10, Medale 5 & 10) had matched plain Eco 4301; the new
  8485 made the name ambiguous, so added override 'huret eco s' -> 8485.
  The generator only fills `component_id IS NULL`, so the four existing 4301
  links were repointed with a one-off guarded UPDATE (value_text 'Huret
  ECO-S', Rear Derailleur, component_id 4301). "Huret Club AS" fronts
  (Classic 15, Weekender 15) now name-match 8489 (loaded via bike-update.sql).
  Stratos 10 / Medale 5 & 10 list "Huret ECO-S" as the *front* derailleur
  (a Raleigh catalogue error) — left unlinked.
- Merged 2026-11-02 (VeloBase photos / model fields; a Huret badge alone does not split a row): 4398 -> 8173, 4279 -> 4401 (year_to 1988), 4301 -> 4399, 4289 -> 4300 (4680 / 2481 are date stamps). Previously left as possible duplicates: 4398 Sachs Huret DuoPar
  (titanium) vs 8173 / 4302; 4279 Huret Rival (no years) vs 4401; 4301 Huret
  Eco and 4391 "Sachs (Eco?)" vs 4399; velobase Sachs Huret Rival / Rival
  Sport / AV 62.10D fronts vs 8488. "Huret Club brazed-on" (1984 Raleigh) is
  probably Club S (braze-on Club AS, 8489) — not linked.

## Huret catalogue, English edition (c. 1980, undated) — cyclespeugeot.web.fc2.com "Part 98: Huret in 1980's", data_source id 188

- Source: http://cyclespeugeot.web.fc2.com/reminiscence/huret1980s.html;
  `catalog/huret1980s/huret_198x01.jpg` to `_10.jpg` (cover 360x507, nine
  pages 720x1013). 60 avenue Felix Faure, Nanterre; back cover "member of
  Frexa". No date printed; the page author guesses 1980, so every year bound
  here is 1980 (single-year bound, not a start date). Export edition, ounces
  and grams. Page map: p. 2-3 rear derailleurs, p. 3-4 front derailleurs and
  levers, p. 5 adjustable stop plate and Sensomatic 3, p. 6 speedometers,
  p. 7 accessories (fork ends 240 / 241 / 244 / 245), p. 8 road racing
  components (brakes 342 / 343, lever 323, freewheels 685 / 686, Multito),
  p. 9 chainwheels, BB axle, seat post, road pedal, p. 10 hubs, triple
  chainwheel.
- Range: rear Jubilee 2200 (148g), Success 2470 (175g, titanium), Super
  Success 2470 S, Duopar titanium 2648 / 2654 (254g), Duopar / ECO 2690-01
  (331g), Allvit III 2700 (296g), Allvit Safety III, Super Allvit III 2748
  (312g), Challenger II 2400 / 2440 (180g), Eco 2490-01 (239g); front Jubilee
  530 (80g), Success / Duopar 975 CPSC (132g, S.P.P. System, "NEW"),
  Challenger II 1050-00 (120g) and CPSC version (132g), Eco 1000-01 / 1001-01
  CPSC (158g, S.P.P.), Club II 1000-01 / 1001-01 (143g); levers Jubilee /
  Success / Duopar 1164-00 (80g), Challenger II 548-01 / 546-01 (99g), Ratchet
  1466 / 1468 (148g), Luxe 1136-01 / 1134-01 (128g), stem lever 1158-01,
  Sensomatic 3 (positive selection, with the Eco rear for 24T maximum).
- Diff on 2026-10-17: Huret (brand 139) and Sachs Huret (171) already held
  about 165 rows from 1973 / 1975 / 1976 / June 1984 catalogues. The gap that
  motivated the pass: no plain Eco front derailleur, so the six bike specs
  "Huret Eco" (Front Derailleur) were unlinked.
- Inserted (1980-1980, UUID source_id, group_id NULL): 8796 "Huret Eco
  (front)" (Front Derailleurs; search_text "Huret Eco").
- Updated, source_ref -> 188: 2379 Club II front year_to 1978 -> 1980 and
  description (143g, 1000-01 / 1001-01); 2380 Challenger II front (description,
  ref 1050-00, S.P.P. 132g); 4301 Huret Eco rear (description; measured 242g
  kept); 4298 Challenger II rear (description, 180g, 2400 / 2440); 6064
  Challenger II lever (description: it is a shifter, 99g with clip, 548-01 /
  546-01); 4276 Duopar Eco year_to 1970 -> 1980 and description (331g, 2690-01).
- Not inserted: the Huret chainwheels 1010 / 1006, BB axle 622, hubs 472 / 473 /
  477 / 478, road pedal 490, seat post, brakes 342 / 343 and lever 323 (marked
  "NEW" in this printing), since no bike spec names them; Allvit III / Safety
  III / Super Allvit III rears (covered by 4290 / 4292 / 8172 under other
  names, not checked line by line).
- Does not explain "Huret Club brazed-on" (4 bikes) or "Huret ECO-S" front (2):
  neither is named here (probably Club AS 8489 and a later Eco S).
- Bike links: loading the row does not link existing specs; the six "Huret Eco"
  front derailleur specs pick up 8796 when the bike generator is re-run for those
  catalogues (not done; the removed non-road models must be stripped from the
  CSVs first, see the `ingest-bike-specs` scope check).
- Out of scope: speedometers (Universo, Multito cyclometer), fork ends, cable
  stops and clips, driving gears, wing nuts, spoke protector 996.
- Second copy (checked 2026-11-01): disraeligears.co.uk "Huret - catalogue 1980?"
  (https://www.disraeligears.co.uk/site/huret_-_catalogue_1980.html, `00_main_images/huret_-_catalogue_scan_1..10_main_image.jpg`,
  1560 x 2200) is this same English catalogue at twice the resolution: p2 rears / fronts and the p10 hubs 472 / 473 / 477 /
  478, triple 1006 and "member of Frexa" back cover match. Nothing loaded, no data_source row; use it to re-read any
  small print here. Disraeli also dates it "1980?".

## Sachs Kettenschaltungen für Rennen, Touristik, Off-road — April 1986 (disraeligears.co.uk, 4 scans)

- `data_source` label "Sachs derailleur catalogue (April 1986)". Source:
  https://www.disraeligears.co.uk/site/sachs_kettenschaltung_fur_rennen_touristik_off-road_-_1986.html
  (`00_main_images/..._scan_0N_main_image.jpg`, 1560 x 2215). German,
  Fichtel & Sachs, "183.01 Printed in Germany 0486 200"; cover branded
  Sachs, every derailleur Sachs-Huret. A four-page flyer: cover (New Success
  photo), Jubilee, New Success / Rival / Pilot, Rider / Duopar. Disraeli
  notes the photos lack the spoke protectors most 1986 derailleurs had, so
  the pictured parts may be 1985. New part codes: rears AR n.1 D / T, fronts
  AV, shifters MA (no DB row carried them, so every match is by spec and
  name, not part number).
- Adjusted (source_ref -> the new source): 4419 Jubilee 2200 -> "Sachs Huret
  Jubilee 2200 / AR 44.1 D", 1980-84 -> 1980-86 (old title "Sachs Huret
  Jubilee 2200"; identical 148g / 28T / 31T spec to the 1984 catalogue);
  4402 New Success -> "Sachs Huret AR 47.1 D, New Success", 1985 -> 1985-86,
  description rewritten (old title "Sachs Huret New Success"); 4408 Pilot
  2900-00 H 1984 -> 1984-86; 2395 Huret Jubilee 530 front and 8491 Jubilee
  levers 1984 -> 1986 with the AV 66.1 D / MA 85.1 E codes noted (judgment:
  the 1986 Jubilee front shows the Huret script and a 4-hole cage; not proven
  by number).
- Added (all 1986, brand Sachs Huret 171, group NULL, like the 1984 rows):
  rears 8957 AR 41.1 D Rival (28T capacity, 36T max freewheel, unlike 4401
  Rival 2850-00's 30T), 8958 AR 46.1 T Rider, 8959 AR 40.1 T Duopar; fronts
  8960 AV 66.3 D New Success, 8961 AV 62.1 D Rival, 8962 AV 62.1 T Rider /
  Duopar (triple); shifters 8963 MA 85.2 E New Success, 8964 MA 82.2 C Rival,
  8965 MA 86.1 G Rider, 8966 MA 86.1 E Duopar. No weights in the source.
- Unresolved: the undated velobase "Rider (type 1 / type 2)" rows (4410 /
  4411, front 2437) may be the same part as 8958; the Duopar (8173 / 4400 /
  4398) likewise; 4403 "New Success touring" (1980, velobase) is probably a
  misdated long-cage New Success but this source cannot correct it; the
  Pilot front 8487 / 2436 and levers 8492 were not mentioned and keep 1984.
  Historical duplicate note: 6110 and 6111 ("ARIS New Success (type 1)",
  84 g spec vs 70 g) looked alike then. Superseded by the 2026-11-16 live
  check: 6111 no longer exists; there is no current pair to merge.
- Bike side: this printing says plain "New Success" (no ARIS). The 1987
  Raleigh Randonneur 18 "Huret New Success" is linked to ARIS rows (4412 /
  2439 / 6110, dated 1987+); 4402 now ends 1986, so 1987 stays on the ARIS
  rows (the only 1987-dated ones). Revisit if a 1987 Sachs-Huret catalogue
  shows which style Raleigh fitted.

## Sachs-Huret 1985 — not retrievable (checked 2026-10-20)

- https://labibleduvelocataloguessachshuret.blogspot.com/p/sachs-huret-1975.html
  is the 1985 catalogue (the page's own note: the tab is labelled 1985, the
  URL says 1975 by mistake). 10 images, but they are Blogger proxy images
  (`blogger_img_proxy`) of scans hosted on bibibike.forumserv.com
  (`/image/110/.../sheet-NN-*.jpg.htm`). Today the proxy URLs return 404, the
  forum is gone (xooit "forum inexistant"), and the Wayback Machine has no
  copy of those image URLs (it rate-limited further probing). Nothing was
  ingested. If a copy turns up elsewhere (retrobike, ebykr, disraeligears),
  it would date the pre-ARIS New Success rows (4402 / 4403) but not the 1987
  ARIS ones.



## Mel Pinto Imports parts catalog, 1970 to 1975 (pp. 19-29), `data_source` 272

See the full entry in [suntour.md](suntour.md). Huret rows unchanged except
the Luxe rear derailleurs 4295 / 4296 / 4297 (descriptions: refs 2100 T /
2100 ST, cages 2101 / 2101-C). Huret 2150 twin levers have no row.

## Rival 2850-00 / AR 41.1 D generation review — 2026-11-08

User approved the reviewed correction plan. **Keep 4401 and 8957 separate**;
added `[4401, 8957]` to `REVIEWED_NOT_DUPLICATES`. This settles the earlier
question of whether the two catalogue codes were merely a renumbering.

Manufacturer sources re-read during the 2026-11-07 investigation:

- Huret new 82, scan 1, printed November 1981 (314): 2850-00 early body,
  limit screws above the outer plate, Huret badge, 250g, 30T max sprocket.
  https://www.disraeligears.co.uk/site/huret_-_new_82_scan_1.html
- Huret Derailleurs - Speedometers, September 1983, p. 8 (327): same
  early 2850-00 body, Sachs-Huret badge, 250g, 30T max sprocket and 28T
  total capacity. Badge alone still does not split the early model.
  https://www.disraeligears.co.uk/site/00_main_images/huret_derailleurs_-_speedometers_1983_scan_8_main_image.jpg
- Sachs April 1986, scan 3 (225): AR 41.1 D revised body with limit screws
  below the outer plate, 36T max sprocket, 28T capacity, steel/light alloy;
  long-cage version offered, MA 82.2 C levers and AV 62.1 D front.
  https://www.disraeligears.co.uk/site/00_main_images/sachs_kettenschaltung_fur_rennen_touristik_off-road_-_1986_scan_03_main_image.jpg

The original VeloBase reference attached to 4401 (`3327013B-0FD9-4754-A0A2-47738DB02F06`)
says model 41/2 and 246g. Its photos show the later lower-screw body, including
a rear view with an integrated spoke protector. This reference was incorrectly
mixed with early-model catalogue specifications during prior enrichment.
Both DB rows have image NULL, so no stored image needed changing. The old
source_id remains a historical crawl/idempotency key; its photographs must
not be treated as evidence for the early catalogue model. Compared original
specimen photographs of 2850-00 and 41.1 D with/without the spoke protector;
no additional row was justified by badge or protector alone.

Applied exactly two guarded updates, with no title/search_text changes:

| Row | Change |
| --- | --- |
| 4401, Sachs Huret Rival 2850-00 | Description now identifies early upper-screw body and the 250g manufacturer specification. Removed the misplaced 246g later-specimen report. Source_ref 314 -> 327, from re-read September 1983 p. 8. Dates remain 1982-1988. |
| 8957, Sachs Huret AR 41.1 D, Rival | Description identifies the later lower-screw body, preserves its capacities, matching lever/front codes and long-cage option, and carries the 246g reported later specimen. Removed restrictive "first style" wording. Year_to 1986 -> 1988, source_ref 225 -> 319; year_from remains 1986. |

The date extension comes from **1988 Peugeot**, not the 1986 Sachs brochure:
PHE 20 Mont-Blanc spec **16715**, value `Huret Rival 41-1-D, white`, explicitly
names the later code (source 319). Four other explicitly coded 1987 Peugeot
specs (source 311) are **15240, 15278, 15297, 15316**. These existing catalogue
transcriptions were checked in the DB; the Peugeot scan pages were not
re-read in this review. The manufacturer remains the authority for the body
and specifications; source_ref 319 records the source extending the date.
No inferred 1985 introduction was adopted from specimen-page commentary.

All **22** bike links remain exactly unchanged: **17** generic/finish-only
Rival links to 4401 and **5** explicitly coded links to 8957. The generic
1985-1988 links are unresolved identifications, not confirmation of early
2850-00 production through 1988. Do not automatically move them to 8957 or
shorten 4401's end year on absence from a partial leaflet; review bike photos
or more specific specifications first. No bike-generator change was needed.

Applied transactional `/tmp/rival-corrections.sql`: two updates; second run
changed **zero rows**. Verified descriptions (190/230 characters), dates,
source references and an exact before/after comparison of all 22 link IDs.
Existing `node --test test/duplicate-classify.test.js` passed. Component count
unchanged at **10070**. No new sources, inserts, deletes or merges.
Scratch evidence/review plan: `/tmp/rival-investigation.txt`,
`/tmp/rival-review-proposal.sql`, `/tmp/rival-1982-cover.jpg`,
`/tmp/rival-1983-spec.jpg`, `/tmp/rival-1986-spec.jpg`,
`/tmp/rival-4401.jpg`, `/tmp/rival-4401-extra-0.jpg` through `-3.jpg`,
and `/tmp/rival-specimen-0.jpg` through `-2.jpg`.

### Generic Rival bike-link review — 2026-11-15, PXR 80 correction applied

Baseline readback found **17** generic/finish-only rear specs on **4401** and
**5** explicitly coded specs on **8957**. After the approved PXR 80 correction
below, **16** remain on 4401 and **5** on 8957. The earlier generation distinction and the decision to
keep the two rows separate remain supported by the original manufacturer
pages, visually re-read in this review: September 1983 p.8 (2850-00, upper
limit screws, 30T maximum sprocket / 28T total capacity) and April 1986 scan 3
(AR 41.1 D, lower screws, 36T maximum sprocket / 28T total capacity, with a
long-cage option separately mentioned). Their URLs are in the prior entry.

Before correction, the generic links were:

| Catalogue | Specs on 4401 |
| --- | --- |
| 1985 Peugeot FR | 13958 |
| 1986 Peugeot FR | 14439 |
| 1986 Peugeot US | 14782, 14801 |
| 1987 Peugeot FR | 15123, 15143, 15182 |
| 1987 Peugeot US | 15744, 15762 |
| 1987 Raleigh UK | 8783, 8806 |
| 1988 Peugeot FR | 16412, 16584, 16604, 16624, 16662, 16963 |

**Capacity evidence: 1988 Peugeot PXR 80, spec 16963, bike 1000, source 319.**
The [original French catalogue](https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1988.html)
printed p.20 confirms Stronglight 100 **30 x 40 x 50T**, Helicomatic **14/28**
and **15-speed Huret-Rival**. Required total capacity is
`(50 - 30) + (28 - 14) = 34T`, exceeding the documented **28T** on its former
2850-00 row. The later short-cage 8957 is also rated 28T, so repointing solely
on year would not resolve the capacity conflict. Printed p.18 includes the
PXR 80 model photo, but at the available 1000px page width the derailleur is
too small to identify the limit-screw arrangement or cage version reliably.

**Correction applied 2026-11-15, user approved:** changed 16963's `component_id`
**4401 -> NULL** using a transactional UPDATE guarded by spec/bike/label IDs,
raw label, exact value, prior component and source. Exactly **one row** changed;
rerun changed **zero**. The spec retains bike **1000**, label **17**, raw label
`Rear Derailleur`, value `Huret Rival` and source **319**. `updated_at` changed
from **2026-11-02 18:59:27 UTC** to **2026-11-15 10:29:19 UTC** through MySQL's
normal link-change timestamp. All other **21** Rival links are unchanged.

Added a Rear Derailleurs NULL override for `Huret Rival`, scoped to **PXR 80 /
1988**. An explicit undefined fallback preserves normal matching for every
other bike/year. Need a sharper original-bike photo or period parts document
establishing generation and cage/capacity before selecting/adding a row.
This replaces the initial unapproved proposal and supersedes treating the
PXR 80 link as merely the generic-generation question retained on November 8.
No component dates/definitions or CSV source text changed. Restoration, only
if deliberately justified later: restore 16963's 4401 link while it is still
NULL and retains the same bike/label/text/source, and remove the scoped override;
keep the normal new `updated_at` timestamp rather than restoring the old one.

**Other 16 links:** remain unresolved, with no new supported replacement.
Compared their live crank/freewheel specifications. Raleigh Zenith / Granada
have 50/36 and 14-28 (28T required), compatible with either documented short
cage. The Peugeot road gearings with stated ranges likewise do not distinguish
the generations; several other entries omit their tooth range. Inspected the
original [1987 Raleigh](https://labibleduvelocataloguesraleigh.blogspot.com/p/raleigh-1987_3.html)
p.11 Zenith/Granada photos and 1988 Peugeot pp.10-11 Aravis, Galibier,
Mont-Faron and Ventoux photos; none resolves the limit screws at the available
scan size. The 1987 Peugeot US model-page proxy attempts (image positions
33-35 on the held index) returned two 404s and a timeout, not usable photos.
Do not infer early production through 1988 from these unresolved links, or
move these links to 8957 on year/white finish alone.

Validation: read back the target and compared all 22 relevant spec/link IDs
against the captured baseline: only 16963 changed. Re-generated **20,600** spec
INSERT mappings from all **93 local catalogue CSVs** in memory using the same
component snapshot before/after: **zero changed mappings**; PXR 80 already
generated NULL from ambiguity, and the new override makes the decision durable
if a candidate becomes unique. The existing `bike-update.sql` was preserved.
Regression tests cover both tempting generations, scope boundaries and the
unaffected front/coded rear decisions; `npm test` passed. Fresh live Rear
Derailleur coverage is **875 / 1,074 (81.5%)**, with **942** category components.
The PXR 80 identification and other 16 generic links remain in TODO. Temporary
SQL, snapshots, comparison scripts and original review downloads/crops were
removed after readback and idempotency validation.

## Elysee 5/6-speed and Elysee 7 systems — 2026-11-08

User approved keeping **4396 Sachs Huret Elysee** and **4397 Sachs Huret
Elysee 7** distinct and enriching their descriptions from newly found
manufacturer documents. Added `[4396, 4397]` to `REVIEWED_NOT_DUPLICATES`;
this closes the previously unreviewed near-name pair. No merge or deletion.

### Manufacturer references

Two catalogue-type `data_source` records added; dates remain **undated**,
and country is NULL because a specific catalogue market was not established.
These are manufacturer instructions/datasheets, not forum commentary.

- **368 — Sachs-Huret Elysee installation instructions no. 514.8 F (undated)**.
  https://www.velovintageagogo.com/t6468-sachs-huret-elysee-notice-de-montage
  Four French pages, all read: original scans on
  `https://i.servimg.com/u/f37/16/33/76/87/`, files `image13.jpg` (p. 1),
  `image11.jpg` (p. 2), `image12.jpg` (p. 3), `image10.jpg` (p. 4).
  P. 1 explicitly states the same derailleur supports **5 and 6 speeds**.
  P. 2 explains switching the preselection box from its supplied six-speed
  setting to five speeds, and requires the matching RGS-profile freewheel
  and Sedisport GT7 chain. P. 3 shows the rear-mounted indexing/preselection
  box clipped to the derailleur's mounting shafts. These match 4396's photo;
  do not claim that all Elysee indexing is confined to the handlebar lever.
  The p. 4 imprint is `891120`, Printed in France, but no unambiguous
  publication date was established; no date correction was made from it.
- **369 — Sachs-Huret Elysee Sport/Touring datasheet no. 520.1/1 DFE (undated)**.
  https://www.velovintageagogo.com/t6469-sachs-huret-elysee-sport-touring-fiche-technique
  Six pages, German/French/English, all read/skipped through for scope:
  same image directory, `image18.jpg` (p. 1), `image21.jpg` (p. 2),
  `image22.jpg` (p. 3), `image23.jpg` (p. 4), `image24.jpg` (p. 5),
  `image25.jpg` (p. 6). P. 1 explicitly specifies **7 speeds**. P. 2:
  Sport rear **AR 49.11 D**, forged light alloy/steel, metallic grey,
  **275g specified**, **28T capacity**, **30-32T max freewheel**. Direct-fit
  part `49 1185 403 001`, hanger version `49 1185 402 001`. Touring rear
  AR 49.21 T is separately specified at 312g / 40T / 34T; its values were
  not assigned to the short-cage 4397 specimen. No reliable date established
  from the small print, so no catalogue year was invented.

Only the two existing rear derailleur rows were reconciled. Other group
components and the separately numbered Touring rear in the datasheet are
outside this pair review; no complete groupset ingestion is claimed. Pp.
3-6 provide system context: shifters, freewheel, chain, crank, BB, brakes,
hubs and out-of-category fixing clips. No new component rows were added.

### Applied rows and evidence boundaries

- **4396**: old description `Sachs Huret Elysee, France` replaced with a
  197-character description identifying the 5/6-speed system, dedicated
  thumb shifter/transmission, rear-mounted indexing box, RGS freewheel and
  GT7 chain. Source_ref **1 -> 368**. Original VeloBase source_id retained:
  `3A3D22E9-D697-4E73-AB0D-9A8E87417DEB`; photo
  `0D56DB30-4FD3-41F2-B0BC-68C8ADF9A92E` shows the plain Elysee badge,
  black end cover and cylindrical transmission mounting shafts.
- **4397**: old description `Sachs Huret Elysee 7, France, 293 grams (Actual)`
  replaced with a 202-character description identifying short-cage Sport
  AR 49.11 D and the manufacturer material/finish/capacity/weight figures.
  **Preserved 293g measured specimen** alongside **275g specified**; do
  not assume the difference is an error or invent an explanation for it.
  Source_ref **1 -> 369**. Original VeloBase source_id retained:
  `4A16D858-B5FD-44F1-B019-52A441B382CD`; photo
  `4CE67AE8-57ED-4C90-A7B1-03466AA49354` shows red Elysee 7 markings,
  light end cover and forked adapter attachment. VeloBase's date-code
  interpretation `2090` was not needed for any new date change.
- Both rows retain **1990-1990**, their titles/search_text, and **zero
  bike-spec links**. No generator overrides refer to these IDs. No automatic
  link was inferred for any generic Sachs/Huret bike spec.

Applied transactional `/tmp/elysee-corrections.sql`: **2 source inserts,
2 component updates**; second run affected **zero rows**. Verified all
updated fields, source labels, description lengths and unchanged dates,
search_text and link counts. Existing
`node --test test/duplicate-classify.test.js` passed; `git diff --check`
passed. Overall component count unchanged at **10070**.

Scratch evidence: `/tmp/elysee-investigation.txt`,
`/tmp/elysee-review-listing.json`, `/tmp/elysee-review-proposal.sql`,
`/tmp/elysee-4396.html`, `/tmp/elysee-4397.html`,
`/tmp/elysee-4396.jpg`, `/tmp/elysee-4397.jpg`,
`/tmp/elysee-instruction-13.jpg`, `-11.jpg`, `-12.jpg`, `-10.jpg`,
and `/tmp/elysee-sheet-18.jpg`, `-21.jpg`, `-22.jpg`, `-23.jpg`, `-24.jpg`,
`-25.jpg`.

- 2026-11-14 rear derailleur dedupe (user approved): 4302 Duopar 2600 / 2640
  (titanium) and 8173 Duopar 2648 / 2654 (titanium, long cage) are both 1976
  catalogue models and stay separate. 4302's VeloBase GUID
  15AB95B3-AA4E-41C1-968A-31796C9789E3 is a specimen with model field 2648 (255 g
  with bolt), so the GUID and the weight moved to 8173. 4302 now has
  a59372f3-e065-11f1-a2df-02fea3763e8d; 8173's previous synthetic id
  0311fc96-c102-11f1-a2df-02fea3763e8d is retired.

## Rear derailleur audit fixes — 2026-11-15 (user approved; audit items 1, 2, 4; item 3 decided)

- Merged/deleted: 4277 "Huret Duopar Eco (Version 1)" (VeloBase, undated, 280 g,
  `42FE7685-2CF0-4168-9D48-082F8D20D4A0`) -> 4276 Duopar Eco 2690-01. Its VeloBase page (read 2026-11-15) shows a
  Huret-badged long cage with 34T max cog, matching 4276's 12 x 34; the Sachs Huret ATB 4400 (VeloBase model "2690 H /
  2690 GC") takes 36T and has a Sachs Huret plate. Spec 6450 (1984 Raleigh Weekender 15 "Huret ECO Duopar") 4277 ->
  4276; override `'huret eco duopar'` -> 4276; 4276 `year_to` 1983 -> 1984 from that fitment (280 g noted).
- Dates from explicit Peugeot prints (fitment evidence): 4417 ARIS Rival `year_from` 1990 -> 1989 (1989 Mont Blanc
  "Sachs Rival Aris Index", PHE 20 Z "Sachs-Huret Aris Rival"); 8958 AR 46.1 T Rider `year_to` 1988 -> 1989 (1989 Fun
  Star / US Express); 8958's description now leads with its title.
- Retitled: 4415 "Sachs Huret ARIS New Success 3d Gen." -> "... 3rd Gen." (`search_text` too).
- New Success 1987-89 (user decision, 2026-11-15): keep the plain "Huret New Success" / "Sachs-Huret New Success" rears
  on 4412 ARIS New Success 1st Gen. for 1987-89 (1987 Peugeot PS 10B Savoie, 1987 Raleigh Randonneur 18, 1988 PJ 10 B
  Mont Cenis, 1989 Savoie), treating them as ARIS from 1987. This supersedes the April 1986 note's reason ("4402 now
  ends 1986"): the 1988 Brügelmann pass (source 391) extended 4402 AR 47.1 D to 1988, so those specs no longer
  distinguish the two by date. Revisit if a 1987-88 Sachs-Huret catalogue shows which style was fitted. The 1988 and
  1989 links stay outside 4412's VeloBase 1987 date (review flags).
- Validation: 6 rows as planned (1 spec, 4 component updates incl. 4276, 1 delete); rerun 0; no dangling
  references. All 93 CSVs regenerated: only the Weekender mapping changed (4277 -> 4276). `quality-report` has no
  findings on the touched rows; the 4417 x2 and 8958 x2 date flags cleared.
- VeloBase pages also read (no change): 4410 / 4411 Rider type 1 / 2 (no dates or codes; type 1 "Budget Sachs Huret
  set", drop parallelogram, plastic / steel, long cage; type 2 blank), 4409 Rival 7000 (model "RD R7000", ARIS, slant
  parallelogram, short cage, 28T wrap), 4404-4406 Aris Classic 1500 / 2500 / 3000 (ARIS touring, long cage); none gives
  production years.

## Front derailleur audit fixes — 2026-11-15 (user approved; audit items 1-3)

- Wrong links corrected: 8962 "AV 62.1 T, Rider / Duopar (triple)" was linked from four 42x52 doubles; set NULL
  (old value 8962): 15470 1987 Peugeot P 15C W Manosque "Huret Rider" (Solida 52D 42x52, 10-speed), 17763 1989 P 10 S Z
  Avoriaz "Sachs-Huret Rider" (42x52, 12-speed), 17782 P 10 SA Z Lautaret and 17858 P 15 Z Lavandou "Sachs-Huret Rider
  2" (42x52, 10-speed). Scoped null overrides keep them unlinked ('sachs huret rider 2' 1989; bike-scoped Avoriaz and
  Manosque entries on 'sachs huret rider' / 'huret rider'). No double Rider front row exists (front 2437 "Rider" was
  merged into 8962 on 2026-11-02); "Rider 2" probably names the double. Source gap: a 1987-89 Sachs-Huret catalogue
  listing the Rider double front.
- Dates from explicit Peugeot prints (fitment evidence; descriptions unchanged): 8961 AV 62.1 D Rival `year_to` 1986 ->
  1989 (1987-89 Peugeot print "AV: 62-1D" / "62-1-D"); 8962 AV 62.1 T `year_to` 1986 -> 1989 (genuine triples: 1987
  Saint-Bernard "Rider 3 PL" 30x40x50, 1988 VTT Fun, 1989 Fun Star / US Express 28x38x48); 2379 Club II `year_to` 1987
  -> 1988 (1988 P 15, PE 10 LS "Club 2"; description is at 255). 2439 ARIS New Success front NULL -> 1987-89 from
  fitment, matching the rear 4412 decision (ARIS from 1987).
- Retitled: 2394 "Huret Alvit" -> "Huret Allvit" (`search_text` and description too), Huret's spelling as rear 4290.
- Validation: 4 specs + 5 rows; rerun 0. All 93 CSVs regenerated: only the four unlinks changed (7328 -> 7324 linked);
  the retitle changed no mapping. `quality-report` has no findings on the touched rows. Huret / Sachs front specs 88 / 105
  linked (92 before; the 4 removed links were wrong).
