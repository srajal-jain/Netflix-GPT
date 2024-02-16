// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjqnKOIC8RHAxD4_fLYE82Ne47PvuHT_Q",
  authDomain: "netflixgpt-44266.firebaseapp.com",
  projectId: "netflixgpt-44266",
  storageBucket: "netflixgpt-44266.appspot.com",
  messagingSenderId: "863640955770",
  appId: "1:863640955770:web:5d716d6986c9db3e2d84c3",
  measurementId: "G-9YR0SY27P8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
