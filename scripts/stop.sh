#!/usr/bin/env bash
set -euo pipefail

# Stops the EC2 instance to save on compute cost while not in use.
# Note: the RDS instance keeps running/billing separately -- see stop.sh
# usage notes. The Elastic IP incurs a small hourly charge while the
# instance is stopped (EIPs are only free while attached to a *running*
# instance), but stays reserved so the hostname/cert don't change.

PROFILE="${AWS_PROFILE:-velo}"
REGION="${AWS_REGION:-eu-central-1}"
INSTANCE_NAME="velo-describe-api"

aws_() { aws --profile "$PROFILE" --region "$REGION" "$@"; }

INSTANCE_ID=$(aws_ ec2 describe-instances \
  --filters "Name=tag:Name,Values=$INSTANCE_NAME" "Name=instance-state-name,Values=running" \
  --query 'Reservations[0].Instances[0].InstanceId' --output text)

if [ "$INSTANCE_ID" = "None" ] || [ -z "$INSTANCE_ID" ]; then
  echo "No running instance tagged Name=$INSTANCE_NAME found."
  exit 0
fi

echo "Stopping $INSTANCE_ID..."
aws_ ec2 stop-instances --instance-ids "$INSTANCE_ID" >/dev/null
echo "Stopped. Run scripts/start.sh to bring it back up."
