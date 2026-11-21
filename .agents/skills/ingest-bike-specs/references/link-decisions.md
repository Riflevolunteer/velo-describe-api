# Bike spec link decisions

Leave-unlinked calls and reviewed-but-not-linked cases for `bike_spec.component_id`, moved from TODO.md on 2026-11-15. Each records why a spec stays unlinked (several rows fit, era unclear, either/or cell, maker-only text, user's call). Do not relink these without new evidence; record a reversal here when one is made. Open source gaps and candidates stay in TODO.md; per-catalogue mappings stay in `known-catalogs/<brand>.md`.

`/linkCoverage` hides reviewed decisions listed in `REVIEWED_UNLINKED` (`link-decisions.js`) or recorded as `id: null` generator overrides; when adding a leave-unlinked decision here, add its registry entry (label, stored value, bike/year scope, reason, this file's heading anchor) or a null override in the same change.

General rule: brand-only, size/material-only, either/or and house-part specs can correctly remain unlinked. Do not infer a model from bare `Campagnolo`.

## Pinarello 1985 GITA — applied catalogue review

Preserve Montello's Super Record4000F-or-Record group alternative as NULL in
all seven derived specs. Track group does not supply fitted brakes/derailleurs;
Gipiemme track parts without version codes stay NULL. Treviso N.R. has explicit
Record SL pedals and SR chainrings, not titanium SR pedals. Hold brake reach,
out-of-range NR levers/cotton tyres, generic Vittoria Sport, Ambrosio Montreal,
plain Oro chains, rim alternatives and CXS7 freewheel without inventing variants.
Applied/validated 2026-11-20; see [full evidence and mappings](known-catalogs/pinarello.md#1985-gita-catalogue--applied-and-validated-2026-11-20).

## Pinarello circa 1982 — applied catalogue review

Expand the printed groups into individual specs, preserving Titanio and x3
qualifiers. Explicit NULL guards initially held the x3 drivetrain and qualified-group
brakes/rears; Super Record Special's generic brake is NULL without reach.
Italia's Gran Sport crank stays NULL without BCD/configuration evidence.
Record rear on Treviso is explicitly printed, overriding the Gran Sport group.
Generic/alternative tyres, saddles, bars, rims and ambiguous freewheels remain
text. Applied/validated 2026-11-20; see the [mapping and evidence review](known-catalogs/pinarello.md#circa-1982-ingestion--applied-and-validated-2026-11-20).
Subsequent Tre Cime photo review supports front 25888→2313, approved/applied and
validated on 2026-11-20; this supersedes the blanket x3 refusal for the front
only. The rear, crank and other holds remain; see [photo evidence and validation](known-catalogs/pinarello.md#tre-cime-photolink-follow-up--2026-11-20-applied-and-validated).

## MBK Catalogue 1988 (FR) — applied link review, 2026-11-20

Scope `1988_mbk_spec.csv`, source 482 (applied; held values read back NULL); registry entries in `link-decisions.js`, scoped NULL
overrides in the generator. Reviewed and deliberately left unlinked:

- **Shimano New 600 EX** (Super Record II C656, Team Champion C456): the printed
  name does not settle 6207, SIS 6208 or 1988 6400 600 Ultegra (the 1988 Peugeot
  FR "New 600" without EX is 6400). Applies to headset, brakes, derailleurs,
  crank, pedals, freewheel, chain and hubs. The 7551 hub override is nulled for
  these bikes.
- **Shimano New 105 brakes**: BR-1050-49 or -57 reach is not printed. The other
  New 105 parts link to the 1050 series.
- **Huret Rival** front/rear (Super Mirage, Mirage 18, Mirage, Ranger MT40): this
  is the open Rival 1086-00 / AV 62.1 D / AR 41.1 D / ARIS Rival identity question
  in TODO. Super Mirage's **Huret Rider** front is a 42-52 double, and 8962 is
  the triple AV 62.1 T: NULL, as for the 1987 Manosque.
- **Stronglight 100, 30-40-50** (Grand Touring): 11311 ST100T or 1875 100 LX
  (the Peugeot 1986-88 triples use 1875). **Huret Duopar Eco**: 4276 or 4400.
- **Aris Rival / Aris New Success freewheels**: 2211 and 2121 are both bare
  Sachs-Maillard Aris rows. **3TTT Grand Prix** bars: CGP 2768, Grand Prix 2nd
  version 2761 or Record Grand Prix 2769.
- **Wolber Corsa tubulars** (Pro Racer): 6911 is the specific Corsa 80.
  **Helicosport** hubs: as the 1986/87 JO392 hold. **Shimano Deore XT** brakes:
  BR-M730 or M731. Hubs: no M730 pair row; 3551 is the 1989 M732. **Shimano 600**
  MTB headset: generation not printed.

## MBK Course et Loisir 1986/87 — applied partial ingest, 2026-11-19

- C662CA SuperRecord's maker-only Campagnolo hubs/brakes/seatpost/derailleurs/
  crank/pedals do not identify a SuperRecord component group. Its Maillard700
  freewheel lacks speed/variant. Retain these as literal unlinked text.
- JO392's plain Stronglight200 does not distinguish standard11312 from
  200LX1889. Sealed HélicoSport does not establish3387's QR/36-hole/5–6-speed
  version. Scoped NULLs preserve those holds; do not copy the German1986C502
  crank decision into this separate brochure.
- ProRace's singular Simplex6600Aéro derailleur has no stated front/rear
  position. Keep its printed identity in Groupset/Components text. Bare
  Stronglight crank/headset, Weinmann brakes and Mavic rims lack models.
- Tri-Delta has no printed named component specifications; SuperMirageC352's
  short paragraph does not inherit the separately headed JO392 equipment.

Applied as reviewed, source477; all held values read backNULL.
[Source, supported links and completed validation](known-catalogs/motobecane.md#mbk-198687-partial-road-ingest--applied-2026-11-19).

## German Motobecane 1986 — prepared link review, 2026-11-19

- EXD102 Super-Tour `Sportsattel` / English `Sport saddle` is generic and stays NULL. Translation alone exposed substring candidate 8860; there is no maker/model evidence for that identity. Scoped bike/year exclusion preserves the reviewed decision.

Applied as reviewed on2026-11-19, source465; all deliberately unlinked values read backNULL.

- C662E SuperRecord's printed CampagnoloTRIUMPH equipment means Triomphe, not a SuperRecord group. The initial front/LX and hub-flange holds are superseded by the [applied 2026-11-19 re-review](known-catalogs/motobecane.md#1986-german-105-and-triomphe-link-corrections--applied-2026-11-19): standard double front 2314 and pictured low-flange hubs 3277 are linked and verified. Rear first-style/S3 and the bare Turbo saddle still lack distinguishing evidence and remain NULL.
- C502 LeChampion's uncoded HuretNewSuccess fitment does not establish the exact AV66.3D/AR47.1D pair versus other documented versions. Explicit scoped NULLs suppress the current automatic picks8960/4402. Its bare StronglightA9 does not supply locknut/version evidence; its unqualified MichelinHi-Lite does not select Comp/Pro/Road or the1996 HiLite10530.
- C153S JubiléSport's **Shimano105NEW** was initially held across categories. The [applied 2026-11-19 re-review](known-catalogs/motobecane.md#1986-german-105-and-triomphe-link-corrections--applied-2026-11-19) identifies the named New 105 family as the 1050 series, attested in Shimano's August 1986 catalogue: HP-1050, FC-1050, FD-1050 and RD-1050 are linked and verified. Brake reach still cannot select BR-1050-49 versus -57; the six-speed cassette text does not identify a separate loaded cassette model. Those two remain NULL, as does the combined MICHELIN/HUTCHINSONHP22 tyre wording.
- C352E Super-Mirage's HuretPILOTE/RIVAL wording lacks explicit front/rear assignment. KC152/KC152D's bareHuret does not supply a model, and their Rigida13/20 lacks a tyre diameter selecting700C versus27-inch; keep thoseNULL. ThunBetaII has no suitable identified row. No hub maker is inferred from C352E's cluster-only Naben line.
- Plain/compound Atom/Normandy, uncoded HelicoSport/HelicoSeal variants, unqualified Maillard700/700SH clusters, WeinmannA129 finish/version, Symetric cosmetic variants, unnumbered cantilevers, generic/tandemTA cranks and unidentified house equipment remain literal text. New source/variant evidence is required before choosing a component; this review does not create a generic rematching task.

[Loaded catalogue, source pages and validation](known-catalogs/motobecane.md#german-1986-catalogue--dating-and-source-verification-2026-11-18).

## Performance 1985–86 component follow-through (2026-11-18)

New Dia-Compe 730G **11696** does not identify the bare 730 Miyata values as G,
establish 730G=730GX, or make 1964 Dia-Weinmann 8929 / steel 7300 in 8097 suitable.
Keep those current NULL links. The later Ofmega CX cartridge-hub evidence for
9161 does not bridge its construction back to the 1981–82 Motobecane CX hub
specs; keep them NULL. Existing 500G 9106 links remain correct. No bike links
changed during the applied Performance component reconciliation.
[Source evidence and validation](../../ingest-component-catalog/references/known-catalogs/cross-catalog-notes.md#performance-fallwinter-198586-reconciliation--applied-2026-11-18).

## Panasonic-informed identities (reviewed 2026-11-18)

Keep these current NULL links until new distinguishing evidence appears:

- Kusuki WP-RB **22446/22468** versus WPR-B 11330; Sigma **21489** versus
  WINΣ 11334; bare Raleigh WIN / WIN AH versus S-WIN-AH 11333 / WINΣ 11334;
  brandless 1980 S-WIN-AH / S-WIN60-AH and 1981–82 Silver Win AH versus 11333.
  Matching use, similar spelling and common material do not establish those aliases.
  KR-LB, BMTL-II-26FE, RK-90 and SMC-F likewise lack exact model evidence;
  Rocky III is not the documented Rockey-2. Generic Kusuki values lack a model.
- Sugino **21583 TGT-LP** is not established as plain TGT. Preserve its
  explicit NULL generator key after the applied 11336→1967 GT/TGT merge.
- Dia-Compe **21277/21297 PN-280** and **21319 PN-281** lack a manufacturer
  PN/DC prefix crosswalk. Panasonic's numbered 280/281 confirms families only.
  The 1980–85 Dia-Compe 730 specs lack a generation bridge to 1964 row 8929;
  Weinmann 8637 and steel 7300 in 8097 are unsuitable alternatives.
- KKT **RT-E1** (ten 1979–82 Miyata specs) is not explicitly equated to
  RT-E 3773. Panasonic prints RT-E and RT-E II separately; it supplies no
  E1/E alias. The 1980 Miyata chart's OCR-normalized codes need original evidence.
- Sansin **3448/3468/3488 ET-QS** is not proven identical to Panasonic's
  ET-Q merely because both are sealed quick-release hubs.

These are completed review decisions, not pending generic rematching tasks.
[Exact IDs, scan pages, exclusions and evidence needed](known-catalogs/panasonic.md#remaining-identity-review--2026-11-18-read-only).
The Sugino GT/TGT duplicate correction was subsequently applied and validated:
[11336 consolidated into 1967](known-catalogs/panasonic.md#sugino-gttgt-consolidation--applied-and-validated-2026-11-18).

## 1986 Peugeot Orient Express Rocky II stem

Spec **14964**, `Rocky II, alloy`, remains unlinked: its bike catalogue cell
does not name the maker. Kusuki Rockey-2 / Rocky 2 is supported on other 1986
Koga and Miyata bikes, but that does not identify Peugeot's stem. Seek maker
or marked-specimen evidence before linking. Raleigh Seneca's explicitly Kusuki
Rocky III adjustable is a separate model. [Fitment review](../../ingest-component-catalog/references/source-hunts.md#log).

## Material-only seatposts (reviewed 2026-11-18)

Generic `Aluminium` does not identify a seatpost model. The Guida '96 pass 3
simulation found 15 1982–84 Peugeot values that would otherwise substring-match
the proposed unnamed Titec aluminium post; an explicit generator guard keeps
them unlinked. Named Titec values remain eligible for model matching.

Maker plus material is treated the same way: 1989 Peugeot (NL) Cosmic `Atax alloy`
(spec 17185) was unlinked from 8528 on 2026-11-20 by the user's call, matching the
unlinked 1986–87 Peugeot `Atax, alloy, micro-adjust` posts. 8528 is a specific
pillar listed as new in ATAX's 1982 catalogue. Relink only with a model name,
code or photo identifying the post.

## 1989 Bianchi Dia-Compe 984D (reviewed 2026-11-17)

- Former hold: Forte **18613** and Volpe **18717**, `Dia-Compe 984D`, were left NULL. The US
  1990 MTB brochure (©1989), source 448, explicitly describes **984**, with
  Ratchet Dial and Rotational Dish adjustments, but does not print **984D** or
  establish that the D suffix is interchangeable. It supports Axis **18696**
  `Dia-Compe 984` -> new **11549**, applied on user approval; it does not
  support extending that link to the D-suffix specs. The maker/model hold is
  resolved below. [Original evidence](../../ingest-component-catalog/references/known-catalogs/dia-compe.md#mtb-brochure--ebay-800322888787-photo-inventory-reviewed-2026-11-17).
- **2026-11-21 approved, applied and validated:** source447,
  March1989 guide p.18, separately lists984D in Advantage ZAOH and984 Ratchet.
  Bianchi's original table explicitly names984D on both bikes. Added
  distinct **12226 984D** and both NULL→12226 links; do not reuse11549 or treat
  D as an alias. This supersedes the NULL hold above. Full comparison and
  quality checks passed; rerun zero changes. [Applied change and validation](../../ingest-component-catalog/references/known-catalogs/dia-compe.md#984d-maker-identity-and-bianchi-links--2026-11-21-applied-and-validated).

## Bottecchia US September 1972

- Professionale’s grouped Nuovo Record hubs/seatpost lack flange/post variant; Nuovo Tipo large-flange QR hubs do not distinguish 3232 kidney-bean from 3233 round holes. Giro d’Italia’s plain Record gear wording does not establish Nuovo Record; Gran Turismo/Valentino Extra identify only the rear mechanism. Keep these unresolved links NULL, along with generic Simplex/Unica and unnamed equipment. [Source and applied mappings](known-catalogs/bottecchia.md).

## Ariake frame-dependent saddles (reviewed 2026-11-17)

1987 Raleigh Zenith / Granada brake specs 8781 / 8804 likewise retain the
combined source text and NULL component link: Gents has 610 front and rear,
Lady's has 610 front and 733 rear. A rear link requires a frame qualifier;
see the Raleigh catalogue notes for the decision and source.

- 1982 Miyata 110 spec 21066 prints `ARIAKE 77-17, quilted vinyl top,
  padded; 81-L for ladies` (PDF p.15, source 403). 1983 Miyata 90 spec 22019
  prints `ARIAKE 77-17 (81L for Mixte)` (p.17, source 406). Each stored bike
  spec spans frame-dependent alternatives; keep the full text and component NULL.
  A single 77-17 link would omit the ladies'/mixte alternative. Exact generator
  NULL guards prevent that substring match. No separate 81-L row or speculative
  split is needed for this review. See known-catalogs/miyata.md for source URLs.

## 1981 Bianchi Universal brake codes (reviewed 2026-11-17)

- Super Turismo spec **6595**, `Universal ART. 130/131`, remains NULL. The
  source scan confirms that wording, but Universal labels 130 and 131 as two
  front options; a period retailer instead offers 131/133 as its front/rear set.
  Do not guess a positional split, correct the source to 131/133, or map it to
  unnumbered Sport specimen 1069 / 1071 from arm lettering alone. Revisit with
  Bianchi-specific parts/correction evidence or original marked/measured calipers.
  See component `known-catalogs/universal.md` for the source scans and distinction.

## Nashbar follow-through on Miyata (reviewed 2026-11-17)

- GX-400 Aero lever **18835** is not caliper series 8082 / 678. Its matching
  GX-400 caliper spec 18834 is already linked; keep the lever NULL pending a
  lever code/source. DC-983D brakes **22360 / 22462** are not established aliases
  of bare 983 row 662 by the 1988 Nashbar source. Retain both NULL until a D-code
  crosswalk is found. See component cross-catalog-notes.md, Nashbar follow-through.

## 1984 Motobecane (loaded 2026-11-16)

- Citation cleanup applied and validated 2026-11-17: clean `Huret Duopar Eco` values for
  Super Mirage **22811** and City-Becane **23182** retain scoped NULL guards.
  Interclub front **22829**, clean `CLB cantilever`, also stays NULL: maker and
  construction do not identify **604**, the 1951 Cyclotouriste model. Mirage
  hubs **22738** remain NULL; its p.7 caption names Maillard and front quick
  release without identifying a numbered hub. Page evidence belongs in the
  catalogue notes/ignored page column, independently of these link decisions.
- City-Becane (bike 1335, loaded 2026-11-17): the p.9 portrait
  identifies Duopar Eco, while p.10 says Duopar/Club. Keep rear spec 23182 NULL until
  4276 / 4400 are reconciled; the explicit NULL guard prevents a unique 4276
  substring match from choosing prematurely. The front plain Club uses the
  existing Club II 2379 crosswalk. Weinmann 431 26×1.75 remains NULL: row 7780
  is documented as BMX with no 26-inch size crosswalk. Generic cantilevers,
  ratchet shifter, maker-only saddle and unnamed tyre model remain unlinked.
- Le Champion LC40/LC41 and Prolight PL40/PL41 list alternative rim/tyre
  packages. Preserve both in each spec and leave NULL; the single Module E or
  Michelin BIB TS20 substring is not a link for the whole combined value.
- Team Champion `Cinelli Giro d’Italia 66`, `Stronglight D 9`, `Simplex 6600`
  and `Mavic SSC black` remain NULL: contradictory bar name/code, no D9 row,
  unspecified rear cage and a wrong-era plain SSC row respectively. Prolight
  `Simplex 610` does not distinguish T/GT. Do not infer these variants from year.
- Le Champion Atom 77 is six-speed; row 8127 is five-speed and generic 7233
  is a single-speed freewheel. Both are unsuitable. Grand Touring and Super
  Mirage print 34T Helicomatic clusters; 8131 documents a 32T maximum.
- Grand Touring Stronglight 99 is a triple; do not use double row 1906.
  Super Mirage's portrait explicitly says Duopar Eco, but 4276 / 4400 need
  identity reconciliation before a link. Plain Huret Duopar on Grand Touring
  and Interclub does not establish the titanium/Eco variant. Huret S PP,
  Challenger S. and bare Rival fronts also need clearer variant evidence.
- Grand Jubilee and Jubilee Sport print Michelin BIB TS23 **27x1**; 6831 is
  700x23C. Retain the source wording and leave NULL pending evidence of the
  27-inch fitment or a catalogue correction. Brand-only, generic/house parts,
  unnamed shifters, unspecified Maillard hubs/freewheels, RS saddles and
  Michelin-or-Hutchinson tyres stay unlinked. No model inferred from fitment.
- Interclub's combined rear Weinmann 999 and Maillard drum cannot have one
  component link. Its combined front/rear tandem crank and bar specs stay NULL.
  See [catalogue notes](known-catalogs/motobecane.md#1984-uk-distributor-edition--loaded-2026-11-16)
  for evidence, applied links, availability updates and retained source files.

## Mixed calls (2026-10-30)

- Decided 2026-10-30, leave unlinked: 1982 Peugeot "Lightrace Luxe" headset (7; only 3032 Lightrace Grand Luxe, undated, and 3033 Super, 1984); 1981 Peugeot "Simplex SJA" front on PX 10 S, PSV 10, PFN 13 (3; neighbour years disagree: 102 / 222, triple 103 / 223); 1983 Peugeot "Maillard 700 Pro" hubs (3; large vs low flange, neighbour years do not say); 1982 Peugeot "Mafac Promotion" levers (3; four variants); 1990 Bianchi "Sedisport 270 black" (2; no 270 row).

## Freewheels / cassettes

- **1991 Bianchi US**, source **508**: Equinox and Grizzly 12–28T, and
  Volpe, Ibex, Nyala and Ocelot 13–30T, are Accushift Plus seven-speed
  offerings with the mechanism unspecified. Keep them as catalogue text.
  Axis and Sika explicitly say cassette. Pista explicitly says 16T fixed
  gear. [Edition evidence and mappings](known-catalogs/bianchi.md#1991-us-import-applied-and-validated)

- **1989 Bianchi Sport SX, spec 18494** (2026-11-20 original-table review): `Shimano silver 13-24T 7-speed` is explicitly printed as a cassette alongside RM-50 hubs and Sport LX SIS. Keep NULL: neither the exact cassette code nor the rear hub model is printed. Existing CS-1000 7564 describes a black six-speed cassette, while FH-RM50 7624 is also six-speed; do not force those into this seven-speed offering. Bike/year-scoped NULL guard added. Tangent/Ocelot proposals and source evidence are in the Bianchi catalogue notes, "Cluster review — 2026-11-20".

- Decided 2026-10-30, leave unlinked: Atom 13/26 6 speed, 1981 Raleigh Professional [9341] (2050 black vs 2051 silver cogs, colour not printed); Shimano Gold 13/28 with 600 EX, 1981 Raleigh Criterium [9285] (no Gold freewheel row); Regina CXS 7-speed, 1986 Cinelli [2309] (2169 is the 6-speed only).

## Seatposts

- 1987 Bianchi Mondiale, corrected table value `Gipiemme Cronosprint anodized` (spec 1133):
  NULL replacing the incorrect C-Record link 5737, applied/validated 2026-11-17. Source 46,
  PDF p.15, names no code. 5789 600BA, 5790 600CA Aero and 5788 600DD remain plausible; the p.4
  complete-bike photo / group prose does not establish a numbered Cronosprint variant. The
  existing bare Cronosprint mapping on Giro / Super Leggera is a separate prior decision.

- Leave unlinked: the three plausible Peugeot Spidel links; 1980 Peugeot "SR Laprade, fluted, lightweight" (five SR Laprade rows: 5857 / 5858 / 5859 / 5860 / 5862); Peugeot "Stronglight" / "Strong alloy" text (8, maker only); 1986 Falcon "Suntour QR-120" (a seat bolt, not a post).

## Rims

- Applied/validated 2026-11-17, **user approved**: 1982 Battaglin Alessandro
  spec **12943**, `Nisi Corsa`, unlinked **5131 Corsa Toro (no eyelets) -> NULL**.
  Original Alessandro sheet prints no Toro/code/eyelet construction. Scoped
  Alessandro/1982 NULL override now prevents that unsupported assignment from
  recurring if 5131 becomes the only candidate. Need a numbered parts list or
  identifiable original rim; see Battaglin's Nisi Corsa review.

- 1987 Bianchi X4 `Bianchi Speciale` (spec 1119): corrected wording applied/validated 2026-11-17,
  NULL retained. Source 46 PDF p.15 and p.4's Bianchi Black and Silver Pro prose name
  a house rim, without identifying a Campagnolo maker/model. Do not infer one from C-Record.

- Leave unlinked (several rows fit): Miyata "ARAYA 16-B" (four 16B rows); 1989 Bianchi "Campagnolo Omega Super hard anodized" (4957 / 4961 / 4958 all cover 1989); "Ambrosio Elite anodized" (Extra Elite / Super Elite / Aero Elite); "Araya RM alloy" (RM series); 1989 Peugeot "Mavic 190 NE" (DB has 190FB and 195NE); 1988 Peugeot "Mavic 400" x2 (model not identified); 1989 Bianchi "Crono 700 and Hypothesis 26" (two rims in one cell); Raleigh 1989 "Alesa alloy / hollow section" (12) and "Nisi Sprint / High Pressure" (maker, no model).
- Also several rows fit: 1991-92 Bianchi Proto / X-4 "Campagnolo Sigma" (4; tubulars 4970 Sigma Strada, 7032 Sigma 20 Strada, 7031 Sigma Pave, 4969 Sigma Crono all cover 1991), 1994 Cinelli Supercorsa "Campagnolo Omega" (4955 / 4957 / 4961), 1991 Colnago Krono "Ambrosio Aero (spoked-wheel option)" (4; 4892 Aero, 9481 Aerodynamic, 9482 Aero Elite). Either/or and two-rim cells stay unlinked: "Campagnolo Victory or Ambrosio Metamorphosis" (Victory Strada vs Crono also open), "Mavic Monthlery / Sport or Pellet", "Martano Strada (tubular) / Araya 20A smoked", "FIR Tour or Ambrosio Giro d'Italia". Still no row: Araya RM-18T, Ukai LA-14 / EX-17 / 22A / 7Z, Weinmann 716E / 425 X / Aero, Sumo 7X / 14F, Rigida Jade / Saphir / CTX 10, Wolber Alpine, Velotech, FiR Mase Lega / MT 222 / MT 240.

## Hubs

- **1991 Bianchi US Axis**, spec **26512**, links to **12229** FH-XC00-7.
  Bianchi lists XC-Comp 36H and a seven-speed 12–28T cassette. SunTour's 1991
  maker page lists the corresponding freehub. The later FH-XC02-7 is row
  7982. [Edition evidence](known-catalogs/bianchi.md#1991-us-component-follow-up--applied-and-validated)

- Reviewed2026-11-21: Raleigh1986 Portage **8259** (`SR alloy, sealed LF QR
  36° / rear:40°`), Marathon **8402** (`SR alloy QR sealed36°`) and Pursuit
  **8422** (SR alloy front / steel CP rear) remain unlinked. Portage resembles
  the1985 MTH-100 configuration, but its1986 table omits a model code;
  Marathon's sealing/QR/drilling likewise do not identify CRH-310. Pursuit
  combines different front/rear materials without a model identification for
  either half. Do not carry a neighboring bike's code or a prior year's model
  into these cells. Revisit only with a coded original fitment or a maker/parts
  crosswalk. [Source ledger and applied coded-only links](../../ingest-component-catalog/references/known-catalogs/sakae-ringyo.md#raleigh-coded-hub-reconciliation--2026-11-21-applied-and-validated).

- Applied/validated 2026-11-17, **user approved**: 1991 Bianchi Grizzly
  spec **19546**, `SunTour XC-Pro`, unlinked **3628 HB-XP00-R -> NULL**.
  The former link specified a threaded rear freewheel hub. Original Japanese table p.9
  prints the group name, without a front/rear code. Stored cluster **19547 ->
  1222** is a cassette inference, not independent proof of a hub code. Scoped
  Grizzly/1991 NULL override prevents a unique future hit selecting a hub
  construction without evidence. See Bianchi's Grizzly hub review.

## Saddles

- 1980 Motobecane US: SuperLeggera suede/Anatomique/Italia Competition lack a safe variant identification. Cinelli66 logo and SuperRecord post bolt generations overlap; unnumbered Vainqueur/GranSport/600EX brakes, Selecta I/T wording, mixed crank/pedal equipment and Shimano400/800 fitments remain unresolved. Paris-Roubaix does not establish cotton6762; SuperGentlemen clincher text does not identify tubular8974. See the brand's1980 entry; these are recorded decisions, not automatic sourcing tasks.
- 1979 Motobecane US: suede SuperLeggera does not establish smooth-leather5504; Criterium leather/Anatomic coverings remain unresolved. SuperGentleman700C fitment does not establish tubular8974 or justify a date extension. Four generic Safety levers values are guarded against CLB247; Grand Touring SL against black1975 variant2617. AltusST/RS, CycloneGT front body, Team Champion generic Record rear, 600X/GranSport/4051 brakes, CTP5 and six-speed Uniglide remain unresolved; see the brand's1979 review. No speculative date changes or variant links.
- c.1977 Motobecane US: Grand Record Brooks Professional remains NULL without rivet/version evidence. Mirage/Super Mirage/Grand Touring VGT Luxe stays NULL across the 1976/1978 generation-date gap; no date extension inferred. Le Champion Record racing brakes lack reach/CPSC version, and Le Champion/Team Champion generic Campagnolo posts lack Record/Super Record identification. Alternatives and generic values remain text; detailed source/mapping evidence in the Motobecane catalogue notes.
- c.1973 Motobecane US: Grand Touring table/portrait disagree on padded versus Ideal 80 saddle and SunTour VGT versus Huret Lux rear. Preserve both attributed values with NULL links. Mirage Simplex Prestige front/rear lacks variant evidence; three Stronglight Competition headsets lack locknut evidence; Grand Record/Le Champion Brooks Professional lacks Team Professional rivet evidence. Scoped NULL guards preserve these decisions without changing other catalogue mappings. Revisit only with distinguishing edition-specific evidence.
- Guard added 2026-11-17: 1973 Peugeot PX 10 spec **7624**, `Brooks Professional
  or Ideale 90`, stays NULL under an explicit generator override. This enforces
  the existing either/or decision even when Brooks Professional 10057 is the
  sole substring candidate; it does not choose one of the alternatives.

- Leave unlinked: the Colnago Concor family (decided 2026-10-30); 1987 Peugeot Galaxie "Mondial silver" (Mundialita or an Iscaselle Mondial); the 1993 Bianchi house saddles (9200 supersoft, Hi-density, Gelfoam); 1982 Peugeot "Ideale 'Donna'" (no Donna row); "Viscount mtn / MTB anatomic" (5, maker only).
- Left by user's call: 1994 Cinelli Genius Machine / Soft Machine "Bontrager Titanio" (5540 Selle San Marco Bontrager Ti is dated 1990 only) and "San Marco Rolls" on the 1994 Cinelli Supercorsa and 1991 Colnago x4 (5563 Rolls ends 1988; extending it would reverse the Colnago no-wrong-era decision); 1994 Genius Strada "San Marco Rolls Tit." (no titanium Rolls row). Either/or: "Selle Italia Super Turbo or Turbo", "Brooks Professional or Ideale 90", "Ideale 2002 or treated leather". No row: San Marco Tuono (1994 Cinelli), Bontrager E 40, Isca Record Lycra / Competition / Nabuk, Raleigh G.T. Mk IV / Mk V, Selle Royal Racing / Leather Racing.
- Decided 2026-10-30, leave unlinked: Brooks B-15 / B15, 1970-72 Raleigh Super Course / Gran Sport [7819 9403 8958 8977] (every B15 row is 1950s-dated; needs a 1970s Brooks catalogue); bare "Concor" (16), "Concor Moda" (4) and "Concor in MODA grid colours" (3), 1986-88 Colnago: Concor is a family by 1985 (Supercorsa, Profil, Max, Bufalo, Confort, SL versions), not one model.
- Decided 2026-10-30, leave unlinked: San Marco Gilux race, 1978 Peugeot PS / PSN 10 [9987 9968] (5555 GI-LUX 311 undated, 5556 GI-LUX 312 from 1980); Selle Italia CX / Sella Italia CX, 1982 / 1984 Peugeot [11116 12301] (no Selle Italia CX row; 5524 Selle Royal CX only if the maker is misprinted).

## Stems

- Falcon–Merckx c.1973 models 100/102/104: bare `Cinelli` stays NULL; no stem model is specified. Scoped guards preserve other Falcon choices. [Brochure evidence](known-catalogs/falcon.md#eddy-merckx-brochure-c-1973--loaded-2026-11-17).

- Leave unlinked: "CTA" on the 1989 Peugeot Alpine Express / VTT Express MTBs (6452 is the aero road CTA); "Atax or CTA" (6, either / or).
- Left by user's call: 1994 Cinelli "Cinelli Grammo Titanio Ahead" (2; 6497 Grammo Titanium 1993-2000 covers the year but is undifferentiated, 10137 Road Ahead starts 1996). No row: 3T Procrom Ahead, 3T Procurve (1994 Cinelli). 1991 Bianchi "Nitto Dynamic III" stays on its do-not-link override (bianchi.md).
- Decided 2026-10-30, leave unlinked: Sakae RY / RY 70 mm / RY 80-90 mm, 1985 Bianchi Randonneur 700 / Rekord 26 / Speciale-II [5779 5796 5746] (only 1974 RY-70 / 90 / 110 and 1982 RY2 rows); TTT Grand Prix, 1970-71 Raleigh Professional Mk II / III [7753 9356] (only 1960 / 1964 / undated Gran Prix *Special* rows).

## Handlebars

- **Nitto Miyata review, 2026-11-20:** B-105F specs 22104/22168/22190 stay
  unlinked pending a maker suffix/model crosswalk to B105 2889. Do not strip F
  globally or conflate B105 with Mod. 55. The scoped MDL-55/55F extension to
  Mod. 55 was approved, applied and validated; [evidence and limits](../../ingest-component-catalog/references/known-catalogs/nitto.md#miyata-mod-55-linking-follow-through--2026-11-20-applied-and-validated).

- Leave unlinked: 1975 Motobecane Grand Touring Randonneur bend and Tandem combined front/rear cell; the two 1986 Cinelli Almarc bars (11171 Almarc is a 1980-81 3ttt Merckx / Rekord-78 set, not these).
- "MIYATA SIGNATURE Alloy" (4) is a house bar: leave. Leave unlinked: 1986 Miyata 100 "SR CTSD" (nearest is 7888 CTD, a different code); Miyata "SR RANDONNEUR Alloy" (3; RN-L / RN-S / RND / WR, nothing to choose on); 1989 Peugeot Cosmic "Franco Italia" (Philippe 2897 1970-82 or Milremo 2868 1984); 1989 Peugeot Anjou "CTA alloy randonneur bars" (2782 ATAX CTA is a racing bend); 1978 Peugeot "Atax Philippe, demi-course" (no demi-course row).
- Leave unlinked: "3ttt / TTT Competizione" (1987, 1991-92 Bianchi; three bends), 1991-92 Bianchi "ITM Mondiale" (3; 9198 Mondial 90/A ends 1990 and names a model the cell does not), 1991 Bianchi Sakae MTB-220 / MTB-227 (only MTB-226SB, 1993), 1994 Cinelli "3T Pro Light" (2) and "Cinelli Eubios 26" (no rows), 1981 Bianchi "T.T.T. Rekord".
- Decided 2026-10-30, leave unlinked: "Racing bend" / "Racing bend, light alloy", 1970-76 Peugeot x13 [7368 7507 7571 9539 9567 9698 9670 7274 7258 7314 7299 7448 7433] (no maker printed; 2901 Franco Belge 354 starts 1979); T.T.T. Record Competizione, 1978 Bianchi Campione del Mondo CX [12513] (DB splits it by bend: 2752 Gimondi / 2750 Merckx / 2777 TdF; none printed).

## Tyres

- **Applied and validated (2026-11-20):** scoped Miyata model/weight mappings for
  Corsa-CG240g specs21081/21421→9428, Modiale290g21102→6891 and
  Pista-CS150g21461→9433. [Vittoria inventory, evidence and validation](../../ingest-component-catalog/references/known-catalogs/vittoria.md#bike-link-follow-through-and-validation).

- Guard added 2026-11-17: 1973 Zeus Z 66 spec **44**, `D'Alessandro Super-Cross
  Tubulars`, stays NULL. The existing 11138 `D'Alessandro Super` is a grooved/mixed
  tread tubular; no recorded evidence establishes Super-Cross as that model.
  A substring alone does not justify dropping the Cross qualifier. Revisit with
  an explicit maker model crosswalk or identifiable original fitment evidence.

- **Intentional unlinked Ritmo identification (2026-11-14):** Raleigh
  specs 4536 / 4621 / 4669 name plain Clement Ritmo, without evidence identifying
  LTX 55 (6767). LTX 55 is a real photographed marking, but the Ten Speed Drive
  1983 page used for its dates/255 g construction describes only plain Ritmo.
  Unsupported links cleared and generator override set to null; 6767's
  unsupported catalogue dates/construction withdrawn, photographic source restored.
  [Evidence](../../ingest-component-catalog/references/known-catalogs/clement.md).
  Need dated LTX 55 evidence and independent Raleigh fitment identification;
  do not extend its dates from the plain name.
- **Intentional unlinked identification:** 1983 Bianchi Super Pista spec 1023
  prints only Clement Pista; Guida distinguishes Pistard from numbered Pista
  tyres. Unsupported 6765 link cleared and override set to null on 2026-11-14.
  Need a model code, casing/weight or independent fitment evidence to identify it.
  [Evidence](../../ingest-component-catalog/references/known-catalogs/clement.md).
- **Tyre groups kept separate (2026-11-14 review, no merges):**
  Groups kept separate: Schwalbe Blizzard Pro 10225/10227/10541/10542 (TPI/bead),
  Vredestein Slimline Sprint 8771/8772 (630/622 mm), Clement Seta 8970/6769
  (track/less identified), Vittoria Record 9062/9067 (tubular/clincher),
  Specialized TriCross 9909/10230 (generation), Schwalbe Stelvio 10228/10229
  (wheel size), Dourdoigne 11144/11145 (weight configuration).
- Generic and house-part tyre strings remain plain text. 61 Colnago Gommitalia/GommaItalia specs
  lack sufficient model identification; their volume does not justify default links.
- Decided 2026-10-30, leave unlinked: Clement silk tubulars, extra-light, 1978 Bianchi Specialissima Barcellona [12481] (three road Seta Extra rows: 6738 / 8971 / 6761); Hutchinson Silk, 1971-72 Raleigh Professional / Pro Track x3 [9364 8919 8900] (no row fits: 9050 is a 1976-78 track tyre, 9266 is 1985).
- Decided 2026-10-30, leave unlinked: Vittoria Seta / Seta original, 1985 Bianchi Super Leggera / Centenario [5693 5677] (three road Corsa Seta variants: 9248 / 9429 / 6877); Wolber Rallye, 1984 Bianchi Nuovo Racing [1036] (Rallye 19 / 20TKS / 22 / 23); Dunlop High Pressure Road Racing, 1970 Raleigh Gran Sport [7799] (6801 is 1940-60); IRC "Roadlite Ex" / Roadlite 100PSI skinwall, 1986 Raleigh Prestige / Technium 480 [8184 8325] (9099 is a 1978 27in Road Lite Z).

## Pedals

- Rechecked 2026-11-18: STC p.18 explicitly identifies Maillard 700 RC as
  chrome-steel cage and RN as black aluminium cage, but does not name RA or
  establish RA/RN equivalence. Retain the four Spidel NULL links and explicit
  dural links below. **Applied and validated:** restored unbadged Maillard
  RN 3830 for coded specs 11640/11651, narrowed 3827 to its silver specimen
  and cleared fifteen unsupported family-only links. Explicit NULL generator
  decisions prevent uncoded 700 / `super light` / toe-clip wording from choosing
  a cage variant. Keep Spidel-badged specimens separate; silver finish does not
  establish RC or RA.
  [Exact applied set](../../ingest-component-catalog/references/known-catalogs/maillard.md#maillard-700-colour-merge-reconciliation--2026-11-18-applied-and-validated).
  [New primary evidence and exact source lead](../../ingest-component-catalog/references/known-catalogs/maillard.md#spidel-700-stc-codematerial-review--2026-11-18-read-only).

- Rechecked 2026-11-17: Peugeot 1981 PRO 10/PY 10 S `Spidel 700`
  (10671/10691) and 1982 `Spidel 700 RA` (11032/11053) remain unlinked.
  The colour board explicitly names 700 RA but is undated and gives no cage
  material; the separate Le Cycle no.119 p.35 image does not label its pedal
  700 RA. Neither chooses black-alloy 3833 versus chrome-steel 3991 or dates
  either exact variant. Preserve existing explicit-dural links to 3833.
  [Evidence and next discriminant](../../ingest-component-catalog/references/known-catalogs/maillard.md#spidel-700-ra-group-box-review--2026-11-17-read-only).

- Most unlinked values are toe-clip / reflector text ("Course with toe clips and straps" 17, "Sports pedals with reflectors" 10), Raleigh house pedals (717, 501, 917, "Raleigh ball bearing"), the Maillard CX / Atom source gap (see source hunts) and Colnago group fan-out ("Shimano AL 11", "Shimano Santé"): leave.
- Leave unlinked (several rows fit or either / or): 1982 Battaglin "Gipiemme Cronospecial / Special" (existing do-not-link: 3747 Cronospecial and 3752 Special are separate pedals); 1972 Raleigh "Campagnolo Pista" (3711 / 3715, both 1971+); 1980 Raleigh "Sun Tour Superbe" (PL-1000 Custom or PL-4000 Pro); 1981 Peugeot "Atom 450" x2 (450RA or 450RN); 1981-82 Peugeot "Spidel 700" / "700 RA" x4 (Spidel 700 rows end 1980; Spidel badge variants kept apart); Bianchi "Ofmega Pista" (Master or Mistral Pista) and "Ofmega Competizione" (not the Super Competizione).

## Shifters

- Sachs Rival ATB brochure review, 2026-11-19: added 11706 MA82.8G is explicitly
  a six-speed handlebar indexed lever, MA82.9G its left friction control and
  MA82.10G an Orbit-hub alternative. Champagne spec17290's `Aris Index; thumb
  shifters on the ladies' model` supplies no maker code or matching system
  configuration, so keep it NULL. The 1987 Raleigh black-ratchet Rival values
  likewise do not identify these indexed ATB controls. No generator/link change
  was needed; the [applied specimen comparison](../../ingest-component-catalog/references/known-catalogs/huret.md#rival-atb-versus-rival-7000classic--2026-11-19-applied-and-validated)
  records the distinctions from the later Classic/Rival controls.
- Sachs Huret compatibility review 2026-11-16: manufacturer sheets 501.1 DFE
  and 510.8 D establish that 6110's MA85.5E right lever selects six or seven
  speeds; MA85.4E left is retro-friction. Supersedes the earlier seven-speed-only
  concern. Retain Peugeot 15103 / 17501. Raleigh 8849's six-speed range is
  compatible, but its ratchet wording does not establish the exact ARIS lever;
  retain the existing link pending code/photographic evidence. See the
  [sources and retrieval limits](../../ingest-component-catalog/references/known-catalogs/huret.md#new-success-shifter-sixseven-speed-compatibility--2026-11-16-review).
  Subsequent maker/specimen/owner-photo comparison still does not identify
  Raleigh's right-lever code or selector; retain 8849's current link pending
  new distinguishing material. See the [follow-up](../../ingest-component-catalog/references/known-catalogs/huret.md#raleigh-shifter-and-front-provenance-follow-up--2026-11-16).
- Most unlinked values are generic or system text ("Simplex" 8, "stem shifters" 6, "Handlebar stem power shifters" 8, the 1983-84 Raleigh "Direct Fit / Clip Fit / Alloy Ratchet Levers", "SIS levers", "Aris Index"): leave.
- Leave unlinked (several rows fit): 1983-84 Raleigh "Shimano 600 AX Top Mounted Direct Fit Levers" x2 (SL-6310 or SL-6311 braze-on); 1986 Raleigh "Suntour Cyclone" (6278 / 7826 / 6279); 1989 Bianchi "SunTour GPX AccuShift" (6286 B / 6287 C); 1989 Bianchi "SunTour XCE-4050" (6285 SL-4050 is titled Edge, the road group); 1987 Raleigh "Huret Rival ... black ratchet levers" (6108 is the indexed Aris); 1974 Motobecane "Simplex Prestige stem shifter" (stem row 6226 is 1964-65).

## Brake Levers

- Applied on user approval, 2026-11-17: 1989 Bianchi Axis spec **18697**
  `Dia-Compe 250S aero` -> **275 AC250S/BRS300**; Volpe **18718**
  `Dia-Compe BL-08 aero` -> **11536 BL08/BL08C**. Printed March 1989 maker
  guide, pp.1–2 (source 447), names both codes. Exact value overrides apply
  only in 1989. This supersedes the earlier 250S no-row decision; do not use
  AC250/AGC250 instead. [Evidence](../../ingest-component-catalog/references/known-catalogs/dia-compe.md#march-1989-product-guide--ebay-144913620478-applied-2026-11-17).

- Most unlinked Peugeot values name no model ("Double levers" 21, "Course levers" 13, "Weinmann" 8, "CLB" 7, "Drilled course levers with rubber hoods" 7, the 1987-88 "Road grips, double lever" strings): leave.
- Leave unlinked: 1982 Peugeot "Mafac course (double cable on the right)" x2 (the plain "mafac course" override goes to 357 Course 419 / 429, but a two-cable lever may not be that part; not applied 2026-11-02); 1989 Bianchi "Shimano Sport LX aero" (BL-A450 / A451 / A452 / A453 all Exage Sport); 1982 Peugeot "Mafac Promotion" x3 (344 / 345 / 346 plus the dural Promotion = Course 130 decision) and "Mafac, drilled" x2; 1989 Bianchi "SunTour XCE-4050" (455 is the Edge road lever); 1986 Raleigh "DC 630/165 (racing); DC 630/135 (touring)" (two levers in one cell).

## Chains

- Applied and validated2026-11-21: ordinary named Sedisport fitments use
  **8765**; duplicate1402 was merged into it. Delta is a shared pin treatment,
  not another model. Cleared1980 Peugeot NL specs **10547/13376/13396/13414**
  because their original pages supply only treatment/length or maker,
  treatment and length. Explicit NULL overrides prevent the two value keys
  from selecting Sedisport after deduplication. Do not infer4D or Pro either.
  [Original pages, retained identity and validation](../../ingest-component-catalog/references/known-catalogs/sedis.md#sedisport-duplicate-and-fitment-reconciliation--2026-11-21-applied-and-validated).

- Reviewed 2026-11-19: 1977 Peugeot silver **Sedis Color 9719** remains NULL:
  the 1979 importer sheet's gold/dark-blue 4DS does not establish that finish.
  Plain 1977–78 Sedis 108/110-link entries likewise do not identify 4D from
  dimensions or installed length alone. Sedicolor 8764 already covers 1976–80;
  do not treat named 1978 Motobecane 23165 (already linked) as a gap.
  [Evidence limits](../../ingest-component-catalog/references/known-catalogs/sedis.md#peugeot-197778-chain-evidence-review--2026-11-19-read-only).

- Confirmed and applied 2026-11-17: 1981 Canadian Raleigh Professional chain
  **9342**, `Regina D'Oro ½" x 3/32"`, NULL→**1382 Extra50 Oro**. Original
  panel and pre-BX ordinary Oro identity support the link; exact-value,
  Professional/1981-only override. [Evidence and validation](known-catalogs/raleigh.md#1981-professional-regina-chain--applied-and-validated-2026-11-17).

- Confirmed and applied 2026-11-17: 1978 Bianchi **12482 / 12503**,
  `Regina Extra Oro 50 Record, lightened` →**1381 50 Record**; **12523**,
  `Regina Extra Super Corsa Oro` →**1382 50 Oro**. Original Bianchi scans
  and maker/retailer construction evidence distinguish drilled gold Record
  from ordinary undrilled Oro. Exact-value 1978-only overrides supersede the
  earlier ambiguity; no generic Oro/Record fallback. See the
  [evidence and validation](known-catalogs/bianchi.md#1978-regina-chain-identities--2026-11-17-applied-and-validated).

- Decided 2026-11-17: 1986 Falcon Sierra / Everest specs **16332 / 16352**,
  `Black`, stay NULL. Colour alone establishes neither maker nor model. An
  explicit Chains `black` NULL guard prevents the unique substring candidate
  **10740 Sachs SC 40 Black** (1996) being assigned to these 1986 bikes.
  Named chains such as SC 40 Black remain matchable by their actual names.

## Crankset

- Applied/validated 2026-11-17, user approved: 1987 Bianchi X4 /
  Mondiale crank specs **1107 / 1127**, `Campagnolo C Record 53/42T`,
  **1482 -> NULL**. Source 46 pp.4/15 gives no distinguishing generation marking;
  source 414 still shows early engraved-shield 1483 in February 1987. Year and
  ratio cannot select between 1482/1483. Scoped generator guards prevent
  relinking; live rows are NULL and SQL rerun changes zero. Reopen only with original
  fitment markings or a Bianchi parts crosswalk. See the
  [Bianchi evidence](known-catalogs/bianchi.md#1987-crank-generation-links--2026-11-17-applied-and-validated).

- Most unlinked Peugeot values are material / tooth text ("Dural square taper, 42 x 52T", "Steel, 46T") or the Solida / Nervar source gap (priority list item 2); most Raleigh values are the house "Exclusive Alloy Cotterless" and "Raleigh/SR alloy 5 pin" sets: leave.
- Leave unlinked: 1990 Bianchi "SR alloy XCT/GXC 48/38/28T" (8004 CW-XT01 XCT is 1992 and "GXC" is unexplained; not applied 2026-11-02); Motobecane "T.A. PROFESSIONAL" x2 (TA 1690 / 1693 / Professional 3-arm); 1986 Peugeot "Thun Coronado" (1444 / 1445 / 1446); 1987 Peugeot "Mavic anodised" (630 or 635); 1993 Bianchi "Sugino Mighty" (MTB Mighty rows are 1995).

## Brakes

- Applied/validated 2026-11-17, user approved: 1989 Bianchi Tangent Brakes
  spec **18675**, `SunTour XC-9010`, **1055 -> NULL**. Source325 table p.18
  names the group for the combined brakes. SunTour Edition No.89 printed
  p.25 (PDF p.26) identifies 1055 CT-XC10 as rear-only SE, alongside standard
  CT-XC00 (1054). Neither code identifies the whole combined cell. Preserve
  wording and leave NULL; Tangent/1989 generator guard prevents relinking.
  See [SunTour evidence and validation](../../ingest-component-catalog/references/known-catalogs/suntour.md#xce-crank-dating-and-tangent-brake-link-review--2026-11-17-applied-and-validated).

- Most unlinked values are type or maker text ("Mafac centre-pull" 17, "Weinmann side-pull" 13, "Cantilever" 7, "Weinmann" 6, the Raleigh "Weinmann Alloy Side Pull with Extension Levers" and "Raleigh/Weinmann alloy centerpull" strings): leave.
- Leave unlinked: 1986 Miyata "SHIMANO New 600 EX" x2 (BR-6207-49 short or -57 long reach); 1989 Peugeot "CLB / GL 47-60" / "CLB 47-60, white" (three GL 47-60 version rows 613 / 614 / 615, all undated); 1982 Battaglin "Gipiemme Modolo Professional" (880 v1 1976-80 or 892 v2 1985) and "Gipiemme Modolo Spidi"; 1987 Peugeot "Dia Compe G.500 Q.R." (678 G-N series or 9106 500G); 1982 Peugeot "Mafac Competition Sport" x2 and 1970-72 "Mafac Course" x3; 1981 / 1984 Peugeot "CLB Competition" (608 is 1950-70); remaining front/rear MTB halves are listed in the brake-identification worklist above.

## Rear Derailleurs

- c.1979 Pinarello: the groupset expansion (applied/validated 2026-11-20) supersedes the initial
  generic-group-only treatment; follow the Colnago/Cinelli seven-category split.
  Preserve Record Special's mixed-group wording and leave those parts unlinked;
  Prestige/Super Record rear generation and brake reach also remain unresolved.
  Makerless Super Leggera
  saddles stay NULL (not Iscaselle 5375); Record Special's explicit Super Record
  brakes stay NULL without reach evidence (582 versus 7005). Regina Tital seven-
  speed, unspecified Regina Oro/Sestupla, Mavic OR/Legger Special/Servizio Corse,
  Cinelli Special and Campionissimo remain unresolved as detailed in
  [Pinarello notes](known-catalogs/pinarello.md#circa-1979-ingestion--applied-and-validated-2026-11-20).

- Applied/validated 2026-11-17, user approved: generic 1980–1983
  `Campagnolo Super Record` / `Super Rekord` does not identify the late
  first-generation PAT.80 specimen 4149 rather than second-generation 4151.
  **4149 → NULL** for specs **782 / 985 / 6492 / 6647 / 12880**;
  live rows are NULL and the generator guard prevents reassignment. Reopen only with
  original fitment markings/photos or a period parts crosswalk. See the
  [specimen review](../../ingest-component-catalog/references/known-catalogs/campagnolo.md#super-record-and-early-campagnolo-specimen-review--2026-11-17).

- Reviewed 2026-11-17: **1978 Peugeot NL PA60 rear 10093**, `Simplex Criterium`,
  deliberately remains NULL. The original PA60 specification names no code;
  the full-bike photograph is the PR60, while the separate generic derailleur
  close-up is not identified as PA60 fitment. Criterium alone does not prove
  AR637 NI (4645) or a later LJ model. Existing year-ranged override already
  blocks 1978, including when only one candidate remains; 1976 mapping stays.
  Reopen with an original PA60-specific part-code document or a demonstrably
  original, sufficiently detailed 1978 NL specimen. Restored examples do not
  supply that evidence. See [source review](known-catalogs/peugeot.md#pa60-criterium-rear-identity-review--2026-11-17).

- Superseded 2026-11-16 (user approved): the 1989 Bianchi Forte / Volpe "XCE-4050" specs now link to the XE45 series. SunTour Edition No. 89 (the 1989 line, source 427) prints XCE 4050 as RD-XE45-GXB 11395, FD-XE45-GXH 11396, SL-XE45 11397, BL-XE45 11398, CW-XE45 11401 (48 / 38 / 28T, as Forte's crank) and HB-AT45 hubs 11403. The earlier unlink only rejected the 1990 XE00 and 1992 XE01 rows.
- 1987 Bianchi Sport SX Alpha-5000 brake **1324 resolved 2026-11-19**: corrected unsupported SunTour maker to `Dia-Compe Alpha-5000 Balance Response System with aero levers`, linked to new brake **11710**. [Applied evidence and validation](../../ingest-component-catalog/references/known-catalogs/dia-compe.md#alpha-5000--applied-2026-11-19). The original Bianchi cell omits SunTour; a specimen is marked DIA-COMPE / α-5000. The aero-lever model remains unspecified. Crank **1327**, `SunTour Alpha-5000 52/42T`, remains NULL and unchanged: the SunTour sources establish no matching crank identity and this brake review does not resolve it. Its hubs already link to Sansin RE-60a9010 and its front derailleur to FD-5000-SS11418.
- 1989 Peugeot (NL) VTT Express "Suntour XCM" front / rear: FD-XM34-GXH 11411 and RD-XM34-GXB 4795 (XCM 3040 in Edition No. 89). XM00 / XM02 (2665 / 4793) start in 1990.
- Miyata Omnium / 912 gearing and GMG shifters do not establish RD-6207 versus RD-6208. New Seven does not yet identify RD-1900. Generic Positron remains deliberately unlinked, including the 1983 Raleigh Silhouette.
- Leave unlinked (variant or era unclear): 1986 Miyata "SHIMANO New 600 EX" x2 (RD-6207 short / GS, or RD-6208 SIS); 1988 Colnago "Shimano Santé" x2 and 1988 Raleigh "Shimano Santé, SIS indexed" (RD-5000 and RD-5001 both cover 1988; existing call); 1984 Peugeot "Huret Duopar" x2 (4302 titanium standard cage, 4400 Eco or 8173 titanium long cage); 1982 Battaglin "Gipiemme Sprint 610"; 1989 Peugeot "Simplex SOI T/SP" x3 / "SOI GT/SP" / "501 GT/SP" / "T/SP" (maybe S001N T / S002 GT misprints); 1988 Peugeot "Simplex SX A430 GT/SP" x2 (no SX430; SX440 GT v3?); 1981 Raleigh "Sun Tour V.T." (VX-T 4773?); 1986 Falcon "Suntour MT Tech" (4712 / 7785 / 4711); 1986 Miyata "SUNTOUR New SEVEN" (RD-1900 ends 1985); 1981 Peugeot "Simplex SX"; 1986 Colnago "Shimano Deore"; 1978 Peugeot "Simplex Criterium", 1978 / 1989 "Shimano Positron", 1986 Raleigh "Suntour Cyclone" (existing nulls).

## Front Derailleurs

- Rival front review 2026-11-16: retain the existing links while seeking
  code/construction evidence. PXR 80 **16962** needs a triple/cage check:
  its 30/40/50 rings require 20T, while manufacturer sheets conflict on
  1086-00 (26T in 1981, 16T in 1983). Neither an automatic unlink nor a
  repoint to double 8961 is justified by that conflict alone. The other five
  1988 flagged fronts have 42/52 doubles. See the
  [Rival evidence review](../../ingest-component-catalog/references/known-catalogs/huret.md#rival-fronts-1086-00--av621d--2026-11-16-evidence-review).
- Sachs Huret audit 2026-11-16: retain the four Rider-double NULL guards
  (15470, 17763, 17782, 17858); AV 62.1 T 8962 is the triple configuration.
  The six 1988 Rival front links on 8488 remain identity reviews, not evidence
  to widen dates automatically; see the [brand audit](../../ingest-component-catalog/references/known-catalogs/huret.md#sachs-huret-brand-quality-audit--2026-11-16-read-only).
- Leave: bare "Simplex" (1979-89 Peugeot), other brand-only text, "None" / fixed gear and prose ("Huret or Simplex parallelogram", "Wide Ratio, indexed shift", "Shimano SIS indexed"): leave.
- Leave unlinked (variant or era unclear): 1981 Kalkhoff "Shimano 600" x3 (FD-6100 or FD-6200; existing null); 1981 Peugeot "Simplex SJA" x3 (SJ A102 / A103 / A222 / A223); 1986 Peugeot "Simplex SLJA 22" (SLJ A422 or A522); 1984 Raleigh "Suntour Cyclone II" and "Sun Tour Cyclone II GT Wide Ratio" (FD-2300 or FD-2400); 1986 Raleigh "Suntour Cyclone" (existing null); 1987 Raleigh "Suntour Mountech" and 1986 Falcon "Suntour MT Tech" (FD-2700 v1 / v2, both dated 1984-85); 1989 Bianchi "SunTour GPX" (GP00-SSB braze-on or -SSH clamp); 1986 Miyata "SUNTOUR Sprint" (FD-3900 Sprint starts 1987; would need a year_from move); 1974 Raleigh "Campagnolo Super Nuovo Record, 12 speed" (1052/SR 2313 starts 1975, early SR groups may have used the 1052/1); 1984 Peugeot "Campagnolo 1052/1" (2297 ends 1977; the 1984 clip-on is 2300); 1986 Falcon "Shimano 'Z'" x4 (Z202 / Z204 / Z206); 1988 Colnago "Shimano AL 11 SIS" (existing note: later indexed version, no row); 1986 Colnago "Shimano Deore" (DE10 or M700).
- SunTour a-3000 fronts (reviewed 2026-11-16): Sutherland's 6th ed., PDF pp.217–218, confirms FD-3000-SS / GT / GX. VeloBase identifies 2611 as GT and 2612 as GX; 2600 lacks a precise code, and its sole photo does not establish SS. 1987 Miyata Triton front 22519 stays NULL pending an SS specimen/drawing crosswalk to 2600. The DB's 1980 dates came from VeloBase's `1980's`, not a dated 1980 source; do not use those dates to infer a separate generation. See the [SunTour front review](../../ingest-component-catalog/references/known-catalogs/suntour.md#alpha-3000-front-identification--2026-11-16).
- Other SunTour: 2618 Vany, 2619 a-4050 undated (0 links); 2652 / 8268 Superbe Pro mounting (open item below).
- Huret: the 1986-88 plain "Huret Rival" fronts on 8488 Rival 1086-00 (1982-87; six 1988 links outside its dates) belong to the open 8961 / 8488 Rival question below, not a date widening; 1984 Raleigh "Huret ECO-S" fronts -> 8489 Club AS (the Eco S set's front, recorded); 2386 / 2377 undated VeloBase rows (0 links).
- Simplex: 2583 Prestige Criterium AV 223 unranged override (user decision 2026-10-28, simplex.md); Simplex Foret front (2, no row), "Simplex SJA" x3, "SLJA 22", SX 432 (recorded above).
- Campagnolo: 6 bare "Campagnolo" (1973-78 Falcon); 1974 Raleigh SNR and 1984 Peugeot 1052/1 (above); 1991 Colnago Topazio "Centaur 8V" (20048; only the Century grey row 2285 exists, standard-finish second-generation Centaur front is a source gap).

## Bottom Brackets

- Leave unlinked: 1973 Zeus Z 66 "Zeus Ciclo-Cross" (the "Ciclo-Cross" chainguard came on both the Criterium 2027 and the Gran Sport 2030 cranks, so the BB could be 188 Ref.33 or 190 Ref.34); 1981 Kalkhoff "Sakae 42/52" x3 / "Sakae 40/52" x2 (chainring text, no BB model).

## 1978 Motobecane US catalogue (loaded 2026-11-17)

- Hold SR SI5SD2 / AX5SD2 / SAX5RG2 unlinked: no exact AH/E or early5RG2
  crosswalk. Takagi TourneySP is not assumed plain Tourney9562; SRP3 is not
  assumed CT-P3. Lyotard36R/45A and OlympicRacing64 lack supported exact
  configurations; bare KKT stays text.
- Le Champion/Team Champion Maillard Atom700/Racing alloy clusters are
  five-speed in printed gear tables: never link **7233**, a single freewheel.
  Maillard/Maeda alternatives remain combined and NULL.
- Sprintour's plain Shimano600 does not establish6100 versus6200 Arabesque.
  UniglideGold chains lack a code; do not inherit1990 CN-UG30. CinelliRecordI
  stem lacks a code/logo crosswalk; Campagnolo alloy posts do not distinguish
  1044/4051. ItaliaCriterium skin leather does not distinguish buffalo/other
  leather versions; LeaderII lacks a row. PelletArc-En-Ciel needs an explicit
  maker crosswalk. Generic house parts stay text. See the Motobecane notes
  for source and approved/proposed status; these NULLs do not authorize inserts.

## Circa 1976 Motobecane catalogue (loaded 2026-11-17)

- Grand Record's `NORMANDY LUXE Competition` does not establish a gold/red
  label: hold NULL rather than extending gold-label 3388's dates from the
  family name. Team Champion's `REGINA ORO 13-21` does not establish six-speed
  2194; hold NULL pending speed/configuration evidence. These guards are scoped
  to 1976 and their respective bikes; older catalogue decisions remain intact.
- Preserve Grand Jubile's Huret Jubile / SunTour Cyclone GT rear and
  Stronglight 49D / SR AX5 crank alternatives without selecting one. Preserve
  Atom/Maeda freewheel and Union/Lyotard pedal alternatives likewise. Bare
  SR AX5 does not select AX-5LA / MA / RG / SD variants; Tourney / Tourney
  Luxe, Olympic pedals and Philippe Professional stems lack sufficient
  model/configuration evidence for a link. Generic/house parts, plain Sedis,
  unnumbered Super Champion/Weinmann rims and SR alloy posts remain text.
  These are intentional unresolved identifications, not component inserts.

## Headsets

- Reviewed2026-11-21:1988 MBK C757 Prolight **25428** and C354 Super Mirage
  **25554**, `Tioga sealed`, remain NULL. Original Tioga maker pages identify
  several sealed headset models/configurations; maker plus sealing does not
  select Master, Expert, Beartrap, MTB-I/II or an Avenger model. The applied
  component additions do not resolve these generic cells.
  [Configuration evidence and live validation](../../ingest-component-catalog/references/known-catalogs/tioga.md#19891991-component-reconciliation--2026-11-21-applied-and-validated).

- **Decided 2026-11-16, leave unlinked:** Tange "Unique X Loose-Proof" (1988 Raleigh Ozark II, 1989 Touriste) and "Unique FE" (1988 Raleigh Ritmo). 11346 Tange Unique is the bare model (Nashbar 1988). The 1989 Ozark / Chinook "Unique Loose-Proof" are linked to it, reading Loose-Proof as a feature. Generator `null` overrides.

- Brand-only text: "Stronglight" 7 (1985 Peugeot), bare "Tange" ~20, Bianchi "GPM, alloy", 1993 Bianchi "AheadSet" 3 / "Mavic headset": leave.

## 1981 Motobecane US (reviewed 2026-11-18)

- Source457, specification tables PDF pp.14–15. [Catalogue evidence and validation](known-catalogs/motobecane.md#1981-us--loaded-and-validated-2026-11-18).
- Interclub SunTour Perfect lacks a speed/model variant; suppress the accidental six-speed YE match2241. Weinmann610 plus Atom drum is compound rear equipment and stays unlinked; MAFAC cantilever front is supported separately. Prolight Simplex6000 lacks T/GT distinction. Grand Jubile's explicitly printed front SX410GT/SP is retained but names a rear code, so no front identity is inferred. Campagnolo1020 and Simplex6000 rear-only cells do not supply missing front model names.
- Grand Record Rigida13/20 lacks wheel size; do not infer700C9895 from the preceding year's catalogue. Shimano600EX brakes lack reach; GranSport cranks/brakes, Cinelli66 and SuperRecord post lack distinguishing versions. SuperGentlemen and ParisRoubaix tyre descriptions lack safe construction/version attribution. No guessed variant links.
- Retain unresolved printed SR/Nervar crank codes, Selecta-like equipment, Belleri2016 and Professionnel bars/stems, SRCustom/house stems/posts, unnumbered Vainqueur and731 brakes, S571/A256 rims, Shimano400/600/800 mixed hubs, unnumbered Normandy/Atom hubs, generic levers, black/Uniglide chains, uncoded freewheels, house saddles and tyres as faithful text. Existing candidates do not establish the exact printed identity/configuration; maker, broad model family or year alone does not settle these. The scoped NULLs prevent current speculative automatic hits; these decisions do not create new hunt tasks.

## 1982 Motobecane US (reviewed 2026-11-18)

- Source458; [catalogue evidence and validation](known-catalogs/motobecane.md#1982-us--loaded-and-validated-2026-11-18), specifications PDF pp.14–15, portraits pp.3–13.
- Preserve conflicting Grand Record SX610SP/Simplex6000 rear and Profil HuretAero/AdamasAX front/rear as unlinked text. Explicit NULLs prevent either half from silently winning. Randonnee and MirageSport uncoded Rival do not distinguish the recorded overlapping fronts/rears. GrandTouring DuoparEco remains NULL across4276/4400; Challenger front lacks the bracket/variant evidence, so suppress the wrong-era2388 automatic hit.
- GrandJubilee front SX610GT/SP and LeChampion front Record1020 explicitly reproduce rear-model codes printed for front/rear together; neither establishes a front variant. Prolight Simplex6000 and TeamChampion6600 do not distinguish T/GT rears or model-level fronts. NomadeII HonorGT lacks an established crosswalk to the unqualified Honor row. JubileeSport explicitly says SunTour BlackLine; do not assume BlueLine identities from BL alone. Generic braze-on/ratchet/stem shifter descriptions, UB10 spelling and generic drilled/safety brake levers remain text.
- ModuleE2 lacks polished/Argent finish evidence, so no choice between5089/5090. Black-anodized SSC is not the1986 base5114 row; no assumed Bleu/Argent version. Unspecified SuperGentleman construction does not justify8974 with its limited1977 attestation. Michelin BIB25/BIBSport text lacks an exact model/configuration crosswalk. Unspecified CampagnoloRecord and Maillard700Professional hubs lack flange evidence; CampagnoloRecord pedals lack1037/1037A identity. OfmegaCX hub is not silently mapped to the1985 sealed-bearing row. AdamasAX crank has contemporary variants; no inferred code. Compound tandem rear brake remains one unlinked value. CTP5 without explicit Laprade naming, SimplexFlx post, Turbo saddle, Belleri/Philippe/house bars/stems, unnumbered DiaCompe/Vainqueur/501 brakes, SR/Nervar1020 crank codes and unnumbered clusters remain faithful text without guessed variants. No automatic new hunt tasks arise from these decisions.

## 1983 Motobecane US Volume 2 (reviewed 2026-11-18)

- Source459; [catalogue evidence and validation](known-catalogs/motobecane.md#1983-us-volume-2--loaded-and-validated-2026-11-18), specification tables PDF pp.14–15 and portraits pp.3–13.
- GrandRecord SX610SP/Simplex6000 rear conflict and Mirage SN5DX/Shimano-marked crank photo stay in source text with scoped NULLs. MirageSport uncoded HuretRival System front/rear, GrandTouring Challenger front and DuoparEco rear lack distinguishing variant evidence; suppress the wrong-era2388 Challenger automatic hit. GrandJubilee front SX610GT/SP and LeChampion front Record1020 repeat rear codes printed for both positions and do not establish a front model. Prolight6000 and TeamChampion6600 lack T/GT or front-version evidence. Explicit1983 SunTourBlueLine is supported separately; no1982BlackLine assumption carried over.
- Keep unknown finish/variant cases unlinked: ModuleE2 polished versus Argent; black SSC versus the wrong-era1986base; SuperGentleman construction; BIB25/BIBSport tyre crosswalks; CampagnoloRecord/Maillard700Professional hub flange; Record1037/1037A pedals; OfmegaCX hub versus1985sealed-bearing row; CTP5 without explicitLaprade, Simplex post, Turbo/Profil and house saddles, Belleri/Philippe/house bars/stems,501/731/Vainqueur/house Weinmann brakes and generic levers. Uncoded Maillard clusters, Solida/Nervar1020/SR crank details and generic rim descriptions do not select precise rows. Tandem rear610plusAtom drum remains compound text. These deliberate decisions do not create new source-hunt tasks.

## 1985 Motobecane general catalogue (reviewed 2026-11-18)

- Source460, marketunconfirmed; [catalogue evidence and validation](known-catalogs/motobecane.md#1985-six-page-general-catalogue--loaded-and-validated-2026-11-18), tablep.6 and portraitspp.2–5.
- Mirage's uncoded HuretRival system does not resolve overlapping front/rear variants. GrandRecord Campagnolo shift levers lack mount/code, despite the explicit Triomphe group, so remainNULL. Lower-model generic stem shifters, dual-control levers, unnumbered Weinmann sidepulls, chrome rat-trap pedals, house bars/headsets/saddles/posts and unnamed tyre/rim families remain text. GrandRecord forged-alloy levers are linked233 using its explicitly fullTriomphe brake/group evidence, not lever material alone.
- Nomade ThunBetaII has no suitable named DB row; do not substitute AeroChampioni/Coronado/Revolution. LeVelo Solida-by-Stronglight **steel cotterless** does not identify a generic Solida construction variant. MaillardCompact13–22 lacks a coded freewheel model; unnumbered Maillard5/6speed clusters likewise remain unlinked. Mirage Atom/Maillard sealed small-flange and other generic hubs do not identify a precise model. MichelinHiRise text does not identify a safe model row; generic Michelin/Hutchinson tyres and unnumbered Weinmann/Rigida rim variants stay text. These decisions do not create new hunt tasks without a concrete new evidence lead.
- GrandRecord WolberArc-en-Ciel345g/700C uses the existing manufacturer-backed SuperChampion crosswalk5180; WolberCorsa265g matches contemporary Corsa806911, not270gTeamCorsa. MirageRigida15/21 explicitly identifiesAL15215154. Cosmosalloy9204 is the existing1985generic alloy row, not the later named Super. Keep source marketNULL until catalogue-specific distribution evidence supports an edition country; archive metadata alone was not used.

## Sedisport / Delta terminology review — 2026-11-20

[Period packaging and technical evidence](../../ingest-component-catalog/references/known-catalogs/sedis.md#sedisport--delta-treatment--period-evidence-2026-11-20)
supersede earlier rationales distinguishing ordinary Sedisport 8765 from 1402
solely by explicit Delta treatment. Delta is a shared pin treatment, so it also
does not identify Sedisport from maker-only values. The scoped review is now
[applied and validated](../../ingest-component-catalog/references/known-catalogs/sedis.md#sedisport-duplicate-and-fitment-reconciliation--2026-11-21-applied-and-validated):
1402 merged into8765, named links consolidated, and four treatment-only Peugeot
links cleared. Preserve independently established Pro/code/construction differences.

## Motobecane France Course-Training c.1984–85 (reviewed 2026-11-18)

- Source461, FR; [evidence and validation](known-catalogs/motobecane.md#france-course-training-c-198485--loaded-and-validated-2026-11-18). Provisional database year1985 is an index only; no exact publication year or component-date move established from this undated source.
- Unqualified StronglightA9 cannot distinguish France/Spidel locknuts over the approximate interval; Simplex6600aero front/rear and SLJpost lack generations, C551SR610-SP is not silently rewrittenSX610T/GT, HuretRival lacks distinguishing versions, Driver has no suitable named model/crosswalk, and TT21Challenger/Duopar lack construction/cage evidence. Generic CourseDural must not map to Philippe354; MavicSSC must not map to the1986base row. ExplicitNULLs preserve these calls.
- Keep generic stem/lever/bar/brake/pedal/saddle/post descriptions and unnumbered Maillard/Atom/Helico/SH clusters plain text. MaillardSH does not choose600SH versus700SH; Helicosport5speed is not a six-speed cluster. ShimanoAdamas and ThunBetaIISpécial lack exact DB variants; TAProfessionnel tandem wording does not choose a crank layout. Corsa/ClémentCriterium tyre families lack exact construction; generic Record and alloy/chrome rims lack model evidence. Source oddities TT21duplicatedAR rim prefixes and CT2/CTM2literal650½B remain intact. These accepted unresolved values do not automatically create new hunt tasks.
- Named exact links use period-existing identities: Nervar2010/2011/2023/3020, Stronglight103/107double, SJA222braze-on, LapradeCTP5 versusCTP5E, codeSR100BL, MaillardRA500, explicit1320with700C tyres and named Helicosport. NKnickel Sedisport remains8765 without inferred Delta treatment. The double/triple107 and CT-P5/CT-P5E differences do not support merges.

### c.1987 Pinarello ingestion — applied 2026-11-20

Tre Cime Victory front2318 ends1986; no date extension. Bare Syncro cannot
distinguish8812/5973/5971; suppress automatic Syncro II5971. Prologo TTT aero
bars lack version evidence; suppress2745 (only1982 attestation).105 brakes
lack reach, posts unidentified;600 crank/lever/post versions unspecified.
Ofmega/TTT/Nisi/Vittoria maker-only values stay text. These NULL decisions
create no new source-hunt tasks. See [validated catalogue notes](known-catalogs/pinarello.md#circa-1987-gita-catalogue--applied-and-validated-2026-11-20).

### 1989 Motobecane EC185 Mirage 8 ingestion — applied 2026-11-20

Sakae CAC single50T does not select the complete crank code; loaded CAC variants
are1982-only. Huret-Rival SDS8/8 rear and handlebar indexed lever lack a unique
code/generation crosswalk. Rigida13/20 700C candidate9895 ends1987; no date
extension inferred. Generic Atom hubs, saddle, alloy post/stem, bars/headset,
touring levers and uncoded13–32T cluster remain text. These deliberate unlinked
values do not create source-hunt tasks. See [validated catalogue evidence](known-catalogs/motobecane.md#1989-programm-89-mirage-8-sheet--applied-and-validated-2026-11-20).

### c.1990 Pinarello ingestion — applied 2026-11-20

C-Record group-only seatposts cannot distinguish130mm5737 from long5738;
scoped Montello Record/Noir NULLs. Noir title does not identify Century parts.
Athena levers retain standard211/Compact7026 ambiguity. Ultegra7V supports
6400-series FD/RD/brakes, but not crank/lever/pedal/post configuration.1057V
cannot select1051 versus105SC1055 generation; no date expansion or seven-speed
code inference. NisiLaser lacks eyelet/configuration evidence;5136 ends1988,
5137 undated.3TRecord lacks bend/version; generic Italia/Vittoria/Regina/ACI
and alternative maker values stay text. No automatic hunt tasks arise.
See [validated catalogue evidence](known-catalogs/pinarello.md#circa-1990-catalogue--applied-and-validated-2026-11-20).

### MBK Course c.1991 ingestion — applied 2026-11-20

3tttCriterium stems6425 end1980: scoped NULLs for C387/C477/C977. Sachs2500
front/rear and genericTourney lack exact fitment codes; rear4405 has unspecified
dates/configuration and is not assumed to cover double/triple alike. SunTourRT
loaded generation is1992-only; no date expansion from an attributedc.1991 source.
1055 brakes lack reach;300EX pedals lack a unique loaded identity; Croce pedals
have several clip configurations. RigidaSHC500, Rush rims, generic tyres/hubs,
NewCarrera/Turbo/TurbogelAstral saddles, SR crank and alloy parts lack sufficient
model/configuration evidence. Uncoded clusters remain under literal Freewheel
header with NULL links; Shimano freehub matching does not establish a cassette
code. No speculative component creation or date edits. See [validated catalogue evidence](known-catalogs/motobecane.md#mbk-course-c1991--applied-and-validated-2026-11-20).
