// Code generated by protoc-gen-go. DO NOT EDIT.
// source: google/ads/googleads/v3/enums/job_placeholder_field.proto

package enums

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

// Possible values for Job placeholder fields.
type JobPlaceholderFieldEnum_JobPlaceholderField int32

const (
	// Not specified.
	JobPlaceholderFieldEnum_UNSPECIFIED JobPlaceholderFieldEnum_JobPlaceholderField = 0
	// Used for return value only. Represents value unknown in this version.
	JobPlaceholderFieldEnum_UNKNOWN JobPlaceholderFieldEnum_JobPlaceholderField = 1
	// Data Type: STRING. Required. If only JOB_ID is specified, then it must be
	// unique. If both JOB_ID and LOCATION_ID are specified, then the
	// pair must be unique.
	// ID) pair must be unique.
	JobPlaceholderFieldEnum_JOB_ID JobPlaceholderFieldEnum_JobPlaceholderField = 2
	// Data Type: STRING. Combination of JOB_ID and LOCATION_ID must be unique
	// per offer.
	JobPlaceholderFieldEnum_LOCATION_ID JobPlaceholderFieldEnum_JobPlaceholderField = 3
	// Data Type: STRING. Required. Main headline with job title to be shown in
	// dynamic ad.
	JobPlaceholderFieldEnum_TITLE JobPlaceholderFieldEnum_JobPlaceholderField = 4
	// Data Type: STRING. Job subtitle to be shown in dynamic ad.
	JobPlaceholderFieldEnum_SUBTITLE JobPlaceholderFieldEnum_JobPlaceholderField = 5
	// Data Type: STRING. Description of job to be shown in dynamic ad.
	JobPlaceholderFieldEnum_DESCRIPTION JobPlaceholderFieldEnum_JobPlaceholderField = 6
	// Data Type: URL. Image to be displayed in the ad. Highly recommended for
	// image ads.
	JobPlaceholderFieldEnum_IMAGE_URL JobPlaceholderFieldEnum_JobPlaceholderField = 7
	// Data Type: STRING. Category of property used to group like items together
	// for recommendation engine.
	JobPlaceholderFieldEnum_CATEGORY JobPlaceholderFieldEnum_JobPlaceholderField = 8
	// Data Type: STRING_LIST. Keywords used for product retrieval.
	JobPlaceholderFieldEnum_CONTEXTUAL_KEYWORDS JobPlaceholderFieldEnum_JobPlaceholderField = 9
	// Data Type: STRING. Complete property address, including postal code.
	JobPlaceholderFieldEnum_ADDRESS JobPlaceholderFieldEnum_JobPlaceholderField = 10
	// Data Type: STRING. Salary or salary range of job to be shown in dynamic
	// ad.
	JobPlaceholderFieldEnum_SALARY JobPlaceholderFieldEnum_JobPlaceholderField = 11
	// Data Type: URL_LIST. Required. Final URLs to be used in ad when using
	// Upgraded URLs; the more specific the better (e.g. the individual URL of a
	// specific job and its location).
	JobPlaceholderFieldEnum_FINAL_URLS JobPlaceholderFieldEnum_JobPlaceholderField = 12
	// Data Type: URL_LIST. Final mobile URLs for the ad when using Upgraded
	// URLs.
	JobPlaceholderFieldEnum_FINAL_MOBILE_URLS JobPlaceholderFieldEnum_JobPlaceholderField = 14
	// Data Type: URL. Tracking template for the ad when using Upgraded URLs.
	JobPlaceholderFieldEnum_TRACKING_URL JobPlaceholderFieldEnum_JobPlaceholderField = 15
	// Data Type: STRING. Android app link. Must be formatted as:
	// android-app://{package_id}/{scheme}/{host_path}.
	// The components are defined as follows:
	// package_id: app ID as specified in Google Play.
	// scheme: the scheme to pass to the application. Can be HTTP, or a custom
	//   scheme.
	// host_path: identifies the specific content within your application.
	JobPlaceholderFieldEnum_ANDROID_APP_LINK JobPlaceholderFieldEnum_JobPlaceholderField = 16
	// Data Type: STRING_LIST. List of recommended job IDs to show together with
	// this item.
	JobPlaceholderFieldEnum_SIMILAR_JOB_IDS JobPlaceholderFieldEnum_JobPlaceholderField = 17
	// Data Type: STRING. iOS app link.
	JobPlaceholderFieldEnum_IOS_APP_LINK JobPlaceholderFieldEnum_JobPlaceholderField = 18
	// Data Type: INT64. iOS app store ID.
	JobPlaceholderFieldEnum_IOS_APP_STORE_ID JobPlaceholderFieldEnum_JobPlaceholderField = 19
)

