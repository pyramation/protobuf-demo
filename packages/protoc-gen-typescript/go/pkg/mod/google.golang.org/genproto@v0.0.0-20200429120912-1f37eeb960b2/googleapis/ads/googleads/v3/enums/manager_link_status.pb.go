// Code generated by protoc-gen-go. DO NOT EDIT.
// source: google/ads/googleads/v3/enums/manager_link_status.proto

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

// Possible statuses of a link.
type ManagerLinkStatusEnum_ManagerLinkStatus int32

const (
	// Not specified.
	ManagerLinkStatusEnum_UNSPECIFIED ManagerLinkStatusEnum_ManagerLinkStatus = 0
	// Used for return value only. Represents value unknown in this version.
	ManagerLinkStatusEnum_UNKNOWN ManagerLinkStatusEnum_ManagerLinkStatus = 1
	// Indicates current in-effect relationship
	ManagerLinkStatusEnum_ACTIVE ManagerLinkStatusEnum_ManagerLinkStatus = 2
	// Indicates terminated relationship
	ManagerLinkStatusEnum_INACTIVE ManagerLinkStatusEnum_ManagerLinkStatus = 3
	// Indicates relationship has been requested by manager, but the client
	// hasn't accepted yet.
	ManagerLinkStatusEnum_PENDING ManagerLinkStatusEnum_ManagerLinkStatus = 4
	// Relationship was requested by the manager, but the client has refused.
	ManagerLinkStatusEnum_REFUSED ManagerLinkStatusEnum_ManagerLinkStatus = 5
	// Indicates relationship has been requested by manager, but manager
	// canceled it.
	ManagerLinkStatusEnum_CANCELED ManagerLinkStatusEnum_ManagerLinkStatus = 6
)

var ManagerLinkStatusEnum_ManagerLinkStatus_name = map[int32]string{
	0: "UNSPECIFIED",
	1: "UNKNOWN",
	2: "ACTIVE",
	3: "INACTIVE",
	4: "PENDING",
	5: "REFUSED",
	6: "CANCELED",
}

var ManagerLinkStatusEnum_ManagerLinkStatus_value = map[string]int32{
	"UNSPECIFIED": 0,
	"UNKNOWN":     1,
	"ACTIVE":      2,
	"INACTIVE":    3,
	"PENDING":     4,
	"REFUSED":     5,
	"CANCELED":    6,
}

func (x ManagerLinkStatusEnum_ManagerLinkStatus) String() string {
	return proto.EnumName(ManagerLinkStatusEnum_ManagerLinkStatus_name, int32(x))
}

func (ManagerLinkStatusEnum_ManagerLinkStatus) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_00c1bfbdfc096c31, []int{0, 0}
}

// Container for enum describing possible status of a manager and client link.
type ManagerLinkStatusEnum struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ManagerLinkStatusEnum) Reset()         { *m = ManagerLinkStatusEnum{} }
func (m *ManagerLinkStatusEnum) String() string { return proto.CompactTextString(m) }
func (*ManagerLinkStatusEnum) ProtoMessage()    {}
func (*ManagerLinkStatusEnum) Descriptor() ([]byte, []int) {
	return fileDescriptor_00c1bfbdfc096c31, []int{0}
}

func (m *ManagerLinkStatusEnum) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ManagerLinkStatusEnum.Unmarshal(m, b)
}
func (m *ManagerLinkStatusEnum) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ManagerLinkStatusEnum.Marshal(b, m, deterministic)
}
func (m *ManagerLinkStatusEnum) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ManagerLinkStatusEnum.Merge(m, src)
}
func (m *ManagerLinkStatusEnum) XXX_Size() int {
	return xxx_messageInfo_ManagerLinkStatusEnum.Size(m)
}
func (m *ManagerLinkStatusEnum) XXX_DiscardUnknown() {
	xxx_messageInfo_ManagerLinkStatusEnum.DiscardUnknown(m)
}

var xxx_messageInfo_ManagerLinkStatusEnum proto.InternalMessageInfo

func init() {
	proto.RegisterEnum("google.ads.googleads.v3.enums.ManagerLinkStatusEnum_ManagerLinkStatus", ManagerLinkStatusEnum_ManagerLinkStatus_name, ManagerLinkStatusEnum_ManagerLinkStatus_value)
	proto.RegisterType((*ManagerLinkStatusEnum)(nil), "google.ads.googleads.v3.enums.ManagerLinkStatusEnum")
}

func init() {
	proto.RegisterFile("google/ads/googleads/v3/enums/manager_link_status.proto", fileDescriptor_00c1bfbdfc096c31)
}

