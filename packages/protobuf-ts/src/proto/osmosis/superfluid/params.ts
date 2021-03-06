// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "osmosis/superfluid/params.proto" (package "osmosis.superfluid", syntax proto3),// tslint:disable
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
 * Params holds parameters for the superfluid module
 *
 * @generated from protobuf message osmosis.superfluid.Params
 */
export interface Params {
    /**
     * the risk_factor is to be cut on OSMO equivalent value of lp tokens for
     * superfluid staking, default: 5%
     *
     * @generated from protobuf field: string minimum_risk_factor = 1;
     */
    minimumRiskFactor: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class Params$Type extends MessageType<Params> {
    constructor() {
        super("osmosis.superfluid.Params", [
            { no: 1, name: "minimum_risk_factor", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Dec", "gogoproto.moretags": "yaml:\"minimum_risk_factor\"" } }
        ]);
    }
    create(value?: PartialMessage<Params>): Params {
        const message = { minimumRiskFactor: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Params>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Params): Params {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string minimum_risk_factor */ 1:
                    message.minimumRiskFactor = reader.string();
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
    internalBinaryWrite(message: Params, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string minimum_risk_factor = 1; */
        if (message.minimumRiskFactor !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.minimumRiskFactor);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.superfluid.Params
 */
export const Params = new Params$Type();
