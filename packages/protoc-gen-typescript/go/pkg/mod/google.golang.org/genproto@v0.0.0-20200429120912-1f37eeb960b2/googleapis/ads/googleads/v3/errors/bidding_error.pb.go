// Code generated by protoc-gen-go. DO NOT EDIT.
// source: google/ads/googleads/v3/errors/bidding_error.proto

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

// Enum describing possible bidding errors.
type BiddingErrorEnum_BiddingError int32

const (
	// Enum unspecified.
	BiddingErrorEnum_UNSPECIFIED BiddingErrorEnum_BiddingError = 0
	// The received error code is not known in this version.
	BiddingErrorEnum_UNKNOWN BiddingErrorEnum_BiddingError = 1
	// Cannot transition to new bidding strategy.
	BiddingErrorEnum_BIDDING_STRATEGY_TRANSITION_NOT_ALLOWED BiddingErrorEnum_BiddingError = 2
	// Cannot attach bidding strategy to campaign.
	BiddingErrorEnum_CANNOT_ATTACH_BIDDING_STRATEGY_TO_CAMPAIGN BiddingErrorEnum_BiddingError = 7
	// Bidding strategy is not supported or cannot be used as anonymous.
	BiddingErrorEnum_INVALID_ANONYMOUS_BIDDING_STRATEGY_TYPE BiddingErrorEnum_BiddingError = 10
	// The type does not match the named strategy's type.
	BiddingErrorEnum_INVALID_BIDDING_STRATEGY_TYPE BiddingErrorEnum_BiddingError = 14
	// The bid is invalid.
	BiddingErrorEnum_INVALID_BID BiddingErrorEnum_BiddingError = 17
	// Bidding strategy is not available for the account type.
	BiddingErrorEnum_BIDDING_STRATEGY_NOT_AVAILABLE_FOR_ACCOUNT_TYPE BiddingErrorEnum_BiddingError = 18
	// Conversion tracking is not enabled for the campaign for VBB transition.
	BiddingErrorEnum_CONVERSION_TRACKING_NOT_ENABLED BiddingErrorEnum_BiddingError = 19
	// Not enough conversions tracked for VBB transitions.
	BiddingErrorEnum_NOT_ENOUGH_CONVERSIONS BiddingErrorEnum_BiddingError = 20
	// Campaign can not be created with given bidding strategy. It can be
	// transitioned to the strategy, once eligible.
	BiddingErrorEnum_CANNOT_CREATE_CAMPAIGN_WITH_BIDDING_STRATEGY BiddingErrorEnum_BiddingError = 21
	// Cannot target content network only as campaign uses Page One Promoted
	// bidding strategy.
	BiddingErrorEnum_CANNOT_TARGET_CONTENT_NETWORK_ONLY_WITH_CAMPAIGN_LEVEL_POP_BIDDING_STRATEGY BiddingErrorEnum_BiddingError = 23
	// Budget Optimizer and Target Spend bidding strategies are not supported
	// for campaigns with AdSchedule targeting.
	BiddingErrorEnum_BIDDING_STRATEGY_NOT_SUPPORTED_WITH_AD_SCHEDULE BiddingErrorEnum_BiddingError = 24
	// Pay per conversion is not available to all the customer, only few
	// whitelisted customers can use this.
	BiddingErrorEnum_PAY_PER_CONVERSION_NOT_AVAILABLE_FOR_CUSTOMER BiddingErrorEnum_BiddingError = 25
	// Pay per conversion is not allowed with Target CPA.
	BiddingErrorEnum_PAY_PER_CONVERSION_NOT_ALLOWED_WITH_TARGET_CPA BiddingErrorEnum_BiddingError = 26
	// Cannot set bidding strategy to Manual CPM for search network only
	// campaigns.
	BiddingErrorEnum_BIDDING_STRATEGY_NOT_ALLOWED_FOR_SEARCH_ONLY_CAMPAIGNS BiddingErrorEnum_BiddingError = 27
	// The bidding strategy is not supported for use in drafts or experiments.
	BiddingErrorEnum_BIDDING_STRATEGY_NOT_SUPPORTED_IN_DRAFTS_OR_EXPERIMENTS BiddingErrorEnum_BiddingError = 28
	// Bidding strategy type does not support product type ad group criterion.
	BiddingErrorEnum_BIDDING_STRATEGY_TYPE_DOES_NOT_SUPPORT_PRODUCT_TYPE_ADGROUP_CRITERION BiddingErrorEnum_BiddingError = 29
	// Bid amount is too small.
	BiddingErrorEnum_BID_TOO_SMALL BiddingErrorEnum_BiddingError = 30
	// Bid amount is too big.
	BiddingErrorEnum_BID_TOO_BIG BiddingErrorEnum_BiddingError = 31
	// Bid has too many fractional digit precision.
	BiddingErrorEnum_BID_TOO_MANY_FRACTIONAL_DIGITS BiddingErrorEnum_BiddingError = 32
	// Invalid domain name specified.
	BiddingErrorEnum_INVALID_DOMAIN_NAME BiddingErrorEnum_BiddingError = 33
	// The field is not compatible with the payment mode.
	BiddingErrorEnum_NOT_COMPATIBLE_WITH_PAYMENT_MODE BiddingErrorEnum_BiddingError = 34
	// The field is not compatible with the budget type.
	BiddingErrorEnum_NOT_COMPATIBLE_WITH_BUDGET_TYPE BiddingErrorEnum_BiddingError = 35
	// The field is not compatible with the bidding strategy type.
	BiddingErrorEnum_NOT_COMPATIBLE_WITH_BIDDING_STRATEGY_TYPE BiddingErrorEnum_BiddingError = 36
	// Bidding strategy type is incompatible with shared budget.
	BiddingErrorEnum_BIDDING_STRATEGY_TYPE_INCOMPATIBLE_WITH_SHARED_BUDGET BiddingErrorEnum_BiddingError = 37
)

