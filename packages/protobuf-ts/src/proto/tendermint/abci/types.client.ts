// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "tendermint/abci/types.proto" (package "tendermint.abci", syntax proto3),// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { ABCIApplication } from "./types";
import type { ResponseApplySnapshotChunk } from "./types";
import type { RequestApplySnapshotChunk } from "./types";
import type { ResponseLoadSnapshotChunk } from "./types";
import type { RequestLoadSnapshotChunk } from "./types";
import type { ResponseOfferSnapshot } from "./types";
import type { RequestOfferSnapshot } from "./types";
import type { ResponseListSnapshots } from "./types";
import type { RequestListSnapshots } from "./types";
import type { ResponseEndBlock } from "./types";
import type { RequestEndBlock } from "./types";
import type { ResponseBeginBlock } from "./types";
import type { RequestBeginBlock } from "./types";
import type { ResponseInitChain } from "./types";
import type { RequestInitChain } from "./types";
import type { ResponseCommit } from "./types";
import type { RequestCommit } from "./types";
import type { ResponseQuery } from "./types";
import type { RequestQuery } from "./types";
import type { ResponseCheckTx } from "./types";
import type { RequestCheckTx } from "./types";
import type { ResponseDeliverTx } from "./types";
import type { RequestDeliverTx } from "./types";
import type { ResponseSetOption } from "./types";
import type { RequestSetOption } from "./types";
import type { ResponseInfo } from "./types";
import type { RequestInfo } from "./types";
import type { ResponseFlush } from "./types";
import type { RequestFlush } from "./types";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { ResponseEcho } from "./types";
import type { RequestEcho } from "./types";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
// ----------------------------------------
// Service Definition

/**
 * @generated from protobuf service tendermint.abci.ABCIApplication
 */
