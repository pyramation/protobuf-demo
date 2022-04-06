/* eslint-disable */
import { messageTypeRegistry } from "../../typeRegistry";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "google.protobuf";

/**
 * Wrapper message for `double`.
 *
 * The JSON representation for `DoubleValue` is JSON number.
 */
export interface DoubleValue {
  $type: "google.protobuf.DoubleValue";
  /** The double value. */
  value: number;
}

/**
 * Wrapper message for `float`.
 *
 * The JSON representation for `FloatValue` is JSON number.
 */
export interface FloatValue {
  $type: "google.protobuf.FloatValue";
  /** The float value. */
  value: number;
}

/**
 * Wrapper message for `int64`.
 *
 * The JSON representation for `Int64Value` is JSON string.
 */
export interface Int64Value {
  $type: "google.protobuf.Int64Value";
  /** The int64 value. */
  value: Long;
}

/**
 * Wrapper message for `uint64`.
 *
 * The JSON representation for `UInt64Value` is JSON string.
 */
export interface UInt64Value {
  $type: "google.protobuf.UInt64Value";
  /** The uint64 value. */
  value: Long;
}

/**
 * Wrapper message for `int32`.
 *
 * The JSON representation for `Int32Value` is JSON number.
 */
export interface Int32Value {
  $type: "google.protobuf.Int32Value";
  /** The int32 value. */
  value: number;
}

/**
 * Wrapper message for `uint32`.
 *
 * The JSON representation for `UInt32Value` is JSON number.
 */
export interface UInt32Value {
  $type: "google.protobuf.UInt32Value";
  /** The uint32 value. */
  value: number;
}

/**
 * Wrapper message for `bool`.
 *
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 */
export interface BoolValue {
  $type: "google.protobuf.BoolValue";
  /** The bool value. */
  value: boolean;
}

/**
 * Wrapper message for `string`.
 *
 * The JSON representation for `StringValue` is JSON string.
 */
export interface StringValue {
  $type: "google.protobuf.StringValue";
  /** The string value. */
  value: string;
}

/**
 * Wrapper message for `bytes`.
 *
 * The JSON representation for `BytesValue` is JSON string.
 */
export interface BytesValue {
  $type: "google.protobuf.BytesValue";
  /** The bytes value. */
  value: Uint8Array;
}

function createBaseDoubleValue(): DoubleValue {
  return { $type: "google.protobuf.DoubleValue", value: 0 };
}

