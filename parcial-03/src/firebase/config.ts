// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD9EqclNgqgeB343FTYP9zdELANniXB2k",
  authDomain: "challenge-07-9f3bf.firebaseapp.com",
  projectId: "challenge-07-9f3bf",
  storageBucket: "challenge-07-9f3bf.firebasestorage.app",
  messagingSenderId: "884856095663",
  appId: "1:884856095663:web:92a30866830f79a054655a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firebaseStorage = getStorage(app);
const db = getFirestore();

export { app, auth, firebaseStorage, db };