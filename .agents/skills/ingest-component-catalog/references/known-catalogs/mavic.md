# Mavic catalogs processed so far

## CXP30 edition weights — 2026-11-20, applied and validated

User approved with “apply”. Guarded SQL inserted one catalogue source and
updated exactly two component descriptions. The rerun inserted/updated zero
rows. SQL and validation scratch files were removed after exact readback;
old/new values below preserve the restoration evidence. No component additions,
merges, title, search-text, date, group or bike-link changes.

**5062 applied description (227 characters):**
`700c aero tubular rim, SUP joint, UB Control brake tracks, profiled inserts; silver or titanium. Maker specifications: 530 g (1996), 465 g (1997); 1997 drilling 24/28/32/36h. Separate 500 g listing has no stated weighing basis.`

**Captured old description:**
`700c aero tubular rim, SUP joint, UB Control brake tracks and profiled inserts; 465 g maker specification (1997), 24/28/32/36 holes, silver or titanium. A separate 500 g listing has no stated measurement basis.`

Source_ref **357 → 483**, new catalogue entry
**Mavic Catalogue 1996, English folding rim brochure**, citing IMG_5147 in the recovery section below,
with country NULL because the market is not established. Source-registry search
found no existing matching maker brochure; source 306 is a different Bike-Pro
rear-derailleur document. The 1997 specification remains attributed inline;
source 307 supports it. Separate 500 g listing remains explicitly unqualified.
The unresolved Guida 520 g identity/weight question is not being decided.

Scoped duplicate report flags 5062/5063, which remain separate tubular/clincher
configurations; no merge follows from the report's generation label. Other
silver/titanium family rows are unchanged. Live 5062 has zero bike links.

Validation: exact before/after readback confirms both approved descriptions,
all other fields unchanged apart from Mavic 5062 source_ref 357 → 483, and
zero bike links retained on both rows. Related Mavic rows 5063/10199/10607
are unchanged. Both descriptions fit 255 characters (5062: 227; 2662: 213).
Whole-DB quality summary and every finding are identical before/after:
zero errors, 2,075 review findings. The source table gains one row; component
count remains 11,218. Generator component reads use ID/title/category rather
than descriptions/source provenance; no identity or matching inputs changed,
so no full generator rerun or code tests were needed. The existing duplicate
and keep-separate decisions above stand. Unresolved evidence gaps remain open.

Restoration, only if deliberately requested: guard the current UUID, applied
description and source_ref, restore the captured old description and source_ref
(5062=357, 2662=1). Remove source 483 only if unreferenced and deliberately
rolling back its registration. All source URLs remain in these notes.

## Full French catalogue (1994) — applied and validated

