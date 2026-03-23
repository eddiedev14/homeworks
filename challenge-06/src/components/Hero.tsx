import LoginIllustration from "/login.png";
import { PageLink } from "./PageLink";

export const Hero = () => {
  return (
    <header className="grid grid-cols-2 min-h-screen items-center px-16">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold text-gray-900">Challenge 06</h1>
        <p className="text-xl text-gray-600">
          Eddie Santiago Delgado Campo - EDYA2
        </p>
        <p className="text-gray-700 max-w-xl">
          Inicia sesión y practica estructuras de datos en un sistema real con
          acceso privado, manejo de sesión y simulación de colas, listas y más.
        </p>
        <PageLink path="/login" text="Iniciar sesión" />
      </div>

      <div className="flex justify-center">
        <img
          src={LoginIllustration}
          alt="Login Illustration"
          className="w-lg max-w-full"
        />
      </div>
    </header>
  );
};
