const modalBackdrop = document.querySelector(".open-modal-backdrop");
const closeModalButtons = document.querySelectorAll("[data-open-modal-close]");
const inputField = document.querySelector(".open-modal__input");
const saveButton = document.querySelector(".open-modal__button");
const userNameSpan = document.querySelector(".header-hello-user span");

function closeModal() {
  modalBackdrop.style.display = "none";
}

closeModalButtons.forEach(button => {
  button.addEventListener("click", closeModal);
});

inputField.addEventListener("input", () => {
  if (inputField.value.trim() !== "") {
    saveButton.disabled = false;  // Активуємо кнопку
  } else {
    saveButton.disabled = true;   // Деактивуємо кнопку
  }
});

saveButton.addEventListener("click", () => {
  const userName = inputField.value.trim();
  if (userName) {
    userNameSpan.textContent = userName;
  }
  closeModal();
});