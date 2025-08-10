// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup 
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnOrm7pHWFjQy5hk8x8VtXTMZmAplaFlM",
    authDomain: "cylo-b89dc.firebaseapp.com",
    projectId: "cylo-b89dc",
    storageBucket: "cylo-b89dc.firebasestorage.app",
    messagingSenderId: "451560803879",
    appId: "1:451560803879:web:3ae36b338e7a0056294802"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// SIGN IN form handler
document.querySelector('#sign-in form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Signed in:", userCredential.user);
            alert("Login successful!");
            window.location.href = "index.html"; // redirect after login
        })
        .catch((error) => {
            alert("Error: " + error.message);
            console.error(error);
        });
});

// SIGN UP form handler
document.querySelector('#sign-up form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("new-email").value.trim();
    const password = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Account created:", userCredential.user);
            alert("Account created successfully!");
            window.location.href = "index.html";
        })
        .catch((error) => {
            alert("Error: " + error.message);
            console.error(error);
        });
});

// GOOGLE login handler for all Google buttons
document.querySelectorAll('.btn-google').forEach((btn) => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log("Google user:", result.user);
                alert("Google sign-in successful!");
                window.location.href = "index.html";
            })
            .catch((error) => {
                alert("Google sign-in error: " + error.message);
                console.error(error);
            });
    });
});
