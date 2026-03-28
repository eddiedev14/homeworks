import { useTaskCard } from "../../hooks/tasks/useTaskCard";
import type { Task } from "../../types/task.types";
import { Button } from "../shared/Button";

export const TaskCard = ({ id, title, description, completed }: Task) => {
  const { handleCheckboxChange } = useTaskCard(id, completed);

  return (
    <div className="flex flex-col gap-1 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow w-full max-w-sm">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="flex items-center my-2">
        <input
          type="checkbox"
          id={`completed-${id}`}
          checked={completed}
          onChange={handleCheckboxChange}
          className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft cursor-pointer"
        />
        <label
          htmlFor={`completed-${id}`}
          className="select-none ms-2 text-sm font-medium text-heading"
        >
          ¿Realizada?
        </label>
      </div>
      <div className="flex gap-2">
        <Button text="Editar" type="button" variant="secondary" size="md" />
        <Button text="Eliminar" type="button" variant="destructive" size="md" />
      </div>
    </div>
  );
};
