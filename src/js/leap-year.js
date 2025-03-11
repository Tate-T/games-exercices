const yearInput = document.querySelector("#yearInput");
const checkButton = document.querySelector("#checkButton");
const resultDisplay = document.querySelector("#result");

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

checkButton.addEventListener("click", (event) => {
    event.preventDefault()
    const year = parseInt(yearInput.value, 10);

if (Number(year) && year > 0) {
    const isLeap = isLeapYear(year);
    resultDisplay.textContent = isLeap ? "Ви народилися у високосний рік!" : "Ви народилися не у високосний рік!";
    resultDisplay.style.color = isLeap ? "green" : "red";
} else {
    resultDisplay.textContent = "Будь ласка, введіть коректний рік.";
    resultDisplay.style.color = "darkred";
}
    yearInput.value = "";
});

yearInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    // Перевірка, чи натиснута клавіша Enter
    event.preventDefault(); // Запобігає введенню символа у поле

    const year = parseInt(yearInput.value, 10);

    if (!isNaN(year) && year > 0) {
      // Перевірка на коректне число
      const isLeap = isLeapYear(year);
      resultDisplay.textContent = isLeap
        ? "Ви народилися у високосний рік!"
        : "Ви народилися не у високосний рік!";
      resultDisplay.style.color = isLeap ? "green" : "red";
    } else {
      resultDisplay.textContent = "Будь ласка, введіть коректний рік.";
      resultDisplay.style.color = "darkred";
    }
  }
});
