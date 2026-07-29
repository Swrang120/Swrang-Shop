import { auth, db } from "./firebase.js";
import {
  ref,
  onValue,
  query,
  orderByChild,
  equalTo
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const ordersList = document.getElementById("ordersList");

auth.onAuthStateChanged((user) => {
  if (!user) {
    if (ordersList) ordersList.innerHTML = "<h3>Please Login First</h3>";
    return;
  }

  const ordersRef = ref(db, "orders");

  onValue(ordersRef, (snapshot) => {
    if (!snapshot.exists()) {
      if (ordersList) ordersList.innerHTML = "<h3>No Orders Found</h3>";
      return;
    }

    let html = "";
    const ordersData = snapshot.val();

    // Loop through all orders and filter by logged-in User ID
    Object.keys(ordersData).forEach((key) => {
      const order = ordersData[key];

      if (order.userId === user.uid) {
        
        // Status Badge Emoji
        let statusBadge = "🟡 Pending";
        if (order.status === "Confirmed") statusBadge = "🔵 Confirmed";
        if (order.status === "Shipped") statusBadge = "🟣 Shipped";
        if (order.status === "Delivered") statusBadge = "🟢 Delivered";

        html += `
          <div class="product" style="margin-bottom:15px; text-align:left;">
            <img src="${order.image}" alt="${order.product}" style="width:100px; height:100px; object-fit:cover; float:left; margin-right:15px; border-radius:8px;">
            <div style="overflow:hidden;">
              <h3 style="margin:0 0 5px 0;">${order.product}</h3>
              <p style="margin:2px 0;"><b>Order ID:</b> ${order.orderId}</p>
              <p style="margin:2px 0;"><b>Price:</b> ${order.price}</p>
              <p style="margin:2px 0;"><b>Status:</b> ${statusBadge}</p>
              <p style="margin:2px 0;"><b>Date:</b> ${order.date}</p>
              <p style="margin:2px 0;"><b>Payment:</b> ${order.payment}</p>
            </div>
            <div style="clear:both;"></div>
          </div>
        `;
      }
    });

    if (ordersList) {
      ordersList.innerHTML = html || "<h3>No Orders Found for Your Account</h3>";
    }
  });
});
