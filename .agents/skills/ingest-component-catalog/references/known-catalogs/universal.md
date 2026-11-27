# Universal catalogs processed so far

## Model 51 / Super 68 reach review — 2026-11-27

The [1975 Holdsworth catalogue](https://ebykr.com/library/holdsworth-1975-aids-catalog/), pp. 30–31, offers Model 51 with shallow-front/deep-rear 100/101 or deep-front/deep-rear 101/101, and Sport 68 with shallow or deep stirrups. The [c.1978 Universal maker catalogue](https://labibleduvelocataloguesuniversal.blogspot.com/p/universal-1978.html), source 339, lists Extra 51 calipers 100/101 with lever 301 and Super 68 calipers 102/103 with lever 306. The [1976 Palo Alto catalogue](https://ebykr.com/library/palo-alto-bicycle-shop-1976-catalog/) describes Model 51 as similar to the 68 with lower-reaching calipers, but that retail comparison should not be generalized into a claim that all Model 51 brakes are long reach or all 68 brakes short reach. Each model has multiple reach configurations, and the maker uses different component and lever numbers.

Applied on user approval: retained separate 1080 Model 51 and 1082 Super 68 records, dates, titles and all five bike links. Replaced 1080's overbroad claim that the Model 51 was the same as the 68 but long reach with the 1975 offered configurations; added the reach choices to 1082 and preserved the reported weights and maker part numbers. Source 260 is the registered 1975 Holdsworth catalogue. This supersedes the previous description's simplified long-reach-only comparison; no manufacturer dimension was inferred from generic model names. Readback verified both descriptions and all five links; SQL replay affected zero rows and the link-decision test passed. No title, date or generator mapping changed.

Rollback: 1080's previous description was `Universal Extra Mod. 51 (Brev 453949), Italy. Listed as the Model 51 in 1976: the same brake as the 68 but long reach; 503 g per set with levers. Refs 100 / 101, lever 301.`, source 339. 1082's previous description was `Universal Super 68, Italy, 305 grams (avg). Side-pull; the Model 68 was Universal's best seller, 495.5 g per set with levers (1976). Refs 102 / 103, lever 306.`, source 389. Restore those values if reversing; links 1842/12551 were on 1080 and 1838/3951/22965 on 1082.

## Freni Universal catalogo generale (c. 1978; La Bible du Vélo blog "Universal 1978", 29 pages), `data_source` 339

- Label "Freni Universal catalogo generale (c. 1978)", country IT. Source:
  https://labibleduvelocataloguesuniversal.blogspot.com/p/universal-1978.html ("UNIVERSAL 1978 (1)..(29).jpg", 1275 x 1263,
  spiral-bound square pages). Italian / French / English; back cover Fratelli Pietra, via Pietro Gassendi 9, 20155 Milano;
  intro "55 years" of manufacture. **Undated**: the Mod. 77 (1977) is in and the AER (1980) is out, so 1977-79; 1978 is the
  blog's. **No weights printed anywhere.** Two Sonnet subagents (scratchpad `univ78/part1-2.json`, merged `univ78.json`);
  pp. 7 / 9 / 11 / 13 checked by hand (the Mod. 61 105 / 106 is a centre-pull; the transcriber called it a side-pull).
