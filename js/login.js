let inEmail = document.querySelector("#email");
let inPassword = document.querySelector("#password");

let email = localStorage.getItem("email");
let password = localStorage.getItem("password");

let loginBtn = document.querySelector("#login");

let emailValidation = document.querySelector(".emailDiv .validation");
let passValidation = document.querySelector(".passDiv .validation");



function goToRegister() {
    console.log("goToRegister called");

    if (email === null || password === null) {
            window.location = "register.html";
    }
    else{
        return
    }
}




function rememberMe() {

    let check = document.querySelector("#check");

    if (check.checked) {
        localStorage.setItem("remember", "true");
    } else {
        localStorage.setItem("remember", "false");
    }
}


loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    goToRegister();
    let enteredEmail = inEmail.value.trim();
    let enteredPassword = inPassword.value.trim();
    let valid = true;
    if (!(inEmail.value.includes('@')) || !(inEmail.value.includes('.')) || (enteredEmail !== email)) {
        emailValidation.classList.remove("hidden");
        valid = false;
    }
    else {
        emailValidation.classList.add("hidden");
    }
    if (enteredPassword === "" || inPassword.value.length < 8 || (enteredPassword !== password)) {
        passValidation.classList.remove("hidden");
        valid = false;
    }
    else {
        passValidation.classList.add("hidden");
    }
    if (valid) {
        rememberMe();
        localStorage.setItem("isLoggedIn", "true");
        setTimeout(() => {
            window.location = "index.html";
        }, 1500)
    }
});

