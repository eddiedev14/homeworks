import { Button } from "./shared/Button";
import { useTreeForm } from "../hooks/useTreeForm";

export const TreeForm = () => {
  //* Hooks
  const { number, handleNumberChange, handleAction } = useTreeForm();

  return (
    <form className="w-md mt-4 mx-auto flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="number" className="font-medium">
          Número:
        </label>
        <input
          type="text"
          id="number"
          value={number}
          onChange={handleNumberChange}
          className="max-w-md p-2 font-light border border-gray-300 shadow-sm rounded"
        />
      </div>

      <div className="w-full flex gap-2 [&>button]:w-full">
        <Button
          text="Agregar"
          type="button"
          variant="primary"
          onClick={() => handleAction("append")}
        />
        <Button
          text="Comprobar existencia"
          type="button"
          variant="primary"
          onClick={() => handleAction("check")}
        />
      </div>
    </form>
  );
};
