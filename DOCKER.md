# Docker Setup

This project is dockerized and ready to run in containers. The setup works seamlessly on both Windows and macOS (as well as Linux).

## Quick Start

### Build and Run with Docker Compose

```bash
docker-compose up -d
```

This will build the image and start the container. The app will be available at `http://localhost:3000`

### Build and Run with Docker

```bash
# Build the image
docker build -t neobaus .

# Run the container
docker run -p 3000:3000 neobaus
```

## Docker Commands

### View Logs

```bash
docker-compose logs -f web
```

### Stop the Container

```bash
docker-compose down
```

### Rebuild and Restart

```bash
docker-compose up -d --build
```

### Run in Development Mode

If you want to run with hot-reloading in Docker, you can modify the docker-compose.yml:

```yaml
command: npm run dev
```

Then rebuild and restart.

## Production Deployment

The Dockerfile uses a multi-stage build for optimal image size:

- **deps**: Installs dependencies
- **builder**: Builds the Next.js application
- **runner**: Final production image with only necessary files

The production image is built with `output: 'standalone'` in next.config.mjs for smaller image size.

## Resource Limits

The container is configured with resource limits:

- **Memory**: 1GB limit, 512MB reserved
- **CPU**: 10% limit, 5% reserved

## Platform Compatibility

The Docker setup uses `linux/amd64` platform for cross-platform compatibility. It works on:

- ✅ Windows (with Docker Desktop)
- ✅ macOS (Intel and Apple Silicon with Docker Desktop)
- ✅ Linux

The Alpine-based images provide a consistent and minimal footprint across all platforms.
