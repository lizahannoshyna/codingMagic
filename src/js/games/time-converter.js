const outputDays = document.getElementById("time-converter__output-days");
const outputHours = document.getElementById("time-converter__output-hours");
const outputMinutes = document.getElementById("time-converter__output-minutes");
const outputSeconds = document.getElementById("time-converter__output-seconds");

const input = document.getElementById("time-converter__input");
const button = document.getElementById("time-converter__submit");

const convertTime = () => {
    const seconds = input.value || 0;
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const remainingSeconds = seconds % 60;

    outputDays.textContent = days.toString().padStart(2, '0');
    outputHours.textContent = hours.toString().padStart(2, '0');
    outputMinutes.textContent = minutes.toString().padStart(2, '0');
    outputSeconds.textContent = remainingSeconds.toString().padStart(2, '0');
}

button.addEventListener("click", () => {
    convertTime()
})