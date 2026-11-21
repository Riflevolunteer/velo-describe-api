# Strong seatpost evidence

## NS-3 reconciliation — 2026-11-21 (applied and validated)

Scope: reconcile the named NS-3 fitments already loaded on Miyata and Bianchi
bikes. User approved the reviewed proposal: source 504, component 12206 and ten
NULL-to-model bike links are applied, with scoped generator mappings installed.
No existing component dates, specimen identities, bike/source attributions or
CSV values changed. This is not a Kuwahara/Specialized bike ingestion or a full
inventory of their catalogues.

### Original fitment evidence

| Source / inspected page | Verified wording and identity | Existing exact targets |
| --- | --- | --- |
| [Miyata 1987](https://www.ragandbone.ca/PDFs/Miyata%20Catalogue%20PDFs/Miyata%20Catalogue%2087.pdf), PDF p.28; source407 | Sky Runner and Terra Runner seat-pillar cells explicitly say STRONG NS-3. Portrait p.11 also inspected, but does not resolve clamp construction or a specimen crosswalk. | 22299 /22321 |
| Bianchi 1990 US, original table [model half](https://cdn.shopify.com/s/files/1/0661/0501/6425/files/img-2506-2.jpg?v=1764982867) and [seatpost half](https://cdn.shopify.com/s/files/1/0661/0501/6425/files/img-2507-2.jpg?v=1764982871), printed pp.21–22; source168 | Peregrine, Sika and Osprey each name Strong NS-3. Both halves checked for model/row alignment. | 6965 /6985 /7005 |
| Bianchi 1991 JP, original [p.8](https://2velo.com/wp-content/uploads/2014/03/1991-catalog-p0811.jpg) /[p.9](https://2velo.com/wp-content/uploads/2014/03/1991-catalog-p0911.jpg); source358 | Virata, Alfana and Peregrine name Strong NS-3 in the post cells. Enlarged the existing400px scans; no new construction details inferred. | 19459 /19477 /19563 |
| Bianchi 1992 JP, original [p.21](https://2velo.com/wp-content/uploads/2014/03/1992-catalog-p2111.jpg); source359 | Alfana and Premio SADDLE-POST lines name Strong NS-3, silver. The [Blogger mirror](https://labibleduvelocataloguesbianchi.blogspot.com/p/bianchi-1992.html) links the same400px image, not a higher-resolution source. | 19686 /19698 |

The ten target links were all NULL at reconciliation. The earliest/latest
directly named fitments establish **1987–92 attestations**, not production
start/withdrawal dates or proof of identical internal construction throughout.

Additional targeted primary evidence:

- [Kuwahara 1990](https://www.mtb-kataloge.de/Bikekataloge/PDF/Kuwahara/Kuwahara90.pdf),
  PDF p.16, explicitly headed Spezifikationen1990: Cougar90 and Lion90 list
  **NS-3, black,27.0x300mm**. Cheetah90 separately lists **NS-3C,
  black,26.8x250mm**. PDF p.17, Pacer90: **NS-3,27.0x250mm**.
  These are selected fitment dimensions, not the complete diameter/length range
  or dimensions to copy onto every Miyata/Bianchi bike. The suffix C is not a
  spelling variant to discard.
- The accessible [Specialized1991 German scan](https://www.mtb-kataloge.de/Bikekataloge/PDF/Specialized/Spec.Bikes91_Mini.pdf),
  PDF p.31, names NS-3 with black-anodized finish across its road-model table.
  This supplies an accessible alternative to the earlier403 Retrobike PDF lead;
  it does not prove the two entire PDFs are identical editions. No Specialized
  bike records or maker-source registration are proposed from this check.

### Reconciliation with existing rows

Before application, brand605 / Seat Posts category18 contained5912–5917, with
no bike links. No explicitly coded NS-3 row was found under Strong or another
seatpost brand. Existing5916 NS-1 Micro is source261 (Ron Kitching1984);
5917 NS-1 Micro Carbon and the other specimens are source1. Strong and
Stronglight are separate makers; Peugeot's Stronglight values are outside scope.

The original [5913 Micro specimen page](https://velobase.com/ViewComponent.aspx?ID=3C7D8957-4CCB-4088-82C8-7888D979A310&Enum=105)
and all three full-size photos were inspected. They show a Strong/Japan-marked
head, a single clamping bolt and three shallow rectangular side recesses;
no NS-3 model marking or labelled packaging is visible. The named
[5916 NS-1 specimen](https://velobase.com/ViewComponent.aspx?ID=F7056D8C-FECE-4A08-AD32-333A31BF7E48&Enum=105)
main photo has a visibly different shaft/head transition and fluted shaft.
Those observations do not identify5913 as NS-3, NS-3C or a particular generation.
The complete-bicycle portraits are too small to settle that comparison.

Do not retitle5913, merge it with5916/5917, or use its stored1980 bucket to
date NS-3. Its possible relationship to the coded model remains unresolved;
this is not a proven non-duplicate pair. A maker-labelled specimen/parts drawing
would be needed for a later merge or specimen attribution. A new model-level
NS-3 record now carries the directly named fitments without inventing that alias.

### Applied component and provenance

Added **12206 Strong NS-3**: brand 605, category 18, no group,
`year_from=1987`, `year_to=1992`. Description:
“Seatpost in black or silver finish. Documented 27.0mm diameter in 250mm and 300mm
lengths.” No unsupported alloy, micro-adjust mechanism, weight or NS-3C identity
was added. Existing component titles/dates/specimen records remain unchanged.

Registered **504 Kuwahara bicycle catalogue (1990)** with
the public PDF URL and pp.16–17, used as this new row's primary detailed
specification provenance. Country stays NULL: language alone is not a verified
market. Existing sources407/168/358/359 remain the early/later fitment evidence
and retain every bike/spec attribution. No new source is needed for the
corroborating Specialized table.

### Application and validation

The approved SQL inserted one source and one component, then filled exactly
the ten listed NULL links. Complete live-link comparison confirmed no other
DB link changes. Readback verified 12206's description, 1987–92 attestation
bounds, brand/category/group, generated `search_text` and source 504. Existing
Strong rows 5912–5917, every existing source record and all target spec values
and bike/source metadata are unchanged; bike/spec counts are unchanged.

Two exact normalized value keys (`strong ns 3` and `strong ns 3 silver`) now
have ten bike/year scopes using 12206 in `COMPONENT_OVERRIDES['Seat Posts']`.
The pre-application simulation across 117 loaded catalogues /24,479 specs
predicted exactly these ten mapping gains and no others; NS-3C, bare Strong,
Strong alloy and the generic26mm adjustable post did not acquire this identity.
After application, the maintained full generator/live comparison has identical
findings to its baseline: 15 pre-existing lost mappings, no gained/changed or
missing/ambiguous identities. The ten new DB links agree with the installed
generator mappings; no new drift was introduced.

Whole-DB quality findings are identical before/after: 0 errors, 2032 reviews,
including 291 existing linked-date reviews. The Strong/Seat Posts duplicate
and near-pair reports contain no candidate involving 12206. The unidentified
5913 relationship remains the explicit evidence limit above, irrespective of
the automatic report. The comparison and link-decision test files pass, as
does the generator syntax check.

Re-running the approved SQL affected zero source/component inserts and zero
link updates. A final readback reconfirmed exact source/component IDs, all ten
links, unchanged old Strong records and no other live-link changes.

Restoration, if needed: these ten links were NULL; clear only links still
pointing to12206, remove its scoped entries, and remove12206/source504 only
after checking other references. No old component dates or source values need
restoring. The completed TODO action was removed. Temporary SQL, proposal,
audit outputs and selected page/specimen images were removed after validation;
the original evidence URLs/pages remain above.
