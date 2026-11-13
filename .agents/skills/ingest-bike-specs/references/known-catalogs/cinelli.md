# Cinelli catalogs processed so far

## 1986 Cinelli — `1986_cinelli_spec.csv` (7 bikes, 82 specs, 52 linked)

- Source location (added 2026-10-21): VeloBase CatalogScans/Cinelli `Cinelli_10_Speed_Drive.pdf`, listed there as "Cinelli Frames (mid-80's)" (791 KB; https://velobase.com/Pages/Resources/CatalogScans.aspx); the filename matches the one named below. The same folder has `Cinelli_Acccessories.pdf` and `Cinelli_Accessories_2.pdf` ("Cinelli Componets (mid-80's)"), not used.

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

- 2026-10-30: 1986 860 Record Corsa "Regina CXS 7-speed" left unlinked by decision (2169 CX/CX-S is the 6-speed only).


## 860 Record Corsa brake link — 2026-11-07

- User-approved inference: 1986 Brakes spec 2338 "Campagnolo Record Corsa"
  -> 583 "Campagnolo 4061, Super Record (v2)". Supersedes the explicit
  null recorded above. No component dates or descriptions changed.
- Original four-page Ten Speed Drive brochure re-read, especially PDF p. 3:
  https://velobase.com/CatalogScans/Cinelli/Cinelli_10_Speed_Drive.pdf
  The 860 names the Record Corsa road group; no separate brake model or
  dedicated 860 bike photograph is supplied. The red bicycle pictured
  above the 860 text belongs to the 840 SLX Competition section.
- Campagnolo 18 bis, printed p. 6, specifies Super Record-family brakes
  while the 315/101 brake set is unavailable. Primary catalogue text:
  https://ebykr.com/library/campagnolo-catalogue-18-bis/
- Choosing 583 follows the existing early C-Record convention used for
  De Rosa and Colnago; exact Cinelli caliper and reach remain inferred.
  Generator override is limited to year 1986 and bike "860 Record Corsa".
- Compared all 81 CSVs: only this brake link changed (6077 -> 6078 generated
  linked specs). Applied `/tmp/cinelli-1986-record-corsa-brake-link.sql`,
  one row affected, read-back confirmed 583, rerun affected zero rows.
  Live brake coverage 626 -> 627 of 1013 specs.

## c. 1994 Cinelli — `1994_cinelli_spec.csv` (loaded 2026-11-12)

- User selected the catalog posted as "1982 CINELLI CATALOG" at
  https://saarf.london/2012/08/22/1982-cinelli-catalogue/ . This heading is
  incorrect: spread 2 captions Seoul 1988 and spreads 9-10 mention the 1991
  Compasso d'Oro. The 1982 on the cover credits Mario Schifano's artwork.
  Working publication date 1994: the owner of an identical catalog labels
  its cover, Laser spread, pursuit-team spread and historical Supercorsa
  photo as 1994 at https://oli-roadworks.blogspot.com/2010/12/ . Stratos,
  ErgoPower, STX S.E. and 8-speed XT are consistent. No printed publication
  date found; retain this qualification when discussing the year.
- Source: 22 JPEG spreads; table is spread 12, Italian model descriptions
  spread 11, English spread 13, current model photos spreads 15-16 and
  19-21. Copies `/tmp/cinelli-1982-{1..22}.jpg`. Bilingual Italian/English;
  market not explicitly stated, so source country remains NULL.
- Eight eligible bikes: road Genius Strada, Supercorsa, Unica, Proxima;
  MTB Genius Soft Machine, Genius Machine, Argento Vivo, Velociraptor.
  Passatore explicitly described as a hybrid: excluded. Frameset-only
  pages 17-18/21, historical Supercorsa 1960 photo (spread 14), and Laser
  historical montage (spread 9) do not create additional bike rows.
- 19 existing labels, 145 specs, 43 component links. Prepared SQL:
  `/tmp/cinelli-1994-review.sql`; readable component-title summary:
  `/tmp/cinelli-1994-summary.txt`. User approved loading on 2026-11-12.
- Source separately names shifters, brake levers, brakes, both derailleurs,
  cranksets and pedals; no groupset fan-out added. RUOTA LIBERA is stored
  as Cassette for these 7-/8-speed freehub groups. ErgoPower specified in
  the model prose is carried on road Shifters; standalone brake-lever
  matches are blocked where an integrated control is meant.
- Era corrections: Record crank -> 7036 FC-01RE, not old 144-BCD 1496;
  Record/Chorus brakes -> 7076/7077 1994 dual-pivot; XT eight-speed group
  -> M737 crank 8669, front 2503, rear 8668, brakes 986, rear hub 3552.
  STX S.E. crank/rear/control -> 1843/4537/6369; no guessing later STX or
  Alivio rows dated 1995+. Chorus rear/post -> 7055/7041. Chorus ErgoPower
  -> 6345 EC-12RE CG (also used for Chorus); Veloce -> 6349.
- Variant judgments left unlinked: Record front/rear/ErgoPower (multiple
  contemporary variants); Chorus front and Record/Chorus pedals; generic
  Mavic Ceramic; Shamal (the matcher picked a 1997-98 12-HPW row);
  Bontrager saddle with illegible suffix; Grammo Ahead (later 1996 row),
  Oyster (DB starts 1996), other ambiguous cockpit/saddle/tyre/cassette
  descriptions. Named Gamma rims use 4950 Gamma Strada, though its DB
  year_to is 1992; this catalog attests the name later, with no component
  date edits included in this draft.
- Table reread corrections: Genius Machine pedals read SPD 737 like Soft
  Machine, Proxima rim reads Gamma, Argento Vivo stem reads 3T Procrom
  Ahead. Velociraptor saddle suffix remains omitted; uncertainty is kept
  here rather than displayed as a bike spec.
- Regression: regenerated all 83 pre-existing CSVs, compared every spec
  tuple and component_id: all 18,125 existing specs unchanged. New-catalog
  generation and `node --check` / `git diff --check` pass.
- Loaded after user approval: one data_source, eight bikes and 145 specs
  inserted; 43 specs link to components. Second execution affected zero
  rows throughout. Read-back: 1986 = 6 bikes / 79 specs / 52 links;
  1994 = 8 bikes / 145 specs / 43 links. No component rows changed.

## Proxima 1/E stem link — 2026-11-13, user approved

- The c.1994 model table (source 378, spread 12) prints PIANTONE `CINELLI 1/E` for Proxima. Linked stem spec 20245 to existing component 6490 `Cinelli 1E`. Slash normalization produces `cinelli 1 e`, which needs its own generator key; added an override scoped to Proxima and working year 1994.
- Component 6490 year_to extended 1986 -> 1994 from this fitment, source_ref 1 -> 378; year_from 1980 retained. The catalogue date remains c.1994, not a printed publication year. No new component, title or description changes. Handlebar spec 20244 also prints 1/E but remains NULL: the stem row cannot identify a handlebar.
- Compared all 85 CSVs before/after: generated links 6330 -> 6331, only the Proxima stem mapping changes. Live DB snapshots across 18,283 specs confirm only 20245 changes from NULL to 6490; SQL rerun zero affected rows. Files: `/private/tmp/cinelli-proxima-1e/proposed.sql`, `before-generator.sql`, `after-generator.sql`, `generator.diff`, `before-links.tsv`, `after-links.tsv`.

## Unica / Supercorsa Giro d’Italia 26 links — 2026-11-13, user approved

- Source 378, c.1994 model table: the two recorded `Giro d’Italia 26` handlebar specs match existing component 2800 `Cinelli 64 Giro D'Italia (26.0 clamp)`. Linked 20226 (Unica) and 20208 (Supercorsa), previously NULL. Added the exact normalized override `giro d’italia 26`, ranged to working year 1994. Earlier Giro variants are not used or merged.
- Component 2800 year_to extended 1990 -> 1994, source_ref 1 -> 378; retained year_from 1990. Catalogue working date is c.1994, not an original printed publication date. No new component, title, description or spec-value changes.
- All 85 CSVs compared: generated links 6331 -> 6333, only these two handlebar mappings change. Live snapshots across 18,283 specs confirm only 20208/20226 change from NULL to 2800. Repeated SQL affects zero rows; loaded generation is identical to the reviewed output. SQL/evidence: `/private/tmp/cinelli-giro26/` (proposed.sql, generator.diff, before/after-generator.sql, before/after-links.tsv).
- 2026-11-13 (user's call): Genius Machine / Genius Soft Machine "Shimano
  Deore XT" Shifters -> 6364 ST-M738 (8-speed 2-finger Rapidfire Plus shift /
  brake set, matching the 8-speed M737 crank / rear); was an explicit 1994
  null. Their Brake Levers follow through integratedBrakeLeverLink. Caveat:
  an ST-M737 7-speed control may also exist for 1994; the DB has no row.

## Velociraptor / Argento Vivo 3T bar links — 2026-11-13, user approved

- Source 378, c.1994 model table: Velociraptor "3T Extreme" -> 8307 3ttt CEXT, Extreme and Argento Vivo "3T Procompe"
  -> 8331 3ttt CPRO, MTB Procompe; each name matches one row. Bike-scoped 1994 overrides `3t extreme` / `3t procompe`,
  as the Giro d'Italia 26 and 1/E links above.
- Component year_to extended 1991 -> 1994 on both, source_ref 137 (3ttt c. 1991 Mathi catalogue, which titled / added
  them) -> 378; year_from kept (8307 1989, 8331 1991). No title or description changes.
- Generator links 6440 -> 6442, only these two handlebar mappings. Guarded SQL rerun affects 0 rows.
- Left: Genius Machine / Soft Machine "3T Pro Light" and Genius Strada "Cinelli Eubios 26" (no rows).
