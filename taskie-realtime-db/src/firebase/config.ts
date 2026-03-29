// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD9EqclNgqgeB343FTYP9zdELANniXB2k",
  authDomain: "challenge-07-9f3bf.firebaseapp.com",
  databaseURL: "https://challenge-07-9f3bf-default-rtdb.firebaseio.com/",
  projectId: "challenge-07-9f3bf",
  storageBucket: "challenge-07-9f3bf.firebasestorage.app",
  messagingSenderId: "884856095663",
  appId: "1:884856095663:web:92a30866830f79a054655a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db };
