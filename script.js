function shopNow() {
  document.querySelector(".products").scrollIntoView({
    behavior: "smooth"
  });
}

const search = document.querySelector(".search");

if (search) {
  search.addEventListener("keyup", function () {
    let value = search.value.toLowerCase();
    let products = document.querySelectorAll(".product");

    products.forEach(function (item) {
      let text = item.innerText.toLowerCase();

      if (text.includes(value)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
}

const cartButtons = document.querySelectorAll(".cart");

cartButtons.forEach(function(button){
  button.addEventListener("click", function(){
    alert("✅ Product Added to Cart");
  });
});

const buyButtons = document.querySelectorAll(".buy");

buyButtons.forEach(function(button){
  button.addEventListener("click", function(){
    window.location.href = "checkout.html";
  });
});