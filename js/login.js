import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";




/**
 * Toggles pwd visibilty when clicking the icon in the input field. 
 */
function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  const imgPwd = document.querySelector(`.img-pwd`)
  
  if (!isVisible) {
    passwordInput.type = "text";
    imgPwd.src = "/assets/img/log_in/visibility.png";
    isVisible = true;
  } else {
    passwordInput.type = "password";
    imgPwd.src = "/assets/img/log_in/lock.png"; 
    isVisible = false;
  }
}



// ------------------------- DOM REFERENCES -------------------------