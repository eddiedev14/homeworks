import { useGraph } from "../hooks/useGraph";
import { useGraphForm } from "../hooks/useGraphForm";
import { Button } from "./shared/Button";

export const GraphForm = () => {
  //* Context
  const graph = useGraph();

  //* Custom hooks
  const {
    type,
    name,
    age,
    cityRelation,
    cityName,
    handleTypeChange,
    handleNameChange,
    handleAgeChange,
    handleCityRelation,
    handleCityName,
    handleSubmit,
  } = useGraphForm();

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold">Agregar un Nodo (Persona o Ciudad)</h2>
      <div className="flex flex-col gap-2">
        <label htmlFor="type" className="font-medium">
          Tipo de Nodo:
        </label>
        <select
          name="type"
          id="type"
          className="p-2 font-light border border-gray-300 shadow-sm rounded"
          value={type}
          onChange={handleTypeChange}
        >
          <option value="person">Persona</option>
          <option value="city">Ciudad</option>
        </select>
      </div>

      {/* Formulario si el tipo es "person" */}
      {type === "person" && (
        <>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-medium">
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              className="p-2 font-light border border-gray-300 shadow-sm rounded"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="age" className="font-medium">
              Edad:
            </label>
            <input
              type="number"
              id="age"
              className="p-2 font-light border border-gray-300 shadow-sm rounded"
              value={age}
              onChange={handleAgeChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="city-relation" className="font-medium">
              Ciudad:
            </label>
            <select
              name="city-relation"
              id="city-relation"
              className="p-2 font-light border border-gray-300 shadow-sm rounded"
              value={cityRelation}
              onChange={handleCityRelation}
            >
              {graph.cities.map((city) => (
                <option key={city.name}>{city.name}</option>
              ))}
            </select>
          </div>
        </>
      )}

      {/* Formulario si el tipo es "city" */}
      {type === "city" && (
        <div className="flex flex-col gap-2">
          <label htmlFor="city" className="font-medium">
            Nombre de la Ciudad:
          </label>
          <input
            type="text"
            id="city"
            className="p-2 font-light border border-gray-300 shadow-sm rounded"
            value={cityName}
            onChange={handleCityName}
          />
        </div>
      )}

      <div className="w-full flex gap-2 [&>button]:w-full">
        <Button text="Agregar" type="submit" variant="primary" />
      </div>
    </form>
  );
};
