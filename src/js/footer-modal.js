const openFooterModalButton = document.querySelector("[data-footer-modal-open]");
const closeFooterModalButton = document.querySelector("[data-footer-modal-close]");
const modalBackdrop = document.querySelector(".backdrop");
const bodyElement = document.querySelector("body");

openFooterModalButton.addEventListener("click", (event) => {
    bodyElement.classList.add("show-modal");
    bodyElement.classList.add("no-scroll");
});

closeFooterModalButton.addEventListener("click", (event) => {
    bodyElement.classList.remove("show-modal");
    bodyElement.classList.remove("no-scroll");
});

modalBackdrop.addEventListener("click", (event) => {
    if (event.target === modalBackdrop) {
      bodyElement.classList.remove("show-modal");
      bodyElement.classList.remove("no-scroll");
    }
});