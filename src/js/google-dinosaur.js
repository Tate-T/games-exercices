const dinoPer = document.querySelector(".dino__per");
const cactus = document.querySelector(".dino__cactus");

let cactusAnimationInterval; // Для збереження інтервалу анімації кактуса

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

window.addEventListener("keydown", (event) => {
  if (event.code === "KeyJ" && cactus.style.right !== "910px") {
    cactus.style.transition = "3s cubic-bezier(0,-0.02,1,.99)";
    cactus.style.right = "910px";

    cactusAnimationInterval = setTimeout(() => {
      cactus.style.transition = "none";
      cactus.style.right = "200px";
    }, 3000);
  }
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
  clearTimeout(cactusAnimationInterval);
  cactus.style.transition = "none";
  cactus.style.right = "200px";
}

setInterval(checkCollision, 50);
