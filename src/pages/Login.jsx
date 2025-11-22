import { useState } from "react";
import { auth } from "../services/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function loginGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  }

  async function registerEmail() {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  }

  async function loginEmail() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Login</h1>

      <button onClick={loginGoogle}>Entrar com Google</button>

      <hr />

      <h3>Entrar com Email</h3>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <input
        type="password"
        placeholder="senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button onClick={loginEmail}>Login</button>
      <button onClick={registerEmail}>Criar Conta</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
