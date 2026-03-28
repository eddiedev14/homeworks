import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { useTaskContext } from "./useTaskContext";
import type { TaskInput } from "../../types/task.types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useTaskForm = () => {
  //* Contexts
  const { newTask, error } = useTaskContext();

  //* States
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
      completed: false,
    };

    const taskAdded = await newTask(task);

    if (taskAdded) {
      toast.success("Tarea añadida correctamente!");
      navigate("/dashboard");
      return;
    }

    toast.error(error);
    setTitle("");
    setDescription("");
  };

  return {
    title,
    description,

    handleTitleChange,
    handleDescriptionChange,
    handleSubmit,
  };
};
