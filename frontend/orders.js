let ordersContainer = document.getElementById("ordersContainer");

let orders = JSON.parse(localStorage.getItem("orders")) || [];

orders.forEach(order => {

    ordersContainer.innerHTML += `

        <div class="product-card">

            <img src="${order.image}" width="150">

            <h3>${order.name}</h3>

            <p>Quantity: ${order.quantity}</p>

            <p>Total: ₹${order.total}</p>

            <p>Payment: ${order.payment}</p>

        </div>

    `;

});