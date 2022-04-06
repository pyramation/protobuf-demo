// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace osmosis.superfluid {

    export interface QueryParamsRequest {
    }

    export interface QueryParamsResponse {
        // params defines the parameters of the module.
        params?: Params;
    }

    export interface AssetTypeRequest {
        denom?: string;
    }

    export interface AssetTypeResponse {
        asset_type?: SuperfluidAssetType;
    }

    export interface AllAssetsRequest {
    }

    export interface AllAssetsResponse {
        assets?: Array<SuperfluidAsset>;
    }

    export interface AssetMultiplierRequest {
        denom?: string;
    }

    export interface AssetMultiplierResponse {
        osmo_equivalent_multiplier?: OsmoEquivalentMultiplierRecord;
    }

    export interface SuperfluidIntermediaryAccountInfo {
        denom?: string;
        val_addr?: string;
        gauge_id?: number;
        address?: string;
    }

    export interface AllIntermediaryAccountsRequest {
        pagination?: cosmos.base.query.v1beta1.PageRequest;
    }

    export interface AllIntermediaryAccountsResponse {
        accounts?: Array<SuperfluidIntermediaryAccountInfo>;
        pagination?: cosmos.base.query.v1beta1.PageResponse;
    }

    export interface ConnectedIntermediaryAccountRequest {
        lock_id?: number;
    }

    export interface ConnectedIntermediaryAccountResponse {
        account?: SuperfluidIntermediaryAccountInfo;
    }

    export interface TotalSuperfluidDelegationsRequest {
    }

    export interface TotalSuperfluidDelegationsResponse {
        totalDelegations?: string;
    }

    export interface SuperfluidDelegationAmountRequest {
        delegator_address?: string;
        validator_address?: string;
        denom?: string;
    }

    export interface SuperfluidDelegationAmountResponse {
        amount?: Array<cosmos.base.v1beta1.Coin>;
    }

    export interface SuperfluidDelegationsByDelegatorRequest {
        delegator_address?: string;
    }

    export interface SuperfluidDelegationsByDelegatorResponse {
        superfluid_delegation_records?: Array<SuperfluidDelegationRecord>;
        total_delegated_coins?: Array<cosmos.base.v1beta1.Coin>;
    }

    export interface SuperfluidUndelegationsByDelegatorRequest {
        delegator_address?: string;
        denom?: string;
    }

    export interface SuperfluidUndelegationsByDelegatorResponse {
        superfluid_delegation_records?: Array<SuperfluidDelegationRecord>;
        total_undelegated_coins?: Array<cosmos.base.v1beta1.Coin>;
        synthetic_locks?: Array<osmosis.lockup.SyntheticLock>;
    }

    export interface SuperfluidDelegationsByValidatorDenomRequest {
        validator_address?: string;
        denom?: string;
    }

    export interface SuperfluidDelegationsByValidatorDenomResponse {
        superfluid_delegation_records?: Array<SuperfluidDelegationRecord>;
    }

    export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
        validator_address?: string;
        denom?: string;
    }

    export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
        total_delegated_coins?: Array<cosmos.base.v1beta1.Coin>;
    }

    export interface QueryService {
        Params: (r:QueryParamsRequest) => QueryParamsResponse;
        AssetType: (r:AssetTypeRequest) => AssetTypeResponse;
        AllAssets: (r:AllAssetsRequest) => AllAssetsResponse;
        AssetMultiplier: (r:AssetMultiplierRequest) => AssetMultiplierResponse;
        AllIntermediaryAccounts: (r:AllIntermediaryAccountsRequest) => AllIntermediaryAccountsResponse;
        ConnectedIntermediaryAccount: (r:ConnectedIntermediaryAccountRequest) => ConnectedIntermediaryAccountResponse;
        TotalSuperfluidDelegations: (r:TotalSuperfluidDelegationsRequest) => TotalSuperfluidDelegationsResponse;
        SuperfluidDelegationAmount: (r:SuperfluidDelegationAmountRequest) => SuperfluidDelegationAmountResponse;
        SuperfluidDelegationsByDelegator: (r:SuperfluidDelegationsByDelegatorRequest) => SuperfluidDelegationsByDelegatorResponse;
        SuperfluidUndelegationsByDelegator: (r:SuperfluidUndelegationsByDelegatorRequest) => SuperfluidUndelegationsByDelegatorResponse;
        SuperfluidDelegationsByValidatorDenom: (r:SuperfluidDelegationsByValidatorDenomRequest) => SuperfluidDelegationsByValidatorDenomResponse;
        EstimateSuperfluidDelegatedAmountByValidatorDenom: (r:EstimateSuperfluidDelegatedAmountByValidatorDenomRequest) => EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    }
}

