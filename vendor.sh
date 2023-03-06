#!/bin/bash
# Helper script to download aws-appsync Node packages

set -e -o pipefail

rm -rf aws-appsync
mkdir aws-appsync

for pkg in utils eslint-plugin; do
    npm pack @aws-appsync/$pkg
    tar -xzvf aws-appsync-$pkg-*.tgz
    mv package aws-appsync/$pkg
done

rm -rf *.tgz
