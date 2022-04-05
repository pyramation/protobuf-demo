// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "cosmos/staking/v1beta1/query.proto" (package "cosmos.staking.v1beta1", syntax proto3),// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Query } from "./query";
import type { QueryParamsResponse } from "./query";
import type { QueryParamsRequest } from "./query";
import type { QueryPoolResponse } from "./query";
import type { QueryPoolRequest } from "./query";
import type { QueryHistoricalInfoResponse } from "./query";
import type { QueryHistoricalInfoRequest } from "./query";
import type { QueryDelegatorValidatorResponse } from "./query";
import type { QueryDelegatorValidatorRequest } from "./query";
import type { QueryDelegatorValidatorsResponse } from "./query";
import type { QueryDelegatorValidatorsRequest } from "./query";
import type { QueryRedelegationsResponse } from "./query";
import type { QueryRedelegationsRequest } from "./query";
import type { QueryDelegatorUnbondingDelegationsResponse } from "./query";
import type { QueryDelegatorUnbondingDelegationsRequest } from "./query";
import type { QueryDelegatorDelegationsResponse } from "./query";
import type { QueryDelegatorDelegationsRequest } from "./query";
import type { QueryUnbondingDelegationResponse } from "./query";
import type { QueryUnbondingDelegationRequest } from "./query";
import type { QueryDelegationResponse } from "./query";
import type { QueryDelegationRequest } from "./query";
import type { QueryValidatorUnbondingDelegationsResponse } from "./query";
import type { QueryValidatorUnbondingDelegationsRequest } from "./query";
import type { QueryValidatorDelegationsResponse } from "./query";
import type { QueryValidatorDelegationsRequest } from "./query";
import type { QueryValidatorResponse } from "./query";
import type { QueryValidatorRequest } from "./query";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { QueryValidatorsResponse } from "./query";
import type { QueryValidatorsRequest } from "./query";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Query defines the gRPC querier service.
 *
 * @generated from protobuf service cosmos.staking.v1beta1.Query
 */
