import { Link } from "react-router-dom";
import LoginIllustration from "../../public/login.png";

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

        <Link
          to="/login"
          className="inline-block text-lg bg-black text-white px-6 py-3 rounded-xl shadow-md hover:bg-yellow-600 transition"
        >
          Iniciar sesión
        </Link>
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
