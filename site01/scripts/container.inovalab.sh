#!/usr/bin/env bash
set -euo pipefail

docker stop inovalab || true
docker rm inovalab || true
docker rmi inovalab || true

# set "DOCKER_BUILDKIT=1" && docker build -t inovalab:latest --ssh default=$HOME/.ssh/id_ed25519 .
# docker run -d --network=netlab01 --name inovalab inovalab:latest
set "DOCKER_BUILDKIT=1" && docker compose -f docker-compose-inovalab.yaml up --build --detach
# docker logs inovalab --follow
