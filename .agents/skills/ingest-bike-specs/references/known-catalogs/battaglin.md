# Battaglin catalogs processed so far

## 1982 Battaglin — `1982_battaglin_spec.csv` (6 bikes, 110 specs, 50 linked)

- Source (added 2026-10-24): saarf.london "Battaglin 1982 Catalog"
  (https://saarf.london/2014/02/09/battaglin-1982-catalog/, 15 scans: `012`, `0211`..`09a1`, 1400 x 1100
  landscape). Cicli Battaglin di Battaglin Giovanni, Marostica (Vicenza). A cover photo (Saronni in the pink jersey),
  then for each model a photo page ("Mod. X") and a four-language component table (Italian / English / French /
  German), and a "Listino prezzi 1981-82" price list as the last scan. **No year is printed on the sheets**; 1982 is
  the blog title and the price list is 1981-82. `data_source` label `1982 Battaglin catalogue`, country IT. First
  Battaglin catalogue and first Battaglin brand row.
- Tables read by labels: Telaio = frame, Guarnitura = crankset, Pedali, Fermapiedi = toe clips, Cinghiette =
  straps, Deragliatore = front derailleur, Cambio = rear derailleur, Mozzi = hubs, Cerchi = rims, Raggi = spokes,
  Tubolari = tyres, Catena, Ruota libera = freewheel, Porta borraccia = bottle cage, Freni = brakes, Serie sterzo =
  headset, Attacco manubrio = stem, Manubrio = handlebar, Reggisella = seatpost, Sellino = saddle.
- Bikes loaded: Campagnolo (Super Record, L. 1,260,000), Giro d'Italia (Gipiemme Special/Cronospecial, 855,000),
  Arena (Gipiemme Cronospecial, 1,125,000), Alessandro (Gipiemme Sprint-group, 615,000), Marostica (415,000), Super Pista
  (track, 685,000; no derailleurs, freewheel, brakes or bottle cage). Prices went into Extras with the Cobra bottle
  cage; toe clips and straps share one "Toe Clips" cell.
- Left out: **Turismo** (mixte city bike: fenders, chain guard, dynamo, bell; out of scope) and initially **Vuelta** (price list
  only in that scan; full sheet found and loaded 2026-11-12, below).
- Transcribed as printed: brakes read "Gipiemme Modolo Professional / Kronos / Spidi / Sporting" (only Kronos has a
  single DB row, 870 Modolo Kronos, 1983-85); "Vittoria C.G.", "Nisi Solidal / Corsa / Ekip", "Regina Oro" chains
  and freewheels. The frame is stored as "Columbus S.L. / K.L. / Z / P.S.".
- Overrides (all commented "1982 Battaglin" in the generator): Cranksets 'gipiemme cronospecial' -> 1587 (Crono
  Special 100 AA) and 'gipiemme cronosprint' -> 1589 (Crono Sprint 100 CC), both ranged 1982; Headsets
  'gipiemme cronospecial' -> 9137 (1985-88 row) and 'gipiemme pista special' -> 3008 Special (Pista); Pedals
  'gipiemme pista special' -> 3751, and the either/or cell 'gipiemme cronospecial special' -> null; Hubs
  'gipiemme pista special' -> 3351; Rims 'nisi corsa stretto' -> 9228 and 'nisi ekip' -> 9227; Stems 'cinelli 1 r'
  -> ranged 6492 (1976-79) / 6491 (1980-85). `CATALOGUE_COUNTRY` has `1982|battaglin` = IT.
