# Solida crank evidence

## 5171 and 5271 reconciliation — 2026-11-21 (applied and validated)

Scope: the existing TODO's named 5171/5271 Peugeot fitments. User approved
the reviewed proposal: components 12207/12208 and eleven NULL-to-model links
are applied, with scoped generator mappings installed. Existing components,
dates, sources and CSV values are unchanged. Other Solida codes and maker-only
descriptions are outside this application.

### Verified primary fitments

| Existing source / original page | Printed identification and gearing | Exact spec targets |
| --- | --- | --- |
| 257, [Peugeot 1984 FR](https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1984.html), image22 / printed p.22, recap table | PH11: **5171**, dural42x52; PH10LS: **5271**, dural40x50 | 12070 /12088 |
| 258, same archive page, image39, UK Detailed Specification | PH11 Avance, PH10LS Competition and PH10L Criterium each name **5271**,40x52 | 12381 /12399 /12417 |
| 310, [Peugeot 1986 US](https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1986.html), posted image `(19)` (overall image31), Iseran column | P6 & P16: **5271**, alloy42x52 | 14858 /14878 |
| 311, [Peugeot attributed1987 FR](https://www.bikeboompeugeot.com/Brochures%20France/Peugeot%201987%20France%20Brochure/Peugeot%201987%20France%20Brochures.htm), Specifications2 | PE10D W and PE10L W Aubisque each name **5271**,42x52 | 15352 /15371 |
| 319, [Peugeot 1988 FR](https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1988.html), image15 / printed p.16 | PE10LS Aubisque: **5271**, dural42x52; nearby Avoriaz is separately52D | 16765 |
| 320, [Peugeot 1989 NL](https://labibleduvelocataloguespeugeot1.blogspot.com/p/peugeot-1989.html), scan labelled `(30)`, first specification half, printed footer29 | Avoriaz: **5271**, alloy cranks42x52; Aubisque only says Solida dural/cotterless | 17250 |

The eleven targets were NULL before this application and now carry the model
links listed below. The original1984 French and British
PH11 offerings really print different model numbers and gearing. Do not
silently change5171 into5271, or apply a model number from one market/year
to another bike's generic description.

**Recovered1987 source:** the old Blogger proxies for the French table return
404; its current24 linked Blogger JPGs are the Dutch edition, not the wanted
French table. Recovered and read the archive's original
[Specifications1](https://www.bikeboompeugeot.com/Brochures%20France/Peugeot%201987%20France%20Brochure/Peugeot_1987_French_Brochure_Specifications1_BikeBoomPeugeot.JPG)
and [Specifications2](https://www.bikeboompeugeot.com/Brochures%20France/Peugeot%201987%20France%20Brochure/Peugeot_1987_French_Brochure_Specifications2_BikeBoomPeugeot.JPG).
The archive describes this French edition as undated and attributed1987.
Retain the existing source311/bike-year attribution; this task does not
resolve or change the catalogue's dating. The1984/1989 endpoints do not rely
on this intermediate attribution.

### Technical key and existing component reconciliation

Existing source **489**, [Sutherland sixth edition1995](https://paulinoposada.github.io/bike/documents/epdf.pub_sutherlands-handbook-for-bicycle-mechanics.pdf#page=47),
PDF p.47, explicitly lists **Solida5171 and5271** under its five-arm
chainring/crank-arm table at **122mm BCD** (71.7mm adjacent hole centres).
The table supplies no Solida-specific bolt type, hole size or minimum tooth
count in those cells; do not inherit Edco/Stronglight's adjacent entries.
It corroborates two named models, not their equivalence, a complete maker
specification or availability in1995. No new source registration is needed;
489's existing citation fragment points at another chapter, so this exact
crank-table page is preserved here without changing other users' provenance.

Before application, Solida brand255 / Cranksets category7 had four unnamed,
undated specimen records, all with no bike links. No coded5171/5271 record
was found under Solida or another crank brand. Inspected all six available original photos:

- **1850 five pin**, [specimen](https://velobase.com/ViewComponent.aspx?ID=36CFFEA4-5373-440A-AEFB-32BC4E381E28&Enum=115):
  front/back views show five-pin double construction and SOLIDA marking;
  neither identifies5171/5271.
- **1851 square taper**, [specimen](https://velobase.com/ViewComponent.aspx?ID=A93313A1-8663-4144-A2DA-7BD8B0D5FB32&Enum=115):
  one photograph shows a five-arm double with SOLIDA-marked arms. The public
  fields say122mm BCD, square taper and alloy arms; no model is supplied.
  It remains a possible unidentified relative of the coded models. Shared BCD
  cannot select between5171 and5271 or justify a retitle/merge.
- **1853 threaded mount chainring**, [specimen](https://velobase.com/ViewComponent.aspx?ID=2A1FF3B5-B038-444F-8842-5F43B4E091C7&Enum=115):
  two views show the single-ring threaded-mount design and SOLIDA stamp,
  without a numbered model crosswalk.
- **1854 three pin**, [specimen](https://velobase.com/ViewComponent.aspx?ID=4683A9C9-4DAC-4E8D-ACE7-062DE16CF6F2&Enum=115):
  the pictured three-pin double supplies no5171/5271 identity.

Leave those records and their NULL dates unchanged. These are unresolved
specimen attributions, not proven non-duplicate pairs. Any later merge needs
a maker code/construction key or labelled specimen; a common122mm dimension
is not a model identifier across Solida, Nervar and other makers.

### Applied records and exact links

| Component / model | Description | Attested bike-catalogue years | Links |
| --- | --- | --- | --- |
| 12207 Solida5171 | Dural double crankset,42x52T;122mm BCD, five-arm chainring pattern. | 1984 | 12070 |
| 12208 Solida5271 | Double crankset with alloy/dural cranks;40x50T,40x52T and42x52T fitments.122mm BCD, five-arm chainring pattern. | 1984–89 | The ten5271 targets above |

Both use brand255/category7, `group_id=NULL`, existing source257 as their
primary named period fitment, and source489 as the secondary technical key
recorded here. No new source, old date change, specimen rename, merge,
crank length, axle/taper standard, pedal thread or weight was added. These
years are observed attestations, not claimed production endpoints. The1995
handbook is not used to extend `year_to`.

### Application and validation

The approved SQL inserted exactly two components and filled exactly eleven
NULL links. Full live-link readback confirmed these were the only link changes.
All target values and bike/source metadata, old Solida records 1850/1851/1853/1854,
all existing source records and bike/spec counts are unchanged. New descriptions,
dates, brand/category/group, `search_text` and source 257 were read back exactly.
Sources 257/489 and the other existing fitment sources were reused unchanged.

Seven exact normalized value keys now have eleven bike/year scopes using the
real component IDs in `COMPONENT_OVERRIDES.Cranksets`. The pre-application
simulation across 117 loaded catalogues /24,479 specs predicted exactly eleven
mapping gains and no other changes; generic Solida,5270A,5371/S371,52D,520 and100
did not acquire either identity. After application, the maintained full
generator/live comparison has identical findings to its baseline: 15 pre-existing
lost mappings, no gained/changed or missing/ambiguous identities. All eleven
new links agree with the installed mappings; no new drift was introduced.

Whole-DB quality findings are identical before/after: 0 errors,2032 reviews,
including 291 existing linked-date reviews. Solida duplicate and near-pair
reports contain no candidate involving 12207/12208; the six existing
configuration comparisons are between the old unnamed specimens. This does
not resolve1851's possible model alias. The comparison and link-decision test
files pass, as does the generator syntax check.

Re-running the complete approved SQL affected zero inserts and zero updates.
Final readback reconfirmed12207/12208, exact target links, unchanged old Solida
records and no other live-link changes.

Restoration: the eleven listed links were NULL; clear only links still
pointing at12207/12208, remove their scoped mappings and delete the new
components only after checking other references. No old component dates or
source values need restoring. Other Solida/Nervar codes still need their own
evidence; the existing spares-list hunt is not fulfilled by this two-model
application. The completed TODO action was removed, and temporary SQL,
proposal, audit outputs and selected table/specimen images were removed after
validation. Source URLs and page references remain above.
