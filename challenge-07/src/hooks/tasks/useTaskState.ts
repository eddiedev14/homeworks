import { useState } from "react";
import type { Task, TaskInput } from "../../types/task.types";
import { useCollection, type Filter } from "../firebase/useCollection";

export const useTaskState = () => {
  //* States
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  //* Custom hook
  const { add, getAll, isPending, error } = useCollection<TaskInput>("tasks");

  //* Functions
  const newTask = async (data: TaskInput): Promise<boolean> => {
    const docRef = await add(data);
    return !!docRef;
  };

  const getAllTasks = async (filters: Filter[] = []): Promise<void> => {
    const tasks = await getAll(filters);
    setTasks(tasks);
  };

  return {
    // Values / states
    tasks,
    selectedTask,
    loading: isPending,
    error,

    // Functions
    newTask,
    getAllTasks,
  };
};
