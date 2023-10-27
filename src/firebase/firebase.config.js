// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvF_dUVDZl5KOHvb6uUYiW-MKgnpGG95I",
  authDomain: "car-doctor-1edee.firebaseapp.com",
  projectId: "car-doctor-1edee",
  storageBucket: "car-doctor-1edee.appspot.com",
  messagingSenderId: "443070478516",
  appId: "1:443070478516:web:f846f95a9a94290824ffe1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;