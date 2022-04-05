// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "google/api/resource.proto" (package "google.api", syntax proto3),// tslint:disable
//
// Copyright 2018 Google LLC
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
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * A simple descriptor of a resource type.
 *
 * ResourceDescriptor annotates a resource message (either by means of a
 * protobuf annotation or use in the service config), and associates the
 * resource's schema, the resource type, and the pattern of the resource name.
 *
 * Example:
 *
 *     message Topic {
 *       // Indicates this message defines a resource schema.
 *       // Declares the resource type in the format of {service}/{kind}.
 *       // For Kubernetes resources, the format is {api group}/{kind}.
 *       option (google.api.resource) = {
 *         type: "pubsub.googleapis.com/Topic"
 *         pattern: "projects/{project}/topics/{topic}"
 *       };
 *     }
 *
 * The ResourceDescriptor Yaml config will look like:
 *
 *     resources:
 *     - type: "pubsub.googleapis.com/Topic"
 *       pattern: "projects/{project}/topics/{topic}"
 *
 * Sometimes, resources have multiple patterns, typically because they can
 * live under multiple parents.
 *
 * Example:
 *
 *     message LogEntry {
 *       option (google.api.resource) = {
 *         type: "logging.googleapis.com/LogEntry"
 *         pattern: "projects/{project}/logs/{log}"
 *         pattern: "folders/{folder}/logs/{log}"
 *         pattern: "organizations/{organization}/logs/{log}"
 *         pattern: "billingAccounts/{billing_account}/logs/{log}"
 *       };
 *     }
 *
 * The ResourceDescriptor Yaml config will look like:
 *
 *     resources:
 *     - type: 'logging.googleapis.com/LogEntry'
 *       pattern: "projects/{project}/logs/{log}"
 *       pattern: "folders/{folder}/logs/{log}"
 *       pattern: "organizations/{organization}/logs/{log}"
 *       pattern: "billingAccounts/{billing_account}/logs/{log}"
 *
 * @generated from protobuf message google.api.ResourceDescriptor
 */
export interface ResourceDescriptor {
    /**
     * The resource type. It must be in the format of
     * {service_name}/{resource_type_kind}. The `resource_type_kind` must be
     * singular and must not include version numbers.
     *
     * Example: `storage.googleapis.com/Bucket`
     *
     * The value of the resource_type_kind must follow the regular expression
     * /[A-Za-z][a-zA-Z0-9]+/. It should start with an upper case character and
     * should use PascalCase (UpperCamelCase). The maximum number of
     * characters allowed for the `resource_type_kind` is 100.
     *
     * @generated from protobuf field: string type = 1;
     */
    type: string;
    /**
     * Optional. The relative resource name pattern associated with this resource
     * type. The DNS prefix of the full resource name shouldn't be specified here.
     *
     * The path pattern must follow the syntax, which aligns with HTTP binding
     * syntax:
     *
     *     Template = Segment { "/" Segment } ;
     *     Segment = LITERAL | Variable ;
     *     Variable = "{" LITERAL "}" ;
     *
     * Examples:
     *
     *     - "projects/{project}/topics/{topic}"
     *     - "projects/{project}/knowledgeBases/{knowledge_base}"
     *
     * The components in braces correspond to the IDs for each resource in the
     * hierarchy. It is expected that, if multiple patterns are provided,
     * the same component name (e.g. "project") refers to IDs of the same
     * type of resource.
     *
     * @generated from protobuf field: repeated string pattern = 2;
     */
    pattern: string[];
    /**
     * Optional. The field on the resource that designates the resource name
     * field. If omitted, this is assumed to be "name".
     *
     * @generated from protobuf field: string name_field = 3;
     */
    nameField: string;
    /**
     * Optional. The historical or future-looking state of the resource pattern.
     *
     * Example:
     *
     *     // The InspectTemplate message originally only supported resource
     *     // names with organization, and project was added later.
     *     message InspectTemplate {
     *       option (google.api.resource) = {
     *         type: "dlp.googleapis.com/InspectTemplate"
     *         pattern:
     *         "organizations/{organization}/inspectTemplates/{inspect_template}"
     *         pattern: "projects/{project}/inspectTemplates/{inspect_template}"
     *         history: ORIGINALLY_SINGLE_PATTERN
     *       };
     *     }
     *
     * @generated from protobuf field: google.api.ResourceDescriptor.History history = 4;
     */
    history: ResourceDescriptor_History;
    /**
     * The plural name used in the resource name and permission names, such as
     * 'projects' for the resource name of 'projects/{project}' and the permission
     * name of 'cloudresourcemanager.googleapis.com/projects.get'. It is the same
     * concept of the `plural` field in k8s CRD spec
     * https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/
     *
     * Note: The plural form is required even for singleton resources. See
     * https://aip.dev/156
     *
     * @generated from protobuf field: string plural = 5;
     */
    plural: string;
    /**
     * The same concept of the `singular` field in k8s CRD spec
     * https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/
     * Such as "project" for the `resourcemanager.googleapis.com/Project` type.
     *
     * @generated from protobuf field: string singular = 6;
     */
    singular: string;
    /**
     * Style flag(s) for this resource.
     * These indicate that a resource is expected to conform to a given
     * style. See the specific style flags for additional information.
     *
     * @generated from protobuf field: repeated google.api.ResourceDescriptor.Style style = 10;
     */
    style: ResourceDescriptor_Style[];
}
/**
 * A description of the historical or future-looking state of the
 * resource pattern.
 *
 * @generated from protobuf enum google.api.ResourceDescriptor.History
 */
