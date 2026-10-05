# Cross-catalog notes catalogs processed so far

## Nuovo Record rear-derailleur ranges (corrected 2026-09-27)

While reading this catalog the DB's own dating for the 1020/A rows came up:
v3 1970-1981, v4 1982-1984, v5 1985-1987. The ranges set during the 1983
Bianchi work (v3 to 1973, v4 1974-77, v5 from 1978) contradicted that and
had moved Motobecane 1974/75 to v4 and Bianchi 1983/84 to v5. Ranges now
follow the DB dates; a one-off UPDATE moved 12 rows back (Motobecane → v3,
Bianchi 1983/84 → v4). Lesson: when ranging an override, read the DB rows'
year_from/year_to first rather than reasoning from memory.

## Label normalization (done 2026-09-27)

The ten catalogs had minted 49 labels, ~15 of them wording variants. Merged
to 29 canonical labels with one global display order:

- `LABEL_ALIASES` in the generator maps header variants to canonical labels
  at read time (Frame/Frame Type/Frame Details → Frame Material; Brakeset →
  Brakes; Chains/Chain Type → Chain; Cranksets → Crankset; Freewheels/Gear
  Cluster → Freewheel; Saddles → Saddle; Seat Posts → Seatpost; Stems →
  Stem; Tires/Tire Configuration → Tyres; Wheel Rims & Spokes/Wheels →
  Rims; Shifters/Levers → Shifters; Extras No Charge/Included Accessories/
  Standard Equipment/Miscellaneous → Extras; Haken → Toe Clips). CSVs were
  not edited; `bike_spec.raw_label` keeps the original header.
- `LABEL_ORDER` sets `sort_order` (frame → drivetrain → contact points →
  wheels → extras); the generator now emits an UPDATE so existing labels
  realign on any run.
- One-off SQL repointed 247 bike_spec rows and deleted the 18 emptied label
  rows. Cassette stays distinct from Freewheel; "Other Features" (1940
  Bianchi frame notes) is not Extras; "Groupset / Components" (1984) kept.
- Side effect: two values now sit under mapped categories and link —
  1975 Motobecane "REGINA ORO 13-21" (Gear Cluster → Freewheel, existing
  override) and 1983 Bianchi Professional "Suntour" shifters → the brand-level
  SunTour shifter row.

All ten catalogs in bike_specs/ are loaded. Next catalogs will most likely
need: their own year ranges on the Campagnolo/Shimano group overrides, and
the label normalization above.

## Bare-brand exact-match bug and one wrong override (fixed 2026-09-29)

A user noticed a 1979 Peugeot's rear derailleur spec showed as an "1920
Simplex" — clearly wrong. Root cause: `matchComponent`'s exact-title-match
branch ran *before* the "single-word title is a brand-only catch-all"
substring guard, so a bare CSV value like `"Simplex"` (catalog names only
the brand, no model) would exact-match any `component_detail` row also
titled exactly `"Simplex"` — including bare-brand placeholder rows with a
bogus specific year, with zero year filtering (year ranges are only
honored inside `COMPONENT_OVERRIDES`/`resolveOverride`).

Same audit found one more real instance and one look-alike that turned out
to be a different bug entirely:

- **Simplex, Rear Derailleurs** (component_id 4549, wrongly dated
  1920-1920): 7 rows, all 1979 Peugeot. Added `'simplex': null` to
  `COMPONENT_OVERRIDES.Rear Derailleurs`; one-off `UPDATE` set those 7
  `bike_spec.component_id` back to NULL (run and discarded, not kept in
  the repo — the fix that matters is the override).
- **Shimano, Chains** (component_id 1403, wrongly dated 1980-1980): 2 rows,
  1987 Bianchi. Added `shimano: null` to `COMPONENT_OVERRIDES.Chains`, same
  one-off unlink.
- **Nisi, Rims** (component_id 5123, wrongly dated 1980-1980) — NOT the
  same bug. This was a deliberate `'nisi ava sprint alloy'` override that
  just pointed at the wrong one of two identically-titled bare "Nisi" rows;
  5124 (dated 1970-1980, covers the 1973 Raleighs that use this value) was
  sitting unused. Retargeted the override to 5124; one-off `UPDATE`
  repointed the 2 already-loaded rows.

