let randNumb = Math.floor(Math.random() * 10); 

function checkGuess() {
  let user = parseInt(document.getElementById("guess").value);
  let message = document.getElementById("message");

  if (isNaN(user) || user < 0 || user > 9) {
    message.textContent = "Будь ласка, введіть число від 0 до 9!";
    message.classList.remove("win", "lose");
    return;
  }

  if (user === randNumb) {
    message.textContent = `Вітаю, ви вгадали число ${randNumb}!`;
    message.classList.remove("lose");
    message.classList.add("win");
  } else {
    message.textContent = `Ви програли, комп'ютер загадав ${randNumb}.`;
    message.classList.remove("win");
    message.classList.add("lose");
  }

  randNumb = Math.floor(Math.random() * 10);
}