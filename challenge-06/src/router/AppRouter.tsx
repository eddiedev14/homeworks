import { AuthContextProvider } from "../contexts/AuthContext";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { Error } from "../pages/Error";
import { Library } from "../pages/Library";

export const AppRouter = () => {
  return (
    <AuthContextProvider>
      <Routes>
        {/* Rutas Públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Error errorCode="404" />} />

        {/* Rutas Privadas */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/library" element={<Library />} />
        </Route>
      </Routes>
    </AuthContextProvider>
  );
};
