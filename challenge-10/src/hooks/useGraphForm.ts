import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { useGraph } from "./useGraph";
import type ICity from "../interfaces/city.interface";
import { toast } from "react-toastify";
import type IPerson from "../interfaces/person.interface";

type NodeType = "person" | "city";

export const useGraphForm = () => {
  //* Context
  const { graph, addCity, addPerson } = useGraph();

  //* States
  const [type, setType] = useState<NodeType>("person");

  //? Person Form
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [cityRelation, setCityRelation] = useState("");

  //? City Form
  const [cityName, setCityName] = useState("");

  //* Handlers
  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value as NodeType);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  const handleCityRelation = (e: ChangeEvent<HTMLSelectElement>) => {
    setCityRelation(e.target.value);
  };

  const handleCityName = (e: ChangeEvent<HTMLInputElement>) => {
    setCityName(e.target.value);
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validar si hay información sin rellenar
    if (
      (type === "person" &&
        (name.trim() === "" ||
          age.trim() === "" ||
          cityRelation.trim() === "")) ||
      (type === "city" && cityName.trim() === "")
    ) {
      toast.error("¡Todos los campos son obligatorios!");
      return;
    }

    // Agregar nodo
    if (type === "person") {
      const person: IPerson = {
        name,
        age: Number(age),
      };

      // Buscar ciudad por el cityName
      const cityNode = graph.searchCity(cityRelation);
      addPerson(person, cityNode);
    } else {
      const city: ICity = {
        name: cityName,
      };

      addCity(city);
    }

    toast.success(
      type === "person"
        ? "¡Persona agregada correctamente!"
        : "¡Ciudad agregada correctamente!",
    );

    // Resetear inputs
    setName("");
    setAge("");
    setCityName("");
  };

  return {
    //* States
    type,
    name,
    age,
    cityRelation,
    cityName,

    //* Methods
    handleTypeChange,
    handleNameChange,
    handleAgeChange,
    handleCityRelation,
    handleCityName,
    handleSubmit,
  };
};
