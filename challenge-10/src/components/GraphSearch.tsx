import { Button } from "./shared/Button";

export const GraphSearch = () => {
  return (
    <form className="w-full flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Buscar personas por ciudad</h2>
      <div className="flex flex-col gap-2">
        <label htmlFor="type" className="font-medium">
          Ciudad:
        </label>
        <select
          name="city-search"
          id="city-search"
          className="p-2 font-light border border-gray-300 shadow-sm rounded"
        ></select>
      </div>

      <div className="w-full flex gap-2 [&>button]:w-full">
        <Button text="Buscar Personas" type="button" variant="primary" />
      </div>
    </form>
  );
};
