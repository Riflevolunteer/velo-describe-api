# Galli catalogs processed so far

## Galli corrections — applied and validated 2026-11-18

User approved application on 2026-11-18. Applied the reviewed guarded SQL through `scripts/load-sql.js`: **27 component rows and one data_source row changed**, exactly as reviewed. No rows inserted, deleted or merged; all 67 Galli component IDs remain. The earlier audit below is the pre-correction baseline and its preparation/identity follow-up is superseded by this applied result.

Forward SQL, guarded rollback, complete old/new plan, validation helpers/reports and downloaded scan copies were retained through readback and the zero-change rerun, then removed as task scratch. Source URLs, material old/new values, identity decisions and validation remain in this entry. No SQL or temporary artifact is retained in the repository.

### Reviewed date treatment

Use NULL for an exact numeric bound that is not established; keep the original qualitative period in the description. This avoids inventing 1970/1980 starts, decade endpoints or early/mid/late conversion rules. Numeric catalogue attestations remain available, without treating them as manufacture endpoints. No new dating schema or matcher policy is introduced.

| Affected components | Applied numeric dates | Evidence and retained information |
| --- | --- | --- |
|60,301,302,1576,2351,2355,2356,3001,4240,5779,5780,6035|Both bounds → NULL|The original decade qualifiers/open ends are in the prior audit table; all retained as explicit estimates in the updated descriptions. Existing measured weights, axle details and variants retained.|
|2999|1978–1978 → 1978–NULL|Original specimen says 1978–?; retain the reported year and remove the invented closed end. No new confirmed publication year inferred from the undated leaflet.|
|4243|1979–1980 → 1979–NULL|Original specimen says 1979–1980s; preserve that qualified period in description.|
|303,1575|1980–1985 → NULL–1985|Original specimen respectively mid-1980s onward / 1980s. Retain 1984/1985 catalogue evidence; remove inherited precise start.|
|2353,6040|1980–1986 → NULL–1986|Original specimens both mid-1980s onward; retain the dated 1986 leaflet and descriptions, including 6040's 70 g actual weight, French manufacture and braze-on retrofriction mechanism.|
|5022,5023|1980–1988 → NULL–1988|Original specimens respectively early 1980s onward / early to late 1980s. Retain 1988 guide attestation and 448 g rim weight; preserve qualifiers in descriptions.|
|733,1573,10031|1980–1980 → NULL–NULL|Only assigned numeric dating came from undated source 328. Keep the identified products, technical descriptions and source reference.|
|305,738|1980–1985 → NULL–1985|Withdraw the unsupported 1980 lower bound from source 328; preserve independently attested 1984/1985 material.|
|739|1980–1984 → NULL–1984|Withdraw the unsupported 1980 lower bound; preserve dated 1984 leaflet.|
|2352|1980–1986 → NULL–1986|Withdraw the unsupported 1980 lower bound; preserve dated 1986 leaflet.|

The six additionally discovered inherited starts (303,1575,2353,5022,5023,6040) show why inspecting only `source_ref=1` misses weak dates retained after later catalogue enrichment. Their original VeloBase pages were re-read using each live `source_id`. Genuine printed 1980 evidence remains intact: **10830**, the Super Lite/Strong headset from Bike Warehouse No.16, is unchanged. Other Galli rows are unchanged.

### Source 328 correction

