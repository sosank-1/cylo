// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnOrm7pHWFjQy5hk8x8VtXTMZmAplaFlM",
  authDomain: "cylo-b89dc.firebaseapp.com",
  projectId: "cylo-b89dc",
  storageBucket: "cylo-b89dc.appspot.com", // Corrected the storage bucket URL
  messagingSenderId: "451560803879",
  appId: "1:451560803879:web:3ae36b338e7a0056294802"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
