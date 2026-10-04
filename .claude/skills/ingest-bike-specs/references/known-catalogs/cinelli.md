# Cinelli catalogs processed so far

## 1986 Cinelli — `1986_cinelli_spec.csv` (7 bikes, 82 specs, 52 linked)

- Source is Ten Speed Drive Imports' four-page US brochure
  (Cinelli_10_Speed_Drive.pdf), no printed date. Dated 1986 from "38
  years" after the 1948 founding and "Campagnolo's new Record Corsa road
  group". Transcribed by hand (2026-09-28). Bikes: 850 SLX Super Record
  Pro, 830 Victory, 840 SLX Competition, 860 Record Corsa (specified),
  Laser Road and Laser Track (prose only, Extras carries the disc-wheel
  note), and the SLX Super Corsa frameset as a Frameset-type row with
  sizes, both paints and the 5.5 lb weight; geometry in Extras. New bike
  brand created on load.
- Column layout (revised 2026-09-28 at user request): the "Groupset /
  Components" column was removed and its three values (Super Record,
  Victory, Record Corsa) fanned out into Front Derailleur, Rear
  Derailleur, Crankset, Seat Post, Brakes, Brake Levers and Pedals; the
  840's combined Derailleurs cell split likewise. The three loaded
  groupset rows were converted in place to Rear Derailleur rows
  (cinelli-groupset-convert.sql) so nothing was deleted; the label row
  stays for the 1983/84 Bianchi. Toe Clips, Spokes and Cable & Tape kept
  as plain text. Headset not fanned out (840 only).
- Fan-out picks (1986): Super Record rear -> 4001 2nd gen ver. 2 4152,
  brakes -> 4061 v2 583 (both existing Kalkhoff overrides year-ranged at
  1983/1984), levers -> 4062 post-83 231; Victory -> 2318 / 4168 / 0355
  1516 / 5764 / 415/102 590 / 235 / 405/000 3720; Record Corsa (C-Record)
  -> 2283 / 0102050 4096 / 1483 / A0R2 5738 / 0118065 212 / 305/501
  3693; Record Corsa brakes explicit null (Delta not shipping in 1986,
  groups delivered with SR brakes). New 'Brake Levers' override block and
  'brake lever(s)' LABEL_TO_CATEGORY mapping added.
- Era picks (1986): Super Record crank -> 1049/A 1509, headset -> 4041
  2968, SL pedals -> 4021 3716, seat post -> 4051/1 5761; Nuovo Record
  front 0104007 / rear v5 / hubs 1034 by matcher; Record hubs -> 1035
  3260 via the widened Hubs range (to 1987); Record SF -> C-Record 322/101
  3241; Victory SF -> 422 low flange 3281. Regina: CX and CXS chains ->
  1384; BX ORO -> 2195; CX 6-sp -> 2169; ORO 6-sp -> 2194 (CXS 7-sp has
  no row). Clement 2001 CF -> 6740. Cinelli 1/A -> 6489 winged C, 1/R ->
  6491. Concor Rolls -> 5563 Rolls, Concor SC -> 5547 Concor Supercorsa.
  Ambrosio Synthesis / Montreal Durex / Metamorphosis matched themselves.
- Override collision: Seat Posts 'campagnolo super record' (1981
  Kalkhoff -> 5759 two-bolt 4051, which ended 1980) ranged to
  { to 1980: 5759, from 1981: 5761 }; Kalkhoff bike_spec 780 re-pointed
  to 5761 by one-off UPDATE (kalkhoff-seatpost-fix.sql). Kalkhoff still
  57 links.
- Left unlinked: bare "Cinelli" bars, Almarc leather bar (no row),
  Alpina spokes, Bike Ribbon tape, Binda straps / toe clips, groupset
  cells, frame tubing.
- Regression: all other catalogs unchanged.

