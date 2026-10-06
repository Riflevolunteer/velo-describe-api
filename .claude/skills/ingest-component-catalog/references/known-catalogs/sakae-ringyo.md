# Sakae Ringyo (SR) catalogs processed so far

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
  Custom-3 cranks, 6659 "SR CUSTOM" stem, 3933 Silstar 550FW, SP-150 / 152 /
  154 / 155, 5862 Four-Sir, 5848, bare 6665 "SR" stem / 1738 "Apex" / 1759
  "Silstar" / 3513 hub. Not in No. 18: 1985 Raleigh SP-153 / 452 / 518,
  CXC-624 / 331, CRC-T301, 55G, MTH-100 (later SR numbering), "Royal special
  racing bend" (RY-978 vs RY-RC ambiguous), 1987 "CT-P5E".

