#!/usr/bin/env bash
set -euo pipefail

# One-time: provisions the EC2 instance that runs velo-describe-api.
# Idempotent-ish: safe to re-run, skips steps whose resources already exist.

PROFILE="${AWS_PROFILE:-velo}"
REGION="${AWS_REGION:-eu-central-1}"
VPC_ID="vpc-f80bbf93"
MY_IP="${MY_IP:-$(curl -s https://checkip.amazonaws.com)}/32"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

SG_NAME="velo-describe-api-ec2-sg"
ROLE_NAME="velo-describe-api-ec2-role"
PROFILE_NAME="velo-describe-api-ec2-profile"
INSTANCE_NAME="velo-describe-api"

aws_() { aws --profile "$PROFILE" --region "$REGION" "$@"; }

echo "==> Security group"
SG_ID=$(aws_ ec2 describe-security-groups \
  --filters "Name=group-name,Values=$SG_NAME" "Name=vpc-id,Values=$VPC_ID" \
  --query 'SecurityGroups[0].GroupId' --output text 2>/dev/null || echo "None")

if [ "$SG_ID" = "None" ] || [ -z "$SG_ID" ]; then
  SG_ID=$(aws_ ec2 create-security-group \
    --group-name "$SG_NAME" \
    --description "velo-describe-api EC2 - port 3000 from admin IP only" \
    --vpc-id "$VPC_ID" \
    --query 'GroupId' --output text)
  echo "Created security group $SG_ID"
else
  echo "Reusing security group $SG_ID"
fi

aws_ ec2 authorize-security-group-ingress \
  --group-id "$SG_ID" \
  --protocol tcp --port 3000 --cidr "$MY_IP" 2>/dev/null || echo "Ingress rule already present"

echo "==> IAM role"
if ! aws_ iam get-role --role-name "$ROLE_NAME" >/dev/null 2>&1; then
  aws_ iam create-role \
    --role-name "$ROLE_NAME" \
    --assume-role-policy-document '{
      "Version": "2012-10-17",
      "Statement": [{
        "Effect": "Allow",
        "Principal": {"Service": "ec2.amazonaws.com"},
        "Action": "sts:AssumeRole"
      }]
    }' >/dev/null
  echo "Created role $ROLE_NAME"
else
  echo "Reusing role $ROLE_NAME"
fi

aws_ iam attach-role-policy \
  --role-name "$ROLE_NAME" \
  --policy-arn arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore 2>/dev/null || true

ACCOUNT_ID=$(aws_ sts get-caller-identity --query Account --output text)
aws_ iam put-role-policy \
  --role-name "$ROLE_NAME" \
  --policy-name "velo-describe-api-ssm-params" \
  --policy-document "{
    \"Version\": \"2012-10-17\",
    \"Statement\": [
      {
        \"Effect\": \"Allow\",
        \"Action\": \"ssm:GetParametersByPath\",
        \"Resource\": \"arn:aws:ssm:${REGION}:${ACCOUNT_ID}:parameter/velo-describe-api/prod/*\"
      },
      {
        \"Effect\": \"Allow\",
        \"Action\": \"kms:Decrypt\",
        \"Resource\": \"arn:aws:kms:${REGION}:${ACCOUNT_ID}:alias/aws/ssm\"
      }
    ]
  }"

echo "==> Instance profile"
if ! aws_ iam get-instance-profile --instance-profile-name "$PROFILE_NAME" >/dev/null 2>&1; then
  aws_ iam create-instance-profile --instance-profile-name "$PROFILE_NAME" >/dev/null
  aws_ iam add-role-to-instance-profile \
    --instance-profile-name "$PROFILE_NAME" \
    --role-name "$ROLE_NAME"
  echo "Created instance profile $PROFILE_NAME, waiting for propagation..."
  sleep 15
else
  echo "Reusing instance profile $PROFILE_NAME"
fi

echo "==> AMI lookup (Amazon Linux 2023, arm64)"
AMI_ID=$(aws_ ec2 describe-images \
  --owners amazon \
  --filters "Name=name,Values=al2023-ami-*-arm64" "Name=state,Values=available" \
  --query 'sort_by(Images, &CreationDate)[-1].ImageId' --output text)
echo "Using AMI $AMI_ID"

echo "==> Launch instance"
EXISTING=$(aws_ ec2 describe-instances \
  --filters "Name=tag:Name,Values=$INSTANCE_NAME" "Name=instance-state-name,Values=pending,running" \
  --query 'Reservations[0].Instances[0].InstanceId' --output text 2>/dev/null || echo "None")

if [ "$EXISTING" != "None" ] && [ -n "$EXISTING" ]; then
  echo "Instance already running: $EXISTING"
  INSTANCE_ID="$EXISTING"
else
  INSTANCE_ID=$(aws_ ec2 run-instances \
    --image-id "$AMI_ID" \
    --instance-type t4g.micro \
    --security-group-ids "$SG_ID" \
    --iam-instance-profile "Name=$PROFILE_NAME" \
    --associate-public-ip-address \
    --user-data "file://$SCRIPT_DIR/user-data.sh" \
    --tag-specifications "ResourceType=instance,Tags=[{Key=Name,Value=$INSTANCE_NAME}]" \
    --query 'Instances[0].InstanceId' --output text)
  echo "Launched instance $INSTANCE_ID"
fi

echo "==> Waiting for instance to be running"
aws_ ec2 wait instance-running --instance-ids "$INSTANCE_ID"

PUBLIC_IP=$(aws_ ec2 describe-instances \
  --instance-ids "$INSTANCE_ID" \
  --query 'Reservations[0].Instances[0].PublicIpAddress' --output text)

echo "==> Waiting for SSM agent registration (this can take a couple of minutes)"
for i in $(seq 1 30); do
  STATUS=$(aws_ ssm describe-instance-information \
    --filters "Key=InstanceIds,Values=$INSTANCE_ID" \
    --query 'InstanceInformationList[0].PingStatus' --output text 2>/dev/null || echo "None")
  if [ "$STATUS" = "Online" ]; then
    echo "SSM agent online."
    break
  fi
  sleep 10
done

echo ""
echo "Instance ID: $INSTANCE_ID"
echo "Public IP:   $PUBLIC_IP"
echo "App URL:     http://$PUBLIC_IP:3000/categories (allow a few minutes for user-data to finish)"
