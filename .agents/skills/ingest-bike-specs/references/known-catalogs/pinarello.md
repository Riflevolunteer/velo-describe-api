# Pinarello catalogue sources

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
  levers231, pedals3716; brakes NULL without reach evidence.
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
Tre Cime's `Super Record x 3` is preserved and its triple drivetrain stays NULL.

Loaded one source, five bikes, 73 specs, 29 component links;
existing brand and all 15 labels reused. Source label follows generator
convention `1982 Pinarello catalogue`, citation `1982_pinarello_spec.csv`.
Validated component mappings:

- Prestige S: FD 2313, crank 1509, post 5761, levers 232, pedals 3716, chain
  1384, rims 5069. Titanio qualifies the group, not every component's material.
- Tre Cime: post 5761, levers 232, pedals 3716, chain 1384, rims 5069.
- Super Record Special: FD 2313, crank 1509, post 5761, levers 232, pedals
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

- Prestige / Super Record: FD 2313, crank 1509, seatpost 5759, levers 232,
  pedals 3716. Rear group remains NULL: 4148 and 4151 overlap circa 1979.
  Brakes remain NULL without standard/short-reach identification (582/7005).
- Record: FD 2299, RD 4125, crank 1496, seatpost 5749, levers 226,
  pedals 3708, using the existing period Record mappings. Brakes stay NULL
  without reach identification (572/575).
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
5375, so a generic NULL guard now prevents that false identity; Record Special
Super Record brakes matched standard-reach 582, but short-reach 7005 also fits
the wording, so a model/year-specific NULL precedes the existing override.
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
whereas Bulgier has seven files; compare interiors before claiming the sets are
identical or that the blog supplies an extra page. Exact dating remains open.

[Ebykr's Pinarello index](https://ebykr.com/catalog-archive/?em=pinarello)
dates the 1979 and 1987 material approximately and lists 1985 and 1989. It also
lists a c.1991 Gavia brochure, outside scope; do not silently count that as 1990.
[Bike Catalogs](https://www.bikecatalogs.com/brand/pinarello) indexes the six
years above, including two 1990 entries (one low resolution) and a 1982 Giro-win
brochure. Its index was visible in search but direct page retrieval failed, so
the alternate 1990 scan and 1982 brochure are leads, not inspected copies.
[VeloBase](https://velobase.com/Pages/Resources/CatalogScans.aspx) additionally
lists an 828 KB Pinarello 1985 price list; download and content not inspected.

No independently dated 1970–78 catalogue was established. Also not recovered:
1980–81, 1983–84, 1986 and 1988. Search covered general English/Italian catalogue
queries, Bulgier, Bikalog, Ebykr, Bike Catalogs, archive-link lists and the early
blog lead. Absence here does not establish that editions were never published.
Reopen these gaps for a new scan or identified shareable copy, rather than
repeating the same index searches. Next useful work is interior comparison of
the blog/Bulgier early sets, dating/completeness review of 1982/1990 and checking
the alternate Bike Catalogs entries.
