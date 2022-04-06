/* eslint-disable */
import { messageTypeRegistry } from "../../typeRegistry";
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Gauge } from "../../osmosis/incentives/gauge";
import {
  PageRequest,
  PageResponse,
} from "../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Duration } from "../../google/protobuf/duration";

export const protobufPackage = "osmosis.incentives";

export interface ModuleToDistributeCoinsRequest {
  $type: "osmosis.incentives.ModuleToDistributeCoinsRequest";
}

export interface ModuleToDistributeCoinsResponse {
  $type: "osmosis.incentives.ModuleToDistributeCoinsResponse";
  coins: Coin[];
}

export interface ModuleDistributedCoinsRequest {
  $type: "osmosis.incentives.ModuleDistributedCoinsRequest";
}

export interface ModuleDistributedCoinsResponse {
  $type: "osmosis.incentives.ModuleDistributedCoinsResponse";
  coins: Coin[];
}

export interface GaugeByIDRequest {
  $type: "osmosis.incentives.GaugeByIDRequest";
  id: Long;
}

export interface GaugeByIDResponse {
  $type: "osmosis.incentives.GaugeByIDResponse";
  gauge: Gauge;
}

export interface GaugesRequest {
  $type: "osmosis.incentives.GaugesRequest";
  /** pagination defines an pagination for the request. */
  pagination: PageRequest;
}

export interface GaugesResponse {
  $type: "osmosis.incentives.GaugesResponse";
  data: Gauge[];
  /** pagination defines an pagination for the response. */
  pagination: PageResponse;
}

export interface ActiveGaugesRequest {
  $type: "osmosis.incentives.ActiveGaugesRequest";
  /** pagination defines an pagination for the request. */
  pagination: PageRequest;
}

export interface ActiveGaugesResponse {
  $type: "osmosis.incentives.ActiveGaugesResponse";
  data: Gauge[];
  /** pagination defines an pagination for the response. */
  pagination: PageResponse;
}

export interface ActiveGaugesPerDenomRequest {
  $type: "osmosis.incentives.ActiveGaugesPerDenomRequest";
  denom: string;
  /** pagination defines an pagination for the request. */
  pagination: PageRequest;
}

export interface ActiveGaugesPerDenomResponse {
  $type: "osmosis.incentives.ActiveGaugesPerDenomResponse";
  data: Gauge[];
  /** pagination defines an pagination for the response. */
  pagination: PageResponse;
}

export interface UpcomingGaugesRequest {
  $type: "osmosis.incentives.UpcomingGaugesRequest";
  /** pagination defines an pagination for the request. */
  pagination: PageRequest;
}

export interface UpcomingGaugesResponse {
  $type: "osmosis.incentives.UpcomingGaugesResponse";
  data: Gauge[];
  /** pagination defines an pagination for the response. */
  pagination: PageResponse;
}

export interface RewardsEstRequest {
  $type: "osmosis.incentives.RewardsEstRequest";
  owner: string;
  lockIds: Long[];
  endEpoch: Long;
}

export interface RewardsEstResponse {
  $type: "osmosis.incentives.RewardsEstResponse";
  coins: Coin[];
}

export interface QueryLockableDurationsRequest {
  $type: "osmosis.incentives.QueryLockableDurationsRequest";
}

export interface QueryLockableDurationsResponse {
  $type: "osmosis.incentives.QueryLockableDurationsResponse";
  lockableDurations: Duration[];
}

function createBaseModuleToDistributeCoinsRequest(): ModuleToDistributeCoinsRequest {
  return { $type: "osmosis.incentives.ModuleToDistributeCoinsRequest" };
}

