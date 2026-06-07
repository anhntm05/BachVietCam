FROM python:3.11-slim

# Install system dependencies including Node.js and librosa requirements (libsndfile1)
RUN apt-get update && apt-get install -y \
    curl \
    libsndfile1 \
    ffmpeg \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy the entire project
COPY . .

# 1. Setup API Gateway
WORKDIR /app/api-gateway
RUN npm install
RUN npm run build

# 2. Setup AI Service
WORKDIR /app/ai-service
RUN pip install --no-cache-dir -r requirements.txt

# 3. Create shared storage directory
RUN mkdir -p /app/shared_storage/uploads /app/shared_storage/templates

# 4. Setup Startup Script
WORKDIR /app
COPY start.sh /app/start.sh
RUN chmod +x /app/start.sh

# Start both services
CMD ["/app/start.sh"]
