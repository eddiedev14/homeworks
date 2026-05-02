import { ToastContainer } from "react-toastify";
import { Header } from "./components/shared/Header";
import { ProductList } from "./components/ecommerce/ProductList";
import { ProductForm } from "./components/ecommerce/ProductForm";

export const App = () => {
  return (
    <>
      <ToastContainer />

      <Header
        title="T-Ecommerce"
        paragraph="Busca tus productos favoritos en nuestro Tries & Heaps Ecommerce"
      />

      <div className="grid grid-cols-[450px_1fr] gap-4 px-8">
        <ProductForm />
        <ProductList />
      </div>
    </>
  );
};
