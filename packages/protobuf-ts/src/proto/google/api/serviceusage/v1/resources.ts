// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "google/api/serviceusage/v1/resources.proto" (package "google.api.serviceusage.v1", syntax proto3),// tslint:disable
//
// Copyright 2021 Google LLC
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
import { Monitoring } from "../../monitoring";
import { MonitoredResourceDescriptor } from "../../monitored_resource";
import { Endpoint } from "../../endpoint";
import { Usage } from "../../usage";
import { Authentication } from "../../auth";
import { Quota } from "../../quota";
import { Documentation } from "../../documentation";
import { Api } from "../../../protobuf/api";
/**
 * A service that is available for use by the consumer.
 *
 * @generated from protobuf message google.api.serviceusage.v1.Service
 */
export interface Service {
    /**
     * The resource name of the consumer and service.
     *
     * A valid name would be:
     * - projects/123/services/serviceusage.googleapis.com
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * The resource name of the consumer.
     *
     * A valid name would be:
     * - projects/123
     *
     * @generated from protobuf field: string parent = 5;
     */
    parent: string;
    /**
     * The service configuration of the available service.
     * Some fields may be filtered out of the configuration in responses to
     * the `ListServices` method. These fields are present only in responses to
     * the `GetService` method.
     *
     * @generated from protobuf field: google.api.serviceusage.v1.ServiceConfig config = 2;
     */
    config?: ServiceConfig;
    /**
     * Whether or not the service has been enabled for use by the consumer.
     *
     * @generated from protobuf field: google.api.serviceusage.v1.State state = 4;
     */
    state: State;
}
/**
 * The configuration of the service.
 *
 * @generated from protobuf message google.api.serviceusage.v1.ServiceConfig
 */
export interface ServiceConfig {
    /**
     * The DNS address at which this service is available.
     *
     * An example DNS address would be:
     * `calendar.googleapis.com`.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * The product title for this service.
     *
     * @generated from protobuf field: string title = 2;
     */
    title: string;
    /**
     * A list of API interfaces exported by this service. Contains only the names,
     * versions, and method names of the interfaces.
     *
     * @generated from protobuf field: repeated google.protobuf.Api apis = 3;
     */
    apis: Api[];
    /**
     * Additional API documentation. Contains only the summary and the
     * documentation URL.
     *
     * @generated from protobuf field: google.api.Documentation documentation = 6;
     */
    documentation?: Documentation;
    /**
     * Quota configuration.
     *
     * @generated from protobuf field: google.api.Quota quota = 10;
     */
    quota?: Quota;
    /**
     * Auth configuration. Contains only the OAuth rules.
     *
     * @generated from protobuf field: google.api.Authentication authentication = 11;
     */
    authentication?: Authentication;
    /**
     * Configuration controlling usage of this service.
     *
     * @generated from protobuf field: google.api.Usage usage = 15;
     */
    usage?: Usage;
    /**
     * Configuration for network endpoints. Contains only the names and aliases
     * of the endpoints.
     *
     * @generated from protobuf field: repeated google.api.Endpoint endpoints = 18;
     */
    endpoints: Endpoint[];
    /**
     * Defines the monitored resources used by this service. This is required
     * by the [Service.monitoring][google.api.Service.monitoring] and [Service.logging][google.api.Service.logging] configurations.
     *
     * @generated from protobuf field: repeated google.api.MonitoredResourceDescriptor monitored_resources = 25;
     */
    monitoredResources: MonitoredResourceDescriptor[];
    /**
     * Monitoring configuration.
     * This should not include the 'producer_destinations' field.
     *
     * @generated from protobuf field: google.api.Monitoring monitoring = 28;
     */
    monitoring?: Monitoring;
}
/**
 * The operation metadata returned for the batchend services operation.
 *
 * @generated from protobuf message google.api.serviceusage.v1.OperationMetadata
 */
export interface OperationMetadata {
    /**
     * The full name of the resources that this operation is directly
     * associated with.
     *
     * @generated from protobuf field: repeated string resource_names = 2;
     */
    resourceNames: string[];
}
/**
 * Whether or not a service has been enabled for use by a consumer.
 *
 * @generated from protobuf enum google.api.serviceusage.v1.State
 */
