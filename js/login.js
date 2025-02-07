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
const BtnGuestLoginEl = document.querySelector(`.btn-guest-login`)

const guestLogIn =  ()=> {
  console.log("Guest log in button rocks");
}


// ------------------------- Event Listeners -------------------------
pwdInputEl.addEventListener("click",()=> togglePasswordVisibility("password", "icon-pwd"))
BtnGuestLoginEl.addEventListener("click", guestLogIn)















