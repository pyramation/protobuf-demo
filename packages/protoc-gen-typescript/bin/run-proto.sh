#!/bin/bash

PROTO_PATH=./proto
OUT_DIR=./src/proto

FILES=`find proto/osmosis -type f -name "*.proto"`

# FILES="proto/osmosis/mint/v1beta1/query.proto proto/osmosis/mint/v1beta1/genesis.proto proto/osmosis/mint/v1beta1/mint.proto proto/osmosis/incentives/tx.proto proto/osmosis/incentives/gauge.proto proto/osmosis/incentives/query.proto proto/osmosis/incentives/genesis.proto proto/osmosis/incentives/params.proto proto/osmosis/gamm/pool-models/balancer/balancerPool.proto proto/osmosis/gamm/v1beta1/tx.proto proto/osmosis/gamm/v1beta1/query.proto proto/osmosis/gamm/v1beta1/genesis.proto proto/osmosis/superfluid/tx.proto proto/osmosis/superfluid/gov.proto proto/osmosis/superfluid/query.proto proto/osmosis/superfluid/genesis.proto proto/osmosis/superfluid/superfluid.proto proto/osmosis/superfluid/params.proto proto/osmosis/epochs/query.proto proto/osmosis/epochs/genesis.proto proto/osmosis/txfees/v1beta1/gov.proto proto/osmosis/txfees/v1beta1/feetoken.proto proto/osmosis/txfees/v1beta1/query.proto proto/osmosis/txfees/v1beta1/genesis.proto proto/osmosis/pool-incentives/v1beta1/gov.proto proto/osmosis/pool-incentives/v1beta1/incentives.proto proto/osmosis/pool-incentives/v1beta1/query.proto proto/osmosis/pool-incentives/v1beta1/genesis.proto proto/osmosis/lockup/tx.proto proto/osmosis/lockup/query.proto proto/osmosis/lockup/genesis.proto proto/osmosis/lockup/lock.proto proto/osmosis/claim/v1beta1/claim.proto proto/osmosis/claim/v1beta1/query.proto proto/osmosis/claim/v1beta1/genesis.proto proto/osmosis/claim/v1beta1/params.proto proto/osmosis/store/v1beta1/tree.proto"

# when running files as the input, I was getting this error, so I instead created a for loop
# osmosis/gamm/v1beta1/tx.proto:9:9: "osmosis.gamm.v1beta1.Msg" is already defined in file "osmosis/gamm/pool-models/balancer/tx.proto".
# FILES=proto/osmosis/gamm/v1beta1/tx.proto

mkdir -p ${OUT_DIR}

# protoc \
#     --plugin="./node_modules/.bin/protoc-gen-ts_proto" \
#     --ts_proto_out="${OUT_DIR}" \
#     --proto_path="${PROTO_PATH}" \
#     --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true" \
#     ${FILES}

# # --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true,outputTypeRegistry=true,outputSchema=true" \

for x in ${FILES}
do
protoc \
    --plugin="./node_modules/.bin/protoc-gen-ts_proto" \
    --ts_proto_out="${OUT_DIR}" \
    --proto_path="${PROTO_PATH}" \
    --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true" \
    ${x}    
done
