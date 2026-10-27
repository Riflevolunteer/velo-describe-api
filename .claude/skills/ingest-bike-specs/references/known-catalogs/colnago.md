# Colnago catalogs processed so far

Source for both: https://2velo.com/colnago-bicycle-catalogs/ (a WordPress
gallery of 146 scanned pages in nine groups; images are served via
i0.wp.com, `?w=1400` gives a readable scan). Only two groups carry component
specifications. Not transcribed: 1973 brochure (Super Pantografata / Eddy
Merckx, says only "Gruppo e freni Record" and Columbus), 1983 Oval CX
brochure (frames only: CX Cromosatinato, Super, Nuovo Mexico, CX
Cromovelato), 1985 ad (Victory / Master '85 with a bare brand list), 1989
35th anniversary C35 / Carbitubo press feature, 1997 frame catalogue (see
below). The 1988 group was first misread as the Concept cover only; it is a
full catalogue, loaded 2026-10-24 (below). New bike brand created on load
2026-10-08.

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
  84 stem -> 8296 AR84N black (catalogue says "nero").
- Handlebars: the catalogue says "manubrio ed attacco 3TTT mod. 84 nero,
  pantografato" ("3TTT 84 stem and handlebar, engraved" in the English
  column) for bars and stem alike, but Mod. 84 is 3ttt's AR84 *stem*
  designation and no Mod. 84 handlebar exists. 2026-10-09: dropped "mod.
  84" from the 16 Handlebars values (CSV + bike_spec), now "3ttt, black,
  pantographed", "3ttt sport bend, black, pantographed" (Gentleman / Lady
  Sport) and "3ttt special aerodynamic ox-horn bend" (Master Krono). The
  bar model is unidentified (black pantographed 3ttt bar in the photos), so
  they stay unlinked via explicit null overrides.
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

## Other copies seen, not loaded (2026-10-10)

- https://saarf.london/2012/12/06/colnago-catalog-1982-1983/ (011..111.jpg):
  the same "Yes advertising" sheet set as `1979_colnago_spec.csv` (Export,
  Beppe Saronni Giro d'Italia, Mexico Oro, International, Roger de Vlaeminck
  Parigi-Roubaix, Mexico, Super, Nuovo Mexico / Super framesets, plus a
  clothing sheet Art. 101-113), identical text. saarf titles it "1982-1983"
  without giving a reason. Kept at 1979: Saronni won the Giro in 1979 and in
  1983, but he was world champion from late 1982 and the sheet doesn't say
  so; Nuovo Mexico Profil, the Super Record parts and the Roger de Vlaeminck
  Paris-Roubaix bike all point to the late 1970s. No DB change.
- https://saarf.london/2012/12/06/colnago-catalog-mid-1970s/
  (colnago_brochure_11..31, colnago_mexico_accessories1,
  colnago_mexico_first_generation1): the "la bicicletta dei campioni"
  brochure listed above as the 1973 brochure — Super-Pantografata (detail
  captions only), the Eddy Merckx racing bicycle (photo only, "exclusive
  builder for Italy"), an accessories photo, and a first-generation Colnago
  Mexico "extra light with material special Titanio". No component specs, so
  not transcribed.
- http://bulgier.net/pics/bike/Catalogs/Colnago-73-75-ish(Mexico)/ (checked
  2026-10-27): the same five images (Colnago brochure 1-3, Colnago Mexico
  accessories, Colnago Mexico First Generation), up to 2316px but the same
  captions only. Not transcribed.
- http://bulgier.net/pics/bike/Catalogs/Colnago-89/ (col1-col7, checked
  2026-10-27): the 1989 35th-anniversary pack already listed as not
  transcribed above: "35 1954-1989" cover, C35 carbon frame and complete
  C35 photos (no captions or specs), and the La Bicicletta "Carbitubo" press
  reprint (frame construction text only). Not transcribed.
