/* eslint-disable */
import { messageTypeRegistry } from "../../typeRegistry";
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "osmosis.superfluid";

export enum SuperfluidAssetType {
  SuperfluidAssetTypeNative = 0,
  /** SuperfluidAssetTypeLPShare - SuperfluidAssetTypeLendingShare = 2; // for now not exist */
  SuperfluidAssetTypeLPShare = 1,
  UNRECOGNIZED = -1,
}

export function superfluidAssetTypeFromJSON(object: any): SuperfluidAssetType {
  switch (object) {
    case 0:
    case "SuperfluidAssetTypeNative":
      return SuperfluidAssetType.SuperfluidAssetTypeNative;
    case 1:
    case "SuperfluidAssetTypeLPShare":
      return SuperfluidAssetType.SuperfluidAssetTypeLPShare;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SuperfluidAssetType.UNRECOGNIZED;
  }
}

export function superfluidAssetTypeToJSON(object: SuperfluidAssetType): string {
  switch (object) {
    case SuperfluidAssetType.SuperfluidAssetTypeNative:
      return "SuperfluidAssetTypeNative";
    case SuperfluidAssetType.SuperfluidAssetTypeLPShare:
      return "SuperfluidAssetTypeLPShare";
    default:
      return "UNKNOWN";
  }
}

/** SuperfluidAsset stores the pair of superfluid asset type and denom pair */
export interface SuperfluidAsset {
  $type: "osmosis.superfluid.SuperfluidAsset";
  denom: string;
  assetType: SuperfluidAssetType;
}

/**
 * SuperfluidIntermediaryAccount takes the role of intermediary between LP token
 * and OSMO tokens for superfluid staking
 */
export interface SuperfluidIntermediaryAccount {
  $type: "osmosis.superfluid.SuperfluidIntermediaryAccount";
  denom: string;
  valAddr: string;
  /** perpetual gauge for rewards distribution */
  gaugeId: Long;
}

/**
 * The Osmo-Equivalent-Multiplier Record for epoch N refers to the osmo worth we
 * treat an LP share as having, for all of epoch N. Eventually this is intended
 * to be set as the Time-weighted-average-osmo-backing for the entire duration
 * of epoch N-1. (Thereby locking whats in use for epoch N as based on the prior
 * epochs rewards) However for now, this is not the TWAP but instead the spot
 * price at the boundary.  For different types of assets in the future, it could
 * change.
 */
export interface OsmoEquivalentMultiplierRecord {
  $type: "osmosis.superfluid.OsmoEquivalentMultiplierRecord";
  epochNumber: Long;
  /** superfluid asset denom, can be LP token or native token */
  denom: string;
  multiplier: string;
}

/**
 * SuperfluidDelegationRecord takes the role of intermediary between LP token
 * and OSMO tokens for superfluid staking
 */
export interface SuperfluidDelegationRecord {
  $type: "osmosis.superfluid.SuperfluidDelegationRecord";
  delegatorAddress: string;
  validatorAddress: string;
  delegationAmount: Coin;
}

export interface LockIdIntermediaryAccountConnection {
  $type: "osmosis.superfluid.LockIdIntermediaryAccountConnection";
  lockId: Long;
  intermediaryAccount: string;
}

function createBaseSuperfluidAsset(): SuperfluidAsset {
  return {
    $type: "osmosis.superfluid.SuperfluidAsset",
    denom: "",
    assetType: 0,
  };
}

