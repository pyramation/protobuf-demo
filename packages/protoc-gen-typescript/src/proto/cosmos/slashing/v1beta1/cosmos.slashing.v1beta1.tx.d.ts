// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace cosmos.slashing.v1beta1 {

    // MsgUnjail defines the Msg/Unjail request type
    export interface MsgUnjail {
        validator_addr?: string;
    }

    // MsgUnjailResponse defines the Msg/Unjail response type
    export interface MsgUnjailResponse {
    }

    export interface MsgService {
        Unjail: (r:MsgUnjail) => MsgUnjailResponse;
    }
}

