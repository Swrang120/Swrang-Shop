import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
// Shop Now Button
function shopNow() {
  const products = document.querySelector(".products");
  if (products) {
    products.scrollIntoView({
      behavior: "smooth"
    });
  }
}

// Search Products
const search = document.querySelector(".search");

if (search) {
  search.addEventListener("input", function () {
    const value = this.value.toLowerCase();

    document.querySelectorAll(".product").forEach(function (product) {
      const name = product.querySelector("h3").textContent.toLowerCase();

      if (name.includes(value)) {
        product.style.display = "";
      } else {
        product.style.display = "none";
      }
    });
  });
}

// Add To Cart
document.querySelectorAll(".cart").forEach(function (button) {

  button.addEventListener("click", function () {

    const card = this.closest(".product");

    const product = card.querySelector("h3").textContent;
    const price = card.querySelector(".price").textContent;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
      product: product,
      price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product + " added to cart!");
  });

});

// Buy Now
document.querySelectorAll(".buy").forEach(function (button) {

  button.addEventListener("click", function () {
    window.location.href = "checkout.html";
  });

});
function openMenu(){
document.getElementById("sideMenu").style.width="260px";
}

function closeMenu(){
document.getElementById("sideMenu").style.width="0";
}
function openMenu() {
  document.getElementById("sideMenu").style.width = "280px";
}

function closeMenu() {
  document.getElementById("sideMenu").style.width = "0";
}