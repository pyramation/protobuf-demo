// Code generated by protoc-gen-go. DO NOT EDIT.
// source: google/ads/googleads/v3/services/user_location_view_service.proto

package services

import (
	context "context"
	fmt "fmt"
	math "math"

	proto "github.com/golang/protobuf/proto"
	resources "google.golang.org/genproto/googleapis/ads/googleads/v3/resources"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
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

// Request message for [UserLocationViewService.GetUserLocationView][google.ads.googleads.v3.services.UserLocationViewService.GetUserLocationView].
type GetUserLocationViewRequest struct {
	// Required. The resource name of the user location view to fetch.
	ResourceName         string   `protobuf:"bytes,1,opt,name=resource_name,json=resourceName,proto3" json:"resource_name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetUserLocationViewRequest) Reset()         { *m = GetUserLocationViewRequest{} }
func (m *GetUserLocationViewRequest) String() string { return proto.CompactTextString(m) }
func (*GetUserLocationViewRequest) ProtoMessage()    {}
func (*GetUserLocationViewRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_7fcc93788fa7dbb3, []int{0}
}

func (m *GetUserLocationViewRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetUserLocationViewRequest.Unmarshal(m, b)
}
func (m *GetUserLocationViewRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetUserLocationViewRequest.Marshal(b, m, deterministic)
}
func (m *GetUserLocationViewRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetUserLocationViewRequest.Merge(m, src)
}
func (m *GetUserLocationViewRequest) XXX_Size() int {
	return xxx_messageInfo_GetUserLocationViewRequest.Size(m)
}
func (m *GetUserLocationViewRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetUserLocationViewRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetUserLocationViewRequest proto.InternalMessageInfo

func (m *GetUserLocationViewRequest) GetResourceName() string {
	if m != nil {
		return m.ResourceName
	}
	return ""
}

func init() {
	proto.RegisterType((*GetUserLocationViewRequest)(nil), "google.ads.googleads.v3.services.GetUserLocationViewRequest")
}

func init() {
	proto.RegisterFile("google/ads/googleads/v3/services/user_location_view_service.proto", fileDescriptor_7fcc93788fa7dbb3)
}

var fileDescriptor_7fcc93788fa7dbb3 = []byte{
	// 435 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x93, 0x31, 0x8b, 0xd4, 0x40,
	0x14, 0xc7, 0xd9, 0x08, 0x82, 0x41, 0x9b, 0x58, 0xdc, 0x19, 0x0f, 0x5c, 0x8e, 0x2b, 0xf4, 0x84,
	0x19, 0x74, 0xb0, 0x19, 0xb5, 0x98, 0x6d, 0x56, 0x50, 0xe4, 0x50, 0x4c, 0x21, 0x0b, 0x61, 0x2e,
	0x79, 0xc6, 0x81, 0x24, 0xb3, 0xce, 0x9b, 0xcd, 0x15, 0x62, 0xa3, 0xbd, 0x8d, 0xdf, 0xc0, 0xd2,
	0x8f, 0x72, 0xad, 0xd8, 0x58, 0x59, 0x58, 0xf9, 0x11, 0xac, 0x64, 0x77, 0x66, 0x72, 0xb9, 0xf3,
	0xc2, 0x75, 0x7f, 0xf2, 0xff, 0xbd, 0xff, 0x7b, 0xf3, 0x1e, 0x89, 0x45, 0xa5, 0x75, 0x55, 0x03,
	0x95, 0x25, 0x52, 0x27, 0xd7, 0xaa, 0x63, 0x14, 0xc1, 0x74, 0xaa, 0x00, 0xa4, 0x2b, 0x04, 0x93,
	0xd7, 0xba, 0x90, 0x56, 0xe9, 0x36, 0xef, 0x14, 0x1c, 0xe5, 0xde, 0x23, 0x4b, 0xa3, 0xad, 0x4e,
	0xa6, 0xae, 0x8e, 0xc8, 0x12, 0x49, 0x1f, 0x41, 0x3a, 0x46, 0x42, 0x44, 0xca, 0xc7, 0x9a, 0x18,
	0x40, 0xbd, 0x32, 0xe7, 0x77, 0x71, 0xe9, 0xe9, 0x4e, 0xa8, 0x5d, 0x2a, 0x2a, 0xdb, 0x56, 0xdb,
	0x0d, 0x81, 0xde, 0xdd, 0x1a, 0xb8, 0x45, 0xad, 0xa0, 0xb5, 0xde, 0xb8, 0x35, 0x30, 0xde, 0x28,
	0xa8, 0xcb, 0xfc, 0x10, 0xde, 0xca, 0x4e, 0x69, 0xe3, 0x81, 0x1b, 0x03, 0x20, 0x8c, 0xe1, 0xac,
	0x5d, 0x1b, 0xa7, 0x73, 0xb0, 0xaf, 0x10, 0xcc, 0x33, 0x3f, 0x50, 0xa6, 0xe0, 0xe8, 0x05, 0xbc,
	0x5b, 0x01, 0xda, 0x24, 0x8b, 0xaf, 0x05, 0x3e, 0x6f, 0x65, 0x03, 0xdb, 0x93, 0xe9, 0xe4, 0xf6,
	0x95, 0xd9, 0xbd, 0x5f, 0x22, 0xfa, 0x2b, 0xee, 0xc6, 0x77, 0x4e, 0x56, 0xe0, 0xd5, 0x52, 0x21,
	0x29, 0x74, 0x43, 0xff, 0x0b, 0xbc, 0x1a, 0x72, 0x9e, 0xcb, 0x06, 0xee, 0x7f, 0x8e, 0xe2, 0xad,
	0xb3, 0xc8, 0x4b, 0xb7, 0xc1, 0xe4, 0xc7, 0x24, 0xbe, 0x7e, 0xce, 0x48, 0xc9, 0x23, 0x72, 0xd1,
	0xee, 0xc9, 0xf8, 0x4b, 0x52, 0x36, 0x5a, 0xdd, 0xdf, 0x85, 0x9c, 0xad, 0xdd, 0x7d, 0xfa, 0x53,
	0x9c, 0x7e, 0xff, 0xc7, 0xef, 0xbf, 0xbf, 0x44, 0x0f, 0x12, 0xb6, 0xbe, 0xe7, 0xfb, 0x53, 0xce,
	0xe3, 0x62, 0x85, 0x56, 0x37, 0x60, 0x90, 0xee, 0x6f, 0x0e, 0x3c, 0x0c, 0x42, 0xba, 0xff, 0x21,
	0xbd, 0x79, 0x2c, 0xb6, 0xc7, 0xf6, 0x35, 0xfb, 0x14, 0xc5, 0x7b, 0x85, 0x6e, 0x2e, 0x7c, 0xe2,
	0x6c, 0x67, 0x64, 0x6d, 0x07, 0xeb, 0x6b, 0x1e, 0x4c, 0x5e, 0x3f, 0xf1, 0x09, 0x95, 0xae, 0x65,
	0x5b, 0x11, 0x6d, 0x2a, 0x5a, 0x41, 0xbb, 0xb9, 0x35, 0x3d, 0xe9, 0x39, 0xfe, 0x0b, 0x3c, 0x0c,
	0xe2, 0x6b, 0x74, 0x69, 0x2e, 0xc4, 0xb7, 0x68, 0x3a, 0x77, 0x81, 0xa2, 0x44, 0xe2, 0xe4, 0x5a,
	0x65, 0x8c, 0xf8, 0xc6, 0x78, 0x1c, 0x90, 0x85, 0x28, 0x71, 0xd1, 0x23, 0x8b, 0x8c, 0x2d, 0x02,
	0xf2, 0x27, 0xda, 0x73, 0xdf, 0x39, 0x17, 0x25, 0x72, 0xde, 0x43, 0x9c, 0x67, 0x8c, 0xf3, 0x80,
	0x1d, 0x5e, 0xde, 0xcc, 0xc9, 0xfe, 0x05, 0x00, 0x00, 0xff, 0xff, 0xcd, 0xee, 0x4d, 0xf7, 0xa9,
	0x03, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// UserLocationViewServiceClient is the client API for UserLocationViewService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type UserLocationViewServiceClient interface {
	// Returns the requested user location view in full detail.
	GetUserLocationView(ctx context.Context, in *GetUserLocationViewRequest, opts ...grpc.CallOption) (*resources.UserLocationView, error)
}

type userLocationViewServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewUserLocationViewServiceClient(cc grpc.ClientConnInterface) UserLocationViewServiceClient {
	return &userLocationViewServiceClient{cc}
}

func (c *userLocationViewServiceClient) GetUserLocationView(ctx context.Context, in *GetUserLocationViewRequest, opts ...grpc.CallOption) (*resources.UserLocationView, error) {
	out := new(resources.UserLocationView)
	err := c.cc.Invoke(ctx, "/google.ads.googleads.v3.services.UserLocationViewService/GetUserLocationView", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// UserLocationViewServiceServer is the server API for UserLocationViewService service.
type UserLocationViewServiceServer interface {
	// Returns the requested user location view in full detail.
	GetUserLocationView(context.Context, *GetUserLocationViewRequest) (*resources.UserLocationView, error)
}

// UnimplementedUserLocationViewServiceServer can be embedded to have forward compatible implementations.
type UnimplementedUserLocationViewServiceServer struct {
}

func (*UnimplementedUserLocationViewServiceServer) GetUserLocationView(ctx context.Context, req *GetUserLocationViewRequest) (*resources.UserLocationView, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetUserLocationView not implemented")
}

func RegisterUserLocationViewServiceServer(s *grpc.Server, srv UserLocationViewServiceServer) {
	s.RegisterService(&_UserLocationViewService_serviceDesc, srv)
}

func _UserLocationViewService_GetUserLocationView_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetUserLocationViewRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserLocationViewServiceServer).GetUserLocationView(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/google.ads.googleads.v3.services.UserLocationViewService/GetUserLocationView",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserLocationViewServiceServer).GetUserLocationView(ctx, req.(*GetUserLocationViewRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _UserLocationViewService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "google.ads.googleads.v3.services.UserLocationViewService",
	HandlerType: (*UserLocationViewServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetUserLocationView",
			Handler:    _UserLocationViewService_GetUserLocationView_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "google/ads/googleads/v3/services/user_location_view_service.proto",
}