var BiddingErrorEnum_BiddingError_name = map[int32]string{
	0:  "UNSPECIFIED",
	1:  "UNKNOWN",
	2:  "BIDDING_STRATEGY_TRANSITION_NOT_ALLOWED",
	7:  "CANNOT_ATTACH_BIDDING_STRATEGY_TO_CAMPAIGN",
	10: "INVALID_ANONYMOUS_BIDDING_STRATEGY_TYPE",
	14: "INVALID_BIDDING_STRATEGY_TYPE",
	17: "INVALID_BID",
	18: "BIDDING_STRATEGY_NOT_AVAILABLE_FOR_ACCOUNT_TYPE",
	19: "CONVERSION_TRACKING_NOT_ENABLED",
	20: "NOT_ENOUGH_CONVERSIONS",
	21: "CANNOT_CREATE_CAMPAIGN_WITH_BIDDING_STRATEGY",
	23: "CANNOT_TARGET_CONTENT_NETWORK_ONLY_WITH_CAMPAIGN_LEVEL_POP_BIDDING_STRATEGY",
	24: "BIDDING_STRATEGY_NOT_SUPPORTED_WITH_AD_SCHEDULE",
	25: "PAY_PER_CONVERSION_NOT_AVAILABLE_FOR_CUSTOMER",
	26: "PAY_PER_CONVERSION_NOT_ALLOWED_WITH_TARGET_CPA",
	27: "BIDDING_STRATEGY_NOT_ALLOWED_FOR_SEARCH_ONLY_CAMPAIGNS",
	28: "BIDDING_STRATEGY_NOT_SUPPORTED_IN_DRAFTS_OR_EXPERIMENTS",
	29: "BIDDING_STRATEGY_TYPE_DOES_NOT_SUPPORT_PRODUCT_TYPE_ADGROUP_CRITERION",
	30: "BID_TOO_SMALL",
	31: "BID_TOO_BIG",
	32: "BID_TOO_MANY_FRACTIONAL_DIGITS",
	33: "INVALID_DOMAIN_NAME",
	34: "NOT_COMPATIBLE_WITH_PAYMENT_MODE",
	35: "NOT_COMPATIBLE_WITH_BUDGET_TYPE",
	36: "NOT_COMPATIBLE_WITH_BIDDING_STRATEGY_TYPE",
	37: "BIDDING_STRATEGY_TYPE_INCOMPATIBLE_WITH_SHARED_BUDGET",
}

