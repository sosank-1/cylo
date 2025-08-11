// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup 
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// =======================
// Firebase Configuration
// =======================
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

// Redirect page after login/signup
const REDIRECT_PAGE = "index.html";

// =======================
// SIGN IN Handler
// =======================
const signInForm = document.querySelector('#sign-in form');
if (signInForm) {
    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById("email")?.value.trim();
        const password = document.getElementById("password")?.value;

        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("Login successful!");
                console.log("Signed in:", userCredential.user);
                window.location.href = REDIRECT_PAGE;
            })
            .catch((error) => {
                console.error(error);
                alert("Login failed: " + error.message);
            });
    });
}

// =======================
// SIGN UP Handler
// =======================
const signUpForm = document.querySelector('#sign-up form');
if (signUpForm) {
    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById("name")?.value.trim();
        const email = document.getElementById("new-email")?.value.trim();
        const password = document.getElementById("new-password")?.value;
        const confirmPassword = document.getElementById("confirm-password")?.value;

        if (!name || !email || !password || !confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("Account created successfully!");
                console.log("Account created:", userCredential.user);
                window.location.href = REDIRECT_PAGE;
            })
            .catch((error) => {
                console.error(error);
                alert("Sign-up failed: " + error.message);
            });
    });
}

// =======================
// GOOGLE Sign-in Handler
// =======================
document.querySelectorAll('.btn-google').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                alert("Google sign-in successful!");
                console.log("Google user:", result.user);
                window.location.href = REDIRECT_PAGE;
            })
            .catch((error) => {
                console.error(error);
                alert("Google sign-in error: " + error.message);
            });
    });
});
