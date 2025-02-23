const yearInput = document.getElementById("yearInput");
const checkButton = document.getElementById("checkButton");
const resultDisplay = document.getElementById("result");

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

checkButton.addEventListener("click", () => {
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
