# Component catalogs processed so far

One entry per catalog: source, what it added or dropped versus the previous
printing, and exactly which `component_detail` rows changed. All changes
were applied live via idempotent SQL kept in the session scratchpad; nothing
in the repo records them except this file and the brand files below.

Split by brand to keep each run's context small — **read only the brand
file(s) relevant to the catalog you're ingesting**, not all of them:

- [known-catalogs/campagnolo.md](known-catalogs/campagnolo.md) — Campagnolo (35 entries)
- [known-catalogs/shimano.md](known-catalogs/shimano.md) — Shimano (29 entries)
- [known-catalogs/suntour.md](known-catalogs/suntour.md) — SunTour (13 entries)
- [known-catalogs/simplex.md](known-catalogs/simplex.md) — Simplex (7 entries)
- [known-catalogs/weinmann.md](known-catalogs/weinmann.md) — Weinmann (3 entries)
- [known-catalogs/maillard.md](known-catalogs/maillard.md) — Maillard (4 entries)
- [known-catalogs/huret.md](known-catalogs/huret.md) — Huret (3 entries)
- [known-catalogs/le-cyclo.md](known-catalogs/le-cyclo.md) — Le Cyclo (2 entries)
- [known-catalogs/cinelli.md](known-catalogs/cinelli.md) — Cinelli (1 entry)
- [known-catalogs/sakae-ringyo.md](known-catalogs/sakae-ringyo.md) — Sakae Ringyo / SR (1 entry)
- [known-catalogs/peugeot.md](known-catalogs/peugeot.md) — Peugeot (1 entry)
- [known-catalogs/dia-compe.md](known-catalogs/dia-compe.md) — Dia-Compe (2 entries)
- [known-catalogs/zeus.md](known-catalogs/zeus.md) — Zeus (2 entries)
- [known-catalogs/mavic.md](known-catalogs/mavic.md) — Mavic (5 entries)
- [known-catalogs/regina.md](known-catalogs/regina.md) — Regina (1 entry)
- [known-catalogs/3ttt.md](known-catalogs/3ttt.md) — 3ttt (5 entries)
- [known-catalogs/cross-catalog-notes.md](known-catalogs/cross-catalog-notes.md) — notes spanning multiple brands (velobase title-fixup conventions, etc.)

When a new brand shows up for the first time, create
`known-catalogs/<brand-slug>.md` for it (title `# <Brand> catalogs processed
so far`, same entry format as the others) and add a line to the list above.
When recording a run, append to the one brand file it belongs to — don't
touch the others.
