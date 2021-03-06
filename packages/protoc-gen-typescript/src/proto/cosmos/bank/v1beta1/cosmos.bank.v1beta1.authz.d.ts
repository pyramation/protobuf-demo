// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace cosmos.bank.v1beta1 {

    // SendAuthorization allows the grantee to spend up to spend_limit coins from
    // the granter's account.
    //
    // Since: cosmos-sdk 0.43
    export interface SendAuthorization {
        spend_limit?: Array<cosmos.base.v1beta1.Coin>;
    }

}

