const input = document.getElementById("leap-year__input");
const button = document.getElementById("leap-year__submit");
const outputDisplay = document.querySelector(".leap-year__result");
const output = document.getElementById("leap-year__output");

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".leap-year__result").style.display = "none"
});

const isLeapYear = (year) => {
 if(year % 4 == 0) {
     return true;
 } else {
     return false;
 }
}

button.addEventListener("click", () => {
    const year = input.value;

    if(year <= 0) return;

    outputDisplay.style.display = "block";
    document.querySelector(".leap-year__content").style.justifyContent = "space-between"

    if(isLeapYear(year)) {
        output.textContent = "Ви народилися у високосний рік!"
        output.style.color = "#039900";
    } else {
        output.textContent = "Ви народилися не у високосний рік!"
        output.style.color = "#990000";
    }
})