import { Button } from "../shared/Button";
import { useSearchForm } from "../../hooks/useSearchForm";

export const SearchForm = () => {
  const {
    searchTerm,
    searchTop,
    handleTermChange,
    handleTopChange,
    handleSubmit,
  } = useSearchForm();

  return (
    <form
      className="w-md ml-auto flex flex-col gap-4 my-4"
      onSubmit={handleSubmit}
    >
      <div>
        <div className="grid grid-cols-[1fr_1fr_auto] gap-2 items-end">
          <div className="flex flex-col gap-2">
            <label htmlFor="search" className="font-medium">
              Buscar
            </label>
            <input
              type="search"
              id="search"
              className="p-2 font-light border border-gray-300 shadow-sm rounded"
              placeholder="Nombre del Producto"
              value={searchTerm}
              onChange={handleTermChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="top" className="font-medium">
              Top (1, 2, 3...)
            </label>
            <input
              type="number"
              id="top"
              className="p-2 font-light border border-gray-300 shadow-sm rounded"
              placeholder="Nombre del Producto"
              value={searchTop}
              onChange={handleTopChange}
            />
          </div>
          <div className="flex gap-2">
            <Button text="🔍" type="submit" variant="secondary" size="sm" />
          </div>
        </div>
      </div>
    </form>
  );
};
