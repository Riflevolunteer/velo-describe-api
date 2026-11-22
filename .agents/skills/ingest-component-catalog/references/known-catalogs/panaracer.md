# Panaracer catalogs processed so far

## Rivendell No.4, 1998 — applied and validated 2026-11-22

Added Pasela 12258 from the retailer's 700x35 and 26x1.25 offerings, source
490; 1998 is retail availability. The Category Pro/Cat 1 listing remains
unassigned because its name and construction do not identify an existing
variant. [Catalogue evidence](cross-catalog-notes.md#rivendell-no4-remaining-components--applied-and-validated-2026-11-22).

## Timbuk II — Raleigh lightweight catalogue 1989 (2026-11-09)

- User-approved bike-fitment evidence pass, not a full Panaracer range catalogue. Added **10973 Panaracer Timbuk II (26 x 2)**, brand 650, Tyres 23, group NULL; UUID `4eb9f4a7-b17f-47aa-aeeb-ace172653a7b`, source_ref **323** (1989 Raleigh catalogue).
- Original scan [printed p.14, Ebykr image p13](https://ebykr.com/wp-content/uploads/2026/10/ebykr-1989-raleigh-lightweight-catalog-p13.webp), from [the catalogue index](https://ebykr.com/library/raleigh-1989-lightweight-catalog/), explicitly lists Panaracer Timbuk II 26 x 2 for Avanti / Appalachian / Ozark. Image p14 is the next printed page, p.15, and is not the evidence page.
- Dates **1989-1989** are attestation only. Description is limited to mountain-bike tyre, 26 x 2 inches. Later reissues exist; do not import their folding bead, weight, casing or other construction details into the original row.
- Linked Raleigh specs **18183 / 18200 / 18217**. Generator entries scoped to these three bikes in 1989. No matching model row existed; no duplicate merge or other Panaracer component change.
- Still open: 1993 Bianchi Project 5 / Project 7 bare Smoke specs are on **700C** bikes; do not identify them with 26-inch Smoke tyres. Smoke / Dart Comp and Kevlar compound entries also need separate front/rear and construction evidence. The 1991 Grizzly Smoke Comp K is another variant, not proof for ordinary Smoke.
- Applied SQL: `/private/tmp/tyres-review-2026-11-09.sql` (two component inserts and ten tyre links across brands); original scan saved as `/private/tmp/tyres-raleigh1989-p13.webp`.

## Panaracer USA tyre and rim brochure (1997) — applied and validated 2026-11-17

- Source: [manufacturer brochure, two scan sheets](https://bikalog.org/api/view/Panaracer/1999/panaracer99.pdf). Archive path says 1999, but sheet 1 prints copyright **1997 National Tire Co.**, Panaracer USA / National Tire addresses and **For 1997** sponsorship copy. USA edition with a Polish distributor stamp. No printed model part numbers. Sheet/panel references below describe the scan layout, since individual folded panels have no page numbers.
- All product panels read visually; small specification tables checked from full-resolution crops. Covers, sponsorship, BFC/ASB technology and terrain-selection panels supply context; GreenLite polyurethane / Super butyl inner tubes are out of scope because the DB has no inner-tube category. No complete earlier manufacturer printing compared: this pass cannot establish range additions or withdrawals.
- **User-approved and applied:** new catalogue source **433**, Panaracer/Rims category association (brand 650/category 16), **11 component inserts (11436–11446) and 3 updates (10222 / 11368 / 11369)**. Existing Tyres association is category 23. New identities are 1997–1997 attestations, group NULL. No bike-spec writes or generator edits.

| Category | Printed identity / existing row | Catalogue specifications | Sheet/panel | Applied action |
|---|---|---|---|---|
| Tyres | Mach-SK | Semi-knob, ASB, 26×1.95, 47 mm; steel/folding 650/570 g | 1 right, third panel | Added 11436 |
| Tyres | Mach-SS | Semi-slick/file tread, ASB, 26×1.95, 47 mm; steel/folding 630/550 g | 1 right, third panel | Added 11437 |
| Tyres | DusterPro front | BFC/carbon black, ASB; 26×2.1/50 mm 630/550 g or 26×1.95/47 mm 600/520 g, steel/folding | 1 bottom left | Added 11438 |
| Tyres | DusterPro rear | Same printed sizes/weights, distinct rear tread | 1 bottom left | Added 11439 |
| Tyres | DusterPro DH front | BFC, blue polyester casing protector, 26×2.20/53 mm, steel bead, 880 g | 2 top right | Added 11440 |
| Tyres | DusterPro DH rear | Same printed dimensions/weight, separately labelled rear | 2 top right | Added 11441 |
| Tyres | Dart Classic (front), **11369** | 26×2.1/50 mm; steel/folding 650/560 g | 2 second panel left | Enrich existing Dart; year_to 1993→1997 |
| Tyres | Smoke Classic (rear), **11368** | 26×2.1/49 mm; steel/folding 660/570 g | 2 second panel left | Enrich existing Smoke; year_to 1994→1997 |
| Tyres | Spike front | Hard-rubber mud tread, 26×1.95/46 mm; steel/folding 730/640 g | 2 second panel right | Added 11442 |
| Tyres | Spike rear | Hard-rubber mud tread, 26×2.0/47 mm; steel/folding 770/680 g | 2 second panel right | Added 11443 |
| Tyres | Category Pro, **10222** | BFC black centre/blue shoulders, Aramid-backed Tornado casing; steel/folding: 700×20C 245/200 g, 700×23C 260/215 g, 26×7/8 230/185 g | 2 third panel left | year_from 1999→1997; enrich the existing steel-bead row with steel figures only |
| Tyres | Category Elite | Nylon casing, dual-compound black centre/red shoulders, steel bead; 700×20C 250 g, 700×23C 270 g, 26×7/8 220 g | 2 bottom left | Added 11444, separate from Elite K |
| Rims | XC Shield | 26×1.5–2.1, 32h aluminium, 480 g, printed widths 23.0/16.2 mm; ASB elastomer over outer wall/flanges | 2 bottom right | Added 11445 |
| Rims | DH Shield | 26×1.5–2.2, 32h aluminium, 590 g, printed widths 35.5/21.5 mm; disc-specific/no braking sidewall, ASB elastomer | 2 bottom right | Added 11446 |

### Reconciliation and identity limits

- Live Panaracer/title/alias search found no Mach, DusterPro, Spike or Shield counterparts. New rows aggregate sizes and bead options within the printed model; independently printed front/rear identities remain separate, including those with identical weights. No merge/deletion proposed.
- **Smoke/Dart continuation is supported by explicit manufacturer wording**, not name alone: the panel calls them the originals and says both remain available, at the same 26×2.1 size as 11368/11369. Extend those model families to 1997 rather than insert competing Classic rows. Their new descriptions explicitly qualify the bead/weight/width figures as **1997**; no earlier construction is inferred. The history mentions Smoke in 1990 and Dart in 1992, but does not establish those years for the exact configuration represented by the fitment rows: retain year_from **1991 / 1993**.
- The existing source-353 **10222 Category Pro** is explicitly steel bead, 700×20C, 245 g: exact printed match. Retain its steel-bead scope and existing 1999 end. Do not assign the 1997 folding specifications to **10224 Category Pro Comp**, whose later title and 245 g folding description need their own source review. Keep **10539 Category One (1996)** separate, as already reviewed in cross-catalog notes; this brochure confirms the Category Pro name by 1997, not an alias or merge.
- New steel-bead Category Elite is distinct from **10223 Category Elite K**, a folding Kevlar-bead 1999 identity (184 g). **11370 Smoke Lite Comp (26×1.9)** also remains separate. No tyre descriptions receive inferred reissue specifications.
- No supported new bike links: 1993 Bianchi Smoke/Dart Comp (Kevlar) specs **1623 / 1640 / 1657 / 1674** still need period Comp/construction/fitment identification; the 1997 Classic front/rear roles alone do not identify them. **19549** (1991 Smoke Comp K) likewise remains unresolved. **1759 / 1776** are 700C Project 7/5 bikes, while this brochure lists only 26-inch Smoke/Dart. Cannonball Express, older tubulars and bare 1980s sizes are not identified here. Existing **20167** (1994 Cinelli Argento Vivo→11368) remains intact.

### Applied updates and validation

Old values retained for review/restoration (titles do not change):

| ID | Old years/source | Old description |
|---|---|---|
| 10222 | 1999–1999 / 353 | Compound with BFC system and Aramid structure; tread: herringbone; 700x20c; steel bead wire; 245g |
| 11368 | 1991–1994 / 424 | Mountain-bike tyre, 26 x 2.1, black skinwall. Panasonic MC Cat / Comp 1991, MC Pro / Cat 1992; paired with the Dart in 1993. 1994 from Cinelli Argento Vivo fitment. |
| 11369 | 1993–1993 / 426 | Mountain-bike tyre, 26 x 2.1, sold with the Smoke as "Dart/Smoke" ("Smoke-Dart-HC") on 1993 Panasonic MTBs; front/rear use not printed. |

- SQL used source-label and source-UUID/title insert guards, exact old-value update guards, generated search text for inserts and descriptions ≤196 characters. Retitles, merges, later year_from moves and bike-spec changes: none. Actual first-load affected counts matched the proposal: one source, one category association, 11 inserts, three updates. **Rerun: zero affected rows for every INSERT/UPDATE.**
- Readback asserted all 14 components' descriptions, year ranges and source 433; new rows' titles, category, brand, NULL group, UUIDs and generated search text also matched. Source country US and unique source label verified; Panaracer has exactly Tyres/Rims associations. Existing Cinelli spec 20167 still links 11368.
- Live pre-change duplicate report: zero Panaracer groups. Post-load report: exactly three configuration pairs, **11438/11439**, **11440/11441**, **11442/11443**, kept separate because the manufacturer labels front/rear products independently. Zero merge candidates; near-name report zero pairs. Steel Elite **11444** remains separate from Elite K **10223**. Do not merge these distinctions based on similar descriptions.
- Read-only simulation with the shared generator over **96 loaded catalogues / 21,196 specs**: **no changed generated mappings or findings** after overlaying all proposed components. Existing generator/live drift of 15 lost mappings is identical before/after and outside this proposal; it is not caused by Panaracer. The 1997-only additions provide catalogue coverage rather than immediate link gains.
- Actual post-load shared-generator/live comparison reproduced the baseline exactly across **96 loaded catalogues / 21,196 specs** (21,181 unchanged and the same 15 pre-existing drift findings). No new, lost or changed mapping introduced by this load; zero new links. Earlier Comp/Kevlar and 700C Smoke gaps remain open as described above.
- Source URLs, complete inventory, old values and applied IDs are retained here. Task SQL, transcriptions, validation snapshots/scripts and downloaded scan/renders were removed after field readback, mapping checks and zero-change rerun; this record does not depend on a temporary review file.
