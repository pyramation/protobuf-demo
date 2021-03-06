// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "cosmos/crisis/v1beta1/tx.proto" (package "cosmos.crisis.v1beta1", syntax proto3),// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Msg } from "./tx";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MsgVerifyInvariantResponse } from "./tx";
import type { MsgVerifyInvariant } from "./tx";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Msg defines the bank Msg service.
 *
 * @generated from protobuf service cosmos.crisis.v1beta1.Msg
 */
export interface IMsgClient {
    /**
     * VerifyInvariant defines a method to verify a particular invariance.
     *
     * @generated from protobuf rpc: VerifyInvariant(cosmos.crisis.v1beta1.MsgVerifyInvariant) returns (cosmos.crisis.v1beta1.MsgVerifyInvariantResponse);
     */
    verifyInvariant(input: MsgVerifyInvariant, options?: RpcOptions): UnaryCall<MsgVerifyInvariant, MsgVerifyInvariantResponse>;
}
/**
 * Msg defines the bank Msg service.
 *
 * @generated from protobuf service cosmos.crisis.v1beta1.Msg
 */
export class MsgClient implements IMsgClient, ServiceInfo {
    typeName = Msg.typeName;
    methods = Msg.methods;
    options = Msg.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * VerifyInvariant defines a method to verify a particular invariance.
     *
     * @generated from protobuf rpc: VerifyInvariant(cosmos.crisis.v1beta1.MsgVerifyInvariant) returns (cosmos.crisis.v1beta1.MsgVerifyInvariantResponse);
     */
    verifyInvariant(input: MsgVerifyInvariant, options?: RpcOptions): UnaryCall<MsgVerifyInvariant, MsgVerifyInvariantResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MsgVerifyInvariant, MsgVerifyInvariantResponse>("unary", this._transport, method, opt, input);
    }
}
