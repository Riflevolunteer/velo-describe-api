# Cross-catalog notes catalogs processed so far

## Cross-catalog notes

- The Nuovo Record 1020/A rows are dated per version in the DB (v3 1970-81,
  v4 1982-84, v5 1985-87); the bike generator's year-ranged override follows
  those. Keep them in step if either changes.
- Part numbers are reused across eras (1013/1 is a Gran Sport lever in 1953
  and a Record lever in 1967; 1040 is Gran Sport pista in 1960 and "Record
  Pista" later). Diff by number, then read the DB title before deciding.
- **Redundant velobase weights (2026-10-01, Simplex, at the user's
  call):** done when descriptions were still treated as add-only (since relaxed: velobase is not the authority, see SKILL.md). A
  velobase "(Spec)" weight was removed only where it exactly equals a
  catalogue weight for the same model on the same row. Removed text, so
  it can be restored: 2575 "126 grams (Spec)", 4616 "287 grams (Spec)",
  6209 "71 grams (Spec)", 6216 "86 grams (Spec)", 7263 "108 grams
  (Spec)" (each sat right after "France, "). Kept on purpose: every
  "(Actual)" and "(avg)" weight (measured specimens are independent
  evidence of real variance), (Spec) weights that only approximately
  match (6212 105 vs 105.5g, 4603, 4632), derived matches (6231 180g =
  2x90g), rows where the catalogue note doesn't restate the weight
  (2567, 6240), and 4617, where the weight anchors the SP wording.
  Weights on catalogue-inserted rows (e.g. 7281-7284, 7305) are
  themselves catalogue figures, not velobase ones.
- **Description/title sweep (2026-10-02, Simplex + Shimano 1972, after
  the "velobase is not the authority" rule).** 54 rows that had collected
  stacked "1978 catalog: ... Sep 1981 catalog: ..." fragments were
  rewritten into one consolidated description each (what the part is,
  then each figure with its catalogue year). Dropped: merge audit notes
  (the deleted rows are recorded above), velobase "(Spec)" weights that
  repeated a catalogue figure, and stale qualifiers. Kept: measured
  "(Actual)"/"(avg)" weights and "aka Super LJ ..." names. 4615 S0 gained
  the Sep 1981 S0/P figures (250g, 28t) that hadn't fit before. 6181 was
  also taken out of group 141 "Light Action". Old titles, so later
  sources using them can still be matched:
  - Shimano: 4498 "Crane D-501" -> "D500 / DB-100, Crane"; 4499 "Crane GS
    D-510" -> "D510 / DB-110, Crane G.S."; 4439 "Lark-W" -> "D280 /
    DD-300, Lark-W"; 4437 "D-600 Titlist" -> "D600, Titlist"; 4438
    "D-610 Titlist-GS" -> "D610, Titlist G.S."; 4444 "Eagle-SS" -> "D310,
    Eagle S.S."; 2461 "Thunder Bird GTO" -> "E111, Thunder Bird G.T.O.";
    6163 "L-600 Fingertip Control Barcons" -> "L600, Bar-End Control";
    6181 "L-422, Light Action" -> "L422, G.T. Console (5D)"; 6124/6120
    "Super Shifter (single)/(twin)" (originally both "Super Shifter") ->
    "L251, Super Shifter (single)" / "L252, Super Shifter (twin)".
  - Simplex: 2549 "302" -> "SJ A302"; 2576 "SJ A223 (triple)", 7264 "SLJ
    A423 (triple)", 2574 "SJ A103 (Triple)" -> suffix dropped; 4617 "SX
    810 T" -> "SX810 T"; 5904 "SLJ 6164" -> "SLJ6164"; 6209 "(Zytel
    levers, square finger pads)" -> "S3448"; 6231 "MB Silver Range" ->
    "MB2600"; 6212 "SJ (2nd type)" -> "SJ6311"; 6240 "SLJ (4th type,
    black anodized)" -> "SLJ5057 (black anodized)"; 6239 "SLJ (4th
    type)" -> "SLJ5057"; 6216 "SXP (2nd type; stem mount)" -> "SXP 4506".

## source_ref backfill (2026-10-05)

- 1,137 velobase rows (`source_ref` 1) retagged to the catalogue that last
  changed them, matching the "last source to change this row" rule in
  SKILL.md §4. Evidence: applied SQL from earlier sessions, ids in these
  logs, and catalogue cues in descriptions.
- Added `data_source` rows for six Campagnolo catalogues ingested without
  one: 108 Catalogo N. 13 (c. 1955), 109 Catalogo N. 14 (c. 1960), 110
  Dealer Parts Catalogue (1988), 111 "Euclid" brochure (September 1988),
  112 range brochures GB (June and September 1990), 113 range brochure GB
  (January 1991). Use these ids for any re-ingestion.
- Left as velobase: 10 Simplex rows whose only change was a typo or merge
  with no catalogue named, and 30 rows touched only by dedupe/sweep passes.