Broader finding, acted on 2026-09-30: 397 `component_detail` rows across the
whole DB were bare single-word (brand-only, no model) titles; only 7 were
linked to any `bike_spec` row (Maillard/Freewheels, Iris/Chains,
Renold/Chains, AVA/Rims, Simplex/Freewheels, SunTour/Shifters, Nisi/Rims —
checked and fine on years at the time). The other 390 were unused
velobase-crawl artifacts, some carrying the same "bogus specific year"
shape as the bugs above, sitting dormant until some future catalogue's
bare-brand value happened to exact-match one.

Deleted (one-off, run and discarded, not kept in the repo): the 390 unused
rows, plus a knock-on check on the 119 `component_brand` rows that then had
zero `component_detail` rows left (e.g. Acme, Aironi, SelleRoyal — distinct
from brands like Agrati or Astros that also had a bare row but kept other
real components, which were left untouched). Those 119 brands' scaffolding
was cleaned up too: 2 `component_group` rows scoped to them (verified zero
surviving component links first) and 129 `category_brand` rows. Verified
before running: zero `bike_spec` references on the 390, and none of their
ids appeared in `COMPONENT_OVERRIDES` (`scripts/generate-bike-update-sql.js`).

The 7 linked rows turned out, on a second look, to be the same bare-brand
mismatch as the Simplex/Shimano fixes above — the earlier audit only
checked years, not whether the link made sense at all. Each of the 29
`bike_spec` rows pointing at them carries a generic `value_text` (a chain
pitch, a freewheel gear-count range, or just the bare brand name again,
e.g. "Iris 1/2 x 3/32", "Maillard 14-15-17-19-21-24", "Suntour") with no
matching specific model row elsewhere in the DB to relink to instead — so
unlinked (`component_id` -> NULL, `value_text`/`raw_label` untouched) and
deleted the 7 rows themselves (one-off, not kept in the repo). None of
these 7 brands (AVA, Iris, Maillard, Nisi, Renold, Simplex, SunTour) lost
their brand row — each still has other real component_detail rows. No new
`COMPONENT_OVERRIDES` entries were needed: the current substring guard in
`matchComponent` already stops a single-word title from matching inside a
multi-word value, and the one bare-value case (a catalog literally saying
just "Suntour") now correctly resolves to "ambiguous, no match" against
SunTour's ~65 real model rows instead of the wrong bare placeholder.

Related cleanup, same day: 6 more `component_detail` rows were a brand plus
"unknown"/"(unknown)" with no real model attested — Falco Unknown
(Brakes), GIOS Unknown (Pedals), OMAS unknown freewheel hubs with ti axle
(Hubs), Altenburger unknown (Rims), Bianchi (unknown) (Hubs), SunTour
(unknown) (Front Derailleurs). None had `bike_spec` references or appeared
in `COMPONENT_OVERRIDES`, so deleted outright (one-off, not kept in the
repo). Falco, GIOS, and the *component*-brand Bianchi (distinct from the
`bike_brand` Bianchi used for actual bikes — separate table, separate id
space) had zero other `component_detail` rows once these were gone, so
purged those 3 `component_brand` rows and their 7 `category_brand` rows
too; no `component_group` rows were scoped to them. OMAS, Altenburger, and
SunTour kept their brand rows since each has plenty of other real
components.

Full-DB sweep, same day: checked for referential orphans across
component_detail/component_group/category_brand/component_brand/bike/
bike_spec/data_source - none found (every FK-shaped reference resolves).
Two things did turn up:

- **26 exact-duplicate `component_detail` rows** (25 groups - 24 pairs and
  one triple - identical on brand_id/category_id/title/year_from/year_to/
  description, both/all from the velobase crawl crawled twice): deleted
  the redundant copy of each, keeping whichever side already carried any
  `bike_spec` link or `COMPONENT_OVERRIDES` reference (Union 486 id 1427,
  Sturmey Archer id 3593, Shimano CN-7401 Dura-Ace chain id 1414, Mavic
  MA 40 id 5077) or a set `group_id` (Stronglight 107 Pista id 1916) where
  that differed between the two. One-off, not kept in the repo.
- **One junk `component_group` row**, id 248, titled literally "do not
  know", scoped to Campagnolo, zero `component_detail` rows in it -
  deleted.

`data_source` id 50 (Le Cycle magazine no. 58 Maillard ad, see below) had
zero rows pointing at its `source_ref` at the time - not a stray row, just
a citation whose 4 affected rows (2112, 2113, 2114, 2120) still carried the
generic velobase-crawl `source_ref=1` rather than this ad. Backfilled: all
4 repointed to `source_ref=50`, since this ad is what actually set/corrected
their current years, not the crawl.

