import { useEffect } from "react";
import { Header } from "../../components/shared/Header";
import { Navbar } from "../../components/shared/NavBar";
import { PageLink } from "../../components/shared/PageLink";
import { TaskCard } from "../../components/tasks/TaskCard";
import { useAuthContext } from "../../hooks/auth/useAuthContext";
import { useTaskContext } from "../../hooks/tasks/useTaskContext";
import { toast } from "react-toastify";
import { CommonLoader } from "../../components/shared/CommonLoader";

export const Dashboard = () => {
  const { user, getUserId } = useAuthContext();
  const { tasks, loading, error, getAllTasks } = useTaskContext();

  //* States
  useEffect(() => {
    const fetchTasks = async () => {
      //* Obtener todas las tareas de ese usario en concreto
      await getAllTasks([["userID", "==", getUserId()]]);
      if (error) toast.error(error);
    };

    fetchTasks();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Header
        title={`¡Bienvenido ${user?.username}!`}
        paragraph="Desde esta página podrás gestionar todas tus tareas"
        showImage={true}
      />
      <PageLink path="/tasks/new" text="Nueva Tarea" />

      {loading && <CommonLoader text="Obteniendo tus tareas..." />}
      {!loading && (
        <div className="w-full flex flex-wrap justify-center my-6 gap-8">
          {tasks.map((task) => (
            <TaskCard {...task} />
          ))}
        </div>
      )}
    </div>
  );
};
