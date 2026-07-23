if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location = "login.html";
}

const cartProductDiv = document.querySelector("#cart_product");

const favProductDiv = document.querySelector("#favorite_products");

let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];

let favorite = JSON.parse(localStorage.getItem("favorite")) || [];

console.log(cartProducts);

let totalPrice = document.querySelector("#total_price");


function calcTotalPrice() {
    let totalPriceVal = 0;
    cartProducts.forEach(item => {
        totalPriceVal += Math.ceil(item.price) * item.count;
    })
    totalPrice.textContent = 'Total Price Is : $' + totalPriceVal;
}

function updateCart() {
    drawCart();
    localStorage.setItem(
        "cartProducts",
        JSON.stringify(cartProducts)
    );
}
function updateFavorite() {
    drawFavorite();
    localStorage.setItem(
        "favorite",
        JSON.stringify(favorite)
    );
}
function drawCart() {
    calcTotalPrice();
    let htmlCart = cartProducts.map(item => {

        return `
        <div class="mr-3 flex flex-col gap-3 bg-gray-900 rounded-2xl py-2 px-3 border border-gray-800 text-white hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/20 hover:-translate-y-2 transition-all duration-300">
        <div class="relative">

        <img src="${item.imageURL}"
            alt="${item.title}"
            class="w-full h-80 object-cover">


        <span class="absolute top-4 left-4 bg-yellow-500 text-gray-900 text-sm font-bold px-3 py-1 rounded-full">
            $${item.price}
        </span>

    </div>
            <div class="flex items-center justify-between">
                <p>${item.title}</p>
                <p class="full_price">
                    Price: $${(Math.ceil(item.price)) * item.count}

                </p>
            </div>

            <div class="flex items-center justify-between">

                <button class="px-5 rounded-full bg-transparent border border-white text-lg flex items-center justify-center text-white hover:border-red-600 hover:bg-red-600 transition-all duration-300"
                    onclick="minus(${item.id}, this)">
                    -
                </button>

                <p class="counter_in">
                    ${item.count}
                </p>

                <button class="px-5 rounded-full bg-transparent border border-white text-lg flex items-center justify-center text-white hover:border-green-600 hover:bg-green-600 transition-all duration-300"
                    onclick="plus(${item.id}, this)">
                    +
                </button>

            </div>
            <button
    class="mt-5 w-full bg-red-600 text-white hover:bg-red-700 py-3 rounded-lg font-semibold transition remove_from_cart_btn"
    onclick="removeFromCart(${item.id})">
    <i class="fa-solid fa-trash-can"></i> Remove
</button>

        </div>
        `;

    }).join("");

    cartProductDiv.innerHTML = htmlCart;
}


function drawFavorite() {
    let htmlFav = favorite.map(item => {

        return `
        <div class="mr-3 flex flex-col gap-3 bg-gray-900 rounded-2xl py-2 px-3 border border-gray-800 text-white hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/20 hover:-translate-y-2 transition-all duration-300">

        <div>

        <img src="${item.imageURL}"
            alt="${item.title}"
            class="w-full h-80 object-cover">


    </div>
    <div>
        <h3 class="text-xl font-bold text-white">
            ${item.title}
        </h3>

        <p class="text-gray-400 mt-2">
            ${item.cat}
        </p>

            <button
    class="mt-5 w-full bg-red-600 text-white hover:bg-red-700 py-3 rounded-lg font-semibold transition remove_from_cart_btn"
    onclick="removeFromFavorite(${item.id})">
    <i class="fa-solid fa-heart-crack"></i> Remove
</button>
    </div>

        </div>
        `;

    }).join("");

    favProductDiv.innerHTML = htmlFav;
}

function removeFromFavorite(id) {
    favorite = favorite.filter(item => item.id !== id);
    updateFavorite();
}

function removeFromCart(id) {
    cartProducts = cartProducts.filter(item => item.id !== id);
    updateCart();
};

function plus(id) {
    let selectedGame = cartProducts.find(game => game.id === id);
    selectedGame.count++;
    updateCart()
}

function minus(id) {
    let selectedGame = cartProducts.find(item => item.id === id);

    if (selectedGame.count > 1) {
        selectedGame.count--;
    }

    updateCart()
};

drawCart();
drawFavorite();