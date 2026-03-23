import { useState } from "react";
import type IUser from "../interfaces/user.interface";
import type IUserLogin from "../interfaces/userLogin.interface";
import { mockUser } from "../data/user.mock.data";

export default function useAuthState() {
  //* States
  const [user, setUser] = useState<null | IUser>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  //* Functions
  const login = (credentials: IUserLogin): boolean => {
    if (
      credentials.email === mockUser.email &&
      credentials.password === mockUser.password
    ) {
      const authenticatedUser: IUser = {
        email: credentials.email,
        username: mockUser.username,
      };

      setUser(authenticatedUser);
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return {
    user,
    login,
    logout,
  };
}
