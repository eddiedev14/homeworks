import { FirebaseError } from "firebase/app";

export const getAuthErrorMessage = (error: unknown): string => {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case "auth/email-already-in-use":
        return "El correo ya está en uso";

      case "auth/invalid-email":
        return "El correo no es válido";

      case "auth/weak-password":
        return "La contraseña debe tener al menos 6 caracteres";

      case "auth/user-not-found":
        return "Usuario no encontrado";

      case "auth/wrong-password":
        return "Contraseña incorrecta";

      default:
        return "Error de autenticación";
    }
  }

  return "Error inesperado";
};
