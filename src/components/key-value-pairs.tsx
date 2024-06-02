// @ts-nocheck

import { Delete, Plus } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";

// eslint-disable-next-line react/prop-types
const KeyValuePairs = ({ pairs, setPairs }) => {
  const [key, setKey] = useState("");
  const [valueType, setValueType] = useState("string");

  const handleAddPair = () => {
    if (key) {
      setPairs((prevPairs) => ({
        ...prevPairs,
        [key]: valueType,
      }));
      setKey("");
      setValueType("string");
    }
  };

  const handleRemovePair = (removeKey) => {
    setPairs((prevPairs) => {
      const updatedPairs = { ...prevPairs };
      delete updatedPairs[removeKey];
      return updatedPairs;
    });
  };

  return (
    <div>
      <div className="w-full flex items-center justify-between gap-4">
        <Input
          type="text"
          value={key}
          placeholder="key"
          className="w-full ring-1 py-1"
          onChange={(e) => setKey(e.target.value)}
        />
        <select
          value={valueType}
          onChange={(e) => setValueType(e.target.value)}
          className="w-full border-2 py-1"
        >
          <option value="string">String</option>
          <option value="number">Number</option>
          <option value="boolean">Boolean</option>
        </select>
        <button onClick={handleAddPair} type="button">
          <Plus className="w-6 h-6 text-green-400 ml-2 hover:text-green-500 transition-colors" />
        </button>
      </div>

      <ul>
        {Object.entries(pairs).map(([k, v]) => (
          <div
            key={k}
            className="w-full flex justify-between items-center gap-4 my-4"
          >
            <div className="w-full h-full border px-2 py-1">{k}</div>
            <div className="w-full h-full border px-2 py-1">{v}</div>
            <button onClick={() => handleRemovePair(k)} type="button">
              <Delete className="w-6 h-6 text-red-400 ml-2 hover:text-red-500 transition-colors" />
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default KeyValuePairs;
