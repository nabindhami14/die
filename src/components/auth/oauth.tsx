"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Oauth = ({ setPair }: any) => {
  const [token, setToken] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleSubmit = () => {
    setPair({
      token,
    });
    setClicked(true);
  };

  return (
    <div className="space-y-6">
      <Input
        type="text"
        placeholder="token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />

      {!clicked && (
        <Button type="button" onClick={handleSubmit}>
          Done <Check />
        </Button>
      )}
    </div>
  );
};

export default Oauth;