- Auto-linked, worth a second look: Nisi Corsa -> 5131 "Corsa Toro (no eyelets)" (the catalogue names no variant;
  the DB's only 1970-88 Corsa row); Regina Record chain -> 1383 "Record Super Star" (years end 1980); Vittoria
  C.G. -> 6877 Corsa CG Seta (as the 1987 Bianchi).
- Left unlinked: Giro d'Italia crankset "Gipiemme Special" (600100 and 600100/M), Alessandro "Minisprint"
  (DB row from 1985), Super Pista "Pista Special" crankset (1588 and 1593), Cronosprint front (2368 / 2369) and rear
  (4260 / 4261) derailleurs, Sprint 610 rear, Gipiemme Sprint seatposts (types 1 and 2), Nisi Pista Special (5138 /
  9225), Modolo Professional (880 / 892; do-not-link override 2026-11-01: no v1 / v2 changeover date, photo arms unreadable) and Spidi brakes (Sporting linked to 888 on 2026-10-28 once 893 was merged; Concor
  Junior saddle linked to 9772, a row added after the load), Vittoria CX / C.S. Satinato / Uni,
  Regina Oro freewheel (2194 / 2195), Cinelli bars (brand only), Alpinaraggi spokes.
- Several linked rows start after the catalogue (9137 headset 1985-88, 3351 hub originally 1985, 9227 / 9228 rims 1985+).
  The original same-part assumption for hub 3351 is not established by the
  uncoded sheet; see the [early Pista hub review](../../../ingest-component-catalog/references/known-catalogs/gipiemme.md#early-pista-hub-links--evidence-review-2026-11-20).
- Regression: all 61 other catalogues regenerated with identical link counts.


## Alessandro Nisi Corsa review — 2026-11-17, correction applied

Re-read [the original Alessandro specification sheet](https://saarf.london/wp-content/uploads/2014/02/05a1.jpg),
from the catalogue linked above. Cerchi / Rims prints only **Nisi Corsa**:
no Toro suffix, part number, dimensions or eyelet construction. The earlier
automatic pick **5131 Corsa Toro (no eyelets)** was based on a unique substring,
not a supported configuration identification. Nisi's contemporary Corsa range
contains several numbered road rims (see Nisi maker notes); later **10608 Corsa
Toro** also differs in construction. A compatible date alone selects neither.

Live bike **759**, source **268**, spec **12943**, label/raw label `Rims`,
value `Nisi Corsa`: **5131 -> NULL applied, user approved**.
No replacement row, component/date change or CSV edit.
Scoped Alessandro/1982 NULL override prevents a unique candidate reviving the
unsupported assignment; matching elsewhere is preserved. Need a period numbered
parts list or identifiable original rim. Restoration only if justified: guarded
NULL -> 5131 for the same spec/bike/source/label/text, and revise the guard.

This supersedes the initial "worth a second look" auto-link note above. Before
application, all 96 loaded catalogues / 21,176 specs produced identical generated
mappings/findings after both new guards; regression tests passed. Application
changed this spec and Grizzly 19546 only, two rows total; rerun changed zero.
Readback confirmed the original text, label/raw label and source 268. Quality
check found zero structural errors; remaining generator/live losses are the
16 Huret Rival specs. Completed unlink task removed from TODO; identification
evidence remains open. Temporary SQL removed after validation.

## 1982 Vuelta — added 2026-11-12 (bike 1185, existing source 268)

- User explicitly requested loading the Vuelta. A fuller 17-page copy of the
  same catalogue supplies its photo (PDF page 12) and written spec sheet
  (page 13): https://www.bikecatalogs.com/document/2782, PDF at
  https://www.bikecatalogs.com/download/2782?download=1. Embedded PDF source:
  https://bulgier.net/pics/bike/Catalogs/Battaglin/. Last page explicitly
  prints the same 1981-82 price list; this is not an additional model year.
- Saved source PDF and rendered Vuelta sheet under `/tmp/battaglin-search/`.
  Added Vuelta to `bike_specs/1982_battaglin_spec.csv` without changing the
  six existing rows. CSV backup, one-model CSV and reviewed SQL:
  `/tmp/battaglin-vuelta-review/1982_battaglin_before.csv`,
  `1982_battaglin_spec.csv`, and `vuelta.sql` in that directory.
- One Road Racing bike, 19 specs, seven links, all using existing labels and
  source 268. Frame material preserved as "Columbus 3 Tubi"; price L. 600,000
  and Cobra bottle cage in Extras; Christophe clips and Battaglin straps
  share Toe Clips. No colours, sizes, gearing or individual part codes
  inferred from the photograph.
- Links: Gipiemme Special crank 1595 / rear derailleur 4264 / hubs 3352;
  Cronosprint front derailleur 2369; Nisi Corsa Stretto rims 9228;
  Cinelli 1/A stem 6489; Concor Supercorsa saddle 5547. All seven rows'
  date ranges include 1982.
- Explicit Vuelta/1982 null overrides withhold five initial matcher picks:
  Cronospecial headset 9137 starts 1984 and alternative 10819 is dated 1983;
  Special pedals 3752 end 1980 while 10966 starts 1984; Record chain 1383
  ends 1980 and Extra 50 Record is not explicitly named; Oro freewheel 2194
  assumes six speeds/variant not printed; Trofeo 250 tyre 9255 starts 1984
  and the sheet gives no 250 code. Existing picks on other bikes preserved.
  Seatpost, Spidi brakes, spokes, brand-only bars, clips and extras also text.
- Regression before appending Vuelta: all 83 existing CSV outputs combined
  byte-identical before/after overrides (1078 bikes / 18106 specs / 6253
  links). Node syntax and git whitespace checks passed.
- Load affected exactly one bike and 19 specs; no existing rows changed.
  Re-run of all 88 statements affected zero rows. Readback confirmed bike
  and all 19 specs use source 268. Battaglin now 7 bikes / 129 specs /
  78 links, still all 1982. Earlier six bikes retain their prior counts.
- Other-year search: a 2012 forum thread mentions 1983-84 sheets and a
  purported 1987 catalogue, but the original documents were not located:
  https://www.bikeforums.net/classic-vintage/850825-battaglin-history.html.
  The July 1984 Bicisport advert was inspected; its text names component
  brands without a bike model, so no bike was created from it:
  https://www.disraeligears.co.uk/site/bicisport_1984_july_-_battaglin.html.


## 1982 Super Record rear link — 2026-11-17, applied and validated

User approved **12880**, Campagnolo model, source 268: **4149 → NULL**. The printed
family name `Campagnolo Super Record` does not identify late first-generation PAT.80
specimen 4149 rather than second-generation 4151. Generator guard prevents
reassignment; text/raw label/source remain unchanged. No forced replacement link
or CSV change. Reopen only with distinguishing original fitment evidence. See the
[component review](../../../ingest-component-catalog/references/known-catalogs/campagnolo.md#super-record-and-early-campagnolo-specimen-review--2026-11-17)
for source photographs, the full correction set and successful live validation.
