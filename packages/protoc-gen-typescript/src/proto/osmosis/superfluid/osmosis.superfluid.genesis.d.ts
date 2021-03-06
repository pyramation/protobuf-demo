// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace osmosis.superfluid {

    // GenesisState defines the module's genesis state.
    export interface GenesisState {
        params?: Params;
        superfluid_assets?: Array<SuperfluidAsset>;
        osmo_equivalent_multipliers?: Array<OsmoEquivalentMultiplierRecord>;
        intermediary_accounts?: Array<SuperfluidIntermediaryAccount>;
        intemediary_account_connections?: Array<LockIdIntermediaryAccountConnection>;
    }

}

