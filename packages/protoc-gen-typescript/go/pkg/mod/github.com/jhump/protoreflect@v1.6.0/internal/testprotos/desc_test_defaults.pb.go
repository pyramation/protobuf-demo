// Code generated by protoc-gen-go. DO NOT EDIT.
// source: desc_test_defaults.proto

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

type Color int32

const (
	Color_RED   Color = 0
	Color_GREEN Color = 1
	Color_BLUE  Color = 2
)

var Color_name = map[int32]string{
	0: "RED",
	1: "GREEN",
	2: "BLUE",
}

var Color_value = map[string]int32{
	"RED":   0,
	"GREEN": 1,
	"BLUE":  2,
}

func (x Color) Enum() *Color {
	p := new(Color)
	*p = x
	return p
}

func (x Color) String() string {
	return proto.EnumName(Color_name, int32(x))
}

func (x *Color) UnmarshalJSON(data []byte) error {
	value, err := proto.UnmarshalJSONEnum(Color_value, data, "Color")
	if err != nil {
		return err
	}
	*x = Color(value)
	return nil
}

func (Color) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_1bea00113e7588f8, []int{0}
}

type Number int32

const (
	Number_ZERO Number = 0
	Number_ZED  Number = 0
	Number_NIL  Number = 0
	Number_NULL Number = 0
	Number_ONE  Number = 1
	Number_UNO  Number = 1
	Number_TWO  Number = 2
	Number_DOS  Number = 2
)

var Number_name = map[int32]string{
	0: "ZERO",
	// Duplicate value: 0: "ZED",
	// Duplicate value: 0: "NIL",
	// Duplicate value: 0: "NULL",
	1: "ONE",
	// Duplicate value: 1: "UNO",
	2: "TWO",
	// Duplicate value: 2: "DOS",
}

var Number_value = map[string]int32{
	"ZERO": 0,
	"ZED":  0,
	"NIL":  0,
	"NULL": 0,
	"ONE":  1,
	"UNO":  1,
	"TWO":  2,
	"DOS":  2,
}

func (x Number) Enum() *Number {
	p := new(Number)
	*p = x
	return p
}

func (x Number) String() string {
	return proto.EnumName(Number_name, int32(x))
}

func (x *Number) UnmarshalJSON(data []byte) error {
	value, err := proto.UnmarshalJSONEnum(Number_value, data, "Number")
	if err != nil {
		return err
	}
	*x = Number(value)
	return nil
}

func (Number) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_1bea00113e7588f8, []int{1}
}