export const ModuleToDistributeCoinsRequest = {
  $type: "osmosis.incentives.ModuleToDistributeCoinsRequest" as const,

  encode(
    _: ModuleToDistributeCoinsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModuleToDistributeCoinsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleToDistributeCoinsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ModuleToDistributeCoinsRequest {
    return {
      $type: ModuleToDistributeCoinsRequest.$type,
    };
  },

  toJSON(_: ModuleToDistributeCoinsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ModuleToDistributeCoinsRequest>, I>>(
    _: I
  ): ModuleToDistributeCoinsRequest {
    const message = createBaseModuleToDistributeCoinsRequest();
    return message;
  },
};

messageTypeRegistry.set(
  ModuleToDistributeCoinsRequest.$type,
  ModuleToDistributeCoinsRequest
);

function createBaseModuleToDistributeCoinsResponse(): ModuleToDistributeCoinsResponse {
  return {
    $type: "osmosis.incentives.ModuleToDistributeCoinsResponse",
    coins: [],
  };
}

export const ModuleToDistributeCoinsResponse = {
  $type: "osmosis.incentives.ModuleToDistributeCoinsResponse" as const,

  encode(
    message: ModuleToDistributeCoinsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModuleToDistributeCoinsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleToDistributeCoinsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModuleToDistributeCoinsResponse {
    return {
      $type: ModuleToDistributeCoinsResponse.$type,
      coins: Array.isArray(object?.coins)
        ? object.coins.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ModuleToDistributeCoinsResponse): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ModuleToDistributeCoinsResponse>, I>>(
    object: I
  ): ModuleToDistributeCoinsResponse {
    const message = createBaseModuleToDistributeCoinsResponse();
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  ModuleToDistributeCoinsResponse.$type,
  ModuleToDistributeCoinsResponse
);

function createBaseModuleDistributedCoinsRequest(): ModuleDistributedCoinsRequest {
  return { $type: "osmosis.incentives.ModuleDistributedCoinsRequest" };
}

export const ModuleDistributedCoinsRequest = {
  $type: "osmosis.incentives.ModuleDistributedCoinsRequest" as const,

  encode(
    _: ModuleDistributedCoinsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModuleDistributedCoinsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleDistributedCoinsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ModuleDistributedCoinsRequest {
    return {
      $type: ModuleDistributedCoinsRequest.$type,
    };
  },

  toJSON(_: ModuleDistributedCoinsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ModuleDistributedCoinsRequest>, I>>(
    _: I
  ): ModuleDistributedCoinsRequest {
    const message = createBaseModuleDistributedCoinsRequest();
    return message;
  },
};

messageTypeRegistry.set(
  ModuleDistributedCoinsRequest.$type,
  ModuleDistributedCoinsRequest
);

function createBaseModuleDistributedCoinsResponse(): ModuleDistributedCoinsResponse {
  return {
    $type: "osmosis.incentives.ModuleDistributedCoinsResponse",
    coins: [],
  };
}

export const ModuleDistributedCoinsResponse = {
  $type: "osmosis.incentives.ModuleDistributedCoinsResponse" as const,

  encode(
    message: ModuleDistributedCoinsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModuleDistributedCoinsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleDistributedCoinsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModuleDistributedCoinsResponse {
    return {
      $type: ModuleDistributedCoinsResponse.$type,
      coins: Array.isArray(object?.coins)
        ? object.coins.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ModuleDistributedCoinsResponse): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ModuleDistributedCoinsResponse>, I>>(
    object: I
  ): ModuleDistributedCoinsResponse {
    const message = createBaseModuleDistributedCoinsResponse();
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  ModuleDistributedCoinsResponse.$type,
  ModuleDistributedCoinsResponse
);

function createBaseGaugeByIDRequest(): GaugeByIDRequest {
  return { $type: "osmosis.incentives.GaugeByIDRequest", id: Long.UZERO };
}

export const GaugeByIDRequest = {
  $type: "osmosis.incentives.GaugeByIDRequest" as const,

  encode(
    message: GaugeByIDRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GaugeByIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGaugeByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GaugeByIDRequest {
    return {
      $type: GaugeByIDRequest.$type,
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
    };
  },

  toJSON(message: GaugeByIDRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GaugeByIDRequest>, I>>(
    object: I
  ): GaugeByIDRequest {
    const message = createBaseGaugeByIDRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(GaugeByIDRequest.$type, GaugeByIDRequest);

function createBaseGaugeByIDResponse(): GaugeByIDResponse {
  return { $type: "osmosis.incentives.GaugeByIDResponse", gauge: undefined };
}

export const GaugeByIDResponse = {
  $type: "osmosis.incentives.GaugeByIDResponse" as const,

  encode(
    message: GaugeByIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.gauge !== undefined) {
      Gauge.encode(message.gauge, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GaugeByIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGaugeByIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gauge = Gauge.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GaugeByIDResponse {
    return {
      $type: GaugeByIDResponse.$type,
      gauge: isSet(object.gauge) ? Gauge.fromJSON(object.gauge) : undefined,
    };
  },

  toJSON(message: GaugeByIDResponse): unknown {
    const obj: any = {};
    message.gauge !== undefined &&
      (obj.gauge = message.gauge ? Gauge.toJSON(message.gauge) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GaugeByIDResponse>, I>>(
    object: I
  ): GaugeByIDResponse {
    const message = createBaseGaugeByIDResponse();
    message.gauge =
      object.gauge !== undefined && object.gauge !== null
        ? Gauge.fromPartial(object.gauge)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(GaugeByIDResponse.$type, GaugeByIDResponse);

function createBaseGaugesRequest(): GaugesRequest {
  return { $type: "osmosis.incentives.GaugesRequest", pagination: undefined };
}

export const GaugesRequest = {
  $type: "osmosis.incentives.GaugesRequest" as const,

  encode(
    message: GaugesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GaugesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGaugesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GaugesRequest {
    return {
      $type: GaugesRequest.$type,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: GaugesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GaugesRequest>, I>>(
    object: I
  ): GaugesRequest {
    const message = createBaseGaugesRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(GaugesRequest.$type, GaugesRequest);

function createBaseGaugesResponse(): GaugesResponse {
  return {
    $type: "osmosis.incentives.GaugesResponse",
    data: [],
    pagination: undefined,
  };
}

export const GaugesResponse = {
  $type: "osmosis.incentives.GaugesResponse" as const,

  encode(
    message: GaugesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.data) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GaugesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGaugesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GaugesResponse {
    return {
      $type: GaugesResponse.$type,
      data: Array.isArray(object?.data)
        ? object.data.map((e: any) => Gauge.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: GaugesResponse): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) => (e ? Gauge.toJSON(e) : undefined));
    } else {
      obj.data = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GaugesResponse>, I>>(
    object: I
  ): GaugesResponse {
    const message = createBaseGaugesResponse();
    message.data = object.data?.map((e) => Gauge.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(GaugesResponse.$type, GaugesResponse);

function createBaseActiveGaugesRequest(): ActiveGaugesRequest {
  return {
    $type: "osmosis.incentives.ActiveGaugesRequest",
    pagination: undefined,
  };
}

export const ActiveGaugesRequest = {
  $type: "osmosis.incentives.ActiveGaugesRequest" as const,

  encode(
    message: ActiveGaugesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActiveGaugesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveGaugesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActiveGaugesRequest {
    return {
      $type: ActiveGaugesRequest.$type,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: ActiveGaugesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActiveGaugesRequest>, I>>(
    object: I
  ): ActiveGaugesRequest {
    const message = createBaseActiveGaugesRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ActiveGaugesRequest.$type, ActiveGaugesRequest);

function createBaseActiveGaugesResponse(): ActiveGaugesResponse {
  return {
    $type: "osmosis.incentives.ActiveGaugesResponse",
    data: [],
    pagination: undefined,
  };
}

export const ActiveGaugesResponse = {
  $type: "osmosis.incentives.ActiveGaugesResponse" as const,

  encode(
    message: ActiveGaugesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.data) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ActiveGaugesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveGaugesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActiveGaugesResponse {
    return {
      $type: ActiveGaugesResponse.$type,
      data: Array.isArray(object?.data)
        ? object.data.map((e: any) => Gauge.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: ActiveGaugesResponse): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) => (e ? Gauge.toJSON(e) : undefined));
    } else {
      obj.data = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActiveGaugesResponse>, I>>(
    object: I
  ): ActiveGaugesResponse {
    const message = createBaseActiveGaugesResponse();
    message.data = object.data?.map((e) => Gauge.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ActiveGaugesResponse.$type, ActiveGaugesResponse);

function createBaseActiveGaugesPerDenomRequest(): ActiveGaugesPerDenomRequest {
  return {
    $type: "osmosis.incentives.ActiveGaugesPerDenomRequest",
    denom: "",
    pagination: undefined,
  };
}

export const ActiveGaugesPerDenomRequest = {
  $type: "osmosis.incentives.ActiveGaugesPerDenomRequest" as const,

  encode(
    message: ActiveGaugesPerDenomRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ActiveGaugesPerDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveGaugesPerDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActiveGaugesPerDenomRequest {
    return {
      $type: ActiveGaugesPerDenomRequest.$type,
      denom: isSet(object.denom) ? String(object.denom) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: ActiveGaugesPerDenomRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActiveGaugesPerDenomRequest>, I>>(
    object: I
  ): ActiveGaugesPerDenomRequest {
    const message = createBaseActiveGaugesPerDenomRequest();
    message.denom = object.denom ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ActiveGaugesPerDenomRequest.$type,
  ActiveGaugesPerDenomRequest
);

function createBaseActiveGaugesPerDenomResponse(): ActiveGaugesPerDenomResponse {
  return {
    $type: "osmosis.incentives.ActiveGaugesPerDenomResponse",
    data: [],
    pagination: undefined,
  };
}

export const ActiveGaugesPerDenomResponse = {
  $type: "osmosis.incentives.ActiveGaugesPerDenomResponse" as const,

  encode(
    message: ActiveGaugesPerDenomResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.data) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ActiveGaugesPerDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveGaugesPerDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActiveGaugesPerDenomResponse {
    return {
      $type: ActiveGaugesPerDenomResponse.$type,
      data: Array.isArray(object?.data)
        ? object.data.map((e: any) => Gauge.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: ActiveGaugesPerDenomResponse): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) => (e ? Gauge.toJSON(e) : undefined));
    } else {
      obj.data = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActiveGaugesPerDenomResponse>, I>>(
    object: I
  ): ActiveGaugesPerDenomResponse {
    const message = createBaseActiveGaugesPerDenomResponse();
    message.data = object.data?.map((e) => Gauge.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ActiveGaugesPerDenomResponse.$type,
  ActiveGaugesPerDenomResponse
);

function createBaseUpcomingGaugesRequest(): UpcomingGaugesRequest {
  return {
    $type: "osmosis.incentives.UpcomingGaugesRequest",
    pagination: undefined,
  };
}

export const UpcomingGaugesRequest = {
  $type: "osmosis.incentives.UpcomingGaugesRequest" as const,

  encode(
    message: UpcomingGaugesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpcomingGaugesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpcomingGaugesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpcomingGaugesRequest {
    return {
      $type: UpcomingGaugesRequest.$type,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: UpcomingGaugesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpcomingGaugesRequest>, I>>(
    object: I
  ): UpcomingGaugesRequest {
    const message = createBaseUpcomingGaugesRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpcomingGaugesRequest.$type, UpcomingGaugesRequest);

function createBaseUpcomingGaugesResponse(): UpcomingGaugesResponse {
  return {
    $type: "osmosis.incentives.UpcomingGaugesResponse",
    data: [],
    pagination: undefined,
  };
}

export const UpcomingGaugesResponse = {
  $type: "osmosis.incentives.UpcomingGaugesResponse" as const,

  encode(
    message: UpcomingGaugesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.data) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpcomingGaugesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpcomingGaugesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpcomingGaugesResponse {
    return {
      $type: UpcomingGaugesResponse.$type,
      data: Array.isArray(object?.data)
        ? object.data.map((e: any) => Gauge.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: UpcomingGaugesResponse): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) => (e ? Gauge.toJSON(e) : undefined));
    } else {
      obj.data = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpcomingGaugesResponse>, I>>(
    object: I
  ): UpcomingGaugesResponse {
    const message = createBaseUpcomingGaugesResponse();
    message.data = object.data?.map((e) => Gauge.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpcomingGaugesResponse.$type, UpcomingGaugesResponse);

function createBaseRewardsEstRequest(): RewardsEstRequest {
  return {
    $type: "osmosis.incentives.RewardsEstRequest",
    owner: "",
    lockIds: [],
    endEpoch: Long.ZERO,
  };
}

export const RewardsEstRequest = {
  $type: "osmosis.incentives.RewardsEstRequest" as const,

  encode(
    message: RewardsEstRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    writer.uint32(18).fork();
    for (const v of message.lockIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (!message.endEpoch.isZero()) {
      writer.uint32(24).int64(message.endEpoch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardsEstRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardsEstRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lockIds.push(reader.uint64() as Long);
            }
          } else {
            message.lockIds.push(reader.uint64() as Long);
          }
          break;
        case 3:
          message.endEpoch = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RewardsEstRequest {
    return {
      $type: RewardsEstRequest.$type,
      owner: isSet(object.owner) ? String(object.owner) : "",
      lockIds: Array.isArray(object?.lockIds)
        ? object.lockIds.map((e: any) => Long.fromString(e))
        : [],
      endEpoch: isSet(object.endEpoch)
        ? Long.fromString(object.endEpoch)
        : Long.ZERO,
    };
  },

  toJSON(message: RewardsEstRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    if (message.lockIds) {
      obj.lockIds = message.lockIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.lockIds = [];
    }
    message.endEpoch !== undefined &&
      (obj.endEpoch = (message.endEpoch || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RewardsEstRequest>, I>>(
    object: I
  ): RewardsEstRequest {
    const message = createBaseRewardsEstRequest();
    message.owner = object.owner ?? "";
    message.lockIds = object.lockIds?.map((e) => Long.fromValue(e)) || [];
    message.endEpoch =
      object.endEpoch !== undefined && object.endEpoch !== null
        ? Long.fromValue(object.endEpoch)
        : Long.ZERO;
    return message;
  },
};

messageTypeRegistry.set(RewardsEstRequest.$type, RewardsEstRequest);

function createBaseRewardsEstResponse(): RewardsEstResponse {
  return { $type: "osmosis.incentives.RewardsEstResponse", coins: [] };
}

export const RewardsEstResponse = {
  $type: "osmosis.incentives.RewardsEstResponse" as const,

  encode(
    message: RewardsEstResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardsEstResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardsEstResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RewardsEstResponse {
    return {
      $type: RewardsEstResponse.$type,
      coins: Array.isArray(object?.coins)
        ? object.coins.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RewardsEstResponse): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RewardsEstResponse>, I>>(
    object: I
  ): RewardsEstResponse {
    const message = createBaseRewardsEstResponse();
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(RewardsEstResponse.$type, RewardsEstResponse);

function createBaseQueryLockableDurationsRequest(): QueryLockableDurationsRequest {
  return { $type: "osmosis.incentives.QueryLockableDurationsRequest" };
}

export const QueryLockableDurationsRequest = {
  $type: "osmosis.incentives.QueryLockableDurationsRequest" as const,

  encode(
    _: QueryLockableDurationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLockableDurationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockableDurationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryLockableDurationsRequest {
    return {
      $type: QueryLockableDurationsRequest.$type,
    };
  },

  toJSON(_: QueryLockableDurationsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockableDurationsRequest>, I>>(
    _: I
  ): QueryLockableDurationsRequest {
    const message = createBaseQueryLockableDurationsRequest();
    return message;
  },
};

messageTypeRegistry.set(
  QueryLockableDurationsRequest.$type,
  QueryLockableDurationsRequest
);

function createBaseQueryLockableDurationsResponse(): QueryLockableDurationsResponse {
  return {
    $type: "osmosis.incentives.QueryLockableDurationsResponse",
    lockableDurations: [],
  };
}

export const QueryLockableDurationsResponse = {
  $type: "osmosis.incentives.QueryLockableDurationsResponse" as const,

  encode(
    message: QueryLockableDurationsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLockableDurationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockableDurationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockableDurations.push(
            Duration.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLockableDurationsResponse {
    return {
      $type: QueryLockableDurationsResponse.$type,
      lockableDurations: Array.isArray(object?.lockableDurations)
        ? object.lockableDurations.map((e: any) => Duration.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryLockableDurationsResponse): unknown {
    const obj: any = {};
    if (message.lockableDurations) {
      obj.lockableDurations = message.lockableDurations.map((e) =>
        e ? Duration.toJSON(e) : undefined
      );
    } else {
      obj.lockableDurations = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockableDurationsResponse>, I>>(
    object: I
  ): QueryLockableDurationsResponse {
    const message = createBaseQueryLockableDurationsResponse();
    message.lockableDurations =
      object.lockableDurations?.map((e) => Duration.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  QueryLockableDurationsResponse.$type,
  QueryLockableDurationsResponse
);

/** Query defines the gRPC querier service. */
export interface Query {
  /** returns coins that is going to be distributed */
  ModuleToDistributeCoins(
    request: ModuleToDistributeCoinsRequest
  ): Promise<ModuleToDistributeCoinsResponse>;
  /** returns coins that are distributed by module so far */
  ModuleDistributedCoins(
    request: ModuleDistributedCoinsRequest
  ): Promise<ModuleDistributedCoinsResponse>;
  /** returns Gauge by id */
  GaugeByID(request: GaugeByIDRequest): Promise<GaugeByIDResponse>;
  /** returns gauges both upcoming and active */
  Gauges(request: GaugesRequest): Promise<GaugesResponse>;
  /** returns active gauges */
  ActiveGauges(request: ActiveGaugesRequest): Promise<ActiveGaugesResponse>;
  ActiveGaugesPerDenom(
    request: ActiveGaugesPerDenomRequest
  ): Promise<ActiveGaugesPerDenomResponse>;
  /** returns scheduled gauges */
  UpcomingGauges(
    request: UpcomingGaugesRequest
  ): Promise<UpcomingGaugesResponse>;
  /**
   * RewardsEst returns an estimate of the rewards at a future specific time.
   * The querier either provides an address or a set of locks
   * for which they want to find the associated rewards.
   */
  RewardsEst(request: RewardsEstRequest): Promise<RewardsEstResponse>;
  /** returns lockable durations that are valid to give incentives */
  LockableDurations(
    request: QueryLockableDurationsRequest
  ): Promise<QueryLockableDurationsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ModuleToDistributeCoins = this.ModuleToDistributeCoins.bind(this);
    this.ModuleDistributedCoins = this.ModuleDistributedCoins.bind(this);
    this.GaugeByID = this.GaugeByID.bind(this);
    this.Gauges = this.Gauges.bind(this);
    this.ActiveGauges = this.ActiveGauges.bind(this);
    this.ActiveGaugesPerDenom = this.ActiveGaugesPerDenom.bind(this);
    this.UpcomingGauges = this.UpcomingGauges.bind(this);
    this.RewardsEst = this.RewardsEst.bind(this);
    this.LockableDurations = this.LockableDurations.bind(this);
  }
  ModuleToDistributeCoins(
    request: ModuleToDistributeCoinsRequest
  ): Promise<ModuleToDistributeCoinsResponse> {
    const data = ModuleToDistributeCoinsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.incentives.Query",
      "ModuleToDistributeCoins",
      data
    );
    return promise.then((data) =>
      ModuleToDistributeCoinsResponse.decode(new _m0.Reader(data))
    );
  }

  ModuleDistributedCoins(
    request: ModuleDistributedCoinsRequest
  ): Promise<ModuleDistributedCoinsResponse> {
    const data = ModuleDistributedCoinsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.incentives.Query",
      "ModuleDistributedCoins",
      data
    );
    return promise.then((data) =>
      ModuleDistributedCoinsResponse.decode(new _m0.Reader(data))
    );
  }

  GaugeByID(request: GaugeByIDRequest): Promise<GaugeByIDResponse> {
    const data = GaugeByIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.incentives.Query",
      "GaugeByID",
      data
    );
    return promise.then((data) =>
      GaugeByIDResponse.decode(new _m0.Reader(data))
    );
  }

  Gauges(request: GaugesRequest): Promise<GaugesResponse> {
    const data = GaugesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.incentives.Query",
      "Gauges",
      data
    );
    return promise.then((data) => GaugesResponse.decode(new _m0.Reader(data)));
  }

  ActiveGauges(request: ActiveGaugesRequest): Promise<ActiveGaugesResponse> {
    const data = ActiveGaugesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.incentives.Query",
      "ActiveGauges",
      data
    );
    return promise.then((data) =>
      ActiveGaugesResponse.decode(new _m0.Reader(data))
    );
  }

  ActiveGaugesPerDenom(
    request: ActiveGaugesPerDenomRequest
  ): Promise<ActiveGaugesPerDenomResponse> {
    const data = ActiveGaugesPerDenomRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.incentives.Query",
      "ActiveGaugesPerDenom",
      data
    );
    return promise.then((data) =>
      ActiveGaugesPerDenomResponse.decode(new _m0.Reader(data))
    );
  }

  UpcomingGauges(
    request: UpcomingGaugesRequest
  ): Promise<UpcomingGaugesResponse> {
    const data = UpcomingGaugesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.incentives.Query",
      "UpcomingGauges",
      data
    );
    return promise.then((data) =>
      UpcomingGaugesResponse.decode(new _m0.Reader(data))
    );
  }

  RewardsEst(request: RewardsEstRequest): Promise<RewardsEstResponse> {
    const data = RewardsEstRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.incentives.Query",
      "RewardsEst",
      data
    );
    return promise.then((data) =>
      RewardsEstResponse.decode(new _m0.Reader(data))
    );
  }

  LockableDurations(
    request: QueryLockableDurationsRequest
  ): Promise<QueryLockableDurationsResponse> {
    const data = QueryLockableDurationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.incentives.Query",
      "LockableDurations",
      data
    );
    return promise.then((data) =>
      QueryLockableDurationsResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P> | "$type">,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
