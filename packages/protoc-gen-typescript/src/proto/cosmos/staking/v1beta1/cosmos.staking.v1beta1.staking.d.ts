// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace cosmos.staking.v1beta1 {

    export enum BondStatus {
        BOND_STATUS_UNSPECIFIED = "BOND_STATUS_UNSPECIFIED",
        BOND_STATUS_UNBONDED = "BOND_STATUS_UNBONDED",
        BOND_STATUS_UNBONDING = "BOND_STATUS_UNBONDING",
        BOND_STATUS_BONDED = "BOND_STATUS_BONDED",
    }
    // HistoricalInfo contains header and validator information for a given block.
    // It is stored as part of staking module's state, which persists the `n` most
    // recent HistoricalInfo
    // (`n` is set by the staking module's `historical_entries` parameter).
    export interface HistoricalInfo {
        header?: tendermint.types.Header;
        valset?: Array<Validator>;
    }

    // CommissionRates defines the initial commission rates to be used for creating
    // a validator.
    export interface CommissionRates {
        // rate is the commission rate charged to delegators, as a fraction.
        rate?: string;
        // max_rate defines the maximum commission rate which validator can ever charge, as a fraction.
        max_rate?: string;
        // max_change_rate defines the maximum daily increase of the validator commission, as a fraction.
        max_change_rate?: string;
    }

    // Commission defines commission parameters for a given validator.
    export interface Commission {
        // commission_rates defines the initial commission rates to be used for creating a validator.
        commission_rates?: CommissionRates;
        // update_time is the last time the commission rate was changed.
        update_time?: google.protobuf.Timestamp;
    }

    // Description defines a validator description.
    export interface Description {
        // moniker defines a human-readable name for the validator.
        moniker?: string;
        // identity defines an optional identity signature (ex. UPort or Keybase).
        identity?: string;
        // website defines an optional website link.
        website?: string;
        // security_contact defines an optional email for security contact.
        security_contact?: string;
        // details define other optional details.
        details?: string;
    }

    // Validator defines a validator, together with the total amount of the
    // Validator's bond shares and their exchange rate to coins. Slashing results in
    // a decrease in the exchange rate, allowing correct calculation of future
    // undelegations without iterating over delegators. When coins are delegated to
    // this validator, the validator is credited with a delegation whose number of
    // bond shares is based on the amount of coins delegated divided by the current
    // exchange rate. Voting power can be calculated as total bonded shares
    // multiplied by exchange rate.
    export interface Validator {
        // operator_address defines the address of the validator's operator; bech encoded in JSON.
        operator_address?: string;
        // consensus_pubkey is the consensus public key of the validator, as a Protobuf Any.
        consensus_pubkey?: google.protobuf.Any;
        // jailed defined whether the validator has been jailed from bonded status or not.
        jailed?: boolean;
        // status is the validator status (bonded/unbonding/unbonded).
        status?: BondStatus;
        // tokens define the delegated tokens (incl. self-delegation).
        tokens?: string;
        // delegator_shares defines total shares issued to a validator's delegators.
        delegator_shares?: string;
        // description defines the description terms for the validator.
        description?: Description;
        // unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.
        unbonding_height?: number;
        // unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.
        unbonding_time?: google.protobuf.Timestamp;
        // commission defines the commission parameters.
        commission?: Commission;
        // min_self_delegation is the validator's self declared minimum self delegation.
        min_self_delegation?: string;
    }

    // ValAddresses defines a repeated set of validator addresses.
    export interface ValAddresses {
        addresses?: Array<string>;
    }

    // DVPair is struct that just has a delegator-validator pair with no other data.
    // It is intended to be used as a marshalable pointer. For example, a DVPair can
    // be used to construct the key to getting an UnbondingDelegation from state.
    export interface DVPair {
        delegator_address?: string;
        validator_address?: string;
    }

    // DVPairs defines an array of DVPair objects.
    export interface DVPairs {
        pairs?: Array<DVPair>;
    }

    // DVVTriplet is struct that just has a delegator-validator-validator triplet
    // with no other data. It is intended to be used as a marshalable pointer. For
    // example, a DVVTriplet can be used to construct the key to getting a
    // Redelegation from state.
    export interface DVVTriplet {
        delegator_address?: string;
        validator_src_address?: string;
        validator_dst_address?: string;
    }

    // DVVTriplets defines an array of DVVTriplet objects.
    export interface DVVTriplets {
        triplets?: Array<DVVTriplet>;
    }

    // Delegation represents the bond with tokens held by an account. It is
    // owned by one delegator, and is associated with the voting power of one
    // validator.
    export interface Delegation {
        // delegator_address is the bech32-encoded address of the delegator.
        delegator_address?: string;
        // validator_address is the bech32-encoded address of the validator.
        validator_address?: string;
        // shares define the delegation shares received.
        shares?: string;
    }

    // UnbondingDelegation stores all of a single delegator's unbonding bonds
    // for a single validator in an time-ordered list.
    export interface UnbondingDelegation {
        // delegator_address is the bech32-encoded address of the delegator.
        delegator_address?: string;
        // validator_address is the bech32-encoded address of the validator.
        validator_address?: string;
        // entries are the unbonding delegation entries.
        entries?: Array<UnbondingDelegationEntry>; // unbonding delegation entries
    }

    // UnbondingDelegationEntry defines an unbonding object with relevant metadata.
    export interface UnbondingDelegationEntry {
        // creation_height is the height which the unbonding took place.
        creation_height?: number;
        // completion_time is the unix time for unbonding completion.
        completion_time?: google.protobuf.Timestamp;
        // initial_balance defines the tokens initially scheduled to receive at completion.
        initial_balance?: string;
        // balance defines the tokens to receive at completion.
        balance?: string;
    }

    // RedelegationEntry defines a redelegation object with relevant metadata.
    export interface RedelegationEntry {
        // creation_height  defines the height which the redelegation took place.
        creation_height?: number;
        // completion_time defines the unix time for redelegation completion.
        completion_time?: google.protobuf.Timestamp;
        // initial_balance defines the initial balance when redelegation started.
        initial_balance?: string;
        // shares_dst is the amount of destination-validator shares created by redelegation.
        shares_dst?: string;
    }

    // Redelegation contains the list of a particular delegator's redelegating bonds
    // from a particular source validator to a particular destination validator.
    export interface Redelegation {
        // delegator_address is the bech32-encoded address of the delegator.
        delegator_address?: string;
        // validator_src_address is the validator redelegation source operator address.
        validator_src_address?: string;
        // validator_dst_address is the validator redelegation destination operator address.
        validator_dst_address?: string;
        // entries are the redelegation entries.
        entries?: Array<RedelegationEntry>; // redelegation entries
    }

    // Params defines the parameters for the staking module.
    export interface Params {
        // unbonding_time is the time duration of unbonding.
        unbonding_time?: google.protobuf.Duration;
        // max_validators is the maximum number of validators.
        max_validators?: number;
        // max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio).
        max_entries?: number;
        // historical_entries is the number of historical entries to persist.
        historical_entries?: number;
        // bond_denom defines the bondable coin denomination.
        bond_denom?: string;
        // min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators
        min_commission_rate?: string;
    }

    // DelegationResponse is equivalent to Delegation except that it contains a
    // balance in addition to shares which is more suitable for client responses.
    export interface DelegationResponse {
        delegation?: Delegation;
        balance?: cosmos.base.v1beta1.Coin;
    }

    // RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
    // contains a balance in addition to shares which is more suitable for client
    // responses.
    export interface RedelegationEntryResponse {
        redelegation_entry?: RedelegationEntry;
        balance?: string;
    }

    // RedelegationResponse is equivalent to a Redelegation except that its entries
    // contain a balance in addition to shares which is more suitable for client
    // responses.
    export interface RedelegationResponse {
        redelegation?: Redelegation;
        entries?: Array<RedelegationEntryResponse>;
    }

    // Pool is used for tracking bonded and not-bonded token supply of the bond
    // denomination.
    export interface Pool {
        not_bonded_tokens?: string;
        bonded_tokens?: string;
    }

}
