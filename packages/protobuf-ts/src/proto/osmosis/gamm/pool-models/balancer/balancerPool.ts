// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "osmosis/gamm/pool-models/balancer/balancerPool.proto" (package "osmosis.gamm.v1beta1", syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../../google/protobuf/duration";
import { Timestamp } from "../../../../google/protobuf/timestamp";
/**
 * Parameters for changing the weights in a balancer pool smoothly from
 * a start weight and end weight over a period of time.
 * Currently, the only smooth change supported is linear changing between
 * the two weights, but more types may be added in the future.
 * When these parameters are set, the weight w(t) for pool time `t` is the
 * following:
 *   t <= start_time: w(t) = initial_pool_weights
 *   start_time < t <= start_time + duration:
 *     w(t) = initial_pool_weights + (t - start_time) *
 *       (target_pool_weights - initial_pool_weights) / (duration)
 *   t > start_time + duration: w(t) = target_pool_weights
 *
 * @generated from protobuf message osmosis.gamm.v1beta1.SmoothWeightChangeParams
 */
export interface SmoothWeightChangeParams {
    /**
     * The start time for beginning the weight change.
     * If a parameter change / pool instantiation leaves this blank,
     * it should be generated by the state_machine as the current time.
     *
     * @generated from protobuf field: google.protobuf.Timestamp start_time = 1;
     */
    startTime?: Timestamp;
    /**
     * Duration for the weights to change over
     *
     * @generated from protobuf field: google.protobuf.Duration duration = 2;
     */
    duration?: Duration;
    /**
     * The initial pool weights. These are copied from the pool's settings
     * at the time of weight change instantiation.
     * The amount PoolAsset.token.amount field is ignored if present,
     * future type refactorings should just have a type with the denom & weight
     * here.
     *
     * @generated from protobuf field: repeated osmosis.gamm.v1beta1.PoolAsset initialPoolWeights = 3;
     */
    initialPoolWeights: PoolAsset[];
    /**
     * The target pool weights. The pool weights will change linearly with respect
     * to time between start_time, and start_time + duration. The amount
     * PoolAsset.token.amount field is ignored if present, future type
     * refactorings should just have a type with the denom & weight here.
     *
     * @generated from protobuf field: repeated osmosis.gamm.v1beta1.PoolAsset targetPoolWeights = 4;
     */
    targetPoolWeights: PoolAsset[]; // Intermediate variable for the 'slope' of pool weights. This is equal to
    // (target_pool_weights - initial_pool_weights) / (duration)
    // TODO: Work out precision, and decide if this is good to add
    // repeated PoolAsset poolWeightSlope = 5 [
    //  (gogoproto.moretags) = "yaml:\"pool_weight_slope\"",
    //  (gogoproto.nullable) = false
    // ];
}
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 *
 * @generated from protobuf message osmosis.gamm.v1beta1.PoolParams
 */
export interface PoolParams {
    /**
     * @generated from protobuf field: string swapFee = 1;
     */
    swapFee: string;
    /**
     * @generated from protobuf field: string exitFee = 2;
     */
    exitFee: string;
    /**
     * @generated from protobuf field: osmosis.gamm.v1beta1.SmoothWeightChangeParams smoothWeightChangeParams = 3;
     */
    smoothWeightChangeParams?: SmoothWeightChangeParams;
}
/**
 * Pool asset is an internal struct that combines the amount of the
 * token in the pool, and its balancer weight.
 * This is an awkward packaging of data,
 * and should be revisited in a future state migration.
 *
 * @generated from protobuf message osmosis.gamm.v1beta1.PoolAsset
 */
export interface PoolAsset {
    /**
     * Coins we are talking about,
     * the denomination must be unique amongst all PoolAssets for this pool.
     *
     * @generated from protobuf field: cosmos.base.v1beta1.Coin token = 1;
     */
    token?: Coin;
    /**
     * Weight that is not normalized. This weight must be less than 2^50
     *
     * @generated from protobuf field: string weight = 2;
     */
    weight: string;
}
/**
 * @generated from protobuf message osmosis.gamm.v1beta1.Pool
 */
