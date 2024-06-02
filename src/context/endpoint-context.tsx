// @ts-nocheck

import { createContext, useState } from "react";

export const EndpointContext = createContext(null);

const EndpointProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [path, setPath] = useState("");
  const [method, setMethod] = useState({ value: "GET", label: "GET" });

  const [hasRequestBody, setHasRequestBody] = useState(false);
  const [requestBodyType, setRequestBodyType] = useState({
    value: "PARSED",
    label: "PARSED",
  });
  const [requestBodyEncoding, setRequestBodyEncoding] = useState({
    value: "SYMMETRIC",
    label: "SYMMETRIC",
  });
  const [requestBody, setRequestBody] = useState({});

  const [hasRequestHeaders, setHasRequestHeaders] = useState(false);
  const [requestHeaders, setRequestHeaders] = useState({});

  const [hasParams, setHasParams] = useState(false);
  const [params, setParams] = useState({});

  const [errorCodes, setErrorCodes] = useState({});
  const [succesCodes, setSuccessCodes] = useState({});

  const [errorResponse, setErrorResponse] = useState({});
  const [successResonse, setSuccessResponse] = useState({});

  const [hasStaticRequestBody, setHasStaticRequestBody] = useState(false);
  const [staticRequestBody, setStaticRequestBody] = useState({});

  return (
    <EndpointContext.Provider
      value={{
        name,
        setName,

        description,
        setDescription,

        path,
        setPath,

        method,
        setMethod,

        hasRequestBody,
        setHasRequestBody,
        requestBodyType,
        setRequestBodyType,
        requestBodyEncoding,
        setRequestBodyEncoding,
        requestBody,
        setRequestBody,

        hasRequestHeaders,
        setHasRequestHeaders,
        requestHeaders,
        setRequestHeaders,

        hasParams,
        setHasParams,
        params,
        setParams,

        succesCodes,
        setSuccessCodes,
        errorCodes,
        setErrorCodes,

        errorResponse,
        setErrorResponse,
        successResonse,
        setSuccessResponse,

        hasStaticRequestBody,
        setHasStaticRequestBody,
        staticRequestBody,
        setStaticRequestBody,
      }}
    >
      {children}
    </EndpointContext.Provider>
  );
};
export default EndpointProvider;
