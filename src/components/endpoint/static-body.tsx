// @ts-nocheck
"use client";

import useEndpointContext from "@/context/useEndpointContext";
import { Button } from "@/components/ui/button";
import KeyValue from "../key-value";

const StaticBody = () => {
  const {
    hasStaticRequestBody,
    setHasStaticRequestBody,
    staticRequestBody,
    setStaticRequestBody,
  } = useEndpointContext();

  return (
    <div className="space-y-4">
      {hasStaticRequestBody && (
        <KeyValue pairs={staticRequestBody} setPairs={setStaticRequestBody} />
      )}

      {hasStaticRequestBody ? (
        <Button
          variant="destructive"
          onClick={() => setHasStaticRequestBody(!hasStaticRequestBody)}
        >
          Disable Static Request Body
        </Button>
      ) : (
        <Button onClick={() => setHasStaticRequestBody(!hasStaticRequestBody)}>
          Enable Static Request Body
        </Button>
      )}
    </div>
  );
};

export default StaticBody;
