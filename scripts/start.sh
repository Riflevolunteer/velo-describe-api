#!/usr/bin/env bash
set -euo pipefail

# Starts the EC2 instance and RDS database back up after scripts/stop.sh.
# The Elastic IP stays attached, so the hostname/HTTPS cert keep working --
# app comes back up on its own via the systemd service (no need to re-run
# user-data). RDS takes several minutes to become available; the app will
# return clean 500s on DB routes until then (not a crash).

PROFILE="${AWS_PROFILE:-velo}"
REGION="${AWS_REGION:-eu-central-1}"
INSTANCE_NAME="velo-describe-api"
DB_INSTANCE_ID="velo-components"

aws_() { aws --profile "$PROFILE" --region "$REGION" "$@"; }

DB_STATUS=$(aws_ rds describe-db-instances \
  --db-instance-identifier "$DB_INSTANCE_ID" \
  --query 'DBInstances[0].DBInstanceStatus' --output text 2>/dev/null || echo "None")

if [ "$DB_STATUS" = "stopped" ]; then
  echo "Starting RDS instance $DB_INSTANCE_ID (takes a few minutes)..."
  aws_ rds start-db-instance --db-instance-identifier "$DB_INSTANCE_ID" >/dev/null
else
  echo "RDS instance $DB_INSTANCE_ID not in a startable state (status: $DB_STATUS)."
fi

INSTANCE_ID=$(aws_ ec2 describe-instances \
  --filters "Name=tag:Name,Values=$INSTANCE_NAME" "Name=instance-state-name,Values=stopped" \
  --query 'Reservations[0].Instances[0].InstanceId' --output text)

if [ "$INSTANCE_ID" = "None" ] || [ -z "$INSTANCE_ID" ]; then
  echo "No stopped EC2 instance tagged Name=$INSTANCE_NAME found."
  exit 0
fi

echo "Starting EC2 instance $INSTANCE_ID..."
aws_ ec2 start-instances --instance-ids "$INSTANCE_ID" >/dev/null
aws_ ec2 wait instance-running --instance-ids "$INSTANCE_ID"

PUBLIC_IP=$(aws_ ec2 describe-instances --instance-ids "$INSTANCE_ID" --query 'Reservations[0].Instances[0].PublicIpAddress' --output text)
HOSTNAME_SSLIP="${PUBLIC_IP//./-}.sslip.io"

echo "EC2 running. Give the app and RDS a few minutes, then:"
echo "  https://$HOSTNAME_SSLIP/categories"
