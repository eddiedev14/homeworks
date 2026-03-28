//? Este hook debe ser creado porque el contexto puede ser null según el tipado.
import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";

export const useTaskContext = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTaskContext must be used inside AuthProvider");
  }

  // Se retorna el contexto con el tipado correcto (ya no habría null)
  return context;
};
