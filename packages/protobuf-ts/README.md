# protobuf-ts

This demo uses `protobuf-ts`

https://github.com/timostamm/protobuf-ts/tree/master/packages

```
yarn proto:build
```


# notes

comes with query clients with methods

- [tx.client.ts](./src/proto/osmosis/gamm/v1beta1/tx.client.ts)

- [query.client.ts](./src/proto/osmosis/gamm/v1beta1/query.client.ts)

```ts
export interface IMsgClient {
    /**
     * @generated from protobuf rpc: JoinPool(osmosis.gamm.v1beta1.MsgJoinPool) returns (osmosis.gamm.v1beta1.MsgJoinPoolResponse);
     */
    joinPool(input: MsgJoinPool, options?: RpcOptions): UnaryCall<MsgJoinPool, MsgJoinPoolResponse>;
    /**
     * @generated from protobuf rpc: ExitPool(osmosis.gamm.v1beta1.MsgExitPool) returns (osmosis.gamm.v1beta1.MsgExitPoolResponse);
     */
    exitPool(input: MsgExitPool, options?: RpcOptions): UnaryCall<MsgExitPool, MsgExitPoolResponse>;
    /**
     * @generated from protobuf rpc: SwapExactAmountIn(osmosis.gamm.v1beta1.MsgSwapExactAmountIn) returns (osmosis.gamm.v1beta1.MsgSwapExactAmountInResponse);
     */
    swapExactAmountIn(input: MsgSwapExactAmountIn, options?: RpcOptions): UnaryCall<MsgSwapExactAmountIn, MsgSwapExactAmountInResponse>;
    /**
     * @generated from protobuf rpc: SwapExactAmountOut(osmosis.gamm.v1beta1.MsgSwapExactAmountOut) returns (osmosis.gamm.v1beta1.MsgSwapExactAmountOutResponse);
     */
    swapExactAmountOut(input: MsgSwapExactAmountOut, options?: RpcOptions): UnaryCall<MsgSwapExactAmountOut, MsgSwapExactAmountOutResponse>;
    /**
     * @generated from protobuf rpc: JoinSwapExternAmountIn(osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn) returns (osmosis.gamm.v1beta1.MsgJoinSwapExternAmountInResponse);
     */
    joinSwapExternAmountIn(input: MsgJoinSwapExternAmountIn, options?: RpcOptions): UnaryCall<MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInResponse>;
    /**
     * @generated from protobuf rpc: JoinSwapShareAmountOut(osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut) returns (osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse);
     */
    joinSwapShareAmountOut(input: MsgJoinSwapShareAmountOut, options?: RpcOptions): UnaryCall<MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutResponse>;
    /**
     * @generated from protobuf rpc: ExitSwapExternAmountOut(osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut) returns (osmosis.gamm.v1beta1.MsgExitSwapExternAmountOutResponse);
     */
    exitSwapExternAmountOut(input: MsgExitSwapExternAmountOut, options?: RpcOptions): UnaryCall<MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutResponse>;
    /**
     * @generated from protobuf rpc: ExitSwapShareAmountIn(osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn) returns (osmosis.gamm.v1beta1.MsgExitSwapShareAmountInResponse);
     */
    exitSwapShareAmountIn(input: MsgExitSwapShareAmountIn, options?: RpcOptions): UnaryCall<MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInResponse>;
}
```
