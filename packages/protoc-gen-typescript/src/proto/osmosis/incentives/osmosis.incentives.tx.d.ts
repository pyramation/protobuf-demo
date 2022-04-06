// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace osmosis.incentives {

    export interface MsgCreateGauge {
        // flag to show if it's perpetual or multi-epoch
        // distribution incentives by third party
        is_perpetual?: boolean;
        owner?: string;
        // distribute condition of a lock which meet one of these conditions
        distribute_to?: osmosis.lockup.QueryCondition;
        // can distribute multiple coins
        coins?: Array<cosmos.base.v1beta1.Coin>;
        // distribution start time
        start_time?: google.protobuf.Timestamp;
        // number of epochs distribution will be done
        num_epochs_paid_over?: number;
    }

    export interface MsgCreateGaugeResponse {
    }

    export interface MsgAddToGauge {
        owner?: string;
        gauge_id?: number;
        rewards?: Array<cosmos.base.v1beta1.Coin>;
    }

    export interface MsgAddToGaugeResponse {
    }

    export interface MsgService {
        CreateGauge: (r:MsgCreateGauge) => MsgCreateGaugeResponse;
        AddToGauge: (r:MsgAddToGauge) => MsgAddToGaugeResponse;
    }
}
