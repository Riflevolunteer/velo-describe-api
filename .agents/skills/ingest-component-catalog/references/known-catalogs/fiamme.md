# Fiamme catalogs processed so far

## Cerchi e manubri per biciclette da corsa (c. 1985), loaded 2026-11-13

- Source: velo-pages.com album 1398 "Fiamme catalog (1985)", recovered from the Wayback Machine with
  `scripts/velo-pages-wayback.sh <out-dir> 1402 1407 1410 ... 1461` (display items = page item + 2; 449 x 640, captures
  Nov / Dec 2010 and May 2011). 19 of 20 pages: album page 2 (item 1407) has no capture. data_source 383, label
  "Fiamme Cerchi e manubri per biciclette da corsa (c. 1985)", country IT. Bilingual Italian / English, Industria
  Fiamme s.r.l., via Giovanni da Udine 38, Milano. Dated >= 1985 by the ETRTO table citing "E.T.R.T.O. Data book 1985".
- Pages: 1 cover; 3-7 company history and photos (skipped); 8 ETRTO size tables; 9-18 rims, one spec page + one
  section / label page per group; 19 Montreal stem; 20 "Curve / Bends" bars; back cover (no parts).
- Contents: tubulars 01 Ergal (7075, 280 g, 20.0), 04 Ergal Iride (360 g), 05 RCX (360 g, hard anodised), 20 Master 2
  (420 g, 21.5), 21 Hard Silver (360 g), 5 Prestige (400 g, 36 holes, single eyelets, training), 8 Gi 8 (360 g; 632 / 582
  / 532 / 482 mm), 11 Progetto Corse (400 g, 21.3), 2 Speedy (polished) / 3 Speedy (hard anodised) track 310 g 18.5;
  clinchers 80 Elan (480 g, 20.3), 85 Sport (510 g, 24.0, box section), 90 Explorer (polished) / 91 Explorer (hard
  anodised) 480 g; Montreal stem 22.2 mm, 7-12 cm; bars Milano 149 / 86, Dallas 144 / 88, London 161 / 103, Pista
  164 / 78 (drop / reach mm).
- Rows updated (descriptions rewritten from the catalogue, source_ref 383): 4992 Ergal, 4993 Ergal Iride, 5000 RCX,
  4997 Master 2, 4996 Hard Silver, 4994 Gi 8 (**year_to 1980 -> 1985**), 4995, 5001 Speedy (both finishes in one row),
  9192 Yellow Label Elan, 9188 Milano, 2837 Dallas, 9189 London, 9190 Pista, 6527 Montreal. No year_from moved.
- Retitled: 4995 "Fiamme Green Label" -> "Fiamme Progetto Corse" (search_text rewritten); "Etichetta Verde / green
  label" (La Bicicletta '85/86 name) kept in the description.
- Inserted (1985-1985): 10990 Fiamme Prestige, 10991 Fiamme Explorer (90 + 91 in one row), 10992 Fiamme 85 Sport (user's
  call: the box-section section drawing differs from velobase's single-wall 5002 / 5003 Sport rows, so a new row
  rather than extending 5003).
- Resolved: the Cyclo-Pedia (c. 1974) "Fiamme 2 Red Label track, 19 mm, 310 g" is the 2 Speedy (polished, red Fiamme
  label) = 5001, not 4998 Fiamme Pista.
- Not in this catalogue (no change): 9191 Blue Label, 5005 Type 22 Black Label, 4999 Professional (yellow label), 5004
  Strada (red label), 9423 Bussola, 5006 Sprint, 4998 Pista, 9700 / 9701, 9322 High Pressure, 9321 Maes bar, 6526 stem.
- SQL: session scratchpad `fiamme-1985.sql` (18 idempotent statements); a re-run affected 0 rows.
