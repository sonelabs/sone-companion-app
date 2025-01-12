// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsq6s9HBQ1feV5qG9h3RVEYuk3bBLG550",
  authDomain: "sone-c0852.firebaseapp.com",
  projectId: "sone-c0852",
  storageBucket: "sone-c0852.firebasestorage.app",
  messagingSenderId: "897264954405",
  appId: "1:897264954405:web:d3ef57604cc530d885a3cc",
  measurementId: "G-5F29NPGBH0"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);