# Nisi catalogs processed so far

## 5138/5145 original-specimen review — 2026-11-18 (applied and validated)

Completed the bounded original-gallery comparison against maker sources
415/416. No general source hunt or speculative new model insertion. The
earlier 5138 combined-name hold below is superseded by this reconciliation;
5145's exact coded identity/weight still needs physical or labelled evidence.

- **5138**, [original listing](https://www.velobase.com/Pages/ViewComponent.aspx?ID=1B17904A-B6A3-4FAA-AC46-933972520C7B):
  all five photographs inspected. The primary gallery includes packaging
  explicitly labelled **PISTA SPECIALE gr.280** (28 holes); a separate
  packaged pair reads **PISTA M-20**, 32 holes. These are different labelled
  specimens, not evidence for one combined “M20 Pista Speciale 280g” model.
  Main photograph `A96B3238-B50B-4617-A950-4B37B63B53B8.jpeg`, weight-label
  photograph `E8FC45F0-6372-4FB2-896C-B087370E3AA4.jpeg`, and M-20 label
  photograph `95F2987B-622B-4049-8DB8-3A1CD05A1D80.jpeg`, all under
  `https://www.velobase.com/CompImages/Rims/`. The remaining two photos show
  the rim bed and separately packaged rims; none provides a measured weight.
- Visually re-read [c.1977 maker PDF p.2](https://gipiemme.com/wp-content/uploads/2023/11/NISI-Catalogo-1977.pdf#page=2)
  and [c.1985 maker PDF p.10](https://gipiemme.com/wp-content/uploads/2023/11/NISI-Catalogo-1985.pdf#page=10):
  **00120 Pista Speciale 280g/19mm**, **00130 Pista m.20 350g/20mm**. This
  supports retaining stable 5138 for its primary **280g Pista Speciale**
  specimen, retitled `Nisi 00120, Pista Speciale`. Do not assign that weight
  to the separately labelled M-20. Retain M-20's existence/evidence here;
  no new 00130 row was added, consistent with the earlier no-insert choice.
  The listing's 19.5mm width and mixed drillings are not used to choose a
  model; the actual package name/weight and maker table provide the match.
- **5145**, [original listing](https://www.velobase.com/Pages/ViewComponent.aspx?ID=5A1AC8D3-60DF-438A-BD15-6016A21D7BE8):
  all three photographs inspected (`460D3504-EDFC-46EE-B63D-5CD939A2B77B.jpeg`,
  `FAA7EF22-26E7-47AD-B4DD-935E646AFFD2.jpeg`,
  `47E803BD-E615-464C-A661-7CA241C9DBE4.jpeg`, same Rims directory).
  They show a built clincher wheel, knurled sides, Schrader valve and NISI
  TORO stamping; no model code, scale or weight measurement. The page reports
  27in/630mm, 36H, 24mm outer width, 13mm height, aluminium and polished finish.
  Crucially it explicitly calls **580g (Spec)** and says the model name was
  **deduced from catalogue scans**, with only NISI TORO stamped on the rim.
  The figure is not reported as measured; its exact copied source is unknown.
- Maker [c.1977 PDF p.4](https://gipiemme.com/wp-content/uploads/2023/11/NISI-Catalogo-1977.pdf#page=4)
  and [c.1985 PDF p.15](https://gipiemme.com/wp-content/uploads/2023/11/NISI-Catalogo-1985.pdf#page=15)
  distinguish 00410 Sport Toro Stretto 520g/24mm and 00510 Super Sport Stretto
  600g/24mm; earlier lettered-code list has a 580g Super Sport listing.
  Shared width/profile and a borrowed weight cannot identify this loose
  specimen or justify replacing 580 with 520/600. Keep 5145's current title
  and dates; mark attribution/weight as unconfirmed in its description.

### Applied changes and restoration

**5138:** title/search text `Nisi M20 Pista Speciale` →
`Nisi 00120, Pista Speciale` / `Nisi 00120 Pista Speciale`; source_ref
**262 → 416**. Retain **1970–1988**, UUID and all ownership fields.
Old description: `Nisi M20 Pista Speciale, Italy, 280 grams (Spec), weight per rim.`
Applied description (**144 characters**): `Alloy tubular track rim, 00120 Pista Speciale; 280g, 19mm, smooth countersunk drilling with washers. Distinct from 00130 Pista m.20 (350g/20mm).`

**5145:** description/source only, source_ref **259 → 1** (original specimen);
retain **1970–1985**, title/search text, UUID and ownership fields.
Old description: `Nisi Sport Toro Stretto, Italy, 580 grams (Spec)`
Applied description (**232 characters**): `Uncoded polished alloy clincher rim, 27in/630mm, 36H; reported 24mm wide, 13mm high; Schrader drilling, knurled sides. Stamped NISI TORO; Sport Toro Stretto attribution tentative. Listed 580g is unverified, not reported as measured.`

Restore the exact old fields above, guarded on the applied new fields,
if reverting. Retained legacy date ranges are not newly established
production boundaries. Earlier catalogue date evidence remains recorded
here when source_ref changes to the latest source used for enrichment.

- Live search found no existing 00120/00130 row beyond this uncoded target;
  no duplicate insert needed. Nisi duplicate report has three generation
  and three configuration pairs; none involves 5138/5145.
- Both targets have **zero bike links**. Live search found no bike specs
  explicitly naming Nisi M20, Sport Toro, Super Sport or Pista Speciale.
  The existing `nisi pista special` override remains **9225**, 00110/230g.
- Read-only before/proposed-title simulation over **107 loaded catalogues**,
  **23,168 specs**, returned identical reports: 23,153 unchanged, 15 existing
  unrelated lost mappings, zero gained/changed/missing/ambiguous. No generator
  SQL was written. The override comment was clarified without changing code.
- User approved the change set. Guarded SQL affected exactly **two rows**,
  then **zero** on rerun. Exact readback verified both descriptions, lengths,
  5138's title/search text and source **416**, 5145's source **1**, both
  retained date ranges, UUIDs, brand **509**, category **16** and NULL groups.
  Sources resolve correctly; both rows retain zero bike links. Component
  count remains **10,764**. No inserts, merges, date changes or bike writes.
- Actual post-load mapping comparison across **107 loaded catalogues** and
  **23,168 specs** has identical scope, files, summary and findings to the
  saved baseline. Duplicate report remains three generation and three
  configuration pairs, with no pair involving either target. No new mapping
  or duplicate ambiguity introduced.
- Downloads, renders, specimen HTML, simulation script, duplicate output,
  applied SQL and before/after mapping files removed after successful
  readback, zero-change rerun and mapping comparison. Durable evidence and
  restoration values remain above. Only 5145's missing physical/model
  evidence remains waiting; the original-photo review is complete.

Earlier Nisi rows came from velobase and the La Bicicletta guides (`data_source` 259 / 262 / 357; see
cross-catalog-notes.md). The maker archive at https://gipiemme.com/en/catalog/ (Nisi became part of Gipiemme) also
holds `NISI-Catalogo-1975 / 1980.pdf`; see the end of this file.

## Nisi "Cerchi in lega leggera di alluminio" catalogue (c. 1977, gipiemme.com), `data_source` 415

- Label `Nisi Cerchi in lega leggera di alluminio catalogue (c. 1977)`, country IT. Source:
  https://gipiemme.com/wp-content/uploads/2023/11/NISI-Catalogo-1977.pdf (10 pp, 640 x 640 images, legible). Officina
  Meccanica Nisi di Alberto Nisi, 10021 Moncalieri (Borgo S. Pietro), via Carducci 5, tel (011) 66.16.13, C.C.I.A.
  242880; printer Tipolitografia Gattiglia, Torino. Pages: cover; Pista; Corsa strada; Sport (two pages); Bambino corsa /
  sport; condizioni di vendita; "Listino prezzi riservato" (lire, normal / anodised, eyelets loose or fitted); map.
- **Undated.** 1977 is the maker's upload label only (its Gipiemme "1982" label is wrong by about five years). Its prices
  are identical to the undated lettered-code list (`art. 101a ... 401e`, the maker's "1975" file), and it has no
  Solidal (first attested here on 1979 Colnago bikes). Treated as c. 1977; every `year_from` move below rests on that
  and is a judgement call.
- Range and codes (weight g / width mm, 28in unless stated): Pista 00.100 / 00.110 / 00.120 Pista speciale 200 / 230 /
  280 (19), 00.130 Pista m.20 350 (20); Corsa strada 00.200 / 00.210 Sludi Mod. 290 / 320 (19, eyelets fitted only),
  00.220 Super corsa TN NT 350 (21, smooth), 00.230 Super corsa 350 (21, knurled), 00.240 Corsa Toro 350 (21),
  00.250 Corsa stretto 430 (20), 00.260 Corsa Campione del mondo 430 (21); Sport clinchers 00.400 / 00.410 / 00.415
  Sport Nisi Toro / stretto 1 1/4 / strettissimo 1 1/8 520 (26 / 24 / 22), 00.500 / 00.510 Super sport Nisi /
  stretto 600 (26 / 24), 00.600 Sport Nisi tipo R America 630 (33), 00.610 Sport Toro Endrik Belga leggero stretto 520
  (24), 00.620 Sport Belga pesante 630 (27), 00.700-00.730 Mod. W 16 / 20 / 24 / 26 x 1.75 (290-650, 32); Bambino
  corsa 00.800-00.840 (18-26in, 21), Bambino sport 00.900-00.950 Strada Bambino Nisi 14-24 (25). "Svasato" = flared
  holes, "zigrinato" = knurled sides, "con ranelle" = with washers.
- Applied 2026-11-15 (user approved; 19 rows, `source_ref` 415). **`year_from` -> 1977** (old values in brackets):
  9224 00100 Pista (1985), 9225 00110 Pista Speciale (1982), 9226 (1985), 5146 (1985), 9228 00250 Corsa Stretto (1982),
  9229 00260 (1985), 5143 Sludi 320 (1985), 9236 / 9240 / 9237 / 9238 / 9239 Sport (1985), 9231-9235 Bambino corsa (1985).
  Retitles (`search_text` rewritten): 9226 "Nisi 00220, Super Corsa TH TH" -> "Nisi 00220, Super Corsa TN NT" (both
  lists print TN NT); 5146 "Nisi Super Corsa" -> "Nisi 00230, Super Corsa" (judgement: the uncoded 1985-guide name
  taken as the knurled twin of 00220). Descriptions rewritten on 9224 / 9225 / 9226 / 5146 / 9228 / 9229 / 5143, and
  description only (years kept 1970) on 5131 Corsa Toro (code 00240) and 5142 Sludi 290 (00200). 9228 records the
  width difference: 20mm here, 21mm in the later guides. Bike overrides 'nisi pista special' (9225, 1982-88) and
  'nisi corsa stretto' (9228, 1982-88) still fall inside the rows' ranges; no link changes.
- Not inserted (user's choice): 00.600 tipo R America, 00.700-00.730 Mod. W, 00.900-00.950 Strada Bambino (11 rows);
  no bike spec names them.
- Left alone: 5138 "M20 Pista Speciale" (280 g conflates 00.120 Pista speciale 280 and 00.130 Pista m.20 350);
  5145 Sport Toro Stretto (velobase 580 g matches the lettered list's Super Sport Stretto, not this rim's 520 g);
  5147 bare "Nisi Toro" (could be 00.400). Velobase 5131 title "(no eyelets)" kept; the catalogue sells Corsa Toro
  with washers.
- Does not cover the unlinked 1973-76 Raleigh "Nisi Sprint Alloy" / "High Pressure Alloy" specs (probably export
  clinchers).

## Nisi "Cerchi per biciclette in lega leggera di alluminio" catalogue (c. 1985, gipiemme.com), `data_source` 416

- Label `Nisi Cerchi per biciclette in lega leggera di alluminio catalogue (c. 1985)`, country IT. Source:
  https://gipiemme.com/wp-content/uploads/2023/11/NISI-Catalogo-1985.pdf (20 pp, 1237 x 1762, Italian / English).
  Officine Meccaniche Nisi S.n.c., Moncalieri, tel (011) 6061613 (the later 7-digit number); Studio Lainer, printed by
  Sarig, Torino. **Undated;** maker label 1985, supported by "da quarant'anni" (forty years of rim making) and by the
  1985 La Bicicletta guide (259), which prints the same codes.
- Pages: 1 cover; 2, 18 blank; 3-6 company / process (knurled tube bed, joint, drilling); 7 Corsa cronometro (00.200 /
  00.210 Sludi 290 / 320) and Corsa cross (00.220 Super corsa TN NT); 8 Corsa strada (00.215 Countach 350 / 20, 00.217
  Solidal 350 / 20 hard anodised, 00.218 Ekip 410 / 21 hard anodised, 00.230, 00.240, 00.130, 00.250 Corsa stretto 430
  / **20**, 00.260); 9 symbols; 10 Pista 00.100-00.130 (weights are with fitted washers; eyelets add about 30 g);
  11 Mixer 00.420 aero profile 400 / 19; 12 Corsa bambino 00.800-00.840 (all Pista / Corsa / Laser / Mixer rims 700C);
  13 / 14 Laser 00.219 410 / 19 and Laser leggero 00.219 L 350 / 19, aero profile, fitted washers only; 15 Sport smooth
  (00.400-00.510) and shaped profile (00.610 / 00.620); 16 Sport viaggio 00.600 and Mod. W 00.700-00.770 (new: 00.750 /
  00.760 / 00.770 W 28 5/8, 26 3/8, 24 3/8); 17 Strada Bambino 00.900-00.950; 19 export page; 20 back cover.
- English captions fix the c. 1977 wording: "svasato" = countersunk, "ranelle (applicate)" = (fitted) washers,
  "boccole" = eyelets.
- New vs c. 1977: Countach, Solidal, Ekip, Laser, Laser leggero, Mixer, three W sizes. Dropped: none.
- Applied 2026-11-15 (user approved; 14 rows, `source_ref` 416): **5132 Countach (no eyelets) NULL -> 1985-1985**;
  **5133 Countach (with eyelets) `year_from` 1996 -> 1985** (judgement: the two VeloBase specimen rows taken as the
  fitted-washer and eyelet builds the catalogue offers). Descriptions with codes / specs: 5144 Solidal (00217, keeps
  VeloBase 424 g), 5136 Laser (00219), 9230 Laser Leggero (00219 L), 5140 Mixer (00420; 1985 400 g / 19 mm vs 1996 425 g /
  18 mm), 9227 Ekip. Wording corrected (countersunk, washers vs eyelets) on 9224, 9225, 9226, 5146, 9228, 5142, 5143.
  No title, `year_to` or link changes; codes not added to titles (would narrow eBay `search_text`).
- Left alone: 5137 Laser (with eyelets) (1985 sells Laser with fitted washers only); 5138 M20 Pista Speciale (00.120 and
  00.130 are separate here too); 5145 / 5147 as above. Not inserted (user's earlier choice): 00.120, 00.130, 00.400,
  00.600, 00.700-00.770, 00.900-00.950.

## Other Nisi files on gipiemme.com (read 2026-11-15, not ingested)

- "1975": undated 6-page lettered-code price list (art. 101a-401e, the same lire prices as the c. 1977 list), Moncalieri
  tel 661613; covers the same range minus Sludi. Kept as corroboration only.
- "1980": a one-page advert (Corsa pista / strada, Sport, Bambino; Solidal and Countach logos), no codes.
