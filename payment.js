function showPayment() {

  let name = document.getElementById("name").value.trim();
  let mobile = document.getElementById("mobile").value.trim();
  let address = document.getElementById("address").value.trim();
  let city = document.getElementById("city").value.trim();
  let state = document.getElementById("state").value.trim();
  let pin = document.getElementById("pin").value.trim();

  if (!name || !mobile || !address || !city || !state || !pin) {
    alert("⚠️ Please fill all delivery details.");
    return;
  }

  document.querySelector(".container").style.display = "none";
  document.getElementById("paymentBox").style.display = "block";

  // Cart se total amount nikaalo
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  cart.forEach(function(item){
    total += Number(String(item.price).replace(/[₹,]/g,""));
  });

  document.getElementById("amount").innerText =
    "₹" + total.toLocaleString();
}

function codMessage(){
  alert("❌ Cash on Delivery is not available in your area.\n\nPlease use UPI Payment.");
}

function verifyPayment(){

  let utr = document.getElementById("utr").value.trim();

  if(utr.length < 8){
    alert("⚠️ Please enter a valid UTR / Transaction ID.");
    return;
  }

  let orderId = "MS" + Date.now();

  alert(
    "✅ Payment Verification Submitted!\n\n" +
    "Order ID: " + orderId +
    "\n\nThank you for shopping with MS Shopping."
  );

  localStorage.removeItem("cart");

  window.location.href = "index.html";
}