type PrimitiveDefaults struct {
	// simple default
	Fl32 *float32 `protobuf:"fixed32,1,opt,name=fl32,def=3.14159" json:"fl32,omitempty"`
	Fl64 *float64 `protobuf:"fixed64,2,opt,name=fl64,def=3.14159" json:"fl64,omitempty"`
	// exponent notation
	Fl32D *float32 `protobuf:"fixed32,3,opt,name=fl32d,def=6.022141e+23" json:"fl32d,omitempty"`
	Fl64D *float64 `protobuf:"fixed64,4,opt,name=fl64d,def=6.022140857e+23" json:"fl64d,omitempty"`
	// special values: inf, -inf, and nan
	Fl32Inf    *float32 `protobuf:"fixed32,5,opt,name=fl32inf,def=inf" json:"fl32inf,omitempty"`
	Fl64Inf    *float64 `protobuf:"fixed64,6,opt,name=fl64inf,def=inf" json:"fl64inf,omitempty"`
	Fl32NegInf *float32 `protobuf:"fixed32,7,opt,name=fl32negInf,def=-inf" json:"fl32negInf,omitempty"`
	Fl64NegInf *float64 `protobuf:"fixed64,8,opt,name=fl64negInf,def=-inf" json:"fl64negInf,omitempty"`
	Fl32Nan    *float32 `protobuf:"fixed32,9,opt,name=fl32nan,def=nan" json:"fl32nan,omitempty"`
	Fl64Nan    *float64 `protobuf:"fixed64,10,opt,name=fl64nan,def=nan" json:"fl64nan,omitempty"`
	Bl1        *bool    `protobuf:"varint,11,opt,name=bl1,def=1" json:"bl1,omitempty"`
	Bl2        *bool    `protobuf:"varint,12,opt,name=bl2,def=0" json:"bl2,omitempty"`
	// signed
	I32    *int32 `protobuf:"varint,13,opt,name=i32,def=10101" json:"i32,omitempty"`
	I32N   *int32 `protobuf:"varint,14,opt,name=i32n,def=-10101" json:"i32n,omitempty"`
	I32X   *int32 `protobuf:"varint,15,opt,name=i32x,def=131586" json:"i32x,omitempty"`
	I32Xn  *int32 `protobuf:"varint,16,opt,name=i32xn,def=-131586" json:"i32xn,omitempty"`
	I64    *int64 `protobuf:"varint,17,opt,name=i64,def=10101" json:"i64,omitempty"`
	I64N   *int64 `protobuf:"varint,18,opt,name=i64n,def=-10101" json:"i64n,omitempty"`
	I64X   *int64 `protobuf:"varint,19,opt,name=i64x,def=131586" json:"i64x,omitempty"`
	I64Xn  *int64 `protobuf:"varint,20,opt,name=i64xn,def=-131586" json:"i64xn,omitempty"`
	I32S   *int32 `protobuf:"zigzag32,21,opt,name=i32s,def=10101" json:"i32s,omitempty"`
	I32Sn  *int32 `protobuf:"zigzag32,22,opt,name=i32sn,def=-10101" json:"i32sn,omitempty"`
	I32Sx  *int32 `protobuf:"zigzag32,23,opt,name=i32sx,def=131586" json:"i32sx,omitempty"`
	I32Sxn *int32 `protobuf:"zigzag32,24,opt,name=i32sxn,def=-131586" json:"i32sxn,omitempty"`
	I64S   *int64 `protobuf:"zigzag64,25,opt,name=i64s,def=10101" json:"i64s,omitempty"`
	I64Sn  *int64 `protobuf:"zigzag64,26,opt,name=i64sn,def=-10101" json:"i64sn,omitempty"`
	I64Sx  *int64 `protobuf:"zigzag64,27,opt,name=i64sx,def=131586" json:"i64sx,omitempty"`
	I64Sxn *int64 `protobuf:"zigzag64,28,opt,name=i64sxn,def=-131586" json:"i64sxn,omitempty"`
	I32F   *int32 `protobuf:"fixed32,29,opt,name=i32f,def=10101" json:"i32f,omitempty"`
	I32Fn  *int32 `protobuf:"fixed32,30,opt,name=i32fn,def=-10101" json:"i32fn,omitempty"`
	I32Fx  *int32 `protobuf:"fixed32,31,opt,name=i32fx,def=131586" json:"i32fx,omitempty"`
	I32Fxn *int32 `protobuf:"fixed32,32,opt,name=i32fxn,def=-131586" json:"i32fxn,omitempty"`
	I64F   *int64 `protobuf:"fixed64,33,opt,name=i64f,def=10101" json:"i64f,omitempty"`
	I64Fn  *int64 `protobuf:"fixed64,34,opt,name=i64fn,def=-10101" json:"i64fn,omitempty"`
	I64Fx  *int64 `protobuf:"fixed64,35,opt,name=i64fx,def=131586" json:"i64fx,omitempty"`
	I64Fxn *int64 `protobuf:"fixed64,36,opt,name=i64fxn,def=-131586" json:"i64fxn,omitempty"`
	// unsigned
	U32                  *uint32  `protobuf:"varint,37,opt,name=u32,def=10101" json:"u32,omitempty"`
	U32X                 *uint32  `protobuf:"varint,38,opt,name=u32x,def=131586" json:"u32x,omitempty"`
	U64                  *uint64  `protobuf:"varint,39,opt,name=u64,def=10101" json:"u64,omitempty"`
	U64X                 *uint64  `protobuf:"varint,40,opt,name=u64x,def=131586" json:"u64x,omitempty"`
	U32F                 *uint32  `protobuf:"fixed32,41,opt,name=u32f,def=10101" json:"u32f,omitempty"`
	U32Fx                *uint32  `protobuf:"fixed32,42,opt,name=u32fx,def=131586" json:"u32fx,omitempty"`
	U64F                 *uint64  `protobuf:"fixed64,43,opt,name=u64f,def=10101" json:"u64f,omitempty"`
	U64Fx                *uint64  `protobuf:"fixed64,44,opt,name=u64fx,def=131586" json:"u64fx,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *PrimitiveDefaults) Reset()         { *m = PrimitiveDefaults{} }
func (m *PrimitiveDefaults) String() string { return proto.CompactTextString(m) }
func (*PrimitiveDefaults) ProtoMessage()    {}
func (*PrimitiveDefaults) Descriptor() ([]byte, []int) {
	return fileDescriptor_1bea00113e7588f8, []int{0}
}

func (m *PrimitiveDefaults) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PrimitiveDefaults.Unmarshal(m, b)
}
func (m *PrimitiveDefaults) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PrimitiveDefaults.Marshal(b, m, deterministic)
}
func (m *PrimitiveDefaults) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PrimitiveDefaults.Merge(m, src)
}
func (m *PrimitiveDefaults) XXX_Size() int {
	return xxx_messageInfo_PrimitiveDefaults.Size(m)
}
func (m *PrimitiveDefaults) XXX_DiscardUnknown() {
	xxx_messageInfo_PrimitiveDefaults.DiscardUnknown(m)
}

var xxx_messageInfo_PrimitiveDefaults proto.InternalMessageInfo

const Default_PrimitiveDefaults_Fl32 float32 = 3.14159
const Default_PrimitiveDefaults_Fl64 float64 = 3.14159
const Default_PrimitiveDefaults_Fl32D float32 = 6.022141e+23
const Default_PrimitiveDefaults_Fl64D float64 = 6.022140857e+23

var Default_PrimitiveDefaults_Fl32Inf float32 = float32(math.Inf(1))
var Default_PrimitiveDefaults_Fl64Inf float64 = math.Inf(1)
var Default_PrimitiveDefaults_Fl32NegInf float32 = float32(math.Inf(-1))
var Default_PrimitiveDefaults_Fl64NegInf float64 = math.Inf(-1)
var Default_PrimitiveDefaults_Fl32Nan float32 = float32(math.NaN())
var Default_PrimitiveDefaults_Fl64Nan float64 = math.NaN()

const Default_PrimitiveDefaults_Bl1 bool = true
const Default_PrimitiveDefaults_Bl2 bool = false
const Default_PrimitiveDefaults_I32 int32 = 10101
const Default_PrimitiveDefaults_I32N int32 = -10101
const Default_PrimitiveDefaults_I32X int32 = 131586
const Default_PrimitiveDefaults_I32Xn int32 = -131586
const Default_PrimitiveDefaults_I64 int64 = 10101
const Default_PrimitiveDefaults_I64N int64 = -10101
const Default_PrimitiveDefaults_I64X int64 = 131586
const Default_PrimitiveDefaults_I64Xn int64 = -131586
const Default_PrimitiveDefaults_I32S int32 = 10101
const Default_PrimitiveDefaults_I32Sn int32 = -10101
const Default_PrimitiveDefaults_I32Sx int32 = 131586
const Default_PrimitiveDefaults_I32Sxn int32 = -131586
const Default_PrimitiveDefaults_I64S int64 = 10101
const Default_PrimitiveDefaults_I64Sn int64 = -10101
const Default_PrimitiveDefaults_I64Sx int64 = 131586
const Default_PrimitiveDefaults_I64Sxn int64 = -131586
const Default_PrimitiveDefaults_I32F int32 = 10101
const Default_PrimitiveDefaults_I32Fn int32 = -10101
const Default_PrimitiveDefaults_I32Fx int32 = 131586
const Default_PrimitiveDefaults_I32Fxn int32 = -131586
const Default_PrimitiveDefaults_I64F int64 = 10101
const Default_PrimitiveDefaults_I64Fn int64 = -10101
const Default_PrimitiveDefaults_I64Fx int64 = 131586
const Default_PrimitiveDefaults_I64Fxn int64 = -131586
const Default_PrimitiveDefaults_U32 uint32 = 10101
const Default_PrimitiveDefaults_U32X uint32 = 131586
const Default_PrimitiveDefaults_U64 uint64 = 10101
const Default_PrimitiveDefaults_U64X uint64 = 131586
const Default_PrimitiveDefaults_U32F uint32 = 10101
const Default_PrimitiveDefaults_U32Fx uint32 = 131586
const Default_PrimitiveDefaults_U64F uint64 = 10101
const Default_PrimitiveDefaults_U64Fx uint64 = 131586

func (m *PrimitiveDefaults) GetFl32() float32 {
	if m != nil && m.Fl32 != nil {
		return *m.Fl32
	}
	return Default_PrimitiveDefaults_Fl32
}

func (m *PrimitiveDefaults) GetFl64() float64 {
	if m != nil && m.Fl64 != nil {
		return *m.Fl64
	}
	return Default_PrimitiveDefaults_Fl64
}

func (m *PrimitiveDefaults) GetFl32D() float32 {
	if m != nil && m.Fl32D != nil {
		return *m.Fl32D
	}
	return Default_PrimitiveDefaults_Fl32D
}

func (m *PrimitiveDefaults) GetFl64D() float64 {
	if m != nil && m.Fl64D != nil {
		return *m.Fl64D
	}
	return Default_PrimitiveDefaults_Fl64D
}

func (m *PrimitiveDefaults) GetFl32Inf() float32 {
	if m != nil && m.Fl32Inf != nil {
		return *m.Fl32Inf
	}
	return Default_PrimitiveDefaults_Fl32Inf
}

func (m *PrimitiveDefaults) GetFl64Inf() float64 {
	if m != nil && m.Fl64Inf != nil {
		return *m.Fl64Inf
	}
	return Default_PrimitiveDefaults_Fl64Inf
}

func (m *PrimitiveDefaults) GetFl32NegInf() float32 {
	if m != nil && m.Fl32NegInf != nil {
		return *m.Fl32NegInf
	}
	return Default_PrimitiveDefaults_Fl32NegInf
}

func (m *PrimitiveDefaults) GetFl64NegInf() float64 {
	if m != nil && m.Fl64NegInf != nil {
		return *m.Fl64NegInf
	}
	return Default_PrimitiveDefaults_Fl64NegInf
}

func (m *PrimitiveDefaults) GetFl32Nan() float32 {
	if m != nil && m.Fl32Nan != nil {
		return *m.Fl32Nan
	}
	return Default_PrimitiveDefaults_Fl32Nan
}

func (m *PrimitiveDefaults) GetFl64Nan() float64 {
	if m != nil && m.Fl64Nan != nil {
		return *m.Fl64Nan
	}
	return Default_PrimitiveDefaults_Fl64Nan
}

func (m *PrimitiveDefaults) GetBl1() bool {
	if m != nil && m.Bl1 != nil {
		return *m.Bl1
	}
	return Default_PrimitiveDefaults_Bl1
}

func (m *PrimitiveDefaults) GetBl2() bool {
	if m != nil && m.Bl2 != nil {
		return *m.Bl2
	}
	return Default_PrimitiveDefaults_Bl2
}

func (m *PrimitiveDefaults) GetI32() int32 {
	if m != nil && m.I32 != nil {
		return *m.I32
	}
	return Default_PrimitiveDefaults_I32
}

func (m *PrimitiveDefaults) GetI32N() int32 {
	if m != nil && m.I32N != nil {
		return *m.I32N
	}
	return Default_PrimitiveDefaults_I32N
}

func (m *PrimitiveDefaults) GetI32X() int32 {
	if m != nil && m.I32X != nil {
		return *m.I32X
	}
	return Default_PrimitiveDefaults_I32X
}

func (m *PrimitiveDefaults) GetI32Xn() int32 {
	if m != nil && m.I32Xn != nil {
		return *m.I32Xn
	}
	return Default_PrimitiveDefaults_I32Xn
}

func (m *PrimitiveDefaults) GetI64() int64 {
	if m != nil && m.I64 != nil {
		return *m.I64
	}
	return Default_PrimitiveDefaults_I64
}

func (m *PrimitiveDefaults) GetI64N() int64 {
	if m != nil && m.I64N != nil {
		return *m.I64N
	}
	return Default_PrimitiveDefaults_I64N
}

func (m *PrimitiveDefaults) GetI64X() int64 {
	if m != nil && m.I64X != nil {
		return *m.I64X
	}
	return Default_PrimitiveDefaults_I64X
}

func (m *PrimitiveDefaults) GetI64Xn() int64 {
	if m != nil && m.I64Xn != nil {
		return *m.I64Xn
	}
	return Default_PrimitiveDefaults_I64Xn
}

func (m *PrimitiveDefaults) GetI32S() int32 {
	if m != nil && m.I32S != nil {
		return *m.I32S
	}
	return Default_PrimitiveDefaults_I32S
}

func (m *PrimitiveDefaults) GetI32Sn() int32 {
	if m != nil && m.I32Sn != nil {
		return *m.I32Sn
	}
	return Default_PrimitiveDefaults_I32Sn
}

func (m *PrimitiveDefaults) GetI32Sx() int32 {
	if m != nil && m.I32Sx != nil {
		return *m.I32Sx
	}
	return Default_PrimitiveDefaults_I32Sx
}

func (m *PrimitiveDefaults) GetI32Sxn() int32 {
	if m != nil && m.I32Sxn != nil {
		return *m.I32Sxn
	}
	return Default_PrimitiveDefaults_I32Sxn
}

func (m *PrimitiveDefaults) GetI64S() int64 {
	if m != nil && m.I64S != nil {
		return *m.I64S
	}
	return Default_PrimitiveDefaults_I64S
}

func (m *PrimitiveDefaults) GetI64Sn() int64 {
	if m != nil && m.I64Sn != nil {
		return *m.I64Sn
	}
	return Default_PrimitiveDefaults_I64Sn
}

func (m *PrimitiveDefaults) GetI64Sx() int64 {
	if m != nil && m.I64Sx != nil {
		return *m.I64Sx
	}
	return Default_PrimitiveDefaults_I64Sx
}

func (m *PrimitiveDefaults) GetI64Sxn() int64 {
	if m != nil && m.I64Sxn != nil {
		return *m.I64Sxn
	}
	return Default_PrimitiveDefaults_I64Sxn
}

func (m *PrimitiveDefaults) GetI32F() int32 {
	if m != nil && m.I32F != nil {
		return *m.I32F
	}
	return Default_PrimitiveDefaults_I32F
}

func (m *PrimitiveDefaults) GetI32Fn() int32 {
	if m != nil && m.I32Fn != nil {
		return *m.I32Fn
	}
	return Default_PrimitiveDefaults_I32Fn
}

func (m *PrimitiveDefaults) GetI32Fx() int32 {
	if m != nil && m.I32Fx != nil {
		return *m.I32Fx
	}
	return Default_PrimitiveDefaults_I32Fx
}

func (m *PrimitiveDefaults) GetI32Fxn() int32 {
	if m != nil && m.I32Fxn != nil {
		return *m.I32Fxn
	}
	return Default_PrimitiveDefaults_I32Fxn
}

func (m *PrimitiveDefaults) GetI64F() int64 {
	if m != nil && m.I64F != nil {
		return *m.I64F
	}
	return Default_PrimitiveDefaults_I64F
}

func (m *PrimitiveDefaults) GetI64Fn() int64 {
	if m != nil && m.I64Fn != nil {
		return *m.I64Fn
	}
	return Default_PrimitiveDefaults_I64Fn
}

func (m *PrimitiveDefaults) GetI64Fx() int64 {
	if m != nil && m.I64Fx != nil {
		return *m.I64Fx
	}
	return Default_PrimitiveDefaults_I64Fx
}

func (m *PrimitiveDefaults) GetI64Fxn() int64 {
	if m != nil && m.I64Fxn != nil {
		return *m.I64Fxn
	}
	return Default_PrimitiveDefaults_I64Fxn
}

func (m *PrimitiveDefaults) GetU32() uint32 {
	if m != nil && m.U32 != nil {
		return *m.U32
	}
	return Default_PrimitiveDefaults_U32
}

func (m *PrimitiveDefaults) GetU32X() uint32 {
	if m != nil && m.U32X != nil {
		return *m.U32X
	}
	return Default_PrimitiveDefaults_U32X
}

func (m *PrimitiveDefaults) GetU64() uint64 {
	if m != nil && m.U64 != nil {
		return *m.U64
	}
	return Default_PrimitiveDefaults_U64
}

func (m *PrimitiveDefaults) GetU64X() uint64 {
	if m != nil && m.U64X != nil {
		return *m.U64X
	}
	return Default_PrimitiveDefaults_U64X
}

func (m *PrimitiveDefaults) GetU32F() uint32 {
	if m != nil && m.U32F != nil {
		return *m.U32F
	}
	return Default_PrimitiveDefaults_U32F
}

func (m *PrimitiveDefaults) GetU32Fx() uint32 {
	if m != nil && m.U32Fx != nil {
		return *m.U32Fx
	}
	return Default_PrimitiveDefaults_U32Fx
}

func (m *PrimitiveDefaults) GetU64F() uint64 {
	if m != nil && m.U64F != nil {
		return *m.U64F
	}
	return Default_PrimitiveDefaults_U64F
}

func (m *PrimitiveDefaults) GetU64Fx() uint64 {
	if m != nil && m.U64Fx != nil {
		return *m.U64Fx
	}
	return Default_PrimitiveDefaults_U64Fx
}

type StringAndBytesDefaults struct {
	Dq                   *string  `protobuf:"bytes,1,opt,name=dq,def=this is a string with \"nested quotes\"" json:"dq,omitempty"`
	Sq                   *string  `protobuf:"bytes,2,opt,name=sq,def=this is a string with \"nested quotes\"" json:"sq,omitempty"`
	EscapedBytes         []byte   `protobuf:"bytes,3,opt,name=escaped_bytes,json=escapedBytes,def=\\000\\001\\007\\010\\014\\n\\r\\t\\013\\\\\\'\\\"\\376" json:"escaped_bytes,omitempty"`
	Utf8String           *string  `protobuf:"bytes,4,opt,name=utf8_string,json=utf8String,def=???" json:"utf8_string,omitempty"`
	StringWithZero       *string  `protobuf:"bytes,5,opt,name=string_with_zero,json=stringWithZero,def=hel\x00lo" json:"string_with_zero,omitempty"`
	BytesWithZero        []byte   `protobuf:"bytes,6,opt,name=bytes_with_zero,json=bytesWithZero,def=wor\\000ld" json:"bytes_with_zero,omitempty"`
	ReallyLongString     *string  `protobuf:"bytes,7,opt,name=really_long_string,json=reallyLongString,def=this is a really long string constant, so it spans multiple lines! it also tests support for multi-line string literals in option values" json:"really_long_string,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *StringAndBytesDefaults) Reset()         { *m = StringAndBytesDefaults{} }
func (m *StringAndBytesDefaults) String() string { return proto.CompactTextString(m) }
func (*StringAndBytesDefaults) ProtoMessage()    {}
func (*StringAndBytesDefaults) Descriptor() ([]byte, []int) {
	return fileDescriptor_1bea00113e7588f8, []int{1}
}

func (m *StringAndBytesDefaults) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_StringAndBytesDefaults.Unmarshal(m, b)
}
func (m *StringAndBytesDefaults) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_StringAndBytesDefaults.Marshal(b, m, deterministic)
}
func (m *StringAndBytesDefaults) XXX_Merge(src proto.Message) {
	xxx_messageInfo_StringAndBytesDefaults.Merge(m, src)
}
func (m *StringAndBytesDefaults) XXX_Size() int {
	return xxx_messageInfo_StringAndBytesDefaults.Size(m)
}
func (m *StringAndBytesDefaults) XXX_DiscardUnknown() {
	xxx_messageInfo_StringAndBytesDefaults.DiscardUnknown(m)
}

