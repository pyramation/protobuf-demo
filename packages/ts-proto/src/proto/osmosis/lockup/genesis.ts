/* eslint-disable */
import { messageTypeRegistry } from "../../typeRegistry";
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { PeriodLock, SyntheticLock } from "../../osmosis/lockup/lock";

export const protobufPackage = "osmosis.lockup";

/** GenesisState defines the lockup module's genesis state. */
export interface GenesisState {
  $type: "osmosis.lockup.GenesisState";
  lastLockId: Long;
  locks: PeriodLock[];
  syntheticLocks: SyntheticLock[];
}

function createBaseGenesisState(): GenesisState {
  return {
    $type: "osmosis.lockup.GenesisState",
    lastLockId: Long.UZERO,
    locks: [],
    syntheticLocks: [],
  };
}

export const GenesisState = {
  $type: "osmosis.lockup.GenesisState" as const,

  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.lastLockId.isZero()) {
      writer.uint32(8).uint64(message.lastLockId);
    }
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.syntheticLocks) {
      SyntheticLock.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastLockId = reader.uint64() as Long;
          break;
        case 2:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        case 3:
          message.syntheticLocks.push(
            SyntheticLock.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      $type: GenesisState.$type,
      lastLockId: isSet(object.lastLockId)
        ? Long.fromString(object.lastLockId)
        : Long.UZERO,
      locks: Array.isArray(object?.locks)
        ? object.locks.map((e: any) => PeriodLock.fromJSON(e))
        : [],
      syntheticLocks: Array.isArray(object?.syntheticLocks)
        ? object.syntheticLocks.map((e: any) => SyntheticLock.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.lastLockId !== undefined &&
      (obj.lastLockId = (message.lastLockId || Long.UZERO).toString());
    if (message.locks) {
      obj.locks = message.locks.map((e) =>
        e ? PeriodLock.toJSON(e) : undefined
      );
    } else {
      obj.locks = [];
    }
    if (message.syntheticLocks) {
      obj.syntheticLocks = message.syntheticLocks.map((e) =>
        e ? SyntheticLock.toJSON(e) : undefined
      );
    } else {
      obj.syntheticLocks = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.lastLockId =
      object.lastLockId !== undefined && object.lastLockId !== null
        ? Long.fromValue(object.lastLockId)
        : Long.UZERO;
    message.locks = object.locks?.map((e) => PeriodLock.fromPartial(e)) || [];
    message.syntheticLocks =
      object.syntheticLocks?.map((e) => SyntheticLock.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(GenesisState.$type, GenesisState);

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