Source: [36-page PDF](https://www.bikecatalogs.com/download/3659), mirrored from
[Disraeli Gears](https://www.disraeligears.co.uk/site/mavic_catalogue_1994.html).
Cover explicitly prints CATALOGUE 1994 F: edition 1994, French market. This is
separate from ZMS brochure/source 305. Registered source **480**, `Mavic Catalogue, French edition (1994)`, countryFR,
after confirming no equivalent full-edition source existed.

Read all product tables pp.8–31, technology/finish pp.4–6 and cover/index.
Pp.16–17: 3G/Comete and complete cartridge hubs; 18–21: ZMS8000/800;
22–31: hubs, cranks, BBs, headsets, brakes, derailleurs, shifters and aero bars.
Exclude cover/blank/index pp.1–3, rim photo p.7, tools/consumables p.32,
blank notes/blank pp.33–35, imprint/address p.36 and exploded-diagram spares.
Complete replacement hub cartridges are included as Hubs, not loose spares.

Applied 55 existing updates and 14 additions on explicit user approval; no merges
or deletions. Catalogue
years are attestations, not launch/end dates. New rows use 1994–1994 and fresh
stable UUIDs. Existing later end attestations and independent actual/average
weights are preserved. Only changed rows acquire this catalogue's source_ref.
Original changed fields are retained in the restoration baseline below.
Task SQL and comparison scratch files were removed after successful validation.

Important decisions:

- Retitle 6970 from `Mavic 3G Carbon (tri-spoke rear)` to `Mavic 3G Carbon`,
 with corresponding search_text. The same wheel works front/rear through
 cartridge changes; bare 700/650 wheels weigh 760/700g. Add 1994 attestation.
- Enrich 6972 Comete with 1994 990g bare 700c tubular/18mm rim, preserving its
 earlier and 1997 configurations. Do not conflate bare and complete weights.
- 3399 501 maker table explicitly gives 130mm rear convertible to 127mm by
 removing a 3mm spacer; old description's 126mm is corrected. 3404 571/2 gains
 detailed front/rear construction and weights; HG is a separate coded row.
- 1192 cassette retains earlier 4.8/5.0mm pitch as earlier specifications;
1994 specifies 4.85mm. 9973 ZMS 800 gains materials and 240g derailleur/95g
 controls weights. 4348 and 6088 are kept separate: no specimen identity proof
 warrants merging them or assigning 6088 the 1994 controls weight/generation.
- 631/2 p.24 is explicitly a new offset-arm generation, also named in p.18
 group composition. Add it separately; keep generic 631 row 1645 and its
 earlier 730/835g configurations/reported 723g. No invented 632 code.
- 8193 Paris-Roubaix SSC 21.5mm is width, not height; height 12.7mm.
- 5102 Open SUP CD loses the Ceramic configuration from its description;
 existing 10598 independently represents Ceramic. No merge.
- 316/317 headsets print 155/145g in 1994 versus 145/155g in the c.1990 manual:
 keep both with edition qualifiers. Likewise qualify differing 305, 870/872,
840/841 and 821 weights and rim-edition weights without inventing revisions.
- Keep generic 217 row 9977 as a family with later 1997 data; add explicit 217D
 SBP/TIB double-eyelet 450g configurations separately from single-eyelet 410g.
- 2410's 31.8mm clamp remains unsupported. No CXP30/Open Pro appears. Do not
 date 650c Mach 2 Ceramic 5083 from the 700c Ceramic column. Other protected
 configurations 5083/9971/9972/10185/10186/8149 are unchanged.

### Applied additions and material changes

The following table records applied component IDs and old/new dates. Description
changes on rows with unchanged years are included too; full readback verified
each applied description and preservation of other fields.

| Page | ID | Component | Old years | Applied years |
| --- | --- | --- | --- | --- |
|8|5074|Mavic MA 2|1986–1999|1986–1999|
|8|8177|Mavic MA 2 Argent|1986–1991|1986–1994|
|8|5077|Mavic MA 40|1980–1999|1980–1999|
|8|5085|Mavic Module 3D Argent|1980–1991|1980–1994|
|8|5048|Mavic Module 3 CD|1980–1991|1980–1994|
|8|5086|Mavic Module 4|1984–1991|1984–1994|
|9|5050|Mavic 192|1993–1993|1993–1994|
|9|5097|Mavic Open 4 CD|1988–1996|1988–1996|
|9|5107|Mavic Reflex|1995–1997|1994–1997|
|9|10595|Mavic Reflex Titane SUP UB Control|1995–1996|1994–1996|
|9|5101|Mavic Open S.U.P. SBP|NULL–NULL|1994–1994|
|9|5102|Mavic Open SUP CD|1996–1999|1994–1999|
|9|10598|Mavic Open SUP CD Ceramic|1995–1996|1994–1996|
|10|5092|Mavic Montlhéry Pro|1960–1991|1960–1994|
|10|5069|Mavic GP 4|1979–1997|1979–1997|
|10|5067|Mavic GL330|1984–1991|1984–1994|
|10|5066|Mavic G.E.L. 280|1980–1991|1980–1994|
|11|5082|Mavic Mach 2 CD 2|1990–1996|1990–1996|
|11|12058|Mavic Mach 2 Ceramic (700c)|1995–1996|1994–1996|
|11|8193|Mavic Paris-Roubaix SSC|1988–1997|1988–1997|
|12|12059|Mavic 230 SBP (26in)|1995–1996|1994–1996|
|12|12060|Mavic 230 TIB (26in)|1995–1996|1994–1996|
|12|8191|Mavic M 231|1990–1993|1990–1994|
|12|5071|Mavic M 231 CD|1990–1996|1990–1996|
|12|5072|Mavic M 261|1990–1996|1990–1996|
|12|8192|Mavic M 261 CD|1990–1991|1990–1994|
|12|12095|Mavic M 261 SBP Ceramic|new|1994–1994|
|12|9970|Mavic M 281|1991–1991|1991–1994|
|13|9977|Mavic 217|1995–1997|1994–1997|
|13|12096|Mavic 217 D SBP|new|1994–1994|
|13|12097|Mavic 217 D TIB|new|1994–1994|
|13|12098|Mavic 117 SUP SBP (26in)|new|1994–1994|
|13|12061|Mavic 117 SUP CD (26in)|1995–1996|1994–1996|
|13|12062|Mavic 117 SUP CD Ceramic (26in)|1995–1996|1994–1996|
|13|9976|Mavic 121|1995–1997|1994–1997|
|14|12099|Mavic T 231 SBP|new|1994–1994|
|14|10182|Mavic T 261 Argent|1995–1999|1994–1999|
|15|10184|Mavic T217 Argent SUP UB Control|1996–1999|1994–1999|
|15|12100|Mavic T 217 TIB|new|1994–1994|
|25|8194|Mavic 610 URD|1990–1994|1990–1994|
|25|83|Mavic 616 RD|1990–1991|1990–1994|
|26|3049|Mavic 305|1990–1994|1990–1994|
|26|3046|Mavic 315|1990–1999|1990–1999|
|26|3047|Mavic 316 (for 1 1/8" steerer)|1990–1990|1990–1994|
|26|3048|Mavic 317 (for 1 1/4" steerer)|1990–1990|1990–1994|
|27|856|Mavic 451|1991–1994|1991–1994|
|28|2407|Mavic 860|1984–1991|1984–1994|
|28|2411|Mavic 862, SSC|1984–1994|1984–1994|
|28|2409|Mavic 870, SSC|1988–1992|1988–1994|
|28|8187|Mavic 872, SSC|1988–1991|1988–1994|
|29|4340|Mavic 840|1990–1996|1990–1996|
|29|4341|Mavic 841|1990–1996|1990–1996|
|29|6087|Mavic 821|1990–1994|1990–1994|
|30|2863|Mavic 355|1986–1991|1986–1994|
|31|2864|Mavic Kit 357|1990–1991|1990–1994|
|16|6970|Mavic 3G Carbon|1992–1992|1992–1994|
|17|6972|Mavic Comète|1985–1997|1985–1997|
|22|3399|Mavic 501|1992–1997|1992–1997|
|23|3404|Mavic 571/2|1993–1995|1993–1995|
|23|12101|Mavic 571/2 HG|new|1994–1994|
|23|1192|Mavic 571|1991–1994|1991–1994|
|20|9973|Mavic ZMS 800|1994–1994|1994–1994|
|17|12102|Mavic AV 502|new|1994–1994|
|17|12103|Mavic AR 502|new|1994–1994|
|17|12104|Mavic AR 572/2|new|1994–1994|
|17|12105|Mavic AR 572/2 HG|new|1994–1994|
|17|12106|Mavic AV 522|new|1994–1994|
|17|12107|Mavic AR 522|new|1994–1994|
|24|12108|Mavic 631/2|new|1994–1994|

### Application and validation

Applied at **2026-11-19T19:35:52Z**, source 480. Loader affected exactly one source,
55 existing components and 14 component inserts. A second execution affected
zero sources, updates or inserts. No merges/deletions or bike-link writes.

Full-row readback verified all 55 updates and 14 additions against the approved
fields, including country/source, UUIDs, titles/search text, categories/groups,
dates and untruncated descriptions. All 192 other pre-existing Mavic rows were
unchanged in every exported component field. No dangling bike-component links;
all 41 live specs using affected records retained their exact targets.

Actual post-load generator/live comparison covered 109 loaded catalogues /
23,410 paired specs. Its complete summary and findings were identical to the
immediate pre-load baseline: 23,395 unchanged, the same 15 pre-existing lost
matches, zero gains, changed targets or missing/ambiguous identities. Thus no
new links or matcher/CSV changes were needed for these catalogue additions.
The 3G retitle and all new titles were included in both simulation and actual
comparison. Longest stored replacement description 245 characters, within 255.

The ordinary Mavic duplicate report retained the same 13 pair identities and
classifications (6 configuration, 5 generation, 2 reviewed variants). Near-name
review exposed two additional pairs, both explicitly separate interfaces:

- **3404 / 12101**, p.23: 571/2 Mavic CB cassette interface versus 571/2 HG
 Hyperglide interface. Same mechanical family, separately sold interfaces;
 keep separate, no merge.
- **12104 / 12105**, p.17: AR 572/2 Mavic cassette cartridge versus AR 572/2 HG
 Hyperglide cartridge. Keep separate, no merge.

Recorded both pairs in `REVIEWED_NOT_DUPLICATES` in `duplicate-classify.js`.
The follow-up near report had zero unresolved Mavic candidates. Existing
reviewed pairs remain separate. No matching rules or API logic changed.

The completed 1994 application action was removed from TODO; 1995 and the later
catalogue backlog remain. Removed this task's scan download, renders, SQL,
transcriptions, review table, query snapshots, validation scripts and reports
after retaining source/page URLs, IDs, decisions and original values here.

### Restoration baseline

Only restore deliberately, guarded by the applied source 480 and approved new
fields above. These JSON lines record the original changed fields for all 55
updated rows (source_ref, description, and dates/title/search_text where changed).
New rows 12095–12108 and source 480 are independently evidenced catalogue data;
restoring an older row does not imply deleting those records.

```jsonl
{"component_id":5074,"source_ref":353,"description":"Mavic MA 2, France, 444 grams (avg). Polished touring clincher for 19-25 mm tyres, double eyelet, good price/quality; 700c or 27 x 1 1/4, 32/36/40 holes, 430/435 g; 460 g, 32/36 in 1997 (\"flash brillant\"). Variants: Red/Green Label."}
{"component_id":8177,"source_ref":121,"description":"Mavic MA 2 Argent, France. Silver-anodised clincher for 19-25 mm tyres, double eyelet, for sport bikes and top-range touring; 700c or 27 x 1 1/4, 32/36 holes, 430/435 g.","year_to":1991}
{"component_id":5077,"source_ref":473,"description":"Hard-anodised anthracite box-section clincher, 20.5mm, double stainless eyelets, 19-25mm tyres. Maker sizes: 700c, 27in, 571, 28-40 holes, 430/435/395g. 1995/96: 700c, 32/36 holes, 460g."}
{"component_id":5085,"source_ref":121,"description":"Mavic Module 3D Argent, France. Silver-anodised 22 mm touring clincher for 25-28 mm tyres, very strong double eyelets; 36/40 holes; 700c 530 g, 27 x 1 1/4 535 g, 650B 490 g (480 g in the 1984 catalogue).","year_to":1991}
{"component_id":5048,"source_ref":121,"description":"Mavic Module 3 CD (M3 CD), France. Hard-anodised anthracite 22 mm touring and cyclo-camping clincher for 22-28 mm tyres, double eyelet (stainless from 1988); 700c or 27 x 1 1/4, 36/40 holes, 530/535 g.","year_to":1991}
{"component_id":5086,"source_ref":121,"description":"Mavic Module 4, France, 596 grams (Actual). Very strong clincher for 28-35 mm tyres, double eyelet, for touring, tandems and raids; 700c, 27 x 1 1/4, 650B, 650A, 36/40 holes (also 48 in 700c from 1988), 550/560/520/530 g.","year_to":1991}
{"component_id":5050,"source_ref":47,"description":"Aluminium clincher road rim, offered in silver anodised. A 700c (622 mm) specimen has 19 mm outside width, single eyelets and 32 spoke holes.","year_to":1993}
{"component_id":5097,"source_ref":473,"description":"Hard-anodised aero clincher, 17mm, 18-23mm tyres, stainless double eyelets. 622: 28-36 holes; 571: 28/32. 1988/89: 395/360g; 1990/91: 420/385g. 1995/96: 700c, 28/32/36, 430g."}
{"component_id":5107,"source_ref":473,"description":"700c clincher, SUP joint, UB Control sidewalls, 28/32/36 holes. 1995/96 silver SBP: 430g. 1997: 410g, 18-23mm tyres, CD/CD Ceramic/blue/silver; measured average 394g. Reflex tubular is separate.","year_from":1995}
{"component_id":10595,"source_ref":473,"description":"700c alloy clincher, 19mm, 28/32/36 holes, titanium-colour anodising, double stainless eyelets, SUP joint and UB Control braking. 1995/96 TIB listing: 480g; 1996 maker listing: 410g.","year_from":1995}
{"component_id":5101,"source_ref":1,"description":"Mavic Open S.U.P. SBP, France","year_from":null,"year_to":null}
{"component_id":5102,"source_ref":357,"description":"Mavic Open SUP CD, France. 700c clincher with the SUP welded and milled joint, 470 g (Ceramic 480 g), 32/36 holes, for 18-23 mm tyres; CD or CD Ceramic. Road racing and training.","year_from":1996}
{"component_id":10598,"source_ref":473,"description":"700c alloy clincher, 19mm, 28/32/36 holes, SUP joint, hard CD anodising, ceramic braking flanks and double stainless eyelets; 480g.","year_from":1995}
{"component_id":5092,"source_ref":121,"description":"Mavic Montlhéry Pro, France, 399 grams (avg). Polished 700c tubular rim, 20 mm, double eyelet; replacement and retail builds for racing, training and sportive riding; 24-40 holes, 395 g.","year_to":1991}
{"component_id":5069,"source_ref":307,"description":"Mavic GP 4, France, 401 grams (avg). Hard-anodised 700c tubular, the amateur racer's rim for the worst conditions; 20 mm, double eyelet (stainless from 1988), 24-40 holes, 395 g. Reissued by 1997 (\"is back\"): CD, 32/36, 480 g. Variants: Red Label."}
{"component_id":5067,"source_ref":121,"description":"Mavic GL330, France. Hard-anodised tubular, lighter than the GP 4, for road racing, time trials and triathlon; 20 mm, double eyelet (stainless from 1988); 700c 24-36 holes 330 g, 650 (26 in) 310 g, 600 (24 in) 290 g. Variants: Red Label.","year_to":1991}
{"component_id":5066,"source_ref":121,"description":"Mavic G.E.L. 280, France, 295 grams (avg). Hard-anodised 700c tubular, 0.8 mm walls, for time trials, hill climbs, triathlon and extra-light wheels; double eyelet (stainless from 1988), 28-36 holes, 280 g.","year_to":1991}
{"component_id":5082,"source_ref":473,"description":"Mavic Mach 2 CD 2, France. Aero tubular, 19 mm, double eyelet (two-piece stainless, recessed head) for easier lacing and even tension, flash-bright plus 50 micron hard anodising; 700 24-36 holes 470 g, 650 437 g, 600 24/28 holes 396 g."}
{"component_id":12058,"source_ref":473,"description":"700c aero tubular rim with ceramic finish, 32/36 holes; 470g.","year_from":1995}
{"component_id":8193,"source_ref":307,"description":"Mavic Paris-Roubaix SSC, France. The pro peloton's tubular: finest alloys, close tolerances, hard-anodised to 80 microns, stainless exposed double eyelets; 21.5 mm high, 700c, 24-40 holes (28/32/36 by 1997), 400 g."}
{"component_id":12059,"source_ref":473,"description":"26in MTB clincher rim, 23mm wide, silver SBP finish, 28/32/36 holes; 380g.","year_from":1995}
{"component_id":12060,"source_ref":473,"description":"26in MTB clincher rim, 23mm wide, titanium-colour TIB finish, 28/32/36 holes; 380g.","year_from":1995}
{"component_id":8191,"source_ref":47,"description":"Mavic M 231, France. P.S.P.-profile ATB clincher (pyramidal braking flanks angled 3 degrees for cantilevers), tyres up to 37 mm, single stainless eyelet, neutral anodised; 559, 28-32-36 holes, 410 g.","year_to":1993}
{"component_id":5071,"source_ref":473,"description":"Mavic M 231 CD, France. P.S.P.-profile ATB clincher (pyramidal braking flanks angled 3 degrees for cantilevers), tyres up to 37 mm, single stainless eyelet, flash-bright plus 50 micron hard anodising; 559, 28-32-36 holes, 410 g."}
{"component_id":5072,"source_ref":473,"description":"P.S.P.-profile ATB clincher, 26in, 26mm, cantilever-angled braking flanks, double stainless eyelets, neutral/silver anodised. 1990/91: 28/32/36h, 460g. 1995/96 261 SBP: 32/36h, 480g."}
{"component_id":8192,"source_ref":121,"description":"Mavic M 261 CD, France. The M 261 P.S.P. profile with flash-bright plus 50 micron hard anodising: cantilever-angled flanks, stainless exposed double eyelets, all tyre types; 559, 28-32-36 holes, 460 g.","year_to":1991}
{"component_id":9970,"source_ref":303,"description":"Mavic M 281, France. P.S.P.-profile ATB clincher (braking flanks angled for cantilevers), 28 mm wide, 26 in, 36 holes, 520 g, for 44-55 mm tyres.","year_to":1991}
{"component_id":9977,"source_ref":473,"description":"26in cross-country MTB rim, 22mm, SUP joint and UB Control, 28/32/36h. 1995/96 TIB: 410g. 1997: 410g, Ceramic 420g, CD double-eyelet 440g; CD also 40h for tandems, silver/Sunset/CD/CD Ceramic.","year_from":1995}
{"component_id":12061,"source_ref":473,"description":"26in MTB clincher rim, 23mm wide, SUP joint and hard CD anodising, 28/32/36 holes; 450g.","year_from":1995}
{"component_id":12062,"source_ref":473,"description":"26in MTB clincher rim, 23mm wide, SUP joint, hard CD anodising and ceramic braking flanks, 28/32/36 holes; 460g.","year_from":1995}
{"component_id":9976,"source_ref":473,"description":"26in downhill MTB rim, 28mm wide, SUP joint; CD or CD Ceramic. 1995/96 CD Ceramic: 36h, 530g. 1997: 32/36h, 530g; CD version recommended for disc brakes.","year_from":1995}
{"component_id":10182,"source_ref":449,"description":"700c (622) alloy trekking rim; 26 mm outside width, double wall, double stainless eyelets, silver anodised; 540 g, 36/40/48 holes, for 28-35 mm tyres. Touring and heavy loads.","year_from":1995}
{"component_id":10184,"source_ref":374,"description":"700c (622) alloy trekking rim; 22 mm outside width, double wall, double stainless eyelets, SUP welded joint, UB Control braking, silver anodised; 470 g, 36/40/48 holes, for 22-28 mm tyres. Touring and tandems.","year_from":1996}
{"component_id":8194,"source_ref":305,"description":"Mavic 610 URD, France. Threadless sealed BB, successor to the 610 RD: silver-anodised dural body, tempered steel axle, hard-anodised fixing rings with plastic washers; track 110 290 g, 114 300 g, 116 305 g, triple 119 310 g, 123 315 g."}
{"component_id":83,"source_ref":121,"description":"Mavic 616 RD, France, 317 grams. ATB bottom bracket: the 610 URD with a widened shell putting the bearings outboard; symmetrical axles 124 mm 350 g, 134 mm 360 g.","year_to":1991}
{"component_id":3049,"source_ref":305,"description":"Mavic 305, France, 116 grams. Road headset with an allen-key locking ring instead of a lock nut and washer, stainless races and balls, plastic seals; 25 x 100 119 g, 25.4 x 24 118 g."}
{"component_id":3046,"source_ref":121,"description":"Mavic 315, France. ATB version of the 305 headset with a taller upper race for more steerer thread contact, allen-key locking ring, stainless races and balls; 25.4 x 24, 128 g (125 g in the 1991 catalogue)."}
{"component_id":3047,"source_ref":302,"description":"Mavic 316, France. ATB headset for 1 1/8in steerers on the 305 / 315 design: 28.6 x 26 thread, head race 34.0 mm, crown race 30.0 mm, stack height 38-44 mm adjustable, allen-key locking ring, 145 g.","year_to":1990}
{"component_id":3048,"source_ref":302,"description":"Mavic 317, France. ATB headset for 1 1/4in steerers on the 305 / 315 design: 31.8 x 26 thread, head race 37.0 mm, crown race 33.0 mm, stack height 38-44 mm adjustable, allen-key locking ring, 155 g.","year_to":1990}
{"component_id":856,"source_ref":305,"description":"Mavic 451, France, 755 grams (Spec), pair including cables. Road side-pull brake tested in the 1991 Tour de France: return springs hidden in the arms, adjustable spring tension; used with the 451 levers."}
{"component_id":2407,"source_ref":121,"description":"Mavic 860, France. Service Course version of the 810: clamp-on, hard-anodised links, finer precision and finish, 100 g.","year_to":1991}
{"component_id":2411,"source_ref":305,"description":"Mavic 862, SSC, France, 91 grams. Service Course version of the 812: Italian-type braze-on front, hard-anodised links, 90 g."}
{"component_id":2409,"source_ref":120,"description":"Mavic 870, SSC, France. Racing triple front, clamp-on: the 860 with a triple cage, hard-anodised wear parts, case-hardened matt-chromed cage, 110 g.","year_to":1992}
{"component_id":8187,"source_ref":121,"description":"Mavic 872, SSC, France. Racing triple front for an Italian-type braze-on: the 862 with a triple cage, hard-anodised wear parts, 100 g.","year_to":1991}
{"component_id":4340,"source_ref":306,"description":"Mavic 840, France, 234 grams (Actual). Short-cage racing rear: body and links forged 2014 alloy, C.N.D. black body, silver links; needle-bearing nylon jockeys; bolted, fully rebuildable; 6/7/8-speed, indexed with the 821 or friction with the 820, 230 g."}
{"component_id":4341,"source_ref":306,"description":"Mavic 841, France, 243 grams. Medium-cage version of the 840 for triples, same body, links and bolts: sprockets up to 30 t, 32 t total capacity; 6/7/8-speed, indexed with the 821, 235 g."}
{"component_id":6087,"source_ref":305,"description":"Mavic 821, France. Down-tube levers for the 840/841: retrofriction left and 6/7-speed indexed right, forged silver-anodised alloy, pre-stretched cables and anti-compression housing; 77 g."}
{"component_id":2863,"source_ref":121,"description":"Mavic 355, France. Aero drop bar with an inclined top for low-profile time-trial bikes, two cable passages for classic brake levers, anthracite hard-anodised; 40/42 cm, 300/310 g.","year_to":1991}
{"component_id":2864,"source_ref":121,"description":"Mavic Kit 357, France. Aero extension kit: hard-anodised dural U bar, two foam-covered alloy elbow rests, brackets and hardware; adjustable angle and reach, fits normal bends or the 355, also usable on an ATB; 560 g.","year_to":1991}
{"component_id":6970,"source_ref":1,"description":"Mavic 3G Carbon (tri-spoke rear), France","year_to":1992,"title":"Mavic 3G Carbon (tri-spoke rear)"}
{"component_id":6972,"source_ref":307,"description":"Mavic Comète, France. Composite lenticular disc, carbon faces over a rigid foam core. 1985-91: carbon-braid rim, sealed-bearing hubs, front 650 950 g, rear 700 1140 g. 1997: alloy SUP UB Control rim, FTS hub, road 1300 g, track tubular 980 g."}
{"component_id":3399,"source_ref":307,"description":"Mavic 501, France, 245 grams (Spec), front; 290 g rear (with skewers). Road hub, anodised alloy, sealed adjustable cartridge bearings: rear 130 mm (reducible to 126), flanges 45 mm apart for even 8-speed tension; front 100 mm; 28/32/36 holes."}
{"component_id":3404,"source_ref":305,"description":"Mavic 571/2, France. Second-generation 571 road freehub, 32 holes in the ZMS 8000 group with the 571 CB 12/23 cogs."}
{"component_id":1192,"source_ref":305,"description":"Mavic 571, France. 8-speed cassette for the 571 / 577 freehubs: tempered chromed steel cogs with hook-shaped teeth (Mavic patent), 13-28 T on spacers locked by a threaded 12, 13 or 14 T first cog; 4.8 mm spacing (5.0 mm on the 577)."}
{"component_id":9973,"source_ref":305,"description":"Mavic ZMS 800, France. First microprocessor-controlled rear derailleur (Zap Mavic System): two bar zap buttons, microprocessor in the bar end; upper jockey drives a cam and rack, a solenoid locks the shift; 0.1 s shifts, self-indexing."}
```

## Full English catalogue (1995) — applied and validated

Source: [24-page PDF](https://www.bikecatalogs.com/download/3660), a mirror of
the Disraeli Gears scans (cover prints 1995; Jaropa/Leiden distributor
sticker). Reused existing source **449**, `Mavic catalogue (1995)`; no
duplicate source registered. All 24 pages read; tables pp. 10–17 and
component pages pp. 18–23 spot-checked at full size against the transcription.

Product pages: p. 6 (575 hub teaser), 10 (Comète disc and AR hub units),
11 (Cosmic and Cosmic Carbon wheels), 12–13 (MTB rims 230/231/261,
121/117/217), 14–17 (road, tubular and trekking rims), 18 (ZAP 8000
derailleur and controls), 19 (575 and 501 hubs), 20 (631/2 crankset, 610 BB),
21 (610 URD lengths, headsets 305/315/316/317, 451 brake), 22 (front
derailleurs 860/862/870/872; tools list skipped), 23 (821 levers, 355 bar,
357 kit). Skipped: cover/intro/history/contents pp. 1–3, technology text
pp. 4–5 and 7–9 (other than the NEW markers), back cover p. 24.

New versus 1994: **575 road hubs** (NEW, pp. 6/19) and the **Cosmic**
aluminium and **Cosmic Carbon** wheels (NEW, pp. 4/7/11; absent from the full
1994 catalogue). Dropped versus 1994: Module 4, Montlhéry Pro, GEL 280,
M 281, T 231, 217 D, M 261 SBP Ceramic, 3G Carbon, AV 502/AV 522 and the
non-HG AR 572/2 cartridges, 571/2 hubs, 571 cassette, 616 BB, generic 631
crank, 840/841 rear derailleurs. Absence only caps attestation; no rows were
shortened. Printed anomalies kept out of the DB: p. 17 Module 3 CD ETRTO
`630x15 (700C)` (p. 14 says 622x15), Paris-Roubaix SSC `rim end spoke 700`,
and the garbled 316/317 thread diameters `11.8x26`/`11.4x26`.

Decisions:

- Same-spec 1995 attestations extend `year_to` 1994 → 1995 and change
  edition qualifiers to "1994/95" (rims 8191, 8192, 12098, 8177, 5085, 5048,
  5050, 5101, 5067, 12100; Comète hub units 12103, 12105, 12107; 9973; 12108;
  8194; headsets 3049, 3047, 3048; brake 856; front derailleurs 2407, 2411,
  2409, 8187; 6087; 2863; 2864).
- Years unchanged, description qualifiers updated: 9977, 5074 (630x13 MA 2 is
  32/36h in 1995, 36h in 1994), 5097, 5107, 10595, 5069, 5082 (the 1995
  26in Mach 2 column is the existing 650/586 mm OD configuration), 8193, 10184.
- `year_from` moved **earlier** 1996 → 1995: 10625 Cosmic Alu UB Control and
  9986 Cosmic Carbone (now carries the 1995 700c/26in, HG, 870/1140 g figures;
  the later FTS/ED/50 mm details are qualified as later). No `year_from` moved
  later.
- 9973 keeps its `Mavic ZMS 800` title; its description records that 1995
  names it the ZAP 8000 derailleur. 4348 and 6088 stay separate as in 1994.
- Inserted **12109 `Mavic 575`** (Hubs, 1995–1995, group NULL, mirrors 3399):
  front 140 g, rear 275 g, each excluding an 85 g "locknut".
- Not changed: 5083 Mach 2 Ceramic (650c); 365 451 lever (a lever is pictured
  on p. 21 but not named).
- Follow-up, user approved: capped 3404 571/2 `year_to` 1995 → 1994
  (`source_ref` 480 → 449). The full 1995 catalogue lists only 501/575 road
  hubs; the 1995 end came from a source before 305 and was carried
  unchanged through the ZMS brochure and 1994 passes. 3404 has no bike links
  or generator overrides; restore with `year_to = 1995, source_ref = 480`.
  Re-run affected 0 rows; bike-link comparison unchanged.

### Application and validation

Applied 2026-11-19: 38 guarded updates and 1 insert, all setting
`source_ref` 449. Re-runs affected zero rows. A full before/after Mavic
readback changed exactly the 38 planned rows and added only 12109. Every
description is 255 characters or fewer (longest 247). `compare-bike-links.js`
matched the 1994 post-load baseline: 109 catalogues, 23,410 specs, 23,395
unchanged, 0 gained/changed, and the same 15 pre-existing Huret Rival losses.
The Mavic duplicate report kept the same 13 pairs (6 configuration,
5 generation, 2 variant); near and parenthetical reports show 0 pairs. None of
the changed IDs carries a year-ranged generator override.

### Description spacing normalisation — 2026-11-19, applied

The 1994 load (source 480) and one earlier pedal row stored descriptions with
spaces dropped before numbers ("tyres up to37mm", "1990/91:410g;1994"). The
1995 rewrites above fixed the rows they touched. A separate formatting-only pass
rewrote 20 more rows (3838, 5066, 5071, 5072, 5086, 5092, 5102, 9970, 9976,
10182, 10598, 12058–12062, 12095–12097, 12099), each guarded on its exact old
text, with `source_ref` unchanged. 20 rows were affected and a re-run affected
0. The remaining pattern hits are only unit style (`20.5mm`, `193g`), shared
across sources, or velobase commas with no following space (4343, 6974, 6823);
these were not changed.

### Restoration baseline

Original values of every changed field (the 1995 load first, then the spacing
pass). 12109 is independently evidenced catalogue data and is not removed by
restoring these.

```jsonl
{"component_id": 856, "source_ref": 480, "year_to": 1994}
{"component_id": 2407, "source_ref": 480, "year_to": 1994}
{"component_id": 2409, "source_ref": 480, "description": "Clamp-on triple front derailleur with forged anodised 2014 alloy body, hard-anodised black links and case-hardened matt-chromed steel cage. 1994 specification 120 g; 1988 specification 110 g.", "year_to": 1994}
{"component_id": 2411, "source_ref": 480, "year_to": 1994}
{"component_id": 2863, "source_ref": 480, "year_to": 1994}
{"component_id": 2864, "source_ref": 480, "year_to": 1994}
{"component_id": 3047, "source_ref": 480, "description": "ATB threaded headset, 1 1/8 in x 26; cups 34 mm, crown 30 mm, adjustable stack 38-44 mm. Allen locking ring, anodised alloy cups and stainless races/balls. 1994 specification 155 g; c.1990 manual 145 g.", "year_to": 1994}
{"component_id": 3048, "source_ref": 480, "description": "ATB threaded headset, 1 1/4 in x 26; cups 37 mm, crown 33 mm, adjustable stack 38-44 mm. Allen locking ring, anodised alloy cups and stainless races/balls. 1994 specification 145 g; c.1990 manual 155 g.", "year_to": 1994}
{"component_id": 3049, "source_ref": 480, "description": "Road threaded headset with 2.5 mm allen locking ring, anodised 2030 alloy cups, stainless races/balls and plastic/labyrinth seals. 25.4 x 24, crown 26.4 mm, cups 30.2 mm; 108 g in 1994, earlier 118/119 g; reported specimen 116 g.", "year_to": 1994}
{"component_id": 5048, "source_ref": 480, "description": "Hard-CD anthracite touring clincher, 22mm wide, double stainless eyelets. Earlier 700c/27in: 36/40h, 530/535g. 1994 622x15: 36/40h, 505g; 22-28mm tyres. For touring and cyclo-camping.", "year_to": 1994}
{"component_id": 5050, "source_ref": 480, "description": "Aluminium clincher, 19mm wide, single stainless eyelets. A silver-anodised 700c specimen has32 holes. 1994 maker: clear-anodised 622x13, 36h, 470g, 15.5mm high; for19-25mm tyres.", "year_to": 1994}
{"component_id": 5067, "source_ref": 480, "description": "Hard-CD tubular, double stainless eyelets; road racing, time trials and triathlon. Earlier:700/650/600,24-36h,330/310/290g. 1994:700/633mm outside diameter,20mm wide,13mm high,32h,330g. Red label variant.", "year_to": 1994}
{"component_id": 5069, "source_ref": 480, "description": "Hard-CD road tubular, double eyelets; measured average401g. Earlier:20mm,24-40h,395g. 1994:700/633mm outside diameter,20.5mm wide,14.5mm high,32/36h,480g; 1997 reissue also480g. Red label variant."}
{"component_id": 5074, "source_ref": 480, "description": "Clincher, double eyelets; 19-25mm tyres. Earlier: 700c/27in, 32/36/40h, 430/435g. 1994 FB: 622x13, 32/36h, 460g or 630x13, 36h, 465g; 20.5mm wide, 14mm high. Measured average 444g. Red/Green labels."}
{"component_id": 5082, "source_ref": 480, "description": "Hard-CD aero tubular, 19mm wide, double stainless eyelets. Earlier:700 24-36h/470g,650 437g,600 24/28h/396g. 1994:18.9mm high;700(633mm OD)32/36h,470g or650(586mm OD)28/32h,437g."}
{"component_id": 5085, "source_ref": 480, "description": "Silver-anodised touring clincher, 22mm wide, double stainless eyelets. Earlier 700c/27in/650B: 36/40h, 530/535/490g (650B 480g in 1984). 1994 622x15 SBP: 36h, 505g, 22-28mm tyres.", "year_to": 1994}
{"component_id": 5097, "source_ref": 480, "description": "Hard-CD clincher, 19mm wide, 17.2mm high, double stainless eyelets; 18-23mm tyres. 1988/89: 395/360g; 1990/91: 420/385g. 1994 622/571x13: 430/395g, 28/32/36h."}
{"component_id": 5101, "source_ref": 480, "description": "Silver SBP aluminium clincher, 622x13, 19mm wide and high, double stainless eyelets, SUP welded joint; 28/32/36h, 470g, for18-23mm tyres.", "year_to": 1994}
{"component_id": 5107, "source_ref": 480, "description": "700c clincher, SUP joint, UB Control, double eyelets, 28/32/36h. 1994 SBP: 622x13, 18.5mm wide, 17.8mm high, 430g. 1997: 410g, CD/CD Ceramic/blue/silver, 18-23mm tyres. Measured average394g; tubular separate."}
{"component_id": 6087, "source_ref": 480, "description": "Down-tube shifters for 840/841: retrofriction left, indexed right, forged silver-anodised 2014 alloy; supplied with pre-stretched PTFE-coated stainless cables and anti-compression housing. 1994 weight 130 g/pair; earlier specification 77 g.", "year_to": 1994}
{"component_id": 8177, "source_ref": 480, "description": "Silver-anodised touring clincher, double stainless eyelets; 19-25mm tyres. Earlier 700c/27in: 430/435g, 32/36h. 1994 SBP: 622x13, 32/36h, 460g; 20.5mm wide, 14mm high.", "year_to": 1994}
{"component_id": 8187, "source_ref": 480, "description": "Triple front derailleur for Italian-type braze-on mount; forged anodised 2014 alloy body, hard-anodised black links and case-hardened matt-chromed steel cage. 1994 specification 110 g; 1988 specification 100 g.", "year_to": 1994}
{"component_id": 8191, "source_ref": 480, "description": "Silver-anodised PSP-profile MTB clincher,559x17,23mm wide,14.6mm high; single stainless eyelets,28/32/36h, cantilever-angled braking flanks, tyres up to37mm. 1990/91:410g;1994 SBP:440g.", "year_to": 1994}
{"component_id": 8192, "source_ref": 480, "description": "Hard-CD PSP-profile MTB clincher,559x20,26mm wide,15.4mm high, double stainless eyelets, cantilever-angled braking flanks. Earlier flash-bright plus50-micron anodising:28/32/36h,460g;1994:32/36h,480g.", "year_to": 1994}
{"component_id": 8193, "source_ref": 480, "description": "Professional hard-CD tubular, selected alloys and close tolerances;80-micron anodising, double stainless eyelets. 21.5mm wide,12.7mm high,700/633mm outside diameter,400g. Earlier24-40h;1994 and1997:28/32/36h."}
{"component_id": 8194, "source_ref": 480, "year_to": 1994}
{"component_id": 9973, "source_ref": 480, "description": "Zap electronic 8-speed rear derailleur: alloy body, hard-treated aluminium column, Delrin guide, Kevlar-composite cage. Upper jockey powers cam/rack shifting; two bar switches and bar-end processor/battery. Derailleur 240 g, controls 95 g.", "year_to": 1994}
{"component_id": 9977, "source_ref": 480, "description": "26in MTB clincher,22mm wide,SUP,UB Control. 1994 SBP/TIB:559x17,19.5mm high,single stainless eyelets,28/32/36h,410g. 1997:410g,Ceramic420g,CD double-eyelet440g (also40h);silver/Sunset/CD/CD Ceramic. D variants separate."}
{"component_id": 9986, "source_ref": 353, "description": "Mavic Cosmic Carbone, France. 50 mm carbon fairing on an SUP UB Control alloy rim, integrated nipples, 16 flat spokes, FTS hub; tubular or clincher, HG or ED; 700c 880/1090 g, 650c 730/795 g. Atlanta 1996 gold (Pascal Richard).", "year_from": 1996}
{"component_id": 10184, "source_ref": 480, "description": "Silver-anodised 700c trekking clincher,622x17,22mm wide,19.5mm high,SUP welded joint,UB Control,double stainless eyelets;470g,22-28mm tyres. 1994 SBP:32/36h;later36/40/48h. Touring and tandems."}
{"component_id": 10595, "source_ref": 480, "description": "Titanium-colour clincher, SUP, UB Control, double stainless eyelets, 28/32/36h. 1994 maker: 622x13, 18.5mm wide, 17.8mm high, 430g. 1995/96 dealer:19mm,480g; 1996 maker:410g. For18-23mm tyres."}
{"component_id": 10625, "source_ref": 357, "year_from": 1996}
{"component_id": 12098, "source_ref": 480, "description": "Silver SBP 26in MTB clincher,559x17,23mm wide,19mm high, single stainless eyelets, SUP welded joint and PSP profile;28/32/36h,450g.", "year_to": 1994}
{"component_id": 12100, "source_ref": 480, "description": "Titanium-colour TIB 700c trekking clincher,622x17,22mm wide,19.5mm high,double stainless eyelets,SUP welded joint and UB Control braking surfaces;32/36h,470g. Distinct from26in217.", "year_to": 1994}
{"component_id": 12103, "source_ref": 480, "year_to": 1994}
{"component_id": 12105, "source_ref": 480, "year_to": 1994}
{"component_id": 12107, "source_ref": 480, "year_to": 1994}
{"component_id": 12108, "source_ref": 480, "year_to": 1994}
{"component_id": 3838, "description": "646 LMS/SSC Look-cleat pedal; sealed/needle bearings, adjustable tension, 9/16x20.1990 dealer:carbon/alu body, 440g pair, 0-10deg lateral float, 32deg cornering. Maker:480g pair, 0-5deg heel movement; legacy496g listing."}
{"component_id": 5066, "description": "Hard-CD tubular, 20mm wide, double stainless eyelets; time trials, hill climbs and triathlon, 0.8mm walls. Earlier:700c,28-36h,280g. 1994:700/633mm outside diameter,13mm high,28/32h,280g. Measured average295g."}
{"component_id": 5071, "description": "Hard-CD PSP-profile MTB clincher,559x17,23mm wide,14.6mm high; single stainless eyelets,28/32/36h,3-degree braking flanks, tyres up to37mm. Earlier flash-bright plus50-micron hard anodising:410g;1994:440g."}
{"component_id": 5072, "description": "Silver-anodised PSP-profile MTB clincher,559x20,26mm wide,15.4mm high, cantilever-angled braking flanks, double stainless eyelets. 1990/91:28/32/36h,460g. 1994-96 SBP:32/36h,480g."}
{"component_id": 5086, "description": "Touring/tandem clincher, double eyelets; 28-35mm tyres. Earlier 700c/27in/650B/650A: 36/40h (700c also48h), 550/560/520/530g. 1994 622x19 SBP: 26mm wide, 36/40/48h, 570g. Reported actual weight596g."}
{"component_id": 5092, "description": "Bright-anodised tubular for road racing, training and sportive use. Earlier:20mm, 24-40h, 395g. 1994:700/633mm outside diameter,20.5mm wide,14.5mm high, double stainless eyelets,32/36h,480g. Measured average399g."}
{"component_id": 5102, "description": "Hard-CD aluminium clincher, 622x13, 19mm wide and high, double stainless eyelets, SUP welded joint; 28/32/36h, 470g, for18-23mm tyres. Road racing and training; Ceramic version is separate."}
{"component_id": 9970, "description": "Silver-anodised PSP-profile MTB clincher,559x21,28mm wide,17.2mm high, double stainless eyelets,36h; cantilever-angled braking flanks,44-55mm tyres. 1991:520g;1994 SBP:550g."}
{"component_id": 9976, "description": "26in downhill MTB clincher,28mm wide,SUP joint;CD or CD Ceramic. 1994 CD Ceramic:559x21,18mm high,double stainless eyelets,32/36h,530g. 1995/96 Ceramic:36h,530g. 1997:32/36h,530g;CD recommended for disc brakes."}
{"component_id": 10182, "description": "Silver-anodised 700c trekking clincher,622x20,26mm wide,15.4mm high, PSP profile, double stainless eyelets;540g,28-35mm tyres. 1994/95 SBP:36h;later36/40/48h. Touring and heavy loads."}
{"component_id": 10598, "description": "Hard-CD aluminium clincher with Ceramic braking surfaces, 622x13, 19mm wide and high, double stainless eyelets, SUP welded joint; 28/32/36h, 480g, for18-23mm tyres."}
{"component_id": 12058, "description": "700c aero tubular, silver SBP anodising with Ceramic braking surfaces, 633mm outside diameter,19mm wide,18.9mm high, double stainless eyelets;32/36h,470g."}
{"component_id": 12059, "description": "Silver SBP 26in MTB clincher,559x17,23mm wide,16.2mm high, PSP profile, single stainless eyelets;28/32/36h,380g. For ultralight bicycles."}
{"component_id": 12060, "description": "Titanium-colour TIB 26in MTB clincher,559x17,23mm wide,16.2mm high, PSP profile, single stainless eyelets;28/32/36h,380g. For ultralight bicycles."}
{"component_id": 12061, "description": "Hard-CD 26in MTB clincher,559x17,23mm wide,19mm high, single stainless eyelets, SUP welded joint and PSP profile;28/32/36h,450g."}
{"component_id": 12062, "description": "Hard-CD 26in MTB clincher with Ceramic braking surfaces,559x17,23mm wide,19mm high, single stainless eyelets, SUP welded joint and PSP profile;28/32/36h,460g."}
{"component_id": 12095, "description": "Silver SBP 26in MTB clincher with Ceramic braking surfaces,559x20,26mm wide,15.4mm high,PSP profile,double stainless eyelets;32/36h,480g."}
{"component_id": 12096, "description": "Silver SBP 26in MTB clincher,559x17,22mm wide,19.5mm high, double stainless eyelets, SUP welded joint and UB Control braking surfaces;28/32/36h,450g. D version; single-eyelet217 is separate."}
{"component_id": 12097, "description": "Titanium-colour TIB 26in MTB clincher,559x17,22mm wide,19.5mm high, double stainless eyelets, SUP welded joint and UB Control braking surfaces;28/32/36h,450g. D version; single-eyelet217 is separate."}
{"component_id": 12099, "description": "Silver SBP 700c trekking clincher,622x17,23mm wide,14.6mm high,PSP profile,single stainless eyelets;36h,500g. Distinct from26in M231."}
```

## Rims & Wheels catalogue, GB edition (1999) — full reconciliation, applied and validated

Source: [13-page PDF](https://bikalog.org/api/view/Mavic/1999/mavic99.pdf),
two printed pages per PDF page (printed p = 2×PDF−1 / 2×PDF). Reused existing
source **374**; no duplicate source. All pages read; small print checked from
200–400 dpi crops. The partial OCR text layer is unreliable for figures.

Product pages: MTB wheels pp.10–12 (Crossmax, Crossmax Disc, Crosslink,
Crosslink Disc, Deemax), DH/XC MTB rims pp.12–13, MX 601 hub p.14, BMX rims and
XIXIX wheels p.15, road wheels pp.16–19 (Classics Pro/Elite, Cosmic Equipe/Elite,
Helium, Cosmic Carbone, Comète road/track, Io), road rims pp.20–21, trekking
rims p.22, MR 601 hub p.23, CC9 p.24, CC8 kit / Kit HG/CC9 / disc adapters p.25.
Skipped: pp.1–9 (cover, teams, neutral service, technology, manufacturing,
service). Out of scope: BR 601, BR 601 Composite, BX 601 Composite skewers;
disc adapters, CC8 kit, Kit HG/CC9. Earlier targeted corrections (CC9, Open Pro
p.20, Reflex p.21, T217/T261 p.22) were not reopened.

New versus 1997: the MTB rims are renumbered D321 Disc, D521, X317 Disc, X517,
X222, X138 (none of 121/217/220/221/238 is listed); "New" markers on CXP 33,
T223, XIXIX, Open Pro 650 and a second BMX rim. Absent versus 1997: Crossland
9989, Cosmic Expert 9987, Cosmic Pro 9988, T238 9982; their caps are unchanged.

Applied 2026-11-19 (user approved), all `source_ref` 374:

- Inserted (1999–1999, group NULL, UUID source_id): wheels **12110** Crossmax
  Disc, **12111** Crosslink, **12112** Crosslink Disc, **12113** Deemax,
  **12114** XIXIX, **12115** Classics Pro, **12116** Classics Elite, **12117**
  Cosmic Elite, **12118** Io; rims **12119** D321 Disc, **12120** D521, **12121**
  X317 Disc, **12122** X517, **12123** X222, **12124** X138, **12125** CXP 33 (inserted as `CXP 23`, retitled in the 2000 pass),
  **12126** T138, **12127** T223; hubs **12128** MR 601, **12129** MX 601.
- `year_to` 1997 → 1999 with descriptions: 9990 Crossmax, 9984 X BMX
  (1999 390 g; 1997 375 g), 5063 CXP 30 clincher (1999 550 g, 28/32/36,
  silver), 6972 Comète (track disc with screw-on freewheel).
- Description only: 9986 Cosmic Carbone 571 rear **795 → 995 g** (maker
  prints 995 for clincher and tubular); 9985 Helium adds maker weights
  (700c tubular 650/850, clincher 700/900, 650 clincher 675/875); 10377
  Helium clincher (622x15) 650/850 → 700/900 g — the dealer guide's figure is
  the maker's tubular weight.
- Retitled **10375** `Mavic Cosmic Equipe clincher` → `Mavic Cosmic Equipe`
  (search text likewise); the maker sells clincher 830/1060 and tubular
  780/1010 g.
- No `year_from` moved later; no merges or deletes.

Unresolved, no change made:

- Second BMX rim (p.15, "New"): 406x21 480 g / 507x21 600 g, 32/36/48h,
  black 20in / silver 24in, 31 mm wide. Resolved in the 2000 pass: the 2000
  logo is an X with superscript Y; inserted as 12138 `Mavic XY BMX` (1999–2000).
- X222 has 1997 **220** (9978)'s spec (410 g, silver/steel grey, UB Control)
  and X138 has **238** (9980)'s (450 g, entry level, 32/36h, silver); T138
  (510 g) is close to T238 9982 (500 g). Inserted as new rows because the
  numbers differ; a source naming the renumbering would justify merging.
- Cosmic Equipe (830/1060 g, 18/20 spokes) matches 1997 Cosmic Expert 9987
  (835/1060 g); D521's "1996 and 1997 World Champion" may tie it to 121 9976.
- 3406 `Mavic 601` (velobase, no years) could be MR 601 or MX 601; left alone.
- 10378 Cosmic Carbon clincher stays a configuration row beside 9986, as
  Helium 10376/10377 stay beside 9985.

Validation: every guard matched one row in preflight; the rerun affected zero
rows. Before/after Mavic readback: exactly the 8 planned rows changed and the 20
inserts were added; longest description 254 characters. `compare-bike-links.js`:
109 catalogues, 23,410 specs, 23,395 unchanged, 0 gained/changed, the same 15
Huret Rival losses. Quality report: 0 errors; no finding names a touched row.
Mavic duplicate report still has 13 pairs; CXP 30 5062/5063 is now labelled
generation rather than configuration because 5063's range extended (still
tubular vs clincher, kept apart). No touched row has bike links or generator
overrides.

Restoration baseline (old values; inserts 12110–12129 can be deleted by id):

```jsonl
{"component_id": 9990, "source_ref": 307, "year_to": 1997, "description": "Mavic Crossmax, France. Top MTB wheels: thin-walled oversize SUP Ceramic rim, FTS hub, sealed cartridge bearings; front 26 spokes radial, 650 g; rear 28, crossed three drive side, 850 g (no skewers); new skewer, wheel bag. Atlanta 1996."}
{"component_id": 9984, "source_ref": 307, "year_to": 1997, "description": "Mavic X BMX (logo \"X\" with a superscript x), France. 20 in (406 x 21) BMX rim, SUP joint, UB Control, double wall, double eyelets, 28 mm wide, 375 g, 32/36 holes; Ceramic version; black."}
{"component_id": 5063, "source_ref": 307, "year_to": 1997, "description": "Mavic CXP 30 (clincher), France. Deep-section aero clincher, \"cousin to the Cosmic\", SUP joint, UB Control sidewalls, 520 g, 24/28/32/36 holes, 700c, for 18-23 mm tyres; titanium or silver."}
{"component_id": 6972, "source_ref": 480, "year_to": 1997, "description": "Composite lenticular disc. 1985-91: front 650 950 g, rear 700 1140 g. 1994: 700c tubular, 18 mm rim, 990 g without interchangeable hub cartridge. 1997: alloy SUP UB Control rim, FTS hub; road 1300 g, track tubular 980 g."}
{"component_id": 9986, "source_ref": 449, "description": "Carbon-fibre fairing on an alloy rim, 16 profiled spokes (radial front, 1-cross rear); tubular or clincher. 1995: 700c or 26in, HG cartridge, 870/1140 g. Later: 50 mm fairing, SUP UB Control rim, FTS hub, HG or ED; 700c 880/1090 g, 650c 730/795 g."}
{"component_id": 9985, "source_ref": 353, "description": "Mavic Helium, France. Light road wheels: red SUP UB Control rims, FTS hub, sealed cartridge bearings; 26 straight-pull radial front, 28 rear crossed three drive side; 700c tubular or clincher, HG or ED; 650 g / 850 g. Pro launch July 1996."}
{"component_id": 10375, "source_ref": 353, "title": "Mavic Cosmic Equipe clincher", "search_text": "Mavic Cosmic Equipe clincher", "description": "Maxtal alloy rim; 700x13; 18/20 spokes; road; clincher, black anodised rim, FTS freehub HG and ED 9v (Mavic CC9), composite quick release, carry bag; 830/1060 g"}
{"component_id": 10377, "source_ref": 353, "description": "Alloy rim; 622x15; 26/28 spokes; road racing; double-wall clincher rim, welded and milled SUP and UB Control, red anodised, double bushing, FTS freehub HG and ED 9v, high-leverage quick release; 650/850 g"}
```

## Catalogue, GB edition (2000) — full reconciliation, applied and validated

Source: [24-page PDF](https://www.bikecatalogs.com/download/3662), 300 ppi
scans with no text layer; printed page = PDF page. Reused existing source
**478**; its citation no longer says other components were not audited. Product
pages pp.7–22 were transcribed from 300 dpi half-page crops. Doubtful weights and
logos were re-checked at full size: Ksyrium 700/900 g printed for both clincher and
tubular, Helium clincher 750 g, Classics Elite 835 g, CXP33, MA3, XY BMX and F519.

Product pages: Mektronic p.7; SSC cranks/BB/chainrings p.8; SSC brakes,
headset, chain and front derailleur p.9; road wheels pp.10–12; Comète and Io
p.13; road rims p.14; road/touring rims p.15; MTB wheels pp.17–19; MTB rims
pp.20–21; BMX p.22. Skipped: cover, contents/what's new pp.1–3, technology
pp.4–5, SSC intro p.6, Crossmax UST feature p.16, customer service p.23 and back
cover. Out of scope: the Mektronic computer board and speed sensor, disc brake
adapters and the M9 cassette (compatibility note only). The Open Pro p.14
correction recorded above was not reopened.

New in 2000: the SSC/Mektronic group ("a new group", p.6), Ksyrium SSC, Cosmic
Carbone SSC (20 rear spokes, replacing the 16/16 wheel), Crossmax UST, Crossride,
MA3, T519, T221, X221 and F519. Absent versus 1999: Cosmic Equipe, Crosslink
(non-disc), CXP 30 clincher/tubular, T217, T261, T138, X222, X138, MR/MX 601 and
the CC9 page. Absence only caps attestation; none was shortened.

Applied 2026-11-19 (user approved), all `source_ref` 478:

- Inserted (2000–2000, UUID source_id): wheels **12130** Ksyrium SSC, **12131**
  Cosmic Carbone SSC, **12132** Crossmax UST, **12133** Crossride; rims **12134**
  T519, **12135** T221, **12136** X221, **12137** F519, **12138** XY BMX
  (1999–2000, the 1999 p.15 rim previously left unnamed); Shifting Brake Levers
  (group 274) **12139** Mektronic multi-position levers, **12140** Mektronic
  Racing levers; SSC group 31 **12141** crankset, **12142** bottom bracket,
  **12143** brakes, **12144** headset, **12145** chain, **12146** front
  derailleur, each titled `Mavic SSC … (2000)` because no part numbers are
  printed.
- Dated velobase placeholders: **5081** `Mavic MA3` and **4344** `Mavic
  Mektronic` (rear derailleur, group 274), both NULL → 2000–2000, with
  catalogue descriptions.
- **12125** retitled `Mavic CXP 23` → `Mavic CXP 33` (search text likewise).
  This corrects a 1999 logo misreading; both editions print CXP33.
- `year_to` 1999 → 2000 only: 12115 Classics Pro, 12118 Io, 9990 Crossmax,
  12110 Crossmax Disc, 12112 Crosslink Disc, 12113 Deemax, 12114 XIXIX, 12127
  T223, 12120 D521, 12119 D321 Disc, 9984 X BMX, Reflex 10197/10198/11566/11567.
- `year_to` → 2000 with description: 6972 Comète; 9985 Helium (2000 clincher
  front 750 g, 1999 700 g); 12117 Cosmic Elite (30 mm black rim); 12116
  Classics Elite (885 g in 1999, 835 g in 2000); 12122 X517 and 12121 X317 Disc
  (per-edition colours).
- No `year_from` moved later; no merges or deletes.

Unresolved, no change made:

- Resolved by the 1999 Mektronic launch catalogue (source 481): 4344 and 12139
  now start in 1999; 12140 Racing levers stays 2000.
- F519's logo first letter is partly hidden by the panel bar; the reading fits
  a stylised F. Profile figures were omitted because the transcription returned
  T519's numbers.
- 6975 `Mavic SSC Ksyrium SL` (velobase, no years) is a later model, not
  Ksyrium SSC; it was left alone.

Validation: every guard matched one row in preflight; preflight also caught
that MA3 existed as 5081, so it became an update rather than an insert. The
rerun affected zero rows. Before/after Mavic readback: exactly the 24 planned
component rows changed and 17 were added; longest description 252 characters.
`compare-bike-links.js`: 109 catalogues, 23,410 specs, 23,395 unchanged, 0
gained/changed, the same 15 Huret Rival losses. Quality report: 0 errors;
incomplete-date findings fell by 2 (4344, 5081); no finding names a touched
row. Mavic duplicate report: still 13 pairs, none involving a touched row.
No touched row has bike links or generator overrides.

Restoration baseline (old values; inserts 12130–12146 can be deleted by id;
source 478's old citation ended `printed/PDF p.14 Open Pro decal and finish
comparison only; other components not audited.`):

```jsonl
{"component_id":4344,"year_from":null,"year_to":null,"source_ref":1,"description":"Mavic Mektronic, France"}
{"component_id":5081,"year_from":null,"year_to":null,"source_ref":1,"description":"Mavic MA3, France"}
{"component_id":6972,"year_to":1999,"source_ref":374,"description":"Composite lenticular disc. 1985-91: front 650 950 g, rear 700 1140 g. 1994: 700c tubular, 18 mm rim, 990 g without hub cartridge. 1997-99: SUP rim; road rear FTS, UB Control, 1300 g; track rear 980 g, screw-on freewheel; clincher or tubular."}
{"component_id":9984,"year_to":1999,"source_ref":374}
{"component_id":9985,"year_to":1999,"source_ref":374,"description":"Light road wheels: red SUP or Maxtal rim, UB Control; FTS hub, sealed cartridge bearings, HG or ED/CC9; 26 straight-pull radial front, 28 rear crossed 3 drive side. 700c tubular 650/850 g, clincher 700/900 g; 650 clincher 675/875 g. Pro launch July 1996."}
{"component_id":9990,"year_to":1999,"source_ref":374}
{"component_id":10197,"year_to":1999,"source_ref":374}
{"component_id":10198,"year_to":1999,"source_ref":357}
{"component_id":11566,"year_to":1999,"source_ref":374}
{"component_id":11567,"year_to":1999,"source_ref":374}
{"component_id":12110,"year_to":1999,"source_ref":374}
{"component_id":12112,"year_to":1999,"source_ref":374}
{"component_id":12113,"year_to":1999,"source_ref":374}
{"component_id":12114,"year_to":1999,"source_ref":374}
{"component_id":12115,"year_to":1999,"source_ref":374}
{"component_id":12116,"year_to":1999,"source_ref":374,"description":"Road clincher wheels: Maxtal SUP rim with UB Control sidewalls; hub with integrated freewheel, sealed cartridge bearings, 8/9-speed HG or Mavic CC9; 32 straight-pull spokes crossed 3; brass nipples, quick release; front 885 g, rear 1065 g."}
{"component_id":12117,"year_to":1999,"source_ref":374,"description":"Aero road clincher wheels: SUP rim, profiled eyelets, UB Control sidewalls; hub with integrated freewheel, sealed cartridge bearings, 8/9-speed HG or CC9; 20 spokes radial front, crossed 2 rear drive side; quick release; front 850 g, rear 1095 g."}
{"component_id":12118,"year_to":1999,"source_ref":374}
{"component_id":12119,"year_to":1999,"source_ref":374}
{"component_id":12120,"year_to":1999,"source_ref":374}
{"component_id":12121,"year_to":1999,"source_ref":374,"description":"26in cross-country MTB rim for disc brakes, Maxtal SUP, no braking surface, reinforced upper bridge; 23.4 mm wide, 19 mm high; 395 g, 32/36 holes; silver, citron or CD."}
{"component_id":12122,"year_to":1999,"source_ref":374,"description":"26in cross-country MTB rim, Maxtal SUP, UB Control or Ceramic; 21.6 mm wide, 18.5 mm high; 395 g, 28/32/36 holes; silver, citron, CD or CD Ceramic."}
{"component_id":12125,"title":"Mavic CXP 23","search_text":"Mavic CXP 23","year_to":1999,"source_ref":374,"description":"Aero road clincher, 700c or 650 (26in), Maxtal SUP, profiled eyelets, UB Control; 19.4 mm wide, 23.6 mm high; 470 g (700c) / 430 g (650), 28/32/36 holes, for 18-23 mm tyres; silver, black or Helium red."}
{"component_id":12127,"year_to":1999,"source_ref":374}
```

## Retailer catalogue, USA edition (2001) — full reconciliation, applied and validated

Source: [28-page PDF](https://www.bikecatalogs.com/download/3663), 300 ppi
scans with no text layer; printed page = PDF page. Reused existing source
**479**; its citation no longer says other components were not audited. Product
pages 8–12, 16–23 and 27 were transcribed from 300 dpi half-page crops. Weights
that differ from 2000 were re-checked at full size: Ksyrium, Cosmic Carbone
SSC, Classics SSC, Crossmax UST and MA3.

Product pages: UST wheels pp.8–9, Crossride p.10, MTB rims p.11, Deemax and
downhill rims p.12, Mektronic p.16, SSC gruppo components p.17, SSC wheels
pp.18–19, Cosmos p.20, Cosmic Elite and freehub compatibility p.21, road and
touring rims p.22, track wheels p.23, M10 cassette p.27. Skipped: cover, what's
new/contents pp.2–3, technology pp.4–5, UST explainer pp.6–7, photo p.13,
gruppo intro pp.14–15, service/info/tyre pressures pp.24–26 and back cover.
Out of scope: computer board/speed sensor, disc brake adapters, wheel bags.
The Open Pro p.22 correction recorded above was not reopened.

New in 2001 (p.2 "What's new"): the FTS L freehub (−40 g) on the SSC wheels;
Classics becomes SSC with Ceramic braking; three new UST wheels (Crossmax UST
Disc, Crossroc UST, Crossroc UST Disc); also Crossride Ceramic, Cosmos, X618 and
the M10 9/10-speed cassette (M10/ED10 freehub bodies replace M9). Absent versus
2000: Helium, Classics Pro, Classics Elite, Crossmax, Crossmax Disc, Crosslink
Disc, T223, all BMX products, and the SSC chain and headset. Absence only caps
attestation; none was shortened.

Applied 2026-11-20 (user approved), all `source_ref` 479:

- Inserted (2001–2001, UUID source_id): wheels **12147** Crossmax UST Disc,
  **12148** Crossroc UST Disc, **12149** Crossroc UST, **12150** Crossride
  Ceramic, **12151** Classics SSC, **12152** Cosmos; rim **12153** X618;
  cassette **12154** M10 cassette.
- `year_to` 2000 → 2001 only: 12133 Crossride, 12113 Deemax, 12118 Io, 12125
  CXP 33, Reflex 10197/10198/11566/11567, 12135 T221, 12134 T519, 12136 X221,
  12137 F519, 12122 X517, 12121 X317 Disc, 12119 D321 Disc, 12120 D521, 4344
  Mektronic rear derailleur, 12139/12140 Mektronic levers, SSC 12141 crankset,
  12142 bottom bracket, 12143 brakes, 12146 front derailleur.
- `year_to` → 2001 with description: 12132 Crossmax UST (2000 690/890 g, 2001
  710/860 g); 12130 Ksyrium SSC (2001 FTS L, M10/ED10, clincher 740/885 g,
  tubular 700/860 g); 12131 Cosmic Carbone SSC (2001 clincher 880/1050 g,
  tubular 885/1100 g); 12117 Cosmic Elite (2001 M10); 6972 Comète
  (1997–2001); 5081 MA3 (2000 490 g, 2001 470 g).
- SSC group rows keep their `(2000)` title suffix, which marks the generation
  start as in `Ksyrium Elite (2002)`.
- No `year_from` moved later; no merges or deletes.

Printed contradictions, resolved as stated:

- Cosmic Elite: BENEFITS says 24/28 spokes, TECHNICAL FEATURES 20 front and
  rear. 20 is kept; the description mentions the 24/28 text.
- Crossride Ceramic: TECHNICAL FEATURES say UB Control (apparently copied from
  Crossride); BENEFITS and the icon say Ceramic, which the row follows.
- Crossroc UST: USE calls it a "disc wheel", but it has no disc mount and
  carries the UB Control icon; described as the rim-brake version of 12148.

Unresolved, no change made: the MTB rim colour chips (pp.11–12) are too small
to read reliably, so those rows got date changes only. The T519 photo decal may
read "509". Classics SSC 12151 succeeds Classics Pro 12115 but stays a separate
row (new name, Ceramic braking, FTS L).

Validation: every guard matched one row in preflight; the rerun affected zero
rows. Before/after Mavic readback: exactly the 29 planned component rows changed
and 8 were added; longest description 254 characters. `compare-bike-links.js`:
109 catalogues, 23,410 specs, 23,395 unchanged, 0 gained/changed, the same 15
Huret Rival losses. Quality report: 0 errors; no finding names a touched row.
Mavic duplicate report: still 13 pairs; only the existing Comète / Comète ±
variant pair involves a touched row. No touched row has bike links or generator
overrides.

Restoration baseline (old values; inserts 12147–12154 can be deleted by id;
source 479's old citation ended `printed/PDF p.22 blue Open Pro decal comparison
only; other components not audited.`):

```jsonl
{"component_id":4344,"year_to":2000,"source_ref":478}
{"component_id":5081,"year_to":2000,"source_ref":478,"description":"700c road clincher, double wall, eyeleted, UB Control; 20.2 mm wide, 16 mm high; 490 g, 32/36 holes, for 19-23 mm tyres; silver, Helium red or CD."}
{"component_id":6972,"year_to":2000,"source_ref":478,"description":"Composite lenticular disc. 1985-91: front 650 950 g, rear 700 1140 g. 1994: 700c tubular, 18 mm rim, 990 g without hub cartridge. 1997-2000: SUP rim; road rear FTS, UB Control, 1300 g; track rear 980 g, screw-on freewheel; clincher or tubular."}
{"component_id":10197,"year_to":2000,"source_ref":478}
{"component_id":10198,"year_to":2000,"source_ref":478}
{"component_id":11566,"year_to":2000,"source_ref":478}
{"component_id":11567,"year_to":2000,"source_ref":478}
{"component_id":12113,"year_to":2000,"source_ref":478}
{"component_id":12117,"year_to":2000,"source_ref":478,"description":"Aero road clincher wheels: black-anodised 30 mm SUP rim, profiled eyelets, UB Control; hub with integrated freewheel, sealed bearings, HG/CC9 (2000 M9); 20 flat spokes, radial front, rear crossed 2 drive side; quick release; front 850 g, rear 1095 g."}
{"component_id":12118,"year_to":2000,"source_ref":478}
{"component_id":12119,"year_to":2000,"source_ref":478}
{"component_id":12120,"year_to":2000,"source_ref":478}
{"component_id":12121,"year_to":2000,"source_ref":478}
{"component_id":12122,"year_to":2000,"source_ref":478}
{"component_id":12125,"year_to":2000,"source_ref":478}
{"component_id":12130,"year_to":2000,"source_ref":478,"description":"Road wheels, clincher or tubular: black-anodised Maxtal SUP rim, Fore drilling (no rim tape), UB Control; FTS hub, QRM sealed bearings, M9 freehub; Zicral straight-pull spokes, integrated alloy nipples, 18 radial front, 20 Isopulse rear; 700/900 g."}
{"component_id":12131,"year_to":2000,"source_ref":478,"description":"Aero road wheels, clincher or tubular: SUP alloy rim with 50 mm unidirectional carbon segments, integrated nipples; FTS hub, QRM bearings, M9 freehub; flat spokes, 16 radial front, 20 rear crossed 2 drive side; 700c 880/1090 g, 650 tubular 730/995 g."}
{"component_id":12132,"year_to":2000,"source_ref":478,"description":"Tubeless UST MTB cross-country wheels: black-anodised Maxtal SUP rim, Fore drilling, Ceramic 2 sidewalls; FTS hub, QRM bearings, HG; Zicral straight-pull spokes, alloy nipples, 18 radial front, 20 Isopulse rear; front 690 g, rear 890 g. UST tyres only."}
{"component_id":12133,"year_to":2000,"source_ref":478}
{"component_id":12134,"year_to":2000,"source_ref":478}
{"component_id":12135,"year_to":2000,"source_ref":478}
{"component_id":12136,"year_to":2000,"source_ref":478}
{"component_id":12137,"year_to":2000,"source_ref":478}
{"component_id":12139,"year_to":2000,"source_ref":478}
{"component_id":12140,"year_to":2000,"source_ref":478}
{"component_id":12141,"year_to":2000,"source_ref":478}
{"component_id":12142,"year_to":2000,"source_ref":478}
{"component_id":12143,"year_to":2000,"source_ref":478}
{"component_id":12146,"year_to":2000,"source_ref":478}
```

## Mektronic launch catalogue, GB edition (1999) — applied and validated

Source: [19-page landscape PDF](https://www.bikecatalogs.com/download/3661)
([listing](https://www.bikecatalogs.com/document/3661)), cover "1999 GB",
300 ppi scans with no text layer. Registered as new source **481**, `Mavic
Mektronic launch catalogue, GB edition (1999)`, country GB; no earlier source
covered it. All pages read directly (small pages, no subagent transcription).

Content: concept and WIN wireless system pp.2–3; levers pp.4–6 (385 g a pair;
one aero position, two right-lever shifter buttons, continuous friction
chainring shift on the left lever, integrated caliper release); computer pp.7–9
(40 g, 60 g with bracket; out of scope); rear derailleur pp.10–12 (235 g, HG
9-speed spacing, 30T capacity, 28T largest sprocket, direct shift to the small
cog, shifts up to 3 sprockets at once, indexing in the derailleur, battery 2
years or 30,000 km); kits pp.13–15 (levers kit, triathlon levers kit,
derailleur kit, triathlon option); front derailleur, battery, magnet and the
indexation compatibility table p.16 (HG 9-speed natively; spacer kits for CC9
and ED); ergonomy pp.17–18; back cover p.19. Only the multi-position levers
appear; the "Racing" levers are first attested in 2000.

Applied 2026-11-20 (user approved), `source_ref` 481:

- **4344** `Mavic Mektronic` (rear derailleur): `year_from` 2000 → 1999, with
  the derailleur specification above. This is an earlier attestation, not a
  later move.
- **12139** `Mavic Mektronic multi-position levers`: `year_from` 2000 → 1999;
  the description now gives 385 g as a pair and adds the triathlon kit's
  tri-bar shifter buttons.
- Not changed: 12140 Racing levers stays 2000–2001. The computer, battery and
  magnet are out of scope.

Unresolved, no change made: p.16 shows a Mektronic front derailleur for double
chainrings, braze-on or clamp, with no weight. It looks like SSC front
derailleur **12146** (braze-on, 95 g, 2000–2001), but identity is unproven and
12146 keeps its 2000 start; a dated source naming one derailleur for both would
justify moving it to 1999.

Validation: both guards matched one row; the rerun affected zero rows. Readback
confirmed source 481, both rows at 1999–2001 / source 481 (descriptions 240 and
249 characters), and 12140 / 12146 unchanged. `compare-bike-links.js`: 23,395
of 23,410 specs unchanged, 0 gained/changed, the same 15 Huret Rival losses.
Quality report: 0 errors; no finding names 4344 or 12139. Mavic duplicate
report still has 13 pairs. Neither row has bike links or generator overrides.

Restoration baseline (delete source 481 only after restoring both rows):

```jsonl
{"component_id":4344,"year_from":2000,"source_ref":479,"description":"Mektronic wireless electronic 9-speed rear derailleur, digitally coded radio control from the levers/computer; total capacity 30T, largest sprocket 28T; battery 2 years or 30,000 km; 235 g. Complete system 775 g."}
{"component_id":12139,"year_from":2000,"source_ref":479,"description":"Mektronic ergonomic brake/shift levers, multi-position: extra aero position and two shifter buttons for time trials and triathlon; retro-friction left (front) shift, touch buttons right; integrated caliper release; 385 g."}
```

## Catalogue backlog and scope review — 2026-11-19

Compared the existing reconciliation notes with live `data_source` records
and the [Bike Catalogs Mavic archive](https://www.bikecatalogs.com/brand/mavic).
A source registration, or a component currently citing it, does not establish
that its whole catalogue was ingested: source_ref tracks the latest change,
and later corrections can supersede earlier provenance. Every confirmed
edition this review listed for full reconciliation is now done: the 1994, 1995,
1999 GB, 1999 Mektronic, 2000 GB and 2001 USA catalogues are applied and
validated above. Earlier full
editions can refine existing component identities and dates before moving
through the later wheel ranges. This is a work order, not approval of an
unreviewed DB change set. The historical sections below record substantial
reconciliation for 84/85, 86/87, 88/89, 90/91 and 1997, plus the earlier catalogues
and smaller leaflets; none needs reopening solely because its present-day
source_ref usage is low.

Checked the archive descriptions of three additional listings directly:

- [1992 Components Catalog](https://www.bikecatalogs.com/document/2529)
  is explicitly the six-page trilingual **Les 92** leaflet, matching source 304
  and the processed inventory below. Do not add it as a new full catalogue.
- The 1999 Mektronic listing describes a 19-page launch catalogue; it is
  distinct from the 1999 GB Rims & Wheels source 374. It is now reconciled as
  source 481 (see the Mektronic section above).
- [2009 Bike Systems ES](https://www.bikecatalogs.com/document/5801)
  is also listed, with no matching registered source/ingestion record. Its
  description says 26 pages rebuilt from Scribd renders and dates it from the
  title. It remains a later-period candidate requiring edition/scope checks;
  it is not part of the recommended 1994–2001 batch. The linked 2002 technical
  manual and undated service sheets are supplementary technical sources,
  not automatically additional complete component-catalogue ingestions.

No DB changes or new catalogue transcriptions were made in this scope review.
The full-reconciliation action is recorded once in TODO. The three temporary
archive-description HTML files were removed after their URLs and distinctions
were recorded here.

## Brügelmann Titan and Bleu SSC — 2026-11-19, applied

Reviewed the already registered dealer sources 392 (1977), 394 (1979),
389 (1982), and maker sources 301 (1979), 240 (c.1980). The initial review was
read-only; the user subsequently approved the one-row date/source correction,
which is now applied and validated.

- [Brügelmann 1977 p.12](https://s01335cf0ecfff54f.jimcontent.com/download/version/1451656901/module/6124979962/name/Bru%CC%88gelmann%2B1977.pdf#page=12): `71225-MBLU`, blue Mavic rim formerly offered to professionals, 20 mm, 395 g, 109 DM. The dealer explicitly prints `Material=Titan`; the small-hole table calls it titanium BLAU (`71238-MS08`, 24/28 holes). This is a dealer claim, not verified titanium construction. The catalogue was printed in December 1976 for the 1977 edition; use 1977 availability, not an invented 1976 introduction.
- [Brügelmann 1979 p.12](https://s01335cf0ecfff54f.jimcontent.com/download/version/1451656901/module/6124978862/name/Bru%CC%88gelmann%2B1979.pdf#page=12): Titan-Mavic, 20 mm, 395 g, former professional-only offering; `91206-TIBL` blue and `91207-TIGR` grey, both 109 DM. All these codes are retailer references, not maker model numbers.
- [Brügelmann 1982 pp.12–13](https://s01335cf0ecfff54f.jimcontent.com/download/version/1451656901/module/6124977062/name/Br%C3%BCgelmann%2B1982.pdf#page=13): p.12 still calls the small-hole offering titanium (24/28/32), referring to p.13 for its main code/price. P.13 describes the premium group as hardened aluminium, then names `21226-TIAR` ARGENT, 395 g/20 mm/119 DM; `21224-TIBL` BLEU, 395 g/20 mm/128 DM; and `21221-TIPR` PARIS-ROUBAIX, matt grey, 400 g/21.5 mm/158 DM. GP4 has its own separate `21207-MGP4` entry, grey hardened aluminium, 395 g/20 mm/39.80 DM. This resolves the previous bare “Titan blau” hold as an identifiable blue offering, while documenting inconsistent dealer material terminology.
- [Mavic 1979](https://labibleduvelocataloguesmavic.blogspot.com/p/mavic-1979.html), scan 5 / printed p.4: Bleu SSC, Argent 12 SSC and GP4 each have 20 mm profiles and 395 g specifications; Grise SSC Paris-Roubaix has a distinct 21.5 mm profile and 400 g. Scan 6 / printed p.5 distinguishes the professional Grise SSC from the amateur GP4. The [c.1980 maker table](https://www.disraeligears.co.uk/site/00_main_images/mavic_-_catalogue_1980_page_8_main_image.jpg) repeats these distinctions. Neither maker table supplies a Titan alias. Original 1979 scan URLs are linked from the catalogue page as `MAVIC 1979 (5)` and `(6)`; both were visually read at full size.

**Applied correction:** existing **8153 Mavic Bleu SSC**, previously **1979–1988**,
source_ref **391**, source_id `13bbb82f-c0fd-11f1-a2df-02fea3763e8d`, is now
**1977–1988**, source_ref **392**. The blue colour, 20 mm/395 g specification,
professional positioning, dealer's continuing TIBL reference and explicit 1982
BLEU name support identifying the 1977 blue offering as this existing model.
This is an identity inference, not an explicit maker crosswalk. Keep the maker
title and current alloy/deep-blue/20 mm/double-eyelet/395 g description; do not
add titanium construction, invent a separate Titan component or merge rows.
Restoration values are year_from 1979 and source_ref 391, conditional on the
row still matching the approved new state. Other fields remain unchanged.

The grey 1979 Titan was left unassigned here; the 2026-11-20 follow-up below
resolves it as Argent 12 SSC from the 1978/1980/1981 tables. GP4 is
separately sold in the later dealer table, so do not use Titan as a general
GP4 alias. 5112 Paris-Roubaix SSC, 5069 GP4 and the uncoded legacy SSC
records 5108/5114 remain unchanged.

Validation: searched all live Mavic rim titles/descriptions and
the six candidate IDs; no separate Titan row exists. SELECT found no
Titan-named Mavic bike specs and no links to 8153/8154/5112/5108/5114; the GP4
links all remain on 5069. No generator reference to 8153 or Mavic Titan was
found. Source labels/citations for 392/389/301 were verified. Immediately before
loading, readback confirmed 8153 still matched the reviewed title, source_id,
1979–1988 dates and source_ref 391, with zero bike links. The guarded UPDATE
affected exactly one row; readback verified 1977–1988, source_ref 392 / Brügelmann
1977, the unchanged description and zero bike links. Repeating the same UPDATE
affected zero rows. Before/after `compare-bike-links.js --json` reports covered
108 loaded catalogues and 23,380 specs; scope, files, summaries and all findings
were identical, including the 15 pre-existing lost-match findings. No bike link,
generator, title, description, component insert/delete/merge or unrelated source
was changed. Task-only SQL/comparison JSON, downloaded scans and page renders
were discarded after validation; original URLs/page evidence are retained above.

### Grey Titan `91207-TIGR` identified as Argent 12 SSC — 2026-11-20, applied

Read the registered Brügelmann editions not used above (1978, 1980, 1981),
plus 1979 again, at 200 dpi:

- [1978 p.12](https://s01335cf0ecfff54f.jimcontent.com/download/version/1451656901/module/6124979162/name/Bru%CC%88gelmann%2B1978.pdf#page=12)
  (source 393, printed December 1977): `81225-MTIT`, "DIE BLAUE-MAVIC-TITAN-FELGE
  (jetzt auch in silbergrau)", originally for professionals, 395 g/20 mm,
  109 DM. One code covers blue and the new silver-grey finish.
- [1979 p.12](https://s01335cf0ecfff54f.jimcontent.com/download/version/1451656901/module/6124978862/name/Bru%CC%88gelmann%2B1979.pdf#page=12)
  (source 394): TITAN-MAVIC-FELGE, 20 mm/395 g; `91206-TIBL` "in BLAU" and
  `91207-TIGR` "in GRAU", 109 DM each.
- [1980 p.13](https://s01335cf0ecfff54f.jimcontent.com/download/version/1451656901/module/6124978662/name/Bru%CC%88gelmann%2B1980.pdf#page=13)
  (source 395): "die MAVIC TITAN/MAGNESIUM felgen", `01308-TIAR` "ARGENT" hell
  glanzpoliert 395/20 119 DM, `01309-TIBL` "BLEU" 395/20 128 DM, and
  `01310-TIPR` "PARIS-ROUBAIX" mattgrau 400/21.5 158 DM, marked "NEU — die
  Erfolgsfelge der Saison '79". GP4 is separate (`01307-MGP4`, 39 DM).
- [1981 p.13](https://s01335cf0ecfff54f.jimcontent.com/download/version/1451656901/module/6124978262/name/Bru%CC%88gelmann%2B1981.pdf#page=13)
  (source 388): the same three as `11226-TIAR`, `11224-TIBL`, `11221-TIPR`,
  now called "Hartaluminiumfelgen".

The blue code continues every year (MBLU → MTIT → TIBL). The grey `TIGR`
disappears in 1980 as `TIAR` Argent appears with the same 395 g/20 mm spec and
family heading. Paris-Roubaix is flagged as new in 1980 with a different
400 g/21.5 mm profile, and GP4 has its own code and price class, so neither is
`TIGR`. Mavic 1979 (source 301) gives Argent 12 SSC 20 mm and 395 g. This is a
dealer-code identity inference, not a maker crosswalk; "Titan" remains a dealer
material claim, not added to the row.

Applied (user approved): **8154** `Mavic Argent 12 SSC`, source_id
`13bdb709-c0fd-11f1-a2df-02fea3763e8d`, `year_from` 1979 → **1978**,
source_ref 242 → **393**. Title, search text and description unchanged.
Restore with `year_from = 1979, source_ref = 242`, guarded on the new state.

Validation: preflight matched one row; the rerun affected zero rows. 8154 has
no bike links and no generator or duplicate-registry references.
`compare-bike-links.js`: 23,395 of 23,410 specs unchanged, 0 gained/changed,
the same 15 Huret Rival losses. Quality report: 0 errors; no finding names
8154. Mavic duplicate report still has 13 pairs.

## CXP30 and Open Pro weight attribution — 2026-11-19, applied

Reviewed live **5062/5063/10199/10607** (CXP30) and **5099/5100/10183**
(Open Pro), all ten photographs on the original 5062/5099/5100 listings, the
1997 maker road spread, 1999 GB maker pp.20–21, and Guida 1996 p.120 /
Guida 1999 p.106. All seven rows have zero bike links; no generator override
references these component IDs. The current Mavic duplicate report flags only
5062/5063 among them, correctly as tubular/clincher configurations. The initial
review was read-only; the two description corrections below were subsequently
approved and applied. No source, matcher, duplicate-registry or bike-link changes.

### Two description corrections are supported

- **Open Pro 5099:** [the original weight list](https://www.velobase.com/Pages/ViewComponent.aspx?ID=D12D1B63-2FD3-4768-99D0-4893540FE62A)
  explicitly contains **435g Spec** and **445g Actual**, both submitted by
  ThermionicScott. Its displayed 440g is the arithmetic average of those two
  entries, not an average of two independently weighed rims. This supersedes
  the earlier notes' treatment of 440g as an independent specimen mean. Preserve
  **445g as a reported actual weight** and keep 435g separately attributed as a
  specification; neither establishes a dated production variant. Applied
  replacement description (165 characters):
  `Mavic Open Pro, France. Reported actual weight 445 g; separately listed specification 435 g. Clincher rim with welded joint and double eyelets; blue/silver finishes.`
- **CXP30 tubular 5062:** [the original listing](https://www.velobase.com/Pages/ViewComponent.aspx?ID=FB4424AC-C610-462B-8174-56506478D1AA)
  says **500g** without an Actual/Spec qualifier or weighing photograph. Do not
  describe it as an independently measured 500g specimen. Its photographs show
  a silver tubular, SUP/UB Control decal, loose profiled inserts/tool, and
  fitting instructions. [Damon Rinard's measurement table](https://sheldonbrown.com/rinard/weights.htm)
  independently distinguishes **473g actual without washers** from **500g
  claimed** for a CXP30 tubular. This makes weighing basis a concrete remaining
  question; it does not prove these entries describe the same physical rim,
  that 500g includes inserts, or that 473+inserts equals a catalogue value.
  Applied replacement description (210 characters):
  `700c aero tubular rim, SUP joint, UB Control brake tracks and profiled inserts; 465 g maker specification (1997), 24/28/32/36 holes, silver or titanium. A separate 500 g listing has no stated measurement basis.`

### Applied corrections and validation

User approved with “apply”. Two guarded `component_detail.description` UPDATEs
changed exactly **two rows**; the idempotency rerun changed **zero rows**.
Exact readback confirms both descriptions above and every other column unchanged,
including titles, search text, source UUIDs, provenance, image, category/group,
date bounds and zero bike references. Source_ref remains 357 on 5062 and 1 on 5099;
the distinct maker/listing weight attributions are documented above. Both new
descriptions fit 255 characters. No new component/source rows or identity merges.

Generator/live comparison across 108 loaded catalogue CSVs / 23,380 specs is
identical before/after: 23,365 unchanged, zero gains or changed targets and the
same 15 pre-existing lost matches; no missing/ambiguous rows. The comparison
findings themselves match exactly, not just counts. Whole-DB quality findings
also match exactly: zero errors and the same 1,985 review findings. Only description
text changed, so no code tests were added or repeated. `git diff --check` passes.

Restoration values, captured before application (restore only deliberately,
guarded by the applied descriptions above):

- **5062**, UUID `FB4424AC-C610-462B-8174-56506478D1AA`, source_ref 357,
  title `Mavic CXP 30 (tubular)`, search text `Mavic CXP 30`, dates 1996–1997,
  brand 31/category 16/groupNULL. Previous description:
  `Mavic CXP 30 (tubular), France, 500 grams. Deep-section aero tubular, SUP joint, UB Control sidewalls, 465 g, 24/28/32/36 holes, 700c; silver or titanium. Road racing and triathlon.`
- **5099**, UUID `D12D1B63-2FD3-4768-99D0-4893540FE62A`, source_ref 1,
  title/search text `Mavic Open Pro`, dates 1986–1986,
  brand 31/category 16/groupNULL. Previous description:
  `Mavic Open Pro, France, 440 grams (avg)` (the space before `(avg)` isU+00A0).

The completed correction action was removed from TODO; the distinct 1996
edition/measurement and decal/finish dating gaps below remain open. Applied SQL,
restoration snapshot, validation helper and comparison/quality baselines were
removed after exact readback and the zero-change rerun. No pending review SQL.

### Edition/identity limits that remain

- The [1997 manufacturer road spread](https://labibleduvelocataloguesmavic.blogspot.com/p/mavic-1997.html),
  inspected at original `/s0/` resolution, prints **465g tubular**, silver or
  titanium, 24/28/32/36H, versus **520g clincher**. [1999 GB maker p.21](https://bikalog.org/api/view/Mavic/1999/mavic99.pdf)
  again gives 465g tubular, silver/28/32/36H, versus 550g clincher. Preserve the
  edition-specific drilling and clincher weights.
- [Guida 1996, scan 17 / p.120](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_96_-_componenti_scan_17_main_image.jpg)
  explicitly places **both Argent and Titane CXP30 under tubulars and prints
  520g for each**. This is not merely a titanium-versus-silver difference.
  [Guida 1999, scan 17 / p.106](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_99_-_componenti_scan_17_main_image.jpg)
  separately prints 465g for the silver tubular and 550g for its clincher.
  A contemporaneous 1996 maker specification or a measured bare-rim/inserts
  comparison is still needed to explain the dealer discrepancy. Do not infer
  an engineering revision, delete 10607's edition-specific 520g, or merge the
  generic/silver/titanium rows solely from these weights.
- **Open Pro 5099/5100:** all three 5099 photos show blue rims and a red/yellow/
  silver OPEN PRO decal with SUP/UB Control/Maxtal logos. The 5100 photo set
  includes a loose dark rim with MAXTAL S.6000/OPEN PRO wording and a built-wheel
  view with a different large yellowSUP layout. Do not assume all photographs
  show a single physical specimen. S6000 alone does not distinguish alloy
  generations. Preserve 5100's independently reported **888g actual pair**;
  do not replace it with a per-rim catalogue weight or merge it into silver 10183.
- **Dating:** [1999 GB maker p.20](https://bikalog.org/api/view/Mavic/1999/mavic99.pdf)
  lists Royal Blue alongside Silver/CD/CDCeramic, 18.4mm height and 19.6mm
  outside width, 425g 700c / 390g 650c / 445g Ceramic. This corroborates a blue
  Open Pro option in 1999, but does not date 5099's exact decal or identify 5100's
  dark finish as CD. The 1997 maker spread instead names OpenSUP and Reflex;
  absence of the OpenPro name there is not proof of nonexistence. No recovered
  dated maker/decal crosswalk supports replacing the specimen rows' legacy
  1986 / 1980–1990 claims. Earlier 1998 silver Yeti evidence for 10183 remains
  valid and separate. The official product-sheet endpoint returned 403; no
  new technical-sheet dating claim is made.

### CXP30 weight and 870 clamp evidence search — 2026-11-20, no change

Read-only follow-up on the TODO item; no DB change, so no validation run.

- **870 clamp:** the [1995 maker catalogue](https://www.bikecatalogs.com/download/3660)
  p.22 lists 860 "double with clamp fitting, 100 g" and 870 "triple with clamp
  fitting, 120 g", with no diameter. With 1994 (no 31.8 mm version), 88/89 (no
  diameter) and 90/91 ("28 mm collar"), no recovered maker edition names a
  31.8 mm 870. The c.1990 USA technical manual (source 302) has no front
  derailleur section. A web search found only the existing VeloBase specimen
  listing for 2410 and undated marketplace units, mostly labelled 28.6 mm.
  The earlier decision to keep 2410's velobase 1984–1992 dates until positive
  31.8 mm evidence exists still stands.
- **CXP30 1996 figure:** no 1996 Mavic maker catalogue or technical manual was
  found. Bike Catalogs lists no 1996 edition, and Bike-Pro 1996 (source 306)
  covers rear derailleurs only. Web results give only built-wheel weights
  (Rinard's 938/1170 g CXP30 wheels, rim type unstated), modern CXP Pro 30
  figures, and forum recollections dating the rim to c.1996. None explains
  Guida 1996's 520 g tubular.
- **Unchecked lead:** a Retrobike thread announcing new Mavic catalogues and
  manuals in its archive (`retrobike.co.uk/threads/new-mavic-catalog-and-manuals-added-to-the-archive.427093`)
  returned HTTP 403 to automated fetches. Its editions are unknown.

### 1996 maker brochure recovered — 2026-11-20, read-only

The [Bike Recyclery catalogue lot](https://bikerecyclery.com/1996-mavic-rim-catalog-lot-full-size-brochure-wheel-building-guide-mint-average/)
(SKU 15439; direct retrieval redirects to Swoon Cycles) exposes photographs of
several documents. The English folding brochure itself prints **Catalogue 1996**
on its cover. Do not automatically date the lot's other documents from this.

- [Cover IMG_5145](https://cdn11.bigcommerce.com/s-1rmgckn/images/stencil/2280x2280/products/14253/174719/IMG_5145__69859.1734139525.jpg?c=2)
  shows the 1996 imprint and English folding brochure layout.
- [Road-rim panel IMG_5147](https://cdn11.bigcommerce.com/s-1rmgckn/images/stencil/2280x2280/products/14253/174720/IMG_5147__32454.1734139528.jpg?c=2),
  inspected at original 2048-pixel width, separates **clincher CXP30 550 g**
  from **tubular CXP30 530 g**. Both list silver or titanium and are marked NEW.
  These are printed maker specifications, not measured specimen weights.
  The panel does not state a bare-rim/inserts-included weighing basis; adjacent
  profiled-eyelet prose does not establish the printed weights' basis.
- This supersedes the earlier search's missing-1996-maker-specification claim.
  It does not corroborate Guida 1996's 520 g tubular figure or explain the 1997
  maker's 465 g. Preserve the edition-specific 530/520/465 g attributions;
  no engineering revision or identity merge follows from these weights alone.
- The Retrobike archive-announcement thread remains inaccessible through the
  available web tool; no interactive browser tool was available. Its editions
  remain unknown, and public search results did not expose its contents.

No database, source registry, matcher or bike-link changes. The read-only live
quality report returned zero integrity errors; review flags are not proven errors.
TODO now seeks weighing-basis/revision evidence rather than an unspecified 1996
catalogue. Temporary HTML and inspected photo downloads were removed after
recording the source URLs and findings here.

### Open Pro decal-date search — 2026-11-19

Checked search results for dated maker evidence for specimen rows 5099/5100. The
[Mavic technical-manual Open Pro sheet](https://technicalmanual.mavic.com/tech-mavic/technical_manual/data/docs/products/2_107.pdf)
describes specifications but does not date the pictured decals or establish
the dark finish on specimen 5100. Decal sellers and current NOS listings show
variant imagery but provide no reliable dated crosswalk. No identity or year
change is supported; the open question remains exactly as described above.

### 1994/1995 scans recovered and inspected — 2026-11-19

Downloaded both Bike Catalogs PDFs successfully on retry:
[1994, 36 pages](https://www.bikecatalogs.com/download/3659) and
[1995, 24 pages](https://www.bikecatalogs.com/download/3660). Their metadata
identifies the Disraeli Gears scans as the source; these are mirrors, not
independent evidence. The 1994 cover visibly prints `CATALOGUE 1994 F`;
use the edition year rather than the archive's tentative 1993 publication date.
The 1995 edition date was already checked in the T261 review below.

Visually inspected the relevant tables at full size:
[1994 printed/PDF p.9](https://www.disraeligears.co.uk/site/mavic_catalogue_1994_-_page_9.html)
and [1995 printed/PDF p.15](https://www.disraeligears.co.uk/site/mavic_1995_-_page_15.html).
Both list the following configurations (weights are printed averages):

| Family | Finish/configuration | Weight | Distinguishing detail |
| --- | --- | --- | --- |
| Open 4 CD | Hard CD, 622x13 / 571x13 | 430 / 395 g | 17.2 mm height, 19 mm outer width |
| Reflex clincher | Silver SBP / titanium colour TIB, 622x13 | 430 g each | SUP and UB Control; 17.8 mm height, 18.5 mm width |
| Open SUP | Silver SBP / hard CD, 622x13 | 470 g each | SUP; 19 mm height and width |
| Open SUP Ceramic | Hard CD with Ceramic, 622x13 | 480 g | SUP; 19 mm height and width |

All these 700C configurations list double stainless eyelets and 28/32/36
drillings. The 1995 p.14 companion road-clincher table lists MA2, MA40,
Module 3 and 192; the 1994 contents and rim illustrations were used for
navigation. This was a focused Open Pro comparison, not a full catalogue audit.

Neither inspected Open-family table names Open Pro. In particular, **Open SUP
Ceramic is not printed as Open Pro Ceramic**. These pages therefore do not
substantiate the earlier conversational suggestion that Open Pro Ceramic was
confirmed around 1994–95. They also do not independently establish a launch
year or date either specimen 5099/5100. Both editions show large yellow SUP
decals on Reflex clinchers, demonstrating why the large SUP layout in one
5100 photograph is insufficient to identify its model. No specimen is
reclassified from that resemblance.

At that stage, the useful next evidence remained a dated maker/dealer photograph or decal
crosswalk matching the actual OPEN PRO/Maxtal markings on 5099/5100; prioritise
1998–2001 material around the already documented 1998/1999 attestations.
No DB, source, bike link, CSV or generator changes were made. TODO retains
only that unresolved identification action. Task PDF downloads, empty text
extractions and page renders were removed after recording these stable URLs.

### Open Pro decal matches in 2000/2001 maker catalogues — 2026-11-19, evidence review

Supersedes the preceding claim that no dated maker/decal crosswalk had been
recovered. Downloaded the [2000 GB catalogue, 24 pages](https://www.bikecatalogs.com/download/3662)
and [2001 USA retailer catalogue, 28 pages](https://www.bikecatalogs.com/download/3663).
Both covers visibly print those edition years; the PDFs reproduce Disraeli
Gears scans. Do not substitute their PDF conversion dates or the archive's
estimated previous-autumn publication dates. Read the contents to locate the
rim panels; other components were outside this focused review.

- **2000 printed/PDF p.14:** [road-rim page](https://www.disraeligears.co.uk/site/mavic_2000_-_page_14.html)
  pictures a blue Open Pro with an oval yellow MAVIC logo, short red/silver
  `MAXTAL S.6000 / OPEN PRO` label and a separate large yellow SUP decal.
  Colours explicitly listed: Silver, Black Mavic, Blue France, CD and Ceramic.
  The 700/650 weights are 425/390g; profile 18.4mm high, 19.6mm wide;
  28/32/36 drilling, Maxtal, SUP, double eyelets and UB Control or Ceramic.
- **2001 printed/PDF p.22:** [road/touring-rim page](https://www.disraeligears.co.uk/site/mavic_retailer_catalog_2001_-_page_22.html)
  pictures a blue Open Pro with the longer red/silver label: oval yellow
  MAVIC, black OPEN/yellow field, red PRO and the small technology marks
  extending along the silver end. It repeats Maxtal/SUP/double eyelets,
  UB Control or Ceramic and 425g 700/390g 650. The blue swatch lists 32/36 holes;
  other swatches include 28/32/36. Swatches alone do not name each dark finish.

Compared all three original 5099 photographs and the two relevant 5100
photographs directly against these maker images:

| Specimen | Dated visual match | Interpretation |
| --- | --- | --- |
| 5099 blue | 2001 p.22, long combined decal | Matches blue finish and distinctive red/silver label layout; evidence for this appearance in 2001 |
| 5100 dark | 2000 p.14, short main decal plus separate SUP | Matches main label layout and the separate SUP treatment shown in the built-wheel photo; Black Mavic is explicitly offered alongside CD |

Original comparison photographs:
[5099 close-up](https://www.velobase.com/CompImages/Rims/7A572DC0-8788-4AAE-97CD-546D19943BD3.jpeg),
[5100 main-label close-up](https://www.velobase.com/CompImages/Rims/1A6E852F-F470-4FBB-A4F7-6C784BC5A9E8.jpeg),
[5100 built wheel](https://www.velobase.com/CompImages/Rims/8E27912B-F5BF-4E3A-898F-A631B3EC9850.jpeg).
The maker comparison now explains why a large separate SUP label is compatible
with an Open Pro, although it still cannot prove that all 5100 photographs
depict the same physical rims. Do not relabel 5100 as CD just from its darkness.

These are dated attestations of decal appearances, not manufacture dates,
launch years, or proof that one decal replaced the other exclusively in 2001.
They support reviewing the legacy dates 5099 **1986** and 5100 **1980–1990**
against appearance attestations **2001** and **2000**, respectively. A date
correction would need a live-row/source/link preflight and reviewed change
set; no SQL is prepared or applied in this evidence-only pass. Preserve 5099's
445g actual versus 435g reported specification, and 5100's 888g actual pair;
the maker 425g must not replace these independent measurements. No merge with
silver 10183 is proposed.

The previously checked 1999 maker p.20 remains the Royal Blue/specification
attestation, while the 1998 Yeti table attests silver. Targeted searches of
Bike Catalogs, Bikalog, RetroMTB and Retrobike did not recover a complete 1998
maker scan; none is claimed inspected. The 2000/2001 photographs provide the
new distinguishing evidence sought in TODO, whose remaining action is now
to review date corrections. No DB/source/link/CSV/generator changes were made.
Task downloads, specimen HTML/photos and rendered pages were removed after
recording the source URLs; documentation whitespace checks passed.

### Open Pro date corrections — 2026-11-19, applied and validated

Applied the user's approved correction using the specimen/decal comparisons
above. This supersedes the earlier pending-review status and retention of
the legacy dates. Each single-year range records an attested appearance;
neither endpoint claims introduction or discontinuation.

| Component | Old year_from/year_to | New year_from/year_to | Old/new source_ref |
| --- | --- | --- | --- |
| 5099 Mavic Open Pro | 1986 / 1986 | 2001 / 2001 | 1 -> 479 |
| 5100 Mavic Open Pro SUP (Maxtal, 622x15) | 1980 / 1990 | 2000 / 2000 | 1 -> 478 |

Both **year_from values moved later**, on the dated maker photograph evidence:
2001 USA p.22 for 5099; 2000 GB p.14 for 5100. Full 1994/1995 Open-family tables
and the previously reviewed 1997 range instead name Open 4/Open SUP/Reflex;
the 1998 silver fitment and 1999 Royal Blue family attestations do not identify
these particular decal appearances. Revisit if an earlier exact visual
attestation is recovered. No launch/end-year inference is intended.

Registered sources after confirming no existing equivalent source records:

- **478**, `Mavic catalogue, GB edition (2000)`, countryGB, citation:
  `https://www.bikecatalogs.com/download/3662; cover 2000 GB, printed/PDF p.14 Open Pro decal and finish comparison only; other components not audited.` Citation since
  widened by the 2000 GB full reconciliation above.
- **479**, `Mavic retailer catalogue, USA edition (2001)`, countryUS, citation:
  `https://www.bikecatalogs.com/download/3663; cover 2001 USA, printed/PDF p.22 blue Open Pro decal comparison only; other components not audited.` Citation since
  widened by the 2001 USA full reconciliation above.

Live preflight found no bike links to either component and no generator
overrides or link decisions referencing these IDs (unrelated SunTour PL-5100
text is not a component 5100 reference). Guarded transactions inserted one
source and updated one component each. Exact full-row readback confirmed
that only year_from, year_to and source_ref changed: titles, search text,
UUIDs, brand/category/group, image and descriptions were retained, including
5099's 445g actual/435g reported specification and 5100's 888g actual pair.
Neither row was merged or reclassified as CD. Restoration, if deliberately
justified, uses the old years/source_ref in the table guarded by the applied
new values; leave the registered catalogue evidence intact.

Rerunning both SQL files affected zero sources and zero components. The
generator/live comparison over **109 loaded catalogues / 23,410 paired specs**
was identical before and after, including the same 15 pre-existing lost-match
findings; zero gains or target changes, no missing/ambiguous identities.
No bike links, CSVs, matcher or API code changed. Completed TODO action was
removed; no new search task was added without a new lead. The task's two SQL
files and before/after comparison reports were removed after validation.

Source URLs, exact weight qualifiers and applied descriptions are retained here; specimen
HTML/photos, maker/dealer downloads, page renders and duplicate-report scratch
files were removed after the initial review. That review touched documentation
only; the later database validation is recorded above. `git diff --check` and
TODO/anchor reconciliation were checked.

## T261 profile crosswalk — 2026-11-17, read-only

Reopened the waiting evidence item using a newly recovered **1995 maker
catalogue** on Disraeli Gears. Its [cover](https://www.disraeligears.co.uk/site/00_main_images/mavic_1995_page_1_main_image.jpg)
visibly prints **1995**; use that edition year, not the archive's tentative
1994 publication date. The cover has a Jaropa/Leiden distributor sticker;
the inspected tables are in English. No matching 1995 Mavic source label or
`mavic_1995` citation currently exists in `data_source`. This is a focused
evidence review, not ingestion of the full catalogue or source registration.

### T261 identity is now supported

[Printed p.17](https://www.disraeligears.co.uk/site/00_main_images/mavic_1995_page_17_main_image.jpg)
explicitly identifies **T261 SBP**, ETRTO **622 x 20 mm (700C)**, rim width
**26 mm**, double stainless eyelets, **540 g**, silver colour SBP and 36 holes.
The section drawing independently labels **20 mm inside / 26 mm outside**,
15.4 mm height. Thus 20 and 26 can describe the same profile; this is direct
manufacturer evidence, superseding the earlier requirement not to assume the
measurement basis. Do not use the table's anomalous `rim end spoke 547` entry
as a validated 700c ERD.

Reopened the original [1997 maker spread 4](https://labibleduvelocataloguesmavic.blogspot.com/p/mavic-1997.html),
using its Blogger image at original `/s0/` resolution and an enlarged profile
crop. The top T261 dimension reads **26**, rather than the earlier transcribed
23; the adjacent T238 profile is labelled 23. T261 is silver, 540 g,
36/40/48 holes, for 28–35 mm tyres. The clear 1995 numbered section and the
already verified 1999 maker p.22 independently support 26 mm outside width.
The earlier 23 mm reading is superseded; it does not establish a different
generation. The 1995 edition only lists 36 holes, so preserve the later
36/40/48 options with their edition attribution.

Live readback: **9983** is the 1997 silver T261 family row (1997–1997,
source 307); **10182** is T 261 Argent (1996–1999, source 374), already
described as 26 mm outside, 540 g, silver, double wall/eyelets, 36/40/48 holes.
Both have zero bike links and no component image; neither ID occurs in
`scripts/` or the bike-ingest reference decisions. No identity distinction is
supported by their profiles, weight, colour or construction. They are now an
evidence-backed consolidation candidate. Recommend retaining **10182**, consistent
with the existing finish-specific T217 treatment, preserving the 1997 attestation
and moving its year_from **1996 -> 1995**. This is availability evidence, not
a production start date. The subsequently approved and validated consolidation
is recorded below.

### T261 consolidation — 2026-11-18, applied and validated

User approved the guarded consolidation. The transaction registered
the 1995 maker page as a source, updated survivor 10182 from 1996–1999 / source
374 to 1995–1999 / source 449, and deleted 9983 after guarded identity and
reference checks. Its existing description preserves the shared 26 mm outside
width, silver finish, 540 g, double eyelets, 36/40/48 holes and 28–35 mm tyre
range. The 1995 page attests 36 holes; the 1997 catalogue (source 307) attests
36/40/48, and source 374 is the 1999 evidence. 1995 is availability, not a
proven introduction date. No ERD is inferred.

Live readback: 9983 source_id `515a7f7c-d479-11f1-a2df-02fea3763e8d`, source
307, title `Mavic T261`, description `Mavic T261, France. 700c double-wall rim
for heavy loads and fat tyres, 540 g, 36/40/48 holes, for 28-35 mm tyres; silver.
Trekking and touring.`, 1997–1997. Survivor 10182 source_id
`9ec99d48-3ec3-4071-94a6-aea18d295175`, source 374, title `Mavic T 261 Argent`,
description `700c (622) alloy trekking rim; 26 mm outside width, double wall,
double stainless eyelets, silver anodised; 540 g, 36/40/48 holes, for 28-35 mm
tyres. Touring and heavy loads.`, 1996–1999. Both have brand 31, category 16,
NULL group and image, and search text matching their titles. These values support
restoration; any reversal must recreate 9983 with its original ID and source ID,
restore 10182's dates/source and account for subsequent references first.

Preflight: no `bike_spec` references to either ID, no other table has a
`component_id` column, and neither ID is in generator code. One consistent
read-only snapshot and all 98 available CSVs yielded 21,382 generated specs;
removing 9983 in simulation changed no component matches. The approved transaction
inserted one source, updated one survivor and deleted one duplicate; readback
confirmed source 449 and survivor 10182, and no bike references. A rolled-back
rerun affected zero rows in all three statements. A post-application comparison
of the same 98 CSVs and 21,382 specs against the reconstructed old component
inventory found zero changed matches. Temporary SQL and helpers were removed.

### Other waiting cases

- **9975 / 10197 / 10198 Reflex tubular, representation review 2026-11-18:**
  The 1997 maker road spread 3 and 1999 maker p.21 list silver, blue, CD and
  CD Ceramic; 375 g, Ceramic 390 g, 28/32/36 holes. Keep the finish-specific
  silver **10197** and blue **10198** rows. Prepare separate CD and CD Ceramic
  tubular rows from the manufacturer evidence, with 1997–1999 availability
  bounds (both editions attest the options), preserving the 375/390 g distinction.
  Existing 10596 and 10599 are clinchers, not substitutes. The subsequent
  approved finish split and retirement of 9975 are recorded below; generic
  bike specs must not be arbitrarily assigned a finish. This follows the
  existing T217 treatment, where the family row was removed after its silver,
  CD and ceramic options were represented individually.
  Live readback: 9975 1997–1997 source 307 (all four finishes); 10197 silver
  1996–1999 source 374; 10198 blue 1996–1999 source 357. The three have no
  stored images, bike links or generator ID references. The later 1999 maker
  evidence supplies 21 mm, Maxtal, SUP and UB Control; the manufacturer's
  family-wide drilling does not alone prove each finish was offered in every
  hole count. No DB or generator change was made in this review.
- **Reflex finish split applied and validated, 2026-11-18:** directly rechecked
  [1997 maker spread 3](https://labibleduvelocataloguesmavic.blogspot.com/p/mavic-1997.html)
  and [1999 maker catalogue](https://bikalog.org/api/view/Mavic/1999/mavic99.pdf)
  PDF p.11 / printed p.21. Both list CD, CD Ceramic, blue and silver tubular
  Reflex; 375g and 390g ceramic. The 1999 page supplies Maxtal, SUP, double
  eyelets, 21mm section, and 28/32/36 family drilling. Prepared two distinct
  1997–1999 source 374 rows: `Mavic Reflex CD (tubular)` (375g, UB Control) and
  `Mavic Reflex CD Ceramic (tubular)` (390g, ceramic braking surface). The
  drilling is explicitly described as family-wide, not each finish's proven
  availability. CD/ceramic clinchers 10596/10599 are distinct and unchanged.
  Retained silver 10197 and blue 10198; the original 1997 family evidence remains
  source 307 and this catalogue note after retirement of 9975.

  After user approval, guarded SQL inserted CD 11566 (source ID
  `dc283eae-aa79-44c8-80de-bb1f5aa18f4a`) and CD Ceramic 11567 (source ID
  `e4d071b9-7ca2-46e7-89e5-bd2049199c0b`), then deleted 9975 after checking
  the intact family row, existing finish IDs, both new rows and no bike
  references. The retired row had source ID `514a08de-d479-11f1-a2df-02fea3763e8d`,
  title `Mavic Reflex (tubular)`, description `Mavic Reflex (tubular), France.
  700c tubular, SUP joint and UB Control sidewalls, 375 g (Ceramic 390 g),
  28/32/36 holes; CD, CD Ceramic, blue or silver. Competition and training.`,
  1997–1997, brand 31, category 16, NULL group and image, source 307 and
  search text `Mavic Reflex`. Restore it with its original ID and fields if
  reversing the split, after checking references and generator overrides.
  A fresh read found no bike specs for 9975, 10197, 10198 or
  generic Reflex; `bike_spec` is the only other table with a `component_id`
  column and no declared FK points at component_detail. No affected IDs occur
  in generator code or bike-link decisions. Mavic merge and near reports found
  no candidates. MySQL `EXPLAIN` passed for all three prepared DML statements.
  Readback confirmed all four finishes and absence of 9975; rerun made zero
  changes. There are no dangling bike-component references. Post-load Mavic
  merge and near reports found no candidates. The actual generator/live
  comparison across 98 loaded catalogues / 21,382 specs exactly matched the
  pre-load baseline, including 15 unrelated Huret Rival 4401 lost matches;
  no bike links changed. Temporary SQL and comparison files were removed.
- **5062 / 10199 / 10607 CXP30 tubular:** that same maker spread explicitly
  prints **465 g for both silver and titanium-colour tubular options**, versus
  520 g for the clincher. This supports the known maker specification but does
  not explain 10607's **1996 dealer 520 g** or 5062's **500 g listing with
  unspecified measurement basis** (qualifier corrected in the 2026-11-19 review
  above). Preserve those separate attributions pending edition/specimen
  evidence; no merge or weight overwrite is justified by this recheck alone.
- [1995 p.15](https://www.disraeligears.co.uk/site/00_main_images/mavic_1995_page_15_main_image.jpg)
  distinguishes **Open 4 CD / Open SUP / Reflex clincher**; it does not identify
  either Open Pro specimen 5099/5100. Do not transfer those models' dates or
  the 430 g Reflex clincher weight to the later tubular rows. Open Pro and
  31.8 mm 870 limits remain as documented below; no new dated specimen/clamp
  evidence recovered in this bounded pass.

Additional inspected 1995 pages: p.6 hubs, p.12 MTB rims, p.14 road rims,
p.16 tubulars; these were navigation/context, not a full reconciliation.
Only read-only DB queries ran. No component, source, bike, CSV or matcher changed.
TODO moved T261 and the Reflex representation decision to actionable review;
only CXP30, Open Pro and the 870 clamp remain waiting for distinguishing evidence.
Task-created downloads and the enlarged crop were removed after recording these
source/page references; maintained scans and unrelated scratchpads were untouched.

## Mavic 192 availability — 2026-11-17, applied and validated

Focused follow-up for previously undated **5050 Mavic 192**, UUID
`9C8D3033-58F1-4595-A889-BD4C4E97D79D`, brand 31, category 16 (Rims), group
NULL, source_ref **1**, title/search text `Mavic 192`, old description
`Mavic 192, France`, year_from/year_to both **NULL**. No component image or
explicit generator override; the existing exact model match supplies its link.

The only live bike use is spec **1556**, bike **101**, **1993 Bianchi Eros**,
Rims `Mavic 192`, source **47**, component **5050**. No other loaded spec names
Mavic 192. Read the original [1993 USA Bianchi catalogue](https://cdn.shopify.com/s/files/1/0786/6705/5385/files/1993_Bianchi_catalog_-_USA.pdf?v=1751937419),
**PDF p.22**, Eros **TIRES / RIMS** table: **Mavic 192 silver anodized**,
paired with Bianchi Advantage-SL Road 700x28C tyres. The hub entry is RX100 32H.
This confirms the existing model link and supplies positive **1993 availability**.
It does not establish first manufacture or discontinuation. The table also notes
650C wheels on the smallest frame sizes; do not infer a single wheel size for
every Eros or use that footnote as a complete Mavic dimensional specification.
Only the Eros rim entry was reviewed for this task, not all specifications.

The original [VeloBase specimen listing](https://www.velobase.com/Pages/ViewComponent.aspx?ID=9C8D3033-58F1-4595-A889-BD4C4E97D79D)
reports an aluminium 700c (622 mm) clincher, 19 mm outside width, single eyelets,
32 holes and 611 mm ERD; its main photo visibly shows the **192** decal and
single eyelets. It has no stated year. Retain dimensions/drilling as specimen
facts, not facts printed by Bianchi. Do not infer years from decal styling, assert
that Bianchi's 32H hub proves all 192 drillings, or copy the listing's seam-joint
field without independent construction evidence. The photo URL is
[the original uploaded specimen](https://www.velobase.com/CompImages/Rims/96962DBF-E69C-4299-8064-BA60EFFD834B.jpeg).

Neighbouring **5049 190FB** and **5045 195NE** have distinct model numbers;
no duplicate/merge is supported. The 192 is present as its own named model in
both the specimen and the original bike table. No new component or finish-specific
row is required, and a generic 192 record should not be retitled silver-only.

Applied on explicit user approval with guarded transactional SQL:

- **5050:** year_from/year_to **NULL/NULL -> 1993/1993**, source_ref **1 -> 47**,
  retaining title, search text, UUID, category/group and the existing bike link.
  Stored **141-character** description:

  > Aluminium clincher road rim, offered in silver anodised. A 700c (622 mm) specimen has 19 mm outside width, single eyelets and 32 spoke holes.

- **Source 47:** replaced its stale probable/truncated-download citation with the
  recovered complete PDF URL and an explicit limited-verification statement:
  Eros rim PDF p.22 and the previously verified Nth FS / Super Grizzly / Grizzly
  rim entries pp.24–25. Other tables remain not fully checked. Preserve label
  `1993 Bianchi catalogue`, country US and source ID. The replacement is **230
  characters**, within the actual varchar(255) citation limit. Exact old citation:

  > 1993_bianchi_spec.csv, probably from retrobike.co.uk/archive/1993-bianchi-catalogue.1672/ ("Catalogo Bianchi 1993.pdf"; not confirmed against the spec pages, download truncated)

Read-only preflight matched exactly one component guard, one source guard and
spec **1556** on the expected bike/value/source/target. Both replacement strings
fit their 255-character fields. Approved transaction changed **one component
and one source citation**; rerun changed **zero rows**. Exact live readback
confirmed 1993/1993, source_ref 47, the 141-character component description and
230-character citation. Every other component/source field and the complete
Eros spec **1556 -> 5050** remained unchanged. No CSV, mapping or title changes.
Source CSV still says `Mavic 192`; it correctly names the linked model, while
the evidence here preserves the finish. Restoration, only if deliberately
justified, uses the exact old component/citation above guarded by the applied
new fields; retain 1556 -> 5050.

Validation at **2026-11-17T11:50:16.235Z** compared all **96 loaded catalogue CSVs /
21,176 paired specs**. Mappings were identical to baseline: 21,161 unchanged,
zero gains or changed targets, the same 15 pre-existing losses and no missing
or ambiguous identities. Whole-DB quality: **0 structural errors**,
**1,951 review findings** (1,566 incomplete dates,
326 linked date conflicts, 35 broad Freewheel labels,
24 descriptions at limit). The **only** finding removed was 5050's
incomplete-date flag; every other finding was identical to baseline. The named
192 remains separate from 190FB and 195NE; no duplicate or component insertion.
No code changed or generator SQL was invoked; direct readback, mapping comparison,
quality and idempotency validated this data-only correction.

Completed 192 application task removed from TODO; no production-boundary hunt
was added without a new lead. Source URLs, exact old/new values and evidence limits
remain here. Task-created SQL, scripts, baseline, original PDF download and
Eros-page/specimen copies were removed after validation.

## Open Pro and 870 date review — 2026-11-17, applied and validated

Focused review of live **5099 / 5100 / 10183 / 2409 / 2410**, their original
specimen listings, and manufacturer evidence. None has bike links; none of
these component IDs occurs in generator overrides or reviewed duplicate
pairs. At this review, **5050 Mavic 192** had one bike link and unknown dates;
the subsequent 192 review above documents the applied 1993 attestation.

### Supported correction: silver Open Pro 10183

- [Yeti 1998 catalogue](https://www.mtb-kataloge.de/Bikekataloge/PDF/Yeti/1998.pdf):
  cover visibly prints **1998**. PDF **p.11**, specification table, final column
  **Road Project Ultegra**, names silver **Mavic Open-Pro, SUP/UB Control, 32H**.
  This is exact finish/model fitment evidence supporting **year_from 1999 ->
  1998** for the existing silver row. It attests availability, not the launch
  year. Do not use the PDF's later conversion metadata as its catalogue date.
- [Mavic GB 1999 catalogue](https://bikalog.org/api/view/Mavic/1999/mavic99.pdf),
  existing source **374**, printed **p.20 / PDF p.10**: Open Pro classic
  clincher, Maxtal, SUP and double eyelets, UB Control or Ceramic braking;
  **700c 425 g**, **650 390 g**, Ceramic 445 g. Silver is separately offered
  alongside royal blue, CD and CD Ceramic. Profile drawing gives **19.6 mm
  outside width**, 18.4 mm height; drilling 28/32/36. The existing row's 15 mm
  size is the internal dimension (622x15), not a conflicting outside width.
- Dealer source **353**, Guida '99 p.104 (scan 16), previously transcribed 410 g.
  The maker positively supplies 425 g for the 700c rim, so use that specification
  and clarify SUP as the welded joint and UB Control as brake-track machining.
  The 2026-11-19 review above subsequently separated 5099's 435g Spec/445g Actual
  aggregation; 5100 retains its independent 888g actual pair report.

Applied on explicit user approval: registered supporting `Yeti catalogue (1998)`
as source **432** (country US, dated cover and p.11 citation; source lookup
found no existing Yeti row), then updated **10183** only:
**1999–1999 -> 1998–1999**, source_ref **353 -> 374**, description:

> 700c (622x15) Maxtal clincher rim; 19.6 mm outside width, SUP welded joint, UB Control machined braking surfaces, double stainless eyelets, silver anodised; 425 g, 28/32/36 holes. Road racing and training.

The **205-character** replacement cites the primary maker through source_ref;
Yeti remains separately registered as the evidence for 1998. The current schema
cannot attach both source records to the component; these notes retain the
fact-to-source distinction. Title/search text, UUID, year_to, group/category and
bike links remain unchanged. No merge, insertion of a component or bike mapping
was made. The SQL used exact old-field guards and idempotent source registration.
Read-only preflight: one matching component guard, existing primary source 374,
no existing Yeti label; description within 255. Transaction changed **one source
and one component**; rerun changed **zero rows**. Exact live readback confirmed
the 205-character replacement, source_ref 374, dates 1998–1999, unchanged remaining
component fields and zero bike links. The supporting Yeti source is unique and
has the expected catalogue type, citation and US country.

Restoration baseline, **10183**, UUID `0b858f12-09e1-4a40-acfa-8e3b6cd7e304`,
brand 31, category 16, group NULL, title `Mavic Open Pro Argent Sup-UB Control`,
search text `Mavic Open Pro Argent Sup-UB Control`, years **1999–1999**,
source_ref **353**. Exact old description:

> Maxtal alloy; 700; 15 mm; 28-32-36 holes; for training and competition, double inox ferrule, SUP and UB Control machining, silver anodized; 410g

Restore only deliberately, guarded by the approved new fields. Do not delete a
registered supporting source without checking all later references.

### Remaining identity/date limits

- **5099**, UUID `D12D1B63-2FD3-4768-99D0-4893540FE62A`, currently **1986–1986**,
  and **5100**, UUID `BC13D5D1-C194-4514-9C50-970AF52F7D60`, **1980–1990**,
  both remain source_ref 1. Original specimen pages:
  [5099](https://www.velobase.com/Pages/ViewComponent.aspx?ID=D12D1B63-2FD3-4768-99D0-4893540FE62A),
  [5100](https://www.velobase.com/Pages/ViewComponent.aspx?ID=BC13D5D1-C194-4514-9C50-970AF52F7D60).
  Visually inspected their main photos: 5099 shows blue rims; 5100 a dark rim
  with an OPEN PRO / MAXTAL S.6000 / SUP decal. S6000 wording alone therefore
  does **not** establish two different alloy generations. The listings' broad
  date claims do not date those exact specimens. The 2026-11-19 review above
  supersedes the earlier 440g interpretation with 435g Spec/445g Actual;
  retain 5100's 888g actual pair report. Do not force either into silver 10183
  or arbitrarily recast 5100's black finish as CD. Need dated decal/finish
  evidence and an early range source before replacing dates or merging rows.
- The [Mavic technical manual 2004](https://racingdepot.no/userfiles/image/MSC/MTech%202004.pdf),
  printed pp.30–31, still lists Open Pro and describes 6000-series rim alloy
  generally. That is family evidence, not a date for these particular specimens;
  no new source record or date extension is proposed from it. Broad web searches
  also return retrospective 1986 introduction claims; none recovered a dated
  early maker page connecting that claim to these photographed configurations.
- **2410**, UUID `1AD12D23-794E-437B-AE09-9C9C996DAE18`, **1984–1992**,
  source_ref 1: its [specimen listing](https://www.velobase.com/Pages/ViewComponent.aspx?ID=1AD12D23-794E-437B-AE09-9C9C996DAE18)
  describes a later 31.8 mm clamp supplied with reducing shims and a missing
  green/yellow clamp sticker. The single photo confirms the body/cage appearance
  but supplies no dated code or clamp measurement.
  [88/89 p.34](https://www.disraeligears.co.uk/site/00_main_images/mavic_catalogue_88-89_page_34_main_image.jpg)
  lists 870 as the 110 g clamp-on triple without a diameter;
  [90/91 p.22](https://www.disraeligears.co.uk/site/00_main_images/mavic_trade_catalogue_9091_page_22_main_image.jpg)
  explicitly says **28 mm collar**. Neither identifies the 31.8 mm version.
  Do not copy generic row 2409's 1988 start onto 2410 or merge the clamp variants.
  Need a dated maker/dealer 31.8 mm specification or dated boxed specimen.

Validation at **2026-11-17T11:26:04.049Z**: all **96 loaded catalogue CSVs /
21,176 paired specs** compared. Generated/live mappings were identical to the
pre-application baseline: 21,161 unchanged, zero gains/changed targets, the same
15 pre-existing losses and no missing/ambiguous identities. Whole-DB quality
findings were identical: **0 structural errors**, 1,952 review findings
(1,567 incomplete dates, 326 linked date conflicts,
35 broad Freewheel labels, 24 descriptions at limit).
The Mavic duplicate review retained the previously classified pairs; no new
merge candidates were introduced. No code, matcher, CSV or generated SQL changed;
validation used actual data readback, catalogue comparison and idempotency.
Completed application steps removed from TODO; the specific unresolved identities
and undated legacy sourcing remain open. All task-created temporary SQL, scripts,
baselines, scans and renders were removed after validation. Source URLs, old/new
values and remaining evidence limits are retained above.

## Rim maker-source follow-up — 2026-11-17, applied and validated

The later T261 crosswalk at the top supersedes this section's unresolved
1997 23 mm reading and its T261 evidence requirement. Applied changes below
remain historical records.

Recovered the [1999 GB maker catalogue](https://bikalog.org/api/view/Mavic/1999/mavic99.pdf)
(13 PDF pages, two printed pages per PDF page). Existing source **374** cites
this exact PDF; its old label restricted it to the previously reviewed CC9 p.24.
Visually checked the cover, technology pp.6–7 and rim pp.20–22; this was a
focused reconciliation (the rest was reconciled later; see the 1999 GB section).

Printed **p.22 / PDF p.11** draws T217 at **22 mm outside width**, 470 g,
480 g Ceramic, 36/40/48 holes across the family, silver/CD/CD Ceramic finishes,
22–28 mm recommended tyres. T261 is **26 mm outside width**, 540 g,
36/40/48 holes, silver, 28–35 mm tyres. The dealer guide's 17/20 mm dimensions
are not safe to present as outside widths: their measurement basis is unstated.
This does not prove a generation change or establish what those figures measure.
The earlier 1997 T261 drawing reading of 23 mm remains uncertain at the recovered
scan resolution; the new 1999 maker drawing positively supports 26 mm for that
edition. No T261 merge is proposed on that basis alone.

Printed **p.21 / PDF p.11** explicitly distinguishes Reflex silver/royal blue/CD/
CD Ceramic, 375 g (390 g Ceramic), 28/32/36 holes, 21 mm wide, Maxtal, SUP and
UB Control. Technology p.6 distinguishes the welded SUP joint from machined
UB Control braking surfaces and identifies CD as hard anodising. Thus **10197**
can safely say silver anodised rather than its dealer-derived hard anodised
wording. The old transcription was faithful to Guida '99 p.106; this is a
manufacturer-led correction, not a claim that the transcription was wrong.

Applied on explicit user approval with guarded transactional SQL:

- **10182:** replace the 20 mm description with explicit 26 mm outside width,
  retaining 540 g, silver, double wall/eyelets, drilling and touring use.
- **10184 / 10185 / 10186:** replace unqualified 17 mm with 22 mm outside width;
  distinguish silver / hard CD / hard CD with ceramic braking. Preserve each
  row's existing drilling (the maker's family-wide 48-hole option does not prove
  that every finish had it), 470/470/480 g and 1996–1999 dates. Carry SUP weld,
  22–28 mm tyre range and touring use into the surviving descriptions.
- **10197:** replace hard anodised with silver anodised; clarify SUP as a weld;
  retain 375 g, 21 mm, Maxtal, double eyelets and 28/32/36 drilling.
- Those five rows changed **source_ref 357 -> 374**; no title/search text or date
  changes. Stored descriptions are 175/209/198/217/166 characters respectively.
- **9981**, source UUID `51565ae2-d479-11f1-a2df-02fea3763e8d`: removed the
  redundant T217 family row after preserving its specifications in existing
  silver **10184**, CD **10185**, Ceramic **10186**. All three finish rows exist;
  no new row or arbitrary silver mapping was needed. Before removal, 9981 had no
  image or bike links and none of these IDs occurs in generator overrides or reviewed
  duplicate decisions. Preserve the separately sold finishes. The
  deletion guarded the UUID, original fields, no image and no bike usage.
- Relabelled existing source **374** to `Mavic Rims & Wheels catalogue, GB edition
  (1999)`; preserve citation, source ID and existing CC9 provenance. No new source.

Read-only preflight matched exactly one row for each of the six component guards.
The approved transaction changed **five descriptions/source references**, removed
**one unused component** and relabelled **one source**. Rerun changed **zero rows**.
Exact live readback confirmed all five new descriptions/source references and all
other surviving fields unchanged, 9981 absent, zero affected bike links, and the
correct source label with its citation preserved.

Fixed-snapshot simulation and actual before/after comparisons found **zero changed
generated mappings** across all 96 loaded local CSVs / 21,176 paired specs.
Generator/live-DB comparison remained 21,161 unchanged, zero gains/changed targets,
and the same 15 pre-existing losses; no missing or ambiguous identities.
Quality findings were identical to the immediate pre-application baseline:
**zero structural errors**, 1,952 review findings (1,567 incomplete dates,
326 linked date conflicts, 35 broad Freewheel labels, 24 descriptions at limit).
The Mavic duplicate report retained its same 13 classified pairs (7 configuration,
4 generation, 2 reviewed variants); no automatic merge candidates. Generator SQL
was not invoked and `bike-update.sql` was untouched. No code changed, so no test
suite run was needed; data readback, mappings, integrity and idempotency were
validated directly.

The Reflex finish split and T261 crosswalk were subsequently completed as
recorded above. CXP 30 has a separate titanium tubular **10607**,
whose 520 g dealer figure conflicts with the maker's 465 g; **5062** also carries
an unqualified 500g listing, not a verified actual measurement (see 2026-11-19
review above). Do not merge those into silver **10199**
without resolving identity/weight attribution. The 1999 maker lists 28/32/36
tubular drilling (1997 and the dealer guide also offer 24); retain edition-specific
evidence rather than silently dropping 24. Its clincher is separately 550 g in
1999 versus 520 g in 1997. No CXP dates or weights changed in this application.

TODO reconciled, including the stale claim that the CXP 30 Argent tubular has no
row (10199 exists). Completed application steps removed; only remaining identity
questions stay open. Task-created SQL, baselines, scripts, downloads and renders
were removed after validation; evidence URLs and restoration details remain here.

### Restoration baseline

The five surviving rows retained title/search text, dates 1996–1999 and UUID;
their previous source_ref was 357. Restore only deliberately, guarded by the
approved new description and source 374. Exact previous descriptions:

- **10182:** `Alloy; 622; 20 mm; 36-40-48 holes; for trekking, touring, tandem; double wall, double inox ferrule, silver anodized; 540g`
- **10184:** `Alloy; 622; 17 mm; 36-40-48 holes; trekking, touring, tandem, double wall, double inox ferrule, SUP weld and UB Control machining, silver anodized; 470g`
- **10185:** `Alloy; 622; 17 mm; 36-40 holes; trekking, touring, tandem, double wall, double ferrule, SUP weld and UB Control machining; 470g`
- **10186:** `Alloy; 622; 17 mm; 36-40 holes; trekking, touring, tandem, double wall, double inox ferrule, hard anodizing, ceramic braking surfaces, SUP weld and UB Control machining; 480g`
- **10197:** `Special Maxtal alloy; 700c; 21 mm; 28-32-36 holes; hard anodized, SUP machining, UB Control sides, double inox ferrule, competition and training; 375g`

Retired-row restoration baseline, if ever independently justified: **9981**,
brand **31**, category **16 (Rims)**, group/image NULL, title/search text
`Mavic T217`, years **1997–1997**, source_ref **307**, source UUID
`51565ae2-d479-11f1-a2df-02fea3763e8d`. Exact original description:

> Mavic T217, France. 700c trekking rim, SUP joint, Ceramic or UB Control braking, 470 g (Ceramic 480 g), 36/40 holes, for 22-28 mm tyres; CD, CD Ceramic or silver. Touring and tandems.

Source 374 previously had label `Mavic catalogue (1999), CC9 cassette page 24`;
its citation remains the same 1999 PDF URL above.

## Hub description and rim overlap review — 2026-11-17

Focused follow-up to the open audit actions. Initial review made no DB writes;
the approved description correction below is now applied and validated. Read live
rows and bike usage, source records, the current duplicate report, the original
1986-87 / 90-91 hub tables, 1997 road/trekking rim spreads and 1996/1999 guide
rim listings. This is not a new catalogue ingestion or approval of merges.

### 3397 Mavic 500 RD — description correction applied, user approved

[90/91 p.10](https://www.disraeligears.co.uk/site/00_main_images/mavic_trade_catalogue_9091_page_10_main_image.jpg),
the row's cited source **121**, explicitly distinguishes front **500 RD**,
100 mm, **230 g steel QR / 215 g alloy QR**, from rear **506 RD**, 126 mm,
**280 / 260 g**. It describes polished forged dural, a light alloy axle and
adjustable sealed cartridge bearings. [1986-87 p.16](https://www.disraeligears.co.uk/site/00_main_images/mavic_-_trade_catalogue_1986-1987_page_16_main_image.jpg),
source **119**, gives the same weights and a footnote offering a 121 mm
five-speed rear. Neither checked table calls 506 RD a pair code. The existing
description's front 236/212 g and rear 286/261 g do not match its cited 90/91
table; its separately listed 121 mm weights are not supported by those pages.

Live before value, **3397**, brand 31, category 13, source_ref 121,
title/search_text `Mavic 500 RD`, years 1975-1991:

> Mavic 500 RD, France, 462 grams. Sealed adjustable annular-bearing hub, forged body, steel or dural QR. Front 100 mm 236/212 g; rear 5-sp 121 mm 275/250 g, 6/7-sp 126 mm 286/261 g. Pairs 505 RD, 506 RD.

Applied replacement, **231 characters**:

> Mavic 500 RD, France, 462 grams. Forged polished-alloy body, alloy axle, adjustable sealed cartridge bearings. Steel/alloy QR: front 500 RD, 100 mm, 230/215 g; rear 506 RD, 126 mm, 280/260 g. A 121 mm 5-speed rear was also offered.

The independent existing 462 g record is retained without inventing a skewer,
front/rear or pair attribution. Correcting the catalogue specification does not
establish what that specimen measurement represents. Preserved source_ref **121**,
title/search_text, dates and both existing bike links **14700 / 15661**.
Only description changed; no numbered hub insertion, rename or link correction.
Restoration, only if deliberately justified: restore the exact old description
above on 3397, guarded by title/brand/category/source and the exact new text.

Read-only preflight matched exactly the intended row and confirmed length 231
within 255. Approved transactional SQL changed **one component row**; second run
changed **zero**. Readback confirmed the exact 231-character value, source 121,
title/search_text, 1975-1991 dates and both Peugeot `Mavic 506 RD` links
**14700 / 15661 -> 3397** unchanged. Quality report at **09:08 UTC** found zero
structural errors and the same 1,948 review findings by check (1,563 incomplete
dates, 326 linked date conflicts, 35 broad Freewheel labels, 24 descriptions at
limit). No code change or test suite run needed for this text-only update;
generator component matching reads ID/title/category, not description, so no
regeneration required. Completed task removed from TODO and temporary SQL removed
after validation. The rim identity questions below remain open.

### Rim overlaps — no merge proposed from this pass

Historical review: the later maker-source follow-up and T261 crosswalk above
supersede the current-state claims below about 10182/10197 descriptions, the
T217 overlap and the unresolved T261 profile. Retain this earlier evidence trail.

The [1997 maker catalogue](https://labibleduvelocataloguesmavic.blogspot.com/p/mavic-1997.html)
spreads **3** (road) and **4** (MTB/trekking) distinguish tubular/clincher Reflex
and CXP 30, list coating/colour options, and show T261 only in silver. Broad
rows and finish-specific rows overlap in coverage, but that alone does not
identify which record should absorb a construction or edition difference.

**T261 9983 / 10182** needs a more specific crosswalk before merging:

- [Guida '96 scan 16, printed p.119](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_96_-_componenti_scan_16_main_image.jpg),
  source **357**: T 261 Argent, 700C, **26 mm**, 540 g, 36/40/48 holes,
  silver anodised, double stainless eyelets, hybrid/tandem use.
- 1997 maker spread 4: T261, **23 mm in the profile drawing**, 540 g,
  36/40/48 holes, recommended 28-35 mm tyres, double-wall profile, silver.
- [Guida '99 scan 16, printed p.104](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_99_-_componenti_scan_16_main_image.jpg),
  source **353**: T 261 Argent, 622, **20 mm**, 540 g, 36/40/48 holes,
  double wall/stainless eyelets, silver anodised, trekking/touring/tandem.

10182 currently carries the 1999 20 mm/double-wall wording and a 1996-1999
range but source_ref **357**. Thus the older-source attribution does not support
all its description as written. Do not silently interpret 26/23/20 as outside
versus inside measurements or assert a generation change; obtain a numbered
profile/specimen crosswalk or manufacturer clarification first. Both rows have
zero bike links; neither appears in generator overrides. Kept unchanged.

The Reflex and T217 reviews were subsequently completed as recorded above;
tubular CXP 30 **5062 / 10199** remains open for edition reconciliation.
Guida '96 scan 16 prints 22 mm for T217 whereas '99 scan 16 gives 17 mm;
the '97 drawing gives 22 mm. Guida '96 scan 17 places CXP 30 in the tubular
section but prints 520 g, unlike the maker's 465 g tubular / 520 g clincher.
Guida '99 scan 17 separately lists the 465 g tubular. These conflicts need
explicit reconciliation, not an automatic merge or a guessed measurement basis.
No correction made to 10197's hard-anodised wording: Guida '99 scan 17 itself
prints that wording for Argent, so it is not a proved transcription error.

Current `duplicate-report --brand=Mavic` still gives 13 pairs (7 configuration,
4 generation, 2 variant) and does not flag these broad/finish overlaps. Schema
inspection found component_id only in component_detail and bike_spec; usage was
checked, but no deletion is prepared. Original existing source files were left
alone. Task-created downloads/indexes and applied SQL removed after recording
URLs, findings and validation. TODO records remaining identity actions.

## General quality audit — 2026-11-15 (read-only)

Scope: all live Mavic components (brand 31), all their bike links, and all
spec values containing Mavic. No component, link, date or generator changes
were applied. This was a structural/identity triage with targeted scan checks,
not a fresh extraction of every catalogue or verification of every specimen.

- Live baseline: **243 components**, **94 linked specs**; **182 Mavic-text specs**,
  of which **88 unlinked** (includes generic maker text, alternatives and Extras;
  this is not a count of missing models). **44 components** retain source_ref 1
  (VeloBase only); no component lacks a source reference or description.
- Ran the existing quality-report snapshot reader and checks, then scoped
  findings to Mavic components, linked/Mavic-text specs, owned groups and
  category-brand entries. **No structural errors or linked date conflicts**;
  **12 incomplete-date findings**: 3406, 4344, 5044, 5050, 5064, 5081, 5095,
  5096, 5101, 5106, 6823, 6975. Missing dates remain unknown, not inferred.
- `duplicate-report.js --brand=Mavic`: 13 grouped pairs (7 configuration,
  4 generation, 2 variant), no automatic merge/review candidates.
  `--near --reviewed`: seven already-reviewed kept-apart pairs; no new near
  candidates. `--paren --reviewed`: zero. These reports miss the manually
  identified naming/coverage overlaps below and do not close them.

### Findings and next evidence

1. **Coating specificity in existing bike links (resolved by source review and
   user-approved repair below):** specs **1607**
   (1993 Bianchi Nth FS), **1624** (Super Grizzly), **1658** (Grizzly) all said
   only `Mavic 231` and linked to **5071 M 231 CD** through the unscoped
   `mavic 231` Rims override. Mavic's [90/91 p.27 scan](https://www.disraeligears.co.uk/site/00_main_images/mavic_trade_catalogue_9091_page_27_main_image.jpg)
   explicitly distinguishes neutral-anodised **8191 M 231** from hard-anodised
   **5071 M 231 CD**; **9972 Ceramic** is also a separate row. The scan was
   visually checked. At audit time the CSV lacked the coating and the original
   1993 Bianchi product tables were unverified (see the bike catalogue notes).
   This initially flagged insufficient evidence for CD. The recovered Bianchi
   tables below now confirm 1607's CD identification and contradict the CD
   links on 1624/1658. The latter now use standard row 8191. The 2026-11-04
   extension of 5071 to 1993 is now supported specifically by Nth FS.
2. **Existing-row mapping opportunity:** specs **14700** (1986 Peugeot PX)
   and **15661** (1987 PX 10), `Mavic 506 RD`, were NULL. Existing **3397
   Mavic 500 RD** includes the 506 RD rear configuration and covers those
   years. The source review below now confirms both proposed mappings to
   3397; both links and scoped generator overrides are now applied and validated
   in the entry below.
3. **Description/source discrepancy (corrected below):** **1643 Mavic 637 (MTB)**
   ended `170/175/180 mm, 680/690/700 g.` Its cited source **121**,
   [90/91 p.31 scan](https://www.disraeligears.co.uk/site/00_main_images/mavic_trade_catalogue_9091_page_31_main_image.jpg),
   visually reads **660/680/700 g** for those lengths. The user-approved
   correction is applied and validated in the entry below. No bike links use
   this row.
4. **Dates need identity-specific evidence:** **5099 Open Pro (1986)** and
   **5100 Open Pro SUP Maxtal (1980–90)** are VeloBase-only rows alongside
   **10183 Open Pro Argent SUP UB Control (1999)**. Their dates and relationship
   need a maker/specimen crosswalk, not automatic extension/merging. Likewise
   **2410 870 SSC 31.8 mm (1984–92)** starts four years before **2409 870 SSC
   (1988–92)**, whose 1988 introduction is recorded above. Find positive
   31.8 mm version evidence before changing either identity/date. None of these
   rows has a bike link.
5. **Historical manual rim-overlap queue missed by automatic grouping:** the
   Reflex, T217 and T261 entries were subsequently resolved as recorded above;
   the original queue was to compare
   **9975 Reflex tubular / 10197 Argent / 10198 Blu** (375 g); **9981 T217 /
   10184 T217 Argent / 10185 T217 CD** (470 g); **9983 T261 / 10182 T261
   Argent** (540 g); **5062 CXP 30 tubular / 10199 CXP 30 Argent** (465 g).
   Existing broad descriptions already include some of the separately inserted
   finishes. Reconcile the 1996/1997/1999 scans and the variant policy to decide
   whether to merge or narrow the broad row. These are candidates, not proven
   duplicates; no links use these rows. Keep the already-reviewed **10597 CXP
   Titane clincher / 10607 CXP 30 Titane tubular** distinction recorded in
   cross-catalog-notes.md.

Previously recorded questions remain evidence gaps: Sprint, Velotech (grey and
blue Titan are since resolved in the Titan/Bleu section above),
190 NE versus 190FB/195NE, bare 400, 630 lettering, early rim identities and
the conflicting 310 headset weights. Rechecked 1986–87 p.22: it does print
82 g for 311/312; this does not resolve the 1984 102 g discrepancy. Earlier
historical entries saying 5089/5090 probably duplicate should be read against
their current polished versus silver-anodised descriptions; no merge supported
by this pass. Old claims that 5097 ends in 1989 or that Helium has no row are
historical: 5097 now ends in 1993 and Helium is represented by 9985/10376/10377.

Validation: read-only inventory/source/link queries, consistent-snapshot
quality checks and all three duplicate modes. No regeneration was necessary
because mappings and component records were unchanged. Task-created scripts
and downloaded page copies were removed after recording the source URLs here.

## Peugeot 506 RD hub identification — 2026-11-15, read-only review

- Visually checked source **119**, [Mavic 1986–87 printed p.16](https://www.disraeligears.co.uk/site/00_main_images/mavic_-_trade_catalogue_1986-1987_page_16_main_image.jpg):
  heading **500 RD Hubs**, front **500 RD**, 100 mm; rear **506 RD**,
  **126 mm**, 24/28/32/36/40 holes, **280 g steel QR / 260 g alloy QR**.
  Footnote offers the rear in 5-speed 121 mm width. Thus 506 RD is the road
  rear configuration within the existing 500 RD family; the audit's earlier
  wording calling 506 RD a pair code was inaccurate. The source does not
  justify inferring which skewer material Peugeot fitted.
- Source **310**, [1986 Peugeot page](https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1986.html),
  image **CATALOGUES CYCLES PEUGEOT 1986 (18)** / `b18.jpg`, US specification
  table: **PX** column explicitly prints **Mavic 506 RD** under Hubs and a
  six-sprocket Maillard 700 Super Plus 13/14/15/17/19/21 freewheel. Original
  table visually checked. Before repair: **14700**, bike **884**, year **1986**,
  label **12 Hubs**, source_ref **310**, value `Mavic 506 RD`, component NULL.
- Source **312**, [1987 Peugeot USA printed p.4](https://www.bikeboompeugeot.com/Brochures%20USA/Peugeot%201987%20USA%20Brochure/Peugeot%201987%20USA%20Brochure%20Page%204.jpg):
  **PX10** sidebar explicitly prints **Mavic 506 RD**, with the same six-cog
  freewheel. Visually checked. The old Blogger `lh3` proxy returned 404;
  BikeBoomPeugeot provides a working original scan. Before repair: **15661**, bike
  **933**, title **PX 10**, year **1987**, label **12 Hubs**, source_ref
  **312**, value `Mavic 506 RD`, component NULL.
- **Supported proposal:** link both existing specs **NULL -> 3397 Mavic 500
  RD**. This family record already covers the 126 mm 506 rear and is dated
  **1975–1991**, source_ref **121**. No insert, rename, year widening, CSV
  value/label change or split is needed. Do not substitute 8159 550 RD (its
  rear is 556 RD), 3400 510 (516 rear), or 3408 580 CX (80 mm front).
- **Applied on user approval, 2026-11-15:** specs **14700 / 15661 NULL ->
  3397**. Added `mavic 506 rd` Hubs overrides scoped to **1986 PX / 1987
  PX 10**. Values, CSVs, source references 310/312, component dates and all
  existing IDs were preserved. Guarded transactional SQL affected exactly
  **two specs**; rerun **zero**. Restoration is component_id 3397 -> NULL on
  only 14700/15661, guarded by bike 884/933, label 12, source 310/312 and
  exact `Mavic 506 RD` value.
- Compared the actual generator through matching/integrated controls across
  **93 loaded CSVs / 20,600 specs**: exactly those two mappings changed,
  generated links **7,324 -> 7,326**. No other value/target changes;
  `bike-update.sql` was untouched. Live readback confirms both targets, dates
  within 1975–1991 and no duplicate specs. Scoped consistent-snapshot quality
  checks on 3397 and all its linked specs found **zero findings**. Verified
  overrides do not match other bikes/years. `npm test` passed all nine test
  files and `git diff --check` passed. Temporary SQL/comparison files removed
  after validation.
- Separate description issue noticed during identification: 3397 then
  ended `Pairs 505 RD, 506 RD.` The 1986–87 table labels 506 RD as the rear,
  which prompted a source-aware wording review; it was not grounds to create a
  duplicate hub row. Component-description changes were not part of the
  approved link repair. The subsequent user-approved 2026-11-17 description
  correction above resolves the wording and source-weight discrepancies;
  the two bike links remain unchanged.
  Downloaded HTML/scans and temporary image indexes were removed after recording
  evidence; the SQL retained for approval was removed after application.

## Bianchi M 231 coating evidence — 2026-11-15, read-only review

- New source recovery: [Upcycles, 1993 Bianchi USA catalogue](https://upcycles.cc/blogs/catalog-archive/1993-bianchi-catalog-usa),
  [complete PDF](https://cdn.shopify.com/s/files/1/0786/6705/5385/files/1993_Bianchi_catalog_-_USA.pdf?v=1751937419).
  Retrieved intact (18,861,771 bytes, 31 PDF pages). It has the same hand-marked
  93 cover and dealer annotations as the previously truncated source. Visually
  checked **PDF pages 24–25** (no printed page number visible), not the whole
  catalogue. This supplies the missing original-bike evidence for the three
  specs; no further specimen-photo hunt is needed for their factory rim finish.
- **Nth FS, spec 1607, bike 104:** PDF p.24 prints **Mavic 231 hard anodized**.
  This supports its existing **5071 M 231 CD** link, using Mavic 90/91 p.27's
  explicit hard-anodised CD versus neutral-anodised standard distinction.
- **Super Grizzly, spec 1624, bike 105:** PDF p.24 prints **Mavic 231 silver
  anodized**. **Grizzly, spec 1658, bike 107:** PDF p.25 prints the same.
  Their former **5071 CD links were wrong**; the supported target is **8191
  M 231**, the standard neutral/silver-anodised version. The product photos
  show silver rims as corroboration; the printed specification is decisive.
- Root cause: the 1993 CSV cleanup explicitly removed rim finish words and
  collapsed different specifications to `Mavic 231`; the unscoped override
  then assigned all three to CD. This supersedes the audit's earlier
  ambiguity and the original all-three-CD mapping in the Bianchi bike notes.
- **Reviewed repair (subsequently applied below):** restore `Mavic 231 hard anodized` for
  1607/Nth FS and `Mavic 231 silver anodized` for 1624/Super Grizzly and
  1658/Grizzly in both CSV and existing live spec values (UPDATE in place,
  preserve spec IDs; regeneration alone would insert duplicate specs).
  Keep 1607 -> 5071; relink 1624/1658 **5071 -> 8191**. Add 1993 bike-scoped
  overrides for the restored values and replace the unqualified `mavic 231`
  -> 5071 override with an ambiguity guard. Compare all loaded CSV mappings.
- **Associated date correction (subsequently applied below):** 8191 was **1990–1991**,
  source_ref **121**. Extend only year_to **1991 -> 1993**, source_ref
  **121 -> 47**, using these original 1993 fitments; keep its description and
  year_from. 5071 remains **1990–1993**, source_ref **121**. No new component
  row or merge is needed. This is availability evidence, not proof of an end
  of production in 1993.
- The pre-repair readback showed all three specs saying `Mavic 231`, source_ref
  **47**, and linking to **5071**. No DB, CSV or generator changes were
  made during this review. Original source URLs and page references are retained
  here; task-created PDF/text/renders were deleted after review.

### Application and validation — 2026-11-15, user approved

- Applied the reviewed repair in place: **1607** now `Mavic 231 hard anodized`
  -> **5071**; **1624 / 1658** now `Mavic 231 silver anodized` -> **8191**.
  Source_ref **47**, raw label, bike/spec IDs and one Rims spec per bike were
  preserved. Restored exactly these three cells in `1993_bianchi_spec.csv`.
- **8191** year_to **1991 -> 1993**, source_ref **121 -> 47**; year_from
  **1990**, description and identity unchanged. These old values and the
  original `Mavic 231` -> 5071 assignments above provide the restoration
  baseline. No component insert/delete/merge and no loss/gain of links.
- Generator now uses 1993 bike-scoped finish mappings for these three bikes;
  bare `mavic 231` is explicitly ambiguous. Verified it stays NULL even with
  only one candidate, and the finish overrides do not apply to other bikes
  or years. The earlier all-three-CD mapping is superseded.
- Compared the actual generator's preprocessing, matching and integrated-lever
  results for **93 loaded CSVs / 20,600 specs** before/after: exactly the three
  expected value changes and two target changes, **7,324 generated links** in
  both snapshots. Existing `bike-update.sql` was untouched. These are generated
  CSV counts, not a claim that every generated mapping agrees with live DB.
- Guarded transactional SQL affected **one component and three specs**;
  rerun affected **zero**. Live readback matches all three generated results;
  scoped consistent-snapshot quality checks found **zero findings** on 5071,
  8191 and every spec linked to them. `npm test` passed all nine test files;
  `git diff --check` passed. Temporary SQL, CSV backup, comparison script and
  snapshots were removed after validation.

## 637 crank description correction — 2026-11-15, user approved

- Component **1643 Mavic 637 (MTB)**: corrected the weight sequence for
  **170/175/180 mm** from **680/690/700 g** to **660/680/700 g**, matching
  source **121**, [90/91 printed p.31](https://www.disraeligears.co.uk/site/00_main_images/mavic_trade_catalogue_9091_page_31_main_image.jpg).
- Only that sequence changed. Full original description for restoration:
  `Mavic 637 (MTB), France. ATB crankset: oval 26/28 small ring with five torque positions (round 24/26/28 available), 36/38 middle, 46/48 large, Zicral rings; 9/16 x 20; 170/175/180 mm, 680/690/700 g.`
  Restore it only with a guard matching the corrected description.
- Guarded SQL updated exactly one row; live readback confirmed the corrected
  **198-character** description, source_ref **121**, years **1990–1991** and
  **zero bike links**. Rerun affected zero rows. Titles, dates and mapping inputs
  did not change, so catalogue regeneration was unnecessary. Temporary SQL was
  removed after validation.

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

## Mavic Catalogue c. 1980 — disraeligears.co.uk, data_source id 240

Source: https://www.disraeligears.co.uk/site/mavic_-_catalogue_1980.html (24 pages, bilingual FR/EN, no printed date). Dated c. 1980: page 9 lists the 1980 teams using the Grise SSC rim, the 800 derailleur is not called "new", and there is no G 40 rim (1982). Covers rims (Module E / E2 / 3, polished and anodised tubulars), 500 RD road and track hubs and the CX hubs, 600 RD bottom bracket, 800 derailleurs, series 600 pedal (ref. 640), cranks (no model number printed), G.I. 351 / F.B. 352 bends, stems, 410 / 420 brakes, 300 headset, tools.

- year_from moved back to 1980 (were 1984): 8152 Sport 600, 5109 Spéciale Sport, 5105 Piste, 5052 Argent 10, 8153 Bleu SSC, 8154 Argent 12 SSC, 3408 580 CX, 8160 580 CX Piste, 3837 640 pedal, 361 410 lever.
- year_to extended to 1980: 5087 Module E (Red Label, was 1975; 3 Peugeot 1978 specs link to it), 5089 Module E2 (was 1979), 5111 Sport Tubular (was 1970), 6583 grooved quill stem (was 1970). 5053 Argent 7 and 5104 OR 7 had NULL years, now 1980-1980.
- Descriptions only: 3401 520 Piste (listed in 1980 as the 500 RD track hub), 2405 810 (105 g in 1980), 6582 flat stem.
- Retitled 4336 "Mavic 801" (1970-80, 175 g, bare) -> "Mavic 800 (original)", 1979-80: the catalogue's rear 800 weighs 175 g and has the 8-position chain tension / adjustable roller design, not the 801's adjustable chain guide (4337, 1980-85). The 1979 start comes from the 810 front (1979), not from this catalogue. Old title "Mavic 801" so later sources using it can be matched. 4348 "Mavic 800" (1993, 241 g) is a different, later row and was left alone.
- New rows: 9030 Mavic 800 levers (68 g pair), 9031 Mavic 351, G.I. bend and 9032 Mavic 352, F.B. bend (40-44 cm, 340-355 g). Existing 2862 "Mavic 351" is a different 1990 bar (part number reused).
- Unresolved: 3835 "Mavic 600" pedal (1979, bare) is probably the series name of the 640, a merge candidate; Module 3 CD / 3D Argent are absent from this catalogue (weak evidence they came later, not capped); the catalogue's crank has no number (the 1979-84 "Mavic 600" rows 1637-1639 cover it).

## Mavic "The MAVIC advantage" dealer leaflet (1984) — disraeligears.co.uk, data_source id 241

Source: https://www.disraeligears.co.uk/site/the_mavic_advantage.html (10 pages, FR/EN/DE, Taff Vale Cycles dealer stamp). A digest of the 84/85 catalogue ("ask for catalogue 84/85"; imprint "884"), so dated 1984. Almost everything already matched data_source 114 and the later passes: 410 / 420 / 430 brakes, 300 / 310 headsets, 801 / 851 182 g, 810-812 and 860-862, 500 RD pair 522/473 g, Module 3 / 3D / 4, the tubular and hard-surface rims, TTM 4 / 560 / 504 weights.

- year_to 1980 -> 1984: 5087 Module E (Red Label) and 5089 Module E2 (both still listed in 1984). 5089 description rewritten: holes 32-36-40 (the 1980 pass had "36-32"), 650A 36 holes 400 g, velobase "(Spec)" weight dropped.
- 8159 550 RD: pair weight 511/462 g (1984) added; the per-end figures in the row sum to 505/465 g, so the sources differ slightly.
- Consistent, no change: Module 3D Argent present in 1984 (absent in 1980, row left 1980-91), Sport 700C and Argent 7 absent in 1984 (rows end 1980), 801 at 182 g vs the 1980 catalogue's 175 g 800 (supports the 4336 retitle).
- Out of scope: the 1000 SSC group page (no part numbers or weights), QR skewers, tools.

## Mavic leaflet c. 1979 — disraeligears.co.uk, data_source id 242

Source: https://www.disraeligears.co.uk/site/mavic_-_leaflet_1979.html (7 pages, FR/EN fold-out, no printed date). Dated c. 1979 by the site (shows Module E, no separate E2 rim, same photos as the c. 1980 catalogue, data_source 240); the leaflet's own caption says Module E also exists with a double eyelet (E2), 36 and 32 holes. Earliest Mavic document with a derailleur. Series 100 rims, 500 road / track / CX hubs, 600 bottom bracket (310 g), pedal (164 g) and cranks, 800 rear (175 g, 12-32) / front (102 g) / levers (68 g), 300 headset (82 g), bends and stems (no part numbers), 410 / 420 brakes (410 stirrup 184 g, lever 102 g).

- year_from 1980 -> 1979 (14 rows): rims 5091 Montlhéry Légère, 5093 Route, 5105 Piste, 5052 Argent 10, 5053 Argent 7, 5104 OR 7, 5069 GP 4, 8153 Bleu SSC, 8154 Argent 12 SSC; hubs 3408 580 CX and 3401 520 Piste ("track and CX versions"); 84 600 RD; 853 Pro 420; 9030 800 levers; 361 410 lever. The leaflet's "Argent S.S.C." was taken as 8154 "Argent 12 SSC" (both 395 g, 20 mm).
- Descriptions: 361 (204 g is the pair, 102 g each), 2405 810 (102 g in 1979, 105 g in 1980), 3835 bare "Mavic 600" pedal now the series 600 pedal (164 g), succeeded by the 640 (3837, 167 g). This resolves the open question in the c. 1980 entry: 3835 and 3837 are two eras of one series, not a duplicate; no merge.
- Confirmed, no change: 4336 Mavic 800 (original) 175 g 12-32T (its 1979 start now has a source), Module E / 3, Montlhéry Pro, CX 18, Paris-Roubaix SSC red label (1979), 300 headset, 410 / 420 brakes.
- Judgement: the 1979 date is inferred. If the leaflet is really 1980, the 14 year_from moves are one year early; the pre-existing 1979 rows (810, E2, 300, Paris-Roubaix SSC red label, 600 cranks) support 1979. Not in the leaflet and left alone: Sport 700C, Module E2 Argent, 3D Argent, Module 4, GL 330, G.E.L. 280, Argent 8 (all dated 1980 or later).


## Mel Pinto Imports parts catalog, 1970 to 1975 (p. 30), `data_source` 272

See the full entry in [suntour.md](suntour.md). Added 9579 Monthléry N (395 g)
and 9580 Monthléry Légère (310 g), both 20 mm, 700C, years 1970-1975 (the
binder range). 9104 Extra Légère description now names the 20 mm / 259 g
Pinto figures against 21.5 mm in Bikecology 1980 (source_ref left on 247).

## Mavic racing rims sheet (1974) — labibleduvelocataloguesmavic "MAVIC 1974", data_source id 300

- Source: https://labibleduvelocataloguesmavic.blogspot.com/p/mavic-1974.html, one JPG (1024 x 728,
  proxied from bibibike.forumserv.com 1974-4d2cec9.jpg): "Jantes en alliage léger pour cycles de
  course / Lightweight rims for racing cycles", Mavic, Saint Trivier sur Moignans. No year printed;
  1974 from the blog. It is the same sheet as Mel Pinto binder p. 30 (source 272, 1970-75).
- Rims: Monthléry N 395 g and Monthléry Légère 310 g (20 mm, 700C, 24-40 holes); Extra-Légère or
  Golden Monthléry 259 g (20 mm, 28-40); Sport 390 g, Piste 420 g, Spéciale Sport 410 g (21.5 mm,
  700C; Sport and Spéciale Sport 32-40, Piste 24-40); Démontable clincher 22 mm (650B, 26 x 1 3/8,
  700C, 27 x 1 1/4; 32-40).
- year_from moved earlier to 1974 (old value): 9104 Extra Légère (1978), 5105 Piste (1979), 5109
  Spéciale Sport (1980), 5091 Montlhéry Légère (1976). The 2026-10 Mel Pinto pass left these because
  the binder's range is loose; a dated maker's sheet settles it. The 'mavic special sport' override
  (1980-91 -> 5109) is unchanged.
- Descriptions: 5105 Piste (21.5 mm and 420 g in 1974 vs 370 g in 1979), 5109 Spéciale Sport (410 g,
  32-40 holes in 1974 vs 400 g c. 1980), 5047 Démontable (was a velobase stub; 1974-1974, clincher
  sizes and holes, measured 470 g kept), 5091 Montlhéry Légère (1974 holes and weight).
- Merged: deleted 9580 "Mavic Monthléry Légère" (1970-75, source 272, 0 links; added from the Mel
  Pinto copy of this sheet) into 5091 Montlhéry Légère. No overrides referenced it.
- Matched, no change: 5111 Sport Tubular (390 g, 21.5 mm), 9579 Monthléry N.
- Lead, kept apart (user's call): 9579 Monthléry N (395 g, 20 mm, 1970-75) looks like the earlier
  name of 5092 Montlhéry Pro (20 mm, 395 g in Kitching 1984, 399 g avg). 5110 "Mavic Sport" (velobase
  stub, 1960) vs 5111 Sport Tubular also left.

## Mavic catalogue (1979) — labibleduvelocataloguesmavic "MAVIC 1979", data_source id 301

- Source: https://labibleduvelocataloguesmavic.blogspot.com/p/mavic-1979.html, 17 JPGs ("MAVIC 1979
  (1-17)", s0 = 1725 x 1237, FR / EN). Printed page = scan - 1; scan 2 is the contents. Dated by
  its own text: the Grise SSC rim "developed in 1974 ... used for five years ... (In 1979:
  Renault-Gitane, Miko-Mercier, Fiat-la France, Raleigh, Bianchi, Gios, Teka, Supéria, Scic,
  Novostil, Flandria, Zonca-Santini, Magniflex)". So it is a year before the c. 1980 catalogue
  (source 240, 1980 team list) and fuller than the c. 1979 leaflet (source 242).
- Pages: 2 clincher rims (Module E, E2, E2 Argent, E2 650A, Module 3 700C / 650), 3 polished
  tubulars (Sport 700C 390 g / 600 300 g, Spéciale Sport 400, Montlhéry Route 420, Pro 395, Légère
  310, Piste 370), 4-5 anodised tubulars (Argent / Or 10, Argent / Or 7, GP 4, Bleu SSC, Argent 12
  SSC, Grise SSC Paris-Roubaix 400 g), 6-7 500 RD hubs (front 236 / 212 g, 505 RD 275 / 250 g, 506 RD
  286 / 261 g), 8-9 600 RD bottom bracket (602 / 603 metric and Italian, steel / alloy / titanium
  axles, 210-340 g), 10-11 800 rear (175 g, 12-32), 12 Series 600 cranks (593-600 g) and pedals 640
  (167 g) / 641, 13 bends 351 G.I. / 352 F.B. and flat / round / grooved stems, 14 brakes 410 / 420,
  15 hub spares, 16 tools (out of scope). No front derailleur or shifter in this printing (absence
  only; 2405 810 stays 1979).
- year_from 1980 -> 1979: 5090 Module E2 Argent, 8152 Sport 600, 9031 351 G.I. bend, 9032 352 F.B.
  bend, 3837 640 pedal (description rewritten: 167 g, 641 meanings).
- Added: 9969 Mavic 641, Piste (1979-1979): in 1979 the 641 is the track version of the 640. The
  number was reused: 8180 "Mavic 641" (1986-91) is the 640 with 9/16 x 20 threads. Kept apart.
- Merged (0 links, no overrides; source_id values were not captured before the delete):
  3835 "Mavic 600" pedal (1979, 164 g, source 242) into 3837: the 1979 catalogue calls the Series
  600 pedal ref. 640, which reverses the c. 1980 entry's "two eras, no merge"; 9421 "Mavic Monthlery
  Route" (1984, source 261) into 5093 Montlhéry Route and 9422 "Mavic Monthlery Pro" (1984, source
  261) into 5092 Montlhéry Pro: Kitching 1984 rows duplicating the existing ones, whose facts
  (21.5 mm 420 g; 20 mm 395 g) the survivors already carry.
- Matched, no change: rims Module E / E2 / 3, Montlhéry Route / Pro / Légère, Piste, Spéciale Sport,
  Argent / Or 10 and 7, GP 4, Bleu / Argent 12 SSC, Paris-Roubaix SSC; 3397 500 RD; 84 600 RD; 4336
  800; 1637 Series 600 cranks; 6582 / 6583 stems; 410 / 420 brakes.

## Mavic USA technical manual (c. 1990) — labibleduvelocataloguesmavic "MAVIC 1989", data_source id 302

- Source: https://labibleduvelocataloguesmavic.blogspot.com/p/mavic-1989.html, 23 JPGs (Mavic-1 ...
  Mavic-19, 770 x 1024 at s0). Not a range catalogue: an English Mavic USA installation manual (east
  and west US phone numbers) with a specification box per section: 305 / 315 / 316 / 317 headsets,
  500 / 530 / 550 hubs, 610 URD and 616 RD bottom brackets, 631 and 637 cranksets, 646 LMS pedals,
  820 retrofriction levers, 821 / 825 index levers, 840 / 841 / 845 and 801 PRO / 851 SSC rears.
  Undated (welcome text: "much has changed ... in the last two years. Since SSC ..."); the blog says
  1989. Dated c. 1990 (user's call): it shows the 1990 range (new in the 90/91 catalogue, absent from
  88-89) beside the 801 / 851 the 90/91 catalogue had dropped, so no year_from was moved on it.
- Updated (source_ref -> 302): 4338 Mavic 801 (1986) and 4346 Mavic 851 (1986), SSC year_to 1989 ->
  1990 (still supported as 801 PRO / 851 SSC). 3047 Mavic 316 and 3048 Mavic 317: velobase "(Spec)"
  weights were swapped (316 is 145 g, 317 is 155 g); descriptions rewritten with thread, head and
  crown race diameters and stack height; year_from 1980 -> 1990 (velobase decade bucket; absent
  from the complete 1984, 86-87 and 88-89 catalogues), year_to 1990 kept.
- Matched, not changed (specs here vs DB): 305 118 g (DB 116), 315 140 g, 530 505 g, 610 URD spindles
  112 / 114 / 116 / 119 / 123 (290-315 g), 616 RD 124 / 134 (350 / 360 g), 631 track / double / triple
  668 / 730 / 835 g, 637 660-700 g, 646 LMS 480 g (DB 496), 820 70 g, 821 77 g, 825 160 g, 840 230 g /
  841 235 g / 845 295 g (max cog 28 / 30 / 32, capacity 30 / 36 / 38).
- If a dated source shows the manual is 1989, the 1990 starts of those rows could move to 1989.

## Mavic "ATB Guide 90-1" (2 scans) — labibleduvelocataloguesmavic "MAVIC 1990", checked 2026-10-30, no change

- Source: https://labibleduvelocataloguesmavic.blogspot.com/p/mavic-1990.html, 2 JPGs proxied from
  bibibike.forumserv.com (mavic1990a / mavic1990b): the cover of the "ATB Guide 90-1" (Saint-Trivier-
  sur-Moignans, printed in France) and its derailleur spread only: indexed ATB group for 6 or 7 speed,
  anatomic under-bar levers adjustable to all positions; 845 rear 250 g, 875 front 110 g, 825 shifters
  160 g. All three already match 4345 / 8195 / 6085 (source 121, years 1990-91/92). No data_source row
  created, no SQL. The rest of the guide is not on the page; do not re-check.

## French buyer's guide, Mavic ATB pages (1991) — labibleduvelocataloguesmavic "MAVIC 1991", data_source id 303

- Source: https://labibleduvelocataloguesmavic.blogspot.com/p/mavic-1991.html, one JPG (1024 wide,
  proxied from bibibike.forumserv.com 1991-4d2cec1.jpg): pp. 100-101 of a French 1991 magazine buyer's
  guide (publisher not shown), Mavic's ATB range: 315 / 316 / 317 headsets, 616 RD BB, ATB hubs (505 g
  the pair), 875 front 110 g, 825 shifters 160 g, 845 rear 250 g, 637 Zicral crankset, seatpost, and a
  "Jantes Mavic VTT 26" table: Oxygen M6 / M6 CD 30 mm 490 g, Energy M7 CD 26 mm 580 g, Rando M4 26 mm
  550 g, Rando M5 32 mm 500 g, MA 40 MB 20.5 mm 400 g, P.S.P. M 231 / CD 23 mm 410 g, M 261 / CD 26 mm
  460 g, M 281 / CD 28 mm 520 g, M 231 Ceramic 23 mm 410 g; plus the ceramic coating's three claims.
- Added (1991-1991, user's call to use this secondary source): 9970 Mavic M 281, 9971 Mavic M 281 CD,
  9972 Mavic M 231 Ceramic (the only rows missing from the DB). Everything else matched; no updates.
- If a Mavic catalogue turns up for 1991-92, check these three for wider years and a maker's weight.

## Mavic "Les 92" leaflet (1992) — labibleduvelocataloguesmavic "MAVIC 1992", data_source id 304

- Source: https://labibleduvelocataloguesmavic.blogspot.com/p/mavic-1992.html, 6 JPGs ("MAVIC 1992
  (1-6)", 1453 x 2048, FR / EN / IT): cover "MAVIC LES 92" (571 hubs and the 3G wheel), 571 road
  freehub (new, raced in the 1991 Tour de France by RMO, Lotto, ONCE; 4 stage wins), its 8-speed
  cogs and spec table, 577 MTB freehub (parts interchangeable with the 571), 501 / 531 hubs ("the new
  501 and 531", from the 500 series, flanges 45 mm apart), 451 brakes (tested in the 1991 Tour).
- None of these is in the complete 90/91 trade catalogue (source 121: 440 brakes, 500 / 530 / 550
  hubs), so the velobase decade buckets were moved later on the leaflet's "new" / 1991-Tour dating.
- year_from moved later (old value): 1192 Mavic 571 cassette 1990 -> 1991; 3399 Mavic 501 hub
  1990 -> 1992; 3402 Mavic 531 hub 1990 -> 1992; 856 Mavic 451 brake 1980 -> 1991; 365 Mavic 451
  lever 1989 -> 1991. year_to -> 1992 on 1192, 3399, 3402, 856 (365 kept 1993).
- Dated from undated stubs: 3403 Mavic 571 hub NULL -> 1991-1992; 3405 Mavic 577 NULL -> 1992-1992.
- Descriptions rewritten on all seven (velobase "(Spec)" weights kept on 3399 / 3402 / 856 / 365).
  No bike links or overrides on any of them. 6970 3G Carbon (1992) on the cover matches.

## Mavic ZMS 8000 group brochure (1994) — labibleduvelocataloguesmavic "MAVIC 1994", data_source id 305

- Source: https://labibleduvelocataloguesmavic.blogspot.com/p/mavic-1994.html: 3 JPGs (1024 x 1409,
  proxied from bibibike.forumserv.com mavic-zap-1994_1..3) of the "Groupe ZMS, Zap Mavic System 8000"
  brochure, FR / EN, plus a fourth image, a Cosmic wheel photo from arueda.com (not a Mavic document,
  not used). Year from the blog and file names.
- Content: the ZMS 800, "the first rear derailleur controlled by a microprocessor" (2 zap buttons,
  microprocessor in the bar end, energy from the upper jockey via cam and rack, solenoid, indexing
  piston; double shift in 0.1 s, long press runs to the end cog, self-setting limits). Composition:
  305 headset, 451 brakes, 571/2 32h hubs, 571 CB 12/23 cogs, 610 long 114 mm BB, 631 42 x 52 crankset
  (170 mm group 1, 172.5 mm group 2), 650 chain, 821 shifter, 862 front, ZMS 800 (only in the group).
- year_to -> 1994: 3049 305 (1991), 1645 631 (1991), 8194 610 URD (1991), 6087 821 (1991), 856 451
  brake (1992), 1192 571 cassette (1992), 365 451 lever (1993), 2411 862 SSC (1992). Description: 3404
  571/2 (was a bare stub; years 1993-95 unchanged).
- Added (1994-1994): 9973 Mavic ZMS 800 rear (group 32 Zap, as the 451 / 305 / 821 rows), 9974 Mavic 650
  chain. 6088 "Mavic ZAP" shifter (1993) is the first-generation Zap, left as is. No start year moved.

## Bike-Pro Publications catalogue, Mavic rear derailleurs (1996) — labibleduvelocataloguesmavic "MAVIC 1996", data_source id 306

- Source: https://labibleduvelocataloguesmavic.blogspot.com/p/mavic-1996.html: 2 images proxied from
  bibibike.forumserv.com. Image 1 (1024 x 543, "1996-4d2ced 7.png") is a US retailer's text, "(c) 1996
  Bike-Pro Publications", on the 840 double / 841 triple road rears and the 845 ATB rear. Image 2
  ("mavic_helium-1996") is an owner's photo of red Helium hubs and rims, not a document, not used; the
  DB has no Helium rows.
- Content: 840 short cage, 841 medium cage for triples ("largely identical to the 845"), all bolted and
  repairable with a parts diagram; body and links forged 2014 alloy, C.N.D. black body, silver links;
  2 mm hex adjusters; pulley plates 5 mm inner / 3.2 mm outer; grey nylon pulleys on needle bearings;
  span 6, 7 or 8 speed; "the most expensive rear derailleurs we sell".
- year_to 1992 -> 1996 on 4340 840, 4341 841, 4345 845; descriptions add 8-speed (and the body / link
  detail on 4340). A retailer listing, so possibly old stock; it is the only post-1992 attestation. No
  bike links or overrides. No start year moved.

## Mavic Catalogue Rims & Wheels (1997) — labibleduvelocataloguesmavic "MAVIC 1997", data_source id 307

- Source: https://labibleduvelocataloguesmavic.blogspot.com/p/mavic-1997.html: 8 JPG spreads
  (2048 px, "MAVIC 1997 (1-8)"), English, Mavic S.A. / Mavic U.S.A. addresses. 1 cover, 2 MTB wheels
  (Crossland, Crossmax), 3 road rims, 4 MTB / trekking / BMX rims, 5 "Why choose Mavic" (skipped),
  6 "What's new" (Helium, Crossmax), 7 FTS hubs + SUP / UB Control / Ceramic tech, 8 road wheels +
  501 hub. Left-edge spec columns read from full-size crops.
- Dating in the text: Helium launched to the pros July 1996 (Tour: ONCE, Gan, Motorola, MG); Crossmax
  2 bronzes and Cosmic Carbone gold (Pascal Richard) at Atlanta 1996; GP4 "is back"; FTS "at the
  heart of all '97 Mavic wheels". Absent: M 231/261/281, Oxygen, Energy, Module, Open 4, Mach 2, MA 40 MB.
- year_to -> 1997: 5074 MA 2, 5069 GP 4 (1997 spec 480 g, 32/36 named inline), 8193 Paris-Roubaix
  SSC, 3399 501 hub, 6972 Comète (description now covers the 1985-91 and 1997 generations).
- NULL -> 1997-1997: 5102 Open SUP CD, 5059 CXP 12, 5060 CXP 14.
- year_from moved later (old value), absent from the complete 90/91 trade catalogue (source 121), no
  earlier attestation in hand: 5107 Reflex 1990 -> 1997 (treated as the clincher; velobase 394 g avg
  sits between clincher 410 and tubular 375/390), 5062 CXP 30 1990 -> 1997, 5063 CXP 30 (clincher)
  1990 -> 1997. Probably c. 1993-94 in reality; move earlier if a dated source turns up.
- Retitled: 5062 "Mavic CXP 30" -> "Mavic CXP 30 (tubular)" (search_text unchanged).
- Added: rims 9975 Reflex (tubular), 9976 121, 9977 217, 9978 220, 9979 221, 9980 238, 9981 T217,
  9982 T238, 9983 T261, 9984 "Mavic X BMX" (logo is an X with a superscript x; name uncertain);
  wheels 9985 Helium (1996), 9986 Cosmic Carbone (1996), 9987 Cosmic Expert, 9988 Cosmic Pro,
  9989 Crossland, 9990 Crossmax (1996). MA 40 (5077, to 1999) confirmed, unchanged.

## CC9 cassette correction — 2026-11-09, user approved

- Source **374**, `Mavic catalogue (1999), CC9 cassette page 24`: https://bikalog.org/api/view/Mavic/1999/mavic99.pdf, PDF page 12/printed p. 24. Only the CC9 section was reconciled here; the rest of the catalogue was reconciled 2026-11-19 (see the 1999 GB section). Local source `/private/tmp/cassette-mavic99.pdf`, inspected render `/private/tmp/cassette-mavic99-p12.jpg`.
- Retitled component **1193** from `Mavic CR601 / CC9 (9-speed)` to `Mavic CC9 (9-speed)`; search_text -> `Mavic CC9`. The original VeloBase UUID remains `3576A017-58A4-4C68-A960-07360890255E`; its page actually says late 1990s, so the stored 1990-1990 was a decade-bucket crawl artifact. **year_from moved later, 1990 -> 1999; year_to 1990 -> 1999**, using documented attestation only, not a proven launch/end year. Move earlier if a dated earlier source is recovered.
- Replaced bare description with treated steel sprockets, ED 8/9-speed indexing, individually available cogs, 11-21T 193g / 12-23T 223g and the separate CC8 conversion kit. The specimen listing's aluminium material conflicts with the manufacturer's treated steel. CR601 is retained here as the old source name; it was not printed in the catalogue CC9 panel. source_ref **1 -> 374**.
- No bike links or generator references to 1193; no merge/delete. Prior full-row backup `/private/tmp/cassette-before-mavic.tsv`. Applied guarded update within `/private/tmp/cassette-review-2026-11-09.sql`; rerun zero rows. Description 213 characters. All 81 bike CSVs compared; only the four separately approved Shimano links changed.
