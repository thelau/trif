#!/bin/bash

# Generate self-signed SSL certificate for HTTPS local server

echo "Generating self-signed SSL certificate..."
openssl req -x509 -newkey rsa:2048 -nodes -keyout key.pem -out cert.pem -subj "/C=US/ST=California/L=San Francisco/O=Trif/CN=localhost" 2>&1 | grep -v "writing new" | grep -v "Subject Alternative Name"

if [ -f key.pem ] && [ -f cert.pem ]; then
    echo "✓ SSL certificates generated"
    echo ""
    echo "Files created:"
    ls -lh key.pem cert.pem
else
    echo "✗ Failed to generate certificates"
    exit 1
fi
