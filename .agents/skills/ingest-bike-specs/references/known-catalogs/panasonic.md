# Panasonic bicycle catalogues (USA 1985-89), read 2026-11-16

These have been read for component evidence. No bikes are loaded. Database changes so far: CT-P5E (source 417), then 12 SR and 6 Kusuki rows (sources 418-421), then MKS PB-20, Sugino TGT and the Dia-Compe 280 / 281 links, all marked below.

## Brand treatment and scope decision — 2026-11-20

Use **Panasonic** as the canonical bike brand for the reviewed 1985–89 US
Panasonic catalogue backlog. This settles the pending naming choice for those
editions; do not create a combined `Panasonic / National` brand or duplicate the
same catalogue bikes under National. Preserve National wording, distributor
details and other original branding in the relevant source/evidence notes.
This is a scoped data-modelling decision based on the reviewed US editions,
not a claim that every National-branded bicycle in every market is Panasonic.
A future source explicitly selling National-branded bikes needs its own
brand/market review; there is no global National→Panasonic alias.

Keep bike-brand treatment separate from component identities. Existing
Panaracer component brand650 stays Panaracer; SR, Kusuki, MKS and other
equipment retain their documented component maker/model. A Panasonic catalogue
used as fitment evidence does not turn every listed component into a Panasonic
component. Do not create or merge component brands from this bike-brand decision.

Read-only registry checks on2026-11-20 found no bike_brand entry named
Panasonic, National or Matsushita, and only Panaracer650 among those related
component-brand names. No database brands, aliases, components, bikes or specs
were created or changed for this decision. If bike ingestion is resumed,
create/use the canonical Panasonic bike brand through the normal reviewed
ingest workflow and retain US catalogue market independently in data_source.

User preference: bike loading is deferred while focusing on components.
These catalogues remain available as component evidence; the brand decision
does not authorise a bike ingest. No ingestion CSV or SQL was prepared here.

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
| Kusuki WPR-B randonneur bar (1985-89) — **applied, 11330** (WP-RB reviewed below; unlinked) | 3 exact (1985 Raleigh). The 1987 Miyata "WP-RB" spelling remains unlinked; see the reviewed decision below. |
| Kusuki KD-LB (1986), BMT-II-26B (1987) — **applied, 11331 / 11332** | 1 / 1 (1987 Miyata) |
| Kusuki S-WIN(-AH) stem (1985-89), WIN Σ (1985-89) — **applied, 11333 / 11334** | 3 / 5 (1986-87 Miyata). The 1985 Raleigh bare "WIN" AH x8 could be either and is not settled. |
| MKS PB-20 pedal (1985-86) — **applied, 11335** | 1 (1986 Miyata City Runner) |
| Sugino TGT triple (1986) — **applied as 11336; consolidated into 1967 on 2026-11-18** (TGT-LP unlinked) | 3 (1984-85 Miyata: TGT, TGT-LP) |
| Sansin ET-Q hubs (1986, "sealed mechanism") | The 1985 Raleigh "ET-QS" spelling remains unlinked; sealed/QR features do not establish an alias. |

Kusuki had only two component rows (Winpista, Medalilion 1000) before the
2026-11-16 load; see `kusuki.md` in the component notes. Other codes printed with no row
and no current unlinked spec: SR CTC-504, CTC-T532, CT-P6B, MTB-100, MTS-120,
SP-467; Kusuki BMT-24 / BMT-28 / BMTL-F600 / RK-3; MKS G-6000 / AR-2 (row 3855 is
1980 only); Suzue MTB-SS; Strong PM-30; Sugino SP-KCL / VP-110 / SVT; Tange
FL-270S.

## Existing rows: unlinked specs and date evidence

- **Existing-row link review** (the three Araya / RT-7 / SP-KC misses below
  were subsequently applied and validated 2026-11-17; detailed evidence at the end):
  - Dia-Compe 280 8112 / 281 8113 (1984-86). The 1985 Miyata Ridge Runner "DC-280"
    and Street Runner "DC-281" specs miss them. Panasonic prints "DC-280" / "DC-281" in
    1985 and "No.280" / "No.281" in 1986-87 for the same MTB levers, so the 2026-11-16
    "no row" listing was wrong. **Applied 2026-11-16** (21632 -> 8112, 21675 -> 8113).
  - Araya **18** 4921 (1982–93): five 1984–85 Miyata Model 18 specs linked
    2026-11-17. Panasonic prints Model 18 in 1985–86; the scoped overrides now
    cover the Model / Model- punctuation and anodised wording.
  - MKS RT-7 **10832** (now 1984–86): the two 1985 Miyata Chrome Plated specs
    linked 2026-11-17 after widening the 1986-only override. The earlier date
    comes from the 1984 Miyata BMX-3000 fitment; Panasonic attests RT-7 in 1986.
  - Sugino SP-KC **5928** (now 1985–87): the two 1987 Miyata `SPK-C w/scale`
    specs linked 2026-11-17. The dates and description use the earlier Raleigh
    fitment plus the 1987 Panasonic SP-KC specification, separately from SP-KCL.
