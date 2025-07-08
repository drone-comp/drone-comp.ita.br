#!/bin/bash

mkdir -p volumes/portaldata

mkdir -p volumes/cedsdata
mkdir -p volumes/dronedata
mkdir -p volumes/inovalabdata
mkdir -p volumes/pgcompdata

docker volume create -d local -o type=none -o device="/home/gpes/volumes/portaldata" -o o=bind portaldata

docker volume create -d local -o type=none -o device="/home/gpes/volumes/cedsdata" -o o=bind cedsdata
docker volume create -d local -o type=none -o device="/home/gpes/volumes/dronedata" -o o=bind dronedata
docker volume create -d local -o type=none -o device="/home/gpes/volumes/inovalabdata" -o o=bind inovalabdata
docker volume create -d local -o type=none -o device="/home/gpes/volumes/pgcompdata" -o o=bind pgcompdata
