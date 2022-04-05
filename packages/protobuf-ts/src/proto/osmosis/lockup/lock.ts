// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "osmosis/lockup/lock.proto" (package "osmosis.lockup", syntax proto3),// tslint:disable
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
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Duration } from "../../google/protobuf/duration";
/**
 * PeriodLock is a single unit of lock by period. It's a record of locked coin
 * at a specific time. It stores owner, duration, unlock time and the amount of
 * coins locked.
 *
 * @generated from protobuf message osmosis.lockup.PeriodLock
 */
export interface PeriodLock {
    /**
     * @generated from protobuf field: uint64 ID = 1 [json_name = "ID"];
     */
    iD: bigint;
    /**
     * @generated from protobuf field: string owner = 2;
     */
    owner: string;
    /**
     * @generated from protobuf field: google.protobuf.Duration duration = 3;
     */
    duration?: Duration;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp end_time = 4;
     */
    endTime?: Timestamp;
    /**
     * @generated from protobuf field: repeated cosmos.base.v1beta1.Coin coins = 5;
     */
    coins: Coin[];
}
/**
 * @generated from protobuf message osmosis.lockup.QueryCondition
 */
export interface QueryCondition {
    /**
     * type of lock query, ByLockDuration | ByLockTime
     *
     * @generated from protobuf field: osmosis.lockup.LockQueryType lock_query_type = 1;
     */
    lockQueryType: LockQueryType;
    /**
     * What token denomination are we looking for lockups of
     *
     * @generated from protobuf field: string denom = 2;
     */
    denom: string;
    /**
     * valid when query condition is ByDuration
     *
     * @generated from protobuf field: google.protobuf.Duration duration = 3;
     */
    duration?: Duration;
    /**
     * valid when query condition is ByTime
     *
     * @generated from protobuf field: google.protobuf.Timestamp timestamp = 4;
     */
    timestamp?: Timestamp;
}
/**
 * SyntheticLock is a single unit of synthetic lockup
 * TODO: Change this to have
 * * underlying_lock_id
 * * synthetic_coin
 * * end_time
 * * duration
 * * owner
 * We then index synthetic locks by the denom, just like we do with normal
 * locks. Ideally we even get an interface, so we can re-use that same logic.
 * I currently have no idea how reward distribution is supposed to be working...
 * EVENTUALLY
 * we make a "constrained_coin" field, which is what the current "coins" field
 * is. Constrained coin field can be a #post-v7 feature, since we aren't
 * allowing partial unlocks of synthetic lockups.
 *
 * @generated from protobuf message osmosis.lockup.SyntheticLock
 */
export interface SyntheticLock {
    /**
     * underlying native lockup id for this synthetic lockup
     *
     * @generated from protobuf field: uint64 underlying_lock_id = 1;
     */
    underlyingLockId: bigint;
    /**
     * @generated from protobuf field: string synth_denom = 2;
     */
    synthDenom: string;
    /**
     * used for unbonding synthetic lockups, for active synthetic lockups, this
     * value is set to uninitialized value
     *
     * @generated from protobuf field: google.protobuf.Timestamp end_time = 3;
     */
    endTime?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Duration duration = 4;
     */
    duration?: Duration;
}
/**
 * @generated from protobuf enum osmosis.lockup.LockQueryType
 */
