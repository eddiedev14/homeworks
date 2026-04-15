import { Outlet } from "react-router-dom";
import { ExplorerContextProvider } from "../contexts/ExplorerContext";

//? Se crea un controlador en concreto para gestionar que elementos están dentro de ese provider
export const ExplorerRoute = () => {
  return (
    <ExplorerContextProvider>
      <Outlet />
    </ExplorerContextProvider>
  );
};
