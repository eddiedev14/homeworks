import { useAuth } from "../../hooks/auth/useAuth";
import { useExplorer } from "../../hooks/explorer/useExplorer";
import { Button } from "./Button";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Navbar = () => {
  //* Context
  const { logout } = useAuth();
  const { goBack } = useExplorer();

  //* Navigate y Location
  const navigate = useNavigate();
  const location = useLocation();

  //* Handlers
  const handleLogout = () => {
    logout();
    toast.success("¡Has cerrado sesión correctamente!");
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button
          text="Regresar"
          type="button"
          onClick={() => {
            if (location.pathname.endsWith("/form")) {
              navigate("/explorer");
            } else {
              goBack();
            }
          }}
          variant="primary"
          size="md"
        />
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