export enum LockQueryType {
    /**
     * Queries for locks that are longer than a certain duration
     *
     * @generated from protobuf enum value: ByDuration = 0;
     */
    ByDuration = 0,
    /**
     * Queries for lockups that started before a specific time
     *
     * @generated from protobuf enum value: ByTime = 1;
     */
    ByTime = 1
}
// @generated message type with reflection information, may provide speed optimized methods
class PeriodLock$Type extends MessageType<PeriodLock> {
    constructor() {
        super("osmosis.lockup.PeriodLock", [
            { no: 1, name: "ID", kind: "scalar", jsonName: "ID", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "owner", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"owner\"" } },
            { no: 3, name: "duration", kind: "message", T: () => Duration, options: { "gogoproto.nullable": false, "gogoproto.jsontag": "duration,omitempty", "gogoproto.moretags": "yaml:\"duration\"", "gogoproto.stdduration": true } },
            { no: 4, name: "end_time", kind: "message", T: () => Timestamp, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"end_time\"", "gogoproto.stdtime": true } },
            { no: 5, name: "coins", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Coin, options: { "gogoproto.nullable": false, "gogoproto.castrepeated": "github.com/cosmos/cosmos-sdk/types.Coins" } }
        ]);
    }
    create(value?: PartialMessage<PeriodLock>): PeriodLock {
        const message = { iD: 0n, owner: "", coins: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PeriodLock>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PeriodLock): PeriodLock {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 ID = 1 [json_name = "ID"];*/ 1:
                    message.iD = reader.uint64().toBigInt();
                    break;
                case /* string owner */ 2:
                    message.owner = reader.string();
                    break;
                case /* google.protobuf.Duration duration */ 3:
                    message.duration = Duration.internalBinaryRead(reader, reader.uint32(), options, message.duration);
                    break;
                case /* google.protobuf.Timestamp end_time */ 4:
                    message.endTime = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.endTime);
                    break;
                case /* repeated cosmos.base.v1beta1.Coin coins */ 5:
                    message.coins.push(Coin.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: PeriodLock, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 ID = 1 [json_name = "ID"]; */
        if (message.iD !== 0n)
            writer.tag(1, WireType.Varint).uint64(message.iD);
        /* string owner = 2; */
        if (message.owner !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.owner);
        /* google.protobuf.Duration duration = 3; */
        if (message.duration)
            Duration.internalBinaryWrite(message.duration, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp end_time = 4; */
        if (message.endTime)
            Timestamp.internalBinaryWrite(message.endTime, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* repeated cosmos.base.v1beta1.Coin coins = 5; */
        for (let i = 0; i < message.coins.length; i++)
            Coin.internalBinaryWrite(message.coins[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.lockup.PeriodLock
 */
export const PeriodLock = new PeriodLock$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryCondition$Type extends MessageType<QueryCondition> {
    constructor() {
        super("osmosis.lockup.QueryCondition", [
            { no: 1, name: "lock_query_type", kind: "enum", T: () => ["osmosis.lockup.LockQueryType", LockQueryType] },
            { no: 2, name: "denom", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "duration", kind: "message", T: () => Duration, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"duration\"", "gogoproto.stdduration": true } },
            { no: 4, name: "timestamp", kind: "message", T: () => Timestamp, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"timestamp\"", "gogoproto.stdtime": true } }
        ]);
    }
    create(value?: PartialMessage<QueryCondition>): QueryCondition {
        const message = { lockQueryType: 0, denom: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryCondition>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryCondition): QueryCondition {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* osmosis.lockup.LockQueryType lock_query_type */ 1:
                    message.lockQueryType = reader.int32();
                    break;
                case /* string denom */ 2:
                    message.denom = reader.string();
                    break;
                case /* google.protobuf.Duration duration */ 3:
                    message.duration = Duration.internalBinaryRead(reader, reader.uint32(), options, message.duration);
                    break;
                case /* google.protobuf.Timestamp timestamp */ 4:
                    message.timestamp = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.timestamp);
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
    internalBinaryWrite(message: QueryCondition, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* osmosis.lockup.LockQueryType lock_query_type = 1; */
        if (message.lockQueryType !== 0)
            writer.tag(1, WireType.Varint).int32(message.lockQueryType);
        /* string denom = 2; */
        if (message.denom !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.denom);
        /* google.protobuf.Duration duration = 3; */
        if (message.duration)
            Duration.internalBinaryWrite(message.duration, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp timestamp = 4; */
        if (message.timestamp)
            Timestamp.internalBinaryWrite(message.timestamp, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.lockup.QueryCondition
 */
export const QueryCondition = new QueryCondition$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SyntheticLock$Type extends MessageType<SyntheticLock> {
    constructor() {
        super("osmosis.lockup.SyntheticLock", [
            { no: 1, name: "underlying_lock_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "synth_denom", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "end_time", kind: "message", T: () => Timestamp, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"end_time\"", "gogoproto.stdtime": true } },
            { no: 4, name: "duration", kind: "message", T: () => Duration, options: { "gogoproto.nullable": false, "gogoproto.jsontag": "duration,omitempty", "gogoproto.moretags": "yaml:\"duration\"", "gogoproto.stdduration": true } }
        ]);
    }
    create(value?: PartialMessage<SyntheticLock>): SyntheticLock {
        const message = { underlyingLockId: 0n, synthDenom: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SyntheticLock>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SyntheticLock): SyntheticLock {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 underlying_lock_id */ 1:
                    message.underlyingLockId = reader.uint64().toBigInt();
                    break;
                case /* string synth_denom */ 2:
                    message.synthDenom = reader.string();
                    break;
                case /* google.protobuf.Timestamp end_time */ 3:
                    message.endTime = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.endTime);
                    break;
                case /* google.protobuf.Duration duration */ 4:
                    message.duration = Duration.internalBinaryRead(reader, reader.uint32(), options, message.duration);
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
    internalBinaryWrite(message: SyntheticLock, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 underlying_lock_id = 1; */
        if (message.underlyingLockId !== 0n)
            writer.tag(1, WireType.Varint).uint64(message.underlyingLockId);
        /* string synth_denom = 2; */
        if (message.synthDenom !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.synthDenom);
        /* google.protobuf.Timestamp end_time = 3; */
        if (message.endTime)
            Timestamp.internalBinaryWrite(message.endTime, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration duration = 4; */
        if (message.duration)
            Duration.internalBinaryWrite(message.duration, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.lockup.SyntheticLock
 */
export const SyntheticLock = new SyntheticLock$Type();