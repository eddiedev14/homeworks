import { Header } from "../../components/shared/Header";
import { Navbar } from "../../components/shared/NavBar";
import { PageLink } from "../../components/shared/PageLink";
import { TaskCard } from "../../components/tasks/TaskCard";
import { useAuthContext } from "../../hooks/auth/useAuthContext";
import { useTaskContext } from "../../hooks/tasks/useTaskContext";

export const Dashboard = () => {
  const { user } = useAuthContext();
  const { tasks } = useTaskContext();

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Header
        title={`¡Bienvenido ${user?.username}!`}
        paragraph="Desde esta página podrás gestionar todas tus tareas"
        showImage={true}
      />
      <PageLink path="/tasks/new" text="Nueva Tarea" />

      <div className="w-full flex flex-wrap justify-center my-6 gap-8">
        {tasks.map((task) => (
          <TaskCard {...task} />
        ))}
      </div>
    </div>
  );
};
