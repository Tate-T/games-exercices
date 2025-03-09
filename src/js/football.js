const ball = document.querySelector(".football__ball");
const field = document.querySelector(".football__field");
const goalLeft = document.querySelector("#goal-left");
const goalRight = document.querySelector("#goal-right");
const goalCount = document.querySelector("#goal-count");

let goals = 0;
let isGoal = false; 

field.onclick = function (event) {
    if (isGoal) return; 

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

    
    if (
        ballCoords.left + ball.clientWidth > goalRight.offsetLeft &&
        ballCoords.left < goalRight.offsetLeft + goalRight.clientWidth &&
        ballCoords.top + ball.clientHeight > goalRight.offsetTop &&
        ballCoords.top < goalRight.offsetTop + goalRight.clientHeight
    ) {
        isGoal = true;
        setTimeout(() => {
            goals++;
            goalCount.textContent = goals;
        }, 1000);
        
        setTimeout(resetBall, 1500);
    }
};
function resetBall() {
    ball.style.left = '340px';
    ball.style.top = '82px';
    isGoal = false;
}
