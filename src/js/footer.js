const footerForm = document.querySelector('.footer__form');
const footerInput = document.querySelector('.footer__form-email');

footerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  footerInput.value = '';
});