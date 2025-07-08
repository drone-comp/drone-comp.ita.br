#!/usr/bin/env bash
set -euo pipefail

docker stop drone || true
docker rm drone || true
docker rmi drone || true

# set "DOCKER_BUILDKIT=1" && docker build -t drone:latest --ssh default=$HOME/.ssh/id_ed25519 .
# docker run -d --network=netlab01 --name drone drone:latest
set "DOCKER_BUILDKIT=1" && docker compose -f docker-compose-drone.yaml up --build --detach
# docker logs drone --follow
