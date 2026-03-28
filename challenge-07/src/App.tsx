import { AuthContextProvider } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <AuthContextProvider>
      <ToastContainer />
      <AppRouter />
    </AuthContextProvider>
  );
};
