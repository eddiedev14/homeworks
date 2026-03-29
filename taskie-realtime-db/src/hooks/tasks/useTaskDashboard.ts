import { useEffect } from "react";
import { toast } from "react-toastify";
import { useTaskContext } from "./useTaskContext";
import { useNavigate } from "react-router-dom";

export const useTaskDashboard = () => {
  //* Contexts
  const { tasks, isFetched, loading, error, getAllTasks, clearSelectedTask } =
    useTaskContext();

  //* Custom hooks
  const navigate = useNavigate();

  //* Effects
  useEffect(() => {
    const fetchTasks = async () => {
      //* Obtener todas las tareas de ese usario en concreto
      if (isFetched) return; // Si ya se tienen en memoria no hacerlo.

      await getAllTasks();
      if (error) toast.error(error);
    };

    fetchTasks();
  }, [isFetched]);

  //* Functions
  const handleNewTaskClick = () => {
    // Antes de redirigir a la página de creación de tareas, se podría limpiar cualquier estado relacionado con una tarea seleccionada
    clearSelectedTask();
    navigate("/tasks/form");
  };

  return {
    tasks,
    loading,
    handleNewTaskClick,
  };
};
