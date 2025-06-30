// auth.js

import { auth, signInWithEmailAndPassword, signOut } from '../firebase.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// LOGIN FUNCTION
async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    try {
      await signInWithEmailAndPassword(auth, email, password);
      document.getElementById("dashboard").style.display = "block";
      document.getElementById("login-section").style.display = "none";
      document.getElementById("register-section").style.display = "none";  // 👈 Hide register form
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  }
  

// LOGOUT FUNCTION
async function logout() {
  await signOut(auth);
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("login-section").style.display = "block";
}

// REGISTER FUNCTION
async function register() {
  const regEmail = document.getElementById("regEmail").value;
  const regPassword = document.getElementById("regPassword").value;

  try {
    await createUserWithEmailAndPassword(auth, regEmail, regPassword);
    alert("Registration successful. You can now log in.");
  } catch (error) {
    alert("Registration failed: " + error.message);
  }
}

// MAKE FUNCTIONS ACCESSIBLE IN HTML
window.login = login;
window.logout = logout;
window.register = register;
