#!/bin/bash

# Port provided by Render, defaults to 4000 if not set
export PORT=${PORT:-4000}

# Tell API Gateway how to reach the local AI Service internally
export AI_SERVICE_URL="http://127.0.0.1:8000"

# Tell both apps where the shared storage is
export SHARED_STORAGE_PATH="/app/shared_storage"
export SHARED_STORAGE_DIR="/app/shared_storage"

echo "Starting Django AI Service internally on port 8000..."
cd /app/ai-service
# Run django migrations just in case
python manage.py migrate
# Bind Gunicorn to localhost so only API Gateway can talk to it
gunicorn ai_service.wsgi:application --bind 127.0.0.1:8000 &

echo "Starting API Gateway on Render port $PORT..."
cd /app/api-gateway
# Start the node server (this receives the public traffic from Vercel)
npm start
