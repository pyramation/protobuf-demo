// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "cosmos/gov/v1beta1/tx.proto" (package "cosmos.gov.v1beta1", syntax proto3),// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Msg } from "./tx";
import type { MsgDepositResponse } from "./tx";
import type { MsgDeposit } from "./tx";
import type { MsgVoteWeightedResponse } from "./tx";
import type { MsgVoteWeighted } from "./tx";
import type { MsgVoteResponse } from "./tx";
import type { MsgVote } from "./tx";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MsgSubmitProposalResponse } from "./tx";
import type { MsgSubmitProposal } from "./tx";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Msg defines the bank Msg service.
 *
 * @generated from protobuf service cosmos.gov.v1beta1.Msg
 */
export interface IMsgClient {
    /**
     * SubmitProposal defines a method to create new proposal given a content.
     *
     * @generated from protobuf rpc: SubmitProposal(cosmos.gov.v1beta1.MsgSubmitProposal) returns (cosmos.gov.v1beta1.MsgSubmitProposalResponse);
     */
    submitProposal(input: MsgSubmitProposal, options?: RpcOptions): UnaryCall<MsgSubmitProposal, MsgSubmitProposalResponse>;
    /**
     * Vote defines a method to add a vote on a specific proposal.
     *
     * @generated from protobuf rpc: Vote(cosmos.gov.v1beta1.MsgVote) returns (cosmos.gov.v1beta1.MsgVoteResponse);
     */
    vote(input: MsgVote, options?: RpcOptions): UnaryCall<MsgVote, MsgVoteResponse>;
    /**
     * VoteWeighted defines a method to add a weighted vote on a specific proposal.
     *
     * Since: cosmos-sdk 0.43
     *
     * @generated from protobuf rpc: VoteWeighted(cosmos.gov.v1beta1.MsgVoteWeighted) returns (cosmos.gov.v1beta1.MsgVoteWeightedResponse);
     */
    voteWeighted(input: MsgVoteWeighted, options?: RpcOptions): UnaryCall<MsgVoteWeighted, MsgVoteWeightedResponse>;
    /**
     * Deposit defines a method to add deposit on a specific proposal.
     *
     * @generated from protobuf rpc: Deposit(cosmos.gov.v1beta1.MsgDeposit) returns (cosmos.gov.v1beta1.MsgDepositResponse);
     */
    deposit(input: MsgDeposit, options?: RpcOptions): UnaryCall<MsgDeposit, MsgDepositResponse>;
}
/**
 * Msg defines the bank Msg service.
 *
 * @generated from protobuf service cosmos.gov.v1beta1.Msg
 */
export class MsgClient implements IMsgClient, ServiceInfo {
    typeName = Msg.typeName;
    methods = Msg.methods;
    options = Msg.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * SubmitProposal defines a method to create new proposal given a content.
     *
     * @generated from protobuf rpc: SubmitProposal(cosmos.gov.v1beta1.MsgSubmitProposal) returns (cosmos.gov.v1beta1.MsgSubmitProposalResponse);
     */
    submitProposal(input: MsgSubmitProposal, options?: RpcOptions): UnaryCall<MsgSubmitProposal, MsgSubmitProposalResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MsgSubmitProposal, MsgSubmitProposalResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Vote defines a method to add a vote on a specific proposal.
     *
     * @generated from protobuf rpc: Vote(cosmos.gov.v1beta1.MsgVote) returns (cosmos.gov.v1beta1.MsgVoteResponse);
     */
    vote(input: MsgVote, options?: RpcOptions): UnaryCall<MsgVote, MsgVoteResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<MsgVote, MsgVoteResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * VoteWeighted defines a method to add a weighted vote on a specific proposal.
     *
     * Since: cosmos-sdk 0.43
     *
     * @generated from protobuf rpc: VoteWeighted(cosmos.gov.v1beta1.MsgVoteWeighted) returns (cosmos.gov.v1beta1.MsgVoteWeightedResponse);
     */
    voteWeighted(input: MsgVoteWeighted, options?: RpcOptions): UnaryCall<MsgVoteWeighted, MsgVoteWeightedResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<MsgVoteWeighted, MsgVoteWeightedResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Deposit defines a method to add deposit on a specific proposal.
     *
     * @generated from protobuf rpc: Deposit(cosmos.gov.v1beta1.MsgDeposit) returns (cosmos.gov.v1beta1.MsgDepositResponse);
     */
    deposit(input: MsgDeposit, options?: RpcOptions): UnaryCall<MsgDeposit, MsgDepositResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<MsgDeposit, MsgDepositResponse>("unary", this._transport, method, opt, input);
    }
}
