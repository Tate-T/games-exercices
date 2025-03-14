let count = 0; 
let timeLeft = 110; 
let gameActive = false; 
let timerInterval;
let preparationTime = 10; 
let startTime;
const clickLimit = 10000; 
let bonusGiven = false;
let triplePointsActive = false; 
let doublePointsActive = false; 
let lastClickTime = 0; 
let comboClicks = 0; 
let freezeTimes = [50, 25]; 
let freezeActive = false; 
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
    timeLeft = 110;
    gameActive = false;
    bonusGiven = false;
    triplePointsActive = false;
    doublePointsActive = false;
    lastClickTime = 0;
    comboClicks = 0;
    clickCount.textContent = count;
    resultDisplay.textContent = "";
    statusText.textContent = "Підготовча фаза";
    clickArea.classList.remove("clicker__click-area--inactive", "clicker__click-area--post-war");
    clickArea.classList.add("clicker__click-area--preparation");
    clicksText.classList.add("clicker__clicks-text--hidden");
    phaseDescription.textContent = "Готуйтеся! Гра почнеться через 10 секунд.";
    timerDisplay.style.color = "rgb(0, 191, 255)"; // Початковий блакитний колір
    let prepTimer = preparationTime;
    timerDisplay.textContent = `00:${prepTimer}`;
    startButton.classList.add("clicker__start-button--hidden");
    let prepInterval = setInterval(() => {
        prepTimer--;
        timerDisplay.textContent = `00:${prepTimer < 10 ? '0' + prepTimer : prepTimer}`;
        timerDisplay.style.color = `rgb(0, ${128 + (prepTimer / 10) * 127}, 0)`; // Плавний перехід до зеленого
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
    clickArea.classList.remove("clicker__click-area--preparation");
    clickArea.classList.add("clicker__click-area--active");
    clicksText.classList.remove("clicker__clicks-text--hidden");
    phaseDescription.textContent = "Клікайте по полю, щоб набрати 15,000 очок і знищити зло!Час обмежений – 1 хв 50 сек, але ось ваші бонуси: x2 очки у перші 10 сек,. Якщо за 55 сек у вас менше 7,500 очок – отримаєте +375 очок і x3 множник на 10 сек. На 50с та 25с гра заморожується на 5 сек (кліки не рахуються), після чого ви отримуєте +500 очок. У останні 5 сек множник зростає в 4 рази. Штраф: якщо ви не клікаєте 3+ сек (після 2,000 очок), наступний клік -1,000 очок. Кожні 1,000 очок дають +100 очок і +3 сек.🔥 Готові до бою? ";
    updateTimer();
}
function updateTimer() {
    timerInterval = setInterval(() => {
        if (freezeActive) return; 
        timeLeft--;
        timerDisplay.textContent = `00:${timeLeft < 10 ? '0' + timeLeft : timeLeft}`;
        if (timeLeft > 55) {
            let progress = (110 - timeLeft) / 55;
            timerDisplay.style.color = `rgb(0, ${255 - progress * 127}, 0)`;
        } else if (timeLeft > 25) {
            let progress = (55 - timeLeft) / 30;
            timerDisplay.style.color = `rgb(${progress * 255}, ${255 - progress * 127}, 0)`; 
        } else {
            timerDisplay.style.color = "red";
        }
        if (freezeTimes.includes(timeLeft)) {
            activateFreeze();
        }
        if (timeLeft <= 5) {
            activateCrazyMode();
        }
        if (timeLeft <= 55 && count < 7500 && !bonusGiven) {
            giveBonus();
        }
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}
function activateFreeze() {
    freezeActive = true;
    clickArea.style.backgroundColor = "gray";
    timerDisplay.style.color = "gray";
    count += 500; 
    clickCount.textContent = `${count}`; 
    setTimeout(() => {
        freezeActive = false;
        clickArea.style.backgroundColor = "yellow";
        timerDisplay.style.color = "red";
    }, 5000); 
}

function activateCrazyMode() {
    triplePointsActive = true;
}

function giveBonus() {
    bonusGiven = true;
    count += 375;
    triplePointsActive = true;
    setTimeout(() => {
        triplePointsActive = false;
    }, 10000); 
    timeLeft += 10; 
    clickCount.textContent = `${count}`;
}
function handleClick() {
    if (gameActive && !freezeActive) {
        let currentTime = new Date().getTime();
        let elapsedTime = (currentTime - lastClickTime) / 1000;
        lastClickTime = currentTime;
        if (elapsedTime < 1) {
            comboClicks++;
            if (comboClicks >= 3) {
                count += 10; 
                comboClicks = 0;
            }
        } else {
            comboClicks = 1;
        }
        let points = triplePointsActive ? 80 : doublePointsActive ? 40 : (timeLeft <= 10 ? 40 : 20); 
        count += points;
         if (count >= 2000 && elapsedTime > 3) { 
            count -= 1000; 
        }
        clickCount.textContent = `${count}`;
        if (count >= clickLimit) {
            endGame();
        }
    }
}
function handleKeyPress(event) {
    if (event.key === "u" || event.key === "U") {
        if (gameActive && !freezeActive) {
            count -= 1;
            clickCount.textContent = `${count}`;
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