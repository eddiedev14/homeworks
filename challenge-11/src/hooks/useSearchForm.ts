import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { useEcommerce } from "./useEcommerce";
import { toast } from "react-toastify";

export const useSearchForm = () => {
  //* States
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTop, setSearchTop] = useState("3");

  //* Contexts
  const { searchTopK } = useEcommerce();

  //* Handlers
  const handleTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleTopChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTop(e.target.value);
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validar el valor del top
    const topNumber = Number(searchTop);

    if (isNaN(topNumber) || topNumber < 1) {
      toast.error("El valor del top no es válido");
      return;
    }

    searchTopK(searchTerm, Number(topNumber));
    toast.success("Busqueda realizada correctamente.");
  };

  return {
    searchTerm,
    searchTop,

    handleTermChange,
    handleTopChange,
    handleSubmit,
  };
};
