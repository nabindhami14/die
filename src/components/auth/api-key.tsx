"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ApiKey = ({ setPair }: any) => {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleSubmit = () => {
    setPair({
      key,
      value,
    });
    setClicked(true);
  };

  return (
    <div className="space-y-6">
      <Input
        type="text"
        placeholder="key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <Input
        type="value"
        placeholder="value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {!clicked && (
        <Button type="button" onClick={handleSubmit}>
          Done <Check />
        </Button>
      )}
    </div>
  );
};

export default ApiKey;
