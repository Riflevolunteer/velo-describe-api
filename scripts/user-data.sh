#!/usr/bin/env bash
set -euo pipefail

# EC2 user-data: bootstraps the instance on first boot.
# Installs Node 20 + git, clones the app, installs deps, and runs it as a
# systemd service.

dnf install -y nodejs20 git

REPO_DIR=/opt/velo-describe-api
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
