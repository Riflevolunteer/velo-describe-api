# TODO and scratchpad housekeeping

Keep the repository-root `TODO.md` current as work happens, including sourcing,
ingestion, linking, deduplication and API/client work. Update it when a result or
decision is verified; do not wait for a separate cleanup session. Planned or approved work remains open
until it is applied and validated.

Follow these instructions during repository work: at the start, as results are
verified, and before the final response. They do not run as a background job and
do not require a separate user invocation.

- **At the start:** find the existing item and read its latest decision/evidence.
  Update that item instead of adding a second entry for the same work. If the task
  is new, add one actionable item under the appropriate Open section.
- **When work completes:** record lasting outcomes, evidence, material old/new
  values and validation in the relevant existing catalogue or project notes, then
  remove the completed task from `TODO.md`. Keep TODO for open work and unresolved
  questions; do not maintain a Done section or a separate completed-work archive.
  Git history records committed task chronology. For partially completed work,
  leave only the remaining action and make its status explicit. Distinguish
  prepared SQL, approved changes, applied DB changes and deployed code where
  applicable.
- **When evidence changes a decision:** edit the current worklist and any affected
  cross-references, source gaps or duplicate candidates. Supersede the old decision
  explicitly in the detailed notes; preserve enough evidence to explain why it
  changed. Keep rejected mappings and reviewed non-duplicates recorded so future
  tasks do not repeat them without new evidence.
- **When counts change:** refresh the affected category's current summary with
  verified counts, date and scope. Update the overall coverage snapshot only after
  re-querying its full scope; do not mix fresh category counts into an older dated
  table or derive DB totals from generator counts. Label older snapshots as
  historical and point to the newer affected-category result where needed.
- **When a follow-up appears:** record the exact unresolved question, affected
  models/IDs where useful, next action and evidence needed. Record an unsuccessful
  source hunt with its scope/date and what new lead would justify repeating it.
  Keep blocked or deferred work visible with its reason.
- **Before finishing:** search `TODO.md` for the affected model, component ID,
  catalogue and task wording. Resolve contradictory current claims and stale
  "no row"/"unlinked"/"not loaded" statements within the task's scope. Consolidate
  duplicate open items, check links and Markdown, and include the documentation
  update with the implementation when committing. No unrelated full-file rewrite
  is needed.
- **After a batch:** remove completed narratives once their lasting evidence and
  decisions are in the relevant existing notes. Preserve unresolved questions in
  TODO and deliberate do-not-link decisions in the notes, with a TODO follow-up
  only when there is an actionable next step. A periodic tidy supplements these
  per-task updates; it does not replace them.

## Scratchpad cleanup

- **As work progresses:** remove task-created downloads, page renders, throwaway
  scripts, obsolete patches, snapshots and logs once their purpose is complete.
  Keep comparison inputs and CSV backups until the changes they support have
  been validated. Keep prepared SQL while review or application is pending and
  applied SQL until readback and the idempotency check are complete.
- **Before finishing:** record source URLs/pages, decisions, material old/new
  values and validation results in the existing catalogue notes and TODO as
  appropriate, then delete the task's remaining disposable files, including SQL.
  Update references that would otherwise direct someone to deleted evidence.
  Keep user-requested deliverables and original user-provided files; do not delete
  maintained catalogue scans, source CSVs or repository files as scratch material.
- **For unfinished work:** retain only what is needed to review or resume it.
  Record the temporary path and why it is still needed with the open item, and
  clean it up after the work is resolved. Do not mark the task complete merely
  because its temporary files have been removed.
- **Limit deletion to known task files:** use exact paths or a task directory
  whose contents are known to belong solely to this work. Do not sweep shared
  temporary directories, another session's files or unfamiliar older scratchpads
  based only on age or filename. Confirm ownership and whether they are still
  needed before including older files in a cleanup.
