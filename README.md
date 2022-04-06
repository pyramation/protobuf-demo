# protobuf demo

- [ts-proto](./packages/ts-proto)
- [ts-proto-ast-babel](./packages/ts-proto-ast-babel)
- [protobuf-ts](./packages/protobuf-ts)

WIP: 

- [protoc-gen-typescript](./packages/protoc-gen-typescript)



## snippets/structures from other code bases
### ts-proto w/registry option


```
      'osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse' => {
        '$type': 'osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse',
        encode: [Function: encode],
        decode: [Function: decode],
        fromJSON: [Function: fromJSON],
        toJSON: [Function: toJSON],
        fromPartial: [Function: fromPartial]
      },
      'osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn' => {
        '$type': 'osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn',
        encode: [Function: encode],
        decode: [Function: decode],
        fromJSON: [Function: fromJSON],
        toJSON: [Function: toJSON],
        fromPartial: [Function: fromPartial]
      },

```

### keplr-wallet

https://github.com/chainapsis/keplr-wallet/blob/master/packages/cosmos/src/stargate/codec/index.ts#L43-L63

```js
export const defaultProtoCodec = new ProtoCodec();
defaultProtoCodec.registerAny(
  "/cosmos.bank.v1beta1.MsgSend",
  cosmos.bank.v1beta1.MsgSend
);
defaultProtoCodec.registerAny(
  "/cosmos.staking.v1beta1.MsgDelegate",
  cosmos.staking.v1beta1.MsgDelegate
);
defaultProtoCodec.registerAny(
  "/cosmos.staking.v1beta1.MsgUndelegate",
  cosmos.staking.v1beta1.MsgUndelegate
);
defaultProtoCodec.registerAny(
  "/cosmos.staking.v1beta1.MsgBeginRedelegate",
  cosmos.staking.v1beta1.MsgBeginRedelegate
);
defaultProtoCodec.registerAny(
  "/cosmwasm.wasm.v1.MsgExecuteContract",
  cosmwasm.wasm.v1.MsgExecuteContract
);

```

### secret

I believe they're using the `ts-proto`'s `outputClientImpl=grpc-web`
#### protobufs

https://github.com/scrtlabs/secret.js/blob/master/src/tx/gov.ts#L110-L135

```ts
  async toProto(): Promise<ProtoMsg> {
    const { Any } = await import("../protobuf_stuff/google/protobuf/any");
    let content: import("../protobuf_stuff/google/protobuf/any").Any;

    switch (this.type) {
      case ProposalType.TextProposal:
        const { TextProposal } = await import(
          "../protobuf_stuff/cosmos/gov/v1beta1/gov"
        );
        content = Any.fromPartial({
          typeUrl: "/cosmos.gov.v1beta1.TextProposal",
          value: TextProposal.encode(
            TextProposal.fromPartial(this.content),
          ).finish(),
        });
        break;
 ```

#### aminos

https://github.com/scrtlabs/secret.js/blob/master/src/tx/gov.ts#L223-L244

 ```ts
  async toAmino(): Promise<AminoMsg> {
    const contentType = proposalTypeToAminoType.get(this.type);
    if (!contentType) {
      throw new Error(
        `Proposal of type "${String(
          this.type,
        )}" is not supported with an Amino signer.`,
      );
    }

    let content: any = this.content;
    if (this.type === ProposalType.SoftwareUpgradeProposal) {
      if (content.plan) {
        content = {
          ...content,
          plan: {
            type: "cosmos-sdk/Plan",
            value: { ...content.plan },
          },
        };
      }
    }
 ```


### cosmology

#### registry 

```js
  joinPool: {
    osmosis: osmosis.gamm.v1beta1.MsgJoinPool,
    amino: '/osmosis.gamm.v1beta1.MsgJoinPool',
    type: 'osmosis/gamm/join-pool',
    gas: 140000,
    shareCoinDecimals: 18
  },
  joinSwapExternAmountIn: {
    osmosis: osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn,
    amino: '/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn',
    type: 'osmosis/gamm/join-swap-extern-amount-in',
    gas: 140000,
    shareCoinDecimals: 18
  },
  exitPool: {
    osmosis: osmosis.gamm.v1beta1.MsgExitPool,
    amino: '/osmosis.gamm.v1beta1.MsgExitPool',
    type: 'osmosis/gamm/exit-pool',
    gas: 140000,
    shareCoinDecimals: 18
  },
```
#### amino messages

https://github.com/grpc/grpc-node/blob/master/packages/grpc-js/src/duration.ts#L23-L32

```js
swapExactAmountIn: {
    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }) => ({
      sender,
      routes: parseRoutes(routes),
      tokenIn: {
        denom: tokenIn.denom,
        amount: Long.fromNumber(tokenIn.amount).toString()
      },
      tokenOutMinAmount: Long.fromNumber(tokenOutMinAmount).toString()
    }),
    fromAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }) => ({
      sender,
      routes: parseRoutes(routes),
      tokenIn,
      tokenOutMinAmount
    })
  },
  lockTokens: {
    toAmino: ({ owner, duration, coins }) => {
      return {
        owner,
        coins,
        duration: (duration * 1_000_000_000).toString()
      };
    },
    fromAmino: ({ owner, duration, coins }) => {
      return {
        owner,
        coins,
        duration: {
          seconds: Long.fromNumber(
            Math.floor(parseInt(duration) / 1_000_000_000)
          ),
          nanos: parseInt(duration) % 1_000_000_000
        }
      };
    }
  },
 ```

#### message composition functions


```js
  withdrawDelegatorReward: ({
    delegatorAddress,
    validatorAddress
  }: {
    delegatorAddress: string,
    validatorAddress: string
  }) => {
    return {
      typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
      value: MsgWithdrawDelegatorReward.fromPartial({
        delegatorAddress,
        validatorAddress
      })
    };
  },

  delegate: ({
    delegatorAddress,
    validatorAddress,
    amount,
    denom
  }: {
    delegatorAddress: string,
    validatorAddress: string,
    amount: string,
    denom: string
  }) => {
    return {
      typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
      value: MsgDelegate.fromPartial({
        delegatorAddress,
        validatorAddress,
        amount: coin(amount, denom)
      })
    };
  },
```
