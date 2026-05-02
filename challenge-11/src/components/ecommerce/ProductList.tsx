import { useEcommerce } from "../../hooks/useEcommerce";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const { products } = useEcommerce();

  return (
    <section className="w-5xl mx-auto pt-6">
      <h2 className="text-3xl font-bold text-center">Nuestros productos</h2>
      <p className="text-sm font-light text-slate-800 text-center">
        Aquí podrás ver TODOS nuestros productos
      </p>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {products.map(({ name, popularity }, index) => (
          <ProductCard key={index} name={name} popularity={popularity} />
        ))}
      </div>
    </section>
  );
};
