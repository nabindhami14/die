"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const BasicAuth = ({ setPair }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    setPair({
      username,
      password,
    });
  };

  return (
    <div>
      <Input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="button" onClick={handleSubmit}>
        Done <Check />
      </Button>
    </div>
  );
};

export default BasicAuth;
