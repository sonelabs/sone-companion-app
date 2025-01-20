import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
    AUTH_FIREBASE_API_KEY,
    AUTH_FIREBASE_AUTH_DOMAIN,
    AUTH_FIREBASE_PROJECT_ID,
    AUTH_FIREBASE_STORAGE_BUCKET,
    AUTH_FIREBASE_MESSAGING_SENDER_ID,
    AUTH_FIREBASE_APP_ID,
  } from '@env';
  
  const authFirebaseConfig = {
    apiKey: AUTH_FIREBASE_API_KEY,
    authDomain: AUTH_FIREBASE_AUTH_DOMAIN,
    projectId: AUTH_FIREBASE_PROJECT_ID,
    storageBucket: AUTH_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: AUTH_FIREBASE_MESSAGING_SENDER_ID,
    appId: AUTH_FIREBASE_APP_ID,
  };
  

// Initialize Firebase
export const FIREBASE_APP = initializeApp(authFirebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
