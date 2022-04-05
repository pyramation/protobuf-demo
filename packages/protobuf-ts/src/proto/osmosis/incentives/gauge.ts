// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "osmosis/incentives/gauge.proto" (package "osmosis.incentives", syntax proto3),// tslint:disable
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
import { Duration } from "../../google/protobuf/duration";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { QueryCondition } from "../lockup/lock";
/**
 * @generated from protobuf message osmosis.incentives.Gauge
 */
export interface Gauge {
    /**
     * unique ID of a Gauge
     *
     * @generated from protobuf field: uint64 id = 1;
     */
    id: bigint;
    /**
     * flag to show if it's perpetual or multi-epoch
     * distribution incentives by third party
     *
     * @generated from protobuf field: bool is_perpetual = 2;
     */
    isPerpetual: boolean;
    /**
     * Rewards are distributed to lockups that are are returned by at least one of
     * these queries
     *
     * @generated from protobuf field: osmosis.lockup.QueryCondition distribute_to = 3;
     */
    distributeTo?: QueryCondition;
    /**
     * total amount of Coins that has been in the gauge.
     * can distribute multiple coins
     *
     * @generated from protobuf field: repeated cosmos.base.v1beta1.Coin coins = 4;
     */
    coins: Coin[];
    /**
     * distribution start time
     *
     * @generated from protobuf field: google.protobuf.Timestamp start_time = 5;
     */
    startTime?: Timestamp;
    /**
     * number of epochs distribution will be done
     *
     * @generated from protobuf field: uint64 num_epochs_paid_over = 6;
     */
    numEpochsPaidOver: bigint;
    /**
     * number of epochs distributed already
     *
     * @generated from protobuf field: uint64 filled_epochs = 7;
     */
    filledEpochs: bigint;
    /**
     * already distributed coins
     *
     * @generated from protobuf field: repeated cosmos.base.v1beta1.Coin distributed_coins = 8;
     */
    distributedCoins: Coin[];
}
/**
 * @generated from protobuf message osmosis.incentives.LockableDurationsInfo
 */
export interface LockableDurationsInfo {
    /**
     * @generated from protobuf field: repeated google.protobuf.Duration lockable_durations = 1;
     */
    lockableDurations: Duration[];
}
// @generated message type with reflection information, may provide speed optimized methods
class Gauge$Type extends MessageType<Gauge> {
    constructor() {
        super("osmosis.incentives.Gauge", [
            { no: 1, name: "id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "is_perpetual", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "distribute_to", kind: "message", T: () => QueryCondition, options: { "gogoproto.nullable": false } },
            { no: 4, name: "coins", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Coin, options: { "gogoproto.nullable": false, "gogoproto.castrepeated": "github.com/cosmos/cosmos-sdk/types.Coins" } },
            { no: 5, name: "start_time", kind: "message", T: () => Timestamp, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"start_time\"", "gogoproto.stdtime": true } },
            { no: 6, name: "num_epochs_paid_over", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "filled_epochs", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "distributed_coins", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Coin, options: { "gogoproto.nullable": false, "gogoproto.castrepeated": "github.com/cosmos/cosmos-sdk/types.Coins" } }
        ]);
    }
    create(value?: PartialMessage<Gauge>): Gauge {
        const message = { id: 0n, isPerpetual: false, coins: [], numEpochsPaidOver: 0n, filledEpochs: 0n, distributedCoins: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Gauge>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Gauge): Gauge {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 id */ 1:
                    message.id = reader.uint64().toBigInt();
                    break;
                case /* bool is_perpetual */ 2:
                    message.isPerpetual = reader.bool();
                    break;
                case /* osmosis.lockup.QueryCondition distribute_to */ 3:
                    message.distributeTo = QueryCondition.internalBinaryRead(reader, reader.uint32(), options, message.distributeTo);
                    break;
                case /* repeated cosmos.base.v1beta1.Coin coins */ 4:
                    message.coins.push(Coin.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* google.protobuf.Timestamp start_time */ 5:
                    message.startTime = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.startTime);
                    break;
                case /* uint64 num_epochs_paid_over */ 6:
                    message.numEpochsPaidOver = reader.uint64().toBigInt();
                    break;
                case /* uint64 filled_epochs */ 7:
                    message.filledEpochs = reader.uint64().toBigInt();
                    break;
                case /* repeated cosmos.base.v1beta1.Coin distributed_coins */ 8:
                    message.distributedCoins.push(Coin.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: Gauge, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 id = 1; */
        if (message.id !== 0n)
            writer.tag(1, WireType.Varint).uint64(message.id);
        /* bool is_perpetual = 2; */
        if (message.isPerpetual !== false)
            writer.tag(2, WireType.Varint).bool(message.isPerpetual);
        /* osmosis.lockup.QueryCondition distribute_to = 3; */
        if (message.distributeTo)
            QueryCondition.internalBinaryWrite(message.distributeTo, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated cosmos.base.v1beta1.Coin coins = 4; */
        for (let i = 0; i < message.coins.length; i++)
            Coin.internalBinaryWrite(message.coins[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp start_time = 5; */
        if (message.startTime)
            Timestamp.internalBinaryWrite(message.startTime, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* uint64 num_epochs_paid_over = 6; */
        if (message.numEpochsPaidOver !== 0n)
            writer.tag(6, WireType.Varint).uint64(message.numEpochsPaidOver);
        /* uint64 filled_epochs = 7; */
        if (message.filledEpochs !== 0n)
            writer.tag(7, WireType.Varint).uint64(message.filledEpochs);
        /* repeated cosmos.base.v1beta1.Coin distributed_coins = 8; */
        for (let i = 0; i < message.distributedCoins.length; i++)
            Coin.internalBinaryWrite(message.distributedCoins[i], writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.incentives.Gauge
 */
export const Gauge = new Gauge$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LockableDurationsInfo$Type extends MessageType<LockableDurationsInfo> {
    constructor() {
        super("osmosis.incentives.LockableDurationsInfo", [
            { no: 1, name: "lockable_durations", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Duration, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"lockable_durations\"", "gogoproto.stdduration": true } }
        ]);
    }
    create(value?: PartialMessage<LockableDurationsInfo>): LockableDurationsInfo {
        const message = { lockableDurations: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LockableDurationsInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LockableDurationsInfo): LockableDurationsInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated google.protobuf.Duration lockable_durations */ 1:
                    message.lockableDurations.push(Duration.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: LockableDurationsInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated google.protobuf.Duration lockable_durations = 1; */
        for (let i = 0; i < message.lockableDurations.length; i++)
            Duration.internalBinaryWrite(message.lockableDurations[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.incentives.LockableDurationsInfo
 */
export const LockableDurationsInfo = new LockableDurationsInfo$Type();