export enum ResourceDescriptor_History {
    /**
     * The "unset" value.
     *
     * @generated from protobuf enum value: HISTORY_UNSPECIFIED = 0;
     */
    HISTORY_UNSPECIFIED = 0,
    /**
     * The resource originally had one pattern and launched as such, and
     * additional patterns were added later.
     *
     * @generated from protobuf enum value: ORIGINALLY_SINGLE_PATTERN = 1;
     */
    ORIGINALLY_SINGLE_PATTERN = 1,
    /**
     * The resource has one pattern, but the API owner expects to add more
     * later. (This is the inverse of ORIGINALLY_SINGLE_PATTERN, and prevents
     * that from being necessary once there are multiple patterns.)
     *
     * @generated from protobuf enum value: FUTURE_MULTI_PATTERN = 2;
     */
    FUTURE_MULTI_PATTERN = 2
}
/**
 * A flag representing a specific style that a resource claims to conform to.
 *
 * @generated from protobuf enum google.api.ResourceDescriptor.Style
 */
export enum ResourceDescriptor_Style {
    /**
     * The unspecified value. Do not use.
     *
     * @generated from protobuf enum value: STYLE_UNSPECIFIED = 0;
     */
    STYLE_UNSPECIFIED = 0,
    /**
     * This resource is intended to be "declarative-friendly".
     *
     * Declarative-friendly resources must be more strictly consistent, and
     * setting this to true communicates to tools that this resource should
     * adhere to declarative-friendly expectations.
     *
     * Note: This is used by the API linter (linter.aip.dev) to enable
     * additional checks.
     *
     * @generated from protobuf enum value: DECLARATIVE_FRIENDLY = 1;
     */
    DECLARATIVE_FRIENDLY = 1
}
/**
 * Defines a proto annotation that describes a string field that refers to
 * an API resource.
 *
 * @generated from protobuf message google.api.ResourceReference
 */
