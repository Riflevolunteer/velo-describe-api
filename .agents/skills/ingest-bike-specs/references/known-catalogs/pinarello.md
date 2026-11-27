# Pinarello catalogue sources

## Circa-1990 catalogue — applied and validated, 2026-11-20

Applied after user approval: source **497**, bikes **1508–1516**,
140 specs and 49 component links. Maintained source:
`bike_specs/sources/pinarello_1990/pinarello-c1990-17pages.pdf`, the fuller
[17-page copy](https://www.bikecatalogs.com/download/5849) verified in the
source-comparison section below. CSV: `bike_specs/1990_pinarello_spec.csv`.
Applied SQL removed after validation.
Edition label `Pinarello catalogue (c.1990)` preserves archive-attributed dating;
no new printed date established, and market remains NULL. Existing dating TODO
is not a blocker to explicitly qualified ingestion. Live preflight found no
1990 Pinarello bikes or matching source.

Nine complete road bikes, PDF positions 4–12, visually transcribed in three
batches with original-language values and English CSV text:

- p.4 Montello Record Noir; p.5 Montello Record; p.6 Montello Croce d'Aune.
- p.7 Treviso Croce d'Aune; p.8 Treviso Chorus; p.9 Asolo Prologo Chorus
  (one printed model, not separate Asolo and Prologo builds).
- p.10 Asolo Athena; p.11 Asolo Ultegra; p.12 Veneto 105 7V.

Exclude frameset panels14/16 and non-spec pages1–3/13/15/17. Printed sizes
retained: Montello/Treviso50–65cm in1cm increments with literal c/f convention;
Asolo Prologo50–62cm in2cm increments; other Asolo50–60cm by1cm then60–66cm
by2cm; Veneto50–64cm by2cm. No colours, weights or photo-derived components.
Veneto states three Aelle tubes, not an all-Aelle frame. Group expansion uses
seven established categories, no inferred hubs/headsets/shifters. Printed group
wording retained in Extras. Chain/freewheel Regina applies to seven Campagnolo
builds only; neither Shimano panel prints that line. Preserve alternative maker
values for bars/rims. Vittoria tubular construction is explicit in Italian and
French; Italia saddle wording remains maker-only. No inferred Turbo model.

Loaded nine bikes, 16 existing labels, 140 specs, 49 validated links:

- Montello C-Record FD2283/RD4133/crank1482/brakes560/levers214; Noir's explicit
  SGR pedals3694, ordinary Record's group pedals3693. R010 rear selection
  follows existing c.1990 group mappings; dating is qualified, not independent
  introduction proof. C-Record post length is unspecified (5737/5738), held NULL.
  Noir is the bike name, not evidence for Century group components.
- Croce d'Aune: FD2288/RD4112/crank1489/post5742/brakes567/levers223/pedals3703.
- Chorus: FD2286/RD4108/crank1487/post5742/brakes565/levers220/pedals3700.
  Standard short-cage road and plain-finish rules follow existing group mappings;
  no inferred graphite/RS variants. Base Chorus FD2286 covers standard braze-on
  and clip-on options, unlike the distinct adjustable-clamp variant2287.
- Athena: FD2281/RD4092/crank1479/post5736/brakes558/pedals3690; lever remains
  NULL because the broad group does not distinguish standard211 from Compact7026.
- Ultegra7V: FD2478/RD4466/brakes966 (6400-series); other group parts have
  multiple configurations and remain NULL. 1057V does not resolve 1051 versus
  105SC1055 generation; all seven component links remain NULL.

Other unlinked calls: Nisi Laser lacks eyelet/configuration evidence (5136 ends
1988;5137 undated); 3T Record lacks exact bend/version. Generic makers, Vittoria
tubulars, Regina chain/freewheel and ACI spokes do not identify model rows.
No component insertion, date change or merge performed. See link-decisions.md.

Validation: nine unique titles, maximum CSV field length88, generator syntax and
all49 summary links reviewed by category/date; all within recorded dates.
All16 labels exist. Full before/after comparison over24,147 loaded specs has
identical summary/findings (15 pre-existing lost proposals); only timestamps
and the new unloaded CSV entry differ. Root bike-update.sql restored. Original
PDF and normalized CSV retained; disposable renders/transcriptions/scripts/
comparison files removed. Applied readback confirmed source 497 on every
bike/spec, NULL country, correct model identities and expected spec/link totals:
Montello Record Noir16/6, Montello Record16/6, Montello Croce d'Aune16/7,
Treviso Croce d'Aune16/7, Treviso Chorus16/7, Asolo Prologo Chorus16/7,
Asolo Athena16/6, Asolo Ultegra14/3, Veneto1057V14/0. No duplicate bikes/specs,
dangling links or linked date conflicts. All 140 generator/live mappings
unchanged, zero missing or ambiguous identities. All 381 SQL statements reran
with zero rows affected. Existing brand and all labels reused, no label-order
changes. Applied SQL and validation output removed after verification.

## Circa-1987 GITA catalogue — applied and validated, 2026-11-20

Source: https://bikalog.org/api/view/Pinarello/1987/pinarello-1987.pdf,
retained at `bike_specs/sources/pinarello_1987/pinarello-1987.pdf` (six pages).
CSV: `bike_specs/1987_pinarello_spec.csv`. Applied after user approval:
source **495**, seven bikes **1500–1506**, 66 specs and 26 component links.
Prior live baseline had only 1979/1982/1985 Pinarellos loaded.
Year c.1987 follows archive attribution; no printed year established.
US edition: p.6 US bulk postage permit and GITA Charlotte address.

Seven complete bikes: Prologo/Tre Cime p.2, Dolomite/Piccolo p.3,
Asolo/Pista Amatore p.4, Veneto p.6. Cover supplies Prologo Italian ice colour.
Piccolo explicitly serves shorter riders: adult road scope. Exclude p.5
Montello/Treviso/Cadore/Bassano frame offerings without defined complete builds.
Road groups expand into seven established categories; track only crank/post/pedals.
Veneto uses Ofmega except105SIS derailleurs/shifting. Asolo's supporting makers
remain in Extras without inferred categories. Cadore Matrix tubing established
p.2 applies to its named derivatives. No inferred sizes/weights/headsets/hubs.

Loaded seven bikes, 14 existing labels, 66 specs, 26 links. Validated 105 links:
FD2462/RD4449 four bikes; FC1778/BL406/PD3953 Prologo/Dolomite/Piccolo;
Veneto SL6130. Asolo FD2481/RD4471. Tre Cime RD4169 (existing1987 S3 rule),
FC1516/post5764/brakes590/levers235/pedals3720. All within DB component dates.
Initial holds: the Victory front was held on its pre-review dates. Bare Syncro cannot distinguish8812/5973/5971;
TTT aero bars do not establish2745 (only1982 attestation);105 brakes lack49/57
reach and post unidentified;600 crank/lever/post variants unspecified; Ofmega,
TTT,Nisi,Vittoria maker-only. No component insertion/date change/merge proposed.

Generator syntax/SQL summary reviewed. Before/after full comparison of24061 loaded
specs has identical summaries/findings (15 pre-existing lost mappings); only
timestamps and new unloaded CSV entry differ. Original root bike-update.sql restored.
Post-load comparison: all 66 specs unchanged, zero missing/ambiguous identities.
Readback verified source 495 and US country throughout, no duplicate specs,
dangling links or date conflicts. All seven model identities match the CSV.
Per-model specs/links: Prologo 10/5, Tre Cime 14/6, Dolomite 9/5, Piccolo 9/5,
Asolo 9/2, Pista Amatore 5/0, Veneto 10/3. All 203 SQL statements reran with
zero rows affected. Existing brand and labels reused; no component rows changed.
Applied SQL and disposable validation files removed; original PDF/CSV retained.

The subsequent Victory review visually confirmed the Tre Cime front on PDF
p. 2 and Campagnolo's February 1987 brochure attested the component for the
same period. Spec 26070 now links to 2318 using the existing Victory rule.
[Component evidence and validation](../../../ingest-component-catalog/references/known-catalogs/campagnolo.md#victory-front-availability-and-tre-cime-fitment--2026-11-22)

## 1985 GITA catalogue — applied and validated, 2026-11-20

Source: [Bikalog PDF](https://bikalog.org/api/view/Pinarello/1985/pinarello-1985.pdf),
23 pages, retained at `bike_specs/sources/pinarello_1985/pinarello-1985.pdf`.
Normalized CSV: `bike_specs/1985_pinarello_spec.csv`. Applied after user approval:
source **493**, seven bikes **1493–1499**, 114 specs and 56 component links.
Prior baseline had only the 1979/1982 Pinarello catalogues, no 1985 bikes.
Existing brand and all 18 labels reused. Applied SQL removed after validation.
Country NULL:
PDF p.23 prints GITA Sporting Goods / North American Agent, establishing the
regional edition but not a specific US/Canada market. Text explicitly says
new for 1985 (pp.7/13), and the 1985 Triathalon Victory (p.15).

Visually transcribed specification panels: Pista Amatore (PDF p.3), Catena
Lusso (p.5), Montello 85 SLX (p.7), Super Record Special (p.9), Treviso N.R.
(p.11), Treviso Victory (p.13), Triathalon Victory (p.15; printed spelling).
All seven are in scope: track plus six road/triathlon bicycles. Exclude
Frame Record, Frame Treviso and Frame Montello 85 SLX (pp.17/19/21): framesets
without complete-bike equipment. Even pp.2–20 are model/frame portraits;
p.1 is the cover, p.22 champion photos, p.23 GITA back cover. No weights
printed. Preserve stated sizes, paint names and model spelling, including
Legal yellow and Midnight blue - Bordeaux; do not invent colour allocations.

Road groups expanded into FD/RD/crank/post/brakes/levers/pedals using the
established seven-label approach. Printed group wording/finish retained in
Extras. Track group expands only to crank/post/pedals, all unresolved: do not
invent fitted derailleurs or brakes from the drilled fork. No inferred hubs
or headset specs. Montello's Super Record 4000F **or Record** offering stays
an alternative in every derived spec, with explicit NULL links. Catena Lusso
and Triathalon Victory retain their tubular/clincher rim alternatives.

Reviewed and validated links (all compatible with DB categories/dates):

- Super Record Special group: FD2313, RD4152, crank1509, post5761,
  levers231, pedals3716; brakes 25996 remain NULL pending review of the group wording after the reach-family merge.
- Triomphe (Catena Lusso): FD2314, RD4155, crank1515, post5764, brakes585,
  levers233, pedals3719. Victory (Treviso/Triathalon): FD2318, RD4168,
  crank1516, post5764, brakes590, levers235, pedals3720.
- Treviso N.R.: FD2300, RD4127, post5749, crank1496 with explicitly printed
  Super Record chainrings; explicit SL pedals map to Record SL3709, not
  titanium Super Record3716. Brakes NULL without reach, levers NULL because
  the period Nuovo Record candidate226 ends1984; do not extend dates here.
- Stems: Cinelli I-R Pantograph →6491 (1R), TTT Mod.84 Pantograph →6424,
  TTT Record/Pantograph →6404; punctuation and TTT→3ttt lookup keys checked.
- Rims: Mavic GP-4 →5069 (two); Pista's Monthlery pro →5092. Turbo →5508
  (three). Clement Crit. Seta →6748. Vittoria Nuovo Pro →6893 (three),
  consistent with Guida1985 detail already on that row and earlier reviewed
  Nuovo Pro naming decisions. Regina CX/CXS chains →1384, CX6 freewheel
  →2169, explicit Oro6 freewheels →2194 (four).

Blocked automatic guesses: Gipiemme pedal3751 ends1982 (no modern track model
code given); Vittoria Sport PE6901 is1987; generic Ambrosio Montreal does not
establish Nuovo Montreal Crono9175; plain Regina Oro does not identify BX1380
rather than standard Oro1382. Those plus bare Oro chain remain NULL. Pista
crank/post, generic bars/Concor saddles, Campagnolo Record Strada rim, spokes,
rim alternatives and CXS7 freewheel remain text. Clement Crit. cotton remains
NULL: named cotton candidate8972 ends1984; no component dates changed. These
are recorded evidence decisions, not automatic source-hunt tasks.

Validation before application: seven unique model titles, values at most 165
characters; generator syntax and all 56 SQL-summary links reviewed. Full
before/after comparison of 23,947 loaded specs found identical scope/summary/
findings, including 15 pre-existing lost mappings; only timestamps and the
new unloaded CSV's skipped-file entry differ. No other catalogue mappings
changed. Root `bike-update.sql` restored. Original PDF/CSV retained; disposable
OCR/renders/transcriptions/comparison output removed. Post-load readback
confirmed correct source 493 on every bike/spec, NULL country, no duplicate
bikes/specs, dangling component links or date conflicts. Per-model specs/links:
Pista Amatore 12/3, Catena Lusso 17/9, Montello 85 SLX 17/4, Super Record
Special 17/11, Treviso N.R. 17/10, Treviso Victory 17/10, Triathalon Victory
17/9. All 114 generator/live-DB mappings unchanged, zero missing/ambiguous
identities. All 336 SQL statements reran with zero rows affected. Applied SQL
removed; original PDF and expanded CSV retained.

## Circa-1982 ingestion — applied and validated, 2026-11-20

Source: [Bulgier's Pinarello82 scan set](http://bulgier.net/pics/bike/Catalogs/Pinarello82/),
all eight original images retained at `bike_specs/sources/pinarello_1982/`.
CSV: `bike_specs/1982_pinarello_spec.csv`. Applied after user approval:
catalogue source **492**, five bikes **1488–1492**, 73 specs and 29 links.
Prior live baseline had only the five 1979 Pinarello bikes/source 491;
no 1982 bikes or source record. Applied SQL removed after validation.

Complete-set visual review: pages 1/8 celebrate Battaglin's 1981 Giro/Vuelta
victories, page 7 is clothing. Pages 2–6 supply five complete road-racing models:
Prestige S, Tre Cime, Super Record Special, Treviso and Italia, respectively.
All five are in scope; no framesets or city/children's bikes excluded. This
confirms a specification-bearing brochure as well as victory covers. It does
not establish a printed 1982 date: use c.1982 following the folder attribution,
with post-1981-victory content as a date bound. The multilingual text and Treviso
maker address do not establish the sales market; country remains NULL. No
sizes, weights or colours inferred. Treviso/Italia have no tyre spec line.

Groups expanded directly into Front Derailleur, Rear Derailleur, Crankset,
Seatpost, Brakes, Brake Levers and Pedals using the agreed seven-category
approach; no generic group spec, inferred headset or hubs. All original group
qualifiers are retained on derived specs. Treviso's separately printed
`Cambio: Record` overrides the group rear and is normalized to Campagnolo Record.
Italia's group is Gran Sport but says only Campagnolo brakes: Brakes and Brake
Levers remain maker-only, rather than assigning a Gran Sport brake model.
Tre Cime's `Super Record x 3` is preserved; its drivetrain was initially held
NULL. The front was subsequently linked from photographic evidence below.

Loaded one source, five bikes, 73 specs, 29 component links;
existing brand and all 15 labels reused. Source label follows generator
convention `1982 Pinarello catalogue`, citation `1982_pinarello_spec.csv`.
Validated component mappings:

- Prestige S: FD 2313, crank 1509, post 5761, levers 231 (formerly 232), pedals 3716, chain
  1384, rims 5069. Titanio qualifies the group, not every component's material.
- Tre Cime: post 5761, levers 231 (formerly 232), pedals 3716, chain 1384, rims 5069.
- Super Record Special: FD 2313, crank 1509, post 5761, levers 231 (formerly 232), pedals
  3716, chain 1384.
- Treviso: FD 2276, explicit Record RD 4126, post 5734, levers 209, pedals
  3688, chain 1382. Year-based RD variant follows existing period mappings;
  c.1982 date attribution remains a provenance caveat.
- Italia: FD 2276, RD 4085, post 5734, pedals 3688, chain 1382.

Held NULL: ambiguous Super Record rear variants; triple FD/RD/crank; brake
reach/generation not given; Gran Sport crank BCD/configuration not given;
Regina CX/CX Oro/Oro freewheels without speed/variant (CX candidates 2168/2169);
alternative Clement/Vittoria tyres; generic Concor, S. Marco, Super Leggera,
Cinelli Special, 3T, Mavic/Legger Special and ACI spokes. No component insert,
date change or merge performed. Named CX chain maps to combined CX/CX-S 1384;
Oro chain to 1382, without carrying that identification across to freewheels.

Validation: all 29 links reviewed by category/title/date, five unique CSV
models, values under 255 chars, generator syntax and SQL summary pass. Full
before/after comparison of 23,874 existing specs shows identical scope, summary
and findings (15 pre-existing lost mappings); only timestamps and the newly
skipped unloaded CSV differ. No existing catalogue mapping changes. Root
`bike-update.sql` restored. Post-load readback confirmed source 492 throughout,
NULL country, no generic group specs, duplicate bikes/specs, dangling component
links or date conflicts. Per-model specs/links: Prestige S 15/7, Tre Cime 15/5,
Super Record Special 15/6, Treviso 14/6, Italia 14/5. Scoped generator/live-DB
comparison found all 73 specs unchanged, no missing/ambiguous identities.
Rerunning all 217 SQL statements affected zero rows. Scratch SQL removed;
maintained source images and CSV retained.

## Tre Cime photo/link follow-up — 2026-11-20, applied and validated

Initial live inventory: bike **1489**, source **492**, already links seatpost
25891→5761, brake levers 25893→231 (formerly 232), pedals 25894→3716, chain 25895→1384 and
rims 25900→5069. Re-inspected maintained original
`bike_specs/sources/pinarello_1982/3.jpg` and a drivetrain crop; the printed
group is `Campagnolo Super Record x 3`, and the photograph visibly confirms
three chainrings. It does not print individual drivetrain part codes.

**One supported additional match, user-approved and applied:** front spec
**25888**, NULL→**2313**, 1052/SR / 0104010 clamp-on. The black linkage,
three-hole cage and clamp mounting in the maker photograph agree with the
[retained 2313 specimen](https://velobase.com/Pages/ViewComponent.aspx?ID=B9DFF029-24A0-4A95-9CA0-7011828BD924).
This is a photo/group-based identification, not a code printed by Pinarello.
The triple qualifier alone does not require an otherwise unidentified separate
triple front model. This supersedes the blanket x3 hold as the evidence decision
for the front only. The live link and exact bike/year generator rule now agree.
No component metadata/date changes or extra inferred bike specifications.

The other current holds remain:

- **Rear 25889:** comparison with original Rally specimens 4080/4082/4083 did
  not establish a unique construction/generation from the small bike image.
  Do not infer a Rally solely from the triple chainset or assign a Super Record
  rear version solely from the group heading.
- **Crank 25890:** a triple is certain; the precise crank/inner-ring attachment
  is not. Existing 1498 is described as 144+100mm, while 7003 is the fixed 36T
  1049/5. The [1982 maker chainwheel table](https://www.campyonly.com/history/catalogs/1982_olympic_catalog.pdf)
  distinguishes 1049/3 (42T low) from 1049/5 (36T low, special RH arm), so the
  earlier notes' association of 1498 with 1049/3 needs reconciliation before
  choosing that row. The [1498 specimen](https://velobase.com/Pages/ViewComponent.aspx?ID=5E4BE2A4-2F98-4B0D-8330-4D4834BB9518)
  and generic x3 name do not justify a new Super Record triple component.
- **Brakes 25892:** remains NULL pending review of the x3 group wording after
  the reach-family merge; 582 covers both reaches. **Freewheel 25896:** speed/variant/lockring
  detail insufficient to choose 2168 versus 2169. **Saddle 25898:** Concor shape
  and red cover do not establish the construction among 5544/5547 and other
  Concor variants. **Bars 25899:** `Cinelli Special` gives no unique bend code.
  **Tyres 25897:** explicit Clement-or-Vittoria alternative. **Spokes 25901:**
  no identified model row. These are evidence limits, not new source-hunt tasks.

The guarded SQL changed exactly one row; the identical rerun changed zero.
Exact readback verifies spec 25888 now links to 2313, retaining bike 1489,
label 16, source 492 and original `Campagnolo Super Record x 3` wording.
All other Tre Cime specs and links match the prior inventory, yielding six
linked specs. Only its exact 1982 Front Derailleurs generator rule changed;
no CSV or component metadata changes. Restore by setting spec 25888 to NULL
with guards on these identity fields/current link, and reverting that rule.

The pre-application in-memory comparison across 24,061 loaded specs gained
only 25888. After application, the actual full generator/live comparison
exactly preserves the baseline summary and finding set (15 pre-existing lost
proposals, no changed/gained/missing/ambiguous identities). Whole-DB integrity
has zero errors and the exact same review findings as before. All 14 test files
pass. Temporary SQL, proposal patch/script, comparison downloads/crop and
before/after validation files were removed; maintained source images remain.

## Groupset expansion — applied and validated, 2026-11-20

User identified the Colnago/Cinelli precedent missed in the initial ingestion.
This supersedes the initial choice below to retain a single generic group row.
The CSV now expands each printed group into Front Derailleur, Rear Derailleur,
Crankset, Seatpost, Brakes, Brake Levers and Pedals, following 1979 Colnago /
1986 Cinelli. No inferred headset or hub specs. Record Special retains the
original mixed-group wording for six parts and explicit Super Record for brakes;
all seven stay unlinked because the upgraded details/reach are unspecified.

Applied after user approval. Converted generic rows 25799/25808/25817/25825/25834 in place
to Rear Derailleur, preserving IDs, text, source 491 and original raw_label.
The guarded generator SQL inserted 29 other specs and backfilled supported
links. Validated final scope: unchanged five bikes, 74 specs, 28 links (21 new).
No generic group specs remain; no bike/component/source rows are deleted.
All 15 labels already existed. This replaces the initial 45-spec/seven-link load.

New group links, by category (existing seven chain/tyre links unchanged):

- Prestige / Super Record: FD 2313, crank 1509, seatpost 5759, levers 231 (formerly 232),
  pedals 3716. Rear group remains NULL: 4148 and 4151 overlap circa 1979.
  Brakes 25846/25864 now link to 582, the early 4061/4061/1 family; reach remains unspecified.
- Record: FD 2299, RD 4125, crank 1496, seatpost 5749, levers 226,
  pedals 3708, using the existing period Record mappings. Brakes remain NULL;
  the reach variants were merged into 572 in 2026-11-27, but the estimated
  catalogue date and generation identification still need review.
- Treviso: FD 2276, RD 4085, seatpost 5734, levers 209, pedals 3688.
  Gran Sport brakes have multiple generations; crank candidates 1472/1474/1475
  differ in BCD/configuration and start in 1980. Neither is inferred here.

Review caught and blocked an automatic 1994 Record lever (229) from the mixed
group phrase. Explicit NULL guards protect all six mixed-group categories.
All 28 proposed links were checked against DB titles, category and dates.
Generator syntax passes; full loaded-catalogue comparisons before/after the
override changes are identical apart from timestamps: no other catalogue
mapping changes. Post-load CSV/live comparison: all 74 specs unchanged, zero
missing/ambiguous identities. Readback confirmed correct source 491 throughout,
no generic group specs, no duplicate specs, no dangling links or date conflicts.
Per model specs/links: Prestige 15/6, Record 15/8, Treviso 14/5, Super Record
15/7, Record Special 15/2. All 219 SQL statements reran with zero rows affected.
Root `bike-update.sql` was restored; applied SQL and CSV backup were removed
after validation. Maintained original scans and expanded CSV remain.

## Circa-1979 ingestion — applied and validated, 2026-11-20

Original seven Bulgier scans retained at `bike_specs/sources/pinarello_1979/`
(gitignored); normalized CSV: `bike_specs/1979_pinarello_spec.csv`.
User approved application. Loaded one brand, catalogue source **491**, five
bikes **1483–1487** and 45 specs with seven component links. All ten spec labels
already existed. The prior live baseline had no Pinarello bikes/source.
Country stays NULL; year 1979 is
approximate, following the archive attribution rather than a printed date.

All five model panels were visually transcribed: Prestige (`1.jpg`), Record
(`2.jpeg`), Treviso (`3.jpeg`), Super Record (`4.jpeg`), Record Special (`5.jpeg`).
All are complete drop-bar derailleur road racing bicycles. Cover is illustration;
`6.jpeg` supplies 13 numbered swatches without colour names/model allocation.
No sizes, weights or model-specific colours were inferred. Treviso's printed
tyre line is blank, creating no spec. No models excluded.

Initial-load labels: Frame Material, Groupset / Components, Chain, Freewheel,
Tyres, Saddle, Handlebars, Rims, Spokes and Brakes. Catalogue filenames are in
the ignored Catalog Page CSV column. Group descriptions were initially retained whole;
this treatment is superseded by the applied expansion above. In
particular Record Special says Record with Super Record brakes and unspecified
Super Record details; only its explicit brakes get a separate spec.

Reviewed proposed links: Regina Extra Record → chain 1381 (Record and Record
Special); Regina Extra Record S → 8334 (Super Record); Regina Extra Titanio →
1391 (Prestige); Clement Criterium → 6745 (Record and Record Special); Clement
Criterium seta → 6748 (Super Record). All seven are within component date ranges.
New chain overrides are limited to 1979. No component rows or dates changed.

Refused automatic links: makerless Super Leggera saddle matched Iscaselle
5375, so a generic NULL guard prevents that false identity. Record Special
Super Record brakes 25842 now link to the 582 family after 7005 was merged;
the catalogue does not specify reach.
Remaining broad/ambiguous descriptions stay literal text: Cinelli saddles,
Cinelli Special bars, 3T bars, Mavic rims, Regina Extra chain and freewheels.
Mavic OR does not distinguish OR7/OR10; Legger Special and Servizio Corse are
not silently equated to another Mavic model. Prestige explicitly says Regina
Extra Tital 7 rap.; preserve that wording and do not link five/six-speed
titanium rows 2202/8337. Campionissimo alone does not distinguish the tyre
variants. These are evidence decisions, not separate source-hunt tasks.

Validation before load: generator syntax check and full SQL summary reviewed;
45 values fit the schema limits. Before/after comparison across loaded
catalogues checked 23,800 specs with identical reports apart from timestamps
(15 pre-existing lost mappings; zero new changes from this work). No existing
links modified. The pre-existing root `bike-update.sql` was restored after
generation. After application, readback confirmed each model and its expected
spec/link counts (Prestige 9/1, Record 9/2, Treviso 8/0, Super Record 9/2,
Record Special 10/2), source 491 on every bike/spec, and no duplicate bikes or
specs. All seven live links have the expected category and compatible dates;
no dangling component links. Rerunning all 129 SQL statements affected zero
rows. Scoped generator/live-DB comparison: all 45 specs unchanged, no missing
or ambiguous identities. Applied SQL was removed after validation; original
scans and CSV remain.

## Source comparison and missing pages — completed 2026-11-20

Follow-up to the source review below. This was source recovery and comparison,
not a bike ingestion or a component/link/date change. It closes the untested
interior-comparison and alternate-download leads; exact publication dates remain
qualified where the originals do not print them.

**Early catalogue:** all seven Bulgier images match the corresponding
[Flying Wheel blog](https://theflyingwheel.blogspot.com/2014/08/1970s-pinarello-catalog.html)
images in dimensions and full decoded-pixel SHA-256, despite differing file
metadata/byte hashes. Mapping: blog `cover.jpeg` → `0.cover.jpeg`,
`1+(1741x1800).jpg` → `1.jpg`, and `2.jpeg`–`6.jpeg` → same-named files.
The eighth blog image, `7.jpeg`, is an additional component-detail collage of
the blue pantographed bicycle, not another specification-bearing model page.
Recovered it to `bike_specs/sources/pinarello_1979/7-details.jpeg`.
Its original link is embedded in the blog HTML under `/s1600/7.jpeg`.
All eight blog catalogue images were checked for date text; none establishes
a publication year. The blog's early/mid-1970s caption and Bulgier's 1979 folder
therefore describe the same seven scans with conflicting attribution, not
independent evidence for two editions. Keep the existing c.1979 qualification;
the collage alone does not resolve component generations or justify new links.

**1982 alternative:** [Bike Catalogs document3895](https://www.bikecatalogs.com/document/3895),
[direct PDF](https://www.bikecatalogs.com/download/3895), has eight pages.
Extracting the embedded JPEGs with `pdfimages -j -p` gives eight byte-for-byte
SHA-256 matches to maintained `pinarello_1982/1.jpg`–`8.jpg`, in order.
Its Giro Win Brochure title therefore names the already-ingested document,
including the five model specification pages. It is not an additional edition
or source to ingest. Its digital PDF title/2026 creation date cannot establish
the original's year; the existing post-1981-victory/c.1982 dating remains.
The redundant PDF was not retained.

**1990 alternatives:** [document3899](https://www.bikecatalogs.com/document/3899),
[direct PDF](https://www.bikecatalogs.com/download/3899), embeds exactly the same
13 byte-identical JPEGs as the Bulgier `Pinarello90` directory, in its order.
The alternate [document5849](https://www.bikecatalogs.com/document/5849),
[direct PDF](https://www.bikecatalogs.com/download/5849), is attributed by its
host to Retrobike and labelled low resolution, but contains **17 pages** and
generally larger embedded images. Its cover is byte-identical to Bulgier's;
the remaining common pages visually reproduce the same layouts and offerings.
The four additions, checked at full size, are:

| PDF position in document5849 | Additional content |
| --- | --- |
| 7 | Treviso Croce d'Aune: Columbus SL, Campagnolo Croce d'Aune group, component specification panel. |
| 11 | Asolo Ultegra: Columbus Cromor, Shimano Ultegra 7V group, component specification panel. |
| 12 | Veneto 105 7V: Columbus three-tube Aelle, Shimano 105 7V group, component specification panel. |
| 14 | Montello / Prologo / Treviso frameset specification panel; not three complete-bike offerings. |

Map the 13 Bulgier images to PDF positions
1/2/3/4/5/6/8/9/10/13/15/16/17 respectively. The recovered PDF has nine
complete-bike panels at positions4–12, two frameset panels14/16, accessories13/15,
cover1, champions2, introduction3 and colours/back17. These are recovered file
positions, not verified printed page numbers or proof of physical completeness.
Retained original: `bike_specs/sources/pinarello_1990/pinarello-c1990-17pages.pdf`.
Use this more extensive copy for future specification work, with the Bulgier
copy as a cross-check; do not treat the archive's low-resolution label as a
completeness judgment.

OCR date screening covered every page of the 17-page PDF; visual review covered
the page layouts, extra specification panels, cover, champion page,
introduction and back-cover imprint. No printed publication year was found.
The introduction's1925 is a historical claim; clothing model86 is not an
edition date. Back cover prints `Prograf (Verona) - Printed in Italy` without
a year. Retain **c.1990, archive attribution**. A dated original imprint or
contemporary publisher/importer reference is needed before changing dates;
another mirror repeating1990 would not independently establish it.

Validation: recovered files match the downloaded originals by SHA-256; PDF
counts and extra-page positions checked. No CSV, generator, DB or existing
bike/component mappings changed, so mapping regeneration was unnecessary.
Temporary HTML, redundant PDFs/JPEGs, extracted images, OCR text, comparison
scripts/contact sheet and compiler cache were removed. The two maintained
originals above remain. On 2026-11-21, live source 497 was verified as
`Pinarello catalogue (c.1990)` with the date caveat in its citation.
Live source 491 uses the generator's `1979 Pinarello catalogue` label;
the early attribution remains approximate as described above. The edition
date review is complete on the available scans. Revisit either attribution
only for a dated original imprint or contemporary publisher/importer reference.

## 1970–1990 source review — 2026-11-20

Scope: free public bicycle catalogue scans and their usefulness for later
specification work. No transcription, ingestion or database changes performed.
Dates below are archive attributions unless stated otherwise. Directory image
counts describe available files, not verified printed-page completeness.

| Attributed year | Direct source | Verified availability and contents |
| --- | --- | --- |
| c.1979 | [Bulgier](http://bulgier.net/pics/bike/Catalogs/Pinarello79/) | Seven images: `0.cover.jpeg`, `1.jpg`, `2.jpeg`–`6.jpeg`. Cover visually inspected; no year on that cover. |
| 1982 | [Bulgier](http://bulgier.net/pics/bike/Catalogs/Pinarello82/) | Eight images, `1.jpg`–`8.jpg`. `2.jpg` visually inspected: Prestige S, multilingual specification panel, Columbus KL and Campagnolo Super Record Titanio. It is useful bike-spec evidence, even though another index calls its 1982 item a Giro-win brochure. Do not assume those are identical documents without comparison. |
| 1985 | [Bulgier](http://bulgier.net/pics/bike/Catalogs/Pinarello85/); [Bikalog PDF](https://bikalog.org/api/view/Pinarello/1985/pinarello-1985.pdf) | 23 images / 23 PDF pages. PDF text explicitly introduces Montello 85 SLX and Treviso Victory as new for 1985. Detailed model specification panels make this the strongest initial transcription candidate. |
| c.1987 | [Bulgier](http://bulgier.net/pics/bike/Catalogs/Pinarello87/); [Bikalog PDF](https://bikalog.org/api/view/Pinarello/1987/pinarello-1987.pdf) | Six images / six PDF pages. PDF text includes Prologo with Columbus Matrix and Shimano 105 SIS; other model descriptions and frame information. Printed year not established in this review. |
| 1989 | [Bulgier](http://bulgier.net/pics/bike/Catalogs/Pinarello89/); [Bikalog PDF](https://bikalog.org/api/view/Pinarello/1989/pinarello-1989.pdf) | 12 images / 12 PDF pages. Frame specifications plus complete-bike offerings. Montello, Treviso, Cadore and Veneto text offers any Campagnolo or Shimano gruppo: do not infer a single fixed component build. |
| 1990 | [Bulgier](http://bulgier.net/pics/bike/Catalogs/Pinarello90/) | 13 images with irregular filenames. Visually inspected `05amontellorecord.jpg`: readable multilingual Montello Record panel, Columbus SLX, Campagnolo C Record/Delta, named alternatives for bars and rims. Directory includes Montello Croce d'Aune, Treviso Chorus, Asolo/Prologue Chorus, Asolo Athena, frames, accessories and colours. Printed year and completeness still need checking. |

All six directory listings were retrieved successfully through HTTP. HTTPS
retrieval failed (certificate verification in curl; cache misses/timeouts in the
web reader). Use the original HTTP source links above; no TLS checks were disabled.
Only sample images were downloaded for inspection, then removed. PDFs were read
through the web tool; no original scans were retained locally.

### Earlier edition and date caveats

[The Flying Wheel's 2014 post](https://theflyingwheel.blogspot.com/2014/08/1970s-pinarello-catalog.html)
calls its material early/mid seventies. Its original image links remain embedded
in the HTML despite being absent from the web reader's text. Visually compared
the blog's `cover.jpeg` with Bulgier `Pinarello79/0.cover.jpeg`: same blue Record
Special bicycle, illustrated landscape, layout and scan marks. This is a
conflicting attribution of the same cover, not evidence for an additional early
1970s edition. The post embeds eight catalogue-looking images (cover plus 1–7),
whereas Bulgier has seven files. The completed comparison above confirms the
same seven scans plus the blog's extra detail collage; exact dating remains open.

[Ebykr's Pinarello index](https://ebykr.com/catalog-archive/?em=pinarello)
dates the 1979 and 1987 material approximately and lists 1985 and 1989. It also
lists a c.1991 Gavia brochure, outside scope; do not silently count that as 1990.
[Bike Catalogs](https://www.bikecatalogs.com/brand/pinarello) indexes the six
years above, including two 1990 entries (one low resolution) and a 1982 Giro-win
brochure. Direct retrieval initially failed; the completed comparison above
supersedes that limitation and identifies both PDFs and the four extra pages.
[VeloBase](https://velobase.com/Pages/Resources/CatalogScans.aspx) additionally
lists an 828 KB Pinarello 1985 price list; download and content not inspected.

No independently dated 1970–78 catalogue was established. Also not recovered:
1980–81, 1983–84, 1986 and 1988. Search covered general English/Italian catalogue
queries, Bulgier, Bikalog, Ebykr, Bike Catalogs, archive-link lists and the early
blog lead. Absence here does not establish that editions were never published.
Reopen these gaps for a new scan or identified shareable copy, rather than
repeating the same index searches. The interior and alternate-copy comparisons
have now been completed above. Exact dating needs a new dated original or
contemporary publisher/importer reference, rather than another archive label.
