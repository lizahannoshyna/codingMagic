const inputs = document.querySelectorAll(".max-of-three__input");
const output = document.getElementById("max-of-three__output");

const findMax = () => {
    const num1 = Number(document.getElementById("max-of-three__input-1").value) || 0;
    const num2 = Number(document.getElementById("max-of-three__input-2").value) || 0;
    const num3 = Number(document.getElementById("max-of-three__input-3").value) || 0;

    output.textContent = Math.max(num1, num2, num3);
}

inputs.forEach((el) => {
    el.addEventListener("input", (e) => {
        findMax()
    })
})