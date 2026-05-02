import type { IProduct } from "../../interfaces/product.interface";

export const ProductCard = ({ name, popularity }: IProduct) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 shadow transition-transform hover:scale-105 relative">
      <div className="flex flex-col gap-1">
        <span className="bg-blue-500 text-white w-min px-2 py-2 rounded-full">
          🏷️
        </span>
        <h3 className="text-lg font-semibold capitalize">{name}</h3>
        <span className="border border-blue-500 w-fit text-xs font-medium px-2 py-1 rounded-full">
          Popularidad: {popularity}
        </span>
      </div>
    </div>
  );
};
