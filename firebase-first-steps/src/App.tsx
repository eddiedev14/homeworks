import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";

export const App = () => {
  return (
    <>
      <h1>Firebase Practicas</h1>
      <RegisterForm />
      <hr />
      <LoginForm />
    </>
  );
};
