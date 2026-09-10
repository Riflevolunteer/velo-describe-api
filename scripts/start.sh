#!/usr/bin/env bash
set -euo pipefail

# Starts the EC2 instance back up after scripts/stop.sh. The Elastic IP
# stays attached, so the hostname/HTTPS cert keep working -- app comes
# back up on its own via the systemd service (no need to re-run user-data).

PROFILE="${AWS_PROFILE:-velo}"
REGION="${AWS_REGION:-eu-central-1}"
INSTANCE_NAME="velo-describe-api"

aws_() { aws --profile "$PROFILE" --region "$REGION" "$@"; }

INSTANCE_ID=$(aws_ ec2 describe-instances \
  --filters "Name=tag:Name,Values=$INSTANCE_NAME" "Name=instance-state-name,Values=stopped" \
  --query 'Reservations[0].Instances[0].InstanceId' --output text)

if [ "$INSTANCE_ID" = "None" ] || [ -z "$INSTANCE_ID" ]; then
  echo "No stopped instance tagged Name=$INSTANCE_NAME found."
  exit 0
fi

echo "Starting $INSTANCE_ID..."
aws_ ec2 start-instances --instance-ids "$INSTANCE_ID" >/dev/null
aws_ ec2 wait instance-running --instance-ids "$INSTANCE_ID"

PUBLIC_IP=$(aws_ ec2 describe-instances --instance-ids "$INSTANCE_ID" --query 'Reservations[0].Instances[0].PublicIpAddress' --output text)
HOSTNAME_SSLIP="${PUBLIC_IP//./-}.sslip.io"

echo "Running. Give it a minute for services to come up, then:"
echo "  https://$HOSTNAME_SSLIP/categories"
