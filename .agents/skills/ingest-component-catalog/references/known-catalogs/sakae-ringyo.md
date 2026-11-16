# Sakae Ringyo (SR) catalogs processed so far

## Sakae Ringyo (SR) "Sakae Bicycle Parts" Catalog No. P-5 — Aug 1980 (cyclespeugeot.web.fc2.com, 12pp)

- `data_source` 123, label "Sakae Ringyo (SR) Sakae Bicycle Parts Catalog No. P-5
  (Aug 1980)". Source: http://cyclespeugeot.web.fc2.com/reminiscence/sakae80.html
  (save0047.jpg..save0058.jpg, 800x1130 each = 12 printed pages). Cover reads
  "CATALOG No. P-5"; footer on the Original Component Table page reads
  "AUG '80 PRINTED IN JAPAN". This is the earliest SR source on file — predates
  both Catalog No. 18 (c. 1982) and P-7 (Sep 1982) by about two years.
- Covers: Royal/Super Apex/Apex/Custom/Silstar chainwheels (RY-5ESL/5/S5,
  SAX-5LA-EL/5RG/5TG, AX-5DLASL/5DLA/5DRG/5SDIIAH, CT-5LA-EL/5RG/5TG, SN-5DLA-EL/
  SNB-5DLA-SL/SN-5DRG-AH/SN-5SDIIAH/SN-5SDIIE/SNS-5SE/SN-S/SNA/SN-5DX/SNB-5DX/
  SNS-5DXC); BB sets (Royal ESL/Royal, Super Apex, Apex, SC, SI); chain guards
  CG-101/110/111/960S/960SS; tools T-902/905-911; handlebar bends (FSC/FSG,
  RY-978/RY-RC, WS, WR-420, RND-420, RNS-395, SC-713, 7D-701, CTD, CTS, NA-312-90
  "former name NL-90", NA-324, NA-321-90, NS-321N, ARA-101 "former name AR-L",
  ARA-102-90, NA-323, NA-340-90); handle stems (FS, RY-ESL, RYII, RY-TY, AX-AH,
  CT, CS, SR, SAS-50AH/E, AS-30E, JUN-50x150/180, SW-50x135/165); pedals (SP-11,
  SP-100AL/BL/CP, SP-150(SE), SP-200AL/BL, SP-350, SP-360, SP-450/451, SP-460/461,
  SP-550FB/FW + accessories); seat pillars (FS-P5, RY-P1ESL II, RY-P1 II, CT-P3,
  CT-P5, CT-P6/P6C, SSP series, ASP); motocross parts (MB-300 bar, MS-400 stem,
  MP-120 pedals, MC-100 chainwheel); closes with specification cross-reference
  tables for every category.
- Why this one was worth tracking down: the P-7 reconciliation pass (below)
  flagged several items as "left unresolved, flagged for a decision" because
  P-7/No. 18 alone couldn't settle them. This catalogue, being independent and
  earlier, settled two of them outright:
  - **7882/7883 "Super Apex"/"Apex bottom bracket set"**: P-7 couldn't tell if
    the DB's 315g/355g was a full assembled-set weight or axle+cups alone.
    This catalogue's own "SUPER APEX BOTTOM BRACKET SET ... Weight: 315g" and
    "APEX BOTTOM BRACKET SET ... Weight: 355g" are an exact match as full
    assembled-set weights. Confirmed, not merged (they were never actually
    duplicates, just unconfirmed).
  - **7897 "AR-S / AR-L, All-Rounder"**: catalogue states outright "Model
    ARA-101 ... (Former model name AR-L)", weight 180g, matching the DB's
    AR-L split exactly. Settles that half of the row (AR-S remains
    unresolved — no "AR-S" bend appears in this catalogue either).
  - Also independently corroborates two judgment calls from the P-7 pass:
    NA-312-90's former name "NL-90" (used to match row 7895), and SP-200AL/BL
    being a "Track" type (the catalogue's own spec table says "Track" for
    SP-200), already used to retitle row 3929 in the P-7 pass.
- Year extensions applied (27 rows): catalogue proves these parts already
  existed in Aug 1980, two years before their current `year_from` of 1982
  (set by the No. 18/P-7 passes) — all exact weight matches: 7876 SI-5DRG AH
  (610g, catalogued here as "SN-5DRG-AH" — Sakae evidently renamed the SN-
  prefix to SI- between 1980 and 1982, same part), 7878 SI-5SDIIAH (585g,
  "SN-5SDIIAH"), 7879 SI-5SDIIE (860g, "SN-5SDIIE"), 7882 Super Apex BB set
  (315g), 7883 Apex BB set (355g), 7884 RY-978 (290-305g), 7885 RY-RC (280g),
  7887 WS (305-310g), 7888 CTD (305-310g), 7890 CT-S/CTS (615g), 7892 RN-S/
  RNS-395 (680g), 7893 SC/SC-713 (530g), 7894 7D/7D-701 (630g), 7895 NL-90/
  NA-312-90 (220g), 7902 SR-AH/SR-E (305-365g range), 7905 SW-50x135 (280g),
  7907 RY-P1ESL II (210g), 7909 SSP series (86-193g range), 8219 FSC
  (310-335g), 8220 FSG (310-335g), 8221 ARA-102-90 (200g), 8227 NA-323
  (250g), 8228 NA-340-90 (220g), 8233 CS Custom-S stem (370g, 80mm
  extension), 8234 CT Custom stem (280-330g), 8235 SAS-50AHx190/SAS-50Ex190
  (370g/380g), 8238 SW-50x165 (300g). `source_ref` repointed to 123 on all.
- New (3 rows, 1980-1980): Custom chainwheels CT-5LA-EL (625g, component_id
  8250), CT-5RG (630g, 8251), CT-5TG (660g, triple, 8252) — genuinely absent
  from the DB; only the bare placeholder row 1746 "Sakae/Ringyo (SR) Custom"
  (no spec, 1980-1980) existed before.
- Deleted (user decision, same pass): three bare placeholder rows, no
  bike_spec links and no `COMPONENT_OVERRIDES` references (checked first) —
  1746 "Sakae/Ringyo (SR) Custom" (Cranksets, no spec, velobase,
  `7C3884AE-E2CD-4ED9-A32E-B1934F767D1E`), superseded by CT-5LA-EL/CT-5RG/
  CT-5TG (8250-8252) above; 1738 "Sakae/Ringyo (SR) Apex" (Cranksets, no
  spec, no years, velobase, `88779F17-2E4F-4ECA-B056-003936DB1422`),
  superseded by the existing AX-/AA- Apex chainwheel rows; 3513 bare hub
  "Sakae/Ringyo (SR)" (Hubs, no spec, no years, velobase,
  `98876B7B-7217-4082-88B4-EEDA41175B25`), superseded by the specific
  SH-100/300 Silstar hub rows (7913-7916, 8239).
