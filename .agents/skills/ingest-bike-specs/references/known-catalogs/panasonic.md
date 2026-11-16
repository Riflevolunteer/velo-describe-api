# Panasonic bicycle catalogues (USA 1985-89), read 2026-11-16

These have been read for component evidence. No bikes are loaded. The only database change so far is CT-P5E (below).

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
| SR SAC-310 crank (1987-88) | 6 (1986 Falcon / Raleigh) |
| SR SXC-T310 (1989) / SXC-310 (1989) | 4 / 1 (1987 Miyata, 1989 Bianchi) |
| SR CTC-532 (1988-89), CTC-5SG (1985-88), CXC-300 (1985-86), CTC-680 (1989) | 2 / 1 / 2 / 1 |
| SR CRE-100 seat post (1987-88) | 1 exact (1986 Raleigh Portage "SR CRE 100"). Bare CRE / CR-E x8 are still not proven to be the same post. |
| SR CTB bar (1987-89) | 1 (1986 Raleigh Competition) |
| SR MTB-301 bar (1985-86), MTB-200 (1985) | 3 / 1 (1984-86 Miyata) |
| SR SP-518FB pedal (1988) | 1 (1986 Miyata Trail Runner) |
| Kusuki WP-B bar (1985-86) | 8 (1985 Raleigh x4, 1985 / 87 Miyata x4) |
| Kusuki WPR-B randonneur bar (1985-89) | 3 exact (1985 Raleigh). The 1987 Miyata "WP-RB" x2 is probably a transposition; that is a judgement. |
| Kusuki KD-LB (1986), BMT-II-26B (1987) | 1 / 1 (1987 Miyata) |
| Kusuki S-WIN(-AH) stem (1985-89), WIN Σ (1985-89) | 3 / 5 (1986-87 Miyata). The 1985 Raleigh bare "WIN" AH x8 could be either and is not settled. |
| MKS PB-20 pedal (1985-86) | 1 (1986 Miyata City Runner) |
| Dia-Compe DC-280 / DC-281 MTB levers (1985) | 1 / 1 (1985 Miyata) |
| Sugino TGT triple (1986) | 3 (1984-85 Miyata: TGT, TGT-LP) |
| Sansin ET-Q hubs (1986, "sealed mechanism") | The 3 1985 Raleigh "ET-QS" are probably the same model, but that is not proven. |

Kusuki has only two component rows (Winpista, Medalilion 1000), so the whole
mid-1980s Kusuki bar and stem range is missing. Other codes printed with no row
and no current unlinked spec: SR CTC-504, CTC-T532, CT-P6B, MTB-100, MTS-120,
SP-467; Kusuki BMT-24 / BMT-28 / BMTL-F600 / RK-3; MKS G-6000 / AR-2 (row 3855 is
1980 only); Suzue MTB-SS; Strong PM-30; Sugino SP-KCL / VP-110 / SVT; Tange
FL-270S.

## Existing rows: unlinked specs and date evidence

- **Link misses (row exists):**
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