var BiddingErrorEnum_BiddingError_value = map[string]int32{
	"UNSPECIFIED": 0,
	"UNKNOWN":     1,
	"BIDDING_STRATEGY_TRANSITION_NOT_ALLOWED":                                     2,
	"CANNOT_ATTACH_BIDDING_STRATEGY_TO_CAMPAIGN":                                  7,
	"INVALID_ANONYMOUS_BIDDING_STRATEGY_TYPE":                                     10,
	"INVALID_BIDDING_STRATEGY_TYPE":                                               14,
	"INVALID_BID":                                                                 17,
	"BIDDING_STRATEGY_NOT_AVAILABLE_FOR_ACCOUNT_TYPE":                             18,
	"CONVERSION_TRACKING_NOT_ENABLED":                                             19,
	"NOT_ENOUGH_CONVERSIONS":                                                      20,
	"CANNOT_CREATE_CAMPAIGN_WITH_BIDDING_STRATEGY":                                21,
	"CANNOT_TARGET_CONTENT_NETWORK_ONLY_WITH_CAMPAIGN_LEVEL_POP_BIDDING_STRATEGY": 23,
	"BIDDING_STRATEGY_NOT_SUPPORTED_WITH_AD_SCHEDULE":                             24,
	"PAY_PER_CONVERSION_NOT_AVAILABLE_FOR_CUSTOMER":                               25,
	"PAY_PER_CONVERSION_NOT_ALLOWED_WITH_TARGET_CPA":                              26,
	"BIDDING_STRATEGY_NOT_ALLOWED_FOR_SEARCH_ONLY_CAMPAIGNS":                      27,
	"BIDDING_STRATEGY_NOT_SUPPORTED_IN_DRAFTS_OR_EXPERIMENTS":                     28,
	"BIDDING_STRATEGY_TYPE_DOES_NOT_SUPPORT_PRODUCT_TYPE_ADGROUP_CRITERION":       29,
	"BID_TOO_SMALL":                                         30,
	"BID_TOO_BIG":                                           31,
	"BID_TOO_MANY_FRACTIONAL_DIGITS":                        32,
	"INVALID_DOMAIN_NAME":                                   33,
	"NOT_COMPATIBLE_WITH_PAYMENT_MODE":                      34,
	"NOT_COMPATIBLE_WITH_BUDGET_TYPE":                       35,
	"NOT_COMPATIBLE_WITH_BIDDING_STRATEGY_TYPE":             36,
	"BIDDING_STRATEGY_TYPE_INCOMPATIBLE_WITH_SHARED_BUDGET": 37,
}

func (x BiddingErrorEnum_BiddingError) String() string {
	return proto.EnumName(BiddingErrorEnum_BiddingError_name, int32(x))
}

func (BiddingErrorEnum_BiddingError) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_2ffc4bcf5ba70861, []int{0, 0}
}

// Container for enum describing possible bidding errors.
type BiddingErrorEnum struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *BiddingErrorEnum) Reset()         { *m = BiddingErrorEnum{} }
func (m *BiddingErrorEnum) String() string { return proto.CompactTextString(m) }
func (*BiddingErrorEnum) ProtoMessage()    {}
func (*BiddingErrorEnum) Descriptor() ([]byte, []int) {
	return fileDescriptor_2ffc4bcf5ba70861, []int{0}
}

