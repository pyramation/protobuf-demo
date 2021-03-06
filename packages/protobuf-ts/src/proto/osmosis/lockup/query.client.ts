// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "osmosis/lockup/query.proto" (package "osmosis.lockup", syntax proto3),// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Query } from "./query";
import type { AccountLockedLongerDurationDenomResponse } from "./query";
import type { AccountLockedLongerDurationDenomRequest } from "./query";
import type { AccountLockedLongerDurationNotUnlockingOnlyResponse } from "./query";
import type { AccountLockedLongerDurationNotUnlockingOnlyRequest } from "./query";
import type { AccountLockedLongerDurationResponse } from "./query";
import type { AccountLockedLongerDurationRequest } from "./query";
import type { SyntheticLockupsByLockupIDResponse } from "./query";
import type { SyntheticLockupsByLockupIDRequest } from "./query";
import type { LockedResponse } from "./query";
import type { LockedRequest } from "./query";
import type { LockedDenomResponse } from "./query";
import type { LockedDenomRequest } from "./query";
import type { AccountLockedPastTimeDenomResponse } from "./query";
import type { AccountLockedPastTimeDenomRequest } from "./query";
import type { AccountUnlockedBeforeTimeResponse } from "./query";
import type { AccountUnlockedBeforeTimeRequest } from "./query";
import type { AccountLockedPastTimeNotUnlockingOnlyResponse } from "./query";
import type { AccountLockedPastTimeNotUnlockingOnlyRequest } from "./query";
import type { AccountLockedPastTimeResponse } from "./query";
import type { AccountLockedPastTimeRequest } from "./query";
import type { AccountLockedCoinsResponse } from "./query";
import type { AccountLockedCoinsRequest } from "./query";
import type { AccountUnlockingCoinsResponse } from "./query";
import type { AccountUnlockingCoinsRequest } from "./query";
import type { AccountUnlockableCoinsResponse } from "./query";
import type { AccountUnlockableCoinsRequest } from "./query";
import type { ModuleLockedAmountResponse } from "./query";
import type { ModuleLockedAmountRequest } from "./query";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { ModuleBalanceResponse } from "./query";
import type { ModuleBalanceRequest } from "./query";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Query defines the gRPC querier service.
 *
 * @generated from protobuf service osmosis.lockup.Query
 */
