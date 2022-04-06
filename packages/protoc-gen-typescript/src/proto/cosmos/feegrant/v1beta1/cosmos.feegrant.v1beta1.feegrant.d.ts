// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace cosmos.feegrant.v1beta1 {

    // BasicAllowance implements Allowance with a one-time grant of tokens
    // that optionally expires. The grantee can use up to SpendLimit to cover fees.
    export interface BasicAllowance {
        // spend_limit specifies the maximum amount of tokens that can be spent
        // by this allowance and will be updated as tokens are spent. If it is
        // empty, there is no spend limit and any amount of coins can be spent.
        spend_limit?: Array<cosmos.base.v1beta1.Coin>;
        // expiration specifies an optional time when this allowance expires
        expiration?: google.protobuf.Timestamp;
    }

    // PeriodicAllowance extends Allowance to allow for both a maximum cap,
    // as well as a limit per time period.
    export interface PeriodicAllowance {
        // basic specifies a struct of `BasicAllowance`
        basic?: BasicAllowance;
        // period specifies the time duration in which period_spend_limit coins can
        // be spent before that allowance is reset
        period?: google.protobuf.Duration;
        // period_spend_limit specifies the maximum number of coins that can be spent
        // in the period
        period_spend_limit?: Array<cosmos.base.v1beta1.Coin>;
        // period_can_spend is the number of coins left to be spent before the period_reset time
        period_can_spend?: Array<cosmos.base.v1beta1.Coin>;
        // period_reset is the time at which this period resets and a new one begins,
        // it is calculated from the start time of the first transaction after the
        // last period ended
        period_reset?: google.protobuf.Timestamp;
    }

    // AllowedMsgAllowance creates allowance only for specified message types.
    export interface AllowedMsgAllowance {
        // allowance can be any of basic and periodic fee allowance.
        allowance?: google.protobuf.Any;
        // allowed_messages are the messages for which the grantee has the access.
        allowed_messages?: Array<string>;
    }

    // Grant is stored in the KVStore to record a grant with full context
    export interface Grant {
        // granter is the address of the user granting an allowance of their funds.
        granter?: string;
        // grantee is the address of the user being granted an allowance of another user's funds.
        grantee?: string;
        // allowance can be any of basic, periodic, allowed fee allowance.
        allowance?: google.protobuf.Any;
    }

}

