// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAoMwfP1IVoBUHbjcOGNkcuTdz8HNGGsuk',
  authDomain: 'remixjsportfolio.firebaseapp.com',
  projectId: 'remixjsportfolio',
  storageBucket: 'remixjsportfolio.appspot.com',
  messagingSenderId: '90496646227',
  appId: '1:90496646227:web:4db7bbb728b2fd7d5edaa6',
  measurementId: 'G-1NMXS6Y32Y',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
