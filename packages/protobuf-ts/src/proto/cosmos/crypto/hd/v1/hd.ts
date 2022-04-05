// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "cosmos/crypto/hd/v1/hd.proto" (package "cosmos.crypto.hd.v1", syntax proto3),// tslint:disable
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
 * BIP44Params is used as path field in ledger item in Record.
 *
 * @generated from protobuf message cosmos.crypto.hd.v1.BIP44Params
 */
export interface BIP44Params {
    /**
     * purpose is a constant set to 44' (or 0x8000002C) following the BIP43 recommendation
     *
     * @generated from protobuf field: uint32 purpose = 1;
     */
    purpose: number;
    /**
     * coin_type is a constant that improves privacy
     *
     * @generated from protobuf field: uint32 coin_type = 2;
     */
    coinType: number;
    /**
     * account splits the key space into independent user identities
     *
     * @generated from protobuf field: uint32 account = 3;
     */
    account: number;
    /**
     * change is a constant used for public derivation. Constant 0 is used for external chain and constant 1 for internal
     * chain.
     *
     * @generated from protobuf field: bool change = 4;
     */
    change: boolean;
    /**
     * address_index is used as child index in BIP32 derivation
     *
     * @generated from protobuf field: uint32 address_index = 5;
     */
    addressIndex: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class BIP44Params$Type extends MessageType<BIP44Params> {
    constructor() {
        super("cosmos.crypto.hd.v1.BIP44Params", [
            { no: 1, name: "purpose", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "coin_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "account", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "change", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "address_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ], { "gogoproto.goproto_stringer": false });
    }
    create(value?: PartialMessage<BIP44Params>): BIP44Params {
        const message = { purpose: 0, coinType: 0, account: 0, change: false, addressIndex: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BIP44Params>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BIP44Params): BIP44Params {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 purpose */ 1:
                    message.purpose = reader.uint32();
                    break;
                case /* uint32 coin_type */ 2:
                    message.coinType = reader.uint32();
                    break;
                case /* uint32 account */ 3:
                    message.account = reader.uint32();
                    break;
                case /* bool change */ 4:
                    message.change = reader.bool();
                    break;
                case /* uint32 address_index */ 5:
                    message.addressIndex = reader.uint32();
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
    internalBinaryWrite(message: BIP44Params, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 purpose = 1; */
        if (message.purpose !== 0)
            writer.tag(1, WireType.Varint).uint32(message.purpose);
        /* uint32 coin_type = 2; */
        if (message.coinType !== 0)
            writer.tag(2, WireType.Varint).uint32(message.coinType);
        /* uint32 account = 3; */
        if (message.account !== 0)
            writer.tag(3, WireType.Varint).uint32(message.account);
        /* bool change = 4; */
        if (message.change !== false)
            writer.tag(4, WireType.Varint).bool(message.change);
        /* uint32 address_index = 5; */
        if (message.addressIndex !== 0)
            writer.tag(5, WireType.Varint).uint32(message.addressIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.crypto.hd.v1.BIP44Params
 */
export const BIP44Params = new BIP44Params$Type();