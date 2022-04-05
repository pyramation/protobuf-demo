/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

/**
 * `Endpoint` describes a network endpoint of a service that serves a set of
 * APIs. It is commonly known as a service endpoint. A service may expose
 * any number of service endpoints, and all service endpoints share the same
 * service definition, such as quota limits and monitoring metrics.
 *
 * Example service configuration:
 *
 *     name: library-example.googleapis.com
 *     endpoints:
 *       # Below entry makes 'google.example.library.v1.Library'
 *       # API be served from endpoint address library-example.googleapis.com.
 *       # It also allows HTTP OPTIONS calls to be passed to the backend, for
 *       # it to decide whether the subsequent cross-origin request is
 *       # allowed to proceed.
 *     - name: library-example.googleapis.com
 *       allow_cors: true
 */
export interface Endpoint {
  /** The canonical name of this endpoint. */
  name: string;
  /**
   * Unimplemented. Dot not use.
   *
   * DEPRECATED: This field is no longer supported. Instead of using aliases,
   * please specify multiple [google.api.Endpoint][google.api.Endpoint] for each of the intended
   * aliases.
   *
   * Additional names that this endpoint will be hosted on.
   *
   * @deprecated
   */

  aliases: string[];
  /**
   * The specification of an Internet routable address of API frontend that will
   * handle requests to this [API
   * Endpoint](https://cloud.google.com/apis/design/glossary). It should be
   * either a valid IPv4 address or a fully-qualified domain name. For example,
   * "8.8.8.8" or "myservice.appspot.com".
   */

  target: string;
  /**
   * Allowing
   * [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), aka
   * cross-domain traffic, would allow the backends served from this endpoint to
   * receive and respond to HTTP OPTIONS requests. The response will be used by
   * the browser to determine whether the subsequent cross-origin request is
   * allowed to proceed.
   */

  allowCors: boolean;
}

function createBaseEndpoint(): Endpoint {
  return {
    name: "",
    aliases: [],
    target: "",
    allowCors: false
  };
}

export const Endpoint = {
  encode(message: Endpoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    for (const v of message.aliases) {
      writer.uint32(18).string(v!);
    }

    if (message.target !== "") {
      writer.uint32(810).string(message.target);
    }

    if (message.allowCors === true) {
      writer.uint32(40).bool(message.allowCors);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Endpoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndpoint();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.aliases.push(reader.string());
          break;

        case 101:
          message.target = reader.string();
          break;

        case 5:
          message.allowCors = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Endpoint {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      aliases: Array.isArray(object?.aliases) ? object.aliases.map((e: any) => String(e)) : [],
      target: isSet(object.target) ? String(object.target) : "",
      allowCors: isSet(object.allowCors) ? Boolean(object.allowCors) : false
    };
  },

  toJSON(message: Endpoint): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);

    if (message.aliases) {
      obj.aliases = message.aliases.map(e => e);
    } else {
      obj.aliases = [];
    }

    message.target !== undefined && (obj.target = message.target);
    message.allowCors !== undefined && (obj.allowCors = message.allowCors);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Endpoint>, I>>(object: I): Endpoint {
    const message = createBaseEndpoint();
    message.name = object.name ?? "";
    message.aliases = object.aliases?.map(e => e) || [];
    message.target = object.target ?? "";
    message.allowCors = object.allowCors ?? false;
    return message;
  }

};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> } : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = (Long as any);

  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export namespace google {
  export namespace api {
    export interface Endpoint {
      name: string;
      aliases: string[];
      target: string;
      allowCors: boolean;
    }
    function createBaseEndpoint(): Endpoint {
      return {
        name: "",
        aliases: [],
        target: "",
        allowCors: false
      };
    }
    export const Endpoint = {
      encode(message: Endpoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== "") {
          writer.uint32(10).string(message.name);
        }

        for (const v of message.aliases) {
          writer.uint32(18).string(v!);
        }

        if (message.target !== "") {
          writer.uint32(810).string(message.target);
        }

        if (message.allowCors === true) {
          writer.uint32(40).bool(message.allowCors);
        }

        return writer;
      },

      decode(input: _m0.Reader | Uint8Array, length?: number): Endpoint {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEndpoint();

        while (reader.pos < end) {
          const tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.name = reader.string();
              break;

            case 2:
              message.aliases.push(reader.string());
              break;

            case 101:
              message.target = reader.string();
              break;

            case 5:
              message.allowCors = reader.bool();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      },

      fromJSON(object: any): Endpoint {
        return {
          name: isSet(object.name) ? String(object.name) : "",
          aliases: Array.isArray(object?.aliases) ? object.aliases.map((e: any) => String(e)) : [],
          target: isSet(object.target) ? String(object.target) : "",
          allowCors: isSet(object.allowCors) ? Boolean(object.allowCors) : false
        };
      },

      toJSON(message: Endpoint): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);

        if (message.aliases) {
          obj.aliases = message.aliases.map(e => e);
        } else {
          obj.aliases = [];
        }

        message.target !== undefined && (obj.target = message.target);
        message.allowCors !== undefined && (obj.allowCors = message.allowCors);
        return obj;
      },

      fromPartial<I extends Exact<DeepPartial<Endpoint>, I>>(object: I): Endpoint {
        const message = createBaseEndpoint();
        message.name = object.name ?? "";
        message.aliases = object.aliases?.map(e => e) || [];
        message.target = object.target ?? "";
        message.allowCors = object.allowCors ?? false;
        return message;
      }

    };
    type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
    export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> } : Partial<T>;
    type KeysOfUnion<T> = T extends T ? keyof T : never;
    export type Exact<P, I extends P> = P extends Builtin ? P : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
    if (_m0.util.Long !== Long) {
      _m0.util.Long = (Long as any);

      _m0.configure();
    }
    function isSet(value: any): boolean {
      return value !== null && value !== undefined;
    }
  }
}