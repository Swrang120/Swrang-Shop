import { auth, db } from "./firebase.js";

window.paymentType = "";
window.paymentVerified = false;

const upiBtn = document.querySelector('input[value="upi"]');
const codBtn = document.querySelector('input[value="cod"]');
const upiBox = document.getElementById("upiBox");

upiBtn.onclick = () => {
  paymentType = "upi";
  upiBox.style.display = "block";
};

codBtn.onclick = () => {
  paymentType = "cod";
  upiBox.style.display = "none";
};

window.copyUPI = function () {
  navigator.clipboard.writeText("swrangboro48@nyes");
  alert("UPI ID Copied");
};

window.submitPayment = function () {
  const utr = document.getElementById("utr").value.trim();

  if (!utr) {
    alert("Please enter UTR Number");
    return;
  }

  paymentVerified = true;
  alert("Payment Verification Submitted");
};

window.placeOrder = async function () {
  alert("Next step me Firebase Order Save add karenge.");
};