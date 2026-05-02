import { Button } from "../shared/Button";

export const SearchForm = () => {
  return (
    <form className="w-md mx-auto flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="product-name" className="font-medium">
          Buscar Producto:
        </label>
        <div className="grid grid-cols-[1fr_auto] gap-2">
          <input
            type="search"
            id="product-name"
            className="p-2 font-light border border-gray-300 shadow-sm rounded"
          />
          <Button text="🔍" type="submit" variant="primary" />
        </div>
      </div>
    </form>
  );
};
