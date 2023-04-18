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
    }
  }

  else if (rndInt === 1){    //Если машина выбрала камень
    if (UserChoice === P){        //Если пользоваетель выбрал бумагу
      alert (`Победа : ${UserChoice} VS ${R}`)
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
    }
    if (UserChoice === R){      //Если пользоваетель выбрал камень
      alert (`Поражение : ${UserChoice} VS ${P}`)
    }
  }
}


function getUserChoice(){
  var arr = ['камень', 'ножницы', 'бумага']  //массив для рандомного выбора пользователя в [prompt]
  var rndWord = Math.floor(Math.random() * arr.length)
  UserChoice = prompt("Камень! Ножницы! Бумага!", `${arr[rndWord]}`).toLowerCase()
  rsp(UserChoice)
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
    break;
  }
}

function testRandomizer(){      //Функция рандомайзер. Благодаря ей значения чисел в тесте могут совпадать с вероятностью 1 к 3.
  switch (randomInteger(3)){
    case 0: 
    input_1[0].innerHTML = randomInteger(1000000)
    input_2[0].innerHTML = randomInteger(1000000)
    break;
    case 1: 
    input_1[0].innerHTML = randomInteger(1000000)
    input_2[0].innerHTML = randomInteger(1000000)
    break;
    case 2:
    var int = randomInteger(1000000)
    input_1[0].innerHTML = int
    input_2[0].innerHTML = int
    break;
  }
}

var input_1 = document.getElementsByClassName("test-1-input")
var input_2 = document.getElementsByClassName("test-2-input")
testRandomizer()

function test(){
  num1 = document.getElementsByClassName('test-1-input')[0].innerHTML     //значение первого [span]
  num2 = document.getElementsByClassName('test-2-input')[0].innerHTML     //значение второго [span]
  let sign = document.getElementById("select-test").value     //значение знака [select]
  switch(sign){
    case ">" : test_check = (num1 > num2) && (sign === ">") ? true : false; break;     //проверка
    case "<" : test_check = (num1 < num2) && (sign === "<") ? true : false; break;     //проверка
    case "=" : test_check = (num1 === num2) && (sign === "=") ? true : false; break;   //проверка
  }

  const form = document.getElementById('test').style;                 //Получаем стили формы
  const img_checkbox = document.getElementById('checkbox').style;     //Получаем стили картинки галочки
  const img_cross = document.getElementById('cross').style;           //Получаем стили картинки крестика
  
  if (document.getElementById('fix_div').innerHTML != 'its a crutch'){      //Проверяем есть ли в невидимом элементе текст. Если да значит функция уже выполняеться
    if (test_check){      //Если пользователь ответил правильно
      img_checkbox.animation = 'appearance 3000ms ease-in-out';         //Запускаем анимацию появления для галочки.      Возможно костыль но по-другому не знаю как
      form.animation = 'appearance_checkbox_back 3000ms ease-in-out'    //Запускаем анимацию появления зеленого фона.    Возможно костыль но по-другому не знаю как
      document.getElementById('fix_div').innerHTML = 'its a crutch'     //вставляем в невидимый элемент текст 
    }
    else {
      img_cross.animation = 'appearance 3000ms ease-in-out';            //Иначе запускаем анимацию появления для крестика
      form.animation = 'appearance_cross_back 3000ms ease-in-out'       //и анимацию появления красного фона
      document.getElementById('fix_div').innerHTML = 'its a crutch'     //вставляем в невидимый элемент текст 
    }
    setTimeout(() => {      //Обновляем страницу для получения новых чисел
      window.location.reload();
    }, 3100);
  }
}