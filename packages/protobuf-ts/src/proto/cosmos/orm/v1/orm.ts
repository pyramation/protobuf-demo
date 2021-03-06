// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "cosmos/orm/v1/orm.proto" (package "cosmos.orm.v1", syntax proto3),// tslint:disable
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
 * TableDescriptor describes an ORM table.
 *
 * @generated from protobuf message cosmos.orm.v1.TableDescriptor
 */
export interface TableDescriptor {
    /**
     * primary_key defines the primary key for the table.
     *
     * @generated from protobuf field: cosmos.orm.v1.PrimaryKeyDescriptor primary_key = 1;
     */
    primaryKey?: PrimaryKeyDescriptor;
    /**
     * index defines one or more secondary indexes.
     *
     * @generated from protobuf field: repeated cosmos.orm.v1.SecondaryIndexDescriptor index = 2;
     */
    index: SecondaryIndexDescriptor[];
    /**
     * id is a non-zero integer ID that must be unique within the
     * tables and singletons in this file. It may be deprecated in the future when this
     * can be auto-generated.
     *
     * @generated from protobuf field: uint32 id = 3;
     */
    id: number;
}
/**
 * PrimaryKeyDescriptor describes a table primary key.
 *
 * @generated from protobuf message cosmos.orm.v1.PrimaryKeyDescriptor
 */
export interface PrimaryKeyDescriptor {
    /**
     * fields is a comma-separated list of fields in the primary key. Spaces are
     * not allowed. Supported field types, their encodings, and any applicable constraints
     * are described below.
     *   - uint32 are encoded as 2,3,4 or 5 bytes using a compact encoding that
     *     is suitable for sorted iteration (not varint encoding). This type is
     *     well-suited for small integers.
     *   - uint64 are encoded as 2,4,6 or 9 bytes using a compact encoding that
     *     is suitable for sorted iteration (not varint encoding). This type is
     *     well-suited for small integers such as auto-incrementing sequences.
     *   - fixed32, fixed64 are encoded as big-endian fixed width bytes and support
     *   sorted iteration. These types are well-suited for encoding fixed with
     *   decimals as integers.
     *   - string's are encoded as raw bytes in terminal key segments and null-terminated
     *   in non-terminal segments. Null characters are thus forbidden in strings.
     *   string fields support sorted iteration.
     *   - bytes are encoded as raw bytes in terminal segments and length-prefixed
     *   with a 32-bit unsigned varint in non-terminal segments.
     *   - int32, sint32, int64, sint64, sfixed32, sfixed64 are encoded as fixed width bytes with
     *   an encoding that enables sorted iteration.
     *   - google.protobuf.Timestamp and google.protobuf.Duration are encoded
     *   as 12 bytes using an encoding that enables sorted iteration.
     *   - enum fields are encoded using varint encoding and do not support sorted
     *   iteration.
     *   - bool fields are encoded as a single byte 0 or 1.
     *
     * All other fields types are unsupported in keys including repeated and
     * oneof fields.
     *
     * Primary keys are prefixed by the varint encoded table id and the byte 0x0
     * plus any additional prefix specified by the schema.
     *
     * @generated from protobuf field: string fields = 1;
     */
    fields: string;
    /**
     * auto_increment specifies that the primary key is generated by an
     * auto-incrementing integer. If this is set to true fields must only
     * contain one field of that is of type uint64.
     *
     * @generated from protobuf field: bool auto_increment = 2;
     */
    autoIncrement: boolean;
}
/**
 * PrimaryKeyDescriptor describes a table secondary index.
 *
 * @generated from protobuf message cosmos.orm.v1.SecondaryIndexDescriptor
 */
export interface SecondaryIndexDescriptor {
    /**
     * fields is a comma-separated list of fields in the index. The supported
     * field types are the same as those for PrimaryKeyDescriptor.fields.
     * Index keys are prefixed by the varint encoded table id and the varint
     * encoded index id plus any additional prefix specified by the schema.
     *
     * In addition the the field segments, non-unique index keys are suffixed with
     * any additional primary key fields not present in the index fields so that the
     * primary key can be reconstructed. Unique indexes instead of being suffixed
     * store the remaining primary key fields in the value..
     *
     * @generated from protobuf field: string fields = 1;
     */
    fields: string;
    /**
     * id is a non-zero integer ID that must be unique within the indexes for this
     * table and less than 32768. It may be deprecated in the future when this can
     * be auto-generated.
     *
     * @generated from protobuf field: uint32 id = 2;
     */
    id: number;
    /**
     * unique specifies that this an unique index.
     *
     * @generated from protobuf field: bool unique = 3;
     */
    unique: boolean;
}
/**
 * TableDescriptor describes an ORM singleton table which has at most one instance.
 *
 * @generated from protobuf message cosmos.orm.v1.SingletonDescriptor
 */
