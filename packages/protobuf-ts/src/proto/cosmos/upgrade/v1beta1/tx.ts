// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "cosmos/upgrade/v1beta1/tx.proto" (package "cosmos.upgrade.v1beta1", syntax proto3),// tslint:disable
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
import { Plan } from "./upgrade";
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from protobuf message cosmos.upgrade.v1beta1.MsgSoftwareUpgrade
 */
export interface MsgSoftwareUpgrade {
    /**
     * authority is the address of the governance account.
     *
     * @generated from protobuf field: string authority = 1;
     */
    authority: string;
    /**
     * plan is the upgrade plan.
     *
     * @generated from protobuf field: cosmos.upgrade.v1beta1.Plan plan = 2;
     */
    plan?: Plan;
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from protobuf message cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse
 */
export interface MsgSoftwareUpgradeResponse {
}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from protobuf message cosmos.upgrade.v1beta1.MsgCancelUpgrade
 */
export interface MsgCancelUpgrade {
    /**
     * authority is the address of the governance account.
     *
     * @generated from protobuf field: string authority = 1;
     */
    authority: string;
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from protobuf message cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse
 */
export interface MsgCancelUpgradeResponse {
}
// @generated message type with reflection information, may provide speed optimized methods
class MsgSoftwareUpgrade$Type extends MessageType<MsgSoftwareUpgrade> {
    constructor() {
        super("cosmos.upgrade.v1beta1.MsgSoftwareUpgrade", [
            { no: 1, name: "authority", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "cosmos_proto.scalar": "cosmos.AddressString" } },
            { no: 2, name: "plan", kind: "message", T: () => Plan, options: { "gogoproto.nullable": false } }
        ], { "cosmos.msg.v1.signer": ["authority"] });
    }
    create(value?: PartialMessage<MsgSoftwareUpgrade>): MsgSoftwareUpgrade {
        const message = { authority: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MsgSoftwareUpgrade>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgSoftwareUpgrade): MsgSoftwareUpgrade {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string authority */ 1:
                    message.authority = reader.string();
                    break;
                case /* cosmos.upgrade.v1beta1.Plan plan */ 2:
                    message.plan = Plan.internalBinaryRead(reader, reader.uint32(), options, message.plan);
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
    internalBinaryWrite(message: MsgSoftwareUpgrade, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string authority = 1; */
        if (message.authority !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.authority);
        /* cosmos.upgrade.v1beta1.Plan plan = 2; */
        if (message.plan)
            Plan.internalBinaryWrite(message.plan, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.upgrade.v1beta1.MsgSoftwareUpgrade
 */
export const MsgSoftwareUpgrade = new MsgSoftwareUpgrade$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MsgSoftwareUpgradeResponse$Type extends MessageType<MsgSoftwareUpgradeResponse> {
    constructor() {
        super("cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse", []);
    }
    create(value?: PartialMessage<MsgSoftwareUpgradeResponse>): MsgSoftwareUpgradeResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MsgSoftwareUpgradeResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgSoftwareUpgradeResponse): MsgSoftwareUpgradeResponse {
        return target ?? this.create();
    }
    internalBinaryWrite(message: MsgSoftwareUpgradeResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse
 */
export const MsgSoftwareUpgradeResponse = new MsgSoftwareUpgradeResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MsgCancelUpgrade$Type extends MessageType<MsgCancelUpgrade> {
    constructor() {
        super("cosmos.upgrade.v1beta1.MsgCancelUpgrade", [
            { no: 1, name: "authority", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "cosmos_proto.scalar": "cosmos.AddressString" } }
        ], { "cosmos.msg.v1.signer": ["authority"] });
    }
    create(value?: PartialMessage<MsgCancelUpgrade>): MsgCancelUpgrade {
        const message = { authority: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MsgCancelUpgrade>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgCancelUpgrade): MsgCancelUpgrade {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string authority */ 1:
                    message.authority = reader.string();
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
    internalBinaryWrite(message: MsgCancelUpgrade, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string authority = 1; */
        if (message.authority !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.authority);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.upgrade.v1beta1.MsgCancelUpgrade
 */
export const MsgCancelUpgrade = new MsgCancelUpgrade$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MsgCancelUpgradeResponse$Type extends MessageType<MsgCancelUpgradeResponse> {
    constructor() {
        super("cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse", []);
    }
    create(value?: PartialMessage<MsgCancelUpgradeResponse>): MsgCancelUpgradeResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MsgCancelUpgradeResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgCancelUpgradeResponse): MsgCancelUpgradeResponse {
        return target ?? this.create();
    }
    internalBinaryWrite(message: MsgCancelUpgradeResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse
 */
export const MsgCancelUpgradeResponse = new MsgCancelUpgradeResponse$Type();
/**
 * @generated ServiceType for protobuf service cosmos.upgrade.v1beta1.Msg
 */
export const Msg = new ServiceType("cosmos.upgrade.v1beta1.Msg", [
    { name: "SoftwareUpgrade", options: {}, I: MsgSoftwareUpgrade, O: MsgSoftwareUpgradeResponse },
    { name: "CancelUpgrade", options: {}, I: MsgCancelUpgrade, O: MsgCancelUpgradeResponse }
]);