export interface IABCIApplicationClient {
    /**
     * @generated from protobuf rpc: Echo(tendermint.abci.RequestEcho) returns (tendermint.abci.ResponseEcho);
     */
    echo(input: RequestEcho, options?: RpcOptions): UnaryCall<RequestEcho, ResponseEcho>;
    /**
     * @generated from protobuf rpc: Flush(tendermint.abci.RequestFlush) returns (tendermint.abci.ResponseFlush);
     */
    flush(input: RequestFlush, options?: RpcOptions): UnaryCall<RequestFlush, ResponseFlush>;
    /**
     * @generated from protobuf rpc: Info(tendermint.abci.RequestInfo) returns (tendermint.abci.ResponseInfo);
     */
    info(input: RequestInfo, options?: RpcOptions): UnaryCall<RequestInfo, ResponseInfo>;
    /**
     * @generated from protobuf rpc: SetOption(tendermint.abci.RequestSetOption) returns (tendermint.abci.ResponseSetOption);
     */
    setOption(input: RequestSetOption, options?: RpcOptions): UnaryCall<RequestSetOption, ResponseSetOption>;
    /**
     * @generated from protobuf rpc: DeliverTx(tendermint.abci.RequestDeliverTx) returns (tendermint.abci.ResponseDeliverTx);
     */
    deliverTx(input: RequestDeliverTx, options?: RpcOptions): UnaryCall<RequestDeliverTx, ResponseDeliverTx>;
    /**
     * @generated from protobuf rpc: CheckTx(tendermint.abci.RequestCheckTx) returns (tendermint.abci.ResponseCheckTx);
     */
    checkTx(input: RequestCheckTx, options?: RpcOptions): UnaryCall<RequestCheckTx, ResponseCheckTx>;
    /**
     * @generated from protobuf rpc: Query(tendermint.abci.RequestQuery) returns (tendermint.abci.ResponseQuery);
     */
    query(input: RequestQuery, options?: RpcOptions): UnaryCall<RequestQuery, ResponseQuery>;
    /**
     * @generated from protobuf rpc: Commit(tendermint.abci.RequestCommit) returns (tendermint.abci.ResponseCommit);
     */
    commit(input: RequestCommit, options?: RpcOptions): UnaryCall<RequestCommit, ResponseCommit>;
    /**
     * @generated from protobuf rpc: InitChain(tendermint.abci.RequestInitChain) returns (tendermint.abci.ResponseInitChain);
     */
    initChain(input: RequestInitChain, options?: RpcOptions): UnaryCall<RequestInitChain, ResponseInitChain>;
    /**
     * @generated from protobuf rpc: BeginBlock(tendermint.abci.RequestBeginBlock) returns (tendermint.abci.ResponseBeginBlock);
     */
    beginBlock(input: RequestBeginBlock, options?: RpcOptions): UnaryCall<RequestBeginBlock, ResponseBeginBlock>;
    /**
     * @generated from protobuf rpc: EndBlock(tendermint.abci.RequestEndBlock) returns (tendermint.abci.ResponseEndBlock);
     */
    endBlock(input: RequestEndBlock, options?: RpcOptions): UnaryCall<RequestEndBlock, ResponseEndBlock>;
    /**
     * @generated from protobuf rpc: ListSnapshots(tendermint.abci.RequestListSnapshots) returns (tendermint.abci.ResponseListSnapshots);
     */
    listSnapshots(input: RequestListSnapshots, options?: RpcOptions): UnaryCall<RequestListSnapshots, ResponseListSnapshots>;
    /**
     * @generated from protobuf rpc: OfferSnapshot(tendermint.abci.RequestOfferSnapshot) returns (tendermint.abci.ResponseOfferSnapshot);
     */
    offerSnapshot(input: RequestOfferSnapshot, options?: RpcOptions): UnaryCall<RequestOfferSnapshot, ResponseOfferSnapshot>;
    /**
     * @generated from protobuf rpc: LoadSnapshotChunk(tendermint.abci.RequestLoadSnapshotChunk) returns (tendermint.abci.ResponseLoadSnapshotChunk);
     */
    loadSnapshotChunk(input: RequestLoadSnapshotChunk, options?: RpcOptions): UnaryCall<RequestLoadSnapshotChunk, ResponseLoadSnapshotChunk>;
    /**
     * @generated from protobuf rpc: ApplySnapshotChunk(tendermint.abci.RequestApplySnapshotChunk) returns (tendermint.abci.ResponseApplySnapshotChunk);
     */
    applySnapshotChunk(input: RequestApplySnapshotChunk, options?: RpcOptions): UnaryCall<RequestApplySnapshotChunk, ResponseApplySnapshotChunk>;
}
// ----------------------------------------
// Service Definition

/**
 * @generated from protobuf service tendermint.abci.ABCIApplication
 */
