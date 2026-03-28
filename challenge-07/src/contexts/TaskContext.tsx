/* eslint-disable react-refresh/only-export-components */
import { createContext, type ReactNode } from "react";
import type { Task, TaskInput, TaskUpdate } from "../types/task.types";
import type { Filter } from "../hooks/firebase/useCollection";
import { useTaskState } from "../hooks/tasks/useTaskState";

interface ITaskContext {
  tasks: Task[];
  selectedTask: Task | null;
  isFetched: boolean;
  loading: boolean;
  error: string | null;
  newTask: (data: TaskInput) => Promise<boolean>;
  getAllTasks: (filters?: Filter[]) => Promise<void>;
  updateTask: (id: string, data: TaskUpdate) => Promise<boolean>;
}

interface IProvider {
  children: ReactNode;
}

//* Crear context
export const TaskContext = createContext<null | ITaskContext>(null);

//* Provider
export const TaskContextProvider = ({ children }: IProvider) => {
  //? Llamar al custom hook
  const contextData = useTaskState();

  return (
    <TaskContext.Provider value={contextData}>{children}</TaskContext.Provider>
  );
};
