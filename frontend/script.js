const productsContainer = document.querySelector(".products");

let products = [];

// ============================
// FETCH PRODUCTS FROM BACKEND
// ============================

async function getProducts() {

    const response = await fetch("http://localhost:3000/products");

    products = await response.json();

    displayProducts(products);
}

// ============================
// DISPLAY PRODUCTS
// ============================

function displayProducts(productsData) {

    productsContainer.innerHTML = "";

    productsData.forEach(product => {

        productsContainer.innerHTML += `

            <div class="product-card">

                <img src="${product.image}" alt="${product.name}">

                <h3>${product.name}</h3>

                <p>₹${product.price}</p>

                <button onclick="addToCart('${product._id}')">
                    Add to Cart
                </button>

            </div>

        `;
    });
}

// ============================
// ADD TO CART
// ============================

function addToCart(productId){

    const selectedProduct = products.find(
        product => product._id === productId
    );

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(selectedProduct);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product Added To Cart 🛒");
}

// ============================
// LOAD PRODUCTS
// ============================

getProducts();

// ============================
// SEARCH FUNCTIONALITY
// ============================

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {

    const searchText = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchText)
    );

    displayProducts(filteredProducts);

});