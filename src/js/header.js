const siteModeSelect = document.querySelector("#dark-mode-change");

siteModeSelect.addEventListener("click", () => {
  const lightModeSrc = "./img/light-mode-change.webp";
  const darkModeSrc = "./img/dark-mode-change.webp";

  if (siteModeSelect.src.includes("light-mode-change.webp")) {
    siteModeSelect.src = darkModeSrc;
  } else {
    siteModeSelect.src = lightModeSrc;
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
