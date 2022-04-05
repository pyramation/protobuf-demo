// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "google/api/logging.proto" (package "google.api", syntax proto3),// tslint:disable
//
// Copyright 2015 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * Logging configuration of the service.
 *
 * The following example shows how to configure logs to be sent to the
 * producer and consumer projects. In the example, the `activity_history`
 * log is sent to both the producer and consumer projects, whereas the
 * `purchase_history` log is only sent to the producer project.
 *
 *     monitored_resources:
 *     - type: library.googleapis.com/branch
 *       labels:
 *       - key: /city
 *         description: The city where the library branch is located in.
 *       - key: /name
 *         description: The name of the branch.
 *     logs:
 *     - name: activity_history
 *       labels:
 *       - key: /customer_id
 *     - name: purchase_history
 *     logging:
 *       producer_destinations:
 *       - monitored_resource: library.googleapis.com/branch
 *         logs:
 *         - activity_history
 *         - purchase_history
 *       consumer_destinations:
 *       - monitored_resource: library.googleapis.com/branch
 *         logs:
 *         - activity_history
 *
 * @generated from protobuf message google.api.Logging
 */
export interface Logging {
    /**
     * Logging configurations for sending logs to the producer project.
     * There can be multiple producer destinations, each one must have a
     * different monitored resource type. A log can be used in at most
     * one producer destination.
     *
     * @generated from protobuf field: repeated google.api.Logging.LoggingDestination producer_destinations = 1;
     */
    producerDestinations: Logging_LoggingDestination[];
    /**
     * Logging configurations for sending logs to the consumer project.
     * There can be multiple consumer destinations, each one must have a
     * different monitored resource type. A log can be used in at most
     * one consumer destination.
     *
     * @generated from protobuf field: repeated google.api.Logging.LoggingDestination consumer_destinations = 2;
     */
    consumerDestinations: Logging_LoggingDestination[];
}
/**
 * Configuration of a specific logging destination (the producer project
 * or the consumer project).
 *
 * @generated from protobuf message google.api.Logging.LoggingDestination
 */
export interface Logging_LoggingDestination {
    /**
     * The monitored resource type. The type must be defined in the
     * [Service.monitored_resources][google.api.Service.monitored_resources] section.
     *
     * @generated from protobuf field: string monitored_resource = 3;
     */
    monitoredResource: string;
    /**
     * Names of the logs to be sent to this destination. Each name must
     * be defined in the [Service.logs][google.api.Service.logs] section. If the log name is
     * not a domain scoped name, it will be automatically prefixed with
     * the service name followed by "/".
     *
     * @generated from protobuf field: repeated string logs = 1;
     */
    logs: string[];
}
// @generated message type with reflection information, may provide speed optimized methods
class Logging$Type extends MessageType<Logging> {
    constructor() {
        super("google.api.Logging", [
            { no: 1, name: "producer_destinations", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Logging_LoggingDestination },
            { no: 2, name: "consumer_destinations", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Logging_LoggingDestination }
        ]);
    }
    create(value?: PartialMessage<Logging>): Logging {
        const message = { producerDestinations: [], consumerDestinations: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Logging>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Logging): Logging {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated google.api.Logging.LoggingDestination producer_destinations */ 1:
                    message.producerDestinations.push(Logging_LoggingDestination.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated google.api.Logging.LoggingDestination consumer_destinations */ 2:
                    message.consumerDestinations.push(Logging_LoggingDestination.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Logging, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated google.api.Logging.LoggingDestination producer_destinations = 1; */
        for (let i = 0; i < message.producerDestinations.length; i++)
            Logging_LoggingDestination.internalBinaryWrite(message.producerDestinations[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated google.api.Logging.LoggingDestination consumer_destinations = 2; */
        for (let i = 0; i < message.consumerDestinations.length; i++)
            Logging_LoggingDestination.internalBinaryWrite(message.consumerDestinations[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.Logging
 */
export const Logging = new Logging$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Logging_LoggingDestination$Type extends MessageType<Logging_LoggingDestination> {
    constructor() {
        super("google.api.Logging.LoggingDestination", [
            { no: 3, name: "monitored_resource", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1, name: "logs", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Logging_LoggingDestination>): Logging_LoggingDestination {
        const message = { monitoredResource: "", logs: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Logging_LoggingDestination>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Logging_LoggingDestination): Logging_LoggingDestination {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string monitored_resource */ 3:
                    message.monitoredResource = reader.string();
                    break;
                case /* repeated string logs */ 1:
                    message.logs.push(reader.string());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Logging_LoggingDestination, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string monitored_resource = 3; */
        if (message.monitoredResource !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.monitoredResource);
        /* repeated string logs = 1; */
        for (let i = 0; i < message.logs.length; i++)
            writer.tag(1, WireType.LengthDelimited).string(message.logs[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.Logging.LoggingDestination
 */
export const Logging_LoggingDestination = new Logging_LoggingDestination$Type();
