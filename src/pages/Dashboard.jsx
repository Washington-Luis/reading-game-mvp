import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div style={{ padding: 20 }}>
      <h1>Bem-vindo, {user?.email || user?.displayName}!</h1>

      <button onClick={logout}>Sair</button>
    </div>
  );
}