var xxx_messageInfo_StringAndBytesDefaults proto.InternalMessageInfo

const Default_StringAndBytesDefaults_Dq string = "this is a string with \"nested quotes\""
const Default_StringAndBytesDefaults_Sq string = "this is a string with \"nested quotes\""

var Default_StringAndBytesDefaults_EscapedBytes []byte = []byte("\x00\x01\a\b\f\n\r\t\v\\'\"\xfe")

const Default_StringAndBytesDefaults_Utf8String string = "???"
const Default_StringAndBytesDefaults_StringWithZero string = "hel\x00lo"

var Default_StringAndBytesDefaults_BytesWithZero []byte = []byte("wor\x00ld")

const Default_StringAndBytesDefaults_ReallyLongString string = "this is a really long string constant, so it spans multiple lines! it also tests support for multi-line string literals in option values"

func (m *StringAndBytesDefaults) GetDq() string {
	if m != nil && m.Dq != nil {
		return *m.Dq
	}
	return Default_StringAndBytesDefaults_Dq
}

func (m *StringAndBytesDefaults) GetSq() string {
	if m != nil && m.Sq != nil {
		return *m.Sq
	}
	return Default_StringAndBytesDefaults_Sq
}

func (m *StringAndBytesDefaults) GetEscapedBytes() []byte {
	if m != nil && m.EscapedBytes != nil {
		return m.EscapedBytes
	}
	return append([]byte(nil), Default_StringAndBytesDefaults_EscapedBytes...)
}