export enum State {
    /**
     * The default value, which indicates that the enabled state of the service
     * is unspecified or not meaningful. Currently, all consumers other than
     * projects (such as folders and organizations) are always in this state.
     *
     * @generated from protobuf enum value: STATE_UNSPECIFIED = 0;
     */
    STATE_UNSPECIFIED = 0,
    /**
     * The service cannot be used by this consumer. It has either been explicitly
     * disabled, or has never been enabled.
     *
     * @generated from protobuf enum value: DISABLED = 1;
     */
    DISABLED = 1,
    /**
     * The service has been explicitly enabled for use by this consumer.
     *
     * @generated from protobuf enum value: ENABLED = 2;
     */
    ENABLED = 2
}
// @generated message type with reflection information, may provide speed optimized methods
class Service$Type extends MessageType<Service> {
    constructor() {
        super("google.api.serviceusage.v1.Service", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "parent", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "config", kind: "message", T: () => ServiceConfig },
            { no: 4, name: "state", kind: "enum", T: () => ["google.api.serviceusage.v1.State", State] }
        ]);
    }
    create(value?: PartialMessage<Service>): Service {
        const message = { name: "", parent: "", state: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Service>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Service): Service {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* string parent */ 5:
                    message.parent = reader.string();
                    break;
                case /* google.api.serviceusage.v1.ServiceConfig config */ 2:
                    message.config = ServiceConfig.internalBinaryRead(reader, reader.uint32(), options, message.config);
                    break;
                case /* google.api.serviceusage.v1.State state */ 4:
                    message.state = reader.int32();
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
    internalBinaryWrite(message: Service, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* string parent = 5; */
        if (message.parent !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.parent);
        /* google.api.serviceusage.v1.ServiceConfig config = 2; */
        if (message.config)
            ServiceConfig.internalBinaryWrite(message.config, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* google.api.serviceusage.v1.State state = 4; */
        if (message.state !== 0)
            writer.tag(4, WireType.Varint).int32(message.state);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.serviceusage.v1.Service
 */
export const Service = new Service$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ServiceConfig$Type extends MessageType<ServiceConfig> {
    constructor() {
        super("google.api.serviceusage.v1.ServiceConfig", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "apis", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Api },
            { no: 6, name: "documentation", kind: "message", T: () => Documentation },
            { no: 10, name: "quota", kind: "message", T: () => Quota },
            { no: 11, name: "authentication", kind: "message", T: () => Authentication },
            { no: 15, name: "usage", kind: "message", T: () => Usage },
            { no: 18, name: "endpoints", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Endpoint },
            { no: 25, name: "monitored_resources", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MonitoredResourceDescriptor },
            { no: 28, name: "monitoring", kind: "message", T: () => Monitoring }
        ]);
    }
    create(value?: PartialMessage<ServiceConfig>): ServiceConfig {
        const message = { name: "", title: "", apis: [], endpoints: [], monitoredResources: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ServiceConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ServiceConfig): ServiceConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* string title */ 2:
                    message.title = reader.string();
                    break;
                case /* repeated google.protobuf.Api apis */ 3:
                    message.apis.push(Api.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* google.api.Documentation documentation */ 6:
                    message.documentation = Documentation.internalBinaryRead(reader, reader.uint32(), options, message.documentation);
                    break;
                case /* google.api.Quota quota */ 10:
                    message.quota = Quota.internalBinaryRead(reader, reader.uint32(), options, message.quota);
                    break;
                case /* google.api.Authentication authentication */ 11:
                    message.authentication = Authentication.internalBinaryRead(reader, reader.uint32(), options, message.authentication);
                    break;
                case /* google.api.Usage usage */ 15:
                    message.usage = Usage.internalBinaryRead(reader, reader.uint32(), options, message.usage);
                    break;
                case /* repeated google.api.Endpoint endpoints */ 18:
                    message.endpoints.push(Endpoint.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated google.api.MonitoredResourceDescriptor monitored_resources */ 25:
                    message.monitoredResources.push(MonitoredResourceDescriptor.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* google.api.Monitoring monitoring */ 28:
                    message.monitoring = Monitoring.internalBinaryRead(reader, reader.uint32(), options, message.monitoring);
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
    internalBinaryWrite(message: ServiceConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* string title = 2; */
        if (message.title !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.title);
        /* repeated google.protobuf.Api apis = 3; */
        for (let i = 0; i < message.apis.length; i++)
            Api.internalBinaryWrite(message.apis[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* google.api.Documentation documentation = 6; */
        if (message.documentation)
            Documentation.internalBinaryWrite(message.documentation, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* google.api.Quota quota = 10; */
        if (message.quota)
            Quota.internalBinaryWrite(message.quota, writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        /* google.api.Authentication authentication = 11; */
        if (message.authentication)
            Authentication.internalBinaryWrite(message.authentication, writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* google.api.Usage usage = 15; */
        if (message.usage)
            Usage.internalBinaryWrite(message.usage, writer.tag(15, WireType.LengthDelimited).fork(), options).join();
        /* repeated google.api.Endpoint endpoints = 18; */
        for (let i = 0; i < message.endpoints.length; i++)
            Endpoint.internalBinaryWrite(message.endpoints[i], writer.tag(18, WireType.LengthDelimited).fork(), options).join();
        /* repeated google.api.MonitoredResourceDescriptor monitored_resources = 25; */
        for (let i = 0; i < message.monitoredResources.length; i++)
            MonitoredResourceDescriptor.internalBinaryWrite(message.monitoredResources[i], writer.tag(25, WireType.LengthDelimited).fork(), options).join();
        /* google.api.Monitoring monitoring = 28; */
        if (message.monitoring)
            Monitoring.internalBinaryWrite(message.monitoring, writer.tag(28, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.serviceusage.v1.ServiceConfig
 */
export const ServiceConfig = new ServiceConfig$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OperationMetadata$Type extends MessageType<OperationMetadata> {
    constructor() {
        super("google.api.serviceusage.v1.OperationMetadata", [
            { no: 2, name: "resource_names", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<OperationMetadata>): OperationMetadata {
        const message = { resourceNames: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<OperationMetadata>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OperationMetadata): OperationMetadata {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string resource_names */ 2:
                    message.resourceNames.push(reader.string());
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
    internalBinaryWrite(message: OperationMetadata, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated string resource_names = 2; */
        for (let i = 0; i < message.resourceNames.length; i++)
            writer.tag(2, WireType.LengthDelimited).string(message.resourceNames[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.serviceusage.v1.OperationMetadata
 */
export const OperationMetadata = new OperationMetadata$Type();