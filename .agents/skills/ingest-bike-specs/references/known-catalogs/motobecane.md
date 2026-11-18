# Motobecane catalogs processed so far

## 1982 US — loaded and validated 2026-11-18

- Source **458**, `1982 Motobecane (US) catalogue`, country US. [16-page scan](https://www.bikecatalogs.com/download/3789), original scans identified in PDF metadata at `http://bulgier.net/pics/bike/Catalogs/Motobecane/82/`. Printed `MOTOBECANE 1982` table heading on PDF p.14 establishes year; racing-series prose on p.12 explicitly says available in the U.S. Transcribed tables pp.14–15 and reviewed every portrait pp.3–13. Page2 illustrates Mirage Sport technology; it does not add a separate Mirage model.
- Maintained CSV `bike_specs/1982_motobecane_us_spec.csv`: **14 complete bikes** — Nomade I, Nomade II, Randonnee, Super Mirage, Grand Touring, Grand Jubilee, Interclub tandem, Mirage Sport, Profil, Jubilee Sport, Grand Record, Le Champion, Prolight and Team Champion. Road/mixte/ladies options kept together. Printed touring/sport/racing classifications retained; sizes, colours and weights are bike fields. Frame construction includes printed lug descriptions; cosmetics and gearing use Extras. All cells fit255 characters; names unique. Use the printed Roman I/II and double-E Jubilee spellings for this edition.
- Three of the17 table models intentionally excluded: **Metropolis** and **Nobly** are explicitly under COMMUTER p.14 and described as commuters p.8 (comfort bars, carrier, chain guard; Nobly also lights/fenders); **Equipe Pro** is junior p.8, with smaller-hand levers, junior saddle,600A wheels and boys/girls-only18-1/2-inch sizes. No framesets transcribed. The source-only CSV has no excluded rows, so regeneration cannot recreate them.
- User requested “load the1982 motobecane”. Applied **698 catalogue statements plus four guarded component updates**: source458, bikes **1397–1410**, specs **24278–24556**, **279 specs / 65 component links across47 existing identities**,22 existing labels reused. Preflight found no1982 Motobecane bikes or matching source. Existing brands, labels and bike/spec rows unchanged. No new component rows or merges.
- Key mappings: SunTour Spirit spelling to Spirt front **2601**; CompeV fronts **2603**, VXGT rears **4707**, LD1900 **6265**; Huret Club front **2379**, Eco rear **4399**; Grand Jubilee explicit SX610GT/SP rear **4629**, Grand Record SJA102 front **2573**; Le Champion period Nuovo Record rear **4126** (1982–84 version), Record headset **2963**, SuperRecord crank **1509**. Earlier Record rear4131 is not a1982 identity. Campagnolo front text names rear code1020 and does not identify a front variant.
- Other supported links: AdamasAX brakes/pedals/hubs **974/3962/3541**; MAFAC Competition recessed-mount **825**, cantilever front **10016**; Weinmann405 **1117**,506 **7764**, explicit Carrera400 **1168**. StronglightV4 **3125** (period later octagonal version), D6 **3116**,107 double **1883**,99 **1906** (description explicitly supports double or triple, unlike perforated99Bis1908). Nervar2020 **10980**. Sedisport **8765**, with no Delta treatment invented. SRSP100AL **3922**, SP150 **3925**, explicitly CTP6 **5861**; MaillardRA500 **10985**,700 **3827**; Atom440 **3662**; OfmegaCX crank/headset/pedals **1692/3061/3881**. Speed-specific Perfect freewheels **2245/7813**, six-speed700Course **2114**, Helicomatic hub **3387**. Rigida1320 **9894** for27-inch models and **9895** for700C Grand Record; A124 **7776**, A125Sprint **7778**, Araya16A **4916**, ModuleE **5087**; MichelinTS20 **6830**, Elan **6834**, coded Clement12bis **8972**.
- Four exact-model availability corrections, all now source458; these attest catalogue availability, not manufacture endpoints. **3116 StronglightD6:** year_to1980→1982, year_from1977 unchanged, old source266. **3925 SRSP150:** year_to1981→1982, year_from1970 unchanged, old source1. **10016 MAFACcantilever:** year_to1981→1982, year_from1981 unchanged, old source315. **10980 Nervar2020:** year_from1985→1982, year_to1987 unchanged, old source381. Old dates/source pairs above provide restoration values. D6 printed p.14; the other three p.15, with Nervar2020 independently named in p.12 portrait. All other linked identities already cover1982. Pre-load duplicate reports for Stronglight/Nervar/MAFAC/Sakae yielded no candidate pairs involving these four IDs; no duplicate evidence or merge is introduced by the date attestations.
- Preserved source disagreements: Grand Record rear **SX610SP table / Simplex6000 p.12 portrait** remains one conflict-preserving unlinked value. Profil **HuretAero front/rear table / allShimanoAdamasAX p.10 prose** retained in both derailleur values and unlinked. Mirage Sport **26.7lbs table /25.7lbs p.9 prose** uses table weight, discrepancy retained here. Randonnee fork **semi-forged tips table / fully-forged tips and micro-fused crown p.4 prose** uses detailed table description, disagreement retained here. Le Champion's p.13 **Avocado** is an additional printed colour alongside table GunMetalGrey. Super Mirage's table Black stays alongside the two prose colours. Interclub table and portrait agree on MAFACfront / Weinmann610 plus Atomdrum rear.
- Cropped readings retained: NomadeI/II rims27x1-1/4 versus tyres27x1-1/8, source Spirit and UB10 spellings; Interclub **Bardon Tandem** headset; Mirage Sport **CTC5DRG** crank (scan reading, no invented model link), cluster14/17/20/23/26/28; JubileeSport14/16/19/22/25/28. Printed SunTour **Black Line** is not silently rewritten BlueLine. Other ambiguous or generic equipment stays faithful text; see [link decisions](../link-decisions.md#1982-motobecane-us-reviewed-2026-11-18).
- Validation: all103 prior catalogue CSVs generated before and all104 afterward; every previous SQL statement unchanged. Regeneration after the four component date corrections reproduced exactly the same all-catalogue SQL. Generator syntax, existing quality-link decision tests and whitespace checks pass. Rerunning all702 statements affected zero rows everywhere. All279 live specs match model, canonical/raw label, value, component including NULL and source; all14 bikes match category/year/sizes/colours/weight. SourceUS and all four date/source corrections read back exactly. Independent generator/live comparison:279 unchanged, zero gained/lost/changed/missing/ambiguous. Zero duplicate specs, zero linked date conflicts, zero whole-DB structural errors and no review findings on the new bikes/specs or corrected component rows.
- Maintained CSV and source URLs/pages preserve transcription/evidence. Temporary PDF, renders/crops, transcription helpers, duplicate reports, SQL and validation files removed after successful readback and zero-change rerun.


## 1981 US — loaded and validated 2026-11-18

- Source **457**, `1981 Motobecane (US) catalogue`, country US. [16-page scan](https://www.bikecatalogs.com/download/3788), originals identified in PDF metadata at `https://bulgier.net/pics/bike/Catalogs/Motobecane/81/`. Printed copyright 1981 and warranty effective January 1, 1981 on PDF p.2 establish the date; American audience, CPSC and Motobecane America, Hackensack NJ establish the market. Specifications pp.14–15 checked against portraits pp.3–13. No existing 1981 bikes or matching source at preflight.
- Maintained CSV `bike_specs/1981_motobecane_us_spec.csv` contains Nomade 1, Nomade 2, Mirage, Super Mirage, Grand Touring, Grand Jubile, Jubile Sport, Grand Record, Le Champion, Prolight, Team Champion and Interclub tandem. All complete bikes are in scope; no framesets or non-road models transcribed. Mixte/ladies options remain with the road models, including the Nomade flat-bar variants under the existing scope decision. No overall size range printed: sizes stay NULL; the Nomade 2 handlebar cell retains the specific 21 and 19-1/2 inch lady options. No sizes copied from neighbouring years. Trim and CPSC reflectors use Extras.
- User authorized loading with “load it”. Applied **611 statements**: bikes **1385–1396**, specs **24039–24277**, **239 specs / 60 links across 45 existing identities**, 23 reused labels and one new source. No existing bikes/specs, brands, labels or component rows changed; no new component identities or component merges. All cells fit 255 characters and model names are unique.
- Model/code crosswalks follow the printed equipment and period identities: SunTour Spirt/Honor **2601/4702**, Seven **2641/4756**, Compe V **2603**, VX front **2614**, VXGT rear **4707**, Blue Line **2622/7787**, PUB10 **7796**, LD1900 **6265**. Shimano 600EX front/rear/crank/headset/brazed shifter **2480/4468/1793/3089/6150**, with short rear supported by the 13–24 cluster and portrait. Campagnolo Record 1020 rear uses **4125**, the period Nuovo Record v3 identity consistent with pp.10/12 alloy rear portraits, rather than the older steel Record 4131. Rear-only code cells do not invent front model names. The Grand Jubile table explicitly says SX410GT/SP front and rear: retain that front text unlinked, while the explicit GT rear maps **4620**.
- Other mappings: MAFAC Competition later **825** (recessed mounting), Weinmann405 **1117**, 506 **7764**, explicit Super Record4061 **582**; Campagnolo headsets **2951/2963**, hubs **9212/3259**, pedals **3688/3709**, Super Record4030 crankset to the existing1049/A identity **1509** under the established catalogue set-code crosswalk. SR SP100AL **3922**, SP150 **3925**; OfmegaCX crank/headset/pedals **1692/3061/3881**, Atom440 **3662**. Sedisport **8765** (no invented Delta treatment), A124 **7776**, ModuleE **5087**, Arc en Ciel **5180**, Michelin Elan **6834**, Clement Gentleman **8973**. Rigida1320 **9894** only where the same cell explicitly names 27-inch tyres; Grand Record's un-sized13/20 remains NULL rather than borrowing the 1980 edition's700C size.
- Source details: enlarged review confirms Mirage **26.8 lbs** and Nomade1/2 Cheng Sing **27 x 1-1/8** as printed. Preserve source spellings/codes including Spirt, Colombus, tandem “guage”, SN5DX, SN-5-JC, SI5 DGR, CT5 LA AH, Shimano810 and HutchinsonB1825. Prolight table says **20.6 lbs**, portrait p.11 rounds to **21 lbs**; use the detailed table weight and record the discrepancy here. Interclub table and p.13 text agree: MAFAC cantilever front, Weinmann610 plus Atom drum rear; the compound rear remains a single unlinked value. The initial suspected brake conflict was a misreading of the portrait's rear-specific sentence, resolved before loading.
- Validation: all **102** previous CSVs regenerated before and all103 afterward; every pre-existing SQL statement unchanged. Generator syntax, existing quality-link decision tests and whitespace checks pass. SQL rerun affected zero rows in every table. Direct readback matches every spec's model, canonical/raw label, value, component including NULL and source, plus all12 bike categories/years/sizes/colours/weights and sourceUS. Independent generator/live comparison: **239 unchanged**, zero gained/lost/changed/missing/ambiguous. Zero duplicate specs, zero date conflicts among linked identities, zero whole-DB structural errors and no review findings on new bikes/specs. No components inserted, renamed or date-corrected, so no new component duplicate identities were introduced.
- Deliberate unresolved links are recorded in [link decisions](../link-decisions.md#1981-motobecane-us-reviewed-2026-11-18). The maintained CSV and URL/page evidence preserve the transcription; disposable SQL, download, renders and helpers were removed after validation.


## 1980 US — loaded and validated 2026-11-18

- [Eight-page PDF](https://www.bikecatalogs.com/download/3787); metadata identifies originals at `http://bulgier.net/pics/bike/Catalogs/Motobecane/80/`. US market explicit on PDF p.2; warranty effective January 1,1980 on p.8 supports the indexed1980 edition. Source label `1980 Motobecane (US) catalogue`; citation distinguishes the warranty date from an explicit model-year imprint and records market/spec pages.
- New maintained CSV `bike_specs/1980_motobecane_us_spec.csv`: nine fully specified bikes — Mirage, Super Mirage, Grand Touring, Super Touring, Grand Jubile, Grand Sprint, Grand Record, Le Champion, Team Champion — plus Interclub tandem. Transcribed tables pp.6–7, checked all portraits/text pp.2–5. No non-road exclusions. Mixte options, including touring-bar versions of the road models, remain in shared rows. No weights printed; do not copy1979 weights. Trim descriptions retained under Extras, avoiding a new label.
- Interclub on p.4 is a complete pictured tandem, explicitly with five-speed freewheels; catalogue says ask the dealer for specifications. Store only Type=Tandem and Freewheel=5-speed with p.4 provenance; sizes, colours, equipment and weight remain empty. No1979 tandem equipment copied forward. This is deliberate source-limited coverage, not a claim of full specifications.
- Printed details preserved: Mirage Selecta I versus Super Mirage's alternative Selecta T wording; SR SI5DX/SI5DXAL/SI5DRG/SI5DLAEL, Nervar1020, Weinmann501 and unnumbered Vainqueur, S571 rim, Shimano800, PUB10 and LD1900, tyre fractions including27x7/8, Gentlemen spelling and MB turbor hoods. Rear/front derailleur names and shifters separated; no generic rear name copied into an unprinted front. CycloneGT's explicit front remains text without a body/cable-stop variant choice.
- User approved with "apply". Applied all 497 statements: ten bikes **1375–1384**, 187 specs **23852–24038**, 56 links across 39 existing component identities and source **456**. Reused 21 existing labels: Frame Material, Lugs, Fork, Headset, Handlebars, Stem, Brakes, Brake Levers, Front Derailleur, Rear Derailleur, Shifters, Freewheel, Chain, Crankset, Pedals, Rims, Tyres, Hubs, Saddle, Seatpost, Extras. Unique models, all cells within 255 characters. Live preflight found no 1980 Motobecane bikes or matching source. No existing bikes/specs, brands or labels changed; exactly two components received the corrections below.
- Mappings include Huret Eco **8796/4399**; SunTour CompeV **2603**, VX front **2614**, VXGT rear **4707**, CycloneGT rear **4738**, PUB10 **7796**, LD1900 **6265**; Shimano AltusLT **2485/4477**, period600EX front/rear/crank/headset **2480/4468/1793/3089**. Named Campagnolo parts use existing period Record/GranSport/SuperRecord identities: front2299, rear4125, headset2951/2963, hubs3259/9212, pedals3688/3709, crank1509 and explicit4061 brakes582. SRSP100BL3922, CTP6 **5861** and explicitly Laprade CTP5 **5857**; Philippe351 **2895**; Rigida13/20 **9894** for the two27-inch models and **9895** for700C Grand Record; A124 **7776**, ModuleE **5087**, ArcEnCiel **5180**, Elan **6834**, Gentleman **8973**, Sedisport **8765**, Sedicolor **8764**, Atom440 **3662**. Scoped mappings preserve all other catalogue decisions.
- Applied both guarded availability corrections from p.7: Criterium suede **5485**, year_to **1979→1980**, year_from stays 1970, old source **176**; Sedicolor **8764**, year_to **1979→1980**, year_from stays 1976, old source **430**. Both now have source **456**; title/description/search text unchanged. These are availability attestations, not introduction or manufacture-end claims. Restoration values are the old year_to/source pairs above. All other 37 linked identities already cover 1980; no identities inserted or merged. Only these two date conflicts found across the 39 linked IDs, both resolved by the approved updates.
- NULL decisions: generic safety/drilled levers and unnumbered Vainqueur do not identify a variant;501 is not silently506. 600EX brakes lack reach; GranSport brakes/cranks have overlapping variants. Cinelli66 and SuperRecord post have contemporary overlapping versions, so no assumed logo/bolt variant. Paris-Roubaix lacks cotton/silk construction; no automatic6762. SuperGentlemen lacks a safe construction/date crosswalk; no guessed8974. SuperLeggera suede does not establish smooth-leather5504. Selecta wording and alternative crank/pedal equipment stay intact; SR/Nervar codes and Shimano400/800/freehub/cluster descriptions remain unresolved where unsupported. Anatomic/house saddles and unspecified Normandy hubs remain plain text.
- Validation: generated all 101 existing CSVs before and all 102 afterward; every pre-existing SQL statement unchanged. Exactly 187 additional generated specs and ten bikes/source. Generator syntax, existing quality-link decision tests and whitespace checks pass. No component inserts, so no new component duplicate identities or merges. Rerunning all 497 statements changed zero rows in every table, including both component updates. Direct readback matches all 187 approved specs by model, canonical/raw label, value, component (including NULL) and source; all ten bikes match category/year/sizes/colours/weight. Independent generator/live comparison matches all 187 with no gained/lost/changed/missing/ambiguous rows. Source 456 has country US and original URL/year/market/page citation; both component year/source readbacks match the approved updates. Zero duplicate specs, zero whole-DB structural errors and no quality findings on the inserted bikes/specs or corrected components. Interclub has exactly its one supported Freewheel spec.
- Applied SQL, source download, renders and validation helper/output removed after successful readback and zero-change rerun. Construction helpers, empty OCR text, row JSON and comparison outputs were removed after preparation validation. The maintained CSV and original URL preserve the source transcription and evidence.

## 1979 US — loaded and validated 2026-11-18

- [16-page PDF](https://www.bikecatalogs.com/download/3786); original [VeloBase scan](https://velobase.com/CatalogScans/Motobecane/1979_Motobecane_catalog.pdf). PDF p.16 explicitly introduces the1979 line; warranty effective July1,1978 is not the model year. US market supported by American-cyclist audience/CPSC on p.2 and US-state warranty wording on p.16. Source label `1979 Motobecane (US) catalogue`, countryUS, citation includes both URLs, year/market evidence and pages.
- New maintained CSV `bike_specs/1979_motobecane_us_spec.csv`: Nomade, Nomade Sprint, Mirage, Super Mirage, Grand Touring, Grand Jubile, Inter Club, Grand Sprint, Grand Record, Le Champion, Team Champion. All11 are complete adult road/touring/racing bikes or tandem; no out-of-scope models. Ladies'/mixte options remain in shared rows. Spec tables PDF pp.13–14 checked against portrait text pp.3–12 and enlarged scans of both tables. Nomade appears in the table without its own portrait. No copied-forward equipment. Types, sizes, colours and weights retained; Grand Touring is25-1/2lb, corrected during enlarged-scan review.
- Split brakes/levers, front/rear derailleurs/shifters and saddle/posts. Inter Club has explicit front `Center pull` and rear `Center pull with Maillard drum brake`; no invented centre-pull maker. Combined drum/centre-pull rear and front remain NULL. Nomade Sprint's malformed `Rear: stem shifters` table line is stored as shifter text; portrait p.3 supplies broad AltusST/RS derailleur naming without a unique component identification. Grand Jubile portrait p.7 explicitly says front/rear CycloneGT, but front body/cable-stop variant remains unresolved.
- Printed oddities retained: Nomade Bocoma lugs, SR SI5SDZ / 1x5SD2 / Ax5SD2 / SI5DRGAH / SAX5RG2 codes, Team Champion brakes `4051 Super Record` (4051 is a post code; do not silently rewrite to4061), Shimano600X brakes (no inventedE), Clement Paris-Ronbaix, Team Champion post25.5x180. Super Mirage A124 rim table width1-1/8 retained after enlarged-scan review. Table's Nomade Sprint tyre maker stops at Motobecane; do not invent Hutchinson from neighbouring columns.
- User approved with "apply". Applied all 578 statements: 11 bikes **1364–1374**, 229 specs **23623–23851**, 49 links across 36 existing component identities and source **455**. Reused 23 existing labels: Frame Material, Lugs, Fork, Headset, Handlebars, Stem, Brakes, Front Brake, Rear Brake, Brake Levers, Front Derailleur, Rear Derailleur, Shifters, Freewheel, Chain, Crankset, Pedals, Rims, Tyres, Hubs, Saddle, Seatpost, Extras. No existing bikes/specs, brands, labels or components changed. Live preflight found no 1979 Motobecane bikes or source for this edition.
- Supported crosswalks: SunTour CompeV **2603**; VGT Luxe RD1500 **4705** (1978–83, not early4704); CycloneGT rear **4738**; AltusLT **2485/4477**; 600EX Arabesque front/rear/crank **2480/4468/1793**, matching the period system and stock short-cage portrait p.10; SelectaB **7500**. Campagnolo front **2299**, NuovoRecord rear **4125**, SuperRecord4030 crank bundle **1509**, GranSport hubs **9212**, pedals **3688**, Record1034 hubs **3259**, 1037/a pedals **3709**, 4051 two-bolt post **5759**, headset **2951/2963**. SRSP100BL **3922**, CTP6 **5861**, Cinelli66 **2809**, LB180 **7114**, Weinmann730 **8637**, 506 **7764**, 999 **7929**, A124 **7776**, Rigida13/20 **9894** (27-inch) / **9895** (700C), Pellet Competition **5176** and ArcEnCiel **5180**, Elan **6834**, Gentleman **8973**, Sedicolor **8764**, Atom440 **3662**. All36 linked rows have complete dates covering1979; categories/titles reviewed.
- Rejected automatic CLB247 for four generic Safety levers values; scoped NULL guards. Grand Touring SL cannot select black1975 **2617** or assume NSL; NULL. Team Champion rear Record does not distinguish the specific generation, NULL. Other scoped NULLs preserve AltusST/RS ambiguity, Huret Driver missing identity, CycloneGT front variants, 600X/GranSport/4051 brake ambiguity. Six-speed Uniglide is not linked to five-speed FG100. Alternatives stay combined. SRCTP5 is dated from1980 and supplied lengths/diameters differ from row5857: no forced date expansion. SuperGentleman8974's only evidence is1977 and its tubular description does not establish this700C clincher fitment; leave NULL, no date edit. Suede SuperLeggera does not establish smooth-leather5504; Criterium leather has several rows and no uniquely supported contemporary fitment. Generic house parts and unsupported named variants remain text.
- Validation: all 100 pre-existing local CSVs generated before changes; all 101 afterward. Every pre-existing SQL statement unchanged. Exactly 229 new generated specs and 11 bikes plus source; all CSV cells within 255 characters, unique models. Generator syntax, existing quality-link decision tests and whitespace checks pass. No component inserts, so no new component duplicate identities or merges. Rerunning all 578 applied statements affected zero rows in every table. Direct readback matches all 229 approved specs by model, canonical/raw label, value, component (including NULL) and source; all eleven bikes match category/year/sizes/colours/weight. Independent generator/live comparison matches all 229 without gained/lost/changed/missing/ambiguous rows. Source 455 has country US and original URLs/year/market/page citation. Zero duplicate specs, zero whole-DB structural errors, and no quality findings on these bikes/specs.
- Applied SQL, source download, renders and validation helper/output removed after successful readback and zero-change rerun. Earlier construction helpers, CSV backup, OCR text and comparison outputs were removed after review validation. The maintained CSV and original URLs retain the source transcription and evidence.

## c.1977 US — loaded and validated 2026-11-18

- Next missing year after the loaded c.1973–c.1976 editions. [12-page PDF](https://www.bikecatalogs.com/download/3784), indexed 1977; PDF metadata identifies originals at `http://bulgier.net/pics/bike/Catalogs/Motobecane/77/`. Cover has handwritten 77, but no printed year established. Use source label `Motobecane US catalogue (c. 1977)` with uncertainty explicit in its citation. PDF p.2 explicitly states these bikes are built for the US market; country US.
- New maintained CSV `bike_specs/1977_motobecane_us_spec.csv`: Nomade, Mirage, Super Mirage, Grand Touring, Grand Jubile, Grand Record, Le Champion and Team Champion. All eight are complete adult road bikes; mixte options remain in shared entries. Team Champion is a complete bike also offering a custom frameset, not a separate frameset record. No out-of-scope models. Transcribed specifications on PDF pp.10–11 and checked portraits pp.4–9; actual Grand Record portrait is PDF p.8 despite the table's Page9 heading. Sizes, colours and weights retained; stems, levers, shifters, rims/tyres and saddle/seatpost separated.
- Mirage rim-width fraction in PDF p.10 is indistinct: preserve steel rims and legible 27-inch diameter, omit the uncertain width. Grand Jubile table spells SR AX5, and Nomade offers Huret Eco or SunTour seven GT; neither receives a guessed model link. No front derailleur invented from rear-only VGT/Cyclone/Eco names. The Nuovo Record system on the three high-end models supplies front/rear under the established group convention.
- User approved with "apply". Applied all405 statements: eight bikes **1356–1363**, 154 specs **23469–23622**, 36 component links and source **454**. Reused 21 existing labels: Frame Material, Lugs, Fork, Headset, Handlebars, Stem, Brakes, Brake Levers, Rear Derailleur, Front Derailleur, Shifters, Freewheel, Chain, Crankset, Pedals, Rims, Tyres, Hubs, Saddle, Seatpost, Extras. All cells fit255 characters; no duplicate model names. Live preflight found no1977 Motobecane bikes or matching source. No existing bikes/specs, brands, labels or components changed.
- Reviewed links: Weinmann999 **7929**, Super Record brakes **582**, Nuovo Record front/rear **2297/4125**, Cyclone GT **4738**, Record cranks **1496**, Atom five-speed **2044**, Sedicolor **8764**, treated Idéale80 Special **5652**, Pivo Professional bar **11169**, Philippe351 bar **2895**, Cinelli64 **2801**, Record headset **2963**, named StronglightV4 **3125**, Record high/low-flange hubs **3260/3259**, Record pedals **3708**, Michelin Elan **6834**. All18 linked identities cover1977; no component inserts, merges or date changes.
- Scoped NULLs: VGT Luxe on Mirage/Super Mirage/Grand Touring cannot choose early4902 **4704** (through1976) versus later RD1500 **4705** (from1978). Do not widen either date to force a match. Grand Record Brooks Professional does not identify Team Professional rivets; generic Campagnolo posts on Le Champion/Team Champion do not distinguish Record/Super Record; Le Champion Record racing brakes lack reach/CPSC version evidence. Alternatives and unqualified house parts remain text. Lyotard136R has multiple variants; Tourney/AX5/TA Cyclo, unnamed Rigida/Super Champion/Weinmann rims, unqualified Normandy Competition and Maillard Racing remain unresolved without a distinguishing code. Existing decisions in other catalogues retained.
- Validation: generated all99 pre-existing local CSVs before changes and all100 afterward. Every pre-existing SQL statement unchanged; exactly154 new specs, eight bikes and their source added to the generated plan. Final summary confirms36 links. Generator syntax, existing quality-link decision tests and whitespace checks pass. No component identity changes, so no new component duplicate identities or merges. Rerunning all405 statements changed zero rows in every table. Direct readback matches all154 approved specs by model, canonical/raw label, value, component (including NULL) and source; all eight bikes match approved category/year/sizes/colours/weight. Independent generator/live comparison matches all154 without gained/lost/changed/missing/ambiguous rows. Source454 has countryUS and original URL/date/page citation. Zero duplicate specs, zero whole-DB structural errors and no quality findings on inserted bikes/specs.
- Applied SQL, source download, renders and validation helper/output removed after readback and zero-change rerun. Original source URL and maintained CSV preserve evidence after scratch cleanup.

## c.1973 US — loaded and validated 2026-11-18

- CSV `bike_specs/1973_motobecane_us_spec.csv` preserves Grand Touring's conflicting table/portrait saddle and rear descriptions explicitly. Exact pages remain in ignored `Catalog Page`; no PDF page citations enter displayed component values. Source label `Motobecane US catalogue (c. 1973)` makes the estimated date explicit; citation includes the user URL, dating uncertainty, US dealer stamp and evidence pages.
- User approved with "apply". Applied all 238 statements: five bikes **1351–1355**, 89 specs **23380–23468**, nine links and source **453**; 19 existing labels reused. No existing bikes/specs, brands, labels or components changed. No matching bikes/source existed in preflight. All 15 table rows across the five bikes checked against p.8, with portraits pp.4–7; missing size/colour sheet not invented. Riviera/Nobly remain excluded as folding/utility.
- Accepted nine links: Campagnolo Nuovo Record rear **4125** / front **2297** on Grand Record and Le Champion; Huret Allvit rear **4290** / front **2394** on Nomade; Atom 700 pedals **3665**; Universal 61 brakes **1081**; T.T.T. Record stem **6417**. All seven identities cover 1973. The plural Derailleurs entries name the Allvit / Nuovo Record systems, supporting front/rear assignments under the existing group convention. VGT describes a rear only; Grand Touring front stays blank. No new component identities or date corrections.
- Seven speculative automatic links suppressed through scoped NULLs: Mirage Simplex Prestige front/rear (variant unproven), three Stronglight Competition headsets (V4 locknut unproven), two Brooks Professional saddles (Team Professional rivets unproven). Grand Touring's two contradictory values have explicit NULL guards. Other generic, alternative and ambiguous components stay unlinked; no need to resolve them before loading faithful catalogue text.
- Validation: generated all 99 local CSVs before/after; every SQL statement outside the target catalogue unchanged. Within target: revised source metadata, two conflict-preserving values, seven removed speculative links and one added Universal 61 link. Generator syntax, existing quality-link tests and direct conflict-guard checks pass. Rerunning all 238 applied statements affected zero rows in every table. All 89 live specs match approved model, canonical/raw label, value, component ID (including NULL) and source. Generator/live comparison independently matches all 89 with no missing/ambiguous/changed rows. Source453 has US market and original URL/dating/page citation. Zero duplicate specs, zero whole-DB structural errors, no review findings on these bikes/specs. No component identities were inserted, so no new component duplicate candidates or merges.
- Temporary source download, renders, CSV backup, provisional/reviewed SQL and validation outputs removed after readback and zero-change rerun. The maintained CSV and original URL preserve the source transcription and evidence. Shared `bike-update.sql` task output removed as disposable generated SQL.

## 1970–1990 gap source leads — 2026-11-18

- [User-supplied c.1973 US scan](https://www.bikecatalogs.com/download/3780) is now loaded; see the validated entry above. No printed year established; the [Ebykr index](https://ebykr.com/library/motobecane-catalog-about-1973/) corroborates *about* 1973, not an imprint date. The Michigan dealer stamp supports US distribution.
- Catalogue years represented after the 1982 load: c.1973 US, 1974 US, 1975 US, circa 1976 US, circa 1977 US, 1978 US, 1979 US, 1980 US, 1981 US, 1982 US and 1984 GB. Estimated dating is explicit in the relevant notes. This is coverage by catalogue year, not proof of the absence of individual models or other editions.
- [Bike Catalogs index](https://www.bikecatalogs.com/brand/motobecane) lists scans indexed 1973–1985 and an undated 1970–1972 catalogue. Inspect each edition's pages, year and market before transcription; an index year is not itself proof of the printed date.
- [German catalogue indexed 1986](https://www.velopedia.online/File/SmallPdf/Motobecane/Motobecane%20Katalog%201986?token=) names Deutsche Motobecane GmbH on its back page and includes road bikes and equipment descriptions, including C 662 E, C 502 and C153 S on printed pages 10–13. Verify its dating and read the specification panels in the scan before extracting. No bikes have been transcribed or loaded from it in this review.
- [French catalogue chronology discussion](https://forum.tontonvelo.com/viewtopic.php?t=32524) includes a 1985–86 lead and discusses uncertain dating of some French-market 1980–83 editions against price lists. Those hypotheses require independent verification and should not be transferred to other market editions.

## Embedded PDF citations — applied and validated 2026-11-17

- User reported PDF page references appearing in displayed Motobecane specs. Pre-cleanup read-only query found exactly four 1984/source-429 spec values with embedded PDF citations, all unlinked. The cause was citation text entered in component cells of `bike_specs/1984_motobecane_gb_spec.csv`, not API formatting or component descriptions.

| Spec / bike | Previous value | Applied value | Evidence retained |
|---|---|---|---|
| 23182 / 1335 City-Becane, Rear Derailleur | Huret Duopar Eco (PDF p.9) | Huret Duopar Eco | Original portrait PDF p.9; specification spread p.10 |
| 22811 / 1316 Super Mirage, Rear Derailleur | Huret Duopar Eco (PDF p.7) | Huret Duopar Eco | Original portrait PDF p.7; specification spread p.10 |
| 22829 / 1317 Interclub, Front Brake | CLB cantilever (PDF p.8) | CLB cantilever | Original portrait PDF p.8; specification spread p.10 |
| 22738 / 1312 Mirage, Hubs | Maillard alloy hubs; quick release front (PDF p.7 caption) | Maillard alloy hubs; quick release front | Original caption PDF p.7; specification spread p.10 |

- Local CSV repair removes only the four citation suffixes from spec cells and retains/adds their page evidence in the ignored `Catalog Page` column. Original scan URL and detailed evidence remain in the 1984 entry below. The old citation-bearing strings remain documented here for restoration; the underlying parts descriptions and source distinction are unchanged.
- Generator's two citation-bearing Duopar Eco NULL keys become one clean-value key with separate 1984 Super Mirage/City-Becane scopes; both remain unresolved against 4276/4400. Interclub's clean generic CLB value needs an explicit 1984/bike-specific NULL guard: without it, the matcher selects **604 CLB Cantilever Sport 1951, Cyclotouriste**, an unsupported identification. Mirage's clean hub text remains NULL. Updated regression tests cover the cleaned Duopar values and the CLB trap.
- **User-approved and applied:** four guarded `bike_spec.value_text` UPDATEs only, preserving spec/bike IDs, labels, source429 and NULL links. The first execution affected exactly four rows; the idempotency rerun affected **zero rows**. Direct guarded UPDATEs preserved IDs instead of regenerating/inserting changed values. No component, bike, label, source or other spec changed.
- Validation: shared-generator before/after across **96 loaded catalogues / 21,196 specs** changes exactly those four displayed values, no bike fields or component mappings. Overlaying the four proposed live text edits restores exactly the existing generator/live findings (same 15 pre-existing lost mappings); no new finding. Updated `test/quality-link-decisions.test.js` passes. This supersedes the earlier citation-bearing CSV examples below while preserving their source evidence and unlinked calls.
- Actual post-load readback matches all four approved values with the same IDs, NULL components and source429. Comparing every live spec against the pre-load snapshot found exactly the four intended value changes and no other field changes. There are **zero duplicate specs** in source429 and **zero remaining PDF/page citations in live Motobecane spec values**. Actual shared-generator/live comparison across **96 catalogues / 21,196 specs** reproduces the baseline exactly (same 15 pre-existing lost mappings, no gains/new changes or identity mismatches), validating CSV/live parity.
- Source evidence, old/new values, IDs and validation remain here. Temporary SQL, CSV backup, baseline, scripts and reports were removed after successful readback, zero-change rerun and mapping/duplicate validation. The maintained cleaned CSV remains in `bike_specs/`; it is gitignored as usual. No note depends on the deleted scratch directory.

## 1978 US catalogue — loaded 2026-11-17

- [Original Flickr album](https://www.flickr.com/photos/stronglight/albums/72157714839758201/).
  Model year is printed in technical introduction scan **03** (1978 line);
  scan **02** explicitly states the **U.S. market**. CSV:
  `bike_specs/1978_motobecane_us_spec.csv`; source **431**,
  `1978 Motobecane (US) catalogue`, country US. Before loading, live preflight
  found no matching source or existing 1978 Motobecane bikes.
- Scans: 01 cover detail, 02 warranty/market, 03 technical/year introduction,
  04 Nomade, 05 Mirage, 06 Super Mirage, 07 Grand Touring, 08 Grand Jubile,
  09 Sprintour, 10 Grand Record, 11 Le Champion and Team Champion,
  [12](https://www.flickr.com/photos/stronglight/50040395532/) and
  [13](https://www.flickr.com/photos/stronglight/50040394597/) specifications.
  All nine are complete adult drop-bar bikes; ladies'/mixte options remain
  in shared model entries. Le Champion/Team Champion are complete bikes also
  offered as framesets: no separate frameset rows. No out-of-scope models.
- Transcribed tables and checked all model captions. Nomade crank is **SI
  5SD2**, not 51; Team Champion has **Cinelli66 bars** and a literally named
  **Record I stem with recessed bolt**, resolving the table's misleading
  attachment of66 to the stem. Preserve unverified suffixes **SAX5RG2**,
  **AX5SD2**, **CGIII**, **SRP3**, and printed LeaderII/SuperLegeria spellings.
  Split saddle/seatpost, brakes/levers and derailleur/shifter cells.
- Nomade's caption says plural **Derailleurs: Huret ECO**, supporting front
  **8796** and rear **4399**. CompeV/VGT on Mirage/Super Mirage separates
  front **2603** from rear **4705**; Grand Touring SL/VGT separates front
  **2616** from rear **4705**, following manufacturer naming. The 1978 VGT
  matches RD-1500, replacing automatic obsolete4900 **4695**. No front
  specifications invented from the other bikes' rear-only names.
- Reviewed crosswalks: Campagnolo4030 crank/BB bundle → 1049/A Super Record
  **1509** (Catalogue17 crosswalk), 4061 brakes **582**, supplied pre-1983
  4062 levers **232**, 1037A pedals **3709**, 1039 headset **2963**, 1020 rear
  **4125**. Stronglight105B → 105Bis **1880**; early Cinelli66 **2809**;
  Pivo bar **11169**, Philippe351 **2895**; Maillard700 low-flange **3394**;
  Rigida13/20 27-inch **9894**; Weinmann124A **7776**, 256 **7928**, 999
  **7929**, 605 **8642**, Carrera **1167**; ItaliaSuperleggera **5504**.
  Plain Weinmann500 uses family **8636**, not washer variant1122.
- Rejected automatic **7233 Maillard Atom** for both high-end clusters:
  7233 is a single freewheel, but their portrait gear tables print five
  sprockets. Both remain NULL pending a supported 700/Racing alloy crosswalk.
  Sprintour's black five-speed Uniglide14–28 → FG-100 **7475**; its plain
  Shimano600 rear stays NULL (6100 versus contemporary Arabesque). Other
  deliberate NULLs are in the shared link-decision notes.
- User approved the reviewed SQL with "apply". Inserted **nine bikes,
  177 specs, 51 links**, using **21 existing labels**, and one new source.
  No component inserts/deletes/merges, existing bike/spec rewrites or new
  labels. Citation records album URL, printed year/market and scan numbers.
- Applied one guarded component correction: **4399 Huret Eco**, earliest
  attestation `year_from` **1980 → 1978**, retaining `year_to=1990`.
  Old source **156** → **431**. Title,
  description and search text unchanged. This supersedes c.1980 as earliest
  evidence, not absence from the full 1976 manufacturer catalogue; it does
  not establish an introduction date. Restoration: year_from1980/source156.
- Validation: all **20,999** prior generated spec INSERTs across95 existing
  CSVs unchanged; exactly177 new. All linked IDs reviewed by category/title/
  dates: sole conflict 4399 covered by the guarded update. Unique models,
  all cells within255 characters. Existing front/rear-brake, Huret Rival and
  integrated-lever tests pass; syntax/whitespace checks pass.
- Applied all **470 statements**: source **431**, bikes **1326–1334** and
  specs **22997–23173** inserted, exactly one source citation enriched and
  one component date/source updated. No existing bikes/specs, brands or labels
  changed. Rerunning the same SQL affected **zero rows** in every table.
- Direct readback matches **all 177 approved SQL specs** by bike, canonical
  and raw label, value, component ID (including NULL) and source 431.
  Generator/live comparison independently matches all 177, without missing,
  ambiguous or changed entries. All new bikes/specs have source 431; the source
  has country US and the full original album citation. Huret 4399 now has
  year_from 1978, year_to 1990, source 431.
- Quality report: **zero whole-DB structural errors**, no review findings in
  the nine bikes, their specs or corrected component. No duplicate specs or
  source gaps found. No component identities were inserted, so no new component
  duplicate candidates were introduced; no merges were necessary. Existing
  unrelated review candidates remain outside this task.
- Live Motobecane catalogue totals: 1974 US 6 bikes/117 specs/44 links;
  1975 US 8/154/65; c.1976 US 8/154/56; 1978 US 9/177/51;
  1984 GB 12/245/62. Removed task downloads, compact transcriptions, SQL and
  reports after validation; the maintained CSV and original source URLs above
  retain the transcription/provenance. Shared `bike-update.sql` was restored.

## Circa 1976 US catalogue — loaded 2026-11-17

- Source: [Stronglight Flickr album](https://www.flickr.com/photos/stronglight/albums/72157602026900257/),
  specification scans [14](https://www.flickr.com/photos/stronglight/1386178520/)
  and [15](https://www.flickr.com/photos/stronglight/1386192018/), checked
  against portraits pp.3, 9, 11 and 13. The album is explicitly **c.1976**,
  dated by its uploader from the optional Cyclone GT. No printed year has
  been established: the CSV's 1976 is an estimated catalogue year, not a
  verified imprint date. US market is inferred from repeated C.P.S.C. equipment
  statements and inch sizes; the back cover provides no distributor address.
- New CSV: `bike_specs/1976_motobecane_us_spec.csv`. Eight complete bikes:
  Nomade, Nomade Sprint, Super Mirage, Grand Touring, Grand Jubile, Grand
  Record, Le Champion and Team Champion. The actual portrait and table spell
  **Grand Jubile**, despite the uploader's Jubilee caption. Excluded Nobly/10:
  upright Tourist bars, fenders, carrier and kickstand; a town bike, including
  its men's version. Nomade's touring-bar mixte version remains in the shared
  road model under the established ladies'/mixte rule. No framesets included.
  Cover, factory photos, intervening illustrations and the unrelated modern
  Weinmann lever-cover photograph are not specification sources.
- Transcribed anew, rather than copying the 1975 CSV. Notable differences:
  Vitus Grand Touring, Nomade Sprint/Super Mirage, AX5 and alternative 49D
  cranks, treated Idéale 80 Special, Olympic pedals, Sedicolor chain and
  Michelin Elan tyres. Split rims/tyres, saddle/seatpost and brake/lever text.
  Stem/down-tube shifter descriptions have their own column. VGT Luxe and
  the Jubile/Cyclone GT alternative describe rear models only: no front
  specifications invented. Nuovo Record and Challenger group entries provide
  the named front/rear specifications under the existing convention.
- User approved the reviewed SQL with "apply". Inserted one source
  **430** (`1976 Motobecane (US) catalogue`), eight bikes **1318–1325**,
  154 specs using 21 existing labels, 56 links; no component inserts, merges,
  deletions or changes to existing bike/spec values. Source citation includes
  the CSV, Flickr album and approximate dating.
- Link review corrected automatic Idéale 80 **5648** to treated Speciale
  Competition **5652**; added Pivo Professional bar **11169** and explicit
  Grand Record Weinmann 999 **7929**. Existing period mappings include
  Nuovo Record rear **4125**, front **2297**, VGT Luxe **4704**, Campagnolo
  Record crank **1496**, hubs **3259/3260**, and Michelin Elan **6834**.
- Applied component update: Sedis Sedicolor **8764**, `year_from` **1979 →
  1976**, retaining `year_to=1979`; old source **177** → **430** through the
  guarded date update. This is an approximate
  earliest catalogue attestation, not a claimed introduction date; description,
  title and search text remain unchanged. No other component date changes.
- Deliberate NULLs: unqualified Normandy Luxe Competition does not identify
  gold-label **3388** versus red-label variants; Regina Oro 13–21 does not
  establish six-speed **2194**. AX5 lacks the suffix needed to choose a
  configuration; Tourney/Tourney Luxe lacks a sufficient code; alternative
  crank, pedal, freewheel and rear-derailleur equipment remains combined and
  unlinked. T.A. Professional, Pivo Randonneur and generic/house parts retain
  established uncertainty. See shared link decisions.
- Validation before review: compared all 20,845 prior generated spec INSERT
  statements across the 94 pre-existing CSVs; **none changed**, exactly 154
  added. All 56 proposed links reviewed by category, title and date; the sole
  date conflict is Sedicolor, covered by the proposed guarded update. All
  labels already exist. Live preflight finds no 1976 Motobecane bikes or
  source for this album before loading.
- Applied all 427 statements: exactly one source, eight bikes and 154 specs
  **22843–22996** inserted, one citation enriched and one component date/source
  updated. No new brands/labels or changes to existing bikes/specs. Rerunning
  the same SQL affected **zero rows** in every table.
- Direct readback matches all **154 approved SQL specs**, including bike,
  canonical/raw label, value, component ID (including NULLs) and source 430.
  The maintained generator/live comparison independently matches all 154
  with no missing, ambiguous or changed entries. Sedicolor is now 1976–1979,
  source 430. All new bikes/specs have source 430 and country US through it.
  Quality report: zero whole-DB structural errors; no review findings in the
  eight bikes, their specs or corrected component. Existing unrelated review
  candidates remain. No components were inserted, so no new component duplicate
  identities were created; no duplicate bike/spec rows were found.
- Existing front/rear-brake, Huret Rival and integrated-lever tests pass;
  generator syntax and `git diff --check` pass. Catalogue counts after load:
  1974 US 6 bikes/117 specs/44 links; 1975 US 8/154/65;
  circa 1976 US 8/154/56; 1984 GB 12/245/62.
- Removed the task's temporary downloads, construction helper, SQL and reports
  after validation; the maintained CSV and source URLs above preserve the
  transcription and provenance. Shared `bike-update.sql` was restored.

## 1984 UK distributor edition — loaded 2026-11-16

- CSV: `bike_specs/1984_motobecane_gb_spec.csv`. Loaded 12 bikes, 245
  specs across 25 existing labels, with 62 component links. No new
  component identities or spec labels. These figures describe the initial load;
  City-Becane was subsequently loaded and validated (2026-11-17, below).
- **Market correction to the search below:** despite VeloBase's US index
  title and the CPSC specification body, PDF p.1 explicitly states import and
  distribution in the UK by Cycles Stratton (UK) Ltd., Nutbourne, Chichester.
  The imprint reads December 1983; p.4 and other portraits explicitly identify
  the 1984 range. Use country **GB**, source label
  `1984 Motobecane (GB) catalogue`, source **429**. No source or 1984 bikes
  existed before this ingestion. New bike IDs **1306–1317**, spec IDs
  **22598–22842**.
- Evidence: [original PDF](https://velobase.com/CatalogScans/Motobecane/1984_Motobecane_catalog.pdf),
  p.10 specification spread, checked against portraits/captions on pp.2–9.
  Cover, production, warranty and rider prose on pp.1–3/6 were not turned into
  bike specifications. Model spelling follows the scan: **Grand Jubilee** and
  **Jubilee Sport**. Ladies' sizes/colours remain in the shared model entries;
  these are not duplicate bikes. Prolight is a complete bicycle, not a frameset.
- Split the source's combined blocks into individual canonical spec columns.
  Front/rear derailleur assignments use the distinct named models, not a blind
  copy of a rear name into the front slot. Mirage and Nomade do not name their
  front models, so no front spec was invented. Interclub retains CLB front
  cantilever (portrait p.8) and a combined rear spec for Weinmann 999 plus
  Maillard drum; neither half receives a speculative component link.
- Printed ambiguities preserved: `Cinelli Giro d’Italia 66` conflicts with
  Cinelli's 64/66 naming; `Stronglight D 9` is not silently changed to A9;
  Mt. Becane's fork is literally `Tandem type`; Super Mirage's table gives
  26.6 lb while its portrait p.7 gives 26.8 lb (CSV follows the table).
  Mirage's partly obscured hub table is supplemented only by the p.7 caption
  explicitly identifying Maillard hubs and front quick release.
- Supported mappings include Nervar 3020 → 10981, Maillard CX500 → 10986,
  Stronglight 107 → 1883, Super Record crank → 1509, Simplex SLJA522 → 7283,
  SJA102 → 2573, Hi-Stepper → 2443, titanium Duopar → 8173, SR MTP110 →
  10473 and SR CTP5/5E/6 → 5857/11316/5861. Plain Sedisport chains map to
  the named Sedisport row 8765 without adding an unprinted Delta treatment.
- Reviewed mappings: Le Champion's Record 1020 uses the period Nuovo
  Record v4 row 4126 (not obsolete steel Record 4131), with front 2300 and
  drilled lever 226. Mirage's 32T selects AR-GT 4723; Jubilee Sport's 28T
  exceeds standard ARX 4727's 26T limit and selects ARX-GT 4729. Helicomatic
  clusters up to 32T use existing original-equipment 600 SH row 8131, following
  the established Maillard/Peugeot crosswalk. Printed 34T clusters remain NULL
  because that row's documented range stops at 32T.
- Applied guarded `year_to` extensions to **1984**, attesting catalogue
  availability rather than manufacture endpoints; `year_from` stays unchanged.
  Old `year_to / source_ref`: Ofmega CX **1692: 1983 / 1**; Atom 440
  **3662: 1980 / 49**; Super Champion Gentleman **5183: 1983 / 294**;
  Weinmann A129 **5208: 1981 / 246**; Clement Criterium Cotone / Tipo 12 bis
  **8972: 1983 / 352**; Rigida 1320 27x1 **9894: 1981 / 360**.
  New `source_ref` is **429**. These existing identities
  match the printed model/configuration; no new duplicate rows are proposed.
  Keep the Gentleman rows 5183, 5217 (GTA), 5218 (GTA2), A129 finish row 5207,
  and Rigida 700C row 9895 distinct: no evidence of duplicate identities here.
- Validation before load: all **20,600** existing generated spec statements
  are unchanged across all pre-existing CSVs; this file contributes exactly
  245 additional statements. All 62 proposed links were reviewed by title,
  category, dates and distinguishing specs. Six date conflicts are covered by
  the guarded updates above. Existing front/rear-brake, Huret Rival and
  integrated-lever test files pass; `git diff --check` passes.
- User approved application with "apply". First run inserted one source,
  12 bikes and 245 specs, and updated exactly the six components above;
  no existing bikes/specs, brands or labels changed. Re-running all 635
  statements affected **zero rows** in every table.
- Live readback matches **all 245** approved values, labels and component IDs,
  including NULLs; regenerating their links against live component records
  also matches all 245. All specs have source 429 and all six corrected
  components have year_to 1984/source 429. The shared quality report finds
  **no errors or review findings in the loaded catalogue or six updated
  components**, including no duplicate specs, provenance gaps, category
  mismatches or linked date conflicts. Whole-DB structural errors: zero;
  unrelated existing review candidates remain. Live Motobecane totals:
  1974 US 6 bikes/117 specs/44 links; 1975 US 8/154/65;
  1984 GB 12/245/62. These are DB counts, not the old generated-file headings.
- **City-Becane included as Mountain — loaded and validated 2026-11-17.**
  PDF p.9 presents it alongside Mt. Becane and explicitly describes use in
  off-road conditions and on city streets. The photograph and p.10 table show
  26×2.125 tyres, cantilever brakes, derailleur gearing, a chrom-moly Inexternal
  frame and no city accessories. The table gives 12 speeds, 32.5 lb and sizes
  18 / 19½ / 22 inches. User approved including it as
  `Mountain`, based on construction/equipment and the off-road wording. Preflight
  found twelve existing 1984/source-429 models and no City-Becane row. P.9 identifies its rear as
  Duopar Eco; the p.10 table prints Duopar/Club. Preserve that source distinction
  in the CSV: rear `Huret Duopar Eco (PDF p.9)`, front `Huret Club`. The rear
  stays NULL pending the existing 4276 / 4400 reconciliation.
- **City-Becane application:** user approved SQL with "apply". Inserted bike
  **1335** and specs **23174–23193**, across 20 existing labels, reusing GB
  catalogue source **429**. The local CSV now includes it directly
  before Mt. Becane; all twelve prior CSV rows are unchanged. No new component,
  brand, source or label rows and no component date/description changes.
  Six links: front Huret Club → **2379** (existing plain-Club/Club II
  crosswalk, sold as Club from 1982), Nervar 3020 → **10981** (40×50 is within
  the row's ring ranges), black Sedisport → **8765**, six-speed Helicomatic
  13–32 → **8131**, SR CTP5E → **11316**, Helicomatic hub → **3387**. Every
  linked component includes 1984 in its recorded availability. Seatpost and
  cluster overrides extend the existing Mt. Becane decisions to City-Becane.
- Unlinked text remains for the printed Tange AW27 headset, Espace chrome bar,
  Polygon 10440 stem, handlebar ratchet shifter, generic cantilevers, Duopar Eco
  rear, Shimano Fold-Fit pedals, maker-only `Sella Italia` saddle, Weinmann
  431 26×1.75 rims and Hutchinson 26×2.125 tyres, plus frame/fork/gearing/extras.
  Existing rim 7780 is sourced as 431 BMX without a documented 26-inch size;
  no fitment/size equivalence is established here. Do not infer a brake model
  or promote the generic shifter/saddle wording into a component identity.
  The p.10 fork wording `Tandem type` is retained literally.
- City-Becane readback matches every approved bike field, all 20 spec values,
  raw labels, provenance references and six component IDs, including all fourteen
  NULL mappings. Rear Duopar Eco is spec **23182**, retained NULL pending the
  existing 4276 / 4400 identity review. All prior bike/spec rows, all component
  identities and the source record are unchanged. Catalogue 429 now has
  **13 bikes / 265 specs / 68 links**.
- First SQL load: 50 statements, exactly one bike and twenty specs inserted;
  the six links were set on insertion. Full rerun affected zero rows in every
  statement. No brand, source, label, component or other table count changed.
  All 13 test files pass; the existing quality-link-decisions test now covers
  the City-Becane and Super Mirage Eco guards without another test file.
- Generator comparison across all 96 loaded catalogues: all 21,176 prior
  generated specs unchanged, exactly twenty new City-Becane specs. After load,
  21,196 paired specs, 21,181 unchanged and the same fifteen pre-existing lost
  mappings; zero gained/changed/missing/ambiguous identities. Whole-DB quality
  findings are identical to the baseline: zero errors and 1,951 reviews
  (1,566 incomplete dates, 326 date conflicts, 35 broad freewheel labels,
  24 descriptions at limit). No new finding involves City-Becane.
- Temporary SQL, snapshots, CSV backup and helpers were removed after validation,
  together with the four original 1984-ingestion scratch files retained solely
  for City-Becane. The maintained thirteen-model CSV is preserved. Source URL,
  pages and the reconstruction evidence remain in these notes; no pending
  City-Becane ingestion or retained scratch dependency remains.

### Initial search (superseded market identification)

- Recommended next source: [1984 US catalogue, VeloBase PDF](https://velobase.com/CatalogScans/Motobecane/1984_Motobecane_catalog.pdf).
  Downloaded and visually checked PDF pp. 9–10: ten scanned spreads in total;
  the last spread contains a readable 13-model specification table, including
  road, touring, tandem and mountain equipment. Named parts include Simplex
  SLJ A 522, Campagnolo 980, Stronglight 107 SP / 99, Nervar 3020,
  Weinmann 405 / 506 and Maillard Helicomatic. These are printed identities
  to reconcile, not approved component mappings.
- The [VeloBase catalogue index](https://www.velobase.com/Pages/Resources/CatalogScans.aspx)
  labels it US and the table includes CPSC equipment; the actual UK distributor
  imprint above supersedes that market identification. PDF p. 9 calls the
  mountain bike the 1984 model. City-Becane is presented alongside Mt. Becane;
  its scope was subsequently approved on 2026-11-17 as recorded above.
- Other indexed options: 1976 US, 1978 and 1979 US. The existing processed
  catalogue notes cover 1974 and 1975 only. The 1984 edition is recommended
  to extend coverage into another decade, rather than on an assumed link rate.
- This initial search made no CSV, SQL or DB changes; subsequent preparation
  and retained review files are recorded above.

## Pivo handlebar link — 2026-11-14, user approved

- Linked 1975 Grand Jubile spec 3910, "PIVO Professional", to 11169 Pivo
  Professional (bar), 1973-78. The newly ingested Brügelmann 1973 p. 22
  lists Pivo Profi; later catalogues confirm the long reinforced sleeve.
- Added a 1975 Grand Jubile-scoped generator override. Before/after generation
  across all 86 CSVs is identical (6522 generated links): the current matcher
  already resolves this newly added component; the override records the choice.
- Applied the guarded NULL-only update in
  `/private/tmp/handlebar-link-review-2026-11-14/proposed.sql`: one row affected.
  No component or date changes. Handlebars now 232/954 linked.
- Still unresolved: Grand Touring "PIVO Professional, Randonneur bend"
  (the new road-bar row does not establish this bend); Tandem "PIVO Professional
  front, comfort rear" (two different bars in one spec).

## 1974 Motobecane — `1974_motobecane_spec.csv` (7 bikes, 136 specs, 43 linked)

- Source (added 2026-10-21): very likely VeloBase CatalogScans/Motobecane `1974_Motobecane_catalog.pdf` or `Motobecane1974.zip`, both titled "Motobécane - MBK 1974 US Catalog" (https://velobase.com/Pages/Resources/CatalogScans.aspx). Inferred from the title and year (the CSV has a page-reference column, as a scanned catalogue would), not confirmed. The index title states the market, so US is stated, not inferred.

- "Catalog Page Reference" column ignored via IGNORED_LABELS.
- Frame Size cells had backslash/doubled-quote inch-mark debris; rewritten.
- Values carry shifter asides after an em dash or comma ("SIMPLEX PRESTIGE —
  stem shifter"); normalizeForMatch now treats dashes and commas as spaces.
  "Jubile" aliases to "Jubilee".
- Wrong auto-link fixed: CAMPAGNOLO RECORD pedals were hitting the 1983 50th
  Anniversary pedal; now Record Strada 1037.
- Overrides: Campagnolo Record crank → Nuovo Record Strada v4 (BCD 144), hubs
  → 1035, headset "Campagnolo" → 1039 Gran Sport/Record; Stronglight
  Competition → V4 Competition (earlier); Stronglight 49 → 49D; Universal 61 →
  Mod. 61; Normandy Luxe Competition → gold label; SunTour V.G.T. Lux → V-GT
  Luxe v1, V.G.T. → V-GT type 2C/2D; Brooks Professional "with ... seat post"
  → Team Professional.
- Left unlinked: Sedis (no plain row), Weinmann 999 De Luxe / 500, Nervar and
  Solida steel cranks, T.A. Professional (no row), Atom freewheels, Lyotard,
  Motobecane-branded parts, Pivo generic stems.
- 2026-10-04 compound-cell split (CSV rewritten, old bike_spec rows deleted,
  reloaded; 119 -> 131 specs, 35 -> 38 linked). Derailleur cells carried the
  shifter ("SUN TOUR V.G.T., stem power shifter"): shifter text moved to a
  new Shifters column — "SUN TOUR stem power shifter" -> 6263 PUB-10, "SUN
  TOUR down tube ratchet shifter" -> 8056 PDL-M, "SIMPLEX PRESTIGE stem
  shifter" unlinked (no 1970s Simplex stem lever row). Rear derailleur
  overrides re-keyed on the bare names: 'sun tour vgt' -> 4695 (4900 VGT —
  the plain "V.G.T." sits beside a "V.G.T. LUX" in the same catalogue, so
  it is the pre-Luxe part), 'sun tour vgt lux' -> 4704 (4902). Saddle cells
  "… with alloy / CAMPAGNOLO seat post" -> Saddle + Seat Post column;
  "CAMPAGNOLO seat post" -> 5749 (1044 Record). Brakes cells "WEINMANN 999
  … with extension / quick release levers" -> Brakes + Brake Levers
  ("WEINMANN extension levers" etc. unlinked — no model named). Then the
  Derailleur column was replaced by explicit Front Derailleur / Rear
  Derailleur columns: the groupset bikes keep their front rows (Prestige,
  Jubile, Nuovo Record), the two SunTour V-GT bikes (Mirage, Grand Touring)
  get none — V-GT is a rear-only model and the catalogue never names the
  front mech, so the split's copied rows were wrong. 131 -> 129 specs.
- 2026-10-05 re-link pass: Grand Touring "NERVAR cotterless, 40-52 alloy
  chainwheel rings, with alloy guard" -> 1653 Nervar (3-pin,
  alloy/cotterless), the only cotterless Nervar row. The steel cottered
  Nervar cranks on the other bikes still have no row.
- 2026-10-06: Wheels column (aliased to Rims only, so tyres sat in the Rims
  line) renamed "Wheel Rims & Tires" in the CSV so splitCellValue gives
  Rims + Tyres; export debris (`27x1.25\  … tires"`) cleaned and a ", "
  added between rims and tyres. "with HURET spoke protector" moved from 6
  Freewheel cells to Extras ("ATOM or MAEDA, 14-32" comma dropped). Weinmann
  Sprint rim override re-keyed to 'weinmann sprint alloy 27x125"' (7778).
  Old rows 3662 / 3680 / 3698 / 3716 / 3736 / 3755 / 3773 (Wheels), 3658 /
  3676 / 3694 / 3712 / 3732 / 3751 (Freewheel), 3665 / 3683 / 3701 / 3719 /
  3739 / 3758 (Extras) deleted and reloaded. New links: "CLEMENT ELVEZIA
  tubular" -> 6752, "CLEMENT PARIS-ROUBAIX Tubular" -> 6762. 129 -> 136
  specs, 40 -> 42 linked.

## 1975 Motobecane — `1975_motobecane_spec.csv` (11 bikes, 205 specs, 58 linked)

- Source (added 2026-10-21): very likely VeloBase CatalogScans/Motobecane `1975_Motobecane_catalog.pdf` or `Motobecane1975.zip`, both titled "Motobécane - MBK 1975 US Catalog" (https://velobase.com/Pages/Resources/CatalogScans.aspx). Inferred, not confirmed, as for 1974. US is stated by the index title.

- "Catalog Page" ignored. Frame Size and Wheel Rims & Tires cells had the same
  inch-mark debris; rewritten (`27" x 1-1/4"`).
- Riviera and Nobly/3 had "STURMEY ARCHER 3 speed hub" in the Derailleur
  column; moved into Hubs ("... front / STURMEY ARCHER 3 speed rear") and
  Derailleur blanked. They link to the brand-level "Sturmey Archer" hub row
  because the DB has no AW row.
- "Wheel Rims & Tires" added to SPLIT_LABELS (Rims + Tyres). Tyres link via
  overrides (Elvezia, Paris-Roubaix → Clement); the Super Champion rim model
  isn't named so Rims stay unlinked.
- 2026-10-06, cell splitting added to the generator: the three "SUPER
  CHAMPION rims, X tubulars" cells now split into Rims "SUPER CHAMPION
  rims" + Tyres "ELVEZIA / GRAN-TURISMO / PARIS-ROUBAIX tubulars" instead of
  the whole cell under both labels. Old rows 3939 / 3940 / 3958 / 3959 /
  3977 / 3978 deleted and reloaded; overrides rekeyed to the tyre part.
  Still 205 specs, 58 linked. CSV edit (user, same day): commas added to
  the other eight rims-and-tyres cells ("Steel rims 27" x 1-1/4", gum wall
  tires", "WEINMANN H. P. alloy knurled sides, 27" x 1-1/4" MICHELIN high
  pressure tires"; Grand Jubile's " ,27" typo fixed to ", 27"), so they split
  too: rows 3790 / 3791, 3807 / 3808, 3823 / 3824, 3841 / 3842, 3860 / 3861,
  3879 / 3880, 3898 / 3899, 3919 / 3920 deleted and reloaded as Rims + Tyres.
  No new links (no rim or tyre model named). 205 specs, 58 linked.
- Wrong auto-link fixed: CAMPAGNOLO Record headset was hitting Record Pista
  #1040; now 1039 Gran Sport/Record.
- Overrides: Record 42-53 crank → v4; Record large/low flange → 1035/1034;
  Huret Jubile wide ratio → Jubilee rows; Huret Challenger stem shifter →
  hinged band (front) / generic Challenger (rear, auto); SunTour V.G.T. Luxe
  both shifter forms → V-GT Luxe v1; Universal Mod 68 → Super 68; Mafac Racer
  → "lettered MAFAC RACER"; Philippe Professional → Professionnel; Cinelli
  Giro d'Italia → 64 Giro D'Italia (70's model) bar and 1A (winged C) stem;
  Regina Oro 13-21 → Regina Oro (6 speed).
- Left unlinked: Unicanitor (ten variants, user to pick), Sedis, Weinmann,
  Nervar/Solida/Tourney/T.A. cranks, Atom clusters, Lyotard/Union pedals.
- 2026-10-04 compound-cell split, same pattern as 1974 (194 -> 208 specs,
  52 -> 58 linked): Shifters column — "SUN TOUR stem power shifter" x2 ->
  6263, "SUN TOUR down tube ratchet shifters" -> 8056, "HURET Challenger
  stem shifter" -> 6073 (Challenger levers 1725-1782), Simplex Prestige
  unlinked; Seat Post column — "CAMPAGNOLO seat post" x2 -> 5749, alloy x3
  unlinked; Brake Levers column — Weinmann lever halves, unlinked. Rear /
  front Challenger overrides re-keyed to bare 'huret challenger' (4273 /
  2388), 'sun tour vgt luxe' -> 4704. Derailleur column then replaced by
  explicit Front / Rear Derailleur columns, front blank on the three
  SunTour V-GT Luxe bikes (Tandem, Mirage, Grand Touring) — see 1974 note.
  208 -> 205 specs.

## Link-gap pass on the weakest categories — 2026-10-08

- 1974 Le Champion Handlebars "T.T.T. RECORD" -> 2771 3ttt Record (1st
  Version), via override. Judgment call: it is the only plain "Record" bar;
  the Record Competizione rows are a different, named model. 42 -> 43.
- Left unlinked: "PIVO Professional" x3 (1975; only a bare "Pivo (deep drop
  bars)" row), "WEINMANN extension levers" / "quick release levers" (the
  Weinmann AG lever rows are velobase cosmetic variants, QR one dated 1971
  only), "ATOM 14-26" / "ATOM or MAEDA" clusters (three cosmetic Atom
  5-speed variants, nothing in the text to choose on), "T.T.T. Franco Belge"
  has no row.


- 2026-10-11 (1970 Peugeot pass): the 'stronglight competition' headset
  override moved from 3124 (V4 Competition earlier version, two-pin
  locknut, 1950-60) to 3125 (later version, octagonal locknut, 1960-80).
  The five 1974 / 1975 Grand Touring, Grand Jubile and Grand Record
  "STRONGLIGHT Competition" headset specs were re-linked with a one-off
  UPDATE (stronglight-headset-fix.sql, 5 rows).

- 2026-10-30: 1975 Le Champion "GRAN-TURISMO tubulars" -> 9056 Vittoria Granturismo (the only Gran Turismo tubular row, 1974-78; user's call, maker not printed). +1.

- 2026-11-06 crankset pass: 1975 "TOURNEY Alloy Cotterless 40-52 chainwheel with alloy guard" -> 9562 Takagi Tourney, Three Arrows (row added after the Tourney "left unlinked" note; forged alloy cotterless double with alloy guards, 39-49T inner). 9562 year_to 1974 -> 1975. +1. T.A. Professional still unlinked: rows exist as "Professionnel" (1858 5 vis / 1859 3 attaches, both 1970-84) but nothing picks between them.
- 2026-11-13 Brakes sweep (user approved): 1974 Grand Record "WEINMANN 999 De
  LUXE or UNIVERSAL 61, Center Pull, quick release" -> 7929, the first-listed
  option, as the other 1974-75 Weinmann 999 bikes.