var JobPlaceholderFieldEnum_JobPlaceholderField_name = map[int32]string{
	0:  "UNSPECIFIED",
	1:  "UNKNOWN",
	2:  "JOB_ID",
	3:  "LOCATION_ID",
	4:  "TITLE",
	5:  "SUBTITLE",
	6:  "DESCRIPTION",
	7:  "IMAGE_URL",
	8:  "CATEGORY",
	9:  "CONTEXTUAL_KEYWORDS",
	10: "ADDRESS",
	11: "SALARY",
	12: "FINAL_URLS",
	14: "FINAL_MOBILE_URLS",
	15: "TRACKING_URL",
	16: "ANDROID_APP_LINK",
	17: "SIMILAR_JOB_IDS",
	18: "IOS_APP_LINK",
	19: "IOS_APP_STORE_ID",
}

var JobPlaceholderFieldEnum_JobPlaceholderField_value = map[string]int32{
	"UNSPECIFIED":         0,
	"UNKNOWN":             1,
	"JOB_ID":              2,
	"LOCATION_ID":         3,
	"TITLE":               4,
	"SUBTITLE":            5,
	"DESCRIPTION":         6,
	"IMAGE_URL":           7,
	"CATEGORY":            8,
	"CONTEXTUAL_KEYWORDS": 9,
	"ADDRESS":             10,
	"SALARY":              11,
	"FINAL_URLS":          12,
	"FINAL_MOBILE_URLS":   14,
	"TRACKING_URL":        15,
	"ANDROID_APP_LINK":    16,
	"SIMILAR_JOB_IDS":     17,
	"IOS_APP_LINK":        18,
	"IOS_APP_STORE_ID":    19,
}

func (x JobPlaceholderFieldEnum_JobPlaceholderField) String() string {
	return proto.EnumName(JobPlaceholderFieldEnum_JobPlaceholderField_name, int32(x))
}

func (JobPlaceholderFieldEnum_JobPlaceholderField) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_a7c8492101f9a12a, []int{0, 0}
}

// Values for Job placeholder fields.
// For more information about dynamic remarketing feeds, see
// https://support.google.com/google-ads/answer/6053288.
type JobPlaceholderFieldEnum struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *JobPlaceholderFieldEnum) Reset()         { *m = JobPlaceholderFieldEnum{} }
func (m *JobPlaceholderFieldEnum) String() string { return proto.CompactTextString(m) }
func (*JobPlaceholderFieldEnum) ProtoMessage()    {}
func (*JobPlaceholderFieldEnum) Descriptor() ([]byte, []int) {
	return fileDescriptor_a7c8492101f9a12a, []int{0}
}

func (m *JobPlaceholderFieldEnum) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_JobPlaceholderFieldEnum.Unmarshal(m, b)
}
func (m *JobPlaceholderFieldEnum) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_JobPlaceholderFieldEnum.Marshal(b, m, deterministic)
}
func (m *JobPlaceholderFieldEnum) XXX_Merge(src proto.Message) {
	xxx_messageInfo_JobPlaceholderFieldEnum.Merge(m, src)
}
func (m *JobPlaceholderFieldEnum) XXX_Size() int {
	return xxx_messageInfo_JobPlaceholderFieldEnum.Size(m)
}
func (m *JobPlaceholderFieldEnum) XXX_DiscardUnknown() {
	xxx_messageInfo_JobPlaceholderFieldEnum.DiscardUnknown(m)
}

