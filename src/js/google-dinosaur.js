const imageGame = [
    "img/dino-game-go.webp",
    "img/dino-game-jump.webp",
    "img/dino-game-over.webp",
  ];
  
  const getImg = document.querySelector("#game-dino");
  
  let сI = 0;
  
  function nextImg() {
    const nI = сI % imageGame.length;
    сI++;
    return imageGame[nI];
  }
  
  document.addEventListener("keydown", (event) => {
    if (event.target && event.target.value !== undefined) {
      return;
    }
  
    event.preventDefault();
  
    if (event.code === "Space") {
      getImg.src = nextImg();
    }
  });
  