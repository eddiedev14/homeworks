import { SidebarProvider } from "./context/SidebarContext";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <>
      <SidebarProvider>
        <AppRouter />
      </SidebarProvider>
    </>
  );
};
