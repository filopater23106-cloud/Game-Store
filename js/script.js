const games = [
    {
        id: 1,
        title: "GTA V",
        cat: "Open World",
        price: 29.99,
        imageURL: "images/gta-v.jpg",
        count: 1
    },
    {
        id: 2,
        title: "Red Dead Redemption 2",
        cat: "Adventure",
        price: 39.99,
        imageURL: "images/red-dead-redemption-2.jpg",
        count: 1
    },
    {
        id: 3,
        title: "Elden Ring",
        cat: "RPG",
        price: 59.99,
        imageURL: "images/elden-ring.jpg",
        count: 1
    },
    {
        id: 4,
        title: "Marvel's Spider-Man Remastered",
        cat: "Action",
        price: 59.99,
        imageURL: "images/marvel-spider-man-remastered.jpg",
        count: 1
    },
    {
        id: 5,
        title: "God of War Ragnarök",
        cat: "Action",
        price: 69.99,
        imageURL: "images/god-of-war-ragnarok.jpg",
        count: 1
    },
    {
        id: 6,
        title: "Batman: Arkham Knight",
        cat: "Action",
        price: 19.99,
        imageURL: "images/batman-arkham-knight.jpg",
        count: 1
    },
    {
        id: 7,
        title: "Ghost of Tsushima",
        cat: "Action",
        price: 59.99,
        imageURL: "images/ghost-of-tsushima.jpg",
        count: 1
    },
    {
        id: 8,
        title: "Assassin's Creed Shadows",
        cat: "Action",
        price: 69.99,
        imageURL: "images/assassins-creed-shadows.jpg",
        count: 1
    },
    {
        id: 9,
        title: "Sekiro: Shadows Die Twice",
        cat: "Action",
        price: 59.99,
        imageURL: "images/sekiro-shadows-die-twice.jpg",
        count: 1
    },
    {
        id: 10,
        title: "Cyberpunk 2077",
        cat: "Open World",
        price: 49.99,
        imageURL: "images/cyberpunk-2077.jpg",
        count: 1
    },
    {
        id: 11,
        title: "Hogwarts Legacy",
        cat: "RPG",
        price: 59.99,
        imageURL: "images/hogwarts-legacy.jpg",
        count: 1
    },
    {
        id: 12,
        title: "The Witcher 3",
        cat: "RPG",
        price: 39.99,
        imageURL: "images/the-witcher-3.jpg",
        count: 1
    },
    {
        id: 13,
        title: "Baldur's Gate 3",
        cat: "RPG",
        price: 59.99,
        imageURL: "images/baldurs-gate-3.jpg",
        count: 1
    },
    {
        id: 14,
        title: "Clair Obscur: Expedition 33",
        cat: "RPG",
        price: 49.99,
        imageURL: "images/clair-obscur-expedition-33.jpg",
        count: 1
    },
    {
        id: 15,
        title: "Minecraft",
        cat: "Adventure",
        price: 29.99,
        imageURL: "images/minecraft.jpg",
        count: 1
    },
    {
        id: 16,
        title: "The Last of Us Part II",
        cat: "Adventure",
        price: 49.99,
        imageURL: "images/the-last-of-us-part-2.jpg",
        count: 1
    },
    {
        id: 17,
        title: "Resident Evil 4",
        cat: "Horror",
        price: 39.99,
        imageURL: "images/resident-evil-4.jpg",
        count: 1
    },
    {
        id: 18,
        title: "HITMAN World of Assassination",
        cat: "Action",
        price: 69.99,
        imageURL: "images/hitman-world-of-assassination.jpg",
        count: 1
    },
    {
        id: 19,
        title: "Call of Duty: Black Ops 7",
        cat: "FPS",
        price: 69.99,
        imageURL: "images/cod-black-ops-7.jpg",
        count: 1
    },
    {
        id: 20,
        title: "Helldivers 2",
        cat: "FPS",
        price: 39.99,
        imageURL: "images/helldivers-2.jpg",
        count: 1
    },
    {
        id: 21,
        title: "Forza Horizon 5",
        cat: "Racing",
        price: 49.99,
        imageURL: "images/forza-horizon-5.jpg",
        count: 1
    },
    {
        id: 22,
        title: "EA Sports FC 26", cat: "Sports",
        price: 69.99,
        imageURL: "images/ea-sports-fc-26.jpg",
        count: 1
    },
    {
        id: 23,
        title: "DRAGON BALL: Sparking! ZERO",
        cat: "Action",
        price: 69.99,
        imageURL: "images/dragon-ball-sparking-zero.jpg",
        count: 1
    },
    {
        id: 24,
        title: "Mortal Kombat 1",
        cat: "Action",
        price: 49.99,
        imageURL: "images/mortal-kombat-1.jpg",
        count: 1
    },
    {
        id: 25,
        title: "Tekken 8",
        cat: "Action",
        price: 69.99,
        imageURL: "images/tekken-8.jpg",
        count: 1
    },
    {
        id: 26,
        title: "Star Wars Jedi: Survivor",
        cat: "Action",
        price: 69.99,
        imageURL: "images/star-wars-jedi-survivor.jpg",
        count: 1
    },
    {
        id: 27,
        title: "Hollow Knight",
        cat: "Indie",
        price: 14.99,
        imageURL: "images/hollow-knight.jpg",
        count: 1
    },
    {
        id: 28,
        title: "Hades",
        cat: "Indie",
        price: 24.99,
        imageURL: "images/hades.jpg",
        count: 1
    }
];

let cards = document.querySelector("#cards");


let category = document.querySelector("#category");

let numberOfGames = document.querySelector(".numGames");

