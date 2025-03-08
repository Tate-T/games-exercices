let count = 0;
let timeLeft = 50;
let gameActive = false;
let timerInterval;
let preparationTime = 10;
let startTime;
const clickLimit = 3300;

const startButton = document.getElementById("start-button");
const timerDisplay = document.getElementById("timer");
const clickArea = document.getElementById("click-area");
const clickCount = document.getElementById("click-count");
const clicksText = document.getElementById("clicks-text");
const resultDisplay = document.getElementById("result");
const statusText = document.getElementById("status-text");
const phaseDescription = document.getElementById("phase-description");

setTimeout(() => { startButton.removeAttribute("disabled"); }, 3000);

function startGame() {
    count = 0;
    timeLeft = 50;
    gameActive = false;
    clickCount.textContent = count;
    resultDisplay.textContent = "";
    statusText.textContent = "Підготовча фаза";
    clickArea.classList.remove("clicker__click-area--inactive", "clicker__click-area--post-war");
    clickArea.classList.add("clicker__click-area--preparation");
    clicksText.classList.add("clicker__clicks-text--hidden");
    phaseDescription.textContent = "У вас є 10с щоб підготуватися до бою.";
    timerDisplay.style.color = "blue";
    let prepTimer = preparationTime;
    timerDisplay.textContent = `00:${prepTimer}`;

    startButton.classList.add("clicker__start-button--hidden");

    let prepInterval = setInterval(() => {
        prepTimer--;
        timerDisplay.textContent = `00:${prepTimer < 10 ? '0' + prepTimer : prepTimer}`;
        if (prepTimer <= 0) {
            clearInterval(prepInterval);
            beginClickPhase();
        }
    }, 1000);
}

function beginClickPhase() {
    gameActive = true;
    startTime = new Date();
    statusText.textContent = "Активна фаза";
    clickArea.classList.remove("clicker__click-area--preparation", "clicker__click-area--post-war");
    clickArea.classList.add("clicker__click-area--active");
    clicksText.classList.remove("clicker__clicks-text--hidden");
    phaseDescription.textContent = "1 клік на поле = 50 клікам на U. Устигніть зробити 3300 кліків.";

    updateTimer();
}

function updateTimer() {
    timerDisplay.style.color = "green";

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `00:${timeLeft < 10 ? '0' + timeLeft : timeLeft}`;

        if (timeLeft <= 25) timerDisplay.style.color = "orange";

        if (timeLeft <= 10) timerDisplay.style.color = "red";

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function handleClick() {
    if (gameActive) {
        count += 50;
        clickCount.textContent = `${count}`;
        if (count >= clickLimit) {
            endGame();
        }
    }
}

function handleKeyPress(event) {
    if (gameActive && event.key === 'u') {
        count += 1;
        clickCount.textContent = `${count}`;
        if (count >= clickLimit) {
            endGame();
        }
    }
}

function endGame() {
    clearInterval(timerInterval);
    gameActive = false;
    clickArea.classList.remove("clicker__click-area--active");
    clickArea.classList.add("clicker__click-area--post-war");

    if (count < clickLimit) {
        statusText.textContent = "Після воєнна фаза";
        phaseDescription.textContent = "Зло перемогло, та нездавайся і добро його переможе.";
    } else {
        statusText.textContent = "Після воєнна фаза";
        phaseDescription.textContent = "Ви перемогли! Зло відступило, але ненадовго.";
    }

    clicksText.classList.add("clicker__clicks-text--hidden");

    startButton.classList.remove("clicker__start-button--hidden");
}

startButton.addEventListener("click", startGame);
clickArea.addEventListener("click", handleClick);
document.addEventListener("keydown", handleKeyPress);
