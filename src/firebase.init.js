// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4W6ouuPSvp3dSAdSydx4oy4cwHJZwPDQ",
  authDomain: "car-services-cd5e3.firebaseapp.com",
  projectId: "car-services-cd5e3",
  storageBucket: "car-services-cd5e3.appspot.com",
  messagingSenderId: "236556175208",
  appId: "1:236556175208:web:7671a1bfe877e2547538dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
