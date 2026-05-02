import { Button } from "../shared/Button";
import { useProductForm } from "../../hooks/useProductForm";

export const ProductForm = () => {
  const {
    name,
    popularity,
    handleNameChange,
    handlePopularityChange,
    handleSubmit,
  } = useProductForm();

  return (
    <form
      className="w-full pr-6 pt-6 flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <h3 className="text-xl font-bold">Agregar Producto</h3>
      <div className="flex flex-col gap-2">
        <label htmlFor="product-name" className="font-medium">
          Nombre de Producto:
        </label>
        <input
          type="text"
          id="product-name"
          className="p-2 font-light border border-gray-300 shadow-sm rounded"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="product-popularity" className="font-medium">
          Popularidad:
        </label>
        <input
          type="number"
          id="product-popularity"
          className="p-2 font-light border border-gray-300 shadow-sm rounded"
          value={popularity}
          onChange={handlePopularityChange}
        />
      </div>
      <div className="flex flex-col gap-4">
        <Button text="Agregar Producto" type="submit" variant="primary" />
        <Button text="Resetear Búsqueda" type="button" variant="gray" />
      </div>
    </form>
  );
};
