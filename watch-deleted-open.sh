#!/usr/bin/env bash
set -u
 
NAME="${1:-vitest-run}"
INTERVAL="${INTERVAL:-1}"
LOG_FILE="${LOG_FILE:-deleted-open.log}"
 
while true; do
  OUT="$(
    {
      echo "=== $(date) ==="
      docker exec "$NAME" sh -lc '
        echo "--- df -h ---"
        df -h / /trace 2>/dev/null || df -h /
 
        echo
        echo "--- Deleted-open TOP by PID (bytes count pid cmd) ---"
        for fd in /proc/[0-9]*/fd/*; do
          t="$(readlink "$fd" 2>/dev/null || true)"
          case "$t" in
            *"(deleted)"*)
              pid="${fd#/proc/}"; pid="${pid%%/*}"
              sz="$(stat -Lc %s "$fd" 2>/dev/null || echo 0)"
              printf "%s\t%s\n" "$pid" "$sz"
            ;;
          esac
        done |
        awk -F"\t" '"'"'{sum[$1]+=$2; cnt[$1]++} END{for (p in sum) print sum[p],cnt[p],p}'"'"' |
        sort -n | tail -n 10 |
        while read -r bytes cnt pid; do
          cmd="$(tr "\0" " " < "/proc/$pid/cmdline" 2>/dev/null | cut -c1-160)"
          printf "%12s  %4s  pid=%-6s  %s\n" "$bytes" "$cnt" "$pid" "${cmd:-<exited>}"
        done
      ' 2>&1 || { echo "container stopped"; exit 0; }
      echo
    }
  )"
 
  clear
  printf "%s" "$OUT"
  printf "%s" "$OUT" >> "$LOG_FILE"
 
  sleep "$INTERVAL"
done