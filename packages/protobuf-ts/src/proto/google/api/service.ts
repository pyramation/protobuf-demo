// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "google/api/service.proto" (package "google.api", syntax proto3),// tslint:disable
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
import { UInt32Value } from "../protobuf/wrappers";
import { SourceInfo } from "./source_info";
import { SystemParameters } from "./system_parameter";
import { Monitoring } from "./monitoring";
import { Logging } from "./logging";
import { Billing } from "./billing";
import { MonitoredResourceDescriptor } from "./monitored_resource";
import { MetricDescriptor } from "./metric";
import { LogDescriptor } from "./log";
import { Control } from "./control";
import { Endpoint } from "./endpoint";
import { Usage } from "./usage";
import { Context } from "./context";
import { Authentication } from "./auth";
import { Quota } from "./quota";
import { Http } from "./http";
import { Backend } from "./backend";
import { Documentation } from "./documentation";
import { Enum } from "../protobuf/type";
import { Type } from "../protobuf/type";
import { Api } from "../protobuf/api";
/**
 * `Service` is the root object of Google service configuration schema. It
 * describes basic information about a service, such as the name and the
 * title, and delegates other aspects to sub-sections. Each sub-section is
 * either a proto message or a repeated proto message that configures a
 * specific aspect, such as auth. See each proto message definition for details.
 *
 * Example:
 *
 *     type: google.api.Service
 *     name: calendar.googleapis.com
 *     title: Google Calendar API
 *     apis:
 *     - name: google.calendar.v3.Calendar
 *     authentication:
 *       providers:
 *       - id: google_calendar_auth
 *         jwks_uri: https://www.googleapis.com/oauth2/v1/certs
 *         issuer: https://securetoken.google.com
 *       rules:
 *       - selector: "*"
 *         requirements:
 *           provider_id: google_calendar_auth
 *
 * @generated from protobuf message google.api.Service
 */
