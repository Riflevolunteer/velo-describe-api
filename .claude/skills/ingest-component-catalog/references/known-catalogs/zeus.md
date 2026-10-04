# Zeus catalogs processed so far

## Catálogo Zeus-102 (Abadiano, Enero 1973) — `ZEUS_102.pdf`, 174pp scan, data_source id 105

First formal run of this skill against a Zeus catalogue, though a 1973 Zeus
*bike-spec* CSV (`1973_zeus_spec.csv`, data_source id 33, see the
ingest-bike-specs skill's own `known-catalogs/zeus.md`) was already loaded,
and several `component_detail` rows already carried ad-hoc "Quoted weight
from Zeus catalog" notes (source_ref still generically 1) from someone
reading this or another Zeus catalogue informally before this skill tracked
provenance — those untouched rows still need source_ref migrated to a proper
`data_source` row if their origin is ever pinned down.

Covers: Section 1 bikes (Zeus + budget "Alfa" sub-brand, out of scope itself
but useful for naming), Section 2 "Componentes" (Ref.01–93), Section 5
"Recambios" spares list (R-prefixed, one-line entries), Section 6
clothing/promo (out of scope). Sections 3 (frame/fork sets), 4 (H-prefixed
tools) and the dealer directory are out of scope — no component category.

**Renamed titles** (catalogue's own naming beats velobase; old title kept
here so an older source that used it can still be matched):
- Front Derailleurs 2681 "Zeus Criterium" → "Zeus Criterium 69" (matches the
  rear mech's name; same groupset).
- Front Derailleurs 2682 "Zeus Alfa" → "Zeus Alfa 65" (catalogue's explicit
  model name for this balancín-system front mech, Ref.24).
- Bottom Brackets 187 "Zeus Criterium Track" → "Zeus Pista" (Ref.33.3; also
  moved year_from 1980→1973 since the catalogue proves earlier presence).
- Hubs 3652 "Zeus Gigante Pista" → "Zeus Pista" (catalogue treats Gigante,
  Ref.82, and Pista, Ref.83, as two separate hub tiers, not one compound
  name).
- Pedals 4056 "Zeus Gran Sport  Pista" (double-space velobase garble) →
  "Zeus Pista" (Ref.42 is named plain "ZEUS PISTA" in the catalogue; also
  reassigned group_id 74→250 to the existing Pista tier group).
- Saddles 5708 "Zeus (black suede)" → "Zeus Leather" (catalogue's spares-list
  name, R.510).

**Years extended / first-dated** (component_id: change):
4870 Criterium 69 rear mech year_to 1970→1973; 4863 "Especial Alfa 72" rear
mech year_to 1970→1973; 2682 Alfa 65 front mech year_to 1970→1973; 2028
Criterium crankset year_to 1970→1973; 190 Gran Sport cottered BB year_to
1960→1973; 188 Ref.33 Criterium BB year_to confirmed 1973; 2026 Criterium
triple crankset, 3171 Gran Sport headset, 3651 Gigante road hub, 6392 Alloy
Track Cog, 4864 Alfa Junior rear mech: all NULL→1973 first-dated evidence.

**Description enrichment with despiece/spec detail** (weights, materials,
threading, tooth ranges) added to all of the above plus: 3654 Gran Sport hub,
2265/2266 Zeus-2000 6V/5V freewheels (added comparative marketing data vs
Regina/Shimano), 4057 Gran Sport pedal (consolidated with an existing note
tagged "catalog 101 (1970)" — two different printings, two different
weights, both kept), 5946 Criterium seatpost.

**New rows inserted** (source_ref 105): Cranksets "Zeus Pista" (Ref.31.3,
670g); Chainrings "Zeus Alfa" (Ref.36, Doble Plato Alfa Acero, steel,
46–52T, 410–440g); Hubs "Zeus Standard" (Ref.80, nutted/non-QR, 480g); Brake
Levers "Zeus Super Alfa" (Ref.73, 110g — Brake Levers had no Alfa-branded
lever at all before this); Tyres "Zeus 2000 Imperforable" (R.850, spares
list, 190g — first Zeus row in Tyres).

**Dedupe (2026-10-04, user confirmed, after checking `bike_spec` and
`COMPONENT_OVERRIDES` for links first):**
- Brake Levers: deleted bare duplicate "Zeus 2000" id 503 (no links anywhere),
  kept id 502 (had a year data point, 1970–1970).
- Bottom Brackets: id 186 "Zeus Criterium" (bare, 1970–1980) and id 188 "Zeus
  Ref.33, Criterium" (270g, catalogue-dated 1973) were the same physical BB.
  186 had 2 `bike_spec` links (bike_spec_id 3, 48; value "Zeus Criterium
  (E)") and no `COMPONENT_OVERRIDES` reference; 188 had neither but carried
  the richer catalogue data. Moved both bike_spec rows to 188, merged the
  broader year range in (188 is now 1970–1980), then deleted 186.

**Left unresolved / not acted on:**
- Cranksets: this catalogue's Ref.31.2 "ZEUS CICLO-CROSS" (single ring +
  integral guard, 970g) does **not** match the existing "Zeus Criterium w/
  'Ciclo-Cross' Chaingaurd" row (id 2027, double ring + add-on guard, 848g)
  or the Gran Sport equivalent (id 2030, 856g) — left all three alone as
  likely-different SKUs rather than guessing a merge.
- Recambios R-prefixed spares referencing other brands' resold parts (R.320
  Iris chain, R.516 Arius saddle, R.821–826 Akront rims, R.861 Michelin
  tubular) were left out of the Zeus brand entirely — one-line mentions only,
  no despiece, and not Zeus's own product.
