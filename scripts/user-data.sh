#!/usr/bin/env bash
set -euo pipefail

# EC2 user-data: bootstraps the instance on first boot.
# Installs Node 20 + git, clones the app, installs deps, and runs it as a
# systemd service.

dnf install -y nodejs20 git amazon-ssm-agent
systemctl enable --now amazon-ssm-agent

REPO_DIR=/opt/velo-describe-api
git config --system --add safe.directory "$REPO_DIR"

if [ ! -d "$REPO_DIR" ]; then
  git clone https://github.com/Riflevolunteer/velo-describe-api.git "$REPO_DIR"
fi

cd "$REPO_DIR"
npm ci --omit=dev

cat > /etc/systemd/system/velo-describe-api.service <<'EOF'
[Unit]
Description=velo-describe-api
After=network.target

[Service]
Type=simple
WorkingDirectory=/opt/velo-describe-api
Environment=NODE_ENV=production
ExecStart=/usr/bin/node index.js
Restart=on-failure
RestartSec=5
User=ec2-user

[Install]
WantedBy=multi-user.target
EOF

chown -R ec2-user:ec2-user "$REPO_DIR"
systemctl daemon-reload
systemctl enable --now velo-describe-api

# HTTPS via Caddy, using a free sslip.io hostname derived from the
# instance's public IP (works without owning a real domain).
IMDS_TOKEN=$(curl -s -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600")
PUBLIC_IP=$(curl -s -H "X-aws-ec2-metadata-token: $IMDS_TOKEN" http://169.254.169.254/latest/meta-data/public-ipv4)
HOSTNAME_SSLIP="${PUBLIC_IP//./-}.sslip.io"

curl -L "https://caddyserver.com/api/download?os=linux&arch=arm64" -o /usr/bin/caddy
chmod +x /usr/bin/caddy

mkdir -p /etc/caddy
cat > /etc/caddy/Caddyfile <<EOF
${HOSTNAME_SSLIP} {
    reverse_proxy localhost:3000
}
EOF

cat > /etc/systemd/system/caddy.service <<'EOF'
[Unit]
Description=Caddy
After=network.target

[Service]
Type=simple
ExecStart=/usr/bin/caddy run --environ --config /etc/caddy/Caddyfile
ExecReload=/usr/bin/caddy reload --config /etc/caddy/Caddyfile
Restart=on-failure
User=root

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable --now caddy

echo "HTTPS URL: https://${HOSTNAME_SSLIP}" > /opt/velo-describe-api/HTTPS_URL.txt
