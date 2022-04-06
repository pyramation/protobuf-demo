// Code generated by protoc-gen-go. DO NOT EDIT.
// source: google/ads/googleads/v2/resources/remarketing_action.proto

package resources

import (
	fmt "fmt"
	math "math"

	proto "github.com/golang/protobuf/proto"
	wrappers "github.com/golang/protobuf/ptypes/wrappers"
	common "google.golang.org/genproto/googleapis/ads/googleads/v2/common"
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

// A remarketing action. A snippet of JavaScript code that will collect the
// product id and the type of page people visited (product page, shopping cart
// page, purchase page, general site visit) on an advertiser's website.
type RemarketingAction struct {
	// Immutable. The resource name of the remarketing action.
	// Remarketing action resource names have the form:
	//
	// `customers/{customer_id}/remarketingActions/{remarketing_action_id}`
	ResourceName string `protobuf:"bytes,1,opt,name=resource_name,json=resourceName,proto3" json:"resource_name,omitempty"`
	// Output only. Id of the remarketing action.
	Id *wrappers.Int64Value `protobuf:"bytes,2,opt,name=id,proto3" json:"id,omitempty"`
	// The name of the remarketing action.
	//
	// This field is required and should not be empty when creating new
	// remarketing actions.
	Name *wrappers.StringValue `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`
	// Output only. The snippets used for tracking remarketing actions.
	TagSnippets          []*common.TagSnippet `protobuf:"bytes,4,rep,name=tag_snippets,json=tagSnippets,proto3" json:"tag_snippets,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *RemarketingAction) Reset()         { *m = RemarketingAction{} }
func (m *RemarketingAction) String() string { return proto.CompactTextString(m) }
func (*RemarketingAction) ProtoMessage()    {}
func (*RemarketingAction) Descriptor() ([]byte, []int) {
	return fileDescriptor_971e3df206dc07eb, []int{0}
}

func (m *RemarketingAction) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RemarketingAction.Unmarshal(m, b)
}
func (m *RemarketingAction) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RemarketingAction.Marshal(b, m, deterministic)
}
func (m *RemarketingAction) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RemarketingAction.Merge(m, src)
}
func (m *RemarketingAction) XXX_Size() int {
	return xxx_messageInfo_RemarketingAction.Size(m)
}
func (m *RemarketingAction) XXX_DiscardUnknown() {
	xxx_messageInfo_RemarketingAction.DiscardUnknown(m)
}

var xxx_messageInfo_RemarketingAction proto.InternalMessageInfo

func (m *RemarketingAction) GetResourceName() string {
	if m != nil {
		return m.ResourceName
	}
	return ""
}

func (m *RemarketingAction) GetId() *wrappers.Int64Value {
	if m != nil {
		return m.Id
	}
	return nil
}

func (m *RemarketingAction) GetName() *wrappers.StringValue {
	if m != nil {
		return m.Name
	}
	return nil
}

func (m *RemarketingAction) GetTagSnippets() []*common.TagSnippet {
	if m != nil {
		return m.TagSnippets
	}
	return nil
}

func init() {
	proto.RegisterType((*RemarketingAction)(nil), "google.ads.googleads.v2.resources.RemarketingAction")
}

func init() {
	proto.RegisterFile("google/ads/googleads/v2/resources/remarketing_action.proto", fileDescriptor_971e3df206dc07eb)
}

var fileDescriptor_971e3df206dc07eb = []byte{
	// 472 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x93, 0xcf, 0x6a, 0x13, 0x41,
	0x1c, 0xc7, 0xc9, 0x6e, 0x15, 0xdc, 0xd4, 0x83, 0x7b, 0x90, 0x58, 0x8b, 0xa6, 0x42, 0x21, 0x14,
	0x99, 0x09, 0xab, 0x78, 0x18, 0xbd, 0x4c, 0x2e, 0x45, 0x0f, 0x52, 0xb6, 0x12, 0x41, 0x02, 0x61,
	0xb2, 0x3b, 0x1d, 0x47, 0x33, 0x33, 0xcb, 0xcc, 0x24, 0x1e, 0x4a, 0x4f, 0x3e, 0x82, 0x6f, 0xe0,
	0xd1, 0x47, 0xf1, 0x29, 0x7a, 0xee, 0x23, 0x78, 0x92, 0xec, 0xfc, 0x49, 0x20, 0x44, 0xe9, 0xed,
	0x9b, 0xfc, 0xbe, 0x9f, 0xdf, 0xbf, 0xf9, 0x6d, 0x86, 0x98, 0x52, 0x6c, 0x4e, 0x21, 0xa9, 0x0d,
	0x74, 0x72, 0xa5, 0x96, 0x05, 0xd4, 0xd4, 0xa8, 0x85, 0xae, 0xa8, 0x81, 0x9a, 0x0a, 0xa2, 0xbf,
	0x52, 0xcb, 0x25, 0x9b, 0x92, 0xca, 0x72, 0x25, 0x41, 0xa3, 0x95, 0x55, 0xf9, 0x91, 0x03, 0x00,
	0xa9, 0x0d, 0x88, 0x2c, 0x58, 0x16, 0x20, 0xb2, 0x07, 0xc3, 0x5d, 0xe9, 0x2b, 0x25, 0x84, 0x92,
	0xd0, 0x12, 0x36, 0x35, 0x92, 0x37, 0x0d, 0xb5, 0x2e, 0xe9, 0xc1, 0xd3, 0x40, 0x34, 0x1c, 0x5e,
	0x70, 0x3a, 0xaf, 0xa7, 0x33, 0xfa, 0x99, 0x2c, 0xb9, 0xd2, 0xde, 0xf0, 0x68, 0xc3, 0x10, 0x0a,
	0xf9, 0xd0, 0x13, 0x1f, 0x6a, 0x7f, 0xcd, 0x16, 0x17, 0xf0, 0x9b, 0x26, 0x4d, 0x43, 0xb5, 0xf1,
	0xf1, 0xc3, 0x0d, 0x94, 0x48, 0xa9, 0x2c, 0x59, 0x4d, 0xe3, 0xa3, 0xcf, 0x7e, 0xa4, 0xd9, 0x83,
	0x72, 0x3d, 0x2b, 0x6e, 0x47, 0xcd, 0x3f, 0x66, 0xf7, 0x43, 0x95, 0xa9, 0x24, 0x82, 0xf6, 0x3a,
	0xfd, 0xce, 0xe0, 0xde, 0xa8, 0xb8, 0xc6, 0x77, 0xfe, 0xe0, 0xe7, 0xd9, 0xc9, 0x7a, 0x70, 0xaf,
	0x1a, 0x6e, 0x40, 0xa5, 0x04, 0xdc, 0x4a, 0x55, 0xee, 0x87, 0x44, 0xef, 0x89, 0xa0, 0xf9, 0x30,
	0x4b, 0x78, 0xdd, 0x4b, 0xfa, 0x9d, 0x41, 0xb7, 0x78, 0xec, 0x61, 0x10, 0x3a, 0x07, 0x6f, 0xa5,
	0x7d, 0xf5, 0x72, 0x4c, 0xe6, 0x0b, 0x3a, 0x4a, 0xaf, 0x71, 0x5a, 0x26, 0xbc, 0xce, 0x87, 0xd9,
	0x5e, 0xdb, 0x41, 0xda, 0x32, 0x87, 0x5b, 0xcc, 0xb9, 0xd5, 0x5c, 0xb2, 0x16, 0x2a, 0x5b, 0x67,
	0x5e, 0x66, 0xfb, 0x1b, 0x1b, 0x36, 0xbd, 0xbd, 0x7e, 0x3a, 0xe8, 0x16, 0x27, 0x60, 0xd7, 0xc3,
	0xb9, 0x57, 0x01, 0x1f, 0x08, 0x3b, 0x77, 0x88, 0x2b, 0xde, 0xb5, 0xf1, 0x0f, 0x83, 0xc4, 0x0d,
	0xfe, 0x72, 0x9b, 0xb1, 0xf3, 0x37, 0xd5, 0xc2, 0x58, 0x25, 0xa8, 0x36, 0xf0, 0x32, 0xc8, 0xab,
	0xcd, 0xab, 0x72, 0x3e, 0x03, 0x2f, 0xb7, 0x2f, 0xed, 0x6a, 0xf4, 0x3d, 0xc9, 0x8e, 0x2b, 0x25,
	0xc0, 0x7f, 0x6f, 0x6d, 0xf4, 0x70, 0xab, 0xf4, 0xd9, 0x6a, 0x33, 0x67, 0x9d, 0x4f, 0xef, 0x3c,
	0xcc, 0xd4, 0x9c, 0x48, 0x06, 0x94, 0x66, 0x90, 0x51, 0xd9, 0xee, 0x0d, 0xae, 0xdb, 0xff, 0xc7,
	0x37, 0xf0, 0x3a, 0xaa, 0x9f, 0x49, 0x7a, 0x8a, 0xf1, 0xaf, 0xe4, 0xe8, 0xd4, 0xa5, 0xc4, 0xb5,
	0x01, 0x4e, 0xae, 0xd4, 0xb8, 0x00, 0x65, 0x70, 0xfe, 0x0e, 0x9e, 0x09, 0xae, 0xcd, 0x24, 0x7a,
	0x26, 0xe3, 0x62, 0x12, 0x3d, 0x37, 0xc9, 0xb1, 0x0b, 0x20, 0x84, 0x6b, 0x83, 0x50, 0x74, 0x21,
	0x34, 0x2e, 0x10, 0x8a, 0xbe, 0xd9, 0xdd, 0xb6, 0xd9, 0x17, 0x7f, 0x03, 0x00, 0x00, 0xff, 0xff,
	0xbe, 0xa2, 0x9b, 0xb5, 0xaf, 0x03, 0x00, 0x00,
}