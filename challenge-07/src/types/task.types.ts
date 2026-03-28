export type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

// Se usa partial para crear variante para el actualizar
export type TaskUpdate = Partial<Task>;
