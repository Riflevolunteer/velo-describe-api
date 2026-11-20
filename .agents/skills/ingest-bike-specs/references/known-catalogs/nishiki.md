# Nishiki catalogs processed so far

## US catalogue 1987 — assessed for ingestion, 2026-11-20

Source: [Bikalog PDF](https://bikalog.org/api/view/Nishiki/1987/nishiki-1987.pdf),
34 PDF pages; downloaded original retained at
`bike_specs/sources/nishiki_1987/nishiki-1987.pdf` (gitignored).
Cover visually confirms **NISHIKI / 1987**. The warranty page (PDF p.34)
identifies the Carson, California distributor address, supporting US market.
This is a bike-ingest candidate, not an applied ingestion.

Visually checked the cover and PDF pp.29/31. PDF p.29 has a readable detailed
road/touring specification table: Carbon, Fusion, Altron 7000, Tri-A Equipe,
Tri-A, International, Linear, Prestige, Olympic 12, Custom Sport, Sport,
Century, Rally and Cresta GT. It lists frame/fork, headset, stem, bars/tape,
brakes/levers, front/rear derailleurs, shifters, freewheel, chain, crankset,
pedals and rims. PDF p.31 has the ATB table, including clearly junior/cruiser
models to exclude after the normal model-by-model scope review. The other
specification sheets and model portraits still need inspection; do not treat
this candidate assessment as a full transcription or scope decision.

Live read-only bike/brand query returned no Nishiki bikes on 2026-11-20.
No CSV, SQL, database source or bike rows were created. Unlike the MBK Course
candidate, the scan itself establishes its year; unlike Panasonic's pending
action, no alternate-brand treatment question was identified. Next: classify
models, transcribe in-scope specifications, reconcile components and prepare
reviewable ingestion SQL. The OCR on the diagonal tables is poor, so use the
scan visually and verify column alignment. Normal source and match review
still applies before database loading. Temporary OCR text and page renders
were removed after recording these findings; original PDF retained above.
