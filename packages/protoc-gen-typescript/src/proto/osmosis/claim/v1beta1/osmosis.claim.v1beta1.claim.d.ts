// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace osmosis.claim.v1beta1 {

    export enum Action {
        ActionAddLiquidity = "ActionAddLiquidity",
        ActionSwap = "ActionSwap",
        ActionVote = "ActionVote",
        ActionDelegateStake = "ActionDelegateStake",
    }
    // A Claim Records is the metadata of claim data per address
    export interface ClaimRecord {
        // address of claim user
        address?: string;
        // total initial claimable amount for the user
        initial_claimable_amount?: Array<cosmos.base.v1beta1.Coin>;
        // true if action is completed
        // index of bool in array refers to action enum #
        action_completed?: Array<boolean>;
    }

}

