import { useState } from "react";
import type { Task, TaskInput } from "../../types/task.types";
import { useCollection } from "../firebase/useCollection";

export const useTaskState = () => {
  //* States
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  //* Custom hook
  const { add, isPending, error } = useCollection<TaskInput>("tasks");

  //* Functions
  async function newTask(data: TaskInput): Promise<boolean> {
    const docRef = await add(data);
    if (!docRef) return false;

    const task: Task = {
      id: docRef.id,
      ...data,
    };

    setTasks((prev) => [...prev, task]);
    return true;
  }

  return {
    tasks,
    selectedTask,
    newTask,
    loading: isPending,
    error,
  };
};
