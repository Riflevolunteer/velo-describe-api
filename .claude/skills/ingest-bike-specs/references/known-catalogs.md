# Catalogs processed so far

One entry per CSV. Records the source-data repairs (which live only in the
gitignored CSV) and the linking decisions, so they don't get re-litigated.
Link counts are as of the last load; regenerate to confirm.

Split by bike brand to keep each run's context small — **read only the
brand file(s) relevant to the catalog you're ingesting**, not all of them.
Cross-cutting fixes (matcher bugs, label normalization, DB-wide cleanups
that touched more than one brand) live separately:

- [known-catalogs/bianchi.md](known-catalogs/bianchi.md) — Bianchi (7 entries)
- [known-catalogs/raleigh.md](known-catalogs/raleigh.md) — Raleigh (4 entries)
- [known-catalogs/motobecane.md](known-catalogs/motobecane.md) — Motobecane (2 entries)
- [known-catalogs/kalkhoff.md](known-catalogs/kalkhoff.md) — Kalkhoff (1 entry)
- [known-catalogs/cinelli.md](known-catalogs/cinelli.md) — Cinelli (1 entry)
- [known-catalogs/falcon.md](known-catalogs/falcon.md) — Falcon (1 entry)
- [known-catalogs/peugeot.md](known-catalogs/peugeot.md) — Peugeot (1 entry)
- [known-catalogs/zeus.md](known-catalogs/zeus.md) — Zeus (1 entry)
- [known-catalogs/cross-catalog-notes.md](known-catalogs/cross-catalog-notes.md) — matcher/override bugs, label normalization, DB-wide dedupe sweeps (6 entries)

When a new bike brand shows up for the first time, create
`known-catalogs/<brand-slug>.md` for it (title `# <Brand> catalogs processed
so far`, same entry format as the others) and add a line to the list above.
When recording a run, append to the one brand file it belongs to; put
anything that affects the matcher/generator globally or touches multiple
brands' existing links in `cross-catalog-notes.md` instead.
