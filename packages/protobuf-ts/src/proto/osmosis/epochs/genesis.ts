// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "osmosis/epochs/genesis.proto" (package "osmosis.epochs.v1beta1", syntax proto3),// tslint:disable
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
/**
 * @generated from protobuf message osmosis.epochs.v1beta1.EpochInfo
 */
export interface EpochInfo {
    /**
     * @generated from protobuf field: string identifier = 1;
     */
    identifier: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp start_time = 2;
     */
    startTime?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Duration duration = 3;
     */
    duration?: Duration;
    /**
     * @generated from protobuf field: int64 current_epoch = 4;
     */
    currentEpoch: bigint;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp current_epoch_start_time = 5;
     */
    currentEpochStartTime?: Timestamp;
    /**
     * @generated from protobuf field: bool epoch_counting_started = 6;
     */
    epochCountingStarted: boolean;
    /**
     * @generated from protobuf field: int64 current_epoch_start_height = 8;
     */
    currentEpochStartHeight: bigint;
}
/**
 * GenesisState defines the epochs module's genesis state.
 *
 * @generated from protobuf message osmosis.epochs.v1beta1.GenesisState
 */
export interface GenesisState {
    /**
     * @generated from protobuf field: repeated osmosis.epochs.v1beta1.EpochInfo epochs = 1;
     */
    epochs: EpochInfo[];
}
// @generated message type with reflection information, may provide speed optimized methods
class EpochInfo$Type extends MessageType<EpochInfo> {
    constructor() {
        super("osmosis.epochs.v1beta1.EpochInfo", [
            { no: 1, name: "identifier", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "start_time", kind: "message", T: () => Timestamp, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"start_time\"", "gogoproto.stdtime": true } },
            { no: 3, name: "duration", kind: "message", T: () => Duration, options: { "gogoproto.nullable": false, "gogoproto.jsontag": "duration,omitempty", "gogoproto.moretags": "yaml:\"duration\"", "gogoproto.stdduration": true } },
            { no: 4, name: "current_epoch", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "current_epoch_start_time", kind: "message", T: () => Timestamp, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"current_epoch_start_time\"", "gogoproto.stdtime": true } },
            { no: 6, name: "epoch_counting_started", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "current_epoch_start_height", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<EpochInfo>): EpochInfo {
        const message = { identifier: "", currentEpoch: 0n, epochCountingStarted: false, currentEpochStartHeight: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<EpochInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EpochInfo): EpochInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string identifier */ 1:
                    message.identifier = reader.string();
                    break;
                case /* google.protobuf.Timestamp start_time */ 2:
                    message.startTime = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.startTime);
                    break;
                case /* google.protobuf.Duration duration */ 3:
                    message.duration = Duration.internalBinaryRead(reader, reader.uint32(), options, message.duration);
                    break;
                case /* int64 current_epoch */ 4:
                    message.currentEpoch = reader.int64().toBigInt();
                    break;
                case /* google.protobuf.Timestamp current_epoch_start_time */ 5:
                    message.currentEpochStartTime = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.currentEpochStartTime);
                    break;
                case /* bool epoch_counting_started */ 6:
                    message.epochCountingStarted = reader.bool();
                    break;
                case /* int64 current_epoch_start_height */ 8:
                    message.currentEpochStartHeight = reader.int64().toBigInt();
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
    internalBinaryWrite(message: EpochInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string identifier = 1; */
        if (message.identifier !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.identifier);
        /* google.protobuf.Timestamp start_time = 2; */
        if (message.startTime)
            Timestamp.internalBinaryWrite(message.startTime, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration duration = 3; */
        if (message.duration)
            Duration.internalBinaryWrite(message.duration, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* int64 current_epoch = 4; */
        if (message.currentEpoch !== 0n)
            writer.tag(4, WireType.Varint).int64(message.currentEpoch);
        /* google.protobuf.Timestamp current_epoch_start_time = 5; */
        if (message.currentEpochStartTime)
            Timestamp.internalBinaryWrite(message.currentEpochStartTime, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* bool epoch_counting_started = 6; */
        if (message.epochCountingStarted !== false)
            writer.tag(6, WireType.Varint).bool(message.epochCountingStarted);
        /* int64 current_epoch_start_height = 8; */
        if (message.currentEpochStartHeight !== 0n)
            writer.tag(8, WireType.Varint).int64(message.currentEpochStartHeight);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.epochs.v1beta1.EpochInfo
 */
export const EpochInfo = new EpochInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GenesisState$Type extends MessageType<GenesisState> {
    constructor() {
        super("osmosis.epochs.v1beta1.GenesisState", [
            { no: 1, name: "epochs", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => EpochInfo, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value?: PartialMessage<GenesisState>): GenesisState {
        const message = { epochs: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GenesisState>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GenesisState): GenesisState {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated osmosis.epochs.v1beta1.EpochInfo epochs */ 1:
                    message.epochs.push(EpochInfo.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: GenesisState, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated osmosis.epochs.v1beta1.EpochInfo epochs = 1; */
        for (let i = 0; i < message.epochs.length; i++)
            EpochInfo.internalBinaryWrite(message.epochs[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.epochs.v1beta1.GenesisState
 */
export const GenesisState = new GenesisState$Type();