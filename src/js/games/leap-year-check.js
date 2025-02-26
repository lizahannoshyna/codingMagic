const input = document.getElementById("leap-year__input");
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

input.addEventListener("input", () => {
    const year = input.value;
    outputDisplay.style.display = "block";

    if(isLeapYear(year)) {
        output.textContent = "Ви народилися у високосний рік!"
        output.style.color = "#039900";
    } else {
        output.textContent = "Ви народилися не у високосний рік!"
        output.style.color = "#990000";
    }
})