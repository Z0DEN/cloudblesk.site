R = "камень"
S = "ножницы"
P = "бумага"

function randomInteger(max){     //Функция возврващает рандомное число от 0 до [max]
  return Math.floor(Math.random() * max)
}


function rsp(UserChoice) {      //Фунция на основе рандомного значения от 0 до 3 выводит исход игры (поражение, победа, ничья), учитывая выбор пользователя (UserChoice)
  rndInt = randomInteger(3)
  if (rndInt === 0){    //Если машина выбрала ножницы
    if (UserChoice === P){        //Если пользоваетель выбрал бумагу
      alert (`Поражение : ${UserChoice} VS ${S}`);
    }
    if (UserChoice === S){        //Если пользоваетель выбрал ножницы
      alert (`Ничья : ${UserChoice} VS ${S}`)
    }
    if (UserChoice === R){        //Если пользоваетель выбрал камень
      alert (`Победа : ${UserChoice} VS ${S}`)
      user_score += 1000
    }
  }

  else if (rndInt === 1){    //Если машина выбрала камень
    if (UserChoice === P){        //Если пользоваетель выбрал бумагу
      alert (`Победа : ${UserChoice} VS ${R}`)
      user_score += 1000
    }
    if (UserChoice === S){        //Если пользоваетель выбрал ножницы
      alert (`Поражение : ${UserChoice} VS ${R}`)
    }
    if (UserChoice === R){        //Если пользоваетель выбрал камень
      alert (`Ничья : ${UserChoice} VS ${R}`)
    }
  }

  else { //Если машина выбрала бумагу
    if (UserChoice === P){      //Если пользоваетель выбрал бумагу
      alert (`Ничья : ${UserChoice} VS ${P}`)
    }
    if (UserChoice === S){      //Если пользоваетель выбрал ножницы
      alert (`Победа : ${UserChoice} VS ${P}`)
      user_score += 1000
    }
    if (UserChoice === R){      //Если пользоваетель выбрал камень
      alert (`Поражение : ${UserChoice} VS ${P}`)
    }
  }
  trp_div.backgroundColor = "rgba(255, 255, 255, 0)"
  trp_div.zIndex = "-999"
  alert('its iiiiiif brooooooo')
  span_balance.innerHTML = `${user_score}`
}

// Следующая функция абсолютно схожа с предыдущей, но написана с использованием кнструкции [switch]

function rsp_switch(UserChoice) {      //Фунция на основе рандомного значения от 0 до 3 выводит исход игры (поражение, победа, ничья), учитывая выбор пользователя (UserChoice)
  rndInt = randomInteger(3)
  switch (rndInt){
    case 0:
      switch (UserChoice){        //Scissors
        case P: alert (`Поражение : ${UserChoice} VS ${S}`); 
        break;
        case S: alert (`Ничья : ${UserChoice} VS ${S}`)
        break;
        case R: alert (`Победа : ${UserChoice} VS ${S}`);
        user_score += 1000;
        break;
      }
    break;
    case 1:
      switch (UserChoice){       //Paper
        case P: alert (`Ничья : ${UserChoice} VS ${P}`)
        break;
        case S: alert (`Победа : ${UserChoice} VS ${P}`)
        user_score += 1000;
        break;
        case R: alert (`Поражение : ${UserChoice} VS ${P}`)
        break;
      }
    break;
    case 2:
      switch (UserChoice){       //Rock
        case P: alert (`Победа : ${UserChoice} VS ${R}`);
        user_score += 1000;
        break;
        case S: alert (`Поражение : ${UserChoice} VS ${R}`)
        break;
        case R: alert (`Ничья : ${UserChoice} VS ${R}`)
        break;
      }
    break;
  }
  trp_div.backgroundColor = "rgba(255, 255, 255, 0)"
  trp_div.zIndex = "-999"
  alert('its a swiiiiitch brooooooo')
  span_balance.innerHTML = `${user_score}`
}

const trp_div = document.getElementById("transparent_div").style;           //Получаем 

function dialog_construction_choice(){      //Показываем диалоговое окно выбора конструкции
  trp_div.backgroundColor = "rgba(161, 113, 113, 0.493)"
  trp_div.zIndex = "999"
  window.myDialog.show()
}

function choice_switch(){
  window.myDialog_choice_switch.show()      //Если пользователь выбрал [switch]
}

function choice_if(){
  window.myDialog_choice_if.show()      //Если пользователь выбрал [if]
}


function calc(){      // Функция калькулятора
  value_1 = Number(document.getElementById('value1').value)     //значение первого [input]
  value_2 = Number(document.getElementById('value2').value)     //значение второго [input]
  math_sign = document.getElementById('math-sign').value        //значение знака [select]
  switch(math_sign){
    case "+" : 
    result = value_1 + value_2
    alert (`${value_1} + ${value_2} = ${result}`)
    break;
    case "-" : 
    result = value_1 - value_2
    alert (`${value_1} - ${value_2} = ${result}`)
    break;
    case "*" : 
    result = value_1 * value_2
    alert (`${value_1} * ${value_2} = ${result}`)
    break;
    case "/" : 
    result = value_1 / value_2
    alert (`${value_1} / ${value_2} = ${result}`)
    if (value_2 === '0'){
      alert("НЕЛЬЗЯ ДЕЛИТЬ НА НОЛЬ")
    }
    break;
    case "**" : 
    result = value_1**value_2
    alert (`${value_1} ** ${value_2} = ${result}`)
    break;
  }
  if (result === Infinity){
    user_score += -1000
  }
  else {
    user_score += 100
  }
  span_balance.innerHTML = `${user_score}`
}

