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
- Left out: **Turismo** (mixte city bike: fenders, chain guard, dynamo, bell; out of scope) and **Vuelta** (price list
  only, L. 600,000, no sheet, so no specs).
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
  9225), Modolo Professional (880 / 892) and Spidi brakes (Sporting linked to 888 on 2026-10-28 once 893 was merged; Concor
  Junior saddle linked to 9772, a row added after the load), Vittoria CX / C.S. Satinato / Uni,
  Regina Oro freewheel (2194 / 2195), Cinelli bars (brand only), Alpinaraggi spokes.
- Several linked rows start after the catalogue (9137 headset 1985-88, 3351 hub 1985, 9227 / 9228 rims 1985+): the
  same parts, so a component pass could move their `year_from` earlier.
- Regression: all 61 other catalogues regenerated with identical link counts.
