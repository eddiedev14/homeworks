//? Este hook debe ser creado porque el contexto puede ser null según el tipado.
import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";

export const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useTaskContext must be used inside AuthProvider");
  }

  // Se retorna el contexto con el tipado correcto (ya no habría null)
  return context;
};
