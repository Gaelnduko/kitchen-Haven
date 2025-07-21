import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";


const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    message.style.color = "green";
    message.textContent = `Signup successful! Welcome, ${user.email}`;
    alert("You've signed up successfully!");
  } catch (error) {
    message.style.color = "red";
    message.textContent = `Error: ${error.message}`;
  }
});
