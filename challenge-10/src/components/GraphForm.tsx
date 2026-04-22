import { useGraphForm } from "../hooks/useGraphForm";
import { Button } from "./shared/Button";

export const GraphForm = () => {
  //* Custom hooks
  const { type, handleTypeChange } = useGraphForm();

  return (
    <form className="w-full flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Agregar un Nodo (Persona o Ciudad)</h2>
      <div className="flex flex-col gap-2">
        <label htmlFor="type" className="font-medium">
          Tipo de Nodo:
        </label>
        <select
          name="type"
          id="type"
          className="p-2 font-light border border-gray-300 shadow-sm rounded"
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
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="age" className="font-medium">
              Edad:
            </label>
            <input
              type="text"
              id="age"
              className="p-2 font-light border border-gray-300 shadow-sm rounded"
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
            ></select>
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
          />
        </div>
      )}

      <div className="w-full flex gap-2 [&>button]:w-full">
        <Button text="Agregar" type="button" variant="primary" />
      </div>
    </form>
  );
};
