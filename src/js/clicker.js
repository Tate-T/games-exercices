        let count = 0;
let timeLeft = 50;
let gameActive = false;
let timerInterval;
let preparationTime = 10;
let startTime;
const clickLimit = 3400; 

const startButton = document.getElementById("start-button");
const timerDisplay = document.getElementById("timer");
const clickArea = document.getElementById("click-area");
const clickCount = document.getElementById("click-count");
const clicksText = document.getElementById("clicks-text");
const resultDisplay = document.getElementById("result");
const stopButton = document.getElementById("stop-button");
const statusText = document.getElementById("status-text");
const phaseDescription = document.getElementById("phase-description");

function startGame() {
    count = 0;
    timeLeft = 50;
    gameActive = false;
    clickCount.textContent = count;
    resultDisplay.textContent = "";
    startButton.style.display = "none";
    stopButton.style.display = "block";
    statusText.textContent = "Підготовча фаза";
    clickArea.classList.add("preparation");
    clicksText.style.display = "none";
    phaseDescription.innerHTML = "Підготовча фаза - у вас є 10с щоб підготуватися або відмінити випробування.";
    let prepTimer = preparationTime;
    timerDisplay.textContent = `${prepTimer} сек`;
    timerDisplay.classList.add("blue-timer"); 

    let prepInterval = setInterval(() => {
        prepTimer--;
        timerDisplay.textContent = `${prepTimer} сек`;
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
    clickArea.classList.remove("preparation");
    clickArea.classList.add("active");
    clicksText.style.display = "block";
    phaseDescription.innerHTML = "Активна фаза - 1 клік на поле прирівнюється 50 клікам на клавішу U. Устигніть зробити 3300 кліків за 1хв.";
    updateTimer();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function updateTimer() {
    timerDisplay.textContent = `${timeLeft} сек`;
    timerDisplay.className = "timer " + (timeLeft > 30 ? "green" : timeLeft > 10 ? "yellow" : "red");
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
    let elapsedTime = Math.round((new Date() - startTime) / 1000);
    resultDisplay.textContent = count >= clickLimit ? `Ви виграли! Кліки: ${count} / Час: ${elapsedTime} сек` : `Ви програли! Кліки: ${count} / Час: ${elapsedTime} сек`;
    startButton.style.display = "block";
    stopButton.style.display = "none";
    clickArea.classList.remove("active");
    clickArea.classList.add("inactive");
    statusText.textContent = "Неактивна фаза";
    phaseDescription.innerHTML = "Неактивна фаза - натисніть на кнопку розпочати, щоб почати випробування.";
    clicksText.style.display = "none";
}

startButton.addEventListener("click", startGame);
clickArea.addEventListener("click", handleClick);
stopButton.addEventListener("click", endGame);
document.addEventListener("keydown", handleKeyPress);