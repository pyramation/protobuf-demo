// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace cosmos.auth.v1beta1 {

    // QueryAccountsRequest is the request type for the Query/Accounts RPC method.
    //
    // Since: cosmos-sdk 0.43
    export interface QueryAccountsRequest {
        // pagination defines an optional pagination for the request.
        pagination?: cosmos.base.query.v1beta1.PageRequest;
    }

    // QueryAccountsResponse is the response type for the Query/Accounts RPC method.
    //
    // Since: cosmos-sdk 0.43
    export interface QueryAccountsResponse {
        // accounts are the existing accounts
        accounts?: Array<google.protobuf.Any>;
        // pagination defines the pagination in the response.
        pagination?: cosmos.base.query.v1beta1.PageResponse;
    }

    // QueryAccountRequest is the request type for the Query/Account RPC method.
    export interface QueryAccountRequest {
        // address defines the address to query for.
        address?: string;
    }

    // QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method.
    export interface QueryModuleAccountsRequest {
    }

    // QueryParamsResponse is the response type for the Query/Params RPC method.
    export interface QueryParamsResponse {
        // params defines the parameters of the module.
        params?: Params;
    }

    // QueryAccountResponse is the response type for the Query/Account RPC method.
    export interface QueryAccountResponse {
        // account defines the account of the corresponding address.
        account?: google.protobuf.Any;
    }

    // QueryParamsRequest is the request type for the Query/Params RPC method.
    export interface QueryParamsRequest {
    }

    // QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method.
    export interface QueryModuleAccountsResponse {
        accounts?: Array<google.protobuf.Any>;
    }

    // Bech32PrefixRequest is the request type for Bech32Prefix rpc method
    export interface Bech32PrefixRequest {
    }

    // Bech32PrefixResponse is the response type for Bech32Prefix rpc method
    export interface Bech32PrefixResponse {
        bech32_prefix?: string;
    }

    // AddressBytesToStringRequest is the request type for AddressString rpc method
    export interface AddressBytesToStringRequest {
        address_bytes?: Uint8Array;
    }

    // AddressBytesToStringResponse is the response type for AddressString rpc method
    export interface AddressBytesToStringResponse {
        address_string?: string;
    }

    // AddressStringToBytesRequest is the request type for AccountBytes rpc method
    export interface AddressStringToBytesRequest {
        address_string?: string;
    }

    // AddressStringToBytesResponse is the response type for AddressBytes rpc method
    export interface AddressStringToBytesResponse {
        address_bytes?: Uint8Array;
    }

    export interface QueryService {
        Accounts: (r:QueryAccountsRequest) => QueryAccountsResponse;
        Account: (r:QueryAccountRequest) => QueryAccountResponse;
        Params: (r:QueryParamsRequest) => QueryParamsResponse;
        ModuleAccounts: (r:QueryModuleAccountsRequest) => QueryModuleAccountsResponse;
        Bech32Prefix: (r:Bech32PrefixRequest) => Bech32PrefixResponse;
        AddressBytesToString: (r:AddressBytesToStringRequest) => AddressBytesToStringResponse;
        AddressStringToBytes: (r:AddressStringToBytesRequest) => AddressStringToBytesResponse;
    }
}
