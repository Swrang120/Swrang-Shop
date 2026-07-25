// ---------------------------
// Navigation
// ---------------------------

window.openMenu = function () {
  const menu = document.getElementById("sideMenu");
  if (menu) menu.style.width = "280px";
};

window.closeMenu = function () {
  const menu = document.getElementById("sideMenu");
  if (menu) menu.style.width = "0";
};

window.shopNow = function () {
  const products = document.querySelector(".products");
  if (products) {
    products.scrollIntoView({
      behavior: "smooth"
    });
  }
};

// ---------------------------
// Page Loaded
// ---------------------------

document.addEventListener("DOMContentLoaded", function () {

  // Search
  const search = document.getElementById("searchInput");

  if (search) {

    search.addEventListener("keyup", function () {

      const value = this.value.toLowerCase();

      document.querySelectorAll(".product").forEach(function (item) {

        const name = item.querySelector("h3").textContent.toLowerCase();

        if (name.includes(value)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }

      });

    });

  }

  // Add To Cart

  document.querySelectorAll(".cart").forEach(function (btn) {

    btn.addEventListener("click", function () {

      const card = this.closest(".product");

      if (!card) return;

      const product = card.querySelector("h3").innerText;
      const price = card.querySelector(".price").innerText;
      const image = card.querySelector("img").src;

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart.push({
        product: product,
        price: price,
        image: image
      });

      localStorage.setItem("cart", JSON.stringify(cart));

      alert(product + " added to cart.");

    });

  });

  // Buy Now

  document.querySelectorAll(".buy").forEach(function (btn) {

    btn.addEventListener("click", function () {

      const card = this.closest(".product");

      if (!card) return;

      const product = card.querySelector("h3").innerText;
      const price = card.querySelector(".price").innerText;
      const image = card.querySelector("img").src;

      const checkoutItems = [{
        product: product,
        price: price,
        image: image
      }];

      localStorage.setItem(
        "checkoutItems",
        JSON.stringify(checkoutItems)
      );

      window.location.href = "address.html";

    });

  });

});