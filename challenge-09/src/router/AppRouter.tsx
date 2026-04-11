import { Route, Routes } from "react-router-dom";
import { useSidebar } from "../hooks/useSidebar";
import { Layout } from "../layout/Layout";
import { renderRoutes } from "../utils/utils";

export const AppRouter = () => {
  //* Custom hooks
  const { tree } = useSidebar();

  return (
    <Routes>
      {/* Layout con sidebar */}
      <Route element={<Layout />}>{renderRoutes(tree)}</Route>
    </Routes>
  );
};
