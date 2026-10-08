# Colnago catalogs processed so far

Source for both: https://2velo.com/colnago-bicycle-catalogs/ (a WordPress
gallery of 146 scanned pages in nine groups; images are served via
i0.wp.com, `?w=1400` gives a readable scan). Only two groups carry component
specifications. Not transcribed: 1973 brochure (Super Pantografata / Eddy
Merckx, says only "Gruppo e freni Record" and Columbus), 1983 Oval CX
brochure (frames only: CX Cromosatinato, Super, Nuovo Mexico, CX
Cromovelato), 1985 ad (Victory / Master '85 with a bare brand list), 1988
Colnago Concept (Ferrari Engineering concept bike, no specs), 1989 35th
anniversary C35 / Carbitubo press feature, 1997 general catalogue (61 pages,
modern). New bike brand created on load 2026-10-08.

## 1979 Colnago — `1979_colnago_spec.csv` (8 bikes, 133 specs, 70 linked)

- Source: the "Yes advertising" single-sheet catalogue. 2velo dates two of
  its sheets "1977-1979" and lists the other eleven undated; they are one
  set (the Mexico Oro and Super sheets appear in both). Dated 1979 from the
  Beppe Saronni Giro d'Italia bike (Saronni won in 1979), the Nuovo Mexico
  Profil frame (1979-80) and Super Record throughout. Transcribed by hand
  from the English block of each four-language a)-l) equipment list.
- Bikes: Export (Gran Sport), Saronni, International (Record with Super
  Record rear), Roger de Vlaeminck, Super (all Record), Mexico Oro and
  Mexico (Super Record), plus Nuovo Mexico as a Frameset row with the
  frame-only text in Frame Material / Fork. The Super frameset sheet was
  not added separately (same name as the complete bike, same tubing).
- "Gruppo e freni Campagnolo X" fanned out to Front Derailleur, Rear
  Derailleur, Crankset, Seatpost, Brakes, Brake Levers, Pedals, exactly as
  the 1986 Cinelli groupset columns; headset only where the sheet names it
  ("sterzo Colnago superleggero" -> Headset "Colnago superlight"); hubs not
  fanned out. "Centurini, portaborraccia e puntali Ale" split into Toe Clips
  (clips and straps) and Extras (bottle cage).
- Era picks (all by override, year-ranged on DB dates): Record FD 2299
  1052/NT narrow band (1978-82), RD 4125 Nuovo Record v3 (1970-81),
  brake levers 226 2030 Nuovo Record (the matcher's bare "Campagnolo
  Record" lever row is 1994), brakes 572 post-CPSC via the existing range,
  crank 1496, pedals 3708, seatpost 5749 1044 Record. Super Record RD
  4148 1st generation (new `to 1979` range; the existing range started at
  the 1980-only PAT. 80), levers 232 pre-'83 globe hoods (existing flat 231
  override made ranged), brakes 582 v1, seatpost 5759 two-bolt, crank 1509,
  FD 2313, pedals 3716. Gran Sport (Export): brakes 553 first gen (ranged
  to 1980; the 1983 Raleigh entry uses second gen 554 from 1981), levers
  209 1040/1A, FD 2276, RD 4085, crank 1472, pedals 3688, seatpost 5734.
- Other links: Nisi Solidal superlight -> 5144; Clement tubulars mod.
  Colnago -> 6743 Clement Colnago; Regina Extra Record chain -> 1381 Extra
  50 Record and freewheel -> 2183 Extra Record (Ti) (only Extra Record
  freewheel row); Colnago superlight headset -> 2981 Colnago ("super
  record", alu) (the steel one is the "record" row).
- Left unlinked: bare "Nisi" rims, "3ttt special mod. Colnago" bars and
  stems, Colnago / Colnago Super Corsa tubulars, Colnago anatomic saddle,
  Aeralpina spokes, Ale toe clips, Columbus tubing.

## 1986 Colnago — `1986_colnago_spec.csv` (24 bikes, 312 specs, 156 linked)

- Source: "Colnago. Catalogo generale 1986", 20 pages, each bike a photo
  with a four-language prose spec. Transcribed from the Italian and English
  blocks (the English block drops a line on the Superissimo page; the
  Italian/French/German agree on Fossati Racing Cromo chain + Everest Nova
  Cromo freewheel).
- Bikes: Super S.R., International (Ofmega Premier, Universal AER),
  Victory, Superissimo SLX S.R., Mexico / Regal / Master / Master Krono each
  in S.R. and C-Record 180 versions (separate rows), Regal S.R. 30nnale
  (Colnago's 1954-1984 30th anniversary, "8 fiori d'oro zecchino" moved to
  Extras so the group value keys as "Campagnolo Super Record 30nnale"),
  Raid and Super Mountain Bike (Shimano "AL 11"), Gentleman Sport and Lady
  Sport (Triomphe), Master Mountain Bike (Shimano Deore), plus six Frameset
  rows (Super, Superissimo SLX, Mexico, Regal, Master, Krono CX). Group
  fan-out as 1979. "MODA" grid colours recorded in Color.
- Group picks: Super Record as 1986 Cinelli (2313 / 4152 / 1509 / 5761 /
  583 / 231 / 3716); 30nnale overrides point at the same rows. C-Record 180
  as the Cinelli Record Corsa calls: FD 2283, RD 4096 first gen, crank 1483,
  seatpost 5738 A0R2, levers 212, pedals 3693, brakes explicit null (Delta
  not shipping in 1986). Victory by existing overrides. Triomphe: FD 2314,
  RD 4155 1st version (not the 1986-only 0102057 long-cage leisure; the
  Gentleman Sport runs a double), crank 1515 0365, seatpost 5764, levers
  233, brakes 585, pedals 3719 905/000. Ofmega Premier FD 2419 / RD 4359 by
  matcher; no Premier crank, seatpost or pedal rows.
- Other links: Fossati Racing Cromo -> 1361 Everest Modello Racing Cromo
  (Everest chains were made by Fossati & C.; no Fossati brand in the DB);
  Everest Special Cromo chain -> 1364 Serie Special (silver), its freewheel
  stays unlinked (only Special Oro rows); Everest Nova Cromo freewheel ->
  2060 Everest Nova; Ambrosio Metamorphosis SC -> 4899, Aero -> 4892, Elite
  Aero -> 4890 19 Extra Elite Aero dynamic; Universal AER -> 1065; 3ttt mod.
  84 stem -> 8296 AR84N black (catalogue says "nero"; no Mod. 84 handlebar
  row, so the bars stay unlinked).
- Set to no link: "Shimano Deore" RD (matcher hit an undated bare Deore XT
  row; in 1986 "Deore" is undecidable between the ended DE series and XT
  M700, MT60 Deore arrives 1987), "Concor or Rolls" (either/or).
- Left unlinked: Shimano "AL 11" / "FD. AL 11" group (unidentified), bare
  Shimano chain/freewheel, Universal (bare) and Universal AER levers,
  Ambrosio California, Gommitalia tubulars (no generic row), bare Concor and
  the MODA / Mountain-Pro Concors, ITM MTB bars and stems, ACI spokes.
- Regression at load: all 20 loaded catalogues unchanged except 1982
  Raleigh "Campagnolo Gran Sport" brakes, which the new Brakes range links
  to 554 (regenerated and back-filled in the same session, 29 -> 30).
