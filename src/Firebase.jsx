// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCP7932cBCAAVW0SIf3t3H8vh2MKVC1x0",
  authDomain: "project-sintak-zafirah.firebaseapp.com",
  projectId: "project-sintak-zafirah",
  storageBucket: "project-sintak-zafirah.firebasestorage.app",
  messagingSenderId: "327466655688",
  appId: "1:327466655688:web:65688f5d0b8809dda7aafd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db };
