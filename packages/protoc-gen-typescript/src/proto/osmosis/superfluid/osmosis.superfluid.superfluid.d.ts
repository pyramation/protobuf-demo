// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace osmosis.superfluid {

    export enum SuperfluidAssetType {
        SuperfluidAssetTypeNative = "SuperfluidAssetTypeNative",
        SuperfluidAssetTypeLPShare = "SuperfluidAssetTypeLPShare",
    }
    // SuperfluidAsset stores the pair of superfluid asset type and denom pair
    export interface SuperfluidAsset {
        denom?: string;
        asset_type?: SuperfluidAssetType;
    }

    // SuperfluidIntermediaryAccount takes the role of intermediary between LP token
    // and OSMO tokens for superfluid staking
    export interface SuperfluidIntermediaryAccount {
        denom?: string;
        val_addr?: string;
        // perpetual gauge for rewards distribution
        gauge_id?: number;
    }

    // The Osmo-Equivalent-Multiplier Record for epoch N refers to the osmo worth we
    // treat an LP share as having, for all of epoch N. Eventually this is intended
    // to be set as the Time-weighted-average-osmo-backing for the entire duration
    // of epoch N-1. (Thereby locking whats in use for epoch N as based on the prior
    // epochs rewards) However for now, this is not the TWAP but instead the spot
    // price at the boundary.  For different types of assets in the future, it could
    // change.
    export interface OsmoEquivalentMultiplierRecord {
        epoch_number?: number;
        // superfluid asset denom, can be LP token or native token
        denom?: string;
        multiplier?: string;
    }

    // SuperfluidDelegationRecord takes the role of intermediary between LP token
    // and OSMO tokens for superfluid staking
    export interface SuperfluidDelegationRecord {
        delegator_address?: string;
        validator_address?: string;
        delegation_amount?: cosmos.base.v1beta1.Coin;
    }

    export interface LockIdIntermediaryAccountConnection {
        lock_id?: number;
        intermediary_account?: string;
    }

}
