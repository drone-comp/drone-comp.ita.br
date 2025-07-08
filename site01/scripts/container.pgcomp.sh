#!/usr/bin/env bash
set -euo pipefail

docker stop pgcomp || true
docker rm pgcomp || true
docker rmi pgcomp || true

# set "DOCKER_BUILDKIT=1" && docker build -t pgcomp:latest --ssh default=$HOME/.ssh/id_ed25519 .
# docker run -d --network=netlab01 --name pgcomp pgcomp:latest
set "DOCKER_BUILDKIT=1" && docker compose -f docker-compose-pgcomp.yaml up --build --detach
# docker logs pgcomp --follow
