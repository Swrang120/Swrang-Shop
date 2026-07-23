document.querySelectorAll(".cart").forEach(function(button) {
  button.onclick = function() {
    localStorage.setItem("cart", JSON.stringify([
      {
        product: "Test Product",
        price: "₹100"
      }
    ]));
    alert("Saved");
  };
});