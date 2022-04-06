// Code generated by protoc-gen-go. DO NOT EDIT.
// source: google/ads/googleads/v3/errors/resource_count_limit_exceeded_error.proto

package errors

import (
	fmt "fmt"
	math "math"

	proto "github.com/golang/protobuf/proto"
	_ "google.golang.org/genproto/googleapis/api/annotations"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

// Enum describing possible resource count limit exceeded errors.
type ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError int32

const (
	// Enum unspecified.
	ResourceCountLimitExceededErrorEnum_UNSPECIFIED ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError = 0
	// The received error code is not known in this version.
	ResourceCountLimitExceededErrorEnum_UNKNOWN ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError = 1
	// Indicates that this request would exceed the number of allowed resources
	// for the Google Ads account. The exact resource type and limit being
	// checked can be inferred from accountLimitType.
	ResourceCountLimitExceededErrorEnum_ACCOUNT_LIMIT ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError = 2
	// Indicates that this request would exceed the number of allowed resources
	// in a Campaign. The exact resource type and limit being checked can be
	// inferred from accountLimitType, and the numeric id of the
	// Campaign involved is given by enclosingId.
	ResourceCountLimitExceededErrorEnum_CAMPAIGN_LIMIT ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError = 3
	// Indicates that this request would exceed the number of allowed resources
	// in an ad group. The exact resource type and limit being checked can be
	// inferred from accountLimitType, and the numeric id of the
	// ad group involved is given by enclosingId.
	ResourceCountLimitExceededErrorEnum_ADGROUP_LIMIT ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError = 4
	// Indicates that this request would exceed the number of allowed resources
	// in an ad group ad. The exact resource type and limit being checked can
	// be inferred from accountLimitType, and the enclosingId
	// contains the ad group id followed by the ad id, separated by a single
	// comma (,).
	ResourceCountLimitExceededErrorEnum_AD_GROUP_AD_LIMIT ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError = 5
	// Indicates that this request would exceed the number of allowed resources
	// in an ad group criterion. The exact resource type and limit being checked
	// can be inferred from accountLimitType, and the
	// enclosingId contains the ad group id followed by the
	// criterion id, separated by a single comma (,).
	ResourceCountLimitExceededErrorEnum_AD_GROUP_CRITERION_LIMIT ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError = 6
	// Indicates that this request would exceed the number of allowed resources
	// in this shared set. The exact resource type and limit being checked can
	// be inferred from accountLimitType, and the numeric id of the
	// shared set involved is given by enclosingId.
	ResourceCountLimitExceededErrorEnum_SHARED_SET_LIMIT ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError = 7
	// Exceeds a limit related to a matching function.
	ResourceCountLimitExceededErrorEnum_MATCHING_FUNCTION_LIMIT ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError = 8
	// The response for this request would exceed the maximum number of rows
	// that can be returned.
	ResourceCountLimitExceededErrorEnum_RESPONSE_ROW_LIMIT_EXCEEDED ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError = 9
	// This request would exceed a limit on the number of allowed resources.
	// The details of which type of limit was exceeded will eventually be
	// returned in ErrorDetails.
	ResourceCountLimitExceededErrorEnum_RESOURCE_LIMIT ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError = 10
)

var ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError_name = map[int32]string{
	0:  "UNSPECIFIED",
	1:  "UNKNOWN",
	2:  "ACCOUNT_LIMIT",
	3:  "CAMPAIGN_LIMIT",
	4:  "ADGROUP_LIMIT",
	5:  "AD_GROUP_AD_LIMIT",
	6:  "AD_GROUP_CRITERION_LIMIT",
	7:  "SHARED_SET_LIMIT",
	8:  "MATCHING_FUNCTION_LIMIT",
	9:  "RESPONSE_ROW_LIMIT_EXCEEDED",
	10: "RESOURCE_LIMIT",
}

var ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError_value = map[string]int32{
	"UNSPECIFIED":                 0,
	"UNKNOWN":                     1,
	"ACCOUNT_LIMIT":               2,
	"CAMPAIGN_LIMIT":              3,
	"ADGROUP_LIMIT":               4,
	"AD_GROUP_AD_LIMIT":           5,
	"AD_GROUP_CRITERION_LIMIT":    6,
	"SHARED_SET_LIMIT":            7,
	"MATCHING_FUNCTION_LIMIT":     8,
	"RESPONSE_ROW_LIMIT_EXCEEDED": 9,
	"RESOURCE_LIMIT":              10,
}

func (x ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError) String() string {
	return proto.EnumName(ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError_name, int32(x))
}

func (ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_637849f04cc1d370, []int{0, 0}
}

// Container for enum describing possible resource count limit exceeded errors.
type ResourceCountLimitExceededErrorEnum struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ResourceCountLimitExceededErrorEnum) Reset()         { *m = ResourceCountLimitExceededErrorEnum{} }
func (m *ResourceCountLimitExceededErrorEnum) String() string { return proto.CompactTextString(m) }
func (*ResourceCountLimitExceededErrorEnum) ProtoMessage()    {}
func (*ResourceCountLimitExceededErrorEnum) Descriptor() ([]byte, []int) {
	return fileDescriptor_637849f04cc1d370, []int{0}
}

