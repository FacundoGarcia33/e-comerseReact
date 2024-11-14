import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXrs-xEKIUZ-UPPgfNjfmj6RXz0AeZ_mA",
  authDomain: "ecomerse-react-1.firebaseapp.com",
  projectId: "ecomerse-react-1",
  storageBucket: "ecomerse-react-1.appspot.com", // Cambié el storage bucket
  messagingSenderId: "902998369136",
  appId: "1:902998369136:web:eae61550b4523bba39a5b5"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore con la instancia de Firebase
const db = getFirestore(app);

export default db;
