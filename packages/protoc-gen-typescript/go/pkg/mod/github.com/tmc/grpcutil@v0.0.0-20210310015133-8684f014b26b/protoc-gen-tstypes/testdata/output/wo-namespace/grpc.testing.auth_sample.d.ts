// Code generated by protoc-gen-tstypes. DO NOT EDIT.

// Unary request.
export interface Request {
    // Whether Response should include username.
    fill_username?: boolean;
    // Whether Response should include OAuth scope.
    fill_oauth_scope?: boolean;
}

// Unary response, as configured by the request.
export interface Response {
    // The user the request came from, for verifying authentication was
    // successful.
    username?: string;
    // OAuth scope.
    oauth_scope?: string;
}

export interface TestServiceService {
    UnaryCall: (r:Request) => Response;
}