-- One-off: replace the 190 MANUAL-<CODE>-<YEAR>-<part> source_id values with
-- plain UUIDs. That naming existed only to keep hand-inserted catalogue rows
-- from colliding with the velobase crawler's GUID space; source_ref ->
-- data_source (added earlier) now carries the real provenance, so the
-- MANUAL-... shape buys nothing — source_id goes back to being just a load
-- idempotency key.
--
-- Guarded on the pattern, not a row count, so a second run is a safe no-op
-- (nothing left matching 'MANUAL-%' after the first run touches every row).
UPDATE component_detail
SET source_id = UUID()
WHERE source_id LIKE 'MANUAL-%';
