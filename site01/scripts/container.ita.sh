#!/usr/bin/env bash
set -euo pipefail

docker stop portal || true
docker rm portal || true
docker rmi portal || true

# set "DOCKER_BUILDKIT=1" && docker build -t portal:latest --ssh default=$HOME/.ssh/id_ed25519 .
# docker run -d --network=netlab01 --name portal portal:latest
set "DOCKER_BUILDKIT=1" && docker compose -f docker-compose-ita.yaml up --build --detach
# docker logs portal --follow
