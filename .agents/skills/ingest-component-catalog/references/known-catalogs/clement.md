# Clement catalogs processed so far

## Pistard / Bianchi Super Pista review — 2026-11-14 (user approved, applied)

- [Applied SQL](../../../../../docs/audits/clement-pistard-2026-11-14.sql): cleared
  spec 1023's unsupported link to 6765 and enriched/corrected Pistard's
  description; retained component dates 1985–88 and source 262. Changed the
  generator's `clement pista tubular` override from 6765 to explicit null.
  Spec text/source and CSV unchanged. First run affected one spec and one
  component row; rerun zero. Generation across all 86 CSVs changes only this
  link; all 18,472 live specs compared, only 1023.component_id changed.
- Re-read [Bianchi c.1983, Super Pista (10th scan)](https://ebykr.com/wp-content/uploads/2026/10/ebykr-1983-bianchi-catalog-p10.jpg):
  says Clement Pista tyres, without model number, casing, weight or Pistard name.
  The catalogue is undated; c.1983 remains inferred from its 1982 medal reference.
  This does not establish Pistard fitment or support extending 6765 to 1983.
- [Guida 85/86 scan 39](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_1985_november_-_i_componenti_da_corsa_scan_39_main_image.jpg),
  source 259: Pistard is Clement tex, studded tread, 250 g, 28in; bottom-group
  footnote specifies butylised latex tubes. Several numbered track tyres are
  separate rows. [Guida 88 scan 50](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_1988_february_-_i_componenti_da_corsa_scan_50_main_image.jpg),
  source 262: Pistard again 250 g, Clement tex, studded tread, butyl tube;
  N.1 Seta Extra Pista and N.8 bis Clement Pista are distinct entries.
  [Scan 51](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_1988_february_-_i_componenti_da_corsa_scan_51_main_image.jpg)
  also lists N.10 Clement Pista separately. The existing 220 g description
  is contradicted by both guides; preserve the actual tube-spec difference
  between editions rather than infer a generation change or duplicate row.
- The held [1977 manufacturer track page](http://cyclespeugeot.web.fc2.com/catalog/clement1977/1977_clement_03.jpg),
  source 232, independently lists multiple track models (Tipo 1, Tipo 3,
  Sei Giorni 8 bis, Tipo 10). Thus the old rationale that Pistard was the
  only track-named candidate is insufficient. Do not choose another numbered
  model without distinguishing evidence from the Bianchi fitment.
- Before application, 6765 had one bike link (1023), dates 1985–88, source 262,
  description `Clement Pistard, Italy, 220 grams`. It now has no bike links;
  description is `Tubular with Clement tex casing and studded tread, 28 in,
  250 g. Tube: butylised latex in 1985; butyl in 1988.` Verified coverage
  238 -> 237/973 and date flags 5 -> 4. The Clement Pista spec is intentionally
  unlinked pending distinguishing model evidence; do not choose another track
  model or widen Pistard's dates to increase coverage.

## Clement S.p.A. tubular and wired-on tyre leaflet (1977) (Reminiscence Part 95, 8 pages)

- `data_source` 232, label "Clement Tubular and wired-on tyre leaflet (1977)". Source:
  http://cyclespeugeot.web.fc2.com/reminiscence/clement1977.html
  (`../catalog/clement1977/1977_clement_00.jpg` cover, `_02` .. `_08`; there is no `_01`;
  360-512 px wide, legible). Dated 1977 from the cover ("dal 1902, 75 anni"). Italian /
  French / English. Tyres only: tubulars by Tipo number (track silk and cotton pp. 3,
  road silk p. 4, road cotton and cyclocross p. 5, vulcanised p. 6), wired-on size chart
  p. 7, tubular cement and hand-made covers, new Gentleman and Condor p. 8.
- Updated (19 rows, all velobase rows with no earlier source): 6771 Seta Extra (Tipo 1),
  6766 Record Seta Extra, 6748 Criterium Seta (Tipo 6, description only), 6737
  Campionato del Mondo Seta (13), 6763 Paris-Roubaix Seta (13 bis), 6761 Nuovo Super Seta
  Extra, 6738 Campionissimo Seta Extra (year_from 1980 -> 1977; catalogue 195 g, velobase
  220 g kept as "later examples"), 6775 Strada 66 (12 bis, year_to 1968 -> 1977), 6762
  Paris-Roubaix (14 bis cotton), 6758 Grifo Neve (15, description only), 6757 Grifo 61
  (15 bis), 6732 "6 Giorni" = Sei Giorni (8 bis), 6731 Clement 50 = 50 Latex (19), 6736
  Campestre (18), 6755 Gran Sport 65 (22), 6752 Elvezia = Elvezia 75 (24, year_to 1977),
  6733 Clement 70 (16), 6730 Clement 48 (20, catalogue 380 g replaces velobase 340.2 g),
  6781 Veltro (21 bis). Matches by name alone, weights differ: 6730, 6731 and 6781.
  No row retitled (Tipo numbers are in the descriptions), so no `search_text` changes.
- New (7 rows, 1977-1977, ids 8970-8976): Clement Seta (Tipo 3, track) 175 g, Criterium
  Seta Extra (1 bis), Criterium Cotone (12 bis), Gentleman 300 g, Super Gentleman 260 g,
  Copertura Manufatta Criterium 250 g, Condor 350 g (butyl only, first-equipment tyre).
- Bike links (COMPONENT_OVERRIDES `Tyres`, 2026-10-20): 1973-74 Raleigh Professional
  Track "Clement No. 3 Silk Tubular" -> 8970 (2), 1981 Bianchi "Clement Gentleman
  wired-on" 27" / 28" -> 8973 (2), 1981 Bianchi Super Leggera "Criterium cotton tubular"
  moved from 6745 (180 g) to 8972.
- Left unresolved: "Criterium Ruota" 24" / 26" (225 / 245 g) and the unnamed Tipos 2, 7,
  9, 10, 11 and 12 (track cotton and stayer types, listed under "other types" without a
  model name); the 1970 Raleigh "Clement 'Seta' Silk" (Professional Mk II) could be 6769
  or the new Tipo 3 row, so it stays unlinked. The bare "Clement tubular" (11 bikes)
  cannot link without a model.

## Falcon parts catalogue (1970) — see cross-catalog-notes.md (`data_source` 352)

- Status correction from the 2026-11-14 tyre audit: the 1970 Raleigh
  "Clement 'Seta' Silk" question above was superseded by the user's 2026-10-30
  decision mapping it to 6748 Criterium Seta (recorded in the bike Raleigh notes
  and generator). Do not reopen it as an unlinked source gap without new evidence.

- UK importer list of 21 Clément tubulars by Tipo number with oz weights. Twelve rows moved
  year_from to 1970, 6774 Speciale Corsa dated, new 10068 Produzione (23) and 10069 Olimpic (21).
  Tipo 9 / 10 cotton track types left unresolved against 6735 "Seta 9" and 9259 "N. 10".
