// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace nested {

    export enum Notification_Type {
        UNSPECIFIED = "UNSPECIFIED",
        TEXT = "TEXT",
        VIDEO = "VIDEO",
        AUDIO = "AUDIO",
    }
    export interface Notification {
        message_type?: Notification_Type;
        content?: string;
    }

    export enum Tweet_Type {
        UNSPECIFIED = "UNSPECIFIED",
        ORIGINAL = "ORIGINAL",
        RETWEET = "RETWEET",
    }
    export interface Tweet {
        tweet_type?: Tweet_Type;
        content?: string;
    }

    export interface A_B {
        id?: string;
    }

    export interface A {
        id?: string;
        b?: A_B;
    }

}

