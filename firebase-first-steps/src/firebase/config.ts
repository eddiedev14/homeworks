// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "my-first-project-a6f6d.firebaseapp.com",
  projectId: "my-first-project-a6f6d",
  storageBucket: "my-first-project-a6f6d.firebasestorage.app",
  messagingSenderId: "196855222466",
  appId: "1:196855222466:web:695b77a6fef1a803266b5b",
  measurementId: "G-LXSWTRPMGV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const analytics = getAnalytics(app);
