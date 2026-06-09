import { Routes, Route } from "react-router-dom";
import { HomePage, Login, Register } from "../pages";
import { GuestOnlyRoute } from "./GuestOnlyRoute";
import { Loader } from "../components/shared/PageLoader";
import { PrivateRoute } from "./PrivateRoute";
import { useAuth } from "../hooks/auth/useAuth";

export const AppRouter = () => {
  // * Esperar a que se compruebe si hay una sesión activa en toda la app.
  const { loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      {/* Rutas Públicas */}
      <Route path="/register" element={<Register />} />

      {/* Login solo para usuarios que no tienen una sesión activa */}
      <Route element={<GuestOnlyRoute />}>
        <Route path="/" element={<Login />} />
      </Route>

      {/* Rutas Privadas */}
      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
