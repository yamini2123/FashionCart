// checkout.js

let finalTotal = document.getElementById("finalTotal");

let product = JSON.parse(localStorage.getItem("checkoutProduct"));
let orders = JSON.parse(localStorage.getItem("orders")) || [];

orders.push(orderDetails);

localStorage.setItem(
    "orders",
    JSON.stringify(orders)
);
displayCheckout();

// DISPLAY CHECKOUT
function displayCheckout(){

    let total = product.price * product.quantity;

    finalTotal.innerHTML = `

        <h2>${product.name}</h2>

        <img src="${product.image}" width="200">

        <p>Price: ₹${product.price}</p>

        <div style="display:flex; justify-content:center; gap:15px; align-items:center;">

            <button onclick="decreaseQuantity()">-</button>

            <span style="font-size:20px;">
                ${product.quantity}
            </span>

            <button onclick="increaseQuantity()">+</button>

        </div>

        <h2>Total Amount: ₹${total}</h2>

    `;
}

// INCREASE QUANTITY
function increaseQuantity(){

    product.quantity++;

    localStorage.setItem(
        "checkoutProduct",
        JSON.stringify(product)
    );

    displayCheckout();
}

// DECREASE QUANTITY
function decreaseQuantity(){

    if(product.quantity > 1){

        product.quantity--;

        localStorage.setItem(
            "checkoutProduct",
            JSON.stringify(product)
        );

        displayCheckout();
    }
}

// PLACE ORDER
function placeOrder(){

    let name = document.getElementById("name").value;

    let address = document.getElementById("address").value;

    let phone = document.getElementById("phone").value;

    let paymentMethod = document.querySelector(
        'input[name="payment"]:checked'
    );

    if(name === "" || address === "" || phone === ""){

        alert("Please fill all details");

        return;
    }

    if(!paymentMethod){

        alert("Please select payment method");

        return;
    }

    let total = product.price * product.quantity;

    let orderDetails = {

        image: product.image,

        name: product.name,

        quantity: product.quantity,

        total: total,

        customerName: name,

        address: address,

        phone: phone,

        payment: paymentMethod.value
    };

    localStorage.setItem(
        "orderDetails",
        JSON.stringify(orderDetails)
    );
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

orders.push(orderDetails);

localStorage.setItem(
    "orders",
    JSON.stringify(orders)
);

    alert(
        `Order Placed Successfully 🎉
        
Payment Method: ${paymentMethod.value}`
    );

    localStorage.removeItem("checkoutProduct");

    window.location.href = "order.html";
}