// Code generated by protoc-gen-go. DO NOT EDIT.
// source: google/ads/googleads/v2/resources/parental_status_view.proto

package resources

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

// A parental status view.
type ParentalStatusView struct {
	// Output only. The resource name of the parental status view.
	// Parental Status view resource names have the form:
	//
	// `customers/{customer_id}/parentalStatusViews/{ad_group_id}~{criterion_id}`
	ResourceName         string   `protobuf:"bytes,1,opt,name=resource_name,json=resourceName,proto3" json:"resource_name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ParentalStatusView) Reset()         { *m = ParentalStatusView{} }
func (m *ParentalStatusView) String() string { return proto.CompactTextString(m) }
func (*ParentalStatusView) ProtoMessage()    {}
func (*ParentalStatusView) Descriptor() ([]byte, []int) {
	return fileDescriptor_2e09dc8152a52e11, []int{0}
}

func (m *ParentalStatusView) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ParentalStatusView.Unmarshal(m, b)
}
func (m *ParentalStatusView) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ParentalStatusView.Marshal(b, m, deterministic)
}
func (m *ParentalStatusView) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ParentalStatusView.Merge(m, src)
}
func (m *ParentalStatusView) XXX_Size() int {
	return xxx_messageInfo_ParentalStatusView.Size(m)
}
func (m *ParentalStatusView) XXX_DiscardUnknown() {
	xxx_messageInfo_ParentalStatusView.DiscardUnknown(m)
}

var xxx_messageInfo_ParentalStatusView proto.InternalMessageInfo

func (m *ParentalStatusView) GetResourceName() string {
	if m != nil {
		return m.ResourceName
	}
	return ""
}

func init() {
	proto.RegisterType((*ParentalStatusView)(nil), "google.ads.googleads.v2.resources.ParentalStatusView")
}

func init() {
	proto.RegisterFile("google/ads/googleads/v2/resources/parental_status_view.proto", fileDescriptor_2e09dc8152a52e11)
}

var fileDescriptor_2e09dc8152a52e11 = []byte{
	// 354 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x92, 0xc1, 0x4a, 0xf3, 0x40,
	0x1c, 0xc4, 0x49, 0x0a, 0x1f, 0x7c, 0x41, 0x2f, 0xb9, 0xa8, 0x45, 0xd0, 0x0a, 0x05, 0x41, 0xdc,
	0x85, 0xf4, 0xb6, 0x0a, 0xb2, 0xbd, 0x14, 0x3c, 0x48, 0xa9, 0x10, 0x44, 0x02, 0x61, 0x9b, 0xac,
	0x31, 0x90, 0xec, 0xc6, 0xfc, 0xd3, 0xf4, 0x50, 0x7a, 0xf3, 0x49, 0x3c, 0xfa, 0x28, 0x3e, 0x85,
	0x5e, 0xfb, 0x08, 0x9e, 0xa4, 0xdd, 0xec, 0xb6, 0x50, 0x51, 0xbc, 0x0d, 0xfc, 0x7f, 0x33, 0x3b,
	0x19, 0xe2, 0x5c, 0x26, 0x52, 0x26, 0x19, 0xc7, 0x2c, 0x06, 0xac, 0xe4, 0x52, 0xd5, 0x1e, 0x2e,
	0x39, 0xc8, 0x49, 0x19, 0x71, 0xc0, 0x05, 0x2b, 0xb9, 0xa8, 0x58, 0x16, 0x42, 0xc5, 0xaa, 0x09,
	0x84, 0x75, 0xca, 0xa7, 0xa8, 0x28, 0x65, 0x25, 0xdd, 0x8e, 0xb2, 0x20, 0x16, 0x03, 0x32, 0x6e,
	0x54, 0x7b, 0xc8, 0xb8, 0xdb, 0x47, 0xfa, 0x81, 0x22, 0xc5, 0x0f, 0x29, 0xcf, 0xe2, 0x70, 0xcc,
	0x1f, 0x59, 0x9d, 0xca, 0x52, 0x65, 0xb4, 0x0f, 0x36, 0x00, 0x6d, 0x6b, 0x4e, 0x87, 0x1b, 0x27,
	0x26, 0x84, 0xac, 0x58, 0x95, 0x4a, 0x01, 0xea, 0x7a, 0xf2, 0x61, 0x39, 0xee, 0xb0, 0xe9, 0x76,
	0xbb, 0xaa, 0xe6, 0xa7, 0x7c, 0xea, 0xde, 0x39, 0xbb, 0x3a, 0x26, 0x14, 0x2c, 0xe7, 0xfb, 0xd6,
	0xb1, 0x75, 0xfa, 0xbf, 0xdf, 0x7b, 0xa7, 0xad, 0x4f, 0x7a, 0xee, 0x9c, 0xad, 0x7b, 0x36, 0xaa,
	0x48, 0x01, 0x45, 0x32, 0xc7, 0xdb, 0x59, 0xa3, 0x1d, 0x9d, 0x74, 0xc3, 0x72, 0x4e, 0x9e, 0x16,
	0x54, 0xfc, 0xc9, 0xef, 0x5e, 0x45, 0x13, 0xa8, 0x64, 0xce, 0x4b, 0xc0, 0x33, 0x2d, 0xe7, 0x66,
	0xd0, 0x35, 0x08, 0x78, 0xf6, 0xdd, 0xca, 0xf3, 0xfe, 0xb3, 0xed, 0x74, 0x23, 0x99, 0xa3, 0x5f,
	0x77, 0xee, 0xef, 0x6d, 0x3f, 0x3f, 0x5c, 0xce, 0x34, 0xb4, 0xee, 0xaf, 0x1b, 0x77, 0x22, 0x33,
	0x26, 0x12, 0x24, 0xcb, 0x04, 0x27, 0x5c, 0xac, 0x46, 0xc4, 0xeb, 0x6f, 0xf8, 0xe1, 0x17, 0xb8,
	0x30, 0xea, 0xc5, 0x6e, 0x0d, 0x28, 0x7d, 0xb5, 0x3b, 0x03, 0x15, 0x49, 0x63, 0x40, 0x4a, 0x2e,
	0x95, 0xef, 0xa1, 0x91, 0x26, 0xdf, 0x34, 0x13, 0xd0, 0x18, 0x02, 0xc3, 0x04, 0xbe, 0x17, 0x18,
	0x66, 0x61, 0x77, 0xd5, 0x81, 0x10, 0x1a, 0x03, 0x21, 0x86, 0x22, 0xc4, 0xf7, 0x08, 0x31, 0xdc,
	0xf8, 0xdf, 0xaa, 0x6c, 0xef, 0x2b, 0x00, 0x00, 0xff, 0xff, 0x20, 0xcb, 0x4c, 0x84, 0xae, 0x02,
	0x00, 0x00,
}
