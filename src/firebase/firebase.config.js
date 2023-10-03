// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZVPiVgOlIYUuuX2qbBz1e4hSnAsCGk_k",
  authDomain: "react-dragon-news-auth-52ef2.firebaseapp.com",
  projectId: "react-dragon-news-auth-52ef2",
  storageBucket: "react-dragon-news-auth-52ef2.appspot.com",
  messagingSenderId: "6487628376",
  appId: "1:6487628376:web:0e2768aa2320d7b467482d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

