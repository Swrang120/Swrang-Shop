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

        let html = "";

        snapshot.forEach((child) => {

            const order = child.val();

            if (order.userId === user.uid) {

                html += `
                <div class="product">

                <h3>📦 ${order.orderId}</h3>

                <p><b>Name:</b> ${order.name}</p>

                <p><b>Payment:</b> ${order.payment}</p>

                <p><b>Status:</b> ${order.status}</p>

                <p><b>Date:</b> ${order.date}</p>

                </div>
                `;

            }

        });

        ordersList.innerHTML = html || "<h3>No Orders Found</h3>";

    });

});