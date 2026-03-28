//* En React Router v.6., las rutas hijas se pasan como el componente Outlet (ya no children)
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks/auth/useAuthContext";

export const PrivateRoute = () => {
  const { user } = useAuthContext();
  return user ? <Outlet /> : <Navigate to="/login" />;
};
