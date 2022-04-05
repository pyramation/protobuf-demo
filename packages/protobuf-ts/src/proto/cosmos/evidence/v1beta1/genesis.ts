// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "cosmos/evidence/v1beta1/genesis.proto" (package "cosmos.evidence.v1beta1", syntax proto3),// tslint:disable
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
import { Any } from "../../../google/protobuf/any";
/**
 * GenesisState defines the evidence module's genesis state.
 *
 * @generated from protobuf message cosmos.evidence.v1beta1.GenesisState
 */
export interface GenesisState {
    /**
     * evidence defines all the evidence at genesis.
     *
     * @generated from protobuf field: repeated google.protobuf.Any evidence = 1;
     */
    evidence: Any[];
}
// @generated message type with reflection information, may provide speed optimized methods
class GenesisState$Type extends MessageType<GenesisState> {
    constructor() {
        super("cosmos.evidence.v1beta1.GenesisState", [
            { no: 1, name: "evidence", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Any }
        ]);
    }
    create(value?: PartialMessage<GenesisState>): GenesisState {
        const message = { evidence: [] };
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
                case /* repeated google.protobuf.Any evidence */ 1:
                    message.evidence.push(Any.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated google.protobuf.Any evidence = 1; */
        for (let i = 0; i < message.evidence.length; i++)
            Any.internalBinaryWrite(message.evidence[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.evidence.v1beta1.GenesisState
 */
export const GenesisState = new GenesisState$Type();
