// ----------------------------------------------------
// 1. Firebase Modules Import
// ----------------------------------------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// ----------------------------------------------------
// 2. Navigation & Sidebar Functions (Window Global Scope)
// ----------------------------------------------------
window.openMenu = function() {
  const sideMenu = document.getElementById("sideMenu");
  if (sideMenu) {
    sideMenu.style.width = "280px";
  }
};

window.closeMenu = function() {
  const sideMenu = document.getElementById("sideMenu");
  if (sideMenu) {
    sideMenu.style.width = "0";
  }
};

window.shopNow = function() {
  const products = document.querySelector(".products");
  if (products) {
    products.scrollIntoView({
      behavior: "smooth"
    });
  }
};

// ----------------------------------------------------
// 3. DOM Loaded Event Listeners (Search, Cart, Buy)
// ----------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {

  // Search Products Logic
  const search = document.querySelector(".search");
  if (search) {
    search.addEventListener("input", function () {
      const value = this.value.toLowerCase().trim();

      document.querySelectorAll(".product").forEach(function (product) {
        const titleElement = product.querySelector("h3");
        if (titleElement) {
          const name = titleElement.textContent.toLowerCase();
          if (name.includes(value)) {
            product.style.display = "";
          } else {
            product.style.display = "none";
          }
        }
      });
    });
  }

  // Add To Cart Logic
  document.querySelectorAll(".cart").forEach(function (button) {
    button.addEventListener("click", function () {
      const card = this.closest(".product");
      if (!card) return;

      const product = card.querySelector("h3") ? card.querySelector("h3").textContent : "Product";
      const price = card.querySelector(".price") ? card.querySelector(".price").textContent : "₹0";
      const img = card.querySelector("img") ? card.querySelector("img").src : "";

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart.push({
        title: product,
        price: price,
        image: img
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      alert(product + " cart me add ho gaya hai!");
    });
  });

  // Buy Now Logic
  document.querySelectorAll(".buy").forEach(function (button) {
    button.addEventListener("click", function () {
      const card = this.closest(".product");
      if (card) {
        const product = card.querySelector("h3") ? card.querySelector("h3").textContent : "Product";
        const price = card.querySelector(".price") ? card.querySelector(".price").textContent : "₹0";
        const img = card.querySelector("img") ? card.querySelector("img").src : "";

        let checkoutItems = [{
          title: product,
          price: price,
          image: img
        }];

        localStorage.setItem("checkoutItems", JSON.stringify(checkoutItems));
      }
      window.location.href = "checkout.html";
    });
  });

});
