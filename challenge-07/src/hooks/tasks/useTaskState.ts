import { useState } from "react";
import type { Task, TaskInput, TaskUpdate } from "../../types/task.types";
import { useCollection, type Filter } from "../firebase/useCollection";

export const useTaskState = () => {
  //* States
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isFetched, setIsFetched] = useState(false);

  //* Custom hook
  const { add, getAll, update, remove, isPending, error } =
    useCollection<TaskInput>("tasks");

  //* Functions
  const newTask = async (data: TaskInput): Promise<boolean> => {
    const docId = await add(data);

    if (docId) {
      const newTask: Task = {
        id: docId,
        ...data,
      };

      // Actualizar el estado para no tener que ejecutar de nuevo una consulta
      setTasks((prev) => [newTask, ...prev]);
      return true;
    }

    return false;
  };

  const getAllTasks = async (filters: Filter[] = []): Promise<void> => {
    const tasks = await getAll(filters);
    setTasks(tasks);
    setIsFetched(true);
  };

  const updateTask = async (id: string, data: TaskUpdate): Promise<boolean> => {
    const updated = await update(id, data);

    if (updated) {
      // Buscar esa task en el estado y actualizarla (para no hacer toda la consulta de nuevo)
      setTasks((prev) =>
        prev.map((task) => (task.id === id ? { ...task, ...data } : task)),
      );
      return true;
    }

    return false;
  };

  const removeTask = async (id: string): Promise<boolean> => {
    const deleted = await remove(id);

    if (deleted) {
      // Eliminar esa task del estado (para no hacer toda la consulta de nuevo)
      setTasks((prev) => prev.filter((task) => task.id !== id));
      return true;
    }

    return false;
  };

  const handleSelectedTaskChange = (taskId: string) => {
    const task = tasks.find((t) => t.id === taskId) || null;
    setSelectedTask(task);
  };

  const clearSelectedTask = () => {
    setSelectedTask(null);
  };

  return {
    // Values / states
    tasks,
    selectedTask,
    isFetched,
    loading: isPending,
    error,

    // Functions
    newTask,
    getAllTasks,
    updateTask,
    removeTask,
    handleSelectedTaskChange,
    clearSelectedTask,
  };
};
