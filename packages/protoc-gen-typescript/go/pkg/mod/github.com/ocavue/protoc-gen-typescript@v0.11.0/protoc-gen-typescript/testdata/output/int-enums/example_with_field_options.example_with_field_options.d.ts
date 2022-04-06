import * as google_protobuf from "google/protobuf/timestamp"
// import * as google_api from "google/api/field_behavior" // imported but not used
// import * as opts from "opts/opts" // imported but not used

// Code generated by protoc-gen-typescript. DO NOT EDIT.

declare namespace example_with_field_options {

    // SearchRequest is an example type representing a search query.
    export interface SearchRequest {
        query?: string;
        page_number?: number;
        // Number of results per page.
        result_per_page?: number; // Should never be zero.
        corpus?: SearchRequest.Corpus;
        sent_at?: google_protobuf.Timestamp;
        xyz?: { [key: string]: number };
        zytes?: Uint8Array;
        example_required: number;
    }

    export namespace SearchRequest {
        export enum Corpus {
            UNIVERSAL = 0,
            WEB = 1,
            IMAGES = 2,
            LOCAL = 3,
            NEWS = 4,
            PRODUCTS = 5,
            VIDEO = 6,
        }
        export interface XyzEntry {
            key?: string;
            value?: number;
        }

    }

    export interface SearchResponse {
        results: Array<string>;
        num_results: number;
        original_request: SearchRequest;
        next_results_uri?: string;
    }

}

