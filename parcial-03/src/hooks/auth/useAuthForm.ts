import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { toast } from "react-toastify";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";
import type { User, UserLogin } from "../../types/user.types";

export default function useAuthForm(type: "login" | "register") {
  //* Context
  const { login, register } = useAuth();

  //* States
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //* Navigate
  const navigate = useNavigate();

  //* Handlers
  const handleEmailChange = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setPassword(e.target.value);
  };

  // Functions
  const handleRegister = async () => {
    if (
      email.trim() === "" ||
      username.trim() === "" ||
      password.trim() === ""
    ) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    // Crear objeto IUserLogin con las credenciales
    const credentials: User = {
      email,
      username,
      password,
    };

    // Llamar a la función register del context
    const errorMessage = await register(credentials);

    if (!errorMessage) {
      toast.success("¡Te has registrado correctamente!");
      navigate("/");
      return;
    }

    // Mostrar alerta
    toast.error(errorMessage);
  };

  const handleLogin = async () => {
    if (email.trim() === "" || password.trim() === "") {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    // Crear objeto UserLogin con las credenciales
    const credentials: UserLogin = {
      email,
      password,
    };

    // Llamar a la función login del context
    const errorMessage = await login(credentials);

    if (!errorMessage) {
      toast.success("¡Sesión iniciada correctamente!");
      return;
    }

    // Mostrar alerta
    toast.error(errorMessage);
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (type === "login") {
      handleLogin();
    } else {
      handleRegister();
    }
  };

  return {
    //* States
    email,
    username,
    password,

    //* Methods
    handleEmailChange,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
  };
}
