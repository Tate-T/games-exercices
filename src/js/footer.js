const footerInput = document.querySelector('.footer__form-email');
const resultDisplay = document.querySelector('#footer-result');
const footerButton = document.querySelector('.footer__button');

function isCorrectEmail(email) {
  return email === '' || !email.includes('@');
}

footerButton.addEventListener('click', (event) => {
  event.preventDefault();

  const email = footerInput.value.trim();

  if (isCorrectEmail(email)) {
    resultDisplay.textContent = "Введіть коректний email!";
  } else {
    resultDisplay.textContent = "";
    footerInput.value = "";
  }
});