export interface IQueryClient {
    /**
     * Return full balance of the module
     *
     * @generated from protobuf rpc: ModuleBalance(osmosis.lockup.ModuleBalanceRequest) returns (osmosis.lockup.ModuleBalanceResponse);
     */
    moduleBalance(input: ModuleBalanceRequest, options?: RpcOptions): UnaryCall<ModuleBalanceRequest, ModuleBalanceResponse>;
    /**
     * Return locked balance of the module
     *
     * @generated from protobuf rpc: ModuleLockedAmount(osmosis.lockup.ModuleLockedAmountRequest) returns (osmosis.lockup.ModuleLockedAmountResponse);
     */
    moduleLockedAmount(input: ModuleLockedAmountRequest, options?: RpcOptions): UnaryCall<ModuleLockedAmountRequest, ModuleLockedAmountResponse>;
    /**
     * Returns unlockable coins which are not withdrawn yet
     *
     * @generated from protobuf rpc: AccountUnlockableCoins(osmosis.lockup.AccountUnlockableCoinsRequest) returns (osmosis.lockup.AccountUnlockableCoinsResponse);
     */
    accountUnlockableCoins(input: AccountUnlockableCoinsRequest, options?: RpcOptions): UnaryCall<AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse>;
    /**
     * Returns unlocking coins
     *
     * @generated from protobuf rpc: AccountUnlockingCoins(osmosis.lockup.AccountUnlockingCoinsRequest) returns (osmosis.lockup.AccountUnlockingCoinsResponse);
     */
    accountUnlockingCoins(input: AccountUnlockingCoinsRequest, options?: RpcOptions): UnaryCall<AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse>;
    /**
     * Return a locked coins that can't be withdrawn
     *
     * @generated from protobuf rpc: AccountLockedCoins(osmosis.lockup.AccountLockedCoinsRequest) returns (osmosis.lockup.AccountLockedCoinsResponse);
     */
    accountLockedCoins(input: AccountLockedCoinsRequest, options?: RpcOptions): UnaryCall<AccountLockedCoinsRequest, AccountLockedCoinsResponse>;
    /**
     * Returns locked records of an account with unlock time beyond timestamp
     *
     * @generated from protobuf rpc: AccountLockedPastTime(osmosis.lockup.AccountLockedPastTimeRequest) returns (osmosis.lockup.AccountLockedPastTimeResponse);
     */
    accountLockedPastTime(input: AccountLockedPastTimeRequest, options?: RpcOptions): UnaryCall<AccountLockedPastTimeRequest, AccountLockedPastTimeResponse>;
    /**
     * Returns locked records of an account with unlock time beyond timestamp
     * excluding tokens started unlocking
     *
     * @generated from protobuf rpc: AccountLockedPastTimeNotUnlockingOnly(osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyRequest) returns (osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyResponse);
     */
    accountLockedPastTimeNotUnlockingOnly(input: AccountLockedPastTimeNotUnlockingOnlyRequest, options?: RpcOptions): UnaryCall<AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse>;
    /**
     * Returns unlocked records with unlock time before timestamp
     *
     * @generated from protobuf rpc: AccountUnlockedBeforeTime(osmosis.lockup.AccountUnlockedBeforeTimeRequest) returns (osmosis.lockup.AccountUnlockedBeforeTimeResponse);
     */
    accountUnlockedBeforeTime(input: AccountUnlockedBeforeTimeRequest, options?: RpcOptions): UnaryCall<AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse>;
    /**
     * Returns lock records by address, timestamp, denom
     *
     * @generated from protobuf rpc: AccountLockedPastTimeDenom(osmosis.lockup.AccountLockedPastTimeDenomRequest) returns (osmosis.lockup.AccountLockedPastTimeDenomResponse);
     */
    accountLockedPastTimeDenom(input: AccountLockedPastTimeDenomRequest, options?: RpcOptions): UnaryCall<AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse>;
    /**
     * Returns total locked per denom with longer past given time
     *
     * @generated from protobuf rpc: LockedDenom(osmosis.lockup.LockedDenomRequest) returns (osmosis.lockup.LockedDenomResponse);
     */
    lockedDenom(input: LockedDenomRequest, options?: RpcOptions): UnaryCall<LockedDenomRequest, LockedDenomResponse>;
    /**
     * Returns lock record by id
     *
     * @generated from protobuf rpc: LockedByID(osmosis.lockup.LockedRequest) returns (osmosis.lockup.LockedResponse);
     */
    lockedByID(input: LockedRequest, options?: RpcOptions): UnaryCall<LockedRequest, LockedResponse>;
    /**
     * Returns synthetic lockups by native lockup id
     *
     * @generated from protobuf rpc: SyntheticLockupsByLockupID(osmosis.lockup.SyntheticLockupsByLockupIDRequest) returns (osmosis.lockup.SyntheticLockupsByLockupIDResponse);
     */
    syntheticLockupsByLockupID(input: SyntheticLockupsByLockupIDRequest, options?: RpcOptions): UnaryCall<SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse>;
    /**
     * Returns account locked records with longer duration
     *
     * @generated from protobuf rpc: AccountLockedLongerDuration(osmosis.lockup.AccountLockedLongerDurationRequest) returns (osmosis.lockup.AccountLockedLongerDurationResponse);
     */
    accountLockedLongerDuration(input: AccountLockedLongerDurationRequest, options?: RpcOptions): UnaryCall<AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse>;
    /**
     * Returns account locked records with longer duration excluding tokens
     * started unlocking
     *
     * @generated from protobuf rpc: AccountLockedLongerDurationNotUnlockingOnly(osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyRequest) returns (osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyResponse);
     */
    accountLockedLongerDurationNotUnlockingOnly(input: AccountLockedLongerDurationNotUnlockingOnlyRequest, options?: RpcOptions): UnaryCall<AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse>;
    /**
     * Returns account's locked records for a denom with longer duration
     *
     * @generated from protobuf rpc: AccountLockedLongerDurationDenom(osmosis.lockup.AccountLockedLongerDurationDenomRequest) returns (osmosis.lockup.AccountLockedLongerDurationDenomResponse);
     */
    accountLockedLongerDurationDenom(input: AccountLockedLongerDurationDenomRequest, options?: RpcOptions): UnaryCall<AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse>;
}
/**
 * Query defines the gRPC querier service.
 *
 * @generated from protobuf service osmosis.lockup.Query
 */
