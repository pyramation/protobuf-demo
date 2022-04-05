// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "cosmos/upgrade/v1beta1/tx.proto" (package "cosmos.upgrade.v1beta1", syntax proto3),// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Msg } from "./tx";
import type { MsgCancelUpgradeResponse } from "./tx";
import type { MsgCancelUpgrade } from "./tx";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MsgSoftwareUpgradeResponse } from "./tx";
import type { MsgSoftwareUpgrade } from "./tx";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Msg defines the upgrade Msg service.
 *
 * @generated from protobuf service cosmos.upgrade.v1beta1.Msg
 */
export interface IMsgClient {
    /**
     * SoftwareUpgrade is a governance operation for initiating a software upgrade.
     *
     * Since: cosmos-sdk 0.46
     *
     * @generated from protobuf rpc: SoftwareUpgrade(cosmos.upgrade.v1beta1.MsgSoftwareUpgrade) returns (cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse);
     */
    softwareUpgrade(input: MsgSoftwareUpgrade, options?: RpcOptions): UnaryCall<MsgSoftwareUpgrade, MsgSoftwareUpgradeResponse>;
    /**
     * CancelUpgrade is a governance operation for cancelling a previously
     * approvid software upgrade.
     *
     * Since: cosmos-sdk 0.46
     *
     * @generated from protobuf rpc: CancelUpgrade(cosmos.upgrade.v1beta1.MsgCancelUpgrade) returns (cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse);
     */
    cancelUpgrade(input: MsgCancelUpgrade, options?: RpcOptions): UnaryCall<MsgCancelUpgrade, MsgCancelUpgradeResponse>;
}
/**
 * Msg defines the upgrade Msg service.
 *
 * @generated from protobuf service cosmos.upgrade.v1beta1.Msg
 */
export class MsgClient implements IMsgClient, ServiceInfo {
    typeName = Msg.typeName;
    methods = Msg.methods;
    options = Msg.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * SoftwareUpgrade is a governance operation for initiating a software upgrade.
     *
     * Since: cosmos-sdk 0.46
     *
     * @generated from protobuf rpc: SoftwareUpgrade(cosmos.upgrade.v1beta1.MsgSoftwareUpgrade) returns (cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse);
     */
    softwareUpgrade(input: MsgSoftwareUpgrade, options?: RpcOptions): UnaryCall<MsgSoftwareUpgrade, MsgSoftwareUpgradeResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MsgSoftwareUpgrade, MsgSoftwareUpgradeResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * CancelUpgrade is a governance operation for cancelling a previously
     * approvid software upgrade.
     *
     * Since: cosmos-sdk 0.46
     *
     * @generated from protobuf rpc: CancelUpgrade(cosmos.upgrade.v1beta1.MsgCancelUpgrade) returns (cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse);
     */
    cancelUpgrade(input: MsgCancelUpgrade, options?: RpcOptions): UnaryCall<MsgCancelUpgrade, MsgCancelUpgradeResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<MsgCancelUpgrade, MsgCancelUpgradeResponse>("unary", this._transport, method, opt, input);
    }
}
