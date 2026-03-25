import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { authentication } from "../firebase/config";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(authentication, email, password);
    } catch {
      alert("Ha ocurrido un error");
    }
  };

  return (
    <>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </>
  );
};
