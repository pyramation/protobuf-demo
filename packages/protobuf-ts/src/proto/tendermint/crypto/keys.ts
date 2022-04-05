// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "tendermint/crypto/keys.proto" (package "tendermint.crypto", syntax proto3),// tslint:disable
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
 * PublicKey defines the keys available for use with Tendermint Validators
 *
 * @generated from protobuf message tendermint.crypto.PublicKey
 */
export interface PublicKey {
    /**
     * @generated from protobuf oneof: sum
     */
    sum: {
        oneofKind: "ed25519";
        /**
         * @generated from protobuf field: bytes ed25519 = 1;
         */
        ed25519: Uint8Array;
    } | {
        oneofKind: "secp256K1";
        /**
         * @generated from protobuf field: bytes secp256k1 = 2 [json_name = "secp256k1"];
         */
        secp256K1: Uint8Array;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class PublicKey$Type extends MessageType<PublicKey> {
    constructor() {
        super("tendermint.crypto.PublicKey", [
            { no: 1, name: "ed25519", kind: "scalar", oneof: "sum", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "secp256k1", kind: "scalar", jsonName: "secp256k1", oneof: "sum", T: 12 /*ScalarType.BYTES*/ }
        ], { "gogoproto.equal": true, "gogoproto.compare": true });
    }
    create(value?: PartialMessage<PublicKey>): PublicKey {
        const message = { sum: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PublicKey>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PublicKey): PublicKey {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes ed25519 */ 1:
                    message.sum = {
                        oneofKind: "ed25519",
                        ed25519: reader.bytes()
                    };
                    break;
                case /* bytes secp256k1 = 2 [json_name = "secp256k1"];*/ 2:
                    message.sum = {
                        oneofKind: "secp256K1",
                        secp256K1: reader.bytes()
                    };
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
    internalBinaryWrite(message: PublicKey, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bytes ed25519 = 1; */
        if (message.sum.oneofKind === "ed25519")
            writer.tag(1, WireType.LengthDelimited).bytes(message.sum.ed25519);
        /* bytes secp256k1 = 2 [json_name = "secp256k1"]; */
        if (message.sum.oneofKind === "secp256K1")
            writer.tag(2, WireType.LengthDelimited).bytes(message.sum.secp256K1);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tendermint.crypto.PublicKey
 */
export const PublicKey = new PublicKey$Type();
