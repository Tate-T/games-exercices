const ball = document.querySelector(".football__ball");
const field = document.querySelector(".football__field");
const goalLeft = document.querySelector("#goal-left");
const goalCount = document.querySelector("#goal-count");
const timerDisplay = document.querySelector("#timer");
const startButton = document.querySelector(".football__start");
const stopButton = document.querySelector(".football__stop");

let goals = 0;
let isGoal = false;
let timerInterval;
let timeRemaining = 30;
let isTimerRunning = false;

field.onclick = function (event) {
    if (!isTimerRunning || isGoal) return;

    let fieldCoords = this.getBoundingClientRect();

    let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    };

    if (ballCoords.top < 0) ballCoords.top = 0;
    if (ballCoords.left < 0) ballCoords.left = 0;

    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
    }

    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';

    if (
        ballCoords.left + ball.clientWidth > goalLeft.offsetLeft &&
        ballCoords.left < goalLeft.offsetLeft + goalLeft.clientWidth &&
        ballCoords.top + ball.clientHeight > goalLeft.offsetTop &&
        ballCoords.top < goalLeft.offsetTop + goalLeft.clientHeight
    ) {
        isGoal = true;
        setTimeout(() => {
            goals++;
            goalCount.textContent = goals;
        }, 1000);

        setTimeout(resetBall, 3000);
    }
};

function resetBall() {
    let fieldCoords = field.getBoundingClientRect();

    let centerX = fieldCoords.left + (field.clientWidth / 2) - (ball.clientWidth / 2);
    let centerY = fieldCoords.top + (field.clientHeight / 2) - (ball.clientHeight / 2);

    if (centerX < fieldCoords.left) {
        centerX = fieldCoords.left;
    }

    if (centerY < fieldCoords.top) {
        centerY = fieldCoords.top;
    }

    if (centerX + ball.clientWidth > field.clientWidth + fieldCoords.left) {
        centerX = field.clientWidth + fieldCoords.left - ball.clientWidth;
    }

    if (centerY + ball.clientHeight > field.clientHeight + fieldCoords.top) {
        centerY = field.clientHeight + fieldCoords.top - ball.clientHeight;
    }

    ball.style.left = centerX - fieldCoords.left + 'px';
    ball.style.top = centerY - fieldCoords.top + 'px';

    isGoal = false;
}

function startTimer() {
    isTimerRunning = true;
    timerInterval = setInterval(() => {
        timeRemaining--;
        timerDisplay.textContent = timeRemaining + " сек";
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            goalCount.textContent = 0;
            goals = 0;
            stopButton.style.display = "none";
            startButton.style.display = "inline-block";
            isTimerRunning = false;

            resetTimer();
        }
    }, 1000);
    startButton.style.display = "none";
    stopButton.style.display = "inline-block";
}

function stopTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    startButton.style.display = "inline-block";
    stopButton.style.display = "none";
    goals = 0;
    goalCount.textContent = goals;
    timeRemaining = 30;
    timerDisplay.textContent = timeRemaining + " сек";
}

function resetTimer() {
    timeRemaining = 30;
    timerDisplay.textContent = timeRemaining + " сек";
    startTimer();
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
