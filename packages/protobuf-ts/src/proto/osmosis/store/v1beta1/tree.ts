// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "osmosis/store/v1beta1/tree.proto" (package "osmosis.store.v1beta1", syntax proto3),// tslint:disable
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
 * @generated from protobuf message osmosis.store.v1beta1.Node
 */
export interface Node {
    /**
     * @generated from protobuf field: repeated osmosis.store.v1beta1.Child children = 1;
     */
    children: Child[];
}
/**
 * @generated from protobuf message osmosis.store.v1beta1.Child
 */
export interface Child {
    /**
     * @generated from protobuf field: bytes index = 1;
     */
    index: Uint8Array;
    /**
     * @generated from protobuf field: string accumulation = 2;
     */
    accumulation: string;
}
/**
 * @generated from protobuf message osmosis.store.v1beta1.Leaf
 */
export interface Leaf {
    /**
     * @generated from protobuf field: osmosis.store.v1beta1.Child leaf = 1;
     */
    leaf?: Child;
}
// @generated message type with reflection information, may provide speed optimized methods
class Node$Type extends MessageType<Node> {
    constructor() {
        super("osmosis.store.v1beta1.Node", [
            { no: 1, name: "children", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Child }
        ]);
    }
    create(value?: PartialMessage<Node>): Node {
        const message = { children: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Node>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Node): Node {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated osmosis.store.v1beta1.Child children */ 1:
                    message.children.push(Child.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: Node, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated osmosis.store.v1beta1.Child children = 1; */
        for (let i = 0; i < message.children.length; i++)
            Child.internalBinaryWrite(message.children[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.store.v1beta1.Node
 */
export const Node = new Node$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Child$Type extends MessageType<Child> {
    constructor() {
        super("osmosis.store.v1beta1.Child", [
            { no: 1, name: "index", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "accumulation", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Int" } }
        ]);
    }
    create(value?: PartialMessage<Child>): Child {
        const message = { index: new Uint8Array(0), accumulation: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Child>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Child): Child {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes index */ 1:
                    message.index = reader.bytes();
                    break;
                case /* string accumulation */ 2:
                    message.accumulation = reader.string();
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
    internalBinaryWrite(message: Child, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bytes index = 1; */
        if (message.index.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.index);
        /* string accumulation = 2; */
        if (message.accumulation !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.accumulation);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.store.v1beta1.Child
 */
export const Child = new Child$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Leaf$Type extends MessageType<Leaf> {
    constructor() {
        super("osmosis.store.v1beta1.Leaf", [
            { no: 1, name: "leaf", kind: "message", T: () => Child }
        ]);
    }
    create(value?: PartialMessage<Leaf>): Leaf {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Leaf>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Leaf): Leaf {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* osmosis.store.v1beta1.Child leaf */ 1:
                    message.leaf = Child.internalBinaryRead(reader, reader.uint32(), options, message.leaf);
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
    internalBinaryWrite(message: Leaf, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* osmosis.store.v1beta1.Child leaf = 1; */
        if (message.leaf)
            Child.internalBinaryWrite(message.leaf, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.store.v1beta1.Leaf
 */
export const Leaf = new Leaf$Type();
