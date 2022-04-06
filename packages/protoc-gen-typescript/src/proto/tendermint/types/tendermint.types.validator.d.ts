// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace tendermint.types {

    export interface ValidatorSet {
        validators?: Array<Validator>;
        proposer?: Validator;
        total_voting_power?: number;
    }

    export interface Validator {
        address?: Uint8Array;
        pub_key?: tendermint.crypto.PublicKey;
        voting_power?: number;
        proposer_priority?: number;
    }

    export interface SimpleValidator {
        pub_key?: tendermint.crypto.PublicKey;
        voting_power?: number;
    }

}

