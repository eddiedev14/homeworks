import { Header } from "../../components/shared/Header";
import { Navbar } from "../../components/shared/NavBar";
import { NodeCard } from "../../components/explorer/NodeCard";
import { useAuth } from "../../hooks/auth/useAuth";
import { CommonLoader } from "../../components/shared/CommonLoader";
import { Button } from "../../components/shared/Button";
import { useExplorerDashboard } from "../../hooks/explorer/useExplorerDashboard";

export const Dashboard = () => {
  const { user } = useAuth();
  const { currentNodes, loading, handleNewNodeClick, getCurrentPath } =
    useExplorerDashboard();

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Header
        title={`¡Bienvenido ${user?.username}!`}
        paragraph="Desde esta página podrás gestionar todas tus carpetas y archivos"
        showImage={true}
      />
      <Button
        text="Nuevo Archivo/Carpeta"
        type="button"
        variant="secondary"
        onClick={handleNewNodeClick}
      />

      <div className="text-sm text-gray-500 mt-4 mb-2">
        Ruta actual:{" "}
        {getCurrentPath().length === 0
          ? "Raíz"
          : getCurrentPath()
              .map((node) => node.name)
              .join(" / ")}
      </div>

      {loading && (
        <CommonLoader text="Obteniendo tus carpetas y archivos base..." />
      )}
      {!loading && (
        <div className="w-full flex flex-wrap justify-center my-6 gap-8">
          {currentNodes.map((node) => (
            <NodeCard node={node} key={node.id} />
          ))}
        </div>
      )}
    </div>
  );
};
