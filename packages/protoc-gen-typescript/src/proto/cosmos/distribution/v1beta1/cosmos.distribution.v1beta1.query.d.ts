// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace cosmos.distribution.v1beta1 {

    // QueryParamsRequest is the request type for the Query/Params RPC method.
    export interface QueryParamsRequest {
    }

    // QueryParamsResponse is the response type for the Query/Params RPC method.
    export interface QueryParamsResponse {
        // params defines the parameters of the module.
        params?: Params;
    }

    // QueryValidatorOutstandingRewardsRequest is the request type for the
    // Query/ValidatorOutstandingRewards RPC method.
    export interface QueryValidatorOutstandingRewardsRequest {
        // validator_address defines the validator address to query for.
        validator_address?: string;
    }

    // QueryValidatorOutstandingRewardsResponse is the response type for the
    // Query/ValidatorOutstandingRewards RPC method.
    export interface QueryValidatorOutstandingRewardsResponse {
        rewards?: ValidatorOutstandingRewards;
    }

    // QueryValidatorCommissionRequest is the request type for the
    // Query/ValidatorCommission RPC method
    export interface QueryValidatorCommissionRequest {
        // validator_address defines the validator address to query for.
        validator_address?: string;
    }

    // QueryValidatorCommissionResponse is the response type for the
    // Query/ValidatorCommission RPC method
    export interface QueryValidatorCommissionResponse {
        // commission defines the commision the validator received.
        commission?: ValidatorAccumulatedCommission;
    }

    // QueryValidatorSlashesRequest is the request type for the
    // Query/ValidatorSlashes RPC method
    export interface QueryValidatorSlashesRequest {
        // validator_address defines the validator address to query for.
        validator_address?: string;
        // starting_height defines the optional starting height to query the slashes.
        starting_height?: number;
        // starting_height defines the optional ending height to query the slashes.
        ending_height?: number;
        // pagination defines an optional pagination for the request.
        pagination?: cosmos.base.query.v1beta1.PageRequest;
    }

    // QueryValidatorSlashesResponse is the response type for the
    // Query/ValidatorSlashes RPC method.
    export interface QueryValidatorSlashesResponse {
        // slashes defines the slashes the validator received.
        slashes?: Array<ValidatorSlashEvent>;
        // pagination defines the pagination in the response.
        pagination?: cosmos.base.query.v1beta1.PageResponse;
    }

    // QueryDelegationRewardsRequest is the request type for the
    // Query/DelegationRewards RPC method.
    export interface QueryDelegationRewardsRequest {
        // delegator_address defines the delegator address to query for.
        delegator_address?: string;
        // validator_address defines the validator address to query for.
        validator_address?: string;
    }

    // QueryDelegationRewardsResponse is the response type for the
    // Query/DelegationRewards RPC method.
    export interface QueryDelegationRewardsResponse {
        // rewards defines the rewards accrued by a delegation.
        rewards?: Array<cosmos.base.v1beta1.DecCoin>;
    }

    // QueryDelegationTotalRewardsRequest is the request type for the
    // Query/DelegationTotalRewards RPC method.
    export interface QueryDelegationTotalRewardsRequest {
        // delegator_address defines the delegator address to query for.
        delegator_address?: string;
    }

    // QueryDelegationTotalRewardsResponse is the response type for the
    // Query/DelegationTotalRewards RPC method.
    export interface QueryDelegationTotalRewardsResponse {
        // rewards defines all the rewards accrued by a delegator.
        rewards?: Array<DelegationDelegatorReward>;
        // total defines the sum of all the rewards.
        total?: Array<cosmos.base.v1beta1.DecCoin>;
    }

    // QueryDelegatorValidatorsRequest is the request type for the
    // Query/DelegatorValidators RPC method.
    export interface QueryDelegatorValidatorsRequest {
        // delegator_address defines the delegator address to query for.
        delegator_address?: string;
    }

    // QueryDelegatorValidatorsResponse is the response type for the
    // Query/DelegatorValidators RPC method.
    export interface QueryDelegatorValidatorsResponse {
        // validators defines the validators a delegator is delegating for.
        validators?: Array<string>;
    }

    // QueryDelegatorWithdrawAddressRequest is the request type for the
    // Query/DelegatorWithdrawAddress RPC method.
    export interface QueryDelegatorWithdrawAddressRequest {
        // delegator_address defines the delegator address to query for.
        delegator_address?: string;
    }

    // QueryDelegatorWithdrawAddressResponse is the response type for the
    // Query/DelegatorWithdrawAddress RPC method.
    export interface QueryDelegatorWithdrawAddressResponse {
        // withdraw_address defines the delegator address to query for.
        withdraw_address?: string;
    }

    // QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
    // method.
    export interface QueryCommunityPoolRequest {
    }

    // QueryCommunityPoolResponse is the response type for the Query/CommunityPool
    // RPC method.
    export interface QueryCommunityPoolResponse {
        // pool defines community pool's coins.
        pool?: Array<cosmos.base.v1beta1.DecCoin>;
    }

    export interface QueryService {
        Params: (r:QueryParamsRequest) => QueryParamsResponse;
        ValidatorOutstandingRewards: (r:QueryValidatorOutstandingRewardsRequest) => QueryValidatorOutstandingRewardsResponse;
        ValidatorCommission: (r:QueryValidatorCommissionRequest) => QueryValidatorCommissionResponse;
        ValidatorSlashes: (r:QueryValidatorSlashesRequest) => QueryValidatorSlashesResponse;
        DelegationRewards: (r:QueryDelegationRewardsRequest) => QueryDelegationRewardsResponse;
        DelegationTotalRewards: (r:QueryDelegationTotalRewardsRequest) => QueryDelegationTotalRewardsResponse;
        DelegatorValidators: (r:QueryDelegatorValidatorsRequest) => QueryDelegatorValidatorsResponse;
        DelegatorWithdrawAddress: (r:QueryDelegatorWithdrawAddressRequest) => QueryDelegatorWithdrawAddressResponse;
        CommunityPool: (r:QueryCommunityPoolRequest) => QueryCommunityPoolResponse;
    }
}

