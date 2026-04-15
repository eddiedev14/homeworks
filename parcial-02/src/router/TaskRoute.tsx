import { Outlet } from "react-router-dom";
import { TaskContextProvider } from "../contexts/TaskContext";

//? Se crea un controlador en concreto para gestionar que elementos están dentro de ese provider
export const TaskRoute = () => {
  return (
    <TaskContextProvider>
      <Outlet />
    </TaskContextProvider>
  );
};
