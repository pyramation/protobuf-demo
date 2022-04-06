// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace osmosis.epochs.v1beta1 {

    export interface QueryEpochsInfoRequest {
    }

    export interface QueryEpochsInfoResponse {
        epochs?: Array<EpochInfo>;
    }

    export interface QueryCurrentEpochRequest {
        identifier?: string;
    }

    export interface QueryCurrentEpochResponse {
        current_epoch?: number;
    }

    export interface QueryService {
        EpochInfos: (r:QueryEpochsInfoRequest) => QueryEpochsInfoResponse;
        CurrentEpoch: (r:QueryCurrentEpochRequest) => QueryCurrentEpochResponse;
    }
}
