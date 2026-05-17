let orderDetails = document.getElementById("orderDetails");

let order = JSON.parse(localStorage.getItem("orderDetails"));

orderDetails.innerHTML = `

    <img src="${order.image}" width="200">

    <h2>${order.name}</h2>

    <p>Quantity: ${order.quantity}</p>

    <p>Total Amount: ₹${order.total}</p>

    <p>Customer: ${order.customerName}</p>

    <p>Address: ${order.address}</p>

    <p>Phone: ${order.phone}</p>

    <p>Payment Method: ${order.payment}</p>

    <h2 style="color:green;">
        Order Confirmed ✅
    </h2>

`;