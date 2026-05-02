//? Este hook debe ser creado porque el contexto puede ser null según el tipado.
import { useContext } from "react";
import { EcommerceContext } from "../contexts/EcommerceContext";

export const useEcommerce = () => {
  const context = useContext(EcommerceContext);

  if (!context) {
    throw new Error(
      "useEcommerce must be used inside EcommerceContextProvider",
    );
  }

  // Se retorna el contexto con el tipado correcto (ya no habría null)
  return context;
};
