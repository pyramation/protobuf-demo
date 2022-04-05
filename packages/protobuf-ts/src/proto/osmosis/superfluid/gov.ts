// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "osmosis/superfluid/gov.proto" (package "osmosis.superfluid.v1beta1", syntax proto3),// tslint:disable
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
import { SuperfluidAsset } from "./superfluid";
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 *
 * @generated from protobuf message osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal
 */
export interface SetSuperfluidAssetsProposal {
    /**
     * @generated from protobuf field: string title = 1;
     */
    title: string;
    /**
     * @generated from protobuf field: string description = 2;
     */
    description: string;
    /**
     * @generated from protobuf field: repeated osmosis.superfluid.SuperfluidAsset assets = 3;
     */
    assets: SuperfluidAsset[];
}
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 *
 * @generated from protobuf message osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal
 */
export interface RemoveSuperfluidAssetsProposal {
    /**
     * @generated from protobuf field: string title = 1;
     */
    title: string;
    /**
     * @generated from protobuf field: string description = 2;
     */
    description: string;
    /**
     * @generated from protobuf field: repeated string superfluid_asset_denoms = 3;
     */
    superfluidAssetDenoms: string[];
}
// @generated message type with reflection information, may provide speed optimized methods
class SetSuperfluidAssetsProposal$Type extends MessageType<SetSuperfluidAssetsProposal> {
    constructor() {
        super("osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal", [
            { no: 1, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "assets", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SuperfluidAsset, options: { "gogoproto.nullable": false } }
        ], { "gogoproto.goproto_getters": false, "gogoproto.goproto_stringer": false, "gogoproto.equal": true });
    }
    create(value?: PartialMessage<SetSuperfluidAssetsProposal>): SetSuperfluidAssetsProposal {
        const message = { title: "", description: "", assets: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SetSuperfluidAssetsProposal>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SetSuperfluidAssetsProposal): SetSuperfluidAssetsProposal {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string title */ 1:
                    message.title = reader.string();
                    break;
                case /* string description */ 2:
                    message.description = reader.string();
                    break;
                case /* repeated osmosis.superfluid.SuperfluidAsset assets */ 3:
                    message.assets.push(SuperfluidAsset.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: SetSuperfluidAssetsProposal, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string title = 1; */
        if (message.title !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.title);
        /* string description = 2; */
        if (message.description !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.description);
        /* repeated osmosis.superfluid.SuperfluidAsset assets = 3; */
        for (let i = 0; i < message.assets.length; i++)
            SuperfluidAsset.internalBinaryWrite(message.assets[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal
 */
export const SetSuperfluidAssetsProposal = new SetSuperfluidAssetsProposal$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RemoveSuperfluidAssetsProposal$Type extends MessageType<RemoveSuperfluidAssetsProposal> {
    constructor() {
        super("osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal", [
            { no: 1, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "superfluid_asset_denoms", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ], { "gogoproto.goproto_getters": false, "gogoproto.goproto_stringer": false, "gogoproto.equal": true });
    }
    create(value?: PartialMessage<RemoveSuperfluidAssetsProposal>): RemoveSuperfluidAssetsProposal {
        const message = { title: "", description: "", superfluidAssetDenoms: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RemoveSuperfluidAssetsProposal>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RemoveSuperfluidAssetsProposal): RemoveSuperfluidAssetsProposal {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string title */ 1:
                    message.title = reader.string();
                    break;
                case /* string description */ 2:
                    message.description = reader.string();
                    break;
                case /* repeated string superfluid_asset_denoms */ 3:
                    message.superfluidAssetDenoms.push(reader.string());
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
    internalBinaryWrite(message: RemoveSuperfluidAssetsProposal, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string title = 1; */
        if (message.title !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.title);
        /* string description = 2; */
        if (message.description !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.description);
        /* repeated string superfluid_asset_denoms = 3; */
        for (let i = 0; i < message.superfluidAssetDenoms.length; i++)
            writer.tag(3, WireType.LengthDelimited).string(message.superfluidAssetDenoms[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal
 */
export const RemoveSuperfluidAssetsProposal = new RemoveSuperfluidAssetsProposal$Type();