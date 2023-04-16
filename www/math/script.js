R = "камень"
S = "ножницы"
P = "бумага"

function getRandomInt(UserChoice) {
  rndInt = String(Math.floor(Math.random() * 3))
  console.log(rndInt)
  if (rndInt === "0"){
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
  console.log(rndInt)
  if (rndInt === "1"){
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
  console.log(rndInt)
  if (rndInt === "2"){
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