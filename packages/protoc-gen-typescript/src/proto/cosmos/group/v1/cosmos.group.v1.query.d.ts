// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace cosmos.group.v1 {

    // QueryGroupInfoRequest is the Query/GroupInfo request type.
    export interface QueryGroupInfoRequest {
        // group_id is the unique ID of the group.
        group_id?: number;
    }

    // QueryGroupInfoResponse is the Query/GroupInfo response type.
    export interface QueryGroupInfoResponse {
        // info is the GroupInfo for the group.
        info?: GroupInfo;
    }

    // QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type.
    export interface QueryGroupPolicyInfoRequest {
        // address is the account address of the group policy.
        address?: string;
    }

    // QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type.
    export interface QueryGroupPolicyInfoResponse {
        // info is the GroupPolicyInfo for the group policy.
        info?: GroupPolicyInfo;
    }

    // QueryGroupMembersRequest is the Query/GroupMembers request type.
    export interface QueryGroupMembersRequest {
        // group_id is the unique ID of the group.
        group_id?: number;
        // pagination defines an optional pagination for the request.
        pagination?: cosmos.base.query.v1beta1.PageRequest;
    }

    // QueryGroupMembersResponse is the Query/GroupMembersResponse response type.
    export interface QueryGroupMembersResponse {
        // members are the members of the group with given group_id.
        members?: Array<GroupMember>;
        // pagination defines the pagination in the response.
        pagination?: cosmos.base.query.v1beta1.PageResponse;
    }

    // QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type.
    export interface QueryGroupsByAdminRequest {
        // admin is the account address of a group's admin.
        admin?: string;
        // pagination defines an optional pagination for the request.
        pagination?: cosmos.base.query.v1beta1.PageRequest;
    }

    // QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type.
    export interface QueryGroupsByAdminResponse {
        // groups are the groups info with the provided admin.
        groups?: Array<GroupInfo>;
        // pagination defines the pagination in the response.
        pagination?: cosmos.base.query.v1beta1.PageResponse;
    }

    // QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type.
    export interface QueryGroupPoliciesByGroupRequest {
        // group_id is the unique ID of the group policy's group.
        group_id?: number;
        // pagination defines an optional pagination for the request.
        pagination?: cosmos.base.query.v1beta1.PageRequest;
    }

    // QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type.
    export interface QueryGroupPoliciesByGroupResponse {
        // group_policies are the group policies info associated with the provided group.
        group_policies?: Array<GroupPolicyInfo>;
        // pagination defines the pagination in the response.
        pagination?: cosmos.base.query.v1beta1.PageResponse;
    }

    // QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type.
    export interface QueryGroupPoliciesByAdminRequest {
        // admin is the admin address of the group policy.
        admin?: string;
        // pagination defines an optional pagination for the request.
        pagination?: cosmos.base.query.v1beta1.PageRequest;
    }

    // QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type.
    export interface QueryGroupPoliciesByAdminResponse {
        // group_policies are the group policies info with provided admin.
        group_policies?: Array<GroupPolicyInfo>;
        // pagination defines the pagination in the response.
        pagination?: cosmos.base.query.v1beta1.PageResponse;
    }

    // QueryProposalRequest is the Query/Proposal request type.
    export interface QueryProposalRequest {
        // proposal_id is the unique ID of a proposal.
        proposal_id?: number;
    }

    // QueryProposalResponse is the Query/Proposal response type.
    export interface QueryProposalResponse {
        // proposal is the proposal info.
        proposal?: Proposal;
    }

    // QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type.
    export interface QueryProposalsByGroupPolicyRequest {
        // address is the account address of the group policy related to proposals.
        address?: string;
        // pagination defines an optional pagination for the request.
        pagination?: cosmos.base.query.v1beta1.PageRequest;
    }

    // QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type.
    export interface QueryProposalsByGroupPolicyResponse {
        // proposals are the proposals with given group policy.
        proposals?: Array<Proposal>;
        // pagination defines the pagination in the response.
        pagination?: cosmos.base.query.v1beta1.PageResponse;
    }

    // QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type.
    export interface QueryVoteByProposalVoterRequest {
        // proposal_id is the unique ID of a proposal.
        proposal_id?: number;
        // voter is a proposal voter account address.
        voter?: string;
    }

    // QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type.
    export interface QueryVoteByProposalVoterResponse {
        // vote is the vote with given proposal_id and voter.
        vote?: Vote;
    }

    // QueryVotesByProposalRequest is the Query/VotesByProposal request type.
    export interface QueryVotesByProposalRequest {
        // proposal_id is the unique ID of a proposal.
        proposal_id?: number;
        // pagination defines an optional pagination for the request.
        pagination?: cosmos.base.query.v1beta1.PageRequest;
    }

    // QueryVotesByProposalResponse is the Query/VotesByProposal response type.
    export interface QueryVotesByProposalResponse {
        // votes are the list of votes for given proposal_id.
        votes?: Array<Vote>;
        // pagination defines the pagination in the response.
        pagination?: cosmos.base.query.v1beta1.PageResponse;
    }

    // QueryVotesByVoterRequest is the Query/VotesByVoter request type.
    export interface QueryVotesByVoterRequest {
        // voter is a proposal voter account address.
        voter?: string;
        // pagination defines an optional pagination for the request.
        pagination?: cosmos.base.query.v1beta1.PageRequest;
    }

    // QueryVotesByVoterResponse is the Query/VotesByVoter response type.
    export interface QueryVotesByVoterResponse {
        // votes are the list of votes by given voter.
        votes?: Array<Vote>;
        // pagination defines the pagination in the response.
        pagination?: cosmos.base.query.v1beta1.PageResponse;
    }

    // QueryGroupsByMemberRequest is the Query/GroupsByMember request type.
    export interface QueryGroupsByMemberRequest {
        // address is the group member address.
        address?: string;
        // pagination defines an optional pagination for the request.
        pagination?: cosmos.base.query.v1beta1.PageRequest;
    }

    // QueryGroupsByMemberResponse is the Query/GroupsByMember response type.
    export interface QueryGroupsByMemberResponse {
        // groups are the groups info with the provided group member.
        groups?: Array<GroupInfo>;
        // pagination defines the pagination in the response.
        pagination?: cosmos.base.query.v1beta1.PageResponse;
    }

    // QueryTallyResultRequest is the Query/TallyResult request type.
    export interface QueryTallyResultRequest {
        // proposal_id is the unique id of a proposal.
        proposal_id?: number;
    }

    // QueryTallyResultResponse is the Query/TallyResult response type.
    export interface QueryTallyResultResponse {
        // tally defines the requested tally.
        tally?: TallyResult;
    }

    export interface QueryService {
        GroupInfo: (r:QueryGroupInfoRequest) => QueryGroupInfoResponse;
        GroupPolicyInfo: (r:QueryGroupPolicyInfoRequest) => QueryGroupPolicyInfoResponse;
        GroupMembers: (r:QueryGroupMembersRequest) => QueryGroupMembersResponse;
        GroupsByAdmin: (r:QueryGroupsByAdminRequest) => QueryGroupsByAdminResponse;
        GroupPoliciesByGroup: (r:QueryGroupPoliciesByGroupRequest) => QueryGroupPoliciesByGroupResponse;
        GroupPoliciesByAdmin: (r:QueryGroupPoliciesByAdminRequest) => QueryGroupPoliciesByAdminResponse;
        Proposal: (r:QueryProposalRequest) => QueryProposalResponse;
        ProposalsByGroupPolicy: (r:QueryProposalsByGroupPolicyRequest) => QueryProposalsByGroupPolicyResponse;
        VoteByProposalVoter: (r:QueryVoteByProposalVoterRequest) => QueryVoteByProposalVoterResponse;
        VotesByProposal: (r:QueryVotesByProposalRequest) => QueryVotesByProposalResponse;
        VotesByVoter: (r:QueryVotesByVoterRequest) => QueryVotesByVoterResponse;
        GroupsByMember: (r:QueryGroupsByMemberRequest) => QueryGroupsByMemberResponse;
        TallyResult: (r:QueryTallyResultRequest) => QueryTallyResultResponse;
    }
}

