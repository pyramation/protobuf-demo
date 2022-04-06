// Code generated by protoc-gen-go. DO NOT EDIT.
// source: desc_test_oneof.proto

package testprotos

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
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

type OneOfMessage struct {
	// Types that are valid to be assigned to Value:
	//	*OneOfMessage_BinaryValue
	//	*OneOfMessage_StringValue
	//	*OneOfMessage_BooleanValue
	//	*OneOfMessage_IntValue
	//	*OneOfMessage_Int64Value
	//	*OneOfMessage_DoubleValue
	//	*OneOfMessage_FloatValue
	//	*OneOfMessage_MsgValue
	Value                isOneOfMessage_Value `protobuf_oneof:"value"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *OneOfMessage) Reset()         { *m = OneOfMessage{} }
func (m *OneOfMessage) String() string { return proto.CompactTextString(m) }
func (*OneOfMessage) ProtoMessage()    {}
func (*OneOfMessage) Descriptor() ([]byte, []int) {
	return fileDescriptor_6f7a61c47fbd43fc, []int{0}
}

func (m *OneOfMessage) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_OneOfMessage.Unmarshal(m, b)
}
func (m *OneOfMessage) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_OneOfMessage.Marshal(b, m, deterministic)
}
func (m *OneOfMessage) XXX_Merge(src proto.Message) {
	xxx_messageInfo_OneOfMessage.Merge(m, src)
}
func (m *OneOfMessage) XXX_Size() int {
	return xxx_messageInfo_OneOfMessage.Size(m)
}
func (m *OneOfMessage) XXX_DiscardUnknown() {
	xxx_messageInfo_OneOfMessage.DiscardUnknown(m)
}

var xxx_messageInfo_OneOfMessage proto.InternalMessageInfo

type isOneOfMessage_Value interface {
	isOneOfMessage_Value()
}

type OneOfMessage_BinaryValue struct {
	BinaryValue []byte `protobuf:"bytes,1,opt,name=binary_value,json=binaryValue,proto3,oneof"`
}

type OneOfMessage_StringValue struct {
	StringValue string `protobuf:"bytes,2,opt,name=string_value,json=stringValue,proto3,oneof"`
}

type OneOfMessage_BooleanValue struct {
	BooleanValue bool `protobuf:"varint,3,opt,name=boolean_value,json=booleanValue,proto3,oneof"`
}

type OneOfMessage_IntValue struct {
	IntValue int32 `protobuf:"varint,4,opt,name=int_value,json=intValue,proto3,oneof"`
}

type OneOfMessage_Int64Value struct {
	Int64Value int64 `protobuf:"varint,5,opt,name=int64_value,json=int64Value,proto3,oneof"`
}

type OneOfMessage_DoubleValue struct {
	DoubleValue float64 `protobuf:"fixed64,6,opt,name=double_value,json=doubleValue,proto3,oneof"`
}

type OneOfMessage_FloatValue struct {
	FloatValue float32 `protobuf:"fixed32,7,opt,name=float_value,json=floatValue,proto3,oneof"`
}

type OneOfMessage_MsgValue struct {
	MsgValue *OneOfMessage `protobuf:"bytes,8,opt,name=msg_value,json=msgValue,proto3,oneof"`
}

func (*OneOfMessage_BinaryValue) isOneOfMessage_Value() {}

func (*OneOfMessage_StringValue) isOneOfMessage_Value() {}

func (*OneOfMessage_BooleanValue) isOneOfMessage_Value() {}

func (*OneOfMessage_IntValue) isOneOfMessage_Value() {}

func (*OneOfMessage_Int64Value) isOneOfMessage_Value() {}

func (*OneOfMessage_DoubleValue) isOneOfMessage_Value() {}

func (*OneOfMessage_FloatValue) isOneOfMessage_Value() {}

func (*OneOfMessage_MsgValue) isOneOfMessage_Value() {}

func (m *OneOfMessage) GetValue() isOneOfMessage_Value {
	if m != nil {
		return m.Value
	}
	return nil
}

func (m *OneOfMessage) GetBinaryValue() []byte {
	if x, ok := m.GetValue().(*OneOfMessage_BinaryValue); ok {
		return x.BinaryValue
	}
	return nil
}

func (m *OneOfMessage) GetStringValue() string {
	if x, ok := m.GetValue().(*OneOfMessage_StringValue); ok {
		return x.StringValue
	}
	return ""
}

func (m *OneOfMessage) GetBooleanValue() bool {
	if x, ok := m.GetValue().(*OneOfMessage_BooleanValue); ok {
		return x.BooleanValue
	}
	return false
}

func (m *OneOfMessage) GetIntValue() int32 {
	if x, ok := m.GetValue().(*OneOfMessage_IntValue); ok {
		return x.IntValue
	}
	return 0
}

func (m *OneOfMessage) GetInt64Value() int64 {
	if x, ok := m.GetValue().(*OneOfMessage_Int64Value); ok {
		return x.Int64Value
	}
	return 0
}

func (m *OneOfMessage) GetDoubleValue() float64 {
	if x, ok := m.GetValue().(*OneOfMessage_DoubleValue); ok {
		return x.DoubleValue
	}
	return 0
}

func (m *OneOfMessage) GetFloatValue() float32 {
	if x, ok := m.GetValue().(*OneOfMessage_FloatValue); ok {
		return x.FloatValue
	}
	return 0
}

func (m *OneOfMessage) GetMsgValue() *OneOfMessage {
	if x, ok := m.GetValue().(*OneOfMessage_MsgValue); ok {
		return x.MsgValue
	}
	return nil
}

// XXX_OneofWrappers is for the internal use of the proto package.
func (*OneOfMessage) XXX_OneofWrappers() []interface{} {
	return []interface{}{
		(*OneOfMessage_BinaryValue)(nil),
		(*OneOfMessage_StringValue)(nil),
		(*OneOfMessage_BooleanValue)(nil),
		(*OneOfMessage_IntValue)(nil),
		(*OneOfMessage_Int64Value)(nil),
		(*OneOfMessage_DoubleValue)(nil),
		(*OneOfMessage_FloatValue)(nil),
		(*OneOfMessage_MsgValue)(nil),
	}
}

func init() {
	proto.RegisterType((*OneOfMessage)(nil), "testprotos.OneOfMessage")
}

func init() { proto.RegisterFile("desc_test_oneof.proto", fileDescriptor_6f7a61c47fbd43fc) }

var fileDescriptor_6f7a61c47fbd43fc = []byte{
	// 290 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x4c, 0x90, 0x3d, 0x4f, 0xc3, 0x30,
	0x10, 0x86, 0xe3, 0x96, 0x7e, 0xc4, 0x09, 0x4b, 0x25, 0xa4, 0x2e, 0x48, 0x06, 0x84, 0xe4, 0x29,
	0x11, 0x14, 0xc1, 0xde, 0x29, 0x0b, 0xaa, 0x94, 0x81, 0x81, 0x25, 0x72, 0xd2, 0x4b, 0x6a, 0xe4,
	0xd8, 0x55, 0xec, 0x20, 0xf1, 0x1b, 0xf9, 0x53, 0xc8, 0x1f, 0x6d, 0x99, 0x6c, 0x3d, 0x7e, 0xee,
	0xfc, 0xde, 0xe1, 0x9b, 0x3d, 0xe8, 0xa6, 0x32, 0xa0, 0x4d, 0xa5, 0x24, 0xa8, 0x36, 0x3b, 0x0e,
	0xca, 0xa8, 0x15, 0xb6, 0xc4, 0x5d, 0xf5, 0xfd, 0xef, 0x04, 0xa7, 0x3b, 0x09, 0xbb, 0xf6, 0x1d,
	0xb4, 0x66, 0x1d, 0xac, 0x1e, 0x70, 0x5a, 0x73, 0xc9, 0x86, 0x9f, 0xea, 0x9b, 0x89, 0x11, 0xd6,
	0x88, 0x20, 0x9a, 0x16, 0x51, 0x99, 0x78, 0xfa, 0x61, 0xa1, 0x95, 0xb4, 0x19, 0xb8, 0xec, 0x82,
	0x34, 0x21, 0x88, 0xc6, 0x56, 0xf2, 0xd4, 0x4b, 0x8f, 0xf8, 0xba, 0x56, 0x4a, 0x00, 0x93, 0xc1,
	0x9a, 0x12, 0x44, 0x97, 0x45, 0x54, 0xa6, 0x01, 0x7b, 0xed, 0x16, 0xc7, 0x5c, 0x9a, 0xa0, 0x5c,
	0x11, 0x44, 0x67, 0x45, 0x54, 0x2e, 0xb9, 0x34, 0xfe, 0xf9, 0x0e, 0x27, 0x5c, 0x9a, 0xd7, 0x97,
	0x20, 0xcc, 0x08, 0xa2, 0xd3, 0x22, 0x2a, 0xb1, 0x83, 0xe7, 0x34, 0x7b, 0x35, 0xd6, 0x02, 0x82,
	0x33, 0x27, 0x88, 0x22, 0x9b, 0xc6, 0xd3, 0x73, 0x9f, 0x56, 0x28, 0x76, 0xfa, 0x68, 0x41, 0x10,
	0x9d, 0xd8, 0x3e, 0x0e, 0x7a, 0xe5, 0x0d, 0xc7, 0xbd, 0x3e, 0x8d, 0xb4, 0x24, 0x88, 0x26, 0xcf,
	0xeb, 0xec, 0xb2, 0xab, 0xec, 0xff, 0x9e, 0x6c, 0xc6, 0x5e, 0xfb, 0x49, 0xb7, 0x0b, 0x3c, 0x73,
	0x45, 0xdb, 0xcd, 0xe7, 0x53, 0xc7, 0xcd, 0x61, 0xac, 0xb3, 0x46, 0xf5, 0xf9, 0xd7, 0x61, 0xec,
	0x8f, 0xb9, 0x2b, 0x1e, 0xa0, 0x15, 0xd0, 0x98, 0x9c, 0x4b, 0x03, 0x83, 0x64, 0x22, 0xbf, 0xb4,
	0xad, 0xe7, 0xee, 0xdc, 0xfc, 0x05, 0x00, 0x00, 0xff, 0xff, 0xd6, 0xaa, 0xfa, 0xc4, 0xae, 0x01,
	0x00, 0x00,
}