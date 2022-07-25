#!/bin/bash
# Build script
set -eo pipefail

build_tag=$1
name='ui-static'
node=$2
org=$3
image_tag=$4


docker build -f Dockerfile --label commitHash=$(git rev-parse --short HEAD) --build-arg build_tag=${image_tag} -t ${org}/${name}:${build_tag} .
echo {\"image_name\" : \"${name}\", \"image_tag\" : \"${build_tag}\", \"node_name\" : \"$node\"} > metadata.json
