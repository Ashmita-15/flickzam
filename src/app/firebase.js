// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDr3KCmC3_ONAnQPFDGQ4HPF0vqHIKrSF0',
  authDomain: 'ccag-3fb81.firebaseapp.com',
  projectId: 'ccag-3fb81',
  storageBucket: 'ccag-3fb81.appspot.com',
  messagingSenderId: '154199082511',
  appId: '1:154199082511:web:18701d7b0acc9c2bbb857a',
  measurementId: 'G-GK7LCEZZ3N'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

let analytics;

if (typeof window !== 'undefined') {
  // Check if Analytics is supported in the current environment
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { auth, analytics };
