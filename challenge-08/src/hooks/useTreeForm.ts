import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { toast } from "react-toastify";
import { useTree } from "./useTree";

export const useTreeForm = () => {
  //* States
  const [number, setNumber] = useState("");

  //* Contexts
  const { tree, appendValue } = useTree();

  //* Handlers
  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  const handleAction = (action: "append" | "check") => {
    // Validate if the input is empty
    if (number.trim() === "") {
      toast.error("El campo no puede estar vacío.");
      return;
    }

    // Validate if the input is a number
    if (isNaN(Number(number))) {
      toast.error("Por favor, ingresa un número válido.");
      return;
    }

    // Validate if the number is already in the tree
    if (tree.contains(Number(number))) {
      if (action === "check") {
        toast.success(`El número ${number} sí está en el árbol.`);
      } else {
        toast.error(`El número ${number} ya está en el árbol.`);
      }

      return;
    }

    // Append the number to the tree
    appendValue(Number(number));
    toast.success(`Número ${number} agregado al árbol.`);
    setNumber("");
  };

  return {
    number,
    handleNumberChange,
    handleAction,
  };
};
