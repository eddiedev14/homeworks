/* eslint-disable react-refresh/only-export-components */
import { createContext, type ReactNode } from "react";
import type IUser from "../interfaces/user.interface";
import type IUserLogin from "../interfaces/userLogin.interface";
import useAuthState from "../hooks/shared/useAuthState";

interface IAuthContext {
  user: IUser | null;
  login: (credentials: IUserLogin) => boolean;
  logout: () => void;
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
