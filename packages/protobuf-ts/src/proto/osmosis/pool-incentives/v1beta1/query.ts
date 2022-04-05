// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "osmosis/pool-incentives/v1beta1/query.proto" (package "osmosis.poolincentives.v1beta1", syntax proto3),// tslint:disable
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
import { Gauge } from "../../incentives/gauge";
import { Params } from "./incentives";
import { DistrInfo } from "./incentives";
import { Duration } from "../../../google/protobuf/duration";
/**
 * @generated from protobuf message osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest
 */
export interface QueryGaugeIdsRequest {
    /**
     * @generated from protobuf field: uint64 pool_id = 1;
     */
    poolId: bigint;
}
/**
 * @generated from protobuf message osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse
 */
export interface QueryGaugeIdsResponse {
    /**
     * @generated from protobuf field: repeated osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse.GaugeIdWithDuration gauge_ids_with_duration = 1;
     */
    gaugeIdsWithDuration: QueryGaugeIdsResponse_GaugeIdWithDuration[];
}
/**
 * @generated from protobuf message osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse.GaugeIdWithDuration
 */
export interface QueryGaugeIdsResponse_GaugeIdWithDuration {
    /**
     * @generated from protobuf field: uint64 gauge_id = 1;
     */
    gaugeId: bigint;
    /**
     * @generated from protobuf field: google.protobuf.Duration duration = 2;
     */
    duration?: Duration;
}
/**
 * @generated from protobuf message osmosis.poolincentives.v1beta1.QueryDistrInfoRequest
 */
export interface QueryDistrInfoRequest {
}
/**
 * @generated from protobuf message osmosis.poolincentives.v1beta1.QueryDistrInfoResponse
 */
export interface QueryDistrInfoResponse {
    /**
     * @generated from protobuf field: osmosis.poolincentives.v1beta1.DistrInfo distr_info = 1;
     */
    distrInfo?: DistrInfo;
}
/**
 * @generated from protobuf message osmosis.poolincentives.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequest {
}
/**
 * @generated from protobuf message osmosis.poolincentives.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponse {
    /**
     * @generated from protobuf field: osmosis.poolincentives.v1beta1.Params params = 1;
     */
    params?: Params;
}
/**
 * @generated from protobuf message osmosis.poolincentives.v1beta1.QueryLockableDurationsRequest
 */
export interface QueryLockableDurationsRequest {
}
/**
 * @generated from protobuf message osmosis.poolincentives.v1beta1.QueryLockableDurationsResponse
 */
export interface QueryLockableDurationsResponse {
    /**
     * @generated from protobuf field: repeated google.protobuf.Duration lockable_durations = 1;
     */
    lockableDurations: Duration[];
}
/**
 * @generated from protobuf message osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsRequest
 */
export interface QueryIncentivizedPoolsRequest {
}
/**
 * @generated from protobuf message osmosis.poolincentives.v1beta1.IncentivizedPool
 */
export interface IncentivizedPool {
    /**
     * @generated from protobuf field: uint64 pool_id = 1;
     */
    poolId: bigint;
    /**
     * @generated from protobuf field: google.protobuf.Duration lockable_duration = 2;
     */
    lockableDuration?: Duration;
    /**
     * @generated from protobuf field: uint64 gauge_id = 3;
     */
    gaugeId: bigint;
}
/**
 * @generated from protobuf message osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsResponse
 */
export interface QueryIncentivizedPoolsResponse {
    /**
     * @generated from protobuf field: repeated osmosis.poolincentives.v1beta1.IncentivizedPool incentivized_pools = 1;
     */
    incentivizedPools: IncentivizedPool[];
}
/**
 * @generated from protobuf message osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesRequest
 */
export interface QueryExternalIncentiveGaugesRequest {
}
/**
 * @generated from protobuf message osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesResponse
 */
