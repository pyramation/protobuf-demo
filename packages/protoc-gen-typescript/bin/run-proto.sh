#!/bin/bash

PROTO_PATH=./proto
OUT_DIR=./src/proto

GOPATH=./go

# protoc-gen-tstypes: program not found or is not executable
# PATH=$PATH:`pwd`/go/bin

FILES=`find proto -type f -name "*.proto"`
mkdir -p ${OUT_DIR}
for x in ${FILES}
do
protoc \
 --plugin="./go/bin/protoc-gen-tstypes" \
 --tstypes_out=${OUT_DIR} \
 --proto_path="${PROTO_PATH}" \
 ${x}
done
