#!/bin/bash

PROTO_PATH=./proto
OUT_DIR=./src/proto

FILES=`find proto -type f -name "*.proto"`
mkdir -p ${OUT_DIR}

for x in ${FILES}
do
    npx protoc --ts_out ${OUT_DIR} --proto_path ${PROTO_PATH} ${x}
done
