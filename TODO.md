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

- [ ] **Reusable generator/live-DB comparison:** replace scratchpad-only scripts
  with a maintained command showing links gained, lost or changed per spec,
  scoped to already-loaded catalogues and preserving the current generated file.
- [ ] **Persist link decisions and evidence:** distinguish confirmed, inferred,
  ambiguous, missing-source and intentionally unlinked cases so they can be
  revisited deliberately. Today `COMPONENT_OVERRIDES` `null` entries live only in
  the generator, so decided values (e.g. "Selle Royal Aero Black") still list as
  actionable in `/linkCoverage`. Leaning towards a nullable `bike_spec.link_status`
  the generator writes.
- [ ] **Next step per actionable value in `/linkCoverage`:** count
  `component_detail` rows for the detected brand in that category sharing the
  model word; >= 1 -> `next: "override"` with up to 3 candidates, 0 ->
  `next: "source_hunt"`. Compare brand and model text with spaces stripped:
  "LePree" / "Le Pree" (SunTour) made the LePree shifters look like a source gap.
- [ ] **Multiple evidence references per component:** design a component/source
  evidence table with page, supported facts and uncertainty. Current `source_ref`
  records the last source that changed a component; it cannot retain every
  catalogue attestation. Preserve that meaning until a migration is reviewed.

## Open: Mavic quality follow-ups

