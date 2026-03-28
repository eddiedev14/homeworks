import { useEffect } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../auth/useAuthContext";
import { useTaskContext } from "./useTaskContext";

export const useTaskDashboard = () => {
  const { getUserId } = useAuthContext();
  const { tasks, isFetched, loading, error, getAllTasks } = useTaskContext();

  //* States
  useEffect(() => {
    const fetchTasks = async () => {
      //* Obtener todas las tareas de ese usario en concreto
      if (isFetched) return; // Si ya se tienen en memoria no hacerlo.

      await getAllTasks([["userID", "==", getUserId()]]);
      if (error) toast.error(error);
    };

    fetchTasks();
  }, [isFetched]);

  return {
    tasks,
    loading,
  };
};
