// 1. Получить данные всех пользователей из https://reqres.in/api/users
fetch('https://reqres.in/api/users')
  .then(response => response.json())
  .then(data => {
    console.log('Данные всех пользователей:', data);
    const users = data.data;

    // 2. Вывести в консоль фамилии всех пользователей в цикле
    console.log('Фамилии всех пользователей:');
    for (const user of users) {
      console.log(`Фамилия пользователя: ${user.last_name}`);
    }

    // 3. Вывести все данные всех пользователей, фамилия которых начинается на W
    const filteredUsers = users.filter(user => user.last_name.startsWith('W')); 
    console.log('Данные пользователей, фамилия которых начинается на W:', filteredUsers);
    // Пользователей с фамилией на F нет, а так не интересно, там я видел ссылку на аватарку 
    // и захотел реализовать и вывод картинки а не просто ссылки

    // 4. Вывести следующее предложение: Наша база содержит данные следующих пользователей: 
    // и далее в этой же строке через запятую имена и фамилии всех пользователей. Использовать метод reduce
    const usersString = users.reduce((accumulator, user) => {
      return accumulator + `${user.first_name} ${user.last_name}, `;
    }, '');
    console.log(`Наша база содержит данные следующих пользователей: ${usersString}`);

    // 5. Вывести названия всех ключей в объекте пользователя.
    const user = users[0];
    const keys = Object.keys(user);
    console.log('Названия всех ключей в объекте пользователя:', keys);

    // Вывести результаты на страницу
    const task1Output = document.getElementById('task1-output');
    task1Output.textContent = JSON.stringify(data, null, 2);

    const task2Output = document.getElementById('task2-output');
    for (const user of users) {
      const lastNameItem = document.createElement('li');
      lastNameItem.textContent = `Фамилия пользователя: ${user.last_name}`;
      task2Output.appendChild(lastNameItem);
    }

    filteredUsers.forEach(user => {
      const task3Output = document.getElementById('task3-output');
      const userString = `id: ${user.id}\nemail: ${user.email}\nfirst_name: ${user.first_name}\nlast_name: ${user.last_name}\navatar: <img src="${user.avatar}" alt="Аватар пользователя ${user.first_name} ${user.last_name}" class = "avatar" width="100" height="100">\n`;
      const userElement = document.createElement('p');
      userElement.innerHTML = userString;
      task3Output.appendChild(userElement);
    });

    const task4Output = document.getElementById('task4-output');
    task4Output.textContent = `Наша база содержит данные следующих пользователей: ${usersString}`;

    const task5Output = document.getElementById('task5-output');
    for (const key of keys) {
      const keyItem = document.createElement('li');
      keyItem.textContent = key;
      task5Output.appendChild(keyItem);
    }  
  })
  .catch(error => console.error(error));