export interface Pool {
    /**
     * @generated from protobuf field: string address = 1;
     */
    address: string;
    /**
     * @generated from protobuf field: uint64 id = 2;
     */
    id: bigint;
    /**
     * @generated from protobuf field: osmosis.gamm.v1beta1.PoolParams poolParams = 3;
     */
    poolParams?: PoolParams;
    /**
     * This string specifies who will govern the pool in the future.
     * Valid forms of this are:
     * {token name},{duration}
     * {duration}
     * where {token name} if specified is the token which determines the
     * governor, and if not specified is the LP token for this pool.duration is
     * a time specified as 0w,1w,2w, etc. which specifies how long the token
     * would need to be locked up to count in governance. 0w means no lockup.
     * TODO: Further improve these docs
     *
     * @generated from protobuf field: string future_pool_governor = 4;
     */
    futurePoolGovernor: string;
    /**
     * sum of all LP tokens sent out
     *
     * @generated from protobuf field: cosmos.base.v1beta1.Coin totalShares = 5;
     */
    totalShares?: Coin;
    /**
     * These are assumed to be sorted by denomiation.
     * They contain the pool asset and the information about the weight
     *
     * @generated from protobuf field: repeated osmosis.gamm.v1beta1.PoolAsset poolAssets = 6;
     */
    poolAssets: PoolAsset[];
    /**
     * sum of all non-normalized pool weights
     *
     * @generated from protobuf field: string totalWeight = 7;
     */
    totalWeight: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class SmoothWeightChangeParams$Type extends MessageType<SmoothWeightChangeParams> {
    constructor() {
        super("osmosis.gamm.v1beta1.SmoothWeightChangeParams", [
            { no: 1, name: "start_time", kind: "message", T: () => Timestamp, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"start_time\"", "gogoproto.stdtime": true } },
            { no: 2, name: "duration", kind: "message", T: () => Duration, options: { "gogoproto.nullable": false, "gogoproto.jsontag": "duration,omitempty", "gogoproto.moretags": "yaml:\"duration\"", "gogoproto.stdduration": true } },
            { no: 3, name: "initialPoolWeights", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PoolAsset, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"initial_pool_weights\"" } },
            { no: 4, name: "targetPoolWeights", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PoolAsset, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"target_pool_weights\"" } }
        ]);
    }
    create(value?: PartialMessage<SmoothWeightChangeParams>): SmoothWeightChangeParams {
        const message = { initialPoolWeights: [], targetPoolWeights: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SmoothWeightChangeParams>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SmoothWeightChangeParams): SmoothWeightChangeParams {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.Timestamp start_time */ 1:
                    message.startTime = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.startTime);
                    break;
                case /* google.protobuf.Duration duration */ 2:
                    message.duration = Duration.internalBinaryRead(reader, reader.uint32(), options, message.duration);
                    break;
                case /* repeated osmosis.gamm.v1beta1.PoolAsset initialPoolWeights */ 3:
                    message.initialPoolWeights.push(PoolAsset.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated osmosis.gamm.v1beta1.PoolAsset targetPoolWeights */ 4:
                    message.targetPoolWeights.push(PoolAsset.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: SmoothWeightChangeParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.Timestamp start_time = 1; */
        if (message.startTime)
            Timestamp.internalBinaryWrite(message.startTime, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration duration = 2; */
        if (message.duration)
            Duration.internalBinaryWrite(message.duration, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* repeated osmosis.gamm.v1beta1.PoolAsset initialPoolWeights = 3; */
        for (let i = 0; i < message.initialPoolWeights.length; i++)
            PoolAsset.internalBinaryWrite(message.initialPoolWeights[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated osmosis.gamm.v1beta1.PoolAsset targetPoolWeights = 4; */
        for (let i = 0; i < message.targetPoolWeights.length; i++)
            PoolAsset.internalBinaryWrite(message.targetPoolWeights[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.gamm.v1beta1.SmoothWeightChangeParams
 */
export const SmoothWeightChangeParams = new SmoothWeightChangeParams$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PoolParams$Type extends MessageType<PoolParams> {
    constructor() {
        super("osmosis.gamm.v1beta1.PoolParams", [
            { no: 1, name: "swapFee", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Dec", "gogoproto.moretags": "yaml:\"swap_fee\"" } },
            { no: 2, name: "exitFee", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Dec", "gogoproto.moretags": "yaml:\"exit_fee\"" } },
            { no: 3, name: "smoothWeightChangeParams", kind: "message", T: () => SmoothWeightChangeParams, options: { "gogoproto.nullable": true, "gogoproto.moretags": "yaml:\"smooth_weight_change_params\"" } }
        ]);
    }
    create(value?: PartialMessage<PoolParams>): PoolParams {
        const message = { swapFee: "", exitFee: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PoolParams>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PoolParams): PoolParams {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string swapFee */ 1:
                    message.swapFee = reader.string();
                    break;
                case /* string exitFee */ 2:
                    message.exitFee = reader.string();
                    break;
                case /* osmosis.gamm.v1beta1.SmoothWeightChangeParams smoothWeightChangeParams */ 3:
                    message.smoothWeightChangeParams = SmoothWeightChangeParams.internalBinaryRead(reader, reader.uint32(), options, message.smoothWeightChangeParams);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: PoolParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string swapFee = 1; */
        if (message.swapFee !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.swapFee);
        /* string exitFee = 2; */
        if (message.exitFee !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.exitFee);
        /* osmosis.gamm.v1beta1.SmoothWeightChangeParams smoothWeightChangeParams = 3; */
        if (message.smoothWeightChangeParams)
            SmoothWeightChangeParams.internalBinaryWrite(message.smoothWeightChangeParams, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.gamm.v1beta1.PoolParams
 */
export const PoolParams = new PoolParams$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PoolAsset$Type extends MessageType<PoolAsset> {
    constructor() {
        super("osmosis.gamm.v1beta1.PoolAsset", [
            { no: 1, name: "token", kind: "message", T: () => Coin, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"token\"" } },
            { no: 2, name: "weight", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Int", "gogoproto.moretags": "yaml:\"weight\"" } }
        ]);
    }
    create(value?: PartialMessage<PoolAsset>): PoolAsset {
        const message = { weight: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PoolAsset>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PoolAsset): PoolAsset {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* cosmos.base.v1beta1.Coin token */ 1:
                    message.token = Coin.internalBinaryRead(reader, reader.uint32(), options, message.token);
                    break;
                case /* string weight */ 2:
                    message.weight = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: PoolAsset, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* cosmos.base.v1beta1.Coin token = 1; */
        if (message.token)
            Coin.internalBinaryWrite(message.token, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string weight = 2; */
        if (message.weight !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.weight);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.gamm.v1beta1.PoolAsset
 */
export const PoolAsset = new PoolAsset$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Pool$Type extends MessageType<Pool> {
    constructor() {
        super("osmosis.gamm.v1beta1.Pool", [
            { no: 1, name: "address", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"address\"" } },
            { no: 2, name: "id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "poolParams", kind: "message", T: () => PoolParams, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"balancer_pool_params\"" } },
            { no: 4, name: "future_pool_governor", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"future_pool_governor\"" } },
            { no: 5, name: "totalShares", kind: "message", T: () => Coin, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"total_shares\"" } },
            { no: 6, name: "poolAssets", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PoolAsset, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"pool_assets\"" } },
            { no: 7, name: "totalWeight", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Int", "gogoproto.moretags": "yaml:\"total_weight\"" } }
        ], { "cosmos_proto.implements_interface": ["PoolI"], "gogoproto.goproto_getters": false, "gogoproto.goproto_stringer": false });
    }
    create(value?: PartialMessage<Pool>): Pool {
        const message = { address: "", id: 0n, futurePoolGovernor: "", poolAssets: [], totalWeight: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Pool>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Pool): Pool {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string address */ 1:
                    message.address = reader.string();
                    break;
                case /* uint64 id */ 2:
                    message.id = reader.uint64().toBigInt();
                    break;
                case /* osmosis.gamm.v1beta1.PoolParams poolParams */ 3:
                    message.poolParams = PoolParams.internalBinaryRead(reader, reader.uint32(), options, message.poolParams);
                    break;
                case /* string future_pool_governor */ 4:
                    message.futurePoolGovernor = reader.string();
                    break;
                case /* cosmos.base.v1beta1.Coin totalShares */ 5:
                    message.totalShares = Coin.internalBinaryRead(reader, reader.uint32(), options, message.totalShares);
                    break;
                case /* repeated osmosis.gamm.v1beta1.PoolAsset poolAssets */ 6:
                    message.poolAssets.push(PoolAsset.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* string totalWeight */ 7:
                    message.totalWeight = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Pool, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string address = 1; */
        if (message.address !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.address);
        /* uint64 id = 2; */
        if (message.id !== 0n)
            writer.tag(2, WireType.Varint).uint64(message.id);
        /* osmosis.gamm.v1beta1.PoolParams poolParams = 3; */
        if (message.poolParams)
            PoolParams.internalBinaryWrite(message.poolParams, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* string future_pool_governor = 4; */
        if (message.futurePoolGovernor !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.futurePoolGovernor);
        /* cosmos.base.v1beta1.Coin totalShares = 5; */
        if (message.totalShares)
            Coin.internalBinaryWrite(message.totalShares, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* repeated osmosis.gamm.v1beta1.PoolAsset poolAssets = 6; */
        for (let i = 0; i < message.poolAssets.length; i++)
            PoolAsset.internalBinaryWrite(message.poolAssets[i], writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* string totalWeight = 7; */
        if (message.totalWeight !== "")
            writer.tag(7, WireType.LengthDelimited).string(message.totalWeight);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.gamm.v1beta1.Pool
 */
export const Pool = new Pool$Type();
