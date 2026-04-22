import { useState, type ChangeEvent } from "react";

type NodeType = "person" | "city";

export const useGraphForm = () => {
  //* States
  const [type, setType] = useState<NodeType>("person");

  //* Handlers
  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value as NodeType);
  };

  return {
    type,
    handleTypeChange,
  };
};
