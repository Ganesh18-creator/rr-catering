# Docker Deployment Guide - RR Catering

This guide explains how to run the RR Catering website using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose (optional, but recommended)

## Quick Start

### Option 1: Using Docker Compose (Recommended)

1. **Build and run the container:**
   ```bash
   docker-compose up -d
   ```

2. **Access the website:**
   Open your browser and go to: http://localhost:3000

3. **Stop the container:**
   ```bash
   docker-compose down
   ```

### Option 2: Using Docker CLI

1. **Build the Docker image:**
   ```bash
   docker build -t rr-catering .
   ```

2. **Run the container:**
   ```bash
   docker run -d -p 3000:3000 --name rr-catering-app rr-catering
   ```

3. **Access the website:**
   Open your browser and go to: http://localhost:3000

4. **Stop the container:**
   ```bash
   docker stop rr-catering-app
   docker rm rr-catering-app
   ```

## Docker Commands Reference

### View running containers
```bash
docker ps
```

### View container logs
```bash
docker logs rr-catering-app
```

### Follow logs in real-time
```bash
docker logs -f rr-catering-app
```

### Restart the container
```bash
docker restart rr-catering-app
```

### Execute commands inside the container
```bash
docker exec -it rr-catering-app sh
```

### Remove the image
```bash
docker rmi rr-catering
```

## Production Deployment

### Build for production
```bash
docker build -t rr-catering:production .
```

### Run with environment variables
```bash
docker run -d \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_SITE_URL=https://rrcatering.com \
  --name rr-catering-app \
  rr-catering:production
```

### Using Docker Compose with custom environment
Create a `.env` file:
```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://rrcatering.com
NEXT_PUBLIC_PHONE=+919876543210
NEXT_PUBLIC_EMAIL=info@rrcatering.com
```

Then run:
```bash
docker-compose --env-file .env up -d
```

## Docker Image Optimization

The Dockerfile uses multi-stage builds to create an optimized production image:

- **Stage 1 (deps)**: Installs dependencies
- **Stage 2 (builder)**: Builds the Next.js application
- **Stage 3 (runner)**: Creates minimal production image

### Image size optimization features:
- Uses Alpine Linux (minimal base image)
- Multi-stage build reduces final image size
- Only production dependencies included
- Standalone output mode for Next.js

## Troubleshooting

### Container won't start
Check logs:
```bash
docker logs rr-catering-app
```

### Port already in use
Change the port mapping:
```bash
docker run -d -p 8080:3000 --name rr-catering-app rr-catering
```

### Rebuild after code changes
```bash
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Clear all Docker resources
```bash
docker system prune -a
```

## Health Check

Check if the container is healthy:
```bash
curl http://localhost:3000
```

## Deployment to Cloud

### Deploy to AWS ECS
1. Push image to ECR
2. Create ECS task definition
3. Deploy to ECS cluster

### Deploy to Google Cloud Run
```bash
gcloud run deploy rr-catering \
  --image gcr.io/PROJECT_ID/rr-catering \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

### Deploy to Azure Container Instances
```bash
az container create \
  --resource-group myResourceGroup \
  --name rr-catering \
  --image rr-catering:latest \
  --dns-name-label rr-catering \
  --ports 3000
```

## Performance Tips

1. **Use Docker BuildKit** for faster builds:
   ```bash
   DOCKER_BUILDKIT=1 docker build -t rr-catering .
   ```

2. **Layer caching**: The Dockerfile is optimized to cache dependencies

3. **Resource limits**: Set memory and CPU limits
   ```bash
   docker run -d \
     --memory="512m" \
     --cpus="1.0" \
     -p 3000:3000 \
     rr-catering
   ```

## Security Best Practices

1. ✅ Non-root user (nextjs user)
2. ✅ Minimal base image (Alpine)
3. ✅ No unnecessary packages
4. ✅ .dockerignore to exclude sensitive files
5. ✅ Production-only dependencies

## Support

For issues or questions:
- Check container logs: `docker logs rr-catering-app`
- Verify port availability: `lsof -i :3000`
- Ensure Docker is running: `docker info`
