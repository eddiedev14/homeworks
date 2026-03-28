/* eslint-disable react-refresh/only-export-components */
import { createContext, type ReactNode } from "react";
import type { Task, TaskInput } from "../types/task.types";
import { useTaskState } from "../hooks/tasks/useTaskState";

interface ITaskContext {
  tasks: Task[];
  selectedTask: Task | null;
  newTask: (data: TaskInput) => Promise<boolean>;
  loading: boolean;
  error: string | null;
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
