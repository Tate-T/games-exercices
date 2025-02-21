const closeOpenModalButton = document.querySelector("[data-open-modal-close]");
const openModalBackdrop = document.querySelector(".open-modal-backdrop");

closeOpenModalButton.addEventListener("click", (event) => {
    openModalBackdrop.classList.add("open-modal-is-hidden");
});