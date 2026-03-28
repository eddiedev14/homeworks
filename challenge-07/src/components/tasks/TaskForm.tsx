import { Button } from "../shared/Button";

export const TaskForm = () => {
  return (
    <div className="my-6 mx-6 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">Crear nueva tarea</h1>
        <form className="w-lg mt-2 flex flex-col gap-4 *:flex *:flex-col *:gap-1">
          <div>
            <label htmlFor="title">Nombre de la tarea</label>
            <input
              type="text"
              id="title"
              name="title"
              className="p-2 font-light border border-gray-300 shadow rounded"
            />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              className="p-2 font-light border border-gray-300 shadow-sm rounded"
            />
          </div>
          <Button type="submit" text="Crear tarea" variant="primary" />
        </form>
      </div>
    </div>
  );
};