export interface IQueryClient {
    /**
     * Validators queries all validators that match the given status.
     *
     * @generated from protobuf rpc: Validators(cosmos.staking.v1beta1.QueryValidatorsRequest) returns (cosmos.staking.v1beta1.QueryValidatorsResponse);
     */
    validators(input: QueryValidatorsRequest, options?: RpcOptions): UnaryCall<QueryValidatorsRequest, QueryValidatorsResponse>;
    /**
     * Validator queries validator info for given validator address.
     *
     * @generated from protobuf rpc: Validator(cosmos.staking.v1beta1.QueryValidatorRequest) returns (cosmos.staking.v1beta1.QueryValidatorResponse);
     */
    validator(input: QueryValidatorRequest, options?: RpcOptions): UnaryCall<QueryValidatorRequest, QueryValidatorResponse>;
    /**
     * ValidatorDelegations queries delegate info for given validator.
     *
     * @generated from protobuf rpc: ValidatorDelegations(cosmos.staking.v1beta1.QueryValidatorDelegationsRequest) returns (cosmos.staking.v1beta1.QueryValidatorDelegationsResponse);
     */
    validatorDelegations(input: QueryValidatorDelegationsRequest, options?: RpcOptions): UnaryCall<QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse>;
    /**
     * ValidatorUnbondingDelegations queries unbonding delegations of a validator.
     *
     * @generated from protobuf rpc: ValidatorUnbondingDelegations(cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest) returns (cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse);
     */
    validatorUnbondingDelegations(input: QueryValidatorUnbondingDelegationsRequest, options?: RpcOptions): UnaryCall<QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse>;
    /**
     * Delegation queries delegate info for given validator delegator pair.
     *
     * @generated from protobuf rpc: Delegation(cosmos.staking.v1beta1.QueryDelegationRequest) returns (cosmos.staking.v1beta1.QueryDelegationResponse);
     */
    delegation(input: QueryDelegationRequest, options?: RpcOptions): UnaryCall<QueryDelegationRequest, QueryDelegationResponse>;
    /**
     * UnbondingDelegation queries unbonding info for given validator delegator
     * pair.
     *
     * @generated from protobuf rpc: UnbondingDelegation(cosmos.staking.v1beta1.QueryUnbondingDelegationRequest) returns (cosmos.staking.v1beta1.QueryUnbondingDelegationResponse);
     */
    unbondingDelegation(input: QueryUnbondingDelegationRequest, options?: RpcOptions): UnaryCall<QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse>;
    /**
     * DelegatorDelegations queries all delegations of a given delegator address.
     *
     * @generated from protobuf rpc: DelegatorDelegations(cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest) returns (cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse);
     */
    delegatorDelegations(input: QueryDelegatorDelegationsRequest, options?: RpcOptions): UnaryCall<QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse>;
    /**
     * DelegatorUnbondingDelegations queries all unbonding delegations of a given
     * delegator address.
     *
     * @generated from protobuf rpc: DelegatorUnbondingDelegations(cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest) returns (cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse);
     */
    delegatorUnbondingDelegations(input: QueryDelegatorUnbondingDelegationsRequest, options?: RpcOptions): UnaryCall<QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse>;
    /**
     * Redelegations queries redelegations of given address.
     *
     * @generated from protobuf rpc: Redelegations(cosmos.staking.v1beta1.QueryRedelegationsRequest) returns (cosmos.staking.v1beta1.QueryRedelegationsResponse);
     */
    redelegations(input: QueryRedelegationsRequest, options?: RpcOptions): UnaryCall<QueryRedelegationsRequest, QueryRedelegationsResponse>;
    /**
     * DelegatorValidators queries all validators info for given delegator
     * address.
     *
     * @generated from protobuf rpc: DelegatorValidators(cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest) returns (cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse);
     */
    delegatorValidators(input: QueryDelegatorValidatorsRequest, options?: RpcOptions): UnaryCall<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>;
    /**
     * DelegatorValidator queries validator info for given delegator validator
     * pair.
     *
     * @generated from protobuf rpc: DelegatorValidator(cosmos.staking.v1beta1.QueryDelegatorValidatorRequest) returns (cosmos.staking.v1beta1.QueryDelegatorValidatorResponse);
     */
    delegatorValidator(input: QueryDelegatorValidatorRequest, options?: RpcOptions): UnaryCall<QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse>;
    /**
     * HistoricalInfo queries the historical info for given height.
     *
     * @generated from protobuf rpc: HistoricalInfo(cosmos.staking.v1beta1.QueryHistoricalInfoRequest) returns (cosmos.staking.v1beta1.QueryHistoricalInfoResponse);
     */
    historicalInfo(input: QueryHistoricalInfoRequest, options?: RpcOptions): UnaryCall<QueryHistoricalInfoRequest, QueryHistoricalInfoResponse>;
    /**
     * Pool queries the pool info.
     *
     * @generated from protobuf rpc: Pool(cosmos.staking.v1beta1.QueryPoolRequest) returns (cosmos.staking.v1beta1.QueryPoolResponse);
     */
    pool(input: QueryPoolRequest, options?: RpcOptions): UnaryCall<QueryPoolRequest, QueryPoolResponse>;
    /**
     * Parameters queries the staking parameters.
     *
     * @generated from protobuf rpc: Params(cosmos.staking.v1beta1.QueryParamsRequest) returns (cosmos.staking.v1beta1.QueryParamsResponse);
     */
    params(input: QueryParamsRequest, options?: RpcOptions): UnaryCall<QueryParamsRequest, QueryParamsResponse>;
}
/**
 * Query defines the gRPC querier service.
 *
 * @generated from protobuf service cosmos.staking.v1beta1.Query
 */
