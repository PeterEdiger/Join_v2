import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

import { togglePasswordVisibility } from "../tools.js";


// Replaces body onload
const logInInit = () => {
  // Ihr ursprünglicher init code
};

document.addEventListener('DOMContentLoaded', logInInit);
// Replaces body onload


// ------------------------- DOM REFERENCES -------------------------
const pwdInputEl = document.querySelector(`.icon-pwd`)


// ------------------------- Event Listeners -------------------------

pwdInputEl.addEventListener("click",()=> togglePasswordVisibility("password", "icon-pwd"))
