import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyAteGOD7EUOPTRsMelYBJBv3SSNX3gDBdA",
  authDomain: "kitchen-haven.firebaseapp.com",
  projectId: "kitchen-haven",
  storageBucket: "kitchen-haven.appspot.com",
  messagingSenderId: "699610320713",
  appId: "1:699610320713:web:779c8917a60c2f66425498",
  measurementId: "G-5Z92H2NSP0"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signin-form");

  if (!form) {
    console.error("Form with ID 'signin-form' not found.");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Sign-in successful!");
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  });
});


