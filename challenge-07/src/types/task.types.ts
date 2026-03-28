export type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

export type TaskInput = Omit<Task, "id">;
export type TaskUpdate = Partial<TaskInput>;
