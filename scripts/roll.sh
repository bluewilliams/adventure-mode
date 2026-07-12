#!/usr/bin/env bash
# Honest dice for Adventure Mode. Usage: roll.sh [NdM] [NdM] ...  (default: 1d20)
# Output: one line per roll: "2d6: 4+3 = 7". Uses /dev/urandom, not $RANDOM.
set -euo pipefail

rand() { # rand MAX -> uniform 1..MAX
  local max=$1 r
  r=$(od -An -N4 -tu4 /dev/urandom | tr -d ' ')
  echo $(( r % max + 1 ))
}

specs=("${@:-1d20}")
for spec in "${specs[@]}"; do
  if [[ ! "$spec" =~ ^([0-9]+)d([0-9]+)$ ]]; then
    echo "bad spec: $spec (want NdM, e.g. 1d20, 2d6)" >&2; exit 1
  fi
  n=${BASH_REMATCH[1]}; m=${BASH_REMATCH[2]}
  total=0; parts=()
  for ((i=0; i<n; i++)); do
    v=$(rand "$m"); parts+=("$v"); total=$((total + v))
  done
  printf '%s: %s = %s\n' "$spec" "$(IFS=+; echo "${parts[*]}")" "$total"
done
