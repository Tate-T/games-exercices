const modalBackdrop = document.querySelector(".open-modal-backdrop");
const closeModalButtons = document.querySelectorAll("[data-open-modal-close]");
const inputField = document.querySelector(".open-modal__input");
const saveButton = document.querySelector(".open-modal__button");
const userNameSpan = document.querySelector(".header-hello-user span");
const displayResult = document.querySelector("#open-modal_result");

function closeModal() {
  modalBackdrop.style.display = "none";
}

saveButton.addEventListener("click", () => {
  const userName = inputField.value.trim();
  if (userName === "") {
    displayResult.textContent = "Введіть коректне ім'я!";
    return;
  } else {
    userNameSpan.textContent = userName;
    closeModal();
  }
});