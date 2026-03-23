import { createContext, type ReactNode } from "react";
import type IUser from "../interfaces/user.interface";
import useAuth from "../hooks/useAuth";

interface IAuthContext {
  user: IUser | null;
  handleLogin: (user: IUser) => void;
  handleLogout: () => void;
}

interface IProvider {
  children: ReactNode;
}

//* Crear context
const AuthContext = createContext<null | IAuthContext>(null);

//* Provider
export const AuthContextProvider = ({ children }: IProvider) => {
  //? Llamar al custom hook
  const contextData = useAuth();

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
