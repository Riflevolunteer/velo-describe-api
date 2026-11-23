# Huret catalogs processed so far

## Rival 1086-00 capacity and New Success ARIS compatibility — applied 2026-11-22

- **8488, Rival 1086-00.** The [New '82 leaflet, sheet 1](https://www.disraeligears.co.uk/site/00_main_images/huret_-_new_82_scan_1_main_image.jpg)
  (source 314) prints 26T maximum chainring difference. The [September 1983
  catalogue, p. 8](https://www.disraeligears.co.uk/site/00_main_images/huret_derailleurs_-_speedometers_1983_scan_8_main_image.jpg)
  (source 327) prints 16T for the same number. Both pages were visually
  verified. The description attributes each figure to its edition. Source
  327 also supplies the steel, clamp and braze-on details. The drawings
  leave the reason for the different capacity figures unresolved.
- **6110, MA85.5/4E New Success ARIS.** The [Sutherland handbook, sixth
  edition, PDF p. 188](https://paulinoposada.github.io/bike/documents/epdf.pub_sutherlands-handbook-for-bicycle-mechanics.pdf#page=188)
  visually confirms six-speed regular and seven-speed narrow ARIS
  compatibility for the MA85.5 indexed right lever. Reused handbook source
  489 and retained the original specimen's listed weight of 84 g. The
  separate 501.1 DFE recovery below concerns unverified maker-sheet details.
  The Raleigh lever generation still needs original fitment evidence.

Material values for guarded restoration:

| Component | Previous source and description | Applied source and description |
|---|---|---|
| 6110 | 1 / `Sachs Huret MA85.5/4E, ARIS New Success (type 1), France, 84 grams (Spec)` | 489 / `New Success ARIS downtube lever pair. The MA85.5E indexed right lever works with regular six-speed and narrow seven-speed ARIS freewheels. Made in France. Listed weight 84 g.` |
| 8488 | 314 / `Steel front with satin-finish mechanism and cut-out cage, 150g; clip 28 / 28.6mm, 16T capacity. Braze-on version 3030-01; Rival S 1056-00 has a detachable light-alloy mechanism.` | 327 / `Steel front derailleur, satin-finish mechanism, cut-out cage, 28/28.6 mm clamp, 150 g. Max chainring difference was listed as 26T in the New '82 leaflet and 16T in 1983. Braze-on 3030-01. Rival S 1056-00 has a detachable light-alloy mechanism.` |

The first transaction affected two rows and the replay affected zero.
Exact readback verified both descriptions, source references, identities
and dates. All 19 linked spec IDs retained their targets. Whole-database
quality checks had zero errors and identical review findings before and after.
The matcher reads component ID, title and category, so the description and
provenance changes required no regeneration. Restore the previous values
only under guards for the exact applied description, source, ID and dates.

## Manufacturer-source recovery and specimen follow-up — 2026-11-19, read-only

The recovery stage below was read-only. The subsequent user-approved
[ATB application](#rival-atb-versus-rival-7000classic--2026-11-19-applied-and-validated)
registered its source and added/enriched components. Neither magazine nor the
rest of the brochure was fully ingested; no CSV, generator or bike-link changes.

### 501.1 DFE recovery limits and paper leads

The [Velopedia record](https://velopedia.online/Document/Show/1291) still has
indexed OCR, but the live record on both host spellings and the public PDF
preview route return 404. Targeted Wayback CDX queries for New Success scan
paths on both hosts returned empty arrays. The earlier six/seven-speed finding
is recorded below. The archive OCR remains a lead for the maker sheet.
The applied compatibility description above uses the visually verified
Sutherland table.

New paper leads in the [eBay category listing](https://www.ebay.de/b/Kettenschaltung-in-Fahrrad-Sammlerobjekte/420/bn_7004600080):
[501.1/1 DFE, New Success ARIS, item 377245205441](https://www.ebay.de/itm/377245205441)
and [502.1/1 DFE, Rival Sport ARIS, item 377245221274](https://www.ebay.de/itm/377245221274).
The category identifies both at EUR 2.99, but direct listing retrieval failed
(403/cache miss), so exact availability, print dates and page contents are
unverified. The **/1 revision is not assumed identical to 501.1 DFE**.
No contact or purchase was made. A
[2022 Usenet post](https://groups.google.com/g/de.rec.fahrrad/c/cirIbQMw7Ns)
also offers 502.1/1 DFE among shared sheets; its FEX PDF now returns HTTP 666.
The post's approximate 1986 dating concerns copied catalogue pages, not a
verified date for the two separately described original sheets.

### 501.1 recovery follow-up — 2026-11-20, read-only

Followed the existing 501.1/1 paper lead and the public preview-image link
exposed by the indexed [Velopedia record](https://www.velopedia.online/Document/Show/1291).
The web reader returns cached page/OCR content, whereas direct HTTP retrieval
of the record and its linked
[preview image](https://www.velopedia.online/File/PreviewImage/Fichtel%20und%20Sachs/Sachs-Huret%20Kettenschaltung%20New%20Success%20Aris%20Infoblatt%201987)
returns 404. This does not establish that the original scan has been restored.
Direct [eBay item 377245205441](https://www.ebay.de/itm/377245205441)
retrieval returned 403; no readable listing photograph or /1 contents were
recovered. Exact-code searches recovered the existing indexed records and
category listings, not a new scan. No contact or purchase was made.

The cached OCR remains a source lead for the original sheet. The /1
revision needs its own readable copy. A restored public preview/PDF or
readable listing photo or holder copy could supply the additional maker
details. This pass covered the first source-recovery action. The other New Success/Raleigh,
Rival, Rider, Duopar/Eco and Avant fitment questions were not re-reviewed.
No database, matcher or bike-link changes, no prepared SQL, and no acquired
scan to preserve. Temporary retrieval/update files were cleaned up.

### Dated manufacturer advertisements

- [Pro Velo no.15, 4/1988](https://provelo.fahrradzukunft.de/pdf/pro-velo-15.pdf):
  visually checked the dated cover and **PDF p.4**, full-page Sachs-Huret
  ARIS advert. It shows the early New Success ARIS rear and paired downtube
  levers, and explains Cable Saver and RGS sprocket profiles. No numeric model
  codes, weights or bicycle fitments are printed. This is a dated appearance
  of that design, not an exact manufacturing endpoint or confirmation of the
  1989 Peugeot generation. The separately reproduced Le Cycleur colour advert
  has no visible publication date; its blog caption alone was not used to date it.
- [Bicross Magazine no.24, September 1984](https://oldschoolbmxfrance.com/bicrossmag/BXM8409-24.pdf):
  visually checked cover and **PDF p.63**, inside-back-cover Sachs-Huret
  Hi-Stepper advert. Explicit captions identify rear **Duopar 2690-00 H**,
  front **Hi-Stepper 3080-00 S**, right/left handlebar levers **3300/3303**.
  The rear is alloy/steel; the pictured extra parallelogram and long cage
  corroborate the ATB family already represented by 4400. It does not equate
  2690-00 H with 2690-01 or identify an unqualified bike's Duopar variant.
  The example 14x30 freewheel / 30x36x46 chainset is an application example,
  not a newly stated maximum capacity. No new dates are needed for 4400's
  existing 1980–1984 bounds from this corroboration alone.

### Recovered Sachs Composants ATB brochure — undated

[Six-page French manufacturer brochure](https://leblogduvelovintage.art.blog/wp-content/uploads/2022/09/sachs-huret-atb.pdf),
all pages visually inspected. No visible printed year or print code; the
2022 upload path does not date publication. **PDF p.3** gives:

| Category | Printed model | Distinguishing specification |
| --- | --- | --- |
| Rear Derailleurs | Rival ATB ARIS **AR41.4T** | Light alloy/steel, metallic grey, 360g; 40T total capacity, 34T maximum freewheel, slant parallelogram, Cable Saver, anti-jam cage. |
| Front Derailleurs | Rival ATB ARIS **AV62.2T** | Light alloy/steel, metallic grey, 150g; triple, maximum 26T difference. |
| Shifters | **MA82.8G** right | Handlebar lever, six speeds; footnote says seven speeds in preparation. |
| Shifters | **MA82.9G** left | Handlebar friction lever. |
| Shifters | **MA82.10G** left | Alternative for Orbit hub. |

The photos on PDF pp.1–2 show the ATB rear/front and handlebar levers together.
Other brochure content includes Rival ATB hubs, RGS freewheel, Sedisport ATB
chain and 48/38/28 mixed round/oval triple, VT5000/HT5020/Orbit HT drum hubs,
and Torpedo Pentasport. These were not fully reconciled with the DB here.

At the recovery stage, no explicit AR41.4T, AV62.2T or MA82.8G/9G/10G
title/description match was found among live Huret/Sachs-family rows.
Initial specimen reconciliation:

- Front **2440** is explicitly a double in its original VeloBase record;
  its main photo has a different cable arm from the brochure's triple.
  **2438** is a triple but its original record identifies three outer-cage
  cutouts and a high band clamp, unlike the brochure photo's solid cage.
  Neither is assigned AV62.2T. **2445** already carries the separate AV62.2D
  double code; the T suffix must not be silently folded into it.
- Rear **4417** has a short cage in its source record and photograph, unlike
  AR41.4T's long ATB cage. Do not retitle it from this brochure or transfer
  its Peugeot fitments to the ATB model.
- **6113** is a downtube braze-on lever; **6108/6110** are also downtube
  levers. The existing handlebar **8965/8966** are thumb ratchet controls
  MA86.1G/E, not the six-speed indexed MA82.8G system. No equivalence follows.

The [Rival 7000/Classic comparison below](#rival-atb-versus-rival-7000classic--2026-11-19-applied-and-validated)
supersedes the initial pending reconciliation: five coded ATB additions and
seven specimen-description updates were approved, applied and validated.
This brochure's triple ATB front cannot resolve the Rider double specs or
establish the 1988 PXR80's original Rival front. The brochure is now source
**466**; the original PDF URL is recorded above. Disposable inspection copies
and applied SQL were removed after validation.

### Rival ATB versus Rival 7000/Classic — 2026-11-19, applied and validated

Rechecked the brochure's PDF pp.1–3, live component/source records and the
original VeloBase specimen pages/photos. Before insertion, a global search of
titles and descriptions, normalising spaces, periods and hyphens, found none
of AR41.4T, AV62.2T or MA82.8G/9G/10G. The specimen configurations do not
establish equivalence:

| Comparison | Evidence and result |
| --- | --- |
| AR41.4T versus [4409 RD R7000](https://velobase.com/ViewComponent.aspx?ID=9F2722C1-80AF-46C9-9489-09B5A46E3B8E) | R7000 specimen is short-cage, ARIS/friction, with 28T chain wrap; the brochure rear has the extended ATB anti-jam cage and 40T capacity. Keep separate. |
| AR41.4T versus [4404 Classic 1500](https://velobase.com/ViewComponent.aspx?ID=CD487872-05BE-4774-A7BD-900864C35F26), [4405 Classic 2500](https://velobase.com/ViewComponent.aspx?ID=3E92CFEE-8A9B-4000-BC05-3D25414B9E17), [4406 Classic 3000](https://velobase.com/ViewComponent.aspx?ID=93876484-0C40-4C43-AD95-F27A05BCB4C8) | All are recorded as long-cage touring ARIS/friction rears. Main photos plus 1500 rear and 3000 reverse views show different cage profiles from the brochure's extended flat-neck ATB cage. No maker-code crosswalk; similar family construction does not identify AR41.4T. No merge or code transfer. |
| AR41.4T versus [4418 Classic 2000](https://velobase.com/ViewComponent.aspx?ID=68EF50F1-709A-4B0B-A7A1-1797DA3F657E) | Specimen has a short cage and its own Classic 2000 marking; page specifies six speeds. Shared speed count does not identify the ATB rear. |
| AV62.2T versus [2444 Rival 7000 front](https://velobase.com/ViewComponent.aspx?ID=11C583E3-2952-4C3B-AFFF-931F30DF2CDD) | The specimen page calls it a double and pictures it on a double; its mechanism has a black upper section and 5mm Allen cable fixing. Brochure shows a metal-band triple mechanism with a different cable arm. Do not assign AV62.2T to 2444 or transfer the brochure's 26T/150g specification. The enrichment omits the specimen's double claim because using a front on a double does not prove it cannot handle a triple. |
| AV62.2T versus generic 2432/2433 | 2432's photo shows a cut-out cage and its page describes a partly plastic clamp; 2433 is a low-band, four-cut-out double. Neither matches the brochure's solid-cage metal-band configuration. Initial exclusions of 2438/2440/2445 above still apply. |
| MA82.8G/9G/10G versus [6107 ARIS Classic](https://velobase.com/ViewComponent.aspx?ID=12B2AE27-B5D5-440C-B91F-1E7F4CFA6F79), 6108 and 6110 | 6107 is a six-speed aluminium downtube braze-on lever set; its package photo corroborates the mounting. 6108/6110 are also downtube controls. The brochure controls mount on the handlebar; 8965/8966 are the separately coded MA86.1 ratchet controls. No suitable existing handlebar row found among all Sachs-family shifters. |

Photograph details used beyond the main views:
[Classic 1500 rear](https://velobase.com/CompImages/RDerailleur/70BFBC11-39AC-4F8F-9C8A-E0BD8FE72FA6.jpeg),
[Classic 3000 reverse](https://velobase.com/CompImages/RDerailleur/F329489D-FF3F-4E89-8FFE-A05E394C1FE4.jpeg),
[Rival 7000 front mechanism](https://velobase.com/CompImages/FDerailleur/BE588160-D8F9-4DF3-963D-F6EF522B466A.jpeg).

Additional primary comparison: the [German Sachs MTB brochure](https://www.mtb-kataloge.de/sonstiges/Sachs.pdf),
PDF p.5, distinguishes Power Grip and Twist Ring controls; p.8 shows a
**Rival 7000 ATB triple**, seven-speed controls and a different rear cage,
despite the same 34T maximum sprocket / 40T total capacity. These are not
reasons to equate its parts with the six-speed French brochure. This German
file's publication date was not established; no date or part-code crosswalk
was inferred, and it is not being registered or ingested in this change set.

User approved and applied **one source, five component insertions and seven
description updates**. No existing titles, dates, search text, groups, IDs or
bike links changed; no merges/deletions. Registered **data_source 466** as
`Sachs Composants ATB brochure, French edition (undated)`, French market, with
the original PDF URL and pages in its citation. All new rows use brand 171,
NULL group and NULL year bounds; do not invent a publication year from the
upload path or the seven-speed announcement.

| Added component | Category | Description content supported by French pp.2–3 |
| --- | --- | --- |
| **11704** Sachs Huret AR41.4T, Rival ATB ARIS | Rear Derailleurs | Long cage, alloy/steel, metallic grey, 360g, slant parallelogram, Cable Saver, anti-jam cage, 40T total / 34T maximum sprocket. |
| **11705** Sachs Huret AV62.2T, Rival ATB ARIS (triple) | Front Derailleurs | Metal band clamp, triple, alloy/steel, metallic grey, 150g, 26T maximum chainring difference. |
| **11706** Sachs Huret MA82.8G, Rival ATB ARIS (right) | Shifters | Right handlebar thumb lever, six-speed indexing, steel/resin; used with AR41.4T. Seven-speed is only announced as in preparation, not stored as available. |
| **11707** Sachs Huret MA82.9G, Rival ATB ARIS (left) | Shifters | Left handlebar friction control, steel/resin, paired with MA82.8G. |
| **11708** Sachs Huret MA82.10G, Rival ATB ARIS (Orbit left) | Shifters | Alternative left handlebar control for Orbit hub, steel/resin; not the MA82.9G front-derailleur control. Its indexing/friction mode is not stated. |

The control column gives **91g once**, without distinguishing the individual
variants or specifying a pair; no per-control weight was assigned.

Existing specimen descriptions were enriched from their own VeloBase
pages, retaining source_ref 1 and all date fields:

| IDs | Old description | Added detail |
| --- | --- | --- |
| 4404 / 4405 / 4406 | Their respective title followed by `, France` | Long-cage touring rear, ARIS or friction, cable adjuster, 5mm Allen mounting / 8mm cable fixing. No shared weight, capacity or alloy-only construction inferred. |
| 4409 | `Sachs Huret RD R7000, Rival 7000, France` | Short cage, slant parallelogram, aluminium alloy, ARIS or friction, cable adjuster, 28T chain wrap; 5mm Allen mounting/cable bolts. |
| 2444 | `Sachs Huret Rival 7000, France. Approximate dating: early 1990s; exact years unknown.` | Chrome-plated steel cage, 28.6mm band clamp, 5mm Allen cable fixing; existing approximate-date sentence kept. |
| 4418 | `Sachs Huret Classic 2000, France. Known from 1990; end date unknown.` | Six-speed rear with cable adjuster; existing known-start sentence kept. |
| 6107 | `Sachs Huret ARIS Classic, France` | Aluminium downtube levers, standard braze-on mounting, six-speed ARIS. No MA82.8G code or handlebar compatibility inferred. |

Validation: first load inserted exactly **one source / five components** and
updated exactly **seven descriptions**; rerun inserted/updated **zero**.
Full readback matched every approved value, including search text and NULL
group/date fields. All **10,760 other existing components**, every other
tracked source/ownership table and all **23,380 stored bike specs** were
unchanged. In-memory generation across **108 local CSVs / 23,380 spec mappings**
found **zero changed mappings**; the existing `bike-update.sql` hash was
unchanged. The new rows and all seven enriched rows have no stored bike links.
The live unlinked-spec review found no coded/unambiguous ATB fitment;
Champagne's generic ARIS/thumb wording remains insufficient (link decisions).

Shared quality checks find **zero structural errors**. The only new review
findings are five deliberately incomplete-date flags, one per new row.
Sachs Huret merge, near and parenthetical duplicate reports each found **zero
candidates**, both before and after. Descriptions are at most **198 characters**.
No CSV, generator or link changes were needed.

Restoration, only if requested: old descriptions are in the table above;
restore them only against the exact enriched text and unchanged specimen IDs
and source_ref 1. Inserted UUIDs for 11704–11708 respectively are
`4db95623-cdef-4ae3-a4ef-e93df2e4e97e`,
`928093ca-9ff0-4cc2-bc56-e5505ccd870b`,
`2cc1a2e5-8d90-42a9-9b21-48b14b0abfbc`,
`0afc730f-7e85-465a-a882-1771e8f1817d`,
`e0917516-b3cd-4c0e-9988-7cef6e4b5b5f`.
Check references/mappings before removing an added row; remove source 466 only
if unreferenced. The applied SQL, temporary snapshots/helper and downloaded
inspection PDF were removed after validation; source URLs/pages remain above.

### Avant and Rider specimen comparisons

Inspected all **six** photos of the specimen
[sold as Avant AV62.10, from 1984](https://www.velosaloon.com/products/sachs-huret-avant-av-62-10-clamp-on-front-derailleur-from-1984)
and all **five** of the separate
[700 Avant gallery](https://www.velosaloon.com/collections/sachs-huret/products/sachs-huret-700-avant-clamp-on-front-derailleur-from-the-1980s-1).
The former has three outer-cage cutouts and an open metal mechanism; the
latter has a solid outer cage and a different mechanism with a black upper
limit-screw bridge. These are visibly different constructions, consistent with
keeping 2441/2442 separate. Neither gallery establishes a photographed model
code or a maker crosswalk. Listing dates and weights were not adopted as
manufacturer specifications or exact availability bounds.

All **six** photos of the [Rider front gallery](https://www.velosaloon.com/products/sachs-huret-rider-clamp-on-front-derailleur-from-the-1980s)
show a solid cage and cable-housing stop, but no readable double/Rider 2 model
designation. It is not evidence identifying the four original double fitments;
do not transfer its seller title to them or create a double model from it.

Live readback retains 8849 -> 6110, 8851 -> 2439, 8852 -> 4403;
15103/17501 -> 6110; the six 1988 Rival front specs
16411/16583/16603/16623/16661/16962 -> 8488; PXR rear 16963 and Rider double
15470/17763/17782/17858 -> NULL. Exact codes/fitment remain the missing
discriminants. All disposable magazine PDFs/renders, HTML, photos and archive
indexes from this pass were removed after recording the URLs and findings;
the ATB brochure was retained for the subsequent comparison/application above
and removed once that follow-up was validated.

## 1978 Motobecane Eco attestation — applied 2026-11-17, user approved

- [1978 US Motobecane catalogue](https://www.flickr.com/photos/stronglight/albums/72157714839758201/),
  Nomade portrait scan04 and specification scan12 explicitly name Huret ECO;
  caption says plural derailleurs. Scan03 prints1978; scan02 statesUS market.
  Existing front8796 already covers1977–1987. Rear4399 is the existing plain
  Eco2490-01 identity, including the formerly separate Huret-badged4301.
- Applied guarded `year_from` **1980 → 1978** on **4399**, `year_to=1990`
  unchanged, old source **156** → **431**, the new Motobecane catalogue.
  No title/description/search-text change or component insert. This earlier
  attestation supersedes c.1980 as the earliest source in the historical notes
  below; the absence from the full1976 catalogue still stands. Earliest
  attestation is not a manufacture/launch date. Exactly one component row
  updated; direct readback confirms 1978–1990/source 431, SQL rerun changes
  zero rows. The quality report has no findings on 4399 or the newly loaded
  catalogue. Full application/validation details are in the Motobecane
  bike-catalogue notes.

## New Success brake 944 Modolo attribution — 2026-11-16, user approved

Enriched **944**, Sachs Huret ARIS New Success, from its existing
[VeloBase specimen source](https://velobase.com/Pages/ViewComponent.aspx?ID=eb4fe66d-362b-4644-9009-2a94529cb64b),
which explicitly identifies Modolo manufacture and the Sachs-branded
Master SLK 90 model.

- Old description: `Sachs Huret ARIS New Success, France`.
- New description (96 characters): `Sachs Huret ARIS New Success brakes, manufactured by Modolo; Sachs-branded Modolo Master SLK 90.`
- All other fields retained, including title/search text, NULL date bounds,
  brand 171, category 3, group 131, source 1 and specimen UUID
  `EB4FE66D-362B-4644-9009-2A94529CB64B`. No new component or merge.
- Validation: exactly one guarded description update; rerun zero. Readback
  matches the intended text and every other original field. Matcher-input
  fingerprints (IDs/titles/categories of all 10,498 components) and all
  20,845 bike-spec links are unchanged; 944 has no bike links. A description
  edit does not affect matching, so CSV regeneration was unnecessary.
  Temporary SQL, baseline and verification script removed after validation.

## New Success hub configurations — 2026-11-16 review

Follow-up to the shifter compatibility review; correction subsequently approved
and applied on 2026-11-16. Component **3509** is
under Sachs (brand 98), rather than Sachs Huret (171), but supplies the two
Peugeot New Success hub links discussed in this audit.

- The original [VeloBase specimen](https://velobase.com/Pages/ViewComponent.aspx?ID=135983bd-ce4d-4a99-b1ae-892f21640453)
  is explicitly a **126 mm rear, freewheel, 36-hole, low-flange hub**,
  with an aluminium shell and steel axle. Its dating is approximate: late
  1980s to an unknown end. The retained `source_id` is
  `135983BD-CE4D-4A99-B1AE-892F21640453`.
- At the review baseline the row instead described the later guide's paired front/rear
  configuration: `Sachs New Success aluminium alloy hubs, sport design; front
  100 mm, 18-28-32-36 holes, sealed cartridge bearings; rear 130 mm, 8-speed,
  24-28-32-36 holes, polished.` Old years were **1980–1996**, `source_ref`
  **357**, title/search text `Sachs-Maillard New Success`, category 13, group NULL.
  The 1980 lower bound is not what the original source says; the 1996 evidence
  describes a different rear spacing and cannot establish this specimen's end.
- The later specifications were checked directly in **La Bicicletta Guida '96**:
  [scan 34, printed p.137](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_96_-_componenti_scan_34_main_image.jpg)
  lists the 100 mm front, 18/28/32/36 holes, sealed cartridge and sport design;
  [scan 36, printed p.139](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_96_-_componenti_scan_36_main_image.jpg)
  lists the 130 mm rear, eight speeds, 24/28/32/36 holes and polished finish.
  The rear entry does **not** identify a cassette interface; do not invent one.
  This supersedes the 2026-11-14 cross-catalogue review's confirmation of both
  guide entries as the same configuration as 3509.
- Live links are exactly **15096**, 1987 Peugeot Savoie (bike 904, source 311),
  `Huret New Success`, and **17495**, 1989 Peugeot Savoie (bike 1030, source 321),
  `Sachs-Huret "New Success"`. Their freewheel specs **15098** (six-speed) and
  **17497** (seven-speed 13x24) remain NULL. This supports investigating the
  early configuration; speed count alone does not prove a hub link wrong, and
  neither bike's generic hub text establishes its precise spacing or drilling.
  Both existing links were retained in the correction. The generator's year-scoped
  overrides also point both hub texts to 3509 (lines identifiable by those texts).
- Before insertion, reconciliation checked all New Success titles and Sachs/Galli hub rows:
  **3341** is the separately branded Galli specimen, not a replacement for these
  Peugeot links. No separate Sachs 130 mm/eight-speed New Success row existed.

**Applied correction (user approved):**

| Row | Change |
| --- | --- |
| **3509**, Sachs-Maillard New Success | Preserved ID, title/search text, specimen UUID, brand/category and NULL group. Restored VeloBase provenance **357 → 1**; dates **1980–1996 → NULL/NULL**. Description: `Sachs-Maillard New Success rear freewheel hub, 126 mm spacing, 36 holes, low flange; aluminium shell and steel axle. Approximate dating: late 1980s; exact years unknown.` |
| **11426**, Sachs New Success front hub | Added under source **357**, group **92** (Sachs New Success), brand 98/category 13. Aluminium alloy, 100 mm, 18/28/32/36 holes, sport design, sealed cartridge bearing; printed p.137. |
| **11427**, Sachs New Success rear hub (130 mm, 8-speed) | Added under source **357**, group **92**, brand 98/category 13. Aluminium alloy, 130 mm, eight-speed, 24/28/32/36 holes, sport design, polished; printed p.139. No cassette interface inferred. |

New source UUIDs: 11426 `3c8f3bd0-5a85-40da-ab5b-5b7896bafcc6`;
11427 `6c5f4cd8-1b58-4518-a9d8-81f499e241a8`. Search text was generated
with the maintained helper (`Sachs New Success front hub` / `Sachs New Success rear hub`).
Both new rows have **1996–1996**, recording this catalogue attestation rather
than established manufacturing endpoints. Checked Guida '99's alphabetical
positions on [front-hub scan 31 / p.122](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_99_-_componenti_scan_31_main_image.jpg)
and [rear-hub scan 33 / p.124](https://www.disraeligears.co.uk/site/00_main_images/la_bicicletta_guida_99_-_componenti_scan_33_main_image.jpg)
(also rear continuation scan 34): Rudelli proceeds to Shimano without a Sachs
New Success entry. This supplies no 1999 attestation and does not prove an end
of production. The 1987/1989 bike fitments likewise remain separate evidence,
not manufacturing endpoints for 3509.

Validation: exactly one component update and two inserts; guarded SQL rerun
**zero**. Complete component snapshots differ only in those approved changes;
all **20,845 live specs**, **1,211 bikes** and source records are unchanged.
All **94 CSVs** regenerated (**20,845 generated specs**, **7,544 linked**): the
entire generated SQL is byte-identical before/after. The original generated
file was restored after comparison. A fresh Sachs/New Success hub-spec search
returns only the two retained Peugeot links; no new supported links remain.
Sachs hub duplicate, near and parenthetical reports all return zero candidates.
The integrity report has zero errors; the only finding on these rows is the
expected incomplete-date review for 3509's intentionally unknown exact years.
Generator override comments explain the retained early identity; matching
behaviour is unchanged. Temporary SQL, snapshots and downloads were removed
after readback, mapping comparison and idempotency validation.

## Rival fronts 1086-00 / AV62.1D — 2026-11-16 evidence review

### PXR 80 targeted fitment hunt — 2026-11-16 follow-up

Recovered the original archive assets, which were missing from the current
blog image sequence, and visually read:

- French catalogue [PXR 80 portrait, p.18](https://www.bikeboompeugeot.com/Brochures%20France/Peugeot%201988%20France%20Adult%20Brochure/Peugeot%201988%20France%20Brochure%20PH50S,%20PH8SL,%20P8LS,%20PX80,%20PXR80.jpg)
  and [specification table, p.20](https://www.bikeboompeugeot.com/Brochures%20France/Peugeot%201988%20France%20Adult%20Brochure/Peugeot%201988%20France%20Brochure%20Specifications%204.jpg):
  Stronglight **100, 30/40/50**, Helicomatic **14/28**, **15-speed Huret-Rival**.
  The table supplies no front/rear model code. The portrait is only 1000px
  wide; the front cage/markings remain too small to distinguish the candidates.
- [German 1988 touring brochure, P18/PX80/PXR80 page](https://bikeboompeugeot.com/Brochures%20Germany/Peugeot%201988%20Germany%20Brochure/Peugeot%201988%20Germany%20Sport%20Brochure%20P18,PX80,%20PXR80.jpg):
  PXR 80 **Normandie**, Stronglight **99 triple, 50/40/30**, five-speed
  Helicomatic **14/17/20/24/28**, Sachs-Huret Rival 15-speed transmission.
  No precise front code is printed. Its 1000px-wide photograph also fails
  to resolve the cage. The German 99 versus French 100 crank specification
  is a market difference, not grounds to overwrite French spec 16961.
  Retained the archive's 1988 assignment without claiming a new date finding.

Specimen leads checked and excluded from original-fitment identification:

- [BikeForums 605036](https://www.bikeforums.net/touring/605036-peugeot-pxr80.html),
  posts 1/19: owner reports German purchase in 1985/86 and Pilot front /
  Duopar Eco rear; this is an earlier/different configuration. Attachments
  **127100–127102** returned 403, so no specimen image identification is
  claimed. Do not transfer its Pilot attribution to the 1988 French bike.
- [BikeForums 1229463](https://www.bikeforums.net/classic-vintage/1229463-1988-peugeot-pxr80-my-new-all-roadie.html):
  owner explicitly describes Shimano replacements for the drivetrain;
  its photographed parts cannot establish original Huret fitment.
- [Kleinanzeigen 3401412297](https://www.kleinanzeigen.de/s-anzeige/peugeot-randonneur-pxr80/3401412297-217-5067):
  indexed listing describes a modified **four-chainring** drivetrain.
  Live page redirects to category results; three image addresses recovered
  from the indexed original listing return 404. Category-result thumbnails
  were discarded as unrelated, not used as specimen evidence.
- [Gogo PX80 1985](https://www.velovintageagogo.com/t24089-peugeot-px80-1985):
  different PX80 model, with an expressly questioned Shimano front;
  not evidence for PXR80 Rival identity. Further targeted French/German
  model-name searches yielded no readable original front code or parts list.

**Outcome:** the original triple and gearing are freshly corroborated, but
no defensible exact front model was established. Live readback still has
16962 -> 8488, 16963 -> NULL, 16961 -> 1875, 16960 -> 8130, all source 319.
No links, dates, descriptions, CSVs or generator rules changed. Front 20T /
rear 34T requirements and the 1086-00 rating conflict remain as below.
Consolidated the PXR front/rear follow-up in TODO. Reopen for a readable
code/cage photo from an original 1988 French specimen, a period Peugeot
parts specification, or a maker crosswalk that resolves these candidates;
do not repeat the sources above without new material. Temporary copies
were removed after recording direct source URLs; `git diff --check` passed.

### Manufacturer and component comparison

Reviewed the six 1988 front links **16411, 16583, 16603, 16623, 16661,
16962** on 8488, plus candidates 8961, 2442, 2445, 10006 and 10007.
No DB, source CSV, matching rule or link changes were made. A shared name
and later date still do not establish a safe merge or six-link repoint.

Visually re-read three original manufacturer pages:

- [November 1981 new-82 leaflet, sheet 1](https://www.disraeligears.co.uk/site/00_main_images/huret_-_new_82_scan_1_main_image.jpg),
  source 314: Rival **1086-00**, 150g, stated maximum chainwheel difference
  **26T**. Its illustration has an additional small opening at the cage
  tip ahead of the larger rectangular cutouts. Rival S 1056-00 is separately
  listed at 118g with a detachable aluminium mechanism.
- [September 1983 catalogue, p.8](https://www.disraeligears.co.uk/site/00_main_images/huret_derailleurs_-_speedometers_1983_scan_8_main_image.jpg),
  source 327: same **1086-00**, steel, 150g, 28/28.6mm band, but capacity
  now **16T or less**. This is a real contradiction between the printed
  specifications, not an OCR correction or a proven explanation of two
  generations. The drawings alone do not resolve it.
- [April 1986 catalogue, scan 3](https://www.disraeligears.co.uk/site/00_main_images/sachs_kettenschaltung_fur_rennen_touristik_off-road_-_1986_scan_03_main_image.jpg),
  source 225: identifies **AV62.1D** as the Rival front; the small photo
  differs in cage detailing but gives neither its capacity nor an old-code
  crosswalk. Do not infer that it is 1086-00 merely renumbered. The 110g
  figure in 8961 is from its retained VeloBase specimen evidence, not this
  maker sheet.

**Separate the five doubles from the PXR 80.** Live readback gives 42/52
for Comète, Aravis, Galibier, Mont Faron and Ventoux: a 10T difference,
within either printed 1086-00 rating. Their unresolved question is exact
model/generation, not an established capacity error. PXR 80 front **16962**
is paired with crank spec **16961**, Stronglight 100 **30/40/50**: a **20T**
difference, exceeding the later 16T rating while fitting the earlier 26T
claim. Therefore it needs a triple/cage identification as well as a date
review. This is a review flag, not proof authorizing an unlink, because the
manufacturer evidence conflicts. Do not simply widen 8488 to 1988 or move
it to the expressly double AV62.1D 8961.

Re-read [VeloBase Rival triple](https://velobase.com/ViewComponent.aspx?ID=CAD9D9EB-C753-4C5D-8802-B3FA53029F3F)
(2438): explicitly described as triple, but no numbered model or capacity
is supplied. It is a candidate to identify, not a justified replacement.
2445 carries the AV62.2D Rival Sport code; the source does not authorize
treating it as an alias for AV62.1D. The approximately dated specimen records do not independently
establish the PXR's 1988 fitment.

Targeted additional source check: source **381**, Motobecane May 1985
spares, [p.17](https://i.servimg.com/u/f70/20/23/69/69/20231609.jpg) and
[p.18](https://i.servimg.com/u/f70/20/23/69/69/20231610.jpg), lists/draws
dealer **98358**, a braze-on Rival, and **89963**, a separate Rider triple.
It supplies no 1086-00 / AV62.1D band-front crosswalk, so it does not close
this question. Exact-code web searches found no new manufacturer crosswalk.
Do not repeat these checks without a new document or specimen lead.
In the initial comparison, PXR gearing was checked against stored specs and
the earlier Peugeot review. The follow-up above subsequently recovered and
visually verified the original technical table; that supersedes the initial
retrieval gap. The blog image filenames do not correspond to printed pages.

Next evidence needed: a dated Sachs/Huret code crosswalk or a clear original
PXR 80 front photo/parts specification showing its cage and clamp. Preserve
the current links pending that review. Temporary page copies were removed;
documentation passed `git diff --check`. No SQL was prepared or applied.

## Raleigh shifter and front provenance follow-up — 2026-11-16

Read-only follow-up after the rear-cage correction. Compared the original
1987 Raleigh p.13 lever area with the full-resolution [owner photograph](https://norway2015peterandrolf.wordpress.com/wp-content/uploads/2015/05/p1020919.jpg),
the [April 1986 maker sheet, scan 3](https://www.disraeligears.co.uk/site/00_main_images/sachs_kettenschaltung_fur_rennen_touristik_off-road_-_1986_scan_03_main_image.jpg)
which explicitly identifies **MA85.2E** (8963), and 6110's VeloBase
specimen photos (GUID `46733377-2BA5-459B-B965-CDBB581772AC`). The latter
show the indexed right lever's ARIS/New Success selector markings.
The owner picture provides a clearer view of the lever blades, but the
right-hand ring is oblique and does not establish a readable code/selector.
The catalogue's lever area remains too small. Similar blade profiles and
the earlier rear cannot identify the exact control pair.

Also compared the actual pre-ARIS braze-on lever specimen in this
[New Success group gallery](https://www.velosaloon.com/products/nos-sachs-huret-new-success-gear-shifting-group-set-rear-and-front-derailleur-gear-lever-shifter-from-1985),
photos **DSC_0069 / 0070 / 0071**: recessed blades and folding-ring fasteners.
These are specimen construction evidence, not proof of its seller-assigned
date or of Raleigh fitment; no MA85.2E inscription was established from them.
The Headbadge mirror explicitly offers the same 1000px-wide catalogue scans,
so it supplies no higher-resolution lever evidence. The product JSON endpoint
returned 429; no conclusion depends on that unavailable response.

**8849 remains on 6110**, as the prior decision requires, pending a readable
original right-lever code/selector or a period Raleigh parts crosswalk to
8963 / 6110. No evidence-backed repoint was found; do not repeat these image
comparisons without new distinguishing material.

**Stale metadata corrected, user approved:** front **2439** previously said
`Sachs Huret ARIS New Success, France. Dated from 1987-89 Peugeot / Raleigh fitment only (ARIS from 1987, as rear 4412).`
The Raleigh/rear-4412 rationale is superseded by the approved rear correction
to **4403**. Its Peugeot front links **15101 / 17499** and the independently
indexed shifter specs **15103 / 17501** remain; retain the existing Peugeot
decision. Applied description (137 characters): `Sachs Huret ARIS New Success, France. Dated from 1987-89 Peugeot fitment only; exact Raleigh Randonneur front variant remains unresolved.`
Retained all identity/date/source fields and the existing front links while
seeking a code/photo for Raleigh front **8851**. This is a description/provenance
explanation repair, not a claim that the exact Raleigh front is identified.
Exactly **one** guarded description update; rerun **zero**. Readback confirms
the new text and every other field unchanged, including the 1987–1989 bounds,
source 1 and specimen UUID `7545C46D-BBE5-475F-9364-975DB00DF404`.
Matching-input fingerprints across all **10,498 components** are unchanged;
all **20,845 live specs** are byte-equivalent to the application baseline,
including front links **8851 / 15101 / 17499**. Description text is not a
matcher input, so no CSV regeneration was necessary. No generator changes.
Temporary SQL, baseline and verification script removed after readback and
idempotency validation; review images were already removed.

## Raleigh Randonneur long-cage identification — 2026-11-16

The original 1987 UK Raleigh **p.13** includes a dedicated rear-mechanism
close-up in its left-hand detail strip, not just the complete-bike photograph.
Read at the original scan size and compared with the VeloBase specimen photos
for **4403 AR47.1T** and **4413 AR47.2T**. This resolves the earlier rear-cage
identity question: the catalogue depicts the **earlier AR47.1T Touring, 4403**.
The code is identified by construction/photo comparison, not printed in the
Raleigh specification table.

- [Original catalogue page](https://labibleduvelocataloguesraleigh.blogspot.com/p/raleigh-1987_3.html),
  source **224**, p.13: its transmission text explicitly specifies long cage.
  The detail photograph shows the straight parallelogram, horizontal New
  Success badge, and long slotted outer cage with a broad loop around the
  lower pulley. These match 4403's specimen, rather than the slanted ARIS body
  on 4413. The same p.13 scan is also available at
  [Ebykr](https://ebykr.com/wp-content/uploads/2026/10/ebykr-1987-raleigh-handbuilt-lightweights-catalog-p13.webp);
  it is a duplicate of the same 1000px-wide scan, not independent higher
  resolution evidence. Enlarging the detail added no image information.
- Independently photographed [AR47.1T specimen](https://www.disraeligears.co.uk/site/sachs-huret_new_success_touring_derailleur_471t.html)
  and its [full-size image](https://www.disraeligears.co.uk/site/00_main_images/sachs-huret_new_success_touring_derailleur_main_image.jpg)
  show the matching construction. The alternative
  [AR47.2T specimen](https://www.disraeligears.co.uk/site/sachs-huret_new_success_aris_touring_472t_derailleur.html)
  has the visibly different slant parallelogram and ARIS styling. Their
  reported 1985/1988 specimen date stamps are not used to set component
  production dates or to choose Raleigh equipment by year alone.
- Corroborating owner evidence: [Rolf's Randonneur account](https://norway2015peterandrolf.wordpress.com/equipment/)
  calls its New Success mechs original; the [drive-side photograph](https://norway2015peterandrolf.wordpress.com/wp-content/uploads/2015/05/p1020919.jpg)
  shows the same long-cage shape. This is a restored/modified bicycle with a
  later drivetrain; the page also uses both 1986 and 1987 labels. It supports
  the construction comparison, not exact model-year proof. The CycleChat
  [1987-owner account](https://www.cyclechat.net/threads/which-derailleur-for-7-speed.276957/)
  reports original friction-ratchet levers but its photos show replacement
  Shimano equipment; no exact Huret code is derived from that thread.

**Applied correction, user approved:** rear spec **8852**, bike
**497**, Randonneur 18 (1987), `Huret New Success`, **4412 → 4403**. Retained
source **224**, raw label, value and all component identities/date bounds.
The old link came from the broad ARIS-from-1987 override; the new evidence
supports a bike/year-specific exception before that rule, preserving Peugeot
Savoie / Mont Cenis mappings. Shifter **8849** on 6110 and front **8851** on
2439 remain separate exact-fitment questions; this rear comparison does not
by itself identify their codes.

Restoration, if needed: 4403 → 4412 on that same spec, guarded on bike 497,
label 17, source 224 and value `Huret New Success`. The reviewed SQL updated
exactly **one** live row; rerun **zero**. The generator change was checked across all **94 CSVs**
and **20,845 generated specs**: only the Randonneur rear mapping changes;
the linked count remains **7,544**. The original generated SQL was restored.
Live readback confirms 8852 → 4403 and all **20,844 other specs unchanged**,
including shifter 8849 and front 8851. Candidate component records and
component/bike/source counts are unchanged. The integrity report has zero
errors and no findings on the corrected bike spec. Temporary SQL and the
application snapshot/check script were removed after validation; the earlier
disposable downloads/comparison files were already removed.

## New Success shifter six/seven-speed compatibility — 2026-11-16 review

**Speed compatibility is resolved:** MA 85.5 E, the indexed right lever in
6110's MA85.5/4E pair, supports **six and seven speeds**. The earlier
seven-speed-only concern came from an incomplete VeloBase system label.
This supersedes that concern in the brand audit below. No DB, CSV, link or
generator changes were made during this investigation.

Manufacturer evidence located:

- [Sachs-Huret New Success ARIS technical sheet 501.1 DFE](https://velopedia.online/Document/Show/1291),
  indexed as 1987, two pages, print code **870940**. Section **2.1** gives
  MA85.5E right with selectable six/seven-speed indexing; section **2.2**
  gives MA85.4E left with retro-friction, both for Italian braze-on bosses.
  The listed weights are 48g right / 42g left. Its range also includes a
  clamp-mounted pair, **MA85.4C**; do not infer the E mounting from a model
  name alone. The printed product table includes six- and seven-speed ARIS
  freewheels. Separate lever codes explain the combined MA85.5/4E label.
- [Sachs ARIS installation instructions 510.8 D](https://velopedia.online/Document/Show/1284),
  indexed as 1987, four pages, print code **870920**. Section **4.2**, figure
  **14**, explicitly tells the installer to select 6 for a six-sprocket
  freewheel and 7 for seven sprockets. This corroborates the variable
  indexing mechanism; no substitution of a different shifter is implied.
- Corroborating technical reference: Sutherland's Handbook, sixth edition
  (1995), [PDF page 188](https://paulinoposada.github.io/bike/documents/epdf.pub_sutherlands-handbook-for-bicycle-mechanics.pdf#page=188),
  Sachs-Huret indexed-lever table: MA85.5 with AR47.2D/T and regular
  six-speed or narrow seven-speed ARIS freewheels. This table groups later
  Rival levers too; it does not override the original sheet's warning about
  New Success/Rival shifter interchangeability for its contemporary parts.

**Retrieval limitation:** the manufacturer's text was read from the search
service's indexed OCR of the original documents, including the English,
French and German compatibility statements. Live Velopedia document and
preview-image downloads returned **404**, consistent with its displayed
data-loss notice. No maker scan or figure 14 was visually inspected. The
handbook text was accessible, but its screenshot failed. The matching
statements in the two manufacturer documents establish the compatibility
finding; keep this retrieval limit explicit for later source registration.
Neither document is currently registered in `data_source`. Do not claim a
locally held scan or silently adopt an exact manufacturing date.

Live bike-spec readback and conclusions:

| Bike / shifter spec | Evidence | Result |
| --- | --- | --- |
| 1987 Peugeot Savoie, 15103 | Explicit ARIS indexing; six-speed New Success freewheel 15098 | Six-speed operation fits 6110's indexed lever system; the count is no reason to unlink it. The bike text does not independently print the mounting suffix. |
| 1989 Peugeot Savoie, 17501 | Indexed New Success; seven-speed New Success freewheel 17497 | Seven-speed operation also fits; retain the link. |
| 1987 Raleigh Randonneur 18, 8849 | New Success with ratchet levers; six-speed 14/16/18/21/24/28 freewheel 8855 | Six sprockets are compatible, but exact ARIS-versus-earlier-friction lever identity remains unresolved. |

For Raleigh, visually re-read original [1987 UK catalogue](https://labibleduvelocataloguesraleigh.blogspot.com/p/raleigh-1987_3.html)
**p.15** (spec table) and **p.13** (Randonneur portrait). The table agrees
with the stored ratchet wording and six-speed range; it does not name ARIS
or a lever code. The p.13 photo does not resolve the shifter code/selector
at this scan size. Its transmission paragraph explicitly says **long cage**
New Success, while rear spec **8852** then linked short-cage **4412**.
This adds a concrete cage question to the prior ARIS-from-1987 decision:
review 4403 AR47.1T versus 4413 AR47.2T using period fitment evidence before
changing either the shifter or rear link. A year or ratchet wording alone
does not distinguish those generations. Leave current links unchanged for
review, rather than recording the Raleigh as a confirmed MA85.5E fitment.
The [subsequent rear-detail comparison](#raleigh-randonneur-long-cage-identification--2026-11-16)
resolves the rear as 4403; that user-approved one-link correction is applied.

The [applied description above](#rival-1086-00-capacity-and-new-success-aris-compatibility--applied-2026-11-22)
records compatibility from Sutherland. The Italian bosses, left-lever
mechanism and 90 g total inferred from the separately listed lever weights
remain details to verify on the original maker sheet. The specimen listing's
84 g is a separate figure.

The audit's broad six-speed compatibility TODO was replaced by the narrower
Raleigh identity question; Peugeot no longer needs compatibility evidence.
Temporary catalogue copies were removed after recording page URLs and
findings. No SQL was prepared or loaded, so no idempotency or generator
comparison was needed. Documentation passed `git diff --check`.

## Imported dates and model codes corrected — 2026-11-16, user approved

User approved correcting the imported dates and adding the model codes from
the audit below. Applied **26 guarded component updates**, overlapping
**23 date corrections** and **11 retitles**. No components, sources or bike
specs were inserted/deleted; component IDs, VeloBase GUIDs, brand/category/group
ownership, source_ref **1**, weights and country text were preserved.

**Date representation:** for the audit's seventeen approximate-date rows
(1731, 2432, 2433, 2434, 2438, 2441, 2444, 2445, 4403, 4413, 4414, 4415,
4420, 6104, 6106, 6113, 6114), both exact bounds are now **NULL**. Their
descriptions retain the corresponding approximate date in the audit table
below, in the form `Approximate dating: mid-1980s; exact years unknown.`
This removes false precision without treating an approximate decade as an
exact availability interval.

For **2440, 2442, 4407, 4412, 4416, 4418**, the recorded start remains
**1989, 1985, 1984, 1987, 1996, 1990**, respectively; the duplicated end
year is now **NULL**. Descriptions state the known starting year and unknown
end. These are source/availability bounds, not newly established manufacture
endpoints. The 1988/1989 date-conflict flags on 4412 consequently disappear
because its end is unknown; the earlier ARIS bike-identity decision remains
a reviewed inference, not new confirmation of that exact generation's dates.
The approved 4417 1989–1990 fitment range was not changed.

| ID | Previous title | New title |
| --- | --- | --- |
| 2445 | Sachs Huret Rival Sport | Sachs Huret AV 62.2D, Rival Sport |
| 4403 | Sachs Huret New Success touring | Sachs Huret AR 47.1T, New Success Touring |
| 4409 | Sachs Huret Rival 7000 | Sachs Huret RD R7000, Rival 7000 |
| 4412 | Sachs Huret ARIS New Success 1st Gen. | Sachs Huret 47.2D, ARIS New Success (1st generation) |
| 4413 | Sachs Huret ARIS New Success 1st Gen. Touring | Sachs Huret AR 47.2T, ARIS New Success Touring (1st generation) |
| 4414 | Sachs Huret ARIS New Success 2nd Gen. | Sachs Huret RN500 / 54.01D, ARIS New Success (2nd generation) |
| 4415 | Sachs Huret ARIS New Success 3rd Gen. | Sachs Huret RNS00, ARIS New Success (3rd generation) |
| 4416 | Sachs Huret ARIS New Success 4th Gen. | Sachs Huret RNS50, ARIS New Success (4th generation) |
| 4420 | Sachs Huret Rival Sport | Sachs Huret Rival Sport, AR 41.3 D |
| 6108 | Sachs Huret Rival Aris Classic 3000 | Sachs Huret MA82.4/3E, Rival ARIS Classic 3000 |
| 6110 | Sachs Huret ARIS New Success (type 1) | Sachs Huret MA85.5/4E, ARIS New Success (type 1) |

Descriptions now lead with the coded title where retitled; every retitle
also regenerated `search_text` with `ebaySearchText(title, 'Sachs Huret')`.
The spelling check confirmed that the source pages themselves distinguish
[4414 RN500 / 54.01D](https://www.velobase.com/Pages/ViewComponent.aspx?ID=66BECFCD-9CF5-4302-B240-062F1DD6B822)
from
[4415 RNS00](https://velobase.com/Pages/ViewComponent.aspx?ID=A1D454BA-50D7-4F11-8DCC-EAD51F35ED6B).
They are recorded literally as specimen-page codes; no manufacturer crosswalk
or equivalence between those spellings was inferred. Other code evidence
is the model field on each row's unchanged VeloBase `source_id`, using
`https://velobase.com/ViewComponent.aspx?ID=<source_id>`; the prior audit
records the extracted codes and the 4403/6110 page URLs.

4420 keeps its existing name before the added code. Preflight found that
putting the code first made six generic `Huret Rival` CSV values uniquely
match early 4401 solely by removing a substring candidate. Keeping the name
prefix preserves the unresolved generation ambiguity and requires no new
matcher override. Final comparison across **94 local CSVs / 20,876 generated
spec INSERT mappings** found **zero changed mappings**. Generation ran in
memory against the same before/after component set; the existing
`bike-update.sql` was preserved and no generated catalogue SQL was loaded.

Validation: first load updated exactly **26 rows**, rerun updated **zero**.
Readback exactly matched every planned field; all **10,470 other component
rows** and **20,845 stored bike specs** were unchanged, including all **124
Sachs Huret component links**. Component total remains **10,496**. Shared
quality checks find **zero structural errors**; the only newly introduced
review flags are **23 incomplete-date flags**, deliberately exposing the
unknown bounds. Six Rival front date flags remain, as recorded below.
Post-change duplicate merge, near and parenthetical reports each found zero
candidates. Existing Huret Rival link and duplicate-classifier tests passed;
descriptions are at most **140 characters**. Documentation passed
`git diff --check`.

Restoration, only if deliberately requested later: the audit table retains
the seventeen old numeric date pairs; the six open-ended rows previously
repeated their current start in `year_to`. Restore old titles from the table
above. Old `search_text` equalled the old title on each retitled row except
6110, where it was `Sachs Huret ARIS New Success`. To restore descriptions,
remove the newly appended approximate-date / known-start sentence and its
added separator punctuation, then replace the leading new title with the old
title, preserving the original following
country/weight text. Apply restoration only against the exact corrected
values, with the original GUID/source/ownership guards. Temporary SQL,
baseline/readback snapshots and comparison helpers were removed after
validation. Modolo attribution is now recorded in the approved 944 enrichment
above; six/seven-speed lever compatibility was resolved in its separate review.
Richer configuration descriptions and dated generation evidence remain follow-ups.

## Sachs Huret brand quality audit — 2026-11-16, read-only

Scope: **Sachs Huret, brand 171**, all categories. Huret 139 and Sachs 98
were checked for neighbouring identities and cross-brand bike links, not folded
into the component totals. No DB, CSV or matcher changes were made.

| Category | Components | Components used | Bike-spec links | VeloBase-only source |
| --- | ---: | ---: | ---: | ---: |
| Brakes | 1 | 0 | 0 | 1 |
| Cranksets | 1 | 0 | 0 | 1 |
| Front derailleurs | 19 | 8 | 45 | 10 |
| Rear derailleurs | 29 | 10 | 74 | 16 |
| Shifters | 20 | 2 | 5 | 9 |
| Total | 70 | 20 | 124 | 37 |

Used a consistent read-only snapshot with the shared quality-report checks:
**zero structural errors**, including dangling references, category/group
conflicts, reversed ranges and duplicate bike specs in scope. Every component
has a valid source and category/brand association. Eight components lack dates
(944, 4404–4406, 4409–4411, 6103); 34 descriptions are under 70 characters;
45 components have no group. These metadata gaps do not establish bad links.

All **37 VeloBase-only source pages** were retrieved successfully and their
model/date/system fields read. These remain specimen evidence; they are not
manufacturer production-date confirmation. Main findings and proposed work:

1. **Imported decade dates masquerade as exact years.** Seventeen rows have
   approximate source dates compressed into exact DB bounds:

   | IDs | Source date wording | Stored bounds |
   | --- | --- | --- |
   | 1731, 2432, 2445, 4420, 6113 | Late 1980's, open end | 1980–1980 |
   | 2433, 2438, 6106, 6114 | 1980's | 1980–1980 |
   | 2441, 4403 | Mid 1980's | 1980–1980 |
   | 2434 | 1990's, open end | 1990–1990 |
   | 2444 | Early 1990's, open end | 1990–1990 |
   | 4413 | 1990's | 1990–1990 |
   | 4414 | Early 1990's | 1990–1990 |
   | 4415 | Mid 1990's | 1990–1990 |
   | 6104 | 1970's–1980's | 1970–1980 |

   All seventeen have zero bike-spec links. Preserve the source's uncertainty
   when preparing corrections; do not substitute invented exact introduction
   years or assume a decade label establishes continuous production.
   Six more source pages give an explicit start with unknown end, while the
   DB repeats the start as the end: **2440** (1989), **2442** (1985), **4407**
   (1984), **4412** (1987), **4416** (1996), **4418** (1990).
   An attested year can be a conservative availability bound, but is not a
   discontinuation date. **4417** is a separate case: VeloBase says 1990's,
   but the approved 1989 Peugeot fitment remains positive evidence for its
   earlier start; do not undo that correction from the vague specimen label.

2. **Useful model codes missing from titles/descriptions.** Source fields give
   2445 **AV 62.2D**; 4403 **AR 47.1T**; 4409 **RD R7000**;
   4412 **47.2D**; 4413 **AR 47.2T**; 4414 **RN500 / 54.01D**;
   4415 **RNS00**; 4416 **RNS50**; 4420 **AR 41.3 D**;
   6108 **MA82.4/3E**; 6110 **MA85.5/4E**. Treat these as specimen-page
   transcriptions pending review, particularly the similar RN500/RNS00
   spellings. No renames, merges or new aliases have been applied.
   [4403 specimen](https://velobase.com/ViewComponent.aspx?ID=D8601937-0FD6-48D8-8DC4-CF98D64B2861)
   identifies a long-cage friction New Success, 36T maximum sprocket / 42T
   wrap, with approximate mid-1980s dating, contradicting the precise 1980
   reading. April 1986 manufacturer scan 3 explicitly offers a long-cage New
   Success, but does not print the touring code: it cannot independently
   establish AR 47.1T's exact production endpoints.

3. **Descriptions conceal important configurations.** The
   [944 specimen page](https://velobase.com/ViewComponent.aspx?ID=EB4FE66D-362B-4644-9009-2A94529CB64B)
   reports Modolo manufacture / Master SLK 90 identity; the approved
   [944 description enrichment](#new-success-brake-944-modolo-attribution--2026-11-16-user-approved)
   above now records it. The
   [6110 specimen](https://velobase.com/ViewComponent.aspx?ID=46733377-2BA5-459B-B965-CDBB581772AC)
   is a seven-speed ARIS downtube braze-on shifter; 6108's page says eight-speed
   ARIS; 6113 describes indexed Rival Sport with selectable modes, whereas
   6114 is retro-friction. Preserve these differences. Both six-speed 1987
   bikes using 6110 need configuration evidence: **8849**, Raleigh Randonneur
   18 (ratchet wording; freewheel 8855), and **15103**, Peugeot Savoie
   (ARIS indexing; six-speed freewheel 15098). Their links are review
   candidates, not proven wrong: the source page alone does not establish
   whether the lever supports both spacings. The 1989 Savoie 17501 has a
   seven-speed freewheel. Existing rear/front ARIS-from-1987 decisions do not
   independently prove the exact lever configuration. The old note below
   suggesting a 6110/6111 duplicate review is obsolete: **6111 is absent**
   from the live DB; no new merge is required or inferred here.

4. **Eight live link/date flags, already known identity questions.** Six
   1988 front specs point to 8488 (ends 1987): **16411, 16583, 16603, 16623,
   16661, 16962**. Resolve 1086-00 versus AV 62.1 D from code/construction
   evidence before changing the date or repointing. Re-read the
   [April 1986 manufacturer scan 3](https://www.disraeligears.co.uk/site/00_main_images/sachs_kettenschaltung_fur_rennen_touristik_off-road_-_1986_scan_03_main_image.jpg):
   it identifies the Rival front as AV 62.1 D, but does not cross-reference
   1086-00. The other two flags are rear specs **16509** (1988) / **17500**
   (1989) on 4412 (1987 only); retain the approved November 15 ARIS decision
   while seeking a dated generation source. Rider double specs **15470,
   17763, 17782, 17858** and PXR 80 rear **16963** remain correctly NULL
   under the documented guards. No new supported link was identified.

5. **Duplicate and missing-model review.** Full Huret-family duplicate report:
   14 groups / 34 pairs, all classified configurations, generations or a
   reviewed variant; no automatic merge candidates. Near and parenthetical
   reports each return zero. This does not close manual 8488/8961/2442 or
   Rider specimen questions. Indexed 6113 and retro-friction 6114 remain
   distinct configurations. Two New Success crank specs (**15100, 17498**)
   and three freewheels (**15098, 17459, 17497**) remain unlinked. Adjacent
   Sachs crank 1730 is the later Campagnolo-made model, so its name alone is
   not a supported 1987/1989 match. The old TODO saying the 1987 New Success
   hub is unlinked was stale: **15096** and **17495** already link Sachs
   hub **3509**. At this audit baseline its description carried the 1996
   130mm/eight-speed configuration (source 357). The [subsequent hub configuration review](#new-success-hub-configurations--2026-11-16-review)
   confirmed that its original specimen is 126 mm; the approved correction
   restored 3509 and recorded the later hubs separately as 11426 / 11427.

The broader link search includes Huret-branded specs, links into brand 171
whose text omits the maker, and the newly loaded 1984 Motobecane catalogue.
Its unlinked Duopar, S PP, Challenger S. and Rival cases remain covered by
[the recorded link decisions](../../../ingest-bike-specs/references/link-decisions.md#1984-motobecane-loaded-2026-11-16).
Maker-only text, either/or cells, spoke protectors and dropout mentions were
not counted as missing named models. `/linkCoverage` was unavailable on
localhost; equivalent read-only snapshot queries were used rather than
starting the API. No generated/live mapping comparison was needed because
component records and matching rules were unchanged. Temporary audit output
and fetched copies were removed after recording these findings.

## Huret "Accessoires Cycles, Cyclomoteurs, Motos" — 1973 (disraeligears.co.uk, 28 scans)

- `data_source` 95, label "Huret Accessoires Cycles Cyclomoteurs Motos
  (1973)". Source:
  https://www.disraeligears.co.uk/site/huret_accessoires_cycles_cyclomoteurs_motos_-_1973.html
  (scan_01..28). French, "1973" on cover, Huret 60 av. Félix-Faure,
  Nanterre; stamped by UK agent Delite Accessories Ltd, Wickham Skeith,
  Suffolk. Exploded diagrams with reference numbers, capacities, some
  weights; no prices.
- Listed: Jubilee rear 2200 / 2252 / 2240 (133g) and long cage 2248 / 2253 /
  2254; Jubilee front 500 (80g); front 700; Allvit 1900 / 1900 D; Super
  Allvit 1999; Svelto 2000 / 2000 D and 2030 (small wheel); levers 1882 /
  1884 / 641, long 1826 / 1886 / 1887, Jubilee 1567, Stick-Shift 1885 /
  1888, stem levers 1512-1574, bar-end 2300 / 2301; out of scope: cable
  clips and guides, dropouts 230-235 / 902-905, chain guard 643, spoke
  protectors 996 / 998 / 999, wing nuts 892 / 895, chain tensioners 1112 /
  1121, speedometers 4100-4900 and drives 6000 / 6500, display boxes.
- All Huret rows (brand 139) were velobase. Retitled (old titles): 4303
  "Huret Jubilee (first version; shorter spring on parallelogram)" and 4304
  (black) -> codes 2200 / 2252 / 2240 added; 4307 "Huret Jubilee (long pulley
  cage)" -> 2248 / 2253 / 2254, NULL -> 1973; 2396 "Huret Jubilee (5 holes in
  outer cage plate)" -> Jubilee 500; 4292 "Huret Super Allvit" -> 1999; 4293
  "Huret Svelto (2nd version)" -> 2000 / 2000 D; 6077 "Huret Jubilee"
  (shifter) -> 1567 (manette double luxe); 6071 "Huret Allvit (short
  levers/standard model)" -> 1882 / 1884 / 641; 6062 "Huret Allvit / Luxe
  (long levers)" -> 1826 / 1886 / 1887. Descriptions on 2395, 2397 (ref.
  500), 4290 (1900 / 1900 D), 2385 (ref. 700). year_to -> 1973 on 4303,
  4304, 4290, 4292, 4293, 2385, 6077, 6071, 6062.
- New (4 rows, 1973): Svelto 2030; Stick-Shift 1885 / 1888; stem-mount
  levers 1512-1574; bar-end controls 2300 / 2301.
- Bike links (user decision): 1973 Raleigh "New Huret Jubilee", 1974
  Motobecane "HURET JUBILE", 1975 "HURET JUBILE, wide ratio" front
  derailleurs repointed 2395 (4-hole, 1977-80) -> 2396 (5-hole, 1972-76) on
  the rows' own dates; overrides now year-ranged (<=1976 2396, >=1977 2395).
- Left: 2394 "Huret Alvit" front (1961-1985, linked 1973 Raleigh; no Allvit
  front in this catalogue); 4305 / 4306 later Jubilee versions (1970); 4291
  Allvit Cable Saver; Challenger / Success rows (not in 1973). "ATOM ... with
  HURET spoke protector" freewheel values (spoke protector out of scope).

## Huret "Accessoires Cycles, Cyclomoteurs, Motos" — 1975 (disraeligears.co.uk, 27 images)

- `data_source` 96, label "Huret Accessoires Cycles Cyclomoteurs Motos
  (1975)". Source:
  https://www.disraeligears.co.uk/site/huret_accessoires_cycles_cyclomoteurs_motos_-_1975.html
  (front cover, inside front cover, page_1..24 = sheets H1-H24, rear cover).
  Huret et ses Fils, Nanterre, "member of Frexa", French / English, some
  speedometers stickered "Not available on U.S. market". Reference numbers
  and capacities, no prices or weights.
- Listed: rear Challenger 2400 / 2440 / 2448 / 2454 (new), Allvit 1900,
  Super Allvit 1999 (2.38 chain only), Svelto 2000 (now 13-28T) and 2030 (now
  13-26T); front Challenger 950 / 951 (new), Standard 900 / 901 (new codes);
  levers Competition 1733-1736 / 1707 (new), Standard 1898 / 1882, 1899 /
  1884 / 1879, 661 / 641 C / 1848 C, Challenger 1725-1782 down tube and stem
  (new), 80mm long 1747-1794 (new), bar-end 2300 / 2301; cable clips,
  dropouts, spoke protectors, wing nuts, chain tensioners, dropout kits,
  speedometers out of scope.
- Not in 1975 vs 1973 (not capped, regional / range split): whole Jubilee
  range (rear 2200 etc., front 500, lever 1567 — still on 1975 Motobecane
  bikes), 700 front, Stick-Shift 1885 / 1888, stem levers 1512-1574, long
  levers 1826 / 1886 / 1887.
- Retitled (old titles): 4273 "Huret Challenger" (RD) -> Challenger 2400 /
  2440 / 2448 / 2454; 2388 "Huret Challenger (hinged clamping band)" ->
  Challenger 950 / 951 (hinged clamping band); 6073 "Huret Challenger
  (1970's)" (shifter) -> Challenger levers 1725-1782, 1970 -> 1975-1975;
  6071 "Huret 1882 / 1884 / 641, Allvit & Svelto (standard levers)" -> +
  1898 / 1899 / 1879 / 661 / 1848 C. year_to 1973 -> 1975 on 4290 Allvit,
  4292 Super Allvit, 4293 Svelto 2000, 7940 Svelto 2030, 6071, 7943 bar-end.
- New (3 rows, 1975): Standard 900 / 901 front, Competition levers 1733-1736
  / 1707, 80mm long levers 1747-1794.
- Bike links unchanged; added override 'huret challenger stem shifter' ->
  4273 in Rear Derailleurs (the retitle had stopped the name match for 1975
  Motobecane Nomade). Left: velobase Challenger variants 2377, 4298, 6064,
  4300, 4289.


## Huret "Accessoires Cycles, Cyclomoteurs, Motos" — 1976 (disraeligears.co.uk, 40 images)

- `data_source` 118, label "Huret Accessoires Cycles Cyclomoteurs Motos
  (1976)". Source:
  https://www.disraeligears.co.uk/site/huret_accessoires_cycles_cyclomoteurs_motos_-_1976.html
  (front cover, inside front cover, page_1..36 = sheets H1-H36, inside rear
  cover gear charts, rear cover). Huret et ses Fils, Nanterre, "member of
  Frexa", French / English, weights in g and oz, no prices.
- New vs 1975: Success rear 2460 / 2470 and front 975; Duopar 2600 / 2640 and
  long cage 2648 / 2654; Allvit Safety 2546 / 2549; Jubilee front 530 (28.6mm);
  Ratchet levers (down tube 1465-1468, stem 1416 / 1471 / 1472); Challenger
  Click-In (1349-1354, stem 1363 / 1368 / 1370); 80mm stem levers 1239 / 1240 /
  1245; 80mm Click-In (1375-1380, stem 1389 / 1394 / 1396); Luxe levers
  1337-1344. Jubilee range is back (absent 1975): rear 2200 family now 136g
  (133g in 1973), long cage 145g, front 500.
- Renumbered: Allvit 1900 -> 2500 / 2540, Super Allvit 1999 -> 2548 / 2554,
  Svelto 2000 -> 2040 / 2072, Svelto small-wheel 2030 -> 2065; front
  "Standard" 900 / 901 is now "Club"; Competition levers 1733-1736 / 1707 now
  "Jubilee / Success". Dropped: Challenger long cage 2448 / 2454, 1975
  standard lever numbers (1898 / 1882 / 1899 / 1884 / 1879 / 661 / 641 C /
  1848 C).
- Retitled (old titles): 4299 "Huret Success" -> Success 2460 / 2470; 4292
  "Huret Super Allvit 1999" -> + 2548 / 2554; 4302 "Huret Duopar (titanium)"
  -> Duopar 2600 / 2640 (titanium), NULL -> 1976; 4293 "Huret Svelto 2000 /
  2000 D (2nd version)" -> + 2040 / 2072; 7940 "Huret Svelto 2030" -> + 2065;
  2396 "Huret Jubilee 500 (5 holes ...)" -> Jubilee 500 / 530 (5 holes ...);
  2389 "Huret Success (solid clamping band)" -> Success 975 (solid clamping
  band), year_from 1977 -> 1976; 2378 "Huret Club" -> Club 900 / 901
  (velobase 133g Spec dropped, catalogue 163g); 7945 "Huret Competition
  levers 1733-1736 / 1707" -> Jubilee / Success levers 1733-1736 / 1707; 6066
  "Huret Ratchet" -> Ratchet levers 1465-1468 / 1416 / 1471 / 1472.
- year_to -> 1976: 4303, 4307, 4290 Allvit (title kept for the bike-name
  match), 4292, 4293, 7940, 7945, 6073 Challenger levers, 7946 80mm levers,
  7943 bar-end. Description only: 4273 Challenger (2448 / 2454 not in 1976).
- New (5 rows, 1976): 8172 Allvit Safety 2546 / 2549, 8173 Duopar 2648 /
  2654 (titanium, long cage), 8174 Luxe levers 1337-1344, 8175 Challenger
  Click-In levers 1349-1370, 8176 80mm long Click-In levers 1375-1396.
- Deleted (merged): 7944 "Huret Standard 900 / 901" (Front Derailleurs,
  1975-1975, our 1975 catalogue row, `37ddc8a5-be86-11f1-a2df-02fea3763e8d`)
  into 2378 Club 900 / 901 — same refs. No links / overrides.
- Bike links unchanged (regenerated all catalogues: 901 links, identical).
  Front Jubilee overrides (<=1976 2396, >=1977 2395) still agree with row
  years.
- Left: 6077 Jubilee lever 1567 and 4304 Jubilee black (not in 1976); 6071
  1975 standard levers (Luxe 1337-1344 inserted separately, catalogue
  doesn't say it's the same lever); velobase Allvit generations 4269-4272,
  Challenger II / 3rd-version rows, Success-Duopar CPSC fronts (1978+).

## Huret Accessoires Cycles Cyclomoteurs Motos — 1979, applied and validated

[1979 manufacturer catalogue](https://www.disraeligears.co.uk/site/huret_accessoires_cycles_cyclomoteurs_motos_-_1979.html), pages H2–H13 are product pages. H1 is the factory; H14–H22 cover fittings, speedometers and related accessories outside the supported component categories; H23–H28 are exploded spares, useful for identification. H25 illustrates the Jubilee rear with a coil spring and 2215 inner / 2481 outer cage; H27 shows slotted 1688 lever arms.

- H2: Jubilee rear 2200, forged alloy, 136g, steel ball rollers, 12–24/28T, 36–53T; front 500 (28mm) / 530 (28.6mm), alloy, 80g, double/triple. H2–H4 show **new** slotted forged alloy levers 1164-00 / 1163-00 (double / right, 28mm) and 1162-00 / 1161-00 (25.4mm), 85g clipped / 60g clipless, cable 1632.
- H3–H4: Success 2460 rear, titanium/alloy, 170g, 12–24/28T, 36–53T; Duopar 2648 rear, titanium/alloy, 264g, 12–28T with 26–53T or 12–36T with 36–53T. Both pair with 975 CPSC front, alloy, 140g, 28/28.6mm, spring push plate.
- H5: Challenger II rear 2400 / 2400 H, alloy/steel, 180g, 12–24/28T, 36–53T; front 1050-00 alloy, 130g, 28mm, double/triple. **New** alloy levers 548-01 / 547-01 / 551-01 (double / right / left, 28mm) and 546-01 / 545-01 / 549-01 (25.4mm), 105g clipped / 80g clipless.
- H6: steel Allvit III 2700 / 2700 H, 296g; Safety III 2746 / 2746 H, 353g; 12–30T or 12–34T with 2557 end, 36–53T chainrings. Super Allvit III 2748 / 2748 H, 335g; French and English gearing statements differ and require rechecking. Non-H uses riveted hanger, H forged ends.
- H7–H8: Eco rear 2490 / 2490 H, steel, 235g, 12–24/28T, 36–53T. Club II front 1000-01 (28mm) / 1001-01 (25.4mm), steel, 147g, double/triple; CPSC spring push-plate version 159g. Challenger II CPSC front 1050-00, 132g.
- H9–H13: Luxe levers 1136-01 / 1135-01 / 1139-01 (28mm double / right / left), 1134-01 / 1133-01 / 1137-01 (25.4mm), clipless 1142-01 / 1143-01; stem levers 1158-01 double / 1157-01 right. Ratchet downtube 1466 / 1465 (28mm), 1468 / 1467 (25.4mm), stem 1472 / 1471. New Sensomatic 3 indexed stem lever 1169 for Eco. Adjustable stop plate newly offered for Jubilee, Success and Challenger II. Bar-end controls 2300 right / 2301 left.

The 1978 H2 illustration labels the earlier two-hole lever 1161-00–1164-00 (95g clipped / 65g clipless); the 1979 H2 labels the newly slotted design with the same codes (85g / 60g). The 1978 association with 7945 remains supported; the slotted design is a separate record, 8491. H5 supports 6064 from 1979. H11's 1169 Sensomatic control matches the later 1169-00 Sensosaver illustration and indexed function, supporting an earlier date for 10009, but its paired 1979 Eco is not identified as the later 2800-01. Jubilee rear 4305/4306/4419, Jubilee fronts 2395/2397, 975 CPSC fronts 2391/2392/2393 and the unsuffixed Eco 2490 versus 4399 remain unresolved. H6's French and English Super Allvit III gearing claims disagree. Applied source 536 to nine existing rows; no component insertions or deletions. 6064 1980→1979, 8491 1981→1979, 10009 1982→1979, and 7943 year_to 1978→1979. The old title of 10009 was `Huret 1169-00, Sensosaver 3`, search text `Huret 1169-00 Sensosaver 3`. Other rows enriched: 4298, 8173, 9991–9993. No year_from moved later. All changes were read back, and an SQL rerun changed zero rows. Huret duplicate and near reports found no newly established duplicate; Svelto 4294/7940 remains subject to the existing specimen task. The bike-link comparison before and after was identical: 15 pre-existing Rival mapping differences, no gained or changed mappings. Reviewed unlinked Huret specs; none of the updated identities is established by those values, so no links were added. Existing linked 8173 has two specs.

Previous descriptions and provenance for restoration:

- 4298 old year_from=1978 year_to=1981 source_ref=535 description=Alloy and steel rear, alloy roller cage. 1978 190g, 13-24/28T; 1981 180g, 12-24/28T; 36-53T chainrings. 2400 riveted bracket, 2400 H forged ends (1978), 2440 forged ends (1981). Successor to 255g Challenger.
- 6064 old year_from=1980 year_to=1981 source_ref=313 description=Huret Challenger II, France. Light alloy down-tube levers, 3.49oz (99g) with clip, 2.71oz (77g) without; refs 548-01 for 28mm (1-1/8in) and 546-01 for 25.4mm (1in).
- 8173 old year_from=1976 year_to=1984 source_ref=535 description=Titanium / forged alloy long-cage rear. 1976 320g, 13-36T; 1978 264g, 13-28T with 26-53T chainrings or 13-36T with 36-53T. 1984 2648 H 34T / GC 38T, Ti or steel, 36T capacity. Sachs Huret c.1980-84 252g; 2648 measured 255g with bolt.
- 8491 old year_from=1981 year_to=1986 source_ref=313 description=Forged light-alloy friction down-tube levers, hand polished, matt anodised cut-out, 80g with clip (60g without): 1164-00 clip 28mm, 2390-00 French bosses, 2380-00 Italian bosses. Recommended for Jubilee, Success and Duopar; MA 85.1 E in the 1986 listing.
- 9991 old year_from=1978 year_to=1981 source_ref=535 description=Steel rear, 36-53T chainset; 1978 296g, 13-30T or 13-34T with 2557 dropout; 1981 290g, 12-30T or 12-34T with 2557. 2700 riveted bracket, 2700 H Huret or foreign forged ends (1978), 2740 foreign forged ends (1981).
- 9992 old year_from=1978 year_to=1981 source_ref=535 description=Steel rear with chain-retaining cage; 1978 353g, 13-30T or 13-34T with 2557 dropout; 1981 336g, 12-30T or 12-34T with 2557. 2746 riveted bracket, 2746 H Huret or foreign forged ends (1978), 2749 foreign forged ends (1981).
- 9993 old year_from=1978 year_to=1985 source_ref=535 description=Steel wide-range rear, 26-53T chainset; 1978 335g and 13-34T, 1981 312g and 12-34T. 2748 riveted bracket, 2748 H Huret or foreign forged ends (1978), 2754 foreign forged ends (1981).
- 10009 old year_from=1982 year_to=1983 source_ref=326 description=Huret Sensosaver 3, France. Stem-mounted indexed lever for 3-speed bicycles that shows the selected gear; used with the Eco Sensosaver rear 2800-01.

## Huret "Accessoires Cycles, Cyclomoteurs, Motos" — 1978 (Disraeli Gears), applied and validated

[Manufacturer catalogue](https://www.disraeligears.co.uk/site/huret_accessoires_cycles_cyclomoteurs_motos_-_1978.html); 1978 is printed on the front cover. French/English product pages H2–H13 include Jubilee, Success, Duopar, Challenger II, Eco, Allvit III, Safety III, Super Allvit III, Club II and several shifter families. H14–H22 fittings and speedometers and H23–H28 exploded spares are outside the component categories, although the diagrams help distinguish assemblies. [H6](https://www.disraeligears.co.uk/site/00_main_images/huret_accessoires_cycles_cyclomoteurs_motos_-_1978_page_6_main_image.jpg) gives Allvit III 2700/2700 H, Safety III 2746/2746 H and Super Allvit III 2748/2748 H; the 1981 catalogue confirms matching codes and illustrations but lists different weights and gearing. The start years of the three corresponding records were moved to 1978 and their differing 1978 and 1981 specifications retained.

The 1978 Jubilee 2200 illustration has a long spring and undrilled three-strut cage; its precise relationship to the existing 4305/4306/4419 generations needs further evidence. The Jubilee front illustration and refs 500/530 do not independently resolve every existing four-hole/five-hole record. Lever 1164 appears in 1978 and 1981 with different illustrated designs and quoted weights. The 1978 drawing and 95g/65g weights closely match the 1976 1734/1736 levers (7945), despite changed complete-lever and clip codes; a date extension and addition of the 1978 codes to 7945 was applied as an inference, while the 1981 slotted lever 8491 remains separate. Challenger II shifter codes 1145–1151 do not establish identity with either 1976 or 1981 levers; keep those unresolved. The 1978 Eco 2490 versus later 2490-01 suffix also warrants care before changing linked records.

### Applied rows and validation

Registered the catalogue as `data_source` **535**. The reviewed SQL applied 12 updates and no component inserts, deletions or merges; repeat execution affected zero rows. Readback confirmed all descriptions, dates, source refs and search texts, with descriptions at most 233 characters. Old values below support restoration if the live row still matches the applied values.

- **7945, p2**: previously `Huret Jubilee / Success levers 1733-1736 / 1707`, 1975–1976, source 118, search text `Huret Jubilee Success levers 1733-1736 1707`. Old description `Huret Jubilee / Success levers 1733-1736 / 1707, France. Forged alloy down-tube levers, 95g with clip, 65g without: double 1736 (25.4mm, clip 1988) / 1734 (28mm, clip 1852); right 1735 / 1733; 1707 without clip; cable 1632. Competition levers in 1975.`. Applied `Huret Jubilee / Success levers 1733-1736 / 1707 / 1161-1164`, 1975–1978, description `Forged alloy, 95g clipped/65g clipless. 1976 double 1736 25.4mm (clip 1988), 1734 28mm (1852); right 1735/1733, clipless 1707. 1978 double 1164/1162, right 1163/1161; 28/25.4mm. Cable 1632; Competition in 1975.`.
- **9991, p6**: previously `Huret Allvit III 2700 / 2700 H / 2740`, 1981–1981, source 313, search text `Huret Allvit III 2700 2700 H 2740`. Old description `Huret Allvit III, France. Steel rear, 290g; 12-30T freewheel with a 36-53 chainset, 12-34T with the 2557 special dropout; 2700 riveted anchor dropout, 2700 H Huret forged dropouts, 2740 foreign forged dropouts.`. Applied `Huret Allvit III 2700 / 2700 H / 2740`, 1978–1981, description `Steel rear, 36-53T chainset; 1978 296g, 13-30T or 13-34T with 2557 dropout; 1981 290g, 12-30T or 12-34T with 2557. 2700 riveted bracket, 2700 H Huret or foreign forged ends (1978), 2740 foreign forged ends (1981).`.
- **9992, p6**: previously `Huret Allvit Safety III 2746 / 2746 H / 2749`, 1981–1981, source 313, search text `Huret Allvit Safety III 2746 2746 H 2749`. Old description `Huret Allvit Safety III, France. Steel rear with a cage that stops the chain jumping on a false shift, 336g; 12-30T freewheel, 12-34T with the 2557 dropout; 2746 riveted anchor dropout, 2746 H Huret forged, 2749 foreign forged dropouts.`. Applied `Huret Allvit Safety III 2746 / 2746 H / 2749`, 1978–1981, description `Steel rear with chain-retaining cage; 1978 353g, 13-30T or 13-34T with 2557 dropout; 1981 336g, 12-30T or 12-34T with 2557. 2746 riveted bracket, 2746 H Huret or foreign forged ends (1978), 2749 foreign forged ends (1981).`.
- **9993, p6**: previously `Huret Super Allvit III 2748 / 2748 H / 2754`, 1981–1985, source 390, search text `Huret Super Allvit III 2748 2748 H 2754`. Old description `Huret Super Allvit III, France. Steel wide-range touring rear, 312g; 12-34T freewheel with a 26-53 chainset; 2748 riveted anchor dropout, 2748 H Huret forged, 2754 foreign forged dropouts.`. Applied `Huret Super Allvit III 2748 / 2748 H / 2754`, 1978–1985, description `Steel wide-range rear, 26-53T chainset; 1978 335g and 13-34T, 1981 312g and 12-34T. 2748 riveted bracket, 2748 H Huret or foreign forged ends (1978), 2754 foreign forged ends (1981).`.
- **9994, p9**: previously `Huret Luxe levers 1136-01 / 1134-01`, 1981–1981, source 313, search text `Huret Luxe levers 1136-01 1134-01`. Old description `Huret Luxe levers, France. Chromed zamak down-tube levers, 128g; 1136-01 for 28mm (1 1/8in) tubes, 1134-01 for 25.4mm (1in).`. Applied `Huret Luxe levers 1136-01 / 1134-01`, 1978–1981, description `Chromed Zamak down-tube levers: 1136-01 / 1134-01 double for 28 / 25.4mm; 1135-01 / 1133-01 right, 1139-01 / 1137-01 left, 1142-01 / 1143-01 without clip (1978). 128g (1981).`.
- **9995, p12**: previously `Huret 1158-01 stem-mount levers`, 1981–1981, source 313, search text `Huret 1158-01 stem-mount levers`. Old description `Huret stem-mount levers, France. Chromed zamak, 172g; for 21.1 or 22mm stems.`. Applied `Huret 1157-01 / 1158-01 stem-mount levers`, 1978–1981, description `80mm stem-mounted levers: 1157-01 single right, 1158-01 double, 21.1/22mm stems. 1981 1158-01: chromed Zamak, 172g.`.
- **7943, p13**: previously `Huret 2300 / 2301 bar-end controls`, 1973–1976, source 118, search text `Huret 2300 2301 bar-end controls`. Old description `Huret 2300 / 2301 bar-end controls, France. Handlebar-end shift controls: 2300 right for rear derailleur (cable 2305), 2301 left for front derailleur (cable 2306); down-tube clips 2303 / 2307, 2304 / 2308`. Applied `Huret 2300 / 2301 bar-end controls`, 1973–1978, description `Huret 2300 / 2301 bar-end controls, France. Handlebar-end shift controls: 2300 right for rear derailleur (cable 2305), 2301 left for front derailleur (cable 2306); down-tube clips 2303 / 2307, 2304 / 2308`.
- **8173, p4**: previously `Huret Duopar 2648 / 2654 (titanium, long cage)`, 1976–1984, source 156, search text `Huret Duopar 2648 2654 Sachs Huret DuoPar titanium`. Old description `Huret Duopar 2648 / 2654 (titanium, long cage), France. 1976: titanium / forged alloy, 320g, 13-36T; June 1984: 2648 H (34T) / GC (38T), Ti or steel / alloy, 36T capacity. Sachs Huret badged c. 1980-84, 252g; a 2648 weighed 255g with bolt.`. Applied `Huret Duopar 2648 / 2654 (titanium, long cage)`, 1976–1984, description `Titanium / forged alloy long-cage rear. 1976 320g, 13-36T; 1978 264g, 13-28T with 26-53T chainrings or 13-36T with 36-53T. 1984 2648 H 34T / GC 38T, Ti or steel, 36T capacity. Sachs Huret c.1980-84 252g; 2648 measured 255g with bolt.`.
- **4298, p5**: previously `Huret Challenger II`, 1978–1981, source 313, search text `Huret Challenger II`. Old description `Huret Challenger II, France. Light alloy and steel rear, 6.35oz (180g), lightweight shift arm, alloy roller cage, 12-24 or 12-28, 36-53 chainwheel; refs 2400, 2440 for forged fork ends. Successor to the 255g Challenger of the same refs.`. Applied `Huret Challenger II`, 1978–1981, description `Alloy and steel rear, alloy roller cage. 1978 190g, 13-24/28T; 1981 180g, 12-24/28T; 36-53T chainrings. 2400 riveted bracket, 2400 H forged ends (1978), 2440 forged ends (1981). Successor to 255g Challenger.`.
- **2380, p5**: previously `Huret Challenger II`, 1978–1981, source 313, search text `Huret Challenger II`. Old description `Huret Challenger II, France. Light alloy front derailleur, 4.23oz (120g), double or triple chainwheels, ref 1050-00 for 28mm (1-1/8in) or 28.6mm; S.P.P. System version ref 1050-00 CPSC, 4.65oz (132g).`. Applied `Huret Challenger II`, 1978–1981, description `Light-alloy front for double/triple chainwheels, ref 1050-00 for 28/28.6mm; standard 130g (1978), 120g (1981). Spring push-plate CPSC version 132g.`.
- **2379, p7**: previously `Huret Club II 1000-01 / 1001-01`, 1978–1988, source 314, search text `Huret Club II 1000-01 1001-01`. Old description `Chromed steel front derailleur, double/triple, 16T capacity, 143g. 1000-01: 28/28.6mm clamp; 1001-01: 25.4mm. Spring push-plate version available. Sold as plain Club from 1982, the Eco set front.`. Applied `Huret Club II 1000-01 / 1001-01`, 1978–1988, description `Chromed steel front, double/triple, 16T capacity; 147g (1978), 143g (1981). 1000-01 28/28.6mm clamp, 1001-01 25.4mm. Spring push-plate version available. Sold as plain Club from 1982, the Eco set front.`.
- **8796, p8**: previously `Huret Eco (front)`, 1977–1987, source 188, search text `Huret Eco`. Old description `Huret Eco (front), France. Steel front derailleur, 5.58oz (158g), S.P.P. System (spring steel pushing plate), double or triple; refs 1000-01 CPSC (28mm) / 1001-01 CPSC (25.4mm). Sold as Club 1000-01 CPSC in 1981 (the S.P.P. Club II).`. Applied `Huret Eco (front)`, 1977–1987, description `Steel front derailleur, S.P.P. spring push-plate, double/triple; 158g in earlier source, 159g (1978). 1000-01 CPSC 28mm / 1001-01 CPSC 25.4mm. Sold as Club 1000-01 CPSC in 1981 (the S.P.P. Club II).`.

Duplicate reporting remained at 13 groups / 33 candidate pairs; the catalogue did not resolve the Jubilee variants, so those rows were not merged. The generated/live bike comparison covered 24,829 specs and was unchanged from baseline: 15 pre-existing lost mappings, zero gains and zero changed mappings. No links were changed. An unlinked-spec search found generic Duopar and Duopar Eco strings, none with the specific 2648 identity, so the catalogue alone does not justify linking them. Whole-database quality remained at zero errors and 1,977 review flags.

## Huret catalogue — July 1981 (disraeligears.co.uk, 10 scans), `data_source` 313

- Source: https://www.disraeligears.co.uk/site/huret_-_catalogue_july_1981.html (images
  `huret_-_catalogue_1981_scan_1..10_main_image.jpg`; the page also shows thumbnails of other documents).
  French text; no date on the cover (Huret, 60 avenue Felix Faure, Nanterre, "member of Frexa"), "Juillet 81"
  printed sideways in the p10 margin. Pages: 1 cover, 2-4 derailleurs and levers, 5 accessories, 6
  speedometers, 7 "Serie Course" (brakes, levers, freewheels), 8 chainset / BB / pedals / seatpost / hubs,
  9 Commander preselection, 10 Sachs-Huret Commander. Transcription:
  scratchpad `dg/huret-1981.csv` (Sonnet subagent, 66 rows). Skipped: speedometers, collars, clips.
- Marked new: Super Success 2470 S, Duopar alloy / steel 2690-01, chainset 1010, BB axle, hubs 472 / 473,
  Commander system. Content otherwise close to the c. 1980 English catalogue (`data_source` 188).
- Merged: 8490 "Sachs Huret Club 1000-01" (1984, `data_source` 156, no links / overrides) into 2379, retitled
  "Huret Club II" -> "Huret Club II 1000-01 / 1001-01", 1978-1980 -> 1978-1987 (same refs and 143g in 1981
  and 1984; 1986-87 Peugeot print "Club 2"). The S.P.P. version is "Club 1000-01 CPSC", 158g (see below).
- year_to -> 1981: 4298 Challenger II rear (2440 / 2400), 2380 Challenger II front (1050-00), 6064
  Challenger II levers (548-01 / 546-01), 6066 Ratchet levers (1466 / 1468); all were 1980.
- year_from 1984 -> 1981: 8491 Jubilee / Success / Duopar levers 1164 / 2390 / 2380, 8484 Commander 12900,
  8495 Commander 13031, 8498 Sachs Orbit 12961 2-speed hub.
- Added (1981-1981): 9991 Allvit III 2700 / 2700 H / 2740, 9992 Allvit Safety III 2746 / 2746 H / 2749,
  9993 Super Allvit III 2748 / 2748 H / 2754, 9994 Luxe levers 1136-01 / 1134-01, 9995 stem levers 1158-01,
  9996 freewheel 685 / 686 (steel sprockets), 9997 685 D / 686 D (Dural), 9998 hubs 472 / 473, 9999
  chainset 1010, 10000 pedals 490, 10001 side-pull 342, 10002 centre-pull 343, 10003 brake levers 323
  (category_brand rows added for Huret in Freewheels, Hubs, Pedals, Brake Levers).
- Not added: Commander double stem lever 12970 (8494 is the 1984 double lever 13000; may be a renumber),
  chain 238 (12962), BB axle and seatpost (no ref printed).
- Bike links made with this pass: 1983 / 1986-87 Peugeot "Huret Club" / "Club 2" x7 -> 2379; 1984 Raleigh
  "Club brazed-on" x4 -> 8489 (Club S is its braze-on version); 1987 Raleigh "Huret Rival" front x2 -> 8488.
- Settled 2026-11-01: 2387 "Club CPSC" (1977-78 velobase stub) merged into 8796 "Huret Eco (front)" (the 1981
  "Club 1000-01 CPSC", 158g; title kept, year_from -> 1977). 4298 "Challenger II" is not 4273: same 2400 / 2440 refs
  but the 180g redesign (4273 is 255g, linked 1974-76), so a generation; year_from 1970 -> 1978. No Rival, Eco S front or Luxe front in this catalogue.

## Huret "new 82" leaflet — November 1981 (disraeligears.co.uk, 6 scans), `data_source` 314

- Label "Huret new 82 leaflet (November 1981)". Source:
  https://www.disraeligears.co.uk/site/huret_-_new_82.html (`00_main_images/huret_-_new_82_scan_1..6_main_image.jpg`,
  1560 x 2220). French / English; every sheet badged "new 82", "NOV. 81" in the margin of sheets 2, 5, 6. Sheets: 1-2
  Rival set, 3 Eco S set, 4 Eco Mark II set, 5 Sensosaver 3 and Duopar Eco, 6 Eco set. Weights and capacities, no
  prices. Read directly (6 pages, no subagents). Out of scope: braze-on fittings 3014 (oval) / 3034 (round).
- New for 1982 per the leaflet: Rival group (rear 2850-00, fronts 1086-00 / Rival S 1056-00 / braze-on 3030-01,
  lever), Eco S 2830-00, Club AS 1005-01 / 1009-01 (ASM without casing stop), Club S 3040-01 braze-on, Eco TD
  2820-01, Luxe AS levers (clip, or central boss 3120-00 S / 3130-00 S), Sensosaver 3 (rear 2800-01, lever 1169-00).
  Luxe A replaces the Luxe lever (9994 Luxe 1136-01 / 1134-01 stays 1981). Disraeli's "Rival 2850-00 1st style 1981?"
  is a late-1981 release for 1982. The Eco S set is Eco S rear + Club AS front + Luxe AS levers: there is no Eco S front.
- year_from 1984 -> 1982 (rows first dated by June 1984): 8485 Eco S, 8488 Rival 1086-00, 8489 Club AS, 8493 Rival
  lever 3252-00, 6112 Luxe AS, 8496 Luxe A.
- year_from moved later (velobase buckets; revert values): 4401 Rival 2850-00 1980 -> 1982 ("nouveau", absent from c.
  1980 and July 1981); 4276 Duopar Eco 1970 -> 1980 (absent from the full 1976 catalogue, first in c. 1980; year_to 1980
  -> 1982); 4301 Huret Eco 1960 -> 1980 (absent from 1973 / 1975 / 1976, first in c. 1980).
- Retitled: 8489 "Sachs Huret Club AS 1005-01" -> "Sachs Huret Club AS 1005-01 / 1009-01" (search_text too), year_to
  1984 -> 1987 for the 1986-87 Peugeot Corbier Eco S fronts now linked to it. Descriptions: 8488 (braze-on and Rival S
  now point to their own rows), 6112 (central-boss refs), 2379 ("sold as plain Club from 1982").
- Added (brand Huret 139, group NULL): 10004 Eco TD 2820-01 (1982), 10005 Eco Sensosaver 2800-01 (1982), 10006 Rival S
  1056-00 (1982-84), 10007 Rival braze-on 3030-01 (1982-84), 10008 Club S braze-on 3040-01 (1982-84), 10009 Sensosaver 3
  lever 1169-00 (1982). The 1982-84 ones end 1984 because the June 1984 catalogue names them inside 8488 / 8489.
- Bike links: 1984 Raleigh "Huret Club brazed-on" x4 [6177 6200 6223 6245] 8489 -> 10008; Eco S fronts -> 8489 Club AS:
  1984 Raleigh "Huret ECO-S" Medale / Stratos [6470 6427] (were unlinked), 1986 Peugeot Corbier "Eco S, satin finish"
  [14899 14919] and 1987 "ECO 5" [15855 15873] (were 8796). Front overrides updated: 'huret club brazed on' 10008,
  'huret eco s' / 'huret eco s satin finish' / 'huret eco 5' 8489.
- Left: 12 "Huret Rival" rears (1985-87) on 4279, a bare velobase row with no years duplicating 4401 / 8957 (merge
  later); 4301 / 4399 Eco duplicate pair (the leaflet's 235 g Eco matches both); front capacity "26T max difference"
  here vs 16T in the 1984 rows (different measure, left).

## Huret "Nouveau - New" leaflet — September 1982 (disraeligears.co.uk, 8 scans), read 2026-11-01, nothing loaded

- Source: https://www.disraeligears.co.uk/site/huret_nouveau_-_new_-_september_1982.html
  (`00_main_images/huret_nouveau_-_new_1982_scan_1..8_main_image.jpg`, 1560 x 2251). French / English, "Groupe Sachs",
  "Septembre 1982" printed in the p8 margin. Sheets: 1-2 Rival set, 3 Eco S set, 4 Eco Mark II set (Eco TD, Club S
  braze-on, Luxe AS central boss), 5 Commander-Orbit 12-speed (rear, double pre-selection lever, Orbit hub), 6
  Commander 5/6-speed (rear, single stem lever), 7 Sensosaver 3 and Duopar Eco 2690-01 C, 8 Eco set (Eco rear, Club
  1000-01 / 1001-01, Luxe A).
- A reprint of the November 1981 "new 82" leaflet (314) plus the Commander sheets (as July 1981, 313). Every ref,
  weight and capacity matches rows already loaded from 313 / 314, and every row already reaches 1982, so there were no
  changes and no `data_source` row. The Commander double lever has no ref (12970 vs 8494's 13000 is still open); the
  235 g Eco rear again matches both 4301 and 4399. Do not re-read.

## Huret "Nouveau - New" leaflet — June 1983 (disraeligears.co.uk, 8 scans), `data_source` 326

- Label "Huret Nouveau - New leaflet (June 1983)". Source:
  https://www.disraeligears.co.uk/site/huret_nouveau_-_new_-_june_1983.html
  (`00_main_images/huret_nouveau_-_new_1983_scan_1..8_main_image.jpg`, 1560 x 2251). "Juin 1983" in the p8 margin.
- The September 1982 leaflet word for word (same eight sheets, refs, weights and capacities), with the "Groupe Sachs"
  badge and the Huret logo on the parts replaced by "SACHS HURET". Read directly, no subagents.
- year_to 1982 -> 1983 (still listed, source_ref -> 326): 10004 Eco TD 2820-01, 10005 Eco Sensosaver 2800-01, 10009
  Sensosaver 3 lever 1169-00, 4276 Duopar Eco (2690-01 C). No links or overrides on any of them. Every other row on the
  sheets already reaches 1983 or later. No inserts, no deletes; the Commander double lever still has no ref, and the
  235 g Eco rear again matches both 4301 and 4399.

## Sachs-Huret "Derailleurs - Speedometers" catalogue — September 1983 (disraeligears.co.uk, 16 scans), `data_source` 327

- Label "Sachs-Huret Derailleurs - Speedometers catalogue (September 1983)". Source:
  https://www.disraeligears.co.uk/site/huret_derailleurs_-_speedometers_-_september_1983.html
  (`00_main_images/huret_derailleurs_-_speedometers_1983_scan_1..16_main_image.jpg`, 1560 x 2234). French / English,
  Etablissements Huret et ses Fils, Nanterre, parts badged SACHS HURET; "SEPTEMBRE 1983" in the p16 margin. Transcribed
  by one Sonnet subagent (scratchpad `dg2/huret-sept1983.json`, 31 items); p10 read by hand.
- Pages: 1 cover, 2 Jubilee, 3 Success, 4 Jubilee long cage + 530 SPP, 5 Duopar 2648, 6 Hi-Stepper ATB (Duopar Eco
  2690-00 H / GC, front 3080-00 S, levers 3300 / 3303), 7 Pilot (rear 2900-00 H, fronts 3060-00 / 3080-00, lever 3416 /
  3416 R), 8 Rival, 9 Commander-Orbit (rear, double lever 13000, Orbit 12961), 10 Commander 5/6, 11 Torpedo 2 x 3 (Eco
  2490-01, Torpedo S H 3111, double lever, no ref), 12 Eco S, 13 Eco; out of scope 14-15 speedometers, 16 usage chart.
- The same range as the June 1984 catalogue (156), nine months earlier. Pilot and Hi-Stepper are marked NEW here.
- year_from 1984 -> 1983 (old value 1984, from 156; source_ref -> 327): 4408 Pilot 2900-00 H, 8487 Pilot 3060-00, 2436
  Pilot 3080-00 (triple), 8492 Pilot 3416 / 3416 R, 2443 Hi-Stepper 3080-00 S, 6067 Hi-Stepper 3300 / 3303, 8486
  Jubilee 530 SPP, 8494 Commander 13000, 8499 Torpedo S, 8497 Torpedo 2 x 3 double lever. No links or overrides.
- Commander refs conflict, left: the p10 captions give rear 13031 / 13041 and single lever 12913 / 12900, the reverse of
  8484 (rear 12913 / 12900) / 8495 (lever 13031 / 13041) as set from 156; this catalogue's own p9 captions the rear
  12900, and disraeligears' derailleur pages are "Commander 12913" / "12900", so p10 is taken as swapped captions.
  p10 also names the double indexed lever for 10 / 12 speeds "12970 S or 13062" (already in 8495's description).
- Not added: Pilot lever "3413 S" (caption only, no text), Pilot long cage (no ref), Torpedo 2 x 3 lever ref (none
  printed). No inserts or deletes; 4276 Duopar Eco 2690-01 C is absent (the 2690-00 H / GC ATB version is listed), so
  its 1983 year_to (from 326) stands.

## Sachs-Huret catalogue — June 1984 (labibleduvelocataloguessachshuret.blogspot.com, 16 pages)

- `data_source` 156, label "Sachs-Huret catalogue (June 1984)". Source:
  https://labibleduvelocataloguessachshuret.blogspot.com/p/sachs-huret-1984.html
  (16 blogger images, 760px at /s1600/ — that's the original size, still
  legible). German / English, "JUNE 1984" printed bottom-left of the rear
  cover (usage chart), Huret et ses Fils, Nanterre, with Fichtel & Sachs AG,
  Schweinfurt for DE / AT / NL / Scandinavia. Weights and capacities, no
  prices. Pp. 2-13 derailleur groups, 14-15 speedometers (out of scope).
- Brands: Huret (139) holds the 1970s rows, Sachs Huret (171) the 1980s
  velobase rows, Sachs (98) the hubs. Matched rows kept their brand; new
  1984 rows went to Sachs Huret, Sachs for Orbit / Torpedo.
- Marked NEW in 1984: Pilot rear 2900-00 H, front 3060-00 and levers 3416,
  Hi-Stepper front 3080-00 S and thumb shifters 3300 / 3303, electronic
  computer. Velobase had Pilot rear (4408) and Pilot triple front (2436) at
  1980-1980 — decade placeholders; year_from moved *later* to 1984 on the
  NEW label (user-approved, an exception to "never move year_from").
- Gone vs 1976 (not capped, eight-year gap): Allvit, Super Allvit, Svelto,
  Challenger, Success 2460, Duopar 2600 / 2640, Jubilee 2252 / 2240 / 2254,
  Jubilee front 500, Ratchet / Click-In / 80mm levers.
- Retitled (old titles): 4419 "Sachs Huret Jubilee" -> Jubilee 2200 (taken
  as the 1984 drilled-cage Jubilee; 4303 "first version" keeps 1972-76 and
  its 1973-75 links); 4281 "Huret Super Success" -> + 2470 S; 4400 "Sachs
  Huret DuoPar Eco" -> Duopar Eco 2690-00 H / GC; 4408 "Sachs Huret Pilot"
  -> Pilot 2900-00 H; 4401 "Sachs Huret Rival" -> Rival 2850-00; 4399 "Sachs
  Huret Eco" -> Eco 2490-01 / 2490-01 H; 2395 "Huret Jubilee (4 holes in
  outer cage plate)" -> Jubilee 530 (4 holes ...); 2390 "Huret Success CPSC
  (later version; solid band)" -> Success 975 CPSC (...); 2443 "Sachs Huret
  Hi Stepper" -> Hi-Stepper 3080-00 S; 2436 "Sachs Huret Pilot (triple)" ->
  Pilot 3080-00 (triple); 6112 "Sachs Huret Luxe AS Double Shifters" -> Luxe
  AS 3152-00 S; 6067 "Huret Ratcheting Thumb Shifters" -> Hi-Stepper 3300 /
  3303 thumb shifter (judgment call: bare row taken as the Hi-Stepper).
- year_to -> 1984: 4419, 4307 Jubilee long cage (now 155g / 40T vs 145g in
  1976, both named), 4299 Success, 8173 Duopar 2648 (H 34T / GC 38T,
  titanium or steel bodies; 1976 spec named inline), 4400, 4401, 2395 (agrees
  with the >=1977 Jubilee front override), 2390. 2443, 6067 NULL ->
  1984-1984. Descriptions only: 4281, 4399, 6112.
- New (16 rows, 1984-1984): rear 8484 Commander 12913 / 12900, 8485 Eco S
  2830-00 / H; front 8486 Jubilee 530 SPP, 8487 Pilot 3060-00, 8488 Rival
  1086-00, 8489 Club AS 1005-01, 8490 Club 1000-01; shifters 8491 Jubilee
  1164-00 / 2390-00 / 2380-00, 8492 Pilot 3416 / 3416 R, 8493 Rival 3252-00,
  8494 Commander 13000, 8495 Commander 13031 / 13041, 8496 Luxe A 3152 B,
  8497 Sachs Torpedo 2 x 3 double lever; geared hubs 8498 Sachs Orbit
  12961, 8499 Sachs Torpedo S.
- Bike links (generator): 1984 Raleigh "Huret ECO-S" rears (Pulsar 10, Team
  Cadet 10, Stratos 10, Medale 5 & 10) had matched plain Eco 4301; the new
  8485 made the name ambiguous, so added override 'huret eco s' -> 8485.
  The generator only fills `component_id IS NULL`, so the four existing 4301
  links were repointed with a one-off guarded UPDATE (value_text 'Huret
  ECO-S', Rear Derailleur, component_id 4301). "Huret Club AS" fronts
  (Classic 15, Weekender 15) now name-match 8489 (loaded via bike-update.sql).
  Stratos 10 / Medale 5 & 10 list "Huret ECO-S" as the *front* derailleur
  (a Raleigh catalogue error) — left unlinked.
- Merged 2026-11-02 (VeloBase photos / model fields; a Huret badge alone does not split a row): 4398 -> 8173, 4279 -> 4401 (year_to 1988), 4301 -> 4399, 4289 -> 4300 (4680 / 2481 are date stamps). Previously left as possible duplicates: 4398 Sachs Huret DuoPar
  (titanium) vs 8173 / 4302; 4279 Huret Rival (no years) vs 4401; 4301 Huret
  Eco and 4391 "Sachs (Eco?)" vs 4399; velobase Sachs Huret Rival / Rival
  Sport / AV 62.10D fronts vs 8488. "Huret Club brazed-on" (1984 Raleigh) is
  probably Club S (braze-on Club AS, 8489) — not linked.

## Huret catalogue, English edition (c. 1980, undated) — cyclespeugeot.web.fc2.com "Part 98: Huret in 1980's", data_source id 188

- Source: http://cyclespeugeot.web.fc2.com/reminiscence/huret1980s.html;
  `catalog/huret1980s/huret_198x01.jpg` to `_10.jpg` (cover 360x507, nine
  pages 720x1013). 60 avenue Felix Faure, Nanterre; back cover "member of
  Frexa". No date printed; the page author guesses 1980, so every year bound
  here is 1980 (single-year bound, not a start date). Export edition, ounces
  and grams. Page map: p. 2-3 rear derailleurs, p. 3-4 front derailleurs and
  levers, p. 5 adjustable stop plate and Sensomatic 3, p. 6 speedometers,
  p. 7 accessories (fork ends 240 / 241 / 244 / 245), p. 8 road racing
  components (brakes 342 / 343, lever 323, freewheels 685 / 686, Multito),
  p. 9 chainwheels, BB axle, seat post, road pedal, p. 10 hubs, triple
  chainwheel.
- Range: rear Jubilee 2200 (148g), Success 2470 (175g, titanium), Super
  Success 2470 S, Duopar titanium 2648 / 2654 (254g), Duopar / ECO 2690-01
  (331g), Allvit III 2700 (296g), Allvit Safety III, Super Allvit III 2748
  (312g), Challenger II 2400 / 2440 (180g), Eco 2490-01 (239g); front Jubilee
  530 (80g), Success / Duopar 975 CPSC (132g, S.P.P. System, "NEW"),
  Challenger II 1050-00 (120g) and CPSC version (132g), Eco 1000-01 / 1001-01
  CPSC (158g, S.P.P.), Club II 1000-01 / 1001-01 (143g); levers Jubilee /
  Success / Duopar 1164-00 (80g), Challenger II 548-01 / 546-01 (99g), Ratchet
  1466 / 1468 (148g), Luxe 1136-01 / 1134-01 (128g), stem lever 1158-01,
  Sensomatic 3 (positive selection, with the Eco rear for 24T maximum).
- Diff on 2026-10-17: Huret (brand 139) and Sachs Huret (171) already held
  about 165 rows from 1973 / 1975 / 1976 / June 1984 catalogues. The gap that
  motivated the pass: no plain Eco front derailleur, so the six bike specs
  "Huret Eco" (Front Derailleur) were unlinked.
- Inserted (1980-1980, UUID source_id, group_id NULL): 8796 "Huret Eco
  (front)" (Front Derailleurs; search_text "Huret Eco").
- Updated, source_ref -> 188: 2379 Club II front year_to 1978 -> 1980 and
  description (143g, 1000-01 / 1001-01); 2380 Challenger II front (description,
  ref 1050-00, S.P.P. 132g); 4301 Huret Eco rear (description; measured 242g
  kept); 4298 Challenger II rear (description, 180g, 2400 / 2440); 6064
  Challenger II lever (description: it is a shifter, 99g with clip, 548-01 /
  546-01); 4276 Duopar Eco year_to 1970 -> 1980 and description (331g, 2690-01).
- Not inserted: the Huret chainwheels 1010 / 1006, BB axle 622, hubs 472 / 473 /
  477 / 478, road pedal 490, seat post, brakes 342 / 343 and lever 323 (marked
  "NEW" in this printing), since no bike spec names them; Allvit III / Safety
  III / Super Allvit III rears (covered by 4290 / 4292 / 8172 under other
  names, not checked line by line).
- Does not explain "Huret Club brazed-on" (4 bikes) or "Huret ECO-S" front (2):
  neither is named here (probably Club AS 8489 and a later Eco S).
- Bike links: loading the row does not link existing specs; the six "Huret Eco"
  front derailleur specs pick up 8796 when the bike generator is re-run for those
  catalogues (not done; the removed non-road models must be stripped from the
  CSVs first, see the `ingest-bike-specs` scope check).
- Out of scope: speedometers (Universo, Multito cyclometer), fork ends, cable
  stops and clips, driving gears, wing nuts, spoke protector 996.
- Second copy (checked 2026-11-01): disraeligears.co.uk "Huret - catalogue 1980?"
  (https://www.disraeligears.co.uk/site/huret_-_catalogue_1980.html, `00_main_images/huret_-_catalogue_scan_1..10_main_image.jpg`,
  1560 x 2200) is this same English catalogue at twice the resolution: p2 rears / fronts and the p10 hubs 472 / 473 / 477 /
  478, triple 1006 and "member of Frexa" back cover match. Nothing loaded, no data_source row; use it to re-read any
  small print here. Disraeli also dates it "1980?".

## Sachs Kettenschaltungen für Rennen, Touristik, Off-road — April 1986 (disraeligears.co.uk, 4 scans)

- `data_source` label "Sachs derailleur catalogue (April 1986)". Source:
  https://www.disraeligears.co.uk/site/sachs_kettenschaltung_fur_rennen_touristik_off-road_-_1986.html
  (`00_main_images/..._scan_0N_main_image.jpg`, 1560 x 2215). German,
  Fichtel & Sachs, "183.01 Printed in Germany 0486 200"; cover branded
  Sachs, every derailleur Sachs-Huret. A four-page flyer: cover (New Success
  photo), Jubilee, New Success / Rival / Pilot, Rider / Duopar. Disraeli
  notes the photos lack the spoke protectors most 1986 derailleurs had, so
  the pictured parts may be 1985. New part codes: rears AR n.1 D / T, fronts
  AV, shifters MA (no DB row carried them, so every match is by spec and
  name, not part number).
- Adjusted (source_ref -> the new source): 4419 Jubilee 2200 -> "Sachs Huret
  Jubilee 2200 / AR 44.1 D", 1980-84 -> 1980-86 (old title "Sachs Huret
  Jubilee 2200"; identical 148g / 28T / 31T spec to the 1984 catalogue);
  4402 New Success -> "Sachs Huret AR 47.1 D, New Success", 1985 -> 1985-86,
  description rewritten (old title "Sachs Huret New Success"); 4408 Pilot
  2900-00 H 1984 -> 1984-86; 2395 Huret Jubilee 530 front and 8491 Jubilee
  levers 1984 -> 1986 with the AV 66.1 D / MA 85.1 E codes noted (judgment:
  the 1986 Jubilee front shows the Huret script and a 4-hole cage; not proven
  by number).
- Added (all 1986, brand Sachs Huret 171, group NULL, like the 1984 rows):
  rears 8957 AR 41.1 D Rival (28T capacity, 36T max freewheel, unlike 4401
  Rival 2850-00's 30T), 8958 AR 46.1 T Rider, 8959 AR 40.1 T Duopar; fronts
  8960 AV 66.3 D New Success, 8961 AV 62.1 D Rival, 8962 AV 62.1 T Rider /
  Duopar (triple); shifters 8963 MA 85.2 E New Success, 8964 MA 82.2 C Rival,
  8965 MA 86.1 G Rider, 8966 MA 86.1 E Duopar. No weights in the source.
- Unresolved: the undated velobase "Rider (type 1 / type 2)" rows (4410 /
  4411, front 2437) may be the same part as 8958; the Duopar (8173 / 4400 /
  4398) likewise; 4403 "New Success touring" (1980, velobase) is probably a
  misdated long-cage New Success but this source cannot correct it; the
  Pilot front 8487 / 2436 and levers 8492 were not mentioned and keep 1984.
  Historical duplicate note: 6110 and 6111 ("ARIS New Success (type 1)",
  84 g spec vs 70 g) looked alike then. Superseded by the 2026-11-16 live
  check: 6111 no longer exists; there is no current pair to merge.
- Historical bike-side reasoning, superseded: this printing says plain
  "New Success" (no ARIS). The 1987 Raleigh was originally placed on ARIS
  rows 4412 / 2439 / 6110 because of their dates. The November 15 review
  below invalidated that date-only distinction, and the approved November 16
  [Raleigh detail-photo correction](#raleigh-randonneur-long-cage-identification--2026-11-16)
  replaces its rear with 4403 AR47.1T. Front/shifter exact codes remain open.

## Sachs-Huret 1985 — not retrievable (checked 2026-10-20)

- https://labibleduvelocataloguessachshuret.blogspot.com/p/sachs-huret-1975.html
  is the 1985 catalogue (the page's own note: the tab is labelled 1985, the
  URL says 1975 by mistake). 10 images, but they are Blogger proxy images
  (`blogger_img_proxy`) of scans hosted on bibibike.forumserv.com
  (`/image/110/.../sheet-NN-*.jpg.htm`). Today the proxy URLs return 404, the
  forum is gone (xooit "forum inexistant"), and the Wayback Machine has no
  copy of those image URLs (it rate-limited further probing). Nothing was
  ingested. If a copy turns up elsewhere (retrobike, ebykr, disraeligears),
  it would date the pre-ARIS New Success rows (4402 / 4403) but not the 1987
  ARIS ones.



## Mel Pinto Imports parts catalog, 1970 to 1975 (pp. 19-29), `data_source` 272

See the full entry in [suntour.md](suntour.md). Huret rows unchanged except
the Luxe rear derailleurs 4295 / 4296 / 4297 (descriptions: refs 2100 T /
2100 ST, cages 2101 / 2101-C). Huret 2150 twin levers have no row.

## Rival 2850-00 / AR 41.1 D generation review — 2026-11-08

User approved the reviewed correction plan. **Keep 4401 and 8957 separate**;
added `[4401, 8957]` to `REVIEWED_NOT_DUPLICATES`. This settles the earlier
question of whether the two catalogue codes were merely a renumbering.

Manufacturer sources re-read during the 2026-11-07 investigation:

- Huret new 82, scan 1, printed November 1981 (314): 2850-00 early body,
  limit screws above the outer plate, Huret badge, 250g, 30T max sprocket.
  https://www.disraeligears.co.uk/site/huret_-_new_82_scan_1.html
- Huret Derailleurs - Speedometers, September 1983, p. 8 (327): same
  early 2850-00 body, Sachs-Huret badge, 250g, 30T max sprocket and 28T
  total capacity. Badge alone still does not split the early model.
  https://www.disraeligears.co.uk/site/00_main_images/huret_derailleurs_-_speedometers_1983_scan_8_main_image.jpg
- Sachs April 1986, scan 3 (225): AR 41.1 D revised body with limit screws
  below the outer plate, 36T max sprocket, 28T capacity, steel/light alloy;
  long-cage version offered, MA 82.2 C levers and AV 62.1 D front.
  https://www.disraeligears.co.uk/site/00_main_images/sachs_kettenschaltung_fur_rennen_touristik_off-road_-_1986_scan_03_main_image.jpg

The original VeloBase reference attached to 4401 (`3327013B-0FD9-4754-A0A2-47738DB02F06`)
says model 41/2 and 246g. Its photos show the later lower-screw body, including
a rear view with an integrated spoke protector. This reference was incorrectly
mixed with early-model catalogue specifications during prior enrichment.
Both DB rows have image NULL, so no stored image needed changing. The old
source_id remains a historical crawl/idempotency key; its photographs must
not be treated as evidence for the early catalogue model. Compared original
specimen photographs of 2850-00 and 41.1 D with/without the spoke protector;
no additional row was justified by badge or protector alone.

Applied exactly two guarded updates, with no title/search_text changes:

| Row | Change |
| --- | --- |
| 4401, Sachs Huret Rival 2850-00 | Description now identifies early upper-screw body and the 250g manufacturer specification. Removed the misplaced 246g later-specimen report. Source_ref 314 -> 327, from re-read September 1983 p. 8. Dates remain 1982-1988. |
| 8957, Sachs Huret AR 41.1 D, Rival | Description identifies the later lower-screw body, preserves its capacities, matching lever/front codes and long-cage option, and carries the 246g reported later specimen. Removed restrictive "first style" wording. Year_to 1986 -> 1988, source_ref 225 -> 319; year_from remains 1986. |

The date extension comes from **1988 Peugeot**, not the 1986 Sachs brochure:
PHE 20 Mont-Blanc spec **16715**, value `Huret Rival 41-1-D, white`, explicitly
names the later code (source 319). Four other explicitly coded 1987 Peugeot
specs (source 311) are **15240, 15278, 15297, 15316**. These existing catalogue
transcriptions were checked in the DB; the Peugeot scan pages were not
re-read in this review. The manufacturer remains the authority for the body
and specifications; source_ref 319 records the source extending the date.
No inferred 1985 introduction was adopted from specimen-page commentary.

All **22** bike links remain exactly unchanged: **17** generic/finish-only
Rival links to 4401 and **5** explicitly coded links to 8957. The generic
1985-1988 links are unresolved identifications, not confirmation of early
2850-00 production through 1988. Do not automatically move them to 8957 or
shorten 4401's end year on absence from a partial leaflet; review bike photos
or more specific specifications first. No bike-generator change was needed.

Applied transactional `/tmp/rival-corrections.sql`: two updates; second run
changed **zero rows**. Verified descriptions (190/230 characters), dates,
source references and an exact before/after comparison of all 22 link IDs.
Existing `node --test test/duplicate-classify.test.js` passed. Component count
unchanged at **10070**. No new sources, inserts, deletes or merges.
Scratch evidence/review plan: `/tmp/rival-investigation.txt`,
`/tmp/rival-review-proposal.sql`, `/tmp/rival-1982-cover.jpg`,
`/tmp/rival-1983-spec.jpg`, `/tmp/rival-1986-spec.jpg`,
`/tmp/rival-4401.jpg`, `/tmp/rival-4401-extra-0.jpg` through `-3.jpg`,
and `/tmp/rival-specimen-0.jpg` through `-2.jpg`.

### Generic Rival bike-link review — 2026-11-15, PXR 80 correction applied

The later **1987 US Ventoux detail recovered** section below supersedes the
"no supported replacement" finding for spec 15762 only; its photo-supported
correction is applied and validated, user approved. The other fifteen fits remain unresolved.

Follow-up 2026-11-17: checked stored crank/cluster text for all 16 remaining
generic Rival rears on 4401. Ten provide both tooth ranges; calculated required
capacity is 18-28T (Raleigh Zenith/Granada are exactly 28T). No additional
greater-than-28T conflict was established from these stored specifications.
Six cannot be checked fully: rear specs **14439, 15744, 16412, 16584, 16604,
16624** omit chainring or sprocket ranges. These are not verified compatible.
No source photos were newly recovered; capacity compatibility does not resolve
upper/lower-screw body or cage identity. Preserve these existing links pending
new generation/cage evidence; no DB/matcher changes for Rival in this pass.

Baseline readback found **17** generic/finish-only rear specs on **4401** and
**5** explicitly coded specs on **8957**. After the approved PXR 80 correction
below, **16** remain on 4401 and **5** on 8957. The earlier generation distinction and the decision to
keep the two rows separate remain supported by the original manufacturer
pages, visually re-read in this review: September 1983 p.8 (2850-00, upper
limit screws, 30T maximum sprocket / 28T total capacity) and April 1986 scan 3
(AR 41.1 D, lower screws, 36T maximum sprocket / 28T total capacity, with a
long-cage option separately mentioned). Their URLs are in the prior entry.

Before correction, the generic links were:

| Catalogue | Specs on 4401 |
| --- | --- |
| 1985 Peugeot FR | 13958 |
| 1986 Peugeot FR | 14439 |
| 1986 Peugeot US | 14782, 14801 |
| 1987 Peugeot FR | 15123, 15143, 15182 |
| 1987 Peugeot US | 15744, 15762 |
| 1987 Raleigh UK | 8783, 8806 |
| 1988 Peugeot FR | 16412, 16584, 16604, 16624, 16662, 16963 |

**Capacity evidence: 1988 Peugeot PXR 80, spec 16963, bike 1000, source 319.**
The [original French catalogue](https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1988.html)
printed p.20 confirms Stronglight 100 **30 x 40 x 50T**, Helicomatic **14/28**
and **15-speed Huret-Rival**. Required total capacity is
`(50 - 30) + (28 - 14) = 34T`, exceeding the documented **28T** on its former
2850-00 row. The later short-cage 8957 is also rated 28T, so repointing solely
on year would not resolve the capacity conflict. Printed p.18 includes the
PXR 80 model photo, but at the available 1000px page width the derailleur is
too small to identify the limit-screw arrangement or cage version reliably.

**Correction applied 2026-11-15, user approved:** changed 16963's `component_id`
**4401 -> NULL** using a transactional UPDATE guarded by spec/bike/label IDs,
raw label, exact value, prior component and source. Exactly **one row** changed;
rerun changed **zero**. The spec retains bike **1000**, label **17**, raw label
`Rear Derailleur`, value `Huret Rival` and source **319**. `updated_at` changed
from **2026-11-02 18:59:27 UTC** to **2026-11-15 10:29:19 UTC** through MySQL's
normal link-change timestamp. All other **21** Rival links are unchanged.

Added a Rear Derailleurs NULL override for `Huret Rival`, scoped to **PXR 80 /
1988**. An explicit undefined fallback preserves normal matching for every
other bike/year. Need a sharper original-bike photo or period parts document
establishing generation and cage/capacity before selecting/adding a row.
This replaces the initial unapproved proposal and supersedes treating the
PXR 80 link as merely the generic-generation question retained on November 8.
No component dates/definitions or CSV source text changed. Restoration, only
if deliberately justified later: restore 16963's 4401 link while it is still
NULL and retains the same bike/label/text/source, and remove the scoped override;
keep the normal new `updated_at` timestamp rather than restoring the old one.

**Other 16 links:** remain unresolved, with no new supported replacement.
Compared their live crank/freewheel specifications. Raleigh Zenith / Granada
have 50/36 and 14-28 (28T required), compatible with either documented short
cage. The Peugeot road gearings with stated ranges likewise do not distinguish
the generations; several other entries omit their tooth range. Inspected the
original [1987 Raleigh](https://labibleduvelocataloguesraleigh.blogspot.com/p/raleigh-1987_3.html)
p.11 Zenith/Granada photos and 1988 Peugeot pp.10-11 Aravis, Galibier,
Mont-Faron and Ventoux photos; none resolves the limit screws at the available
scan size. The 1987 Peugeot US model-page proxy attempts (image positions
33-35 on the held index) returned two 404s and a timeout, not usable photos.
Do not infer early production through 1988 from these unresolved links, or
move these links to 8957 on year/white finish alone.

Validation: read back the target and compared all 22 relevant spec/link IDs
against the captured baseline: only 16963 changed. Re-generated **20,600** spec
INSERT mappings from all **93 local catalogue CSVs** in memory using the same
component snapshot before/after: **zero changed mappings**; PXR 80 already
generated NULL from ambiguity, and the new override makes the decision durable
if a candidate becomes unique. The existing `bike-update.sql` was preserved.
Regression tests cover both tempting generations, scope boundaries and the
unaffected front/coded rear decisions; `npm test` passed. Fresh live Rear
Derailleur coverage is **875 / 1,074 (81.5%)**, with **942** category components.
The PXR 80 identification and other 16 generic links remain in TODO. Temporary
SQL, snapshots, comparison scripts and original review downloads/crops were
removed after readback and idempotency validation.

#### 1987 US Ventoux detail recovered — 2026-11-17, correction applied

New usable evidence: fetched the original BikeBoomPeugeot US model pages directly,
avoiding the failed Blogger proxy endpoints recorded above. [1987 US p.11](https://www.bikeboompeugeot.com/Brochures%20USA/Peugeot%201987%20USA%20Brochure/Peugeot%201987%20USA%20Brochure%20Page%2011.jpg)
has a dedicated white Rival derailleur close-up at bottom right, roughly
180 x 175 pixels within the 1000 x 650 scan. Its two limit screws sit **below**
the outer plate; revised body and compact cage match the **AR 41.1 D** illustrated
in [Sachs April 1986 scan 3](https://www.disraeligears.co.uk/site/00_main_images/sachs_kettenschaltung_fur_rennen_touristik_off-road_-_1986_scan_03_main_image.jpg).
The early 2850-00 drawing in [Huret September 1983 p.8](https://www.disraeligears.co.uk/site/00_main_images/huret_derailleurs_-_speedometers_1983_scan_8_main_image.jpg)
puts both screws above the plate. This is a photo-supported identification by
comparison; Peugeot's text prints `Huret rival white`, not the numbered code.
The 52/42 and 13-24 gearing needs 21T capacity, compatible with the 28T row.

**Applied, user approved: spec 15762, bike 938, 1987 PH 501 Ventoux (US),
4401 -> 8957.** Existing label ID 17/raw label `Rear Derailleur`, exact value
`Huret Rival, white`, source 312 and bike source 312 stay unchanged. Original
updated_at was 2026-11-02 18:59:27 UTC. No component dates/definitions change;
8957 already covers 1986-1988. If deliberately restoring later, guard the same
identity/text/source and current 8957, set back to 4401 and revise its override;
retain the normal new updated_at timestamp.

Added a Rear Derailleurs override for that exact value, bike and 1987 only,
with undefined fallback preserving normal matching elsewhere. Do not apply the
identification to French white Rivals or other years by colour/model name alone.

Other evidence checked in this pass:

- [1987 US Comète p.9](https://www.bikeboompeugeot.com/Brochures%20USA/Peugeot%201987%20USA%20Brochure/Peugeot%201987%20USA%20Brochure%20Page%209.jpg):
  whole-bike rear too small to distinguish screws/cage; sidebar still prints
  only six-speed Helicomatic, without tooth range (15744).
- [1986 US pp.6-7](https://www.bikeboompeugeot.com/Brochures%20USA/Peugeot%201986%20USA%20Brochure/Peugeot%201986%20USA%20Brochure%20Page%207.jpg):
  Ventoux has a whole-bike photograph; Tourmalet has a smaller, oblique detail.
  Neither was sufficient in this review to select a body generation. Do not
  extend the 1987 Ventoux finding to 14782 or 14801.
- 1988 French originals on BikeBoomPeugeot: specifications 1 / 2 (printed
  pp.6 / 15), and model pp.10-11. Comète, Aravis, Galibier and Mont-Faron rows
  omit sprocket ranges; complete-bike photos do not resolve the screws. Source
  index: https://www.bikeboompeugeot.com/Brochures%20France/Peugeot%201988%20France%20Adult%20Brochure/Peugeot%201988%20France%20Brochures.htm.
  These French brochure dates are archive estimates, as the index explains;
  no bike/source dates were changed in this pass.
- Original 1986 French table images 6-7, fetched at Blogger `s0` from the
  [existing source index](https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1986.html):
  PH 501 still names Thun Coronado without chainring range. Thus all six
  incomplete-capacity cases remain open for new parts/fitment evidence, not
  another reading of these same tables. Raleigh photos had already been
  checked without distinguishing detail; no new Raleigh identification.

Validation: fixed read-only snapshot over 96 loaded catalogues / 21,176 specs;
only generated spec 15762 changed (NULL -> 8957). All other findings identical;
before the live correction, report showed fifteen losses plus this changed target.
All eleven test files pass, covering the new scope and existing PXR 80 NULL,
front and coded-rear decisions. Read-only preflight matched exactly one row
under all SQL guards. Existing generated SQL file preserved.

Approved transactional SQL changed exactly one row; second run changed zero.
Readback confirmed **15762 -> 8957**, same bike/label/raw label/text/source 312;
PXR 80 spec 16963 remains NULL. Post-application quality report at **08:59 UTC**:
zero structural errors; same 1,948 review findings by check (1,563 incomplete
dates, 326 linked date conflicts, 35 broad Freewheel labels, 24 descriptions at
limit). All 96 loaded catalogues / 21,176 specs compared: 21,161 unchanged,
zero gains or changed targets, fifteen remaining losses, no missing/ambiguous
identities. No component definitions/dates changed. Completed application task
removed from TODO; the remaining identity/evidence actions stay open. SQL,
downloads, crops, indexes and comparison scratch removed after validation.

## Elysee 5/6-speed and Elysee 7 systems — 2026-11-08

User approved keeping **4396 Sachs Huret Elysee** and **4397 Sachs Huret
Elysee 7** distinct and enriching their descriptions from newly found
manufacturer documents. Added `[4396, 4397]` to `REVIEWED_NOT_DUPLICATES`;
this closes the previously unreviewed near-name pair. No merge or deletion.

### Manufacturer references

Two catalogue-type `data_source` records added; dates remain **undated**,
and country is NULL because a specific catalogue market was not established.
These are manufacturer instructions/datasheets, not forum commentary.

- **368 — Sachs-Huret Elysee installation instructions no. 514.8 F (undated)**.
  https://www.velovintageagogo.com/t6468-sachs-huret-elysee-notice-de-montage
  Four French pages, all read: original scans on
  `https://i.servimg.com/u/f37/16/33/76/87/`, files `image13.jpg` (p. 1),
  `image11.jpg` (p. 2), `image12.jpg` (p. 3), `image10.jpg` (p. 4).
  P. 1 explicitly states the same derailleur supports **5 and 6 speeds**.
  P. 2 explains switching the preselection box from its supplied six-speed
  setting to five speeds, and requires the matching RGS-profile freewheel
  and Sedisport GT7 chain. P. 3 shows the rear-mounted indexing/preselection
  box clipped to the derailleur's mounting shafts. These match 4396's photo;
  do not claim that all Elysee indexing is confined to the handlebar lever.
  The p. 4 imprint is `891120`, Printed in France, but no unambiguous
  publication date was established; no date correction was made from it.
- **369 — Sachs-Huret Elysee Sport/Touring datasheet no. 520.1/1 DFE (undated)**.
  https://www.velovintageagogo.com/t6469-sachs-huret-elysee-sport-touring-fiche-technique
  Six pages, German/French/English, all read/skipped through for scope:
  same image directory, `image18.jpg` (p. 1), `image21.jpg` (p. 2),
  `image22.jpg` (p. 3), `image23.jpg` (p. 4), `image24.jpg` (p. 5),
  `image25.jpg` (p. 6). P. 1 explicitly specifies **7 speeds**. P. 2:
  Sport rear **AR 49.11 D**, forged light alloy/steel, metallic grey,
  **275g specified**, **28T capacity**, **30-32T max freewheel**. Direct-fit
  part `49 1185 403 001`, hanger version `49 1185 402 001`. Touring rear
  AR 49.21 T is separately specified at 312g / 40T / 34T; its values were
  not assigned to the short-cage 4397 specimen. No reliable date established
  from the small print, so no catalogue year was invented.

Only the two existing rear derailleur rows were reconciled. Other group
components and the separately numbered Touring rear in the datasheet are
outside this pair review; no complete groupset ingestion is claimed. Pp.
3-6 provide system context: shifters, freewheel, chain, crank, BB, brakes,
hubs and out-of-category fixing clips. No new component rows were added.

### Applied rows and evidence boundaries

- **4396**: old description `Sachs Huret Elysee, France` replaced with a
  197-character description identifying the 5/6-speed system, dedicated
  thumb shifter/transmission, rear-mounted indexing box, RGS freewheel and
  GT7 chain. Source_ref **1 -> 368**. Original VeloBase source_id retained:
  `3A3D22E9-D697-4E73-AB0D-9A8E87417DEB`; photo
  `0D56DB30-4FD3-41F2-B0BC-68C8ADF9A92E` shows the plain Elysee badge,
  black end cover and cylindrical transmission mounting shafts.
- **4397**: old description `Sachs Huret Elysee 7, France, 293 grams (Actual)`
  replaced with a 202-character description identifying short-cage Sport
  AR 49.11 D and the manufacturer material/finish/capacity/weight figures.
  **Preserved 293g measured specimen** alongside **275g specified**; do
  not assume the difference is an error or invent an explanation for it.
  Source_ref **1 -> 369**. Original VeloBase source_id retained:
  `4A16D858-B5FD-44F1-B019-52A441B382CD`; photo
  `4CE67AE8-57ED-4C90-A7B1-03466AA49354` shows red Elysee 7 markings,
  light end cover and forked adapter attachment. VeloBase's date-code
  interpretation `2090` was not needed for any new date change.
- Both rows retain **1990-1990**, their titles/search_text, and **zero
  bike-spec links**. No generator overrides refer to these IDs. No automatic
  link was inferred for any generic Sachs/Huret bike spec.

Applied transactional `/tmp/elysee-corrections.sql`: **2 source inserts,
2 component updates**; second run affected **zero rows**. Verified all
updated fields, source labels, description lengths and unchanged dates,
search_text and link counts. Existing
`node --test test/duplicate-classify.test.js` passed; `git diff --check`
passed. Overall component count unchanged at **10070**.

Scratch evidence: `/tmp/elysee-investigation.txt`,
`/tmp/elysee-review-listing.json`, `/tmp/elysee-review-proposal.sql`,
`/tmp/elysee-4396.html`, `/tmp/elysee-4397.html`,
`/tmp/elysee-4396.jpg`, `/tmp/elysee-4397.jpg`,
`/tmp/elysee-instruction-13.jpg`, `-11.jpg`, `-12.jpg`, `-10.jpg`,
and `/tmp/elysee-sheet-18.jpg`, `-21.jpg`, `-22.jpg`, `-23.jpg`, `-24.jpg`,
`-25.jpg`.

- 2026-11-14 rear derailleur dedupe (user approved): 4302 Duopar 2600 / 2640
  (titanium) and 8173 Duopar 2648 / 2654 (titanium, long cage) are both 1976
  catalogue models and stay separate. 4302's VeloBase GUID
  15AB95B3-AA4E-41C1-968A-31796C9789E3 is a specimen with model field 2648 (255 g
  with bolt), so the GUID and the weight moved to 8173. 4302 now has
  a59372f3-e065-11f1-a2df-02fea3763e8d; 8173's previous synthetic id
  0311fc96-c102-11f1-a2df-02fea3763e8d is retired.

## Rear derailleur audit fixes — 2026-11-15 (user approved; audit items 1, 2, 4; item 3 decided)

- Merged/deleted: 4277 "Huret Duopar Eco (Version 1)" (VeloBase, undated, 280 g,
  `42FE7685-2CF0-4168-9D48-082F8D20D4A0`) -> 4276 Duopar Eco 2690-01. Its VeloBase page (read 2026-11-15) shows a
  Huret-badged long cage with 34T max cog, matching 4276's 12 x 34; the Sachs Huret ATB 4400 (VeloBase model "2690 H /
  2690 GC") takes 36T and has a Sachs Huret plate. Spec 6450 (1984 Raleigh Weekender 15 "Huret ECO Duopar") 4277 ->
  4276; override `'huret eco duopar'` -> 4276; 4276 `year_to` 1983 -> 1984 from that fitment (280 g noted).
- Dates from explicit Peugeot prints (fitment evidence): 4417 ARIS Rival `year_from` 1990 -> 1989 (1989 Mont Blanc
  "Sachs Rival Aris Index", PHE 20 Z "Sachs-Huret Aris Rival"); 8958 AR 46.1 T Rider `year_to` 1988 -> 1989 (1989 Fun
  Star / US Express); 8958's description now leads with its title.
- Retitled: 4415 "Sachs Huret ARIS New Success 3d Gen." -> "... 3rd Gen." (`search_text` too).
- New Success 1987-89 (user decision, 2026-11-15): keep the plain "Huret New Success" / "Sachs-Huret New Success" rears
  on 4412 ARIS New Success 1st Gen. for 1987-89 (1987 Peugeot PS 10B Savoie, 1987 Raleigh Randonneur 18, 1988 PJ 10 B
  Mont Cenis, 1989 Savoie), treating them as ARIS from 1987. This supersedes the April 1986 note's reason ("4402 now
  ends 1986"): the 1988 Brügelmann pass (source 391) extended 4402 AR 47.1 D to 1988, so those specs no longer
  distinguish the two by date. Revisit if a 1987-88 Sachs-Huret catalogue shows which style was fitted. The 1988 and
  1989 links stayed outside 4412's VeloBase 1987 date (review flags at that time).
  **Raleigh exception, user approved 2026-11-16:** the detail-photo review
  above now identifies and links Randonneur rear 8852 to 4403 AR47.1T;
  the Peugeot decisions remain unchanged.
- Validation: 6 rows as planned (1 spec, 4 component updates incl. 4276, 1 delete); rerun 0; no dangling
  references. All 93 CSVs regenerated: only the Weekender mapping changed (4277 -> 4276). `quality-report` has no
  findings on the touched rows; the 4417 x2 and 8958 x2 date flags cleared.
- VeloBase pages also read (no change): 4410 / 4411 Rider type 1 / 2 (no dates or codes; type 1 "Budget Sachs Huret
  set", drop parallelogram, plastic / steel, long cage; type 2 blank), 4409 Rival 7000 (model "RD R7000", ARIS, slant
  parallelogram, short cage, 28T wrap), 4404-4406 Aris Classic 1500 / 2500 / 3000 (ARIS touring, long cage); none gives
  production years.

## Front derailleur audit fixes — 2026-11-15 (user approved; audit items 1-3)

- Wrong links corrected: 8962 "AV 62.1 T, Rider / Duopar (triple)" was linked from four 42x52 doubles; set NULL
  (old value 8962): 15470 1987 Peugeot P 15C W Manosque "Huret Rider" (Solida 52D 42x52, 10-speed), 17763 1989 P 10 S Z
  Avoriaz "Sachs-Huret Rider" (42x52, 12-speed), 17782 P 10 SA Z Lautaret and 17858 P 15 Z Lavandou "Sachs-Huret Rider
  2" (42x52, 10-speed). Scoped null overrides keep them unlinked ('sachs huret rider 2' 1989; bike-scoped Avoriaz and
  Manosque entries on 'sachs huret rider' / 'huret rider'). No double Rider front row exists (front 2437 "Rider" was
  merged into 8962 on 2026-11-02); "Rider 2" probably names the double. Source gap: a 1987-89 Sachs-Huret catalogue
  listing the Rider double front.
- Dates from explicit Peugeot prints (fitment evidence; descriptions unchanged): 8961 AV 62.1 D Rival `year_to` 1986 ->
  1989 (1987-89 Peugeot print "AV: 62-1D" / "62-1-D"); 8962 AV 62.1 T `year_to` 1986 -> 1989 (genuine triples: 1987
  Saint-Bernard "Rider 3 PL" 30x40x50, 1988 VTT Fun, 1989 Fun Star / US Express 28x38x48); 2379 Club II `year_to` 1987
  -> 1988 (1988 P 15, PE 10 LS "Club 2"; description is at 255). 2439 ARIS New Success front NULL -> 1987-89 from
  fitment, matching the rear 4412 decision (ARIS from 1987).
- Retitled: 2394 "Huret Alvit" -> "Huret Allvit" (`search_text` and description too), Huret's spelling as rear 4290.
- Validation: 4 specs + 5 rows; rerun 0. All 93 CSVs regenerated: only the four unlinks changed (7328 -> 7324 linked);
  the retitle changed no mapping. `quality-report` has no findings on the touched rows. Huret / Sachs front specs 88 / 105
  linked (92 before; the 4 removed links were wrong).
## Early Svelto and front 600 — focused review 2026-11-23

Follow-up: visually compared [1967 p.6](https://www.disraeligears.co.uk/site/huret_accessoires_de_haut_qualite_-_1967_page_6.html), [1968 p.6](https://www.disraeligears.co.uk/site/huret_accessoires_de_haut_qualite_-_1968_page_6.html) and [1969 p.7](https://www.disraeligears.co.uk/site/huret_accessoires_de_haut_qualite_-_1969_page_7.html). The 1967 and 1968 Svelto drawings use the same 1965/1966 cage parts crosswalk: outer 2131/1931, inner 2132/1817, bolt 2142/1860, spring 2152/1936 and screw 2156/1934. The 1969 drawing retains that crosswalk and names 2000 and decorated 2000 D, with badge 2025 only on the latter. This establishes the family and parts, but the crosswalk does not prove which cage is fitted to specimen 4294. Its [VeloBase entry](https://www.velobase.com/Pages/ViewComponent.aspx?ID=1FF1B9EB-09A1-4B26-8B6C-156486CC201C) now labels the model 2030; that community attribution alone does not establish its identity against the 1969 small-wheel 2030 or 2000. A decisive specimen view or coded original is still needed before changing 4293/4294.

[1967 p.7](https://www.disraeligears.co.uk/site/huret_accessoires_de_haut_qualite_-_1967_page_7.html) and [1968 p.7](https://www.disraeligears.co.uk/site/huret_accessoires_de_haut_qualite_-_1968_page_7.html) repeat the 600 illustration: slotted cage 654, clamps 605 (28 mm) and 645 (25.4 mm), and adapter 644 for 25.4 mm tube. The drawing does not crosswalk the specimens' earlier/later band shapes to a dated version. Live 2381/2382/2383 and 4294 still cite source 1; 4293 cites 118. No DB changes were made in this follow-up.

[1966 p.3](https://www.disraeligears.co.uk/site/huret_accessoires_de_haut_qualite_-_1966_page_3.html) lists Svelto for 3–6 speeds, 13–24T rear and 36–53T front, with steel ball-bearing pulleys and graphite Rilsan cage. Its 1965/1966 parts table distinguishes cage parts; 4294's photographs need a decisive view of the spring stop before assigning a particular year variant. [1966 p.4](https://www.disraeligears.co.uk/site/huret_accessoires_de_haut_qualite_-_1966_page_4.html) and 1968 p.7 list cable front 600 for double/triple, with clamp pieces 605 (28 mm) and 645 (25.4 mm); the slotted cage looks compatible with 2382/2383, but clamp size and cage slot do not alone establish which specimen's clamp style is illustrated. Hold specimen-specific changes pending a clearer crosswalk.

[1969 p.7](https://www.disraeligears.co.uk/site/huret_accessoires_de_haut_qualite_-_1969_page_7.html) names Svelto 2000 and decorated 2000 D; [p.8](https://www.disraeligears.co.uk/site/huret_accessoires_de_haut_qualite_-_1969_page_8.html) explicitly lists **2030** for small wheels, 3/4 speeds and 13–22T rear. Applied to 7940: year_from 1973 → 1969, source 118 → 528; all other fields retained. Existing 4293 names 2000 / 2000 D but its 1970 start and relationship to early specimen 4294 need a generation comparison. No bike specs link to the five inspected rows or 7940; no corresponding generator overrides were found. Readback verified the update and the SQL rerun affected zero rows. Generator comparison before and after found the same 15 pre-existing Huret discrepancies and no gained or changed mappings across 118 catalogues; the Huret near-duplicate report found no pairs.
