import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyAteGOD7EUOPTRsMelYBJBv3SSNX3gDBdA",
  authDomain: "kitchen-haven.firebaseapp.com",
  projectId: "kitchen-haven",
  storageBucket: "kitchen-haven.appspot.com",
  messagingSenderId: "699610320713",
  appId: "1:699610320713:web:779c8917a60c2f66425498",
  measurementId: "G-5Z92H2NSP0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const message = document.getElementById("message");

  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match!";
    message.style.color = "red";
    return;
  }


  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      message.textContent = "You've signed up successfully!";
      message.style.color = "green";
      window.location.href = "signin.html"; 
      alert("You've signed up successfully!");
    })
    .catch((error) => {
      message.textContent = error.message;
      message.style.color = "red";
    });
});