function testRandomizer(){      //Функция рандомайзер. Благодаря ей значения чисел в тесте могут совпадать с вероятностью 1 к 3.
  switch (randomInteger(3)){
    case 0: 
    input_1[0].innerHTML = randomInteger(1000000)
    input_2[0].innerHTML = randomInteger(1000000)
    favicon = document.getElementById('favicon').setAttribute('href', 'https://img.icons8.com/office/256/geometry.png')     //рандомная фавиконка
    break;
    case 1: 
    input_1[0].innerHTML = randomInteger(1000000)
    input_2[0].innerHTML = randomInteger(1000000)
    favicon = document.getElementById('favicon').setAttribute('href', 'https://img.icons8.com/pulsar-color/256/trigonometry.png')    //рандомная фавиконка
    break;
    case 2:
    var int = randomInteger(1000000)
    input_1[0].innerHTML = int
    input_2[0].innerHTML = int
    favicon = document.getElementById('favicon').setAttribute('href', 'https://img.icons8.com/office/256/more-or-equal-2.png')      //рандомная фавиконка
    break;
  }
}

var input_1 = document.getElementsByClassName("test-1-input")
var input_2 = document.getElementsByClassName("test-2-input")
testRandomizer()

function test(sign){
  num1 = document.getElementsByClassName('test-1-input')[0].innerHTML     //значение первого [span]
  num2 = document.getElementsByClassName('test-2-input')[0].innerHTML     //значение второго [span]
  switch(sign){
    case ">" : test_check = (num1 > num2) && (sign === ">") ? true : false; break;     //проверка
    case "<" : test_check = (num1 < num2) && (sign === "<") ? true : false; break;     //проверка
    case "=" : test_check = (num1 === num2) && (sign === "=") ? true : false; break;   //проверка
    case "choice" : break;
  }

  
  if (test_check){      //Если пользователь ответил правильно
    const form = document.getElementById('test').style;                 //Получаем стили формы
    const img_checkbox = document.getElementById('checkbox').style;     //Получаем стили картинки галочки
    img_checkbox.animation = 'appearance 3000ms ease-in-out';         //Запускаем анимацию появления для галочки.      Возможно костыль но по-другому не знаю как
    form.animation = 'appearance_checkbox_back 3000ms ease-in-out'    //Запускаем анимацию появления зеленого фона.    Возможно костыль но по-другому не знаю как
    user_score += 500
    span_balance.innerHTML = `${user_score}`
  }
  else {
      const form = document.getElementById('test').style;                 //Получаем стили формы
      const img_cross = document.getElementById('cross').style;           //Получаем стили картинки крестика
      img_cross.animation = 'appearance 3000ms ease-in-out';            //Иначе запускаем анимацию появления для крестика
      form.animation = 'appearance_cross_back 3000ms ease-in-out'       //и анимацию появления красного фона
      user_score += -500
      span_balance.innerHTML = `${user_score}`
    }
    setTimeout(() => {      //Обновляем страницу для получения новых чисел
      const form = document.getElementById('test').style;                 //Получаем стили формы
      const img_cross = document.getElementById('cross').style;
      const img_checkbox = document.getElementById('checkbox').style
      form.animation = '1'
      img_cross.animation = '1'
      img_checkbox.animation = '1'
      testRandomizer();
    }, 3100);
  }


// 3 задание [WHILE], [FOR]🔽🔽🔽
// 3 задание [WHILE], [FOR]🔽🔽🔽
// 3 задание [WHILE], [FOR]🔽🔽🔽

window.user_score = 0

// while (user_score === 0){
//   span_bal = document.getElementById('balance')
//   span_bal.innerHTML = `${user_score}`
// }


// while (user_score < 2500){
  
// }

function rules_dialog(){
  trp_div.backgroundColor = "rgba(161, 113, 113, 0.493)"      //Добавляем розовый фон
  trp_div.zIndex = "999"      //поднимаем диалоговое окно наверх, чтобы работало
  window.show_rules.show()      //Показываем диалоговое окно
}

function reset(){
  trp_div.backgroundColor = "rgba(255, 255, 255, 0)"
  trp_div.zIndex = "-999"
  window.show_rules.close()
}


span_balance = document.getElementById('balance')
span_balance.innerHTML = `${user_score}`



// do {
//   span_bal.innerHTML = `${user_score}`
// } while (user_score < 2500);


if (user_score >= 2500){
  alert("Поздравляем!!! Вы победили")
}