func (m *ResourceCountLimitExceededErrorEnum) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ResourceCountLimitExceededErrorEnum.Unmarshal(m, b)
}
func (m *ResourceCountLimitExceededErrorEnum) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ResourceCountLimitExceededErrorEnum.Marshal(b, m, deterministic)
}
func (m *ResourceCountLimitExceededErrorEnum) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ResourceCountLimitExceededErrorEnum.Merge(m, src)
}
func (m *ResourceCountLimitExceededErrorEnum) XXX_Size() int {
	return xxx_messageInfo_ResourceCountLimitExceededErrorEnum.Size(m)
}
func (m *ResourceCountLimitExceededErrorEnum) XXX_DiscardUnknown() {
	xxx_messageInfo_ResourceCountLimitExceededErrorEnum.DiscardUnknown(m)
}

var xxx_messageInfo_ResourceCountLimitExceededErrorEnum proto.InternalMessageInfo

func init() {
	proto.RegisterEnum("google.ads.googleads.v3.errors.ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError", ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError_name, ResourceCountLimitExceededErrorEnum_ResourceCountLimitExceededError_value)
	proto.RegisterType((*ResourceCountLimitExceededErrorEnum)(nil), "google.ads.googleads.v3.errors.ResourceCountLimitExceededErrorEnum")
}

func init() {
	proto.RegisterFile("google/ads/googleads/v3/errors/resource_count_limit_exceeded_error.proto", fileDescriptor_637849f04cc1d370)
}

