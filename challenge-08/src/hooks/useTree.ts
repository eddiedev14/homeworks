//? Este hook debe ser creado porque el contexto puede ser null según el tipado.
import { useContext } from "react";
import { TreeContext } from "../contexts/TreeContext";

export const useTree = () => {
  const context = useContext(TreeContext);

  if (!context) {
    throw new Error("useTree must be used inside TreeContextProvider");
  }

  // Se retorna el contexto con el tipado correcto (ya no habría null)
  return context;
};
