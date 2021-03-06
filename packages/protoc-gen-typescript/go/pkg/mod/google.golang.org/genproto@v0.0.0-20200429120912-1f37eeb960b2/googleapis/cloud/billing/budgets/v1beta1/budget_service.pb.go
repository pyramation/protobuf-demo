// Code generated by protoc-gen-go. DO NOT EDIT.
// source: google/cloud/billing/budgets/v1beta1/budget_service.proto

package budgets

import (
	context "context"
	fmt "fmt"
	math "math"

	proto "github.com/golang/protobuf/proto"
	empty "github.com/golang/protobuf/ptypes/empty"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	field_mask "google.golang.org/genproto/protobuf/field_mask"
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

// Request for CreateBudget
type CreateBudgetRequest struct {
	// Required. The name of the billing account to create the budget in. Values
	// are of the form `billingAccounts/{billingAccountId}`.
	Parent string `protobuf:"bytes,1,opt,name=parent,proto3" json:"parent,omitempty"`
	// Required. Budget to create.
	Budget               *Budget  `protobuf:"bytes,2,opt,name=budget,proto3" json:"budget,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *CreateBudgetRequest) Reset()         { *m = CreateBudgetRequest{} }
func (m *CreateBudgetRequest) String() string { return proto.CompactTextString(m) }
func (*CreateBudgetRequest) ProtoMessage()    {}
func (*CreateBudgetRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_d0e8a060078cd638, []int{0}
}

func (m *CreateBudgetRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateBudgetRequest.Unmarshal(m, b)
}
func (m *CreateBudgetRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateBudgetRequest.Marshal(b, m, deterministic)
}
func (m *CreateBudgetRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateBudgetRequest.Merge(m, src)
}
func (m *CreateBudgetRequest) XXX_Size() int {
	return xxx_messageInfo_CreateBudgetRequest.Size(m)
}
func (m *CreateBudgetRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateBudgetRequest.DiscardUnknown(m)
}

var xxx_messageInfo_CreateBudgetRequest proto.InternalMessageInfo

func (m *CreateBudgetRequest) GetParent() string {
	if m != nil {
		return m.Parent
	}
	return ""
}

func (m *CreateBudgetRequest) GetBudget() *Budget {
	if m != nil {
		return m.Budget
	}
	return nil
}

// Request for UpdateBudget
type UpdateBudgetRequest struct {
	// Required. The updated budget object.
	// The budget to update is specified by the budget name in the budget.
	Budget *Budget `protobuf:"bytes,1,opt,name=budget,proto3" json:"budget,omitempty"`
	// Optional. Indicates which fields in the provided budget to update.
	// Read-only fields (such as `name`) cannot be changed. If this is not
	// provided, then only fields with non-default values from the request are
	// updated. See
	// https://developers.google.com/protocol-buffers/docs/proto3#default for more
	// details about default values.
	UpdateMask           *field_mask.FieldMask `protobuf:"bytes,2,opt,name=update_mask,json=updateMask,proto3" json:"update_mask,omitempty"`
	XXX_NoUnkeyedLiteral struct{}              `json:"-"`
	XXX_unrecognized     []byte                `json:"-"`
	XXX_sizecache        int32                 `json:"-"`
}

func (m *UpdateBudgetRequest) Reset()         { *m = UpdateBudgetRequest{} }
func (m *UpdateBudgetRequest) String() string { return proto.CompactTextString(m) }
func (*UpdateBudgetRequest) ProtoMessage()    {}
func (*UpdateBudgetRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_d0e8a060078cd638, []int{1}
}

func (m *UpdateBudgetRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UpdateBudgetRequest.Unmarshal(m, b)
}
func (m *UpdateBudgetRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UpdateBudgetRequest.Marshal(b, m, deterministic)
}
func (m *UpdateBudgetRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UpdateBudgetRequest.Merge(m, src)
}
func (m *UpdateBudgetRequest) XXX_Size() int {
	return xxx_messageInfo_UpdateBudgetRequest.Size(m)
}
func (m *UpdateBudgetRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_UpdateBudgetRequest.DiscardUnknown(m)
}

var xxx_messageInfo_UpdateBudgetRequest proto.InternalMessageInfo

func (m *UpdateBudgetRequest) GetBudget() *Budget {
	if m != nil {
		return m.Budget
	}
	return nil
}

func (m *UpdateBudgetRequest) GetUpdateMask() *field_mask.FieldMask {
	if m != nil {
		return m.UpdateMask
	}
	return nil
}

// Request for GetBudget
type GetBudgetRequest struct {
	// Required. Name of budget to get. Values are of the form
	// `billingAccounts/{billingAccountId}/budgets/{budgetId}`.
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetBudgetRequest) Reset()         { *m = GetBudgetRequest{} }
func (m *GetBudgetRequest) String() string { return proto.CompactTextString(m) }
func (*GetBudgetRequest) ProtoMessage()    {}
func (*GetBudgetRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_d0e8a060078cd638, []int{2}
}

func (m *GetBudgetRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetBudgetRequest.Unmarshal(m, b)
}
func (m *GetBudgetRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetBudgetRequest.Marshal(b, m, deterministic)
}
func (m *GetBudgetRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetBudgetRequest.Merge(m, src)
}
func (m *GetBudgetRequest) XXX_Size() int {
	return xxx_messageInfo_GetBudgetRequest.Size(m)
}
func (m *GetBudgetRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetBudgetRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetBudgetRequest proto.InternalMessageInfo

func (m *GetBudgetRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

// Request for ListBudgets
type ListBudgetsRequest struct {
	// Required. Name of billing account to list budgets under. Values
	// are of the form `billingAccounts/{billingAccountId}`.
	Parent string `protobuf:"bytes,1,opt,name=parent,proto3" json:"parent,omitempty"`
	// Optional. The maximum number of budgets to return per page.
	// The default and maximum value are 100.
	PageSize int32 `protobuf:"varint,2,opt,name=page_size,json=pageSize,proto3" json:"page_size,omitempty"`
	// Optional. The value returned by the last `ListBudgetsResponse` which
	// indicates that this is a continuation of a prior `ListBudgets` call,
	// and that the system should return the next page of data.
	PageToken            string   `protobuf:"bytes,3,opt,name=page_token,json=pageToken,proto3" json:"page_token,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ListBudgetsRequest) Reset()         { *m = ListBudgetsRequest{} }
func (m *ListBudgetsRequest) String() string { return proto.CompactTextString(m) }
func (*ListBudgetsRequest) ProtoMessage()    {}
func (*ListBudgetsRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_d0e8a060078cd638, []int{3}
}

func (m *ListBudgetsRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListBudgetsRequest.Unmarshal(m, b)
}
func (m *ListBudgetsRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListBudgetsRequest.Marshal(b, m, deterministic)
}
func (m *ListBudgetsRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListBudgetsRequest.Merge(m, src)
}
func (m *ListBudgetsRequest) XXX_Size() int {
	return xxx_messageInfo_ListBudgetsRequest.Size(m)
}
func (m *ListBudgetsRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ListBudgetsRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ListBudgetsRequest proto.InternalMessageInfo

func (m *ListBudgetsRequest) GetParent() string {
	if m != nil {
		return m.Parent
	}
	return ""
}

func (m *ListBudgetsRequest) GetPageSize() int32 {
	if m != nil {
		return m.PageSize
	}
	return 0
}

func (m *ListBudgetsRequest) GetPageToken() string {
	if m != nil {
		return m.PageToken
	}
	return ""
}

// Response for ListBudgets
type ListBudgetsResponse struct {
	// List of the budgets owned by the requested billing account.
	Budgets []*Budget `protobuf:"bytes,1,rep,name=budgets,proto3" json:"budgets,omitempty"`
	// If not empty, indicates that there may be more budgets that match the
	// request; this value should be passed in a new `ListBudgetsRequest`.
	NextPageToken        string   `protobuf:"bytes,2,opt,name=next_page_token,json=nextPageToken,proto3" json:"next_page_token,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ListBudgetsResponse) Reset()         { *m = ListBudgetsResponse{} }
func (m *ListBudgetsResponse) String() string { return proto.CompactTextString(m) }
func (*ListBudgetsResponse) ProtoMessage()    {}
func (*ListBudgetsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_d0e8a060078cd638, []int{4}
}

func (m *ListBudgetsResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListBudgetsResponse.Unmarshal(m, b)
}
func (m *ListBudgetsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListBudgetsResponse.Marshal(b, m, deterministic)
}
func (m *ListBudgetsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListBudgetsResponse.Merge(m, src)
}
func (m *ListBudgetsResponse) XXX_Size() int {
	return xxx_messageInfo_ListBudgetsResponse.Size(m)
}
func (m *ListBudgetsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_ListBudgetsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_ListBudgetsResponse proto.InternalMessageInfo

func (m *ListBudgetsResponse) GetBudgets() []*Budget {
	if m != nil {
		return m.Budgets
	}
	return nil
}

func (m *ListBudgetsResponse) GetNextPageToken() string {
	if m != nil {
		return m.NextPageToken
	}
	return ""
}

// Request for DeleteBudget
type DeleteBudgetRequest struct {
	// Required. Name of the budget to delete. Values are of the form
	// `billingAccounts/{billingAccountId}/budgets/{budgetId}`.
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DeleteBudgetRequest) Reset()         { *m = DeleteBudgetRequest{} }
func (m *DeleteBudgetRequest) String() string { return proto.CompactTextString(m) }
func (*DeleteBudgetRequest) ProtoMessage()    {}
func (*DeleteBudgetRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_d0e8a060078cd638, []int{5}
}

func (m *DeleteBudgetRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteBudgetRequest.Unmarshal(m, b)
}
func (m *DeleteBudgetRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteBudgetRequest.Marshal(b, m, deterministic)
}
func (m *DeleteBudgetRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteBudgetRequest.Merge(m, src)
}
func (m *DeleteBudgetRequest) XXX_Size() int {
	return xxx_messageInfo_DeleteBudgetRequest.Size(m)
}
func (m *DeleteBudgetRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteBudgetRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteBudgetRequest proto.InternalMessageInfo

func (m *DeleteBudgetRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func init() {
	proto.RegisterType((*CreateBudgetRequest)(nil), "google.cloud.billing.budgets.v1beta1.CreateBudgetRequest")
	proto.RegisterType((*UpdateBudgetRequest)(nil), "google.cloud.billing.budgets.v1beta1.UpdateBudgetRequest")
	proto.RegisterType((*GetBudgetRequest)(nil), "google.cloud.billing.budgets.v1beta1.GetBudgetRequest")
	proto.RegisterType((*ListBudgetsRequest)(nil), "google.cloud.billing.budgets.v1beta1.ListBudgetsRequest")
	proto.RegisterType((*ListBudgetsResponse)(nil), "google.cloud.billing.budgets.v1beta1.ListBudgetsResponse")
	proto.RegisterType((*DeleteBudgetRequest)(nil), "google.cloud.billing.budgets.v1beta1.DeleteBudgetRequest")
}

func init() {
	proto.RegisterFile("google/cloud/billing/budgets/v1beta1/budget_service.proto", fileDescriptor_d0e8a060078cd638)
}

var fileDescriptor_d0e8a060078cd638 = []byte{
	// 724 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xac, 0x95, 0x4f, 0x4f, 0xd4, 0x40,
	0x18, 0xc6, 0x33, 0x8b, 0x82, 0x3b, 0x40, 0x34, 0xb3, 0x89, 0xae, 0x55, 0xe3, 0xa6, 0x21, 0x84,
	0xac, 0xd0, 0xca, 0x92, 0x80, 0x60, 0x48, 0xd8, 0x15, 0x31, 0x46, 0x4d, 0x70, 0xc1, 0x98, 0x78,
	0xd9, 0xcc, 0x76, 0x87, 0xd2, 0xd0, 0x76, 0x6a, 0x67, 0x0a, 0x82, 0xe1, 0x62, 0xe2, 0x27, 0x30,
	0xf1, 0x6c, 0x3c, 0x70, 0xf5, 0xa6, 0x9f, 0x41, 0x8f, 0xfa, 0x05, 0x38, 0xf8, 0x29, 0x3c, 0x99,
	0xce, 0x4c, 0x97, 0xee, 0x9f, 0x40, 0x57, 0x3c, 0x76, 0xe6, 0x7d, 0xde, 0xf7, 0xf7, 0xbe, 0xd3,
	0x67, 0x06, 0x2e, 0xda, 0x94, 0xda, 0x2e, 0x31, 0x2d, 0x97, 0x46, 0x2d, 0xb3, 0xe9, 0xb8, 0xae,
	0xe3, 0xdb, 0x66, 0x33, 0x6a, 0xd9, 0x84, 0x33, 0x73, 0x77, 0xb6, 0x49, 0x38, 0x9e, 0x55, 0xdf,
	0x0d, 0x46, 0xc2, 0x5d, 0xc7, 0x22, 0x46, 0x10, 0x52, 0x4e, 0xd1, 0x84, 0x94, 0x1a, 0x42, 0x6a,
	0x28, 0xa9, 0xa1, 0xa4, 0x86, 0x92, 0x6a, 0x37, 0x55, 0x01, 0x1c, 0x38, 0x26, 0xf6, 0x7d, 0xca,
	0x31, 0x77, 0xa8, 0xcf, 0x64, 0x0e, 0xed, 0x5a, 0x6a, 0xd7, 0x72, 0x1d, 0xe2, 0x73, 0xb5, 0x71,
	0x3b, 0xb5, 0xb1, 0xe5, 0x10, 0xb7, 0xd5, 0x68, 0x92, 0x6d, 0xbc, 0xeb, 0xd0, 0x50, 0x05, 0x5c,
	0x4f, 0x05, 0x84, 0x84, 0xd1, 0x28, 0x4c, 0xc0, 0xb4, 0x85, 0x41, 0x7a, 0xf2, 0x68, 0x8b, 0xb8,
	0x4a, 0x78, 0x43, 0x09, 0xc5, 0x57, 0x33, 0xda, 0x32, 0x89, 0x17, 0xf0, 0x7d, 0xb5, 0x59, 0xea,
	0xde, 0x94, 0x58, 0x1e, 0x66, 0x3b, 0x32, 0x42, 0x3f, 0x02, 0xb0, 0xf0, 0x20, 0x24, 0x98, 0x93,
	0x9a, 0xc8, 0x5d, 0x27, 0xaf, 0x23, 0xc2, 0x38, 0x5a, 0x85, 0xc3, 0x01, 0x0e, 0x89, 0xcf, 0x8b,
	0xa0, 0x04, 0xa6, 0xf2, 0xb5, 0xe9, 0xe3, 0x6a, 0xee, 0x4f, 0x75, 0x12, 0x4d, 0x28, 0xb4, 0x64,
	0x64, 0xb2, 0x00, 0x0e, 0x1c, 0x66, 0x58, 0xd4, 0x33, 0x55, 0x12, 0xa5, 0x45, 0x8f, 0xe1, 0xb0,
	0x0c, 0x2c, 0xe6, 0x4a, 0x60, 0x6a, 0xb4, 0x32, 0x6d, 0x64, 0x99, 0xbf, 0x21, 0xb3, 0xd4, 0x86,
	0x8e, 0xab, 0xb9, 0xba, 0x4a, 0xa0, 0x7f, 0x06, 0xb0, 0xf0, 0x22, 0x68, 0xf5, 0x80, 0x9e, 0x94,
	0x00, 0xe7, 0x2c, 0x81, 0x56, 0xe0, 0x68, 0x24, 0x2a, 0x88, 0x01, 0x29, 0x64, 0x2d, 0xc9, 0x97,
	0xcc, 0xd0, 0x58, 0x8b, 0x67, 0xf8, 0x0c, 0xb3, 0x9d, 0x58, 0x0d, 0xea, 0x50, 0x6a, 0xe2, 0x05,
	0x7d, 0x13, 0x5e, 0x79, 0x44, 0x78, 0x27, 0xe0, 0x0a, 0xbc, 0xe0, 0x63, 0x8f, 0x74, 0xce, 0x11,
	0x66, 0x9b, 0xa3, 0x50, 0xea, 0x9f, 0x00, 0x44, 0x4f, 0x1d, 0xa6, 0xf2, 0xb2, 0xff, 0x7b, 0x44,
	0x25, 0x98, 0x0f, 0xb0, 0x4d, 0x1a, 0xcc, 0x39, 0x20, 0xa2, 0xe5, 0x8b, 0xb2, 0xad, 0x4b, 0xf1,
	0xea, 0x86, 0x73, 0x40, 0x90, 0x0e, 0xa1, 0x88, 0xe0, 0x74, 0x87, 0xf8, 0xc5, 0x21, 0x51, 0x4b,
	0x84, 0x08, 0xe1, 0x66, 0xbc, 0xaa, 0xbf, 0x07, 0xb0, 0xd0, 0x81, 0xc8, 0x02, 0xea, 0x33, 0x82,
	0xd6, 0xe0, 0x88, 0xc2, 0x28, 0x82, 0xd2, 0xd0, 0xa0, 0xc7, 0x53, 0x4f, 0xc4, 0x68, 0x12, 0x5e,
	0xf6, 0xc9, 0x1b, 0xde, 0x48, 0x81, 0xc4, 0xac, 0xf9, 0xfa, 0x78, 0xbc, 0xbc, 0xde, 0xe6, 0x78,
	0x09, 0x0b, 0xab, 0xc4, 0x25, 0xdd, 0x3f, 0xc9, 0xb9, 0xcf, 0xa0, 0xf2, 0x7d, 0x04, 0x8e, 0xcb,
	0x85, 0x0d, 0x79, 0xa1, 0xa0, 0x2f, 0x00, 0x8e, 0xa5, 0x9d, 0x83, 0x16, 0xb3, 0xb5, 0xd6, 0xc7,
	0x6d, 0xda, 0x40, 0x53, 0xd1, 0xe7, 0xdf, 0xfd, 0xfa, 0xfd, 0x21, 0x77, 0x57, 0xbf, 0xd3, 0xbe,
	0x17, 0xde, 0xca, 0xc3, 0x5c, 0x56, 0xc2, 0xaa, 0x65, 0xd1, 0xc8, 0xe7, 0xcc, 0x2c, 0x1f, 0x26,
	0x57, 0xc8, 0x12, 0x28, 0xa3, 0xaf, 0x00, 0x8e, 0xa5, 0x2d, 0x94, 0x95, 0xb8, 0x8f, 0xed, 0x06,
	0x24, 0x5e, 0x16, 0xc4, 0x0b, 0x95, 0xca, 0x09, 0xb1, 0x8c, 0x34, 0xe2, 0xe1, 0xf6, 0x62, 0xb7,
	0x2f, 0xbe, 0xf2, 0x61, 0x0c, 0x7e, 0x04, 0x60, 0xbe, 0xed, 0x2b, 0x34, 0x9f, 0xad, 0x74, 0xb7,
	0x11, 0x07, 0x44, 0x9e, 0x13, 0xc8, 0x33, 0x28, 0x35, 0xe4, 0x33, 0x59, 0xd1, 0x37, 0x00, 0x47,
	0x53, 0x36, 0x40, 0xf7, 0xb2, 0x95, 0xec, 0x35, 0xb7, 0xb6, 0xf8, 0x0f, 0x4a, 0xe9, 0xb9, 0x7e,
	0xe4, 0x67, 0xfe, 0x1e, 0xe8, 0x23, 0x80, 0x63, 0x69, 0xe7, 0x64, 0xfd, 0x37, 0xfa, 0xb8, 0x4d,
	0xbb, 0xda, 0x73, 0x65, 0x3e, 0x8c, 0xdf, 0xa4, 0x04, 0xac, 0x3c, 0xc8, 0x48, 0xb5, 0xe7, 0x3f,
	0xaa, 0xb7, 0x4e, 0xf5, 0xe9, 0xcf, 0xaa, 0xb1, 0xcd, 0x79, 0xc0, 0x96, 0x4c, 0x73, 0x6f, 0x6f,
	0xaf, 0xdb, 0xc4, 0x38, 0xe2, 0xdb, 0xf2, 0x51, 0x9d, 0x09, 0x5c, 0xcc, 0xb7, 0x68, 0xe8, 0xd5,
	0xf6, 0xe1, 0x94, 0x45, 0xbd, 0x4c, 0xfd, 0xad, 0x83, 0x57, 0x4f, 0x54, 0x9c, 0x4d, 0x5d, 0xec,
	0xdb, 0x06, 0x0d, 0x6d, 0xd3, 0x26, 0xbe, 0x68, 0xcd, 0x3c, 0x29, 0x76, 0xfa, 0xc3, 0x7d, 0x5f,
	0x7d, 0x37, 0x87, 0x85, 0x6e, 0xee, 0x6f, 0x00, 0x00, 0x00, 0xff, 0xff, 0x80, 0xde, 0x99, 0x5f,
	0xc3, 0x08, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// BudgetServiceClient is the client API for BudgetService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type BudgetServiceClient interface {
	// Creates a new budget. See
	// <a href="https://cloud.google.com/billing/quotas">Quotas and limits</a>
	// for more information on the limits of the number of budgets you can create.
	CreateBudget(ctx context.Context, in *CreateBudgetRequest, opts ...grpc.CallOption) (*Budget, error)
	// Updates a budget and returns the updated budget.
	//
	// WARNING: There are some fields exposed on the Google Cloud Console that
	// aren???t available on this API. Budget fields that are not exposed in
	// this API will not be changed by this method.
	UpdateBudget(ctx context.Context, in *UpdateBudgetRequest, opts ...grpc.CallOption) (*Budget, error)
	// Returns a budget.
	//
	// WARNING: There are some fields exposed on the Google Cloud Console that
	// aren???t available on this API. When reading from the API, you will not
	// see these fields in the return value, though they may have been set
	// in the Cloud Console.
	GetBudget(ctx context.Context, in *GetBudgetRequest, opts ...grpc.CallOption) (*Budget, error)
	// Returns a list of budgets for a billing account.
	//
	// WARNING: There are some fields exposed on the Google Cloud Console that
	// aren???t available on this API. When reading from the API, you will not
	// see these fields in the return value, though they may have been set
	// in the Cloud Console.
	ListBudgets(ctx context.Context, in *ListBudgetsRequest, opts ...grpc.CallOption) (*ListBudgetsResponse, error)
	// Deletes a budget. Returns successfully if already deleted.
	DeleteBudget(ctx context.Context, in *DeleteBudgetRequest, opts ...grpc.CallOption) (*empty.Empty, error)
}

type budgetServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewBudgetServiceClient(cc grpc.ClientConnInterface) BudgetServiceClient {
	return &budgetServiceClient{cc}
}

func (c *budgetServiceClient) CreateBudget(ctx context.Context, in *CreateBudgetRequest, opts ...grpc.CallOption) (*Budget, error) {
	out := new(Budget)
	err := c.cc.Invoke(ctx, "/google.cloud.billing.budgets.v1beta1.BudgetService/CreateBudget", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *budgetServiceClient) UpdateBudget(ctx context.Context, in *UpdateBudgetRequest, opts ...grpc.CallOption) (*Budget, error) {
	out := new(Budget)
	err := c.cc.Invoke(ctx, "/google.cloud.billing.budgets.v1beta1.BudgetService/UpdateBudget", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *budgetServiceClient) GetBudget(ctx context.Context, in *GetBudgetRequest, opts ...grpc.CallOption) (*Budget, error) {
	out := new(Budget)
	err := c.cc.Invoke(ctx, "/google.cloud.billing.budgets.v1beta1.BudgetService/GetBudget", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *budgetServiceClient) ListBudgets(ctx context.Context, in *ListBudgetsRequest, opts ...grpc.CallOption) (*ListBudgetsResponse, error) {
	out := new(ListBudgetsResponse)
	err := c.cc.Invoke(ctx, "/google.cloud.billing.budgets.v1beta1.BudgetService/ListBudgets", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *budgetServiceClient) DeleteBudget(ctx context.Context, in *DeleteBudgetRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/google.cloud.billing.budgets.v1beta1.BudgetService/DeleteBudget", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// BudgetServiceServer is the server API for BudgetService service.
type BudgetServiceServer interface {
	// Creates a new budget. See
	// <a href="https://cloud.google.com/billing/quotas">Quotas and limits</a>
	// for more information on the limits of the number of budgets you can create.
	CreateBudget(context.Context, *CreateBudgetRequest) (*Budget, error)
	// Updates a budget and returns the updated budget.
	//
	// WARNING: There are some fields exposed on the Google Cloud Console that
	// aren???t available on this API. Budget fields that are not exposed in
	// this API will not be changed by this method.
	UpdateBudget(context.Context, *UpdateBudgetRequest) (*Budget, error)
	// Returns a budget.
	//
	// WARNING: There are some fields exposed on the Google Cloud Console that
	// aren???t available on this API. When reading from the API, you will not
	// see these fields in the return value, though they may have been set
	// in the Cloud Console.
	GetBudget(context.Context, *GetBudgetRequest) (*Budget, error)
	// Returns a list of budgets for a billing account.
	//
	// WARNING: There are some fields exposed on the Google Cloud Console that
	// aren???t available on this API. When reading from the API, you will not
	// see these fields in the return value, though they may have been set
	// in the Cloud Console.
	ListBudgets(context.Context, *ListBudgetsRequest) (*ListBudgetsResponse, error)
	// Deletes a budget. Returns successfully if already deleted.
	DeleteBudget(context.Context, *DeleteBudgetRequest) (*empty.Empty, error)
}

// UnimplementedBudgetServiceServer can be embedded to have forward compatible implementations.
type UnimplementedBudgetServiceServer struct {
}

func (*UnimplementedBudgetServiceServer) CreateBudget(ctx context.Context, req *CreateBudgetRequest) (*Budget, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateBudget not implemented")
}
func (*UnimplementedBudgetServiceServer) UpdateBudget(ctx context.Context, req *UpdateBudgetRequest) (*Budget, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateBudget not implemented")
}
func (*UnimplementedBudgetServiceServer) GetBudget(ctx context.Context, req *GetBudgetRequest) (*Budget, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetBudget not implemented")
}
func (*UnimplementedBudgetServiceServer) ListBudgets(ctx context.Context, req *ListBudgetsRequest) (*ListBudgetsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListBudgets not implemented")
}
func (*UnimplementedBudgetServiceServer) DeleteBudget(ctx context.Context, req *DeleteBudgetRequest) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteBudget not implemented")
}

func RegisterBudgetServiceServer(s *grpc.Server, srv BudgetServiceServer) {
	s.RegisterService(&_BudgetService_serviceDesc, srv)
}

func _BudgetService_CreateBudget_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateBudgetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BudgetServiceServer).CreateBudget(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/google.cloud.billing.budgets.v1beta1.BudgetService/CreateBudget",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BudgetServiceServer).CreateBudget(ctx, req.(*CreateBudgetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BudgetService_UpdateBudget_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateBudgetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BudgetServiceServer).UpdateBudget(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/google.cloud.billing.budgets.v1beta1.BudgetService/UpdateBudget",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BudgetServiceServer).UpdateBudget(ctx, req.(*UpdateBudgetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BudgetService_GetBudget_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetBudgetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BudgetServiceServer).GetBudget(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/google.cloud.billing.budgets.v1beta1.BudgetService/GetBudget",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BudgetServiceServer).GetBudget(ctx, req.(*GetBudgetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BudgetService_ListBudgets_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListBudgetsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BudgetServiceServer).ListBudgets(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/google.cloud.billing.budgets.v1beta1.BudgetService/ListBudgets",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BudgetServiceServer).ListBudgets(ctx, req.(*ListBudgetsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BudgetService_DeleteBudget_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteBudgetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BudgetServiceServer).DeleteBudget(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/google.cloud.billing.budgets.v1beta1.BudgetService/DeleteBudget",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BudgetServiceServer).DeleteBudget(ctx, req.(*DeleteBudgetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _BudgetService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "google.cloud.billing.budgets.v1beta1.BudgetService",
	HandlerType: (*BudgetServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateBudget",
			Handler:    _BudgetService_CreateBudget_Handler,
		},
		{
			MethodName: "UpdateBudget",
			Handler:    _BudgetService_UpdateBudget_Handler,
		},
		{
			MethodName: "GetBudget",
			Handler:    _BudgetService_GetBudget_Handler,
		},
		{
			MethodName: "ListBudgets",
			Handler:    _BudgetService_ListBudgets_Handler,
		},
		{
			MethodName: "DeleteBudget",
			Handler:    _BudgetService_DeleteBudget_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "google/cloud/billing/budgets/v1beta1/budget_service.proto",
}
