// @ts-nocheck
"use client";

import KeyValuePairs from "@/components/key-value-pairs";
import useEndpointContext from "@/context/useEndpointContext";
import { Button } from "@/components/ui/button";

const Parameters = () => {
  const { hasParams, setHasParams, params, setParams } = useEndpointContext();

  return (
    <div className="space-y-4">
      {hasParams && <KeyValuePairs pairs={params} setPairs={setParams} />}

      {hasParams ? (
        <Button variant="destructive" onClick={() => setHasParams(!hasParams)}>
          Disable Parameters
        </Button>
      ) : (
        <Button onClick={() => setHasParams(!hasParams)}>
          Enable Parameters
        </Button>
      )}
    </div>
  );
};

export default Parameters;
