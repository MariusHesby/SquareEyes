// Selecting all the necessary elements

const fullName = document.querySelector("#full-name");
const fullNameError = document.querySelector("#fullNameError");
const fullNameSuccess = document.querySelector(".verifyName");

const city = document.querySelector("#address-level2");
const cityError = document.querySelector("#cityError");
const citySuccess = document.querySelector(".verifyCity");

const gender = document.querySelector("#gender");
const genderError = document.querySelector("#genderError");
const genderSuccess = document.querySelector(".verifyGender");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const emailSuccess = document.querySelector(".verifyEmail");

const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const passwordSuccess = document.querySelector(".verifyPassword");

const updateButton = document.querySelector("button.cta-create");

// const message = document.querySelector(".message");

// === function validateForm ===
function validateForm(event) {
  // Prevent default form actions
  event.preventDefault();

  // Check full name
  if (checkLength2(fullName.value, 4)) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }
  // Check city
  if (checkLength2(city.value, 2)) {
    cityError.style.display = "none";
  } else {
    cityError.style.display = "block";
  }
  // Check gender
  if (checkLength2(gender.value, 3)) {
    genderError.style.display = "none";
  } else {
    genderError.style.display = "block";
  }

  // Check e-mail
  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  // Check password
  if (checkLength2(password.value, 8)) {
    passwordError.style.display = "none";
  } else {
    passwordError.style.display = "block";
  }
}
// === function validateForm END ===

// Check valid length
function checkLength2(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

fullName.addEventListener("focusout", verifyName);
city.addEventListener("focusout", verifyCity);
gender.addEventListener("focusout", verifyGender);
email.addEventListener("focusout", verifyEmail);
password.addEventListener("focusout", verifyPassword);

// VERIFY name
function verifyName(event) {
  event.preventDefault();
  if (checkLength2(fullName.value, 4)) {
    fullNameSuccess.style.background = "rgb(199, 252, 199)";
    fullNameSuccess.style.border = "1px solid green";
    fullNameError.style.display = "none";
  } else {
    fullNameSuccess.style.background = "whitesmoke";
    fullNameSuccess.style.border = "1px solid red";
    fullNameError.style.display = "block";
  }
}
// VERIFY city
function verifyCity(event) {
  event.preventDefault();
  if (checkLength2(city.value, 2)) {
    citySuccess.style.background = "rgb(199, 252, 199)";
    citySuccess.style.border = "1px solid green";
    cityError.style.display = "none";
  } else {
    citySuccess.style.background = "whitesmoke";
    citySuccess.style.border = "1px solid red";
    cityError.style.display = "block";
  }
}

// VERIFY gender
function verifyGender(event) {
  event.preventDefault();
  if (checkLength2(gender.value, 3)) {
    genderSuccess.style.background = "rgb(199, 252, 199)";
    genderSuccess.style.border = "1px solid green";
    genderError.style.display = "none";
  } else {
    genderSuccess.style.background = "whitesmoke";
    genderSuccess.style.border = "1px solid red";
    genderError.style.display = "block";
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
  if (checkLength2(password.value, 8)) {
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

updateButton.addEventListener("click", function () {
  updateButton.innerHTML = "Successfully updated!";
});

// ok.addEventListener("click", function () {
//   ok.style.border = "5px solid var(--green)";
//   rent.innerHTML = "You can now start watching";
//   rental.style.color = "var(--green)";
//   rental.innerHTML = "CONFIRMED";
//   film.setAttribute("href", "signedIn_film_sample_byAuthor_rented.html");
//   rentClose.setAttribute("href", "signedIn_film_sample_byAuthor_rented.html");
// });
