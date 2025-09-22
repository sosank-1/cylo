// firebase-config.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnOrm7pHWFjQy5hk8x8VtXTMZmAplaFlM", // Replace with your actual API Key
  authDomain: "cylo-b89dc.firebaseapp.com", // Replace with your actual Auth Domain
  projectId: "cylo-b89dc", // Replace with your actual Project ID
  storageBucket: "cylo-b89dc.appspot.com", // Replace with your actual Storage Bucket
  messagingSenderId: "451560803879", // Replace with your actual Messaging Sender ID
  appId: "1:451560803879:web:3ae36b338e7a0056294802" // Replace with your actual App ID
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
