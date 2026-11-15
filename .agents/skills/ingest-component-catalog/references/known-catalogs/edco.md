# EDCO catalogue reconciliation

## Competition Touren-Gruppe, German brochure (c. 1994) — applied 2026-11-15, source 409

- Source: https://bikalog.org/api/view/Edco/1994/edco-1994-de.pdf,
  four pages. Bikalog attributes 1994; no printed date verified. Treat this as
  approximate availability evidence, not introduction/discontinuation evidence.
  Market unknown (`country` NULL); Couvet is the manufacturer's address.
- Pages 1/4 are covers; p.2 introduces IGP (Integrated Gearshift Powerbrake) for
  triple chainrings and photographs the group; p.3 lists ten specifications:
  headset, crank, BB, integrated lever, Magura brake, front/rear derailleurs,
  front/rear hubs and an unnamed Sedis chain. Nine identifiable offerings; no
  manufacturer part numbers. All identifiable offerings reconciled below.
- Applied on user approval: one source (409), one Edco / Shifting Brake Levers
  association (brand 15, category 20), one IGP component (11175), five component
  updates. No deletes, merges, bike writes or generator changes. Actual affected
  counts matched this plan; rerun affected zero rows in every mutation category.

| Existing row | Applied change | Prior dates -> resulting dates |
|---|---|---|
| 1553 Competition (type 1, triple) | Photo matches p.2 arm/spider; add 170/172.5/175 mm, 45.5 mm chainline, 4.3 mm offset, 76/50.5 mm bolt spacing, reversible inner ring, 779 g | NULL/NULL -> 1994/1994 |
| 2340 Competition (version 2) | Photo matches p.2 body/cage; triple, braze-on or 28.6/30.5/32 mm, 26T capacity, 52T maximum, 140 g | NULL/NULL -> 1994/1994 |
| 3303 Competition, Competition | Retitle Competition (cassette hubset), regenerate search text; sealed low-flange hubs, 12 mm alloy axles, 28/32/36h, 203/394 g excluding QR, rear 7/8-speed HG | 1980/1980 -> 1980/1994 |
| 4224 Competition | Photo matches Sachs-Huret New Success body; touring medium cage, 8-speed, 32T maximum, 34T capacity, upper plain/lower ball-bearing pulley, 266 g | 1990/1990 -> 1990/1994 |
| 848 Magura HS 77 | Add caliper-only pair weight 370 g and dimensions; retain 1996 complete-kit 554 g including levers/hoses and 7000-series alloy evidence from source 357 | 1996/1996 -> 1994/1996 |

- Added **11175 `Edco IGP, Competition`**: category 20 Shifting Brake Levers,
  brand 15, group 20; 498 g/pair, hydraulic brake/shift levers for HS77 and
  triples, hardened toothed disc/spring detent, adjustable spring/brake pressure
  point; 1994/1994, approximate catalogue year. UUID
  `ca96ee82-c168-4f6a-b0ea-3150689c2f54`; source 409.
- All five existing rows moved to source 409, previously source 1 except 848
  (357). No start dates moved later; legacy 1980/1990 starts are retained
  without claiming new support. IDs and VeloBase UUIDs of existing rows retained.
- Restoration values: 1553's old description was
  `Edco Competition (type 1, triple), Switzerland`; 2340's was
  `Edco Competition (version 2), Switzerland`; 4224's was
  `Edco Competition, Switzerland`. Their titles/search text were unchanged
  (`Edco Competition` search text). 3303's old title was
  `Edco Competition, Competition`, description
  `Edco Competition, Competition, Switzerland`, search text
  `Edco Competition Competition`; resulting search text `Edco Competition`.
  848's old description was `Hydraulic oil road brakes, 7000-series alloy,
  maintenance-free, narrow side profile; 554 g for front and rear with pads,
  levers and hoses.` Its title/search text remain `Magura HS 77`. Prior dates
  are in the table; prior sources above. No other existing fields changed.
- The crank table prints ring ranges `54–48 / 46–38 / 38–28`; do not turn these
  into a single fitted combination. Its 76/50.5 mm measurements are bolt spacing,
  not BCD. The FD maximum is independently printed as 52T. These are source
  specifications, not a claim that every offered ring fits the listed FD.

### Unresolved identities and duplicate review

- Headset: p.3 specifies 108 g, 37 mm stack, 22 x 3.97 mm balls, 1in x24/M25x1,
  alloy except steel raceways/crown race, seals and oil holes. Photos/attributes
  of 2987/2988/2990 do not establish which row; do not create another Competition
  row or assign the specs by name/weight alone. 2989 has the distinct Allen-bolt
  locking upper cup; 2991 the tall early construction (48.8 mm specimen stack).
  Need an EDCO code chart or measurements for the candidate headset specimens.
- BB: brochure standard axle 119 mm (other lengths offered), 292 g, adjustable
  chainline, two drive-side bearings, IT36x24/BC1.37x24/M35x1 threads. Existing
  53/54 have 291 g and specimen notes mentioning 122 mm; black/silver cartridge
  photographs alone do not establish the variant. Keep both unchanged until
  an axle/variant identification is available; do not insert a speculative twin.
- 1553 and 1555 have different photographed arm/spider constructions; keep
  apart. 2338 and 4222 are earlier Simplex-based Touring parts, not the pictured
  later Competition generation. Hub 3302 is a freewheel set, not 3303's cassette
  set; 3303's front-hub photograph and rear cassette attributes support retaining
  one hubset row with both weights. No split or merge applied.
- Baseline duplicate report: 12 generation pairs, five configuration pairs,
  one review pair (706 Modolo / 708 Weinmann mechanical brakes). This hydraulic
  brochure does not resolve that historical mechanical-brake pair; leave apart.
- Post-load report: 13 generation, five configuration, one review. The retitle
  makes 3302/3303 a new configuration candidate, correctly kept apart as
  freewheel/cassette hubsets. 1552/1553 changes automatic classification from
  configuration to generation because 1553 now has c.1994 evidence and 1552
  ends at 1990; retain the double/triple distinction. This report change does
  not prove a new crank generation or actual production boundaries. No new
  merge/review candidate introduced; all changed candidate pairs assessed.
- Sedis chain is identified only as 116 links, 7.0 mm wide, 318 g. No model
  inference, insert or link.

### Validation

- Live read-only query: zero specs linked to Edco brand 15 or HS77 848, and zero
  values mentioning Edco or HS77 before loading. EDCO category 20 association
  was absent and is now present. Readback after loading: zero links on all six
  affected components; no linking or overrides warranted.
- Simulated the proposed title change and new IGP row through the current
  generator over all 93 CSVs: full generated SQL byte-identical. Generation
  counts: 1,199 bikes, 20,600 specs, 7,313 matched; these are CSV counts, not DB
  totals or a new live coverage snapshot. The matcher reads titles/categories,
  not component dates/descriptions. Actual post-load full generation was also
  byte-identical to the saved pre-load output. Root `bike-update.sql` untouched.
- Readback confirmed all six rows, descriptions, dates and source 409; no missing
  source/category/brand/group/category-brand references in this affected scope.
  Descriptions 112–215 characters, all below 255. No code changed.
- Applied SQL, rendered pages, specimen-photo downloads and comparison artifacts
  removed after successful readback, duplicate/mapping checks and zero-change
  rerun. PDF `/private/tmp/velo-edco-1994.pdf` retained as the download supplied
  to the user; durable source/page evidence and old values are recorded here.
