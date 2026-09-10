#!/usr/bin/env bash
set -euo pipefail

# One-time setup: pushes the values from local .env into SSM Parameter Store
# under /velo-describe-api/prod/<KEY>, so the EC2 instance can read them via
# load-env.js. Re-run any time a value in .env changes to keep prod in sync.

PROFILE="${AWS_PROFILE:-velo}"
REGION="${AWS_REGION:-eu-central-1}"
ENV_FILE="$(dirname "$0")/../.env"
PREFIX="/velo-describe-api/prod"

SECURE_KEYS=("DB_PASSWORD" "MARKETPLACE_CLIENT_SECRET")

if [ ! -f "$ENV_FILE" ]; then
  echo "No .env file found at $ENV_FILE" >&2
  exit 1
fi

is_secure() {
  local key="$1"
  for s in "${SECURE_KEYS[@]}"; do
    [ "$key" = "$s" ] && return 0
  done
  return 1
}

while IFS='=' read -r key value; do
  [ -z "$key" ] && continue
  case "$key" in \#*) continue ;; esac

  type="String"
  if is_secure "$key"; then
    type="SecureString"
  fi

  echo "Setting $PREFIX/$key ($type)"
  aws ssm put-parameter \
    --profile "$PROFILE" \
    --region "$REGION" \
    --name "$PREFIX/$key" \
    --value "$value" \
    --type "$type" \
    --overwrite \
    >/dev/null
done < <(grep -v '^\s*$' "$ENV_FILE" | grep -v '^{')

echo "Done. Verify with:"
echo "  aws ssm get-parameters-by-path --profile $PROFILE --region $REGION --path $PREFIX --with-decryption"
