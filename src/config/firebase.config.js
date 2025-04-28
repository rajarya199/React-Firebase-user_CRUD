// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtM9WhXIVHOe5J70hBuCiUkFp3OcF8Cck",
  authDomain: "reactcrud-d5bd1.firebaseapp.com",
  projectId: "reactcrud-d5bd1",
  storageBucket: "reactcrud-d5bd1.firebasestorage.app",
  messagingSenderId: "686802514248",
  appId: "1:686802514248:web:b955f6a770cc105b66037d",
  measurementId: "G-NB7G36PZJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;