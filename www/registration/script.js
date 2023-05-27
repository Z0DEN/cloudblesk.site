const registrationForm = document.querySelector('#registration-form');
const confirmationOverlay = document.querySelector('.confirmation-overlay');
const closePanelButton = document.querySelector('.close-panel');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  confirmationOverlay.style.display = 'flex'; 
  DataGathering()
});

closePanelButton.addEventListener('click', () => {
  confirmationOverlay.style.display = 'none';
});


function DataGathering(){
const login = document.getElementById('name').value
const email = document.getElementById('email').value
const pass = document.getElementById('password').value
const pass_conf = document.getElementById('pass_confirm').value
if (pass_conf === pass){
    createUserData(login, email, pass)
}
else{
  alert("Пароли не совпадают")
}
}

function createUserData(login, email, password){
  const user = {
    login: `${login}`,
    email: `${email}`,
    password: `${password}`
  }
  sendUserData(
    JSON.stringify(user)
  )
}

function sendUserData(user){
  url = "/api/db"
  fetch(url, {
    method: 'POST',
    body: user,
    headers: {
      'Content-type': 'application/json' 
    }
  })
  .then(response => {
    if (response.ok){
      console.log('User created successfully');
      // здесь можно добавить код, который будет выполнен после успешного создания пользователя
    }
    else{
      console.error('Error creating user');
      // здесь можно добавить код, который будет выполнен при ошибке создания пользователя
    }
  })
  .catch(error => {
    console.error('Error:', error);
  })
}