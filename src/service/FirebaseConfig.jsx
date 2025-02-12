/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMpDMCjZHwdQQL7XQ1zqLprBz4ZqvJs6s",
  authDomain: "journey-a4ca0.firebaseapp.com",
  projectId: "journey-a4ca0",
  storageBucket: "journey-a4ca0.firebasestorage.app",
  messagingSenderId: "589104640344",
  appId: "1:589104640344:web:7c8ce8c547120ab344b52d",
  measurementId: "G-YCP0E6CYPE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
