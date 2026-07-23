const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const registerBtn = document.querySelector("#signup");

const fnameValidation = document.querySelector(".fnameDiv .validation");
const lnameValidation = document.querySelector(".lnameDiv .validation");
const emailValidation = document.querySelector(".emailDiv .validation");
const passValidation = document.querySelector(".passDiv .validation");


registerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const firstName = fname.value.trim();
    const lastName = lname.value.trim();
    const userEmail = email.value.trim();
    const userPassword = password.value.trim();
    let valid = true;
    if (firstName === "" || fname.value.length < 3) {
        fnameValidation.classList.remove("hidden");
        valid = false;
    }
    else {
        fnameValidation.classList.add("hidden");
    }
    if (lastName === "" || lname.value.length < 3) {
        lnameValidation.classList.remove("hidden");
        valid = false;
    }
    else {
        lnameValidation.classList.add("hidden");
    }
    if (userEmail === "" || !(email.value.includes('@')) || !(email.value.includes('.'))) {
        emailValidation.classList.remove("hidden");
        valid = false;
    }
    else {
        emailValidation.classList.add("hidden");
    }
    if (userPassword === "" || password.value.length < 8) {
        passValidation.classList.remove("hidden");
        valid = false;
    }
    else {
        passValidation.classList.add("hidden");
    }
    if (valid) {
        localStorage.setItem("fname", firstName);
        localStorage.setItem("lname", lastName);
        localStorage.setItem("email", userEmail);
        localStorage.setItem("password", userPassword);
        localStorage.setItem("isLoggedIn", "false");
        setTimeout(() => {
            window.location = "login.html";
        }, 1500)
    }
});

