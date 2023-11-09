
document.addEventListener("DOMContentLoaded", function () {
    var p1 = document.getElementById("p1");
    var adressFormArrive = document.getElementById("adress-form-arrive");
    var adressForm = document.getElementById("adress-form");

    p1.addEventListener("click", function () {
        adressForm.style.display = "flex";
    });

    adressFormArrive.addEventListener("click", function (event) {
        event.preventDefault();
        adressForm.style.display = "flex";
    });
});
const adressClose = document.querySelector('.adress-close');
adressClose.addEventListener("click", function () {
    document.querySelector('.adress-form').style.display = "none";
});