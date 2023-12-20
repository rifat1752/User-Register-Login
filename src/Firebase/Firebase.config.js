// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt5O9UZtxLnLJdzuaapsZPrc7qf4Et2u4",
  authDomain: "user-email-password-auth-fire.firebaseapp.com",
  projectId: "user-email-password-auth-fire",
  storageBucket: "user-email-password-auth-fire.appspot.com",
  messagingSenderId: "752222012714",
  appId: "1:752222012714:web:1aed60152606df1c994a53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;