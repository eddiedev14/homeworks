import ProfilePicture from "/profile-picture.png";
import useLoginForm from "../../hooks/shared/useLoginForm";

export const LoginForm = () => {
  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
  } = useLoginForm();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <section className="flex flex-col items-center gap-2 max-w-lg border border-gray-300 rounded-xl p-6">
        <img
          src={ProfilePicture}
          alt="Profile Picture"
          className="object-cover size-32"
        />
        <h1 className="text-2xl font-bold">Login</h1>
        <p className="font-light text-sm">
          Inicia Sesión para practicar con los challenges
        </p>

        <form
          className="w-full mt-2 flex flex-col gap-2 *:flex *:flex-col *:gap-1"
          onSubmit={handleLogin}
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

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="p-2 font-light border border-gray-300 shadow-sm rounded"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button
            type="submit"
            className="mt-2 py-2 bg-transparent border rounded-sm font-semibold cursor-pointer transition-colors duration-300 hover:bg-black hover:text-white focus:bg-black focus:text-white"
          >
            Iniciar Sesión
          </button>
        </form>
      </section>
    </div>
  );
};
