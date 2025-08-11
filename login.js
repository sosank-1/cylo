// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup 
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Your Firebase configuration (provided by you)
const firebaseConfig = {
  apiKey: "AIzaSyAnOrm7pHWFjQy5hk8x8VtXTMZmAplaFlM",
  authDomain: "cylo-b89dc.firebaseapp.com",
  projectId: "cylo-b89dc",
  storageBucket: "cylo-b89dc.firebasestorage.app",
  messagingSenderId: "451560803879",
  appId: "1:451560803879:web:3ae36b338e7a0056294802"
};

// Initialize Firebase app & auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Switch tabs function (optional, if you want it here)
window.switchTab = function(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    event.currentTarget.classList.add('active');
};

// SIGN IN form handler
document.querySelector('#sign-in form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            alert("Login successful!");
            window.location.href = "index.html"; // redirect on success
        })
        .catch(error => {
            alert("Invalid credentials: " + error.message);
            console.error(error);
        });
});

// SIGN UP form handler
document.querySelector('#sign-up form').addEventListener('submit', (e) => {
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
        .then(userCredential => {
            // Optionally, you can update user profile with displayName (name)
            // But that needs extra code - can add if you want
            alert("Account created successfully!");
            window.location.href = "index.html";
        })
        .catch(error => {
            alert("Error creating account: " + error.message);
            console.error(error);
        });
});

// Google sign-in handler (for all buttons with class .btn-google)
document.querySelectorAll('.btn-google').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                alert("Google sign-in successful!");
                window.location.href = "index.html";
            })
            .catch(error => {
                alert("Google sign-in error: " + error.message);
                console.error(error);
            });
    });
});
