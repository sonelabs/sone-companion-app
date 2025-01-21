import { initializeApp } from "@react-native-firebase/app";
import {
    MSG_FIREBASE_API_KEY,
    MSG_FIREBASE_AUTH_DOMAIN,
    MSG_FIREBASE_PROJECT_ID,
    MSG_FIREBASE_STORAGE_BUCKET,
    MSG_FIREBASE_MESSAGING_SENDER_ID,
    MSG_FIREBASE_APP_ID,
  } from '@env';
  
  const messagingFirebaseConfig = {
    apiKey: MSG_FIREBASE_API_KEY,
    authDomain: MSG_FIREBASE_AUTH_DOMAIN,
    projectId: MSG_FIREBASE_PROJECT_ID,
    storageBucket: MSG_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: MSG_FIREBASE_MESSAGING_SENDER_ID,
    appId: MSG_FIREBASE_APP_ID,
  };
  export const FIREBASE_APP = initializeApp(messagingFirebaseConfig);