export interface SingletonDescriptor {
    /**
     * id is a non-zero integer ID that must be unique within the
     * tables and singletons in this file. It may be deprecated in the future when this
     * can be auto-generated.
     *
     * @generated from protobuf field: uint32 id = 1;
     */
    id: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class TableDescriptor$Type extends MessageType<TableDescriptor> {
    constructor() {
        super("cosmos.orm.v1.TableDescriptor", [
            { no: 1, name: "primary_key", kind: "message", T: () => PrimaryKeyDescriptor },
            { no: 2, name: "index", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SecondaryIndexDescriptor },
            { no: 3, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<TableDescriptor>): TableDescriptor {
        const message = { index: [], id: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TableDescriptor>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TableDescriptor): TableDescriptor {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* cosmos.orm.v1.PrimaryKeyDescriptor primary_key */ 1:
                    message.primaryKey = PrimaryKeyDescriptor.internalBinaryRead(reader, reader.uint32(), options, message.primaryKey);
                    break;
                case /* repeated cosmos.orm.v1.SecondaryIndexDescriptor index */ 2:
                    message.index.push(SecondaryIndexDescriptor.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 id */ 3:
                    message.id = reader.uint32();
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
    internalBinaryWrite(message: TableDescriptor, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* cosmos.orm.v1.PrimaryKeyDescriptor primary_key = 1; */
        if (message.primaryKey)
            PrimaryKeyDescriptor.internalBinaryWrite(message.primaryKey, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated cosmos.orm.v1.SecondaryIndexDescriptor index = 2; */
        for (let i = 0; i < message.index.length; i++)
            SecondaryIndexDescriptor.internalBinaryWrite(message.index[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* uint32 id = 3; */
        if (message.id !== 0)
            writer.tag(3, WireType.Varint).uint32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.orm.v1.TableDescriptor
 */
export const TableDescriptor = new TableDescriptor$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PrimaryKeyDescriptor$Type extends MessageType<PrimaryKeyDescriptor> {
    constructor() {
        super("cosmos.orm.v1.PrimaryKeyDescriptor", [
            { no: 1, name: "fields", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "auto_increment", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<PrimaryKeyDescriptor>): PrimaryKeyDescriptor {
        const message = { fields: "", autoIncrement: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PrimaryKeyDescriptor>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PrimaryKeyDescriptor): PrimaryKeyDescriptor {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string fields */ 1:
                    message.fields = reader.string();
                    break;
                case /* bool auto_increment */ 2:
                    message.autoIncrement = reader.bool();
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
    internalBinaryWrite(message: PrimaryKeyDescriptor, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string fields = 1; */
        if (message.fields !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.fields);
        /* bool auto_increment = 2; */
        if (message.autoIncrement !== false)
            writer.tag(2, WireType.Varint).bool(message.autoIncrement);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.orm.v1.PrimaryKeyDescriptor
 */
export const PrimaryKeyDescriptor = new PrimaryKeyDescriptor$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SecondaryIndexDescriptor$Type extends MessageType<SecondaryIndexDescriptor> {
    constructor() {
        super("cosmos.orm.v1.SecondaryIndexDescriptor", [
            { no: 1, name: "fields", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "unique", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<SecondaryIndexDescriptor>): SecondaryIndexDescriptor {
        const message = { fields: "", id: 0, unique: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SecondaryIndexDescriptor>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SecondaryIndexDescriptor): SecondaryIndexDescriptor {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string fields */ 1:
                    message.fields = reader.string();
                    break;
                case /* uint32 id */ 2:
                    message.id = reader.uint32();
                    break;
                case /* bool unique */ 3:
                    message.unique = reader.bool();
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
    internalBinaryWrite(message: SecondaryIndexDescriptor, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string fields = 1; */
        if (message.fields !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.fields);
        /* uint32 id = 2; */
        if (message.id !== 0)
            writer.tag(2, WireType.Varint).uint32(message.id);
        /* bool unique = 3; */
        if (message.unique !== false)
            writer.tag(3, WireType.Varint).bool(message.unique);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.orm.v1.SecondaryIndexDescriptor
 */
export const SecondaryIndexDescriptor = new SecondaryIndexDescriptor$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SingletonDescriptor$Type extends MessageType<SingletonDescriptor> {
    constructor() {
        super("cosmos.orm.v1.SingletonDescriptor", [
            { no: 1, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<SingletonDescriptor>): SingletonDescriptor {
        const message = { id: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SingletonDescriptor>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SingletonDescriptor): SingletonDescriptor {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 id */ 1:
                    message.id = reader.uint32();
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
    internalBinaryWrite(message: SingletonDescriptor, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).uint32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.orm.v1.SingletonDescriptor
 */
export const SingletonDescriptor = new SingletonDescriptor$Type();
