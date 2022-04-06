// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace cosmos.gov.v1 {

    // GenesisState defines the gov module's genesis state.
    export interface GenesisState {
        // starting_proposal_id is the ID of the starting proposal.
        starting_proposal_id?: number;
        // deposits defines all the deposits present at genesis.
        deposits?: Array<Deposit>;
        // votes defines all the votes present at genesis.
        votes?: Array<Vote>;
        // proposals defines all the proposals present at genesis.
        proposals?: Array<Proposal>;
        // params defines all the paramaters of related to deposit.
        deposit_params?: DepositParams;
        // params defines all the paramaters of related to voting.
        voting_params?: VotingParams;
        // params defines all the paramaters of related to tally.
        tally_params?: TallyParams;
    }

}
