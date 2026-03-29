import type { TaskUpdate } from "../../types/task.types";
import { useTaskContext } from "./useTaskContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const useTaskCard = (
  taskId: string,
  title: string,
  completed: boolean,
) => {
  //* Contexts
  const { error, updateTask, removeTask, handleSelectedTaskChange } =
    useTaskContext();

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

  const handleRemoveClick = () => {
    Swal.fire({
      title: `¿Deseas eliminar la tarea '${title}'?`,
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      confirmButtonColor: "#dc2626",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const taskRemoved = await removeTask(taskId);
        if (taskRemoved) {
          toast.success("Tarea eliminada correctamente!");
        } else {
          toast.error(error);
        }
      }
    });
  };

  return {
    handleCheckboxChange,
    handleEditClick,
    handleRemoveClick,
  };
};
