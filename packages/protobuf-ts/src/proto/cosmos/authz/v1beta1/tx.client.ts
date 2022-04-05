// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "cosmos/authz/v1beta1/tx.proto" (package "cosmos.authz.v1beta1", syntax proto3),// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Msg } from "./tx";
import type { MsgRevokeResponse } from "./tx";
import type { MsgRevoke } from "./tx";
import type { MsgExecResponse } from "./tx";
import type { MsgExec } from "./tx";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MsgGrantResponse } from "./tx";
import type { MsgGrant } from "./tx";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Msg defines the authz Msg service.
 *
 * @generated from protobuf service cosmos.authz.v1beta1.Msg
 */
export interface IMsgClient {
    /**
     * Grant grants the provided authorization to the grantee on the granter's
     * account with the provided expiration time. If there is already a grant
     * for the given (granter, grantee, Authorization) triple, then the grant
     * will be overwritten.
     *
     * @generated from protobuf rpc: Grant(cosmos.authz.v1beta1.MsgGrant) returns (cosmos.authz.v1beta1.MsgGrantResponse);
     */
    grant(input: MsgGrant, options?: RpcOptions): UnaryCall<MsgGrant, MsgGrantResponse>;
    /**
     * Exec attempts to execute the provided messages using
     * authorizations granted to the grantee. Each message should have only
     * one signer corresponding to the granter of the authorization.
     *
     * @generated from protobuf rpc: Exec(cosmos.authz.v1beta1.MsgExec) returns (cosmos.authz.v1beta1.MsgExecResponse);
     */
    exec(input: MsgExec, options?: RpcOptions): UnaryCall<MsgExec, MsgExecResponse>;
    /**
     * Revoke revokes any authorization corresponding to the provided method name on the
     * granter's account that has been granted to the grantee.
     *
     * @generated from protobuf rpc: Revoke(cosmos.authz.v1beta1.MsgRevoke) returns (cosmos.authz.v1beta1.MsgRevokeResponse);
     */
    revoke(input: MsgRevoke, options?: RpcOptions): UnaryCall<MsgRevoke, MsgRevokeResponse>;
}
/**
 * Msg defines the authz Msg service.
 *
 * @generated from protobuf service cosmos.authz.v1beta1.Msg
 */
export class MsgClient implements IMsgClient, ServiceInfo {
    typeName = Msg.typeName;
    methods = Msg.methods;
    options = Msg.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Grant grants the provided authorization to the grantee on the granter's
     * account with the provided expiration time. If there is already a grant
     * for the given (granter, grantee, Authorization) triple, then the grant
     * will be overwritten.
     *
     * @generated from protobuf rpc: Grant(cosmos.authz.v1beta1.MsgGrant) returns (cosmos.authz.v1beta1.MsgGrantResponse);
     */
    grant(input: MsgGrant, options?: RpcOptions): UnaryCall<MsgGrant, MsgGrantResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MsgGrant, MsgGrantResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Exec attempts to execute the provided messages using
     * authorizations granted to the grantee. Each message should have only
     * one signer corresponding to the granter of the authorization.
     *
     * @generated from protobuf rpc: Exec(cosmos.authz.v1beta1.MsgExec) returns (cosmos.authz.v1beta1.MsgExecResponse);
     */
    exec(input: MsgExec, options?: RpcOptions): UnaryCall<MsgExec, MsgExecResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<MsgExec, MsgExecResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Revoke revokes any authorization corresponding to the provided method name on the
     * granter's account that has been granted to the grantee.
     *
     * @generated from protobuf rpc: Revoke(cosmos.authz.v1beta1.MsgRevoke) returns (cosmos.authz.v1beta1.MsgRevokeResponse);
     */
    revoke(input: MsgRevoke, options?: RpcOptions): UnaryCall<MsgRevoke, MsgRevokeResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<MsgRevoke, MsgRevokeResponse>("unary", this._transport, method, opt, input);
    }
}