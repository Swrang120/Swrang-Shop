import { auth, db } from "./firebase.js";

import {
  ref,
  set
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

let paymentType = "";
let paymentVerified = false;

// Payment Option
document.querySelector('input[value="upi"]').onclick = function () {
    paymentType = "UPI";
    document.getElementById("upiBox").style.display = "block";
};

document.querySelector('input[value="cod"]').onclick = function () {
    paymentType = "COD";
    document.getElementById("upiBox").style.display = "none";
};

// Copy UPI
window.copyUPI = function () {
    navigator.clipboard.writeText("swrangboro48@nyes");
    alert("UPI ID Copied");
};

// Verify Payment
window.submitPayment = function () {

    let utr = document.getElementById("utr").value.trim();

    if (utr == "") {
        alert("Enter UTR Number");
        return;
    }

    paymentVerified = true;
    alert("Payment Verification Submitted");
};

// Place Order
window.placeOrder = async function () {

    if (paymentType == "") {
        alert("Select Payment Method");
        return;
    }

    if (paymentType == "UPI" && paymentVerified == false) {
        alert("Submit UTR First");
        return;
    }

    const user = auth.currentUser;

    if (!user) {
        alert("Please Login First");
        return;
    }

    // Order ID
    const orderId =
        "MS" +
        Date.now().toString().slice(-8);

    const order = {

        orderId: orderId,

        userId: user.uid,

        email: user.email,

        name: document.getElementById("name").value,

        mobile: document.getElementById("mobile").value,

        address: document.getElementById("address").value,

        city: document.getElementById("city").value,

        state: document.getElementById("state").value,

        pin: document.getElementById("pin").value,

        payment: paymentType,

        status: "Pending",

        date: new Date().toLocaleString()

    };

    await set(
        ref(db, "orders/" + orderId),
        order
    );

    alert("🎉 Order Placed Successfully\n\nOrder ID : " + orderId);

    window.location.href = "orders.html";

};