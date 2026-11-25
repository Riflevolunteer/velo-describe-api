# Dia-Compe catalogs processed so far

## 984D maker identity and Bianchi links — 2026-11-21, applied and validated

The existing TODO's 984D identification was resolved from a previously held
maker page. Visually rechecked the [March1989 Product Guide, printed p.18](https://i.ebayimg.com/images/g/lDAAAOSwELZjzuyj/s-l1600.webp),
source **447**: the Advantage ZAOH system chart explicitly labels **984 D NEW**,
separately from **984 RATCHET NEW**. This supersedes the earlier requirement to
find a maker code before proposing either D-suffix bike link. It does **not**
make984D an alias of984, and the1990 MTB brochure/source448 still does not name
the D model. No missing detailed guide pages were recovered.

The [1989 Bianchi US second specification table](https://cdn.shopify.com/s/files/1/0661/0501/6425/files/img-2487-2.jpg?v=1764982612),
source **325**, explicitly prints Dia-Compe984D on **Forte** and **Volpe**, but
plain984 on **Axis**. These are direct printed model matches, not an inferred
suffix or a choice from a small bike photograph. The lever cells are separate:
XCE-4050 for Forte, BL-08 aero for Volpe. No lever links are part of this change.

Applied after explicit user approval:

| Applied record | Value |
| --- | --- |
| Component ID / title | **12226**, `Dia-Compe 984D, Advantage ZAOH` |
| Brand / category / group | Dia-Compe73 / Brakes3 / NULL |
| Description | `Cantilever brake from the Advantage ZAOH range; distinct from the separately listed 984 Ratchet model.` |
| Dates / provenance | **1989–1989**, source447; a positive catalogue attestation, not production boundaries |
| Search text | `Dia-Compe 984D Advantage ZAOH` |
| UUID | `37e8ed88-f09d-4605-bf0d-cab44daff922` |
| Links | **18613** (Forte, bike1089) and **18717** (Volpe, bike1094), NULL→12226 |

Both specs retain label18/raw`Brakes`, exact text`Dia-Compe 984D` and source325.
Existing **11549 984**, its1989–1990 dates/source448 and Axis **18696→11549**
remain untouched. No source/group creation, CSV edit, existing date change,
merge or numerical specification was added. The maker chart establishes
identity and range membership; it does not establish weight, reach, finish or
all internal construction. Those details were deliberately not copied from984
or the secondary timeline.

Checked live titles, descriptions and numeric aliases before insertion: no existing984D row.
Dia-Compe exact, near and parenthetical reports each returned no candidates.
Automatic whole-word matching resolves the exact984D values once its row exists;
no new override is required. Only the old984 comment needed correction.

Read-only preview across **117 loaded catalogues /24,479 specs** adds exactly
18613/18717→12226, preserves all existing proposals (including the same15 Huret
Rival losses), and introduces no missing/ambiguous identities. Simulating the
new component and both live links preserves the complete quality finding set:
zero errors,2,003 reviews, including262 linked date conflicts. Description102/255.

Application inserted exactly **one component** and updated **two bike specs**;
the identical transaction reran with **zero inserts / zero updates**. Readback
verified every new component field and both links, including the unchanged
spec labels, values and sources. Comparing the live snapshot with the saved
baseline found only these two spec-link changes, one new component, and no
changes to existing component titles/categories, bikes or catalogue sources.
The full post-load comparison across117 catalogues/24,479 specs matches the
baseline summary and exact findings:24,464 unchanged, the same15 pre-existing
Huret losses, zero gained/changed/missing/ambiguous. The complete quality
finding set is unchanged:zero errors,2,003 reviews. Post-load Dia-Compe exact,
near and parenthetical duplicate reports each returned zero candidates.

Removed the984D action from TODO, reconciled the older unlinked statements and
removed task-only SQL, scans, snapshots and helpers after validation. Original
user-supplied brochure files were preserved. To restore, first recheck subsequent
decisions, return18613/18717 to NULL with current component12226, bike1089/1094,
source325, label18/raw`Brakes` and exact value guards; then remove12226 only if
its UUID matches and no references remain. No old component was overwritten.

## Alpha-5000 brake identity — 2026-11-19 (read-only)

- [1987 Bianchi catalogue](https://velobase.com/CatalogScans/1987Bianchi.pdf),
  PDF p.14, Sport SX brakeset cell prints **Alpha-5000 Balance Response System
  with aero levers**; it does **not** print SunTour in that cell. The current
  spec **1324** carries an inferred SunTour maker and remains unlinked. This
  revises the earlier “maker still unknown” limit without applying a CSV fix.
- [Specimen listing 257765092776](https://www.ebay.com/itm/257765092776): the
  [pair photo](https://i.ebayimg.com/images/g/4xMAAeSwhLRqCi~~/s-l1600.jpg) and
  [close-up](https://i.ebayimg.com/images/g/LAwAAeSwX8RqCjAA/s-l1600.jpg)
  visibly carry both **DIA-COMPE** and **α-5000** on the arms. These physical
  markings establish maker/model independently of the seller's title. They do
  not establish manufacture year, original Bianchi fitment or the lever model.
- [Sutherland's Handbook, sixth edition (1995)](https://paulinoposada.github.io/bike/documents/epdf.pub_sutherlands-handbook-for-bicycle-mechanics.pdf),
  PDF p.401, tabulates α-5000/model **400**, 39–51mm reach (centre 45mm), left
  cable. Its separate Alpha II/αII-400 entry must not be merged into α-5000.
  This is a later technical cross-reference, **not** a 1987 manufacturer sheet;
  the 400 stamp was not independently read on the reviewed specimen photos.
- Live brake-row/title/alias review found no Alpha-5000 row; **668 Alpha II
  (White)**, dated 1988, is a separate identity. Prepare a Dia-Compe Alpha-5000
  candidate using Bianchi's 1987 attestation and the marked specimen, and review
  spec 1324's maker text and assembly match before a link. Do not assign aero
  lever codes, inferred specimen dates, or Alpha II identity. The unrelated
  Alpha-5000 crank spec **1327** is outside this brake review.

No source registered, SQL prepared or DB/CSV/generator changes applied. Downloads
and renders removed after review; the source URLs above are the recovery inputs.

## Alpha-5000 — applied 2026-11-19

Following the read-only review above, rechecked Bianchi PDF p.14 and the marked
specimen close-up. The SPORT SX brake cell explicitly says Alpha-5000 Balance
Response System with aero levers and omits SunTour. Specimen markings establish
DIA-COMPE / α-5000 independently of seller dating. Sutherland sixth edition
(1995), PDF p.401, lists α-5000/model400 separately from Alpha II, with left
cable, 45mm slot centre and39–51mm reach. Technical data are a later handbook
cross-reference, not a manufacturer catalogue or a1995 availability record.
The original source URLs are in the preceding review.

| Applied field | Value |
| --- | --- |
| Category / brand | Brakes (3) / Dia-Compe (73) |
| Title | Dia-Compe Alpha-5000 |
| Description | Short-reach side-pull road brake with Balance Response System (BRS); model 400, 39-51mm reach (45mm centre), left cable entry. Paired with aero levers on the Sport SX. |
| Years / group | 1987–1987 (fitment attestation only); NULL group |
| Search text | Dia-Compe Alpha-5000 |
| UUID | a1d85268-a28c-4e66-ab3a-04f65672d87e |
| Manual source 468 | Dia-Compe Alpha-5000 identity review (1987 fitment) |

Component **11710**, source **468**, applied after explicit user approval.
The composite manual source cites Bianchi p.14, specimen listing257765092776
and Sutherland p.401; countryNULL. It explicitly distinguishes evidence roles
rather than registering a fictitious maker catalogue. Bike/spec source46
continues to identify the Bianchi catalogue. No Alpha-5000 component
or matching reconciliation source existed before loading. Brand/category/code/alias review
included Alpha II668, generic400679, BRS families and other makers' Alpha rows;
none is an established duplicate to overwrite/merge. No separate lever row,
aero lever code, specimen year or Alpha II alias is proposed.

Applied one guarded source insert, one guarded component insert and one
guarded update to spec1324 (bike89/source46), preserving its ID and raw
Brakeset label. Old text/link: `SunTour Alpha-5000 Balance Response System`,
NULL; new: `Dia-Compe Alpha-5000 Balance Response System with aero levers`,
**11710**. Bike/spec provenance remains source46. This identifies the named
caliper within the printed brakeset; its accompanying aero lever model remains
unspecified. Crank1327 remains untouched/NULL, including its original text and
timestamp. Years1987–1987 record the fitment attestation, not introduction,
discontinuation or1995 availability. No existing component dates changed.

The gitignored CSV `bike_specs/1987_bianchi_spec.csv` has exactly that one cell
corrected. Readback verified the new component title,167-character description,
brand/category, years, NULL group, search text, UUID and source metadata, plus
the exact spec1324 correction and unchanged crank1327. Exactly one live bike
spec links to11710. Fresh shared-generator/live comparison of the1987 CSV:
**300 unchanged**, zero gained/lost/changed/missing/ambiguous, zero duplicate
specs. Full comparison against the pre-load generator baseline:108 CSVs /
23,380 mappings, **exactly one gain** (SPORT SX Brakes1324 →11710), no other
changes. Automatic matching is sufficient; no generator changes were needed.
Dia-Compe exact and near duplicate reports both returned zero candidates.
The second SQL load affected **zero** source/component/spec rows.

SQL, pre-change CSV, baseline/preview snapshots and temporary helper scripts
were removed after successful readback and rerun. Downloads had already been
removed after verification. Original evidence URLs, UUID, old/new values and
validation above retain the result.

## MTB brochure — eBay 800322888787, photo inventory reviewed 2026-11-17

Source: https://www.ebay.com/itm/800322888787, English US brochure, cover
“FOR EVERY PART OF YOUR RIDE”, Dia-Compe Inc., Fletcher, North Carolina.
**Dating verified from the supplied back panel: ©1989 Dia-Compe Inc., with
“For 1990” in the range introduction.** Treat as the 1990 range, published
©1989; copyright alone does not establish every model's availability in 1989.
This supersedes the initial one-photo review's uncertain seller-only dating.
**Applied on explicit user approval, 2026-11-17, source 448.** Six new records
11545–11550, four enrichments and one link were written with expected affected
counts, then validated for mapping preservation, duplicates and idempotency. Before
application there was no matching source by Dia-Compe label or listing citation.

Preserve these five user-provided originals in `/Users/acooper/Desktop/`:

| File | Supplied photo | Coverage |
| --- | --- | --- |
| `s-l1600 (1).webp` | 1, repeated from first upload | X-1 / 286 / 986; ruler obscures left captions and right prose cropped |
| `s-l1600.webp` | 2 | Dated back panel and oblique Short Stop panel |
| `s-l1600 (4).webp` | 3 | 984 panel; XCExpert / XCMaster / XCT levers and brakes; partial cover |
| `s-l1600 (3).webp` | 4 | Front cover; no additional model specifications |
| `s-l1600 (2).webp` | 5 | Clearer XCExpert / XCMaster / XCT brake specifications |

The five photographs cover parts of the brochure. In the inventory, 1990 is
the range year. See the Short Stop follow-up below for the two captions that
were initially indistinct.

| Category | Identity / title | Readable manufacturer specifications | Applied reconciliation |
| --- | --- | --- | --- |
| Brake Levers | Dia-Compe 286, Short Stop (X-1) | Cold-forged lightweight alloy; natural wrist/finger/lever alignment; one-finger to full-fisted action; direct force angles for modulation. | Added 11545, 1990–1990. DB component ID 286 is unrelated SVX. |
| Brake Levers | Dia-Compe 292, Short Stop | Visible 292 code; replaceable lever; BRS spring-assisted return with three-position tension adjustment; continuous micro-position reach adjustment. | Added 11546, 1990–1990. No inferred clamp size or weight. |
| Brake Levers | Advantage 5, middle pictured model | The rectified caption reads Advantage 5. March 1989 p. 18 identifies this lever as (183). | Added the documented name to the 183 family row 8115 in the follow-up. |
| Brake Levers | Dia-Compe 288, Short Stop, lower black lever | BRS spring-assisted return. The 1989 ZAOH chart confirms the code. | Added separate row 12227 in the follow-up. |
| Brake Levers | Dia-Compe XCExpert, standard / Short Stop | Custom reach adjustment, non-slip die-cast clamp, continuous pivot alignment; explicitly available in standard and Short Stop sizing. | Added 11547, 1990–1990. Standard/Short Stop are documented variants, not inferred numeric codes. |
| Brake Levers | Dia-Compe XCMaster (XCM) | Custom reach adjustment, non-slip die-cast clamp and continuous pivot alignment. | Enriched 267 title/description, retained 1989–1990; source 1 -> 448. |
| Brake Levers | Dia-Compe XCT | BRS spring-assisted return, strong composite construction, reach adjustment and continuous pivot alignment. | Added 11548, 1990–1990. |
| Brakes | Dia-Compe 986, X-1 cantilever | Super-low-profile inboard design for heel clearance; independent arm spring-tension adjustment. Obscured caption shows 151 grams; unit basis is not readable. | Enriched 663 title/description with X-1/low profile, retained 1980–1994 and leaflet facts; source 218 -> 448; omitted uncertain weight. |
| Brakes | Dia-Compe 984, cantilever | Low profile for heel clearance; Ratchet Dial individual arm spring adjustment; Rotational Dish toe-in/out and rim-angle adjustment; direct-mount one-piece composite brake pads; compatible with Short Stop levers. | Added 11549, 1989–1990 from the 1989 Bianchi Axis fitment plus this 1990 range. Does not establish a 984D alias. |
| Brakes | Dia-Compe XCExpert (XCE), cantilever | Lightweight die-cast aluminium, spring-tension adjustment, low-profile inboard design, direct-mount one-piece composite pads, Rotational Dish toe/rim-angle adjustment. | Enriched 703 title/description, retained 1980–1990; source 1 -> 448. |
| Brakes | Dia-Compe XCMaster (XCM), cantilever | Lightweight die-cast aluminium, spring-tension adjustment, low-profile inboard design, direct-mount one-piece composite pads, Rotational Dish toe/rim-angle adjustment. | Enriched 676 title/description, retained 1989–1990; source 1 -> 448. |
| Brakes | Dia-Compe XCT, cantilever | Non-delaminating composite construction, low-profile inboard design, Rotational Dish toe adjustment and direct-mount one-piece composite pads. | Added 11550, 1990–1990. Arms are composite, not aluminium. |

The dated introduction calls X-1, XCExpert, XCMaster and XCT new; this is not
sufficient to discard independent 1989 fitments or narrow existing decade dates
without checking the earlier evidence. The standard/Short Stop XCExpert lever
variants may share one documented family row, consistent with other lever families.
Cable/casing and separate brake shoes are outside maintained component categories.
The cropped X-1 prose is not a basis for reconstructing a complete BRS configuration.

### Applied links and validation

Registered source **448**, label `Dia-Compe Mountain Bike brake brochure, US
edition (1990 range; copyright 1989)`, country **US**. Exact citation:
`https://www.ebay.com/itm/800322888787 (five user-supplied photos; For 1990; copyright 1989; Short Stop panel partly obscured).`
All ten changed/added components reference 448. New rows use brand 73, category
2 (levers) or 3 (brakes), NULL group and NULL image. Existing dates, source UUIDs,
brand/category/group/image remain unchanged. Four retitles update search text
with the shared helper. No merges or deletes; no CSV edits.

Linked **18696**, bike **1093**, 1989 Bianchi **Axis**, `Dia-Compe 984`,
**NULL -> 11549**; installed an exact 1989-only Brakes override. The two
`Dia-Compe 984D` specs **18613** (Forte) and **18717** (Volpe) were left NULL
in this load because that brochure does not establish the suffix. They were
subsequently linked to distinct12226 using March1989 source447, as recorded in
the applied2026-11-21 review above. No specs were linked to the four
enriched rows before this load. The pre-insert brand/category/alias review found
no matching records for the six additions.

Validation: load affected one source, six inserts, four updates and one bike
link, exactly as approved; field-by-field readback matched the proposed values.
Comparing generated mappings before/after over **98 loaded CSVs / 21,382 specs**
found exactly one change, Axis Brakes NULL -> 11549. All other mappings and spec
identities stayed unchanged. Generator/live comparison retained **21,367 equal
mappings, 15 pre-existing losses**, and no gains/changed/identity discrepancies
after the live fill. Full quality report remained **zero errors / 1,962 reviews**
(1,576 incomplete dates, 326 linked date conflicts, 35 broad freewheel labels,
25 descriptions at the limit). Dia-Compe exact, near and parenthetical duplicate
reports returned **zero candidates**. All **13 test files passed**. Rerunning the
same 14-statement transaction affected **zero rows** in every mutation category.
Maximum written description length was 205/255. Temporary SQL, snapshots and
reports were removed after recording these results; user-supplied originals remain.

### Stable identities and restoration data

| New ID | Identity | Source UUID |
| --- | --- | --- |
| 11545 | 286 Short Stop (X-1) lever | 86680e13-9ef1-45e7-95b1-5df62a945547 |
| 11546 | 292 Short Stop lever | cb4a5a80-d445-40c5-affb-32d1159be23e |
| 11547 | XCExpert standard / Short Stop levers | de171e46-e197-476d-a1ab-0438f052716c |
| 11548 | XCT brake levers | bb9b96dc-1a29-4297-987b-db12bbd62db4 |
| 11549 | 984 cantilever | c41552f7-9c0a-4943-bc10-19620e942e62 |
| 11550 | XCT cantilever | da7d2e61-e62e-4aeb-98c6-9d24bd6c10e0 |

| Existing ID | Old title | Old dates (retained) | Old source_ref | Old search_text | Retained source UUID |
| --- | --- | --- | --- | --- | --- |
| 267 | Dia-Compe XCM | 1989–1990 | 1 | Dia-Compe XCM | BEDC9B05-23CE-4934-AD90-2A4C2DCD9FFB |
| 663 | Dia-Compe 986 (cantilever) | 1980–1994 | 218 | Dia-Compe 986 | 0B04C0F6-26F7-4A81-80D7-B126BF546279 |
| 676 | Dia-Compe XCM | 1989–1990 | 1 | Dia-Compe XCM | A3E16AC3-F237-4B3A-BE1F-2D0D246504C3 |
| 703 | Dia-Compe XCE | 1980–1990 | 1 | Dia-Compe XCE | 7931285E-35D9-4002-9D73-543BA032D799 |

Old descriptions: 267 and 676 `Dia-Compe XCM, Japan`; 703 `Dia-Compe XCE, Japan`.
663's full old description:

`Dia-Compe 986 (cantilever), Japan. MTB cantilever with spring tension adjustable on each arm (986.15 adjuster, gold right / silver left springs), lever force 0.5-3.0 kgf; 1242 straddle bridge, 1276-300W cable; for 26in rims 23-32mm wide. N986 in 1994.`

Applied titles: 267/676 `Dia-Compe XCM, XCMaster`, 703 `Dia-Compe XCE, XCExpert`,
663 `Dia-Compe 986, X-1 (cantilever)`. Their new search text is respectively
`Dia-Compe XCM XCMaster`, `Dia-Compe XCE XCExpert`, `Dia-Compe 986 X-1`.
To reverse, first recheck new references, restore 18696's NULL link and remove
the 1989 984 override; restore these four rows' old title/description/search/source
values using the UUIDs, remove new rows only once unreferenced, and remove source
448 only if no references remain. Date bounds need no restoration.

The brochure establishes the 1990 MTB range, explicit 984 specifications,
the X-1/286 pairing and named XCExpert/XCMaster/XCT brake and lever
specifications. The March guide supplies the separate 984D evidence.

### Short Stop caption follow-up — 2026-11-21

Rectified the original user-held `s-l1600.webp` and compared its illustrations
with the [March 1989 maker guide, p. 18](https://i.ebayimg.com/images/g/lDAAAOSwELZjzuyj/s-l1600.webp)
(source 447). The three upper captions on the 1990 panel (source 448) read 292,
Advantage 5 and 288. The yellow-bladed XCExpert is below them. The right-side
continuous-pivot and die-cast-clamp callouts point to XCExpert. The BRS-return
callout points to the black 288. This supersedes the earlier middle-lever
guess of 290 and resolves the new-photo request for the codes.

The 1989 Advantage Colbar diagram lists Compact 292 and 290 separately. The
ZAOH diagram lists 288 separately and labels Advantage 5 as (183). Live
readback found existing 11546 (292, 1990–1990, source 448) and 8115 (183 family,
1986–1989, source 447), and no existing 288 or 290 row. Neither existing row
has bike links. The live spec search found no exact 288, 290, 292 or Advantage 5
fitments.

The user-approved load added 288 as **12227** (1989–1990, source 448) and 290
as **12228** (1989–1989, source 447), extended 11546's lower bound to 1989
with source 447, and added the documented Advantage 5 name to 8115's
description. For 8115 the old
description is `BMX levers, 22.2mm clamp, many colours: 183/Tech-5 stroke
adjustment 100g, 183-II 100g, 183-III two-piece bracket 98g, 183S stopper 106g,
183S-II 106g.` The applied text appends `Listed as Advantage 5 (183) in the
1989 ZAOH system chart.` The two catalogue dates attest availability.

Readback confirmed two inserts and two updates with zero bike links across
the four rows. The guarded rerun changed zero rows. Scoped near-duplicate
and parenthetical-name checks found no pairs. All 24,479 generated mappings
and the 15 pre-existing lost proposals matched the pre-load baseline. The
whole-database audit found zero structural errors after both catalogue changes.
To restore, return 11546 to 1990–1990 and source 448, restore 8115's old
description, and remove 12227/12228 only after checking for new references.

## March 1989 Product Guide — eBay 144913620478, applied 2026-11-17

**Applied and validated on explicit user approval, 2026-11-17; source 447.**
User supplied [the listing](https://www.ebay.com/itm/144913620478), titled
Vintage Dia-Compe Bicycle Product Guide 1989. Recovered all **seven seller
photographs** at original `/s-l1600.webp` resolution. Back cover positively
prints **Mar.1989**, Printed in Japan, Yoshigai Kikai Kinzoku / Dia-Compe Inc. /
Dia-Compe Taiwan addresses. English cover bears a Downeast Bicycle Specialists,
Athens, Maine stamp; this is a US dealer copy, but the intended market is not
explicitly stated, so source country is NULL. Registered the unique source
`Dia-Compe Product Guide, English edition (March 1989; partial eBay photos)`.
Exact citation: `https://www.ebay.com/itm/144913620478 (7 photos; printed Mar.1989; cover, pp.1-3,9-10,15-18, rear; p.3 clipped).`

This is **partial**, not a recovered complete catalogue. Visible: cover,
**p.1**, **pp.2–3** (right edge of p.3 clipped), **pp.9–10**, **pp.15–18**,
rear cover. Missing detailed product pages **4–8 and 11–14**. Pages 15–17 contain
brake accessories/tools outside maintained categories and a brake-size chart;
no accessory rows proposed. Page 18 is a system chart, useful corroboration but
insufficient for invented specifications or blanket earlier dates for the ATB
families. Do not claim that the missing ATB pages have been transcribed.

Original photo URLs use `https://i.ebayimg.com/images/g/<key>/s-l1600.webp`:

| Listing photo | Key | Contents |
| --- | --- | --- |
| 1 | SiMAAeSwdpZpU~mW | English cover |
| 2 | MiMAAOSw6vdjzuyi | p.1 and facing BRS feature page |
| 3 | 5yEAAOSw7e5jzuyh | pp.2–3, right edge clipped |
| 4 | FEUAAOSwFexjzuyi | pp.9–10 |
| 5 | oUgAAOSwdVhjzuyh | pp.15–16 |
| 6 | lDAAAOSwELZjzuyj | pp.17–18 |
| 7 | EfoAAOSwZIljzuyj | Rear cover, printed March 1989 |

### Applied reconciliation

**15 existing rows**, retaining all unrelated fields and measured facts:

- **275:** `Dia-Compe BRS 300` -> `Dia-Compe AC250S, BRS300`; unknown dates ->
  **1989–1989**. P.1 explicitly pairs AC250S with BRS300, 24.0 mm, return
  spring, 121 g each. Original [specimen](https://www.velobase.com/Pages/ViewComponent.aspx?ID=75BB67DD-6258-493D-8837-FEC9BE8791D7)
  photograph `FE7AA9C4-1165-435D-8754-8BA44DB9C3E1.jpeg` matches the BRS300
  lever shape. Identification is a visual/family inference, not a photographed
  AC250S inscription. Keep its **239 g** as the original unqualified specimen
  listing weight; do not call it a measured per-lever manufacturer figure.
- **667:** `Dia-Compe 990` -> `Dia-Compe AD990`, **1988–1988 -> 1988–1989**.
  Its [original specimen](https://www.velobase.com/Pages/ViewComponent.aspx?ID=BD68270A-360A-4D94-96D6-424C772379FF)
  photo `6857B326-E7E0-44FC-8EF7-A733B27B291E.jpeg` visibly labels AD-990 and
  matches p.9. Replace old `U-brake, epoxy painted.` with the clear-anodised
  sealed-spring/OPC11 specification, pivot-to-pad stroke 39 mm +/-3 mm, 230 g.
  This is an existing identity, not a new AD990 insertion.
- **276 BRS500 levers:** start **1994 -> 1989**, retain 1994 end; describe
  BL50/BL50K standard and BL52/BL52K compact in 1989, 122 g each. The later
  BL50/BA55 family evidence remains distinct from the earlier brake design.
- **669 Olé:** unknown dates -> **1989–1989**; p.3 OLE400 39–49 mm/146 g,
  OLE500 45–57 mm/154 g. Preserve original white specimen's source-listed
  140 g without pretending it proves a particular reach/model. These dates
  attest the generic family, not that exact white specimen's manufacture.
- Extend end years to **1989** on **278 AGC251, 285 RGC200, 8100 RGC220,
  698 RC-II400/500, 700 RGC400, 701 RGC500, 8088 MX901, 8092 FS880L–883L,
  8115 183 family, 8116 128/Tech-6 family, 8117 MX120–124 family**.
  These are availability attestations for the named members, not proof that
  every grouped finish/drilling/configuration survived. Detailed inventory
  retains which members are actually printed. Only **700** additionally needs
  a description rewrite: p.1 BRS400 RGC400 is **168 g**, p.3 standalone RGC400
  **158 g**, versus 164 g in 1986 and the independent 350 g measured pair.
  Preserve the internal 1989 discrepancy with its page/system context.

**15 new model/variant records**, all attested **1989–1989**, group NULL:

| Page | Category | New model(s) |
| --- | --- | --- |
| 1 | Brakes | BA50/BA50K BRS500, single-pivot, 38–44 mm, 195 g |
| 2 | Brakes | BA20 BRS200; BA10 BRS Edge; BA08 BRS Blaze, each 40–52 mm/150 g |
| 2 | Brake Levers | BL20/BL22 BRS200; BL10/BL12 BRS Edge, standard/compact, 107 g each |
| 2 | Brake Levers | BL08/BL08C BRS Blaze, standard/compact, 120 g each |
| 1 | Brake Levers | AGC252 compact, 24.0 mm, shares the printed 118 g AGC251/252 figure |
| 3 | Brake Levers | RC200 107 g; RC220 compact 105 g, both 24.0 mm |
| 9 | Brakes | FS884QL/FS884Q/FS884L/FS884 Bulldog family, 68–86 mm, QR 200 g/non-QR 151 g |
| 10 | Brakes | FS883, adjuster/QR, 68–86 mm, 200 g |
| 9 | Brake Levers | 129/Tech-8 hinged clamp, 22.2 mm |
| 9 | Brake Levers | 182S-II/Tech-77 hinged clamp, 22.2 mm, 91 g |
| 10 | Brake Levers | MX-77 hinged clamp, 22.2 mm, 91 g |

All stored descriptions fit varchar(255); maximum **206 characters**.
Retitles include search_text. All changed/new rows have source_ref **447**;
old values and UUIDs remain in the restoration record below. No deletion or merge.

### Kept separate or unresolved

- **674 BRS500 / BA55** main photo is dual-pivot; the 1989 BA50 is single-pivot.
  No forced 1989 date on the later design. Likewise the new BA20 is not the
  later BA27 associated with **671 BRS200**.
- **672 generic BRS300** remains unchanged: its original photo was not usable
  in this pass, so no assumed model/generation crosswalk to **698 RC-II**.
- **668 Alpha II (White)** retains 1988: p.3's silver Alpha II400/500 family
  does not establish that white finish in 1989. **659 884D** remains distinct
  from the explicitly coded FS884 configurations.
- Broad **8948 BRS lever** and **8951 BMX lever** rows remain unchanged; a
  dated individual member does not date every member of those 1994 groups.
- **8089 MX900/1000** already extends to 1994; the 1989 page's 196 g MX1000
  figure does not silently replace the earlier 195 g figure. No change.
- OLE272 compact entry is clipped; do not complete its suffix or insert a
  guessed code. Missing detailed ATB pages remain wanted, including their
  earlier SS/Advantage information. The road pages do not resolve all the
  previously logged 1987–93 gaps.

### Mapping simulation and preflight

Prepared guarded transactional SQL and an override snippet, then applied them
on user approval. The working files were removed after the actual validation
recorded below; these notes retain the evidence and restoration details.

Simulation over **98 loaded CSVs / 21,382 paired specs** found exactly two
NULL-link gains, no losses or changed existing targets:

- **18697**, bike **1093**, 1989 Bianchi **Axis**, `Dia-Compe 250S aero` -> **275**.
- **18718**, bike **1094**, 1989 Bianchi **Volpe**, `Dia-Compe BL-08 aero` -> the
  new BL08/BL08C row **11536**.

Installed overrides are exact value/year **1989** only. Date moves, additions
and retitles produced no other changed mappings. Offline duplicate/near-pair
simulation found no new flagged comparisons among reconciled Dia-Compe rows.
Cross-brand code/name checks included SunTour Blaze's own identities; no
cross-brand merge or renaming is inferred from OEM branding alone.

Read-only preflight matched all **15 full old component guards**, both NULL
spec guards and source absence; schema lengths passed. Simulated quality has
**0 errors / 1,962 review findings**, versus **0 / 1,964** before: only the
incomplete-date findings for **275/669** disappear. No new date conflicts or
other findings. Actual-ID substitution, override installation, readback, full
mapping/quality comparison and zero-change rerun are complete, as recorded below.

No physical catalogue purchased or seller contacted.

### Applied validation and restoration record — 2026-11-17

The user approved and the guarded transaction applied **one source (447),
15 existing-row updates, 15 inserts (11530–11544), and two NULL bike links**.
Exactly the expected counts changed. Transaction rerun changed **zero source,
component or bike-spec rows**; only temporary assertions ran again.

All 30 component rows matched their approved full expected fields. UUIDs, images
and unrelated fields on the existing rows were preserved. The two retitles
include their search text: **275** `Dia-Compe AC250S BRS300`, **667**
`Dia-Compe AD990`. Every changed/added row has source_ref **447**; new rows
have dates **1989–1989**, brand **73**, group NULL and image NULL. Source 447
is unique, source_type catalogue, country NULL, with the exact label/citation
specified above; no other source row changed.

Actual new identities:

| ID | Model | Source UUID |
| --- | --- | --- |
| 11530 | BA50 / BA50K, BRS500 | `8bce3bc7-a8b1-4af1-9bac-2927b5455292` |
| 11531 | BA20, BRS200 | `09beed6a-bdf0-4ae0-b868-fa0e713407da` |
| 11532 | BA10, BRS Edge | `6e02fef9-397c-4350-b965-5abf9a31bc64` |
| 11533 | BA08, BRS Blaze | `eed7be84-5d8c-4ec3-a1a4-d1badf41aec4` |
| 11534 | BL20 / BL22, BRS200 | `04b1576d-dad5-44f0-87df-8171fd36d081` |
| 11535 | BL10 / BL12, BRS Edge | `92bf19a0-d197-4261-a18f-10ea2dc3163f` |
| 11536 | BL08 / BL08C, BRS Blaze | `5176170a-62e1-4dfe-9392-ab451770999c` |
| 11537 | AGC252, Aero Gran Compe (compact) | `ef1fc607-9bd7-49a6-884d-abcc10971514` |
| 11538 | RC200, Royal Compe II | `06255686-c43e-49e7-a027-ee92796ecbfb` |
| 11539 | RC220, Royal Compe II (compact) | `3448be98-e390-43ef-a87b-9964ff36ec45` |
| 11540 | FS884QL / FS884Q / FS884L / FS884, Bulldog | `35cba008-92ef-4137-8182-a88d24b91b97` |
| 11541 | FS883, Freestyle | `9974a9d0-4652-4c03-b81e-da7b1ab0c7a5` |
| 11542 | 129 / Tech-8 | `385858db-6477-4d34-9e80-9a989047f85c` |
| 11543 | 182S-II / Tech-77 | `0f1ac89b-5bbe-496c-988f-b7f3ee186140` |
| 11544 | MX-77 | `19c4488c-30a6-40e5-992b-ff90516e220e` |

The actual links are **18697 -> 275** (1989 Bianchi Axis) and **18718 -> 11536**
(1989 Bianchi Volpe). Both bike specs retain label 50, source_ref 325, raw label
`Brake Levers`, original value and bike ID (1093/1094). Their `updated_at`
fields advanced automatically; both previously held
`2026-10-31T20:17:57.000Z`. Exact value overrides are restricted to 1989.

Live validation at **2026-11-17T22:30:07.702Z** compared all **98 loaded CSVs /
21,382 paired specs**. The generated plan differs from baseline only in those
two NULL-to-component gains. Current generator/live-DB summary remains 21,367
unchanged and the same 15 pre-existing losses, with zero gains/changed targets/
missing/ambiguous identities. The unchanged count also includes NULL-to-NULL
matches, so it does not measure the number of linked specs.

Whole-DB quality: **0 structural errors / 1,962 review findings**, exactly two
fewer than baseline, solely the incomplete dates on 275/669. Other findings are
unchanged: 1,576 incomplete dates, 326 linked date conflicts, 35 broad Freewheel
labels, 25 descriptions at limit. Full quality-table comparisons verified only
the expected component/source/spec changes; no other row/value changes. The
live Dia-Compe duplicate report gives **zero groups/candidates**. Earlier
offline near-pair simulation also found no newly introduced flagged pairs.
`npm test` passed all **13 test files**; `git diff --check` passed.
No source CSV or generated `bike-update.sql` changed.

For deliberate restoration only, use exact current UUID/source guards and
the old values below. Existing rows retained brand/category/group/image/UUID;
restore only fields this ingestion changed. Both retitled rows' old search text
equalled their old title: **275** `Dia-Compe BRS 300`, **667** `Dia-Compe 990`.
Their UUIDs are in the identity evidence above. All other titles/search text
were unchanged.

| Existing ID | Old year_from–year_to | Old source_ref |
| --- | --- | --- |
| 275 | NULL–NULL | 1 |
| 276 | 1994–1994 | 218 |
| 700 | 1984–1986 | 261 |
| 669 | NULL–NULL | 1 |
| 667 | 1988–1988 | 422 |
| 278 | 1986–1986 | 102 |
| 285 | 1980–1986 | 102 |
| 8100 | 1986–1986 | 102 |
| 698 | 1986–1986 | 102 |
| 701 | 1980–1986 | 102 |
| 8088 | 1986–1986 | 102 |
| 8092 | 1986–1986 | 102 |
| 8115 | 1986–1986 | 102 |
| 8116 | 1986–1986 | 102 |
| 8117 | 1986–1986 | 102 |

Exact overwritten descriptions:

- **275:** `Dia-Compe BRS 300, Japan, 239 grams`
- **276:** `Dia-Compe BRS 500, Japan BRS500 lever BL-50 in 1994.`
- **700:** `Side-pull caliper, cold forged, buffed and clear anodized, static quick release, forged brake shoe, 39-49mm reach, 164g; 350g pair actual (velobase). Colours B&G, AL, BL, SMB, HD, SG.`
- **669:** `Dia-Compe Olé, Japan, 140 grams`
- **667:** `U-brake, epoxy painted.`

Descriptions of the other ten existing rows were unchanged. To reverse the two
bike links, guard their exact current bike/label/value/source/target and restore
component_id NULL; remove the two 1989 generator overrides. Remove a newly
inserted row only after checking/repointing any subsequent usage, guarded by its
UUID and source 447. Do not remove source 447 while referenced. No restoration
was run.

The completed ingestion task was removed from TODO. Missing **pp.4–8/11–14 and
the clipped p.3 edge** remain an acquisition task. The temporary SQL, source
photographs, snapshots, inventory and validation scripts were removed after
validation; durable evidence, provenance and restoration values remain here.


## Dia-Compe "Products 1986" — 1986 (bmxmuseum.com/reference/6026, 25 scans, incomplete)

- `data_source` 102, label "Dia-Compe Products 1986 catalogue (1986)".
  Source: https://bmxmuseum.com/reference/6026 (listed there as "1979-1986
  Dia-Compe Product Catalog" — it is a single 1986 printing; cover
  "PRODUCTS 1986", rear "Printed in Japan (II)"). Yoshigai Kikai Kinzoku,
  Higashi-Osaka / Dia-Compe Inc., Fletcher NC. The `_blowup.jpg` images
  cover printed pp 1-11, 17-20, 23-29 only: **pp 12-16 (Racing and
  Extension levers) and 21-22 (handlebar stems) are not scanned**. Reach
  / stroke in mm and per-piece weights; no prices. pp 2-10 calipers
  (Royal / New / Aero Gran Compe, N-brakes, centering, aero, MX,
  freestyle, OEM, centre-pull, cantilever, steel), 11 + 17-20 levers, 23-28
  brake parts, 29 rim-width chart.
- Retitled (old titles): 688 "Dia-Compe 500" -> GC500, Gran Compe; 681
  "N500" -> DC500N, N-brakes; 682 "N500 (quick release)" -> QS500N,
  N-brakes (quick release); 686 "Aero Gran Compe" -> AGC300; 687 "Aero
  Gran Compe BL" -> AGC300/BL; 685 "Aero Compe" -> AC300G; 665 "AC 500 (G)"
  -> AC500G, Aero; 678 "G" -> G-N series (G400N-G810N); 693 "Q-N Series" ->
  Q-N series (Q400N-Q810N); 694 "New Gran Compe NGC400" -> NGC400, New Gran
  Compe; 696 "NGC450B (ball bearing)" -> NGC450B (centre-pull, sealed
  pivots); 697 "NGC982" -> NGC982 (cantilever); 677 "DC 510" -> DC510
  (first tried "DC510, centre-pull" — bare "Centre-pull" bike values then
  substring-matched it, so the generic word was dropped from the title);
  698 "Royal Compe II" -> RC-II 400 / RC-II 500; 700 "Royal Gran Compe
  RGC-400" -> RGC400; 279 "AGC250, Aero Compe" -> AGC250, Aero Gran Compe;
  278 "AGC 251,  AeroGran Compe" -> AGC251; 268 "138 (Tandem stoker
  hoods)" -> 138, hand rest with cover. Descriptions with reach / stroke /
  weight on those plus 689-691, 656, 657, 660, 661, 701, 285, 274; all 28
  rows year_to -> 1986 (velobase 1980 / NULL).
- New (45 rows, 1986): brakes RGC400 B&G, RC400 / RC500, NGC500, GC-N
  series, GX-N series, DC630N, DC-NS series, 890 / 1020 / 1080, 890 C/R
  III, AC500 / AC800, MX901, MX900 / MX1000, MX610 / MX750, TR903 / TR1003,
  FS880L-883L, NSC / SCH / SCA (Bridgestone), SS (Miyata), GC510 / GC700,
  960, 6300 / 7300 / 8100, 8900 / 1030; levers RGC200 B&G, RGC220, RT200,
  AC250G / AC250, GC147 / GC146, 147 / 146, 135, 132 / 132DS, 131 / 131D /
  131DS, 125 / 126 / 127, NGC282, 282 / 282BL, GC280, 280, 281 / 281M,
  284-I / II / III, 183 series, 128 / 128S-II, MX120-124, 132MT series,
  139 Guidonnet, 1440, 1320 / 1321, 1650. Series with 4-5 reach variants
  were entered as one row each; the full N-brake grid is in the
  descriptions.
- Deleted: 699 "Dia-Compe Royal  Compe RGC-400" (Brakes, undated,
  velobase, `FE3AACDE-4824-4395-860D-D18BF7DB138B`) dup of 700; 695
  "Dia-Compe New Gran Compe NGC400" (Brakes, 1980, no weight, velobase,
  `CC99B1F8-2344-48D0-8320-91D46A4E42F9`) dup of 694; 280 "Dia-Compe
  AGC250, Aero Compe  AGC" (Brake Levers, 1980, velobase,
  `59BAC294-7BE9-43BD-B722-D23C537640AB`) dup of 279. No links / overrides.
- Not touched (pages missing or absent): 269 144C, 270 151C, 271 152, 272
  154, 282 160C, 273 166E, 283 NGC 202, 284 NGC160, 275 / 276 BRS, 266 /
  655 Cherry, 653 500 GX, 679 400, 654, 658, 659, 662-664, 666, 667, 675
  Crossbow, 680 MX-901 (velobase bare — the 1986 MX901 was inserted as its
  own row; candidate merge next pass), 683, 684, 668-676 later ranges,
  6516 / 6517 stems.
- Same scan set also at https://www.retrobike.co.uk/archive/1986-dia-compe-catalogue.1153/download
  (`dc86.pdf`, img2pdf, 25 pp; the download 406s without a Referer from the
  archive page). Checked 2026-10-05: identical pages, p.26 bound before
  p.23, **still no pp 12-16 or 21-22** — nothing new, not re-ingested.
- Bike links: 1985 Raleigh "DC630N alloy S.P." -> 8083, "281 levers" ->
  8113 (88 -> 90); 1987 Bianchi "QS500N Balance Response System" -> 682
  (143 -> 144). Raleigh 161 / 164 levers remain unlinked (missing pages).

## Dia-Compe "Products 1986", complete English edition (Reminiscence Part 37, 32 pages) — data_source id 209

- `data_source` 209, label "Dia-Compe Products 1986 catalogue, complete English
  edition (1986)". Source: http://cyclespeugeot.web.fc2.com/reminiscence/yoshigai86.html,
  JPGs `catalog/yoshigai86/1986dc_01-32.jpg` (800 x 565, A5, 32 pages, English,
  "Yoshigai Kikai Kinzoku", Higashi-Osaka / Dia-Compe Inc., Fletcher NC). **The
  same printing as data_source 102** (same cover "PRODUCTS 1986", same weights on
  the calipers, MTB and MX pages), but **complete**: it has the printed pp. 12-16
  (racing, touring and extension levers) and pp. 21-22 (handlebar stems) that the
  bmxmuseum scan lacked, so the "not touched (pages missing)" rows in the entry
  below for 102 are resolved here. The other pages were not re-read row by row.
  The page text (Mr. Gami) says the 1986 range includes "levers over 10 pages",
  the Weinmann-derived centre-pull and side-pull lines, and the 960 cantilever
  being "almost the same as the French CLB".
- Updated (all `source_ref` -> 209): 270 151C, 271 152, 272 154, 282 160C, 283 NGC
  202, 284 NGC160, 8801 162, 6516 CF-G Series, 6517 GC Series `year_to` -> 1986
  (all velobase 1980 or the 1974 Tomoda row); 273 166E Extention Lever (undated)
  -> 1986; 269 144C description only. Descriptions now give each lever's weight
  and clamp; the weights agree with the velobase pair weights (88 / 90 / 103 / 104 /
  108 g each); 6517's 338 g (Spec) equals GC110. 8801 (162, Weinmann type, 1974)
  extended on the judgement that the 1974 set weight (195 g) and the 1986
  singles (162 86 g, 162C 105 g, 162H 85 g, 162G 103 g) are the same line.
- New (22 rows, 1986-1986, brand 73): levers 8861 NGC200 / NGC210 / NGC212 (105 /
  113 / 111 g, 24.0 mm), 8862 NGC144, 8863 GC144 / GC160 / GC162, 8864 144G /
  160G / 161G / 162G (Compe-G), 8865 153 / 155 / 156 / 157, 8866 144 / 151 / 160
  / 161 / 162 and H versions (no hood), 8867 201, 8868 204 / 207 / 208C
  anatomical, 8869 144T / 204T tandem, 8870 141 juvenile, 8871 166A / 196
  extension levers, 8872 163 / 165 / 169 / 195 extension sets, 8873 164G
  (161G + 166, 140 g), 8874 205 / 205-II / 205C / 209C / 265; stems 8875 NGC series
  (NGC85 / 95 / 105, 316 / 324 / 336 g), 8876 GC-H, 8877 GC/BL, 8878 CF, 8879
  CF-H, 8880 CF45G, 8881 DC65; handlebars 8882 189.3 / 189.3L. All stems: forged
  aluminium alloy, 70 degree head, 25.4 mm clamp, Allen head bolt unless noted.
- Left alone: the CF-G stem weights (CF65G read as 204 g against 310 / 332 g for
  the larger two, so the CF-G description names only the extensions); the "164" without the G, "GC200" and "500G" are not
  in the catalogue by those names (164G = 161G + 166, NGC200 is the 24.0 mm
  lever, no 500G brake).
- **Bike specs linked (2026-10-18, `COMPONENT_OVERRIDES` `Brake Levers`, 8 specs):**
  1985 Raleigh "Dia-Compe 161 levers with gum hoods" / "161 gum hoods" (Kodiak,
  Alyeska) -> 8866; "164 with extension levers" (Olympian, Marathon, Pursuit)
  -> 8873 164G (**a judgement**, the catalogue lists only the Compe-G 164G);
  1985 Bianchi "NGC200" (Randonneur 700) and "GC200" (Strada, Rekord 26) -> 8861
  (**a judgement** for GC200, not a 1986 model name). Left unlinked: "500G"
  brakes (Strada; GC500 or G500N, unknown), "DC400N" brakes (Rekord 26; the
  DC-N row is the 500N, needs its own row), the 1974 Nomade "center pull" /
  "with extension levers" and the 1981 "dual brake levers" brakes (generic).

## Dia-Compe "Product Guide" (6 spreads, c. 1994, Reminiscence Part 27) — data_source id 218

- `data_source` 218, label "Dia-Compe Product Guide (c. 1994)". Source:
  http://cyclespeugeot.web.fc2.com/reminiscence/yoshigai94.html, JPGs
  `catalog/yoshigai94/yoshigai94_01-06.jpg` (**720 x 509 spreads, about 360 px a page**:
  model codes read, **weights and prices do not**, a few codes such as 884D are small print).
  Yoshigai Kikai Kinzoku (Dia-Compe), dated 1994 by the site. Cover "Product Guide", back
  cover "Component system chart" (ATB, road racing, freestyle, BMX). The guide calls MTB "ATB"
  and has no V-brake. Pages: 1-2 ATB brakes (N987, N986, C985, 986TKIT, VERSA C5 / C3, 972)
  and levers (SS-7 / 5 / 4, PC-8 / 5 / 3Jr), 3 road racing (BRS500 BA-55 + BL-50, BRS400
  BA-45 + BL-45 / 46, BRS200 BA-27 + BL-23 / 24, BRS100 BA-08 + BL-08 / 08C), 4 arch brakes
  (500N / 630N / 730N / 810N, 750, 510 / 700, MX900, 884D, 887), 5-6 levers (128S-2 / TECH 8,
  127, 181, 187, 135, 182 / MX77, 188 / 188.4 opposite lever, 182S-2 / TECH 77, MX99, SS-7T,
  204C, 204QC, 287, BRS400T, HR-08, 166E; the 144 is gone), 7 disk brake with TSALI HUB-F /
  HUB-R and spacers / pressure plugs, 8 Ahead set (AH 1", AH DL 1-1/8", AH DL 1-1/4"), 9-10
  brake parts and the brake size table. Per the site BRS500 was an OEM brake for the Mavic
  racing group.
- Updated (all `source_ref` -> 218, `year_to` -> 1994, descriptions only where the note fit in
  255 characters): 652 987 (N987), 663 986 (N986, **a judgement**), 666 985 (C985, dated
  1994), 674 BRS 500 and 276 BRS 500 lever (dated 1994), 657 750, 677 DC510 (510 / 700), 659
  884 (884D, **small print, a judgement**, dated 1994), 681 DC500N and 8083 DC630N (the
  N-brakes 500N / 630N / 730N / 810N), 8089 MX900 / MX1000, 8105 135, 8108 125 / 126 / 127, 273
  166E, 8868 204 / 207 / 208C. 8083 and 681 have bike links; only their years extend.
- New (13 rows, 1994-1994, brand 73): brakes 8944 VERSA C5 / C3, 8945 972, 8946 BRS100 BA-08 /
  BRS400 BA-45, 8947 disk brake; levers 8948 BRS levers BL-50 / 45 / 46 / 23 / 24 / 08 / 08C,
  8949 SS-7 / 5 / 4 / 7T, 8950 PC-8 / 5 / 3Jr, 8951 MX99 / 182 / MX77 / 182S-2 / TECH 77 / 181
  / 187 / 287 / HR-08 / BRS400T, 8952 188 / 188.4 opposite lever; 8953 TSALI HUB-F / HUB-R
  (Hubs); Ahead sets 8954 AH 1", 8955 AH DL 1-1/8", 8956 AH DL 1-1/4" (Headsets).
- Left alone: BRS 200 (671, 1991-2011), BRS 300 (672 and 275; BRS300 is not in the 1994 guide),
  the Tsali Competition hub (3295, 1994-97, a different hub), 887 and the other 8xx rows
  (not clear enough to match), 128S-2 / TECH 8 and the 182 / MX77 family (grouped into 8951,
  not matched to the 1986 Tech-6 / 128S-II row 8116). Out of scope: brake shoes, cable
  hangers, rubber covers, adjusting barrels, straddle cables, cables, tools, the size table.
- Deleted: none. No overrides touch the rows changed here.

## Yoshigai "DIA-WEINMANN" catalogue (7 pages, September 1964, Reminiscence Part 76) — data_source id 216

- `data_source` 216, label "Yoshigai Dia-Weinmann catalogue (September 1964)". Source:
  http://cyclespeugeot.web.fc2.com/reminiscence/yoshigai64.html, JPGs
  `catalog/yoshigai64/1964_dia-weinmann_01-07l.jpg` (1024 x ~1450, legible) plus
  `cycle195805_30-31.jpg` (a May 1958 Cycle magazine page on brake dimensions: not
  Yoshigai and not a product list, not used). Japanese, Yoshigai Kikai Kinzoku
  (Osaka). The parts page (04) is stamped "S. 39. 9" = Showa 39 = **September 1964**;
  p. 6 says the calipers are the forged light-alloy calipers of the **1963** tie-up
  between Yoshigai and Weinmann (Switzerland). The earliest Dia-Compe source we hold
  (the next is the 1974 Tomoda list). Pages: 1 cover (lever and caliper drawings), 2
  calipers No. 500 / 730 / 810 (reach A / B 43 / 57, 52 / 72, 61 / 79 mm; pairs
  810 x 810 x 131 / 135 / 144, 810 x 131, 810 x 135, 810 x 810 x 144 (22 or 23.5), 730 x 730,
  730 x 810, 500 x 500, 500 x 730), 3 levers 131 (131.1, 132.22 / 132.235 bands, 94 cup),
  135 (135.1), 136 / 138 (136.1 / 138.1, 136.22 / 136.235 bands) and the start of 162, 4
  levers 144 (144.1, .3, .4, .5, .6, .7, .8, bands 144.22 / .235), 160 / 161 / 162 (160.1,
  160.9, 161.3) and the cable dimension table, 5 caliper parts diagram (40 / 42 bolts,
  44.12, 46.x springs, 48 - 76.1), 6 "about DIA-WEINMANN calipers" text with the
  Vainqueur 909 (centre-pull) and Weinmann 801 photos, 7 the brake-holder tool.
- Updated (all `source_ref` -> 216): 8107 131 / 131D / 131DS, 8105 135 and 8801 162
  `year_from` 1974 -> 1964, **on the judgement** that the 1964 Dia-Weinmann levers and the
  later Dia-Compe rows are the same lineage (the 1974 rows already say "flat-type light
  alloy lever" and "Weinmann 162 type"). 8801 now also notes the red-button QR.
- New (3 rows, 1964-1964, brand 73): 8929 "500 / 730 / 810, Dia-Weinmann calipers"
  (Brakes), 8930 "144 / 160 / 161, Dia-Weinmann racing levers", 8931 "136 / 138,
  Dia-Weinmann touring levers". The calipers are **not** the later GC500 / N-brake rows
  (688, 678, 681 and so on start 1970 as velobase "500"); the matching Weinmann AG
  rows (8636 500, 8637 730, 1157 810, 1963 on) already exist and were left alone. The
  1986 "138" (row 268) is a hand rest, a different part.
- Left alone: 269 144C, 282 160C, 8866 (1986 144 / 151 / 160 / 161 / 162 no-hood), 8864 (Compe-G),
  8869 (144T), and the centre-pull Vainqueur / 801 (no Dia-Weinmann part numbers). Out
  of scope: arches, springs, bolts, washers, bridges, quick release 66, tool 64, cables.
- No bike links or overrides touch the rows changed here.

## Dia-Compe NGC982-280 brochure + 986 instruction leaflet — undated (equusbicycle.com/bike/diacompe/diacompe.htm)

- Two leaflets, four scans, no dates: `data_source` 115 "Dia-Compe
  NGC982-280 cantilever set brochure (undated)" (cover "New Gran-Compe" +
  exploded view with code/catalogue-no. parts list) and 116 "Dia-Compe 986
  cantilever brake instruction leaflet (undated)" (EN/JP; Dia-Compe Inc.
  Fletcher NC, Dia-Compe Taiwan, Yoshigai addresses).
- NGC982-280 set (code 8282280001): NGC982F / NGC982R arches, GC280 lever,
  1245 straddle bridge, 1274-380 straddle cable, 982.11 shoes, 982.7 /
  982.8 brazed pivots. 986: 986.15 per-arm spring tension adjuster, XMA.5
  gold right / XMA.6 silver left springs, 0.5-3.0 kgf lever force, 1242
  bridge, 1276-300W cable, 982.7-III / 982.8-III pivots at 255 mm (fork) /
  253 mm (stay) for 575 mm-OD rims 23-32 mm wide.
- Updated: 697 NGC982 description (set breakdown added; its stroke/weight
  figures came from the 1986 catalogue, source_ref now 115). 663 retitled
  "Dia-Compe 986" -> "Dia-Compe 986 (cantilever)", description rewritten,
  source_ref 116. No years changed (undated source).
- Not touched: 8111 GC280 (nothing new); 980/981/983/985/987/988/960.
- Unresolved: 663's velobase 1980-1980 is probably wrong — the 986 is absent
  from Products 1986 (though pp 12-16, 21-22 unscanned), and its 26in MTB
  rim chart and Taiwan address suggest c.1988+. Re-date from a dated
  catalogue if one turns up.

## Tomoda World Parts List No. 1 (April 1974) — Reminiscence page diacompe.html, data_source 193

- Source: http://cyclespeugeot.web.fc2.com/reminiscence/diacompe.html (JPEG
  scans of a Tomoda mail-order parts list, Osaka; images tomoda-wpl_197404_43
  / _46 / _132 = pp. 43, 46, 132). A retailer's list, so a first-appearance
  record, not a start date. The #960 date comes from the page's citation of
  New Cycling, July 1973 (CLB type #960, made by Yoshigai), not from the list.
- Updated, source_ref -> 193: 8107 Dia-Compe 131 / 131D / 131DS year_from
  1986 -> 1974 (1974 #131 was a flat-type alloy lever, 130g per set; the
  1986 weights are kept and both editions named in the description because
  the spec differs); 8105 Dia-Compe 135 year_from 1986 -> 1974 (same style
  of note); 8096 Dia-Compe 960 cantilever year_from 1986 -> 1973 (replaced
  the Mafac Driver-type set, 1968-73).
- Inserted (1974-1974): 8801 "Dia-Compe 162, hooded lever (Weinmann 162
  type)", brake levers, hooded alloy lever with adjuster and quick release,
  195g; search_text "Dia-Compe 162 hooded lever".
- Left alone: all other rows (the page lists nothing else we lack).
- Unresolved: 161, 164, GC200, NGC200 still have no source; they need a
  Dia-Compe catalogue between 1974 and 1986.

## 2026-10-18 re-check of the 1986 catalogue and search for other Dia-Compe sources (no rows changed)

- Diffed the bmxmuseum scans (data_source 102) against the live DB: every
  brake and lever family is present and dated 1986. Optional gaps left alone:
  135MT20 / 135MT45 (62g, 20 / 45 degree bent MX levers, p20) have no row (8118
  covers only the 132MT series); DC400N 117g, DC730N 133g and DC810N 134g are
  not in 681's description. 696 NGC450B says 184g; the scan reads 164g on both
  NGC450B and NGC450 but at 800 px the 6 and 8 cannot be told apart, so it was
  left.
- VeloBase's only Dia-Compe entry is "Dia-Compe 1986 Catalog" at velo-pages
  `g2_itemId=1284`, possibly with the pp. 12-16 and 21-22 missing from this
  scan set; velo-pages is down and the Wayback CDX was offline on 2026-10-18.
  oldschoolracing.ch (1990-98 adverts) and other web results had no
  164 / 161 / GC200 / NGC200 data.

## 2026-11-01 re-read of Reminiscence diacompe.html (new material beyond the Tomoda list) — data_source 347

- `data_source` 347, label "New Cycling magazine, new-products memo, Yoshigai
  cantilever (Sept 1968)", country JP. The page (same URL as data_source 193)
  now also carries New Cycling Sept 1968 p84 (`nc196809_84.jpg`: Yoshigai Kikai
  Kinzoku cantilever set, Mafac Driver type, forged light alloy, plus an unnamed
  auxiliary drop-bar lever, name not read reliably), New Cycling Jul 1973 #960
  notice (already in 193 / 8096), a Yokoo Sourinkan ad of Jul 1970 (Holks RS7
  Special, "DIA cantilever brake", Driver type in the photo), the 1974 Katakura
  Silk catalogue (Driver type fitted) and Cycle magazine May 1958 pp 22-31
  (brake survey) plus a Yoshigai "Lucky Dia" Downhill brake ad. Gami's text: the
  makers switched Driver -> #960 between 1973 and 1974.
- Updated (source_ref -> 347): 675 retitled "Dia-Compe Crossbow" -> "Dia-Compe
  cantilever (Mafac Driver type)", **a judgement** (velobase's 1968 start matches
  the Sept 1968 announcement, and the page never says "Crossbow"; in Japan
  "crossbow" was also Tokyo Brake's cantilever name). search_text "Dia-Compe
  Crossbow" -> "Dia-Compe cantilever"; description written; `year_to` 1980 ->
  1974 (velobase decade bucket; last attestation Tomoda Apr 1974 p43, replaced
  by #960 1973-74). No bike links or overrides on 675.
- Skipped by user decision: the 1958 DIA calipers on Cycle p26 (steel side-pull
  basic model with anti-tilt stop, steel centre-pull, cast-alloy centre-pull),
  no part numbers, so generic titles; also the 1958 Lucky Dia Downhill brake
  (centre-pull with stopper lever). Not read: Cycle 1958 pp 28-31 (other
  makers' levers and cantilevers: Toei, Seika, Aoridome).
- The retrobike `dc86.pdf` was offered again on 2026-11-01. It is still the same
  scan set as 102 (see the 2026-10-05 note above) and was not re-fetched.

## 2026-11-04 description tidy (no new source)

- 64 Dia-Compe rows carrying the 1986 catalogue's specs (source_ref 102,
  plus 218 / 247 / 261 where a later pass retagged them): dropped the
  velobase-style "<title>, Japan." prefix and the "(1986 catalogue)" /
  "1986 catalogue." citations, and the velobase old-title notes (those old
  titles are listed in the 1986 entry above). Kept "(velobase)" where it
  marks a second, independently weighed figure (e.g. 656 "166g avg", 678
  "147g measured", 700 "350g pair actual"), and kept the 1994 dating notes
  (657, 681, 8083, 8108). 268 now reads "used as tandem stoker hoods".
  source_ref left unchanged (no new evidence). Specs and years untouched.

## DC400N / QS400N held-source review — 2026-11-12 (proposed, not applied)

- Re-read Products1986, source209, printed p.4 (`catalog/yoshigai86/1986dc_07.jpg`): DC400N is 38–48mm, 117g; QS400N is 38–48mm, 132g, quick release. Weights are per caliper. Printed p.5 (scan08) separately lists DC400N C/RIII,132g; do not conflate that centering version with QS400N.
- Live DB has no exact DC400N/QS400N rows. 681 DC500N and682 QS500N are 43–57mm /128g and136g respectively, so leave them intact. Proposed two N-Series rows (brand73/category3/group123), source_ref209; DC400N1985–86 from 1985 Bianchi fitment (source144), QS400N1986 only. Proposed NULL links:5797 Rekord26,1985 and8243 Raleigh Grand Prix,1986. Generic679 “Dia-Compe400” is not positively identified as the N model and remains unchanged.
- Prepared `/private/tmp/existing-source-review/dia-compe-proposed.sql` (two guarded inserts, two guarded NULL-link updates), not executed. After approval/application, resolve inserted ids and add exact year-ranged generator overrides (`dia compe dc400n`,1985–86; `dia compe qs 400n`,1986); compare all loaded CSVs and expect only those two mappings. No component ids allocated; no dates, coverage counts, links or generator overrides changed in this review.

## DC400N / QS400N applied on user approval — 2026-11-12

- Loaded the preceding proposed SQL: new10977 `Dia-Compe DC400N, N-brakes`,1985–86,38–48mm/117g per caliper; new10978 `Dia-Compe QS400N, N-brakes (quick release)`,1986,38–48mm/132g. Brand73/category3/group123; source_ref209. Stable source UUIDs:b1eadd5f-0a22-4225-8614-f2dc44209356 and ab9e7499-5cb7-48a0-9c86-b2f6f9c46c12 respectively.
- Linked5797 (1985 Bianchi Rekord26)->10977;8243 (1986 Raleigh Grand Prix)->10978. DC400N first attestation is Bianchi source144; catalogue source209 supplies model/weight/reach. Generator overrides ranged1985–86 and1986 respectively. Existing679/681/682 unchanged.
- All85 CSVs regenerated and compared against pre-load output: exactly two new mappings,6309->6311 generated links. Live snapshots across18,283 specs confirm only5797/8243 changed from NULL. Idempotent SQL rerun: zero affected rows. Files: `/private/tmp/existing-source-review/dia-compe-proposed.sql`, `before-generator.sql`, `after-generator.sql`, `generator.diff`, `before-links.tsv`, `after-links.tsv`.

## DC-280 / DC-281 lever links from Panasonic USA 1985-87 — applied 2026-11-16

- Panasonic USA 1985 prints "DC-280" / "DC-281 MTB levers", and 1986-87 prints "No.280" /
  "No.281" for the same bikes' levers. So the codes are 280 (8112) and 281 / 281M (8113),
  dated 1984-86 from Ron Kitching 1984 (261). Neither row changed.
- Links: 21632 (1985 Miyata Ridge Runner "DC-280") -> 8112; 21675 (1985 Miyata Street Runner
  "DC-281") -> 8113. Generator keys `dia compe dc 280 levers` / `dia compe dc 281 levers`.
- Reviewed unlinked below: "PN-280" x2 / "PN-281" (1984 Miyata; the same bikes print DC- in 1985); "DIA-COMPE
  280 mountain lever" (1983 Miyata Ridge Runner, before 8112's 1984). Optional: Panasonic 1987
  City Bike "No. 281" would support 8113 year_to 1987; no linked bike needs it.
  - Validation: load 2 rows / 5 links, identical rerun 0 rows, readback matched.
    Regeneration gives exactly these 5 links. A first pass found the generic matcher
    also linking "SUGINO TGT-LP" by substring; it is now blocked by a `null` key.
    duplicate-report (plain, `--near`, `--paren`) and `quality-report` raise nothing.


## Panasonic identity review — 2026-11-18 (read-only)

Miyata 1984 really prints PN-280/PN-281; Panasonic No.280/281 does not explain the prefix, so **21277/21297/21319 remain NULL**. Panasonic 1986 attests 730 alloy side-pull, but provides no generation bridge to 1964 mixed row 8929; Weinmann 8637 and Dia-Compe 7300 steel in 8097 are different alternatives. Keep the 1980–85 Miyata 730 specs NULL rather than widening 8929.

[Primary scans, exact affected IDs and review limits](../../../ingest-bike-specs/references/known-catalogs/panasonic.md#remaining-identity-review--2026-11-18-read-only). No database or generator changes were made.


## Performance Fall/Winter 1985–86 recovered reference — 2026-11-18

Printed p.35 explicitly sells **730 G**, retailer SKU **53-0950**, and its
reach chart gives **52–72mm**; **500 G**, 53-0900, is 43–57mm. This is useful
period G-version evidence for the earlier bare 730 review, but does not
establish 730=730G, 730G=730GX, a link to 1964 row 8929, or equivalence to
steel 7300 in 8097. No DB or generator changes were made.

[Original photograph, compilation, exact recovered coverage and remaining limits](cross-catalog-notes.md#performance-bicycle-shop-fallwinter-198586--readable-pages-recovered-2026-11-18). The component reconciliation was subsequently applied as recorded below.


## Performance 1985–86 reconciliation — applied 2026-11-18, source 462

Added **11696 Dia-Compe 730G**, 1985–86, 52–72mm; extended existing 500G 9106 through 1986. The plain 730/730GX aliases remain unproven and unlinked. [Exact old/new values, retired/new UUIDs and validation](cross-catalog-notes.md#performance-fallwinter-198586-reconciliation--applied-2026-11-18). Readback matched, SQL rerun changed zero rows, all 107 loaded catalogues retained their mappings, all 13 tests passed and whole-DB quality stayed unchanged with zero errors.
