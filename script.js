function shopNow() {
  document.querySelector(".products").scrollIntoView({
    behavior: "smooth"
  });
}

// Search
const search = document.querySelector(".search");

if (search) {
  search.addEventListener("keyup", function () {
    let value = search.value.toLowerCase();
    let products = document.querySelectorAll(".product");

    products.forEach(function (item) {
      let text = item.innerText.toLowerCase();
      item.style.display = text.includes(value) ? "" : "none";
    });
  });
}

// Add To Cart
document.querySelectorAll(".cart").forEach(function(button){

  button.addEventListener("click", function(){

    const product = this.parentElement.querySelector("h3").innerText;
    const price = this.parentElement.querySelector(".price").innerText;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
      product: product,
      price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product + " Added To Cart");
  });

});

// Buy Now
document.querySelectorAll(".buy").forEach(function(button){

  button.addEventListener("click", function(){
    window.location.href = "checkout.html";
  });

});