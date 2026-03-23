import { useEffect, useState, type ChangeEvent, type SubmitEvent } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type IUserLogin from "../interfaces/userLogin.interface";

export default function useLoginForm() {
  //* Context
  const { user, login } = useAuthContext();

  //* Navigate
  const navigate = useNavigate();

  //* States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //* Effects
  //? Si ya hay un user en el context se navega directamente al dashboard
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, []);

  //* Functions
  const handleEmailChange = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Crear objeto IUserLogin con las credenciales
    const userLogin: IUserLogin = {
      email,
      password,
    };

    // Llamar a la función login del context
    const logged: boolean = login(userLogin);

    if (logged) {
      toast.success("¡Has iniciado sesión correctamente!");

      //? Se usa replace: true, para que luego no se pueda retroceder de nuevo al login
      navigate("/dashboard", { replace: true });
      return;
    }

    // Mostrar alerta
    toast.error("Las credenciales ingresadas no son válidas");
  };

  return {
    //* States
    email,
    password,

    //* Methods
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
  };
}
