import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { useAuth } from "../auth/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useExplorer } from "./useExplorer";
import type { NodeInput } from "../../types/node.types";

export const useExplorerForm = () => {
  //* Contexts
  const { user } = useAuth();
  const { error, newNode, selectedNodeId } = useExplorer();

  //* States
  const [name, setName] = useState("");
  const [type, setType] = useState("file");

  //* Hooks
  const navigate = useNavigate();

  //* Functions
  const handleNameChange = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setName(e.target.value);
  };

  const handleTypeChange = (
    e: ChangeEvent<HTMLSelectElement, HTMLSelectElement>,
  ) => {
    setType(e.target.value);
  };

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.trim() === "" || type.trim() === "") {
      toast.error("Todos los campos son obligatorios!");
      return;
    }

    if (!user?.email) {
      toast.error("¡Usuario no autenticado!");
      return;
    }

    const node: NodeInput = {
      name,
      type: type as "file" | "folder",
      parentId: selectedNodeId,
      email: user.email,
    };

    const successfullOperation = await newNode(node);

    if (successfullOperation) {
      toast.success(
        `${type === "file" ? "Archivo" : "Carpeta"} añadido correctamente!`,
      );
      navigate("/explorer");
      return;
    }

    toast.error(error);
  };

  return {
    name,
    type,

    handleNameChange,
    handleTypeChange,
    handleSubmit,
  };
};
