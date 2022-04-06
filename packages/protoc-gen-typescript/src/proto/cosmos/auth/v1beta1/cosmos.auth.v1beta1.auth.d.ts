// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace cosmos.auth.v1beta1 {

    // BaseAccount defines a base account type. It contains all the necessary fields
    // for basic account functionality. Any custom account type should extend this
    // type for additional functionality (e.g. vesting).
    export interface BaseAccount {
        address?: string;
        pub_key?: google.protobuf.Any;
        account_number?: number;
        sequence?: number;
    }

    // ModuleAccount defines an account for modules that holds coins on a pool.
    export interface ModuleAccount {
        base_account?: BaseAccount;
        name?: string;
        permissions?: Array<string>;
    }

    // Params defines the parameters for the auth module.
    export interface Params {
        max_memo_characters?: number;
        tx_sig_limit?: number;
        tx_size_cost_per_byte?: number;
        sig_verify_cost_ed25519?: number;
        sig_verify_cost_secp256k1?: number;
    }

}
