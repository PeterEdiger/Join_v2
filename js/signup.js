import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { togglePasswordVisibility } from "../tools.js";



// ------------------------- Dom References -------------------------
const imgPwLock = document.querySelector(`.img--pw-lock`)


// ------------------------- Event Listeners -------------------------
imgPwLock.addEventListener("click", () => {togglePasswordVisibility('password', 'img--pw-lock')} )

/**
 * Takes a string and takes and isolates the first letters. 
 * Creating initials.
 * @param {String} nameString 
 * @returns {String} 
 */
function getInitials(nameString) {
  let initials = "";
  let trimmedString = nameString.trim();
  let splittedNameLastName = trimmedString.split(" ");
  for (let j = 0; j < splittedNameLastName.length; j++) {
    let name = splittedNameLastName[j];
    initials += name[0].toUpperCase();
  }
  return initials;
}


function clearFields(name, email, password, passwordRepeat) {
  name.value = "";
  email.value = "";
  password.value = "";
}




/**
 *Notifies the user about a successful sign up. 
 */
function signUpSuccessNotice() {
  document.getElementById(`sign-up-success`).style.display = "flex";
  setTimeout(() => {
    document.getElementById(`sign-up-success`).style.display = "none";
  }, 1300 );
}


/**
 * Puts a transparent grey ovelay over the window. 
 */
function greyOverlay() {
  document.querySelector(`.grey-overlay`).classList.remove("display-none");
}


/**
 * Handles the animation and the transition to login.html after a successful sign up.
 */
function transitionHandler() {
  signUpSuccessNotice();
  greyOverlay();
  setTimeout(() => { window.location.href = "./logIn.html"; }, 2000);
}


function removeLogInAnimation() {
  document.querySelector(`.join-logo-animation`).classList.remove("join-logo-animation");
}


/**
 * Validates the password and the password repeat. 
 */
function pwCheck() {
  console.log("change recognized");
  if (pwInput.value != pwInputRepeat.value) {
    pwInput.setCustomValidity('Password Must be Matching.');
  } else {
    pwInput.setCustomValidity('');
  }
}



