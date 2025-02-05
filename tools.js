
let pwInputVisible = false

/**
 * Changes the icon of the password field onclick, 
 * from visible to invisible. 
 * @param {string} passwordId - id of password element
 * @param {string} passwordImg - id of password image
 */
export const togglePasswordVisibility = (pwdCl, pwdImgCl) => {
  const pwdEl = document.querySelector(`.${pwdCl}`)  // muss Klasse sein vom 
  const pwdIconEl = document.querySelector(`.${pwdImgCl}`);
  if (!pwInputVisible) {
    pwdEl.type = "text";
    pwdIconEl.src = "/assets/img/log_in/visibility.png";
    pwInputVisible = true;
  } else {
    pwdEl.type = "password";
    pwdIconEl.src = "/assets/img/log_in/lock.png";
    pwInputVisible = false;
  }
};
