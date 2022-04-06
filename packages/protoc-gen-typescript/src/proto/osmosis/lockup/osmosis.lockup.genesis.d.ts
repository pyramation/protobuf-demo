// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace osmosis.lockup {

    // GenesisState defines the lockup module's genesis state.
    export interface GenesisState {
        last_lock_id?: number;
        locks?: Array<PeriodLock>;
        synthetic_locks?: Array<SyntheticLock>;
    }

}

