// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "osmosis/pool-incentives/v1beta1/incentives.proto" (package "osmosis.poolincentives.v1beta1", syntax proto3),// tslint:disable
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
import { Duration } from "../../../google/protobuf/duration";
/**
 * @generated from protobuf message osmosis.poolincentives.v1beta1.Params
 */
export interface Params {
    /**
     * minted_denom is the denomination of the coin expected to be minted by the
     * minting module. Pool-incentives module doesn’t actually mint the coin
     * itself, but rather manages the distribution of coins that matches the
     * defined minted_denom.
     *
     * @generated from protobuf field: string minted_denom = 1;
     */
    mintedDenom: string;
}
/**
 * @generated from protobuf message osmosis.poolincentives.v1beta1.LockableDurationsInfo
 */
export interface LockableDurationsInfo {
    /**
     * @generated from protobuf field: repeated google.protobuf.Duration lockable_durations = 1;
     */
    lockableDurations: Duration[];
}
/**
 * @generated from protobuf message osmosis.poolincentives.v1beta1.DistrInfo
 */
export interface DistrInfo {
    /**
     * @generated from protobuf field: string total_weight = 1;
     */
    totalWeight: string;
    /**
     * @generated from protobuf field: repeated osmosis.poolincentives.v1beta1.DistrRecord records = 2;
     */
    records: DistrRecord[];
}
/**
 * @generated from protobuf message osmosis.poolincentives.v1beta1.DistrRecord
 */
export interface DistrRecord {
    /**
     * @generated from protobuf field: uint64 gauge_id = 1;
     */
    gaugeId: bigint;
    /**
     * @generated from protobuf field: string weight = 2;
     */
    weight: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class Params$Type extends MessageType<Params> {
    constructor() {
        super("osmosis.poolincentives.v1beta1.Params", [
            { no: 1, name: "minted_denom", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"minted_denom\"" } }
        ], { "gogoproto.goproto_stringer": false });
    }
    create(value?: PartialMessage<Params>): Params {
        const message = { mintedDenom: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Params>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Params): Params {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string minted_denom */ 1:
                    message.mintedDenom = reader.string();
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
    internalBinaryWrite(message: Params, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string minted_denom = 1; */
        if (message.mintedDenom !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.mintedDenom);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.poolincentives.v1beta1.Params
 */
export const Params = new Params$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LockableDurationsInfo$Type extends MessageType<LockableDurationsInfo> {
    constructor() {
        super("osmosis.poolincentives.v1beta1.LockableDurationsInfo", [
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
 * @generated MessageType for protobuf message osmosis.poolincentives.v1beta1.LockableDurationsInfo
 */
export const LockableDurationsInfo = new LockableDurationsInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DistrInfo$Type extends MessageType<DistrInfo> {
    constructor() {
        super("osmosis.poolincentives.v1beta1.DistrInfo", [
            { no: 1, name: "total_weight", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Int", "gogoproto.moretags": "yaml:\"total_weight\"" } },
            { no: 2, name: "records", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => DistrRecord, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value?: PartialMessage<DistrInfo>): DistrInfo {
        const message = { totalWeight: "", records: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DistrInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DistrInfo): DistrInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string total_weight */ 1:
                    message.totalWeight = reader.string();
                    break;
                case /* repeated osmosis.poolincentives.v1beta1.DistrRecord records */ 2:
                    message.records.push(DistrRecord.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: DistrInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string total_weight = 1; */
        if (message.totalWeight !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.totalWeight);
        /* repeated osmosis.poolincentives.v1beta1.DistrRecord records = 2; */
        for (let i = 0; i < message.records.length; i++)
            DistrRecord.internalBinaryWrite(message.records[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.poolincentives.v1beta1.DistrInfo
 */
export const DistrInfo = new DistrInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DistrRecord$Type extends MessageType<DistrRecord> {
    constructor() {
        super("osmosis.poolincentives.v1beta1.DistrRecord", [
            { no: 1, name: "gauge_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/, options: { "gogoproto.moretags": "yaml:\"gauge_id\"" } },
            { no: 2, name: "weight", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Int" } }
        ], { "gogoproto.equal": true });
    }
    create(value?: PartialMessage<DistrRecord>): DistrRecord {
        const message = { gaugeId: 0n, weight: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DistrRecord>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DistrRecord): DistrRecord {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 gauge_id */ 1:
                    message.gaugeId = reader.uint64().toBigInt();
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
    internalBinaryWrite(message: DistrRecord, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 gauge_id = 1; */
        if (message.gaugeId !== 0n)
            writer.tag(1, WireType.Varint).uint64(message.gaugeId);
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
 * @generated MessageType for protobuf message osmosis.poolincentives.v1beta1.DistrRecord
 */
export const DistrRecord = new DistrRecord$Type();