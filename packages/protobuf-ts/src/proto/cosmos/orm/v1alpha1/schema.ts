// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "cosmos/orm/v1alpha1/schema.proto" (package "cosmos.orm.v1alpha1", syntax proto3),// tslint:disable
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
 * ModuleSchemaDescriptor describe's a module's ORM schema.
 *
 * @generated from protobuf message cosmos.orm.v1alpha1.ModuleSchemaDescriptor
 */
export interface ModuleSchemaDescriptor {
    /**
     * @generated from protobuf field: repeated cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry schema_file = 1;
     */
    schemaFile: ModuleSchemaDescriptor_FileEntry[];
    /**
     * prefix is an optional prefix that precedes all keys in this module's
     * store.
     *
     * @generated from protobuf field: bytes prefix = 2;
     */
    prefix: Uint8Array;
}
/**
 * FileEntry describes an ORM file used in a module.
 *
 * @generated from protobuf message cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry
 */
export interface ModuleSchemaDescriptor_FileEntry {
    /**
     * id is a prefix that will be varint encoded and prepended to all the
     * table keys specified in the file's tables.
     *
     * @generated from protobuf field: uint32 id = 1;
     */
    id: number;
    /**
     * proto_file_name is the name of a file .proto in that contains
     * table definitions. The .proto file must be in a package that the
     * module has referenced using cosmos.app.v1.ModuleDescriptor.use_package.
     *
     * @generated from protobuf field: string proto_file_name = 2;
     */
    protoFileName: string;
    /**
     * storage_type optionally indicates the type of storage this file's
     * tables should used. If it is left unspecified, the default KV-storage
     * of the app will be used.
     *
     * @generated from protobuf field: cosmos.orm.v1alpha1.StorageType storage_type = 3;
     */
    storageType: StorageType;
}
/**
 * StorageType
 *
 * @generated from protobuf enum cosmos.orm.v1alpha1.StorageType
 */
export enum StorageType {
    /**
     * STORAGE_TYPE_DEFAULT_UNSPECIFIED indicates the persistent
     * KV-storage where primary key entries are stored in merkle-tree
     * backed commitment storage and indexes and seqs are stored in
     * fast index storage. Note that the Cosmos SDK before store/v2alpha1
     * does not support this.
     *
     * @generated from protobuf enum value: STORAGE_TYPE_DEFAULT_UNSPECIFIED = 0;
     */
    DEFAULT_UNSPECIFIED = 0,
    /**
     * STORAGE_TYPE_MEMORY indicates in-memory storage that will be
     * reloaded every time an app restarts. Tables with this type of storage
     * will by default be ignored when importing and exporting a module's
     * state from JSON.
     *
     * @generated from protobuf enum value: STORAGE_TYPE_MEMORY = 1;
     */
    MEMORY = 1,
    /**
     * STORAGE_TYPE_TRANSIENT indicates transient storage that is reset
     * at the end of every block. Tables with this type of storage
     * will by default be ignored when importing and exporting a module's
     * state from JSON.
     *
     * @generated from protobuf enum value: STORAGE_TYPE_TRANSIENT = 2;
     */
    TRANSIENT = 2,
    /**
     * STORAGE_TYPE_INDEX indicates persistent storage which is not backed
     * by a merkle-tree and won't affect the app hash. Note that the Cosmos SDK
     * before store/v2alpha1 does not support this.
     *
     * @generated from protobuf enum value: STORAGE_TYPE_INDEX = 3;
     */
    INDEX = 3,
    /**
     * STORAGE_TYPE_INDEX indicates persistent storage which is backed by
     * a merkle-tree. With this type of storage, both primary and index keys
     * will affect the app hash and this is generally less efficient
     * than using STORAGE_TYPE_DEFAULT_UNSPECIFIED which separates index
     * keys into index storage. Note that modules built with the
     * Cosmos SDK before store/v2alpha1 must specify STORAGE_TYPE_COMMITMENT
     * instead of STORAGE_TYPE_DEFAULT_UNSPECIFIED or STORAGE_TYPE_INDEX
     * because this is the only type of persistent storage available.
     *
     * @generated from protobuf enum value: STORAGE_TYPE_COMMITMENT = 4;
     */
    COMMITMENT = 4
}
// @generated message type with reflection information, may provide speed optimized methods
class ModuleSchemaDescriptor$Type extends MessageType<ModuleSchemaDescriptor> {
    constructor() {
        super("cosmos.orm.v1alpha1.ModuleSchemaDescriptor", [
            { no: 1, name: "schema_file", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ModuleSchemaDescriptor_FileEntry },
            { no: 2, name: "prefix", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<ModuleSchemaDescriptor>): ModuleSchemaDescriptor {
        const message = { schemaFile: [], prefix: new Uint8Array(0) };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ModuleSchemaDescriptor>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ModuleSchemaDescriptor): ModuleSchemaDescriptor {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry schema_file */ 1:
                    message.schemaFile.push(ModuleSchemaDescriptor_FileEntry.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bytes prefix */ 2:
                    message.prefix = reader.bytes();
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
    internalBinaryWrite(message: ModuleSchemaDescriptor, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry schema_file = 1; */
        for (let i = 0; i < message.schemaFile.length; i++)
            ModuleSchemaDescriptor_FileEntry.internalBinaryWrite(message.schemaFile[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* bytes prefix = 2; */
        if (message.prefix.length)
            writer.tag(2, WireType.LengthDelimited).bytes(message.prefix);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.orm.v1alpha1.ModuleSchemaDescriptor
 */
export const ModuleSchemaDescriptor = new ModuleSchemaDescriptor$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ModuleSchemaDescriptor_FileEntry$Type extends MessageType<ModuleSchemaDescriptor_FileEntry> {
    constructor() {
        super("cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry", [
            { no: 1, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "proto_file_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "storage_type", kind: "enum", T: () => ["cosmos.orm.v1alpha1.StorageType", StorageType, "STORAGE_TYPE_"] }
        ]);
    }
    create(value?: PartialMessage<ModuleSchemaDescriptor_FileEntry>): ModuleSchemaDescriptor_FileEntry {
        const message = { id: 0, protoFileName: "", storageType: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ModuleSchemaDescriptor_FileEntry>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ModuleSchemaDescriptor_FileEntry): ModuleSchemaDescriptor_FileEntry {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 id */ 1:
                    message.id = reader.uint32();
                    break;
                case /* string proto_file_name */ 2:
                    message.protoFileName = reader.string();
                    break;
                case /* cosmos.orm.v1alpha1.StorageType storage_type */ 3:
                    message.storageType = reader.int32();
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
    internalBinaryWrite(message: ModuleSchemaDescriptor_FileEntry, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).uint32(message.id);
        /* string proto_file_name = 2; */
        if (message.protoFileName !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.protoFileName);
        /* cosmos.orm.v1alpha1.StorageType storage_type = 3; */
        if (message.storageType !== 0)
            writer.tag(3, WireType.Varint).int32(message.storageType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry
 */
export const ModuleSchemaDescriptor_FileEntry = new ModuleSchemaDescriptor_FileEntry$Type();
