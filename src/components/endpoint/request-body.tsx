// @ts-nocheck
"use client";

import KeyValuePairs from "@/components/key-value-pairs";
import useEndpointContext from "@/context/useEndpointContext";
import { Button } from "@/components/ui/button";

import Select from "react-select";

const requestTypes = [
  { value: "PARSED", label: "PARSED" },
  { value: "STRINGIFIED", label: "STRINGIFIED" },
  { value: "ENCODED", label: "ENCODED" },
];
const requestEncodings = [
  { value: "SYMMETRIC", label: "SYMMETRIC" },
  { value: "ASYMMETRIC", label: "ASYMMETRIC" },
  { value: "SIGNATURE", label: "SIGNATURE" },
];

const RequestBody = () => {
  const {
    hasRequestBody,
    setHasRequestBody,
    requestBodyType,
    setRequestBodyType,
    requestBodyEncoding,
    setRequestBodyEncoding,
    requestBody,
    setRequestBody,
  } = useEndpointContext();

  return (
    <div className="space-y-4">
      {hasRequestBody && (
        <>
          <Select
            styles={{
              menuList: (base) => ({
                ...base,
                color: "white",
                background: "black",
              }),
              control: (base, state) => ({
                ...base,
                background: "black",
                color: "white",
              }),
            }}
            options={requestTypes}
            value={requestBodyType}
            onChange={setRequestBodyType}
            defaultValue={requestBodyType}
          />
          {requestBodyType.value === "ENCODED" && (
            <Select
              styles={{
                menuList: (base) => ({
                  ...base,
                  color: "white",
                  background: "black",
                }),
                control: (base, state) => ({
                  ...base,
                  background: "black",
                  color: "white",
                }),
              }}
              options={requestEncodings}
              value={requestBodyEncoding}
              onChange={setRequestBodyEncoding}
              defaultValue={requestBodyEncoding}
            />
          )}
          <KeyValuePairs pairs={requestBody} setPairs={setRequestBody} />
        </>
      )}

      {hasRequestBody ? (
        <Button
          variant="destructive"
          onClick={() => setHasRequestBody(!hasRequestBody)}
        >
          Disable Request Body
        </Button>
      ) : (
        <Button onClick={() => setHasRequestBody(!hasRequestBody)}>
          Enable Request Body
        </Button>
      )}
    </div>
  );
};

export default RequestBody;
