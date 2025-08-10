  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
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
  //submit
  const submit = document.getElementById("submit");
  submit.addEventListener("click", function(event) {
    event.preventDefault()

     //inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
   createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
       // Signed in
       const user = userCredential.user;
       console.log("User signed in:", user);
       alert("User signed in successfully");
       window.location.href = "index.html";
   })
   .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.error("Error signing in:", errorCode, errorMessage);
   });
  });
