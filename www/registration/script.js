const form = document.querySelector('form');
const confirmation = document.createElement('div');
confirmation.classList.add('confirmation');
confirmation.textContent = 'Thank you for registering!';

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name');
  const email= document.querySelector('#email');
  const password = document.querySelector('#password');
  let isValid = true;

  if (name.value === '') {
    name.setCustomValidity('Please enter your name');
    isValid = false;
  } else {
    name.setCustomValidity('');
  }

  if (email.value === '') {
    email.setCustomValidity('Please enter your email address');
    isValid = false;
  } else {
    email.setCustomValidity('');
  }

  if (password.value === '') {
    password.setCustomValidity('Please enter your password');
    isValid = false;
  } else {
    password.setCustomValidity('');
  }

  if (isValid) {
    form.appendChild(confirmation);
  }
});