## Duplicate merge across velobase-heavy brands (2026-10-06)

Not a catalogue pass: a title / part-number duplicate scan over Shimano,
SunTour, Campagnolo, Simplex, Mavic, SR, Weinmann, Gipiemme, Dia-Compe and
Zeus, user-approved. Survivor got any years / weights the deleted row had.
No bike links or overrides pointed at deleted rows (3008 and 3353 kept
theirs). Deleted (id, title, source_id -> survivor):

- 4495 "Shimano Deore XT" (RD, 1994-95, `22DC1316-310E-4AEE-91C9-7C2FBBD22DE3`) -> 4496
- 4719 "SunTour Accushift alpha-4050" (RD, 1988, `BB2C5B9B-740A-4B8B-8B18-3C604D8D6114`) -> 4720 (group 251 -> 231)
- 4698 "SunTour Hero Version 1" (RD, `D958F463-EBE6-4534-8EA0-E6396D932D1F`) -> 4746
- 4699 "SunTour Hero Version 2" (RD, `1D780CF1-DA06-4ACC-ACD5-EAE2FF4A7593`) -> 4747
- 4716 "SunTour U" (RD, 354g, `E9CD72CF-85B9-4A17-865E-F01904E72298`) -> 4717
- 2230 "SunTour Alpha (6sp)" (Freewheels, 1980, `F7397AA0-5BF9-43D1-8CC8-CFF5C4DC3F3B`) -> 2232
- 4555 "Simplex Rigidex 35 (steel pulleys; ...)" (RD, 1954-58, `A3765D6E-6B35-431A-B1A7-A015EA3AC6F5`) -> 4556
- 6581 "Mavic (flat angled  planes)" (Stems, `10602BE5-E2CE-4B5A-8CD5-075150FB8271`) -> 6582, retitled "Mavic (flat, angled planes)" (was "Mavic (flat, angled  planes)")
- 3009 "Gipiemme Special (Pista)" (Headsets, 1980, `210CA368-E960-42E3-AF81-AA28AD8E4ECD`) -> 3008
- 3354 "Gipiemme Sprint" (Hubs, 525g, `C691F1D6-13DC-4EEB-8F7D-84CF06362415`) -> 3353
- 5787 "Gipiemme Crono Special" (Seat Posts, `0DE0711C-E514-4AFC-93B5-79DCE3A06DFB`) -> 5786
- 1754 "Sakae/Ringyo (SR) Sakae SX  Ovaltech" (1986, `D26C3B9D-EB40-466F-A661-CF9202C6E5C4`) and 1763 "Sakae/Ringyo (SR) SX OvalTech" (1987, `CDDA6052-7A33-4E97-9B52-A9B1FA1452CC`) -> 1766, now "Sakae/Ringyo (SR) SX OvalTech" 1985-1987 (was "... Sakae SX Ovaltech")
- 2648 "SunTour FD-2000, Superbe Pro (endless band)" (1981, bare, `3484717E-1DEF-476B-BD7B-3F76F7B80484`) -> 2652
- 2714 "Shimano CB-400" (1970, 833g, `C1D257B5-074D-4987-AD4F-67578DB3E63B`) -> 7509; 2715 "Shimano CB-410" (1970, 908g, `74693F62-3E03-4855-8A87-0B0560622EAC`) -> 7510
- 3102 "Shimano HP-7500 (NJS), Dura-Ace (Track)" (1970-84, 153g, `B44C65E9-0DAB-41AE-930B-49F30905E17F`) -> 7126
- 6119 "Shimano 333" (Shifters, `52319435-7DF0-4363-A741-E65C14C4BAF1`) -> 6136
- 680 "Dia-Compe MX-901" (Brakes, `962C41BA-1C00-4B67-AE78-3549825B2E8D`) -> 8088
- 3923 "Sakae/Ringyo (SR) Silstar SP-11" (Pedals, 1970, 185g, `036524D0-6997-4104-9F89-D654F3410143`) -> 8240
- 1118 "Weinmann AG Cyclocross 420" (Brakes, 1980, `8FFE15D4-6571-4220-A9B2-44130C50C0C8`) -> 1164
- 1139 "Weinmann AG Vainqueur 610 (black label)" (`BB2C2A19-CBEB-442A-AAFA-4108D8883790`) -> 1136
- 1151 "Weinmann AG Vainqueur 750 (black label)" (1980, 378g, `15A8EFBD-1607-48BD-A4FB-29FE1CD1A994`) -> 1148

Left as weaker suspects: SunTour XCD 6000 bare vs coded rows (7 categories),
164-166 sealed BBs, 1220 / 1223 CS-AP20-S8 XC Comp vs XC Pro, Shimano 1412 /
1413 Dura-Ace 7400 chain, SunTour 2619 a-4050 vs 2633 Edge 4050 FD,
Weinmann 1129 / 1130 570.
