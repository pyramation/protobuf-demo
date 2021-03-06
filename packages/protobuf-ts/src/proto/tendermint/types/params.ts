// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "tendermint/types/params.proto" (package "tendermint.types", syntax proto3),// tslint:disable
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
import { Duration } from "../../google/protobuf/duration";
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 *
 * @generated from protobuf message tendermint.types.ConsensusParams
 */
export interface ConsensusParams {
    /**
     * @generated from protobuf field: tendermint.types.BlockParams block = 1;
     */
    block?: BlockParams;
    /**
     * @generated from protobuf field: tendermint.types.EvidenceParams evidence = 2;
     */
    evidence?: EvidenceParams;
    /**
     * @generated from protobuf field: tendermint.types.ValidatorParams validator = 3;
     */
    validator?: ValidatorParams;
    /**
     * @generated from protobuf field: tendermint.types.VersionParams version = 4;
     */
    version?: VersionParams;
}
/**
 * BlockParams contains limits on the block size.
 *
 * @generated from protobuf message tendermint.types.BlockParams
 */
export interface BlockParams {
    /**
     * Max block size, in bytes.
     * Note: must be greater than 0
     *
     * @generated from protobuf field: int64 max_bytes = 1;
     */
    maxBytes: bigint;
    /**
     * Max gas per block.
     * Note: must be greater or equal to -1
     *
     * @generated from protobuf field: int64 max_gas = 2;
     */
    maxGas: bigint;
    /**
     * Minimum time increment between consecutive blocks (in milliseconds) If the
     * block header timestamp is ahead of the system clock, decrease this value.
     *
     * Not exposed to the application.
     *
     * @generated from protobuf field: int64 time_iota_ms = 3;
     */
    timeIotaMs: bigint;
}
/**
 * EvidenceParams determine how we handle evidence of malfeasance.
 *
 * @generated from protobuf message tendermint.types.EvidenceParams
 */