Evidence and exact affected specs are in the
[Mavic audit](.agents/skills/ingest-component-catalog/references/known-catalogs/mavic.md#general-quality-audit--2026-11-15-read-only).

- [ ] Review 3397's `Pairs 505 RD, 506 RD` description wording against the
  maker's rear-hub table; [evidence](.agents/skills/ingest-component-catalog/references/known-catalogs/mavic.md#peugeot-506-rd-hub-identification--2026-11-15-read-only-review).
- [ ] Reconcile the Reflex, T217, T261 and CXP 30 broad/finish rim rows listed
  in the audit against the 1996/1997/1999 scans and the variant policy; prepare
  supported merges or narrower descriptions after establishing identity.
- [ ] Verify Open Pro dates/identities 5099 / 5100 / 10183 and the 31.8 mm
  870 front derailleur 2410 against maker/specimen evidence; source dates for
  the undated legacy rows listed in the audit, prioritising linked 192 rim 5050.

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

- Identify a marked **FD-3000-SS** specimen or manufacturer drawing and compare it with a-3000 **2600** before linking 1987 Miyata Triton front **22519** or adding a row. Sutherland's SS/GT/GX specifications and the VeloBase specimen identifiers are in the [Triton review](.agents/skills/ingest-bike-specs/references/known-catalogs/miyata.md#triton-alpha-3000-derailleur-review--2026-11-16); resolve the imported decade dates only after the identity is established.

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

- **Weinmann centre-pull follow-ups after read-only review, 2026-11-15:** keep
  family row 7929 (1966-1985, 81 links) separate from the specific 610 row 1136
  (1966-1987 after approved enrichment, two 1986 Peugeot links) and 750 row
  1148 (1970-1980, no links).
  The October 1981 catalogue p.8 confirms distinct 610 (49-61mm) and 750
  (57-75mm) reach configurations. **Remaining:** decide a deliberate frame-variant/
  spec representation for the 1987 combined equipment before linking.
  The 1983-84 Raleigh 610/750 specs 4727 / 6357 are already
  linked to 7929. The original 1987 table p.15 confirms Zenith 10 / Granada 10
  specs 8781 / 8804 combine Gents 610/610 and Lady's 610-front/733-rear equipment;
  retain NULL until a deliberate frame-variant/spec representation is reviewed.
  The identity review made no DB changes; the subsequent approved 1136 enrichment
  is applied and validated. No matcher changes. See the
  [Weinmann notes](.agents/skills/ingest-component-catalog/references/known-catalogs/weinmann.md).

## Open: component data follow-ups

- **Component dates and metadata review:** use `node scripts/quality-report.js` for current IDs and reasons. See [scope, evidence and validation](README.md#checking-database-quality). Review identity/source evidence before changing links or dates; inspect the flagged descriptions before assuming truncation. Flagged dates are review candidates, not proven wrong identifications: distinguish catalogue attestation dates, later bike fitment, reused names and actual generation mismatches before changing dates or links. Narrow follow-up list: 3141 Tange Falcon (5 specs), 3388 Normandy Luxe Competition (2), 1398 Sedis Gold (2), 6899 Vittoria Pro L Slick (1), 1365 Everest Serie Special Oro (1), 9126 Gipiemme Crono Sprint (1).
- Need a second source: Regina Gran Sport Super Corsa Oro chain, Sugino Maxy II and the Nuovo Tipo C1264/C1265 identification (Bikecology 1976); the Regina Super Corsa Oro chains and the Fiamme / Super Champion clincher rims (Palo Alto 1976). See cross-catalog-notes.md.
- Not mapped yet: Ideale 88 / Titanium and OMAS sealed hubs (Bikecology 1980); the SunTour "syncro-shift" Cyclone II lever (Palo Alto 1981/82; no part number, no row).
- Campagnolo hub 1253: check Cat 17 p.54 against row 3232 ("1253 kidney-bean at 1972 only", still current in 1974); needs the page image.

## Open: link coverage (bike_spec -> component_id)

Brand-only, size/material-only, either/or and house-part specs can correctly remain unlinked. Do not infer a model from bare `Campagnolo`.

`/linkCoverage?unlinked=N` is the live worklist. Leave-unlinked calls and reviewed cases are in [link decisions](.agents/skills/ingest-bike-specs/references/link-decisions.md); do not relink them without new evidence.

### Open after the 2026-11-01 passes

- Judgement call: Biopace 48/38/28 on the 1988 Raleigh Ozark II / Royal [18009 18045] and 1989 Royal ("Shimano Biopace 48/38/28t"; derailleurs "Wide Ratio, indexed shift" / "Shimano SIS indexed", the Royal page only says "a BIO-PACE chainset"): no group printed, FC-B124, FC-M450, FC-M350 all fit.
- Source gaps, no row (all spellings counted; the 2026-11-01 web sweep in the source-hunt log found nothing): Simplex SX 620 rear (5, 1987-88 Peugeot), Nervar "2020 S sealed B.B." (2020 / 3020 crankset rows and links are already loaded), Solida 52D (3), MKS AR-3 (6, 1987-89 Raleigh; not in MKS Edition 11 c. 1985 either, so later), SR CRH-310 hubs (5, 1986 Raleigh), Strong NS-3 (3, 1990 Bianchi), Vredestein Racer II (4, 1988 Raleigh).

### Source gaps (no suitable row)

- No suitable row (source gaps): Reydel Profil (6), Vittoria Flash M19. (Bare "Rapidfire Plus" on the 1993 Bianchi MTBs resolved 2026-11-13 by each bike's rear derailleur group, 8 links.)

Named parts with no suitable period row or no source yet (worth a search if a source turns up):
- Headsets and bars: ITM Mondial bars, stems 100 / 200 / 300 / Pro and 201 seatpost; Kusuki WPR-B / WP-B bars and "WIN" stems; SR / Sakae 1983-87 seatposts (unidentified fluted models); Kalloy SP-248; PIVO de Luxe stem; Modolo Flyer. Searches 2026-10-20 found nothing for Tange Seiki, ITM, Kusuki or SR 1983-87 (only eBay listings; Reminiscence slugs `sakae82`-`sakae87`, `sr83`, `sr87`, `itm*`, `kusuki*` 404).
- Derailleurs, brakes, chains: Simplex Competition crankset and seatpost, Super Criterium and Prestige stem shifters (no source on hand); Everest Special Cromo freewheel (needs an Italian Everest catalogue). Find a second source for the Regina Super Corsa Oro identification (see cross-catalog-notes.md).
- Tyres and rims: Vittoria Open Tubular Flash M19 and Zefir 700x20C, Panaracer Smoke / Dart Comp, Rigida Jade / Saphir, Ukai EX-17, FIR Tour / Pulsar, Dia-Compe 500G; the five Raleigh "Vredestein 700 x 20C Racer HP" specs (no Racer HP in the 1979 trade list); Raleigh "Mavic Sprint" (3, no row).
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

- Remaining SR source gaps: CT-P5E; CRE / CR-E / CRE-100 (keep separate from CLE-100 11308); SRE-100/105; MTE-110 (not MTE-100 5849). See the scoped SR worklist for current evidence. Also no row: Mori Stainless Clad (1986 Miyata); Kalloy SP-243 / SP-250 (1989 Bianchi, with the SP numbers below).

- Source gaps (left 2026-10-30): 1982 Peugeot PH 12 "Simplex Dural, 24 mm" (no 24 mm Simplex post) and 1976 PY 10 "Simplex dural, anodised" (8375 SLJ 3639 is polished, 7305 SLJ4164 starts 1978).
- Biggest pot: 1987 Raleigh "Sakae fluted alloy with single Allen bolt adjustment" x10 + "SR fluted alloy..." Royal 18 [8836]. The 1983-84 catalogues print the same wording with "CT-P5" (-> 5857), but 1987 drops the model and the 1984 Sirocco was a CT-P6; part of the SR 1983-87 source gap.
- No suitable row: Kalloy SP-248 / micro-adjust (8) and bare SP-200 / 241 / 242 / 251 (5, likely Kalloy numbers); SR CRE / CR-E / CRE-100 (not CLE-100 11308); SR CT-P5E (5, existing do-not-link); SR MTE 110 (MTE-100 5849 is 1980); Strong NS-3 (3); ITM 201 (3); Gipiemme Quattro; Ofmega Premier / Super Competizione; Shimano Santé (2); Shimano Deore 1986; Control Tech; Zeus Alfa; Simplex Competition (8, plus 2 either/or with Laprade 505).

### Rims

- New source gaps (named models with no row): Ukai LA-14 (3) / 7Z, Weinmann Aero Alloy (6, 1988 Raleigh) and 425 X, Sumo 7X (3, 1986-87 Peugeot), Velotech by Mavic (3, 1986-89 Peugeot), Araya 14G, Rigida Jade / Saphir / CTX 10, Wolber Alpine.

- No suitable row: Akront 700c / Pista (4, 1973 Zeus); Ambrosio California (3) and disc wheels; FiR Tour, MTB Pro, tri-spoke (3); Martano G-P80, Pro; Mavic Sprint (3, ferrule / tubular wording); Rigida Jade (3), Saphir (2); Sumo 14F; Ukai 22A, EX-17 (2); Weinmann 116, 716E (2), and the 1987 Raleigh "hollow section 700c eyeletted" (5, model not printed).

### Saddles

- New source gaps (named models with no row): Vetta Maxi (3, 1986 Miyata 2, 1987 Peugeot), ISCA Aero Airline (3, 1986 Falcon), Ariake 77C-DX, Kashimax GTV, Italmanubri 635-S (2), Royal 6275, Falcon "AK 2603".

- No suitable row: Brooks CR3 (3); Concor Mountain-Pro / Mountain-Pro (4); Gallet 30 / 31 / 31 race / 33 / course (5); Gauthier Rilsan race (2, already listed); Isca 406 (3), 407 (3), Competition; Reydel Profil (7); Royal 463/2; San Marco Luxe race; Selle Italia Aero II (3); Tenor (3); Viscount 2285 / 2296 / Terra / Touring 2200 / Nuovo micro-adjust / anatomical mountain (8); Italia Corsa, Bianchi Corsa.

### Stems

- New source gaps (named models with no row): J.Y. M4P / M3P pulley (5, 1989 Bianchi); Kalloy KA-60/80/100 (3) and KA-222P (1989 Bianchi; possibly the undated 6570 Kalloy AL-222, no evidence); H.L. HS-P (2); SR AEROX (2) and CPS-80 (1986 Miyata), SR MTS-131 (1987 Peugeot); Kusuki S-Win (2, 1986 Miyata, alongside the Kusuki "WIN" below) and Rocky 2 / Rocky II (2); Falcon "Aero alloy Model 200" (5, no maker printed).

- Judgement call: Sakae Royal forged alloy, 1987 Randonneur 18 [8848] (no Royal row reaches 1987). Bare "Alloy AH", 1985 Raleigh Pursuit [3503], set do-not-link 2026-10-30.
- No suitable row: 3ttt special mod. Colnago (7, 1979 Colnago); Kusuki "WIN" AH / alloy (8, already listed) and Rocky III adjustable; Philippe Professionnel / Professional (5, 1975 Motobecane and 1978 Peugeot; only Philippe Competition 1980 exists); PIVO De Luxe (3, already listed); KL alloy (3, 1987 Bianchi); G.B. Classic Line (2, 1981 Raleigh); JY M3 / M3 low rise (2, 1990 Bianchi MTBs); ITM Pro and ITM forged laser etched (1990 Bianchi); Modolo Flyer (already listed); De Rosa pantographed; Nitto Technomic Aero (existing do-not-link).

### Handlebars

- New source gaps (named models with no row): H.L. DR-8 / DR-9 / Dirtdrop / MTB-110 / MTB Bulge / semi-rise (~10, 1987-90 Bianchi; no H.L. bar rows at all, the largest group), Kusuki KR-LB / BMT-3-26 and SR MTB-301 (1986 Miyata), SR MTB-204 (1986 Falcon), ITM Krono, Kusuki SMC-F (1989 Bianchi), Cinelli Almarc leather covered (2, 1986 Cinelli; not identified).

- No suitable row: 3ttt special mod. Colnago (7); SR MTB-224 Power Bulge (5, 1990 Bianchi) and SR/Modolo anatomic (4); T.T.T. Rekord Standard / Record Standard (2, 1978 Bianchi; the 3ttt Record 1st version is ranged to 1975) and T.T.T. Franco Belge (2, 1975-76 Raleigh); Kusuki WP-B / WPR-B (7, already listed); ITM Mondial Pista and ITM Italia aero; H.L. racing / MTB bulge / semi-rise (5, 1987-90 Bianchi); SR CTB, SR CTR Randonneur (3, 1986 Raleigh); PIVO Professional (3, 1975 Motobecane); Belleri touring bar (2, 1981 Kalkhoff); Mountain Bike CMC-709 / MS-710 (1984 Peugeot MBs); Modolo Flyer; Corsa Strada model (3, 1981 Bianchi); Competición (2, 1973 Zeus).

### Tyres

- **Date-review worklist after approved corrections, audited 2026-11-14:**
  Three tyre specs remain outside recorded dates:
  6889 Vittoria Giro del Mondo (7070, Bianchi 1990); 6899 Vittoria Pro L Slick
  (1138, Bianchi 1987); 9247 Vittoria Corsa (18313, Bianchi 1986). Review identity
  and original evidence before changing dates. The 16 linked specs with incomplete
  component dates also remain open: 6743 Clement Colnago (7), 6812 Peugeot Route
  by Hutchinson (6), 6837 Michelin Hi-Lite Supercomp H.D. (1), 6846 Peugeot Challenge
  (1), 6886 Vittoria Flash M23 (1). Michelin's 26 flags are resolved; see the
  [Michelin notes](.agents/skills/ingest-component-catalog/references/known-catalogs/michelin.md).
  Select's 1986 date and the French catalogue dates retain their inference caveats.
- **Then: review new-row link candidate.** 1973 Zeus Z 59 spec 59,
  "D'Alessandro Mondiale Tubulars", now has a candidate: 11136 Mondiale,
  1973–82 (Brügelmann 1973, source 399). Review model/source evidence before
  preparing SQL. It is no longer a missing-row source hunt.
- **Other held-evidence questions:** 1979 Miyata 1200 spec 20283 "NATIONAL
  Panaracer tubular 230" versus 9097 Cycle Pro National tubular (branding
  unresolved); 1987 Peugeot Challenge gumwalls x5 (15794/15813/15832/15851/15869)
  versus existing 6846 Peugeot Challenge, already linked from 1983 spec 11710
  (source/continuity unresolved). These are candidates, not approved links.

Remaining named source gaps: CST C-740 / C-860 / C-861 (6, 1989-90 Bianchi), Vredestein Racer II (4, 1988 Raleigh), IRC Crosscountry (3) and Peak (1989 Bianchi), Michelin ATB Surmond (2, 1989 Peugeot) and Chevron gumwall (1983 Peugeot), Panaracer Cannonball Express and Cheng Shin Ridge Line III / Canyon Express (1986-87 Peugeot), National Trisport (1986 Miyata), Specialized Ground Control / Crossroads II (1988 Raleigh; 9910 Crossroads is 1983-84), Vittoria Oscar X (1989 Bianchi).

Remaining variant questions: Panaracer Smoke/Dart has 8 unlinked specs (bare
Smoke x3 including 1994 Cinelli, combined Smoke/Dart Comp x4, Smoke Comp K x1).
The 1993 Project 5 / Project 7 are 700C: do not use a 26-inch Smoke row.
Identify front/rear and construction before splitting/linking combined cells.
Keep the compound 1989 Bianchi "Vittoria Formula 1 and Juniore tubulars"
(6875 / 6890) unlinked.

- Also unresolved: 1994 Cinelli Genius Strada / Supercorsa "Vittoria CX tubular"
  (several CX variants); 1982 Battaglin "Vittoria Trofeo" (9255 Trofeo 250 starts
  1984; new 11008 Trofeo Special is 1988); 1991 Bianchi "Panaracer Record"
  (only 6841 P-27RD, 1980); 1977 Peugeot "Peugeot Professionnel or Clement
  Criterium" (either/or). No suitable row: Clement 88 Competition, Specialized
  Umma Gumma, IRC Peak Sigma, Panaracer Smoke Comp K, 1994 Cinelli Sava Snake
  [20185].
- No suitable period identification/row: Peugeot Trophy tubulars (8), Peugeot
  Professionnel / Professional 225 g / Super Competition; Wolber Transalpino (2);
  Clement Meeting; Michelin Competition Slick; Vittoria Uni / Open Tubular /
  Zefir / Flash M19; Vredestein Racer HP (5, plus Racer II x4); Dunlop Sprite
  (3); D'Alessandro Leggerísimo Pista / Super-Cross; IRC Triathlete/Triathlon
  (5) / Featherlight; CST C-631 / Prolite (6, plus C-740/860/861 x6); Bianchi
  Dakar / Advantage-SL; Impere Seta tubeless. Prioritise period CST and Vredestein
  sources after the held-evidence checks. Earlier source hunts are in the
  [source-hunt log](.agents/skills/ingest-component-catalog/references/source-hunts.md); do not repeat them without a new lead.

### Pedals

- No suitable row: H.K. / VP VP-330 / 331 / 333 / 389 / 382S / 230 and VP500 (~10, 1984-90; the largest); HTI-A1 / HTI-P15 / HTI-851 (6); SR SP-452 (3), SP-513 / SP513C (2), SP-518 (2), SP-153 (2), MP 150, Lowfat Pro and CTP-170 (1990-93 Bianchi); MKS AR-5, PB-20, NT-1 (1986 Miyata), C 5000 ATB and AR-3 (6, already listed; none in the MKS Edition 11 catalogue); Tioga Surefoot-6 (4, 1993 Bianchi); Union 632 (2, 1984 Raleigh); Lyotard 77R (3) and 90.

### Shifters

- No suitable row: Shimano 1993 Rapidfire Plus for XTR / Deore DX / Deore LX / Exage LT / ES (8, 1993 Bianchi; only Altus C10 7733 exists); Shimano Z501 stem shifters (3, 1987 Peugeot), 532 / 525 SIS (1987 Bianchi), EM-30 / EM-50 (1985-86 Raleigh), Z105, Deore XT-II bar-con SIS (1989 Bianchi); Simplex ICL Index (1989 Peugeot); SunTour PUB-M, DLN, Hero (1985-86 Raleigh).

### Brake Levers

- No suitable row: Modolo Quattro aero (2, 1989-90 Bianchi); Shimano Z-324 dual levers (2, 1986 Miyata; only Z325 / Z326); Universal AER (2, 1986-87 Colnago); Dia-Compe GX-400 Aero (1986 Miyata) and DC 630 (1986 Raleigh); Shimano AT 90 (1987 Peugeot); Spidel professional (2, 1982 Peugeot); Chang Star (1990 Bianchi).

### Crankset

- No suitable row: the SR 1986 crank range (~27 specs: SAC-310 / SAC-100 / SAC-T310, SUC-310 / SUC-100 / SUC-T310, FX-T310 / FXC T310 / T301, AXC T301 / T310, CXC 101, CRCT310, CTC 612, CTC-5SG, SXC-T310; 1986 Falcon / Raleigh / Miyata and 1989 Bianchi; the same mid-1980s SR catalogue gap as the seatposts and stems); Sugino TVP, TNFVP, AL-WB, LP, XE300, Astron track and the 1981 Bianchi "Sugino Corsa" sets; Ofmega Premier (2), Nuovo Competizione, Junior (and Super Corsa MC-130, already listed); Stronglight 5470 (2, 1983 Peugeot); Haubtmann 100 / triple (3, 1986-88 Peugeot); Peyrard 3020 (3, 1984 Peugeot; probably the Nervar 3020); Gipiemme America 87; SunTour Alpha-5000; Thun Gamma Gold.

### Brakes

Remaining era mismatches: 1983 Bianchi Rallye generic "Mafac cantilever" -> 10016 (1981-only, description specifies tandem dual-cable levers), and 1990 Bianchi Osprey / Nyala -> 8032 CT-X101 / 8038 CT-XT01 (1992-only; check generation/model codes against a 1990 manufacturer catalogue before widening). The 1982 Peugeot NL "605 side-pull" cells remain unlinked: the source prints Mafac, so the Weinmann identification still needs a clear photo.

- No suitable row: Dia-Compe 984 / 984D (3, 1989 Bianchi), RT 400 (1986 Raleigh); Modolo Quattro (2, 1989-90 Bianchi) and Start (1987); Lee Chi cantilever (3, 1988-89 Peugeot); Chang Star 500 / cantilever; Polygon AF-500; SunTour Alpha-5000; Universal ART. 130/131 (1981 Bianchi; held-source review below confirms two front options, identification still open); Altenburger 53 S3 (1987 Peugeot).

### Rear Derailleurs

- **Open:** 1990 Bianchi Nyala rear derailleur spec 7018 remains unlinked because the 1990 SunTour catalogue lists both RD-XT00 (11070) and RD-XT10 (11071) without evidence to distinguish them. Revisit only if a bike photo, period parts document or other source identifies which model the Nyala used.
- **Candidates to identify:** 1979 Miyata 310 / 200 "SUN TOUR Seven" (20424 / 20445; 4755 Seven 2320 1976-79 or 4756 RD-1900 1978-85); 1994 Cinelli Genius Strada "Campagnolo Record" (20196; RD-11RE 1993-94 or RD-21RE 1994); 1994 Cinelli Velociraptor "Shimano Alivio" (20177; earliest row RD-MC12 starts 1995).

- No suitable row: Simplex SX 620 / SX 620 TSP (5, 1987-88 Peugeot; already a source gap), Super Criterium (1973 Peugeot); Shimano RD-M535 (2, 1987 Peugeot), Z513GS / Z105 (1986 Raleigh); SunTour SU-2 (1985 Raleigh), Quattro (3, 1989-91 Bianchi); Ofmega Super Competizione rear (1988 Colnago).

- Further unlinked identifications: 1981 Kalkhoff bare Shimano 600 (three specs); 1988 Colnago AL 11 SIS. Do not classify these as missing component rows.

### Front Derailleurs

- No suitable row: Shimano FD-M236 (2, 1987 Peugeot), Light Action FD-L525 / L532 (1987 Bianchi), 1987 Tourney, Z105 (1986 Raleigh); SunTour Alpha-5000, Quattro (2, 1989-90 Bianchi); Simplex Foret front (2, 1989 Peugeot), SX 432 (1987 Peugeot); Huret Luxe front (4, 1970-71 Raleigh); Ofmega Super Competizione front (1988 Colnago); Campagnolo Velox front (1974 Falcon).
- **Huret / Sachs Huret front derailleurs:**
  1. **Rider double front (source gap):** 1987 Manosque "Huret Rider", 1989 Avoriaz "Sachs-Huret Rider", Lautaret / Lavandou "Sachs-Huret Rider 2" (42x52 doubles) have no row; find a 1987-89 Sachs-Huret catalogue listing it.
- **Simplex front derailleurs:**
  1. **2590 / 2591 "Super LJ (2nd version? front / rear control arm)"** (VeloBase, 1970, 0 links) predate Super LJ (c. 1971); check the VeloBase photos, then fold into 2587 / 7282 or retitle.
- **Campagnolo front derailleurs:**
  1. **Date flags (review, not errors):** 2318 Victory (1984-86) from 1987 Peugeot PSN 10, 1987 Colnago Junior Victory, 1987 Bianchi Nuovo Alloro "New Victory", 1988 Bianchi Giro; 2314 Triomphe from 1987 Peugeot PX; 2279 980 from 1987 Colnago Junior Special; 2300 0104007 (1982-85) from 1986 Cinelli 840 SLX (its VeloBase description says 1982-1987). Nuovo Victory / Triomphe were current in the November 1986 brochure (source 196); no separate Nuovo front row. Options: widen `year_to` with bike-catalogue fitment evidence (Victory 1988, Triomphe / 980 1987, 2300 1986) or leave flagged. 2283 C-Record from the 1984 De Rosa is explained (late-1984 brochure for 1985, as the 4096 rear).
  2. **Identity:** 2295 "Record 0104007 (1978, 4-hole)" (VeloBase only, 0 links) carries the part number the catalogues put on the 1982-85 clip-on 2300, overlapping 2299 1052/NT 1978-82; check the VeloBase photo before merging into 2299 / 2300 or retitling as a 4-hole variant. Add 2297 / 2305 (1052/1 bodies, kept apart 2026-09-28) to `REVIEWED_NOT_DUPLICATES`.

### Hubs

- Open source/model gaps: Maillard 1982-89 (Atom 500 RA done 2026-11-12, row 10985; 700 Pro and Normandy variants); SR CRH-310 / 301 and MTH-100; Kyokuto K.K. hubs; Sansin ET-QS; later SunTour X-1 / XCE / XC-LTD and 1986 Superbe Pro front; Ofmega and Suzue identifications. Brand-only, unspecified flange and combined front/rear strings remain unlinked when several rows fit.
- Nuovo Tipo: find a second source for the C1264/1265 identification. The 1253 kidney-bean row 3232 versus Cat 17 p. 54 still needs image review.

### Chains

- Open: Regina Gran Sport Super Corsa Oro / Extra Black naming and independent source confirmation; Sedis 1977-78 chain identifications; Shimano CN-HG20 remains a documented 1993-only inference to CN-HG50, not a verified HG20 model.

### Bottom Brackets

Only the 1973 Zeus, 1978 Bianchi and 1981 Kalkhoff catalogues carry a BB column; everything else folds the BB into the crankset cell.
- No suitable row: Zeus Alfa BB, "Alfa (Duralinox)" / "Alfa (Steel)" (1973 Z 46 / Z 41; only the Ref.36 Alfa chainring set 8145 exists).

### Headsets

- New source gaps: Lightrace (Gourgaud) on 1977-84 Peugeots (18: "Lightrace Luxe" 7, "Lightrace" 5, "non-loosening" 3, "competition", "Gourgaud Lightrace" 2; the DB has only 3032 Grand Luxe, undated, and 3033 Super, 1984; a Gourgaud / Lightrace catalogue or a dated Peugeot spares list would settle Luxe vs Grand Luxe); Tange Unique / Unique X "Loose-Proof" / Unique FE (5, 1988-89 Raleigh); Tange MES sealed (4, 1986 Miyata); Tange 230 SLP (1987 Peugeot); Falcon "HP-01G" (maker unknown).

- No suitable row: Tange TH-305 / TH-305C / TH 305 (6, 1984-90) and TH-108; Tange MX 600M; Shimano 600 AX (1981 Kalkhoff; no 600 AX headset row, 3089 HP-6200 600EX Arabesque 1978-84 is the nearest but AX may have had its own); Nikyo; YST steel CP; Zeus Alfa (2, 1973).

## Open: duplicate components

- Bottom brackets (photo review 2026-11-13): keep Cambio Rino 16 / 17 apart: 16 photographs cups stamped English 1.37 x 24; 17 is an Italian 36 x 24 complete set with a 121mm square-taper axle. Sugino Super Mighty Pista 162 / MS-68 163 remains unresolved: 163 has an identified 109mm MS-68 / NJS axle and marked cups; 162's photograph does not establish the same code or NJS specification. Earlier catalogue assignment of 162 to Super Mighty track was a judgement. OMAS 130 / 130 ST and 132 / 132 ST kept apart (different seals, dimensions and weights); these decisions are now in `REVIEWED_NOT_DUPLICATES`.

`node scripts/duplicate-report.js` (read-only; `--merge`, `--used`, `--relation=`, `--brand=`, `--category=`, `--json`, `--near` for cross-brand / renamed pairs, `--paren` for a model name hidden in another row's parentheticals, `--reviewed` with either for pairs already kept apart; logic and tests in `duplicate-classify.js` / `test/duplicate-classify.test.js`) groups `component_detail` rows by brand + category + title ignoring parentheticals and classifies every unordered pair as duplicate / cosmetic / configuration / generation / review / variant. Filters and totals apply to pairs; see [report semantics](README.md#reviewing-duplicate-components). **Historical 2026-11-13 report (survivor-relative row counts, not current pair counts):** duplicate 0, cosmetic 0, configuration 486, generation 354, review 0, variant 21. No database changes were made by this audit. The report is a candidate finder, not an exhaustive duplicate verdict. Method for a merge: repoint `bike_spec.component_id` and any generator override, keep the row with the weight / wider years, fold the other's facts into its description, delete the extra guarded by id + title. A `review` row with a VeloBase `source_id` can often be settled from its photos (`velobase.com/Pages/ViewComponent.aspx?ID=<source_id>`); image GUIDs differ from component GUIDs, so read the page's photo links.
- **Report follow-ups closed 2026-11-13:** FRM A-Set 10395 / 10396 (1-inch / 1-1/8-inch), Schwalbe Blizzard Pro 10225 / 10227 (37 / 67 TPI), Schwalbe Stelvio 10228 / 10229 (700C / 650C) and Mavic Helium clincher 10376 / 10377 (26-inch / 622x15) now classify as configurations. Added recognition of casing density, wheel dimensions and inch fittings; compared the saved DB report before/after: only these four classifications changed. No linked specs on these rows. The manual research questions below remain open despite zero automatic merge/review flags.
- **Near-pair follow-up, 2026-11-13:** OMAS 120 S Big Sliding 10681 / 120 D Big Sliding 10682: closed 2026-11-14, kept apart; Guida '96 scan 52 prints both word for word identically (1", 98 g, L. 39.000), only the letter differs. Kept apart and registered: Gipiemme Tecno 724 / M 724 and 416 / M 416 (road / MTB); 716 PRO / C 716 PRO and 416 / C 416 (alloy / carbon rims). No linked specs on these candidates.
- Bare Gipiemme Sprint bike-spec identification remains ambiguous; keep other Azzurra components separate without independent evidence.
- **SunTour rear derailleur audit, 2026-11-15.** Baseline: 149 rows, 44 used, 34 VeloBase-only source, 56 ungrouped, 1 undated (4747 Hero v2). 151 SunTour rear specs: 125 linked, 26 unlinked (4 brand-only or house: bare "SunTour" x2, "Raleigh/Sun Tour" x2; the rest already recorded: Seven 1979 Miyata x2, New Seven, Mountech x4, Cyclone 1986 Raleigh, SVX, V.T., SU-2, Quattro x3, XCE-4050 x2, XCT Nyala, deliberate nulls RD 2000 / Superbe / New Superbe on Miyata). No wrong-category links. Scoped `duplicate-report`: 4 VeloBase version pairs (Wide 1A / 1D, Competition 1 / 2, V 2A / 2C, Hero 1 / 2); `--near` empty; 4744 Edge 4050 vs 11107 RD-ED00 already reviewed distinct (RD-ED45). Applied 2026-11-15 (user approved): 1974 Mirage V.G.T. relinked 4695 -> 4704 V-GT Luxe; 4791 XCE XE01 dated 1992; eight fitment date widenings. See suntour.md. Open:
  1. **XCE 1980 placeholder in Cranksets:** 2002 (VeloBase year_from 1980; XCE is new for 1990; front 2663 fixed 2026-11-15).
  - Leave: 4747 Hero (Version 2) undated, 0 links (Hero siblings share the BL design per Reminiscence; no dated source); the four VeloBase version pairs (0 links).
- **Huret / Sachs Huret rear derailleur audit, 2026-11-15.** Baseline: 73 rows (brands 139 / 171), 15 used, 37 VeloBase-only source, 59 ungrouped, 8 undated (4277, 4286, 4404-4406, 4409-4411), 28 descriptions under 70 characters. 111 Huret / Sachs rear specs: 98 linked, 13 unlinked (10 brand-only or prose: 6 bare "Huret", "Sachs", "Sachs-Huret", "Huret or Simplex parallelogram" x2; 3 already recorded: 1984 Peugeot Duopar x2, 1988 PXR 80 Rival 16963). No wrong-category links. Scoped `duplicate-report`: 11 pairs, all VeloBase specimen versions (Allvit, Jubilee, Louison Bobet, Touriste Monobloc, Rider types) plus 4276 / 4277; `--near` / `--paren` empty. VeloBase pages read 2026-11-15 for 4277, 4400, 4404-4406, 4409-4411. Applied 2026-11-15 (user approved): 4277 Duopar Eco v1 merged into 4276 (Weekender link moved), 4417 ARIS Rival from 1989, 8958 Rider to 1989, 4415 retitled; 1987-89 plain "New Success" kept on 4412 ARIS by decision. See huret.md. Open:
  1. **Undated VeloBase rows (no years on their pages):** 4410 / 4411 Rider type 1 / 2 (no dates or codes on VeloBase; type 2 page is empty; may be 8958, needs photo comparison); 4409 Rival 7000 ("RD R7000", ARIS, 1990s) and 4404-4406 Aris Classic 1500 / 2500 / 3000 (no years on VeloBase; need a 1990s Sachs catalogue); 4401 / 8957 generic Rival links (open item below).
- **Simplex rear derailleur audit, 2026-11-15.** Baseline: 127 rows, 26 used, 62 VeloBase-only source (several already enriched from the 1978 / 1981 / 1984 catalogues, e.g. 4620 / 4621 / 4629 / 4631), 91 ungrouped, 4 undated (4649, 4636-4638), 44 descriptions under 70 characters. 333 Simplex rear specs: 239 linked, 94 unlinked (79 brand-only or prose: 75 bare "Simplex", "Simplex SX", "Simplex parallelogram", "Huret or Simplex parallelogram" x2). Scoped `duplicate-report`: 71 pairs, all pre-1970 VeloBase specimen variants with 0 links except SX440 / LJ4000 / Criterium (below); `--near` / `--paren` empty. The 1970 Raleigh "Huret Allvit / Luxe - Gents, Simplex - Ladies" rears link the Huret gents part, as the front matcher pick kept in raleigh.md. Items 1, 3 and 4 (S001 T / SX1 T / SLJ5500 CP / SLJ6600 T dates from Peugeot fitment, 4649 dated 1982-84, 4645 retitled AR 637 NI) applied 2026-11-15; SX440 version rows merged to 4622 GT / 4625 T the same day (4623 / 4624 / 4626 / 4627 retired); 4603 / 4620 / 4621 / 4629 / 4631 `source_ref` VeloBase -> Simplex catalogues 57 / 58, see simplex.md. Proposed, open:
  1. **4649 identity:** dated 1982-84 from fitment; find a Simplex source printing SX 660 (SX 6xx series, or the SLJ6600 4654 / 4655?) before retitling.
  - Leave: 1978 Peugeot PA 60 "Simplex Criterium" (the AR 637 NI row ends 1974 and its override 1976; by 1977 the Criterium name is also on the LJ A200 front, so the 1978 rear may be an LJ model). Already recorded: SX 620 / SX 620 TSP (5), SOI T/SP x3 / SOI GT/SP / 501 GT/SP / T/SP, SX A430 GT/SP x2, Super Criterium; Tour de France 4634 / 4641-4643 cosmetic pairs (DB-wide merge list below).
- **Campagnolo rear derailleur audit, 2026-11-15.** Baseline: 101 rows, 30 used, 33 with VeloBase as current source, 9 ungrouped (Rally x5, 4077, 4084, 10489, 10088), 35 descriptions under 70 characters; no missing dates, no descriptions at the 255 limit. 200 Campagnolo rear specs: 193 linked, 7 unlinked (6 bare "Campagnolo" on 1973-78 Falcons, brand-only; 20196 1994 Cinelli Genius "Record", deliberately null per cross-catalog notes). Items 1, 2, 6 and 7 (Chorus 1987, 1992 Mondiale Croce d'Aune link, Chorus graphite variant, title hygiene) applied 2026-11-15, see campagnolo.md. Proposed actions, open: Scoped `duplicate-report`: 15 pairs (8 generation, 6 configuration, 1 cosmetic); `--near` / `--paren` empty.
  1. **C-Record follow-ups (rear derailleur resolved 2026-11-15, source 414, see campagnolo.md):** re-check the 1987 Bianchi C-Record crank (1483 -> 1482 was moved by date alone on 2026-10-09) and other 1987 C-Record parts against the February 1987 Record brochure; re-read the n. 18 bis back-cover date ("12/86" in our notes vs Disraeli Gears' 04/1985 and 12/1985 printings), since 1986 `year_to` values were set from it.
  2. **Super Record 2nd generation identity:** 4151 "2nd gen, ver.1" (1978-84, 180 g, 0 links) overlaps 4149 "PAT. 80" (1980-83, 184 g, 5 links); both VeloBase-only. Compare the VeloBase photos/markings before deciding whether PAT. 80 is the ver. 1 marking (merge) or a separate version.
  3. **Questionable VeloBase rows, 0 links:** 4153 "Super Record 4001, Modified Cicli Bombardieri" (a shop-modified specimen, not a catalogue part; candidate to fold into 4149 / 4151 with its 185 g as a note, or delete) and 4077 'Campagnolo "Campagnolo" model' (1963, no other data; check the VeloBase page before keeping).
  Follow-up seen during the audit: DB-wide `duplicate-report.js --merge` (2026-11-15) lists 14 pairs, all older VeloBase-only rows with 0-8 links: duplicate 6028 / 6029 Favorit (Single lever); cosmetic Simplex Tour de France 4634 / 4641 / 4642 / 4643 (Simplex SX440 T 4626 / 4627 merged 2026-11-15, see simplex.md), Simplex Competition front 2556 / 2557, Nervar 1657 / 1659, Pelissier 3457-3459, Belleri 2791-2794, Weinmann Symetric 1103 / 1104, Campagnolo 0304 cranks 1472 / 1473 (Bianchi-labelled). This supersedes the 2026-11-14 "DB-wide merge candidates 0" note; review each as merge or registered variant.
  Checked and fine: Nuovo Record v3-v5, Super Record, Gran Sport / Nuovo Gran Sport, Victory / S3, 1990-94 RD-xx links all agree with year-scoped overrides; 1985 Bianchi "990/980" -> 4088 990 is the recorded rear reading (bianchi.md). Scratch for this audit was deleted; re-run the queries in the rows / specs / `quality-report` scope to reproduce.
- Rear derailleur review: verify the later XCD model code (VeloBase says RD-XD00; 1990 catalogue lists RD-XD10 variants).
- **Huret Rival identification:** 1988 Peugeot PXR 80 spec **16963** is deliberately **NULL** with a scoped generator guard after the approved 2026-11-15 correction. It needs **34T** capacity; do not use 28T rows **4401** or short-cage **8957**. Obtain a sharper original-bike photo or period parts/fitment document to identify its cage and generation before linking/adding a row. The other **16** generic Rival links remain unresolved; keep 4401 / 8957 distinct and do not move links by year or finish alone. Exact IDs, source checks, prior retrieval failures and validation are in the [Huret review](.agents/skills/ingest-component-catalog/references/known-catalogs/huret.md#generic-rival-bike-link-review--2026-11-15-pxr-80-correction-applied).
- **Rear derailleur dedupe pass, 2026-11-14 (user approved):** shared-code, code-stripped-name and uncoded-VeloBase-in-coded-row scans of all 945 rows found only labelled versions, cage and finish siblings. Two fixes: the Huret Duopar titanium provenance (VeloBase GUID 15AB95B3, a 2648 specimen with 255 g, moved from 4302 2600 / 2640 to 8173 2648 / 2654; 4302 new UUID; 8173's synthetic 0311fc96-c102-11f1-a2df-02fea3763e8d retired) and 4733 SunTour Cyclone (Black Pivot Knuckles, VeloBase C0C55FDD-E9C6-48D9-8A76-312E08FC35EF) merged into 4735 RD-1700. Rows 945 -> 944. Added a 1986 'suntour cyclone' rear null override to keep the Supercourse decision once the ambiguity went.
- Front derailleur duplicates, still open (2026-11-02 review):
  - **Superbe Pro front mounting identification (reviewed 2026-11-15):** specs 920 (1983 Bianchi Professional), 3299 / 8179 (1985 / 1986 Raleigh Prestige), 20864 / 21809 (1982 / 1983 Pro Miyata) link to endless-band FD-2000 **2652**, but their text only names the group. Obtain original photos or period fitment documents to distinguish it from braze-on FD-2050 **8268** before confirming/changing each link. The manufacturer model/mounting distinction is established; the retained VeloBase page's conflicting metadata is not grounds to rename the row or repoint bikes. See [SunTour evidence and identifier review](.agents/skills/ingest-component-catalog/references/known-catalogs/suntour.md#fd-2000--fd-2050-mounting-and-retained-velobase-identifier--2026-11-15-review).
  - Huret: how 8961 AV 62.1 D (now holding the early-1980s VeloBase AV 62.10D) sits with 8488 Rival 1086-00 (1982-87) remains open.
  - These kept-apart pairs are now in `REVIEWED_NOT_DUPLICATES` (2026-11-13): 7434 vs 2518 (EA-200 code reuse, shimano.md); 8253 vs 2641 (1976 Seven, own row by decision); 2644 FD-3900-SSH (clamp / endless band) vs 7848 FD-SP00-B (braze-on, same Sprint 9000 front; 2644 could be retitled "Sprint 9000"); 2436 Pilot 3080-00 triple (bright chrome) vs 2443 Hi-Stepper 3080-00 S (satin cage, ATB); 2367 Cronospecial 800AS vs 9516 Crono Special 802 AE (Selectron); 2365 Azzurra (Simplex-made) vs 9854 Azzurro SB 802; 2295 0104007 4-hole vs 2300 3-hole; 2439 ARIS New Success vs 8960 AV 66.3 D (year-ranged on purpose); 2484 EF-100 / FD-AT11 (1979) vs 7721 FD-AT10 / FD-AT11 (1993), code reuse. Also closed from source photos: keep 2584 Prestige Senior apart from 2583 Criterium (moulded mounting body versus metal mounting clamp). Still open: 2457 FD-A350 (photo exists, model inscription not established); 2377 Challenger (photo exists, bolt-on clamp; compare numbered Challenger versions); 2442 AV 62.10 Avant (two VeloBase photos recovered, replacing the earlier "no data" note; exact relationship to Rival still unproven).
- Shifter duplicates, still open (2026-11-06 pass):
  - Possible: 6129 "Shimano unishift" (VeloBase 1980, 99 g) vs 7119 LB-200 Uni Shift / 8766 L-293-298 Unishift. Photos recovered 2026-11-13: a double down-tube clamp set with rubber-tipped aluminium levers, marked Unishift. Fitment is now established; the photo does not identify which catalogue code/version, so leave separate pending comparison with the numbered catalogue illustrations.
  - Kept apart, now registered in `REVIEWED_NOT_DUPLICATES` / `REVIEWED_VARIANTS` (2026-11-13): 6276 / 6277 LD-1600 Cyclone and Cyclone Black Series (finish sold as its own line, catalogue row) as a reviewed variant; 5973 C-Record Syncro 0211-0213 vs 8812 first-version 0118084-0118096 (campagnolo.md: renumbered version kept on purpose); 6239 / 6240 SLJ5057 silver / black anodized (simplex.md: 1984 photo is silver); 6268 Command (6 & 7) 1990 vs 6269 SL-CD01 (1992, 7 & 8); 6303 Superbe Pro index vs 6302 SL-SB00 friction; 6107 / 6108 Aris Classic; 6161 Dura-Ace black vs 6162 L-284; 9142 Crono Special (1985) vs 9517 870 SE Selectron; 9143 Sprint vs 6050 Crono Sprint 870 DS; Zeus 6335 Gran Sport (254 g, not one lever) / 6334 vs 8854 Ref. 11; Sturmey 6245 / 6248. The general SunTour 1973 4-digit versus later LD- / LS- rule remains in suntour.md.
- Still unlinked Huret: Duopar 1984 x2 (several Duopar rows), Luxe front 1970-71 x4, 1987 New Success crank / hub / freewheel.
- Photo comparisons closed 2026-11-13: keep 544 / 545 Bowden Touriste / 904 apart (different arm profiles and cable-anchor construction), and 2122 / 2131 Sachs-Maillard Normandy / Sachs Maillard (five versus six sprockets). Both registered in `REVIEWED_NOT_DUPLICATES`. `findNearPairs` still misses renumbered parts (Nisi M20 / 00110), so zero automatic flags does not close the manual queue. Review metadata and photos: `/private/tmp/duplicate-review-2026-11-13/`; bottom-bracket photos `/private/tmp/dup-cambio-{16,17}.jpg`, `/private/tmp/dup-sugino-{162,163}.jpg`.
- Version rows: the 1974-75 Motobecane bare "Normandy Luxe Competition" (2 specs) still on 3388 by the `normandy luxe competition` range (flange unknown); 92 version rows have no years, so the generator can't pick them by year. A matcher-wide "pick the version whose years fit" rule was rejected: it would mislink the 104 / 104 bis kind of case.
- Policy (2026-10-26 and 2026-10-28): colour / finish and marking / hardware variants of one part are folded into one row ("Variants: ..." in its description), except variants a person reviewed and kept in `REVIEWED_VARIANTS` (special editions, finishes sold as their own model, markings that date a part, two runs under one title); construction differences are configurations; generation rows are real versions.

## Open: source hunts

Still-wanted sources and the next lead for each. Searches already made, dead ends and site methods are in the [source-hunt log](.agents/skills/ingest-component-catalog/references/source-hunts.md); do not repeat a logged search without a new lead.

### Identity questions from held catalogues

- **Ritchey 2000 identity follow-ups:** obtain construction/version evidence for Fuzzy Logic Pro and Comp vs 10402; Comp Road seatpost vs 10169/8408; road Pro Aero/Aero OCR rims vs 10190/10191. Resolve tier/weight and OCR front/rear contradictions before inserting, renaming or widening dates. See [the four unresolved identities](.agents/skills/ingest-component-catalog/references/known-catalogs/ritchey.md#unresolved-identities--unchanged); missing/cropped pages do not support inferred specifications.
- **Campagnolo 2000 identity follow-ups:** obtain code/specimen crosswalks for the 16 unresolved cases in the [catalogue notes](.agents/skills/ingest-component-catalog/references/known-catalogs/campagnolo.md#unresolved-identities--no-speculative-rowslinks): Chorus post SP00-CH272, AC-H/AC-S and Pista BBs/crank/hubs, RD99-MI309 vs 4122, Chorus EP00-CH09R/L vs 6340/7092, BR00-RE vs 578, Mirage fronts, Record rear hub, MK2 Titanium 9-speed / ED-C / CS99-RE08 cassettes, and WH99 Shamal / WH00 Shamal Pista. Keep existing identities and do not insert speculative duplicates.
- **EDCO headset / BB identities:** see [EDCO notes](.agents/skills/ingest-component-catalog/references/known-catalogs/edco.md). Need a code chart or specimen measurements to assign its 108 g / 37 mm headset to 2987/2988/2990, and axle/variant identification to reconcile its 119 mm / 292 g BB with 53/54 (122 mm specimen notes, 291 g). Keep these rows unchanged until identified; no duplicate inserts by name alone.
- **Nisi follow-ups:** c. 1977 and c. 1985 catalogues applied (sources 415 / 416, see [Nisi notes](.agents/skills/ingest-component-catalog/references/known-catalogs/nisi.md)). Open: 5138 M20 Pista Speciale vs 00120 / 00130 and 5145 Sport Toro Stretto weight (need a specimen or VeloBase photo); 11-14 uninserted utility / children's rims left by choice.
- **Spidel 700 RA pedals:** check whether the Le Cycle no. 119 Spidel 700 group box (Tonton Vélo t=10923, in the log) is enough to link the unlinked Peugeot "Spidel 700 RA" specs (see peugeot.md).
- **Lyotard (held catalogue, data_source 380):** optional rows 25R / 25A / 3R / 66R / 75R / 88R / 77RN / 45 CAN / 65 N / PL 200 / 460 D BMX (no specs name them; PL 200 vs 3823 "LA PL 2000" unresolved) and years for undated 3817 5R / 3822 99 / 3800 MB 23TF. Lyotard 90 (12407, 1984) still has no source.

<a id="sr-sakae-next-work"></a>

- **SR / Sakae remaining evidence gaps:** seek exact catalogue/specimen evidence for the unresolved codes below. [Processed sources, rejected aliases and current results](.agents/skills/ingest-component-catalog/references/known-catalogs/sakae-ringyo.md#four-sr-models-from-fuji-1989--applied-2026-11-15-source-412).
  - **Full 1983-88 maker catalogue recovery parked:** No.19 (Sep 1983) and No.23 (Aug 1988) reported, no complete scan recovered; No.20–22 unseen. Velo-Pages 58555 still HTTP 500 on 2026-11-15. Reopen for a new holder/scan/recovery endpoint; repeated broad searches have yielded no full-range source.
  - **Next available partial evidence:** verify original Schwinn 1985 CRE-100 / SAC310 / CTC-5SG / CXC-T310 specification blocks, then reconcile the exact codes. Trek 1985/1987 and Koga-Miyata 1986 bar-code leads remain in the handlebar worklist. Do not repeat processed sources listed in the notes.
  - **Keep unresolved:** CRE/CR-E/CRE100 identification (do not alias to CLE-100 11308); CT-P5E versus CT-P5 5857; MTE-110 identification (keep MTE-100 5849 and MTE-300 11307 separate); SRE-100/105; full SAC/SUC/FXC/AXC/CXC range; CRH-310/MTH-100 hubs; MTS-131/CPS-80; MTB-224/CTB/CTR/CTSD. Seek exact model/specimen crosswalks; generic names or later fitment do not identify an earlier configuration.

### French makers 1977-89 (mostly Peugeot specs)

- **Maillard / Sachs-Maillard hubs and freewheels 1982-89** (Atom / 700 / Normandy dural hubs, 700 Pro / SH freewheels): want a Sachs-Maillard 1987-89 dealer leaflet or a dated Peugeot dealer spares list (pièces détachées) c. 1979-89.
- **Solida / Nervar cranks 1982-89** (Solida 5271, 5270A, 5371 / S 371, 52D, 520, 5470; Nervar 5570): same Peugeot spares-list lead, or a Solida leaflet.
- **Lightrace / Gourgaud headsets 1977-84** (Luxe vs Grand Luxe, about 19 Peugeot specs): same Peugeot spares-list lead.
- **Motobécane non-illustrated spares editions 1983-87:** Velo Vintage à Gogo poster MAFAC 2000 says he has them (not posted). Unopened there: t29374 / t29375 Peugeot 1979 / 1980 tariffs, t12991 Cologne 1984 show report.

### UK retail catalogues (need a person to ask or visit)

- **Ron Kitching "Everything Cycling" 1984-89 and Freewheel catalogues:** best lead for Rigida rims (Chrolux, Jade, Saphir, CTX 10), Viscount saddles (2285, 2296, Terra / MTB anatomic) and the 1970s Brooks range. Holders: retrobike 159101 / 21901 members, Otley Cycle Club (Kitching library), Warwick Modern Records Centre (Freewheel), retrobike 435965 (1983 Freewheel).
- **Brooks 1960-90** (B15 x4, CR3 x3; dates for 5303 / 5304 / 5310 / 5315 / 5282 / 10057): a 1970s UK retailer catalogue, or the saddlewax.com owner's 1971 price list and 1973 Raleigh saddle catalogue scans.

### Japanese and Taiwanese makers

- **Tange headsets 1984-90** (TH-305 / 305C, TH-108, MES sealed, Unique / Unique X / Unique FE, 230 SLP, MX 600M): Cycle Sports (Yaesu) parts directories on Yahoo Auctions Japan (1985, 1987, 1990; paid, also covers SR), retrobike "Tange Catalogues" archive (browser only), a 1985-90 US distributor catalogue; check the 1985-87 Trek, Puch and Panasonic fitment tables.
- **Bars and stems 1985-92** (H.L. DR-8 / DR-9 / Dirtdrop / semi-rise / HS-P; SR MTB-220 / 224 / 227, CTB, CTR, CTSD; Kusuki KR-LB / SMC-F; ITM Mondial / Krono / Italia aero; Franco Italia; ATAX CTA randonneur; CMC-709 / MS-710): Brügelmann 1986-87 and 1989-92 (rennrad-news threads 136208, 99574), an offline Taipei Cycle Show or Taiwan Bicycle Exporters' Guide. Check the Koga-Miyata 1986 p.19 Kusuki image and the Fuji 1988-91 transcriptions against scans (fitment leads in the log).
- **VP Components pedals c. 1984-90** (VP-230 / 330 / 331 / 333 / 382S / 389, VP500; 9 specs): a VP pedal catalogue or importer page c. 1989-90; VP needs a component_brand row first.
- **Dia-Compe 1987-93** (BL-08 aero, 250S aero, GX-400 Aero, DC 630, 984 / 984D): retrobike threads 306479 and 361996 (a poster has the 1992 catalogue; browser only), eBay 800322888787 (1989/90 MTB brochure, photos not retrieved).
- **Panaracer:** read the panasonicbikemuseum.info USA 1979-89 and EU 1991 / 1993 catalogue pages.

### Italian makers

- **Gipiemme 1980-83:** a genuine early-1980s brochure (velo-pages albums 1482 / 69471 survive only as thumbnails). Compare the maker's "1984" PDF (13 pp) with held 269, and its 1987-MINI / 1989 / 1991 / 1994-95 PDFs with 270 / 287 / 288.
- **Ofmega:** still unsourced Vantage Quattro, Super Corsa MC-130, Nuovo Mondial; read the disraeligears Bicisport Apr 1985 group test and La Bicicletta Apr / May 1984 Mistral adverts.
- **Vittoria clinchers 1982-93** (Rally, Competizione, Techno, Randonneur, Zaffiro): no lead yet.
- **Campagnolo catalogues 1976-81 and 1983-84** (mainly dating, e.g. 1976 / 1984 "Super Record" hubs); record the May 1984 La Bicicletta Victory range advert (disraeligears) as 1984 evidence.
- **Bianchi catalogues 1974-77 and 1979-80;** 1991-99 PDFs in the retrobike archive (browser only).
- **La Bicicletta (disraeligears):** Guida '96 pass 3 (about 124 skipped entries: MF Components, Tioga, MBS, Syncros; check the brand table first); May 1984 racing-bike buyer's guide (12 scans, an `ingest-bike-specs` job).

### Other brakes, tyres and components

- **Brakes with no source:** Modolo Quattro / Start, CLB GL 47-60 and Competition aerodynamic (a c. 1980 CLB catalogue is partly photographed on eBay 305827471354), Altenburger S3 / 53 S3, Lee Chi cantilevers, Chang Star 500, Polygon AF-500, SunTour Alpha-5000.
- **Tioga 1992-94:** a catalogue for the Surefoot-6 pedals (4 specs, 1993 Bianchi).
- **Brügelmann follow-ups:** Cobra saddles, Mavic "Titan" rims, Hutchinson Krono 9267 vs 6810.
- **Shimano 1979-80, 1983 and 1985 general catalogues:** low priority; the held June 1984 dealer catalogue spans 1983-85 and the remaining gaps are mostly ambiguous spec text.

### Archives with unread material

- **velo-pages.com via Wayback** (`scripts/velo-pages-wayback.sh`, method in the log): SunTour advert 03-1975, Detto Pietro 1970s, Shimano Dura-Ace EX 1978, Stronglight 1958, Simplex and Barelli adverts, OMAS 1978 (item 12973), Sedis 1971; bike clusters Falcon Merckx 1973 / 1974, Original Plastic Bike 1973, Bottecchia 1973.
- **bikalog.org:** bike catalogues not loaded (Koga Miyata 1980-2001, Nishiki 1987, Motobecane 1984, Raleigh 1991, Colnago 1989 C35, Bianchi road 1985 / 1986); component PDFs ready to read: Universal 1996, Panaracer / Michelin / IRC 1999, Campagnolo 2001 and the 2000 Record 10-speed brochure.
- **Palo Alto remaining identifications:** Regina chain / freewheel names, Fiamme / Super Champion clinchers and Sugino Maxy II; see `cross-catalog-notes.md`.

## Open: held-source follow-ups

Targeted reviews completed **2026-11-12**, against the held page images and live DB. Dia-Compe additions and links subsequently loaded on user approval (see [Dia-Compe notes](.agents/skills/ingest-component-catalog/references/known-catalogs/dia-compe.md)). The unresolved identifications below remain open; earlier coverage snapshots have not been recounted.

- **Universal ART. 130/131 — source found, bike identification unresolved**: source 339 printed pp.11–12 (scans 15–16) says **130 = small front, 43–56mm; 131 = standard front, 44–62mm; 133 = standard rear**. Thus `130/131` is not an established front/rear pair. Spec **6595**, 1981 Bianchi Super Turismo, stays unlinked. Row 1069 shares the double UNIVERSAL arm lettering, but its bare-caliper photo gives no numbered model or measured reach. Need a Bianchi parts document or measurements/back markings before a precise row/mapping; keep 1069 / 1071 unchanged.
- **1985 Raleigh Crested Butte XT crank [3564] — identification, not an FC-M700 source gap**: source 26 printed pp.16–17 pairs Deore XT touring/off-road with **FC-6206**, already row **1797** (1984–87). Printed p.107 gives Biopace **48/50 outer, 38/44 middle, 28 inner**, not the Raleigh's **46/36/26**. Source 344's eight sheets contain no crankset. Leave the spec NULL until an original Raleigh photo or period parts document identifies it; do not infer FC-M700 or substitute later FC-M730.
- **La Bicicletta Guida '96 broader backlog**: close-name and possible-duplicate checks completed 2026-11-14 (see [component cross-catalog notes](.agents/skills/ingest-component-catalog/references/known-catalogs/cross-catalog-notes.md)). Still open: pass 3, ~124 skipped entries after checking current brands (low link yield, as loaded bike catalogues stop at 1994); new candidates from that review: 6896 Pista CL Servizio Course vs 10570 Pista CL, 1570 FRM CU2 vs 10279 / 10280; unloaded entries Mavic CXP 30 Argent (clincher + tubular), OMAS 120 Big Sliding, FRM rear "Campagnolo Compatibile".

Review evidence and proposed actions: `/private/tmp/existing-source-review/review.md`; page images in the same directory. Catalogue notes retain the page references so the findings do not depend on temporary files surviving.

## Open: Shimano bottom bracket cleanup

- **121 BB-UN73 — refine production-boundary evidence:** the supported availability range is now **2003-2007**, source **408**. Obtain a dated 2002/2003 Shimano document to confirm the introduction reported by Brown/Allen, and positive manufacturer evidence before treating 2007 as a discontinuation year. Source pages, completed correction/validation and unsuccessful search scope are in the [Shimano review](.agents/skills/ingest-component-catalog/references/known-catalogs/shimano.md#bb-un73-unsupported-dating--evidence-review-2026-11-15). The held 1998/1999 consumer catalogues (365/366) were already checked; do not repeat them. TL-UN73 tool references do not establish BB-UN73 availability.

- Catalogue gaps that would settle the rest: 1979-80 general, 1983 general, 1985 general.
