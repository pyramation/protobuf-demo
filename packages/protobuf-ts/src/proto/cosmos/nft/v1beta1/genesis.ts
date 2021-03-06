// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "cosmos/nft/v1beta1/genesis.proto" (package "cosmos.nft.v1beta1", syntax proto3),// tslint:disable
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
import { NFT } from "./nft";
import { Class } from "./nft";
/**
 * GenesisState defines the nft module's genesis state.
 *
 * @generated from protobuf message cosmos.nft.v1beta1.GenesisState
 */
export interface GenesisState {
    /**
     * class defines the class of the nft type.
     *
     * @generated from protobuf field: repeated cosmos.nft.v1beta1.Class classes = 1;
     */
    classes: Class[];
    /**
     * @generated from protobuf field: repeated cosmos.nft.v1beta1.Entry entries = 2;
     */
    entries: Entry[];
}
/**
 * Entry Defines all nft owned by a person
 *
 * @generated from protobuf message cosmos.nft.v1beta1.Entry
 */
export interface Entry {
    /**
     * owner is the owner address of the following nft
     *
     * @generated from protobuf field: string owner = 1;
     */
    owner: string;
    /**
     * nfts is a group of nfts of the same owner
     *
     * @generated from protobuf field: repeated cosmos.nft.v1beta1.NFT nfts = 2;
     */
    nfts: NFT[];
}
// @generated message type with reflection information, may provide speed optimized methods
class GenesisState$Type extends MessageType<GenesisState> {
    constructor() {
        super("cosmos.nft.v1beta1.GenesisState", [
            { no: 1, name: "classes", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Class },
            { no: 2, name: "entries", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Entry }
        ]);
    }
    create(value?: PartialMessage<GenesisState>): GenesisState {
        const message = { classes: [], entries: [] };
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
                case /* repeated cosmos.nft.v1beta1.Class classes */ 1:
                    message.classes.push(Class.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated cosmos.nft.v1beta1.Entry entries */ 2:
                    message.entries.push(Entry.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated cosmos.nft.v1beta1.Class classes = 1; */
        for (let i = 0; i < message.classes.length; i++)
            Class.internalBinaryWrite(message.classes[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated cosmos.nft.v1beta1.Entry entries = 2; */
        for (let i = 0; i < message.entries.length; i++)
            Entry.internalBinaryWrite(message.entries[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.nft.v1beta1.GenesisState
 */
export const GenesisState = new GenesisState$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Entry$Type extends MessageType<Entry> {
    constructor() {
        super("cosmos.nft.v1beta1.Entry", [
            { no: 1, name: "owner", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "nfts", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => NFT }
        ]);
    }
    create(value?: PartialMessage<Entry>): Entry {
        const message = { owner: "", nfts: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Entry>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Entry): Entry {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string owner */ 1:
                    message.owner = reader.string();
                    break;
                case /* repeated cosmos.nft.v1beta1.NFT nfts */ 2:
                    message.nfts.push(NFT.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: Entry, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string owner = 1; */
        if (message.owner !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.owner);
        /* repeated cosmos.nft.v1beta1.NFT nfts = 2; */
        for (let i = 0; i < message.nfts.length; i++)
            NFT.internalBinaryWrite(message.nfts[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.nft.v1beta1.Entry
 */
export const Entry = new Entry$Type();
