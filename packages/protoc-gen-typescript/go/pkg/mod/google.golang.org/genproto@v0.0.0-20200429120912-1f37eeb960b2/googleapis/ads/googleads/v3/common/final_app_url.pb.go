// Code generated by protoc-gen-go. DO NOT EDIT.
// source: google/ads/googleads/v3/common/final_app_url.proto

package common

import (
	fmt "fmt"
	math "math"

	proto "github.com/golang/protobuf/proto"
	wrappers "github.com/golang/protobuf/ptypes/wrappers"
	enums "google.golang.org/genproto/googleapis/ads/googleads/v3/enums"
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

// A URL for deep linking into an app for the given operating system.
type FinalAppUrl struct {
	// The operating system targeted by this URL. Required.
	OsType enums.AppUrlOperatingSystemTypeEnum_AppUrlOperatingSystemType `protobuf:"varint,1,opt,name=os_type,json=osType,proto3,enum=google.ads.googleads.v3.enums.AppUrlOperatingSystemTypeEnum_AppUrlOperatingSystemType" json:"os_type,omitempty"`
	// The app deep link URL. Deep links specify a location in an app that
	// corresponds to the content you'd like to show, and should be of the form
	// {scheme}://{host_path}
	// The scheme identifies which app to open. For your app, you can use a custom
	// scheme that starts with the app's name. The host and path specify the
	// unique location in the app where your content exists.
	// Example: "exampleapp://productid_1234". Required.
	Url                  *wrappers.StringValue `protobuf:"bytes,2,opt,name=url,proto3" json:"url,omitempty"`
	XXX_NoUnkeyedLiteral struct{}              `json:"-"`
	XXX_unrecognized     []byte                `json:"-"`
	XXX_sizecache        int32                 `json:"-"`
}

func (m *FinalAppUrl) Reset()         { *m = FinalAppUrl{} }
func (m *FinalAppUrl) String() string { return proto.CompactTextString(m) }
func (*FinalAppUrl) ProtoMessage()    {}
func (*FinalAppUrl) Descriptor() ([]byte, []int) {
	return fileDescriptor_5a155cdeb995ff55, []int{0}
}

func (m *FinalAppUrl) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_FinalAppUrl.Unmarshal(m, b)
}
func (m *FinalAppUrl) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_FinalAppUrl.Marshal(b, m, deterministic)
}
func (m *FinalAppUrl) XXX_Merge(src proto.Message) {
	xxx_messageInfo_FinalAppUrl.Merge(m, src)
}
func (m *FinalAppUrl) XXX_Size() int {
	return xxx_messageInfo_FinalAppUrl.Size(m)
}
func (m *FinalAppUrl) XXX_DiscardUnknown() {
	xxx_messageInfo_FinalAppUrl.DiscardUnknown(m)
}

var xxx_messageInfo_FinalAppUrl proto.InternalMessageInfo

func (m *FinalAppUrl) GetOsType() enums.AppUrlOperatingSystemTypeEnum_AppUrlOperatingSystemType {
	if m != nil {
		return m.OsType
	}
	return enums.AppUrlOperatingSystemTypeEnum_UNSPECIFIED
}

func (m *FinalAppUrl) GetUrl() *wrappers.StringValue {
	if m != nil {
		return m.Url
	}
	return nil
}

func init() {
	proto.RegisterType((*FinalAppUrl)(nil), "google.ads.googleads.v3.common.FinalAppUrl")
}

func init() {
	proto.RegisterFile("google/ads/googleads/v3/common/final_app_url.proto", fileDescriptor_5a155cdeb995ff55)
}

