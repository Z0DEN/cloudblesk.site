R = "камень"
S = "ножницы"
P = "бумага"

function getRandomInt(UserChoice) {
  rndInt = Math.floor(Math.random() * 3);
  console.log(rndInt)
  switch (rndInt){
    case 0:
      switch (UserChoice){        //Scissors
        case P: alert (`Поражение : ${UserChoice} VS ${S}`); 
        break;
        case S: alert (`Ничья : ${UserChoice} VS ${S}`)
        break;
        case R: alert (`Победа : ${UserChoice} VS ${S}`)
        break;
      }
    break;
    case 1:
      switch (UserChoice){       //Paper
        case P: alert (`Ничья : ${UserChoice} VS ${P}`)
        break;
        case S: alert (`Победа : ${UserChoice} VS ${P}`)
        break;
        case R: alert (`Поражение : ${UserChoice} VS ${P}`)
        break;
      }
    break;
    case 2:
      switch (UserChoice){       //Rock
        case P: alert (`Победа : ${UserChoice} VS ${R}`)
        break;
        case S: alert (`Поражение : ${UserChoice} VS ${R}`)
        break;
        case R: alert (`Ничья : ${UserChoice} VS ${R}`)
        break;
      }
    break;
  }
}


function rsp(){
  UserChoice = prompt("Камень! Ножницы! Бумага!").toLowerCase()
  getRandomInt(UserChoice)
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