func (m *StringAndBytesDefaults) GetUtf8String() string {
	if m != nil && m.Utf8String != nil {
		return *m.Utf8String
	}
	return Default_StringAndBytesDefaults_Utf8String
}

func (m *StringAndBytesDefaults) GetStringWithZero() string {
	if m != nil && m.StringWithZero != nil {
		return *m.StringWithZero
	}
	return Default_StringAndBytesDefaults_StringWithZero
}

func (m *StringAndBytesDefaults) GetBytesWithZero() []byte {
	if m != nil && m.BytesWithZero != nil {
		return m.BytesWithZero
	}
	return append([]byte(nil), Default_StringAndBytesDefaults_BytesWithZero...)
}

func (m *StringAndBytesDefaults) GetReallyLongString() string {
	if m != nil && m.ReallyLongString != nil {
		return *m.ReallyLongString
	}
	return Default_StringAndBytesDefaults_ReallyLongString
}

type EnumDefaults struct {
	Red                  *Color   `protobuf:"varint,1,opt,name=red,enum=testprotos.Color,def=0" json:"red,omitempty"`
	Green                *Color   `protobuf:"varint,2,opt,name=green,enum=testprotos.Color,def=1" json:"green,omitempty"`
	Blue                 *Color   `protobuf:"varint,3,opt,name=blue,enum=testprotos.Color,def=2" json:"blue,omitempty"`
	Zero                 *Number  `protobuf:"varint,4,opt,name=zero,enum=testprotos.Number,def=0" json:"zero,omitempty"`
	Zed                  *Number  `protobuf:"varint,5,opt,name=zed,enum=testprotos.Number,def=0" json:"zed,omitempty"`
	One                  *Number  `protobuf:"varint,6,opt,name=one,enum=testprotos.Number,def=1" json:"one,omitempty"`
	Dos                  *Number  `protobuf:"varint,7,opt,name=dos,enum=testprotos.Number,def=2" json:"dos,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *EnumDefaults) Reset()         { *m = EnumDefaults{} }
func (m *EnumDefaults) String() string { return proto.CompactTextString(m) }
func (*EnumDefaults) ProtoMessage()    {}
func (*EnumDefaults) Descriptor() ([]byte, []int) {
	return fileDescriptor_1bea00113e7588f8, []int{2}
}

func (m *EnumDefaults) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_EnumDefaults.Unmarshal(m, b)
}
func (m *EnumDefaults) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_EnumDefaults.Marshal(b, m, deterministic)
}
func (m *EnumDefaults) XXX_Merge(src proto.Message) {
	xxx_messageInfo_EnumDefaults.Merge(m, src)
}
func (m *EnumDefaults) XXX_Size() int {
	return xxx_messageInfo_EnumDefaults.Size(m)
}
func (m *EnumDefaults) XXX_DiscardUnknown() {
	xxx_messageInfo_EnumDefaults.DiscardUnknown(m)
}

var xxx_messageInfo_EnumDefaults proto.InternalMessageInfo

const Default_EnumDefaults_Red Color = Color_RED
const Default_EnumDefaults_Green Color = Color_GREEN
const Default_EnumDefaults_Blue Color = Color_BLUE
const Default_EnumDefaults_Zero Number = Number_ZERO
const Default_EnumDefaults_Zed Number = Number_ZED
const Default_EnumDefaults_One Number = Number_ONE
const Default_EnumDefaults_Dos Number = Number_DOS

func (m *EnumDefaults) GetRed() Color {
	if m != nil && m.Red != nil {
		return *m.Red
	}
	return Default_EnumDefaults_Red
}

func (m *EnumDefaults) GetGreen() Color {
	if m != nil && m.Green != nil {
		return *m.Green
	}
	return Default_EnumDefaults_Green
}

func (m *EnumDefaults) GetBlue() Color {
	if m != nil && m.Blue != nil {
		return *m.Blue
	}
	return Default_EnumDefaults_Blue
}

func (m *EnumDefaults) GetZero() Number {
	if m != nil && m.Zero != nil {
		return *m.Zero
	}
	return Default_EnumDefaults_Zero
}

func (m *EnumDefaults) GetZed() Number {
	if m != nil && m.Zed != nil {
		return *m.Zed
	}
	return Default_EnumDefaults_Zed
}

func (m *EnumDefaults) GetOne() Number {
	if m != nil && m.One != nil {
		return *m.One
	}
	return Default_EnumDefaults_One
}

func (m *EnumDefaults) GetDos() Number {
	if m != nil && m.Dos != nil {
		return *m.Dos
	}
	return Default_EnumDefaults_Dos
}

type MoarFloats struct {
	A                    *float32 `protobuf:"fixed32,1,opt,name=a,def=1" json:"a,omitempty"`
	B                    *float32 `protobuf:"fixed32,2,opt,name=b,def=1" json:"b,omitempty"`
	C                    *float32 `protobuf:"fixed32,3,opt,name=c,def=1.01" json:"c,omitempty"`
	D                    *float32 `protobuf:"fixed32,4,opt,name=d,def=0.1" json:"d,omitempty"`
	E                    *float32 `protobuf:"fixed32,5,opt,name=e,def=100000" json:"e,omitempty"`
	F                    *float32 `protobuf:"fixed32,6,opt,name=f,def=1e-05" json:"f,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *MoarFloats) Reset()         { *m = MoarFloats{} }
func (m *MoarFloats) String() string { return proto.CompactTextString(m) }
func (*MoarFloats) ProtoMessage()    {}
func (*MoarFloats) Descriptor() ([]byte, []int) {
	return fileDescriptor_1bea00113e7588f8, []int{3}
}

func (m *MoarFloats) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_MoarFloats.Unmarshal(m, b)
}
func (m *MoarFloats) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_MoarFloats.Marshal(b, m, deterministic)
}
func (m *MoarFloats) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MoarFloats.Merge(m, src)
}
func (m *MoarFloats) XXX_Size() int {
	return xxx_messageInfo_MoarFloats.Size(m)
}
func (m *MoarFloats) XXX_DiscardUnknown() {
	xxx_messageInfo_MoarFloats.DiscardUnknown(m)
}

