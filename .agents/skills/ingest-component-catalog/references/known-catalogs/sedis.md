# Sedis catalogs processed so far

## Sedisport duplicate and fitment reconciliation — 2026-11-21 (applied and validated)

User approved the reviewed reconciliation. Applied160 named-fitment relinks,
four treatment-only link clears and the1402→8765 duplicate merge; installed
matching generator rules and the regression test. Existing dates, retained
component metadata, all sources and CSV values are unchanged. The completed
TODO action is removed; no new source hunt or follow-up task was created.

### Reviewed identity and retained record

Re-read the original packaging photographs and Berto's printed pp.165–166
linked below. The packaging names Sedisport and separately labels Delta
treatment. The technical account distinguishes the ordinary finish variants
from Pro, and describes Delta as a shared treatment. Neither record provides
an independent construction/model code that supports keeping a separate
ordinary “Sedisport Delta” identity. This is a duplicate model-family record,
not evidence to merge Pro, Sedicolor or numbered/track/MTB chains.

Retained existing **8765 Sedis Sedisport** unchanged: brand216/category6,
group NULL, **1979–1990**, source471, UUID
`040c920c-ca38-11f1-a2df-02fea3763e8d`. Its existing catalogue-backed description
carries ordinary finishes and the later explicitly described Sport Black
offering; neither the description nor its dates need alteration for this merge.
It had65 links before application. Keeping this established, broadly named record avoids
retitling or widening dates on the narrower VeloBase-derived duplicate.

Retired **1402 Sedis Sedisport Delta**, UUID
`1DB4E7C3-1833-47A4-BB41-6CAD655B70B9`, after the link corrections below.
Its old metadata is brand216/category6/group NULL,1980–1987, source1,
search text `Sedis Sedisport Delta`, image NULL; description:
`France. VeloBase lists 410g but also describes 410g as package weight; chain-only weight unconfirmed.`
The VeloBase specimen/packaging provenance remains at the URLs below. Do not
copy410g into the retained chain's weight. Its old fields above and the exact
old link IDs in the restoration section preserve the merge history.

### Exact fitment correction

Of1402's164 links,160 explicitly name ordinary Sedisport, including finishes,
“Narrow”, fitted lengths and named Delta-treated Sedisport. Moved those to8765:
Bianchi2, Raleigh13, Peugeot135, Falcon10. The existing65 links to8765 stay
unchanged, leaving225 named links on the retained identity.

Four1980 Dutch Peugeot links do not name a chain model and were instead
cleared. Visually inspected the original catalogue pages, not just CSV text:

| Spec / bike | Original page / wording | Applied link |
| --- | --- | --- |
| 13376 PX18MC;13396 PX18M | [p.7](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcYhyphenhyphenjglvpCbhLuYI953AbkMnycv1V8Hdd5U3DI8OgaJUl4XFvPEULHKiNPEEY927PHZE9wUDIwnlQgfGSntkQE6eVh2p_cdoGXzDaBxTBJfoQJ71YDu1DPD-OtH9F7DMNuOXSne07LL6D/s1600/catalogues+cycles+peugeot+1980+labibleduvelo+%25287%2529.jpg): Sedis110 links, Delta treatment; PX18M inherits the listed equipment except its handlebars | 1402 → NULL |
| 13414 PK65 lady | [p.8](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUQ3GVH8xSUB97_VExKCNbRw7DhZcMZdidXXTzsHT4bkrKSFHeK-X2ebwYU8DCMTw7WRrFviPCeOKzcO82oBE4KZDk0nrnM6XgfRJPenOddKrEkTkFa2rCKmvisS2wnVY7P-RE81uSYZk8/s1600/catalogues+cycles+peugeot+1980+labibleduvelo+%25288%2529.jpg): Sedis110 links and Delta treatment, without a model name | 1402 → NULL |
| 10547 PL8M | [p.11](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhA0ooGuIJhSwgRETH6ifov-Z6fY8Bl34EhwT7kDixDthnCp8B5CE4JSp8YQi-YiTZRpMSlR15433Pqba2KluJFnkz0sRkZGrOVEy7TaD2m1TevfanB6QFLWU3aUZQxol3tKPltiv9S0G52/s1600/catalogues+cycles+peugeot+1980+labibleduvelo+%252811%2529.jpg):112 links and Delta treatment, without even an explicit maker in the chain sentence | 1402 → NULL |

