// @ts-nocheck

"use client";

import Configuration from "@/components/endpoint/configuration";
import Headers from "@/components/endpoint/headers";
import RequestBody from "@/components/endpoint/request-body";
import Response from "@/components/endpoint/response";
import StaticBody from "@/components/endpoint/static-body";
import Parameters from "@/components/endpoint/parameters";
import Loading from "@/components/loading";
import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useEndpointContext from "@/context/useEndpointContext";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

interface ProviderParams {
  params: {
    provider: string;
  };
}

const NewEndpoint = ({ params: { provider } }: ProviderParams) => {
  const data = useEndpointContext();
  const router = useRouter();

  const hitUri = async (data: any) => {
    try {
      const res = await axios.post(
        `http://localhost:4000/api/v1/admin/${provider}/endpoints`,
        data
      );
      return res.data;
    } catch (error) {
      console.log(error, "error");
    }
  };

  const mutation = useMutation({
    mutationFn: hitUri,
    onSuccess: (data) => {
      console.log(data, "response data");
      router.back();
      router.refresh();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data !== null) {
      const payload = {
        name: data.name,
        description: data.description,
        path: data.path,
        method: data.method.value,

        has_request_body: data.hasRequestBody,
        request_body_type: data.hasRequestBody
          ? data.requestBodyType.value
          : undefined,
        request_body_encoding:
          data.hasRequestBody && data.requestBodyType.value === "ENCODED"
            ? data.requestBodyEncoding.value
            : undefined,
        request_body: data.requestBody,
        has_request_headers: data.hasRequestHeaders,
        request_headers: data.hasRequestHeaders
          ? data.requestHeaders
          : undefined,
        has_params: data.hasParams,
        params: data.hasParams ? data.params : undefined,
        succcess_codes: data.succesCodes,
        error_codes: data.errorCodes,
        succcess_response: data.successResonse,
        error_response: data.errorResponse,

        has_static_body: data.hasStaticRequestBody,
        static_body: data.hasStaticRequestBody
          ? data.staticRequestBody
          : undefined,
      };

      mutation.mutate(payload);
    }
  };

  if (mutation.isPending) {
    return <Loading />;
  }
  return (
    <div>
      <Tabs defaultValue="configfuration">
        <TabsList className="flex justify-around">
          <TabsTrigger value="configfuration">Configfuration</TabsTrigger>
          <TabsTrigger value="headers">Request Headers</TabsTrigger>
          <TabsTrigger value="body">Request Body</TabsTrigger>
          <TabsTrigger value="static-body">Static Body</TabsTrigger>
          <TabsTrigger value="parameters">Parameters</TabsTrigger>
          <TabsTrigger value="response">Response</TabsTrigger>
        </TabsList>
        <TabsContent value="configfuration">
          <Configuration />
        </TabsContent>
        <TabsContent value="headers">
          <Headers />
        </TabsContent>
        <TabsContent value="body">
          <RequestBody />
        </TabsContent>
        <TabsContent value="static-body">
          <StaticBody />
        </TabsContent>
        <TabsContent value="parameters">
          <Parameters />
        </TabsContent>
        <TabsContent value="response">
          <Response />
        </TabsContent>
      </Tabs>

      <Button className="w-full my-10" onClick={handleSubmit}>
        Continue
      </Button>
    </div>
  );
};

export default NewEndpoint;

// {
//   "name": "fetch-account-niche",
//   "description": "Fetching account details.",
//   "path": "/vpa/fetchaccountdetail",
//   "method": "POST",
//   "has_request_body": true,
//   "request_body_type": "PARSED",
//   "request_body": {
//       "originatorUniqueId": "string",
//       "bankId": "string",
//       "vpa": "string",
//       "requestToken": "string"
//   },
//   "has_request_headers": true,
//   "request_headers": {
//       "x-access-token": "string"
//   },
//   "has_params": false,
//   "succcess_codes": {
//       "200": "SUCCESS",
//       "201": "Created"
//   },
//   "error_codes": {
//       "400": "PARAMETER VALIDATION ERROR",
//       "E007": "TECHNICAL VALIDATION FAILED"
//   },
//   "succcess_response": {
//       "requestIdentifier": "string",
//       "originatorUniqueId": "string",
//       "vpa": "string",
//       "bankId": "string",
//       "accName": "string",
//       "accountId": "string",
//       "token": "string"
//   },
//   "error_response": {
//       "responseCode": "string",
//       "responseDescription": "string"
//   },
//   "has_static_body": true,
//   "static_body": {
//       "requestToken": "tokennnnninginnng",
//       "bankId": "2301"
//   }
// }
