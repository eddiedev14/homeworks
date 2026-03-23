import { AuthContextProvider } from "../contexts/AuthContext";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { Home, Login, Dashboard, Error, Library, ATM } from "../pages";

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
          <Route path="/library" element={<Library />} />+
          <Route path="/atm" element={<ATM />} />
        </Route>
      </Routes>
    </AuthContextProvider>
  );
};