Separately: the "Other/Unknown" brand (id 561) had one Tyres component,
Cyclepro Discovery (6840) - zero `bike_spec` references, not in
`COMPONENT_OVERRIDES`, deleted along with the `category_brand` row linking
that brand to Tyres. Initially left the brand in place (still had a
Saddles entry, Bualto B17, 5437) - then removed that too on request, same
checks (zero `bike_spec` references, no override), which left the brand
with zero components; purged the brand (561) itself and its remaining
Saddles `category_brand` row. No `component_group` rows were scoped to
it. "Other/Unknown" no longer exists anywhere in the DB.

Found via a user spot-check on Assos/Bottom Brackets: a brand doesn't need
to be fully orphaned (the earlier 119-brand sweep's bar) to leave
scaffolding behind - a brand that *partially* survived (some categories
still have real components) can still have a `category_brand` row for a
category whose only entry was a bare/unknown placeholder deleted earlier.
`index.js`'s `/brandsbycategory` uses `category_brand` to populate the
app's per-category brand picker, so a dangling row shows a brand with
nothing to actually select. Swept the whole table for this: 116
`category_brand` rows across ~90 brands had zero `component_detail` rows
for that brand+category combo (Assos/Bottom Brackets, Assos/Cranksets,
Assos/Pedals among them) - deleted all of them. Ran ad hoc, not kept in
the repo.

## Generic "Shimano 600" / "600 SIS" / "Tourney" links (fixed 2026-10-02)

- Found while ingesting the Shimano 1977/1978 component catalogues: bare
  values had substring-matched 1970s rows. 1981 Kalkhoff Amateur 05 S,
  Touring 05 S, Touring 55 S "Shimano 600" rear derailleur (bike_spec
  833/884/901) and 1987 Bianchi Limited/Squadra "Shimano 600 SIS" rear
  (1250/1270) -> 4461, a velobase "Shimano 600" that is really the
  1975-78 DC-200; 1987 Limited/Squadra "600 SIS" shifters (1251/1271) ->
  6138 bare "Shimano 600" (1970-80); 1987 Strada "Shimano Tourney" rear
  (1390) -> 4539 DB-300 (1975-76).
- Fixed with a one-off UPDATE (the back-fill never overwrites a link) and
  matching overrides: 1981 Kalkhoff rear -> no link (RD-6100 600 vs
  RD-6200 600EX and cage length are undecidable from the catalogue);
  1987 "600 SIS" rear -> 4471 RD-6208 600EX (SIS), front (1249/1269,
  previously unlinked) -> 2481 FD-6207 600EX, shifters -> no link (no
  clear SIS lever row); Strada Tourney rear -> no link (only 1970s Tourney
  rows exist). Overrides: Rear Derailleurs 'shimano 600' [to 1978 ->
  4462 DC-200, from 1979 -> null], 'shimano 600 sis' 4471, 'shimano
  tourney' null; Front Derailleurs 'shimano 600' [to 1978 -> 7435 EC-600,
  from 1979 -> null] (needed because the component pass retitled EC-600
  "Shimano EC-600, Shimano-600", which the matcher would otherwise hit
  for 1981 Kalkhoff), 'shimano 600 sis' 2481; Shifters 'shimano 600 sis'
  null.
- **Matcher fix:** resolveOverride returned undefined for a ranged entry
  with no matching year, so it fell through to the substring matcher,
  contrary to the COMPONENT_OVERRIDES comment ("no matching range means
  no link"). It now returns null. Regenerating all 15 catalogues before
  and after gave identical links, so nothing else changed.
- Regression check also showed about 40 pre-existing generator/DB
  differences (Super Record brakes 582 vs 583, C Record / Veloce /
  Record Pista resolving to nothing, rims/chains/freewheels that would
  gain links on reload), caused by earlier component retitles and
  inserts. These don't affect the DB unless a catalogue is reloaded;
  left for a separate pass.

## Stale bare-brand overrides nulled — 2026-10-02

- Regenerating 1979 Peugeot, 1973 Raleigh / Zeus and 1975 Falcon showed 28
  "new" links. All pointed at bare-brand rows deleted on 2026-09-30
  (f9b86f2): 2110 Maillard, 1369 Iris, 1393 Renold, 2225 Simplex, 4937 AVA,
  5124 Nisi. Their overrides were never removed, so any back-fill would have
  written dangling component_ids. Not loaded; the 11 override entries now
  map to `null` (do not link). Link counts after regeneration match the DB:
  Peugeot 83, Raleigh 43, Zeus 29, Falcon 17. No other override points at
  a missing row.


## Re-link sweep across all loaded catalogues (2026-10-05)

Regenerated all 14 loaded CSVs and diffed each generated link against the
DB's (bike, label, value) -> component_id. Linked specs 878 -> 894 of 2,790;
afterwards generator and DB agree exactly (0 differences). No spec rows
inserted.

- **Regressions from component-side renames/merges** (DB kept the right
  link, but a fresh reload would lose it): the "Campagnolo <part no>,
  <name>" retitles put a part number between brand and model, so bare
  values no longer substring-match. Overrides added: Brakes 'campagnolo
  veloce' -> 587, Headsets 'campagnolo veloce' -> 2970, Rear Derailleurs
  'campagnolo c record' -> 4096 (1987 Bianchi). Headsets 'campagnolo record
  pista' became ambiguous when 7024 A0D0P (1987-91) was added; now ranged
  (to 1985 -> 2966 1040, from 1987 -> 7024). Bottom Brackets 'zeus criterium
  (e)' -> 188 after row 186 was merged into it (component catalogue dedupe,
  2026-10-04).