export const DoubleValue = {
  $type: "google.protobuf.DoubleValue" as const,

  encode(
    message: DoubleValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(9).double(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DoubleValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDoubleValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DoubleValue {
    return {
      $type: DoubleValue.$type,
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: DoubleValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DoubleValue>, I>>(
    object: I
  ): DoubleValue {
    const message = createBaseDoubleValue();
    message.value = object.value ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DoubleValue.$type, DoubleValue);

function createBaseFloatValue(): FloatValue {
  return { $type: "google.protobuf.FloatValue", value: 0 };
}

export const FloatValue = {
  $type: "google.protobuf.FloatValue" as const,

  encode(
    message: FloatValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(13).float(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FloatValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFloatValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FloatValue {
    return {
      $type: FloatValue.$type,
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: FloatValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FloatValue>, I>>(
    object: I
  ): FloatValue {
    const message = createBaseFloatValue();
    message.value = object.value ?? 0;
    return message;
  },
};

messageTypeRegistry.set(FloatValue.$type, FloatValue);

function createBaseInt64Value(): Int64Value {
  return { $type: "google.protobuf.Int64Value", value: Long.ZERO };
}

export const Int64Value = {
  $type: "google.protobuf.Int64Value" as const,

  encode(
    message: Int64Value,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.value.isZero()) {
      writer.uint32(8).int64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Int64Value {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInt64Value();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Int64Value {
    return {
      $type: Int64Value.$type,
      value: isSet(object.value) ? Long.fromString(object.value) : Long.ZERO,
    };
  },

  toJSON(message: Int64Value): unknown {
    const obj: any = {};
    message.value !== undefined &&
      (obj.value = (message.value || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Int64Value>, I>>(
    object: I
  ): Int64Value {
    const message = createBaseInt64Value();
    message.value =
      object.value !== undefined && object.value !== null
        ? Long.fromValue(object.value)
        : Long.ZERO;
    return message;
  },
};

messageTypeRegistry.set(Int64Value.$type, Int64Value);

function createBaseUInt64Value(): UInt64Value {
  return { $type: "google.protobuf.UInt64Value", value: Long.UZERO };
}

export const UInt64Value = {
  $type: "google.protobuf.UInt64Value" as const,

  encode(
    message: UInt64Value,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.value.isZero()) {
      writer.uint32(8).uint64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UInt64Value {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUInt64Value();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UInt64Value {
    return {
      $type: UInt64Value.$type,
      value: isSet(object.value) ? Long.fromString(object.value) : Long.UZERO,
    };
  },

  toJSON(message: UInt64Value): unknown {
    const obj: any = {};
    message.value !== undefined &&
      (obj.value = (message.value || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UInt64Value>, I>>(
    object: I
  ): UInt64Value {
    const message = createBaseUInt64Value();
    message.value =
      object.value !== undefined && object.value !== null
        ? Long.fromValue(object.value)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(UInt64Value.$type, UInt64Value);

function createBaseInt32Value(): Int32Value {
  return { $type: "google.protobuf.Int32Value", value: 0 };
}

export const Int32Value = {
  $type: "google.protobuf.Int32Value" as const,

  encode(
    message: Int32Value,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Int32Value {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInt32Value();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Int32Value {
    return {
      $type: Int32Value.$type,
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: Int32Value): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Int32Value>, I>>(
    object: I
  ): Int32Value {
    const message = createBaseInt32Value();
    message.value = object.value ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Int32Value.$type, Int32Value);

function createBaseUInt32Value(): UInt32Value {
  return { $type: "google.protobuf.UInt32Value", value: 0 };
}

export const UInt32Value = {
  $type: "google.protobuf.UInt32Value" as const,

  encode(
    message: UInt32Value,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).uint32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UInt32Value {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUInt32Value();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UInt32Value {
    return {
      $type: UInt32Value.$type,
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: UInt32Value): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UInt32Value>, I>>(
    object: I
  ): UInt32Value {
    const message = createBaseUInt32Value();
    message.value = object.value ?? 0;
    return message;
  },
};

messageTypeRegistry.set(UInt32Value.$type, UInt32Value);

function createBaseBoolValue(): BoolValue {
  return { $type: "google.protobuf.BoolValue", value: false };
}

export const BoolValue = {
  $type: "google.protobuf.BoolValue" as const,

  encode(
    message: BoolValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value === true) {
      writer.uint32(8).bool(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BoolValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBoolValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BoolValue {
    return {
      $type: BoolValue.$type,
      value: isSet(object.value) ? Boolean(object.value) : false,
    };
  },

  toJSON(message: BoolValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BoolValue>, I>>(
    object: I
  ): BoolValue {
    const message = createBaseBoolValue();
    message.value = object.value ?? false;
    return message;
  },
};

messageTypeRegistry.set(BoolValue.$type, BoolValue);

function createBaseStringValue(): StringValue {
  return { $type: "google.protobuf.StringValue", value: "" };
}

export const StringValue = {
  $type: "google.protobuf.StringValue" as const,

  encode(
    message: StringValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StringValue {
    return {
      $type: StringValue.$type,
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: StringValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StringValue>, I>>(
    object: I
  ): StringValue {
    const message = createBaseStringValue();
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(StringValue.$type, StringValue);

function createBaseBytesValue(): BytesValue {
  return { $type: "google.protobuf.BytesValue", value: new Uint8Array() };
}

export const BytesValue = {
  $type: "google.protobuf.BytesValue" as const,

  encode(
    message: BytesValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BytesValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytesValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BytesValue {
    return {
      $type: BytesValue.$type,
      value: isSet(object.value)
        ? bytesFromBase64(object.value)
        : new Uint8Array(),
    };
  },

  toJSON(message: BytesValue): unknown {
    const obj: any = {};
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BytesValue>, I>>(
    object: I
  ): BytesValue {
    const message = createBaseBytesValue();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(BytesValue.$type, BytesValue);

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
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
