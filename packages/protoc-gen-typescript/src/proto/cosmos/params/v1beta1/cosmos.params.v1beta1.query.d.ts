// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace cosmos.params.v1beta1 {

    // QueryParamsRequest is request type for the Query/Params RPC method.
    export interface QueryParamsRequest {
        // subspace defines the module to query the parameter for.
        subspace?: string;
        // key defines the key of the parameter in the subspace.
        key?: string;
    }

    // QueryParamsResponse is response type for the Query/Params RPC method.
    export interface QueryParamsResponse {
        // param defines the queried parameter.
        param?: ParamChange;
    }

    // QuerySubspacesRequest defines a request type for querying for all registered
    // subspaces and all keys for a subspace.
    export interface QuerySubspacesRequest {
    }

    // QuerySubspacesResponse defines the response types for querying for all
    // registered subspaces and all keys for a subspace.
    export interface QuerySubspacesResponse {
        subspaces?: Array<Subspace>;
    }

    // Subspace defines a parameter subspace name and all the keys that exist for
    // the subspace.
    export interface Subspace {
        subspace?: string;
        keys?: Array<string>;
    }

    export interface QueryService {
        Params: (r:QueryParamsRequest) => QueryParamsResponse;
        Subspaces: (r:QuerySubspacesRequest) => QuerySubspacesResponse;
    }
}

