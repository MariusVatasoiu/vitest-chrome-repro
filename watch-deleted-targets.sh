#!/usr/bin/env bash
set -euo pipefail
 
PATTERN="${1:-}"
if [ -z "$PATTERN" ]; then
  echo "Usage: $0 <container-name-or-image-substring>"
  echo "Example: $0 vitest-run"
  echo "Example: $0 my-vitest-image"
  exit 1
fi
 
INTERVAL="${INTERVAL:-1}"
LOG_FILE="${LOG_FILE:-lsof-deleted.log}"
TOP_PIDS="${TOP_PIDS:-10}"
TOP_FILES="${TOP_FILES:-20}"
FILTER_RE="${FILTER_RE:-chrome|chromium|node|playwright}"  # poți pune '.*' pt tot
 
find_container() {
  docker ps --format '{{.ID}}\t{{.Image}}\t{{.Names}}' \
    | awk -v pat="$PATTERN" '
      BEGIN{p=tolower(pat)}
      {img=tolower($2); nam=tolower($3)}
      index(img,p) || index(nam,p) {print $1 "\t" $2 "\t" $3; exit}
    '
}
 
while true; do
  INFO="$(find_container || true)"
  if [ -z "${INFO:-}" ]; then
    clear
    echo "No running container matching '$PATTERN'."
    echo
    docker ps --format 'table {{.ID}}\t{{.Image}}\t{{.Names}}'
    sleep "$INTERVAL"
    continue
  fi
 
  CID="$(echo "$INFO" | awk '{print $1}')"
  CIMAGE="$(echo "$INFO" | awk '{print $2}')"
  CNAME="$(echo "$INFO" | awk '{print $3}')"
 
  OUT="$(
    {
      echo "--- df -h ---"
      docker exec "$CID" df -h / /trace /dev/shm 2>/dev/null || docker exec "$CID" df -h /
 
      echo
      echo "--- lsof deleted-open (filtered: $FILTER_RE) ---"
      # lsof +L1 = files with link count < 1 (deleted/unlinked but still open)
      # -nP = no DNS, no port->service resolution (faster)
      docker exec "$CID" lsof -nP +L1 2>/dev/null \
        | awk 'NR==1 || $0 ~ /\(deleted\)/' \
        | grep -Ei "$FILTER_RE" || true
 
      echo
      echo "--- TOP PIDs by deleted bytes (approx from SIZE/OFF) ---"
      docker exec "$CID" lsof -nP +L1 2>/dev/null \
        | awk '
            NR==1{next}
            $0 ~ /\(deleted\)/ {
              # columns: COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME...
              pid=$2
              cmd=$1
              size=$7
              # SIZE/OFF may be like 12345 or 0t12345 or 123/456; keep leading number
              sub(/^[^0-9]*/, "", size)
              sub(/[^0-9].*$/, "", size)
              if (size == "") size=0
              sum[pid]+=size
              name[pid]=cmd
            }
            END{
              for (p in sum) printf "%s\t%s\t%s\n", sum[p], p, name[p]
            }
        ' \
        | sort -n | tail -n "$TOP_PIDS" \
        | awk '{printf "%12s bytes  pid=%-6s  %s\n",$1,$2,$3}'
 
      echo
      echo "--- TOP deleted files by size (approx from SIZE/OFF) ---"
      docker exec "$CID" lsof -nP +L1 2>/dev/null \
        | awk '
            NR==1{next}
            $0 ~ /\(deleted\)/ {
              size=$7
              sub(/^[^0-9]*/, "", size)
              sub(/[^0-9].*$/, "", size)
              if (size == "") size=0
              # reconstruct NAME (from column 9 onward)
              name=""
              for (i=9;i<=NF;i++) name = name (i==9?"":" ") $i
              printf "%s\t%s\t%s\t%s\n", size, $1, $2, name
            }
        ' \
        | sort -n | tail -n "$TOP_FILES" \
        | awk '{printf "%12s bytes  %-10s pid=%-6s  %s\n",$1,$2,$3,$4}'
 
    } 2>&1
  )"
 
  clear
  {
    echo "=== $(date) ==="
    echo "Pattern: $PATTERN"
    echo "Matched: $CNAME ($CID) image=$CIMAGE"
    echo
    echo "$OUT"
    echo
    echo "Logging to: $LOG_FILE  interval=${INTERVAL}s"
    echo
  } | tee -a "$LOG_FILE"
 
  sleep "$INTERVAL"
done