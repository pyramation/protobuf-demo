// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace cosmos.nft.v1beta1 {

    // GenesisState defines the nft module's genesis state.
    export interface GenesisState {
        // class defines the class of the nft type.
        classes?: Array<Class>;
        entries?: Array<Entry>;
    }

    // Entry Defines all nft owned by a person
    export interface Entry {
        // owner is the owner address of the following nft
        owner?: string;
        // nfts is a group of nfts of the same owner
        nfts?: Array<NFT>;
    }

}

