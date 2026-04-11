import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/shared/Sidebar";
import { useSidebar } from "../hooks/useSidebar";

export const Layout = () => {
  //* Custom hooks
  const { tree } = useSidebar();

  return (
    <div className="grid grid-cols-[250px_1fr] gap-8 h-screen">
      <Sidebar tree={tree} />

      <div>
        <Outlet />
      </div>
    </div>
  );
};
