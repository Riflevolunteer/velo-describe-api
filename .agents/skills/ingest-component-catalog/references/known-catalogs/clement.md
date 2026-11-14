# Clement catalogs processed so far

## Ritmo / Raleigh correction — 2026-11-14 (user approved, applied)

- [Applied SQL](../../../../../docs/audits/clement-ritmo-2026-11-14.sql).
  Cleared all three links to 6767, set `clement ritmo tubular` to explicit null,
  and withdrew 6767's unsupported catalogue dates/construction attribution.
  Do not broaden the LTX 55 identity or infer its dates from the plain name.
- Re-read the original [1982 Raleigh brochure, scan 3](https://ebykr.com/wp-content/uploads/2026/10/ebykr-1982-raleigh-racing-formula-p03.webp),
  source 132: Team Replica 12 says Clement Ritmo tubular tyres. The
  [1983 technical table, printed p.5](https://ebykr.com/wp-content/uploads/2026/10/ebykr-1983-raleigh-racers-catalog-p05.webp),
  source 133, says Clement Ritmo Tubular for Team Replica 12 and Road Ace 12.
  Neither gives LTX 55, weight, casing or tube construction. The 2026-10-08
  mapping rationale, that 6767 was the only Ritmo row, does not identify a variant.
- Re-read Ten Speed Drive 1983, printed p.13, using this [mirror PDF](https://www.bikecatalogs.com/download/6157?download=1)
  (PDF page **12**, not 13; metadata identifies the same bulgier.net scan).
  Under training road tubulars, plain Ritmo is 255 g cotton, mixed tread,
  latex-butyl tube. It does **not** name LTX 55. Source 279 therefore does not
  establish those specifications or the 1983 attestation for that marked variant.
- The [physical tyre-label photograph](https://www.velobase.com/CompImages/Tire/01F9264D-2943-4799-906B-785CE69F3745.jpeg)
  shows Ritmo LTX 55 clearly: keep that real identity/title. The [original entry](https://www.velobase.com/Pages/ViewComponent.aspx?ID=79A2BBF7-2A13-4C6B-891C-4FC0945D0D35&Enum=120)
  has no dates. Photograph supports a tubular with black tread and tan
  sidewalls; it does not date it or establish its weight/casing/tube.
  Restored source_ref 1 (VeloBase), retaining the legacy source_id UUID.
- The Guida 1985/1988 plain Ritmo entries (scans 39/50, already held and read
  during the Pistard pass) list 270 g Clement tex, with different tube wording
  between editions. They also do not name LTX 55. Weight differences do not
  by themselves prove separate generations or identify Raleigh's fitment.
  No new generic Ritmo row or link to another version is proposed.
- Before application: 6767, `Clement Ritmo LTX 55`, dates 1983–1983, source 279,
  description `Clement Ritmo LTX 55, Italy. Cotton training tubular, mixed tread
  for reduced rolling resistance, latex-butyl inner tube, 255g`. Three links:
  4536 / bike 239 / 1982 Team Replica 12 / source 132 / `Clement Ritmo tubular`;
  4621 / bike 245 / 1983 Team Replica 12 / source 133 / `Clement Ritmo Tubular`;
  4669 / bike 247 / 1983 Road Ace 12 / source 133 / same text. Guarded SQL
  preserves the spec text/source and component title/search_text/source_id.
- Applied component values: dates NULL/NULL, source 1, description
  `Tubular tyre marked Ritmo LTX 55; black tread and tan sidewalls.`
  First run affected three specs and one component; rerun zero. All 86 CSVs
  regenerated before/after the override: only those three links removed; after
  the component correction generation was identical to the post-override result.
  Compared all 18,472 live specs and all 10,264 components: only those three
  component_id fields and 6767's description/year_from/year_to/source_ref changed.
  Coverage 237 -> 234/973 (24.0%), 739 unlinked; date flags 4 -> 3; 601 tyre
  components, 69 with incomplete dates; 16 linked incomplete-date specs remain.
  CSVs unchanged. Next evidence needed: a dated LTX 55 source or independent
  Raleigh fitment detail distinguishing it.

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
