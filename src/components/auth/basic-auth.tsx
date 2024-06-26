"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BasicAuth = ({ setPair }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleSubmit = () => {
    setPair({
      username,
      password,
    });
    setClicked(true);
  };

  return (
    <div className="space-y-6">
      <Input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {!clicked && (
        <Button type="button" onClick={handleSubmit}>
          Done <Check />
        </Button>
      )}
    </div>
  );
};

export default BasicAuth;
