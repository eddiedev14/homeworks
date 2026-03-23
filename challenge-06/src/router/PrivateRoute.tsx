//* En React Router v.6., las rutas hijas se pasan como el componente Outlet (ya no children)
import { Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks/shared/useAuthContext";
import { Error } from "../pages/Error";

export const PrivateRoute = () => {
  const { user } = useAuthContext();
  return user ? <Outlet /> : <Error errorCode="403" />;
};
