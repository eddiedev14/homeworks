import { Button } from "../shared/Button";
import { useExplorerForm } from "../../hooks/explorer/useExplorerForm";

export const ExplorerForm = () => {
  const { name, type, handleNameChange, handleTypeChange, handleSubmit } =
    useExplorerForm();

  return (
    <div className="my-6 mx-6 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">Crear archivo/carpeta</h1>
        <form
          className="w-lg mt-2 flex flex-col gap-4 *:flex *:flex-col *:gap-1"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              className="p-2 font-light border border-gray-300 shadow rounded"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div>
            <label htmlFor="type">Tipo</label>
            <select
              name="type"
              id="type"
              className="p-2 font-light border border-gray-300 shadow rounded"
              value={type}
              onChange={handleTypeChange}
            >
              <option value="file" selected>
                Archivo
              </option>
              <option value="folder">Carpeta</option>
            </select>
          </div>

          <Button
            type="submit"
            text={`Crear ${type === "file" ? "archivo" : "carpeta"}`}
            variant="primary"
          />
        </form>
      </div>
    </div>
  );
};