var xxx_messageInfo_MoarFloats proto.InternalMessageInfo

const Default_MoarFloats_A float32 = 1
const Default_MoarFloats_B float32 = 1
const Default_MoarFloats_C float32 = 1.01
const Default_MoarFloats_D float32 = 0.1
const Default_MoarFloats_E float32 = 100000
const Default_MoarFloats_F float32 = 1e-05

func (m *MoarFloats) GetA() float32 {
	if m != nil && m.A != nil {
		return *m.A
	}
	return Default_MoarFloats_A
}

func (m *MoarFloats) GetB() float32 {
	if m != nil && m.B != nil {
		return *m.B
	}
	return Default_MoarFloats_B
}

func (m *MoarFloats) GetC() float32 {
	if m != nil && m.C != nil {
		return *m.C
	}
	return Default_MoarFloats_C
}

func (m *MoarFloats) GetD() float32 {
	if m != nil && m.D != nil {
		return *m.D
	}
	return Default_MoarFloats_D
}

func (m *MoarFloats) GetE() float32 {
	if m != nil && m.E != nil {
		return *m.E
	}
	return Default_MoarFloats_E
}

func (m *MoarFloats) GetF() float32 {
	if m != nil && m.F != nil {
		return *m.F
	}
	return Default_MoarFloats_F
}

