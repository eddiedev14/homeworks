import { Button } from "../shared/Button";

export const SearchForm = () => {
  return (
    <form className="w-md ml-auto flex flex-col gap-4 my-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="search" className="font-medium">
          Buscar Producto:
        </label>
        <div className="grid grid-cols-[1fr_auto] gap-2">
          <input
            type="search"
            id="search"
            className="p-2 font-light border border-gray-300 shadow-sm rounded"
          />
          <div className="flex gap-2">
            <Button text="🔍" type="submit" variant="secondary" size="sm" />
          </div>
        </div>
      </div>
    </form>
  );
};
