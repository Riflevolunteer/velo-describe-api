# Component catalogs processed so far

One entry per catalog: source, what it added or dropped versus the previous
printing, and exactly which `component_detail` rows changed. Keep evidence,
old/new values and validation results in these notes, following the
[shared quality process](../../audit-data-quality/SKILL.md). Prepared and applied
SQL stays in the temporary scratchpad and is not retained in the repository.

Split by brand to keep each run's context small — **read only the brand
file(s) relevant to the catalog you're ingesting**, not all of them:

- [known-catalogs/brooks.md](known-catalogs/brooks.md) — Brooks (1 entry)
- [known-catalogs/ideale.md](known-catalogs/ideale.md) — Ideale saddles, brand 580 Tron & Berthet (1 entry)
- [known-catalogs/campagnolo.md](known-catalogs/campagnolo.md) — Campagnolo (38 entries; includes 2000 parts book)
- [known-catalogs/shimano.md](known-catalogs/shimano.md) — Shimano (30 entries)
- [known-catalogs/suntour.md](known-catalogs/suntour.md) — SunTour (34 entries)
- [known-catalogs/simplex.md](known-catalogs/simplex.md) — Simplex (9 entries)
- [known-catalogs/weinmann.md](known-catalogs/weinmann.md) — Weinmann (8 entries)
- [known-catalogs/maillard.md](known-catalogs/maillard.md) — Maillard (4 entries)
- [known-catalogs/huret.md](known-catalogs/huret.md) — Huret / Sachs-Huret (4 entries)
- [known-catalogs/le-cyclo.md](known-catalogs/le-cyclo.md) — Le Cyclo (3 entries)
- [known-catalogs/fiamme.md](known-catalogs/fiamme.md) — Fiamme (1 entry)
- [known-catalogs/galli.md](known-catalogs/galli.md) — Galli (5 entries)
- [known-catalogs/look.md](known-catalogs/look.md) — Look (4 entries)
- [known-catalogs/universal.md](known-catalogs/universal.md) — Universal brakes (1 entry)
- [known-catalogs/clb.md](known-catalogs/clb.md) — CLB (1 entry, 1989 GO! and Top Line brochures)
- [known-catalogs/cinelli.md](known-catalogs/cinelli.md) — Cinelli (4 entries)
- [known-catalogs/sakae-ringyo.md](known-catalogs/sakae-ringyo.md) — Sakae Ringyo / SR (9 processed entries; Fuji 1989 SR models applied, source 412; Panasonic USA 1985-89 CT-P5E and 12 rows, sources 417-421)
- [known-catalogs/peugeot.md](known-catalogs/peugeot.md) — Peugeot (1 entry)
- [known-catalogs/dia-compe.md](known-catalogs/dia-compe.md) — Dia-Compe (6 entries)
- [known-catalogs/nisi.md](known-catalogs/nisi.md) — Nisi rims (2 entries, c. 1977 and c. 1985 catalogues, sources 415 / 416)
- [known-catalogs/zeus.md](known-catalogs/zeus.md) — Zeus (9 entries)
- [known-catalogs/mavic.md](known-catalogs/mavic.md) — Mavic (18 entries, 1974-1997)
- [known-catalogs/regina.md](known-catalogs/regina.md) — Regina (3 entries)
- [known-catalogs/3ttt.md](known-catalogs/3ttt.md) — 3ttt (5 entries)
- [known-catalogs/mafac.md](known-catalogs/mafac.md) — MAFAC (6 catalogues: c. 1976, 1964, 1978, 1979 poster, 1980, c. 1982)
- [known-catalogs/ritchey.md](known-catalogs/ritchey.md) — Ritchey (4 entries; 2000 applied, source 411)
- [known-catalogs/araya.md](known-catalogs/araya.md) — Araya (1 entry)
- [known-catalogs/ta.md](known-catalogs/ta.md) — Spécialités TA (1 entry)
- [known-catalogs/sugino.md](known-catalogs/sugino.md) — Sugino (2 entries)
- [known-catalogs/gb.md](known-catalogs/gb.md) — GB / G.B. Cycle Components (4 entries)
- [known-catalogs/atax.md](known-catalogs/atax.md) — ATAX / Guidons Philippe (1 entry)
- [known-catalogs/nitto.md](known-catalogs/nitto.md) — Nitto (3 entries)
- [known-catalogs/mks.md](known-catalogs/mks.md) — MKS / Mikashima pedals (2 entries: c. 1985 edition, Panasonic 1985-86 PB-20)
- [known-catalogs/kusuki.md](known-catalogs/kusuki.md) — Kusuki bars and stems (1 entry: Panasonic USA 1985-89 fitment, sources 417-421)
- [known-catalogs/lyotard.md](known-catalogs/lyotard.md) — Lyotard pedals (1 entry, c. 1977-81)
- [known-catalogs/motobecane.md](known-catalogs/motobecane.md) — Motobécane dealer spares catalogues (1 entry, May 1985; Nervar, Maillard, Atax and others)
- [known-catalogs/laprade.md](known-catalogs/laprade.md) — Laprade (1 entry)
- [known-catalogs/michelin.md](known-catalogs/michelin.md) — Michelin (1 entry)
- [known-catalogs/ofmega.md](known-catalogs/ofmega.md) — Ofmega (1 entry)
- [known-catalogs/sedis.md](known-catalogs/sedis.md) — Sedis (1 entry)
- [known-catalogs/selle-italia.md](known-catalogs/selle-italia.md) — Selle Italia (1 entry)
- [known-catalogs/clement.md](known-catalogs/clement.md) — Clement (2 entries)
- [known-catalogs/sansin.md](known-catalogs/sansin.md) — Sansin / SunShine hubs (2 entries)
- [known-catalogs/wolber.md](known-catalogs/wolber.md) — Wolber (1 entry)
- [known-catalogs/vredestein.md](known-catalogs/vredestein.md) — Vredestein (1 entry)
- [known-catalogs/hutchinson.md](known-catalogs/hutchinson.md) — Hutchinson HP22 (1982 / 1986 / 1989 bike catalogue evidence)
- [known-catalogs/panaracer.md](known-catalogs/panaracer.md) — Timbuk II fitment evidence; Panaracer USA 1997 tyre/rim brochure (source 433)
- [known-catalogs/stronglight.md](known-catalogs/stronglight.md) — Stronglight (6 entries)
- [known-catalogs/gipiemme.md](known-catalogs/gipiemme.md) — Gipiemme (10 entries)
- [known-catalogs/takagi.md](known-catalogs/takagi.md) — Takagi (1 entry)
- [known-catalogs/tange.md](known-catalogs/tange.md) — Tange (1 entry)
- [known-catalogs/kkt.md](known-catalogs/kkt.md) — KKT / Kyokuto (1 entry)
- [known-catalogs/cross-catalog-notes.md](known-catalogs/cross-catalog-notes.md) — notes spanning multiple brands: multi-brand retailer and importer catalogues (La Bicicletta Guida '96 and '99, Brügelmann 1972-82 / 1985 / 1988, Palo Alto, Bikecology, Holdsworth, Cyclo-Pedia, Ron Kitching, Ten Speed Drive, Bike Warehouse, Bike Nashbar Spring 1988, Falcon 1970 parts), La Bicicletta guides, dedupe passes, velobase title-fixup conventions
- [known-catalogs/roto.md](known-catalogs/roto.md) — Roto (1 entry)
- [known-catalogs/modolo.md](known-catalogs/modolo.md) — Modolo (3 entries, c. 1979, March 1986, 1990)
- [known-catalogs/tioga.md](known-catalogs/tioga.md) — Tioga headsets and pedals (1 entry, 1992)
- [known-catalogs/ukai.md](known-catalogs/ukai.md) — Ukai / Yanagihara Industrial rims (1 entry, 1980)
- [known-catalogs/edco.md](known-catalogs/edco.md) — EDCO touring group (1 entry, c. 1994)

When a new brand shows up for the first time, create
`known-catalogs/<brand-slug>.md` for it (title `# <Brand> catalogs processed
so far`, same entry format as the others) and add a line to the list above.
When recording a run, append to the one brand file it belongs to — don't
touch the others.
