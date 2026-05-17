let cartItems = document.getElementById("cartItems");

let totalPrice = document.getElementById("totalPrice");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

displayCart();

// ============================
// DISPLAY CART
// ============================

function displayCart() {

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((product, index) => {

        const quantity = Number(product.quantity || 1);

        const price = Number(product.price);

        total += price * quantity;

        cartItems.innerHTML += `
        
            <div class="product-card">

                <img src="${product.image}" width="150">

                <h3>${product.name}</h3>

                <p>₹${price}</p>

                <div style="display:flex; justify-content:center; gap:10px; align-items:center; margin:10px 0;">

                    <button onclick="decreaseQuantity(${index})">
                        -
                    </button>

                    <span>${quantity}</span>

                    <button onclick="increaseQuantity(${index})">
                        +
                    </button>

                </div>

                <p>Total: ₹${price * quantity}</p>

                <button onclick="removeItem(${index})">
                    Remove
                </button>

            </div>
        
        `;
    });

    totalPrice.innerHTML = `Cart Total: ₹${total}`;
}

// ============================
// INCREASE QUANTITY
// ============================

function increaseQuantity(index){

    cart[index].quantity = Number(cart[index].quantity || 1);

    cart[index].quantity++;

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

// ============================
// DECREASE QUANTITY
// ============================

function decreaseQuantity(index){

    cart[index].quantity = Number(cart[index].quantity || 1);

    if(cart[index].quantity > 1){

        cart[index].quantity--;

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

// ============================
// REMOVE ITEM
// ============================

function removeItem(index){

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}