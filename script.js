// ---------------------------
// Menu
// ---------------------------
window.openMenu = function () {
  const menu = document.getElementById("sideMenu");
  if (menu) menu.style.width = "280px";
};

window.closeMenu = function () {
  const menu = document.getElementById("sideMenu");
  if (menu) menu.style.width = "0";
};

// ---------------------------
// Shop Now
// ---------------------------
window.shopNow = function () {
  const products = document.querySelector(".products");
  if (products) {
    products.scrollIntoView({ behavior: "smooth" });
  }
};

// ---------------------------
// Add To Cart
// ---------------------------
window.addToCart = function (product, price, image) {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    product: product,
    price: price,
    image: image
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(product + " added to cart.");
};

// ---------------------------
// Buy Now
// ---------------------------
window.buyNow = function (product, price, image) {

  const checkoutItems = [{
    product: product,
    price: price,
    image: image
  }];

  localStorage.setItem("checkoutItems", JSON.stringify(checkoutItems));

  window.location.href = "address.html";
};

// ---------------------------
// Search
// ---------------------------
document.addEventListener("DOMContentLoaded", () => {

  const search = document.getElementById("searchInput");

  if (search) {
    search.addEventListener("keyup", function () {

      const value = this.value.toLowerCase();

      document.querySelectorAll(".product").forEach((item) => {

        const title = item.querySelector("h3").textContent.toLowerCase();

        item.style.display = title.includes(value) ? "" : "none";

      });

    });
  }

});