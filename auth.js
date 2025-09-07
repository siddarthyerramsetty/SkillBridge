// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

// Monitor authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, update the navbar with the user's name or email
        const usernameDisplay = document.getElementById('username');
        usernameDisplay.textContent = user.displayName || user.email; // Display name or email if name is not set
    } else {
        // No user is signed in, redirect to the login page
        window.location.href = "login.html";
    }
});

// Handle user logout
document.getElementById('logout-btn').addEventListener('click', (event) => {
    event.preventDefault();
    signOut(auth).then(() => {
        window.location.href = "login.html"; // Redirect to login after sign out
    }).catch((error) => {
        console.error('Sign out error:', error);
    });
});