let counterSpam = document.querySelector("#counter");
let cartCounter;
function cartCounterFn() {

    cartCounter = cartProducts.reduce((sum, item) => {
        return sum + item.count;
    }, 0);

    if (cartCounter === 0) {
        counterSpam.classList.add("hidden");
    } else {
        counterSpam.classList.remove("hidden");
        counterSpam.textContent = cartCounter;
    }
}


function drawItems(category) {
    numberOfGames.textContent = category.length;
    cartCounterFn();


    let y = category.map((game) => {

        let inCart = cartProducts.find(item => item.id === game.id);

        let isFavorite = favorite.find(item => item.id === game.id);




        return `
<div class="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/20 hover:-translate-y-2 transition-all duration-300">

    <div class="relative">

        <img src="${game.imageURL}"
            alt="${game.title}"
            class="w-full h-80 object-cover">

        <button class="absolute top-4 right-4 bg-black/70 w-10 h-10 rounded-full flex items-center justify-center" onClick = "addToFav(${game.id} ,this)">
            <i class="${isFavorite ? "fa-solid text-red-500" : "far text-gray-300"} fa-heart hover:text-red-500 transition"></i>
        </button>

        <span class="absolute top-4 left-4 bg-yellow-500 text-gray-900 text-sm font-bold px-3 py-1 rounded-full">
            $${game.price}
        </span>

    </div>

    <div class="p-5">

        <h3 class="text-xl font-bold text-white">
            ${game.title}
        </h3>

        <p class="text-gray-400 mt-2">
            ${game.cat}
        </p>

        <button id="add_btn" class="${inCart ? "hidden" : ""} w-full mt-5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 py-2.5 rounded-xl font-bold text-white shadow-lg shadow-green-600/20 hover:shadow-green-600/40 transition-all duration-300 add_to_cart_btn" onClick="addToCart(${game.id} , this)">
                <i class="fas fa-cart-plus mr-2"></i> Add To Cart
        </button>
        <button class=" ${inCart ? "" : "hidden"} w-full mt-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 py-2.5 rounded-xl font-bold text-white shadow-lg shadow-red-600/20 hover:shadow-red-600/40 transition-all duration-300 remove_from_cart_btn" onclick="removeFromCart(${game.id}, this)">
                <i class="fas fa-times mr-2"></i> Remove
        </button>

    </div>

</div>
`;
    }).join("");
    cards.innerHTML = y;
}

let cartProductDiv = document.querySelector("#cart_product");


let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];

let favorite = JSON.parse(localStorage.getItem("favorite")) || [];




category.addEventListener("change", function () {
    if (category.value === "All") {
        drawItems(games);
    }
    else {
        let filterGames = games.filter(game => game.cat === category.value);
        drawItems(filterGames);
    }
});




let search = document.querySelector("#search");

let searchBtn = document.querySelector("#search_btn");


searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let searched = games.filter(game => game.title.toLowerCase().includes(search.value.trim().toLowerCase()));

    drawItems(searched);
});



let openCart = document.querySelector("#open_cart");

let cartProductContainer = document.querySelector("#cart_product_container");


openCart.addEventListener("click", () => {
    if (cartProductContainer.classList.contains("hidden")) {
        cartProductContainer.classList.remove("hidden");
    }
    else {
        cartProductContainer.classList.add("hidden");
    }
});

// Cart Message 

let cartMessage = document.querySelector("#cart_message")

function drawCart() {

    if (cartProducts.length !== 0) {

        cartMessage.textContent = "View All Products";

    } else if (favorite.length !== 0) {

        cartMessage.textContent = "View Favorite";

    }
    else {
        cartMessage.textContent = "Your Cart is Empty";

    }

    let y = cartProducts.map(item => {

        return `
        <div class="mr-3 flex flex-col gap-3 bg-gray-900 rounded-2xl py-2 px-3 border border-red-800 text-white">

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

        </div>
        `;

    }).join("");

    cartProductDiv.innerHTML = y;
}

function operations() {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

    drawCart();
    cartCounterFn();


}

function addToCart(id, button) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location = "login.html";
        return;
    }

    let addBtn = button;
    let parent = button.parentElement;
    let removeBtn = parent.querySelector(".remove_from_cart_btn");
    let selectedGame = games.find(game => game.id === id);

    cartProducts.push({ ...selectedGame });
    operations();
    


    addBtn.classList.add("hidden");
    removeBtn.classList.remove("hidden");
};

function removeFromCart(id, button) {
    cartProducts = cartProducts.filter(item => item.id !== id);
    operations();




    let parent = button.parentElement;
    let addBtn = parent.querySelector(".add_to_cart_btn");

    button.classList.add("hidden");
    addBtn.classList.remove("hidden");
};

function plus(id) {
    let selectedGame = cartProducts.find(game => game.id === id);
    selectedGame.count++;
    operations();



}

function minus(id) {
    let selectedGame = cartProducts.find(item => item.id === id);

    if (selectedGame.count > 1) {
        selectedGame.count--;
    }
    operations();


};


function addToFav(id, button) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location = "login.html";
        return;
    }

    let selectedGame = games.find(game => game.id === id);
    let favIcon = button.querySelector("i");

    if (favorite.find(fav => fav.id === id)) {
        favorite = favorite.filter(game => game.id !== id);
        localStorage.setItem("favorite", JSON.stringify(favorite));
        favIcon.classList.add("far");
        favIcon.classList.remove("fa-solid", "text-red-500");
    }
    else {
        favorite.push(selectedGame);
        localStorage.setItem("favorite", JSON.stringify(favorite));
        favIcon.classList.remove("far");
        favIcon.classList.add("fa-solid", "text-red-500");
    }
}


drawItems(games);
drawCart();
