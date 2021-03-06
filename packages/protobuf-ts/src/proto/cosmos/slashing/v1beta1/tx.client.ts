// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "cosmos/slashing/v1beta1/tx.proto" (package "cosmos.slashing.v1beta1", syntax proto3),// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Msg } from "./tx";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MsgUnjailResponse } from "./tx";
import type { MsgUnjail } from "./tx";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Msg defines the slashing Msg service.
 *
 * @generated from protobuf service cosmos.slashing.v1beta1.Msg
 */
export interface IMsgClient {
    /**
     * Unjail defines a method for unjailing a jailed validator, thus returning
     * them into the bonded validator set, so they can begin receiving provisions
     * and rewards again.
     *
     * @generated from protobuf rpc: Unjail(cosmos.slashing.v1beta1.MsgUnjail) returns (cosmos.slashing.v1beta1.MsgUnjailResponse);
     */
    unjail(input: MsgUnjail, options?: RpcOptions): UnaryCall<MsgUnjail, MsgUnjailResponse>;
}
/**
 * Msg defines the slashing Msg service.
 *
 * @generated from protobuf service cosmos.slashing.v1beta1.Msg
 */
export class MsgClient implements IMsgClient, ServiceInfo {
    typeName = Msg.typeName;
    methods = Msg.methods;
    options = Msg.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Unjail defines a method for unjailing a jailed validator, thus returning
     * them into the bonded validator set, so they can begin receiving provisions
     * and rewards again.
     *
     * @generated from protobuf rpc: Unjail(cosmos.slashing.v1beta1.MsgUnjail) returns (cosmos.slashing.v1beta1.MsgUnjailResponse);
     */
    unjail(input: MsgUnjail, options?: RpcOptions): UnaryCall<MsgUnjail, MsgUnjailResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MsgUnjail, MsgUnjailResponse>("unary", this._transport, method, opt, input);
    }
}
