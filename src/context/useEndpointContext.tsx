"use client";

import { useContext } from "react";
import { EndpointContext } from "./endpoint-context";

const useEndpointContext = () => {
  return useContext(EndpointContext);
};

export default useEndpointContext;
