import { useState } from "react";
import type IUser from "../interfaces/user.interface";

export default function useAuth() {
  //* States
  const [user, setUser] = useState<null | IUser>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  //* Functions
  const handleLogin = (user: IUser) => {
    if (user.email === "user@mail.com" && user.password === "123") {
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return {
    user,
    handleLogin,
    handleLogout,
  };
}