Do not infer Sedisport or4D from Delta treatment, installed length or a nearby
bike. These are deliberate model non-identifications, not another source hunt.
Source250 and every stored spec value/bike attribution remain unchanged.

### Applied change set and validation

The approved transaction applied164 exact-spec updates (160 relinks and four
clears), then one guarded component delete. It checked the unchanged survivor's complete
metadata, exact old link/value and bike/year/source, and refuses deletion while
any bike spec still references1402. Database column/reference inspection found
`bike_spec.component_id` is the only other stored component-ID reference.
There are no source inserts/updates, component metadata/date updates or CSV edits.
An identical rerun affected zero updates and zero deletes.

`scripts/generate-bike-update-sql.js` now replaces1402 override targets with8765,
explicitly blocks the two treatment-only
value keys, and consolidates bare Sedisport's duplicate-driven bike exceptions.
The existing catalogue/year scope is retained; no broad matching algorithm
change is needed. `test/quality-link-decisions.test.js` adds a regression
covering model-free treatment values even with a sole candidate, named finishes,
explicit Delta-treated Sedisport, Pro separation and the existing either/or hold.

Full in-memory simulation uses the maintained matcher/comparator across117
loaded catalogues /24,479 specs. Exactly160 expected relinks and four clears
are predicted; no unrelated mapping changes or newly linked NULLs. Against the
simulated post-merge DB, comparison findings exactly match the prior baseline:
15 pre-existing lost proposals, no gains/changes/missing/ambiguous identities.
The actual full generator/live comparison after application and the SQL rerun
has exactly those same baseline findings. Complete readback of all24,479 specs
confirmed that only the approved164 links changed. Every retained Sedis field,
every source record and all other quality-snapshot table values are unchanged;
the component count dropped by exactly one. All three affected comparison/link
decision test files pass using the installed generator, including the new
regression; generator syntax and documentation diff/link checks pass.

Whole-DB quality simulation and live readback agree: zero errors before/after, reviews2032→2003,
linked-date flags291→262. The only removed findings are the29 links formerly
outside1402's1987 bound; their named identity fits8765's already stored range.
No date changes or new findings. Sedis near/parenthetical duplicate reports
return no pairs; their name heuristics do not identify this semantic duplicate.

### Restoration and scratch cleanup

If restoration is needed, review it separately: restore1402 with exactly the old
ID/UUID and fields recorded above only if both are unused. The160 named spec
IDs below originally pointed at1402; repoint only those still on8765. The four
treatment-only IDs in the page table also originally pointed at1402; restore
them only while still NULL and with the same source/value/bike identity.
Restore the generator/test changes from git history as part of that operation;
do not disturb the65 original8765 links or later additions. No old dates,
source records or retained component fields need restoring.

Original1402 named-link IDs:

- Bianchi:1157,1317.
- Raleigh:4612,4822,4907,4969,6061,6157,6361,8649,8740,8763,8808,8831,8854.
- Peugeot:10145,10167,10189,10210,10231,10252,10273,10294,10314,10333,10380,
  10563,10581,10601,10623,10662,10682,10702,10722,10742,10761,10779,10797,10815,
  10833,11022,11043,11063,11084,11105,11126,11147,11168,11189,11210,11231,11289,
  11428,11445,11462,11480,11498,11518,11540,11562,11578,11621,13301,13563,13583,
  13603,13618,14258,14299,14319,14339,14359,14379,14398,14417,14685,14703,14722,
  14741,14760,14779,14798,14817,14837,14857,14877,14897,14917,14996,15017,15079,
  15120,15140,15179,15198,15237,15256,15275,15294,15313,15332,15351,15370,15390,
  15409,15428,15448,15468,15487,15646,15664,15683,15721,15741,15759,15777,15796,
  15815,15834,15853,15871,16409,16430,16470,16507,16542,16562,16581,16601,16621,
  16641,16798,16835,16873,16890,17048,17446,17465,17503,17542,17561,17581,17600,
  17748,17767,17786,17805,17824,17843,17862.
- Falcon:16053,16074,16095,16117,16139,16160,16246,16268,16290,16312.

Task-created SQL, restoration template, candidate files, baselines, audit
outputs, downloads and renders were removed after full readback and
idempotency validation. Original evidence URLs and old row/link identities
remain here; no note depends on a deleted scratch file.

