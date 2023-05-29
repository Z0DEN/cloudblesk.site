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
    registrationForm.reset()
}
else{
  alert("Пароли не совпадают")
}
}

function createUserData(login, email, pass){
  const user = {
    login: `${login}`,
    email: `${email}`,
    password: `${pass}`
  }
  sendUserData(
    JSON.stringify(user)
  )
}


function sendUserData(user){
  const url = "/api/db/createUser"     //    /api/db/createUser
  fetch(url, {
    method: 'POST',
    body: user,
    headers: {
      'Content-type': 'application/json',
      // 'X-CSRFToken': getCookie('csrftoken') 
    }
  })
  .then(response => {
    if (response.ok){
      console.log('User created successfully');
      return response.json();
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

// function getCookie(name) {
//   let cookieValue = null;
//   if (document.cookie && document.cookie !== '') {
//       const cookies = document.cookie.split(';');
//       for (let i = 0; i < cookies.length; i++) {
//           const cookie = cookies[i].trim();
//           if (cookie.substring(0, name.length + 1) === (name + '=')) {
//               cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//               break;
//           }
//       }
//   }
//   return cookieValue;
// }