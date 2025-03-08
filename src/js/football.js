const ball = document.querySelector(".football__ball");
const field = document.querySelector(".football__field");
const goalLeft = document.querySelector("#goal-left");
const goalRight = document.querySelector("#goal-right");
const goalCount = document.querySelector("#goal-count");

let goals = 0;
let isGoal = false; // Прапор для перевірки, чи був забитий гол

field.onclick = function (event) {
    if (isGoal) return; // Якщо гол вже забито, не дозволяємо рухати м'яч

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

    // Перевірка, чи м'яч потрапив у ліві ворота
    if (
        ballCoords.left + ball.clientWidth > goalLeft.offsetLeft &&
        ballCoords.left < goalLeft.offsetLeft + goalLeft.clientWidth &&
        ballCoords.top + ball.clientHeight > goalLeft.offsetTop &&
        ballCoords.top < goalLeft.offsetTop + goalLeft.clientHeight
    ) {
        isGoal = true; // Встановлюємо прапор, що гол забитий
        setTimeout(() => {
            goals++; // Збільшуємо лічильник голів через 1 секунду
            goalCount.textContent = goals; // Оновлюємо текст з кількістю голів
        }, 1000);
        
        setTimeout(resetBall, 3000); // Після 3 секунд викликаємо resetBall()
    }

    // Перевірка, чи м'яч потрапив у праві ворота
    if (
        ballCoords.left + ball.clientWidth > goalRight.offsetLeft &&
        ballCoords.left < goalRight.offsetLeft + goalRight.clientWidth &&
        ballCoords.top + ball.clientHeight > goalRight.offsetTop &&
        ballCoords.top < goalRight.offsetTop + goalRight.clientHeight
    ) {
        isGoal = true; // Встановлюємо прапор, що гол забитий
        setTimeout(() => {
            goals++; // Збільшуємо лічильник голів через 1 секунду
            goalCount.textContent = goals; // Оновлюємо текст з кількістю голів
        }, 1000);
        
        setTimeout(resetBall, 1500); // Після 3 секунд викликаємо resetBall()
    }
};

// Функція для повернення м'яча в центр поля
function resetBall() {
    ball.style.left = '340px'; // Центр поля по горизонталі (600px / 2 - 50px / 2)
    ball.style.top = '82px'; // Центр поля по вертикалі (400px / 2 - 50px / 2)
    isGoal = false; // Скидаємо прапор, дозволяючи новий рух м'яча
}