- **Stale links fixed by one-off UPDATE** (loaded before the year-ranged
  Super Record overrides existed; back-fill never overwrites): 1983/84/87
  Bianchi Brakes "Campagnolo Super Record" 582 (4061 v1) -> 583 (v2), 4 rows;
  1984/87 Bianchi Rear Derailleur "Campagnolo Super Record" 4149 (PAT. 80)
  -> 4152 (2nd gen ver. 2), 2 rows. 1983 RD stays 4149 per the override.
- **New links**: 1973 Zeus BB/Pedals "Zeus Pista" and Tyres "Zeus-2000
  Imperforable Tubulars" matched on their own after the Zeus catalogue 102
  renames/inserts (187, 4056, 8148). Overrides: 1973 Raleigh 'campagnolo
  pista 49t' -> 1505, '13 24t regina oro 6 speed' -> 2194; 1974 Motobecane
  'weinmann 500 side pull' -> 1122 (only pre-1980 Weinmann 500 variant);
  1983 Bianchi Hubs 'campagnolo tipo' -> 3230 (only Nuovo Tipo row in range);
  1985 Raleigh 'shimano deore xt alloy cantilever' -> 980 (BR-MC70,
  1983-86); 1993 Bianchi 'campagnolo veloce 53 39t' -> 7062, the "AT10-X"
  spelling of the existing AT10 crank/FD/RD overrides (7724/7721/7720), and
  Record + Chorus 8-speed Ergopower -> 6345 EC-12RE CG (its description says
  it was fitted to both groups in 1993).
- Removed a dead duplicate Headsets 'campagnolo record' key (the later
  ranged entry already won, same row for 1975 Motobecane).
- **Left unlinked on purpose**: of 662 distinct unlinked component values
  only ~90 had any same-brand candidate. Skipped generic values ("Alloy",
  "Course levers", bare "Sedis"/"Simplex"/"Suntour"), models with no DB row
  (Dia-Compe 161/164, Shimano CN-HG20, L512SGS), and variant choices the
  catalogue text can't settle: 3ttt Competizione (Merckx vs Gimondi), 1981
  Kalkhoff "Shimano 600" FD/RD (600 vs 600 AX), Superbe Pro FD (clamp vs
  band), Weinmann 999 De Luxe "or Universal 61", Simplex Prestige stem
  shifter (only stem-mount row is 1964-65).

## 2026-10-05 re-link pass (no new CSV)

- Swept every unlinked spec under a mapped label for same-category rows
  sharing brand + model words: ~120 specs had any candidate, and only 5
  could be justified (GB Forged stem, Spidel 700 dural pedals, Nervar
  cotterless crank; see raleigh/peugeot/motobecane). The remainder are
  models with no DB row (ITM 200/201/Mondial, Rigida Jade/Saphir, Kusuki
  WP-B/WIN, SR SP-153/CT-P5E, Kalloy SP-248, 600 AX headset/BB/chain,
  Hyperglide 8-speed) or unresolvable variant choices (Normandy alloy
  hubs, Super Champion rims, Mafac course levers, Regina Oro, Mavic
  Monthlery). Coverage now needs component catalogues, not overrides.
- This pass excluded the 1940 Bianchi CSV, which was still in bike_specs/
  after that catalogue was deleted (a bare generator run would have
  reloaded it). Baseline without it reproduced the DB exactly (2790 specs,
  894 linked) before the overrides; 899 after. The CSV has since been
  removed from bike_specs/, so a bare generator run is safe again.
