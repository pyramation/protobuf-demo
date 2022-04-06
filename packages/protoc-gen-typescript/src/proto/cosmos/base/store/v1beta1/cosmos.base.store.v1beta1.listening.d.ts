// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace cosmos.base.store.v1beta1 {

    // StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
    // It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
    // Deletes
    //
    // Since: cosmos-sdk 0.43
    export interface StoreKVPair {
        store_key?: string; // the store key for the KVStore this pair originates from
        delete?: boolean; // true indicates a delete operation, false indicates a set operation
        key?: Uint8Array;
        value?: Uint8Array;
    }

}

