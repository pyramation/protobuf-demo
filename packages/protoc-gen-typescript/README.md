# protoc-gen-typescript

https://pkg.go.dev/github.com/ocavue/protoc-gen-typescript

- seems to be broken — [not fully processing the protofiles](./src/proto/osmosis/gamm/pool-models/balancer/osmosis.gamm.v1beta1.balancerPool.d.ts)
- requires a lot of `go` pkg mgmt
- doesn't use imports
- only type files

## installation

```
export GOPATH=`pwd`/go
```

This module looks like the newest one:

https://github.com/tmc/grpcutil/tree/master/protoc-gen-tstypes

https://github.com/tmc/grpcutil

```
go get github.com/tmc/grpcutil/protoc-gen-tstypes
```


This was the original repo that was found:

```
go get github.com/ocavue/protoc-gen-typescript/protoc-gen-typescript
```