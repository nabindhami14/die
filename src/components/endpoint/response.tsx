// @ts-nocheck

"use client";

import useEndpointContext from "@/context/useEndpointContext";
import KeyValue from "@/components/key-value";
import KeyValuePairs from "@/components/key-value-pairs";

const Response = () => {
  const {
    succesCodes,
    setSuccessCodes,
    errorCodes,
    setErrorCodes,
    errorResponse,
    setErrorResponse,
    successResonse,
    setSuccessResponse,
  } = useEndpointContext();

  return (
    <div className="space-y-4">
      <h3>SUCCESS CODES</h3>
      <KeyValue pairs={succesCodes} setPairs={setSuccessCodes} />
      <h3>SUCCESS RESPONSE</h3>
      <KeyValuePairs pairs={successResonse} setPairs={setSuccessResponse} />

      <hr />

      <h3>ERROR CODES</h3>
      <KeyValue pairs={errorCodes} setPairs={setErrorCodes} />
      <h3>ERROR RESPONSE</h3>
      <KeyValuePairs pairs={errorResponse} setPairs={setErrorResponse} />
    </div>
  );
};

export default Response;
