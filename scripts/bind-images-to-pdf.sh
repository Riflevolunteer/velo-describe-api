#!/usr/bin/env bash
set -euo pipefail

# Binds a folder of scanned page images (jpg/jpeg/png) into one PDF so the
# pages can be read in batches. Downscales to MAX_PX on the long edge with
# sips (macOS), converts each image to a one-page PDF, merges with poppler's
# pdfunite. Page order = sorted filename order; the page->file map is printed.
#
#   scripts/bind-images-to-pdf.sh <image-folder> <out.pdf> [max_px=1800]

if [ $# -lt 2 ]; then
  echo "Usage: $0 <image-folder> <out.pdf> [max_px]" >&2
  exit 1
fi

SRC="$1"
OUT="$2"
MAX_PX="${3:-1800}"

command -v sips >/dev/null || { echo "sips not found (macOS only)" >&2; exit 1; }
command -v pdfunite >/dev/null || { echo "pdfunite not found: brew install poppler" >&2; exit 1; }

WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

i=0
find "$SRC" -maxdepth 1 -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) | sort | while read -r f; do
  i=$((i + 1))
  n=$(printf "%03d" "$i")
  sips -Z "$MAX_PX" "$f" --out "$WORK/p$n.jpg" >/dev/null 2>&1
  sips -s format pdf "$WORK/p$n.jpg" --out "$WORK/p$n.pdf" >/dev/null 2>&1
  echo "$i $(basename "$f")"
done

# shellcheck disable=SC2046
pdfunite $(ls "$WORK"/p*.pdf | sort) "$OUT"
echo "wrote $OUT ($(ls "$WORK"/p*.pdf | wc -l | tr -d ' ') pages)"
