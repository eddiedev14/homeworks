import type { TaskUpdate } from "../../types/task.types";
import { useTaskContext } from "./useTaskContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useTaskCard = (taskId: string, completed: boolean) => {
  //* Contexts
  const { error, updateTask, handleSelectedTaskChange } = useTaskContext();

  //* Hooks
  const navigate = useNavigate();

  //* Functions
  const handleCheckboxChange = async () => {
    const newTaskState: TaskUpdate = {
      completed: !completed,
    };

    const taskUpdated = await updateTask(taskId, newTaskState);

    if (taskUpdated) {
      toast.success("Tarea actualizaada correctamente!");
      return;
    }

    toast.error(error);
  };

  const handleEditClick = () => {
    // Se selecciona la tarea para que el formulario se llene con su información
    handleSelectedTaskChange(taskId);
    navigate("/tasks/form");
  };

  return {
    handleCheckboxChange,
    handleEditClick,
  };
};
