// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace osmosis.incentives {

    // GenesisState defines the incentives module's genesis state.
    export interface GenesisState {
        // params defines all the parameters of the module
        params?: Params;
        gauges?: Array<Gauge>;
        lockable_durations?: Array<google.protobuf.Duration>;
        last_gauge_id?: number;
    }

}

