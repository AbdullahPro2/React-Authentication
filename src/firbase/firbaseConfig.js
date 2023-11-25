import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrWdDtREwGZBHXhPNnDOQmwQ9d-wkjgdo",
  authDomain: "react-authentication-e36ec.firebaseapp.com",
  projectId: "react-authentication-e36ec",
  storageBucket: "react-authentication-e36ec.appspot.com",
  messagingSenderId: "74144765658",
  appId: "1:74144765658:web:564556feb3b9889ab1b7e3",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
