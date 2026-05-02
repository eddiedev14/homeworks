import { SearchForm } from "./components/ecommerce/SearchForm";
import { Header } from "./components/shared/Header";

export const App = () => {
  return (
    <>
      <Header
        title="T-Ecommerce"
        paragraph="Busca tus productos favoritos en nuestro Tries & Heaps Ecommerce"
      />

      <SearchForm />
    </>
  );
};
