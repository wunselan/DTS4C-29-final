
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi-tDq5YvZZecqwt8-Ms5Rt5W137kieMg",
  authDomain: "wpnews-4b6ac.firebaseapp.com",
  projectId: "wpnews-4b6ac",
  storageBucket: "wpnews-4b6ac.appspot.com",
  messagingSenderId: "1038138281479",
  appId: "1:1038138281479:web:8dc1d166c0f211c81e64a2",
  measurementId: "G-8VJQR9HF3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);