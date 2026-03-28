import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { GuestOnlyRoute } from "./GuestOnlyRoute";
import {
  Home,
  Login,
  Dashboard,
  Error,
  Library,
  ATM,
  Register,
} from "../pages";
import { useAuthContext } from "../hooks/shared/useAuthContext";
import { Loader } from "../components/shared/Loader";

export const AppRouter = () => {
  // * Esperar a que se compruebe si hay una sesión activa en toda la app.
  const { loading } = useAuthContext();

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      {/* Rutas Públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboard solo para usuarios que no tienen una sesión activa */}
      <Route element={<GuestOnlyRoute />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="/*" element={<Error />} />

      {/* Rutas Privadas */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/library" element={<Library />} />+
        <Route path="/atm" element={<ATM />} />
      </Route>
    </Routes>
  );
};
