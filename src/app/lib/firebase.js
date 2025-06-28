import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4T0FQUeuzCU5kjMEYfT-3m06P1jc6SGE",
  authDomain: "travel-book-4429f.firebaseapp.com",
  projectId: "travel-book-4429f",
  storageBucket: "travel-book-4429f.firebasestorage.app",
  messagingSenderId: "316697519545",
  appId: "1:316697519545:web:c90a99a93f20aaf0188268",
  measurementId: "G-ZR21HHBBGK",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
