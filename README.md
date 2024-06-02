```json
{
  "name": "fetch-account-niche",
  "description": "Fetching account details.",
  "path": "/vpa/fetchaccountdetail",
  "method": "POST",
  "has_request_body": true,
  "request_body_type": "PARSED",
  "request_body": {
    "name": "string",
    "age": "number"
  },
  "has_request_headers": true,
  "request_headers": {
    "x-access-token": "string"
  },
  "has_params": true,
  "params": {
    "total": "number"
  },
  "succcess_codes": {
    "200": "SUCCESS",
    "201": "CREATED"
  },
  "error_codes": {
    "E022": "INVALID PAYLOAD",
    "E70": "SERVER ERROR"
  },
  "succcess_response": {
    "name": "string",
    "ids": "number",
    "success": "boolean"
  },
  "error_response": {
    "error_code": "number",
    "error_desc": "string",
    "success": "boolean"
  },
  "has_static_body": true,
  "static_body": {
    "requestId": "1024",
    "deviceId": "2014"
  }
}
```
