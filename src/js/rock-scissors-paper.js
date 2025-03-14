const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const result = document.getElementById("rsp-result");
const checkResult = document.getElementById("check-result");
const personScore = document.getElementById("person-score");
const compScore = document.getElementById("comp-score");

let userChoice = null;
let peopleScore = 0;
let botScore = 0;

function clearActiveClasses() {
    rock.style.border = 0;
    paper.style.border = 0;
    scissors.style.border = 0;
}

rock.addEventListener("click", () => {
    userChoice = 1;
    clearActiveClasses();
    rock.style.border = "dashed gray";
});

paper.addEventListener("click", () => {
    userChoice = 2;
    clearActiveClasses();
    paper.style.border = "dashed gray";
});

scissors.addEventListener("click", () => {
    userChoice = 3;
    clearActiveClasses();
    scissors.style.border = "dashed gray";
});

function play(botAnswer) {
    let resultMessage;
    let botChoiceText = "";

    if (botAnswer === 1) {
        botChoiceText = "Комп'ютер вибрав Камінь";
    } else if (botAnswer === 3) {
        botChoiceText = "Комп'ютер вибрав Ножиці";
    } else if (botAnswer === 2) {
        botChoiceText = "Комп'ютер вибрав Папір";
    }

    if (userChoice === botAnswer) {
        result.style.color = 'black';
        resultMessage = "Нічия!";
    } else if (
        (userChoice === 1 && botAnswer === 3) ||
        (userChoice === 2 && botAnswer === 1) ||
        (userChoice === 3 && botAnswer === 2)
    ) {
        peopleScore++;
        personScore.textContent = peopleScore;
        resultMessage = "Ви виграли раунд!";
        result.style.color = 'green';
    } else {
        botScore++;
        compScore.textContent = botScore;
        result.style.color = 'red';
        resultMessage = "Комп'ютер виграв раунд!";
    }

    result.textContent = `${resultMessage}. ${botChoiceText}`;

    userChoice = null;
    clearActiveClasses();
}

checkResult.addEventListener("click", () => {
    if (userChoice !== null) {
        result.style.opacity = "1";

        let botAnswer = Math.floor(Math.random() * 3) + 1;
        play(botAnswer);
    } else {
        result.textContent = "Виберіть один із варіантів";
        result.style.color = 'black';
    }
});
