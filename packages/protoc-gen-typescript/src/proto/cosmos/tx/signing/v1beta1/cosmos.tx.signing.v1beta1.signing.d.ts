// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace cosmos.tx.signing.v1beta1 {

    export enum SignMode {
        SIGN_MODE_UNSPECIFIED = "SIGN_MODE_UNSPECIFIED",
        SIGN_MODE_DIRECT = "SIGN_MODE_DIRECT",
        SIGN_MODE_TEXTUAL = "SIGN_MODE_TEXTUAL",
        SIGN_MODE_DIRECT_AUX = "SIGN_MODE_DIRECT_AUX",
        SIGN_MODE_LEGACY_AMINO_JSON = "SIGN_MODE_LEGACY_AMINO_JSON",
    }
    // SignatureDescriptors wraps multiple SignatureDescriptor's.
    export interface SignatureDescriptors {
        // signatures are the signature descriptors
        signatures?: Array<SignatureDescriptor>;
    }

    // Single is the signature data for a single signer
    export interface SignatureDescriptor_Data_Single {
        // mode is the signing mode of the single signer
        mode?: SignMode;
        // signature is the raw signature bytes
        signature?: Uint8Array;
    }

    // Multi is the signature data for a multisig public key
    export interface SignatureDescriptor_Data_Multi {
        // bitarray specifies which keys within the multisig are signing
        bitarray?: cosmos.crypto.multisig.v1beta1.CompactBitArray;
        // signatures is the signatures of the multi-signature
        signatures?: Array<SignatureDescriptor_Data>;
    }

    // Data represents signature data
    export interface SignatureDescriptor_Data {
        // single represents a single signer
        single?: SignatureDescriptor_Data_Single;
        // multi represents a multisig signer
        multi?: SignatureDescriptor_Data_Multi;
    }

    // SignatureDescriptor is a convenience type which represents the full data for
    // a signature including the public key of the signer, signing modes and the
    // signature itself. It is primarily used for coordinating signatures between
    // clients.
    export interface SignatureDescriptor {
        // public_key is the public key of the signer
        public_key?: google.protobuf.Any;
        data?: SignatureDescriptor_Data;
        // sequence is the sequence of the account, which describes the
        // number of committed transactions signed by a given address. It is used to prevent
        // replay attacks.
        sequence?: number;
    }

}

