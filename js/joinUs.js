// Selecting all the necessary elements
const form = document.querySelector("#contactForm");

const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const fullNameSuccess = document.querySelector(".form-group .verifyName");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const emailSuccess = document.querySelector(".form-group .verifyMail");

const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const passwordSuccess = document.querySelector(".form-group .verifyPassword");

const message = document.querySelector(".message");

// === function validateForm ===
function validateForm(event) {
  // Prevent default form actions
  event.preventDefault();

  // Check full name
  if (checkLength(fullName.value, 2)) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  // Check e-mail
  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  // Check password
  if (checkLength(password.value, 8)) {
    passwordError.style.display = "none";
  } else {
    passwordError.style.display = "block";
  }
}
// === function validateForm END ===

// Check valid length
function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

fullName.addEventListener("focusout", verifyName);
email.addEventListener("focusout", verifyEmail);
password.addEventListener("focusout", verifyPassword);

// VERIFY name
function verifyName(event) {
  event.preventDefault();
  if (checkLength(fullName.value, 5)) {
    fullNameSuccess.style.background = "rgb(199, 252, 199)";
    fullNameSuccess.style.border = "1px solid green";
    fullNameError.style.display = "none";
  } else {
    fullNameSuccess.style.background = "whitesmoke";
    fullNameSuccess.style.border = "1px solid red";
    fullNameError.style.display = "block";
  }
}

// VERIFY e-mail
function verifyEmail(event) {
  event.preventDefault();
  if (validateEmail(email.value)) {
    emailSuccess.style.background = "rgb(199, 252, 199)";
    emailSuccess.style.border = "1px solid green";
    emailError.style.display = "none";
  } else {
    emailSuccess.style.background = "whitesmoke";
    emailSuccess.style.border = "1px solid red";
    emailError.style.display = "block";
  }
}

// VERIFY password
function verifyPassword(event) {
  event.preventDefault();
  if (checkLength(password.value, 8)) {
    passwordSuccess.style.background = "rgb(199, 252, 199)";
    passwordSuccess.style.border = "1px solid green";
    passwordError.style.display = "none";
  } else {
    passwordSuccess.style.background = "whitesmoke";
    passwordSuccess.style.border = "1px solid red";
    passwordError.style.display = "block";
  }
}

// Validate e-mail
function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

// Confirm that form has been sent
function submitForm(event) {
  event.preventDefault();
  if (checkLength(fullName.value, 0) && validateEmail(email.value) && checkLength(password.value, 7)) {
    window.location.href = "signedIn_congratulations.html";
  }
}

form.addEventListener("submit", submitForm);
