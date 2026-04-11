import { Button } from "./shared/Button";
import { useTreeForm } from "../hooks/useTreeForm";

export const TreeForm = () => {
  //* Hooks
  const { number, handleNumberChange, handleSubmit } = useTreeForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="w-md mt-4 mx-auto flex flex-col gap-4"
    >
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
      <Button text="Agregar" type="submit" variant="primary" />
    </form>
  );
};