- Left unresolved / flagged for a decision, not touched:
  - 1759 "Silstar" (Cranksets, 183g, non-driveside arm only) — carries
    independent measured-weight evidence, not a bare placeholder, so a
    merge rather than a straight delete if it's ever addressed.
  - **8240 SP-11, Silstar Pedal-11** (380g, year 1982-1982): this
    catalogue's own SP-11 is 415g(14.5oz) — a real mismatch, not applied.
    Could be a different sub-variant or a transcription error in either
    source; needs the physical part or a third source to settle, so left
    untouched rather than guessed at.
  - SP-460/461 (catalogue, 440g/400g) vs DB's SP-466/SP-468 (420g/410g):
    different codes, weights close but not exact — read as a later
    generation/renumbering rather than the same part. Not merged.
  - 8246 SP-550FB/FW (DB 500g) vs catalogue's SP-550 520g(18.2oz): a
    20g gap, inside plausible rounding/printing drift between 1980 and
    1982 editions but not an exact match — left untouched rather than
    bundled in with the exact-match year extensions above.
  - 7901 AX-AH (DB range 300-400g) and 7904 SW-50AH/SW-50E (DB 330g),
    8236/8237 AS-40E/AS-25E: catalogue's Apex-AH and Swan-AH/E stem entries
    only show a narrower weight range (320-340g) or don't appear under
    these exact codes at all (no AS-40/AS-25 on this printing, only
    AS-30Ex230) — plausibly the same parts measured over a wider size run,
    but not an exact-match confirmation, so `year_from` left at 1982.
  - Chain guards, tools, and motocross parts noted above are out of scope
    for `component_category`, same convention as the P-7/No. 18 passes.

## Sakae Ringyo (SR) "Sakae Bicycle Parts" Catalog No. P-7 — Sep 1982 (user-provided scan, 12pp)

- `data_source` 122, label "Sakae Ringyo (SR) Sakae Bicycle Parts Catalog No. P-7
  (Sep 1982)". Source: `Sakae_NoP7.pdf`, 12pp, dated for real — cover reads
  "CATALOG No. P-7", back page "SEP 82 PRINTED IN JAPAN". This resolves the
  open question from the Catalog No. 18 pass below: velobase cited "SR
  Catalogue P-7 (1982)" as the actual source for several rows that pass
  guessed at c.1982 for; this scan confirms that date was right.
- Covers: Chainwheels (Aerox AE-5LA/5RG/5TRG, New Apex AA-5LA/5RG3/5SD3,
  Super Custom CT-5LA/LA-SL/5RG/5TG, Custom CTC-5DLA2/5DRG2/5SD2AH/5TSD,
  Custom DX CTC-5LG2/5DXM2/5DXC2 + Custom.A CAC-5DXC3/CAB-5DXC3/5TDXC3 +
  singles CTB/CTC/CAB/CAC-5DXC1/3, Silstar chainwheels SNS-5SC2/5SE2/SNA-5/
  3.5, One Piece Cranks OPC-A/S175); Bottom Bracket sets (Aerox D-3.../D-5...
  axles, AX/SC/SI sets, OP-ST/OP-SM conversion axle); chain guards CG-101/
  110/111/550SC; Handle Bar Bends (Foursir FSC/FSG, Royal RY-978/RY-RC,
  World WS/WR-420/RND-420, Randonneur RNS-395, Custom CTD/CTS-360/390,
  Special SC-713, 7D-701, North-Road NA-312-90/312-55/324/340-90, All-
  Rounder ARS-105N/ARA-101/102-90/105-90/106/107, MS-825C); Handle Stems
  (Foursir FS, Aerox AE, Royal RY2/RY-TY, Apex AX-AH, SR, Custom CR/CU/CS/
  CT, SAS-50AH/E x190, AS-40E x190, AS-25E x190/230, Swan SW-50x135/165,
  Jun JUN-50x150); Hubs (Silstar SH-100/300 QR/SD, SH-600); Special Tools
  T-902/905-912; Pedals (Silstar SP-12/11/100/150/152/200/360/364/450/451/
  466/468/550/562/468/601/511); Seat Pillars (Foursir FS-P5, Royal RY-P1,
  Custom CT-P3/P5/P5A/P6, Alumi ASP, SDC saddle clamp); Pedal Accessories
  AC-30/40/45, AS-30, AP-01/02/03, AR-02. Closes with an Original Component
  Table cross-referencing which chainwheel/pedal/bar/stem/post/hub combos
  Sakae specified together on Aerox, Super Custom and Custom DX groupsets.
- New (54 rows, 1982-1982): New Apex AA-5LA/5RG3/5SD3; Custom CTC-5DLA2/
  5DRG2/5SD2AH/5TSD; Custom DX CTC-5LG2/5DXM2/5DXC2; Custom.A CAC-5DXC3,
  CAB-5DXC3, CAC-5TDXC3, singles CTB-5DXC1/CTC-5DXC1/CAB-5DXC3/CAC-5DXC3;
  Silstar chainwheels SNS-5SC2/5SE2, SNA-5/3.5; One Piece Cranks OPC-A,
  OPC-S175; conversion axle OP-ST/OP-SM; handlebars FSC, FSG, ARA-102-90,
  ARA-105-90, ARA-106, ARA-107, ARS-105N, NA-312-55, NA-323, NA-340-90,
  MS-825C; stems RY2, CR, CU, CS, CT, SAS-50AH/E x190, AS-40E x190, AS-25E
  x190/230, SW-50x165; hub SH-600; pedals SP-11, SP-360, SP-364, SP-450/
  451, SP-466, SP-468, SP-550FB/FW, SP-562, SP-601, SP-511FW/FB.
- Enriched/confirmed (25 rows): 1736 AEC-200 (AE-5RG) — was bare, filled in
  full spec, year_to 1980->1982. Ten No.18-sourced handlebar/stem/hub/
  seatpost rows (7884, 7885, 7886, 7887, 7888, 7890, 7892, 7893, 7894, 7895,
  7900, 7901, 7904, 7905, 7907, 7908, 7913-7916) had their descriptions
  rewritten to drop the redundant "SR Catalog No. 18 (c. 1982):" citation
  prefix (source_ref now carries that) and source_ref repointed at this P-7
  source since it's the real, dated document. Two legacy rows (5859, 5862)
  had a hardcoded "SR Catalogue P-7 (1982)" citation baked into their
  description from before source_ref existed — stripped and repointed the
  same way; 5862 "Four-Sir P5" also got year_to extended 1980->1982 since
  the catalogue shows it current as of Sep 1982. 3922 SP-100AL/BL/CP
  repointed source_ref only (description was already clean). Noted
  alternate catalogue-page codes in description text rather than renaming
  titles, to avoid breaking existing bike_spec links: 7890 "CT-S" = this
  catalogue's "CTS-360/390"; 7892 "RN-S" = "RNS-395"; 7893 "SC" = "SC-713";
  7894 "7D" = "7D-701"; 7895 "NL-90" = "NA-312-90".
