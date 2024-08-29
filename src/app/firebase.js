// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr3KCmC3_ONAnQPFDGQ4HPF0vqHIKrSF0",
  authDomain: "ccag-3fb81.firebaseapp.com",
  projectId: "ccag-3fb81",
  storageBucket: "ccag-3fb81.appspot.com",
  messagingSenderId: "154199082511",
  appId: "1:154199082511:web:18701d7b0acc9c2bbb857a",
  measurementId: "G-GK7LCEZZ3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { auth };