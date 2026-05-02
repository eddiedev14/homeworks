import { useEcommerce } from "../../hooks/useEcommerce";
import { ProductCard } from "./ProductCard";
import { SearchForm } from "./SearchForm";

export const ProductList = () => {
  const { products, filteredProducts, isSearched } = useEcommerce();

  return (
    <section className="w-full mx-auto mt-6">
      <h2 className="text-3xl font-bold text-center">Nuestros productos</h2>
      <p className="text-sm font-light text-slate-800 text-center">
        Aquí podrás ver TODOS nuestros productos
      </p>
      <SearchForm />
      <div className="grid grid-cols-3 gap-4 mt-4">
        {isSearched &&
          filteredProducts.map(({ name, popularity }, index) => (
            <ProductCard
              key={index}
              name={name}
              popularity={popularity}
              top={index + 1}
            />
          ))}

        {!isSearched &&
          products.map(({ name, popularity }, index) => (
            <ProductCard key={index} name={name} popularity={popularity} />
          ))}
      </div>
    </section>
  );
};