- Range and refs: Competizione CX 97 (small front) / 98, levers 700 lusso / 701 superlusso pantografata; Corsa mod. 77
  99/A / 99/P, levers 705 / 706 extra leggero; Extra mod. 51 100 / 101, lever 301; Super mod. 68 102 / 103 and mod. 61
  105 / 106 (centre-pull), both with lever 306 "leva corsa mod. 61-68" (para hood); Sport centre-pull 108 / 109 with
  supports 108/A / 108/P (de luxe 105/A / 106/A); Sport side-pulls 130-136/D (by reach and bracket side), 168 / 169 steel
  "al movimento", 190 / 191 for folding cycles, Sportivi esportazione 175 / 180 / 185; Mignon 160 bis-169; levers 303
  "Giro d'Italia", 340-343 (sport, children's); transmissions 400-436, toe clips 550 / 551 (out of scope).
- Changed (source_ref -> 339): year_to -> 1978 on 1081 Mod. 61 brake (old 1976; + refs; 1 link, a 1974 Motobecane;
  override 'universal 61 center pull' not year-ranged), 480 Mod.77 lever (old 1977), 479 Mod.61 lever (old 1961; it is
  the 306); undated velobase stubs dated 1978-1978: 1070 Sport (centerpull) (108 / 109), 1068 Mignon (160 bis-169);
  descriptions only: 475 CX lever (700 / 701), 1080 Extra 51 (+ 100 / 101, 301), 1082 Super 68 (+ 102 / 103, 306).
- Left: the Sport side-pulls 130-136 not tied to 1069 / 1071 ("Universal Universal" / F.P.M. marking stubs, can't tell
  from the drawings); 9703 lever 304 (1974, with the Super 68) absent here, where the 68 comes with 306; 1086 CX and
  1083 Mod. 77 already span 1978 (refs 97 / 98, 99/A / 99/P not added to their full descriptions); Mod. 125 (row 1075, 1976-1988)
  and Squadra absent. No inserts or deletes.

## Sport ART.130/131 held-source review — 2026-11-12 (read-only)

- Re-read source 339, printed pp.11–12 (blog scans15–16). 130 is small front, 43–56mm; 131 standard front, 44–62mm; 132 deep front and 133 standard rear, 56–72mm. 134 is front/rear, 65–83mm; 136/S and /D are left/right bracket versions. Thus 130/131 is not a front/rear pair.
- 1981 Bianchi Super Turismo spec6595 “Universal ART.130/131” remains NULL. The catalogue drawing shares the double UNIVERSAL lettering of DB1069, but its VeloBase main photo (8F3C3AAD-4CE0-4121-9F42-B3B6A47EC166.jpeg) shows bare calipers without measurable reach/model markings. Arm lettering alone does not identify the numbered option. No new duplicate Sport row, no retitle/date widening or link to 1069/1071. Need measured reach/back markings or a Bianchi parts document.
- Source pages are identified above; the earlier disposable catalogue images and comparison photo are no longer retained. No SQL applied.

## Bianchi 130/131 fitment follow-up — 2026-11-17 (no DB changes)

- Live readback: spec **6595**, bike **363** (1981 Super Turismo, source **165**),
  still reads `Universal ART. 130/131` with component NULL. Rows **1069 / 1071**
  remain unidentified Sport specimens with no bike links; no dates, titles,
  descriptions or mappings were changed in this review.
- Visually rechecked the original manufacturer's printed **pp.11–12**, blog
  scans **15–16**. P.11 explicitly labels 130 small front (43–56mm), 131 normal
  front (44–62mm), and 132 deep front / 133 normal rear (56–72mm). P.12 shares
  spring 241/a between 130/131 but distinguishes front and rear centre bolts;
  shared parts do not turn 130/131 into a front/rear model pair.
- The original saarf host returned HTTP 429. Found an [alternate copy of the
  same Bianchi 1981 US brochure](https://bikalog.org/api/view/Bianchi/1981/bianchi-1981.pdf):
  PDF **p.4** visibly prints ART. **130/131**, confirming the maintained CSV
  transcription. The Super Turismo portrait on **p.3** has no legible model
  marking, measured reach or separate front/rear identification. It cannot
  establish which numbered calipers were fitted. The alternate host is not a
  second independent fitment attestation or a reason for another source row.
- **New independent period listing:** [Holdsworthy Bike-Riders Aids 1967–68](https://ebykr.com/library/holdsworth-1967-68-aids-catalog/),
  printed **p.35**, [scan 19, right page](https://ebykr.com/wp-content/uploads/2026/11/ebykr-holdsworth-1967-68-aids-catalog-p19-scaled.webp),
  identifies a Universal Sport set as **131/133**, with the smaller front and
  deeper rear. This corroborates the manufacturer's positional distinction.
  It raises a concrete possible Bianchi catalogue error, but does not prove
  that the 1981 bike used this set; do not change 130/131 to 131/133 by inference.
- Targeted English/Italian code and Super Turismo searches found the above
  catalogue and restoration/forum leads, but no Bianchi dealer parts list or
  original numbered fitment evidence. Rivendell 2001 no.8/9 reproduces the same
  Universal reach drawing and adds no Bianchi identification; restored-bike
  photos are not factory-equipment proof. The separate 1996 Universal MTB
  catalogue lead was not pursued for this 1981 Sport identity question.
- Result: preserve the combined text and NULL link. No unsupported split,
  numbered duplicate component inserts, retitling/date widening of 1069/1071,
  or CSV correction. The remaining action is to establish Bianchi's intended
  codes/positions from a period Bianchi parts/correction document or an original
  bike's numbered calipers and measured reaches. The duplicate missing-row
  mention was removed from TODO; one precise fitment action remains.
- Source URLs/pages and conclusions are retained here; this task's downloaded
  scans, source HTML and helpers were removed after the review. The old
  `/private/tmp/existing-source-review/` directory was empty and was not altered.