- **Identity questions Panasonic informs but does not settle:**
  - KKT "RT-E1" x10 (1979-82 Miyata) against 3773 RT-E (1974). Panasonic 1985
    prints both "RT-E" and "RT-E II"; neither explicitly establishes the RT-E1 alias.
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

## Source-hunt follow-through — 2026-11-17, applied and validated

The three existing-row link misses were matcher omissions, not missing sources
or component identities. User approved application with "apply"; all nine
previously NULL specs below now link to the reviewed existing components.

| Component | Supported specs | Evidence |
| --- | --- | --- |
| Araya 18 **4921** | 21338 / 21359 (1984 110 / 100); 21525 (1985 310); 21694 / 21716 (1985 110 / 100) | Miyata 1984 PDF p.25; 1985 pp.17–18 print Model-18 / Model 18, including anodised and 27×1¼ wording. Panasonic 1985 DX2000 / Touring Deluxe likewise print Model 18. Existing row covers these dimensions; retain TM-18 (8452) separately. |
| MKS 9004 RT-7 **10832** | 21736 / 21758 (1985 90 / Sport-10) | Miyata 1985 p.18 explicitly prints RT-7 Chrome Plated, matching already-linked 1986 values. The override was restricted to 1986. MKS Edition 11 p.4 is the code/identity source (340). |
| Sugino SP-KC **5928** | 22103 / 22189 (1987 Carbon Tech 1000 / 912) | Miyata 1987 p.26 prints SPK-C w/scale. Panasonic 1987 p.28 DX-6000 prints SP-KC 230mm micro-adjust; adjacent DX-5000 / 4000 print SP-KCL, which is not aliased. The existing row independently identifies its fluted shaft and measurement ruler. |

Source files rechecked:

