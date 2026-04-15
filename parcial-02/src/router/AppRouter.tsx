import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { GuestOnlyRoute } from "./GuestOnlyRoute";
import { ExplorerRoute } from "./ExplorerRoute";
import {
  Home,
  Login,
  Dashboard,
  Error,
  Register,
  ExplorerFormPage,
} from "../pages";
import { useAuth } from "../hooks/auth/useAuth";
import { Loader } from "../components/shared/PageLoader";

export const AppRouter = () => {
  // * Esperar a que se compruebe si hay una sesión activa en toda la app.
  const { loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      {/* Rutas Públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />

      {/* Login solo para usuarios que no tienen una sesión activa */}
      <Route element={<GuestOnlyRoute />}>
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Rutas Privadas */}
      <Route element={<PrivateRoute />}>
        {/* Tasks */}
        <Route path="/explorer" element={<ExplorerRoute />}>
          <Route path="/explorer" element={<Dashboard />} />
          <Route path="/explorer/form" element={<ExplorerFormPage />} />
        </Route>
      </Route>

      <Route path="/*" element={<Error />} />
    </Routes>
  );
};
