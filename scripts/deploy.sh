#!/usr/bin/env bash
set -euo pipefail

# Deploys the latest pushed commit to the running EC2 instance via SSM
# Run Command: git pull, reinstall deps, restart the systemd service.

PROFILE="${AWS_PROFILE:-velo}"
REGION="${AWS_REGION:-eu-central-1}"
INSTANCE_NAME="velo-describe-api"

aws_() { aws --profile "$PROFILE" --region "$REGION" "$@"; }

INSTANCE_ID=$(aws_ ec2 describe-instances \
  --filters "Name=tag:Name,Values=$INSTANCE_NAME" "Name=instance-state-name,Values=running" \
  --query 'Reservations[0].Instances[0].InstanceId' --output text)

if [ "$INSTANCE_ID" = "None" ] || [ -z "$INSTANCE_ID" ]; then
  echo "No running instance tagged Name=$INSTANCE_NAME found." >&2
  exit 1
fi

echo "Deploying to $INSTANCE_ID..."

COMMAND_ID=$(aws_ ssm send-command \
  --instance-ids "$INSTANCE_ID" \
  --document-name "AWS-RunShellScript" \
  --parameters 'commands=["cd /opt/velo-describe-api && git pull && npm ci --omit=dev && sudo systemctl restart velo-describe-api"]' \
  --query 'Command.CommandId' --output text)

echo "Command ID: $COMMAND_ID"
echo "Waiting for completion..."

for i in $(seq 1 30); do
  STATUS=$(aws_ ssm get-command-invocation \
    --command-id "$COMMAND_ID" \
    --instance-id "$INSTANCE_ID" \
    --query 'Status' --output text 2>/dev/null || echo "Pending")
  if [ "$STATUS" = "Success" ] || [ "$STATUS" = "Failed" ]; then
    break
  fi
  sleep 5
done

echo "Status: $STATUS"
echo "--- stdout ---"
aws_ ssm get-command-invocation --command-id "$COMMAND_ID" --instance-id "$INSTANCE_ID" --query 'StandardOutputContent' --output text
echo "--- stderr ---"
aws_ ssm get-command-invocation --command-id "$COMMAND_ID" --instance-id "$INSTANCE_ID" --query 'StandardErrorContent' --output text

if [ "$STATUS" != "Success" ]; then
  exit 1
fi
