import { ToastContainer } from "react-toastify";
import { GraphForm } from "./components/GraphForm";
import { GraphSearch } from "./components/GraphSearch";
import { Header } from "./components/shared/Header";

export const App = () => {
  return (
    <>
      <ToastContainer />

      <Header
        title="Challenge 10"
        paragraph="¡Crea y visualiza tu grafo de ciudades y amigos!"
      />

      <div className="grid grid-cols-[480px_1fr] gap-24 px-24">
        <div className="flex flex-col gap-6">
          <GraphForm />
          <hr />
          <GraphSearch />
        </div>
      </div>
    </>
  );
};
