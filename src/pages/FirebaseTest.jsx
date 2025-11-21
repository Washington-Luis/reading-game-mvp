import { useEffect } from "react";
import { auth } from "../services/firebase";

export default function FirebaseTest() {
  useEffect(() => {
    console.log("Firebase Auth carregado:", auth);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Teste de Firebase</h1>
      <p>Abra o console do navegador (F12 → Console) e veja se aparece a mensagem.</p>
    </div>
  );
}