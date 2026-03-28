import LoginIllustration from "/login.png";
import { PageLink } from "./PageLink";

export const Hero = () => {
  return (
    <header className="grid grid-cols-2 min-h-screen items-center px-16">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold text-gray-900">
          Taskie (Challenge 07)
        </h1>
        <p className="text-xl text-gray-600">
          Eddie Santiago Delgado Campo - EDYA2
        </p>
        <p className="text-gray-700 max-w-xl">
          Registra e inicia sesión en nuestro software para controlar desde un
          solo lugar todas tus tareas y pendientes de forma práctica y sencilla
        </p>
        <div className="flex gap-4">
          <PageLink path="/register" text="¡Regístrate!" />
          <PageLink path="/login" text="¡Inicia Sesión!" bordered />
        </div>
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