export class QueryClient implements IQueryClient, ServiceInfo {
    typeName = Query.typeName;
    methods = Query.methods;
    options = Query.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Return full balance of the module
     *
     * @generated from protobuf rpc: ModuleBalance(osmosis.lockup.ModuleBalanceRequest) returns (osmosis.lockup.ModuleBalanceResponse);
     */
    moduleBalance(input: ModuleBalanceRequest, options?: RpcOptions): UnaryCall<ModuleBalanceRequest, ModuleBalanceResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<ModuleBalanceRequest, ModuleBalanceResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Return locked balance of the module
     *
     * @generated from protobuf rpc: ModuleLockedAmount(osmosis.lockup.ModuleLockedAmountRequest) returns (osmosis.lockup.ModuleLockedAmountResponse);
     */
    moduleLockedAmount(input: ModuleLockedAmountRequest, options?: RpcOptions): UnaryCall<ModuleLockedAmountRequest, ModuleLockedAmountResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<ModuleLockedAmountRequest, ModuleLockedAmountResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Returns unlockable coins which are not withdrawn yet
     *
     * @generated from protobuf rpc: AccountUnlockableCoins(osmosis.lockup.AccountUnlockableCoinsRequest) returns (osmosis.lockup.AccountUnlockableCoinsResponse);
     */
    accountUnlockableCoins(input: AccountUnlockableCoinsRequest, options?: RpcOptions): UnaryCall<AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Returns unlocking coins
     *
     * @generated from protobuf rpc: AccountUnlockingCoins(osmosis.lockup.AccountUnlockingCoinsRequest) returns (osmosis.lockup.AccountUnlockingCoinsResponse);
     */
    accountUnlockingCoins(input: AccountUnlockingCoinsRequest, options?: RpcOptions): UnaryCall<AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Return a locked coins that can't be withdrawn
     *
     * @generated from protobuf rpc: AccountLockedCoins(osmosis.lockup.AccountLockedCoinsRequest) returns (osmosis.lockup.AccountLockedCoinsResponse);
     */
    accountLockedCoins(input: AccountLockedCoinsRequest, options?: RpcOptions): UnaryCall<AccountLockedCoinsRequest, AccountLockedCoinsResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<AccountLockedCoinsRequest, AccountLockedCoinsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Returns locked records of an account with unlock time beyond timestamp
     *
     * @generated from protobuf rpc: AccountLockedPastTime(osmosis.lockup.AccountLockedPastTimeRequest) returns (osmosis.lockup.AccountLockedPastTimeResponse);
     */
    accountLockedPastTime(input: AccountLockedPastTimeRequest, options?: RpcOptions): UnaryCall<AccountLockedPastTimeRequest, AccountLockedPastTimeResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<AccountLockedPastTimeRequest, AccountLockedPastTimeResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Returns locked records of an account with unlock time beyond timestamp
     * excluding tokens started unlocking
     *
     * @generated from protobuf rpc: AccountLockedPastTimeNotUnlockingOnly(osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyRequest) returns (osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyResponse);
     */
    accountLockedPastTimeNotUnlockingOnly(input: AccountLockedPastTimeNotUnlockingOnlyRequest, options?: RpcOptions): UnaryCall<AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Returns unlocked records with unlock time before timestamp
     *
     * @generated from protobuf rpc: AccountUnlockedBeforeTime(osmosis.lockup.AccountUnlockedBeforeTimeRequest) returns (osmosis.lockup.AccountUnlockedBeforeTimeResponse);
     */
    accountUnlockedBeforeTime(input: AccountUnlockedBeforeTimeRequest, options?: RpcOptions): UnaryCall<AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Returns lock records by address, timestamp, denom
     *
     * @generated from protobuf rpc: AccountLockedPastTimeDenom(osmosis.lockup.AccountLockedPastTimeDenomRequest) returns (osmosis.lockup.AccountLockedPastTimeDenomResponse);
     */
    accountLockedPastTimeDenom(input: AccountLockedPastTimeDenomRequest, options?: RpcOptions): UnaryCall<AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse> {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept<AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Returns total locked per denom with longer past given time
     *
     * @generated from protobuf rpc: LockedDenom(osmosis.lockup.LockedDenomRequest) returns (osmosis.lockup.LockedDenomResponse);
     */
    lockedDenom(input: LockedDenomRequest, options?: RpcOptions): UnaryCall<LockedDenomRequest, LockedDenomResponse> {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept<LockedDenomRequest, LockedDenomResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Returns lock record by id
     *
     * @generated from protobuf rpc: LockedByID(osmosis.lockup.LockedRequest) returns (osmosis.lockup.LockedResponse);
     */
    lockedByID(input: LockedRequest, options?: RpcOptions): UnaryCall<LockedRequest, LockedResponse> {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return stackIntercept<LockedRequest, LockedResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Returns synthetic lockups by native lockup id
     *
     * @generated from protobuf rpc: SyntheticLockupsByLockupID(osmosis.lockup.SyntheticLockupsByLockupIDRequest) returns (osmosis.lockup.SyntheticLockupsByLockupIDResponse);
     */
    syntheticLockupsByLockupID(input: SyntheticLockupsByLockupIDRequest, options?: RpcOptions): UnaryCall<SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse> {
        const method = this.methods[11], opt = this._transport.mergeOptions(options);
        return stackIntercept<SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Returns account locked records with longer duration
     *
     * @generated from protobuf rpc: AccountLockedLongerDuration(osmosis.lockup.AccountLockedLongerDurationRequest) returns (osmosis.lockup.AccountLockedLongerDurationResponse);
     */
    accountLockedLongerDuration(input: AccountLockedLongerDurationRequest, options?: RpcOptions): UnaryCall<AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse> {
        const method = this.methods[12], opt = this._transport.mergeOptions(options);
        return stackIntercept<AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Returns account locked records with longer duration excluding tokens
     * started unlocking
     *
     * @generated from protobuf rpc: AccountLockedLongerDurationNotUnlockingOnly(osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyRequest) returns (osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyResponse);
     */
    accountLockedLongerDurationNotUnlockingOnly(input: AccountLockedLongerDurationNotUnlockingOnlyRequest, options?: RpcOptions): UnaryCall<AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse> {
        const method = this.methods[13], opt = this._transport.mergeOptions(options);
        return stackIntercept<AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Returns account's locked records for a denom with longer duration
     *
     * @generated from protobuf rpc: AccountLockedLongerDurationDenom(osmosis.lockup.AccountLockedLongerDurationDenomRequest) returns (osmosis.lockup.AccountLockedLongerDurationDenomResponse);
     */
    accountLockedLongerDurationDenom(input: AccountLockedLongerDurationDenomRequest, options?: RpcOptions): UnaryCall<AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse> {
        const method = this.methods[14], opt = this._transport.mergeOptions(options);
        return stackIntercept<AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse>("unary", this._transport, method, opt, input);
    }
}
