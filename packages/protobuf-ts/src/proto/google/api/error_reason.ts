// @generated by protobuf-ts 2.4.0,// @generated from protobuf file "google/api/error_reason.proto" (package "google.api", syntax proto3),// tslint:disable
//
// Copyright 2020 Google LLC
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
/**
 * Defines the supported values for `google.rpc.ErrorInfo.reason` for the
 * `googleapis.com` error domain. This error domain is reserved for [Service
 * Infrastructure](https://cloud.google.com/service-infrastructure/docs/overview).
 * For each error info of this domain, the metadata key "service" refers to the
 * logical identifier of an API service, such as "pubsub.googleapis.com". The
 * "consumer" refers to the entity that consumes an API Service. It typically is
 * a Google project that owns the client application or the server resource,
 * such as "projects/123". Other metadata keys are specific to each error
 * reason. For more information, see the definition of the specific error
 * reason.
 *
 * @generated from protobuf enum google.api.ErrorReason
 */
export enum ErrorReason {
    /**
     * Do not use this default value.
     *
     * @generated from protobuf enum value: ERROR_REASON_UNSPECIFIED = 0;
     */
    ERROR_REASON_UNSPECIFIED = 0,
    /**
     * The request is calling a disabled service for a consumer.
     *
     * Example of an ErrorInfo when the consumer "projects/123" contacting
     * "pubsub.googleapis.com" service which is disabled:
     *
     *     { "reason": "SERVICE_DISABLED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "pubsub.googleapis.com"
     *       }
     *     }
     *
     * This response indicates the "pubsub.googleapis.com" has been disabled in
     * "projects/123".
     *
     * @generated from protobuf enum value: SERVICE_DISABLED = 1;
     */
    SERVICE_DISABLED = 1,
    /**
     * The request whose associated billing account is disabled.
     *
     * Example of an ErrorInfo when the consumer "projects/123" fails to contact
     * "pubsub.googleapis.com" service because the associated billing account is
     * disabled:
     *
     *     { "reason": "BILLING_DISABLED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "pubsub.googleapis.com"
     *       }
     *     }
     *
     * This response indicates the billing account associated has been disabled.
     *
     * @generated from protobuf enum value: BILLING_DISABLED = 2;
     */
    BILLING_DISABLED = 2,
    /**
     * The request is denied because the provided [API
     * key](https://cloud.google.com/docs/authentication/api-keys) is invalid. It
     * may be in a bad format, cannot be found, or has been expired).
     *
     * Example of an ErrorInfo when the request is contacting
     * "storage.googleapis.com" service with an invalid API key:
     *
     *     { "reason": "API_KEY_INVALID",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "service": "storage.googleapis.com",
     *       }
     *     }
     *
     * @generated from protobuf enum value: API_KEY_INVALID = 3;
     */
    API_KEY_INVALID = 3,
    /**
     * The request is denied because it violates [API key API
     * restrictions](https://cloud.google.com/docs/authentication/api-keys#adding_api_restrictions).
     *
     * Example of an ErrorInfo when the consumer "projects/123" fails to call the
     * "storage.googleapis.com" service because this service is restricted in the
     * API key:
     *
     *     { "reason": "API_KEY_SERVICE_BLOCKED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "storage.googleapis.com"
     *       }
     *     }
     *
     * @generated from protobuf enum value: API_KEY_SERVICE_BLOCKED = 4;
     */
    API_KEY_SERVICE_BLOCKED = 4,
    /**
     * The request is denied because it violates [API key HTTP
     * restrictions](https://cloud.google.com/docs/authentication/api-keys#adding_http_restrictions).
     *
     * Example of an ErrorInfo when the consumer "projects/123" fails to call
     * "storage.googleapis.com" service because the http referrer of the request
     * violates API key HTTP restrictions:
     *
     *     { "reason": "API_KEY_HTTP_REFERRER_BLOCKED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "storage.googleapis.com",
     *       }
     *     }
     *
     * @generated from protobuf enum value: API_KEY_HTTP_REFERRER_BLOCKED = 7;
     */
    API_KEY_HTTP_REFERRER_BLOCKED = 7,
    /**
     * The request is denied because it violates [API key IP address
     * restrictions](https://cloud.google.com/docs/authentication/api-keys#adding_application_restrictions).
     *
     * Example of an ErrorInfo when the consumer "projects/123" fails to call
     * "storage.googleapis.com" service because the caller IP of the request
     * violates API key IP address restrictions:
     *
     *     { "reason": "API_KEY_IP_ADDRESS_BLOCKED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "storage.googleapis.com",
     *       }
     *     }
     *
     * @generated from protobuf enum value: API_KEY_IP_ADDRESS_BLOCKED = 8;
     */
    API_KEY_IP_ADDRESS_BLOCKED = 8,
    /**
     * The request is denied because it violates [API key Android application
     * restrictions](https://cloud.google.com/docs/authentication/api-keys#adding_application_restrictions).
     *
     * Example of an ErrorInfo when the consumer "projects/123" fails to call
     * "storage.googleapis.com" service because the request from the Android apps
     * violates the API key Android application restrictions:
     *
     *     { "reason": "API_KEY_ANDROID_APP_BLOCKED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "storage.googleapis.com"
     *       }
     *     }
     *
     * @generated from protobuf enum value: API_KEY_ANDROID_APP_BLOCKED = 9;
     */
    API_KEY_ANDROID_APP_BLOCKED = 9,
    /**
     * The request is denied because it violates [API key iOS application
     * restrictions](https://cloud.google.com/docs/authentication/api-keys#adding_application_restrictions).
     *
     * Example of an ErrorInfo when the consumer "projects/123" fails to call
     * "storage.googleapis.com" service because the request from the iOS apps
     * violates the API key iOS application restrictions:
     *
     *     { "reason": "API_KEY_IOS_APP_BLOCKED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "storage.googleapis.com"
     *       }
     *     }
     *
     * @generated from protobuf enum value: API_KEY_IOS_APP_BLOCKED = 13;
     */
    API_KEY_IOS_APP_BLOCKED = 13,
    /**
     * The request is denied because there is not enough rate quota for the
     * consumer.
     *
     * Example of an ErrorInfo when the consumer "projects/123" fails to contact
     * "pubsub.googleapis.com" service because consumer's rate quota usage has
     * reached the maximum value set for the quota limit
     * "ReadsPerMinutePerProject" on the quota metric
     * "pubsub.googleapis.com/read_requests":
     *
     *     { "reason": "RATE_LIMIT_EXCEEDED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "pubsub.googleapis.com",
     *         "quota_metric": "pubsub.googleapis.com/read_requests",
     *         "quota_limit": "ReadsPerMinutePerProject"
     *       }
     *     }
     *
     * Example of an ErrorInfo when the consumer "projects/123" checks quota on
     * the service "dataflow.googleapis.com" and hits the organization quota
     * limit "DefaultRequestsPerMinutePerOrganization" on the metric
     * "dataflow.googleapis.com/default_requests".
     *
     *     { "reason": "RATE_LIMIT_EXCEEDED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "dataflow.googleapis.com",
     *         "quota_metric": "dataflow.googleapis.com/default_requests",
     *         "quota_limit": "DefaultRequestsPerMinutePerOrganization"
     *       }
     *     }
     *
     * @generated from protobuf enum value: RATE_LIMIT_EXCEEDED = 5;
     */
    RATE_LIMIT_EXCEEDED = 5,
    /**
     * The request is denied because there is not enough resource quota for the
     * consumer.
     *
     * Example of an ErrorInfo when the consumer "projects/123" fails to contact
     * "compute.googleapis.com" service because consumer's resource quota usage
     * has reached the maximum value set for the quota limit "VMsPerProject"
     * on the quota metric "compute.googleapis.com/vms":
     *
     *     { "reason": "RESOURCE_QUOTA_EXCEEDED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "compute.googleapis.com",
     *         "quota_metric": "compute.googleapis.com/vms",
     *         "quota_limit": "VMsPerProject"
     *       }
     *     }
     *
     * Example of an ErrorInfo when the consumer "projects/123" checks resource
     * quota on the service "dataflow.googleapis.com" and hits the organization
     * quota limit "jobs-per-organization" on the metric
     * "dataflow.googleapis.com/job_count".
     *
     *     { "reason": "RESOURCE_QUOTA_EXCEEDED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "dataflow.googleapis.com",
     *         "quota_metric": "dataflow.googleapis.com/job_count",
     *         "quota_limit": "jobs-per-organization"
     *       }
     *     }
     *
     * @generated from protobuf enum value: RESOURCE_QUOTA_EXCEEDED = 6;
     */
    RESOURCE_QUOTA_EXCEEDED = 6,
    /**
     * The request whose associated billing account address is in a tax restricted
     * location, violates the local tax restrictions when creating resources in
     * the restricted region.
     *
     * Example of an ErrorInfo when creating the Cloud Storage Bucket in the
     * container "projects/123" under a tax restricted region
     * "locations/asia-northeast3":
     *
     *     { "reason": "LOCATION_TAX_POLICY_VIOLATED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "storage.googleapis.com",
     *         "location": "locations/asia-northeast3"
     *       }
     *     }
     *
     * This response indicates creating the Cloud Storage Bucket in
     * "locations/asia-northeast3" violates the location tax restriction.
     *
     * @generated from protobuf enum value: LOCATION_TAX_POLICY_VIOLATED = 10;
     */
    LOCATION_TAX_POLICY_VIOLATED = 10,
    /**
     * The request is denied because the caller does not have required permission
     * on the user project "projects/123" or the user project is invalid. For more
     * information, check the [userProject System
     * Parameters](https://cloud.google.com/apis/docs/system-parameters).
     *
     * Example of an ErrorInfo when the caller is calling Cloud Storage service
     * with insufficient permissions on the user project:
     *
     *     { "reason": "USER_PROJECT_DENIED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "storage.googleapis.com"
     *       }
     *     }
     *
     * @generated from protobuf enum value: USER_PROJECT_DENIED = 11;
     */
    USER_PROJECT_DENIED = 11,
    /**
     * The request is denied because the consumer "projects/123" is suspended due
     * to Terms of Service(Tos) violations. Check [Project suspension
     * guidelines](https://cloud.google.com/resource-manager/docs/project-suspension-guidelines)
     * for more information.
     *
     * Example of an ErrorInfo when calling Cloud Storage service with the
     * suspended consumer "projects/123":
     *
     *     { "reason": "CONSUMER_SUSPENDED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "storage.googleapis.com"
     *       }
     *     }
     *
     * @generated from protobuf enum value: CONSUMER_SUSPENDED = 12;
     */
    CONSUMER_SUSPENDED = 12,
    /**
     * The request is denied because the associated consumer is invalid. It may be
     * in a bad format, cannot be found, or have been deleted.
     *
     * Example of an ErrorInfo when calling Cloud Storage service with the
     * invalid consumer "projects/123":
     *
     *     { "reason": "CONSUMER_INVALID",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "storage.googleapis.com"
     *       }
     *     }
     *
     * @generated from protobuf enum value: CONSUMER_INVALID = 14;
     */
    CONSUMER_INVALID = 14,
    /**
     * The request is denied because it violates [VPC Service
     * Controls](https://cloud.google.com/vpc-service-controls/docs/overview).
     * The 'uid' field is a random generated identifier that customer can use it
     * to search the audit log for a request rejected by VPC Service Controls. For
     * more information, please refer [VPC Service Controls
     * Troubleshooting](https://cloud.google.com/vpc-service-controls/docs/troubleshooting#unique-id)
     *
     * Example of an ErrorInfo when the consumer "projects/123" fails to call
     * Cloud Storage service because the request is prohibited by the VPC Service
     * Controls.
     *
     *     { "reason": "SECURITY_POLICY_VIOLATED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "uid": "123456789abcde",
     *         "consumer": "projects/123",
     *         "service": "storage.googleapis.com"
     *       }
     *     }
     *
     * @generated from protobuf enum value: SECURITY_POLICY_VIOLATED = 15;
     */
    SECURITY_POLICY_VIOLATED = 15,
    /**
     * The request is denied because the provided access token has expired.
     *
     * Example of an ErrorInfo when the request is calling Cloud Storage service
     * with an expired access token:
     *
     *     { "reason": "ACCESS_TOKEN_EXPIRED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "service": "storage.googleapis.com",
     *         "method": "google.storage.v1.Storage.GetObject"
     *       }
     *     }
     *
     * @generated from protobuf enum value: ACCESS_TOKEN_EXPIRED = 16;
     */
    ACCESS_TOKEN_EXPIRED = 16,
    /**
     * The request is denied because the provided access token doesn't have at
     * least one of the acceptable scopes required for the API. Please check
     * [OAuth 2.0 Scopes for Google
     * APIs](https://developers.google.com/identity/protocols/oauth2/scopes) for
     * the list of the OAuth 2.0 scopes that you might need to request to access
     * the API.
     *
     * Example of an ErrorInfo when the request is calling Cloud Storage service
     * with an access token that is missing required scopes:
     *
     *     { "reason": "ACCESS_TOKEN_SCOPE_INSUFFICIENT",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "service": "storage.googleapis.com",
     *         "method": "google.storage.v1.Storage.GetObject"
     *       }
     *     }
     *
     * @generated from protobuf enum value: ACCESS_TOKEN_SCOPE_INSUFFICIENT = 17;
     */
    ACCESS_TOKEN_SCOPE_INSUFFICIENT = 17,
    /**
     * The request is denied because the account associated with the provided
     * access token is in an invalid state, such as disabled or deleted.
     * For more information, see https://cloud.google.com/docs/authentication.
     *
     * Warning: For privacy reasons, the server may not be able to disclose the
     * email address for some accounts. The client MUST NOT depend on the
     * availability of the `email` attribute.
     *
     * Example of an ErrorInfo when the request is to the Cloud Storage API with
     * an access token that is associated with a disabled or deleted [service
     * account](http://cloud/iam/docs/service-accounts):
     *
     *     { "reason": "ACCOUNT_STATE_INVALID",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "service": "storage.googleapis.com",
     *         "method": "google.storage.v1.Storage.GetObject",
     *         "email": "user@123.iam.gserviceaccount.com"
     *       }
     *     }
     *
     * @generated from protobuf enum value: ACCOUNT_STATE_INVALID = 18;
     */
    ACCOUNT_STATE_INVALID = 18,
    /**
     * The request is denied because the type of the provided access token is not
     * supported by the API being called.
     *
     * Example of an ErrorInfo when the request is to the Cloud Storage API with
     * an unsupported token type.
     *
     *     { "reason": "ACCESS_TOKEN_TYPE_UNSUPPORTED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "service": "storage.googleapis.com",
     *         "method": "google.storage.v1.Storage.GetObject"
     *       }
     *     }
     *
     * @generated from protobuf enum value: ACCESS_TOKEN_TYPE_UNSUPPORTED = 19;
     */
    ACCESS_TOKEN_TYPE_UNSUPPORTED = 19
}
