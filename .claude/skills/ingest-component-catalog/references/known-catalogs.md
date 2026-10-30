# Component catalogs processed so far

One entry per catalog: source, what it added or dropped versus the previous
printing, and exactly which `component_detail` rows changed. All changes
were applied live via idempotent SQL kept in the session scratchpad; nothing
in the repo records them except this file and the brand files below.

Split by brand to keep each run's context small — **read only the brand
file(s) relevant to the catalog you're ingesting**, not all of them:

- [known-catalogs/brooks.md](known-catalogs/brooks.md) — Brooks (1 entry)
- [known-catalogs/ideale.md](known-catalogs/ideale.md) — Ideale saddles, brand 580 Tron & Berthet (1 entry)
- [known-catalogs/campagnolo.md](known-catalogs/campagnolo.md) — Campagnolo (36 entries)
- [known-catalogs/shimano.md](known-catalogs/shimano.md) — Shimano (30 entries)
- [known-catalogs/suntour.md](known-catalogs/suntour.md) — SunTour (17 entries)
- [known-catalogs/simplex.md](known-catalogs/simplex.md) — Simplex (9 entries)
- [known-catalogs/weinmann.md](known-catalogs/weinmann.md) — Weinmann (8 entries)
- [known-catalogs/maillard.md](known-catalogs/maillard.md) — Maillard (4 entries)
- [known-catalogs/huret.md](known-catalogs/huret.md) — Huret / Sachs-Huret (4 entries)
- [known-catalogs/le-cyclo.md](known-catalogs/le-cyclo.md) — Le Cyclo (3 entries)
- [known-catalogs/cinelli.md](known-catalogs/cinelli.md) — Cinelli (2 entries)
- [known-catalogs/sakae-ringyo.md](known-catalogs/sakae-ringyo.md) — Sakae Ringyo / SR (6 entries)
- [known-catalogs/peugeot.md](known-catalogs/peugeot.md) — Peugeot (1 entry)
- [known-catalogs/dia-compe.md](known-catalogs/dia-compe.md) — Dia-Compe (4 entries)
- [known-catalogs/zeus.md](known-catalogs/zeus.md) — Zeus (5 entries)
- [known-catalogs/mavic.md](known-catalogs/mavic.md) — Mavic (16 entries, 1974-1994)
- [known-catalogs/regina.md](known-catalogs/regina.md) — Regina (3 entries)
- [known-catalogs/3ttt.md](known-catalogs/3ttt.md) — 3ttt (5 entries)
- [known-catalogs/mafac.md](known-catalogs/mafac.md) — MAFAC (6 catalogues: c. 1976, 1964, 1978, 1979 poster, 1980, c. 1982)
- [known-catalogs/ritchey.md](known-catalogs/ritchey.md) — Ritchey (3 entries)
- [known-catalogs/araya.md](known-catalogs/araya.md) — Araya (1 entry)
- [known-catalogs/ta.md](known-catalogs/ta.md) — Spécialités TA (1 entry)
- [known-catalogs/sugino.md](known-catalogs/sugino.md) — Sugino (1 entry)
- [known-catalogs/gb.md](known-catalogs/gb.md) — GB / G.B. Cycle Components (3 entries)
- [known-catalogs/atax.md](known-catalogs/atax.md) — ATAX / Guidons Philippe (1 entry)
- [known-catalogs/nitto.md](known-catalogs/nitto.md) — Nitto (3 entries)
- [known-catalogs/laprade.md](known-catalogs/laprade.md) — Laprade (1 entry)
- [known-catalogs/michelin.md](known-catalogs/michelin.md) — Michelin (1 entry)
- [known-catalogs/ofmega.md](known-catalogs/ofmega.md) — Ofmega (1 entry)
- [known-catalogs/sedis.md](known-catalogs/sedis.md) — Sedis (1 entry)
- [known-catalogs/selle-italia.md](known-catalogs/selle-italia.md) — Selle Italia (1 entry)
- [known-catalogs/clement.md](known-catalogs/clement.md) — Clement (1 entry)
- [known-catalogs/sansin.md](known-catalogs/sansin.md) — Sansin / SunShine hubs (2 entries)
- [known-catalogs/wolber.md](known-catalogs/wolber.md) — Wolber (1 entry)
- [known-catalogs/vredestein.md](known-catalogs/vredestein.md) — Vredestein (1 entry)
- [known-catalogs/stronglight.md](known-catalogs/stronglight.md) — Stronglight (5 entries)
- [known-catalogs/gipiemme.md](known-catalogs/gipiemme.md) — Gipiemme (3 entries)
- [known-catalogs/takagi.md](known-catalogs/takagi.md) — Takagi (1 entry)
- [known-catalogs/tange.md](known-catalogs/tange.md) — Tange (1 entry)
- [known-catalogs/kkt.md](known-catalogs/kkt.md) — KKT / Kyokuto (1 entry)
- [known-catalogs/cross-catalog-notes.md](known-catalogs/cross-catalog-notes.md) — notes spanning multiple brands: multi-brand retailer and importer catalogues (Palo Alto, Bikecology, Holdsworth, Cyclo-Pedia, Ron Kitching, Ten Speed Drive, Bike Warehouse), La Bicicletta guides, dedupe passes, velobase title-fixup conventions
- [known-catalogs/roto.md](known-catalogs/roto.md) — Roto (1 entry)

When a new brand shows up for the first time, create
`known-catalogs/<brand-slug>.md` for it (title `# <Brand> catalogs processed
so far`, same entry format as the others) and add a line to the list above.
When recording a run, append to the one brand file it belongs to — don't
touch the others.
