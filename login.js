<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cylo | Login</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet">
    <style>
        /* --- SAME STYLES FROM YOUR ORIGINAL --- */
        body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            font-weight: 400;
            color: #1a1a1a;
            background-color: white;
        }
        .container { max-width: 500px; margin: 60px auto; padding: 0 20px; }
        .logo { text-align: center; margin-bottom: 30px; }
        .logo h1 { font-family: 'Montserrat', sans-serif; font-size: 24px; font-weight: 700; letter-spacing: 4px; color: #1a1a1a; margin-bottom: 10px; text-transform: uppercase; }
        .login-card { background-color: white; padding: 40px; border: 1px solid #eee; }
        .tabs { display: flex; margin-bottom: 30px; }
        .tab { flex: 1; text-align: center; padding: 15px 0; cursor: pointer; border-bottom: 1px solid #eee; font-size: 14px; }
        .tab.active { border-bottom: 1px solid #1a1a1a; }
        .tab-content { display: none; }
        .tab-content.active { display: block; }
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; margin-bottom: 8px; font-size: 13px; }
        .form-group input { width: 100%; padding: 10px 0; border: none; border-bottom: 1px solid #eee; font-size: 14px; }
        .form-group input:focus { border-bottom: 1px solid #1a1a1a; outline: none; }
        .btn { width: 100%; padding: 10px 0; background-color: white; border: 1px solid #1a1a1a; font-size: 14px; cursor: pointer; margin-bottom: 10px; }
        .btn:hover { background-color: #1a1a1a; color: white; }
        .btn.btn-google { display: flex; align-items: center; justify-content: center; }
        .btn.btn-google img { width: 20px; height: 20px; margin-right: 10px; }
        .divider { display: flex; align-items: center; margin: 25px 0; font-size: 12px; }
        .divider::before, .divider::after { content: ''; flex: 1; border-bottom: 1px solid #eee; }
        .divider::before { margin-right: 10px; }
        .divider::after { margin-left: 10px; }
        @media (max-width: 480px) { .container { margin: 30px auto; } .login-card { padding: 30px 20px; } }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <h1>CYLO</h1>
        </div>
        <div class="login-card">
            <div class="tabs">
                <div class="tab active" onclick="switchTab('sign-in', event)">SIGN IN</div>
                <div class="tab" onclick="switchTab('sign-up', event)">CREATE ACCOUNT</div>
            </div>
            <div class="tab-content active" id="sign-in">
                <form id="signin-form">
                    <div class="form-group">
                        <label for="email">EMAIL</label>
                        <input type="email" id="email" required>
                    </div>
                    <div class="form-group">
                        <label for="password">PASSWORD</label>
                        <input type="password" id="password" required>
                    </div>
                    <button type="submit" class="btn">SIGN IN</button>
                </form>
                <div class="divider">OR</div>
                <button class="btn btn-google" id="google-signin">
                    <img src="google.png" alt="Google logo" /> SIGN IN WITH GOOGLE
                </button>
            </div>
            <div class="tab-content" id="sign-up">
                <form id="signup-form">
                    <div class="form-group">
                        <label for="name">FULL NAME</label>
                        <input type="text" id="name" required>
                    </div>
                    <div class="form-group">
                        <label for="new-email">EMAIL</label>
                        <input type="email" id="new-email" required>
                    </div>
                    <div class="form-group">
                        <label for="new-password">PASSWORD</label>
                        <input type="password" id="new-password" required>
                    </div>
                    <div class="form-group">
                        <label for="confirm-password">CONFIRM PASSWORD</label>
                        <input type="password" id="confirm-password" required>
                    </div>
                    <button type="submit" class="btn">CREATE ACCOUNT</button>
                </form>
                <div class="divider">OR</div>
                <button class="btn btn-google" id="google-signup">
                    <img src="google.png" alt="Google logo" /> SIGN UP WITH GOOGLE
                </button>
            </div>
        </div>
    </div>

    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
        import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } 
            from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

        const firebaseConfig = {
            apiKey: "AIzaSyAnOrm7pHWFjQy5hk8x8VtXTMZmAplaFlM",
            authDomain: "cylo-b89dc.firebaseapp.com",
            projectId: "cylo-b89dc",
            storageBucket: "cylo-b89dc.firebasestorage.app",
            messagingSenderId: "451560803879",
            appId: "1:451560803879:web:3ae36b338e7a0056294802"
        };

        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();

        // Tab switch function
        window.switchTab = function(tabId, event) {
            document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
            event.currentTarget.classList.add('active');
        };

        // Sign In
        document.getElementById('signin-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            try {
                await signInWithEmailAndPassword(auth, email, password);
                alert("Signed in successfully");
                window.location.href = "index.html";
            } catch (err) {
                alert(err.message);
            }
        });

        // Sign Up
        document.getElementById('signup-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('new-email').value;
            const password = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                alert("Account created successfully");
                window.location.href = "index.html";
            } catch (err) {
                alert(err.message);
            }
        });

        // Google Sign In
        document.getElementById('google-signin').addEventListener('click', async () => {
            try {
                await signInWithPopup(auth, provider);
                alert("Google Sign-In successful");
                window.location.href = "index.html";
            } catch (err) {
                alert(err.message);
            }
        });

        // Google Sign Up (same as sign in for Google)
        document.getElementById('google-signup').addEventListener('click', async () => {
            try {
                await signInWithPopup(auth, provider);
                alert("Google Sign-Up successful");
                window.location.href = "index.html";
            } catch (err) {
                alert(err.message);
            }
        });
    </script>
</body>
</html>