var fileDescriptor_5a155cdeb995ff55 = []byte{
	// 355 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x91, 0xbf, 0x6a, 0xc3, 0x30,
	0x10, 0xc6, 0xb1, 0x03, 0x29, 0x38, 0x50, 0x4a, 0xa6, 0x10, 0x42, 0x08, 0x99, 0x32, 0x49, 0x10,
	0x6f, 0xea, 0xe4, 0xf4, 0x4f, 0xc6, 0x86, 0xa4, 0xf5, 0x50, 0x0c, 0x46, 0x89, 0x15, 0x61, 0xb0,
	0x75, 0x42, 0x92, 0x53, 0xf2, 0x3a, 0x1d, 0x3b, 0xf4, 0x41, 0xfa, 0x28, 0xed, 0x4b, 0x14, 0x4b,
	0x76, 0xe8, 0xe2, 0x4e, 0x3a, 0xfb, 0x7e, 0xf7, 0x7d, 0xdf, 0x49, 0xc1, 0x92, 0x03, 0xf0, 0x82,
	0x61, 0x9a, 0x69, 0xec, 0xca, 0xba, 0x3a, 0x85, 0xf8, 0x00, 0x65, 0x09, 0x02, 0x1f, 0x73, 0x41,
	0x8b, 0x94, 0x4a, 0x99, 0x56, 0xaa, 0x40, 0x52, 0x81, 0x81, 0xe1, 0xd4, 0x81, 0x88, 0x66, 0x1a,
	0x5d, 0x66, 0xd0, 0x29, 0x44, 0x6e, 0x66, 0x1c, 0x75, 0x69, 0x32, 0x51, 0x95, 0x1a, 0x37, 0x62,
	0x29, 0x48, 0xa6, 0xa8, 0xc9, 0x05, 0x4f, 0xf5, 0x59, 0x1b, 0x56, 0xa6, 0xe6, 0x2c, 0x99, 0xb3,
	0x18, 0x37, 0x16, 0xd8, 0x7e, 0xed, 0xab, 0x23, 0x7e, 0x53, 0x54, 0x4a, 0xa6, 0x74, 0xd3, 0x9f,
	0xb4, 0x16, 0x32, 0xc7, 0x54, 0x08, 0x30, 0xd4, 0xe4, 0x20, 0x9a, 0xee, 0xfc, 0xd3, 0x0b, 0x06,
	0x8f, 0x75, 0xf0, 0x48, 0xca, 0x17, 0x55, 0x0c, 0x21, 0xb8, 0x02, 0x6d, 0xe5, 0x47, 0xde, 0xcc,
	0x5b, 0x5c, 0x2f, 0x63, 0xd4, 0xb5, 0x82, 0x8d, 0x88, 0xdc, 0xdc, 0x53, 0x1b, 0x70, 0x67, 0xf3,
	0x3d, 0x9f, 0x25, 0x7b, 0x10, 0x55, 0xd9, 0xdd, 0xdd, 0xf6, 0x41, 0xd7, 0xe7, 0x10, 0x05, 0xbd,
	0x4a, 0x15, 0x23, 0x7f, 0xe6, 0x2d, 0x06, 0xcb, 0x49, 0x6b, 0xd6, 0x2e, 0x83, 0x76, 0x46, 0xe5,
	0x82, 0xc7, 0xb4, 0xa8, 0xd8, 0xb6, 0x06, 0x57, 0x3f, 0x5e, 0x30, 0x3f, 0x40, 0x89, 0xfe, 0xbf,
	0xd8, 0xd5, 0xcd, 0x9f, 0xa5, 0x36, 0xb5, 0xd8, 0xc6, 0x7b, 0xbd, 0x6f, 0x66, 0x38, 0x14, 0x54,
	0x70, 0x04, 0x8a, 0x63, 0xce, 0x84, 0xb5, 0x6a, 0x2f, 0x5f, 0xe6, 0xba, 0xeb, 0x7d, 0x6f, 0xdd,
	0xf1, 0xee, 0xf7, 0xd6, 0x51, 0xf4, 0xe1, 0x4f, 0xd7, 0x4e, 0x2c, 0xca, 0x34, 0x72, 0x65, 0x5d,
	0xc5, 0x21, 0xba, 0xb3, 0xd8, 0x57, 0x0b, 0x24, 0x51, 0xa6, 0x93, 0x0b, 0x90, 0xc4, 0x61, 0xe2,
	0x80, 0x6f, 0x7f, 0xee, 0xfe, 0x12, 0x12, 0x65, 0x9a, 0x90, 0x0b, 0x42, 0x48, 0x1c, 0x12, 0xe2,
	0xa0, 0x7d, 0xdf, 0xa6, 0x0b, 0x7f, 0x03, 0x00, 0x00, 0xff, 0xff, 0x93, 0x6b, 0x2a, 0xe5, 0x7c,
	0x02, 0x00, 0x00,
}
