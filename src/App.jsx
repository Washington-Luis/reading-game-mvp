import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", padding: 24 }}>
      <header style={{ marginBottom: 24 }}>
        <h1>Reading Game — MVP</h1>
        <p>Bem-vindo! Teste o input abaixo e veja a reatividade do React.</p>
      </header>

      <main>
        <label style={{ display: "block", marginBottom: 8 }}>
          Seu nome:
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"
            style={{ marginLeft: 8, padding: 6 }}
          />
        </label>

        <section style={{ marginTop: 16 }}>
          <strong>Saudação:</strong>
          <div style={{ marginTop: 8 }}>
            {name ? <span>Olá, {name}! 🚀</span> : <span>Digite seu nome acima.</span>}
          </div>
        </section>
      </main>
    </div>
  );
}