- Left unresolved, flagged for a decision rather than guessed at:
  - 1735 AEC-100 (AE-5LA): DB says 640g (Spec), this catalogue says 440g.
    Not touched — could be an OCR-era velobase error or a genuinely
    different sub-variant; needs the physical part or a second source to
    settle.
  - 1737 AEC-300, AEROX (1983-1983, 680g Spec) vs this catalogue's AE-5TRG
    (NEW in Sep 1982, triple, 700g): weight is close but not exact and the
    DB's year (1983) postdates this catalogue by a year. If they're the
    same part, year_from should pull back to 1982. Not merged.
  - 7882/7883 "Super Apex"/"Apex bottom bracket set" (315g/355g) vs this
    catalogue's AX/SC/SI cup-and-bearing sets (125-130g per set, not a full
    assembled-BB weight) and the Aerox D-3.../D-5... axle sets: naming and
    weight bases don't line up cleanly enough to merge without checking
    whether the DB figure is axle+cups together. Not merged, not inserted.
  - 3929 SP-200AL/BL: resolved. Retitled "Silstar (rat-trap)" ->
    "Silstar Pedal-200AL, BL" (catalogue's own name) and rewrote the
    description from "Rat-trap pedal ... velobase: Track" to "Track type,
    quill type pedal ... Foot size 61x80mm ... 345g" per this catalogue
    (weight 345g already matched, confirming same part); source_ref
    repointed to data_source 122, search_text resynced to the new title.
    No bike_spec links or generator overrides referenced the old title.
  - 7889 "CT-L, Custom-L", 7891 "RN-L, Randonneur-L", 7896 "NR-S / NR-L,
    North-Road", 7897 "AR-S / AR-L, All-Rounder" could plausibly correspond
    to catalogue bends WS, WR-420/RND-420, NA-324, and ARA-101 respectively
    (weights are close for some, e.g. AR-L 180g vs ARA-101 180g) but the
    other dimensions (width, raised/drop) don't match closely enough to
    merge with confidence. Not inserted as new (to avoid risking a
    duplicate) and not merged (to avoid risking conflating two different
    parts).
- Not inserted (out of scope for `component_category`): chain guards
  CG-101/110/111/550SC, special tools T-902/905-912, pedal accessories
  AC-30/40/45/AS-30/AP-01/02/03/AR-02, saddle clamp SDC.

## Sakae Ringyo (SR) "Sakae Bicycle Parts" Catalog No. 18 — undated, c. 1982 (equusbicycle.com, 18 spread PDFs)

- `data_source` 92, label "Sakae Ringyo (SR) Sakae Bicycle Parts Catalog
  No. 18 (c. 1982)". Source: https://equusbicycle.com/bike/sakae/catalog18/index.html
  (pdf/sakaecatalog18_ 1..18.pdf, one spread each = printed pp 1-34). Sakae
  Ringyo Co. Ltd, Tokyo, "Printed in Japan", no date (equus: "early to mid
  1980's"); recorded as c. 1982 (velobase rows cite a separate "SR Catalogue
  P-7 (1982)"). Year rule used: year_to -> 1982 where earlier, NULL -> 1982,
  no year_from moved.
- Ranges: Royal (RY-5ESL / 5SL / 5 / S5, RY-BBS-ESL / BBS), Super Apex
  (SAX-5TG / 5RG / 3TG + BB set), Apex (AX-5LASL / 5LA / 5MASL / 5MA / 3FA /
  5RG II / 5SDIIAH + BB set), Silstar cranks (SI-5DRG AH / E, SI-5SDIIAH /
  IIE, SI-3DFA, SI-S) and SC BB; chain guards CG-101 / 102 / 110 / 111 / 501 /
  550; bars RY-978, RY-RC, WS-SL / SLB, WS, CTD, CT-L, CT-S, WR, RN-L, RND,
  RN-S, SC, 7D, NL-90, NR-S / L, AR-S / L; stems NRY-ESL / SL / NRY, RY-TY,
  AX-AH, SR-AH / E, JUN-50, SS-30, SW-50AH / E, SW-50x135 / B; seat pillars
  RY-P1ESL II / P1SL III / P1 II, CT-P3, CT-P5 (Sakae Laprade), CT-P6 / P6C,
  SDC, ASP, SSP; Silstar pedals SP-100 / 200 / 300 / 400 / 401 / 500; Silstar
  hubs SH-100QR / 300QR / 100SK / SD / 300SK / SD; BMX MB-205B, MS-100B /
  200CP / 200B / 300, SAX-5RGMX; tools T-902..911; small parts H-01xx..06xx.
- All SR rows (brand 49) were velobase. Retitled (old titles, brand prefix
  "Sakae/Ringyo (SR)" kept): 1769 "RY-S5, Royal Pista" -> Royal-Single 5
  (track); 1757 "SAX-5TG, APEX-5 Touring" -> Super Apex-5 Touring; 1755
  "Super Apex-3 Touring" -> SAX-3TG; 1739 "AX-3FA, APEX"; 1740 / 1741
  "APEX-5LA" capitalisation; 1742 "AX-5MA, APEX"; 1743 "AX-5MASL, APEX Super
  Light" -> Apex-5MA Super Light; 1767 "Silstar SI-S, Silstar Single SI-S";
  115 / 116 RY-BBS / RY-BBS-ESL set names; 117 "SC(-IS) 5SS" -> SC-BS /
  FS / IS; 2913 "WR" -> World Randonneur; 2910 "Sakae Road Champion
  Randonneur Double Tube" -> RND (Road Champion); 6663 "NRY-SL, New Super
  Royal Super Light"; 6660 "Jun-50x150" -> JUN-50; 5855 "Custom-P3 (Melt
  Forging)"; 5857 / 5858 Custom-P5 -> CT-P5; 5861 "Custom-P6 with SDC" ->
  CT-P6 / CT-P6C; 5863 "RY-P1 (ROYAL P1), Track Racing Group" -> RY-P1 II;
  5852 "Royal-PISL" -> RY-P1SL III; 3922 "SP-100AL"; 3929 "SP-200AL
  (Track)" -> rat-trap (catalogue); 3931 "SP-300AL". Descriptions rewritten
  on these plus 1749, 1750, 1752, 6662.
- New (44 rows, 1982-1982): SAX-5RG, AX-5RG II, AX-5SDIIAH, SI-5DRG AH / E,
  SI-5SDIIAH / IIE, SI-3DFA, SAX-5RGMX; Super Apex and Apex BB sets;
  RY-978, RY-RC, WS-SL / SLB, WS, CTD, CT-L, CT-S, RN-L, RN-S, SC, 7D,
  NL-90, NR-S / L, AR-S / L, MB-205B; NRY, RY-TY, AX-AH, SR-AH / E, SS-30,
  SW-50AH / E, SW-50x135 / B, MS-100B / 200CP / 200B / 300; RY-P1ESL II,
  ASP, SSP; SP-400, SP-401, SP-500; SH-100QR, SH-300QR, SH-100SK / SD,
  SH-300SK / SD. Chain guards, small parts, tools not inserted.
- Deleted (user decision): 1732 "Sakae/Ringyo (SR)" (Cranksets, 1970-1980,
  velobase, `DD48640F-BEA3-4D4E-8502-3EC9E7466E73`), bare brand-only row;
  its 5 links (1981 Kalkhoff "Sakae 42/52" x3, "Sakae 40/52" x2) unlinked
  first and overrides 'sakae 42 52' / 'sakae 40 52' set to null.
- Bike links: 1981 Kalkhoff "SR AX; AH" stems x2 -> 7901 AX-AH; 1987
  Bianchi "SR CTD" bars x3 -> 7888 CTD. Kalkhoff 1981 57 -> 54 (5 unlinked,
  2 linked); Bianchi 1987 140 -> 143.
- Left: 1751 RY-5SL triple, 1756 SAX-5LA-EL, Super Custom / Aerox /
  Custom-3 cranks, (6659 "SR CUSTOM" stem: merged into 8234 CT, Custom on
  2026-10-28, 8234 now 1978-87), 3933 Silstar 550FW, SP-150 / 152 /
  154 / 155, 5862 Four-Sir, 5848, bare 6665 "SR" stem / 1738 "Apex" / 1759
  "Silstar" / 3513 hub. Not in No. 18: 1985 Raleigh SP-153 / 452 / 518,
  CXC-624 / 331, CRC-T301, 55G, MTH-100 (later SR numbering), "Royal special
  racing bend" (RY-978 vs RY-RC ambiguous), 1987 "CT-P5E".


## Sakae Ringyo (SR) "Bicycle Parts" Catalog No. 17 — undated, c. 1980 (VeloBase archive, 40 pp)

- `data_source` 200, label `Sakae Ringyo (SR) Sakae Bicycle Parts Catalog No. 17
  (c. 1980)`. Source: velobase.com/Pages/Resources/CatalogScans.aspx
  `Sakae/Sakae_No17.pdf` (download path `%2fCatalogScans%2fSakae%2f...`; 40 pp,
  English, no text layer; printed page N = PDF page N+1). **Undated.** In the
  series it sits before P-5 (August 1980), No. 18 (c. 1982) and P-7 (Sep 1982),
  so `year_from` 1980 was used as an upper bound for every part it shows (the
  real year could be 1979 or earlier). No pedals or hubs: those are in
  `Sakae_Pedals_Hubs.pdf`, which is still unread.
- Contents (printed pp.): Extra Super Light, Super Light and Track Racing groups
  (3-8), chainwheels Royal / Super Apex / Apex / Silstar / Grand Silver / Super
  Steel (9-20), chain guards CG-101/102/110/111/501/550 (21-22), bars (23-26),
  motocross (27), stems (28-33), tools T-902-910 (34), seat pillars (35-36),
  small parts H-0101-0602 and boxes (37-38). Out of scope: chain guards,
  tools, small parts, packaging.
- It shows the earlier model names the later catalogues call "former names":
  NL-90 (later NA-312-90), AR-L / AR-S (later ARA-101), and the Silstar cranks
  as SI-5DRG / SI-5SD (P-5 has SN-5DLA / SN-5DRG). Chain guards and the part
  tables use SAX-5RG / AX-5RG I-II naming throughout.
- Rows updated (16, `year_from` 1982 -> 1980, `source_ref` 200): 7873 SAX-5RG,
  1755 SAX-3TG, 7874 AX-5RG II, 7875 AX-5SD II AH, 7877 SI-5DRG E, 7897 AR-S /
  AR-L, 7896 NR-S / NR-L, 7891 RN-L, 7889 CT-L (also 3 bike specs linked, year_to
  1984 left), 7886 WS-SL / WS-SLB, 7898 MB-205B, 7899 NRY, 7903 SS-30, 7901
  AX-AH (7 bike specs linked), 7904 SW-50AH / SW-50E, 7908 ASP. Row 6669 VT
  (Vitesse) description rewritten with the VT1 72 / VT2 65 / VT3 58 degree
  angles, 70-140 mm extensions, 325-395 g (the DB's 365 g Spec is the 110 mm).
- Rows inserted (4, 1980-1980, `source_ref` 200): 8821 GS-3 Grand Silver (690 g
  alloy, 975 g steel), 8822 SST-5 Super Steel-5 (1,240 g), 8823 AX-5SDIIE
  Apex-5SD II E (the Apex counterpart of the existing AX-5SDIIAH, no weight
  given), 8824 NRC-375 New Racer (steel track bend, 570 g, Track Racing Group
  181).
- Left alone:
  - 7906 MS-100B / MS-200CP / MS-200B / MS-300 motocross stems: No. 17 shows
    MS-100 and MS-200 only, not the MS-300, so the 1982 `year_from` stays.
  - 7907 "RY-P1ESL II" (210 g) and 5852 "RY-P1SL III" (260 g) look like later
    versions of No. 17's NRY-P1ESL (190 g) and RY-P1SL (275 g); the DB has no
    row for the earlier versions, and nothing says whether they are distinct
    products, so none was added.
  - Rows for parts not in No. 17 (Custom A / CAC / CTC / DX series, Aerox AEC,
    New Apex AA, OPC cranks, conversion axles, Silstar hubs, SI-3DFA, RY-TY, AS
    stems) are newer and unchanged.
- Unresolved: a date for No. 17 (could be 1979 or earlier); `Sakae_Pedals_Hubs.pdf`
  ("1970's?") not read; no No. 17 source for the 1970-dated cranks such as
  Custom-3.

## Sakae Ringyo (SR) "Light Alloy Pedals" and hubs leaflet — undated (VeloBase archive, 6 pp, read 2026-10-18, no rows changed)

- No `data_source` and no SQL. Source: velobase.com/Pages/Resources/CatalogScans.aspx
  `Sakae/Sakae_Pedals_Hubs.pdf` (6 pp, no text layer; VeloBase labels it "1970's?").
  Cover, back cover (Sakae Ringyo Co. Ltd., Head Office 2-16 Aoi, Adachi-ku, Tokyo,
  "Printed in Japan", no year) and four spec pages. **Undated;** the SR crank,
  P-5, No. 17, No. 18 and P-7 catalogues all use the same SP / SH numbering, so it is
  from the same period, not a separate early line.
- Listed (all super melt-forged light-alloy bodies, B.C. 9/16 x 20T pedal thread):
  pedals SP-100AL/BL/CP (quill, 62 x 60 mm, 340 g AL/BL, 440 g CP), SP-200AL/BL
  (rat-trap, 62 x 60 mm, 320 g), SP-300AL/CP (quill with reflector, 80 x 60 mm, 400 g /
  480 g), SP-400AL/CP/SS (rat-trap with reflector, 430 g / 465 g), SP-401AL/CP/SS
  (rat-trap, 360 g / 400 g); hubs, thread 1.37" x 24 TPI, over-locknut F 96 / 100 mm
  by R 124 / 120 mm: SH-300QR (small flange, 575 g), SH-100QR (large flange, 635 g),
  SH-300SK / 300SD (solid axle, 465 g), SH-100SK / SD (525 g).
- Every model is already in the DB (rows 3922, 3929, 3931, 7910, 7911, 7913-7916 from
  P-7 / No. 18 / P-5), so there was nothing to add as a row. Differences, left
  unrecorded in the DB: weights 5-20 g off the later catalogues (SP-100 340 / 440 g vs
  345 / 420 g, SP-200 320 g vs 345 g, SP-300 400 / 480 g vs 405 / 490 g, SP-400 430 g
  AL vs 405 g, SH-100QR 635 g vs 640 g, SH-300QR 575 g vs 580 g, SH-100SK 525 g vs
  550 g, SH-300SK 465 g vs 480 g), a stainless "SS" plate version of SP-400 and
  SP-401 that the DB rows (7910, 7911) don't mention, and rear over-locknut 124 mm
  where the DB says 120/126.
- Conflict, unresolved: this leaflet calls SP-200AL/BL a **rat-trap** pedal; row
  3929 (P-7) says "track type, quill type". Nothing here decides which is right; the
  leaflet photo shows a rat-trap cage.
- Years left alone: the leaflet is undated and the hub rows are only 1982, and the
  "Silstar" name P-7 and No. 18 use does not appear in it.

## SR Sakae pages (pp 16-19) of the SR SunTour "1993 Bicycle Equipment" catalogue, English — printed 10.1992 (bikalog.org), data_source 278

- Source: https://bikalog.org/api/view/Sun%20Tour/1993/SunTour93.pdf, pp 16-19
  (the SunTour pages of the same catalogue are logged in suntour.md; shared
  `data_source` 278). Read with pdftoppm -r 300. Photo captions only: codes and
  names, no weights or dimensions except TCO seat post lengths. First SR source
  in the log after the c. 1982 catalogues; the 1990s range was almost absent from
  the DB. Pages: 16 SR Sakae intro (Litage, Pressure Fit, Accurad forging) and
  DuoTrack fork ("'93 NEW"), 17 DuoTrack spec and handlebars, 18 stems and
  seatposts, 19 pedals, cassette BBs, cranks / chainrings, toe clips.
- Updated (year_to -> 1993, source_ref 278): 3935 retitled (old title "Sakae/Ringyo
  (SR) SXP-102") -> "Sakae/Ringyo (SR) SXP-102 / PL-SXP-102BL", search_text
  rewritten; 8246 SP-550FB / FW Silstar (was 1982), description rewritten.
- Not extended: 3925 SP-150 (1970-1980, linked via the 'sakae sp 150' override
  for the 1982 Peugeots): the catalogue's PL-SP-150-SE got its own row instead.
- New (32 rows, ids 9738-9769, all 1993-1993, no group): handlebars BR-MTB-226SB
  Powerbulge Quad-2, BR-MTB-420AS Powerbulge Titanium, BR-MTB-528AS Zetto,
  BR-CMB-201, BR-FMB-200-DM; stems HP-MTS-301BL, HP-MTS-455BL Zetto, HP-CTS-320BL
  (hinged), HP-FXS-100DM, HP-CYS-120BLA; seat posts SP-MTE-315HG2 TCO,
  SP-MTE-325 TCO Sport, SP-MTE-335 MTE ('93 new), SP-FXE-100DM, CTE-100; pedals
  PL-MTP-129HG / 127 / 126BL, MTP-170, MTP-426, PL-MTP-481FB, PL-SP-530FB,
  PL-CTP-470BLA, PL-CTP-400AL, PL-SP-150-SE, PL-SP-583FB; BB-CB10 cassette BB
  ('93 new; the silver BB-CB00 is SunTour row 9729); cranks SW-SES-631-BL2,
  CW-CSC Tandem; chainrings Ninja 300T, Platinum and Round Tech (300T / 300C /
  310 / 200).
- Left: 6661 MTS-101 stem and 5849 MTE-100 post (different models); DuoTrack fork,
  Litage forks, AS-30BL / AC-51BL toe clips and straps (no category).

## Sakae Ringyo (SR) catalogue excerpts, Sep 1983 p.12 and mid-1980s p.19 (bmxmuseum.com), data_source 355

- Source: https://bmxmuseum.com/reference/4373 ("SR MTP-100 & MTP-110 Pedals 'Speed
  Traps'"), 2 images: (1) Sep 1983 SR catalogue p.12, "Pedals / Mountain Bike Pedals"
  (MTP-100 and MTP-110 both marked NEW, German safety approval "under application");
  (2) an undated mid-1980s SR catalogue p.19, a Mountain Bike / BMX series chart showing
  pedal codes only. Label "Sakae Ringyo (SR) catalogue excerpts, Sep 1983 and mid-1980s
  (bmxmuseum.com)".
- First appearance of the MTP mountain bike pedals: none of No. 17, P-5, No. 18 or P-7 has
  an MTP code. Before this pass the only SR MTP rows in the DB were from the 1993 range.
- New (2 rows, 1983-1985; year_to 1985 is the user's reading of "mid-'80s" for the
  undated chart): 10472 MTP-100 (sealed bearings) and 10473 MTP-110 (cup and cone). Both
  have a light alloy body and interchangeable cage, a Cr-Mo spindle, BC 9/16 x 20T or
  UNF 1/2 x 20T thread, 90 x 110 mm foot size and weigh 490 g. Riders call them "Speed
  Traps" (noted in both descriptions). The chart lists them as Super Deluxe and Deluxe.
- Not inserted (user decision; codes and photos only, undated): MP-470 (MTB Standard),
  MP-131 (BMX Competition Pro), MP-130 (BMX Competition), MP-468 (BMX Popular). Possible
  match, not merged: MP-468 and row 8245 SP-468 (1982, one-piece pedal with reflector,
  64 x 95 mm, 410 g) could be the same pedal under a new number; no specs to check.
- No bike_spec links or overrides affected.

## SR recovered mountain bike stem fragment (c. 1983) and CX advertisement (July 1984), imported 2026-11-06

- Sources registered: 363, `Sakae Ringyo (SR) mountain bike stems catalogue fragment (c. 1983)`;
  364, `Sakae Ringyo (SR) CX crankset advertisement, Bicycling (July 1984)`, market US.
  Both use source_type `catalogue`, following the existing advertisement/leaflet convention.
- Stem fragment: https://cimg4.ibsrv.net/gimg/bikeforums.net-vbulletin/967x681/screenshot_20210423_170946_fennec_9de20ebd1234b2a775cd55b20b7101e6258e5abf.jpg
  reproduced in BikeForums thread 1127647, post 724 (page 29). MTB Timeline
  https://mtbtimeline.com/wiki/tech/slingshot attributes it to 1983 catalog p.10,
  linking Velo-Pages item 58566. The fragment itself is undated and does not show
  a catalog number: c.1983 is external attribution, not a confirmed No.19 imprint.
- Advertisement: https://djcatnap.com/wp-content/uploads/2023/02/BicyclingMagazine1984-Cuevas.pdf#page=8
  (8-page extract, printed p.169, explicitly July 1984). Only the SR advertisement
  on the last page was ingested; the Cuevas frame article is outside this pass.
- New: 10846 `Sakae/Ringyo (SR) MTS-100`, Stems, 1983-1983 (approximate source year):
  melt-forged light alloy V-shaped head, Cr-Mo steel tube, extension 90mm,
  length 150mm, quill 22.2mm, 610g; source_ref 363.
- Enriched: 6666, retitled from `Sakae/Ringyo (SR) SR-MTS-110` to
  `Sakae/Ringyo (SR) MTS-110`, search_text regenerated; melt-forged high-strength
  light alloy head, four-bolt faceplate, extension 63mm, length 150mm,
  quill 22.2mm, 580g; year_to 1980 -> 1983, source_ref 1 -> 363. Existing year_from
  1980 retained: the undated fragment's NEW marking plus approximate external
  dating is insufficient to assert a precise introduction year.
- New: 10847 `Sakae/Ringyo (SR) CXC-T300, CX`, Cranksets, 1984-1984, source_ref 364:
  triple crankset with detachable five-bolt chainrings, 110/74mm BCD. The ad's
  24-53T range describes the CX line, so it was not assigned to this specific model.
  Generic CX row 1747 (1986) was retained: the ad does not prove its configuration.
- No bike_spec links, generator overrides, deletes or merges. MTS-101 row 6661
  is a different model and unchanged. The fragment does not identify MTS-131.
- SQL: `/private/tmp/sr-recovered-sources.sql`; compact listing:
  `/private/tmp/sr-recovered-sources.json`. Transaction loaded successfully;
  read-back verified the three rows, descriptions, years and source citations.
  Source files remain at their cited public URLs; the app registers citations
  and does not provide a document storage/upload facility.

## Mid-1980s source-gap review — 2026-11-15 (read-only)

### Full catalogue recovery

- Reviewed the overlapping 2026-11-02, 11-06 and 11-13 searches first. No complete
  No.19 (September 1983), No.23 (August 1988), or intervening No.20–22 scan
  recovered. This describes the searches, not proof no scan exists online.
  No DB/source/link/matcher changes or SQL prepared in this review.
- Edition dates remain collector reports in [BikeForums posts 4 and 7](https://www.bikeforums.net/classic-vintage/1123283-sakae-ringyo-sr-when-did-they-start.html).
  Hummer reports seeing No.19; T-Mar cites No.19 and No.23. No download for
  either is supplied there. Don Buska is not established as the later-catalogue
  holder. Requesting scans from a confirmed holder remains an offline action;
  nobody contacted during this review.
- [Velo-Pages album 58555](https://www.velo-pages.com/main.php?g2_itemId=58555)
  still returns HTTP 500 (curl outside sandbox). Previous review identifies
  the 20-page 1983 album. Its capture 20241230193714 supplied thumbnails only.
  The 2026-11-13 Wayback check found no display capture for 58566/58568 and
  only a 150px thumbnail for 58567. Those archive searches were not repeated
  today; failed retrieval does not establish permanent loss.
- Readable MTS-100/MTS-110 fragment (BikeForums post 724 / MTB Timeline) is
  already source 363, CX advertisement source 364, pedal fragments source 355.
  These are processed evidence, not new recovery leads.
- [South Salem 1982 PDF](https://sscycleworks.com/galleries/bike-museum/1982-Sakae-Catalog.pdf)
  returned HTTP 200, 1,442,488 bytes, 12 pages. Cover checked visually:
  CATALOG No. P-7. Another mirror of source 122, not No.19. The Japanese
  [collector post 582416](https://butoboso0217.livedoor.blog/archives/582416.html)
  was already identified as P-7 despite its approximate 1983 attribution.
- Targeted English/Japanese searches covered missing editions and 1983–89 scans
  plus MTE-300/110, CRE/CLE-100, SAC/SUC-310 and CRH-310. VeloBase/Equus
  results still expose processed editions. SR Bicycles/Windsor and modern
  industrial Sakae catalogues are false matches. Previous searches also covered
  bikalog, fc2 mirrors, Retrobike, Flickr, bmxmuseum and Internet Archive.
  Do not repeat the broad hunt without a new scan, holder or recovery endpoint.
- Previous paid leads: Cycle Sports (Yaesu) annual directories, November 1985
  parts/manual issue, 1987 practical catalogue and 1990 all-catalogue. Prior
  auction photos did not show SR pages. Availability/contents not reverified
  today; these remain acquisition leads, not sources ready for ingestion.

### Accessible evidence and remaining limits

- [Fuji 1989, Edition No.19](https://ebykr.com/library/fuji-1989-catalog/),
  scan page 33 (unfoliated), checked against the [2440px original image](https://ebykr.com/wp-content/uploads/2026/10/ebykr-1989-fuji-catalog-p33.webp).
  Mt. Fuji lists Sakae MTE-300, micro-adjust, 300mm; Sundance/Suncrest list
  Sakae CLE-100, micro-adjust, black, 300mm. Q/R seat-pin wording is bicycle
  fitment, not proof of an accessory included with the post. Ace lists CMB 300
  Modolo-type bar with alloy centre and CTS 100 alloy black stem. These four
  exact codes were absent from the pre-load SR snapshot. Older differently
  named rows were subsequently reconciled below; this research pass alone did
  not establish earlier dates.
- Fuji 1988 transcription p.34 says SR MTE 300mm, potentially family plus
  length; do not normalize that automatically to model MTE-300. Fuji 1986 is
  incomplete and its transcription gives no CRE/MTE match. Neither absence
  establishes a production-date boundary.
- [Schwinn 1985 transcription](https://bikehistory.org/catalogs/1985.html)
  lists CRE-100 alloy micro-adjust, 26.6 x 190mm on Super Sport/Voyageur SP;
  SAC310 on World Sport; CTC-5SG on Sprint; CXC-T310 on LeTour Luxe. Previously
  known fitment evidence, not a new maker catalogue. The Super Sport image
  there is a bike photograph without the printed specification block; verify
  the block from a full scan before loading.
- Held 1986 Raleigh/Miyata catalogues underpin existing exact-code CSV values.
  Raleigh US PDF at threespeedhub was accessible to the web reader but curl
  reset on both hosts today; its table was not visually verified in this pass.
- CRE-100, bare CRE/CR-E and CLE-100 are not established aliases. Withdraw the
  old TODO assumption that they are probably one model. Also keep CT-P5E apart
  from CT-P5 5857 and MTE-300/110 apart from MTE-100 5849 pending a crosswalk.
  (CT-P5E part superseded 2026-11-16: own row 11316, see the CT-P5E section below.)
  Generic fluted posts do not identify a numbered version.
- No new primary specifications recovered for CRH-310/MTH-100 hubs, MTS-131/
  CPS-80 stems or the full SAC/SUC/FXC/AXC/CXC crank range. Trek 1985/1987
  and Koga-Miyata 1986 fitment leads from the earlier handlebar review remain
  useful partial sources, not complete SR range catalogues.

### Pre-load gap baseline and follow-up

Live DB snapshot, 2026-11-15, all bike years: spec text naming SR, Sakae or Ringyo
as whole words; counted rows, including generic/ambiguous text, not distinct models or
promised recoverable links. Six component labels only:

| Spec label | All | Linked | Unlinked |
|---|---|---|---|
| Seatpost | 163 | 63 | 100 |
| Crankset | 134 | 39 | 95 |
| Handlebars | 109 | 46 | 63 |
| Stem | 145 | 96 | 49 |
| Pedals | 60 | 33 | 27 |
| Hubs | 12 | 0 | 12 |
| Total | 623 | 277 | 346 |

- Excludes makerless codes, MIYATA SIGNATURE-only text and Extras/Bottom
  Bracket/Toe Clips; not a whole-category coverage refresh.
- Exact unlinked values include SR CLE-100 (6), SR MTE-300 (5), CT-P5E
  spellings (17), CRE/CRE 100 (3), SRE-100 (2), SRE-105 (2), MTE-110 (2).
  These current counts supersede the old named SR seatpost estimates.
- This research pass led to the applied four-model reconciliation below.
  Full-range catalogue recovery remains parked pending a new lead.
- No DB or CSV edits. Temporary downloads/images removed after recording
  source URLs, observations and scope here.

## Four SR models from Fuji 1989 — applied 2026-11-15, source 412

- Scope: four exact model codes, not a whole Fuji bike-catalogue ingestion.
  Applied four component inserts, source 412, 11 NULL-only seatpost backfills
  and two exact year-bounded generator overrides. No existing component
  rewrites, date corrections, deletes, merges, CSV changes or bike inserts.
- Created source 412, label `Fuji Edition No. 19 bicycle catalogue (1989)`;
  citation `https://ebykr.com/library/fuji-1989-catalog/ (scan pp.33,35; SR component fitments only)`.
  Market US, verified from Fuji America addresses on back-cover scan p.40;
  printed in Japan is the printing location. Existing category-brand
  registrations already cover all three categories; none added.
- All four use brand 49, group NULL, fresh UUID load keys and generated search
  text. Their source_ref is 412; earlier/later attestations below
  additionally use existing sources 349 (Miyata 1986), 407 (Miyata 1987), 325
  (Bianchi 1989) and 168 (Bianchi 1990). Ranges attest availability, not
  introduction or discontinuation. No catalogue weight, diameter, forging or
  clamp-size claim inferred where the pages do not state it.

| ID | Title suffix (all Sakae/Ringyo (SR)) | Category | Applied years | Description |
|---|---|---|---|---|
| 11307 | MTE-300 | Seat Posts | 1986–1989 | Micro-adjust seatpost; 300mm ATB fitment. |
| 11308 | CLE-100 | Seat Posts | 1989–1990 | Micro-adjust seatpost for road, touring and ATB fitments; black finish listed, 300mm in the ATB specification. |
| 11309 | CMB-300 | Handlebars | 1989–1989 | Modolo-type road drop handlebar with alloy centre section. |
| 11310 | CTS-100 | Stems | 1989–1989 | Alloy road/touring stem; black finish listed. |

### Evidence and identity decisions

- Fuji original [scan p.33](https://ebykr.com/wp-content/uploads/2026/10/ebykr-1989-fuji-catalog-p33.webp)
  gives MTE-300 on Mt. Fuji, CLE-100 on Sundance/Suncrest, CMB 300 and CTS 100
  on Ace. [Scan p.35](https://ebykr.com/wp-content/uploads/2026/10/ebykr-1989-fuji-catalog-p35.webp)
  also gives CLE-100 on Saratoga/Del Rey and CTS-100 on Saratoga. These scans
  were rechecked visually. Only the ATB CLE fitment specifies 300mm; no 220mm
  road length is established here. QR/Allen seat-pin text describes bike fitment,
  not a specific accessory sold with the post. CMB-200 on Saratoga is a
  different code and outside these four models.
- [Miyata 1986 scan](https://www.ragandbone.ca/PDFs/Miyata%20Catalogue%20PDFs/Miyata%20Catalogue%2086.pdf),
  PDF p.23, checked visually: both Ridge Runner and Terra Runner explicitly
  list SR MTE-300. This supports year_from 1986 rather than relying on Fuji
  1989 alone. The already-ingested 1987 Ridge Runner also names it.
- [Bianchi 1989 source](https://www.gringineer.com/blogs/default-blog/1989-bianchi-catalog),
  original table images `img-2486-2.jpg` / `img-2487-2.jpg`, checked visually:
  CLE-100 on Limited, Brava, Sport SX; MTE-300 on Super Grizzly and Equinox.
- Bianchi 1990 source 168, PDF p.22, rechecked from the previously downloaded
  scan: CLE-100 on Virata, Alfana, Eros (also three out-of-scope flat-bar bikes,
  not proposed for loading/backfill). [Catalogue location](https://www.retrobike.co.uk/archive/1990-bianchi-catalogue.1676/).
  This supports CLE year_to 1990; Fuji alone only attests 1989.
- Full DB snapshot searched across titles/descriptions and all brands: no exact
  occurrence of the four codes before loading. SR increased 248 -> 252 components. Compared
  all SR seatpost, bar and stem rows; no evidence-backed alias found.
  Keep MTE-100 5849, unnamed fluted 5847 and Royal 5850/5851 separate; do not
  transfer their measurements to MTE-300/CLE-100. Keep CRE/CR-E/CRE-100 distinct.
- CMB-300 is not assigned to CTD 7888, C-87 2909, BR-CMB-201 9741 or
  BR-FMB-200-DM 9742. CTS-100 is not assigned to CT 8234, Aero 6657 or
  HP-CTS-320BL 9745. Different codes/thin generic descriptions do not establish
  equivalence. No generic SR/Modolo bar or generic alloy stem links proposed.

### Applied links and validation

| Target | Spec IDs (previously NULL) | Bikes |
|---|---|---|
| MTE-300 | 18970, 18991, 22277, 18560, 18664 | Miyata 1986 Ridge Runner/Terra Runner, 1987 Ridge Runner; Bianchi 1989 Super Grizzly/Equinox |
| CLE-100 | 18434, 18455, 18497, 7148, 7169, 7211 | Bianchi 1989 Limited/Brava/Sport SX; 1990 Virata/Alfana/Eros |

- No current live specs or CSV values name exact CMB-300/CTS-100. All 11
  seatpost backfills preserve bike/spec source_ref, labels and values.
- Installed exact Seat Posts overrides: `sr mte 300` -> 11307, range 1986–89;
  `sr cle 100` -> 11308, range 1989–90. Parenthesized `(SR)` in titles
  prevents automatic substring matching to plain `SR`. General matching and
  normalization unchanged; these are the only generator changes.
- Preflight confirmed the reviewed component snapshot, generator and 11 NULL
  target specs unchanged. Load affected exactly one source, four components
  and 11 specs. Identical SQL rerun affected zero rows on every statement.
- Readback verified every planned field on 11307–11310, source 412 and all
  11 links with valid category/brand/group/source registrations and compatible
  bike years. All 10,390 pre-existing component records remained unchanged.
- Actual generation using the applied DB snapshot and installed generator
  matches the reviewed simulation across all 93 CSVs: 1,199 bikes, 20,600
  specs, mapped 7,313 -> 7,324. Exactly the 11 named NULL seatpost mappings
  changed; all others unchanged. Root `bike-update.sql` untouched.
- Actual duplicate report matches simulation: three SR configuration pairs,
  zero near or parenthetical-name pairs; no new/removed pairs. Existing
  1760/1761, 5850/5851 and 5859/5860 stay apart, as do the manually reviewed
  generic/code candidates above.
- Maximum new description length 110 characters; titles/search text fit 255.
  No CSV edits, old component changes, deletes, merges or new bike rows.
- Fresh live category snapshots, 2026-11-15 (whole label, all bike years):

| Spec label | Linked / all | Unlinked | Component rows |
|---|---|---|---|
| Seatpost | 282 / 873 (32.3%) | 591 | 309 |
| Handlebars | 260 / 1,055 (24.6%) | 795 | 437 |
| Stem | 346 / 931 (37.2%) | 585 | 502 |

- Scoped maker-word snapshot (same six labels/all years as the pre-load table):
  623 specs, 288 linked, 335 unlinked; SR Seatpost alone 74/163 linked, 89
  unlinked. Other maker-label counts unchanged. This task adds exactly 11 links,
  two seatposts, one bar and one stem; differences from older full-category
  snapshots include intervening work and must not be wholly attributed here.
- Restoration: remove only the two overrides above, clear only the 11 listed
  spec links if they still point to 11307/11308 (original values were NULL),
  then remove the new component rows only after checking all references and
  source 412 only when unused. Bike/spec original source_refs remain 349,
  407, 325 or 168 as appropriate.
- Source URLs/pages, decisions, applied IDs, material old/new values and
  validation recorded here. Disposable SQL, scans, scripts, snapshots and logs
  removed after validation; no dependency on task scratch files remains.

## SR CT-P5E from Panasonic USA 1986 — applied 2026-11-16, source 417

- **Evidence.** In the Panasonic Bicycles USA 1986 spec table (`panda27`, printed
  p.29; rechecked visually by crop), the same Saddle row prints "SR CT-P5" on Pro
  Touring and "SR CT-P5E" on DX 3000, DX 2000, Track 4000 and Touring Deluxe.
  Panasonic 1985 and 1987 split the same way, with CT-P5 on the dearer models.
  CT-P5E is therefore its own catalogue code, not a spelling of CT-P5 5857. This
  supersedes the 1984-86 Miyata overrides that sent CT-P5E to 5857. Full
  transcription: `../../../ingest-bike-specs/references/known-catalogs/panasonic.md`.
- **Source.** 417, `Panasonic Bicycles catalogue, USA (1986)`, US, citing
  panasonicbikemuseum.info (spec tables pp.28-31).
- **New row.** 11316 `Sakae/Ringyo (SR) CT-P5E, Custom-P5E`:
  - Brand 49, Seat Posts 18, group 294 Custom (as 5857), years 1984-1988.
  - source_id `3a0c6e3a-d261-4256-a3df-253ac0600dca`, search text
    `Sakae/Ringyo CT-P5E Custom-P5E`.
  - Description: "Micro-adjusting alloy seat post; a separate code from CT-P5
    (Custom-P5). 220mm and 250mm fitments listed."
  - The years come from bike fitment: 1984 Miyata "SR Custom P5E" through the 1988
    Raleigh "Sakae CTP-5E". They are not introduction or end dates. No weight or
    diameter is claimed.
- **Links.** 31 specs:
  - Moved from 5857 (13): 21323 21531 21592 21509 21548 21679 21657 19055 18862
    18926 18839 18880 19012 (1984-86 Miyata).
  - Filled from NULL (18): 8357 8337 8316 (1986 Raleigh Technium; 8357 prints
    "CPT5E"), 1293 1333 (1987 Bianchi), 22255 22233 22445 22211 22343 22365
    (1987 Miyata), and 17941 18013 17959 17995 18049 17923 17977 (1988 Raleigh).
  - 5857 is otherwise unchanged; its 1980-89 range still rests on its other links.
- **Generator.**
  - `sr ct p5e`, `sr ct p5e 220mm` and `sr custom p5e` now point at 11316 (they were
    year-ranged to 5857).
  - Added `sr cpt5e alloy micro adjust`, `sr ctp5e alloy micro adjust`,
    `sr ctp 5e alloy micro adjust` and `sakae ctp 5e alloy`.
- **Validation.**
  - Preflight: 13 targets on 5857, 18 NULL, no existing CT-P5E row or source.
  - Load: 1 / 1 / 31 rows. The identical rerun affected 0 rows.
  - Readback matches every planned field.
  - Regeneration against the live DB: linked specs 7341 -> 7359. All 31 diff hunks
    are the CT-P5E specs, and no other mapping changed. Root `bike-update.sql` was
    not left behind.
  - duplicate-report (Sakae, Seat): no group, near or parenthetical pair involves
    11316. `quality-report` has no 11316 flag.