export interface Service {
    /**
     * The service name, which is a DNS-like logical identifier for the
     * service, such as `calendar.googleapis.com`. The service name
     * typically goes through DNS verification to make sure the owner
     * of the service also owns the DNS name.
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
     * The Google project that owns this service.
     *
     * @generated from protobuf field: string producer_project_id = 22;
     */
    producerProjectId: string;
    /**
     * A unique ID for a specific instance of this message, typically assigned
     * by the client for tracking purpose. Must be no longer than 63 characters
     * and only lower case letters, digits, '.', '_' and '-' are allowed. If
     * empty, the server may choose to generate one instead.
     *
     * @generated from protobuf field: string id = 33;
     */
    id: string;
    /**
     * A list of API interfaces exported by this service. Only the `name` field
     * of the [google.protobuf.Api][google.protobuf.Api] needs to be provided by the configuration
     * author, as the remaining fields will be derived from the IDL during the
     * normalization process. It is an error to specify an API interface here
     * which cannot be resolved against the associated IDL files.
     *
     * @generated from protobuf field: repeated google.protobuf.Api apis = 3;
     */
    apis: Api[];
    /**
     * A list of all proto message types included in this API service.
     * Types referenced directly or indirectly by the `apis` are
     * automatically included.  Messages which are not referenced but
     * shall be included, such as types used by the `google.protobuf.Any` type,
     * should be listed here by name. Example:
     *
     *     types:
     *     - name: google.protobuf.Int32
     *
     * @generated from protobuf field: repeated google.protobuf.Type types = 4;
     */
    types: Type[];
    /**
     * A list of all enum types included in this API service.  Enums
     * referenced directly or indirectly by the `apis` are automatically
     * included.  Enums which are not referenced but shall be included
     * should be listed here by name. Example:
     *
     *     enums:
     *     - name: google.someapi.v1.SomeEnum
     *
     * @generated from protobuf field: repeated google.protobuf.Enum enums = 5;
     */
    enums: Enum[];
    /**
     * Additional API documentation.
     *
     * @generated from protobuf field: google.api.Documentation documentation = 6;
     */
    documentation?: Documentation;
    /**
     * API backend configuration.
     *
     * @generated from protobuf field: google.api.Backend backend = 8;
     */
    backend?: Backend;
    /**
     * HTTP configuration.
     *
     * @generated from protobuf field: google.api.Http http = 9;
     */
    http?: Http;
    /**
     * Quota configuration.
     *
     * @generated from protobuf field: google.api.Quota quota = 10;
     */
    quota?: Quota;
    /**
     * Auth configuration.
     *
     * @generated from protobuf field: google.api.Authentication authentication = 11;
     */
    authentication?: Authentication;
    /**
     * Context configuration.
     *
     * @generated from protobuf field: google.api.Context context = 12;
     */
    context?: Context;
    /**
     * Configuration controlling usage of this service.
     *
     * @generated from protobuf field: google.api.Usage usage = 15;
     */
    usage?: Usage;
    /**
     * Configuration for network endpoints.  If this is empty, then an endpoint
     * with the same name as the service is automatically generated to service all
     * defined APIs.
     *
     * @generated from protobuf field: repeated google.api.Endpoint endpoints = 18;
     */
    endpoints: Endpoint[];
    /**
     * Configuration for the service control plane.
     *
     * @generated from protobuf field: google.api.Control control = 21;
     */
    control?: Control;
    /**
     * Defines the logs used by this service.
     *
     * @generated from protobuf field: repeated google.api.LogDescriptor logs = 23;
     */
    logs: LogDescriptor[];
    /**
     * Defines the metrics used by this service.
     *
     * @generated from protobuf field: repeated google.api.MetricDescriptor metrics = 24;
     */
    metrics: MetricDescriptor[];
    /**
     * Defines the monitored resources used by this service. This is required
     * by the [Service.monitoring][google.api.Service.monitoring] and [Service.logging][google.api.Service.logging] configurations.
     *
     * @generated from protobuf field: repeated google.api.MonitoredResourceDescriptor monitored_resources = 25;
     */
    monitoredResources: MonitoredResourceDescriptor[];
    /**
     * Billing configuration.
     *
     * @generated from protobuf field: google.api.Billing billing = 26;
     */
    billing?: Billing;
    /**
     * Logging configuration.
     *
     * @generated from protobuf field: google.api.Logging logging = 27;
     */
    logging?: Logging;
    /**
     * Monitoring configuration.
     *
     * @generated from protobuf field: google.api.Monitoring monitoring = 28;
     */
    monitoring?: Monitoring;
    /**
     * System parameter configuration.
     *
     * @generated from protobuf field: google.api.SystemParameters system_parameters = 29;
     */
    systemParameters?: SystemParameters;
    /**
     * Output only. The source information for this configuration if available.
     *
     * @generated from protobuf field: google.api.SourceInfo source_info = 37;
     */
    sourceInfo?: SourceInfo;
    /**
     * Obsolete. Do not use.
     *
     * This field has no semantic meaning. The service config compiler always
     * sets this field to `3`.
     *
     * @deprecated
     * @generated from protobuf field: google.protobuf.UInt32Value config_version = 20 [deprecated = true];
     */
    configVersion?: UInt32Value;
}
// @generated message type with reflection information, may provide speed optimized methods
class Service$Type extends MessageType<Service> {
    constructor() {
        super("google.api.Service", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 22, name: "producer_project_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 33, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "apis", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Api },
            { no: 4, name: "types", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Type },
            { no: 5, name: "enums", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Enum },
            { no: 6, name: "documentation", kind: "message", T: () => Documentation },
            { no: 8, name: "backend", kind: "message", T: () => Backend },
            { no: 9, name: "http", kind: "message", T: () => Http },
            { no: 10, name: "quota", kind: "message", T: () => Quota },
            { no: 11, name: "authentication", kind: "message", T: () => Authentication },
            { no: 12, name: "context", kind: "message", T: () => Context },
            { no: 15, name: "usage", kind: "message", T: () => Usage },
            { no: 18, name: "endpoints", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Endpoint },
            { no: 21, name: "control", kind: "message", T: () => Control },
            { no: 23, name: "logs", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => LogDescriptor },
            { no: 24, name: "metrics", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MetricDescriptor },
            { no: 25, name: "monitored_resources", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MonitoredResourceDescriptor },
            { no: 26, name: "billing", kind: "message", T: () => Billing },
            { no: 27, name: "logging", kind: "message", T: () => Logging },
            { no: 28, name: "monitoring", kind: "message", T: () => Monitoring },
            { no: 29, name: "system_parameters", kind: "message", T: () => SystemParameters },
            { no: 37, name: "source_info", kind: "message", T: () => SourceInfo },
            { no: 20, name: "config_version", kind: "message", T: () => UInt32Value }
        ]);
    }
    create(value?: PartialMessage<Service>): Service {
        const message = { name: "", title: "", producerProjectId: "", id: "", apis: [], types: [], enums: [], endpoints: [], logs: [], metrics: [], monitoredResources: [] };
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
                case /* string title */ 2:
                    message.title = reader.string();
                    break;
                case /* string producer_project_id */ 22:
                    message.producerProjectId = reader.string();
                    break;
                case /* string id */ 33:
                    message.id = reader.string();
                    break;
                case /* repeated google.protobuf.Api apis */ 3:
                    message.apis.push(Api.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated google.protobuf.Type types */ 4:
                    message.types.push(Type.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated google.protobuf.Enum enums */ 5:
                    message.enums.push(Enum.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* google.api.Documentation documentation */ 6:
                    message.documentation = Documentation.internalBinaryRead(reader, reader.uint32(), options, message.documentation);
                    break;
                case /* google.api.Backend backend */ 8:
                    message.backend = Backend.internalBinaryRead(reader, reader.uint32(), options, message.backend);
                    break;
                case /* google.api.Http http */ 9:
                    message.http = Http.internalBinaryRead(reader, reader.uint32(), options, message.http);
                    break;
                case /* google.api.Quota quota */ 10:
                    message.quota = Quota.internalBinaryRead(reader, reader.uint32(), options, message.quota);
                    break;
                case /* google.api.Authentication authentication */ 11:
                    message.authentication = Authentication.internalBinaryRead(reader, reader.uint32(), options, message.authentication);
                    break;
                case /* google.api.Context context */ 12:
                    message.context = Context.internalBinaryRead(reader, reader.uint32(), options, message.context);
                    break;
                case /* google.api.Usage usage */ 15:
                    message.usage = Usage.internalBinaryRead(reader, reader.uint32(), options, message.usage);
                    break;
                case /* repeated google.api.Endpoint endpoints */ 18:
                    message.endpoints.push(Endpoint.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* google.api.Control control */ 21:
                    message.control = Control.internalBinaryRead(reader, reader.uint32(), options, message.control);
                    break;
                case /* repeated google.api.LogDescriptor logs */ 23:
                    message.logs.push(LogDescriptor.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated google.api.MetricDescriptor metrics */ 24:
                    message.metrics.push(MetricDescriptor.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated google.api.MonitoredResourceDescriptor monitored_resources */ 25:
                    message.monitoredResources.push(MonitoredResourceDescriptor.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* google.api.Billing billing */ 26:
                    message.billing = Billing.internalBinaryRead(reader, reader.uint32(), options, message.billing);
                    break;
                case /* google.api.Logging logging */ 27:
                    message.logging = Logging.internalBinaryRead(reader, reader.uint32(), options, message.logging);
                    break;
                case /* google.api.Monitoring monitoring */ 28:
                    message.monitoring = Monitoring.internalBinaryRead(reader, reader.uint32(), options, message.monitoring);
                    break;
                case /* google.api.SystemParameters system_parameters */ 29:
                    message.systemParameters = SystemParameters.internalBinaryRead(reader, reader.uint32(), options, message.systemParameters);
                    break;
                case /* google.api.SourceInfo source_info */ 37:
                    message.sourceInfo = SourceInfo.internalBinaryRead(reader, reader.uint32(), options, message.sourceInfo);
                    break;
                case /* google.protobuf.UInt32Value config_version = 20 [deprecated = true];*/ 20:
                    message.configVersion = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.configVersion);
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
        /* string title = 2; */
        if (message.title !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.title);
        /* string producer_project_id = 22; */
        if (message.producerProjectId !== "")
            writer.tag(22, WireType.LengthDelimited).string(message.producerProjectId);
        /* string id = 33; */
        if (message.id !== "")
            writer.tag(33, WireType.LengthDelimited).string(message.id);
        /* repeated google.protobuf.Api apis = 3; */
        for (let i = 0; i < message.apis.length; i++)
            Api.internalBinaryWrite(message.apis[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated google.protobuf.Type types = 4; */
        for (let i = 0; i < message.types.length; i++)
            Type.internalBinaryWrite(message.types[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* repeated google.protobuf.Enum enums = 5; */
        for (let i = 0; i < message.enums.length; i++)
            Enum.internalBinaryWrite(message.enums[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* google.api.Documentation documentation = 6; */
        if (message.documentation)
            Documentation.internalBinaryWrite(message.documentation, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* google.api.Backend backend = 8; */
        if (message.backend)
            Backend.internalBinaryWrite(message.backend, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* google.api.Http http = 9; */
        if (message.http)
            Http.internalBinaryWrite(message.http, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* google.api.Quota quota = 10; */
        if (message.quota)
            Quota.internalBinaryWrite(message.quota, writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        /* google.api.Authentication authentication = 11; */
        if (message.authentication)
            Authentication.internalBinaryWrite(message.authentication, writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* google.api.Context context = 12; */
        if (message.context)
            Context.internalBinaryWrite(message.context, writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        /* google.api.Usage usage = 15; */
        if (message.usage)
            Usage.internalBinaryWrite(message.usage, writer.tag(15, WireType.LengthDelimited).fork(), options).join();
        /* repeated google.api.Endpoint endpoints = 18; */
        for (let i = 0; i < message.endpoints.length; i++)
            Endpoint.internalBinaryWrite(message.endpoints[i], writer.tag(18, WireType.LengthDelimited).fork(), options).join();
        /* google.api.Control control = 21; */
        if (message.control)
            Control.internalBinaryWrite(message.control, writer.tag(21, WireType.LengthDelimited).fork(), options).join();
        /* repeated google.api.LogDescriptor logs = 23; */
        for (let i = 0; i < message.logs.length; i++)
            LogDescriptor.internalBinaryWrite(message.logs[i], writer.tag(23, WireType.LengthDelimited).fork(), options).join();
        /* repeated google.api.MetricDescriptor metrics = 24; */
        for (let i = 0; i < message.metrics.length; i++)
            MetricDescriptor.internalBinaryWrite(message.metrics[i], writer.tag(24, WireType.LengthDelimited).fork(), options).join();
        /* repeated google.api.MonitoredResourceDescriptor monitored_resources = 25; */
        for (let i = 0; i < message.monitoredResources.length; i++)
            MonitoredResourceDescriptor.internalBinaryWrite(message.monitoredResources[i], writer.tag(25, WireType.LengthDelimited).fork(), options).join();
        /* google.api.Billing billing = 26; */
        if (message.billing)
            Billing.internalBinaryWrite(message.billing, writer.tag(26, WireType.LengthDelimited).fork(), options).join();
        /* google.api.Logging logging = 27; */
        if (message.logging)
            Logging.internalBinaryWrite(message.logging, writer.tag(27, WireType.LengthDelimited).fork(), options).join();
        /* google.api.Monitoring monitoring = 28; */
        if (message.monitoring)
            Monitoring.internalBinaryWrite(message.monitoring, writer.tag(28, WireType.LengthDelimited).fork(), options).join();
        /* google.api.SystemParameters system_parameters = 29; */
        if (message.systemParameters)
            SystemParameters.internalBinaryWrite(message.systemParameters, writer.tag(29, WireType.LengthDelimited).fork(), options).join();
        /* google.api.SourceInfo source_info = 37; */
        if (message.sourceInfo)
            SourceInfo.internalBinaryWrite(message.sourceInfo, writer.tag(37, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value config_version = 20 [deprecated = true]; */
        if (message.configVersion)
            UInt32Value.internalBinaryWrite(message.configVersion, writer.tag(20, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.Service
 */
export const Service = new Service$Type();