- Old label: `Galli catalogue pages, English (c. 1980)`; applied: `Galli catalogue pages, English (undated)`. Country **IT → NULL**, source type catalogue and stable source ID 328 retained. No explicit sales-market address or imprint was found on the two sheets; English text or Italian manufacture cannot establish an Italian or US market.
- Old citation was `https://labibleduvelocataloguesgalli.blogspot.com/p/galli-1980.html (GALLI 1980 1.JPG brakesets, GALLI 1980 2.JPG road ensembles; undated, 1980 per the blog; PART NO. GA codes)`. Applied 214-character citation: `https://labibleduvelocataloguesgalli.blogspot.com/p/galli-1980.html; undated; blog c.1980 unverified. Matching Equus sheets have an associated intro mentioning 1983 RAAM; sheet association unproven. Market unknown.`
- All three [Equus sheets](https://equusbicycle.com/bike/components/components.htm) re-read: ensemble and brakeset pages match the printed content indexed 1980; introduction mentions John Howard's 1982 ride and Lon Haldeman's 1983 RAAM victory. That supplies a lower bound for the introduction, not proof that the other sheets are 1983 or later. Neither an exact 1980 nor exact 1983 catalogue date is assigned. Source 328 directly references only 733/1573/10031; no bikes use it. Later-source rows retain their existing references 329/330/259/262.

### Front derailleur 2351 identity review

- Compared all four original specimens 2351–2354 with [manufacturer instructions C/7/77, scan 4](https://www.disraeligears.co.uk/site/galli_-_instruzioni_per_gruppo_cambio_-_deragliatore.html) and the [1986 front-derailleur spread, image 2](https://labibleduvelocataloguesgalli.blogspot.com/p/galli-1986.html). The 2351 specimen has gold-anodized clamp/linkage, an enclosed spring housing and a solid chrome-plated outer cage marked GALLI. Its enclosed mechanism is consistent with the early exploded drawing. The instructions do not print a model name; the 1986 photographed fronts show exposed springs and cannot name this earlier specimen conclusively. The VeloBase community Criterium attribution remains a hypothesis, not manufacturer confirmation.
- Applied neutral retitle: `Galli KL (gold anodized clamp)` → **`Galli (enclosed spring, gold-anodized clamp)`**. `search_text` changes **`Galli KL` → `Galli`**, generated with the maintained helper. Applied description: `Clamp-on front derailleur with gold-anodized clamp and linkage, enclosed return spring and solid chrome-plated outer cage marked GALLI. Estimated 1970s onward; exact years and commercial model unconfirmed.`
- Keep source_ref 1, original source UUID `722FD06C-0CCB-4CA9-9F07-ADB093BA8427`, brand 20, Front Derailleurs category 9 and group NULL. No unsupported Criterium group assignment, 1977 specimen date or merge. 2353/2354 remain separate; the broad model name and colours do not establish identity. Exact commercial name intentionally remains unknown, with visible construction captured for future evidence.

### Applied validation and restoration evidence

- First run: **27 UPDATE component_detail / 1 UPDATE data_source rows affected**. The second live run of all 28 statements affected **zero rows in both tables**. Table totals remained 10,760 components and 67 Galli rows.
- Direct readback matched **297 component fields across all 27 approved rows** and **all 6 source 328 fields**, including NULL date/country values, exact descriptions, stable UUIDs/source references, category/group, source label/citation and 2351's generated search query. Confirmed 10830 retains printed 1980–1980/source 360. No Galli bike-spec links or spec values naming Galli; no bike links required correction or backfill.
- Whole-database quality check: **zero structural errors**. Galli has 55 incomplete-date review flags (previously 28), all expected from removing false precision; no other Galli findings. All resulting descriptions/citations remain within 255 characters. Post-change duplicate checks are unchanged: 10 exact-brand pairs (7 configuration, 2 generation, 1 unresolved hub review 3337/3338); zero near-name/cross-brand or parenthetical candidates. No evidence-backed duplicate merge arose.
- Before loading, every one of the 28 exact-old-value guards matched one row. MySQL parsed proposed value expressions and exact predicates through SELECT-equivalent EXPLAIN checks in a READ ONLY transaction; rollback guards matched zero pre-application rows, as expected. The neutral 2351 title had no collision. Guards also checked source UUID/reference, brand/category/group, descriptions/search text and zero current links.
- Pre-load simulation over all **107 maintained catalogue CSVs / 23,168 generated specs** produced identical catalogue plans and generated SQL. Actual readback matches the simulated change exactly. The matcher reads component title/category/ID, not date fields; no overrides refer to 2351. No generator, CSV, API or schema changes were needed. Existing overlength-value warnings on three unrelated CSV cells were identical before/after simulation.
- Restoration scope is the 27 IDs and old/new numeric values in the table above; source 328's old/new label, citation and country are recorded above. For 2351, old title/search were `Galli KL (gold anodized clamp)` / `Galli KL`, old description `Galli KL (gold anodized clamp), Italy`; old/new dates are in the pre-correction audit table. For 6040, old description was `Galli Criterium (Type 2), France, 70 grams (Actual), for braze-on. Retrofriction shift levers made with Simplex: spring-clutch mechanism, no D-ring; black, green, blue, red, silver or gold.`. All other edited descriptions retained their original technical text and added only the documented qualitative period estimate, with a sentence separator. Do not restore the weak numeric bounds automatically: any later reversal needs a reviewed, guarded change against then-current values.

## Brand quality and source review — 2026-11-18 (read-only)

Historical baseline before the applied correction above; the original correction follow-ups are superseded.

### Pre-correction baseline and integrity

- Exact brand **Galli**, `brand_id=20`: **67 components in 12 categories**; **28** have both date bounds NULL. **42** cite only VeloBase/source 1; **25** cite period catalogue/importer evidence, subject to the dating qualifications below. All descriptions are present and shorter than 255 characters, but many VeloBase descriptions contain little beyond the title and country.
- Whole-database `quality-report.js --json`: **zero structural errors**. Filtering its findings to the exact Galli component IDs gives **28 incomplete-date flags**, and no other findings. Direct checks found **zero bike-spec links to Galli** and **zero spec values containing Galli**; no bike-link correction/backfill is currently supported. Component groups belong to the expected brand (shared groups allowed). Balilla (Galli Giovanni) and Gallia are separate brands and excluded from these figures.
- Grouped duplicate check, exact Galli endpoints: **10 pairs** (7 configuration, 2 generation, 1 review); no automatic merge candidates. Near-name/cross-brand and parenthetical checks returned no additional pairs. The review pair is **3337/3338**, low-flange hubs with GALLI versus GG skewers. Original specimen photos inspected: 3338 mainly shows the skewers and too little hub-shell construction to establish identity. Preserve both IDs pending a shell/bearing/axle crosswalk; replaceable skewer markings alone do not prove two hub models or prove a duplicate. Other flagged pairs retain their flange, crank construction, lever-tip or generation distinctions. No merges proposed from name similarity.

### Inherited date precision and identity questions

All 14 dated rows still citing only VeloBase were checked against their original `source_id` pages. **Thirteen flatten decade-qualified dates; one loses an open upper bound.** These issues are not caught by the current incomplete-date check. The source wording is evidence of uncertainty, not permission to invent exact manufacture endpoints:

| Component ID | Pre-correction DB years | Original VeloBase Years field |
| --- | --- | --- |
|60 Criterium roller-bearing BB|1970–1980|Late 1970's–1980's|
|301 GG76 lever|1970–1970|1970's|
|302 GG80 lever|1980–1980|1980's|
|1576 Super Criterium slotted-spider crank|1970–1970|Early 1970's–?|
|2351 KL gold-clamp front|1970–1970|1970's–?|
|2355 Competizione? front|1970–1970|Late 1970's–?|
|2356 Super Sport front|1970–1970|Late 1970's–?|
|2999 tapered-roller headset|1978–1978|1978–?|
|3001 Stronglight Pro headset|1980–1980|Mid 1980's–Late 1980's|
|4240 Aerodynamic KL rear|1980–1980|Mid 1980's–?|
|4243 Super Criterium rear|1979–1980|1979–1980's|
|5779 Aero Seatpost|1980–1980|Late 1980's–?|
|5780 Fluted seatpost|1980–1980|Early 1980's–?|
|6035 Galli Approved shifters|1980–1980|1980's|

- Original references are retained in `component_detail.source_id`, using `https://velobase.com/Pages/ViewComponent.aspx?ID=<source_id>`. No numeric date corrections were prepared or applied in this audit. For any later change, preserve the original qualifier and prefer identified period attestations; the existing 1978 attestation on 2999 does not itself establish a manufacture endpoint.
- **2351 identity disputed:** [original gold-clamp front entry](https://velobase.com/Pages/ViewComponent.aspx?ID=722FD06C-0CCB-4CA9-9F07-ADB093BA8427) has an outstanding 2020 attribution report identifying its enclosed spring as Criterium rather than KL. This is a community report, not a verified manufacturer crosswalk. The subsequent comparison and neutral retitle are recorded in the applied entry above; no merge with 2353/2354 was supported. Colour alone is insufficient.
- **Source 328 dating/market question:** the two pages indexed c. 1980 are the same printed brakeset/ensemble content held by Equus (visually compared, not byte-identical files). Equus also supplies an introduction mentioning John Howard's 1982 tandem ride and Lon Haldeman's 1983 RAAM victory. This challenges treating the associated material as confirmed 1980 evidence, but does not prove all three sheets were issued together. Retain c. 1980 only as the blog's attribution pending edition verification; do not automatically redate every component to 1983. At this baseline, source 328 had country **IT**, although its pages did not establish an Italian sales market. The subsequent approved correction changed the label to undated and country to NULL; see the applied entry above.

### Additional sources located and inspected

- **Manufacturer instructions, edition C/7/77:** [Galli, Istruzioni per Gruppo Cambio–Deragliatore](https://www.disraeligears.co.uk/site/galli_-_instruzioni_per_gruppo_cambio_-_deragliatore.html), all 4 scans read. Scan 2 rear exploded drawing (including bearing/bushing pulley arrangements); scan 3 spring-load adjustment; scan 4 front and clamp-on/braze-on shifter drawings, with printed `Edition N. C/7/77 · Printed in Italy · Stamperia Piemonte`. 1977 dating is supported by the edition code (July interpretation remains inferred). The scan prints no Criterium model name; Disraeli associates the early Criterium. Do not apply its date to the later 1986 Criterium rear 4242 solely by name. Strong lead for distinguishing early front/shifter construction.
- **Two advert clippings indexed 1977:** [La Bible du Vélo Galli 1977 page](https://labibleduvelocataloguesgalli.blogspot.com/p/galli-1977.html), both original images read. One French Galli toe-clip advert references Albert Zweifel's 1977 professional cyclocross world title; this is an event date/lower bound, not a publication imprint. The other is a Presidio Bicycle Shop, San Francisco advert: Galli 75 calipers 310 g and T.I. 260 g, explicitly caliper-only weights; no printed date. Corresponds to existing 9069/9068 naming, not a reason to create duplicate brakes or replace their complete-set weights 500/450 g.
- **[Bicisport May 1983 Galli advert](https://www.disraeligears.co.uk/site/bicisport_1983_may_-_galli.html):** full scan read. Names Aerodinamico KL, FIAT wind-tunnel development, and supply agreements with Maillard/Sedis/Stronglight. Explicitly names Helicomatic pedals/hubs/freewheel, Sedis chain and Stronglight headset. Attests the marketed group and supplier relationships; no exact component codes or blanket proof that every earlier/later KL variant is identical.
- **[La Bicicletta April 1984 Galli/Simplex advert](https://www.disraeligears.co.uk/site/la_bicicletta_1984_april_-_galli.html):** full scan read. Explains the technical/commercial agreement and Italian distribution of Simplex through Galli, including plans for collaborative models. Useful provenance; it does not identify every Galli-badged derailleur. The [May 1984 advert](https://www.disraeligears.co.uk/site/la_bicicletta_1984_may_-_galli.html) is an additional indexed lead; its scan was not read in this pass.
- **[Equus importer pages](https://equusbicycle.com/bike/components/components.htm):** introduction `Galli%20description.JPG`, ensembles `Galli%20group.JPG`, brakes `Galli%20brakes.JPG`, all 3 read. The two technical pages duplicate already-processed source 328 content; the introduction adds dating context described above. This is an alternate host plus a missing introductory page, not three new component catalogues.

### Further leads and limits

- [Tonton Vélo Galli press thread 42112](https://forum.tontonvelo.com/viewtopic.php?t=42112): accessible archive index with 1977 adverts,1978 material, a three-page 1979 article and uncertain 1984/86 leaflets. Attachment scans were not read here, so these are leads rather than new date evidence. A [Scribd copy indexed September 1979](https://www.scribd.com/document/1065285927/Galli-1979-09-Bicycling-Article) supplies searchable text for the Bicycling article on roller bearings and titanium toe clips; verify the original article pages before applying it. The already-reviewed 1978/1980/1984/1986 leaflets and Ricci 1989 remain recorded below; the broad late KL group name does not bridge generations.
- **Unrecovered 1983 exploded-parts PDF:** [scanner's 17 November 2000 announcement, message 12](https://smontanaro.net/CR/2000/11/0734) describes an 8.5 MB 1983 Galli catalogue with exploded drawings, formerly `http://www.members.home.net/d.kennard/galli/GALLI.pdf`. No live copy was located by exact-filename/scanner searches. This is a specific archive/holder recovery lead, not a PDF inspected or a verified 1983 imprint. No outreach sent. Rennrad-News Galli thread 153587 returned 403; Ebykr's catalogue archive had no Galli entry in the accessed index.
- Review scope completed: integrity, exact-brand metadata, original date references, duplicate candidates, bike-spec usage and period-source search. **No DB writes, generator/CSV changes, sources registered or SQL prepared.** No regression generation or SQL rerun is warranted for this evidence-only review. Findings recorded here subsequently led to the applied corrections above; the completed Galli correction task has been removed from TODO. Task-created reports, HTML downloads and image copies removed after recording the evidence.


## Ricci Catalogue '89 (UK importer; disraeligears.co.uk, 4 scans), read 2026-11-01, nothing loaded

- Source: https://www.disraeligears.co.uk/site/ricci_catalogue_89.html
  (`00_main_images/ricci_catalogue_89_-_scan_01..04_main_image.jpg`, 1560 x 2164; sent to Disraeli Gears by Nick
  Sherinton). Ricci, UK, "Catalogue '89", GBP 1.25. Only 4 pages scanned: 1 cover, 2 Galli brand page ("Una Leggena
  Italiana", 12-month guarantee, indexed 6 / 7-speed) with disc wheels 031RR / 031RT / 031FR / 031FT, 3-4 Galli group sets
  with prices: KL (Aero brakes and levers, Look-type pedals, sealed hubs, Sedis Gold chain, GBP 311.95), ARIS Pro
  (GBP 284.95), ARIS Sport Team (149.95), Sport Team (129.95). "Stop press: Eurocar, Mavisa, S.E.F.B. and TVM go Galli".
- Not loaded: the six-digit numbers (012000K brake levers, 015000G rear mech, ...) are Ricci stock codes, not Galli part
  numbers (the suffix letter is the group: K = KL, G = ARIS Pro, L = ARIS Sport Team, Z = Sport Team), and the part names
  are generic ("Brake Set", "Rear Mech - Index compatible with all Free Wheels"). The 1989 KL is the indexed Sachs-made
  group, so the 1980-85 "Galli Aerodynamic KL" rows (305 levers, 738 brakes, 1573 crankset, 2352 front, 4240 rear) were
  not extended to 1989 on the group name alone. No bike spec in the DB names Galli. The photos show the ARIS Pro crank
  marked "Sachs New Success" and the ARIS Sport Team crank "Sachs Rival" (Disraeli: Galli Approved New Success ARIS /
  Rival ARIS rears, 1987). Do not re-read unless a Galli bike spec turns up.

## Galli "Prodotti Competizione" leaflet (c. 1978; La Bible du Vélo blog, 2 images), read 2026-11-01, nothing loaded

- Source: https://labibleduvelocataloguesgalli.blogspot.com/p/galli-1978.html ("GALLI 1978 1.jpg" cover 600 x 1282,
  "GALLI 1978 2.jpg" inside spread 1800 x 1282, /s0/ originals). Giovanni Galli S.p.A., Via Castiglione 16, 10132 Torino.
  No date printed; 1978 is the blog's label.
- Contents: one spread of line drawings with Italian headings, no part numbers, model names, weights or prices:
  rear derailleur, double down-tube lever and front derailleur ("Gruppo cambio deragliatore"), headset and crankset with
  bottom bracket on tapered roller bearings ("Brevetto Galli"), brake lever and side-pull caliper ("serie freni"),
  toe clip and pedal. Text: products use a special titanium alloy; the roller-bearing headset and BB are a Galli patent;
  sold direct to manufacturers and wholesalers only.
- Nothing loaded: no names to tie the drawings to rows (rear could be 4242 Criterium or 4243 Super Criterium, crank
  1574 / 1576, BB 60 / 62). 2999 "Galli (tapered roller bearing, cuscinetto di rulli conici)" 1978 already carries this
  leaflet's wording and year. Do not re-read.

## Galli catalogue pages, English (c. 1980; La Bible du Vélo blog "Galli 1980", 2 images), `data_source` 328

- Label "Galli catalogue pages, English (c. 1980)". Source: https://labibleduvelocataloguesgalli.blogspot.com/p/galli-1980.html
  ("GALLI 1980 1.JPG" brakesets, "GALLI 1980 2.JPG" road ensembles; ~570 x 740, small but legible). English (US-importer
  style, "Makers of the World's First Alloy Brake", PART NO. GA ... codes, "see price list"); undated, 1980 per the blog.
- Brakesets: Aerodynamic KL (GA KLB with time-trial levers, cable inside the bar; GA KLB-R road levers; 50 mm reach,
  calipers 380 g; silver / gold / midnight blue / black), Criterium (329 g; GA CB-S 50 mm, GA CB-L 55 mm; KL colours),
  Sport (300 g, 55 mm, silver, GA SB), Cantilever (337 g without levers, braze-on, fits Mafac posts, silver, GA CCB).
- Ensembles: Aerodynamic KL GA CGA (crankset 170 x 42/52, BB English / Italian / French, 6-speed 32H hubs, pedals, 3TTT
  seat pillar 160 x 27.2, brakeset, derailleur set, headset, alloy toe clips, Maillard 700 freewheel 13-21 / 13-23,
  Sedisport Deluxe gold chain; designed in the FIAT wind tunnel, Turin); Criterium GA CGC (36H hubs, 3TTT 180 x 27.2,
  "Aerodynamic KL" derailleur set, steel toe clips, silver chain; shares derailleurs, hubs, BB, headset, freewheel and
  chain with KL). A new "Professional" ensemble is in the price list (not shown).
- year_from 1985 -> 1980 (old 1985-1985 from the 1985/86 guide, 259): 738 Aerodynamic KL brakes, 305 Aerodynamic KL
  levers; descriptions rewritten (738 keeps 259's 353 g as a second figure). Undated velobase stubs dated 1980-1980 with
  catalogue descriptions: 739 Criterium brakes, 733 cantilever, 2352 Aerodynamic KL front (101 g kept), 1573 Aerodynamic
  KL crankset. Added: 10031 "Galli Sport" (Brakes, group 24 Sport, 1980-1980, GA SB). No links or overrides on any.
- Left: 4240 KL rear already 1980; hubs, BB, headset and pedals of the groups not tied to rows (no model names); 306
  Criterium levers and 4242 Criterium rear stay undated (the Criterium group uses the KL derailleurs).

## Galli of America brake and rim leaflets (1984; La Bible du Vélo blog "Galli 1984", 7 images), `data_source` 329

- Label "Galli of America brake and rim leaflets (1984)". Source: https://labibleduvelocataloguesgalli.blogspot.com/p/galli-1984.html
  ("GALLI 1984 1..7.jpg", panels 547 x 1275, spreads 1642 x 1275). Two US leaflets, each "(c) 1984 BPP, Inc.", Galli of
  America (a division of BPP), Box 640, Santee, CA 92071. Images 1-4 "Brake technology's new horizon" (cover, KL series
  synopsis, history, Criterium); 5-7 "A new road in rim technology" (cover, Top technology, Sport). No part numbers.
- Brakes: KL calipers 380 g, 51 mm reach, V-shaped arms, one-handed cable clamp, cam QR, lined self-lubricating housing;
  KL-AERO (Aerodinamico levers, cable through drilled bars) and KL-PRO (Professionale levers, conventional routing). KL
  and Criterium in silver, black, red, blue, gold and brunito. Criterium 329 g, 51 or 55 mm. History panel: Maillard and
  Stronglight tie-ups, Van Impe's team, 1984 USCF results.
- Rims (new, "released to the American market" after test rides in the '84 season): Top Pro (hard anodised, braking
  surface machine-turned by a patented process, 36 / 32 / 28 h, 390 g), Top Criterium (same without the hard anodising,
  five colours, 36 / 32 h, 390 g), Sport (economy hard-anodised tubular, Top-series profile).
- Changed (source_ref -> 329): 5024 Top Criterium and 5026 Sport rims year_from 1985 -> 1984 (old 1985-1985 from the
  1985/86 guide, 259; "new" here); 739 Criterium brakes year_to 1980 -> 1984; descriptions on 738 KL brakes (KL-AERO /
  KL-PRO, 51 mm in 1984), 305 Aerodinamico levers, 303 Professionale levers (was bare), 739, 5024, 5026. Added: 10032
  "Galli Top Pro" (Rims, 1984-1984). No links or overrides on any.

## Galli of America derailleur leaflet (1986; La Bible du Vélo blog "Galli 1986", 4 images), `data_source` 330

- Label "Galli of America derailleur leaflet (1986)". Source: https://labibleduvelocataloguesgalli.blogspot.com/p/galli-1986.html
  ("GALLI 1986 1..4.jpg": cover, spread 1642 x 1275, two panels). "Advanced derailleur technology - that works",
  (c) 1986 BPP, Inc., Galli of America, Santee, CA. No part numbers or weights except "less than 100 grams" (KL front).
- Contents: Criterium rear (circlip-fitted brass pivots, chromed pulley bushings, up to 24T, lighter than Super Record /
  new Dura-Ace / Superbe Pro; black, green, blue, red, silver, gold; deliberately not indexed, "Race-Aided Design" panel
  citing the 1985 Giro / Tour team); KL front (removable mounting stud, L cable clamp, chrome cage, < 100 g); Criterium
  front (clamp-on, clamp anodised in the six colours); Criterium retrofriction shift levers "produced in cooperation with
  Simplex of France" (spring clutch, no D-ring; six colours).
- Changed (source_ref -> 330): 4242 Criterium rear undated -> 1986-1986 and description; year_to 1980 -> 1986 with
  descriptions on 2352 Aerodynamic KL front, 2353 Criterium front, 6040 Criterium (Type 2) levers (the French-made
  braze-on row taken as the Simplex-built retrofriction lever). No links or overrides.
- Left: 2354 Criterium (type 2) front and 6039 Criterium levers (versions not distinguishable from the leaflet); 4240
  KL rear and 4243 Super Criterium rear are not in this leaflet.

