R = "камень"
S = "ножницы"
P = "бумага"

function randomInteger(max){
  return Math.floor(Math.random() * max)
}

function rsp(UserChoice) {
  rndInt = randomInteger(3)
  if (rndInt === 0){
    if (UserChoice === P){        //Scissors
      alert (`Поражение : ${UserChoice} VS ${S}`);
    }
    if (UserChoice === S){        //Scissors
      alert (`Ничья : ${UserChoice} VS ${S}`)
    }
    if (UserChoice === R){        //Scissors
      alert (`Победа : ${UserChoice} VS ${S}`)
    }
  }

  else if (rndInt === 1){
    if (UserChoice === P){        //Rock
      alert (`Победа : ${UserChoice} VS ${R}`)
    }
    if (UserChoice === S){        //Rock
      alert (`Поражение : ${UserChoice} VS ${R}`)
    }
    if (UserChoice === R){        //Rock
      alert (`Ничья : ${UserChoice} VS ${R}`)
    }
  }

  else {
    if (UserChoice === P){        //Paper
      alert (`Ничья : ${UserChoice} VS ${P}`)
    }
    if (UserChoice === S){        //Paper
      alert (`Победа : ${UserChoice} VS ${P}`)
    }
    if (UserChoice === R){        //Paper
      alert (`Поражение : ${UserChoice} VS ${P}`)
    }
  }
}

var arr = ['камень', 'ножницы', 'бумага']

function getUserChoice(){
  var rndWord = Math.floor(Math.random() * arr.length)
  UserChoice = prompt("Камень! Ножницы! Бумага!", `${arr[rndWord]}`).toLowerCase()
  rsp(UserChoice)
}



function calc(){
  value_1 = Number(document.getElementById('value1').value)
  value_2 = Number(document.getElementById('value2').value)
  math_sign = document.getElementById('math-sign').value
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

function testRandomizer(){
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
event.preventDefault()

  num1 = document.getElementsByClassName('test-1-input')[0].innerHTML
  num2 = document.getElementsByClassName('test-2-input')[0].innerHTML
  let sign = document.getElementById("select-test").value
  switch(sign){
    case ">" : message = (num1 > num2) && (sign === ">") ? "ВЕРНО!!!" : "НЕВЕРНО((("; break;
    case "<" : message = (num1 < num2) && (sign === "<") ? "ВЕРНО!!!" : "НЕВЕРНО((("; break;
    case "=" : message = (num1 === num2) && (sign === "=") ? "ВЕРНО!!!" : "НЕВЕРНО((("; break;
  }
  if (message === "ВЕРНО!!!"){
    const newImg = document.createElement('img');
    newImg.src = 'https://cdn-icons-png.flaticon.com/512/5290/5290058.png';
    const body = document.getElementById('body');
    body.appendChild(newImg);
  }
}