var fileDescriptor_00c1bfbdfc096c31 = []byte{
	// 333 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x50, 0xcf, 0x4a, 0xc3, 0x30,
	0x18, 0xb7, 0x9d, 0x4e, 0xc9, 0x04, 0x6b, 0x41, 0x0f, 0xe2, 0x0e, 0xdb, 0x03, 0xa4, 0x87, 0x1e,
	0x84, 0x78, 0xca, 0xda, 0x6c, 0x14, 0x67, 0x2c, 0xce, 0x55, 0x90, 0xc2, 0x88, 0xb6, 0x84, 0xb2,
	0x35, 0x19, 0x4b, 0xb7, 0xa7, 0xf0, 0x29, 0x3c, 0xfa, 0x28, 0x3e, 0x8a, 0xbe, 0x84, 0x24, 0xdd,
	0x7a, 0x19, 0x7a, 0x09, 0xbf, 0x2f, 0xbf, 0x3f, 0x7c, 0xdf, 0x0f, 0xdc, 0x70, 0x29, 0xf9, 0x22,
	0xf7, 0x58, 0xa6, 0xbc, 0x1a, 0x6a, 0xb4, 0xf1, 0xbd, 0x5c, 0xac, 0x4b, 0xe5, 0x95, 0x4c, 0x30,
	0x9e, 0xaf, 0x66, 0x8b, 0x42, 0xcc, 0x67, 0xaa, 0x62, 0xd5, 0x5a, 0xc1, 0xe5, 0x4a, 0x56, 0xd2,
	0xed, 0xd6, 0x6a, 0xc8, 0x32, 0x05, 0x1b, 0x23, 0xdc, 0xf8, 0xd0, 0x18, 0xaf, 0xae, 0x77, 0xb9,
	0xcb, 0xc2, 0x63, 0x42, 0xc8, 0x8a, 0x55, 0x85, 0x14, 0x5b, 0x73, 0xff, 0xdd, 0x02, 0x17, 0xf7,
	0x75, 0xf4, 0xb8, 0x10, 0xf3, 0x89, 0x09, 0x26, 0x62, 0x5d, 0xf6, 0x15, 0x38, 0xdf, 0x23, 0xdc,
	0x33, 0xd0, 0x99, 0xd2, 0x49, 0x4c, 0x82, 0x68, 0x18, 0x91, 0xd0, 0x39, 0x70, 0x3b, 0xe0, 0x78,
	0x4a, 0xef, 0xe8, 0xc3, 0x33, 0x75, 0x2c, 0x17, 0x80, 0x36, 0x0e, 0x9e, 0xa2, 0x84, 0x38, 0xb6,
	0x7b, 0x0a, 0x4e, 0x22, 0xba, 0x9d, 0x5a, 0x5a, 0x16, 0x13, 0x1a, 0x46, 0x74, 0xe4, 0x1c, 0xea,
	0xe1, 0x91, 0x0c, 0xa7, 0x13, 0x12, 0x3a, 0x47, 0x5a, 0x17, 0x60, 0x1a, 0x90, 0x31, 0x09, 0x9d,
	0xf6, 0xe0, 0xc7, 0x02, 0xbd, 0x37, 0x59, 0xc2, 0x7f, 0x4f, 0x1a, 0x5c, 0xee, 0x2d, 0x16, 0xeb,
	0x63, 0x62, 0xeb, 0x65, 0xb0, 0x35, 0x72, 0xb9, 0x60, 0x82, 0x43, 0xb9, 0xe2, 0x1e, 0xcf, 0x85,
	0x39, 0x75, 0x57, 0xea, 0xb2, 0x50, 0x7f, 0x74, 0x7c, 0x6b, 0xde, 0x0f, 0xbb, 0x35, 0xc2, 0xf8,
	0xd3, 0xee, 0x8e, 0xea, 0x28, 0x9c, 0x29, 0x58, 0x43, 0x8d, 0x12, 0x1f, 0xea, 0x76, 0xd4, 0xd7,
	0x8e, 0x4f, 0x71, 0xa6, 0xd2, 0x86, 0x4f, 0x13, 0x3f, 0x35, 0xfc, 0xb7, 0xdd, 0xab, 0x3f, 0x11,
	0xc2, 0x99, 0x42, 0xa8, 0x51, 0x20, 0x94, 0xf8, 0x08, 0x19, 0xcd, 0x6b, 0xdb, 0x2c, 0xe6, 0xff,
	0x06, 0x00, 0x00, 0xff, 0xff, 0xac, 0x62, 0x97, 0x1a, 0xfb, 0x01, 0x00, 0x00,
}
