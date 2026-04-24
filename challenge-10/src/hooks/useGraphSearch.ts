import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { useGraph } from "./useGraph";
import { toast } from "react-toastify";
import type { GraphNode } from "../algorithms/Graph";

export const useGraphSearch = () => {
  //* Context
  const { graph } = useGraph();

  //* States
  const [citySearch, setCitySearch] = useState("");
  const [people, setPeople] = useState<GraphNode[]>([]);

  //* Handlers
  const handleCitySearch = (e: ChangeEvent<HTMLSelectElement>) => {
    setCitySearch(e.target.value);
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validar si hay información sin rellenar
    if (citySearch === "") {
      toast.error("¡Todos los campos son obligatorios!");
      return;
    }

    // Buscar nodo de ciudad
    const city = graph.searchCity(citySearch);

    // Obtener personas que viven en esa ciudad
    const people = graph.getAdjacencyList(city);
    setPeople(people);

    toast.success("Personas consultadas correctamente");
  };

  return {
    citySearch,
    people,
    handleCitySearch,
    handleSubmit,
  };
};