func (m *BiddingErrorEnum) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BiddingErrorEnum.Unmarshal(m, b)
}
func (m *BiddingErrorEnum) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BiddingErrorEnum.Marshal(b, m, deterministic)
}
func (m *BiddingErrorEnum) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BiddingErrorEnum.Merge(m, src)
}
func (m *BiddingErrorEnum) XXX_Size() int {
	return xxx_messageInfo_BiddingErrorEnum.Size(m)
}
func (m *BiddingErrorEnum) XXX_DiscardUnknown() {
	xxx_messageInfo_BiddingErrorEnum.DiscardUnknown(m)
}

var xxx_messageInfo_BiddingErrorEnum proto.InternalMessageInfo

func init() {
	proto.RegisterEnum("google.ads.googleads.v3.errors.BiddingErrorEnum_BiddingError", BiddingErrorEnum_BiddingError_name, BiddingErrorEnum_BiddingError_value)
	proto.RegisterType((*BiddingErrorEnum)(nil), "google.ads.googleads.v3.errors.BiddingErrorEnum")
}

func init() {
	proto.RegisterFile("google/ads/googleads/v3/errors/bidding_error.proto", fileDescriptor_2ffc4bcf5ba70861)
}

var fileDescriptor_2ffc4bcf5ba70861 = []byte{
	// 757 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x54, 0xed, 0x8e, 0xdb, 0x44,
	0x14, 0x65, 0x17, 0x89, 0x56, 0x53, 0x3e, 0x66, 0xa7, 0x40, 0x61, 0x69, 0xb7, 0x6d, 0x5a, 0x84,
	0xf8, 0xa8, 0x03, 0x8d, 0x00, 0xe1, 0xfe, 0xba, 0xf6, 0xcc, 0x3a, 0xa3, 0xd8, 0x33, 0xa3, 0x99,
	0x71, 0x42, 0x50, 0xa4, 0x51, 0x4a, 0x56, 0x51, 0xa4, 0x36, 0x5e, 0xc5, 0x4b, 0x1f, 0x88, 0x9f,
	0x3c, 0x0a, 0x6f, 0xc0, 0x2b, 0x20, 0xc4, 0x33, 0xa0, 0xf1, 0xc4, 0x21, 0x22, 0x5e, 0xfa, 0x2b,
	0x37, 0x57, 0xe7, 0x9c, 0xeb, 0x73, 0x7d, 0x7c, 0xd1, 0xd3, 0x65, 0x55, 0x2d, 0x5f, 0x5c, 0xf4,
	0xe7, 0x8b, 0xba, 0x1f, 0x4a, 0x5f, 0xbd, 0x1a, 0xf4, 0x2f, 0x36, 0x9b, 0x6a, 0x53, 0xf7, 0x9f,
	0xaf, 0x16, 0x8b, 0xd5, 0x7a, 0xe9, 0x9a, 0xbf, 0xd1, 0xe5, 0xa6, 0xba, 0xaa, 0xc8, 0x59, 0x00,
	0x46, 0xf3, 0x45, 0x1d, 0xed, 0x38, 0xd1, 0xab, 0x41, 0x14, 0x38, 0xa7, 0x77, 0x5b, 0xcd, 0xcb,
	0x55, 0x7f, 0xbe, 0x5e, 0x57, 0x57, 0xf3, 0xab, 0x55, 0xb5, 0xae, 0x03, 0xbb, 0xf7, 0xf7, 0x4d,
	0x84, 0x93, 0xa0, 0xca, 0x3c, 0x9e, 0xad, 0x7f, 0x79, 0xd9, 0xfb, 0xe3, 0x26, 0x7a, 0x7b, 0xbf,
	0x49, 0xde, 0x43, 0xb7, 0x4a, 0x61, 0x14, 0x4b, 0xf9, 0x39, 0x67, 0x14, 0xbf, 0x41, 0x6e, 0xa1,
	0x1b, 0xa5, 0x18, 0x09, 0x39, 0x11, 0xf8, 0x88, 0x7c, 0x89, 0x3e, 0x4b, 0x38, 0xa5, 0x5c, 0x64,
	0xce, 0x58, 0x0d, 0x96, 0x65, 0x53, 0x67, 0x35, 0x08, 0xc3, 0x2d, 0x97, 0xc2, 0x09, 0x69, 0x1d,
	0xe4, 0xb9, 0x9c, 0x30, 0x8a, 0x8f, 0x49, 0x84, 0xbe, 0x48, 0x41, 0x34, 0x3d, 0x6b, 0x21, 0x1d,
	0xba, 0x43, 0xaa, 0x74, 0x29, 0x14, 0x0a, 0x78, 0x26, 0xf0, 0x0d, 0x2f, 0xce, 0xc5, 0x18, 0x72,
	0x4e, 0x1d, 0x08, 0x29, 0xa6, 0x85, 0x2c, 0x4d, 0x07, 0x67, 0xaa, 0x18, 0x46, 0xe4, 0x21, 0xba,
	0xd7, 0x82, 0xbb, 0x21, 0xef, 0x7a, 0x2b, 0x7b, 0x10, 0x7c, 0x42, 0x06, 0xa8, 0x7f, 0x80, 0x6d,
	0x1e, 0x6f, 0x0c, 0x3c, 0x87, 0x24, 0x67, 0xee, 0x5c, 0x6a, 0x07, 0x69, 0x2a, 0x4b, 0x61, 0x83,
	0x0a, 0x21, 0x8f, 0xd0, 0xfd, 0x54, 0x8a, 0x31, 0xd3, 0xc6, 0x3b, 0xb4, 0x1a, 0xd2, 0x91, 0x17,
	0xf0, 0x3c, 0x26, 0x3c, 0x89, 0xe2, 0xdb, 0xe4, 0x14, 0x7d, 0x18, 0x1a, 0xb2, 0xcc, 0x86, 0xee,
	0x5f, 0xbc, 0xc1, 0xef, 0x93, 0xaf, 0xd1, 0x57, 0xdb, 0x35, 0xa4, 0x9a, 0x81, 0x65, 0x3b, 0xcb,
	0x6e, 0xc2, 0xed, 0xe1, 0x52, 0xf0, 0x07, 0x44, 0xa2, 0xd1, 0x96, 0x61, 0x41, 0x67, 0xcc, 0x7a,
	0x41, 0xcb, 0x84, 0x75, 0x82, 0xd9, 0x89, 0xd4, 0x23, 0x27, 0x45, 0x3e, 0x0d, 0xec, 0x9d, 0x56,
	0xce, 0xc6, 0x2c, 0x77, 0x4a, 0xaa, 0x43, 0xc1, 0x3b, 0xd7, 0x1a, 0x37, 0xa5, 0x52, 0x52, 0x5b,
	0x46, 0x83, 0x18, 0x50, 0x67, 0xd2, 0x21, 0xa3, 0x65, 0xce, 0xf0, 0x47, 0xe4, 0x1b, 0xf4, 0x44,
	0xc1, 0xd4, 0x29, 0xa6, 0xf7, 0x0c, 0x75, 0xec, 0x2b, 0x2d, 0x8d, 0x95, 0x05, 0xd3, 0xf8, 0x63,
	0xf2, 0x14, 0x45, 0xd7, 0x51, 0x42, 0x2a, 0xc2, 0x9c, 0xd6, 0x95, 0x02, 0x7c, 0x4a, 0x62, 0xf4,
	0x5d, 0xf7, 0x4b, 0xd9, 0x32, 0xfc, 0x08, 0xc3, 0x40, 0xa7, 0xc3, 0x60, 0xbb, 0x75, 0x6c, 0xf0,
	0x27, 0xe4, 0x19, 0xfa, 0xfe, 0x35, 0xbe, 0xb8, 0x70, 0x54, 0xc3, 0xb9, 0x35, 0x4e, 0x6a, 0xc7,
	0x7e, 0x54, 0x4c, 0xf3, 0x82, 0x09, 0x6b, 0xf0, 0x5d, 0xc2, 0x11, 0xeb, 0x4c, 0x8e, 0xa3, 0x92,
	0x99, 0x7d, 0x19, 0xa7, 0xb4, 0xa4, 0x65, 0x1a, 0x12, 0xe1, 0x80, 0x66, 0x5a, 0x96, 0xca, 0xa5,
	0x9a, 0x5b, 0xa6, 0xb9, 0x14, 0xf8, 0x1e, 0x39, 0x41, 0xef, 0x24, 0x9c, 0x3a, 0x2b, 0xa5, 0x33,
	0x05, 0xe4, 0x39, 0x3e, 0xf3, 0xe1, 0x6b, 0x5b, 0x09, 0xcf, 0xf0, 0x7d, 0xd2, 0x43, 0x67, 0x6d,
	0xa3, 0x00, 0x31, 0x75, 0xe7, 0x1a, 0x52, 0xff, 0xd1, 0x40, 0xee, 0x28, 0xcf, 0xb8, 0x35, 0xf8,
	0x01, 0xb9, 0x83, 0x6e, 0xb7, 0x89, 0xa5, 0xb2, 0x00, 0x2e, 0x9c, 0x80, 0x82, 0xe1, 0x87, 0xe4,
	0x31, 0x7a, 0xd0, 0x04, 0x48, 0x16, 0x0a, 0x2c, 0xf7, 0x9b, 0x6f, 0x16, 0xa9, 0x60, 0xea, 0xdd,
	0xb8, 0x42, 0x52, 0x86, 0x7b, 0x3e, 0xaa, 0x5d, 0xa8, 0xa4, 0xa4, 0x7e, 0xdd, 0x4d, 0x9e, 0x1f,
	0x91, 0x27, 0xe8, 0xf3, 0x4e, 0x50, 0xe7, 0x47, 0xf4, 0x98, 0xfc, 0x80, 0xbe, 0xed, 0xde, 0x12,
	0x17, 0xff, 0x95, 0x30, 0x43, 0xd0, 0x8c, 0x6e, 0xc7, 0xe1, 0x4f, 0x93, 0xbf, 0x8e, 0x50, 0xef,
	0xe7, 0xea, 0x65, 0xf4, 0xff, 0x57, 0x2b, 0x39, 0xd9, 0xbf, 0x3f, 0xca, 0x9f, 0x2a, 0x75, 0xf4,
	0x13, 0xdd, 0x92, 0x96, 0xd5, 0x8b, 0xf9, 0x7a, 0x19, 0x55, 0x9b, 0x65, 0x7f, 0x79, 0xb1, 0x6e,
	0x0e, 0x59, 0x7b, 0x2e, 0x2f, 0x57, 0xf5, 0x75, 0xd7, 0xf3, 0x59, 0xf8, 0xf9, 0xf5, 0xf8, 0xcd,
	0x0c, 0xe0, 0xb7, 0xe3, 0xb3, 0x2c, 0x88, 0xc1, 0xa2, 0x8e, 0x42, 0xe9, 0xab, 0xf1, 0x20, 0x6a,
	0x46, 0xd6, 0xbf, 0xb7, 0x80, 0x19, 0x2c, 0xea, 0xd9, 0x0e, 0x30, 0x1b, 0x0f, 0x66, 0x01, 0xf0,
	0xe7, 0x71, 0x2f, 0x74, 0xe3, 0x18, 0x16, 0x75, 0x1c, 0xef, 0x20, 0x71, 0x3c, 0x1e, 0xc4, 0x71,
	0x00, 0x3d, 0x7f, 0xab, 0x79, 0xba, 0xc1, 0x3f, 0x01, 0x00, 0x00, 0xff, 0xff, 0x44, 0x79, 0x4b,
	0x02, 0xda, 0x05, 0x00, 0x00,
}
