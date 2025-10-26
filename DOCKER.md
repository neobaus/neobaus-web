# Docker Setup

This project is dockerized and ready to run in containers. The setup works seamlessly on both Windows and macOS (as well as Linux).

## Quick Start

### Development Mode (with Hot Reload)

For development with auto-reload on file changes:

```bash
docker-compose -f docker-compose.dev.yml up
```

This will:

- Mount your source code as a volume for hot reloading
- Start the development server
- Auto-reload when you save changes
- Use resource limits (1GB memory, 10% CPU)

### Production Mode

For production builds:

```bash
docker-compose up -d
```

This will build and run the production image.

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

## Auto-Reload in Development

The `docker-compose.dev.yml` file is configured for development with hot reloading:

- **Volume mounting**: Your source code is mounted into the container
- **Hot reloading**: Changes to your files trigger automatic reloads in the browser
- **Faster iteration**: No need to rebuild the image for code changes

To stop and restart:

```bash
docker-compose -f docker-compose.dev.yml down
docker-compose -f docker-compose.dev.yml up
```

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
