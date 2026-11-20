# Sedis catalogs processed so far

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
chain duplicate report returned no groups. No link or date changes were made;
seek a period coded model/packaging crosswalk and review the values and
generator mappings before preparing any merge, relink or date change.

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
  inserted because 1402 Sedisport Delta exists and this is its plain
  predecessor).
- No existing rows changed, deleted or merged. Not touched: 1402 Sedisport
  Delta (1980, 410g, 5 bike_spec links; "Delta" not in the catalogue, taken
  as a later variant); 1398 Sedis Gold (1980, 311g Actual, 2 bike_spec
  links; may be related to the Sedicolor gold links but nothing says so);
  1400 Modele Course and 1401 Pro (absent, no duplicate signal);
  1397 / 1399 Sachs-Sedis (later Sachs-era names).
- Out of scope: the 1/2" x 3/16" x 120-link moped chain (not a bicycle
  part, 2.36), replacement spring clip and rivet links.
- Unresolved: whether 1398 Sedis Gold is the Sedicolor lineage; whether the
  4D ref also covers 116-link plain chain; Sedisport's ref (none given).
