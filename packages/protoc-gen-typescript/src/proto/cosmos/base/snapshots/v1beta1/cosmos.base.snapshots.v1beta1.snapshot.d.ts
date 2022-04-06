// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace cosmos.base.snapshots.v1beta1 {

    // Snapshot contains Tendermint state sync snapshot info.
    export interface Snapshot {
        height?: number;
        format?: number;
        chunks?: number;
        hash?: Uint8Array;
        metadata?: Metadata;
    }

    // Metadata contains SDK-specific snapshot metadata.
    export interface Metadata {
        chunk_hashes?: Array<Uint8Array>; // SHA-256 chunk hashes
    }

    // SnapshotItem is an item contained in a rootmulti.Store snapshot.
    export interface SnapshotItem {
        store?: SnapshotStoreItem;
        iavl?: SnapshotIAVLItem;
        extension?: SnapshotExtensionMeta;
        extension_payload?: SnapshotExtensionPayload;
        kv?: SnapshotKVItem;
        schema?: SnapshotSchema;
    }

    // SnapshotStoreItem contains metadata about a snapshotted store.
    export interface SnapshotStoreItem {
        name?: string;
    }

    // SnapshotIAVLItem is an exported IAVL node.
    export interface SnapshotIAVLItem {
        key?: Uint8Array;
        value?: Uint8Array;
        // version is block height
        version?: number;
        // height is depth of the tree.
        height?: number;
    }

    // SnapshotExtensionMeta contains metadata about an external snapshotter.
    export interface SnapshotExtensionMeta {
        name?: string;
        format?: number;
    }

    // SnapshotExtensionPayload contains payloads of an external snapshotter.
    export interface SnapshotExtensionPayload {
        payload?: Uint8Array;
    }

    // SnapshotKVItem is an exported Key/Value Pair
    export interface SnapshotKVItem {
        key?: Uint8Array;
        value?: Uint8Array;
    }

    // SnapshotSchema is an exported schema of smt store
    export interface SnapshotSchema {
        keys?: Array<Uint8Array>;
    }

}
