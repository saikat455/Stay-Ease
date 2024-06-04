
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdANW35YH8Eogh3O3SlFXD0Mz6YcKEbcQ",
  authDomain: "stay-ease-45232.firebaseapp.com",
  projectId: "stay-ease-45232",
  storageBucket: "stay-ease-45232.appspot.com",
  messagingSenderId: "430745323137",
  appId: "1:430745323137:web:38b77b2c36f9d3b5a22f80"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };