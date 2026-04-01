import ProfilePicture from "/profile-picture.png";
import { Button } from "../shared/Button";
import { PageLink } from "../shared/PageLink";
import useAuthForm from "../../hooks/auth/useAuthForm";

interface Props {
  type: "login" | "register";
}

export const AuthForm = ({ type }: Props) => {
  const {
    email,
    username,
    password,
    handleEmailChange,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
  } = useAuthForm(type);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <section className="flex flex-col items-center gap-2 max-w-lg border border-gray-300 rounded-xl p-6">
        <img
          src={ProfilePicture}
          alt="Profile Picture"
          className="object-cover size-32"
        />
        <h1 className="text-2xl font-bold">
          {type === "login" ? "Iniciar sesión" : "Registrarse"}
        </h1>
        <p className="font-light text-sm text-center">
          {type === "login"
            ? "¡Bienvenido de nuevo! Por favor, ingresa tus credenciales para iniciar sesión."
            : "¡Únete a nuestra comunidad! Completa el formulario para crear tu cuenta."}
        </p>

        <form
          className="w-full mt-2 flex flex-col gap-2 *:flex *:flex-col *:gap-1"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-2 font-light border border-gray-300 shadow rounded"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          {type === "register" && (
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="p-2 font-light border border-gray-300 shadow rounded"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
          )}

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="p-2 font-light border border-gray-300 shadow-sm rounded mb-2"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <Button type="submit" text="Registrarse" variant="primary" />
          <span className="text-sm text-gray-800 text-center">
            {type === "login"
              ? "¿No tienes una cuenta? "
              : "¿Ya tienes una cuenta? "}

            {type === "login" ? (
              <PageLink path="/register" text="Regístrate" inline />
            ) : (
              <PageLink path="/login" text="Inicia sesión" inline />
            )}
          </span>
        </form>
      </section>
    </div>
  );
};
