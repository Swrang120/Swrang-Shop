document.getElementById("addressForm").addEventListener("submit", function(e){

    e.preventDefault();

    const address = {
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        pin: document.getElementById("pin").value
    };

    localStorage.setItem("deliveryAddress", JSON.stringify(address));

    window.location.href = "payment.html";

});