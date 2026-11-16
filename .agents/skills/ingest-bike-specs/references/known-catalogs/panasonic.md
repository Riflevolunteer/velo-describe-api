# Panasonic bicycle catalogues (USA 1985-89), read 2026-11-16

These have been read for component evidence. No bikes are loaded. Database changes so far: CT-P5E (source 417), then 12 SR and 6 Kusuki rows (sources 418-421), then MKS PB-20, Sugino TGT and the Dia-Compe 280 / 281 links, all marked below.

## Source

- Site: panasonicbikemuseum.info. There are 20 catalogues; list them from
  `/wp-sitemap-posts-pbvm_catalog-1.xml`. Images are at
  `/wp-content/uploads/<file>`, and plain curl works.
- The following were read in full (US market, Panasonic / National, printed in Japan):

| Year | Spec pages (file names) | Bikes |
|---|---|---|
| 1985 | `1985cat03`-`1985cat21` (one box per bike page), `1985cat23` tyre table | 26 |
| 1986 | `panda26`-`panda29` (printed pp.28-31); `panda30` is a generic Panaracer tyre table | 25 (Cruiser and children's models only on `panda19` / `panda22-23`, not read) |
| 1987 | `1987catSpecs1Page28`, `...Specs2Page29`, `...Specs3Page30` | 21 |
| 1988 | `1988pg22`-`1988pg25`; PICS custom catalogue `pics-page2` / `pics-page3` | 27 |
| 1989 | `89CSS02-04, 06, 07, 09`, `89MC02-04`, `DXser02, 03, 05` (89CSS05 is a rescan of 02) | 23 |

- The transcriptions are one row per bike per component, verbatim, with uncertain
  characters marked `[?]`. Copies are in `/private/tmp/panasonic-1985-89/specs_*.tsv`,
  next to the unlinked-spec snapshot they were matched against. Re-transcribe from
  the URLs above if those files are gone.
- Reading notes:
  - The 1988 "L54IGS" (Mountain Cat 1500) is presumably L541GS; the 1989 Sport LX
    prints "L541".
  - The 1987 DX-1000 and City Bike clearly print L532.
  - The 1989 MC-6500 rim reads "Super[?] hard".
- Status: these are fitment tables, not maker specifications. As with Fuji 1989
  (source 412, see `sakae-ringyo.md`), they establish that a code existed in that
  year and which bikes used it. They give no weights or dimensions beyond the
  printed sizes.

## Codes printed here that have no component row

The figures are unlinked specs from the 2026-11-16 snapshot that name the same code.
Each would get an exact link if a row were added.

| Code (Panasonic years) | Unlinked specs naming it |
|---|---|
| SR CT-P5E seat post (1985-87) | **Applied 2026-11-16:** row 11316, source 417. 31 specs linked, 13 of them moved off CT-P5 5857. See `sakae-ringyo.md`. |
| SR SAC-310 crank (1987-88) — **applied, 11317** | 6 (1986 Falcon / Raleigh) |
| SR SXC-T310 (1989) / SXC-310 (1989) — **applied, 11318 / 11319** | 4 / 1 (1987 Miyata, 1989 Bianchi) |
| SR CTC-532 (1988-89), CTC-5SG (1985-88), CXC-300 (1985-86), CTC-680 (1989) — **applied, 11320-11323** | 2 / 1 / 2 / 1 |
| SR CRE-100 seat post (1987-88) — **applied, 11324** | 1 exact (1986 Raleigh Portage "SR CRE 100"). Bare CRE / CR-E x8 are still not proven to be the same post. |
| SR CTB bar (1987-89) — **applied, 11325** | 1 (1986 Raleigh Competition) |
| SR MTB-301 bar (1985-86), MTB-200 (1985) — **applied, 11326 / 11327** | 3 / 1 (1984-86 Miyata) |
| SR SP-518FB pedal (1988) — **applied, 11328** | 1 (1986 Miyata Trail Runner) |
| Kusuki WP-B bar (1985-86) — **applied, 11329** | 8 (1985 Raleigh x4, 1985 / 87 Miyata x4) |
| Kusuki WPR-B randonneur bar (1985-89) — **applied, 11330** (WP-RB still open) | 3 exact (1985 Raleigh). The 1987 Miyata "WP-RB" x2 is probably a transposition; that is a judgement. |
| Kusuki KD-LB (1986), BMT-II-26B (1987) — **applied, 11331 / 11332** | 1 / 1 (1987 Miyata) |
| Kusuki S-WIN(-AH) stem (1985-89), WIN Σ (1985-89) — **applied, 11333 / 11334** | 3 / 5 (1986-87 Miyata). The 1985 Raleigh bare "WIN" AH x8 could be either and is not settled. |
| MKS PB-20 pedal (1985-86) — **applied, 11335** | 1 (1986 Miyata City Runner) |
| Sugino TGT triple (1986) — **applied, 11336** (TGT-LP still open) | 3 (1984-85 Miyata: TGT, TGT-LP) |
| Sansin ET-Q hubs (1986, "sealed mechanism") | The 3 1985 Raleigh "ET-QS" are probably the same model, but that is not proven. |

Kusuki had only two component rows (Winpista, Medalilion 1000) before the
2026-11-16 load; see `kusuki.md` in the component notes. Other codes printed with no row
and no current unlinked spec: SR CTC-504, CTC-T532, CT-P6B, MTB-100, MTS-120,
SP-467; Kusuki BMT-24 / BMT-28 / BMTL-F600 / RK-3; MKS G-6000 / AR-2 (row 3855 is
1980 only); Suzue MTB-SS; Strong PM-30; Sugino SP-KCL / VP-110 / SVT; Tange
FL-270S.

## Existing rows: unlinked specs and date evidence

- **Link misses (row exists):**
  - Dia-Compe 280 8112 / 281 8113 (1984-86). The 1985 Miyata Ridge Runner "DC-280"
    and Street Runner "DC-281" specs miss them. Panasonic prints "DC-280" / "DC-281" in
    1985 and "No.280" / "No.281" in 1986-87 for the same MTB levers, so the 2026-11-16
    "no row" listing was wrong. **Applied 2026-11-16** (21632 -> 8112, 21675 -> 8113).
  - Araya **18** 4921 (1982-93). "ARAYA Model 18 / Model-18" x5 on 1984-85
    Miyata; Panasonic prints "Araya Model 18" in 1985-86.
  - MKS RT-7 10832 (1985-86). Two 1985 Miyata "MKS RT-7 Chrome Plated" specs miss
    because the override is 1986-only. Panasonic attests RT-7 in 1986.
  - Sugino SP-KC 5928 (undated). Two 1987 Miyata "SUGINO SPK-C w/scale" specs miss
    the `sugino spkc` override. Panasonic 1987 DX-6000 has SP-KC, which gives 5928 a
    1987 date.
- **Identity questions Panasonic informs but does not settle:**
  - KKT "RT-E1" x10 (1979-82 Miyata) against 3773 RT-E (1974). Panasonic 1985
    prints both "RT-E" and "RT-E II", so RT-E1 is probably the plain RT-E.
  - Dia-Compe 730 x2 (1984-85 Miyata) against 8929 "500 / 730 / 810" (1964).
    Panasonic 1986-87 still lists a "730 alloy side-pull".
  - Araya 16A[3] (1985-86) against the Miyata "Model 16-A3" x5; 4916 Araya 16A has
    no variant number.
  - National CX-Alpha 230g x3 (1987 Miyata). Panasonic 1988 has CX-α250, a
    different weight.
  - Panaracer Record: 6841 P-27RD is dated 1980, and Panasonic 1985 lists a
    "270gr. Record" tubular.
- **Date evidence (fitment, check against `quality-report` before widening):**

| Row | Current years | Panasonic shows |
|---|---|---|
| 3145 Tange Nova | 1980-86 | 1987 |
| 662 Dia-Compe 983 | 1980 | 1987 |
| 661 Dia-Compe 981 | 1980-86 | 1985-87 |
| 3860 MKS Esquartz 107 | 1983-85 | 1987 |
| 10043 MKS Sylvan Track | 1985 | 1987 |
| 9007 Sansin CE-60 | 1987-89 | 1986 |
| 7190 SL-MT36 | 1988 | 1987 |
| 10846 SR MTS-100 | 1983-85 | 1986 |

- **Not helped:** Shimano Z501 *shifters* (Panasonic prints Z501 rear
  derailleurs with Z401 stem shifters); Tange Levin "sealed" and Araya 16-B
  variants (several rows fit); the 1987 Raleigh "Light Action wide ratio" (no
  code).

## Panaracer tyres (1985 / 1986 tables, 1989-95 European catalogues), applied 2026-11-16

- **Tyre tables:** `1985cat23` and `panda30` print Panasonic / Panaracer models with
  sizes, weights and pressures. 1985: Touring Type 10 and 7-B (gumwall / open side,
  Kevlar breaker), 7-B / Swift folding, tubulars Course 300 g and Record 270 g,
  extra-light tubes. 1986: Touring Gumwall, Dual Skin Side, Tour Guard Gumwall / Skin
  (Kevlar), Vertex 700x23C semi-bald 220 g, Swift folding, tubulars Rapide (track)
  150 g, Record (road) 270 g, Course (road) 300 g, Tour Guard 24 (triathlon) 240 g,
  Ibex 26x2.00 900 g, Ridge Line 26x1.50 550 g. The 1979 and 1981 US tables
  (`1979tirestubes`, `1981FitandTires`) were also read; 1982-83 print no model names.
- **European catalogues** (same site: 1989 EU, 1990 / 1992 / 1993 / 1995 DE, 1991 NL;
  verbatim tyre lines were transcribed to the session scratchpad, not kept).
  - Front / rear is printed only for Headwall front with Khartoum rear (1990) and
    Timbuk-II front with Khartoum rear (1991-92).
  - Smoke 26x2.1 appears on its own in 1991-92.
  - Smoke Lite Comp 26x1.9 appears in 1992, and as Smoke Lite in 1993.
  - 1993 prints the one entry "SMOKE DART/SMOKE" 26x2.1 (body text "Smoke-Dart-HC"),
    and 1995 prints "DART-II/SMOKE-II". Neither says which tyre goes front.
  - Also printed: IBEX / IBEX-II 26x2.00 (1989-93), Khartoum and Khartoum 38 Special
    700C, RidgeLine-2 700x35C, Hi-Road, Road Runner, Tecnova II 700x18C (1992), and
    "Light Extra" 700x20C road tyres.
  - Not found: Cannonball Express, Canyon Express, Ridge Line III, Leger, Trisport,
    CX-Alpha.
- **Sources:** 424 `Panasonic Bicycles catalogue, Netherlands (1991)`; 425 `... Germany
  (1992)`; 426 `... Germany (1993)`. The 1993 date comes from the back page "PRINTED IN
  JAPAN 93G"; the 1991 date from its text; 1992 is the site label.
- **Rows inserted:**
  - 11368 Smoke (26 x 2.1), 1991-1994 (the 1994 end comes from Cinelli fitment).
  - 11369 Dart (26 x 2.1), 1993.
  - 11370 Smoke Lite Comp (26 x 1.9), 1992-1993.
  - 11371 Record (tubular, 270 g), 1983-1986, `source_ref` 417. The 1983 start comes
    from the Bianchi Professional spec, matched by weight; it is a different tyre from
    6841 "Record P-27RD", a 27-inch clincher.
- **Rows widened from fitment:**
  - 10973 Timbuk II: `year_to` 1989 -> 1992, description now notes the folding version
    and its front use. Revert: 1989, "Mountain-bike tyre, 26 x 2 inches.", `source_ref` 323.
  - 6842 Tecnova: `year_to` 1990 -> 1992. Revert: 1990, `source_ref` 1.
- **Links (bike-scoped overrides):**
  - 20167, 1994 Cinelli Argento Vivo "Panaracer Smoke" -> 11368.
  - 931, 1983 Bianchi Professional "Panaracer 270g tubular" -> 11371.
- **Kept unlinked (`null` overrides):**
  - The 1993 Bianchi Smoke/Dart Comp (Kevlar) cells x4: front/rear use is unproven.
  - The 1991 Grizzly "Smoke Comp K": Kevlar bead, no row.
  - The 1993 Project 5 / 7 bare "Smoke": 700C bikes.
  - The 1991 Bianchi "Panaracer Record": tubular or clincher unknown.
  - The 1987 "MIYATA IBEX": house brand.

## 1992 German catalogue spec table (diffed 2026-11-16, no DB changes)

- `Panasonic_1992_DE_Page_12-scaled.jpg` is the only spec page: a two-page "Technische
  Daten" spread for 20 models (MC Team-MC 3500, CB 5000-2000, South Street, PR6000-1000,
  Triathlon Ltd). The text "1992 wartet auf das Team ..." dates it.
- Mostly Shimano, from XTR / XT / DX / LX down to 300LX, 500CX / 200CX, and on the road
  bikes Dura-Ace 7400, 600 Ultegra, 105SC, RX100 and 500EX / 300EX. Also Araya rims,
  Ritchey bars / stems / posts, Nitto, Mavic GP-4, Selle Italia Turbo and Panaracer tyres.
- A script diff of its part codes against all unlinked 1985-95 specs found only two
  codes in common, both printed **without a maker**:
  - "MTB-110 580mm black" bars, matching the 1989 Bianchi "H.L. MTB-110" x4.
  - "SP-243 alloy black" posts, matching the 1989 Bianchi "KA SP-243".
  Neither is enough to add a row. That yield is too low to justify reading the 1990,
  1991, 1993 and 1995 tables blind.
