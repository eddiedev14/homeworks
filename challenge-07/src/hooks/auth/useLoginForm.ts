import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { toast } from "react-toastify";
import { useAuth } from "./useAuth";
import type { UserLogin } from "../../types/user.types";

export default function useLoginForm() {
	//* Context
	const { login } = useAuth();

	//* States
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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

	const handleLogin = async (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();

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