- https://labibleduvelocataloguescolnago1.blogspot.com/p/colnago-1981.html
  (checked 2026-10-27, 5 images): "Colnago International" and "Colnago Super"
  sheets are the same "Yes advertising" sheets as `1979_colnago_spec.csv`
  (International a)-m) list word for word; Super frame text identical); the
  blog dates them 1981, saarf 1982-83, we keep 1979. The other two pages are
  Bikecology's 1981 US catalogue pp. 6-7 ("New 1981 style with full chrome
  forks", "Colors available for 1981"): Super (49-65cm, $425; Columbus SL
  49-57 / SP 58-65) and Mexico (54-63cm, $475; Columbus Record) framesets
  only, Campagnolo Super Record dropouts, Cinelli cast BB, plus accessories
  (3ttt Record stem, Campagnolo Super Record seat post and chainring). Not
  loaded: framesets with no build spec, from a retailer.

## 1988 Colnago — `1988_colnago_spec.csv` (28 bikes, 306 specs, 126 linked)

- Source: 2velo 1988 group (01-2 .. 22.jpg, 30 pages, `?w=1400`), cover "1988 Colnago Concept" (Ferrari Engineering); intro says Colnago went to Ferrari "in late 1986" and "a year of design and testing" followed. Four-language prose per model; transcribed by hand from the Italian / English blocks. data_source 264, country IT (as 1986).
- Rows: 16 complete bikes, one per group variant as 1986 (Carbon Volo C-Record; Super Krono 26"-28" Santé / Chorus; Master Krono 26"-28" C-Record; Masterpiù Santé / Chorus / Croce d'Aune and Masterpiù America C-Record; Conic SLX Total Spiral Chorus / Super Record / C-Record; Super Chorus; Super Sprint (GPM, Modolo Mach-3, Campagnolo 980 RD); Super Sprint International (Ofmega Super Competizione, Colnago signed); Master Mountainbike AL 11 SIS / Deore XT SIS) and 12 Frameset rows (Carbon Volo, Master, Masterpiù, Master Krono, Special Krono, Conic SLX Total Spiral, Esamexico, Superissimo SLX, Super, Super Sprint Frameset, Duall, Master Mountainbike). The Super Sprint frame is titled "Super Sprint Frameset" so it doesn't key onto the complete Super Sprint. Track versions ("also for track with ...") noted in Extras, not rows. Standard colours page (01-08) not recorded.
- Values reuse the 1986 wording ("3ttt, black, pantographed", "3ttt mod. 84", "3ttt special aerodynamic ox-horn bend", Gommitalia tubulars), so the 1986 picks carry over; group names fanned to Shifters as well (as 1988 Bianchi).
- New ranged overrides: Santé FD-5000 2533, FC-5000 1841, BR-5000 1008, SL-5000 6190; Croce d'Aune FD 2288, RD short cage 4112, crank 1489, Delta brakes 567, levers 223, pedals 3703 B620-A, seatpost 5742 C0R2; Deore XT SIS FD-M730 2499, RD-M730 4491 (matcher hit the bare undated 4496), FC-M730 1810, BL-M730 429, SL-M730 6159; Ofmega Super Competizione crank 1703; Chorus shifters 7027 A281; Regal saddle 5561. Other catalogues unchanged.
- Left unlinked: C-Record brakes (existing null; Delta vs Cobalto in 1988), Santé RD (5000 / 5001) and levers (BL-5001 / 5002), Deore XT brakes (BR-M730 / M731), pedals (PD-M730 / M731) and seatpost (SP-M730 dated from 1989), Shimano AL 11 SIS, bare Gipiemme, Gommitalia, Concor, Ambrosio California, ITM. Possible duplicate rows: Everest freewheels 9145 "Cromo Nova" (hit by "Everest Cromo") and 2060 "Nova" (hit by "Everest Nova Cromo").

## 1997 Colnago — not loaded (user decision, 2026-10-24)

- 2velo 1997 group (61 pages): a frame catalogue. Nine framesets with tubing, sizes and Art Decor '97 paint codes (C-40, Ovaltitan, Monotitan, Master, Tecnos, Dream, Crystal, Altain, C-35); complete bikes are photo plates only. Dated by the 1997 champions spread (Museeuw world champion, Mapei-GB national champions) and Van Lierde's 1997 Ironman. Seven languages, no market. Drafted (22 specs, 0 links) but left out: frame-only rows from outside the 1970-1993 range. Draft CSV kept outside bike_specs/ so a batch run can't load it.