export class ABCIApplicationClient implements IABCIApplicationClient, ServiceInfo {
    typeName = ABCIApplication.typeName;
    methods = ABCIApplication.methods;
    options = ABCIApplication.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: Echo(tendermint.abci.RequestEcho) returns (tendermint.abci.ResponseEcho);
     */
    echo(input: RequestEcho, options?: RpcOptions): UnaryCall<RequestEcho, ResponseEcho> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<RequestEcho, ResponseEcho>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Flush(tendermint.abci.RequestFlush) returns (tendermint.abci.ResponseFlush);
     */
    flush(input: RequestFlush, options?: RpcOptions): UnaryCall<RequestFlush, ResponseFlush> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<RequestFlush, ResponseFlush>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Info(tendermint.abci.RequestInfo) returns (tendermint.abci.ResponseInfo);
     */
    info(input: RequestInfo, options?: RpcOptions): UnaryCall<RequestInfo, ResponseInfo> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<RequestInfo, ResponseInfo>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: SetOption(tendermint.abci.RequestSetOption) returns (tendermint.abci.ResponseSetOption);
     */
    setOption(input: RequestSetOption, options?: RpcOptions): UnaryCall<RequestSetOption, ResponseSetOption> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<RequestSetOption, ResponseSetOption>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DeliverTx(tendermint.abci.RequestDeliverTx) returns (tendermint.abci.ResponseDeliverTx);
     */
    deliverTx(input: RequestDeliverTx, options?: RpcOptions): UnaryCall<RequestDeliverTx, ResponseDeliverTx> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<RequestDeliverTx, ResponseDeliverTx>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: CheckTx(tendermint.abci.RequestCheckTx) returns (tendermint.abci.ResponseCheckTx);
     */
    checkTx(input: RequestCheckTx, options?: RpcOptions): UnaryCall<RequestCheckTx, ResponseCheckTx> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<RequestCheckTx, ResponseCheckTx>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Query(tendermint.abci.RequestQuery) returns (tendermint.abci.ResponseQuery);
     */
    query(input: RequestQuery, options?: RpcOptions): UnaryCall<RequestQuery, ResponseQuery> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<RequestQuery, ResponseQuery>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Commit(tendermint.abci.RequestCommit) returns (tendermint.abci.ResponseCommit);
     */
    commit(input: RequestCommit, options?: RpcOptions): UnaryCall<RequestCommit, ResponseCommit> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<RequestCommit, ResponseCommit>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: InitChain(tendermint.abci.RequestInitChain) returns (tendermint.abci.ResponseInitChain);
     */
    initChain(input: RequestInitChain, options?: RpcOptions): UnaryCall<RequestInitChain, ResponseInitChain> {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept<RequestInitChain, ResponseInitChain>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: BeginBlock(tendermint.abci.RequestBeginBlock) returns (tendermint.abci.ResponseBeginBlock);
     */
    beginBlock(input: RequestBeginBlock, options?: RpcOptions): UnaryCall<RequestBeginBlock, ResponseBeginBlock> {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept<RequestBeginBlock, ResponseBeginBlock>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: EndBlock(tendermint.abci.RequestEndBlock) returns (tendermint.abci.ResponseEndBlock);
     */
    endBlock(input: RequestEndBlock, options?: RpcOptions): UnaryCall<RequestEndBlock, ResponseEndBlock> {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return stackIntercept<RequestEndBlock, ResponseEndBlock>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ListSnapshots(tendermint.abci.RequestListSnapshots) returns (tendermint.abci.ResponseListSnapshots);
     */
    listSnapshots(input: RequestListSnapshots, options?: RpcOptions): UnaryCall<RequestListSnapshots, ResponseListSnapshots> {
        const method = this.methods[11], opt = this._transport.mergeOptions(options);
        return stackIntercept<RequestListSnapshots, ResponseListSnapshots>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: OfferSnapshot(tendermint.abci.RequestOfferSnapshot) returns (tendermint.abci.ResponseOfferSnapshot);
     */
    offerSnapshot(input: RequestOfferSnapshot, options?: RpcOptions): UnaryCall<RequestOfferSnapshot, ResponseOfferSnapshot> {
        const method = this.methods[12], opt = this._transport.mergeOptions(options);
        return stackIntercept<RequestOfferSnapshot, ResponseOfferSnapshot>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: LoadSnapshotChunk(tendermint.abci.RequestLoadSnapshotChunk) returns (tendermint.abci.ResponseLoadSnapshotChunk);
     */
    loadSnapshotChunk(input: RequestLoadSnapshotChunk, options?: RpcOptions): UnaryCall<RequestLoadSnapshotChunk, ResponseLoadSnapshotChunk> {
        const method = this.methods[13], opt = this._transport.mergeOptions(options);
        return stackIntercept<RequestLoadSnapshotChunk, ResponseLoadSnapshotChunk>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ApplySnapshotChunk(tendermint.abci.RequestApplySnapshotChunk) returns (tendermint.abci.ResponseApplySnapshotChunk);
     */
    applySnapshotChunk(input: RequestApplySnapshotChunk, options?: RpcOptions): UnaryCall<RequestApplySnapshotChunk, ResponseApplySnapshotChunk> {
        const method = this.methods[14], opt = this._transport.mergeOptions(options);
        return stackIntercept<RequestApplySnapshotChunk, ResponseApplySnapshotChunk>("unary", this._transport, method, opt, input);
    }
}
