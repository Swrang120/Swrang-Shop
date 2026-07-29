import { auth, db } from "./firebase.js";

import {
  ref,
  onValue
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const ordersList = document.getElementById("ordersList");

auth.onAuthStateChanged((user) => {

    if (!user) {
        ordersList.innerHTML = "<h3>Please Login First</h3>";
        return;
    }

    const ordersRef = ref(db, "orders");

    onValue(ordersRef, (snapshot) => {

        if (!snapshot.exists()) {
            ordersList.innerHTML = "<h3>No Orders Found</h3>";
            return;
        }

        html += `
<div class="product">

<img src="${order.image}" alt="${order.product}">

<h3>${order.product}</h3>

<p><b>Order ID:</b> ${order.orderId}</p>

<p><b>Price:</b> ₹${order.price}</p>

<p><b>Name:</b> ${order.name}</p>

<p><b>Payment:</b> ${order.payment}</p>

<p><b>Status:</b> 🟡 ${order.status}</p>

<p><b>Date:</b> ${order.date}</p>

<button class="buy">Track Order</button>

</div>
`;

            }

        });

        ordersList.innerHTML = html || "<h3>No Orders Found</h3>";

    });

});