var xxx_messageInfo_JobPlaceholderFieldEnum proto.InternalMessageInfo

func init() {
	proto.RegisterEnum("google.ads.googleads.v3.enums.JobPlaceholderFieldEnum_JobPlaceholderField", JobPlaceholderFieldEnum_JobPlaceholderField_name, JobPlaceholderFieldEnum_JobPlaceholderField_value)
	proto.RegisterType((*JobPlaceholderFieldEnum)(nil), "google.ads.googleads.v3.enums.JobPlaceholderFieldEnum")
}

func init() {
	proto.RegisterFile("google/ads/googleads/v3/enums/job_placeholder_field.proto", fileDescriptor_a7c8492101f9a12a)
}

var fileDescriptor_a7c8492101f9a12a = []byte{
	// 494 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x92, 0x41, 0x6f, 0xd3, 0x30,
	0x14, 0xc7, 0x59, 0xc6, 0xba, 0xd5, 0x2d, 0xab, 0xe7, 0x82, 0x26, 0x10, 0x3b, 0x6c, 0x1f, 0x20,
	0x39, 0xe4, 0x44, 0x38, 0x39, 0x89, 0x5b, 0xb9, 0x4d, 0xe3, 0x28, 0x4e, 0x3b, 0x8a, 0x2a, 0x45,
	0xe9, 0x12, 0x42, 0x51, 0x1a, 0x57, 0x75, 0xb7, 0x0f, 0xc4, 0x91, 0x8f, 0xc2, 0x9d, 0x2f, 0xc1,
	0x01, 0x89, 0x6f, 0x80, 0x1c, 0xd3, 0x4e, 0x42, 0xc0, 0x25, 0x7a, 0x7e, 0xef, 0xf7, 0xff, 0xe7,
	0xd9, 0xef, 0x81, 0x37, 0xa5, 0x10, 0x65, 0x55, 0x58, 0x59, 0x2e, 0x2d, 0x1d, 0xaa, 0xe8, 0xc1,
	0xb6, 0x8a, 0xfa, 0x7e, 0x2d, 0xad, 0x4f, 0x62, 0x99, 0x6e, 0xaa, 0xec, 0xae, 0xf8, 0x28, 0xaa,
	0xbc, 0xd8, 0xa6, 0x1f, 0x56, 0x45, 0x95, 0x9b, 0x9b, 0xad, 0xd8, 0x09, 0x74, 0xa5, 0x79, 0x33,
	0xcb, 0xa5, 0x79, 0x90, 0x9a, 0x0f, 0xb6, 0xd9, 0x48, 0x5f, 0xbd, 0xde, 0x3b, 0x6f, 0x56, 0x56,
	0x56, 0xd7, 0x62, 0x97, 0xed, 0x56, 0xa2, 0x96, 0x5a, 0x7c, 0xf3, 0xd3, 0x00, 0x97, 0x23, 0xb1,
	0x8c, 0x1e, 0xbd, 0x07, 0xca, 0x9a, 0xd4, 0xf7, 0xeb, 0x9b, 0x6f, 0x06, 0xe8, 0xff, 0xa5, 0x86,
	0x7a, 0xa0, 0x33, 0x0d, 0x79, 0x44, 0x3c, 0x3a, 0xa0, 0xc4, 0x87, 0x4f, 0x50, 0x07, 0x9c, 0x4e,
	0xc3, 0x71, 0xc8, 0x6e, 0x43, 0x78, 0x84, 0x00, 0x68, 0x8d, 0x98, 0x9b, 0x52, 0x1f, 0x1a, 0x8a,
	0x0c, 0x98, 0x87, 0x13, 0xca, 0x42, 0x95, 0x38, 0x46, 0x6d, 0x70, 0x92, 0xd0, 0x24, 0x20, 0xf0,
	0x29, 0xea, 0x82, 0x33, 0x3e, 0x75, 0xf5, 0xe9, 0x44, 0x91, 0x3e, 0xe1, 0x5e, 0x4c, 0x23, 0x05,
	0xc3, 0x16, 0x7a, 0x06, 0xda, 0x74, 0x82, 0x87, 0x24, 0x9d, 0xc6, 0x01, 0x3c, 0x55, 0xb4, 0x87,
	0x13, 0x32, 0x64, 0xf1, 0x1c, 0x9e, 0xa1, 0x4b, 0xd0, 0xf7, 0x58, 0x98, 0x90, 0x77, 0xc9, 0x14,
	0x07, 0xe9, 0x98, 0xcc, 0x6f, 0x59, 0xec, 0x73, 0xd8, 0x56, 0x9d, 0x60, 0xdf, 0x8f, 0x09, 0xe7,
	0x10, 0xa8, 0x4e, 0x38, 0x0e, 0x70, 0x3c, 0x87, 0x1d, 0x74, 0x0e, 0xc0, 0x80, 0x86, 0x38, 0x50,
	0x76, 0x1c, 0x76, 0xd1, 0x0b, 0x70, 0xa1, 0xcf, 0x13, 0xe6, 0xd2, 0x80, 0xe8, 0xf4, 0x39, 0x82,
	0xa0, 0x9b, 0xc4, 0xd8, 0x1b, 0xd3, 0x70, 0xd8, 0xfc, 0xb8, 0x87, 0x9e, 0x03, 0x88, 0x43, 0x3f,
	0x66, 0xd4, 0x4f, 0x71, 0x14, 0xa5, 0x01, 0x0d, 0xc7, 0x10, 0xa2, 0x3e, 0xe8, 0x71, 0x3a, 0xa1,
	0x01, 0x8e, 0x53, 0x7d, 0x59, 0x0e, 0x2f, 0x94, 0x98, 0x32, 0xfe, 0x88, 0x21, 0x25, 0xde, 0x67,
	0x78, 0xc2, 0x62, 0xa2, 0x1e, 0xa1, 0xef, 0xfe, 0x38, 0x02, 0xd7, 0x77, 0x62, 0x6d, 0xfe, 0x77,
	0x6e, 0xee, 0xcb, 0x91, 0x58, 0xca, 0x3f, 0xdf, 0x3e, 0x52, 0x43, 0x8b, 0x8e, 0xde, 0xbb, 0xbf,
	0xb5, 0xa5, 0xa8, 0xb2, 0xba, 0x34, 0xc5, 0xb6, 0xb4, 0xca, 0xa2, 0x6e, 0x46, 0xba, 0x5f, 0x9f,
	0xcd, 0x4a, 0xfe, 0x63, 0x9b, 0xde, 0x36, 0xdf, 0xcf, 0xc6, 0xf1, 0x10, 0xe3, 0x2f, 0xc6, 0xd5,
	0x50, 0x5b, 0xe1, 0x5c, 0x9a, 0x3a, 0x54, 0xd1, 0xcc, 0x36, 0xd5, 0x0e, 0xc8, 0xaf, 0xfb, 0xfa,
	0x02, 0xe7, 0x72, 0x71, 0xa8, 0x2f, 0x66, 0xf6, 0xa2, 0xa9, 0x7f, 0x37, 0xae, 0x75, 0xd2, 0x71,
	0x70, 0x2e, 0x1d, 0xe7, 0x40, 0x38, 0xce, 0xcc, 0x76, 0x9c, 0x86, 0x59, 0xb6, 0x9a, 0xc6, 0xec,
	0x5f, 0x01, 0x00, 0x00, 0xff, 0xff, 0x79, 0x78, 0x3b, 0xfd, 0xe5, 0x02, 0x00, 0x00,
}
