// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "tendermint/types/block.proto" (package "tendermint.types", syntax proto3),// tslint:disable
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
import { Commit } from "./types";
import { EvidenceList } from "./evidence";
import { Data } from "./types";
import { Header } from "./types";
/**
 * @generated from protobuf message tendermint.types.Block
 */
export interface Block {
    /**
     * @generated from protobuf field: tendermint.types.Header header = 1;
     */
    header?: Header;
    /**
     * @generated from protobuf field: tendermint.types.Data data = 2;
     */
    data?: Data;
    /**
     * @generated from protobuf field: tendermint.types.EvidenceList evidence = 3;
     */
    evidence?: EvidenceList;
    /**
     * @generated from protobuf field: tendermint.types.Commit last_commit = 4;
     */
    lastCommit?: Commit;
}
// @generated message type with reflection information, may provide speed optimized methods
class Block$Type extends MessageType<Block> {
    constructor() {
        super("tendermint.types.Block", [
            { no: 1, name: "header", kind: "message", T: () => Header, options: { "gogoproto.nullable": false } },
            { no: 2, name: "data", kind: "message", T: () => Data, options: { "gogoproto.nullable": false } },
            { no: 3, name: "evidence", kind: "message", T: () => EvidenceList, options: { "gogoproto.nullable": false } },
            { no: 4, name: "last_commit", kind: "message", T: () => Commit }
        ]);
    }
    create(value?: PartialMessage<Block>): Block {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Block>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Block): Block {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* tendermint.types.Header header */ 1:
                    message.header = Header.internalBinaryRead(reader, reader.uint32(), options, message.header);
                    break;
                case /* tendermint.types.Data data */ 2:
                    message.data = Data.internalBinaryRead(reader, reader.uint32(), options, message.data);
                    break;
                case /* tendermint.types.EvidenceList evidence */ 3:
                    message.evidence = EvidenceList.internalBinaryRead(reader, reader.uint32(), options, message.evidence);
                    break;
                case /* tendermint.types.Commit last_commit */ 4:
                    message.lastCommit = Commit.internalBinaryRead(reader, reader.uint32(), options, message.lastCommit);
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
    internalBinaryWrite(message: Block, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* tendermint.types.Header header = 1; */
        if (message.header)
            Header.internalBinaryWrite(message.header, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* tendermint.types.Data data = 2; */
        if (message.data)
            Data.internalBinaryWrite(message.data, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* tendermint.types.EvidenceList evidence = 3; */
        if (message.evidence)
            EvidenceList.internalBinaryWrite(message.evidence, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* tendermint.types.Commit last_commit = 4; */
        if (message.lastCommit)
            Commit.internalBinaryWrite(message.lastCommit, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tendermint.types.Block
 */
export const Block = new Block$Type();
