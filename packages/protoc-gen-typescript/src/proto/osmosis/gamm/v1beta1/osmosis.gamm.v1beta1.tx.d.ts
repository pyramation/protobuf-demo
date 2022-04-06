// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace osmosis.gamm.v1beta1 {

    // ===================== MsgJoinPool
    // This is really MsgJoinPoolNoSwap
    export interface MsgJoinPool {
        sender?: string;
        poolId?: number;
        shareOutAmount?: string;
        tokenInMaxs?: Array<cosmos.base.v1beta1.Coin>;
    }

    export interface MsgJoinPoolResponse {
    }

    // ===================== MsgExitPool
    export interface MsgExitPool {
        sender?: string;
        poolId?: number;
        shareInAmount?: string;
        tokenOutMins?: Array<cosmos.base.v1beta1.Coin>;
    }

    export interface MsgExitPoolResponse {
    }

    // ===================== MsgSwapExactAmountIn
    export interface SwapAmountInRoute {
        poolId?: number;
        tokenOutDenom?: string;
    }

    export interface MsgSwapExactAmountIn {
        sender?: string;
        routes?: Array<SwapAmountInRoute>;
        tokenIn?: cosmos.base.v1beta1.Coin;
        tokenOutMinAmount?: string;
    }

    export interface MsgSwapExactAmountInResponse {
        tokenOutAmount?: string;
    }

    // ===================== MsgSwapExactAmountOut
    export interface SwapAmountOutRoute {
        poolId?: number;
        tokenInDenom?: string;
    }

    export interface MsgSwapExactAmountOut {
        sender?: string;
        routes?: Array<SwapAmountOutRoute>;
        tokenInMaxAmount?: string;
        tokenOut?: cosmos.base.v1beta1.Coin;
    }

    export interface MsgSwapExactAmountOutResponse {
        tokenInAmount?: string;
    }

    // ===================== MsgJoinSwapExternAmountIn
    // TODO: Rename to MsgJoinSwapExactAmountIn
    export interface MsgJoinSwapExternAmountIn {
        sender?: string;
        poolId?: number;
        tokenIn?: cosmos.base.v1beta1.Coin;
        // reserved 3;
        // reserved "token_in";
        shareOutMinAmount?: string; // repeated cosmos.base.v1beta1.Coin tokensIn = 5 [
   (gogoproto.moretags) = "yaml:\"tokens_in\"",
   (gogoproto.nullable) = false
 ];
    }

    export interface MsgJoinSwapExternAmountInResponse {
        shareOutAmount?: string;
    }

    // ===================== MsgJoinSwapShareAmountOut
    export interface MsgJoinSwapShareAmountOut {
        sender?: string;
        poolId?: number;
        tokenInDenom?: string;
        shareOutAmount?: string;
        tokenInMaxAmount?: string;
    }

    export interface MsgJoinSwapShareAmountOutResponse {
        tokenInAmount?: string;
    }

    // ===================== MsgExitSwapShareAmountIn
    export interface MsgExitSwapShareAmountIn {
        sender?: string;
        poolId?: number;
        tokenOutDenom?: string;
        shareInAmount?: string;
        tokenOutMinAmount?: string;
    }

    export interface MsgExitSwapShareAmountInResponse {
        tokenOutAmount?: string;
    }

    // ===================== MsgExitSwapExternAmountOut
    export interface MsgExitSwapExternAmountOut {
        sender?: string;
        poolId?: number;
        tokenOut?: cosmos.base.v1beta1.Coin;
        shareInMaxAmount?: string;
    }

    export interface MsgExitSwapExternAmountOutResponse {
        shareInAmount?: string;
    }

    export interface MsgService {
        JoinPool: (r:MsgJoinPool) => MsgJoinPoolResponse;
        ExitPool: (r:MsgExitPool) => MsgExitPoolResponse;
        SwapExactAmountIn: (r:MsgSwapExactAmountIn) => MsgSwapExactAmountInResponse;
        SwapExactAmountOut: (r:MsgSwapExactAmountOut) => MsgSwapExactAmountOutResponse;
        JoinSwapExternAmountIn: (r:MsgJoinSwapExternAmountIn) => MsgJoinSwapExternAmountInResponse;
        JoinSwapShareAmountOut: (r:MsgJoinSwapShareAmountOut) => MsgJoinSwapShareAmountOutResponse;
        ExitSwapExternAmountOut: (r:MsgExitSwapExternAmountOut) => MsgExitSwapExternAmountOutResponse;
        ExitSwapShareAmountIn: (r:MsgExitSwapShareAmountIn) => MsgExitSwapShareAmountInResponse;
    }
}

