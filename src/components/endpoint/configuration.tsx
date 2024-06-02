// @ts-nocheck
"use client";

import Select from "react-select";
import useEndpointContext from "@/context/useEndpointContext";

import { Input } from "../ui/input";
import { Label } from "../ui/label";

const methods = [
  { value: "GET", label: "GET" },
  { value: "POST", label: "POST" },
  { value: "DELETE", label: "DELETE" },
  { value: "PUT", label: "PUT" },
  { value: "PATCH", label: "PATCH" },
];

const Configuration = () => {
  const {
    name,
    setName,

    description,
    setDescription,

    path,
    setPath,

    method,
    setMethod,
  } = useEndpointContext();

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Name</Label>
        <Input
          type="text"
          placeholder="endpoint name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label>Description</Label>
        <Input
          type="text"
          placeholder="endpoint description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label>Path</Label>
        <Input
          type="text"
          placeholder="endpoint path"
          value={path}
          onChange={(e) => setPath(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label>Select Method</Label>
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
          options={methods}
          value={method}
          onChange={setMethod}
          defaultValue={method}
        />
      </div>
    </div>
  );
};

export default Configuration;
