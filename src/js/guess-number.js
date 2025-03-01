const numberInput = document.getElementById("numbInput");
const checkButton = document.getElementById("numbButton");
const resultDisplay = document.getElementById("numb-result");

function getRandomNumber() {
    return Math.floor(Math.random() * 8) + 2;
}

let randomNumber = getRandomNumber(); 

checkButton.addEventListener("click", () => {
    const userGuess = parseInt(numberInput.value, 10);

    if (Number(userGuess) && userGuess >= 2 && userGuess <= 9) {
        if (userGuess === randomNumber) {
            resultDisplay.textContent = `Вітаю, ви вгадали число! (${randomNumber})`;
          resultDisplay.style.color = 'hsl(119, 100.00%, 30.00%)';
          resultDisplay.style.fontSize = '12px';
          resultDisplay.style.textAlign = 'right';
          resultDisplay.style.fontWeight = 400;       
        } else {
            resultDisplay.textContent = `Ви програли, комп’ютер загадав (${randomNumber})`;
          resultDisplay.style.color = 'rgb(144, 9, 0)';
          resultDisplay.style.fontSize = '12px';
          resultDisplay.style.textAlign = 'right';
          resultDisplay.style.fontWeight = 400; 
            randomNumber = getRandomNumber(); 
        }
    } else {
        resultDisplay.textContent = "Будь ласка, введіть число від 2 до 9.";
        resultDisplay.style.color = "hsl(19, 100.00%, 50.40%)";
    }
    numberInput.value = "";
});
