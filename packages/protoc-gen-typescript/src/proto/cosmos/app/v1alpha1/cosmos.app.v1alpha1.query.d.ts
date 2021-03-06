// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace cosmos.app.v1alpha1 {

    // QueryConfigRequest is the Query/Config request type.
    export interface QueryConfigRequest {
    }

    // QueryConfigRequest is the Query/Config response type.
    export interface QueryConfigResponse {
        // config is the current app config.
        config?: Config;
    }

    export interface QueryService {
        Config: (r:QueryConfigRequest) => QueryConfigResponse;
    }
}