export interface QueryExternalIncentiveGaugesResponse {
    /**
     * @generated from protobuf field: repeated osmosis.incentives.Gauge data = 1;
     */
    data: Gauge[];
}
// @generated message type with reflection information, may provide speed optimized methods
class QueryGaugeIdsRequest$Type extends MessageType<QueryGaugeIdsRequest> {
    constructor() {
        super("osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest", [
            { no: 1, name: "pool_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/, options: { "gogoproto.moretags": "yaml:\"pool_id\"" } }
        ]);
    }
    create(value?: PartialMessage<QueryGaugeIdsRequest>): QueryGaugeIdsRequest {
        const message = { poolId: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryGaugeIdsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryGaugeIdsRequest): QueryGaugeIdsRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 pool_id */ 1:
                    message.poolId = reader.uint64().toBigInt();
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
    internalBinaryWrite(message: QueryGaugeIdsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 pool_id = 1; */
        if (message.poolId !== 0n)
            writer.tag(1, WireType.Varint).uint64(message.poolId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest
 */
export const QueryGaugeIdsRequest = new QueryGaugeIdsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryGaugeIdsResponse$Type extends MessageType<QueryGaugeIdsResponse> {
    constructor() {
        super("osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse", [
            { no: 1, name: "gauge_ids_with_duration", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => QueryGaugeIdsResponse_GaugeIdWithDuration, options: { "gogoproto.moretags": "yaml:\"gauge_ids_with_duration\"" } }
        ]);
    }
    create(value?: PartialMessage<QueryGaugeIdsResponse>): QueryGaugeIdsResponse {
        const message = { gaugeIdsWithDuration: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryGaugeIdsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryGaugeIdsResponse): QueryGaugeIdsResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse.GaugeIdWithDuration gauge_ids_with_duration */ 1:
                    message.gaugeIdsWithDuration.push(QueryGaugeIdsResponse_GaugeIdWithDuration.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: QueryGaugeIdsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse.GaugeIdWithDuration gauge_ids_with_duration = 1; */
        for (let i = 0; i < message.gaugeIdsWithDuration.length; i++)
            QueryGaugeIdsResponse_GaugeIdWithDuration.internalBinaryWrite(message.gaugeIdsWithDuration[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse
 */
export const QueryGaugeIdsResponse = new QueryGaugeIdsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryGaugeIdsResponse_GaugeIdWithDuration$Type extends MessageType<QueryGaugeIdsResponse_GaugeIdWithDuration> {
    constructor() {
        super("osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse.GaugeIdWithDuration", [
            { no: 1, name: "gauge_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/, options: { "gogoproto.moretags": "yaml:\"gauge_id\"" } },
            { no: 2, name: "duration", kind: "message", T: () => Duration, options: { "gogoproto.nullable": false, "gogoproto.stdduration": true } }
        ]);
    }
    create(value?: PartialMessage<QueryGaugeIdsResponse_GaugeIdWithDuration>): QueryGaugeIdsResponse_GaugeIdWithDuration {
        const message = { gaugeId: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryGaugeIdsResponse_GaugeIdWithDuration>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryGaugeIdsResponse_GaugeIdWithDuration): QueryGaugeIdsResponse_GaugeIdWithDuration {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 gauge_id */ 1:
                    message.gaugeId = reader.uint64().toBigInt();
                    break;
                case /* google.protobuf.Duration duration */ 2:
                    message.duration = Duration.internalBinaryRead(reader, reader.uint32(), options, message.duration);
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
    internalBinaryWrite(message: QueryGaugeIdsResponse_GaugeIdWithDuration, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 gauge_id = 1; */
        if (message.gaugeId !== 0n)
            writer.tag(1, WireType.Varint).uint64(message.gaugeId);
        /* google.protobuf.Duration duration = 2; */
        if (message.duration)
            Duration.internalBinaryWrite(message.duration, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse.GaugeIdWithDuration
 */
export const QueryGaugeIdsResponse_GaugeIdWithDuration = new QueryGaugeIdsResponse_GaugeIdWithDuration$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryDistrInfoRequest$Type extends MessageType<QueryDistrInfoRequest> {
    constructor() {
        super("osmosis.poolincentives.v1beta1.QueryDistrInfoRequest", []);
    }
    create(value?: PartialMessage<QueryDistrInfoRequest>): QueryDistrInfoRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryDistrInfoRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryDistrInfoRequest): QueryDistrInfoRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: QueryDistrInfoRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.poolincentives.v1beta1.QueryDistrInfoRequest
 */
export const QueryDistrInfoRequest = new QueryDistrInfoRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryDistrInfoResponse$Type extends MessageType<QueryDistrInfoResponse> {
    constructor() {
        super("osmosis.poolincentives.v1beta1.QueryDistrInfoResponse", [
            { no: 1, name: "distr_info", kind: "message", T: () => DistrInfo, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"distr_info\"" } }
        ]);
    }
    create(value?: PartialMessage<QueryDistrInfoResponse>): QueryDistrInfoResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryDistrInfoResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryDistrInfoResponse): QueryDistrInfoResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* osmosis.poolincentives.v1beta1.DistrInfo distr_info */ 1:
                    message.distrInfo = DistrInfo.internalBinaryRead(reader, reader.uint32(), options, message.distrInfo);
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
    internalBinaryWrite(message: QueryDistrInfoResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* osmosis.poolincentives.v1beta1.DistrInfo distr_info = 1; */
        if (message.distrInfo)
            DistrInfo.internalBinaryWrite(message.distrInfo, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.poolincentives.v1beta1.QueryDistrInfoResponse
 */
export const QueryDistrInfoResponse = new QueryDistrInfoResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryParamsRequest$Type extends MessageType<QueryParamsRequest> {
    constructor() {
        super("osmosis.poolincentives.v1beta1.QueryParamsRequest", []);
    }
    create(value?: PartialMessage<QueryParamsRequest>): QueryParamsRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryParamsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryParamsRequest): QueryParamsRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: QueryParamsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.poolincentives.v1beta1.QueryParamsRequest
 */
export const QueryParamsRequest = new QueryParamsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryParamsResponse$Type extends MessageType<QueryParamsResponse> {
    constructor() {
        super("osmosis.poolincentives.v1beta1.QueryParamsResponse", [
            { no: 1, name: "params", kind: "message", T: () => Params, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value?: PartialMessage<QueryParamsResponse>): QueryParamsResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryParamsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryParamsResponse): QueryParamsResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* osmosis.poolincentives.v1beta1.Params params */ 1:
                    message.params = Params.internalBinaryRead(reader, reader.uint32(), options, message.params);
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
    internalBinaryWrite(message: QueryParamsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* osmosis.poolincentives.v1beta1.Params params = 1; */
        if (message.params)
            Params.internalBinaryWrite(message.params, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.poolincentives.v1beta1.QueryParamsResponse
 */
export const QueryParamsResponse = new QueryParamsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryLockableDurationsRequest$Type extends MessageType<QueryLockableDurationsRequest> {
    constructor() {
        super("osmosis.poolincentives.v1beta1.QueryLockableDurationsRequest", []);
    }
    create(value?: PartialMessage<QueryLockableDurationsRequest>): QueryLockableDurationsRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryLockableDurationsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryLockableDurationsRequest): QueryLockableDurationsRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: QueryLockableDurationsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.poolincentives.v1beta1.QueryLockableDurationsRequest
 */
export const QueryLockableDurationsRequest = new QueryLockableDurationsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryLockableDurationsResponse$Type extends MessageType<QueryLockableDurationsResponse> {
    constructor() {
        super("osmosis.poolincentives.v1beta1.QueryLockableDurationsResponse", [
            { no: 1, name: "lockable_durations", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Duration, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"lockable_durations\"", "gogoproto.stdduration": true } }
        ]);
    }
    create(value?: PartialMessage<QueryLockableDurationsResponse>): QueryLockableDurationsResponse {
        const message = { lockableDurations: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryLockableDurationsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryLockableDurationsResponse): QueryLockableDurationsResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated google.protobuf.Duration lockable_durations */ 1:
                    message.lockableDurations.push(Duration.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: QueryLockableDurationsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated google.protobuf.Duration lockable_durations = 1; */
        for (let i = 0; i < message.lockableDurations.length; i++)
            Duration.internalBinaryWrite(message.lockableDurations[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.poolincentives.v1beta1.QueryLockableDurationsResponse
 */
export const QueryLockableDurationsResponse = new QueryLockableDurationsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryIncentivizedPoolsRequest$Type extends MessageType<QueryIncentivizedPoolsRequest> {
    constructor() {
        super("osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsRequest", []);
    }
    create(value?: PartialMessage<QueryIncentivizedPoolsRequest>): QueryIncentivizedPoolsRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryIncentivizedPoolsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryIncentivizedPoolsRequest): QueryIncentivizedPoolsRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: QueryIncentivizedPoolsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsRequest
 */
export const QueryIncentivizedPoolsRequest = new QueryIncentivizedPoolsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IncentivizedPool$Type extends MessageType<IncentivizedPool> {
    constructor() {
        super("osmosis.poolincentives.v1beta1.IncentivizedPool", [
            { no: 1, name: "pool_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/, options: { "gogoproto.moretags": "yaml:\"pool_id\"" } },
            { no: 2, name: "lockable_duration", kind: "message", T: () => Duration, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"lockable_duration\"", "gogoproto.stdduration": true } },
            { no: 3, name: "gauge_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/, options: { "gogoproto.moretags": "yaml:\"gauge_id\"" } }
        ]);
    }
    create(value?: PartialMessage<IncentivizedPool>): IncentivizedPool {
        const message = { poolId: 0n, gaugeId: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<IncentivizedPool>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: IncentivizedPool): IncentivizedPool {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 pool_id */ 1:
                    message.poolId = reader.uint64().toBigInt();
                    break;
                case /* google.protobuf.Duration lockable_duration */ 2:
                    message.lockableDuration = Duration.internalBinaryRead(reader, reader.uint32(), options, message.lockableDuration);
                    break;
                case /* uint64 gauge_id */ 3:
                    message.gaugeId = reader.uint64().toBigInt();
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
    internalBinaryWrite(message: IncentivizedPool, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 pool_id = 1; */
        if (message.poolId !== 0n)
            writer.tag(1, WireType.Varint).uint64(message.poolId);
        /* google.protobuf.Duration lockable_duration = 2; */
        if (message.lockableDuration)
            Duration.internalBinaryWrite(message.lockableDuration, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* uint64 gauge_id = 3; */
        if (message.gaugeId !== 0n)
            writer.tag(3, WireType.Varint).uint64(message.gaugeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.poolincentives.v1beta1.IncentivizedPool
 */
export const IncentivizedPool = new IncentivizedPool$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryIncentivizedPoolsResponse$Type extends MessageType<QueryIncentivizedPoolsResponse> {
    constructor() {
        super("osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsResponse", [
            { no: 1, name: "incentivized_pools", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => IncentivizedPool, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"incentivized_pools\"" } }
        ]);
    }
    create(value?: PartialMessage<QueryIncentivizedPoolsResponse>): QueryIncentivizedPoolsResponse {
        const message = { incentivizedPools: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryIncentivizedPoolsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryIncentivizedPoolsResponse): QueryIncentivizedPoolsResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated osmosis.poolincentives.v1beta1.IncentivizedPool incentivized_pools */ 1:
                    message.incentivizedPools.push(IncentivizedPool.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: QueryIncentivizedPoolsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated osmosis.poolincentives.v1beta1.IncentivizedPool incentivized_pools = 1; */
        for (let i = 0; i < message.incentivizedPools.length; i++)
            IncentivizedPool.internalBinaryWrite(message.incentivizedPools[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsResponse
 */
export const QueryIncentivizedPoolsResponse = new QueryIncentivizedPoolsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryExternalIncentiveGaugesRequest$Type extends MessageType<QueryExternalIncentiveGaugesRequest> {
    constructor() {
        super("osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesRequest", []);
    }
    create(value?: PartialMessage<QueryExternalIncentiveGaugesRequest>): QueryExternalIncentiveGaugesRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryExternalIncentiveGaugesRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryExternalIncentiveGaugesRequest): QueryExternalIncentiveGaugesRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: QueryExternalIncentiveGaugesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesRequest
 */
export const QueryExternalIncentiveGaugesRequest = new QueryExternalIncentiveGaugesRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryExternalIncentiveGaugesResponse$Type extends MessageType<QueryExternalIncentiveGaugesResponse> {
    constructor() {
        super("osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesResponse", [
            { no: 1, name: "data", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Gauge, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value?: PartialMessage<QueryExternalIncentiveGaugesResponse>): QueryExternalIncentiveGaugesResponse {
        const message = { data: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryExternalIncentiveGaugesResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryExternalIncentiveGaugesResponse): QueryExternalIncentiveGaugesResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated osmosis.incentives.Gauge data */ 1:
                    message.data.push(Gauge.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: QueryExternalIncentiveGaugesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated osmosis.incentives.Gauge data = 1; */
        for (let i = 0; i < message.data.length; i++)
            Gauge.internalBinaryWrite(message.data[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesResponse
 */
export const QueryExternalIncentiveGaugesResponse = new QueryExternalIncentiveGaugesResponse$Type();
/**
 * @generated ServiceType for protobuf service osmosis.poolincentives.v1beta1.Query
 */
export const Query = new ServiceType("osmosis.poolincentives.v1beta1.Query", [
    { name: "GaugeIds", options: { "google.api.http": { get: "/osmosis/pool-incentives/v1beta1/gauge-ids/{pool_id}" } }, I: QueryGaugeIdsRequest, O: QueryGaugeIdsResponse },
    { name: "DistrInfo", options: { "google.api.http": { get: "/osmosis/pool-incentives/v1beta1/distr_info" } }, I: QueryDistrInfoRequest, O: QueryDistrInfoResponse },
    { name: "Params", options: { "google.api.http": { get: "/osmosis/pool-incentives/v1beta1/params" } }, I: QueryParamsRequest, O: QueryParamsResponse },
    { name: "LockableDurations", options: { "google.api.http": { get: "/osmosis/pool-incentives/v1beta1/lockable_durations" } }, I: QueryLockableDurationsRequest, O: QueryLockableDurationsResponse },
    { name: "IncentivizedPools", options: { "google.api.http": { get: "/osmosis/pool-incentives/v1beta1/incentivized_pools" } }, I: QueryIncentivizedPoolsRequest, O: QueryIncentivizedPoolsResponse },
    { name: "ExternalIncentiveGauges", options: { "google.api.http": { get: "/osmosis/pool-incentives/v1beta1/external_incentive_gauges" } }, I: QueryExternalIncentiveGaugesRequest, O: QueryExternalIncentiveGaugesResponse }
]);
