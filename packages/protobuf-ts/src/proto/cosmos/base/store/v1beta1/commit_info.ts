// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "cosmos/base/store/v1beta1/commit_info.proto" (package "cosmos.base.store.v1beta1", syntax proto3),// tslint:disable
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
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 *
 * @generated from protobuf message cosmos.base.store.v1beta1.CommitInfo
 */
export interface CommitInfo {
    /**
     * @generated from protobuf field: int64 version = 1;
     */
    version: bigint;
    /**
     * @generated from protobuf field: repeated cosmos.base.store.v1beta1.StoreInfo store_infos = 2;
     */
    storeInfos: StoreInfo[];
}
/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 *
 * @generated from protobuf message cosmos.base.store.v1beta1.StoreInfo
 */
export interface StoreInfo {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: cosmos.base.store.v1beta1.CommitID commit_id = 2;
     */
    commitId?: CommitID;
}
/**
 * CommitID defines the committment information when a specific store is
 * committed.
 *
 * @generated from protobuf message cosmos.base.store.v1beta1.CommitID
 */
export interface CommitID {
    /**
     * @generated from protobuf field: int64 version = 1;
     */
    version: bigint;
    /**
     * @generated from protobuf field: bytes hash = 2;
     */
    hash: Uint8Array;
}
// @generated message type with reflection information, may provide speed optimized methods
class CommitInfo$Type extends MessageType<CommitInfo> {
    constructor() {
        super("cosmos.base.store.v1beta1.CommitInfo", [
            { no: 1, name: "version", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "store_infos", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => StoreInfo, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value?: PartialMessage<CommitInfo>): CommitInfo {
        const message = { version: 0n, storeInfos: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CommitInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CommitInfo): CommitInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int64 version */ 1:
                    message.version = reader.int64().toBigInt();
                    break;
                case /* repeated cosmos.base.store.v1beta1.StoreInfo store_infos */ 2:
                    message.storeInfos.push(StoreInfo.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: CommitInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int64 version = 1; */
        if (message.version !== 0n)
            writer.tag(1, WireType.Varint).int64(message.version);
        /* repeated cosmos.base.store.v1beta1.StoreInfo store_infos = 2; */
        for (let i = 0; i < message.storeInfos.length; i++)
            StoreInfo.internalBinaryWrite(message.storeInfos[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.base.store.v1beta1.CommitInfo
 */
export const CommitInfo = new CommitInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StoreInfo$Type extends MessageType<StoreInfo> {
    constructor() {
        super("cosmos.base.store.v1beta1.StoreInfo", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "commit_id", kind: "message", T: () => CommitID, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value?: PartialMessage<StoreInfo>): StoreInfo {
        const message = { name: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<StoreInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StoreInfo): StoreInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* cosmos.base.store.v1beta1.CommitID commit_id */ 2:
                    message.commitId = CommitID.internalBinaryRead(reader, reader.uint32(), options, message.commitId);
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
    internalBinaryWrite(message: StoreInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* cosmos.base.store.v1beta1.CommitID commit_id = 2; */
        if (message.commitId)
            CommitID.internalBinaryWrite(message.commitId, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.base.store.v1beta1.StoreInfo
 */
export const StoreInfo = new StoreInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CommitID$Type extends MessageType<CommitID> {
    constructor() {
        super("cosmos.base.store.v1beta1.CommitID", [
            { no: 1, name: "version", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "hash", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ], { "gogoproto.goproto_stringer": false });
    }
    create(value?: PartialMessage<CommitID>): CommitID {
        const message = { version: 0n, hash: new Uint8Array(0) };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CommitID>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CommitID): CommitID {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int64 version */ 1:
                    message.version = reader.int64().toBigInt();
                    break;
                case /* bytes hash */ 2:
                    message.hash = reader.bytes();
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
    internalBinaryWrite(message: CommitID, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int64 version = 1; */
        if (message.version !== 0n)
            writer.tag(1, WireType.Varint).int64(message.version);
        /* bytes hash = 2; */
        if (message.hash.length)
            writer.tag(2, WireType.LengthDelimited).bytes(message.hash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.base.store.v1beta1.CommitID
 */
export const CommitID = new CommitID$Type();
