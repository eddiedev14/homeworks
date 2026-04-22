//? Este hook debe ser creado porque el contexto puede ser null según el tipado.
import { useContext } from "react";
import { GraphContext } from "../contexts/GraphContext";

export const useGraph = () => {
  const context = useContext(GraphContext);

  if (!context) {
    throw new Error("useTree must be used inside GraphContextProvider");
  }

  // Se retorna el contexto con el tipado correcto (ya no habría null)
  return context;
};
