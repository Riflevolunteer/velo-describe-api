---
name: audit-data-quality
description: Audit vintage bike and component data quality for a catalogue, brand, category or the whole database, and validate catalogue ingestion or linking changes. Use for evidence, duplicate, identity, date, provenance and bike-link reviews, or as the shared quality process alongside the ingest skills. Not for general code review or API-only changes.
---

# Audit database quality

Use this shared process for catalogue ingestion and focused data-quality reviews.
All command and data paths below are relative to the repository root.

## Scope and related skills

Follow the requested scope: a read-only audit ends with findings and proposed next
steps. A listing-only or evidence-only request does not authorize database changes
or a full ingestion. Apply the sourcing, extraction and loading steps only when
that work is part of the task. For an authorized ingestion, complete the linking
and validation follow-through before reporting it finished.

- For component catalogue extraction and SQL mechanics, use
  [ingest-component-catalog](../ingest-component-catalog/SKILL.md).
- For bike CSV repair, scope rules, generator behaviour and linking mechanics, use
  [ingest-bike-specs](../ingest-bike-specs/SKILL.md).
- Read only the relevant brand notes, using the applicable ingest skill's
  `references/known-catalogs.md` index; use cross-catalog notes for work spanning
  brands.
- Read and follow [TODO and scratchpad housekeeping](references/todo-housekeeping.md)
  at the start, as results are verified and before finishing a task. Keep open work
  in [TODO.md](../../../TODO.md), and lasting results and evidence in the relevant
  existing catalogue or project notes.

Use this cycle for each catalogue or focused brand/category review:
**Audit gaps -> source evidence -> extract -> reconcile -> review SQL -> load ->
resolve duplicates -> link bikes -> validate -> record results.** Check for duplicates
before inserting as well as after ingestion. A catalogue job includes its linking
and validation follow-through; loading component rows alone leaves it unfinished.

The objective is correct identities, useful descriptions and traceable evidence.
Row count and link coverage measure progress, but a justified unlinked spec is a
valid result. Fix wrong existing links before adding speculative new ones.

## Workflow

1. **Choose a bounded problem and take a baseline.** Work on one catalogue,
   brand or component category. Read its existing catalogue notes and unresolved
   decisions first. Use live `/linkCoverage?unlinked=N`, read-only DB queries and
   `scripts/duplicate-report.js` to record the affected rows, links, duplicate
   candidates and date conflicts. Keep DB counts separate from generated CSV
   counts, and compare like-for-like scopes before and after.

2. **Classify the gaps before sourcing.** Put each actionable value into one of
   these buckets so the next action addresses the actual problem:

   | Finding | Next action |
   | --- | --- |
   | Suitable component exists, identification supported | Add/fix the link and generator mapping |
   | Named model has no suitable row | Find a period source, then reconcile/ingest it |
   | Several variants fit, or dates conflict | Seek the specific code, photo or specification that distinguishes them |
   | Transcription, label or combined-cell problem | Repair source data/structure before matching |
   | Generic, maker-only, house part or unresolved either/or | Record why it remains unlinked; revisit when new evidence arrives |

   Prioritise proven errors and missing sources likely to resolve many named
   specs. For example, one SR mid-1980s catalogue may address bars, stems,
   seatposts and cranks. Avoid repeating a source hunt already recorded as empty
   unless there is a new lead.

3. **Source and register the evidence.** Prefer manufacturer catalogues, technical
   sheets and parts books; use period importer/dealer catalogues and bike
   catalogues to supplement them. Save the original scan and record its URL or
   filename, edition, market, stated/estimated year and relevant pages. Check
   `data_source` and the known-catalogue index before creating another source.
   Record uncertainty and independent confirmation needed. A source's absence of
   a part alone does not prove that the part did not exist then.

4. **Extract into a reviewable inventory.** Capture printed maker, model/part
   number, category, distinguishing specifications, page and evidence notes.
   Check scans when OCR is uncertain. For bikes, repair CSV quoting, copied cells,
   labels and combined components; back up the gitignored CSV before editing.
   Apply the existing road-bike scope rules. Do not turn generic prose into an
   invented component identity.

5. **Reconcile with the DB before inserting.** Search by maker/category, part
   number, spelling aliases and specifications, including differently named rows.
   Classify each item as unchanged, an evidence-backed correction/enrichment, a
   genuinely new component, a duplicate candidate or unresolved. Keep distinct
   generations/configurations separate when their identity differs. Review brand,
   category and group ownership too. A catalogue attests availability; it does
   not by itself establish manufacture start/end dates. Check existing linked
   bikes and year-ranged overrides before changing component dates.

