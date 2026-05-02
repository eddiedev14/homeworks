import { Header } from "./components/shared/Header";
import { SearchForm } from "./components/ecommerce/SearchForm";
import { ProductList } from "./components/ecommerce/ProductList";

export const App = () => {
  return (
    <>
      <Header
        title="T-Ecommerce"
        paragraph="Busca tus productos favoritos en nuestro Tries & Heaps Ecommerce"
      />

      <SearchForm />
      <ProductList />
    </>
  );
};
