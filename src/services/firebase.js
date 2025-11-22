import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCf_DMxJS3GgBQP1yD7v-iU2_qltv009BU",
  authDomain: "reading-game-mvp.firebaseapp.com",
  projectId: "reading-game-mvp",
  storageBucket: "reading-game-mvp.firebasestorage.app",
  messagingSenderId: "867269823202",
  appId: "1:867269823202:web:9eca353ee1aed26c11acbb"
};

// Inicializa o app Firebase
export const app = initializeApp(firebaseConfig);

// Exporta serviços que vamos usar no MVP
export const auth = getAuth(app);
export const db = getFirestore(app);