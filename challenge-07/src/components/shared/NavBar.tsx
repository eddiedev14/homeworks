import { useAuth } from "../../hooks/auth/useAuth";
import { Button } from "./Button";
import { PageLink } from "./PageLink";
import { toast } from "react-toastify";

export const Navbar = () => {
  //* Context
  const { logout } = useAuth();

  //* Handlers
  const handleLogout = () => {
    logout();
    toast.success("¡Has cerrado sesión correctamente!");
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <PageLink path="/tasks/dashboard" text="Dashboard" bordered small />
      </div>

      <Button
        text="Cerrar sesión"
        type="button"
        variant="destructive"
        onClick={handleLogout}
      />
    </nav>
  );
};
