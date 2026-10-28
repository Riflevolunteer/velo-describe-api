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
