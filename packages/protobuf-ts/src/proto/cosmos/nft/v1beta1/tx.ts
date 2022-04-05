// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "cosmos/nft/v1beta1/tx.proto" (package "cosmos.nft.v1beta1", syntax proto3),// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
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
 * MsgSend represents a message to send a nft from one account to another account.
 *
 * @generated from protobuf message cosmos.nft.v1beta1.MsgSend
 */
export interface MsgSend {
    /**
     * class_id defines the unique identifier of the nft classification, similar to the contract address of ERC721
     *
     * @generated from protobuf field: string class_id = 1;
     */
    classId: string;
    /**
     * id defines the unique identification of nft
     *
     * @generated from protobuf field: string id = 2;
     */
    id: string;
    /**
     * sender is the address of the owner of nft
     *
     * @generated from protobuf field: string sender = 3;
     */
    sender: string;
    /**
     * receiver is the receiver address of nft
     *
     * @generated from protobuf field: string receiver = 4;
     */
    receiver: string;
}
/**
 * MsgSendResponse defines the Msg/Send response type.
 *
 * @generated from protobuf message cosmos.nft.v1beta1.MsgSendResponse
 */
export interface MsgSendResponse {
}
// @generated message type with reflection information, may provide speed optimized methods
class MsgSend$Type extends MessageType<MsgSend> {
    constructor() {
        super("cosmos.nft.v1beta1.MsgSend", [
            { no: 1, name: "class_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "sender", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "receiver", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ], { "cosmos.msg.v1.signer": ["sender"] });
    }
    create(value?: PartialMessage<MsgSend>): MsgSend {
        const message = { classId: "", id: "", sender: "", receiver: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MsgSend>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgSend): MsgSend {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string class_id */ 1:
                    message.classId = reader.string();
                    break;
                case /* string id */ 2:
                    message.id = reader.string();
                    break;
                case /* string sender */ 3:
                    message.sender = reader.string();
                    break;
                case /* string receiver */ 4:
                    message.receiver = reader.string();
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
    internalBinaryWrite(message: MsgSend, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string class_id = 1; */
        if (message.classId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.classId);
        /* string id = 2; */
        if (message.id !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.id);
        /* string sender = 3; */
        if (message.sender !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.sender);
        /* string receiver = 4; */
        if (message.receiver !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.receiver);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.nft.v1beta1.MsgSend
 */
export const MsgSend = new MsgSend$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MsgSendResponse$Type extends MessageType<MsgSendResponse> {
    constructor() {
        super("cosmos.nft.v1beta1.MsgSendResponse", []);
    }
    create(value?: PartialMessage<MsgSendResponse>): MsgSendResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MsgSendResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgSendResponse): MsgSendResponse {
        return target ?? this.create();
    }
    internalBinaryWrite(message: MsgSendResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.nft.v1beta1.MsgSendResponse
 */
export const MsgSendResponse = new MsgSendResponse$Type();
/**
 * @generated ServiceType for protobuf service cosmos.nft.v1beta1.Msg
 */
export const Msg = new ServiceType("cosmos.nft.v1beta1.Msg", [
    { name: "Send", options: {}, I: MsgSend, O: MsgSendResponse }
]);