func init() {
	proto.RegisterEnum("testprotos.Color", Color_name, Color_value)
	proto.RegisterEnum("testprotos.Number", Number_name, Number_value)
	proto.RegisterType((*PrimitiveDefaults)(nil), "testprotos.PrimitiveDefaults")
	proto.RegisterType((*StringAndBytesDefaults)(nil), "testprotos.StringAndBytesDefaults")
	proto.RegisterType((*EnumDefaults)(nil), "testprotos.EnumDefaults")
	proto.RegisterType((*MoarFloats)(nil), "testprotos.MoarFloats")
}

func init() { proto.RegisterFile("desc_test_defaults.proto", fileDescriptor_1bea00113e7588f8) }

var fileDescriptor_1bea00113e7588f8 = []byte{
	// 1291 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x56, 0xdb, 0x6e, 0xdb, 0xc6,
	0x16, 0xf5, 0xe8, 0x1a, 0x4f, 0xec, 0x58, 0x9e, 0xe4, 0x24, 0x93, 0xdb, 0xc9, 0x44, 0x27, 0x3e,
	0x61, 0x2e, 0x96, 0x49, 0x89, 0x66, 0x52, 0xbd, 0x35, 0xb5, 0x5a, 0x04, 0x70, 0xa4, 0x82, 0x69,
	0x1a, 0xc0, 0x20, 0x20, 0x50, 0xe2, 0xd0, 0x66, 0x41, 0x0f, 0x65, 0x0e, 0x99, 0x28, 0x79, 0xea,
	0x63, 0xbe, 0xa1, 0xff, 0xd0, 0xb7, 0x02, 0xfd, 0x81, 0xfe, 0x48, 0xff, 0xa4, 0x98, 0x3d, 0xa4,
	0xc4, 0x00, 0x09, 0x50, 0xbd, 0x68, 0xb0, 0xd6, 0xda, 0xb3, 0xf7, 0xda, 0xb3, 0x31, 0x1c, 0x4c,
	0x03, 0x2e, 0xe7, 0xd3, 0x8c, 0xcb, 0x6c, 0x1a, 0xf0, 0xd0, 0xcf, 0xe3, 0x4c, 0xf6, 0x16, 0x69,
	0x92, 0x25, 0x04, 0x2b, 0x10, 0x96, 0xb2, 0xfb, 0x3b, 0xc6, 0xbb, 0x3f, 0xa6, 0xd1, 0x79, 0x94,
	0x45, 0xef, 0xf8, 0x51, 0xa1, 0x23, 0xb7, 0x71, 0x23, 0x8c, 0x07, 0x7d, 0x8a, 0x18, 0x32, 0x6a,
	0xc3, 0xf6, 0xa0, 0x67, 0xd9, 0xd6, 0xe1, 0x37, 0x2e, 0x80, 0x9a, 0x74, 0x6c, 0x5a, 0x63, 0xc8,
	0x40, 0x9f, 0x91, 0x8e, 0x4d, 0xba, 0xb8, 0xa9, 0x44, 0x01, 0xad, 0x43, 0xe8, 0x96, 0xd3, 0x33,
	0xfb, 0x7d, 0xcb, 0xb6, 0xf8, 0x93, 0xfe, 0xc0, 0xd5, 0x14, 0xd9, 0x53, 0x1a, 0xc7, 0x0e, 0x68,
	0x03, 0x76, 0xd8, 0x29, 0x34, 0xe6, 0xf3, 0xc3, 0x67, 0xa5, 0xcc, 0xb1, 0x03, 0x72, 0x17, 0xb7,
	0x95, 0x3e, 0x12, 0x21, 0x6d, 0xc2, 0x66, 0xf5, 0x48, 0x84, 0x6e, 0x89, 0x69, 0xda, 0xb1, 0x15,
	0xdd, 0x82, 0x7d, 0x4a, 0x1a, 0x30, 0xf2, 0x00, 0x63, 0xa5, 0x14, 0xfc, 0xf4, 0xa5, 0x08, 0x69,
	0x1b, 0x36, 0x68, 0xec, 0x2b, 0x49, 0x05, 0xd7, 0x2a, 0xc7, 0x2e, 0x54, 0x97, 0x60, 0x9f, 0x95,
	0xaa, 0xc4, 0xcb, 0x4a, 0x84, 0x2f, 0xe8, 0xa6, 0xae, 0x44, 0xf8, 0xc2, 0x2d, 0xb1, 0xb2, 0x12,
	0x45, 0x63, 0x5d, 0x49, 0x41, 0x03, 0x46, 0xae, 0xe3, 0xfa, 0x2c, 0xb6, 0xe8, 0x65, 0x86, 0x8c,
	0x4b, 0xc3, 0x46, 0x96, 0xe6, 0xdc, 0x55, 0x00, 0xb9, 0xa1, 0xf0, 0x3e, 0xdd, 0x02, 0xbc, 0x19,
	0xfa, 0xb1, 0x04, 0xa2, 0xaf, 0x88, 0x68, 0xd0, 0xa7, 0xdb, 0x0c, 0x19, 0xcd, 0x61, 0xd3, 0x32,
	0x2d, 0xd3, 0x72, 0x15, 0x42, 0x6e, 0xe1, 0x46, 0x34, 0xe8, 0x0b, 0x7a, 0x05, 0x98, 0xd6, 0xbe,
	0xa6, 0x00, 0x2b, 0xb8, 0x25, 0xdd, 0xd1, 0x9c, 0x35, 0xb0, 0x0e, 0x9f, 0x3b, 0xc0, 0x2d, 0xc9,
	0x5d, 0xdc, 0x54, 0xff, 0x82, 0x76, 0x80, 0x6c, 0xef, 0x17, 0xac, 0x46, 0x21, 0x9f, 0x63, 0xd3,
	0x5d, 0x86, 0x8c, 0xfa, 0x3a, 0x9f, 0x63, 0xc3, 0x9e, 0x8e, 0x2d, 0x28, 0x01, 0x66, 0x9d, 0xcf,
	0xb1, 0x45, 0xc1, 0x2d, 0xe9, 0x55, 0xcd, 0xad, 0xf2, 0x39, 0xb6, 0xce, 0xe7, 0xd8, 0x4b, 0x41,
	0xaf, 0x01, 0x59, 0xc9, 0xa7, 0x50, 0x72, 0x13, 0x4a, 0x95, 0xf4, 0x3f, 0x0c, 0x19, 0xbb, 0x65,
	0x42, 0x80, 0xc8, 0x1d, 0xa8, 0x54, 0x0a, 0x7a, 0x1d, 0xb8, 0x32, 0xa5, 0x06, 0x4b, 0x76, 0x49,
	0x6f, 0x68, 0xb6, 0x62, 0x43, 0x2e, 0xc9, 0x3d, 0xdc, 0x82, 0x85, 0xa0, 0x14, 0xe8, 0x55, 0xda,
	0x02, 0x86, 0xbc, 0x8e, 0x2d, 0xe9, 0x4d, 0x86, 0x0c, 0xb2, 0xce, 0xeb, 0xd8, 0x3a, 0xaf, 0x63,
	0x4b, 0x41, 0x6f, 0x01, 0xb7, 0xce, 0xab, 0xc0, 0x92, 0x5d, 0xd2, 0xdb, 0x9a, 0xad, 0xd8, 0x29,
	0xf2, 0xaa, 0x85, 0xa0, 0x77, 0x80, 0xae, 0xe4, 0x05, 0xb8, 0xf0, 0x1b, 0xd2, 0xbb, 0x0c, 0x19,
	0x3b, 0x55, 0xbf, 0x61, 0xe1, 0x28, 0x14, 0xf4, 0xbf, 0xc0, 0x55, 0xfd, 0x86, 0xa5, 0xdf, 0x70,
	0x49, 0xef, 0x69, 0xb6, 0xe2, 0x37, 0x2c, 0xfd, 0x86, 0x4b, 0x41, 0x19, 0xd0, 0x9f, 0xf9, 0x0d,
	0x57, 0x7e, 0x43, 0x7a, 0x9f, 0x21, 0xa3, 0x53, 0xf5, 0x1b, 0x16, 0x8e, 0x42, 0x41, 0xbb, 0xc0,
	0x55, 0xfd, 0x86, 0xa5, 0xdf, 0x70, 0x49, 0xff, 0xa7, 0xd9, 0x8a, 0xdf, 0xb0, 0xf4, 0xab, 0xf2,
	0x3e, 0x00, 0xfa, 0x33, 0xbf, 0xa1, 0x9e, 0xa7, 0x7c, 0xd0, 0xa7, 0x7b, 0x0c, 0x19, 0xdb, 0xab,
	0x79, 0xca, 0xf5, 0xfc, 0xe6, 0x6a, 0x46, 0xff, 0x0f, 0xcc, 0x6a, 0x66, 0x14, 0x06, 0x41, 0x8e,
	0x4d, 0x1f, 0x32, 0x64, 0x34, 0xd6, 0x41, 0x7a, 0x08, 0x73, 0x35, 0x68, 0x06, 0x30, 0xeb, 0x20,
	0x35, 0x68, 0x37, 0x61, 0xc3, 0x90, 0x3e, 0x62, 0xc8, 0x68, 0xaf, 0x1c, 0xe6, 0x45, 0x67, 0x73,
	0xe8, 0xdd, 0x63, 0xe0, 0x56, 0x1e, 0x00, 0x84, 0x40, 0xd5, 0x9a, 0x27, 0x0c, 0x19, 0xad, 0x75,
	0x60, 0xd1, 0x9a, 0x1c, 0xcc, 0x3f, 0x05, 0x6e, 0x1d, 0xa8, 0xc0, 0xee, 0x6f, 0x0d, 0x7c, 0xfd,
	0x75, 0x96, 0x46, 0xe2, 0xf4, 0x5b, 0x11, 0xbc, 0xf8, 0x90, 0x71, 0xb9, 0xba, 0x34, 0x0f, 0x71,
	0x2d, 0xb8, 0x80, 0x2b, 0x73, 0x73, 0xb8, 0x97, 0x9d, 0x45, 0x92, 0x45, 0x92, 0xf9, 0x4c, 0x82,
	0x9a, 0xbd, 0x8f, 0xb2, 0x33, 0xd6, 0x15, 0x5c, 0x66, 0x3c, 0x60, 0x17, 0x79, 0x92, 0x71, 0xd9,
	0x75, 0x6b, 0xc1, 0x85, 0x0a, 0x93, 0x17, 0x70, 0x99, 0xfe, 0xfb, 0x30, 0x79, 0x41, 0x5e, 0xe1,
	0x6d, 0x2e, 0xe7, 0xfe, 0x82, 0x07, 0xd3, 0x99, 0x2a, 0x03, 0x2e, 0xdc, 0xad, 0xa1, 0xe1, 0x99,
	0xa6, 0xe9, 0x99, 0xa6, 0xe5, 0x99, 0xe6, 0x33, 0xcf, 0xb4, 0x4c, 0xcf, 0xb4, 0x6c, 0x4f, 0x78,
	0xa9, 0x97, 0x79, 0xa6, 0x35, 0xf0, 0x3c, 0xef, 0xa1, 0xd7, 0xf5, 0x06, 0xcf, 0x1c, 0x77, 0xab,
	0x08, 0x07, 0x13, 0xe4, 0x01, 0xbe, 0x9c, 0x67, 0xe1, 0xf3, 0xa9, 0x4e, 0x0b, 0x37, 0xf3, 0xe6,
	0xb0, 0xfe, 0xf7, 0xa7, 0x3f, 0x5c, 0xac, 0x70, 0x6d, 0x99, 0x98, 0xb8, 0xa3, 0x05, 0x53, 0x55,
	0xd7, 0xf4, 0x23, 0x4f, 0x13, 0xb8, 0x9b, 0x37, 0x87, 0xad, 0x33, 0x1e, 0x6f, 0xc4, 0x89, 0x7b,
	0x45, 0xf3, 0x6f, 0xa3, 0xec, 0xec, 0x84, 0xa7, 0x09, 0xb1, 0xf0, 0x0e, 0x94, 0x57, 0x09, 0x68,
	0x41, 0xa1, 0x9b, 0xef, 0x93, 0x54, 0xd5, 0x1a, 0x07, 0xee, 0x36, 0x28, 0x56, 0x21, 0x7f, 0x22,
	0x4c, 0x52, 0xee, 0xc7, 0xf1, 0x87, 0x69, 0x9c, 0x88, 0xd3, 0xb2, 0xa4, 0x36, 0xe4, 0xf9, 0x84,
	0xd6, 0x2d, 0xd2, 0x22, 0xa6, 0x44, 0x65, 0xbb, 0xe6, 0x89, 0x90, 0x99, 0x2f, 0xb2, 0xa7, 0x4c,
	0x26, 0x2c, 0xca, 0x98, 0x5c, 0xf8, 0x42, 0xb2, 0xf3, 0x3c, 0xce, 0xa2, 0x45, 0xcc, 0x59, 0x1c,
	0x09, 0x2e, 0xef, 0x2b, 0xc2, 0x8f, 0x65, 0xc2, 0xd4, 0x77, 0x50, 0x32, 0x99, 0x2f, 0x16, 0x49,
	0x9a, 0xb1, 0x30, 0x49, 0xb5, 0x72, 0x5f, 0xc9, 0xca, 0x1d, 0xe3, 0x28, 0xe3, 0xa9, 0x1f, 0x4b,
	0x16, 0x09, 0x96, 0x2c, 0xb2, 0x28, 0x11, 0xec, 0x9d, 0x1f, 0xe7, 0x5c, 0xba, 0x1d, 0x9d, 0xff,
	0x38, 0x11, 0xa7, 0xba, 0x3d, 0xdd, 0xbf, 0x6a, 0x78, 0x6b, 0x24, 0xf2, 0xf3, 0xd5, 0x48, 0x18,
	0xb8, 0x9e, 0xf2, 0x00, 0x66, 0xe2, 0x4a, 0x7f, 0xb7, 0xb7, 0xfe, 0xee, 0xf6, 0xbe, 0x4b, 0xe2,
	0x24, 0x1d, 0xd6, 0xdd, 0xd1, 0x91, 0xab, 0x24, 0xa4, 0x87, 0x9b, 0xa7, 0x29, 0xe7, 0x02, 0x06,
	0xe1, 0x8b, 0xda, 0xe6, 0x0f, 0xee, 0x68, 0x34, 0x76, 0xb5, 0x8c, 0x3c, 0xc1, 0x8d, 0x59, 0x9c,
	0x73, 0x38, 0xf5, 0x2f, 0xca, 0x1b, 0x2f, 0x8e, 0xdf, 0x8c, 0x5c, 0x10, 0x91, 0xa7, 0xb8, 0x01,
	0x9d, 0x6f, 0x80, 0x98, 0x54, 0xc5, 0xe3, 0xfc, 0x7c, 0xc6, 0xd3, 0x61, 0xe3, 0x64, 0xe4, 0x4e,
	0x5c, 0x50, 0x91, 0x47, 0xb8, 0xfe, 0x91, 0x07, 0x70, 0xae, 0x5f, 0x16, 0xd7, 0x4f, 0x54, 0xd5,
	0x1f, 0x79, 0xa0, 0xa4, 0x89, 0xe0, 0x70, 0xa2, 0x5f, 0x91, 0x4e, 0xc6, 0x23, 0x57, 0x69, 0x94,
	0x34, 0x48, 0x24, 0x9c, 0xe2, 0x57, 0xa4, 0x47, 0x93, 0xd7, 0xae, 0xd2, 0x74, 0x7f, 0x45, 0x18,
	0xbf, 0x4a, 0xfc, 0xf4, 0xfb, 0x38, 0xf1, 0x33, 0x49, 0x76, 0x30, 0xf2, 0x8b, 0x97, 0x08, 0xb2,
	0x5c, 0xe4, 0x2b, 0x60, 0x06, 0x7d, 0xd2, 0xc0, 0x8c, 0x10, 0x8c, 0xe6, 0xc5, 0x83, 0xa3, 0x61,
	0xf5, 0x4c, 0xcb, 0x45, 0x73, 0xb2, 0x8b, 0x91, 0x7e, 0x60, 0xd4, 0x86, 0x75, 0xb3, 0x67, 0xb9,
	0x28, 0x20, 0xd7, 0x30, 0xe2, 0xc5, 0x53, 0xa2, 0x65, 0x99, 0xea, 0xe7, 0x22, 0x4e, 0xae, 0x62,
	0xa4, 0x5f, 0x10, 0xb5, 0x61, 0xd3, 0xe2, 0xfb, 0xe6, 0xa1, 0x8b, 0xc2, 0xc7, 0x7b, 0xb8, 0x09,
	0x6d, 0x24, 0x6d, 0xac, 0xce, 0xa8, 0xb3, 0x41, 0x36, 0xb1, 0x3e, 0x80, 0x0e, 0x22, 0x97, 0x30,
	0x34, 0xb7, 0x53, 0x7b, 0xfc, 0x33, 0x6e, 0xe9, 0xea, 0x15, 0xa6, 0x5a, 0xd8, 0xd9, 0x50, 0x11,
	0x27, 0x10, 0xd1, 0xc6, 0xf5, 0xf1, 0xcb, 0xe3, 0xce, 0x86, 0xe2, 0xc6, 0x6f, 0x8e, 0x8f, 0x35,
	0x34, 0x19, 0x8f, 0x3a, 0x48, 0x2d, 0xde, 0x8c, 0x27, 0x7a, 0xf1, 0xd3, 0xdb, 0x49, 0xa7, 0xa6,
	0x16, 0x47, 0x93, 0xd7, 0x9d, 0xda, 0xad, 0x5a, 0x07, 0xbd, 0x18, 0x9c, 0x58, 0xa7, 0x51, 0x76,
	0x96, 0xcf, 0x7a, 0xf3, 0xe4, 0xfc, 0xe0, 0x97, 0xb3, 0xfc, 0x7c, 0x71, 0x00, 0xdd, 0x4a, 0x79,
	0x18, 0xf3, 0x79, 0x76, 0x10, 0x89, 0x8c, 0xa7, 0xc2, 0x8f, 0x0f, 0xd6, 0x7d, 0xfc, 0x27, 0x00,
	0x00, 0xff, 0xff, 0x2b, 0x13, 0x1f, 0xbd, 0xf1, 0x09, 0x00, 0x00,
}
