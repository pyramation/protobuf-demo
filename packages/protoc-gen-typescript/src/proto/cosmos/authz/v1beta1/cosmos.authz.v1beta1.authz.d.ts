// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace cosmos.authz.v1beta1 {

    // GenericAuthorization gives the grantee unrestricted permissions to execute
    // the provided method on behalf of the granter's account.
    export interface GenericAuthorization {
        // Msg, identified by it's type URL, to grant unrestricted permissions to execute
        msg?: string;
    }

    // Grant gives permissions to execute
    // the provide method with expiration time.
    export interface Grant {
        authorization?: google.protobuf.Any;
        // time when the grant will expire and will be pruned. If null, then the grant
        // doesn't have a time expiration (other conditions  in `authorization`
        // may apply to invalidate the grant)
        expiration?: google.protobuf.Timestamp;
    }

    // GrantAuthorization extends a grant with both the addresses of the grantee and granter.
    // It is used in genesis.proto and query.proto
    export interface GrantAuthorization {
        granter?: string;
        grantee?: string;
        authorization?: google.protobuf.Any;
        expiration?: google.protobuf.Timestamp;
    }

    // GrantQueueItem contains the list of TypeURL of a sdk.Msg.
    export interface GrantQueueItem {
        // msg_type_urls contains the list of TypeURL of a sdk.Msg.
        msg_type_urls?: Array<string>;
    }

}

