"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Jwt = ({ setPair }: any) => {
  const [secret, setSecret] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleSubmit = () => {
    setPair({
      secret,
    });
    setClicked(true);
  };

  return (
    <div className="space-y-6">
      <Input
        type="text"
        placeholder="secret"
        value={secret}
        onChange={(e) => setSecret(e.target.value)}
      />

      {!clicked && (
        <Button type="button" onClick={handleSubmit}>
          Done <Check />
        </Button>
      )}
    </div>
  );
};

export default Jwt;
