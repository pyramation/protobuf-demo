// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "cosmos/bank/v1beta1/tx.proto" (package "cosmos.bank.v1beta1", syntax proto3),// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Msg } from "./tx";
import type { MsgMultiSendResponse } from "./tx";
import type { MsgMultiSend } from "./tx";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MsgSendResponse } from "./tx";
import type { MsgSend } from "./tx";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Msg defines the bank Msg service.
 *
 * @generated from protobuf service cosmos.bank.v1beta1.Msg
 */
export interface IMsgClient {
    /**
     * Send defines a method for sending coins from one account to another account.
     *
     * @generated from protobuf rpc: Send(cosmos.bank.v1beta1.MsgSend) returns (cosmos.bank.v1beta1.MsgSendResponse);
     */
    send(input: MsgSend, options?: RpcOptions): UnaryCall<MsgSend, MsgSendResponse>;
    /**
     * MultiSend defines a method for sending coins from some accounts to other accounts.
     *
     * @generated from protobuf rpc: MultiSend(cosmos.bank.v1beta1.MsgMultiSend) returns (cosmos.bank.v1beta1.MsgMultiSendResponse);
     */
    multiSend(input: MsgMultiSend, options?: RpcOptions): UnaryCall<MsgMultiSend, MsgMultiSendResponse>;
}
/**
 * Msg defines the bank Msg service.
 *
 * @generated from protobuf service cosmos.bank.v1beta1.Msg
 */
export class MsgClient implements IMsgClient, ServiceInfo {
    typeName = Msg.typeName;
    methods = Msg.methods;
    options = Msg.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Send defines a method for sending coins from one account to another account.
     *
     * @generated from protobuf rpc: Send(cosmos.bank.v1beta1.MsgSend) returns (cosmos.bank.v1beta1.MsgSendResponse);
     */
    send(input: MsgSend, options?: RpcOptions): UnaryCall<MsgSend, MsgSendResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MsgSend, MsgSendResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * MultiSend defines a method for sending coins from some accounts to other accounts.
     *
     * @generated from protobuf rpc: MultiSend(cosmos.bank.v1beta1.MsgMultiSend) returns (cosmos.bank.v1beta1.MsgMultiSendResponse);
     */
    multiSend(input: MsgMultiSend, options?: RpcOptions): UnaryCall<MsgMultiSend, MsgMultiSendResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<MsgMultiSend, MsgMultiSendResponse>("unary", this._transport, method, opt, input);
    }
}