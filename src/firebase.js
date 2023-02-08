// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from  'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeBC2-nIHLPv9YTRx_HNP094SQQDL9xuk",
  authDomain: "authentication-f5dea.firebaseapp.com",
  projectId: "authentication-f5dea",
  storageBucket: "authentication-f5dea.appspot.com",
  messagingSenderId: "950180749398",
  appId: "1:950180749398:web:c99716fc20b17215295bf7",
  measurementId: "G-EZDGKWW0D4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
 export {app,auth}