var fileDescriptor_637849f04cc1d370 = []byte{
	// 440 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x92, 0xd1, 0x6e, 0xd3, 0x30,
	0x18, 0x85, 0x69, 0x06, 0x1b, 0x78, 0x02, 0x32, 0x0b, 0x04, 0x62, 0xd3, 0x26, 0x15, 0xae, 0x9d,
	0x8b, 0xdc, 0x85, 0x2b, 0xcf, 0xf1, 0xd2, 0x88, 0xd5, 0x89, 0x9c, 0xa4, 0x43, 0xa8, 0x92, 0x15,
	0x1a, 0x2b, 0x8a, 0xd4, 0xc6, 0x55, 0x9c, 0x4e, 0x3c, 0x09, 0x0f, 0xc0, 0x25, 0x0f, 0xc1, 0x03,
	0xf0, 0x28, 0xbc, 0x04, 0x28, 0x71, 0x52, 0xae, 0xa0, 0x57, 0xf9, 0x75, 0xf4, 0x9d, 0x73, 0xac,
	0xfc, 0x3f, 0x98, 0x95, 0x4a, 0x95, 0x6b, 0xe9, 0xe4, 0x85, 0x76, 0xcc, 0xd8, 0x4d, 0xf7, 0xae,
	0x23, 0x9b, 0x46, 0x35, 0xda, 0x69, 0xa4, 0x56, 0xbb, 0x66, 0x25, 0xc5, 0x4a, 0xed, 0xea, 0x56,
	0xac, 0xab, 0x4d, 0xd5, 0x0a, 0xf9, 0x65, 0x25, 0x65, 0x21, 0x0b, 0xd1, 0x43, 0x68, 0xdb, 0xa8,
	0x56, 0xc1, 0x4b, 0x63, 0x47, 0x79, 0xa1, 0xd1, 0x3e, 0x09, 0xdd, 0xbb, 0xc8, 0x24, 0xbd, 0xb9,
	0x18, 0x9b, 0xb6, 0x95, 0x93, 0xd7, 0xb5, 0x6a, 0xf3, 0xb6, 0x52, 0xb5, 0x36, 0xee, 0xe9, 0x0f,
	0x0b, 0xbc, 0xe5, 0x43, 0x17, 0xe9, 0xaa, 0x6e, 0xbb, 0x26, 0x3a, 0x14, 0xd1, 0x2e, 0x82, 0xd6,
	0xbb, 0xcd, 0xf4, 0xab, 0x05, 0xae, 0x0e, 0x70, 0xf0, 0x39, 0x38, 0xcd, 0x58, 0x12, 0x53, 0x12,
	0xde, 0x84, 0xd4, 0xb7, 0x1f, 0xc0, 0x53, 0x70, 0x92, 0xb1, 0x0f, 0x2c, 0xba, 0x63, 0xf6, 0x04,
	0x9e, 0x81, 0xa7, 0x98, 0x90, 0x28, 0x63, 0xa9, 0xb8, 0x0d, 0xe7, 0x61, 0x6a, 0x5b, 0x10, 0x82,
	0x67, 0x04, 0xcf, 0x63, 0x1c, 0x06, 0x6c, 0xd0, 0x8e, 0x7a, 0xcc, 0x0f, 0x78, 0x94, 0xc5, 0x83,
	0xf4, 0x10, 0xbe, 0x04, 0x67, 0xd8, 0x17, 0x46, 0xc3, 0xfe, 0x20, 0x3f, 0x82, 0x17, 0xe0, 0xf5,
	0x5e, 0x26, 0x3c, 0x4c, 0x29, 0x0f, 0xa3, 0x31, 0xe7, 0x18, 0xbe, 0x00, 0x76, 0x32, 0xc3, 0x9c,
	0xfa, 0x22, 0xa1, 0x63, 0xe3, 0x09, 0x3c, 0x07, 0xaf, 0xe6, 0x38, 0x25, 0xb3, 0x90, 0x05, 0xe2,
	0x26, 0x63, 0x24, 0xfd, 0x6b, 0x79, 0x0c, 0xaf, 0xc0, 0x39, 0xa7, 0x49, 0x1c, 0xb1, 0x84, 0x0a,
	0x1e, 0xdd, 0x19, 0x5d, 0xd0, 0x8f, 0x84, 0x52, 0x9f, 0xfa, 0xf6, 0x93, 0xee, 0xbd, 0x9c, 0x26,
	0x51, 0xc6, 0x09, 0x1d, 0x4c, 0xe0, 0xfa, 0xf7, 0x04, 0x4c, 0x57, 0x6a, 0x83, 0xfe, 0xbf, 0x85,
	0xeb, 0x77, 0x07, 0x7e, 0x5e, 0xdc, 0x6d, 0x23, 0x9e, 0x7c, 0xf2, 0x87, 0x9c, 0x52, 0xad, 0xf3,
	0xba, 0x44, 0xaa, 0x29, 0x9d, 0x52, 0xd6, 0xfd, 0xae, 0xc6, 0x3b, 0xd9, 0x56, 0xfa, 0x5f, 0x67,
	0xf3, 0xde, 0x7c, 0xbe, 0x59, 0x47, 0x01, 0xc6, 0xdf, 0xad, 0xcb, 0xc0, 0x84, 0xe1, 0x42, 0x23,
	0x33, 0x76, 0xd3, 0xc2, 0x45, 0x7d, 0xa5, 0xfe, 0x39, 0x02, 0x4b, 0x5c, 0xe8, 0xe5, 0x1e, 0x58,
	0x2e, 0xdc, 0xa5, 0x01, 0x7e, 0x59, 0x53, 0xa3, 0x7a, 0x1e, 0x2e, 0xb4, 0xe7, 0xed, 0x11, 0xcf,
	0x5b, 0xb8, 0x9e, 0x67, 0xa0, 0xcf, 0xc7, 0xfd, 0xeb, 0xdc, 0x3f, 0x01, 0x00, 0x00, 0xff, 0xff,
	0xa5, 0x01, 0x0f, 0x4c, 0xd3, 0x02, 0x00, 0x00,
}
