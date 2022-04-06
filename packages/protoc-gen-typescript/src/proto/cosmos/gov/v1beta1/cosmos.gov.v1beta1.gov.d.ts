// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace cosmos.gov.v1beta1 {

    export enum VoteOption {
        VOTE_OPTION_UNSPECIFIED = "VOTE_OPTION_UNSPECIFIED",
        VOTE_OPTION_YES = "VOTE_OPTION_YES",
        VOTE_OPTION_ABSTAIN = "VOTE_OPTION_ABSTAIN",
        VOTE_OPTION_NO = "VOTE_OPTION_NO",
        VOTE_OPTION_NO_WITH_VETO = "VOTE_OPTION_NO_WITH_VETO",
    }
    export enum ProposalStatus {
        PROPOSAL_STATUS_UNSPECIFIED = "PROPOSAL_STATUS_UNSPECIFIED",
        PROPOSAL_STATUS_DEPOSIT_PERIOD = "PROPOSAL_STATUS_DEPOSIT_PERIOD",
        PROPOSAL_STATUS_VOTING_PERIOD = "PROPOSAL_STATUS_VOTING_PERIOD",
        PROPOSAL_STATUS_PASSED = "PROPOSAL_STATUS_PASSED",
        PROPOSAL_STATUS_REJECTED = "PROPOSAL_STATUS_REJECTED",
        PROPOSAL_STATUS_FAILED = "PROPOSAL_STATUS_FAILED",
    }
    // WeightedVoteOption defines a unit of vote for vote split.
    //
    // Since: cosmos-sdk 0.43
    export interface WeightedVoteOption {
        option?: VoteOption;
        weight?: string;
    }

    // TextProposal defines a standard text proposal whose changes need to be
    // manually updated in case of approval.
    export interface TextProposal {
        title?: string;
        description?: string;
    }

    // Deposit defines an amount deposited by an account address to an active
    // proposal.
    export interface Deposit {
        proposal_id?: number;
        depositor?: string;
        amount?: Array<cosmos.base.v1beta1.Coin>;
    }

    // Proposal defines the core field members of a governance proposal.
    export interface Proposal {
        proposal_id?: number;
        content?: google.protobuf.Any;
        status?: ProposalStatus;
        // final_tally_result is the final tally result of the proposal. When
        // querying a proposal via gRPC, this field is not populated until the
        // proposal's voting period has ended.
        final_tally_result?: TallyResult;
        submit_time?: google.protobuf.Timestamp;
        deposit_end_time?: google.protobuf.Timestamp;
        total_deposit?: Array<cosmos.base.v1beta1.Coin>;
        voting_start_time?: google.protobuf.Timestamp;
        voting_end_time?: google.protobuf.Timestamp;
    }

    // TallyResult defines a standard tally for a governance proposal.
    export interface TallyResult {
        yes?: string;
        abstain?: string;
        no?: string;
        no_with_veto?: string;
    }

    // Vote defines a vote on a governance proposal.
    // A Vote consists of a proposal ID, the voter, and the vote option.
    export interface Vote {
        proposal_id?: number;
        voter?: string;
        // Deprecated: Prefer to use `options` instead. This field is set in queries
        // if and only if `len(options) == 1` and that option has weight 1. In all
        // other cases, this field will default to VOTE_OPTION_UNSPECIFIED.
        option?: VoteOption;
        // Since: cosmos-sdk 0.43
        options?: Array<WeightedVoteOption>;
    }

    // DepositParams defines the params for deposits on governance proposals.
    export interface DepositParams {
        //  Minimum deposit for a proposal to enter voting period.
        min_deposit?: Array<cosmos.base.v1beta1.Coin>;
        //  Maximum period for Atom holders to deposit on a proposal. Initial value: 2
        //  months.
        max_deposit_period?: google.protobuf.Duration;
    }

    // VotingParams defines the params for voting on governance proposals.
    export interface VotingParams {
        //  Length of the voting period.
        voting_period?: google.protobuf.Duration;
    }

    // TallyParams defines the params for tallying votes on governance proposals.
    export interface TallyParams {
        //  Minimum percentage of total stake needed to vote for a result to be
        //  considered valid.
        quorum?: Uint8Array;
        //  Minimum proportion of Yes votes for proposal to pass. Default value: 0.5.
        threshold?: Uint8Array;
        //  Minimum value of Veto votes to Total votes ratio for proposal to be
        //  vetoed. Default value: 1/3.
        veto_threshold?: Uint8Array;
    }

}
