// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace cosmos.group.v1 {

    export enum VoteOption {
        VOTE_OPTION_UNSPECIFIED = "VOTE_OPTION_UNSPECIFIED",
        VOTE_OPTION_YES = "VOTE_OPTION_YES",
        VOTE_OPTION_ABSTAIN = "VOTE_OPTION_ABSTAIN",
        VOTE_OPTION_NO = "VOTE_OPTION_NO",
        VOTE_OPTION_NO_WITH_VETO = "VOTE_OPTION_NO_WITH_VETO",
    }
    export enum ProposalStatus {
        PROPOSAL_STATUS_UNSPECIFIED = "PROPOSAL_STATUS_UNSPECIFIED",
        PROPOSAL_STATUS_SUBMITTED = "PROPOSAL_STATUS_SUBMITTED",
        PROPOSAL_STATUS_CLOSED = "PROPOSAL_STATUS_CLOSED",
        PROPOSAL_STATUS_ABORTED = "PROPOSAL_STATUS_ABORTED",
        PROPOSAL_STATUS_WITHDRAWN = "PROPOSAL_STATUS_WITHDRAWN",
    }
    export enum ProposalResult {
        PROPOSAL_RESULT_UNSPECIFIED = "PROPOSAL_RESULT_UNSPECIFIED",
        PROPOSAL_RESULT_UNFINALIZED = "PROPOSAL_RESULT_UNFINALIZED",
        PROPOSAL_RESULT_ACCEPTED = "PROPOSAL_RESULT_ACCEPTED",
        PROPOSAL_RESULT_REJECTED = "PROPOSAL_RESULT_REJECTED",
    }
    export enum ProposalExecutorResult {
        PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED = "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED",
        PROPOSAL_EXECUTOR_RESULT_NOT_RUN = "PROPOSAL_EXECUTOR_RESULT_NOT_RUN",
        PROPOSAL_EXECUTOR_RESULT_SUCCESS = "PROPOSAL_EXECUTOR_RESULT_SUCCESS",
        PROPOSAL_EXECUTOR_RESULT_FAILURE = "PROPOSAL_EXECUTOR_RESULT_FAILURE",
    }
    // Member represents a group member with an account address,
    // non-zero weight and metadata.
    export interface Member {
        // address is the member's account address.
        address?: string;
        // weight is the member's voting weight that should be greater than 0.
        weight?: string;
        // metadata is any arbitrary metadata to attached to the member.
        metadata?: string;
        // added_at is a timestamp specifying when a member was added.
        added_at?: google.protobuf.Timestamp;
    }

    // Members defines a repeated slice of Member objects.
    export interface Members {
        // members is the list of members.
        members?: Array<Member>;
    }

    // ThresholdDecisionPolicy implements the DecisionPolicy interface
    export interface ThresholdDecisionPolicy {
        // threshold is the minimum weighted sum of yes votes that must be met or exceeded for a proposal to succeed.
        threshold?: string;
        // windows defines the different windows for voting and execution.
        windows?: DecisionPolicyWindows;
    }

    // PercentageDecisionPolicy implements the DecisionPolicy interface
    export interface PercentageDecisionPolicy {
        // percentage is the minimum percentage the weighted sum of yes votes must meet for a proposal to succeed.
        percentage?: string;
        // windows defines the different windows for voting and execution.
        windows?: DecisionPolicyWindows;
    }

    // DecisionPolicyWindows defines the different windows for voting and execution.
    export interface DecisionPolicyWindows {
        // voting_period is the duration from submission of a proposal to the end of voting period
        // Within this times votes can be submitted with MsgVote.
        voting_period?: google.protobuf.Duration;
        // min_execution_period is the minimum duration after the proposal submission
        // where members can start sending MsgExec. This means that the window for
        // sending a MsgExec transaction is:
        // `[ submission + min_execution_period ; submission + voting_period + max_execution_period]`
        // where max_execution_period is a app-specific config, defined in the keeper.
        // If not set, min_execution_period will default to 0.
        //
        // Please make sure to set a `min_execution_period` that is smaller than
        // `voting_period + max_execution_period`, or else the above execution window
        // is empty, meaning that all proposals created with this decision policy
        // won't be able to be executed.
        min_execution_period?: google.protobuf.Duration;
    }

    // GroupInfo represents the high-level on-chain information for a group.
    export interface GroupInfo {
        // id is the unique ID of the group.
        id?: number;
        // admin is the account address of the group's admin.
        admin?: string;
        // metadata is any arbitrary metadata to attached to the group.
        metadata?: string;
        // version is used to track changes to a group's membership structure that
        // would break existing proposals. Whenever any members weight is changed,
        // or any member is added or removed this version is incremented and will
        // cause proposals based on older versions of this group to fail
        version?: number;
        // total_weight is the sum of the group members' weights.
        total_weight?: string;
        // created_at is a timestamp specifying when a group was created.
        created_at?: google.protobuf.Timestamp;
    }

    // GroupMember represents the relationship between a group and a member.
    export interface GroupMember {
        // group_id is the unique ID of the group.
        group_id?: number;
        // member is the member data.
        member?: Member;
    }

    // GroupPolicyInfo represents the high-level on-chain information for a group policy.
    export interface GroupPolicyInfo {
        // address is the account address of group policy.
        address?: string;
        // group_id is the unique ID of the group.
        group_id?: number;
        // admin is the account address of the group admin.
        admin?: string;
        // metadata is any arbitrary metadata to attached to the group policy.
        metadata?: string;
        // version is used to track changes to a group's GroupPolicyInfo structure that
        // would create a different result on a running proposal.
        version?: number;
        // decision_policy specifies the group policy's decision policy.
        decision_policy?: google.protobuf.Any;
        // created_at is a timestamp specifying when a group policy was created.
        created_at?: google.protobuf.Timestamp;
    }

    // Proposal defines a group proposal. Any member of a group can submit a proposal
    // for a group policy to decide upon.
    // A proposal consists of a set of `sdk.Msg`s that will be executed if the proposal
    // passes as well as some optional metadata associated with the proposal.
    export interface Proposal {
        // id is the unique id of the proposal.
        id?: number;
        // address is the account address of group policy.
        address?: string;
        // metadata is any arbitrary metadata to attached to the proposal.
        metadata?: string;
        // proposers are the account addresses of the proposers.
        proposers?: Array<string>;
        // submit_time is a timestamp specifying when a proposal was submitted.
        submit_time?: google.protobuf.Timestamp;
        // group_version tracks the version of the group that this proposal corresponds to.
        // When group membership is changed, existing proposals from previous group versions will become invalid.
        group_version?: number;
        // group_policy_version tracks the version of the group policy that this proposal corresponds to.
        // When a decision policy is changed, existing proposals from previous policy versions will become invalid.
        group_policy_version?: number;
        // status represents the high level position in the life cycle of the proposal. Initial value is Submitted.
        status?: ProposalStatus;
        // result is the final result based on the votes and election rule. Initial value is unfinalized.
        // The result is persisted so that clients can always rely on this state and not have to replicate the logic.
        result?: ProposalResult;
        // final_tally_result contains the sums of all weighted votes for this
        // proposal for each vote option, after tallying. When querying a proposal
        // via gRPC, this field is not populated until the proposal's voting period
        // has ended.
        final_tally_result?: TallyResult;
        // voting_period_end is the timestamp before which voting must be done.
        // Unless a successfull MsgExec is called before (to execute a proposal whose
        // tally is successful before the voting period ends), tallying will be done
        // at this point, and the `final_tally_result`, as well
        // as `status` and `result` fields will be accordingly updated.
        voting_period_end?: google.protobuf.Timestamp;
        // executor_result is the final result based on the votes and election rule. Initial value is NotRun.
        executor_result?: ProposalExecutorResult;
        // messages is a list of Msgs that will be executed if the proposal passes.
        messages?: Array<google.protobuf.Any>;
    }

    // TallyResult represents the sum of weighted votes for each vote option.
    export interface TallyResult {
        // yes_count is the weighted sum of yes votes.
        yes_count?: string;
        // abstain_count is the weighted sum of abstainers.
        abstain_count?: string;
        // no is the weighted sum of no votes.
        no_count?: string;
        // no_with_veto_count is the weighted sum of veto.
        no_with_veto_count?: string;
    }

    // Vote represents a vote for a proposal.
    export interface Vote {
        // proposal is the unique ID of the proposal.
        proposal_id?: number;
        // voter is the account address of the voter.
        voter?: string;
        // option is the voter's choice on the proposal.
        option?: VoteOption;
        // metadata is any arbitrary metadata to attached to the vote.
        metadata?: string;
        // submit_time is the timestamp when the vote was submitted.
        submit_time?: google.protobuf.Timestamp;
    }

}
