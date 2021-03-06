// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "cosmos/params/v1beta1/query.proto" (package "cosmos.params.v1beta1", syntax proto3),// tslint:disable
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
import { ParamChange } from "./params";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from protobuf message cosmos.params.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequest {
    /**
     * subspace defines the module to query the parameter for.
     *
     * @generated from protobuf field: string subspace = 1;
     */
    subspace: string;
    /**
     * key defines the key of the parameter in the subspace.
     *
     * @generated from protobuf field: string key = 2;
     */
    key: string;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 *
 * @generated from protobuf message cosmos.params.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponse {
    /**
     * param defines the queried parameter.
     *
     * @generated from protobuf field: cosmos.params.v1beta1.ParamChange param = 1;
     */
    param?: ParamChange;
}
/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 *
 * @generated from protobuf message cosmos.params.v1beta1.QuerySubspacesRequest
 */
export interface QuerySubspacesRequest {
}
/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 *
 * @generated from protobuf message cosmos.params.v1beta1.QuerySubspacesResponse
 */
export interface QuerySubspacesResponse {
    /**
     * @generated from protobuf field: repeated cosmos.params.v1beta1.Subspace subspaces = 1;
     */
    subspaces: Subspace[];
}
/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 *
 * @generated from protobuf message cosmos.params.v1beta1.Subspace
 */
export interface Subspace {
    /**
     * @generated from protobuf field: string subspace = 1;
     */
    subspace: string;
    /**
     * @generated from protobuf field: repeated string keys = 2;
     */
    keys: string[];
}
// @generated message type with reflection information, may provide speed optimized methods
class QueryParamsRequest$Type extends MessageType<QueryParamsRequest> {
    constructor() {
        super("cosmos.params.v1beta1.QueryParamsRequest", [
            { no: 1, name: "subspace", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "key", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<QueryParamsRequest>): QueryParamsRequest {
        const message = { subspace: "", key: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryParamsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryParamsRequest): QueryParamsRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string subspace */ 1:
                    message.subspace = reader.string();
                    break;
                case /* string key */ 2:
                    message.key = reader.string();
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
    internalBinaryWrite(message: QueryParamsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string subspace = 1; */
        if (message.subspace !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.subspace);
        /* string key = 2; */
        if (message.key !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.key);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.params.v1beta1.QueryParamsRequest
 */
export const QueryParamsRequest = new QueryParamsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryParamsResponse$Type extends MessageType<QueryParamsResponse> {
    constructor() {
        super("cosmos.params.v1beta1.QueryParamsResponse", [
            { no: 1, name: "param", kind: "message", T: () => ParamChange, options: { "gogoproto.nullable": false } }
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
                case /* cosmos.params.v1beta1.ParamChange param */ 1:
                    message.param = ParamChange.internalBinaryRead(reader, reader.uint32(), options, message.param);
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
        /* cosmos.params.v1beta1.ParamChange param = 1; */
        if (message.param)
            ParamChange.internalBinaryWrite(message.param, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.params.v1beta1.QueryParamsResponse
 */
export const QueryParamsResponse = new QueryParamsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QuerySubspacesRequest$Type extends MessageType<QuerySubspacesRequest> {
    constructor() {
        super("cosmos.params.v1beta1.QuerySubspacesRequest", []);
    }
    create(value?: PartialMessage<QuerySubspacesRequest>): QuerySubspacesRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QuerySubspacesRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QuerySubspacesRequest): QuerySubspacesRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: QuerySubspacesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.params.v1beta1.QuerySubspacesRequest
 */
export const QuerySubspacesRequest = new QuerySubspacesRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QuerySubspacesResponse$Type extends MessageType<QuerySubspacesResponse> {
    constructor() {
        super("cosmos.params.v1beta1.QuerySubspacesResponse", [
            { no: 1, name: "subspaces", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Subspace }
        ]);
    }
    create(value?: PartialMessage<QuerySubspacesResponse>): QuerySubspacesResponse {
        const message = { subspaces: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QuerySubspacesResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QuerySubspacesResponse): QuerySubspacesResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated cosmos.params.v1beta1.Subspace subspaces */ 1:
                    message.subspaces.push(Subspace.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: QuerySubspacesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated cosmos.params.v1beta1.Subspace subspaces = 1; */
        for (let i = 0; i < message.subspaces.length; i++)
            Subspace.internalBinaryWrite(message.subspaces[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.params.v1beta1.QuerySubspacesResponse
 */
export const QuerySubspacesResponse = new QuerySubspacesResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Subspace$Type extends MessageType<Subspace> {
    constructor() {
        super("cosmos.params.v1beta1.Subspace", [
            { no: 1, name: "subspace", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "keys", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Subspace>): Subspace {
        const message = { subspace: "", keys: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Subspace>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Subspace): Subspace {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string subspace */ 1:
                    message.subspace = reader.string();
                    break;
                case /* repeated string keys */ 2:
                    message.keys.push(reader.string());
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
    internalBinaryWrite(message: Subspace, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string subspace = 1; */
        if (message.subspace !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.subspace);
        /* repeated string keys = 2; */
        for (let i = 0; i < message.keys.length; i++)
            writer.tag(2, WireType.LengthDelimited).string(message.keys[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.params.v1beta1.Subspace
 */
export const Subspace = new Subspace$Type();
/**
 * @generated ServiceType for protobuf service cosmos.params.v1beta1.Query
 */
export const Query = new ServiceType("cosmos.params.v1beta1.Query", [
    { name: "Params", options: { "google.api.http": { get: "/cosmos/params/v1beta1/params" } }, I: QueryParamsRequest, O: QueryParamsResponse },
    { name: "Subspaces", options: { "google.api.http": { get: "/cosmos/params/v1beta1/subspaces" } }, I: QuerySubspacesRequest, O: QuerySubspacesResponse }
]);