- [Miyata 1984](https://www.ragandbone.ca/PDFs/Miyata%20Catalogue%20PDFs/Miyata%20Catalogue%2084.pdf), p.25, source 404.
- [Miyata 1985](https://www.ragandbone.ca/PDFs/Miyata%20Catalogue%20PDFs/Miyata%20Catalogue%2085.pdf), pp.17–18, source 405.
- [Miyata 1987](https://www.ragandbone.ca/PDFs/Miyata%20Catalogue%20PDFs/Miyata%20Catalogue%2087.pdf), p.26, source 407.
- [Panasonic 1987 p.28 scan](https://panasonicbikemuseum.info/wp-content/uploads/1987catSpecs1Page28.jpg), source 419.
- [Raleigh 1985 specification scan](https://www.sheldonbrown.com/retroraleighs/catalogs/1985/images/specifications.jpg), source 44.

Applied two component corrections along with the nine guarded NULL links:

- **10832** year_from **1985 → 1984**, year_to remains 1986, source_ref
  **340 → 404**. Miyata 1984 p.25 positively names MKS RT-7 on BMX-3000;
  Sport-10 instead says PT-7, which remains distinct. This uses component
  fitment evidence without adding the excluded BMX bike. Retain all maker
  description facts from MKS Edition 11. Availability bound, not introduction.
- **5928** NULL / NULL dates → **1985–1987**, source_ref **1 → 419**.
  Raleigh's 1985 Portage / Kodiak / Crested Butte / Elkhorn explicitly name
  SP-KC (some other rows print SP-CK); Panasonic and Miyata attest it in 1987.
  Description is now `Micro-adjusting seat post with fluted shaft and
  measurement scale; 230mm fitment listed. Japan.` Keep its title/search text.
  Old description, for restoration: `Sugino SP-KC (fluted; measurement ruler), Japan`.
  These are attested availability bounds, not production endpoints.

Validation: first SQL run changed exactly nine spec links and two component
rows. Readback verified every approved component field and mapping, with all
other bike/spec mappings, component identities and row counts unchanged. SQL
rerun affected zero rows in all eleven updates. The generator comparison across
all 96 loaded catalogues (21,196 specs) now has zero gained/changed/missing/
ambiguous mappings, with the same fifteen pre-existing lost mappings and
21,181 unchanged. All 13 test files pass; no new test file was added for these
data mappings. No competing RT-7 or SP-KC row was found; retain Sugino SP-K 5927
and Araya TM-18 8452 separately.

Whole-DB quality errors remain zero; reviews fall 1,951 → 1,950. The only
finding removed is incomplete_dates for 5928 (1,566 → 1,565); date conflicts
remain 326, broad freewheel labels 35 and descriptions at limit 24. No new
finding was introduced. Temporary SQL, downloaded scans, snapshots and review
helpers were removed after readback and idempotency validation.
The separate bike-brand/ingestion decision remains in TODO. The earlier
`/private/tmp/panasonic-1985-89/` directory was absent at the 2026-11-18 review;
re-transcribe from the recorded URLs before ingestion.


## Remaining identity review — 2026-11-18 (read-only)

Reviewed the remaining named identity questions against the Panasonic scans,
Miyata specification scans and current component rows/links. **No DB, CSV or
generator mappings changed.** The supported correction is a GT/TGT duplicate;
the suffix and spelling hypotheses below remain unproven. This clarifies the
earlier “probably” comments: they remain hypotheses rather than established aliases.
The GT/TGT consolidation was subsequently applied and validated below; the
other identities retain their reviewed leave-unlinked decisions.

### Sugino GT / TGT: duplicate correction supported; TGT-LP separate

The manufacturer photo spread explicitly captions **SUGINO GT, Model TGT**:
[Vol.56 spread 2](https://equusbicycle.com/bike/sugino/pdf/suginobrochure56%202.pdf).
Its [specification spread](https://equusbicycle.com/bike/sugino/pdf/suginobrochure56%201.pdf)
lists TGT as a triple, 165 / 170 / 175 / 177.5mm, outer 46–53T, centre
36–46T and inner 24–40T (discrete choices, not every intervening tooth count).
This is source **291**, estimated c.1982–83; there is no newly discovered
printed date. Panasonic 1986 printed p.30, ATB, explicitly lists
**Sugino TGT 46/36/26T**. That combination is covered by the maker table.

At review, rows **1967 Sugino GT (triple)** (1980–84, source 291) and **11336
Sugino TGT** (1984–86, source 417) therefore describe the same named triple;
no distinguishing generation or construction is documented in either row.
The 2026-11-16 insertion overlooked 1967's explicit TGT identification.
**Reviewed plan (subsequently applied below):** retain stable ID 1967; consolidate 11336 into it;
extend year_to **1984 → 1986** as attested availability; preserve the maker
specifications and Panasonic/Miyata fitment evidence. Repoint **21228**
(1984 Miyata 610, 52/44/28) and **21649** (1985 Terra Runner OR, 50/40/28)
from 11336 to 1967, keeping **21292** (1984 Terra Runner, GT 48/40/34) on 1967.
Update both generator TGT overrides when applying, inspect all references,
and validate readback/idempotency and regeneration. Keep the DGT double
**1937** and GT-BMX **8894** separate. The inherited 1980 lower bound was
not independently established by this review and is not a claimed introduction.

Miyata 1985 PDF p.17 explicitly prints **TGT-LP, 52×44×28, sealed B.B.**
for 610 (**21583**). Panasonic prints plain TGT; neither that matching ring
combination nor the common sealed-BB wording establishes the LP variant's
identity. GLP 1936 and ALP 1927 are different printed codes and provide no
TGT-LP crosswalk either. Keep its explicit NULL generator override. No expansion of “LP”
is established here.

### Kusuki: model distinctions still matter

- **WP-RB → WPR-B 11330:** Miyata 1987 PDF p.27 prints WP-RB Randonneur
  (**22446 / 22468**); Panasonic 1986 p.29 Touring Deluxe prints WPR-B,
  Randonneur alloy. Maker, use and letters fit a transposition hypothesis,
  but neither source explicitly equates the spellings or gives dimensions.
  Keep unlinked pending a maker code/bend/clamp crosswalk.
- **SIGMA → WINΣ 11334:** Miyata 1985 p.17 prints KUSUKI SIGMA Alloy
  (**21489**). Panasonic 1986 p.29 explicitly prints WINΣ. The Sigma name
  is suggestive, but neither source establishes that bare Sigma is the full
  WINΣ model rather than another stem. Keep unlinked pending that bridge.
- **Bare WIN AH:** Raleigh 1985's eight WIN values (**3311 / 3330 / 3349 /
  3368 / 3387 / 3406 / 3443 / 3463**) do not distinguish S-WIN-AH 11333
  from WINΣ 11334. Panasonic 1986 pp.29–30 prints both as separate stems.
- **Earlier S-WIN / Silver Win:** brandless 1980 Miyata S-WIN-AH /
  S-WIN60-AH (**20586 / 20607 / 20628**) and 1981–82 Silver Win AH
  (**20796 / 20817 / 21048 / 21069**) lack a contemporaneous maker/model
  bridge to 11333. The 1980 chart is an OCR re-render, as recorded in
  `miyata.md`; it is not original-raster proof of the exact spelling.
  Do not move 11333's lower bound to 1980 on this evidence.
- **Other named gaps:** KR-LB (**19102**) is not proven KD-LB 11331;
  BMTL-II-26FE (**22344**) is not proven BMT-II-26B 11332; RK-90
  (**22345 / 22367**) is not proven Panasonic RK-3; adjustable Rocky III
  (**8537**) is separate from documented Rockey-2 **11692**; SMC-F
  (**18548**) has no model bridge in these tables. BMT-3-26 **11691**
  and Rockey-2 **11692** already exist, so neither is a new-row gap.
  Maker/material-only Kusuki values remain insufficient for a model link.

### Dia-Compe: PN prefix and period 730 remain unresolved

Miyata 1984 PDF p.25 visibly prints **PN-280** for Ridge Runner / Terra
Runner (**21277 / 21297**) and **PN-281** for Street Runner (**21319**).
These are not transcription fixes to DC-. Panasonic 1986 p.30 ATB lists
**No.280 MTB levers**; p.31 RTB / City Bike lists **No.281 MTB levers**.
That corroborates the underlying numbered MTB lever families, but does not
explain PN-. The same Miyata models' DC-280 / DC-281 in 1985 are supporting
context, not a maker prefix crosswalk. Leave PN values NULL against
**8112 / 8113**; do not alias to GC280 **8111** either.

The 730 gap also includes **20600 / 20621** (1980 Miyata), **20810**
(1981), **21402** (1984) and **21761** (1985); the old “x2” snapshot was
incomplete. Panasonic 1986 p.31 explicitly says **730 alloy side-pull** on
Tourist-10 / -5 / -3 (front only on -3). This is evidence for a period Dia-Compe
730 identity, not a generation bridge to the 1964 mixed Dia-Weinmann row
**8929**. Weinmann **8637** is a different maker; Dia-Compe **8097**
includes **7300 steel**, a different code/material. Keep all these links
NULL until a period maker specification or comparable marked specimen can
distinguish the 730 generation. Do not widen 8929 to cover these bikes.

### KKT RT-E1: no demonstrated E1/E bridge

[Panasonic 1985 printed p.12](https://panasonicbikemuseum.info/wp-content/uploads/1985cat11.jpg)
prints **KKT RT-E** on Sport 1000 and **RT-E II** on Sport LX;
[p.13](https://panasonicbikemuseum.info/wp-content/uploads/1985cat12.jpg)
also prints RT-E II on Sport / Sport 500. These are distinct printed codes.
The ten 1979–82 Miyata RT-E1 values (**20450 / 20429 / 20597 / 20618 /
20576 / 20555 / 20807 / 20786 / 21059 / 21038**) still lack a maker
crosswalk to 1974 RT-E **3773**. Neither the digit 1 nor an inferred Roman I
is explicitly identified as the unsuffixed model. In particular, some 1980
spellings were context-normalized from the OCR re-render; Panasonic cannot
validate those historical transcriptions. Keep unlinked and retain 3773's
dates until comparable construction/dimensions or maker nomenclature is available.

### Sansin ET-Q / ET-QS: sealed is not an alias

Panasonic 1986 p.29 DX 3000 / DX 2000 / Touring Deluxe and p.30 Sport 1000
print **ET-Q, sealed mechanism, alloy small flange with Q.R.** Raleigh 1985
prints **ET-QS, 36-hole sealed, Q.R. front and rear** (**3448 / 3468 / 3488**).
Their features are compatible, but the common sealed/QR wording does not
establish that the S suffix is optional. The existing Sansin 1981 and 1987
maker notes supply no ET-Q / ET-QS crosswalk. Keep the Raleigh specs NULL;
do not borrow an RE/CE/AE series row or invent an ET-Q/ET-QS combined row.

### Sources and review limits

- Panasonic 1986 sources: [p.29](https://panasonicbikemuseum.info/wp-content/uploads/panda27.jpg),
  [p.30](https://panasonicbikemuseum.info/wp-content/uploads/panda28.jpg),
  [p.31](https://panasonicbikemuseum.info/wp-content/uploads/panda29.jpg), source 417.
- Miyata primary scans: [1984](https://www.ragandbone.ca/PDFs/Miyata%20Catalogue%20PDFs/Miyata%20Catalogue%2084.pdf),
  [1985](https://www.ragandbone.ca/PDFs/Miyata%20Catalogue%20PDFs/Miyata%20Catalogue%2085.pdf),
  [1987](https://www.ragandbone.ca/PDFs/Miyata%20Catalogue%20PDFs/Miyata%20Catalogue%2087.pdf).
  Page references above are PDF pages; the 1987 WP-RB table is printed p.26.
- [Raleigh 1985 specification scan](https://www.sheldonbrown.com/retroraleighs/catalogs/1985/images/specifications.jpg).
- Checked live component identities, descriptions, dates, source citations,
  competing 730 rows and all three current GT/TGT links. No write SQL was executed
  and no link gains are claimed. The other questions are reviewed leave-unlinked
  decisions in `../link-decisions.md`; reopen with the specific distinguishing
  evidence above. Temporary review downloads/renders were removed after recording
  the source URLs; the separate OMAS recovery deliverables were preserved.


## Sugino GT/TGT consolidation — applied and validated 2026-11-18

Applied the reviewed consolidation on the user's instruction to consolidate
the Sugino change set. Manufacturer Vol.56 spread 2 explicitly identifies
GT as model TGT; Panasonic 1986 printed p.30 supplies the later availability
attestation. Full source URLs and the identity reasoning are in the review above.

- Retained **1967 Sugino GT (triple)**, brand 55 / category 7 / group NULL.
  Title, search_text `Sugino GT`, image NULL, source UUID
  `FCC017CF-F92B-419F-8ECA-EADF570D7406` and year_from 1980 are unchanged.
  The inherited lower bound remains weak and is not a claimed introduction.
- Changed year_to **1984 → 1986**, source_ref **291 → 417**, and description
  to the following 190-character consolidated specification. Source 417 is the
  last source changing availability; maker source 291 remains the evidence for
  GT/TGT nomenclature, lengths, ring choices and reference weight.

  `GT (TGT) triple crankset; 165-177.5mm; outer 46-53T, middle 36-46T, inner 24-40T. 770g reference, 170mm 52/40. Fitments: 46/36/26, 48/40/34, 50/40/28, 52/44/28; sealed bottom bracket. Japan.`

- Repointed **21228 / 21649**, the only references to 11336, from 11336 to 1967.
  **21292** remains on 1967. Repointed both exact TGT generator overrides.
  **21583 TGT-LP remains NULL**, including its explicit generator guard;
  DGT double 1937, GT-BMX 8894, GLP 1936 and ALP 1927 remain separate.
- Removed duplicate **11336 Sugino TGT** only after its references were moved.
  Metadata inspection found no foreign keys into component_detail and no other
  table with a component_id reference besides bike_spec. There is no residual
  live bike_spec reference to 11336 and no generator mapping targeting it.

### Restoration values

Before the merge, 1967's description was:
`Sugino GT (triple), Japan, 770 grams, 170mm arms with 52 x 40 rings. Touring and 10-speed crank GT (TGT), triple, 165-177.5mm, outer 46-53T, centre 36-46T, inner 24-40T.`
Restore year_to 1984 and source_ref 291 with that description to reverse its
field edits; all its other fields were retained.

Deleted 11336 had title `Sugino TGT`, description
`Triple crankset; 46/36/26, 50/40/28 and 52/44/28 fitments listed, with sealed bottom bracket.`,
years 1984–1986, brand 55, category 7, group NULL, image NULL,
search_text `Sugino TGT`, source_ref 417 and source UUID
`2c78a58a-97e5-4291-a35c-71355c565511`. A reversal must recreate that explicit
ID/UUID before repointing only 21228/21649 back to 11336 and restoring the two
TGT generator keys. Keep 21292 on 1967 and 21583 NULL.

### Validation

The guarded transaction affected exactly one retained component, two spec links
and one duplicate deletion. The identical SQL rerun affected zero rows in every
mutation. Before/after snapshots confirm no other component field, bike spec,
bike, source, category, brand or group changed; total components fell by one
(10760→10759), with all 23168 bike specs retained.

All 107 loaded catalogues were compared: 23168 specs, 23153 generator/live matches,
zero gained/changed/missing/ambiguous mappings and the identical 15 pre-existing
lost mappings. All 13 test files passed. Whole-DB quality stayed at zero errors
and 1983 review findings, with the exact same findings before/after. Sugino near
and parenthesis duplicate searches report no candidates; the standard report's
GT double/triple configuration distinction remains intentional and is documented
by the maker's DGT/TGT codes. No additional duplicate is merged on that report.

Removed the completed TODO action. Temporary SQL, snapshots and validation logs
were removed after readback, the idempotency check and result recording. The
separate OMAS recovered documents were preserved.
