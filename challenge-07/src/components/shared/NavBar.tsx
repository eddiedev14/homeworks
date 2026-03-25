import { useAuthContext } from "../../hooks/shared/useAuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { PageLink } from "./PageLink";
import { toast } from "react-toastify";

export const Navbar = () => {
  //* Context
  const { logout } = useAuthContext();

  //* Navigate
  const navigate = useNavigate();

  //* Handlers
  const handleLogout = () => {
    logout();
    toast.success("¡Has cerrado sesión correctamente!");
    navigate("/login");
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <PageLink path="/dashboard" text="Dashboard" bordered small />
        <PageLink path="/library" text="Library" bordered small />
        <PageLink path="/atm" text="ATM" bordered small />
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
