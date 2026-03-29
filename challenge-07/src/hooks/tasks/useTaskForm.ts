import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { useTaskContext } from "./useTaskContext";
import { useAuthContext } from "../auth/useAuthContext";
import type { TaskInput } from "../../types/task.types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useTaskForm = () => {
  //* Contexts
  const { getUserId } = useAuthContext();
  const {
    selectedTask,
    loading,
    error,
    newTask,
    updateTask,
    clearSelectedTask,
  } = useTaskContext();

  //* States
  // Si hay una tarea seleccionada, se llenan los campos con su información
  const [title, setTitle] = useState(selectedTask ? selectedTask.title : "");
  const [description, setDescription] = useState(
    selectedTask ? selectedTask.description : "",
  );

  //* Hooks
  const navigate = useNavigate();

  //* Functions
  const handleTitleChange = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.trim() === "" || description.trim() === "") {
      toast.error("Todos los campos son obligatorios!");
      return;
    }

    const task: TaskInput = {
      title,
      description,
      completed: selectedTask ? selectedTask.completed : false,
      userID: getUserId()!,
    };

    // Si hay una tarea seleccionada, se actualiza en lugar de crear una nueva
    const successfullOperation = selectedTask
      ? await updateTask(selectedTask.id, task)
      : await newTask(task);

    if (successfullOperation) {
      toast.success(
        selectedTask
          ? "Tarea actualizada correctamente!"
          : "Tarea añadida correctamente!",
      );
      clearSelectedTask();
      navigate("/tasks/dashboard");
      return;
    }

    toast.error(error);
  };

  return {
    title,
    description,
    loading,
    selectedTask,

    handleTitleChange,
    handleDescriptionChange,
    handleSubmit,
  };
};
