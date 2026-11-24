## Holdsworthy Bike Riders Aids 1981 — reconciliation in progress

[1981 Holdsworthy catalogue](https://ebykr.com/library/holdsworth-1981-aids-catalog/), source 550, retailer edition (year printed on cover); 27 scans, paired folios. Components occupy folios 10–17 and 20–31; folios 18–19, 32–33 are articles, and clothing, accessories, tools, bikes and frames are outside component scope. The retailer's order numbers are not manufacturer part numbers. Transcriptions and page scans are retained under `/private/tmp/holdsworth-1981-front.json`, `/private/tmp/holdsworth-1981-middle.txt`, `/private/tmp/holdsworth-1981-end.txt` and `/private/tmp/holdsworth-1981-review/` for the ongoing reconciliation. The component inventories were checked against original scans 7–10 and 12–17; the broader database comparison remains incomplete. The working comparison and read-only DB snapshot are retained at `/private/tmp/holdsworth-1981-front-diff.txt`, `/private/tmp/holdsworth-1981-middle-diff.txt`, `/private/tmp/holdsworth-1981-end-diff.txt` and `/private/tmp/holdsworth81-components.tsv` for the remaining reconciliation. Baseline quality: zero errors, 2,032 review findings. Generator/live comparison: 118 catalogues, 24,829 specs, zero gains or changed mappings, 15 pre-existing lost proposals.


**First batch applied and validated:** Eight guarded updates affected one row each; readback confirmed dates, descriptions, source references and unchanged bike-link counts. Rerunning affected zero rows. The post-change quality report had zero errors and 2,031 review findings, one fewer incomplete-date finding for Biba. Generator/live comparison remained at 118 catalogues, 24,829 specs, no gained or changed mappings and 15 pre-existing lost proposals. All use source 550; no insert or deletion. Model-family matching is an inference and the seller's 1981 offering is an attestation, not proof of continuous manufacture or identical 1970s and 1981 specimens. Folio 15 explicitly names SR Super Apex SAX-5LA-EL, 42/52T and 165/170mm: 1756 changes year_to 1980 → 1981 and adds those details, retaining its 585g spec. Folio 23 names GB Randonneur touring bar and Ventoux deep square bar: 2847 and 2848 change year_to 1976 → 1981, retaining earlier descriptions and dimensions. Folio 25 names Lyotard 45ter and 79: 3812 changes year_to 1976 → 1981 and preserves the 1976 and 1981 weight claims separately; 3819 retains its dates and gains a 280g steel-barrel/alloy-quill description. Folio 23 names GB Biba with 80/100/120mm sizes and Allen fittings: 6537 gains those details and dates 1977–1981, the earlier attestation being the [1977 Raleigh Competition GS](https://www.retrobike.co.uk/archive/1977-raleigh-catalogue.1345/) named fitment (bike spec 4453); 1978 specs 5832/5852 also link it. Folio 23 also names Fiamme Milano and London bars, with relative medium and deep drops matching the family order in the maker descriptions: 9188 and 9189 change year_from 1985 → 1981 and preserve their maker dimensions. The match is an inference about model families, not proof of an individual later specimen in 1981. These bounds are known sightings, not proof of production endpoints. Read-only link counts: 1756 0, 2847 4, 2848 3, 3812 0, 3819 4, 6537 3, 9188/9189 0. Existing GB, Lyotard and SR near-duplicate reports returned no pairs.

**Before-images for the first batch:** 1756: year 1980–1980, source 1, `Sakae/Ringyo (SR) Super Apex SAX-5LA-EL, Japan, 585 grams (Spec)`; 2847: 1970–1976, source 260, `GB Randonneur, England. Touring bar with raised tops, suitable for dual brake levers`; 2848: 1960–1976, source 549, `GB Ventoux, England. Reinforced alloy drop bar with engraved centre, square, 16 x 4 x 6 1/8in deep`; 3812: 1975–1976, source 549, `Lyotard 45ter, France. Lightest Lyotard pedal: all-alloy racing quill, solid one-piece alloy barrel and bars holding a serrated alloy quill frame, 10oz (283g) pair`; 3819: 1970–1984, source 1, `Lyotard 79, France`; 6537: dates NULL/NULL, source 1, `GB BiBa, England`; 9188: 1985–1988, source 383, `Fiamme Milano, Italy. Alloy drop bar, drop 149mm, reach 86mm, 36-42cm, 270g`; 9189: 1985–1988, source 383, `Fiamme London, Italy. Alloy drop bar, drop 161mm, reach 103mm, 38-42cm, 270g`. Restore only after checking current values and references.

**Schothorst rim follow-up applied and validated:** Folio 31 offers Schothorst chrome-steel high-pressure rims in 26 and 27 inch and specifically a 26 × 1⅜ Endrick. The manufacturer, material, section and sizes support a family match to existing 9338 High Pressure and 9339 Endrick; this is an inference about a product family, not proof that all 1976 sizes or configurations remained available in 1981. The approved guarded updates changed year_to 1976 → 1981 and source 549 → 550 for each; descriptions and other dates remain unchanged. Readback verified both records and zero bike links; a rerun affected zero rows. Quality remained at zero errors and 2,031 review findings. Generator/live comparison stayed at 118 catalogues, 24,829 specs, zero gained or changed mappings and 15 pre-existing lost proposals. Neither record has bike links or a direct generator override. Schothorst near-duplicate report found no pairs. Bike specs containing Endrick do not identify the maker; the generator intentionally leaves generic Endrick unlinked. Before-images: 9338 1975–1976, source 549, `Van Schothorst High Pressure, Netherlands. Dutch chromed steel high-pressure rim with serrated braking sides, 26in and 27in, 32-40 holes`; 9339 1975–1976, source 549, `Van Schothorst Endrick, Netherlands. Dutch chromed steel Endrick-pattern rim, 27 x 1 1/4, 26 x 1 1/4 and 26 x 1 3/8in, 32-40 holes`. Restore only after checking current values and references.

**Held conflicts:** The retailer calls Lyotard 45CA's cage steel and lists 380g, whereas an existing description of 9085 calls 45CA dural and 3811 has 310g. A c.1977–81 maker export catalogue also gives 45CA a steel hub and 309g; Peugeot's 1977 specifications call the pedal dural. The exact cross-edition construction remains unresolved; do not overwrite 3811 or 9085 on the 1981 retailer text alone. Lyotard 65's 1981 forged body/380g also conflicts with earlier description and weights; check variant identity. Do not interpret Holdsworthy order numbers as maker part numbers.

## Holdsworthy Bike Riders Aids 1976 — first reconciliation applied 2026-11-24

The [55-scan 1976 edition](https://ebykr.com/library/holdsworth-1976-aids-catalog/) prints Aids ’76 on the cover. Its folio 57 mentions the 1976 British professional champion, and folio 82 refers to 1976 cyclo-cross champions; it is a 1976-edition retailer attestation, not a manufacturing start/end or proof of the exact season of availability. Images 23–33 are an inserted cycling/bike section; the catalogue resumes at folio 42. The original and full transcriptions are retained for the unfinished reconciliation at `/private/tmp/holdsworth-touchpoints.pdf` and `/private/tmp/holdsworth-1976-brakes.txt`, `/private/tmp/holdsworth-1976-wheels.txt` and `/private/tmp/holdsworth-1976-touchpoints.txt`. Inventory covers component folios 23–79; clothing, accessories, tools, bikes and advice are outside this component pass.

The approved first batch registered source 549 and extended `year_to` 1975 → 1976 for 32 existing identities: GB brake 752 and handlebar 2848; TDC headsets 3157/3160; Lyotard pedal 3812; Fiamme rim 5006; Wrights saddle 5706; GB stems 6542/6543; Birmalux 9324/9327; D’Alessandro tyres 9330–9333; Clement tyre 9334; Il Primo 9335/9336; Allez 9337; Van Schothorst 9338/9339; Nicklin cranks 9341–9343; Canetti tyres 9345/9346/9348/9349/9350; Kowalit tyres 9352–9354. Old source is 260 except Canetti 9346/9348/9350 source 276 and 9349 source 400. All descriptions, titles, IDs and start years stay unchanged; GB Ventoux 2848 has three existing bike links, other proposed rows have none. To revert, restore year_to 1975 and the old source only after checking each current value and reference. The source insert and all 32 guarded updates succeeded; readback confirmed 32 rows citing source 549 with year_to 1976. A rerun affected zero rows.

**Follow-up applied and validated:** Nine guarded updates now cite source 549. Campagnolo Sport 3320 crank 1476 has a three-pin 42/52 crosswalk in the Campagnolo notes and the 1976 seller lists Sport with matching construction: extend year_to 1975 → 1976 and describe the retailer's 170 mm/four ring combinations, retaining the previous 635g figure. Nylfor headset 3058 extends year_to 1975 → 1976 and adds the retailer's white nylon, 5/32in bearings and thread options. Weinmann 1690 extension lever 8645 changes year_from 1979 → 1976: the catalogue folio 33 names the 144/170/1690 assembly and the Weinmann maker reconciliation identifies 1690 as the extension. This is an earlier attestation, not a proven launch date. Pedals 3709, 3715, 3717 and 3816 and Super Champion rim 5176 gain named catalogue details while retaining existing measurements and dates; Canetti Paris-Tours 9347 gains the 1976 file-tread option with its prior black-tread evidence retained. The rollback before-images are recorded below. IDs 1476, 3709, 3715 and 5176 currently have 3, 17, 4 and 6 bike links respectively; the other candidates have none. Readback verified all nine descriptions, dates, source references and unchanged bike-link counts; the longest description is 220 characters. Rerunning affected zero rows. Quality remained at zero errors and 2,032 review findings. Generator/live comparison remained at 118 catalogues, 24,829 specs, zero gains/changed and 15 previously recorded lost proposals; Campagnolo and Weinmann near reports found no pairs.

**Follow-up rollback before-images:** Restore only after checking current values and references.

- Restore component 1476: year_from 1970, year_to 1975, source_ref 1; old description: Campagnolo 3320, Gran Sport, Italy, 635 grams,52-42 /w bolts and cups Listed as the Sport chainset 1971-75.
- Restore component 3058: year_from 1960, year_to 1975, source_ref 260; old description: Nylfor All Nylon, France, 28 grams
- Restore component 3709: year_from 1971, year_to 1988, source_ref 342; old description: Campagnolo 1037/a, Record Strada Superleggeri (SL), Italy, 323.67 grams (avg). Extra-light road pedal, 1037/aD right and 1037/aS left.
- Restore component 3715: year_from 1971, year_to 1988, source_ref 342; old description: Campagnolo 1038/a, Record Pista Superleggari (SL), Italy, 308 grams. Extra-light track pedal, 1038/aD right and 1038/aS left.
- Restore component 3717: year_from 1974, year_to 1988, source_ref 262; old description: Campagnolo 4121, Super Record Pista, Italy
- Restore component 3816: year_from 1960, year_to 1980, source_ref 1; old description: Lyotard 462, France, 190 grams (Actual)
- Restore component 5176: year_from 1970, year_to 1980, source_ref 1; old description: Super Champion Competition, France, 360 grams (Actual), 36h version
- Restore component 8645: year_from 1979, year_to 1981, source_ref 180; old description: Weinmann AG No. 1690 extension lever, Switzerland, extension (safety) lever L / R with pull-up stud mounted, for Weinmann hooded levers with oblong side holes; sold fitted to 157, 144-1, 161-1 and 162-1 (e.g. 161-1/1690)
- Restore component 9347: year_from 1972, year_to 1981, source_ref 400; old description: Canetti Paris-Tours, France. Tubular with hand-laid matt black tread, for longer time trials, 8 3/4oz (248g)

**Fiamme Montreal comparison, 2026-11-24 — applied and validated:** The [1976 Holdsworthy catalogue, folios 53–54](https://ebykr.com/library/holdsworth-1976-aids-catalog/) names and illustrates a polished Montreal with an underslung recessed Allen clamp, offered in 8–12 cm and listed at 11 oz. The [1981 Holdsworthy catalogue, folio 23](https://ebykr.com/library/holdsworth-1981-aids-catalog/) repeats the name and clamp construction. The [recovered c.1985 maker image](https://web.archive.org/web/20101223193341id_/http://velo-pages.com/main.php?g2_view=core.DownloadItem%26g2_itemId=1455%26g2_serialNumber=2) names Montreal and shows a similar alloy stem and clamp, 22.2 mm quill and 7–12 cm sizes. The [6527 specimen](https://www.velobase.com/CompImages/Stems/2FE8F2D7-EBAE-490E-87D3-B8B046FA557A.jpeg) has a matching general clamp and body layout. Matching the earlier listing to the maker family is a visual/specification inference, not proof that an individual 1985 specimen existed in 1976 or that production was continuous. Live 6527 is 1985–1988, source 383, with no bike links or explicit generator override; Fiamme near report found zero pairs. The approved guarded update moved year_from 1985 → 1976 as the earlier retailer attestation, retained year_to 1988, rewrote the description to include the 1976 clamp/finish while retaining the existing range, finish and weight, and changed source_ref 383 → 549. Old description: `Fiamme Montreal, Italy. Alloy stem, 22.2mm quill, 70-120mm extension (7-12cm), silver or black, 245-295g`. Restore the old description, year_from 1985 and source 383 only after checking current values and references. Readback confirmed the new values and zero links; repeat affected zero rows. Fiamme near-duplicate report remained empty. No bike spec named Fiamme Montreal. Generator/live comparison remained at 118 catalogues, 24,829 specs, zero gains or changed mappings and 15 pre-existing lost proposals.

 Weinmann 136/136.16 7936 combines variants while the 1976 text names only 136. GB All-Rounder 8473 and Clement Elvezia 75 9903 have retailer measurements/construction conflicts requiring version checks. These are not included in the follow-up SQL.

**Further 1976 comparison, 2026-11-24 — applied and validated:** Eight guarded updates affected one row each. Readback verified all dates, descriptions, source references and unchanged bike-link counts; a rerun affected zero rows. Quality remained at zero errors and 2,031 review findings; generator/live comparison remained at 118 catalogues, 24,829 specs, zero gained or changed mappings and 15 pre-existing lost proposals. Folio 54 identifies GB BiBa, anodised alloy with an Allen-key clamp and D-headed sleeve bolt: 6537 previously started in 1977, so the update moves year_from 1977 → 1976 and preserves its 1981 source-specific sizes. Its three existing bike links are 1977–78 and its year-scoped override remains valid. Folio 54's heavily chromed Cinelli steel track stem matches 6501's extra-wide clip, brazed joints and 7–13cm range: year_to 1975 → 1976. Folio 69's Fiamme High Pressure 27in, 18oz and 32/36/40 holes matches 9322: year_to 1975 → 1976. Folio 71's YFC seamless calf-leather saddle and Matex foam/plastic touring saddle match descriptions, dimensions and weights on 9355/9356: year_to 1975 → 1976. The matches are to offered model families, not proof of uninterrupted manufacture. Folio 54 also names Cinelli Sacchi with 9–13cm lengths: 9320 year_to 1975 → 1976. Folio 68 names Super Champion Medaille d’Or: 5185 keeps its 19.5mm, 260g and prior uses and adds the seller’s smooth sides and 24/28/32/36 drillings. Folio 73 names a fluted, hollow two-bolt Campagnolo Super Record seatpost; the [1974 maker catalogue](https://www.campyonly.com/history/catalogs/catalog_17.pdf) identifies 4051 with these features, matching 5759. Its 1976 description adds the seller’s titanium-cradle and satin-chrome fittings claims while retaining its script and 246–250g, without changing dates; it has nine bike links. The rows besides 6537 and 5759 have no bike links; YFC, Matex, Cinelli, Super Champion and Campagnolo near-duplicate reports found no pairs, and the earlier GB and Fiamme reports found no pairs. Quality baseline: 0 errors, 2,031 review findings; generator/live comparison: 118 catalogues, 24,829 specs, 0 gained or changed and 15 pre-existing lost proposals.

Before-images: 6501 year 1960–1975, source 260, `Cinelli Pista Steel, Italy. Heavily chromed steel track stem with an extra-wide clip, brazed joints, hexagon-headed draw bolt, 72 degrees, 7-13cm`; 6537 year 1977–1981, source 550, `British alloy stem, satin anodised, with recessed Allen-key fittings; listed in 80, 100 and 120mm lengths.`; 9322 year 1975–1975, source 260, `Fiamme High Pressure, Italy. Rolled, square-sided deep-welled clincher rim with scoured braking sides, 18oz (510g), 32-40 holes, 27in only`; 9355 year 1975–1975, source 260, `YFC Seamless, England. Nylon saddle covered in seamless calf leather, tension adjuster, chromed frame moulded in, no bag loops, 11 x 6 x 2 1/4in, 11oz (312g)`; 9356 year 1975–1975, source 260, `Matex touring saddle, England. Nylon base with 3/4in dense foam and stretch plastic cover, saddle loops, chromed wire frame with clip, 10 1/2 x 6 x 3in, 21oz (595g)`; 9320 year 1960–1975, source 376, `Chromed steel sprint stem, No. 3 Sacchi in 1960; Mod. 3 Sprint in 1973. Approx. 58 degrees to quill, 22.2 mm quill; plain or badged. Lengths 11-14 cm in 1960, 9-14 cm in 1973, 9-13 cm in 1975.`; 5185 year 1970–1981, source 276, `Super Champion Medaille D' Or, France, 260 grams. Tubular rim, 36 holes, 19.5 mm wide, highly polished silver; for criterium, track and time-trial racing.`; 5759 year 1974–1980, source 1, `Campagnolo 4051, Super Record (two-bolt, fluted), Italy, 246-250 grams. Fluted two-bolt post with Campagnolo script, 1974-80.`. Restore only with verified current values and references. The remaining catalogue entries still need reconciliation. Category comparison scratch files retained for resumption: `/private/tmp/holdsworth76-brakes-review.txt`, `/private/tmp/holdsworth76-wheels-review.txt` and `/private/tmp/holdsworth76-touch-review.txt`.

**Record headset follow-up, 2026-11-24 — applied and validated:** The [1976 Holdsworthy catalogue](https://ebykr.com/library/holdsworth-1976-aids-catalog/), folio 55, describes Record road with caged 3/16in balls, and Record path with 26 loose 5/32in balls at each end; both have octagonal threaded race and locknut. The [1975 Holdsworthy catalogue, folio 56](https://ebykr.com/library/holdsworth-1975-aids-catalog/) explicitly identifies the road as 1039 and path as 1040; [Campagnolo catalogue 16](https://www.campyonly.com/history/catalogs/catalog_16.pdf) independently uses the same maker codes. The approved guarded updates enriched 2963 and 2966, retaining their original weights, English/French/Italian threads, dates and links. Readback confirmed both records, source 549 and unchanged bike-link counts; rerunning affected zero rows. Quality remained at zero errors and 2,031 review findings; generator/live comparison remained at 118 catalogues, 24,829 specs, zero gained or changed mappings and 15 prior lost proposals. 2963 has 20 bike links and 2966 has two; neither generator override changes. No insert, deletion or date change is proposed. Before-images: 2963 year 1960–1985, source 292, `Campagnolo 1039, Record Strada, Italy, 194 grams. Available in French, English and Italian threads.`; 2966 year 1960–1985, source 292, `Campagnolo 1040, Record Pista, Italy, 160.9 grams (Actual). Available in French, English and Italian threads.` Restore only after verifying current values and references. Campagnolo near-duplicate report found no pairs. Baseline quality 0 errors / 2,031 review findings; generator/live comparison 118 catalogues / 24,829 specs, 0 gained or changed and 15 prior lost proposals.

The 1976 retailer also claims Super Record 4041 headset cups are titanium, while existing 2968 describes alloy cups with steel races from a later source. The named model alone does not resolve whether this is a version or a seller error; no update to 2968 is proposed. The 460D pedal rows 3814/3815 remain a duplicate-review lead rather than a proven merge.

**GB Menton source review, 2026-11-24 — applied and validated:** The [1975 catalogue, folio 53](https://ebykr.com/library/holdsworth-1975-aids-catalog/) calls the satin-anodised engraved-centre bar new and lists 15¼ × 4⅛ × 6⅛ in; [1976 folio 52](https://ebykr.com/library/holdsworth-1976-aids-catalog/) lists 17 × 4⅛ × 6½ in. The [1981 edition, folio 23](https://ebykr.com/library/holdsworth-1981-aids-catalog/) names a satin-anodised Menton without dimensions. The listings support a model-family identification, not proof that either size was sold in 1981, that the conflicting dimensions describe one specimen, or that production was continuous. Before the change, component 9318 had year_from/year_to 1975/1975 and source 260, no bike links or explicit generator override; the GB near-duplicate report found no pairs. The approved guarded update registered the 1981 source as 550 and extended year_to 1975 → 1981 while retaining both dated dimensions. Readback confirmed the result and zero bike links; a rerun affected zero rows. Quality remained at zero errors and 2,032 review findings. The generator/live comparison remained at 118 catalogues, 24,829 specs, zero gained or changed mappings and 15 pre-existing lost proposals. Old description: `GB Menton, England. Reinforced alloy drop bar with beautifully engraved centre section, satin anodised, 15 1/4 x 4 1/8 x 6 1/8in deep`. Restore the old description, year_to 1975 and source 260 only after checking current values and references.

The 1976 scans and inventory show more entries that still need full reconciliation against the DB before this catalogue is complete. In particular 1976 GB Menton is printed 17 × 4⅛ × 6½ in versus the 1975 catalogue’s 15¼ × 4⅛ × 6⅛ in; Fiamme road handlebar dimensions and Birmalux Maes width also differ from earlier values. Treat these as source/variant conflicts, not automatic corrections. Canetti’s generic heading says cotton while individual Olympic and Tour de France are explicitly silk; do not transfer the generic fibre claim to those models. The catalogue says Nuovo Alberto while the illustration reads Nuova. Williams C34 is listed as rings and N34 is described as like an old C34; this does not independently date C34 cranks. The Weinmann Vainqueur drawing does not resolve the open single-spring 1106 identity.

Baseline: quality report 0 errors and 2,032 review findings; generator/live comparison 118 catalogues, 24,829 specs, 0 gains/changed and 15 prior lost proposals; Nicklin, Canetti and Kowalit near-duplicate reports each found zero pairs. Post-load quality and generator/live comparisons matched the baseline, and the three near-duplicate reports remained empty. No bike links changed. The remaining inventoried catalogue entries still require database reconciliation.

## André Bertin–Milremo selected pages — applied 2026-11-24

The [Bertin–Milremo catalogue](https://ebykr.com/library/andre-bertin-milremo-catalog/) is a selection of ten photographs of the cover and printed pages 4–7, 15–17, 20–21, 23, 30–31, 38–39 and 45, from an approximately 48-page catalogue. The book has no printed year in the available pages. Its Shimano 600 and Positron references suggest 1974 or later, not a verified publication year or production date; the `/75/` archive path is not an imprint. Treat as undated and partial. The inventory is visual: catalogue numbers are Bertin stock references, not necessarily maker part numbers.

Printed p.7 pictures ten named Milremo tubulars: Training 4.315, Amatore 4.318, Sportivo 4.320, Cadetti 4.321, Leggerissimo 4.322, Supercross 4.325, Invulnerabile 4.329, Special Sport 4.330, Record 4.333 and Chronometro 4.350. Another illustration 4.360 is too faint to identify. Existing 9400 Sportivo, 9401 Cadetti and 6839 Record have corresponding names, but the illustrations alone do not prove exact generation or support replacing their descriptions. Leggerissimo 4.322 is not automatically the later Nuovo Leggerissimo 9404. Keep these four unchanged pending a version crosswalk. The six remaining names were added as distinct tubular records with NULL years and stock references in their descriptions: Training 12471, Amatore 12472, Supercross 12473, Invulnerabile 12474, Special Sport 12475 and Chronometro 12476. They cite source 548. No weight, exact construction, production dates or underlying manufacturer is inferred from illustrations. To revert, delete only these six IDs after checking their source and identity, then delete source 548 only if no rows reference it.

The other selected pages are primarily third-party Huret, Simplex, Shimano, Campagnolo, Stronglight, Mafac, Universal, Philippe and Atax illustrations, plus saddle, handlebar/stem and seatpost drawings with seller stock numbers; clothing, tools, bottles, clips, frame fittings and pumps have no component category. Page 45 illustrates Milremo quilted saddles 25281/25283: specimen 5430 resembles 25281 but a visual resemblance alone does not establish the stock-number crosswalk; 5431 is a separately named Professional saddle and is not conclusively pictured. No saddle update was made. The source is partial, so missing catalogue pages cannot establish absence or dropped models. The Milremo near-duplicate report was empty before and after ingestion; the regular report included existing hub/configuration candidates but no proposed tyre duplicate. One existing bike spec says only `Milremo` (7848, unlinked), insufficient to choose a component. The guarded SQL was rerun without further changes; readback confirmed the six records and source. Generator/live comparison remained at 118 loaded catalogues, 24,829 specs, 15 pre-existing lost proposals and no gains or changed mappings. The quality report showed no structural errors; its six additional review findings are the new records’ unknown dates.

## STC 1978 — full component inventory and reconciliation applied — 2026-11-22

Full catalogue visually inspected. Printed page 27 establishes the 1978 edition; references in the initial extracts to an attributed year are superseded. Components below are cross-checked against live rows; comparison candidates and unresolved variant distinctions are evidence notes, not all applied updates. Frame tubing, dropouts, toe clips, pumps, tape and adhesives are excluded.

| Page | Category / maker / model | Printed details and potential comparison |
|---|---|---|
|1|Cover|STC cover, no date.|
|2|Introduction and bike fitting|No components to import; asterisk marks commonly stocked models.|
|3|Frame tubing: Ateliers de la Rive Super Vitus 971|Tube set and dimensions, out of component-detail scope.|
|4|Handlebars: Pivo 58 ML-RL/GR|Special Compétition: Ø23.5 mm tube, Ø25 mm clamp, reinforcement sleeve 47 or 135 mm, width 42 cm, 350 g, polished or natural/gold anodised. Compare Professional bar 11169 (long sleeve, 25 mm, 1973–78); do not assume sleeve variant model equivalence merely from title.|
|4|Stems: Pivo 87 M/L/TL|Special Compétition hollow AU5 GT heat-treated quill, recessed hex bolts, cone wedge, 85 mm/200 g, 105 mm/250 g, 120 mm/300 g, polished or natural/gold anodised. Compare 6646 Professional 1970–78, which has no model code; crosscheck prior evidence before assigning 87 code.|
|4|Handlebars: Pivo 58 ML|Ø23.5 mm tube, 25 mm reinforced centre 47 mm length, 42 cm wide, 310 g, polished. Compare 11168 Standard 1974–78 and unnamed 2904; variant match unresolved.|
|4|Stems: Pivo 75 M|Hollow AU5 GT heat-treated alloy, 80 mm, 250 g, cone wedge, polished. Existing Pivo 75 6644 is sparse and dated 1960–70; M may be a length variant but verify construction before assigning.|
|5|Frame parts Nervex|Frame lugs, bottom-bracket shell, fork crown; excluded.|
|6|Rims: Super Champion 260-08 Médaille d'or|Eyeletted tubular 700C, 260 g, 19.5×11.5 mm. 5185 1970–81 already records 260 g and width; maker height 11.5 mm and code may enrich.|
|6|Rims: Super Champion 310-10 Record du monde|Eyeletted tubular 700C, 310 g, 19.5×11.5 mm. 5189 1970–81 already includes 310 g/19.5 mm from 1981/82, earlier 1978-attributed corroboration; 330 g separately retained.|
|6|Rims: Super Champion 330-10 Arc-en-ciel|Eyeletted tubular 700C, 330 g, 20×12 mm. 5180 1960–88 already 330 g and 20 mm, candidate for maker 12 mm and 330-10 identity.|
|6|Rims: Super Champion 350-10 Route|Eyeletted tubular 700C, 350 g, 21.5×12 mm. 5190 title Route is bare, 1980–80; 4807 Route is 1937–38 derailleur, not same category. Strong candidate to enrich 5190 and extend to attributed 1978 after source/identity checks.|
|6|Rims: Super Champion 390-12 Etoile|Eyeletted tubular 700C, 390 g, 20×12 mm. 5182 1974–76 already records 390 g/20 mm; attributed-1978 would extend observed availability if date accepted. Page says special drilling 24/38/30/32/40 holes on request, not exclusive standard drilling.|
|7|Hubs: Pélissier Professionnels|Low/high flange, polished or black/gold anodized; 24/28/32/36 holes, offset for 5/6-speed freewheel; forged dural body, ground 100C6 cones/cups, seamless 25CD4S steel axle, QR. 3470 titled Professionel 1970–70 bare; exact flange relationship/identity needs inspection.|
|7|Hubs: Pélissier 2000|Low/high flange, angular-contact bearing with light preload; forged dural, hard-anodized alloy; 24/28/32/36 holes, 5/6-speed. 2002 quick release included in weights: large flange front 215 g rear 265 g pair 480 g; small front 192 rear 257 pair printed **445 g** (arithmetically 449, retain printed contradiction). Existing 3464/3465 titled '2000 Professional', but page presents Professionnels and 2000 as separate product families. Do not treat words as synonyms or merge; compare photos to 3464/3465 before deciding. 3464 1970 only, 3465 1970–80.|
|8|Rear derailleur: Huret Success 2460|Titanium upper/lower supports, forged black alloy main link, alloy pulley cage, adjustable full-ball pulleys, 175 g. Two cage positions support 13–24T or 13–28T, 36–53T crank; 2460 Huret new/Italian dropout. Existing 4299 (2460/2470, 1975–84) already describes 28T max, titanium, 170–175g. 2460 / 2470 hanger distinction in current description requires check, page explicitly says 2460 Huret or Italian.|
|8|Front derailleur: Huret Success 975 CPSC|Forged light alloy, hinged clamp 28/28.6 mm, double/triple, cutout curved cage, 130 g. Compare 2389 975 solid band, 2390 975 CPSC later solid band (1980–84), and 2391/2392 open band; scan calls 975 CPSC and shows hinge. Date move depends version crosswalk; do not assign automatically.|
|8|Shifters: Huret 1164/1162 and 1466/1468|Double light alloy levers 1164/1162, 60 g unclamped/90 g clamped; same as Jubilee. Ratchet 1466 for 28 mm, 1468 for 25.4 mm; illustrated and described as audible ratchet, not necessarily modern indexed shifting. Ratchet codes 1466/1468 already represented by 6066 1970–81. Compare 7945 1733–36/1707 and 6077 1567 for earlier plain shifters; neither explicitly has 1164/1162, so review other aliases before any new row.|
|9|Rear derailleur Huret Jubilee 2200|Forged alloy, full-ball adjustable-cone jockeys, 136 g, 13–24T rear / 36–53T front, Huret new or Italian hanger. Existing 4303 first-version 2200/2252/2240 1972–76 has 136 g in 1976; image does not by itself prove existing version 4303 vs 4305/4306 or later exact end.|
|9|Front derailleur Huret Jubilee 500/530|Double/triple, forged alloy, cutout cage; 500 28 mm, 530 28.6 mm, 80 g. Existing 2396 1972–76 five holes vs 2395 1977–86 four holes; crosscheck illustration cage slots before assigning.|
|9|Shifters Huret 1164/1162|Forged alloy twin levers, 60 g without clamp, 90 g with; 1164 28 mm, 1162 25.4 mm. Cable guide 2236 excluded.|
|10|Crankset Nervar Star 1000|Forged light-alloy arms 170/172.5/175 mm, chainrings 38–54T (common 40/50, 40/52, 42/52, 45/52); crank, two rings and BB 950 g; optional drilled rings save ~50 g. Ground case-hardened alloy-steel axle/cups; chainrings removable without removing arm. Existing 1675 'earlier' and 1676 'later' Star both bare and 1970 only; picture alone may be insufficient to map versions; inspect original specimen images before attributing code 1000 or 1978.|

| P | Item | Source specification | Existing / decision |
|---|---|---|---|
|11|Maillard 700 road hubs, low/high flange|Polished monobloc light alloy, full-complement adjustable angular-contact cup/cone bearings, QR; 24/28/32/36/40 holes (32/36 usual), front 100mm; rear 122mm 5 or 5/6 speed, PRO 126mm 6-speed; Italian threading on request.|3393 high flange, 3394 low flange; existing maker source 49 fixes actual hub model codes, 28/32/36 and rear dimensions. Candidate enrich both with bearing construction and additional 24/40 drilling. Guard attribution of new drillings to this catalogue and preserve 3394's listed 560g. No new codes or year changes. |
|12|Simplex SLJ5000 CP/SP rear|3–6 speeds; 26T total/24T max, 230g; silver/gold anodised forged alloy; long/short dropout codes.|4650 already has capacities and 1978 230g; unchanged.|
|12|Simplex SLJ A502 front|14T capacity, 113.5g listed; 1977 Peugeot team line is generic group claim.|7281 has 111.5g unspecified; can retain separately 111.5g and STC 113.5g without asserting source-specific first appearance.|
|12|Simplex SLJ A522 front|Oblique bare-cable pull with frame tunnel 4123, 116g.|7283 says 114g in all catalogues. Explicit contradiction: STC 116g; qualify existing 114g to other catalogues, don't drop it. 1977–88 already covers.|
|12|Simplex SLJ5007 retrofriction lever|95g, silver/gold alloy.|7298 already states 95g spec, unchanged.|
|12|Simplex SLJ4164 grooved post|193g; 25.5,26,26.2,26.4,26.6,26.8,27,27.2mm.|7305 already has 25.5–27.2mm /193g; no change needed.|
|13|Simplex LJ4000 CP/SP rear|3–6 speed, 24T max, 177g; alloy and Delrin.|4602,4603,4604 specimen generations; 4603 has 177g 1978 and 30T maximum **1984**. Compare image/gen before adding 24T at attributed-1978.|
|13|Simplex LJ A302 front|14T, 118g.|2567 shows 116g spec and 14T; add separately qualified STC 118g, not replace independent 116g.|
|13|Simplex LJ A322 front|Oblique bare-cable pull for tunnel 4123; code given beside A302 but no separate weight stated.|7331 already has bare-cable and tunnel; don't assign 118g to A322.|
|13|Simplex LJ4012 lever|retrofriction 88g.|7295 already has same.|
|13|Simplex SLJ2615 A/GA cross commands|Handlebar retrofriction; 3607 QR/skewers out of scope.|7304 SLJ2615/2615G already has this family.|
|14|Frame overview|Huret 244/245 and Simplex 932/933 front dropouts expressly model 1978.|Dropouts/frame scope excluded; dating marker.|
|15|Complete-wheel advice|Super Champion Etoile, Arc-en-Ciel, Record du Monde with drilling recommendations; Huret/Simplex rear 1978 dropouts.|No individual hub models given; not a separate wheel identity. Super Champion covered by p.6.|
|16|Stronglight 105 bis double crankset|Zicral drilled chainrings, forged cranks; lengths 165/170/172/175/177/180mm; 37–56T; optionally black rings; approx 915g complete double **with BB**.|1880 contains lengths, 37–56 and alternative weights. Candidate record 915g attributed STC and explicit complete including BB; preserve other observed weights and options.|
|16|Stronglight 99 bis double/triple cranksets|Explicit **model 1978**, drilled rings, anodised; arms 165/170/172/175mm; 28–54T; approx complete double 900g, triple 930g. Page calls set complete; page 16 intro 105 includes cups/axle, but clarify whether 99 weights include BB before claiming.|1907 double/1908 triple are both dated 1980 only, match 99 bis explicitly; propose year_from 1978 for both (clear model-year, not production introduction). 1907 already says 900g; 1908 has 972g later catalogue, add 930g separately qualified. Separate from 1909 99 bis NM (1982).|
|17|Stronglight 650 titanium BB|Hollow titanium axle, alloy cups, annular bearings; lengths 113 track, 118 double, 124 triple; approx 215g.|156 JP650; proposed add 113/118/124 and 215g attributed STC, preserve 190g actual and 199g catalogue.|
|17|Stronglight 651 steel BB|Hollow steel axle, alloy cups, annular bearings; lengths 118 double, 124 triple; approx 270g.|157 JP651 already 118–124; add 270g STC alongside 275/272 and 238 actual.|
|17|Stronglight S5 Super Compétition headset|Special steel, precision ball cages, approx 220g.|3122 already detailed; add 220g STC separately to 225/210 catalogue + 210 actual, subject 255 limit.|
|17|Stronglight D6 headset|Light alloy with steel race inserts, approx 125g.|3116 already says same, unchanged.|
|18|Maillard 700 RC / RN pedals|RC chrome steel cage 225g; RN black anodised alloy cage 175g; machined monobloc alloy body, steel axle 7mm hex, angular-contact full complement bearings, threaded toeclip holes. Weight basis unspecified.|3830 RN already source463; 3827 unmarked silver cage uncertain, cannot equate with RC solely from colour. Existing decision and RA 12238 explicitly documented in maillard.md; no automatic row additions/changes.|
|19|Maillard 700 Course 5/6 freewheels|5sp sprockets 14–28 except 27, 6sp 13–28 except 27; steel or Dural; sprockets front removable, extra-wide reinforced pawls, flat brass springs. Course design claims created 1972, developed 1973, teams since 1974, but not individual speed version start.|2113 5sp 1980–87 sparse; 2114 6sp 1980–87 details 1984 Peugeot 13–18. Evidence supports attributed 1978 for 5/6 versions; keep 1972–74 claim family-only, not specific configuration intro. Add ranges and mechanism while preserving 1984 fitment on 2114.|
|19|Maillard Dural Course and Dural Sprint|Treated alloy, steel/dural pieces interchangeable. 6sp 13–18 =145g dural vs345g steel.|9070 5sp generic Dural 1976; 2123 6sp Dural 1976–83 with 149g. 1978 source might qualify 145g for comparable 13–18 6sp only if source 245 proves this is Course, rather than Sprint; verify crosswalk to avoid conflation.|
|19|Maillard Sprint 5/6 freewheel|5sp 13/14/15/16/17; optional double 12/13 produces 6sp 12–17. 16/17 shared Course, interchangeable. All sprockets removable from front. Steel and treated aluminium variants. Tested 1976, in competition 1977; explicitly commercially sold **October 1977**.|2120 existing Sprint 1979–82, same listed ratios/materials, source394; recommend start 1977 and record package/conversion; test in 1976 is not same as commercial sale and should not move date to 1976 on this basis.|

| Page | Category / maker model | Inventory and DB reconciliation |
|---|---|---|
|20|Brake levers, Mafac Compétition allégée|Oxidised duralinox blade, natural-rubber hood, adjuster, stainless clamp, printed 130g (basis unspecified). Image lacks code, so 356/357/358 comparison needed; no safe exact version inference by family alone.|
|20|Brake levers, Mafac Promotion allégée|Oxidised duralinox blade, polyamide bracket and adjuster, stainless clamp; printed 78g (basis unspecified). 344 is broad uncoded plastic-bracket model, undated, explicitly black/white; 346 has 78g and QR, 347 is drilled 435 Promotion Perfo and has 1978 code. Illustration shows drilled blade but gives no code or release: compare exact variants before assigning 78g or dating 344.|
|21|Brakes, Mafac Compétition/CN1, CN2, CN3|Centre pull forged oxidised alloy, bronze bushing, quick-release, wheel centering guides. CN1 43–53 mm/171g, CN2 48–58mm/176g, CN3 50–65mm/178g, interpreted as single-brake figures (page does not state basis). Cn T braze-on 142g. Existing 825 includes same reaches and forged construction, four-stud pads and 365g actual pair; 826 says 148g with braze-on, 173g standard. Avoid overwriting basis/version-specific measurements. Existing 352 1980–82 is anodised Cn A but duplicates/overlaps 825; exact Cn A crosswalk absent from page; do not extend or merge without review.|
|21|Brakes, Mafac LS|Forged oxidised alloy side-pull, bronze bushing, cable release, wheel-centering guide; 44–57mm, 180g unspecified basis. Existing 833 1970–80 says 188g, LS A anodised. The 1978 printed 180g and reach merit enrichment, explicitly attributed versus prior 188g with unit basis unresolved, not overwrite. 834 is later LS2 1979–82; do not conflate.|
|22|Excluded: Christophe Z toe clips/straps|Poutret Morin 496 C medium 57mm, 496 S long 65mm, heat-treated alloy and leather; no toe-clip/strap category.|
|23|Excluded: Z pump|10876AM–10879AM, outside categories.|
|24–25|Excluded: Velox tape, plugs, adhesives and repair supplies|No in-scope parts.|
|26|Saddle, Idéale 90|270 x 150 mm, slow-tanned leather, copper rivets, steel / dural / titanium rail options, no.2/no.3/no.4 clamps. Table: steel 720g with no.2, 800g no.3, 563g without; dural 550g with no.4; titanium 500g with no.2, 400g without. Existing 5656 steel, 5657 alloy, 5658 titanium; compare refinements and preserve measured 575g / 498g / 451.5g. The 90 Rebour-treated finish is optional in this source, not proof every example was factory treated.|
|26|Saddle, Idéale 2001|260 x 150mm, Rilsan shell with leather cover, steel or titanium versions. Steel 490g with no.2, 333g without; titanium 360g with no.2, 270g without. Existing 5599 covers steel family with 518g and 490g with clip. No separately titled 2001 titanium found in all Idéale 200x rows, but do not blindly create until comparing aliases and variant representation.|
|26|Saddle, Idéale 2002|260 x 150mm padded Rilsan; black leather, steel or optional titanium wire. Steel 560g with no.2/403g without; titanium 400g with no.2/310g without. Explicitly says 2002 ridden in Thévenet's 1975/1977 Tour victories, but that does not prove titanium version in those years. Existing 5600 broadly covers steel, while titanium row 5601 is bare 1984–84. Source explicitly attests titanium 1978, so 5601 1984→1978 and improved description are supported; preserve 1984 upper date.|
|26|Saddle, Idéale 2003|Finish options include black or brown suede, tartan pattern, natural hide; chromed and titanium. Same table weights as 2002 (steel 560g with no.2/403g without; titanium 400g with no.2/310g without). 5602 natural leather steel, 5603 suede steel, 5604 suede titanium; 5604's 312g actual plus 310g catalogued without clamp can coexist. No automatic creation of tartan variant.|
|27–28|Index and back cover|p.27 says ÉDITION 1978 and indexes manufacturer component pages; p.28 blank back cover/logo.|

**Applied and validated 2026-11-22:** source 463 label/citation corrected, 15 existing rows updated and **12269** (UUID `aaad657d-4561-4f51-a2a6-cf24f8069428`) inserted for Idéale 2001 titanium, 1978/1978, brand 580, category 17, source 463. Description: `Idéale 2001 competition saddle, 260 x 150mm, Rilsan base with leather cover and titanium wire rails. 270g without clamp; 360g with No.2 titanium clamp.` Search text: `Tron Berthet Ideale 2001`. No merges, deletes or bike-spec writes. All 15 old guards and the source guard matched before application; transaction affected 1 source, 15 components and 1 insert. Identical rerun affected zero. Exact readback confirmed new values. Whole-DB quality before and after: zero errors, 1,982 review findings. Generator/live comparison remains 118 catalogues, 24,829 specs, 0 gained/changed and the same 15 unrelated Huret lost proposals. Idéale normal and near duplicate reports found no pairs. No exact unlinked 2001/Sprint/99 bis bike specs were found.

**Idéale 2001 fitment limit:** generic specs 3961, 7697, 7712, 7727, 9484, 9499, 9515, 9741, 9760, 10042, 10099 and 22975 link steel-described 5599; their text does not distinguish rail material. Their 1974–78 bike years are not proof of steel because 1978 is only the titanium variant's first current attestation, not a demonstrated introduction. The user chose to retain those links as a steel-rail assumption after review; a family-row proposal was not applied. See [link decisions](../../../ingest-bike-specs/references/link-decisions.md#saddles).

Source 463 old label `STC Selection Tricolore Course (attributed 1978), p.18`; old citation `https://forum.tontonvelo.com/viewtopic.php?t=39556 ; p.18 https://forum.tontonvelo.com/download/file.php?id=303772 ; year externally attributed, not printed`. New label `STC Sélection Tricolore Course catalogue (1978)`; new citation `https://forum.tontonvelo.com/viewtopic.php?t=39556 ; p.18 https://forum.tontonvelo.com/download/file.php?id=303772 ; p.27 prints ÉDITION 1978`. Restore old values only deliberately, guarded against current values.

Before and after descriptions, dates and source refs (retained for audit and guarded restoration):

| ID | Before years, source | After years, source | Before description | After description |
| --- | --- | --- | --- | --- |
| 156 | 1970–1986, 413 | 1970–1986, 463 | Stronglight Competition ref. 650 (cartridge, Ti Axle), France. Sealed-bearing bottom bracket, catalogued as JP 650, titanium axle; 190g measured, 199g catalogued. | JP 650 sealed-bearing bottom bracket, hollow titanium axle, alloy cups; 113mm track, 118mm double, 124mm triple. 1978: approx 215g; later catalogue 199g; 190g measured. |
| 157 | 1970–1986, 413 | 1970–1986, 463 | Stronglight Competition ref. 651 (cartridge, steel axle), France. Sealed-bearing bottom bracket 651 (JP 651), light-alloy cups and locknut, steel axle 118-124mm; 275g in catalogue no. 26, 272g in the 1980s brochure; 238g (Actual) without crank bolts. | JP 651 sealed-bearing bottom bracket, alloy cups and locknut, hollow steel axle 118mm double or 124mm triple. 1978: approx 270g; later listings 275g/272g; 238g measured without crank bolts. |
| 833 | 1970–1980, 298 | 1970–1980, 463 | MAFAC LS, France. Side-pull ("tirage lateral") brake, anodised finish (LS A), 188g; sold as set LS A with lever 429 and the self-lubricating cable. | Mafac LS anodised side-pull brake, forged alloy and bronze bushing, cable release and wheel guide; reach 44-57mm, 180g listed in 1978; legacy 188g listing. LS A set with 429 lever and lined cable. |
| 1907 | 1980–1980, 266 | 1978–1980, 463 | Stronglight 99 (new style, drilled), France. The 99 Bis double crankset: anodised, perforated rings and milled inner arm face, hollow taper-square axle, hex-socket bolts. Arms 165-175mm, rings 28-54T for 2.38 chain, with or without chain guard. 900g. | Stronglight 99 (new style, drilled), France. The 99 Bis double crankset: anodised, perforated rings and milled inner arm face, hollow taper-square axle, hex-socket bolts. Arms 165-175mm, rings 28-54T for 2.38 chain, with or without chain guard. 900g. |
| 1908 | 1980–1980, 266 | 1978–1980, 463 | Stronglight 99 (new style, triple), France. The 99 Bis triple crankset: anodised, perforated rings and milled inner arm face, hollow taper-square axle, hex-socket bolts. Arms 165-175mm, rings 28-54T for 2.38 chain, with or without chain guard. 972g. | 99 Bis triple crankset, anodised with drilled rings, milled inner arm, hollow square-taper axle and socket bolts; 165-175mm arms, 28-54T rings, with or without chain guard. 1978: approx 930g; later catalogue 972g. |
| 2113 | 1980–1987, 50 | 1978–1987, 463 | Maillard 700 Course (5 speed), France | 700 Course 5-speed freewheel; removable sprockets, extra-wide reinforced pawls and flat brass springs. 1978 range 14-28T excluding 27T; steel or Dural alloy. |
| 2114 | 1980–1987, 50 | 1978–1987, 463 | Maillard 700 Course (6 speed), France. Racing straight-block cluster; 13-14-15-16-17-18 on the 1984 Peugeot (GB) PY 10 LS Professional. | 700 Course 6-speed freewheel; removable sprockets, extra-wide reinforced pawls and flat brass springs. 1978 range 13-28T excluding 27T; steel or Dural. 13-18T on 1984 Peugeot GB PY 10 LS Professional. |
| 2120 | 1979–1982, 394 | 1977–1982, 463 | Maillard 700 Sprint, France, steel or light alloy, 5 speed first sprocket 13T (13-17T) or 6 speed first sprocket 12T (12-17T); sprockets MA-17T, MA-16T | 700 Sprint freewheel, steel or Dural; 5-speed 13-17T, with 12/13 double sprocket converting to 6-speed 12-17T. Front-removable sprockets; 16/17T shared with Course. Sold from October 1977. |
| 2567 | 1978–1979, 57 | 1978–1979, 463 | Simplex LJ A302, France, 116 grams (Spec), 14t double, 28-28.6mm. Peugeot fitment 1978-79. | LJ A302 double front derailleur, 14T capacity, 28-28.6mm clamp; 116g legacy specification, 118g in 1978 catalogue. Peugeot fitment 1978-79. |
| 5182 | 1974–1976, 276 | 1974–1978, 463 | Super Champion Étoile, France, 390 grams. Tubular rim, 36 holes, 20 mm wide, serrated edge, highly polished silver; extra rugged, for general use. | Étoile 390-12 tubular rim, 700C, eyeletted, 20 x 12mm, 390g listed; 36 holes, serrated edge, highly polished silver. Special drilling offered on request. |
| 5190 | 1980–1980, 1 | 1978–1980, 463 | Super Champion Route, France | Route 350-10 tubular rim, 700C eyeletted alloy, 21.5 x 12mm, 350g listed. Special drilling available on request. |
| 5601 | 1984–1984, 261 | 1978–1984, 463 | Ideale 2002 (leather / titane rails), France | Idéale 2002 titanium-wire saddle, 260 x 150mm; Rilsan base with foam and black leather cover. 310g without clamp; 400g with No.2 titanium clamp. |
| 5604 | 1970–1984, 261 | 1970–1984, 463 | Ideale 2003 Titane (suede leather / titane rails), France, 312 grams (Actual) | Idéale 2003 titanium-wire saddle, suede leather cover; 312g measured. 1978 catalogue lists 310g without clamp or 400g with No.2 titanium clamp. |
| 7281 | 1978–1981, 57 | 1978–1981, 463 | Simplex SLJ A502, France, 111.5 grams, light alloy anodized housing/clip, double/triple, 14t inter-ring, clamp-on 28-28.6mm, anodised silver or gold | SLJ A502 double/triple front derailleur, anodised alloy body and 28-28.6mm clamp, silver or gold; 14T capacity. Legacy listing 111.5g; 1978 catalogue 113.5g. |
| 7283 | 1977–1988, 54 | 1977–1988, 463 | Simplex SLJ A522, France. Double front derailleur (aka Super LJ A 522), anodised light alloy, silver or gold, 14t, bare cable only; brazed tunnel 4123 (1978-81), clamp 28-28.6mm (1984). 114g in all catalogues. Peugeot fitment 1977-88. | SLJ A522 double front derailleur, anodised alloy, silver or gold, 14T; bare cable and brazed tunnel 4123 (1978-81), clamp 28-28.6mm (1984). 1978: 116g; other catalogue 114g. Peugeot fitment 1977-88. |



## STC 1978 — catalogue scope review — 2026-11-22

This initial sampling preceded the full inventory and application above; its statements about incomplete reconciliation and candidate changes are historical.

[Sélection Tricolore Course catalogue](https://forum.tontonvelo.com/viewtopic.php?t=39556) offers 28 scan pages and a separately posted image for p.26. The cover has no year, but [printed p.27](https://forum.tontonvelo.com/download/file.php?id=303763) explicitly states ÉDITION 1978. This supersedes the initial uploader-attributed dating; source 463's existing citation still needs correction. The Maillard pedal page was previously reviewed and used as source 463, but that focused pass was not a full catalogue reconciliation; see [Maillard notes](maillard.md#spidel-700-stc-codematerial-review--2026-11-18-read-only).

Visually sampled pages 3, 6, 12, 17, 19–21. [P.19](https://forum.tontonvelo.com/download/file.php?id=303771) explicitly says the Maillard Sprint freewheel went on sale in October 1977, and describes 5-speed 13–17 and 6-speed 12–17 steel and light-alloy versions. Existing **2120**, Maillard 700 Sprint, currently starts in 1979; the model and range align, making an earlier date a specific reconciliation candidate subject to checking other source and variant evidence. The page also describes Maillard 700 Course in 5/6 speeds; **2113/2114** have sparse descriptions and 1980 starts, and identities must be checked before changes.

[P.12](https://forum.tontonvelo.com/download/file.php?id=303778) covers Simplex SLJ5000, A502/A522 fronts, SLJ5007 shifters and 4164 post with codes, dimensions and weights; those sampled rows are already substantially documented. [P.20](https://forum.tontonvelo.com/download/file.php?id=303770) describes Mafac Compétition and Promotion levers; [p.21](https://forum.tontonvelo.com/download/file.php?id=303769) gives Compétition CN1/CN2/CN3 and LS brake dimensions. Existing Mafac rows include 344, 346, 347, 352, 825, 826 and 833; version correspondence needs comparison before attributing specifications. P.6 covers Super Champion rims and p.17 Stronglight brackets/headsets; p.3 frame tubing is outside component-detail scope. These samples are not a complete inventory and do not prove new rows or bike links. Read-only DB comparison only; no data changes. Task-created samples were removed.

## Whole-database quality triage — 2026-11-20

Read-only `node scripts/quality-report.js --json` and full text report: zero errors, 2,073 review findings: 1,684 incomplete date bounds, 329 linked date conflicts, 35 broad Freewheel labels and 25 descriptions exactly 255 characters. These are findings, not distinct components or proven bad links. No DB changes were made. This was a first-pass triage, not a review of every flagged identity.

Direct readback confirms six visibly truncated descriptions, each at 255 characters:

| Component | Current ending | Last modifying source_ref |
| --- | --- | --- |
| 2379 Huret Club II 1000-01 / 1001-01 | `Sachs Huret Club fr` | 314 |
| 5654 Ideale 88 Speciale Competition (larger copper rivets) | `Variants: smaller copper rivets (velobase, 50` | 280 |
| 7899 SR NRY, New Royal | `Fitted as "SR Roya` | 200 |
| 7902 SR SR-AH / SR-E | `Still fitted as "Sakae` | 422 |
| 8234 SR CT, Custom | `as "SR / Sakae Cust` | 246 |
| 8759 Selle Italia Anatomic | `on the 1987 Ral` | 259 |

Repair from existing Huret, Ideale, Sakae-Ringyo and Selle Italia notes and their cited sources; do not invent missing suffixes. Other at-limit descriptions include complete sentences, so reaching 255 alone is not proof of damage.

Largest date-conflict groups: Sedis 1402 (29 links), Maillard 8131 (19), Stronglight 3112 (18), Maillard 7240 (10). Do not automatically widen dates or change mappings. Stronglight notes already explicitly retain 1987–89 A9 links beyond the 1986 bound. Apparent seven-sprocket spec 17174 on six-speed 8131 already has an explicit generator decision: 1989 NL Cosmic is listed as 12-speed despite seven printed sprockets. This is not a newly established bad link. Missing upper bounds and broad catalogue labels likewise require interpretation rather than automatic edits. No exhausted source hunt was reopened.

### Description repairs — applied and validated

Applied the six user-approved description-only rewrites. Exact old-description/source guards changed six rows; the identical rerun changed zero. Exact readback matches every replacement below and confirms unchanged titles, dates and source references. SQL only assigned descriptions and did not write bike links or identity fields. The post-load quality report has zero errors and 2,067 review findings: 19 descriptions at limit, 1,684 incomplete dates, 329 linked date conflicts and 35 broad Freewheel labels. Only the six description-at-limit flags were removed. Temporary SQL was removed after readback and idempotency validation. No suffix is reconstructed from a guess; incomplete fitment clauses are omitted, while complete fitment evidence on 8234 is retained. Smaller-rivet Ideale 5655 remains a separate variant. No new source evidence is claimed.

**Remaining limit review, 2026-11-20:** read all 19 current live descriptions
at exactly 255 characters: 158, 357, 462, 994, 1900, 2287, 3112, 3261,
7452, 7474, 7922, 8105, 8272, 8642, 8883, 8931, 8996, 9599 and 9799.
None ends mid-word or in an obviously unfinished clause. Some lack terminal
punctuation; 7922's repeated `730 / 730` was initially treated cautiously.
The subsequent Weinmann source check below confirms that set designation.
This surface check does not prove
that no complete words were lost at the boundary or verify every specification
against its source. No description or database change is justified by length
alone; revisit a specific row if its original source shows missing text.

**Live recheck, 2026-11-23:** the 18 descriptions at 255 characters are the same as the above set except 9599, which no longer reaches the limit. All 18 were read; none ends mid-word or in an obviously unfinished clause. The six without final punctuation (357, 994, 7922, 8931, 8996, 9799) also end on complete phrases; the 7922 set notation has the source check below. This is a boundary review, not a full source-by-source verification or proof that no complete sentence was lost. No further truncation is established and no DB values were changed.

**Weinmann 133 / component 7922 source check, 2026-11-20:** visually checked
the [R. J. Chicken & Sons 1979 trade catalogue](https://www.icenicam.org.uk/library/Weinmann/Cycle_fittings_from_R_J_Chicken_catalogue_1979-11-07.pdf),
PDF p. 17 / printed p. 57. It explicitly offers a 730/730 front/rear side-pull
brake set with 133 touring levers, as well as 730/810 and 1020/1080 sets with
133 levers. The repeated model number is a valid front/rear combination, not
evidence of a typo. The 1979 trade listing corroborates that clause only; it
does not establish whether other words were lost at the 255-character boundary
or independently verify the other claims. The live description and source_ref
162 were unchanged; no DB correction is supported by this finding.

Exact old values for restoration and applied replacements:

- **2379 Huret Club II 1000-01 / 1001-01** (195 characters applied):
  - Old row: `{"title":"Huret Club II 1000-01 / 1001-01","year_to":"1988","year_from":"1978","source_ref":314,"description":"Huret Club II, France. Steel front derailleur, bright chrome, 143g, double or triple, 16T capacity; ref 1000-01 for 28 / 28.6mm, 1001-01 for 25.4mm; spring push plate version available. Sold as plain Club from 1982 (the Eco set front), Sachs Huret Club fr","component_id":2379}`
  - Applied description: Chromed steel front derailleur, double/triple, 16T capacity, 143g. 1000-01: 28/28.6mm clamp; 1001-01: 25.4mm. Spring push-plate version available. Sold as plain Club from 1982, the Eco set front.
- **5654 Ideale 88 Speciale Competition (larger copper rivets)** (138 characters applied):
  - Old row: `{"title":"Ideale 88 Speciale Competition (larger copper rivets)","year_to":"1981","year_from":"1960","source_ref":280,"description":"Ideale 88 Speciale Competition (larger copper rivets), France. Classic racing and long-distance saddle, softened leather, large copper rivets, plated two-wire frame, Rebour hand-treated top, 260 x 150mm, 500g. Variants: smaller copper rivets (velobase, 50","component_id":5654}`
  - Applied description: French racing/touring saddle: softened leather, large copper rivets, plated two-wire frame and Rebour hand-treated top; 260 x 150mm, 500g.
- **7899 Sakae/Ringyo (SR) NRY, New Royal** (177 characters applied):
  - Old row: `{"title":"Sakae/Ringyo (SR) NRY, New Royal","year_to":"1982","year_from":"1979","source_ref":200,"description":"Sakae/Ringyo (SR) NRY, New Royal, Japan, SR Catalog No. 18 (c. 1982): forged 14S super duralumin stem, high-tension steel 6mm expander and binder bolts, 22.2mm (0.833 / 0.865 / 22.0 to order), 70-130mm extension, 135mm length, 235-310g. Fitted as \"SR Roya","component_id":7899}`
  - Applied description: Japan. Forged 14S super-duralumin stem; high-tension steel 6mm expander/binder bolts. Quill 22.2mm; 0.833/0.865in or 22.0mm to order. Extension 70-130mm, length 135mm; 235-310g.
- **7902 Sakae/Ringyo (SR) SR-AH / SR-E, SR stem** (164 characters applied):
  - Old row: `{"title":"Sakae/Ringyo (SR) SR-AH / SR-E, SR stem","year_to":"1988","year_from":"1979","source_ref":422,"description":"Sakae/Ringyo (SR) SR-AH / SR-E, SR stem, Japan, SR Catalog No. 18 (c. 1982): melt-forged rustless light alloy stem, AH Allen-head or E hex-head bolts, 0.833 / 0.865in or 22.0 / 22.2mm, 50-100mm extension, 150-230mm length, 305-365g. Still fitted as \"Sakae","component_id":7902}`
  - Applied description: Japan. Melt-forged rustless light-alloy stem; AH Allen-head or E hex-head bolts. Quill 0.833/0.865in or 22.0/22.2mm; extension 50-100mm, length 150-230mm; 305-365g.
- **8234 Sakae/Ringyo (SR) CT, Custom** (205 characters applied):
  - Old row: `{"title":"Sakae/Ringyo (SR) CT, Custom","year_to":"1989","year_from":"1978","source_ref":246,"description":"Allen head expander and binder bolt, socket 6mm hex, under lock type, diam 0.833 / 22.2mm. Extensions 60-100mm, length 150mm. 280-330g. 310 g actual for 80 mm (Velobase, merged from row 6659). Fitted to 1983-87 Raleigh and 1987 Bianchi as \"SR / Sakae Cust","component_id":8234}`
  - Applied description: Stem with Allen-head expander/binder bolts, 6mm hex and under-lock type. Quill 0.833in/22.2mm; extension 60-100mm, length 150mm; 280-330g. Measured 310g at 80mm. Fitted to 1983-87 Raleigh and 1987 Bianchi.
- **8759 Selle Italia Anatomic** (171 characters applied):
  - Old row: `{"title":"Selle Italia Anatomic","year_to":"1987","year_from":"1979","source_ref":259,"description":"Touring saddle with a 61/4in-wide anatomic nylon shell (standard racing/sports width 5-5/8in), extra thick 3/8in orthopaedic padding, indented midline, black leather covering. 370 grams. Still fitted as \"Selle Italia padded black anatomic\" on the 1987 Ral","component_id":8759}`
  - Applied description: Touring saddle: 6-1/4in anatomic nylon shell (standard racing/sports width 5-5/8in), extra-thick 3/8in orthopaedic padding, indented midline and black leather cover; 370g.

## Previously unreviewed linked date conflicts — applied and validated 2026-11-20

Four components flagged by `quality-report.js` (`linked_date_conflict`) had no
earlier review. Each bike fitment was checked visually on the original scan;
the user approved all four component changes. Dates are dated observations,
not claimed manufacturing boundaries. No link, title, maker, category, UUID or
source_ref changed.

| Component | Fitment checked | Old → new | Basis and limits |
| --- | --- | --- | --- |
| 3430 Miche Superfast (hubs) | 1989 Bianchi US Krono, spec 18414: `Miche Superfast` in the Hubset column of [img-2473-1](https://cdn.shopify.com/s/files/1/0661/0501/6425/files/img-2473-1.jpg) | year_to 1988 → 1989; description `Miche Superfast, Italy` → `Miche Superfast, Italy. Forged anodised alloy hubs, ball bearings, 28-32-36 holes, for 5-6-7-speed freewheels, 550g` | Details from [Guida '88 scan 27](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_1988_february_-_i_componenti_da_corsa_scan_27_main_image.jpg) (FAC Michelin section; the guide does not say whether 550 g is a pair). Same-name match with the Bianchi hub is an inference. |
| 5525 Selle Royal Dolphin | 1986 Miyata US 710 / 310, specs 18838 / 18861: `SELLE ROYAL Dolphin Crosta` / `Dolphin Vinyl` in the saddle row of the [catalogue](https://sscycleworks.com/galleries/bike-museum/1986-miyata-catalog-compressed.pdf) p. 22 | year_to 1985 → 1986 | One row covers both printed covers. Dolphin is not in the Guida '88 Selle Royal list (scans 40–41). |
| 5384 Iscaselle Triathlon | 1988 Peugeot FR PG 10 T, spec 16553: `Triathlon ISCASELLE blanche`, printed p. 15 (image 14 of the [1988 page](https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1988.html)) | 1980–1980 → 1988–1988 | 1980–1980 was an unsupported Velobase decade placeholder. The Peugeot fitment is the only dated evidence; the Guida '88 Iscaselle list (scans 39–40) has no Triathlon, which does not disprove the model. |
| 1891 Stronglight 390 (crank) | 1989 Peugeot NL VTT Express, spec 17372: `Stronglight 390 Biostrong 28 x 38 x 48 alu spieloos`, table image 29 of the [1989 page](https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1989.html) | 1980–1980 → 1989–1989 | Same Velobase placeholder; 390 is absent from Stronglight catalogue no. 26. The Peugeot fitment is the only dated evidence. Chainring 1320 BioStrong still carries 1980–1980 and has no bike link. |

Validation: guarded SQL changed four rows and the identical rerun changed
none; readback confirmed the values above and the five unchanged spec links.
`compare-bike-links.js` over all loaded catalogues was identical before and
after (no gained or changed links; the 15 previously recorded Huret Rival lost
proposals). `quality-report.js` shows zero errors and five fewer linked-date
conflicts. The Miche duplicate report does not pair 3430 with another row.
Review SQL and downloads were removed. To reverse, restore the old values in
the table after checking for later changes and other fitments.

The Guida '88 scans now download at 1560 px wide, not the ~436 px recorded in
the source 262 notes below; fine print is legible.

### Second batch — applied and validated 2026-11-20

Same process and user approval. Three date extensions and one link removal;
no title, description, maker, category, UUID or source_ref changed.

| Item | Fitment checked | Old → new | Basis and limits |
| --- | --- | --- | --- |
| 1995 SunTour CW-1500, VX | 1980 Raleigh US Touring 14, spec 9087: `Sun Tour VX Cotterless 39/52T, 170 mm`, table p. 24 ([Raleigh-1980-US-24.jpg](https://theheadbadge.com/wp-content/uploads/Raleigh-1980-US-24.jpg)) | year_to 1979 → 1980 | Ring sizes fit the row's 34–48T / 48–53T ranges. SunTour's own catalogues last list CW-1500 before No. 59. |
| 2847 GB Randonneur | 1976 Raleigh US Gran Sport DL160, spec 7961: `G.B. Randonneur alloy handlebars` in the p. 8 text ([catalogue](https://labibleduvelocataloguesraleigh.blogspot.com/p/raleigh-1966.html), dated by its 26 March 1976 price list) | year_to 1975 → 1976 | Same-name match. |
| 6541 GB Neta | 1981 Raleigh Canada Super Course, spec 9301: `G.B. Neta 80 mm Allen Head` ([1981-Raleigh-Canada-13.jpg](https://theheadbadge.com/wp-content/uploads/1981-Raleigh-Canada-13.jpg)) | year_to 1980 → 1981 | The row's 7 / 9 / 11 cm sizes come from Holdsworth 1975 and do not include 80 mm; the description was left as sourced. |
| Spec 17185 (1989 Peugeot NL Cosmic seat post) | `Atax alu zadelpen`, table image 30 of the [1989 page](https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1989.html) | link 8528 → NULL; 8528 stays 1982–1982 | Maker and material only, while 8528 is a specific pillar listed as new in 1982. Generator: Seat Posts `atax alloy` null override scoped to the 1989 Cosmic. See [link decisions](../../../ingest-bike-specs/references/link-decisions.md). |

Stronglight 99 / 1906 (1974–1983) was reviewed without change. The 1984
Peugeot PCA 10 / PCA 15 triples (specs 12161 / 13761) and the 1988 TM 9 G
tandem double (16983) print plain `Stronglight 99`, but the maker's
catalogues n° 26 and n° 27 (1982) list the perforated 99 Bis NM (1909) and a
tandem 99 set, and the September 1986 catalogue lists no 99. The Peugeot
wording cannot separate plain 99 from 99 Bis NM or the tandem set, so neither
the links nor 1906's dates were changed.

2026-11-21 follow-up supersedes the identity hold for PCA10/PCA15: the
factoryp.10 photographs show the plain slotted99, supporting existing1906
without changing its dates. The separate manufacturer-listed Serie Tandem99
configuration was added as12225 after approval; TM9G16983 changed1906→12225.
Readback, full catalogue comparison and idempotency checks passed. See the
[photograph comparison and applied result](stronglight.md#peugeot-99-fitment-reconciliation--2026-11-21-applied-and-validated).

Validation: guarded SQL changed four rows and the identical rerun none;
readback confirmed the values above. `compare-bike-links.js` over all loaded
catalogues: no gained or changed links, the same 15 recorded Huret Rival lost
proposals, and the generator agrees with the NULL on 17185. `quality-report.js`
shows zero errors and four fewer linked-date conflicts; the test suite passes.
To reverse, restore the old values in the table after checking for later
changes and other fitments.

### Third batch — applied and validated 2026-11-20

Same process and user approval. Five date-only changes; no link, title,
description, maker, category, UUID or source_ref changed.

| Component | Fitment checked | Old → new | Basis and limits |
| --- | --- | --- | --- |
| 5481 Selle Italia Condor | 1981 Bianchi US Sprint/81, spec 6554: `Italia "Condor"` in the specification table of the [Vespa of America brochure](https://bikalog.org/api/view/Bianchi/1981/bianchi-1981.pdf) p. 4 (© 1980, 1981 range) | year_to 1979 → 1981 | Same-name match. |
| 7301 Simplex SXP 4190 | 1983 Peugeot Canada Sport UO 16C, spec 13662: `SX P 4190 levers`, image 6 of the [1983 page](https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1983.html) | year_to 1981 → 1983 | Printed code. |
| 3443 Ofmega Master (hubs) | 1987 Colnago Junior Special, spec 13011: `serie sterzo, mozzi, pedali Master Ofmega`, scan 8 of the [Catalogo generale 1987](https://labibleduvelocataloguescolnago1.blogspot.com/p/colnago-1987.html) | year_from 1988 → 1987 | Same-name match with the Guida '88 hub. |
| 5703 Wrights W3N | Raleigh US Grand Prix DL115, spec 8996: `Wrights W3N` in the Technical Specifications table, p. 7 of the [catalogue excerpt](https://www.sheldonbrown.com/retroraleighs/catalogs/Raleigh-Catalog-1972.pdf) | year_to 1970 → 1972 | The excerpt prints no year; 1972 is Sheldon Brown's filename, supported by the model range. 1970–1970 was a Velobase placeholder. |
| 9772 Selle San Marco Concor Junior | Battaglin Alessandro, spec 12951: `San Marco Concor Junior` on the [specification sheet](https://saarf.london/wp-content/uploads/2014/02/05a1.jpg) | year_from 1983 → 1982 | The sheets print no year; 1982 is the blog title, supported by the 1981–82 price list. |

Validation: guarded SQL changed five rows and the identical rerun none;
readback confirmed the values above. `compare-bike-links.js` over all loaded
catalogues: no gained or changed links and the same 15 recorded Huret Rival
lost proposals. `quality-report.js` shows zero errors and five fewer
linked-date conflicts. To reverse, restore the old values in the table after
checking for later changes and other fitments.

### 1990 Bianchi US batch — applied and validated 2026-11-20

The Retrobike archive PDF behind source 168 returned a bot challenge (HTTP
403) to scripts, and velobase, Bikalog and the Wayback Machine have no copy.
A second copy of the same catalogue was found at
[gringineer.com](https://www.gringineer.com/blogs/default-blog/1990-bianchi-catalog)
(16 page photographs, 1512 × 2016). Its specification table is split across
[img-2506-2](https://cdn.shopify.com/s/files/1/0661/0501/6425/files/img-2506-2.jpg)
(model to crankset) and
[img-2507-2](https://cdn.shopify.com/s/files/1/0661/0501/6425/files/img-2507-2.jpg)
(pedals to weight). All sixteen conflicting fitments were read on it and the
user approved eleven date-only changes; no link, title, description, maker,
category, UUID or source_ref changed.

| Component | Printed fitment (bike, spec) | Old → new |
| --- | --- | --- |
| 3060 Ofmega Competizione (headset) | `Ofmega Competition`: Pista 7116, Campione d'Italia 7177 | year_to 1988 → 1990 |
| 6614 Nitto Dynamic-2 | `Nitto Dynamic 2 90 degree`: Virata 7137, Alfana 7158, Eros 7200, Forza 7221 | year_to 1989 → 1990 |
| 6889 Vittoria Giro del Mondo | `Vittoria Giro del Mondo`: Proto 7070 | year_to 1988 → 1990 |
| 7232 Shimano CN-6208, 600EX | `CN-6208 silver`: Virata 7146 | year_to 1989 → 1990 |
| 7783 SunTour CH-GP00, GPX | `SunTour GPX` chain: Campione d'Italia 7188 | year_to 1989 → 1990 |
| 9202 ITM Mod. 200 | `ITM 200 laser etched`: Campione d'Italia 7179 | year_to 1988 → 1990 |
| 9194 ITM Italia Pista Superleggero | `ITM Pista`: Pista 7117 | year_to 1988 → 1990 |
| 8007 SunTour CW-RA01, Radius | `SR Radius 52/42T Powering`: Eros 7206 | year_from 1992 → 1990 |
| 8032 SunTour CT-X101, X-1 cantilever | `Dia-Compe X-1 Balance Response System`: Osprey 6996 | year_from 1992 → 1990 |
| 8000 SunTour CW-X101, X-1 | `SR X-1 48/38/26T Powering`: Osprey 7000 | year_from 1992 → 1990 |
| 8407 Ritchey Force Directional Seatpost (Mountain) | `Ritchey Force Directional`: Project 7 6923, Grizzly 6944 | year_from 1991 → 1990 |

Limits: 9194 is linked as the only ITM track bar; Bianchi prints no
Superleggero. 8000's description gives the 1992 ring sets (46-36-24T or
48-38-28T), which do not include Bianchi's 26T inner; the description was
left as sourced. The table halves were read from the photographs, the left
half also from full-resolution crops.

Validation: guarded SQL changed eleven rows and the identical rerun none;
readback confirmed the values above. `compare-bike-links.js` over all loaded
catalogues: no gained or changed links and the same 15 recorded Huret Rival
lost proposals. `quality-report.js` shows zero errors and eighteen fewer
linked-date conflicts. To reverse, restore the old values in the table after
checking for later changes and other fitments.

## Branford 1987 component fragment — reconciliation 2026-11-19

**Applied and validated for the user-requested ingestion, source 475.** The complete inventory has **67 listing mentions**: 38 mentions support **36 existing-row updates**, six mentions are already covered, and 23 lack a secure exact variant or maker crosswalk. No new component, brand, group or category association is needed. No retitles, merges, deletions or bike-spec writes were made.

Source: [original 12-page fragment](https://timslife.com/brancat/Catalogs/bb1987.pdf), 3,781,926 bytes, retained at `/tmp/branford-edition-triage-20261119/bb1987.pdf`. The archive filename and handwritten annotations on PDF pages 1 and 3 attribute it to **1987**; no original cover/imprint survives. PDF page 3 independently prints **“New for 1987”** for Dura-Ace aero levers. This supports the attribution but is not an exact issue/printing date. Ignore the 2026 PDF creation date. US retailer availability is the dating evidence; do not interpret it as production start/end or infer discontinued parts from this incomplete fragment.

Source **475**: **Branford Bike component catalogue fragment (attributed 1987)**; country US. Citation: https://timslife.com/brancat/Catalogs/bb1987.pdf ;12 PDF pages; no cover; archive/handwritten1987 attribution, printed New for1987 on aero Dura-Ace levers; US retailer.

All 12 pages were triaged through OCR. Eligible component boxes were visually read on PDF 1–6, 8–10 and 12; pages 7 and 11 were excluded after complete OCR review. The image reading corrected OCR omissions/misreadings: C-Record road crank **638g**, Shimano LOOK **410g/pair**, freewheel stock-combination table on PDF 2, and the Delta/Cobalto distinction on PDF 3. Handwritten blue figures beside prices are annotations, not maker codes or original product specifications.

### Page ledger

| PDF page | Printed folio | Contents / exclusions |
| --- | --- | --- |
| 1 | 13 | Hubs and Regina CX-Track chain inventoried; anonymous track sprockets held. Axles, cones, lockrings, skewers, springs and bearings excluded. |
| 2 | 14 | Freewheels, stock-combination table, spare sprocket offers and AIR RAD caption inventoried. No separate chain listing on this page. |
| 3 | Not legible / handwritten 1987 | Brake sets and separate levers inventoried; pads, hoods, cables/housing excluded. |
| 4 | 20 | Cranksets, BBs and road replacement chainrings inventoried; spare OMAS bearings excluded. |
| 5 | Cropped | Platform, Shimano LOOK and white LOOK pedals inventoried. |
| 6 | 21 | Black LOOK pedal inventoried; adjacent pedal photographs repeat PDF 5. Caps, repair kits and replacement cleats excluded. |
| 7 | Cropped | Crank dust covers, bolts, BB retainers and tools only; excluded. |
| 8 | 22 | Front/rear derailleurs inventoried; cables/housing excluded. |
| 9 | Cropped | Four threaded headsets inventoried. |
| 10 | Cropped | C-Record/Super Record and two American Classic length offers inventoried. |
| 11 | Cropped | Toe clips and straps only; excluded. |
| 12 | Cropped | Friction, retrofriction and SIS/Syncro shifters inventoried; conversion insert is hardware, not another shifter. |

### Freewheel combination table, PDF 2

The original OCR omitted this table. Six-speed Maillard, Regina and Campagnolo stock ranges are 13-14-15-16-17-18, 13-14-15-16-18-20, 13-14-15-17-19-21, 13-15-17-19-21-23 and 13-15-17-20-23-26; Shimano omits only the 13-20 combination. Regina additionally offers 15-16-17-18-19-20. Seven-speed Maillard/Regina/Shimano offer 12-13-14-15-16-17-18, 13-14-15-16-17-18-19, 13-14-15-16-17-18-20 and 13-14-15-16-17-19-21. Campagnolo seven-speed combinations are N/A in the table despite the text offering a call-for-price seven-speed family. Custom 6/7 combinations: Maillard surcharge, Regina no, Shimano surcharge, Campagnolo call. This is stock selection, not a complete maker range.

### Reviewed change set and restoration evidence

All 36 changed rows have source_ref **475**, this fragment as their last modifying source. Titles, UUIDs, search text, images, maker/category/group ownership remain unchanged. No existing start date moves later. Maillard 2125 receives its first supported availability window, **1987–1987**, without claiming a manufacture start/end. Restoration means setting description, years and source_ref to the exact old values below, guarded against the applied after-values and after reviewing any later links. Exact readback and an identical zero-change SQL rerun passed. Temporary SQL, renders, OCR, snapshots, duplicate/comparison reports and helpers were removed after recording the lasting evidence here. The original PDF remains available at the held-source path above. No audit SQL is committed.

| ID / unchanged title | PDF page | Years before → after | Old description | Applied description | Old source_ref | Reason |
| --- | --- | --- | --- | --- | --- | --- |
| 3179 American Classic Classic Hubs | 1 | 1980–1990 → 1980–1990 | Replaceable sealed-bearing alloy QR hubs; front 200g/rear 250g; 12/16/18/24/28/36 holes. Silver anodised or gloss-black epoxy; 135mm MTB version. Pair or individual hubs; black cam-action skewers offered. | Heat-treated alloy QR hubs, replaceable sealed bearings; front200g/rear250g. 1987:24/28/32/36h,silver,factory-slotted pair option. 1990:12/16/18/24/28/36h,silver/black epoxy,135mm MTB; black cam-action skewers offered. | 471 | Same200/250g Classic hub family; adds32-hole and factory-slot options, retaining later options by edition. |
| 3241 Campagnolo 322/101, C-Record | 1 | 1985–1991 → 1985–1991 | Campagnolo 322/101, C-Record, Italy, 595 grams Record brochure (Nov 1987): A300, blind-cap QR. DPC88: A300 (A031/A032), 24/28/32 h. | Low-flange C-Record road QR hubs,322/101/A300(A031/A032),blind dust caps and improved skewer. 24/28/32h; 1987 retailer:6-speed,572g/pair. Legacy595g listing retained separately. | 110 | Photograph identifies low-flange road hubs; preserve differing weights. |
| 8798 Regina Extra 51 CX-Pista | 1 | 1992–1992 → 1987–1992 | Regina Extra 51 CX-Pista, Italy. 1/2 x 1/8 chain (51 series: 12.70mm pitch, 7.75mm rollers), 9.1mm overall, 0.28kg/m, listed in 1992 with the 51 Sport and 53 Turismo. | CX-Pista track chain, nickel-plated and heat-treated. 51 series:1/2x1/8in,12.70mm pitch,7.75mm rollers. 1992 maker:9.1mm overall,0.28kg/m,listed beside51 Sport/53 Turismo. | 190 | Printed CX-Track matches the dedicated CX-Pista track identity, not road CX/CXS1384; earlier attestation. |
| 2125 Maillard 700 Course Super | 2 | NULL–NULL → 1987–1987 | Maillard 700 Course Super, France | 700 Super Course freewheel family,6/7-speed options; lighter smooth-running body,heat-treated interchangeable cogs,two-prong removal. Standard6:13-18/20/21/23/26;7:12-18 or13-19/20/21. France. | 1 | This source explicitly prints700 and Super Course; enrich generic Course Super family, without selecting the5-speed2126 or Plus2127. |
| 2156 Regina Extra America (6 speed) | 2 | 1980–1990 → 1980–1990 | America 6-speed freewheel; matte-silver cogs, splined removal; 375g listed. Syncro compatible; recommended with Regina CX chain. A 15-20T range is listed. | America6-speed freewheel; heat-treated interchangeable cogs,splined removal,matte silver,375g listed. 1987 stock ranges13-18/20/21/23/26 or15-20. Later listing:Syncro-compatible,recommended Regina CX chain. Italy. | 471 | Adds six-speed stock ranges and construction; no Superleggera claim. |
| 2072 Campagnolo aluminum (6 speed) | 2 | 1980–1990 → 1980–1990 | Six-speed alloy freewheel; heat-treated alloy cogs/body, splined sprockets, 12-28T.1990 retailer175g; 156g measured specimen. Recommended with Regina CX/CXS chain. | Six-speed alloy freewheel; heat-treated alloy cogs/body,splined sprockets,12-28T. 1987 stock ranges13-18/20/21/23/26. 1990 retailer175g;156g measured specimen. Recommended Regina CX/CXS chain. | 471 | Six-speed light-alloy identity is clear; retain old measurements and later range. |
| 560 Campagnolo Delta C-Record | 3 | 1986–1993 → 1986–1993 | Campagnolo Delta C-Record, Italy, 480 grams Cat. n. 18 bis (Dec 1986): 0116070/71, set 315/101, not yet available; groups shipped with SR brakes. Record brochure (Nov 1987): subgroup A500D, shipping. DPC88: A500D (A051D/A052D). | Delta brakes:articulated8-arm stainless linkage,Avional alloy shoe levers,conical toe-in washers,lever quick release. 1987 retailer725g complete set;legacy480g listing. Announced Dec1986,shipping Nov1987;315/101,0116070/71,A500D. | 110 | Adds mechanism and qualified complete-set weight; preserves chronology and legacy weight without inventing its unit basis. |
| 561 Campagnolo Cobalto | 3 | 1987–1988 → 1987–1988 | Campagnolo Cobalto, Italy | Cobalto side-pull brakes with blue cobalt gem-capped centrebolt; heat-treated sculpted arms,chromed springs,soft shoes,satin anodised. Supplied with aero levers for normal or concealed routing;607g complete set. | 262 | Blue gem identifies the Cobalto identity even though retailer calls it New Record C. |
| 991 Shimano BR-7400, Dura-Ace | 3 | 1985–1991 → 1985–1991 | Shimano BR-7400, Dura-Ace, Japan. BR-7400-49 short 49 type side-pull, forged alloy arch, double lock nut, eccentric click and quick release, tyre guide, CAD design, 355g front and rear (Jan 1985). 382g measured. | BR-7400-49 short side-pull calipers,forged alloy arches,double locknut,eccentric click/QR,tyre guides,CAD;355g F/R maker,382g measured. 1987 retailer complete set with drilled conventional-routing levers:586g,silver/black. | 72 | Qualifies complete-brakeset mass separately from caliper/maker/measured figures. |
| 886 Modolo Speedy | 3 | 1979–1988 → 1979–1988 | Speedy Stratos side-pull brakes, compact 40-52 or standard 46-58 mm reach; silver, black, red or blue. Calipers R0054/R0055 standard, R0056/R0057 compact. Complete sets include levers and transmissions; measured weight 315 g. | Speedy Stratos side-pulls,compact40-52 or standard46-58mm;silver/black/red/blue. R0054/55 standard,R0056/57 compact. Complete with levers/transmissions;measured specimen315g. 1987 set:drilled levers,anatomical hoods,sintered pads,538g. | 387 | Complete Speedy family identity; retains measured weight without recasting its basis. |
| 435 Shimano BL-7401, Dura-Ace | 3 | 1987–1988 → 1987–1988 | Shimano BL-7401, Dura-Ace, Japan. Aero brake lever with cable under the bar tape, anatomical design, one-step cable attachment, 23.8 or 24.2mm, light alloy anodized, 254g pair (Aug 1986, new; replaces BL-7300). | BL-7401 aero lever,new for1987;under-tape/through-bar routing,anatomical hood,one-step cable attachment;23.8/24.2mm,anodised alloy. Aug1986 maker:254g/pair,replaces BL-7300. 1987 retailer:210g/pair. | 74 | Retain different maker/dealer pair masses rather than overwrite authoritative maker figure. |
| 1507 Campagnolo 4151, Super Record Pista | 4 | 1974–1985 → 1974–1987 | Campagnolo 4151, Super Record Pista, Italy | 4151 Super Record Pista track crankset;165/170mm arms,42-54T ring;570g without bottom bracket. | 1 | Explicitly offered Super Record track set; extends retailer availability beyond the legacy1985 endpoint. |
| 1819 Shimano FC-7400, Dura-Ace | 4 | 1985–1988 → 1985–1988 | Shimano FC-7400, Dura-Ace, Japan. CAD-designed cold-forged double, inner 39-46T, outer 48-54T (46 / 54T from March 1985), 165-175mm, 637g (42-52T, 170mm); BB-7400 (Jan 1985). 648g measured. | CAD cold-forged road double;165-175mm,inner39-46T,outer48-54T(46/54 added Mar1985);BB-7400. 1985 maker:637g(170mm,42-52). 1987 retailer:627g,170/172.5mm,42-52/53. Measured648g. | 72 | Preserves maker specification and independent measured weight while recording retailer mass. |
| 30 Campagnolo 1046/a, Nuovo Record (Strada) | 4 | 1960–1988 → 1960–1988 | Campagnolo 1046/a, Nuovo Record (Strada), Italy, 299 grams (avg) | Nuovo Record Strada cup-and-cone BB;heat-treated steel spindle/cups with precision hardened races;British,French or Italian threads. 315g listed;legacy measured average299g. | 262 | Adds material/thread and dealer mass to the existing road BB; track listing not folded into this row. |
| 11816 Campagnolo C-Record road chainrings | 4 | 1990–1990 → 1987–1990 | Replacement road chainrings for C-Record; 39-54T options. Service list specifically offers39/42/52/53/54T; outer rings also offered with custom hand engraving. | Replacement road chainrings for C-Record; 39-54T options. Service list specifically offers39/42/52/53/54T; outer rings also offered with custom hand engraving. | 471 | Pre-EXA C-Record road replacement-ring family,39-54T; same range, earlier availability. |
| 1244 Campagnolo 753/A, Super Record Road | 4 | 1970–1985 → 1970–1987 | Campagnolo 753/A, Super Record Road, Italy. 144 mm bolt circle, 42-55T; 38.5 grams (Actual) for a 42-tooth inner, 87 grams for an outer. | Super Record Road753/A chainrings,144mm bolt circle,42-55T maker range;1987 replacement offer42-54T. Measured42T inner38.5g,52T outer87g. | 390 | Source-specific Super Record replacement rings; retains maker range and independent measurements. |
| 3693 Campagnolo 305/501, C-Record | 5 | 1985–1991 → 1985–1991 | Campagnolo 305/501, C-Record, Italy Cat. n. 18 bis (Dec 1986): 305/501 corsa and track (group pages misprint 305/101). Record brochure (Nov 1987): A600-L. DPC88: A600-AM (A601-AM/A602-AM). | 305/501 C-Record wide-platform aero pedals,heat-treated steel spindle;alloy toe-clips and leather straps,375g/pair listed. Road/track model,also A600-L/A600-AM(A601-AM/A602-AM);group-page305/101 is a misprint. | 110 | Platform construction and photograph identify305/501, distinct from Ergonomic or TBS quill pedals. |
| 3970 Shimano PD-7400, Dura-Ace | 5 | 1985–1993 → 1985–1993 | Shimano PD-7400, Dura-Ace, Japan. 34 degree road clearance, compound needle and cup-and-cone bearings, nickel Cr-Mo axle, sealed, steel or alloy back plates, 372g pair with L toe clip (Jan 1985). 415g measured. | PD-7400 road platform,34deg clearance,compound needle/cup-and-cone bearings,NiCrMo axle,sealed;steel/alloy backplates. Maker372g/pair with L clip;measured415g. 1987 retailer306g/pair with steel clips/nylon straps offered;weight basis unclear. | 72 | Keep all conflicting figures and accessory-basis qualification. |
| 3971 Shimano PD-7401, Dura-Ace 7400 | 5 | 1988–1996 → 1987–1996 | Clipless step-in road pedal (non-SPD), takes Look or Shimano clipless cleats, nickel chrome-moly spindle, anodized aluminium body, 416g (+92g with cleats); introduced Dec 1987 | Look-compatible Dura-Ace clipless road pedal,capless silver-grey anodised alloy body,NiCrMo spindle;made in France,34deg cornering. 1987 retailer410g/pair;maker416g(+92g cleats). Introduced Dec1987. | 277 | Named Shimano LOOK with matching photograph/construction; calendar1987 is also independently supported by recorded December1987 introduction. |
| 3788 LOOK PP65 | 5 | 1984–1987 → 1984–1987 | LOOK PP65, France, 258 grams (Actual), each pedal. Look-System clipless pedal, white body with black cover; by 1987 "a proven classic", the pedal Bernard Hinault won on in 1985; with the AP 65 shoe. | White-body/black-cover Look-System clipless pedal;adjustable spring retention,twist-heel release,adjustable cleat supplied;518g/pair listed. Measured258g each. Hinault1985 winning pedal;paired AP65 shoe. | 331 | Adds retention/cleat details; preserves measured weight and known shoe association. |
| 3790 LOOK Competition PP75 | 6 | 1987–1987 → 1987–1987 | LOOK Competition PP75, France, 484 grams (Spec), 469 g actual without cleats. Light, aerodynamic top Look-System pedal designed with Bernard Hinault: automatic entry by foot pressure, instant release by twisting the heel; with the AP 76 shoe. | Competition PP75 black Look-System pedal,developed with Hinault;slimmer aerodynamic body than white model,fixed maximum spring tension,pressure entry/twist-heel release;484g/pair listed,469g measured without cleats;AP76 shoe. | 331 | Source gives the exact black Competition mass and distinguishing non-adjustable tension. |
| 4096 Campagnolo 0102050, C-Record (first generation) | 8 | 1985–1987 → 1985–1987 | Campagnolo 0102050, C-Record (first generation), Italy. Winged-hub shield logo on the outer parallelogram plate, no cut-out at the tension pulley, ball-bearing pulleys; replaced by the script-logo A010 for 1988. | First-generation0102050 rear:winged-hub shield outer plate,no tension-pulley cut-out. Third spring at hanger bolt,aero cage/jockey covers,pulleys with12 bearing balls;209g listed. Replaced by script-logo A010 for1988. | 414 | Photograph shows the shield-logo first generation; do not apply the configuration to script-logo4098. |
| 4504 Shimano RD-7401, Dura-Ace (6/7sp) | 8 | 1987–1988 → 1987–1988 | Shimano RD-7401, Dura-Ace (6/7sp), Japan. 6 and 7-speed SIS rear, double Servo-Panta, Centeron pulley, ceramic pulley bushings, sealed, double spoke barrier, 12-26T, 26T capacity, 205g, colour-anodized bracket (Aug 1986, new). 208.5g avg. | RD-7401,6/7-speed SIS;double Servo-Panta,Centeron guide,ceramic pulley bushings,sealed,double spoke barrier;12-26T,26T capacity,colour-anodised bracket. Aug1986 maker205g;measured208.5g avg. 1987 retailer192g. | 74 | Explicit6/7-speed configuration; preserve maker/measured figures, not assigned to six-only4503 or later8-speed4505. |
| 2283 Campagnolo C-Record | 8 | 1985–1991 → 1985–1991 | Campagnolo C-Record, Italy, 103 grams Cat. n. 18 bis (Dec 1986): 0104018 clip-on, 0104019 braze-on. Record brochure (Nov 1987): A100 braze-on, A022 clip-on 28.5 mm, A023 adjustable 28-33 mm. DPC88: A021 braze-on, A022 clip-on. | C-Record front,carbon-nitrided cage,fine adjustment screws,heat-treated NiCr steel double hinge. Clip0104018/A022(28.5mm),braze0104019/A021/A100;A023 adjustable28-33mm. 1987 retailer80g;legacy103g listing. | 110 | Adds cage/linkage detail and dealer mass, retaining coded attachment options. |
| 2510 Shimano FD-7400-B / FD-7400-F, Dura-Ace | 8 | 1985–1989 → 1985–1989 | Shimano FD-7400-B / FD-7400-F, Dura-Ace, Japan. Band / brazed-on front derailleur, 15T, 93g (band), 28.6mm; dished-out inner plate, bridged guide, sealed, Helicoil, 5 degree adjusting bolts (Jan 1985). 94.75g avg measured. | SIS band/braze-on front;15T,28.6mm,dished inner plate,bridged guide,sealed,Helicoil,5deg adjusters. 1985 maker93g band;measured94.75g avg. 1987 retailer97g,polished chrome/grey anodised. | 81 | Same first-generation Dura-Ace front construction; preserve independently stated weights. |
| 2954 Campagnolo 304/104, C-Record | 9 | 1985–1991 → 1985–1991 | Campagnolo 304/104, C-Record, Italy, 152 grams Record brochure (Nov 1987): A0D0, SELFORM membrane. DPC88: A0D0. | 304/104 C-Record(A0D0) threaded headset;hardened steel races pressed into aerodynamic alloy body,SELFORM membrane;British/Italian. 1987 retailer99g;legacy152g listing. | 110 | Construction and model family match; legacy mass is retained as a conflicting listing, not reclassified as measured. |
| 2968 Campagnolo 4041, Super Record | 9 | 1970–1988 → 1970–1988 | Campagnolo 4041, Super Record, Italy, 134.67 grams (avg). Available in French, English and Italian threads. Satin finished aluminium alloy with pressed-in steel races. | 4041 Super Record threaded headset;satin alloy cups with pressed-in precision steel races,solid steel crown/top head-tube races. French/English/Italian threads;135g listed,134.67g measured average. | 294 | Adds race construction and dealer weight without losing independent French threading or measured average. |
| 2971 Campagnolo 404/000, Victory | 9 | 1984–1986 → 1984–1987 | Campagnolo 404/000, Victory, Italy | 404/000 Victory threaded headset,all-steel construction with hardened precision races;British or Italian;175g listed. | 1 | Explicit Victory steel headset attestation extends1986 endpoint to retailer1987 availability. |
| 3099 Shimano HP-7400, Dura-Ace | 9 | 1985–1994 → 1985–1994 | Shimano HP-7400, Dura-Ace, Japan. Road head parts, alloy cup and nut, bearing steel inserts, titanium-plated lower cone, composite-radius race, O-ring sealed, 113g; BC 1 x 24 or French M25 x 1.0 (Jan 1985). 114g measured. | HP-7400 threaded headset;alloy cups/nut,pressed bearing-steel races,titanium-coated lower crown cone,composite-radius race,O-ring seals. BC1x24 or French M25x1.0. Maker113g;measured114g;1987 retailer116g,English/Italian. | 72 | Retain maker sizes/weight and measured value; add qualified dealer116g. |
| 5738 Campagnolo A0R2, C-Record (aero, long) | 10 | 1986–1991 → 1986–1991 | Campagnolo C-Record (Aero type, 210mm), Italy, 230 grams (Actual) Cat. n. 18 bis (Dec 1986): 316/101 180 mm styled, 316/102 130 mm circular. Record brochure (Nov 1987): A0R2/A0R2-S. DPC88: A0R2 (parts page A0R1). | Aerodynamic polished alloy post with tapered elliptical mid-section and single-bolt clamp;A0R2,316/101. 1987:180mm,25.0/27.0/27.2mm,218g. Legacy specimen described as210mm,230g measured. | 110 | 180mm aero offering belongs to the long/styled family, not the130mm short/circular options; preserve legacy specimen dimensions. |
| 5761 Campagnolo 4051/1, Nuovo Super Record | 10 | 1980–1988 → 1980–1988 | Campagnolo 4051/1, Nuovo Super Record, Italy, 224.5 grams (avg). Upper found polished or semi-polished; 26.2 to 27.2 mm. Fluted aluminium alloy, fine satin finish, single bolt adjust, 180 mm long. | 4051/1 Nuovo Super Record fluted alloy single-bolt post,180mm;polished/semi-polished head,fine satin finish. Maker range26.2-27.2mm;1987 retailer25.0/26.4/26.8/27.0/27.2mm,220g. Legacy measured average224.5g. | 294 | Explicit fluted/single-bolt construction; retain differing maker/dealer diameters and measured weight. |
| 11793 American Classic Classic Seatpost (alloy) | 10 | 1988–1990 → 1987–1990 | Heat-treated alloy post, one-bolt micro-adjust cradle; 200mm/168g or reinforced 300mm/290g. Diameters 25.0/26.0/26.6/27.0/27.2/27.4mm; silver anodised or gloss-black epoxy finish. | Heat-treated alloy,micro-adjust head;silver/gloss-black epoxy. 1987:200mm150g(25/26.4/26.8/27/27.2mm),280mm180g(25/27/27.2mm). 1990:200mm168g or reinforced300mm290g;25/26/26.6/27/27.2/27.4mm. | 472 | Same Classic alloy family; keep early280mm separate from later300mm option and weights by edition. |
| 5970 Campagnolo 0271 / 0272 / 0273, C-Record Doppler (retro-friction) | 12 | 1987–1991 → 1987–1991 | Campagnolo 0271 / 0272 / 0273, C-Record Doppler (retro-friction), Italy. Record brochure (Nov 1987): Doppler 0271 braze-on, 0272 clip-on, 0273 top-of-tube. DPC88: A271/A272/A273 Doppler. Guida '88: top-tube clamp-on. | Doppler retrofriction C-Record levers,0271 braze-on/0272 clip-on/0273 top-tube(A271/A272/A273);internal springs/bearings. 1987 retailer braze-on70g. Distinct from plain friction0281-0283. | 110 | Explicit retrofriction mechanism selects Doppler rather than plain friction5969. |
| 6164 Shimano SL-7400 (BCAI / FCAI / FCBI), Dura-Ace SIS (6sp) | 12 | 1985–1991 → 1985–1991 | Shimano SL-7400 (BCAI / FCAI / FCBI), Dura-Ace SIS (6sp), Japan. SIS index lever with one-touch SIS / friction switch, 72g (BCAI band A), FCAI brazed A, FCBI brazed B; C = Italian 5mm bolt (Jan 1985). 62g measured. | 6-speed downtube SIS/friction lever,one-touch selector;BCAI band A,FCAI braze A,FCBI braze B(C:Italian5mm bolt). 1985 maker72g band;measured62g. 1987 retailer52g,attachment/weight basis unqualified. | 82 | Six-speed identity matches; do not overwrite attachment-specific maker or measured weights with dealer52g. |
| 6165 Shimano SL-7401 (FAI / BCAI / FCAI / FCBI), Dura-Ace SIS (7sp) | 12 | 1987–1992 → 1987–1992 | Shimano SL-7401 (FAI / BCAI / FCAI / FCBI), Dura-Ace SIS (7sp), Japan. 7-speed SIS / friction down-tube lever, sealed, non-loosening, 65g (FCAI), 28.6mm; FAI brazed A M4.5, BCAI band A, FCAI / FCBI Italian brazed A / B (Aug 1986, new). | 7-speed downtube SIS/friction lever,sealed,non-loosening;28.6mm. FAI braze A M4.5,BCAI band A,FCAI/FCBI Italian braze A/B. Aug1986 maker65g FCAI;1987 retailer52g,attachment/weight basis unqualified. | 83 | Seven-speed identity matches; preserve mount-specific weights/options. |
| 5973 Campagnolo 0211 / 0212 / 0213, C-Record Syncro | 12 | 1987–1988 → 1987–1988 | Campagnolo 0211 / 0212 / 0213, C-Record Syncro, Italy, 65 grams. Record brochure (Nov 1987): Syncro 0211/0212/0213, 6-7 speed. DPC88: A221/A222/A223 Syncro, 6 or 7 sp insert. | Original Syncro indexed downtube levers,0211/0212/0213(A221/A222/A223);6/7-speed inserts;stainless/brass internals,secondary selector lever. 1987 retailer98g;legacy65g listing. | 110 | First Syncro with secondary selector and conversion insert; do not assign to Syncro II5971. |

### Identity decisions and limits

- **Maillard 2125:** this fragment now prints **700 Super Course**, superseding the earlier 1990-only limitation that “Super Course” lacked a printed 700 identifier. Course Super/Super Course word order is treated as the same named model family, offered here in six/seven speeds. Enrich the existing uncoded family, without claiming a specific specimen-speed identification. Keep **2126 five-speed** and **2127 Plus** distinct; neither a five-speed variant nor Plus is identified by this source. Existing Peugeot Super Plus links 14702/15663 remain on 2127. No free-standing unnamed sprocket rows are inserted.
- **Regina:** CX-Track is dedicated track-chain identity **8798 Extra 51 CX-Pista**, distinct from road CX/CX-S 1384. The earlier nickel/heat-treatment facts enrich 8798; its 1992 maker dimensions stay qualified by that edition. Six-speed America 2156 gains construction/stock ranges. Seven-speed America remains held against **2157/2158**: no material/SL identifier resolves the speculative Superleggera title or later S generation. Campagnolo seven-speed is held against **2073/2075** because no normal/compact width is given; six-speed alloy 2072 is secure. Shimano MF-7400-6/7 **2221/2222** already carry the relevant Uniglide construction, speed and ranges; unchanged.
- **Hubs:** American Classic **3179** has exactly the 200/250g sealed-bearing family; add factory-slot and 32-hole offers rather than create another hub row. The C-Record road photograph shows low flanges, so **3241** gains the six-speed 572g pair listing while retaining its legacy 595g. Generic Record road **3259/3260** is already covered; do not assign the common 523g to the separate high-flange row. Track offers lack flange identifiers: **3242/3243** and **3270/3271** remain unassigned. Anonymous steel track cogs have no maker. AIR RAD has only a caption, no version/specifications, so no fabricated complete-wheel identity.
- **Brakes/levers:** blue cobalt gem positively identifies **561 Cobalto**. **560 Delta** is the existing production family, not prototype 562; keep 725g complete-set mass separate from the unqualified legacy 480g and retain December 1986 announcement/November 1987 shipping evidence. Source assertions about eight linkage arms are retailer construction text. Super Record reach/generation is insufficient for **583/7005**. Modolo Equipe’s uncoded hard-anodised/aero offer does not securely select **872/873 KX90**; no arbitrary extension. Speedy **886** is an existing aggregate family, enriched with its 538g complete-set offer and retained 315g measured specimen. Its La Vie Claire edition **887** remains distinct. C-Record aero levers lack Power Grade identification (**212/214**); Aero Gran Compe lacks **AGC250/AGC251 (279/278)** code, so neither family is guessed. Dura-Ace **435 BL-7401**, explicitly new for 1987, retains maker/dealer masses separately.
- **Cranks/BBs/rings:** the 1987 C-Record road transition **1482/1483**, track **1484/1485**, and Super Record road arm/logo variants **1509/1510/1512** are held; generic names and the small photograph do not justify selecting a specimen generation. The explicitly named Super Record track family **1507** gains 1987 availability and 165/170mm, 42–54T, 570g. Dura-Ace **1819 FC-7400** matches the pre-low-profile double and retains 637g maker/648g measured alongside 627g retailer. C-Record road/track BB **7014/23** and generic Campy track BB **40/41/42** lack the axle/variant discriminator. Road Nuovo Record **30** gains construction/315g while retaining its 299g measured average; Dura-Ace BB **132** already has 314g/threadings. OMAS is held against **96/98/10724**: serviceable steel-axle 295g does not identify a coded Big Sliding variant or establish identity with the bare 224g measured specimen. Pre-EXA C-Record rings **11816** gain 1987; Super Record 144mm **1244** extends to 1987 and keeps actual ring weights. Dura-Ace ring family **1290** already covers this narrower offer.
- **Pedals:** the photograph/platform construction selects **3693 C-Record 305/501**, not Ergonomic/TBS quill variants. **3970 PD-7400** retains maker/measured masses and a separately qualified retailer 306g whose accessory basis is unclear. **3971 PD-7401** is the silver-grey capless Shimano LOOK pictured here; moving its availability start from 1988 to 1987 is also consistent with its independently recorded December 1987 introduction. The exact `shimano dura ace clipless` generator override moves **1988 → 1987**, retaining the 1993 end. Generic Dura-Ace platform selections are unchanged. White **3788 PP65** and black fixed-tension **3790 PP75** are distinct; measured masses and known shoe associations remain intact.
- **Derailleurs:** the rear photograph shows the **shield-logo first C-Record generation 4096**, not script-logo 4098. Super Record **4151/4152** and Nuovo Record **4126/4127** remain held because no rivet/spring discriminator is shown. Explicit 6/7-speed Dura-Ace selects **4504 RD-7401**, not six-only 4503 or later eight-speed 4505. C-Record front **2283** and Dura-Ace **2510** gain construction and separately qualified retailer masses. Super Record clamp/braze **2313/7012** already carry the relevant construction/attachment family; unchanged.
- **Headsets/posts:** Victory **2971** gains 1987 availability; C-Record **2954**, Super Record **2968** and Dura-Ace **3099** preserve distinct maker/legacy/retailer masses. Aero long C-Record **5738** records its offered 180mm and retains the legacy 210mm/230g specimen, rather than silently rewriting the specimen or assigning the short/cylindrical post. Fluted single-bolt Super Record **5761** keeps maker/dealer diameter ranges and measured average. American Classic **11793** gains 1987; its early 200/280mm, 150/180g offers are retained separately from later 200/300mm, 168/290g. The manufacturer’s personal names do not establish an alias to the separately branded Kingsbury posts.
- **Shifters:** explicitly retrofriction C-Record selects **5970 Doppler**, not plain-friction 5969. Original **5973 Syncro** is distinguished from Syncro II 5971 by its secondary selector and conversion insert. Generic Super Record friction options remain held against **5993/6000/6001**; 38g alone does not prove a mechanism/code. Six/seven-speed Dura-Ace **6164/6165** retain mounting-specific maker/measured masses; the retailer’s unqualified 52g is not treated as a new measurement or applied to a particular attachment.

### Source inventory and disposition

Each row has the edition hint **1987 (archive-attributed)**. These are listing mentions, not a count of distinct inserted rows. Repeated length/speed offers can enrich one model-family row.

#### Bottom Brackets

| Mention / PDF page | Printed identity | Description | Disposition / DB IDs |
| --- | --- | --- | --- |
| 34 / 4 | Campagnolo New Record C | Heat-treated CrMo track-style spindle, hardened alloy cups/pressed steel races; for road/track C Record; British/Italian,225g. | held; 23, 7014 |
| 35 / 4 | Campagnolo Nuovo Record road | Heat-treated steel spindle and cups, hardened precision races; British/French/Italian,315g. | update; 30 |
| 36 / 4 | Campagnolo Track | Track BB offer without code/material or dimensions; not assumed identical to Nuovo/Super/C Record. | held; 40, 41, 42 |
| 37 / 4 | Shimano Dura-Ace | Separate BB for adjacent crank listing,314g. | unchanged; 132 |
| 38 / 4 | OMAS sealed-bearing steel spindle | Serviceable/repackable replaceable sealed bearings; hardened steel spindle, heat-treated alloy cups adjustable for centring; Campagnolo/Dura-Ace/SunTour, normal/track; British/Italian,295g. | held; 96, 98, 10724 |

#### Brake Levers

| Mention / PDF page | Printed identity | Description | Disposition / DB IDs |
| --- | --- | --- | --- |
| 26 / 3 | Campagnolo New Record C Aero | Normal/under-tape/through-bar routing; wider aero lever,235g/pair. Power Grade or generation not specified. | held; 212, 214 |
| 27 / 3 | Dia-Compe Aero Gran Compe | Hard-anodised lever, nylon pivot washers, steel pin, cast-alloy housing; black or gum hoods; concealed routing. No model code. | held; 278, 279 |
| 28 / 3 | Shimano Dura-Ace Aero | Printed New for1987; under-tape or through-bar cables;210g/pair. | update; 435 |

#### Brakes

| Mention / PDF page | Printed identity | Description | Disposition / DB IDs |
| --- | --- | --- | --- |
| 20 / 3 | Campagnolo Record C Delta | Eight stainless linkage arms, heat-treated Avional aluminium-magnesium shoe levers; conical toe-in washers, quick release on levers and internally ribbed anatomical hoods;725g complete brakeset. | update; 560 |
| 21 / 3 | Campagnolo New Record C (blue centre gem) | Heat-treated sculpted side-pull arms, chromed springs, soft shoes, satin anodised; blue cobalt gem-capped centrebolt; conventional or concealed cable levers;607g complete set. | update; 561 |
| 22 / 3 | Campagnolo Super Record | Heat-treated arms, cam-action QR, drilled levers with conventional routing;605g complete set; reach/version unprinted. | held; 583, 7005 |
| 23 / 3 | Shimano Dura-Ace | Heat-treated arms, CrMo centrebolt, ball-bearing pivots, cam QR; silver/black; drilled conventional-routing levers;586g complete set. | update; 991 |
| 24 / 3 | Modolo Equipe with Aero routing | Hard-anodised black calipers and levers, short reach only;555g complete set. | held; 872, 873 |
| 25 / 3 | Modolo Speedy | Drilled levers, anatomical hoods, sintered pads;538g complete set. | update; 886 |

#### Chainrings

| Mention / PDF page | Printed identity | Description | Disposition / DB IDs |
| --- | --- | --- | --- |
| 39 / 4 | Campagnolo New Record C road spare rings | 39–54T replacement chainrings. | update; 11816 |
| 40 / 4 | Campagnolo Super Record road spare rings | 42–54T replacement chainrings. | update; 1244 |
| 41 / 4 | Shimano Dura-Ace spare rings | 42–53T replacement chainrings. | unchanged; 1290 |

#### Chains

| Mention / PDF page | Printed identity | Description | Disposition / DB IDs |
| --- | --- | --- | --- |
| 6 / 1 | Regina CX-Track | Track chain, heat-treated and nickel plated; no width/code printed. | update; 8798 |

#### Cranksets

| Mention / PDF page | Printed identity | Description | Disposition / DB IDs |
| --- | --- | --- | --- |
| 29 / 4 | Campagnolo New Record C road | Elliptical arms, wider swept spider, hardened alloy rings, hand-polished/satin anodised;170/172.5/175mm,42 with52/53 rings,638g without BB. | held; 1482, 1483 |
| 30 / 4 | Campagnolo New Record C Track | Elliptical arms, dished spider, hardened alloy rings, satin anodised;165/170mm,40–54T,605g without BB. | held; 1484, 1485 |
| 31 / 4 | Campagnolo Super Record road | 165/167.5/170/172.5/175/180mm,42 with52/53 rings,591g without BB; arm/logo variant unspecified. | held; 1509, 1510, 1512 |
| 32 / 4 | Campagnolo Super Record Track | 165/170mm,42–54T,570g without BB. | update; 1507 |
| 33 / 4 | Shimano Dura-Ace | Heat-treated arms/rings,170/172.5mm,42 with52/53 rings,627g; British/Italian BB. | update; 1819 |

#### Freewheels

| Mention / PDF page | Printed identity | Description | Disposition / DB IDs |
| --- | --- | --- | --- |
| 9 / 2 | Maillard 700 Super Course 6-speed | Newly designed lighter/smoother body, heat-treated interchangeable cogs, two-prong removal; France. Shop codes MA-76/MA-77 are not maker numbers. | update; 2125 |
| 10 / 2 | Regina America 6-speed | Stronger body, smoother races, heat-treated interchangeable cogs, splined removal; Italy. Shop codes RE-A6/RE-A7. | update; 2156 |
| 11 / 2 | Campagnolo Super Record 6-speed | Heat-treated light-alloy body and cogs. 6-speed listed normally;7-speed call for price, individual table combinations N/A. | update; 2072 |
| 12 / 2 | Shimano Dura-Ace 6-speed | SIS-compatible, twisted Uniglide tooth form, semi-sealed body; Dura-Ace chain recommended. | unchanged; 2221 |
| 13 / 2 | Maillard 700 Super Course 7-speed | Newly designed lighter/smoother body, heat-treated interchangeable cogs, two-prong removal; France. Shop codes MA-76/MA-77 are not maker numbers. | update; 2125 |
| 14 / 2 | Regina America 7-speed | Stronger body, smoother races, heat-treated interchangeable cogs, splined removal; Italy. Shop codes RE-A6/RE-A7. | held; 2157, 2158 |
| 15 / 2 | Campagnolo Super Record 7-speed | Heat-treated light-alloy body and cogs. 6-speed listed normally;7-speed call for price, individual table combinations N/A. | held; 2073, 2075 |
| 16 / 2 | Shimano Dura-Ace 7-speed | SIS-compatible, twisted Uniglide tooth form, semi-sealed body; Dura-Ace chain recommended. | unchanged; 2222 |

#### Front Derailleurs

| Mention / PDF page | Printed identity | Description | Disposition / DB IDs |
| --- | --- | --- | --- |
| 51 / 8 | Campagnolo C Record front | Carbon-nitrided cage, fine adjustment screws, heat-treated NiCr steel double hinge;80g; clamp/braze-on. | update; 2283 |
| 52 / 8 | Campagnolo Super Record front | 90g; clamp/braze-on. | unchanged; 2313, 7012 |
| 53 / 8 | Shimano Dura-Ace front | Polished chrome and grey anodised,97g; clamp/braze-on. | update; 2510 |

#### Headsets

| Mention / PDF page | Printed identity | Description | Disposition / DB IDs |
| --- | --- | --- | --- |
| 54 / 9 | Campagnolo New Record C | Pressed-in hardened steel races in aerodynamic alloy body; British/Italian,99g. | update; 2954 |
| 55 / 9 | Campagnolo Super Record | Satin alloy cups with pressed-in steel races; solid steel crown/top head-tube races; British/Italian,135g. | update; 2968 |
| 56 / 9 | Campagnolo Victory | All-steel construction/hardened precision races; British/Italian,175g. | update; 2971 |
| 57 / 9 | Shimano Dura-Ace | Alloy cups, pressed steel races, titanium-coated crown race, plastic seals; British/Italian,116g. | update; 3099 |

#### Hubs

| Mention / PDF page | Printed identity | Description | Disposition / DB IDs |
| --- | --- | --- | --- |
| 1 / 1 | American Classic road hubs | Heat-treated alloy, thick flanges, replaceable sealed ball bearings; front200g/rear250g; 24/28/32/36 holes, silver, QR; factory-slotted pair and individual hubs offered. | update; 3179 |
| 2 / 1 | Campagnolo New Record C road hubs | Improved dust covers and skewer, aerodynamic finish; 24/28/32 holes,6-speed,572g/pair; photograph shows low flange. | update; 3241 |
| 3 / 1 | Campagnolo Record road hubs | Small or high flange; user-replaceable bearings/cones/races,28/32/36 holes,523g/pair generic listing; individual front/rear also sold. | unchanged; 3259, 3260 |
| 4 / 1 | Campagnolo New Record C Track hubs | 24/28/32 holes,584g/pair; flange type not specified. | held; 3242, 3243 |
| 5 / 1 | Campagnolo Record Track hubs | 28/32/36 holes; flange type not specified. | held; 3270, 3271 |

#### Pedals

| Mention / PDF page | Printed identity | Description | Disposition / DB IDs |
| --- | --- | --- | --- |
| 42 / 5 | Campagnolo New Record C platform | Wide aero platform, steel spindle, alloy clips and leather straps;375g/pair. | update; 3693 |
| 43 / 5 | Shimano Dura-Ace platform | Steel clips and nylon straps;306g/pair; accessories weight basis unqualified. | update; 3970 |
| 44 / 5 | Shimano LOOK | Silver-grey, France; streamlined black-Look-derived design, capless,34deg cornering;410g/pair. | update; 3971 |
| 45 / 5 | LOOK toeclipless white | White body, black cover; twist release, adjustable spring tension, cleats included;518g/pair. | update; 3788 |
| 46 / 6 | LOOK Competition black | Black version,484g/pair, about1oz lighter than white; aerodynamic body; highest fixed spring tension, non-adjustable. | update; 3790 |

#### Rear Derailleurs

| Mention / PDF page | Printed identity | Description | Disposition / DB IDs |
| --- | --- | --- | --- |
| 47 / 8 | Campagnolo C Record rear | Third spring around hanger screw, aero cage and jockey covers, pulley bearings with12 balls;209g; shield-logo photograph. | update; 4096 |
| 48 / 8 | Campagnolo Super Record rear | Replaceable brass bushings, chromed manganese springs and titanium bolts;182g; exact spring/rivet version unprinted. | held; 4151, 4152 |
| 49 / 8 | Campagnolo Nuovo Record rear | Like Super Record without titanium bolts;199g; exact spring/rivet version unprinted. | held; 4126, 4127 |
| 50 / 8 | Shimano Dura-Ace rear | SIS,6/7-speed;192g; code unprinted. | update; 4504 |

#### Seat Posts

| Mention / PDF page | Printed identity | Description | Disposition / DB IDs |
| --- | --- | --- | --- |
| 58 / 10 | Campagnolo New Record C aero | Polished tapered elliptical post, one-bolt clamp;180mm,25.0/27.0/27.2mm,218g. | update; 5738 |
| 59 / 10 | Campagnolo Super Record fluted | Polished round fluted single-bolt post;180mm,25.0/26.4/26.8/27.0/27.2mm,220g. | update; 5761 |
| 60 / 10 | American Classic standard | Heat-treated aluminium alloy, micro-adjust top, silver or gloss-black epoxy;200mm,150g;25.0/26.4/26.8/27.0/27.2mm. | update; 11793 |
| 61 / 10 | American Classic extra-long | Same alloy/micro-adjust family;280mm,180g;25.0/27.0/27.2mm; silver/black. | update; 11793 |

#### Shifters

| Mention / PDF page | Printed identity | Description | Disposition / DB IDs |
| --- | --- | --- | --- |
| 62 / 12 | Campagnolo New Record C retrofriction | Internal springs/bearings, braze-on,70g; no maker code. | update; 5970 |
| 63 / 12 | Campagnolo Super Record braze-on | Friction shifter,38g; no maker code or retrofriction mechanism specified. | held; 5993, 6000, 6001 |
| 64 / 12 | Campagnolo Super Record clamp-on | Friction shifter,38g generic listing; no maker code. | held; 5993, 6001 |
| 65 / 12 | Shimano Dura-Ace SIS6 | SIS/friction,6-speed;52g generic listing; no code. | update; 6164 |
| 66 / 12 | Shimano Dura-Ace SIS7 | SIS/friction,7-speed;52g generic listing; no code. | update; 6165 |
| 67 / 12 | Campagnolo Record C Syncro | Stainless/brass internal parts, secondary selector lever,6-speed with7-speed conversion insert;98g, maker code not printed. | update; 5973 |

#### Single Sprockets

| Mention / PDF page | Printed identity | Description | Disposition / DB IDs |
| --- | --- | --- | --- |
| 7 / 1 | Unattributed track cogs, 1/8in | Heat-treated steel track cogs,12–20 teeth; maker unprinted. | held; no secure identity |
| 8 / 1 | Unattributed track cogs, 3/32in | Heat-treated steel track cogs,13–21 teeth, for road chain; maker unprinted. | held; no secure identity |
| 17 / 2 | Maillard 700 Super Course spare cogs | Interchangeable cogs separately offered; no maker code or individual teeth specified in the spare-cog line. | held; no secure identity |
| 18 / 2 | Campagnolo Super Record spare freewheel cogs | Alloy cogs separately offered; no individual tooth or maker-code crosswalk. | held; no secure identity |

#### Wheel(sets)

| Mention / PDF page | Printed identity | Description | Disposition / DB IDs |
| --- | --- | --- | --- |
| 19 / 2 | AIR RAD disc wheel | Photograph caption only; no specification, front/rear or configuration printed. | held; no secure identity |

### Baseline and validation

Before load: **11,151 components**, **23,380 live specs**. All 108 loaded local catalogue CSVs compare with the live database: 23,365 unchanged proposals and 15 pre-existing lost proposals, no gained/changed proposals or missing/ambiguous identities. There are **202 existing bike-spec links on the 36 affected component rows**. Validation passed: exactly 36 component updates and one source insert; identical SQL rerun affected zero rows in every table. Exact before/after field readback passed for every update, with all other component fields and rows unchanged. Source country/citation, maker/category/group references and description lengths passed; maximum changed description length is 242 characters. Normal, near and parenthetical duplicate-classifier pair sets and classifications are identical before/after. Reviewed pairs retained: production/prototype Delta 560/562; Speedy/La Vie Claire 886/887; six/seven-speed Campagnolo 2072/2073; Maillard generic/five-speed 2125/2126; Regina six/seven-speed 2156/2157. All 202 existing links on affected components are unchanged, and all 23,380 live bike specs are byte-for-byte identical. The complete generator/live report over all 108 loaded local catalogues is identical, including the same 15 pre-existing lost proposals; no new gained/lost/changed mapping, missing identity or ambiguity. No new date conflict or dangling reference. The exact clipless range edit introduces no current mapping change; generic Dura-Ace values retain their platform mapping. Existing `test/quality-link-decisions.test.js` passed. A scoped scan of unlinked specs found no newly supportable fitment: e.g. bare Maillard 700 Course24882 does not identify Super Course, while Peugeot Super Plus14702/15663 stays on2127. No ambiguous shifter, crank or hub is forced into a later/earlier generation.

## Branford 1994/95 component inventory — visually reviewed 2026-11-19

**Applied and validated after the user’s “apply” instruction.** Source **474**, Kingsbury **766**; **17 additions12071–12087**, **23 existing-row updates**, three category/brand registrations. No bike-spec or matcher changes, merges or deletions. The listing below was the preceding inventory stage; its live comparison and validated results are now recorded here.

Source: [Branford Bike Vol.18 Issue2, 1994–1995](https://timslife.com/brancat/Catalogs/bb18-2_1994.pdf), 48 pages, 50,075,372 bytes, retained original `/tmp/branford-edition-triage-20261119/bb18-2_1994.pdf`. Cover visually verifies 1994–1995 and ordering through 31 December 1995. Every inventory row below has **edition year 1994/95**, an availability window, not an asserted manufacturing start/end. Printed folios agree with PDF numbers on inspected component pages. Titles preserve printed identities; shop stock codes are not promoted to maker model codes. A slash of weights is recorded as a list where the source is not explicit about correspondence.

### Page ledger and exclusions

All 48 pages were triaged from their searchable layer/index. Visually read cover and component boxes on pp.20–22,24–27,44,46; visually checked p.45 to exclude its storage rims and tyre-care products. Page23 was reviewed through its complete OCR: bearings, axles/cones/skewers, brake pads/hoods and other replacement hardware, with no eligible complete component.

| Pages | Scope |
| --- | --- |
| 1 | Cover/date verified. |
| 2–15 | Clothing, socks, glasses, personal/safety accessories; excluded. |
| 16–19 | Merlin/Colnago/Iron Horse/Ritchey frames and bicycle history; no bikes or frame/fork ingestion in this job. |
| 20 | Complete-group offers and group-level technical context, recorded below without fabricating maker model codes. |
| 21 | Main complete-component matrix, wheels and chains; inventoried. |
| 22 | Eight chainring listings inventoried; cables/housing/crimps, crank hardware/covers, stack spacers and catalogue adverts excluded. |
| 23 | Replacement hardware, bearings, axles, skewers, pads, hoods; excluded. |
| 24 | Ritchey stems/handlebars inventoried; Logic Expert and WCS bar ends excluded. |
| 25 | Profile bars/stem inventoried; XC Sierra/Vario bar ends and SwiftShift shifter relocation mount excluded (not a complete shifter). |
| 26 | Ritchey headsets/posts/brakes/levers inventoried; skewers and Logic pads excluded. |
| 27 | Onza rings, Top Line cranks, Grip Shift shifters, Syncros/Kingsbury posts inventoried; Steve's Cool skewers excluded. |
| 28–43 | Trainers, lights, cleaners/lubricants, decals/bottles/tape, computers/HR monitors, books/gifts and tools; excluded. |
| 44 | Road tubular/clincher tyres inventoried; tubes, rim tape, sealants excluded. |
| 45 | Tyre-care/tubes/strips/glue/patches/gauge and storage rims; excluded, no riding rim listing. |
| 46 | Hybrid/MTB tyres inventoried. |
| 47–48 | Order form and index/contact material; excluded. |

### Group-level evidence, p.20

Campagnolo offers Record and Chorus in Ergo Power/dual-pivot or conventional-lever/dual-pivot 8-speed configurations, and Athena in Ergo Power or conventional-lever 8-speed configurations. Included categories: derailleurs, brake/shift levers, calipers, hubs, cassette, crankset, chain, BB and headset. “New Since '94” explicitly lists EXA-Drive across groups, Record carbon-composite Ergo shells, Record/Chorus dual pivot and all 8-speed; this is retailer phrasing, not a reason to overwrite maker-established introduction dates.

Shimano offers Dura-Ace, 600 Ultegra, 105SC and RX100 in STI/dual-pivot or conventional-lever/dual-pivot 8-speed configurations. Its “New Since '94” list names sealed-cartridge Dura-Ace/Ultegra headsets, 8-speed Hyperglide and Super SLR. No individual model codes are supplied.

Ritchey Logic Mountain mixes Logic with Shimano DX 7-speed. Comp and Pro Mountain mix Comp/Logic with Shimano XT 8-speed/Grip Shift and Ritchey clipless pedals. WCS Mountain mixes WCS with XT 8-speed/Grip Shift or XT Top Mount and Ritchey clipless pedals. These are assemblage offers, not proof that each uncoded pictured part belongs to a particular existing generation.

### Reconciliation and application — 2026-11-19

**Applied and validated** following the user’s “apply” instruction. The live comparison produced **17 additions, 23 updates, Kingsbury registration and three category/brand registrations**; no deletes, merges, existing retitles, group/ownership edits, CSV or matcher changes. All new rows have the edition availability window **1994–1995**. No start date is moved later. Source label: **Branford Bike catalogue Vol.18 Issue2 (1994/95)**, US; citation: https://timslife.com/brancat/Catalogs/bb18-2_1994.pdf ; cover:1994-1995, Vol.18 Issue2; orders through1995-12-31; 48 PDF pages; components20-27,44,46.

Updates retain stable IDs, UUIDs, maker/category/group, title, search text and image. Restoring an update requires setting its exact old description/years/source_ref below, guarded against its applied values and after reviewing any later links. New rows can be identified by their load UUIDs below; remove downstream references before any future restoration deletion. Exact readback and a zero-change rerun passed. Temporary SQL, snapshots, comparison reports and helpers were removed after recording this evidence; no audit SQL is committed.

#### New identities

| Page | Maker / category | Title | Description | Load UUID |
| --- | --- | --- | --- | --- |
| 27 | Kingsbury / Seat Posts | **12071** Kingsbury Aluminium Seatpost | Aluminium post with dual Allen-bolt clamp, 230g average. 220mm: 25.0/26.4/26.6/26.8/27.0/27.2/27.4mm; 330mm: 26.6/26.8/27.0/27.2mm. | 72acf75a-de44-4a48-a6ff-c621b326e5ef |
| 27 | Kingsbury / Seat Posts | **12072** Kingsbury Titanium Seatpost | Titanium post with dual Allen-bolt clamp, 200g average; 27.2mm diameter, 225 or 350mm length. | 94b8ab60-c8a7-4f36-a09b-8fc21d9aadfe |
| 27 | Topline / Cranksets | **12073** Topline ATB Super-Light | Machined/drilled aluminium ATB crank arms, 350g/pair, 180lb rider limit; 9/16in pedals; silver/black/blue. Bolt patterns: Shimano 94/58 or 110/74, Micro Drive 94/56, HyperDrive 94/58, TNT 110/56mm as printed. | c2a46c5b-05a4-4a11-a552-8bb4623ca578 |
| 27 | Topline / Cranksets | **12074** Topline ATB Heavy Duty | Machined/drilled aluminium ATB crank arms, 420g/pair; 9/16in pedals; silver/black/blue. Bolt patterns: Shimano 94/58 or 110/74, Micro Drive 94/56, HyperDrive 94/58, TNT 110/56mm as printed. | b13978cf-350f-4045-af8a-a5bc191a36e8 |
| 27 | Onza / Chainrings | **12075** Onza Buzz Saw | Precision-machined stainless-steel chainrings; 74 or 110mm bolt patterns, 24/26/34/36 teeth; made in USA. | 9ac182a2-ff4c-45e9-8e6c-13dbfd53f14a |
| 25 | Profile Design / Handlebars | **12076** Profile Design Aero II XL | Clip-on aero bar, 440g; width 4-8in, length 9.3-13.6in; sizing bridges and reversible pad brackets. 6061-T1 tubing, T6 brackets/extensions; black/gunmetal blue; SwiftShift compatible; made in USA. | 68f7138d-18da-47e2-8ac4-fe6bd774d396 |
| 25 | Profile Design / Handlebars | **12077** Profile Design AirWave | One-piece aero handlebar, 625g; armrest width 5.5/6.5/7.5in, adjustable length 2.7-10.6in; SwiftShift compatible; made in USA. | 9c90c378-660b-481b-b251-c5bd402bab5c |
| 25 | Profile Design / Handlebars | **12078** Profile Design Hammer | 6061-T4 aluminium drop bar, bulged 26.0mm centre, two grip shims; 40/42cm shallow or 42/44cm deep, centre-to-centre; gunmetal blue, laser-etched graphics; 312g; made in USA. | 94611b2c-729c-4d03-90ac-6000dd24a7e4 |
| 25 | Profile Design / Stems | **12079** Profile Design Pursuit | TIG-welded double-butted chromoly road quill stem; recessed expansion bolt, aerated clamp, titanium finish; 26.0mm clamp, -10deg; 90-140mm in 10mm steps, 195g average. | d369a55a-e4bc-4737-9fb3-11af119c0179 |
| 24 | Ritchey / Stems | **12080** Ritchey WCS ATB Stem | Heat-treated butted chromoly quill stem, WCS anodised finish; 120/130/140/150mm, +10deg, 25.4mm bar clamp; nominal 1in or 1-1/8in sizes; 140g listed average. | 7eb091be-2f52-419f-81db-f72d55123504 |
| 24 | Ritchey / Stems | **12081** Ritchey ForceLite Threadless ATB Stem | Threadless stem, satin finish; 120/130/140/150mm, reversible +/-4deg; 1in or 1-1/8in steerer, 25.4mm bar clamp; 180g average. | 4559bb0d-c573-4764-ab81-6bedd27912b5 |
| 46 | Ritchey / Tyres | **12082** Ritchey WCS Z-Max Severe Condition | Front/rear MTB tyre with deeper tread for severe conditions; folding Kevlar bead, blackwall; 26x2.1, 560g. | 26e52efb-f8d3-4402-bbd2-ea9263c5f868 |
| 46 | Ritchey / Tyres | **12083** Ritchey Mad-Max | Front/rear MTB tyre; steel bead, blackwall; 26x2.1, 660g. | 6f833fa2-b748-4dc2-8442-44cee4f1873b |
| 46 | Ritchey / Tyres | **12084** Ritchey Climb-Max | Rear MTB tyre designed for climbing; steel bead, blackwall; 26x2.1, 650g. | b9d2a9cf-603d-43d3-9404-dc6226a96c06 |
| 22 | Campagnolo / Chainrings | **12085** Campagnolo Record EXA-Drive outer road chainrings | EXA-Drive outer road chainrings for the 8-speed Record group, 52 or 53 teeth. Separately listed from Chorus/Athena outer rings and shared 39/42T inner rings. | 087fe451-94ca-4a6f-9e13-f11759459017 |
| 22 | Campagnolo / Chainrings | **12086** Campagnolo Chorus / Athena EXA-Drive outer road chainrings | Outer road chainrings for the 8-speed Chorus and Athena groups, 52/53/54 teeth. EXA-Drive group context; separately listed from Record outer rings and shared 39/42T inner rings. | 887f1c87-9e17-4e13-bf91-83e7d036f3ee |
| 22 | Shimano / Chainrings | **12087** Shimano 600 Ultegra road chainrings | Replacement road chainrings for the 8-speed 600 Ultegra group; 39/40/42T inner and 52/53T outer rings. Distinct from earlier 600EX chainrings. | 8e28280d-a190-4958-9e7b-68105dd2e5bf |

#### Existing rows: complete before/after values

| ID / unchanged title | Page | Years before → after | Old description | Applied description | Old source_ref | Reason |
| --- | --- | --- | --- | --- | --- | --- |
| 12026 Ritchey WCS ATB Brake Levers | 26 | 1995–1996 → 1994–1996 | Cold-forged 6061-T6 three-finger ATB brake levers; WCS anodised finish, supplied with cables and housing; 180g per pair. | Cold-forged 6061-T6 three-finger ATB brake levers; WCS anodised finish, supplied with cables and housing; 180g per pair. | 473 | Same named model and distinguishing specifications; earlier retailer attestation. |
| 12029 Ritchey WCS Cantilevers | 26 | 1995–1996 → 1994–1996 | Cold-forged 6061-T6 cantilevers, brass bushings, dual spring-tension adjustment and Logic pads; front and rear offered, WCS anodised finish; 150g/pr as listed. | Cold-forged 6061-T6 cantilevers, brass bushings, dual spring-tension adjustment and Logic pads; front and rear offered, WCS anodised finish; 150g/pr as listed. | 473 | Same named model and distinguishing specifications; earlier retailer attestation. |
| 12043 Ritchey WCS ATB Seatpost | 26 | 1995–1996 → 1994–1996 | Directional quad-butted post, titanium fixing bolt, forged clamp and cradle, hard WCS anodising; 330mm, 26.4/26.6/26.8/27.0/27.2mm, 225g. | Directional quad-butted post, titanium fixing bolt, forged clamp and cradle, hard WCS anodising; 330mm, 26.4/26.6/26.8/27.0/27.2mm, 225g. | 473 | Same named model and distinguishing specifications; earlier retailer attestation. |
| 12047 Ritchey CompLite ATB Handlebar | 24 | 1995–1996 → 1994–1996 | Drawn 2014-T6 aluminium flat ATB bar; 4-degree bend, 560mm, silver, 150g. | Drawn 2014-T6 aluminium flat ATB bar; 4-degree bend, 560mm, silver, 150g. | 473 | Same named model and distinguishing specifications; earlier retailer attestation. |
| 10404 Ritchey Pro WCS | 26 | 1995–1999 → 1994–1999 | Threaded 7075 alloy headset, needle and inverted upper bearings; WCS Ti-anodised finish, 37mm stack, 1in 82g or 1-1/8in 92g. Later listing describes ball cages and rollers. | Threaded 7075 alloy headset, needle and inverted upper bearings; WCS Ti-anodised finish, 37mm stack, 1in 82g or 1-1/8in 92g. Later listing describes ball cages and rollers. | 473 | Same named model and distinguishing specifications; earlier retailer attestation. |
| 12064 Continental Competition Pro 1 | 46 | 1995–1996 → 1994–1996 | 26x2.125 MTB tyre; folding bead 650g or steel bead 700g. Dedicated Competition Pro 1 off-road model; separate from Competition road tubular. | 26x2.125 MTB tyre; folding bead 650g or steel bead 700g. Dedicated Competition Pro 1 off-road model; separate from Competition road tubular. | 473 | Same named model and distinguishing specifications; earlier retailer attestation. |
| 12065 Continental Competition Pro 2 | 46 | 1995–1996 → 1994–1996 | 26x2.125 MTB tyre; folding bead 600g or steel bead 650g. Dedicated Competition Pro 2 off-road model; separate from Competition road tubular. | 26x2.125 MTB tyre; folding bead 600g or steel bead 650g. Dedicated Competition Pro 2 off-road model; separate from Competition road tubular. | 473 | Same named model and distinguishing specifications; earlier retailer attestation. |
| 12067 Continental Cross Country Pro | 46 | 1995–1996 → 1994–1996 | 26x1.9 MTB tyre; folding bead 530g or steel bead 580g. | 26x1.9 MTB tyre; folding bead 530g or steel bead 580g. | 473 | Same named model and distinguishing specifications; earlier retailer attestation. |
| 11257 Ritchey AlphaBite Trailmix | 46 | 1995–2000 → 1994–2000 | 700x35/40 hybrid on/off-road tyre, connected centre tread, Trail Mix compound; steel bead, non-folding, Comp440/470g. | 700x35/40 hybrid on/off-road tyre, connected centre tread, Trail Mix compound; steel bead, non-folding, Comp440/470g. | 473 | Same named model and distinguishing specifications; earlier retailer attestation. |
| 10414 Continental Giro | 44 | 1995–1999 → 1994–1999 | Road/training tubular, two-ply cotton casing, 160tpi, rubber compound and ribbed tread; 22x28in, 300g, max120psi. | Road/training tubular, two-ply cotton casing, 160tpi, rubber compound and ribbed tread; 22x28in, 300g, max120psi. | 473 | Same named model and distinguishing specifications; earlier retailer attestation. |
| 10639 Ritchey Pro WCS seat post | 26 | 1995–1996 → 1994–1996 | 2014-T6 alloy Force Directional seatpost, strategically thinned walls, hard WCS anodising; 230mm, 26.6/26.8/27.0/27.2mm; 195g. | 2014-T6 Force Directional alloy road post, hard WCS anodising, 230mm, 195g. 1994/95: quad-butted, titanium fixing bolt, forged clamp/cradle, 26.4-27.2mm. 1995/96: 26.6/26.8/27.0/27.2mm. | 473 | Same WCS road post; adds clamp/bolt construction and earlier diameter range. |
| 10697 Ritchey Pro WCS Road | 24 | 1996–1996 → 1994–1996 | Heat-treated CrMo steel road stem, WCS colour, 90-140 mm extension, 22.2 mm quill, 80 degree, 230 g. | Heat-treated butted chromoly road quill stem, WCS anodised; 90-140mm in 10mm steps, 0 or -10deg, 22.2mm quill and 26.0mm bar clamp; 230g average. | 357 | Matching material, dimensions, weight and finish; adds 0deg option. |
| 10401 Ritchey Expert | 26 | 1995–1999 → 1994–1999 | Threaded steel headset, 1/8in upper and 3/16in lower balls, 33mm stack; silver. 1995/96 Logic Expert: 1in 130g, 1-1/8 and 1-1/4in 140g as printed. Later Expert listing: 1in, 130g. | Threaded steel Logic Expert headset, 1/8in upper and 3/16in lower balls, 33mm stack. 1994/95: black satin, steel locknut; 1/1-1/8/1-1/4in, 130/140/150g. 1995/96: silver, 130/140/140g as printed. Later Expert: 1in, 130g. | 473 | Preserve differing edition finishes and oversize weights. |
| 10713 Profile Design Breeze | 25 | 1996–1996 → 1994–1996 | Aluminium alloy clip-on aero bar with armrests adjustable in width from 10 to 25 cm, 425 g. | Alloy clip-on aero bar. 1994/95: 6061-T6, width 8-9in, fixed length 10.25in, black, 482g, made in USA. 1996 maker listing: armrests adjustable 10-25cm, 425g. | 357 | Same named clip-on family; retain edition-specific weights and adjustment dimensions. |
| 10714 Profile Design Airstryke | 25 | 1996–1996 → 1994–1996 | 6061-T6 aluminium alloy clip-on aero bar, armrest width adjustable 10-25 cm, extensions adjustable up to 60 mm, anatomic padded armrests, black or silver, 490 g. | 6061-T6 alloy clip-on aero bar, 490g; black/silver. Spring-loaded pop-up armrests pivot +/-15deg; SwiftShift compatible. 1994/95: width 5-8in, length 10.3-12.6in. 1996: width 10-25cm, extension adjustment 60mm; padded armrests. | 357 | Same material, mechanism and weight; preserve edition geometry. |
| 8399 Ritchey Force Comp (Mountain) | 24 | 1989–1992 → 1989–1995 | Butted "supertubing" chromoly, second heat treatment; exceeds JIS by 300%. Won the 1989 NORBA Worlds, 1990-91 Worlds medals. 120-160mm (170 in 1991) at 10 deg, 130 at 20, 120/140 at 30 (1992); 22.2 or 25.4 OS quill; satin chrome; 290g (150mm). | Butted twice-heat-treated CrMo,satin chrome,290g(150mm); JIS+300%,1989 NORBA/1990-91 Worlds.1991/92:120-160mm(170 in1991),10deg;130mm20deg;120/140mm30deg(1992);22.2/25.4mm quill.1994/95 ForceLite:120-150mm10deg or130mm20deg. | 150 | Page intro explicitly calls this Force Comp while listing heading says ForceLite; same construction, 290g and geometry. |
| 12066 Continental Leader Pro | 46 | 1995–1996 → 1994–1996 | 26x2 MTB tyre; folding bead 530g or steel bead 580g. | 26x2 MTB tyre for controlled high-speed cornering. 1994/95: folding 480g or steel bead 530g. 1995/96: folding 530g or steel bead 580g. | 473 | Retain different edition masses rather than overwrite the later listing. |
| 8382 Ritchey MegaBite Z-Max | 46 | 1991–1993 → 1991–1995 | MegaBite tread, Vector Force Analysis; new for 1991 as 26x2.1 640g / Kevlar 590g (60 tpi) and WCS Kevlar 26x2.1 530g, 26x2.35 600g (127 tpi). 1992: 26x2.1 660g, 26x2.35 700g, WCS 26x1.9 485g, 24x2.0 600g, 20x2.0 460g, 20x1.75 400g. | VFA MegaBite Z-Max, new1991. 1991 2.1:640/K590g(60tpi);WCS2.1/2.35:530/600g(127tpi). 1992 steel2.1/2.35:660/700g; WCS1.9:485g,24x2:600g,20x2:460g,20x1.75:400g. 1994/95 26in WCS1.7/1.9/2.1:410/475/550g; steel2.1/2.35:600/690g. | 150 | Same main Z-Max tread, distinct from separately offered Severe Condition, Mad-Max and Climb-Max. |
| 6788 Continental Super Sport | 44 | 1980–1996 → 1980–1996 | Steel-bead road clincher, three-ply polyamide. 1990 Super Sport 20/25: 330g, max120psi. 1995/96: 700x20/23/25, 275/285/295g listed, max110psi. Earlier size-unspecified specimen measured215.8g. | Steel-bead road clincher, 3-ply polyamide. 1990 Super Sport20/25:330g,120psi. 1994/95:700x20/23/25,275/285/295g,130psi; 1995/96 same sizes/weights,110psi. Earlier size-unspecified specimen measured215.8g. | 473 | Retain different edition pressure ratings and measured weight. |
| 6837 Michelin Hi-Lite Supercomp H.D. | 44 | 1988–1993 → 1988–1995 | Folding clincher, Kevlar bead, 700x20c only, 215g, 125 psi, 518/630 tpi; twice the sidewall cords and three times the cords under the tread of its nearest rival. | Folding Kevlar-bead clincher. 1988/93:700x20,215g,125psi,518/630tpi; twice sidewall and three times under-tread cords of nearest rival. 1994/95:18/20/23mm,2480 threads/dm,205/215/225g listed,110psi. | 422 | Same Supercomp H.D. family with edition-qualified size/pressure differences. |
| 6835 Michelin Hi-Lite Comp | 44 | 1980–1996 → 1980–1996 | Clincher, 650x20, 700x20 and 700x23; nylon casing with reinforcing plies; slick tread; high mileage, for touring; 200-225 g. | Road clincher. 1994/95:folding Hi-Lite Comp,700x20/23,1160 threads/dm,205/235g listed,110psi. 1996 maker:650x20,700x20/23,reinforced nylon casing,slick tread,200-225g; high-mileage touring. | 357 | Adds dealer configuration while retaining later maker construction. |
| 1290 Shimano Dura-Ace 7400 | 22 | 1985–1998 → 1985–1998 | Dura-Ace7400 road chainrings; replacement round rings offered 39/42/52/53/54T; general ordering range 39-54T. Distinct from older Dura-Ace and later7700/track rings. | Dura-Ace7400 road chainrings; replacement round rings39/42/52/53/54T; general39-54T range. 1994/95 also offers55/56T and SGX53A/53B. Distinct from older Dura-Ace, later7700 and track rings. | 471 | Adds supported tooth counts/SGX options within the existing 7400 road-ring family. |
| 8389 Ritchey Road Force | 44 | 1991–1996 → 1991–1996 | Vector Force Analysis road tyre, parabolic grooves. Clincher 700x20/24/28, wire 66tpi or Kevlar 127tpi. 1991 wire/Kevlar: 210/170,220/190,260/220g; 1992: 220/180,230/200,270/220g. 1995/96 max130psi. Tubular 700x21 250g cotton/latex,120psi. | VFA road tyre, parabolic grooves;700x20/24/28,wire66tpi/Kevlar127tpi. 1991 wire/K:210/170,220/190,260/220g;1992:220/180,230/200,270/220g. 1994/95 20/24:wire220/235g105psi,K180/200g115psi;1995/96 max130psi. Tubular700x21,cotton/latex250g120psi. | 473 | Adds 1994/95 tyre pressure and width-qualified weights without discarding existing data. |

#### Identity decisions and unchanged/held listings

- **Profile Aero II XL** is kept apart from 11802 Aero II: earlier Aero II has discrete 7/8/9in widths, 411g and fixed-type armcups; the XL has sizing bridges, 4–8in adjustment, adjustable 9.3–13.6in length and reversible pad brackets. The explicitly described XL configuration is inserted, without extending the earlier model. Hammer, AirWave and Pursuit have no maker/category/model alias or numbered equivalent in the live snapshot. Pursuit is CrMo with titanium finish.
- **Topline** reuses maker261. Road2006 is unchanged at 345g; the independently offered Super-Light/Heavy Duty ATB arms are distinct at 350g/420g, with the Super-Light180lb limit. They are separate source-described models, not duplicates of Road2006. Printed Micro Drive/TNT bolt-pattern figures are retained as printed, not normalised to an assumed standard.
- **Kingsbury** has no existing maker/model alias or matching post. Aluminium and titanium are independently offered and retain their distinct diameters/lengths and 230g/200g average masses. **Onza Buzz Saw** is a new category for existing Onza764, with stainless construction/74-or-110mm pattern; neither current pedal row is related.
- **Ritchey ForceLite ATB** enriches8399 Force Comp Mountain: the page introduction explicitly calls it Force Comp; construction, finish, 290g and geometry agree. Preserve the earlier title and the ForceLite alias in its description. **ForceLite Road** remains unassigned against8401 Force Comp Road/8402 FD Road/10154 CompLite Road: same geometry alone does not resolve the name/weight lineage. WCS Road10697 matches material, geometry and230g. WCS ATB and ForceLite Threadless have no corresponding early stem; they remain distinct from later removable-faceplate2000 stems11290–11292. The source’s140g WCS ATB mass is retained as a listed figure.
- **2026-11-20 manufacturer review supersedes the ForceLite synonym decision above (applied, source485):** the1994-attributed maker catalogue p4 lists Force Comp290g and ForceLite270g separately, both at140mm. Removed the unsafe8399 ForceLite alias, preserved retailer-introduction Force Comp availability through1995, and inserted distinct270g ForceLite12155 only for qualified1994. Corrected12080 to manufacturer250g at140mm, retaining the retailer140g claim in this history. User-approved batch applied and validated: two new rows and28 updates, clean rerun, no mapping/duplicate regressions. See [Ritchey applied evidence and full old/new values](ritchey.md#component-catalogue-attributed-1994--applied-and-validated-2026-11-20-source-485).
- **Ritchey headsets:** Logic Comp8417 unchanged; Pro WCS10404 has matching needle/inverted bearings,37mm stack and82/92g; Expert10401 is the expressly tier-labelled Expert, while old Logic3078 retains its original identity. Expert finish and oversized weights differ by edition; keep black130/140/150g versus later silver130/140/140g. Do not merge on shared geometry.
- **Ritchey bars/posts/brakes:** ProLite8404 and WCS8403 already cover the date/spec; unchanged. CompLite12047, WCS ATB levers12026, WCS cantilevers12029 and WCS ATB post12043 gain1994 attestation. Road WCS10639 adds the quad-butting/titanium bolt/clamp details. Logic brakes8415/levers8416 already cover the edition; their historical weights remain intact.
- **Ritchey tyres:** normal WCS/steel Z-Max mentions update8382; Severe Condition is a separately offered deeper tread and is kept separate. Mad-Max/Climb-Max are separately offered front/rear versus climbing-rear models and differ from the later narrow MudMax11258. **Moab Bite** is not assigned to12063 Moby Bite: the earlier slickrock/commuter name/620g versus later name/650g lacks a crosswalk. Tom Slick8390 and Cross-Bite8391 already cover these sizes/beads/weights; no redundant updates. Alfa-Bite maps to11257 AlphaBite Trailmix by model,compound,sizes,steel bead and440/470g.
- **Tyres:** Continental GP6782 already carries sizes/construction/masses; the source’s duplicated18/20/20 width remains in the inventory and does not alter the independent existing18/20/23 range. Sprinter2506787 unchanged. Competition GP26/GP/240 are held against10415; the prior road-tubular crosswalk limitation remains. Giro10414 and MTB Pro1/Pro2/CrossCountry12064/12065/12067 gain1994 attestation. Leader Pro12066 retains both editions’ different weights. Super Sport6788 retains both pressure ratings and215.8g measured. Hi-Lite Comp6835 and Supercomp HD6837 preserve their maker/earlier facts while gaining the dealer-specific dimensions/pressure. **Hi-Lite Road II** remains unassigned to9498 Hi-Lite Road without an exact version crosswalk. Avocet FasGrip is held against6719/6720/6722/6723: prose says Time Trial but the table omits the code, and the model-specific widths/casing identity is not settled.
- **Chains/cassettes:** Shimano HG-90 8-speed is existing7671 (not7-speed1202), unchanged; Ultegra HG-91 is7665, unchanged. Dura-Ace cassette1208 already covers this family. Sedis SL/Campagnolo Contax has no secure exact chain identity; Sedis ATB remains held against1397/11701/12056/12057 because the uncoded label alone does not choose a generation. Shimano Dura-Ace/XTR HG is likewise not used to choose a coded chain by group name alone.
- **Chainrings:** Dura-Ace listings expand existing7400-family1290 with55/56T and53A/53B SGX; do not create repeated rows for individual tooth options. 600 Ultegra has a distinct8-speed road family, not earlier600EX1285. Campagnolo EXA-Drive group context onp.20 and separate Record versus Chorus/Athena outer offers onp.22 establish two outer-ring families distinct from1990 pre-EXA11816–11818 and2000/2001 coded9/10-speed rings11179 onward. The shared39/42T inner listing remains held because it does not distinguish the earlier C-Record ring family from the later shared family; do not insert another generic inner.
- **Wheels:** Campagnolo Vento front/rear are already6963’s documented earlier20-spoke version, unchanged. Bora front/rear are covered by6954, unchanged. Shamal’s combined clincher/tubular790/1040g figures are not assigned separately to6961/6962; retain the maker-specific variants. Spinergy Rev-X front/rear/clincher/tubular mentions remain held against11952–11957; no source-proven version crosswalk or separately qualified axle weights.
- **Grip Shift:** all five road/ATB compatibility options remain unassigned to11800 Pro or later SRAM records: shop order codes are not maker model codes. No new generically named shifter rows.
- **Other p.21 group-only matrix entries** (cranks,BBs,headsets,hubs,derailleurs,downtube/STI/Ergo levers and brakes) provide group-level availability but no additional model code,reach,cage,axle length or version evidence. Existing coded families were checked by maker/category/group and dates. No generic placeholders are inserted, and no exact dated variant is extended merely because its group is named. ISO threaded headset wording is not propagated across all generations. The105SC headset3086 already covers its standard-bearing construction; the cartridge Ultegra3088/Dura-Ace3100 are already date-compatible. Shimano8-speed Dura-Ace bar-end6146 already covers the configuration; unchanged. Campagnolo Chorus BB26 and Athena BB7048 are already compatible with the standard-bearing offers.

#### Baseline and validation

Before load:11134 components,23380 live specs. Generator/live comparison across every loaded local catalogue:23365 unchanged,15 pre-existing lost proposals, no gained/changed proposals,missing identities or ambiguity. Existing affected duplicate-report pair8399/8401 is road/mountain configuration, retained. Applied and validated: exactly17 inserts and23 updates, source474, maker766, and associations766/18(Kingsbury/Seat Posts),764/5(Onza/Chainrings),94/22(Profile Design/Stems). Identical SQL rerun affected zero rows in every table. Exact field readback passed for every planned new/updated row; all other existing components are byte-for-byte unchanged. All descriptions fit255 characters (largest changed/new description243). Stable titles/search text/images and maker/category/group/UUID fields on existing rows are unchanged; affected references are valid.

All23380 live specs are identical before/after, and the complete generator/live report over **108 loaded catalogues** is identical, including the same15 pre-existing lost proposals. Nine existing specs on affected rows remain unchanged:1453,1606,14758,15719,17138,25176,6912,6933,19537. No new date flag or dangling link was introduced. No supported new links were found; the remaining maker-only Ritchey seatpost19545 cannot be identified from these later WCS variants. Full normal/near/parenthetical duplicate classification over the live snapshots introduced no new or changed candidate pair. Manual comparisons retain the source-distinct Topline ATB models, Kingsbury material versions and Profile XL configuration; existing8399/8401 remains a mountain/road configuration pair. No destructive reconciliation was needed.

### Complete component listings by category

#### Bottom Brackets

| Page | Printed identity / inventory title | Description | Edition year |
| --- | --- | --- | --- |
| 21 | Campagnolo Record | Cartridge; Italian or British threading; no maker code printed. | 1994/95 |
| 21 | Campagnolo Chorus | Standard; Italian or British threading; no maker code printed. | 1994/95 |
| 21 | Campagnolo Athena | Standard; Italian or British threading; no maker code printed. | 1994/95 |
| 21 | Shimano Dura-Ace | Cartridge; Italian or British threading; no maker code printed. | 1994/95 |
| 21 | Shimano 600 Ultegra | Cartridge; Italian or British threading; no maker code printed. | 1994/95 |
| 21 | Shimano 105SC/RX100 (SLP) | Cartridge; Italian or British threading; no maker code printed. | 1994/95 |

#### Brake Levers

| Page | Printed identity / inventory title | Description | Edition year |
| --- | --- | --- | --- |
| 26 | Ritchey WCS | Cold-forged 6061-T6, three-finger contoured wedge profile with index-finger harbour; 180g/pair; cables and black housing; WCS anodised. | 1994/95 |
| 26 | Ritchey Logic | Cold-forged 6061-T6, three-finger contoured wedge profile with index-finger harbour; 180g/pair; cables and black housing; black/silver. | 1994/95 |

#### Brakes

| Page | Printed identity / inventory title | Description | Edition year |
| --- | --- | --- | --- |
| 21 | Campagnolo Record Extra | Caliper pair without levers; dual pivot. | 1994/95 |
| 21 | Campagnolo Chorus | Caliper pair without levers; dual pivot. | 1994/95 |
| 21 | Campagnolo Athena | Caliper pair without levers; pivot type unstated. | 1994/95 |
| 21 | Shimano Dura-Ace Dual Pivot | Sold in complete STI brakeset; no caliper maker code printed. | 1994/95 |
| 21 | Shimano 600 Ultegra Dual Pivot | Sold in complete STI brakeset; no caliper maker code printed. | 1994/95 |
| 21 | Shimano 105SC Dual Pivot | Sold in complete STI brakeset; no caliper maker code printed. | 1994/95 |
| 21 | Shimano RX100 Dual Pivot | Sold in complete STI brakeset; no caliper maker code printed. | 1994/95 |
| 26 | Ritchey WCS Cantilevers | Cold-forged 6061-T6, 150g/pair; Logic pads. Brass-bushed pivots, dual 2mm Allen spring adjustment, WCS anodised. | 1994/95 |
| 26 | Ritchey Logic Cantilevers | Cold-forged 6061-T6, 150g/pair; Logic pads. Single 2mm Allen adjustment, black/silver. | 1994/95 |

#### Cassettes

| Page | Printed identity / inventory title | Description | Edition year |
| --- | --- | --- | --- |
| 21 | Campagnolo Steel EXA | 8-speed; 12–21/12–23/13–21/13–23/13–26. | 1994/95 |
| 21 | Shimano Dura-Ace | 8-speed; 12–21/12–23/13–23/12–25/13–26. | 1994/95 |
| 21 | Shimano HG-90, 600 Ultegra | 8-speed; 12–21/12–23/13–23/12–25/13–26. | 1994/95 |
| 21 | Shimano 105SC/RX100 | 8-speed; 11–21 super compact. | 1994/95 |

#### Chainrings

| Page | Printed identity / inventory title | Description | Edition year |
| --- | --- | --- | --- |
| 22 | Campagnolo Record EXA-Drive | 52/53 teeth; retailer order code is not a maker part number. | 1994/95 |
| 22 | Campagnolo All Groups | 39/42 teeth; retailer order code is not a maker part number. | 1994/95 |
| 22 | Campagnolo Chorus/Athena | 52/53/54 teeth; retailer order code is not a maker part number. | 1994/95 |
| 22 | Shimano Dura-Ace | 39/42 teeth; retailer order code is not a maker part number. | 1994/95 |
| 22 | Shimano Dura-Ace | 52/53/54/55/56 teeth; retailer order code is not a maker part number. | 1994/95 |
| 22 | Shimano Dura-Ace SGX | 53A/53B; retailer order code is not a maker part number. | 1994/95 |
| 22 | Shimano 600 Ultegra | 39/40/42 teeth; retailer order code is not a maker part number. | 1994/95 |
| 22 | Shimano 600 Ultegra | 52/53 teeth; retailer order code is not a maker part number. | 1994/95 |
| 27 | Onza Buzz Saw | Precision-machined stainless steel; 74 or 110mm bolt pattern, 24/26/34/36 teeth; USA. | 1994/95 |

#### Chains

| Page | Printed identity / inventory title | Description | Edition year |
| --- | --- | --- | --- |
| 21 | Shimano Dura-Ace/XTR HG | Separate chain listing; no further specification printed. | 1994/95 |
| 21 | Shimano Ultegra HG-91 | Separate chain listing; no further specification printed. | 1994/95 |
| 21 | Sedis SL/Campagnolo Contax | Separate chain listing; no further specification printed. | 1994/95 |
| 21 | Sedis ATB | Separate chain listing; no further specification printed. | 1994/95 |

#### Cranksets

| Page | Printed identity / inventory title | Description | Edition year |
| --- | --- | --- | --- |
| 21 | Campagnolo Record | Arms and chainrings; 172.5/175/180mm; offered combinations 39/52,39/53,42/52,42/53. | 1994/95 |
| 21 | Campagnolo Chorus | Arms and chainrings; 170/172.5/175mm; offered combinations 39/52,39/53,42/52,42/53. | 1994/95 |
| 21 | Campagnolo Athena | Arms and chainrings; 170/172.5mm; offered combinations 39/52,39/53,42/52,42/53. | 1994/95 |
| 21 | Shimano Dura-Ace | Arms and chainrings; 172.5/175/180mm; offered combinations 39/53,42/52,42/53. | 1994/95 |
| 21 | Shimano 600 Ultegra | Arms and chainrings; 172.5/175mm; offered combinations 39/53,42/52,42/53. | 1994/95 |
| 21 | Shimano 105SC | Arms and chainrings; 172.5/175mm; offered combinations 39/53,42/52,42/53. | 1994/95 |
| 21 | Shimano RX100 | Arms and chainrings; 170/175mm; offered combinations 39/53,42/52,42/53. | 1994/95 |
| 27 | Top Line Road | Machined/drilled aluminium arms; 345g/pair, Campagnolo- or Shimano-compatible chainring patterns; 9/16in pedals; polished silver. | 1994/95 |
| 27 | Top Line ATB Super-Light | Machined/drilled aluminium arms; 350g/pair; 180lb rider limit; 9/16in pedals; silver/black/blue. ATB bolt patterns printed: Shimano 94–58 or 110–74, Micro Drive 94–56, HyperDrive 94–58, TNT 110–56mm; preserve as printed pending identity checks. | 1994/95 |
| 27 | Top Line ATB Heavy Duty | Machined/drilled aluminium arms; 420g/pair; 9/16in pedals; silver/black/blue. ATB bolt patterns printed: Shimano 94–58 or 110–74, Micro Drive 94–56, HyperDrive 94–58, TNT 110–56mm; preserve as printed pending identity checks. | 1994/95 |

#### Front Derailleurs

| Page | Printed identity / inventory title | Description | Edition year |
| --- | --- | --- | --- |
| 21 | Campagnolo Record | Clamp or braze-on; no maker code printed. | 1994/95 |
| 21 | Campagnolo Chorus/Athena | Clamp or braze-on; no maker code printed. | 1994/95 |
| 21 | Shimano Dura-Ace | Clamp or braze-on; no maker code printed. | 1994/95 |
| 21 | Shimano 600 Ultegra | Clamp or braze-on; no maker code printed. | 1994/95 |
| 21 | Shimano 105SC | Clamp or braze-on; no maker code printed. | 1994/95 |
| 21 | Shimano RX100 | Clamp or braze-on; no maker code printed. | 1994/95 |

#### Handlebars

| Page | Printed identity / inventory title | Description | Edition year |
| --- | --- | --- | --- |
| 24 | Ritchey CompLite | Seamless 2014-T6 alloy, 4deg, 560mm, silver, 150g. | 1994/95 |
| 24 | Ritchey ProLite | Butted Easton EA70, 4deg, 560mm, black/silver, 140g. | 1994/95 |
| 24 | Ritchey ProLite WCS | Butted Easton EA70, 4deg, 560mm, hard platinum WCS anodised, 123g. | 1994/95 |
| 25 | Profile Breeze | 6061-T6, 482g; width 8–9in; fixed length 10.25in; black; clip-on. Made in USA. | 1994/95 |
| 25 | Profile Aero II XL | 440g; width 4–8in; length 9.3–13.6in; sizing bridges; reversible pad brackets; 6061-T1 tubing, T6 brackets/extensions; black/gunmetal blue; SwiftShift compatible. Made in USA. | 1994/95 |
| 25 | Profile AirStryke | 490g; 6061-T6; width 5–8in, length 10.3–12.6in; spring-loaded pop-up armrests pivot +/-15deg; black/silver; SwiftShift compatible. Made in USA. | 1994/95 |
| 25 | Profile AirWave | One-piece aero bar, 625g; width 5.5/6.5/7.5in, length 2.7–10.6in; SwiftShift compatible. Made in USA. | 1994/95 |
| 25 | Profile Hammer | 6061-T4, 312g; bulged 26.0mm centre, two grip shims; 40/42cm shallow or 42/44cm deep, centre-to-centre; gunmetal blue, laser graphics. Made in USA. | 1994/95 |

#### Headsets

| Page | Printed identity / inventory title | Description | Edition year |
| --- | --- | --- | --- |
| 21 | Campagnolo Record | ISO threaded; standard bearing; no maker code printed. | 1994/95 |
| 21 | Campagnolo Chorus | ISO threaded; standard bearing; no maker code printed. | 1994/95 |
| 21 | Campagnolo Athena | ISO threaded; standard bearing; no maker code printed. | 1994/95 |
| 21 | Shimano Dura-Ace | ISO threaded; cartridge bearings; no maker code printed. | 1994/95 |
| 21 | Shimano 600 Ultegra | ISO threaded; cartridge bearings; no maker code printed. | 1994/95 |
| 21 | Shimano 105SC | ISO threaded; standard bearing; no maker code printed. | 1994/95 |
| 26 | Ritchey Pro WCS | CNC 7075 cups, needle bearings, inverted top bearing; 37mm stack; 1in/1-1/8in, 82/92g; rubber seals, WCS anodised. | 1994/95 |
| 26 | Ritchey Logic Comp | Sealed; 3/16in lower and 1/8in top bearings; 33mm stack; duralumin locknut, black satin; 1in, 110g. | 1994/95 |
| 26 | Ritchey Logic Expert | 3/16in lower and 1/8in top bearings; 33mm stack; steel locknut, black satin; 1in/1-1/8in/1-1/4in, 130/140/150g. | 1994/95 |

#### Hubs

| Page | Printed identity / inventory title | Description | Edition year |
| --- | --- | --- | --- |
| 21 | Campagnolo Record | Hub pair; 8-speed rear cassette, 28/32/36 holes. | 1994/95 |
| 21 | Campagnolo Chorus | Hub pair; 8-speed rear cassette, 28/32/36 holes. | 1994/95 |
| 21 | Campagnolo Athena | Hub pair; 8-speed rear cassette, 28/32/36 holes. | 1994/95 |
| 21 | Shimano Dura-Ace | Hub pair; 8-speed rear cassette, 28/32/36 holes. | 1994/95 |
| 21 | Shimano 600 Ultegra | Hub pair; 8-speed rear cassette, 28/32/36 holes. | 1994/95 |
| 21 | Shimano 105SC | Hub pair; 8-speed rear cassette, 28/32/36 holes. | 1994/95 |
| 21 | Shimano RX100 | Hub pair; 8-speed rear cassette, 28/32/36 holes. Super-compact option. | 1994/95 |

#### Rear Derailleurs

| Page | Printed identity / inventory title | Description | Edition year |
| --- | --- | --- | --- |
| 21 | Campagnolo Record | Listed under 7/8-speed; no cage, capacity or maker code printed. | 1994/95 |
| 21 | Campagnolo Chorus | Listed under 7/8-speed; no cage, capacity or maker code printed. | 1994/95 |
| 21 | Campagnolo Athena | Listed under 7/8-speed; no cage, capacity or maker code printed. | 1994/95 |
| 21 | Shimano Dura-Ace | Listed under 7/8-speed; no cage, capacity or maker code printed. | 1994/95 |
| 21 | Shimano 600 Ultegra | Listed under 7/8-speed; no cage, capacity or maker code printed. | 1994/95 |
| 21 | Shimano 105SC | Listed under 7/8-speed; no cage, capacity or maker code printed. | 1994/95 |
| 21 | Shimano RX100 | Listed under 7/8-speed; no cage, capacity or maker code printed. | 1994/95 |

#### Seat Posts

| Page | Printed identity / inventory title | Description | Edition year |
| --- | --- | --- | --- |
| 26 | Ritchey Pro WCS Road | Directional quad-butted, titanium fixing bolt, forged clamp/cradle; hard WCS anodised; 26.4–27.2mm; 230mm, 195g. | 1994/95 |
| 26 | Ritchey Pro WCS ATB | Directional quad-butted, titanium fixing bolt, forged clamp/cradle; hard WCS anodised; 26.4–27.2mm; 330mm, 225g. | 1994/95 |
| 27 | Syncros Titanium | 180g average, adjustable clamp; 27.2mm (other diameters on request); 225/330mm. | 1994/95 |
| 27 | Kingsbury Aluminium | Dual Allen clamp; 230g average; 220mm in 25.0/26.4/26.6/26.8/27.0/27.2/27.4mm, 330mm in 26.6/26.8/27.0/27.2mm. | 1994/95 |
| 27 | Kingsbury Titanium | Dual Allen clamp; 200g average; 27.2mm, 225/350mm. | 1994/95 |

#### Shifters

| Page | Printed identity / inventory title | Description | Edition year |
| --- | --- | --- | --- |
| 21 | Campagnolo Downtube | All groups; no maker code printed. | 1994/95 |
| 21 | Shimano Dura-Ace Downtube | No maker code printed; 8-speed group context. | 1994/95 |
| 21 | Shimano 600 Ultegra Downtube | No maker code printed; 8-speed group context. | 1994/95 |
| 21 | Shimano 105SC Downtube | No maker code printed; 8-speed group context. | 1994/95 |
| 21 | Shimano RX100 Downtube | No maker code printed; 8-speed group context. | 1994/95 |
| 21 | Shimano Dura-Ace Bar End | Explicitly 8-speed; no maker code printed. | 1994/95 |
| 27 | Grip Shift ATB/Cross | Shimano 6- or 7-speed; GS-SL-C. Retailer codes retained only as ordering evidence; no maker model code. | 1994/95 |
| 27 | Grip Shift ATB | Shimano 7- or 8-speed; GS-SL-A; lighter/more responsive than ATB/Cross. Retailer codes retained only as ordering evidence; no maker model code. | 1994/95 |
| 27 | Grip Shift Road 7 | Shimano 7-speed Ultegra/105/RX100; GS-SL-R7. Retailer codes retained only as ordering evidence; no maker model code. | 1994/95 |
| 27 | Grip Shift Road 8 | Shimano 8-speed Ultegra/105; GS-SL-R8. Retailer codes retained only as ordering evidence; no maker model code. | 1994/95 |
| 27 | Grip Shift Road Dura-Ace | Shimano 7/8-speed Dura-Ace; GS-SL-DA. Retailer codes retained only as ordering evidence; no maker model code. | 1994/95 |

#### Shifting Brake Levers

| Page | Printed identity / inventory title | Description | Edition year |
| --- | --- | --- | --- |
| 21 | Campagnolo Record Ergo Power | Carbon shell; 8-speed group context; no maker code printed. | 1994/95 |
| 21 | Campagnolo Chorus Ergo Power | 8-speed group context; no maker code printed. | 1994/95 |
| 21 | Campagnolo Athena Ergo Power | 8-speed group context; no maker code printed. | 1994/95 |
| 21 | Shimano Dura-Ace STI | 8-speed; also offered as STI/dual-pivot complete brakeset bundle. | 1994/95 |
| 21 | Shimano 600 Ultegra STI | 8-speed; also offered as STI/dual-pivot complete brakeset bundle. | 1994/95 |
| 21 | Shimano 105SC STI | 8-speed; also offered as STI/dual-pivot complete brakeset bundle. | 1994/95 |
| 21 | Shimano RX100 STI | 8-speed; also offered as STI/dual-pivot complete brakeset bundle. | 1994/95 |

#### Stems

| Page | Printed identity / inventory title | Description | Edition year |
| --- | --- | --- | --- |
| 24 | Ritchey WCS ATB | Heat-treated butted CrMo; 120/130/140/150mm, +10deg; 1in or 1-1/8in, 25.4mm clamp; WCS anodised, 140g. | 1994/95 |
| 24 | Ritchey ForceLite ATB | 120/130/140/150mm +10deg or 130mm +20deg; 1in/1-1/8in; 25.4mm; satin chrome, 290g. Introductory prose calls it Force Comp; listing says ForceLite. | 1994/95 |
| 24 | Ritchey ForceLite Threadless | 120/130/140/150mm, reversible +/-4deg; 1in/1-1/8in, 25.4mm, satin, 180g. | 1994/95 |
| 24 | Ritchey WCS Road | Heat-treated butted CrMo, WCS anodised, 230g; 90–140mm in 10mm steps, 0 or -10deg, 22.2mm quill/26.0mm clamp. | 1994/95 |
| 24 | Ritchey ForceLite Road | Satin chrome, 260g; shared road specification 90–140mm in 10mm steps, 0 or -10deg, 22.2mm quill/26.0mm clamp. | 1994/95 |
| 25 | Profile Pursuit | TIG-welded double-butted CrMo, recessed expansion bolt, aerated clamp; titanium finish (not titanium construction); 195g, 26.0mm, -10deg; 90–140mm in 10mm steps. | 1994/95 |

#### Tyres

| Page | Printed identity / inventory title | Description | Edition year |
| --- | --- | --- | --- |
| 44 | Continental Competition GP26 | Tubular; 26in, 19mm; 5-ply polyamide, 220g, 170psi; TT/triathlon. | 1994/95 |
| 44 | Continental Competition GP | Tubular; 19mm; 5-ply polyamide, 225g, 170psi; racing/triathlon. | 1994/95 |
| 44 | Continental Competition 240 | Tubular; 22mm; 5-ply polyamide, 240g, 170psi; racing/wet/rough roads. | 1994/95 |
| 44 | Continental Sprinter 250 | Tubular; 22mm; 3-ply polyamide, 250g, 170psi; racing/training. | 1994/95 |
| 44 | Continental Giro | Tubular; 22mm; 2-ply cotton, 300g, 120psi; training/fast riding. | 1994/95 |
| 44 | Continental Grand Prix | Folding clincher; 3-ply polyamide, 140psi; table prints widths 18/20/20 and weights 165/170/190g. Duplicate width retained as source ambiguity; do not silently infer 23mm. | 1994/95 |
| 44 | Michelin Super Comp H.D. | Folding clincher; 18/20/23mm, 2480 threads/dm, 205/215/225g listed, 110psi. | 1994/95 |
| 44 | Avocet FasGrip | Folding clincher; 20/23mm, 66tpi, 215/225g listed, 115psi; prose heading says Fast Grip Time Trial. | 1994/95 |
| 44 | Ritchey Road Force (folding) | Clincher; 20/24mm, 127tpi, 180/200g listed, 115psi. | 1994/95 |
| 44 | Continental Super Sport | Steel-bead clincher; 20/23/25mm, 3-ply polyamide, 275/285/295g listed, 130psi. | 1994/95 |
| 44 | Michelin Hi-Lite Comp | Folding clincher; 20/23mm, 1160 threads/dm, 205/235g listed, 110psi. | 1994/95 |
| 44 | Ritchey Road Force (steel) | Clincher; 20/24mm, 66tpi, 220/235g listed, 105psi. | 1994/95 |
| 44 | Michelin Hi-Lite Road II | Clincher; 20/23mm, 720 threads/dm, 220/235g listed, 110psi. | 1994/95 |
| 46 | Ritchey WCS Z Max | Folding Kevlar bead; front/rear, blackwall; 26x1.7 410g, 26x1.9 475g, 26x2.1 550g. | 1994/95 |
| 46 | Ritchey Z Max (steel) | Front/rear, blackwall; 26x2.1 600g, 26x2.35 690g. | 1994/95 |
| 46 | Ritchey WCS Z Max Severe Condition | Folding Kevlar bead, deeper tread; front/rear, blackwall; 26x2.1, 560g. | 1994/95 |
| 46 | Ritchey Mad-Max | Steel bead, front/rear, blackwall; 26x2.1, 660g. | 1994/95 |
| 46 | Ritchey Climb-Max | Steel bead, rear climbing tyre, blackwall; 26x2.1, 650g. | 1994/95 |
| 46 | Ritchey Alfa-Bite Trail Mix | Steel bead, hybrid/touring; 700x35 440g or 700x40 470g. | 1994/95 |
| 46 | Ritchey Cross Bite (folding) | Skinwall, 26x1.1, 330g, 90psi; pavement/rough-road. | 1994/95 |
| 46 | Ritchey Cross Bite (steel) | Skinwall; 26x1.9 490g or 700x38 450g. | 1994/95 |
| 46 | Ritchey Moab Bite | Steel bead, blackwall, slickrock/commuting; 26x2.1, 620g. | 1994/95 |
| 46 | Ritchey Tom Slick (folding) | Kevlar bead; 26x1.4, 360g; high-wear centre, inverted edge wedges. | 1994/95 |
| 46 | Ritchey Tom Slick (steel) | Skinwall, 26x1.4, 450g. | 1994/95 |
| 46 | Continental Competition Pro 1 | Coarse/hard ground; 26x2.125; folding 650g or steel bead 700g. | 1994/95 |
| 46 | Continental Competition Pro 2 | Softer ground, angular profile; 26x2.125; folding 600g or steel bead 650g. | 1994/95 |
| 46 | Continental Leader Pro | High-speed cornering; 26x2.0; folding 480g or steel bead 530g. | 1994/95 |
| 46 | Continental Cross Country Pro | All-purpose trail/road; 26x1.9; folding 530g or steel bead 580g. | 1994/95 |

#### Wheel(sets)

| Page | Printed identity / inventory title | Description | Edition year |
| --- | --- | --- | --- |
| 21 | Campagnolo Shamal front clincher | 16 radial spokes, Record hubs; front 790g/rear 1040g. | 1994/95 |
| 21 | Campagnolo Shamal front tubular | 16 radial spokes, Record hubs; front 790g/rear 1040g. | 1994/95 |
| 21 | Campagnolo Shamal rear clincher | 16 radial spokes, Record hubs; front 790g/rear 1040g. | 1994/95 |
| 21 | Campagnolo Shamal rear tubular | 16 radial spokes, Record hubs; front 790g/rear 1040g. | 1994/95 |
| 21 | Campagnolo Vento front clincher | 20 radial spokes, Athena hubs; weight unstated. | 1994/95 |
| 21 | Campagnolo Vento rear clincher | 20 radial spokes, Athena hubs; weight unstated. | 1994/95 |
| 21 | Campagnolo Bora front tubular | 16 radial spokes; carbon-fibre rims; weight unstated. | 1994/95 |
| 21 | Campagnolo Bora rear tubular | 16 radial spokes; carbon-fibre rims; weight unstated. | 1994/95 |
| 21 | Spinergy Rev-X front clincher | Four pairs tensioned carbon-fibre spokes; sealed hubs, heat-treated rims; printed 839g/each is not separately qualified by axle; rear Shimano 8-speed compatible. | 1994/95 |
| 21 | Spinergy Rev-X front tubular | Four pairs tensioned carbon-fibre spokes; sealed hubs, heat-treated rims; printed 738g/each is not separately qualified by axle; rear Shimano 8-speed compatible. | 1994/95 |
| 21 | Spinergy Rev-X rear clincher | Four pairs tensioned carbon-fibre spokes; sealed hubs, heat-treated rims; printed 839g/each is not separately qualified by axle; rear Shimano 8-speed compatible. | 1994/95 |
| 21 | Spinergy Rev-X rear tubular | Four pairs tensioned carbon-fibre spokes; sealed hubs, heat-treated rims; printed 738g/each is not separately qualified by axle; rear Shimano 8-speed compatible. | 1994/95 |

### What this edition establishes

The detailed Profile Hammer/Pursuit, Kingsbury aluminium/titanium, and Top Line ATB Super-Light/Heavy Duty boxes are concrete reconciliation targets. Top Line road and ATB masses are distinct: 345g versus 350g/420g per pair; the Super-Light has an explicit 180lb limit. Pursuit is CrMo with titanium finish. Kingsbury titanium lengths are 225/350mm, unlike the aluminium 220/330mm options. Preserve those distinctions.

Profile Aero II **XL** must be compared by dimensions/construction with existing Aero II entries; the suffix alone does not prove either identity or distinctness. Grip Shift options are compatibility-specific and lack maker model codes. Campagnolo/Shimano group labels do not establish an exact model-code or generation crosswalk. Spinergy Rev-X lists 839g clincher/738g tubular “each” without separate front/rear masses; do not copy a single axle-qualified weight from another edition over this ambiguity.

Compared with the already processed 1995/96 inventory, this edition has a dense group matrix and dedicated Ritchey/Profile pages, and can supply an earlier attestation for shared products. No disappearance, manufacturing-end or exact new-row count is inferred from differences in retailer selection. The Continental GP width table prints 18/20/20; retain the error explicitly until corroborated. Continental Competition GP/240 crosswalks remain governed by the existing tyre decisions rather than name similarity.

The preceding inventory contains150 listing mentions (bead variants combined where described together); these are not150 new components. Live reconciliation is now applied and validated above. Inventory and application scratch files were removed after validation; the original PDF remains in the held-source directory. Unresolved identities are evidence decisions above, not pending speculative inserts.

## Branford 1995/96 component catalogue — applied and validated 2026-11-19

**Applied and validated after explicit user approval.** Added components **12022–12070**, updated **55 existing rows**, registered source **473**, brands **Kooka762, Ringlé763, Onza764, Kore765**, and ten category/brand pairs. This completes the component reconciliation for this edition. No bicycle rows, bike-spec writes, CSV or matcher edits, merges or deletions. The earlier 1994/95 and archive-attributed 1987 editions are now reconciled above.

[Original 48-page PDF](https://timslife.com/brancat/Catalogs/bb19-2_1995.pdf), 57,698,585 bytes; retained at `/tmp/branford-edition-triage-20261119/bb19-2_1995.pdf`. Cover: **1995/96, Vol.19 No.2**, orders through **31 December 1996**. This is period retailer availability/configuration evidence, not manufacturing introduction/discontinuation evidence. New rows use **1995–1996** as the edition availability window; existing earlier/later independent attestations are retained. Retailer stock codes are not maker part numbers.

Source **473**: **Branford Bike catalogue Vol.19 No.2 (1995/96)**, type catalogue, country US. Citation (148 characters): https://timslife.com/brancat/Catalogs/bb19-2_1995.pdf ; cover: 1995/96, Vol.19 No.2; ordering through 1996-12-31; 48 PDF pages; components pp.20-29.

### Applied change set

**49 component additions, 55 existing-row updates, four new brands and ten category/brand registrations; one new source.** New brands: **Kooka, Ringlé, Onza, Kore**. Reuse existing **Paul Components 463**, **Wilderness Trail Bikes (WTB) 185**, **Control Tech 734**, **Topline 261** and other makers. Flite is the Selle Italia model, not a new maker. Historical Ringlé components are registered under their printed maker, rather than assuming that the later Sun/Moby Deuce branding establishes ownership for 1995/96.

The inventory has **173 mentions**: 54 new-row mentions resolve to 49 additions, 57 update mentions resolve to 55 existing rows, 12 unchanged mentions, and 50 held mentions. The two Bubba rear-hub listings share RL-HB-RB and become one row. Each Continental MTB model combines its explicitly offered folding/steel beads in one model row. Repeated listings do not inflate the component count.

No existing titles, maker/category/group ownership or search strings change. New search strings use `scripts/search-text.js`. All affected old values are retained below. No `year_from` moves later; earlier attestations and year-to extensions are visible in the before/after table. Existing aggregate Dia-Compe families are enriched only for the printed SS-7 and PC-8 members; their other members are not claimed to have these specifications.

### Coverage

All 48 PDF pages were triaged through the searchable OCR/index; the component boxes on **PDF/printed pp.20–29** were visually transcribed. Page30 and the back cover were also visually checked: p.30 is tyre-care material, and p.48 is an index/contact page, **not a component-group matrix**. The full component inventory and exclusions supersede the acquisition-stage OCR-only qualifications for this edition.

| PDF page | Review | Contents / exclusion |
| --- | --- | --- |
| 1 | cover | Cover explicitly prints 1995/96, Vol.19 No.2, and order-through 31 December 1996. |
| 2 | excluded | Clothing/shoes/helmets/lights and personal accessories; no eligible component listing in OCR triage. |
| 3 | excluded | Clothing/shoes/helmets/lights and personal accessories; no eligible component listing in OCR triage. |
| 4 | excluded | Clothing/shoes/helmets/lights and personal accessories; no eligible component listing in OCR triage. |
| 5 | excluded | Clothing/shoes/helmets/lights and personal accessories; no eligible component listing in OCR triage. |
| 6 | excluded | Clothing/shoes/helmets/lights and personal accessories; no eligible component listing in OCR triage. |
| 7 | excluded | Clothing/shoes/helmets/lights and personal accessories; no eligible component listing in OCR triage. |
| 8 | excluded | Clothing/shoes/helmets/lights and personal accessories; no eligible component listing in OCR triage. |
| 9 | excluded | Clothing/shoes/helmets/lights and personal accessories; no eligible component listing in OCR triage. |
| 10 | excluded | Clothing/shoes/helmets/lights and personal accessories; no eligible component listing in OCR triage. |
| 11 | excluded | Clothing/shoes/helmets/lights and personal accessories; no eligible component listing in OCR triage. |
| 12 | excluded | Clothing/shoes/helmets/lights and personal accessories; no eligible component listing in OCR triage. |
| 13 | excluded | Clothing/shoes/helmets/lights and personal accessories; no eligible component listing in OCR triage. |
| 14 | excluded | Clothing/shoes/helmets/lights and personal accessories; no eligible component listing in OCR triage. |
| 15 | excluded | Clothing/shoes/helmets/lights and personal accessories; no eligible component listing in OCR triage. |
| 16 | excluded | Clothing/shoes/helmets/lights and personal accessories; no eligible component listing in OCR triage. |
| 17 | excluded | Clothing/shoes/helmets/lights and personal accessories; no eligible component listing in OCR triage. |
| 18 | excluded | Indoor trainers/rollers and accessories. |
| 19 | excluded | Indoor trainers/rollers and accessories. |
| 20 | inventoried | Cranksets and bottom brackets; Photographic crank/BB material is covered by adjacent listings; no additional identifiable model. No bikes or non-eligible parts on page. |
| 21 | inventoried | Headsets; other page areas reviewed; Bearings, hubs/axles and hub hardware, brake hoods and pads are outside requested categories or excluded items. |
| 22 | inventoried | Brake levers and brake calipers; Suspension forks/shocks and ride kits omitted; brake pads omitted. |
| 23 | inventoried | Pedals; Cleats, cleat lube and other replacement cleats omitted. |
| 24 | inventoried | Saddles and seat posts; No excluded products identified. |
| 25 | inventoried | Saddles, handlebars and stems; Grips, skewers/quick releases, bar ends and other excluded parts omitted. |
| 26 | inventoried | Hubs, cassettes, and chains.; Ignored non-eligible adjacent listings and product photographs; no eligible models omitted. |
| 27 | inventoried | Rims and complete front/rear wheels.; DT spokes and nipples and professional wheel-building service excluded as out of scope. |
| 28 | inventoried | Road clincher and road tubular tyres.; Tubes excluded. Tire-care content not on this page. |
| 29 | inventoried | Hybrid and ATB tyres.; Tubes excluded; non-eligible descriptions and promotional material omitted. |
| 30 | excluded | No eligible components.; Tire care, rim strips/tape, glue, patch kits, tire tools/levers, pressure gauge and storage rims are out of scope. |
| 31 | excluded | Computers/HR monitors,bottles/bags/pumps,lubricants/tools; incidental component names are fitment/tool compatibility. |
| 32 | excluded | Computers/HR monitors,bottles/bags/pumps,lubricants/tools; incidental component names are fitment/tool compatibility. |
| 33 | excluded | Computers/HR monitors,bottles/bags/pumps,lubricants/tools; incidental component names are fitment/tool compatibility. |
| 34 | excluded | Computers/HR monitors,bottles/bags/pumps,lubricants/tools; incidental component names are fitment/tool compatibility. |
| 35 | excluded | Computers/HR monitors,bottles/bags/pumps,lubricants/tools; incidental component names are fitment/tool compatibility. |
| 36 | excluded | Computers/HR monitors,bottles/bags/pumps,lubricants/tools; incidental component names are fitment/tool compatibility. |
| 37 | excluded | Computers/HR monitors,bottles/bags/pumps,lubricants/tools; incidental component names are fitment/tool compatibility. |
| 38 | excluded | Computers/HR monitors,bottles/bags/pumps,lubricants/tools; incidental component names are fitment/tool compatibility. |
| 39 | excluded | Computers/HR monitors,bottles/bags/pumps,lubricants/tools; incidental component names are fitment/tool compatibility. |
| 40 | excluded | Nutrition,books/travel,novelties/jewellery/gifts. |
| 41 | excluded | Nutrition,books/travel,novelties/jewellery/gifts. |
| 42 | excluded | Nutrition,books/travel,novelties/jewellery/gifts. |
| 43 | excluded | Nutrition,books/travel,novelties/jewellery/gifts. |
| 44 | excluded | Nutrition,books/travel,novelties/jewellery/gifts. |
| 45 | excluded | Nutrition,books/travel,novelties/jewellery/gifts. |
| 46 | excluded | Nutrition,books/travel,novelties/jewellery/gifts. |
| 47 | excluded | Order form,terms and contact information. |
| 48 | excluded | Back-cover index and store promotion only; index points to component categories on printed pages 23–27 and tire pages 28–30. No individual component statements.; No component rows transcribed; catalog index is category-level corroboration only. |

### New components

All added rows below have years **1995–1996**, NULL group, a fixed UUID load key and source **473**. Keys A001–A079 correspond to the transcription references `branford95_pPP_NNN`; B001–B094 to `pPP-NNN`. The first column now also records the actual database component ID.

| ID / key / page | Category | Title | Description | Fixed source_id |
| --- | --- | --- | --- | --- |
| 12022 / A015 / 20 | Cranksets | Kooka ATB Racing Cranks | High-tensile aluminium I-beam crank arms with replaceable spider; Shimano compact or standard chainrings, 170/175mm, silver; 390g per pair of cranks. | 6ed36ad5-f85e-47c8-ae64-1b74a1b34817 |
| 12023 / A017 / 20 | Bottom Brackets | Kooka Titanium Bottom Bracket | Rifle-drilled aircraft-titanium bottom bracket, thick Teflon seals and triple bearings; compact or standard crank versions; 170g. | 8db5bd83-9637-4824-ac73-e098de63e4cb |
| 12024 / A026 / 20 | Bottom Brackets | Ritchey ProLite Ti Bottom Bracket | Double-sealed cartridge bearings, 7075 alloy cups and hollow 6Al-4V titanium spindle; English threading, 107/110/113/120mm axle; 150g. | 3a57f17b-6815-4a8f-8fee-d3da2b70695a |
| 12025 / A031 / 21 | Headsets | Chris King Gripnut Headset | Threaded Gripnut headset; 7075 alloy cups and stainless cartridge bearings, black/silver. 1in: 92.5g, 33mm stack; 1-1/8 or 1-1/4in: 115g, 39mm stack. | 3f1ce1dc-6721-4c3d-8456-2bd1fd76625f |
| 12026 / A035 / 22 | Brake Levers | Ritchey WCS ATB Brake Levers | Cold-forged 6061-T6 three-finger ATB brake levers; WCS anodised finish, supplied with cables and housing; 180g per pair. | 15a51703-ebd0-45a5-be05-f43be048a571 |
| 12027 / A038 / 22 | Brake Levers | Paul Components Love Levers | Machined 6061-T6 aluminium brake levers, oversized stainless pivots and reach adjustment; black, purple or blue; 199g per pair. | 63962acf-be37-4f01-b85d-9594023e3800 |
| 12028 / A039 / 22 | Brake Levers | Kooka Racha Brake Levers | CNC-machined billet brake levers; needle-bearing pivot, Teflon-lined cable adjuster, one-hand adjustment and wedge clamp; silver/black, 86g per pair. | 7339314e-d727-448b-851e-5931f4d3a692 |
| 12029 / A041 / 22 | Brakes | Ritchey WCS Cantilevers | Cold-forged 6061-T6 cantilevers, brass bushings, dual spring-tension adjustment and Logic pads; front and rear offered, WCS anodised finish; 150g/pr as listed. | d533e1d2-5871-472d-9c0c-73935ab90d90 |
| 12030 / A044 / 23 | Pedals | LOOK S2X ATB Pedals | ATB clipless pedal, silver; 32-degree pedalling angle, 250g as listed. | e41e58e3-9d1a-4195-a6e8-26c51e8987a7 |
| 12031 / A045 / 23 | Pedals | LOOK S2R ATB Pedals | ATB clipless pedal for riders over 200lb or downhill use; red, 32-degree pedalling angle, 250g as listed. | 4e08b438-9482-4bf5-8abd-13a6bb86a34f |
| 12032 / A046 / 23 | Pedals | Onza ATB Clipless Pedals (steel axle) | ATB clipless pedals with steel axle, 340g; removable elastomers, four sets supplied for release adjustment, variable float and bidirectional cleats. | 58bccd1f-4342-47fd-af3c-7ba7d7722b63 |
| 12033 / A047 / 23 | Pedals | Onza ATB Clipless Pedals (titanium axle) | ATB clipless pedals with titanium axle, 290g; removable elastomers, four sets supplied for release adjustment, variable float and bidirectional cleats. | 9ceb5b66-0ecb-464a-a251-500aa7be7287 |
| 12034 / A048 / 23 | Pedals | Ritchey Logic ATB Clipless Pedals | ATB clipless pedals with CrMo axle, sealed ball bearings and OilLite bushings; large platform and float; 350g. | 212a9bf0-f083-47a0-9693-16889a102b87 |
| 12035 / A049 / 23 | Pedals | Ritchey WCS ATB Clipless Pedals | ATB clipless pedals with 6Al-4V titanium axle, sealed ball bearings and OilLite bushings; large platform and float; 300g. | 86d28000-3b56-4069-8023-71a791658cdf |
| 12036 / A054 / 24 | Saddles | Selle San Marco Hi-Pro Regal Titanium | Regal saddle with titanium rails in light-alloy finish, rivets, extra-tough leather, differentiated Rilsan body and thick polystyrene padding; 310g. | a0f1a9f7-4ef2-406b-a408-3a495cacd045 |
| 12037 / A055 / 24 | Saddles | Selle San Marco Hi-Tech Concor Light Titanium | Concor Light saddle with titanium frame, improved ergonomics and vibration damping; thick durable leather cover; 175g. | d508b394-beae-4a7a-9f03-d9a68b5da8e2 |
| 12038 / A059 / 24 | Saddles | Selle San Marco Squadra HDP CrMo | Squadra HDP saddle with chromoly rails, DuPont Hytel polymer as printed, multi-padding system and extra-thick embroidered leather. | 190ad049-15b4-4bf2-aa0b-c5ac44a8df2b |
| 12039 / A060 / 24 | Saddles | Selle San Marco Squadra HDP Titanium | Squadra HDP saddle with titanium rails, DuPont Hytel polymer as printed, multi-padding system and extra-thick embroidered leather. | 762f39ff-3e65-4ad1-8033-08b8d0565fe5 |
| 12040 / A061 / 24 | Saddles | Selle San Marco SA 601 (steel rails) | Hi-Tech Suspension Active saddle developed with Pirelli; damping elastomers, differentiated Rilsan body, leather cover and steel rails. | 7285dc50-d4c3-44b2-98b5-02d72a02b8e8 |
| 12041 / A062 / 24 | Saddles | Selle San Marco SA 601 (titanium rails) | Hi-Tech Suspension Active saddle developed with Pirelli; damping elastomers, differentiated Rilsan body, leather cover and titanium rails. | 773e80ce-9d11-4cea-a8b5-90c68341b33f |
| 12042 / A064 / 24 | Saddles | Avocet O2 Women's Titanium Saddle | Women's racing saddle with shorter nose, flared rear, aerated gel/air padding, scuff-resistant cover and Ti6Al-4V rails. | 62f8e00c-5ac2-4739-913f-5cfda9a10e06 |
| 12043 / A065 / 24 | Seat Posts | Ritchey WCS ATB Seatpost | Directional quad-butted post, titanium fixing bolt, forged clamp and cradle, hard WCS anodising; 330mm, 26.4/26.6/26.8/27.0/27.2mm, 225g. | 08363a46-0976-4e72-b617-b518a82fdb0b |
| 12044 / A066 / 24 | Seat Posts | Ritchey Comp ATB Seatpost | Force Directional post, forged clamp and cradle, silver; 330mm, 26.4/26.6/26.8/27.0/27.2mm, 250g. | f7899131-3a1c-42e3-bd93-7ad76cc5f7d6 |
| 12045 / A068 / 24 | Seat Posts | Ringlé Moby Seatpost | Easton tube with patented one-bolt head and height scale; black/silver, 350mm, 26.8/27.0/27.2/28.6/29.4/31.6mm; 220g average listed. | 9767f688-826d-4ae7-983a-482d7cd16ab5 |
| 12046 / A070 / 24 | Seat Posts | Control Tech ATB Seat Post | Aircraft-grade aluminium seatpost with strengthening centre ridge; black, 350mm, 26.6/26.8/27.0/27.2/28.6/30.2/31.6mm; 280g. | bd46c4f7-d7a5-4ffe-ac46-ee8cad51c117 |
| 12047 / A073 / 25 | Handlebars | Ritchey CompLite ATB Handlebar | Drawn 2014-T6 aluminium flat ATB bar; 4-degree bend, 560mm, silver, 150g. | 33874289-9654-40f6-a619-2ca73dcd2b43 |
| 12048 / A076 / 25 | Stems | Ringlé Zooka Quill Stem | CNC-machined 7075-T6 quill stem, titanium expander/binder bolt and removable front clamp; 120/135/150mm, 1/1-1/8/1-1/4in, 0/10/17deg; 270g. | 19105848-2682-494a-adc1-8c77f3517e96 |
| 12049 / A077 / 25 | Stems | Ringlé Zooka Clamp-On Stem | 7075-T6 clamp-on stem with SRP titanium bolt and size shims; 1/1-1/8/1-1/4in, 120/135/150/180mm, 0/10deg; black/red/silver as offered. | 4c102fad-4e60-4e91-893f-ef8ea7b206d6 |
| 12050 / A078 / 25 | Stems | Kore ATB Stem | 6061 aluminium stem with oversized double-oval tube; 1/1-1/8in, silver/black. Offered in 135/150mm and 0/10deg configurations; listed 175g at 135mm, 0deg. | d3413d68-38b8-4e1d-baa8-083484cc49be |
| 12051 / A079 / 25 | Stems | Control Tech ATB Stem | 6061-T6 aluminium ATB stem, black; 1/1-1/8/1-1/4in, 0/10deg, 120/135/150mm; 180g. | c2b8cecb-1538-4664-b6ef-a46329a42150 |
| 12052 / B001 / 26 | Hubs | Ringlé SuperBubba Suspension Front Hub | One-piece aluminium shell, 7075-T6 axle, large flanges and full-coverage bearing dust caps; 32/36 holes, black/red/silver; 156g. | 502b5ca4-05b7-4d95-9bae-9787ec7c5a35 |
| 12053 / B002 / 26 | Hubs | Ringlé SuperEight Cassette Rear Hub | Aluminium shell (printed 7076-T6), steel axle/freehub/ratchet, three pawls; Shimano/SRP 7/8-speed compatibility with shims, road 130mm option; 32/36 holes, black/red/silver; 395g. | acf56807-b845-4712-828a-e9bfaeeaa978 |
| 12054 / B003 / 26 | Hubs | Ringlé Bubba Front Hub | 7075-T6 alloy shell and 12mm axle, sealed cartridge bearings; 28/32 holes; 115g. | 3a79f593-70ee-421b-999a-1e0d7587c417 |
| 12055 / B004 / 26 | Hubs | Ringlé Bubba Freewheel Rear Hub | 7075-T6 alloy shell and 12mm axle, sealed cartridge bearings; road or ATB 6/7/8-speed freewheel use; 32 holes, black/silver, 165g. | ffc9f419-3154-45ce-8d37-1afb16a82f0d |
| 12056 / B017 / 26 | Chains | Sedis SC-M55 MTB Chain | MTB chain, model SC-M55, offered for mountain-bike drivetrains. | 84337546-2dbc-472a-9d1a-528ee90c44b4 |
| 12057 / B018 / 26 | Chains | Sedis SC-M90 Premium MTB Chain | Premium MTB chain, model SC-M90, offered for mountain-bike drivetrains. | 291925d8-020d-472e-b0d1-5ee959b60a6e |
| 12058 / B037 / 27 | Rims | Mavic Mach 2 Ceramic (700c) | 700c aero tubular rim with ceramic finish, 32/36 holes; 470g. | 4e707ece-2b9f-4d4b-9362-6297a4d4044e |
| 12059 / B042 / 27 | Rims | Mavic 230 SBP (26in) | 26in MTB clincher rim, 23mm wide, silver SBP finish, 28/32/36 holes; 380g. | 3f8c5c72-5007-419b-b458-12d953a910c1 |
| 12060 / B043 / 27 | Rims | Mavic 230 TIB (26in) | 26in MTB clincher rim, 23mm wide, titanium-colour TIB finish, 28/32/36 holes; 380g. | 400a0c27-636c-4b07-a8d2-528e7d86dd86 |
| 12061 / B046 / 27 | Rims | Mavic 117 SUP CD (26in) | 26in MTB clincher rim, 23mm wide, SUP joint and hard CD anodising, 28/32/36 holes; 450g. | 363a0a4f-e20e-4bdd-a031-f29aaa7cf441 |
| 12062 / B048 / 27 | Rims | Mavic 117 SUP CD Ceramic (26in) | 26in MTB clincher rim, 23mm wide, SUP joint, hard CD anodising and ceramic braking flanks, 28/32/36 holes; 460g. | cb7689b6-f573-4b63-9786-e0cbc9bc03ef |
| 12063 / B083 / 29 | Tyres | Ritchey Moby Bite | ATB tyre with thick low-durometer rubber tread; 26x2.1, steel bead, 650g. | 9ec237a9-ce55-46e6-9570-6a9c100260e4 |
| 12064 / B084 / 29 | Tyres | Continental Competition Pro 1 | 26x2.125 MTB tyre; folding bead 650g or steel bead 700g. Dedicated Competition Pro 1 off-road model; separate from Competition road tubular. | c8de9886-c468-4fea-99f6-9f580265511a |
| 12065 / B086 / 29 | Tyres | Continental Competition Pro 2 | 26x2.125 MTB tyre; folding bead 600g or steel bead 650g. Dedicated Competition Pro 2 off-road model; separate from Competition road tubular. | 9cb1a8b3-053b-4d71-b14f-804ccb84455b |
| 12066 / B088 / 29 | Tyres | Continental Leader Pro | 26x2 MTB tyre; folding bead 530g or steel bead 580g. | 7f7267fc-f7be-45a6-8903-5fb85180b2eb |
| 12067 / B090 / 29 | Tyres | Continental Cross Country Pro | 26x1.9 MTB tyre; folding bead 530g or steel bead 580g. | e3720c0d-78d4-4e5a-86eb-a48f1388ccea |
| 12068 / B092 / 29 | Tyres | WTB Velociraptor (rear) | Rear-specific MTB tyre, 26x2.1, folding Kevlar bead, black; 625g. | fb7c4073-4211-4ef5-a8c0-d9ee3648d0b6 |
| 12069 / B093 / 29 | Tyres | WTB Velociraptor (front) | Front-specific MTB tyre, 26x2.1, folding Kevlar bead, black; 645g. | 6d7ff22c-17a4-4932-a637-9c8f6fef7b38 |
| 12070 / B094 / 29 | Tyres | WTB Primalraptor | MTB tyre, 26x1.95, folding Kevlar bead, black; 645g. | 6de85e47-30f9-49f8-a30b-01c60e8e1d31 |

### Existing rows: complete before/after values

Titles are unchanged. The old source_ref is shown; all 55 applied updates now use source **473**. Stable component IDs, source_id, search_text, maker/category/group and images were verified unchanged. Restoring an update means setting description, years and source_ref to these exact old values with guards against the reviewed after-values; restore any future mappings first if a later task adds them.

| ID / unchanged title | Page | Years before → after | Old description | Applied description | Old source_ref |
| --- | --- | --- | --- | --- | --- |
| 1504 Campagnolo FC-01CSOR, Record OR | 20 | 1992–1995 → 1992–1996 | Campagnolo FC-01CSOR, Record OR, Italy, 810 grams (Actual),175mm, 42, 30, 20 | Record OR mountain triple crankset; 170/175mm, 20-30-42, 20-32-42, 22-32-42/44 rings. Measured specimen: 810g, 175mm, 20-30-42. | 1 |
| 11172 Ritchey Logic Road | 20 | 1996–1996 → 1995–1996 | Cold-forged alloy road crankset, arms 170-180 mm, 39-53 rings; 590 g with rings. | Cold-forged satin-polished alloy road crankset, 590g with rings. 1995/96: 42-53, 170/172.5/175mm. 1996 maker listing: arms 170-180mm, 39-53 rings. | 357 |
| 11305 Ritchey Logic Compact Mountain | 20 | 2000–2000 → 1995–2000 | Compact mountain crankset;94/58mm chainring bolt pattern,625g. | Compact mountain crankset; 94/58mm chainring bolt pattern, 625g. SLP-compatible, 22-32-42 Supershift rings, 170/175mm. | 411 |
| 1721 Ritchey Logic Crankset | 20 | 1991–1992 → 1991–1996 | Cold-forged duralumin MTB crankset made by Sugino, hidden pin, 170-180 mm, Q-factor 151 mm, 74/110 BCD, 24-36-46 or 26-36-48; 650 g spec, 714 g measured (175 mm, all parts). Black anodised added 1992. | Sugino-made cold-forged duralumin MTB crank, hidden pin; 170-180mm, Q151, 74/110BCD. 1991/92: 24-36-46 or 26-36-48, 650g; measured 175mm complete 714g. 1995/96 Logic Mountain: 26-36-46, 170/175mm, 712g. Black added 1992. | 150 |
| 1488 Campagnolo FC-01CH, Chorus | 20 | 1992–1996 → 1992–1996 | Campagnolo FC-01CH, Chorus, Italy 1992 Road Range: 170-175, rings 39-42 / 52-53. | Chorus road double crankset, 170/172.5/175mm; 39, 41 or 42 inner with 52/53 outer. Earlier maker range: 170-175mm, 39-42 / 52-53. | 357 |
| 2006 Topline Road | 20 | 1990–1996 → 1990–1996 | 7075-T6 alloy road crank, arms 160-180 mm in 2.5 mm steps, Shimano-compatible rings (Campagnolo version available), silver. | 7075-T6 alloy road cranks, 160-180mm in 2.5mm steps, Shimano or Campagnolo chainring bolt patterns, polished silver; 345g per pair of cranks. | 357 |
| 8412 Ritchey Logic Pro | 20 | 1991–1992 → 1991–1996 | Sealed chromoly cups with precision-ground bearing surfaces, hollow nickel-chromium spindle. Fits 68mm shell with cups moved out to 78mm. English 1.37x24, 68x120mm centred. 285g. | Chromoly crank bolts, cups and lockrings; hollow nickel-chromium spindle, English 1.37x24. Cups move out to 78mm for 68mm shell. 120/124.5mm spindle options, 285g. | 150 |
| 142 Shimano BB-UN90 / BB-UN91, XTR M900 | 20 | 1992–1995 → 1992–1996 | Shimano BB-UN90 / BB-UN91, XTR M900, Japan. Sealed cartridge bottom bracket, SHD compatible, easy assembly, maintenance free, 255g; 107mm (chainline 47.5) / 113mm (50) spindles, 68 / 70 / 73mm shells, for FC-M900. 240g measured. | Sealed cartridge for FC-M900, SHD-compatible, 107/113mm spindles; 68/70/73mm shells. Maker: 255g; measured 240g. 1995/96 retailer: English, 68/73mm, 235g. | 174 |
| 10401 Ritchey Expert | 21 | 1999–1999 → 1995–1999 | Steel body; 1"; for threaded steerer, ball cage on lower and upper cone; 130g | Threaded steel headset, 1/8in upper and 3/16in lower balls, 33mm stack; silver. 1995/96 Logic Expert: 1in 130g, 1-1/8 and 1-1/4in 140g as printed. Later Expert listing: 1in, 130g. | 353 |
| 10394 Chris King No Threadset | 21 | 1999–1999 → 1995–1999 | Aluminium alloy; 1", 1-1/8", 1-1/4"; for threadless steerer, titanium version available, colours black, silver, red, gold; 84 (1"); 98 (1-1/8"); 113 (1-1/4") g | Threadless alloy headset, stainless cartridge bearings, 1/1-1/8/1-1/4in. 1995/96: 7075 cups, black/silver, 108/126/139g, 28/30mm stack for first two sizes. 1999: 84/98/113g; titanium option, black/silver/red/gold. | 353 |
| 10404 Ritchey Pro WCS | 21 | 1996–1999 → 1995–1999 | Aluminium alloy; 1"; for threaded steerer, ball cage and rollers on upper and lower cone; 82g | Threaded 7075 alloy headset, needle and inverted upper bearings; WCS Ti-anodised finish, 37mm stack, 1in 82g or 1-1/8in 92g. Later listing describes ball cages and rollers. | 357 |
| 8416 Ritchey Logic Brake Levers | 22 | 1991–1992 → 1991–1996 | Three-finger lever with wedge profile and index-finger "harbor", new for 1991; cold-forged 6061-T6, BRS low-friction cables and housing. Black or silver. 95g (per set in the 1991 catalogue, each in 1992). | Cold-forged 6061-T6 three-finger lever, wedge profile and index-finger harbor; cables/housing included, black/silver. 1991/92: 95g (set/each respectively). 1995/96: silver, 180g per pair. | 150 |
| 8949 Dia-Compe SS-7 / SS-5 / SS-4 / SS-7T ATB levers | 22 | 1994–1994 → 1994–1996 | Dia-Compe SS-7 / SS-5 / SS-4 / SS-7T ATB levers, Japan. ATB brake levers, 1994 lineup | SS-7/SS-5/SS-4/SS-7T ATB lever family. SS-7: three-finger lever, nylon bushings, long-life return springs, black, 182g per pair. | 218 |
| 8950 Dia-Compe PC-8 / PC-5 / PC-3Jr levers | 22 | 1994–1994 → 1994–1996 | Dia-Compe PC-8 / PC-5 / PC-3Jr levers, Japan. ATB brake levers sold with the VERSA cantilevers; PC-3Jr is the junior size | PC-8/PC-5/PC-3Jr ATB levers for VERSA cantilevers; PC-3Jr is junior size. PC-8: three-finger, nylon bushings, return springs, extra finger clearance and smoother travel, black; 189g per pair. | 218 |
| 8415 Ritchey Logic Cantilevers | 22 | 1991–1992 → 1991–1996 | Medium-profile cantilever, new for 1991: cold-forged 6061-T6, brass bushing pivot bearing, two-position spring adjustment, extra vertical pad adjustment hole, tucked cable end. Black or silver. 145g per set. | Cold-forged 6061-T6 medium-profile cantilevers; brass pivot bushings, spring balance adjustment, extra vertical pad hole, tucked cable end, black/silver. 1991/92: 145g/set. 1995/96: Logic pads, front/rear offered, 150g/pr as listed. | 150 |
| 10802 LOOK PP256 | 23 | 1996–1996 → 1995–1996 | Resin-body clipless pedal, cold-forged axle, tension indicator 6-8-10-12 N/m, 34 degree angle, blue or grey; 360 g per pair. | Polyamide/fibreglass clipless pedal, CrMo axle, needle/ball bearings, stainless contact plate and tension display; cobalt blue/metallic grey. 1995/96: 35deg, 180g (basis unstated). 1996 maker: 34deg, 360g/pair, 6-8-10-12 N/m. | 357 |
| 4030 Time Equipe Pro Titan Magnesium | 23 | 1996–1999 → 1995–1999 | Magnesium body, titanium axle, 8.5 mm bi-position, multireflex release, +/-4 mm lateral and +/-5 degree angular float; 340 g per pair. | Magnesium body, titanium axle, 8.5mm bi-position, multireflex release, +/-4mm lateral and +/-5deg angular float. 1995/96: 336g, 34deg clearance, 10deg freedom. Later maker listing: 340g/pair. | 357 |
| 4029 Time Equipe Pro Magnesium | 23 | 1994–1999 → 1994–1999 | Magnesium body, steel axle, 8.5 mm bi-position, multireflex release, +/-4 mm lateral and +/-5 degree angular float; 400 g per pair. | Magnesium body, steel axle, 8.5mm bi-position, multireflex release, +/-4mm lateral and +/-5deg angular float. 1995/96: CrMo axle, 370g, 34deg clearance, 10deg freedom. Later maker listing: 400g/pair. | 357 |
| 10810 Time Equipe Pro Aluminium | 23 | 1996–1996 → 1995–1996 | Aluminium body, steel axle, 8.5 mm bi-position, multireflex release, +/-4 mm lateral and +/-5 degree angular float; 460 g per pair. | Aluminium body, steel axle, 8.5mm bi-position, multireflex release, +/-4mm lateral and +/-5deg angular float. 1995/96: CrMo axle, 400g, 34deg clearance, 10deg freedom. 1996 maker listing: 460g/pair. | 357 |
| 5561 Selle San Marco Regal | 24 | 1970–2000 → 1970–2000 | Regal saddle, black or white;395g listed. Italy. | Hi-Pro Regal saddle with copper-finished steel rails, rivets, extra-tough leather, differentiated Rilsan body and thick polystyrene padding; black/white, 395g. | 472 |
| 5535 Selle San Marco Concor Light Cr-Mo | 24 | 1990–1990 → 1990–1996 | Selle San Marco Concor Light Cr-Mo, Italy, 260 grams (Actual) | Hi-Tech Concor Light saddle, chromoly frame and thick durable leather cover; improved ergonomics and vibration damping. Listed 205g; earlier measured specimen 260g. | 1 |
| 5568 Selle San Marco SQUADRA HDP | 24 | 1996–1996 → 1995–1996 | Polypropylene and nylon shell with steel rails, PV foam padding with a Hytrel front insert, black or grey. 350 g. | Squadra HDP steel-rail saddle; polypropylene/nylon shell, PV foam and Hytrel front insert, multi-padding system, extra-thick embroidered leather; black/grey, 350g. | 357 |
| 5489 Selle Italia Flite Titanium | 24 | 1990–2000 → 1990–2000 | Selle Italia Flite Titanium, Italy, 227 grams (Actual) | Low-profile leather racing saddle, honeycomb synthetic base and titanium rails; black/white, 185g listed. Earlier measured specimen: 227g. | 1 |
| 10639 Ritchey Pro WCS seat post | 24 | 1996–1996 → 1995–1996 | 2014-T6 aluminium alloy seat post with Force Directional design, 26.8-27.2 mm diameter, 230 mm long. 195 g. | 2014-T6 alloy Force Directional seatpost, strategically thinned walls, hard WCS anodising; 230mm, 26.6/26.8/27.0/27.2mm; 195g. | 357 |
| 11851 Control Tech Control Seat Post | 24 | 1999–1999 → 1995–1999 | Aluminium seatpost; 27.2x235mm, 224g; silver. | Aircraft-grade alloy road seatpost with strengthening centre ridge; silver, 235mm, 26.6/26.8/27.0/27.2mm. 1995/96: 221g; 1999: 27.2x235mm, 224g. | 353 |
| 8404 Ritchey ProLite | 25 | 1990–1992 → 1990–1996 | Easton EA70 flat bar drawn and butted with Easton, introduced 1990. 4/6/9 deg bends, 540mm in 1991, 560mm from 1992. Black, red, silver or blue. 140g. | Easton EA70 flat bar drawn and butted with Easton, introduced 1990. 4/6/9 deg bends, 540mm in 1991, 560mm from 1992. Black, red, silver or blue. 140g. | 150 |
| 8403 Ritchey ProLite "WCS" | 25 | 1992–1992 → 1992–1996 | New 1992 flat bar developed with Easton Aluminum: butted Easton EA70, 4 or 6 deg bends, 560mm, hard-anodised platinum, 123g. | Easton EA70 butted flat bar developed with Easton, hard WCS anodising, 560mm, 123g. 1992: 4/6deg, platinum. 1995/96: 4deg; not suitable for bar ends. | 149 |
| 7665 Shimano CN-HG91, Deore XT | 26 | 1991–1997 → 1991–1997 | Shimano CN-HG91, Deore XT, Japan, new for 1991, stronger narrow HG chain, silver roller and pin link plates, 1/2 x 3/32in | Narrow HG chain, silver roller and pin link plates, 1/2x3/32in; stronger design introduced 1991. Also sold as Ultegra HG-91. | 275 |
| 10742 Sachs SCR 80 | 26 | 1996–1996 → 1995–1996 | Delta-treated steel chain, 7.07 mm wide, for PowerGlide, Interactive Glide and HyperGlide systems, champagne colour; 316 g. | SCR 80 chain, sold as Sedis SL/Campy Contax; Delta-treated steel, 7.07mm wide, PowerGlide/Interactive Glide/HyperGlide compatible, champagne colour; 316g. | 357 |
| 5077 Mavic MA 40 | 27 | 1980–1999 → 1980–1999 | Mavic MA 40, France. Hard-anodised anthracite clincher, 20.5 mm, double eyelet (stainless exposed eyelets from 1988), 19-25 mm tyres, for top-range sport, triathlon and amateur racing; 700c, 27 x 1 1/4, 571, 28-40 holes, 430/435/395 g. | Hard-anodised anthracite box-section clincher, 20.5mm, double stainless eyelets, 19-25mm tyres. Maker sizes: 700c, 27in, 571, 28-40 holes, 430/435/395g. 1995/96: 700c, 32/36 holes, 460g. | 120 |
| 5097 Mavic Open 4 CD | 27 | 1988–1993 → 1988–1996 | Mavic Open 4 CD, France. "A new generation": hard-anodised aero clincher, 17 mm, for 18-23 mm tyres, stainless double eyelets; for sportives and triathlon; 622 28-36 holes, 571 28/32 holes; 395/360 g in 1988-89, 420/385 g in 1990-91. | Hard-anodised aero clincher, 17mm, 18-23mm tyres, stainless double eyelets. 622: 28-36 holes; 571: 28/32. 1988/89: 395/360g; 1990/91: 420/385g. 1995/96: 700c, 28/32/36, 430g. | 121 |
| 5107 Mavic Reflex | 27 | 1997–1997 → 1995–1997 | Mavic Reflex, France, 394 grams (avg). 700c clincher, SUP joint and UB Control milled sidewalls, 410 g, 28/32/36 holes, for 18-23 mm tyres; CD, CD Ceramic, blue or silver. The Reflex tubular is a separate row. | 700c clincher, SUP joint, UB Control sidewalls, 28/32/36 holes. 1995/96 silver SBP: 430g. 1997: 410g, 18-23mm tyres, CD/CD Ceramic/blue/silver; measured average 394g. Reflex tubular is separate. | 307 |
| 10595 Mavic Reflex Titane SUP UB Control | 27 | 1996–1996 → 1995–1996 | Alloy clincher rim, 700c, 19 mm wide, 28-32-36 holes, titanium-colour anodised, double stainless eyelets, UB Control braking flanks; 410 g. | 700c alloy clincher, 19mm, 28/32/36 holes, titanium-colour anodising, double stainless eyelets, SUP joint and UB Control braking. 1995/96 TIB listing: 480g; 1996 maker listing: 410g. | 357 |
| 10598 Mavic Open SUP CD Ceramic | 27 | 1996–1996 → 1995–1996 | Alloy clincher rim, 700c, 19 mm wide, 28-32-36 holes, ceramic-coated braking flanks, double stainless eyelets; 480 g. | 700c alloy clincher, 19mm, 28/32/36 holes, SUP joint, hard CD anodising, ceramic braking flanks and double stainless eyelets; 480g. | 357 |
| 4961 Campagnolo Omega Strada "V Profile" | 27 | 1988–1995 → 1988–1996 | Omega Strada V-profile rim; 1991 P0451 tubular395g/P0222 clincher440g, no eyelets.1990 Omega Strada Aero clincher:20mm, 440g, 32h, matte black. Legacy measured average417.5g. | Omega Strada V-profile rim, no eyelets; 1991 P0451 tubular 395g/P0222 clincher 440g. 1990 clincher: 20mm, 32h, matte black. 1995/96: Omega V clincher 435g, Omega VT tubular 395g, 700c 32/36h. Measured avg 417.5g. | 471 |
| 4955 Campagnolo Omega 19 | 27 | 1992–1995 → 1992–1996 | Campagnolo Omega 19, Italy, 435 grams (Actual),36h rim via digital scale 1992 Rims Range: P0562, 380 g Hardox clincher, new for 1992. 1993 Range: P0682 Omega 19 26 in, 350 g, 28-32 h. | Omega 19 Hardox clincher; 1992 P0562 380g; 1993 P0682 26in, 350g, 28/32h. 1995/96: 26in or 700c, 32/36h, black/silver, 370g. Earlier 36h specimen measured 435g. | 19 |
| 5082 Mavic Mach 2 CD 2 | 27 | 1990–1991 → 1990–1996 | Mavic Mach 2 CD 2, France. Aero tubular, 19 mm, double eyelet (two-piece stainless, recessed head) for easier lacing and even tension, flash-bright plus 50 micron hard anodising; 700 24-36 holes 470 g, 650 437 g, 600 24/28 holes 396 g. | Mavic Mach 2 CD 2, France. Aero tubular, 19 mm, double eyelet (two-piece stainless, recessed head) for easier lacing and even tension, flash-bright plus 50 micron hard anodising; 700 24-36 holes 470 g, 650 437 g, 600 24/28 holes 396 g. | 121 |
| 5072 Mavic M 261 | 27 | 1990–1991 → 1990–1996 | Mavic M 261, France. P.S.P.-profile ATB clincher (pyramidal braking flanks angled 3 degrees for cantilevers), for all tyre types, stainless exposed double eyelets, neutral anodised; 559, 28-32-36 holes, 460 g. | P.S.P.-profile ATB clincher, 26in, 26mm, cantilever-angled braking flanks, double stainless eyelets, neutral/silver anodised. 1990/91: 28/32/36h, 460g. 1995/96 261 SBP: 32/36h, 480g. | 121 |
| 5071 Mavic M 231 CD | 27 | 1990–1993 → 1990–1996 | Mavic M 231 CD, France. P.S.P.-profile ATB clincher (pyramidal braking flanks angled 3 degrees for cantilevers), tyres up to 37 mm, single stainless eyelet, flash-bright plus 50 micron hard anodising; 559, 28-32-36 holes, 410 g. | Mavic M 231 CD, France. P.S.P.-profile ATB clincher (pyramidal braking flanks angled 3 degrees for cantilevers), tyres up to 37 mm, single stainless eyelet, flash-bright plus 50 micron hard anodising; 559, 28-32-36 holes, 410 g. | 121 |
| 9977 Mavic 217 | 27 | 1997–1997 → 1995–1997 | Mavic 217, France. Cross-country MTB rim, SUP joint, UB Control, 410 g (Ceramic 420 g, CD double-eyelet 440 g), 28/32/36 holes (CD 32/36/40, the 40 for tandems); CD, CD Ceramic, silver or Sunset. | 26in cross-country MTB rim, 22mm, SUP joint and UB Control, 28/32/36h. 1995/96 TIB: 410g. 1997: 410g, Ceramic 420g, CD double-eyelet 440g; CD also 40h for tandems, silver/Sunset/CD/CD Ceramic. | 307 |
| 9976 Mavic 121 | 27 | 1997–1997 → 1995–1997 | Mavic 121, France. Downhill MTB rim, SUP joint, 530 g, 32/36 holes; CD or CD Ceramic, the CD version recommended for disc brakes. | 26in downhill MTB rim, 28mm wide, SUP joint; CD or CD Ceramic. 1995/96 CD Ceramic: 36h, 530g. 1997: 32/36h, 530g; CD version recommended for disc brakes. | 307 |
| 4944 Campagnolo ATEK | 27 | 1992–1996 → 1992–1996 | Campagnolo ATEK, Italy 1992 Rims Range: P0614 Hardox, P0624 polished, 377 g, 26 in, 6082 T6. 1993 Range: 390 g, 20 mm. | 26in 6082-T6 MTB rim, 20mm wide, 32/36h, polished/silver or Hardox. 1992 P0614/P0624: 377g; 1993: 390g; 1995/96: 400g. | 19 |
| 7052 Campagnolo P0594, Stheno (ATB) | 27 | 1992–1995 → 1992–1996 | Campagnolo P0594, Stheno (ATB), Italy, 393 grams (Spec). 26 in mountain-bike rim, 6082 T6, 32/36 h, no eyelets; P0594 Hardox, P0604 polished. 1992 Rims Range. 1993 Range: 405 g, 22 mm. | 26in 6082-T6 MTB rim, 32/36h, no eyelets; P0594 Hardox/P0604 polished. 1992: 393g; 1993: 405g, 22mm. 1995/96: 22.2mm, 425g. | 19 |
| 7053 Campagnolo P0634, Mirox (ATB) | 27 | 1992–1995 → 1992–1996 | Campagnolo P0634, Mirox (ATB), Italy, 380 grams (Spec). 26 in mountain-bike rim, 6082 T6, 32/36 h, double eyelets; P0634 Hardox, P0644 polished. 1992 Rims Range. | 26in 6082-T6 MTB rim, double eyelets, 32/36h; P0634 Hardox/P0644 polished. 1992: 380g. 1995/96: 22.2mm, 425g. | 19 |
| 6782 Continental Grand Prix | 28 | 1980–2000 → 1980–2000 | Continental Grand Prix, Germany | Folding road clincher, three-ply polyamide casing, 700x18/20/23 options, printed weights 165/170/190g (not explicitly paired by width), max 140psi. | 1 |
| 10539 Panaracer Category One | 28 | 1996–1996 → 1995–1996 | Clincher, 700x20c; aramid and nylon casing; herringbone tread; rigid beads 245 g, folding version 200 g. | Road clincher, aramid/nylon casing, herringbone tread. 1995/96 Cat 1: 700x20/23, 130tpi, folding Kevlar bead, 200/215g listed, max 125psi. 1996 maker: 700x20, rigid 245g or folding 200g. | 357 |
| 10532 Michelin Hi-Lite Bi Synergic | 28 | 1996–1996 → 1995–1996 | Clincher, 650x23, 700x20 and 700x23; high-density nylon casing; slick bi-compound tread, harder centre than sides; for racing; 200-220 g. | Road clincher, high-density nylon, harder centre compound than shoulders, slick tread. 650x23 and 700x20/23; 200-220g. 1995/96: 130tpi, 205/215g listed, max 125psi. | 357 |
| 11686 Tioga Proline S | 28 | 1996–1999 → 1995–1999 | Nylon-casing slick tyre with side cuts. 1996 sizes700x18/20/23/25. 1999:700x20C, 230g Kevlar bead or 250g steel bead; black/tan. | Nylon slick road tyre with side cuts. 1995/96: 700x20/23, 130tpi, 220/260g listed, max 115psi. 1996: 700x18/20/23/25. 1999 700x20C: 230g Kevlar or 250g steel bead, black/tan. | 353 |
| 8389 Ritchey Road Force | 28 | 1991–1996 → 1991–1996 | First Vector Force Analysis road tyre, parabolic grooves. Clincher 700x20c, 24c, 28c in wire (66 tpi) or Kevlar (127 tpi): 1991 210/170, 220/190, 260/220g; 1992 220/180, 230/200, 270/220g. Tubular 700x21c 250g cotton/latex, 120 psi. | Vector Force Analysis road tyre, parabolic grooves. Clincher 700x20/24/28, wire 66tpi or Kevlar 127tpi. 1991 wire/Kevlar: 210/170,220/190,260/220g; 1992: 220/180,230/200,270/220g. 1995/96 max130psi. Tubular 700x21 250g cotton/latex,120psi. | 357 |
| 6788 Continental Super Sport | 28 | 1980–1990 → 1980–1996 | Clincher; Super Sport 20/25 versions have 3-ply polyamide casing, steel beads, 330g and max 120psi; 25 model is 25mm. For training/rough roads. Earlier specimen measured 215.8g, size unspecified. | Steel-bead road clincher, three-ply polyamide. 1990 Super Sport 20/25: 330g, max120psi. 1995/96: 700x20/23/25, 275/285/295g listed, max110psi. Earlier size-unspecified specimen measured215.8g. | 471 |
| 10533 Michelin Performer | 28 | 1996–1996 → 1995–1996 | Clincher, 700x20, 700x23 and 700x25; nylon casing; semislick tread; high mileage, for touring; 250-300 g. | Road/touring clincher, nylon casing, semislick tread and high-mileage design; 700x20/23/25, 250-300g. 1995/96: 130tpi, 280/290/300g listed, max100psi. | 357 |
| 10414 Continental Giro | 28 | 1999–1999 → 1995–1999 | Cotton and rubber compound; ribbed tread ("spigato"); 22x28"; two-ply cotton casing, 160 tpi; 300g | Road/training tubular, two-ply cotton casing, 160tpi, rubber compound and ribbed tread; 22x28in, 300g, max120psi. | 353 |
| 6875 Vittoria Competition Formula Uno | 28 | 1980–1999 → 1980–1999 | Vulcanised tubular, 21x28 in; cotton casing; herringbone/diamond-point tread; for road training; 7-9 bar; 380-400 g. | Vulcanised cotton road-training tubular, herringbone/diamond tread. 1995/96 Formula 1: three-ply cotton, 21.5mm, 300g, max120psi. Later maker Formula Uno: 21x28in, 380-400g, 7-9bar. | 357 |
| 11257 Ritchey AlphaBite Trailmix | 29 | 2000–2000 → 1995–2000 | 700x35/40 hybrid on/off-road tyre;Comp440/470g;connected center tread. | 700x35/40 hybrid on/off-road tyre, connected centre tread, Trail Mix compound; steel bead, non-folding, Comp440/470g. | 411 |
| 8391 Ritchey Cross-Bite | 29 | 1992–1992 → 1992–1996 | New 1992 hybrid/fitness tyre: smooth centre contour with inverted "jaw" shoulders for pavement and fire-road. 26x1.5 450g, 700x38c 450g (60 tpi). | Hybrid tyre with smooth centre and inverted-jaw shoulders. 1992:26x1.5/700x38,450g,60tpi. 1995/96 Kevlar:26x1.1 330g,700x38 430g; steel:26x1.1 420g,26x1.9 490g,700x38 450g. | 149 |

### Full source inventory and disposition

Printed names and specifications are retained separately from the reconciled titles above. Common introductory prose and excluded accessories are covered by the page ledger. The source edition supplies the separate year hint 1995/96 for every entry. A slash-separated weight list is not assumed to map one-to-one to widths where the table does not say so.

#### Cranksets

| Key / page | Printed maker / model | Description / printed specification | Disposition |
| --- | --- | --- | --- |
| A001 / 20 | Shimano XTR | Shimano ATB crankset. Specify 26-36-46/48 chainrings and 170, 172.5, or 175mm arms. | held → 1848,8667,8669,8677 |
| A002 / 20 | Shimano Deore XT | Shimano ATB crankset. Specify 22-32-42/44 chainrings and 170 or 175mm arms. | held → 1848,8667,8669,8677 |
| A003 / 20 | Shimano Deore LX | Shimano ATB crankset. 22-32-42; specify 170 or 175mm arms. | held → 1848,8667,8669,8677 |
| A004 / 20 | Campagnolo Record O.R. | Campagnolo ATB crankset. Specify 20-30-42, 20-32-42, 22-32-42, or 22-32-44 chainrings; 170 or 175mm arms. | update → 1504 |
| A005 / 20 | Ritchey Logic Road Crankset | Ultra-stiff and lightweight; cold-forged and satin polished. 42-53; specify 170, 172.5, or 175mm arms; 590gr (basis not stated). | update → 11172 |
| A006 / 20 | Ritchey Logic Compact | ATB crankset; fits SLP setups and 22-32-42 Supershift chainrings. Specify 170 or 175mm arms; 625gr (basis not stated). | update → 11305 |
| A007 / 20 | Ritchey Logic Mountain | ATB crankset. 26-36-46; specify 170 or 175mm arms; 712gr (basis not stated). | update → 1721 |
| A008 / 20 | Shimano Dura-Ace | Road crankset. Specify 42-53, 39-53, or 42-52 chainrings; 170, 172.5, 177.5, or 180mm arms. | held |
| A009 / 20 | Shimano Ultegra | Road crankset. Specify 42-53 or 42-52 chainrings; 170, 172.5, or 175mm arms. | held |
| A010 / 20 | Shimano 105-SC | Road crankset. Specify 42-53 or 39-53 chainrings; 170, 172.5, or 175mm arms. | held |
| A011 / 20 | Shimano RX100 Triple | Road crankset. 30-42-52; specify 170 or 175mm arms. | unchanged → 1840 |
| A012 / 20 | Campagnolo Record | Road crankset. Specify 39-52/53, 41-52/53, or 42-52/53 chainrings and 170, 172.5, or 175mm arms. | held |
| A013 / 20 | Campagnolo Chorus | Road crankset. Specify 39-52/53, 41-52/53, or 42-52/53 chainrings and 170, 172.5, or 175mm arms. | update → 1488 |
| A014 / 20 | Campagnolo Athena | Road crankset. Specify 39-52/53, 41-52/53, or 42-52/53 chainrings and 170, 172.5, or 175mm arms. | held |
| A015 / 20 | Kooka ATB Racing Cranks | One of the lightest cranks on the racing circuit; patented I-beam arm, replaceable spider, high-tensile aluminum; fits Shimano compact or regular chainrings. Specify arm, model, and color; 170 or 175mm arms; silver; 390gr/pr. | new → A015 |
| A016 / 20 | Topline Road Cranks | Ultra-light road cranks, polished silver; Campagnolo or Shimano-compatible chainring bolt patterns. Specify 170, 172.5, or 175mm arms; 345g/pr. | update → 2006 |

#### Bottom Brackets

| Key / page | Printed maker / model | Description / printed specification | Disposition |
| --- | --- | --- | --- |
| A017 / 20 | Kooka Bottom Bracket | Rifle-drilled aircraft titanium; thick Teflon seals and triple bearings. Specify compact or regular cranks; 170gr. | new → A017 |
| A018 / 20 | Shimano Dura-Ace | Road bottom bracket; cartridge bearings. 103mm axle; specify 68/70mm shell and British or Italian threading. | unchanged → 133 |
| A019 / 20 | Shimano Ultegra | Road bottom bracket; cartridge bearings. 115 mm axle, cartridge bearings, 68/70 mm shell, British or Italian threading; as printed. | held |
| A020 / 20 | Shimano 105SC/RX100 | Road bottom bracket; cartridge bearings. 107mm axle; specify 68/70mm shell and British or Italian threading. | held |
| A021 / 20 | Campagnolo Record | Road bottom bracket; cartridge bearings. Specify British or Italian threading. | held |
| A022 / 20 | Campagnolo Chorus | Road bottom bracket; cartridge bearings. Specify British or Italian threading. | held |
| A023 / 20 | Campagnolo Athena | Road bottom bracket; cartridge bearings. Specify British or Italian threading. | held |
| A024 / 20 | Ritchey Logic Pro | CrMo crank bolts, cups, and lockrings; hollow nickel-chromium steel spindle. 120 or 124.5mm lengths; English; 285gr. | update → 8412 |
| A025 / 20 | Ritchey ProLite | Double-sealed cartridge bearings, 7075 alloy cups, hollow nickel-chromium steel spindle. 107, 110, 113, or 120mm; English; 195gr. | held → 10295 |
| A026 / 20 | Ritchey ProLite Ti | Double-sealed cartridge bearings, 7075 alloy cups, hollow 6-4AL titanium spindle. 107, 110, 113, or 120mm; English; 150gr. | new → A026 |
| A027 / 20 | Shimano XTR | Sealed cartridge bearing. 74/100mm; specify 68 or 73mm shell and 107 or 113mm spindle; British; 235gr. | update → 142 |
| A028 / 20 | Shimano XT | Sealed cartridge bearing. Specify 58/94 or 74/110mm, 107 or 113mm spindle, and 68 or 73mm shell; British; 254gr. | held |
| A029 / 20 | Shimano STX | Sealed cartridge bearing. 58/95mm; specify 68 or 73mm shell and 110 or 113mm spindle; British; 320gr. | held |

#### Headsets

| Key / page | Printed maker / model | Description / printed specification | Disposition |
| --- | --- | --- | --- |
| A030 / 21 | Ritchey Logic Expert Headset | Uses 1/8-inch upper race bearings to reduce stack height and 3/16-inch lower race balls for durability; silver. 33mm stack height; specify 1in (130gr), 1 1/8in (140gr), or 1 1/4in (140gr). | update → 10401 |
| A031 / 21 | Chris King Headset | Stainless cartridge bearings, special seals, CNC-machined 7075 alloy cups, Gripnut threadlocking system; silver or black. 1in (92.5gr) with 33mm stack; 1 1/8in or 1 1/4in (115gr) with 39mm stack. | new → A031 |
| A032 / 21 | Chris King NoThreadset | Stainless cartridge bearings with special seals; CNC-machined 7075 aluminum cups; silver or black. 1in, 28mm stack, 108gr; 1 1/8in, 30mm stack, 126gr; or 1 1/4in, 139gr. | update → 10394 |
| A033 / 21 | Ritchey Pro WCS Headset | Precision-machined 7075 alloy with needle bearings; inverted upper bearings reduce stack height; Ti ano finish. 37mm stack height; specify 1in (82gr) or 1 1/8in (92gr). | update → 10404 |

#### Brake Levers

| Key / page | Printed maker / model | Description / printed specification | Disposition |
| --- | --- | --- | --- |
| A034 / 22 | Ritchey Logic | Three-finger design, cold-forged 6061 T6 alloy; cables and housing included; silver. 180gr/pr. | update → 8416 |
| A035 / 22 | Ritchey WCS | Three-finger design, cold-forged 6061 T-6 alloy; cables and housing included; WCS ano finish. 180gr/pr. | new → A035 |
| A036 / 22 | Dia Compe SS-7 | Three-finger lever with nylon bushings and long-life return springs; black. 182gr/pr. | update → 8949 |
| A037 / 22 | Dia Compe PC-8 | Three-finger lever; more finger space, smoother travel, more braking power; black. 189gr/pr. | update → 8950 |
| A038 / 22 | Paul Components Love Levers | Simple durable design; machined 6061-T6 aluminum, oversized stainless pivots, reach adjust; black, purple, or blue. 199gr/pr. | new → A038 |
| A039 / 22 | Kooka Racha Levers | CNC-machined billet, needle-bearing pivot, Teflon-lined cable adjuster, one-hand adjust, wedge clamping; silver or black. 86gr/pr. | new → A039 |

#### Brakes

| Key / page | Printed maker / model | Description / printed specification | Disposition |
| --- | --- | --- | --- |
| A040 / 22 | Ritchey Logic | ATB brake caliper, cold-forged 6061 T-6 alloy with brass bushings and balance spring adjustment; Logic pads; silver. Front and rear; 150gr/pr. | update → 8415 |
| A041 / 22 | Ritchey WCS | ATB brake caliper, cold-forged 6061 T-6 alloy with brass bushings and dual spring tension adjustment; Logic pads; WCS ano finish. Front and rear; 150gr/pr. | new → A041 |
| A042 / 22 | Shimano XTR | Low-profile, differentiated front and rear brake calipers; M-condition pads. Front or rear. | unchanged → 1018 |

#### Pedals

| Key / page | Printed maker / model | Description / printed specification | Disposition |
| --- | --- | --- | --- |
| A043 / 23 | LOOK PP256 | Lightweight low-profile performance pedal; polyamide-charged fiberglass body, adjustable release tension and display window, chromoly axle, needle and ball bearings, replaceable machined Inox contact plate. 35° cornering clearance; Arc or black cleats; cobalt blue or metallic gray; 180gr. | update → 10802 |
| A044 / 23 | LOOK S2X | ATB pedal for racing; mud evacuation holes, adjustable release tension on both sides, removable bumper, chromoly axle, sealed needle and ball bearings. 32° cornering clearance; silver; 250gr. | new → A044 |
| A045 / 23 | LOOK S2R | ATB pedal for racing; mud evacuation holes, adjustable release tension on both sides, removable bumper, chromoly axle, sealed needle and ball bearings. 32° cornering clearance; red; recommended for riders over 200lb or downhillers; 250gr. | new → A045 |
| A046 / 23 | Onza ATB Pedals steel | Disassemblable ATB pedal with removable elastomers, large flow-through holes, four elastomer sets and variable float with bidirectional cleats. Steel spindle; 340gr. | new → A046 |
| A047 / 23 | Onza ATB Pedals titanium | Disassemblable ATB pedal with removable elastomers, large flow-through holes, four elastomer sets and variable float with bidirectional cleats. Titanium model; 290gr. | new → A047 |
| A048 / 23 | Ritchey Logic | Clipless ATB pedal with large platform, sealed ball and OilLite bearings, single-release operation and ample float; easy to service. Heat-treated chromoly axle; 350gr. | new → A048 |
| A049 / 23 | Ritchey WCS | Clipless ATB pedal with large platform, sealed ball and OilLite bearings, single-release operation and ample float; easy to service. 6-4AL titanium axle; 300gr. | new → A049 |
| A050 / 23 | Time Equipe Pro Titan | Equipe Pro pedal with lateral metal clip inserts, Multireflex Bioperformance, extra-wide platform and magnesium alloy body. Titanium spindle; 34° cornering clearance, 10° angular freedom; 336gr. | update → 4030 |
| A051 / 23 | Time Equipe Pro Magnesium Pro | Equipe Pro pedal with lateral metal clip inserts, Multireflex Bioperformance, extra-wide platform and magnesium alloy body. Heat-treated chromoly spindle; 34° cornering clearance, 10° angular freedom; 370gr. | update → 4029 |
| A052 / 23 | Time Equipe Pro Aluminum | Equipe Pro pedal with Multireflex Bioperformance and integrated retention system; aluminum alloy body and chromoly spindle. 34° cornering clearance; 400gr. | update → 10810 |

#### Saddles

| Key / page | Printed maker / model | Description / printed specification | Disposition |
| --- | --- | --- | --- |
| A053 / 24 | Selle San Marco Hi-Pro Regal I steel | Old-world styling with leather, differentiated Rilsan body, thickened polystyrene pad and matching rails; Italy. Copper-finished steel rails; 395gr. | update → 5561 |
| A054 / 24 | Selle San Marco Hi-Pro Regal I titanium | Old-world styling with leather, differentiated Rilsan body, thickened polystyrene pad and matching rails; Italy. Light-alloy-finish titanium rails; 310gr. | new → A054 |
| A055 / 24 | Selle San Marco Hi-Tech Concor Light titanium | Updated Concor styling with improved ergonomics, lighter body and vibration damping; durable leather cover; Italy. Titanium rails; 175gr. | new → A055 |
| A056 / 24 | Selle San Marco Hi-Tech Concor Light steel | Updated Concor styling with improved ergonomics, lighter body and vibration damping; durable leather cover; Italy. Chromoly steel rails; 205gr. | update → 5535 |
| A057 / 24 | Selle San Marco Hi-Tech Concor Light carbon | Updated Concor styling with improved ergonomics, lighter body and vibration damping; durable leather cover; Italy. Carbon frame; 150gr. | held → 5536,5543 |
| A058 / 24 | Selle San Marco Squadra HDP steel | Hytel polymer, multi-padding system, ergonomic form and extra-thick leather; Italy. Steel rails. | update → 5568 |
| A059 / 24 | Selle San Marco Squadra HDP chromo | Hytel polymer, multi-padding system, ergonomic form and extra-thick leather; Italy. Chrome molybdenum rails. | new → A059 |
| A060 / 24 | Selle San Marco Squadra HDP titanium | Hytel polymer, multi-padding system, ergonomic form and extra-thick leather; Italy. Titanium rails. | new → A060 |
| A061 / 24 | Selle San Marco Hi-Tech SA 601 steel | Suspension Active saddle designed with Pirelli, uses damping elastomers and differentiated Rilsan body with leather cover; Italy. Steel rails. | new → A061 |
| A062 / 24 | Selle San Marco Hi-Tech SA 601 titanium | Suspension Active saddle designed with Pirelli, uses damping elastomers and differentiated Rilsan body with leather cover; Italy. Titanium rails. | new → A062 |
| A063 / 24 | Selle Italia Titanium Saddle | Ultra-low-profile ergonomic design, leather cover, honeycomb synthetic base, titanium rails; Italy. Black or white; 185gr. | update → 5489 |
| A064 / 24 | Avocet O2 Women’s Saddle | Gel/air system with aerated, thinned gel layer, scuff-resistant cover, flared back and shorter nose; Ti6Al-4V rails.  | new → A064 |
| A071 / 25 | SDG Bontrager style | Kevlar cover, hydrophobic, water-resistant, scuff- and tear-resistant; comfortable padding does not shift; Ti rails. Bontrager style has cutaway sides and low-profile nose; 200gr. | held → 11675,11676,11677 |
| A072 / 25 | SDG “Flite” style | Kevlar cover, hydrophobic, water-resistant, scuff- and tear-resistant; comfortable padding does not shift; Ti rails. Nearly identical to Selle’s Flite with wider back and low-profile nose; 200gr. | held → 11675,11676,11677 |

#### Seat Posts

| Key / page | Printed maker / model | Description / printed specification | Disposition |
| --- | --- | --- | --- |
| A065 / 24 | Ritchey WCS ATB | Directional quad butting, titanium fixing bolt, forged clamp and cradle; hard-anodized WCS finish. 330mm; 26.4, 26.6, 26.8, 27.0, or 27.2mm; 225gr. | new → A065 |
| A066 / 24 | Ritchey Comp ATB | Force directional design, forged clamp and cradle; silver finish. 330mm; 26.4, 26.6, 26.8, 27.0, or 27.2mm; 250gr. | new → A066 |
| A067 / 24 | Ritchey WCS Road | Force directional butting with thinner walls; hard-anodized WCS finish. 230mm; 26.6, 26.8, 27.0, or 27.2mm; 195gr. | update → 10639 |
| A068 / 24 | Ringlé Moby Seatpost | New Easton tube design, patented one-bolt head and height-scale graphics. 26.8, 27.0, 27.2, 28.6, 29.4, or 31.6mm diameters; 350mm; black or silver; 220gr average. | new → A068 |
| A069 / 24 | Control Tech Control Tech Post road | Aircraft-grade aluminum with center ridge for strength. Road; 235mm; 26.6, 26.8, 27.0, or 27.2mm; silver; 221gr. | update → 11851 |
| A070 / 24 | Control Tech Control Tech Post ATB | Aircraft-grade aluminum with center ridge for strength. ATB; 350mm; 26.6, 26.8, 27.0, 27.2, 28.6, 30.2, or 31.6mm; black; 280gr. | new → A070 |

#### Handlebars

| Key / page | Printed maker / model | Description / printed specification | Disposition |
| --- | --- | --- | --- |
| A073 / 25 | Ritchey CompLite | ATB competition-series bar made from drawn 2014-T6 aluminum. 4° bend; 560mm; silver; 150gr. | new → A073 |
| A074 / 25 | Ritchey ProLite | ATB competition bar with shock-dissipating construction from butted Easton 70 alloy. 4° bend; 560mm; black or silver; 140gr. | update → 8404 |
| A075 / 25 | Ritchey Pro Lite WCS | Competition bar with shock-absorbing butted Easton 70 tubing; distinctive WCS ano finish. 4° bend; 560mm; not for use with bar ends; 123gr. | update → 8403 |

#### Stems

| Key / page | Printed maker / model | Description / printed specification | Disposition |
| --- | --- | --- | --- |
| A076 / 25 | Ringlé Zooka | ATB stem precision-machined from solid 7075-T6 billet; removable end-clamp; titanium expander and binder bolts. 120, 135, or 150mm; 1, 1 1/8, or 1 1/4in; 0°, 10°, or 17°; black or silver; 270gr. | new → A076 |
| A077 / 25 | Ringlé Zooka Clamp-On | One-piece 7075-T6 alloy clamp-on stem with removable end-clamp, stem-height shims and SRP titanium bolts. 120, 135, 150, or 180mm; 0° or 10°; 1, 1 1/8, or 1 1/4in; several colors. | new → A077 |
| A078 / 25 | Kore Kore | Ergonomic 6061 alloy stem with double-ovalized oversized tube. 175gr; 135mm with 0°, or 135/150mm with 0° or 10°; 1 or 1 1/8in; silver or black. | new → A078 |
| A079 / 25 | Control Tech ControlTech | Custom 6061 T6 aluminum alloy stem. Specify 1, 1 1/8, or 1 1/4in; 0° or 10°; 120, 135, or 150mm; black; 180gr. | new → A079 |

#### Hubs

| Key / page | Printed maker / model | Description / printed specification | Disposition |
| --- | --- | --- | --- |
| B001 / 26 | Ringlé SuperBubba Suspension Hub | One-piece hub shell and axle designed for bearing alignment when clamped in the fork; larger-diameter flanges for shorter, stiffer spokes; full-coverage aero dust caps protect bearing seals. 156 g; 7075-T6 aluminum axle and aluminum hub shell; 32- or 36-hole drilling; black, red, or silver | new → B001 |
| B002 / 26 | Ringlé SuperEight Cassette Hub | Cassette hub with two sets of sealed bearings and a ratchet system; three heavy-duty pawls engage simultaneously. Compatible with Shimano and SRP 7- or 8-speed cassettes; includes shims for both setups. 395 g; 7076-T6 shell; oversized steel axle, cassette body, ratchet mechanism; 32- or 36-hole drilling; also available in 130 mm road size; black, silver, or red | new → B002 |
| B003 / 26 | Ringlé Bubba Front Hub | Front hub with one-piece large-diameter shell precision-machined from 7075-T6 aluminum alloy; traditional flange size; oversized 12 mm axle; serviceable, replaceable sealed cartridge bearings. 115 g; 28- or 32-hole drilling; black or silver | new → B003 |
| B004 / 26 | Ringlé Bubba Rear Hub, Road Freewheel | Rear hub with one-piece large-diameter 7075-T6 aluminum alloy shell, traditional flange size, oversized 12 mm axle, and serviceable sealed cartridge bearings. 165 g; 32-hole drilling; road freewheel; black or silver | new → B004 |
| B005 / 26 | Ringlé Bubba Rear Hub, ATB Freewheel | Rear hub with one-piece large-diameter 7075-T6 aluminum alloy shell, traditional flange size, oversized 12 mm axle, and serviceable sealed cartridge bearings. 165 g; 32-hole drilling; ATB freewheel; available in six-, seven-, or eight-speed; black or silver | new → B004 |
| B020 / 26 | Shimano XTR ATB Hubset | Pair listing; hubs feature Paralax design, specially designed rubber seals, anodized aluminum shell, and compact cassette body. 8-speed rear; 642 g per pair; 32- or 36-hole drilling | held |
| B021 / 26 | Shimano XT ATB Hubset | Pair listing; hubs feature Paralax design, specially designed rubber seals, anodized aluminum shell, and compact cassette body. 8-speed rear; 658 g per pair; 32- or 36-hole drilling | held |
| B022 / 26 | Shimano LX ATB Hubset | Pair listing; hubs feature Paralax design, specially designed rubber seals, anodized aluminum shell, and compact cassette body. 7- or 8-speed rear; 649 g per pair; 32- or 36-hole drilling | held |
| B023 / 26 | Shimano Dura-Ace Road Hubset | Road hubset listing. 8-speed cassette rear; 32-hole listed | held |
| B024 / 26 | Shimano Ultegra Road Hubset | Road hubset listing. 8-speed cassette rear; 28-, 32-, or 36-hole drilling | held |
| B025 / 26 | Shimano 105-SC Road Hubset | Road hubset listing. 8-speed cassette rear; 32- or 36-hole drilling | held |
| B026 / 26 | Campagnolo Record Road Hubset | Road hubset listing. 8-speed Exa rear; 32- or 36-hole drilling | unchanged → 3265 |
| B027 / 26 | Campagnolo Chorus Road Hubset | Road hubset listing. 8-speed Exa rear; 32- or 36-hole drilling | unchanged → 3250 |
| B028 / 26 | Campagnolo Athena Road Hubset | Road hubset listing. 8-speed Exa rear; 32- or 36-hole drilling | unchanged → 3237 |

#### Cassettes

| Key / page | Printed maker / model | Description / printed specification | Disposition |
| --- | --- | --- | --- |
| B006 / 26 | Shimano XTR ATB Cassette | 8-speed cassette, champagne gold. 12–32 or 12–28 | held |
| B007 / 26 | Shimano XT ATB Cassette | 8-speed cassette, chrome plated. 11–28 | held |
| B008 / 26 | Shimano LX ATB Cassette | Silver cassette. 7-speed or 8-speed; 11–28 | held |
| B009 / 26 | Shimano Dura-Ace Road Cassette | Road cassette, champagne gold. 12–21, 13–23, 12–23, 13–26, or 12–25 | held |
| B010 / 26 | Shimano Ultegra HG90 Road Cassette | Road cassette, chrome plated. 12–21, 13–23, 12–23, 13–26, or 12–25 | held |
| B011 / 26 | Shimano 105SC HG70 Road Cassette | Silver cassette. 8-speed: 12–21, 13–23, 12–23, 13–26, or 12–25; 7-speed: 12–28, 13–26, 13–23, 13–21, 12–21, or 13–28 | held |
| B012 / 26 | Campagnolo Steel Exa-Drive Road Cassette | Steel Exa-Drive road cassette. 11–18, 11–21, 12–19, 12–21, 12–23, 12–25, 13–21, 13–23, 13–26, or 14–26 | held |

#### Chains

| Key / page | Printed maker / model | Description / printed specification | Disposition |
| --- | --- | --- | --- |
| B013 / 26 | Shimano Dura-Ace/XTR HG Chain | HG chain for Dura-Ace/XTR.  | held |
| B014 / 26 | Shimano Ultegra HG-91 Chain | HG-91 chain.  | update → 7665 |
| B015 / 26 | Shimano HG-70 Chain | HG-70 chain.  | unchanged → 7568 |
| B016 / 26 | Sedis SL/Campy Contax SCR 80 Chain | SL/Campy Contax SCR 80 chain.  | update → 10742 |
| B017 / 26 | Sedis MTB SC-M55 Chain | MTB SC-M55 chain.  | new → B017 |
| B018 / 26 | Sedis Premium MTB SC-M90 Chain | Premium MTB SC-M90 chain.  | new → B018 |
| B019 / 26 | Sedis Track Chain | Track chain. 1/2 × 1/8 inch | held → 11819 |

#### Rims

| Key / page | Printed maker / model | Description / printed specification | Disposition |
| --- | --- | --- | --- |
| B029 / 27 | Mavic MA 40 | Box-section road clincher rim, hard CD anodized. 700C; 32- or 36-hole drilling; 460 g | update → 5077 |
| B030 / 27 | Mavic Open 4 CD | Shallow aero-section rim, hard CD anodized. 700C; 28-, 32-, or 36-hole drilling; 430 g | update → 5097 |
| B031 / 27 | Mavic Reflex SBP | Silver-anodized rim with S.U.P. and U.B. Control. 700C; 28-, 32-, or 36-hole drilling; 430 g | update → 5107 |
| B032 / 27 | Mavic Reflex TIB | Ti-silver-anodized rim with S.U.P. and U.B. Control. 700C; 28-, 32-, or 36-hole drilling; 480 g | update → 10595 |
| B033 / 27 | Mavic Open S.U.P. CD Ceramic | Shallow aero-section, hard CD-anodized rim with S.U.P. ceramic braking surfaces. 700C; 28-, 32-, or 36-hole drilling; 480 g | update → 10598 |
| B034 / 27 | Campagnolo Omega V | Aero-section road clincher rim, black anodized. 700C; 32- or 36-hole drilling; 435 g | update → 4961 |
| B035 / 27 | Campagnolo Omega 19 | Shallow aero-section road clincher rim, black anodized or silver. 26 inch or 700C; 32- or 36-hole drilling; 370 g | update → 4955 |
| B036 / 27 | Mavic Mach 2 CD 2 | Aero-section, hard-anodized road tubular rim. 700C; 32- or 36-hole drilling; 470 g | update → 5082 |
| B037 / 27 | Mavic Mach 2 Ceramic | Aero-section, hard-CD-anodized rim with ceramic braking surfaces. 700C; 32- or 36-hole drilling; 470 g | new → B037 |
| B038 / 27 | Campagnolo Sigma | Box-section, hard-anodized road tubular rim. 700C; 32- or 36-hole drilling; 365 g | held → 4970,7032,7031 |
| B039 / 27 | Campagnolo Omega 20 | Box-section, hard-anodized road tubular rim. 700C; 32- or 36-hole drilling; 395 g | held → 4957 |
| B040 / 27 | Campagnolo Omega VT | Aero-section, hard-anodized road tubular rim. 700C; 32- or 36-hole drilling; 395 g | update → 4961 |
| B041 / 27 | Mavic 261 SBP | Silver MTB rim. 26 × 26 mm; 32- or 36-hole drilling; 480 g | update → 5072 |
| B042 / 27 | Mavic 230 SBP | Silver MTB rim. 26 × 23 mm; 28-, 32-, or 36-hole drilling; 380 g | new → B042 |
| B043 / 27 | Mavic 230 TIB | Ti-finish MTB rim. 26 × 23 mm; 28-, 32-, or 36-hole drilling; 380 g | new → B043 |
| B044 / 27 | Mavic 231 CD | Hard-anodized MTB rim. 26 × 23 mm; 28-, 32-, or 36-hole drilling; 440 g | update → 5071 |
| B045 / 27 | Mavic 217 TIB S.U.P./U.B. | Ti-finish MTB rim. 26 × 22 mm; 28-, 32-, or 36-hole drilling; 410 g | update → 9977 |
| B046 / 27 | Mavic 117 S.U.P. CD | Hard-anodized MTB rim. 26 × 23 mm; 28-, 32-, or 36-hole drilling; 450 g | new → B046 |
| B047 / 27 | Mavic 121 S.U.P. CD Ceramic | Hard-anodized rim with ceramic braking surfaces. 26 × 28 mm; 36-hole drilling; 530 g | update → 9976 |
| B048 / 27 | Mavic 117 S.U.P. CD Ceramic | Hard-anodized rim with ceramic braking surfaces. 26 × 23 mm; 28-, 32-, or 36-hole drilling; 460 g | new → B048 |
| B049 / 27 | Campagnolo Atek | MTB rim, silver or hard anodized. 26 × 20 mm; 32- or 36-hole drilling; 400 g | update → 4944 |
| B050 / 27 | Campagnolo Stheno | MTB rim, silver or hard anodized. 26 × 22.2 mm; 32- or 36-hole drilling; 425 g | update → 7052 |
| B051 / 27 | Campagnolo Mirox | MTB rim, silver or hard anodized, double eyelets. 26 × 22.2 mm; 32- or 36-hole drilling; 425 g | update → 7053 |

#### Wheel(sets)

| Key / page | Printed maker / model | Description / printed specification | Disposition |
| --- | --- | --- | --- |
| B052 / 27 | Spinergy Rev-X Front Wheel | Wheel uses four pairs of tensioned carbon-fiber spokes, sealed-bearing hubs, and double heat-treated rim. clincher 839 g each; tubular 738 g each; made in USA | held → 11954,11955,11956,11957 |
| B053 / 27 | Spinergy Rev-X Rear Wheel | Rear wheel uses four pairs of tensioned carbon-fiber spokes, sealed-bearing hub, and double heat-treated rim; 8-speed Shimano compatible. clincher 839 g each; tubular 738 g each; made in USA | held → 11954,11955,11956,11957 |
| B054 / 27 | Campagnolo Shamal Front Wheel | Front wheel with 16 radially laced spokes and Record hubs. clincher or tubular; 860 g | held → 6961,6962 |
| B055 / 27 | Campagnolo Shamal Rear Wheel | Rear wheel with 16 radially laced spokes and Record hubs. clincher or tubular; 1165 g | held → 6961,6962 |
| B056 / 27 | Campagnolo Vento Front Wheel | Front wheel with 20 radially laced spokes and Athena hubs. clincher; 930 g | unchanged → 6963 |
| B057 / 27 | Campagnolo Vento Rear Wheel | Rear wheel with 20 radially laced spokes and Athena hubs. clincher; 1190 g | unchanged → 6963 |
| B058 / 27 | Campagnolo Bora Front Wheel | Front wheel with 16 radially laced spokes and high-tech carbon-fiber rim. tubular; 700 g | unchanged → 6954 |
| B059 / 27 | Campagnolo Bora Rear Wheel | Rear wheel with 16 radially laced spokes and high-tech carbon-fiber rim. tubular; 935 g | unchanged → 6954 |

#### Tyres

| Key / page | Printed maker / model | Description / printed specification | Disposition |
| --- | --- | --- | --- |
| B060 / 28 | Continental Continental Grand Prix | Road clincher; 3-ply polyamide; foldable; fast, responsive, light. width options 18, 20, 23 mm; printed weight entry: 165–170–190 g; 140 psi; racing/performance riding | update → 6782 |
| B061 / 28 | Panaracer Panaracer Cat 1 | Road clincher; Kevlar construction; foldable and puncture resistant. width options 20, 23 mm; printed weight entry: 200–215 g; 130 TPI; 125 psi; racing/performance/all condition | update → 10539 |
| B062 / 28 | Michelin Michelin Bi-Synergic | Road clincher; foldable, low-durometer side strip. width options 20, 23 mm; printed weight entry: 205–215 g; 130 TPI; 125 psi; training/racing/all condition | update → 10532 |
| B063 / 28 | Vittoria Vittoria Techno Twin K | Road clincher; foldable, low-durometer side strip. width options 20, 23, 25 mm; printed weight entry: 190, 210, 220 g; approximately 130 TPI; 115 psi; training/racing/all condition | held → 6903 |
| B064 / 28 | Tioga Tioga Proline S | Road clincher; puncture resistant with amber sidewall/grip description. width options 20, 23 mm; printed weight entry: 220, 260 g; 130 TPI; 115 psi; training/racing | update → 11686 |
| B065 / 28 | Ritchey Ritchey Road Force | Road clincher; foldable, responsive, durable sidewall. width options 20, 24 mm; printed weight entry: 180–200 g; 127 TPI; 130 psi; racing/fast riding | update → 8389 |
| B066 / 28 | Panaracer Panaracer Tourguard | Road clincher with Kevlar-lined tread and steel bead. 24 mm; 338 g; 66 TPI; 115 psi; training/fast riding | held → 6843 |
| B067 / 28 | Continental Continental Super Sport | Road clincher; 3-ply polyamide; steel bead; described as bullet-proof. width options 20, 23, 25 mm; printed weight entry: 275–285–295 g; 3-ply polyamide; 110 psi; training/rough roads/all weather | update → 6788 |
| B068 / 28 | Michelin Michelin Performer | Road clincher; comfortable and durable. width options 20, 23, 25 mm; printed weight entry: 280–290–300 g; 130 TPI; 100 psi; training/leisure riding | update → 10533 |
| B069 / 28 | Continental Competition GP26/19 | Road tubular; 5-ply polyamide; fast, light, durable, responsive. model/width text as printed: GP26/19; width interpretation uncertain; 220 g; 170 psi; time trials/triathlons (26-inch) | held → 10415 |
| B070 / 28 | Continental Competition 240 | Road tubular; 5-ply polyamide; extremely durable and puncture resistant. 22 mm as printed in model/width field; 240 g; 170 psi; racing/wet or rough roads | held → 10415 |
| B071 / 28 | Continental Competition GP | Road tubular; 5-ply polyamide; low rolling resistance, puncture resistant. 19 mm as printed in model/width field; 225 g; 170 psi; top-level racing/triathlons | held → 10415 |
| B072 / 28 | Panaracer TourGuard 200 | Road tubular; Kevlar belt; puncture resistant and light. 200 g; 150 psi; training/racing | held → 6843 |
| B073 / 28 | Panaracer TourGuard 240 | Road tubular; Kevlar belt; puncture resistant, light, comfortable. 240 g; 150 psi; training/top touring | held → 6843 |
| B074 / 28 | Panaracer TourGuard 280 | Road tubular; Kevlar belt; puncture resistant and comfortable. 280 g; 150 psi; training/touring/rough riding | held → 6843 |
| B075 / 28 | Continental Sprinter | Road tubular; 3-ply polyamide; puncture resistant, low rolling resistance. 22 mm; 250 g; 170 psi; racing/training | unchanged → 6787 |
| B076 / 28 | Vittoria Corsa CX | Road tubular; 5-ply cotton; durable, rear-differentiated, fast. 22 mm; 250 g; 140 psi; racing/training/rear | held → 6880,9428,10441 |
| B077 / 28 | Vittoria Corsa CG | Road tubular; 5-ply cotton; durable, front-differentiated, fast. 22 mm; 250 g; 140 psi; racing/training/front | held → 6880,9428,10441 |
| B078 / 28 | Continental Giro | Road tubular; 2-ply cotton; durable, economical. 22 mm; 300 g; 120 psi; training/fast riding | update → 10414 |
| B079 / 28 | Vittoria Formula 1 | Road tubular; 3-ply cotton; durable, economical, comfortable. 21.5 mm; 300 g; 120 psi; training/fast riding/recreational | update → 6875 |
| B080 / 29 | Ritchey Alfa-Bite Trail Mix | Hybrid/touring smooth tire, steel bead, non-foldable, skinwall. 700 × 35C: 440 g; 700 × 40C: 470 g | update → 11257 |
| B081 / 29 | Ritchey Cross Bite, Foldable Kevlar Bead | Hybrid/ATB tire with patented inverted-jaw design for smooth, fast riding on pavement or dirt/rough roads; skinwall. 26 × 1.1: 330 g; 700 × 38C: 430 g; foldable Kevlar bead | update → 8391 |
| B082 / 29 | Ritchey Cross Bite, Steel Bead | Hybrid/ATB tire with patented inverted-jaw design for smooth, fast riding on pavement or dirt/rough roads; skinwall. 26 × 1.1: 420 g; 26 × 1.9: 490 g; 700 × 38C: 450 g; steel bead, non-foldable | update → 8391 |
| B083 / 29 | Ritchey Moby Bite | Tire designed for city streets or challenging slick rock; extra-thick, long-wearing rubber compound, tough sidewalls, low-durometer compound for grip. 26 × 2.1 inch; 650 g; steel bead, non-foldable | new → B083 |
| B084 / 29 | Continental Competition Pro 1, Foldable | Continental MTB tire; Tire designed for coarse or hard soil; extra-thick tread rubber for puncture protection, mud release and low rolling resistance. size 26 × 2.125; 650 g; foldable bead | new → B084 |
| B085 / 29 | Continental Competition Pro 1, Steel Bead | Continental MTB tire; Tire designed for coarse or hard soil; extra-thick tread rubber for puncture protection, mud release and low rolling resistance. size 26 × 2.125; 700 g; steel bead, non-foldable | new → B084 |
| B086 / 29 | Continental Competition Pro 2, Foldable | Continental MTB tire; Advanced tire for softer ground; angular profile, added tread rubber for puncture resistance. size 26 × 2.125; 600 g; foldable bead | new → B086 |
| B087 / 29 | Continental Competition Pro 2, Steel Bead | Continental MTB tire; Advanced tire for softer ground; angular profile, added tread rubber for puncture resistance. size 26 × 2.125; 650 g; steel bead, non-foldable | new → B086 |
| B088 / 29 | Continental Leader Pro, Foldable | Continental MTB tire; Designed for controlled high-speed cornering; straight-line stability and puncture resistance. size 26 × 2.0; 530 g; foldable bead | new → B088 |
| B089 / 29 | Continental Leader Pro, Steel Bead | Continental MTB tire; Designed for controlled high-speed cornering; straight-line stability and puncture resistance. size 26 × 2.0; 580 g; steel bead, non-foldable | new → B088 |
| B090 / 29 | Continental Cross Country Pro, Foldable | Continental MTB tire; Versatile MTB tire providing stability, handling, and grip in all conditions. size 26 × 1.9; 530 g; foldable bead | new → B090 |
| B091 / 29 | Continental Cross Country Pro, Steel Bead | Continental MTB tire; Versatile MTB tire providing stability, handling, and grip in all conditions. size 26 × 1.9; 580 g; steel bead, non-foldable | new → B090 |
| B092 / 29 | Wilderness Trail Bikes (WTB) Velociraptor Rear | Rear-specific tire designed for climbing and braking traction in soft dirt, loose gravel, rocks and sand; transition knobs for stable cornering. 26 × 2.1 inch; 625 g; foldable Kevlar bead; blackwall | new → B092 |
| B093 / 29 | Wilderness Trail Bikes (WTB) Velociraptor Front | Front-specific tire for soft-dirt traction, accurate steering under braking, cornering traction, light weight and low rolling resistance. 26 × 2.1 inch; 645 g; foldable Kevlar bead; blackwall | new → B093 |
| B094 / 29 | Wilderness Trail Bikes (WTB) Primalraptor | Race tire for dry or hardpack conditions; low rolling resistance, rounded profile, bi-directional tread for front or rear use. 26 × 1.95 inch; 645 g; foldable Kevlar bead; blackwall | new → B094 |

### Identity limits and reviewed non-duplicates

The following held evidence remains documented rather than creating generic duplicates or new automatic bike links. A held listing is not automatically a sourcing TODO; revisit it when a specific new maker code/photo/crosswalk appears.

| Source entries | Reason / needed discriminator |
| --- | --- |
| A001, A002, A003 | Group-only crank listing omits maker code and cannot select a production revision; retain coded Shimano rows. |
| A019, A020 | No cartridge maker code; 115mm Ultegra and 107mm 105SC/RX100 listings cannot safely select UN71/UN72 or LP/UN52 revisions. |
| A008, A009, A010 | Road group name and arm/ring options omit maker code; do not distribute a retailer specification across coded revisions. |
| A012, A014 | Group-only road crank listing does not distinguish the existing generations. |
| A021, A022, A023 | All three are called cartridges, while existing same-era Record/Chorus/Athena rows include cup-and-ball versions; generic tier alone cannot resolve identity. |
| A028, A029 | Generic XT/STX cartridge listing lacks maker code; dimensions and weight cannot establish UN71 versus UN72 or LP25 versus LP26. |
| A025 | ProLite steel cartridge is close to the later Pro 10295 (195g, 7075 cups), but the name/axle-length crosswalk is unproven; do not duplicate or backdate it. |
| A057 | Carbon-frame listing could correspond to Karbonio 5536 or K652 5543; no maker code distinguishes them and no new duplicate is inserted. |
| A071, A072 | Bontrager-style and Flite-style describe unnamed SDG shapes, not maker model identities; cannot select S7000/S2000/Comp Ti from shape alone. |
| B006, B007, B008, B009, B010, B011, B012 | Tier/speed/finish options do not supply a unique maker cassette code or distinguish all existing models; do not create group-only duplicates. |
| B013 | Dura-Ace/XTR HG chain is uncoded and spans multiple maker chains; do not infer a unique CN model. |
| B019 | Uncoded 1/2x1/8in Sedis track chain may be Sport Track 11819; source omits model and distinguishing construction, so neither duplicate nor backdate it. |
| B020, B021, B022, B023, B024, B025 | Hubsets are sold by group name without maker codes; combined pair weights cannot resolve separate front/rear revisions or be copied to each hub. |
| B038 | Uncoded Sigma tubular 365g cannot select Sigma Strada, Sigma 20 or Pave revisions; hold pending maker code. |
| B054, B055 | Shamal front/rear listings combine clincher and tubular options with one pair of weights; existing 16-spoke models cover both. Do not copy combined-option weights into each variant. |
| B039 | Omega 20 appears under tubular rims, conflicting with the existing attested clincher; do not change tyre type or invent another variant from this contradiction. |
| B052, B053 | Rev-X listing lacks revision crosswalk to later Super Stiff/X-Light rows; its two weights are not independently assigned front/rear. No new family placeholder. |
| B072, B073, B074 | Named TourGuard tubular weight variants are attested, but bare Tour Guard 6843 has unresolved construction/variant identity; reconcile the family with maker evidence before inserting overlapping rows. |
| B066 | Tourguard clincher cannot be safely reconciled to bare Tour Guard row 6843 (220g measured, construction unspecified); avoid guessing or adding a possible family duplicate. |
| B063 | Techno Twin K retailer listing (about 130tpi) differs from Tecno Twin Tread 60tpi maker row; no code/crosswalk confirms equivalence. |
| B069, B070, B071 | Competition GP26/19, Comp 240 and Comp GP lack a maker crosswalk to Competition 10415; preserve diameter versus width and do not invent or merge variants. |
| B076, B077 | Retailer reverses earlier CX-front/CG-rear recommendations and lacks precise Corsa generation code; existing cotton models remain, no role rewrite or family duplicate. |

Specific transcription and ownership decisions:

- Ultegra BB axle is printed **115mm**, not 111mm; no UN71/UN72 choice is inferred. The Shimano XTR BB box prints **74/100mm** and STX **58/95mm**; these unresolved fitment figures are retained in the source inventory, not silently corrected or promoted to model codes.
- Ringlé SuperEight shell is printed **7076-T6**; no silent conversion to 7075. WCS headset finish is titanium-colour anodising, not a titanium body. Concor Light says carbon **frame**; shell/rail material is not extrapolated.
- GP26/19 explicitly has **26-inch** use; it is not a 26mm tyre. CX/rear and CG/front really are printed in this edition, reversing the earlier retailer recommendation; this is recorded without overwriting earlier roles or choosing a Corsa generation.
- 1995/96 and later maker weights/dimensions are separated by edition where they differ, including LOOK/Time pedals, Chris King headsets, Mavic rims and tyre tables. Actual measured legacy weights are retained. Retailer masses do not invalidate the independent measurements.
- New WCS levers/cantilevers are independently named/priced tiers. New ATB seatposts differ from existing 230mm road posts and 350/400mm later Mountain posts; a common Force Directional construction alone does not merge them. Control Tech 235mm road post maps to 11851; the 350mm ATB version is separate.
- Mavic 26-inch 261/217 listings are not the **700c trekking** T261/T217 rows 10182/10184–10186. Reflex clincher evidence maps to 5107/10595, not the tubular Reflex rows 10197/10198/11566/11567. The new 700c Mach 2 Ceramic is distinct from 650c row5083.
- Group/near/parenthetical checks returned four affected configuration/generation pairs and three existing near-code pairs: new WTB front/rear, Onza steel/Ti, SA601 steel/Ti and Mach2 700c versus650c; existing M231 CD/plain/Ceramic (5071/8191/9972) and M261 neutral/CD (5072/8192). They are independently specified configurations/finishes/sizes, not reviewed merges. No new affected parenthetical-name pairs.

### Applied validation

Readback verified **all 49 new and 55 updated components** against the approved proposal: full descriptions, titles, years, maker/category/group, search strings, fixed UUIDs and source **473**. The source label/citation/country and all four maker descriptions are exact; no truncation. Every other existing component row is unchanged, and all existing image-presence flags are preserved.

- Initial application executed **119 guarded statements**: INSERT data_source1, component_brand4, category_brand10, component_detail49; UPDATE component_detail55, exactly as reviewed. A complete second run affected **zero rows in every statement class**.
- Before → after: components **11,085 → 11,134**, makers **634 → 638**, category/brand registrations **1,357 → 1,367**. Groups **328** and categories **24** are unchanged. Bikes **1,349** and specs **23,380** are byte-for-byte unchanged in the saved comparison scope.
- Maintained generator comparison across **108 loaded CSVs / 23,380 specs** is identical before/after: **23,365 unchanged, zero gained/changed, 15 pre-existing Huret Rival losses**, no missing or ambiguous identities, **zero new or removed findings**. No supported NULL backfills arise from these additions. The unrelated 15 baseline losses remain outside this change set.
- **25 existing bike-spec links** reference updated components; all affected linked bike years fit the applied ranges. No override/title/matcher change was required. New rows have valid maker/category registrations and NULL group, and existing ownership/relationships were preserved.
- Full maker/category, model-code and spelling/ownership-alias searches preceded insertion. Applied group/near/parenthetical duplicate checks match the reviewed simulation exactly: **four configuration/generation pairs, three existing near-code pairs, zero parenthetical-name pairs**, retained for the independently documented distinctions above. No new unreviewed affected candidates.
- Preflight rechecked **55 exact before-images**, absence of the **49 new UUIDs/model identities**, brand/source absence, actual field limits, and **119 EXPLAIN plans** before loading. Snapshot checks were READ ONLY; MySQL required EXPLAIN DML outside that transaction after rollback. Maximum applied component description **239** characters, source citation **148**, new eBay search text **45**; exact readback confirms all values fit.

The original three acquired Branford PDFs remain in `/tmp/branford-edition-triage-20261119/`; the1994/95 reconciliation is now applied/validated above; the attributed 1987 reconciliation is also applied and validated above. After application, exact readback, mapping/date/duplicate validation and the zero-change rerun, the completed 1995/96 task's temporary SQL, transcriptions, snapshots, reports and helpers were removed. The full page ledger, source inventory, new IDs/load UUIDs, prior values and identity decisions above are the lasting evidence. No audit SQL is committed.

## Colorado Cyclist components — applied and validated 2026-11-19

**Applied after user approval and validated.** Components only: **4 additions,
14 existing-row updates and one catalogue source**, data_source **472**.
New component IDs **12018,12019,12020,12021**.
At the user's explicit direction, none of the50 bikes from the broader draft
was loaded. No bike,bike_brand,bike_spec,bike_spec_label,CSV,matcher or registry
writes were made. The rejected bike preparation was removed; no bike-loading
follow-up remains. Original source scans/PDF are preserved.

All eight recovered sheets were reviewed for component evidence, including
parts named in printed build/clearance specifications. Sheet8 can identify
the leather Vetta Racing200 without requiring its Nishiki bike to be loaded.
[Original source](https://www.bikeforums.net/classic-vintage/1316218-colorado-cyclist-catalog-1988-a.html);
[direct scans and recovered PDF](../source-hunts.md#branford-and-colorado-cyclist-online-scans-recovered--2026-11-19).
The eight-sheet public fragment does not establish completeness of the
original edition. Sheet numbers refer to recovered order, not printed pages.

### Dating and scope

Keep **attributed1988**: the uploader supplies that year; sheet5 prints an
offer/prices through20January1989, which is not a publication date. Reader
handwriting and the unverified franking/postage imprint do not establish an
edition date. Both Nishiki clearance models are explicitly1987; that is
component-fitment evidence, not permission to change the catalogue attribution.
New component1988–1988 dates attest availability, not production boundaries.
No existing year_from moves later. No new brands/category_brand pairs,
merges/deletes, bike writes or source changes to existing catalogue records
were made. Source472 has US market provenance.

### Evidence and cleanup

Fixed UUIDs and allocated IDs below identify the loaded rows; prior scalar
values remain in the restoration table. Source URLs, edition qualifications,
sheet ledger and full reviewed descriptions are retained here. SQL, baselines,
OCR and temporary review/validation files were removed after exact readback
and the zero-change rerun. The previously requested bound PDF and originals
remain at /tmp/colorado-cyclist-acquisition-20261119/.

### Sheet ledger

| Sheet | Component scope / decision |
| --- | --- |
| 1 | Cover photographs; no model/spec identity inferred from photos. |
| 2 | Fitting/order advice only. |
| 3 | Fitting advice, Cinelli64/66 comparison, custom substitution policy. Reader handwriting dated1989 is not an edition imprint. |
| 4 | Frames and build-package headings reviewed for named-component evidence; complete bikes and framesets excluded from loading at user request. |
| 5 | Geometry, prices and six-group component matrix reviewed; named component evidence retained, no complete-bike or bike-spec ingestion. |
| 6 | All identifiable parts/tyres, closeouts and six price columns reviewed. Tubes, glue/inflators, cleats, cages, pumps, stands, racks, looseforks, spokes/nipples, straps, covers, tools, trainer/rollers excluded from component categories. |
| 7 | All13 rim choices,9 hub columns,2 wheel specials reviewed. Frame-onlyOlmo excluded; stand/pump/helmet/shoe/glove ads excluded. Retailer wheel assemblies not independent manufacturer models. |
| 8 | Two explicitly1987 Nishiki clearance bikes reviewed for component evidence, including Vetta Racing200. Only the component evidence and coded pedals are in scope; no bike rows. Computers and optional Uni-disk cover excluded. |

### Component additions

| ID / title | Maker / category | Sheet | Dates | UUID | Description |
| --- | --- | --- | --- | --- | --- |
| 12018 Specialized Turbo S K4 | 53 Specialized / Tyres | 6 | 1988–1988 | e740f421-f806-422b-9fe5-3e84a9989590 | Kevlar-belted road clincher, offered separately from the unbelted Turbo S; sold with an ultralight inner tube. |
| 12019 Specialized Turbo R | 53 Specialized / Tyres | 6 | 1988–1988 | 02e2911b-b32e-4071-8549-a110e34223cc | Road clincher in700x19 or700x25, offered separately from the Kevlar-belted Turbo R K4; sold with an ultralight inner tube. |
| 12020 Matrix ISO Aero | 507 Matrix / Rims | 7 | 1988–1988 | 40a60fe7-872c-4cff-8450-a3d237d6440c | Aero tubular rim, available separately or in retailer-built wheels with a choice of hubs and DT stainless spokes. |
| 12021 Rigida Score | 512 Rigida / Rims | 6 | 1988–1988 | 58ef7caa-bc4c-4db3-9e36-8045a829dc19 | Clincher rim,28 spoke holes. |

The Turbo S K4 and unbelted Turbo R are separately listed alongside Turbo S
and Turbo R K4; neither is an invented weight-based model. Do not conflate
Turbo R with the separately named Turbo LR. Matrix ISO Aero is a **tubular**
in sheet7, while the bare Matrix ISO in the Chorus wheel special and customer
choice table is a clincher and does not establish ISO C-II5040. Rigida Score
is explicitly named; no matching Score row exists among the Rigida models.

### Existing-component updates and restoration values

All unlisted fields remain fixed, including UUID, brand/category/group and image.
Every change set the component source to Colorado Cyclist472 in
the same before-image-guarded UPDATE. Both retitles also regenerate search_text.
The recorded prior values support restoration if later evidence contradicts
the proposal.

| ID / sheet / reason | Applied changes | Full prior scalar values |
| --- | --- | --- |
| 1401 / 6 / Named Sedis Pro available in the attributed1988 sheet; preserve independent1990 material/spec detail. | {"year_from":"1988","source_ref":472} | {"component_id":1401,"brand_id":216,"title":"Sedis Pro","description":"Sedis Sport Pro chain; fully heat treated, nickel plated, bevelled inner plates; for Maillard/SunTour ultra or standard-spaced freewheels.340g listed. France.","year_from":"1990","year_to":"1990","category_id":6,"group_id":null,"search_text":"Sedis Pro","source_id":"15FA5760-7B25-4F69-9A8D-6535FF2D5F9E","source_ref":471}; image presence=0 |
| 11793 / 6 / Exact200/300mm American Classic post offering,25/27.2mm; preserve later full specifications. | {"year_from":"1988","source_ref":472} | {"component_id":11793,"brand_id":355,"title":"American Classic Classic Seatpost (alloy)","description":"Heat-treated alloy post, one-bolt micro-adjust cradle; 200mm/168g or reinforced 300mm/290g. Diameters 25.0/26.0/26.6/27.0/27.2/27.4mm; silver anodised or gloss-black epoxy finish.","year_from":"1990","year_to":"1990","category_id":18,"group_id":null,"search_text":"American Classic Classic Seatpost","source_id":"ef24cf58-d472-44da-a23e-97335c35eb90","source_ref":471}; image presence=0 |
| 8311 / 6 / Distinct computer-ready TTT stem; no other such stem in current inventory. | {"year_from":"1988","source_ref":472} | {"component_id":8311,"brand_id":61,"title":"3ttt AR84 Computer Ready","description":"3ttt AR84 Computer Ready stem. Laser-drilled to route a cycle-computer wire under the head and down the fork; small Allen screw holds the head jaws open. 90/100/110mm. RJC cat. S90K-S110K. Italy","year_from":"1989","year_to":"1989","category_id":22,"group_id":null,"search_text":"3ttt AR84 Computer Ready","source_id":"491a0683-c28a-11f1-a2df-02fea3763e8d","source_ref":136}; image presence=0 |
| 6985 / 6 / Enrich bare Sugino75 Tyranno row and extend attested availability. | {"year_to":"1988","description":"75 Tyranno disc wheel, alloy/honeycomb construction for tubular tyres;3lb listed. Japan.","source_ref":472} | {"component_id":6985,"brand_id":55,"title":"Sugino 75 Tyranno","description":"Sugino 75 Tyranno, Japan","year_from":"1987","year_to":"1987","category_id":24,"group_id":104,"search_text":"Sugino 75 Tyranno","source_id":"D8BA74EE-C578-4023-AC21-25A00E999BD3","source_ref":1}; image presence=0 |
| 5226 / 7 / ExactTX/Profil/Aero words and clincher section; preserve measured weight. | {"year_from":"1988","year_to":"1988","title":"Wolber TX Profil Aero","description":"TX Profil aero clincher rim, offered separately or in handbuilt wheels;700C named in the Cyclone-hub wheelset.457.5g average measured. France.","search_text":"Wolber TX Profil Aero","source_ref":472} | {"component_id":5226,"brand_id":522,"title":"Wolber TX Profil","description":"Wolber TX Profil, France, 457.5 grams (avg)","year_from":null,"year_to":null,"category_id":16,"group_id":null,"search_text":"Wolber TX Profil","source_id":"5E5173A1-F90A-4B70-8E33-6EE02E01F3D8","source_ref":1}; image presence=0 |
| 575 / 6 / Short-reach Nuovo Record still offered in this catalogue; preserve post-CPSC row identity. | {"year_to":"1988","source_ref":472} | {"component_id":575,"brand_id":11,"title":"Campagnolo 2040/1, Record (short reach, post-CPSC)","description":"Campagnolo 2040/1, Record (short reach, post-CPSC), Italy, 332 grams (Actual),pair (cleaned & w/o grease)","year_from":"1978","year_to":"1987","category_id":3,"group_id":12,"search_text":"Campagnolo 2040/1 Record","source_id":"2E83607D-E755-4D41-8FC9-8532C7C25B90","source_ref":1}; image presence=0 |
| 5681 / 8 / Exact200 model and Racing/leather qualifiers; extend old1980 decade-bucket end without moving its start. | {"year_to":"1988","title":"Vetta Racing 200","description":"Racing200 road saddle with leather cover. Italy.","search_text":"Vetta Racing 200","source_ref":472} | {"component_id":5681,"brand_id":585,"title":"Vetta 200","description":"Vetta 200, Italy","year_from":"1980","year_to":"1980","category_id":17,"group_id":null,"search_text":"Vetta 200","source_id":"D1672D46-0E21-48BB-9A6E-52798FCD0DF8","source_ref":1}; image presence=0 |
| 1390 / 6 / Add explicit black finish, retain independent weight and dimension evidence. | {"description":"50S.L. narrow chain; hollow pins, bevelled heat-treated plates, for Regina alloy6/7-speed freewheels. Black finish offered in1988.1990 retailer272g; prior240g listing.1992:7.2mm overall,0.19kg/m. Italy.","source_ref":472} | {"component_id":1390,"brand_id":190,"title":"Regina Extra Superleggera SL","description":"50S. L. narrow chain; hollow pins, bevelled heat-treated plates, for Regina alloy6/7-speed freewheels.1990 retailer272g; prior240g listing.1992: 7.2mm overall, 0.19kg/m. Italy.","year_from":"1980","year_to":"1992","category_id":6,"group_id":null,"search_text":"Regina Extra Superleggera SL","source_id":"09DA031A-BCA6-4D35-8F94-929652D8A1B6","source_ref":471}; image presence=0 |
| 2869 / 6 / Preserve conflicting maker/retailer width ranges by edition. | {"description":"Anatomic Dural aluminium bar, uniform1.6mm wall; hard-oxidised finish.1986 maker:38–44cm centre-to-centre. Attributed1988 retailer: dark anodised,36–44cm.","source_ref":472} | {"component_id":2869,"brand_id":91,"title":"Modolo Equipe","description":"Anatomic Dural aluminium bar, uniform 1.6 mm wall; hard-oxidised finish. Sizes 38-44 cm centre-to-centre.","year_from":"1986","year_to":"1990","category_id":11,"group_id":null,"search_text":"Modolo Equipe","source_id":"39668AA4-B128-469B-8370-9D5CDA302D2A","source_ref":387}; image presence=0 |
| 278 / 6 / Add listed colour options without asserting hood versus blade colour. | {"description":"Aero brake lever, anatomical design, buffed and clear anodized,24.0mm clamp,118g;236g pair previously listed. Offered in white, black or silver in1988.","source_ref":472} | {"component_id":278,"brand_id":73,"title":"Dia-Compe AGC251, Aero Gran Compe","description":"Aero brake lever, anatomical design, buffed and clear anodized, 24.0mm clamp, 118g; 236g pair (velobase).","year_from":"1986","year_to":"1989","category_id":2,"group_id":78,"search_text":"Dia-Compe AGC251 Aero Gran Compe","source_id":"4E6866D8-F429-48BD-A198-A63E2D43088B","source_ref":447}; image presence=0 |
| 5508 / 6 / Preserve later construction/weight; distinguish earlier available colours. | {"description":"Rilsan shell with steel rails, short frame, Flex Control padding and leather cover.1988: white/black/yellow;1996:black.340g catalogue,358.75g average measured.","source_ref":472} | {"component_id":5508,"brand_id":570,"title":"Selle Italia Turbo","description":"Rilsan shell with steel rails, short frame, Flex Control padding, leather cover, black. 340 g catalogue (358.75 g average measured in database).","year_from":"1980","year_to":"1996","category_id":17,"group_id":null,"search_text":"Selle Italia Turbo","source_id":"D02B1916-FFC9-49A8-B951-A1568452739F","source_ref":357}; image presence=0 |
| 5561 / 6 / Enrich bare model with printed colour choices; retain independent weight. | {"description":"Regal saddle, black or white;395g listed. Italy.","source_ref":472} | {"component_id":5561,"brand_id":572,"title":"Selle San Marco Regal","description":"Selle San Marco Regal, Italy, 395 grams","year_from":"1970","year_to":"2000","category_id":17,"group_id":null,"search_text":"Selle San Marco Regal","source_id":"FB3A5F8B-C1BC-4BB2-B249-34CB46F9736F","source_ref":1}; image presence=0 |
| 5303 / 6 / Add explicit presoftened finish, retain independently recorded construction/colour variants. | {"description":"Presoftened butt-leather saddle, copper-plated nose, cambered back plate, chamfered skirt, large copper rivets, chrome frame;532g,160x260mm. Black/antique brown on chrome; honey on copper(BZL232/324/312). England.","source_ref":472} | {"component_id":5303,"brand_id":529,"title":"Brooks Team Professional","description":"Brooks Team Professional, England. Butt-leather saddle with copper-plated nose, cambered back plate, chamfered skirt, large copper rivets, chrome frame; 532 g. 160 x 260mm; black or antique brown on chrome, honey on copper (BZL 232 / 324 / 312).","year_from":"1970","year_to":"2000","category_id":17,"group_id":null,"search_text":"Brooks Team Professional","source_id":"5FAEA016-7344-4A95-A856-89C76D9E92CA","source_ref":345}; image presence=0 |
| 9920 / 6 / Add stated Poly belt while retaining prior construction/use and weight. | {"description":"Poly-belted tubular, reinforced Pro84 for puncture resistance and rough roads;37threads/cm,21.7mm,90–105psi,255g. France.","source_ref":472} | {"component_id":9920,"brand_id":522,"title":"Wolber Pro SP1","description":"Wolber Pro SP1, France. Tubular, a reinforced version of the Pro 84, puncture resistant and suited to rough roads; 37 threads per cm, 21.7mm section, 90-105 psi, 255g.","year_from":"1985","year_to":"1988","category_id":23,"group_id":null,"search_text":"Wolber Pro SP1","source_id":"71a889cf-d3fa-11f1-a2df-02fea3763e8d","source_ref":422}; image presence=0 |

Three year_from extensions: Sedis Pro1401 and American Classic11793
1990→1988; 3ttt Computer Ready8311 1989→1988. Wolber5226's null dates become
1988–1988. year_to extends Sugino6985 and Nuovo Record5751987→1988 and
Vetta5681's weak1980 bucket end→1988; its1980 start is retained. Vetta200 is
retitled **Vetta Racing200**, adding the leather-cover evidence from the
explicitly1987 Linear. Wolber TX Profil is retitled **Wolber TX Profil Aero**,
preserving457.5g measured. Modolo retains the1986 maker38–44cm range alongside
this retailer's36–44cm; it is not silently widened as a manufacturer claim.
Dia-Compe white/black/silver is retained without guessing hood versus blade
colour. Earlier/later Selle Italia colours and all independent measured weights
are preserved. No new introduction year is inferred from a “new” caption.

### Existing bike-link and duplicate follow-through

The component changes preserve all existing23,380 generated mappings across
108 loaded CSVs, including the baseline23,365 unchanged/15 pre-existing
HuretRival lost matches. All82 existing links to the changed component rows
remain intact, with no date conflicts before or after. No new supported
backfill or override emerges from the component evidence.

No new duplicate pair appears in grouped,near or parenthetical reports.
Existing Turbo5508/5509 generation,5508/5510 configuration and short-reach
575/576 generation pairs remain unchanged. Separately listed tyres and rim
identities are explained above; retailer-built wheels are not new manufacturer
wheel models. No registry or matcher edits are needed.

### Application and validation

The approved21-statement transaction affected exactly **1 data_source insert,
14 component_detail updates and4 component_detail inserts**. Readback matched
every proposed field/UUID; the other11067 existing component rows and
all existing catalogue source records are unchanged. Source472 uses a226-character
citation within its255-character limit; complete dating/pagination qualifications
remain above. A guarded citation correction affected one source row; its rerun
and the full component SQL rerun each affected **zero rows**. Maximum component
description213characters; all six new/retitled search strings use the maintained
helper. Brands, categories, groups and category_brand counts are unchanged;
the four new components have valid category/brand/group references and existing
category_brand membership.

Post-load actual generator comparison across108 loaded CSVs/23,380 specs has
**zero changed mappings**. The23,365 unchanged/15 pre-existing HuretRival
lost-match baseline is preserved. All1349 existing bike rows and23380
stored specs in the baseline are unchanged, with no bike brand or label changes.
All82 affected existing links remain fixed and have no date conflict. No new
duplicate group/near/parenthetical pair was introduced; the three existing
generation/configuration pairs noted above remain distinct. No new supported
NULL backfill emerged, and no bike was loaded.

### Full component mention inventory

182 reviewed mentions, including named parts,72 group-table cells,
six component-price columns and three retailer wheel-build listings. Counts
are mentions, not distinct products. No117-model wheelset multiplication from
the13×9 matrix: rims/hubs are component evidence and assembled wheel packages
remain retailer builds.

<details>
<summary>Every extracted mention and its reconciliation</summary>

| Ref / sheet | Category / printed identity | Decision / candidate IDs | Specification / reason |
| --- | --- | --- | --- |
| 1 / 3 | Handlebars / Cinelli 64 standard-drop bar | unchanged / 2802 | Standard drop; less reach than deep Cinelli66; stock widths38/40/42cm. |
| 2 / 3 | Handlebars / Cinelli 66 deep-drop bar | unchanged / 2806 | Deep drop; about1.5in more reach than standard bar; stock widths40/42cm. |
| 3 / 6 | Tyres / Panaracer Technova Kevlar-belted | unchanged / 6842 | Clincher700x20/25, Kevlar-belted; sold with ultralight tube. |
| 4 / 6 | Tyres / Specialized K-4 | held / 6862,11358 | Kevlar-belted clincher700x25/28; ultralight tube. K-4 is not a complete model identity; Touring K4 and Touring II K4 are not proven crosswalks. |
| 5 / 6 | Tyres / Specialized Turbo S K-4 | added / 12018 | Clincher with Kevlar belt; sold with an ultralight tube. Listed separately from the unbelted Turbo S. |
| 6 / 6 | Tyres / Specialized Turbo R K-4 | unchanged / 11354 | Kevlar-belted clincher, sold with ultralight tube. |
| 7 / 6 | Tyres / Specialized Turbo S | unchanged / 6868 | Clincher700x25; sold with ultralight tube. |
| 8 / 6 | Tyres / Specialized Turbo R | added / 12019 | Clincher700x25 or700x19; sold with ultralight tube. Listed separately from Turbo R K-4. |
| 9 / 6 | Tyres / Specialized Turbo VS | unchanged / 11355 | Clincher700x25, sold with ultralight tube. |
| 10 / 6 | Tyres / Specialized Turbo VR | unchanged / 11356 | Clincher700x25, sold with ultralight tube. |
| 11 / 6 | Tyres / Michelin Hi-Light Pro | unchanged / 6836 | Clincher700x19, sold with ultralight tube. |
| 12 / 6 | Tyres / Michelin Hi-Light Comp | unchanged / 6835 | Clincher700x20/23, sold with ultralight tube. |
| 13 / 6 | Tyres / Michelin Hi-Light Super Comp HD | unchanged / 6837 | Clincher, sold with ultralight tube. |
| 14 / 6 | Tyres / Hutchinson Super Sprint Ribbed | unchanged / 9045 | Ribbed tubular. |
| 15 / 6 | Tyres / Cycle Pro or Panaracer 240 gram | held /  | Kevlar-belted tubular,240g. Retailer offers two possible makers; no named model or maker-specific mapping. |
| 16 / 6 | Tyres / Cycle Pro or Panaracer Kevlar-belted 270/280 gram | held / 9113,11371 | Kevlar-belted tubular270/280g. Possible maker/weight alternatives; weight alone does not prove Cycle Pro270 or Panaracer Record270. |
| 17 / 6 | Tyres / Panaracer 240 Slick | held /  | Kevlar-belted slick tubular240g. Descriptive weight/tread listing lacks a model crosswalk. |
| 18 / 6 | Tyres / Panaracer 200 slick | held /  | Slick tubular200g. Descriptive weight/tread listing lacks a model crosswalk. |
| 19 / 6 | Tyres / Wolber Invulnerable Steel-belted | unchanged / 6918 | Steel-belted tubular. |
| 20 / 6 | Tyres / Wolber Pro SP 1 Poly-belted | updated / 9920 | Poly-belted tubular255g. |
| 21 / 6 | Tyres / Vittoria Mondiale | unchanged / 6891 | Tubular290g. |
| 22 / 6 | Tyres / Vittoria Special Pro-Cotton-Latex tube | unchanged / 6900 | Cotton tubular with latex tube250g. |
| 23 / 6 | Tyres / Vittoria Nuovo Pro-Cotton | unchanged / 6893 | Cotton tubular260g. |
| 24 / 6 | Tyres / Vittoria Corsa CX Cotton | unchanged / 6880 | Cotton tubular240g. |
| 25 / 6 | Tyres / Vittoria Corsa CG Cotton | unchanged / 9428 | Cotton tubular250g. |
| 26 / 6 | Freewheels / Suntour New Winner Pro Ultra-7 | held / 2237,2234,7867 | Ultra seven-speed. Retailer combines New Winner and Winner Pro family names; cannot choose NW/WP identity. |
| 27 / 6 | Freewheels / Suntour New Winner Pro Ultra-6 | held / 2240,7868 | Ultra six-speed. Retailer combines New Winner and Winner Pro family names; cannot choose NW/WP identity. |
| 28 / 6 | Freewheels / Suntour New Winner Pro Standard 6 | held / 2238,2246 | Standard six-speed. Retailer combines New Winner and Winner Pro family names; cannot choose NW/WP identity. |
| 29 / 6 | Freewheels / Shimano Dura Ace SIS seven-speed Freewheel | unchanged / 2222 | Seven-speed SIS threaded freewheel. |
| 30 / 6 | Cassettes / Shimano Dura Ace SIS seven-speed Cassette | unchanged / 1204 | Seven-speed SIS cassette. |
| 31 / 6 | Cassettes / Shimano Ultegra SIS seven-speed Cassette | unchanged / 1199 | Seven-speed SIS cassette. |
| 32 / 6 | Freewheels / Shimano 600 EX six-speed Freewheel | held / 2217,2218 | Six-speed threaded freewheel; generic generation evidence only. No SIS or maker code printed to select MF6207 versus MF6208. |
| 33 / 6 | Shifters / Mavic Retrofriction braze-on | unchanged / 8165 | Braze-on retrofriction shift levers. |
| 34 / 6 | Shifters / Campagnolo Chorus Friction | unchanged / 7027 | Friction shift levers. |
| 35 / 6 | Shifters / Campagnolo C-Record Retrofriction | unchanged / 5970 | Retrofriction shift levers. C-Record Doppler5970 is the existing explicitly retro-friction model, distinct from plain friction5969 and indexed Syncro. |
| 36 / 6 | Shifters / Campagnolo Syncro 1 Shifter braze-on | held / 5973,8812 | First Syncro, braze-on; closeout. Syncro1/first-version numbering is not enough to distinguish reviewed first/second Syncro production versions. |
| 37 / 6 | Chains / Sedisport Black | unchanged / 8765 | Black finish. |
| 38 / 6 | Chains / Sedisport Silver | unchanged / 8765 | Silver finish. |
| 39 / 6 | Chains / Sedis Pro | updated / 1401 | Named Pro chain offered in attributed1988 catalogue. |
| 40 / 6 | Chains / Shimano Uniglide Narrow | held / 7450,7614,7615 | Narrow Uniglide chain. No chain code; no unsupported UG20/UG30/UG50 selection. |
| 41 / 6 | Chains / Dura Ace chain | held / 1412,1413,7231 | Dura-Ace chain. No code, plating or version. |
| 42 / 6 | Chains / Regina 50 SL Black | updated / 1390 | Black finish. |
| 43 / 6 | Handlebars / Cinelli64 38/40/42cm | unchanged / 2802 | 64 in38/40/42cm. |
| 44 / 6 | Handlebars / Cinelli66 40/42cm | unchanged / 2806 | 66 in40/42cm. |
| 45 / 6 | Handlebars / Cinelli65 40cm | unchanged / 2804 | 65 in40cm. |
| 46 / 6 | Handlebars / TTT Competition Gimondi | unchanged / 2752 | Competition, Gimondi bend. |
| 47 / 6 | Handlebars / TTT Competition Merckx | unchanged / 2750 | Competition, Merckx bend. |
| 48 / 6 | Handlebars / Modolo Equipe Dark Anodized | updated / 2869 | Dark anodised,36–44cm listed. |
| 49 / 6 | Stems / Cinelli1-A Silver70–130 | unchanged / 6489 | Silver,70–130mm. |
| 50 / 6 | Stems / CinelliX-A80–130 | unchanged / 6502 | 80–130mm. |
| 51 / 6 | Stems / TTT Computer ready stem | updated / 8311 | Computer-ready stem offered in attributed1988 catalogue. |
| 52 / 6 | Stems / TTT Model84 | unchanged / 6424 | Model84. |
| 53 / 6 | Stems / TTT A R Record | unchanged / 6404 | AR Record. |
| 54 / 6 | Brake Levers / Dia-Compe AGC-251 White/Black/Silver | updated / 278 | White, black or silver offered finishes. |
| 55 / 6 | Brake Levers / Shimano Light-Action Aero | held / 7223,7224 | Aero lever. No BL-L330/L331 code or version. |
| 56 / 6 | Brake Levers / Shimano Ultegra Aero | held / 416,7217 | Aero lever. No code to resolve overlapping BL-6400/BL-6401 variants. |
| 57 / 6 | Brake Levers / CAMPY Cobalto Aero Brake Levers | held / 212,214,231 | Aero brake levers sold as a pair. Cobalto is a brake-set name here; no exact lever generation/code crosswalk. |
| 58 / 6 | Seat Posts / Dura Ace 27.2/25.0 | held / 5893,5894 | 25.0/27.2mm offered. No A/B head version code. |
| 59 / 6 | Seat Posts / Shimano Ultegra27.2/25.0 | held / 5889,5890 | 25.0/27.2mm offered. No A/B head version code. |
| 60 / 6 | Seat Posts / American Classic200mm | updated / 11793 | 200mm, offered in25.0/27.2mm. |
| 61 / 6 | Seat Posts / American Classic300mm | updated / 11793 | 300mm, offered in25.0/27.2mm. |
| 62 / 6 | Brakes / Shimano105Aero short or normal | held / 953,954 | Short or normal reach. Two separately coded reaches; no single-row mapping or new identity. |
| 63 / 6 | Brakes / Campagnolo Delta short reach | held / 560,567 | Short-reach Delta brake set. No C-Record/Croce or version code; individual group columns differ. |
| 64 / 6 | Brakes / Campagnolo Nuovo Record short reach | updated / 575 | Short-reach. |
| 65 / 6 | Brakes / Campagnolo Super Record short-reach recessed | held / 583,7005 | Short reach, recessed mounting. Uncoded listing does not resolve the V2 versus numbered4061/1 configuration; no change was proposed or applied to either row. |
| 66 / 6 | Saddles / Vetta Gel Racing | held / 5683 | Black. Existing generic Vetta Gel5683 does not establish Racing versus Women configuration. |
| 67 / 6 | Saddles / Vetta Gel Women | held / 5683 | Black, women-specific. Existing generic Vetta Gel5683 does not establish Racing versus Women configuration. |
| 68 / 6 | Saddles / Selle Italia Turbo White/Black/Yellow | updated / 5508 | White, black or yellow. |
| 69 / 6 | Saddles / Brooks Team Pro Presoftened Black/Honey | updated / 5303 | Presoftened; black or honey. |
| 70 / 6 | Saddles / San Marco Rolls Black/White | unchanged / 5563 | Black or white. |
| 71 / 6 | Saddles / San Marco Regal Black/White | updated / 5561 | Black or white. |
| 72 / 6 | Wheel(sets) / Sugino75 Tyranno Disc Wheel | updated / 6985 | Alloy/honeycomb/tubular,3lb. |
| 73 / 6 | Rims / Rigida Score clincher rim | added / 12021 | Clincher,28hole, closeout. Named clincher model absent from all existing Rigida entries. |
| 74 / 6 | Rims / Super Champion Professional tubular hard-anodized | held / 9581 | Tubular, hard-anodized,32hole, closeout. Existing Professional302 row lacks a tubular/profile crosswalk and differs in drilling; retain the explicit listing without changing an uncertain configuration. |
| 75 / 6 | Stems / Dura-Ace Handlebar stem | held / 6677 | 80–130mm, closeout. No HS code/generation; do not infer only from current date. |
| 76 / 7 | Rims / Araya CTL370 | unchanged / 8426 | clincher rim; available separately or built with listed hubs. |
| 77 / 7 | Rims / Araya CT19 | unchanged / 4928 | clincher rim; available separately or built with listed hubs. |
| 78 / 7 | Rims / Campagnolo Strada Hardox | held / 4951,4957,4958 | clincher rim. Incomplete model name; wheel matrix omits Lambda/Omega/Strada model crosswalk. |
| 79 / 7 | Rims / Campagnolo Strada Omega Hardox Aero | unchanged / 4961 | clincher rim; available separately or built with listed hubs. |
| 80 / 7 | Rims / Mavic MA-40 | unchanged / 5077 | clincher rim; available separately or built with listed hubs. |
| 81 / 7 | Rims / Mavic Open4CD | unchanged / 5097 | clincher rim; available separately or built with listed hubs. |
| 82 / 7 | Rims / Wolber Profil TX Aero | updated / 5226 | clincher rim; available separately or built with listed hubs. |
| 83 / 7 | Rims / Araya ADX-4 | unchanged / 4927 | tubular rim; available separately or built with listed hubs. |
| 84 / 7 | Rims / Campagnolo Victory Strada | unchanged / 4972 | tubular rim; available separately or built with listed hubs. |
| 85 / 7 | Rims / Matrix Iso Aero | added / 12020 | Tubular aero rim, rim-only or built-wheel sale. |
| 86 / 7 | Rims / Mavic GP-4 | unchanged / 5069 | tubular rim; available separately or built with listed hubs. |
| 87 / 7 | Rims / Mavic GL-330 | unchanged / 5067 | tubular rim; available separately or built with listed hubs. |
| 88 / 7 | Rims / Mavic Mach2CD Aero | unchanged / 8149 | tubular rim; available separately or built with listed hubs. |
| 89 / 7 | Hubs / Shimano600EX | held / 3537,3538,3539,7551 | Built-wheel hub-column choice. Only a printed family/role column; verify configuration/codes before linking or changing rows. |
| 90 / 7 | Hubs / Shimano600Ultegra with cogs | unchanged / 3534 | Built-wheel hub-column choice. Existing3534 covers the600Ultegra6/7-speed hubset; seven-speed cogs are independently represented. |
| 91 / 7 | Hubs / ShimanoDura-Ace threaded | unchanged / 3560 | Built-wheel hub-column choice. Existing3560 explicitly represents the period threaded freewheel hubset. |
| 92 / 7 | Hubs / ShimanoDura-Ace Cassette with cogs | unchanged / 7207,7208 | Built-wheel hub-column choice. Existing7207/7208 rear/front Uniglide hub rows cover this cassette-build choice; do not collapse the two rows. |
| 93 / 7 | Hubs / CampagnoloChorus | unchanged / 3249 | Built-wheel hub-column choice. Period Chorus722/1013249 is represented; the1990 FH-00CH3250 is a later row. |
| 94 / 7 | Hubs / CampagnoloNuovoRecord | held / 3258,3259,3260 | Built-wheel hub-column choice. Only a printed family/role column; verify configuration/codes before linking or changing rows. |
| 95 / 7 | Hubs / CampagnoloC-Record | held / 3240,3241 | Built-wheel hub-column choice. Only a printed family/role column; verify configuration/codes before linking or changing rows. |
| 96 / 7 | Hubs / Mavic556RD | unchanged / 8159 | Built-wheel hub-column choice. Rear556RD is explicitly described within the existing550RD family8159; no new hub row. |
| 97 / 7 | Hubs / PhilWood | held / 3476,3478 | Built-wheel hub-column choice. Only a printed family/role column; verify configuration/codes before linking or changing rows. |
| 98 / 7 | Wheel(sets) / Handbuilt rim/hub matrix | retailer_builds /  | 13 rim choices by9 hub choices; DT stainless spokes,2x/3x,14/15g. Individual makers remain component identities; do not invent117 manufacturer wheel models. |
| 99 / 7 | Wheel(sets) / Suntour Cyclone/Wolber700TXProfil Aero special | retailer_builds /  | Cyclone hubs32H, DT stainless14/15g spokes, Wolber700TXProfilAero clincher rims. Retailer-built wheelset. |
| 100 / 7 | Wheel(sets) / CampagnoloChorus/MatrixIso special | retailer_builds /  | Chorus32H hubs,14g spokes, MatrixIso clincher rims. Retailer-built wheelset; bare MatrixIso does not establish ISO C-II. |
| 101 / 7 | Rims / Matrix Iso clincher | held / 5040 | Clincher in32H Chorus wheelset. Bare ISO is not a proven ISO C-II code crosswalk. |
| 102 / 8 | Pedals / Shimano PD-7401 | unchanged / 3971 | Clipless pedal. |
| 103 / 8 | Pedals / Look Carbon PP-76 | unchanged / 3792 | Carbon pedal. |
| 104 / 8 | Saddles / Vetta Racing200 leather | updated / 5681 | Racing200 leather saddle; explicitly fitted to1987 Nishiki Linear offered for clearance. |
| 105 / 5 | Front Derailleurs / Shimano600Ultegra / Ultegra | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 106 / 5 | Rear Derailleurs / Shimano600Ultegra / Ultegra SIS7-spd | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 107 / 5 | Shifters / Shimano600Ultegra / Ultegra SIS7-spd | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 108 / 5 | Cassettes / Shimano600Ultegra / Ultegra SIS7-spd | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 109 / 5 | Hubs / Shimano600Ultegra / Ultegra | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 110 / 5 | Brakes / Shimano600Ultegra / Ultegra Aero | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 111 / 5 | Headsets / Shimano600Ultegra / Ultegra | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 112 / 5 | Pedals / Shimano600Ultegra / Ultegra w/ToeClips | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 113 / 5 | Cranksets / Shimano600Ultegra / Ultegra | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 114 / 5 | Bottom Brackets / Shimano600Ultegra / Ultegra | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 115 / 5 | Seat Posts / Shimano600Ultegra / SR Laprade | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 116 / 5 | Chains / Shimano600Ultegra / Uniglide | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 117 / 5 | Front Derailleurs / ShimanoDuraAce / DuraAce | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 118 / 5 | Rear Derailleurs / ShimanoDuraAce / DuraAce SIS7-spd | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 119 / 5 | Shifters / ShimanoDuraAce / DuraAce SIS7-spd | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 120 / 5 | Cassettes / ShimanoDuraAce / DuraAce SIS7-spd | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 121 / 5 | Hubs / ShimanoDuraAce / DuraAce | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 122 / 5 | Brakes / ShimanoDuraAce / DuraAce w/BL-7401 | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 123 / 5 | Headsets / ShimanoDuraAce / DuraAce | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 124 / 5 | Pedals / ShimanoDuraAce / DuraAce w/ToeClips | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 125 / 5 | Cranksets / ShimanoDuraAce / DuraAce | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 126 / 5 | Bottom Brackets / ShimanoDuraAce / DuraAce | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 127 / 5 | Seat Posts / ShimanoDuraAce / AmericanClassic | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 128 / 5 | Chains / ShimanoDuraAce / DuraAce | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 129 / 5 | Front Derailleurs / CampagnoloAthena / Athena | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 130 / 5 | Rear Derailleurs / CampagnoloAthena / Athena | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 131 / 5 | Shifters / CampagnoloAthena / Athena | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 132 / 5 | Freewheels / CampagnoloAthena / SuntourWinner7-spd | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 133 / 5 | Hubs / CampagnoloAthena / Athena | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 134 / 5 | Brakes / CampagnoloAthena / Athena | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 135 / 5 | Headsets / CampagnoloAthena / Athena | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 136 / 5 | Pedals / CampagnoloAthena / Athena w/ToeClips | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 137 / 5 | Cranksets / CampagnoloAthena / Athena | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 138 / 5 | Bottom Brackets / CampagnoloAthena / Athena | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 139 / 5 | Seat Posts / CampagnoloAthena / Athena | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 140 / 5 | Chains / CampagnoloAthena / Sedisport | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 141 / 5 | Front Derailleurs / CampagnoloChorus / Chorus | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 142 / 5 | Rear Derailleurs / CampagnoloChorus / Chorus | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 143 / 5 | Shifters / CampagnoloChorus / Chorus | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 144 / 5 | Freewheels / CampagnoloChorus / SuntourWinner7-spd | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 145 / 5 | Hubs / CampagnoloChorus / Chorus | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 146 / 5 | Brakes / CampagnoloChorus / Chorus | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 147 / 5 | Headsets / CampagnoloChorus / Chorus | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 148 / 5 | Pedals / CampagnoloChorus / Chorus w/ToeClips | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 149 / 5 | Cranksets / CampagnoloChorus / Chorus | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 150 / 5 | Bottom Brackets / CampagnoloChorus / Chorus | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 151 / 5 | Seat Posts / CampagnoloChorus / Chorus | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 152 / 5 | Chains / CampagnoloChorus / Sedisport | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 153 / 5 | Front Derailleurs / CampagnoloCrocedAune / Croce d'Aune | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 154 / 5 | Rear Derailleurs / CampagnoloCrocedAune / Croce Syncro7-spd | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 155 / 5 | Shifters / CampagnoloCrocedAune / Croce Syncro7-spd | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 156 / 5 | Freewheels / CampagnoloCrocedAune / SuntourWinner7-spd | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 157 / 5 | Hubs / CampagnoloCrocedAune / Croce d'Aune | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 158 / 5 | Brakes / CampagnoloCrocedAune / Croce d'Aune | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 159 / 5 | Headsets / CampagnoloCrocedAune / Croce d'Aune | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 160 / 5 | Pedals / CampagnoloCrocedAune / Croce d'Aune w/ToeClips | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 161 / 5 | Cranksets / CampagnoloCrocedAune / Croce d'Aune | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 162 / 5 | Bottom Brackets / CampagnoloCrocedAune / Croce d'Aune | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 163 / 5 | Seat Posts / CampagnoloCrocedAune / Croce d'Aune | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 164 / 5 | Chains / CampagnoloCrocedAune / Sedisport | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 165 / 5 | Front Derailleurs / CampagnoloCRecord / C-Record | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 166 / 5 | Rear Derailleurs / CampagnoloCRecord / C-Record Syncro7-spd | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 167 / 5 | Shifters / CampagnoloCRecord / C-Record Syncro7-spd | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 168 / 5 | Freewheels / CampagnoloCRecord / SuntourWinner7-spd | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 169 / 5 | Hubs / CampagnoloCRecord / C-Record | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 170 / 5 | Brakes / CampagnoloCRecord / Cobalto | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 171 / 5 | Headsets / CampagnoloCRecord / C-Record | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 172 / 5 | Pedals / CampagnoloCRecord / C-Record w/ToeClips | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 173 / 5 | Cranksets / CampagnoloCRecord / C-Record | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 174 / 5 | Bottom Brackets / CampagnoloCRecord / C-Record | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 175 / 5 | Seat Posts / CampagnoloCRecord / C-Record | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 176 / 5 | Chains / CampagnoloCRecord / Sedisport | group_corroboration /  | Custom bicycle specification table. Group/family corroboration; no component identity is inferred solely from this cell. |
| 177 / 6 | multiple / ShimanoDuraAce threaded component/group price column | price_corroboration /  | FD braze/clamp, RD, shifters, hubs28/32/36, brakes, headsetEnglish/Italian, BBEnglish/Italian, crank165/170/172.5; pedal; Shimano7-speed sprockets/chain, Campagnolo25/27.2mm posts. Price column alone supplies no additional model code; do not create anonymous parts. |
| 178 / 6 | multiple / ShimanoDuraAce cassette component/group price column | price_corroboration /  | FD braze/clamp, RD, shifters, hubs28/32/36, brakes, headsetEnglish/Italian, BBEnglish/Italian, crank165/170/172.5; pedal; Shimano7-speed sprockets/chain, Campagnolo25/27.2mm posts. Price column alone supplies no additional model code; do not create anonymous parts. |
| 179 / 6 | multiple / Shimano600Ultegra component/group price column | price_corroboration /  | FD braze/clamp, RD, shifters, hubs28/32/36, brakes, headsetEnglish/Italian, BBEnglish/Italian, crank165/170/172.5; pedal; Shimano7-speed sprockets/chain, Campagnolo25/27.2mm posts. Price column alone supplies no additional model code; do not create anonymous parts. |
| 180 / 6 | multiple / CampagnoloCRecord Syncro2 Cobalto component/group price column | price_corroboration /  | FD braze/clamp, RD, shifters, hubs28/32/36, brakes, headsetEnglish/Italian, BBEnglish/Italian, crank165/170/172.5; pedal; Shimano7-speed sprockets/chain, Campagnolo25/27.2mm posts. Price column alone supplies no additional model code; do not create anonymous parts. |
| 181 / 6 | multiple / CampagnoloCrocedAune Syncro2 component/group price column | price_corroboration /  | FD braze/clamp, RD, shifters, hubs28/32/36, brakes, headsetEnglish/Italian, BBEnglish/Italian, crank165/170/172.5; pedal; Shimano7-speed sprockets/chain, Campagnolo25/27.2mm posts. Price column alone supplies no additional model code; do not create anonymous parts. |
| 182 / 6 | multiple / CampagnoloChorus Syncro2 component/group price column | price_corroboration /  | FD braze/clamp, RD, shifters, hubs28/32/36, brakes, headsetEnglish/Italian, BBEnglish/Italian, crank165/170/172.5; pedal; Shimano7-speed sprockets/chain, Campagnolo25/27.2mm posts. Price column alone supplies no additional model code; do not create anonymous parts. |

</details>


# Cross-catalog notes catalogs processed so far

<a id="branford-complete-component-catalogue--prepared-2026-11-19"></a>



## Branford complete component catalogue — applied and validated 2026-11-19

**Applied and validated after explicit user approval.** New components **11793–11819**,
Aerosport brand **725**, Grip Shift brand **726**.
The earlier [tyre pass](#branford-tyre-tables-reconciliation--applied-2026-11-19)
remains applied. Reused source **471**, label “Branford Bike Spring/Summer catalogue
(1990)”, US, and expanded its citation to include the remaining component pages.
[Original PDF](https://timslife.com/brancat/Catalogs/bb1990-01.pdf), printed
1990 Spring/Summer, 36 PDF pages, retained at
`/tmp/branford-acquisition-20261119/branford-1990-spring-summer.pdf`.
This is period retailer evidence of configurations/availability, not proof of
manufacturing introduction or discontinuation. Retailer Part # codes are not
promoted to maker model codes.

### Coverage

All 36 PDF pages are accounted for. Components: pp.12–13 hubs/posts/aero bars/
wheels/shifters; p.14 custom component-package matrix; pp.15–18 Campagnolo and
Shimano; p.19 bars/stems; p.20 saddles/pedals; p.21 freewheels/chains;
pp.22–23 tyres (already applied); pp.24–25 rims/custom wheels; p.26 replacement
chainrings/service parts; PDF p.34 Cinelli geometry chart. Pages 1–11,27–33,35–36
contain blank/editorial/order material, clothing, frames/forks, tools, transport,
care/accessories or electronics outside existing component categories. Page33's
introductory brand mentions add no independently identifiable component.
Custom bike-build matrices are combinations of chosen parts, not factory bicycle
models; no bike catalogue or manufacturer wheelset is invented from them.

The complete non-tyre inventory has **213 mentions**, including repeated package
choices/configurations, **not 213 unique components**. Its full page/specification/
disposition ledger is retained below. The source PDF is retained. Task extraction,
SQL, helper and snapshot files were removed after readback, the zero-change rerun
and mapping/duplicate validation; material prior values remain in these notes.

### Applied changes

**27 new components, 30 existing-row updates, two new brands, seven category/
brand registrations, one source-citation expansion.** No merges, deletions,
CSV edits, generator changes or bike-spec writes. New brands: **Aerosport**
(printed heading; also AEROSPORTS on photographed branding; not Aerospoke) and
**Grip Shift**. Existing maker mappings: Profile for Speed → Profile Design94;
Sun Metal → Sun517; HED → HED.664. Grip Shift ownership is not inferred from this
retailer page. New category registrations: American Classic/Seat Posts,
Profile Design/Seat Posts and Handlebars, Aerosport/Handlebars and Seat Posts and
Wheel(sets), Grip Shift/Shifters.

New rows use source471 and fixed UUID load keys. Dates express attestation;
all are1990–1990 except Accel1989–1990, explicitly described as used in1989 racing.

| ID / title | Category / group | Pages | Dates | Fixed UUID | Applied description |
| --- | --- | --- | --- | --- | --- |
| 11793 American Classic Classic Seatpost (alloy) | Seat Posts / NULL | 12 | 1990–1990 | ef24cf58-d472-44da-a23e-97335c35eb90 | Heat-treated alloy post, one-bolt micro-adjust cradle; 200mm/168g or reinforced 300mm/290g. Diameters 25.0/26.0/26.6/27.0/27.2/27.4mm; silver anodised or gloss-black epoxy finish. |
| 11794 Profile Design Aero Pro SP | Seat Posts / NULL | 12 | 1990–1990 | 8af77cd0-eb44-47c5-a0db-8a9443ab6373 | Forward-offset aero seatpost; moves saddle up to50mm forward for aero-bar use, allowing up to90deg effective seat angle. Silver; 26.8/27.0/27.2mm. USA. |
| 11795 Aerosport Carbon TT | Handlebars / NULL | 12 | 1990–1990 | 2c093b4f-2beb-4542-adf7-a4dc9aaa8a85 | Carbon-fibre time-trial handlebar, 40cm, 120g; internal cable routing, accepts clip-on bars; gloss-black wrapped carbon finish. |
| 11796 Aerosport Carbon Ultra-light | Seat Posts / NULL | 12 | 1990–1990 | 8f55ae3c-87fc-4772-915d-9af31ee6c3db | Carbon-fibre seatpost, 300mm, 135g; one-bolt saddle adjustment, can be cut to length.25.0/26.8/27.0/27.2mm; flat-black carbon-wrap finish. |
| 11797 Aerosport Trialist | Wheel(sets) / NULL | 13 | 1990–1990 | 8806b241-c7f5-426d-ada3-a99f822d0c68 | Compression disc with Kevlar faces/Nomex honeycomb core; sealed high-flange alloy QR hub, replaceable hard-anodised 6061 rim.700C rear 1040g, black/white; 26in front/rear 830g, white; tubular. |
| 11798 Aerosport Accel | Wheel(sets) / NULL | 13 | 1989–1990 | dff9a6c9-92a8-4969-8875-8b5ac12d6871 | Tensioned Kevlar disc for road/track, front/rear options; natural finish. Listed weights:700C710g, 26in525g, 24in408g. Used by top finishers at the1989 World Triathlete Championships. |
| 11799 HED CX Pro | Wheel(sets) / NULL | 13,25 | 1990–1990 | d95afb3c-b52a-4374-b7dd-aa248f116b97 | Carbon-rim wheel built with American Classic hub and DT bladed spokes; 840g.16 spokes for mass starts/rear, 12 for time trials/triathlon.700C and 26in listed. USA. |
| 11800 Grip Shift Pro | Shifters / NULL | 13,18 | 1990–1990 | 4e06e56a-968a-4dfc-a1ec-2eccbc27e605 | Indexed twist shifter with smaller profile and 20% less rotation; replaceable foam grips in six colours. Fits all bar types; cables/instructions included. Order by bar type, rear derailleur and 6/7/8-speed configuration. |
| 11801 Profile Design Aero I | Handlebars / NULL | 19 | 1990–1990 | d5ebc076-3647-4dba-b34a-bc3a37490a60 | Aero bar with flattened drops, pre-drilled for Swift Shift; softer, thicker armrests. Flat black, 425g; fits stems with supplied shims. USA. |
| 11802 Profile Design Aero II | Handlebars / NULL | 19 | 1990–1990 | 96a36a19-3ea0-4e23-a3d3-7e137bf8f118 | Clip-on aero bar; 7/8/9in c/c widths, flat black, 411g. Softer armcups, lower-position shape, pre-drilled for Swift Shift; deluxe cups, hardware and instructions included. USA. |
| 11803 Profile Design Aero III | Handlebars / NULL | 19 | 1990–1990 | 74e1fd27-0e3d-470f-b408-046eabe00295 | Professional time-trial aero bar; five hand positions, adjustable deluxe armrests, pre-drilled for Swift Shift. Neon yellow, 480g; fits stems with supplied shims. USA. |
| 11804 Profile Design Dave Scott Pro | Handlebars / NULL | 19 | 1990–1990 | 4493d67b-c9ed-4da6-bfe6-d9391f02f168 | Time-trial aero bar with airfoil-bladed main bar, adjustable extension and deluxe armrests; Swift Shift included. Height, angle and length adjustable; flat black. USA. |
| 11805 Assos 16 | Rims / NULL | 24,25 | 1990–1990 | a8c51d87-6209-43e6-aa8c-a035343a785b | Tubular aero rim, 16mm, 290g, 28/32 holes; matte black. Heat-treated aluminium-magnesium triangular extrusion, special alloy nipple system; drilled for specified spoke patterns. Switzerland. |
| 11806 Assos 18 | Rims / NULL | 24,25 | 1990–1990 | 974703aa-b362-47fc-a693-edb413b9acfa | Tubular aero rim, 18mm, 310g, 32 holes; matte black. Heat-treated aluminium-magnesium triangular extrusion and special alloy nipple system; drilled for specified spoke patterns. Switzerland. |
| 11807 Sun Mistral 19A | Rims / NULL | 24,25 | 1990–1990 | 91c1ebf5-592b-42c7-8125-83bc64a55447 | Aero tubular rim, 19mm, 310g, 24/28/32 holes; grey. Extruded 6063 aluminium-magnesium-silicon alloy, T6, machined and hard anodised; epoxy-bonded joint.700C wheel builds offered. |
| 11808 Sun Mistral 17A | Rims / NULL | 24,25 | 1990–1990 | 14cb87f6-abfe-46b1-a4ba-7509c72d2319 | Aero tubular rim, 17mm, grey: standard290g/24-28-32h; 26in250g/18-24-28h; 24in230g/24h.6063 alloy, T6, hard anodised, epoxy-bonded joint. Standard size used in 700C builds. |
| 11809 Sun Mistral 13L | Rims / NULL | 24,25 | 1990–1990 | 2abb3d7e-5c0a-412d-95c8-ddc6361fc423 | Box-section clincher rim, 19mm, 400g, 32/36 holes; grey. Extruded 6063 aluminium-magnesium-silicon alloy, T6, machined/hard anodised; epoxy-bonded joint. |
| 11810 Sun Mistral 14A | Rims / NULL | 24 | 1990–1990 | f4b8c92a-1210-4b6e-bc3b-ed3ba2693a26 | Sun Metal Mistral alloy rim marked14-A in the product photograph. Cross-section illustrated beside13-L, 19-A and 17-A; weight, dimensions and drilling are not specified. |
| 11811 Campagnolo Sigma Pave Chromium | Rims / NULL | 24,25 | 1990–1990 | eefbd35c-245c-4879-bb6b-683f999385f4 | Tubular box-section rim, 22mm, 365g, 32 holes; chromium finish. Supplied for rough-road wheel builds. |
| 11812 Campagnolo Delta XL Strada | Rims / NULL | 24,25 | 1990–1990 | 8ee5b474-3d46-4008-9b58-68df4a9451a2 | Clincher box-section rim, 22mm, 375g, 32 holes; chromium finish. Listed for rough-road/fast-riding wheel builds. |
| 11813 Campagnolo C-Record Century Delta | Brakes / 76 | 15 | 1990–1990 | 755d1a9f-c9e7-4b85-b5d6-429cb97debb3 | C-Record Century Delta brakeset with levers and cables; hand-finished and polished, gunmetal bluish-grey anodised finish. Limited-quantity offering. |
| 11814 Campagnolo C-Record Century front derailleur | Front Derailleurs / 76 | 15 | 1990–1990 | 9cf6e611-bf18-413b-a752-d76e0b1b30f5 | C-Record Century front derailleur, braze-on mounting; hand-finished/polished gunmetal bluish-grey anodised finish. Limited-quantity offering. |
| 11815 Campagnolo C-Record Century rear derailleur | Rear Derailleurs / 76 | 15 | 1990–1990 | 6957bdb4-1564-49a4-812b-14f7e056679a | C-Record Century rear derailleur; hand-finished/polished gunmetal bluish-grey anodised finish. Limited-quantity offering; precise maker model code not printed. |
| 11816 Campagnolo C-Record road chainrings | Chainrings / 76 | 15,17,26 | 1990–1990 | dd618f34-df5c-47df-ab60-bb9eb50114fa | Replacement road chainrings for C-Record; 39-54T options. Service list specifically offers39/42/52/53/54T; outer rings also offered with custom hand engraving. |
| 11817 Campagnolo Croce d'Aune / Chorus chainrings | Chainrings / NULL | 16 | 1990–1990 | ed6e5480-f184-43ca-ac99-201b3ef2db50 | Replacement chainrings listed jointly for Croce d'Aune and Chorus, 39-54T options; other tooth counts available with complete cranksets at extra cost. |
| 11818 Campagnolo Athena road chainrings | Chainrings / 5 | 17,26 | 1990–1990 | 581b08ff-b31d-4335-b67e-e6765281c118 | Replacement road chainrings for Athena; 42-53T options. Service list specifically offers42/52/53T. |
| 11819 Sedis Sport Track | Chains / NULL | 21 | 1990–1990 | c9c03e4d-84e5-4287-88f7-0514c7457a34 | Track chain for 1/8in-width cogs; bevelled plates, fully heat treated; 370g. France. |

### Existing rows: applied values

Every changed row received source_ref471 in its guarded update. Unchanged
corroborations keep their existing provenance. Only3179 is retitled (old title
and search_text “American Classic”, applied “American Classic Classic Hubs”);
its search_text is regenerated with the maintained helper. No year_from moves
later. Other titles, UUIDs, maker/category/group and unlisted fields stay fixed.

| ID / title | Old dates → applied | Prior source_ref | Pages | Applied description |
| --- | --- | --- | --- | --- |
| 3179 American Classic | 1980–1980 → 1980–1990 | 1 | 12 | Replaceable sealed-bearing alloy QR hubs; front 200g/rear 250g; 12/16/18/24/28/36 holes. Silver anodised or gloss-black epoxy; 135mm MTB version. Pair or individual hubs; black cam-action skewers offered. |
| 1481 Campagnolo C-Record Century | 1991–1992 → 1990–1992 | 1 | 15 | C-Record Century crankset; hand-finished/polished gunmetal bluish-grey anodised arms.170/172.5mm; 42x52 or42x53T, other rings optional. Limited-quantity offering. |
| 1487 Campagnolo Chorus | 1988–1991 → 1988–1991 | 110 | 16,17 | Chorus double, 135BCD, 170/172.5/175mm, 39-54T; 20mm pedal collar; 706/101, C040(C071/C072).692.5g avg measured. Silver-speckled graphite option sold as Chorus Carbon in 1990; 170/172.5mm with 42x52/53T. |
| 4106 Campagnolo Chorus (short cage, graphite finish) | 1990–1991 → 1990–1991 | 1 | 17 | Short-cage Chorus rear derailleur in silver-speckled graphite finish, sold as Chorus Carbon; 198g listed. Part of the limited-quantity graphite-finish group. |
| 565 Campagnolo BR-02CH, Chorus Monoplaner | 1987–1993 → 1987–1993 | 311 | 16,17 | BR-02CH Chorus Monoplaner; 395g; 715/100, C500(C051/C052). 1993 reach 40.75-51.2mm. Standard or silver-speckled graphite finish; latter sold as Chorus Carbon with levers/cables in 1990. |
| 7031 Campagnolo P0071, Sigma Pave | 1991–1992 → 1990–1992 | 17 | 24 | P0071 Sigma Pave:22mm Hardox tubular, 365g, 32/36h, patented double eyelets; 7075T6 in 1992.1990 retail list:22mm, 365g, 32h, grey box section. Dropped from1993 range. |
| 4970 Campagnolo Sigma Strada | 1987–1993 → 1987–1993 | 343 | 24,25 | P0091 Sigma Strada, 22mm Hardox tubular; manufacturer335g, legacy380g listing.1990 retailer:330g, 28/32h, grey box section; used for racing, criteriums and training. |
| 4957 Campagnolo Omega 20 (Omega Strada Hardox) | 1988–1995 → 1988–1995 | 22 | 24,25 | Omega20/Omega Strada Hardox; hard-anodised rim.1991 P0171 tubular395g/P0172 clincher430g.1990 Omega Strada Box clincher:20mm, 430g, 32h, matte black.1995 range retains395g tubular/430g clincher. |
| 4961 Campagnolo Omega Strada "V Profile" | 1988–1995 → 1988–1995 | 22 | 24,25 | Omega Strada V-profile rim; 1991 P0451 tubular395g/P0222 clincher440g, no eyelets.1990 Omega Strada Aero clincher:20mm, 440g, 32h, matte black. Legacy measured average417.5g. |
| 2802 Cinelli 64 Giro d'Italia (80's model) | 1980–1988 → 1980–1990 | 23 | 19,34 | Mod.64 Giro d'Italia road bar; 142mm drop/78mm reach.38/40cm in 1982, 42cm added c.1984; 1990 lists38/40/42cm and 335g.40cm specimen measured 324g. |
| 2804 Cinelli 65 Criterium | 1973–1999 → 1973–1999 | 376 | 19,34 | Mod.65 Criterium road bar; earlier maker specs 147mm drop/77mm reach; 38/40cm, 42cm added c.1984.1990 chart:156mm drop/110mm reach, 38/40/42cm, 335g listed.305.5g avg measured; 65/AIR is separate. |
| 2812 Cinelli 67 Pista | 1980–1996 → 1980–1996 | 357 | 19,34 | Mod.67 Pista track bar, 39cm.1990: 172mm drop/110mm reach, 335g; used with 2A stem. Later1996 maker listing:163mm drop/83mm reach. |
| 2816 Cinelli 62 Los Angeles | 1980–1999 → 1980–1999 | 353 | 19 | Mod.62 Los Angeles, formerly L. A.84/Texas; cold-bent drawn alloy tube, 40/42cm.1990 LA84 listing:330g; for triathlon/time trials with clip-ons and 24/26in front wheels; horns can be cut to length. |
| 6489 Cinelli 1A (winged "C" logo) | 1978–1988 → 1978–1990 | 262 | 19 | 1A alloy road stem, winged-C family; 293g avg measured.1982: 22/22.2mm quill, 7-14.5cm.1990: 26.4mm bar clamp, silver, 7-14cm extension, 292g listed. Printed increment wording is inconsistent. |
| 7097 Cinelli 2A, Pista | 1978–1996 → 1978–1996 | 357 | 19 | 2A alloy track stem; 26.4mm bar clamp, silver; 1990 lengths10/11/12cm, 292g. Earlier listings offer10-13cm. Alloy successor to the steel pista stem. |
| 6502 Cinelli XA | 1980–2000 → 1980–2000 | 357 | 19 | XA 6000-T6 alloy road stem, steel expander/stainless bolt; 22.2mm quill, 73deg.1990: 26.4mm bar clamp, 80-130mm, satin silver, 274g.1996: 90-135mm, 280g(110mm), black optional. |
| 5495 Selle Italia L. Turbo (Lady Turbo) | 1980–1988 → 1980–1990 | 422 | 20 | Lady/Women's Turbo: wider back, shorter nose, extra padding, dense urethane pad and buffalo-hide cover; black suede or smooth white.352g measured specimen. |
| 5563 Selle San Marco Rolls | 1980–1988 → 1980–1990 | 262 | 20 | Rolls saddle; water-buffalo hide over nylon shell/dense urethane pad, hand-polished22kt-gold trim. Black suede or smooth white.1990 retailer267g; prior listing 360g. |
| 3838 Mavic 646 LMS, SSC | 1990–1991 → 1990–1991 | 121 | 20 | 646 LMS/SSC Look-cleat pedal; sealed/needle bearings, adjustable tension, 9/16x20.1990 dealer:carbon/alu body, 440g pair, 0-10deg lateral float, 32deg cornering. Maker:480g pair, 0-5deg heel movement; legacy496g listing. |
| 3792 LOOK Carbon PP76 | 1988–1990 → 1988–1990 | 334 | 20 | PP76 Carbon: carbon lever, Calypso alloy body, shortened cold-forged axle, sealed needle/ball bearings; 29deg lean, 0.7-1.2m/kg, black cleat. 217g listed; 439g avg pair measured; 1990 dealer 434g pair, red. Violet PP76/V also offered in 1990. |
| 10035 LOOK PP96 Carbo Pro | 1990–1990 → 1990–1990 | 334 | 20 | PP96 Carbo Pro; Calypso alloy body, profiled carbon lever, red epoxy, cold-forged axle, ball bearings/labyrinth seal; 200g, 32deg lean, 0.7-1.2m/kg tension. New red ARC cleat gives9deg float; black cleat gives fixed position. |
| 2156 Regina Extra America (6 speed) | 1980–1980 → 1980–1990 | 1 | 21 | America 6-speed freewheel; matte-silver cogs, splined removal; 375g listed. Syncro compatible; recommended with Regina CX chain. A 15-20T range is listed. |
| 2160 Regina Extra America Superleggera (6 speed) | 1988–1988 → 1988–1990 | 262 | 21 | America Superleggera 6-speed freewheel; heat-treated alloy cogs on standard America body, black, 275g listed. For light competition wheels; Regina50SL hollow-pin chain recommended. |
| 2072 Campagnolo aluminum (6 speed) | 1980–1988 → 1980–1990 | 262 | 21 | Six-speed alloy freewheel; heat-treated alloy cogs/body, splined sprockets, 12-28T.1990 retailer175g; 156g measured specimen. Recommended with Regina CX/CXS chain. |
| 2075 Campagnolo 7 speed narrow | 1988–1991 → 1988–1991 | 110 | 21 | Servizio Corsa Compact 7-speed alloy freewheel; 1990 listed as7-speed narrow, heat-treated alloy cogs/body, 175g family listing. Specimen144g measured with 13-19T. Recommended with Regina CX/CXS chain. |
| 1401 Sedis Pro | NULL–NULL → 1990–1990 | 1 | 21 | Sedis Sport Pro chain; fully heat treated, nickel plated, bevelled inner plates; for Maillard/SunTour ultra or standard-spaced freewheels.340g listed. France. |
| 8765 Sedis Sedisport | 1979–1988 → 1979–1990 | 391 | 21 | Sedisport 1/2x3/32 derailleur chain, 114/116links; gold/black/silver, hardened pins, 335g earlier listing; ultra/standard freewheels.1990 Sport Black:surface-heat-treated bevelled inner plates, 330g. |
| 1384 Regina CX / CX-S | 1980–1992 → 1980–1992 | 190 | 21 | CX/CX-S nickel-plated, fully heat-treated chains; shaped plates, chromized pins.1990 CX339g/CXS325g; CXS curved backplates for ultra7.317.5g avg measured; 1992 CX-S 7.2mm overall, 0.23kg/m, compact7/8-speed. |
| 1390 Regina Extra Superleggera SL | 1980–1992 → 1980–1992 | 190 | 21 | 50S. L. narrow chain; hollow pins, bevelled heat-treated plates, for Regina alloy6/7-speed freewheels.1990 retailer272g; prior240g listing.1992: 7.2mm overall, 0.19kg/m. Italy. |
| 1290 Shimano Dura-Ace 7400 | 1985–1998 → 1985–1998 | 1 | 18,26 | Dura-Ace7400 road chainrings; replacement round rings offered 39/42/52/53/54T; general ordering range 39-54T. Distinct from older Dura-Ace and later7700/track rings. |

### Identity and specification decisions

- American Classic3179 is a bare maker-only hub record; enrich its Classic hub
  family and retain its earlier1980 bucket start. The page says sold since1987;
  that does not prove a manufacturing introduction. Skewers are replacement
  hardware, not an independent complete hub.
- HED CX Pro is an840g built spoked carbon-rim wheel with American Classic hub
  and DT blades, not disc-wheel6969. Aerosport Accel weights read700C710g,
  26in525g,24in408g. Trialist configurations are700C rear1040g and26in830g.
- C-Record Century is explicitly offered in1990; extend crank1481 back from1991
  and add the named Century Delta/FD/RD configurations. Do not backdate unnamed
  Century hubs/headsets3239/2953 or conflate Century with990 Century2280/4089 or
  Centaur2285/4105. No unprinted maker RD code is invented.
- “Chorus Carbon” is a silver-speckled graphite finish, not carbon-fibre
  construction. Fold crank/brake options into1487/565 and enrich existing
  graphite RD4106; preserve692.5g measured crank average and exact1993 brake
  reach40.75–51.2mm. The graphite front is not sufficiently coded to identify
  Croce graphite2289 versus Chorus2286: no duplicate front is inserted.
  Hand engraving/pantographs are custom finishes, not independent components.
- Cinelli64 maps to1980s26.4 family2802; retain324g actual versus335g retail.
  Generic66 does not distinguish logo variants2806/2808. Extend1A6489 family
  evidence without claiming a photographed winged-C logo. Correct2A7097's
  mislabelled22.2mm bar clamp to the explicitly printed26.4mm; retain earlier
  10–13cm and distinguish1990 lengths10/11/12cm. XA6502 has26.4mm clamp here,
  not the separate26.0mm6503 configuration. LA84/Los Angeles/Texas already
  crosswalks to2816; CI-62 is still a retailer SKU.
- The1990 geometry chart gives65 reach110/drop156 and67 reach110/drop172mm;
  retain earlier maker65 reach77/drop147 and later1996 maker67 reach83/drop163
  as dated differences. The inconsistent1A increment wording is not silently
  converted into a claimed set of extension lengths.
- The Rolls page does not print the maker; name and characteristic gold trim
  identify Selle San Marco5563. Preserve prior360g separately from267g retail.
  Named Women's Turbo supports5495 and its352g actual, with no new weight
  inferred. Generic Turbo263g does not distinguish5508/5509/5518; no change.
- Mavic646 retains maker480g/pair and0–5deg heel movement separately from dealer
  440g/pair and0–10deg lateral float; weight/measurement conventions may differ.
  Keep legacy496g. Carbon-lever red PP76 maps to3792, preserving217g listed,
  439g measured pair and violet PP76/V; dealer434g/pair is separate. Plain3791
  is not resolved. PP96 maps to10035, not PP196/PP296. PP66 maker245g versus
  dealer530g/pair is retained as a unit/version difference without overwriting.
- Sigma Pave Hardox7031 is attested1990 before the1991 maker table. Chromium
  Pave is a separately listed finish. Delta XL Strada22mm375g chromium remains
  distinct from old Delta Strada Chromium4959(450g) and Omega XL Hardox4958;
  do not assume an unprinted cross-name alias. Sun Mistral14-A is a named
  photograph-only rim; no price, dimensions, weight or drilling are inferred.
- Regina ordinary6-speed2156 and SL6-speed2160 can be enriched. Seven-speed
  legacy2157 has a speculative Superleggera qualifier; the ordinary/SL7 and
  later1992SL2203 crosswalk remains unresolved. Preserve Campagnolo alloy6
  2072's156g actual versus175g retail and Compact7 narrow2075's144g actual,
  13–19T. Normal7-speed2073 is unchanged. Maillard Super Course is not a printed
  700/Plus crosswalk for2125/2127; unbranded West German track cogs gain no maker.
- Sedis Pro1401 has no prior dates/links: set the attested1990 only. Sedisport
  8765 retains gold/silver/black variants and earlier335g versus Sport Black330g.
  Sport Track is370g for1/8in-width cogs; the retailer's “pitch” wording is not
  converted into an incorrect1/8in chain pitch. Regina CX/CXS1384 and50SL1390
  retain measured/earlier weights and1992 dimensions alongside1990 figures.
- Road chainring families are explicitly sold: C-Record39–54T, Croce/Chorus
  39–54T, Athena42–53T, Dura-Ace7400 replacements39/42/52/53/54T. Do not assign
  old144BCD Campagnolo753 or later2000 nine/ten-speed identities to these rows,
  and do not invent unprinted BCDs or manufacturer codes. Swift Shift is a
  lever-mounting/cable kit, not an independently complete shifter.
- Previously recorded tyre identity limits and dates remain unchanged.

### Validation

The approved guarded file executed **69 statements**: one source-citation update,
two brand inserts, seven category/brand inserts,30 component updates and27 inserts,
plus transaction boundaries. Counts matched exactly. Source471 was reused;
component rows increased10856→10883. Exact readback matched all57 changed/new
rows, including descriptions, dates, identity/group, search text and provenance.
All other component fields/rows and all bikes/specs matched the saved baseline.
New/retitled search text matches the maintained helper; maximum description242
characters. A complete rerun affected **zero rows** in every table.

The actual generator/live comparison across **108 loaded CSVs /23,380 specs**
exactly reproduces the baseline:23365 unchanged and15 pre-existing Huret Rival
lost matches; no gained/changed mapping, missing spec or ambiguity. Direct before/
after generator plans also show zero mapping changes. All110 existing links to
changed rows were checked. No new supported bike link or override emerged, and
no bike data was written. Prior tyre additions11791/11792 and Oscar X link18354
remain intact.

Post-load grouped/near/parenthetical duplicate checks expose **no new pair** in
the57-row affected scope. The existing pairs remain generation, configuration or
variant distinctions:2800/2802,2801/2802;4106/4107,4106/4108;6487/6489,6488/6489;
2072/2073;2156/2157;2811/2812;5563/5564;6502/6503. No merge/delete was needed.
Maker/category/group references and date ordering pass. The single existing
linked-date flag remains bike_spec14997 (1987 Peugeot PY CA W 'Chorus',
Campagnolo Chorus42x52 →1487, currently1988–1991); the1990 retailer adds no
new1987 date evidence, so neither that link nor the bounds were altered.
No new date conflict appeared.

### Exact prior descriptions

For restoration, retain the old dates/source refs above and these old descriptions.
Existing UUID, maker/category/group and unlisted fields were not changed.
The sole former title/search_text was3179 “American Classic”, recorded above.

| ID | Prior description |
| --- | --- |
| 3179 | American Classic, United States |
| 1481 | Campagnolo C-Record Century, Italy |
| 1487 | Campagnolo Chorus, Italy, 692.5 grams (avg) Chorus brochure (Apr 1988): 706/101, 135 BCD, 170/172.5/175, rings 39-54, 20 mm pedal collar. DPC88: C040 (C071/C072). |
| 4106 | Campagnolo Chorus (short cage, graphite finish), Italy, 198 grams |
| 565 | Campagnolo BR-02CH, Chorus Monoplaner, Italy, 395 grams Chorus brochure (Apr 1988): 715/100 brake subgroup, Mono-Planer System. DPC88: C500 (C051/C052). 1993 Range: BR-02CH Monoplaner, 40.75-51.2 mm. |
| 7031 | Campagnolo P0071, Sigma Pave, Italy, 365 grams (Spec). 22 mm tubular rim, Hardox anodised, 32/36 h, double patented eyelets. Rims catalogue Jan 1991. 1992 Rims Range: 7075 T6. Dropped from the 1993 Range. |
| 4970 | Campagnolo Sigma Strada, Italy, 380 grams, P0091, 22 mm Hardox tubular, 335 g. |
| 4957 | Campagnolo Omega Strada Hardox, Italy, 395-430 grams. Hard-anodised clincher rim. Jan 1991 rims catalogue: P0171 tubular 395 g, P0172 clincher 430 g. 1995 range: Omega 20 tubular 395 g and clincher 430 g; Omega 19 and Omega V continue. |
| 4961 | Campagnolo Omega Strada "V Profile", Italy, 417.5 grams (avg) Jan 1991 rims catalogue: P0451 tubular 395 g, P0222 clincher 440 g, no eyelets. |
| 2802 | Cinelli 64 Giro d'Italia (80's model), Italy, 324 grams (Actual), for 64-40. Drop 142mm, reach 78mm; 38 or 40 cm in the 1982 Il Grande Ciclismo brochure, 38, 40 or 42 cm in its c. 1984 printing. |
| 2804 | Cinelli 65 Criterium, Italy, 305.5 grams (avg). Drop 147mm, reach 77mm; 38 or 40 cm in the 1982 Il Grande Ciclismo brochure, 38, 40 or 42 cm in its c. 1984 printing. The 65/AIR Criterium Ovalizzata is the Cinelli Aero. |
| 2812 | Cinelli 67 Pista, Italy. Track bar, 39 cm, drop 163mm, reach 83mm. |
| 2816 | Cinelli 62 Los Angeles, Italy. Mod. 62 drop bar in drawn, cold-bent alloy tube, 40 or 42 cm; listed as Mod. 62 Texas in a copy of the Il Grande Ciclismo brochure, as Los Angeles (formerly L.A. 84) in La Bicicletta Guida 88. |
| 6489 | Cinelli 1A (winged "C" logo), Italy, 293 grams (avg) 1982 Cinelli brochure: 22 and 22.2 mm, 7 to 14.5 cm. |
| 7097 | Cinelli 2A, Pista, Italy. Alloy track stem, 22.2 mm bar clamp, 10 to 13 cm; the alloy successor to the steel pista stem. Il Grande Ciclismo brochure, 1982. |
| 6502 | 6000-T6 aluminium alloy road stem with steel expander and stainless bolt, silver anodised (black optional), 90-135 mm extension, 22.2 mm quill, 73 degree, 280 g (110 mm). |
| 5495 | Selle Italia L. Turbo (Lady Turbo), Italy, 352 grams (Actual) |
| 5563 | Selle San Marco Rolls, Italy, 360 grams |
| 3838 | Mavic 646 LMS, SSC, France, 496 grams. Clipless pedal on the Look cleat with the Mavic float system: 0-5 degrees of heel movement, adjustable by degree or lockable; needle and sealed bearings; 9/16 x 20, 480 g the pair. |
| 3792 | LOOK Carbon PP76, France, 217 g (439 g avg pair measured). Competition pedal, carbon lever, "calypso" alloy body, shortened cold-forged axle on needle / ball bearings, sealed, 29 deg lean, 0.7-1.2 m/kg; red, violet (PP 76/V) in 1990. |
| 10035 | LOOK PP96 Carbo Pro, France, 200 g. Fourth-generation Look pedal, new design: Calypso alloy body, profiled carbon lever, red epoxy, cold-forged axle on ball bearings, labyrinth seal, 32 deg lean, 0.7-1.2 m/kg; black cleat or new red ARC cleat. |
| 2156 | Regina Extra America (6 speed), Italy |
| 2160 | Regina Extra America Superleggera (6 speed), Italy |
| 2072 | Campagnolo aluminum (6 speed), Italy, 156 grams (Actual). Six sprockets splined on the freewheel body, any range from 12 to 28T. |
| 2075 | Campagnolo 7 speed narrow, Italy, 144 grams (Actual), 13-19t. The Servizio Corsa Compact 7-speed of the 1988 dealer catalogue. |
| 1401 | Sedis Pro, France |
| 8765 | Sedis Sedisport, France. Derailleur chain, 1/2" x 3/32", 114 or 116 links. Gold, black or silver finish, hardened pins, 335 g; for narrow-spaced (ultra) and standard freewheels. |
| 1384 | Regina CX / CX-S, Italy, 317.5 grams (avg). Narrow index chain with shaped plates and chromized pins for compact 7 and 8 speed freewheels; 50 CX-S 7.2mm overall, 0.23kg/m (1992). |
| 1390 | Regina Extra Superleggera SL, Italy, 240 grams. Listed in 1992 as the 50 S.L.: 7.2mm overall, 0.19kg/m. |
| 1290 | Shimano Dura-Ace 7400, Japan |

Prior source471 citation: https://timslife.com/brancat/Catalogs/bb1990-01.pdf (printed/PDF pp.22-23; cover: 1990 Spring/Summer). Oscar X also attested in 1989 Bianchi catalogue, source325, Mondiale specification table.

Applied source471 citation: https://timslife.com/brancat/Catalogs/bb1990-01.pdf (1990 Spring/Summer; 36 PDF pages; components pp.12-26, bar chart PDF p.34). Oscar X also attested in 1989 Bianchi, source325, Mondiale specification table.

<details>
<summary>Complete non-tyre page inventory and dispositions (213 mentions)</summary>

Printed specifications below are retailer claims; repeated package choices are
retained as mentions. Numeric IDs now refer to applied database rows. Generic
package names and unresolved identities retain their reviewed limits.

| Page | Maker / model | Category | Printed specifications | Disposition / IDs |
| --- | --- | --- | --- | --- |
| 12 | American Classic Classic Hubs | Hubs | {"drillings":[12,16,18,24,28,36],"front_weight_g":200,"rear_weight_g":250,"finish":["silver anodized","gloss black epoxy powder coat"],"mountain_version":"135 mm"}; Pair described as light, replaceable-bearing hubs; front/rear drilling variants. SKU shown as AC-FH-(drilling, road/mt. bike, color). | updated 3179;  |
| 12 | American Classic Classic Hubs | Hubs | {"configuration":"single hub; front or rear","drilling":"not stated","finish":"not stated"}; Single hub listing, front or rear. SKU shown as AC-FH-(drilling, color). | updated 3179;  |
| 12 | American Classic Classic Skewers | Hubs | {"position":["front","rear"],"color":"black"}; Cam-action quick-release skewer; fits all hubs. | out_of_scope ; Replacement/mounting hardware, not a separate complete component. |
| 12 | American Classic Classic Seatpost | Seat Posts | {"lengths_mm":[200,300],"diameters_mm":[25,26,26.6,27,27.2,27.4],"weight_g":168,"300mm_note":"4 inches taller; thicker wall; 290 g"}; Heat-treated alloy, one-bolt micro-adjusting cradle; silver or gloss-black tough epoxy powdercoat. | added 11793;  |
| 12 | Profile for Speed Aero Pro SP Seatpost | Seat Posts | {"diameters_mm":[26.8,27,27.2],"silver":true}; Seatpost offsets saddle forward up to 50 mm to allow extended aero bars; tube angle up to 90 degrees; made in USA. | added 11794;  |
| 12 | Aerosport Carbon TT Handlebars | Handlebars | {"width_cm":40,"finish":"gloss black wrapped carbon fiber"}; Carbon time-trial bars, internal cable routing; accepts all clip-on bars; 120 g. | added 11795;  |
| 12 | Aerosport Carbon Ultra-light Seatpost | Seat Posts | {"diameters_mm":[25,26.8,27,27.2],"length_mm":300,"weight_g":135,"finish":"flat black carbon wrap"}; Carbon seatpost with one-bolt saddle adjustment; extra-long post can be custom-cut. | added 11796;  |
| 13 | Aerosport Trialist Compression Disc Wheel | Wheel(sets) | {"wheel_size":"700C","tire":"tubular","position":"rear","colors":["black","high-gloss white"],"weight_g":1040}; Compression disc wheel; bonded to alloy quick-release road hub; replaceable heat-treated hard-anodized rim. | added 11797;  |
| 13 | Aerosport Trialist Compression Disc Wheel | Wheel(sets) | {"wheel_size":"26 inch","tire":"tubular","position":["front","rear"],"color":"high-gloss white","weight_g":830}; Compression disc wheel. | added 11797;  |
| 13 | Aerosport Accel Tensioned Disc Wheel | Wheel(sets) | {"sizes_and_weights":"700C710g;26in525g;24in408g; front/rear,road/track"}; Tensioned Kevlar disc wheel; road or track versions. | added 11798;  |
| 13 | Campagnolo Khamsin-Compression Disc Wheel | Wheel(sets) | {"wheel_sizes":["700C","26 inch"],"position":["front","rear"],"use":["road","track"],"color":"white"}; Disc wheel with interchangeable hub axle setup for road/track; heat-treated alloy rim and open-bearing Campagnolo hub. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 13 | HED CX Pro | Wheel(sets) | {"spoke_counts":[16,12],"weight_g":840,"rim":"carbon fiber"}; HED CX wheel: 16 spokes for mass-start/rear wheels; 12 spokes for time-trial/triathlon wheels; fully built with American Classic hub and DT bladed spokes. | added 11799;  |
| 13 | Grip Shift Grip Shift Pro | Shifters | {"speeds":[6,7,8],"colors":6}; Indexed twist shifters with cables and instructions; 20% less rotation than prior design; fits all handlebars. | added 11800;  |
| 14 | Campagnolo C Record Engraved | Cranksets | {}; Package table names these crank/BB groups. | custom_finish ; Optional hand engraving/pantograph styles; source does not establish a new mechanical component identity. |
| 14 | Campagnolo C Record | Cranksets | {}; Package table names these crank/BB groups. | family_corroboration 1482,1485; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Campagnolo Croce D’Aune | Cranksets | {}; Package table names these crank/BB groups. | family_corroboration 1489,1490; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands Dura-Ace | Cranksets | {}; Package table names these crank/BB groups. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Campagnolo Chorus | Cranksets | {}; Package table names these crank/BB groups. | unchanged 1487; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 14 | Campagnolo Athena | Cranksets | {}; Package table names these crank/BB groups. | unchanged 1479; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 14 | Multiple brands 600 Ultegra | Cranksets | {}; Package table names these crank/BB groups. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands 105 | Cranksets | {}; Package table names these crank/BB groups. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands SGR/Mavic 646 | Pedals | {}; Named pedal selections in component-package matrix. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands Mavic 646 | Pedals | {}; Named pedal selections in component-package matrix. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands Dura-Ace Clipless | Pedals | {}; Named pedal selections in component-package matrix. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands Look 66 | Pedals | {}; Named pedal selections in component-package matrix. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands 105 Clipless | Pedals | {}; Named pedal selections in component-package matrix. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands 600 Ultegra Clipless | Pedals | {}; Named pedal selections in component-package matrix. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Campagnolo C Record Engraved | Front Derailleurs | {}; Package matrix identifies group only. | custom_finish ; Optional hand engraving/pantograph styles; source does not establish a new mechanical component identity. |
| 14 | Campagnolo C Record | Front Derailleurs | {}; Package matrix identifies group only. | unchanged 2283; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 14 | Campagnolo Croce D’Aune | Front Derailleurs | {}; Package matrix identifies group only. | family_corroboration 2288,2289; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands Dura-Ace | Front Derailleurs | {}; Package matrix identifies group only. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Campagnolo Chorus | Front Derailleurs | {}; Package matrix identifies group only. | family_corroboration 2286,2287; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Campagnolo Athena | Front Derailleurs | {}; Package matrix identifies group only. | unchanged 2281; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 14 | Multiple brands 600 Ultegra | Front Derailleurs | {}; Package matrix identifies group only. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands 105 | Front Derailleurs | {}; Package matrix identifies group only. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Campagnolo C Record Engraved | Shifters | {}; Package matrix identifies group/shift type only. | custom_finish ; Optional hand engraving/pantograph styles; source does not establish a new mechanical component identity. |
| 14 | Campagnolo C Record | Shifters | {}; Package matrix identifies group/shift type only. | family_corroboration 5969,5970,5971; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Campagnolo Croce D’Aune | Shifters | {}; Package matrix identifies group/shift type only. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands Dura-Ace | Shifters | {}; Package matrix identifies group/shift type only. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands Chorus Friction | Shifters | {}; Package matrix identifies group/shift type only. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands 600 Ultegra 7sp | Shifters | {}; Package matrix identifies group/shift type only. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands 105 7sp | Shifters | {}; Package matrix identifies group/shift type only. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands Delta Engraved | Brakes | {}; Package matrix identifies group only. | custom_finish ; Optional hand engraving/pantograph styles; source does not establish a new mechanical component identity. |
| 14 | Multiple brands Delta | Brakes | {}; Package matrix identifies group only. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Campagnolo Croce D’Aune | Brakes | {}; Package matrix identifies group only. | unchanged 567; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 14 | Multiple brands Dura-Ace SLR | Brakes | {}; Package matrix identifies group only. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Campagnolo Chorus | Brakes | {}; Package matrix identifies group only. | unchanged 565; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 14 | Campagnolo Athena | Brakes | {}; Package matrix identifies group only. | family_corroboration 557,558; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands 600 Ultegra | Brakes | {}; Package matrix identifies group only. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands 105 | Brakes | {}; Package matrix identifies group only. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Campagnolo C Record Engraved | Seat Posts | {}; Package matrix identifies group only. | custom_finish ; Optional hand engraving/pantograph styles; source does not establish a new mechanical component identity. |
| 14 | Campagnolo C Record | Seat Posts | {}; Package matrix identifies group only. | family_corroboration 5737,5738; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Campagnolo Croce D’Aune | Seat Posts | {}; Package matrix identifies group only. | unchanged 5742; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 14 | Multiple brands Dura-Ace | Seat Posts | {}; Package matrix identifies group only. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Campagnolo Chorus | Seat Posts | {}; Package matrix identifies group only. | unchanged 5742; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 14 | Campagnolo Athena | Seat Posts | {}; Package matrix identifies group only. | family_corroboration 5736,5742; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Campagnolo Chorus | Seat Posts | {}; Package matrix identifies group only. | unchanged 5742; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 14 | Selle San Marco Rolls | Saddles | {}; Named saddle option in the custom component package matrix. | updated 5563; Maker inferred from named Rolls and characteristic gold-trim construction; page itself does not print maker. |
| 14 | Multiple brands Turbo | Saddles | {}; Named saddle option in the custom component package matrix. | unresolved 5508,5509,5518; Unlabelled Turbo listing and263g claim do not distinguish existing Turbo/early/SLG variants. |
| 14 | Selle San Marco Rolls | Saddles | {}; Named saddle choices in wheel-package matrix. | updated 5563; Maker inferred from named Rolls and characteristic gold-trim construction; page itself does not print maker. |
| 14 | Multiple brands Turbo | Saddles | {}; Named saddle choices in wheel-package matrix. | unresolved 5508,5509,5518; Unlabelled Turbo listing and263g claim do not distinguish existing Turbo/early/SLG variants. |
| 14 | Campagnolo C Record | Hubs | {}; Named hub/group choices in wheel-package matrix. | family_corroboration 3240,3241,3242,3243; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Campagnolo Croce D’Aune | Hubs | {}; Named hub/group choices in wheel-package matrix. | unchanged 3251; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 14 | Multiple brands Dura-Ace Cassette 8 | Hubs | {}; Named hub/group choices in wheel-package matrix. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Campagnolo Chorus | Hubs | {}; Named hub/group choices in wheel-package matrix. | family_corroboration 3249,3250; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Campagnolo Athena | Hubs | {}; Named hub/group choices in wheel-package matrix. | family_corroboration 3236,3237; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands 600 Cassette 7sp | Hubs | {}; Named hub/group choices in wheel-package matrix. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands 105 | Hubs | {}; Named hub/group choices in wheel-package matrix. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands Record Pave | Rims | {}; Named rims in wheel-package matrix. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands Strada Hardbox | Rims | {}; Named rims in wheel-package matrix. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands Mistral 17-A | Rims | {}; Named rims in wheel-package matrix. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands Sun Metal Mistral 19-A | Rims | {}; Named rims in wheel-package matrix. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands Sun Metal Mistral 13-L | Rims | {}; Named rims in wheel-package matrix. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands Continental Comp. 240 | Tyres | {}; Named tires in wheel-package matrix. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands Continental Sprinter | Tyres | {}; Named tires in wheel-package matrix. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands Continental Sprinter 250 | Tyres | {}; Named tires in wheel-package matrix. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands Continental Super Sport 18 | Tyres | {}; Named tires in wheel-package matrix. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands Continental Super Sport 20 | Tyres | {}; Named tires in wheel-package matrix. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands Regina America 7sp | Freewheels | {}; Named freewheel/cassette selections in wheel-package matrix. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands Maillard 6 or 7sp | Freewheels | {}; Named freewheel/cassette selections in wheel-package matrix. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands Dura-Ace Cassette 8sp | Freewheels | {}; Named freewheel/cassette selections in wheel-package matrix. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands 600 Cassette 7sp | Freewheels | {}; Named freewheel/cassette selections in wheel-package matrix. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands 105 Cassette 7sp | Freewheels | {}; Named freewheel/cassette selections in wheel-package matrix. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands Regina CXS | Chains | {}; Package table lists chain choices; no item codes or detail. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands Sedis Pro | Chains | {}; Package table lists chain choices; no item codes or detail. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands Dura-Ace | Chains | {}; Package table lists chain choices; no item codes or detail. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands 600 | Chains | {}; Package table lists chain choices; no item codes or detail. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 14 | Multiple brands 105 | Chains | {}; Package table lists chain choices; no item codes or detail. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 15 | Campagnolo Century Crankset | Cranksets | {"arm_lengths_mm":[170,172.5],"chainring_teeth":["42-52","42-53"]}; C Record Century group; bluish-gray anodized metal finish. Other chainring sizes available at surcharge. | updated 1481;  |
| 15 | Campagnolo Century Delta Brakeset | Brakes | {}; Century Delta brakeset supplied with levers and cables. | added 11813;  |
| 15 | Campagnolo Century Front Derailleur | Front Derailleurs | {"mount":"braze-on"}; Century group front derailleur. | added 11814;  |
| 15 | Campagnolo Century Rear Derailleur | Rear Derailleurs | {}; Century group rear derailleur. | added 11815;  |
| 15 | Campagnolo C Record Crankset | Cranksets | {"arm_lengths_mm":[165,170,172.5,175,180],"chainring_teeth":["42-52","42-53"]}; Crankset; other chainring sizes available at surcharge. | family_corroboration 1482,1485; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 15 | Campagnolo C Record Chainrings | Chainrings | {"teeth_range":[39,54]}; Replacement/alternate C Record chainrings. | added 11816;  |
| 15 | Campagnolo C Record Bottom Bracket | Bottom Brackets | {"threadings":["British","Italian"]}; Bottom bracket. | unchanged 23; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 15 | Campagnolo C Record Rear Derailleur | Rear Derailleurs | {};  | unchanged 4133; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 15 | Campagnolo C Record Front Derailleur | Front Derailleurs | {"mounts":["braze-on","clamp-on"]};  | unchanged 2283; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 15 | Campagnolo C Record Synchro II Shift Levers | Shifters | {"insert":"with or without"}; Synchro II shift levers; insert option. | family_corroboration 5969,5970,5971; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 15 | Campagnolo C Record Retro-Friction Deluxe Shift Levers | Shifters | {}; Retro-friction deluxe shift levers. | family_corroboration 5969,5970,5971; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 15 | Campagnolo SGR Clipless Pedals | Pedals | {}; Clipless pedals supplied with cleats and hardware. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 15 | Campagnolo C Record Hubset | Hubs | {"drillings":[28,32]}; Hubset sold as pair. | family_corroboration 3240,3241,3242,3243; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 15 | Campagnolo C Record Delta Brakes | Brakes | {}; Delta brakes supplied with levers and cables. | family_corroboration 560,579; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 15 | Campagnolo C Record Seatpost | Seat Posts | {"diameters_mm":[25,26.8,27,27.2]};  | family_corroboration 5737,5738; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 15 | Campagnolo C Record Headset | Headsets | {"threadings":["British","Italian"]};  | unchanged 2954; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 16 | Campagnolo Croce D’Aune Crankset | Cranksets | {"arm_lengths_mm":[170,172.5],"chainring_teeth":["42-52","42-53"]}; Other chainring sizes available at surcharge. | family_corroboration 1489,1490; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 16 | Campagnolo Croce D’Aune / Chorus Chainrings | Chainrings | {"teeth_range":[39,54]};  | added 11817;  |
| 16 | Campagnolo Croce D’Aune Bottom Bracket | Bottom Brackets | {"threadings":["British","Italian"]};  | unchanged 27; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 16 | Campagnolo Croce D’Aune Rear Derailleur | Rear Derailleurs | {}; Twin-axle design, described as very fast shifting. | family_corroboration 4111,4112; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 16 | Campagnolo Croce / Chorus / Athena Front Derailleur | Front Derailleurs | {"mounts":["braze-on","clamp-on"]}; Shared listing for Croce, Chorus and Athena groups. | family_corroboration 2286,2287; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 16 | Campagnolo Croce / Chorus / Athena Standard Friction Shift Levers | Shifters | {"mount":"braze-on only"};  | family_corroboration 5976,7027; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 16 | Campagnolo Croce D’Aune Hubset | Hubs | {"drilling":32};  | unchanged 3251; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 16 | Campagnolo Croce D’Aune Delta Brakes | Brakes | {"style":"Croce"}; Croce-style Delta brakes. | unchanged 567; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 16 | Campagnolo Croce D’Aune / Chorus / Athena Seatpost | Seat Posts | {"diameters_mm":[25,26.8,27,27.2]};  | unchanged 5742; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 16 | Campagnolo Croce D’Aune / Chorus Headset | Headsets | {}; Shared headset listing. | unchanged 7028; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 16 | Campagnolo Chorus Crankset | Cranksets | {"arm_lengths_mm":[170,172.5,175],"chainring_teeth":["42-52","42-53"]}; Other chainring sizes available at surcharge. | unchanged 1487; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 16 | Campagnolo Chorus Bottom Bracket | Bottom Brackets | {"threadings":["British","Italian"]};  | unchanged 25; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 16 | Campagnolo Chorus Rear Derailleur | Rear Derailleurs | {"design":"two-position; A&B"};  | family_corroboration 4106,4107,4108; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 16 | Campagnolo Chorus Hubset | Hubs | {"drilling":32};  | family_corroboration 3249,3250; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 16 | Campagnolo Chorus Brakes | Brakes | {}; Sidepull brakes supplied with levers and cables. | unchanged 565; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 17 | Campagnolo Chorus Carbon Crankset | Cranksets | {"arm_lengths_mm":[170,172.5],"chainring_teeth":["42-52","42-53"]}; Chorus group version with silver-speckled graphite finish. | updated 1487;  |
| 17 | Campagnolo Chorus Carbon Brakeset | Brakes | {}; Brakes supplied with levers and cables; silver-speckled graphite finish. | updated 565,220; Graphite finish added to existing Monoplaner family; levers already record graphite option. |
| 17 | Campagnolo Chorus Carbon Rear Derailleur | Rear Derailleurs | {};  | updated 4106;  |
| 17 | Campagnolo Chorus Carbon Front Derailleur | Front Derailleurs | {"mount":"braze-on only"};  | unresolved 2286,2289; Finish/shared-front offering does not supply exact code/group crosswalk to existing Croce graphite front2289; no duplicate front inserted. |
| 17 | Campagnolo Athena Chainrings | Chainrings | {"teeth_range":[42,53]};  | added 11818;  |
| 17 | Campagnolo Athena Bottom Bracket | Bottom Brackets | {"threadings":["British","Italian"]};  | family_corroboration 21,22; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 17 | Campagnolo Athena Rear Derailleur | Rear Derailleurs | {};  | unchanged 4092; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 17 | Campagnolo Croce / Chorus / Athena Front Derailleur | Front Derailleurs | {"mounts":["braze-on","clamp-on"]};  | family_corroboration 2286,2287; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 17 | Campagnolo Croce / Chorus / Athena Standard Friction Shift Levers | Shifters | {"mount":"braze-on only"};  | family_corroboration 5976,7027; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 17 | Campagnolo Athena Hubset | Hubs | {"drilling":32};  | family_corroboration 3236,3237; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 17 | Campagnolo Athena Brakes | Brakes | {}; Brakes supplied with levers and cables. | family_corroboration 557,558; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 17 | Campagnolo Croce D’Aune / Chorus / Athena Seatpost | Seat Posts | {"diameters_mm":[25,26.8,27,27.2]};  | unchanged 5742; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 17 | Campagnolo Athena Headset | Headsets | {}; Headset listing, SKU text appears truncated. | unchanged 2952; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 17 | Campagnolo C Record Engraved Seatpost | Seat Posts | {"diameter_mm":27.2}; Hand engraved; engraving styles include Campagnolo, Somec or Maza. | custom_finish ; Optional hand engraving/pantograph styles; source does not establish a new mechanical component identity. |
| 17 | Campagnolo C Record Engraved Rear Derailleur | Rear Derailleurs | {}; Hand engraved; style choice Campagnolo, Somec or Maza. | custom_finish ; Optional hand engraving/pantograph styles; source does not establish a new mechanical component identity. |
| 17 | Campagnolo C Record Engraved Front Derailleur | Front Derailleurs | {"mount":"braze-on only"}; Hand engraved. | custom_finish ; Optional hand engraving/pantograph styles; source does not establish a new mechanical component identity. |
| 17 | Campagnolo C Record Engraved Deluxe Retro-Friction Shift Levers | Shifters | {"mount":"braze-on only"}; Anatomically curved, hand-engraved levers. | custom_finish ; Optional hand engraving/pantograph styles; source does not establish a new mechanical component identity. |
| 17 | Campagnolo C Record Engraved Delta Brakes | Brakes | {}; Delta brakes and levers; custom hand engraving. | custom_finish ; Optional hand engraving/pantograph styles; source does not establish a new mechanical component identity. |
| 17 | Campagnolo C Record Engraved Crankset | Cranksets | {"arm_length_mm":170,"chainrings":"42/53"}; Custom hand engraving; engraving styles include Campagnolo, Somec or Maza. | custom_finish ; Optional hand engraving/pantograph styles; source does not establish a new mechanical component identity. |
| 17 | Campagnolo C Record Engraved Outer Ring | Chainrings | {"teeth":[52,53]}; Hand engraved outer chainring. | custom_finish ; Custom hand engraving of existing outer rings; not a distinct maker model. |
| 18 | Shimano Dura-Ace Crankset | Cranksets | {"arm_lengths_mm":[170,172.5,175],"chainring_teeth":["42-52","42-53"],"speeds":[7,8]}; New/improved 1990 group described with hyperglide cassettes and superglide chainrings; available 7- or 8-speed. | family_corroboration 1820,1823; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 18 | Shimano Dura-Ace Chainrings | Chainrings | {"teeth_range":[39,54]}; Superglide chainrings. | updated 1290; 7400-series road replacement rings, no shop-code-to-maker-code inference. |
| 18 | Shimano Dura-Ace Bottom Bracket | Bottom Brackets | {"threadings":["British","Italian"]};  | family_corroboration 132,7196; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 18 | Shimano Dura-Ace Rear Derailleur | Rear Derailleurs | {"speeds":[6,7,8]};  | unchanged 4505; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 18 | Shimano Dura-Ace Front Derailleur | Front Derailleurs | {"mounts":["braze-on","clamp-on"]};  | unchanged 2511; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 18 | Shimano Dura-Ace Shift Levers | Shifters | {"speeds":[7,8]};  | family_corroboration 6164,6165,6166; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 18 | Shimano Dura-Ace Clipless Pedals | Pedals | {}; LOOK-style clipless pedals, supplied with cleats. | family_corroboration 3970,3971; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 18 | Shimano Dura-Ace Hubset | Hubs | {"versions":["standard freewheel, 32 hole","cassette, 7 or 8 speed, 32 hole"]};  | family_corroboration 3560,3561,3562,3563,3565,7207,7208; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 18 | Shimano Dura-Ace SLR Sidepull Brakes | Brakes | {};  | family_corroboration 991,992; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 18 | Shimano Dura-Ace Seatpost | Seat Posts | {"shape":"round","diameter_mm":27.2};  | family_corroboration 5893,5894; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 18 | Shimano Dura-Ace Headset | Headsets | {};  | family_corroboration 3099,3103; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 18 | Shimano 600 Ultegra Crankset | Cranksets | {"arm_length_mm":172.5,"chainrings":"Biopace 42-52/53"}; 600 Ultegra group crankset. | family_corroboration 1788,1789,1790; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 18 | Shimano 600 Ultegra Bottom Bracket | Bottom Brackets | {"threadings":["British","Italian"]};  | unchanged 125; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 18 | Shimano 600 Ultegra Rear Derailleur | Rear Derailleurs | {};  | unchanged 4466; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 18 | Shimano 600 Ultegra Front Derailleur | Front Derailleurs | {"mounts":["braze-on","clamp-on"]};  | unchanged 2478; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 18 | Shimano 600 Ultegra Shift Levers | Shifters | {"speeds":7,"type":"indexed"};  | unchanged 6144; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 18 | Shimano 600 Ultegra Clipless Pedals | Pedals | {}; LOOK-style clipless pedals. | family_corroboration 3958,3959,3979; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 18 | Shimano 600 Ultegra Hubset | Hubs | {"version":"7-speed cassette"};  | family_corroboration 3534,7565; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 18 | Shimano 600 Ultegra Brakes | Brakes | {}; Complete with levers and cables. | unchanged 966; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 18 | Shimano 600 Ultegra Headset | Headsets | {};  | family_corroboration 3087,3088; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 19 | Profile Aero I | Handlebars | [{"finish":"flat black","weight_g":425,"fit":"all stems; shims included"}]; Redesigned flattened drops for improved power and handling; pre-drilled for Swift Shift; improved softer, thicker arm rests. | added 11801;  |
| 19 | Profile Aero II Clip-on | Handlebars | [{"width_in":"7, 8, 9 (center-to-center)","weight_g":411,"finish":"flat black","fit":"invertible; pre-drilled for Swift Shift; cups and hardware included"}]; Clip-on aero bars; 22% lighter; supplied with deluxe cups, hardware and instructions. | added 11802;  |
| 19 | Profile Aero II Replacement Bars | Handlebars | [{"width_in":"7, 8, 9","finish":"flat black","supply":"bar only"}]; Replacement bars for Aero II; upgrade for Swift Shift or width change. | out_of_scope ; Replacement/mounting hardware, not a separate complete component. |
| 19 | Profile Aero III | Handlebars | [{"weight_g":480,"finish":"neon yellow","fit":"all stems; shims included"}]; Time-trial bar with five hand positions, adjustable deluxe armrests and Swift Shift drilling; USA. | added 11803;  |
| 19 | Profile Dave Scott Pro | Handlebars | [{"finish":"flat black","adjustability":"height, angle and extension length adjustable"}]; Aero system with ultralight stem, airfoil-bladed main bar, adjustable extension bar, deluxe armrests and Swift Shift; USA. | added 11804;  |
| 19 | Cinelli Model 64 | Handlebars | [{"width_cm":[38,40,42],"weight_g":335,"reach_cm":7.8,"drop_cm":14.2}]; Casual riding bar with small drops and generous space on top; Italy. | updated 2802;  |
| 19 | Cinelli Model 65 | Handlebars | [{"width_cm":[38,40,42],"weight_g":335,"reach_cm":11,"drop_cm":15.6}]; Criterium bar designed mainly for riding on the drops; moderate drop and shallow curve-like top; Italy. | updated 2804;  |
| 19 | Cinelli Model 66 | Handlebars | [{"width_cm":[40,42,44],"weight_g":340,"reach_cm":9,"drop_cm":15.6}]; Deep-drop road racing/touring bar with generous space on top and multiple hand positions; Italy. | unchanged 2806; Generic66 corroboration; source does not resolve logo variants, so no variant-specific weight/date update. |
| 19 | Cinelli Model 67 | Handlebars | [{"width_cm":39,"weight_g":335,"reach_cm":11,"drop_cm":17.2}]; Track bar, deep drop and fully curved top; intended for use with 2-A track stem; Italy. | updated 2812;  |
| 19 | Cinelli LA 84 | Handlebars | [{"width_cm":[40,42],"weight_g":330,"fit":"clip-on bars and 24- or 26-inch front wheels"}]; Long-horn time-trial bar, originally used in 1984 Olympics; horns designed to be cut to size; Italy. | updated 2816;  |
| 19 | Cinelli 1-A | Stems | [{"length_cm":"7–14 in even-centimeter increments (printed; stated endpoints conflict with increment rule)","weight_g":292,"clamp_diameter_mm":26.4,"finish":"silver satin"}]; Popular lightweight stem with solid creak-free clamping mechanism; sizes stated as even-centimeter increments. | updated 6489;  |
| 19 | Cinelli 2-A | Stems | [{"length_cm":[10,11,12],"weight_g":292,"clamp_diameter_mm":26.4,"finish":"silver"}]; Like 1-A with a 2 cm deeper drop for track use. | updated 7097;  |
| 19 | Cinelli XA | Stems | [{"length_cm":[8,9,10,11,12,13],"weight_g":274,"clamp_diameter_mm":26.4,"finish":"soft satin silver anodized"}]; Trim aerodynamic stem, creak-free vs recessed-bolt 1-R; lengths in 1 cm increments. | updated 6502;  |
| 20 | Selle Italia Turbo | Saddles | [{"weight_g":263,"cover":"buffalo hide","finish":"suede black or smooth white"}]; Racing saddle with aero shape, padded nose and durable buffalo hide cover; Italy. | unresolved 5508,5509,5518; Unlabelled Turbo listing and263g claim do not distinguish existing Turbo/early/SLG variants. |
| 20 | Selle Italia Women's Turbo | Saddles | [{"cover":"buffalo hide","finish":"suede black or smooth white","fit":"wider rear, extra padding, shorter nose"}]; Women's Turbo with dense urethane pad and anatomically shaped wider back; Italy implied by adjacent line. | updated 5495; Named women's Turbo form; maker inferred, not printed on page. |
| 20 | Selle San Marco Rolls | Saddles | [{"weight_g":267,"cover":"full-grain water buffalo hide","shell":"resilient nylon","padding":"dense shock-absorbing urethane","trim":"hand-polished 22 kt gold accents","finish":"suede black or smooth white"}]; Premium saddle with resilient nylon shell, dense urethane pad and buffalo-hide cover; Italy. | updated 5563; Maker inferred from named Rolls and characteristic gold-trim construction; page itself does not print maker. |
| 20 | Mavic 646 | Pedals | [{"weight_g":440,"rotation_deg":"0–10 lateral pedal-body adjustment","body":"carbon composite/aluminum","bearings":"sealed, maintenance-free","release_tension":"adjustable","cleats":"standard LOOK cleats included","cornering_deg":32}]; Clipless pedal; France. | updated 3838;  |
| 20 | LOOK 96 | Pedals | [{"cleat":"red included; accepts standard black cleats without rotation","rotation_deg":9,"release_tension":"adjustable","cornering_deg":32}]; Clipless pedal, lighter/slimmer/easier to use than earlier model; France. | updated 10035;  |
| 20 | LOOK 76 | Pedals | [{"weight_g":434,"turn_angle_deg":29,"clip":"carbon fiber","body":"light alloy","cleats":"black included","release_tension":"adjustable"}]; Clipless pedal with sealed bearings; France. | updated 3792;  |
| 20 | LOOK 66 | Pedals | [{"weight_g":530,"body":"white alloy","clip":"red Delrin","turn_angle_deg":29,"cleats":"black included","release_tension":"adjustable"}]; Classic white clipless pedal, complete with black cleats; France. | unchanged 3789; Maker245g and retailer530g listed weight bases differ; preserve maker row without replacing it. |
| 20 | Campagnolo SGR | Pedals | []; Campagnolo SGR pedals are said to be listed with Campagnolo gruppos. | unchanged 3694; Existing1990-compatible identity; printed facts add no supported change to the stronger existing record. |
| 20 | Shimano Dura-Ace | Pedals | []; Shimano Dura-Ace pedals said to be listed with Shimano gruppos. | family_corroboration 3970,3971; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 20 | Shimano 600 Ultegra | Pedals | []; Shimano 600 Ultegra pedals said to be listed with Shimano gruppos. | family_corroboration 3958,3959; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 21 | Maillard Super Course | Freewheels | [{"speed":6,"weight_g":350,"finish":"bright silver, heat-treated cro-mo cogs","removal":"two-prong Suntour-style"},{"speed":7,"variant":"Ultra 7"}]; Durable freewheel; recommended with Sedis PRO chain; not recommended for Syncro shifters. | held in the 1990 pass against2125/2127; that source lacks a printed700/Plus crosswalk. The later1987 fragment(source475) explicitly identifies and enriches2125; the1990 offer/Plus crosswalk remains unresolved. |
| 21 | Regina America | Freewheels | [{"speed":6,"weight_g":375},{"speed":7,"variant":"Ultra 7"},{"speed":6,"range":"15–20 teeth"}]; Matte silver cogs with simple splined removal system; 7-speed version compatible with Regina CXS chain; Italy. | partially updated 2156,2157; Update ordinary6-speed2156; do not resolve ambiguous7-speed2157 from its speculative Superleggera qualifier. |
| 21 | Regina America SL | Freewheels | [{"speed":6,"weight_saving_g":100,"body":"traditional America body","weight_g":275},{"speed":7,"variant":"Ultra 7"}]; Aluminum alloy upgrade with over 100 g saved; intended for special-occasion lightweight wheels; Italy. | partially updated 2160,2157,2203; Update6-speed SL2160;7-speed legacy2157/1992SL2203 crosswalk remains unresolved. |
| 21 | Campagnolo Record (alloy freewheel; catalog heading Campagnolo) | Freewheels | [{"speed":6,"weight_g":175},{"speed":7,"variant":"narrow; spare cogs sold separately"}]; Alloy freewheel with furnace-heat-treated cogs and body; high-mileage life claim; Italy. | updated 2072,2075; Standalone6 and7-speed-narrow configurations; preserve normal7-speed2073 separately. |
| 21 | Shimano Dura-Ace | Freewheels | [{"speed":6,"weight_g":410},{"speed":7}]; Twisted-tooth freewheel intended for Dura-Ace chain and SIS components; semi-sealed to block dirt and water; Japan. | family_corroboration 2221,2222; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 21 | Shimano Dura-Ace cassette | Cassettes | [{"speed":6},{"speed":7},{"speed":8}]; Heat-treated cro-moly steel cassette for Ultegra or Dura-Ace hubs; 8-speed cassette requires 8-speed hub; 6/7-speed cassettes interchangeable. | family_corroboration 1204,1205,1208,7561; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 21 | Sedis Sport Pro | Chains | [{"weight_g":340,"plates":"fully heat-treated and nickel-plated","compatibility":"Maillard and Sun Tour freewheels; Ultra or regularly spaced freewheels"}]; Special beveled inner plates mesh well with listed freewheels; France. | updated 1401;  |
| 21 | Sedis Sport Black | Chains | [{"weight_g":330,"plates":"beveled inner plates, surface heat-treated"}]; Economy chain recommended with economy freewheel; France. | updated 8765;  |
| 21 | Regina CX | Chains | [{"weight_g":339,"finish":"nickel plated, fully heat treated"}]; For Regina or Campagnolo six-speed freewheels; Italy. | updated 1384;  |
| 21 | Regina CXS | Chains | [{"weight_g":325,"speed":7,"plates":"special curved backplates"}]; Seven-speed ultra freewheel chain; recommended with Regina or Campagnolo 6/7-speed freewheels; Italy. | updated 1384;  |
| 21 | Sedis Sport Track | Chains | [{"weight_g":370,"pitch_in":"1/8","plates":"beveled, fully heat treated"}]; Track chain for 1/8-inch pitch cogs; France. | added 11819;  |
| 21 | Regina 50 SL | Chains | [{"weight_g":272,"pin":"hollow; saves about 70 g","plates":"beveled, heat treated"}]; Chain for Regina alloy freewheels; compatible with Regina SL or seven-speed freewheels; Italy. | updated 1390;  |
| 21 | Shimano Dura-Ace | Chains | [{"weight_g":345,"finish":"nickel plated, fully heat treated"}]; For Shimano twisted-tooth freewheels and cassettes; Japan. | family_corroboration 1412,1413,1414; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 21 | Unspecified Steel heat-treated track cog | Single Sprockets | [{"pitch_in":"3/32","teeth":"13–21","use":"road chain"},{"pitch_in":"1/8","teeth":"12–20"}]; Heat-treated hardened-steel track cogs; intended for track hubs and also road hubs when coasting is not required; West Germany. | unresolved ; Steel track cogs are unbranded; West Germany does not establish a maker. |
| 24 | ASSOS 16 | Rims | [{"type":"tubular","width_mm":16,"weight_g":290,"drilling":[28,32],"section":"aero","finish":"matte black"}]; Aluminum-magnesium alloy tubular rim; specially shaped/extruded and heat-treated; drilled for specific spoke patterns. | added 11805;  |
| 24 | ASSOS 18 | Rims | [{"type":"tubular","width_mm":18,"weight_g":310,"drilling":[32],"section":"aero","finish":"matte black"}]; Aluminum-magnesium alloy tubular rim; drilled for specific spoke patterns. | added 11806;  |
| 24 | Campagnolo Sigma Pave Chromium | Rims | [{"type":"tubular","width_mm":22,"weight_g":365,"drilling":[32],"section":"box","finish":"chromium"}]; Tubular rim; table groups under Campagnolo. | added 11811;  |
| 24 | Campagnolo Sigma Pave Hardox | Rims | [{"type":"tubular","width_mm":22,"weight_g":365,"drilling":[32],"section":"box","finish":"gray"}]; Tubular rim; table groups under Campagnolo. | updated 7031;  |
| 24 | Campagnolo Sigma Strada | Rims | [{"type":"tubular","width_mm":22,"weight_g":330,"drilling":[28,32],"section":"box","finish":"gray"}]; Tubular rim; table groups under Campagnolo. | updated 4970;  |
| 24 | Sun Metal Mistral 19A | Rims | [{"type":"tubular","width_mm":19,"weight_g":310,"drilling":[24,28,32],"section":"aero","finish":"gray"}]; Extruded 6063 aluminum-magnesium-silicon alloy, T6 heat treated, machined and ultra-hard anodized; epoxy bonded rim joint. | added 11807;  |
| 24 | Sun Metal Mistral 17A | Rims | [{"type":"tubular","diameter_in":700,"width_mm":17,"weight_g":290,"drilling":[24,28,32],"section":"aero","finish":"gray"},{"type":"tubular","diameter_in":26,"width_mm":17,"weight_g":250,"drilling":[18,24,28],"section":"aero","finish":"gray"},{"type":"tubular","diameter_in":24,"width_mm":17,"weight_g":230,"drilling":[24],"section":"aero","finish":"gray"}]; Sun Metal tubular rim family, extruded 6063 aluminum-magnesium-silicon alloy, T6 heat treated, machined and ultra-hard anodized; epoxy bonded joint. | added 11808;  |
| 24 | Campagnolo Omega Strada Box | Rims | [{"type":"clincher","width_mm":20,"weight_g":430,"drilling":[32],"section":"box","finish":"matte black"}]; Clincher rim. | updated 4957;  |
| 24 | Campagnolo Omega Strada Aero | Rims | [{"type":"clincher","width_mm":20,"weight_g":440,"drilling":[32],"section":"aero","finish":"matte black"}]; Clincher rim. | updated 4961;  |
| 24 | Campagnolo Delta XL Strada | Rims | [{"type":"clincher","width_mm":22,"weight_g":375,"drilling":[32],"section":"box","finish":"chromium"}]; Clincher rim. | added 11812;  |
| 24 | Sun Metal Mistral 13L | Rims | [{"type":"clincher","width_mm":19,"weight_g":400,"drilling":[32,36],"section":"box","finish":"gray"}]; Clincher rim; Sun Metal alloy rim family. | added 11809;  |
| 25 | Branford Bike (retailer-built; component makers listed below) Handbuilt wheel packages | Wheel(sets) | [{"type":"tubular 700C","rim":"HED CX Pro","hub":"Classic","spokes":"DT Blades","drilling":"F 12/16, R 16","lacing":"F radial, R radial/1-cross","usage":"triathlon/time trial","price":"$388.00 each"},{"type":"tubular 700C","rim":"ASSOS 16mm","hub":"Classic","spokes":"DT Blades","drilling":"28/28","lacing":"F radial, R radial/1-cross","usage":"triathlon/time trial","price":"$349.88 pair"},{"type":"tubular 700C","rim":"ASSOS 16mm","hub":"Classic","spokes":"DT 14/15/14","drilling":"32/32","lacing":"3-cross/3-cross","usage":"smooth-road racing","price":"$319.88 pair"},{"type":"tubular 700C","rim":"ASSOS 18mm","hub":"Classic","spokes":"DT 14/15/14","drilling":"32/32","lacing":"3-cross/3-cross","usage":"rough-road racing","price":"$319.88 pair"},{"type":"tubular 700C","rim":"Campagnolo Sigma Pave (Chromium or Hardox)","hub":"Classic or C Record","spokes":"DT 14/15/14","drilling":"32/32","lacing":"3-cross/3-cross","usage":"rough road","price":"$299.88 pair"},{"type":"tubular 700C","rim":"Campagnolo Sigma Strada","hub":"Classic or C Record","spokes":"DT 14/15/14","drilling":"32/32","lacing":"3-cross/3-cross","usage":"road racing, criteriums, training","price":"$279.88 pair"},{"type":"tubular 700C","rim":"Sun Metal Mistral 17-A","hub":"Classic","spokes":"DT Blades","drilling":"F 18/24, R 24/28","lacing":"F radial, R radial/1-cross","usage":"triathlon/time trial","price":"$249.88 pair"},{"type":"tubular 700C","rim":"Sun Metal Mistral 17-A","hub":"Classic","spokes":"DT 14/15/14","drilling":"32/32","lacing":"3-cross/3-cross","usage":"smooth-road racing, criteriums","price":"$219.88 pair"},{"type":"tubular 700C","rim":"Sun Metal Mistral 19-A","hub":"Classic or Chorus","spokes":"DT 14/15/14","drilling":"32/32","lacing":"3-cross/3-cross","usage":"rough roads, training","price":"$199.88 pair"},{"type":"tubular 24 or 26 inch","rim":"HED CX Pro 26-inch","hub":"Classic","spokes":"DT Blades","drilling":"F 12/16, R 16","lacing":"F radial, R radial/1-cross","usage":"triathlon/time trial","price":"$388.88 each"},{"type":"tubular 24 or 26 inch","rim":"Sun Metal Mistral 17-A, 24 or 26 inch","hub":"Classic","spokes":"DT Blades","drilling":"F 18/24, R 24","lacing":"F radial, R radial/1-cross","usage":"triathlon/time trial","price":"$119.88 each"},{"type":"clincher","rim":"Campagnolo Omega Box","hub":"Classic or Chorus","spokes":"DT 14/15/14","drilling":"32/32","lacing":"3-cross/3-cross","usage":"rough roads, training","price":"$179.88 pair"},{"type":"clincher","rim":"Campagnolo Omega Aero","hub":"Classic or Chorus","spokes":"DT 14/15/14","drilling":"32/32","lacing":"3-cross/3-cross","usage":"racing, training","price":"$189.88 pair (OCR/table print appears 'or'; likely pair price)"},{"type":"clincher","rim":"Campagnolo Delta XL","hub":"Classic or Chorus","spokes":"DT 14/15/14","drilling":"32/32","lacing":"3-cross/3-cross","usage":"rough roads, fast riding","price":"$229.88 pair"},{"type":"clincher","rim":"Sun Metal Mistral 13L","hub":"Classic or Chorus","spokes":"DT 14/15/14","drilling":"32/32","lacing":"3-cross/3-cross","usage":"rough roads, general riding","price":"$159.88 pair"}]; Retailer handbuilt package configurations; catalog states custom/rebuilt wheels can be made from customer-selected components at $17.50 labor per wheel. | retailer_builds ; Retain original component combinations; do not invent manufacturer wheelset identities from custom builds. |
| 26 | Campagnolo C Record chainrings | Chainrings | [{"teeth":[39,42,52,53,54],"availability":"in stock; other sizes special order"}]; Replacement chainrings for Campagnolo C Record; page states 39, 42, 52, 53 and 54 tooth sizes in stock. | added 11816;  |
| 26 | Campagnolo Athena chainrings | Chainrings | [{"teeth":[42,52,53],"availability":"in stock; other sizes special order"}]; Replacement chainrings for Campagnolo Athena; page states 42, 52 and 53 tooth sizes in stock. | added 11818;  |
| 26 | Shimano Dura-Ace chainrings | Chainrings | [{"teeth":[39,42,52,53,54],"shape":"round","availability":"in stock; other sizes special order"}]; Replacement round chainrings for Shimano Dura-Ace; page states 39, 42, 52, 53 and 54 tooth sizes in stock. | updated 1290; 7400-series road replacement rings, no shop-code-to-maker-code inference. |
| 17 | Campagnolo Athena Crankset | Cranksets | {"arm_lengths_mm":[170,172.5],"rings":"42x52/53T"}; Athena double crankset; other rings at surcharge. | family_corroboration ; Group-level/uncoded listing; preserve existing coded generations/configurations rather than assign shop SKU as maker number. |
| 24 | Sun Metal Mistral 14A | Rims | {"photo_marking":"14-A"}; Named in the rim cross-section product photograph; not in the price table. | added 11810;  |

</details>

## Branford tyre tables reconciliation — applied 2026-11-19

**Applied and validated after explicit user approval.** Source **471**;
Oscar X **11791**, Flash M21mm **11792**. Scope: printed/PDF pp.22–23 of
[Branford Bike Spring/Summer 1990](https://timslife.com/brancat/Catalogs/bb1990-01.pdf).
Both pages were visually read together: p.22 gives models/specifications; p.23
continues the same rows with casing construction and comments. The cover dates
the US retailer catalogue. The other Branford pages are now covered by the
[applied full-catalogue reconciliation](#branford-complete-component-catalogue--applied-and-validated-2026-11-19);
The [Colorado Cyclist component reconciliation](#colorado-cyclist-components--applied-and-validated-2026-11-19) is also applied; bike loading was declined.

Applied: one catalogue source, **two tyre additions, ten existing-row updates
and one bike-spec link**. No existing titles/search text change, no merges or
deletes, no CSV or generator changes. Tyres23 category registrations already
exist for Vittoria104, Continental639 and Wolber522. The new source is a US catalogue, label
“Branford Bike Spring/Summer catalogue (1990)”.

### Extracted table

The printed Part # entries are retailer SKUs, not established maker codes.
Diameter is not inferred where only width is printed. Weights/pressures are
retailer specifications, not independent measurements.

| Maker / model | Retailer SKU | Weight / width / max psi | Casing | Reconciliation |
| --- | --- | --- | --- | --- |
| Continental Sprinter | CO-SP- | 250g / 22mm / 170 | 3-ply polyamide | 6787 |
| Continental Comp 240 | CO-CO-240 | 240g / 22mm / 170 | 5-ply polyamide | Hold: Competition10415 crosswalk |
| Continental Comp GP | CO-CO-GP | 225g / 19mm / 170 | 5-ply polyamide | Hold: Competition10415 crosswalk |
| Continental Comp GP 26in | CO-CO-GP26 | 220g / 19mm / 170 | 5-ply polyamide | Hold: Competition10415 crosswalk |
| Continental Comp GP 24in | CO-CO-GP24 | 200g / 19mm / 170 | 5-ply polyamide | Hold: Competition10415 crosswalk |
| Continental Special Class | CO-SP-175 | 175g / 22mm / 170 | 3-ply Egyptian cotton | 11140 |
| Vittoria Mondiale | VI-CT-MO | 290g / 24mm / 110 | 2-ply cotton | 6891 |
| Vittoria Olympic | VI-CT-OL | 310g / 24mm / 110 | 2-ply cotton | Hold: Olimpionico10562 crosswalk |
| Vittoria Special Pro | VI-CT-SP | 230g / 23mm / 120 | 3-ply cotton | 6900 |
| Vittoria Special Pro 26in | VI-CT-SP26 | 210g / 23mm / 120 | 3-ply cotton | 6900 |
| Vittoria Corsa CX/CG | VI-CT-CX/CG | 240g / 21mm / 120 | 4-ply cotton | 9428 specs; 6881 photo availability only |
| Wolber Classic | WO-CT-CC | 290g / 24mm / 105 | 2-ply cotton | 6908 |
| Wolber Invulnerable | WO-CT-IN | 280g / 22mm / 110 | 2-ply cotton and steel mesh | 6918 |
| Continental Super Sport Ultra-18 | CO-FC-S18 | 210g / 18mm / 135 | 3-ply polyamide | 6789 |
| Continental Super Sport Ultra-23 | CO-FC-S23 | 220g / 23mm / 125 | 3-ply polyamide | 6789 |
| Continental Super Sport 20 | CO-CC-20 | 330g / 25mm / 120 | 3-ply polyamide | 6788 |
| Continental Super Sport 25 | CO-CC-25 | 330g / 25mm / 120 | 3-ply polyamide | 6788 |
| Vittoria Oscar X | VI-CC-OS | 195g / 19mm / 150 | 3-ply Egyptian cotton | 11791; linked18354 |
| Vittoria Flash M | VI-CC-FL | 215g / 21mm / 125 | 2-ply Egyptian cotton | 11792 |

### Added rows

| Title / fixed UUID | Dates | Description |
| --- | --- | --- |
| 11791 Vittoria Oscar X / 68b991d5-c157-421c-9207-d00f24f9ee99 | 1989–1990 | Folding racing clincher; 3-ply Egyptian cotton casing, 19mm, 195g, max 150psi. Fast and responsive; made in Italy. |
| 11792 Vittoria Flash M (21mm) / 473dd62d-5ba5-4c50-96ab-b9f7d377b195 | 1990–1990 | Folding training/fast-riding clincher; 2-ply Egyptian cotton casing, 21mm, 215g, max 125psi. Made in Italy. |

Both use maker104/category23 and NULL group. Maintained search-text helper output:
Oscar X -> “Vittoria Oscar X”; Flash M (21mm) -> “Vittoria Flash M” (parenthetical
qualifiers omitted by the helper). Dates express attestation, not manufacture.

**Earlier Oscar X evidence:** [1989 Bianchi catalogue](https://www.gringineer.com/blogs/default-blog/1989-bianchi-catalog),
source325; [original specification table img-2486-2.jpg](https://cdn.shopify.com/s/files/1/0661/0501/6425/files/img-2486-2.jpg?v=1764982608)
downloaded and visually checked. Mondiale explicitly lists Vittoria Oscar X.
That supplies1989 for Oscar X11791 and supports bike_spec18354
(bike1076,1989 Mondiale), NULL ->11791. CSV and DB exact values agree.
Preserve bike/spec provenance. The new exact title matches automatically;
no override is needed.

### Existing rows

All ten receive the new Branford source_ref in the same guarded update.
Unchanged matches retain their sources. Exact prior values are preserved below;
the table records the applied descriptions and date changes.

| ID / title | Applied date change | Former source | Applied description/evidence |
| --- | --- | --- | --- |
| 6787 Continental Sprinter 250 | year_from 1999 -> 1990 | 353 | Tubular; 3-ply polyamide casing, 22mm, 250g, max 170psi. Puncture-resistant racing/training tyre with low rolling resistance. |
| 6788 Continental Super Sport | year_to 1988 -> 1990 | 391 | Clincher; Super Sport 20/25 versions have 3-ply polyamide casing, steel beads, 330g and max 120psi; 25 model is 25mm. For training/rough roads. Earlier specimen measured 215.8g, size unspecified. |
| 6789 Continental SuperSport Ultra | year_to 1988 -> 1990 | 391 | Folding clincher, 3-ply polyamide casing. Ultra-18: 18mm, 210g, max 135psi; Ultra-23: 23mm, 220g, max 125psi. Fast, responsive racing/training tyre; West Germany. |
| 11140 Continental Sonderklasse 175 | year_to 1985 -> 1990 | 400 | Track/time-trial tubular for smooth surfaces. 1990 Special Class: 3-ply Egyptian cotton, 22mm, 175g, max 170psi. Earlier Sonderklasse 175 listings: approx 210g (200/220g). |
| 6891 Vittoria Mondiale | year_to 1988 -> 1990 | 262 | Cotton vulcanized training tubular, ribbed tread, butyl tube; 290g listed (earlier 390g listing). Mondiale G/R knurled or ribbed in 1988; 1990: 2-ply cotton, 24mm, max 110psi, for training/general riding. |
| 6900 Vittoria Special Pro | year_to 1988 -> 1990 | 262 | Cotton tubular, latex tube, file/knurled tread; 230g/21.5mm (1983), 220g (1985), 250g (1988, twisted cotton/ultralight tube). 1990: 3-ply cotton, 23mm, max 120psi; 230g standard or 210g in 26in, for racing/triathlon. |
| 6881 Vittoria Corsa CX Squadre Prof | year_to 1980 -> 1990 | 1 | Photo explicitly reads Corsa CX Squadre Prof; preserve old description and220g measured weight. No table240g assigned to this variant. |
| 9428 Vittoria Corsa CG | unchanged | 262 | Light cotton racing tubular, mixed tread, 240g. 1988: double-twisted cotton, ultralight tube, knurled tread, 250g. 1990: 4-ply cotton, 21mm, 240g, max 120psi; CG recommended for the rear. |
| 6908 Wolber Classic 290 | unchanged | 1 | Training/rough-road tubular; 2-ply cotton casing, 24mm, 290g, max 105psi. Durable, comfortable and puncture resistant; earlier specimen averaged 322g. |
| 6918 Wolber Invulnerable 84 | year_to 1988 -> 1990 | 391 | Steel-belted tubular; fine stainless-steel mesh under tread, 2-ply cotton, mixed tread; 22mm, 280g, max 110psi. Training/racing; earlier 285g specification and reported roughly 3x ordinary tubular puncture-free mileage. |

No year_from moves later. Other endpoints stay unchanged, including Sprinter250
year_to1999, CG9428 dates1983–1996 and Classic6908 dates1980–1990.

### Identity decisions and limits

- The four Continental Comp entries may overlap1999 Competition10415, already
  described with22mm/240g and19x26/210g. Abbreviated retailer names do not
  establish a maker model/generation crosswalk. Do not create parallel rows or
  backdate10415 on name/weight resemblance. Extracted configurations remain
  evidence pending a maker crosswalk.
- Olympic24mm/310g/2-ply could be related to1996 Olimpionico10562
  (23mm,300–320g). English/Italian names alone do not establish the same
  configuration. Keep10562 unchanged; do not add a possible duplicate.
- Special Class is the English rendering of Sonderklasse; reconcile the175
  track/time-trial identity to11140. Preserve older approx210g/200–220g figures
  separately from the1990 retailer175g specification.
- Super Sport20 is printed25mm, exactly like Super Sport25. Record the
  inconsistency; do not assert a width for model20 in6788. Keep the independently
  measured215.8g specimen distinct from the1990 steel-bead330g configurations.
- CX/CG share a240g/21mm/4-ply row; p.23 recommends CX front and CG rear.
  They are not aliases. Enrich CG9428; keep generic CX6880 and Kevlar11005
  unchanged. The photograph explicitly reads Corsa CX Squadre Prof, supporting
 6881 availability through1990 only; retain its220g measured figure.
- Special Pro6900 remains one named family encompassing the separately stocked
  standard230g and26in210g tyres, both23mm here. Retain the earlier1983/85/88
  weight/configuration evidence.
- Flash M21mm/215g remains separate from Flash M23 row6886 (326g, NULL years)
  and unlinked1993 Bianchi Flash M19 specs1487/1504/1521. Keep6886 and its Virata
  link1538 unchanged; no M19/M23 alias or link.
- The photograph and steel-mesh text identify Invulnerable84. Preserve the older
 285g specification and reported roughly3x puncture-free mileage alongside
 1990 280g/22mm. Classic6908 retains322g measured average alongside290g listed.
- Generic and mismatched values stay unlinked. Existing unrelated Corsa-CG,
  Modiale and Pista-CS generator/live discrepancies are outside this change.

### Prior values

These are the exact former descriptions and dates for restoration/reference.
Existing titles, search text, maker/category/group and UUIDs did not change.

| ID | Old dates | Old source_ref | Old description |
| --- | --- | --- | --- |
| 6787 | 1999–1999 | 353 | Continental Sprinter 250, Germany, 250 grams |
| 6788 | 1980–1988 | 391 | Continental Super Sport, Germany, 215.8 grams (Actual) |
| 6789 | 1980–1988 | 391 | Continental SuperSport Ultra, Germany |
| 11140 | 1972–1985 | 400 | Tubular, approx 210 g; also sold as the Continental 175 track tubular (200/220 g) |
| 6891 | 1976–1988 | 262 | Cotton vulcanized training tubular, ribbed tread, butyl tube, 290 g listed (velobase: 390 g); the lightest inexpensive training tubular of the range. Mondiale G / R (knurled or ribbed) in 1988. |
| 6900 | 1983–1988 | 262 | Cotton racing / training tubular, latex tube, file tread, 21.5mm; 230 g as the New Special Pro in 1983, 220 g in 1985, 250 g in 1988 (twisted cotton, ultralight tube, knurled tread). |
| 6881 | 1980–1980 | 1 | Vittoria Corsa CX Squadre Prof, Italy, 220 grams (Actual),weighed on kitchen scales so could be some variation |
| 9428 | 1983–1996 | 262 | Light cotton tubular for maximum wear and grip, mixed tread, 240 g. 1988: double-twisted cotton casing, ultralight tube, knurled tread, 250 g. |
| 6908 | 1980–1990 | 1 | Wolber Classic 290, France, 322 grams (avg) |
| 6918 | 1980–1988 | 391 | Wolber Invulnerable 84, France, 285 grams (Spec). Steel-belted tubular, the first tyre with a fine stainless steel mesh under the tread; about three times the puncture-free mileage of ordinary tubulars; mixed tread. |

### Applied validation

The16-statement transaction inserted one source and two components, updated
exactly ten existing components and linked bike_spec18354. Source471 is
catalogue/US with the approved label/citation. All selected fields on the ten
existing rows and both new rows match the reviewed proposal exactly; descriptions
are at most219 characters. The Oscar link retains source325 and all prior fields
apart from component_id and the automatic updated_at timestamp.

Before/after generator comparison across108 loaded CSVs /23,380 specs found
exactly one gain:1989 Bianchi Mondiale “Vittoria Oscar X”, NULL ->11791.
All other generated mappings are unchanged, and a complete live bike-spec
comparison found only18354 changed. The pre-existing15 generator/live
discrepancies are unchanged; no CSV, matcher or override change was needed.

Post-load exact-title and near-duplicate checks found no candidate involving
11791/11792. Existing held-apart rows6880/6886/10415/10562/11005 and M19/M23 bike
specs1487/1504/1521/1538 match the pre-application snapshot exactly. Counts rose
by precisely one source and two components. The second complete SQL run
affected **zero rows** in every table.

Read-only baseline covered195 tyre rows for the three makers, including
unexpected-category/title checks. The19-row printed inventory, identity
decisions, old/new values and UUIDs above preserve the lasting evidence.
Temporary SQL, proposal/snapshots, duplicate reports, simulation and verification
helpers in `/tmp/branford-tyres-reconciliation-20261119/` were removed after
successful readback and zero-change rerun. The Bianchi table comparison download
was also discarded; its original URL remains above. The acquired Branford
source PDF remains at
`/tmp/branford-acquisition-20261119/branford-1990-spring-summer.pdf`.

## Cologne press report reconciliation — applied 2026-11-19

Reconciled all three recovered magazine pages58–60 from
[the public forum post](https://www.velovintageagogo.com/t12991-salon-du-cycle-cologne-1984-campaclbhuret-etc).
[Acquisition, original image URLs and attribution](../source-hunts.md#free-online-source-recovered-cologne-component-report--2026-11-19)
remain the recovery record. The poster names Miroir du Cyclisme1984, but no
cover/issue number/dated imprint accompanies these pages. Targeted exact-title,
Cologne/SpaceLine and issue searches did not locate a matching dated original.
References to IFMA1982 prototypes and later pedal-history narratives do not
independently date this article. **All existing dates were preserved; the new pedal has NULL years.**

### Applied changes

| Row / page | Applied change |
| --- | --- |
| 635 CLB Space Line /58 | Add polyurethane cover, hollow axle, anti-friction coating and front adjustment socket. Retain existing maker-sourced heat-treated alloy, hard anthracite anodising,38–47mm/90g per caliper, regular/aero levers, JeannieLongo and independently reported204g NOS pair including pads/hardware. Dates remain1980–1989. |
| 1098 Weinmann AG Delta 531 Pro /58 | Add41–53mm, approximately185g, standard/recessed mounting and protective rubber cover. Retain maker-source knee-lever actuation, integral hanger/staticQR/semi-auto adjuster, wheel guides and black188-2 gum-hood lever/universal clamp. Dates remain1980–1987. The report does not explicitly identify the185g unit basis; do not turn it into a pair weight. |
| 11790 Bouchet Manolo /58 | The text explicitly identifies SociétéBouchet, Ladoix-Serrigny, and its publicly presented Manolo pedal. Detachable adjustable platform; shoe sole lateral grooves engage guides; lever locks with adjustable retention; broad contact without straps. New makerBouchet, Pedals14/category registration, one pedal row with NULL years and NULL group. No dimensions/weight/pedal thread invented. |

Applied after explicit user approval: source **470**, maker **724** and pedal
**11790**. Source `Miroir du Cyclisme, Cologne component report (attributed 1984; pp.58-60)`,
source_type **article** (schema permits non-enum source types), countryNULL.
This is contemporary press evidence, not a manufacturer catalogue or verified
1984 issue. Description/source_ref updates preserve titles, search_text and
years of both existing rows; former sources are367 for635 and163 for1098.
New title/search text `Bouchet Manolo`, UUID
`119c8195-557b-4005-b9c9-206942036ebd`. Search text comes from the maintained helper.

Exact applied descriptions:

- **635**: `Synchro heat-treated alloy side-pull; 38-47mm, 90g/caliper, hard anthracite anodising. Polyurethane cover; hollow axle with anti-friction coating/front adjustment socket. Regular/aero levers; Jeannie Longo. NOS pair with pads/hardware reportedly 204g.`
- **1098**: `Knee-lever centre-pull; integral hanger, static quick release, semi-auto adjuster. Black-anodised arms, wheel guides and rubber cover; 41-53mm, approx.185g. Standard/recessed fixing; black-anodised 188-2 gum-hood lever, universal clamp.`
- **Bouchet Manolo**: `Detachable, multi-direction adjustable platform; shoe engages two guides via lateral sole grooves. Lever-operated lock with adjustable retention, broad sole contact and no toe straps; for road, track and touring.`

Old descriptions for restoration/reference:

- **635**, oldsource367: `Top Line synchronized side-pull; heat-treated light alloy, 38-47mm reach, hard anthracite anodising. 90g per caliper; reported NOS pair with pads and mounting hardware 204g. Regular or aero levers; used by Jeannie Longo.`
- **1098**, oldsource163: `Weinmann AG Delta 531 Pro, Switzerland. Delta brake (knee-lever actuated, integral cable hanger with static QR and semi-automatic adjuster) with black anodized arms, wheel guides and gum-hood lever 188-2 (black anodized), universal clamp`

### Identity limits and unchanged items

- Before loading, no Bouchet/Manolo maker or component matched by name/title/description.
  A secondary modern history mentions a possible design lineage through Adidas
  Système3 and EddyMerckx Podio. That is not an exact component/production
  crosswalk: preserve3657 (Adidas,1988) and3734 (Podio,1994,365g measured) without
  aliasing, merging or assigning the Manolo name. The period source independently
  names Manolo under Bouchet; no assumed introduction year is stored.
- HuretNewSuccess short/long-cage,Duopar,Pilot,Rival/Rivallong andRider prose
  identifies group offerings, not every existing code/generation. Pilot's
  self-centring rollers/special lever are already recorded4408/8492. No generic
  “double front” wording settles the unresolved Rider front, no Rival image is
  automatically the later ARIS/7000 mechanism, and no “new” caption widens dates.
- Campagnolo's illustrated Record ensemble lacks individual component codes;
  its five unnamed rim offerings give a combined size/weight range, not enough
  for individual row updates. No blanketC-Record group/date rewrite.
- Look's pictured first safety pedal has white aluminium body, ball/needle
  bearings,275g,Delrin cleat and adjustable release, but no PP model number or
  explicit weight basis. Do not attach275g to PP65/PP75 or change their years
  from this identification alone; preserve3788/3790.
- I.M.B.'s two-part rear hub is described functionally but without a uniquely
  established complete model/configuration. Keep it as evidence, not a new
  generic maker/model placeholder. DealDrive's16-ratio mechanism does not map
  cleanly to an existing complete component category. Continental belt-drive
  and Swingbike are complete-bike/concept coverage; VK foot protectors have no
  category. These are decisions, not automatic source-hunt TODOs.

Validation: the10-statement transaction inserted one article source, one
maker, one Pedals category-brand registration and one pedal, and updated exactly
the descriptions/source_ref of635 and1098. Readback matched every source/maker/
pedal field and both approved updates against the snapshot; titles, UUIDs,
search text and years of the existing brakes are unchanged. New pedal category14,
NULL group/years, maker724 and source470 are correct. Adidas3657 and Podio3734
remain byte-for-byte unchanged. The category-picker join returns Bouchet once
for Pedals. Description lengths251/236/212, all within255. The second complete
SQL run affected **zero rows** across all tables.

Fresh read-only generator comparison with the new row **and new maker name**
across108 CSVs /23,380 specs: **zero mapping changes**. No bike specs link to
635/1098/3657/3734/11790; no speculative maker-only links were introduced.
Post-load Bouchet exact and near-duplicate reports both returned zero candidates.
No merges/deletes, date moves, CSV or generator/code changes were made.

Temporary SQL, inventory, plan/baseline/verification snapshots and helpers in
`/tmp/cologne-report-reconciliation-20261119/` were removed after readback and
the clean rerun. The source evidence, old/new descriptions, affected IDs and
new UUID above preserve the result. Requested original scans and bound PDF
remain under `/tmp/online-source-triage-20261119/`.

## Waiting evidence triage — 2026-11-18 (read-only)

**Superseded for Nuovo Tipo by the [visual reconciliation](campagnolo.md#bikecology-nuovo-tipo-reconciliation--2026-11-18-applied-and-validated):** maker and retailer scans now inspected, existing identities confirmed, p.54 specimen check completed, description enrichment approved, applied and validated.

The initial triage located the C1264–C1267 versus 1251/1253 crosswalk in
search-indexed maker text and an alternate transcription. The VeloBase PDF
exceeded the web fetch size limit and the Campy Only PDF returned 403, so
that first pass did not visually verify it. The subsequent reconciliation
recovered and inspected the maker page images through Ebykr, completed the
p.54 specimen comparison and checked live rows. Use the linked applied
record for the verified identities, sources, restoration values and checks.

The later SunTour reviews supersede the initial candidate list:
[6290's PLG handed-code reconciliation](suntour.md#plg-6290-handed-code-reconciliation--2026-11-18-applied-and-validated)
is applied and validated. [3630's specimen/Axis review](suntour.md#xcd-freehub-3630-specimen-and-axis-review--2026-11-18-description-correction-applied)
and description correction are complete; exact FH-XD10/FH-XD11 identity
still needs a specimen code, comparable body/spacing measurements or coded
fitment. Neither is an unread original-photo task. The subsequent
[Nisi 5138/5145 specimen review](nisi.md#51385145-original-specimen-review--2026-11-18-applied-and-validated)
identified mixed Pista Speciale/M-20 packaging and established that 5145's
weight is an unmeasured specification claim; both corrections are applied
and validated. Only 5145's physical/model evidence remains missing. Huret
501.1 DFE remains an exact scan-recovery task: indexed OCR is already known
and is not a newly recovered scan. Manual Belleri/Pelissier/Weinmann
candidates still require comparable measurements/model evidence.

## Manual duplicate additional-photo review — 2026-11-19

User requested a fresh look at the remaining Belleri, Pelissier and Weinmann
cases. Read-only live checks cover **seven candidate rows**, plus the retained
flat-bar/oil-port/family comparators2794/3458/8339. All seven candidates still
have **zero bike links** and no generator references. Inspected **all22 current
full-size specimen photographs**, extending the earlier main-photo review.
Original specimen page URLs remain in the evidence table below.

| Case | Additional evidence | Decision / remaining discriminant |
| --- | --- | --- |
| Belleri2791/2792/2793 | Four photos on2791, three on2792, two on2793. **2791 carries both a BF diamond and a wreath/shield stamp on the same bar**;2792 also has a wreath/shield stamp.2793 has an oval Belleri sticker and a faint shield-type engraving, but no readable model code or clamp measurement. | “Diamond” and “wreath” are not mutually exclusive model identifiers. This supersedes any interpretation of the row titles as proof of separate models, but does not establish equal bend/clamp construction. Keep all three unresolved pending comparable reach/drop, clamp/sleeve measurements or a maker model crosswalk. |
| Pelissier3457/3459 | Two photos on3457, three on3459.3457 shows CP shell initials;3459 shows Pelissier shell wording **and a CP-branded box** labelled steel/extra-light/French racing hub. Neither set supplies a measured shell/flange/cone comparison or a numbered model. | CP branding on the box does not equate the shell variants. Both remain unresolved; retain3458 separately for its visible oil ports/retaining clips. |
| Weinmann1103/1104 | Three photos on1103, five on1104, including rear/side and mechanism views. No readable733/813/1023 stamp or measurement scale found. The owner fields still say long-reach/max75mm versus unmeasured standard reach. | Keep both unresolved; photographs cannot supply reliable millimetre reach or distinguish a cosmetic change from different reach versions. Do not merge into family8339. |

Key images, inspected directly: Belleri2791's
[both-marks close-up](https://www.velobase.com/CompImages/Handlebars/6BA46899-FCDF-42DE-8BEE-95E46C2A0643.jpeg),
[wider stamp view](https://www.velobase.com/CompImages/Handlebars/44382E2F-AD7F-4BA6-99E5-0240E4535681.jpeg),
Pelissier3459's
[CP box and hubs](https://www.velobase.com/CompImages/Hubs/A87E62C7-5418-4BFA-9C02-B27F612E95FC.jpeg),
Weinmann1103's
[rear view](https://www.velobase.com/CompImages/Brakes/8D7E9BD8-A66E-41F4-AF1C-811EEF64B565.jpeg)
and1104's
[rear view](https://www.velobase.com/CompImages/Brakes/2DFFC456-5F0D-466A-AC61-106819981766.jpeg).
Photo numbers here mean counts, not inferred product generations.

New period-source lead: the reproduced maker advertisement in
[L'Officiel du cycle, 1 October1955, p.170](https://ebykr.com/library/pelissier-1955-advertisement-moyeux/)
([original Gallica page](https://gallica.bnf.fr/ark:/12148/bd6t54207485x/f168),
[inspected scan](https://ebykr.com/wp-content/uploads/2026/11/ebykr-1955-lofficiel-pelissier-advertisement-moyeux-p170-scaled.webp))
lists **Plume, C.P. and Plume-Sport** and explicitly says the company was founded
in1909. That is a company-founding date, not specimen3458's manufacture start.
It supplies no shell-mark/model/dimension crosswalk for3457/3459, so no identity
or date changes follow. Direct Gallica image retrieval returned403; the maker
advertisement reproduction was visually read. The newly checked
[July1931 Pelissier advertisement](https://ebykr.com/library/pelissier-cycling-1931-07-advertisement/)
is a derailleur advertisement, not a hub identification sheet. The separately
indexed1952 CharlesPelissier bicycle catalogue does not itself identify the hub
manufacturer's steel specimens. These are not grounds to repeat a general hunt.

Live `duplicate-report.js --brand=<brand> --merge --json` retains four cosmetic
candidate comparisons:2791/2793,2792/2793,3457/3459 and1103/1104. These labels
remain candidates, not proof of identity. **No defensible merge or date revision
established; no DB, source, generator, registry or bike-link changes made.**
The existing TODO now names the precise measurements/coded evidence still needed;
no extra rematching task was added. Task HTML,22 photos, comparison sheets,
advertisement copies, reports, helpers and temporary image dependencies were
removed after recording the source URLs and findings.

## Manual merge candidate review — 2026-11-17

Reviewed all **19 rows / seven groups** from the manual TODO against live DB
fields, all 19 original specimen listings and their main photographs. The
read-only duplicate report initially proposed **12 cosmetic pair comparisons**;
these were candidates, not proof of identity. None of the 19 rows has a stored
component image. Only 1472/1473 have bike links (eight/one). All other candidates
have zero links and no generator overrides referencing their IDs.

### Original evidence

The links below preserve every specimen UUID. Dimensions and dating from these
listings are owner reports, not independently measured manufacturer specifications.
Main photos were inspected directly; additional photo links were inventoried
but not exhaustively inspected. No manufacturing date was established by this review.

| Component/source | Observed or reported distinguishing evidence |
| --- | --- |
| [1103](https://www.velobase.com/Pages/ViewComponent.aspx?ID=64C7220F-3605-49BC-8630-A69B8ABBE6E4) | Black-label Symetric; source lists long reach/max 75 mm, photograph lacks pads. |
| [1104](https://www.velobase.com/Pages/ViewComponent.aspx?ID=C7A5BFBD-24A3-42A3-AF2D-9B4F50442F66) | Red-label Symetric pair; source lists standard reach without measurements. |
| [1472](https://www.velobase.com/Pages/ViewComponent.aspx?ID=DF8B9AD3-4872-48FF-AC3E-CF96516AD7C4) | Maker illustration labelled 0304; Gran Sport, 144 BCD, G.S. crank markings. |
| [1473](https://www.velobase.com/Pages/ViewComponent.aspx?ID=969DB898-AE0D-4E72-A14E-ACF1DEA0181F) | Same Gran Sport crank family with B-marked outer ring; 608 g actual, 53/42 including dustcaps. |
| [1657](https://www.velobase.com/Pages/ViewComponent.aspx?ID=2A73237F-5DD8-4677-9EC5-B7E64869E406) | 122 mm BCD reported; main photo is bare arms/spider; listed 420 g has no comparable assembly basis. |
| [1659](https://www.velobase.com/Pages/ViewComponent.aspx?ID=C50B7A4C-44F7-4D13-A59A-75D4A82E6AE3) | 128 mm BCD reported; main photo includes both rings; white finish, 590 g. |
| [2556](https://www.velobase.com/Pages/ViewComponent.aspx?ID=DFF00D8A-0E7A-4411-87AA-5F05913C9DEE) | Three-point-star badge, plastic-knob lever, photographed on bike. |
| [2557](https://www.velobase.com/Pages/ViewComponent.aspx?ID=803B4C67-0BEB-4F8A-9863-0554E89C1B24) | Wreath badge, plastic-knob lever, photographed loose with wrapper. |
| [2791](https://www.velobase.com/Pages/ViewComponent.aspx?ID=8BDFB085-9217-4A30-92E8-1E72F783EDD6) | Polished drop bar, BF diamond marking; reported 25.0 mm clamp, 40 cm. |
| [2792](https://www.velobase.com/Pages/ViewComponent.aspx?ID=B89B3BBF-5FD8-4A49-9D44-14F7B7630ACC) | Anodised drop bar, BF wreath marking; reported 25.0 mm clamp, 39/42 cm. |
| [2793](https://www.velobase.com/Pages/ViewComponent.aspx?ID=BCBAD111-9D59-421D-B7A1-48B202E61A81) | Black anodised drop bar; reported 40 cm, no clamp dimension. |
| [2794](https://www.velobase.com/Pages/ViewComponent.aspx?ID=AF9B7E8F-6983-4B4B-B988-367619AF4C07) | Clearly flat/riser bar; reported 25.4 mm clamp. |
| [3457](https://www.velobase.com/Pages/ViewComponent.aspx?ID=0A2D4D5C-5558-42B8-9AA8-3AF38C3C9955) | Front/rear steel hub set; no oil port, twin birds/CP. |
| [3458](https://www.velobase.com/Pages/ViewComponent.aspx?ID=85C489AE-1AB4-4B65-A261-7034D1DA4602) | Front/rear set with visible oil ports and retaining clips; rear reported 115 mm/36H. |
| [3459](https://www.velobase.com/Pages/ViewComponent.aspx?ID=36C772EF-237C-4DAF-9EC7-C2F7A25CC9AF) | Boxed front/rear set, no oil port, Pelissier wording; 36H reported. |
| [4634](https://www.velobase.com/Pages/ViewComponent.aspx?ID=7723400E-AD8C-479F-AED4-6A3BA3936965) | Star badge and JUY patent inscription; source attributes version 4J. |
| [4641](https://www.velobase.com/Pages/ViewComponent.aspx?ID=3A1A0875-8AD7-4627-B54B-6AFAA79F4BCA) | No pivot badge in main photo, winged SIMPLEX arm; source tentatively 4F, plastic pulleys possibly replaced. |
| [4642](https://www.velobase.com/Pages/ViewComponent.aspx?ID=06070CA5-F48A-4273-B416-F1EC5E284D91) | Wreath badge and JUY patent inscription; source attributes version 4I; 215 g actual. |
| [4643](https://www.velobase.com/Pages/ViewComponent.aspx?ID=CE38C972-85EE-4634-ADA2-877012CDD5FF) | Wreath badge, winged SIMPLEX arm; boxed specimen; 368.5 g is a source specification, not a measured equivalent. |

### Decisions and remaining discriminants

- **Simplex 2556/2557:** retain star/wreath badge versions, consistent with the
  existing treatment of dating markings (including Competition 2551). Both use
  plastic lever knobs; a shared family name does not establish identical dated
  versions. Retain current 1959–61 / 1960–61 ranges as legacy source claims,
  not newly verified production boundaries.
- **Simplex 4634/4641/4642/4643:** retain the distinct star/wreath/plain-pivot
  and JUY/winged-SIMPLEX marking configurations. The source's 4F/4I/4J
  attributions are secondary identifications, not newly verified catalogue codes.
  In particular, 4641's owner warns that its plastic pulleys may be replacements.
  Do not merge generations by treating pulley material or overlapping broad
  source date ranges as identity proof. Preserve the independent 215 g measured
  fact on 4642; do not average it with the other source weights.
- **Nervar 1657/1659:** keep apart on the conflicting **122/128 mm BCD**
  reports. The main photos compare bare arms against a complete white crankset,
  so **420/590 g is not independent proof of a construction difference**.
  A finish-only merge is unsupported until the bolt circles are measured or
  identified by model. The white listing's informal 1985 city-group claim does
  not by itself authorise changing its legacy 1980 bucket.
- **Pelissier:** all three photographs show front/rear sets; axle position does
  not distinguish these records. Keep **3458** apart from **3457/3459** because
  of its visible oil ports and retaining clips. **3457/3459** remain unresolved:
  CP versus Pelissier lettering is insufficient for a merge of otherwise uncoded
  shells without comparable shell/flange dimensions, axle/bearing construction
  or a manufacturer model crosswalk. The illustrated box is not a dated code
  crosswalk. No date changes from the broad 1909–1940/1930 claims.
- **Belleri:** keep flat/riser **2794** apart from all three drop bars.
  **2791/2792/2793** remain unresolved: material/family and nominal width do
  not identify the bend; the black row lacks a clamp measurement, and the
  available photographs have different viewpoints. Need comparable reach/drop,
  clamp/sleeve dimensions or a model designation. Do not merge on finish alone.
- **Weinmann 1103/1104:** unresolved, despite black/red labels. The first source
  reports long reach/max 75 mm, the second standard reach without dimensions;
  photographs do not supply a scale. Manufacturer source 85 distinguishes
  Symetric **733/813/1023**, already represented by family row **8339**, so
  family identity alone cannot assign both specimens to one reach. Do not merge
  these into each other or into the broad family row until reach/model is
  established. Source comments speculate late-1970s/early-1980s versus c.1973;
  neither proves a replacement for the legacy 1970/1970 dates.

The proven/retained distinctions above are registered as **11 exact pairs**
in `REVIEWED_NOT_DUPLICATES`, rather than protecting an entire row and hiding
unreviewed pairings. Only the three flagged rear-Simplex pairs plus its
JUY/winged-arm pair are registered; already classified generation comparisons
remain generations. Belleri drop/drop, Pelissier no-port/no-port and Weinmann
comparisons stay visible for later evidence. Registry changes affect reporting,
not component matching or any database rows.

### Supported consolidation recommendation — subsequently approved and applied

The application record below supersedes the preparation status in this original
review. The evidence and restoration values remain applicable.

**1473 -> 1472 Campagnolo 0304 Gran Sport** is the one supported merge under
the established policy of folding ordinary marking variants into their family.
Both records explicitly identify 0304 / 144 BCD and share G.S. crank construction;
1473's outer ring bears Bianchi B markings. Its owner calls the exact ring
provenance uncertain (possibly a cropped Record 753 or 753/GS); do not turn that
suggestion into an asserted separate Campagnolo model. Preserve the B-marked
configuration and its measured weight rather than discarding those facts.

Keep survivor 1472's UUID `DF8B9AD3-4872-48FF-AC3E-CF96516AD7C4`,
title/search text, brand 11/category 7/group 4, source_ref 8 and 1980–1985
dates. Retire 1473's UUID `969DB898-AE0D-4E72-A14E-ACF1DEA0181F`
only after reference/mapping checks and approval. Source 8's 1985 discontinuation
note remains applicable; this review supplies no new production boundaries.
Recommended consolidated description (check schema length at preparation):

> 144 mm BCD alloy double crankset with fluted arms and spider. Variants include a Bianchi-marked outer ring; that 53/42 specimen weighs 608 g including dustcaps. Listed unavailable, replaced by Victory, in the 1985 catalogue.

Exact old descriptions, for a future guarded change/restoration:

- **1472:** `Campagnolo 0304, (Nuovo) Gran Sport (144 BCD), Italy Marked no more available, replaced by the Victory range, in Catalogue n. 18 (1985).`
- **1473:** `Campagnolo 0304, (Nuovo) Gran Sport (144 BCD; bianchi labeled), Italy, 608 grams (Actual),for 53/42; incl. dustcaps`

Both have search text `Campagnolo 0304 Gran Sport`, dates 1980–1985 and the
same brand/category/group; 1473 has source_ref 1. Its sole bike reference is
**spec 1045**, 1984 Bianchi Campione d'Italia, `Campagnolo Gran Sport`.
Redirecting it to the broader family avoids implying that this generic text
proves B-marked rings. The eight current 1472 specs are
**5854/8076/5222/9067/9322/4546/4635/5732** and should remain on 1472.
The ranged Cranksets override `campagnolo gran sport` currently chooses 1472
through 1982 and 1473 from 1983; consolidate it onto 1472 while checking all
loaded CSV mappings. Other explicit Gran Sport overrides already use 1472.
Before application, verify all references, simulate the complete mapping delta,
preserve source provenance in these notes, prepare guarded/idempotent SQL and
obtain review of that concrete change set. **No mutation SQL prepared/applied.**

The original manual-review TODO has been replaced with the concrete Campagnolo
preparation task and the remaining dimension/model evidence gaps. No DB, source,
CSV or bike-link changes. Task specimen HTML/photo downloads were removed after
recording URLs and findings.

Validation: `node --test test/duplicate-classify.test.js` and `git diff --check`
passed. Live `duplicate-report.js --merge` scans the same **10,597 component
rows**, now reporting **five cosmetic comparisons in four groups**: Pelissier
3457/3459, Belleri 2791/2793 and 2792/2793, Weinmann 1103/1104, Campagnolo
1472/1473. Exactly seven previously flagged comparisons disappeared; four
additional registered pairs protect reviewed distinctions outside that initial
cosmetic list. No matcher changes or catalogue remapping. Full mapping simulation
remains part of the pending Campagnolo change preparation.


## Retired component identities and merge evidence

### Campagnolo 1473 -> 1472 — applied and validated 2026-11-17

Applied on the user's explicit approval of the preceding recommendation.
Guarded transactional SQL updated **1472's description**, moved **spec 1045**
from 1473 to 1472 and deleted **1473**. Exactly one row changed in each operation;
rerun changed **zero component/spec rows**. The temporary assertion table forced
rollback on unexpected affected counts. Schema/reference inspection found
component_id only in component_detail and bike_spec; neither candidate had an
image. No other reference required migration.

Survivor **1472** retains UUID `DF8B9AD3-4872-48FF-AC3E-CF96516AD7C4`,
title `Campagnolo 0304, (Nuovo) Gran Sport (144 BCD)`, search text
`Campagnolo 0304 Gran Sport`, source_ref **8**, brand **11**, category **7**,
group **4**, dates **1980–1985**, image NULL. Its exact new description is
**224 characters**:

> 144 mm BCD alloy double crankset with fluted arms and spider. Variants include a Bianchi-marked outer ring; that 53/42 specimen weighs 608 g including dustcaps. Listed unavailable, replaced by Victory, in the 1985 catalogue.

The supporting specimen UUID/URL and its uncertain ring provenance are retained
in the review above; source 8 still supplies the maker's model/discontinuation
evidence. No catalogue/source row was inserted or altered.

Retired **1473**, UUID `969DB898-AE0D-4E72-A14E-ACF1DEA0181F`, had exact title
`Campagnolo 0304, (Nuovo) Gran Sport (144 BCD; bianchi labeled)`, source_ref **1**,
image NULL, the same search text/brand/category/group/dates as the survivor.
Its exact old description and survivor's old description are recorded above.
For deliberate restoration, reinsert this complete retired identity before
moving spec 1045 back, and restore the survivor description guarded by the new
description/UUID. Spec **1045** retains bike **73**, label **38**, value
`Campagnolo Gran Sport`, source_ref **43**; only component_id changed. Restore
the old generator override ranges **1978–1982 -> 1472 / 1983 onward -> 1473**
only if deliberately reversing the merge.

The generator now maps bare `campagnolo gran sport` to **1472 from 1978 onward**,
retaining the old lower limit. Other Gran Sport overrides were already on 1472.
The existing eight survivor links stayed unchanged; total survivor usage is
nine. Simulation over all **98 loaded catalogue CSVs / 21,382 paired specs**
found exactly one generated target change: 1984 Bianchi Campione d'Italia,
Crankset `Campagnolo Gran Sport`, **1473 -> 1472**. No gained/lost mappings.

Live validation at **2026-11-17T18:19:50.790Z** matched that simulation exactly.
Generator/live comparison retains **21,367 unchanged**, the same **15 pre-existing
losses**, zero gains/changed targets/missing/ambiguous identities. Whole-DB quality
is unchanged: **0 structural errors**, **1,964 review findings** (1,578 incomplete
dates, 326 linked date conflicts, 35 broad Freewheel labels, 25 descriptions at
limit). Exact full-row comparisons of both candidates and every bike_spec, plus
all quality-report tables, found only the approved description/link/deletion.
The component count fell **10,597 -> 10,596**. The duplicate report now retains
only the four unresolved Pelissier/Belleri/Weinmann comparisons; the Gran Sport
pair is gone. `npm test`: **13 files passed**. `git diff --check` passed.

Removed the completed Campagnolo preparation task from TODO; the other manual
candidate evidence gaps remain open. No source CSV or generated SQL file was
changed. Task SQL, snapshot/report files and throwaway validation scripts were
removed after validation; restoration fields and lasting evidence remain here.

These identifiers preserve provenance for rows removed during the October and
November 2026 duplicate reviews. They identify retired rows, not new merge
candidates. Existing manufacturer notes and reviewed-pair registries retain the
other decisions.

### 2026-11-06 reviewed merges

| Retired component | Survivor | Retired VeloBase source_id | Identity evidence / retained facts |
| --- | --- | --- | --- |
| 1661 Nervar outline-N, gold | 1660 | 18605603-9D08-46FD-B826-00EEFCC0D7A1 | Colour variant; 1663 triple retained separately. |
| 1662 Nervar outline-N, red | 1660 | 995B9697-3101-4D0C-B730-84A978A3AC19 | Colour variant. |
| 1664 Nervar outline-N, white | 1660 | 6A85D297-F4DE-4CAA-8769-A6E65679A3F6 | Colour variant. |
| 3740 Galli silver quill | 3739 Galli (quill) | 0C9E3131-8693-4AB9-A7B4-4113B482A9F4 | Black/silver finishes treated as variants; survivor formerly titled black quill. |
| 6632 Philippe Mil Remo alloy, name on top | 6631 Philippe Mil Remo alloy | 92684A12-4700-410F-AF08-264A58553D43 | Matching alloy/plastic-insert construction, 25.4/22.0 dimensions, conical expander and late-1960s/early-1970s dating; insert position retained as a variant. |
| 9497 Campagnolo Doppler | 5970 Campagnolo 0271/0272/0273 C-Record Doppler | d01ac0fe-cef8-11f1-a2df-02fea3763e8d | Guida '88 duplicate of the survivor's already-described Doppler codes; retired source_id is a catalogue-row ID, not VeloBase. |
| 6134 Shimano SL-1055-BCAI 105SC | 6133 SL-1055-FCAI / BCAI | B48D04FE-B586-4671-BE8F-D69E5728D24A | Combined clamp/braze-on variants; retained 102 g clamp weight. Two 1990-91 Bianchi Alfana specs and generator overrides repointed. |
| 6208 Simplex LJ retro-friction | 7295 Simplex LJ4012 | 284271E2-EE52-474D-A4B1-8632B7BD3A8F | Model field LJ4012; black Delrin Simplex-logo lever photos and catalogue scan: 4012 clamp 28/28.6 mm, 4014 clamp 25.4 mm, 89 g. Cross-hatched extra photo likely stray. VeloBase 1975-83 dating noted; catalogue year_to 1981 retained. |
| 6138 Shimano 600 | 7114 LB-180 / SL-QB11 QB-Lever DX | 44B16F2F-F024-4CB0-9879-0126A42DA03D | Alloy levers with black rubber pads; model field SL-6100, text LB-180 (1978), SL-QB11 (1980), SL-6100 (1982). Not 6137 LB-600's one-way-clutch construction. Catalogue year_to 1981 retained; bare pre-1986 Shimano 600 override changed to NULL. |

Apart from 6134's two repointed specs, the retired rows above had no bike specs;
the Nervar rows, 6208 and 9497 also had no generator overrides.

### 2026-10-26 near-name merges

The original record retained only these deleted source_id prefixes. Do not
reconstruct full source IDs from them.

| Retired component | Survivor | Retired source_id prefix |
| --- | --- | --- |
| 1175 | 1181 | F8B2F67E |
| 2701 | 2694 | 16031640 |
| 6756 | 6757 | 00BDD9AA |
| 6783 | 6784 | 41D74A64 |
| 5177 | 5180 | 58FFA5FB |
| 5151 | 5154 | 3C335747 |
| 7246 | 3662 | b315c43c |
| 683 | 8092 | D6ADDFCB |
| 2699 | 2700 | F9669FE1 |
| 1385 | 1382 | 399E621E |

## Cross-catalog notes

- The Nuovo Record 1020/A rows are dated per version in the DB (v3 1970-81,
  v4 1982-84, v5 1985-87); the bike generator's year-ranged override follows
  those. Keep them in step if either changes.
- Part numbers are reused across eras (1013/1 is a Gran Sport lever in 1953
  and a Record lever in 1967; 1040 is Gran Sport pista in 1960 and "Record
  Pista" later). Diff by number, then read the DB title before deciding.
- **Redundant velobase weights (2026-10-01, Simplex, at the user's
  call):** done when descriptions were still treated as add-only (since relaxed: velobase is not the authority, see SKILL.md). A
  velobase "(Spec)" weight was removed only where it exactly equals a
  catalogue weight for the same model on the same row. Removed text, so
  it can be restored: 2575 "126 grams (Spec)", 4616 "287 grams (Spec)",
  6209 "71 grams (Spec)", 6216 "86 grams (Spec)", 7263 "108 grams
  (Spec)" (each sat right after "France, "). Kept on purpose: every
  "(Actual)" and "(avg)" weight (measured specimens are independent
  evidence of real variance), (Spec) weights that only approximately
  match (6212 105 vs 105.5g, 4603, 4632), derived matches (6231 180g =
  2x90g), rows where the catalogue note doesn't restate the weight
  (2567, 6240), and 4617, where the weight anchors the SP wording.
  Weights on catalogue-inserted rows (e.g. 7281-7284, 7305) are
  themselves catalogue figures, not velobase ones.
- **Description/title sweep (2026-10-02, Simplex + Shimano 1972, after
  the "velobase is not the authority" rule).** 54 rows that had collected
  stacked "1978 catalog: ... Sep 1981 catalog: ..." fragments were
  rewritten into one consolidated description each (what the part is,
  then each figure with its catalogue year). Dropped: merge audit notes
  (the deleted rows are recorded above), velobase "(Spec)" weights that
  repeated a catalogue figure, and stale qualifiers. Kept: measured
  "(Actual)"/"(avg)" weights and "aka Super LJ ..." names. 4615 S0 gained
  the Sep 1981 S0/P figures (250g, 28t) that hadn't fit before. 6181 was
  also taken out of group 141 "Light Action". Old titles, so later
  sources using them can still be matched:
  - Shimano: 4498 "Crane D-501" -> "D500 / DB-100, Crane"; 4499 "Crane GS
    D-510" -> "D510 / DB-110, Crane G.S."; 4439 "Lark-W" -> "D280 /
    DD-300, Lark-W"; 4437 "D-600 Titlist" -> "D600, Titlist"; 4438
    "D-610 Titlist-GS" -> "D610, Titlist G.S."; 4444 "Eagle-SS" -> "D310,
    Eagle S.S."; 2461 "Thunder Bird GTO" -> "E111, Thunder Bird G.T.O.";
    6163 "L-600 Fingertip Control Barcons" -> "L600, Bar-End Control";
    6181 "L-422, Light Action" -> "L422, G.T. Console (5D)"; 6124/6120
    "Super Shifter (single)/(twin)" (originally both "Super Shifter") ->
    "L251, Super Shifter (single)" / "L252, Super Shifter (twin)".
  - Simplex: 2549 "302" -> "SJ A302"; 2576 "SJ A223 (triple)", 7264 "SLJ
    A423 (triple)", 2574 "SJ A103 (Triple)" -> suffix dropped; 4617 "SX
    810 T" -> "SX810 T"; 5904 "SLJ 6164" -> "SLJ6164"; 6209 "(Zytel
    levers, square finger pads)" -> "S3448"; 6231 "MB Silver Range" ->
    "MB2600"; 6212 "SJ (2nd type)" -> "SJ6311"; 6240 "SLJ (4th type,
    black anodized)" -> "SLJ5057 (black anodized)"; 6239 "SLJ (4th
    type)" -> "SLJ5057"; 6216 "SXP (2nd type; stem mount)" -> "SXP 4506".

## source_ref backfill (2026-10-05)

- 1,137 velobase rows (`source_ref` 1) retagged to the catalogue that last
  changed them, matching the "last source to change this row" rule in
  SKILL.md §4. Evidence: applied SQL from earlier sessions, ids in these
  logs, and catalogue cues in descriptions.
- Added `data_source` rows for six Campagnolo catalogues ingested without
  one: 108 Catalogo N. 13 (c. 1955), 109 Catalogo N. 14 (c. 1960), 110
  Dealer Parts Catalogue (1988), 111 "Euclid" brochure (September 1988),
  112 range brochures GB (June and September 1990), 113 range brochure GB
  (January 1991). Use these ids for any re-ingestion.
- Left as velobase: 10 Simplex rows whose only change was a typo or merge
  with no catalogue named, and 30 rows touched only by dedupe/sweep passes.

## Duplicate merge across velobase-heavy brands (2026-10-06)

Not a catalogue pass: a title / part-number duplicate scan over Shimano,
SunTour, Campagnolo, Simplex, Mavic, SR, Weinmann, Gipiemme, Dia-Compe and
Zeus, user-approved. Survivor got any years / weights the deleted row had.
No bike links or overrides pointed at deleted rows (3008 and 3353 kept
theirs). Deleted (id, title, source_id -> survivor):

- 4495 "Shimano Deore XT" (RD, 1994-95, `22DC1316-310E-4AEE-91C9-7C2FBBD22DE3`) -> 4496
- 4719 "SunTour Accushift alpha-4050" (RD, 1988, `BB2C5B9B-740A-4B8B-8B18-3C604D8D6114`) -> 4720 (group 251 -> 231)
- 4698 "SunTour Hero Version 1" (RD, `D958F463-EBE6-4534-8EA0-E6396D932D1F`) -> 4746
- 4699 "SunTour Hero Version 2" (RD, `1D780CF1-DA06-4ACC-ACD5-EAE2FF4A7593`) -> 4747
- 4716 "SunTour U" (RD, 354g, `E9CD72CF-85B9-4A17-865E-F01904E72298`) -> 4717
- 2230 "SunTour Alpha (6sp)" (Freewheels, 1980, `F7397AA0-5BF9-43D1-8CC8-CFF5C4DC3F3B`) -> 2232
- 4555 "Simplex Rigidex 35 (steel pulleys; ...)" (RD, 1954-58, `A3765D6E-6B35-431A-B1A7-A015EA3AC6F5`) -> 4556
- 6581 "Mavic (flat angled  planes)" (Stems, `10602BE5-E2CE-4B5A-8CD5-075150FB8271`) -> 6582, retitled "Mavic (flat, angled planes)" (was "Mavic (flat, angled  planes)")
- 3009 "Gipiemme Special (Pista)" (Headsets, 1980, `210CA368-E960-42E3-AF81-AA28AD8E4ECD`) -> 3008
- 3354 "Gipiemme Sprint" (Hubs, 525g, `C691F1D6-13DC-4EEB-8F7D-84CF06362415`) -> 3353
- 5787 "Gipiemme Crono Special" (Seat Posts, `0DE0711C-E514-4AFC-93B5-79DCE3A06DFB`) -> 5786
- 1754 "Sakae/Ringyo (SR) Sakae SX  Ovaltech" (1986, `D26C3B9D-EB40-466F-A661-CF9202C6E5C4`) and 1763 "Sakae/Ringyo (SR) SX OvalTech" (1987, `CDDA6052-7A33-4E97-9B52-A9B1FA1452CC`) -> 1766, now "Sakae/Ringyo (SR) SX OvalTech" 1985-1987 (was "... Sakae SX Ovaltech")
- 2648 "SunTour FD-2000, Superbe Pro (endless band)" (1981, bare, `3484717E-1DEF-476B-BD7B-3F76F7B80484`) -> 2652
- 2714 "Shimano CB-400" (1970, 833g, `C1D257B5-074D-4987-AD4F-67578DB3E63B`) -> 7509; 2715 "Shimano CB-410" (1970, 908g, `74693F62-3E03-4855-8A87-0B0560622EAC`) -> 7510
- 3102 "Shimano HP-7500 (NJS), Dura-Ace (Track)" (1970-84, 153g, `B44C65E9-0DAB-41AE-930B-49F30905E17F`) -> 7126
- 6119 "Shimano 333" (Shifters, `52319435-7DF0-4363-A741-E65C14C4BAF1`) -> 6136
- 680 "Dia-Compe MX-901" (Brakes, `962C41BA-1C00-4B67-AE78-3549825B2E8D`) -> 8088
- 3923 "Sakae/Ringyo (SR) Silstar SP-11" (Pedals, 1970, 185g, `036524D0-6997-4104-9F89-D654F3410143`) -> 8240
- 1118 "Weinmann AG Cyclocross 420" (Brakes, 1980, `8FFE15D4-6571-4220-A9B2-44130C50C0C8`) -> 1164
- 1139 "Weinmann AG Vainqueur 610 (black label)" (`BB2C2A19-CBEB-442A-AAFA-4108D8883790`) -> 1136
- 1151 "Weinmann AG Vainqueur 750 (black label)" (1980, 378g, `15A8EFBD-1607-48BD-A4FB-29FE1CD1A994`) -> 1148

Left as weaker suspects: SunTour XCD 6000 bare vs coded rows (7 categories),
164-166 sealed BBs, 1220 / 1223 CS-AP20-S8 XC Comp vs XC Pro, Shimano 1412 /
1413 Dura-Ace 7400 chain, SunTour 2619 a-4050 vs 2633 Edge 4050 FD,
Weinmann 1129 / 1130 570.

## Palo Alto ingestion status review — 2026-11-17

Reviewed the existing ingestion notes and live source registry when the user asked about ingesting Palo Alto. All five recorded editions are already processed:

| Edition | Source | Existing component review |
| --- | --- | --- |
| 1976 | 245 | Printed pp.1–30, read and ingested 2026-10-21 |
| 1978–79 | 292 | Component sections transcribed/reconciled, ingested 2026-10-30 |
| 1979–80 | 293 | Component pp.1–33, ingested 2026-10-30 |
| 1981/82 | 248 | Component sections within pp.2–37, read and ingested 2026-10-21 |
| c.1983–84 | 294 | Undated edition, conservative dating and component reconciliation recorded 2026-10-30 |

All five source rows remain in the live DB with current component references and US market codes. No bike rows are assigned to these sources; they were processed as component retail catalogues. Current source-reference counts are not original ingestion totals, because source_ref records the last source that changed a component. Original source URLs, page maps, changes and decisions remain in the edition entries below.

The former TODO entry under archives with unread material was misleading: it described unresolved identities from already-read sources. Consolidated its remaining actions with the component-source follow-up instead of treating any edition as a new load. This initial status check did not re-read scans or change DB rows; the subsequent identity review below supersedes its open Regina-chain, narrow Super Champion clincher and Cyclone II questions. The 1978–79 pass found Mighty Custom as a second source but no Maxy II; the Maxy II question belongs to the earlier Bikecology evidence.

## Palo Alto identity review — applied and validated 2026-11-17

Re-read the relevant retailer scans against existing maker evidence. No new source,
component, merge or date change. The five editions above remain processed sources.

- **Regina chains:** [1976 p.13](https://labibleduvelodivers.blogspot.com/p/revue-2-1976.html),
  image 28, distinguishes C-01 Extra Black, C-02 undrilled Super Corsa Oro and
  C-03 Super Corsa Oro **(Drilled out)**. The latter has slimmer brass-plated
  plates and a hole in each link. [1979/80 p.20](https://velobase.com/Pages/Resources/CatalogScans.aspx)
  (`PaloAlto 79-80/79-80Catalog0023.jpg`) calls these Supercorsa Black, Oro
  and Record Oro respectively; 1981/82 p.28, image 23, confirms the same
  drilled/bevelled Record Oro construction. Regina C-78 pp.4–5 distinguishes
  standard **1376 50 Corsa**, undrilled gold **1382 50 Oro**, drilled gold
  **1381 50 Record**, and nickel-plated **8334 50 Record S**. Thus Black →1376,
  ordinary Oro →1382 and drilled Oro/Record Oro →1381. Measured weights and
  differently stated link counts do not override the construction evidence.
  Corrected Titanio **1391** to titanium plates with Record-type remaining
  components/hardened pins. Exact DB changes and full local maker PDF recovery
  are in [Regina notes](regina.md#palo-alto-chain-identities-and-titanio-correction--2026-11-17-applied-and-validated).
  This supersedes the blanket chain ambiguity recorded in the edition entries.
- **Bike follow-through:** the original 1978 Bianchi scan confirms lightened
  Oro 50 Record on Barcellona/Super-Leggera and ordinary Super Corsa Oro on
  Campione del Mondo CX. Applied **12482 / 12503 NULL →1381**, **12523 NULL →1382**,
  with exact-value, 1978-only generator overrides. Original strings and source 263
  remain intact; see [Bianchi notes](../../../ingest-bike-specs/references/known-catalogs/bianchi.md#1978-regina-chain-identities--2026-11-17-applied-and-validated).
- **SunTour Cyclone II synchro-shift:** [1981/82 p.32](https://labibleduvelodivers.blogspot.com/p/revue-1981.html),
  image 19, retailer 32-101, photographs the paired central top-mount levers with
  endless clamp and recessed Allen fixings. The coded photo/specification in
  [SunTour No.59 p.4](https://www.disraeligears.co.uk/site/suntour_catalog_no_59_-_page_4.html)
  identifies **6282 LD-2300**: same blade apertures, body, clamp and Synchro-Shift
  construction, 69g, 28.6mm round / 35×21mm aero fitting. **6266 LD-2350** is
  separately pictured as the braze-on version; ordinary Cyclone side-mounted
  levers are separately offered by Palo Alto as 32-104/105. Existing 6282 already
  has the correct description, 1981–85 dates and maker source 127; no DB change.
  This supersedes the former no-part-number/no-row claim.
- **Named Super Champion clinchers:** 1979/80 p.15 (`79-80Catalog0018.jpg`),
  1981/82 p.16 (image 36) and c.1983/84 p.18 (PDF 20) identify the narrow
  14–20mm, 27×1 485g / 700C×1 470g rim as **5183 Gentleman**. These do not
  select the later **5184 Gentleman81** merely by catalogue year. The last
  edition separately names **5178 Model 58**, with retailer weights 505/520g;
  preserve the maker-specific 555/565g already held. Both existing date ranges
  cover the evidence; no DB changes.
- **Earlier clinchers:** the 2026-11-22 [profile comparison](#palo-alto-clincher-identities--2026-11-22-applied-and-validated)
  reconciles the standard-width Super Champion and smooth Fiamme Yellow
  Label offerings. The same page separately lists Ergal Yellow Label 290 g
  and red-label 360 g tubulars.
- **Regina freewheels:** the [2026-11-22 construction comparison](regina.md#palo-alto-oro-freewheel-construction--2026-11-22-applied-and-validated)
  reconciles the 1979/80 p.18 and 1981/82 p.26 (image 25) listings to the
  threaded-cog Oro families 2182/2194. The c.1983/84 p.30 (PDF 32) offering
  retains that retail name and has a separate Oro spare-cog line alongside CX.
  Splines on these Oro offerings take the removal tool. French-thread specials
  use two prongs. The BX sprocket attachment is a separate construction.

Scan references corrected: the old uniform1981/82 `53 − image` rule is wrong.
Verified image 36=p.16, 25=p.26, 23=p.28 and 22/21/20/19=pp.29/30/31/32;
use the printed page on each scan rather than a uniform offset.

Validation: two component updates and three NULL-link fills applied; exact live
readback passed, SQL rerun affected zero rows. Before application the all-loaded-CSV
comparison showed exactly those three gains and no new losses/target changes.
After application, all 21,196 compared mappings and the 15 pre-existing unrelated
loss findings match the pre-task baseline. All 13 test files pass. TODO retains
only concrete unresolved work. Task-created page downloads, renders, SQL and
comparison snapshots were removed after recording evidence; user Downloads
originals and maintained CSVs are preserved.

## Palo Alto clincher identities — 2026-11-22 applied and validated

- **Super Champion → 5178 Mod. 58.** [Palo Alto 1976 printed p. 9](https://ebykr.com/wp-content/uploads/2026/11/ebykr-1976-palo-alto-bicycle-shop-catalog-p11-scaled.webp),
  source 245, lists R-06/R-07 at 495 g for 27×1¼ Schrader and 480 g for
  700C Presta, both serrated and 36H. [Bikecology Summer 1981 p. 34](https://ebykr.com/wp-content/uploads/2026/11/ebykr-1981-bikecology-catalog-p34-scaled.webp),
  source 227, reproduces the same asymmetric perspective of the section,
  with the same hollow edges, web, spoke eyelet and stippled brake track.
  It explicitly labels the drawing **Model 58**, offers both diameters
  in 36H and gives a weight under 500 g. The [Wolber maker folder, p. 3](https://ebykr.com/library/wolber-tubulars-tires-rims-folder/),
  source 273, gives the Model 58 standard-width section as 22.8×13.6 mm;
  its later 555/565 g values are preserved as maker figures. Robert Wright's
  [period measurement table, PDF p. 49 / printed p. 45](https://rexresearch1.com/BicycleLibrary/BuildingBicycleWheelsWright.pdf#page=49),
  copyright 1977, fifth printing May 1980, independently gives
  22.5/22.9 mm, 480/495 g and eyelets for the two Super Champion
  sizes. [5179's specimen](https://www.velobase.com/Pages/ViewComponent.aspx?ID=26FC9F8A-B68A-48CD-82EE-D039EE2DFA17)
  shows a Super Champion decal without a model stamp, and the listing
  calls it Schrader. The labelled period drawing supports 5178 at the
  catalogue-offering level. Palo Alto 1979/80 p. 15 and [1981/82 p. 16](https://labibleduvelodivers.blogspot.com/p/revue-1981.html)
  reuse the drawing, the 495/480 g figures and a 16–22 mm standard tyre
  fit range. The later text describes smoother sides and Presta in both
  diameters, separately from the narrow Gentleman. Valve and brake-track
  details in the DB description apply to the 1976 offerings.
- **Fiamme → 4999 Yellow Label clincher family.** The same 1976 page's
  R-08/R-09 drawing and specification identify a smooth-sided open-well
  single-wall rim, with 36H in 27×1¼ Schrader (500 g) and 700C Presta
  (485 g). Wright's table records a 24.1 mm, 495 g, non-eyeleted 27×1¼
  Yellow Label clincher. [4999's specimen photos](https://www.velobase.com/Pages/ViewComponent.aspx?ID=F300EFD1-713C-43A6-8915-D207E574C997)
  show the yellow FIAMME marking, open single-wall well and plain spoke
  holes. The 485 g listing and Presta drilling corroborate R-09. The
  crosswalk identifies the retail offering. “Professional” remains a
  legacy row title and is absent from the photographed markings and
  Palo Alto table. [5002](https://velobase.com/Pages/ViewComponent.aspx?ID=959D2ADC-56D9-48DC-A5FE-D22B30C05092)
  has visible eyelets. [5003](https://velobase.com/Pages/ViewComponent.aspx?ID=4078A1C6-C4B9-4394-AEA9-B85BF7FCC2C9)
  shows another non-eyeleted example with similar label, and its
  metadata conflicts with the photos on eyelets. No specimen merge or
  additional fitment was inferred.
- The guarded SQL updated two descriptions and moved 4999's source
  259 → 245. Readback confirmed the same IDs, UUIDs, titles and date
  ranges, exactly 140/249 characters, no links to 4999 and existing
  1978 Bianchi spec **12413 → 5178**. The repeat affected zero rows.
  Whole-database quality and bike-link comparison findings matched the
  pre-rim readback. Rim duplicate reports each returned one configuration
  pair and no exact duplicate.
  For rollback, restore source 259 and description `Fiamme Professional
  (yellow label), Italy, 485 grams` on 4999. Restore 5178's prior
  description `Super Champion Mod. 58, France, 522.5 grams (avg).
  High-pressure rim for standard-width wired-on tyres, 22.8 x 13.6 mm,
  36 holes (40-48 on 650B, 700C and 27 x 1 1/4 polished); 485 g (600A),
  525 g (650B), 555 g (700C), 565 g (27 x 1 1/4).` Guard on the verified
  post-change identity and source when restoring.

## Palo Alto Bicycles catalogue — 1981/82 (blogspot "Catalogues divers: Revue 1981", data_source 248)

- `data_source` label "Palo Alto Bicycles catalogue (1981/82)", country US. Source:
  https://labibleduvelodivers.blogspot.com/p/revue-1981.html (54 images at 1276 x 1650,
  "CATALOGUES VELOS 1981 (n)", numbered from the back: image 54 = cover "1981/82
  catalog", 53 = index; printed-page offsets vary: image 36=p.16 and image 19=p.32,
  verified in the 2026-11-17 identity review). Palo Alto Bicycles, 171
  University Ave, Palo Alto CA; the next edition of the Palo Alto Bicycle Shop 1976
  catalogue (data_source 245). Gram weights for nearly everything. Components are
  pp. 2-37; clothing (4-7), tools (13, 23), Palo Alto-built wheels (14), spokes (15),
  the house "Palo Alto Cotton" tubular, tubes, pumps, toe clips and straps, cables,
  lubricants, superlight bolts, bottles, books, rollers, helmets, bags, racks, shoes and
  posters are out of scope. Read 2026-10-21.
- Main value: the Avocet range (saddles, seat post, cranks, bottom bracket, hubs, pedals,
  headsets), whose DB rows were bare velobase entries, many dated a year late.
- Changed (source_ref -> 248, 45 rows), all dated to include 1981: Avocet 4 Model I BB
  (was undated), 1453 Racing crank (1982 -> 1981), 1454 Touring Triple, 2937 / 2936 Model
  II / III headsets (1982 / 1983 -> 1981), 3189 / 3191 Model I / II low-flange hubs, 3669 /
  3670 / 3671 Model I / II / III pedals, saddles 5258 Racing I, 5253 Racing II, 5251 Racing
  III, 5252 RS, 5254 Touring I (later), 5255 Touring II, 5256 Touring WI, 5724 seat post
  (descriptions rewritten on all, velobase weights kept); Galli 741 Super Criterium brake
  (undated -> 1981); Universal 1083 Mod. 77 (1977 -> 1981), 1086 CX, 1082 Super 68, 1080
  Extra Mod. 51; SunTour 4773 VX-T; SR 6668 FS Foursir stem; Super Champion 5187
  Performance, 5183 Gentleman, 5180 Arc en Ciel, 5189 Record du Monde; Fiamme 4992 Ergal;
  Wolber 6918 Invulnerable 84; Clement 6731 50, 6733 70, 6737 CdM Seta, 6763 Paris-Roubaix
  Seta; Specialized 6861 Touring, 6867 Touring-X, 6869 Ultralight, 6863 Touring Turbo,
  6868 Turbo S; Lyotard 9085 45 and 3815 460D; 8765 Sedisport; Phil Wood 3478 hubs and 100
  BB.
- Added (8 rows, 1981): Avocet Touring III, Touring WII, Racing IIT, Racing WI, Racing WII
  saddles; Galli Brunito brake; Sugino Super Mighty Custom (kept apart from 9080 Mighty
  Custom, 1976: the Super Mighty series is the 1978 rename); Wolber steel-belted clincher.
- Judgement: the catalogue's SunTour "Cyclone II" is our Cyclone Mark-II (RD-3500,
  RD-3700, FD-2300, 1981-85), already covered; its "syncro-shift" Cyclone II lever was
  identified as existing 6282 LD-2300 on 2026-11-17 (evidence above). SR "Model G" bar = 8220 Foursir-G (1980-82),
  unchanged. Not applied: the SunTour "Superbe" brake (CB-1000 1977-78 vs Superbe Pro
  CB-4100 / 3100 1979+, unclear); Regina chains were initially held, now identified
  as 1381 / 1382 / 1376 respectively (review above); Avocet "W20" 5257 left as is. Duplicate noticed: two bare "Specialized
  Touring-II" rows (6865 with 265 g avg, 6866 bare), a merge candidate.

## Bikecology catalogue — 1980 (blogspot "Catalogues divers: Revue 1980", data_source 247)

- `data_source` label "Bikecology catalogue (1980)", country US. Source:
  https://labibleduvelodivers.blogspot.com/p/revue-1980.html (64 images at 1276 x 1650,
  "CATALOGUES VELOS 1980 (n)", numbered from the back: image 64 = cover, 01 = back
  cover; printed page n = image 65 - n). Bikecology Mail Order, 12509 Beatrice St, Los
  Angeles, $1.00, the cover advertises the "Annual Warehouse Clearance Sale, Sat., Sep. 6"
  (a Saturday in 1980) and "Eclipse '80 Nomad". Same retailer as the April 1976 (data_source
  244) and Summer 1981 (227) catalogues. Components are pp. 9-36 (headsets to rims);
  pp. 2-8 and 62-63 are handmade frames (Bob Jackson, Mercian, Colnago, Freschi, Jack
  Taylor tandem), p. 9 index and forks, the rest bags, clothing, shoes, tools, pumps,
  tubes, spokes, cables, wheels. Read 2026-10-21; pp. 32-34 (tubes, pumps, spokes) not
  read.
- Dated inside it: "NEW"/"New for 1980": Ideale 88/Titanium and 92 Touriste, SunTour
  Pro Superbe brake and Superbe pedal, SunTour New Winner freewheel system, SR SilStar pedal,
  SR Laprade 220 mm, redesigned Campagnolo Super Record rear (cage for 6-7 speed) and Record
  front, Wolber Liberty, Tange "NEW" Levin.
- Campagnolo, SunTour, Shimano, Cinelli, SR (Royal, Laprade, Custom, Swan, World bars),
  Dia-Compe G, Modolo, Mafac and the 600EX headset all already covered 1980: no change.
- Changed (source_ref -> 247, 27 rows): year_to -> 1980 on 1391 Regina Extra 50 Titanio
  (sold as the Record III Titanium), 8334 Record S (Record II "S"), 8765 Sedisport,
  9080 Sugino Mighty Custom, 880 Modolo Professional [INTERN PAT], 9068 Galli Ti, 845
  MAFAC Cyclo-Tandem, 909 Phil Wood disk brake, 6796 Cycle Pro 300, 6921 Wolber Liberty,
  Clement 6731 / 6733 / 6737 / 8971, 9104 Mavic Extra Legere, Super Champion 5180 Arc en
  Ciel and 5189 Record du Monde; year_from -> 1980 on 7821 SunTour TZ-6000 Z chain (1982;
  the Trans-Z chain dates from 1978), 4009 SunTour PL-4000 Superbe Pro (1981; judgement:
  the "all-new Superbe pedal going into 1980", 278 g, needle bearings), 8080 Dia-Compe
  NGC500 (1986); dated 1980-1980 (were undated) 3621 SunTour Vx hubs, 97 OMAS Titanio BB,
  3067 OMAS Superlight headset, 4910 Ambrosio Synthesis; descriptions on 2976 Chris King
  1", 3771 KKT Pro Ace (PA) light alloy, 6797 Cycle Pro T230.
- Added (7 rows, all 1980, group NULL): Ideale 92 Touriste (under brand 580 "Tron &
  Berthet", where the Ideale rows live), Barelli Superlight, Phil Wood tandem hub (double
  threaded), Cycle Pro 270 tubular, Cycle Pro High Extra (RRE) and Road Racing Extra
  clinchers, Cycle Pro touring tires. category_brand links already existed (0 rows
  inserted).
- Identity follow-up 2026-11-20, **applied and validated**: [Ideale88/Titanium](ideale.md)
  is a separate advertised titanium-underframe configuration from steel88 row5654
  and titanium90 row5658; the1981 low-profile88 explicitly has steel rails.
  [OMAS steel-axle hubs](omas.md) match existing101CB/A11721 and101CB/P11722 by
  axle material and black-ended QR photos, an inferred maker-code identification.
  Added saddle **12169** at 1980 and dated OMAS11721/11722 to 1980–1981 after
  explicit approval; the older uncertainty is superseded by those brand notes.
  Live rows5655/3449 are absent. Readback matched the approved changes; the
  second load affected zero rows. Actual comparison leaves all 24,061 loaded
  spec mappings identical. No supported new bike links or merge candidates;
  integrity report zero errors, 2,069 reviews. Temporary SQL/scans/scripts were
  removed after validation.
- Other items not applied in that pass: Jasik tandem headset parts,
  Regina Record I Oro and Super Corse Oro chains (still no unambiguous row), SR SilStar
  3922 (already 1970-82). Brands "Cycle Pro" (337) and "National" (670) cover the same
  Japanese maker (National Tire Co.); merged 2026-10-29: brand 670 deleted, rows 9097 /
  9098 moved to 337 and retitled (old titles "National tubular" / "National clincher";
  search_text is now the new title, since search-text.js drops "Cycle" as a brand stopword).
  Also deleted row 2983 "Cycle Pro" (Headsets, velobase, bare placeholder, no
  years, no bike_spec links) and the now-empty category_brand (Headsets, 337). Out of scope: frames,
  forks (Tange Italian-style, Cinelli-style, standard), the Bikecology-built wheels (Tourist
  179A / 279A / 379A, Racing Tubular 579), bolts, spokes, tubes, pumps, tools, toe clips and
  straps, mirrors, cables, tape and plugs, bags, clothing, shoes and helmets.

## Bike Warehouse catalogue No. 12 — 1978 (blogspot "Catalogues divers: Revue 1978", data_source 246)

- `data_source` label "Bike Warehouse catalogue No. 12 (1978)", country US. Source:
  https://labibleduvelodivers.blogspot.com/p/revue-1978.html (37 images at 1276 x 1650,
  "BICYCLE CATALOG 1978 (n)", numbered from the back: image 37 = back cover with the parts
  index, image 36 = p. 1, so printed page n = image 37 - n; image 01 = a final page of
  frame-builder ads). Bike Warehouse, a division of Nashbar / Associates Inc., Ohio,
  "Copyright 1978 Bike Warehouse", toll free 1-800-321-2474. A US mail-order retailer like
  Bikecology and Palo Alto; prices USD, grams. Components are pp. 1-10 plus the Lambertini
  saddles on p. 14; pp. 11-13 and 15-23 (tools, built-up wheels, bottles, carriers,
  clothing, helmets, shoes, speedometers, lights, books) and the wm. sampson frame ad are
  out of scope. Read 2026-10-21. Probably the same catalogue family as the unreadable
  400 x 400 "Bike Warehouse" 2velo.com album noted under Bikecology 1981; not compared.
- Dated inside it: "NEW" in 1978 = Shimano 600 EX and Dura-Ace EX groups, Uniglide
  freewheel and chain, SunTour Ultra-6, Sakae Laprade P5, Sunshine Hi/Lo hubs, Wolber
  Liberty, Michelin TS foldable clincher, HKK 2-Chain, Zeus alloy headset; "limited supply"
  Mavic, Weinmann and Super Champion rims.
- Almost everything Shimano, SunTour, Campagnolo, Wolber and Zeus Criterium / 2000 lists was
  already in the DB with 1978 covered (Shimano 600 EX / Dura-Ace EX 1978-84 rows, SunTour
  Cyclone / VX / Superbe, Wolber from data_source 235): no change.
- Changed (source_ref -> 246, 40 rows): year_to -> 1978 on SunTour 4772 V-Luxe; Phil Wood
  3478 Standard Flange, 3476 High-Low, 100 cartridge BB (descriptions rewritten); Zeus 4860
  2000 rear, 8857 2000 hub set, 3653 Criterium hubs, 3654 Gran Sport hubs, 3171 Gran Sport
  headset, 3168 2000 headset, 8853 2000 control lever, 8855 Criterium shift levers, 2026
  Criterium triple crank, 4049 2000 titanium pedals; 3756 Hi-E pedals; Hutchinson 9045
  Supersprint, 9046 80-GTX Corsa, 9047 Corsa Leggero, 6810 Krono Milano, 9050 Special Seta;
  9053 Michelin Fifty; 5004 Fiamme Strada red label; 5185 / 5180 Super Champion Medaille
  d'Or / Arc en Ciel; Cinelli 2801 64 Giro (70s), 2809 66 CdM early logo, 5337 Mod. 55, 9083
  Unicanitor 65; 9080 Sugino Mighty Custom. year_from -> 1978 on 3261 Campagnolo Hi-Lo
  (1980), Weinmann 7776 A124 and 5208 A129 (1979, first seen in the 1979 Chicken list),
  Sakae 7907 Royal P1 ESL post, 6663 Royal SL stem, 7901 Apex stem, 8234 Custom stem, 7886
  World Custom-SL bar (1980), 8789 Michelin Elan TS (1979; judgement: the "NEW Michelin TS
  foldable clincher"), 1398 Sedis Gold (1980). 3678 Bob Reedy pedals dated 1978 with a
  description.
- Added (21 rows, all 1978, group NULL): HKK Blue Sky Silver / Oro / Gold and HKK 2-Chain
  (Ultra-6) (new brand HKK, 669); Lambertini racing, smooth leather, suede and padded suede
  saddles (new brand Lambertini, 671); National tubular and clincher (new brand National,
  670); IRC Road Lite Z, High Racer Skinwall, High Pressure Gumwall; Hutchinson LL 240 and
  GTX 80 latex; Mavic Extra Legere; Dia-Compe Gran Compe Superbe, 500G and Gran Compe 710;
  Sunshine Hi/Lo hubs; Bullseye hub. category_brand links added for these.
- Not applied: KKT Pro Ace / Pro Vic / Top Run (existing rows cover the span or the name
  is ambiguous), Super Olimpic pedals (several Olimpic rows, no clear match), Dia-Compe
  730 x 810 (8929 is the 1964 Dia-Weinmann), Tange Levin (DB rows are undated variants),
  Rigida 13 mm, Fiamme Gold / Yellow Label (no single row). The Ideale saddle rows are
  filed under brand 580 "Tron & Berthet", which looks like a mislabelled brand; not
  changed here.

## Palo Alto Bicycle Shop catalogue — 1976 (blogspot "Catalogues divers: Revue 2 1976", data_source 245)

- `data_source` label "Palo Alto Bicycle Shop catalogue (1976)", country US. Source:
  https://labibleduvelodivers.blogspot.com/p/revue-2-1976.html (42 images at
  1276 x 1650, "CATALOGUES 1976 (n)", numbered from the BACK: image 01 = back cover, 41 =
  introduction and index, 42 = cover; printed page n = image 41 - n). Palo Alto Bicycle
  Shop, 171 University Avenue, Palo Alto CA, "Copyright 1976", 1976 USCF form in the back.
  A US mail-order retailer, like Bikecology, with its own catalogue numbers (T-, R-, H-,
  CS-, BB-, HS-, BR-, DR-, SE-, SP-) and gram weights. Components are pp. 1-30; pp.
  31-38 are shoes, cleats, clothing, touring bags, racks and a racing application, no
  category. Read 2026-10-21: all of pp. 1-30.
- Dated inside it: Alas cranksets "available as of May 15, 1976"; new for 1976 Stronglight
  105 / 105bis cranksets and the 651 / 650 bottom brackets, Cinelli N 1/Record stem,
  Universal CX, C.L.B. Professional and Galli Ti / 75 brakes, latex-tube Clement
  tubulars and Vittoria's sealant-valve tubulars, Campagnolo Super Record alloy headset.
  Duplicate catalogue numbering: BR-09 / BR-10 swap Model 51 and 61 between pp. 23 and 24,
  and the p. 20 toe-clip numbers clash with the Weyless pedals of p. 19.
- Most rows (SunTour, Shimano, Campagnolo derailleurs, shifters, hubs, brakes, Super
  Champion rims, Cinelli bars and stems) already covered 1976 or were done in the
  Bikecology 1976 pass: no change.
- Changed (source_ref -> 245, 31 rows): Clement year_from 1977 -> 1976 on 6755 Gran
  Sport 65, 6733 70, 6762 Paris-Roubaix, 6757 Grifo 61, 6763 Paris-Roubaix Seta, 8971
  Criterium Seta Extra, 6738 Campionissimo Seta Extra, 6761 Nuovo Super Seta Extra; 6891
  Vittoria Mondiale and 6892 Normalcross dated 1976; Universal 1086 CX (description),
  1082 Super 68, 1081 Mod. 61, 1080 Extra Mod. 51 (year_to -> 1976); 595 CLB Professionnel
  (description, taken as the 1976 "New C.L.B. Professional"); 2123 Maillard 700 (6 speed)
  year_from 1980 -> 1976; 1364 Everest Serie Special; 5483 Selle Italia Criterium
  (buffalo) and 5326 Cinelli Unicanitor Mod. 50 year_to -> 1976; 5656 / 5657 Ideale 90
  descriptions; 5906 STM (straight post) dated 1976; 9043 Weyless seat post 207 g; 100
  Phil Wood BB year_from 1977 -> 1976; 3818 Lyotard 65, 3815 Lyotard 460D, 3769 KKT Pro Ace
  descriptions; 2798 Cinelli 14 year_to -> 1976; 6492 Cinelli 1R early version 1970 ->
  1976-1979 (judgement: new in 1976, the winged-logo 1R starts 1980); 1920 Sugino Mighty
  Competition and 8890 Mighty Victory year_to 1973 -> 1976.
- Added (34 rows, all 1976, group NULL): Vittoria Vulcan, Granturismo, Supersport,
  Competizione, Giro d'Italia, Tour de France, Criterium, Record, Imperforabile,
  Supercross, Record Seta, Imperforabile Seta and Record (clincher); Galli Ti and Galli 75
  brakes; Maillard 700 (5 speed); Everest Oro and Everest Dural freewheels; the new
  brand Alas (brand_id 668: headset, Edramon, Super Competizione and Competizione
  cranksets, steel and titanium bottom brackets); Stronglight 105; Sugino Mighty Custom;
  Cinelli 63 Campione del Mondo, 19 Track and Unicanitor 65; Selle Italia Superlight;
  Lyotard 45; KKT S.P. Sprint; Weyless Road and Track pedals.
- category_brand links added for Alas (Bottom Brackets, Cranksets, Headsets) and Weyless
  (Hubs, Seat Posts): the Bikecology 1976 load had added Weyless hub and seat post rows
  without them, so the brand-by-category lists would not have shown them.
- Initially held: Regina Super Corsa Oro and Extra Black chains (resolved by the
  2026-11-17 construction crosswalk above). Other holds: Fiamme Red / Yellow Label rims and Super Champion
  clinchers (no single matching row), Shimano Tourney hubs, Phil Wood medium-flange hub,
  Lyotard 23 Platform (ambiguous between the Marcel Berthet rows), Cinelli 65 / 66 bars and
  the M-71 pedal (existing rows are the 1980s versions or already well described), the
  Vittoria "Butyl" (a tube type). Selle Italia Superlight kept apart from 5504
  Superleggera (1978-79, 215 g, Allen-key nose): same maker and probably related, but a
  different construction as described. Out of scope: pumps, tyre sealant and
  carriers, spokes and tools, toe clips and straps, cables and housing, brake parts, Arnold
  bolts and bottle cages, shoes, cleats, clothing, racks and bags.

## Bikecology catalogue, 5th edition — April 1976 (blogspot "Catalogues divers: Revue 1976", data_source 244)

- `data_source` label "Bikecology catalogue, 5th edition (April 1976)", country US. Source:
  https://labibleduvelodivers.blogspot.com/p/doc-1976.html (116 page images at
  1276 x 1650, "BICYCLE CATALOG 1976 (n)", legible; printed page = image number - 2).
  Bikecology Mail Order, Santa Monica CA, (c) April 1976, "5th Edition, supersedes
  all previous editions and prices". A retailer: its own catalogue numbers (HPA,
  HDA, SU, HSI ...) beside the makers' numbers, AW / SW weights and 1976 USD prices.
  Components are pp. 1-55 (table of contents on the second image); the rest is
  clothing, shoes, bags, camping, complete bikes (Ron Cooper, Mondia, Bob Jackson,
  Masi, Windsor, Niko, Rossin; pp. 87-111), tools,
  lighting and books. Read 2026-10-21: every component page (pp. 1-55).
- User decision, 2026-11-18: do not load bikes from Bikecology catalogues.
  Removed the April 1976 complete-bike ingestion task; component evidence work
  remains in scope.
- Dated items inside it: new for 1976 Cyclone shift levers, Maxy 5 crank, Sunshine
  small-flange hubs, Elan clincher wheel (from May), Sunshine Super Pro Am stem
  (June); introduced 1975 TTT Record stem, Rally rear derailleur, Weinmann 500 de
  Luxe, Campagnolo 2040/1; Campagnolo Record pedals "till 1/1/76"; Super Record hubs
  "discontinued by Campy in 1975".
- Most rows were already in the DB with years covering 1976 (SunTour, Shimano,
  Campagnolo, Sugino, Dia-Compe, Weinmann, Mafac, Regina, SR, 3ttt, Cinelli,
  Stronglight): no change.
- Changed (source_ref -> 244): 26 rows. year_to -> 1976 on 8074 SunTour 3703
  Allegro, 5599 / 5600 Ideale 2001 / 2002, 2773 3ttt Touriste bar, 5180 / 5185 /
  5189 Super Champion Arc en Ciel / Medaille d'Or / Record du Monde; year_from
  -> 1976 on 5333 Cinelli Unicanitor #4, 7887 / 2913 SR World Custom / World
  Randonneur, 3602 Sunshine/Sansin low flange, 5091 Mavic Montlhery Legere, and
  (from 1977) Clement 6737 / 6731 / 8972 / 6732 / 8970; dated 1976-1976 (were
  undated) 5344 Cool Gear The Seat, 5609 Ideale 39, 5337 Cinelli Mod. 55, 3476 Phil
  Wood High-Low, 3733 East Rochester Tool & Die, 6810 Hutchinson Krono Milano, 5182
  Super Champion Etoile; descriptions rewritten on most; 5648 Ideale 80 description
  only. 5303 Brooks Team Professional year_from 2000 -> 1976 (judgement: the
  Bikecology "Professional", 532 g, is taken as 5303; title kept; the 2000 date was a
  decade placeholder and contradicted the 1970s Raleigh links).
- Added (all 1976, group NULL): 9042 Weyless WLS 1000 hub set, 9043 Weyless seat
  post, Mavic Elan rim, Hutchinson Supersprint / 80-GTX Corsa / Corsa Leggero /
  Super Corsa / Cross TR / Special Seta (9045-9050), Michelin Falco / Nibbio /
  Fifty / High Speed (9051-9054).
- Regina chain hold superseded 2026-11-17: printed p.28 (image 30) explicitly
  distinguishes CH5 Extra Black→1376, CH6 undrilled Oro→1382 and CH6a Oro
  Drilled Out→1381. Maker C-78 p.5 corroborates the construction split.
  Enriched the three existing descriptions, source_ref→244, and linked the
  original 1981 Raleigh Professional D'Oro spec 9342→1382 with a scoped override.
  No new identities or dates; live readback, zero-change rerun, full mapping
  comparison and all 13 test files passed. [Exact changes and evidence](regina.md#bikecology-1976-chain-identities--applied-and-validated-2026-11-17).
- Other original holds (no row or not enough evidence): HKK chains (no brand row), Everest
  superlight CH8, Renold track chain, Sugino Mighty Custom SU2 / Maxy 5, Ideale 90TB / 90IR vs
  our "90 Speciale Competition", Cinelli bars HSI 63 / 65, Tange "Levin HS TL" (maybe
  3152 LV-11), Fiamme Red / Gold / Yellow Label tubulars, Tahei and Lambertini
  saddles, Belri bar and stem, Dura-Ace track hubs H740 / H840 / H741 / H841 (the
  numbers do not match our HS-741 / H-741 rows and HA-300 may be the same hub),
  Campagnolo Nuovo Tipo C1264-C1267 (hold superseded by the [visual reconciliation](campagnolo.md#bikecology-nuovo-tipo-reconciliation--2026-11-18-applied-and-validated): individual codes of existing 1251/1253 pairs, not missing identities). Out of
  scope: the Bikecology-built wheels (Hosteller, Tourist, Olympiad, Elan, ...), tubes,
  juvenile tyres, spokes, pumps, forks, tape and plugs, clothing and shoes.

- **Maxy II SU3 follow-up, 2026-11-20:** original printed p.7/image9 explicitly
  shows a three-arm swaged spider with both rings replaceable, matching existing
  1945. This supersedes the earlier assertion that the DB's three-bolt row is
  necessarily a different component. A guarded retitle/description/date-source
  enrichment was approved, applied and validated: one row changed, rerun zero,
  no catalogue mapping or integrity finding changes. The independent 1980 Bike Warehouse p.8
  instead calls a five-arm crank Maxy II; it is a different configuration and
  cannot extend the three-arm dates. [Exact evidence and applied fields](sugino.md#bikecology-maxy-type-ii-identity--2026-11-20-applied-and-validated).

## Bikecology catalogue — Summer 1981 (2velo.com, multi-brand US retailer)

- `data_source` label "Bikecology catalogue (Summer 1981)", country US. Source:
  https://2velo.com/bikecology-bicycle-catalogs/ (56 pages, `bikeNN.jpg` via
  i0.wp.com `?w=1400`, ~1220 x 1600, legible). Bikecology Mail Order, Los
  Angeles; warehouse sale 12 Sept 1981. A retailer, so only its own catalogue
  numbers (no manufacturer part numbers) and retailer-view descriptions. Read
  2026-10-20: pp. 5 (Dura-Ace EX), 8, 10, 12-19, 21-29, 33, 34, 45; the rest
  (bikes, frames, clothing, tools, bags, tubes, spokes, lights) is out of scope.
- Almost everything it lists was already in the DB with years covering 1981
  (Campagnolo Record / Super Record headsets, cranks, hubs and derailleurs, SR
  Four-Sir / Custom / SAS / New Royal / Laprade, Cinelli 1A / 1R / 64, Tange
  Levin 3152, OMAS, Chris King, SunTour Cyclone / VX, Shimano Dura-Ace EX, Modolo,
  Dia-Compe G, KKT Pro Ace, Clement tubulars, Sedisport). Second-half rows
  (derailleurs, brakes, pedals, hubs, rims, tyres, chains) were only
  spot-checked for presence, not diffed row by row.
- Changed (year_to -> 1981, source_ref -> this source): 5297 Brooks Professional
  Select (1979); 5656 and 5657 Ideale 90 Speciale Competition (to 1980); 1963
  Sugino Super Mighty Competition (to 1980; one bike spec links it); 1948 and
  1949 Sugino Mighty Tour double / triple (to 1980); 1856 Spécialités TA
  Cyclotouriste (to 1975). All guarded `year_to < 1981`.
- Not applied: candidate new rows (Selle San Marco Concor Maxi, Ideale 92
  Touriste Man / Lady, Sugino Super Mighty Custom) were not verified missing; the
  DB has Ideale "92 Diagonale" rows (1977) that may be the same saddle. The
  Brooks "Professional" here (532 g, chrome rails) is probably 5303, whose DB
  years (2000) contradict the 1970s bike links; not changed from this source.
- No ITM, Selle Royal, ISCA, Daido, Kusuki or mid-80s SR in this catalogue, so
  it closes none of the bike-link gaps that prompted the search.
- p. 15 (Seats) re-read 2026-11-01 from ebykr's retouched scan and transcription of
  the same leaf (https://ebykr.com/library/bikecology-1981-catalog-seats-ideale-concor-and-brooks-page-15/,
  from bulgier.net `Bikecology-81`); same catalogue, so still data_source 227. Applied:
  9298 Concor Max year_from 1983 -> 1981 (the "Special Concor Maxi", steel rails, black
  suede, 6ft 2in / 210 lb riders); 5297 Brooks Professional Select description (extra-large
  copper rivets, black rails, gift box with Proofide, 540g; velobase 548g kept); 5661 / 5660
  descriptions name the US "92 Touriste" Man / Lady (Lady "new this year").
- Merged (user-approved 2026-11-01): 9110 "Ideale 92 Touriste" (1980-1980, source_ref 247,
  source_id 4df62d76-cd8c-11f1-a2df-02fea3763e8d, no bike_spec / override refs) deleted into
  5661 "Ideale 92 Diagonale (long model)" (1977-81): same 270 x 168-170mm oversized 90.
- Left: 5303 Brooks Professional (1981 "normal diameter rivets" vs the 1975 "large copper
  rivets" on the row; years already cover 1981); bare "Concor" steel / magnesium-rail
  models (several candidate rows). The1980/1981 Ideale88 comparison was revisited
  2026-11-20 in[ideale.md](ideale.md): the1980 titanium and1981 steel offerings
  must be distinguished;5654's1960 start is unchanged. No automatic date move
  follows from the shared88 name or the dealer's new-model wording.
- The other 2velo pages: Bike Warehouse (40 images at 400 x 400, unreadable),
  Cyclo-Pedia 11th edition (c. 1974, 72 pp: Huret, Simplex, Campagnolo, TA,
  Stronglight, Vittoria, Mafac, Weinmann, Ideale, 3ttt; brands already covered),
  Fiamme / Galli / Bocama (single-brand, not read).

## Holdsworth "Bike Riders Aids" — May 1975 (disraeligears.co.uk, data_source 260)

- `data_source` label "Holdsworth Bike Riders Aids (1975)", country GB. Source:
  https://www.disraeligears.co.uk/site/holdsworth_-_bike_riders_aids_1975.html (99 scans at
  `00_main_images/holdsworth_-_bike_riders_aids_1975_<page>_main_image.jpg`, page names
  front_cover, inside_front_cover, page_i ... page_xvi, page_1 ... page_80, inside_rear_cover,
  rear_cover; printed page n = bound PDF page n + 17). Holdsworthy Co. Ltd, London SE20, a UK
  mail-order retailer like Bikecology / Palo Alto; prices in GBP, weights in oz. Components are
  pp. 26-80; pp. i-xvi and 1-25 are essays, clothing, bags and bottles. Read 2026-10-23.
- Dated inside it: May 1975, "again in 1974 winner"; new = Campagnolo "Titanium Lightened
  Super Record Group" (ad only, with the "Super" Record titanium headset), Huret Challenger 2400,
  Evian-Racer centre-pull, GB Menton bar, Birmalux Sprint rim, Simplex Prestige 637 ("latest");
  Il Primo di Lusso stem's Allen bolt "new for 1974".
- Already covered 1975, no change: all Campagnolo (Catalogue 17a, data_source 7), Huret,
  Simplex (except 4583), Weinmann brakes and 133/144/161/162 levers, Universal 51/61/68, MAFAC
  Racer / Criterium / Cyclo-Tandem, Regina chains and freewheels, TA, Super Champion rims.
- Changed (source_ref -> 260, 37 rows): year_to -> 1975 on Simplex 4583 Prestige AR 637;
  Weinmann 7936 136 lever; GB 752 GB 77 (Coureur '77', description), 314 Super Hood, 2848
  Ventoux, 2847 Randonneur, 8473 All-Rounder, 6542 Norma, 6543 Nova (6541 Neta description
  only); TDC 3160 Continental Italia; Williams 2018 C34; Nylfor 3058; Chater Lea 3723 Sprint
  pedals; Cinelli 6501 Pista Steel stem (catalogue "Plain"); Fiamme 5006 Sprint rim; Wrights
  5706 W3SW (swallow). year_from -> 1975 on Sansin 3602 one-piece hubs; Lyotard 9085 45;
  Cinelli 9081 Mod. 63, 2804 65 Criterium, 5337 Unicanitor Mod. 55, 9083 Unicanitor 65 (the
  "Unica-Nitor 65/4 Campione del Mondo"), 5333 Unicanitor #4 (the 75/x "Tour de France"
  padded); Clement 6771 Seta Extra (No. 1), 8971 Criterium Seta Extra (No. 1 Bis), 8970 Seta
  Tipo 3, 9259 N. 10, 8972 Criterium Cotone (No. 12 Bis Criterium), 6737 CdM Seta (No. 13),
  6736 Campestre (No. 18), 6731 Clement 50 (No. 19); Brooks 5303 Team Professional (the
  catalogue's "B17 Professional", judgement). Dated 1975-1975 (were undated): Stronglight 153
  No. 34 BB, TDC 3157 Continental J, Lyotard 3812 45ter and 3813 460A.
- Added (40 rows, 1975, group NULL): D'Alessandro Silk / Cotton Imperforabile, Criterium,
  Cyclone, Worthy; Birmalux Sprint and High Pressure rims, Maes and Allrounder bars, alloy seat
  pin; Cinelli 18 Pista bar and Sacchi stem; Fiamme Maes bar and High Pressure rim; GB Menton;
  Gallet Junior; Clement Nuovo Alberto (made for Holdsworthy); new brands Il Primo (Giro di
  Sicilia bar, di Lusso stem), Allez (Maes bar), Van Schothorst (High Pressure, Endrick
  rims), Evian (Racer brake), Nicklin (N34, N200, N901 cranks), Canetti (7 tubulars), Kowalit
  (4 tubulars), YFC (Seamless), Matex, Merton (Coureur) saddles. Only items with a weight or
  size were added, as for data_source 259.
- Not added / unresolved: Weinmann USA Dual lever, Cherry centre-pull, Evian CLB B2 /
  Criterium / Tandem, TDC Super Set K, Suzue solid-axle hubs, Fiamme stem, WA Corsa pedals
  (maker unclear, possibly Way-Assauto), unnamed Renold / D.I.D. chains, Regina "Super Course"
  (probably 1376 Extra 50 Corsa), Universal hooded levers, Stronglight "49D" (DB 49A vs 49D
  rows), Cinelli alloy stem (1A vs 1R). Wrights W3 Swallow and Lyotard 45A were
  not inserted because 5706 and 9085 are the same parts.
- Merged (2026-10-23): 4940 "Birmalux Tubular Rims" (velobase source_id
  3185AC4D-FAD0-4E82-A2B4-5D506ACDDBD5, undated, 336 g actual, no bike_spec links) deleted
  into 9323 Birmalux Sprint, the only Birmalux tubular rim; its measured 336 g kept on 9323.
- Merged (2026-10-23): 634 "Evian (relabelled CLB Racer Course 73)" (velobase source_id
  8556B34A-976E-43C4-A66B-572F9CB01406, 1973-1977, no bike_spec links) deleted into 9340
  Evian Racer; 9340 widened from 1975 to 1973-1977 and its description notes the CLB relabel.

## La Bicicletta Guida '85/86 - I componenti da corsa (Nov 1985, 41 scans, disraeligears.co.uk), data_source id 259

### ITM Mod. 300 / 9201 — correction applied and validated 2026-11-20

The [guide's scan 2](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_1985_november_-_i_componenti_da_corsa_scan_02_main_image.jpg)
lists Italmanubri Mod. 300 in light alloy, with 80, 90, 100, 110, 115, 120
and 125 mm sizes. The [1987 Bianchi catalogue](https://velobase.com/CatalogScans/1987Bianchi.pdf)
PDF p. 14 lists `ITM 300 Anthracite` in Trofeo's handlebar/stem column.
Both scans were checked visually. Matching the same model name is an inference:
the guide does not name a finish or describe construction, so neither source
establishes unchanged construction or production endpoints.

Component 9201 was `ITM Mod. 300`, 1985–1985, source 259, description `ITM Mod.
300, Italy. Alloy stem, 80-125mm`; Trofeo stem spec 1206 is its only current
link. The user approved a guarded date-only change of year_to 1985 → 1987;
the two dates are observations, not claimed manufacturing boundaries. Exactly
one row changed and the identical rerun affected zero. Readback confirmed
1985–1987, the original title, description, source, maker, category and UUID,
and the unchanged 1206 → 9201 link. To reverse, restore year_to=1985 after
checking for later changes and other fitments.
Before application, the scoped 1987 Bianchi generator/live comparison found
300 unchanged specs and no gained, lost, changed, missing or ambiguous
identities. The ITM stem duplicate report did not include 9201 in a candidate
pair; its other generic ITM pairs were not reviewed as part of this case.
After application the same scoped comparison was unchanged; the full report
compared 117 catalogues with no gained or changed links or identity differences,
and 15 previously recorded Huret Rival lost proposals. The quality report
showed zero errors and one fewer linked-date conflict. Review SQL was removed
after readback and the zero-change rerun.

- Source: https://www.disraeligears.co.uk/site/la_bicicletta_guida_8586_-_i_componenti_da_corsa.html
  (scans at `00_main_images/la_bicicletta_guida_1985_november_-_i_componenti_da_corsa_scan_NN_main_image.jpg`,
  01-41, 1560 px, legible). Label `La Bicicletta Guida '85/86, I componenti da corsa (1985)`, country IT.
- An Italian magazine's buyer's guide, **not a manufacturer catalogue**: tables per
  category of model / material / weight / size / lire price, about 60 makers, mostly
  without part numbers (codes only for Gian Robert, Miche, Ofmega, OMAS, Nisi,
  Regina). Read as a snapshot of what was on sale in late 1985. It never moves
  `year_from` below 1985 and never caps `year_to`.
- Scan map: 1-2 stems; 3-4 rear derailleurs, chains; 5-8 rims; 9-11 handlebars;
  11-13 front derailleurs; 13-14 brakes; 14-16 cranksets; 16-17 brake levers;
  18 shifters; 19-20 bottom brackets; 20-22 hubs; 24-25 pedals; 29 seat posts
  (**the section's first page is missing**, so it opens mid-list at Miche; the
  Campagnolo and Cinelli posts are probably lost), disc wheels, start of freewheels;
  30 freewheels, saddles; 31-32 saddles; 34-36 headsets; 39-41 tubulars.
  Out of scope: bottles, cages, toe straps / clips, tape, pumps, spokes, lugs /
  dropouts, Columbus and other tubing, frame jigs.
- Year rule applied: NULL or >1985 `year_from` -> 1985, NULL or <1985 `year_to`
  -> 1985 (undated velobase rows became 1985-1985, as in earlier passes).
- **195 rows updated** (`source_ref` -> 259). The full list with old -> new years
  is in the session report; by brand: Gipiemme 25, Clement 16, Ofmega 15,
  Modolo 14, Cinelli 11, Fiamme 10, saddles (Selle Italia / Royal / San Marco /
  Iscaselle) 14, rims (Nisi, FiR, Ambrosio, Vittoria) 29, 3ttt 6, Universal /
  Regina / Everest 16, Rino / Galli / Gian Robert / OMAS / Miche / Michelin /
  Cosmos / Gimondi / Pneudan / FT / Silva / Cobra / ITM about 35, Campagnolo 4
  (209 1040/1A NGS levers 1984 -> 1985; 43 4031 Super Record BB 1982 -> 1985;
  7015 Triomphe leisure RD 1986 -> 1985; 2073 7-speed alloy freewheel
  description). Notable start-year moves: 3ttt 8296 AR84N 1986 -> 1985, 8302
  Aero Dynamic Competizione 1987 -> 1985; Modolo 374 Kronos levers 1986 ->
  1985; Cinelli 2814 Perfection 1990 -> 1985, 5338 Volare SLX 1988 -> 1985;
  Selle Italia 5503 Super Turbo 1992 -> 1985, 5518 Turbo SLG 1990 -> 1985; ITM
  6564 400 Racing 1990 -> 1985.
- **Retitles** (old names, for matching later sources): 4906 "Ambrosio Pista
  Color" -> Ambrosio Pistacolor; 5024 "Galli Top Crit" -> Galli Top Criterium;
  2816 "Cinelli L.A. 84" -> Cinelli 62 Los Angeles; 6090 "Modolo - Kronos
  Aerodynamic Control Levers" -> Modolo Kronos (shifters); 6889 "Vittoria Giro
  del Mundo" -> Vittoria Giro del Mondo. search_text rewritten on all five.
- Judgement matches, worth revisiting: Universal "MS 77" = 1084 Super 77;
  Cinelli "Mod. SA Pista" (10-13 cm) read as a misprint of 7097 2A Pista; the
  guide swaps the 65 / 66 bar names (65 Campione del Mondo, 66 Criterium + 66
  CdM), so the DB's 65 Criterium (2804) and 66 Campione del Mondo (2806) were
  extended; Fiamme "Etichetta" colours mapped to the DB's label rows (Oro Ergal
  -> 4992 Ergal, Verde -> 4995 Green Label, Rossa -> 5004 Strada red label,
  Nera -> 5005 Type 22 Black Label, Gialla -> 4999 Professional yellow label);
  3ttt Record seat post 230 g / 160 mm = 8850 500/1 Reggisella.
- **193 rows inserted** (1985-1985, UUID source_id, `source_ref` 259): only parts
  the guide gives a weight or a size for (user's choice, 2026-10-23); the ~110
  name-only entries were not inserted. New brands: Cycloman (3 stems), Cascella
  (Performance Strada crankset), CAM (Contak pedals), C.B.L. Brusati (Hickory
  wooden rim), Silpa (4 saddles), plus 12 category_brand links. Largest groups:
  Vittoria 17 rims and tubulars, Nisi 17 coded rims (00100 ... 00840),
  Gipiemme 19 (200 RS/CC/RT/CT/R1 BBs, Crono Special Cross / Tandem / Triplo
  cranks, Minisprint), San Marco 14, Gian Robert 11 (1005-3005 shifters, 1009,
  1012, 1014-1018), Ambrosio 12, ITM 11, Pneudan 10, Miche 9 (1301, 1302,
  1601-1603, 1902, 1905, brakes), Cosmos 8, FiR 8, Pirelli 6, Royal 6, Ofmega 6,
  Clement 5, Hutchinson 5; one Campagnolo row, "Gran Sport (1980s)" hubs
  (548 / 524 g; no 1980s GS hub row existed).
- No deletes.
- Left alone (the guide can't say which version it means): Ofmega Mistral RD /
  shifter generations, Premier shifter generations, Competizione hub/crank
  versions; Gipiemme Cronosprint 800-series derailleurs, Cronosprint Classic /
  Economic brakes and cranks vs 700CC / 100 CC, Special hubs 3352; Rino Crono
  Nero 2274, Criterium headset types, Supercrono vs Crono RD; Ambrosio Montreal
  and the Elite / 19 Extra / Aero family (Aerodynamic, Aero Elite, Elite, 19
  Extra not inserted); Modolo Corsa brake versions; Clement Mirage, Ritmo,
  Criterium sub-models; Vittoria Nuovo Pro 260 (originally misread as290g; [2026-11-20 re-read](vittoria.md#fet-kyokuto-19851987--reconciliation-prepared-2026-11-20) confirms260g);
  Nisi Countach, Toro, M20 / Pista Speciale (00120 / 00150); OMAS Big Sliding
  hub articles 101 ... 1100 (only two DB hub rows); Gian Robert Campione RD
  types and Competition hub finishes.
- Unresolved: Campagnolo Super Record hubs are still sold here in 1985, but the
  DB only has Ti-axle 4011 / 4014 rows dated 1974-75, so a 1980s Super Record hub
  row may be missing. Galli hubs are headed "Galli Maillard" (Maillard-made).
  The missing seat-post page.

- **Ofmega re-check, 2026-11-13** (scans 4, 13, 16, 18, 20, 22, 25, 36). **Headset model numbers
  were misread as 3xxx in the first pass; the scan prints Mod. 8080 Mistral, 8150 Ambassador, 8200
  BMX, 8100 Gran Premio** (the same 8000 series as the 1979 R. J. Chicken catalogue). Retitled 9159
  "Ofmega 3150, Ambassador" -> "Ofmega 8150, Ambassador" and 9160 "Ofmega 3100, Gran Premio" ->
  "Ofmega 8100, Gran Premio" (search_text with them); 3064 Mistral description "Mod. 3050" -> 8080;
  8787 "Ofmega 8200" -> "Ofmega 8200, BMX", year_to 1979 -> 1985, 1985 spec added (234 g, 27 / 32.6).
  **Merged 8786 "Ofmega 8100, De Luxe"** (1979, source 181, source_id
  7291398e-ca49-11f1-a2df-02fea3763e8d, no links or overrides; deleted, user approved) into 9160,
  year_from 1985 -> 1979, De Luxe description folded in. Corrected 9158 Mundial BB 356 -> 355 g,
  9161 CX Sealed Bearing front 205 -> 203 g. Described 90 Gran Premio BB ("7100 Basic" in 1985),
  3442 Gran Premio hubs, 3881 CX pedals (2600, 357 g); 2419 Premier FD given the 1985 94 / 86 g
  braze-on / clamp weights alongside the 1988 brochure's 90 g. 6094 Premier shifters (1st
  generation) dated 1985-1985, 11.5 g each. **2026-11-18 review:** the guide does
  not picture/code the lever specimen, and the 1988 cut-out retro-friction
  levers are not specimen 6095. These specimen assignments are superseded by
  the [applied Premier reconciliation](ofmega.md#premier-test-and-specimen-reconciliation--2026-11-18-applied-and-validated).
  Added 11003 Super Corsa hubs (forged anodised alloy, 28-32-36; 1981-1985, 1981 from the
  Bianchi Sprint/81 spec 6553 "Ofmega Super Corsa, 36 holes", linked by override) and 11004
  "Ofmega 2150, BMX" crankset (170 mm, 42T, 380 g). Left alone: 9650 Gran Premio pedals (398 g
  with steel cage here vs 8784's 1979 320 g silver anodised), Mundial crank 470 / 486 g vs 665 g
  in 1988, Mistral RD / shifter generations, Super Competizione crank versions; no weight, not
  added: Super Corsa R crank (possibly the 1981 Colnago "Super Corsa MC-130", unconfirmed),
  Mundial L and BMX hubs 6170 / 6260 / 6163, 1090 BMX crank, Thompson 7155 BB. SQL: session
  scratchpad `squadra/g85-ofmega.sql`.

## Ron Kitching "Everything Cycling" — Accessories, Tubulars and Sundries, June 1984 (disraeligears.co.uk, data_source 261)

- `data_source` label "Ron Kitching Everything Cycling (1984)", country GB. Source:
  https://www.disraeligears.co.uk/site/ron_kitching_everything_cycling_-_1984.html (74 scans at
  `00_main_images/ron_kitching_everything_cycling_-_1984_<page>_main_image.jpg`, front_cover,
  page_1 ... page_72, rear_cover; printed page n = bound PDF page n + 1). Ron Kitching, Cycleparts
  International Centre, Hookstone Park, Harrogate: the UK importer / wholesaler of SunTour, TA,
  Zeus, Dia-Compe, Wolber, Milremo and others. GBP ex VAT, gram weights for nearly everything;
  pp. 53-59 and 65-66 are weight / availability / tubular-use tables (useful cross-checks).
  Components pp. 2-52 and tubulars 62-64; bags, lighting, pumps, bottles, toe clips, shoe plates,
  tape, cables, spokes, tools, books, stands and racks out of scope. Read 2026-10-23.
- "NEW" = new to Kitching's UK range: SunTour Superbe Pro II RD-5200, Superbe II RD-5300, LE
  Tech RD-5900 / FD-3200, Cyclone RD-6000 / FD-3300 (the table's "Cyclone III"), CW-5000, BH-1500 /
  BH-1600 / BH-2000, CB-2200, Cyclone CB-7000/8000, LD-3700/3750, SP-2000/2100, MS-1400 XC-V; Zeus
  Supercronos brake and FD, New Racer crank; Dia-Compe DC/QS/GX-630N, RGC-400, 204C, DC981,
  NGC982; Cinelli Domino and Volare; 3ttt AR 84; Milremo Pro UL; Fontana tubulars; Sup'air 240;
  Nitto B801 / MT-1; Win MT-28; FAG L66; ATAX Polypro.
- Already covered 1984: almost all SunTour (Catalogs 61 / 62, data_source 88 / 90), Mavic
  (84-85, 114), Cinelli 64-67 and stems, 3ttt Record range, Araya ADX-1/3/4, Stronglight 107 /
  650 / 651, Nitto 185 / Crystemblue.
- Changed (source_ref -> 261, 151 rows; full list in the session report): SunTour gap rows (16:
  4684 RD-3400 AG, 8268 FD-2050, 2599 FD-2100, 6276 LD-1600, 8262 / 8264 / 8275 RH-1000 / 1500 /
  3100, 5933 SP-1000, 6694 RS-1000 to 1984; 6278 LD-3700, 7826 LD-3750, 6308 LD-3600, 464 CB-2200,
  1052 CB-6100, 7832 SP-2100, 5935 SP-2000 from 1985 to 1984); Dia-Compe 20 rows dated 1986 by
  data_source 102 / 209 now from 1984; Zeus 26 (New Racer / Gran Sport / Gigante / Pista /
  Criterium to 1984, 2000 Titanox BBs and freewheels, Supercronos descriptions with code numbers);
  Spécialités TA 25 rows from the 1975 TA catalogue to 1984 (incl. Tevano 1863 / 1864); Wolber 16
  tubulars; Vittoria 8, Cinelli 8, Milremo 7, Ideale (brand Tron & Berthet) 6, MKS 5, Lyotard 4,
  3ttt 2, Ambrosio 2 and singles for ATAX, Bador, Bullseye, FAG/Nadax, Lightrace, Araya, San Marco,
  Super Champion, Strong, Stronglight, Tange, Arius.
- Retitle: 6940 "Wolber Strada 801" -> Wolber Strada 80 (search_text rewritten). Data fix: 3859
  MKS Esquartz 102 years 1880-1880 -> 1984-1984.
- Added (108 rows, 1984, group NULL; weight or size only): Zeus 7, Milremo 38, Cinelli 6,
  Vittoria 9, Wolber 4, Mavic Monthlery Route / Pro, Fiamme Bussola, MKS GR-8 / 505 / 707, Nitto
  B801 / MT-1, ATAX 3, Bador stem, Bullseye BB and pedals, FAG L66, Lightrace TTS Super BB; new
  brands Lion (9 tubulars), Fontana (3), Sup'air (2), Izumi (3 chains), Enuma, Jaguar (3 saddles),
  Conpy, Cypari (2 brakes), Win (4), Silver Star. A "Mavic GEL 280" insert was dropped: 5066
  "G.E.L. 280" already covers it.
- Merged (2026-10-23, user-approved): 9081 "Cinelli 63 Campione del Mondo" (source_id
  c54eeecb-cd89-11f1-a2df-02fea3763e8d, 1975-76, from data_source 260 / 245) deleted into 7096
  "Cinelli Mod. 63, Campione del Mondo", now 1975-1984, description consolidated (reach / drop
  corrected to 76 / 147mm per the Kitching table; the old text had them swapped). 2602 "SunTour
  Compe-V" (velobase source_id F2E28746-7806-4B13-B427-BC322E8FC324, 1974-79, 140.5 g avg, no
  links) deleted as a placeholder for 2603 "3701 / FD-1100, Compe-V (5-hole)".
- Judgement / unresolved: SunTour BH-2000 is "Cyclone" here, "Sprint (road)" in the DB (7808,
  unchanged); LD-2800 "Microlite" = 6307 Power Thumb Shifter (155 g); Tevano 1863 / 1864
  (velobase 1970) moved to 1984-1984 on 2026-10-23: the c. 1975 TA catalogue (206) has no
  Tevano crankset (TEVANO is only its distributor) and this catalogue calls Tevano "the newest
  name"; 1863's description now carries the AX5000 spec, 575 g measured kept; left
  alone for unclear versions: Zeus 2000 / New Racer cranks, New Racer brake variants, Lyotard
  136R types, Ideale 88 rivet variants, 3ttt Regolabile versions, Dia-Compe G-500N / DC-500N,
  SunTour PSL-M / PDL-M / SLW / Mighty Shifter old-vs-LD codes.

## La Bicicletta Guida '88 - I componenti da corsa (Feb 1988, 54 scans, disraeligears.co.uk), data_source id 262

- Label `La Bicicletta Guida '88, I componenti da corsa (1988)`, country IT. Source:
  https://www.disraeligears.co.uk/site/la_bicicletta_guida_88_-_i_componenti_da_corsa.html (scans at
  `00_main_images/la_bicicletta_guida_1988_february_-_i_componenti_da_corsa_scan_NN_main_image.jpg`,
  01-54, only ~436 px wide: model names and weights legible, fine print marginal). The next edition
  of the '85/86 guide (data_source 259, above); same table format. Miche is printed as "FAC
  MICHELIN" (the company F.A.C. Michelin). The scans end with the Vittoria tubulars
  (scans 53-54 run Pavé CG to Trofeo Special, 25 models; corrected 2026-11-13: at 436 px this
  looked like a mid-list cut); any clincher section is missing. Read 2026-10-23.
- Scan map: 1-3 stems; 4-5 rear derailleurs; 5-6 seat posts; 6-7 chains; 7-11 rims; 12-14
  brakes; 14-18 handlebars; 18-19 front derailleurs; 19-21 cranksets; 22-23 brake levers; 23-24
  shifters; 24-26 bottom brackets; 26-28 hubs; 29-32 pedals; 35-37 disc wheels; 37-39 freewheels;
  39-41 saddles; 43-45 headsets; 50-54 tubulars. Out of scope: bottles, cages, toe straps / clips,
  tape, pumps, spokes, frame fittings, tubing (Columbus, Falck, Oria, Tensor), machinery.
- vs 1985: Campagnolo C-Record ("Record"), Croce d'Aune, Chorus, Nuovo Victory / Triomphe, LX / LZ,
  Doppler, Ghibli / Khamsin, Sigma / Omega / Lambda rims new, Super Record / Nuovo Record / Rally
  still listed, Gran Sport / Valentino / 980 / 990 gone; Ofmega derailleurs now Simplex-based
  (Master / Linea / Vantage / Alpine LP); Galli "Aris" Team groups (Sachs-Huret); Miche indexed
  (SunTour-made) derailleurs and a new Primato group; Rino, Everest chains, Cycloman, Bador, Vetta,
  Silpa gone; Gommitalia tubulars new; MTB parts throughout.
- Year rule: year_to < 1988 -> 1988, year_from > 1988 -> 1988, undated -> 1988-1988. No
  descriptions changed (the 1985 pass wrote most specs; the 1988 weights mostly repeat them).
- Changed (source_ref -> 262, 277 rows; full list in the session report b88-report.txt): Campagnolo
  31 (Super Record RD 4152 / FD 7012, 2313 / brake 583 / levers 231 / pedals 3716, 3717 / headsets
  2968, 2967 / shifters 6001 / crank 1509; Nuovo Record RD 4127, crank 1496, 1498, BB 30, hubs
  3259, 3260, Superleggero pedals 3709, 3715; Rally Touring 4083; Record Pista BB 40 and hubs 3270,
  3271; Victory / Triomphe brakes, levers, hubs, pedals, BB 44, RD 4157; Cobalto 561; LX FD 2319);
  rims 46 (Ambrosio, Fiamme, FiR, Gimondi, Nisi, Galli); Ofmega 31; Gipiemme 23; tyres 47 (Clement,
  Pirelli, Pneudan, Vittoria, Michelin 6836 / 6832); bars and stems 42; Miche / Modolo / Universal /
  Saccon 26; Gian Robert, OMAS, FT, Everest, Regina, saddles 31. Start years moved down to 1988:
  Modolo 6597 Flash / 6593 Equipe stems and 2869 Equipe bar; 3ttt 8309 A2002, 8310 Triathlon, 8304
  Carbonair, 2764 CPR, 2762 CMOS; Ofmega 1686 Alpine LP crank (was 1997); Miche 4351 / 2413 / 6089
  Competition RD / FD / shifters (were 1989); Regina 1389 America Superleggera, 1377 Super Racing,
  8799 50 Silver chains.
- Added (34 rows, 1988; weight or size only): Miche Primato crank / BB / aero post / levers / Index
  shifters, Superfast RD / FD / crank, Monolithic crank and pedal; Ofmega Linea RD, Alpine LP RD /
  FD / pedal, Alpine and Mountain MTB brakes, Mistral hubs, Mountain pedal; stems Cosmos Super and
  Double M.Bike, Gian Robert Competition, Gipiemme Crono Special, ITM 500 SL / 500 ATB / Pioneer,
  Modolo Speedy and Master SSC; Ambrosio Aerodynamic (430 g; kept apart from 4890 "19 Extra Elite
  Aero dynamic", 465 g) and Aero Elite; Nisi Ziggurat and Dart MTB rims; Michelin Hi-Lite Road and
  Super Elan clinchers; Campagnolo Doppler shifters.
- No deletes. Left alone for unclear versions: Campagnolo C-Record first-gen rows, 7005 Super
  Record short reach, 8812 Syncro v1; Cinelli 64 / 66 logo variants; Ofmega Competizione / Linea
  crank and FD versions; Gipiemme Crono Sprint 800-series and Sprint seat-post types; Nisi Countach
  / Laser eyelet variants; Iscaselle Tornado covers; Vittoria Corsa CX (6880 / 6881); Clement Ritmo
  LTX 55. Not added (no weight): Galli Aris groups, Cascella, Saccon levers, Royal / San Marco
  posts, Selle Italia Personal, Gommitalia tubulars, Iscaselle Time / Record, Campagnolo Ghibli M 25
  (the DB has M23 rows covering 1988).

- **Ofmega fine-print re-read, 2026-11-13** (disraeligears now serves these scans at 1560 px; Ofmega
  tables on scans 5, 14, 19, 21, 22, 24, 26, 27, 31, 32, 44, 45, all legible). Descriptions written
  on 20 rows the 2026-10-23 pass had only dated (boilerplate "Ofmega X, Italy" dropped; velobase
  measured weights kept): BB 91 Linea / 92 Master / 95 Vantage (310 g); cranks 1698 Master 670 g,
  1700 Mundial 665 g, 1686 Alpine LP 665 g; FD 2416 Master 90 g, 2420 Vantage 110 g; headsets 3060
  Competizione 200 g, 3063 Master 190 g (velobase's 140 g is probably the Linea's figure), 3065 Super
  Competizione 135 g; hub 3443 Master 560 g; pedals 3879 Master 410 g, 3882 Sintesi 410 g with clips,
  3884 Super Competizione 360 g, 3885 Vantage 350 g; RD 4355 Master 210 g, 4360 Vantage 200 g;
  shifters 6091 Master / 6096 Vantage 15 g each. 3438 Alpine LP hub year_from 1997 -> 1988 (600 g).
  Added (1988-1988, source_ref 262): 10996 Linea shifters (indexed, 45 g each), 10997 Alpine MTB
  shifters (80 g each), 10998 Alpine brake levers (137 g each), 10999 Super Corsa BB (310 g, burnished),
  11000 Nuovo Competizione hubs (530 g), 11001 Mountain hubs (675 g), 11002 Linea headset (140 g).
  Guide's 120 g roller-bearing "Mistral" headset = 10995 8010 SQ (Ofmega Squadra brochure, 384), not
  3064. Still left alone: Competizione / Linea crank and FD versions, Mistral RD / shifter
  generations, Ambassador headset (guide 215 g vs 9159's 160 g), Linea FD (125 g; rows 2414 / 2415
  undated versions). No bike_spec links. SQL: session scratchpad `squadra/g88-ofmega.sql`.
- **Vittoria tubulars re-read at 1560 px, 2026-11-13** (scans 53-54; columns casing / tread / weight,
  no sizes or prices). 6900 Special Pro corrected: "220g in 1988" -> 220 g in 1985, **250 g** in 1988.
  9430 Cronometro Seta CS and 9432 Cronometro CX year_to 1984 -> 1988 (Crono Seta CS 180 g, Crono CX
  190 g). Descriptions on 6877 Corsa CG Seta, 6878 Corsa CL, 6885 Cronometro CS, 6893 Nuovo Pro
  260, plus 1988 detail on 9428 Corsa CG (250 g, knurled), 6891 Mondiale ("Mondiale G / R"), 9246
  Pavé Seta (butyl tube in 1988 vs latex elsewhere). **Retitled (user's call) 6879 "Vittoria Corsa CM
  Servizio Corse" -> "Vittoria Corsa CR Servizio Corse" and 9429 "Vittoria Corsa Seta CM" -> "Vittoria
  Corsa Seta CR"**: the guide prints CR (rigato, ribbed) where those rows had been dated; old names kept
  here for matching. **Merged 9912 "Vittoria Pave CG"** (1983-84, source 294, source_id
  3c99a7f6-d3f3-11f1-a2df-02fea3763e8d, no links; deleted) into 9244 Vittoria Pavè (fabric-layer
  detail folded in). Added (1988-1988): 11005 Corsa CX Kevlar Antiscaldamento 240 g, 11006 Corsa CV
  270 g (herringbone), 11007 Crono CL 200 g (smooth), 11008 Trofeo Special 260 g (kept apart from
  9255 Trofeo 250, user's call), 11009 Racing Team 240 g. Linked the same day (user's call): four 1991-92
  Bianchi "Vittoria Nuovo Pro" specs (19427, 19445, 19651, 19663) -> 6893 Nuovo Pro 260 by override;
  6893 year_to 1988 -> 1992. SQL:
  session scratchpad `squadra/g88-vittoria.sql`.

## La Bicicletta Guida '99 - Componenti (1999, 56 scans, disraeligears.co.uk), data_source id 353

- Label `La Bicicletta Guida '99, Componenti (1999)`, country IT. Source:
  https://www.disraeligears.co.uk/site/la_bicicletta_guida_99_-_componenti.html (scans at
  `00_main_images/la_bicicletta_guida_99_-_componenti_scan_NN_main_image.jpg`, 01-56, 1560 px,
  legible read whole; **don't read the bound PDF**, the Read tool's PDF render is too small for
  the weights). The earlier88–147 range is superseded by the verified scan/folio ledger in the
  prepared remaining-entry review below; some scans have cropped folios and pages
  are omitted (including129 between cassettes and cages). Read 2026-11-02; transcription (1,052 rows) and diff kept in the session
  scratchpad only.
- Scan map: 1-3 groupsets; 3-8 stems; 8-9 quick releases; 11 rear derailleurs; 12-14 seat posts;
  14-15 chains; 15-16 cables; 16-17 rims; 18 shifters, Ergopower / STI; 19-24 tyres; 24 brakes;
  24-26 bars; 26-27 front derailleurs; 27-28 cranksets; 29 brake levers; 29-30 BBs; 30-34 hubs;
  35-37 pedals; 37 cassettes / freewheels; 39-45 complete wheels; 45-48 saddles; 49-50 headsets;
  53-56 tubulars. Out of scope: bottles, bolts, inner tubes, toe straps, tape, spokes, cages,
  aerobars, tubing (51-52).
- Few part codes: Shimano is listed by group ("Ultegra", "105-STI"), except the FD models
  (6500-B / 6503, 5500-B / -F, 5503, A551-B / -F), crank models (FC-A416 / A417, FC-5500 / 5503)
  and pedals (5500, 6600, 7700). Campagnolo has no codes at all. Matched on group + part + weight
  against the Shimano '97 manual (275) figures.
- **Pass 1, Shimano and Campagnolo (74 statements, source_ref -> 353 on 106 rows).**
  - year_to -> 1999 (34): Shimano 135, 1824, 9600, 9599, 6168, 436, 418, 3088, 5890, 8750, 8751,
    8752, 8754, 6368, 8753, 9602, 7762, 3951, 442, 6175, 3572, 9604, 1195, 7574, 9685, 9684, 9681;
    Campagnolo 4095, 559, 7084, 6339, 10055, 10056, 6963.
  - Descriptions rewritten (velobase-bare or thin): 4541 RD-6500, 2538 FD-6500, 1847 FC-6500,
    141 BB-6500 (all four also year_to -> 1999), 6356 ST-5500, 957 BR-5500, 1779 FC-5500, 2463 /
    2464 FD-5500, 4530 RD-A415. Measured weights kept; 2463's velobase "81 grams" (not marked
    actual) replaced by the guide's 84g.
  - New Shimano rows (10, 1999-1999): ST-6500, FH-6500 / HB-6500, CS-6500, PD-7700, PD-6600,
    PD-5500, BB-5500, HB-5500, CS-5500, CN-HG72. Codes ST-/FH-/HB-/CS-6500 and BB-/HB-/CS-5500
    are inferred from the group (not printed).
  - New Campagnolo rows (52, 1999-1999, titled by group + "9-speed", no codes): Chorus / Athena /
    Veloce / Mirage / Racing Triple 9-speed and Avanti Triple 8-speed RDs; Chorus, Record,
    Veloce Triple and Racing Triple FDs (braze-on / clamp in one row); Record, Chorus, Veloce,
    Mirage, Veloce Triple, Racing Triple and Mirage Triple cranks; Record, Chorus, Athena, Veloce
    and Mirage BBs; Record front hub, Chorus / Athena / Veloce / Mirage / Avanti hub pairs; Chorus /
    Athena / Veloce / Mirage brakes; Athena / Veloce / Mirage Ergopower; Record down-tube and
    9-speed bar-end shifters; Chorus / Athena / Veloce / Mirage 9s and Avanti 8s cassettes; Record /
    Veloce 9-speed chains; Record, Chorus (threaded and threadless) and Athena headsets; Pro-Fit
    Chorus / Veloce; Record aero levers. **A late-90s Campagnolo catalogue should retitle these
    with part codes** (the DB's newest Campagnolo catalogue is the 1995 range, source 22).
    Racing Triple rows have no group_id.
  - Not changed: "Shimano 6500" 9-speed chain, 304g (no confirmable code); 105 RD printed 300g vs
    229g measured on 4451; RSX 8-speed brakes / levers / hubs / BB and 300EX / RSX front hubs
    (A410 vs A41x not separable); Nexus Inter-3 / 4 / 7 and Nexave hubs (SG model not given);
    Campagnolo wheels (Zonda, Shamal, Nucleon, Electron, Bora, Ghibli) and the Montreal 76 /
    Atlanta 96 / Barcelona 92 rims, NEW here with names reused from 1990-92 rims 4953 / 4946.
  - No deletes, no year_from moved later. "NEW" on Ultegra 9v / 105 9v is relative to the
    previous guide, not a first year (6500 rows were already 1997-98 from velobase), so no start
    year was moved on it.
- **Pass 2, other brands (2026-11-02; source_ref -> 353 on 72 updated + 321 new rows).** Matched
  by brand + category + model tokens (754 in-scope rows: 66 exact, 24 multiple, 104 partial,
  350 missing for known brands, 210 for brands not in component_brand), then curated by hand.
  - year_to -> 1999 (53): stems 6500, 6486, 6567, 6560, 6601, 6599, 6602, 6401, 6404, 8316,
    6412, 6427, 6603; bars 2816, 2804, 2806, 2821, 2818, 8306, 2872; rims 4887, 5074, 5102, 5039;
    wheels 9985, 9986; levers 6351; cranks 9487, 9489, 1697, 1704; BBs 8414, 8413; hubs 3424,
    3426; pedals 3782, 4029, 9493; saddles 5480, 5471, 5520; headset 3052; chain 1396; tyres
    6802, 6808, 6874, 6875, 6890, 9257, 6880, 9252, 8390, 6872.
  - Undated -> 1999-1999 (18): 6495, 6562, 6561, 6395, 2820, 2871, 2875, 4912, 3304, 3842, 4027,
    4030, 3764, 5507, 6814, 6818, 6787, 6903. year_from 2000 -> 1999: 6806 Gommitalia Targa.
  - Rejected as name-only collisions (not the same product): Michelin Axial Pro / Axial Sport,
    Time Criterium Pro / Criterium, Tufo Jet Pro / Jet, Cinelli Grammo Strada / Pista / Tria /
    Grammo Titanium, Ritchey Logic Threadless / Logic headset, Miche Primato Aero / BB / hubs,
    Continental Super Sport Ultra, Michelin Select Kevlar, Cinelli Top Ergo 64 / Top 64, 3ttt
    Chromix / Grand Prix / Forma Ergopower / Mutant, Vittoria Nuovo Pro 260, Ambrosio Road Racing /
    Montreal / Super Elite, Clement Criterium, Specialized Turbo, Tange Passage, Keywin titanium,
    Mavic CXP 30 / 601, San Marco Squadra HDP Granfondo. These went in as new rows where they had
    weights, so a later source may show some are the same part (merge candidates).
  - New rows (321, 1999-1999, group NULL, known brands only, rows with a printed weight): mostly
    tyres (Vittoria, Hutchinson, Tufo, Gommitalia, Continental, Michelin, Schwalbe, Veloflex),
    wheels (Mavic, Corima, HED, FRM, Ambrosio), bars / stems (ITM, Deda Elementi, Cinelli, Modolo,
    3ttt, Ritchey, LOOK, FRM), hubs (Miche, FRM, PMP, STM, Coda, Rudelli, Ritchey), rims, posts,
    saddles, headsets, pedals. Titles "<brand> <model as printed>", Italian translated (ant. ->
    front, tubolare -> tubular, Argento -> Argent ...); front and rear hubs are separate rows.
    Eight titles that clash across categories carry a category word (Miche Monolithic seat post /
    headset, Miche Excel headset, Modolo Oxo / Twin 777 handlebar, Ritchey Pro Road hub, Ritchey
    Logic Pro Road pedals, Zipp 340 wheels). 22 descriptions were cut at 255 chars.
  - Not inserted: 19 rows without a weight or with an unreadable name; all 210 rows of the 53
    brands not in component_brand (Syncros, Tec Components, Areo, Spinergy, DT, SRAM, Race Face,
    Thomson, Fi'zi:k, Tune, Tiso, WR Compositi, Casiraghi, Energy, Allara ...): historical pass3 backlog, reconciled in the applied pass below.

### Guida '99 remaining-brand backlog check — 2026-11-19

Read-only recommendation check after the Branford1990 load. Live source353 is
already registered as the1999 Componenti guide (56 scans); source357 is the1996
guide. The historical1999 pass skipped210 entries attributed to53 then-absent
brands, plus19 weightless/unclear entries. Those are historical extraction
counts, **not a current insertion forecast**. No1999 pass3 application was
recorded at recommendation time; the applied reconciliation below supersedes
that status.

At recommendation time, brand-name/alias queries found no Spinergy, SRAM, Thomson, DT/DT Swiss,
Fi'zi:k/Fizik, Tune, Tiso, Casiraghi, Energy or Allara brand. Syncros710(4 rows),
TEC Components719(3), Race Face715(3) and WR Compositi711(5) now exist, chiefly
from the1996 pass; the old blanket missing-brand assumption no longer applies.
This makes1999 a strong already-sourced **component-expansion** candidate;
no improvement to the predominantly1980s bike-link gaps has been demonstrated.

The web page reader hit a verification page, but a direct HTTP HEAD of original
scan45 returned200/image-jpeg,517940 bytes on2026-11-19. No new source download,
component extraction, SQL or DB write was performed in this check. Original URL:
https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_99_-_componenti_scan_45_main_image.jpg

The1996 pass3 is already applied (89 additions, see its section below), so do
not recommend it again as pending. Colorado Cyclist's eight acquired sheets
were the smaller1988-attributed alternative at this check; their component
reconciliation is now [applied as source472](#colorado-cyclist-components--applied-and-validated-2026-11-19), with bike loading declined.
The January1989 offer deadline does not establish a precise publication date.

### Guida '99 remaining entries — applied and validated 2026-11-19

**Applied after user approval and validated.** User selected the remaining1999 guide
backlog after the [source check](#guida-99-remaining-brand-backlog-check--2026-11-19).
Reuse existing source **353**, country IT; no new source or source-citation
update is required. Original scan pattern:
`https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_99_-_componenti_scan_NN_main_image.jpg`,
two-digit01–56. All56 originals downloaded successfully (30,818,966 bytes).
The guide attests1999 availability, not manufacture start/end. New rows use
1999–1999 only; no existing year_from moves. This pass revisits missing makers,
models/identifiable weightless entries and matching1996 parts, rather than
reloading the earlier Campagnolo/Shimano and known-brand passes wholesale.

**198 additions,18 existing-row updates,35 new brands,74 category/brand
registrations.** New component IDs **11820–12017**. No bike, source, CSV,
matcher, merge or delete writes were needed. Two reviewed non-duplicate pairs
were registered in duplicate-classify.js. Fourteen existing year_to values
extend1996→1999. Three retitles
also regenerate search_text:11610 Hardcore→Hardcore7075;11612 Titec Aluminium
→Titec Al235;10385 LOOK2004G→Lookin2004G. The last also corrects maker415 LOOK
→new printed brand Lookin, retaining stable component ID10385.

### Coverage and source qualifications

The focused inventory has **250 mentions**:198 additions,18 updates,11 held
entries,22 unchanged matches and one corroboration folded into aggregate1704.
This is not a count of every component in the guide or a like-for-like recount
of the historical210 skipped-brand estimate. All56 scans have a page/category/
brand ledger. Group summaries, axles alone, QRs, bottles/cages, cables, bolts,
spokes/nipples, tape/straps, frame tubing and advertisements remain outside the
existing component categories. Complete clip-on aero-bar assemblies are included
under Handlebars, consistent with the Profile assemblies loaded from Branford.

Use **scan numbers** as the stable source locator. Verified footer sequence is
retained in the ledger; scan49 prints142,50 prints143,51 prints144,52 prints145,
53 prints146. Scan02 and54–56 lack a verified printed footer. Thus the old
88–147 range and some sequentially inferred folios are not adequate provenance;
no absent/cropped printed page is invented to fill numbering gaps.

Fixed UUIDs below are the load-idempotency keys; component and maker IDs
are the allocated live database IDs. Source URLs/scans, descriptions and prior
values are retained here. Task-created scans, SQL, baselines, inventories and
validation scripts were removed after readback and the zero-change rerun.

### Reconciliation decisions

- Printed identities are kept: Areo is not Aerosport/Aerospoke; BRAWO is the
  wheel brand (not Bravo). Tiso Bike Components/Bike C. →Tiso; DT Hügi →DT
  with Hügi Strada in the model. Existing Sun Ringle entries map to Sun517:
  Moby Deuce10173 and Slamma Jamma10411 are already exact1999 source353 rows.
  No duplicate Sun Ringle maker or component is added. Printed marketing names
  Connex,Lookin,Aheadset and Fi'zi:k are represented without unprinted corporate
  ownership claims; existing Wippermann older-model chains are not guessed to
  be any of the newly coded Connex chains.
- Source scan46 explicitly says **LOOKIN2004G**, with the same PVC/plastic/
  CrMo/Royal-gel/380g specification already assigned to LOOK10385. Correct that
  row's brand/title/search text in place; it has no current bike links. Do not
  add a second2004G. None of these printed names is a production-date claim.
- Missing weight alone does not exclude a named part: SRAM PC chains,
  Fi'zi:k Pavé,Serfas saddles,Cane Creek Aerohead Light and others are retained.
  The text does not assign model numbers as weights (e.g. Tune Mag215 lists225g,
  Serfas model numbers are not weight evidence). Article/distributor-style KMC
  numeric headings are retained as printed identifiers, not asserted as proven
  manufacturer's catalogue codes.
- Tune Mig66 combines its separately printed crossed74g and radial78g
  configurations with their respective drillings; Mag215225g has no asserted
  carbon axle/ceramics,Mag205 has a carbon axle,Mag180 carbon axle/ceramics.
  Energy HB01/02/03/04 and HB11/12/13/14 are **rear** families; do not invent
  individual specifications for the grouped codes. TEC Flash/Big/Slim retain
  distinct front/rear builds. Microtech's unusual rear335g-with/175g-without QR
  claim is preserved as an inconsistent retailer basis, not silently corrected.
  Its axle is printed6075-T6; no unprinted7075 substitution is made.
- Joy Tech Nova Tec is printed in both front and rear sections. Front lists
  100–110mm and a questionable freewheel-compatibility sentence; rear lists
  140mm with8/9-speed compatibility. Retain the independent section/configuration
  attestations and literal dimensions, without replacing140 by a presumed130.
- Spinergy Spox/Strada/Super Stiff/X-Light front and rear are distinct products.
  Strada's size-dependent weights remain unordered where mapping to26/28in
  cannot be established. Energy Equipe Pro120 uses5086 electrowelded rims;
  150/170 use6082-T6. Keep pair/front/rear/without-ring/without-QR weight bases.
  WR WRR wheel weights start at620g front/840g rear, depending on the build.
- Tiso Joe has **sealed angular-contact bearings**, not ceramic bearings;
  Handy's95g applies to1-1/8in. Syncros Hardcore headset is separate from the
  Hardcore seatposts, with no unprinted threadless-only restriction. The unnamed
  Cane Creek116/146g callout is held apart from C2 and S5(116/144g), rather than
  creating a speculative third model.
- Preserve1996 versus1999 specifications: Rohloff SLT99 width6.85 versus7.1mm;
  Syncros Hardcore7075 temper T78 versus T6; Titec Al235 and C191 lengths/weights;
  Tioga Bloodhound473/470g,City Slicker535/418g and Proline S/F tread/bead options;
  SDG nylon/carbon versus nylon/Kevlar shells and earlier/later weights. Earlier
  independent data is not replaced merely because the guide is later. Titec
  C191 explicitly has an alloy core; Al235's350mm is not confused with the
  neighbouring Syncros330/225mm options.
- Ofmega1704 already aggregates Vantage doubles/triples. Enrich it with
  Vantage2/3 BCD/weights while preserving567g measured and1996 configurations;
  keep generic1680 untouched. Gommitalia6806 is a bare Targa family row; enrich
  it with20mm190g and22mm200g rather than create an overlapping Targa22 row.
- Held crosswalks below do not create guessed identities or automatic follow-up
  hunts. Shimano6500 retains the prior hold: group wording alone does not prove
  an additional chain alongside existing CN-HG9210858.

### Duplicate and bike-link review

Final actual-generator simulation across **108 loaded CSVs /23,380 specs**
leaves every mapping unchanged, including the baseline's15 pre-existing Huret
Rival lost matches. Three linked specs1435/1469/1486 all remain on Rohloff1396;
none is reassigned to the uncoded narrower chain. No new supported bike link,
NULL backfill or override has emerged. All changed dates extend bounds, and
none of the other changed rows currently has a linked bike.

Nine new grouped pairs are straightforward front/rear or quill/threadless
configurations. The two additional near-pairs are reviewed and kept separate:
**Connex905/905 Inox** (nickel-plated steel versus stainless, two explicit
listings, scan14) and **Sintesi Diagram/Diagram2** (separate printed headings,
-16 versus-17deg, scan07). No merge was needed. Allocated pairs
**Connex11881/11882** and **Sintesi11827/11828** are registered in
`REVIEWED_NOT_DUPLICATES`; both disappear from default near-pair reporting
and remain available with includeReviewed.
The existing Ofmega1704/1705 generation pair remains unchanged.

### Application and validation

Before loading, all325 DML statements passed database EXPLAIN, all18 prior
rows matched the recorded before-images, and all35 brands/198 component
identities were absent. The approved327-statement transaction affected exactly
35 component_brand,74 category_brand,18 existing component_detail and198 new
component_detail rows. Existing source353 was reused without changes.

Exact readback matched every proposed field and UUID for IDs11820–12017 and
all18 updates; the other10,865 existing component rows retained their fields
and image-presence values. All201 new/retitled search strings use the maintained
helper; maximum description237 characters. The SQL rerun affected **zero rows**
in every table. New rows have correct source/year/category/brand/group references
and category_brand membership; no dangling identities were introduced.

Actual post-load generator comparison across108 loaded CSVs/23,380 specs has
**zero mapping changes**. The existing23,365 unchanged/15 Huret Rival lost-match
baseline is preserved. Every stored bike and bike_spec row in the baseline is
unchanged; linked specs1435/1469/1486 remain on Rohloff1396. Date extensions
introduced no new conflict for those existing links. Nine grouped duplicate
pairs remain distinct front/rear or quill/threadless configurations; the two
reviewed near-pairs are registered above. The duplicate-classify and
duplicate-report test suites pass. Eleven held identities below remain evidence
decisions; none was inserted or guessed into a bike link.

### New components by category

| Category | New rows |
| --- | --- |
| Stems | 30 |
| Rear Derailleurs | 1 |
| Seat Posts | 19 |
| Chains | 19 |
| Tyres | 8 |
| Handlebars | 16 |
| Cranksets | 5 |
| Bottom Brackets | 9 |
| Hubs | 19 |
| Pedals | 8 |
| Cassettes | 1 |
| Wheel(sets) | 36 |
| Saddles | 19 |
| Headsets | 8 |

New printed brands: A.C. Adventure Components, Aheadset, Areo, BRAWO, Bebop, Cane Creek, Connex, Control Tech, Corratec, DT, Energy, Eolic, Exus, Fi'zi:k, Free Spirit, Freewheeling, Icon, Innovative Bike Systems, Joy Tech, KMC, Lookin, Microtech, Middleburn, RIE, Rolf, Roox, SRAM, Serfas, Seven Cycles, Sintesi, Spinergy, Thomson, Tiso, Tune, USE.

<details>
<summary>Applied additions: allocated IDs, fixed UUIDs, source scans and full descriptions</summary>

| Component ID / title | Maker ID / category | Scan / verified folio | Dates | Fixed UUID | Applied description |
| --- | --- | --- | --- | --- | --- |
| 11820 Areo CS2 A-Head | 729 / Stems | 3 / 91 | 1999–1999 | 1de6208d-da3d-480a-b062-5809f2bc3b3e | Cold-forged, fully CNC-finished 6061-T6 aluminium threadless stem; 1 or 1-1/8in steerer, -10/+10deg, 156-170g. Black, silver, blue or titanium-anodised. |
| 11821 Areo CS3 A-Head | 729 / Stems | 3 / 91 | 1999–1999 | 8dec8f7b-74f3-4ee8-b290-0c551b29d5f2 | Cold-forged, fully CNC-finished 6061-T6 aluminium threadless stem; 1 or 1-1/8in steerer, -10/+10deg, 156-170g. Black, silver, blue or titanium-anodised. |
| 11822 Areo CS 04 | 729 / Stems | 3 / 91 | 1999–1999 | 8bc8407e-227a-45c4-a346-d3dd9bc4df10 | 6061-T6 threadless stem, 100-130mm, 1 or 1-1/8in steerer, 80deg, 156-170g. Cold-forged, TIG-welded or monolithic; polished/satin silver, titanium, black or blue finishes. |
| 11823 Areo TS 01 | 729 / Stems | 3 / 91 | 1999–1999 | feda0ecf-9581-48df-bb2d-d89bed535b3e | 6061-T6 aluminium threadless stem; 1in steerer, 80deg; 180-270g. Cold-forged/TIG-welded construction, polished silver. |
| 11824 Areo TS 02 | 729 / Stems | 3 / 91 | 1999–1999 | 2d0029e7-b58e-4e4d-baa3-c2c9ec16ae14 | CrMo steel stem; 1in steerer, 80deg; 160-235g. Brushed titanium-colour finish. |
| 11825 Seven Cycles Ti-Stem | 755 / Stems | 7 / 95 | 1999–1999 | a83144a1-4bc4-46b1-a6e3-d75cd46a20ce | Made-to-order threadless stem using Seven Argen3Al/2.5V and6/4 titanium tubing; 1 or 1-1/8in steerer, custom extension/angle, 120-240g. |
| 11826 Sintesi Quasar | 756 / Stems | 7 / 95 | 1999–1999 | 614bca46-90ad-4b65-bdd0-3318efa929e6 | Aluminium stem; 1in steerer, 160g; silver. |
| 11827 Sintesi Diagram | 756 / Stems | 7 / 95 | 1999–1999 | 0019731b-ce03-4709-a005-15ed16fc1bb9 | 7075 aluminium threadless stem, 1in, -16deg, 220/280g as listed; silver. Distinct from Diagram2 at-17deg. |
| 11828 Sintesi Diagram 2 | 756 / Stems | 7 / 95 | 1999–1999 | 04f089f4-943b-4db4-b483-9e9bcbddfcbb | 7075 aluminium threadless stem, 1in, -17deg, 220/280g as listed; silver. |
| 11829 TEC Components Zero Tec | 719 / Stems | 7 / 95 | 1999–1999 | 2f0e0369-7913-4ea6-81ba-786eb4ff2002 | CNC-machined stem offered with or without quill in anodized or painted colours; steerer 1/1.125 in; angle 0/85°; weight 200/280 g; with or without quill. |
| 11830 Titec Ti Road (with quill) | 712 / Stems | 7 / 95 | 1999–1999 | c7d4017e-38ef-4ed2-a071-521cea86d381 | 3Al-2.5V titanium quill stem; 100/110/120mm extension, 1in, -17deg, 185g. |
| 11831 Titec Ti Road (threadless) | 712 / Stems | 7 / 95 | 1999–1999 | 9e385b91-aa99-4825-8f76-641fe26c9a68 | 3Al-2.5V titanium threadless stem; 100/110/120mm extension, 1in, -17deg, 115g. |
| 11832 TEC Components Roccia | 719 / Stems | 8 / 96 | 1999–1999 | 8ce15415-2fb7-4ccb-a463-01d612a540fe | Fully CNC-machined stem offered with or without quill, multiple anodized or painted colours; steerer 1/1.125 in; angle 0/85°; weight 200/280 g; with or without quill. |
| 11833 TEC Components Murex Tec | 719 / Stems | 8 / 96 | 1999–1999 | 34a4ccfd-c8eb-4b0a-a912-58f00623eec3 | Stem offered with or without quill in anodized or painted colours; steerer 1/1.125 in; angle 0/85°; weight 200/280 g; with or without quill. |
| 11834 WR Compositi A-Head | 711 / Stems | 8 / 96 | 1999–1999 | 9ab6efde-9c80-401f-811b-94f30ba8d162 | Coaxial carbon-fibre stem with grade-5 titanium expander bolt and separable front clamp; extension 90/140 mm; steerer 1/1.125 in; angle 0/10/17/90°; weight 130 g; with or without quill. |
| 11835 WR Compositi Tradizionale | 711 / Stems | 8 / 96 | 1999–1999 | f299faff-1f11-4bda-9be0-7a6ebde8992f | Coaxial carbon-fibre stem with grade-5 titanium expander bolt and separable front clamp; extension 90/140 mm; steerer 1/1.125 in; angle 0/10/17/90°; weight 165 g; with or without quill. |
| 11836 SRAM Plasma | 753 / Rear Derailleurs | 11 / 99 | 1999–1999 | 343bd96e-f750-475c-afb7-9ce711f5f097 | Rear derailleur with composite upper and lower links, aluminium fixing bolt and outer cage; direct cable insertion, Grip Shift and Shimano compatible; fully dismantlable; 192g. |
| 11837 Energy SP 01 | 737 / Seat Posts | 13 / 101 | 1999–1999 | aef119c8-5089-4e7f-a7a4-7b6f053572e4 | Titanium 3Al-2.5V shaft with 7075 aluminium CNC-machined head; micrometric saddle adjustment with two screws; diameter 27.2 mm; length 240 mm; weight 180 g. |
| 11838 Race Face XY Seat Post | 715 / Seat Posts | 13 / 101 | 1999–1999 | 0d42fee6-4506-49d6-86cc-7013f57b7458 | 7075-T6 aluminium seatpost; 26.8/27/27.2/31.6mm, 330/400mm; 235/270g as listed; silver or black. |
| 11839 Race Face XYZ | 715 / Seat Posts | 13 / 101 | 1999–1999 | a0f0ad90-8beb-4a6b-8dfc-3f8a9d94bb54 | 7075-T6 aluminium seatpost; 26.8/27/27.2/31.6mm, 400mm, 240g. |
| 11840 Thomson Elite 100 | 758 / Seat Posts | 14 / 102 | 1999–1999 | eb71bd02-294d-4c80-8bdf-4071e1f41d3e | 7000-series extruded aluminium seat post; forged head, micrometric double-bolt saddle adjustment; silver or black anodized; diameters 26.6/26.8/27.0/27.2/27.4/28.6/30.8/30.9/31.6/31.8 mm; length 250 mm; weight 186 g. |
| 11841 WR Compositi WR RS99 | 711 / Seat Posts | 14 / 102 | 1999–1999 | fb965754-6fce-42e2-a55a-73b6c80ce6d6 | Carbon-fibre shaft impregnated 100%, 7075-T6 aluminium CNC-machined head and 6Al-4V titanium hardware; diameters 25.0/25.4/26.8/27.0/27.2/27.5/28.0/29.4/30.0/30.2/30.4/31.0/31.6/34.2 mm; length 215/250/330/400 mm; 146g at25x215mm. |
| 11842 SRAM Power Chain PC 41 | 753 / Chains | 15 / 103 | 1999–1999 | 7121da94-fcaf-4411-ab00-a6d67efe1884 | For 7- and 8-speed drivetrains; Power Link II connecting link. |
| 11843 SRAM Power Chain PC 51 | 753 / Chains | 15 / 103 | 1999–1999 | e23bb343-3e60-44d5-a3e2-ba5d7461777a | For 7- and 8-speed drivetrains; Power Link connecting link. |
| 11844 SRAM Power Chain PC 59 | 753 / Chains | 15 / 103 | 1999–1999 | ee718fac-085a-4ec8-89db-3a6f5018ac1f | For 9-speed drivetrains; Power Link II connecting link; Shimano and Campagnolo compatible. |
| 11845 SRAM Power Chain PC 80R | 753 / Chains | 15 / 103 | 1999–1999 | 6a54f58b-0d9a-4e2e-b6b6-16f3a2d4605d | For 8-speed drivetrains; lightweight outer plate; Power Link connecting link; Shimano and Campagnolo compatible. |
| 11846 SRAM Power Chain PC 89R | 753 / Chains | 15 / 103 | 1999–1999 | dccddba9-3fe8-4053-bb1c-77259a058721 | For 9-speed drivetrains; Power Link connecting link; Shimano and Campagnolo compatible. |
| 11847 TEC Components Lynx Tec | 719 / Stems | 7 / 95 | 1999–1999 | 3f157b1b-3c96-424f-9fa3-57283c171175 | Stem offered with or without quill in anodized or painted colours; steerer 1/1.125 in; angle 0/85°; weight 200/280 g; with or without quill. |
| 11848 Areo CS1 A-Head | 729 / Stems | 3 / 91 | 1999–1999 | 78977319-64a2-465c-88d1-fece805e90d5 | Cold-forged, fully CNC-finished 6061-T6 aluminium threadless stem; 1 or 1-1/8in steerer, -10/+10deg, 156-170g. Black, silver, blue or titanium-anodised. |
| 11849 Control Tech Road Stem (quill) | 734 / Stems | 4 / 92 | 1999–1999 | e3f41ab7-7de4-472d-9642-64c0363cd33b | 6061-T6 aluminium road quill stem; 1in, 15deg, 228g; silver. |
| 11850 Control Tech Road Stem (threadless) | 734 / Stems | 4 / 92 | 1999–1999 | 97f73c59-687f-481a-a0fc-6860c8215090 | 6061-T6 aluminium threadless road stem; 1in, 15deg, 154g; silver. |
| 11851 Control Tech Control Seat Post | 734 / Seat Posts | 13 / 101 | 1999–1999 | 2311b3b1-d945-4237-b745-60fac948e166 | Aluminium seatpost; 27.2x235mm, 224g; silver. |
| 11852 Colnago CNC Racing | 336 / Stems | 4 / 92 | 1999–1999 | e3bbfe1d-beba-4d47-a0a9-6796dcad6030 | Threadless aluminium stem made in collaboration with ITM; three positions by changing the bushing; extension 90/140 mm; steerer 1 in; threadless. |
| 11853 Syncros Altura Ahead | 710 / Stems | 7 / 95 | 1999–1999 | 93cd9517-1842-4379-9909-d73c8406048f | 6061-T6 aluminium TIG-welded stem; 1-inch steering tube; 100–140 mm extension; silver or matt black; extension 100/140 mm; steerer 1 in; threadless; clamp standard. |
| 11854 Syncros Altura Apribile | 710 / Stems | 7 / 95 | 1999–1999 | cd759a97-4990-4a13-b1c0-55b56dacf7a3 | 6061-T6 aluminium TIG-welded stem; 1-inch steering tube; 100–140 mm extension; silver or matt black. Openable handlebar clamp. |
| 11855 Syncros Altura Ahead Apribile | 710 / Stems | 7 / 95 | 1999–1999 | 43dea95c-f357-4102-955f-f9abd61dfd83 | 6061-T6 aluminium TIG-welded stem; 1-inch steering tube; 100–140 mm extension; silver or matt black. Openable handlebar clamp. |
| 11856 Syncros Hardcore 6061 | 710 / Seat Posts | 14 / 102 | 1999–1999 | e11bf214-9f2b-47f8-bc48-d39a77932a2c | 6061-T6 aluminium seatpost; 26.8/27/27.2mm, 330mm. |
| 11857 Thomson Elite Set Back | 758 / Seat Posts | 14 / 102 | 1999–1999 | b4282084-d3b8-4963-a557-6eaf0802bc5c | 7000-series extruded aluminium seat post with setback head, differential-thickness shaft and micrometric double-bolt clamp; diameters 26.8/27.0/27.2/28.6/30.9/31.6/31.8 mm; length 250 mm; weight 186 g. |
| 11858 Titec Ti 3Al-2.5V | 712 / Seat Posts | 14 / 102 | 1999–1999 | 4856a36a-a7d2-4b61-b380-0fdbeebda75f | 3Al-2.5V titanium seat post with constant-section shaft, forged head and micrometric two-bolt saddle adjustment; diameter 27.2 mm; length 350 mm; weight 215 g; finish natural. |
| 11859 USE Aluminium | 761 / Seat Posts | 14 / 102 | 1999–1999 | b3e6edb3-9cf1-4679-be21-84205db3e7ce | 7075-T6 aluminium seatpost; 25mm shaft, 220mm, 160g including adapter. Size adapters from 25.8mm upward; micrometric adjustment bolts. |
| 11860 USE Titanium | 761 / Seat Posts | 14 / 102 | 1999–1999 | a4d2c4cb-14cd-4d80-8d69-47e10c69a5a0 | 3Al-2.5V titanium seatpost; 25mm shaft, 220mm, 138g including adapter. 36 adapter sizes from 25.8mm upward; micrometric adjustment bolts. |
| 11861 Taya TB 600 | 713 / Chains | 15 / 103 | 1999–1999 | 784fd544-3fdd-4090-a7d2-41fc683929a3 | Boron-steel plates, cemented Cr-Mo pins; 7/8-speed; double chamfer and star-riveted pins; patented Sigma connector, tool-free removal/reinstallation. |
| 11862 Taya 92 Nine Speed | 713 / Chains | 15 / 103 | 1999–1999 | cea9d465-b3b2-41c0-b382-a2198dbb811d | Boron-steel plates, cemented and chromed Cr-Mo pins; 9-speed-specific width and chamfer; patented Sigma connector, tool-free removal/reinstallation. |
| 11863 Taya TB 700 | 713 / Chains | 15 / 103 | 1999–1999 | 53e14aed-fa06-4954-b97c-b4dc9f2353da | Boron-steel plates, cemented Cr-Mo pins; 7/8-speed; double chamfer and star-riveted pins; patented Sigma connector, tool-free removal/reinstallation. |
| 11864 Free Spirit Reverse | 741 / Stems | 5 / 93 | 1999–1999 | 87a96a4b-8276-47c8-8526-3a0e4e238724 | Reversible CNC-machined Aheadset stem with separate cover; anodized silver, red, blue, violet, green, gold or titanium; extension 100/130 mm; steerer 1/1.125 in; angle -8/8°; weight 167 g. |
| 11865 Free Spirit Corsa stem | 741 / Stems | 5 / 93 | 1999–1999 | 906ae2f2-7424-4b58-9dde-a2ea73e84383 | CNC threadless stem, machined from solid and hand-polished/anodised;1in,100/110/120/130mm,17deg,158g excluding bolts. Opening faceplate;quill adapter/shims for threaded steerers,multiple colours. |
| 11866 Icon Bordeaux | 743 / Stems | 5 / 93 | 1999–1999 | 68b36079-021b-48fb-b1e3-3cb3f3f09e29 | 6061-T6 aluminium welded stem;90/100/110/120/130/140mm extension,22.2mm diameter,17deg;opening clamp,black. |
| 11867 Innovative Bike Systems Titanium Stem | 744 / Stems | 5 / 93 | 1999–1999 | 5c84afb8-a224-4cf3-b7af-40e22460182e | Titanium stem for1 or1-1/8in steerers using a bushing;0/+10/-10deg,double-bolt steerer clamp. |
| 11868 Microtech Aheadset ST 200 | 748 / Stems | 6 / 94 | 1999–1999 | b5a7bbf4-ae6e-49b3-afcb-1e41ae67ce35 | 6082-T6 aluminium threadless stem with front-opening clamp; available in Basso cycle colours; extension 90/140 mm; steerer 1 in; angle 78°; weight 195 g. |
| 11869 Roox Asphalt Cowboy | 752 / Stems | 6 / 94 | 1999–1999 | ce70801a-86da-43c4-8ddb-815c9465c985 | CNC-machined stem with openable clamp; polished silver; steerer 1 in; weight 130 g. |
| 11870 Microtech PF 150 | 748 / Seat Posts | 13 / 101 | 1999–1999 | ee67197b-3e9d-4247-94eb-1616eb04cd9c | 6082-T6 aluminium seat post, fully CNC-machined, brushed and silver anodized; diameters 27.2/30 mm; length 240 mm; weight 150 g. |
| 11871 A.C. Adventure Components Seat Post | 727 / Seat Posts | 12 / 100 | 1999–1999 | 6aefe697-c0bb-4d05-86fb-27a143cb55fc | 7075 aluminium seat post; 25.2–31.6 mm diameter, 380 mm length; 320 g. |
| 11872 Freewheeling Competition | 742 / Seat Posts | 13 / 101 | 1999–1999 | b791b843-382c-4e2e-97a8-28ba68c3e7ef | Aluminium seat post; 27.2 mm diameter, 220 mm length; silver. |
| 11873 Icon Seatpost 2014 | 743 / Seat Posts | 13 / 101 | 1999–1999 | 6fffde32-ffca-496e-8d44-081ef2c97852 | 2014-T6 aluminium, 27.2 mm x 250 mm; internally reinforced asymmetric-wall shaft, 20 mm saddle-rail travel; black. |
| 11874 Icon Seatpost 6061 | 743 / Seat Posts | 13 / 101 | 1999–1999 | 58fe1a8f-8bc7-4460-a227-612ecaababb4 | 6061-T6 aluminium, 27.2 mm x 250 mm; silver. |
| 11875 Sintesi Coaster | 756 / Seat Posts | 13 / 101 | 1999–1999 | 58da66d5-e3b2-4679-88e7-f0554430ee96 | 7075 aluminium; 27.0/27.2/29.4 mm x 350 mm; 280–290 g; silver, double-bolt saddle adjustment. |
| 11876 Sintesi Orhion | 756 / Seat Posts | 13 / 101 | 1999–1999 | 0d8540d1-74a9-4e0c-89ce-7c48190a1527 | 7075 aluminium; 25.4–31.6 mm diameters x 350 mm; 235–270 g; silver, double-bolt saddle adjustment. |
| 11877 Sintesi Crusader | 756 / Seat Posts | 13 / 101 | 1999–1999 | d1fd61a1-5365-4054-89af-88752f880a99 | 7075 aluminium; 25.4–30.2 mm diameters x 350 mm; 215–233 g; double-bolt saddle adjustment. |
| 11878 Connex 804 | 733 / Chains | 14 / 102 | 1999–1999 | 5b53684a-ceb5-465a-aa49-5fbe37dd990d | Steel chain; 8-speed; nickel-plated outer plates, black inner plates; Connex Link included; 7.2mm; 280g per 100 links. |
| 11879 Connex 808 | 733 / Chains | 14 / 102 | 1999–1999 | 7aed7927-e269-41a6-a971-242e6a3c707e | Steel chain; 8-speed; nickel-plated inner and outer plates with shaped outer plates; Connex Link included; 7.2mm; 280g per 100 links. |
| 11880 Connex 903 | 733 / Chains | 14 / 102 | 1999–1999 | bf9692c5-6b47-4868-8fd3-f49dc296c410 | Steel chain; 9-speed; nickel-plated outer plates, black inner plates; Connex Link included; 6.8mm; 275g per 100 links. |
| 11881 Connex 905 | 733 / Chains | 14 / 102 | 1999–1999 | 991abd4a-f627-4213-a7af-57d45aeeb715 | Steel 9-speed chain; fully nickel-plated, shaped outer plates; Connex Link included; 6.8mm; 275g per 100 links. |
| 11882 Connex 905 Inox | 733 / Chains | 14 / 102 | 1999–1999 | b9aab433-fd6f-4dff-a197-87f3dcc24c95 | Stainless-steel 9-speed chain; 6.8 mm wide, 275 g per 100 links; Connex Link included. |
| 11883 KMC 40635 | 746 / Chains | 14 / 102 | 1999–1999 | c2825d6c-8298-46c4-969c-b121bbf7d69c | Steel 9-speed chain; 6.6 mm pin width; silver; compatible with Shimano Dura-Ace, Ultegra, 105 and all Campagnolo 9-speed groups. |
| 11884 KMC 40633 | 746 / Chains | 14 / 102 | 1999–1999 | 2f5b4af3-3309-47aa-8fbc-e09f5732294c | Steel chain for 24-speed road/MTB; 7.1 mm pin width; silver; anti-rust treatment. |
| 11885 KMC 40632 | 746 / Chains | 14 / 102 | 1999–1999 | 65e281c4-ae92-4cb4-a9ae-6939cb777006 | Steel chain for 24-speed road/MTB; 7.1 mm pin width; silver-brown; Exdu treatment. |
| 11886 KMC 40634 | 746 / Chains | 14 / 102 | 1999–1999 | 25635ba1-53ac-44c0-bf76-25fba47c70cd | Steel chain for 24-speed road/MTB; 7.1 mm pin width; silver; SP Stretch Proof anti-stretch treatment. |
| 11887 RIE RLG 9000 | 750 / Chains | 14,15 / 102,103 | 1999–1999 | 9e4ccc8e-b87a-4544-bacb-6a1f5b151643 | Steel chain for 9-speed; 116 links. |
| 11888 Campagnolo ED-40 | 11 / Chains | 14 / 102 | 1999–1999 | 6920e0d8-d16a-4662-b1c3-284ce35c7f06 | Steel chain for 7/8-speed; burnished plates. |
| 11889 Areo Viper S 189 | 729 / Tyres | 19 / 108 | 1999–1999 | c21d4159-a213-457b-a2f5-1491ff5a03ed | Folding road tyre with Kevlar bead, polyamide casing and natural rubber; central rib with S-shaped shoulders; low rolling resistance; 28 in/700x20–23 mm; 230g. |
| 11890 Corratec Kevlar Royal | 735 / Tyres | 19 / 108 | 1999–1999 | 16dd183b-5ae2-4593-b98a-39606636ad58 | Rigid Kevlar road tyre for time trial and track use, with diamond tread and 9 bar maximum pressure; 700x18C (18-622); 245g. |
| 11891 Corratec Flash | 735 / Tyres | 19 / 108 | 1999–1999 | 7fbc30e8-c080-4420-b71c-7a8077b3d956 | Cotton-casing road tyre with herringbone tread; rigid, black tread, also offered with red tread; 700x20C (20-622); 250g. |
| 11892 Corratec Kevlar Light | 735 / Tyres | 19 / 108 | 1999–1999 | e9f29b0c-0ada-48b7-8623-3569b4c1c0a2 | Kevlar road tyre with herringbone-diamond tread; puncture protection; folding option in 700x23C at 350 g; 700x20C (20-622). |
| 11893 Roox Race | 752 / Handlebars | 25 / 116 | 1999–1999 | c7f30598-31c6-44a7-9710-8a570d496e18 | 7075-T6 aluminium bar, 8-curve shape with double cable grooves, black anodized; 42/44cm; 238g. |
| 11894 Syncros Drop Handlebar | 710 / Handlebars | 26 / 117 | 1999–1999 | 355e736c-5f8b-40e4-a605-7255198e3619 | Anatomically shaped 7075-T6 aluminium drop bar, grey finish; 420/440mm. |
| 11895 Free Spirit Corsa crankset | 741 / Cranksets | 27 / 118 | 1999–1999 | adf111c7-e1d2-448c-be7e-45307d5eaed0 | 7075-T6 CNC crankset, hand-polished/anodised; arms170/172.5/175/177.5/180mm;440g without rings at175mm. Spider fixed with two M6 bolts, accepts Shimano/Campagnolo double/triple rings; optional Ti bolts. |
| 11896 Middleburn RS4 | 749 / Cranksets | 28 / 119 | 1999–1999 | d112bb14-7d62-4b03-b52c-bd28e2d987c9 | Fully CNC-machined crankset with 7075-T6 arms/spider and 7075/2014-T651 chainrings; arms 170/172.5/175mm; 400g without rings. |
| 11897 Roox Road Gringo | 752 / Cranksets | 28 / 119 | 1999–1999 | ca476dfa-9752-4c6f-927a-c518ae79e94e | CNC-machined 7075-T6 aluminium crankset, polished silver, accepts double or triple chainrings; 455g without rings. |
| 11898 Syncros Revolution | 710 / Cranksets | 28 / 119 | 1999–1999 | 6085d0c0-510d-4a49-ae09-7f09d42050d7 | CrMo crankset with 7075-T6 chainring carrier and titanium fasteners; designed for a 110 mm bottom-bracket axle; arms 170/172.5/175/177.5mm; 460g without rings. |
| 11899 Tiso Corsa | 759 / Cranksets | 28 / 119 | 1999–1999 | 4d9fa774-e94c-4205-ac85-fb58e956ef30 | CNC-machined 7075-T6 crankset with interchangeable chainring spider, complete with hardware; anodized or polished finishes; arms 170/175mm. |
| 11900 Energy B.B. 01 | 737 / Bottom Brackets | 29 / 120 | 1999–1999 | 19fc9b11-db2b-4601-9d58-2f4669dbe8cc | 6Al-4V titanium spindle with 7075-T6 aluminium cups; symmetric spindle with through-hole, three sealed bearings, low friction and anti-runout side seals; spindle 103/107/111/115mm; 150g. |
| 11901 Free Spirit Titanio | 741 / Bottom Brackets | 29 / 120 | 1999–1999 | c657dfbe-f6d4-4b2b-a437-006dfb317881 | Grade 5 titanium spindle with anodized 7075 aluminium cups, sealed bearings, Italian or BSA threading; supplied with Shimano-compatible crank fixing bolts; spindle 103/105/107/109/111/113/115/117/120/122/125mm; 155g. |
| 11902 Race Face Taper Lock | 715 / Bottom Brackets | 29 / 120 | 1999–1999 | 61e3f638-e98f-4bce-81de-5f6db66c1b0b | Steel spindle with 6061-T6 aluminium cups; sealed cartridge bottom bracket; spindle 107/110/113/120mm; 205g. |
| 11903 Race Face Taper Lock Ti | 715 / Bottom Brackets | 29 / 120 | 1999–1999 | 4b86429d-c642-4b5e-8f13-ad6a8367c1f5 | Titanium spindle with 6061-T6 aluminium cups; sealed cartridge bottom bracket; spindle 107/110/113/120mm; 165g. |
| 11904 Syncros Steel Single Row | 710 / Bottom Brackets | 29 / 120 | 1999–1999 | df6c88c1-0de7-475d-bf72-1eb492b6389f | SAE 4140 steel spindle with 6061-T6 aluminium cups; single-row bearing assembly; spindle 107/110.5/113/117mm; 150g. |
| 11905 Syncros Steel Double Row | 710 / Bottom Brackets | 29 / 120 | 1999–1999 | fd5d3de9-90f6-42ed-9126-38566b6fc490 | SAE 4140 steel spindle with 6061-T6 aluminium cups; double-row bearing assembly; spindle 107/110.5/113/117mm; 150g. |
| 11906 Syncros Hardcore Titanio | 710 / Bottom Brackets | 30 / 121 | 1999–1999 | 0f995e82-2a99-4e44-9ee9-061e28e7a924 | 6Al-4V titanium spindle, 6061-T6 aluminium cups; 107/108/113/117/122.5mm, 150g; double INA ball bearings. |
| 11907 Tune AC38 | 760 / Bottom Brackets | 30 / 121 | 1999–1999 | a143d88c-84cf-4949-bcd9-7aafa389768f | 6Al-4V titanium spindle with 7075 aluminium cups; triple-bearing design; spindle 104/107/113/115/117/120/124mm; 104-145g. |
| 11908 WR Compositi MC99 | 711 / Bottom Brackets | 30 / 121 | 1999–1999 | dc1733c6-fb03-44e1-b6e6-a02ad828db2b | 6Al-4V titanium spindle with 7075-T6 aluminium cups, carbon-fibre spacer, sealed bearings and double external seal; spindle 102/103/107/111/115mm; 150g. |
| 11909 Energy HB-20 | 737 / Hubs | 31 / 122 | 1999–1999 | a335d4f9-3712-44d0-a342-256f872953e0 | 7075-T6 aluminium front hub; 100mm OLD, 28/32/36h, 108g without QR. Low-friction sealed bearings. |
| 11910 Energy HB 30 | 737 / Hubs | 31 / 122 | 1999–1999 | 3003bc44-1253-479c-8bdd-845ab5b26aa2 | 7075-T6 aluminium front hub; 100mm OLD, 16/18/24/28/32h, 122g without QR. Straight-pull/radial build, 17mm oversized axle, two low-friction sealed bearings. |
| 11911 Joy Tech Nova Tech (rear) | 745 / Hubs | 33 / 124 | 1999–1999 | 5367292a-9bc1-42c8-aa77-d5ddf97f2170 | 7075 aluminium rear hub; 140mm spacing; 32/36 holes; the listing says cassette-compatible with 8/9-speed Shimano/Campagnolo. |
| 11912 Microtech Front Hub | 748 / Hubs | 31 / 122 | 1999–1999 | 605934f1-2a9a-48c5-ae23-c68708c0f8d7 | 6082-T6 alloy front hub, 100mm OLD, 32h; 165g with QR/120g without. Alloy axle printed6075-T6; double-sealed bearings, brushed silver anodised finish. |
| 11913 Tune Mig 66 | 760 / Hubs | 32 / 123 | 1999–1999 | f4ad9232-f2b5-4c71-8173-05738acf794b | 7075 aluminium front hub, 100mm OLD. Crossed lacing:74g without QR, 16/18/24/28/32/36h. Radial lacing:78g, 28/32/36h. |
| 11914 Energy HB01 / HB02 / HB03 / HB04 (rear) | 737 / Hubs | 32 / 123 | 1999–1999 | 71014592-b17f-4221-92c5-99f26e0bbc24 | 7075-T6 aluminium/6Al-4V titanium rear hubs, HB01/02/03/04; 130mm OLD, 28/32/36h, 245g; traditional spokes, four bearings, three independently sprung pawls; Shimano/Campagnolo8/9-speed. |
| 11915 Energy HB11 / HB12 / HB13 / HB14 (rear) | 737 / Hubs | 32 / 123 | 1999–1999 | 07ec4b00-eec8-4de5-9c59-31ca464a57dd | 7075-T6 aluminium/6Al-4V titanium rear hubs, HB11/12/13/14; 130/135mm OLD, 28/32h, 260g without QR; straight-pull spokes, four bearings, three independently sprung pawls; Shimano/Campagnolo8/9-speed. |
| 11916 Microtech Rear Hub | 748 / Hubs | 33 / 124 | 1999–1999 | 9d13eb10-3e9a-47c1-96ee-07113fe70350 | 6082-T6 alloy rear hub, 130mm OLD, 32h; listed 335g with QR/175g without (inconsistent basis). Axle printed6075-T6; 2 hub/3 body bearings, sealed, brushed silver anodised. |
| 11917 TEC Components Flash (front) | 719 / Hubs | 32 / 123 | 1999–1999 | 45cabf24-e776-4a94-80f2-9e06693fd9d4 | CNC7075 aluminium front hub; 100mm OLD, 18/24/28/32/36h, 110g without QR; sealed bearings, anodised colours. |
| 11918 TEC Components Big (front) | 719 / Hubs | 32 / 123 | 1999–1999 | fe856ef9-1121-467c-8c3a-c676d14ef074 | CNC7075 aluminium front hub, 100mm OLD, 28/32/36h, 110g without QR; sealed bearings, anodised colour options. |
| 11919 Tune Mag 215 | 760 / Hubs | 34 / 125 | 1999–1999 | 20afbcc1-6da6-45ce-a6a1-af1549b04b2d | 7075 aluminium/titanium rear hub; 130mm OLD, 16/18/24/28/32/36h, 225g without QR; Shimano/Campagnolo8/9-speed. |
| 11920 Tune Mag 205 | 760 / Hubs | 34 / 125 | 1999–1999 | 76d9a849-bf23-4d42-b334-4b1a48684958 | 7075 aluminium/titanium rear hub with carbon axle; 130mm OLD, 16/18/24/28/32/36h, 205g without QR; Shimano/Campagnolo8/9-speed. |
| 11921 Tune Mag 180 | 760 / Hubs | 34 / 125 | 1999–1999 | dc212de4-b07f-46db-9986-e2c3ce293310 | 7075 aluminium/titanium rear hub with carbon axle and ceramic bearings; 130mm OLD, 16/18/24/28/32/36h, 180g without QR; Shimano/Campagnolo8/9-speed. |
| 11922 Bebop Cromoly | 731 / Pedals | 35 / 126 | 1999–1999 | 6adaca78-d1b1-4a70-8214-8fb4465a6a75 | 6061-T6 aluminium pedal with CrMo axle, circular body and about 20° radial float; cleat engagement on both sides; 210g/pair. |
| 11923 Bebop Stainless | 731 / Pedals | 35 / 126 | 1999–1999 | 7c0f4d4f-36b4-4f15-a850-b4883e9cd40c | 6061-T6 aluminium pedal with stainless-steel axle, cleat engagement on both faces and about 20° radial float; 195g/pair, with 175g/pair Deluxe option. |
| 11924 Exus E7 | 739 / Pedals | 35 / 126 | 1999–1999 | 6d60745a-a278-4fa0-867c-9235a5846361 | Aluminium clipless pedal compatible with Look cleats; release adjustment and sealed cartridge bearings. |
| 11925 Exus E12 | 739 / Pedals | 35 / 126 | 1999–1999 | 7cd43f94-6ba6-490e-9309-fc48d7691356 | Aluminium clipless pedal compatible with Look cleats; release adjustment and sealed cartridge bearings. |
| 11926 Icon De La Sole | 743 / Pedals | 35 / 126 | 1999–1999 | 1bd238d6-0bd5-4aa4-ba06-bf6fd11b1365 | Aluminium and titanium clipless pedal with three cartridge bearings and cleats; 270 g per pair. |
| 11927 RIE 162 Super Light | 750 / Pedals | 36 / 127 | 1999–1999 | 38f959c3-28f2-4d69-b8a3-9c2b642862d0 | Aluminium road pedal with silver finish; 270g/pair. |
| 11928 RIE E-12 | 750 / Pedals | 36 / 127 | 1999–1999 | 8321b4b9-87ee-46eb-99b1-7b79e76fdc56 | Aluminium pedal with red and grey color options; 380g/pair. |
| 11929 Tiso Road cassette | 759 / Cassettes | 37 / 128 | 1999–1999 | b4be735b-bc2a-4927-b5b1-b46a236b9464 | CNC7075-T6 cassette set, Shimano/Campagnolo8/9-speed; 11-27T, individual sprockets from 14T; interchangeable sprockets, silver/black/red/blue/anthracite. |
| 11930 RIE LH 556 / LH 520 | 750 / Tyres | 22 / 113 | 1999–1999 | e6121f3d-9e5c-4054-82f6-fc1190a345d0 | Kevlar and nylon clincher with multiple tread patterns and color options; 700x20C/700x23C; 195g. |
| 11931 Icon Stash | 743 / Handlebars | 25 / 116 | 1999–1999 | 7015e87b-2ca7-4521-b0a4-bd7745955412 | 7075-T6 aluminium drop bar with anatomical grip and grey finish; 420/440mm. |
| 11932 Exus E1 | 739 / Pedals | 35 / 126 | 1999–1999 | 745dae70-fe56-4993-8b94-3a0343efd6b2 | Aluminium clipless pedal compatible with Look cleats; natural aluminium finish and release adjustment. |
| 11933 TEC Components Slim (front) | 719 / Hubs | 32 / 123 | 1999–1999 | 48d1df83-3cc8-45ca-816b-d8a9e5b9d1a5 | CNC7075 aluminium front hub, 100mm OLD, 18/24/28/32/36h, 105g without QR; sealed bearings, anodised colour options. |
| 11934 TEC Components Slim (rear) | 719 / Hubs | 34 / 125 | 1999–1999 | 54661c5d-a5bd-43c2-9c02-406b53252f6b | CNC7075 aluminium rear hub/body, 130/135mm OLD, 28/32h, 350g without QR; Shimano/Campagnolo8/9-speed, four ball bearings; anodised colours. |
| 11935 Tioga Gritty Slicker | 699 / Tyres | 22 / 113 | 1999–1999 | e98c327f-06cf-4477-87e6-5c071ecb5ca8 | Central smooth tread with knobby shoulders; black/tan, 700x32C380g or 700x40C535g; for all-terrain/cyclocross use. |
| 11936 DT Hügi Strada (front) | 736 / Hubs | 31 / 122 | 1999–1999 | d6ffffbf-dd24-49ba-a830-3f4db3111893 | 7075-T6 aluminium front hub; 100mm OLD, 18/24/32/36h, 135g without QR; other drillings for round or aero spokes available on request. |
| 11937 3ttt Mini Tiramisù | 61 / Handlebars | 39 / 131 | 1999–1999 | 853dbf8c-9b36-43d0-93e8-4d4c7434563f | 5754 aluminium short aero extensions; 240g; titanium-grey anodised. |
| 11938 3ttt Tiramisù | 61 / Handlebars | 39 / 131 | 1999–1999 | ea7b18af-d2a2-49cf-9320-0fb2f9f23a46 | 5754 aluminium short adjustable aero extensions; 7075 alloy clamps, 260g; silver, titanium-grey, red or blue anodised. |
| 11939 3ttt Bio Arms | 61 / Handlebars | 39 / 131 | 1999–1999 | 5b099347-ace7-4b9c-a5d5-9da0aa3471f1 | Separate two-arm extensions in 5754 aluminum, fully adjustable with adjustable arm supports and non-slip material; silver, titanium-gray, red, and blue anodized finishes. 540 g. |
| 11940 Italmanubri (ITM) Crono Vip 2 | 320 / Handlebars | 39 / 131 | 1999–1999 | 72d69960-d9d5-4258-b8b3-639ae07fa3c6 | 6000-series aluminium aero extensions; shaped raised grips joined at the front, adjustable elbow supports/pads and clamps; black anodised, 450g. |
| 11941 Italmanubri (ITM) Crono Vip 3 | 320 / Handlebars | 39 / 131 | 1999–1999 | fcad25ad-abc4-4496-b7f7-782b77e46d03 | 6000-series aluminium aero extensions; separate shaped raised grips, adjustable elbow supports/pads and clamps; black anodised, 450g. Clamp shims25.8 to23.5mm. |
| 11942 3ttt Sub 8 | 61 / Handlebars | 39 / 131 | 1999–1999 | e754a375-24c8-4490-bce6-0334e7d3c36b | 5754 aluminium aero extensions with adjustable arm supports/pads, single-bolt clamp; silver anodised. Optional bridge; 450g. |
| 11943 Coda Road wheelset | 119 / Wheel(sets) | 41 / 133 | 1999–1999 | 06ea0a81-901c-4b81-9899-a0727cb6377b | Complete road wheelset with Mavic Open-Pro rims, DT Competition Black spokes, and Coda 900 hubs; 100 mm front and 130 mm rear spacing. |
| 11944 Energy Equipe Pro 120 | 737 / Wheel(sets) | 41 / 133 | 1999–1999 | c4e348f8-863e-4793-9296-c421509e2d93 | 5086 electrowelded double-eyelet aluminum rim, 20 x 13 mm; 28 front/32 rear straight-pull spokes, ABS, Ergal/brass nipples; straight-pull hubs; 650 g front, 850 g rear; Campagnolo/Shimano 8/9-speed. |
| 11945 Energy Equipe Pro 150 | 737 / Wheel(sets) | 41 / 133 | 1999–1999 | 0806fa97-ac27-443a-a3e9-d6f7dacde0b1 | Complete road wheelset with 6082-T6 double-wall aluminum rims, straight-pull spokes, Ergal nipples, and aluminum hubs; compatible with Campagnolo 8/9-speed and Shimano 8/9-speed. Front 660 g; rear 865 g. |
| 11946 Energy Equipe Pro 170 | 737 / Wheel(sets) | 41 / 133 | 1999–1999 | 8c710914-5ea7-4bf1-9eb6-a1ff5f9b3d4e | 6082-T6 aluminum rims, 19 x 32 x 20 mm, rectified sides; straight-pull 28 front/32 rear spokes, ABS front; 700 g front, 900 g rear; Campagnolo/Shimano 8/9-speed. |
| 11947 Rolf Vector Pro | 751 / Wheel(sets) | 44 / 136 | 1999–1999 | 8092eb92-1411-4a73-aded-4536618438b7 | Complete road wheelset with aluminum rims, 14 front and 16 rear stainless spokes converging in pairs at the rim, and Shimano-compatible hubs; gold or black hub finish. Weight: front 765 g, rear 995 g. |
| 11948 Rolf Vector Comp | 751 / Wheel(sets) | 44 / 136 | 1999–1999 | bd7898f8-78ea-4af3-a52d-be4d168c513e | Complete road wheelset with aluminum rims, 18 front and 20 rear stainless spokes converging in pairs at the rim, and Shimano-compatible hubs; red or black hub finish. Weight: front 790 g, rear 1077 g. |
| 11949 Rolf Vector | 751 / Wheel(sets) | 44 / 136 | 1999–1999 | a7b6f056-a264-4536-b8fb-151b81ec3793 | Complete road wheelset with aluminum rims, 20 front and 24 rear stainless spokes converging in pairs at the rim, and Shimano-compatible hubs; black hub finish. Weight: front 786 g, rear 1070 g. |
| 11950 Spinergy Spox (front) | 757 / Wheel(sets) | 45 / 137 | 1999–1999 | 6da37c54-2170-447d-af7d-14e65cf22ada | Complete front road wheel with an Ambrosio F.28 black machined rim, composite Vectran spokes, and oversized aluminum/carbon Spinergy hub; radial lacing with nipples at the hub. 680 g. |
| 11951 Spinergy Spox (rear) | 757 / Wheel(sets) | 45 / 137 | 1999–1999 | 0b4d3ecc-43cb-42b6-b2ce-086560647ff6 | Complete rear road wheel with an Ambrosio F.32 black machined rim, composite Vectran spokes, and oversized aluminum/carbon Spinergy hub; radial lacing with nipples at the hub; Shimano cassette compatible. 870 g. |
| 11952 Spinergy Strada (front) | 757 / Wheel(sets) | 45 / 137 | 1999–1999 | 510f73cb-8652-421d-ad88-5181ddb0c37a | Complete front wheel with aluminum/carbon rim and four sets of paired blade spokes; 26- or 28-inch, tubular or clincher, aluminum braking track. Weights: clincher 850/820 g; tubular 720/780 g (size order unresolved). |
| 11953 Spinergy Strada (rear) | 757 / Wheel(sets) | 45 / 137 | 1999–1999 | 3775c515-ab3f-4a55-81b3-28a05f178a39 | Complete rear wheel with aluminum/carbon rim and four sets of paired blade spokes; 26- or 28-inch, tubular or clincher, Shimano freewheel, aluminum braking track. Weights: clincher 1000/1060 g; tubular 970 g (size order unresolved). |
| 11954 Spinergy Super Stiff (front) | 757 / Wheel(sets) | 45 / 137 | 1999–1999 | fbd5505c-94fc-4b28-ab5a-19802ad16929 | Complete front wheel with an aluminum/carbon rim and four series of twin-blade spokes; 28-inch diameter; aluminum braking track available for tubular or clincher tires. 895 g. |
| 11955 Spinergy Super Stiff (rear) | 757 / Wheel(sets) | 45 / 137 | 1999–1999 | 1b704300-f40c-4930-b605-5dd5769f7c26 | Complete rear wheel with an aluminum/carbon rim and four series of twin-blade spokes; 28-inch diameter; available for tubular or clincher tires; Shimano freehub compatible; aluminum braking track. 1100 g. |
| 11956 Spinergy X-Light (front) | 757 / Wheel(sets) | 45 / 137 | 1999–1999 | bc7e648e-209d-480e-93d9-2b662cd76097 | Complete front wheel with an aluminum/carbon rim and four series of twin-blade spokes; 28-inch diameter; aluminum braking track available for tubular or clincher tires. 800 g. |
| 11957 Spinergy X-Light (rear) | 757 / Wheel(sets) | 45 / 137 | 1999–1999 | 7c38a705-327c-417d-a251-cceb8746341f | Complete rear wheel with an aluminum/carbon rim and four series of twin-blade spokes; 28-inch diameter; available for tubular or clincher tires; Shimano freehub compatible; aluminum braking track. 920 g. |
| 11958 WR Compositi WRR | 711 / Wheel(sets) | 45 / 137 | 1999–1999 | e61f88d4-c292-46cc-9550-ded7e8bf1021 | Complete road wheelset using FiR rims and WRR hubs, with user-selectable ACI spokes and standard or variable-section lacing; rear wheel available with 8/9-speed cassette hub. From 620g front/840g rear, depending on build. Diameter 28 in. |
| 11959 Fi'zi:k Vitesse | 740 / Saddles | 46 / 138 | 1999–1999 | ef7e4251-f410-4ceb-a1fb-f68e2288e2b1 | Women-specific ergonomic saddle, carbon-fibre-reinforced shell, titanium rails; leather/Borbonese leather cover, variable padding, rear elliptical reinforcement; black or Sid blue, 230g. |
| 11960 Fi'zi:k Pavé | 740 / Saddles | 46 / 138 | 1999–1999 | b3610b0f-3ec3-4cf2-872b-4f89ae5d4c3b | Saddle with nubuck/synthetic cover, titanium rails, and a three-point elastomer suspension system. |
| 11961 Aheadset AL | 728 / Headsets | 49 / 142 | 1999–1999 | ea58d3e6-1f16-4eda-977a-3f494debf323 | Aluminum threadless headset for 1-inch (111 g) and 1-1/8-inch (121 g) steerer tubes. |
| 11962 Cane Creek C2 | 732 / Headsets | 49 / 142 | 1999–1999 | d4619681-00de-43f1-ac1d-ca181e6b063c | Aluminum bearing headset for 1-inch (128 g) and 1-1/8-inch (140 g) threadless steerers. |
| 11963 Cane Creek S5 | 732 / Headsets | 49 / 142 | 1999–1999 | 0efa581d-a357-4a5b-abef-4dcd2fafa419 | 7075-T6 aluminum bearing headset for 1-inch (116 g) and 1-1/8-inch (144 g) threadless steerers. |
| 11964 Syncros Hardcore headset | 710 / Headsets | 50 / 143 | 1999–1999 | 42b4f161-83c6-4058-9a04-1fd9ec024a29 | 7075-T6 aluminum 1-inch headset, 120 g; radial and bidirectional contact with sealed cups. |
| 11965 Tiso Handy | 759 / Headsets | 50 / 143 | 1999–1999 | ba739e1a-b00b-4c54-94ec-b0d087c5389b | 7075-T6 CNC headset, 1 or 1-1/8in, 95g for 1-1/8in. Roller bearings, hardened race; threaded/threadless, anodised/polished/painted. |
| 11966 Tiso Joe | 759 / Headsets | 50 / 143 | 1999–1999 | b4b081fc-acdc-41b6-898f-27462ad96402 | 7075-T6 aluminum 1-inch headset, 115 g; sealed angular-contact bearings; CNC-machined; threaded or threadless, anodized or polished. |
| 11967 TEC Components threaded / threadless headset | 719 / Headsets | 50 / 143 | 1999–1999 | c1a98639-d3a0-4e85-8989-03319e505d53 | CNC7075 aluminium headset; 1 or 1-1/8in, 130g listed (size basis unspecified); bearings, threaded or threadless; red/blue/black/silver/gold/yellow finishes. |
| 11968 SDG Slim Jim | 722 / Saddles | 47 / 139 | 1999–1999 | e8411f70-e36b-485a-a026-a9db14a97d35 | Synthetic leather cover with DuPont Kevlar inserts; nylon shell reinforced with Kevlar; 6Al-4V titanium rails and closed-cell neoprene padding. 240 g. |
| 11969 SDG Bel Air Custom | 722 / Saddles | 47 / 139 | 1999–1999 | 699e7db8-1368-4476-99c1-2ecb79ca7ea4 | Synthetic leather cover with Kevlar inserts; nylon shell reinforced with Kevlar; 6Al-4V titanium rails and closed-cell neoprene padding; differentiated shell and padding thicknesses. 245 g. |
| 11970 Selle Bassano Slim | 569 / Saddles | 46 / 138 | 1999–1999 | 4ce03eb0-d5ca-4cac-9f60-cf5a6335b01e | Leather-covered nylon shell with manganese rails and gel-enhanced polyurethane padding; two-tone finish. |
| 11971 Selle Bassano Stylus Corsa | 569 / Saddles | 46 / 138 | 1999–1999 | 8a25956b-007a-42da-9987-08bbfde78985 | Leather-covered nylon shell with gel inserts, manganese rails, and gel-enhanced polyurethane padding; two-tone finish. |
| 11972 Areo Pro Acciaio | 729 / Saddles | 45 / 137 | 1999–1999 | 539ea899-2995-4680-87d7-0ccca73976a9 | Synthetic leather cover, thermoplastic resin shell, steel rails, polyurethane foam padding; black. 265 g. |
| 11973 Areo Comp Vinile | 729 / Saddles | 45 / 137 | 1999–1999 | 349e6979-d4f2-468d-9090-5405f7f64245 | Synthetic leather cover, thermoplastic resin shell, steel rails, polyurethane padding; black. 270 g. |
| 11974 Areo Too Much | 729 / Saddles | 45 / 137 | 1999–1999 | 1089f0d3-a4f7-49f0-8faa-17f1bf760c48 | Embroidered synthetic leather cover, thermoplastic resin shell, CrMo steel rails, silicone gel padding; black with fluorescent yellow/blue embroidery; differentiated shell thickness. 265 g. |
| 11975 Areo Kevlar Red | 729 / Saddles | 45 / 137 | 1999–1999 | c57bcc2e-dd94-4c1e-9d2c-8661842a8299 | Armotex DuPont Kevlar cover, reinforced thermoplastic resin shell, steel rails, silicone gel padding; red; differentiated shell thickness. 255 g. |
| 11976 Areo Kevlar Yellow Cromoly | 729 / Saddles | 45 / 137 | 1999–1999 | ac463d06-1f32-48b3-b546-f88303edda80 | Armotex DuPont Kevlar cover, reinforced thermoplastic resin shell, CrMo steel rails, silicone gel padding; yellow; differentiated shell thickness. 245 g. |
| 11977 Areo Kevlar Blue Tit. | 729 / Saddles | 46 / 138 | 1999–1999 | a10ae063-d041-4c89-90b5-0f1c452d6134 | Armotex DuPont Kevlar cover, reinforced thermoplastic resin shell, titanium rails, silicone gel padding; blue; differentiated shell thickness. 230 g. |
| 11978 Areo Kevlar Side | 729 / Saddles | 46 / 138 | 1999–1999 | 8056c169-a072-49b1-b50a-22492acdf9b8 | Vinyl-leather back with DuPont Kevlar sides, reinforced-nylon thermoplastic composite shell, Ti6Al4V rails, neoprene foam padding; black with yellow sides; professional model with three shell thicknesses. 240 g. |
| 11979 BRAWO 6500 | 730 / Wheel(sets) | 40 / 132 | 1999–1999 | 89063cba-06ec-4682-8907-3be604325d72 | Complete road wheelset with 6005A-T6 aluminum, 25 mm section rims, ACI stainless spokes and Shimano Ultegra 9-speed hubs; front and rear wheels. Weight: front 900 g, rear 1120 g. |
| 11980 BRAWO 7700 | 730 / Wheel(sets) | 40 / 132 | 1999–1999 | 21537057-bea4-4afc-9c05-80263ad1d5d2 | Complete road wheelset with 6005A-T6 aluminum, 25 mm section rims, ACI stainless spokes and Shimano Dura-Ace 9-speed hubs; front and rear wheels. Weight: front 875 g, rear 1065 g. |
| 11981 Cane Creek Aerohead Road Ti | 732 / Wheel(sets) | 41 / 133 | 1999–1999 | 019e1566-18e4-4adf-a4cf-f43257bf955a | Complete road wheelset with Cane Creek rim and hub, titanium spokes, 700c diameter and 20 mm rim section; nipples at hub. Front 642 g; rear 918 g. |
| 11982 Cane Creek Aerohead Road | 732 / Wheel(sets) | 41 / 133 | 1999–1999 | e0d30f2f-9f2a-4485-b1cb-db86bf999130 | Complete road wheelset with Cane Creek rim and hub, double-butted stainless steel spokes, 700c diameter and 20 mm rim section; nipples at hub. Front 719 g; rear 1003 g. |
| 11983 Cane Creek Aerohead Light | 732 / Wheel(sets) | 41 / 133 | 1999–1999 | e06525c4-0813-48d9-a584-9acfe843fb42 | Complete road wheelset with Cane Creek rims and hubs, double-butted stainless spokes, 700c diameter and 20 mm rim section; nipples at hub. |
| 11984 Eolic Wheels CBT 15 | 738 / Wheel(sets) | 41 / 133 | 1999–1999 | 43eaba6f-b52f-460c-a553-50af2cd5f5b4 | Road wheelset:Ambrosio CBT15 tubular rims, 13mm section, Alpina1.2mm straight-pull spokes/ABS nipples, Eolic hubs with Shimano/Campagnolo8/9-speed bodies; 28in, 1480g/pair. |
| 11985 Eolic CB-15 Color | 738 / Wheel(sets) | 41 / 133 | 1999–1999 | 18c188fe-4bb2-4368-81af-5e73028a1ecb | Road wheelset:Ambrosio CB15 rims, 17mm section, Alpina Slim1.5mm straight-pull spokes/ABS nipples, Eolic Shimano/Campagnolo8/9-speed hubs; 28in, 1700g/pair. |
| 11986 Eolic CHT-21 Color | 738 / Wheel(sets) | 42 / 134 | 1999–1999 | f5633d4e-defc-40a5-8d81-67c1e37fe00d | Complete road wheelset with Ambrosio CHT-21 rim, Alpina straight-pull Slim, 1.5 mm, ABS nipples spokes and Eolic, Shimano/Campagnolo 8/9-speed interchangeable hub; 700c. 1700 g. |
| 11987 Eolic Wheels CS 32 | 738 / Wheel(sets) | 42 / 134 | 1999–1999 | 56a14a3c-8cbb-42b1-875f-c5f2407a4153 | Complete road wheelset with Ambrosio CS-32 rim, Alpina straight-pull, 1.2 mm, ABS nipples spokes and Alpina, Shimano/Campagnolo 8/9-speed interchangeable hub; 700c. 1790 g. |
| 11988 Sipav Bike Line Balance 9V | 721 / Wheel(sets) | 44 / 136 | 1999–1999 | c58ec15d-e18b-410c-b417-f679ddb6d43d | Complete road wheelset with Ambrosio Balance, 32 holes, stainless 1.8–2 mm spokes and Campagnolo Veloce 9-speed hubs; blue anodized rim; 3-cross front and rear. Diameter 28 in. Weight: front 950 g, rear 1200 g. |
| 11989 Sipav Bike Line Sidney 9V | 721 / Wheel(sets) | 44 / 136 | 1999–1999 | 9adda320-fe35-4b1b-aa41-6faa29c3424c | Complete road wheelset with Campagnolo Sidney, 32 holes, stainless 1.8–2 mm spokes and Campagnolo Veloce 9-speed hubs; satin silver rim; radial front, 3-cross rear. Diameter 28 in. Weight: front 1050 g, rear 1200 g. |
| 11990 Gipiemme Tecno 830 | 21 / Wheel(sets) | 42 / 134 | 1999–1999 | 5b9f70df-cb85-455b-ad97-8c6220e87a83 | Complete road wheelset with Gipiemme R830 rim, 16 stainless spokes and Ergal hubs compatible with Shimano/Campagnolo 8/9-speed; 700x19c, 30 mm sidewall. Front 884 g; rear 1118 g. Diameter 28 in. |
| 11991 Gipiemme Tecno 924 | 21 / Wheel(sets) | 42 / 134 | 1999–1999 | 8c6cf6f2-df53-43ba-953c-caa22be5c53c | Complete road wheelset with Gipiemme R924 rim, 24 stainless spokes and Ergal hubs compatible with Shimano/Campagnolo 8/9-speed; 700x19c, 25 mm sidewall. Front 800 g; rear 1040 g. Diameter 28 in. |
| 11992 Gipiemme Tecno 932 | 21 / Wheel(sets) | 42 / 134 | 1999–1999 | b95880e1-cc8c-4214-b2c4-78036c109eed | Complete road wheelset with Gipiemme R932 rim, 32 stainless spokes and Ergal hubs compatible with Shimano/Campagnolo 8/9-speed; 700x20c, 18 mm sidewall. Front 883 g; rear 1135 g. Diameter 28 in. |
| 11993 Microtech MC 1 | 748 / Wheel(sets) | 44 / 136 | 1999–1999 | b2c1c7e4-2516-4009-be0a-6dd725392bad | Complete road wheelset with 6082 aluminum rim and hub, DT New Aero 2.0/1.7/2.0 spokes, 700c diameter; 13 mm, 32 holes rim; competition road use. Front 750 g; rear 920 g. |
| 11994 Microtech MC 3C | 748 / Wheel(sets) | 44 / 136 | 1999–1999 | ea7f1cb6-6d70-4c1e-ba35-e43d2af79184 | Complete road wheelset with carbon rim, 6082-T6 aluminum hub, 7075-T6 axle, DT New Aero 2.0/1.0 spokes, 700c diameter; 40 mm, 10 holes rim; competition road use. Front 675 g; rear 850 g. |
| 11995 Microtech MC 7 | 748 / Wheel(sets) | 43 / 135 | 1999–1999 | bb61a1c3-f06a-4bd9-976b-cf2dd0e66d9c | Complete road wheelset with 6082 aluminum rim, 6082-T6 aluminum hub, 7075-T6 axle, DT New Aero 2.0/1.7/2.0 spokes, 700c diameter; 30 mm, 32 holes rim; competition road use. Front 850 g; rear 1045 g. |
| 11996 Rigida TVM | 512 / Wheel(sets) | 44 / 136 | 1999–1999 | 17606926-28fa-4eba-b27e-fbbbe2d99e81 | Road wheelset:Chrina TVM blue/red20mm double-eyelet rims, black spokes 28 radial front/32 crossed rear; carbon/alloy hubs, Shimano8/9-speed; 700C, wheel bags. |
| 11997 Rigida DPX wheels | 512 / Wheel(sets) | 44 / 136 | 1999–1999 | 28377bf4-3e12-4604-b053-256754c43b80 | Complete road wheelset with DPX black UP, single eyelet rim, carbon/aluminum composite hubs, Shimano 8/9-speed rear freehub; 28 front radial, 32 rear crossed; supplied in wheel bag. Diameter 28 in. |
| 11998 Cinelli Spinaci | 227 / Handlebars | 38 / 130 | 1999–1999 | 68e1ff33-698b-4b02-9bef-d52083079eb4 | Narrow curved auxiliary grips, fully adjustable and suitable for any handlebar; Aluminum extension tubes, stainless hardware. 220 g. |
| 11999 Cinelli Spinaci Light | 227 / Handlebars | 38 / 130 | 1999–1999 | 101a2287-0fd1-4111-9279-b8c4e5589453 | Fully adjustable aero extensions; Drawn aluminum extension tubes, stainless hardware. 190 g. |
| 12000 Cinelli Eurospinaci | 227 / Handlebars | 38 / 130 | 1999–1999 | 0f2ae6a8-5b74-4023-9b8a-7cb6443b4df7 | Adjustable armrest extensions; Drawn aluminum extension tubes, stainless hardware. 450 g. |
| 12001 Cinelli New Corna | 227 / Handlebars | 38 / 130 | 1999–1999 | e350c465-99b0-4f41-86ed-00b72dc2029c | Adjustable aerodynamic extensions in drawn aluminum with adjustable aluminum armrests and washable repositionable padded covers; 450 g. |
| 12002 Italmanubri (ITM) Crono Vip 1 | 320 / Handlebars | 38 / 130 | 1999–1999 | 25740b87-64ac-4e6d-8975-7630e8c3e562 | 6000-series aluminum parallel aero extensions with raised grips joined at the front; adjustable arm supports and pads. 450 g. |
| 12003 Italmanubri (ITM) Hook | 320 / Handlebars | 38 / 130 | 1999–1999 | e720e23c-9bdf-4d63-a78b-1e0c5dd4c205 | Open C-shaped aero extensions, with the lower section parallel to the handlebar curve and upper section turned upward; 6082 aluminum clamps and 7075 aluminum extensions. 210 g. |
| 12004 Italmanubri (ITM) Hooks Compact | 320 / Handlebars | 38 / 130 | 1999–1999 | 3090aec2-a36e-47a0-903c-79319526ef94 | Compact open C-shaped aero extensions with the lower section parallel to the handlebar curve and upper section turned upward; 6082 aluminum clamps and 7075 aluminum extensions. 190 g. |
| 12005 Microtech Aheadset | 748 / Headsets | 49 / 142 | 1999–1999 | 43917b1a-0fcf-4f39-805d-a9281f6dba8b | 6082-T6 aluminum threadless headset, CNC-machined with anodized finish, roller-cage bearings, upper ball-bearing cartridge and micrometric adjustment. Diameter 1 in. |
| 12006 Serfas MR 303 Pro Dual Density Racing | 754 / Saddles | 48 / 140 | 1999–1999 | 3237e990-3f13-41ea-bfa7-5b0cce8dbb01 | DuPont Kevlar cover, titanium rails and Pro Dual Density padding; black, blue, red or yellow. |
| 12007 Serfas RC 289 Dual Density Racing | 754 / Saddles | 48 / 140 | 1999–1999 | 2c16dcb1-fa70-46f9-b306-f67ab50de041 | Kevlar cover, titanium rails, Dual Density padding; black, blue, red or yellow. |
| 12008 Serfas LR 304 Lady | 754 / Saddles | 48 / 140 | 1999–1999 | fb230831-2bef-4d04-b9a0-a93b187403a8 | DuPont Kevlar cover, titanium rails and Pro Dual Density padding; black, blue, red or yellow. |
| 12009 Serfas Lola Titanio | 754 / Saddles | 48 / 140 | 1999–1999 | 31dc641e-c4c1-4b36-8850-f8b9a31d985d | Leather and DuPont Kevlar cover with titanium rails; black. |
| 12010 Serfas Lola | 754 / Saddles | 48 / 140 | 1999–1999 | 986bc25a-1812-4131-a796-2d0dccaa88d8 | Leather and DuPont Kevlar cover with steel rails; black, red or yellow. |
| 12011 Serfas KT 219 | 754 / Saddles | 48 / 140 | 1999–1999 | a45dd2a7-db7f-4cb3-b398-aee9d4ddbc7e | Kevlar cover and titanium rails; black, blue, grey, red or yellow. |
| 12012 RIE Condor | 750 / Tyres | 53 / 146 | 1999–1999 | 2d12c84d-6e4e-4d4b-81bd-6c797691fb89 | Training tubular; polyester casing, latex tube, ribbed tread; 21.5mm x28in, 295g. |
| 12013 RIE Scat | 750 / Tyres | 53 / 146 | 1999–1999 | 3b874eb1-a4b1-45c6-993f-6e97ac299253 | Tubular; polyester casing, latex tube, ribbed tread; 21.5mm x28in, 225g; black. |
| 12014 Joy Tech Nova Tec (front) | 745 / Hubs | 31 / 122 | 1999–1999 | 6bb20814-9a17-4d8c-a1ac-a08dc9e60492 | 7075 aluminium front hub listing; 100-110mm OLD, 32/36h. |
| 12015 TEC Components Flash (rear) | 719 / Hubs | 34 / 125 | 1999–1999 | 35c89b02-b1de-41f0-8ac5-1cb304b8eea3 | CNC7075 aluminium rear hub/body, 130/135mm OLD, 24/28/32/36h, 380g without QR; Shimano/Campagnolo8/9-speed, four ball bearings; anodised colours. |
| 12016 TEC Components Big (rear) | 719 / Hubs | 34 / 125 | 1999–1999 | 9c442d33-bc29-4565-aeb3-3b09b0da85b2 | CNC7075 aluminium rear hub/body, 130/135mm OLD, 28/32/36h, 380g without QR; Shimano/Campagnolo8/9-speed, four ball bearings; anodised colours. |
| 12017 RIE Olympic Super | 750 / Wheel(sets) | 44 / 136 | 1999–1999 | c98987f8-a2ba-4149-afcd-6bb6e2fad13f | Road wheel:double-eyelet alloy rim, black butted18/8 stainless straight-pull spokes, Edco Olympic hub, black Ergal nipples; 28/32/36h, Shimano/Campagnolo8/9-speed. Listed490g, weight basis unspecified. |

</details>

### Existing rows: exact changes and prior values

| ID / old title | Prior maker / dates / source_ref | Applied fields | Prior description / search_text / UUID |
| --- | --- | --- | --- |
| 1396 Rohloff SLT 99 (Road) | 215 / 1986–1999 / 357 | {"description":"Steel road chain, 1/2x3/32in, 114 links. 1996: 6.85mm, 317g. 1999 SLT99 listing: 7.1mm, for 8/9-speed.","source_ref":353} | Steel 1/2 x 3/32 in narrow chain, 6.85 mm wide, 114 links; 317 g. / search:Rohloff SLT 99 / 8F906840-B738-44C1-BDEE-9F20BA711C53 |
| 11606 Syncros Altura | 710 / 1996–1996 / 357 | {"year_to":"1999","description":"6061-T6 TIG-welded quill stem, 1in. 1996:110-150mm, -17.5deg, 200g. 1999:100/110/120/130/140mm, matt black or silver.","source_ref":353} | 6061-T6 aluminium; 110-150mm extension; 1in shaft; -17.5 degrees; 200g; TIG welded. / search:Syncros Altura / c397ace6-632d-4fde-abb8-2c0557ad4c53 |
| 11610 Syncros Hardcore | 710 / 1996–1996 / 357 | {"year_to":"1999","description":"Hardcore 7075 alloy post; 26.8/27/27.2/29.4/31.6/31.8mm. 1996:T78, 225mm, 220g. 1999:T6, 330mm; 225mm option at27.2mm.","title":"Syncros Hardcore 7075","search_text":"Syncros Hardcore 7075","source_ref":353} | 7075-T78 aluminium; 26.8/27.0/27.2/29.4/31.6/31.8mm; 225mm; 220g. / search:Syncros Hardcore / d64c7278-2bed-4600-8cfc-875f881d90f2 |
| 11612 Titec Aluminium | 712 / 1996–1996 / 357 | {"year_to":"1999","description":"Al235 alloy post; 26.8/27/27.2mm. 1996:270mm, 200-235g, microadjust clamp/reinforced tube. 1999:7075-T6, 350mm, 240g, forged head and opposed two-bolt adjustment.","title":"Titec Al 235","search_text":"Titec Al 235","source_ref":353} | Aluminium alloy 235; 26.8/27.0/27.2mm; 270mm; 200-235g; microadjust clamp and reinforced tube. / search:Titec Aluminium / a721abeb-8a84-4e47-93ab-ba4d1943d44f |
| 11613 Titec Carbon C191 | 712 / 1996–1996 / 357 | {"year_to":"1999","description":"C191 carbon composite post with microadjust clamp. 1996:26.8/27/27.2mm, 270mm, 180-190g. 1999:27.2x350mm, 200g; carbon shaft with alloy core, forged head, opposed two-bolt adjustment.","source_ref":353} | C191 carbon-fibre composite; 26.8/27.0/27.2mm; 270mm; 180-190g; microadjust clamp. / search:Titec Carbon C191 / 2b8cece3-c74a-47c6-9989-9a2423b39d6c |
| 11618 Taya Pro Extreme | 713 / 1996–1996 / 357 | {"year_to":"1999","description":"Boron-steel plates; 7/8-speed, 1.8-2mm rings; pin strength>350kg/tensile>1020kg. Case-hardened CrMo pins, double-chamfered plates, star riveting; tool-free Sigma link. Campagnolo AP01/Sachs SC80/Shimano HG91 compatible.","source_ref":353} | Boron steel; 1.8-2mm chainrings, 7/8-speed sprockets; pin strength over 350kg, tensile strength over 1020kg; hand-operated Sigma connector; Campagnolo AP01, Sachs SC80, Shimano HG91 compatible. / search:Taya Pro Extreme / eb48abff-4a05-4b27-83f1-ca51a66c512c |
| 1704 Ofmega Vantage | 33 / 1992–1999 / 357 | {"description":"Alloy170mm cranks, polished/painted, anodised rings/chainguard; 567g measured. 1996:700g42/52; 42/52, 39/53, 32/42/52, 32/44. 1999 Vantage2:130BCD, 707g; Vantage3:130/74BCD, 790g, 30/40/50 or 32/42/52; 7/8-speed Easy Shift.","source_ref":353} | Painted alloy cranks 170 mm, removable anodised alloy rings (42-52, 39-53, 32-42-52, 32-44), chain guard; 700 g complete 42-52; 567 g crankset only (measured). / search:Ofmega Vantage / C2182A8C-60A1-4D89-80DD-C4DF555DE8F6 |
| 11683 Tioga Bloodhound | 699 / 1996–1996 / 357 | {"year_to":"1999","description":"Cross-tread700x38C tyre for all-terrain/cyclocross. Listed473g in 1996 and470g in 1999.","source_ref":353} | Cross tread; 700x38c; 473 g. / search:Tioga Bloodhound / 13fa7c36-6c3f-4e88-952b-0c7112a1522b |
| 11685 Tioga City Slicker | 699 / 1996–1996 / 357 | {"year_to":"1999","description":"Smooth tread with cuts; 700x32C, black/tan, for all-terrain use. Listed535g in 1996 and418g in 1999; weight difference retained by edition.","source_ref":353} | Smooth tread; 700x32c; 535 g; black/tan. / search:Tioga City Slicker / 0dc5cf96-6cd9-446f-a97a-3cd72c8c93eb |
| 11686 Tioga Proline S | 699 / 1996–1996 / 357 | {"year_to":"1999","description":"Nylon-casing slick tyre with side cuts. 1996 sizes700x18/20/23/25. 1999:700x20C, 230g Kevlar bead or 250g steel bead; black/tan.","source_ref":353} | Nylon casing; slick with side cuts; 700x18, 20, 23, 25. / search:Tioga Proline S / 790327b5-25ee-43ac-bf29-b51ec686f93b |
| 11687 Tioga Proline F | 699 / 1996–1996 / 357 | {"year_to":"1999","description":"Nylon-casing tyre. 1996:slick with side cuts, 700x18/20/23/25. 1999:herringbone tread, 700x20C, 226g Kevlar bead or 263g steel bead.","source_ref":353} | Nylon casing; slick with side cuts; 700x18, 20, 23, 25. / search:Tioga Proline F / 989da312-3d34-435d-a116-c71f6d72fa47 |
| 11636 Bestialine ST 7561 | 716 / 1996–1996 / 357 | {"year_to":"1999","source_ref":353} | Grade 5 titanium spindle, 7075 aluminium cups and perspex; 107/109/111/114/117/119/122/127mm; 178g; sealed bearings; 68/70/73mm shells; sealed ergal crank bolts. / search:Bestialine ST 7561 / b7b19d5d-fb11-4d34-9564-9aab9a7a0e96 |
| 6806 Gommitalia Targa | 645 / 1999–2000 / 353 | {"description":"Polyester/cotton casing with Kevlar puncture strip and Kevlar beads, made in Italy; Targa 700x20C 190g and Targa 22 700x22C 200g.","source_ref":353} | Gommitalia Targa, Italy / search:Gommitalia Targa / 348949D6-334D-48C3-A8AE-9B69FDDA91E4 |
| 11675 SDG S7000 Ti | 722 / 1996–1996 / 357 | {"year_to":"1999","description":"S7000 Ti saddle; 6Al-4V rails, closed-cell neoprene pad. 1996:nylon/carbon shell, Kevlar cover, light blue/black, 209g. 1999:nylon/Kevlar shell, Kevlar or leather cover, black/blue/red, 230g; leather black only.","source_ref":353} | Nylon/carbon fibre shell, 6Al-4V titanium rails, closed-cell neoprene padding and Kevlar cover. Light blue or black; 209 g. / search:SDG S7000 Ti / 85f4c32e-af4a-4d5f-ae79-426ce7cf8eb4 |
| 11676 SDG S2000 Ti | 722 / 1996–1996 / 357 | {"year_to":"1999","description":"S2000 Ti saddle; 6Al-4V rails, closed-cell neoprene pad. 1996:nylon/carbon shell, Kevlar cover, light blue/black, 215g. 1999:nylon/Kevlar shell, Kevlar or leather cover, black/blue/red, 230g.","source_ref":353} | Nylon/carbon fibre shell, 6Al-4V titanium rails, closed-cell neoprene padding and Kevlar cover. Light blue or black; 215 g. / search:SDG S2000 Ti / bef539ac-3b19-408b-9a70-36ae955c9954 |
| 11677 SDG Comp Ti | 722 / 1996–1996 / 357 | {"year_to":"1999","description":"Comp Ti saddle; 6Al-4V rails, closed-cell neoprene pad. 1996:nylon/carbon shell, Kevlar cover, light blue/black/red, 215g. 1999:nylon/Kevlar shell, Kevlar or leather cover, black/blue/red, 240g; leather black only.","source_ref":353} | Nylon/carbon fibre shell, 6Al-4V titanium rails, closed-cell neoprene padding and Kevlar cover. Light blue, black or red; 215 g. / search:SDG Comp Ti / 29aed7b9-bf00-4f2e-931d-6487ab68510b |
| 10385 LOOK 2004 G | 415 / 1999–1999 / 353 | {"description":"PVC-covered plastic-shell saddle with CrMo rails and Royal gel padding; black/silver, 380g, for road/MTB.","title":"Lookin 2004 G","search_text":"Lookin 2004 G","brand_id":747,"source_ref":353} | Cover: PVC; shell: plastic; rails: CrMo; padding: Royal gel; colours: black and silver; road and MTB; 380g / search:LOOK 2004 G / d4caf980-5b17-4db7-b5dd-38e9deb1b387 |
| 10651 Ritchey Vector Pro WCS | 252 / 1996–1996 / 357 | {"year_to":"1999","source_ref":353} | Nylon shell with titanium rails, polyurethane padding and leather cover, black. 220 g. / search:Ritchey Vector Pro WCS / 8b107922-d895-11f1-a2df-02fea3763e8d |

All existing category/group/image and unlisted fields remain fixed; Lookin is
the sole maker change. Source_ref353 is set in the same guarded update as each
actual field change; unchanged corroborations retain their provenance.

### Held entries

| Ref / source | Identity / candidates | Evidence limit |
| --- | --- | --- |
| 03-18:28 / scan15 | Rohloff Catena strada (unnamed 9-speed chain) / 1396 | Uncoded 6.8mm road chain may be a narrower SLT99 configuration; no independent model crosswalk. |
| 03-18:48 / scan15 | Taya TB 500 / 11616 | possible family relation to generic Taya Bridge row; exact identity unconfirmed |
| 03-18:59 / scan15 | Taya Pro Relief / 11617 | Pro Relief versus existing Relief11617 has no exact model/code crosswalk; retain both sources without inserting a likely duplicate or changing the older row. |
| 03-18:79 / scan14 | Shimano 6500 /  | Printed Shimano6500 is a group-level label; existing CN-HG9210858 has matching 9-speed/304g/116-link evidence. No new code crosswalk; preserve prior held decision. |
| 19-37:10 / scan28 | Race Face IB STD Road / 11633 | 1996 row Race Face Turbine IB STD shares the IB STD name and crank lengths; 1999 prints IB STD Road, but weight changes from 465g to 440g. |
| 19-37:20 / scan30 | Syncros Proseries Titanio / 11644 | 1996 Syncros Proseries Altura has matching titanium spindle/cup material and similar lengths, but 140g versus 150g in 1999. |
| 19-37:22 / scan30 | TEC Components Mister X / 11645 | 1996 generic titanium BB uses same maker/material, but printed model and weight-range differ; resolve as variant vs retitle before adding. |
| 19-37:30 / scan32 | WR Compositi WRR (front) / 11657 | 1996 Standard front hub has same brand/100mm role but differs in listed weight (110g vs 91g) and hole counts. |
| 19-37:39 / scan34 | WR Compositi WRR (rear) / 11668 | 1996 Standard rear hub has same brand/130mm role but differs in listed weight (275g vs 271g) and hole counts. |
| 19-37:60 / scan31 | Miche Primato (front) / 3427 | Generic Miche Primato3427 does not establish the exact 1999 configuration; preserve its earlier row and dates. |
| 38-56:27 / scan49 | Cane Creek threaded / threadless headset /  | Image caption identifies Cane Creek only, with no model name; 116 g (1-inch) and 146 g (1-1/8-inch), which differs from the listed C2/S5 sizes. Do not infer this is either model. |

<details>
<summary>Scan coverage ledger</summary>

| Scan | Verified folio | Reviewed categories | Printed brands / scope notes |
| --- | --- | --- | --- |
| 1 | 88 | complete groups (out of scope) | Campagnolo, Mavic, FRM, Shimano; group equipment summaries/prices; no component rows |
| 2 | unverified | complete groups (out of scope), advertisement | Miche, Shimano, Mavic; group equipment summaries/prices; dealer advertisement |
| 3 | 91 | complete groups (out of scope), stems | Shimano, PMP, Ritchey, Areo, Cinelli; groups, axle-only replacements (not complete BB/hub rows), advertisement |
| 4 | 92 | stems | Cinelli, Control Tech, Coda, Colnago CNC Racing, Deda Elementi;  |
| 5 | 93 | stems | Deda Elementi, Free Spirit, FRM, Icon, Innovative Bike Systems, Italmanubri, Microtech, Modolo;  |
| 6 | 94 | stems | Italmanubri, ITM, Look, Modolo, Ritchey, Salsa, Roox; mountain-bike advertisement |
| 7 | 95 | stems | Seven, Sintesi, Syncros, Titec, 3T/3ttt, TEC Components;  |
| 8 | 96 | stems, quick-release skewers (out of scope) | TEC Components, WR Compositi, Avenir, Bestialine, Coda, Energy, FRM, Kore, Miche, PMP, Ritchey, Salsa, Sun Ringle, Syncros, Tune; all quick-release/skewer listings; they are out of requested category scope |
| 9 | 97 | quick-release skewers (out of scope), bottles (out of scope) | Syncros, Tune, TEC Components, WR Compositi, Allara, Andriolo, Areo, Aquabak, Cannondale, Diamond Back, Dirt Bag, Elite; skewers and bottles |
| 10 | 98 | bottles (out of scope), fastener kits/frame hardware (out of scope) | Elite, Marin, Scott, Specialized, Sci-Con, Control Tech, Free Spirit, FRM, Miche, Modolo, Rudelli, TEC Components, Tiso Bike C.; bottles and non-catalogued fastener/hardware kits; no requested component category |
| 11 | 99 | fastener kits/frame hardware (out of scope), rear derailleurs | Tiso Bike C., Campagnolo, Shimano, SRAM; fastener kits and pulley/bolt hardware |
| 12 | 100 | inner tubes (out of scope), seat posts | Air-B, Areo, Freewheeling, Gomitalia, Hutchinson, Michelin, Pariba, Ritchey, Schwalbe, Specialized, Tioga, Vittoria, A.C. Adventure Components, Answer, Campagnolo, Control Tech; inner tubes (including Tioga); Areo Vitesse/Gara/Giro are pumps; neither is a seat post |
| 13 | 101 | seat posts | Control Tech, Corima, Energy, Freewheeling, FRM, Icon, Italmanubri, Look, Miche, Microtech, PMP, Race Face, Ritchey, Selcof, Shimano, Sintesi;  |
| 14 | 102 | seat posts, chains | Syncros, Sun Ringle, Thomson, Titec, Titec, Use, WR Compositi, Campagnolo, Connex, KMC, Miche;  |
| 15 | 103 | chains, cables and housings (out of scope) | Rohloff, Shimano, SRAM Sachs, Taya, Avid, Campagnolo, Casiraghi Industriale, Gore-Tex, Connex, KMC, RIE; all cables, housings and cable kits |
| 16 | 104 | cables and housings (out of scope), clincher rims | Casiraghi Industriale, Gore-Tex, Ambrosio, Campagnolo, Corima, FiR, Gipiemme, Mavic; cables/housings; included no extra rim candidate for the remaining-brand backlog |
| 17 | 106 | clincher rims, tubular rims | Mavic, Matrix, Rigida, Ritchey, Zipp, Ambrosio, Campagnolo, Corima, FiR; no remaining-brand candidate identified in the assigned scope |
| 18 | 107 | toe straps (out of scope), shift levers and integrated shift/brake levers | Allara, Avenir, Velomann, Campagnolo, Modolo, Shimano; all toe straps and accessories; Campagnolo/Modolo/Shimano shift-control listings were already represented |
| 19 | 108 | Tyres | Areo, Clément, Continental, Corratec, Gommitalia, Foxonall; Other exact existing Clément, Continental, Gommitalia and Foxonall tyre models retained as unchanged; no advertising text. |
| 20 | 110 | Tyres | Gommitalia, Hutchinson, IRC; Existing Hutchinson and IRC models/variants without a model gap omitted from item detail. |
| 21 | 112 | Tyres | IRC, Michelin, Panaracer; N/A; all listed tyre products inspected; exact represented rows skipped. |
| 22 | 113 | Tyres | Panaracer, Rie, Ritchey, Schwalbe, Specialized, Tioga, Tufo; Exact represented products skipped. |
| 23 | 114 | Tyres | Tufo, Veloflex, Vittoria; Exact represented products skipped. |
| 24 | 115 | Tyres, Brakes, Handlebars | Vittoria, Campagnolo, Shimano, Magura, Cinelli; Vittoria tyre section continues from scan 23; no unmatched rows identified in this continuation. |
| 25 | 116 | Handlebars | Cinelli, Deda Elementi, Italmanubri, Modolo; Exact represented bars skipped. |
| 26 | 117 | Handlebars, Front Derailleurs | Modolo, Ritchey, Roox, Syncros, Salsa, 3T, Campagnolo, Shimano; Exact represented bars and derailleur models skipped. |
| 27 | 118 | Front Derailleurs, Cranksets | Campagnolo, Shimano, Miche, Free Spirit, FRM, Middleburn, Ofmega, PMP, Race Face, Roox, Syncros, Tiso; Campagnolo/Shimano derailleur and crank models already represented skipped. |
| 28 | 119 | Cranksets | Miche, Middleburn, Ofmega, PMP, Race Face, Roox, Shimano, Syncros, Tiso; Existing PMP and Shimano models skipped; Ofmega Vantage 2/3 specifications folded into existing aggregate1704. |
| 29 | 120 | Brake Levers, Bottom Brackets | Campagnolo, Shimano, Bestialine, Energy, Free Spirit, FRM, Miche, Ofmega, PMP, Race Face, Ritchey, Rudelli; Brake lever models and standard Campagnolo/FRM/Miche/Ofmega/Ritchey BBs already represented skipped. |
| 30 | 121 | Bottom Brackets, Hubs | Shimano, STM, Syncros, TEC Components, Tune, WR Compositi, Campagnolo, Chris King; Shimano, STM and Campagnolo BB entries already represented skipped. |
| 31 | 122 | Hubs | Coda, Energy, Edco, FRM, Miche, Joy Tech, Mavic, Microtech, PMP, Ritchey, Rudelli, Shimano, DT Hügi; Coda, Edco, FRM, Miche, Mavic, PMP, Ritchey and Shimano hubs skipped where matching rows exist. |
| 32 | 123 | Hubs | Shimano, Sintesi, STM, Tune, White Industries, WR Compositi, Campagnolo, Chris King, Edco, Energy, FRM; Existing Shimano, Sintesi, STM, White Industries, Campagnolo, Chris King, Edco and FRM hub rows skipped. |
| 33 | 124 | Hubs | FRM, Joy Tech, Mavic, Miche, Microtech, PMP, Ritchey, Rudelli, Shimano; Existing FRM/Mavic/Miche/PMP/Ritchey/Rudelli/Shimano hubs skipped. |
| 34 | 125 | Hubs, Handlebar Tape | Shimano, Sintesi, STM, TEC Components, Tune, White Industries, WR Compositi, Ambrosio, Cinelli, Cicvolinea; Handlebar tape and other uncategorized accessory entries omitted; represented hub rows skipped. |
| 35 | 126 | Handlebar Tape, Spokes, Nipples, Pedals | Cinelli, Modolo, Selev, Alpina, DT, Silva, RIE, Special Light Ribband, Velomann, Wheelsmith, Keywin, Bebop, Campagnolo, Exus, Icon, Look; Handlebar tape and nipples are outside the component categories in scope. |
| 36 | 127 | Pedals | RIE, Ritchey, Miche, Shimano, Scott, Speedplay; Existing Miche/Scott/Speedplay and Shimano models skipped. |
| 37 | 128 | Pedals, Cassettes, Freewheels | Time, Campagnolo, Miche, Shimano, Tiso; Time/Look/Speedplay pedals and Campagnolo/Miche/Shimano sprocket models represented already skipped. |
| 38 | 130 | Bottle cages, Handlebars | Allara, Blackburn, Cannondale, Cinelli, Cobra, Elite, Italmanubri, Sipav, Specialized, Topeak, Velomann, Zéfal; Bottle cages excluded. Cinelli Spinaci, Spinaci Light, Eurospinaci/New Corna and Italmanubri Crono Vip 1, Hook and Hooks Compact extracted as complete handlebar extensions. |
| 39 | 131 | Handlebars, Wheel spokes | 3ttt, ACI Alpina, DT Swiss, Italmanubri, RIE, Ritchey, WheelSmith; Spokes are hardware, not complete wheels; skipped spoke listings. |
| 40 | 132 | Wheel(sets) | Ambrosio, BRAWO, Campagnolo, Shimano; BRAWO 6500/7700 added; existing Campagnolo/Shimano fitment treated as specifications, not separate components. |
| 41 | 133 | Wheel(sets) | Campagnolo, Cane Creek, Coda, Corima, Energy, Eolic, Gipiemme; Cane Creek Aerohead Road Ti/Road/Light, Coda Road, Energy Equipe Pro 120/150/170, Eolic CBT 15 and Corima/known entries reviewed. |
| 42 | 134 | Wheel(sets) | Eolic, FiR, FRM, Gipiemme, HED; FRM and FiR exact models already in 1999 snapshot (IDs included as unchanged); new Gipiemme Tecno 830/924/932 extracted; HED exact 1999 rows included as unchanged. |
| 43 | 135 | Wheel(sets) | HED, Mavic, Microtech; Mavic models reviewed against snapshot; Microtech MC 7 extracted. |
| 44 | 136 | Wheel(sets) | Microtech, Rolf, Rigida, Sipav; Microtech MC 1/MC 3C and MC 7, Sipav Balance/Sidney, Rolf Vector family, Rigida TVM/DPX and Sipav 1996 maker-family crosswalk reviewed. |
| 45 | 137 | Wheel(sets), Saddles | Spinergy, WR Compositi, Zipp, Areo; Spinergy family, WR Compositi WRR, and Areo Pro Acciaio/Comp Vinile/Too Much/Kevlar Red extracted; Zipp models reviewed against snapshot. |
| 46 | 138 | Saddles | Areo, Bassano Selle, Coda, Fi'zi:k, Gipiemme, Lookin, Ritchey; Fi'zi:k Vitesse/Pavé, Bassano Selle Slim/Stylus, Lookin 2004 G and Areo Kevlar Blue/Side extracted; Coda and Gipiemme exact 1999 saddle rows included as unchanged. |
| 47 | 139 | Saddles | Ritchey, Schneider, SDG, Selle Italia, Selle Royal; SDG 1996 models with 1999 attestations updated by exact IDs; Slim Jim and Bel Air Custom added; other SDG models reviewed. |
| 48 | 140 | Saddles | Selle San Marco, Serfas, Vetta; Selle San Marco and Vetta model names cross-checked; Serfas models extracted; exact Vetta Lasar Road and Jet Road rows recorded as unchanged. |
| 49 | 142 | Headsets | Aheadset, Campagnolo, Cane Creek, Chris King, FRM, Miche, Ritchey, PMP, Rudelli; FRM A-Set, Campagnolo/Miche/Ritchey/PMP/Rudelli rows are already represented or outside absent-brand focus; Aheadset AL and Microtech Aheadset extracted under their printed headings; Cane Creek C2/S5 extracted; generic callout held as possible duplicate. |
| 50 | 143 | Headsets, Frame tubing | Rudelli, Shimano, Sun Ringle, Syncros, Tange, TEC Components, Tiso, Columbus; Syncros Hardcore headset, Tiso Handy/Joe, TEC Components headset, Sun Ringle Slamma Jamma extracted; MIC headset conversion kit and frame tubing out of scope. |
| 51 | 144 | Frame tubing | Columbus, Dedacciai; Frame tubesets are out of scope. |
| 52 | 145 | Frame tubing | Dedacciai, Easton, Extralight, Oria; Frame tubesets are out of scope. |
| 53 | 146 | Tubular tires | Clément, Continental, Foxonall, Gommitalia, Hutchinson, Michelin, RIE, Schwalbe, Tufo; RIE Condor and Scat extracted as missing tubular tires; existing 1999 matches among listed tire makers treated as unchanged after snapshot cross-check. |
| 54 | unverified | Tubular tires | Tufo, Veloflex, Vittoria; No additional missing-brand/identified-model addition selected in this focused pass. |
| 55 | unverified | Tubular tires | Vittoria; No additional missing-brand/identified-model addition selected in this focused pass; page also contains an advertisement. |
| 56 | unverified | Tubular tires | Vittoria; No additional missing-brand/identified-model addition selected in this focused pass; advertisement excluded. |

</details>

## La Bicicletta Guida '96 - Componenti (March 1996, 58 scans, disraeligears.co.uk), data_source id 357

- Label `La Bicicletta Guida '96, Componenti (1996)`, country IT. Source:
  https://www.disraeligears.co.uk/site/la_bicicletta_guida_96_-_componenti.html (scans at
  `00_main_images/la_bicicletta_guida_96_-_componenti_scan_NN_main_image.jpg`, **two-digit 01-58** (the page HTML
  also yields bogus single-digit names that return a 9 KB error page), 1560 x 2164, legible). Printed pp. 104-161.
  Read 2026-11-04 by six subagents straight from the JPGs; transcription (1,399 rows, 1,350 after joining page
  breaks, ~985 in scope) and match files kept in the session scratchpad only.
- Same format as the '99 guide: brand + model heading, materiale / misure / peso / altre caratteristiche, price in
  lire; **no part codes** for Campagnolo or Shimano. Scan map: 1-2 groupsets; 2 axles; 2-5 stems; 6-7 QRs; 7-9
  bottles; 9-10 bolts; 10-11 rear derailleurs; 11-12 tubes; 12-13 seat posts; 14 chains, cables; 14-18 rims
  (clincher, then tubular); 18 straps; 18-19 shifters / Ergopower / STI; 19-23 clinchers; 23-24 brakes; 25-27 bars;
  27-28 front derailleurs; 28-30 cranks; 30 brake levers; 30-32 BBs; 32-34 front hubs; 34-37 rear hubs; 37-38 tape;
  39 nipples, pads, clipless pedals; 40 traditional pedals, cassettes / freewheels; 41-42 cages; 42-43 aerobars;
  43-44 toe clips; 44-45 spokes; 45-48 wheels; 48-51 saddles; 52-53 headsets; 53-55 tubing; 55-58 tubulars.
- **Pass 1, Campagnolo, Gipiemme and Shimano (2026-11-04; source_ref -> 357 on 60 updated + 33 new rows).**
  - year_to -> 1996, Campagnolo (39): RDs 4164 RD-01VL, 4165 RD-31VL3, 4094 RD-31AT, 4110 RD-31CH; BBs 18, 26, 7048;
    brakes 587 BR-02VL, 556 Athena Monoplaner, 7077 Chorus dual-pivot; cassette 1186 Record Exa-Drive 8sp; cranks
    1488 FC-01CH, 7036 FC-01RE, 7062 FC-01VL; FDs 7059 FD-11SRE, 7060 FD-11SCH; headsets 2952, 2956, 2965, 2970,
    2961; hubs 3237, 3250, 3279; pedals 3691, 3702, 7068, 7069; shifters 5998 SL-01RE, 6006 SL-01SVL; Ergopower
    6338 Athena; Olympic-city rims 4946 Barcelona 92, 4952 Mexico 68, 4953 Montreal 76, 4954 Moskva 80, 4967
    Seoul 88 (their 1990-92 years were velobase placeholders, see the rim dedupe entry). Gipiemme (4): 9863 Mod. 402
    post (1991), 2366 Bagarre BA 803 FD (1988), 1585 Azzurro SB 100 crank (1991; the guide prints "Bagarre
    Azzurro"), 6967 Tecno C946 (1995). Shimano (3): 7571 BR-A500, 7572 BL-A500 (both 1992), 3960 PD-6402 (1995).
  - year_from moved earlier (old value in brackets): 10089 Avanti Triple RD (1999), 10093 Racing Triple FD (1999),
    10099 Racing Triple crank (1999), 10100 Mirage Triple crank (1999), 10476 Tecno 416 wheels (1997), 10485 Pluma
    (1997), 10486 Plus (1997), 10487 Sintra (1997), all -> 1996.
  - **year_from moved later**: 2961 Campagnolo Mirage headset 1990 -> 1995 (velobase bucket; the 1995 range calls
    Mirage a new group). Revert value 1990.
  - Descriptions rewritten (bare velobase "<title>, Italy"): 559, 1478 (velobase 649 g kept), 2282, 2317, 2961, 3267,
    4095, 4967, 5743, 6339, 6348, 6967. No titles changed.
  - New rows (33, 1996-1996), ids 10488-10520. Campagnolo: Mirage Triple and Racing Triple 8-speed RDs; ED 30 / ED 50
    / ED 100 chains; rims Crystal, London 48, Helsinki 52, Amber, Melbourne 56, Topaz, Roma 60, Tokio 64, München 72,
    Atlanta 96, Los Angeles 84; Avanti Triple and Veloce / Mirage Triple FDs; Avanti brake levers and the unnamed
    non-Ergopower aero lever "for Mirage to Record"; Mirage Triple and Racing Triple cartridge BBs; Veloce Exa-Drive
    and Record Titanium Exa-Drive 8sp cassettes; Scirocco 20 (front + rear, 20 spokes) and Shamal 12 track wheels.
    Gipiemme: R 416 rim, GPM 400 brakes, GPM 731 front hub, 812 96 A clipless pedals, Tecno C 416, Tecno 948 and
    Tecno C 934 wheels. Racing Triple and Olympic-city rims have no group_id.
  - Matched with no change (years already cover 1996), e.g. Campagnolo 4138 Record Titanium 8-speed RD (233 g, the
    guide's "Record" RD), 6342 Record Titanium Ergopower ("Record Ergopower II"), 578 BR-14RE, 3265 Record 8sp hubs,
    5756 SP-10RE, 6954 Bora, 6961 / 6962 Shamal, 6963 Vento, 7095 Zonda, 6956 / 6957 Ghibli, and the 1995-range Mirage /
    Avanti rows; almost all Shimano (the 105SC 105x, RX100 A55x, RSX A410, 600 Ultegra 640x and Dura-Ace 740x rows
    already span 1996).
  - Judgement calls: the guide's Scirocco 20 is a 20-spoke wheel, not 6960 R0215 (the 1988-95 four-window disc), so
    6960 was left at 1995. Record crank mapped to 7036 FC-01RE although the 1995 range brought low-profile cranks
    (no separate 1995 Record crank row exists). Record FD mapped to 7059 FD-11SRE (steel cage, not 2311 Record
    Titanium). The ED chain codes are as printed; maker not stated. Los Angeles 84 prints "5000-T6" alloy.
  - Gipiemme "Exploit Bagarre" 7-speed indexed RD (245 g), decided 2026-11-04 (user, option 1): matched by spec to 9869
    815591 (Isca No. 7, 1991), retitled from "Gipiemme 815591, road 7-speed index" to "Gipiemme 815591, Exploit
    Bagarre (road 7-speed index)", search_text rewritten, year_to 1991 -> 1996. 4263 Exploit (1982-88) and 4258
    Bagarre BA 801 (1988-90) left as is.
  - Left for later: Shimano 300EX / 500EX headset (one shared 121 g entry),
    RSX cassette, Dura-Ace bar-end shifters (185 g), Ultegra 180 g "Ergo" entry; 10502 Atlanta 96 could extend to
    1999 from the '99 guide (353).
- **Pass 2, other brands in component_brand (2026-11-04; source_ref -> 357 on 204 updated + 294 new rows).** 619
  entries in 126 brand + category bundles (each with that brand's DB rows for the category) went to five Sonnet
  subagents for match / new / skip plus English text; a script applied the years and guards. Decisions: 254 match,
  320 new entries (294 rows after size variants and front / rear wheel pairs were folded), 45 skipped.
  - Year rule (uniform): matched rows ending before 1996 -> year_to 1996; starting after 1996 -> year_from 1996;
    undated -> 1996-1996. A gap of more than 8 years was held for review; six were then extended anyway (velobase
    single-year buckets or long-running models): 3066 OMAS Grand Prix headset (1980), 3509 Sachs-Maillard New
    Success hubs (1980), 6892 Vittoria Normalcross (1974-85), 9171 Miche 1301 Competition (1985), 9433 Vittoria
    Pista CS (1983-84), 9434 Pista Seta CS (1984).
  - year_to -> 1996, revert values in brackets: 404 (1990), 859 (1988), 1699 (1988), 1721 (1992), 1730 (1990), 2006
    (1990), 2431 (1990), 2743 (1991), 2762 (1991), 2812 (1988), 3064 (1988), 3066 (1980), 3068 (1988), 3425 (1990),
    3427 (1988), 3509 (1980), 4899 (1988), 4909 (1988), 4910 (1988), 5058 (1990), 5129 (1988), 5134 (1988), 5140
    (1988), 5302 (1991), 5473 (1990), 5490 (1990), 5508 (1993), 5515 (1993), 5516 (1992), 5542 (1990), 5684 (1990),
    6352 (1995), 6397 (1990), 6402 (1990), 6424 (1991), 6564 (1990), 6565 (1990), 6748 (1988), 6777 (1988), 6835
    (1990), 6873 (1990), 6882 (1990), 6884 (1990), 6892 (1985), 6976 (1990), 7096 (1988), 7097 (1988), 8323 (1991),
    8324 (1991), 8327 (1991), 8389 (1992), 8397 (1992), 8401 (1992), 8417 (1992), 9168 (1988), 9171 (1985), 9176
    (1988), 9178 (1988), 9228 (1988), 9428 (1988), 9433 (1984), 9434 (1984), 9480 (1988), 9481 (1988), 9482 (1988),
    9490 (1988), 9491 (1988), 9492 (1988). Plus 10 undated rows -> 1996-1996 (e.g. 3147 Tange Passage).
  - year_from -> 1996 on 106 rows, almost all 1999-1999 rows from the '99 guide (353), which this guide shows were
    already sold in 1996. The others (old value): 2759 3ttt Forma SL-Ergopower due (2002; the guide's "Forma SL
    Ergopower 2"), 3786 LOOK PP236, 5059 Mavic CXP 12, 5060 CXP 14, 5062 CXP 30 tubular, 9982 T238 (all 1997), 5102
    Open SUP CD (1997), 6576 LOOK Ergostem (1997).
  - Descriptions: 74 matched rows rewritten (bare velobase "<title>, Italy" text, measured weights kept), 20 of them
    with no year change. No titles changed.
  - New rows (294, 1996-1996, group NULL, ids 10521-10814): tyres 61, hubs 41 (front and rear separate), saddles 36,
    rims 30, wheels 22, stems 20, BBs 16, cranks 15, bars 14, pedals 10, posts 8, headsets 6, others 15. Most from
    Selle Italia / San Marco / Royal / Bassano, OMAS, Vittoria, Ofmega, Miche, Zipp, Ambrosio, Schwalbe, FiR, Sachs,
    Michelin, Mavic, Cinelli. Titles "<brand> <model as printed>"; Zipp rims carry "rim" and wheels "wheels" to
    keep them apart; Schwalbe Blizzard Pro wire-bead versions are separate from the 1999 folding rows 10225 / 10227.
  - Hand corrections to the agents' calls: 201 Zipp 530 rim skipped (printed "53 gr", agent guessed ~530 g); 793
    "Club Team Roost" saddle skipped (brand misparse; Club Roost is not in component_brand); 298 / 299 Blizzard Pro
    steel-bead made new instead of matching the folding rows.
  - Close-name matches worth a second look: Vittoria "T.T." read as Twin Tread (10441, 10448), Pista 6 Giorni CS ->
    9252 Sei Giorni, Michelin Hi Lite Competition -> 6835 Hi-Lite Comp, Ambrosio Road Racing -> 9176 Olimpic Road
    Racing, Corima Eclipse -> 10160 Ellipse, Brooks Professional Team -> 5303, Cinelli Tempo Crono -> 2818 Tempo
    bullhorns (255 vs 270 g), Miche Primato post -> 9480 Primato Aero, Ritchey Logic Road crank -> 1721 Logic
    (1991-92), FRM CU2 Corsa Campagnolo / Shimano both -> 10279, Sachs New Success hubs -> 3509 Sachs-Maillard.
  - Possible duplicates created (names differ from an existing row with similar specs): Panaracer Category One vs
    10222 Category Pro; Vittoria Pro Lite 19 vs 6898 Pro L 19"; Vittoria Pista CL vs 10444 Atlanta Gold CL; Corima
    Disc T vs 10360 Corima Disc; FRM Alu-Ergal / Carbon-Ergal front hubs vs 10303 Pro / 10305 Feather; FRM Ergal
    post vs 10161 Arretrato; Mavic "CXP Titane SUP UB Control" (probably CXP 30 Titane); OMAS 120 S / 120 D Big
    Sliding (identical specs); Ofmega Mistral SQ vs 93 Mistral.
  - **Both lists above reviewed 2026-11-14 against the scans** (user approved).
    Printed page = scan + 103. **Split (wrong matches):** "RITCHEY Logic Road" crank (scan 29: 39-53, 590 g) -> new
    11172; 1721 restored to the 1991-92 MTB Logic triple (year_to 1992, source 150, ritchey.md text). "MICHE Primato"
    round post (scan 13: 325 g, length misprinted "23 mm"; Guida '99 p.101: 235 mm, 315 g) -> new 11173 (1996-99,
    group 128); 9480 Primato Aero (Guida '88 aero post) restored to -1988, source 262. "AMBROSIO Road Racing"
    tubular rim (scan 17: 20 mm, 390 g, 20-28 in; "Olimpic" not printed) -> new 11174; 9176 restored to -1988,
    source 262 (inferred from the '88 match). **Merged:** 10563 Pro Lite 19 (scan 56, printed in full) into bare
    velobase 6898 "Pro L 19\"" (retitled Vittoria Pro Lite 19, 1996, source 357; 10563 deleted, no links).
    **Confirmed matches:** Vittoria "Corsa CX T.T." / "Open Corsa CX T.T." (scans 57-58; only "T.T." printed, but
    "doppia mescola a durezza differenziata" = Twin Tread) -> 10441 / 10448; "Pista 6 Giorni CS" (22x28, 200-220 g)
    -> 9252; "Hi Lite Competition" -> 6835 (bike specs say Comp / Competition); "CORIMA Eclipse" -> 10160 (the '99
    guide prints "Ellipse", identical specs); "BROOKS Professional Team" (cuoio, price only) -> 5303; Tempo Crono
    255 g -> 2818; both FRM CU2 Corsa entries (Campagnolo / Shimano drilling only) -> 10279; "SACHS New Success"
    hubs (Maillard not named) -> 3509. **That hub confirmation is superseded by the
    [2026-11-16 configuration review](huret.md#new-success-hub-configurations--2026-11-16-review):**
    3509's original VeloBase specimen is 126 mm, whereas scan 36 / p.139 prints
    a 130 mm eight-speed rear. The user-approved correction is applied: 3509
    restored to the 126 mm VeloBase specimen (source 1, exact dates NULL);
    source-357 front **11426** and 130 mm/eight-speed rear **11427** added,
    each attested in 1996. Guida '99 has no New Success entry at the corresponding
    front/rear alphabetical positions, so no 1999 extension. The two early
    Peugeot links and all generated mappings remain unchanged; SQL rerun zero.
    **Kept apart, possible 1996 -> 1999 renames** (different printed names,
    no links): Category One 10539 / Category Pro 10222; Disc T 10618 / Disc 10360;
    FRM Alu-Ergal 10762 / 10764 / Pro 10303, Carbon-Ergal 10763 / 10765 / Feather
    10305. The later FRM review below supersedes the earlier claim of identical
    specs for the hub comparisons. **Distinct:** FRM Ergal post 10635 (two bolts) /
    Arretrato 10161 (setback); 10597 CXP Titane (clincher, no "30" printed) / 10607 CXP 30 Titane (tubular);
    OMAS 120 S / 120 D (word-for-word identical print, separate letters); 10723 Mistral SQ (2250 SQ, source 384)
    / 93. Pista CL 10570 has no Atlanta entry in '96, so it is kept apart from 10444 Atlanta Gold CL. New candidates:
    6896 Pista CL Servizio Course vs 10570; 1570 FRM CU2 vs 10279 / 10280; not loaded: Mavic CXP 30 Argent
    (clincher + tubular). The FRM Campagnolo-compatible rear and OMAS 120 Big
    Sliding listings are represented in 10766 and 3068 respectively (see the
    2026-11-18 review below).
  - Skipped as ambiguous (45 in all), e.g. Selle Italia Flite (5488 / 5489), Selcof Team Titanio (5872 / 5874),
    Cinelli 64 Giro d'Italia (2800-2802), 3ttt Competizione / Grand Prix, Hutchinson Krono Competition (10217 /
    10218), Vittoria Zefir Kevlar, Crono Seta CS 150, Sachs New Success brake (942 / 943), Clement Criterium aperto
    / Solo (merged multi-size entries).
- Merged 2026-11-04 (user request): 10569 "Vittoria Corsa CX" (1996-1996, source_id 8a5cdbd9-d895-11f1-a2df-02fea3763e8d, no bike links) deleted into 6880 Vittoria Corsa CX Servizio Corse (1980-99, the 'vittoria corsa cx' override target); 6880's bare velobase text rewritten with the guide's sizes (19x28, 21x28, 19x26 in, 7-9 bar, 240-260 g; velobase 252 g avg kept), source_ref -> 357.
- **Historical pass 3 estimate:** ~124 entries were initially attributed to brands absent from component_brand: MF Components 21, Tioga 8, MBS 7,
  Syncros, WR Compositi, Bestialine, Hope, Poggipolini, Sipav, SDG (4 each), F.R.O. Castagnino 6, Titec, Taya,
  Yaban, Race Face, L.L.S., Tec Components (3 each) and ~25 more with 1-2. Out-of-scope sections (bottles, cages,
  QRs, bolts, tubes, tape, toe clips, straps, spokes, nipples, aerobars, tubing, groupset summaries) not ingested.

### Guida '96 pass 3 triage — 2026-11-18

The earlier missing-brand claim is stale for Tioga: brand 699 now exists, but
its inventory then had no tyre rows. [Scan 22 / p.125](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_96_-_componenti_scan_22_main_image.jpg)
was visually checked and lists Mongrel, Bloodhound, City Ranger, City Slicker,
Proline S, Proline F, Proline SK and Proline SR. Subsequent visual review,
reconciliation and the approved load are recorded below. The earlier brand
estimates and OCR candidates were not themselves validated transcriptions.

### Guida '96 pass 3 — applied and validated 2026-11-18

The indexed missing-brand candidates were visually reviewed against the scans
and reconciled with live brands and components. The review also found two
entries omitted by the OCR index on scan 13: the second, carbon-fibre Titec
seatpost and WR 95. WR 95 has a saddle clamp aligned with the shaft; the
Italian word *stelo* denotes the shaft, not steel. Its weight is not stated.
An unnamed MF Components roller-bearing headset on scan 52 lacks a model and
is not represented by an invented named row. The MBS aero extension, MF spoke,
SIPAV bar tape and other unsupported accessories are outside component scope.
The Hope mention on scan 46 is part of existing FiR Zeus wheelset 10620.

After approval, inserted 89 components, 16 missing brands and 38
brand/category associations. Source 357 is already
registered; 1996–1996 expresses this catalogue's attestation, not proven
production limits. The 89 consist of 7 stems, 8 seatposts, 6 chains, 3 rims,
5 handlebars, 6 cranksets, 10 bottom brackets, 23 hubs, 5 wheelsets, 6 saddles,
2 headsets and 8 Tioga tyres. Descriptive titles distinguish the unnamed
Titec/F.R.O. variants without asserting that those words are printed model names.
The same-name Poggipolini High Profile front hubs are kept separate because the
scan explicitly specifies carbon/ergal and all-ergal constructions. Do not
infer a difference between Proline S and F beyond their printed names.

MySQL EXPLAIN passed all 151 insert statements. Simulation across 98 loaded
catalogues and 21,382 specs initially exposed 15 false matches from a generic
`Aluminium` seatpost to the proposed Titec row. The generator now explicitly
keeps that material-only value unlinked; the unchanged live baseline and a
repeat simulation showed no mapping changes. Exact readback matched all 89
approved rows and source 357; SQL rerun affected zero rows. The actual comparison
across the same 98 catalogues / 21,382 specs exactly matched the baseline,
including 15 pre-existing Huret Rival 4401 lost matches. No bike links or merges
were applied and there are no dangling bike references. Duplicate review kept
Poggipolini High Profile carbon/ergal 11652 and ergal 11655 separate, and MF
Cronoradiale 030 Al 11669 and Carbon 030 11670 separate; both pairs are recorded
in `REVIEWED_NOT_DUPLICATES`. Other reported pairs are front/rear configurations.
The full test suite passed. Task-generated review SQL and scratch outputs were
removed after validation; the original user-provided OCR index was preserved.

**Inserted inventory (source 357):**

- Bestialine: 11636 Bestialine ST 7561; 11646 Bestialine SE 7403-01 (front); 11658 Bestialine SE 7275 02 (rear); 11659 Bestialine Silent (rear).
- F.R.O. Castagnino: 11601 F.R.O. Castagnino Dragon Stem; 11608 F.R.O. Castagnino Steel; 11630 F.R.O. Castagnino Tipsy; 11631 F.R.O. Castagnino Titan; 11637 F.R.O. Castagnino Quasar B.B.; 11680 F.R.O. Castagnino Viper; 11681 F.R.O. Castagnino Rans.
- Hope Technology: 11638 Hope Technology Titanium B.B.; 11647 Hope Technology Lightweight (front); 11648 Hope Technology Ultralight (front); 11660 Hope Technology Ti Glide (rear).
- L.L.S.: 11639 L.L.S. Movimento Centrale; 11661 L.L.S. T96 Ergal (rear); 11662 L.L.S. T96 Titanio (rear).
- MBS: 11602 MBS Shark; 11603 MBS Shark Apribile; 11625 MBS Pista Crono; 11626 MBS Corsa 1 Canale; 11627 MBS Corsa 2 Canali; 11628 MBS Corsa Ergo 1 Canale; 11629 MBS Corsa Ergo 2 Canali.
- MF Components: 11604 MF Components Al Custom; 11605 MF Components G-R; 11609 MF Components AL; 11622 MF Components Maxi 30; 11623 MF Components Fly; 11624 MF Components Maxi Carbon; 11632 MF Components 01; 11640 MF Components Custom; 11641 MF Components 01; 11642 MF Components 02; 11643 MF Components 03; 11649 MF Components New Big (front); 11650 MF Components Champion (front); 11651 MF Components Cronoradiale (front); 11663 MF Components Champion (rear); 11664 MF Components New Big (rear); 11665 MF Components Cronoradiale (rear); 11666 MF Components Attack Silent (rear); 11669 MF Components Cronoradiale 030 Al; 11670 MF Components Cronoradiale Carbon 030.
- Poggipolini: 11652 Poggipolini High Profile (carbon/ergal, front); 11653 Poggipolini Low Profile (front); 11654 Poggipolini Titanio (front); 11655 Poggipolini High Profile (ergal, front).
- Race Face: 11633 Race Face Turbine IB STD; 11634 Race Face Turbine Lop Compact; 11635 Race Face Turbine LP STD.
- SDG: 11674 SDG Comp Ventura; 11675 SDG S7000 Ti; 11676 SDG S2000 Ti; 11677 SDG Comp Ti.
- Sipav Bike Line: 11671 Sipav Bike Line Mexico/Monolithic; 11672 Sipav Bike Line Moskva/Excel Box; 11673 Sipav Bike Line Atlanta/Primato; 11678 Sipav Bike Line Top Line Flash.
- Syncros: 11606 Syncros Altura; 11610 Syncros Hardcore; 11611 Syncros Pro Series; 11644 Syncros Proseries Altura.
- TEC Components: 11645 TEC Components titanium bottom bracket; 11656 TEC Components Ciccio Bomba (front); 11667 TEC Components Ciccio Bomba (rear).
- Taya: 11616 Taya Bridge; 11617 Taya Relief; 11618 Taya Pro Extreme.
- Tioga: 11682 Tioga Mongrel; 11683 Tioga Bloodhound; 11684 Tioga City Ranger; 11685 Tioga City Slicker; 11686 Tioga Proline S; 11687 Tioga Proline F; 11688 Tioga Proline SK; 11689 Tioga Proline SR.
- Titec: 11612 Titec Aluminium; 11613 Titec Carbon C191; 11679 Titec KTI.
- WR Compositi: 11607 WR Compositi Corsa; 11614 WR Compositi WR 94; 11615 WR Compositi WR 95; 11657 WR Compositi Standard (front); 11668 WR Compositi Standard (rear).
- Yaban: 11619 Yaban VG 80; 11620 Yaban VG 7401; 11621 Yaban VG 90 S2.

### Guida '96 follow-up: OMAS headset identity — 2026-11-18

Scan 52 / printed p.155 lists 120 Big Sliding as aluminium, ground steel races,
25.4 mm x 24 tpi, 98 g and silver or black. Live 3068 already carries that
source-357 listing and its 98 g alongside the earlier specimen's independent
89 g measurement. The earlier statement that the entry was not loaded is
superseded. Its generic title and earlier specimen do not independently prove
that the specimen is marked 120; no retitle or duplicate insertion follows.
The same page separately names 120 S and 120 D, rows 10681 / 10682, with
identical printed specifications and prices. Keep them apart on the separate
designations; their exact pair is registered in `REVIEWED_NOT_DUPLICATES`.
Live checks found no bike links to 3066, 3068 or 10680–10682. The distinct
unresolved 1978 101/S hub axle question remains in OMAS notes.

### Guida '96 follow-up: FRM identities — 2026-11-18

[Scan 28 / p.131](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_96_-_componenti_scan_28_main_image.jpg)
lists CU2 Corsa Campagnolo and Shimano ring compatibility separately, both
400 g without chainrings, 7075 T6 and 170/172.5/175/177.5 mm. Row 10279
represents the without-rings family; 10280 is the 1999 with-rings listing.
The original [1570 specimen](https://www.velobase.com/Pages/ViewComponent.aspx?ID=B291A8BF-03C9-4964-8F10-5ADBE8F43CE8)
has two rings and a five-arm spider, but the image does not establish the
ring compatibility, date or a crosswalk to either record. Keep it separate;
do not infer identity from the shared CU2 name.

[Scan 35 / p.138](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_96_-_componenti_scan_35_main_image.jpg)
lists the 260 g rear carbon/Ergal hub with a Marchisio Campagnolo-compatible
freehub and 16/32/36-hole options. Live 10766 already represents this entry,
source 357, 1996; the former claim it was not loaded is superseded. Its
description's 16–36 phrasing does not specify the printed discrete options.
Do not merge it with 10304 on 260 g and carbon construction alone: 10304
does not identify a Campagnolo freehub. No DB change was made in this review.
The earlier "same specs" claim for Carbon-Ergal / Feather is also superseded:
1996 front 10763 is 88 g, while 1999 Feather front 10305 is 70 g and has fewer
listed drilling options; rear 10765 has no rear counterpart in 10305. Alu-Ergal
10762/10764 and Pro 10303 have close front/rear weights but no manufacturer
crosswalk, and the latter combines positions. Keep these rows separate pending
model-specific evidence.

### FRM maker-crosswalk search — 2026-11-20, read-only

Searched public indexes for FRM CU2 1995/1996 maker catalogues, 1997/1998
catalogues, Carbon-Ergal/Alu-Ergal wording and Feather/Pro hubs. No period
manufacturer crosswalk was recovered for specimen 1570 versus 10279/10280,
or hubs 10762–10766 versus 10303–10305. This is an unsuccessful bounded
source search, not evidence that a crosswalk never existed.

The [indexed FRM 2006 maker catalogue](https://www.yumpu.com/en/document/view/59772786/frm-catalog-2006)
describes later CU2-R110 ISIS Carbon/Integral and FL-M Team/Pro products;
it does not establish the 1990s identities under review. Later 2009 and
2013/2016 catalogue results likewise provide no recovered crosswalk. The
[original CU2 listing](https://www.velobase.com/Pages/ViewComponent.aspx?ID=B291A8BF-03C9-4964-8F10-5ADBE8F43CE8)
still supplies no period date or compatibility identification.

The preceding Guida review remains the controlling evidence: the 1996
Carbon-Ergal front is 88 g versus 70 g for the 1999 Feather, and shared CU2
wording or close Alu-Ergal/Pro weights do not prove identical models. No DB,
matcher, source-registry or bike-link changes were prepared or applied.
Reopen for a newly available 1990s maker/importer sheet explicitly connecting
the names, or a coded specimen with matching construction, dimensions and
ring compatibility. No downloaded scans or pending SQL were created at that
stage. The subsequently recovered 1998 maker catalogue is assessed below.

### FRM 1998 maker catalogue — applied and validated

Read all five scanned spreads of the [Italian FRM catalogue](https://velovelopool.wordpress.com/wp-content/uploads/2023/12/frm-1998.pdf).
The page marks show '98. PDF spreads 1–2 introduce the Hard Tail and Be Active
MTB builds. Spread 3 (printed pp. 8–9) gives their and the Race Flash/Aero
Flash equipment tables. Spread 4 (printed pp. 12–13) gives the CU2 crank
specifications, and spread 5 covers hubs. This review concerns the crank
and hub identities in the worklist.

- **CU2 Strada** (spread 4) is a three-piece assembly with a removable
  spider for Shimano or Campagnolo rings, 170/172.5/175/177.5 mm arms,
  symmetric 107 mm axle, 43.5 mm chainline, 145 mm Q-factor and 400 g
  without rings. The separate **CU2 MTB** lists Compact and Standard rings,
  symmetric 120 mm axle, 47.5 mm chainline, 160 mm Q-factor and 390 g
  without rings. Keep the 400 g without-rings row 10279 and the 1999 540 g
  with-rings listing 10280 as separate catalogue configurations.
  The three [specimen 1570 images](https://velobase.com/Pages/ViewComponent.aspx?ID=B291A8BF-03C9-4964-8F10-5ADBE8F43CE8)
  show a CU2-stamped road double with square taper, removable five-arm
  spider and 170 mm arms. They establish the road family. The drilling
  option, sale configuration and specimen date remain unverified.
- **Feather** (spread 5) is a 70 g 24/28/32H road front hub paired with
  the 200 g SL rear hub. **Carbon-Ergal** is a separate 90 g front and
  260 g rear for road or MTB, with 32/36H and a Shimano 8/9-speed rear
  cassette body. There is also a 267 g Carbon-Ti rear. The Shimano
  Carbon-Ergal and the 1996 260 g Campagnolo/Marchisio rear 10766 have
  separately identified cassette bodies.
- **Alu-Ergal** (spreads 3 and 5) has adjustable sealed bearings, 32/36H
  and 95/266 g front/rear weights. These figures also appear on the 1999
  Pro listing, while the maker uses the Alu-Ergal name here. Preserve both
  catalogue identities. The 1999 Team name also needs a manufacturer
  crosswalk for assignment to a 1998 configuration.
- The 1996 Guida [p. 135](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_96_-_componenti_scan_32_main_image.jpg)
  and [p. 138](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_96_-_componenti_scan_35_main_image.jpg)
  list Carbon-Ergal front 88 g, 16/18/24/28/32/36H, and rear 256 g,
  16/24/32/36H. The revised descriptions preserve these dated figures
  with the 1998 specifications. Alu-Ergal is 96/266 g in 1996.

| Row | Previous range/source | Applied range and change |
|---|---|---|
| 1570 CU2 specimen | Undated, 1 | Undated, describe the visible road configuration |
| 10279 CU2 without rings | 1996–1999, 357 | 1996–1999, add road spider and drivetrain dimensions |
| 10305 Feather front | 1999–1999, 353 | 1998–1999, add maker construction and SL pairing |
| 10762 Alu-Ergal front | 1996–1996, 357 | 1996–1998, add 1998 weight and bearing adjustment |
| 10763 Carbon-Ergal front | 1996–1996, 357 | 1996–1998, give dated weights and drillings |
| 10764 Alu-Ergal rear | 1996–1996, 357 | 1996–1998, add 8/9-speed cassette compatibility |
| 10765 Carbon-Ergal rear | 1996–1996, 357 | 1996–1998, give dated weights and drillings |

Applied and validated on 2026-11-21. The load registered source **511**
and updated all seven rows. Live readback matched the descriptions, date
bounds, source, categories and UUIDs. The Feather description specifies
7075 flanges bonded to the carbon centre shell and a separate 7075 axle.
All seven rows have zero bike links. The audit reported zero structural
errors and the same review findings as before. The 24,829-spec comparison
matched the baseline, including the same 15 existing lost proposals. The
FRM near-pair scan found zero candidates, and the SQL replay affected zero
rows.

To reverse, verify dependencies, restore the previous ranges and source IDs
in the table above and the descriptions below, then check whether source
511 is still referenced.

| Row | Previous description |
|---|---|
| 1570 | `FRM CU2, Italy` |
| 10279 | `Alloy 7075; crank lengths 170-172.5-175-177.5 mm; weight without chainrings 400 g; cranks CNC-machined from solid; 400g` |
| 10305 | `7075 alloy flanges and axle, carbon-fibre composite centre body; width 100; weight without QR; holes 24-28-32; sealed bearings; 70g` |
| 10762 | `7075 alloy flanges and axle, alloy centre body, 100 mm, 32-36 holes, sealed bearings, dust cap, anodised; 96 g.` |
| 10763 | `7075 alloy flanges and axle, carbon-fibre composite centre body, 100 mm, 16-36 holes, sealed bearings, anodised; 88 g.` |
| 10764 | `7075 alloy flanges and axle, alloy centre body, 130 mm, 32-36 holes, Shimano cassette freehub, sealed bearings; 266 g.` |
| 10765 | `7075 alloy flanges and axle, carbon-fibre composite centre body, 130 mm, 16-36 holes, Shimano cassette freehub, sealed bearings; 256 g.` |

### Guida '96 follow-up: Mavic rim identities — 2026-11-18

Live readback confirms that the previously missing CXP 30 Argent tubular is
10199, and the separate clincher 10597 / tubular 10607 titanium-colour rows
remain present. T217 family 9981 and T261 family 9983 have since been
consolidated after preserving their respective finish/profile evidence; see
the Mavic notes for applied changes. Keep CXP 30 family 5062, silver 10199
and titanium 10607 separate while resolving the dealer's 520 g tubular claim
against the maker's 465 g and the independent 500 g specimen. The Reflex
family 9975 must remain until CD and Ceramic tubular options are represented;
that work has its own current action. No Mavic DB change followed this review.

## La Bicicletta, July 1984 - Guida all'acquisto: le bici da turismo (8 scans, disraeligears.co.uk), read 2026-10-24, not ingested

- Source: https://www.disraeligears.co.uk/site/la_bicicletta_1984_july_-_guida_allacquisto_le_bici_da_turismo.html
  (scans at `00_main_images/la_bicicletta_1984_july_-_guida_allacquisto_le_bici_da_turismo_scan_NN_main_image.jpg`,
  01-08, 1560 px, legible). No `data_source` row was created.
- **Not a component catalogue.** A buyer's guide to complete city, touring, folding and children's
  bikes: model / frame / wheels / colours / fittings / price in lire. Part 1 of 2 and covers makers
  A to D: Atala, Aurelia Dino, Battaglin, Benotto, Bianchi, Biemmezeta, Bibici, Bicipeg, Bottecchia,
  Carraro, Ceriz, Chiorda, Dei. The sequel (E to Z) is in issue no. 8, August 1984; not found yet.
- The fittings column is house parts ("freni a filo", "cambio 5v", "manubrio piega inglese") with
  makers named only as a brand and no part number: Suntour 10v, Modolo brakes, Ofmega headset and
  groups, Huret, Simplex 3v, Sturmey Archer 3v, Mauri, Universal, Ambrosio, Gian Robert, GPM. The
  only model-level names: Campagnolo 980 (1984 Bianchi Stelvio, Bottecchia Dolomiti), Campagnolo GS
  (Biemmezeta Portofino), Campagnolo NV derailleur and NT hubs (Dei Gran Turismo, Turismo 5V).
- **Effect on the DB: none.** Campagnolo 980 (rear 4087 1980-85, front 2279 1980-86), Nuovo
  Valentino (4079, 2301) and Nuovo Gran Sport 3500 (4085) already cover the years; the NT hub is not
  tied to a row. Brand-only text lands in the `brand_only` class of `/linkCoverage`.
- Left as a bike source: ~90 city / folding / kids' models, low value for link coverage (brand-only
  or house parts). If ever loaded, use `ingest-bike-specs`. Part 2 (August 1984) is the more useful
  half: Colnago, Legnano, Peugeot, Raleigh and similar makers fall there.

## JBM "Japan's Top Bicycle Parts Makers" — July 1974 (disraeligears.co.uk, 24 scans, data_source 271)

- Source: https://www.disraeligears.co.uk/site/jbm_-_japans_top_bicycle_parts_makers.html
  (front cover, pages 1-22, rear cover; scans at 00_main_images/..._page_N_main_image.jpg).
  Rear cover code "JBM 0774". Marketing group catalogue for six makers: Takagi
  (pp. 5-6), Tange (7-8), Araya (9-10), Sakae/SR (11-14), Kyokuto/KKT (15-17),
  Shimano (18-22). Page 3 calls the spotlighted lines "models for 1974".
- Shimano was already covered by the '72/'73/'74 catalogues (sources 60/61/65/178), so
  JBM was confirmation plus a few gaps. Out of scope (no category): Tange frame sets,
  fork/stay ends, forks, chain guards, toe clips/straps/strap ends, quick seat pins,
  spokes, spoke protectors, tools, twist-grip/trigger levers (already rows 7393/7394).
- Rows added (56): Shimano L-160/L-170 Finger Tip EM, L-395 Silver Stem; Sakae Custom-5,
  Apex-3B, Apex-S, Silver Cotterless, Racer bar, Custom-P1, 11 stems (RY-110, RY-90/70,
  SR-100AH, SR-80AH/E, SR-60AH/E, SR-50E/40E, SW-60LB, SW-60, SW-35, Dia Star-R/A,
  SB-50DM); Araya Model 1/5/5W/7A/10/17; KKT RT-SF AL, RT-SF, RT-SR, RT-GL, RT-A, RT-B,
  F-1, RM-3, No. 50 Racer, Pro Ace (Road)-P.A; Tange Unit Hanger, R-401, TS-401, JL-401;
  Takagi 12 cranksets + 5 chainring sets (first Takagi rows beyond "Tourney XT").
  Year range 1974-1974 on all new rows (only attestation, not an end date). Exercisers
  (KKT Exerciser-F, DX-2) deliberately not ingested.
- Rows adjusted (25), old values for revert:
  - year_from moved earlier (JBM is older than the setting source): 1749 Royal-5 1980->1974
    (spec differs: 1974 forged alloy milled 5-pin, c.1982 14S super duralumin), 8821 GS-3
    1980->1974, 2913 WR 1976->1974, 7887 WS 1976->1974, 7889 CT-L 1980->1974,
    7891 RN-L 1980->1974, 7896 NR-S/L 1980->1974, 8928 Araya 7B 1978->1974,
    9086 KKT S.P. Sprint 1976->1974, 3770 KKT Pro Ace Pista 1980->1974 (folded in the
    Pro Ace (Track) 68-2 pedal rather than inserting a new row).
  - NULL years set 1974/1974: 3773 RT-E, 3774 SPA, 3144 Tange MA-60, 3141 Tange Falcon.
  - year_to 1973->1974: 7384 Shimano L905-L908 Round Stem (JBM lists W-Round Stem L-908/906,
    though the Jun 1974 catalogue (65) does not).
  - Retitles (old title in case a later source uses it; search_text rewritten):
    7374 "Shimano D220, Lark S.T.O." -> "Shimano D220, Lark SPO";
    8766 "Shimano L-293 / L-294 / L-296, Unishift" -> adds L-298;
    3774 "KKT/Kyokuto SPA" -> "KKT/Kyokuto S.P. (Sprint) SPA, light alloy";
    3775 "KKT/Kyokuto Top-Run" -> "KKT/Kyokuto T.P. (Top Run)";
    3769 "KKT/Kyokuto Kyokuto Pro Ace, (Road)" -> "KKT/Kyokuto Pro Ace (Road)";
    3770 "KKT/Kyokuto Kyokuto Pro Ace Pista NJS" -> "KKT/Kyokuto Pro Ace (Track), Pista NJS".
  - Descriptions rewritten/enriched: 7376, 7412, 8766, 1734, 1749, 8821, 5853, 4917, 4918,
    8928, 3769 (JBM says forged light alloy body; the 1976 source 245 says all-steel; both
    kept, labelled by year), 3770, 3773, 3774, 3775, 9086.
- Left as is / unresolved: Pro Ace (PA) row 3771 (1980 superlight) is a different part from
  the 1974 "(Road)-P.A with reflector" (new row). Catalogue spellings "Randnner" (World
  Randnner, Randnner-L) read as typos for Randonneur and matched to WR / RN-L. JUN-50 (6660)
  confirmed, no change. JBM weights for KKT pedals are probably per pair but are not stated.
  No deletes or merges.

## Ten Speed Drive Imports (US importer) catalogue, 1983 — printed late 1982 (bulgier.net, 17 JPGs), data_source 279

- Source: http://bulgier.net/pics/bike/Catalogs/tsd82-83/ (https fails on the EG
  proxy with a certificate error; plain http works). Files 1.jpg-9woodrup.jpg =
  printed pp 1-17 (9acinelli...9hconcorsaddles are pp 10-17, 9woodrup is p 9).
  The TOC runs to p 28: Sergal, Brancale, Detto Pietro, Pavarin, Campagnolo (p 24),
  Columbus, Regina (p 26), Cobra, Mariplast and terms are not scanned. Dated by
  "Guerciotti 1983 Framesets", the Ambrosio Hypothesis "new ... mid 1983" and a
  July 1982 Bicycling quote. Importer's selection, not full maker ranges, so no
  year_to was capped from absence. country = US.
- Component pages: Cinelli bars / stems / saddles (p 11), Vittoria tubulars (12),
  Clement tubulars (13), Silca pumps (14, out of scope), Ambrosio rims (15), Mavic
  rims and Alpina spokes (16), San Marco Concor saddles (17), Campagnolo
  pantographed parts (8). Bike pages (Guerciotti, Ciocc, Cinelli, Woodrup) were not
  loaded; they are bike-catalogue material.
- year_from -> 1983 (old values for reverting): 6900 Vittoria Special Pro 1984,
  9428 Corsa CG 1984, 9244 Pavè 1985, 9433 Pista CS 1984, 6777 Clement Super Condor
  1985, 4899 Ambrosio Metamorphosis 1984, 9481 Aerodynamic 1988, 4898 Hypothesis
  1985, 9368 Cinelli Mod. L. Strada (= "Mod L Ultralight") 1984, 9298 San Marco
  Concor Max (= "Concor Maxi") 1985. All earlier moves, not later ones.
- NULL -> 1983-1983 (bare velobase rows, descriptions added): 6767 Clement Ritmo
  LTX 55, 6759 Clement Mirage Servizio Course, 4890 Ambrosio 19 Extra Elite Aero
  dynamic.
  **6767 attribution withdrawn 2026-11-14 (user approved):** this page says
  plain Ritmo, not the photographed LTX 55 marking. Restored unknown dates and
  photographic source 1, removed unsupported construction and cleared the three
  Raleigh links. [Evidence/validation](clement.md).
- year_to -> 1983: 6880 Vittoria Corsa CX Servizio Corse (1980), 6737 Clement
  Campionato del Mondo Seta (1981), 8972 Criterium Cotone (#12 Bis Criterium
  Cotton, 1981), 8970 Seta Tipo 3 (#3 Pista Seta, 1977), 6732 Sei Giorni (#8 Six
  Day, 1977), 8973 Gentleman (1977), 4889 Ambrosio 19 Extra Elite Durex (1980), 4888
  19 Extra Elite (1980), 4902 Montreal Durex Crono (1980), 5335 Cinelli Unicanitor
  #3 Buffalo (#3 Nitor Tour de France, 1982). Year-ranged overrides on 8970 / 8972
  / 8973 still fit. Description only: 4913 Ambrosio Montreal Durex.
- New (3 rows, 1983-1983): 9770 Clement Grinta (rain tubular), 9771 Ambrosio Off
  Road Durex (26 x 1.75), 9772 Selle San Marco Concor Junior.
- Name map used (catalogue -> row): Clement #1 Bis Criterium Seta Extra -> 8971,
  #6 Criterium Seta -> 6748, #12 Bis Strada 66 -> 6775, #1 Pista Seta Extra ->
  6771; Concor SC -> 5547 Supercorsa; Mavic Grise SSC -> 5112 Paris-Roubaix SSC, E2
  -> 5090 Module E2 Argent.
- Flagged, not changed: 6740 Clement CF 2001 (1970-1988) is "Clement's newest
  model" here, contradicting the velobase 1970, but 6741 CF 2001/T is dated 1980,
  so not moved later; Cinelli Mod. 65 "new" is a US-launch remark (in the 1982
  Cinelli brochure); Concor SL 305g ambiguous between 5552 Superleggera (260g) and
  9295 Supercorsa SL; Ambrosio Synthesis Durex Pro (400g, 22mm) matches neither
  4910 (310g) nor 4911; Ambrosio anodised Montreal vs the garbled 4914; Campagnolo
  pantographed / engraved parts not added as rows.

## Duplicate report `review` pass (2026-10-29, user's go-ahead)

69 `review` rows: 46 reclassified as configurations (classifier words added in
`duplicate-classify.js`), 7 marking rows kept in `REVIEWED_VARIANTS` (2021, 2033, 862, 2057, 3113,
1896, 5798), 5 deleted or merged, 11 left for a source.
- Deleted (all velobase or bare, no `bike_spec` links, no overrides): 1885 "Stronglight 107
  (variation 2)" (1981, 635g, src 282, `1BE4D7C5-71DE-4BE4-A027-96CDAF306827`; weight already in
  1883); 388 "Modolo Speedy (variation 2)" (1970-80, `B18EC253-4202-4E9A-923B-8DAF9723CD43`,
  survivor 386); 2723 "Sturmey Archer AW" (no years, `06CCAAD7-45EB-40A8-9DC8-49D71FE87F92`,
  siblings 2724 / 2725); 1729 "Sachs New Success" (no years, 640g Actual complete with rings and
  bolts, `015218AC-C4C5-48D0-8D05-6E80FDA49C66`; weight folded into 1730); 798 "LAM [Super-Dural]
  Course" (no years, `988012E7-A52C-4836-BF1A-E954616811BA`; marking noted on 811).
- Merged later the same day (user's call, no evidence either way): 6036 "Galli (Galli Approved, New
  Success)" (`4ECD396E-5AF1-458B-8B51-F539E3547383`) into 6035; 767 "Gipiemme Special (hex bolts)"
  (`332A7EE6-6BB4-44CF-8219-434C5DA44665`) into 766; 6249 "Sturmey Archer HSJ-508, 4-speed"
  (`1FF558D6-B486-4F15-B46E-0D80A5077530`) into 6250 (Brass); 6645 "Pivo 75 (with crescent)"
  (`80062252-5C81-4BA9-BD01-7AD2744680BE`) into 6644. Each survivor's description notes the variant;
  no links or overrides.
- Still `review` (7): 6641 Pivo track, 716 Favorit F2671/6-2, 8461 Araya 7X(N) (BMX, real), 5044 Mavic
  (1960's?) 410g, 5655 Ideale 88 smaller rivets, 6426 3ttt Mutant, 6973 Mavic Comète ± (real).
- Leads, 2026-10-30 (user's go-ahead): deleted 2000 "SunTour XCD 6000" (velobase, 1990, "Japan" only,
  `8343CBE2-BE34-4790-A082-31A5F8917CD7`, no links or overrides) as a stub of 2001 "SunTour CW-XD00,
  XCD 6000" (source 199). 491 / 1117 "Weinmann AG 405" are lever / caliper, not a pair; 1117
  `year_to` 1983 -> 1986 (fitted on the 1984 Raleigh Competition 12 and 1984-86 Peugeots). 5044 Mavic
  (1960's?) kept apart from 5043 (1950's) in `REVIEWED_VARIANTS`. Still `review` (2): 6641, 6426.

## Palo Alto Bicycle Shop catalogue — 1978-79 (VeloBase `Palo Alto Shop Catalogs/PaloAlto+78-79.zip`, 48 JPGs, data_source 292), 2026-10-30

- Source: 48 page images `78-79 Palo Alto00NN.jpg` (no 0037; the image-to-printed-page mapping is not constant,
  roughly printed page = image + 2 up to p. 30 then shifting, so cite printed pages), "Copyright 1978"
  (a 12-tooth cog is noted as late 1978), Palo Alto Bicycle Shop, 171 University Ave, CA; country US. Index:
  pedals 12-13, hubs 14-15, wheels 15-16, rims 17, freewheels 18-19, chains 20, handlebars 27, stems 28,
  brakes and headsets 29-30, derailleurs 31, shifters 32, superlight parts 33, tyres 37-40, saddles 42-44,
  seat posts 44, cranksets and chainrings 45-47, bottom brackets 47-48. Clothing, books, touring, tools,
  spokes and frames not read. Transcribed by five Sonnet subagents into 203 records, matched against the DB
  by group agents, then corrected by hand.
- Result: 98 existing rows matched (79 needed nothing). 9 `year_to` -> 1978: 6781 Clement Veltro (was
  1977), 8069 V-T Luxe, 9056 Vittoria Granturismo, 9058 Competizione, 9060 Tour de France, 9062 Record,
  9063 Imperforabile, 9069 Galli 75, 9072 Everest Dural (all were 1976). 8 `year_from` -> 1978 (earlier;
  old values): 5255 Avocet Touring II 1980, 5258 Racing I 1980, 6277 Cyclone shifter 1980, 7097 Cinelli 2A
  1982, 9117 Touring III 1981, 9118 Touring WII 1981, 9120 Racing WI 1981, 9121 Racing WII 1981. 2243
  Pro-Compe Ultra-6 filled 1978. 19 descriptions enriched. 14 new rows (1978-1978): Phil Wood Platform
  pedal, Avocet Model I high flange and Model III hubs, Rigida 13-19 27x1 / 700Cx1 rims, Cyclo Alloy
  5 speed, Avocet seat post, Cinelli headset, Sugino Mighty Custom and Mighty Victory chainrings (9899, 9900),
  Sugino Mighty Custom/Victory BB, TA non-sealed BB, Clement Elvezia 75, Cycle Pro National 1 1/8 clincher.
- Rejected on review: matches to the Avocet Model I / II hubs "(by Ofmega)" 3189 / 3190 / 3191 (later parts);
  year extensions on 3712 (Record Pista 1960-67) and the Sugino Mighty Competition rows 1326 / 1920 (may be
  the pre-Super-Mighty model; 935g vs 900g on 1963); "Record Seta" with no brand; new rows for Record Road /
  Track Black pedals (finish variants), Christophe toe clips (no category), Cyclo Pan kits, SunTour
  "Standard" levers; the agents' claim that no Ti chain exists (1391 Extra 50 Titanio does).
- Original ambiguous inventory included Regina chains, freewheels and clinchers.
  The 2026-11-17 and 2026-11-22 reviews above resolve the chain construction
  and Super Champion / Fiamme retail identities, including the narrow
  Gentleman as 5183. Remaining holds include the later splined Super Corsa Oro
  freewheels, Rigida 16–22 clinchers, Cyclone front variants, Cinelli 1/A
  logo-era variants and Stronglight / TA ring variants.
- Sugino Mighty Custom provides a second source; Maxy II is not in this catalogue.



## Palo Alto Bicycle Shop catalogue — 1979-80 (VeloBase `PaloAlto+79-80.zip`, 52 JPGs, copyright 1979, components pp. 1-33), 2026-10-30

- `data_source` label "Palo Alto Bicycle Shop catalogue (1979-80)", country US. Same method as the 1978-79 entry above: four
  Sonnet subagents transcribed image ranges (195 records), five group agents proposed the diff (111 match, 43 ambiguous, 25 skip,
  16 new), reviewed by hand; this time the corrected plan was loaded without a separate go-ahead (noted to the user).
- Changed (old values for reverting). `year_to` -> 1979 on 15 rows: 9892 Avocet Model I (high flange) (1978-1978); 9893 Avocet Model III (1978-1978); 8260 SunTour US-6000, Winner Ultr (1978-1978); 2243 SunTour Pro-Compe (Ultra-6) (1978-1978); 9896 Cyclo Alloy (5 speed, custom (1978-1978); 9897 Avocet Seat Post (1978-1978); 2801 Cinelli 64 Giro D'Italia (70 (1970-1978); 2809 Cinelli 66 Campione del Mond (1960-1978); 9069 Galli 75 (1976-1978); 8883 Sugino MCVS / MCVD, Super Mi (1978-1978); 9899 Sugino Mighty Custom (1978-1978); 9900 Sugino Mighty Victory (1978-1978); 9901 Spécialités TA bottom bracke (1978-1978); 9902 Sugino Mighty Custom/Victory (1978-1978); 9903 Clement Elvezia 75 (1978-1978). `year_from` -> 1979 (earlier) on 5 rows: 5187 Super Champion Performance (1980-1981); 9123 Sugino Super Mighty Custom (1981-1981); 9119 Avocet Racing IIT (1981-1981); 6863 Specialized Touring Turbo (1980-1981); 6868 Specialized Turbo S (1980-1981). Fill 1979/1979 on []. Descriptions enriched on 11 rows (ids [3259, 3260, 4125, 5749, 6667, 7886, 9068, 8883, 6861, 6863, 6868]); old text was never shortened. New rows (1979-1979): Cyclo Alloy (6 speed, custom), Specialized Racing 700C x 1.
- Rejected on review: matches to the Avocet hubs "(by Ofmega)" 3189 / 3190 / 3191 again, Avocet Professional headset -> Model II 2937, Avocet sealed BB -> Model I (4), Rigida 14-20 mm rims -> the 13-19 rows 9894 / 9895 and a generic Rigida 27 x 1 1/4 row 5153; new rows for BB spindles and cup sets (sub-parts), Palo Alto house tubulars (retailer house brand, TODO policy question), the Rigida 700C x 1 1/4, SR Laprade seat post (Laprade brand already has rows) and Avocet chainrings for double / triple (no model name).
- Original ambiguity included Regina chains/freewheels and clinchers. The
  2026-11-17 and 2026-11-22 reviews above resolve the chain construction
  identities, the threaded-cog Oro families and the Super Champion / Fiamme
  clinchers. Cyclone front and Cinelli 1/A variants remain held.


## Palo Alto Bicycles catalogue — c. 1983-84 (VeloBase `palo_alto_1984.pdf`, 52-page scan with noisy OCR), 2026-10-30

- `data_source` label "Palo Alto Bicycles catalogue (c. 1983-84)", country US. **Undated**: no printed year; it lists "The Fabulous World of
  Cycling-1983" and 1982-83 Tour de France stories, so it is late 1983 or 1984 (file name says 1984). Hence `year_to` was extended only to
  1983 (the floor) and new rows are 1983-1984. Printed page = PDF page - 2: saddles / seat posts 10-11, hubs 16, wheels 17, rims 18,
  bars / stems / headsets 19, pedals 20, toe clips 21, brakes 24, mountain bike parts 25-27, cranksets 28, bottom brackets 29, freewheels 30,
  chains 31, derailleurs and shift levers 32, tyres 36-38. Four Sonnet transcription agents (196 records), four group agents (111 match,
  29 ambiguous, 38 skip, 18 new), reviewed by hand and shown to the user before loading.
- `year_to` -> 1983 on 35 rows (old values): 5254 Avocet Touring I (later) (was 1970-1981); 5256 Avocet Touring WI (was 1970-1981); 5255 Avocet Touring II (was 1978-1981); 9118 Avocet Touring WII (was 1978-1981); 9117 Avocet Touring III (was 1978-1981); 9120 Avocet Racing WI (was 1978-1981); 9121 Avocet Racing WII (was 1978-1981); 5258 Avocet Racing I (was 1978-1981); 5253 Avocet Racing II (was 1970-1981); 5251 Avocet Racing III (was 1970-1981); 5183 Super Champion Gentleman (was 1970-1981); 5180 Super Champion Arc en Ciel (was 1960-1981); 2937 Avocet Model II (was 1981-1982); 3671 Avocet Model III Platform  (was 1980-1981); 3669 Avocet Model I (was 1980-1981); 3670 Avocet Model II (was 1981-1982); 3922 Sakae/Ringyo (SR) SP-100AL (was 1970-1982); 8240 Sakae/Ringyo (SR) SP-11, S (was 1982-1982); 1856 Spécialités TA Cyclotouris (was 1962-1981); 1453 Avocet Racing (was 1981-1982); 1454 Avocet Touring Triple (was 1981-1981); 4 Avocet Model I (was 1981-1981); 9901 Spécialités TA bottom brac (was 1978-1979); 1244 Campagnolo 753/A, Super Re (was 1970-1980); 2243 SunTour Pro-Compe (Ultra-6 (was 1978-1979); 8765 Sedis Sedisport (was 1979-1981); 6861 Specialized Touring (was 1976-1981); 6865 Specialized Touring-II (was 1980-1980); 6862 Specialized Touring K4 (was 1980-1980); 6869 Specialized Ultralight (was 1980-1981); 6868 Specialized Turbo S (was 1979-1981); 6863 Specialized Touring Turbo (was 1979-1981); 6867 Specialized Touring-X (was 1980-1981); 6860 Specialized Expedition (was 1980-1980); 6763 Clement Paris - Roubaix Se (was 1976-1981).
- Descriptions enriched on 15 rows (ids [2968, 3671, 3708, 3716, 5761, 6860, 6861, 6862, 6863, 6865, 6867, 6868, 6869, 8765, 9771]), none shortened. New rows (1983-1984): Specialized Saturne rim, Ritchey Bullmoose bar / stem, Specialized TriCross, Crossroads and Street Stomper tyres, Vittoria Pave CG tubular.
- Rejected: matches of the Avocet hubs to the "(by Ofmega)" rows 3189 / 3191 (again); new rows for SR Laprade 250 mm, Avocet headsets Model 20 / 30 (likely the DB's Model II / III), Shimano XT hubs and 600 XT chainset (no model numbers), Sugino Aero Tour A/T cranks (DB has "Sugino AT"), A/T bottom bracket and chainrings, Avocet chainrings.
- Printed pp. 23 and 32 list both Super Record front mounts. The later
  [Campagnolo review](campagnolo.md#no-18-imprint-and-super-record-availability--2026-11-22)
  reconciles the black-trim braze-on, SKU 42-407, to 7012 using independent
  1983 importer evidence and supersedes the original date-based rejection.
- Original holds included Regina chains/freewheels and rim identities. The
  2026-11-17 review above resolves ordinary Oro chain 1382 and explicitly named
  Gentleman 5183 / Model 58 5178 on p.18. The 2026-11-22 profile comparison
  identifies the earlier retail clinchers. The Oro construction comparison
  above identifies the freewheel family, with this edition still approximately
  dated. Cyclone generation variants remain held. This edition has no Maxy II.

## Dedupe 2026-10-30: Cambio Rino Aereo crankset

- Deleted 1465 "Cambio Rino (type aereo)" (velobase stub, no years, description "Italy" only,
  source_id E06940DC-5EDE-40EA-85E3-1BE6AD1F36F3); kept 1466 "Cambio Rino Aereo" (1985, La Bicicletta
  Guida '85/86, source 259). No bike_spec links or overrides. duplicate-report missed it because
  the stub's model name sat inside the parenthetical ("Cambio Rino" vs "Cambio Rino Aereo").

## Dedupe 2026-10-30: model names hidden in parentheticals (one-off scan)

- Scan: rows whose bracketed text holds the extra model words of another row of the same brand +
  category (the Cambio Rino "(type aereo)" pattern). 61 pairs, nearly all configuration variants
  (BCD, flange, quill length, speeds); 3 real leads.
- Merged 8006 "SunTour CW-6000, Superbe Pro Track" (1992-93, SR SunTour 1993, source 278, source_id
  7100218c-bf6e-11f1-a2df-02fea3763e8d) into 1992 (No. 62 Dec 1984, source 90 kept), retitled from
  "SunTour CW-6000, Superbe Pro (Track)" to "SunTour CW-6000, Superbe Pro Track", years 1985-1993; the
  description names both editions' specs (595g 52T 170mm vs 625g 49T 165mm).
- Merged 3011 "Gipiemme Special (?), Special (Strada)" (velobase, 1980, 97 g Actual, source_id
  2AA2D25A-B2CA-4C27-A2A0-CBA36FE58B11) into 3010 Gipiemme 'Special' Strada (600168): weight and the
  1980 year folded in.
- Left: 2679 "Zeus (Campagnolo Gran Sport copy)" (velobase 1950-60) vs 2686 Zeus Gran Sport front
  (Zeus 1977, ref. 28): may be an earlier part, no evidence either way.

## Ron Kitching catalogue (1960), Cinelli excerpts (labibleduvelo Cinelli 1960 page), data_source 297

- Source: https://labibleduvelocataloguescinelli.blogspot.com/p/cinelli-1960.html, 26 JPGs
  (Kitching60-Cinelli1..26, s0 = 877 x 1600). Only the pages mentioning Cinelli were posted, so
  this is a partial catalogue: pp. 20, 28, 31, 32, 58-63, 65, 69, 71, 73, 78, 79 and spares S 8-S 11,
  S 28, S 29, plus the Cinelli cycle pages. Multi-brand retailer: attests years, absence caps
  nothing. Country GB.
- Pages used (scratch p-numbers): p01 cranks, p02 Cinelli bars / stems feature, p05-p08 chainwheels
  and cranks, p11 bars and stems, p12 headsets and hubs, p14 saddles and pillars, p22 bracket
  fittings, p23 cranks supplied separately, p24 replacement chainwheels. Skipped: p03 mudguards,
  p04 bottles / cages / bracket fittings for carriers, p09 cotter pins / cyclometers / cycles, p10
  dynamos / frames, p13 lamps / mudguards, p15 seat bolts / shoeplates / spanners, p16-p20 Cinelli
  juvenile, Corsa, Super Corsa, Pista cycles and frames (a bike-specs job if wanted), p21 clothing,
  p25 Simplex lever spares and stem bolts, p26 head-fitting spares table.
- Transcribed by three Sonnet subagents (248 lines, 199 distinct). Spot-checked at full size: Cinelli
  16 drop 5 3/4 and 17B forward 4 3/4 (the subagent read 5 1/4 / 4 1/4 on p11), Milremo Gran Prix
  5 3/4 / 3 1/2 and Gran Premio 5 1/2 / 4 3/4, Lenco forward 4 3/4, Scheeren layout (the 6 / 7.5 /
  9.5 cm line is the 151).
- 1960 Cinelli bar numbering: road 11 San Remo, 12 Gran Fondo, 13 Koblet, 15 Tour of Britain,
  16 Campione del Mondo, 17 Corsa Strada, 17B Giro d'Italia (15 / 16 / 17B also engraved);
  track 14 Pista, 18 Madison. All chromed steel, 15/16in. The 6x numbering came later; no merge
  with the 6x rows. Stems: No. 1 Road (plain or badged, 4-14 cm), No. 2 Stayer (adjustable 5-15),
  No. 3 Sacchi (11-14).
- Retitled (old title -> new): 6485 "Cinelli #1" -> Cinelli No. 1 Road; 6494 "Cinelli Adjustable" ->
  Cinelli No. 2 Stayer (user's call that they are the same part); 1892 "Stronglight 45" ->
  Stronglight 45 Competition. search_text rewritten with each.
- year_from moved earlier to 1960 (old value): 9320 Cinelli Sacchi (1975), 9319 Cinelli 18 Pista
  (1975; 1960 name Madison, its 1960 dimensions differ from the 1975 Holdsworth figures, both kept),
  9898 Cinelli Headset (1978; = the 1960 "Special", user's call), 153 Stronglight No. 34 BB (1974),
  1861 T.A. Professional Track (1962; Kitching "755 Track"), 1303 / 1304 T.A. 173 / 175 adapters
  (1975), 1309 / 1310 T.A. CR.205 / CY.205 rings (1975), 1296 Simplex Competition dural (1970),
  2845 GB Maes steel (1962), 6533 GB Forged stem (1962). No year_from moved later.
- year_to -> 1960: 9034 Brooks B17 Campagnolo (1959), 1892 Stronglight 45 (1950), 1898 Stronglight 54
  (1950), 1298 Simplex Touriste (1950), 3184 Atom low flange (1950), 3209 / 3213 / 3214 BH Airlite
  Continental solid / Racelite / Solite (1950). NULL -> 1960-1960: 1539 Duprat Professionnels 3-pin
  (= 300S / 300D), 1532 Duprat 5-pin single flute (= 500S / 500D), 1524 Chater Lea 3-pin fluted.
- Descriptions only: 2798 Cinelli 14 (1960 vs 1976 dims), 5678 Unica-Nitor combination (Road / Track,
  colours, pillar sizes), 29 / 34 Campagnolo 1047 / 1046 BB axles, 6590 Milremo Grand Sport stem.
- Conflict kept (user's call): 3256 / 3257 Campagnolo 1006 / 1006/G hubs stay year_to 1955 (absent
  from Catalogo N. 14, source 109 kept); description notes they were still sold by Kitching in 1960.
- Added (41, all 1960): Cinelli bars 11, 12, 13, 15, 16, 17, 17B; Cinelli Super Corsa crank, Special
  BB, chrome seat pillar; Milremo cranks No. 30 / 50 Special Course, 55 Course, 555 Club, chainwheels
  130 / 150 / 230 / 250, bars Gran Sport / Gran Prix / Gran Premio, Cadet hub; Magistroni 70 Giro
  d'Italia crank, Supercorsa BB; GB R.H. Maes (steel); Philippe No. 40, AVA Super-Dura, Scheeren 151 /
  153 Weltmeister and 156 Sport stems; Lightrace G.M.A. and Lelege, Stronglight No. 97, Felix Boehm
  Hollow BBs; FB 1034 / 1079 Extralusso, Exceltoo 650B hubs; Vittoria cast adjustable and Strata dural
  seat pillars; new brand T.W.F. (800 Superlight headset, Superlight BB). 10 category_brand links.
- Left (noted only): Durax "H.C." / "S.C." cranks (codes not mapped to Course / Super Course /
  Special Course); Lycett L.15 / S.21, Mansfield Ace / Victor, Terrys 1086X / 1087X utility saddles;
  Lenco All Rounder flat bar; Maxi-Car tandem hub; Edco, Lightrace, Magistroni Continental / English
  and T.D. Cross Continental headsets (no model); T.A. ring options (CR / RA / CY / 201 / 207 / 208 /
  TCY203 / 3235 triple) beyond the four dated rows; Simplex / Stronglight 49D / 57 replacement rings;
  Campagnolo 1048 = cranks-only of the 1049 Record Strada (1502), no change.

## Gene Portuesi's Cyclo-Pedia (US multi-brand retailer), 11th edition (c. 1974), with Price List 81, data_source 276

- Source: https://2velo.com/cyclo-pedia-catalog/ (page scans as JPG/GIF; the
  GIFs need converting to PNG before `bind-images-to-pdf.sh`, which skips
  them). US mail-order retailer, Cadillac, Michigan. The catalogue pages
  print no year; 2velo files them under 1974. The five bound-in price-list
  pages are the 12th edition "Price List 81" (Midland, Michigan) and list
  some parts the catalogue doesn't, so the bundle is two dated sources.
- Multi-brand retailer stock, treated like the Bikecology / Palo Alto /
  Holdsworth catalogues: it attests years, but absence from it caps nothing.
  Where a maker's own catalogues cover the range (Campagnolo, Simplex, Huret,
  T.A., Stronglight, Weinmann) it only confirmed existing years.
- `year_to` -> 1981 (1981 price list; old value in brackets): 838 MAFAC Racer
  (1980), 825 MAFAC Competition later (1980), 845 MAFAC Cyclo-Tandem (1980,
  listed as HC-5 tandem cantilevers), 1904 Stronglight 93 (1980), 9500 93 Tri
  (1974), 1905 93 Piste (1974), 5185 Super Champion Médaille d'Or (1978), 9581
  Super Champion 302 Professional (1975, "17 Professionnel 410 gm"), 9053
  Michelin Fifty (1978), 9100 IRC High Racer Skinwall (1978), 5599 Ideale 2001
  (1976), 9061 Vittoria Criterium (1976).
- `year_from` -> 1981 (1981 price list): 9254 Vittoria Leone (1984), 9256
  Specialissimo (1985), 6889 Giro del Mondo (1984). Note the 1981 list
  renumbers Vittoria: 201 is Leone (Granturismo c. 1974), 301 Specialissimo
  (Supersport c. 1974).
- `year_from` -> 1974 (c. 1974 catalogue, earliest attestation; a year either
  way if the edition date is off): Vittoria 9055 Vulcan, 9056 Granturismo,
  9057 Supersport, 9058 Competizione, 9059 Giro d'Italia, 9061 Criterium,
  9065 Record Seta (the catalogue's "604 Record" is pure silk, 180/200 g, not
  the cotton 9062), 9066 Imperforabile Seta, 6892 Normalcross (all 1976);
  Canetti 9348 Paris-Roubaix, 9347 Paris-Tours, 9346 Paris-Nice, 9350 Cross
  160 (1975); 9021 Wolber Route Renforcé Noir (1978, catalogue "112
  Renforcé"); 5182 Super Champion Étoile (1976); 5609 Ideale 39 (1976); Unica
  5337 Mod. 55, 9083 Mod. 65, 5333 #4 (1975); Simplex 7287 S3952, 7334 SX3613,
  7337 SLJ5006 (1975; 5006 printed "New").
- `year_to` -> 1974: Huret 4297 Luxe, 4296 Luxe Touring, 4295 Luxe Super
  Touring (1970), 2385 700 front later version (1973); Simplex 8794 AV 3
  Super-Competition (1971), 4645 Criterium AR 637 (1973); 5659 Ideale 91
  (1970).
- Descriptions rewritten: 4296 / 4295 Huret Luxe (capacities, weights; old
  text only named refs 2100 T / ST and cages 2101 / 2101-C), 5656 Ideale 90
  (90-3 No. 3 clip 32 mm wires, 90-2 No. 2 clip 38 mm; old text "factory-treated
  leather to shorten break-in, reinforced riveting, steel rails; 573 g
  listed"), 5659 Ideale 91 (old text "Ideale 91 Swallow style, France, 454
  grams").
- New rows: 9692 Simplex AR 642 P Maxi-Prestige (14-34T, 22T); 9693 Vittoria
  201-B Butyl; 9694-9698 Canetti 109 Criterium Tergal, 111 Olympic, 141
  Cyclone, 145 Sport, 146 Mistral; 9699 Wolber 84 Supersport (27 x 1 1/4
  clincher); 9700 Fiamme Yellow Label Pista (19 mm, 270 g); 9701 Fiamme 24
  inch (1974-81); 9702 Agrati-Garelli 33 track sprocket (1974-81); 9703
  Universal 304 lever.
- Retailer numbering, not maker refs: Campagnolo "1048" / "1050" are the
  1049 / 1051 cranksets sold as sets; Mavic "164" is the Montlhéry Route
  (price list: "Mavic Sport"); Mafac levers R-1 / C-1 / SL-3 etc. are US
  importer codes.
- Left unresolved (judgement calls): Vittoria 501 Junior vs 6890 Juniores
  (1984-85); Fiamme 2 Red Label track (19 mm, 310 g) vs 4998 Fiamme Pista;
  Wolber 118 Strada / 119 Corsa vs 6940 Strada 80 / 6911 Corsa 80, 56 Sport
  vs 6939 Sport 25; Mavic 320 / 717 clinchers (510 g) vs 5084 Module 3;
  Mavic 140 Montlhéry vs 9579 Monthléry N / 5092 Pro; Simplex SLJ5000 still
  in the 1981 list (Simplex's Jan 1981 catalogue has the SLJ5500, so likely
  old stock); Ideale 88 (two rows); Weinmann "125 Carrera" (400 or 600);
  T.T.T. GP-6 bend names (Fr. Belga, Bobet, Anquetil, DeFilippis, Coppi,
  Pista) vs the Gimondi / Merckx / TdF rows.

## Bike Warehouse catalogue No. 21 — 1981 (archive.org, data_source 315)

- `data_source` label "Bike Warehouse catalogue No. 21 (1981)", country US. Source:
  https://archive.org/details/bike-warehouse-catalog-21-1981 (`..._text.pdf`, 20 MB, 96
  pages; pp. 49-96 are a second scan of pp. 1-48, same prices, so only 1-48 read; OCR
  layer is unusable, read visually; printed page = PDF page - 1). Cover shows only "21";
  the year is archive.org's. Same retailer as No. 12 (1978, data_source 246). The 2velo
  "Bike Warehouse" album (BW00-BW33 + suffixed) is 400 x 400 at source, unreadable;
  archive.org's Catalog 16 (1980, `BikeWarehouse-80.zip`) returned HTTP 500 on 2026-10-31.
- Components: PDF pp. 7 (Avocet), 15-31, 35 (tandem). Out of scope: 2-6 order/info, 8-14
  clothing/bags/racks/helmets/cables, 27 rollers, 32-34 tools/car racks/lights, 36-48
  camping, books, ski closeouts, Tsunoda bikes, frames, back cover. Read 2026-10-31.
- Stock numbers are retailer codes (CA-1020/A carries the Campagnolo number; SH-, ST-,
  SR-, SU-, WO- etc. are not manufacturer codes, although SR-FS matches SR's "FS" stem).
  Retailer source: attests 1981, absence caps nothing. "NEW"/due-July: Araya aerodynamic
  rims, Tange Levin headset; SunTour New Winner "may be available '81".
- Changed (source_ref -> 315, 13 rows): year_to -> 1981 on 3621 SunTour Vx hubs (1980),
  3769 KKT Pro Ace road and 3775 KKT Top Run (1980), 5285 Brooks B72 (1959), 7128 Shimano
  BC-300 Auto-Adjust disc brake (1978; p. 34 "SE Disc Brake", steel 36H hub), 9022 Wolber
  Touriste Renforce, 9023 Team Corsa, 9027 Leader (1978), 9046 Hutchinson 80-GTX Corsa
  (1978), 9049 Cross TR (1976), 9097 Cycle Pro National tubular (1978), 9894 / 9895 Rigida
  13-19 (1978). No year_from moved, no retitles.
- Added (12 rows, 1981-1981, group NULL): 10010 Hutchinson Sprint Anticrevaison; 10011-14
  Specialized 300 / 270 / 240 / 220 tubulars; 10015 Rigida Rigi-Alu; 10016 MAFAC
  Cantilever; 10017 / 10018 SR Foursir-C / Foursir-G bars (printed "Foursir"); 10019
  Shimano Dura-Ace EX seatpost (no code given); 10020 Sturmey Archer S5 (catalogue says
  only "5-speed hub"; 1981 is attestation, the hub is far older); 10021 Cycle Pro Touring
  saddle (category_brand 17/337 added).
- Not applied: Dia-Compe "Gran Compe 450 centerpull, sealed ball bearing pivots" (only
  696 NGC450B 1984-86 in DB; would move year_from earlier on a name mismatch); Campagnolo
  triple tandem crankset CA-TTC-V and "1048/T" (no Campagnolo number); Sugino Maxy I /
  Maxy II; Avocet Men's / Women's Model 1 / 2 saddles vs DB Racing / Touring names; KKT
  Pro Vic (DB 3772 "Pro Vic II", undated); Ideale "B6 woman's model"; Wolber W20 / W23
  Invulnerable clinchers; National touring clincher; Shimano 600 cantilever (DB 951
  undated "Touring Series"); Araya aero (4931 Super Aero undated).

## Falcon Lightweight Cycles parts catalogue — 1970 (UK importer, data_source 352)

- Source: falconrestorebike.wordpress.com "1970 Falcon parts catalogue",
  https://falconrestorebike.wordpress.com/wp-content/uploads/2023/07/1970-falcon-parts-catalogue.pdf
  (A5, 15 PDF pp = printed 1-16, pp 8-9 one spread; scan, no text layer). No printed date; 1970
  per the site. Falcon (Barton-upon-Humber) as UK stockist of Campagnolo, Clément, Cinelli,
  AGV, Sergal, Hutchinson. "Ref." codes (H.32/33, C.79, T.63 ...) are Falcon stock refs, not
  maker numbers; Clément part numbers are the Tipo numbers. Hutchinson page copy cites the
  1964/65 season (older text reused). The bike catalogue of the same year is data_source 350.
- Pages: p2 Model 76 San Remo Equipe spec; p3-4 Campagnolo hubs; p5 chainsets; p6 gears;
  p7 pedals / 1044 / headsets / 2040 brakes / fork ends; p8-9 Clément tubulars (Tipo, name,
  oz); p10 Cinelli 64 bars, 1/A stem, shoes, Binda straps; p11 AGV hats, mitts, W.P.B. saddle;
  p12 Falcon framesets; p13 Falcon spares, ISCA saddle; p14 Falcon wheels, Clément clinchers;
  p15 rims, name motifs, Sergal; p16 Hutchinson tubulars. Skipped as out of scope: fork ends
  1010/1053, forks, frames, shoes, straps, hats, mitts, clothing, motifs, cement, repair kits.
- Updated (19 rows, source_ref 352):
  - Campagnolo: 3712 1038 Record Pista (standard) year_to 1967 -> 1970 (track pedals listed;
    silver 3711 from 1971); 3233 1253 description rewritten with 1266 front / 1267 rear and
    36/36, 32/40 (confirms the sub-numbers the c. 1974 Special Catalog pass left unconfirmed);
    1495 1048/4 description rewritten (single 45T, 753/1 inner/outer guard rings, 170 mm).
  - Cinelli: 6488 1A (early version) description adds Allen-key expander bolt, 8-13 cm by 0.5.
  - Clément, year_from moved earlier to 1970 on Tipo number match (old value in brackets):
    6731 Clement 50 / Tipo 19 (1975), 6755 Gran Sport 65 / 22 (1976), 8972 Criterium Cotone /
    12 bis (1975), 6762 Paris-Roubaix cotton / 14 bis (1976), 6757 Grifo 61 / 15 bis (1976),
    6736 Campestre / 18 (1975), 6732 6 Giorni / 8 bis (1976), 8971 Criterium Seta Extra / 1 bis
    (1975), 6737 Campionato del Mondo Seta / 13 (1975), 6763 Paris-Roubaix Seta / 13 bis (1976),
    6771 Seta Extra / 1 (1975), 8970 Seta Tipo 3 track (1973). 6774 Speciale Corsa (Tipo 14)
    was undated with a bare description: now 1970-1970, cotton road tubular, ~310 g.
  - Hutchinson: 9047 Corsa Leggero (1976) and 9048 Super Corsa (1976) year_from -> 1970.
- Confirmed as-is: Campagnolo 1034/1035/1036, 1250-1253, 1048/1049 double, 1051, 1046/1046a,
  2170, 1020/A v3 (printed "1020/1a"), 1052/1 second body, 2050 (called "Gran Sport front
  changer" in the Valentino 10-speed set), 1014, 1012/3, 1204/1206, 1037, 1044 Record, 1039,
  1040, 2040 pre-CPSC, 2030; Cinelli 2801 64 Giro d'Italia 70's (38/40 cm); Clément 6752
  Elvezia (24), 6781 Veltro (21 bis), 6730 Clement 48 (20), 6758 Grifo Neve (15, printed
  "Grifo Cyclo Cross"), 6748 Criterium Seta (6).
- New (6 rows, 1970-1970): 10068 Clement Produzione (Tipo 23, 14 oz) 2bce7fff-d6c1-11f1-a2df-02fea3763e8d;
  10069 Clement Olimpic (Tipo 21, black ribbed, 12 oz) 2bd0fe95-d6c1-11f1-a2df-02fea3763e8d;
  10070 Hutchinson Saturno Strada (370 g) 2bd2f44f-d6c1-11f1-a2df-02fea3763e8d;
  10071 Hutchinson Milano S. Remo (340 g) 2bd5135c-d6c1-11f1-a2df-02fea3763e8d;
  10072 Hutchinson Sprint (Sprint Butyle folded in) 2bd71b5b-d6c1-11f1-a2df-02fea3763e8d;
  10073 Iscaselle 18/PL, Racing ("a new type saddle from Italy") 2bd95020-d6c1-11f1-a2df-02fea3763e8d.
- No deletes, no retitles, no bike_spec / COMPONENT_OVERRIDES changes (the 8972 override
  range 1975-83 stays inside the new years).
- Unresolved: W.P.B. S.57 butt-leather saddle with QR pillar ("used in Warsaw-Berlin-Prague";
  no such brand in DB, maker unknown); Weinmann and San Remo 27" sprint rims (32/40, 36/36,
  no model names); Clément Tipo 9 (cotton track, black smooth) and Tipo 10 (cotton track, black
  file) clash with DB 6735 "Seta 9" and 9259 "N. 10" (1980s road), not touched; Clément
  clinchers 27 x 1 1/4 HP and 12 / 14 x 1 3/4 Junior (no names); Falcon-branded "Falcon/Clement"
  tubular and Falcon house spares (C.38/C.43/C.39 chainsets, C.19/C.21 chains, F.139 freewheel,
  H.30 headset, R.10/R.13/R.15 rims) left out per the house-brand rule (DB "Falcon" freewheels
  2099-2101 are the Taiwanese brand, unrelated); the 1970 1048 triple (three rings, 830-832 /
  753 parts) predates 1498 "1049 Triple BCD 144+100" (from 1973) and is probably a different
  design, 1498 not moved; Cinelli 2803 "64 Early model" (1967 only) not extended.

## Bike Warehouse catalogue No. 16 — 1980 (Ebykr scan)

- Source: https://ebykr.com/library/bike-warehouse-1980-catalog/ (34-page scan; printed cover No. 16; scan source bulgier.net, scanned by Steve Kurt). This is a multi-brand US retailer catalogue. Full inventory is in `/private/tmp/bike-warehouse-1980-inventory.md`; reconciled against the DB on 2026-11-05/06.
- Printed p. 17 (scan page 18): retailer code `RI-1320-Z`, Rigida 1320, 13 mm internal width, double-wall clincher, offered in 700C and 27-inch sizes. `RI-1320-Z` is the retailer stock code, not a confirmed Rigida manufacturer part number.
- Existing rows 9894 / 9895 were titled Rigida 13-19 for 27-inch / 700C, from the 1981 Bike Warehouse catalogue. Matching the 13 mm size/profile to the 1980 1320 description is an inference; retitled those rows as Rigida 1320 and cited this catalog. Row 9895 also has 1987 Peugeot (US) catalogue source evidence, extending its end year through 1987.
- Existing row 10015, Rigi-Alu, is a separate alloy clincher with eyelets; its 27-inch 1 1/4 (1 1/8) specification and 700C alternative are recorded from printed p. 17; its start year is 1980.
- Linked nine 1986 Peugeot / Falcon and 1987 Peugeot bike-spec values naming Rigida 1320 to 9895.
- 2026-11-06 remainder pass: extended `year_to` to 1980 (and `source_ref` to 360) for 9105 Dia-Compe Gran Compe Superbe (1978), 964 Shimano BB-300/600 (1979), 8056 SunTour PDL-M (1976), 8259 SunTour PC-6000 Pro-Compe (1979), 8260 SunTour US-6000 Winner Ultra-6 (1979), 8890 Sugino MCV / MCV Black, Mighty Victory (1976), and 9902 Sugino Mighty Custom/Victory bottom bracket (1979). The listings are current in the 1980 catalogue.
- Added 10830 Galli Super Lite / Strong headset, dated 1980 from printed p. 21. The Mathauser finned brake shoes and replacement pads on printed p. 4 were removed: the database has no category for brake shoes/pads, and the broad Brakes category is not appropriate for these replacement parts. Updated 6640 Pivo tandem stoker stem with the rear-stem / front-seatpost fit and hex-nut binder detail from printed p. 23; `year_from` is now 1980.
- For other entries confidently matched to existing rows with compatible descriptions and year coverage, no update was needed. Retail stock codes were not treated as manufacturer part numbers. Left unresolved: the ambiguous Dia-Compe 730G / 810G line, Idéale 90A versus the existing 90 Speciale Competition rows, and Sugino Mighty Custom Compe / Mity Compe / MCT and Maxy I / II wording versus existing Mighty / Super Maxy rows. Retailer-built wheelsets and the unidentified REG seat-pillar brand were not added as maker components.

## Hutchinson Krono attribution — 1979/1981 versus 1985, read-only review 2026-11-19

- **Applied and validated later on 2026-11-19 following the user's approval.** The initial review was read-only; the date/source corrections below are now live.
- Re-read the original scans, not just the previous ingestion notes:
  - [Brügelmann 1979, printed/PDF p.43](https://s01335cf0ecfff54f.jimcontent.com/download/version/1451656901/module/6124978862/name/Bru%CC%88gelmann%2B1979.pdf#page=43): retailer reference `94327-HKRO`, model KRONO, 210 g, 56.50 DM, in the handmade Hutchinson series alongside Leggero-Corsa 270 g and Super-Corsa 250 g.
  - [Brügelmann 1981, printed/PDF p.40](https://s01335cf0ecfff54f.jimcontent.com/download/version/1451656901/module/6124978262/name/Bru%CC%88gelmann%2B1981.pdf#page=40): retailer reference `14119-HKRO`, KRONO, 210 g, 56.50 DM, in the same handmade series with the same neighbouring models/weights. Both editions qualify weights as approximate/nonbinding. Neither listing prints Milano, casing material, width or tube material; the retailer references are not maker codes.
  - [La Bicicletta Guida '85/86, scan 40](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_1985_november_-_i_componenti_da_corsa_scan_40_main_image.jpg): Hutchinson KRONO, silk/latex, double anti-puncture ply, 180 g, section 20 mm. This independently confirms the specification and 1985 attestation behind row 9267; registered source 259, November 1985. No claim of introduction in 1985.
- **Supersedes the 1981 attribution to 9267 below:** the 1981 210 g listing does not establish an earlier date for the specific 180 g, 20 mm silk version. Its model, handmade-series context, weight and price instead continue the 1979 offering already matched to 6810. Extending that existing match to 1981 is an inference; these pages do not independently prove the Milano suffix or cotton construction. Keep the two version records separate; no merge, retitle, description rewrite or additional component is supported by this review.
- Read-only baseline on 2026-11-19 and subsequently approved/applied corrections:

  | Component | Previous dates / source_ref | Applied dates / source_ref | Reason |
  | --- | --- | --- | --- |
  | 6810 Hutchinson Krono Milano | 1975–1980 / 397 | 1975–1981 / 388 | Continue the existing 1979/1980 match through the consistent 1981 210 g listing. |
  | 9267 Hutchinson Krono | 1981–1985 / 388 | 1985–1985 / 259 | Withdraw the unsupported 1981 silk-version attestation and restore the original 1985 baseline, verified against Guida scan 40. |

- Existing descriptions read back: 6810 is the 210 g, 22 mm cotton road tubular with ribbed tread, gum rubber and 100–115 psi; 9267 is the 180 g, 20 mm silk/latex tubular with double anti-puncture ply. These distinguish the stored versions; do not transfer details between them. The preceding 1981 ingestion commit `10c47fc` records 9267's old start year as 1985, consistent with the re-read guide. The source changes above accompanied the guarded date updates under the last-source-to-change-row rule. Titles and descriptions were unchanged.
- Application/validation: re-read both rows immediately before loading and confirmed the reviewed dates/source references; neither had any `bike_spec.component_id` references. Repository search found no generator overrides for either ID or Krono name. Exactly two guarded UPDATEs affected two component rows; readback confirmed the applied dates, source labels and unchanged descriptions, with zero bike links to either row. Repeating the SQL affected zero rows. `compare-bike-links.js --json` before/after covered 108 loaded catalogues and 23,380 specs; scope, files, summaries and every finding were identical. The 15 pre-existing generator/live-DB lost-match findings were unaffected; this change caused no mapping changes. No component insert/delete/merge or bike/generator edit was needed. A future early-date claim for 9267 needs a dated source identifying the silk/180 g/20 mm version. For restoration, the table retains previous dates/source references; restore only after checking that the rows still match the applied values. Task-only downloads, renders, SQL and comparison JSON were discarded after validation and evidence recording.

## Cobra saddle brand and versions — 2026-11-19, applied

Reviewed the Cobra offerings in Brügelmann 1981/1982/1985. Following user
approval, six component rows **12088–12093** and the Saddles category
association were inserted and validated. This supersedes the earlier
brand-identity hold below.

**Brand evidence:** [1981 printed/PDF p.32](https://s01335cf0ecfff54f.jimcontent.com/download/version/1451656901/module/6124978262/name/Bru%CC%88gelmann%2B1981.pdf#page=32)
prints the registered Cobra ITALY logo over the saddle range. The original
[2978 Corsa Extra Leggera headset specimen](https://www.velobase.com/Pages/ViewComponent.aspx?ID=ACB8C0D4-471D-441C-B4CD-2DBCA56562B2)
has [boxed packaging](https://www.velobase.com/CompImages/Headsets/1D315CF1-250B-4984-A308-684E9AB8218E.jpeg)
with the same distinctive snake-headed C, cursive Cobra wordmark, registration
symbol and ITALY legend. The logo is especially clear again on 1985 p.100.
This supports using existing Italian Cobra **brand 335**; it does not identify
the underlying saddle factory or prove that Cobra manufactured every branded
part itself. No new brand or brand merge was needed. Original headset detail
photo `052AE1A2-EFFD-4A4E-8CC2-5909FA5DA2B7.jpeg` was also inspected.

The Spanish **5363 GES Cobra** is a separate existing model/brand attribution,
not an Italian Cobra saddle equivalent. Its [original specimen page](https://www.velobase.com/Pages/ViewComponent.aspx?ID=C890BAC8-2119-436E-B62C-07480457A027)
and photo `7BC96E77-F771-44AA-AAE4-8E9D8B969319.jpeg` were inspected; no evidence
establishes a cross-brand identity. Keep it and Cobra headsets 2978/2979/2980
unchanged. Public searches found no additional period saddle maker crosswalk;
Classic Rendezvous's Cobra detail page was a bot wall. The matching original
packaging and period catalogue logos supply the actual brand evidence.

**Page evidence and listing:** 1981 p.32 (source 388),
[1982 printed/PDF p.34](https://s01335cf0ecfff54f.jimcontent.com/download/version/1451656901/module/6124977062/name/Br%C3%BCgelmann%2B1982.pdf#page=34)
(source 389), and [1985 section PDF archive](https://www.dropbox.com/sh/x646ycsiuna0k8l/AADpyJvsSwygU-eMF94Zv29Na?dl=1)
(source 390), file `B 85 2 Licht, Felge, G-Traeger, Ketten, Gruppen, Vorbau, Lenker, Naben, Pedale, Sattel, Schaltung.pdf`,
PDF p.24 = printed pp.100–101; Cobra table on printed p.100. The surrounding
1985 saddle spread pp.98–99 was checked too. The three editions' printed
references are retailer order codes, not maker model numbers. All inserted
titles below are descriptive labels, not invented maker model names.

| Inserted Cobra racing saddle ID / version | Attested years | Catalogue evidence / distinguishing specification | source_ref |
| --- | --- | --- | --- |
| 12088 smooth calfskin | 1981–1985 | `13225-COGL`, `23238-COGL`, `52855-100CGL`; smooth calfskin cover; no rail material, weight or padding claim added. | 390 |
| 12089 padded calfskin | 1981–1982 | `13209-COPG`, `23222-COPG`; padding beneath smooth calfskin cover. | 389 |
| 12090 padded suede | 1981–1982 | `13220-COPW`, `23233-COPW`; padding beneath suede cover. | 389 |
| 12091 lightweight nubuck, Ergal rails | 1981–1985 | `13213-LLLL`, `23226-LLLL`, `52828-100LLL`; premium nubuck cover, Ergal rails; 220–240 g in 1981/82, about 220 g in 1985. | 390 |
| 12092 padded coloured suede | 1981–1982 | `13206-SAFA`, `23213-SAFA`; separately offered premium padded suede version, cornflower blue, light blue, ochre/brown or grey. One row covers its colours. | 389 |
| 12093 foam-padded nubuck, Ergal rails | 1982–1985 | `23227-LLLP`, `52833-100LLP`; foam-padded version of the preceding lightweight saddle; 320 g in 1982, about 280 g in 1985. Ergal/nubuck are inherited from the explicit ditto/version wording. | 390 |

The 1985 `52835-100CPO` entry says only padded leather, unlike the separately
specified calfskin/suede versions in 1981/82. Do not use it to extend either
specific version beyond 1982 or insert a seventh overlapping generic record.
Preserve both dated weight specifications for the lightweight versions rather
than averaging them or choosing one as an actual measurement. Dates above are
attested availability bounds, not production endpoints. Earlier/later editions
were not used to infer absence or dates. No individual shell material, rail
diameter, maker number or extra model name is established here.

**Reconciliation/application:** before loading, Cobra 335 had only three
Headsets records, no Saddles records; category_brand had only Headsets/335
(category 12).
All live Cobra brand/name/description saddle candidates were checked, including
5363. No Cobra-named saddle specs, links to the four reviewed existing IDs or
generator overrides for them were found. Added Saddles **category 17 / brand 335**
once, and six distinct, independently sold configurations, group NULL, with
UUID source_id values and `search_text` from `scripts/search-text.js`.
The padded suede and premium coloured-suede entries are kept separate because
the catalogue offers them independently under distinct codes/prices; colours
within the latter are grouped. Do not treat this shared-title family as proof
of duplicates. No existing component updates, retitles, deletes, merges,
generator matcher edits or bike-link writes were made. The duplicate decision
registry now records **12091/12093** as reviewed non-duplicates: lightweight
nubuck/Ergal versus the separately offered foam-padded version. This preserves
the catalogue construction/weight distinction without changing general rules.

The seven guarded inserts affected exactly six component rows and one category
association; repeating the SQL affected zero rows in either table. Inserted
UUIDs, in table order: `26e0b376-a8c8-4fb0-996a-3806848f00c0`,
`4cdef33a-8957-4d0a-ba98-f843f4d7d66c`, `ac838e71-173c-40c6-ac7e-4f0fa3bc91a8`,
`756f6f52-c343-45f8-943d-4e4e63102fe3`, `ea18da98-b7e9-4370-ba20-de25e205e04e`,
`f0c47b35-400a-4cbe-949b-4599a10a1a39`.
Readback verified all six IDs, titles, descriptions, dates, source IDs/references,
brand/category, NULL group and generated search text; descriptions were 51–136
characters, all below 255, and all six rows had zero bike links. Source
388/389/390 labels/citations were verified during preparation. Before/after
`compare-bike-links.js --json` covered 108 loaded catalogues and 23,380 specs;
scope, files, summaries and every finding were identical, including the 15
pre-existing lost-match findings. No Cobra-named saddle spec needs linking.
The three duplicate modes were checked: no near or parenthetical-name pairs;
all 15 same-title-family pairs were reviewed. After recording 12091/12093,
the report shows 11 configuration, three generation and one reviewed variant
pairs, with no merge candidates or unresolved review pairs. These classifications
are report heuristics, not new claims of production generations. Existing
duplicate-classifier/report tests passed (two test files). For restoration,
check current links/overrides before removing only these UUID rows and their
reviewed-pair entry; remove the category association only if unused. Task-only
SQL, comparison/duplicate JSON, downloaded scans, archive, HTML and renders
were discarded after validation; provenance is retained above.

## Brügelmann Radsport-Shop catalogue — 1981 (rennrad-geschichten.de, Frankfurt mail-order retailer), data_source 388, 2026-11-14

- `data_source` label "Brügelmann Radsport-Shop catalogue (1981)", country DE. Source:
  https://www.rennrad-geschichten.de/google81f6dbe480740ded-html/alte-kataloge/br%C3%BCgelmann/
  ("Brügelmann 1981.pdf", `/app/download/...` 302 to jimcontent, `curl -L`; 120 pp, no text layer,
  ~2352 px wide). Cover: "1981 - gültig bis Neuauflage 1982 - etwa März 1982". Same site has
  1972-1982 (one PDF per year; 1972-77 have a partial OCR layer); 1985 / 1988 are in the Dropbox
  folder noted in source-hunts.md (section PDFs).
- Components: pp. 6-7 (brake shoes, levers), 9 (brakes), 12-13 (rims), 14-15 (light parts, Simplex
  advert), 19-22 (chains, chainrings), 24-29 (stems, bars, Colnago parts, hubs, pedals), 32-35
  (saddles, seatposts, derailleurs, shifters), 40-44 (tubulars, clinchers), 49-58 (headsets, BBs,
  cranksets, freewheels, sprockets, rim x hub chart, Dura-Ace AX "nicht lieferbar"), 119 (weight
  table "summer 1980"). Out of scope: clothing, tools, roof racks, nutrition, frames, books, bikes.
- Order numbers (e.g. 14024-C175) are Brügelmann's; maker codes are almost never printed, so the
  diff was by brand + model name. Retailer source: attests 1981, absence caps nothing.
- Reading notes: p. 7 "10763-CARE modell RECORD / 10764-CASU modell SUPER" are unbranded in a box
  of their own (prices fit Campagnolo Record / Super Record levers), not Carrera; "Carrera" on
  pp. 7 / 9 is Weinmann's Carrera (Profi lever 10759-WCAR, brake "typ CARRERA 600"). p. 42 prints
  "CHAMPIONAT du MONDE" and "GRAND PRIX DE NATION"; titles use the French spelling. Dourdoigne box:
  "ridden by very many professionals, but under another name as the team contract requires".
- Changed (source_ref -> this source):
  - year_to -> 1981: 8376 MAFAC 2000 lever (1980), 475 Universal CX lever (1980), 501 Weinmann
    Carrera lever (1980), 1340 Zeus 2000 chainring (1980), 1813 / 1814 Shimano GA-200 Dura-Ace black
    and drilled (1979; p. 52 lists "Dura Ace in Schwarz" and "Schwarz gebohrt" beside Dura-Ace EX),
    3097 UA-100 Dura-Ace black headset (1979), 3384 Maillard Normandy Luxe Competition high flange
    (1978; label colour not shown), 5816 Laprade 606 (1979), 6755 Clement Gran Sport 65 (1977),
    Canetti 9344 Tour de France / 9694 Criterium / 9347 Paris-Tours / 9697 Sport (1974-75),
    9329 D'Alessandro Silk Imperforabile (1975), Hutchinson 9047 Corsa Leggero (1978) / 9048 Super
    Corsa (1976) / 10071 Milano S. Remo (1970), Wolber 6909 Club Strada (1978) / 6921 Liberty
    (1980) / 9024 Cross (1978) / 6947 W20 (1978), 1862 TA Criterium crankset (1962; p. 52 "modell
    CRITERIUM" 1-, 2- or 3-fach, 150-185 mm).
  - year_from -> 1981 (earlier than prior first attestation): 6777 Clement Super Condor (was
    1983), 9267 Hutchinson Krono (was 1985; 1981 copy says hand-made 210 g, the 1985 row says silk
    180 g; this attribution is superseded by the [2026-11-19 review and applied correction](#hutchinson-krono-attribution--19791981-versus-1985-read-only-review-2026-11-19)), 9286 Selle Royal Contour (was 1985). 5531 Selle Royal Super Contour NULL/NULL ->
    1981-1981.
  - Description rewrites (bare velobase text): 501, 1340, 1862, 5531, 9286.
- Added brands 700 Dourdoigne (Tyres) and 701 Nadax (Bottom Brackets). Added rows 11135-11155 (1981-1981, group NULL):
  D'Alessandro Leone / Mondiale / Specialissimo / Super / Criterium Seta (silk; DB 9331 is the
  Tergal Criterium, not extended); Continental Sonderklasse 175 / 220 / 240, Continental 165
  (track); Dourdoigne tubular (245 g) / (210 g) / Paris-Roubaix / Grand Prix des Nations (silk) /
  Championnat du Monde (track); CLB Titanium and Italia sidepulls; Sugino Astron crankset and
  bottom bracket; Nadax Favorit cartridge BB; Selle Royal 2261 / 2068.
- Not applied: Cobra saddles (the brand hold is superseded by the [2026-11-19 Cobra review](#cobra-saddle-brand-and-versions--2026-11-19-applied); six additions are applied and validated); Hutchinson "Touristik" (descriptive copy, not a model name); Lion and Soyo tubulars
  (no model name; DB has coded 1984 Lion / 1980 Soyo rows); Lyotard cross / platform pedals (number
  not printed); Universal Pro-Super lever; Huret Jubilee and 3ttt Record Regolabile (version not
  identifiable); Sedis "Sedicolor Gold" (1398 vs 8764); Mavic "Extra Legere OR"; Regina freewheels
  (DB rows undated); the p. 57 built-wheel chart; generic or unbranded chainrings, chains and BBs.

## Brügelmann Radsport-Shop catalogue — 1982 (rennrad-geschichten.de), data_source 389, 2026-11-14

- `data_source` label "Brügelmann Radsport-Shop catalogue (1982)", country DE. Source: same page
  as the 1981 entry, "Brügelmann 1982.pdf" (164 pp, no text layer). Cover "1932-1982" (50 years
  Brügelmann), no validity line; p. 161 weight table "Stand im Sommer 1981".
- Components: pp. 6-8 (brakes, levers, drum hubs "Vorankündigung"), 12-15 (rims, Mavic 18 mm,
  Assos 16 mm aero, narrow tubulars), 19-21 (chains, chainrings), 24-28, 33-35 (stems, bars, hubs,
  pedals, saddles), 36-42 (seatposts incl. Swing sprung post, Colnago / Gios-Torino / Coppi
  finish parts, derailleurs, shifters), 45-50 (tyres), 55-64 (headsets, BBs, cranksets,
  freewheels, Regina CX), 74-75 (Shimano Dura-Ace AX / 600 AX), 87, 90-91 (BMX), 152-158 (Simplex
  Selematic advert, Sachs-Huret Commander / Orbit "Voran-Ankündigung", Metzeler Rollux, Ideale 75
  Mixte, Regina Futura "NEU"), 161 (weight table). Skipped 17, 54, 65, 150 (how-to / spokes).
- Changed (source_ref -> this source):
  - year_to -> 1982 (48 rows), mostly rows the 1981 pass dated: 475, 501, 1082 Universal Super 68,
    1340, 1813, 1814, 1862, 2182 Regina Extra Oro, 3097, 3384, 4648 Simplex Selematic 5, 5104
    Mavic OR 7, 5531, 5599 Ideale 2001, 5605 Ideale 2004, 5816, 6731 / 6733 Clement 50 / 70, 6921,
    6947, 7475 Shimano Uniglide FG-100, 7498 Shimano FC-6210 600 EX, 8376, 9023 Wolber Team Corsa,
    9046-9049 Hutchinson, 9582 Wolber Performance Soie, 9585 Wolber W 333, 9993 Huret Super Allvit
    III, 10020 Sturmey Archer S5, 10071, and 1981 inserts 11136, 11140-11150, 11153-11155.
  - year_from -> 1982: 9770 Clement Grinta (was 1983; "NEU"), 6759 Clement Mirage Servizio Course
    (was 1983; printed "Mirage", Clementex, 240 g), 9173 3ttt A 2000 stem (was 1985; black,
    90-130), 3858 MKS 2023 Esquartz (was 1983; integrated alloy toe hook, medium / long).
  - **year_from moved later:** 2745 3ttt Aero 1980 -> 1982 (and year_to 1982): "NEU!" in 1982,
    absent from the 1981 bar range; the old value was a velobase "early 1980s" bucket. Retitled
    from "3ttt Aero - early 1980´s" to "3ttt Aero" (search_text "3ttt Aero").
  - 6753 Clement Folgore NULL/NULL -> 1982-1982, description now TX time-trial 17/18 mm, 130-150 g.
- Added brands 702 Mitsuboshi, 703 Kenda, 704 Metzeler (Tyres) and 705 Swing (Seat Posts). Added rows 11156-11162 (1982-1982,
  group NULL): Clement Corallo; Dourdoigne Italia (pro-team model) and Dourdoigne silk tubular
  (185 g, p. 15 "Seide Tergal"); Mitsuboshi Competition III and Kenda Pro Star K50 (BMX 20 x
  1.75); Metzeler Rollux (reflective sidewall); Swing suspension seat post.
- Not applied: Modolo aero brake ("NEU", c. 400 DM, preorder; no model named); Mavic gold / black
  bars (bend not given; 351 / 352 rows); Assos 16 mm aero rim (4935 vs 4936); Lanner and D.I.D
  chains; Canetti "Criterium Super Course" (9694 is the Tergal Criterium); Hutchinson Super Sprint
  vs 10010 Sprint Anticrevaison; Wolber Junior Butyl vs 9586 Junior Tubeless; the Regina CX
  sprocket tables and replacement cogs; Cobra saddles (as 1981; brand identity subsequently supported and additions applied in the [2026-11-19 Cobra review](#cobra-saddle-brand-and-versions--2026-11-19-applied)); generic axles, chainrings and
  Michelin sizes.

## Brügelmann Radsport-Shop catalogue — 1985 (Dropbox section PDFs), data_source 390, 2026-11-14

- `data_source` label "Brügelmann Radsport-Shop catalogue (1985)", country DE. Source: the
  Dropbox folder in source-hunts.md (rennrad-news thread 99574 p.5 #92), files "B 85 1" to "B 85 7"; cover
  "AUSGABE 1985". Two-page spreads at 150 ppi (~2450 x 1750; jpx, no text layer); read as
  left / right halves (~1224 px) at native resolution, below the skill's 1800 px but not
  upscalable. Read sections 1 (pp. 6-53: special finishes / ICS gold, tyres, brakes), 2 (pp.
  58-115: pedals, rims, chains, Shimano groups, stems / bars, hubs, saddles, seatposts,
  derailleurs, shifters), 3 (pp. 122-149: headsets, cranksets, BBs, chainrings, freewheels,
  wheels) and 6 (pp. 284-305: BMX / MTB). Sections 4 (frames), 5 (clothing, nutrition) and 7
  (complete bikes) out of scope.
- Maker codes are still rarely printed (Shimano BL-MX20 / BR-MX10 / PD-MX, Sugino HP-G2 / CT 175,
  TTT "Modell 2000"); the MTB pages print none (no SR MTB-, Kusuki, ITM or H.L. codes).
- Bars / stems (pp. 78-81, for the TODO handlebar hunt): 3ttt Merckx "Modello Competizione"
  400-440, Merckx Superleggero 250 g 400 / 420 / 440, Tour de France 405 / 415, Aerodinamica
  (Gimondi form), Randonneur, Jugend 360 / 380, leather-sewn Merckx bars (black / white, "fits
  black TTT stem" 2000, also on p. 79 at 145 DM); Cinelli Poulidor 425, Merckx 425 / 445, round
  track bar 415; stems 3ttt Campione 60-140 / Campione-Super 80-140 / 2000 (black, "aufklappbar")
  / "Vorbau mit Idee" (new, unnamed), Cinelli Strada 70-140 / Strada-Extra 95-145 (and black),
  SR 70 / 110 / 130 (~200 g). No ITM, no Franco Belge, no Almarc name. The Cinelli VIP-Garnitur
  (59116-79CVIP, 248.50 DM) is a 3-piece set, not a single component.
- Changed (source_ref -> this source):
  - year_to -> 1985 (40 rows): 11153 Nadax Favorit, 475 Universal CX, 501 Weinmann Carrera
    lever, 1100 Weinmann HP Turbo (1980), 11149 / 11150 CLB Titanium / Italia, 1177 Zeus 2000
    brake (1980), 7929 Weinmann Vainqueur 999 (610 / 750), 7539 Shimano BL-MX20 and 1014 BR-MX10
    (BMX), 1340 Zeus 2000 chainring, 1862 TA Criterium (also tandem / Schüler), 8811 Stronglight
    104, 7475 Shimano Uniglide FG-100, 10020 Sturmey Archer S5, 3109 TA 3900 headset, 1244
    Campagnolo 753/A Super Record chainring, 8842 TA 1205 cross ring, 7530 Shimano PD-MX10, 9993
    Huret Super Allvit III (sold as Sachs-Huret), 4648 Simplex Selematic, 11154 / 11155 Selle
    Royal 2261 / 2068, 11162 Swing, 7541 Shimano SP-MX20, 8899 Sugino HP-G2, 6933 Wolber Record
    Route, 9047 / 10071 / 9049 Hutchinson, 9770 Clement Grinta, 6921 Wolber Liberty, 9029 Wolber
    Competition, 11145 / 11147 Dourdoigne, 11161 Metzeler Rollux, 11159 Mitsuboshi Competition
    III, 11140 / 11143 Continental Sonderklasse 175 / 165, 6788 Continental Super Sport (20 / 23 /
    25 / 28-622).
  - 6816 Hutchinson VIT 180 NULL/NULL -> 1985-1985. 11145 description notes the 1985 name
    "Service Course".
- Added: 11163 Continental Olympic (27 x 3/4 aramid tubular, 110 g), 1985-1985.
- Not applied: Brügelmann house tubulars (225 / 280 / 315 GR, Touring; house brand, cf. the
  no-house-brand-tyres rule); Pariba folding clinchers and Thun Coronado 2 crankset (brands not
  in DB, low value); Lanner / D.I.D / Sedis / Regina Superstar chains; Simplex Randonnée /
  Touring rear derailleurs (no code); Araya titanium tubular rim (vs 4920 Tita Ace); Mavic "P"
  tubular rim; Ideale Modell 4; Cobra saddles (as 1981-82; brand identity subsequently supported and three versions attested here in the [2026-11-19 Cobra review](#cobra-saddle-brand-and-versions--2026-11-19-applied)); Campagnolo / Colnago / ICS special
  finishes; Triomphe / Victory / Record / Dura-Ace / Campagnolo 50th groupsets (no group category);
  Clement Ritmo (still not tied to 6767 Ritmo LTX 55).

## Brügelmann Radsport-Shop catalogue — 1988 (Dropbox section PDFs), data_source 391, 2026-11-14

- `data_source` label "Brügelmann Radsport-Shop catalogue (1988)", country DE. Source: the same
  Dropbox folder as 1985, files "B 88 1" to "B 88 12"; cover "Ausgabe 1988" (also "NEU '88" on
  Deore XT, "ab April 1988 lieferbar"). 150 ppi spreads read as halves, as 1985. Read sections 1
  (groups, special finishes, wheelsets), 2 (tyres), 3 (brakes, levers, hubs), 4 (disc wheels,
  rims, chains, bars / stems), 5 (hubs, pedals, saddles, seatposts, derailleurs, shifters,
  headsets, cranksets, BBs, chainrings), 6 (freewheels, sprockets) and 9 (BMX). Sections 7
  (frames), 8 (tools), 10-12 (clothing, care, complete bikes) out of scope.
- Bars / stems (pp. 116-123, for the TODO handlebar hunt): 3ttt Moscow time-trial bar (305 g,
  "neu"), Merckx form 370-460 (460 "neu"), Superleggero 405-460, Aero oval, leather bar (with
  black Typ 2000 stem, 145 DM; bar alone 86 DM), French / Dutch sport bars; stems 3ttt Campione,
  Elegance, 2000, length-adjustable; Cinelli Strada / Strada-Extra ("with black dot"), Poulidor,
  track bar, unnamed 420 / 440 bar, VIP set; ATAX "Profi" (25 mm sleeve) and "Profi de Luxe"
  (wide sleeve), retailer labels, not inserted; SR Sakae drilled Merckx bar (in-bar brake cables,
  420 / 440) sold as a set with a Royal-2 stem, 88.95 DM (not tied to 7884 RY-978); unbranded MTB
  bars / stems Rocky, Speedy, Highway, Country (Cr-Mo / Dural, 21.2 / 22.2 quills). Still no ITM,
  H.L. or Kusuki.
- Changed (source_ref -> this source):
  - year_to -> 1988 (51 rows): 11153 Nadax Favorit; Weinmann levers 7769 No. 144, 7933 No. 162,
    493 No. 185 (Carrera), 8655 No. 188-2; Modolo 882 Race (1980), 890 Team, 870 Kronos; 11149 /
    11150 CLB; 8842 TA cross ring; 1381 Regina Extra 50 Record and 8765 Sedis Sedisport chains;
    1862 TA Criterium; 1883 Stronglight 107; 2169 Regina CX / CX-S; 7475 Shimano Uniglide; Sachs
    Huret 4419 Jubilee AR 44.1 D, 4402 New Success AR 47.1 D, 8960 AV 66.3 D, 8963 MA 85.2 E, 8958
    Rider AR 46.1 T; 8498 Sachs Orbit; 10020 Sturmey Archer S5; 7243 Maillard Atom Sport hub;
    7530 Shimano PD-MX10; 8153 Mavic Bleu SSC; 5136 Nisi Laser; 5656 / 5657 Ideale 90; 9173 3ttt
    A 2000; 5979 Campagnolo 1012/3 bar-end shifters; 2822 Cinelli VIP-Set (1980 -> 1988; bare
    description rewritten); tyres 6758 Clement Grifo Neve, 6762 Clement Paris-Roubaix, Hutchinson
    9045 Supersprint / 9046 GTX-80 Corsa / 9047 / 9049 / 10071 / 6816, Wolber 6911 Corsa 80 /
    6914 Cross Super / 6918 Invulnerable 84 / 6920 Leader 80 / 6921 Liberty / 6940 Strada 80,
    Continental 6788 Super Sport / 6789 SuperSport Ultra, 11159 Mitsuboshi, 11161 Metzeler Rollux.
  - 6915 Wolber Cross Super X NULL/NULL -> 1988-1988.
- Added: 11164 3ttt Campione stem (1985-1988; also listed in the 1985 catalogue p. 80) and 11165 3ttt
  Elegance stem (1988).
- Not applied: Weinmann Delta Pro (vs 1098 Delta 531 Pro, read uncertain); Maillard Dural /
  Helicomatic / Compact freewheels (names do not tie cleanly to 2113 / 2114 / 8131); Regina CX /
  BX / America kits and sprocket grids; Shimano FF and Biopace (heading-only brand); Sachs Huret
  Rider front AV 69.1 T (DB has AV 62.1 T); Campagnolo Record chainring "designs" (frame-maker
  engraved finishes); disc wheels and "Hit" wheel packages; Brügelmann house tubulars and
  Pariba; groupsets.

## Brügelmann Radsport-Shop catalogue — 1977 (rennrad-geschichten.de), data_source 392, 2026-11-14

- `data_source` label "Brügelmann Radsport-Shop catalogue (1977)", country DE. Source: same page
  as the 1981 entry, "Brügelmann 1977.pdf" (84 pp, A4, all upright; the OCR text layer is
  garbage). Cover "1977"; p. 3 "Katalogdruck im Dezember 1976", "unseren 77er Katalog"; p. 5
  header "1977/8"; p. 21 weight table "Stand im Sommer 1976".
- Components: pp. 5 (BBs), 8-9 (brakes, levers), 12 (rims), 17-19 (chains, chainrings), 22-23
  (bars, stems), 25-26 (hubs, pedals), 30-33 (saddles, seatposts, derailleurs, shifters), 37-39
  (tyres), 41 (headsets, bottom of page), 42-46 (BBs, cranksets, freewheels, sprockets, wheel
  grid), 82 (lightweight parts). Out of scope: lights, bottles, racks, frames, tools, trainers,
  clothing, nutrition, books, complete bikes.
- Bars (p. 22): Pivo Standard (steel / alloy) and Profi (25 clamp); Cinelli Giro 405 / 425,
  Merckx 425 / 445, Poulidor 425, track Pista-19 and Sprint-18; 3ttt Anquetil / Tour de France
  400-430, Merckx 420, Coppi (large deep drop) and Motta (short deep drop) 420, Record
  Superleggero 400 / 420, Junior 380, Schüler 390. Consistent with the 1975-76 bar list in source-hunts.md.
- Changed (source_ref -> this source):
  - year_from -> 1977 (19 rows; catalogue earlier than prior first attestation): 1398 Sedis Gold
    (Sedicolor Gold; was 1978), 4501 Shimano DA-100 Dura-Ace black RD (was 1978), 5605 Ideale 2004
    (was 1979), Continental Sonderklasse 11140 / 11141 / 11142 / 11143 (175 / 220 / 240 / 165, all
    were 1981), Wolber 6914 Cross Super / 9029 Competition / 6919 Junior (Junior-Butyl) / 9028
    Performance / 9026 Special Course (all were 1978), D'Alessandro 11135-11139 Leone / Mondiale /
    Specialissimo / Super / Criterium Seta (were 1981), Dourdoigne 11146 Paris-Roubaix / 11147 Grand
    Prix des Nations (were 1981).
  - year_to -> 1977: 9319 Cinelli 18 Pista (1975; "Sprint-18"), 9082 Cinelli 19 Track (1976;
    "Pista-19"), 8794 Simplex AV 3 Super-Competition front derailleur (1974), 6646 Pivo
    Professional stem (1975; p. 23 "Profi" stem with Allen internal clamp, 85 / 100 / 120 mm).
- Added: 11166 3ttt Coppi (1977-1982; also Brügelmann 1981 p. 25 and 1982 p. 25), 11167 3ttt
  Motta (1977), 11168 Pivo Standard bar (1977) and 11169 "Pivo Professional (bar)" (1975-1977;
  titled with "(bar)" because the stem 6646 shares the name; search_text "Pivo Professional"; 1977 p. 22 "Profi", long reinforced clamp section, 25 clamp;
  year_from from the 1975 Brügelmann p. 22 "PIVO PROFI-Rennbügel mit langer Manschette" read on
  2026-11-13, see TODO.md; best match for the 1975 Motobecane "Pivo Professional" spec). Pivo
  Standard is steel or aluminium, 25 clamp. Other Pivo rows: 2904 deep drop bar, stems 6634-6646.
- Not applied: Weinmann "Super" centre-pull / sidepull sets (vs 1147 734 Super, 1979); Sedis Delta
  chain (vs 1402 Sedisport Delta, 1980); Maillard Course Dural and Regina Extra Criterium /
  Standard freewheels; Huret Eco (vs 4276 Duopar Eco, 1980; front / rear unclear); Simplex Prestige
  groups (DB rows are 1960s versions); Mavic "Titan blau" tubular rim (subsequently identified with the existing blue offering in the [2026-11-19 review](mavic.md#brügelmann-titan-and-bleu-ssc--2026-11-19-applied); earlier dating applied and validated); Fiamme "Leggerissimo";
  Canetti Cross (vs 9350 Cross 160); Wolber Pro / Strada-Butyl / Corsa-Butyl; Pivo Course stem;
  Ideale titanium-frame saddles; generic BBs, axles and chainrings.

## Brügelmann Radsport-Shop catalogue — 1978 (rennrad-geschichten.de), data_source 393, 2026-11-14

- `data_source` label "Brügelmann Radsport-Shop catalogue (1978)", country DE. Source: same page
  as the 1981 entry, "Brügelmann 1978.pdf" (92 pp, all upright, no text layer). Cover "1978"; p. 3
  "Katalogdruck im Dezember 1977", "78er Katalog"; p. 5 header "1978/9"; p. 80 "ab Februar 1978".
  p. 23 weight table still "Stand im Sommer 1976" (reused from 1977; skipped).
- Components: pp. 5, 8-9, 12, 19-21, 24-25, 27-28, 32-35, 40, 42-43, 47-51, 58, 81 (Colnago finish),
  90. Skipped 13 (finish surcharges), 14 (tyre fitting), 23, 36-37 (cables, adjustment text).
- Bars (p. 24) as 1977 but without the 3ttt Motta; Pivo Standard / Profi and Profi stem still listed.
- Changed (source_ref -> this source):
  - year_to -> 1978: 433 Shimano M-140 / MA-100 Dura-Ace lever (1977), 8794 Simplex AV 3
    Super-Competition, 9319 Cinelli 18 Pista, 9082 Cinelli 19 Track, 11168 Pivo Standard, 11169
    Pivo Professional (bar), 6646 Pivo Professional stem (all 1977).
  - year_from -> 1978: 11149 CLB Titanium (was 1981; "490 g only, with Duralinox cables"), 3152
    Tange LV-11 Levin headset (was 1980), 11144 / 11145 Dourdoigne 245 g / 210 g tubulars (was 1981;
    printed as "45" / "10" with waffle, groove or check tread).
  - year_from -> 1977: 11157 Dourdoigne Italia (was 1982): p. 43 calls it "the race tyre of the 1977
    season"; 11148 Dourdoigne Championnat du Monde (track) (was 1981), on the user's call that the
    1977-78 "Seide extra-leicht" silk time-trial / track tubular (c. 120 g; 1977 p. 37, 1978 p. 40)
    is the same tyre; description now records the earlier name.
- Added: 11170 D'Alessandro Cronometro (time-trial tubular, white road protector, 180 g), 1978.
- Not applied: Maillard Course-Dural, Regina Extra Criterium / Standard
  freewheels; Huret Eco; Simplex Prestige (1960s rows); Sedis Delta; Sakae racing crankset (vs
  7873 SAX-5RG); Canetti Cross; Wolber W/20 (vs SL 20); the Italian Ergal headset (no maker).

## Brügelmann Radsport-Shop catalogue — 1979 (rennrad-geschichten.de), data_source 394, 2026-11-14

- `data_source` label "Brügelmann Radsport-Shop catalogue (1979)", country DE. Source: same page
  as the 1981 entry, "Brügelmann 1979.pdf" (100 pp, all upright, no text layer). Cover and p. 5
  header "1979"; text "Saison 1979"; no print date found.
- Components: pp. 5, 8-9, 12, 19-21, 24-25, 27-28, 32-35, 40-43, 47 (headsets only), 48-51, 62,
  85 (Colnago finish), 94. Skipped 13 (finish surcharges), 37 (adjustment text; a Shimano
  "EX-Kassetten" teaser without prices).
- Bars / stems (pp. 24-25): Cinelli Giro, Poulidor, Merckx 425 / 445, Pista-19, Sprint-18; 3ttt as
  1978 (Coppi still listed); Cinelli Corsa and Record stems ("limited supply, T.T.T. substituted");
  no Pivo bars or stems (Pivo rows stay ending 1978).
- Changed (source_ref -> this source):
  - year_to -> 1979: 8794 Simplex AV 3, 9319 Cinelli 18 Pista, 9082 Cinelli 19 Track, 6162 Shimano
    L-284 Dura-Ace double lever, 11170 D'Alessandro Cronometro (all 1978), 6810 Hutchinson Krono
    Milano (1978; the 1979 "Krono" is hand-made 210 g, matching 6810 rather than 9267 Krono's silk
    180 g; the 1981 pass moved 9267 to 1981 on a similar 210 g "Krono" line; see the [2026-11-19 attribution review and applied corrections](#hutchinson-krono-attribution--19791981-versus-1985-read-only-review-2026-11-19)).
  - year_from -> 1979: 2120 Maillard 700 Sprint (was 1980), 9585 Wolber W 333 (was 1981), 9286 Selle
    Royal Contour (was 1981; "steel frame, 350 g") and 5531 Super Contour (was 1981; "only 220 g").
- No inserts.
- Not applied: Mavic "Titan" blue / grey tubular rims (also 1977; 395 g; the former no-match assessment is superseded for blue by the [2026-11-19 review](mavic.md#brügelmann-titan-and-bleu-ssc--2026-11-19-applied); grey remains unassigned); Sedis Delta;
  Maillard 700 Compact (name only "Maillard"); Huret Eco; Simplex Prestige and Regina Extra groups;
  Campagnolo Record / Simplex Criterium shifters (DB rows are later or earlier versions); Canetti
  Cross; Wolber W/20; Colnago-finish parts.

## Brügelmann Radsport-Shop catalogue — 1980 (rennrad-geschichten.de), data_source 395, 2026-11-14

- `data_source` label "Brügelmann Radsport-Shop catalogue (1980)", country DE. Source: same page
  as the 1981 entry, "Brügelmann 1980.pdf" (108 pp, no text layer; p. 62 hub chart rotated 90°).
  Cover "1980" with "Gültig bis Neuausgabe 81 - etwa März 1981" (read from a thumbnail); p. 107
  weight table "Stand im Sommer 1979"; text "in der Saison 1980".
- Components: pp. 7, 9, 12-13, 19-21, 24-28, 31 (Gios-Torino parts on the pumps page), 32-35,
  40-43, 46 (headsets), 47-51, 62. Skipped 14-15 (lightweight small parts), 37-39 (Dura-Ace group
  illustration, exploded diagrams), 44, 103 (finish surcharges), 108 (back cover).
- Bars / stems (pp. 24-25): the "ALMARC" box is already in 1980 (3ttt Merckx bar on Rekord-78 stem,
  leather-wrapped, black; TODO.md dates it from 1981 p. 24); 3ttt Coppi still listed; generic
  French bar "Pivo, Guidon, Philippe" and a dural "Profi" bar with engraved centre sleeve (no maker
  printed; not tied to 11169).
- Changed (source_ref -> this source):
  - year_to -> 1980: 8794 Simplex AV 3, 6162 Shimano L-284 Dura-Ace levers, 11170 D'Alessandro
    Cronometro, 6810 Hutchinson Krono Milano (all 1979), 2506 / 2507 Shimano E-404 / EA-100
    Dura-Ace front derailleur and black version (1979), 433 Shimano M-140 / MA-100 Dura-Ace lever
    (1978), 1777 Shimano FFS front freewheel crankset (1978; listed as "FFS Alu / Stahl").
  - year_from -> 1980: 11153 Nadax Favorit and 11150 CLB Italia (both were 1981).
- Added brand 706 Almarc (Handlebars) and row 11171 "Almarc leather-covered bar", 1980-1981 (1980
  p. 24 and 1981 p. 24 "ALMARC" boxes: hand-sewn leather on a 3ttt Merckx bar, sold with a 3ttt
  Rekord-78 stem, 90-130 mm; 99.90 DM in 1981). Kept apart from brand 491 "Cerchi Almarc" (rims
  only, row 4974); same firm not confirmed. The 1986 Cinelli spec "Cinelli Almarc leather covered"
  (bike_specs, Ten Speed Drive) is the natural link target; not linked here.
- Not applied: Shimano FFS bottom brackets (vs 7144 / 7145, the Dura-Ace / 600 BB sets); Shimano
  PPS click / double levers (vs 6152 Adamas AX and 7157 PPS-FH, both 1981); Campagnolo GS braze-on
  front (vs 7007 Record braze-on); Campagnolo Super Record brake (4061 v2 from 1983; v1 presumably
  covers); Nisi Speciale (vs 9225 Pista Speciale); Wolber Performance / Junior (covered by 9028 /
  6919); Simplex Prestige groups; Canetti Cross; SunTour Ultra-6 / Ultra-7 freewheels and Sedis
  Ultra-6 chain (already covered).

## Brügelmann Radsport-Shop catalogue — 1976 (rennrad-geschichten.de), data_source 396, 2026-11-14

- `data_source` label "Brügelmann Radsport-Shop catalogue (1976)", country DE. Source: same page
  as the 1981 entry, "Brügelmann 1976.pdf" (84 pp, all upright; partial garbled OCR layer). Cover
  "1976"; p. 3 "Katalogdruck im Dezember 1975", "Katalog 1976"; p. 5 header "1976/7".
- Components: pp. 5, 8-9, 12, 17-19, 22-23, 25-26, 30-33, 37-39, 41 (headsets), 42-45, 52 (wheel
  grids only), 82. Skipped 68 (Mavic hub advert), 72 (Zeus 2000 Titanium bike), 80 (Dura-Ace
  advert), 83 (small parts); complete derailleur groups not transcribed.
- Bars (p. 22): Pivo Standard (steel / alloy) and "Pivo Profi 62207-PPRO, Rennbügel mit langer
  Manschette", 25 clamp (confirms the TODO.md 1976 reference for 11169); 3ttt Coppi and Motta;
  Cinelli Merckx 425 / 445 and others as 1977. Simplex Super L.J. "Tour 1975 winner" (gold "as
  ridden by Thevenet").
- Changed (source_ref -> this source): year_from -> 1976 (20 rows, all previously 1977 from the
  1977 pass or its predecessors): 1398 Sedis Gold, 11168 Pivo Standard, 11166 3ttt Coppi, 11167
  3ttt Motta, 4501 Shimano DA-100 Dura-Ace black RD, Continental Sonderklasse 11140 / 11141 /
  11142 / 11143, Wolber 6914 Cross Super / 6919 Junior / 9026 Special Course, D'Alessandro
  11135-11139, Dourdoigne 11146 Paris-Roubaix / 11147 Grand Prix des Nations / 11148 Championnat du
  Monde (track; listed as "Seide extra leicht 120g").
- No inserts, no year_to changes.
- Not applied: Sedis Delta (vs 1402 Sedisport Delta 1980); Maillard Course-Dural; Campagnolo Record
  hubs / headset / seatpost / shifters (matcher paired them with C-Record rows; the Nuovo / Record
  rows already span 1976); Nisi Campione del Mondo (vs 9229, a 1985 code); 3ttt "Titan saddle" (vs
  8851 3ttt 50/1); Wolber Corsa / Pro / Strada (no clean row); Simplex Prestige and Regina Extra
  groups.

## Brügelmann Radsport-Shop catalogue — 1975 (rennrad-geschichten.de), data_source 397, 2026-11-14

- `data_source` label "Brügelmann Radsport-Shop catalogue (1975)", country DE. Source: same page
  as the 1981 entry, "Brügelmann 1975.pdf" (84 pp). The whole scan is upside down (every page
  checked needed 180°; a thumbnail triage wrongly called 12 pages upright); pages were rendered and
  rotated 180° before reading. Cover "1975", "6 Monate stabile Preise"; no print date.
- Components: pp. 5, 8-9, 12, 17-18, 22-23, 25-27, 30-33, 37-39, 41-43, 45, 80 (Campagnolo Super
  Record picture page, codes 1052/1, 4061, 1049/A, 4030, 4031 as labels, no prices). Nothing
  orderable on 19-20, 34-35, 40, 51-52, 83.
- Bars (p. 22): "Pivo Profi" with long sleeve (5380/PP, 25 clamp, 9.80 DM, no width; the direct
  source for 11169's 1975 start), Pivo Standard steel / alloy, 3ttt Coppi (5380/TC, deep bend, 420)
  and Motta (5380/TG, short reach, 420), plus Cinelli and other 3ttt bars as 1976-77.
- Changed (source_ref -> this source):
  - year_from -> 1975 (24 rows): 1398 Sedis Gold; 6733 Clement 70 (was 1976); 6766 Clement Record
    Seta Extra (was 1977; "Record Seide Extra"); 6810 Hutchinson Krono Milano (was 1976); Wolber
    6914 Cross Super / 6919 Junior / 9026 Special Course; 9046 Hutchinson 80-GTX Corsa ("GT X 80
    Corsa"); 8376 MAFAC 2000 racing lever; D'Alessandro 11135-11139; Continental 11140-11143;
    Dourdoigne 11146 / 11147 / 11148 (p. 37 "Silk extra light" taken as 11148's "Seide extra
    leicht"; the p. 37 "Track 140 / 160" lines not tied); 3ttt 11166 Coppi and 11167 Motta; 11168
    Pivo Standard (all were 1976 unless noted).
  - year_to -> 1975: 6077 Huret Jubilee 1567 double lever (was 1973).
- No inserts.
- Not applied: Mafac 2000 / Racer and Shimano Dura-Ace centre-pull (velobase 1970 / 1952-69 rows,
  version not identifiable); Huret Jubilee versions (4303 first version already spans 1975; 4304 /
  4306 versions not identifiable); Simplex Criterium (vs 2566 LJ A200, 1977) and Prestige groups;
  Zeus "Weltmeister" names (Spanish catalogue names in the DB); Sugino square-taper BBs (vs 8888 /
  8889); Hutchinson Cross (vs 9049 Cross TR); Wolber Pro / Corsa / Strada / Renforce (no clean
  row); Cinelli Pista / Sprint stem (vs 7097 2A and 6501 Pista Steel); Campagnolo Super Record p. 80
  (picture labels; Super Record rows already start 1974).

## Brügelmann Radsport-Shop catalogue — 1974 (rennrad-geschichten.de), data_source 398, 2026-11-14

- `data_source` label "Brügelmann Radsport-Shop catalogue (1974)", country DE. Source: same page
  as the 1981 entry, "Brügelmann 1974.pdf" (80 pp, all upright). Cover "1974"; p. 3 "Radsport-
  Katalog 1974"; p. 8 Shimano brakes "Lieferzusage per Februar 74" and the Campagnolo brake
  "im Herbst '73 vorgestellt"; p. 24 "ab Mai 1974 lieferbar"; p. 49 "Der Preis gilt ab 1. Februar
  1974". So printed late 1973 for the 1974 season.
- Components: pp. 5, 8-9, 12-13, 17-18, 22-25, 28-30, 33, 35-37, 39-43. Skipped 7 (dynamo wheels),
  19, 31-32 (diagrams), 50 (wheel grids), 78-79 (B-72 small parts / weights).
- "NEU" markers (first-sale evidence, kept here; not used to move dates later): MAFAC 2000 lever
  (p. 9), Zeus 2000 brake levers (p. 9, no price; the p. 8 Zeus 2000 brake "price not yet fixed"),
  Mavic Légère-Gold and Extra Légère-Gold rims ("1974 NEU", p. 12), gold-anodised French bar (p.
  22), French racing stem (p. 23), Perrin Maillard hubs and Zeus superlight track hubs ("ab Mai
  1974", p. 24), time-trial plate pedal (p. 25), 3ttt patent seatpost (p. 29), Simplex Super L.J.
  "Modell 74 Gold" ("GANZ NEU", p. 30), Dourdoigne GP des Nations reinforced (p. 37), Stronglight
  S5 headset ("NEUES MODELL", p. 39). Campagnolo Nuovo Gran Sport and Super Record rear mechs (p.
  33) "new model, not yet deliverable", c. 45 / 125 DM; Shimano Dura-Ace crankset not yet
  available (p. 40).
- Bars (p. 22): 3ttt Coppi (4384/C) and Motta (4384/M), Pivo Profi (4382, 4382/1), Pivo Standard
  ("Pivo o.ä."), Cinelli, a gold-anodised French bar (NEU).
- Changed (source_ref -> this source): year_from -> 1974 (23 rows; all were 1975 unless noted):
  8376 MAFAC 2000 lever ("Neu"), Clement 6733 70 / 6745 Criterium, Wolber 6919 Junior / 9026
  Special Course / 9029 Competition (was 1977), 9085 Lyotard 45, D'Alessandro 9329 Silk
  Imperforabile and 11136-11139, 9344 Canetti Tour de France, Continental 11140-11143, Dourdoigne
  11144 / 11145 handmade tubulars (were 1978) and 11147 Grand Prix des Nations, 3ttt 11166 Coppi /
  11167 Motta, 11168 Pivo Standard.
- No inserts, no year_to changes.
- Not applied: Zeus 2000 lever 502 (1970, last set by Zeus-104 1980) and brake 1177 are "NEU" /
  "price not fixed" in 1974, which argues for a later year_from, but 1972-73 Brügelmann and the
  Zeus notes have not been checked for it; Stronglight S5 3122 (1973, from Stronglight no. 22,
  1974) left as is despite "NEUES MODELL"; Simplex Super L.J. 74 Gold (vs undated 4649 SLJ SX660);
  Mavic Gold rims (no separate rows); Hutchinson Milano-San Remo (10071 spans 1974); Huret, Simplex
  Criterium / Prestige and Campagnolo Record / Nuovo Record versions; Wolber Pro / Corsa / Strada /
  Renforce; Maillard Atom (7233 / 7234 from 1978; "Atom Standard" name only).

## Brügelmann Radsport-Shop catalogue — 1973 (rennrad-geschichten.de), data_source 399, 2026-11-14

- `data_source` label "Brügelmann Radsport-Shop catalogue (1973)", country DE. Source: same page
  as the 1981 entry, "Brügelmann 1973.pdf" (80 pp, all upright). Cover and p. 5 "1973"; p. 3 "für
  1973 die festen Zusagen"; pp. 17-18 "Ende Februar 1973 lieferbar"; p. 64 "Record '73"; some
  1972 references (p. 13 "lieferbar ab März/April 72", p. 80 letter).
- Components: pp. 5, 8-9, 12-13, 17-18, 22-25, 28-30, 33, 35-37, 39-43, 68 (wheel grids only).
- Zeus: no Zeus 2000 brake or lever on the full brake (p. 8) and lever (p. 9) pages; Zeus 2000
  5- and 6-speed freewheels are "NEU" (p. 42); other Zeus parts under "Weltmeister" names. MAFAC
  2000 brake "NEU, Liefertermin und Preis bei Katalogdruck noch unbestimmt" (p. 8). Other "NEU":
  Mavic Extra Golden rim ("NEU 1972/73"), alloy wire-on rim, chromed Sedis chains, Pivo Profi bar,
  Pivo stems "NEUES MODELL mit Inbus-Innenklemme".
- Bars (p. 22): Pivo Profi 3382 (25 clamp, NEU) and 3382/cpl bar + stem; 3ttt Coppi 3384/C and Motta
  3384/M (420); Cinelli Merckx, Poulidor, Pista, Sprint; 3ttt Anquetil, Record SL.
- Changed (source_ref -> this source):
  - year_from -> 1973 (27 rows, all were 1974-75): Clement 6733 70 / 6745 Criterium; Wolber 6919
    Junior / 9026 Special Course / 9029 Competition / 9021 Route Renforce Noir / 6914 Cross Super
    ("Stollen-Super"); 9085 Lyotard 45; 9329 D'Alessandro Silk Imperforabile and 11135-11139;
    Canetti 9344 Tour de France / 9347 Paris-Tours / 9694 Criterium / 9697 Sport / 9349 100;
    Continental 11140-11143; 11147 Dourdoigne GP des Nations; 3ttt 11166 Coppi / 11167 Motta; 11169
    Pivo Professional (bar) (was 1975; "Pivo Profi", NEU).
  - year_to -> 1973: 5317 Brooks B17 Competition (1970).
  - **year_from moved later, 1970 -> 1973:** 1177 Zeus 2000 brake and 502 Zeus 2000 brake lever
    (old value 1970, a velobase bucket; 502 last set by Zeus-104, 1980). Absent from Zeus-101
    (1970) and from the full Brügelmann 1973 brake / lever pages; Brügelmann 1974 marks the lever
    NEU and the brake "price not yet fixed"; earliest attestation is the 1973 Zeus bike catalogue
    (bike_specs `1973_zeus_spec.csv`, Z 77 and Z 59 brakeset "Zeus 2000", both linked to 1177; no
    COMPONENT_OVERRIDES entries). Not moved to 1974 because of that 1973 attestation.
- No inserts.
- Not applied: Pivo Professional stem 6646 (1970-1978; "NEUES MODELL" in 1973 suggests a later
  start, but the stem name may predate the Allen-clamp model); Mavic Extra Golden / Légère /
  Montlhéry / Sport rims (names do not map cleanly to 9104 / 5091 / 5109); Huret Jubilee and
  Svelto, Simplex Criterium / Prestige and Campagnolo Record / Valentino / Gran Turismo versions;
  Canetti Cross (vs 9350 Cross 160); Wolber Pro / Corsa / Strada; MAFAC 2000 / Racer brakes
  (velobase 1970 rows, version not identifiable).

## Brügelmann Radsport-Shop catalogue — 1972 (rennrad-geschichten.de), data_source 400, 2026-11-14

- `data_source` label "Brügelmann Radsport-Shop catalogue (1972)", country DE. Source: same page
  as the 1981 entry, "Brügelmann 1972.pdf" (76 pp, all upright). No year on the cover; dated from
  the contents: p. 5 header "1972", p. 12 "1971 = 3 neue Modelle; 1972 = das gleiche Programm",
  "lieferbar ab Febr./März 1972" (p. 58), "etwa März/April 72" (p. 47), Saison-Einführungspreis
  "bis zum 30.6.1972" (p. 66), Merckx 1971 world champion (p. 35). p. 75 is a later Continental
  advert insert (skipped).
- Components: pp. 5, 8-9, 12-13, 17-19, 22-25, 28-33, 35-37, 39-43, 68 (wheel grids only).
- No Zeus 2000 parts anywhere (Zeus only as Weltmeister hubs, Strasse / Bahn pedals, patent
  seatpost, "Profi" derailleurs and groups, Rennsteuersatz); no "Pivo Profi" (only generic "Pivo
  o.ä." bars), consistent with its 1973 "NEU"; 3ttt Coppi (2387, 40 / 42 cm) and Motta (2388, 40 cm)
  listed. No D'Alessandro tubulars.
- Changed (source_ref -> this source): year_from -> 1972 (23 rows, all were 1973 unless noted):
  Clement 6733 70 / 6745 Criterium / 6766 Record Seta Extra (was 1975; "Record mit weissem
  Protektor"); Wolber 6914 Cross Super / 6919 Junior / 9021 Route Renforce Noir / 9026 Special
  Course / 9029 Competition; 9085 Lyotard 45; Canetti 9344 Tour de France / 9347 Paris-Tours /
  9349 100 / 9697 Sport; 10974 Cinelli Nitor ("Unica / Nitor Patent-Sattelstütze"); Continental
  11140-11143; Dourdoigne 11144 / 11145 (245 g / 210 g; were 1974) and 11147 GP des Nations; 3ttt
  11166 Coppi and 11167 Motta.
- No inserts, no year_to changes.
- Not applied: Mavic Extra / Légère / Montlhéry / Sport rims (names do not map cleanly); Simplex
  Criterium / Prestige, Huret Svelto and Campagnolo Record / Valentino / Gran Turismo versions;
  Wolber Pro (vs 6923 Neo Pro, 1978); MAFAC Racer (velobase 1952-69 version); Sedis "Sedis /
  Peugeot" chain (vs 1398 Sedis Gold).

## Bike Nashbar catalogue — Spring 1988 (Google Drive scan, data_source 422), 2026-11-16

- `data_source` label "Bike Nashbar catalogue (Spring 1988)", country US. Source: Google Drive
  file `1a93988JbJO2Sn9v8pOBZB5U4Z4plTAdh`, linked from whentriathlonwasbetter.com/blog/bike-nashbar;
  download method in the source-hunt log (2026-11-16). 68 pages, ScanSnap scan from 2024, no text
  layer; read visually at 150 dpi (crops at 160-170 dpi for tables). © 1988 Bike Nashbar,
  Youngstown OH, the successor of Bike Warehouse (sources 246 / 315 / 360). Printed page = PDF page.
- Components: pp. 28-29 (Campagnolo Croce d'Aune group, Vetta Gel), 42-53 (shifters,
  derailleurs, pedals, cranks, chainrings, BBs, freewheels, chains, brakes, levers, saddles,
  bars, stems, seatposts), 60-61 (hubs, headsets), 63-67 (wheels, rims, tyres). House bikes with
  full spec lists: pp. 30-40 (not loaded; excluded by the user decision below). Out of scope: 1-27 clothing, shoes,
  helmets, computers, bags, trainers; 41 frames; 51 cages and bottles; 54-59 locks, lights,
  books, racks, tools; 62 pumps; 68.
- User decision, 2026-11-18: do not load Nashbar house-brand bikes. Removed the
  Spring 1988 house-bike ingestion and brand-treatment task. Manufacturer
  component evidence from Nashbar catalogues remains in scope.
- Stock numbers are retailer codes. Some carry the maker's number (SH-FD6400, SR-P5, DC-730G),
  others do not (VA-4050, SR-PD122); none is used as a part number. Retailer source: attests 1988,
  absence caps nothing; "NEW" means new to Nashbar.
- Not taken: Nashbar house rims, tyres, hubs and prebuilt wheels (UC13, US13, US14, UT17,
  UA20, UC19; Sport / Road tyres), and the HED disc wheel.
- Most Shimano, Campagnolo, SunTour, Look, Sedis, Regina, Ritchey, Michelin, Vittoria and
  Cinelli matches already cover 1988; no change.
- Changed (source_ref -> 422, 30 rows):
  - **year_to -> 1988:** 3864 MKS RX-1 (1980); 3922 SR SP-100AL / BL Silstar (1986);
    8082 Dia-Compe GX-N series (1986); 678 G-N series (1986; Dia-Compe G-400N on the Road
    Alpha / Aero Sprint); 662 Dia-Compe 983 (1980; Terra Alpha spec); 8102 AC250 Aero levers
    (1986; Road Alpha spec); 5255 Avocet Touring II and 9118 Touring WII (1983; "Model II,
    Women's or Men's Touring"); 5495 Selle Italia Lady Turbo (1980); 7887 SR WS World Custom
    (1982); 11132 Modolo Professional anatomic (1986); 8230 SR RY2 Royal 2 (1984; printed
    "Royal II", 135 mm, 290 g); 7902 SR SR-AH (1986); 4971 Campagnolo Victory Crono (1986);
    9920 Wolber Pro SP1 (1985); 6867 Specialized Touring-X, 6865 Touring-II, 6868 Turbo S and
    9909 TriCross (1983 / 1984); 9011 Sansin CE-80 Ole (1987; "Sansin Ole" hubs on the Ole bike).
  - **year_from moved earlier to 1988 (earlier attestation):** 5249 Avocet R20 GelFlex (1990;
    "GelFlex 20", Men's Racing); 5683 Vetta Gel (1990; p.27 "new Vetta gel saddles"); SunTour
    Ole 4752 RD, 2638 FD, 6289 braze-on levers, 3133 sealed headset and 1985 Sugino-made crank
    (all 1989; the p.36 Ole bike has "SunTour's New Ole Accushift System"). No year_from moved later.
  - **Undated rows dated:** 667 Dia-Compe 990 U-brake 1988-1988 (Tour XCD 6000 spec);
    3156 Tange Levin CDS 1988-1988 (Road Alpha spec); 6837 Michelin Hi-Lite Supercomp H.D.
    1988-1993. The catalogue text misprints it "Super Coupe HD", but the photo label reads
    "HI-LITE SUPERCOMP H.D. 700x20C". 1993 is from the linked 1993 Bianchi Gatorade spec.
  - **Descriptions rewritten** (old values were velobase bare titles): 3864, 667, 3156, 6837.
- Added (24 rows, 11337-11360, 1988-1988, group NULL): Vetta Maxi Anatomic, Anatomic, ATB;
  SR 519 ATB pedal, Sharktooth ATB pedal; SR SP-452 (Terra Alpha spec only), SRE-105 (4050 MTB
  spec only); MKS AR-3 (Road Alpha spec only), PB-100 (City Alpha spec only); Tange Unique (Terra
  Alpha and 4050 road specs only); Specialized Crossroads II, Ground Control S, Ground Control,
  Hardpack, Fat Boy, Turbo LS, Turbo LR, Turbo R/K4, Turbo VS, Turbo VR, Commuter II, Touring
  II K4; IRC Triathlon, All-Terrain. The fitment-only rows have short descriptions.
- Identifications made: Nashbar "500 GX / 730 GX" (500 short reach 43-57, 730 long reach 52-72,
  595 / 617 g with levers) is the GX-N series 8082 (GX500N 43-57, GX730N 53-71). The p.48 brake
  chart prints 52-72 against the 500 GX, a chart error. Possible duplicate to review: 653
  "Dia-Compe 500 GX" (velobase, 1980, bare) vs GX500N in 8082. 8230 Royal 2 = "Royal II".
- Not applied in this initial pass (later follow-ups below supersede individual cases): Vetta Racing VA-200 vs 5681 "Vetta 200" (stock code only), Touring VA-4050;
  Sugino Aero Tour vs 1964 Sugino AT (1980-82, 710 g vs 733 g, 28-44-48T; "AT" may be Aero Tour,
  unproven); Sugino 75 BB / rings and Avocet FasGrip rows (undated, stock text adds nothing
  datable); Sakae SX / FX cranks (SXC-310 / SXC-T310 / FX SLP already cover 1988; bare 1762 SX
  left); Dia-Compe Royal Gran Compe brakeset / levers 1988 (40-50 mm reach, 579 g; no RGC code
  printed); Sakae CTS, MTS ATB and MTE stems / posts, ATB bars; Regina "America" steel
  freewheel; Matrix ISO C; Wolber Type 58 / Arc-en-ciel; Cyclepro Longrider; Panaracer
  and National tubulars by weight; Swallow Montello; Sedistraveler and DID Lanner chains;
  Scott DH, Mavic SSC and Tioga bars / T-Bone stem; Sugino carbon seatpost; Specialized
  sealed hubs; Vittoria Pro L tubular (vs 6899 Pro L Slick).
- **Link pass, 2026-11-16 (user-approved):** 27 bike specs linked by guarded per-spec UPDATE, not the
  whole-catalogue back-fill. Generator overrides were added under "Bike Nashbar Spring 1988 rows".
  - Rows widened from dated bike-catalogue fitment (source_ref kept at 422): 11337 Vetta Maxi
    Anatomic 1986-1988 (1986-87 Miyata 1000 / Ridge Runner "VETTA MAXI Crosta", where crosta is the
    split-leather cover; 1987 Peugeot US Alpine Express); 11338 Vetta Anatomic 1987-1988 (1987 Miyata
    Triton / Nimbus "Anatomic Vinyl", 1987 Peugeot Normandie); 11342 SR SP-452 1985-1988 (1985 Raleigh
    Seneca "bear trap", 1986-87 Miyata Terra Runner); 11343 SRE-105 1987-1988 (1987 Miyata 215 ST /
    112); 11344 MKS AR-3 1987-1989 (1987-89 Raleigh, six specs); 11345 MKS PB-100 1987-1988 (1987 Miyata
    112 / 100); 11346 Tange Unique 1988-1989 (1989 Raleigh Ozark / Chinook "Unique Loose-Proof");
    11359 IRC Triathlon 1987-1992 (1987 Bianchi Brava, 1992 Premio).
  - Also linked: 11347 Crossroads II (1988 Raleigh Ozark II; replaces the earlier `null` override) and
    11349 Ground Control (1988 Avanti).
  - Kept unlinked with `null` overrides: Tange "Unique X Loose-Proof" (1988 Ozark II, 1989 Touriste)
    and "Unique FE" (1988 Ritmo). These are separate models, which the substring matcher had been
    auto-linking to bare Unique.
  - Not linked: IRC "Triathlete" x3 (a different name).
  - Validation: all 93 catalogues were regenerated with the old and new generator. Only 1985 Raleigh,
    1986 / 1987 Miyata and 1987-89 Raleigh changed link counts, all explained. Every new link falls
    within its row's dates.

### Nashbar remaining-component review — applied 2026-11-22

The component pages listed above were inventoried again against the current full
component inventory. Applied source 422 to Sugino 75 Carbon chainring 1329 (p.45); Cycloid
chainrings 1332/1333 and new 40T/52T 110 mm versions 12250/12251 (p.46); Bio Turbo saddle
5477 (p.50); Arc en Ciel rim 5180 (p.64, Wolber/Super Champion crosswalk in
Wolber notes); and Sedistraveler 11701 plus distinct DID Lanner chain 12252 (p.47).
Lanner is named in 1982/1983 Miyata and 1986 Peugeot/Falcon specifications;
these attest an earlier date than the Nashbar listing. Maker-only DID 1355
retains its existing track links; it is not the Lanner model. Twelve named
Lanner specs (20868/20889, 21813/21833, 15990/16011/16032/16181/16202/16224,
14937/14957) were linked from NULL to 12252; their exact maker and model names
match, including the black and silver colour descriptions. The existing
generator automatically proposes exactly these 12 links without an override.
Readback confirmed all 12 and the guarded link SQL rerun changed zero rows.
After backfill the 118-catalogue generator/live comparison returned to the
baseline: zero gained or changed mappings and the same 15 pre-existing lost
Huret proposals. Whole-database quality reported zero errors; the scoped
Sugino and DID near-duplicate reports found no candidates.
Catalogue descriptions and the SQL preserve earlier independent measurements;
the 1988 listings establish availability, not production boundaries.

Generic or ambiguous catalogue offerings require distinguishing evidence;
catalogue stock numbers do not automatically identify maker
part numbers. The whole-DB pre-change baseline showed no errors and the
generator/live comparison showed 15 existing lost proposals, no gains or
changed matches. Exact readback confirmed the six updates and three inserts;
the SQL rerun changed zero rows. Before the updates, 1329 had bare description
`Sugino 75 Carbon, Japan`, NULL dates and source 1; 1332/1333 had bare titles
as descriptions and source 1; 5477 had bare description and source 262; 5180
ended in 1985 with source 295; and 11701 ended in 1986 with source 462. Restore
those values to reverse the updates; remove the new rows only after checking
references. The temporary applied SQL was removed after validation.

### Nashbar tyre reconciliation — applied 2026-11-22

Approved and applied: six date updates and one new row.
Nashbar p.67 describes Time Trial and Criterium as width options, then offers
FasGrip 20, K20 and 30 by width; its photo explicitly shows Criterium/K20.
This supports 1988 availability of existing 6719, 6720, 6722 and 6723, whose
dates were NULL. Their independent recorded weights are preserved. Nashbar's p.66
and p.67 disagree about the K20 weight; neither figure is copied to the rows.
This is stronger combination evidence than the incomplete 1994/95 table
previously held against those IDs; it does not identify other editions.

Nashbar p.65 names Farmer John and Farmer John's Cousin together, both in
26 x 1.95 at 35–65 psi. Its pictured John has the paddle tread also shown on
[Tioga's 1989 maker page](https://cdn.shopify.com/s/files/1/0661/0501/6425/files/tioga1989_0008.jpg);
the cousin is not pictured in Nashbar but its distinctive name, pairing, size
and pressure agree with the maker page. Applied 12216/12217 date moves are
1989 to 1988, keeping their 1989 maker descriptions and year_to. This is an
earlier availability attestation, not a production-start claim. The maker
source 505 remains documented here; the last-change source is now 422.

The same Nashbar p.67 names and describes a Cycle Pro Longrider folding
skinwall tyre. It is not present by that name in the full component inventory;
added as 12253 under existing brand 337/category 23. The
unnumbered Cycle Pro touring tyre 9116 shares an S-groove with Nashbar's
touring listing, but the scan does not establish a model crosswalk, so it is
not changed. The four Avocet and two Tioga rows have no current bike links;
no loaded bike spec names Longrider, FasGrip or Farmer John. Near-duplicate
reports for Avocet and Cycle Pro produced no candidates. Before the change the four
Avocet rows had NULL dates and source 1; both Tioga rows were 1989–1989 with
source 505. Restore those values to reverse the updates; remove 12253 only
after checking subsequent references. The previous Nashbar entry's
statement that FasGrip and Longrider were not taken describes the earlier pass,
not this applied reconciliation. Readback confirmed all seven changes and a
rerun affected zero rows. Whole-database quality reports zero errors; the
Cycle Pro near-duplicate report found none. Generator/live comparison across
118 loaded catalogues matches the prior baseline: no gained or changed
mappings and the same 15 pre-existing Huret lost proposals.

### Nashbar remaining identity review — applied 2026-11-22

Approved, applied and validated the final supported changes.
Nashbar p.48 offers Sugino 75 carbon aero levers, black hoods, 240 g per pair.
The [original VeloBase record](https://velobase.com/Pages/ViewComponent.aspx?AbsPos=451&Enum=118&ID=0D0C6DEE-0E04-4CD8-9D64-81803B87F491)
is the actual source UUID of component 452 and identifies carbon levers, 229 g
with hoods but without clamps. It supports the identity while retaining both
weights and their different stated weighing bases. Nashbar p.45 identifies the
75 Road low-profile forged alloy crank, 170 mm, 42/52 with reinforced 52T
outer ring; [1973's original specimen record](https://velobase.com/Pages/ViewComponent.aspx?AbsPos=32&Enum=115&ID=5BB19FD6-E552-485B-A557-A3322394F58F)
is a 170 mm/130 BCD 75 Road double with 649 g recorded. The 1987 Nishiki Fusion
also lists a 75 crank with fibre outer ring and 75 carbon aero levers in the
[maker catalogue](https://bikalog.org/api/view/Nishiki/1987/nishiki-1987.pdf).
The applied 452/1973 changes retain existing 1980 year_from and extend year_to
to 1988; the existing decade bucket is not proof of introduction in 1980.
Nashbar p.43 lists Sugino 75 carbon shifters, braze-on and 50 g per pair;
6252 is the existing generic 75 Road-group shifter. The [contemporary model
review](https://www.disraeligears.co.uk/site/sugino_75_1987_version_derailleur.html)
describes carbon friction levers used with successive 75 rear derailleurs,
supporting the family-level match. The applied 6252 change adds its 1988
attestation and scan facts, not an inferred model code or indexing mode.

Nashbar p.67 names and photographs **Swallow Montello**, a 300 g, 23 mm,
100 psi nylon/butyl training tubular. No Swallow brand or named Montello tyre
was found in the DB; brand 767 and tyre 12254 now record the printed names
without claiming the manufacturer's corporate identity or country. No loaded
bike spec names these components. The SQL retains original values and a
reversal plan; pre-change Sugino near-duplicate report found no candidates.
Before the update 452/1973 had bare descriptions, 1980–1980 and source 1;
6252 had bare description, NULL dates and source 1. Restore those values to
reverse the updates. Remove 12254, its category association and brand 767 only
after checking later references. Readback confirmed all updates/inserts and
the SQL rerun affected zero rows; whole-database quality returned zero errors.
Generator/live comparison across 118 loaded catalogues matches the baseline:
zero gains or changed mappings, with the same 15 pre-existing Huret lost
proposals. No existing links or unlinked named bike specs were found for the
four affected components. Sugino and Swallow near reports found no candidates;
the Sugino group report lists nine previously classified configuration or
generation pairs, none involving these changed rows, and Swallow has no group.
Task-owned scan, inventories and SQL were removed after validation.

Other reviewed offerings remain at family-level or ambiguous: Sugino Aero
Tour may correspond to 1964 AT but no manufacturer crosswalk is established;
Sakae CTS/MTS/MTE, Ritchey Force I/II, Tioga Prestige/T-Bone, uncoded
Specialized hubs, Matrix ISO variants, Vetta Racing/Touring and Selle Italia
Turbo Ventilated cannot safely select a specific existing variant. Wolber Type
58's 17 mm inside width differs from 5178's recorded 13.6 mm, and the HED
disc's composite description does not establish its material or the identity
of carbon-disc 6969. Campagnolo rim and Ritchey tyre weight discrepancies do
not independently establish a new configuration. Panaracer tubular weights
have no model key; retailer stock numbers do not supply one. The prior
decisions on house wheels/tyres and Nashbar bikes remain in force.

### Nashbar widened-row follow-through — 2026-11-17, review complete

- Rechecked all loaded bike specs against Ole 4752 / 2638 / 6289 / 3133 / 1985:
  no specs use those components or name Ole. Their earlier-1988 attestation is
  already recorded in both Nashbar and SunTour Edition No.89 evidence; there is
  no outstanding Ole backfill. Nashbar house-bike ingestion was subsequently
  excluded by the user decision above.
- Dia-Compe **8082 / 678** are brake caliper series, not brake-lever identities.
  Miyata 710's 1986 GX-400 brake **18834** already links to 8082; its GX-400 Aero
  lever **18835** correctly remains NULL. Extending caliper dates cannot identify
  that lever. Keep the existing Dia-Compe lever-source hunt.
- Miyata 1987 DC-983D brakes **22360 / 22462** remain NULL: row **662** is bare
  983 and Nashbar's Terra Alpha wording does not establish a D-suffix crosswalk.
  Fold this specific source need into the existing Dia-Compe hunt rather than
  repeating the completed widened-row check.
- Nashbar p.53 Custom P5 is useful candidate evidence for the 1987 Raleigh
  fluted/Allen-bolt wording, but does not distinguish it from all CT-P6 fitments.
  Generic Nashbar MTE and the 4050 bike's bare CRE do not identify MTE-110 or
  prove a CRE/CRE-100 alias. Those open identities are consolidated in the
  existing SR worklist and seatpost items. No new mappings or date changes
  are supported for them, and no unsuccessful hunt is added as a separate task.

## Reviewed specimen and variant distinctions

Identity evidence from the November 2026 reviews; consult brand notes and the generator registries before reopening.

- Cambio Rino 16 / 17: English 1.37 x 24 cups versus Italian 36 x 24 complete set with 121 mm axle. OMAS 130 / 130 ST and 132 / 132 ST differ in seals, dimensions and weights; these pairs remain in REVIEWED_NOT_DUPLICATES. Sugino 162 remains uncoded and separate from marked MS-68/NJS 163; its unsupported 1978 track attribution was withdrawn in the [Sugino review](sugino.md#uncoded-bottom-bracket-162-vs-ms-68-163--2026-11-17-applied-and-validated).
- **Near-pair follow-up, 2026-11-13:** OMAS 120 S Big Sliding 10681 / 120 D Big Sliding 10682: closed 2026-11-14, kept apart; Guida '96 scan 52 prints both word for word identically (1", 98 g, L. 39.000), only the letter differs. Kept apart and registered: Gipiemme Tecno 724 / M 724 and 416 / M 416 (road / MTB); 716 PRO / C 716 PRO and 416 / C 416 (alloy / carbon rims). No linked specs on these candidates.
- These kept-apart pairs are now in `REVIEWED_NOT_DUPLICATES` (2026-11-13): 7434 vs 2518 (EA-200 code reuse, shimano.md); 8253 vs 2641 (1976 Seven, own row by decision); 2644 FD-3900-SSH (clamp / endless band) vs 7848 FD-SP00-B (braze-on, same Sprint 9000 front; 2644 could be retitled "Sprint 9000"); 2436 Pilot 3080-00 triple (bright chrome) vs 2443 Hi-Stepper 3080-00 S (satin cage, ATB); 2367 Cronospecial 800AS vs 9516 Crono Special 802 AE (Selectron); 2365 Azzurra (Simplex-made) vs 9854 Azzurro SB 802; Campagnolo 2295 / 2299 / 2300 (four-hole vs three-hole cages; narrow vs standard clamp bands, campagnolo.md); Campagnolo 2297 / 2305 (1052/1 second body 1970-77 vs first body 1960-69, separate documented runs); 2439 ARIS New Success vs 8960 AV 66.3 D (year-ranged on purpose); 2484 EF-100 / FD-AT11 (1979) vs 7721 FD-AT10 / FD-AT11 (1993), code reuse. Also closed from source photos: keep 2584 Prestige Senior apart from 2583 Criterium (moulded mounting body versus metal mounting clamp).
- Kept apart, now registered in `REVIEWED_NOT_DUPLICATES` / `REVIEWED_VARIANTS` (2026-11-13): 6276 / 6277 LD-1600 Cyclone and Cyclone Black Series (finish sold as its own line, catalogue row) as a reviewed variant; 5973 C-Record Syncro 0211-0213 vs 8812 first-version 0118084-0118096 (campagnolo.md: renumbered version kept on purpose); 6239 / 6240 SLJ5057 silver / black anodized (simplex.md: 1984 photo is silver); 6268 Command (6 & 7) 1990 vs 6269 SL-CD01 (1992, 7 & 8); 6303 Superbe Pro index vs 6302 SL-SB00 friction; 6107 / 6108 Aris Classic; 6161 Dura-Ace black vs 6162 L-284; 9142 Crono Special (1985) vs 9517 870 SE Selectron; 9143 Sprint vs 6050 Crono Sprint 870 DS; Zeus 6335 Gran Sport (254 g, not one lever) / 6334 vs 8854 Ref. 11; Sturmey 6245 / 6248. The general SunTour 1973 4-digit versus later LD- / LS- rule remains in suntour.md.
- Photo comparisons closed 2026-11-13: keep 544 / 545 Bowden Touriste / 904 apart (different arm profiles and cable-anchor construction), and 2122 / 2131 Sachs-Maillard Normandy / Sachs Maillard (five versus six sprockets). Both registered in `REVIEWED_NOT_DUPLICATES`.
- Policy (2026-10-26 and 2026-10-28): colour / finish and marking / hardware variants of one part are folded into one row ("Variants: ..." in its description), except variants a person reviewed and kept in `REVIEWED_VARIANTS` (special editions, finishes sold as their own model, markings that date a part, two runs under one title); construction differences are configurations; generation rows are real versions.
- A matcher-wide rule choosing versions by year was rejected: it would mislink the 104 / 104 bis case. Unqualified Normandy Luxe Competition does not identify flange size; consult Motobecane notes before changing mappings.

Configuration distinctions retained from the classifier review: FRM A-Set
10395 / 10396 differ in 1-inch / 1-1/8-inch fittings; Schwalbe Blizzard Pro
10225 / 10227 in 37 / 67 TPI; Stelvio 10228 / 10229 in 700C / 650C size;
Mavic Helium clincher 10376 / 10377 in 26-inch / 622x15 wheel dimensions.
These distinctions do not establish new merge candidates.


### Favorit single-lever review — 2026-11-17

User approved, applied and validated 2026-11-17. Manual candidate **6028 / 6029**
is retained as two photographed lever constructions, registered in
`REVIEWED_NOT_DUPLICATES`. The old exact-title duplicate flag is not evidence
that the narrow covered lever and broad bare blade are interchangeable variants.
No merge/delete, component insertion or bike-link change was needed.

Source_ref 1, original VeloBase owner `jenda` specimen pages (both added/updated
2015-04-01), with all three full-size photographs for each inspected:

- **6028**, GUID `1FD9CA89-428E-4C36-8F8C-A36D7480F6F0`:
  https://velobase.com/Pages/ViewComponent.aspx?ID=1FD9CA89-428E-4C36-8F8C-A36D7480F6F0 .
  Main `11DC0A2C-A844-42C7-9CDB-AAEA3AB5BB8D.jpeg`, detail
  `423ED72C-E5F8-4B22-917E-7B06C12AE8C4.jpeg`, underside
  `9239BA19-EEB2-4F5D-BEAB-6F013DECA092.jpeg`: narrow metal lever with textured
  black Favorit grip, black knurled tension knob, clamp-on downtube mounting.
  Source weight 48 g actual for the single-lever assembly.
- **6029**, GUID `6F2A22CE-720D-474E-B40F-EC4A128766DA`:
  https://velobase.com/Pages/ViewComponent.aspx?ID=6F2A22CE-720D-474E-B40F-EC4A128766DA .
  Main `84BF1865-1126-4EE4-B2CB-50B2455ECA70.jpeg`, details
  `EA381512-D75B-4B89-9B69-410889534BD4.jpeg` and
  `F96E4447-0E41-42FC-9BEB-7A231DF07D45.jpeg`: broad, dished, rounded bare
  alloy blade, black knurled tension knob, clamp-on downtube mounting.
  Source weight 45 g actual for the single-lever assembly.

Photo URLs use `https://velobase.com/CompImages/Shifter/<filename>`.
The distinction is the lever profile/construction, not the 3 g weight difference
or the source's approximate dates. Do not assume that the broad dished blade is
simply the narrow lever with a missing plastic grip. No manufacturer part number
is established. Source dating is only `1980's - Early 1990's` for 6028 and
`1990's - Early 2000's` for 6029; retain existing DB ranges 1980–1990 / 1990–2000
without treating them as proven production boundaries or generation evidence.

Adjacent 6026, GUID `49CA6E7A-05DA-4D30-8C9E-46C6D1B95FB9`, was checked:
its original main photo `32B94EEB-64E1-4BCC-B516-7E4EEFD1DC3C.jpeg` shows a
complete two-lever clamp assembly, versus the single-lever assemblies under review.
6027 is separately identified as headset-mounted; neither is a merge target in
this review. The live Favorit shifter inventory also contains 6025 and coded 6030
2/10; no change to these adjacent records follows from the two specimen photos.

Applied updates, preserving brand_id 75, category_id 19, group_id NULL,
source_ref 1, source_id above, original dates and image NULL:

| ID | Old title / description | Applied title / description |
| --- | --- | --- |
| 6028 | `Favorit (Single lever)` / `Favorit (Single lever), Czechoslovakia, 48 grams (Actual)` | `Favorit (single lever, black grip)` / `Clamp-on downtube friction shifter with a narrow metal lever and textured black Favorit grip, plus a black knurled tension knob. 48 g (actual, single-lever assembly).` |
| 6029 | `Favorit (Single lever)` / `Favorit (Single lever), Czechoslovakia, 45 grams (Actual)` | `Favorit (single lever, bare alloy blade)` / `Clamp-on downtube friction shifter with a broad, dished, rounded alloy lever blade and black knurled tension knob. 45 g (actual, single-lever assembly).` |

Descriptions are 166 / 152 characters. Both search_text values are recomputed
with `scripts/search-text.js` and remain `Favorit`, their original value.

Pre-apply validation: neither row has a live bike_spec reference or explicit
generator override. Read-only Favorit duplicate report flags the old same-title
pair as a duplicate; the registry now classifies it as a reviewed variant. One
live component/bike snapshot, all 96 local CSVs / 21,176 generated specs compared
before/after simulated retitles: exact identity of every generated spec and match,
zero changed mappings. `npm test` passes all 12 test files and `git diff --check`
passes. No speculative new bike link is justified by these generic specimen names.

Applied two guarded component UPDATEs in one transaction: two affected rows;
rerun zero. Full-row readback of all six Favorit shifter records matches the
original snapshot plus exactly these two title/description updates; dates, source
identities, category/group/brand assignments, search_text and adjacent records
are unchanged. Snapshot comparison confirms every live bike, spec and catalogue
source record is unchanged. Neither reviewed component has a bike link. All 96
CSVs / 21,176 generated specs were checked again after application: exact equality
to the original plan, zero changed mappings.

The live duplicate report no longer flags 6028 / 6029 as merge candidates. With
the revised, different titles, its existing touching-date-range heuristic labels
the pair `generation` rather than `variant`. This report label is not new evidence
of a production transition: the source dates remain approximate and the keep-apart
decision rests on the photographed lever constructions. The explicit reviewed-pair
registry also protects them if a later report would otherwise propose a merge.

Old/new values above retain restoration information: reverting would require
restoring the two original titles/descriptions under guards for these applied
values, and revisiting the reviewed-pair decision. The completed TODO action was
removed; the remaining manual candidates stay open. Task SQL, snapshots, helper
scripts and source HTML/photo copies were removed after successful validation;
source URLs and exact photo filenames above preserve the evidence. `git diff
--check` passes; the existing test suite passed before application.


## Performance Bicycle Shop Fall/Winter 1985–86 — readable pages recovered 2026-11-18

**Source recovery and page triage only; no DB queries, source registration,
component changes, bike loading or generator changes in this pass.** The earlier
four-image lead understated the available material: twelve distinct catalogue
photographs are publicly linked by contributor `embankmentlb` in posts 1 and 8
of [Bike Forums thread 1214636](https://www.bikeforums.net/classic-vintage/1214636-performance-fall-winter-1985-86-a.html),
posted 5 October 2020. The separate screenshot of the Performance blog in post 4
is not a thirteenth catalogue page and was excluded.

### Edition, files and readability

- The recovered cover explicitly prints **Performance Bicycle Shop,
  Fall/Winter 1985–86**. Use that edition label, rather than silently assigning
  all components a single 1986 publication date. The handwritten 8-30-85 and
  price on the cover are owner annotations, not a printed imprint.
- **US market:** English, dollar prices, North Carolina toll-free ordering
  information and the Reno, Nevada warehouse notice. These establish the
  retailer's market; they do not make the goods US-manufactured.
- All twelve original CDN downloads have valid JPEG signatures and decode at
  **1128×1504 px**, 289604–414656 bytes. The CDN URL path says 2000x1504, but
  that is not their actual decoded width. Most body text and technical tables
  are readable. Perspective, page curvature, glare and clipped footers remain;
  use original-resolution crops to verify fine codes before any data change.
- Retained requested source files: twelve unmodified originals in
  `/private/tmp/performance-1985-86-recovery-20261118/originals/` and
  `/private/tmp/performance-1985-86-recovery-20261118/performance-fall-winter-1985-86-recovered-pages.pdf`.
  The PDF is a convenient compilation of **12 sheets representing the cover
  and 14 interior pages**, not a complete catalogue or 15 separate PDF pages.
  Three sideways two-page photographs were rotated for the PDF; originals
  remain unmodified. No enhancement or invented missing text was used.
- PDF size **4494532 bytes**, SHA-256 `aac5e54443868b21da1778b96b7bc7ea39cd52f99adaabc1b28a9c67b20f2b1d`. All 12 sheets render successfully.

### Page inventory and original image links

Original suffixes below refer to `performance-1985-86-NN.jpg`. PDF order places
the readable numbered pages in order; the accessory and custom-bicycle sheets
have clipped/unreadable folios and are positioned by subject context only.
Those placements are not new assertions of printed page numbers.

| PDF sheet | Original suffix | Printed page(s) | Readable contents / triage | Original CDN image |
| --- | --- | --- | --- | --- |
| 1 | 01 | cover | Printed edition; cover only. No complete-bike identity inferred from cover photographs. | [image 01](https://cimg6.ibsrv.net/gimg/bikeforums.net-vbulletin/2000x1504/cb8220a4_eb15_4c64_bef3_85cb351ff9d2_e3e83e9a806faaa9238d1fc6f3ec4d8eee9caf4e.jpeg) |
| 2 | 05 | 12 | Cycling shoes: Performance, Detto Pietro, Diadora, Duegi. Outside component-table scope. | [image 05](https://cimg2.ibsrv.net/gimg/bikeforums.net-vbulletin/2000x1504/8d9bb7c2_ac61_4c04_8578_947f278d98ff_4e314764f959d78bcb0a51d3dd12f2b836993337.jpeg) |
| 3 | 06 | folio clipped | Lights/generators, mirrors, bottles and cages; accessory page, not component ingestion. Apparent folio 25 is not relied on. | [image 06](https://cimg4.ibsrv.net/gimg/bikeforums.net-vbulletin/2000x1504/5a5cc740_5cbd_4134_bea5_99e5ea3db34b_08f59aaf7671b7357af7dd652558bdc21036d94b.jpeg) |
| 4 | 02 | 28 | Performance Campione and Blue Ridge framesets; dimensions and Record-headset wording. Framesets excluded from bike loading. | [image 02](https://cimg7.ibsrv.net/gimg/bikeforums.net-vbulletin/2000x1504/428a740e_2e73_4aea_99ff_89a8eb061729_e6caa8d1b3b783d08bfeca124ad731d2d207b54c.jpeg) |
| 5 | 03 | 29 | Eddy Merckx, De Rosa, Pinarello, Ciocc and Guerciotti framesets; no complete-bike specs. | [image 03](https://cimg8.ibsrv.net/gimg/bikeforums.net-vbulletin/2000x1504/40b6ef43_7b20_44cc_a7d9_1de8d678586d_8c501db33faee50a8178e33af9d32af716549e14.jpeg) |
| 6 | 04 | folio not captured | Custom bicycle assembly, seven component-package options and custom-built wheel service. Generic packages are not seven named bike models. | [image 04](https://cimg9.ibsrv.net/gimg/bikeforums.net-vbulletin/2000x1504/e97263ae_6bf2_4ccf_9e2f_66a7aa82dff2_a1d34fc1b1854be406d8ca0dd1767b53a0d5e4a9.jpeg) |
| 7 | 07 | 32 | Hubs: Campagnolo Record/Tipo, Phil Wood, Specialized, Suzue, Ofmega Competizione/CX, SunTour Cyclone, Shimano 600EX; spokes/skewers also present. | [image 07](https://cimg7.ibsrv.net/gimg/bikeforums.net-vbulletin/2000x1504/23596d13_ad66_4500_a43c_2ef197ba0e01_b6c1d6ccd35d83c680a88ef6e1aa90efee84ac56.jpeg) |
| 8 | 08 | 35 | Brakes: Modolo Master Pro/Professional/Speedy; Campagnolo Super/Nuovo Record; SunTour Superbe/Cyclone; Shimano 600EX; Dia-Compe Aero Gran Compe, 500G, 730G. Reach chart. | [image 08](https://cimg9.ibsrv.net/gimg/bikeforums.net-vbulletin/2000x1504/9f5ae206_919d_4140_ada7_38cdd069420b_c2fb5ed208e4f80c46fa1752e932b978dc2e1754.jpeg) |
| 9 | 09 | 37 | SunTour Pro and Dia-Compe Aero Gran Compe lever sets. Also tape, grips, hoods, cables, shoes and pads. | [image 09](https://cimg0.ibsrv.net/gimg/bikeforums.net-vbulletin/2000x1504/7fc2b502_b50d_491b_8505_55ac5d7e19a2_f38f3be80667ca8455c7d1cd8959c7c24121b843.jpeg) |
| 10 | 10 | 38–39 | Saddles: Selle Italia, Selle San Marco, Brooks, Selle Royal, Avocet, PearlIzumi. Posts: Campagnolo Super/Nuovo Record, 3TTT, SR Laprade and SR; covers/binders also present. | [image 10](https://cimg2.ibsrv.net/gimg/bikeforums.net-vbulletin/2000x1504/1b3d77e2_d7a8_4134_adbe_eba5571aafba_c99612553b53efd2102ca4e56405b93476d17341.jpeg) |
| 11 | 11 | 40–41 | Cranks, BBs and chains: Campagnolo, SunTour, Ofmega, Specialized, Sugino Aero Tour, Shimano 600EX, Phil Wood, Regina, Sedisport. | [image 11](https://cimg3.ibsrv.net/gimg/bikeforums.net-vbulletin/2000x1504/5ef360fa_4561_40e2_9424_a80559319c8d_adc1db4a63482da83c020dd2f0633bf523420b7c.jpeg) |
| 12 | 12 | 42–43 | Front/rear derailleurs and shift levers: Campagnolo, SunTour, Shimano, Huret, Modolo. Includes the Cyclone/ARX/AR touring variants and Huret touring entries. | [image 12](https://cimg5.ibsrv.net/gimg/bikeforums.net-vbulletin/2000x1504/612ef6a5_8ae9_4ee6_9a1e_9c62debe2839_35e739298778f6c73077fd870eb999ae037f43b1.jpeg) |

### Evidence worth reconciling next

- Printed **p.35** explicitly names **Dia-Compe 730G**, retailer order code
  **53-0950**, with **52–72mm** reach in the chart. 500G, 53-0900, is 43–57mm.
  The text describes 730G as the longer-reach counterpart to 500G. This is a
  dated 1985–86 retailer reference to the G version, not proof that every bare
  Miyata 730 is G, that 730G is 730GX, or that 1964 mixed Dia-Weinmann row 8929
  and 1986 steel 7300 in 8097 are interchangeable. Keep the earlier bare 730
  identity decision until those distinctions are checked against maker evidence.
- **p.32** supplies named sealed/loose-bearing hub descriptions and weights;
  **pp.38–39** supply saddle/post construction, sizes and weights;
  **pp.40–41** supply crank/BB specifications; **pp.42–43** supply drivetrain
  variants. These are useful dated retailer corroboration, but this recovery
  has not diffed them against current component rows or reviewed bike links.
- Performance order numbers such as 53-0950 are retailer SKUs, not automatically
  manufacturer part numbers. Generic Record, SR, LaPrade or Aero Gran Compe
  wording must not be assigned a more specific manufacturer code by guesswork.

### Coverage limits and additional leads checked

The recovered numbered leaves are 12, 28–29, 32, 35, 37–43, plus two interior
sheets with unverified folios and the cover. This is visibly partial: for
example, 33–34 and 36 are absent as full readable leaves. Slivers of facing
pages are not recovered leaves. The full catalogue's final page count is
unknown. The promised Performance Superbe page in the thread's final reply
was not subsequently present in that single-page thread. Do not create bike
specs from the frameset pages or a component-package column.

Exact-edition/full-PDF/archive searches located this thread and related
material, not a complete public scan. The primary
[Performance blog's Fall 1985 clothing retrospective](https://performancebikeblog.wordpress.com/2015/10/21/back-to-the-future-cycling-clothing-from-the-fall-1985-performance-bicycle-catalog/)
has five clothing/helmet images, outside this component recovery; they were
not downloaded or asserted to complete this same Fall/Winter edition.
[Thread 1213476, first page](https://www.bikeforums.net/classic-vintage/1213476-performance-bikes-get-no-respect.html)
now opens and chiefly discusses 1992 bikes/catalogue evidence; its later-page
and print URLs did not open in the checked web route. No claim to exhaustively
review all three pages or recover a new 1985–86 edition from that thread.
The Local Reporter 2020 article is a contextual retrospective, not a full scan;
patent references mentioning a 1985–86 trainer page are citations, not recovered
catalogue leaves. No new full-copy holder was confirmed. The 2020 contributor
is a historical holder lead, not proof of current possession. No outreach,
purchase or paid acquisition occurred.

The page recovery/triage is complete. Reopen missing-page acquisition only for
a new readable scan or a holder confirming the edition. The component
reconciliation is applied and validated in the following entry. Disposable previews, PDF intermediates and
recovery scripts were removed; requested originals and compiled PDF were kept.


<a id="performance-fallwinter-198586-reconciliation--prepared-2026-11-18"></a>

## Performance Fall/Winter 1985–86 reconciliation — applied 2026-11-18

**Applied on user approval, 2026-11-18, source 462; readback and validation passed.**
Reconciled the recovered component leaves against a live snapshot before loading
the reviewed change set. Existing bike links were unchanged. Full source URLs, page order, printed edition and
recovery limitations are in the preceding recovery entry. The scan is a US
Fall/Winter 1985–86 retailer catalogue, not proof of manufacture start/end dates.
All extended upper bounds of 1986 mean attested seasonal availability. No lower
date bound is moved later; inherited decade-style lower bounds remain qualified.

The 118-entry inventory, guarded SQL, exact-field proposal, baseline and
comparison files were retained through approval, application and validation,
then removed as disposable reconciliation scratch. Material old/new values,
retired identity and new IDs/UUIDs remain below. Requested original photographs
and the compiled PDF remain in the separate recovery directory described above.

### Applied change set

- One US catalogue source, label
  `Performance Bicycle Shop Fall/Winter 1985-86 catalogue (US)`; citation points
  to the original thread and the exact recovered component pages. Source ID **462**.
- **Six components**, 1985–86, group NULL; **one new brand**, Pearl Izumi **723**.
  Pearl Izumi is distinct from French leather-saddle maker LF Pearl 550.
  Category/brand associations are guarded. Retail order numbers below are SKUs,
  not manufacturer part numbers or titles.
- **26 existing component updates**, including 22 upper availability extensions
  and 12 description enrichments (overlapping). Each retains its original
  identity UUID. Source_ref changed to 462 only where fields changed. No manufacturer dimension or measured weight is silently replaced by
  a retailer figure; differing weight references and their basis are retained.
- **One duplicate consolidation**,94 → 88, described below. Neither row had existing bike links. No bike link changed.

| New component | Page / retailer SKU | Supported specification |
| --- | --- | --- |
| Dia-Compe 730G | 35 / 53-0950 | Side-pull brake set, 52-72mm reach; longer-reach counterpart to 500G, with drilled levers, gum hoods and quick release. Set includes calipers, levers, cables and housing. Japan. |
| Performance leather saddle (Selle Italia) | 38 / 41-1500 | Leather-covered saddle co-designed with Selle Italia; firm shell with foam padding. Listed weight 396g. |
| Pearl Izumi Flolite 100 | 39 / 41-1200 | Italian-made sport/touring saddle with smooth black leather cover and Flolite cushioning between leather and shell. Softer ride than model 200. Listed weight 456g. |
| Pearl Izumi Flolite 200 | 39 / 41-1210 | Italian-made sport/touring saddle with smooth black leather cover and Flolite cushioning between leather and shell. Firmer ride than model 100. Listed weight 456g. |
| Pearl Izumi Flolite 300 | 39 / 41-1220 | Italian-made racing saddle with Flolite cushioning, buffalo-leather cover, forged alloy rails and tension-adjustment screw. Listed weight 350g. |
| Sedis Sedistraveler, All-Terrain | 41 / 75-1025 | All-terrain derailleur chain with lateral flexibility for wide-range gearing and quicker changes. Listed weight 378g. France. |

### Existing rows: exact corrections and restoration

All changed rows below acquired source_ref 462. Old source_ref,
old/new date endpoints and description strings in the following tables retain
the values needed to reverse the proposal. Fields absent from the change list
remain unchanged, including each retained identity UUID. Retired 94 and the six
new identity UUIDs are recorded below.

| ID / retained title | Page | Old source_ref | Applied field changes |
| --- | --- | --- | --- |
| 3230 Campagnolo 1251, Nuovo Tipo (small flange) | 32 | 342 | year_to: `1985` → `1986` |
| 3259 Campagnolo 1034, Record (Low Flange) | 32 | 342 | description: old/new below |
| 3441 Ofmega Competizione | 32 | 1 | year_to: `1985` → `1986`; description: old/new below |
| 9161 Ofmega CX Sealed Bearing | 32 | 259 | year_to: `1985` → `1986`; description: old/new below |
| 3606 SunTour BH-2200, Cyclone | 32 | 90 | year_to: `1985` → `1986` |
| 9112 Phil Wood tandem hub | 32 | 247 | year_to: `1980` → `1986` |
| 9106 Dia-Compe 500G | 35 | 246 | year_to: `1985` → `1986`; description: old/new below |
| 1982 SunTour CW-7000, Cyclone | 40-41 | 90 | year_to: `1985` → `1986` |
| 1692 Ofmega CX | 40-41 | 429 | year_to: `1984` → `1986`; description: old/new below |
| 1693 Ofmega CX (triple) | 40-41 | 259 | year_to: `1985` → `1986`; description: old/new below |
| 7818 SunTour SA-100 / SS-100 series, sealed bottom bracket | 40 | 192 | year_to: `1985` → `1986` |
| 100 Phil Wood (Cartridge Bearing) | 40-41 | 248 | year_to: `1981` → `1986`; description: old/new below |
| 93 Ofmega Mistral | 41 | 262 | description: old/new below |
| 167 SunTour BB-400, Cyclone | 40-41 | 427 | description: old/new below |
| 2443 Sachs Huret Hi-Stepper 3080-00 S | 42-43 | 327 | year_to: `1984` → `1986` |
| 4742 SunTour RD-3500, Cyclone Mark-II | 42-43 | 90 | year_to: `1985` → `1986` |
| 4743 SunTour RD-3700, Cyclone Mark-II (GT) | 42-43 | 90 | year_to: `1985` → `1986` |
| 4729 SunTour RD-4500, ARX (GT) | 42-43 | 127 | year_to: `1985` → `1986` |
| 2621 SunTour FD-2600, ARX | 42-43 | 90 | year_to: `1985` → `1986` |
| 2632 SunTour FD-2300, Cyclone Mk-II | 42-43 | 90 | year_to: `1985` → `1986` |
| 5748 Campagnolo 1044, Nuovo Record (Superleggero) | 38-39 | 7 | year_to: `1984` → `1986`; description: old/new below |
| 5503 Selle Italia Super Turbo | 39 | 259 | description: old/new below |
| 462 SunTour CB-3200, Superbe Pro (brake lever, dual slot drilled) | 37 | 128 | year_to: `1985` → `1986` |
| 5254 Avocet Touring I (later) | 38 | 294 | year_to: `1983` → `1986` |
| 5256 Avocet Touring WI | 38 | 294 | year_to: `1983` → `1986` |
| 88 Ofmega Competizione | 41 + source 181 pp.20-24 | 181 | title: `Ofmega Competizione` → `Ofmega 7000, Competizione / Super Competizione`; group_id: `33` → `None`; year_to: `1980` → `1986`; description: old/new below; search_text: `Ofmega Competizione` → `Ofmega 7000 Competizione Super Competizione` |

| ID | Old description | Applied description |
| --- | --- | --- |
| 3259 | Campagnolo 1034, Record (Low Flange), Italy, 518.5 grams (avg). Small-flange quick-release road hubs, 1034/A front and 1034/P rear, 28, 32 or 36 holes, 5 or 6 speed. Some examples are engraved SU. | Small-flange QR road hubs, 1034/A front and 1034/P rear; heat-treated Cr-Mo axles; 28/32/36 holes, 5/6 speed. Listed pair 523g; legacy average 518.5g. Some examples engraved SU. Italy. |
| 3441 | Ofmega Competizione, Italy. Variants: colour anodized. | Small-flange alloy QR hubs, ground and polished bearing surfaces and races, 32/36 holes, 5/6 speed; internal parts interchangeable with Campagnolo. Listed pair 518g. Colour-anodized variants also recorded. Italy. |
| 9161 | Forged, anodised alloy sealed-bearing hubs, 203 g front, 276 g rear, 28-32-36 holes. | Forged anodised alloy hubs with sealed cartridges, quick release and alloy six-speed axle; small flange, 28/32/36 holes. Existing specified weights: 203g front, 276g rear; retailer pair 475g. |
| 9106 | Dia-Compe 500G, Japan. Side-pull set, silver anodised, drilled levers with hoods; the 730 and 810 are the same family in other reaches. | Silver-anodised side-pull brake set, 43-57mm reach, drilled levers, gum hoods and quick release. Supplied with calipers, levers, cables and housing. The 730G is the longer-reach counterpart. Japan. |
| 1692 | Ofmega CX, Italy, 588 grams (avg) | Forged alloy double crankset, 170/172.5/175mm; 41-54T rings interchangeable with Campagnolo, Avocet and others. Listed 565g at 170mm 52/42; legacy average 588g. Italy. |
| 1693 | Ofmega CX (triple), Italy, 640 grams | Forged alloy triple crankset, 170/172.5/175mm; third ring mounts directly to drilled spider, 24-40T even-tooth inner rings. Listed 651g at 170mm 50/45/28; legacy reference weight 640g. Italy. |
| 100 | Phil Wood (Cartridge Bearing), United States. Sealed-bearing bottom bracket set, 290 g, English, French or Italian thread; weighs the same as the Campagnolo Nuovo Record. | Sealed-bearing BB, English/French/Italian/Swiss threads; double or triple, axle styles 1-4 by crank; dedicated installation tool required. Listed 278g in 1985-86; earlier listing 290g. United States. |
| 93 | Ofmega Mistral, Italy. Mod. 2250 Mistral bottom bracket: case-hardened, ground nickel-chrome steel, 305g | Mod.2250 Mistral BB: case-hardened, ground nickel-chrome steel; ground and polished spindle/cup tracks, retained bearings with eleven balls per side; English or Italian thread. Existing listed weight 305g. Italy. |
| 167 | SunTour BB-400, Cyclone, Japan. Bottom bracket set, Cr-Mo axle, steel cups, 1.37 x 24T English (French, Italian available), 68 / 70mm, 295g (No. 62, Dec 1984). | BB-400 Cyclone: hollow Cr-Mo spindle, steel cups, plastic seals; English 1.37x24T, French or Italian, 68/70mm shells. Manufacturer specified weight 295g. Japan. |
| 5748 | Campagnolo 1044, Nuovo Record (Superleggero), Italy, 299 grams (Actual) | 1044 Nuovo Record Superleggero two-bolt alloy seatpost; 180mm, diameters 26.8/27.0/27.2mm. Retailer listed weight 275g; legacy measured weight 299g. Italy. |
| 5503 | Selle Italia Super Turbo, Italy, 393 grams (Spec),via BikePro.com info | Leather-covered saddle with chromed-steel rails, offered in black, royal, burgundy and ivory. Retailer listed weight 375g; legacy specified weight 393g. Italy. |
| 88 | Ofmega Competizione, Italy, 320 grams (Actual),Italian, 116.5 mm, with grease guard and crank bolts. Model 7000 set (nickelled chrome steel, ball races, 68mm shells) also fitted to the Super Competizione | 7000 BB shared by Competizione and Super Competizione: Ni-Cr steel, selected/ground ball races, 68mm shells; English/Italian/French threads, double/triple axle options. Legacy measured Italian specimen: 116.5mm, 320g, grease guard and crank bolts. |

### Ofmega 7000 duplicate

Prior manufacturer evidence **source 181**, R.J.Chicken 7 November 1979, explicitly
assigns model 7000 to both Competizione and Super Competizione BBs. Existing
88 and94 descriptions both identify that shared model; the distinct group
labels do not establish distinct physical components. Performance p.41 supplies
the later Competizione availability and shared double/triple threading options.
This merge is supported by source 181 as well as the new retailer, rather than
by similar names alone.

Retained **88**, retitled to `Ofmega 7000, Competizione / Super Competizione`, kept
its UUID and measured 320g/116.5mm Italian specimen facts, set group NULL because
the part is shared, extended year_to 1980→1986 and preserved the primary
description facts from 94. The inherited 1970 lower bound remains weak legacy information,
not a new claim of a 1970 introduction. Deleted 94 after the retained row was updated and references were checked. Neither row had bike-spec links before the merge; the retained row still has none.
No pre-existing generator override required migration.

Added exact **Bottom Brackets** generator aliases for
`ofmega competizione` and `ofmega super competizione`→88, ranged 1979–1986,
matching the positive dated evidence. The retitle also updated search_text alongside title. Do not broaden crankset/hub aliases or merge either crank generation.

Deleted-row restoration values (retired 94):
- `component_id`: `94`
- `brand_id`: `33`
- `category_id`: `1`
- `group_id`: `39`
- `title`: `Ofmega Super Competizione`
- `description`: `Ofmega Super Competizione, Italy. Model 7000 bottom bracket set, nickelled chrome steel with ball races, selected and ground bearings, for 68mm shells; supplied with the Super Competition and Competition chainwheel sets`
- `year_from`: `1979`
- `year_to `: `1985`
- `image`: `None`
- `search_text`: `Ofmega Super Competizione`
- `source_id`: `DD845BFC-5B8F-4FC6-A3D9-39D254351E9D`
- `source_ref`: `259`

### Confirmations and deliberate exclusions

The 118-row inventory covers individual hub/brake/lever/saddle/post/crank/BB/
chain/front-derailleur/shifter/rear-derailleur listings, splitting meaningful
normal/short, double/triple and numbered variants. Retail SKUs for spares do
not become new component models. The component-package sheet and frameset
pp.28–29 are context only: their generic series names do not identify additional
generations, and no frameset or package column becomes a bike. Shoes, lights,
mirrors, bottles, cages, tape, covers, tools, cable sets, skewers and spare
chainrings/pads outside the requested assembled-component reconciliation were
not ingested. Source-page absence establishes no production endpoint.

Existing factory descriptions cover the confirmed Shimano 600EX, Campagnolo,
Modolo and SunTour models; no broad rewrite is proposed for every repeated
catalogue listing. In particular, the complete brake-kit weights on p.35
(calipers, levers, cables and housing) are not compared as though they were
bare-caliper weights. Where retailer reach/capacity differs from the maker,
the maker value is retained. Examples: SunTour ARX front 15T vs manufacturer 18T,
Cyclone MkII rear 26T vs maker 28T, and the Huret Rival 28/30 figures.

Unresolved cases are documented in the inventory, rather than automatically
creating another generic source-hunt task:

- The new **730G** does not establish a bare 730 alias, a 730GX alias, or a link
  to the 1964 mixed Dia-Weinmann row 8929 or steel 7300 in 8097. Those Miyata
  values remain unlinked. Existing 500G 9106 links were already correct.
- Phil Wood's 540g retailer hub pair cannot safely widen the older 400g/57mm
  standard-flange row 3478 without construction evidence. Specialized hub
  variants and Suzue's codeless hubsets lack the exact specimen/model bridge.
- Modolo Professional 880/892, the Superbe short-reach brake generations,
  AGC250/AGC251 levers, Concor subfamilies, Turbo Hinault variants, codeless
  Selle Royal Touring saddles and the plain SR post remain distinct/unresolved.
- Specialized crank variants need a flag/version specimen comparison.
  Sugino Aero Tour double/triple is not automatically merged with 1964,
  whose existing description explicitly identifies the TAT **triple**.
  Likewise, the codeless Sugino AT BB is not guessed to be the Maxy set.
- Mountech FD v1/v2 and GTL rears remain separate. The retailer's 42T largest
  cog claim for GTL conflicts with maker 34T; this does not justify widening
  or overwriting either existing model. Huret Duopar variants and several
  mount-specific shifters/fronts also lack a unique code/construction bridge.
- Pearl Izumi 100/200/300 are explicitly numbered models, not aliases to LF
  Pearl. The Performance/Selle Italia saddle is genuinely retailer branded
  under existing Performance brand 651. Named Sedistraveler does not establish
  an alias to generic Sachs-Sedis ATB 1397 or Sedisport/Delta rows.
- Motobecane's early bare Ofmega CX hub values remain unresolved: this later
  cartridge-hub listing does not independently bridge their construction back
  to 1981–82. The CX **cranks** already have their own separate positive links.

### Validation and assigned identities

The first guarded transaction affected exactly 26 existing components, inserted
six components, deleted duplicate 94, registered source 462 and brand 723, and
added two category/brand relationships (Saddles for Performance 651 and Pearl
Izumi 723). No bike spec was updated. Retained 88's UUID is unchanged;
retired 94's complete restoration values are recorded above.

| New ID | Component | Identity UUID |
| --- | --- | --- |
| 11696 | Dia-Compe 730G | `84032ac2-9e8a-43d5-8a04-70f6ec5920fe` |
| 11697 | Performance leather saddle (Selle Italia) | `641ede83-140b-4fd5-80de-2eea129b88a0` |
| 11698 | Pearl Izumi Flolite 100 | `6d618201-ac16-4e69-9755-320502c5e426` |
| 11699 | Pearl Izumi Flolite 200 | `3c8fe51e-8e60-4824-89dc-4a86d6f11dc6` |
| 11700 | Pearl Izumi Flolite 300 | `e40f1dd5-1a74-4cd6-a4d4-c54a6fc9d8a5` |
| 11701 | Sedis Sedistraveler, All-Terrain | `84e8024e-c807-48c1-9b2f-01af42a7b9d7` |

Actual readback matched every approved field, source, brand and category.
Only the 26 approved retained component rows changed; 94 was the only deletion
and these six identities were the only additions. No other component, bike,
bike spec, category, group or existing brand/source identity changed. The new
source's country is US and its citation matches the approved edition reference.
Components 10759→10764; all 23168 bike specs retained with unchanged values/links.

The identical 45-statement SQL rerun affected **zero rows** in every mutation,
including source/brand/category associations, updates, inserts and deletion.
No remaining bike-spec reference to 94 or generator override targeting 94 exists.
The two exact Ofmega 7000 aliases are ranged 1979–1986 and target 88.

The actual generator/live comparison covers **107 loaded catalogues / 23168
specs**: 23153 unchanged matches, zero gained/changed/missing/ambiguous mappings,
and the identical 15 pre-existing lost mappings. All 13 test files passed.
Whole-DB quality remains **zero errors / 1983 review findings** with the exact
same findings before and after (no added or removed finding).

Ofmega standard/near/parenthesis duplicate checks and focused near-name checks
for Dia-Compe, Pearl, Performance and Sedis have no candidate involving 88 or
the six new IDs. LF Pearl and the explicitly numbered Flolite variants remain
separate; the generic Sachs-Sedis ATB placeholder is not merged by guesswork.
The reviewed unlinked decisions above remain unchanged; in particular the new
730G creates no bare 730 or 730GX mapping and the early Ofmega CX hub specs remain
unlinked. These are evidence limits, not unfinished linking work.

Removed the completed application TODO. No generic follow-up task was added
for an intentionally unlinked or unresolved variant. Removed SQL, snapshots,
inventory CSV, temporary helpers and logs after validation; the requested
recovered originals/PDF and the separate OMAS recovery documents were preserved.


## Rivendell catalogue No.4 — acquisition triage, 2026-11-20

Recovered [Rivendell catalogue No.4, archive-labelled Summer1998](https://notfine.com/rivreader/Catalogs/Rivendell%20Catalog%201998%20No%204%20Summer.pdf),99 PDF pages,12,412,938 bytes. The scoped Nitto/MKS reconciliation below subsequently registered source490; downloaded inputs were removed after validation. No source existed at acquisition triage. Cover has handwritten No.4/Summer1998/March1999 annotations; contents include printed references to August1998, and the MKS page explicitly says1998. Treat1998 as supported content year; exact publication/update boundaries still need inspection, rather than using handwritten dates as a production boundary. Some price stamps are later overlays; preserve that distinction during ingestion.

Read OCR contents and visually checked cover, printed p.33/PDF35 and printed p.57/PDF66. Readable Nitto Technomic Deluxe stem panel:26mm clamp,7–12cm,397g at10cm, cold-forged aluminium/aluminium wedge. MKS page names Sylvan295g, Nuevo Keirin315g, Platform300g and Touring/Cyclocross390g, with product drawings/descriptions. OCR also identifies Pearl/Aero stems, named derailleurs/shifters, saddles/posts, brakes, chains/freewheels and cranks/BBs. Promising new retailer evidence for existing components and1998 availability, not a demonstrated solution to older Nitto55F/B105F or MKS AR-Road/QR-K1/G-5000 gaps. A scoped live NULL-link query confirms those older named gaps still exist; do not map later catalogue offerings by maker alone. No assertion of a full99-page review, exact new-row count or guaranteed links. Accessories, clothing, frames, tools and general advice can be excluded.

The Nitto/MKS component pages were subsequently reconciled in the scoped pass below; a later pass reconciled the other component sections. TA's newly recovered clearer Tevano copy is recorded in ta.md; do not confuse its1983 filename with a verified edition date. Exhausted Brügelmann1990/1992 and TA/Stronglight1990s hunts yielded no newly verified ingest-ready source in this triage; existing holder-only leads remain unchanged. Acquisition triage itself made no DB writes or source inserts. Temporary files and the downloaded PDF were removed after the subsequent scoped reconciliation was validated; the source URL above remains the recovery path. The earlier TA reconciliation is recorded in ta.md.

**Remaining-source spot check, 2026-11-22:** retrieved the same PDF and visually
checked printed p.42/PDF p.44. It offers a **Sachs Centera long-cage rear
derailleur**, claimed 32T maximum, at least 36T wrap and 311g. A live title
search found no Centera/Cent(e)ra/Centra model row; a complete maker/code and
alias reconciliation is still needed before treating it as a new identity.
No loaded bike specification was identified by that name. Printed p.39 also
offers several front derailleurs, including explicitly old stock, so the
catalogue's 1998 sale date must not be treated as a production date. These
sections were outside the Nitto/MKS pass; this spot check does not assert full
catalogue reconciliation or a new bike link. No DB changes were made.


## Rivendell No.4 remaining components — applied and validated 2026-11-22

The remaining in-scope pages were inventoried against the full live component
inventory after the earlier Nitto/MKS pass. The approved SQL was applied and
validated. Source 490
already exists. PDF/printed pagination diverges after unnumbered order-form
inserts. Pages checked: PDF30,38–44,54–63,68–76,87–91; advice, clothing,
accessories, order forms and mixed-configuration wheel builds are out of scope.
Previously processed Nitto/MKS entries were not re-added.

Applied additions, with 1998 as the observed retail availability, not a
claimed production boundary:

| Printed page / PDF | Proposed component | Evidence and qualification |
| --- | --- | --- |
| 28 / 30 | Hsin Lung Priest handlebar | Maker named by seller, 54cm, 25.4mm clamp, 360g; new Hsin Lung brand. No inferred link to Cinelli Priest 2817 or Bianchi H.L. bars. |
| 42 / 44 | Sachs Centera long-cage rear derailleur | 32T largest sprocket, at least 36T wrap, 311g. No maker code printed; retain long-cage qualification and do not assume a crosswalk to other Sachs/SRAM variants. |
| 50 / 59 | Vitus Waybacker seatpost | Retailer name, forged aluminium, 27.2 x 220mm, 282g. Existing [Vitus aero 5943 specimen](https://velobase.com/Pages/ViewComponent.aspx?Enum=105&ID=b06936de-8797-411c-8ed0-2a704814345c) has a special 24.3mm shaft, distinct from this post; 5944 is carbon. |
| 65 / 74 | Willow chainrings | New Willow brand; only the table's W entries, machined 7075-T6, with 74/110/130/135mm BCD and the printed tooth options. The separate Willow Triplizer is held against existing Merz 1269 pending an identity crosswalk. |
| 79–80 / 88–89 | Panaracer Pasela tyre family | 700x35 wire or Kevlar and 26x1.25 Kevlar. Two listed sample weights are not mapped to bead types. |
| 81 / 90 | Sun CR18 rim | Silver triple-box rim, 22.5mm outside/17.5mm inside width, 26in or 700C, 36/40 holes. |

Applied updates: Ritchey Logic crank **1721**, 1991–1996 → 1991–1998,
adds the listed 170/172.5/175mm options and Q150–151 while retaining the
independent 714g measurement and earlier edition details; Ritchey Cross-Bite
**8391**, 1992–1996 → 1992–1998, adds the 26x1.9 Kevlar offering and 604g
retailer sample without overwriting earlier steel/Kevlar figures. Both use
source 473 previously and now use source 490. Their exact old descriptions,
dates, the original source citation and a restoration plan are recorded below.
Source 490's citation was expanded to the additional
component pages; no component title or existing bike link changes were applied.

Do not equate uncoded Shimano/SunTour/Campagnolo/Huret variants by retail name;
the Simplex #5500 and SunTour XC Pro Shortie have conflicting in-page weights.
SunTour bar-ends, Dura-Ace front and other products are explicitly old stock;
1998 sale is not proof of continuing manufacture. SunTour Alpha 5000 Triple,
Panaracer Category Pro/Cat 1, generic Phil Wood hubs, SRAM/Sachs P51/PC51, and
Vitus/retailer aliases require distinguishing crosswalks. No named candidate
bike specifications were found; Nitto's
unrelated existing links are unchanged. Baseline: zero quality errors, and
118-catalogue generator/live comparison shows the established 15 Huret lost
proposals with no gains or changes. Scoped near-duplicate searches for Sachs,
Sun, Panaracer, Vitus and Ritchey found no candidates. No database writes were
made during preparation. Applied results: new brand 768 Hsin Lung, 769 Willow;
new components 12255 Sachs Centera, 12256 Hsin Lung Priest, 12257 Sun CR18,
12258 Panaracer Pasela, 12259 Vitus Waybacker and 12260 Willow chainrings.
Exact component and source readback matched, and the identical SQL rerun
affected zero rows. Whole-database quality reports zero errors. Generator/live
comparison across 118 catalogues reproduced the baseline: zero gained or
changed mappings and the same 15 pre-existing Huret lost proposals. There are
no existing bike links to the eight affected components. Near and parenthetical
duplicate reports for Sachs, Hsin Lung, Sun, Panaracer, Vitus, Willow and
Ritchey produced no candidates; group reports found no affected candidates.
The existing unrelated Ritchey WCS hub review candidate remains a review flag.

Additional source limits: the retailer's P51 chain has a Power Link and is
called an M55 replacement, but the P51/PC51 crosswalk to SRAM 11843 is not
established. Rivendell's 120mm Ritchey Logic Pro/Comp illustration does not
identify the 103mm Pro assembly 10295. The B.17 retailer-specific steel and
titanium saddles cannot automatically be identified with generic B.17 rows;
the 26x1.25 Avocet and 700x32/35 Road Slick do not supply 20/K20/30 codes.
The Paris-Roubaix tubular is described as Foxonall/Clement-labelled but does
not establish a crosswalk to earlier Clement models. A generic SunTour XC9000
front hub is explicitly older stock and its QR/bolt version is unspecified.

Restoration values: 1721's old description was `Sugino-made cold-forged
duralumin MTB crank, hidden pin; 170-180mm, Q151, 74/110BCD. 1991/92:
24-36-46 or 26-36-48, 650g; measured 175mm complete 714g. 1995/96 Logic
Mountain: 26-36-46, 170/175mm, 712g. Black added 1992.`; old dates
1991–1996, source 473. 8391's old description was `Hybrid tyre with smooth
centre and inverted-jaw shoulders. 1992:26x1.5/700x38,450g,60tpi. 1995/96
Kevlar:26x1.1 330g,700x38 430g; steel:26x1.1 420g,26x1.9 490g,700x38 450g.`;
old dates 1992–1996, source 473. Source 490's prior citation was
`https://notfine.com/rivreader/Catalogs/Rivendell%20Catalog%201998%20No%204%20Summer.pdf (PDF23-29,33-36,57-58,66; printed pp21-27,31-34,48-49,57; 1998 base text; later price overlays undated)`.
Restore these values if reversing; delete the new rows or brand/category
associations only after checking later references. Six new UUIDs, in ID order
12255–12260: `ed2daf5b-e6bc-11f1-a2df-02fea3763e8d`,
`ed3031e7-e6bc-11f1-a2df-02fea3763e8d`, `ed3274ab-e6bc-11f1-a2df-02fea3763e8d`,
`ed34cd33-e6bc-11f1-a2df-02fea3763e8d`, `ed371198-e6bc-11f1-a2df-02fea3763e8d`,
`ed3acef5-e6bc-11f1-a2df-02fea3763e8d`. Removed task-only SQL, scan and
inventory after validation; the source URL above remains available.

## Rivendell No.4 Nitto/MKS reconciliation — 2026-11-20 (applied and validated)

Scoped review of the [99-page scan](https://notfine.com/rivreader/Catalogs/Rivendell%20Catalog%201998%20No%204%20Summer.pdf): all pages text-searched; product pages visually checked at2000px PDF23–29 (printed21–27),33–36 (31–34),57–58 (48–49),66 (57), plus cover and printed dating textPDF7. Sixteen Nitto/MKS offerings inventoried. Nitto racks/cages/tools, advice, other makers (including explicitly Hsin Lung Priest barPDF30), and remaining catalogue sections are outside this pass. No claim of a full component-catalogue ingestion.

Edition/date: printedPDF7 anticipates August25 and November1998; MKS PDF66 explicitly says1998. Cover No.4/Summer1998/March1999 annotations are handwritten; circular member-price stamps overlay original non-member prices and are undated. Registered the1998 base catalogue as source490, `Rivendell Catalogue and Price List No. 4 (1998)`, source_typecatalogue, countryUS (retailer market, not maker country). The registry contained no Rivendell source before this pass. Do not assign1999 or component start/end dates from handwriting/prices. The saved source citation identifies the PDF and scoped pages,1998 base text and undated overlays. New1998–1998 ranges mean attested availability, not introduction/withdrawal.

Inserted four genuinely absent offerings after full brand/category, model/alias and all-brand name checks:

| Component | PDF / printed | Specification and identity boundary |
|---|---|---|
|Nitto Mod. 176, Dream Bar|24/22|Aluminium road drop bar, 26mm clamp; 40/42/44cm, 330g at 42cm. Roomy bend with relatively flat upper curve. Prose specifies 142mm drop; drawing labels 140mm. UUID f960c79f-2bae-47cd-8345-564a85f9225b; brand323, category11, groupNULL.|
|Nitto Moustache Handlebar|28/26|Heat-treated 2014-T6 aluminium bar, 51cm wide, 346g; 26.0 or 25.4mm clamp, 23.8mm grip diameter. Fits road controls and bar-end shifters; intended for road and off-road use. UUID d7e05252-7e5e-4957-922f-35331b615b0f; brand323, category11, groupNULL.|
|Nitto Technomic Deluxe|35/33|Cold-forged aluminium quill stem with aluminium wedge, 26mm clamp and 22.2mm quill. Extensions 70/80/90/100/110/120mm; long quill; 397g at 100mm. UUID e74b595c-f14a-42bc-9c8f-646c78ea3b25; brand323, category22, groupNULL.|
|MKS Platform|66/57|Platform pedal for ordinary shoes, with toe-clip and strap fittings; 300g/pair. Model code not stated. UUID 0138e078-923a-4f50-82ae-60732475abed; brand421, category14, groupNULL.|

All new titles/searches use the maintained search-text helper. Dream Bar is explicitly model176, unlike175/185. Moustache drawingPDF29 is engraved NITTO; no RM016 code is supplied by this source, so none is invented. Technomic Deluxe is a named26mm-clamp offering; existing8563 bundles the25.4mm NTC/NTC225/NTC280 range, and8589 is the140mm-quill NTC-A, so do not replace either with this uncoded long-quill Deluxe. Platform is the printed retail name; no GR-9, GR-8 or other maker model code inferred from its silhouette.

Applied existing-row changes (descriptions rewritten below, source_ref→490; UUID/title/search/brand/category/group retained):

| ID / component | PDF | Old dates → applied | Previous source | Proposed description |
|---|---|---|---|---|
|8531 Nitto Mod. 185|23|1980–1989 → 1980–1998|159|Aluminium road drop bar, 26mm clamp, 82mm reach, 140mm drop. Rivendell sizes 40/42/44cm, 315g at 42cm; earlier range 37-42cm, 325-350g. Separate from the drilled, heat-treated Mod. 185-H.|
|8530 Nitto Mod. 175|25|1980–1980 → 1980–1998|158|Aluminium road drop bar with engraved crest and ferrule centre, no cable grooves. 1980: widths 370/385/400mm, drop 152mm, reach 100mm, c.300-310g. Rivendell: 26mm clamp, 42/44cm, 337g at 42cm; drawing drop 142mm, reach 102mm.|
|8534 Nitto B135, Randonneur|26|1980–1989 → 1980–1998|159|Aluminium randonneur bar, 25.4mm clamp, 23.8mm tube. 1989: widths 390/420mm, drop 120mm, reach 105mm, 300/315g. Rivendell: 42cm at curves, 45cm at flared ends, 365g; drawing overall drop 145mm.|
|8607 Nitto RM-013-14S|27|1989–1989 → 1987–1998|159|Heat-treated duralumin DirtDrop RM-013, designed for the 1987 Bridgestone MB-1. 140mm drop, 7-degree flare. Rivendell: 48/52cm at ends, 416g; normal bar about 42cm at curves. 1989 maker spec: 420mm, 410g.|
|6621 Nitto Pearl|33|1980–1989 → 1980–1998|159|Cold-forged duralumin road/touring stem, 150mm quill. Maker range: 26.0/25.4mm clamp, 60-140mm extensions, 275-395g. Rivendell offering: 26mm clamp, 80-130mm extensions, 330g at 100mm, nose-down clamp bolt.|
|6610 Nitto Dirt Drop|36|1987–1987 → 1987–1998|1|DirtDrop high-rise quill stem, cold-forged 2014 aluminium; 26mm clamp, 22.2mm quill, 80mm extension, 322g. Originally designed for the drop-bar 1987 Bridgestone MB-1; suitable for MTB drop-bar or Moustache conversions.|
|5830 Nitto Jaguar|57|NULL–NULL → 1998–1998|1|Jaguar two-bolt seat post, sold as Frog Post; 27.2mm diameter, 210mm long, two 6mm Allen bolts accessible from below. 268.4g measured specimen with 44mm rails.|
|10043 MKS 2031, Sylvan Track|66|1985–1985 → 1985–1998|340|Sylvan Track pedal, cast alloy body and alloy cage, carbon-steel spindle, 63mm; screw-on dustcaps and serviceable bearings. Edition 11: 330g/pair, black finish to order; Rivendell track-style offering: 295g/pair.|
|10044 MKS 2033, Sylvan Touring|66|1985–1985 → 1985–1998|340|Sylvan Touring pedal, cast alloy body and alloy cage, carbon-steel spindle, 80mm, 390g/pair; black finish to order. Sold for touring/cyclocross, with broad foot support and identical riding surfaces on both sides.|

Material old specification record:8531 had37–42cm,140mm drop,82mm reach,325–350g;8530 had370/385/400mm,152mm drop,100mm reach,c.300–310g;8534 had390/420mm,120mm drop,105mm reach,300/315g;8607 had420mm,140mm drop,410g. Those earlier figures are preserved as edition/range distinctions where they differ. PDF26 explicitly identifies Grand Randonneur135 in its drawing; curve/end width bases are now distinguished. No claim that all later weights/dimensions replace earlier versions. Dream Bar prose142mm/drop drawing140mm is retained as an internal source discrepancy. Mod175 drawing142mm/drop102mm reach is not silently normalised to the older152/100.

6621 formerly listed60–140mm,150mm quill,26/25.4mm,275–395g; retained alongside the narrower retail selection.6610 was bare `Nitto Dirt Drop, Japan`,1987–1987.5830 was `Nitto Jaguar, Japan, 268.4 grams (Actual),27.2mm, 210mm, 44mm rails`,NULL/NULL: the catalogue explicitly equates Frog with Jaguar and matches27.2x210; preserve the actual268.4g and44mm rail fact rather than duplicate stated268g.10043 formerly specified330g/pair (Edition11),63mm,cast alloy body/alloy frame/carbon-steel spindle,black finish on request; preserve those facts and distinguish Rivendell295g.10044 retains the same390g/pair,80mm,construction/black option while gaining the two-sided touring/cyclocross description. No `year_from` moves later;8607 moves1989→1987 from the explicitly named1987MB-1 origin, corroborating prior fitment notes.5830 NULL→1998 is earliest dated evidence found in this pass, not a launch claim.

Unresolved offerings are decisions/evidence rather than speculative insertions or new generic search tasks:

- PDF34: **Nitto Aero** — 26mm clamp,140mm quill,80/100/120mm extensions,327g at100mm. Made for Specialized in the1980s but sold unbranded; no code crosswalk to NTC-A or S-2 Road. No insert/date transfer.
- PDF58: **Nitto one-bolt seatpost** — 27.2x330mm,270g. Old stock bought four years earlier, not proof of current manufacture. No printed model code; do not force to S65 or insert a probable duplicate.
- PDF66: **MKS Nuevo Keirin** — 315g; called new in1998. Existing Royal Nouvo Track specimen is297g measured, source record says mid1980s; image alone does not prove same generation. Preserve3862 dates and avoid duplicate insertion until model/generation crosswalk.

Royal Nouvo comparison: direct [original3862 record](https://www.velobase.com/Pages/ViewComponent.aspx?ID=C321A13D-79A7-42F7-B587-43D43F8F41A1) says mid1980s–?,297g actual and NJS approved; its [specimen photo](https://www.velobase.com/CompImages/Pedals/8B3CC926-8E4D-4643-8962-08EDBC266104.jpeg) and the315g1998 drawing do not establish identical generation. The catalogue calls Nuevo Keirin new in1998; do not move3862 later merely by assuming it is the same offering, or create a possible duplicate. One-bolt PDF58 says the retailer bought350 posts four years earlier; this explains stock, not a maker model code or manufacture interval. Aero PDF34 explicitly says made for Specialized in the1980s and not branded Specialized. Its26mm/140mm/327g and image may fit NTC-A8589 or S-2Road6684, but do not conflate brand/model on dimensions alone.

Bike follow-through before loading: live NULL-spec review found no exact new offering identity. Nitto55F/B105F/B126AA, B801/B902 and other ATB codes, DynamicIII, bare Technomic Aero5730, uncoded seatposts and generic maker values remain outside this evidence; so do MKS AR-Road/AR-Road2, QR-K1, G-5000, NT-1, AR-5, PT-7 and other named older models. No bike-link/override proposal. Existing associations were unchanged in the post-load full comparison;8607's Bianchi1989 override remains inside its applied dates. Duplicate baselines: Nitto plain report empty; MKS one reviewed generation pair. Full before/after generator comparison passed, as recorded below.

Applied on user approval: one source490 insertion, nine component updates and four component insertions. No retitles, merges/deletes, overrides or bike-spec mutations. Source490 typecatalogue, countryUS, exact191-character citation and label were read back. All existing Nitto/MKS rows were compared field by field with their original snapshot and the approved proposal; only the nine approved description/date/source changes differed. New fields, UUIDs, source490, category/brand/group and helper-generated search text match the proposal; descriptions maximum225 characters. Identical15-statement SQL rerun changed zero rows.

New identities:

| ID | Component | source_id |
|---|---|---|
|12164|Nitto Mod. 176, Dream Bar|f960c79f-2bae-47cd-8345-564a85f9225b|
|12165|Nitto Moustache Handlebar|d7e05252-7e5e-4957-922f-35331b615b0f|
|12166|Nitto Technomic Deluxe|e74b595c-f14a-42bc-9c8f-646c78ea3b25|
|12167|MKS Platform|0138e078-923a-4f50-82ae-60732475abed|

Post-load duplicates: Nitto plain report empty; MKS retains its one existing generation pair; both near/code-name reports empty. Full generator/live comparison is exactly unchanged, including every finding:23,800 compared,23,785 unchanged,15 pre-existing lost proposals, zero gained/changed/missing/ambiguous identities. Existing bike-link counts remain unchanged; new components have zero links. Whole-DB quality has zero errors and2,071 review flags (previous2,073): incomplete dates1690→1689 and linked date conflicts329→328; broad freewheel35 and description-at-limit19 remain unchanged. All date moves are recorded above; no later `year_from` revision.

Removed the completed TODO action. Source/page URLs, model identities, old/new specifications/dates/source refs, measured values and unresolved decisions remain here and in the brand cross-references. Removed task-owned SQL/proposal/review/inventory, snapshots/reports, helper scripts, text/renders, specimen HTML/photo and downloaded Rivendell PDF after validation. Other maker sections were subsequently reconciled above.
