const siteModeImage = document.querySelector("#dark-mode-change");

siteModeImage.addEventListener("click", () => {
  const lightModeSrc = "./img/light-mode-change.webp";
  const darkModeSrc = "./img/dark-mode-change.webp";

  if (siteModeImage.src.endsWith("light-mode-change.webp")) {
    siteModeImage.src = darkModeSrc;
  } else {
    siteModeImage.src = lightModeSrc;
  }
});

const arrowPO = document.querySelector(".interaktiv-item");
const butArrow = document.querySelector(".svg-interaktiv");
const selectSec = document.querySelector(".sec-select");
const selectSecItem = document.querySelectorAll(".sec-select-item");  
const numerical = document.querySelectorAll("#numerical");
const playing = document.querySelectorAll("#playing");
const acquaintance = document.querySelectorAll("#acquaintance");

arrowPO.addEventListener("mouseover", () => {
  butArrow.style.opacity = 1;
  butArrow.style.visibility = "visible";
  butArrow.style.pointerEvents = "initial";
  selectSec.classList.add("visible");
});

arrowPO.addEventListener("click", () => {
  if (selectSec.classList.contains("visible")) {
    butArrow.style.opacity = 0;
    butArrow.style.visibility = "hidden";
    butArrow.style.pointerEvents = "none";
    selectSec.classList.remove("visible");
    numerical.forEach((item) => item.classList.remove("hidden"));
    playing.forEach((item) => item.classList.remove("hidden"));
    acquaintance.forEach((item) => item.classList.remove("hidden"));
  } else {
    selectSec.classList.add("visible");
  }
});

selectSecItem.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedOption = option.textContent.trim();

    numerical.forEach((item) => item.classList.add("hidden"));
    playing.forEach((item) => item.classList.add("hidden"));
    acquaintance.forEach((item) => item.classList.add("hidden"));

    switch (selectedOption) {
      case "Числовий":
        numerical.forEach((item) => item.classList.remove("hidden"));
        break;
      case "Ігровий":
        playing.forEach((item) => item.classList.remove("hidden"));
        break;
      case "Ознайомчий":
        acquaintance.forEach((item) => item.classList.remove("hidden"));
        break;
      default:
        break;
    }
  });
});
