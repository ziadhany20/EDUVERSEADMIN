// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk-pXtu15HD1O64ZKSRTQUN2AkLsE6FTA",
  authDomain: "edu-verse-21096.firebaseapp.com",
  projectId: "edu-verse-21096",
  storageBucket: "edu-verse-21096.appspot.com",
  messagingSenderId: "419491306185",
  appId: "1:419491306185:web:936e900bb868c6449d0b18",
  measurementId: "G-PNQMJY9LKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };