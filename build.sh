#!/bin/bash
# Build script
set -eo pipefail

build_tag=$1
name=$2
node=$3
org=$4
image_tag=$5


docker build -f ${dockerfile_name} --label commitHash=$(git rev-parse --short HEAD) --build-arg build_tag=${image_tag} --build-arg org=${org} --build-arg portal_dir=${portal_dir} --build-arg image_name=${image_name} -t ${org}/${name}:${build_tag} .
echo {\"image_name\" : \"${name}\", \"image_tag\" : \"${build_tag}\", \"node_name\" : \"$node\"} > metadata.json
