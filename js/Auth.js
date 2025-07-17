import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "You've logged in successfully",
    appId: "Your good to go"
    
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  document.getElementById("signupForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      message.style.color = "green";
      message.textContent = "Signup successful! Welcome, " + userCredential.user.email;
    } catch (error) {
      message.style.color = "red";
      message.textContent = "Error: " + error.message;
    }
  });