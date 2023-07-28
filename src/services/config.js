import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "coderhousefirebase-52441.firebaseapp.com",
  projectId: "coderhousefirebase-52441",
  storageBucket: "coderhousefirebase-52441.appspot.com",
  messagingSenderId: "338129639882",
  appId: "1:338129639882:web:fed6f77248771956ed1733"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);