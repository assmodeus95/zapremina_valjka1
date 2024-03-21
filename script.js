var button = document.getElementById("button");
var poluprecnik = document.getElementById("r");
var visina = document.getElementById("H");

button.addEventListener("click", () => {
    var summ = document.getElementById("rezultat");
    summ.value = Math.PI * poluprecnik.value * poluprecnik.value * visina.value;
});

