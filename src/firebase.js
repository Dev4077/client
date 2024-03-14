import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATLmQQetE5MB23cJBKZ--hp29MX0ScyPs",
  authDomain: "videoplayer-9b374.firebaseapp.com",
  projectId: "videoplayer-9b374",
  storageBucket: "videoplayer-9b374.appspot.com",
  messagingSenderId: "643571277995",
  appId: "1:643571277995:web:12d11441626dcaaf4317ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app