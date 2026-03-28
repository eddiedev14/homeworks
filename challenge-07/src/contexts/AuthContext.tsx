/* eslint-disable react-refresh/only-export-components */
import { createContext, type ReactNode } from "react";
import type { User, UserLogin, UserUI } from "../types/user.types";
import useAuthState from "../hooks/auth/useAuthState";

interface IAuthContext {
  user: UserUI | null;
  loading: boolean;
  register: (credentials: User) => Promise<string | null>;
  login: (credentials: UserLogin) => Promise<string | null>;
  logout: () => Promise<string | null>;
  getUserId: () => string | undefined;
}

interface IProvider {
  children: ReactNode;
}

//* Crear context
export const AuthContext = createContext<null | IAuthContext>(null);

//* Provider
export const AuthContextProvider = ({ children }: IProvider) => {
  //? Llamar al custom hook
  const contextData = useAuthState();

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
