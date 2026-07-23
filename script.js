function shopNow() {
    document.querySelector(".products").scrollIntoView({
        behavior: "smooth"
    });
}

const search = document.querySelector(".search");

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