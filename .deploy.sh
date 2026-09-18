#!/bin/bash

set -e

echo "=================================="
echo "Updating source code..."
echo "=================================="
sudo git pull

echo "=================================="
echo "Installing dependencies..."
echo "=================================="
sudo npm install

echo "=================================="
echo "Building React application..."
echo "=================================="
sudo npm run build

echo "=================================="
echo "Deploying build..."
echo "=================================="
sudo cp -r dist/* /usr/share/nginx/html


sudo nginx -t

echo "=================================="
echo "Reloading Nginx..."
echo "=================================="
sudo systemctl reload nginx

echo ""
echo "=================================="
echo "✅ Deployment completed successfully!"
echo "=================================="

echo ""
echo "Application URL:"