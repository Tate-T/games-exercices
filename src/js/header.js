const arrowPO = document.querySelector(".interaktiv-item");
const butArrow = document.querySelector(".svg-interaktiv");
const selectSec = document.querySelector(".sec-select");
const selectSecItem = document.querySelectorAll(".sec-select-item");
const openModal = document.querySelectorAll(".open-modal");
const numerical = document.querySelectorAll("#numerical");
const playing = document.querySelectorAll("#playing");
const acquaintance = document.querySelectorAll("#acquaintance");
const siteModeImage = document.querySelector("#dark-mode-change");
const siteModeBut = document.querySelector(".dark-mode-change");
const body = document.body;
const header = document.querySelector("header");
const footer = document.querySelector("footer");

siteModeImage.addEventListener("click", () => {
  // const lightModeSrc = "./img/light-mode.webp";
  // const darkModeSrc = "./img/dark-mode.webp";

  const currentSrc = siteModeImage.getAttribute("src");

  if (
    currentSrc.includes(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQJ4OPSbEA_r3mykRuC7q5IZA7qvriDTr1EU4e1Jbh_JiM-53LAk6ukZ4fd_3vBBjgulI&usqp=CAU"
    )
  ) {
    siteModeImage.setAttribute(
      "src",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5aYdSnrutbuZupC6BJ8VvUJ-FJEJ_9Rn7jg&s"
    );
    siteModeBut.style.background = "darkgray";
    arrowPO.style.background = "darkgray";
    arrowPO.style.color = "#eee";
    body.classList.remove("dark-mode");
    header.classList.add("dark-mode");
    footer.classList.add("dark-mode");
    openModal.forEach((modal) => {
      modal.classList.add("dark-mode");
    });
  } else {
    siteModeImage.setAttribute(
      "src",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQJ4OPSbEA_r3mykRuC7q5IZA7qvriDTr1EU4e1Jbh_JiM-53LAk6ukZ4fd_3vBBjgulI&usqp=CAU"
    );
    siteModeBut.style.background = "#eee";
    arrowPO.style.background = "#eee";
    arrowPO.style.color = "#000";
    body.classList.add("dark-mode");
    header.classList.remove("dark-mode");
    footer.classList.remove("dark-mode");
    openModal.forEach((modal) => {
      modal.classList.remove("dark-mode");
    });
  }
});

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
