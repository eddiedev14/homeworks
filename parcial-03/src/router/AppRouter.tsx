import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Rutas Públicas */}
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
