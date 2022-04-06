# protobuf demo

- [ts-proto](./packages/ts-proto)

[example](./packages/ts-proto/src/proto/osmosis/gamm/v1beta1/tx.ts)

- [ts-proto-ast-babel](./packages/ts-proto-ast-babel)

[example](./packages/ts-proto-ast-babel/src/proto/osmosis/gamm/v1beta1/tx.ts)
[namespaces](./packages/ts-proto-ast-babel/src/proto/osmosis/gamm/v1beta1/tx.ts#L1560-L1563)

- [protobuf-ts](./packages/protobuf-ts)

[example](./packages/protobuf-ts/src/proto/osmosis/gamm/v1beta1/tx.ts)
[client](./packages/protobuf-ts/src/proto/osmosis/gamm/v1beta1/tx.client.ts#L27-L60)

WIP: 

- [protoc-gen-typescript](./packages/protoc-gen-typescript)

# questions

- [ ] can some portion of to/from amino be automated?
https://github.com/grpc/grpc-node/blob/master/packages/grpc-js/src/duration.ts#L23-L32

- ideally through tranpilation step
  - [ ] one method for registry
  - [ ] generate message composition objects (typeUrl + packet)
    - [ ] type_url or typeurl

# snippets/structures from other code bases

## ts-proto w/registry option


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

## keplr-wallet

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

## secret

I believe they're using the `ts-proto`'s `outputClientImpl=grpc-web`
### protobufs

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

### aminos

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

## osmosis

registry

https://github.com/osmosis-labs/osmosis-frontend/blob/master/src/stores/osmosis/account/index.ts#L68-L87

```js
createPool: {
    type: 'osmosis/gamm/create-balancer-pool',
    gas: 350000,
},
joinPool: {
    type: 'osmosis/gamm/join-pool',
    gas: 240000,
    shareCoinDecimals: 18,
},
joinSwapExternAmountIn: {
    type: 'osmosis/gamm/join-swap-extern-amount-in',
    gas: 140000,
    shareCoinDecimals: 18,
},
```

aminos

https://github.com/osmosis-labs/osmosis-frontend/blob/master/src/stores/osmosis/account/index.ts#L834-L861


```js
{
    aminoMsgs: [msg],
    protoMsgs: [
        {
            type_url: '/osmosis.lockup.MsgLockTokens',
            value: osmosis.lockup.MsgLockTokens.encode({
                owner: msg.value.owner,
                duration: {
                    seconds: Long.fromNumber(Math.floor(parseInt(msg.value.duration) / 1_000_000_000)),
                    nanos: parseInt(msg.value.duration) % 1_000_000_000,
                },
                coins: msg.value.coins,
            }).finish(),
        },
    ],
}
```

## cosmology

### registry 

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
### amino messages

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

### message composition functions


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
