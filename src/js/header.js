const siteModeSelect = document.querySelector("#dark-mode-change");

siteModeSelect.addEventListener("click", (event) => {
  if (siteModeSelect.src.includes("light-mode-change.webp")) {
    siteModeSelect.src = "./img/dark-mode-change.webp";
  } else {
    siteModeSelect.src = "./img/light-mode-change.webp";
  }
});

const arrowPO = document.querySelector(".interaktiv-item");
const butArrow = document.querySelector(".svg-interaktiv");

arrowPO.addEventListener("mouseover", (event) => {
  butArrow.style.opacity = 1;
  butArrow.style.visibility = "visible";
  butArrow.style.pointerEvents = "initial";
});

arrowPO.addEventListener("click", (event) => {
    butArrow.style.opacity = 0;
    butArrow.style.visibility = "hidden";
    butArrow.style.pointerEvents = "none";

});