export interface ResourceReference {
    /**
     * The resource type that the annotated field references.
     *
     * Example:
     *
     *     message Subscription {
     *       string topic = 2 [(google.api.resource_reference) = {
     *         type: "pubsub.googleapis.com/Topic"
     *       }];
     *     }
     *
     * Occasionally, a field may reference an arbitrary resource. In this case,
     * APIs use the special value * in their resource reference.
     *
     * Example:
     *
     *     message GetIamPolicyRequest {
     *       string resource = 2 [(google.api.resource_reference) = {
     *         type: "*"
     *       }];
     *     }
     *
     * @generated from protobuf field: string type = 1;
     */
    type: string;
    /**
     * The resource type of a child collection that the annotated field
     * references. This is useful for annotating the `parent` field that
     * doesn't have a fixed resource type.
     *
     * Example:
     *
     *     message ListLogEntriesRequest {
     *       string parent = 1 [(google.api.resource_reference) = {
     *         child_type: "logging.googleapis.com/LogEntry"
     *       };
     *     }
     *
     * @generated from protobuf field: string child_type = 2;
     */
    childType: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class ResourceDescriptor$Type extends MessageType<ResourceDescriptor> {
    constructor() {
        super("google.api.ResourceDescriptor", [
            { no: 1, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "pattern", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "name_field", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "history", kind: "enum", T: () => ["google.api.ResourceDescriptor.History", ResourceDescriptor_History] },
            { no: 5, name: "plural", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "singular", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "style", kind: "enum", repeat: 1 /*RepeatType.PACKED*/, T: () => ["google.api.ResourceDescriptor.Style", ResourceDescriptor_Style] }
        ]);
    }
    create(value?: PartialMessage<ResourceDescriptor>): ResourceDescriptor {
        const message = { type: "", pattern: [], nameField: "", history: 0, plural: "", singular: "", style: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ResourceDescriptor>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ResourceDescriptor): ResourceDescriptor {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string type */ 1:
                    message.type = reader.string();
                    break;
                case /* repeated string pattern */ 2:
                    message.pattern.push(reader.string());
                    break;
                case /* string name_field */ 3:
                    message.nameField = reader.string();
                    break;
                case /* google.api.ResourceDescriptor.History history */ 4:
                    message.history = reader.int32();
                    break;
                case /* string plural */ 5:
                    message.plural = reader.string();
                    break;
                case /* string singular */ 6:
                    message.singular = reader.string();
                    break;
                case /* repeated google.api.ResourceDescriptor.Style style */ 10:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.style.push(reader.int32());
                    else
                        message.style.push(reader.int32());
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
    internalBinaryWrite(message: ResourceDescriptor, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string type = 1; */
        if (message.type !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.type);
        /* repeated string pattern = 2; */
        for (let i = 0; i < message.pattern.length; i++)
            writer.tag(2, WireType.LengthDelimited).string(message.pattern[i]);
        /* string name_field = 3; */
        if (message.nameField !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.nameField);
        /* google.api.ResourceDescriptor.History history = 4; */
        if (message.history !== 0)
            writer.tag(4, WireType.Varint).int32(message.history);
        /* string plural = 5; */
        if (message.plural !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.plural);
        /* string singular = 6; */
        if (message.singular !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.singular);
        /* repeated google.api.ResourceDescriptor.Style style = 10; */
        if (message.style.length) {
            writer.tag(10, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.style.length; i++)
                writer.int32(message.style[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.ResourceDescriptor
 */
export const ResourceDescriptor = new ResourceDescriptor$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ResourceReference$Type extends MessageType<ResourceReference> {
    constructor() {
        super("google.api.ResourceReference", [
            { no: 1, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "child_type", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ResourceReference>): ResourceReference {
        const message = { type: "", childType: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ResourceReference>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ResourceReference): ResourceReference {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string type */ 1:
                    message.type = reader.string();
                    break;
                case /* string child_type */ 2:
                    message.childType = reader.string();
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
    internalBinaryWrite(message: ResourceReference, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string type = 1; */
        if (message.type !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.type);
        /* string child_type = 2; */
        if (message.childType !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.childType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.ResourceReference
 */
export const ResourceReference = new ResourceReference$Type();