## Sedisport / Delta treatment — period evidence 2026-11-20

The applied reconciliation above supersedes this historical review's pending
merge/link-review status; its source observations remain the evidence basis.

Research-only follow-up to the 1402/8765 identity question below; no database,
CSV or generator changes, and no proposed date moves.

- **Original packaging attached to 1402:** the [front photograph](https://velobase.com/CompImages/Chains/0D807A12-2439-4BFE-A0EC-9DBD3590F1FE.jpeg)
  labels the model `sedisport` and separately says `DELTA TREATED` and
  `MADE IN FRANCE`. The [reverse](https://velobase.com/CompImages/Chains/30D2EA81-F6B1-45B3-938C-20905F92E9D3.jpeg)
  also names Sedisport. These are primary packaging artifacts hosted by
  VeloBase, not an independently dated catalogue or a proven association
  between the loose chain and its wrapper. No distinguishing model code was
  established from these photographs; fine print and fitted length were not
  used to identify a generation.
- **Period technical evidence:** Frank J. Berto, *Bicycling magazine's complete
  guide to upgrading your bike*, copyright 1988, chapter 9, printed pp.165–166
  ([original scan](https://notfine.com/bikes/books/Bicycling%20magazine%27s%20complete%20guide%20to%20upg%20-%20Berto%2C%20Frank%20J.pdf#page=179),
  PDF pp.179–180; copyright/imprint PDF p.6). Berto describes the narrow,
  bushingless Sedisport with flat outer plates and bulged inner plates. He
  treats ordinary gray/silver/gold Sedisports as finish variants, distinguishes
  the Pro by selected links, harder rollers and stronger riveting, and identifies
  Delta as the pin surface-hardening process used across the Sedis range he
  describes. This is a contemporary account including the author's chain
  testing, not a maker code table; its statement does not establish every
  earlier or later Sedis offering's treatment.
- **1979 source checked for scope:** the [Chicken section](https://www.icenicam.org.uk/library/Sedis/Chains_from_R_J_Chicken_catalogue_1979-11-07.pdf)
  printed pp.31–33/PDF pp.3–5 was visually rechecked. The model/size page
  illustrates Sedicolor and the technical page depicts a conventional bushed
  chain. Its chrome-infiltrated-pin discussion is not a Sedisport-specific
  construction description. The separate price-sheet Sedisport listing does
  not establish an untreated predecessor just because it omits Delta.

**Conclusion:** Delta wording does not establish a separate Sedisport model
or a successor to ordinary Sedisport. The earlier ingestion rationale below
(8765 as a plain predecessor and 1402 as a later Delta variant) is superseded.
At this research stage1402/8765 were a supported duplicate candidate; the
approved, applied reconciliation above subsequently checked the complete live
records, provenance and linked variants and retained8765. Preserve genuine
Pro/code/construction distinctions. Nickel plating alone does not prove a chain is Pro.

The link review also needs to separate named Sedisport values from treatment-only
values. The then-current generator keys `sedis 110 links delta treated` (1980 NL Peugeot
PX 18 M, PX 18 MC and PK 65 lady) and `112 links delta treated` (PL 8 M) selected
1402 without a model name in the CSV value; both keys now explicitly block a
model link following the original-page review above. Delta treatment and fitted length
alone do not justify that precise identity. Check the original Peugeot pages
and any independent fitment evidence before proposing to retain, clear or
repoint those links. Conversely, ordinary Sedisport versus Delta wording does
not justify splitting otherwise identical named models between 8765 and 1402.
This supersedes that distinction in earlier Motobecane/Peugeot link rationales;
existing links are historical state, not newly validated by this research.

Sources were checked against the packaging photographs and rendered book/catalogue
pages, not OCR alone. TODO now names the duplicate/link review rather than
requiring a code crosswalk merely to establish what Delta means. No SQL was
prepared. Task downloads and page renders were removed after recording sources.

## Sedisport Delta 1402 — identity and weight review 2026-11-20

Before correction, 1402 `Sedis Sedisport Delta` was dated 1980–87 and described
as 410 g; its only source is [VeloBase](https://velobase.com/Pages/ViewComponent.aspx?ID=1db4e7c3-1833-47a4-bb41-6cad655b70b9).
The source displays 410 g in a weight field but its text also calls 410 g a
package weight. It does not establish a chain-only weight. The user approved a
guarded description-only update from `Sedis Sedisport Delta, France, 410 grams`
to `France. VeloBase lists 410g but also describes 410g as package weight;
chain-only weight unconfirmed.` One row changed; an identical rerun changed
zero. Readback confirmed the description and unchanged title, dates, source,
brand, category, UUID and 164 link count. The full generator/live comparison
still had 15 previously recorded Huret Rival lost proposals and no gains,
changes or missing/ambiguous identities; the quality report had zero errors.
Restore the old description only after checking for later edits. The review SQL
was removed after validation.
The maker's [history](https://sedis.com/en/who-are-we/our-history/) says its
Delta chromizing process originated on small chains in the early 1950s and
was used on bicycle chains. It does not say Delta replaced Sedisport in 1980.
The generator's earlier comment asserting replacement is superseded; its
mapping has not yet been changed.

Read-only live queries found 164 links to 1402: 16 explicitly say Delta
treated; the other 148 name Sedisport or a finish without Delta. All 29
1988–89 linked values are among the latter and lie beyond 1402's current date
range. The separate 8765 Sedisport row spans 1979–90 and includes black,
silver and gold. These overlaps and the process history warrant an identity
review of 1402/8765 and affected links, but do not establish whether the
VeloBase specimen is identical to the general 8765 family or whether a merge
or bulk relink is appropriate. In particular, treatment alone cannot identify
the Sedisport model where the bike catalogue only names Sedis. The normal Sedis
chain duplicate report returned no groups. No link or date changes were made.
The period-evidence follow-up above resolves the treatment-versus-model
terminology; its duplicate/link review supersedes the earlier crosswalk-first
next step.

## Kalkhoff Sedis Gold date conflict — 2026-11-20 read-only

The [Kalkhoff brochure](https://velobase.com/CatalogScans/kalhoff_prospekt_81.pdf)
PDF p. 3 visibly lists `Sedis Gold` for Professional 13 S; live spec 774 is
linked to 1398, `Sedis Gold`, dated 1975–80. The brochure is attributed to
1981 by the VeloBase index and filename, but no printed year was identified
in this review. Its table supplies no code, chain length, construction or
weight to distinguish a gold Sedisport from an earlier Sedis Gold/Sedicolor
offering. Live 8765 Sedisport includes gold as a finish, and 8764 Sedicolor
describes gold/dark-blue links. The named fitment supports a Sedis Gold
offering in the attributed catalogue, but does not by itself prove the exact
311 g/108-link specimen in 1398 continued to 1981 or settle its relationship
to the other rows. No dates, links or descriptions changed; retain the current
link provisionally until a coded original fitment or period crosswalk resolves
the identity. The separate 1975 Motobecane spec 3974 also links to 1398.

### Named Sedis Gold availability — 2026-11-22, applied and validated

Visually re-read [Kalkhoff PDF p. 3](https://velobase.com/CatalogScans/kalhoff_prospekt_81.pdf#page=3).
The P 13 S column explicitly says Sedis Gold. The same table names Shimano
600 AX on the P 10 S, consistent with the archive's 1981 model-year attribution.
[Shimano's history](https://www.shimano.com/en/100th/history/products/17.html)
dates that series' release to 1980. The Kalkhoff scan supplies no printed year.
[Motobécane's 1975 US catalogue](https://velobase.com/CatalogScans/Motobecane/1975_Motobecane_catalog.pdf)
uses the same Sedis Gold name. The [original 1398 specimen gallery](https://velobase.com/Pages/ViewComponent.aspx?ID=FAE9F7F2-A1E4-4AC2-BCCB-9490D27FE0DC)
shows Sedis and France stamps and a 311 g weighing photograph. Its listing
reports 108 links. The photos and buyer specifications supply no chain code
or construction crosswalk to Sedisport or Sedicolor.

The earlier hold on the exact specimen remains. At the named-offering level,
the two catalogue fitments support the existing links and the attributed 1981
availability bound. Component **1398** now spans **1975–1981** in that sense.
Its description reads `French derailleur chain listed as Sedis Gold by Motobecane (1975) and Kalkhoff (attributed 1981). The photographed 108-link specimen weighs 311 g. Exact variant and production dates are unverified.`
Retained title, source **397**, UUID `FAE9F7F2-A1E4-4AC2-BCCB-9490D27FE0DC`
and both live links **774** (source 41) and **3974** (source 39).

The guarded update affected one row, then zero on replay. Exact readback
verified the new year and description, both links and their original sources.
The whole-database audit retained zero errors and cleared the date flag for
774. The full generator comparison across 24,829 specs matched the baseline,
including the same 15 pre-existing lost proposals. To restore, guard the
applied date and description, stable ID, UUID and source before reverting
year_to to 1980 and the description to `Sedis Gold, France, 311 grams (Actual), for 108 links`.

## Peugeot 1977–78 chain evidence review — 2026-11-19 (read-only)

- The remaining **named** gap is 1977 PY10/CP spec **9719**, `Sedis Color
  silver 1/2 x 3/32, 108 links`. Existing **8764 Sedicolor** is already
  **1976–80**, source **456**: the [circa 1976 Motobecane ingestion](../../../ingest-bike-specs/references/known-catalogs/motobecane.md#circa-1976-us-catalogue--loaded-2026-11-17)
  extended its start using source 430 (estimated catalogue year); a later source
  extended its end. The 1979-only insertion below is historical, not its current
  date range. The 1979–88 Sedisport range recorded at that review was later
  extended; live readback 2026-11-20 gives **1398 Gold** 1975–80 and
  **8765 Sedisport** 1979–90.
- Live 1977 Peugeot plain `Sedis 1/2 x 3/32, 108 links` specs (including
  **9738/9909/13266**) lack a model code. The 1978 108-link entries (including
  **9929/10132**) and 110-link **13286** likewise name no model.
  Dimensions and fitted length do not identify
  **8763 4D**; a longer retail chain can be shortened for installation.
- The [7 November 1979 Chicken sheet](https://www.icenicam.org.uk/library/Sedis/Chains_from_R_J_Chicken_catalogue_1979-11-07.pdf),
  printed p.32/PDF p.4, identifies 4D in 112/114 links and the coloured 116-link
  4DS line as **gold and dark blue**. It does not identify the earlier silver
  Sedis Color offering. Do not collapse it into Gold 1398 or infer 4D from the
  absence of gold links. The 1978 Motobecane named gold/black Sedicolor spec
  **23165** is already linked to 8764; this is not another unresolved chain gap.
- Targeted English/French catalogue, Sedicolor/argent/silver and 4D/1977–78
  searches found no new readable period model/finish key. Industrial-chain
  catalogues, the later 1979 sheet and retrospective Sedisport introduction
  stories do not supply the missing Peugeot crosswalk. The separately logged
  May 1971 recovery was not repeated.

No DB/CSV/generator changes. Retain the Peugeot NULLs pending a period
silver-Sedicolor/model key or coded original fitment; plain-brand values are
intentional non-identifications, not an instruction to create a generic row.

## May 1971 recovery search — 2026-11-18 (no new readable copy)

- Scoped to the catalogue indexed *Sedis catalog (05-1971)*, not a general Sedis ingestion. The earlier Velo-Pages album 6165 inventory and 150×150-only capture result are in the [source-hunt log](../source-hunts.md#log). No old thumbnail or CDX recovery queries were repeated.
- Searched exact 1971/05-1971/May 1971/mai 1971 catalogue/brochure wording, French bicycle-chain terminology, alternate catalogue archives and holder/listing leads (including IceniCAM, Ebykr, Flickr, French collector-site searches and AbeBooks publisher results). **No new readable copy or confirmed holder of the May 1971 edition was located.** VeloBase results lead to the same exhausted Velo-Pages album. IceniCAM returns the already-processed 7 November 1979 R.J.Chicken section. Ebykr's located Sedis material consists of 1950s/1960s advertisements rather than this catalogue. Current Sedis/manufacturer-distributor results concern industrial-chain catalogues; a modern ISO 9001/2008 catalogue is not 1971 evidence. A search listing for an undated c. 1970 four-page brochure does not establish possession of the 16-item May 1971 catalogue and was not counted as recovery.
- No document recovered, no outreach or purchases, and no database/CSV/generator changes. Reopen only for a new readable scan or a holder specifically confirming this edition and its product pages. The original archive attribution still does not prove a printed May 1971 date. Search scratch removed after logging; no new Sedis file retained.

The 2026-11-21 source check found the same [VeloBase catalogue index entry](https://www.velobase.com/Pages/Resources/CatalogScans.aspx)
and an industrial-chain brochure. The index points to the same Velo-Pages
copy. The reopening criteria above cover this edition.


## R. J. Chicken & Sons trade catalogue, Sedis section — 7 November 1979 (Chains_from_R_J_Chicken_catalogue_1979-11-07.pdf, 8 pp, scan, no text layer), data_source id 177

- Source: https://www.icenicam.org.uk/library/Sedis/Chains_from_R_J_Chicken_catalogue_1979-11-07.pdf
  (IceniCAM). The Sedis section (cat. pp. 31-33) of the UK distributor R. J.
  Chicken & Sons Ltd's trade catalogue; the same 7 Nov 1979 catalogue as the
  Maillard section (data_source 104, `maillard.md`) and the Selle Italia
  section (176, `selle-italia.md`). PDF pp.: 1 catalogue index, 2 blank, 3 =
  cat. p. 31 advert ("The chain the winners choose": Merckx, Thevenet, Van
  Impe, Maertens), 4 = cat. p. 32 specification list, 5 = cat. p. 33 pin
  heat-treatment technical page, 6 blank, 7 = the pink trade price sheet
  (cat. p. 68, Sedis block top left), 8 IceniCAM cover.
- Dated by filename (7 Nov 1979). Internal evidence is consistent (Thevenet
  1975 / 1977, Van Impe 1976, Maertens 1976 world champion, Merckx 1969-74;
  pro teams TI-Raleigh, Carlton-Weinmann, Peugeot-Esso). A UK distributor
  listing is a first-appearance record, not a start date.
- First Sedis source: all 6 prior rows (brand 216, Chains) were bare
  velobase (1397 Sachs-Sedis ATB, 1398 Sedis Gold, 1399 Sachs-Sedis Grand
  Tourisme, 1400 Modele Course, 1401 Pro, 1402 Sedisport Delta).
- Catalogue ranges (page 32): 1/2" x 1/8" x 112 links ref 4L; 1/2" x 3/32"
  x 112 links ref 4D; 1/2" x 3/32" x 114 links ref 4D; 1/2" x 3/32" x 116
  links ref 4DS with coloured gold and dark-blue links (the Sedicolor, on a
  "grand luxe" box); 1/2" x 3/16" x 120 links light moped chain; replacement
  spring clip links 1/2" x 1/8" and rivet links 1/2" x 3/32". The refs line
  up with the first four size lines, so 4DS = the 116-link coloured chain is
  a reading of the layout, not stated outright. Price sheet (trade, decimal
  pounds): 112-link 1/8" 1.29, 112-link 3/32" 1.64 and 114-link 1.67 (packs
  of 100), Sedicolour 116-link 2.65 each, Sedisport 114-link 1.81 and
  116-link 1.86 (packs of 10), moped 2.36, spring clip / rivet links 10.26
  per 100. Construction (p. 33): chrome-infiltrated pins (not carbon
  cementation) to slow stretch, near-spherical pins, cylindrical bushes,
  factory-applied roller lubricant.
- Inserted (1979-1979, UUID source_id, source_ref 177): 8762 Sedis 4L, 8763
  Sedis 4D (112 or 114 links under one ref), 8764 Sedis Sedicolor (ref 4DS),
  8765 Sedis Sedisport (114 / 116 links; price sheet only, thin description,
  inserted under the then-assumed plain-predecessor distinction from 1402;
  that identity rationale is superseded by the period-evidence review above).
- No existing rows changed, deleted or merged. Not touched: 1402 Sedisport
  Delta (1980, 410g, 5 bike_spec links; "Delta" not in the catalogue, taken
  as a later variant at ingestion, an assumption now superseded above);
  1398 Sedis Gold (1980, 311g Actual, 2 bike_spec
  links; may be related to the Sedicolor gold links but nothing says so);
  1400 Modele Course and 1401 Pro (absent, no duplicate signal);
  1397 / 1399 Sachs-Sedis (later Sachs-era names).
- Out of scope: the 1/2" x 3/16" x 120-link moped chain (not a bicycle
  part, 2.36), replacement spring clip and rivet links.
- Unresolved: whether 1398 Sedis Gold is the Sedicolor lineage; whether the
  4D ref also covers 116-link plain chain; Sedisport's ref (none given).
