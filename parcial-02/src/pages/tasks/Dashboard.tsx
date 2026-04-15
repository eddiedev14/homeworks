import { Header } from "../../components/shared/Header";
import { Navbar } from "../../components/shared/NavBar";
import { TaskCard } from "../../components/tasks/TaskCard";
import { useAuth } from "../../hooks/auth/useAuth";
import { CommonLoader } from "../../components/shared/CommonLoader";
import { Button } from "../../components/shared/Button";
import { useTaskDashboard } from "../../hooks/tasks/useTaskDashboard";


export const Dashboard = () => {
  const { user } = useAuth();
  const { tasks, loading, handleNewTaskClick } = useTaskDashboard();

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Header
        title={`¡Bienvenido ${user?.username}!`}
        paragraph="Desde esta página podrás gestionar todas tus tareas"
        showImage={true}
      />
      <Button
        text="Nueva Tarea"
        type="button"
        variant="secondary"
        onClick={handleNewTaskClick}
      />

      {loading && <CommonLoader text="Obteniendo tus tareas..." />}
      {!loading && (
        <div className="w-full flex flex-wrap justify-center my-6 gap-8">
          {tasks.map((task) => (
            <TaskCard {...task} key={task.id} />
          ))}
        </div>
      )}
    </div>
  );
};
