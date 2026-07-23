let userInfo = document.querySelector("#user_info");
let userGreeting = document.querySelector("#user_info h3");
let links = document.querySelector("#links");
let showCart = document.querySelector("#cart");

let username = localStorage.getItem("fname");
let isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn === "true") {
    userGreeting.textContent = `Hello, ${username}`;
    userInfo.classList.remove("hidden");
    showCart.classList.remove("hidden");
    links.classList.add("hidden");
} else {
    userInfo.classList.add("hidden");
    showCart.classList.add("hidden");
    links.classList.remove("hidden");
}

let logoutBtn = document.querySelector("#logout");
let rememberUser = localStorage.getItem("remember");

logoutBtn.addEventListener("click", function () {

    if (rememberUser === "true") {

        localStorage.setItem("isLoggedIn", "false");

        setTimeout(() => {
            window.location = "login.html";
        }, 1500);

    } else {

        localStorage.clear();

        setTimeout(() => {
            window.location = "register.html";
        }, 1500);

    }

});