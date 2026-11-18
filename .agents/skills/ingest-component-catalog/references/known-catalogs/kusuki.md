# Kusuki catalogs processed so far

No Kusuki maker catalogue has been found; see the MKS / Kusuki hunt in
`../source-hunts.md`. Before 2026-11-16 the DB held only 2859 Winpista and 6573
Medalilion 1000.

## Six Kusuki models from Panasonic USA 1985-89 — applied 2026-11-16, sources 417-421

- **Pattern.** Bike-catalogue fitment only, as with Fuji 1989 (source 412).
  Each code is printed in a Panasonic Bicycles USA spec table and named exactly
  in already-loaded bike specs. Years span the earliest to the latest of those
  catalogues; they are not introduction or end dates. Descriptions repeat only
  printed fitment text. No weights or dimensions are inferred, and group is NULL.
- **Sources.** 417 USA (1986), 418 (1985), 419 (1987), 420 (1988), 421 (1989),
  all US, citing panasonicbikemuseum.info. The transcriptions and page index are
  in `../../../ingest-bike-specs/references/known-catalogs/panasonic.md`.

| ID | Title | Category | Years | Source | Linked specs |
|---|---|---|---|---|---|
| 11329 | Kusuki WP-B | Handlebars | 1985-1987 | 417 | 3310 3442 3329 3348 (1985 Raleigh), 21488 (1985 Miyata 912), 22212 22256 22234 (1987 Miyata) |
| 11330 | Kusuki WPR-B | Handlebars | 1985-1989 | 417 | 3405 3386 3367 (1985 Raleigh Alyeska / Kodiak / Portage) |
| 11331 | Kusuki KD-LB | Handlebars | 1986-1987 | 417 | 22512 (1987 Miyata 100) |
| 11332 | Kusuki BMT-II-26B | Handlebars | 1987-1987 | 419 | 22366 (1987 Miyata Valley Runner) |
| 11333 | Kusuki S-WIN-AH, S-Win | Stems | 1985-1989 | 417 | 19126 19103 22513 (1986-87 Miyata "S-Win") |
| 11334 | Kusuki WIN Σ, Win Sigma | Stems | 1985-1989 | 417 | 22213 22235 22257 22447 22469 (1987 Miyata) |

- **Printed fitment.**
  - WP-B and KD-LB: "Maes alloy"; KD-LB with "alloy ferrule".
  - WPR-B: "Randonneur alloy".
  - S-WIN: Panasonic prints "S-WIN-AH alloy", Miyata "S-Win Alloy".
  - WIN Σ: Panasonic prints both "WIN Σ" and "WINΣ".
- **Left unlinked (reviewed again 2026-11-18; decision below):**
  - "WP-RB" (1987 Miyata 215 ST / 615 GT). Probably WPR-B with the letters swapped.
  - Bare "WIN" AH (1985 Raleigh x8): S-WIN or WIN Σ is not printed.
  - "KUSUKI SIGMA Alloy" (1985 Miyata 912).
  - Brandless "S-WIN-AH" / "S-WIN60-AH" (1980 Miyata 210 / 110 / 110L). Linking these
    would move 11333's year_from to 1980.
- **Not added (Panasonic only, no specs):** BMT-24, BMT-28, BMTL-F600, RK-3.
- **Validation.**
  - Preflight: all 45 target specs NULL; no existing row with these codes under any
    brand. 8209 CTB-5DXC1 is a crankset, so no conflict with the CTB bar.
  - Load: 4 sources, 18 rows, 45 specs. The identical rerun affected 0 rows.
  - Readback: every planned field matched, and exactly the 45 planned specs are on
    11317-11334.
  - Regeneration: linked specs 7359 -> 7404. All 41 diff hunks are these links,
    and every replaced line was NULL.
  - duplicate-report (Sakae, Kusuki; plain, `--near`, `--paren`) and
    `quality-report` raise nothing on the new ids.
- **Generator.** Exact keys for every linked spelling, under a "Panasonic USA
  1985-89 fitment rows" comment in Cranksets / Seat Posts / Handlebars / Pedals /
  Stems. The "(SR)" in the titles stops substring matching, so these keys are needed.


## Panasonic identity review — 2026-11-18 (read-only)

WP-RB/WPR-B, Sigma/WINΣ, bare WIN AH, earlier brandless S-WIN / Silver Win and the other named code variants remain unlinked. Panasonic does not explicitly establish the aliases. Existing BMT-3-26 **11691** and Rockey-2 **11692** are not new-row gaps.

[Primary scans, exact affected IDs and review limits](../../../ingest-bike-specs/references/known-catalogs/panasonic.md#remaining-identity-review--2026-11-18-read-only). No database or generator changes were made.
