import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { 
  getAuth, 
  onAuthStateChanged,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";


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

const blockerOverlay = document.getElementById('blocker-overlay');
const authModal = document.getElementById('auth-modal');

onAuthStateChanged(auth, (user) => {
  if (!user) {
    document.body.classList.add('unauthenticated');
    blockerOverlay.style.display = 'block';
    authModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  } else {
    document.body.classList.remove('unauthenticated');
    blockerOverlay.style.display = 'none';
    authModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

document.getElementById('close-modal')?.addEventListener('click', () => {
  if (auth.currentUser) {
    authModal.style.display = 'none';
    blockerOverlay.style.display = 'none';
  } else {
    alert("Please sign in first!");
  }
});

blockerOverlay?.addEventListener('click', (e) => {
  e.stopPropagation();
  authModal.style.display = 'flex'; 
});

document.addEventListener('keydown', (e) => {
  if (!auth.currentUser && 
      (e.key === 'Tab' || e.key === 'Enter' || e.key === ' ')) { // Fixed 'Space' to ' '
    e.preventDefault();
    authModal.style.display = 'flex';
  }
});


if (!window.location.pathname.includes('signup.html') && 
    !window.location.pathname.includes('signin.html')) {
  onAuthStateChanged(auth, (user) => {
    if (!user) window.location.href = '/signin.html';
  });
}