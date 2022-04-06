// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace google.api.serviceusage.v1beta1 {

    export enum State {
        STATE_UNSPECIFIED = "STATE_UNSPECIFIED",
        DISABLED = "DISABLED",
        ENABLED = "ENABLED",
    }
    export enum QuotaView {
        QUOTA_VIEW_UNSPECIFIED = "QUOTA_VIEW_UNSPECIFIED",
        BASIC = "BASIC",
        FULL = "FULL",
    }
    export enum QuotaSafetyCheck {
        QUOTA_SAFETY_CHECK_UNSPECIFIED = "QUOTA_SAFETY_CHECK_UNSPECIFIED",
        LIMIT_DECREASE_BELOW_USAGE = "LIMIT_DECREASE_BELOW_USAGE",
        LIMIT_DECREASE_PERCENTAGE_TOO_HIGH = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH",
    }
    // A service that is available for use by the consumer.
    export interface Service {
        // The resource name of the consumer and service.
        //
        // A valid name would be:
        // - `projects/123/services/serviceusage.googleapis.com`
        name?: string;
        // The resource name of the consumer.
        //
        // A valid name would be:
        // - `projects/123`
        parent?: string;
        // The service configuration of the available service.
        // Some fields may be filtered out of the configuration in responses to
        // the `ListServices` method. These fields are present only in responses to
        // the `GetService` method.
        config?: ServiceConfig;
        // Whether or not the service has been enabled for use by the consumer.
        state?: State;
    }

    // The configuration of the service.
    export interface ServiceConfig {
        // The DNS address at which this service is available.
        //
        // An example DNS address would be:
        // `calendar.googleapis.com`.
        name?: string;
        // The product title for this service.
        title?: string;
        // A list of API interfaces exported by this service. Contains only the names,
        // versions, and method names of the interfaces.
        apis?: Array<google.protobuf.Api>;
        // Additional API documentation. Contains only the summary and the
        // documentation URL.
        documentation?: google.api.Documentation;
        // Quota configuration.
        quota?: google.api.Quota;
        // Auth configuration. Contains only the OAuth rules.
        authentication?: google.api.Authentication;
        // Configuration controlling usage of this service.
        usage?: google.api.Usage;
        // Configuration for network endpoints. Contains only the names and aliases
        // of the endpoints.
        endpoints?: Array<google.api.Endpoint>;
        // Defines the monitored resources used by this service. This is required
        // by the [Service.monitoring][google.api.Service.monitoring] and [Service.logging][google.api.Service.logging] configurations.
        monitored_resources?: Array<google.api.MonitoredResourceDescriptor>;
        // Monitoring configuration.
        // This should not include the 'producer_destinations' field.
        monitoring?: google.api.Monitoring;
    }

    // The operation metadata returned for the batchend services operation.
    export interface OperationMetadata {
        // The full name of the resources that this operation is directly
        // associated with.
        resource_names?: Array<string>;
    }

    // Consumer quota settings for a quota metric.
    export interface ConsumerQuotaMetric {
        // The resource name of the quota settings on this metric for this consumer.
        //
        // An example name would be:
        // `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus`
        //
        // The resource name is intended to be opaque and should not be parsed for
        // its component strings, since its representation could change in the future.
        name?: string;
        // The name of the metric.
        //
        // An example name would be:
        // `compute.googleapis.com/cpus`
        metric?: string;
        // The display name of the metric.
        //
        // An example name would be:
        // `CPUs`
        display_name?: string;
        // The consumer quota for each quota limit defined on the metric.
        consumer_quota_limits?: Array<ConsumerQuotaLimit>;
        // The quota limits targeting the descendant containers of the
        // consumer in request.
        //
        // If the consumer in request is of type `organizations`
        // or `folders`, the field will list per-project limits in the metric; if the
        // consumer in request is of type `project`, the field will be empty.
        //
        // The `quota_buckets` field of each descendant consumer quota limit will not
        // be populated.
        descendant_consumer_quota_limits?: Array<ConsumerQuotaLimit>;
        // The units in which the metric value is reported.
        unit?: string;
    }

    // Consumer quota settings for a quota limit.
    export interface ConsumerQuotaLimit {
        // The resource name of the quota limit.
        //
        // An example name would be:
        // `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
        //
        // The resource name is intended to be opaque and should not be parsed for
        // its component strings, since its representation could change in the future.
        name?: string;
        // The name of the parent metric of this limit.
        //
        // An example name would be:
        // `compute.googleapis.com/cpus`
        metric?: string;
        // The limit unit.
        //
        // An example unit would be
        // `1/{project}/{region}`
        // Note that `{project}` and `{region}` are not placeholders in this example;
        // the literal characters `{` and `}` occur in the string.
        unit?: string;
        // Whether this limit is precise or imprecise.
        is_precise?: boolean;
        // Whether admin overrides are allowed on this limit
        allows_admin_overrides?: boolean;
        // Summary of the enforced quota buckets, organized by quota dimension,
        // ordered from least specific to most specific (for example, the global
        // default bucket, with no quota dimensions, will always appear first).
        quota_buckets?: Array<QuotaBucket>;
    }

    export interface QuotaBucket_DimensionsEntry {
        key?: string;
        value?: string;
    }

    // A quota bucket is a quota provisioning unit for a specific set of dimensions.
    export interface QuotaBucket {
        // The effective limit of this quota bucket. Equal to default_limit if there
        // are no overrides.
        effective_limit?: number;
        // The default limit of this quota bucket, as specified by the service
        // configuration.
        default_limit?: number;
        // Producer override on this quota bucket.
        producer_override?: QuotaOverride;
        // Consumer override on this quota bucket.
        consumer_override?: QuotaOverride;
        // Admin override on this quota bucket.
        admin_override?: QuotaOverride;
        // The dimensions of this quota bucket.
        //
        // If this map is empty, this is the global bucket, which is the default quota
        // value applied to all requests that do not have a more specific override.
        //
        // If this map is nonempty, the default limit, effective limit, and quota
        // overrides apply only to requests that have the dimensions given in the map.
        //
        // For example, if the map has key `region` and value `us-east-1`, then the
        // specified effective limit is only effective in that region, and the
        // specified overrides apply only in that region.
        dimensions?: { [key: string]: string };
    }

    export interface QuotaOverride_DimensionsEntry {
        key?: string;
        value?: string;
    }

    // A quota override
    export interface QuotaOverride {
        // The resource name of the override.
        // This name is generated by the server when the override is created.
        //
        // Example names would be:
        // `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/adminOverrides/4a3f2c1d`
        // `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/consumerOverrides/4a3f2c1d`
        //
        // The resource name is intended to be opaque and should not be parsed for
        // its component strings, since its representation could change in the future.
        name?: string;
        // The overriding quota limit value.
        // Can be any nonnegative integer, or -1 (unlimited quota).
        override_value?: number;
        // If this map is nonempty, then this override applies only to specific values
        // for dimensions defined in the limit unit.
        //
        // For example, an override on a limit with the unit `1/{project}/{region}`
        // could contain an entry with the key `region` and the value `us-east-1`;
        // the override is only applied to quota consumed in that region.
        //
        // This map has the following restrictions:
        //
        // *   Keys that are not defined in the limit's unit are not valid keys.
        //     Any string appearing in `{brackets}` in the unit (besides `{project}`
        //     or
        //     `{user}`) is a defined key.
        // *   `project` is not a valid key; the project is already specified in
        //     the parent resource name.
        // *   `user` is not a valid key; the API does not support quota overrides
        //     that apply only to a specific user.
        // *   If `region` appears as a key, its value must be a valid Cloud region.
        // *   If `zone` appears as a key, its value must be a valid Cloud zone.
        // *   If any valid key other than `region` or `zone` appears in the map, then
        //     all valid keys other than `region` or `zone` must also appear in the
        //     map.
        dimensions?: { [key: string]: string };
        // The name of the metric to which this override applies.
        //
        // An example name would be:
        // `compute.googleapis.com/cpus`
        metric?: string;
        // The limit unit of the limit to which this override applies.
        //
        // An example unit would be:
        // `1/{project}/{region}`
        // Note that `{project}` and `{region}` are not placeholders in this example;
        // the literal characters `{` and `}` occur in the string.
        unit?: string;
        // The resource name of the ancestor that requested the override. For example:
        // `organizations/12345` or `folders/67890`.
        // Used by admin overrides only.
        admin_override_ancestor?: string;
    }

    // Import data embedded in the request message
    export interface OverrideInlineSource {
        // The overrides to create.
        // Each override must have a value for 'metric' and 'unit', to specify
        // which metric and which limit the override should be applied to.
        // The 'name' field of the override does not need to be set; it is ignored.
        overrides?: Array<QuotaOverride>;
    }

    export interface AdminQuotaPolicy_DimensionsEntry {
        key?: string;
        value?: string;
    }

    // Quota policy created by quota administrator.
    export interface AdminQuotaPolicy {
        // The resource name of the policy.
        // This name is generated by the server when the policy is created.
        //
        // Example names would be:
        // `organizations/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/adminQuotaPolicies/4a3f2c1d`
        name?: string;
        // The quota policy value.
        // Can be any nonnegative integer, or -1 (unlimited quota).
        policy_value?: number;
        //
        // If this map is nonempty, then this policy applies only to specific values
        // for dimensions defined in the limit unit.
        //
        // For example, an policy on a limit with the unit `1/{project}/{region}`
        // could contain an entry with the key `region` and the value `us-east-1`;
        // the policy is only applied to quota consumed in that region.
        //
        // This map has the following restrictions:
        //
        // *   If `region` appears as a key, its value must be a valid Cloud region.
        // *   If `zone` appears as a key, its value must be a valid Cloud zone.
        // *   Keys other than `region` or `zone` are not valid.
        dimensions?: { [key: string]: string };
        // The name of the metric to which this policy applies.
        //
        // An example name would be:
        // `compute.googleapis.com/cpus`
        metric?: string;
        // The limit unit of the limit to which this policy applies.
        //
        // An example unit would be:
        // `1/{project}/{region}`
        // Note that `{project}` and `{region}` are not placeholders in this example;
        // the literal characters `{` and `}` occur in the string.
        unit?: string;
        // The cloud resource container at which the quota policy is created. The
        // format is `{container_type}/{container_number}`
        container?: string;
    }

    // Service identity for a service. This is the identity that service producer
    // should use to access consumer resources.
    export interface ServiceIdentity {
        // The email address of the service account that a service producer would use
        // to access consumer resources.
        email?: string;
        // The unique and stable id of the service account.
        // https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts#ServiceAccount
        unique_id?: string;
    }

}

