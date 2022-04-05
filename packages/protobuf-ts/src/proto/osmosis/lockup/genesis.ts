// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "osmosis/lockup/genesis.proto" (package "osmosis.lockup", syntax proto3),// tslint:disable
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
import { SyntheticLock } from "./lock";
import { PeriodLock } from "./lock";
/**
 * GenesisState defines the lockup module's genesis state.
 *
 * @generated from protobuf message osmosis.lockup.GenesisState
 */
export interface GenesisState {
    /**
     * @generated from protobuf field: uint64 last_lock_id = 1;
     */
    lastLockId: bigint;
    /**
     * @generated from protobuf field: repeated osmosis.lockup.PeriodLock locks = 2;
     */
    locks: PeriodLock[];
    /**
     * @generated from protobuf field: repeated osmosis.lockup.SyntheticLock synthetic_locks = 3;
     */
    syntheticLocks: SyntheticLock[];
}
// @generated message type with reflection information, may provide speed optimized methods
class GenesisState$Type extends MessageType<GenesisState> {
    constructor() {
        super("osmosis.lockup.GenesisState", [
            { no: 1, name: "last_lock_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "locks", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PeriodLock, options: { "gogoproto.nullable": false } },
            { no: 3, name: "synthetic_locks", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SyntheticLock, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value?: PartialMessage<GenesisState>): GenesisState {
        const message = { lastLockId: 0n, locks: [], syntheticLocks: [] };
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
                case /* uint64 last_lock_id */ 1:
                    message.lastLockId = reader.uint64().toBigInt();
                    break;
                case /* repeated osmosis.lockup.PeriodLock locks */ 2:
                    message.locks.push(PeriodLock.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated osmosis.lockup.SyntheticLock synthetic_locks */ 3:
                    message.syntheticLocks.push(SyntheticLock.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint64 last_lock_id = 1; */
        if (message.lastLockId !== 0n)
            writer.tag(1, WireType.Varint).uint64(message.lastLockId);
        /* repeated osmosis.lockup.PeriodLock locks = 2; */
        for (let i = 0; i < message.locks.length; i++)
            PeriodLock.internalBinaryWrite(message.locks[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* repeated osmosis.lockup.SyntheticLock synthetic_locks = 3; */
        for (let i = 0; i < message.syntheticLocks.length; i++)
            SyntheticLock.internalBinaryWrite(message.syntheticLocks[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.lockup.GenesisState
 */
export const GenesisState = new GenesisState$Type();