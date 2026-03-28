import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type { User } from "../../types/user.types";

export default function useRegisterForm() {
  //* Context
  const { register } = useAuthContext();

  //* Navigate
  const navigate = useNavigate();

  //* States
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //* Functions
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

  const handleRegister = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

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
      navigate("/login");
      return;
    }

    // Mostrar alerta
    toast.error(errorMessage);
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
    handleRegister,
  };
}
