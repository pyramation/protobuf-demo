// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace cosmos.staking.v1beta1 {

    export enum AuthorizationType {
        AUTHORIZATION_TYPE_UNSPECIFIED = "AUTHORIZATION_TYPE_UNSPECIFIED",
        AUTHORIZATION_TYPE_DELEGATE = "AUTHORIZATION_TYPE_DELEGATE",
        AUTHORIZATION_TYPE_UNDELEGATE = "AUTHORIZATION_TYPE_UNDELEGATE",
        AUTHORIZATION_TYPE_REDELEGATE = "AUTHORIZATION_TYPE_REDELEGATE",
    }
    // Validators defines list of validator addresses.
    export interface StakeAuthorization_Validators {
        address?: Array<string>;
    }

    // StakeAuthorization defines authorization for delegate/undelegate/redelegate.
    //
    // Since: cosmos-sdk 0.43
    export interface StakeAuthorization {
        // max_tokens specifies the maximum amount of tokens can be delegate to a validator. If it is
        // empty, there is no spend limit and any amount of coins can be delegated.
        max_tokens?: cosmos.base.v1beta1.Coin;
        // allow_list specifies list of validator addresses to whom grantee can delegate tokens on behalf of granter's
        // account.
        allow_list?: StakeAuthorization_Validators;
        // deny_list specifies list of validator addresses to whom grantee can not delegate tokens.
        deny_list?: StakeAuthorization_Validators;
        // authorization_type defines one of AuthorizationType.
        authorization_type?: AuthorizationType;
    }

}