export interface EvidenceParams {
    /**
     * Max age of evidence, in blocks.
     *
     * The basic formula for calculating this is: MaxAgeDuration / {average block
     * time}.
     *
     * @generated from protobuf field: int64 max_age_num_blocks = 1;
     */
    maxAgeNumBlocks: bigint;
    /**
     * Max age of evidence, in time.
     *
     * It should correspond with an app's "unbonding period" or other similar
     * mechanism for handling [Nothing-At-Stake
     * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
     *
     * @generated from protobuf field: google.protobuf.Duration max_age_duration = 2;
     */
    maxAgeDuration?: Duration;
    /**
     * This sets the maximum size of total evidence in bytes that can be committed in a single block.
     * and should fall comfortably under the max block bytes.
     * Default is 1048576 or 1MB
     *
     * @generated from protobuf field: int64 max_bytes = 3;
     */
    maxBytes: bigint;
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 *
 * @generated from protobuf message tendermint.types.ValidatorParams
 */
export interface ValidatorParams {
    /**
     * @generated from protobuf field: repeated string pub_key_types = 1;
     */
    pubKeyTypes: string[];
}
/**
 * VersionParams contains the ABCI application version.
 *
 * @generated from protobuf message tendermint.types.VersionParams
 */
export interface VersionParams {
    /**
     * @generated from protobuf field: uint64 app_version = 1;
     */
    appVersion: bigint;
}
/**
 * HashedParams is a subset of ConsensusParams.
 *
 * It is hashed into the Header.ConsensusHash.
 *
 * @generated from protobuf message tendermint.types.HashedParams
 */
export interface HashedParams {
    /**
     * @generated from protobuf field: int64 block_max_bytes = 1;
     */
    blockMaxBytes: bigint;
    /**
     * @generated from protobuf field: int64 block_max_gas = 2;
     */
    blockMaxGas: bigint;
}
// @generated message type with reflection information, may provide speed optimized methods
class ConsensusParams$Type extends MessageType<ConsensusParams> {
    constructor() {
        super("tendermint.types.ConsensusParams", [
            { no: 1, name: "block", kind: "message", T: () => BlockParams, options: { "gogoproto.nullable": false } },
            { no: 2, name: "evidence", kind: "message", T: () => EvidenceParams, options: { "gogoproto.nullable": false } },
            { no: 3, name: "validator", kind: "message", T: () => ValidatorParams, options: { "gogoproto.nullable": false } },
            { no: 4, name: "version", kind: "message", T: () => VersionParams, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value?: PartialMessage<ConsensusParams>): ConsensusParams {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ConsensusParams>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConsensusParams): ConsensusParams {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* tendermint.types.BlockParams block */ 1:
                    message.block = BlockParams.internalBinaryRead(reader, reader.uint32(), options, message.block);
                    break;
                case /* tendermint.types.EvidenceParams evidence */ 2:
                    message.evidence = EvidenceParams.internalBinaryRead(reader, reader.uint32(), options, message.evidence);
                    break;
                case /* tendermint.types.ValidatorParams validator */ 3:
                    message.validator = ValidatorParams.internalBinaryRead(reader, reader.uint32(), options, message.validator);
                    break;
                case /* tendermint.types.VersionParams version */ 4:
                    message.version = VersionParams.internalBinaryRead(reader, reader.uint32(), options, message.version);
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
    internalBinaryWrite(message: ConsensusParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* tendermint.types.BlockParams block = 1; */
        if (message.block)
            BlockParams.internalBinaryWrite(message.block, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* tendermint.types.EvidenceParams evidence = 2; */
        if (message.evidence)
            EvidenceParams.internalBinaryWrite(message.evidence, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* tendermint.types.ValidatorParams validator = 3; */
        if (message.validator)
            ValidatorParams.internalBinaryWrite(message.validator, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* tendermint.types.VersionParams version = 4; */
        if (message.version)
            VersionParams.internalBinaryWrite(message.version, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tendermint.types.ConsensusParams
 */
export const ConsensusParams = new ConsensusParams$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BlockParams$Type extends MessageType<BlockParams> {
    constructor() {
        super("tendermint.types.BlockParams", [
            { no: 1, name: "max_bytes", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "max_gas", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "time_iota_ms", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<BlockParams>): BlockParams {
        const message = { maxBytes: 0n, maxGas: 0n, timeIotaMs: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BlockParams>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BlockParams): BlockParams {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int64 max_bytes */ 1:
                    message.maxBytes = reader.int64().toBigInt();
                    break;
                case /* int64 max_gas */ 2:
                    message.maxGas = reader.int64().toBigInt();
                    break;
                case /* int64 time_iota_ms */ 3:
                    message.timeIotaMs = reader.int64().toBigInt();
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
    internalBinaryWrite(message: BlockParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int64 max_bytes = 1; */
        if (message.maxBytes !== 0n)
            writer.tag(1, WireType.Varint).int64(message.maxBytes);
        /* int64 max_gas = 2; */
        if (message.maxGas !== 0n)
            writer.tag(2, WireType.Varint).int64(message.maxGas);
        /* int64 time_iota_ms = 3; */
        if (message.timeIotaMs !== 0n)
            writer.tag(3, WireType.Varint).int64(message.timeIotaMs);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tendermint.types.BlockParams
 */
export const BlockParams = new BlockParams$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvidenceParams$Type extends MessageType<EvidenceParams> {
    constructor() {
        super("tendermint.types.EvidenceParams", [
            { no: 1, name: "max_age_num_blocks", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "max_age_duration", kind: "message", T: () => Duration, options: { "gogoproto.nullable": false, "gogoproto.stdduration": true } },
            { no: 3, name: "max_bytes", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<EvidenceParams>): EvidenceParams {
        const message = { maxAgeNumBlocks: 0n, maxBytes: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<EvidenceParams>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EvidenceParams): EvidenceParams {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int64 max_age_num_blocks */ 1:
                    message.maxAgeNumBlocks = reader.int64().toBigInt();
                    break;
                case /* google.protobuf.Duration max_age_duration */ 2:
                    message.maxAgeDuration = Duration.internalBinaryRead(reader, reader.uint32(), options, message.maxAgeDuration);
                    break;
                case /* int64 max_bytes */ 3:
                    message.maxBytes = reader.int64().toBigInt();
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
    internalBinaryWrite(message: EvidenceParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int64 max_age_num_blocks = 1; */
        if (message.maxAgeNumBlocks !== 0n)
            writer.tag(1, WireType.Varint).int64(message.maxAgeNumBlocks);
        /* google.protobuf.Duration max_age_duration = 2; */
        if (message.maxAgeDuration)
            Duration.internalBinaryWrite(message.maxAgeDuration, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* int64 max_bytes = 3; */
        if (message.maxBytes !== 0n)
            writer.tag(3, WireType.Varint).int64(message.maxBytes);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tendermint.types.EvidenceParams
 */
export const EvidenceParams = new EvidenceParams$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ValidatorParams$Type extends MessageType<ValidatorParams> {
    constructor() {
        super("tendermint.types.ValidatorParams", [
            { no: 1, name: "pub_key_types", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ], { "gogoproto.populate": true, "gogoproto.equal": true });
    }
    create(value?: PartialMessage<ValidatorParams>): ValidatorParams {
        const message = { pubKeyTypes: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ValidatorParams>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ValidatorParams): ValidatorParams {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string pub_key_types */ 1:
                    message.pubKeyTypes.push(reader.string());
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
    internalBinaryWrite(message: ValidatorParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated string pub_key_types = 1; */
        for (let i = 0; i < message.pubKeyTypes.length; i++)
            writer.tag(1, WireType.LengthDelimited).string(message.pubKeyTypes[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tendermint.types.ValidatorParams
 */
export const ValidatorParams = new ValidatorParams$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VersionParams$Type extends MessageType<VersionParams> {
    constructor() {
        super("tendermint.types.VersionParams", [
            { no: 1, name: "app_version", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ], { "gogoproto.populate": true, "gogoproto.equal": true });
    }
    create(value?: PartialMessage<VersionParams>): VersionParams {
        const message = { appVersion: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<VersionParams>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VersionParams): VersionParams {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 app_version */ 1:
                    message.appVersion = reader.uint64().toBigInt();
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
    internalBinaryWrite(message: VersionParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 app_version = 1; */
        if (message.appVersion !== 0n)
            writer.tag(1, WireType.Varint).uint64(message.appVersion);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tendermint.types.VersionParams
 */
export const VersionParams = new VersionParams$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HashedParams$Type extends MessageType<HashedParams> {
    constructor() {
        super("tendermint.types.HashedParams", [
            { no: 1, name: "block_max_bytes", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "block_max_gas", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<HashedParams>): HashedParams {
        const message = { blockMaxBytes: 0n, blockMaxGas: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HashedParams>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HashedParams): HashedParams {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int64 block_max_bytes */ 1:
                    message.blockMaxBytes = reader.int64().toBigInt();
                    break;
                case /* int64 block_max_gas */ 2:
                    message.blockMaxGas = reader.int64().toBigInt();
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
    internalBinaryWrite(message: HashedParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int64 block_max_bytes = 1; */
        if (message.blockMaxBytes !== 0n)
            writer.tag(1, WireType.Varint).int64(message.blockMaxBytes);
        /* int64 block_max_gas = 2; */
        if (message.blockMaxGas !== 0n)
            writer.tag(2, WireType.Varint).int64(message.blockMaxGas);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tendermint.types.HashedParams
 */
export const HashedParams = new HashedParams$Type();
