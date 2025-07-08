#!/usr/bin/env bash
set -euo pipefail

docker stop ceds || true
docker rm ceds || true
docker rmi ceds || true

# set "DOCKER_BUILDKIT=1" && docker build -t ceds:latest --ssh default=$HOME/.ssh/id_ed25519 .
# docker run -d --network=netlab01 --name ceds ceds:latest
set "DOCKER_BUILDKIT=1" && docker compose -f docker-compose-ceds.yaml up --build --detach
# docker logs ceds --follow
