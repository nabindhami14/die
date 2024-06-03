"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import BasicAuth from "@/components/auth/basic-auth";
import BearerToken from "@/components/auth/bearer-token";
import ApiKey from "@/components/auth/api-key";
import Oauth from "@/components/auth/oauth";

import Loading from "@/components/loading";
import Jwt from "@/components/auth/jwt";
import { useRouter } from "next/navigation";
import None from "@/components/auth/none";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(2),
  base_url: z.string().min(2).max(50),
  auth_type_id: z.string(),
});

const NewProvider = () => {
  const router = useRouter();
  const [authPayload, setAuthPayload] = useState({});
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const hitUri = async (data: any) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/admin/thirdparty",
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
      router.push(`/providers/${form.getValues().name}`);
      router.refresh();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const options = {
      name: values.name,
      description: values.description,
      base_url: values.base_url,
      auth_type_id: +values.auth_type_id,
      auth_payload: +values.auth_type_id === 6 ? undefined : authPayload,
    };
    mutation.mutate(options);
  }

  const authForms = {
    1: <BasicAuth setPair={setAuthPayload} />,
    2: <BearerToken setPair={setAuthPayload} />,
    3: <ApiKey setPair={setAuthPayload} />,
    4: <Oauth setPair={setAuthPayload} />,
    5: <Jwt setPair={setAuthPayload} />,
    6: <None />,
  };

  if (mutation.isPending) {
    return <Loading />;
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="esewa..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="provider description..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="base_url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Base Url</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://baseurl.provider.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="auth_type_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Authentication Configuration</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a authentication mechanism" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">Basic Auth</SelectItem>
                    <SelectItem value="2">Bearer Token</SelectItem>
                    <SelectItem value="3">API Key</SelectItem>
                    <SelectItem value="4">OAuth</SelectItem>
                    <SelectItem value="5">Jwt</SelectItem>
                    <SelectItem value="6">None</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* @ts-ignore */}
          {authForms[form.getValues().auth_type_id]}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default NewProvider;