export const SuperfluidAsset = {
  $type: "osmosis.superfluid.SuperfluidAsset" as const,

  encode(
    message: SuperfluidAsset,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.assetType !== 0) {
      writer.uint32(16).int32(message.assetType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.assetType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SuperfluidAsset {
    return {
      $type: SuperfluidAsset.$type,
      denom: isSet(object.denom) ? String(object.denom) : "",
      assetType: isSet(object.assetType)
        ? superfluidAssetTypeFromJSON(object.assetType)
        : 0,
    };
  },

  toJSON(message: SuperfluidAsset): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.assetType !== undefined &&
      (obj.assetType = superfluidAssetTypeToJSON(message.assetType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SuperfluidAsset>, I>>(
    object: I
  ): SuperfluidAsset {
    const message = createBaseSuperfluidAsset();
    message.denom = object.denom ?? "";
    message.assetType = object.assetType ?? 0;
    return message;
  },
};

messageTypeRegistry.set(SuperfluidAsset.$type, SuperfluidAsset);

function createBaseSuperfluidIntermediaryAccount(): SuperfluidIntermediaryAccount {
  return {
    $type: "osmosis.superfluid.SuperfluidIntermediaryAccount",
    denom: "",
    valAddr: "",
    gaugeId: Long.UZERO,
  };
}

export const SuperfluidIntermediaryAccount = {
  $type: "osmosis.superfluid.SuperfluidIntermediaryAccount" as const,

  encode(
    message: SuperfluidIntermediaryAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.valAddr !== "") {
      writer.uint32(18).string(message.valAddr);
    }
    if (!message.gaugeId.isZero()) {
      writer.uint32(24).uint64(message.gaugeId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SuperfluidIntermediaryAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidIntermediaryAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.valAddr = reader.string();
          break;
        case 3:
          message.gaugeId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SuperfluidIntermediaryAccount {
    return {
      $type: SuperfluidIntermediaryAccount.$type,
      denom: isSet(object.denom) ? String(object.denom) : "",
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : "",
      gaugeId: isSet(object.gaugeId)
        ? Long.fromString(object.gaugeId)
        : Long.UZERO,
    };
  },

  toJSON(message: SuperfluidIntermediaryAccount): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    message.gaugeId !== undefined &&
      (obj.gaugeId = (message.gaugeId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SuperfluidIntermediaryAccount>, I>>(
    object: I
  ): SuperfluidIntermediaryAccount {
    const message = createBaseSuperfluidIntermediaryAccount();
    message.denom = object.denom ?? "";
    message.valAddr = object.valAddr ?? "";
    message.gaugeId =
      object.gaugeId !== undefined && object.gaugeId !== null
        ? Long.fromValue(object.gaugeId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(
  SuperfluidIntermediaryAccount.$type,
  SuperfluidIntermediaryAccount
);

function createBaseOsmoEquivalentMultiplierRecord(): OsmoEquivalentMultiplierRecord {
  return {
    $type: "osmosis.superfluid.OsmoEquivalentMultiplierRecord",
    epochNumber: Long.ZERO,
    denom: "",
    multiplier: "",
  };
}

export const OsmoEquivalentMultiplierRecord = {
  $type: "osmosis.superfluid.OsmoEquivalentMultiplierRecord" as const,

  encode(
    message: OsmoEquivalentMultiplierRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.epochNumber.isZero()) {
      writer.uint32(8).int64(message.epochNumber);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.multiplier !== "") {
      writer.uint32(26).string(message.multiplier);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OsmoEquivalentMultiplierRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOsmoEquivalentMultiplierRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.int64() as Long;
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.multiplier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OsmoEquivalentMultiplierRecord {
    return {
      $type: OsmoEquivalentMultiplierRecord.$type,
      epochNumber: isSet(object.epochNumber)
        ? Long.fromString(object.epochNumber)
        : Long.ZERO,
      denom: isSet(object.denom) ? String(object.denom) : "",
      multiplier: isSet(object.multiplier) ? String(object.multiplier) : "",
    };
  },

  toJSON(message: OsmoEquivalentMultiplierRecord): unknown {
    const obj: any = {};
    message.epochNumber !== undefined &&
      (obj.epochNumber = (message.epochNumber || Long.ZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.multiplier !== undefined && (obj.multiplier = message.multiplier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OsmoEquivalentMultiplierRecord>, I>>(
    object: I
  ): OsmoEquivalentMultiplierRecord {
    const message = createBaseOsmoEquivalentMultiplierRecord();
    message.epochNumber =
      object.epochNumber !== undefined && object.epochNumber !== null
        ? Long.fromValue(object.epochNumber)
        : Long.ZERO;
    message.denom = object.denom ?? "";
    message.multiplier = object.multiplier ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  OsmoEquivalentMultiplierRecord.$type,
  OsmoEquivalentMultiplierRecord
);

function createBaseSuperfluidDelegationRecord(): SuperfluidDelegationRecord {
  return {
    $type: "osmosis.superfluid.SuperfluidDelegationRecord",
    delegatorAddress: "",
    validatorAddress: "",
    delegationAmount: undefined,
  };
}

export const SuperfluidDelegationRecord = {
  $type: "osmosis.superfluid.SuperfluidDelegationRecord" as const,

  encode(
    message: SuperfluidDelegationRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.delegationAmount !== undefined) {
      Coin.encode(message.delegationAmount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SuperfluidDelegationRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.delegationAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SuperfluidDelegationRecord {
    return {
      $type: SuperfluidDelegationRecord.$type,
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : "",
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : "",
      delegationAmount: isSet(object.delegationAmount)
        ? Coin.fromJSON(object.delegationAmount)
        : undefined,
    };
  },

  toJSON(message: SuperfluidDelegationRecord): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.delegationAmount !== undefined &&
      (obj.delegationAmount = message.delegationAmount
        ? Coin.toJSON(message.delegationAmount)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SuperfluidDelegationRecord>, I>>(
    object: I
  ): SuperfluidDelegationRecord {
    const message = createBaseSuperfluidDelegationRecord();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.delegationAmount =
      object.delegationAmount !== undefined && object.delegationAmount !== null
        ? Coin.fromPartial(object.delegationAmount)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  SuperfluidDelegationRecord.$type,
  SuperfluidDelegationRecord
);

function createBaseLockIdIntermediaryAccountConnection(): LockIdIntermediaryAccountConnection {
  return {
    $type: "osmosis.superfluid.LockIdIntermediaryAccountConnection",
    lockId: Long.UZERO,
    intermediaryAccount: "",
  };
}

export const LockIdIntermediaryAccountConnection = {
  $type: "osmosis.superfluid.LockIdIntermediaryAccountConnection" as const,

  encode(
    message: LockIdIntermediaryAccountConnection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId);
    }
    if (message.intermediaryAccount !== "") {
      writer.uint32(18).string(message.intermediaryAccount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LockIdIntermediaryAccountConnection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockIdIntermediaryAccountConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockId = reader.uint64() as Long;
          break;
        case 2:
          message.intermediaryAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LockIdIntermediaryAccountConnection {
    return {
      $type: LockIdIntermediaryAccountConnection.$type,
      lockId: isSet(object.lockId)
        ? Long.fromString(object.lockId)
        : Long.UZERO,
      intermediaryAccount: isSet(object.intermediaryAccount)
        ? String(object.intermediaryAccount)
        : "",
    };
  },

  toJSON(message: LockIdIntermediaryAccountConnection): unknown {
    const obj: any = {};
    message.lockId !== undefined &&
      (obj.lockId = (message.lockId || Long.UZERO).toString());
    message.intermediaryAccount !== undefined &&
      (obj.intermediaryAccount = message.intermediaryAccount);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<LockIdIntermediaryAccountConnection>, I>
  >(object: I): LockIdIntermediaryAccountConnection {
    const message = createBaseLockIdIntermediaryAccountConnection();
    message.lockId =
      object.lockId !== undefined && object.lockId !== null
        ? Long.fromValue(object.lockId)
        : Long.UZERO;
    message.intermediaryAccount = object.intermediaryAccount ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  LockIdIntermediaryAccountConnection.$type,
  LockIdIntermediaryAccountConnection
);

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
