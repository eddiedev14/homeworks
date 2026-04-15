//? Este hook debe ser creado porque el contexto puede ser null según el tipado.
import { useContext } from "react";
import { ExplorerContext } from "../../contexts/ExplorerContext";

export const useExplorer = () => {
  const context = useContext(ExplorerContext);

  if (!context) {
    throw new Error("useExplorer must be used inside ExplorerContextProvider");
  }

  // Se retorna el contexto con el tipado correcto (ya no habría null)
  return context;
};
