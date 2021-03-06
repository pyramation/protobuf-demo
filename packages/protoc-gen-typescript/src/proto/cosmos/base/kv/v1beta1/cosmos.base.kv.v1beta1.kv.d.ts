// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace cosmos.base.kv.v1beta1 {

    // Pairs defines a repeated slice of Pair objects.
    export interface Pairs {
        pairs?: Array<Pair>;
    }

    // Pair defines a key/value bytes tuple.
    export interface Pair {
        key?: Uint8Array;
        value?: Uint8Array;
    }

}

