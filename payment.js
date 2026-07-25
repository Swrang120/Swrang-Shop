// Delivery Address
let address = JSON.parse(localStorage.getItem("deliveryAddress"));

if(address){

document.getElementById("addressBox").innerHTML=`
<b>${address.name}</b><br>
${address.mobile}<br>
${address.address}<br>
${address.city}, ${address.state}<br>
PIN : ${address.pin}
`;

}

// Cart Products
let cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

let html = "";

cart.forEach(function(item){

let price = Number(String(item.price).replace(/[₹,]/g,""));

total += price;

html += `
<div style="display:flex;justify-content:space-between;padding:10px;border-bottom:1px solid #ddd;">

<div>

<b>${item.product}</b><br>

₹${price.toLocaleString()}

</div>

</div>
`;

});

document.getElementById("orderSummary").innerHTML = html;

document.getElementById("totalPrice").innerHTML =
"₹"+total.toLocaleString();

function codMessage(){

alert("❌ Cash On Delivery is not available in your area.\n\nPlease pay using UPI.");

}

function verifyPayment(){

let utr=document.getElementById("utr").value.trim();

if(utr.length<8){

alert("Please enter valid UTR Number.");

return;

}

let orderId="MS"+Date.now();

localStorage.removeItem("cart");

alert(
"✅ Payment Successful\n\nOrder ID : "+orderId
);

window.location.href="index.html";

}