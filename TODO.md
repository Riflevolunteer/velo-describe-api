# TODO

Open work and unresolved questions only. Lasting evidence and decisions belong in the existing catalogue or project notes; Git history records committed task history. Use live `/linkCoverage` for current link counts.

## Database quality

The shared [audit-data-quality skill](.agents/skills/audit-data-quality/SKILL.md)
contains the catalogue/brand/category quality process, validation rules and
completion criteria. Both ingest skills use it.

Keep this TODO current for every task, including API/client work: follow
[TODO and scratchpad housekeeping](.agents/skills/audit-data-quality/references/todo-housekeeping.md).
Planned or approved work stays open until applied and validated.
Remove task-created temporary files as they become unnecessary and finish cleanup
after validation; retain what is still needed for unfinished work or review.

## Open: database quality tooling

- [ ] **Resolve remaining rim/hub link identities:** use
  `node scripts/compare-bike-links.js --json` and the recorded link decisions
  before changing mappings. Identify Battaglin spec 12943's Nisi rim
  code/construction and Bianchi spec 19546's actual front/rear hub codes; seek
  independent evidence for Grizzly cluster spec 19547's cassette identification.
  See the [bounded review](.agents/skills/ingest-bike-specs/references/known-catalogs/cross-catalog-notes.md#todo-link-drift-review--2026-11-17).
- [ ] **Persist link decisions and evidence:** distinguish confirmed, inferred,
  ambiguous, missing-source and intentionally unlinked cases so they can be
  revisited deliberately. Today `COMPONENT_OVERRIDES` `null` entries live only in
  the generator, so decided values (e.g. "Selle Royal Aero Black") still list as
  actionable in `/linkCoverage`. Leaning towards a nullable `bike_spec.link_status`
  the generator writes.
- [ ] **Multiple evidence references per component:** design a component/source
  evidence table with page, supported facts and uncertainty. Current `source_ref`
  records the last source that changed a component; it cannot retain every
  catalogue attestation. Preserve that meaning until a migration is reviewed.

## Open: Mavic quality follow-ups

Evidence and exact affected specs are in the
[Mavic audit](.agents/skills/ingest-component-catalog/references/known-catalogs/mavic.md#general-quality-audit--2026-11-15-read-only).

- [ ] Reconcile the remaining Reflex / T261 / CXP 30 family overlaps: establish
  the T261 1997 profile dimension against the 1999 maker's 26 mm drawing before
  merging 9983 / 10182; cross-check CXP 30 Titane 10607's 520 g against the maker's
  465 g tubular and attribute 5062's independent 500 g specimen weight before
  choosing survivors. Resolve Reflex CD/Ceramic representation before removing
  broad tubular row 9975. See the [maker-source follow-up](.agents/skills/ingest-component-catalog/references/known-catalogs/mavic.md#rim-maker-source-follow-up--2026-11-17-applied-and-validated).
- [ ] Find dated decal/finish evidence for Open Pro **5099 / 5100**, and a dated
  **31.8 mm 870** specification or boxed specimen for **2410**, before changing
  their dates or merging identities. Source dates for the remaining undated Mavic
  legacy rows. See the [date review](.agents/skills/ingest-component-catalog/references/known-catalogs/mavic.md#open-pro-and-870-date-review--2026-11-17-applied-and-validated).

## Open: API and client

- **Catalogue country follow-ups**: show country in the client (`velo-describe`) when two rows collide; optionally split the Peugeot 1971-74 CSVs per country (each mixes Dutch and French pages, currently set to FR). Inferred values (not stated by the source): Raleigh 1985, Motobecane 1974/75, Zeus 1973, Bianchi 1983/84. Decided 2026-10-30: keep the ISO country code for non-national editions (export catalogues, Dutch-language Belgian editions); the edition goes in the data_source label.
- **Bike images** (plan only, nothing built):
  1. per catalogue, crop each bike's picture from the page scans, name `<brand>_<model>_<year>.webp` (slugified, `_2` suffix for repeats), webp at quality ~80, long edge capped ~1200px (maybe a ~400px thumbnail)
  2. upload to S3 behind CloudFront (not a public bucket), keys `bikes/<file>.webp`, idempotent; decide with `provision-ec2.sh` / `deploy.sh`
  3. add nullable `bike.image_url` (store the key, build the URL in the API); check what the existing blob column on `bike` holds first; load via an idempotent per-catalogue script
  4. return `image_url` from `/bikedetail` and the list endpoints
  5. client: `expo-image` on the detail screen, no image when null (needs a store build, so keep it optional)
  - Open: copyright for scanned pictures (show `source_label` at minimum, consider only publishing images from sources that allow it); cropping method (by hand, script, or Claude returning boxes); pilot on one small catalogue (Cinelli or De Rosa) before the 130-bike Bianchi set.

## Open: bikes to load

- **Bikecology 5th edition, April 1976** complete-bike pages (pp. 87-111) as an `ingest-bike-specs` job.

## Open: code and data hygiene

- Recover a full-resolution **1987 SunTour dealer front-specification page** (velo-pages album 12478; source 185 recovery lacks fronts), or an **FD-3000-SS-marked specimen/box** with cage and cable-attachment views, and compare with **2600** before linking Triton front **22519** or adding a row. Resolve imported decade dates after identification. [Evidence and checked sources](.agents/skills/ingest-component-catalog/references/known-catalogs/suntour.md#additional-ss-source-checks--2026-11-16).

- Drop the inner DB-password encryption (decided 2026-10-29, not applied). `DB_PASSWORD` is a `SecureString` in SSM but its value is also an AES-CTR ciphertext decrypted by `decrypt.js` with the hard-coded key `d6F3Efeq`, so the second layer protects nothing. Steps: put the plain password in local `.env`, run `scripts/create-ssm-params.sh` to update SSM, change `index.js` and the six scripts (`db-query`, `component-diff`, `duplicate-report`, `load-sql`, `generate-bike-update-sql`, `summarize-bike-sql`) to use `config.db.password` directly, delete `decrypt.js` and `test/decrypt.test.js`, deploy and smoke-test `index.js`. Order matters: update SSM and deploy together, or prod gets a plain password it tries to decrypt. Also rotate the DB password afterwards, since the old ciphertext and key are in git history.

- **Remaining brake identifications after the front/rear split (2026-11-15):**
  - Obtain a sharp original 1986 Miyata Ridge Runner rear-brake photo or parts
    code for **22585**, distinguishing XC CB-6100 from XC Sport CB-6600 by
    external bow spring versus internal coil construction.
  - 1989 Peugeot Alpine Express (1021) rear Exage Mountain U: manufacturer
    offers BR-M452 / BR-M453; also check the still-available BR-M451 against
    Alpine-specific parts/marking evidence before choosing a row.
  - 1989 Peugeot Europe Express (1022), front and rear Deore XT: establish
    BR-M730 / M732 and BR-M731 / M733 generations from photos/parts evidence.
  - 1989 Raleigh Chinook (1070) rear: original table prints M450 U-brake,
    conflicting with BR-M450's cantilever construction. Preserve text; need
    independent fitment evidence before correcting or linking.
  Details, source pages, original/replacement values and spec IDs are in the
  [cross-catalog notes](.agents/skills/ingest-bike-specs/references/known-catalogs/cross-catalog-notes.md).

- **Weinmann combined equipment:** decide a frame-variant/spec representation
  for 1987 Raleigh Zenith 10 / Granada 10 specs 8781 / 8804 before linking.
  See [Weinmann evidence and retained identities](.agents/skills/ingest-component-catalog/references/known-catalogs/weinmann.md).

## Open: component data follow-ups

- **Sachs Huret description enrichment:** recover/register technical sheet 501.1 DFE (Velopedia 1291; live download 404), then review the proposed 6110 description/source update recording selectable six/seven-speed MA85.5E right and retro-friction MA85.4E left; see the [compatibility evidence and retrieval limits](.agents/skills/ingest-component-catalog/references/known-catalogs/huret.md#new-success-shifter-sixseven-speed-compatibility--2026-11-16-review). Enrich the other indexed/retro-friction shifter descriptions without merging configurations. Seek a manufacturer code crosswalk for RN500 / 54.01D (4414) and RNS00 (4415), and dated model evidence for approximately dated specimens.
- **Sachs Huret New Success fitment:** identify Randonneur front **8851** and shifter **8849** (MA85.5E versus earlier MA85.2E) from a readable original code/selector photo or period Raleigh parts crosswalk. Reopen the image hunt only with new distinguishing material; see the [shifter comparison and front-provenance notes](.agents/skills/ingest-component-catalog/references/known-catalogs/huret.md#raleigh-shifter-and-front-provenance-follow-up--2026-11-16).
- **Component dates and metadata review:** use `node scripts/quality-report.js` for current IDs and reasons. See [scope, evidence and validation](README.md#checking-database-quality). Review identity/source evidence before changing links or dates; inspect the flagged descriptions before assuming truncation. Flagged dates are review candidates, not proven wrong identifications: distinguish catalogue attestation dates, later bike fitment, reused names and actual generation mismatches before changing dates or links. Narrow follow-up list: 3141 Tange Falcon (5 specs), 3388 Normandy Luxe Competition (2), 1398 Sedis Gold (2), 6899 Vittoria Pro L Slick (1), 1365 Everest Serie Special Oro (1), 9126 Gipiemme Crono Sprint (1).
- Need a second source: Regina Gran Sport Super Corsa Oro chain, Sugino Maxy II and the Nuovo Tipo C1264/C1265 identification (Bikecology 1976); the Regina Super Corsa Oro chains and the Fiamme / Super Champion clincher rims (Palo Alto 1976). See cross-catalog-notes.md.
- Not mapped yet: Ideale 88 / Titanium and OMAS sealed hubs (Bikecology 1980); the SunTour "syncro-shift" Cyclone II lever (Palo Alto 1981/82; no part number, no row).
- **SunTour Edition No. 89 follow-ups** (source 427, see [suntour.md](.agents/skills/ingest-component-catalog/references/known-catalogs/suntour.md#suntour-bicycle-component-catalog-edition-no-89--printed-091988-2026-11-16)): (1) compare 3630 "XCD 6000 (freehub)" (unnumbered, 1988-90) with the new FH-XD10 row and the 1990 FH-XD11 before merging or retitling; (2) decide whether 6290 LD-5100 PLG (the 1988 English catalogue's PLG code, 150 g) was renumbered LS-5700 / LS-5800 in Edition No. 89 (150 g/pr), e.g. from a stamped 1989 specimen, before widening or retitling; (3) transcribe the Scrambler II (pdf p.40) and LV-3 (p.41) pages into rows, and check whether 7956-7958 RD-SR21 (1992) succeed RD-SR10.
- **SunTour identity/date follow-ups** ([evidence and description validation](.agents/skills/ingest-component-catalog/references/known-catalogs/suntour.md#remaining-placeholder-descriptions--2026-11-16-read-only-review)):
  1. *Catalogue identity checks:* obtain a period crosswalk for 1046 CB-4700 (VeloBase specimen marked Superbe / 4700) and 2613 FD-3200 Le Tech. Compare 3611's confirmed cassette-freehub photo and 126mm specification with 7989 FH-SL01-7 before a merge/date decision; resolve the imported HB code. Find a 1986-87 non-index Sprint source for 171 BB-5000 before dating it; keep separate from BB-500 8819 (different taper and ball count).
  2. *Uncoded specimens*: find period codes for 1335 / 1336 / 1337 Superbe chainrings, 4006 Radius pedal, 1980 ARX crank, 1989 / 1990 Superbe cranks, 6292 Seven levers and 6693 Ole stem. Resolve 2631's clamp/braze-on ambiguity from its specimen before any merge with 7855 / 2630. Resolve 2231 AP and 2241 Perfect YE using stamped codes; verify YE material/indexing rather than copying contradictory fields. 2662 is already tracked under Edition No. 89 p.13.
  3. *Imported dates*: seek dated model evidence for 3130 HS-400, 3131 Alpha 3040, 2618 Vany, 6261 AX-5000 and 4696 Checker. Date 3138 HS-XP01 if a 1991 catalogue turns up.

## Open: link coverage (bike_spec -> component_id)

Brand-only, size/material-only, either/or and house-part specs can correctly remain unlinked. Do not infer a model from bare `Campagnolo`.

`/linkCoverage?unlinked=N` is the live worklist. Leave-unlinked calls and reviewed cases are in [link decisions](.agents/skills/ingest-bike-specs/references/link-decisions.md); do not relink them without new evidence.

### Open after the 2026-11-01 passes

- Judgement call: Biopace 48/38/28 on the 1988 Raleigh Ozark II / Royal [18009 18045] and 1989 Royal ("Shimano Biopace 48/38/28t"; derailleurs "Wide Ratio, indexed shift" / "Shimano SIS indexed", the Royal page only says "a BIO-PACE chainset"): no group printed, FC-B124, FC-M450, FC-M350 all fit.
- Source gaps, no row (all spellings counted; the 2026-11-01 web sweep in the source-hunt log found nothing): Simplex SX 620 rear (5, 1987-88 Peugeot), Nervar "2020 S sealed B.B." (2020 / 3020 crankset rows and links are already loaded), Solida 52D (3), SR CRH-310 hubs (5, 1986 Raleigh), Strong NS-3 (3, 1990 Bianchi), Vredestein Racer II (4, 1988 Raleigh).

### Source gaps (no suitable row)

- No suitable row (source gaps): Reydel Profil (6), Vittoria Flash M19.

Named parts with no suitable period row or no source yet (worth a search if a source turns up):
- Headsets and bars: ITM Mondial bars, stems 100 / 200 / 300 / Pro and 201 seatpost; Kusuki WP-RB bars and bare "WIN" stems; SR / Sakae 1983-87 seatposts (unidentified fluted models); Kalloy SP-248; PIVO de Luxe stem; Modolo Flyer. Searches 2026-10-20 found nothing for Tange Seiki, ITM, Kusuki or SR 1983-87 (only eBay listings; Reminiscence slugs `sakae82`-`sakae87`, `sr83`, `sr87`, `itm*`, `kusuki*` 404).
- Derailleurs, brakes, chains: Simplex Competition crankset and seatpost, Super Criterium and Prestige stem shifters (no source on hand); Everest Special Cromo freewheel (needs an Italian Everest catalogue). Find a second source for the Regina Super Corsa Oro identification (see cross-catalog-notes.md).
- Tyres and rims: Vittoria Open Tubular Flash M19 and Zefir 700x20C, Rigida Jade / Saphir, Ukai EX-17, FIR Tour / Pulsar, Dia-Compe 500G; the five Raleigh "Vredestein 700 x 20C Racer HP" specs (no Racer HP in the 1979 trade list); Raleigh "Mavic Sprint" (3, no row).
- Peugeot gaps: San Marco Gilux race, Gauthier Rilsan, Sedis 1977-78 chains. Lyotard: 13 specs unlinked (5 Motobecane, 6 + 2 Peugeot 1977 DE); the only source found is an undated US-importer leaflet (bikeboompeugeot.com Lyotard Pedal Brochure.jpg) with 14F, 23, 36F, 45, 45CA and 460 but none of the models the specs name.
- Raleigh: ET-QS hubs (3, in neither Sansin catalogue); 1986 Sansin "alloy sealed large flange" hubs; Sakae / SR 1983-87.

### Freewheels / cassettes

- **Remaining three unlinked Cassette specs:** 1989 Bianchi Sport SX **18494** (Sport LX, silver 13-24T seven-speed); 1989 Tangent **18682** (SunTour XC-9010, 13-28T seven-speed); 1993 Ocelot **1740** (six-speed 14-28T). Shimano's C20 chart specifies MF-HG20 freewheel for Ocelot's group, but the original Bianchi product table/fitment remains unverified, so its label/CSV was left unchanged.
- **Further component review:** 1196 Uniglide five-speed, 1194 Regina XLR8, 1212 TA Kheops and 1213 Stronglight Titanium still lack complete dates. Vague 1196 / 1200 Uniglide records remain separate: photographed ranges differ and duplicate identity is unproven; 1200's 1970-1980 dates still need manufacturer evidence. No changes to these records.

- **Remaining freewheel identifications:** 1987 / 1989 Peugeot "Maillard 700 7-speed" x3 (2124 Compact Super and 8133 SH both dated 1980-82); bare Peugeot "Maillard Normandy" (several rows); 1986 Miyata "SHIMANO UG 6 speed" x5 (600 MF-6150 is 1978-84 and these are lower-tier bikes). Brand plus tooth range, tooth range alone and either/or specs stay unlinked where they cannot identify a model.
- **Remaining freewheel source gaps:** Shimano Exage Sport (two 1989 Peugeot specs); Sachs-Huret New Success six/seven-speed (three 1987-89 Peugeot specs); Shimano Deore six-speed (1987 Peugeot).

- No suitable row: Shimano 105 freewheel / cassettes 1984-87 [1296 6134 8673 8695]; Everest Special Cromo (4, already listed).

### Seatposts

SR work is in [the source worklist](#sr-sakae-next-work).

- Remaining SR source gaps: bare CRE / CR-E (CRE-100 is now 11324; keep both apart from CLE-100 11308); SRE-100 (SRE-105 is now 11343); MTE-110 (not MTE-100 5849). See the scoped SR worklist for current evidence. Also no row: Mori Stainless Clad (1986 Miyata); Kalloy SP-243 / SP-250 (1989 Bianchi, with the SP numbers below).

- Source gaps (left 2026-10-30): 1982 Peugeot PH 12 "Simplex Dural, 24 mm" (no 24 mm Simplex post) and 1976 PY 10 "Simplex dural, anodised" (8375 SLJ 3639 is polished, 7305 SLJ4164 starts 1978).
- Biggest pot: 1987 Raleigh "Sakae fluted alloy with single Allen bolt adjustment" x10 + "SR fluted alloy..." Royal 18 [8836]. The 1983-84 catalogues print the same wording with "CT-P5" (-> 5857), but 1987 drops the model and the 1984 Sirocco was a CT-P6; part of the SR 1983-87 source gap.
- No suitable row: Kalloy SP-248 / micro-adjust (8) and bare SP-200 / 241 / 242 / 251 (5, likely Kalloy numbers); SR bare CRE / CR-E (not CRE-100 11324 or CLE-100 11308 without evidence); SR MTE 110 (MTE-100 5849 is 1980); Strong NS-3 (3); ITM 201 (3); Gipiemme Quattro; Ofmega Premier / Super Competizione; Shimano Santé (2); Shimano Deore 1986; Control Tech; Zeus Alfa; Simplex Competition (8, plus 2 either/or with Laprade 505).

### Rims

- New source gaps (named models with no row): Ukai LA-14 (3) / 7Z, Weinmann Aero Alloy (6, 1988 Raleigh) and 425 X, Sumo 7X (3, 1986-87 Peugeot), Velotech by Mavic (3, 1986-89 Peugeot), Araya 14G, Rigida Jade / Saphir / CTX 10, Wolber Alpine.

- No suitable row: Akront 700c / Pista (4, 1973 Zeus); Ambrosio California (3) and disc wheels; FiR Tour, MTB Pro, tri-spoke (3); Martano G-P80, Pro; Mavic Sprint (3, ferrule / tubular wording); Rigida Jade (3), Saphir (2); Sumo 14F; Ukai 22A, EX-17 (2); Weinmann 116, 716E (2), and the 1987 Raleigh "hollow section 700c eyeletted" (5, model not printed).

### Saddles

- New source gaps (named models with no row): ISCA Aero Airline (3, 1986 Falcon), Kashimax GTV, Italmanubri 635-S (2), Royal 6275, Falcon "AK 2603".

- No suitable row: Brooks CR3 (3); Concor Mountain-Pro / Mountain-Pro (4); Gallet 30 / 31 / 31 race / 33 / course (5); Gauthier Rilsan race (2, already listed); Isca 406 (3), 407 (3), Competition; Reydel Profil (7); Royal 463/2; San Marco Luxe race; Selle Italia Aero II (3); Tenor (3); Viscount 2285 / 2296 / Terra / Touring 2200 / Nuovo micro-adjust / anatomical mountain (8); Italia Corsa, Bianchi Corsa.

### Stems

- New source gaps (named models with no row): J.Y. M4P / M3P pulley (5, 1989 Bianchi); Kalloy KA-60/80/100 (3) and KA-222P (1989 Bianchi; possibly the undated 6570 Kalloy AL-222, no evidence); H.L. HS-P (2); SR AEROX (2) and CPS-80 (1986 Miyata), SR MTS-131 (1987 Peugeot); Kusuki Rocky 2 / Rocky II (2); Falcon "Aero alloy Model 200" (5, no maker printed).

- Judgement call: Sakae Royal forged alloy, 1987 Randonneur 18 [8848]: 8230 RY2 Royal 2 now runs 1981-1988 (Nashbar 1988 "Royal II"), but "Royal forged" does not name the II; decide whether to link.
- No suitable row: 3ttt special mod. Colnago (7, 1979 Colnago); Kusuki "WIN" AH / alloy (8, already listed) and Rocky III adjustable; Philippe Professionnel / Professional (5, 1975 Motobecane and 1978 Peugeot; only Philippe Competition 1980 exists); PIVO De Luxe (3, already listed); KL alloy (3, 1987 Bianchi); G.B. Classic Line (2, 1981 Raleigh); JY M3 / M3 low rise (2, 1990 Bianchi MTBs); ITM Pro and ITM forged laser etched (1990 Bianchi); Modolo Flyer (already listed); De Rosa pantographed.

### Handlebars

- New source gaps (named models with no row): H.L. DR-8 / DR-9 / Dirtdrop / MTB-110 / MTB Bulge / semi-rise (~10, 1987-90 Bianchi; no H.L. bar rows at all, the largest group), Kusuki KR-LB / BMT-3-26 (1986 Miyata), SR MTB-204 (1986 Falcon), ITM Krono, Kusuki SMC-F (1989 Bianchi), Cinelli Almarc leather covered (2, 1986 Cinelli; not identified).

- No suitable row: 3ttt special mod. Colnago (7); SR MTB-224 Power Bulge (5, 1990 Bianchi) and SR/Modolo anatomic (4); T.T.T. Rekord Standard / Record Standard (2, 1978 Bianchi; the 3ttt Record 1st version is ranged to 1975) and T.T.T. Franco Belge (2, 1975-76 Raleigh); Kusuki WP-RB (2, 1987 Miyata; probably WPR-B 11330); ITM Mondial Pista and ITM Italia aero; H.L. racing / MTB bulge / semi-rise (5, 1987-90 Bianchi); SR CTR Randonneur (1986 Raleigh); PIVO Professional (3, 1975 Motobecane); Belleri touring bar (2, 1981 Kalkhoff); Mountain Bike CMC-709 / MS-710 (1984 Peugeot MBs); Modolo Flyer; Corsa Strada model (3, 1981 Bianchi); Competición (2, 1973 Zeus).

### Tyres

- **Date-review worklist after approved corrections, audited 2026-11-14:**
  Three tyre specs remain outside recorded dates:
  6889 Vittoria Giro del Mondo (7070, Bianchi 1990); 6899 Vittoria Pro L Slick
  (1138, Bianchi 1987); 9247 Vittoria Corsa (18313, Bianchi 1986). Review identity
  and original evidence before changing dates. The 16 linked specs with incomplete
  component dates also remain open: 6743 Clement Colnago (7), 6812 Peugeot Route
  by Hutchinson (6), 6846 Peugeot Challenge
  (1), 6886 Vittoria Flash M23 (1).
- **Other held-evidence questions:** 1979 Miyata 1200 spec 20283 "NATIONAL
  Panaracer tubular 230" versus 9097 Cycle Pro National tubular (branding
  unresolved); 1987 Peugeot Challenge gumwalls x5 (15794/15813/15832/15851/15869)
  versus existing 6846 Peugeot Challenge, already linked from 1983 spec 11710
  (source/continuity unresolved). These are candidates, not approved links.

Remaining named source gaps: CST C-740 / C-860 / C-861 (6, 1989-90 Bianchi), Vredestein Racer II (4, 1988 Raleigh), IRC Crosscountry (3) and Peak (1989 Bianchi), Michelin ATB Surmond (2, 1989 Peugeot) and Chevron gumwall (1983 Peugeot), Panaracer Cannonball Express and Cheng Shin Ridge Line III / Canyon Express (1986-87 Peugeot), National Trisport (1986 Miyata), Vittoria Oscar X (1989 Bianchi).

Remaining variant questions: obtain period Comp/construction and fitment evidence
for the 1993 Bianchi Smoke/Dart Comp (Kevlar) cells before splitting/linking them
to Smoke 11368 / Dart 11369; identify the 1991 Grizzly Smoke Comp K Kevlar-bead
variant and the 700C Smoke fitted to 1993 Project 5 / 7. See the
[Panaracer review](.agents/skills/ingest-component-catalog/references/known-catalogs/panaracer.md#panaracer-usa-tyre-and-rim-brochure-1997--applied-and-validated-2026-11-17)
for the exact identity/configuration evidence still needed.

- Also unresolved: 1994 Cinelli Genius Strada / Supercorsa "Vittoria CX tubular"
  (several CX variants); 1982 Battaglin "Vittoria Trofeo" (9255 Trofeo 250 starts
  1984; new 11008 Trofeo Special is 1988); 1991 Bianchi "Panaracer Record"
  (only 6841 P-27RD, 1980); 1977 Peugeot "Peugeot Professionnel or Clement
  Criterium" (either/or). No suitable row: Clement 88 Competition, Specialized
  Umma Gumma, IRC Peak Sigma, 1994 Cinelli Sava Snake
  [20185].
- No suitable period identification/row: Peugeot Trophy tubulars (8), Peugeot
  Professionnel / Professional 225 g / Super Competition; Wolber Transalpino (2);
  Clement Meeting; Michelin Competition Slick; Vittoria Uni / Open Tubular /
  Zefir / Flash M19; Vredestein Racer HP (5, plus Racer II x4); Dunlop Sprite
  (3); D'Alessandro Leggerísimo Pista / Super-Cross; IRC Triathlete
  (5) / Featherlight; CST C-631 / Prolite (6, plus C-740/860/861 x6); Bianchi
  Dakar / Advantage-SL; Impere Seta tubeless. Prioritise period CST and Vredestein
  sources after the held-evidence checks. Earlier source hunts are in the
  [source-hunt log](.agents/skills/ingest-component-catalog/references/source-hunts.md); do not repeat them without a new lead.

### Pedals

- No suitable row: H.K. / VP VP-330 / 331 / 333 / 389 / 382S / 230 and VP500 (~10, 1984-90; the largest); HTI-A1 / HTI-P15 / HTI-851 (6); SP-513 / SP513C (2), SP-518 (2; SP-518FB is 11328, identity not shown), SP-153 (2), MP 150, Lowfat Pro and CTP-170 (1990-93 Bianchi); MKS AR-5, NT-1 (1986 Miyata; PB-20 is now 11335), C 5000 ATB; Union 632 (2, 1984 Raleigh); Lyotard 77R (3) and 90.

### Shifters

- No suitable row: Shimano Z501 stem shifters (3, 1987 Peugeot), 532 / 525 SIS (1987 Bianchi), EM-30 / EM-50 (1985-86 Raleigh), Z105, Deore XT-II bar-con SIS (1989 Bianchi); Simplex ICL Index (1989 Peugeot); SunTour PUB-M, DLN, Hero (1985-86 Raleigh).

### Brake Levers

- No suitable row: Modolo Quattro aero (2, 1989-90 Bianchi); Shimano Z-324 dual levers (2, 1986 Miyata; only Z325 / Z326); Universal AER (2, 1986-87 Colnago); Dia-Compe GX-400 Aero (1986 Miyata) and DC 630 (1986 Raleigh); Shimano AT 90 (1987 Peugeot); Spidel professional (2, 1982 Peugeot); Chang Star (1990 Bianchi).

### Crankset

- Find period identity/configuration evidence for Peugeot New Success crank specs **15100** (1987) and **17498** (1989); compare with the later Campagnolo-made Sachs 1730 before proposing a row or link. See the [Sachs Huret audit](.agents/skills/ingest-component-catalog/references/known-catalogs/huret.md#sachs-huret-brand-quality-audit--2026-11-16-read-only).
- No suitable row: the rest of the SR 1986 crank range (SAC-100 / SAC-T310, SUC-310 / SUC-100 / SUC-T310, FX-T310 / FXC T310 / T301, AXC T301 / T310, CXC 101, CRCT310, CTC 612; SAC-310, SXC(-T)310, CTC-5SG / 532 / 680 and CXC-300 now have rows 11317-11323; 1986 Falcon / Raleigh / Miyata and 1989 Bianchi; the same mid-1980s SR catalogue gap as the seatposts and stems); Sugino TVP, TNFVP, AL-WB, LP, XE300 and the 1981 Bianchi "Sugino Corsa" sets; Ofmega Premier (2), Nuovo Competizione, Junior (and Super Corsa MC-130, already listed); Stronglight 5470 (2, 1983 Peugeot); Haubtmann 100 / triple (3, 1986-88 Peugeot); Peyrard 3020 (3, 1984 Peugeot; probably the Nervar 3020); Gipiemme America 87; Thun Gamma Gold.

### Brakes

Remaining era mismatches: 1983 Bianchi Rallye generic "Mafac cantilever" -> 10016 (1981-only, description specifies tandem dual-cable levers), and 1990 Bianchi Osprey / Nyala -> 8032 CT-X101 / 8038 CT-XT01 (1992-only; check generation/model codes against a 1990 manufacturer catalogue before widening). The 1982 Peugeot NL "605 side-pull" cells remain unlinked: the source prints Mafac, so the Weinmann identification still needs a clear photo.

- No suitable row: Dia-Compe 984 / 984D (3, 1989 Bianchi), RT 400 (1986 Raleigh); Modolo Quattro (2, 1989-90 Bianchi) and Start (1987); Lee Chi cantilever (3, 1988-89 Peugeot); Chang Star 500 / cantilever; Polygon AF-500; Altenburger 53 S3 (1987 Peugeot).

### Rear Derailleurs

- **Open:** 1990 Bianchi Nyala rear derailleur spec 7018 remains unlinked because the 1990 SunTour catalogue lists both RD-XT00 (11070) and RD-XT10 (11071) without evidence to distinguish them. Revisit only if a bike photo, period parts document or other source identifies which model the Nyala used.
- **Candidates to identify:** 1979 Miyata 310 / 200 "SUN TOUR Seven" (20424 / 20445; 4755 Seven 2320 1976-79 or 4756 RD-1900 1978-85); 1994 Cinelli Genius Strada "Campagnolo Record" (20196; RD-11RE 1993-94 or RD-21RE 1994); 1994 Cinelli Velociraptor "Shimano Alivio" (20177; earliest row RD-MC12 starts 1995).

- No suitable row: Simplex SX 620 / SX 620 TSP (5, 1987-88 Peugeot; already a source gap), Super Criterium (1973 Peugeot); Shimano RD-M535 (2, 1987 Peugeot), Z513GS / Z105 (1986 Raleigh); SunTour SU-2 (1985 Raleigh), Quattro (3, 1989-91 Bianchi; a SunTour-made run sold only to Bianchi, per VeloBase 6258, so no SunTour catalogue lists it: add a row only from a specimen photo or code); Ofmega Super Competizione rear (1988 Colnago).

- Further unlinked identifications: 1981 Kalkhoff bare Shimano 600 (three specs); 1988 Colnago AL 11 SIS. Do not classify these as missing component rows.

### Front Derailleurs

- No suitable row: Shimano FD-M236 (2, 1987 Peugeot), Light Action FD-L525 / L532 (1987 Bianchi), 1987 Tourney, Z105 (1986 Raleigh); SunTour Quattro (3, 1989-91 Bianchi; see the rear-derailleur Quattro note); Simplex Foret front (2, 1989 Peugeot), SX 432 (1987 Peugeot); Huret Luxe front (4, 1970-71 Raleigh); Ofmega Super Competizione front (1988 Colnago); Campagnolo Velox front (1974 Falcon).
- **Huret / Sachs Huret front derailleurs:**
  1. **Rider double front (source gap):** 1987 Manosque "Huret Rider", 1989 Avoriaz "Sachs-Huret Rider", Lautaret / Lavandou "Sachs-Huret Rider 2" (42x52 doubles) have no row; find a 1987-89 Sachs-Huret catalogue listing it.
- **Simplex front derailleurs:**
  1. **2590 / 2591 "Super LJ (2nd version? front / rear control arm)"** (VeloBase, 1970, 0 links) predate Super LJ (c. 1971); check the VeloBase photos, then fold into 2587 / 7282 or retitle.
- **Campagnolo front derailleurs:**
  1. **Date flags (review, not errors):** 2318 Victory (1984-86) from 1987 Peugeot PSN 10, 1987 Colnago Junior Victory, 1987 Bianchi Nuovo Alloro "New Victory", 1988 Bianchi Giro; 2314 Triomphe from 1987 Peugeot PX; 2279 980 from 1987 Colnago Junior Special; 2300 0104007 (1982-85) from 1986 Cinelli 840 SLX (its VeloBase description says 1982-1987). Nuovo Victory / Triomphe were current in the November 1986 brochure (source 196); no separate Nuovo front row. Options: widen `year_to` with bike-catalogue fitment evidence (Victory 1988, Triomphe / 980 1987, 2300 1986) or leave flagged. 2283 C-Record from the 1984 De Rosa is explained (late-1984 brochure for 1985, as the 4096 rear).
  2. **Identity:** 2295 "Record 0104007 (1978, 4-hole)" (VeloBase only, 0 links) carries the part number the catalogues put on the 1982-85 clip-on 2300, overlapping 2299 1052/NT 1978-82; check the VeloBase photo before merging into 2299 / 2300 or retitling as a 4-hole variant. Add 2297 / 2305 (1052/1 bodies, kept apart 2026-09-28) to `REVIEWED_NOT_DUPLICATES`.

### Hubs

- Open source/model gaps: Maillard 1982-89 (700 Pro and Normandy variants); SR CRH-310 / 301 and MTH-100; Kyokuto K.K. hubs; Sansin ET-QS; later SunTour X-1 / XCE / XC-LTD and 1986 Superbe Pro front; Ofmega and Suzue identifications. Brand-only, unspecified flange and combined front/rear strings remain unlinked when several rows fit.
- Nuovo Tipo: find a second source for the C1264/1265 identification. The 1253 kidney-bean row 3232 versus Cat 17 p. 54 still needs image review.

### Chains

- Open: Regina Gran Sport Super Corsa Oro / Extra Black naming and independent source confirmation; Sedis 1977-78 chain identifications.

### Bottom Brackets

Only the 1973 Zeus, 1978 Bianchi and 1981 Kalkhoff catalogues carry a BB column; everything else folds the BB into the crankset cell.
- No suitable row: Zeus Alfa BB, "Alfa (Duralinox)" / "Alfa (Steel)" (1973 Z 46 / Z 41; only the Ref.36 Alfa chainring set 8145 exists).

### Headsets

- New source gaps: Lightrace (Gourgaud) on 1977-84 Peugeots (18: "Lightrace Luxe" 7, "Lightrace" 5, "non-loosening" 3, "competition", "Gourgaud Lightrace" 2; the DB has only 3032 Grand Luxe, undated, and 3033 Super, 1984; a Gourgaud / Lightrace catalogue or a dated Peugeot spares list would settle Luxe vs Grand Luxe); Tange Unique / Unique X "Loose-Proof" / Unique FE (5, 1988-89 Raleigh); Tange MES sealed (4, 1986 Miyata); Tange 230 SLP (1987 Peugeot); Falcon "HP-01G" (maker unknown).

- No suitable row: Tange TH-305 / TH-305C / TH 305 (6, 1984-90) and TH-108; Tange MX 600M; Shimano 600 AX (1981 Kalkhoff; no 600 AX headset row, 3089 HP-6200 600EX Arabesque 1978-84 is the nearest but AX may have had its own); Nikyo; YST steel CP; Zeus Alfa (2, 1973).

## Open: duplicate components

Use `node scripts/duplicate-report.js` for current candidates and
[report semantics](README.md#reviewing-duplicate-components). Reviewed identities
are in the [catalogue notes](.agents/skills/ingest-component-catalog/references/known-catalogs/cross-catalog-notes.md#reviewed-specimen-and-variant-distinctions)
and generator registries; automatic reports do not exhaust the manual queue.
Retain `/private/tmp/duplicate-review-2026-11-13/` for pending manual photo
comparisons until their identities are settled.

- **SunTour XCE crank specimen:** identify the original uncoded reference behind
  2002 from a readable marking or independent XE00/XE01 crosswalk before merging.
  [Evidence](.agents/skills/ingest-component-catalog/references/known-catalogs/suntour.md#xce-crank-dating-and-tangent-brake-link-review--2026-11-17-applied-and-validated).
- **Manual merge candidates:** review Simplex 4634 /
  4641–4643 and 2556 / 2557; Nervar 1657 / 1659; Pelissier 3457–3459;
  Belleri 2791–2794; Weinmann 1103 / 1104; Campagnolo 1472 / 1473 as merges
  or registered variants, using current report results and source evidence.
- **SunTour XCD rear 4789:** obtain a readable specimen code or independent
  manufacturer crosswalk before assigning RD-XD00 / RD-XD10; the held 1990
  catalogue comparison is already exhausted (see SunTour notes).
- **Gipiemme Sprint:** obtain independent fitment evidence to identify bare
  Sprint bike specs before selecting a numbered row.
- **Other front identities:** identify the inscription on 2457 FD-A350;
  compare bolt-on-clamp 2377 Challenger with numbered versions; establish
  2442 AV 62.10 Avant's relationship to Rival from coded evidence.
- **Huret / Sachs Huret rear dating:** obtain dated 1990s Sachs catalogue evidence for 4404–4406 Aris Classic and 4409 Rival 7000; compare Rider specimens 4410 / 4411 with coded 8958 before assigning years or merging. Seek a dated ARIS-generation source for 4412 and its 1988–89 links. See the [brand audit](.agents/skills/ingest-component-catalog/references/known-catalogs/huret.md#sachs-huret-brand-quality-audit--2026-11-16-read-only).
- **Peugeot PXR 80 Rival front/rear identification:** obtain a readable original **1988 French** part-code/cage photograph or period Peugeot parts specification for front **16962** (20T chainring difference; 1086-00 has conflicting 26T/16T maker ratings) and rear **16963** (34T required; distinguish the correct long cage). Reopen only for new specimen/parts evidence or a maker crosswalk; processed catalogues, modified/earlier specimens and failed photo retrievals are in the [targeted fitment hunt](.agents/skills/ingest-component-catalog/references/known-catalogs/huret.md#pxr-80-targeted-fitment-hunt--2026-11-16-follow-up).
- **Other generic Huret Rival rear links:** identify remaining 4401 / 8957 generations from original photos or explicitly coded fitment evidence; year or finish alone does not distinguish them. Obtain missing gear ranges for rear specs **14439 / 15744 / 16412 / 16584 / 16604 / 16624** from new period parts/fitment evidence before treating their capacity as checked; the reviewed catalogue tables omit them. Affected specs and checked pages are in the [generic Rival review](.agents/skills/ingest-component-catalog/references/known-catalogs/huret.md#generic-rival-bike-link-review--2026-11-15-pxr-80-correction-applied).
- **Superbe Pro front mounting identification (reviewed 2026-11-15):** specs 920 (1983 Bianchi Professional), 3299 / 8179 (1985 / 1986 Raleigh Prestige), 20864 / 21809 (1982 / 1983 Pro Miyata) link to endless-band FD-2000 **2652**, but their text only names the group. Obtain original photos or period fitment documents to distinguish it from braze-on FD-2050 **8268** before confirming/changing each link. The manufacturer model/mounting distinction is established; the retained VeloBase page's conflicting metadata is not grounds to rename the row or repoint bikes. See [SunTour evidence and identifier review](.agents/skills/ingest-component-catalog/references/known-catalogs/suntour.md#fd-2000--fd-2050-mounting-and-retained-velobase-identifier--2026-11-15-review).
- Huret: obtain a period crosswalk or coded specimen to distinguish 8961 AV62.1D from 8488 Rival 1086-00 for front specs **16411, 16583, 16603, 16623, 16661**. Review the manufacturer capacity conflict from a new maker document before changing definitions; see the [source comparison](.agents/skills/ingest-component-catalog/references/known-catalogs/huret.md#rival-fronts-1086-00--av621d--2026-11-16-evidence-review). PXR 80 front/rear work is consolidated in its dedicated item above.
- Identify the 1984 Peugeot Duopar rear specs **12163 / 13762** and Motobecane **22790 / 22811 / 22832** from cage/material/code evidence; reconcile 4276 / 4400 for the explicitly named Super Mirage Eco and City-Becane Eco **23182** before linking. Resolve Motobecane fronts **22710** Rival, **22810** S PP and **22831** Challenger S. from variant evidence. See the Huret audit and existing Motobecane link decisions.

## Open: source hunts

Still-wanted sources and the next lead for each. Searches already made, dead ends and site methods are in the [source-hunt log](.agents/skills/ingest-component-catalog/references/source-hunts.md); do not repeat a logged search without a new lead.

### Identity questions from held catalogues

- **Ritchey 2000 identity follow-ups:** obtain construction/version evidence for Fuzzy Logic Pro and Comp vs 10402; Comp Road seatpost vs 10169/8408; road Pro Aero/Aero OCR rims vs 10190/10191. Resolve tier/weight and OCR front/rear contradictions before inserting, renaming or widening dates. See [the four unresolved identities](.agents/skills/ingest-component-catalog/references/known-catalogs/ritchey.md#unresolved-identities--unchanged); missing/cropped pages do not support inferred specifications.
- **Campagnolo 2000 identity follow-ups:** obtain code/specimen crosswalks for the 16 unresolved cases in the [catalogue notes](.agents/skills/ingest-component-catalog/references/known-catalogs/campagnolo.md#unresolved-identities--no-speculative-rowslinks): Chorus post SP00-CH272, AC-H/AC-S and Pista BBs/crank/hubs, RD99-MI309 vs 4122, Chorus EP00-CH09R/L vs 6340/7092, BR00-RE vs 578, Mirage fronts, Record rear hub, MK2 Titanium 9-speed / ED-C / CS99-RE08 cassettes, and WH99 Shamal / WH00 Shamal Pista. Keep existing identities and do not insert speculative duplicates.
- **EDCO headset / BB identities:** see [EDCO notes](.agents/skills/ingest-component-catalog/references/known-catalogs/edco.md). Need a code chart or specimen measurements to assign its 108 g / 37 mm headset to 2987/2988/2990, and axle/variant identification to reconcile its 119 mm / 292 g BB with 53/54 (122 mm specimen notes, 291 g). Keep these rows unchanged until identified; no duplicate inserts by name alone.
- Identify **Nisi 5138** M20 Pista Speciale against 00120 / 00130 and verify **5145** Sport Toro Stretto weight from a specimen or VeloBase photo; see [Nisi evidence](.agents/skills/ingest-component-catalog/references/known-catalogs/nisi.md).
- **Spidel 700 RA pedals:** check whether the Le Cycle no. 119 Spidel 700 group box (Tonton Vélo t=10923, in the log) is enough to link the unlinked Peugeot "Spidel 700 RA" specs (see peugeot.md).
- **Lyotard (held catalogue, data_source 380):** optional rows 25R / 25A / 3R / 66R / 75R / 88R / 77RN / 45 CAN / 65 N / PL 200 / 460 D BMX (no specs name them; PL 200 vs 3823 "LA PL 2000" unresolved) and years for undated 3817 5R / 3822 99 / 3800 MB 23TF. Lyotard 90 (12407, 1984) still has no source.

<a id="sr-sakae-next-work"></a>

- **SR / Sakae remaining evidence gaps:** seek exact catalogue/specimen evidence for the unresolved codes below. [Processed sources, rejected aliases and current results](.agents/skills/ingest-component-catalog/references/known-catalogs/sakae-ringyo.md#four-sr-models-from-fuji-1989--applied-2026-11-15-source-412).
  - **Full 1983-88 maker catalogue recovery parked:** No.19 (Sep 1983) and No.23 (Aug 1988) reported, no complete scan recovered; No.20–22 unseen. Velo-Pages 58555 still HTTP 500 on 2026-11-15. Reopen for a new holder/scan/recovery endpoint; repeated broad searches have yielded no full-range source.
  - **Next partial-source work:** reconcile the Koga-Miyata 1986 SR MTB-204 bar against current rows and Falcon fitment; inspect Trek 1987 pp.13-14 for MTB-209 / MTB-210 / FX-200; obtain the printed Schwinn 1985 CXC-T310 specification block before proposing a row. See the 2026-11-17 shortlist in the source-hunt log and the handlebar worklist; do not repeat processed sources listed in the SR notes.
  - **Keep unresolved:** CRE/CR-E/CRE100 identification (do not alias to CLE-100 11308); MTE-110 identification (keep MTE-100 5849 and MTE-300 11307 separate); SRE-100; the rest of the SAC/SUC/FXC/AXC/CXC range; CRH-310/MTH-100 hubs; MTS-131/CPS-80; MTB-224/CTR/CTSD. Seek exact model/specimen crosswalks; generic names or later fitment do not identify an earlier configuration.

### French makers 1977-89 (mostly Peugeot specs)

- **Maillard / Sachs-Maillard hubs and freewheels 1982-89** (Atom / 700 / Normandy dural hubs, 700 Pro / SH freewheels): want a Sachs-Maillard 1987-89 dealer leaflet or a dated Peugeot dealer spares list (pièces détachées) c. 1979-89.
- **Solida / Nervar cranks 1982-89** (Solida 5271, 5270A, 5371 / S 371, 52D, 520, 5470; Nervar 5570): same Peugeot spares-list lead, or a Solida leaflet.
- **Lightrace / Gourgaud headsets 1977-84** (Luxe vs Grand Luxe, about 19 Peugeot specs): same Peugeot spares-list lead.
- **Motobécane non-illustrated spares editions 1983-87:** Velo Vintage à Gogo poster MAFAC 2000 says he has them (not posted). Unopened there: t29374 / t29375 Peugeot 1979 / 1980 tariffs, t12991 Cologne 1984 show report.

### Dealer and mail-order catalogues

- **Load the 12 Nashbar 1988 house bikes (pp.30-40) with `ingest-bike-specs`:** transcriptions in the session scratchpad `nashbar88/out/bikes.json` will not survive; re-read the pages from the logged download. Decide first whether Nashbar is a bike brand. The specs name further gap parts: SR MTS-300 / MTS-130 stems, SR 104 bar, MKS MR-1000, Tange FL-270S, Shimano AT-55, Specialized Lamda saddle, Panaracer Ridge Line III, Kusuki Ole stem, Dia-Compe 983D / N500A / 290 levers.
- **Other US dealer / mail-order catalogues 1985-92 (Performance, later Nashbar issues, QBP, J&B, Colorado Cyclist):** no script-readable scans. Next leads are browser-only: bikeforums thread 1214636 (Performance Fall/Winter 1985-86), the bikeforums "Official Vintage Bicycle Manufacturer Catalog List", retrobike thread 431743, and the disraeligears La Bicicletta Guida '87 / '89-'95 index.

### UK retail catalogues (need a person to ask or visit)

- **Ron Kitching "Everything Cycling" 1984-89 and Freewheel catalogues:** best lead for Rigida rims (Chrolux, Jade, Saphir, CTX 10), Viscount saddles (2285, 2296, Terra / MTB anatomic) and the 1970s Brooks range. Next actions:
  - Ask Otley Cycle Club (John Barnett / Trevor Howe, through the club contact form) which 1980s Everything Cycling editions are on display in its Ron Kitching Library, and whether they can be photographed.
  - Confirm the edition years held under Warwick MRC record NCM/1/1403 through its catalogue interface or archivist, and ask the MRC for its 1983 Freewheel scan.
  - Other holders: retrobike 159101 / 21901 members, retrobike 435965 / 3405983 (1983 / 1989 Freewheel).
- **Brooks 1960-90** (B15 x4, CR3 x3; dates for 5303 / 5304 / 5310 / 5315 / 5282 / 10057): a 1970s UK retailer catalogue, or the saddlewax.com owner's 1971 price list and 1973 Raleigh saddle catalogue scans.

### Japanese and Taiwanese makers

- **Shimano BB-UN73 (121):** find a dated 2002/2003 Shimano catalogue/service page confirming its introduction and a positive manufacturer discontinuation statement; reopen only with a new manufacturer-document lead. [Evidence and already-checked sources](.agents/skills/ingest-component-catalog/references/known-catalogs/shimano.md#bb-un73-unsupported-dating--evidence-review-2026-11-15).
- **Tange headsets 1984-90** (TH-305 / 305C, TH-108, MES sealed, Unique X / Unique FE (bare Unique is now 11346), 230 SLP, MX 600M): obtain the headset pages through the [Yaesu acquisition task](#yaesu-next-work), retrobike "Tange Catalogues" archive (browser only), or a 1985-90 US distributor catalogue; check the 1985-87 Trek, Puch and Panasonic fitment tables.
- **Bars and stems 1985-92** (H.L. DR-8 / DR-9 / Dirtdrop / semi-rise / HS-P; SR MTB-220 / 224 / 227, CTR, CTSD; Kusuki KR-LB / SMC-F; ITM Mondial / Krono / Italia aero; Franco Italia; ATAX CTA randonneur; CMC-709 / MS-710): Brügelmann 1986-87 and 1989-92 (not online; ask the forum holders named in the log), an offline Taipei Cycle Show or Taiwan Bicycle Exporters' Guide. Reconcile Koga-Miyata 1986 p.19 BMT-3-26 / Rockey-2 with current rows and Miyata Rocky II / 2 fitment before proposing inserts or aliases; check the Fuji 1988-91 transcriptions against scans (fitment leads and verified Koga pages in the source-hunt log).
<a id="yaesu-next-work"></a>

- **Yaesu free-source recovery — deferred pending a new scan/holder lead:** seek freely available contents/index and SR / Tange / MKS / Kusuki pages from ALL CATALOG 84/85, the November 1985 parts manual or 実用カタログ’87 (November 1986). Reopen only for new free material; see the [2026-11-17 acquisition hunt](.agents/skills/ingest-component-catalog/references/source-hunts.md) for exact targets, holdings and exhausted searches. Paid acquisition is deferred by user preference.
- **VP Components pedals c. 1984-90** (VP-230 / 330 / 331 / 333 / 382S / 389, VP500; 9 specs): a VP pedal catalogue or importer page c. 1989-90; VP needs a component_brand row first.
- **Dia-Compe 1987-93** (BL-08 aero, 250S aero, GX-400 Aero lever 18835, DC 630, 983D brakes 22360 / 22462, 984 / 984D): retrobike threads 306479 and 361996 (a poster has the 1992 catalogue; browser only), eBay 800322888787 (1989/90 MTB brochure, photos not retrieved).
- **Panasonic USA 1985-89 fitment evidence (read 2026-11-16, [panasonic.md](.agents/skills/ingest-bike-specs/references/known-catalogs/panasonic.md)):** decide, then prepare SQL for review:
  1. **Kusuki identity calls left from the SR / Kusuki load:** WP-RB (1987 Miyata 215 ST / 615 GT) vs WPR-B 11330; bare "WIN" AH (1985 Raleigh x8) vs S-WIN 11333 / WIN Σ 11334; "KUSUKI SIGMA Alloy" (1985 Miyata 912) vs 11334; brandless "S-WIN-AH" (1980 Miyata 210 / 110) vs 11333, which would move its year_from to 1980.
  2. **Identity calls left from the MKS / Sugino / Dia-Compe load:** Sugino "TGT-LP" (1985 Miyata 610, blocked by a `null` key) vs TGT 11336; Dia-Compe "PN-280" x2 / "PN-281" (1984 Miyata) vs 8112 / 8113; "DIA-COMPE 280 mountain lever" (1983 Miyata Ridge Runner) vs 8112 (from 1984).
  3. Identity calls: KKT RT-E1 vs 3773, Dia-Compe 730 (Nashbar 1988 prints 730 GX, long reach 52-72mm: the GX-N series 8082, GX730N, not the 1964 Dia-Weinmann 8929), Sansin ET-Q / ET-QS.

  Also decide whether to load Panasonic as a bike brand (transcriptions in `/private/tmp/panasonic-1985-89/`). The 1977-84 catalogues are unread for components; of 1990-95 only the 1992 DE spec table has been diffed (low yield, see panasonic.md), so read the others only for a specific code.

### Italian makers

- **Gipiemme 1980-83:** a genuine early-1980s brochure (velo-pages albums 1482 / 69471 survive only as thumbnails).
- **Ofmega:** still unsourced Vantage Quattro, Super Corsa MC-130, Nuovo Mondial; read the disraeligears Bicisport Apr 1985 group test and La Bicicletta Apr / May 1984 Mistral adverts.
- **Vittoria clinchers 1982-93** (Rally, Competizione, Techno, Randonneur, Zaffiro): no lead yet.
- **Campagnolo catalogues 1976-81 and 1983-84** (mainly dating, e.g. 1976 / 1984 "Super Record" hubs); record the May 1984 La Bicicletta Victory range advert (disraeligears) as 1984 evidence.
- **Bianchi catalogues 1974-77 and 1979-80;** 1991-99 PDFs in the retrobike archive (browser only).
- **La Bicicletta (disraeligears):** load the May 1984 racing-bike buyer's guide (12 scans) with `ingest-bike-specs`.

### Other brakes, tyres and components

- **Brakes with no source:** Modolo Quattro / Start, CLB GL 47-60 and Competition aerodynamic (a c. 1980 CLB catalogue is partly photographed on eBay 305827471354), Altenburger S3 / 53 S3, Lee Chi cantilevers, Chang Star 500, Polygon AF-500.
- **Tioga 1992-94 source gaps:** find a dated Surefoot-6 source for the 1993
  Bianchi pedals; recover printed tyre pp.20-25 from a new complete 1992 scan or
  holder. See [missing pages and checked copies](.agents/skills/ingest-component-catalog/references/known-catalogs/tioga.md#broader-1992-inventory--applied-and-validated-2026-11-17)
  before repeating an archive search.
- **Brügelmann follow-ups:** Cobra saddles, Mavic "Titan" rims, Hutchinson Krono 9267 vs 6810.
- **Shimano 1979-80, 1983 and 1985 general catalogues:** low priority; the held June 1984 dealer catalogue spans 1983-85 and the remaining gaps are mostly ambiguous spec text.

### Archives with unread material

- **Velo-Pages recovered component scans:** inventory/reconcile Stronglight 1958,
  Simplex and Barelli adverts, and OMAS
  1978 printed p.4 (101/S Big Sliding hubs); compare the inventoried Dura-Ace EX
  brochure with current descriptions. Triage the remaining Detto Pietro pages
  for any supported component categories. Retain
  `/private/tmp/velo-pages-unread-2026-11-17/` scans and capture inventories until
  these reviews are complete, then clean up. See the [recovery and reading
  evidence](.agents/skills/ingest-component-catalog/references/source-hunts.md#log).
- **Velo-Pages remaining recovery:** seek a new readable scan/holder for Sedis
  May 1971 (album 6165) and OMAS 1978's missing pages; check the recovery log
  before repeating thumbnail-only queries. Recover the bike clusters
  Falcon Merckx 1973 / 1974, Original Plastic Bike 1973 and Bottecchia 1973 using
  `scripts/velo-pages-wayback.sh` and the source-hunt log before ingestion.
- **bikalog.org component inventory:** reconcile the Campagnolo 2001 range catalogue and Spare Parts & Tools book with the processed 2000 rows, and compare the 2000 Record 10-speed introduction with held evidence. Secondary: establish issuer/date and reconcile the Polish IRC tyre sheets indexed 1999. See the free-component shortlist in the [source-hunt log](.agents/skills/ingest-component-catalog/references/source-hunts.md).
- **bikalog.org bike-catalogue backlog:** review Koga Miyata 1980-2001, Nishiki 1987, Raleigh 1991, Colnago 1989 C35 and Bianchi road 1985 / 1986 for future bike ingestion.
- **Palo Alto remaining identifications:** Regina chain / freewheel names, Fiamme / Super Champion clinchers and Sugino Maxy II; see `cross-catalog-notes.md`.

## Open: held-source follow-ups

- Resolve **1981 Bianchi Super Turismo brake spec 6595** from a period Bianchi parts/correction document or original marked/measured calipers: establish whether its printed **130/131** means alternatives or an error for a front/rear set such as **131/133**, then identify matching DB rows before linking or splitting. [Universal evidence](.agents/skills/ingest-component-catalog/references/known-catalogs/universal.md#bianchi-130131-fitment-follow-up--2026-11-17-no-db-changes).
- **1985 Raleigh Crested Butte XT crank [3564] — identification, not an FC-M700 source gap**: source 26 printed pp.16–17 pairs Deore XT touring/off-road with **FC-6206**, already row **1797** (1984–87). Printed p.107 gives Biopace **48/50 outer, 38/44 middle, 28 inner**, not the Raleigh's **46/36/26**. Source 344's eight sheets contain no crankset. Leave the spec NULL until an original Raleigh photo or period parts document identifies it; do not infer FC-M700 or substitute later FC-M730.
- **La Bicicletta Guida '96 broader backlog**: review pass 3 entries (MF Components, Tioga, MBS, Syncros) after checking current brands (low link yield, as loaded bike catalogues stop at 1994); new candidates from that review: 6896 Pista CL Servizio Course vs 10570 Pista CL, 1570 FRM CU2 vs 10279 / 10280; reconcile Mavic CXP 30 Argent clincher coverage with 5063 before adding a row; unloaded entries OMAS 120 Big Sliding, FRM rear "Campagnolo Compatibile". See [catalogue evidence](.agents/skills/ingest-component-catalog/references/known-catalogs/cross-catalog-notes.md).

Review evidence and proposed actions: `/private/tmp/existing-source-review/review.md`; page images in the same directory. Catalogue notes retain the page references so the findings do not depend on temporary files surviving.
