#!/usr/bin/env bash
# Downloads archived page images of velo-pages.com (Gallery2) catalogue albums from the
# Wayback Machine. velo-pages itself has been down since 2026-10-17.
#
#   scripts/velo-pages-wayback.sh <out-dir> <image-item-id> [<image-item-id> ...]
#
# The ids are the DISPLAY-size image items of an album. In Gallery2 each page has a page item
# N, a thumbnail item N+1 (the one the album listing links to) and the display image N+2
# (what the page's own view loads); e.g. Fiamme catalog (1985), album 1398: page items 1400,
# 1405, 1408 ... so images 1402, 1407, 1410 ... Thumbnails are usually all that was archived. For each id it asks the CDX index for archived JPEGs of
# main.php?g2_view=core.DownloadItem&g2_itemId=<id> and saves the largest one as
# <out-dir>/pNN_<id>.jpg. Existing files are skipped, so it can be re-run.
#
# The Internet Archive answers HTTP 200 with a "Temporarily Offline" page during outages and
# 429 when hit too fast, so responses are checked (CDX lines must start with http, saved files
# must be JPEGs) and every request is spaced and retried; a failed id is reported, never saved.
set -uo pipefail
[ $# -ge 2 ] || { echo "usage: $0 <out-dir> <image-item-id>..." >&2; exit 1; }
OUT="$1"; shift
mkdir -p "$OUT"
n=0
for id in "$@"; do
  n=$((n+1)); f="$OUT/$(printf 'p%02d_%s.jpg' "$n" "$id")"
  [ -s "$f" ] && continue
  best=""
  for t in 1 2 3 4 5; do
    body=$(curl -s -m 60 "https://web.archive.org/cdx/search/cdx?url=velo-pages.com/main.php%3Fg2_view%3Dcore.DownloadItem%26g2_itemId%3D${id}&matchType=prefix&output=txt&fl=original,timestamp,mimetype,length&filter=mimetype:image/jpeg&filter=statuscode:200&limit=60")
    if echo "$body" | grep -qi "temporarily offline\|too many requests"; then sleep $((t*10)); continue; fi
    best=$(echo "$body" | grep '^http' | sort -k4 -n -r | head -1)
    break
  done
  if [ -z "$best" ]; then echo "$id: no capture found (or the Archive is offline)"; sleep 3; continue; fi
  orig=$(echo "$best" | awk '{print $1}'); ts=$(echo "$best" | awk '{print $2}')
  for t in 1 2 3; do
    curl -s -m 90 -o "$f.tmp" "https://web.archive.org/web/${ts}id_/${orig}"
    if file "$f.tmp" | grep -qi "JPEG image"; then mv "$f.tmp" "$f"; break; fi
    rm -f "$f.tmp"; sleep $((t*8))
  done
  [ -s "$f" ] && echo "$id: saved $f ($(wc -c < "$f") bytes, capture $ts)" || echo "$id: download failed"
  sleep 3
done
