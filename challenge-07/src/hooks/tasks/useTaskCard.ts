import type { TaskUpdate } from "../../types/task.types";
import { useTaskContext } from "./useTaskContext";
import { toast } from "react-toastify";

export const useTaskCard = (taskId: string, completed: boolean) => {
  //* Contexts
  const { updateTask, error } = useTaskContext();

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

  return {
    handleCheckboxChange,
  };
};
