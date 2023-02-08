#!/bin/bash

set -e -o pipefail

rm -rf aws-appsync-utils
npm pack @aws-appsync/utils
tar -xzvf aws-appsync-utils-*.tgz
mv package aws-appsync-utils
rm -rf *.tgz
