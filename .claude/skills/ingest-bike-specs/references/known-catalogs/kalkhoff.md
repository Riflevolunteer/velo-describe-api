# Kalkhoff catalogs processed so far

## 1981 Kalkhoff — `1981_kalkhoff_spec.csv` (8 bikes, 136 specs, 57 linked)

- German-sourced, partly translated. Repairs: lowercase headers title-cased,
  "Frame" → "Frame Material"; the English "Toe Clips" column was a duplicate
  of "Haken" (German for toe clips) with worse data, so it was dropped and
  Haken renamed; "-/-" → "None"; "Rec." → "Record", "Conti" → "Continental";
  frame/handlebar cells put into English ("11 Reynolds 531 C tubes",
  "Belleri touring bar").
- Two rows each described two models ("Amateur 06 S / Amateur 56 S",
  "Touring 05 S / Touring 55 S") with a split size cell; split into one row
  per model with its own sizes. The stem cell "SR AX; AH" stays on both.
- "Bottom Bracket and crankset" added to SPLIT_LABELS.
- Shimano rows are titled "Shimano FD-7200, Dura-Ace EX" (part number between
  brand and group), so nothing Shimano links by substring — every Dura-Ace EX
  and 600 AX part is an override. "Shimano 600 AX" otherwise substring-hits
  plain "Shimano 600" (wrong).
- 1981 choices: Super Record rear → 4001 PAT. 80, front → 1052/SR, brakes →
  4061 v1, headset → 4041, bottom bracket → 4031 second gen (bare substring
  hit a titanium 1st-gen row), seat post → 4051 Campagnolo Script, pedals →
  4021 Strada, crank → 1049/A; Cinelli "Super Record" stem → 1R (1/Record);
  Dura-Ace EX chain → CN-7100 Uniglide (no row carries "EX").
- Brand rows kept: Sakae cranks → Sakae/Ringyo (SR); "Union" chain → Union
  486 and pedals → Union U40 (only Union row in each category; auto).
- Left unlinked: Dura-Ace EX hubs (four EX hub rows, nothing to choose on),
  plain "Shimano 600" front (no row), Weinmann 506, CLB, Rigida/Weinmann rims,
  Tange, Maillard, SunTour hubs/pedals, tyres, "SR" stems. Toe Clips has no
  component category.

