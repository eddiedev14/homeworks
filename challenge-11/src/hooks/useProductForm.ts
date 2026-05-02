import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { toast } from "react-toastify";
import { useEcommerce } from "./useEcommerce";

export const useProductForm = () => {
  //* States
  const [name, setName] = useState("");
  const [popularity, setPopularity] = useState("");

  //* Context
  const { addProduct } = useEcommerce();

  //* Handlers
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePopularityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPopularity(e.target.value);
  };

  //? Agregar un nuevo producto
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();

    // Verificar que ambos campos estén llenos
    if (name.trim() === "" || popularity.trim() === "") {
      toast.error("Por favor, completa ambos campos.");
      return;
    }

    // Verificar que la popularidad sea un número válido
    const popularityNumber = parseInt(popularity, 10);
    if (
      isNaN(popularityNumber) ||
      popularityNumber < 0 ||
      popularityNumber > 100
    ) {
      toast.error("La popularidad debe ser un número válido entre 0 y 100.");
      return;
    }

    // Agregar producto
    addProduct(name, popularityNumber);
    toast.success("Producto agregado exitosamente.");

    // Limpiar campos
    setName("");
    setPopularity("");
  };

  return {
    name,
    popularity,

    handleNameChange,
    handlePopularityChange,
    handleSubmit,
  };
};