6. **Prepare and review the change set.** Follow the component/bike ingest skill
   for that job. Produce guarded, idempotent SQL with expected affected counts,
   source references, page evidence and unresolved calls. Capture the affected
   rows' old values and a restoration plan in SQL comments or catalogue notes
   before overwrites/merges. Check field lengths, especially the 255-character
   descriptions. Present new rows, corrections, date moves, merges and links for
   review; obtain approval before
   applying the reviewed DB changes under the existing ingest workflow.
   Use authorization already given for that concrete change set; do not ask again
   when it already covers the action.

7. **Load, then resolve evidence-backed duplicates in the affected scope.** Use
   `scripts/load-sql.js` and verify actual affected counts. Review duplicates
   exposed by the new evidence, using `duplicate-report.js --brand=<brand>` or
   `--category=<category>`, plus `--near` and `--paren` where useful. Reports
   propose candidates; they do not establish identity. Prefer an existing stable
   ID when suitable, retain useful descriptions/provenance, and repoint every DB
   reference and generator override before deleting the redundant row. Record
   retired IDs/source IDs and why each pair was merged or kept separate. Keep
   merges in reviewed SQL; do not merge on title similarity alone.

8. **Run the bike-link follow-through.** Recheck unlinked specs for the changed
   makers/categories after component identities are settled. Match model,
   generation and distinguishing specifications, not just maker or bend name.
   Use scoped overrides for decisions the matcher cannot safely make; an exact
   automatic match may only need its existing NULL link back-filled. Handle
   corrections to existing wrong links explicitly: normal regeneration fills
   NULLs and will not overwrite them. Keep ambiguous or compound specs unlinked
   until evidence or a deliberate spec split resolves them.

9. **Validate the whole change, including existing links.** Compare generated
   mappings before/after across all loaded CSVs after matcher/alias/split changes;
   also do this after component additions, renames, merges or date changes that
   can alter matching. New components can make an older unique match ambiguous.
   Explain every changed mapping and compare approved mappings with live specs.
   Check for dangling references, wrong categories/groups, duplicate specs,
   unexpected row-count changes and date conflicts. Date conflicts are review
   flags, not automatic errors or permission to widen dates. Re-run SQL to verify
   zero further changes. If labels/API behaviour changed, check the affected
   detail response/client display and run the relevant tests.

10. **Record the result and close the loop.** Update the relevant brand's
    known-catalogue notes (cross-catalog notes for multi-brand work), generator
    decisions and `TODO.md`. Record added/corrected/merged rows, links added/fixed,
    unresolved cases with their next evidence needed, validation results and
    dated coverage counts. For routine changes, keep the evidence/page URLs,
    old/new values and a short validation result in existing catalogue notes.
    Keep prepared and applied SQL in the temporary scratchpad; do not retain or
    commit audit SQL in the repository. Update `TODO.md` with status and remaining
    actions. Downloads, snapshots, diffs and logs also stay in the temporary
    scratchpad; do not create separate per-task reports, manifests
    or before/after JSON files unless explicitly requested or needed by maintained
    tooling. Commit relevant code/documentation and feed remaining evidence gaps
    back into step 1. Complete TODO housekeeping and remove disposable scratch
    files, including SQL, after validation and before reporting work finished.

## Completion criteria and cadence

- **Per catalogue:** changes reviewed/applied, duplicate candidates assessed,
  affected bike links revisited, existing mappings checked, rerun clean, notes
  updated, and affected TODO items/counts reconciled. A pass with zero new links
  can still improve quality.
- **After a batch of related catalogues:** review the whole affected category
  for aliases, duplicates, date conflicts and generator/live-DB drift.
- **Periodically, or after broad matching changes:** run a DB-wide integrity and
  coverage audit. Keep separate counts for wrong links corrected, supported links
  added, unresolved identifications, missing source/model rows, duplicate
  candidates awaiting review and provenance gaps. Show date/scope with each metric.

## Available tools and planned work

Use `node scripts/quality-report.js` for consolidated read-only integrity,
provenance and date checks (`--json` for every finding, `--limit=0` for full text;
exit 2 means data errors, exit 1 means command/query failure). Review candidates
are not proven wrong links. The command uses a read-only consistent DB snapshot;
see the repository README for checked relationships and catalogue exceptions.
Use `/linkCoverage`, read-only queries and `scripts/duplicate-report.js` for
coverage and component identity reviews. The reusable generator/live-DB comparison
remains planned in [TODO.md](../../../TODO.md#open-database-quality-tooling).
Keep temporary comparison scripts and output in the scratchpad, preserving the
current generated SQL file when comparing catalogues.
