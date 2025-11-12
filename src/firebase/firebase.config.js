import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4M1Oml7UuIVfTPdoSTlQIMTc9ZwHxnyM",
  authDomain: "personal-finance-app-ec977.firebaseapp.com",
  projectId: "personal-finance-app-ec977",
  storageBucket: "personal-finance-app-ec977.firebasestorage.app",
  messagingSenderId: "257994948230",
  appId: "1:257994948230:web:17303f6cce236510a81b07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);