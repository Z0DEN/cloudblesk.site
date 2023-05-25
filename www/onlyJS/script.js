const body = document.querySelector('body');
//создаем контейнер [grid]
const container = document.createElement('div');
container.classList.add('grid-container');

//создаем элементы контейнера
for (let i = 1; i <= 18; i++){
  const item = document.createElement('div');
  item.classList.add('grid-item');
  container.appendChild(item);      //добавляем каждый элемент в контейнер
};

// Добавляем элемент на страницу
body.appendChild(container);

// Создаем поле ввода
const input = document.createElement('input');
input.setAttribute('type', 'text');
input.classList.add('input');
input.addEventListener('input', () => {
  // Устанавливаем текстовое содержимое элемента h2 с задержкой в 300 мс
  setTimeout(() => {
    h2.textContent = input.value;
  }, 300);
});

// Добавляем элемент на страницу
body.appendChild(input);

// Создаем элемент h2
const h2 = document.createElement('h2');
h2.textContent = input.value;

// Добавляем элемент на страницу
body.appendChild(h2);


// Создаем кнопку
const button = document.createElement('button');
button.textContent = '1';
let count = 1;
button.classList.add('button');
button.addEventListener('click', () => {
  // Увеличиваем число на 1 и устанавливаем его на кнопке
  count++;
  button.textContent = count;
  count % 2 === 0 ? input.style.animationPlayState = 'running' : input.style.animationPlayState = 'paused';
});

// Добавляем элемент на страницу
body.appendChild(button);

const grid_item = document.querySelectorAll('.grid-item');

// Создаем квадратный блок
const block = document.createElement('div');
block.classList.add('fill');
let isRound = false;
block.addEventListener('click', () => {
  // Меняем форму блока на круг или квадрат в зависимости от его текущей формы
  if (isRound) {
    isRound = false;
    block.classList.remove('round');
    for (let i = 0; i < grid_item.length; i++) {
      grid_item[i].classList.remove('round');
    };
  } else {
    isRound = true;
    block.classList.add('round');
    for (let i = 0; i < grid_item.length; i++) {
      grid_item[i].classList.add('round') ;
    };
  };
});

// Добавляем элемент на страницу
body.appendChild(block);