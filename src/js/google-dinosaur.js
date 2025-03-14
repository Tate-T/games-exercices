const dinoPer = document.querySelector(".dino__per");
const cactus = document.querySelector(".dino__cactus");

let cactusAnimationInterval;
let moveCactus = 200; // Зберігаємо початкове значення для змінної

window.addEventListener("keydown", (event) => {
  if (event.code === "KeyJ") {
    dinoPer.style.bottom = "120px";
  }
});

window.addEventListener("keyup", (event) => {
  if (event.code === "KeyJ") {
    dinoPer.style.bottom = "37px";
  }
});

const dinoStart = document.querySelector(".dino__start");

dinoStart.addEventListener("click", (event) => {
  if (cactusAnimationInterval) return;

  cactusAnimationInterval = setInterval(() => {
    moveCactus += 1;
    cactus.style.right = `${moveCactus}px`;
    if (moveCactus >= 900) {
      moveCactus = 200;
    }
  }, 1);

  // if (event.code === "KeyS" && cactus.style.right !== "910px") {
  //   cactus.style.transition = "3s cubic-bezier(0,-0.02,1,.99)";
  //   cactus.style.right = "910px";
  //   cactusAnimationInterval = setInterval(() => {
  //     cactus.style.transition = "none";
  //     cactus.style.right = "200px";
  //   }, 5000);
  // }
});

function checkCollision() {
  const dinoRect = dinoPer.getBoundingClientRect();
  const cactusRect = cactus.getBoundingClientRect();

  if (
    dinoRect.right > cactusRect.left &&
    dinoRect.left < cactusRect.right &&
    dinoRect.bottom > cactusRect.top &&
    dinoRect.top < cactusRect.bottom
  ) {
    stopCactusAnimation();
  }
}

function stopCactusAnimation() {
  clearInterval(cactusAnimationInterval);
  cactusAnimationInterval = null;
  cactus.style.right = "200px";
  moveCactus = 200; // скидаємо значення moveCactus
}

setInterval(checkCollision, 50);
