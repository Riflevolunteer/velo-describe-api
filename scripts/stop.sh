#!/usr/bin/env bash
set -euo pipefail

# Stops the EC2 instance and RDS database to save on compute cost while
# not in use. Storage (EBS + RDS) keeps billing regardless of running
# state. The Elastic IP incurs a small hourly charge while the EC2
# instance is stopped (EIPs are only free while attached to a *running*
# instance), but stays reserved so the hostname/cert don't change.
# Note: RDS auto-restarts itself after 7 days if left stopped (AWS limit).

PROFILE="${AWS_PROFILE:-velo}"
REGION="${AWS_REGION:-eu-central-1}"
INSTANCE_NAME="velo-describe-api"
DB_INSTANCE_ID="velo-components"

aws_() { aws --profile "$PROFILE" --region "$REGION" "$@"; }

INSTANCE_ID=$(aws_ ec2 describe-instances \
  --filters "Name=tag:Name,Values=$INSTANCE_NAME" "Name=instance-state-name,Values=running" \
  --query 'Reservations[0].Instances[0].InstanceId' --output text)

if [ "$INSTANCE_ID" != "None" ] && [ -n "$INSTANCE_ID" ]; then
  echo "Stopping EC2 instance $INSTANCE_ID..."
  aws_ ec2 stop-instances --instance-ids "$INSTANCE_ID" >/dev/null
else
  echo "No running EC2 instance tagged Name=$INSTANCE_NAME found."
fi

DB_STATUS=$(aws_ rds describe-db-instances \
  --db-instance-identifier "$DB_INSTANCE_ID" \
  --query 'DBInstances[0].DBInstanceStatus' --output text 2>/dev/null || echo "None")

if [ "$DB_STATUS" = "available" ]; then
  echo "Stopping RDS instance $DB_INSTANCE_ID..."
  aws_ rds stop-db-instance --db-instance-identifier "$DB_INSTANCE_ID" >/dev/null
else
  echo "RDS instance $DB_INSTANCE_ID not in a stoppable state (status: $DB_STATUS)."
fi

echo "Done. Run scripts/start.sh to bring both back up."
