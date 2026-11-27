# Sansin / SunShine (Sanshin Matsumoto Works, Sansin Engineering) catalogs processed so far

DB brand: Sunshine/Sansin (brand 392), category Hubs (13). Hubs only; the catalogues also
sell skewers, quick seat pins and axle sets, which have no component category.

## Cadence PE-30AW / PE-30AWS description-limit review — 2026-11-27

The quality report flags hub 8996 because its description occupies all 255 characters. Its final phrase is `635g, 280g front, 355g rear`; those front and rear figures add to the stated total and the phrase is grammatically complete, though it lacks a final full stop. The length alone does not establish lost text. Live readback shows 1987–87, catalogue source 234 and no bike links. The original [1987 catalogue scan](http://cyclotourist.web.fc2.com/catarogue/part108/index.html), recorded below, was unavailable during this review, so its weights and any omitted detail were not independently rechecked. No database change was made.

## ET-QS OEM key search — 2026-11-25 (read-only)

Targeted English and Japanese searches for Sansin ET-Q / ET-QS, Raleigh OEM hubs and period maker material did not recover a 1984–85 maker key, coded specimen or suffix crosswalk. A [Panasonic DX-3000 forum listing](https://www.bikeforums.net/classic-vintage/561211-ebay-craigslist-finds-you-looking-one-these-part-ii-1152.html) repeats ET-Q with the sealed, alloy small-flange and quick-release wording already known from the 1986 Panasonic specification; it is not independent maker evidence of ET-QS equivalence. The 1985 Raleigh ET-QS specs 3448/3468/3488 remain unlinked. Revisit with a coded OEM key, marked comparative specimens or an independently documented suffix crosswalk. No database or link changes.

## SunShine Hubs for Bicycles, Catalog-3 (Jan 1981) (Reminiscence Part 89, 8 pages)

- `data_source` 233, label "SunShine Hubs for Bicycles Catalog-3 (Jan 1981)". Source:
  http://cyclotourist.web.fc2.com/special_89.html (`Image/special/special89/sunshine0001l.jpg`
  .. `0008l.jpg`, 1280 x 1809; fetch with `curl -L`, plain http answers 302). Sanshin Matsumoto
  Works Co., Ltd., "PRINTED IN JAPAN. Janu. 1981", cover "CATALOG-3". English. Reminiscence
  `cyclotourist` is the original Japanese site that the Cycles Peugeot Museum mirror
  (cyclespeugeot.web.fc2.com/reminiscence/) translates; the same Part numbers apply.
- New (16 rows, 1981-1981, J.B.G. model numbers): Professional 77-5 LF / 77-6 SF / Bearing 79-3
  (road), Professional Track 78-2 LF / 78-3 SF, Pro-Am 75-2 LF / 75-1 SF, Gyromaster 76-5 LF /
  78-1 SF, Regular cold-forged 73-5 / 79-1 (QR), 68-2 / 67-3 / 81-2 (solid spindle), Regular
  SMH-10 monoblock (QR and solid spindle). Left out as out of scope: Regular pressed steel
  66-5 / 68-1, BMX 79-2, and the racing-hub spec chart (page 8) that only repeats the weights.

## Sansin Bicycle Hub & Parts Catalog No. 11 (Dec 1987) (Reminiscence Part 108, 18 pages)

- `data_source` 234, label "Sansin Bicycle Hub & Parts Catalog No. 11 (Dec 1987)". Source:
  http://cyclotourist.web.fc2.com/catarogue/part108/index.html (`images/00.jpg` .. `17.jpg`,
  720 x 960). Sansin Engineering, Inc., "Printed in Japan, December 1987", "Catalog No. 11".
  English. The company changed its name from Sanshin Matsumoto Works between the two issues.
- New (28 rows, 1987-1987, one row per model pair with the sealed variant): PX-10 / PX-10D and
  PX-110A / PX-110AD (track), PE-10AD (Pro-Training), PE-30AW / PE-30AWS (Cadence), RE-20
  (Pro-Am), RE-100S / RE-100 and RE-101S / RE-101 (Triathlon, narrow 24" front), RE-40S / RE-40
  and RE-41S / RE-41 (Gyro-Master), RE-50, RE-60 / RE-60S, RX-50, RX-60, RX-60D / RX-60Dm
  (Sportif), CE-60 / CE-60S, CX-60 (C Series), RE-51 aero dish front, RE-60a (alpha-5000 road),
  CE-80 (Ole), AE-10A / AE-10AS, AX-10A / AX-10AS, AE-20 / AE-20S, AX-20 / AX-20S, AE-60 /
  AE-60S, AX-60 / AX-60S (Off-Roader, C Series), AE-20a / AX-20a (alpha-5000 ATB), AE-60XD /
  AX-60XD (XCD), TE-15ADS (tandem, with TE-10AS and TX-10AS). Left out as out of scope: BMX
  MX-10 .. MX-60, wheelchair HE-10AS, steel SX-81 / SX-72 / SX-86 (SE-81 in the chart),
  skewers, quick seat pins and axle sets.
- Updated (2 rows, both bare velobase series names): 3601 Sunshine Gyro-Master (1970-80 ->
  1970-87) and 3605 Sunshine/Sansin Pro Am (1975 -> 1975-87), descriptions now say they are
  series names and point to the model rows.
- Not touched, no catalogue evidence: 3602 low flange (1980), 3603 "5345" (1970), 3604 Pro
  Training Track hubs (1980, probably the PE-10AD, left as its own row), 6692 handlebar.

## Bike links (COMPONENT_OVERRIDES `Hubs`, 2026-10-20, 6 specs, all 1985 / 1986 Raleigh US)

- RE-50 -> 9002: 1985 Kodiak and Alyeska, 1986 Kodiak (the catalogue lists 32 / 36 holes; the
  40-hole rear is Raleigh's wording).
- "Sportif RE-60" -> 9003: 1985 Competition and Grand Prix.
- "AX-10A 36 hole sealed" -> 9013: 1985 Elkhorn.
- 1985 Prestige "Gyro" sealed small flange stays on 3601 (existing override); RE-40S would also fit.
- Unresolved: "Sansin ET-QS" (1985 Team U.S.A., Olympian, Marathon: 3 specs, no such model in
  either catalogue, so probably an OEM or earlier part), the 1986 "alloy sealed large flange
  36" (Elkhorn, Seneca) and 1986 Alyeska "alloy, large flange QR sealed 36 / rear 40" (could be
  RE-50, AE-10A or AX-10A, the wording does not say).


## Panasonic identity review — 2026-11-18 (read-only)

Panasonic 1986 pp.29–30 attests **ET-Q**, sealed mechanism, alloy small flange, quick release. Raleigh 1985 **ET-QS** specifies 36 holes, sealed and QR front/rear. These features fit but do not prove the suffix optional. Keep **3448/3468/3488 NULL** and do not combine ET-Q/ET-QS into an inferred model. Existing 1981/1987 maker evidence supplies no crosswalk.

[Primary scans, exact affected IDs and review limits](../../../ingest-bike-specs/references/known-catalogs/panasonic.md#remaining-identity-review--2026-11-18-read-only). No database or generator changes were made.
