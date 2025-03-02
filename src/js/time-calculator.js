const timeInput = document.querySelector(".time-calculator-input");
const timeOutput = document.querySelector(".time-calculator-time");
const timeForm = document.querySelector(".time-calculator-form");

timeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const timeInSeconds = parseInt(timeInput.value);

  if (Number.isInteger(timeInSeconds) && timeInSeconds >= 0) {
    const days = Math.floor(timeInSeconds / 86400);
    const hours = Math.floor((timeInSeconds % 86400) / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const formattedTime = `${days} дн. ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    timeOutput.textContent = formattedTime;
  } else {
    timeOutput.textContent = "Введіть число.";
  }

  timeInput.value = "";
});
