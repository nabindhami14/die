// @ts-nocheck
"use client";

import KeyValuePairs from "@/components/key-value-pairs";
import useEndpointContext from "@/context/useEndpointContext";
import { Button } from "@/components/ui/button";

const Headers = () => {
  const {
    hasRequestHeaders,
    setHasRequestHeaders,
    requestHeaders,
    setRequestHeaders,
  } = useEndpointContext();

  return (
    <div className="space-y-4">
      {hasRequestHeaders && (
        <KeyValuePairs pairs={requestHeaders} setPairs={setRequestHeaders} />
      )}

      {hasRequestHeaders ? (
        <Button
          variant="destructive"
          onClick={() => setHasRequestHeaders(!hasRequestHeaders)}
        >
          Disable Request Headers
        </Button>
      ) : (
        <Button onClick={() => setHasRequestHeaders(!hasRequestHeaders)}>
          Enable Request Headers
        </Button>
      )}
    </div>
  );
};

export default Headers;