export class QueryClient implements IQueryClient, ServiceInfo {
    typeName = Query.typeName;
    methods = Query.methods;
    options = Query.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Validators queries all validators that match the given status.
     *
     * @generated from protobuf rpc: Validators(cosmos.staking.v1beta1.QueryValidatorsRequest) returns (cosmos.staking.v1beta1.QueryValidatorsResponse);
     */
    validators(input: QueryValidatorsRequest, options?: RpcOptions): UnaryCall<QueryValidatorsRequest, QueryValidatorsResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryValidatorsRequest, QueryValidatorsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Validator queries validator info for given validator address.
     *
     * @generated from protobuf rpc: Validator(cosmos.staking.v1beta1.QueryValidatorRequest) returns (cosmos.staking.v1beta1.QueryValidatorResponse);
     */
    validator(input: QueryValidatorRequest, options?: RpcOptions): UnaryCall<QueryValidatorRequest, QueryValidatorResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryValidatorRequest, QueryValidatorResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * ValidatorDelegations queries delegate info for given validator.
     *
     * @generated from protobuf rpc: ValidatorDelegations(cosmos.staking.v1beta1.QueryValidatorDelegationsRequest) returns (cosmos.staking.v1beta1.QueryValidatorDelegationsResponse);
     */
    validatorDelegations(input: QueryValidatorDelegationsRequest, options?: RpcOptions): UnaryCall<QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * ValidatorUnbondingDelegations queries unbonding delegations of a validator.
     *
     * @generated from protobuf rpc: ValidatorUnbondingDelegations(cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest) returns (cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse);
     */
    validatorUnbondingDelegations(input: QueryValidatorUnbondingDelegationsRequest, options?: RpcOptions): UnaryCall<QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Delegation queries delegate info for given validator delegator pair.
     *
     * @generated from protobuf rpc: Delegation(cosmos.staking.v1beta1.QueryDelegationRequest) returns (cosmos.staking.v1beta1.QueryDelegationResponse);
     */
    delegation(input: QueryDelegationRequest, options?: RpcOptions): UnaryCall<QueryDelegationRequest, QueryDelegationResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryDelegationRequest, QueryDelegationResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * UnbondingDelegation queries unbonding info for given validator delegator
     * pair.
     *
     * @generated from protobuf rpc: UnbondingDelegation(cosmos.staking.v1beta1.QueryUnbondingDelegationRequest) returns (cosmos.staking.v1beta1.QueryUnbondingDelegationResponse);
     */
    unbondingDelegation(input: QueryUnbondingDelegationRequest, options?: RpcOptions): UnaryCall<QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * DelegatorDelegations queries all delegations of a given delegator address.
     *
     * @generated from protobuf rpc: DelegatorDelegations(cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest) returns (cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse);
     */
    delegatorDelegations(input: QueryDelegatorDelegationsRequest, options?: RpcOptions): UnaryCall<QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * DelegatorUnbondingDelegations queries all unbonding delegations of a given
     * delegator address.
     *
     * @generated from protobuf rpc: DelegatorUnbondingDelegations(cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest) returns (cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse);
     */
    delegatorUnbondingDelegations(input: QueryDelegatorUnbondingDelegationsRequest, options?: RpcOptions): UnaryCall<QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Redelegations queries redelegations of given address.
     *
     * @generated from protobuf rpc: Redelegations(cosmos.staking.v1beta1.QueryRedelegationsRequest) returns (cosmos.staking.v1beta1.QueryRedelegationsResponse);
     */
    redelegations(input: QueryRedelegationsRequest, options?: RpcOptions): UnaryCall<QueryRedelegationsRequest, QueryRedelegationsResponse> {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryRedelegationsRequest, QueryRedelegationsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * DelegatorValidators queries all validators info for given delegator
     * address.
     *
     * @generated from protobuf rpc: DelegatorValidators(cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest) returns (cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse);
     */
    delegatorValidators(input: QueryDelegatorValidatorsRequest, options?: RpcOptions): UnaryCall<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse> {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * DelegatorValidator queries validator info for given delegator validator
     * pair.
     *
     * @generated from protobuf rpc: DelegatorValidator(cosmos.staking.v1beta1.QueryDelegatorValidatorRequest) returns (cosmos.staking.v1beta1.QueryDelegatorValidatorResponse);
     */
    delegatorValidator(input: QueryDelegatorValidatorRequest, options?: RpcOptions): UnaryCall<QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse> {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * HistoricalInfo queries the historical info for given height.
     *
     * @generated from protobuf rpc: HistoricalInfo(cosmos.staking.v1beta1.QueryHistoricalInfoRequest) returns (cosmos.staking.v1beta1.QueryHistoricalInfoResponse);
     */
    historicalInfo(input: QueryHistoricalInfoRequest, options?: RpcOptions): UnaryCall<QueryHistoricalInfoRequest, QueryHistoricalInfoResponse> {
        const method = this.methods[11], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryHistoricalInfoRequest, QueryHistoricalInfoResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Pool queries the pool info.
     *
     * @generated from protobuf rpc: Pool(cosmos.staking.v1beta1.QueryPoolRequest) returns (cosmos.staking.v1beta1.QueryPoolResponse);
     */
    pool(input: QueryPoolRequest, options?: RpcOptions): UnaryCall<QueryPoolRequest, QueryPoolResponse> {
        const method = this.methods[12], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryPoolRequest, QueryPoolResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Parameters queries the staking parameters.
     *
     * @generated from protobuf rpc: Params(cosmos.staking.v1beta1.QueryParamsRequest) returns (cosmos.staking.v1beta1.QueryParamsResponse);
     */
    params(input: QueryParamsRequest, options?: RpcOptions): UnaryCall<QueryParamsRequest, QueryParamsResponse> {
        const method = this.methods[13], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryParamsRequest, QueryParamsResponse>("unary", this._transport, method, opt, input);
    }
}
